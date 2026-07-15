import { NextResponse } from 'next/server';
import { HUB_BASE_URL, HUB_TRUSTED_ORIGIN } from '@/lib/hub';

// Same-origin proxy for the Motta Hub contact endpoint. See the intake
// proxy (app/api/public/intake/route.js) for the rationale — this keeps
// the browser request same-origin and forwards to the Hub server-side.
export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  try {
    const hubRes = await fetch(`${HUB_BASE_URL}/api/public/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Origin: HUB_TRUSTED_ORIGIN,
        Referer: HUB_TRUSTED_ORIGIN,
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
    console.error('[public/contact] Hub forwarding failed:', error.message);
    return NextResponse.json(
      { error: 'Unable to reach the server. Please try again.' },
      { status: 502 }
    );
  }
}
