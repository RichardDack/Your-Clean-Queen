import { Metadata } from 'next'
import Navbar from '../../components/Navbar'
import TrustBar from '../../components/TrustBar'
import Services from '../../components/Services'
import BookingForm from '../../components/BookingForm'
import About from '../../components/About'
import GoogleReviews from '../../components/GoogleReviews'
import Footer from '../../components/Footer'

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
      <BookingForm />
      <About />
      <GoogleReviews />
      <Footer />
    </main>
  )
}