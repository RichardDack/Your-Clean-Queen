import Image from 'next/image'
import Link from 'next/link'

type FeatureItemProps = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
};

const FeatureItem: React.FC<FeatureItemProps> = ({ imageSrc, imageAlt, title, description }) => {
  return (
    <div className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 relative">
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          className="rounded-lg object-cover" 
        />
      </div>
      <div>
        <h3 className="text-base md:text-lg font-heading font-semibold text-gray-800 mb-1 md:mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-xs md:text-sm">{description}</p>
      </div>
    </div>
  );
};

export default function Feature() {
  const featuresData: FeatureItemProps[] = [
    {
      imageSrc: "https://placehold.co/100x100",
      imageAlt: "Fully Insured Icon",
      title: "Fully Insured",
      description: "Complete insurance coverage and professional indemnity for your peace of mind."
    },
    {
      imageSrc: "https://placehold.co/100x100",
      imageAlt: "Trusted & Reliable Icon",
      title: "Trusted & Reliable",
      description: "Consistent, dependable service built on trust and local community relationships."
    },
    {
      imageSrc: "https://placehold.co/100x100/00D4AA/FFFFFF?text=Eco",
      imageAlt: "Eco-Friendly Icon",
      title: "Eco-Friendly Cleaning",
      description: "We use safe, eco-friendly products for a healthy home and planet."
    },
     {
      imageSrc: "https://placehold.co/100x100/A8E6CF/1F2937?text=Standards",
      imageAlt: "Professional Standards Icon",
      title: "Professional Standards",
      description: "Every clean is performed with meticulous attention to detail, ensuring a sparkling result."
    },
  ];

  return (
    <section id="features" className="py-8 md:py-16 bg-accent-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <div className="mb-6 md:mb-8 text-left">
              <p className="text-vibrant-green font-semibold text-sm md:text-base lg:text-lg mb-2">Why Choose Us?</p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-800 mb-3 md:mb-4">
                Expert Cleaners, World-Class Service
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
              Your Clean Queen is dedicated to providing an exceptional cleaning experience. Our team is not only skilled and professional but also committed to understanding your unique needs.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base lg:text-lg">
              From regular maintenance to deep cleans, we bring a personal touch to our professional services, ensuring reliability and results you can trust.
            </p>
            <Link 
              href="#contact" 
              className="inline-block bg-vibrant-green hover:bg-vibrant-green-dark text-white font-bold px-6 py-2.5 md:px-8 md:py-3 rounded-lg transition-colors duration-300 shadow-lg text-sm md:text-base"
            >
              Get Your Free Quote
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {featuresData.map((feature, index) => (
              <FeatureItem
                key={index}
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}