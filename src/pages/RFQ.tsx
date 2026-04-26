import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export function RFQ() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title={t('nav.rfq')} 
        description="Submit a request for proposal for high-pressure high-temperature synthesis, CVD diamond growth, or quantum-grade lattice engineering." 
        keywords="request for quote, rfq materials, custom diamond synthesis, engineered lattice proposal, industrial research inquiry"
      />
      <div className="max-w-6xl flex flex-col lg:flex-row gap-24">
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">Inquiry</span>
            <h1 className="text-6xl font-display leading-tight italic truncate sm:overflow-visible text-pretty">Request for<br/><span className="not-italic font-bold">Proposal.</span></h1>
            <p className="font-sans text-xl font-light opacity-60 leading-relaxed italic border-l-2 border-brand-tan pl-6">
              Adamas Materials handles each inquiry with professional discretion. For high-volume industrial partnerships, please provide detailed specifications.
            </p>
          </div>

          <div className="space-y-10 border-t editorial-border pt-12">
            <div className="space-y-2">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">CHARLOTTE HQ</p>
              <p className="font-display text-2xl font-medium tracking-tight">Charlotte, NC USA</p>
            </div>
            <div className="space-y-2">
              <p className="font-sans text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">{t('rfq.communications')}</p>
              <p className="font-display text-2xl font-medium tracking-tight">ops@adamasmaterials.com</p>
            </div>
          </div>
        </div>

        <div className="flex-1 glass-card p-12 lg:p-20 rounded-[4rem] border-brand-tan/20 shadow-2xl relative overflow-hidden group min-h-[600px] flex items-center">
          <div className="absolute inset-0 surface-gradient opacity-20 pointer-events-none" />
          
          {submitted ? (
            <div className="w-full text-center space-y-8 animate-in fade-in zoom-in duration-700 relative z-10">
              <div className="flex justify-center">
                <div className="bg-brand-tan/20 p-8 rounded-full">
                  <CheckCircle className="w-16 h-16 text-brand-tan animate-pulse" />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-display italic">Inquiry Received.</h2>
                <p className="font-sans font-light opacity-60">Professional discretion is maintained. Our operations team will contact you within 48 business hours.</p>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="font-sans text-[10px] uppercase tracking-widest font-bold underline decoration-brand-tan underline-offset-8 hover:text-brand-tan transition-colors"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form className="w-full space-y-12 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-brand-tan">Full Name</label>
                  <input required type="text" className="w-full bg-transparent border-b border-brand-tan/30 py-4 font-display text-xl focus:outline-none focus:border-brand-tan transition-colors placeholder:opacity-20" placeholder="Alexander von Humbolt" />
                </div>
                <div className="space-y-4">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-brand-tan">Corporate Email</label>
                  <input required type="email" className="w-full bg-transparent border-b border-brand-tan/30 py-4 font-display text-xl focus:outline-none focus:border-brand-tan transition-colors placeholder:opacity-20" placeholder="avh@university.de" />
                </div>
              </div>

              <div className="space-y-4">
                <label className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-brand-tan">Material Specification</label>
                <select className="w-full bg-transparent border-b border-brand-tan/30 py-4 font-display text-xl focus:outline-none focus:border-brand-tan transition-colors appearance-none cursor-pointer">
                  <option className="bg-brand-cream dark:bg-brand-ink">HPHT Industrial Diamond</option>
                  <option className="bg-brand-cream dark:bg-brand-ink">CVD Optical Grade</option>
                  <option className="bg-brand-cream dark:bg-brand-ink">Quantum Grade Scaffolding</option>
                  <option className="bg-brand-cream dark:bg-brand-ink">Technical Minerals (Other)</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="font-sans text-[10px] uppercase tracking-widest font-extrabold text-brand-tan">Inquiry Details</label>
                <textarea required className="w-full bg-transparent border-b border-brand-tan/30 py-4 font-display text-xl focus:outline-none focus:border-brand-tan transition-colors h-32 placeholder:opacity-20" placeholder="Detail your requirements for quantity, purity, and timeline..." />
              </div>

              <button type="submit" className="w-full bg-brand-ink text-brand-cream dark:bg-brand-cream dark:text-brand-ink py-6 flex items-center justify-center gap-4 group hover:bg-brand-tan dark:hover:bg-brand-tan transition-all font-sans text-xs uppercase tracking-[0.2em] font-bold shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                {t('rfq.requestForm')}
              </button>
              <p className="text-center font-sans text-[8px] uppercase tracking-[0.2em] opacity-40 italic font-bold">Expect a response within 48 business hours.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
