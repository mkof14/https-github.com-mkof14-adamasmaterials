import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Investors() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-5 sm:px-6 py-16 sm:py-24">
      <SEO 
        title={t('nav.investors')} 
        description="Investor information for Adamas Materials — CVD materials for industrial tooling, cooling, semiconductors, and research." 
        keywords="investor relations, cvd materials, industrial tooling, thermal management, adamas materials"
      />
      <div className="max-w-3xl space-y-12 sm:space-y-16">
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display leading-[1.05] text-pretty">{t('nav.investors')}</h1>
          <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed text-body">
            {t('investors.capitalText')}
          </p>
        </div>

        <div className="space-y-4 border-t editorial-border pt-10">
          <p className="font-sans text-sm text-body max-w-md">
            {t('investors.confidential')}
          </p>
          <Link
            to="/rfq"
            className="inline-block text-brand-tan font-sans text-[10px] uppercase tracking-widest font-bold border-b border-brand-tan/40 pb-1 hover:border-brand-tan transition-colors"
          >
            {t('investors.requestAccess')}
          </Link>
        </div>
      </div>
    </div>
  );
}
