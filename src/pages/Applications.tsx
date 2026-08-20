import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { TechnicalTerm } from '../components/TechnicalTerm';
import { APP_MARKS, type AppMarkKey } from '../components/AppMarks';
import { PageShell, PageHeader, AccentPanel, PageCta } from '../components/page/PageShell';

const APP_KEYS: AppMarkKey[] = ['tooling', 'cooling', 'semiconductors', 'universities', 'technical'];

export function Applications() {
  const { t } = useTranslation();

  const apps = APP_KEYS.map((key, idx) => ({
    key,
    name: t(`applications.items.${key}.name`),
    desc: t(`applications.items.${key}.desc`),
    Mark: APP_MARKS[key],
    index: String(idx + 1).padStart(2, '0'),
  }));

  return (
    <PageShell
      seo={
        <SEO
          title={t('nav.applications')}
          description="CVD materials applications: cutting tools, data center cooling, semiconductors, universities, and technical solutions."
          keywords="cvd materials applications, cutting tools, heat sink, heat spreader, semiconductor materials, university research"
        />
      }
    >
      <PageHeader
        label={t('applications.industrial')}
        title={t('applications.titlePart1')}
        titleAccent={t('applications.titlePart2')}
        intro={t('applications.intro')}
        chips={apps.map((app) => ({
          href: `#app-${app.key}`,
          label: app.name,
          accentKey: app.key,
        }))}
      />

      <div className="space-y-6 sm:space-y-7">
        {apps.map((app) => (
          <AccentPanel
            key={app.key}
            id={`app-${app.key}`}
            index={app.index}
            title={<TechnicalTerm term={app.name}>{app.name}</TechnicalTerm>}
            accentKey={app.key}
            Mark={app.Mark}
          >
            <p>{app.desc}</p>
          </AccentPanel>
        ))}
      </div>

      <PageCta />
    </PageShell>
  );
}
