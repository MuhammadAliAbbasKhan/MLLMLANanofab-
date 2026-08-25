import React from 'react';
import { Video } from 'lucide-react';

export const VideosPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Product Videos & <span style={{ color: '#00E5FF' }}>Demonstrations</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
        <Video size={48} color="#00E5FF" style={{ marginBottom: '1rem' }} />
        <h3 style={{ color: '#FFF', marginBottom: '0.5rem' }}>MLA 150 & NanoFrazor Cleanroom Demos</h3>
        <p style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>Watch high-speed laser writing, automatic alignment mark detection, and thermal probe imaging in action.</p>
      </div>
    </div>
  </div>
);
export default VideosPage;
