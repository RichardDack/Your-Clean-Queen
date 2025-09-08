# Enhanced Rich Snippets Schema System

This system provides comprehensive structured data markup for superior search visibility and rich snippets display. It implements all major schema types needed for local business SEO dominance.

## Overview

The enhanced schema system includes:

1. **FAQ Schema** - Rich snippets with helpful customer information
2. **Service Schema** - Detailed "Royal Treatment" service descriptions
3. **Review Schema** - Customer satisfaction ratings display
4. **Local Business Schema** - Comprehensive service area coverage
5. **Organization Schema** - Brand recognition and authority
6. **Breadcrumb Schema** - Navigation structure

## Quick Start

### Basic Usage

```tsx
import SchemaMarkup from '../components/SchemaMarkup';
import { richSnippetsSchema } from '../app/lib/rich-snippets-schema';

export default function MyPage() {
  return (
    <main>
      <SchemaMarkup
        faqs={richSnippetsSchema.SERVICE_FAQS.endOfTenancy}
        localBusiness={richSnippetsSchema.DEFAULT_BUSINESS_DATA}
        includeOrganization={true}
      />
      {/* Your page content */}
    </main>
  );
}
```

### Service Page Example

```tsx
const serviceDetails = {
  name: "End of Tenancy Cleaning Dorchester",
  description: "Professional end of tenancy cleaning with deposit back guarantee...",
  serviceType: "End of Tenancy Cleaning",
  areaServed: ["Dorchester", "Poundbury"],
  priceRange: "££",
  features: [
    "Deposit back guarantee",
    "DBS checked cleaners",
    "Fully insured service"
  ]
};

<SchemaMarkup
  service={serviceDetails}
  faqs={customFAQs}
  reviews={customerReviews}
  breadcrumbs={breadcrumbNav}
  localBusiness={richSnippetsSchema.DEFAULT_BUSINESS_DATA}
  includeOrganization={true}
/>
```

## Schema Types

### 1. FAQ Schema

Generates rich snippets for frequently asked questions.

```tsx
const faqs = [
  {
    question: "What is included in end of tenancy cleaning?",
    answer: "Our service includes complete property deep clean, inside oven and appliances..."
  }
];

<SchemaMarkup faqs={faqs} />
```

**Pre-configured FAQ Sets:**
- `richSnippetsSchema.SERVICE_FAQS.endOfTenancy`
- `richSnippetsSchema.SERVICE_FAQS.weeklycleaning`
- `richSnippetsSchema.SERVICE_FAQS.deepCleaning`
- `richSnippetsSchema.SERVICE_FAQS.poundbury`

### 2. Service Schema

Detailed service information with Royal Treatment positioning.

```tsx
const serviceDetails = {
  name: "Premium Weekly Cleaning",
  description: "Premium weekly cleaning with Royal Treatment standards...",
  serviceType: "Weekly House Cleaning",
  areaServed: ["Dorchester", "Weymouth"],
  priceRange: "££",
  duration: "PT2H-PT4H",
  features: [
    "Royal Treatment quality standards",
    "DBS-checked cleaners",
    "Eco-friendly products"
  ]
};
```

### 3. Review Schema

Customer satisfaction ratings for search result display.

```tsx
const reviews = [
  {
    rating: 5,
    reviewText: "Exceptional service with Royal Treatment approach...",
    author: "Sarah M.",
    datePublished: "2024-01-15",
    location: "Dorchester"
  }
];
```

**Sample Reviews Available:**
- `richSnippetsSchema.SAMPLE_REVIEWS` - Pre-configured review data

### 4. Local Business Schema

Comprehensive business information with service area coverage.

```tsx
const businessData = {
  name: "Your Clean Queen",
  description: "Professional cleaning services...",
  address: {
    addressLocality: "Dorchester",
    addressRegion: "Dorset",
    postalCode: "DT1",
    addressCountry: "GB"
  },
  serviceAreas: ["Dorchester", "Weymouth", "Poundbury"],
  coordinates: {
    latitude: 50.7312,
    longitude: -2.4414
  }
};
```

