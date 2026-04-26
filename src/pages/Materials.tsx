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
    <div className="min-h-screen bg-brand-cream dark:bg-brand-ink relative overflow-hidden">
      <div className="absolute inset-0 crystalline-bg opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] prismatic-gradient rounded-full blur-[150px] opacity-10 -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] prismatic-gradient rounded-full blur-[150px] opacity-10 -ml-64 -mb-64" />

      <div className="container mx-auto px-6 py-24 relative z-10">
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
              <span className="not-italic font-bold bg-gradient-to-r from-brand-tan via-brand-ink to-brand-tan dark:from-brand-tan dark:via-brand-cream dark:to-brand-tan bg-clip-text text-transparent">Materials.</span>
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
                className="glass-card group flex flex-col md:flex-row rounded-[3rem] border-brand-tan/20 hover:border-brand-tan/50 transition-all duration-500 overflow-hidden diamond-shadow"
              >
                {/* Material Info */}
                <div className="flex-1 p-12 space-y-8 bg-white/50 dark:bg-brand-ink/50 backdrop-blur-md relative overflow-hidden">
                  <div className="absolute inset-0 prismatic-gradient opacity-10 pointer-events-none" />
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-all duration-700">
                    {idx === 0 && <Shield className="w-32 h-32 rotate-12" />}
                    {idx === 1 && <Target className="w-32 h-32 -rotate-12" />}
                    {idx === 2 && <Microscope className="w-32 h-32 rotate-6" />}
                    {idx === 3 && <Zap className="w-32 h-32 -rotate-6" />}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <span className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-brand-tan bg-brand-tan/10 px-3 py-1 rounded-full backdrop-blur-sm shadow-sm flex-shrink-0 w-fit">
                      {material.category} Grade
                    </span>
                    <h2 className="text-4xl font-display italic tracking-tight">{material.name}</h2>
                    <p className="font-sans text-lg font-light leading-relaxed opacity-80">
                      {material.description}
                    </p>
                  </div>

                  <div className="pt-4 relative z-10 flex flex-wrap gap-2">
                    {material.applications.map((app, appIdx) => (
                      <span key={appIdx} className="font-sans text-[9px] uppercase tracking-widest font-bold opacity-60 px-3 py-1 border border-brand-tan/20 rounded-lg italic bg-white dark:bg-brand-charcoal/30">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specifications Panel */}
                <div className="w-full md:w-80 bg-brand-tan/5 dark:bg-brand-tan/10 p-12 flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l editorial-border relative overflow-hidden">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-full w-full h-full shimmer opacity-10 transition-all group-hover:left-full duration-1000" />
                  </div>
                  <h3 className="font-sans text-[10px] uppercase tracking-[0.4em] font-bold opacity-40 mb-2">Specifications</h3>
                  <div className="space-y-6">
                    {material.specifications.map((spec, specIdx) => (
                      <div key={specIdx} className="space-y-1">
                        <p className="font-sans text-[9px] uppercase tracking-widest opacity-60 font-bold">{spec.label}</p>
                        <p className="font-display text-xl font-bold dark:text-brand-cream tracking-tight">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/rfq" className="mt-4 flex items-center gap-2 group/btn w-fit">
                    <span className="font-sans text-[9px] uppercase tracking-widest font-extrabold text-brand-tan border-b border-brand-tan/30 pb-2 group-hover/btn:border-brand-tan transition-all">
                      Request Data Sheet
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Global Standards */}
          <div className="py-20 border editorial-border grid grid-cols-1 md:grid-cols-3 gap-12 surface-gradient p-12 rounded-[4rem] text-center relative overflow-hidden diamond-shadow">
            <div className="absolute inset-0 crystalline-bg opacity-10 pointer-events-none" />
            <div className="space-y-4 relative z-10">
              <span className="text-5xl font-display font-bold bg-gradient-to-br from-brand-ink to-brand-tan dark:from-brand-cream dark:to-brand-tan bg-clip-text text-transparent italic">99.99%</span>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-60">Minimum Purity Level</p>
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-5xl font-display font-bold italic bg-gradient-to-br from-brand-ink to-brand-tan dark:from-brand-cream dark:to-brand-tan bg-clip-text text-transparent">ISO 2026</span>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-60">Certified Methodology</p>
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-5xl font-display font-bold bg-gradient-to-br from-brand-ink to-brand-tan dark:from-brand-cream dark:to-brand-tan bg-clip-text text-transparent italic tracking-tighter">Traceable</span>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-60">Batch Chain of Custody</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
