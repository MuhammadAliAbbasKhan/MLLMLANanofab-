import React, { useState } from 'react';
import {
  Search,
  Globe,
  User,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Sliders,
  Sparkles,
  Layers,
  Activity,
  Award
} from 'lucide-react';

export const Header = ({ currentPage, setCurrentPage, currentUser, onOpenAuth, onOpenSearch, onLogout }) => {
  const [lang, setLang] = useState('EN');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#0A192F', borderBottom: '1px solid rgba(0, 229, 255, 0.2)' }}>
      {/* Top Utility Bar */}
      <div style={{ background: '#06101E', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: '0.8rem', padding: '0.35rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: '#94A3B8' }}>
            <span style={{ color: '#00E5FF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <Zap size={14} /> Heidelberg Lithography Replica Engine
            </span>
            <span className="hide-mobile">Global R&D Hub: Heidelberg • Boston • Zurich • Shanghai</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#CBD5E1', padding: '0.2rem 0.6rem', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem' }}
            >
              <Search size={13} color="#00E5FF" />
              <span>Search systems & applications...</span>
              <kbd style={{ background: 'rgba(0,0,0,0.3)', padding: '0.1rem 0.3rem', borderRadius: '3px', fontSize: '0.65rem', border: '1px solid rgba(255,255,255,0.1)' }}>⌘K</kbd>
            </button>

            {/* Language Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <button
                onClick={() => setLang('DE')}
                style={{ padding: '0.15rem 0.4rem', fontSize: '0.7rem', background: lang === 'DE' ? '#00E5FF' : 'transparent', color: lang === 'DE' ? '#040D1A' : '#94A3B8', fontWeight: lang === 'DE' ? 700 : 400 }}
              >
                DE
              </button>
              <button
                onClick={() => setLang('EN')}
                style={{ padding: '0.15rem 0.4rem', fontSize: '0.7rem', background: lang === 'EN' ? '#00E5FF' : 'transparent', color: lang === 'EN' ? '#040D1A' : '#94A3B8', fontWeight: lang === 'EN' ? 700 : 400 }}
              >
                EN
              </button>
            </div>

            {/* User Auth Widget */}
            {currentUser ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#00E5FF', fontWeight: 600, fontSize: '0.8rem', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                  <User size={13} /> {currentUser.name || currentUser.username || 'Dr. Engineer'}
                </span>
                <span style={{ background: 'rgba(0, 229, 255, 0.15)', color: '#00E5FF', padding: '0.1rem 0.4rem', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700, border: '1px solid rgba(0, 229, 255, 0.3)' }}>
                  {(currentUser.plan_tier || 'Academic').toUpperCase()}
                </span>
                <button
                  onClick={onLogout}
                  title="Sign Out"
                  style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#EF4444', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}
                >
                  <LogOut size={12} /> Logout
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="btn-outline"
                style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}
              >
                Sign In / Register
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.8rem 1.5rem' }}>
        {/* Brand Logo */}
        <div onClick={() => handleNavClick('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #00E5FF 0%, #0284C7 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px rgba(0, 229, 255, 0.4)' }}>
            <Zap size={24} color="#040D1A" strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.03em', lineHeight: 1 }}>
              MLLMLA<span style={{ color: '#00E5FF' }}>Nanofab</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#94A3B8', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '2px' }}>
              Maskless Lithography Systems
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button
            onClick={() => handleNavClick('home')}
            style={{ color: currentPage === 'home' ? '#00E5FF' : '#E2E8F0', background: 'none', fontWeight: 600, fontSize: '0.95rem' }}
          >
            Home
          </button>

          {/* Products Dropdown */}
          <div style={{ position: 'relative' }} onMouseEnter={() => setActiveDropdown('products')} onMouseLeave={() => setActiveDropdown(null)}>
            <button
              onClick={() => handleNavClick('products')}
              style={{ color: currentPage === 'products' ? '#00E5FF' : '#E2E8F0', background: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}
            >
              Products <ChevronDown size={14} />
            </button>
            {activeDropdown === 'products' && (
              <div style={{ position: 'absolute', top: '100%', left: 0, width: '280px', background: '#0F2342', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', padding: '0.5rem', zIndex: 100 }}>
                <div onClick={() => handleNavClick('products')} style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', cursor: 'pointer', color: '#F8FAFC', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,229,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ fontWeight: 600, color: '#00E5FF', fontSize: '0.9rem' }}>MLA Series (Maskless Aligners)</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>MLA 150 & MLA 300 High Throughput</div>
                </div>
                <div onClick={() => handleNavClick('products')} style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', cursor: 'pointer', color: '#F8FAFC' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,229,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ fontWeight: 600, color: '#00E5FF', fontSize: '0.9rem' }}>DWL Series (Direct Write)</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>DWL 66+ & DWL 2000 GS Grayscale</div>
                </div>
                <div onClick={() => handleNavClick('products')} style={{ padding: '0.5rem 0.75rem', borderRadius: '6px', cursor: 'pointer', color: '#F8FAFC' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,229,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
                  <div style={{ fontWeight: 600, color: '#00E5FF', fontSize: '0.9rem' }}>NanoFrazor (t-SPL Nanopatterning)</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Sub-10nm Thermal Scanning Probe</div>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('applications')}
            style={{ color: currentPage === 'applications' ? '#00E5FF' : '#E2E8F0', background: 'none', fontWeight: 600, fontSize: '0.95rem' }}
          >
            Applications
          </button>

          <button
            onClick={() => handleNavClick('shop')}
            style={{ color: currentPage === 'shop' ? '#00E5FF' : '#E2E8F0', background: 'none', fontWeight: 600, fontSize: '0.95rem' }}
          >
            Shop & Pricing
          </button>

          <button
            onClick={() => handleNavClick('support')}
            style={{ color: currentPage === 'support' ? '#00E5FF' : '#E2E8F0', background: 'none', fontWeight: 600, fontSize: '0.95rem' }}
          >
            Process & Support
          </button>

          <button
            onClick={() => handleNavClick('about')}
            style={{ color: currentPage === 'about' ? '#00E5FF' : '#E2E8F0', background: 'none', fontWeight: 600, fontSize: '0.95rem' }}
          >
            Company
          </button>

          {/* Special Action: DESIGNER Physics Canvas Simulator */}
          <button
            onClick={() => handleNavClick('designer')}
            className="btn-primary"
            style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
          >
            <Sliders size={15} /> DESIGNER
          </button>

          {/* Admin Dashboard */}
          <button
            onClick={() => handleNavClick('admin')}
            style={{ color: currentPage === 'admin' ? '#00E5FF' : '#94A3B8', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.75rem', borderRadius: '6px', fontWeight: 600, fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <ShieldCheck size={14} color="#00E5FF" /> Admin 🛡️
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hide-desktop"
          style={{ background: 'none', border: 'none', color: '#F8FAFC' }}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Slide-Out Menu */}
      {mobileMenuOpen && (
        <div style={{ background: '#0F2342', borderBottom: '1px solid rgba(0,229,255,0.3)', padding: '1rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <button onClick={() => handleNavClick('home')} style={{ textAlign: 'left', color: '#F8FAFC', padding: '0.5rem', fontWeight: 600 }}>Home</button>
          <button onClick={() => handleNavClick('designer')} style={{ textAlign: 'left', color: '#00E5FF', padding: '0.5rem', fontWeight: 700 }}>DESIGNER (Laser Optics Simulator)</button>
          <button onClick={() => handleNavClick('products')} style={{ textAlign: 'left', color: '#F8FAFC', padding: '0.5rem', fontWeight: 600 }}>Products & Systems</button>
          <button onClick={() => handleNavClick('applications')} style={{ textAlign: 'left', color: '#F8FAFC', padding: '0.5rem', fontWeight: 600 }}>Applications</button>
          <button onClick={() => handleNavClick('shop')} style={{ textAlign: 'left', color: '#F8FAFC', padding: '0.5rem', fontWeight: 600 }}>Shop & Pricing</button>
          <button onClick={() => handleNavClick('support')} style={{ textAlign: 'left', color: '#F8FAFC', padding: '0.5rem', fontWeight: 600 }}>Process & Support</button>
          <button onClick={() => handleNavClick('about')} style={{ textAlign: 'left', color: '#F8FAFC', padding: '0.5rem', fontWeight: 600 }}>Company</button>
          <button onClick={() => handleNavClick('admin')} style={{ textAlign: 'left', color: '#00E5FF', padding: '0.5rem', fontWeight: 600 }}>Admin Console 🛡️</button>
        </div>
      )}
    </header>
  );
};
