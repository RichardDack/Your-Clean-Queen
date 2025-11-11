import { Metadata } from 'next'
import { serviceLandingMeta } from '../lib/service-landing-meta'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const metadata: Metadata = serviceLandingMeta.generateServiceLandingMeta({
  service: 'End of Tenancy Cleaning',
  location: 'Dorchester',
  monthlySearches: 13,
  competitorContent: false,
  isNewService: true
})

export default function EndOfTenancyCleaningPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Competitive Positioning */}
      <section className="bg-gradient-to-r from-vibrant-green to-vibrant-green-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              End of Tenancy Cleaning Dorchester
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Professional End of Tenancy Cleaning with Deposit-Back Guarantee
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block border-2 border-black">
              <p className="text-lg font-semibold">
                ⭐ ONLY Comprehensive Service Available ⭐
              </p>
              <p className="text-sm mt-2 opacity-90">
                Competitors don&apos;t offer this expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Why Choose Our End of Tenancy Cleaning?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The only professional end of tenancy cleaning service in Dorchester with Royal Treatment standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black">
                <div className="text-vibrant-green text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-3">Landlord-Ready Standards</h3>
                <p className="text-gray-600">
                  Meticulous deep cleaning using specialized checklists. We guarantee our cleaning meets the highest professional standards required for property handover.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black">
                <div className="text-vibrant-green text-4xl mb-4">✅</div>
                <h3 className="text-xl font-semibold mb-3">Comprehensive Checklist</h3>
                <p className="text-gray-600">
                  Detailed 50-point checklist covering every area landlords inspect. Professional standards that competitors don&apos;t match.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-2 border-black">
                <div className="text-vibrant-green text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-semibold mb-3">Fully Insured & DBS Checked</h3>
                <p className="text-gray-600">
                  Professional team with 5+ years experience. Fully insured with DBS-checked cleaners for complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold text-center mb-12">
              What&apos;s Included in Our End of Tenancy Clean
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-vibrant-green">Kitchen Deep Clean</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Oven, hob & extractor fan deep clean</li>
                  <li>• Inside/outside all appliances</li>
                  <li>• All cupboards & drawers</li>
                  <li>• Tiles, splashbacks & grouting</li>
                  <li>• Sink, taps & plumbing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-vibrant-green">Bathroom Deep Clean</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Toilet, bath & shower deep clean</li>
                  <li>• Tiles, grouting & sealant</li>
                  <li>• All fixtures & fittings</li>
                  <li>• Mirrors & glass surfaces</li>
                  <li>• Ventilation & light fittings</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-vibrant-green">Living Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• All surfaces dusted & cleaned</li>
                  <li>• Skirting boards & architraves</li>
                  <li>• Light switches & door handles</li>
                  <li>• Windows & window sills</li>
                  <li>• Carpets vacuumed thoroughly</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 text-vibrant-green">Additional Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Inside wardrobes & cupboards</li>
                  <li>• Light fittings & lampshades</li>
                  <li>• Door frames & internal doors</li>
                  <li>• Radiators & heating elements</li>
                  <li>• Final inspection & touch-ups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="py-16 bg-vibrant-green text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-8">
              Why We&apos;re Different from Other Cleaning Companies
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border-2 border-black">
                <h3 className="text-xl font-semibold mb-3">Your Clean Queen</h3>
                <ul className="text-left space-y-2">
                  <li>✅ Comprehensive end of tenancy service</li>
                  <li>✅ Deposit-back guarantee</li>
                  <li>✅ 50-point professional checklist</li>
                  <li>✅ Royal Treatment standards</li>
                  <li>✅ 5+ years experience</li>
                </ul>
              </div>

              <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-6 border-2 border-red-300">
                <h3 className="text-xl font-semibold mb-3">Competitor A</h3>
                <ul className="text-left space-y-2 opacity-75">
                  <li>❌ No end of tenancy service</li>
                  <li>❌ No deposit guarantee</li>
                  <li>❌ Basic cleaning only</li>
                  <li>❌ Generic approach</li>
                  <li>❌ Limited expertise</li>
                </ul>
              </div>

              <div className="bg-red-500/20 backdrop-blur-sm rounded-lg p-6 border-2 border-red-300">
                <h3 className="text-xl font-semibold mb-3">Competitor B</h3>
                <ul className="text-left space-y-2 opacity-75">
                  <li>❌ No specialized service</li>
                  <li>❌ Budget £17.48/hour focus</li>
                  <li>❌ Corporate franchise feel</li>
                  <li>❌ No local expertise</li>
                  <li>❌ Price over quality</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border-2 border-black">
              <h3 className="text-2xl font-semibold mb-4">Ready to Get Your Deposit Back?</h3>
              <p className="text-lg mb-6 opacity-90">
                Book the only professional end of tenancy cleaning service in Dorchester
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:01305566785"
                  className="bg-white text-vibrant-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-black"
                >
                  Call: 01305 566785
                </a>
                <a
                  href="#contact"
                  className="border-2 border-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-vibrant-green transition-colors"
                >
                  Get Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}