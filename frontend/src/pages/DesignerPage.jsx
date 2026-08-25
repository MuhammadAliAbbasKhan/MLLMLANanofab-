import React, { useState } from 'react';
import { MLAOpticsCanvas } from '../components/canvas/MLAOpticsCanvas';
import { Sliders, Cpu, FileText, CheckCircle2, Zap, Layers, Activity, Download, Upload } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const DesignerPage = () => {
  const [selectedResist, setSelectedResist] = useState('PMMA 950k');
  const [substrate, setSubstrate] = useState('Silicon (100) Wafer');
  const [layerCount, setLayerCount] = useState(1);
  const [isGdsUploaded, setIsGdsUploaded] = useState(false);
  const { addToast } = useToast();

  const handleGdsUpload = () => {
    setIsGdsUploaded(true);
    addToast('GDSII CAD layout uploaded successfully! 24 polygon layers parsed.', 'success');
  };

  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '3rem 0' }}>
      <div className="container">
        
        {/* Title Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', background: 'rgba(0, 229, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0, 229, 255, 0.3)', marginBottom: '0.75rem' }}>
            <Sliders size={15} /> Physical Optics & Exposure Simulation Suite
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>
            MLLMLANanofab <span style={{ color: '#00E5FF' }}>DESIGNER</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', marginTop: '0.5rem' }}>
            Simulate diffraction optics, numerical aperture spot sizes, laser power dosages, and GDSII CAD exposure profiles before cleanroom manufacturing.
          </p>
        </div>

        {/* Physics Canvas Simulation Engine */}
        <div style={{ marginBottom: '3rem' }}>
          <MLAOpticsCanvas />
        </div>

        {/* CAD Layout Pre-checker & Substrate Selector */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          
          {/* Substrate & Resist Parameters */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Layers size={20} color="#00E5FF" /> Substrate & Resist Configuration
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Photoresist / Thermal Resist System
                </label>
                <select
                  value={selectedResist}
                  onChange={(e) => setSelectedResist(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#142A4A', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                >
                  <option value="PMMA 950k">PMMA 950k (Positive E-Beam / UV)</option>
                  <option value="SU-8 2005">SU-8 2005 (Negative Epoxy Thick Resist)</option>
                  <option value="AZ 1518">AZ 1518 (Standard Direct Write Photolithography)</option>
                  <option value="ZEP 520A">ZEP 520A (High Resolution Nanopatterning)</option>
                  <option value="PPA Thermal">PPA Poly(phthalaldehyde) Thermal SPL</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Substrate Base Material
                </label>
                <select
                  value={substrate}
                  onChange={(e) => setSubstrate(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#142A4A', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                >
                  <option value="Silicon (100) Wafer">Silicon (100) P/N Wafer (4" / 6" / 8")</option>
                  <option value="Fused Silica / Quartz">Fused Silica / Quartz (Micro-optics)</option>
                  <option value="Gallium Arsenide (GaAs)">Gallium Arsenide (GaAs Optoelectronics)</option>
                  <option value="Sapphire (Al2O3)">Sapphire (Al2O3 LED / Quantum)</option>
                  <option value="Graphene / SiO2">2D Graphene on 300nm SiO2/Si</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.4rem', fontWeight: 600 }}>
                  Multi-Pass Lithography Layers
                </label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setLayerCount(num)}
                      style={{
                        flex: 1,
                        padding: '0.5rem',
                        borderRadius: '6px',
                        background: layerCount === num ? '#00E5FF' : 'rgba(255,255,255,0.05)',
                        color: layerCount === num ? '#040D1A' : '#CBD5E1',
                        fontWeight: 700,
                        border: 'none'
                      }}
                    >
                      {num} {num === 1 ? 'Layer' : 'Layers'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* GDSII / OASIS CAD Layout Pre-checker */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FileText size={20} color="#00E5FF" /> GDSII / OASIS CAD Pre-Checker
            </h3>

            <p style={{ color: '#CBD5E1', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Upload your GDSII or OASIS CAD pattern file to verify min-feature geometries, polygon grid snap, and estimated write time.
            </p>

            <div style={{ border: '2px dashed rgba(0,229,255,0.3)', borderRadius: '12px', padding: '2rem', textAlign: 'center', background: 'rgba(0,229,255,0.03)', marginBottom: '1.5rem' }}>
              <Upload size={36} color="#00E5FF" style={{ marginBottom: '0.5rem' }} />
              <div style={{ fontSize: '0.9rem', color: '#FFF', fontWeight: 600, marginBottom: '0.25rem' }}>
                {isGdsUploaded ? 'sample_quantum_dots_array.gds' : 'Drag & drop GDSII/OASIS file here'}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginBottom: '1rem' }}>
                Supports .gds, .oas, .cif, .dxf formats up to 500 MB
              </div>
              <button onClick={handleGdsUpload} className="btn-outline" style={{ fontSize: '0.8rem' }}>
                {isGdsUploaded ? '✓ GDSII Uploaded (24 Layers)' : 'Browse CAD Files'}
              </button>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button onClick={() => addToast('Exporting simulation parameters to PDF recipe...', 'info')} className="btn-secondary" style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem' }}>
                <Download size={14} /> Export Recipe PDF
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DesignerPage;
