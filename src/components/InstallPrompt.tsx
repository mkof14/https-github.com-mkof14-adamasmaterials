import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

/** Subtle install affordance for desktop (Chrome/Edge) and Android. iOS uses Share → Add to Home Screen. */
export function InstallPrompt() {
  const { t } = useTranslation();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('pwaInstallDismissed') === '1') {
      setDismissed(true);
    }
    const ua = navigator.userAgent;
    const ios = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    setIsIos(ios && !window.matchMedia('(display-mode: standalone)').matches);

    const onBip = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener('beforeinstallprompt', onBip);
    return () => window.removeEventListener('beforeinstallprompt', onBip);
  }, []);

  if (dismissed) return null;
  if (!deferred && !isIos) return null;
  if (typeof window !== 'undefined' && window.matchMedia('(display-mode: standalone)').matches) return null;

  const dismiss = () => {
    localStorage.setItem('pwaInstallDismissed', '1');
    setDismissed(true);
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    dismiss();
  };

  return (
    <div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:bottom-6 z-[60] max-w-sm mx-auto sm:mx-0">
      <div className="rounded-[1rem] border editorial-border bg-brand-cream/95 dark:bg-brand-charcoal/95 backdrop-blur-md surface-shadow p-4 sm:p-5 space-y-3">
        <p className="font-sans text-sm text-body leading-relaxed">
          {isIos ? t('install.iosHint') : t('install.desktopHint')}
        </p>
        <div className="flex items-center gap-4">
          {deferred && (
            <button
              type="button"
              onClick={install}
              className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-[#8A6540] dark:text-[#C4A078] border-b border-current/40 hover:border-current pb-0.5"
            >
              {t('install.action')}
            </button>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-body/50 hover:text-body"
          >
            {t('install.dismiss')}
          </button>
        </div>
      </div>
    </div>
  );
}
