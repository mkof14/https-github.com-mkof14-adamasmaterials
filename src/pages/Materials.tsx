import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { materials } from '../data/materials';
import { APP_MARKS, APP_ACCENTS, type AppMarkKey } from '../components/AppMarks';
import { PageShell, PageHeader, PageCta } from '../components/page/PageShell';

const MATERIAL_ACCENTS: Record<string, AppMarkKey> = {
  'cvd-tooling': 'tooling',
  'cvd-thermal': 'cooling',
  'cvd-semiconductor': 'semiconductors',
  'cvd-research': 'universities',
};

const MATERIAL_SHEETS: Record<string, string> = {
  'cvd-tooling': '/downloads/cvd-cutting-tools.txt',
  'cvd-thermal': '/downloads/cvd-thermal-management.txt',
  'cvd-semiconductor': '/downloads/cvd-semiconductors.txt',
  'cvd-research': '/downloads/cvd-research.txt',
};

export function Materials() {
  const { t } = useTranslation();

  const items = materials.map((material, idx) => {
    const accentKey = MATERIAL_ACCENTS[material.id] ?? 'technical';
    return {
      ...material,
      accentKey,
      Mark: APP_MARKS[accentKey],
      accent: APP_ACCENTS[accentKey],
      index: String(idx + 1).padStart(2, '0'),
    };
  });

  return (
    <PageShell
      seo={
        <SEO
          title={t('nav.materials')}
          description="CVD materials for cutting tools, data center cooling, semiconductors, and research."
          keywords="cvd materials, cutting tool materials, thermal materials, semiconductor cvd, research materials"
        />
      }
    >
      <PageHeader
        label={t('materialsPage.label')}
        title={t('materialsPage.title')}
        titleAccent={t('materialsPage.accent')}
        intro={t('materialsPage.intro')}
        chips={items.map((m) => ({
          href: `#mat-${m.id}`,
          label: m.category,
          accentKey: m.accentKey,
        }))}
      />

      <div className="space-y-6 sm:space-y-7">
        {items.map((material) => (
          <motion.article
            key={material.id}
            id={`mat-${material.id}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="group relative scroll-mt-28 overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] border editorial-border bg-gradient-to-br from-brand-cream/90 via-brand-mist/80 to-brand-sand/40 dark:from-brand-charcoal/70 dark:via-brand-ink/80 dark:to-brand-charcoal/40 backdrop-blur-md surface-shadow"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${material.accent.wash} opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${material.accent.rail} opacity-70 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl ${material.accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[7.5rem_1fr_minmax(0,14rem)] gap-6 sm:gap-8 p-6 sm:p-8 md:p-10">
              <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-5">
                <span className={`font-mono text-[11px] tracking-[0.22em] font-bold tabular-nums ${material.accent.num}`}>
                  {material.index}
                </span>
                <motion.div
                  whileHover={{ rotate: [-1, 1, 0], scale: 1.04 }}
                  transition={{ duration: 0.45 }}
                  className={`relative h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem] flex items-center justify-center border border-current/15 ${material.accent.mark} bg-white/55 dark:bg-brand-ink/50`}
                >
                  <div className={`absolute inset-0 ${material.accent.glow} opacity-60`} />
                  <material.Mark className="relative h-9 w-9 sm:h-10 sm:w-10" />
                  <span className="absolute top-1 left-1 h-2 w-2 border-t border-l border-current/50" />
                  <span className="absolute bottom-1 right-1 h-2 w-2 border-b border-r border-current/50" />
                </motion.div>
              </div>

              <div className="space-y-4 sm:space-y-5 min-w-0">
                <div className="space-y-2">
                  <span className={`font-sans text-[9px] uppercase tracking-[0.2em] font-bold ${material.accent.num}`}>
                    {material.category} {t('materialsPage.grade')}
                  </span>
                  <h2 className={`text-2xl sm:text-3xl md:text-[2.05rem] font-display tracking-tight text-pretty ${material.accent.num}`}>
                    {material.name}
                  </h2>
                </div>
                <p className="font-sans text-[15px] sm:text-base md:text-lg font-normal leading-relaxed text-body max-w-3xl">
                  {material.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {material.applications.map((app) => (
                    <span
                      key={app}
                      className={`font-sans text-[9px] uppercase tracking-[0.16em] font-bold px-3 py-1.5 border border-current/20 ${material.accent.num} bg-white/35 dark:bg-white/5`}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-5 border-t lg:border-t-0 lg:border-l editorial-border pt-5 lg:pt-0 lg:pl-8">
                <h3 className="font-sans text-[10px] uppercase tracking-[0.28em] font-bold text-body/50">{t('materialsPage.specs')}</h3>
                <div className="space-y-4">
                  {material.specifications.map((spec) => (
                    <div key={spec.label} className="space-y-1">
                      <p className="font-sans text-[9px] uppercase tracking-widest font-bold text-body/55">{spec.label}</p>
                      <p className="font-display text-lg sm:text-xl font-bold tracking-tight">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={MATERIAL_SHEETS[material.id] || '/downloads'}
                  download
                  className={`inline-block font-sans text-[10px] uppercase tracking-[0.2em] font-bold border-b border-current/40 hover:border-current transition-colors pb-1 ${material.accent.num}`}
                >
                  {t('materialsPage.dataSheet')}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <PageCta />
    </PageShell>
  );
}
