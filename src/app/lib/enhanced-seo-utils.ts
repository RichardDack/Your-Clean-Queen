import type { Metadata } from 'next';
import { competitiveMeta, type CompetitiveMetaOptions } from './competitive-meta-optimizer';
import { BUSINESS_INFO } from './seo-constants';

// Enhanced SEO utilities with Royal Treatment positioning
export interface EnhancedSEOOptions {
  service?: string;
  location?: string;
  pageType: 'homepage' | 'service' | 'location' | 'blog' | 'blog-post';
  targetKeywords?: string[];
  customTitle?: string;
  customDescription?: string;
  excerpt?: string;
  canonical?: string;
  premiumPositioning?: boolean;
  competitorFocus?: 'lucys-cleaning' | 'maid2clean' | 'both';
}

// Service-specific meta optimization
export function generateServicePageMeta(
  service: string, 
  location?: string,
  options: Partial<EnhancedSEOOptions> = {}
): Metadata {
  const metaOptions: CompetitiveMetaOptions = {
    service,
    location: location || 'Dorchester',
    pageType: 'service',
    targetKeywords: [
      `${service.toLowerCase()} ${location?.toLowerCase() || 'dorchester'}`,
      `professional ${service.toLowerCase()}`,
      `${service.toLowerCase()} services`,
      `quality ${service.toLowerCase()}`,
      `trusted ${service.toLowerCase()}`
    ],
    premiumPositioning: options.premiumPositioning ?? true
  };
  
  return competitiveMeta.generateMetadata({
    ...metaOptions,
    customTitle: options.customTitle,
    customDescription: options.customDescription,
    canonical: options.canonical
  });
}

// Location-specific meta optimization
export function generateLocationPageMeta(
  location: string,
  options: Partial<EnhancedSEOOptions> = {}
): Metadata {
  const metaOptions: CompetitiveMetaOptions = {
    location,
    pageType: 'location',
    targetKeywords: [
      `cleaners ${location.toLowerCase()}`,
      `house cleaners ${location.toLowerCase()}`,
      `professional cleaners ${location.toLowerCase()}`,
      `domestic cleaners ${location.toLowerCase()}`,
      `cleaning services ${location.toLowerCase()}`,
      `local cleaners ${location.toLowerCase()}`
    ],
    premiumPositioning: options.premiumPositioning ?? true
  };
  
  return competitiveMeta.generateMetadata({
    ...metaOptions,
    customTitle: options.customTitle,
    customDescription: options.customDescription,
    canonical: options.canonical
  });
}

// Blog post meta optimization with authority positioning
export function generateBlogPostMeta(
  title: string,
  excerpt: string,
  targetKeywords: string[] = [],
  options: Partial<EnhancedSEOOptions> = {}
): Metadata {
  const metaOptions: CompetitiveMetaOptions = {
    pageType: 'blog-post',
    targetKeywords: [
      ...targetKeywords,
      'cleaning tips',
      'professional cleaning advice',
      'cleaning guides',
      'expert cleaning tips',
      'royal treatment cleaning'
    ],
    premiumPositioning: true
  };
  
  return competitiveMeta.generateMetadata({
    ...metaOptions,
    customTitle: options.customTitle || `${title} | Expert Guide | ${BUSINESS_INFO.name}`,
    customDescription: options.customDescription,
    excerpt,
    canonical: options.canonical
  });
}

// Homepage meta with competitive superiority
export function generateHomepageMeta(
  location: string = 'Dorchester',
  options: Partial<EnhancedSEOOptions> = {}
): Metadata {
  const metaOptions: CompetitiveMetaOptions = {
    location,
    pageType: 'homepage',
    targetKeywords: [
      `cleaners ${location.toLowerCase()}`,
      'professional house cleaners',
      'royal treatment cleaning',
      'premium cleaning services',
      'trusted cleaners dorset',
      'quality cleaning services',
      'insured house cleaners',
      'reliable domestic cleaners'
    ],
    premiumPositioning: true
  };
  
  // Generate superior meta vs specific competitors if specified
  if (options.competitorFocus) {
    if (options.competitorFocus === 'both') {
      // For 'both', default to maid2clean as primary competitor
      return competitiveMeta.generateSuperiorMeta('maid2clean', metaOptions);
    }
    return competitiveMeta.generateSuperiorMeta(options.competitorFocus, metaOptions);
  }
  
  return competitiveMeta.generateMetadata({
    ...metaOptions,
    customTitle: options.customTitle,
    customDescription: options.customDescription,
    canonical: options.canonical
  });
}

// Blog listing page meta
export function generateBlogListingMeta(
  location: string = 'Dorchester',
  options: Partial<EnhancedSEOOptions> = {}
): Metadata {
  const metaOptions: CompetitiveMetaOptions = {
    location,
    pageType: 'blog',
    targetKeywords: [
      'cleaning tips',
      'cleaning guides',
      'professional cleaning advice',
      'expert cleaning tips',
      'cleaning blog',
      'royal treatment insights',
      `cleaning advice ${location.toLowerCase()}`
    ],
    premiumPositioning: true
  };
  
  return competitiveMeta.generateMetadata({
    ...metaOptions,
    customTitle: options.customTitle || `Expert Cleaning Tips & Guides | ${BUSINESS_INFO.name} Blog | ${location}`,
    customDescription: options.customDescription || `Professional cleaning tips and expert insights from ${location}'s premium cleaning service. Royal Treatment expertise that competitors don't share.`,
    canonical: options.canonical
  });
}

