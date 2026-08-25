import React, { useState } from 'react';
import { HelpCircle, FileText, Video, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

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
            Cleanroom Process & Technical Support
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
            Process Engineering Support Hub
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            Process handbooks, resist exposure matrices, calibration guides, and technical answers from MLLMLANanofab application engineers.
          </p>
        </div>
      </section>

      {/* Support Cards */}
      <section style={{ padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <BookOpen size={32} color="#DA2B1F" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '0.5rem' }}>Process Handbook</h3>
              <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Complete exposure dose charts for PMMA, SU-8, ZEP 520A, AZ series, and thermal resists across silicon, glass, and GaAs.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <Video size={32} color="#DA2B1F" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '0.5rem' }}>Video Tutorials & Tips</h3>
              <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Step-by-step cleanroom calibration videos, write-head alignment, pneumatic substrate loading, and focus tuning.
              </p>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <FileText size={32} color="#DA2B1F" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '0.5rem' }}>System Calibration</h3>
              <p style={{ color: '#4B5563', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Maintenance protocols, laser diode intensity power calibration, auto-focus optical sensor tuning, and field distortion maps.
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333F4C', textAlign: 'center', marginBottom: '2rem' }}>
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  style={{ background: 'white', borderRadius: '8px', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.04)', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1.5rem',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      color: '#333F4C',
                      fontWeight: 600,
                      fontSize: '1rem',
                      display: 'flex',
                      justify: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp size={18} color="#DA2B1F" /> : <ChevronDown size={18} color="#6B7280" />}
                  </button>

                  {openFaq === idx && (
                    <div style={{ padding: '0 1.5rem 1.25rem 1.5rem', color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.6, borderTop: '1px solid #F1F5F9', paddingTop: '1rem' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  );
};

export default SupportPage;
