import { Metadata } from 'next'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import FindCleanersSection from '../components/FindCleanersSection'
import Services from '../components/Services'
import BookingForm from '../components/BookingForm'
import About from '../components/About'
import GoogleReviews from '../components/GoogleReviews'
import Areas from '../components/Areas'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: "Cleaners Dorchester | Professional House Cleaners West Dorset | Your Clean Queen",
  description: "Professional cleaners in Dorchester and West Dorset. Reliable house cleaners providing weekly cleaning, deep cleans & end of tenancy services. Fully insured cleaners with 5+ years experience serving West Dorset.",
  keywords: [
    "cleaners Dorchester",
    "cleaners West Dorset",
    "house cleaners Dorchester", 
    "professional cleaners West Dorset",
    "domestic cleaners Dorchester",
    "reliable cleaners Weymouth",
    "local cleaners Poundbury",
    "best cleaners Dorchester",
    "trusted cleaners West Dorset",
    "Your Clean Queen cleaners"
  ],
  openGraph: {
    title: "Professional Cleaners Dorchester & West Dorset | Your Clean Queen",
    description: "Your Clean Queen provides reliable, professional cleaners across Dorchester, West Dorset and surrounding areas. Trusted house cleaners with 5+ years experience.",
  },
}

export default function Home() {
  const homepageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Professional Cleaners Dorchester & West Dorset | Your Clean Queen",
    "description": "Professional house cleaning services in Dorchester, West Dorset and surrounding areas. Reliable cleaners with 5+ years experience providing weekly, deep and end of tenancy cleaning.",
    "url": "https://yourcleanqueen.co.uk",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://yourcleanqueen.co.uk/#website"
    },
    "about": {
      "@type": "LocalBusiness",
      "@id": "https://yourcleanqueen.co.uk/#business"
    },
    "mainEntity": {
      "@type": "LocalBusiness",
      "@id": "https://yourcleanqueen.co.uk/#business"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://yourcleanqueen.co.uk"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Cleaners Dorchester",
          "item": "https://yourcleanqueen.co.uk/cleaners-dorchester"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Domestic Cleaners Dorchester", 
          "item": "https://yourcleanqueen.co.uk/domestic-cleaners-dorchester"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "House Cleaners Weymouth",
          "item": "https://yourcleanqueen.co.uk/house-cleaners-weymouth"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Cleaners West Dorset",
          "item": "https://yourcleanqueen.co.uk/cleaners-west-dorset"
        }
      ]
    },
    "keywords": [
      "cleaners Dorchester",
      "cleaners West Dorset", 
      "house cleaners Dorchester",
      "professional cleaners West Dorset",
      "domestic cleaners Dorchester",
      "reliable cleaners Weymouth",
      "local cleaners Poundbury",
      "house cleaning services",
      "domestic cleaning services",
      "professional cleaning company"
    ]
  };

  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "House Cleaning Services by Your Clean Queen",
    "description": "Professional house cleaning services available across Dorchester and West Dorset",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "Regular House Cleaning",
        "description": "Weekly and fortnightly house cleaning services by professional cleaners",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://yourcleanqueen.co.uk/#business"
        },
        "serviceType": "House Cleaning",
        "additionalType": "https://schema.org/HouseCleaner"
      },
      {
        "@type": "Service", 
        "position": 2,
        "name": "Deep Cleaning Service",
        "description": "Comprehensive deep cleaning for homes by experienced cleaners",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://yourcleanqueen.co.uk/#business"
        },
        "serviceType": "Deep Cleaning",
        "additionalType": "https://schema.org/HouseCleaner"
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "End of Tenancy Cleaning",
        "description": "Professional end of tenancy cleaning by qualified cleaners",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://yourcleanqueen.co.uk/#business"
        },
        "serviceType": "End of Tenancy Cleaning",
        "additionalType": "https://schema.org/HouseCleaner"
      }
    ]
  };

  const locationListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList", 
    "name": "Areas Served by Your Clean Queen Cleaners",
    "description": "Professional cleaning services available across these West Dorset locations",
    "itemListElement": [
      {
        "@type": "Place",
        "position": 1,
        "name": "Dorchester",
        "description": "Professional cleaners in Dorchester - our main service area with 5+ years experience",
        "url": "https://yourcleanqueen.co.uk/cleaners-dorchester",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.7312,
          "longitude": -2.4414
        }
      },
      {
        "@type": "Place",
        "position": 2,
        "name": "Weymouth", 
        "description": "House cleaners in Weymouth specializing in coastal properties and holiday homes",
        "url": "https://yourcleanqueen.co.uk/house-cleaners-weymouth",
        "geo": {
          "@type": "GeoCoordinates", 
          "latitude": 50.6098,
          "longitude": -2.4598
        }
      },
      {
        "@type": "Place",
        "position": 3,
        "name": "Poundbury",
        "description": "Domestic cleaners in Poundbury for modern developments and residential properties",
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.7167,
          "longitude": -2.4667
        }
      },
      {
        "@type": "Place",
        "position": 4,
        "name": "West Dorset",
        "description": "Regional cleaning coverage across all West Dorset towns and villages",
        "url": "https://yourcleanqueen.co.uk/cleaners-west-dorset"
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema)
        }}
      />
      
      <Script
        id="service-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListSchema)
        }}
      />

      <Script
        id="location-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(locationListSchema)
        }}
      />

      <Navbar />
      <Hero />
      <TrustBar />
      <FindCleanersSection />
      <Services />
      <BookingForm />
      <About />
      <GoogleReviews />
      <Areas />
      <FAQ />
      <Footer />
    </main>
  )
}