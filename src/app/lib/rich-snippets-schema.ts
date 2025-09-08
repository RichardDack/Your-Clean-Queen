import { BUSINESS_INFO, SERVICE_AREAS, GEO_DATA } from './seo-constants';

// Enhanced Rich Snippets Schema Generator for Your Clean Queen
// Implements comprehensive structured data for superior search visibility

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetails {
  name: string;
  description: string;
  serviceType: string;
  areaServed: string[];
  priceRange?: string;
  duration?: string;
  features?: string[];
}

export interface ReviewData {
  rating: number;
  reviewText: string;
  author: string;
  datePublished: string;
  location?: string;
}

export interface LocalBusinessData {
  name: string;
  description: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  phone: string;
  email: string;
  website: string;
  serviceAreas: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
}

// FAQ Schema Generator with Royal Treatment positioning
export function generateFAQSchema(faqs: FAQItem[]): object {
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

// Service Schema with detailed Royal Treatment descriptions
export function generateServiceSchema(service: ServiceDetails): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "serviceType": service.serviceType,
    "provider": {
      "@type": "LocalBusiness",
      "@id": `${BUSINESS_INFO.website}/#business`,
      "name": BUSINESS_INFO.name,
      "description": BUSINESS_INFO.description,
      "url": BUSINESS_INFO.website
    },
    "areaServed": service.areaServed.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Dorset",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Kingdom"
        }
      }
    })),
    "offers": {
      "@type": "Offer",
      "description": `${service.name} with Royal Treatment quality standards`,
      "priceRange": service.priceRange || "££",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString(),
      "seller": {
        "@type": "LocalBusiness",
        "@id": `${BUSINESS_INFO.website}/#business`
      }
    },
    ...(service.duration && {
      "duration": service.duration
    }),
    ...(service.features && {
      "additionalProperty": service.features.map(feature => ({
        "@type": "PropertyValue",
        "name": "Service Feature",
        "value": feature
      }))
    }),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Cleaning Services",
      "itemListElement": [{
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "description": service.description
        }
      }]
    }
  };
}

// Review Schema for customer satisfaction display
export function generateReviewSchema(reviews: ReviewData[]): object {
  const aggregateRating = {
    "@type": "AggregateRating",
    "ratingValue": (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
    "reviewCount": reviews.length,
    "bestRating": 5,
    "worstRating": 1
  };

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_INFO.website}/#business`,
    "name": BUSINESS_INFO.name,
    "aggregateRating": aggregateRating,
    "review": reviews.map(review => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewText,
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.datePublished,
      ...(review.location && {
        "locationCreated": {
          "@type": "Place",
          "name": review.location
        }
      })
    }))
  };
}

// Comprehensive Local Business Schema with service area coverage
export function generateLocalBusinessSchema(businessData: LocalBusinessData): object {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${businessData.website}/#business`,
    "additionalType": [
      "https://schema.org/CleaningService",
      "https://schema.org/HouseCleaner"
    ],
    "name": businessData.name,
    "description": businessData.description,
    "url": businessData.website,
    "telephone": businessData.phone,
    "email": businessData.email,
    "address": {
      "@type": "PostalAddress",
      ...(businessData.address.streetAddress && {
        "streetAddress": businessData.address.streetAddress
      }),
      "addressLocality": businessData.address.addressLocality,
      "addressRegion": businessData.address.addressRegion,
      "postalCode": businessData.address.postalCode,
      "addressCountry": businessData.address.addressCountry
    },
    "areaServed": businessData.serviceAreas.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Dorset",
        "containedInPlace": {
          "@type": "Country",
          "name": "United Kingdom"
        }
      }
    })),
    ...(businessData.coordinates && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": businessData.coordinates.latitude,
        "longitude": businessData.coordinates.longitude
      }
    }),
    ...(businessData.openingHours && {
      "openingHours": businessData.openingHours
    }),
    ...(businessData.priceRange && {
      "priceRange": businessData.priceRange
    }),
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": businessData.coordinates?.latitude || GEO_DATA.dorchester.lat,
        "longitude": businessData.coordinates?.longitude || GEO_DATA.dorchester.lng
      },
      "geoRadius": `${GEO_DATA.serviceRadius}000` // Convert km to meters
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Cleaning Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Regular House Cleaning",
            "description": "Weekly and fortnightly house cleaning with Royal Treatment standards"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Deep Cleaning Service",
            "description": "Comprehensive deep cleaning for spring cleaning and special occasions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "End of Tenancy Cleaning",
            "description": "Professional end of tenancy cleaning with deposit back guarantee"
          }
        }
      ]
    },
    "knowsAbout": [
      "House Cleaning",
      "Domestic Cleaning",
      "Deep Cleaning",
      "End of Tenancy Cleaning",
      "Professional Cleaning",
      "Dorchester Cleaning Services",
      "Weymouth Cleaning Services",
      "Poundbury Cleaning Services"
    ],
    "slogan": BUSINESS_INFO.tagline,
    "founder": {
      "@type": "Person",
      "name": BUSINESS_INFO.founder
    }
  };
}

