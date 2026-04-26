import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Microscope, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <SEO 
        title="Home" 
        description="Adamas Materials - Leading synthetic lattice engineering for industrial and quantum applications. Defect-engineered diamonds and advanced mineral synthesis." 
      />
      {/* Hero Section */}
      <section className="min-h-[85vh] flex overflow-hidden border-b editorial-border">
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-24 space-y-10 bg-brand-cream dark:bg-brand-ink relative">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-sand/20 dark:from-brand-charcoal/20 to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 relative z-10"
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] text-brand-tan font-bold">
              {t('common.est2026')}
            </span>
            <h1 className="text-6xl md:text-8xl leading-[0.9] italic font-display">
              {t('home.heroTitle').split('.').map((part, i) => i === 0 ? <React.Fragment key={i}>{part}<br/></React.Fragment> : null)}
              <span className="not-italic font-bold">Synthesis.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg font-light leading-relaxed opacity-80 max-w-md dark:text-brand-cream relative z-10"
          >
            {t('home.heroSubtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6 pt-4 relative z-10"
          >
            <Link to="/rfq" className="bg-brand-ink text-brand-cream dark:bg-brand-cream dark:text-brand-ink px-10 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-tan dark:hover:bg-brand-tan transition-all duration-500 shadow-xl">
              {t('home.cta')}
            </Link>
            <Link to="/about" className="border border-brand-ink dark:border-brand-cream px-10 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-ink hover:text-white dark:hover:bg-brand-cream dark:hover:text-brand-ink transition-all">
              {t('common.learnMore')}
            </Link>
          </motion.div>
        </div>

        {/* Visual Side */}
        <div className="hidden lg:flex w-1/2 relative accent-gradient items-center justify-center p-12 lg:p-24 border-l editorial-border overflow-hidden">
          <div className="absolute inset-0 subtle-pulse" style={{ backgroundImage: 'radial-gradient(var(--color-brand-tan) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="z-10 text-center space-y-12 w-full max-w-lg">
            <motion.div 
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 12, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-64 h-64 bg-brand-ink mx-auto rounded-[3rem] flex items-center justify-center shadow-[0_50px_100px_-20px_rgba(196,164,132,0.4)] border border-brand-tan/20 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-tan/20 via-transparent to-brand-gold/10 opacity-50" />
              <div className="w-52 h-52 border-2 border-brand-tan/10 rounded-[2.5rem] flex items-center justify-center">
                <div className="w-40 h-40 border border-brand-tan/20 rounded-[2rem] flex items-center justify-center bg-brand-ink relative overflow-hidden">
                  <div className="absolute inset-0 accent-gradient opacity-10" />
                  <span className="text-white font-display text-7xl font-bold logo-glow relative z-10">A</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <StatItem label={t('common.quarterlyGrowth')} value="+14.8%" />
              <StatItem label={t('common.patentAssets')} value="428+" />
            </div>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-32 bg-brand-cream dark:bg-brand-ink relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 accent-gradient rounded-full blur-[120px] opacity-20 -mr-48 -mt-48" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('common.coreFocus')}</span>
              <h2 className="text-4xl md:text-6xl font-display">{t('home.positioningTitle')}</h2>
            </div>
            <p className="max-w-xs text-sm opacity-60 font-sans leading-relaxed italic border-l-2 border-brand-tan pl-6">
              {t('home.positioningSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Microscope className="h-6 w-6" />}
              title={t('positioning.scientificTitle')}
              text={t('positioning.scientificText')}
            />
            <FeatureCard 
              icon={<Target className="h-6 w-6" />}
              title={t('positioning.noConsumerTitle')}
              text={t('positioning.noConsumerText')}
            />
            <FeatureCard 
              icon={<Zap className="h-6 w-6" />}
              title={t('positioning.rfqTitle')}
              text={t('positioning.rfqText')}
            />
          </div>
        </div>
      </section>

      {/* Advanced Solutions */}
      <section className="py-32 border-t editorial-border surface-gradient relative">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="flex-1 space-y-10">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('common.solutions')}</span>
              <h2 className="text-4xl md:text-6xl font-display leading-tight italic">{t('home.extremePerformance').split('.')[0]}<br/><span className="not-italic font-bold">Performance.</span></h2>
              <p className="text-lg font-sans font-light leading-relaxed opacity-70 dark:text-brand-cream/80">
                {t('home.solutionText')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {[
                  t('home.categories.quantum'),
                  t('home.categories.thermal'),
                  t('home.categories.tooling'),
                  t('home.categories.technical')
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="h-0.5 w-6 bg-brand-tan group-hover:w-10 transition-all duration-500" />
                    <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold dark:text-brand-cream">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative border editorial-border p-4 bg-white dark:bg-brand-ink rounded-[4rem] group overflow-hidden shadow-2xl">
                <div className="image-overlay z-10 opacity-20" />
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000" 
                  alt="Industrial Data" 
                  className="w-full object-cover grayscale rounded-[3rem] h-[500px] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ label, value }: { label: string, value: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="glass-card p-8 rounded-2xl text-left shadow-lg border-brand-tan/20"
    >
      <p className="font-sans text-[10px] uppercase tracking-widest text-brand-tan mb-2 font-bold">{label}</p>
      <p className="font-display text-4xl font-bold dark:text-brand-cream">{value}</p>
    </motion.div>
  );
}

function FeatureCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-10 border editorial-border glass-card space-y-8 flex flex-col items-start hover:border-brand-tan/50 transition-all duration-500 rounded-[3rem]"
    >
      <div className="text-brand-tan p-4 bg-brand-tan/10 rounded-2xl">
        {icon}
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-display italic tracking-tight">{title}</h3>
        <p className="text-sm font-sans font-light leading-relaxed opacity-70">
          {text}
        </p>
      </div>
      <div className="h-px w-12 bg-brand-tan mt-auto" />
    </motion.div>
  );
}
