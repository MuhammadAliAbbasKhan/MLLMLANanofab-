import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const PremiumConsultationPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('Cleanroom consultation request received! An application engineer will contact you within 24 hours.', 'success');
  };

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
            Process Engineering Consultation
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
            Book Application Engineering Consultation
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            Schedule a 1-on-1 session with MLLMLANanofab senior lithography engineers to review your wafer stack, resist recipe, or GDSII layout.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ background: 'white', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle2 size={48} color="#10B981" style={{ marginBottom: '1rem' }} />
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#333F4C', marginBottom: '0.5rem' }}>
                  Consultation Request Confirmed!
                </h2>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  We've reserved your slot. An MLLMLANanofab lithography specialist will reach out to confirm calendar invite & NDAs.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ padding: '0.65rem 1.5rem', background: '#333F4C', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer' }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', borderBottom: '1px solid #E2E8F0', paddingBottom: '0.75rem', marginBottom: '0.5rem' }}>
                  Project & Contact Details
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>Full Name</label>
                    <input type="text" required placeholder="Dr. Jane Doe" style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>Institution / Organization</label>
                    <input type="text" required placeholder="Quantum Research Lab" style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }} />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>Work Email Address</label>
                  <input type="email" required placeholder="jane.doe@quantum-lab.org" style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }} />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>Primary Application Area</label>
                  <select style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem', color: '#1D252E' }}>
                    <option>Quantum Qubits & Superconducting Circuits</option>
                    <option>2D Materials (Graphene / MoS2)</option>
                    <option>Micro-Optics & Grayscale 3D Topography</option>
                    <option>MEMS & Sensors</option>
                    <option>Semiconductor Photomasks</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>Project Description & Technical Requirements</label>
                  <textarea rows={4} placeholder="Describe substrate size, resist thickness, min feature resolution required..." style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }} />
                </div>

                <button
                  type="submit"
                  style={{ width: '100%', padding: '0.8rem', background: '#DA2B1F', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', fontSize: '0.95rem', cursor: 'pointer', transition: 'background 0.3s', marginTop: '0.5rem' }}
                  onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                  onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
                >
                  Schedule Expert Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
};

export default PremiumConsultationPage;
