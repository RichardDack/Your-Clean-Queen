import Link from 'next/link'

export default function Areas() {
  const primaryAreas = [
    {
      name: "Dorchester", 
      link: "/cleaners-dorchester",
      description: "Our most popular area - 237 monthly searches for professional cleaners"
    },
    {
      name: "West Dorset", 
      link: "/cleaners-west-dorset",
      description: "Regional coverage across all West Dorset towns and villages"
    },
    {
      name: "Weymouth", 
      link: "/house-cleaners-weymouth",
      description: "Coastal property specialists with experience in seaside homes"
    },
    {
      name: "Poundbury", 
      link: "/domestic-cleaners-dorchester",
      description: "Domestic cleaning experts for modern Poundbury developments"
    }
  ]
  
  const surroundingAreas = [
    "Portland", "Blandford Forum", "Winterbourne", "Broadmayne", 
    "Maiden Newton", "Charminster"
  ]

  return (
    <section className="py-8 md:py-16 bg-gradient-to-r from-vibrant-green to-vibrant-green-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-4 md:mb-6">
          Professional Cleaners Across West Dorset
        </h2>
        <p className="text-sm md:text-base lg:text-xl text-white/90 mb-8 md:mb-12 max-w-3xl mx-auto">
          Your Clean Queen provides professional house cleaners throughout Dorchester, West Dorset and surrounding areas. 
          Local cleaners you can trust with professional training and full insurance.
        </p>
        
        {/* Primary Service Areas with Links */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6 text-white">
            Our Main Service Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-6">
            {primaryAreas.map((area, index) => (
              <Link key={index} href={area.link} className="group">
                <div className="text-center p-4 md:p-6 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border-2 border-white group-hover:scale-105 h-full flex flex-col">
                  <div className="text-base md:text-lg lg:text-xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                    {area.name}
                  </div>
                  <div className="text-xs md:text-sm text-white/80 mb-3 flex-1">
                    {area.description}
                  </div>
                  <div className="flex items-center justify-center text-xs font-semibold bg-white/20 px-3 py-1 rounded-full group-hover:bg-white/30 transition-colors">
                    View Cleaners
                    <svg className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Surrounding Areas */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 text-white/90">
            We Also Clean Properties In:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4 max-w-5xl mx-auto">
            {surroundingAreas.map((area, index) => (
              <div key={index} className="text-center p-2 md:p-3 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 border border-white/40">
                <div className="text-sm md:text-base font-semibold">{area}</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 max-w-5xl mx-auto border-2 border-white">
          <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6">
            15 Mile Service Radius from Dorchester
          </h3>
          <p className="text-sm md:text-base lg:text-xl text-white/90 mb-6 md:mb-8">
            Proudly serving as your local professional cleaners across West Dorset&apos;s most beautiful areas. 
            All our house cleaners are fully trained, insured, and DBS checked.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Link href="/cleaners-dorchester" className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors border border-white/40 group">
              <div className="font-semibold text-sm md:text-base group-hover:text-gray-200">📍 Dorchester Cleaners</div>
              <div className="text-xs text-white/80 mt-1">Our main service hub</div>
            </Link>
            <Link href="/house-cleaners-weymouth" className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors border border-white/40 group">
              <div className="font-semibold text-sm md:text-base group-hover:text-gray-200">🏖️ Weymouth Cleaners</div>
              <div className="text-xs text-white/80 mt-1">Coastal property experts</div>
            </Link>
            <Link href="/cleaners-west-dorset" className="bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors border border-white/40 group">
              <div className="font-semibold text-sm md:text-base group-hover:text-gray-200">🌍 Regional Coverage</div>
              <div className="text-xs text-white/80 mt-1">All West Dorset areas</div>
            </Link>
          </div>
          
          <div className="mt-6 md:mt-8">
            <a 
              href="#contact"
              className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base lg:text-lg transition-colors duration-300 shadow-lg border-2 border-black"
            >
              Find Cleaners In Your Area
            </a>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-white/80 text-xs md:text-sm">
            Looking for cleaners outside West Dorset? <a href="#contact" className="underline hover:text-white">Contact us</a> - we may still cover your area!
          </p>
        </div>
      </div>
    </section>
  )
}