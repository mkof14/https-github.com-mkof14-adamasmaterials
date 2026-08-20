import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { APP_MARKS } from '../components/AppMarks';
import { PageShell, PageHeader, AccentPanel, PageCta } from '../components/page/PageShell';

export function About() {
  const { t } = useTranslation();

  const metrics = [
    { label: t('about.metrics.founded'), value: '2026' },
    { label: t('about.metrics.hq'), value: 'Charlotte, NC USA' },
    { label: t('about.metrics.focus'), value: t('about.metrics.industrial') },
  ];

  return (
    <PageShell
      seo={
        <SEO
          title={t('nav.about')}
          description="Adamas Materials supplies CVD materials for cutting tools, data center cooling, semiconductors, universities, and technical solutions."
          keywords="about adamas materials, cvd materials company, charlotte cvd materials"
        />
      }
    >
      <PageHeader
        label={t('about.heritage')}
        title="Adamas"
        titleAccent="Materials."
        intro={t('about.premise')}
      />

      <AccentPanel
        index="01"
        title={t('about.valuesTitle')}
        accentKey="technical"
        Mark={APP_MARKS.technical}
        tags={metrics.map((m) => `${m.label}: ${m.value}`)}
      >
        <p>{t('about.valuesText')}</p>
      </AccentPanel>

      <AccentPanel
        index="02"
        title={t('positioning.scientificTitle')}
        accentKey="cooling"
        Mark={APP_MARKS.cooling}
      >
        <p>{t('positioning.scientificText')}</p>
        <p>{t('positioning.noConsumerText')}</p>
      </AccentPanel>

      <PageCta />
    </PageShell>
  );
}
