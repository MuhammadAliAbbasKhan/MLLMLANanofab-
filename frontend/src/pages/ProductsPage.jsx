import React, { useState } from 'react';
import { Cpu, CheckCircle2, ArrowRight, Zap, Layers, Sparkles, Download } from 'lucide-react';

export const ProductsPage = ({ setCurrentPage, onOpenTrial }) => {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 'mla150',
      category: 'maskless',
      name: 'MLA 150 Maskless Aligner',
      tagline: 'The Industry Standard for Cleanroom Maskless Exposure',
      resolution: '< 0.6 µm',
      wavelength: '375 nm / 405 nm Dual Laser',
      substrateSize: 'Up to 150 mm x 150 mm',
      writeSpeed: '100 mm² / min',
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
      desc: 'Fully automated industrial maskless aligner with robotic wafer handling, optical distortion compensation, and 24/7 continuous production reliability.',
      badge: 'INDUSTRIAL HIGH-THROUGHPUT'
    },
    {
      id: 'dwl66',
      category: 'direct-write',
      name: 'DWL 66+ Laser Lithography System',
      tagline: 'High-Resolution Direct Write & 3D Grayscale',
      resolution: 'down to 300 nm',
      wavelength: '375 nm / 405 nm / 532 nm',
      substrateSize: '200 mm x 200 mm',
      writeSpeed: 'Var. Write Heads (10mm to 2mm)',
      desc: 'Versatile direct-write laser lithography system for high-resolution mask making, 2.5D micro-optics patterning, and advanced materials research.',
      badge: 'ADVANCED GRAYSCALE 3D'
    },
    {
      id: 'dwl2000',
      category: 'direct-write',
      name: 'DWL 2000 / 4000 GS Grayscale',
      tagline: 'Large-Area Grayscale Optical Lithography',
      resolution: '500 nm',
      wavelength: '405 nm Diode Laser',
      substrateSize: '400 mm x 400 mm Large Area',
      writeSpeed: 'Multi-Beam Exposure Array',
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
      desc: 'Breakthrough thermal scanning probe platform. Pattern fragile 2D materials (graphene, MoS2, WSe2) with zero charging or radiation damage.',
      badge: 'SUB-10NM QUANTUM'
    }
  ];

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter(p => p.category === activeTab);

  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', background: 'rgba(0, 229, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0, 229, 255, 0.3)', marginBottom: '0.75rem' }}>
            <Cpu size={15} /> Lithography & Nanofabrication Product Catalog
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>
            Lithography <span style={{ color: '#00E5FF' }}>Systems & Tools</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', marginTop: '0.5rem' }}>
            Explore Heidelberg Instruments replica product lines: Maskless Aligners, Direct Write Laser Lithography, and Thermal Probe Nanofabrication.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => setActiveTab('all')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              background: activeTab === 'all' ? '#00E5FF' : 'rgba(255,255,255,0.06)',
              color: activeTab === 'all' ? '#040D1A' : '#CBD5E1',
              border: activeTab === 'all' ? 'none' : '1px solid rgba(255,255,255,0.1)'
            }}
          >
            All Lithography Systems
          </button>

          <button
            onClick={() => setActiveTab('maskless')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              background: activeTab === 'maskless' ? '#00E5FF' : 'rgba(255,255,255,0.06)',
              color: activeTab === 'maskless' ? '#040D1A' : '#CBD5E1',
              border: activeTab === 'maskless' ? 'none' : '1px solid rgba(255,255,255,0.1)'
            }}
          >
            Maskless Aligners (MLA)
          </button>

          <button
            onClick={() => setActiveTab('direct-write')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              background: activeTab === 'direct-write' ? '#00E5FF' : 'rgba(255,255,255,0.06)',
              color: activeTab === 'direct-write' ? '#040D1A' : '#CBD5E1',
              border: activeTab === 'direct-write' ? 'none' : '1px solid rgba(255,255,255,0.1)'
            }}
          >
            Direct Write Laser (DWL)
          </button>

          <button
            onClick={() => setActiveTab('tspl')}
            style={{
              padding: '0.6rem 1.25rem',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              background: activeTab === 'tspl' ? '#00E5FF' : 'rgba(255,255,255,0.06)',
              color: activeTab === 'tspl' ? '#040D1A' : '#CBD5E1',
              border: activeTab === 'tspl' ? 'none' : '1px solid rgba(255,255,255,0.1)'
            }}
          >
            Thermal Probe (NanoFrazor)
          </button>
        </div>

        {/* Product Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="glass-panel" style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(0,229,255,0.15)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.3)', display: 'inline-block', marginBottom: '0.75rem' }}>
                  {prod.badge}
                </span>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', marginBottom: '0.25rem' }}>{prod.name}</h3>
                <div style={{ fontSize: '0.95rem', color: '#00E5FF', fontWeight: 600, marginBottom: '1rem' }}>{prod.tagline}</div>
                <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{prod.desc}</p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button onClick={onOpenTrial} className="btn-primary">
                    <Sparkles size={16} /> Request System Trial
                  </button>
                  <button onClick={() => setCurrentPage('designer')} className="btn-outline">
                    Test in Optics Simulator
                  </button>
                </div>
              </div>

              {/* Technical Specifications Specs Table Box */}
              <div style={{ background: 'rgba(6, 16, 30, 0.8)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(0,229,255,0.2)' }}>
                <h4 style={{ color: '#FFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  Technical Specifications
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Min. Resolution:</span>
                    <strong style={{ color: '#00E5FF' }}>{prod.resolution}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Laser Source:</span>
                    <strong style={{ color: '#FFF' }}>{prod.wavelength}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Substrate Size:</span>
                    <strong style={{ color: '#FFF' }}>{prod.substrateSize}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#94A3B8' }}>Write Speed:</span>
                    <strong style={{ color: '#FFF' }}>{prod.writeSpeed}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductsPage;
