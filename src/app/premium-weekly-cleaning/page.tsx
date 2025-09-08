import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import BookingForm from '../../components/BookingForm'
import Footer from '../../components/Footer'
import SchemaMarkup from '../../components/SchemaMarkup'
import { richSnippetsSchema } from '../lib/rich-snippets-schema'

export const metadata: Metadata = {
  title: "Premium Weekly Cleaning | Royal Treatment Quality Standards | Superior to Budget Services | Your Clean Queen",
  description: "Premium weekly cleaning services with Royal Treatment quality standards. Superior professional service vs budget competitors like Maid2Clean's £17.48/hour. Fully insured & DBS checked cleaners.",
  keywords: [
    "premium weekly cleaning",
    "royal treatment cleaning",
    "weekly house cleaning dorchester",
    "professional weekly cleaners",
    "premium cleaning service",
    "quality weekly cleaning",
    "weekly domestic cleaning",
    "superior weekly cleaning"
  ],
  openGraph: {
    title: "Premium Weekly Cleaning | Royal Treatment Quality Standards | Your Clean Queen",
    description: "Premium weekly cleaning services with Royal Treatment quality standards. Superior professional service vs budget competitors.",
  },
}

export default function PremiumWeeklyCleaning() {
  // Enhanced service details for rich snippets
  const serviceDetails = {
    name: "Premium Weekly Cleaning",
    description: "Premium weekly cleaning services with Royal Treatment quality standards. Professional cleaners providing superior service vs budget competitors like Maid2Clean's £17.48/hour basic approach. Personalized, thorough cleaning that treats your home like royalty.",
    serviceType: "Weekly House Cleaning",
    areaServed: ["Dorchester", "Weymouth", "Poundbury", "Charminster", "Upwey", "Chickerell"],
    priceRange: "££",
    duration: "PT2H-PT4H",
    features: [
      "Royal Treatment quality standards",
      "DBS-checked professional cleaners",
      "Eco-friendly premium products",
      "Consistent quality with detailed checklists",
      "Personalized service tailored to your home",
      "Fully insured with comprehensive coverage",
      "Flexible scheduling to suit your lifestyle",
      "Superior to budget competitors"
    ]
  };

  // Enhanced FAQ with competitive positioning
  const faqs = [
    ...richSnippetsSchema.SERVICE_FAQS.weeklycleaning,
    {
      question: "Why is Your Clean Queen better than Maid2Clean's £17.48/hour service?",
      answer: "While Maid2Clean focuses on speed and low prices, our Royal Treatment approach prioritizes quality, consistency, and personalized service. Our DBS-checked cleaners spend the time needed to properly clean your home, not rush through it."
    },
    {
      question: "Do you offer fortnightly cleaning as well as weekly?",
      answer: "Yes, we offer both weekly and fortnightly cleaning services with the same Royal Treatment quality standards. We'll work with you to find the perfect schedule for your home and lifestyle."
    }
  ];

  // Sample reviews for premium weekly cleaning
  const reviews = [
    {
      rating: 5,
      reviewText: "The difference between Your Clean Queen and our previous budget cleaner is incredible. The Royal Treatment approach really shows - every detail is perfect!",
      author: "Sarah M.",
      datePublished: "2024-01-15",
      location: "Dorchester"
    },
    {
      rating: 5,
      reviewText: "Worth every penny! The quality is so much better than the cheap services. Our home has never looked better and the team is so professional.",
      author: "Michael R.",
      datePublished: "2023-12-28",
      location: "Weymouth"
    }
  ];

  // Breadcrumb navigation
  const breadcrumbs = [
    { name: "Home", url: "https://yourcleanqueen.co.uk/" },
    { name: "Services", url: "https://yourcleanqueen.co.uk/services" },
    { name: "Premium Weekly Cleaning", url: "https://yourcleanqueen.co.uk/premium-weekly-cleaning" }
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
          src="/images/living.jpg"
          alt="Premium weekly cleaning - Royal Treatment quality standards"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight text-white mb-6">
              <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Premium Weekly Cleaning</span>
              <span className="block text-accent-cream mt-2">Royal Treatment Quality Standards</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 max-w-2xl">
              Experience the difference with our premium weekly cleaning service. 
              Superior Royal Treatment quality vs budget competitors - your home deserves the best.
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

      {/* Royal Treatment Standards Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
                Royal Treatment Quality Standards
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our premium weekly cleaning service sets the gold standard in Dorchester and West Dorset. 
                While budget competitors focus on speed and low prices, we focus on quality, 
                consistency, and the premium experience your home deserves.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "DBS-checked, fully trained professional cleaners",
                  "Eco-friendly, premium cleaning products",
                  "Consistent quality with detailed checklists",
                  "Personalized service tailored to your home",
                  "Fully insured with comprehensive coverage",
                  "Flexible scheduling to suit your lifestyle"
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
                  The Royal Treatment Difference
                </h3>
                <p className="text-gray-700">
                  We believe your home should be treated like a palace. Our premium approach means 
                  attention to details that budget services miss, creating a truly exceptional cleaning experience.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/bath.jpg"
                alt="Premium weekly cleaning service - Royal Treatment quality"
                width={600}
                height={400}
                className="rounded-xl shadow-lg border-2 border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              What's Included in Premium Weekly Cleaning
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every premium weekly clean includes comprehensive attention to detail 
              that transforms your home into a pristine sanctuary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Living Areas Excellence",
                items: [
                  "Thorough dusting of all surfaces",
                  "Professional vacuuming with attention to edges",
                  "Furniture polishing and care",
                  "Skirting boards and architraves",
                  "Light switches and door handles sanitized",
                  "Mirrors and glass surfaces streak-free"
                ]
              },
              {
                title: "Kitchen Deep Clean",
                items: [
                  "Worktops sanitized and polished",
                  "Appliance exterior cleaning",
                  "Sink and taps polished to shine",
                  "Splashback detailed cleaning",
                  "Floor mopping with premium products",
                  "Bin emptying and sanitization"
                ]
              },
              {
                title: "Bathroom Sanitization",
                items: [
                  "Toilet deep clean and sanitization",
                  "Bath and shower thorough scrubbing",
                  "Tiles and grout attention",
                  "Mirror and chrome polishing",
                  "Floor sanitization and mopping",
                  "Towel and mat arrangement"
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

      {/* Premium vs Budget Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6">
              Premium Quality vs Budget Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understand the difference between our Royal Treatment approach and 
              budget competitors who prioritize speed over quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
              <h3 className="text-xl font-heading font-bold text-red-800 mb-4">
                Budget Services (£17.48/hour)
              </h3>
              <ul className="space-y-2">
                {[
                  "Rush through cleaning in minimal time",
                  "Basic surface cleaning only",
                  "Generic corporate approach",
                  "Limited product quality",
                  "High staff turnover",
                  "No personalized service",
                  "Focus on quantity over quality"
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
                Royal Treatment Premium Service
              </h3>
              <ul className="space-y-2">
                {[
                  "Thorough attention to every detail",
                  "Comprehensive deep cleaning approach",
                  "Personal, professional relationship",
                  "Premium eco-friendly products",
                  "Consistent, trained team members",
                  "Tailored to your specific needs",
                  "Quality and excellence focused"
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

          <div className="text-center mt-12">
            <div className="bg-vibrant-green/10 rounded-xl p-8 border-2 border-vibrant-green/20">
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                Investment in Quality Pays Off
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                While budget services may seem cheaper initially, our premium approach provides 
                better value through superior results, reliability, and peace of mind. 
                Your home deserves the Royal Treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingForm />
      <Footer />
    </main>
  )
}