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