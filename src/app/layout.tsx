import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Professional Cleaners Dorchester | Royal Treatment | Fully Insured & DBS Checked | Your Clean Queen",
    template: "%s | Royal Treatment | Your Clean Queen"
  },
  description: "Professional cleaners in Dorchester and West Dorset with Royal Treatment standards. Superior quality vs budget competitors. Fully insured & DBS checked with 5+ years experience.",
  keywords: [
    "cleaners Dorchester",
    "cleaners West Dorset", 
    "house cleaners Dorchester",
    "professional cleaners West Dorset",
    "cleaners near me Dorchester",
    "domestic cleaners Dorchester",
    "home cleaners West Dorset",
    "residential cleaners Dorchester",
    "local cleaners Weymouth",
    "cleaners Poundbury",
    "weekly cleaners Dorchester",
    "deep cleaning cleaners West Dorset",
    "end of tenancy cleaners Dorchester",
    "reliable cleaners Weymouth",
    "best cleaners Dorchester",
    "cleaners Winterbourne",
    "cleaners Broadmayne", 
    "cleaners Maiden Newton",
    "cleaners Charminster",
    "cleaners Osmington",
    "trusted cleaners Dorchester",
    "insured cleaners West Dorset",
    "DBS checked cleaners Dorchester",
    "professional house cleaners Dorset"
  ],
  authors: [{ name: "Teal - Your Clean Queen" }],
  creator: "Your Clean Queen",
  publisher: "Your Clean Queen",
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  
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
  
  twitter: {
    card: "summary_large_image",
    title: "Your Clean Queen - Professional Cleaners Dorchester, West Dorset",
    description: "Professional house cleaners in Dorchester, West Dorset & surrounding areas. Reliable, trusted, royal treatment standard.",
    images: ["/images/your-clean-queen-og.jpg"]
  },
  
  other: {
    "business:contact_data:locality": "Dorchester",
    "business:contact_data:region": "West Dorset, Dorset", 
    "business:contact_data:country_name": "United Kingdom",
    "business:contact_data:postal_code": "DT1",
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
  },
  
  verification: {
    google: "your-google-verification-code",
  }
};

const enhancedStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://yourcleanqueen.co.uk/#business",
      "name": "Your Clean Queen",
      "alternateName": ["Your Clean Queen Cleaners", "Professional House Cleaners Dorchester", "Cleaners Dorchester", "House Cleaners West Dorset"],
      "description": "Professional house cleaning services in Dorchester, West Dorset. Reliable domestic cleaners providing weekly, fortnightly and deep cleaning services. Fully insured with 5+ years experience.",
      "url": "https://yourcleanqueen.co.uk",
      "telephone": "+44-1305-566785",
      "email": "hello@yourcleanqueen.co.uk",
      "founder": {
        "@type": "Person",
        "name": "Teal"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dorchester",
        "addressRegion": "West Dorset",
        "addressCountry": "GB",
        "postalCode": "DT1"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 50.7312,
        "longitude": -2.4414
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Dorchester"
        },
        {
          "@type": "City", 
          "name": "Weymouth"
        },
        {
          "@type": "City",
          "name": "Poundbury"
        },
        {
          "@type": "AdministrativeArea",
          "name": "West Dorset"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates", 
          "latitude": 50.7312,
          "longitude": -2.4414
        },
        "geoRadius": "15 mi"
      },
      "openingHours": "Mo-Fr 09:00-18:00",
      "priceRange": "££",
      "paymentAccepted": ["Cash", "Bank Transfer", "Card"],
      "currenciesAccepted": "GBP",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "10",
        "bestRating": "5"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "House Cleaning Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Regular House Cleaning",
              "description": "Weekly and fortnightly house cleaning services for homes in Dorchester and West Dorset",
              "serviceType": "House Cleaning"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Deep Cleaning Service",
              "description": "Comprehensive deep cleaning for homes in Dorchester and West Dorset",
              "serviceType": "Deep Cleaning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "End of Tenancy Cleaning",
              "description": "Professional end of tenancy cleaning with deposit-back guarantee",
              "serviceType": "End of Tenancy Cleaning"
            }
          }
        ]
      },
      "additionalType": "https://schema.org/HouseCleaner",
      "knowsAbout": [
        "House Cleaning",
        "Domestic Cleaning", 
        "Residential Cleaning",
        "Home Cleaning",
        "Professional Cleaning"
      ],
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sharon Taylor"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "So lovely coming home to a clean home. Wouldn't hesitate to recommend.",
          "datePublished": "2025-07-15"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Ruth Dyer"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "I would thoroughly recommend YourCleanQueen for providing a wonderful cleaning service. The professionalism and attention to detail were exceptional.",
          "datePublished": "2025-07-08"
        },
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Richard"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Such a great find! This cleaner is the whole package: professional in their work, with a wonderfully welcoming and friendly personality. They transformed our house, leaving it absolutely spotless. A huge bonus for us was how dog-friendly they are.",
          "datePublished": "2025-06-12"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://yourcleanqueen.co.uk/#organization", 
      "name": "Your Clean Queen",
      "url": "https://yourcleanqueen.co.uk",
      "logo": "https://yourcleanqueen.co.uk/images/logo.png",
      "sameAs": [
        "https://facebook.com/yourcleanqueen",
        "https://twitter.com/yourcleanqueen"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+44-1305-566785",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "GB"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://yourcleanqueen.co.uk/#website",
      "url": "https://yourcleanqueen.co.uk",
      "name": "Your Clean Queen - Professional Cleaners Dorchester",
      "description": "Professional house cleaning services in Dorchester and West Dorset",
      "publisher": {
        "@id": "https://yourcleanqueen.co.uk/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://yourcleanqueen.co.uk/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(enhancedStructuredData)
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema)
          }}
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        
        <link rel="canonical" href="https://yourcleanqueen.co.uk" />
        
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