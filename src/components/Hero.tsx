'use client';
import { useForm, ValidationError } from '@formspree/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [state, handleSubmitFormspree] = useForm("myzwrrzb");

  const servicesOptions = [
    { value: "", label: "Choose a cleaning service" },
    { value: "house-cleaning", label: "Regular House Cleaning" },
    { value: "deep-cleaning", label: "Deep Cleaning Service" },
    { value: "end-of-tenancy", label: "End of Tenancy Cleaning" },
  ];

  const locationOptions = [
    { value: "", label: "Select your area" },
    { value: "dorchester", label: "Dorchester" },
    { value: "weymouth", label: "Weymouth" },
    { value: "poundbury", label: "Poundbury" },
    { value: "portland", label: "Portland" },
    { value: "blandford-forum", label: "Blandford Forum" },
    { value: "winterbourne", label: "Winterbourne" },
    { value: "broadmayne", label: "Broadmayne" },
    { value: "maiden-newton", label: "Maiden Newton" },
    { value: "charminster", label: "Charminster" },
    { value: "other-west-dorset", label: "Other West Dorset Area" },
    { value: "outside-area", label: "Outside West Dorset" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Desktop Background Image */}
      <Image
        src="images/bath.jpg"
        alt="Professional cleaners Dorchester - sparkling clean home"
        fill
        className="hidden md:block object-cover z-0"
        priority
      />
      
      {/* Mobile Background Image */}
      <Image
        src="images/hero-mobile.jpg"
        alt="House cleaners West Dorset - clean home background"
        fill
        className="block md:hidden object-cover z-0"
        priority
      />
      
      <div className="absolute inset-0 bg-black/5 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8 lg:gap-16 py-8 md:py-12 lg:py-20">
          <div className="md:w-7/12 flex">
            <div className="bg-gradient-to-br from-black/80 via-black/45 to-black/40 md:from-black/60 md:via-black/40 md:to-black/20 backdrop-blur-none md:backdrop-blur-sm p-6 md:p-8 rounded-xl flex flex-col justify-center w-full border-2 border-black">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight drop-shadow-lg">
                <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Professional cleaners</span>
                <span className="block text-accent-cream mt-1 sm:mt-2">in Dorchester & West Dorset.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed max-w-xl mx-auto md:mx-0 drop-shadow-md mb-6 md:mb-8">
                Trusted house cleaners serving Poundbury, Dorchester, Weymouth and surrounding West Dorset areas.
                Local cleaners with a personal touch!
              </p>
              <Link 
                href="#services" 
                className="inline-block bg-white text-vibrant-green hover:bg-gray-100 font-bold px-6 py-2.5 md:px-8 md:py-3 rounded-md text-base md:text-lg transition-colors duration-300 shadow-md mt-4 md:mt-6 w-fit border-2 border-black"
              >
                Explore Our Cleaning Services
              </Link>
            </div>
          </div>

          <div className="md:w-5/12 flex">
            <div className="bg-gradient-to-br from-black/80 via-black/45 to-black/40 md:from-black/60 md:via-black/40 md:to-black/20 backdrop-blur-none md:backdrop-blur-sm p-4 md:p-6 lg:p-8 rounded-xl shadow-2xl w-full flex flex-col border-2 border-black">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-white mb-4 md:mb-6 text-center">
                Get A <span className="drop-shadow-xl" style={{ color: '#00D4AA' }}>Free</span> Quote
              </h3>
              {state.succeeded ? (
                <div className="text-center py-10 text-white">
                  <p className="text-lg font-semibold">Thanks for your quote request!</p>
                  <p className="text-sm">Our cleaners team will be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitFormspree} className="space-y-3 md:space-y-4 flex-1">
                <div>
                  <label htmlFor="hero-name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="hero-name"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base"
                    placeholder="Your Name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-400 text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="hero-email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    id="hero-email"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base"
                    placeholder="Your Email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="sr-only">Mobile Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="hero-phone"
                    required
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 placeholder-gray-500 bg-white text-sm md:text-base"
                    placeholder="Mobile Number"
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                    className="text-red-400 text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="hero-location" className="sr-only">Your Location</label>
                  <select
                    name="location"
                    id="hero-location"
                    required
                    defaultValue=""
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 bg-white text-sm md:text-base"
                  >
                    {locationOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ValidationError
                    prefix="Location"
                    field="location"
                    errors={state.errors}
                    className="text-red-400 text-xs"
                  />
                </div>
                <div>
                  <label htmlFor="hero-service" className="sr-only">Choose a cleaning service</label>
                  <select
                    name="service"
                    id="hero-service"
                    required
                    defaultValue=""
                    className="w-full px-3 py-2.5 md:px-4 md:py-3 rounded-lg border border-gray-300 focus:border-vibrant-green focus:ring-vibrant-green text-gray-900 bg-white text-sm md:text-base"
                  >
                    {servicesOptions.map(opt => (
                      <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <ValidationError
                    prefix="Service"
                    field="service"
                    errors={state.errors}
                    className="text-red-400 text-xs"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-white hover:bg-gray-100 text-vibrant-green font-bold py-2.5 md:py-3 px-6 md:px-8 rounded-lg transition-colors duration-300 text-base md:text-lg shadow-md mt-auto border-2 border-black"
                >
                  Get Free Cleaning Quote
                </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}