import Image from 'next/image'

export default function Services() {
  const services = [
    {
      title: "Home cleaning",
      description: "Our local house cleaning services will ensure your home is always in immaculate condition, ready for you to relax and enjoy.",
      image: "https://placehold.co/600x400/00D4AA/FFFFFF?text=Clean+Living+Room",
      features: ["Regular weekly/fortnightly cleaning", "Kitchen & bathroom deep clean", "Dusting & vacuuming", "Professional eco-friendly products"]
    },
    {
      title: "Deep cleaning",
      description: "A comprehensive deep clean service that reaches every corner of your home, perfect for spring cleaning or one-off intensive cleaning needs.",
      image: "https://placehold.co/600x400/00D4AA/FFFFFF?text=Deep+Clean+Service",
      features: ["Complete top-to-bottom clean", "Inside appliances & cupboards", "Detailed bathroom sanitization", "Perfect for spring cleaning"]
    },
    {
      title: "End of tenancy cleaning",
      description: "Professional end of tenancy cleaning to help you get your deposit back. We follow strict checklists to ensure your property meets landlord standards.",
      image: "https://placehold.co/600x400/00D4AA/FFFFFF?text=End+Tenancy+Clean",
      features: ["Deposit-back guarantee", "Complete property checklist", "Inside oven & appliances", "Professional carpet cleaning available"]
    }
  ]

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gray-800 mb-6">
            Our professional housekeeping services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From regular maintenance to deep cleans, we provide comprehensive cleaning solutions 
            across Dorchester, Weymouth, and surrounding Dorset areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-vibrant-green mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-vibrant-green hover:bg-vibrant-green-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="#contact"
            className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg"
          >
            Get Your Free Quote Today
          </Link>
        </div>
      </div>
    </section>
  )
}

function Link({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  )
}