/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Mireb-commercial-B2B',
  assetPrefix: '/Mireb-commercial-B2B',
}

module.exports = nextConfig
