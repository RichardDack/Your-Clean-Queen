import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-b border-gray-700 pb-8 md:pb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4 md:mb-6">
              <Image
                src="/images/logo.png"
                alt="Your Clean Queen Logo"
                width={32}
                height={32}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span className="text-lg md:text-xl font-bold">Your Clean Queen</span>
            </div>
            
            <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed max-w-md text-sm md:text-base">
              Professional house cleaning services for homes across Dorchester, Weymouth, and Dorset. 
              We make your home sparkle with our personal touch!
            </p>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com/yourcleanqueen" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com/yourcleanqueen" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-heading font-semibold mb-4 md:mb-6 text-white">Our Services</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors text-sm md:text-base">Home Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors text-sm md:text-base">Deep Cleaning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors text-sm md:text-base">End of Tenancy</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors text-sm md:text-base">Free Quotes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-heading font-semibold mb-4 md:mb-6 text-white">Contact Info</h4>
            <div className="space-y-2 md:space-y-3 text-gray-300">
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-vibrant-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                </svg>
                <a href="tel:01305233872" className="font-semibold hover:text-white transition-colors text-sm md:text-base">01305 123 456</a>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-vibrant-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
                <a href="mailto:hello@yourcleanqueen.co.uk" className="hover:text-white transition-colors text-sm md:text-base break-all">hello@yourcleanqueen.co.uk</a>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-vibrant-green flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19S6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z"/>
                </svg>
                <span className="text-sm md:text-base">Dorchester, Dorset</span>
              </div>
            </div>
            
            <a
              href="#contact"
              className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-4 py-2.5 md:px-6 md:py-3 rounded-lg transition-colors duration-300 mt-4 md:mt-6 shadow-lg text-sm md:text-base border-2 border-black"
            >
              Book Free Quote
            </a>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-700 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-400 text-xs md:text-sm mb-3 md:mb-0">
              © {currentYear} Your Clean Queen. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <div className="text-center mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              Serving Dorchester • Weymouth • Poundbury • And surrounding Dorset areas within 25km radius
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}