// Generate meta for service landing pages that exploit competitor gaps
export function generateServiceLandingMeta(
  service: string,
  location: string,
  competitorGap: boolean = true
): Metadata {
  const baseKeywords = [
    `${service.toLowerCase()} ${location.toLowerCase()}`,
    `professional ${service.toLowerCase()}`,
    `${service.toLowerCase()} services ${location.toLowerCase()}`,
    `quality ${service.toLowerCase()}`,
    `trusted ${service.toLowerCase()} ${location.toLowerCase()}`
  ];
  
  // Add competitor gap keywords if this service has zero competition
  const gapKeywords = competitorGap ? [
    `${service.toLowerCase()} near me`,
    `best ${service.toLowerCase()} ${location.toLowerCase()}`,
    `reliable ${service.toLowerCase()}`,
    `${service.toLowerCase()} company ${location.toLowerCase()}`,
    `professional ${service.toLowerCase()} ${location.toLowerCase()}`
  ] : [];
  
  const metaOptions: CompetitiveMetaOptions = {
    service,
    location,
    pageType: 'service',
    targetKeywords: [...baseKeywords, ...gapKeywords],
    premiumPositioning: true
  };
  
  // Custom title emphasizing gap exploitation
  const customTitle = competitorGap 
    ? `${service} ${location} | Only Professional Service | Royal Treatment | ${BUSINESS_INFO.name}`
    : undefined;
    
  // Custom description highlighting competitive advantage
  const customDescription = competitorGap
    ? `Professional ${service.toLowerCase()} in ${location} - the ONLY comprehensive service available. Royal Treatment standards with full insurance & DBS checks. Lucy's Cleaning & Maid2Clean don't offer this expertise.`
    : undefined;
  
  return competitiveMeta.generateMetadata({
    ...metaOptions,
    customTitle,
    customDescription
  });
}

// Generate meta for pages targeting specific competitor weaknesses
export function generateCompetitorTargetedMeta(
  pageType: 'service' | 'location' | 'homepage',
  targetCompetitor: 'lucys-cleaning' | 'maid2clean',
  service?: string,
  location?: string
): Metadata {
  const metaOptions: CompetitiveMetaOptions = {
    service,
    location: location || 'Dorchester',
    pageType,
    premiumPositioning: true,
    competitorAnalysis: true
  };
  
  // Generate superior meta specifically targeting competitor weaknesses
  const metadata = competitiveMeta.generateSuperiorMeta(targetCompetitor, metaOptions);
  
  // Add specific competitive advantages based on competitor
  if (targetCompetitor === 'maid2clean') {
    // Target their budget positioning with quality focus
    metadata.keywords = [
      ...(metadata.keywords || []),
      'quality over price cleaning',
      'premium vs budget cleaners',
      'professional vs cheap cleaning',
      'royal treatment vs budget service'
    ];
  }
  
  if (targetCompetitor === 'lucys-cleaning') {
    // Target their generic approach with expertise
    metadata.keywords = [
      ...(metadata.keywords || []),
      'expert local cleaners',
      'professional cleaning specialists',
      'experienced cleaning team',
      'local cleaning expertise'
    ];
  }
  
  return metadata;
}

// Utility to generate meta tags for new service pages that competitors don't have
export function generateNewServiceMeta(
  service: string,
  location: string,
  monthlySearches: number,
  competitorContent: boolean = false
): Metadata {
  const hasCompetition = competitorContent;
  
  // Customize approach based on opportunity size and competition
  const titlePrefix = !hasCompetition ? 'ONLY Professional' : 'Premium';
  const descriptionPrefix = !hasCompetition 
    ? `The ONLY professional ${service.toLowerCase()} service in ${location}` 
    : `Premium ${service.toLowerCase()} in ${location}`;
  
  const metaOptions: CompetitiveMetaOptions = {
    service,
    location,
    pageType: 'service',
    targetKeywords: [
      `${service.toLowerCase()} ${location.toLowerCase()}`,
      `professional ${service.toLowerCase()}`,
      `${service.toLowerCase()} services`,
      `${service.toLowerCase()} near me`,
      `best ${service.toLowerCase()} ${location.toLowerCase()}`
    ],
    premiumPositioning: true
  };
  
  const customTitle = `${titlePrefix} ${service} ${location} | Royal Treatment | ${BUSINESS_INFO.name}`;
  const customDescription = `${descriptionPrefix} with Royal Treatment standards. Fully insured & DBS checked. ${!hasCompetition ? 'Competitors don\'t offer this service.' : 'Superior quality vs budget alternatives.'} Free quote today.`;
  
  return competitiveMeta.generateMetadata({
    ...metaOptions,
    customTitle,
    customDescription
  });
}

// Export all utilities
export const enhancedSEO = {
  generateServicePageMeta,
  generateLocationPageMeta,
  generateBlogPostMeta,
  generateHomepageMeta,
  generateBlogListingMeta,
  generateServiceLandingMeta,
  generateCompetitorTargetedMeta,
  generateNewServiceMeta
};