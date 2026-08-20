import React from 'react';

type MarkProps = {
  className?: string;
};

/** Custom geometric marks — Adamas industrial geometry, not stock UI icons. */

export function MarkTooling({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      {/* Cutting insert / edge blank */}
      <path
        d="M12 44 L28 12 L40 12 L52 44 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M20 40 L32 18 L44 40" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <path d="M16 44 H48" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <circle cx="32" cy="30" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function MarkCooling({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      {/* Heat spreader plate + conduction paths */}
      <rect x="10" y="18" width="44" height="28" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="18" y="26" width="28" height="12" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
      <path d="M24 14 V18 M32 12 V18 M40 14 V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 46 V50 M32 46 V52 M40 46 V50" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.65" />
      <path d="M22 32 H42" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function MarkSemiconductors({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      {/* Crystal facet / wafer hex */}
      <path
        d="M32 8 L52 20 V44 L32 56 L12 44 V20 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M32 8 V56 M12 20 L52 44 M52 20 L12 44" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <circle cx="32" cy="32" r="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="32" cy="32" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function MarkUniversities({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      {/* Lattice / research planes */}
      <path d="M14 42 L32 12 L50 42 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M20 42 L32 22 L44 42" stroke="currentColor" strokeWidth="1.1" opacity="0.55" />
      <path d="M10 48 H54" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 48 V54 M32 48 V56 M48 48 V54" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
    </svg>
  );
}

export function MarkTechnical({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      {/* Spec frame / precision bracket */}
      <path
        d="M14 14 H36 L50 28 V50 H28 L14 36 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 14 V24 M14 14 H24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <path d="M50 50 V40 M50 50 H40" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <path d="M28 28 H40 V40" stroke="currentColor" strokeWidth="1.2" opacity="0.55" />
      <circle cx="28" cy="28" r="2" fill="currentColor" />
    </svg>
  );
}

export const APP_MARKS = {
  tooling: MarkTooling,
  cooling: MarkCooling,
  semiconductors: MarkSemiconductors,
  universities: MarkUniversities,
  technical: MarkTechnical,
} as const;

export type AppMarkKey = keyof typeof APP_MARKS;

/** Per-application accent tokens (light / dark friendly). */
export const APP_ACCENTS: Record<
  AppMarkKey,
  { rail: string; wash: string; mark: string; glow: string; num: string }
> = {
  tooling: {
    rail: 'bg-[#8A6540] dark:bg-[#C4A078]',
    wash: 'from-[#8A6540]/12 via-transparent to-transparent dark:from-[#C4A078]/18',
    mark: 'text-[#8A6540] dark:text-[#C4A078]',
    glow: 'bg-[#8A6540]/20 dark:bg-[#C4A078]/15',
    num: 'text-[#8A6540] dark:text-[#C4A078]',
  },
  cooling: {
    rail: 'bg-[#4F737C] dark:bg-[#8EB4BC]',
    wash: 'from-[#4F737C]/14 via-transparent to-transparent dark:from-[#8EB4BC]/16',
    mark: 'text-[#4F737C] dark:text-[#8EB4BC]',
    glow: 'bg-[#4F737C]/18 dark:bg-[#8EB4BC]/14',
    num: 'text-[#4F737C] dark:text-[#8EB4BC]',
  },
  semiconductors: {
    rail: 'bg-[#3E5568] dark:bg-[#9BB0C2]',
    wash: 'from-[#3E5568]/12 via-transparent to-transparent dark:from-[#9BB0C2]/14',
    mark: 'text-[#3E5568] dark:text-[#9BB0C2]',
    glow: 'bg-[#3E5568]/16 dark:bg-[#9BB0C2]/12',
    num: 'text-[#3E5568] dark:text-[#9BB0C2]',
  },
  universities: {
    rail: 'bg-[#4A6754] dark:bg-[#9BB5A4]',
    wash: 'from-[#4A6754]/12 via-transparent to-transparent dark:from-[#9BB5A4]/14',
    mark: 'text-[#4A6754] dark:text-[#9BB5A4]',
    glow: 'bg-[#4A6754]/16 dark:bg-[#9BB5A4]/12',
    num: 'text-[#4A6754] dark:text-[#9BB5A4]',
  },
  technical: {
    rail: 'bg-[#7A6B3E] dark:bg-[#D0C08A]',
    wash: 'from-[#7A6B3E]/12 via-transparent to-transparent dark:from-[#D0C08A]/16',
    mark: 'text-[#7A6B3E] dark:text-[#D0C08A]',
    glow: 'bg-[#7A6B3E]/18 dark:bg-[#D0C08A]/14',
    num: 'text-[#7A6B3E] dark:text-[#D0C08A]',
  },
};
