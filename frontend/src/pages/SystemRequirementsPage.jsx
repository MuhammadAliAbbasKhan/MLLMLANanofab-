import React from 'react';
import { Cpu } from 'lucide-react';

export const SystemRequirementsPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        System <span style={{ color: '#00E5FF' }}>Requirements & Facilities</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', color: '#CBD5E1' }}>
        <h3 style={{ color: '#FFF', marginBottom: '0.5rem' }}>Cleanroom Environment Specs</h3>
        <p>Class 100 / ISO 5 Cleanroom environment. Temperature stability: ±0.1°C. Compressed air supply: 6 bar. Granite vibration isolation table included.</p>
      </div>
    </div>
  </div>
);
export default SystemRequirementsPage;
