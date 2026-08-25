import React, { useState } from 'react';
import { Search, X, ArrowRight, Zap, Layers, Cpu, HelpCircle, FileText } from 'lucide-react';

export const SearchModal = ({ isOpen, onClose, setCurrentPage }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchItems = [
    { title: 'MLA 150 Maskless Aligner', category: 'Products', route: 'products', desc: 'Flexible high-precision maskless exposure system for cleanroom R&D.' },
    { title: 'MLA 300 High Throughput', category: 'Products', route: 'products', desc: 'Automated 200mm/300mm wafer industrial manufacturing tool.' },
    { title: 'DWL 66+ Direct Write Lithography', category: 'Products', route: 'products', desc: 'High-resolution optical laser pattern generator with multi-wavelength laser sources.' },
    { title: 'NanoFrazor Thermal Probe Nanofabrication', category: 'Products', route: 'products', desc: 'Sub-10nm thermal scanning probe (t-SPL) for quantum devices and 2D materials.' },
    { title: 'Interactive Laser Optics Simulator Canvas', category: 'DESIGNER', route: 'designer', desc: 'Real-time 2D laser exposure, NA calculation, spot size, and energy dosage simulator.' },
    { title: 'Quantum Devices & Qubits', category: 'Applications', route: 'applications', desc: 'Nanoscale patterning of superconducting circuits and quantum dots.' },
    { title: 'Micro-Optics & Grayscale 3D', category: 'Applications', route: 'applications', desc: '2.5D diffractive optical elements, microlens arrays, and blazed gratings.' },
    { title: 'Process Engineering Handbook', category: 'Support', route: 'support', desc: 'Resist specs (SU-8, PMMA, AZ series), exposure matrices, and development guidelines.' },
    { title: 'Admin Executive Console', category: 'Admin', route: 'admin', desc: 'Analytics dashboard, user management, and service request tracking.' }
  ];

  const filtered = searchItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (route) => {
    setCurrentPage(route);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(4, 13, 26, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '5rem', padding: '1rem' }}>
      <div style={{ background: '#0F2342', border: '1px solid rgba(0, 229, 255, 0.4)', borderRadius: '16px', maxWidth: '640px', width: '100%', padding: '1.5rem', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', position: 'relative' }}>
        
        {/* Search Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <Search size={20} color="#00E5FF" />
          <input
            type="text"
            autoFocus
            placeholder="Search products, technologies, applications, handbook..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ flex: 1, background: 'none', border: 'none', outline: 'none', color: '#FFF', fontSize: '1.1rem' }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}>
            <X size={20} />
          </button>
        </div>

        {/* Results list */}
        <div style={{ maxHeight: '380px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(item.route)}
                style={{
                  padding: '0.75rem 1rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0, 229, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.1rem 0.4rem', borderRadius: '4px', background: 'rgba(0,229,255,0.15)', color: '#00E5FF', border: '1px solid rgba(0,229,255,0.3)', textTransform: 'uppercase' }}>
                      {item.category}
                    </span>
                    <span style={{ color: '#FFF', fontWeight: 600, fontSize: '0.95rem' }}>{item.title}</span>
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{item.desc}</p>
                </div>
                <ArrowRight size={16} color="#00E5FF" />
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#64748B' }}>
              No matching lithography records found for "{query}".
            </div>
          )}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '1rem', paddingTop: '0.75rem', fontSize: '0.75rem', color: '#64748B', display: 'flex', justifyContent: 'space-between' }}>
          <span>Press ESC to exit</span>
          <span>MLLMLANanofab Search Engine v2.4</span>
        </div>
      </div>
    </div>
  );
};
