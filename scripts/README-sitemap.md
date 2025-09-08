# Sitemap Management for Your Clean Queen

This directory contains scripts for managing the sitemap.xml file, including dynamic generation of blog post URLs.

## Current Sitemap Status

The sitemap currently includes:
- **11 static pages** (homepage, services, locations)
- **1 blog post**: `the-ultimate-guide-to-end-of-tenancy-cleaning-dorchester`

## Manual Sitemap Updates

### Adding New Blog Posts

When you publish a new blog post, add it to the sitemap by editing `public/sitemap.xml`:

```xml
<!-- Add new blog posts in the Blog Posts section -->
<url>
  <loc>https://yourcleanqueen.co.uk/blog/your-new-blog-post-slug/</loc>
  <lastmod>2025-01-09</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>
```

### Adding New Service/Location Pages

When you create new service or location pages, add them with appropriate priority:

```xml
<!-- Service pages get priority 0.9 -->
<url>
  <loc>https://yourcleanqueen.co.uk/new-service-page/</loc>
  <lastmod>2025-01-09</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

## Automated Sitemap Generation

### Option 1: Simple Script (Recommended)

Use `generate-sitemap.js` for manual blog post management:

1. Edit the `BLOG_POSTS` array in `scripts/generate-sitemap.js`
2. Add new blog posts:
   ```javascript
   const BLOG_POSTS = [
     {
       slug: 'the-ultimate-guide-to-end-of-tenancy-cleaning-dorchester',
       lastmod: '2025-01-09',
       changefreq: 'monthly',
       priority: '0.7'
     },
     {
       slug: 'your-new-blog-post-slug',
       lastmod: '2025-01-09',
       changefreq: 'monthly', 
       priority: '0.7'
     }
   ];
   ```
3. Run the script:
   ```bash
   node scripts/generate-sitemap.js
   ```

### Option 2: Dynamic Contentful Integration

Use `generate-dynamic-sitemap.js` for automatic blog post detection:

1. Configure Contentful environment variables
2. Install contentful package: `npm install contentful`
3. Run the script:
   ```bash
   node scripts/generate-dynamic-sitemap.js
   ```

## Package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "sitemap": "node scripts/generate-sitemap.js",
    "sitemap:dynamic": "node scripts/generate-dynamic-sitemap.js"
  }
}
```

Then run:
```bash
npm run sitemap          # Manual blog post management
npm run sitemap:dynamic  # Automatic Contentful integration
```

## SEO Best Practices

### Priority Guidelines
- **Homepage**: 1.0
- **Main Services & Locations**: 0.9
- **Blog Listing**: 0.8
- **Regional Pages**: 0.8
- **Blog Posts**: 0.7

### Change Frequency Guidelines
- **Homepage**: weekly (frequently updated content)
- **Blog Listing**: weekly (new posts added)
- **Services & Locations**: monthly (stable content)
- **Blog Posts**: monthly (content rarely changes after publication)

### URL Format
- Always use trailing slashes: `/page/`
- Use HTTPS: `https://yourcleanqueen.co.uk/`
- Keep URLs lowercase and use hyphens

## Validation

After updating the sitemap, validate it using:
- [Google Search Console](https://search.google.com/search-console)
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

## Submission to Search Engines

Submit your sitemap to:
1. **Google Search Console**: Add sitemap URL `https://yourcleanqueen.co.uk/sitemap.xml`
2. **Bing Webmaster Tools**: Submit sitemap URL
3. **robots.txt**: Add sitemap reference:
   ```
   Sitemap: https://yourcleanqueen.co.uk/sitemap.xml
   ```

## Monitoring

Monitor sitemap performance in Google Search Console:
- Check for crawl errors
- Monitor indexed pages
- Track sitemap submission status
- Review coverage reports

## Troubleshooting

### Common Issues
1. **404 errors**: Ensure all URLs in sitemap are accessible
2. **Duplicate URLs**: Check for trailing slash consistency
3. **Invalid XML**: Validate XML syntax
4. **Large sitemap**: Consider splitting into multiple sitemaps if over 50,000 URLs

### Blog Post Issues
- Ensure blog post slugs match Contentful exactly
- Check that blog posts are published (not draft)
- Verify URL structure matches Next.js routing

This system ensures your sitemap stays current with all your content while maintaining SEO best practices.