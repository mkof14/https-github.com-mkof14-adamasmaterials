import { motion } from 'motion/react';
import { Mail, Phone, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const contactSections = [
    {
      title: "General Inquiries",
      description: "For partnership opportunities, media requests, and general information.",
      email: "info@adamasmaterials.com",
      icon: Mail
    },
    {
      title: "Research & Development",
      description: "For technical specifications, research collaborations, and quantum-grade inquiries.",
      email: "rd@adamasmaterials.com",
      icon: Globe
    },
    {
      title: "Operations & Logistics",
      description: "For production timelines, delivery status, and supply chain coordination.",
      email: "ops@adamasmaterials.com",
      icon: Phone
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl space-y-24 py-12"
    >
      <SEO 
        title="Contact" 
        description="Connect with Adamas Materials. Reach out for general inquiries, research collaborations, or technical product specifications." 
        keywords="contact adamas materials, materials science inquiry, diamond research contact, charlotte office, industrial collaboration"
      />

      <div className="max-w-3xl space-y-12">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-6xl md:text-8xl font-sans font-medium tracking-tight leading-[0.9]"
        >
          CONNECT WITH <br />
          <span className="opacity-40 italic">PRECISION</span>
        </motion.h1>
        
        <p className="font-sans text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Our specialized teams are deployed to assist with project integration, from initial feasibility studies to full-scale industrial production.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {contactSections.map((section, idx) => (
          <motion.div 
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="p-8 border editorial-border space-y-6 group hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
          >
            <section.icon className="w-8 h-8 text-brand-gold" />
            <div className="space-y-4">
              <h3 className="font-sans font-medium text-xl uppercase tracking-wider">{section.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{section.description}</p>
              <a 
                href={`mailto:${section.email}`}
                className="block font-mono text-sm text-brand-gold hover:underline decoration-1 underline-offset-4"
              >
                {section.email}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
