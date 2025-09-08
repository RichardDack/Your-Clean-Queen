import Link from 'next/link'
import Image from 'next/image'
import { BlogPost } from '../app/lib/contentful'

interface BlogCardProps {
  post: BlogPost
}

import { RichTextDocument } from '../app/types'

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

export default function BlogCard({ post }: BlogCardProps) {
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
    <article className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border-2 border-black group">
      {/* Featured Image */}
      {fields.featuredImage && (
        <div className="relative h-48 w-full">
          <Image
            src={`https:${fields.featuredImage.fields.file.url}`}
            alt={fields.featuredImage.fields.title || fields.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      
      {/* Content */}
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="bg-sage-green text-gray-800 px-3 py-1 rounded-full font-medium border-2 border-black">
            {fields.category}
          </span>
          <time dateTime={fields.publishedDate}>
            {publishedDate}
          </time>
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          <Link 
            href={`/blog/${fields.slug}`}
            className="hover:text-vibrant-green transition-colors"
          >
            {fields.title}
          </Link>
        </h2>
        
        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {excerptText}
        </p>
        
        {/* Author & Read More */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-500">
            <span>By {fields.author}</span>
          </div>
          
          <Link
            href={`/blog/${fields.slug}`}
            className="text-vibrant-green hover:text-vibrant-green-dark font-medium text-sm flex items-center gap-1 transition-colors"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        
        {/* Expert Content Badge */}
        {fields.competitorAnalysisNotes && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="bg-sage-green/20 rounded-lg p-3 border-2 border-black">
              <p className="text-xs text-gray-800 font-medium flex items-center gap-2">
                <svg className="w-4 h-4 text-vibrant-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Expert insights from Your Clean Queen professionals
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}