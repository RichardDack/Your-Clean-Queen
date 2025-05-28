import { Metadata } from 'next';
import { FaCrown, FaHome, FaStar, FaPhone, FaEnvelope, FaMapMarkerAlt, FaShieldAlt, FaClock, FaMagic, FaBars, FaTimes } from 'react-icons/fa';
import { MdCleaningServices, MdVerified } from 'react-icons/md';

// SEO metadata for homepage
export const metadata: Metadata = {
  title: "Your Clean Queen - Professional House Cleaning Services | Dorchester, Weymouth, Dorset",
  description: "Professional house cleaning services in Dorchester, Weymouth, Poundbury & surrounding Dorset areas. Royal treatment standards, reliable & trustworthy. Book your house cleaning today!",
  keywords: [
    "house cleaning Dorchester",
    "cleaning services Weymouth", 
    "domestic cleaning Poundbury",
    "professional cleaners Dorset",
    "home cleaning Dorchester",
    "residential cleaning Weymouth",
    "weekly cleaning Dorchester",
    "one-off cleaning Weymouth",
    "deep cleaning Dorset",
    "reliable house cleaners Dorchester",
    "trusted cleaning services Weymouth",
    "Your Clean Queen"
  ],
  openGraph: {
    title: "Your Clean Queen - House Cleaning Dorchester, Weymouth, Dorset",
    description: "Professional house cleaning with royal treatment standards across Dorchester, Weymouth, Poundbury and Dorset.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-clean-white">
      {/* Navigation Header */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <FaCrown className="text-3xl text-teal" />
              <div>
                <h1 className="font-heading text-2xl font-bold text-teal-dark">Your Clean Queen</h1>
                <p className="text-xs text-gray-600 font-medium">Regal Standards for Your Home</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-teal transition-colors font-medium">Home</a>
              <a href="#services" className="text-gray-700 hover:text-teal transition-colors font-medium">Services</a>
              <a href="#areas" className="text-gray-700 hover:text-teal transition-colors font-medium">Areas</a>
              <a href="#about" className="text-gray-700 hover:text-teal transition-colors font-medium">About</a>
              <a href="#contact" className="bg-teal text-white px-6 py-2 rounded-full hover:bg-teal-dark transition-colors font-medium">Get Quote</a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-teal">
                <FaBars className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-clean-grey via-white to-clean-grey py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <FaCrown className="text-4xl text-accent-gold mr-4" />
                <span className="text-teal font-heading text-lg font-semibold tracking-wide">DORCHESTER • WEYMOUTH • DORSET</span>
              </div>
              
              <h1 className="font-heading text-5xl lg:text-6xl font-bold text-teal-dark mb-6 leading-tight">
                Regal Standards for Your Home
              </h1>
              
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Professional residential cleaning services in Poundbury, Dorchester, and surrounding Dorset areas. We deliver a meticulous, high-quality clean, ensuring <strong>your home is treated like a palace</strong> with a personal touch you can trust.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <MdVerified className="text-teal mr-3 text-xl" />
                  <span className="font-medium">Fully Insured & Trusted Local Service</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaCrown className="text-teal mr-3 text-xl" />
                  <span className="font-medium">Royal Treatment Standard Every Time</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaMapMarkerAlt className="text-teal mr-3 text-xl" />
                  <span className="font-medium">Serving 25km Radius from Dorchester</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+44-XXXX-XXXXXX" 
                  className="bg-teal text-white px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-teal-dark transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <FaPhone /> Call For Free Quote
                </a>
                <a 
                  href="#contact" 
                  className="border-2 border-teal text-teal px-8 py-4 rounded-full font-heading font-semibold text-lg hover:bg-teal hover:text-white transition-colors text-center"
                >
                  Book Online
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-teal to-teal-light p-8 rounded-3xl shadow-2xl">
                <div className="bg-white p-6 rounded-2xl text-center">
                  <FaCrown className="text-6xl text-accent-gold mx-auto mb-4" />
                  <h3 className="font-heading text-2xl font-bold text-teal-dark mb-4">Founded by Teal</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Personal connection, professional service. The founder's name aligns with our brand color, symbolizing authentic commitment to quality and freshness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-teal-dark mb-6">
              Professional House Cleaning Services
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From regular weekly cleans to comprehensive deep cleaning, we provide exceptional house cleaning services with royal treatment standards across Dorchester, Weymouth, and Dorset.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-clean-grey p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-teal p-4 rounded-full w-fit mb-6">
                <MdCleaningServices className="text-3xl text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-teal-dark mb-4">Regular House Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Weekly or fortnightly cleaning services to keep your Dorchester or Weymouth home consistently spotless with professional attention to detail.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>All rooms thoroughly cleaned and maintained</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Kitchen & bathroom deep clean focus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Professional hoovering & mopping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Meticulous dusting & polishing</span>
                </li>
              </ul>
            </div>

            <div className="bg-clean-grey p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-teal p-4 rounded-full w-fit mb-6">
                <FaMagic className="text-3xl text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-teal-dark mb-4">One-Off Deep Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Comprehensive deep cleaning perfect for spring cleaning, moving house, or when you need that extra royal treatment for your home.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Inside oven & fridge deep cleaning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Window sills & frames detailed clean</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Skirting boards & door frames</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Light fittings & ceiling fans</span>
                </li>
              </ul>
            </div>

            <div className="bg-clean-grey p-8 rounded-2xl hover:shadow-xl transition-shadow">
              <div className="bg-teal p-4 rounded-full w-fit mb-6">
                <FaHome className="text-3xl text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-teal-dark mb-4">End of Tenancy Cleaning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Professional move-in/move-out cleaning to help secure your deposit or prepare your property to welcome new tenants.</p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Deposit-back guarantee standard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Complete property deep clean</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Professional carpet cleaning available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal mr-2">✓</span>
                  <span>Flexible scheduling & same-day options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="areas" className="py-20 px-4 bg-gradient-to-r from-teal-light to-teal">
        <div className="max-w-7xl mx-auto text-white">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
              Proudly Serving Dorchester, Weymouth & Surrounding Areas
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <FaMapMarkerAlt className="text-4xl text-accent-gold mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">Dorchester & Poundbury</h3>
              <p className="text-white/90 leading-relaxed mb-4">Professional house cleaning throughout historic Dorchester, including the award-winning Poundbury development and surrounding villages.</p>
              <p className="text-white/75 text-sm">DT1 postcode area</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <FaMapMarkerAlt className="text-4xl text-accent-gold mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">Weymouth & Coastal Areas</h3>
              <p className="text-white/90 leading-relaxed mb-4">Reliable cleaning services in Weymouth, Chickerell, Preston, Upwey, and coastal communities throughout South Dorset.</p>
              <p className="text-white/75 text-sm">DT3, DT4 postcode areas</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <FaMapMarkerAlt className="text-4xl text-accent-gold mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-4">Surrounding Villages</h3>
              <p className="text-white/90 leading-relaxed mb-4">Winterbourne Abbas, Broadmayne, Maiden Newton, Charminster, Osmington, Crossways, and villages across beautiful Dorset.</p>
              <p className="text-white/75 text-sm">25km service radius</p>
            </div>
          </div>
        </div>
      </section>

      {/* About/Why Choose Us */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-teal-dark mb-6">
              Why Choose Your Clean Queen?
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded by Teal in the heart of Dorset, Your Clean Queen brings personal care, professional expertise, and royal treatment standards to every home we clean.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-teal p-6 rounded-full w-fit mx-auto mb-6 group-hover:bg-teal-dark transition-colors">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-teal-dark mb-3">Fully Insured</h3>
              <p className="text-gray-600 leading-relaxed">Complete insurance coverage and professional indemnity for your complete peace of mind</p>
            </div>

            <div className="text-center group">
              <div className="bg-teal p-6 rounded-full w-fit mx-auto mb-6 group-hover:bg-teal-dark transition-colors">
                <MdVerified className="text-4xl text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-teal-dark mb-3">Trusted & Reliable</h3>
              <p className="text-gray-600 leading-relaxed">Consistent, dependable service built on trust and local community relationships</p>
            </div>

            <div className="text-center group">
              <div className="bg-teal p-6 rounded-full w-fit mx-auto mb-6 group-hover:bg-teal-dark transition-colors">
                <FaClock className="text-4xl text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-teal-dark mb-3">Flexible Scheduling</h3>
              <p className="text-gray-600 leading-relaxed">Appointment times that work around your busy lifestyle and family commitments</p>
            </div>

            <div className="text-center group">
              <div className="bg-teal p-6 rounded-full w-fit mx-auto mb-6 group-hover:bg-teal-dark transition-colors">
                <FaCrown className="text-4xl text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-teal-dark mb-3">Royal Treatment</h3>
              <p className="text-gray-600 leading-relaxed">Every home treated with palace-level care, attention to detail, and respect</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-teal-dark to-teal">
        <div className="max-w-4xl mx-auto text-center text-white">
          <FaCrown className="text-6xl text-accent-gold mx-auto mb-6" />
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">
            Ready for the Royal Treatment?
          </h2>
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Get your free, no-obligation quote for professional house cleaning in Dorchester, Weymouth, or anywhere across our Dorset service area.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <FaPhone className="text-4xl text-accent-gold mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Call Now</h3>
              <a 
                href="tel:+44-XXXX-XXXXXX" 
                className="text-xl hover:text-accent-gold transition-colors block mb-2"
              >
                +44-XXXX-XXXXXX
              </a>
              <p className="text-white/75">Mon-Fri 8AM-6PM</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
              <FaEnvelope className="text-4xl text-accent-gold mx-auto mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-4">Email Us</h3>
              <a 
                href="mailto:hello@yourcleanqueen.co.uk" 
                className="text-xl hover:text-accent-gold transition-colors block mb-2"
              >
                hello@yourcleanqueen.co.uk
              </a>
              <p className="text-white/75">Quick response guaranteed</p>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur p-8 rounded-2xl">
            <h3 className="font-heading text-2xl font-bold mb-6">Our Service Areas Include:</h3>
            <p className="text-white/90 leading-relaxed text-lg">
              <strong>Dorchester</strong> • <strong>Weymouth</strong> • <strong>Poundbury</strong> • Winterbourne Abbas • Broadmayne • Maiden Newton • Charminster • Osmington • Upwey • Chickerell • Crossways • Preston • Fortuneswell • Wool • Bere Regis • And surrounding Dorset villages within 25km
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-dark text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <FaCrown className="text-3xl text-accent-gold" />
                <div>
                  <h3 className="font-heading text-xl font-bold">Your Clean Queen</h3>
                  <p className="text-sm text-white/75">Regal Standards for Your Home</p>
                </div>
              </div>
              <p className="text-white/75 leading-relaxed">
                Professional house cleaning services with royal treatment standards across Dorchester, Weymouth, and Dorset.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/75">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#areas" className="hover:text-white transition-colors">Service Areas</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/75">
                <p className="flex items-center"><FaPhone className="mr-2" /> +44-XXXX-XXXXXX</p>
                <p className="flex items-center"><FaEnvelope className="mr-2" /> hello@yourcleanqueen.co.uk</p>
                <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Serving Dorchester & Dorset</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-white/75">
            <p>&copy; 2024 Your Clean Queen. All rights reserved. | Fully Insured | Founded by Teal | Serving Dorset with Pride</p>
          </div>
        </div>
      </footer>
    </div>
  );
}