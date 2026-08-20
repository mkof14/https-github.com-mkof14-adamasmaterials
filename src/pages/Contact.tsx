import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { APP_MARKS, type AppMarkKey } from '../components/AppMarks';
import { PageShell, PageHeader, AccentPanel, PageCta } from '../components/page/PageShell';

export default function Contact() {
  const { t } = useTranslation();

  const sections: {
    titleKey: string;
    textKey: string;
    email: string;
    accent: AppMarkKey;
    id: string;
  }[] = [
    {
      id: 'contact-general',
      titleKey: 'contactPage.generalTitle',
      textKey: 'contactPage.generalText',
      email: 'info@adamasmaterials.com',
      accent: 'technical',
    },
    {
      id: 'contact-tech',
      titleKey: 'contactPage.techTitle',
      textKey: 'contactPage.techText',
      email: 'rd@adamasmaterials.com',
      accent: 'cooling',
    },
    {
      id: 'contact-ops',
      titleKey: 'contactPage.opsTitle',
      textKey: 'contactPage.opsText',
      email: 'ops@adamasmaterials.com',
      accent: 'tooling',
    },
  ];

  return (
    <PageShell
      seo={
        <SEO
          title={t('nav.contact')}
          description="Contact Adamas Materials for CVD materials projects: cutting tools, heat sinks and heat spreaders, semiconductors, and research."
          keywords="contact adamas materials, cvd materials inquiry, cutting tools, heat spreader, charlotte nc"
        />
      }
    >
      <PageHeader
        label={t('contactPage.label')}
        title={t('contactPage.title')}
        titleAccent={t('contactPage.accent')}
        intro={t('contactPage.intro')}
        chips={sections.map((s) => ({
          href: `#${s.id}`,
          label: t(s.titleKey),
          accentKey: s.accent,
        }))}
      />

      <div className="space-y-6 sm:space-y-7">
        {sections.map((section, idx) => (
          <AccentPanel
            key={section.id}
            id={section.id}
            index={String(idx + 1).padStart(2, '0')}
            title={t(section.titleKey)}
            accentKey={section.accent}
            Mark={APP_MARKS[section.accent]}
          >
            <p>{t(section.textKey)}</p>
            <p>
              <a
                href={`mailto:${section.email}`}
                className="font-mono text-sm sm:text-base text-[#8A6540] dark:text-[#C4A078] hover:underline underline-offset-4 break-all"
              >
                {section.email}
              </a>
            </p>
          </AccentPanel>
        ))}
      </div>

      <PageCta />
    </PageShell>
  );
}
