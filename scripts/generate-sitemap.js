// Dynamic Sitemap Generator for Your Clean Queen
// This script can be run to automatically generate sitemap.xml with blog posts from Contentful

const fs = require('fs');
const path = require('path');

// Static pages configuration
const STATIC_PAGES = [
  {
    url: 'https://yourcleanqueen.co.uk/',
    lastmod: '2025-01-09',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: 'https://yourcleanqueen.co.uk/blog/',
    lastmod: '2025-01-09',
    changefreq: 'weekly',
    priority: '0.8'
  },
  // Service Pages
  {
    url: 'https://yourcleanqueen.co.uk/premium-weekly-cleaning/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/deep-cleaning-service/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/end-of-tenancy-cleaning-dorchester/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/end-of-tenancy-cleaning/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.8'
  },
  // Location Pages
  {
    url: 'https://yourcleanqueen.co.uk/cleaners-dorchester/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/domestic-cleaners-dorchester/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/house-cleaners-weymouth/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/professional-cleaners-poundbury/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/cleaners-west-dorset/',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.8'
  }
];

// Known blog posts (add new ones here)
const BLOG_POSTS = [
  {
    slug: 'the-ultimate-guide-to-end-of-tenancy-cleaning-dorchester',
    lastmod: '2025-01-09',
    changefreq: 'monthly',
    priority: '0.7'
  }
  // Add more blog posts here as they are created
];

// Function to generate sitemap XML
function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  // Add static pages
  STATIC_PAGES.forEach(page => {
    sitemap += `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>

`;
  });

  // Add blog posts
  if (BLOG_POSTS.length > 0) {
    sitemap += `  <!-- Blog Posts -->
`;
    BLOG_POSTS.forEach(post => {
      sitemap += `  <url>
    <loc>https://yourcleanqueen.co.uk/blog/${post.slug}/</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
  </url>

`;
    });
  }

  sitemap += `</urlset>`;

  return sitemap;
}

// Function to write sitemap to file
function writeSitemap() {
  const sitemapContent = generateSitemap();
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  console.log(`📄 Included ${STATIC_PAGES.length} static pages and ${BLOG_POSTS.length} blog posts`);
}

// Run if called directly
if (require.main === module) {
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  STATIC_PAGES,
  BLOG_POSTS
};