import React from 'react';
import { useTranslation } from 'react-i18next';
import { Microscope, Database, Globe, Ruler } from 'lucide-react';
import { SEO } from '../components/SEO';
import { TechnicalTerm } from '../components/TechnicalTerm';

export function Capabilities() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title={t('nav.capabilities')} 
        description="CVD diamond growth and technical capabilities for cutting tools, thermal management, semiconductors, and research." 
        keywords="cvd diamond growth, cutting tool materials, data center thermal management, semiconductor cvd diamond"
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
            {t('capabilities.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-brand-border dark:bg-brand-border-dark border editorial-border overflow-hidden rounded-[4rem] shadow-2xl">
          <CapabilityBlock 
            icon={<Microscope className="w-8 h-8"/>}
            title={t('capabilities.cvd.title')}
            text={t('capabilities.cvd.text')}
            list={[
              t('capabilities.cvd.items.0'),
              t('capabilities.cvd.items.1'),
              t('capabilities.cvd.items.2')
            ]}
          />
          <CapabilityBlock 
            icon={<Ruler className="w-8 h-8"/>}
            title={t('capabilities.tooling.title')}
            text={t('capabilities.tooling.text')}
            list={[
              t('capabilities.tooling.items.0'),
              t('capabilities.tooling.items.1'),
              t('capabilities.tooling.items.2')
            ]}
          />
          <CapabilityBlock 
            icon={<Database className="w-8 h-8"/>}
            title={t('capabilities.thermal.title')}
            text={t('capabilities.thermal.text')}
            list={[
              t('capabilities.thermal.items.0'),
              t('capabilities.thermal.items.1'),
              t('capabilities.thermal.items.2')
            ]}
          />
          <CapabilityBlock 
            icon={<Globe className="w-8 h-8"/>}
            title={t('capabilities.custom.title')}
            text={t('capabilities.custom.text')}
            list={[
              t('capabilities.custom.items.0'),
              t('capabilities.custom.items.1'),
              t('capabilities.custom.items.2')
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
              <span className="text-5xl font-display font-bold">CVD</span>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">{t('capabilities.precision')}</p>
            </div>
            <div className="space-y-4">
              <span className="text-5xl font-display font-bold">ISO</span>
              <p className="font-sans text-[10px] uppercase tracking-widest opacity-40">9001 {t('capabilities.compliance')}</p>
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
