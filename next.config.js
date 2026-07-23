/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mammoth'],
  async redirects() {
    return [
      {
        source: '/services/tax',
        destination: '/services/tax-planning',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
