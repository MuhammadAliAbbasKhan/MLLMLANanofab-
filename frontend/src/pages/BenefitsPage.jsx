import React from 'react';
import { Award, Zap, CheckCircle2 } from 'lucide-react';

export const BenefitsPage = ({ setCurrentPage }) => {
  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
          Maskless Lithography <span style={{ color: '#00E5FF' }}>Key Benefits</span>
        </h1>
        <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          Why multi-user cleanrooms worldwide choose maskless exposure over physical photomasks.
        </p>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#CBD5E1' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 color="#00E5FF" /> Zero photomask cost: save $1,000+ per mask revision</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 color="#00E5FF" /> Rapid iteration: modify CAD layouts and expose in minutes</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 color="#00E5FF" /> High flexibility: expose any substrate size from 5mm to 300mm</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 color="#00E5FF" /> Multi-user software interface with individual user profiles</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
