import { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import TrustBar from '../../components/TrustBar'
import Services from '../../components/Services'
import BookingForm from '../../components/BookingForm'
import About from '../../components/About'
import GoogleReviews from '../../components/GoogleReviews'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "Cleaners West Dorset | Professional Cleaning Services | Your Clean Queen",
  description: "Professional cleaners across West Dorset providing reliable cleaning services. Serving Dorchester, Weymouth, Poundbury and surrounding areas. Fully insured cleaners with local expertise throughout West Dorset.",
  keywords: [
    "cleaners West Dorset",
    "cleaning services West Dorset", 
    "professional cleaners West Dorset",
    "house cleaners West Dorset",
    "domestic cleaners West Dorset",
    "residential cleaners West Dorset",
    "local cleaners West Dorset",
    "reliable cleaners West Dorset",
    "insured cleaners West Dorset",
    "cleaners Dorset",
    "West Dorset cleaning company",
    "cleaners Dorchester Weymouth",
    "cleaners near me West Dorset",
    "best cleaners West Dorset",
    "Your Clean Queen West Dorset"
  ],
  openGraph: {
    title: "Professional Cleaners West Dorset | Your Clean Queen",
    description: "Professional cleaners across West Dorset. Reliable, insured cleaning services serving Dorchester, Weymouth, Poundbury and surrounding areas.",
    url: "https://yourcleanqueen.co.uk/cleaners-west-dorset",
  },
}

export default function CleanersWestDorset() {
  const serviceAreas = [
    { name: "Dorchester", population: "20,000+", specialty: "Historic homes" },
    { name: "Weymouth", population: "65,000+", specialty: "Coastal properties" },
    { name: "Poundbury", population: "4,000+", specialty: "Modern developments" },
    { name: "Portland", population: "13,000+", specialty: "Island properties" },
    { name: "Blandford Forum", population: "12,000+", specialty: "Market town homes" },
    { name: "Winterbourne", population: "1,500+", specialty: "Village properties" }
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="text-center py-8 md:py-12 lg:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6 md:mb-8">
              Professional <span className="text-accent-cream">Cleaners</span> Across West Dorset
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
              Your Clean Queen provides reliable, professional cleaners throughout West Dorset. 
              From historic Dorchester to coastal Weymouth, we&apos;re your trusted local cleaning experts across the region.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">15mi</div>
                <div className="text-white/80 text-sm md:text-base">Service Radius</div>
                <div className="text-xs text-white/60 mt-1">Covering all West Dorset</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-white/80 text-sm md:text-base">Towns Served</div>
                <div className="text-xs text-white/60 mt-1">Professional cleaners everywhere</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm md:text-base">Local Knowledge</div>
                <div className="text-xs text-white/60 mt-1">West Dorset specialists</div>
              </div>
            </div>

            <a 
              href="#contact"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 shadow-lg border-2 border-black"
            >
              Book Cleaners in Your Area
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
              Why Choose Your Clean Queen Across West Dorset?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              As the leading cleaning company in West Dorset, we understand the diverse needs of properties across our beautiful region. 
              From coastal homes to historic buildings, we provide specialized cleaning solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1L9,7V9C9,10.1 9.9,11 11,11V19C11,20.1 11.9,21 13,21H11C9.9,21 9,20.1 9,19V11C7.9,11 7,10.1 7,9V7L1,1L7,7H17L23,1L17,7V9C17,10.1 16.1,11 15,11V19C15,20.1 15.9,21 17,21H15C13.9,21 13,20.1 13,19V11C14.1,11 15,10.1 15,9M12,16A2,2 0 0,1 10,14A2,2 0 0,1 12,12A2,2 0 0,1 14,14A2,2 0 0,1 12,16Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Regional Expertise</h3>
              <p className="text-gray-600 text-sm">Deep knowledge of West Dorset properties, from cottages to modern homes</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.1V11.1C14.8,12.6 13.4,14.1 12,14.1C10.6,14.1 9.2,12.6 9.2,11.1V10.1C9.2,8.6 10.6,7 12,7Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Fully Insured & DBS</h3>
              <p className="text-gray-600 text-sm">Complete peace of mind with full insurance and background checks</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">5-Star Rated Service</h3>
              <p className="text-gray-600 text-sm">Consistently excellent results across all West Dorset locations</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Eco-Friendly Products</h3>
              <p className="text-gray-600 text-sm">Safe for your family, pets, and West Dorset&apos;s beautiful environment</p>
            </div>
          </div>

          {/* Service Areas Grid */}
          <div className="mb-12">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800 mb-8 text-center">
              Our Professional Cleaners Serve These West Dorset Areas:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-heading font-bold text-gray-800 mb-2">{area.name}</h4>
                  <div className="text-sm text-gray-600 mb-2">Population: {area.population}</div>
                  <div className="text-xs text-green-600 font-semibold bg-green-100 px-3 py-1 rounded-full inline-block">
                    {area.specialty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <Services />
      <BookingForm />
      <About />
      <GoogleReviews />
      <Footer />
    </main>
  )
}