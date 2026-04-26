import React, { useState } from 'react';
import { Search, Book } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';

const GLOSSARY_TERMS = [
  {
    term: "HPHT",
    definition: "High-Pressure High-Temperature. A synthesis method for creating diamonds by replicating the extreme conditions found deep within the Earth's mantle.",
    category: "Synthesis"
  },
  {
    term: "CVD",
    definition: "Chemical Vapor Deposition. A process used to produce high-quality, high-performance solid materials, typically under vacuum. In diamond synthesis, it involves the bottom-up assembly of carbon atoms from a plasma gas.",
    category: "Synthesis"
  },
  {
    term: "NV Center",
    definition: "Nitrogen-Vacancy Center. A point defect in the diamond lattice where a nitrogen atom replaces a carbon atom adjacent to an empty lattice site (vacancy). Used extensively in quantum sensing.",
    category: "Quantum"
  },
  {
    term: "Lattice Purity",
    definition: "The degree to which a crystal structure is free from unintended chemical impurities or structural defects at the atomic level.",
    category: "Materials Science"
  },
  {
    term: "Epitaxial Growth",
    definition: "The deposition of an overlayer on a crystalline substrate where the overlayer adopts the crystalline orientation of the substrate.",
    category: "Synthesis"
  },
  {
    term: "Quantum Sensing",
    definition: "The use of quantum systems, quantum properties, or quantum phenomena to perform a measurement of a physical quantity.",
    category: "Quantum"
  },
  {
    term: "Photonics",
    definition: "The physical science of light (photon) generation, detection, and manipulation through emission, transmission, modulation, signal processing, switching, amplification, and sensing.",
    category: "Applications"
  },
  {
    term: "Raman Spectroscopy",
    definition: "A spectroscopic technique used to determine vibrational modes of molecules. In diamond synthesis, it is used to verify the quality and stress of the carbon lattice.",
    category: "Metrology"
  },
  {
    term: "AFM",
    definition: "Atomic Force Microscopy. A type of high-resolution scanning probe microscopy that can see things smaller than a nanometer.",
    category: "Metrology"
  },
  {
    term: "Isotopic Purity",
    definition: "The concentration of a specific isotope (e.g., Carbon-12) within a material, critical for minimizing magnetic noise in quantum applications.",
    category: "Materials Science"
  }
].sort((a, b) => a.term.localeCompare(b.term));

export function Glossary() {
  const [search, setSearch] = useState("");

  const filteredTerms = GLOSSARY_TERMS.filter(item => 
    item.term.toLowerCase().includes(search.toLowerCase()) || 
    item.definition.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-24">
      <SEO 
        title="Technical Glossary" 
        description="A comprehensive technical glossary of terms related to materials science, diamond synthesis (HPHT, CVD), and quantum sensing." 
      />
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-brand-tan font-bold">Reference Material</span>
          <h1 className="text-5xl md:text-7xl font-display leading-[0.9] italic">Technical<br/><span className="not-italic font-bold">Glossary.</span></h1>
          <p className="text-xl font-sans font-light leading-relaxed opacity-60 italic max-w-2xl">
            A comprehensive reference for the terminology governing the next era of synthetic lattice engineering and quantum materials science.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-tan" />
          <input 
            type="text"
            placeholder="Search terminology..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-brand-tan/5 border border-brand-tan/20 rounded-2xl py-6 pl-16 pr-8 font-sans text-lg focus:outline-none focus:border-brand-tan/50 transition-all shadow-inner"
          />
        </div>

        {/* Glossary List */}
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredTerms.map((item, idx) => (
              <motion.div
                key={item.term}
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-10 rounded-[2.5rem] border-brand-tan/10 hover:border-brand-tan/40 hover:shadow-2xl hover:shadow-brand-tan/5 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-tan/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 relative z-10">
                  <div className="md:w-1/3 space-y-4">
                    <div className="inline-block px-3 py-1 bg-brand-tan/10 rounded-full">
                      <span className="text-[9px] uppercase font-sans font-bold tracking-[0.2em] text-brand-tan block">{item.category}</span>
                    </div>
                    <h2 className="text-4xl font-display font-bold dark:text-brand-cream group-hover:text-brand-tan transition-colors tracking-tighter">{item.term}</h2>
                  </div>
                  <div className="md:w-2/3 border-l border-brand-tan/10 md:pl-16">
                    <p className="font-sans text-xl font-light leading-relaxed opacity-70 italic dark:text-brand-cream/80">
                      {item.definition}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredTerms.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 space-y-4"
            >
              <Book className="h-12 w-12 text-brand-tan mx-auto opacity-20" />
              <p className="font-sans text-sm uppercase tracking-widest opacity-40">No matching terms found in our records.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
