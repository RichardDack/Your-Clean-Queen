export default function GoogleReviews() {
  const googleReviews = [
    {
      name: "Sharon Taylor",
      initials: "ST",
      reviewCount: "11 reviews",
      rating: 5,
      timeAgo: "4 weeks ago",
      text: "So lovely coming home to a clean home. Wouldn&apos;t hesitate to recommend.",
      location: "Dorchester area" // Inferred
    },
    {
      name: "Ruth Dyer", 
      initials: "RD",
      reviewCount: "2 reviews",
      rating: 5,
      timeAgo: "5 weeks ago",
      text: "I would thoroughly recommend YourCleanQueen for providing a wonderful cleaning service. The professionalism and attention to detail were exceptional.",
      location: "West Dorset" // Inferred
    },
    {
      name: "Richard",
      initials: "R",
      reviewCount: "5 reviews",
      rating: 5,
      timeAgo: "9 weeks ago",
      text: "Such a great find! This cleaner is the whole package: professional in their work, with a wonderfully welcoming and friendly personality. They transformed our house, leaving it absolutely spotless. A huge bonus for us was how dog-friendly they are.",
      location: "Dorchester area" // Inferred
    }
  ]

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <div className="flex justify-center items-center mb-4 md:mb-6">
            <svg className="w-8 h-8 md:w-10 md:h-10 mr-3" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold text-gray-800">
              Google Reviews
            </h2>
          </div>
          
          <div className="flex justify-center items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                </svg>
              ))}
            </div>
            <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">5.0</span>
            <span className="text-gray-600 text-sm md:text-base">Based on Google reviews</span>
          </div>
          
          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Real feedback from our customers across Dorchester and West Dorset
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {googleReviews.map((review, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col">
              {/* Google Review Header */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base mr-3 md:mr-4">
                  {review.initials}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 text-sm md:text-base">
                    {review.name}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500">
                    {review.reviewCount}
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                      </svg>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    {review.timeAgo}
                  </div>
                </div>
              </div>
              
              {/* Review Content */}
              <p className="text-gray-700 leading-relaxed text-sm md:text-base flex-1 mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              
              {/* Location Tag */}
              <div className="text-xs text-vibrant-green font-semibold bg-vibrant-green/10 px-3 py-1 rounded-full inline-block w-fit">
                {review.location}
              </div>
            </div>
          ))}
        </div>
        
        {/* Google CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 md:p-8 border-2 border-gray-200 max-w-2xl mx-auto">
            <div className="flex justify-center items-center mb-4">
              <svg className="w-6 h-6 md:w-8 md:h-8 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-800">
                See All Our Google Reviews
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-sm md:text-base">
              Read more authentic reviews from our Dorchester and West Dorset customers
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a 
                href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors duration-300 shadow-lg"
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Read All Reviews
              </a>
              <a 
                href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-6 py-3 rounded-lg text-sm md:text-base transition-colors duration-300 shadow-lg border-2 border-black"
              >
                ⭐ Leave a Review
              </a>
            </div>
            
            <p className="text-gray-500 text-xs mt-4">
              Your honest feedback helps us improve and helps other customers in Dorchester find us
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}