import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig