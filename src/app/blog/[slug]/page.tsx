import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPost, getBlogPosts } from '../../lib/contentful'
import BlogPostContent from '../../../components/BlogPostContent'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts(100) // Get all posts
  
  return posts.map((post) => ({
    slug: post.fields.slug,
  }))
}

// Helper function to extract plain text from Contentful rich text
function extractPlainText(richText: any): string {
  if (!richText) return ''
  if (typeof richText === 'string') return richText
  
  // If it's a Contentful rich text object
  if (richText.content && Array.isArray(richText.content)) {
    return richText.content
      .map((node: any) => {
        if (node.nodeType === 'paragraph' && node.content) {
          return node.content
            .map((textNode: any) => textNode.value || '')
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
  const post = await getBlogPost(params.slug)
  
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
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}