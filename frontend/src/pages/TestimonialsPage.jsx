import React from 'react';
import { Award } from 'lucide-react';

export const TestimonialsPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Customer <span style={{ color: '#00E5FF' }}>Testimonials</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', color: '#CBD5E1', fontStyle: 'italic' }}>
        "The MLA 150 has transformed our cleanroom workflow. We eliminated mask turnaround time entirely and achieved 0.5 micron feature resolution consistently."
        <div style={{ fontStyle: 'normal', color: '#00E5FF', fontWeight: 700, marginTop: '0.75rem' }}>— Dr. Hans Weber, Max Planck Institute for Quantum Optics</div>
      </div>
    </div>
  </div>
);
export default TestimonialsPage;
