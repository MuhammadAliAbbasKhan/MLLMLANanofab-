import React from 'react';
import { MLAOpticsCanvas } from '../components/canvas/MLAOpticsCanvas';
import { Zap, Sliders, ShieldCheck, ArrowRight, Sparkles, CheckCircle2, Award, Cpu, Layers, Globe, Activity } from 'lucide-react';

export const HomePage = ({ setCurrentPage, onOpenTrial, onOpenAuth }) => {
  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '4rem 0 5rem 0', background: 'radial-gradient(circle at 50% 20%, rgba(0, 229, 255, 0.15) 0%, rgba(10, 25, 47, 0) 70%)', borderBottom: '1px solid rgba(0, 229, 255, 0.15)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0, 229, 255, 0.1)', color: '#00E5FF', border: '1px solid rgba(0, 229, 255, 0.3)', padding: '0.35rem 0.9rem', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.25rem' }}>
              <Zap size={16} /> Next-Generation Maskless Laser Lithography & Nanofabrication
            </div>

            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.25rem', color: '#FFFFFF' }}>
              Maskless Lithography & <span style={{ background: 'linear-gradient(135deg, #00E5FF 0%, #0284C7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Direct Write Optics</span> Systems
            </h1>

            <p style={{ fontSize: '1.15rem', color: '#CBD5E1', lineHeight: 1.6, marginBottom: '2rem' }}>
              Replicating Heidelberg Instruments' world-renowned precision: MLA 150 Maskless Aligners, DWL Direct Write Lithography, and NanoFrazor Thermal Scanning Probe tools for quantum computing, micro-optics, and semiconductor innovation.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <button onClick={() => setCurrentPage('designer')} className="btn-primary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
                <Sliders size={18} /> Launch Optics Simulator (DESIGNER)
              </button>

              <button onClick={onOpenTrial} className="btn-secondary" style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}>
                <Sparkles size={18} color="#00E5FF" /> Request 30-Day Evaluation
              </button>

              <button onClick={() => setCurrentPage('products')} className="btn-outline" style={{ padding: '0.85rem 1.5rem', fontSize: '1rem' }}>
                Explore Systems <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Simulation Hero Preview */}
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <MLAOpticsCanvas />
          </div>
        </div>
      </section>

      {/* Statistics Highlights */}
      <section style={{ padding: '3rem 0', background: '#070F1E', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00E5FF' }}>&lt; 0.5 µm</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.25rem', fontWeight: 500 }}>Min Maskless Laser Feature Size</div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00E5FF' }}>Sub-10 nm</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.25rem', fontWeight: 500 }}>NanoFrazor t-SPL Resolution</div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00E5FF' }}>1,500+</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.25rem', fontWeight: 500 }}>Cleanroom Installations Worldwide</div>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#00E5FF' }}>99.9%</div>
              <div style={{ fontSize: '0.85rem', color: '#94A3B8', marginTop: '0.25rem', fontWeight: 500 }}>Exposure Alignment Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured System Portfolio */}
      <section style={{ padding: '5rem 0', background: '#0A192F' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span style={{ color: '#00E5FF', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Core Product Lines
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '0.5rem', color: '#FFF' }}>
              High-Precision Lithography Portfolio
            </h2>
            <p style={{ color: '#94A3B8', marginTop: '0.5rem' }}>
              Engineered for rapid prototyping, maskmaking, grayscale micro-optics, and industrial wafer manufacturing.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* System Card 1 */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', background: 'rgba(0,229,255,0.1)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                  MASKLESS ALIGNER
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFF', marginBottom: '0.75rem' }}>
                  MLA 150 Maskless Aligner
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  The gold standard maskless lithography system for cleanrooms. Direct exposure without photomasks, dual laser wavelengths (375nm & 405nm), and real-time auto-focus.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#00E5FF" /> Sub-micron feature resolution (&lt; 0.6 µm)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#00E5FF" /> Substrate sizes up to 150mm x 150mm</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#00E5FF" /> High-speed exposure: 100 mm²/min</li>
                </ul>
              </div>
              <button onClick={() => setCurrentPage('products')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                System Specs & Brochure <ArrowRight size={14} />
              </button>
            </div>

            {/* System Card 2 */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#A855F7', background: 'rgba(168, 85, 247, 0.1)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                  DIRECT WRITE OPTICAL
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFF', marginBottom: '0.75rem' }}>
                  DWL 66+ Laser Lithography
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Ultimate flexibility direct-write system with high-resolution write heads, advanced 2.5D grayscale exposure mode, and multi-laser source switching.
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#A855F7" /> Minimum feature size down to 300 nm</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#A855F7" /> 2.5D 3D Grayscale profile patterning</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#A855F7" /> Interchangeable write heads (10mm to 2mm)</li>
                </ul>
              </div>
              <button onClick={() => setCurrentPage('products')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                System Specs & Brochure <ArrowRight size={14} />
              </button>
            </div>

            {/* System Card 3 */}
            <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#22C55E', background: 'rgba(34, 197, 94, 0.1)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1rem' }}>
                  THERMAL SCANNING PROBE
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#FFF', marginBottom: '0.75rem' }}>
                  NanoFrazor (t-SPL)
                </h3>
                <p style={{ color: '#CBD5E1', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Sub-10nm thermal scanning probe lithography (t-SPL). In-situ topography imaging with zero radiation damage to fragile 2D materials (graphene, MoS2, quantum dots).
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#22C55E" /> Sub-10nm ultra-high resolution</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#22C55E" /> In-situ AFM topography closed-loop control</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#22C55E" /> Ideal for sensitive quantum nanodevices</li>
                </ul>
              </div>
              <button onClick={() => setCurrentPage('products')} className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                System Specs & Brochure <ArrowRight size={14} />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(135deg, #0F2342 0%, #06101E 100%)', borderTop: '1px solid rgba(0,229,255,0.2)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFF', marginBottom: '1rem' }}>
            Ready to Accelerate Your Nanofabrication Workflow?
          </h2>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', marginBottom: '2rem' }}>
            Try our online optics simulation tools, explore process handbooks, or schedule a custom technical consultation with our engineering team in Heidelberg.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button onClick={() => setCurrentPage('designer')} className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
              Launch Optics Simulator
            </button>
            <button onClick={() => setCurrentPage('premium-consultation')} className="btn-outline" style={{ padding: '0.75rem 1.5rem' }}>
              Request Custom Nanofab Project 🔒
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
