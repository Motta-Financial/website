import { getSiteUrl } from '@/lib/site';

// The template demo pages are kept out of search with an `X-Robots-Tag: noindex`
// header (next.config.js), not a Disallow here — a crawler has to be allowed to
// fetch a page to see its noindex.
export default function robots() {
  const site = getSiteUrl();
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/'] }],
    sitemap: `${site}/sitemap.xml`,
  };
}
