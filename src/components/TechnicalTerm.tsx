import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GLOSSARY_TERMS } from '../data/glossary';

interface TechnicalTermProps {
  term: string;
  children: React.ReactNode;
  key?: React.Key;
}

export function TechnicalTerm({ term, children }: TechnicalTermProps) {
  const [isHovered, setIsHovered] = useState(false);
  const definition = GLOSSARY_TERMS.find(
    (item) => item.term.toLowerCase() === term.toLowerCase()
  )?.definition;

  if (!definition) return <>{children}</>;

  return (
    <span 
      className="relative inline-block group cursor-help"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="border-b border-brand-tan/30 hover:border-brand-tan transition-colors border-dashed">
        {children}
      </span>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 bg-white dark:bg-slate-900 border border-brand-tan/20 rounded-xl shadow-xl shadow-black/10 backdrop-blur-sm"
          >
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-brand-tan block">
                Technical Definition
              </span>
              <p className="font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {definition}
              </p>
            </div>
            {/* Arrow */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px]">
              <div className="border-8 border-transparent border-t-white dark:border-t-slate-900 drop-shadow-sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
