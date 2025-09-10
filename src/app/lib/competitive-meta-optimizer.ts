import type { Metadata } from 'next';
import { BUSINESS_INFO } from './seo-constants';

// Competitive meta optimization engine for dominating search results
export interface CompetitiveMetaOptions {
  service?: string;
  location?: string;
  pageType: 'homepage' | 'service' | 'location' | 'blog' | 'blog-post';
  targetKeywords?: string[];
  competitorAnalysis?: boolean;
  premiumPositioning?: boolean;
}

// Emotional triggers and trust signals for premium positioning
const EMOTIONAL_TRIGGERS = {
  quality: ['Royal Treatment', 'Premium', 'Professional', 'Expert', 'Superior'],
  trust: ['Fully Insured', 'DBS Checked', '5+ Years Experience', 'Trusted', 'Reliable'],
  peace_of_mind: ['Guaranteed', 'Peace of Mind', 'Worry-Free', 'Stress-Free', 'Confident'],
  local_authority: ['Local Experts', 'Dorchester Specialists', 'West Dorset Professionals'],
  urgency: ['Book Today', 'Free Quote', 'Available Now', 'Same Day Service']
} as const;

// Superior title templates vs competitors' boring formats
const TITLE_TEMPLATES = {
  homepage: {
    premium: 'Professional Cleaners {location} | Royal Treatment | {trust_signal}',
    authority: '{location} Cleaning Experts | Royal Treatment Standards | {business_name}',
    competitive: 'Premium House Cleaners {location} | Superior to Budget Services | {business_name}'
  },
  service: {
    premium: '{service} {location} | Royal Treatment | {trust_signal} | {business_name}',
    authority: 'Professional {service} | {location} Experts | {trust_signal}',
    competitive: 'Premium {service} {location} | Quality Over Price | {business_name}'
  },
  location: {
    premium: 'Professional Cleaners {location} | Royal Treatment | {trust_signal}',
    authority: '{location} House Cleaning Specialists | Local Experts | {business_name}',
    competitive: 'Premium Cleaning Services {location} | Superior Quality | {business_name}'
  },
  blog: {
    authority: 'Expert Cleaning Tips & Guides | {business_name} Blog | {location}',
    competitive: 'Professional Cleaning Insights | Expertise Others Don\'t Share | {business_name}'
  },
  blog_post: {
    authority: '{title} | Expert Guide | {business_name} | {location}',
    premium: '{title} | Royal Treatment Insights | Professional Tips'
  }
} as const;

// Compelling description templates with premium positioning
const DESCRIPTION_TEMPLATES = {
  homepage: {
    premium: 'Professional cleaners in {location} providing Royal Treatment standards. {trust_signals} with {experience}. Superior quality vs budget competitors hourly service.',
    authority: 'Your Clean Queen delivers expert house cleaning across {location} and West Dorset. {trust_signals} providing premium service that competitors cannot match.',
    competitive: 'Premium cleaning services in {location} with Royal Treatment approach. {trust_signals}. Quality-focused alternative to budget competitors. Free quote available.'
  },
  service: {
    premium: 'Professional {service} in {location} with Royal Treatment standards. {trust_signals} delivering superior quality vs budget alternatives. {cta}',
    authority: 'Expert {service} across {location} and West Dorset. Your Clean Queen provides premium service with {trust_signals}. Quality over quantity approach.',
    competitive: 'Premium {service} {location} - Royal Treatment vs budget competitors. {trust_signals} with guaranteed satisfaction. {cta}'
  },
  location: {
    premium: 'Professional house cleaners in {location} delivering Royal Treatment standards. {trust_signals} with local expertise. Superior to generic franchise services.',
    authority: '{location} cleaning specialists with {experience} local knowledge. Your Clean Queen provides premium service vs budget competitors. {trust_signals}.',
    competitive: 'Premium cleaning services {location} - Royal Treatment approach vs budget alternatives. {trust_signals} with guaranteed quality. Free consultation.'
  },
  blog: {
    authority: 'Expert cleaning tips and professional insights from {location}\'s premium cleaning service. Royal Treatment expertise that competitors don\'t share.',
    competitive: 'Professional cleaning guides and tips from Your Clean Queen. Expert insights competitors provide. Quality-focused advice.'
  },
  blog_post: {
    authority: '{excerpt} Expert insights from {location}\'s professional cleaning specialists. Royal Treatment standards and quality advice.',
    premium: '{excerpt} Professional tips from Your Clean Queen\'s Royal Treatment approach. Quality insights for superior home care.'
  }
} as const;

