// Motta Hub public API helpers.
// Docs: contact -> POST /api/public/contact, intake -> POST /api/public/intake.
// CORS: motta.cpa, www.motta.cpa, *.vercel.app, www.mottafinancial.com.

export const HUB_BASE_URL =
  process.env.NEXT_PUBLIC_HUB_BASE_URL || 'https://hub.motta.cpa';

export const HUB_LOGIN_URL = `${HUB_BASE_URL}/login`;

export async function postToHub(path, payload) {
  const res = await fetch(`${HUB_BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  let body = {};
  try {
    body = await res.json();
  } catch {
    /* non-json response */
  }
  if (!res.ok) {
    const err = new Error(body.error || `Request failed (${res.status})`);
    err.status = res.status;
    err.body = body;
    throw err;
  }
  return body;
}

// Friendly user-facing error messages keyed by HTTP status.
export function hubErrorMessage(err) {
  const status = err && err.status;
  if (status === 400) return 'Please check the highlighted fields and try again.';
  if (status === 403) return "We couldn't send that message. Please try again later.";
  if (status === 429)
    return 'Too many submissions from this network — please wait a moment and try again.';
  if (status === 500) return 'Something went wrong on our end. Please try again.';
  return (err && err.message) || 'Unable to submit right now. Please try again.';
}
