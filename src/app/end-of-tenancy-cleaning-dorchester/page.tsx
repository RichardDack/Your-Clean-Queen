import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import BookingForm from '../../components/BookingForm'
import Footer from '../../components/Footer'
import SchemaMarkup from '../../components/SchemaMarkup'
import { richSnippetsSchema } from '../lib/rich-snippets-schema'

export const metadata: Metadata = {
  title: "End of Tenancy Cleaning Dorchester | Sparkling results | Royal Treatment | Your Clean Queen",
  description: "Professional end of tenancy cleaning in Dorchester with Sparkling results. Expert cleaners following strict landlord checklists. Superior service vs budget competitors like Maid2Clean's £17.48/hour.",
  keywords: [
    "end of tenancy cleaning dorchester",
    "Sparkling results dorchester",
    "professional end of tenancy cleaners",
    "landlord checklist cleaning",
    "move out cleaning dorchester",
    "tenancy cleaning west dorset",
    "end of lease cleaning",
    "professional move out cleaners"
  ],
  openGraph: {
    title: "End of Tenancy Cleaning Dorchester | Sparkling results | Your Clean Queen",
    description: "Professional end of tenancy cleaning in Dorchester with Sparkling results. Expert cleaners following strict landlord checklists.",
  },
}

export default function EndOfTenancyCleaningDorchester() {
  // Enhanced service details for rich snippets
  const serviceDetails = {
    name: "End of Tenancy Cleaning Dorchester",
    description: "Professional end of tenancy cleaning services in Dorchester with Sparkling results. Expert cleaners following strict landlord checklists to ensure full deposit return. Superior Royal Treatment quality vs budget competitors.",
    serviceType: "End of Tenancy Cleaning",
    areaServed: ["Dorchester", "Poundbury", "Charminster", "Winterbourne Abbas"],
    priceRange: "££",
    duration: "PT4H-PT8H",
    features: [
      "Sparkling results",
      "Complete landlord checklist compliance", 
      "Inside oven and appliance cleaning",
      "Professional carpet cleaning available",
      "Detailed bathroom sanitization",
      "All surfaces and fixtures cleaned",
      "DBS checked cleaners",
      "Fully insured service"
    ]
  };

  // Enhanced FAQ with more comprehensive answers
  const faqs = [
    ...richSnippetsSchema.SERVICE_FAQS.endOfTenancy,
    {
      question: "Why choose Your Clean Queen over budget competitors for end of tenancy cleaning?",
      answer: "Unlike budget services like Maid2Clean's £17.48/hour basic cleaning, our Royal Treatment approach includes comprehensive landlord checklist compliance, Sparkling results, and professional-grade equipment. We focus on quality over speed to ensure your deposit is protected."
    },
    {
      question: "Do you clean inside appliances for end of tenancy?",
      answer: "Yes, our end of tenancy cleaning includes thorough cleaning inside all appliances - oven, hob, microwave, fridge, and freezer. This is essential for meeting landlord standards and securing deposit return."
    }
  ];

  // Sample reviews for this service
  const reviews = [
    {
      rating: 5,
      reviewText: "Fantastic end of tenancy clean! Got our full deposit back thanks to Your Clean Queen's thorough work. The guarantee gave us complete peace of mind.",
      author: "Emma L.",
      datePublished: "2024-01-05",
      location: "Dorchester"
    },
    {
      rating: 5,
      reviewText: "Professional service that actually follows the landlord checklist properly. Much better than the budget cleaners we considered. Worth every penny!",
      author: "David K.",
      datePublished: "2024-01-12",
      location: "Poundbury"
    }
  ];

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Home", url: "https://yourcleanqueen.co.uk/" },
    { name: "Services", url: "https://yourcleanqueen.co.uk/services" },
    { name: "End of Tenancy Cleaning Dorchester", url: "https://yourcleanqueen.co.uk/end-of-tenancy-cleaning-dorchester" }
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
          src="/images/oven.jpg"
          alt="End of tenancy cleaning Dorchester - professional oven cleaning"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight text-white mb-6">
              <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>End of Tenancy Cleaning</span>
              <span className="block text-accent-cream mt-2">Dorchester</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-2xl">
              Professional end of tenancy cleaning in Dorchester with Sparkling results. 
              Expert cleaners following strict landlord checklists - superior quality vs budget competitors.
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

      {/* Professional Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
                Professional End of Tenancy Cleaning Expertise in Dorchester
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Moving out of your rental property in Dorchester? Our professional end of tenancy cleaning service 
                ensures you get your full deposit back. Unlike budget competitors charging £17.48/hour, 
                we provide comprehensive Royal Treatment cleaning that meets strict landlord standards.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Sparkling results - we stand behind our work",
                  "Complete landlord checklist compliance",
                  "Inside oven, fridge, and all appliances cleaned",
                  "Professional carpet and upholstery cleaning available",
                  "Detailed bathroom and kitchen sanitization",
                  "All surfaces, skirting boards, and light fittings cleaned"
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
                  Why Choose Our End of Tenancy Service?
                </h3>
                <p className="text-gray-700">
                  We understand Dorchester rental market requirements. Our experienced cleaners have helped 
                  hundreds of tenants secure their full deposits with our thorough, professional approach.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/deep.jpg"
                alt="Professional end of tenancy cleaning team in Dorchester"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border-2 border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Checklist Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Complete End of Tenancy Cleaning Checklist
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our professional cleaners follow a comprehensive checklist to ensure every area meets 
              landlord standards for deposit return in Dorchester properties.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kitchen Deep Clean",
                items: [
                  "Inside and outside of all appliances",
                  "Oven, hob, and extractor fan deep clean",
                  "Fridge and freezer sanitization",
                  "All cupboards inside and out",
                  "Worktops and splashbacks",
                  "Sink and taps polished"
                ]
              },
              {
                title: "Bathroom Sanitization",
                items: [
                  "Toilet deep clean and sanitization",
                  "Bath, shower, and tiles scrubbed",
                  "Mirror and glass surfaces",
                  "All fixtures and fittings",
                  "Floor mopping and sanitizing",
                  "Ventilation cleaning"
                ]
              },
              {
                title: "Living Areas",
                items: [
                  "All surfaces dusted and polished",
                  "Skirting boards and architraves",
                  "Light switches and sockets",
                  "Window sills and frames",
                  "Carpet vacuuming or floor mopping",
                  "Radiators and heating elements"
                ]
              }
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-black">
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-4">
                  {area.title}
                </h3>
                <ul className="space-y-2">
                  {area.items.map((item, idx) => (
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

      {/* Competitive Advantage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Superior to Budget Competitors in Dorchester
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While budget services like Maid2Clean charge £17.48/hour with basic cleaning, 
              our Royal Treatment approach ensures your deposit is protected.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-heading font-bold text-red-800 mb-4">
                Budget Competitors
              </h3>
              <ul className="space-y-2">
                {[
                  "Basic surface cleaning only",
                  "No Sparkling results",
                  "Generic corporate approach",
                  "Limited appliance cleaning",
                  "No landlord checklist compliance",
                  "Risk of deposit deductions"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-red-700">
                    <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-vibrant-green/30">
              <h3 className="text-xl font-heading font-bold text-vibrant-green mb-4">
                Your Clean Queen Royal Treatment
              </h3>
              <ul className="space-y-2">
                {[
                  "Comprehensive deep cleaning service",
                  "Sparkling results included",
                  "Personal, professional approach",
                  "Complete appliance deep cleaning",
                  "Strict landlord checklist compliance",
                  "Full deposit protection assurance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start text-vibrant-green">
                    <svg className="w-4 h-4 text-vibrant-green mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <BookingForm />
      <Footer />
    </main>
  )
}