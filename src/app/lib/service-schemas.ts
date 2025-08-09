export const createServiceSchema = (serviceName: string, location: string, serviceType: string = "House Cleaning Service") => {
  const baseUrl = "https://yourcleanqueen.co.uk";
  
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} in ${location}`,
    "description": `Professional ${serviceName.toLowerCase()} services in ${location} and surrounding West Dorset areas by Your Clean Queen. Reliable, insured cleaners with 5+ years experience.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Your Clean Queen",
      "@id": `${baseUrl}/#business`
    },
    "areaServed": {
      "@type": "Place",
      "name": location,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "West Dorset"
      }
    },
    "serviceType": serviceType,
    "category": "Domestic Cleaning",
    "additionalType": "https://schema.org/HouseCleaner",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "GBP",
      "priceRange": "££",
      "availableAtOrFrom": {
        "@type": "Place",
        "name": location
      }
    }
  };
};

export const createLocationSchema = (locationName: string, latitude: number, longitude: number) => {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": locationName,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": latitude,
      "longitude": longitude
    },
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "West Dorset"
    }
  };
};

export const cleaningServiceTypes = {
  "House Cleaners": "Professional house cleaning services",
  "Domestic Cleaners": "Domestic residential cleaning services", 
  "Professional Cleaners": "Professional cleaning services",
  "Cleaners": "Professional cleaning services"
};

export const locationCoordinates = {
  "Dorchester": { lat: 50.7312, lng: -2.4414 },
  "Weymouth": { lat: 50.6098, lng: -2.4598 },
  "Poundbury": { lat: 50.7167, lng: -2.4667 },
  "West Dorset": { lat: 50.7312, lng: -2.4414 }
};