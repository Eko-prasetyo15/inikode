/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.olx.co.id', 'upload.wikimedia.org'],
  },
  typescript: {
    ignoreBuildErrors: true, // Mengabaikan error TypeScript saat build
  },
}

module.exports = nextConfig
