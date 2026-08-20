import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { TechnicalTerm } from '../components/TechnicalTerm';

export function Applications() {
  const { t } = useTranslation();
  
  const apps = [
    { 
      name: t('applications.items.tooling.name'), 
      desc: t('applications.items.tooling.desc') 
    },
    { 
      name: t('applications.items.cooling.name'), 
      desc: t('applications.items.cooling.desc') 
    },
    { 
      name: t('applications.items.semiconductors.name'), 
      desc: t('applications.items.semiconductors.desc') 
    },
    { 
      name: t('applications.items.universities.name'), 
      desc: t('applications.items.universities.desc') 
    },
    { 
      name: t('applications.items.technical.name'), 
      desc: t('applications.items.technical.desc') 
    }
  ];

  return (
    <div className="container mx-auto px-5 sm:px-6 py-16 sm:py-24">
      <SEO 
        title={t('nav.applications')} 
        description="CVD materials applications: hardness for cutting tools, thermal conductivity for cooling, materials for semiconductors and research." 
        keywords="cvd materials applications, cutting tools, heat sink, heat spreader, semiconductor materials, university research"
      />
      <div className="max-w-6xl space-y-16 sm:space-y-24">
        <div className="max-w-3xl space-y-8 sm:space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('applications.industrial')}</span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display leading-[1.05] italic text-pretty">
            {t('applications.titlePart1')}<br/>
            <span className="not-italic font-bold">{t('applications.titlePart2')}</span>
          </h1>
          <p className="text-lg sm:text-2xl font-sans font-light leading-relaxed opacity-80 dark:text-brand-cream/90">
            {t('applications.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {apps.map((app, idx) => (
            <motion.div 
              key={app.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-7 sm:p-10 md:p-12 rounded-[1.75rem] sm:rounded-[3.5rem] border-brand-copper/25 dark:border-brand-tan/20 shadow-xl group hover:border-brand-copper/50 dark:hover:border-brand-tan/50 transition-all duration-500 relative overflow-hidden bg-gradient-to-br from-brand-mist via-brand-cream to-brand-sand/50 dark:from-transparent dark:via-transparent dark:to-transparent"
            >
              <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-30 dark:group-hover:opacity-10 transition-opacity" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-brand-copper dark:bg-brand-tan rounded-full animate-pulse" />
                  <TechnicalTerm term={app.name}>
                    <h2 className="text-2xl sm:text-3xl font-display italic tracking-tight text-pretty">{app.name}</h2>
                  </TechnicalTerm>
                </div>
                <p className="font-sans text-lg font-light leading-relaxed opacity-60 dark:text-brand-cream/80">
                  {app.desc}
                </p>
                <div className="h-px w-12 bg-gradient-to-r from-brand-copper to-brand-prismatic-cyan dark:bg-brand-tan/30 group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
