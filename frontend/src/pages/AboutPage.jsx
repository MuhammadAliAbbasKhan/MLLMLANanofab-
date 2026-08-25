import React from 'react';
import { Award, Globe, Users, CheckCircle2 } from 'lucide-react';

export const AboutPage = ({ onOpenTrial }) => {
  return (
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: '#F8FAFC', color: '#1D252E', paddingTop: '80px' }}>
      
      {/* Banner */}
      <section style={{
        position: 'relative',
        minHeight: '220px',
        background: 'linear-gradient(135deg, #333F4C 0%, #1D252E 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '3rem 0',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <span style={{ color: '#DA2B1F', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Company & Technology Heritage
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
            About MLLMLANanofab
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            Pioneering precision maskless laser lithography, direct writing systems, and thermal scanning probe nanofabrication for over 40 years.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <Globe size={32} color="#DA2B1F" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '0.5rem' }}>Global Cleanroom HQ</h3>
              <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Primary opto-mechanical engineering headquarters and ISO 5 cleanroom manufacturing facility in Heidelberg, Germany.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <Award size={32} color="#DA2B1F" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '0.5rem' }}>Zurich Nanofab Center</h3>
              <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Specialized R&D hub for Thermal Scanning Probe Lithography (t-SPL NanoFrazor platform) in Zurich, Switzerland.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <Users size={32} color="#DA2B1F" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '0.5rem' }}>Boston & Shanghai Labs</h3>
              <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Application support cleanrooms and field engineering service hubs serving North America and Asia-Pacific.
              </p>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '8px', padding: '3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '1rem' }}>
                  German Precision & Quality Standard
                </h2>
                <p style={{ color: '#4B5563', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Every MLLMLANanofab maskless aligner and laser direct-write tool is assembled under strict ISO 9001:2015 quality standards, utilizing ultra-stable granite bases, interferometric stage feedback, and high-NA optical elements.
                </p>
                <button
                  onClick={onOpenTrial}
                  style={{ padding: '0.75rem 1.5rem', background: '#DA2B1F', color: 'white', borderRadius: '4px', border: 'none', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
                  onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                  onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
                >
                  Request Cleanroom Demonstration
                </button>
              </div>

              <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <div style={{ fontWeight: 700, color: '#DA2B1F', marginBottom: '0.75rem', fontSize: '0.9rem' }}>MEMBERSHIPS & CERTIFICATIONS</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#4B5563' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10B981" /> ISO 9001:2015 Quality Management Certified</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10B981" /> EPIC European Photonics Industry Consortium</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10B981" /> OpTecBB Optics & Photonics Association</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><CheckCircle2 size={16} color="#10B981" /> IEEE Photonics Society Corporate Member</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default AboutPage;
