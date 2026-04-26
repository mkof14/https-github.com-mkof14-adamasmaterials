import React from 'react';
/*
 * Adamas Materials - Project
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Investors } from './pages/Investors';
import { Capabilities } from './pages/Capabilities';
import { Applications } from './pages/Applications';
import { RFQ } from './pages/RFQ';
import { Legal } from './pages/Legal';
import { QualityProcess } from './pages/QualityProcess';
import { Glossary } from './pages/Glossary';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="investors" element={<Investors />} />
            <Route path="capabilities" element={<Capabilities />} />
            <Route path="quality" element={<QualityProcess />} />
            <Route path="glossary" element={<Glossary />} />
            <Route path="applications" element={<Applications />} />
            <Route path="rfq" element={<RFQ />} />
            <Route path="privacy" element={<Legal />} />
            <Route path="terms" element={<Legal />} />
            <Route path="compliance" element={<Legal />} />
            <Route path="contact" element={<RFQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
