/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/qr',
        destination: 'https://photos.app.goo.gl/mQF6BhQh1ZoCmH6W7',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
