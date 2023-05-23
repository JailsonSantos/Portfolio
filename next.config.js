/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['media.graphassets.com', 'www.google.com', 'kinsta.com'],
  },
}

module.exports = nextConfig
