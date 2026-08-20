import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { TechnicalTerm } from '../components/TechnicalTerm';
import { APP_MARKS, type AppMarkKey } from '../components/AppMarks';
import { PageShell, PageHeader, AccentPanel, PageCta } from '../components/page/PageShell';

const CAP_KEYS: { key: string; accent: AppMarkKey; id: string }[] = [
  { key: 'cvd', accent: 'technical', id: 'cap-cvd' },
  { key: 'tooling', accent: 'tooling', id: 'cap-tooling' },
  { key: 'thermal', accent: 'cooling', id: 'cap-thermal' },
  { key: 'custom', accent: 'semiconductors', id: 'cap-custom' },
];

export function Capabilities() {
  const { t } = useTranslation();

  const caps = CAP_KEYS.map((item, idx) => {
    const items = t(`capabilities.${item.key}.items`, { returnObjects: true });
    const tags = Array.isArray(items) ? (items as string[]) : [];
    return {
      ...item,
      title: t(`capabilities.${item.key}.title`),
      text: t(`capabilities.${item.key}.text`),
      tags,
      Mark: APP_MARKS[item.accent],
      index: String(idx + 1).padStart(2, '0'),
    };
  });

  return (
    <PageShell
      seo={
        <SEO
          title={t('nav.capabilities')}
          description="CVD materials growth and technical capabilities for cutting tools, thermal management, semiconductors, and research."
          keywords="cvd materials growth, cutting tool materials, data center thermal management, semiconductor cvd materials"
        />
      }
    >
      <PageHeader
        label={t('capabilities.excellence')}
        title={t('capabilities.titlePart1')}
        titleAccent={<TechnicalTerm term="Capabilities">{t('capabilities.titlePart2')}</TechnicalTerm>}
        intro={t('capabilities.intro')}
        chips={caps.map((c) => ({ href: `#${c.id}`, label: c.title, accentKey: c.accent }))}
      />

      <div className="space-y-6 sm:space-y-7">
        {caps.map((cap) => (
          <AccentPanel
            key={cap.id}
            id={cap.id}
            index={cap.index}
            title={cap.title}
            accentKey={cap.accent}
            Mark={cap.Mark}
            tags={cap.tags}
          >
            <p>{cap.text}</p>
          </AccentPanel>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] border editorial-border bg-gradient-to-br from-brand-cream/90 via-brand-mist/80 to-brand-sand/40 dark:from-brand-charcoal/70 dark:via-brand-ink/80 dark:to-brand-charcoal/40 backdrop-blur-md surface-shadow p-6 sm:p-10 md:p-12"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4A6754]/12 via-transparent to-transparent dark:from-[#9BB5A4]/14 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4A6754] dark:bg-[#9BB5A4] opacity-70" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display tracking-tight text-[#4A6754] dark:text-[#9BB5A4]">
              {t('capabilities.qualityAssurance')}
            </h2>
            <p className="font-sans text-base sm:text-lg font-normal leading-relaxed text-body max-w-2xl">
              {t('capabilities.qaDetail')}
            </p>
            <p className="font-sans text-sm text-body/80 leading-relaxed max-w-xl">
              {t('capabilities.analysis')} {t('capabilities.traceability')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-10">
            <div className="space-y-2">
              <span className="text-4xl sm:text-5xl font-display font-bold text-[#4A6754] dark:text-[#9BB5A4]">CVD</span>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-body/60">{t('capabilities.precision')}</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl sm:text-5xl font-display font-bold text-[#8A6540] dark:text-[#C4A078]">ISO</span>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-body/60">9001 {t('capabilities.compliance')}</p>
            </div>
          </div>
        </div>
      </motion.section>

      <PageCta />
    </PageShell>
  );
}
