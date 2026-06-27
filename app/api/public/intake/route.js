import { NextResponse } from 'next/server';
import { HUB_BASE_URL, HUB_TRUSTED_ORIGIN } from '@/lib/hub';

// Same-origin proxy for the Motta Hub intake endpoint.
// The browser POSTs here (same-origin, no CORS), and we forward the
// request to the Hub server-side. This avoids the cross-origin CORS
// restriction that blocks direct browser -> hub.motta.cpa calls from
// origins outside the Hub's allowlist (e.g. preview sandboxes).
export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  try {
    const hubRes = await fetch(`${HUB_BASE_URL}/api/public/intake`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // The Hub trusts requests by Origin. A server-side fetch sends
        // none, so present the site's canonical (allowlisted) origin.
        Origin: HUB_TRUSTED_ORIGIN,
        Referer: HUB_TRUSTED_ORIGIN,
        // Forward the originating IP so the Hub's per-network rate
        // limiting still works through the proxy.
        'x-forwarded-for':
          request.headers.get('x-forwarded-for') ||
          request.headers.get('x-real-ip') ||
          '',
      },
      body: JSON.stringify(payload),
    });

    let body = {};
    try {
      body = await hubRes.json();
    } catch {
      /* non-json response */
    }

    return NextResponse.json(body, { status: hubRes.status });
  } catch (error) {
    console.error('[public/intake] Hub forwarding failed:', error.message);
    return NextResponse.json(
      { error: 'Unable to reach the server. Please try again.' },
      { status: 502 }
    );
  }
}
