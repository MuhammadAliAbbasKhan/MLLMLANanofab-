import React from 'react';
import { Video } from 'lucide-react';

export const TutorialsPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Interactive <span style={{ color: '#00E5FF' }}>Tutorials & Guides</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', color: '#CBD5E1' }}>
        <p>Tutorial 101: Preparing GDSII layouts for MLA 150 maskless exposure. Tutorial 102: Calibrating dose arrays for SU-8 resist.</p>
      </div>
    </div>
  </div>
);
export default TutorialsPage;
