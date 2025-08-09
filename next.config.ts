import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  
  experimental: {
    optimizeCss: true,
  },
  
  images: {
    formats: ['image/webp', 'image/avif'],
  },
}

export default nextConfig