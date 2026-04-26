import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { materials } from '../data/materials';
import { motion } from 'motion/react';
import { Shield, Target, Microscope, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Materials() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title={t('nav.specifications')} 
        description="Detailed technical specifications for Adamas Materials' synthetic diamond grades and experimental technical minerals." 
        keywords="diamond specifications, purity standards, thermal conductivity, quantum grade lattice, industrial diamond data"
      />
      
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="max-w-3xl space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('common.solutions')}</span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] italic truncate sm:overflow-visible text-pretty">
            Technical<br/>
            <span className="not-italic font-bold">Materials.</span>
          </h1>
          <p className="text-2xl font-sans font-light leading-relaxed opacity-80 italic dark:text-brand-cream/90 border-l-4 border-brand-tan pl-8">
            Our catalog represents the pinnacle of synthetic lattice engineering, providing materials that push the boundaries of physics and industry.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {materials.map((material, idx) => (
            <motion.div 
              key={material.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group flex flex-col md:flex-row rounded-[3rem] border-brand-tan/20 hover:border-brand-tan/50 transition-all duration-500 overflow-hidden shadow-2xl"
            >
              {/* Material Info */}
              <div className="flex-1 p-12 space-y-8 bg-white/50 dark:bg-brand-ink/50 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {idx === 0 && <Shield className="w-32 h-32" />}
                  {idx === 1 && <Target className="w-32 h-32" />}
                  {idx === 2 && <Microscope className="w-32 h-32" />}
                  {idx === 3 && <Zap className="w-32 h-32" />}
                </div>

                <div className="space-y-4 relative z-10">
                  <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-brand-tan bg-brand-tan/10 px-3 py-1 rounded-full">
                    {material.category} Grade
                  </span>
                  <h2 className="text-4xl font-display italic tracking-tight">{material.name}</h2>
                  <p className="font-sans text-lg font-light leading-relaxed opacity-70">
                    {material.description}
                  </p>
                </div>

                <div className="pt-4 relative z-10 flex flex-wrap gap-2">
                  {material.applications.map((app, appIdx) => (
                    <span key={appIdx} className="font-sans text-[9px] uppercase tracking-widest font-bold opacity-40 px-3 py-1 border border-brand-ink/10 dark:border-brand-cream/10 rounded-lg italic">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications Panel */}
              <div className="w-full md:w-80 bg-brand-tan/5 dark:bg-brand-tan/20 p-12 flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l editorial-border relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-tan/20 md:w-1 md:h-full" />
                <h3 className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-2">Specifications</h3>
                <div className="space-y-6">
                  {material.specifications.map((spec, specIdx) => (
                    <div key={specIdx} className="space-y-1">
                      <p className="font-sans text-[9px] uppercase tracking-widest opacity-40 font-bold">{spec.label}</p>
                      <p className="font-display text-xl font-bold dark:text-brand-cream">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <Link to="/rfq" className="mt-4 inline-block font-sans text-[9px] uppercase tracking-widest font-extrabold text-brand-tan border-b border-brand-tan/30 pb-2 hover:border-brand-tan transition-all w-fit">
                  Request Data Sheet
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Standards */}
        <div className="py-20 border-y editorial-border grid grid-cols-1 md:grid-cols-3 gap-12 surface-gradient p-12 rounded-[4rem] text-center">
          <div className="space-y-4">
            <span className="text-5xl font-display font-bold">99.99%</span>
            <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">Minimum Purity Level</p>
          </div>
          <div className="space-y-4">
            <span className="text-5xl font-display font-bold italic">ISO 2026</span>
            <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">Certified Methodology</p>
          </div>
          <div className="space-y-4">
            <span className="text-5xl font-display font-bold">Traceable</span>
            <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">Batch Chain of Custody</p>
          </div>
        </div>
      </div>
    </div>
  );
}
