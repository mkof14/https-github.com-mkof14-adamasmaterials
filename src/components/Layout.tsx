import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEO } from './SEO';
import { InstallPrompt } from './InstallPrompt';

export function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-brand-gold/30 pb-[env(safe-area-inset-bottom)]">
      <SEO />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <InstallPrompt />
    </div>
  );
}
