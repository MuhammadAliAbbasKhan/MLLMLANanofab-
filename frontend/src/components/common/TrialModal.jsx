import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const TrialModal = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [systemChoice, setSystemChoice] = useState('MLA 150');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !fullName) {
      addToast('Please fill in your name and work email.', 'warning');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      addToast(`Evaluation trial license request submitted for ${systemChoice}! Our application engineers will contact you shortly.`, 'success');
      onClose();
    }, 1200);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(4, 13, 26, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#0F2342', border: '1px solid rgba(0, 229, 255, 0.4)', borderRadius: '16px', maxWidth: '480px', width: '100%', padding: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', position: 'relative' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,229,255,0.1)', color: '#00E5FF', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0,229,255,0.3)', marginBottom: '0.5rem' }}>
            <Sparkles size={14} /> Evaluation License
          </div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700 }}>
            Request 30-Day System Evaluation
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            Experience full maskless exposure simulation & GDSII pattern conversion.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>Full Name *</label>
            <input
              type="text"
              required
              placeholder="Dr. Alexander Vance"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: '100%', padding: '0.6rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.85rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>Institutional Email *</label>
            <input
              type="email"
              required
              placeholder="alexander@cleanroom-lab.de"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.6rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.85rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>Organization / Cleanroom Facility</label>
            <input
              type="text"
              placeholder="Center for Nano-Optics"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              style={{ width: '100%', padding: '0.6rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.85rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>Target System Architecture</label>
            <select
              value={systemChoice}
              onChange={(e) => setSystemChoice(e.target.value)}
              style={{ width: '100%', padding: '0.6rem', background: '#142A4A', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '0.85rem' }}
            >
              <option value="MLA 150">MLA 150 Maskless Aligner</option>
              <option value="MLA 300">MLA 300 High Throughput Industrial</option>
              <option value="DWL 66+">DWL 66+ Direct Write Lithography</option>
              <option value="NanoFrazor">NanoFrazor Thermal Probe (t-SPL)</option>
              <option value="Grayscale 3D">DWL 2000 GS Grayscale 3D</option>
            </select>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>Research Application Notes</label>
            <textarea
              rows={2}
              placeholder="Brief details about substrate types, resists (PMMA, SU-8), minimum feature sizes required..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ width: '100%', padding: '0.6rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.85rem', resize: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', marginTop: '0.3rem' }}
          >
            {isSubmitting ? 'Sending Request...' : 'Submit Trial License Request'}
          </button>
        </form>
      </div>
    </div>
  );
};
