export interface Material {
  id: string;
  name: string;
  description: string;
  category: string;
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
}

export const materials: Material[] = [
  {
    id: 'hpht-industrial',
    name: 'HPHT Industrial Diamond',
    category: 'Industrial',
    description: 'High-Pressure High-Temperature synthesized diamonds optimized for maximum thermal conductivity and abrasive durability. Ideal for extreme industrial environments.',
    specifications: [
      { label: 'Thermal Conductivity', value: '2200 W/mK' },
      { label: 'Purity', value: '99.99%' },
      { label: 'Hardness', value: '100 GPa' },
      { label: 'Isotopic Control', value: 'Standard / High' }
    ],
    applications: ['Precision Tooling', 'Heat Sinks', 'Abrasives']
  },
  {
    id: 'cvd-optical',
    name: 'CVD Optical Grade',
    category: 'Optical',
    description: 'Chemical Vapor Deposition grown diamond windows with uncompromising clarity and sub-nanometer surface roughness. Designed for high-power laser applications.',
    specifications: [
      { label: 'Surface Roughness', value: '< 0.5 nm' },
      { label: 'Optical Absorption', value: '< 0.05 cm⁻¹ @ 10.6μm' },
      { label: 'Dimensions', value: 'Up to 100mm dia' },
      { label: 'Transmittance', value: 'High UV-FIR' }
    ],
    applications: ['Laser Windows', 'Optical Lenses', 'Broadband Windows']
  },
  {
    id: 'quantum-scaffolding',
    name: 'Quantum Grade Scaffolding',
    category: 'Quantum',
    description: 'Specialized carbon lattices with precisely engineered defect centers (NV, SiV). Grown in controlled environments to ensure isotopic purity and spin coherence.',
    specifications: [
      { label: 'Defect Density', value: 'Controlled (ppb range)' },
      { label: 'Isotopic Purity', value: '99.999% ¹²C' },
      { label: 'Strain Control', value: '< 10⁻⁵' },
      { label: 'Coherence Time', value: 'Optimized for Spin' }
    ],
    applications: ['Quantum Sensing', 'Quantum Computing', 'Research']
  },
  {
    id: 'technical-minerals',
    name: 'Technical Mineral Synthesis',
    category: 'Specialized',
    description: 'Custom-engineered technical minerals for specific industrial requirements, including experimental lattices and doped crystal structures.',
    specifications: [
      { label: 'Crystal Structure', value: 'Custom engineered' },
      { label: 'Doping Precision', value: 'Sub-ppm control' },
      { label: 'Yield', value: 'Batch optimized' },
      { label: 'Compatibility', value: 'Industrial standard' }
    ],
    applications: ['Experimental Science', 'Semiconductors', 'Defense']
  }
];
