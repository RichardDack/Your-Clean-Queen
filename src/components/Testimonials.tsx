export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Dorchester",
      rating: 5,
      text: "Your Clean Queen transformed my home! The attention to detail was incredible. The team is fantastic - highly recommend their professional service!",
      service: "Regular Weekly Cleaning"
    },
    {
      name: "James Thompson", 
      location: "Weymouth",
      rating: 5,
      text: "Reliable, professional, and friendly service. It's such a relief to come home to a sparkling clean house every fortnight.",
      service: "Fortnightly Cleaning"
    },
    {
      name: "Emily Carter",
      location: "Poundbury", 
      rating: 5,
      text: "The best cleaning service in Poundbury by far. They are thorough, trustworthy, and always leave my home looking and smelling amazing.",
      service: "Deep Clean Service"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-6">
            Don't just take our word for it
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Read what our customers have to say about us...
          </p>
          
          <div className="flex justify-center items-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-800">5.0</span>
            <span className="text-gray-600">Excellent on Trustpilot</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="font-heading font-bold text-gray-800 text-lg">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600 mb-2">
                  {testimonial.location}
                </div>
                <div className="text-xs text-vibrant-green font-semibold bg-vibrant-green/10 px-3 py-1 rounded-full inline-block">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 text-gray-600 mb-6">
            <svg className="w-5 h-5 text-vibrant-green" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
            </svg>
            <span>Join over 500+ satisfied customers across Dorset</span>
          </div>
          <a 
            href="#contact"
            className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg"
          >
            Get Your 5-Star Service Today
          </a>
        </div>
      </div>
    </section>
  )
}