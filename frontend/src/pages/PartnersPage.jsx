import React from 'react';
import { Globe, Users } from 'lucide-react';

export const PartnersPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Global Research <span style={{ color: '#00E5FF' }}>Partners</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', color: '#CBD5E1' }}>
        <p>Partnered with leading nanotechnology institutes including Max Planck Institute, MIT Nano, ETH Zurich, Tsinghua University, and Harvard CNS.</p>
      </div>
    </div>
  </div>
);
export default PartnersPage;
