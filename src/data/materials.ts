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
    id: 'cvd-tooling',
    name: 'CVD for Cutting Tools',
    category: 'Tooling',
    description: 'CVD diamond for cutting inserts and wear parts. Extreme hardness and wear resistance for precision machining and long edge life.',
    specifications: [
      { label: 'Process', value: 'CVD' },
      { label: 'Key property', value: 'Hardness / wear resistance' },
      { label: 'Thermal Conductivity', value: 'High' },
      { label: 'Form', value: 'Blanks / coated solutions' }
    ],
    applications: ['Cutting inserts', 'Precision machining', 'Wear parts']
  },
  {
    id: 'cvd-thermal',
    name: 'CVD for Thermal Management',
    category: 'Cooling',
    description: 'Heat sinks and heat spreaders with high thermal conductivity and low thermal expansion — for chips, data centers, GaN devices, and power electronics.',
    specifications: [
      { label: 'Process', value: 'CVD' },
      { label: 'Thermal Conductivity', value: 'Very high' },
      { label: 'Thermal Expansion', value: 'Low' },
      { label: 'Form', value: 'Plates / custom shapes' }
    ],
    applications: ['Data center cooling', 'Chip heat sinks', 'GaN / LED / RF thermal', 'Power electronics']
  },
  {
    id: 'cvd-semiconductor',
    name: 'CVD for Semiconductors',
    category: 'Semiconductor',
    description: 'CVD diamond for substrates and high-power electronics. Wide bandgap, high carrier mobility, and strong heat handling versus Si and SiC in demanding cases.',
    specifications: [
      { label: 'Process', value: 'CVD' },
      { label: 'Use cases', value: 'RF, optoelectronics, power' },
      { label: 'Form', value: 'Wafers / thermal parts' },
      { label: 'Supply', value: 'Prototype to production' }
    ],
    applications: ['RF amplifiers', 'Power devices', 'Laser diodes / LEDs', 'Die-attach & test']
  },
  {
    id: 'cvd-research',
    name: 'CVD for Research & Custom Work',
    category: 'Research',
    description: 'Custom CVD diamond for universities and engineering teams studying thermal, electronic, and materials performance.',
    specifications: [
      { label: 'Process', value: 'CVD' },
      { label: 'Scope', value: 'Custom specs' },
      { label: 'Support', value: 'Technical collaboration' },
      { label: 'Volume', value: 'Lab to pilot' }
    ],
    applications: ['University labs', 'Substrate studies', 'Pilot thermal projects']
  }
];
