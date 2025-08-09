import { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import TrustBar from '../../components/TrustBar'
import Services from '../../components/Services'
import BookingForm from '../../components/BookingForm'
import About from '../../components/About'
import GoogleReviews from '../../components/GoogleReviews'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "House Cleaners Weymouth | Professional Cleaning Services | Your Clean Queen",
  description: "Professional house cleaners in Weymouth providing reliable residential cleaning services. Weekly, fortnightly & one-off house cleaning. Fully insured house cleaners serving Weymouth and surrounding areas.",
  keywords: [
    "house cleaners Weymouth",
    "house cleaning Weymouth", 
    "professional house cleaners Weymouth",
    "residential cleaners Weymouth",
    "weekly house cleaners Weymouth",
    "fortnightly house cleaning Weymouth",
    "domestic cleaners Weymouth",
    "local house cleaners Weymouth",
    "reliable house cleaners Weymouth",
    "insured house cleaners Weymouth",
    "house cleaning services Weymouth",
    "home cleaners Weymouth",
    "house cleaners near me Weymouth",
    "best house cleaners Weymouth",
    "Your Clean Queen Weymouth"
  ],
  openGraph: {
    title: "Professional House Cleaners Weymouth | Your Clean Queen",
    description: "Professional house cleaners in Weymouth. Reliable, insured residential cleaning services. Book your house cleaning service today.",
    url: "https://yourcleanqueen.co.uk/house-cleaners-weymouth",
  },
}

// Nearby Areas Component
function NearbyAreasSection() {
  const nearbyServices = [
    {
      title: "Cleaners Dorchester",
      description: "Our main service hub with the most experienced team and 237 monthly searches for professional cleaners.",
      href: "/cleaners-dorchester",
      icon: "🏛️", 
      highlight: "Main Hub",
      distance: "8 miles from Weymouth",
      benefit: "Most popular service area"
    },
    {
      title: "Domestic Cleaners Dorchester", 
      description: "Specialized domestic cleaning with flexible scheduling for residential properties.",
      href: "/domestic-cleaners-dorchester",
      icon: "🏠",
      highlight: "Domestic Focus",
      distance: "8 miles from Weymouth",
      benefit: "Residential specialists"
    },
    {
      title: "Regional West Dorset Services",
      description: "Complete coverage across West Dorset including coastal and inland properties.",
      href: "/cleaners-west-dorset", 
      icon: "🌍",
      highlight: "Full Coverage",
      distance: "Covers Weymouth area",
      benefit: "Regional expertise"
    }
  ]

  return (
    <section className="py-8 md:py-16 bg-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
            Professional Cleaners in Nearby Areas
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Your Clean Queen serves the entire West Dorset region from our Dorchester base. 
            Explore our specialized cleaning services in nearby areas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {nearbyServices.map((service, index) => (
            <Link key={index} href={service.href} className="group">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                    {service.highlight}
                  </span>
                </div>
                
                <h3 className="text-lg md:text-xl font-heading font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">
                  {service.description}
                </p>
                
                <div className="bg-blue-50 p-3 rounded-lg mb-3">
                  <div className="text-xs font-semibold text-blue-700 mb-1">📍 {service.distance}</div>
                  <div className="text-xs text-gray-700">✓ {service.benefit}</div>
                </div>
                
                <div className="flex items-center text-blue-600 font-semibold text-sm">
                  View Area Details
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-heading font-bold mb-3">
              Serving Coastal & Inland Properties
            </h3>
            <p className="text-blue-100 text-sm md:text-base mb-4">
              From Weymouth's seafront to Dorchester's historic center, we understand the unique cleaning needs of different property types across West Dorset.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link 
                href="/"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors duration-300 border-2 border-black"
              >
                View All Services
              </Link>
              <Link 
                href="#contact"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors duration-300"
              >
                Get Quote for Weymouth
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HouseCleanersWeymouth() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-blue-500 to-blue-700">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="text-center py-8 md:py-12 lg:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6 md:mb-8">
              Professional <span className="text-accent-cream">House Cleaners</span> in Weymouth
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
              Your Clean Queen provides reliable, professional house cleaners throughout Weymouth and surrounding areas. 
              Trusted house cleaning experts serving the beautiful seaside town of Weymouth.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">SEASIDE</div>
                <div className="text-white/80 text-sm md:text-base">Town Specialists</div>
                <div className="text-xs text-white/60 mt-1">Experienced with coastal homes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">LOCAL</div>
                <div className="text-white/80 text-sm md:text-base">Weymouth Based</div>
                <div className="text-xs text-white/60 mt-1">Professional house cleaners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">5★</div>
                <div className="text-white/80 text-sm md:text-base">Rated Service</div>
                <div className="text-xs text-white/60 mt-1">Trusted house cleaners</div>
              </div>
            </div>

            <a 
              href="#contact"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 shadow-lg border-2 border-black"
            >
              Book House Cleaners Today
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
              Why Choose Our House Cleaners in Weymouth?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Our house cleaners understand the unique challenges of maintaining homes in Weymouth&apos;s coastal environment. 
              From sandy floors to salt air effects, we provide specialized house cleaning services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5,5H19L18.59,7H17V20H15V7H9V20H7V7H5.41L5,5M12,2A1,1 0 0,1 13,3A1,1 0 0,1 12,4A1,1 0 0,1 11,3A1,1 0 0,1 12,2Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Coastal Home Specialists</h3>
              <p className="text-gray-600 text-sm">Experienced with seaside homes, sand removal, and salt air effects</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.1V11.1C14.8,12.6 13.4,14.1 12,14.1C10.6,14.1 9.2,12.6 9.2,11.1V10.1C9.2,8.6 10.6,7 12,7Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Fully Insured & DBS</h3>
              <p className="text-gray-600 text-sm">Complete peace of mind with full insurance and background checks</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">5-Star Rated Service</h3>
              <p className="text-gray-600 text-sm">Consistently excellent results rated by Weymouth customers</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Holiday Home Ready</h3>
              <p className="text-gray-600 text-sm">Specialized service for Weymouth holiday homes and B&Bs</p>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <Services />
      <NearbyAreasSection />
      <BookingForm />
      <About />
      <GoogleReviews />
      <Footer />
    </main>
  )
}