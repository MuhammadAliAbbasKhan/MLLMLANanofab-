import React from 'react';
import { Award, Globe, ShieldCheck, Zap, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage = ({ onOpenTrial }) => {
  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', background: 'rgba(0, 229, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0, 229, 255, 0.3)', marginBottom: '0.75rem' }}>
            <Award size={15} /> Company & Technology Heritage
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>
            About <span style={{ color: '#00E5FF' }}>MLLMLANanofab</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', marginTop: '0.5rem' }}>
            Pioneering precision maskless lithography and thermal scanning probe nanofabrication for over 40 years.
          </p>
        </div>

        {/* Global Hubs Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <Globe size={32} color="#00E5FF" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.5rem' }}>Heidelberg HQ & Cleanrooms</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Primary opto-mechanical engineering headquarters and ISO 5 cleanroom manufacturing facility in Heidelberg, Germany.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <Zap size={32} color="#00E5FF" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.5rem' }}>Zurich Nanofab Center</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Specialized R&D hub for Thermal Scanning Probe Lithography (t-SPL NanoFrazor platform) in Zurich, Switzerland.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <Users size={32} color="#00E5FF" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.5rem' }}>Boston & Shanghai Labs</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Application support cleanrooms and field engineering service hubs serving North America and Asia-Pacific.
            </p>
          </div>
        </div>

        {/* Quality & Certifications */}
        <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px', border: '1px solid rgba(0,229,255,0.3)', marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
                Uncompromising German Precision & Quality
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Every MLLMLANanofab maskless aligner and laser direct-write tool is assembled under strict ISO 9001:2015 quality standards, utilizing ultra-stable granite bases, interferometric stage feedback, and high-NA optical elements.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={onOpenTrial} className="btn-primary">
                  Request Cleanroom Demonstration
                </button>
              </div>
            </div>

            <div style={{ background: 'rgba(6,16,30,0.8)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontWeight: 700, color: '#00E5FF', marginBottom: '0.75rem', fontSize: '0.9rem' }}>MEMBERSHIPS & CERTIFICATIONS</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#CBD5E1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#10B981" /> ISO 9001:2015 Quality Management Certified</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#10B981" /> EPIC European Photonics Industry Consortium</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#10B981" /> OpTecBB Optics & Photonics Association</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#10B981" /> IEEE Photonics Society Corporate Member</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
