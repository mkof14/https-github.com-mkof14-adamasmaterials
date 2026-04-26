import React from 'react';
import { ShieldCheck, Ruler, Activity, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

export function QualityProcess() {
  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title="Quality & Process" 
        description="Learn about Adamas Materials' rigorous quality assurance protocols, synthesis methodologies (HPHT, CVD), and sub-nanometer precision standards." 
      />
      <div className="max-w-6xl space-y-32">
        {/* Header Section */}
        <div className="max-w-3xl space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">Scientific Validation</span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] italic">Quality &<br/><span className="not-italic font-bold">Process.</span></h1>
          <p className="text-2xl font-sans font-light leading-relaxed opacity-80 italic dark:text-brand-cream/90">
            Our commitment to material integrity is governed by a rigorous technical framework. Every sample produced is a testament to sub-nanometer precision and repeatable synthesis protocols.
          </p>
        </div>

        {/* Manufacturing Processes */}
        <section className="space-y-16">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight border-b editorial-border pb-4">Synthesis Methodologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border dark:bg-brand-border-dark border editorial-border rounded-[3rem] overflow-hidden">
            <ProcessCard 
              icon={<ShieldCheck className="h-8 w-8" />}
              title="HPHT Synthesis"
              description="High-Pressure High-Temperature synthesis replicates deep-earth conditions to create ultra-dense carbon lattices. We operate proprietary systems capable of maintaining stable 60k atm environments for extended growth cycles."
              specs={["60,000 atm", "1500°C+", "Uniform Heat Distribution"]}
            />
            <ProcessCard 
              icon={<Layers className="h-8 w-8" />}
              title="CVD Growth"
              description="Chemical Vapor Deposition allows for the bottom-up assembly of diamond lattices at the atomic level. This method is preferred for defect-engineered samples and isotopic purity control (12C/13C ratios)."
              specs={["Isotopic Control", "Plasma-Assisted", "Epitaxial Growth"]}
            />
          </div>
        </section>

        {/* Quality Assurance Protocols */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight border-b editorial-border pb-4">QA Protocols</h2>
            <div className="space-y-8">
              <ProtocolItem 
                title="Multi-Spectrometric Analysis"
                text="Every batch undergoes Raman and Photoluminescence (PL) spectroscopy to map nitrogen concentration and lattice strain."
              />
              <ProtocolItem 
                title="Surface AFM Mapping"
                text="Atomic Force Microscopy (AFM) verifies surface roughness and preparation characteristics according to client-specific Ra targets."
              />
              <ProtocolItem 
                title="Batch Traceability"
                text="Full provenance documentation is recorded for each growth cycle, including gas purity logs and temperature fluctuations."
              />
            </div>
          </div>
          <div className="bg-brand-sand dark:bg-slate-900 border editorial-border p-12 rounded-[4rem] space-y-10">
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase font-sans font-extrabold tracking-[0.3em] text-brand-tan">Standard Compliance</h3>
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-display font-bold">ISO</span>
                <span className="text-2xl font-display italic">9001:2015</span>
              </div>
              <p className="text-sm font-sans font-light opacity-60 leading-relaxed">
                Our Charlotte laboratory is fully certified for Quality Management Systems. We adhere to ASTM international standards for hard material characterization.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase font-sans font-extrabold tracking-[0.3em] text-brand-tan">Accuracy Metrics</h3>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-1">
                  <span className="text-3xl font-display font-bold">±0.2</span>
                  <p className="text-[9px] uppercase tracking-widest opacity-40">Nano-precision</p>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-display font-bold">99.9%</span>
                  <p className="text-[9px] uppercase tracking-widest opacity-40">Lattice Purity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Quote */}
        <section className="py-24 border-y editorial-border text-center">
          <p className="max-w-3xl mx-auto font-display text-4xl italic leading-tight text-brand-ink/80 dark:text-brand-cream/80">
            "Transparency in synthesis is the only way to ensure the reliability of industrial-grade research."
          </p>
          <p className="mt-8 font-sans text-xs uppercase tracking-[0.4em] font-bold opacity-40">— Technical Board, Adamas Materials</p>
        </section>
      </div>
    </div>
  );
}

function ProcessCard({ icon, title, description, specs }: { icon: React.ReactNode, title: string, description: string, specs: string[] }) {
  return (
    <div className="bg-white dark:bg-brand-ink p-16 space-y-10 group hover:bg-brand-tan/5 transition-all duration-500">
      <div className="text-brand-tan p-3 bg-brand-tan/10 w-fit rounded-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="space-y-6">
        <h3 className="text-3xl font-display italic tracking-tight">{title}</h3>
        <p className="font-sans text-lg font-light leading-relaxed opacity-60 dark:text-brand-cream/80">{description}</p>
        <div className="flex flex-wrap gap-3 pt-4">
          {specs.map((s, i) => (
            <span key={i} className="px-4 py-1.5 border border-brand-tan/20 rounded-full font-sans text-[9px] uppercase font-bold tracking-widest text-brand-tan bg-brand-tan/5">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProtocolItem({ title, text }: { title: string, text: string }) {
  return (
    <div className="space-y-3 group">
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-brand-tan group-hover:w-12 transition-all" />
        <h3 className="text-xl font-display font-bold">{title}</h3>
      </div>
      <p className="font-sans text-sm font-light leading-relaxed opacity-60 pl-12">{text}</p>
    </div>
  );
}
