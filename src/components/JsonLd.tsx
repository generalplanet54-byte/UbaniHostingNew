import React from 'react';
import { Helmet } from 'react-helmet-async';

const JsonLd: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ubani Hosting",
    "url": "https://ubanihosting.co.za",
    "logo": "https://ubanihosting.co.za/logo.png",
    "description": "Professional web hosting solutions for South African businesses with 99.9% uptime guarantee and local support.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johannesburg",
      "addressCountry": "ZA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+27748953557",
      "contactType": "customer service",
      "email": "support@ubanihosting.co.za",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://ubanihosting.co.za"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Hosting Services",
    "provider": {
      "@type": "Organization",
      "name": "Ubani Hosting"
    },
    "description": "Professional web hosting, domain registration, and website development services for South African businesses.",
    "areaServed": "South Africa",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Hosting Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Hosting"
          },
          "price": "2100",
          "priceCurrency": "ZAR",
          "priceValidUntil": "2025-12-31"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pro Hosting"
          },
          "price": "4200",
          "priceCurrency": "ZAR",
          "priceValidUntil": "2025-12-31"
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default JsonLd;