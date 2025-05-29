'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    comment: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hero form submitted:', formData);
    alert('Quote request submitted! We will be in touch shortly.');
    setFormData({ name: '', phone: '', service: '', comment: '' });
  };

  const servicesOptions = [
    { value: "", label: "Choose a service" },
    { value: "house-cleaning", label: "Home Cleaning" },
    { value: "deep-cleaning", label: "Deep Cleaning" },
    { value: "end-of-tenancy", label: "End of Tenancy Cleaning" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Desktop Background Image */}
      <Image
        src="images/bath.jpg"
        alt="Sparkling clean home background"
        fill
        className="hidden md:block object-cover z-0"
        priority
      />
      
      {/* Mobile Background Image */}
      <Image
        src="https://placehold.co/800x1200/A8E6CF/FFFFFF?text=Clean+Home"
        alt="Clean home background"
        fill
        className="block md:hidden object-cover z-0"
        priority
      />
      
      <div className="absolute inset-0 bg-black/5 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 lg:gap-16 py-8 md:py-12 lg:py-20">
          <div className="md:w-7/12 flex">
            <div className="bg-gradient-to-br from-black/40 via-black/25 to-black/10 md:from-black/60 md:via-black/40 md:to-black/20 backdrop-blur-none md:backdrop-blur-sm p-6 md:p-8 rounded-xl flex flex-col justify-center w-full border-2 border-black">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight drop-shadow-lg">
                <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Professional cleaning</span>
                <span className="block text-accent-cream mt-1 sm:mt-2">with a personal touch.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md mb-6 md:mb-8">
                High-quality residential cleaning for Poundbury, Dorchester, and surrounding Dorset areas.
                We make your home sparkle!
              </p>
              <Link 
                href="#services" 
                className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-6 py-2.5 md:px-8 md:py-3 rounded-md text-base md:text-lg transition-colors duration-300 shadow-md mt-4 md:mt-6 w-fit border-2 border-black"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="md:w-5/12 flex">
            <div className="bg-gradient-to-br from-black/40 via-black/25 to-black/10 md:from-black/60 md:via-black/40 md:to-black/20 backdrop-blur-none md:backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl w-full flex flex-col border-2 border-black">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-4 md:mb-6 text-center">
                Get A <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Free</span> Quote
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-3 md:space-y-4 flex-1">
                <div>
                  <label htmlFor="hero-name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="hero-name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="sr-only">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="hero-phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base"
                    placeholder="Mobile Number"
                  />
                </div>
                <div>
                  <label htmlFor="hero-service" className="sr-only">Choose a service</label>
                  <select
                    name="service"
                    id="hero-service"
                    value={formData.service}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 bg-white text-sm md:text-base"
                  >
                    {servicesOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="hero-comment" className="sr-only">Comment</label>
                  <textarea
                    name="comment"
                    id="hero-comment"
                    value={formData.comment}
                    onChange={handleFormChange}
                    rows={2}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 resize-none bg-white text-sm md:text-base"
                    placeholder="Any additional details..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-vibrant-green font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg transition-colors duration-300 text-base md:text-lg shadow-md mt-auto border-2 border-black"
                >
                  Request Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}