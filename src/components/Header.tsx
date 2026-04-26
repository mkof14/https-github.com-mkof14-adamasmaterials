import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

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
    setLangOpen(false);
  };

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.investors'), path: '/investors' },
    { name: t('nav.materials'), path: '/materials' },
    { name: t('nav.capabilities'), path: '/capabilities' },
    { name: t('nav.applications'), path: '/applications' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b editorial-border bg-brand-cream/80 dark:bg-brand-ink/80 backdrop-blur-xl transition-all duration-500">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group" aria-label="Adamas Materials Home">
            <img 
              src="/Logo.png" 
              alt="Adamas Materials" 
              className="h-28 w-auto object-contain transition-transform group-hover:scale-105 translate-y-1" 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-12">
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

          <div className="hidden lg:flex items-center gap-6">
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
                    className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden py-1"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => changeLanguage(l.code, l.dir)}
                        role="menuitem"
                        aria-label={`Switch to ${l.label}`}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors",
                          i18n.language === l.code ? "text-brand-gold bg-slate-50 dark:bg-slate-800" : "text-slate-700 dark:text-slate-300"
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
          <div className="flex lg:hidden items-center gap-4">
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
            className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-brand-cream dark:bg-brand-ink overflow-hidden"
          >
            <div className="container mx-auto px-6 py-12 flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  aria-label={item.name}
                  className="font-display italic text-3xl hover:text-brand-tan dark:text-brand-cream transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-brand-tan/20 px-12" />
              <div className="flex flex-col gap-4 font-sans text-[10px] uppercase tracking-widest opacity-60">
                <Link to="/privacy" onClick={() => setIsOpen(false)}>{t('footer.privacy')}</Link>
                <Link to="/terms" onClick={() => setIsOpen(false)}>{t('footer.terms')}</Link>
                <Link to="/compliance" onClick={() => setIsOpen(false)}>{t('nav.compliance')}</Link>
              </div>
              <div className="h-px bg-brand-tan/20 px-12" />
              <div className="grid grid-cols-3 gap-4 px-6" role="menu">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { changeLanguage(l.code, l.dir); setIsOpen(false); }}
                    role="menuitem"
                    aria-label={`Switch language to ${l.code.toUpperCase()}`}
                    className={cn(
                      "flex flex-col items-center gap-2 p-3 rounded-2xl transition-all",
                      i18n.language === l.code ? "bg-brand-tan/10 text-brand-tan" : "hover:bg-brand-tan/5"
                    )}
                  >
                    <span className="text-2xl">{l.flag}</span>
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
