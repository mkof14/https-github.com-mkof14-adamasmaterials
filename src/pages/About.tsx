import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-5 sm:px-6 py-16 sm:py-24">
      <SEO 
        title={t('nav.about')} 
        description="Adamas Materials supplies CVD materials for cutting tools, data center cooling, semiconductors, universities, and technical solutions." 
        keywords="about adamas materials, cvd materials company, charlotte cvd materials"
      />
      <div className="max-w-4xl space-y-16 sm:space-y-24">
        <div className="space-y-8 sm:space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('about.heritage')}</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display leading-[1.05] italic text-pretty">Adamas<br/><span className="not-italic font-bold">Materials.</span></h1>
          <p className="text-lg sm:text-2xl font-sans font-light leading-relaxed opacity-80 max-w-2xl dark:text-brand-cream border-l-4 border-brand-tan pl-5 sm:pl-8">
            {t('about.premise')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight">{t('about.valuesTitle')}</h2>
            <p className="text-lg font-sans font-light leading-relaxed opacity-70 dark:text-brand-cream/80">
              {t('about.valuesText')}
            </p>
            <div className="pt-8 space-y-4">
              {[
                { label: t('about.metrics.founded'), value: "2026" },
                { label: t('about.metrics.hq'), value: "Charlotte, NC USA" },
                { label: t('about.metrics.focus'), value: t('about.metrics.industrial') }
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between border-b editorial-border pb-4 uppercase font-sans text-[10px] tracking-widest font-bold">
                  <span className="text-brand-tan">{item.label}</span>
                  <span className="dark:text-brand-cream">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="aspect-[4/5] p-0 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1532187875601-1e9ad82991e5?auto=format&fit=crop&q=80&w=1000" 
                alt="Molecular Research" 
                className="w-full h-full object-cover rounded-[1.75rem] sm:rounded-[3.5rem] transition-transform duration-700 hover:scale-105 grayscale hover:grayscale-0 shadow-2xl border border-brand-tan/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
