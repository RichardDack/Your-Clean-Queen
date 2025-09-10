import type { Metadata } from 'next';
import { competitiveMeta } from './competitive-meta-optimizer';
import { BUSINESS_INFO } from './seo-constants';

// Service landing page meta optimization for gap exploitation
export interface ServiceLandingOptions {
  service: string;
  location: string;
  monthlySearches?: number;
  competitorContent?: boolean;
  isNewService?: boolean;
  targetCompetitor?: 'competitor a' | 'competitor b' | 'both';
}

// Service-specific meta templates for gap exploitation
const SERVICE_META_TEMPLATES = {
  'End of Tenancy Cleaning': {
    gapOpportunity: true, // Competitors have ZERO content
    monthlySearches: 13,
    competitorContent: false,
    titleTemplate: 'End of Tenancy Cleaning {location} | Sparkling results | Royal Treatment',
    descriptionTemplate: 'Professional end of tenancy cleaning in {location} with deposit-back guarantee. ONLY comprehensive service available - Competitors don\'t offer this expertise. Fully insured & DBS checked.',
    keywords: [
      'end of tenancy cleaning',
      'Sparkling results',
      'move out cleaning',
      'tenancy cleaning service',
      'professional end of tenancy'
    ]
  },
  'Premium Weekly Cleaning': {
    gapOpportunity: true, // Counter Maid2Clean's budget positioning
    competitorContent: true,
    titleTemplate: 'Premium Weekly Cleaning {location} | Royal Treatment vs Budget Services',
    descriptionTemplate: 'Premium weekly cleaning in {location} with Royal Treatment standards. Superior quality vs competitors £17.48/hour budget service. Professional, insured cleaners with 5+ years experience.',
    keywords: [
      'premium weekly cleaning',
      'quality weekly cleaning',
      'professional weekly cleaning',
      'royal treatment cleaning',
      'premium vs budget cleaning'
    ]
  },
  'Deep Cleaning Service': {
    gapOpportunity: true, // Competitors have basic mentions only
    competitorContent: false,
    titleTemplate: 'Deep Cleaning Service {location} | Comprehensive Professional Clean | Royal Treatment',
    descriptionTemplate: 'Professional deep cleaning service in {location} with Royal Treatment standards. Comprehensive cleaning that competitors don\'t match. Detailed process, quality guarantee, fully insured team.',
    keywords: [
      'deep cleaning service',
      'comprehensive deep clean',
      'professional deep cleaning',
      'thorough house cleaning',
      'detailed cleaning service'
    ]
  },
  'Professional Cleaners Poundbury': {
    gapOpportunity: true, // Local micro-targeting competitors ignore
    competitorContent: false,
    titleTemplate: 'Professional Cleaners Poundbury | Local Expertise | Royal Treatment Standards',
    descriptionTemplate: 'Professional cleaners in Poundbury with local expertise and Royal Treatment standards. Specialized service for Poundbury properties that generic competitors don\'t understand. Fully insured & DBS checked.',
    keywords: [
      'cleaners poundbury',
      'professional cleaners poundbury',
      'poundbury cleaning service',
      'local cleaners poundbury',
      'house cleaners poundbury'
    ]
  }
} as const;

// Generate meta for service landing pages that exploit competitor gaps
export function generateServiceLandingMeta(options: ServiceLandingOptions): Metadata {
  const { service, location } = options;
  
  // Check if we have a predefined template for this service
  const serviceTemplate = SERVICE_META_TEMPLATES[service as keyof typeof SERVICE_META_TEMPLATES];
  
  if (serviceTemplate) {
    return generatePredefinedServiceMeta(service, location, serviceTemplate);
  }
  
  // Generate custom meta for new services
  return generateCustomServiceMeta(options);
}

