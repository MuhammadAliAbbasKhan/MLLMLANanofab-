import React from 'react';
import { BookOpen } from 'lucide-react';

export const HandbookPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Process Engineering <span style={{ color: '#00E5FF' }}>Handbook</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', color: '#CBD5E1' }}>
        <p>Complete resist matrices: PMMA 950k, SU-8 2000 series, AZ 1500, ZEP 520A, and thermal PPA resist parameters.</p>
      </div>
    </div>
  </div>
);
export default HandbookPage;
