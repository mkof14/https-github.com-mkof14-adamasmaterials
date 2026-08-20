import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { APP_MARKS, type AppMarkKey } from '../components/AppMarks';
import { PageShell, PageHeader, AccentPanel, PageCta } from '../components/page/PageShell';

const INV_SECTIONS: { id: string; titleKey: string; textKey: string; accent: AppMarkKey }[] = [
  { id: 'inv-focus', titleKey: 'investors.growthMetrics', textKey: 'investors.focusText', accent: 'tooling' },
  { id: 'inv-markets', titleKey: 'investors.revenueTrajectory', textKey: 'investors.marketsText', accent: 'cooling' },
  { id: 'inv-capacity', titleKey: 'investors.capexEfficiency', textKey: 'investors.capitalText', accent: 'technical' },
  { id: 'inv-access', titleKey: 'investors.portal', textKey: 'investors.accessText', accent: 'universities' },
];

export function Investors() {
  const { t } = useTranslation();

  const sections = INV_SECTIONS.map((s, idx) => ({
    ...s,
    title: t(s.titleKey),
    text: t(s.textKey),
    Mark: APP_MARKS[s.accent],
    index: String(idx + 1).padStart(2, '0'),
  }));

  return (
    <PageShell
      seo={
        <SEO
          title={t('nav.investors')}
          description="Investor information for Adamas Materials — CVD materials for industrial tooling, cooling, semiconductors, and research."
          keywords="investor relations, cvd materials, industrial tooling, thermal management, adamas materials"
        />
      }
    >
      <PageHeader
        label={t('investors.stewardship')}
        title={t('nav.investors')}
        titleAccent={t('investors.capitalManagement')}
        intro={t('investors.intro')}
        chips={sections.map((s) => ({ href: `#${s.id}`, label: s.title, accentKey: s.accent }))}
      />

      <div className="space-y-6 sm:space-y-7">
        {sections.map((section) => (
          <AccentPanel
            key={section.id}
            id={section.id}
            index={section.index}
            title={section.title}
            accentKey={section.accent}
            Mark={section.Mark}
          >
            <p>{section.text}</p>
          </AccentPanel>
        ))}
      </div>

      <PageCta note={t('investors.confidential')} />
    </PageShell>
  );
}
