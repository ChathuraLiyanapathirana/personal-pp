/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Required: Specify the protocol (http or https)
        hostname: '**.appcitor.com', // CMS media lives on appci-cms.appcitor.com
      },
    ]
  },
  env: {
    WP_URL: process.env.WP_URL || "",
    IMAGE_PREFIX: process.env.IMAGE_PREFIX || "",
  },
}

module.exports = nextConfig