**Default Business Data:**
- `richSnippetsSchema.DEFAULT_BUSINESS_DATA` - Pre-configured business information

### 5. Breadcrumb Schema

Navigation structure for search engines.

```tsx
const breadcrumbs = [
  { name: "Home", url: "https://yourcleanqueen.co.uk/" },
  { name: "Services", url: "https://yourcleanqueen.co.uk/services" },
  { name: "Deep Cleaning", url: "https://yourcleanqueen.co.uk/deep-cleaning-service" }
];
```

## Individual Schema Components

For specific use cases, use individual schema components:

```tsx
import { FAQSchema, ServiceSchema, ReviewSchema } from '../components/SchemaMarkup';

// FAQ only
<FAQSchema faqs={faqData} />

// Service only
<ServiceSchema service={serviceData} />

// Reviews only
<ReviewSchema reviews={reviewData} />
```

## Competitive Advantages

### Royal Treatment Positioning

All schemas emphasize premium positioning vs budget competitors:

- Service descriptions highlight quality over price
- FAQs address competitive advantages
- Reviews showcase superior service quality
- Business data emphasizes professional standards

### Local Authority

Schemas establish local expertise:

- Comprehensive service area coverage
- Location-specific service details
- Local business credentials
- Geographic targeting

### Rich Snippet Optimization

Designed for maximum search visibility:

- FAQ rich snippets for question-based searches
- Star ratings display in search results
- Service details with pricing information
- Local business information panels

## Best Practices

### Page-Specific Implementation

**Homepage:**
```tsx
<SchemaMarkup
  service={overallBusinessService}
  faqs={generalFAQs}
  reviews={bestReviews}
  localBusiness={businessData}
  includeOrganization={true}
  customSchemas={[websiteSchema, serviceListSchema]}
/>
```

**Service Pages:**
```tsx
<SchemaMarkup
  service={specificServiceDetails}
  faqs={serviceFAQs}
  reviews={serviceReviews}
  breadcrumbs={serviceBreadcrumbs}
  localBusiness={businessData}
/>
```

**Location Pages:**
```tsx
<SchemaMarkup
  faqs={locationFAQs}
  reviews={locationReviews}
  breadcrumbs={locationBreadcrumbs}
  localBusiness={locationBusinessData}
/>
```

### SEO Optimization Tips

1. **FAQ Selection:** Choose questions that target competitor weaknesses
2. **Service Features:** Emphasize Royal Treatment differentiators
3. **Review Content:** Highlight quality vs budget positioning
4. **Local Coverage:** Include comprehensive service areas
5. **Competitive Positioning:** Address budget competitor limitations

## Schema Validation

Test your schema markup using:

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Google Search Console](https://search.google.com/search-console)

## Monitoring Performance

Track schema performance through:

- Google Search Console Rich Results reports
- Click-through rate improvements
- Rich snippet appearance in search results
- Local business panel displays

## Troubleshooting

### Common Issues

1. **Missing Required Fields:** Ensure all required schema properties are included
2. **Invalid Data Types:** Check data format matches schema requirements
3. **Duplicate Schemas:** Avoid multiple identical schema types on same page
4. **Large Schema Size:** Split complex schemas into separate components

### Validation Errors

- Use Google's Rich Results Test for real-time validation
- Check console for JavaScript errors
- Verify JSON-LD syntax is valid
- Ensure all URLs are absolute and accessible

## Updates and Maintenance

### Regular Tasks

1. **Review Updates:** Add new customer reviews monthly
2. **FAQ Updates:** Refresh questions based on customer inquiries
3. **Service Updates:** Update service descriptions and features
4. **Business Data:** Keep contact information and areas served current

### Competitive Monitoring

- Monitor competitor schema implementations
- Update competitive positioning in descriptions
- Adjust FAQ answers to address new competitor claims
- Enhance service features to maintain advantages

This enhanced schema system provides comprehensive structured data that supports Your Clean Queen's competitive positioning while maximizing search visibility and rich snippet opportunities.