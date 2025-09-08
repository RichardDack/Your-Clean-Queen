import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import BookingForm from '../../components/BookingForm'
import Footer from '../../components/Footer'
import SchemaMarkup from '../../components/SchemaMarkup'
import { richSnippetsSchema } from '../lib/rich-snippets-schema'

export const metadata: Metadata = {
  title: "Professional Cleaners Poundbury | Local Expertise | Royal Treatment | Your Clean Queen",
  description: "Professional cleaners in Poundbury with local expertise. Specialized service for modern developments and residential properties. Superior quality vs budget competitors.",
  keywords: [
    "professional cleaners poundbury",
    "cleaners poundbury",
    "poundbury cleaning service",
    "local cleaners poundbury",
    "house cleaners poundbury",
    "domestic cleaners poundbury",
    "poundbury house cleaning",
    "residential cleaners poundbury"
  ],
  openGraph: {
    title: "Professional Cleaners Poundbury | Local Expertise | Your Clean Queen",
    description: "Professional cleaners in Poundbury with local expertise. Specialized service for modern developments and residential properties.",
  },
}

export default function ProfessionalCleanersPoundbury() {
  // Enhanced service details for Poundbury location
  const serviceDetails = {
    name: "Professional Cleaners Poundbury",
    description: "Professional cleaning services in Poundbury with specialized local expertise. Understanding modern developments, community standards, and contemporary property care. Tailored service for Poundbury's unique blend of traditional architecture and modern living.",
    serviceType: "House Cleaning",
    areaServed: ["Poundbury", "Dorchester", "Queen Mother Square", "Brownsword Hall Area"],
    priceRange: "££",
    duration: "PT2H-PT6H",
    features: [
      "Specialized care for modern property layouts",
      "Understanding of Poundbury community standards",
      "Experience with contemporary fixtures and fittings",
      "Knowledge of local property management requirements",
      "Flexible scheduling for busy Poundbury residents",
      "Eco-friendly products suitable for modern homes",
      "All property types: apartments, houses, townhouses",
      "Respect for community values and standards"
    ]
  };

  // Enhanced FAQ with Poundbury-specific information
  const faqs = [
    ...richSnippetsSchema.SERVICE_FAQS.poundbury,
    {
      question: "Do you understand Poundbury's unique architectural requirements?",
      answer: "Yes, we understand Poundbury's unique blend of traditional architecture and modern living. Our cleaning approach respects both the community's heritage values and contemporary lifestyle needs, ensuring appropriate care for all property types."
    },
    {
      question: "Can you work around Poundbury's community guidelines?",
      answer: "Absolutely! We're familiar with Poundbury's community standards and guidelines. Our professional, respectful approach aligns with the development's values while providing excellent cleaning services."
    }
  ];

  // Sample reviews from Poundbury residents
  const reviews = [
    {
      rating: 5,
      reviewText: "Perfect service for our Poundbury townhouse! The team understands modern properties and community standards perfectly. Professional and respectful approach.",
      author: "James P.",
      datePublished: "2024-01-10",
      location: "Poundbury"
    },
    {
      rating: 5,
      reviewText: "Excellent local knowledge and service quality. They understand what Poundbury residents expect and deliver consistently. Highly recommend!",
      author: "Catherine W.",
      datePublished: "2024-01-07",
      location: "Poundbury"
    }
  ];

  // Poundbury-specific local business data
  const poundburyBusinessData = {
    ...richSnippetsSchema.DEFAULT_BUSINESS_DATA,
    address: {
      ...richSnippetsSchema.DEFAULT_BUSINESS_DATA.address,
      addressLocality: "Poundbury, Dorchester"
    },
    serviceAreas: ["Poundbury", "Dorchester", "Queen Mother Square", "Brownsword Hall Area", "Phase 1 Development", "Phase 2 Expansion", "Phase 3 Areas"]
  };

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Home", url: "https://yourcleanqueen.co.uk/" },
    { name: "Service Areas", url: "https://yourcleanqueen.co.uk/service-areas" },
    { name: "Professional Cleaners Poundbury", url: "https://yourcleanqueen.co.uk/professional-cleaners-poundbury" }
  ];

  return (
    <main className="min-h-screen">
      <SchemaMarkup
        service={serviceDetails}
        faqs={faqs}
        reviews={reviews}
        breadcrumbs={breadcrumbs}
        localBusiness={poundburyBusinessData}
        includeOrganization={true}
      />

      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-16 md:pt-20">
        <Image
          src="/images/bath.jpg"
          alt="Professional cleaners Poundbury - local expertise and quality service"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight text-white mb-6">
              <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Professional Cleaners</span>
              <span className="block text-accent-cream mt-2">Poundbury</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-2xl">
              Local expertise for Poundbury's modern developments and residential properties. 
              Professional cleaning services with deep understanding of your community's standards.
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

      {/* Local Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
                Local Poundbury Cleaning Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As professional cleaners serving Poundbury, we understand the unique characteristics 
                of this modern development. From contemporary apartments to traditional-style houses, 
                we provide specialized cleaning services tailored to Poundbury's high standards.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Specialized care for modern property layouts",
                  "Understanding of Poundbury community standards",
                  "Experience with contemporary fixtures and fittings",
                  "Knowledge of local property management requirements",
                  "Flexible scheduling for busy Poundbury residents",
                  "Eco-friendly products suitable for modern homes"
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
                  Why Choose Local Poundbury Cleaners?
                </h3>
                <p className="text-gray-700">
                  Our local knowledge means we understand Poundbury's unique blend of traditional 
                  architecture and modern living, providing cleaning services that respect both 
                  the community's values and contemporary lifestyle needs.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/living.jpg"
                alt="Professional cleaning service in Poundbury modern development"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border-2 border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Poundbury Property Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Cleaning Services for All Poundbury Property Types
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From modern apartments to family houses, we provide specialized cleaning 
              services tailored to different property types in Poundbury.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Apartments",
                features: [
                  "Compact space optimization",
                  "Contemporary fixture care",
                  "Balcony and terrace cleaning",
                  "Shared area consideration",
                  "Efficient cleaning routines",
                  "Minimal disruption approach"
                ]
              },
              {
                title: "Family Houses",
                features: [
                  "Multi-room comprehensive cleaning",
                  "Child and pet-friendly products",
                  "Garden room and conservatory care",
                  "Flexible family scheduling",
                  "High-traffic area focus",
                  "Toy and play area sanitization"
                ]
              },
              {
                title: "Townhouses",
                features: [
                  "Multi-level cleaning expertise",
                  "Staircase and landing attention",
                  "Modern kitchen deep cleaning",
                  "Bathroom suite specialization",
                  "Storage area organization",
                  "Contemporary design respect"
                ]
              }
            ].map((propertyType, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-2 border-black">
                <h3 className="text-xl font-heading font-bold text-gray-800 mb-4">
                  {propertyType.title}
                </h3>
                <ul className="space-y-2">
                  {propertyType.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <svg className="w-4 h-4 text-vibrant-green mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Understanding Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Understanding Poundbury's Unique Community
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Poundbury represents a unique blend of traditional architecture and modern living. 
              Our cleaning services respect this distinctive character.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">
                Local Community Values
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Environmental Responsibility",
                    description: "Eco-friendly cleaning products that align with Poundbury's sustainability values"
                  },
                  {
                    title: "Community Standards",
                    description: "High-quality service that maintains the development's prestigious reputation"
                  },
                  {
                    title: "Respectful Service",
                    description: "Professional, courteous approach that fits with community expectations"
                  },
                  {
                    title: "Local Knowledge",
                    description: "Understanding of property management requirements and community guidelines"
                  }
                ].map((value, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-vibrant-green">
                    <h4 className="font-bold text-gray-800 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-vibrant-green/10 rounded-xl p-8 border-2 border-vibrant-green/20">
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-6">
                Poundbury Cleaning Advantages
              </h3>
              <ul className="space-y-3">
                {[
                  "Local cleaners who understand the area",
                  "Flexible scheduling for modern lifestyles",
                  "Respect for community standards and values",
                  "Experience with contemporary property features",
                  "Reliable service for busy professionals",
                  "Competitive rates for premium quality"
                ].map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-vibrant-green mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                    </svg>
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 pt-6 border-t border-vibrant-green/20">
                <p className="text-gray-700 text-sm italic">
                  "We're proud to serve the Poundbury community with cleaning services 
                  that match the development's commitment to quality and excellence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas in Poundbury */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Serving All Areas of Poundbury
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional cleaning services throughout Poundbury's different phases and developments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Phase 1 Development",
              "Phase 2 Expansion",
              "Phase 3 Areas",
              "Queen Mother Square",
              "Brownsword Hall Area",
              "Poundbury Gardens",
              "Commercial Areas",
              "All Residential Streets"
            ].map((area, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center border-2 border-gray-200 hover:border-vibrant-green transition-colors">
                <h4 className="font-bold text-gray-800">{area}</h4>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your specific area listed? We serve all of Poundbury - 
              <Link href="#contact" className="text-vibrant-green hover:underline ml-1">
                contact us for your location
              </Link>
            </p>
          </div>
        </div>
      </section>

      <BookingForm />
      <Footer />
    </main>
  )
}