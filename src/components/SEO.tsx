import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  noindex?: boolean;
}

const SITE = 'https://www.adamasmaterials.com';
const OG_IMAGE = `${SITE}/og-image.jpg`;

export function SEO({ title, description, keywords, noindex }: SEOProps) {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE}${pathname === '/' ? '/' : pathname}`;
  const fullTitle = title
    ? `${title} | Adamas Materials`
    : 'Adamas Materials | Materials for Heat, Power and Precision';
  const metaDescription =
    description ||
    'CVD materials for cutting tools, heat sinks and heat spreaders, semiconductors, universities, and technical solutions.';
  const metaKeywords =
    keywords ||
    'cvd materials, cutting tools, heat spreader, data center cooling, semiconductor materials, adamas materials, charlotte nc';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Adamas Materials',
    url: SITE,
    logo: `${SITE}/logo.png`,
    description:
      'CVD materials for cutting tools, data center cooling, semiconductors, universities, and technical solutions.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Charlotte',
      addressRegion: 'NC',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'ops@adamasmaterials.com',
        contactType: 'sales',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Russian'],
      },
      {
        '@type': 'ContactPoint',
        email: 'rd@adamasmaterials.com',
        contactType: 'technical support',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Adamas Materials',
    url: SITE,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE}/glossary?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: { '@type': 'Organization', name: 'Adamas Materials' },
    serviceType: 'CVD Materials',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CVD Materials',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'CVD for Cutting Tools',
            description: 'CVD materials for cutting inserts and wear parts.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'CVD for Thermal Management',
            description: 'CVD heat sinks and heat spreaders for data centers and power electronics.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'CVD for Semiconductors & Research',
            description: 'CVD materials for semiconductor and university projects.',
          },
        },
      ],
    },
  };

  return (
    <Helmet>
      <html lang={typeof document !== 'undefined' ? document.documentElement.lang || 'en' : 'en'} />
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Language is client-switched on the same URLs — do not invent /ru paths. */}
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Adamas Materials" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify([organizationSchema, websiteSchema, servicesSchema])}</script>
    </Helmet>
  );
}
