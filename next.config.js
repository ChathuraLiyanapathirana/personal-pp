/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Required: Specify the protocol (http or https)
        hostname: 'appcitor.com', // Required: Specify the allowed hostname
      },
    ]
  },
  env: {
    WP_URL: process.env.WP_URL,
    IMAGE_PREFIX: process.env.IMAGE_PREFIX,
  },
}

module.exports = nextConfig
