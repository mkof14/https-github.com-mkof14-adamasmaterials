import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import type { AppMarkKey } from '../AppMarks';
import { APP_ACCENTS } from '../AppMarks';

export function PageShell({
  children,
  seo,
}: {
  children: React.ReactNode;
  seo?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-brand-mist dark:bg-brand-ink">
      <div className="absolute inset-0 crystalline-bg pointer-events-none" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[34rem] w-[34rem] rounded-full blur-[100px] bg-[#8A6540]/18 dark:bg-[#C4A078]/12"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute top-[40%] left-[-12%] h-[28rem] w-[28rem] rounded-full blur-[110px] bg-[#4F737C]/16 dark:bg-[#8EB4BC]/10"
        animate={{ opacity: [0.25, 0.45, 0.25], x: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[-8%] right-[10%] h-[22rem] w-[22rem] rounded-full blur-[90px] bg-[#4A6754]/14 dark:bg-[#9BB5A4]/10"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 py-16 sm:py-24">
        {seo}
        <div className="max-w-5xl mx-auto space-y-14 sm:space-y-20">{children}</div>
      </div>
    </div>
  );
}

export function PageHeader({
  label,
  title,
  titleAccent,
  intro,
  chips,
}: {
  label: string;
  title: React.ReactNode;
  titleAccent?: React.ReactNode;
  intro?: React.ReactNode;
  chips?: { href: string; label: string; accentKey?: AppMarkKey }[];
}) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-3xl space-y-6 sm:space-y-8"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-brand-tan" />
        <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{label}</span>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display leading-[1.05] italic text-pretty">
        {title}
        {titleAccent != null && (
          <>
            <br />
            <span className="not-italic font-bold text-[#5A4E42] dark:text-[#C4A078]">{titleAccent}</span>
          </>
        )}
      </h1>
      {intro && (
        <p className="text-lg sm:text-xl font-sans font-normal leading-relaxed text-body max-w-2xl border-l-2 border-[#8A6540]/50 dark:border-[#C4A078]/60 pl-5 sm:pl-6">
          {intro}
        </p>
      )}
      {chips && chips.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-2">
          {chips.map((chip) => {
            const accent = chip.accentKey ? APP_ACCENTS[chip.accentKey] : null;
            return (
              <a
                key={chip.href}
                href={chip.href}
                className={`font-sans text-[9px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 border border-current/20 bg-white/40 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10 transition-colors ${accent ? accent.num : 'text-brand-tan'}`}
              >
                {chip.label}
              </a>
            );
          })}
        </div>
      )}
    </motion.header>
  );
}

type AccentPanelProps = {
  id?: string;
  index?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  accentKey: AppMarkKey;
  Mark: React.ComponentType<{ className?: string }>;
  tags?: string[];
  /** Allowed for list rendering under React 19 JSX typing. */
  key?: React.Key;
};

export function AccentPanel({
  id,
  index,
  title,
  children,
  accentKey,
  Mark,
  tags,
}: AccentPanelProps) {
  const accent = APP_ACCENTS[accentKey];

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group relative scroll-mt-28 overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] border editorial-border bg-gradient-to-br from-brand-cream/90 via-brand-mist/80 to-brand-sand/40 dark:from-brand-charcoal/70 dark:via-brand-ink/80 dark:to-brand-charcoal/40 backdrop-blur-md surface-shadow"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${accent.wash} opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${accent.rail} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[7.5rem_1fr] gap-6 sm:gap-8 p-6 sm:p-8 md:p-10">
        <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-5">
          {index && (
            <span className={`font-mono text-[11px] tracking-[0.22em] font-bold tabular-nums ${accent.num}`}>{index}</span>
          )}
          <motion.div
            whileHover={{ rotate: [-1, 1, 0], scale: 1.04 }}
            transition={{ duration: 0.45 }}
            className={`relative h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] flex items-center justify-center border border-current/15 ${accent.mark} bg-white/55 dark:bg-brand-ink/50`}
          >
            <div className={`absolute inset-0 ${accent.glow} opacity-60`} />
            <Mark className="relative h-9 w-9 sm:h-10 sm:w-10" />
            <span className="absolute top-1 left-1 h-2 w-2 border-t border-l border-current/50" />
            <span className="absolute bottom-1 right-1 h-2 w-2 border-b border-r border-current/50" />
          </motion.div>
        </div>

        <div className="space-y-4 sm:space-y-5 min-w-0">
          <h2 className={`text-2xl sm:text-3xl md:text-[2.05rem] font-display tracking-tight text-pretty ${accent.num}`}>
            {title}
          </h2>
          <div className="font-sans text-[15px] sm:text-base md:text-lg font-normal leading-relaxed text-body max-w-3xl space-y-4">
            {children}
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`font-sans text-[9px] uppercase tracking-[0.16em] font-bold px-3 py-1.5 border border-current/20 ${accent.num} bg-white/35 dark:bg-white/5`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <motion.div
            className={`h-px ${accent.rail}`}
            initial={{ width: 40, opacity: 0.45 }}
            whileInView={{ width: 72, opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          />
        </div>
      </div>
    </motion.article>
  );
}

export function PageCta({ note }: { note?: string }) {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 border-t editorial-border pt-10"
    >
      <p className="font-sans text-sm text-body max-w-md leading-relaxed">{note || t('positioning.rfqText')}</p>
      <Link
        to="/rfq"
        className="font-sans text-[11px] uppercase tracking-[0.22em] font-bold text-[#8A6540] dark:text-[#C4A078] border-b border-current/40 hover:border-current transition-colors pb-1 w-fit"
      >
        {t('home.cta')}
      </Link>
    </motion.div>
  );
}
