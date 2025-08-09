export default function Areas() {
  const primaryAreas = [
    "Dorchester", "West Dorset", "Weymouth", "Poundbury"
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
        
        {/* Primary Service Areas */}
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6 text-white">
            Our Main Service Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto mb-6">
            {primaryAreas.map((area, index) => (
              <div key={index} className="text-center p-4 md:p-6 bg-white/20 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-colors duration-300 border-2 border-white">
                <div className="text-base md:text-lg lg:text-xl font-bold">{area}</div>
                <div className="text-xs md:text-sm text-white/80 mt-1">Quality Cleaning</div>
              </div>
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