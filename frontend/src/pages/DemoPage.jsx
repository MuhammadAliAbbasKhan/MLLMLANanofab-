import React from 'react';
import { Sparkles } from 'lucide-react';

export const DemoPage = ({ onOpenTrial }) => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Request Live System <span style={{ color: '#00E5FF' }}>Demo</span>
      </h1>
      <p style={{ color: '#CBD5E1', marginBottom: '2rem' }}>Schedule an interactive online session with our cleanroom application engineers.</p>
      <button onClick={onOpenTrial} className="btn-primary">Schedule Demonstration</button>
    </div>
  </div>
);
export default DemoPage;
