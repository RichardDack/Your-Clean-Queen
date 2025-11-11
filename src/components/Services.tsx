import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      title: "Premium Weekly Cleaning",
      description: "Experience Royal Treatment quality standards with our premium weekly cleaning service. Superior professional service vs budget competitors - your home deserves the best.",
      image: "/images/living.jpg",
      features: ["Royal Treatment quality standards", "DBS-checked professional cleaners", "Eco-friendly premium products", "Personalized service approach"],
      href: "/premium-weekly-cleaning"
    },
    {
      title: "Deep Cleaning Service",
      description: "Comprehensive deep cleaning by experienced cleaners that reaches every corner of your home. Perfect for spring cleaning or one-off intensive cleaning needs in Dorchester and West Dorset.",
      image: "/images/deep.jpg",
      features: ["Complete top-to-bottom clean", "Inside appliances & cupboards", "Detailed bathroom sanitization", "Professional deep cleaning team"],
      href: "/deep-cleaning-service"
    },
    {
      title: "End of Tenancy Cleaning",
      description: "Professional end of tenancy cleaners to help you get your deposit back. Our experienced cleaners follow strict checklists to ensure your property meets landlord standards.",
      image: "/images/oven.jpg",
      features: ["Landlord-Ready Standards", "Complete property checklist", "Inside oven & appliances", "Professional carpet cleaning available"],
      href: "/end-of-tenancy-cleaning-dorchester"
    }
  ]

  // Area-specific service links
  const areaServices = [
    {
      area: "Dorchester",
      href: "/cleaners-dorchester",
      highlight: "Most Popular",
      description: "Our flagship service area with 5+ years experience"
    },
    {
      area: "Poundbury", 
      href: "/professional-cleaners-poundbury",
      highlight: "Local Expertise",
      description: "Specialized service for modern developments"
    },
    {
      area: "Weymouth", 
      href: "/house-cleaners-weymouth",
      highlight: "Coastal Experts",
      description: "Specialized service for seaside properties"
    },
    {
      area: "West Dorset",
      href: "/cleaners-west-dorset",
      highlight: "Full Coverage",
      description: "Complete regional cleaning solutions"
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
            <Link key={index} href={service.href} className="group">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 border-black flex flex-col group-hover:scale-105 transform transition-transform">
                <div className="relative w-full h-40 md:h-48 lg:h-56">
                  <Image
                    src={service.image}
                    alt={`${service.title} by professional cleaners in Dorchester and West Dorset`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold text-gray-800 mb-2 md:mb-3 group-hover:text-vibrant-green transition-colors">
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
                  <div className="flex items-center justify-center text-vibrant-green font-semibold text-sm mt-auto">
                    Learn More About {service.title}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Area-Specific Services Section */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-gray-800 mb-4">
              Find Professional Cleaners in Your Specific Area
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our cleaning services are tailored to the unique needs of different West Dorset communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
            {areaServices.map((area, index) => (
              <Link key={index} href={area.href} className="group">
                <div className="bg-gradient-to-br from-vibrant-green/5 to-vibrant-green/10 rounded-xl p-6 border-2 border-vibrant-green/20 hover:border-vibrant-green hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-center">
                  <div className="mb-4">
                    <span className="inline-block bg-vibrant-green text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {area.highlight}
                    </span>
                    <h4 className="text-lg md:text-xl font-heading font-bold text-gray-800 group-hover:text-vibrant-green transition-colors">
                      Cleaners {area.area}
                    </h4>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {area.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-vibrant-green font-semibold text-sm">
                    View {area.area} Services
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center bg-gray-50 rounded-xl p-6 md:p-8 border-2 border-gray-200">
            <h4 className="text-lg md:text-xl font-heading font-bold text-gray-800 mb-3">
              Need Specialized Domestic Cleaning?
            </h4>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Looking for dedicated domestic cleaning services in Dorchester? Our domestic cleaners offer personalized residential cleaning with flexible scheduling.
            </p>
            <Link 
              href="/domestic-cleaners-dorchester"
              className="inline-block bg-sage-green hover:bg-sage-green-dark text-white font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors duration-300 border-2 border-black"
            >
              View Domestic Cleaners
            </Link>
          </div>
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