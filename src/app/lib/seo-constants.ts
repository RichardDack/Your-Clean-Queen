// SEO Constants for Your Clean Queen - Local Area Targeting

export const BUSINESS_INFO = {
  name: "Your Clean Queen",
  founder: "Teal",
  tagline: "Royal Treatment for Your Home",
  description: "Professional residential cleaning services in Dorchester, Weymouth, Poundbury, and surrounding Dorset areas with royal treatment standards.",
  phone: "+44-XXXX-XXXXXX", // Update with actual number
  email: "hello@yourcleanqueen.co.uk", // Update with actual email
  website: "https://yourcleanqueen.co.uk",
} as const;

export const SERVICE_AREAS = {
  primary: [
    "Dorchester",
    "Weymouth", 
    "Poundbury"
  ],
  secondary: [
    "Winterbourne Abbas",
    "Broadmayne",
    "Maiden Newton", 
    "Charminster",
    "Osmington",
    "Upwey",
    "Fortuneswell",
    "Chickerell",
    "Crossways",
    "Wool"
  ],
  postcodes: [
    "DT1", "DT2", "DT3", "DT4", // Dorchester & Weymouth areas
    "DT11", "DT10" // Surrounding areas
  ]
} as const;

export const SERVICES = {
  primary: [
    "Regular House Cleaning",
    "One-off Deep Cleaning", 
    "Move-in/Move-out Cleaning",
    "Post-Construction Cleaning"
  ],
  keywords: [
    "house cleaning",
    "domestic cleaning", 
    "home cleaning",
    "residential cleaning",
    "weekly cleaning",
    "fortnightly cleaning",
    "deep cleaning",
    "spring cleaning",
    "end of tenancy cleaning"
  ]
} as const;

// Local SEO keyword combinations
export const LOCAL_KEYWORDS = {
  primary: SERVICE_AREAS.primary.flatMap(area => 
    SERVICES.keywords.map(service => `${service} ${area}`)
  ),
  
  longTail: [
    "professional house cleaning Dorchester",
    "reliable cleaning services Weymouth",  
    "trusted domestic cleaners Poundbury",
    "best house cleaning company Dorset",
    "affordable cleaning services Dorchester",
    "insured house cleaners Weymouth",
    "local cleaning company Dorchester",
    "weekly house cleaning Weymouth",
    "one off cleaning Dorchester",
    "deep cleaning services Dorset"
  ],
  
  businessType: [
    "cleaning company Dorchester",
    "cleaning service Weymouth",
    "house cleaners Poundbury", 
    "domestic cleaners Dorset",
    "cleaning business Dorchester"
  ]
} as const;

// Geographic coordinates for local SEO
export const GEO_DATA = {
  dorchester: {
    lat: 50.7312,
    lng: -2.4414,
    radius: 15 // km
  },
  weymouth: {
    lat: 50.6098,
    lng: -2.4598, 
    radius: 12 // km
  },
  serviceRadius: 25 // Total service area radius in km
} as const;

// Schema.org structured data templates
export const SCHEMA_TEMPLATES = {
  localBusiness: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "additionalType": "https://schema.org/CleaningService"
  },
  
  service: (serviceName: string, description: string) => ({
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness", 
      "name": BUSINESS_INFO.name
    },
    "areaServed": SERVICE_AREAS.primary.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Dorset"
      }
    }))
  }),
  
  review: (rating: number, reviewText: string, author: string, location: string) => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rating,
      "bestRating": 5
    },
    "reviewBody": reviewText,
    "author": {
      "@type": "Person",
      "name": author
    },
    "reviewLocation": location
  })
} as const;