import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronUp } from 'lucide-react';
import { cn } from '../lib/utils';

const languages = [
  { code: 'en', flag: '🇺🇸', name: 'English' },
  { code: 'ru', flag: '🇷🇺', name: 'Русский' },
  { code: 'uk', flag: '🇺🇦', name: 'Українська' },
  { code: 'es', flag: '🇪🇸', name: 'Español' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'ja', flag: '🇯🇵', name: '日本語' },
  { code: 'he', flag: '🇮🇱', name: 'עברית' },
  { code: 'ar', flag: '🇦🇪', name: 'العربية' },
];

export function Footer() {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <footer className="mt-auto border-t editorial-border bg-white dark:bg-brand-ink px-6 lg:px-12 py-12 flex flex-col space-y-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-1/4 space-y-8">
          <Link to="/" aria-label="Adamas Materials Home" className="block max-w-[460px]">
            <img src="/Logo.png" alt="Adamas Materials" className="w-full h-auto object-contain transition-opacity hover:opacity-80" />
          </Link>
          <p className="font-sans text-[10px] leading-relaxed opacity-60 uppercase tracking-widest dark:text-brand-cream">
            Uncompromising quality in synthetic lattice engineering. Building the foundation of the next industrial era through precision materials science.
          </p>
          <div className="pt-4">
            <Link 
              to="/rfq" 
              className="inline-block bg-brand-tan text-brand-ink px-8 py-3 font-sans text-[10px] uppercase tracking-widest font-extrabold hover:bg-brand-ink hover:text-white transition-all shadow-lg"
            >
              {t('nav.rfq')} / NDA Request
            </Link>
          </div>
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
            <Link to="/contact" className="hover:opacity-50 transition-opacity whitespace-nowrap">Contact</Link>
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
          <p className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-40 dark:text-brand-cream text-right lg:text-left">Quarterly Briefing (Industry Only)</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="COLLEAGUE@CORPORATION.COM" 
              className="flex-1 bg-brand-cream dark:bg-brand-ink border-b editorial-border p-3 font-sans text-[9px] focus:outline-none focus:border-brand-tan uppercase tracking-widest placeholder:opacity-30"
            />
            <button className="border editorial-border px-6 py-2 font-sans text-[9px] hover:bg-brand-ink hover:text-brand-cream dark:hover:bg-brand-cream dark:hover:text-brand-ink transition-all uppercase tracking-widest font-bold">
              Join
            </button>
          </div>
          <p className="font-sans text-[8px] uppercase tracking-[0.2em] opacity-30 italic">No marketing spam. Only scientific and quarterly financial updates.</p>

          <div className="pt-6 relative" ref={langRef}>
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] opacity-40 dark:text-brand-cream text-right lg:text-left mb-3">Multilingual Support</p>
            
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="w-full flex items-center justify-between border editorial-border p-3 font-sans text-[10px] uppercase tracking-widest font-bold group hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-3.5 h-3.5 text-brand-tan opacity-60" />
                <span>{currentLang.name} ({currentLang.code.toUpperCase()})</span>
              </div>
              <ChevronUp className={cn("w-3.5 h-3.5 transition-transform duration-300", isLangOpen ? "rotate-180" : "rotate-0")} />
            </button>

            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-brand-ink border editorial-border shadow-2xl z-50 overflow-hidden"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 p-1">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          i18n.changeLanguage(l.code);
                          document.documentElement.dir = (l.code === 'he' || l.code === 'ar') ? 'rtl' : 'ltr';
                          setIsLangOpen(false);
                        }}
                        className={cn(
                          "text-left px-4 py-3 text-[10px] font-sans font-bold hover:bg-brand-tan/10 transition-colors flex items-center gap-2",
                          i18n.language === l.code ? "text-brand-tan" : "opacity-60"
                        )}
                      >
                        <span className="opacity-40">{l.code.toUpperCase()}</span>
                        <span>{l.name}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
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
