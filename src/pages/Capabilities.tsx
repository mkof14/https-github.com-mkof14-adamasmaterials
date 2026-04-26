import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { Microscope, Database, Globe, Ruler } from 'lucide-react';
import { SEO } from '../components/SEO';
import { TechnicalTerm } from '../components/TechnicalTerm';

export function Capabilities() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title={t('nav.capabilities')} 
        description="Explore Adamas Materials' advanced capabilities in HPHT synthesis, CVD diamond growth, nano-fabrication, and computational physics for next-generation materials." 
        keywords="hpht diamond synthesis, cvd diamond growth, nano-fabrication capabilities, computational material physics, lattice precision, mineral engineering"
      />
      <div className="max-w-6xl space-y-32">
        <div className="max-w-3xl space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">{t('capabilities.excellence')}</span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] italic truncate sm:overflow-visible">
            {t('capabilities.titlePart1')}<br/>
            <span className="not-italic font-bold">
              <TechnicalTerm term="Capabilities">{t('capabilities.titlePart2')}</TechnicalTerm>
            </span>
          </h1>
          <p className="text-2xl font-sans font-light leading-relaxed opacity-80 italic dark:text-brand-cream/90">
            <Trans i18nKey="capabilities.intro">
              Our facilities are equipped with Proprietary <TechnicalTerm term="High-Pressure High-Temperature">High-Pressure High-Temperature (HPHT)</TechnicalTerm> systems, capable of simulating conditions at the Earth's core.
            </Trans>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-brand-border dark:bg-brand-border-dark border editorial-border overflow-hidden rounded-[4rem] shadow-2xl">
          <CapabilityBlock 
            icon={<Microscope className="w-8 h-8"/>}
            title={t('capabilities.hpht.title')}
            text={t('capabilities.hpht.text')}
            list={[
              t('capabilities.hpht.items.0'),
              t('capabilities.hpht.items.1'),
              t('capabilities.hpht.items.2')
            ]}
          />
          <CapabilityBlock 
            icon={<Ruler className="w-8 h-8"/>}
            title={t('capabilities.nano.title')}
            text={t('capabilities.nano.text')}
            list={[
              t('capabilities.nano.items.0'),
              t('capabilities.nano.items.1'),
              t('capabilities.nano.items.2')
            ]}
          />
          <CapabilityBlock 
            icon={<Database className="w-8 h-8"/>}
            title={t('capabilities.comp.title')}
            text={t('capabilities.comp.text')}
            list={[
              t('capabilities.comp.items.0'),
              t('capabilities.comp.items.1'),
              t('capabilities.comp.items.2')
            ]}
          />
          <CapabilityBlock 
            icon={<Globe className="w-8 h-8"/>}
            title={t('capabilities.supply.title')}
            text={t('capabilities.supply.text')}
            list={[
              t('capabilities.supply.items.0'),
              t('capabilities.supply.items.1'),
              t('capabilities.supply.items.2')
            ]}
          />
        </div>

        <div className="py-20 border-y editorial-border flex flex-col md:flex-row gap-24 items-center surface-gradient p-12 rounded-[4rem]">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-display italic">{t('capabilities.qualityAssurance')}</h2>
            <p className="font-sans font-light opacity-70 leading-relaxed text-lg">
              {t('capabilities.analysis')} {t('capabilities.traceability')}
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-12 w-full lg:w-auto">
            <div className="space-y-4">
              <span className="text-5xl font-display font-bold">99.9%</span>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">{t('capabilities.purity')}</p>
            </div>
            <div className="space-y-4">
              <span className="text-5xl font-display font-bold">ISO</span>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">2026:9001 {t('capabilities.compliance')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilityBlock({ icon, title, text, list }: { icon: React.ReactNode, title: string, text: string, list: (string | undefined)[] }) {
  return (
    <div className="bg-white dark:bg-brand-ink p-16 space-y-12 group hover:bg-brand-tan/10 transition-all duration-500 relative overflow-hidden">
      <div className="absolute inset-0 accent-gradient opacity-0 group-hover:opacity-10 transition-opacity" />
      <div className="text-brand-tan bg-brand-tan/10 p-4 w-fit rounded-2xl group-hover:scale-110 transition-transform relative z-10">
        {icon}
      </div>
      <div className="space-y-6 relative z-10">
        <h3 className="text-4xl font-display italic tracking-tight">{title}</h3>
        <p className="font-sans text-lg font-light leading-relaxed opacity-60 dark:text-brand-cream/80">
          {text}
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          {list.filter(Boolean).map((item, idx) => (
            <TechnicalTerm key={idx} term={item || ""}>
              <span className="bg-brand-tan/5 text-brand-tan border border-brand-tan/20 px-4 py-1.5 rounded-full font-sans text-[9px] uppercase font-bold tracking-widest whitespace-nowrap">
                {item}
              </span>
            </TechnicalTerm>
          ))}
        </div>
      </div>
    </div>
  );
}
