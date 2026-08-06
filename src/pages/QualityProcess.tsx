import React from 'react';
import { ShieldCheck, Activity, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';
import { TechnicalTerm } from '../components/TechnicalTerm';

export function QualityProcess() {
  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title="Quality & Process" 
        description="How Adamas Materials grows and checks CVD diamond for industrial and research use." 
        keywords="cvd diamond process, quality assurance, raman spectroscopy, diamond growth standards"
      />
      <div className="max-w-6xl space-y-32">
        <div className="max-w-3xl space-y-12">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">Process</span>
          <h1 className="text-6xl md:text-8xl font-display leading-[0.9] italic">Quality &<br/><span className="not-italic font-bold">Process.</span></h1>
          <p className="text-2xl font-sans font-light leading-relaxed opacity-80 italic dark:text-brand-cream/90">
            We focus on CVD diamond growth and clear quality checks. Specs, documentation, and repeatable process control come first.
          </p>
        </div>

        <section className="space-y-16">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tight border-b editorial-border pb-4">CVD Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-border dark:bg-brand-border-dark border editorial-border rounded-[3rem] overflow-hidden">
            <ProcessCard 
              icon={<Layers className="h-8 w-8" />}
              title="CVD Growth"
              description={<>Chemical Vapor Deposition (<TechnicalTerm term="CVD">CVD</TechnicalTerm>) grows diamond from a process gas under controlled conditions. This is our core method for tooling, thermal, semiconductor, and research grades.</>}
              specs={["CVD only", "Grade control", "Custom specs"]}
            />
            <ProcessCard 
              icon={<ShieldCheck className="h-8 w-8" />}
              title="Application Fit"
              description={<>We match grade and form to the job: wear-resistant cutting tools, heat sinks and spreaders for data centers and power electronics, semiconductor parts, and university samples.</>}
              specs={["Hardness", "Heat spreading", "Semiconductors", "Research"]}
            />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight border-b editorial-border pb-4">QA Checks</h2>
            <div className="space-y-8">
              <ProtocolItem 
                title="Spectroscopic Checks"
                text={<>Batches can be checked with <TechnicalTerm term="Raman Spectroscopy">Raman</TechnicalTerm> and related methods to confirm diamond quality and process consistency.</>}
              />
              <ProtocolItem 
                title={<TechnicalTerm term="AFM">Surface Checks</TechnicalTerm>}
                text={<><TechnicalTerm term="AFM">AFM</TechnicalTerm> and finish measurements are used when surface roughness matters for the application.</>}
              />
              <ProtocolItem 
                title="Batch Records"
                text="Growth and inspection records are kept so production and research lots stay traceable."
              />
            </div>
          </div>
          <div className="bg-brand-sand dark:bg-slate-900 border editorial-border p-12 rounded-[4rem] space-y-10">
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase font-sans font-extrabold tracking-[0.3em] text-brand-tan">Quality System</h3>
              <div className="flex items-baseline gap-4">
                <span className="text-5xl font-display font-bold">ISO</span>
                <span className="text-2xl font-display italic">9001</span>
              </div>
              <p className="text-sm font-sans font-light opacity-60 leading-relaxed">
                Our Charlotte facility follows a structured quality management approach for industrial and research supply.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase font-sans font-extrabold tracking-[0.3em] text-brand-tan">Process Focus</h3>
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-1">
                  <span className="text-3xl font-display font-bold">CVD</span>
                  <p className="text-[9px] uppercase tracking-widest opacity-40">Core method</p>
                </div>
                <div className="space-y-1">
                  <span className="text-3xl font-display font-bold">Spec</span>
                  <p className="text-[9px] uppercase tracking-widest opacity-40">Driven supply</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 border-y editorial-border text-center">
          <p className="max-w-3xl mx-auto font-display text-4xl italic leading-tight text-brand-ink/80 dark:text-brand-cream/80">
            "Clear process. Clear specs. Material that fits the job."
          </p>
          <p className="mt-8 font-sans text-xs uppercase tracking-[0.4em] font-bold opacity-40">— Adamas Materials</p>
        </section>
      </div>
    </div>
  );
}

function ProcessCard({ icon, title, description, specs }: { icon: React.ReactNode, title: string, description: React.ReactNode, specs: string[] }) {
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
            <TechnicalTerm key={i} term={s}>
              <span className="px-4 py-1.5 border border-brand-tan/20 rounded-full font-sans text-[9px] uppercase font-bold tracking-widest text-brand-tan bg-brand-tan/5">
                {s}
              </span>
            </TechnicalTerm>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProtocolItem({ title, text }: { title: React.ReactNode, text: React.ReactNode }) {
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
