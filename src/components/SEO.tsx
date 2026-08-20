import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEO({ title, description, keywords }: SEOProps) {
  const canonicalUrl = `https://www.adamasmaterials.com${window.location.pathname}`;
  const fullTitle = title ? `${title} | Adamas Materials` : 'Adamas Materials | Materials for Heat, Power and Precision';
  const metaDescription = description || "CVD materials for cutting tools, heat sinks and heat spreaders, semiconductors, universities, and technical solutions.";
  const metaKeywords = keywords || "cvd materials, cutting tools, heat spreader, data center cooling, semiconductor materials, adamas materials";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Adamas Materials",
    "url": "https://www.adamasmaterials.com",
    "logo": "https://www.adamasmaterials.com/logo.png",
    "description": "CVD materials for cutting tools, data center cooling, semiconductors, universities, and technical solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "addressCountry": "USA"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "ops@adamasmaterials.com",
      "contactType": "customer service"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Adamas Materials"
    },
    "serviceType": "CVD Materials",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CVD Materials",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CVD for Cutting Tools",
            "description": "CVD materials for cutting inserts and wear parts."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CVD for Thermal Management",
            "description": "CVD heat spreaders for data centers and power electronics."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CVD for Semiconductors & Research",
            "description": "CVD materials for semiconductor and university projects."
          }
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Hreflang for international SEO */}
        <link rel="alternate" href="https://www.adamasmaterials.com/" hrefLang="x-default" />
        <link rel="alternate" href="https://www.adamasmaterials.com/ru" hrefLang="ru" />
        <link rel="alternate" href="https://www.adamasmaterials.com/uk" hrefLang="uk" />
        <link rel="alternate" href="https://www.adamasmaterials.com/es" hrefLang="es" />
        <link rel="alternate" href="https://www.adamasmaterials.com/de" hrefLang="de" />
        <link rel="alternate" href="https://www.adamasmaterials.com/fr" hrefLang="fr" />
        <link rel="alternate" href="https://www.adamasmaterials.com/ja" hrefLang="ja" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content="https://www.adamasmaterials.com" />
        <meta property="og:site_name" content="Adamas Materials" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify([organizationSchema, servicesSchema])}
        </script>
      </Helmet>
    </>
  );
}
