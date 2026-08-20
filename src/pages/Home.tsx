import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { APP_MARKS, APP_ACCENTS, type AppMarkKey } from '../components/AppMarks';

export function Home() {
  const { t } = useTranslation();

  const positioning: { accent: AppMarkKey; title: string; text: string }[] = [
    { accent: 'technical', title: t('positioning.scientificTitle'), text: t('positioning.scientificText') },
    { accent: 'tooling', title: t('positioning.noConsumerTitle'), text: t('positioning.noConsumerText') },
    { accent: 'cooling', title: t('positioning.rfqTitle'), text: t('positioning.rfqText') },
  ];

  const categories: { accent: AppMarkKey; label: string }[] = [
    { accent: 'tooling', label: t('home.categories.tooling') },
    { accent: 'cooling', label: t('home.categories.cooling') },
    { accent: 'semiconductors', label: t('home.categories.semiconductors') },
    { accent: 'universities', label: t('home.categories.universities') },
  ];

  return (
    <div className="flex flex-col">
      <SEO 
        title="Home" 
        description="Adamas Materials — CVD materials for cutting tools, heat sinks and heat spreaders, semiconductors, universities, and technical solutions." 
        keywords="cvd materials, cutting tools, heat spreader, data center cooling, semiconductor materials, adamas materials"
      />

      {/* Hero Section — equal columns */}
      <section className="lg:min-h-[85vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden border-b editorial-border relative bg-brand-mist dark:bg-brand-ink">
        {/* Content Side */}
        <div className="flex flex-col justify-center order-2 lg:order-1 px-5 py-10 sm:px-10 sm:py-14 lg:px-16 xl:px-24 space-y-6 sm:space-y-8 relative z-10">
          <div className="space-y-4 sm:space-y-5 max-w-xl">
            <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-brand-tan font-bold">
              {t('common.est2026')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl leading-[1.02] italic font-display text-brand-ink dark:text-brand-cream text-pretty">
              {t('home.heroTitle')}<br/>
              <span className="not-italic font-bold text-brand-tan">{t('home.heroAccent')}</span>
            </h1>
          </div>
          
          <p className="font-sans text-[15px] sm:text-lg font-normal leading-relaxed text-body max-w-md">
            {t('home.heroSubtitle')}
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-1 sm:pt-2">
            <Link
              to="/rfq"
              className="font-sans text-[11px] uppercase tracking-[0.22em] font-bold text-brand-ink dark:text-brand-cream border-b border-transparent hover:border-brand-tan hover:text-brand-tan transition-colors duration-300 pb-1"
            >
              {t('home.cta')}
            </Link>
            <Link
              to="/about"
              className="font-sans text-[11px] uppercase tracking-[0.22em] font-semibold text-brand-subtle dark:text-brand-subtle border-b border-transparent hover:border-brand-tan hover:text-brand-tan transition-colors duration-300 pb-1"
            >
              {t('common.learnMore')}
            </Link>
          </div>
        </div>

        <HeroVideo />
      </section>

      {/* Positioning */}
      <section className="py-16 sm:py-24 lg:py-32 bg-brand-cream dark:bg-brand-ink relative overflow-hidden border-b editorial-border">
        <div className="absolute inset-0 crystalline-bg pointer-events-none opacity-60" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full blur-[100px] bg-[#8A6540]/14 dark:bg-[#C4A078]/10"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 sm:mb-16 lg:mb-20 gap-6 sm:gap-8">
            <div className="max-w-2xl space-y-3 sm:space-y-4">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('common.coreFocus')}</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-display text-pretty">{t('home.positioningTitle')}</h2>
            </div>
            <p className="max-w-xs text-sm text-body font-sans leading-relaxed border-l-2 border-brand-tan pl-5 sm:pl-6">
              {t('home.positioningSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {positioning.map((item) => (
              <FeatureCard
                key={item.title}
                accent={item.accent}
                title={item.title}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Solutions */}
      <section className="py-16 sm:py-24 lg:py-32 border-t editorial-border surface-gradient relative">
        <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-10 text-center">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('common.coreFocus')}</span>
            <p className="text-base sm:text-lg md:text-xl font-sans font-normal leading-relaxed text-body max-w-2xl mx-auto">
              {t('home.solutionText')}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-4 sm:pt-8">
              {categories.map((item) => {
                const accent = APP_ACCENTS[item.accent];
                const Mark = APP_MARKS[item.accent];
                return (
                  <div key={item.label} className="flex flex-col items-center gap-3 sm:gap-4 group">
                    <div className={`relative h-12 w-12 flex items-center justify-center border border-current/15 ${accent.mark} bg-white/50 dark:bg-brand-ink/40`}>
                      <Mark className="h-6 w-6" />
                    </div>
                    <div className={`h-0.5 w-6 ${accent.rail} group-hover:w-10 transition-all duration-500`} />
                    <span className={`font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-center leading-snug ${accent.num}`}>{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      {/* RFQ */}
      <section className="py-16 border-t editorial-border bg-brand-mist dark:bg-brand-ink">
        <div className="container mx-auto px-6 flex justify-center">
          <Link
            to="/rfq"
            className="font-sans text-xs uppercase tracking-[0.28em] font-bold text-brand-ink dark:text-brand-cream border-b border-brand-tan/40 hover:border-brand-tan hover:text-brand-tan transition-colors duration-300 pb-2"
          >
            {t('home.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);

  const startPlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    setEnded(false);
    video.muted = false;
    setMuted(false);
    void video.play().then(() => setPlaying(true)).catch(() => {
      video.muted = true;
      setMuted(true);
      void video.play().then(() => setPlaying(true)).catch(() => undefined);
    });
  };

  const toggleMute = (event: React.MouseEvent) => {
    event.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  };

  const holdLastFrame = () => {
    const video = videoRef.current;
    if (!video || !Number.isFinite(video.duration)) return;
    video.pause();
    video.currentTime = Math.max(0, video.duration - 0.04);
    setPlaying(false);
    setEnded(true);
  };

  const showPlay = !playing || ended;

  return (
    <div className="relative w-full order-1 lg:order-2 flex items-center justify-center px-5 pt-6 pb-2 sm:px-8 sm:py-8 lg:px-10 xl:px-14 lg:py-0 lg:min-h-[85vh]">
      <div
        className="relative w-full aspect-video overflow-hidden cursor-pointer group rounded-sm"
        onClick={showPlay ? startPlayback : undefined}
        role={showPlay ? 'button' : undefined}
        tabIndex={showPlay ? 0 : undefined}
        onKeyDown={(e) => {
          if (showPlay && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            startPlayback();
          }
        }}
        aria-label={showPlay ? 'Play brand film' : undefined}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover object-center"
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
          onEnded={holdLastFrame}
          onPlay={() => { setPlaying(true); setEnded(false); }}
          onPause={() => setPlaying(false)}
          aria-label="Adamas Materials brand film"
        >
          <source src="/hero.webm" type="video/webm" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div aria-hidden className="pointer-events-none absolute inset-0 bg-brand-ink/20 dark:bg-brand-ink/25" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-14 bg-gradient-to-r from-brand-mist/90 to-transparent dark:from-brand-ink/90" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-10 bg-gradient-to-l from-brand-mist/70 to-transparent dark:from-brand-ink/70" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-6 sm:h-8 bg-gradient-to-b from-brand-mist/50 to-transparent dark:from-brand-ink/50" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-8 sm:h-12 bg-gradient-to-t from-brand-mist/70 to-transparent dark:from-brand-ink/70" />

        {showPlay && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] font-bold text-brand-cream border-b border-brand-cream/50 lg:text-brand-cream/0 lg:border-transparent lg:group-hover:text-brand-cream lg:group-hover:border-brand-cream/80 transition-all duration-300 pb-1">
              {ended ? 'Replay' : 'Play'}
            </span>
          </div>
        )}

        {playing && !ended && (
          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-3 right-4 sm:bottom-4 sm:right-5 z-20 font-sans text-[10px] uppercase tracking-[0.22em] font-semibold text-brand-cream border-b border-brand-cream/40 lg:text-brand-cream/0 lg:border-transparent lg:group-hover:text-brand-cream lg:group-hover:border-brand-cream/60 transition-all duration-300 pb-0.5"
          >
            {muted ? 'Unmute' : 'Mute'}
          </button>
        )}
      </div>
    </div>
  );
}

function FaqSection() {
  const { t } = useTranslation();
  const faqItems = t('home.faq.items', { returnObjects: true }) as Array<{ q: string, a: string }>;
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-brand-mist dark:bg-brand-ink border-t editorial-border relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto space-y-10 sm:space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display leading-tight text-pretty">
              {t('home.faq.title')}
            </h2>
            <p className="max-w-2xl mx-auto text-base sm:text-lg font-sans font-normal text-body">
              {t('home.faq.subtitle')}
            </p>
          </div>

          <div className="space-y-2 sm:space-y-4">
            {faqItems.map((item, idx) => (
              <div 
                key={idx}
                className="border-b editorial-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full py-5 sm:py-8 flex justify-between items-center text-left group gap-3"
                >
                  <span className="text-lg sm:text-xl md:text-2xl font-display italic group-hover:text-brand-tan transition-colors duration-300 dark:text-brand-cream text-pretty">
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
                      <p className="pb-12 text-lg font-sans font-normal leading-relaxed text-body max-w-3xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          
          <div className="pt-8 text-center">
            <Link to="/rfq" className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-brand-tan border-b border-brand-tan/30 pb-2 hover:border-brand-tan transition-all">
              {t('home.cta')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  accent,
  title,
  text,
}: {
  accent: AppMarkKey;
  title: string;
  text: string;
  key?: React.Key;
}) {
  const a = APP_ACCENTS[accent];
  const Mark = APP_MARKS[accent];
  return (
    <div className="group relative overflow-hidden p-6 sm:p-8 border editorial-border rounded-[1.25rem] bg-gradient-to-br from-brand-cream/90 via-brand-mist/80 to-brand-sand/40 dark:from-brand-charcoal/70 dark:via-brand-ink/80 dark:to-brand-charcoal/40 backdrop-blur-md space-y-6 flex flex-col items-start">
      <div className={`absolute inset-0 bg-gradient-to-br ${a.wash} opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${a.rail} opacity-70`} />
      <div className={`relative z-10 h-14 w-14 flex items-center justify-center border border-current/15 ${a.mark} bg-white/55 dark:bg-brand-ink/50`}>
        <Mark className="h-7 w-7" />
      </div>
      <div className="relative z-10 space-y-3">
        <h3 className={`text-xl sm:text-2xl font-display tracking-tight text-pretty ${a.num}`}>{title}</h3>
        <p className="text-sm font-sans font-normal leading-relaxed text-body">{text}</p>
      </div>
      <div className={`relative z-10 h-px w-12 ${a.rail} mt-auto`} />
    </div>
  );
}
