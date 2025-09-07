// Business Types for Your Clean Queen

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  serviceType?: string;
  preferredDate?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  duration?: string;
  features: string[];
  icon?: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  description: string;
  postcodes?: string[];
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  founder: string;
  location: string;
  serviceAreas: string[];
  phone: string;
  email: string;
}

// Rich Text Types for Contentful
export interface RichTextMark {
  type: 'bold' | 'italic' | 'underline' | 'code';
}

export interface RichTextTextNode {
  nodeType: 'text';
  value: string;
  marks?: RichTextMark[];
}

export interface RichTextNode {
  nodeType: 'paragraph' | 'heading-1' | 'heading-2' | 'heading-3' | 'unordered-list' | 'ordered-list' | 'list-item' | 'blockquote' | 'hr';
  content?: (RichTextNode | RichTextTextNode)[];
}

export interface RichTextDocument {
  nodeType: 'document';
  content: RichTextNode[];
}