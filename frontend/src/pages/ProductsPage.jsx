import React, { useState } from 'react';
import { Cpu, CheckCircle2, ChevronRight, Download } from 'lucide-react';

export const ProductsPage = ({ setCurrentPage, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 'mla150',
      category: 'maskless',
      name: 'MLA 150 Maskless Aligner',
      tagline: 'The Industry Standard for Cleanroom Maskless Exposure',
      resolution: '< 0.45 µm',
      wavelength: '375 nm / 405 nm Dual Laser',
      substrateSize: 'Up to 150 mm x 150 mm',
      writeSpeed: '100 mm² / min',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_MLA150-2025_840x740.webp',
      desc: 'High-speed, highly flexible maskless aligner designed for multi-user facilities, rapid prototyping, and low-volume production. Features real-time optical focus compensation.',
      badge: 'POPULAR CLEANROOM CHOICE'
    },
    {
      id: 'mla300',
      category: 'maskless',
      name: 'MLA 300 Industrial Maskless Aligner',
      tagline: 'High-Throughput Wafer Production System',
      resolution: '< 1.0 µm',
      wavelength: '405 nm High-Power Laser',
      substrateSize: '200 mm / 300 mm Wafer Loader',
      writeSpeed: '500 mm² / min',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_MLA300B-2025_840x740.webp',
      desc: 'Fully automated industrial maskless aligner with robotic wafer handling, optical distortion compensation, and 24/7 continuous production reliability.',
      badge: 'INDUSTRIAL HIGH-THROUGHPUT'
    },
    {
      id: 'dwl66',
      category: 'direct-write',
      name: 'DWL 66+ Laser Lithography System',
      tagline: 'High-Resolution Direct Write & 3D Grayscale',
      resolution: 'down to 200 nm',
      wavelength: '375 nm / 405 nm / 532 nm',
      substrateSize: '200 mm x 200 mm',
      writeSpeed: 'Var. Write Heads (10mm to 2mm)',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_DWL66-2025_840x740.webp',
      desc: 'Versatile direct-write laser lithography system for high-resolution mask making, 2.5D micro-optics patterning, and advanced materials research.',
      badge: 'ADVANCED GRAYSCALE 3D'
    },
    {
      id: 'dwl2000',
      category: 'direct-write',
      name: 'DWL 2000 GS / DWL 4000 GS Grayscale',
      tagline: 'Large-Area Grayscale Optical Lithography',
      resolution: '500 nm',
      wavelength: '405 nm Diode Laser',
      substrateSize: '400 mm x 400 mm Large Area',
      writeSpeed: 'Multi-Beam Exposure Array',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_DWL4000GS-2025_840x740.webp',
      desc: 'Industrial large-area grayscale lithography system for micro-lens arrays, diffractive optical elements (DOEs), and holography.',
      badge: 'MICRO-OPTICS LEADER'
    },
    {
      id: 'nanofrazor',
      category: 'tspl',
      name: 'NanoFrazor Thermal Probe Nanofabrication',
      tagline: 'Sub-10nm Thermal Scanning Probe Lithography (t-SPL)',
      resolution: '< 10 nm',
      wavelength: 'Ultra-Sharp Heated Silicon Probe Tip',
      substrateSize: '100 mm x 100 mm',
      writeSpeed: 'Closed-Loop AFM In-Situ Imaging',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/05/2024-05-HIMT_NF_840x740_web.webp',
      desc: 'Breakthrough thermal scanning probe platform. Pattern fragile 2D materials (graphene, MoS2, WSe2) with zero charging or radiation damage.',
      badge: 'SUB-10NM QUANTUM'
    }
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: '#F8FAFC', color: '#1D252E', paddingTop: '80px' }}>
      
      {/* Page Header Banner */}
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
            Products & Systems Catalog
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
            MLLMLANanofab Lithography Systems
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            Discover our high-precision maskless aligners, direct-write optical tools, and thermal scanning probe systems engineered for research and industrial wafer fabrication.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ padding: '2rem 0', background: 'white', borderBottom: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Lithography Systems' },
            { id: 'maskless', label: 'Maskless Aligners (MLA)' },
            { id: 'direct-write', label: 'Direct Write Laser (DWL)' },
            { id: 'tspl', label: 'Thermal Probe (NanoFrazor)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
                background: activeTab === tab.id ? '#DA2B1F' : '#F1F5F9',
                color: activeTab === tab.id ? 'white' : '#333F4C',
                border: 'none'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section style={{ padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              style={{
                background: 'white',
                borderRadius: '8px',
                padding: '2rem',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                border: '1px solid #E2E8F0',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                alignItems: 'center'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <img
                  src={prod.image}
                  alt={prod.name}
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', maxHeight: '280px', objectFit: 'contain' }}
                />
              </div>

              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: '4px', background: '#FFF5F5', color: '#DA2B1F', border: '1px solid #FCA5A5', display: 'inline-block', marginBottom: '0.75rem' }}>
                  {prod.badge}
                </span>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#333F4C', marginBottom: '0.25rem' }}>{prod.name}</h2>
                <div style={{ fontSize: '0.95rem', color: '#DA2B1F', fontWeight: 600, marginBottom: '1rem' }}>{prod.tagline}</div>
                <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{prod.desc}</p>
                
                <div style={{ background: '#F8FAFC', padding: '1rem', borderRadius: '6px', border: '1px solid #E2E8F0', marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div><span style={{ color: '#6B7280' }}>Min Resolution:</span> <strong style={{ color: '#DA2B1F' }}>{prod.resolution}</strong></div>
                  <div><span style={{ color: '#6B7280' }}>Laser Source:</span> <strong>{prod.wavelength}</strong></div>
                  <div><span style={{ color: '#6B7280' }}>Substrate Size:</span> <strong>{prod.substrateSize}</strong></div>
                  <div><span style={{ color: '#6B7280' }}>Write Speed:</span> <strong>{prod.writeSpeed}</strong></div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={onOpenTrial}
                    style={{ padding: '0.65rem 1.5rem', background: '#DA2B1F', color: 'white', borderRadius: '4px', fontWeight: '600', border: 'none', cursor: 'pointer', transition: 'background 0.3s' }}
                    onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                    onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
                  >
                    Request Evaluation Trial
                  </button>
                  <button
                    onClick={() => setCurrentPage('designer')}
                    style={{ padding: '0.65rem 1.5rem', background: '#333F4C', color: 'white', borderRadius: '4px', fontWeight: '600', border: 'none', cursor: 'pointer', transition: 'background 0.3s' }}
                    onMouseEnter={(e) => e.target.style.background = '#1D252E'}
                    onMouseLeave={(e) => e.target.style.background = '#333F4C'}
                  >
                    Launch Optics Simulator
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
};

export default ProductsPage;
