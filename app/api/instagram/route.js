// Live Instagram feed proxy.
//
// Uses the Instagram Graph API (the post-2024 replacement for the deprecated
// Basic Display API). Requires an Instagram Business/Creator account linked
// to a Facebook Page and a long-lived access token with `instagram_basic`
// (or `instagram_business_basic`) scope.
//
// Configure the token in the v0 project as:
//   INSTAGRAM_ACCESS_TOKEN  (long-lived user token)
//
// If the token is missing or the upstream call fails, the route returns
// `{ media: [] }` and the UI falls back to a "Follow on Instagram" placeholder.

export const revalidate = 1800; // cache for 30 minutes

const FIELDS = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';

export async function GET(request) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') || '6', 10), 12);

  if (!token) {
    return Response.json(
      { media: [], error: 'missing_token' },
      { status: 200 },
    );
  }

  try {
    const url = `https://graph.instagram.com/me/media?fields=${FIELDS}&limit=${limit}&access_token=${encodeURIComponent(
      token,
    )}`;
    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) {
      const text = await res.text();
      console.log('[v0] instagram api non-ok', res.status, text);
      return Response.json({ media: [], error: 'upstream_error' });
    }
    const json = await res.json();
    const media = (json.data || [])
      .filter((m) => m.media_type !== 'VIDEO' || m.thumbnail_url)
      .slice(0, limit)
      .map((m) => ({
        id: m.id,
        permalink: m.permalink,
        thumbnail:
          m.media_type === 'VIDEO' ? m.thumbnail_url : m.media_url,
        caption: m.caption || '',
        timestamp: m.timestamp,
      }));
    return Response.json({ media });
  } catch (err) {
    console.log('[v0] instagram api threw', err?.message);
    return Response.json({ media: [], error: 'fetch_failed' });
  }
}
