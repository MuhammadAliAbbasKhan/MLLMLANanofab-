import React, { useState } from 'react';
import { Zap, Send, Linkedin, Youtube, Twitter, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const Footer = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const { addToast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      addToast('Please enter a valid email address for newsletter subscription.', 'warning');
      return;
    }
    addToast('Thank you for subscribing to MLLMLANanofab technology updates!', 'success');
    setEmail('');
  };

  const navigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#070F1E', borderTop: '1px solid rgba(0, 229, 255, 0.15)', color: '#94A3B8', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        {/* 4-Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2.5rem', marginBottom: '3.5rem' }}>
          
          {/* Column 1: Brand, Newsletter & Contact */}
          <div>
            <div onClick={() => navigate('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #00E5FF 0%, #0284C7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} color="#040D1A" strokeWidth={2.5} />
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                MLLMLA<span style={{ color: '#00E5FF' }}>Nanofab</span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', lineHeight: '1.6', marginBottom: '1.5rem', color: '#CBD5E1' }}>
              World-leading manufacturer of maskless laser lithography, direct write systems, and thermal scanning probe nanofabrication tools.
            </p>

            <form onSubmit={handleNewsletterSubmit} style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: '#00E5FF', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                Sign up for our Newsletter *
              </label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '6px',
                    padding: '0.5rem 0.75rem',
                    color: '#F8FAFC',
                    fontSize: '0.85rem',
                    outline: 'none'
                  }}
                />
                <button
                  type="submit"
                  style={{
                    background: '#00E5FF',
                    color: '#040D1A',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.5rem 0.75rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Send size={15} />
                </button>
              </div>
            </form>

            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.5rem' }}>
                Follow us on social media
              </span>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a href="#linkedin" style={{ background: 'rgba(255,255,255,0.06)', p: '0.5rem', borderRadius: '50%', color: '#00E5FF', display: 'flex', padding: '8px' }}><Linkedin size={16} /></a>
                <a href="#youtube" style={{ background: 'rgba(255,255,255,0.06)', p: '0.5rem', borderRadius: '50%', color: '#00E5FF', display: 'flex', padding: '8px' }}><Youtube size={16} /></a>
                <a href="#twitter" style={{ background: 'rgba(255,255,255,0.06)', p: '0.5rem', borderRadius: '50%', color: '#00E5FF', display: 'flex', padding: '8px' }}><Twitter size={16} /></a>
                <a href="#global" style={{ background: 'rgba(255,255,255,0.06)', p: '0.5rem', borderRadius: '50%', color: '#00E5FF', display: 'flex', padding: '8px' }}><Globe size={16} /></a>
              </div>
            </div>
          </div>

          {/* Column 2: Products & Systems */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem', borderLeft: '3px solid #00E5FF', paddingLeft: '0.5rem' }}>
              Products & Systems
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li><button onClick={() => navigate('products')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>MLA 150 Maskless Aligner</button></li>
              <li><button onClick={() => navigate('products')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>MLA 300 High-Throughput System</button></li>
              <li><button onClick={() => navigate('products')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>DWL 66+ Direct Write Lithography</button></li>
              <li><button onClick={() => navigate('products')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>DWL 2000 / 4000 GS Grayscale</button></li>
              <li><button onClick={() => navigate('products')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>NanoFrazor t-SPL Nanopatterning</button></li>
              <li><button onClick={() => navigate('products')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>Micro-Optics Fabrication Tools</button></li>
              <li><button onClick={() => navigate('designer')} style={{ background: 'none', color: '#00E5FF', fontWeight: 600, textAlign: 'left' }}>Interactive Optics Simulator ⚡</button></li>
            </ul>
          </div>

          {/* Column 3: Applications */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem', borderLeft: '3px solid #00E5FF', paddingLeft: '0.5rem' }}>
              Key Applications
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
              <li><button onClick={() => navigate('applications')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>Quantum Devices & Qubits</button></li>
              <li><button onClick={() => navigate('applications')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>2D Materials (Graphene, MoS2)</button></li>
              <li><button onClick={() => navigate('applications')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>Micro-Optics & Grayscale 3D</button></li>
              <li><button onClick={() => navigate('applications')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>MEMS & Sensor Fabrication</button></li>
              <li><button onClick={() => navigate('applications')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>Semiconductors & IC Packaging</button></li>
              <li><button onClick={() => navigate('applications')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>Biotechnology & Nanofluidics</button></li>
            </ul>
          </div>

          {/* Column 4: Legal & Corporate */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem', borderLeft: '3px solid #00E5FF', paddingLeft: '0.5rem' }}>
              Legal & Support
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', textTransform: 'uppercase' }}>
              <li><button onClick={() => navigate('legal-notice')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>LEGAL NOTICE</button></li>
              <li><button onClick={() => navigate('privacy-statement')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>PRIVACY STATEMENT</button></li>
              <li><button onClick={() => navigate('terms-conditions')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>TERMS & CONDITIONS</button></li>
              <li><button onClick={() => navigate('service-specification')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>SERVICE SPECIFICATION</button></li>
              <li><button onClick={() => navigate('how-to-order')} style={{ background: 'none', color: '#CBD5E1', textAlign: 'left' }}>HOW TO ORDER</button></li>
              <li><button onClick={() => navigate('admin')} style={{ background: 'none', color: '#00E5FF', fontWeight: 600, textAlign: 'left', textTransform: 'none', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><ShieldCheck size={14} /> Admin Portal</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: '#64748B' }}>
          <div>
            Copyright © 2026 MLLMLANanofab GmbH (Heidelberg Instruments Replica). All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span>ISO 9001:2015 Certified Cleanroom Optics</span>
            <span>Made in Germany & Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
