'use client'

import { RichTextDocument, RichTextNode, RichTextTextNode } from '../app/types'

interface RichTextRendererProps {
  content: RichTextDocument | string | null | undefined
}

// Helper function to render rich text nodes
function renderRichTextNode(node: RichTextNode | RichTextTextNode, index: number): React.ReactNode {
  if (!node) return null

  switch (node.nodeType) {
    case 'paragraph':
      return (
        <p key={index} className="mb-4">
          {node.content?.map((child, childIndex: number) => 
            renderRichTextNode(child, childIndex)
          )}
        </p>
      )
    
    case 'heading-1':
      return (
        <h1 key={index} className="text-3xl font-bold mb-6 mt-8">
          {node.content?.map((child, childIndex: number) => 
            renderRichTextNode(child, childIndex)
          )}
        </h1>
      )
    
    case 'heading-2':
      return (
        <h2 key={index} className="text-2xl font-bold mb-4 mt-6">
          {node.content?.map((child, childIndex: number) => 
            renderRichTextNode(child, childIndex)
          )}
        </h2>
      )
    
    case 'heading-3':
      return (
        <h3 key={index} className="text-xl font-bold mb-3 mt-5">
          {node.content?.map((child, childIndex: number) => 
            renderRichTextNode(child, childIndex)
          )}
        </h3>
      )
    
    case 'unordered-list':
      return (
        <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
          {node.content?.map((child, childIndex: number) => 
            renderRichTextNode(child, childIndex)
          )}
        </ul>
      )
    
    case 'ordered-list':
      return (
        <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
          {node.content?.map((child, childIndex: number) => 
            renderRichTextNode(child, childIndex)
          )}
        </ol>
      )
    
    case 'list-item':
      return (
        <li key={index}>
          {node.content?.map((child, childIndex: number) => 
            renderRichTextNode(child, childIndex)
          )}
        </li>
      )
    
    case 'blockquote':
      return (
        <blockquote key={index} className="border-l-4 border-vibrant-green pl-4 italic mb-4 text-gray-700">
          {node.content?.map((child, childIndex: number) => 
            renderRichTextNode(child, childIndex)
          )}
        </blockquote>
      )
    
    case 'hr':
      return <hr key={index} className="my-8 border-gray-300" />
    
    case 'text':
      if ('value' in node) {
        let textElement: React.ReactNode = node.value || ''
        
        // Handle text formatting
        if (node.marks && node.marks.length > 0) {
          node.marks.forEach((mark) => {
            switch (mark.type) {
              case 'bold':
                textElement = <strong key={`bold-${index}`}>{textElement}</strong>
                break
              case 'italic':
                textElement = <em key={`italic-${index}`}>{textElement}</em>
                break
              case 'underline':
                textElement = <u key={`underline-${index}`}>{textElement}</u>
                break
              case 'code':
                textElement = <code key={`code-${index}`} className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">{textElement}</code>
                break
            }
          })
        }
        
        return textElement
      }
      return null
    
    default:
      // Handle unknown node types gracefully
      if ('content' in node && node.content) {
        return (
          <div key={index}>
            {node.content.map((child, childIndex: number) => 
              renderRichTextNode(child, childIndex)
            )}
          </div>
        )
      }
      return null
  }
}

export default function RichTextRenderer({ content }: RichTextRendererProps) {
  if (!content) {
    return <div className="text-gray-500 italic">No content available</div>
  }

  // Handle string content
  if (typeof content === 'string') {
    return (
      <div className="rich-text-content">
        <p>{content}</p>
      </div>
    )
  }

  // Handle Contentful rich text structure
  if (typeof content === 'object' && content && 'content' in content && Array.isArray(content.content)) {
    return (
      <div className="rich-text-content">
        {content.content.map((node, index: number) => 
          renderRichTextNode(node, index)
        )}
      </div>
    )
  }

  // Fallback for other content types
  return (
    <div className="rich-text-content">
      <p className="text-gray-500 italic">
        Content format not recognized. Please check your Contentful setup.
      </p>
    </div>
  )
}