// Generate superior meta titles vs competitors
export function generateCompetitiveTitle(options: CompetitiveMetaOptions): string {
  const { service, location, pageType, premiumPositioning = true } = options;

  // Select appropriate template based on page type and positioning
  let template: string;

  switch (pageType) {
    case 'homepage':
      template = premiumPositioning
        ? TITLE_TEMPLATES.homepage.premium
        : TITLE_TEMPLATES.homepage.authority;
      break;
    case 'service':
      template = premiumPositioning
        ? TITLE_TEMPLATES.service.premium
        : TITLE_TEMPLATES.service.authority;
      break;
    case 'location':
      template = premiumPositioning
        ? TITLE_TEMPLATES.location.premium
        : TITLE_TEMPLATES.location.authority;
      break;
    case 'blog':
      template = TITLE_TEMPLATES.blog.authority;
      break;
    case 'blog-post':
      template = TITLE_TEMPLATES.blog_post.authority;
      break;
    default:
      template = TITLE_TEMPLATES.homepage.premium;
  }

  // Replace placeholders with actual values
  return template
    .replace('{service}', service || 'House Cleaning')
    .replace('{location}', location || 'Dorchester')
    .replace('{trust_signal}', getRandomTrustSignal())
    .replace('{business_name}', BUSINESS_INFO.name)
    .replace('{title}', service || 'Professional Cleaning Guide');
}

// Generate compelling descriptions with emotional triggers
export function generateCompetitiveDescription(options: CompetitiveMetaOptions & { excerpt?: string }): string {
  const { service, location, pageType, premiumPositioning = true, excerpt } = options;

  // Select appropriate template
  let template: string;

  switch (pageType) {
    case 'homepage':
      template = premiumPositioning
        ? DESCRIPTION_TEMPLATES.homepage.premium
        : DESCRIPTION_TEMPLATES.homepage.authority;
      break;
    case 'service':
      template = premiumPositioning
        ? DESCRIPTION_TEMPLATES.service.premium
        : DESCRIPTION_TEMPLATES.service.authority;
      break;
    case 'location':
      template = premiumPositioning
        ? DESCRIPTION_TEMPLATES.location.premium
        : DESCRIPTION_TEMPLATES.location.authority;
      break;
    case 'blog':
      template = DESCRIPTION_TEMPLATES.blog.authority;
      break;
    case 'blog-post':
      template = premiumPositioning
        ? DESCRIPTION_TEMPLATES.blog_post.premium
        : DESCRIPTION_TEMPLATES.blog_post.authority;
      break;
    default:
      template = DESCRIPTION_TEMPLATES.homepage.premium;
  }

  // Replace placeholders
  return template
    .replace('{service}', service || 'house cleaning')
    .replace('{location}', location || 'Dorchester')
    .replace('{trust_signals}', getTrustSignalsCombination())
    .replace('{experience}', '5+ years experience')
    .replace('{cta}', getCallToAction())
    .replace('{excerpt}', excerpt || 'Professional cleaning insights and expert tips.')
    .replace('{business_name}', BUSINESS_INFO.name);
}

// Get random trust signal for variety
function getRandomTrustSignal(): string {
  const signals = [...EMOTIONAL_TRIGGERS.trust, ...EMOTIONAL_TRIGGERS.peace_of_mind];
  return signals[Math.floor(Math.random() * signals.length)];
}

// Get combination of trust signals
function getTrustSignalsCombination(): string {
  const combinations = [
    'Fully insured & DBS checked',
    'Trusted professionals with 5+ years experience',
    'Reliable, insured cleaners',
    'Professional, DBS-checked team',
    'Experienced, fully insured specialists'
  ];
  return combinations[Math.floor(Math.random() * combinations.length)];
}

// Get compelling call-to-action
function getCallToAction(): string {
  const ctas = [
    'Free quote today',
    'Book your Royal Treatment',
    'Call for free consultation',
    'Get instant quote',
    'Schedule your premium clean'
  ];
  return ctas[Math.floor(Math.random() * ctas.length)];
}

