// Safe JSON body reader for the public form endpoints.
//
// - Requires `Content-Type: application/json`. A browser has to send a CORS
//   preflight for that type, so another website can't make a visitor's browser
//   post to these endpoints behind their back (the old code parsed whatever
//   arrived, including `text/plain` "simple" cross-site posts).
// - Caps the body size; real submissions are a few KB.
// - Works in both the Node and Edge runtimes.
const MAX_BODY_BYTES = 100 * 1024;

export async function readJsonBody(request) {
  const type = (request.headers.get('content-type') || '').toLowerCase();
  if (!type.includes('application/json')) {
    return { error: 'Unsupported content type.', status: 415 };
  }
  if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES) {
    return { error: 'Request too large.', status: 413 };
  }
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) {
    return { error: 'Request too large.', status: 413 };
  }
  try {
    return { payload: JSON.parse(text) };
  } catch {
    return { error: 'Invalid request body.', status: 400 };
  }
}
