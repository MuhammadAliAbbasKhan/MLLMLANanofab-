import React from 'react';
import { Sliders, Zap, CheckCircle2 } from 'lucide-react';

export const FunctionsPage = ({ setCurrentPage }) => {
  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
          Maskless Lithography <span style={{ color: '#00E5FF' }}>System Functions</span>
        </h1>
        <p style={{ color: '#CBD5E1', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          Key functional capabilities of MLLMLANanofab direct-write optical exposure engines.
        </p>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', color: '#CBD5E1' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 color="#00E5FF" /> Real-time optical auto-focus during high-speed laser writing</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 color="#00E5FF" /> Dynamic Spatial Light Modulator (SLM) gray-tone intensity modulation</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 color="#00E5FF" /> Automated global & local mark alignment matching &lt; 100nm</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><CheckCircle2 color="#00E5FF" /> Substrate edge detection and wafer tilt compensation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FunctionsPage;
