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
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <Image
        src="images/bath.jpg"
        alt="Sparkling clean home background"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/5 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row items-stretch gap-8 lg:gap-16 py-12 md:py-20">
          <div className="md:w-7/12 flex">
            <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/20 backdrop-blur-sm p-8 rounded-xl flex flex-col justify-center w-full">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight drop-shadow-lg">
                <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Professional cleaning</span>
                <span className="block text-accent-cream mt-1 sm:mt-2">with a personal touch.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md mb-8">
                High-quality residential cleaning for Poundbury, Dorchester, and surrounding Dorset areas.
                We make your home sparkle!
              </p>
              <Link 
                href="#services" 
                className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-8 py-3 rounded-md text-lg transition-colors duration-300 shadow-md mt-6 w-fit"
              >
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="md:w-5/12 flex">
            <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/20 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl w-full flex flex-col">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-white mb-6 text-center">
                Get A <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Free</span> Quote
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-4 flex-1">
                <div>
                  <label htmlFor="hero-name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="hero-name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 bg-white"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 bg-white"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 bg-white"
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
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 resize-none bg-white"
                    placeholder="Any additional details..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-vibrant-green font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg shadow-md mt-auto"
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