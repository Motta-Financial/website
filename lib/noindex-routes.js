// Routes that stay reachable but should not appear in search results or the
// sitemap. Shared by next.config.js (X-Robots-Tag header) and app/sitemap.js.
// CommonJS on purpose: next.config.js can only `require` CommonJS.
//
// Most are leftovers from the "Apexa" template (placeholder content, template
// titles). Remove an entry when the page is deleted or replaced with real copy.
module.exports = [
  '/index-2',
  '/index-3',
  '/index-4',
  '/index-5',
  '/about-2',
  '/about-3',
  '/about-4',
  '/about-5',
  '/services-2',
  '/services-3',
  '/services-4',
  '/services-5',
  '/services-details',
  '/services-details-2',
  '/services-details-3',
  '/services-details-4',
  '/services-details-5',
  '/team-2',
  '/team-3',
  '/team-4',
  '/team-details',
  '/project-details',
  '/blog',
  '/blog/:id',
  '/blog-details',
  '/error',
  '/test',
  // Real people, but placeholder profile copy / duplicate of /about/team.
  '/team',
  '/team/dat-le',
  '/team/mark-dwyer',
  // Utility pages with nothing to rank for.
  '/login',
  '/partners',
];
