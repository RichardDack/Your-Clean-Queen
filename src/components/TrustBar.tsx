export default function TrustBar() {
  const trustItems = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.1V11.1C14.8,12.6 13.4,14.1 12,14.1C10.6,14.1 9.2,12.6 9.2,11.1V10.1C9.2,8.6 10.6,7 12,7Z"/>
        </svg>
      ),
      title: "Fully Insured",
      subtitle: "Complete peace of mind with comprehensive insurance coverage",
      stat: "100% Protected"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9,12L11,14L15,10L13,8L11,10L9,8M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
        </svg>
      ),
      title: "DBS Checked",
      subtitle: "All our cleaning professionals are thoroughly vetted",
      stat: "Trusted Team"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
        </svg>
      ),
      title: "5 Star Rated",
      subtitle: "Consistently excellent service rated by our customers",
      stat: "Excellent Reviews"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
      ),
      title: "Eco-Friendly",
      subtitle: "Safe, environmentally conscious cleaning products",
      stat: "Family Safe"
    }
  ]

  return (
    <section className="py-12 bg-[#A8E6CF] border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-bold text-gray-800 mb-2">
            Why Choose Your Clean Queen?
          </h3>
          <p className="text-gray-600">
            Professional, reliable, and trustworthy cleaning services across Dorset
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg bg-accent-cream hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-vibrant-green/10 text-vibrant-green rounded-full mb-4">
                {item.icon}
              </div>
              <h4 className="font-heading font-bold text-gray-800 text-lg mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                {item.subtitle}
              </p>
              <div className="text-vibrant-green font-semibold text-sm">
                {item.stat}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-600">
            <span>Serving Dorchester • Weymouth • Poundbury • And surrounding Dorset areas</span>
          </div>
        </div>
      </div>
    </section>
  )
}