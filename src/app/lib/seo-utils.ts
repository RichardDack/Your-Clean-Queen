import type { Metadata } from 'next';
import { BUSINESS_INFO, SERVICE_AREAS, LOCAL_KEYWORDS } from './seo-constants';
import { enhancedSEO } from './enhanced-seo-utils';
import { competitiveMeta } from './competitive-meta-optimizer';

// Generate SEO-optimized metadata for different page types (Enhanced with competitive optimization)
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  location,
  canonical,
  pageType = 'homepage',
  service,
  premiumPositioning = true
}: {
  title: string;
  description: string;
  keywords?: string[];
  location?: string;
  canonical?: string;
  pageType?: 'homepage' | 'service' | 'location' | 'blog' | 'blog-post';
  service?: string;
  premiumPositioning?: boolean;
}): Metadata {
  
  // Use enhanced SEO utilities for competitive advantage
  if (pageType === 'service' && service) {
    return enhancedSEO.generateServicePageMeta(service, location, {
      customTitle: title,
      customDescription: description,
      canonical,
      premiumPositioning
    });
  }
  
  if (pageType === 'location' && location) {
    return enhancedSEO.generateLocationPageMeta(location, {
      customTitle: title,
      customDescription: description,
      canonical,
      premiumPositioning
    });
  }
  
  // Fallback to competitive meta generation
  return competitiveMeta.generateMetadata({
    service,
    location,
    pageType,
    targetKeywords: keywords,
    customTitle: title,
    customDescription: description,
    canonical,
    premiumPositioning
  });
}

// Generate location-specific SEO content
export function generateLocationSEO(location: string) {
  const locationLower = location.toLowerCase();
  
  return {
    title: `Professional House Cleaning ${location} - Your Clean Queen | Dorset`,
    description: `Expert house cleaning services in ${location}, Dorset. Your Clean Queen provides reliable, professional domestic cleaning with royal treatment standards. Book your ${location} house cleaning today!`,
    
    keywords: [
      `house cleaning ${location}`,
      `cleaning services ${location}`,
      `domestic cleaners ${location}`,
      `professional cleaning ${location}`,
      `home cleaning ${location}`,
      `${locationLower} house cleaning`,
      `${locationLower} cleaning company`,
      `reliable cleaners ${location}`,
      `weekly cleaning ${location}`,
      `one off cleaning ${location}`
    ],
    
    h1: `Professional House Cleaning Services in ${location}`,
    h2: `Why Choose Your Clean Queen for House Cleaning in ${location}?`,
    
    // Local content snippets
    content: {
      intro: `Your Clean Queen provides exceptional house cleaning services throughout ${location} and the surrounding Dorset area. Our professional domestic cleaning team treats every home with royal care and attention to detail.`,
      
      serviceArea: `We proudly serve ${location} residents with reliable, insured house cleaning services. Our team knows the local area well and provides flexible scheduling to suit your busy lifestyle.`,
      
      cta: `Ready to experience the royal treatment? Contact Your Clean Queen today for professional house cleaning in ${location}. Call us or book your free consultation online.`
    }
  };
}

// Generate service-specific SEO content  
export function generateServiceSEO(service: string, location?: string) {
  const serviceLower = service.toLowerCase();
  const locationText = location ? ` in ${location}` : ' in Dorchester, Weymouth & Dorset';
  
  return {
    title: `${service}${locationText} - Your Clean Queen | Professional Dorset Cleaners`,
    description: `Professional ${serviceLower}${locationText}. Your Clean Queen delivers exceptional ${serviceLower} services with royal treatment standards. Reliable, insured, and trusted by Dorset families.`,
    
    keywords: [
      `${serviceLower}${location ? ` ${location}` : ''}`,
      `${serviceLower} services${location ? ` ${location}` : ''}`,
      `professional ${serviceLower}`,
      `${serviceLower} Dorset`,
      `${serviceLower} company`,
      `reliable ${serviceLower}`,
      `best ${serviceLower}${location ? ` ${location}` : ' Dorset'}`
    ],
    
    h1: `${service}${locationText}`,
    h2: `Professional ${service} Services${location ? ` in ${location}` : ` Across Dorset`}`
  };
}

// Generate FAQ schema for local SEO
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Common local business FAQs for SEO
export const LOCAL_BUSINESS_FAQS = [
  {
    question: "What areas do you cover for house cleaning services?",
    answer: `Your Clean Queen provides professional house cleaning services throughout Dorchester, Weymouth, Poundbury, and surrounding Dorset areas including ${SERVICE_AREAS.secondary.slice(0, 5).join(', ')} and more.`
  },
  {
    question: "How much does house cleaning cost in Dorchester?", 
    answer: "Our house cleaning prices are competitive and depend on the size of your home and frequency of service. We offer free, no-obligation quotes for all properties in Dorchester and surrounding areas."
  },
  {
    question: "Are you insured for house cleaning in Weymouth?",
    answer: "Yes, Your Clean Queen is fully insured for all house cleaning services in Weymouth, Dorchester, and throughout Dorset. Your home and belongings are protected during every clean."
  },
  {
    question: "Do you offer one-off deep cleaning in Poundbury?",
    answer: "Absolutely! We provide one-off deep cleaning services in Poundbury and throughout Dorset. Perfect for spring cleaning, moving house, or when you need an extra thorough clean."
  },
  {
    question: "What cleaning products do you use?",
    answer: "We use professional-grade, eco-friendly cleaning products that are safe for your family and pets. All our cleaning supplies are included in the service price."
  }
] as const;