// Generate meta using predefined service templates
function generatePredefinedServiceMeta(
  service: string,
  location: string,
  template: typeof SERVICE_META_TEMPLATES[keyof typeof SERVICE_META_TEMPLATES]
): Metadata {
  const title = template.titleTemplate.replace('{location}', location);
  const description = template.descriptionTemplate.replace('{location}', location);
  
  const keywords = [
    ...template.keywords,
    `${service.toLowerCase()} ${location.toLowerCase()}`,
    `professional ${service.toLowerCase()}`,
    `${service.toLowerCase()} near me`,
    'royal treatment cleaning',
    'fully insured cleaners',
    'dbs checked cleaners'
  ];
  
  // Add competitive advantage keywords if no competitor content exists
  if (!template.competitorContent) {
    keywords.push(
      'only professional service',
      'exclusive service',
      'competitors don\'t offer',
      'unique service'
    );
  }
  
  return {
    title,
    description,
    keywords,
    
    openGraph: {
      title: `${title} | Premium Quality`,
      description: `${description} Royal Treatment standards.`,
      type: 'website',
      siteName: BUSINESS_INFO.name,
      locale: 'en_GB',
      images: [{
        url: '/images/service-og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${service} in ${location} - ${BUSINESS_INFO.name}`
      }]
    },
    
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Royal Treatment`,
      description: description.substring(0, 160),
      images: ['/images/service-og-image.jpg']
    },
    
    other: {
      'geo.placename': `${location}, Dorset`,
      'geo.region': 'GB-DOR',
      'service:type': service,
      'service:quality': 'premium',
      'service:guarantee': 'satisfaction guaranteed',
      'competitive:advantage': template.gapOpportunity ? 'exclusive' : 'superior',
      'competitor:content': template.competitorContent ? 'exists' : 'none'
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

// Generate custom meta for new services
function generateCustomServiceMeta(options: ServiceLandingOptions): Metadata {
  const { service, location, competitorContent = false } = options;
  const isExclusiveOpportunity = !competitorContent;
  
  // Build title with competitive positioning
  const titlePrefix = isExclusiveOpportunity ? 'ONLY Professional' : 'Premium';
  const title = `${titlePrefix} ${service} ${location} | Royal Treatment | ${BUSINESS_INFO.name}`;
  
  // Build description with gap exploitation
  const descriptionPrefix = isExclusiveOpportunity 
    ? `The ONLY professional ${service.toLowerCase()} service in ${location}`
    : `Premium ${service.toLowerCase()} in ${location}`;
    
  const competitorNote = isExclusiveOpportunity 
    ? 'Competitors don\'t offer this service.'
    : 'Superior quality vs budget alternatives.';
    
  const description = `${descriptionPrefix} with Royal Treatment standards. Fully insured & DBS checked team with 5+ years experience. ${competitorNote} Free quote today.`;
  
  // Build comprehensive keywords
  const keywords = [
    `${service.toLowerCase()} ${location.toLowerCase()}`,
    `professional ${service.toLowerCase()}`,
    `${service.toLowerCase()} services`,
    `${service.toLowerCase()} near me`,
    `best ${service.toLowerCase()} ${location.toLowerCase()}`,
    'royal treatment cleaning',
    'premium cleaning services',
    'fully insured cleaners',
    'professional cleaning team',
    ...(isExclusiveOpportunity ? [
      'only professional service',
      'exclusive service',
      'unique cleaning service'
    ] : [
      'premium vs budget',
      'quality cleaning service',
      'superior cleaning'
    ])
  ];
  
  // Generate metadata with competitive focus
  return competitiveMeta.generateMetadata({
    service,
    location,
    pageType: 'service',
    targetKeywords: keywords,
    customTitle: title,
    customDescription: description,
    premiumPositioning: true
  });
}

// Generate meta specifically targeting competitor weaknesses
export function generateCompetitorTargetedServiceMeta(
  service: string,
  location: string,
  targetCompetitor: 'competitor a' | 'competitor b'
): Metadata {
  const competitorStrategies = {
    'competitor a': {
      titleStrategy: 'Expert Professional {service} {location} | Local Specialists | Royal Treatment',
      descriptionStrategy: 'Expert {service} in {location} with local specialist knowledge. Professional team vs generic services. Royal Treatment standards with 5+ years area expertise.',
      keywords: ['expert local service', 'specialist knowledge', 'professional expertise', 'local specialists']
    },
    'competitor b': {
      titleStrategy: 'Premium {service} {location} | Quality Over Price | Royal Treatment Standards',
      descriptionStrategy: 'Premium {service} in {location} with Royal Treatment quality standards. Professional service vs £17.48/hour budget alternatives. Quality investment for superior results.',
      keywords: ['premium vs budget', 'quality over price', 'professional vs cheap', 'royal treatment quality']
    }
  };
  
  const strategy = competitorStrategies[targetCompetitor];
  
  const title = strategy.titleStrategy
    .replace('{service}', service)
    .replace('{location}', location);
    
  const description = strategy.descriptionStrategy
    .replace('{service}', service.toLowerCase())
    .replace('{location}', location);
  
  const keywords = [
    `${service.toLowerCase()} ${location.toLowerCase()}`,
    `professional ${service.toLowerCase()}`,
    ...strategy.keywords,
    'royal treatment cleaning',
    'fully insured cleaners',
    'dbs checked team'
  ];
  
  return {
    title,
    description,
    keywords,
    
    openGraph: {
      title: `${title} | Superior Quality`,
      description: `${description} Professional excellence.`,
      type: 'website',
      siteName: BUSINESS_INFO.name,
      locale: 'en_GB'
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description: description.substring(0, 160)
    },
    
    other: {
      'geo.placename': `${location}, Dorset`,
      'geo.region': 'GB-DOR',
      'competitive:target': targetCompetitor,
      'service:positioning': 'premium',
      'service:quality': 'superior'
    }
  };
}

// Export service landing meta utilities
export const serviceLandingMeta = {
  generateServiceLandingMeta,
  generateCompetitorTargetedServiceMeta,
  SERVICE_META_TEMPLATES
};