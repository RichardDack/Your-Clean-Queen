import type { Metadata } from 'next';
import { competitiveMeta, EMOTIONAL_TRIGGERS } from './competitive-meta-optimizer';
import { BUSINESS_INFO } from './seo-constants';

// Blog-specific meta optimization for content authority
export interface BlogMetaOptions {
  title: string;
  excerpt: string;
  category?: string;
  targetKeywords?: string[];
  location?: string;
  serviceType?: string;
  competitorGap?: boolean; // Is this content that competitors don't have?
  authorityLevel?: 'expert' | 'professional' | 'comprehensive';
  contentType?: 'guide' | 'tips' | 'comparison' | 'local-insight' | 'service-explanation';
}

// Content authority positioning templates
const AUTHORITY_TEMPLATES = {
  expert: {
    titlePrefix: 'Expert Guide:',
    titleSuffix: '| Professional Insights | {business_name}',
    descriptionPrefix: 'Expert insights from professional cleaners:',
    descriptionSuffix: 'Royal Treatment expertise that competitors don\'t share.'
  },
  professional: {
    titlePrefix: 'Professional Guide:',
    titleSuffix: '| {business_name} Expertise',
    descriptionPrefix: 'Professional cleaning advice:',
    descriptionSuffix: 'Quality insights from Dorchester\'s premium cleaning service.'
  },
  comprehensive: {
    titlePrefix: 'Complete Guide:',
    titleSuffix: '| Comprehensive Resource | {business_name}',
    descriptionPrefix: 'Comprehensive guide to',
    descriptionSuffix: 'Everything you need to know from cleaning professionals.'
  }
} as const;

// Content type specific optimizations
const CONTENT_TYPE_OPTIMIZATION = {
  guide: {
    keywords: ['guide', 'how to', 'step by step', 'complete guide', 'comprehensive'],
    titleFormat: '{authority} {title} | Complete Guide | {business_name}',
    descriptionFormat: 'Complete guide to {topic}. {expertise} Professional insights and step-by-step advice from {business_name}.'
  },
  tips: {
    keywords: ['tips', 'advice', 'professional tips', 'expert tips', 'cleaning tips'],
    titleFormat: '{title} | Professional Tips | {business_name} | {location}',
    descriptionFormat: 'Professional {topic} tips from {business_name}. {expertise} Expert advice for superior results.'
  },
  comparison: {
    keywords: ['vs', 'comparison', 'difference', 'which is better', 'professional vs'],
    titleFormat: '{title} | Professional Comparison | {business_name}',
    descriptionFormat: 'Professional comparison: {topic}. {expertise} Expert analysis to help you make informed decisions.'
  },
  'local-insight': {
    keywords: ['local', 'area specific', 'regional', 'dorchester', 'west dorset'],
    titleFormat: '{title} | Local Expertise | {business_name} | {location}',
    descriptionFormat: 'Local expertise for {location}: {topic}. {expertise} Area-specific insights from professional cleaners.'
  },
  'service-explanation': {
    keywords: ['what is', 'service', 'professional service', 'royal treatment'],
    titleFormat: '{title} | Service Explanation | Royal Treatment | {business_name}',
    descriptionFormat: 'Understanding {topic} with Royal Treatment standards. {expertise} Professional service explanation.'
  }
} as const;

