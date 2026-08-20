import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const logoLight = '/logo.png?v=12';
const logoDark = '/logo-dark.png?v=12';

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'he', label: 'עברית', flag: '🇮🇱', dir: 'rtl' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪', dir: 'rtl' },
];

export function Header() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  const changeLanguage = (code: string, dir: string = 'ltr') => {
    i18n.changeLanguage(code);
    document.documentElement.dir = dir;
    document.documentElement.lang = code;
    setLangOpen(false);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.materials'), path: '/materials' },
    { name: t('nav.capabilities'), path: '/capabilities' },
    { name: t('nav.applications'), path: '/applications' },
    { name: t('nav.investors'), path: '/investors' },
  ];

  const mobileExtra = [
    { name: t('nav.quality'), path: '/quality' },
    { name: t('nav.glossary'), path: '/glossary' },
    { name: t('footer.downloads'), path: '/downloads' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-tan/25 dark:border-brand-border-dark bg-brand-mist/95 dark:bg-brand-ink/80 backdrop-blur-xl transition-all duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">
          <Link to="/" className="flex items-center shrink-0 min-w-0 max-w-[58%] sm:max-w-none" aria-label="Adamas Materials Home">
            <img
              src={theme === 'dark' ? logoDark : logoLight}
              alt="Adamas Materials"
              className="h-10 sm:h-12 md:h-14 w-auto max-w-full object-contain object-left"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8 2xl:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-label={item.name}
                className={cn(
                  "nav-link text-[10px]",
                  location.pathname === item.path 
                    ? "text-brand-tan" 
                    : "text-brand-ink dark:text-brand-cream"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden xl:flex items-center gap-6">
            {/* Lang Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                onKeyDown={(e) => { if (e.key === 'Escape') setLangOpen(false); }}
                aria-label="Select Language"
                aria-haspopup="true"
                aria-expanded={langOpen}
                className="flex items-center gap-3 px-4 py-2 border rounded-full editorial-border text-[11px] font-sans font-semibold tracking-widest hover:bg-brand-tan hover:text-white hover:border-brand-tan transition-all duration-300"
              >
                <span>{languages.find(l => l.code === i18n.language)?.flag || '🇺🇸'}</span>
                <span className="opacity-60">{i18n.language.toUpperCase()}</span>
                <ChevronDown className={cn("h-3 w-3 transition-transform", langOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    role="menu"
                    className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 dark:border-slate-800 bg-brand-cream dark:bg-slate-900 shadow-xl overflow-hidden py-1"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => changeLanguage(l.code, l.dir)}
                        role="menuitem"
                        aria-label={`Switch to ${l.label}`}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-brand-sand/60 dark:hover:bg-slate-800 transition-colors",
                          i18n.language === l.code ? "text-brand-gold bg-brand-sand/60 dark:bg-slate-800" : "text-slate-700 dark:text-slate-300"
                        )}
                      >
                        <span className="w-6">{l.flag}</span>
                        <span className="flex-1 text-left">{l.label}</span>
                        <span className="text-[10px] opacity-40 font-mono">{l.code.toUpperCase()}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex xl:hidden items-center gap-1 sm:gap-2 shrink-0">
            <button 
              onClick={toggleTheme} 
              className="p-2"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-brand-cream dark:bg-brand-ink overflow-hidden max-h-[calc(100dvh-4rem)] overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8 sm:py-10 flex flex-col gap-5 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  aria-label={item.name}
                  className="font-display italic text-2xl sm:text-3xl hover:text-brand-tan dark:text-brand-cream transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              {mobileExtra.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="font-display italic text-xl sm:text-2xl text-body hover:text-brand-tan dark:text-brand-cream transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/rfq"
                onClick={() => setIsOpen(false)}
                className="font-sans text-[11px] uppercase tracking-[0.22em] font-bold text-brand-tan border-b border-brand-tan/40 pb-1 mx-auto"
              >
                {t('home.cta')}
              </Link>
              <div className="h-px bg-brand-tan/20" />
              <div className="flex flex-col gap-3 font-sans text-[10px] uppercase tracking-widest opacity-60">
                <Link to="/privacy" onClick={() => setIsOpen(false)}>{t('footer.privacy')}</Link>
                <Link to="/terms" onClick={() => setIsOpen(false)}>{t('footer.terms')}</Link>
                <Link to="/compliance" onClick={() => setIsOpen(false)}>{t('nav.compliance')}</Link>
              </div>
              <div className="h-px bg-brand-tan/20" />
              <div className="grid grid-cols-3 gap-2 sm:gap-3" role="menu">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { changeLanguage(l.code, l.dir); setIsOpen(false); }}
                    role="menuitem"
                    aria-label={`Switch language to ${l.code.toUpperCase()}`}
                    className={cn(
                      "flex flex-col items-center gap-1.5 p-2.5 sm:p-3 rounded-xl transition-all",
                      i18n.language === l.code ? "bg-brand-tan/10 text-brand-tan" : "hover:bg-brand-tan/5"
                    )}
                  >
                    <span className="text-xl sm:text-2xl">{l.flag}</span>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-tighter">{l.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
