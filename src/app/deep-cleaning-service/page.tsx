import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import BookingForm from '../../components/BookingForm'
import Footer from '../../components/Footer'
import SchemaMarkup from '../../components/SchemaMarkup'
import { richSnippetsSchema } from '../lib/rich-snippets-schema'

export const metadata: Metadata = {
  title: "Deep Cleaning Service | Comprehensive Process & Benefits | Professional Cleaners | Your Clean Queen",
  description: "Professional deep cleaning service with detailed process and benefits. Comprehensive cleaning that reaches every corner vs budget competitors. Expert cleaners in Dorchester and West Dorset.",
  keywords: [
    "deep cleaning service",
    "comprehensive deep cleaning",
    "professional deep clean",
    "deep cleaning dorchester",
    "deep cleaning west dorset",
    "thorough house cleaning",
    "intensive cleaning service",
    "spring cleaning service"
  ],
  openGraph: {
    title: "Deep Cleaning Service | Comprehensive Process & Benefits | Your Clean Queen",
    description: "Professional deep cleaning service with detailed process and benefits. Comprehensive cleaning that reaches every corner.",
  },
}

export default function DeepCleaningService() {
  // Enhanced service details for rich snippets
  const serviceDetails = {
    name: "Deep Cleaning Service",
    description: "Professional deep cleaning service with comprehensive process and benefits. Expert cleaners providing thorough cleaning that reaches every corner of your home. Systematic top-to-bottom approach that transforms your living space completely.",
    serviceType: "Deep Cleaning",
    areaServed: ["Dorchester", "Weymouth", "Poundbury", "West Dorset", "Charminster", "Upwey"],
    priceRange: "££",
    duration: "PT4H-PT8H",
    features: [
      "Complete top-to-bottom systematic approach",
      "Inside appliances, cupboards, and drawers",
      "Detailed bathroom sanitization and descaling",
      "Professional deep carpet and upholstery cleaning",
      "Window cleaning inside and sill deep clean",
      "Skirting boards, architraves, and light fittings",
      "Professional-grade equipment and products",
      "Perfect for spring cleaning and special occasions"
    ]
  };

  // Enhanced FAQ with comprehensive information
  const faqs = [
    ...richSnippetsSchema.SERVICE_FAQS.deepCleaning,
    {
      question: "What's the difference between deep cleaning and regular cleaning?",
      answer: "Deep cleaning is a comprehensive, systematic approach that covers areas typically missed in regular cleaning - inside appliances, detailed bathroom descaling, carpet deep cleaning, and thorough attention to skirting boards, light fittings, and hard-to-reach areas."
    },
    {
      question: "Is deep cleaning worth the investment?",
      answer: "Absolutely! Deep cleaning transforms your entire living space, eliminates built-up dirt and bacteria, and provides months of deep cleaning results in one professional session. It's perfect for maintaining a healthy, pristine home environment."
    }
  ];

  // Sample reviews for deep cleaning service
  const reviews = [
    {
      rating: 5,
      reviewText: "Amazing deep clean! The team was so thorough - they cleaned places I didn't even know needed cleaning. My home feels completely transformed.",
      author: "Jennifer H.",
      datePublished: "2024-01-08",
      location: "Dorchester"
    },
    {
      rating: 5,
      reviewText: "Perfect for our spring clean. The systematic approach really shows - every room was done to perfection. Professional service from start to finish.",
      author: "Robert T.",
      datePublished: "2024-01-03",
      location: "Weymouth"
    }
  ];

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Home", url: "https://yourcleanqueen.co.uk/" },
    { name: "Services", url: "https://yourcleanqueen.co.uk/services" },
    { name: "Deep Cleaning Service", url: "https://yourcleanqueen.co.uk/deep-cleaning-service" }
  ];

  return (
    <main className="min-h-screen">
      <SchemaMarkup
        service={serviceDetails}
        faqs={faqs}
        reviews={reviews}
        breadcrumbs={breadcrumbs}
        localBusiness={richSnippetsSchema.DEFAULT_BUSINESS_DATA}
        includeOrganization={true}
      />

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-16 md:pt-20">
        <Image
          src="/images/deep.jpg"
          alt="Deep cleaning service - comprehensive process and benefits"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight text-white mb-6">
              <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Deep Cleaning Service</span>
              <span className="block text-accent-cream mt-2">Comprehensive Process & Benefits</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-2xl">
              Professional deep cleaning that reaches every corner of your home. 
              Comprehensive process with detailed benefits - transforming your space completely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#contact" 
                className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-8 py-3 rounded-md text-lg transition-colors duration-300 shadow-md border-2 border-black text-center"
              >
                Get Free Quote
              </Link>
              <Link 
                href="tel:01305566785" 
                className="inline-block bg-vibrant-green text-white hover:bg-vibrant-green-dark font-bold px-8 py-3 rounded-md text-lg transition-colors duration-300 shadow-md border-2 border-black text-center"
              >
                Call 01305 566785
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
                Comprehensive Deep Cleaning Process
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our deep cleaning service goes far beyond regular cleaning. We follow a systematic, 
                comprehensive process that addresses every area of your home, reaching places that 
                are often overlooked in standard cleaning routines.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Complete top-to-bottom systematic approach",
                  "Inside appliances, cupboards, and drawers",
                  "Detailed bathroom sanitization and descaling",
                  "Professional deep carpet and upholstery cleaning",
                  "Window cleaning inside and sill deep clean",
                  "Skirting boards, architraves, and light fittings"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-vibrant-green mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-vibrant-green/10 rounded-xl p-6 border-2 border-vibrant-green/20">
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">
                  Why Choose Professional Deep Cleaning?
                </h3>
                <p className="text-gray-700">
                  Deep cleaning is perfect for spring cleaning, moving homes, after renovations, 
                  or when you want to completely refresh your living space with professional results.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/living.jpg"
                alt="Professional deep cleaning process - comprehensive and detailed"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border-2 border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Step-by-Step Deep Cleaning Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures every area receives the attention it deserves, 
              creating a completely transformed living environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Kitchen Deep Clean",
                items: [
                  "Inside oven, microwave, and all appliances",
                  "Cupboards inside and out, including shelves",
                  "Fridge and freezer deep clean",
                  "Worktops, splashbacks, and tiles scrubbed",
                  "Sink and taps descaled and polished",
                  "Floor deep mopping and sanitization"
                ]
              },
              {
                step: "2",
                title: "Bathroom Intensive Clean",
                items: [
                  "Toilet deep clean and sanitization",
                  "Bath, shower, and tiles descaled",
                  "Grout cleaning and mold treatment",
                  "Mirror and glass surfaces streak-free",
                  "Ventilation and extractor cleaning",
                  "Floor sanitization and deep mopping"
                ]
              },
              {
                step: "3",
                title: "Living Areas Transformation",
                items: [
                  "All surfaces dusted and polished",
                  "Skirting boards and architraves detailed",
                  "Light fittings and switches cleaned",
                  "Window sills and frames deep cleaned",
                  "Carpet deep cleaning or floor polishing",
                  "Furniture moved and cleaned underneath"
                ]
              }
            ].map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-black relative">
                <div className="absolute -top-4 -left-4 bg-vibrant-green text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg">
                  {process.step}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-4 mt-2">
                  {process.title}
                </h3>
                <ul className="space-y-2">
                  {process.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-4 h-4 text-vibrant-green mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Benefits of Professional Deep Cleaning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the transformative benefits of our comprehensive deep cleaning service 
              that goes beyond surface-level cleaning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏠",
                title: "Complete Home Refresh",
                description: "Transform your entire living space with comprehensive cleaning that reaches every corner and surface."
              },
              {
                icon: "🦠",
                title: "Health & Hygiene",
                description: "Eliminate bacteria, allergens, and germs with professional sanitization and deep cleaning techniques."
              },
              {
                icon: "⏰",
                title: "Time Saving",
                description: "Achieve months of deep cleaning in one professional session, saving you countless hours of work."
              },
              {
                icon: "✨",
                title: "Professional Results",
                description: "Experience the difference of professional-grade equipment, products, and expertise in every detail."
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-vibrant-green/10 rounded-xl p-8 border-2 border-vibrant-green/20">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                Perfect for Special Occasions
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  {
                    title: "Spring Cleaning",
                    description: "Annual deep refresh for your home"
                  },
                  {
                    title: "Moving In/Out",
                    description: "Start fresh or leave spotless"
                  },
                  {
                    title: "After Renovations",
                    description: "Remove dust and construction residue"
                  }
                ].map((occasion, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 border border-vibrant-green/20">
                    <h4 className="font-bold text-gray-800 mb-2">{occasion.title}</h4>
                    <p className="text-sm text-gray-600">{occasion.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingForm />
      <Footer />
    </main>
  )
}