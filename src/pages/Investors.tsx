import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Investors() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title={t('nav.investors')} 
        description="Investor information for Adamas Materials — CVD diamond for industrial tooling, cooling, semiconductors, and research." 
        keywords="investor relations, cvd diamond, industrial tooling, thermal management, adamas materials"
      />
      <div className="max-w-3xl space-y-16">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9]">{t('nav.investors')}</h1>
          <p className="text-xl font-sans font-normal leading-relaxed text-body">
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
