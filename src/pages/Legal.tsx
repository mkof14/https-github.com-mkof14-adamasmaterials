import React from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageShell, PageHeader, PageCta } from '../components/page/PageShell';

export function Legal() {
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  const content: Record<string, { title: string; text: string }> = {
    privacy: {
      title: 'Privacy Policy',
      text: 'At Adamas Materials, we treat project data with the same care as material specs. We do not track consumer behavior for advertising. Data collected through our RFQ process is restricted to personnel under NDA.',
    },
    terms: {
      title: 'Terms of Service',
      text: 'Engagement with Adamas Materials is B2B. Services are provided under formal contract frameworks. Information on this website is informational and does not constitute a binding offer until an RFQ is formally processed.',
    },
    compliance: {
      title: 'Compliance & Standards',
      text: 'We follow ISO 9001:2015 practices, relevant ASTM guidance for CVD growth, and applicable export rules (ITAR/EAR where required). Sourcing stays auditable within our industrial supply chain.',
    },
  };

  const active = content[path] || content.compliance;

  return (
    <PageShell
      seo={
        <SEO
          title={active.title}
          description={`Adamas Materials ${active.title}. Protocols for industrial confidentiality, sourcing, and liability.`}
          keywords={`legal, ${active.title}, adamas materials compliance, industrial privacy, terms of service`}
        />
      }
    >
      <PageHeader
        label="Legal"
        title={active.title}
        intro={active.text}
      />

      <article className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem] border editorial-border bg-gradient-to-br from-brand-cream/90 via-brand-mist/80 to-brand-sand/40 dark:from-brand-charcoal/70 dark:via-brand-ink/80 dark:to-brand-charcoal/40 backdrop-blur-md surface-shadow p-6 sm:p-10 md:p-12 space-y-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7A6B3E]/10 via-transparent to-transparent dark:from-[#D0C08A]/12 pointer-events-none" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#7A6B3E] dark:bg-[#D0C08A] opacity-70" />
        <p className="relative z-10 font-sans text-[10px] uppercase tracking-[0.3em] font-bold text-body/50">
          Effective: April 2026
        </p>

        <section className="relative z-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display tracking-tight text-[#7A6B3E] dark:text-[#D0C08A]">
            Article I: Industrial Confidentiality
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-body max-w-3xl">
            Technical specifications, growth parameters, and project requirements shared between the client and
            Adamas Materials are treated as confidential and limited to authorized personnel.
          </p>
        </section>

        <section className="relative z-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display tracking-tight text-[#7A6B3E] dark:text-[#D0C08A]">
            Article II: Strategic Sourcing
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-body max-w-3xl">
            Raw materials come from vetted industrial partners. We do not use unregulated secondary markets. The
            supply chain remains auditable and conflict-free for the scopes we support.
          </p>
        </section>

        <section className="relative z-10 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-display tracking-tight text-[#7A6B3E] dark:text-[#D0C08A]">
            Article III: Liability Limitations
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed text-body max-w-3xl">
            Adamas Materials supplies materials to specification. Performance in client-designed end products
            remains the client&apos;s responsibility unless governed by a written co-development agreement.
          </p>
        </section>
      </article>

      <PageCta />
    </PageShell>
  );
}
