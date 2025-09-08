import Script from 'next/script';
import { 
  richSnippetsSchema, 
  type FAQItem, 
  type ServiceDetails, 
  type ReviewData, 
  type LocalBusinessData 
} from '../app/lib/rich-snippets-schema';

// Schema Markup Component for easy integration of structured data
export interface SchemaMarkupProps {
  // FAQ Schema
  faqs?: FAQItem[];
  
  // Service Schema
  service?: ServiceDetails;
  
  // Review Schema
  reviews?: ReviewData[];
  
  // Local Business Schema
  localBusiness?: LocalBusinessData;
  
  // Breadcrumb Schema
  breadcrumbs?: Array<{name: string, url: string}>;
  
  // Include Organization Schema
  includeOrganization?: boolean;
  
  // Custom schema objects
  customSchemas?: object[];
}

export default function SchemaMarkup({
  faqs,
  service,
  reviews,
  localBusiness,
  breadcrumbs,
  includeOrganization = false,
  customSchemas = []
}: SchemaMarkupProps) {
  const schemas: object[] = [];
  
  // Add FAQ Schema
  if (faqs && faqs.length > 0) {
    schemas.push(richSnippetsSchema.generateFAQSchema(faqs));
  }
  
  // Add Service Schema
  if (service) {
    schemas.push(richSnippetsSchema.generateServiceSchema(service));
  }
  
  // Add Review Schema
  if (reviews && reviews.length > 0) {
    schemas.push(richSnippetsSchema.generateReviewSchema(reviews));
  }
  
  // Add Local Business Schema
  if (localBusiness) {
    schemas.push(richSnippetsSchema.generateLocalBusinessSchema(localBusiness));
  }
  
  // Add Breadcrumb Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(richSnippetsSchema.generateBreadcrumbSchema(breadcrumbs));
  }
  
  // Add Organization Schema
  if (includeOrganization) {
    schemas.push(richSnippetsSchema.generateOrganizationSchema());
  }
  
  // Add custom schemas
  schemas.push(...customSchemas);
  
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`schema-markup-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  );
}

// Convenience components for specific schema types
export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(richSnippetsSchema.generateFAQSchema(faqs))
      }}
    />
  );
}

export function ServiceSchema({ service }: { service: ServiceDetails }) {
  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(richSnippetsSchema.generateServiceSchema(service))
      }}
    />
  );
}

export function ReviewSchema({ reviews }: { reviews: ReviewData[] }) {
  return (
    <Script
      id="review-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(richSnippetsSchema.generateReviewSchema(reviews))
      }}
    />
  );
}

export function LocalBusinessSchema({ businessData }: { businessData: LocalBusinessData }) {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(richSnippetsSchema.generateLocalBusinessSchema(businessData))
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(richSnippetsSchema.generateOrganizationSchema())
      }}
    />
  );
}