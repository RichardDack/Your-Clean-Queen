import Link from 'next/link'
import Image from 'next/image'
import SocialProof from './SocialProof'

interface BlogSidebarProps {
  className?: string
}

export default function BlogSidebar({ className = '' }: BlogSidebarProps) {
  return (
    <aside className={`space-y-6 ${className}`}>
      {/* Main CTA */}
      <div className="bg-vibrant-green text-white rounded-lg p-6 shadow-sm">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-3">Ready for Professional Cleaning?</h3>
          <p className="text-sm opacity-90 mb-4">
            Let our expert team handle your cleaning needs with the Royal Treatment approach.
          </p>
          <div className="space-y-3">
            <a
              href="tel:01305566785"
              className="block bg-white text-vibrant-green px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
            >
              Call: 01305 566785
            </a>
            <a
              href="#contact"
              className="block border border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white hover:text-vibrant-green transition-colors text-center"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Your Clean Queen?</h3>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-vibrant-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">Expert Knowledge</h4>
              <p className="text-xs text-gray-600">Professional insights and proven cleaning methods</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-vibrant-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">Local Specialists</h4>
              <p className="text-xs text-gray-600">Dorchester and West Dorset cleaning experts</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-5 h-5 bg-vibrant-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 text-sm">Premium Service</h4>
              <p className="text-xs text-gray-600">Quality-focused Royal Treatment approach</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <SocialProof />

      {/* Service Areas */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Areas</h3>
        
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-vibrant-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Dorchester</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-vibrant-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Weymouth</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-vibrant-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Poundbury</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-vibrant-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">West Dorset</span>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
        
        <div className="space-y-3">
          <Link href="/end-of-tenancy-cleaning" className="block p-3 rounded-lg border border-gray-100 hover:border-vibrant-green hover:bg-vibrant-green/5 transition-colors group">
            <h4 className="font-medium text-gray-900 text-sm group-hover:text-vibrant-green">End of Tenancy Cleaning</h4>
            <p className="text-xs text-gray-600">Professional move-out cleaning service</p>
          </Link>

          <Link href="/deep-cleaning" className="block p-3 rounded-lg border border-gray-100 hover:border-vibrant-green hover:bg-vibrant-green/5 transition-colors group">
            <h4 className="font-medium text-gray-900 text-sm group-hover:text-vibrant-green">Deep Cleaning Service</h4>
            <p className="text-xs text-gray-600">Comprehensive one-time deep clean</p>
          </Link>

          <Link href="/weekly-cleaning" className="block p-3 rounded-lg border border-gray-100 hover:border-vibrant-green hover:bg-vibrant-green/5 transition-colors group">
            <h4 className="font-medium text-gray-900 text-sm group-hover:text-vibrant-green">Regular Cleaning</h4>
            <p className="text-xs text-gray-600">Weekly, fortnightly, or monthly service</p>
          </Link>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-sage-green/20 rounded-lg p-6 border border-sage-green/30">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Cleaning Tips Newsletter</h3>
        
        <p className="text-sm text-gray-600 mb-4">
          Get expert cleaning tips and maintenance advice delivered to your inbox.
        </p>

        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-vibrant-green focus:ring-1 focus:ring-vibrant-green"
          />
          <button
            type="submit"
            className="w-full bg-vibrant-green text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-vibrant-green-dark transition-colors"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-3 text-center">
          Join our community of homeowners getting expert tips
        </p>
      </div>
    </aside>
  )
}