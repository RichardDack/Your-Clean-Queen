import { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import TrustBar from '../../components/TrustBar'
import Services from '../../components/Services'
import BookingForm from '../../components/BookingForm'
import About from '../../components/About'
import GoogleReviews from '../../components/GoogleReviews'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: "Domestic Cleaners Dorchester | Professional House Cleaners | Your Clean Queen",
  description: "Professional domestic cleaners in Dorchester providing reliable residential cleaning services. Weekly, fortnightly & one-off domestic cleaning. Fully insured domestic cleaners with local expertise in Dorchester.",
  keywords: [
    "domestic cleaners Dorchester",
    "domestic cleaning Dorchester", 
    "house cleaners Dorchester",
    "residential cleaners Dorchester",
    "weekly domestic cleaners Dorchester",
    "fortnightly domestic cleaning Dorchester",
    "professional domestic cleaners Dorchester",
    "local domestic cleaners Dorchester",
    "reliable domestic cleaners Dorchester",
    "insured domestic cleaners Dorchester",
    "domestic cleaning services Dorchester",
    "home cleaners Dorchester",
    "domestic cleaners near me Dorchester",
    "Your Clean Queen domestic cleaners"
  ],
  openGraph: {
    title: "Professional Domestic Cleaners Dorchester | Your Clean Queen",
    description: "Professional domestic cleaners in Dorchester. Reliable, insured residential cleaning services. Book your domestic cleaning service today.",
    url: "https://yourcleanqueen.co.uk/domestic-cleaners-dorchester",
  },
}

export default function DomesticCleanersDorchester() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-sage-green to-vibrant-green">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
          <div className="text-center py-8 md:py-12 lg:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight text-white mb-6 md:mb-8">
              Professional <span className="text-accent-cream">Domestic Cleaners</span> in Dorchester
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto mb-8 md:mb-12">
              Your Clean Queen provides reliable, professional domestic cleaners throughout Dorchester and surrounding areas. 
              Local domestic cleaning experts you can trust with your home.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-8 md:mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">72</div>
                <div className="text-white/80 text-sm md:text-base">Monthly Searches</div>
                <div className="text-xs text-white/60 mt-1">For domestic cleaners in Dorchester</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">LOCAL</div>
                <div className="text-white/80 text-sm md:text-base">Dorchester Based</div>
                <div className="text-xs text-white/60 mt-1">Professional domestic cleaners</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-white">
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">DBS</div>
                <div className="text-white/80 text-sm md:text-base">Checked & Insured</div>
                <div className="text-xs text-white/60 mt-1">Trusted domestic cleaners</div>
              </div>
            </div>

            <a 
              href="#contact"
              className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg md:text-xl transition-colors duration-300 shadow-lg border-2 border-black"
            >
              Book Domestic Cleaners Today
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
              Why Choose Our Domestic Cleaners in Dorchester?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              As local Dorchester residents, our domestic cleaners understand the specific needs of homes in our community. 
              We provide reliable, professional residential cleaning services with a personal touch.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-vibrant-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V7A3,3 0 0,1 12,10A3,3 0 0,1 9,7V5A3,3 0 0,1 12,2M12,11A3,3 0 0,1 15,14V16A3,3 0 0,1 12,19A3,3 0 0,1 9,16V14A3,3 0 0,1 12,11M12,20A3,3 0 0,1 15,23H9A3,3 0 0,1 12,20Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Local Domestic Cleaners</h3>
              <p className="text-gray-600 text-sm">Born and raised in Dorchester, we understand local homes and their needs</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-vibrant-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.1V11.1C14.8,12.6 13.4,14.1 12,14.1C10.6,14.1 9.2,12.6 9.2,11.1V10.1C9.2,8.6 10.6,7 12,7Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Trusted & Insured</h3>
              <p className="text-gray-600 text-sm">Complete peace of mind with full insurance and DBS checks for all domestic cleaners</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gray-50 border-2 border-black">
              <div className="w-16 h-16 bg-vibrant-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9,12L11,14L15,10L13,8L11,10L9,8M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">Weekly, fortnightly or monthly domestic cleaning to suit your lifestyle</p>
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
      <GoogleReviews />
      <Footer />
    </main>
  )
}