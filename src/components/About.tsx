import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-8 md:py-16 bg-[#A8E6CF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full h-48 md:h-64 lg:h-80 xl:h-96 rounded-lg shadow-xl overflow-hidden">
              <Image
                src="https://placehold.co/600x450/"
                alt="Your Clean Queen professional cleaning team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mb-6 md:mb-8 text-left">
              <p className="text-vibrant-green font-semibold text-sm md:text-base lg:text-lg mb-2">About Us</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-3 md:mb-4">
                Your Trusted Local Cleaning Experts in Dorset
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
              At Your Clean Queen, we're passionate about making homes sparkle. Based in Dorchester, our fully trained, polite, and professional cleaners provide top-quality housekeeping services across Dorset.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base lg:text-lg">
              We believe in reliability, trustworthiness, and meticulous attention to detail. Whether you need regular cleaning or specialized services, our team is dedicated to exceeding your expectations.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm border-2 border-black">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-vibrant-green mb-1 md:mb-2">5+</div>
                <div className="text-gray-600 text-xs md:text-sm">Years Experience</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm border-2 border-black">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-vibrant-green mb-1 md:mb-2">500+</div>
                <div className="text-gray-600 text-xs md:text-sm">Happy Customers</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm border-2 border-black">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-vibrant-green mb-1 md:mb-2">100%</div>
                <div className="text-gray-600 text-xs md:text-sm">Fully Insured</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-white rounded-lg shadow-sm border-2 border-black">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-vibrant-green mb-1 md:mb-2">25km</div>
                <div className="text-gray-600 text-xs md:text-sm">Service Radius</div>
              </div>
            </div>
            
            <Link 
              href="#contact" 
              className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-6 py-2.5 md:px-8 md:py-3 rounded-lg transition-colors duration-300 shadow-lg text-sm md:text-base border-2 border-black"
            >
              Learn More & Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}