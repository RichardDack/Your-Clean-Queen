import { Metadata } from 'next'
import { getBlogPosts } from '../lib/contentful'
import BlogCard from '../../components/BlogCard'

export const metadata: Metadata = {
  title: 'Cleaning Tips & Guides | Your Clean Queen Blog | Dorchester',
  description: 'Expert cleaning tips, guides, and advice from Your Clean Queen. Professional insights that Lucy\'s Cleaning and Maid2Clean don\'t share. Royal Treatment expertise.',
  keywords: 'cleaning tips, cleaning guides, dorchester cleaning advice, professional cleaning tips, end of tenancy cleaning, deep cleaning guides',
  openGraph: {
    title: 'Professional Cleaning Blog | Your Clean Queen | Dorchester',
    description: 'Expert cleaning tips and guides from Dorchester\'s premium cleaning service. Royal Treatment insights you won\'t find elsewhere.',
    type: 'website',
  },
}

export default async function BlogPage() {
  const posts = await getBlogPosts(12)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-vibrant-green to-vibrant-green-dark text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Clean Queen Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Expert cleaning tips, guides, and insights from Dorchester&apos;s premium cleaning service
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 inline-block border-2 border-black">
              <p className="text-lg">
                <span className="font-semibold">Royal Treatment Expertise</span> -
                Professional insights that generic cleaning companies don&apos;t share
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Latest Cleaning Guides & Tips
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive guides and professional tips to help you maintain a spotless home.
                    Content you won&apos;t find from other Dorchester cleaning companies.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Blog Coming Soon!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re preparing comprehensive cleaning guides and tips that will give you
                  the Royal Treatment expertise. Stay tuned!
                </p>
                <div className="bg-sage-green/20 border-2 border-black rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-gray-800 font-medium">
                    🏆 Competitive Advantage: We&apos;ll be the ONLY cleaning company in Dorchester with a comprehensive blog!
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
          <h2 className="text-3xl font-bold mb-6">
            Ready for the Royal Treatment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            While you&apos;re learning from our expert guides, let us handle the actual cleaning!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:01305566785"
              className="bg-white text-vibrant-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2 border-black"
            >
              Call Now: 01305 566785
            </a>
            <a
              href="#contact"
              className="border-2 border-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-vibrant-green transition-colors"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}