// Breadcrumb Schema for navigation
export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

// Organization Schema for brand recognition
export function generateOrganizationSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_INFO.website}/#organization`,
    "name": BUSINESS_INFO.name,
    "description": BUSINESS_INFO.description,
    "url": BUSINESS_INFO.website,
    "logo": {
      "@type": "ImageObject",
      "url": `${BUSINESS_INFO.website}/images/your-clean-queen-logo.png`,
      "width": 300,
      "height": 100
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "GB"
    },
    "sameAs": [
      // Add social media profiles when available
      // "https://www.facebook.com/yourcleanqueen",
      // "https://www.instagram.com/yourcleanqueen"
    ],
    "founder": {
      "@type": "Person",
      "name": BUSINESS_INFO.founder
    },
    "foundingLocation": {
      "@type": "Place",
      "name": "Dorchester, Dorset"
    },
    "areaServed": {
      "@type": "State",
      "name": "Dorset"
    }
  };
}

// Pre-configured FAQ sets for different services
export const SERVICE_FAQS = {
  endOfTenancy: [
    {
      question: "What is included in end of tenancy cleaning in Dorchester?",
      answer: "Our end of tenancy cleaning includes complete property deep clean, inside oven and appliances, detailed bathroom sanitization, carpet cleaning, and following strict landlord checklists to ensure deposit return."
    },
    {
      question: "Do you guarantee deposit back for end of tenancy cleaning?",
      answer: "Yes, we offer a deposit back guarantee for our end of tenancy cleaning services in Dorchester. If your landlord is not satisfied with our cleaning, we will return to re-clean at no extra cost."
    },
    {
      question: "How much does end of tenancy cleaning cost in Dorchester?",
      answer: "End of tenancy cleaning costs vary based on property size and requirements. Contact us for a free quote tailored to your specific property in Dorchester."
    },
    {
      question: "How long does end of tenancy cleaning take?",
      answer: "End of tenancy cleaning typically takes 4-8 hours depending on property size and condition. Our professional team ensures thorough cleaning to landlord standards."
    }
  ],
  weeklycleaning: [
    {
      question: "What makes your weekly cleaning premium quality?",
      answer: "Our Royal Treatment approach includes detailed attention to every surface, eco-friendly products, DBS-checked cleaners, and consistent quality standards that exceed budget competitors."
    },
    {
      question: "How does premium weekly cleaning differ from budget services?",
      answer: "Unlike budget services charging £17.48/hour with basic cleaning, our premium service includes thorough attention to detail, quality products, professional training, and personalized service."
    },
    {
      question: "What is included in premium weekly cleaning?",
      answer: "Premium weekly cleaning includes thorough dusting, vacuuming, bathroom sanitization, kitchen deep clean, surface polishing, and attention to details that budget services miss."
    },
    {
      question: "Can I customize my weekly cleaning service?",
      answer: "Absolutely! Our Royal Treatment approach means we tailor the service to your specific needs and preferences, ensuring your home receives exactly the care it deserves."
    }
  ],
  deepCleaning: [
    {
      question: "What is included in a deep cleaning service?",
      answer: "Deep cleaning includes comprehensive top-to-bottom cleaning, inside appliances and cupboards, detailed bathroom sanitization, and thorough attention to areas missed in regular cleaning."
    },
    {
      question: "How long does a deep cleaning service take?",
      answer: "Deep cleaning duration depends on property size and condition. Typically ranges from 4-8 hours for thorough, comprehensive cleaning by our professional team."
    },
    {
      question: "When should I book a deep cleaning service?",
      answer: "Deep cleaning is ideal for spring cleaning, moving in/out, after renovations, or when you want a comprehensive refresh of your home's cleanliness."
    },
    {
      question: "Do you bring your own cleaning supplies for deep cleaning?",
      answer: "Yes, we bring all professional-grade cleaning supplies and equipment. Our eco-friendly products are included in the service price and safe for your family and pets."
    }
  ],
  poundbury: [
    {
      question: "Do you provide cleaning services in Poundbury?",
      answer: "Yes, we provide professional cleaning services throughout Poundbury, specializing in modern developments and residential properties with local expertise."
    },
    {
      question: "What makes your Poundbury cleaning service special?",
      answer: "Our local expertise in Poundbury includes understanding modern property layouts, community standards, and specialized care for contemporary homes and developments."
    },
    {
      question: "Do you clean apartments and houses in Poundbury?",
      answer: "Yes, we clean all types of properties in Poundbury including apartments, houses, townhouses, and modern developments with tailored service for each property type."
    },
    {
      question: "Are you familiar with Poundbury's community standards?",
      answer: "Absolutely! We understand Poundbury's unique blend of traditional architecture and modern living, providing cleaning services that respect both community values and contemporary lifestyle needs."
    }
  ]
} as const;

