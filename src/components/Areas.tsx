export default function Areas() {
  const areas = [
    "Dorchester", "Weymouth", "Poundbury", "Portland", "Wareham", 
    "Blandford Forum", "Swanage", "Shaftesbury", "Sturminster Newton", "Sherborne"
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-vibrant-green to-vibrant-green-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
          Areas we cover
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Professional cleaning services across beautiful Dorset from our Dorchester base
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto mb-12">
          {areas.map((area, index) => (
            <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
              <div className="text-lg font-semibold">{area}</div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold mb-6">
            25km Service Radius from Dorchester
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Proudly serving homes and businesses across Dorset's most beautiful areas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-white mb-2">★★★★★</div>
              <div className="text-white/80">Excellent Service</div>
              <div className="text-sm text-white/60 mt-1">Rated by 500+ customers</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-white mb-2">LOCAL</div>
              <div className="text-white/80">Dorset Business</div>
              <div className="text-sm text-white/60 mt-1">Based in Dorchester</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">Satisfaction</div>
              <div className="text-sm text-white/60 mt-1">Guaranteed results</div>
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="#contact"
              className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg"
            >
              Check If We Cover Your Area
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/80 text-sm">
            Don't see your area listed? <a href="#contact" className="underline hover:text-white">Contact us</a> - we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  )
}