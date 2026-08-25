import React from 'react';
import { ShieldCheck, FileText, Lock, ArrowLeft } from 'lucide-react';

export const LegalPage = ({ type = 'legal-notice', setCurrentPage }) => {
  const titles = {
    'legal-notice': 'Legal Notice (Impressum)',
    'privacy-statement': 'Privacy Statement & GDPR Policy',
    'terms-conditions': 'Terms & Conditions of Sale',
    'service-specification': 'System Service Specifications',
    'how-to-order': 'How to Order & Procurement Guide'
  };

  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0', minHeight: '75vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <button
          onClick={() => setCurrentPage('home')}
          style={{ background: 'none', border: 'none', color: '#00E5FF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer', marginBottom: '1.5rem' }}
        >
          <ArrowLeft size={16} /> Back to Home
        </button>

        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px', border: '1px solid rgba(0,229,255,0.3)' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFF', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            {titles[type] || 'Legal Information'}
          </h1>

          <div style={{ color: '#CBD5E1', lineHeight: 1.8, fontSize: '0.95rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              <strong>MLLMLANanofab GmbH</strong> (Heidelberg Instruments Replica Architecture)<br />
              Cleanroom Optics Avenue 42, 69120 Heidelberg, Germany<br />
              Registration Court: District Court of Heidelberg HRB 704812<br />
              VAT ID: DE 814 920 119
            </p>

            <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1. Scope & Technology Rights</h3>
            <p style={{ marginBottom: '1rem' }}>
              All lithography systems, optical canvas simulations, GDSII layout pre-check algorithms, and specifications described herein conform to international laser safety (Class 1 laser enclosure) and semiconductor ISO standards.
            </p>

            <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>2. Data Protection & GDPR Compliance</h3>
            <p style={{ marginBottom: '1rem' }}>
              Personal data collected during registration, trial requests, and Stripe payment transactions are stored securely in encrypted SQLite tables and synchronized to MongoDB Cloud Atlas over TLS 1.3. No user layout files are shared with third parties.
            </p>

            <h3 style={{ color: '#FFF', fontSize: '1.2rem', marginTop: '1.5rem', marginBottom: '0.5rem' }}>3. Order Procurement & Delivery</h3>
            <p style={{ marginBottom: '1rem' }}>
              Software simulation licenses are delivered instantaneously upon Stripe PaymentIntent validation. Physical cleanroom lithography tools (MLA 150, MLA 300, DWL 66+, NanoFrazor) include factory acceptance testing (FAT) and site acceptance testing (SAT).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LegalPage;
