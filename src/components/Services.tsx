import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Regular House Cleaning",
      description: "Our local house cleaners will ensure your home is always in immaculate condition. Professional cleaners providing weekly and fortnightly cleaning services across West Dorset.",
      image: "images/living.jpg",
      features: ["Weekly/fortnightly house cleaners", "Kitchen & bathroom deep clean", "Professional dusting & vacuuming", "Eco-friendly cleaning products"]
    },
    {
      title: "Deep Cleaning Service",
      description: "Comprehensive deep cleaning by experienced cleaners that reaches every corner of your home. Perfect for spring cleaning or one-off intensive cleaning needs in Dorchester and West Dorset.",
      image: "images/deep.jpg",
      features: ["Complete top-to-bottom clean", "Inside appliances & cupboards", "Detailed bathroom sanitization", "Professional deep cleaning team"]
    },
    {
      title: "End of Tenancy Cleaning",
      description: "Professional end of tenancy cleaners to help you get your deposit back. Our experienced cleaners follow strict checklists to ensure your property meets landlord standards.",
      image: "images/oven.jpg",
      features: ["Deposit-back guarantee", "Complete property checklist", "Inside oven & appliances", "Professional carpet cleaning available"]
    }
  ]

  return (
    <section id="services" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
            Professional cleaners for all your housekeeping needs
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            From regular maintenance to deep cleans, our experienced cleaners provide comprehensive cleaning solutions 
            across Dorchester, Weymouth, and surrounding West Dorset areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-black flex flex-col">
              <div className="relative w-full h-40 md:h-48 lg:h-56">
                <Image
                  src={service.image}
                  alt={`${service.title} by professional cleaners in Dorchester and West Dorset`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 md:p-6 flex flex-col flex-1">
                <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-gray-800 mb-2 md:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-12 md:mb-6 leading-relaxed flex-shrink-0 h-20 md:h-24">
                  {service.description}
                </p>
                <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 flex-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs md:text-sm text-gray-700">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-vibrant-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Link 
            href="#contact"
            className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-base md:text-lg transition-colors duration-300 shadow-lg border-2 border-black"
          >
            Get Your Free Cleaners Quote Today
          </Link>
        </div>
      </div>
    </section>
  )
}