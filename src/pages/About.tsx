import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title={t('nav.about')} 
        description="Discover Adamas Materials' mission to revolutionize industrial material synthesis through uncompromising quality and advanced lattice engineering." 
      />
      <div className="max-w-4xl space-y-24">
        <div className="space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('about.heritage')}</span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] italic">Adamas<br/><span className="not-italic font-bold">Materials.</span></h1>
          <p className="text-2xl font-sans font-light leading-relaxed opacity-80 max-w-2xl dark:text-brand-cream italic border-l-4 border-brand-tan pl-8">
            {t('about.premise')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
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
            <div className="aspect-[4/5] glass-card p-4 rounded-3xl border-brand-tan/20 shadow-2xl relative group overflow-hidden">
              <div className="image-overlay z-10 opacity-30" />
              <img 
                src="https://images.unsplash.com/photo-1532187875601-1e9ad82991e5?auto=format&fit=crop&q=80&w=1000" 
                alt="Molecular Research" 
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
            <p className="font-sans text-[9px] italic text-brand-tan uppercase tracking-widest text-right font-bold opacity-60">Laboratory Phase 3 – Molecular Mapping</p>
          </div>
        </div>
      </div>
    </div>
  );
}
