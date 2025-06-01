import type { Metadata } from "next";
import "./globals.css";

// SEO-optimized metadata targeting "Cleaners Dorchester" and "Cleaners West Dorset"
export const metadata: Metadata = {
  title: {
    default: "Cleaners Dorchester | Professional House Cleaners West Dorset | Your Clean Queen",
    template: "%s | Your Clean Queen - Cleaners Dorchester, West Dorset"
  },
  description: "Professional cleaners in Dorchester and West Dorset. Reliable house cleaners providing weekly cleaning, deep cleans & end of tenancy services. Fully insured cleaners with 5+ years experience.",
  keywords: [
    // Primary target keywords
    "cleaners Dorchester",
    "cleaners West Dorset", 
    "house cleaners Dorchester",
    "professional cleaners West Dorset",
    "cleaners near me Dorchester",
    
    // Local cleaner variations
    "domestic cleaners Dorchester",
    "home cleaners West Dorset",
    "residential cleaners Dorchester",
    "local cleaners Weymouth",
    "cleaners Poundbury",
    
    // Service-specific cleaner terms
    "weekly cleaners Dorchester",
    "deep cleaning cleaners West Dorset",
    "end of tenancy cleaners Dorchester",
    "reliable cleaners Weymouth",
    "best cleaners Dorchester",
    
    // Surrounding area cleaners
    "cleaners Winterbourne",
    "cleaners Broadmayne", 
    "cleaners Maiden Newton",
    "cleaners Charminster",
    "cleaners Osmington",
    
    // Trust & quality cleaner keywords
    "trusted cleaners Dorchester",
    "insured cleaners West Dorset",
    "DBS checked cleaners Dorchester",
    "professional house cleaners Dorset"
  ],
  authors: [{ name: "Teal - Your Clean Queen" }],
  creator: "Your Clean Queen",
  publisher: "Your Clean Queen",
// START: Added Favicon and Manifest Configuration
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
    // Note: android-chrome icons are typically referenced via the manifest
  },
  manifest: '/site.webmanifest',
  // END: Added Favicon and Manifest Configuration
  
  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://yourcleanqueen.co.uk",
    siteName: "Your Clean Queen",
    title: "Professional Cleaners Dorchester & West Dorset | Your Clean Queen",
    description: "Your Clean Queen provides reliable, professional cleaners across Dorchester, West Dorset and surrounding areas. Trusted house cleaners with 5+ years experience and 500+ happy customers.",
    images: [
      {
        url: "/images/your-clean-queen-og.jpg",
        width: 1200,
        height: 630,
        alt: "Your Clean Queen - Professional Cleaners in Dorchester and West Dorset"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Your Clean Queen - Professional Cleaners Dorchester, West Dorset",
    description: "Professional house cleaners in Dorchester, West Dorset & surrounding areas. Reliable, trusted, royal treatment standard.",
    images: ["/images/your-clean-queen-og.jpg"]
  },
  
  // Local business info
  other: {
    "business:contact_data:locality": "Dorchester",
    "business:contact_data:region": "West Dorset, Dorset", 
    "business:contact_data:country_name": "United Kingdom",
    "business:contact_data:postal_code": "DT1",
  },
  
  // Additional SEO elements
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
  },
  
  verification: {
    google: "your-google-verification-code",
  }
};

// Enhanced Structured Data for Local Business (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yourcleanqueen.co.uk",
  "name": "Your Clean Queen",
  "alternateName": ["Your Clean Queen Cleaners", "Cleaners Dorchester", "Professional Cleaners West Dorset"],
  "description": "Professional house cleaners in Dorchester, West Dorset and surrounding areas. Reliable domestic cleaning services with royal treatment standards. Fully insured cleaners with 5+ years experience.",
  "url": "https://yourcleanqueen.co.uk",
  "founder": {
    "@type": "Person",
    "name": "Teal"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Dorchester",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "West Dorset"
      }
    },
    {
      "@type": "City", 
      "name": "Weymouth",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "West Dorset"
      }
    },
    {
      "@type": "City",
      "name": "Poundbury", 
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "West Dorset"
      }
    },
    {
      "@type": "AdministrativeArea",
      "name": "West Dorset"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dorchester",
    "addressRegion": "West Dorset, Dorset",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.7312,
    "longitude": -2.4414
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates", 
      "latitude": 50.7312,
      "longitude": -2.4414
    },
    "geoRadius": "15 mi"
  },
  "services": [
    {
      "@type": "Service",
      "name": "Regular House Cleaning",
      "description": "Weekly and fortnightly house cleaning services by professional cleaners"
    },
    {
      "@type": "Service", 
      "name": "Deep Cleaning Service",
      "description": "Thorough deep cleaning for homes by experienced cleaners"
    },
    {
      "@type": "Service",
      "name": "End of Tenancy Cleaning", 
      "description": "Professional end of tenancy cleaning by qualified cleaners"
    }
  ],
  "priceRange": "££",
  "telephone": "+44-XXXX-XXXXXX",
  "email": "hello@yourcleanqueen.co.uk",
  "openingHours": "Mo-Fr 08:00-18:00",
  "paymentAccepted": "Cash, Bank Transfer, Card",
  "currenciesAccepted": "GBP",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "3",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Mitchell"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Your Clean Queen transformed my home! The attention to detail was incredible. The team is fantastic - highly recommend their professional service!"
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "James Thompson"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Reliable, professional, and friendly service. It's such a relief to come home to a sparkling clean house every fortnight."
    },
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Emily Carter"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The best cleaning service in Poundbury by far. They are thorough, trustworthy, and always leave my home looking and smelling amazing."
    }
  ]
};

// FAQ Schema for targeting cleaner-related questions
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you have professional cleaners in Dorchester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Your Clean Queen provides professional house cleaners across Dorchester and West Dorset. All our cleaners are fully trained, DBS checked, and committed to delivering excellent residential cleaning."
      }
    },
    {
      "@type": "Question", 
      "name": "Do you cover West Dorset for cleaning services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we provide professional cleaning services throughout West Dorset including Dorchester, Weymouth, Poundbury and surrounding areas within a 15-mile radius."
      }
    },
    {
      "@type": "Question",
      "name": "How much do cleaners cost in Dorchester?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our cleaning prices are competitive and transparent. Contact us for a free quote - we tailor our services to your specific needs and home size."
      }
    },
    {
      "@type": "Question",
      "name": "Are your cleaners insured and DBS checked?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all Your Clean Queen cleaners are fully insured and DBS checked for your complete peace of mind. We are a professional, trustworthy cleaning company."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* Structured Data for Local Business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        
        {/* FAQ Schema for cleaner-related questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
        
        {/* Google Fonts for brand typography */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourcleanqueen.co.uk" />
        
        {/* Local business specific meta tags */}
        <meta name="geo.region" content="GB-DOR" />
        <meta name="geo.placename" content="Dorchester, West Dorset" />
        <meta name="geo.position" content="50.7312;-2.4414" />
        <meta name="ICBM" content="50.7312, -2.4414" />
      </head>
      <body className={`font-body`}>
        {children}
      </body>
    </html>
  );
}