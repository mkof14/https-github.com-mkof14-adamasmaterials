import React from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from '../components/SEO';

export function Legal() {
  const location = useLocation();
  const path = location.pathname.replace('/', '');

  const content: Record<string, { title: string, text: string }> = {
    privacy: {
      title: "Privacy Policy",
      text: "At Adamas Materials, we take data architectural confidentiality as seriously as our material purity. We do not track consumer behavior for advertising. Any data collected through our RFQ process is encrypted and restricted to personnel under strict NDAs."
    },
    terms: {
      title: "Terms of Service",
      text: "Engagement with Adamas Materials is strictly b2b. Our services are provided under formal contract frameworks. Any information provided on this website is for informational purposes and does not constitute a binding offer until an RFQ is formally processed."
    },
    compliance: {
      title: "Compliance & Standards",
      text: "We adhere to ISO 9001:2015, ASTM standards for synthetic diamond growth, and full export compliance regulations (ITAR/EAR where applicable). Our sourcing is ethical and fully transparent within our industrial supply chain."
    }
  };

  const active = content[path] || content.compliance;

  return (
    <div className="py-24 container mx-auto px-4 max-w-4xl">
      <SEO 
        title={active.title} 
        description={`Adamas Materials ${active.title}. Understanding our protocols for industrial confidentiality, strategic sourcing, and liability.`} 
        keywords={`legal, ${active.title}, adamas materials compliance, industrial privacy, terms of service`}
      />
      <div className="space-y-12">
        <header className="border-b border-slate-200 dark:border-slate-800 pb-8">
          <h1 className="text-5xl font-bold">{active.title}</h1>
          <p className="mt-4 text-slate-500 font-mono text-sm uppercase tracking-widest">Effective: April 2026</p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed text-slate-600 dark:text-slate-300">
            {active.text}
          </p>
          
          <h2 className="text-2xl font-bold mt-12 mb-6">Article I: Industrial Confidentiality</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            All technical specifications, crystalline growth parameters, and project-specific requirements shared 
            between the Client and Adamas Materials are considered 'Highly Confidential'. We implement 
            military-grade digital shielding for our client documentation repositories.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Article II: Strategic Sourcing</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Our raw materials are sourced from strictly vetted industrial partners. We do not engage with 
            unregulated secondary markets. Our supply chain is 100% auditable and conflict-free.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Article III: Liability Limitations</h2>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
            Adamas Materials provides materials to specification. The performance of these materials in 
            client-designed end-products is the sole responsibility of the client, unless explicitly 
            governed by a co-development roadmap.
          </p>
        </article>
      </div>
    </div>
  );
}
