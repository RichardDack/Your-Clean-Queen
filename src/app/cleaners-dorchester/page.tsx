import { Metadata } from 'next'
import Script from 'next/script'
import { enhancedSEO } from '../lib/enhanced-seo-utils'
import Navbar from '../../components/Navbar'
import TrustBar from '../../components/TrustBar'
import Services from '../../components/Services'
import BookingForm from '../../components/BookingForm'
import About from '../../components/About'
import GoogleReviews from '../../components/GoogleReviews'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = enhancedSEO.generateLocationPageMeta('Dorchester', {
  customTitle: "Professional Cleaners Dorchester | Royal Treatment | Local Specialists | Your Clean Queen",
  customDescription: "Professional cleaners in Dorchester with Royal Treatment standards and local expertise. Superior quality vs generic competitors like Lucy's Cleaning. Fully insured & DBS checked with 5+ years Dorchester experience.",
  canonical: "https://yourcleanqueen.co.uk/cleaners-dorchester",
  premiumPositioning: true
})

function OtherAreasSection() {
  const otherAreas = [
    {
      title: "Domestic Cleaners Dorchester",
      description: "Specialized domestic cleaning services with flexible scheduling for Dorchester homes.",
      href: "/domestic-cleaners-dorchester",
      icon: "🏠",
      highlight: "Domestic Focus"
    },
    {
      title: "House Cleaners Weymouth", 
      description: "Professional house cleaning for coastal properties and holiday homes in Weymouth.",
      href: "/house-cleaners-weymouth",
      icon: "🏖️",
      highlight: "Coastal Experts"
    },
    {
      title: "Cleaners West Dorset",
      description: "Complete regional coverage across all West Dorset towns and villages.",
      href: "/cleaners-west-dorset", 
      icon: "🌍",
      highlight: "Regional Coverage"
    }
  ]

  return (
    <section className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
            Looking for Cleaners in Other Areas?
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Your Clean Queen provides specialized cleaning services across West Dorset. 
            Explore our location-specific pages for local expertise and tailored services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {otherAreas.map((area, index) => (
            <Link key={index} href={area.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200 hover:border-vibrant-green hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{area.icon}</span>
                  <span className="text-xs font-semibold bg-vibrant-green/10 text-vibrant-green px-3 py-1 rounded-full">
                    {area.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-heading font-bold text-gray-800 mb-3 group-hover:text-vibrant-green transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {area.description}
                </p>
                
                <div className="flex items-center text-vibrant-green font-semibold text-sm">
                  Learn More
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-vibrant-green/5 border-2 border-vibrant-green/20 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-heading font-bold text-gray-800 mb-3">
              Serving All of West Dorset
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Can&apos;t find your specific location? We cover a 15-mile radius from Dorchester and serve many more areas across West Dorset.
            </p>
            <Link 
              href="/"
              className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors duration-300 mr-4 border-2 border-black"
            >
              View All Services
            </Link>
            <Link 
              href="#contact"
              className="inline-block bg-transparent border-2 border-vibrant-green text-vibrant-green hover:bg-vibrant-green hover:text-white font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors duration-300"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CleanersDorchester() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service", 
    "name": "Professional Cleaners Dorchester",
    "description": "Professional house cleaners in Dorchester providing reliable domestic cleaning services. Weekly, fortnightly and deep cleaning by experienced local cleaners with 5+ years experience.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Your Clean Queen",
      "@id": "https://yourcleanqueen.co.uk/#business"
    },
    "serviceType": "House Cleaning Service",
    "category": "Domestic Cleaning",
    "additionalType": "https://schema.org/HouseCleaner",
    "areaServed": {
      "@type": "City",
      "name": "Dorchester",
      "containedInPlace": {
        "@type": "AdministrativeArea", 
        "name": "West Dorset"
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "GBP",
      "priceRange": "££"
    },
    "knowsAbout": [
      "House Cleaning Dorchester",
      "Domestic Cleaning Dorchester",
      "Professional Cleaning Services",
      "Residential Cleaning"
    ]
  };

  return (
    <main className="min-h-screen">
      <Script
        id="dorchester-cleaners-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      
      <Navbar />
      
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-vibrant-green to-vibrant-green-dark">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="text-center py-8 md:py-12 lg:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6 md:mb-8">
              Professional <span className="text-accent-cream">Cleaners</span> in Dorchester
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
              Your Clean Queen provides reliable, professional house cleaners throughout Dorchester and surrounding areas. 
              Local cleaners you can trust with over 5 years experience serving the Dorchester community.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">237</div>
                <div className="text-white/80 text-sm md:text-base">Monthly Searches</div>
                <div className="text-xs text-white/60 mt-1">For cleaners in Dorchester</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-white/80 text-sm md:text-base">Happy Customers</div>
                <div className="text-xs text-white/60 mt-1">Across Dorchester & West Dorset</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">5+</div>
                <div className="text-white/80 text-sm md:text-base">Years Experience</div>
                <div className="text-xs text-white/60 mt-1">Professional Dorchester cleaners</div>
              </div>
            </div>

            <a 
              href="#contact"
              className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 shadow-lg border-2 border-black"
            >
              Book Dorchester Cleaners Today
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
              Why Choose Our Cleaners in Dorchester?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              As local Dorchester residents ourselves, we understand what makes our community special. 
              Our professional cleaners provide the royal treatment your home deserves.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-vibrant-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Local Dorchester Team</h3>
              <p className="text-gray-600 text-sm">Born and raised in Dorchester, we know the local area inside out</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-vibrant-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.1V11.1C14.8,12.6 13.4,14.1 12,14.1C10.6,14.1 9.2,12.6 9.2,11.1V10.1C9.2,8.6 10.6,7 12,7Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Fully Insured & DBS</h3>
              <p className="text-gray-600 text-sm">Complete peace of mind with full insurance and background checks</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-vibrant-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">5-Star Rated Service</h3>
              <p className="text-gray-600 text-sm">Consistently excellent results rated by Dorchester customers</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-vibrant-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm">Safe for your family, pets, and the Dorchester environment</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <Services />
      <OtherAreasSection />
      <BookingForm />
      <About />
      <GoogleReviews />
      <Footer />
    </main>
  )
}