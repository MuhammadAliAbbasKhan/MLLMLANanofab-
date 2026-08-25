import React from 'react';
import { Activity } from 'lucide-react';

export const ChangelogPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Software <span style={{ color: '#00E5FF' }}>Changelog & Release Notes</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', color: '#CBD5E1' }}>
        <h4 style={{ color: '#00E5FF' }}>v2.6.0 (2026-08)</h4>
        <p style={{ fontSize: '0.9rem', marginTop: '0.25rem' }}>Added real-time diffraction Rayleigh envelope calculations to 2D Physics Canvas. Integrated dual SQLite + MongoDB Atlas Cloud synchronization.</p>
      </div>
    </div>
  </div>
);
export default ChangelogPage;
