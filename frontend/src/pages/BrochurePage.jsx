import React from 'react';
import { Download, FileText } from 'lucide-react';

export const BrochurePage = () => (
  <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
    <div className="container" style={{ maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
        Product <span style={{ color: '#00E5FF' }}>Brochures & Specs</span>
      </h1>
      <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <strong style={{ color: '#FFF' }}>MLA 150 Technical Brochure (PDF)</strong>
            <p style={{ color: '#94A3B8', fontSize: '0.8rem' }}>12 pages detailed specifications & exposure matrices</p>
          </div>
          <button className="btn-outline" style={{ fontSize: '0.8rem' }}><Download size={14} /> Download</button>
        </div>
      </div>
    </div>
  </div>
);
export default BrochurePage;
