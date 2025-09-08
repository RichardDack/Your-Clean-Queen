# Image Guidelines for Your Clean Queen

## Required Image Sizes

### Blog Post Featured Images
**Upload to Contentful:**
- **Recommended**: 2048x1152 (16:9 aspect ratio)
- **Minimum**: 1920x1080
- **Format**: WebP or JPEG
- **Quality**: 85-90%

**Next.js Auto-Generated Sizes:**
- 3840w, 2048w, 1920w, 1200w, 1080w, 828w, 750w, 640w

### Service Page Hero Images
**Upload Size:**
- **2048x1152** (16:9 aspect ratio)
- **Format**: WebP or JPEG
- **Quality**: 85-90%

**Usage:**
- Desktop: 1920x1080
- Tablet: 1200x675
- Mobile: 828x466

### Service Card Images
**Upload Size:**
- **1200x800** (3:2 aspect ratio)
- **Format**: WebP or JPEG

**Usage:**
- Desktop: 600x400
- Mobile: 400x267

### Social Media/OpenGraph Images
**Required Size:**
- **1200x630** (1.91:1 aspect ratio)
- **Format**: JPEG or PNG
- **Text**: Keep important text in center 1000x524 area

## Image Optimization Best Practices

### File Formats
1. **WebP** - Best compression, modern browsers
2. **JPEG** - Good compression, universal support
3. **PNG** - Use only for images requiring transparency

### Quality Settings
- **Hero Images**: 85-90% quality
- **Card Images**: 80-85% quality
- **Background Images**: 75-80% quality

### File Size Targets
- **Hero Images**: < 200KB
- **Card Images**: < 100KB
- **Thumbnails**: < 50KB

## Content Guidelines

### Photography Style
- **Professional cleaning in action**
- **Before/after comparisons**
- **Clean, bright, well-lit spaces**
- **Consistent color palette** (vibrant green, sage green, cream)

### Image Content Ideas

**Service Images:**
- Professional cleaners at work
- Sparkling clean results
- Before/after transformations
- Equipment and products in use

**Blog Images:**
- Step-by-step cleaning processes
- Problem areas (before) vs results (after)
- Professional tips in action
- Local Dorchester properties

**Location Images:**
- Recognizable Dorchester landmarks
- Local property types
- Community-specific content

## Technical Implementation

### Next.js Image Component
```tsx
// Blog featured images
<Image
  src={imageUrl}
  alt="Descriptive alt text"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
  priority // For above-fold images
/>

// Service cards
<Image
  src={imageUrl}
  alt="Service description"
  width={600}
  height={400}
  className="object-cover"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

### Contentful Configuration
**Image Field Settings:**
- **Validation**: Minimum 1920x1080
- **Formats**: WebP, JPEG
- **Max File Size**: 2MB

## SEO Optimization

### Alt Text Guidelines
- **Descriptive**: Describe what's happening in the image
- **Keywords**: Include relevant service/location keywords naturally
- **Length**: 50-125 characters

**Examples:**
- "Professional end of tenancy cleaning in Dorchester bathroom showing before and after results"
- "Your Clean Queen team performing deep cleaning service in modern Poundbury home"
- "Premium weekly cleaning results in Weymouth coastal property living room"

### File Naming
**Format**: `service-location-description.webp`

**Examples:**
- `end-tenancy-cleaning-dorchester-bathroom-before-after.webp`
- `deep-cleaning-service-poundbury-kitchen-results.webp`
- `weekly-cleaning-weymouth-living-room-premium.webp`

## Image Sources

### Professional Photography
- **Recommended**: Hire local photographer for authentic Dorchester content
- **Cost**: £300-500 for full day shoot
- **ROI**: High-quality, unique images improve SEO and conversions

### Stock Photography
**Acceptable Sources:**
- Unsplash (free, high quality)
- Pexels (free, good selection)
- Shutterstock (paid, professional)

**Search Terms:**
- "house cleaning professional"
- "domestic cleaning service"
- "clean modern home interior"
- "cleaning supplies equipment"

### User-Generated Content
- **Customer before/after photos** (with permission)
- **Team photos** during actual cleaning jobs
- **Local property photos** (with permission)

## Quality Checklist

Before uploading any image:
- [ ] Correct aspect ratio (16:9 for heroes, 3:2 for cards)
- [ ] Minimum resolution met (1920x1080 for heroes)
- [ ] File size optimized (< 200KB for heroes)
- [ ] Descriptive filename
- [ ] Professional appearance
- [ ] Brand colors present
- [ ] Sharp focus and good lighting
- [ ] Relevant to content/service

## Responsive Behavior

### Desktop (1920px+)
- Hero images: Full width, 1920x1080
- Service cards: 600x400 in grid

### Tablet (768px - 1919px)
- Hero images: Full width, scaled proportionally
- Service cards: 2-column grid, scaled

### Mobile (< 768px)
- Hero images: Full width, 828x466
- Service cards: Single column, full width

This ensures optimal loading performance across all devices while maintaining visual quality.