// Generate comprehensive competitive metadata
export function generateCompetitiveMetadata(options: CompetitiveMetaOptions & {
  customTitle?: string;
  customDescription?: string;
  excerpt?: string;
  canonical?: string;
}): Metadata {
  const {
    service,
    location,
    targetKeywords = [],
    customTitle,
    customDescription,
    excerpt,
    canonical
  } = options;

  // Generate optimized title and description
  const title = customTitle || generateCompetitiveTitle(options);
  const description = customDescription || generateCompetitiveDescription({ ...options, excerpt });

  // Build comprehensive keywords with competitive focus
  const competitiveKeywords = [
    ...targetKeywords,
    ...(service ? [`${service.toLowerCase()} ${location || 'dorchester'}`] : []),
    ...(location ? [`professional cleaners ${location.toLowerCase()}`] : []),
    'royal treatment cleaning',
    'premium cleaning services',
    'professional house cleaners',
    'quality cleaning dorset',
    'trusted cleaners',
    'insured cleaning services',
    'Your Clean Queen'
  ];

  // Generate location-specific geo tags
  const geoTags = location ? {
    'geo.placename': `${location}, Dorset`,
    'geo.region': 'GB-DOR',
    'business:contact_data:locality': location,
    'business:contact_data:region': 'Dorset'
  } : {};

  return {
    title,
    description,
    keywords: competitiveKeywords,

    openGraph: {
      title: `${title} | Premium Quality`,
      description: `${description} Royal Treatment standards.`,
      url: canonical,
      siteName: BUSINESS_INFO.name,
      locale: 'en_GB',
      type: 'website',
      images: [{
        url: '/images/your-clean-queen-og.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - ${title}`
      }]
    },

    twitter: {
      card: 'summary_large_image',
      title: `${title} | Royal Treatment`,
      description: description.substring(0, 160),
      images: ['/images/your-clean-queen-og.jpg']
    },

    alternates: {
      canonical
    },

    other: {
      ...Object.fromEntries(
        Object.entries(geoTags).filter(([, value]) => value !== undefined)
      ),
      'business:contact_data:country_name': 'United Kingdom',
      'business:contact_data:postal_code': location === 'Weymouth' ? 'DT4' : 'DT1',
      // Premium positioning signals
      'service:quality': 'premium',
      'service:type': 'professional cleaning',
      'service:guarantee': 'satisfaction guaranteed'
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

// Competitive analysis helpers
export const COMPETITOR_WEAKNESSES = {
  'competitor a': {
    metaTitle: 'competitor a Dorchester', // Boring, no emotional triggers
    weaknesses: ['Generic title', 'No trust signals', 'No premium positioning', 'No emotional appeal'],
    opportunities: ['Add Royal Treatment positioning', 'Include trust signals', 'Use emotional triggers']
  },
  'competitor b': {
    metaTitle: 'Get an affordable domestic cleaner... £17.48 per hour', // Price-focused, budget positioning
    weaknesses: ['Budget positioning', 'Price race-to-bottom', 'Corporate feel', 'No local expertise'],
    opportunities: ['Premium quality positioning', 'Local authority', 'Professional expertise', 'Trust signals']
  }
} as const;

// Generate meta that specifically outperforms competitors
export function generateCompetitorSuperiorMeta(
  competitorType: keyof typeof COMPETITOR_WEAKNESSES,
  options: CompetitiveMetaOptions
): Metadata {
  // Customize approach based on competitor weaknesses
  const enhancedOptions = {
    ...options,
    premiumPositioning: true, // Always use premium positioning vs competitors
    competitorAnalysis: true
  };

  // Generate superior metadata
  const metadata = generateCompetitiveMetadata(enhancedOptions);

  // Add competitor-specific enhancements
  if (competitorType === 'competitor b') {
    // Counter their budget positioning with quality focus
    if (metadata.description && typeof metadata.description === 'string') {
      metadata.description = metadata.description.replace(
        'Professional',
        'Premium Professional'
      ).replace(
        'cleaning',
        'quality cleaning - superior to budget £17.48/hour services'
      );
    }
  }

  if (competitorType === 'competitor a') {
    // Counter their generic approach with specific expertise
    if (metadata.title && typeof metadata.title === 'string') {
      metadata.title = metadata.title.replace(
        'Professional',
        'Expert Professional'
      );
    }
    if (metadata.description && typeof metadata.description === 'string') {
      metadata.description = metadata.description.replace(
        'cleaners',
        'specialist cleaners with local expertise'
      );
    }
  }

  return metadata;
}

// Export utility functions for easy use
export const competitiveMeta = {
  generateTitle: generateCompetitiveTitle,
  generateDescription: generateCompetitiveDescription,
  generateMetadata: generateCompetitiveMetadata,
  generateSuperiorMeta: generateCompetitorSuperiorMeta,
  COMPETITOR_WEAKNESSES,
  EMOTIONAL_TRIGGERS
};