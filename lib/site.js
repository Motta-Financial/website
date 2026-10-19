// Canonical site origin, used for metadataBase, canonical URLs, robots.txt and
// the sitemap.
//
// Resolution order:
//   1. NEXT_PUBLIC_SITE_URL — set this to pin the canonical host explicitly
//      (e.g. https://www.motta.cpa).
//   2. VERCEL_PROJECT_PRODUCTION_URL — the production domain Vercel itself
//      serves this project from, so it is always a host that works.
//   3. localhost, for local development.
export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return 'http://localhost:3000';
}
