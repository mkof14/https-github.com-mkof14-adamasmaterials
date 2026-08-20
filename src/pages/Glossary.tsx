import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { GLOSSARY_TERMS } from '../data/glossary';
import { APP_ACCENTS, type AppMarkKey } from '../components/AppMarks';
import { PageShell, PageHeader, PageCta } from '../components/page/PageShell';

const CATEGORY_ACCENT: Record<string, AppMarkKey> = {
  Synthesis: 'technical',
  Applications: 'cooling',
  'Materials Science': 'tooling',
  Metrology: 'semiconductors',
  Characterization: 'semiconductors',
  General: 'universities',
};

export function Glossary() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');

  const filteredTerms = GLOSSARY_TERMS.filter(
    (item) =>
      item.term.toLowerCase().includes(search.toLowerCase()) ||
      item.definition.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageShell
      seo={
        <SEO
          title="Technical Glossary"
          description="Short glossary of CVD materials and related technical terms used by Adamas Materials."
          keywords="cvd glossary, chemical vapor deposition, heat spreader, cutting insert, raman spectroscopy"
        />
      }
    >
      <PageHeader
        label={t('glossaryPage.label')}
        title={t('glossaryPage.title')}
        titleAccent={t('glossaryPage.accent')}
        intro={t('glossaryPage.intro')}
      />

      <div className="relative">
        <input
          type="text"
          placeholder={t('glossaryPage.search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/50 dark:bg-white/5 border editorial-border rounded-[1rem] py-4 sm:py-5 pl-5 sm:pl-6 pr-5 font-sans text-base sm:text-lg focus:outline-none focus:border-[#8A6540]/50 dark:focus:border-[#C4A078]/50 transition-colors"
        />
      </div>

      <div className="space-y-4 sm:space-y-5">
        <AnimatePresence mode="popLayout">
          {filteredTerms.map((item) => {
            const accentKey = CATEGORY_ACCENT[item.category] ?? 'technical';
            const accent = APP_ACCENTS[accentKey];
            return (
              <motion.article
                key={item.term}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-[1.25rem] border editorial-border bg-gradient-to-br from-brand-cream/90 via-brand-mist/80 to-brand-sand/40 dark:from-brand-charcoal/70 dark:via-brand-ink/80 dark:to-brand-charcoal/40 backdrop-blur-md surface-shadow p-5 sm:p-8"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${accent.wash} opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${accent.rail} opacity-70`} />
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-[minmax(0,12rem)_1fr] gap-4 md:gap-10">
                  <div className="space-y-3">
                    <span className={`font-sans text-[9px] uppercase tracking-[0.2em] font-bold px-2.5 py-1 border border-current/20 ${accent.num} bg-white/35 dark:bg-white/5 inline-block`}>
                      {item.category}
                    </span>
                    <h2 className={`text-2xl sm:text-3xl font-display font-bold tracking-tight ${accent.num}`}>
                      {item.term}
                    </h2>
                  </div>
                  <p className="font-sans text-base sm:text-lg font-normal leading-relaxed text-body md:border-l editorial-border md:pl-10">
                    {item.definition}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>

        {filteredTerms.length === 0 && (
          <p className="font-sans text-sm uppercase tracking-widest text-body/50 py-16 text-center">
            {t('glossaryPage.empty')}
          </p>
        )}
      </div>

      <PageCta />
    </PageShell>
  );
}
