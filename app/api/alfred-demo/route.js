import { NextResponse } from 'next/server';

const HUB_URL = process.env.HUB_URL || 'https://hub.motta.cpa';

export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation
    const { firstName, lastName, email, firmName, firmType } = body;
    if (!firstName || !lastName || !email || !firmName || !firmType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Forward to Hub's demo request endpoint (or store locally)
    // For now, we'll try to forward to Hub and gracefully handle if it fails
    try {
      const hubRes = await fetch(`${HUB_URL}/api/public/alfred-demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          phone: body.phone || null,
          firm_name: firmName,
          firm_type: firmType,
          team_size: body.teamSize || null,
          message: body.message || null,
          source: 'website',
          submitted_at: new Date().toISOString(),
        }),
      });

      if (hubRes.ok) {
        return NextResponse.json({ success: true });
      }
    } catch (hubError) {
      // Hub unavailable — log but don't fail the user request
      console.error('[alfred-demo] Hub forwarding failed:', hubError.message);
    }

    // Fallback: just acknowledge receipt
    // In production, this should store the lead somewhere (database, email, etc.)
    console.log('[alfred-demo] Demo request received:', {
      firstName,
      lastName,
      email,
      firmName,
      firmType,
      teamSize: body.teamSize,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[alfred-demo] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
