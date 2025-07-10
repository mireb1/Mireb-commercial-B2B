/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Configuration pour GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Mireb-commercial-B2B' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Mireb-commercial-B2B' : '',
}

module.exports = nextConfig
