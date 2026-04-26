import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Microscope, Target, Zap, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <SEO 
        title="Home" 
        description="Adamas Materials - Leading synthetic lattice engineering for industrial and quantum applications. Defect-engineered diamonds and advanced mineral synthesis." 
        keywords="synthetic diamond, cvd diamond, diamond synthesis, industrial lattice, materials science, quantum grade materials, adamas materials, hpht synthesis, carbon lattice engineering"
      />
      {/* Hero Section */}
      <section className="min-h-[85vh] flex overflow-hidden border-b editorial-border relative">
        <div className="absolute inset-0 crystalline-bg opacity-[0.05] pointer-events-none" />
        
        {/* Content Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-12 lg:p-24 space-y-10 bg-brand-cream/80 dark:bg-brand-ink/80 backdrop-blur-sm relative border-r editorial-border">
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-prismatic-cyan/10 dark:from-brand-prismatic-cyan/5 to-transparent pointer-events-none" />
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
              <span className="not-italic font-bold bg-gradient-to-r from-brand-ink via-brand-tan to-brand-ink dark:from-brand-cream dark:via-brand-tan dark:to-brand-cream bg-clip-text text-transparent">Synthesis.</span>
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
            <Link to="/rfq" className="bg-brand-ink text-brand-cream dark:bg-brand-cream dark:text-brand-ink px-10 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-tan dark:hover:bg-brand-tan transition-all duration-500 shadow-xl relative overflow-hidden group">
              <span className="relative z-10">{t('home.cta')}</span>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 -left-full w-full h-full shimmer opacity-20 transition-all group-hover:left-full duration-1000" />
              </div>
            </Link>
            <Link to="/about" className="border border-brand-ink/20 dark:border-brand-cream/20 px-10 py-4 font-sans text-xs uppercase tracking-widest font-bold hover:bg-brand-ink hover:text-white dark:hover:bg-brand-cream dark:hover:text-brand-ink transition-all backdrop-blur-sm">
              {t('common.learnMore')}
            </Link>
          </motion.div>
        </div>

        {/* Visual Side */}
        <div className="hidden lg:flex w-1/2 relative prismatic-gradient items-center justify-center p-12 lg:p-24 overflow-hidden">
          <div className="absolute inset-0 subtle-pulse" style={{ backgroundImage: 'radial-gradient(var(--color-brand-tan) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          
          <div className="z-10 text-center space-y-12 w-full max-w-lg">
            <motion.div 
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 12, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-64 h-64 bg-brand-ink mx-auto rounded-[3rem] flex items-center justify-center diamond-shadow border border-brand-tan/20 relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-prismatic-cyan/20 via-transparent to-brand-prismatic-violet/20 opacity-50" />
              <div className="w-52 h-52 border-2 border-brand-tan/10 rounded-[2.5rem] flex items-center justify-center relative">
                <div className="absolute top-0 -left-full w-full h-full shimmer opacity-40 group-hover:left-full transition-all duration-[2000ms]" />
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
      <section className="py-32 bg-brand-cream dark:bg-brand-ink relative overflow-hidden border-b editorial-border">
        <div className="absolute top-0 right-0 w-96 h-96 prismatic-gradient rounded-full blur-[120px] opacity-10 -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-prismatic-cyan/5 rounded-full blur-[120px] opacity-20 -ml-48 -mb-48" />
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
          <div className="max-w-4xl mx-auto space-y-10 text-center">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('common.solutions')}</span>
            <h2 className="text-4xl md:text-6xl font-display leading-tight italic">{t('home.extremePerformance').split('.')[0]}<br/><span className="not-italic font-bold">Performance.</span></h2>
            <p className="text-lg font-sans font-light leading-relaxed opacity-70 dark:text-brand-cream/80 max-w-2xl mx-auto">
              {t('home.solutionText')}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
              {[
                t('home.categories.quantum'),
                t('home.categories.thermal'),
                t('home.categories.tooling'),
                t('home.categories.technical')
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 group">
                  <div className="h-0.5 w-6 bg-brand-tan group-hover:w-10 transition-all duration-500" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold dark:text-brand-cream text-center">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />

      {/* Final CTA */}
      <section className="py-32 bg-brand-ink dark:bg-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 accent-gradient opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 text-center space-y-10 relative z-10">
          <h2 className="text-5xl md:text-7xl font-display italic text-brand-cream dark:text-brand-ink leading-tight">
            Ready to Forge the <span className="not-italic font-bold">Future?</span>
          </h2>
          <div className="flex justify-center">
            <Link to="/rfq" className="bg-brand-tan text-brand-ink px-16 py-6 font-sans text-xs uppercase tracking-[0.3em] font-extrabold hover:bg-brand-cream hover:text-brand-ink transition-all shadow-2xl hover:scale-105 active:scale-95">
              Initiate Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqSection() {
  const { t } = useTranslation();
  const faqItems = t('home.faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>;
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-32 bg-brand-cream dark:bg-brand-ink border-t editorial-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">Inquiries</span>
            <h2 className="text-4xl md:text-6xl font-display leading-tight italic">
              {t('home.faq.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-lg font-sans font-light opacity-60 dark:text-brand-cream/60">
              {t('home.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="border-b editorial-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full py-8 flex justify-between items-center text-left group"
                >
                  <span className="text-xl md:text-2xl font-display italic group-hover:text-brand-tan transition-colors duration-300 dark:text-brand-cream">
                    {item.q}
                  </span>
                  <div className={`h-8 w-8 rounded-full border border-brand-tan/30 flex items-center justify-center transition-all duration-500 flex-shrink-0 ml-4 ${openIndex === idx ? 'bg-brand-tan rotate-45' : 'group-hover:border-brand-tan'}`}>
                    <Plus className={`h-4 w-4 transition-colors duration-500 ${openIndex === idx ? 'text-brand-cream' : 'text-brand-tan'}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <p className="pb-12 text-lg font-sans font-light leading-relaxed opacity-70 max-w-3xl dark:text-brand-cream/70">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="pt-8 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] opacity-40 mb-6 italic">Still have technical questions?</p>
            <Link to="/rfq" className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-brand-tan border-b border-brand-tan/30 pb-2 hover:border-brand-tan transition-all">
              Consult with Engineering
            </Link>
          </div>
        </div>
      </div>
    </section>
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
