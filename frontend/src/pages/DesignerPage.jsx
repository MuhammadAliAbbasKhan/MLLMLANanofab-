import React, { useState } from 'react';
import { MLAOpticsCanvas } from '../components/canvas/MLAOpticsCanvas';
import { Sliders, Layers, FileText, Upload, Download, CheckCircle2, Cpu } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const DesignerPage = () => {
  const [selectedResist, setSelectedResist] = useState('PMMA 950k');
  const [substrate, setSubstrate] = useState('Silicon (100) Wafer');
  const [layerCount, setLayerCount] = useState(1);
  const [isGdsUploaded, setIsGdsUploaded] = useState(false);
  const { addToast } = useToast();

  const handleGdsUpload = () => {
    setIsGdsUploaded(true);
    if (addToast) {
      addToast('GDSII CAD layout uploaded successfully! 24 polygon layers parsed.', 'success');
    }
  };

  return (
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: '#F8FAFC', color: '#1D252E', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* Page Header Banner */}
      <section style={{
        position: 'relative',
        minHeight: '200px',
        background: 'linear-gradient(135deg, #333F4C 0%, #1D252E 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '2.5rem 0',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <span style={{ color: '#DA2B1F', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Interactive Simulation Suite
          </span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold', margin: '0.4rem 0' }}>
            MLLMLANanofab DESIGNER Suite
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            Real-time 2D physics optics simulation, laser diffraction spot sizing, exposure dosage profiling, and GDSII CAD pre-checking.
          </p>
        </div>
      </section>

      {/* Physics Simulator Canvas Section */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <MLAOpticsCanvas />
          </div>

          {/* Substrate & GDSII Prechecker Controls */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            
            {/* Substrate & Resist Parameters */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={20} color="#DA2B1F" /> Substrate & Resist Parameters
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Photoresist / Thermal Resist System
                  </label>
                  <select
                    value={selectedResist}
                    onChange={(e) => setSelectedResist(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.9rem' }}
                  >
                    <option value="PMMA 950k">PMMA 950k (Positive E-Beam / UV)</option>
                    <option value="SU-8 2005">SU-8 2005 (Negative Epoxy Thick Resist)</option>
                    <option value="AZ 1518">AZ 1518 (Standard Direct Write Photolithography)</option>
                    <option value="ZEP 520A">ZEP 520A (High Resolution Nanopatterning)</option>
                    <option value="PPA Thermal">PPA Poly(phthalaldehyde) Thermal SPL</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Substrate Base Material
                  </label>
                  <select
                    value={substrate}
                    onChange={(e) => setSubstrate(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.9rem' }}
                  >
                    <option value="Silicon (100) Wafer">Silicon (100) P/N Wafer (4" / 6" / 8")</option>
                    <option value="Fused Silica / Quartz">Fused Silica / Quartz (Micro-optics)</option>
                    <option value="Gallium Arsenide (GaAs)">Gallium Arsenide (GaAs Optoelectronics)</option>
                    <option value="Sapphire (Al2O3)">Sapphire (Al2O3 LED / Quantum)</option>
                    <option value="Graphene / SiO2">2D Graphene on 300nm SiO2/Si</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Multi-Pass Exposure Layers
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setLayerCount(num)}
                        style={{
                          flex: 1,
                          padding: '0.5rem',
                          borderRadius: '4px',
                          background: layerCount === num ? '#DA2B1F' : '#F1F5F9',
                          color: layerCount === num ? 'white' : '#333F4C',
                          fontWeight: 700,
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        {num} {num === 1 ? 'Layer' : 'Layers'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* GDSII CAD Prechecker */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={20} color="#DA2B1F" /> GDSII / OASIS CAD Pre-Checker
              </h3>

              <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Upload your GDSII or OASIS CAD pattern file to verify min-feature geometries, polygon grid snap, and estimated write time.
              </p>

              <div style={{ border: '2px dashed #CBD5E1', borderRadius: '8px', padding: '1.75rem', textAlign: 'center', background: '#F8FAFC', marginBottom: '1.5rem' }}>
                <Upload size={36} color="#DA2B1F" style={{ marginBottom: '0.5rem' }} />
                <div style={{ fontSize: '0.9rem', color: '#333F4C', fontWeight: 600, marginBottom: '0.25rem' }}>
                  {isGdsUploaded ? 'sample_quantum_dots_array.gds' : 'Drag & drop GDSII/OASIS file here'}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#6B7280', marginBottom: '1rem' }}>
                  Supports .gds, .oas, .cif, .dxf formats up to 500 MB
                </div>
                <button
                  onClick={handleGdsUpload}
                  style={{ padding: '0.5rem 1.25rem', background: '#333F4C', color: 'white', border: 'none', borderRadius: '4px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer' }}
                >
                  {isGdsUploaded ? '✓ GDSII Uploaded (24 Layers)' : 'Browse CAD Files'}
                </button>
              </div>

              <button
                onClick={() => {
                  if (addToast) addToast('Exporting simulation parameters to PDF recipe...', 'info');
                }}
                style={{ width: '100%', padding: '0.65rem', background: '#DA2B1F', color: 'white', borderRadius: '4px', border: 'none', fontWeight: '600', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', transition: 'background 0.3s' }}
                onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
              >
                <Download size={14} /> Export Recipe PDF
              </button>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};

export default DesignerPage;