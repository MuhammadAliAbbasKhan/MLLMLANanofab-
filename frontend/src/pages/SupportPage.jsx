import React, { useState } from 'react';
import { HelpCircle, FileText, Video, BookOpen, ChevronDown, ChevronUp, Zap, CheckCircle2 } from 'lucide-react';

export const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: 'What is the main advantage of Maskless Lithography over traditional Photolithography?',
      a: 'Maskless Lithography eliminates the requirement for physical quartz photomasks, dramatically lowering prototyping costs and turnaround time from weeks to minutes. You can modify CAD GDSII files and immediately expose wafers.'
    },
    {
      q: 'How does the NanoFrazor thermal probe achieve sub-10nm resolution?',
      a: 'The NanoFrazor utilizes an ultra-sharp heated silicon tip mounted on a micro-cantilever. Heat locally sublimates thermally sensitive resist (PPA) with sub-10nm precision without high-energy electron beam radiation or substrate charging.'
    },
    {
      q: 'Which laser wavelengths are supported on MLLMLANanofab systems?',
      a: 'Our systems support 375nm (UV diode for high resolution), 405nm (high power for standard resists), and 532nm (green laser for specialized optical materials).'
    },
    {
      q: 'Can I export exposure recipes from the online DESIGNER simulator to physical tools?',
      a: 'Yes! The DESIGNER tool generates standardized JSON exposure matrices and GDSII layer maps compatible with MLA 150, MLA 300, DWL 66+, and NanoFrazor cleanroom controllers.'
    }
  ];

  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', background: 'rgba(0, 229, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0, 229, 255, 0.3)', marginBottom: '0.75rem' }}>
            <HelpCircle size={15} /> Cleanroom Process & Technical Support
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>
            Process Engineering <span style={{ color: '#00E5FF' }}>Support Hub</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', marginTop: '0.5rem' }}>
            Handbook, resist exposure parameters, maintenance protocols, and frequently asked questions.
          </p>
        </div>

        {/* Support Resources Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <BookOpen size={32} color="#00E5FF" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.5rem' }}>Process Handbook</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Complete exposure dose charts for PMMA, SU-8, ZEP 520A, AZ series, and thermal resists across silicon, glass, and GaAs.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <Video size={32} color="#00E5FF" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.5rem' }}>Video Tutorials & Tips</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Step-by-step cleanroom calibration videos, write-head alignment, pneumatic substrate loading, and focus tuning.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <FileText size={32} color="#00E5FF" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFF', marginBottom: '0.5rem' }}>System Calibration</h3>
            <p style={{ color: '#CBD5E1', fontSize: '0.85rem', lineHeight: 1.6 }}>
              Maintenance protocols, laser diode intensity power calibration, auto-focus optical sensor tuning, and field distortion maps.
            </p>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#FFF', textAlign: 'center', marginBottom: '2rem' }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{ borderRadius: '12px', overflow: 'hidden', transition: 'all 0.2s' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    color: '#FFF',
                    fontWeight: 600,
                    fontSize: '1rem',
                    display: 'flex',
                    justify: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={18} color="#00E5FF" /> : <ChevronDown size={18} color="#94A3B8" />}
                </button>

                {openFaq === idx && (
                  <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1rem' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportPage;
