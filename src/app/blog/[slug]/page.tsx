import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '../../lib/contentful'
import { RichTextDocument } from '../../types'
import BlogPostContent from '../../../components/BlogPostContent'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts(100) // Get all posts
  
  return posts.map((post) => ({
    slug: post.fields.slug,
  }))
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

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | Your Clean Queen',
      description: 'The requested blog post could not be found.',
    }
  }

  const { fields } = post
  
  // Extract plain text from rich text fields
  const seoDescriptionText = extractPlainText(fields.seoDescription)
  const excerptText = extractPlainText(fields.excerpt)
  
  return {
    title: fields.seoTitle || `${fields.title} | Your Clean Queen Blog`,
    description: seoDescriptionText || excerptText,
    keywords: fields.targetKeywords || `${fields.category}, cleaning tips, dorchester cleaning`,
    openGraph: {
      title: fields.seoTitle || fields.title,
      description: seoDescriptionText || excerptText,
      type: 'article',
      publishedTime: fields.publishedDate,
      authors: [fields.author],
      images: fields.featuredImage ? [
        {
          url: `https:${fields.featuredImage.fields.file.url}`,
          width: fields.featuredImage.fields.file.details.image.width,
          height: fields.featuredImage.fields.file.details.image.height,
          alt: fields.featuredImage.fields.title || fields.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: fields.seoTitle || fields.title,
      description: seoDescriptionText || excerptText,
      images: fields.featuredImage ? [`https:${fields.featuredImage.fields.file.url}`] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  
  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}