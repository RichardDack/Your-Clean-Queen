interface SocialProofProps {
  variant?: 'compact' | 'full'
  className?: string
}

export default function SocialProof({ variant = 'full', className = '' }: SocialProofProps) {
  const testimonials = [
    {
      text: "The Royal Treatment really is different. Professional, thorough, and they actually care about quality.",
      author: "Sarah M.",
      location: "Poundbury",
      rating: 5
    },
    {
      text: "Excellent service and great communication. They explain everything clearly and do a fantastic job.",
      author: "James T.",
      location: "Dorchester",
      rating: 5
    },
    {
      text: "Their attention to detail is impressive. Really professional approach to cleaning.",
      author: "Emma L.",
      location: "Weymouth",
      rating: 5
    }
  ]

  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-lg p-4 border border-gray-200 shadow-sm ${className}`}>
        <div className="text-center">
          <div className="flex justify-center items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">⭐</span>
            ))}
          </div>
          <div className="text-lg font-semibold text-gray-900">4.9/5 Rating</div>
          <div className="text-sm text-gray-600">50+ verified reviews</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white rounded-lg p-6 border border-gray-200 shadow-sm ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">What Our Customers Say</h3>
      
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <blockquote key={index} className="border-l-4 border-vibrant-green pl-4">
            <p className="text-sm text-gray-700 mb-2">
              &quot;{testimonial.text}&quot;
            </p>
            <cite className="text-xs text-gray-500 font-medium">
              - {testimonial.author}, {testimonial.location}
            </cite>
            <div className="flex text-yellow-400 text-xs mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </blockquote>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-vibrant-green">4.9/5</div>
            <div className="text-xs text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-vibrant-green">50+</div>
            <div className="text-xs text-gray-600">Happy Customers</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export individual testimonials for use in other components
export const customerTestimonials = [
  {
    text: "The Royal Treatment really is different. Professional, thorough, and they actually care about quality.",
    author: "Sarah M.",
    location: "Poundbury",
    rating: 5,
    highlight: "Premium service quality"
  },
  {
    text: "Excellent service and great communication. They explain everything clearly and do a fantastic job.",
    author: "James T.",
    location: "Dorchester", 
    rating: 5,
    highlight: "Professional communication"
  },
  {
    text: "Their attention to detail is impressive. Really professional approach to cleaning.",
    author: "Emma L.",
    location: "Weymouth",
    rating: 5,
    highlight: "Professional expertise"
  },
  {
    text: "Your Clean Queen's expertise shows in everything they do. Highly professional service.",
    author: "Michael R.",
    location: "West Dorset",
    rating: 5,
    highlight: "Professional expertise"
  },
  {
    text: "Premium service that justifies the investment. The Royal Treatment is exactly what they promise.",
    author: "Lisa K.",
    location: "Dorchester",
    rating: 5,
    highlight: "Value and quality"
  }
]