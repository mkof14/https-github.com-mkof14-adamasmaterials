import React from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { APP_MARKS, type AppMarkKey } from '../components/AppMarks';
import { PageShell, PageHeader, AccentPanel, PageCta } from '../components/page/PageShell';

const FILES: { href: string; labelKey: string; accent: AppMarkKey }[] = [
  { href: '/downloads/company-overview.txt', labelKey: 'downloadsPage.overview', accent: 'technical' },
  { href: '/downloads/company-overview-ru.txt', labelKey: 'downloadsPage.overviewRu', accent: 'universities' },
  { href: '/downloads/cvd-cutting-tools.txt', labelKey: 'downloadsPage.tooling', accent: 'tooling' },
  { href: '/downloads/cvd-thermal-management.txt', labelKey: 'downloadsPage.thermal', accent: 'cooling' },
  { href: '/downloads/cvd-semiconductors.txt', labelKey: 'downloadsPage.semi', accent: 'semiconductors' },
  { href: '/downloads/cvd-research.txt', labelKey: 'downloadsPage.research', accent: 'universities' },
];

export function Downloads() {
  const { t } = useTranslation();

  return (
    <PageShell
      seo={
        <SEO
          title={t('downloadsPage.title')}
          description="Download Adamas Materials CVD data sheets and company overview for desktop or mobile."
          keywords="cvd datasheet download, adamas materials overview, cutting tools datasheet"
        />
      }
    >
      <PageHeader
        label={t('downloadsPage.label')}
        title={t('downloadsPage.title')}
        titleAccent={t('downloadsPage.accent')}
        intro={t('downloadsPage.intro')}
      />

      <div className="space-y-6 sm:space-y-7">
        {FILES.map((file, idx) => (
          <AccentPanel
            key={file.href}
            index={String(idx + 1).padStart(2, '0')}
            title={t(file.labelKey)}
            accentKey={file.accent}
            Mark={APP_MARKS[file.accent]}
          >
            <p>
              <a
                href={file.href}
                download
                className="font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-[#8A6540] dark:text-[#C4A078] border-b border-current/40 hover:border-current pb-1"
              >
                {t('materialsPage.dataSheet')}
              </a>
            </p>
          </AccentPanel>
        ))}
      </div>

      <PageCta note={t('downloadsPage.installNote')} />
    </PageShell>
  );
}
