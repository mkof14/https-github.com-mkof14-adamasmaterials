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
        description="Investor relations for Adamas Materials. Insights into our growth metrics, annual reports, and strategic capital management in materials science." 
        keywords="investor relations, materials science growth, capital management, adamas materials funding, synthetic diamond market"
      />
      <div className="max-w-4xl space-y-24">
        <div className="space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('investors.stewardship')}</span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] italic">{t('nav.investors')}.<br/></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="glass-card border-brand-tan/20 p-12 rounded-[3.5rem] space-y-8 shadow-xl relative overflow-hidden group">
            <div className="absolute inset-0 accent-gradient opacity-10 group-hover:opacity-20 transition-opacity" />
            <h3 className="text-3xl font-display italic relative z-10">{t('investors.growthMetrics')}</h3>
            <div className="space-y-6 relative z-10">
              {[
                { label: t('investors.revenueTrajectory'), value: "+22% QoQ" },
                { label: t('investors.capexEfficiency'), value: "94%" },
                { label: t('investors.ipValuation'), value: "Excl." }
              ].map((m, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-brand-tan font-bold">{m.label}</span>
                  <span className="text-2xl font-display font-medium tracking-tight dark:text-brand-cream">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 rounded-[3.5rem] bg-brand-tan/5 dark:bg-brand-charcoal/30 border border-brand-tan/20 flex flex-col justify-center items-center text-center space-y-4 shadow-inner">
             <span className="font-sans text-[10px] uppercase tracking-[0.3em] opacity-40">{t('investors.portal')}</span>
             <p className="font-sans text-sm italic opacity-60 max-w-[200px]">{t('investors.confidential')}</p>
             <Link to="/rfq" className="text-brand-tan font-sans text-[10px] uppercase tracking-widest font-bold border-b border-brand-tan pb-1 hover:text-brand-ink dark:hover:text-brand-cream transition-colors">{t('investors.requestAccess')}</Link>
          </div>
        </div>

        <div className="p-16 rounded-[4rem] flex flex-col md:flex-row gap-16 items-center bg-brand-ink text-brand-cream shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-brand-tan/20 relative overflow-hidden group">
          <div className="absolute inset-0 accent-gradient opacity-20 group-hover:opacity-30 transition-opacity" />
          <div className="flex-1 space-y-6 relative z-10">
            <h2 className="text-4xl font-display italic">{t('investors.capitalManagement')}</h2>
            <p className="font-sans font-light opacity-60 leading-relaxed italic">
              {t('investors.capitalText')}
            </p>
          </div>
          <div className="flex-1 flex justify-center relative z-10">
            <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center p-4 bg-brand-ink/50 backdrop-blur-md">
              <div className="w-full h-full border border-brand-tan/30 rounded-full flex items-center justify-center italic font-display text-2xl font-bold logo-glow">
                100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
