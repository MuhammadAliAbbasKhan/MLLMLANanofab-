import React from 'react';
import { HelpCircle } from 'lucide-react';

export const FAQPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Frequently Asked <span style={{ color: '#00E5FF' }}>Questions</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', color: '#CBD5E1' }}>
        <p>Comprehensive FAQ covering laser wavelengths, pneumatic autofocus calibration, substrate handling, and maintenance contracts.</p>
      </div>
    </div>
  </div>
);
export default FAQPage;
