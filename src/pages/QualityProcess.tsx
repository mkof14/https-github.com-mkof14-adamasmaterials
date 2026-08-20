import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { TechnicalTerm } from '../components/TechnicalTerm';
import { APP_MARKS } from '../components/AppMarks';
import { PageShell, PageHeader, AccentPanel, PageCta } from '../components/page/PageShell';

export function QualityProcess() {
  const { t } = useTranslation();

  return (
    <PageShell
      seo={
        <SEO
          title={t('nav.quality')}
          description="How Adamas Materials grows and checks CVD materials for industrial and research use."
          keywords="cvd materials process, quality assurance, raman spectroscopy, cvd growth standards"
        />
      }
    >
      <PageHeader
        label={t('qualityPage.label')}
        title={t('qualityPage.title')}
        titleAccent={t('qualityPage.accent')}
        intro={t('qualityPage.intro')}
        chips={[
          { href: '#qp-growth', label: t('qualityPage.growthTitle'), accentKey: 'technical' },
          { href: '#qp-fit', label: t('qualityPage.fitTitle'), accentKey: 'tooling' },
          { href: '#qp-checks', label: t('qualityPage.checksTitle'), accentKey: 'cooling' },
          { href: '#qp-system', label: t('qualityPage.systemTitle'), accentKey: 'universities' },
        ]}
      />

      <div className="space-y-6 sm:space-y-7">
        <AccentPanel
          id="qp-growth"
          index="01"
          title={t('qualityPage.growthTitle')}
          accentKey="technical"
          Mark={APP_MARKS.technical}
          tags={['CVD', 'Grade control', 'Custom specs']}
        >
          <p>
            <TechnicalTerm term="CVD">{t('qualityPage.growthText')}</TechnicalTerm>
          </p>
        </AccentPanel>

        <AccentPanel
          id="qp-fit"
          index="02"
          title={t('qualityPage.fitTitle')}
          accentKey="tooling"
          Mark={APP_MARKS.tooling}
          tags={['Hardness', 'Heat spreading', 'Semiconductors', 'Research']}
        >
          <p>{t('qualityPage.fitText')}</p>
        </AccentPanel>

        <AccentPanel
          id="qp-checks"
          index="03"
          title={t('qualityPage.checksTitle')}
          accentKey="cooling"
          Mark={APP_MARKS.cooling}
          tags={['Raman', 'AFM', 'Batch records']}
        >
          <p>{t('qualityPage.checksText')}</p>
        </AccentPanel>

        <AccentPanel
          id="qp-system"
          index="04"
          title={t('qualityPage.systemTitle')}
          accentKey="universities"
          Mark={APP_MARKS.universities}
          tags={['ISO 9001', 'CVD', 'Spec-driven']}
        >
          <p>{t('qualityPage.systemText')}</p>
        </AccentPanel>
      </div>

      <PageCta />
    </PageShell>
  );
}
