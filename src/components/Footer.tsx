import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const languages = [
  { code: 'en', flag: '🇺🇸' },
  { code: 'ru', flag: '🇷🇺' },
  { code: 'uk', flag: '🇺🇦' },
  { code: 'es', flag: '🇪🇸' },
  { code: 'fr', flag: '🇫🇷' },
  { code: 'de', flag: '🇩🇪' },
  { code: 'ja', flag: '🇯🇵' },
  { code: 'he', flag: '🇮🇱' },
  { code: 'ar', flag: '🇦🇪' },
];

export function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="mt-auto border-t editorial-border bg-white dark:bg-brand-ink px-6 lg:px-12 py-12 flex flex-col space-y-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-1/4 space-y-6">
          <Link to="/" aria-label="Adamas Materials" className="text-2xl font-display font-bold uppercase tracking-tighter dark:text-brand-cream">
            Adamas<span className="font-light opacity-60">Materials</span>
          </Link>
          <p className="font-sans text-[10px] leading-relaxed opacity-60 uppercase tracking-widest dark:text-brand-cream">
            Uncompromising quality in synthetic lattice engineering. Building the foundation of the next industrial era through precision materials science.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 lg:gap-24 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold dark:text-brand-cream">
          <div className="flex flex-col space-y-3">
            <span className="opacity-40">Core</span>
            <Link to="/" className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('nav.home')}</Link>
            <Link to="/about" className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('nav.about')}</Link>
            <Link to="/investors" className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('nav.investors')}</Link>
            <Link to="/capabilities" className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('nav.capabilities')}</Link>
            <Link to="/quality" className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('nav.quality')}</Link>
            <Link to="/glossary" className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('nav.glossary')}</Link>
            <Link to="/applications" className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('nav.applications')}</Link>
            <Link to="/rfq" className="hover:opacity-50 transition-opacity whitespace-nowrap">RFQ</Link>
          </div>
          <div className="flex flex-col space-y-3">
            <span className="opacity-40">Legal</span>
            <Link to="/privacy" aria-label={t('footer.privacy')} className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('footer.privacy')}</Link>
            <Link to="/terms" aria-label={t('footer.terms')} className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('footer.terms')}</Link>
            <Link to="/compliance" aria-label={t('nav.compliance')} className="hover:opacity-50 transition-opacity whitespace-nowrap">{t('nav.compliance')}</Link>
          </div>
        </div>

        <div className="w-full lg:w-1/3 space-y-6">
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-40 dark:text-brand-cream text-right lg:text-left">Operations & Multilingual Support</p>
          <div className="grid grid-cols-9 gap-1" role="menu">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  i18n.changeLanguage(l.code);
                  document.documentElement.dir = (l.code === 'he' || l.code === 'ar') ? 'rtl' : 'ltr';
                }}
                role="menuitem"
                aria-label={`Switch language to ${l.code.toUpperCase()}`}
                className={cn(
                  "text-center border editorial-border py-2 text-[10px] font-sans font-bold hover:bg-brand-ink hover:text-white dark:hover:bg-brand-cream dark:hover:text-brand-ink transition-all",
                  i18n.language === l.code ? "bg-brand-ink text-white dark:bg-brand-cream dark:text-brand-ink" : "opacity-40"
                )}
              >
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t editorial-border pt-8 opacity-40 font-sans text-[9px] uppercase tracking-[0.4em] dark:text-brand-cream gap-4">
        <span>&copy; 2026 Adamas Materials. All Rights Reserved.</span>
        <span className="text-center md:text-right">HQ: Charlotte, NC USA &middot; New York, USA</span>
      </div>
    </footer>
  );
}
