import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export const BasicsPage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Lithography Optics <span style={{ color: '#00E5FF' }}>Basics & Fundamentals</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', color: '#CBD5E1', lineHeight: 1.7 }}>
        <p style={{ marginBottom: '1rem' }}>
          Direct write photolithography projects laser patterns onto light-sensitive resist films. The resolution is governed by Abbe's diffraction limit: w0 = λ / (π · NA).
        </p>
      </div>
    </div>
  </div>
);
export default BasicsPage;
