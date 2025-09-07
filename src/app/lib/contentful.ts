import { createClient } from 'contentful'
import { RichTextDocument } from '../types'

// Contentful client for published content
export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
})

// Contentful client for preview content (drafts)
export const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  host: 'preview.contentful.com',
})

// Blog post interface matching our Contentful content model
export interface BlogPost {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    excerpt: RichTextDocument | string
    content: RichTextDocument | string
    featuredImage?: {
      fields: {
        file: {
          url: string
          details: {
            image: {
              width: number
              height: number
            }
          }
        }
        title: string
      }
    }
    seoTitle: string
    seoDescription: RichTextDocument | string
    targetKeywords?: string
    category: string
    publishedDate: string
    author: string
    competitorAnalysisNotes?: RichTextDocument | string
  }
}

// API functions
export async function getBlogPosts(limit = 10): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'article',
      limit,
      order: '-fields.publishedDate',
    })
    
    return response.items as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'article',
      'fields.slug': slug,
      limit: 1,
    })
    
    if (response.items.length > 0) {
      return response.items[0] as BlogPost
    }
    
    return null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getBlogPostsByCategory(category: string, limit = 10): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'article',
      'fields.category': category,
      limit,
      order: '-fields.publishedDate',
    })
    
    return response.items as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts by category:', error)
    return []
  }
}