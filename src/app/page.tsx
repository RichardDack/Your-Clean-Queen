import { Metadata } from 'next'
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
import SchemaMarkup from '../components/SchemaMarkup'
import { richSnippetsSchema } from './lib/rich-snippets-schema'

export const metadata: Metadata = {
  title: "Professional Cleaners Dorchester | Royal Treatment | Superior to Budget Services | Your Clean Queen",
  description: "Professional cleaners in Dorchester and West Dorset with Royal Treatment standards. Superior quality vs budget competitors hourly service. Fully insured & DBS checked with 5+ years experience.",
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
    title: "Professional Cleaners Dorchester | Royal Treatment | Superior Quality | Your Clean Queen",
    description: "Your Clean Queen provides premium cleaning services across Dorchester, West Dorset with Royal Treatment standards. Superior quality vs budget competitors. Fully insured & DBS checked.",
  },
}

export default function Home() {
  // Homepage FAQ for rich snippets
  const homepageFAQs = [
    {
      question: "What areas do you cover for house cleaning services?",
      answer: "Your Clean Queen provides professional house cleaning services throughout Dorchester, Weymouth, Poundbury, and surrounding West Dorset areas including Charminster, Upwey, Chickerell, Winterbourne Abbas, and more."
    },
    {
      question: "How much does house cleaning cost in Dorchester?",
      answer: "Our house cleaning prices are competitive and depend on the size of your home and frequency of service. We offer free, no-obligation quotes for all properties in Dorchester and surrounding areas. Unlike budget competitors charging £17.48/hour, we focus on quality and value."
    },
    {
      question: "Are you insured for house cleaning services?",
      answer: "Yes, Your Clean Queen is fully insured for all house cleaning services throughout Dorchester, Weymouth, and West Dorset. Your home and belongings are protected during every clean with comprehensive coverage."
    },
    {
      question: "What makes Your Clean Queen different from other cleaning companies?",
      answer: "Our Royal Treatment approach focuses on quality over quantity. Unlike budget competitors, we provide DBS-checked cleaners, premium eco-friendly products, personalized service, and consistent quality standards that exceed expectations."
    },
    {
      question: "Do you offer one-off deep cleaning services?",
      answer: "Absolutely! We provide one-off deep cleaning services throughout Dorchester and West Dorset. Perfect for spring cleaning, moving house, after renovations, or when you need an extra thorough clean with professional results."
    }
  ];

  // Homepage service overview
  const homepageService = {
    name: "Professional House Cleaning Services",
    description: "Comprehensive house cleaning services across Dorchester and West Dorset with Royal Treatment quality standards. Superior service vs budget competitors with DBS-checked cleaners, premium products, and personalized approach.",
    serviceType: "House Cleaning",
    areaServed: ["Dorchester", "Weymouth", "Poundbury", "West Dorset", "Charminster", "Upwey", "Chickerell"],
    priceRange: "££",
    features: [
      "Royal Treatment quality standards",
      "DBS-checked professional cleaners",
      "Fully insured comprehensive coverage",
      "Eco-friendly premium products",
      "Flexible scheduling options",
      "Weekly, fortnightly, and one-off services",
      "Deep cleaning and end of tenancy cleaning",
      "Local expertise across West Dorset"
    ]
  };

  // Homepage reviews showcasing quality
  const homepageReviews = [
    {
      rating: 5,
      reviewText: "Exceptional service from Your Clean Queen! The Royal Treatment approach really shows - attention to detail is outstanding. Much better than the budget cleaners we used before.",
      author: "Sarah M.",
      datePublished: "2024-01-15",
      location: "Dorchester"
    },
    {
      rating: 5,
      reviewText: "Professional, reliable, and thorough. The team understands local properties perfectly and always leaves our home spotless. Highly recommend over other cleaning companies!",
      author: "James P.",
      datePublished: "2024-01-10",
      location: "Poundbury"
    },
    {
      rating: 5,
      reviewText: "Quality service that's worth every penny. The difference between Your Clean Queen and budget competitors is night and day. Royal Treatment indeed!",
      author: "Michael R.",
      datePublished: "2023-12-28",
      location: "Weymouth"
    }
  ];

  // Custom schemas for homepage
  const customSchemas = [
    // Website schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://yourcleanqueen.co.uk/#website",
      "name": "Your Clean Queen",
      "description": "Professional house cleaning services in Dorchester and West Dorset with Royal Treatment standards",
      "url": "https://yourcleanqueen.co.uk",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://yourcleanqueen.co.uk/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    // Service list schema
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "House Cleaning Services by Your Clean Queen",
      "description": "Professional house cleaning services available across Dorchester and West Dorset",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "Premium Weekly Cleaning",
          "description": "Premium weekly cleaning services with Royal Treatment quality standards",
          "url": "https://yourcleanqueen.co.uk/premium-weekly-cleaning"
        },
        {
          "@type": "Service", 
          "position": 2,
          "name": "Deep Cleaning Service",
          "description": "Comprehensive deep cleaning for homes by experienced cleaners",
          "url": "https://yourcleanqueen.co.uk/deep-cleaning-service"
        },
        {
          "@type": "Service",
          "position": 3,
          "name": "End of Tenancy Cleaning",
          "description": "Professional end of tenancy cleaning with Sparkling results",
          "url": "https://yourcleanqueen.co.uk/end-of-tenancy-cleaning-dorchester"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      <SchemaMarkup
        service={homepageService}
        faqs={homepageFAQs}
        reviews={homepageReviews}
        localBusiness={richSnippetsSchema.DEFAULT_BUSINESS_DATA}
        includeOrganization={true}
        customSchemas={customSchemas}
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