// Generate blog post meta with authority positioning
export function generateBlogPostMeta(options: BlogMetaOptions): Metadata {
  const {
    title,
    excerpt,
    category,
    targetKeywords = [],
    location = 'Dorchester',
    serviceType,
    competitorGap = false,
    authorityLevel = 'professional',
    contentType = 'guide'
  } = options;
  
  // Get authority template
  const authorityTemplate = AUTHORITY_TEMPLATES[authorityLevel];
  const contentOptimization = CONTENT_TYPE_OPTIMIZATION[contentType];
  
  // Build comprehensive keywords
  const blogKeywords = [
    ...targetKeywords,
    ...contentOptimization.keywords,
    'cleaning advice',
    'professional cleaning tips',
    'expert cleaning guide',
    'royal treatment insights',
    `cleaning tips ${location.toLowerCase()}`,
    ...(serviceType ? [`${serviceType.toLowerCase()} tips`, `professional ${serviceType.toLowerCase()}`] : []),
    ...(category ? [category.toLowerCase()] : []),
    ...(competitorGap ? ['exclusive insights', 'professional secrets', 'expert knowledge'] : [])
  ];
  
  // Generate optimized title
  const optimizedTitle = generateBlogTitle(title, authorityLevel, contentType, competitorGap, location);
  
  // Generate compelling description
  const optimizedDescription = generateBlogDescription(
    title, 
    excerpt, 
    authorityLevel, 
    contentType, 
    competitorGap,
    location
  );
  
  // Create metadata with competitive positioning
  return {
    title: optimizedTitle,
    description: optimizedDescription,
    keywords: blogKeywords,
    
    openGraph: {
      title: `${optimizedTitle} | Premium Insights`,
      description: `${optimizedDescription} Royal Treatment expertise.`,
      type: 'article',
      siteName: BUSINESS_INFO.name,
      locale: 'en_GB',
      images: [{
        url: '/images/blog-og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${title} - ${BUSINESS_INFO.name} Blog`
      }]
    },
    
    twitter: {
      card: 'summary_large_image',
      title: optimizedTitle,
      description: optimizedDescription.substring(0, 160),
      images: ['/images/blog-og-image.jpg']
    },
    
    other: {
      'article:author': 'Your Clean Queen Team',
      'article:section': category || 'Cleaning Tips',
      'article:tag': targetKeywords.join(', '),
      'geo.placename': `${location}, Dorset`,
      'geo.region': 'GB-DOR',
      // Authority signals
      'content:authority': authorityLevel,
      'content:type': contentType,
      'content:competitive_advantage': competitorGap ? 'exclusive' : 'superior'
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

// Generate authority-focused blog titles
function generateBlogTitle(
  title: string, 
  authorityLevel: BlogMetaOptions['authorityLevel'], 
  contentType: BlogMetaOptions['contentType'],
  competitorGap: boolean,
  location: string
): string {
  const authority = AUTHORITY_TEMPLATES[authorityLevel!];
  const contentOpt = CONTENT_TYPE_OPTIMIZATION[contentType!];
  
  // Add competitive advantage if this content fills a gap
  const competitivePrefix = competitorGap ? 'EXCLUSIVE: ' : '';
  
  // Format title based on content type
  let formattedTitle = contentOpt.titleFormat
    .replace('{authority}', authority.titlePrefix)
    .replace('{title}', title)
    .replace('{business_name}', BUSINESS_INFO.name)
    .replace('{location}', location);
  
  return `${competitivePrefix}${formattedTitle}`;
}

// Generate compelling blog descriptions
function generateBlogDescription(
  title: string,
  excerpt: string,
  authorityLevel: BlogMetaOptions['authorityLevel'],
  contentType: BlogMetaOptions['contentType'],
  competitorGap: boolean,
  location: string
): string {
  const authority = AUTHORITY_TEMPLATES[authorityLevel!];
  const contentOpt = CONTENT_TYPE_OPTIMIZATION[contentType!];
  
  // Build expertise statement
  const expertiseStatement = competitorGap 
    ? 'Exclusive professional insights that Lucy\'s Cleaning and Maid2Clean don\'t provide.'
    : 'Professional expertise from Dorchester\'s premium cleaning service.';
  
  // Extract topic from title for description
  const topic = title.toLowerCase().replace(/[^\w\s]/g, '').trim();
  
  // Format description
  const formattedDescription = contentOpt.descriptionFormat
    .replace('{topic}', topic)
    .replace('{expertise}', expertiseStatement)
    .replace('{business_name}', BUSINESS_INFO.name)
    .replace('{location}', location);
  
  // Combine with excerpt if provided
  const finalDescription = excerpt 
    ? `${excerpt} ${formattedDescription}`
    : formattedDescription;
  
  // Ensure proper length (150-160 characters)
  return finalDescription.length > 160 
    ? finalDescription.substring(0, 157) + '...'
    : finalDescription;
}

// Generate meta for content that exploits competitor gaps
export function generateCompetitorGapMeta(
  title: string,
  excerpt: string,
  targetKeywords: string[],
  gapType: 'no-blog' | 'no-service-content' | 'no-local-content' | 'no-expertise',
  location: string = 'Dorchester'
): Metadata {
  const gapMessages = {
    'no-blog': 'EXCLUSIVE content - competitors have NO blog',
    'no-service-content': 'ONLY professional service guide available',
    'no-local-content': 'EXCLUSIVE local expertise - competitors ignore this area',
    'no-expertise': 'Professional insights competitors cannot provide'
  };
  
  const gapKeywords = {
    'no-blog': ['exclusive content', 'only cleaning blog', 'professional insights'],
    'no-service-content': ['only service guide', 'professional service', 'exclusive expertise'],
    'no-local-content': ['local expertise', 'area specialist', 'regional knowledge'],
    'no-expertise': ['professional secrets', 'expert knowledge', 'industry insights']
  };
  
  const options: BlogMetaOptions = {
    title,
    excerpt,
    targetKeywords: [...targetKeywords, ...gapKeywords[gapType]],
    location,
    competitorGap: true,
    authorityLevel: 'expert',
    contentType: 'guide'
  };
  
  const metadata = generateBlogPostMeta(options);
  
  // Add gap-specific enhancements
  metadata.description = `${gapMessages[gapType]}: ${metadata.description}`;
  metadata.title = `EXCLUSIVE: ${metadata.title}`;
  
  return metadata;
}

// Generate meta for service-specific blog content
export function generateServiceBlogMeta(
  title: string,
  excerpt: string,
  service: string,
  location: string = 'Dorchester',
  hasCompetitorContent: boolean = false
): Metadata {
  const serviceKeywords = [
    `${service.toLowerCase()} tips`,
    `${service.toLowerCase()} guide`,
    `professional ${service.toLowerCase()}`,
    `${service.toLowerCase()} advice`,
    `${service.toLowerCase()} ${location.toLowerCase()}`,
    `how to ${service.toLowerCase()}`,
    `${service.toLowerCase()} best practices`
  ];
  
  const options: BlogMetaOptions = {
    title,
    excerpt,
    targetKeywords: serviceKeywords,
    location,
    serviceType: service,
    competitorGap: !hasCompetitorContent,
    authorityLevel: 'expert',
    contentType: 'service-explanation'
  };
  
  return generateBlogPostMeta(options);
}

// Generate meta for local expertise content
export function generateLocalExpertiseMeta(
  title: string,
  excerpt: string,
  location: string,
  specificArea?: string
): Metadata {
  const localKeywords = [
    `${location.toLowerCase()} cleaning`,
    `cleaning services ${location.toLowerCase()}`,
    `local cleaning expertise`,
    `${location.toLowerCase()} area specialist`,
    `professional cleaners ${location.toLowerCase()}`,
    ...(specificArea ? [`${specificArea.toLowerCase()} cleaning`, `${specificArea.toLowerCase()} specialist`] : [])
  ];
  
  const options: BlogMetaOptions = {
    title,
    excerpt,
    targetKeywords: localKeywords,
    location,
    competitorGap: true, // Local expertise is always a gap
    authorityLevel: 'expert',
    contentType: 'local-insight'
  };
  
  return generateBlogPostMeta(options);
}

// Export all blog meta utilities
export const blogMeta = {
  generateBlogPostMeta,
  generateCompetitorGapMeta,
  generateServiceBlogMeta,
  generateLocalExpertiseMeta,
  AUTHORITY_TEMPLATES,
  CONTENT_TYPE_OPTIMIZATION
};