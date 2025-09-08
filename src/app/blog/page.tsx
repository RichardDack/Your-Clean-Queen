import { Metadata } from 'next'
import { getBlogPosts } from '../lib/contentful'
import { enhancedSEO } from '../lib/enhanced-seo-utils'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogCard from '../../components/BlogCard'

export const metadata: Metadata = enhancedSEO.generateBlogListingMeta('Dorchester', {
  customTitle: 'Expert Cleaning Tips & Guides | Your Clean Queen Blog | Dorchester',
  customDescription: 'Professional cleaning tips and expert insights from Dorchester\'s premium cleaning service. Royal Treatment expertise that Lucy\'s Cleaning and Maid2Clean don\'t share. Comprehensive guides for superior home care.',
  canonical: 'https://yourcleanqueen.co.uk/blog'
})

export default async function BlogPage() {
  const posts = await getBlogPosts(12)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-vibrant-green to-vibrant-green-dark text-white py-16 pt-32 md:pt-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Clean Queen Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Expert cleaning tips, guides, and insights from Dorchester&apos;s professional cleaning service
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block border-2 border-black">
              <p className="text-lg">
                Professional insights to help you maintain a spotless home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length > 0 ? (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                    Latest Cleaning Guides
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive guides and professional tips to help you maintain a spotless home.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <BlogCard key={post.sys.id} post={post} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  Expert Guides Coming Soon!
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  We&apos;re preparing comprehensive cleaning guides and professional insights
                  to help you maintain your home to the highest standards.
                </p>
                <div className="bg-vibrant-green/10 rounded-lg p-8 max-w-md mx-auto border-2 border-black">
                  <p className="text-gray-800 font-medium">
                    Professional cleaning tips and expert advice coming soon from Your Clean Queen
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-vibrant-green text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">
              Ready for Professional Cleaning?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our expert team handle your cleaning needs with the Royal Treatment approach.
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
      </section>

      <Footer />
    </div>
  )
}