// Sample review data for schema generation
export const SAMPLE_REVIEWS: ReviewData[] = [
  {
    rating: 5,
    reviewText: "Exceptional service from Your Clean Queen! The Royal Treatment approach really shows - attention to detail is outstanding. Much better than the budget cleaners we used before.",
    author: "Sarah M.",
    datePublished: "2024-01-15",
    location: "Dorchester"
  },
  {
    rating: 5,
    reviewText: "Professional, reliable, and thorough. The team understands Poundbury properties perfectly and always leaves our home spotless. Highly recommend!",
    author: "James P.",
    datePublished: "2024-01-10",
    location: "Poundbury"
  },
  {
    rating: 5,
    reviewText: "End of tenancy cleaning was perfect - got our full deposit back! The guarantee gave us peace of mind and the results exceeded expectations.",
    author: "Emma L.",
    datePublished: "2024-01-05",
    location: "Weymouth"
  },
  {
    rating: 5,
    reviewText: "Quality service that's worth every penny. The difference between Your Clean Queen and budget competitors is night and day. Royal Treatment indeed!",
    author: "Michael R.",
    datePublished: "2023-12-28",
    location: "Dorchester"
  }
];

// Default local business data
export const DEFAULT_BUSINESS_DATA: LocalBusinessData = {
  name: BUSINESS_INFO.name,
  description: BUSINESS_INFO.description,
  address: {
    addressLocality: "Dorchester",
    addressRegion: "Dorset", 
    postalCode: "DT1",
    addressCountry: "GB"
  },
  phone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  website: BUSINESS_INFO.website,
  serviceAreas: [...SERVICE_AREAS.primary, ...SERVICE_AREAS.secondary],
  coordinates: {
    latitude: GEO_DATA.dorchester.lat,
    longitude: GEO_DATA.dorchester.lng
  },
  openingHours: [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-17:00"
  ],
  priceRange: "££"
};

// Export all schema generators
export const richSnippetsSchema = {
  generateFAQSchema,
  generateServiceSchema,
  generateReviewSchema,
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  SERVICE_FAQS,
  SAMPLE_REVIEWS,
  DEFAULT_BUSINESS_DATA
};