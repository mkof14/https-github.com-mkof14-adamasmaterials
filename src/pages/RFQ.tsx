import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { PageShell, PageHeader } from '../components/page/PageShell';

export function RFQ() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageShell
      seo={
        <SEO
          title={t('nav.rfq')}
          description="Request a quote for CVD materials and technical solutions."
          keywords="cvd materials rfq, cutting tools quote, data center cooling materials, semiconductor cvd inquiry"
        />
      }
    >
      <PageHeader
        label={t('rfq.inquiryLabel')}
        title={t('rfq.titlePart1')}
        titleAccent={t('rfq.titlePart2')}
        intro={t('rfq.intro')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,18rem)_1fr] gap-10 lg:gap-14 items-start">
        <div className="space-y-8 border-t editorial-border pt-8 lg:border-t-0 lg:pt-0">
          <div className="space-y-2">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-body/45">Charlotte HQ</p>
            <p className="font-display text-xl sm:text-2xl font-medium tracking-tight">Charlotte, NC USA</p>
          </div>
          <div className="space-y-2">
            <p className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-body/45">{t('rfq.communications')}</p>
            <p className="font-display text-lg sm:text-xl font-medium tracking-tight break-all">ops@adamasmaterials.com</p>
          </div>
          <p className="font-sans text-sm text-body leading-relaxed">{t('rfq.confidentiality')}</p>
        </div>

        <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] border editorial-border bg-gradient-to-br from-brand-cream/90 via-brand-mist/80 to-brand-sand/40 dark:from-brand-charcoal/70 dark:via-brand-ink/80 dark:to-brand-charcoal/40 backdrop-blur-md surface-shadow p-6 sm:p-10 md:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8A6540]/10 via-transparent to-transparent dark:from-[#C4A078]/12 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#8A6540] dark:bg-[#C4A078] opacity-70" />

          {submitted ? (
            <div className="relative z-10 text-center space-y-6 py-8">
              <h2 className="text-3xl sm:text-4xl font-display italic text-[#8A6540] dark:text-[#C4A078]">{t('rfq.received')}</h2>
              <p className="font-sans text-body leading-relaxed max-w-md mx-auto">{t('rfq.receivedText')}</p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="font-sans text-[10px] uppercase tracking-widest font-bold border-b border-current/40 hover:border-current text-[#8A6540] dark:text-[#C4A078] pb-1"
              >
                {t('rfq.another')}
              </button>
            </div>
          ) : (
            <form className="relative z-10 space-y-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-[#8A6540] dark:text-[#C4A078]">
                    {t('rfq.name')}
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    autoComplete="name"
                    className="w-full bg-transparent border-b border-current/25 py-3 font-display text-xl focus:outline-none focus:border-[#8A6540] dark:focus:border-[#C4A078] transition-colors placeholder:opacity-25"
                  />
                </div>
                <div className="space-y-3">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-[#8A6540] dark:text-[#C4A078]">
                    {t('rfq.email')}
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="w-full bg-transparent border-b border-current/25 py-3 font-display text-xl focus:outline-none focus:border-[#8A6540] dark:focus:border-[#C4A078] transition-colors placeholder:opacity-25"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-[#8A6540] dark:text-[#C4A078]">
                  {t('rfq.spec')}
                </label>
                <select
                  name="spec"
                  className="w-full bg-transparent border-b border-current/25 py-3 font-display text-xl focus:outline-none focus:border-[#8A6540] dark:focus:border-[#C4A078] transition-colors appearance-none cursor-pointer"
                >
                  <option className="bg-brand-cream dark:bg-brand-ink">CVD for Cutting Tools</option>
                  <option className="bg-brand-cream dark:bg-brand-ink">CVD for Data Center Cooling</option>
                  <option className="bg-brand-cream dark:bg-brand-ink">CVD for Semiconductors</option>
                  <option className="bg-brand-cream dark:bg-brand-ink">CVD for Universities / Research</option>
                  <option className="bg-brand-cream dark:bg-brand-ink">Custom Technical Solution</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-[#8A6540] dark:text-[#C4A078]">
                  {t('rfq.details')}
                </label>
                <textarea
                  required
                  name="details"
                  className="w-full bg-transparent border-b border-current/25 py-3 font-display text-xl focus:outline-none focus:border-[#8A6540] dark:focus:border-[#C4A078] transition-colors h-28 placeholder:opacity-25"
                  placeholder={t('rfq.detailsPlaceholder')}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-ink text-brand-cream dark:bg-brand-cream dark:text-brand-ink py-5 flex items-center justify-center font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#8A6540] dark:hover:bg-[#C4A078] dark:hover:text-brand-ink transition-colors"
              >
                {t('rfq.requestForm')}
              </button>
              <p className="text-center font-sans text-[9px] uppercase tracking-[0.2em] text-body/45 font-bold">{t('rfq.sla')}</p>
            </form>
          )}
        </div>
      </div>
    </PageShell>
  );
}
