import React from 'react';
import { Layers, Zap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

export const ApplicationsPage = ({ setCurrentPage }) => {
  const applications = [
    {
      title: 'Quantum Devices & Qubits',
      subtitle: 'Nanoscale Patterning of Superconducting Circuits',
      desc: 'Fabricate superconducting qubits, Josephson junctions, and quantum dots with high overlay accuracy and minimal substrate heating.',
      highlights: ['Sub-10nm thermal probe resolution', 'Zero charging on sensitive substrates', 'Closed-loop in-situ AFM control']
    },
    {
      title: '2D Materials & Graphene Nanodevices',
      subtitle: 'Zero Radiation Damage Patterning',
      desc: 'Pattern 2D materials like Graphene, MoS2, WSe2, and hBN flakes without damaging atomic monolayers.',
      highlights: ['Thermal scanning probe lithography', 'Direct contact write on exfoliated flakes', 'High-throughput contacts writing']
    },
    {
      title: 'Micro-Optics & Grayscale 3D Topography',
      subtitle: 'Diffractive Optical Elements & Microlenses',
      desc: 'Create smooth continuous 2.5D optical topographies, blazed diffraction gratings, and micro-lens arrays using DWL grayscale exposure modes.',
      highlights: ['Continuous 2.5D profile depth control', 'Ultra-low surface roughness < 2nm', 'Large-area optical arrays up to 400mm']
    },
    {
      title: 'MEMS & Sensor Fabrication',
      subtitle: 'Rapid Prototyping of Micro-Sensors',
      desc: 'Maskless direct alignment for accelerometers, pressure sensors, micro-cantilevers, and micro-actuators.',
      highlights: ['Front-to-backside wafer alignment', 'Thick photoresist exposure (SU-8 > 100µm)', 'Fast turnaround without photomask delays']
    },
    {
      title: 'Biotechnology & Nanofluidics',
      subtitle: 'Lab-on-a-Chip & Neuronal Guidance',
      desc: 'Engineered microfluidic channels, cell traps, and bio-compatible scaffolds for drug delivery and single-cell analysis.',
      highlights: ['Sub-micron fluidic channel resolution', 'Bio-compatible polymer compatibility', 'Multi-level fluidic hierarchy']
    },
    {
      title: 'Semiconductors & Advanced Packaging',
      subtitle: 'Mix and Match Photolithography',
      desc: 'Ideal for chip repair, rework, bump patterning, and heterogenous integration packaging.',
      highlights: ['Sub-micron mix & match alignment', 'Die-level dynamic scaling & distortion correction', 'Fast layout iteration']
    }
  ];

  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', background: 'rgba(0, 229, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0, 229, 255, 0.3)', marginBottom: '0.75rem' }}>
            <Layers size={15} /> Industry & Research Applications
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>
            Nanofabrication <span style={{ color: '#00E5FF' }}>Applications</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', marginTop: '0.5rem' }}>
            From quantum technologies and 2D materials to micro-optics and MEMS sensors.
          </p>
        </div>

        {/* Applications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {applications.map((app, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFF', marginBottom: '0.25rem' }}>{app.title}</h3>
                <div style={{ fontSize: '0.85rem', color: '#00E5FF', fontWeight: 600, marginBottom: '1rem' }}>{app.subtitle}</div>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{app.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
                  {app.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={14} color="#00E5FF" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={() => setCurrentPage('designer')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}>
                Simulate Exposure Parameters <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ApplicationsPage;
