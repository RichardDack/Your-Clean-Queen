import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig