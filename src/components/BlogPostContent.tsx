import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '../app/lib/contentful'
import { RichTextDocument } from '../app/types'
import RichTextRenderer from './RichTextRenderer'

interface BlogPostContentProps {
  post: BlogPost
}

// Helper function to extract plain text from Contentful rich text
function extractPlainText(richText: RichTextDocument | string | null | undefined): string {
  if (!richText) return ''
  if (typeof richText === 'string') return richText
  
  // If it's a Contentful rich text object
  if (typeof richText === 'object' && richText && 'content' in richText && Array.isArray(richText.content)) {
    return richText.content
      .map((node) => {
        if (node.nodeType === 'paragraph' && node.content) {
          return node.content
            .map((textNode) => ('value' in textNode ? textNode.value : '') || '')
            .join('')
        }
        return ''
      })
      .join(' ')
      .trim()
  }
  
  return String(richText)
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const { fields } = post
  
  // Format date
  const publishedDate = new Date(fields.publishedDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  
  // Extract plain text from rich text fields
  const excerptText = extractPlainText(fields.excerpt)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-vibrant-green">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-vibrant-green">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{fields.title}</span>
          </div>
        </div>
      </nav>

      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              {/* Category */}
              <div className="mb-4">
                <span className="bg-sage-green text-gray-800 px-3 py-1 rounded-full text-sm font-medium border-2 border-black">
                  {fields.category}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {fields.title}
              </h1>
              
              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <span>By {fields.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <time dateTime={fields.publishedDate}>{publishedDate}</time>
                </div>
              </div>
              
              {/* Excerpt */}
              <div className="bg-sage-green/20 rounded-lg p-6 mb-6 border-2 border-black">
                <p className="text-xl text-gray-800 leading-relaxed font-medium">
                  {excerptText}
                </p>
              </div>
            </header>

            {/* Featured Image */}
            {fields.featuredImage && (
              <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden border-2 border-black">
                <Image
                  src={`https:${fields.featuredImage.fields.file.url}`}
                  alt={fields.featuredImage.fields.title || fields.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Expert Content Notice */}
            {fields.competitorAnalysisNotes && (
              <div className="bg-sage-green/20 rounded-lg p-6 mb-8 border-2 border-black">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-vibrant-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Expert Professional Insights</h3>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      This comprehensive guide provides professional cleaning insights from Your Clean Queen&apos;s experienced team. 
                      Get expert knowledge to help you understand professional cleaning standards and techniques.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none mb-12 bg-white rounded-lg p-8 border-2 border-black">
              <RichTextRenderer content={fields.content} />
            </div>

            {/* Service CTA */}
            <div className="bg-vibrant-green text-white rounded-lg p-8 mb-8 border-2 border-black">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Ready for Professional Cleaning?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Now that you understand our professional approach, let us deliver the Royal Treatment service for your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:01305566785"
                    className="bg-white text-vibrant-green px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-black"
                  >
                    Call: 01305 566785
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-vibrant-green transition-colors"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>

            {/* Target Keywords (for SEO, hidden from users) */}
            {fields.targetKeywords && (
              <div className="hidden">
                Keywords: {fields.targetKeywords}
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              More Cleaning Guides
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Explore more professional cleaning insights from Your Clean Queen
            </p>
            <Link
              href="/blog"
              className="bg-vibrant-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-vibrant-green-dark transition-colors inline-flex items-center gap-2 border-2 border-black"
            >
              View All Guides
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}