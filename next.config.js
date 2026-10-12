/** @type {import('next').NextConfig} */

const NOINDEX_ROUTES = require('./lib/noindex-routes');

const nextConfig = {
  // Don't advertise the framework in every response.
  poweredByHeader: false,

  images: {
    // /_next/image defaults to a 60s TTL, so every repeat view re-validated
    // each optimized image. A week is plenty; the source files rarely change.
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },

  async redirects() {
    return [
      {
        source: '/services/tax-planning',
        destination: '/services/tax',
        permanent: true,
      },
      // Was a page that called redirect() — statically rendered, that comes out
      // as a 200 with a meta-refresh (a "soft" redirect). A real 308 instead.
      {
        source: '/services/accounting/bookkeeping-small-business',
        destination: '/services/accounting/bookkeeping',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
      {
        // public/ files are served `max-age=0` by default, so the hero photo,
        // logos and team photos were re-validated on every page view. A day
        // (plus a week of stale-while-revalidate) keeps in-place edits to those
        // files visible quickly without the round trips.
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      ...NOINDEX_ROUTES.map((source) => ({
        source,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      })),
    ];
  },
};

module.exports = nextConfig;
