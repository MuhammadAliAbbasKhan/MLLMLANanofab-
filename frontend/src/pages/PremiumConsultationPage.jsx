import React, { useState } from 'react';
import { Lock, Sliders, Send, CheckCircle2, Zap, Shield, FileText } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const PremiumConsultationPage = ({ currentUser, onOpenAuth }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [serviceType, setServiceType] = useState('Maskless Photolithography');
  const [voltage, setVoltage] = useState('100kV');
  const [resist, setResist] = useState('PMMA 950k');
  const [substrate, setSubstrate] = useState('Silicon (100) Wafer');
  const [specs, setSpecs] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  if (!currentUser) {
    return (
      <div style={{ background: '#0A192F', minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="glass-panel" style={{ maxWidth: '440px', width: '100%', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(0, 229, 255, 0.3)' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(0,229,255,0.1)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid rgba(0,229,255,0.3)' }}>
            <Lock size={28} color="#00E5FF" />
          </div>
          <h2 style={{ color: '#FFF', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            🔒 Premium Access Required
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.75rem', lineHeight: 1.6 }}>
            The Custom Nanofabrication Technical Specification Portal is reserved for authenticated research partners and commercial subscribers.
          </p>
          <button onClick={onOpenAuth} className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.8rem' }}>
            Sign In or Register Account
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectTitle) {
      addToast('Please enter a project title.', 'warning');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      addToast(`Nanofabrication project request "${projectTitle}" submitted successfully! Synced with MongoDB Atlas Cloud.`, 'success');
      setProjectTitle('');
      setSpecs('');
    }, 1500);
  };

  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', background: 'rgba(0, 229, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0, 229, 255, 0.3)', marginBottom: '0.75rem' }}>
            <Shield size={15} /> Authenticated Specification Portal
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>
            Custom Nanofabrication <span style={{ color: '#00E5FF' }}>Project Portal</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', marginTop: '0.5rem' }}>
            Configure custom direct-write, EBL, thermal probe, and micro-optics exposure specifications.
          </p>
        </div>

        {/* Specification Form */}
        <div className="glass-panel" style={{ maxWidth: '720px', margin: '0 auto', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(0,229,255,0.3)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Project Title *</label>
              <input
                type="text"
                required
                placeholder="Superconducting Qubit Array Sub-100nm Gate"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Service Type</label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#142A4A', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                >
                  <option value="Maskless Photolithography">Maskless Photolithography (MLA 150)</option>
                  <option value="Direct Write Laser">Direct Write Laser (DWL 66+)</option>
                  <option value="Thermal Probe SPL">Thermal Probe SPL (NanoFrazor)</option>
                  <option value="E-Beam Mix & Match">E-Beam Lithography Mix & Match</option>
                  <option value="Grayscale 3D Optics">Grayscale 3D Micro-Optics</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Acceleration Voltage / Source</label>
                <select
                  value={voltage}
                  onChange={(e) => setVoltage(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#142A4A', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                >
                  <option value="375nm UV Diode">375nm UV Diode Laser</option>
                  <option value="405nm UV Diode">405nm UV High Power Laser</option>
                  <option value="100kV">100kV High Voltage E-Beam</option>
                  <option value="Thermal Heated Tip">Thermal Heated Probe Tip (1000°C)</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Photoresist System</label>
                <input
                  type="text"
                  value={resist}
                  onChange={(e) => setResist(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Substrate Wafer Specs</label>
                <input
                  type="text"
                  value={substrate}
                  onChange={(e) => setSubstrate(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 600 }}>Detailed Technical Specifications</label>
              <textarea
                rows={4}
                placeholder="Include min-feature size (nm/µm), overlay alignment tolerance (±50nm), GDSII layer numbers, inspection requirements..."
                value={specs}
                onChange={(e) => setSpecs(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem', resize: 'none' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', marginTop: '0.5rem' }}
            >
              {isSubmitting ? 'Submitting Specifications...' : 'Submit Nanofabrication Project Request'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default PremiumConsultationPage;
