import { motion } from 'motion/react';
import { Mail, Phone, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function Contact() {
  const contactSections = [
    {
      title: "General",
      description: "Partnerships, media, and general questions.",
      email: "info@adamasmaterials.com",
      icon: Mail
    },
    {
      title: "Technical & Research",
      description: "Specs, cutting tools, thermal parts, university projects, engineering.",
      email: "rd@adamasmaterials.com",
      icon: Globe
    },
    {
      title: "Operations",
      description: "Timelines, delivery status, and order coordination.",
      email: "ops@adamasmaterials.com",
      icon: Phone
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-5 sm:px-6 max-w-6xl space-y-14 sm:space-y-20 py-16 sm:py-24"
    >
      <SEO 
        title="Contact" 
        description="Contact Adamas Materials for CVD diamond projects: cutting tools, heat sinks and heat spreaders, semiconductors, and research." 
        keywords="contact adamas materials, cvd diamond inquiry, cutting tools, heat spreader, charlotte nc"
      />

      <div className="max-w-3xl space-y-8 sm:space-y-10">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight leading-[1.05] text-pretty"
        >
          Contact
        </motion.h1>
        
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Quotes, technical questions, and logistics. Charlotte, NC.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12">
        {contactSections.map((section, idx) => (
          <motion.div 
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="p-6 sm:p-8 border editorial-border space-y-5 sm:space-y-6 group hover:bg-brand-sand/50 dark:hover:bg-slate-900/50 transition-colors"
          >
            <section.icon className="w-7 h-7 sm:w-8 sm:h-8 text-brand-gold" />
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-sans font-medium text-lg sm:text-xl uppercase tracking-wider">{section.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{section.description}</p>
              <a 
                href={`mailto:${section.email}`}
                className="block font-mono text-sm text-brand-gold hover:underline decoration-1 underline-offset-4 break-all"
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
