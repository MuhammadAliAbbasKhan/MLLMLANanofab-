import React from 'react';
import { Layers, CheckCircle2, ArrowRight } from 'lucide-react';

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
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: '#F8FAFC', color: '#1D252E', paddingTop: '80px' }}>
      
      {/* Banner */}
      <section style={{
        position: 'relative',
        minHeight: '220px',
        background: 'linear-gradient(135deg, #333F4C 0%, #1D252E 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '3rem 0',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <span style={{ color: '#DA2B1F', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Industry & Research Solutions
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
            Nanofabrication Applications
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            From quantum devices and 2D materials to micro-optics and MEMS sensors, explore MLLMLANanofab technology solutions.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {applications.map((app, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '0.25rem' }}>{app.title}</h3>
                <div style={{ fontSize: '0.85rem', color: '#DA2B1F', fontWeight: 600, marginBottom: '1rem' }}>{app.subtitle}</div>
                <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>{app.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#4B5563' }}>
                  {app.highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} color="#DA2B1F" /> {h}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => setCurrentPage('designer')}
                style={{
                  width: '100%',
                  padding: '0.65rem',
                  background: '#333F4C',
                  color: 'white',
                  borderRadius: '4px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.4rem',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#DA2B1F'}
                onMouseLeave={(e) => e.target.style.background = '#333F4C'}
              >
                Simulate Exposure Parameters <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default ApplicationsPage;
