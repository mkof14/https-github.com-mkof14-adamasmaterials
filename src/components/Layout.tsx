import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SEO } from './SEO';

export function Layout() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-brand-gold/30">
      <SEO />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
