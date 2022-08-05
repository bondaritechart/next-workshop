/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.pexels.com"],
  },
  swcMinify: true,
  experimental: {
    reactMode: "concurrent",
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/static-blog",
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
