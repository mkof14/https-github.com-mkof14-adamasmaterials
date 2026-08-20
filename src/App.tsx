import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const Investors = lazy(() => import('./pages/Investors').then((m) => ({ default: m.Investors })));
const Capabilities = lazy(() => import('./pages/Capabilities').then((m) => ({ default: m.Capabilities })));
const Applications = lazy(() => import('./pages/Applications').then((m) => ({ default: m.Applications })));
const RFQ = lazy(() => import('./pages/RFQ').then((m) => ({ default: m.RFQ })));
const Legal = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Legal })));
const QualityProcess = lazy(() => import('./pages/QualityProcess').then((m) => ({ default: m.QualityProcess })));
const Glossary = lazy(() => import('./pages/Glossary').then((m) => ({ default: m.Glossary })));
const Contact = lazy(() => import('./pages/Contact'));
const Materials = lazy(() => import('./pages/Materials').then((m) => ({ default: m.Materials })));
const Downloads = lazy(() => import('./pages/Downloads').then((m) => ({ default: m.Downloads })));

function PageFallback() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center" aria-busy="true">
      <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-brand-tan font-bold">Adamas</span>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="investors" element={<Investors />} />
              <Route path="materials" element={<Materials />} />
              <Route path="capabilities" element={<Capabilities />} />
              <Route path="quality" element={<QualityProcess />} />
              <Route path="glossary" element={<Glossary />} />
              <Route path="applications" element={<Applications />} />
              <Route path="downloads" element={<Downloads />} />
              <Route path="rfq" element={<RFQ />} />
              <Route path="privacy" element={<Legal />} />
              <Route path="terms" element={<Legal />} />
              <Route path="compliance" element={<Legal />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}
