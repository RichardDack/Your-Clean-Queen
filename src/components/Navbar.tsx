'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/yourcleanqueen', 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/yourcleanqueen', 
      icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> 
    }
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg text-gray-800' 
        : 'bg-gradient-to-br from-black/60 via-black/40 to-black/20 backdrop-blur-sm text-white'
    }`}>
      {/* Top Bar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`flex justify-between items-center py-2 border-b ${
          isScrolled ? 'border-gray-200' : 'border-white/20'
        }`}>
          <div className="flex items-center space-x-6 text-sm">
            <a 
              href="tel:01305233872" 
              className={`transition-colors flex items-center ${
                isScrolled 
                  ? 'hover:text-vibrant-green' 
                  : 'hover:text-sage-green'
              }`}
            >
              <PhoneIcon className="w-4 h-4 mr-1.5" />
              01305 123 456
            </a>
            <a 
              href="mailto:hello@yourcleanqueen.co.uk" 
              className={`transition-colors hidden md:flex items-center ${
                isScrolled 
                  ? 'hover:text-vibrant-green' 
                  : 'hover:text-sage-green'
              }`}
            >
              <EnvelopeIcon className="w-4 h-4 mr-1.5" />
              hello@yourcleanqueen.co.uk
            </a>
          </div>
          
          {/* Trust Badge */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm font-semibold">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs ml-1">Excellent Trustpilot</span>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`transition-colors ${
                    isScrolled 
                      ? 'text-gray-600 hover:text-vibrant-green' 
                      : 'text-white hover:text-sage-green'
                  }`}
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              {/* Logo Container with enhanced styling */}
              <div className={`relative transition-all duration-300 ${
                isScrolled 
                  ? 'drop-shadow-sm' 
                  : 'drop-shadow-md'
              }`}>
                <Image
                  src="/images/logo.png"
                  alt="Your Clean Queen Logo"
                  width={48}
                  height={48}
                  className={`w-12 h-12 transition-all duration-300 group-hover:scale-105 ${
                    isScrolled 
                      ? 'brightness-100' 
                      : 'brightness-110 contrast-110'
                  }`}
                  priority
                />
              </div>
              
              {/* Optional: Add company name next to logo */}
              <div className="ml-3 hidden sm:block">
                <div className={`text-xl font-bold transition-colors ${
                  isScrolled 
                    ? 'text-gray-800' 
                    : 'text-white'
                }`}>
                  Your Clean Queen
                </div>
                <div className={`text-xs font-medium ${
                  isScrolled 
                    ? 'text-vibrant-green' 
                    : 'text-sage-green'
                }`}>
                  Professional Cleaning Services
                </div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={`text-base font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-vibrant-green' 
                    : 'text-white hover:text-sage-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center">
             <Link 
               href="#contact" 
               className={`ml-8 inline-flex items-center justify-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-base font-medium transition-colors ${
                 isScrolled 
                   ? 'text-white bg-vibrant-green hover:bg-vibrant-green-dark' 
                   : 'text-vibrant-green bg-white hover:bg-gray-50'
               }`}
             >
                Get A Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-inset ${
                isScrolled 
                  ? 'text-gray-700 hover:text-vibrant-green hover:bg-gray-100 focus:ring-vibrant-green' 
                  : 'text-white hover:text-sage-green hover:bg-white/10 focus:ring-white'
              }`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            isScrolled ? 'bg-white' : 'bg-vibrant-green'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-vibrant-green hover:bg-gray-50' 
                    : 'text-white hover:text-sage-green hover:bg-white/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className={`pt-4 pb-3 border-t px-5 ${
            isScrolled 
              ? 'border-gray-200 bg-white' 
              : 'border-white/20 bg-vibrant-green'
          }`}>
            <div className="mt-3">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className={`block w-full px-5 py-3 text-center font-medium rounded-md shadow transition-colors ${
                  isScrolled 
                    ? 'text-white bg-vibrant-green hover:bg-vibrant-green-dark' 
                    : 'text-vibrant-green bg-white hover:bg-gray-50'
                }`}
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}