import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'weblemek.com',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: 'www.weblemek.com',
        pathname: '/wp-content/**',
      },
    ],
  },
}

export default nextConfig
