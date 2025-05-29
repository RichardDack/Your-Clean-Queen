export default function Areas() {
  const areas = [
    "Dorchester", "Weymouth", "Poundbury", "Portland", 
    "Blandford Forum"
  ]

  return (
    <section className="py-8 md:py-16 bg-gradient-to-r from-vibrant-green to-vibrant-green-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold mb-4 md:mb-6">
          Areas we cover
        </h2>
        <p className="text-sm md:text-base lg:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto">
          Professional cleaning services across beautiful Dorset from our Dorchester base
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
          {areas.map((area, index) => (
            <div key={index} className="text-center p-3 md:p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 border-2 border-white">
              <div className="text-sm md:text-base lg:text-lg font-semibold">{area}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border-2 border-white">
          <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 md:mb-6">
            15 miles Service Radius from Dorchester
          </h3>
          <p className="text-sm md:text-base lg:text-xl text-white/90 mb-6 md:mb-8">
            Proudly serving homes and businesses across Dorset's most beautiful areas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">★★★★★</div>
              <div className="text-white/80 text-sm md:text-base">Excellent Service</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">Rated by 500+ customers</div>
            </div>
            <div className="p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">LOCAL</div>
              <div className="text-white/80 text-sm md:text-base">Dorset Business</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">Based in Dorchester</div>
            </div>
            <div className="p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Satisfaction</div>
              <div className="text-xs md:text-sm text-white/60 mt-1">Guaranteed results</div>
            </div>
          </div>
          
          <div className="mt-6 md:mt-8">
            <a 
              href="#contact"
              className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-base lg:text-lg transition-colors duration-300 shadow-lg border-2 border-black"
            >
              Check If We Cover Your Area
            </a>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 text-center">
          <p className="text-white/80 text-xs md:text-sm">
            Don't see your area listed? <a href="#contact" className="underline hover:text-white">Contact us</a> - we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  )
}