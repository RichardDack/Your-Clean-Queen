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
  
  // Handle Local Business and Reviews intelligently
  if (localBusiness) {
    if (reviews && reviews.length > 0) {
      // Generate enhanced local business schema with reviews integrated
      const localBusinessSchema = richSnippetsSchema.generateLocalBusinessSchema(localBusiness);
      const aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1),
        "reviewCount": reviews.length,
        "bestRating": 5,
        "worstRating": 1
      };
      
      const enhancedLocalBusiness = {
        ...localBusinessSchema,
        "@id": `${localBusiness.website}/#page-business`, // Different ID to avoid conflicts with global schema
        aggregateRating,
        review: reviews.map(review => ({
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating,
            "bestRating": 5,
            "worstRating": 1
          },
          "reviewBody": review.reviewText,
          "author": {
            "@type": "Person",
            "name": review.author
          },
          "datePublished": review.datePublished,
          ...(review.location && {
            "locationCreated": {
              "@type": "Place",
              "name": review.location
            }
          })
        }))
      };
      
      schemas.push(enhancedLocalBusiness);
    } else {
      // Add Local Business Schema without reviews, but use different ID to avoid global conflicts
      const localBusinessSchema = richSnippetsSchema.generateLocalBusinessSchema(localBusiness);
      const pageLocalBusiness = {
        ...localBusinessSchema,
        "@id": `${localBusiness.website}/#page-business`
      };
      schemas.push(pageLocalBusiness);
    }
  } else if (reviews && reviews.length > 0) {
    // Only reviews, no local business - use standalone review schema
    schemas.push(richSnippetsSchema.generateReviewSchema(reviews));
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