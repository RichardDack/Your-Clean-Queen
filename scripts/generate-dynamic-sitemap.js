// Dynamic Sitemap Generator with Contentful Integration
// This script fetches blog posts from Contentful and generates a complete sitemap

const fs = require('fs');
const path = require('path');

// Import Contentful client (you'll need to install contentful package)
// const contentful = require('contentful');

// Contentful configuration (uncomment when ready to use)
/*
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});
*/

// Static pages configuration
const STATIC_PAGES = [
  {
    url: 'https://yourcleanqueen.co.uk/',
    changefreq: 'weekly',
    priority: '1.0'
  },
  {
    url: 'https://yourcleanqueen.co.uk/blog/',
    changefreq: 'weekly',
    priority: '0.8'
  },
  // Service Pages
  {
    url: 'https://yourcleanqueen.co.uk/premium-weekly-cleaning/',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/deep-cleaning-service/',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/end-of-tenancy-cleaning-dorchester/',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/end-of-tenancy-cleaning/',
    changefreq: 'monthly',
    priority: '0.8'
  },
  // Location Pages
  {
    url: 'https://yourcleanqueen.co.uk/cleaners-dorchester/',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/domestic-cleaners-dorchester/',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/house-cleaners-weymouth/',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/professional-cleaners-poundbury/',
    changefreq: 'monthly',
    priority: '0.9'
  },
  {
    url: 'https://yourcleanqueen.co.uk/cleaners-west-dorset/',
    changefreq: 'monthly',
    priority: '0.8'
  }
];

// Fallback blog posts (used when Contentful is not available)
const FALLBACK_BLOG_POSTS = [
  {
    slug: 'the-ultimate-guide-to-end-of-tenancy-cleaning-dorchester',
    publishedDate: '2025-01-09',
    priority: '0.7'
  }
];

// Function to fetch blog posts from Contentful
async function fetchBlogPosts() {
  try {
    // Uncomment when Contentful is configured
    /*
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit: 100,
      order: '-sys.createdAt'
    });

    return entries.items.map(item => ({
      slug: item.fields.slug,
      publishedDate: item.fields.publishedDate || item.sys.createdAt,
      priority: '0.7'
    }));
    */
    
    // For now, return fallback posts
    console.log('📝 Using fallback blog posts (Contentful not configured)');
    return FALLBACK_BLOG_POSTS;
  } catch (error) {
    console.warn('⚠️  Could not fetch from Contentful, using fallback posts:', error.message);
    return FALLBACK_BLOG_POSTS;
  }
}

// Function to generate sitemap XML
async function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  const blogPosts = await fetchBlogPosts();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

`;

  // Add static pages
  sitemap += `  <!-- Static Pages -->
`;
  STATIC_PAGES.forEach(page => {
    sitemap += `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>

`;
  });

  // Add blog posts
  if (blogPosts.length > 0) {
    sitemap += `  <!-- Blog Posts -->
`;
    blogPosts.forEach(post => {
      const postDate = post.publishedDate ? 
        new Date(post.publishedDate).toISOString().split('T')[0] : 
        currentDate;
        
      sitemap += `  <url>
    <loc>https://yourcleanqueen.co.uk/blog/${post.slug}/</loc>
    <lastmod>${postDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${post.priority}</priority>
  </url>

`;
    });
  }

  sitemap += `</urlset>`;

  return sitemap;
}

// Function to write sitemap to file
async function writeSitemap() {
  try {
    const sitemapContent = await generateSitemap();
    const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
    
    fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
    
    const blogPosts = await fetchBlogPosts();
    console.log('✅ Dynamic sitemap generated successfully at public/sitemap.xml');
    console.log(`📄 Included ${STATIC_PAGES.length} static pages and ${blogPosts.length} blog posts`);
    console.log('🔄 Run this script whenever you add new blog posts');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  fetchBlogPosts,
  STATIC_PAGES,
  FALLBACK_BLOG_POSTS
};