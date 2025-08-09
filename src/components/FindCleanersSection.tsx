import Link from 'next/link'

export default function FindCleanersSection() {
  const areaPages = [
    {
      title: "Cleaners Dorchester",
      description: "Professional house cleaners serving Dorchester and surrounding areas with 5+ years experience.",
      href: "/cleaners-dorchester",
      searches: "237 monthly searches",
      highlight: "Most Popular"
    },
    {
      title: "Domestic Cleaners Dorchester", 
      description: "Specialized domestic cleaning services for Dorchester homes with flexible scheduling.",
      href: "/domestic-cleaners-dorchester",
      searches: "72 monthly searches",
      highlight: "Domestic Focus"
    },
    {
      title: "House Cleaners Weymouth",
      description: "Expert house cleaning services for Weymouth coastal properties and holiday homes.",
      href: "/house-cleaners-weymouth", 
      searches: "Coastal Specialists",
      highlight: "Seaside Experts"
    }
  ]

  return (
    <section className="py-8 md:py-16 bg-accent-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-4 md:mb-6">
            Find Professional Cleaners in Your Area
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Your Clean Queen provides specialized cleaning services across West Dorset. 
            Choose your area for location-specific information and local expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {areaPages.map((area, index) => (
            <Link key={index} href={area.href} className="group">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border-2 border-black hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold bg-vibrant-green text-white px-3 py-1 rounded-full">
                    {area.highlight}
                  </span>
                  <span className="text-xs text-gray-500">{area.searches}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800 mb-3 group-hover:text-vibrant-green transition-colors">
                  {area.title}
                </h3>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-1">
                  {area.description}
                </p>
                
                <div className="flex items-center text-vibrant-green font-semibold text-sm">
                  View Local Cleaners
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <div className="bg-white rounded-xl p-6 md:p-8 border-2 border-vibrant-green max-w-2xl mx-auto">
            <h3 className="text-lg md:text-xl font-heading font-bold text-gray-800 mb-3">
              Covering All of West Dorset
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Don&apos;t see your specific area? We serve the entire West Dorset region within a 15-mile radius of Dorchester.
            </p>
            <Link 
              href="/cleaners-west-dorset"
              className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors duration-300 border-2 border-black"
            >
              View All Areas We Serve
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}