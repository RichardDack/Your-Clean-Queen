import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#A8E6CF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative w-full h-80 md:h-96 lg:h-[450px] rounded-lg shadow-xl overflow-hidden">
              <Image
                src="https://placehold.co/600x450/"
                alt="Your Clean Queen professional cleaning team"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mb-8 text-left">
              <p className="text-vibrant-green font-semibold text-lg mb-2">About Us</p>
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4">
                Your Trusted Local Cleaning Experts in Dorset
              </h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              At Your Clean Queen, we're passionate about making homes sparkle. Based in Dorchester, our fully trained, polite, and professional cleaners provide top-quality housekeeping services across Dorset. We understand that every home is unique, and we pride ourselves on delivering a personal touch with every clean.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              We believe in reliability, trustworthiness, and meticulous attention to detail. Whether you need a regular cleaning schedule, a one-off deep clean, or specialized services like end of tenancy cleaning, our team is dedicated to exceeding your expectations and giving you back your precious time.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-vibrant-green mb-2">5+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-vibrant-green mb-2">500+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-vibrant-green mb-2">100%</div>
                <div className="text-gray-600 text-sm">Fully Insured</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-vibrant-green mb-2">25km</div>
                <div className="text-gray-600 text-sm">Service Radius</div>
              </div>
            </div>
            
            <Link 
              href="#contact" 
              className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg"
            >
              Learn More & Get Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}