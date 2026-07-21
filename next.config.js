/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mammoth'],
  async redirects() {
    return [
      {
        source: '/services/tax-planning',
        destination: '/services/tax',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
