import { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import TrustBar from '../../components/TrustBar'
import Services from '../../components/Services'
import BookingForm from '../../components/BookingForm'
import About from '../../components/About'
import Testimonials from '../../components/GoogleReviews'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "Professional Cleaners Dorchester | House Cleaning Services | Your Clean Queen",
  description: "Professional cleaners in Dorchester providing reliable house cleaning services. Weekly, fortnightly & one-off cleaning. Fully insured cleaners with 5+ years experience in Dorchester.",
  keywords: [
    "cleaners Dorchester",
    "house cleaners Dorchester", 
    "professional cleaners Dorchester",
    "domestic cleaners Dorchester",
    "reliable cleaners Dorchester",
    "weekly cleaning Dorchester",
    "fortnightly cleaning Dorchester",
    "one-off cleaning Dorchester",
    "deep cleaning Dorchester",
    "end of tenancy cleaning Dorchester",
    "local cleaners Dorchester",
    "trusted cleaners Dorchester",
    "insured cleaners Dorchester",
    "Your Clean Queen Dorchester"
  ],
  openGraph: {
    title: "Professional Cleaners Dorchester | Your Clean Queen",
    description: "Professional house cleaners in Dorchester. Reliable, insured cleaning services with 5+ years experience. Book your Dorchester cleaning service today.",
    url: "https://yourcleanqueen.co.uk/cleaners-dorchester",
  },
}

export default function CleanersDorchester() {
  return (
    <main className="min-h-screen">
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
      <BookingForm />
      <About />
      <Testimonials />
      <Footer />
    </main>
  )
}