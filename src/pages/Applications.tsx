import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { TechnicalTerm } from '../components/TechnicalTerm';

export function Applications() {
  const { t } = useTranslation();
  
  const apps = [
    { 
      name: t('applications.items.photonics.name'), 
      desc: t('applications.items.photonics.desc') 
    },
    { 
      name: t('applications.items.quantum.name'), 
      desc: t('applications.items.quantum.desc') 
    },
    { 
      name: t('applications.items.sensing.name'), 
      desc: t('applications.items.sensing.desc') 
    },
    { 
      name: t('applications.items.thermal.name'), 
      desc: t('applications.items.thermal.desc') 
    },
    { 
      name: t('applications.items.science.name'), 
      desc: t('applications.items.science.desc') 
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title={t('nav.applications')} 
        description="Strategic applications of Adamas Materials' synthetic lattices in photonics, quantum research, sensing, and thermal management." 
        keywords="photonics applications, quantum research materials, thermal management engineering, high-precision sensing, industrial diamond applications, semiconductor materials"
      />
      <div className="max-w-6xl space-y-24">
        <div className="max-w-3xl space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('applications.industrial')}</span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] italic truncate sm:overflow-visible">{t('applications.titlePart1')}<br/><span className="not-italic font-bold">{t('applications.titlePart2')}</span></h1>
          <p className="text-2xl font-sans font-light leading-relaxed opacity-80 italic dark:text-brand-cream/90">
            {t('applications.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apps.map((app, idx) => (
            <motion.div 
              key={app.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-12 rounded-[3.5rem] border-brand-tan/20 shadow-xl group hover:border-brand-tan/50 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 bg-brand-tan rounded-full animate-pulse" />
                  <TechnicalTerm term={app.name}>
                    <h2 className="text-3xl font-display italic tracking-tight">{app.name}</h2>
                  </TechnicalTerm>
                </div>
                <p className="font-sans text-lg font-light leading-relaxed opacity-60 dark:text-brand-cream/80">
                  {app.desc}
                </p>
                <div className="h-px w-12 bg-brand-tan/30 group-hover:w-20 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
