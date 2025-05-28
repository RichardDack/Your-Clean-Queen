import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable static exports for GitHub Pages
  output: 'export',
  
  // Disable server-side features for static export
  trailingSlash: true,
  
  // Configure for GitHub Pages deployment (update YOUR_USERNAME)
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Image optimization disabled for static export
  images: {
    unoptimized: true,
  },
  
  // SEO and performance optimizations
  poweredByHeader: false,
}

export default nextConfig