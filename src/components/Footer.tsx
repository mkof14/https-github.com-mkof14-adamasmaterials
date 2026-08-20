import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronUp, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

const logoLight = '/logo.png?v=12';
const logoDark = '/logo-dark.png?v=12';

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
  const { theme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
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
    <footer className="mt-auto border-t editorial-border bg-brand-mist dark:bg-brand-ink px-6 lg:px-12 py-12 flex flex-col space-y-10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-1/4 space-y-8">
          <Link to="/" aria-label="Adamas Materials Home" className="block max-w-[280px]">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Adamas Materials"
              className="w-full h-auto object-contain"
            />
          </Link>
          <p className="font-sans text-[10px] leading-relaxed text-body uppercase tracking-widest">
            {t('footer.blurb')}
          </p>
          <div className="pt-4">
            <Link 
              to="/rfq" 
              className="inline-block font-sans text-[10px] uppercase tracking-widest font-extrabold text-brand-ink dark:text-brand-cream border-b border-brand-tan/40 hover:border-brand-tan hover:text-brand-tan transition-colors pb-1"
            >
              {t('nav.rfq')}
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-12 lg:gap-24 font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-brand-ink dark:text-brand-cream">
          <div className="flex flex-col space-y-3">
            <span className="text-label">Core</span>
            <Link to="/" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('nav.home')}</Link>
            <Link to="/about" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('nav.about')}</Link>
            <Link to="/investors" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('nav.investors')}</Link>
            <Link to="/capabilities" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('nav.capabilities')}</Link>
            <Link to="/quality" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('nav.quality')}</Link>
            <Link to="/glossary" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('nav.glossary')}</Link>
            <Link to="/applications" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('nav.applications')}</Link>
            <Link to="/contact" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">Contact</Link>
            <Link to="/rfq" className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">RFQ</Link>
          </div>
          
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => setIsLegalOpen(!isLegalOpen)}
              className="flex items-center gap-2 text-label hover:text-brand-tan transition-colors text-left uppercase tracking-[0.2em]"
            >
              Legal
              <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isLegalOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {isLegalOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden flex flex-col space-y-3"
                >
                  <Link to="/privacy" aria-label={t('footer.privacy')} className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('footer.privacy')}</Link>
                  <Link to="/terms" aria-label={t('footer.terms')} className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('footer.terms')}</Link>
                  <Link to="/compliance" aria-label={t('nav.compliance')} className="opacity-90 hover:text-brand-tan transition-colors whitespace-nowrap">{t('nav.compliance')}</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="relative shrink-0" ref={langRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            aria-label="Language"
            className="inline-flex items-center gap-1.5 border editorial-border px-2.5 py-1.5 font-sans text-[9px] uppercase tracking-widest font-bold hover:bg-brand-cream dark:hover:bg-slate-900 transition-colors"
          >
            <Globe className="w-3 h-3 text-brand-tan" />
            <span>{currentLang.code.toUpperCase()}</span>
            <ChevronUp className={cn("w-3 h-3 transition-transform duration-300", isLangOpen ? "rotate-180" : "rotate-0")} />
          </button>

          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute bottom-full right-0 mb-1.5 min-w-[9.5rem] bg-brand-cream dark:bg-brand-ink border editorial-border shadow-xl z-50 overflow-hidden"
              >
                <div className="flex flex-col py-0.5">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        i18n.changeLanguage(l.code);
                        document.documentElement.dir = (l.code === 'he' || l.code === 'ar') ? 'rtl' : 'ltr';
                        setIsLangOpen(false);
                      }}
                      className={cn(
                        "text-left px-2.5 py-1.5 text-[9px] font-sans font-bold hover:bg-brand-tan/10 transition-colors flex items-center gap-2",
                        i18n.language === l.code ? "text-brand-tan" : "text-secondary"
                      )}
                    >
                      <span className="text-label w-5">{l.code.toUpperCase()}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center border-t editorial-border pt-8 text-secondary font-sans text-[9px] uppercase tracking-[0.4em] gap-4">
        <span>&copy; 2026 Adamas Materials. All Rights Reserved.</span>
        <span className="text-center md:text-right">HQ: Charlotte, NC USA &middot; New York, USA</span>
      </div>
    </footer>
  );
}
