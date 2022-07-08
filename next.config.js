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
}

module.exports = nextConfig
