import type { Metadata } from "next";
import "./globals.css";



// SEO-optimized metadata for local cleaning business
export const metadata: Metadata = {
  title: {
    default: "Your Clean Queen - Professional House Cleaning Services | Dorchester, Weymouth, Dorset",
    template: "%s | Your Clean Queen - House Cleaning Dorchester, Weymouth"
  },
  description: "Professional residential cleaning services in Dorchester, Weymouth, Poundbury, and surrounding Dorset areas. Reliable, trustworthy house cleaning with royal treatment standards. Book your clean today!",
  keywords: [
    // Primary local keywords
    "house cleaning Dorchester",
    "cleaning services Weymouth", 
    "domestic cleaning Poundbury",
    "home cleaning Dorset",
    "residential cleaning Dorchester",
    
    // Service-specific keywords
    "weekly cleaning Dorchester",
    "one-off cleaning Weymouth",
    "deep cleaning services Dorset",
    "regular house cleaning",
    "professional cleaners Dorchester",
    
    // Surrounding areas
    "cleaning services Winterbourne",
    "house cleaning Broadmayne",
    "domestic cleaning Maiden Newton",
    "cleaning Charminster",
    "house cleaning Osmington",
    
    // Trust & quality keywords
    "reliable cleaners Dorchester",
    "trusted cleaning service Weymouth",
    "insured house cleaning Dorset",
    "local cleaning company"
  ],
  authors: [{ name: "Teal - Your Clean Queen" }],
  creator: "Your Clean Queen",
  publisher: "Your Clean Queen",
  
  // Open Graph for social sharing
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://yourcleanqueen.co.uk",
    siteName: "Your Clean Queen",
    title: "Professional House Cleaning Services - Dorchester, Weymouth, Dorset",
    description: "Your Clean Queen provides reliable, professional house cleaning services across Dorchester, Weymouth, Poundbury and surrounding Dorset areas. Experience the royal treatment for your home.",
    images: [
      {
        url: "/images/your-clean-queen-og.jpg",
        width: 1200,
        height: 630,
        alt: "Your Clean Queen - Professional House Cleaning Services in Dorchester and Weymouth"
      }
    ]
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Your Clean Queen - House Cleaning Dorchester, Weymouth",
    description: "Professional house cleaning services in Dorchester, Weymouth & Dorset. Reliable, trusted, royal treatment standard.",
    images: ["/images/your-clean-queen-og.jpg"]
  },
  
  // Local business info
  other: {
    "business:contact_data:locality": "Dorchester",
    "business:contact_data:region": "Dorset", 
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
    google: "your-google-verification-code", // Add when you set up Google Search Console
  }
};

// Structured Data for Local Business (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://yourcleanqueen.co.uk",
  "name": "Your Clean Queen",
  "alternateName": "Your Clean Queen Cleaning Services",
  "description": "Professional residential cleaning services in Dorchester, Weymouth, Poundbury, and surrounding Dorset areas with royal treatment standards.",
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
        "name": "Dorset"
      }
    },
    {
      "@type": "City", 
      "name": "Weymouth",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Dorset"
      }
    },
    {
      "@type": "City",
      "name": "Poundbury", 
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Dorset"
      }
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dorchester",
    "addressRegion": "Dorset",
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
    "geoRadius": "25000" // 25km radius
  },
  "services": [
    {
      "@type": "Service",
      "name": "Regular House Cleaning",
      "description": "Weekly and fortnightly residential cleaning services"
    },
    {
      "@type": "Service", 
      "name": "One-off Deep Cleaning",
      "description": "Thorough deep cleaning for homes"
    },
    {
      "@type": "Service",
      "name": "Move-in/Move-out Cleaning", 
      "description": "Comprehensive cleaning for property transitions"
    }
  ],
  "priceRange": "££",
  "telephone": "+44-XXXX-XXXXXX", // Add your actual phone number
  "email": "hello@yourcleanqueen.co.uk", // Add your actual email
  "openingHours": "Mo-Fr 08:00-18:00",
  "paymentAccepted": "Cash, Bank Transfer, Card",
  "currenciesAccepted": "GBP"
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
        <meta name="geo.placename" content="Dorchester, Dorset" />
        <meta name="geo.position" content="50.7312;-2.4414" />
        <meta name="ICBM" content="50.7312, -2.4414" />
      </head>
      <body className={`font-body`}>
        {children}
      </body>
    </html>
  );
}