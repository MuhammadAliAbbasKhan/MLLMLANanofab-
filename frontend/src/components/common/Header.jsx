import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, Menu, X, ChevronDown, Linkedin, Youtube, Twitter } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Header({ currentPage, setCurrentPage, currentUser, onOpenAuth, onOpenSearch, onLogout }) {
  const { language, changeLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const headerRef = useRef(null);

  const handleNavClick = (e, pageKey) => {
    if (e && e.preventDefault) e.preventDefault();
    if (setCurrentPage && pageKey) {
      setCurrentPage(pageKey);
    }
    setOpenSubmenu(null);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isMobileMenuOpen]);

  // Navigation data mapping to internal app routes
  const navItems = [
    {
      id: 'applications',
      label: 'Applications',
      page: 'applications',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Applications',
            page: 'applications',
            items: [
              { title: '1D & 2D Materials', page: 'applications' },
              { title: 'Advanced Packaging', page: 'applications' },
              { title: 'Biotechnology and Medical Engineering', page: 'applications' },
              { title: 'Displays', page: 'applications' },
              { title: 'High-Security Printing', page: 'applications' }
            ]
          },
          {
            headline: 'Specialized Fields',
            items: [
              { title: 'Materials Science', page: 'applications' },
              { title: 'MEMS Sensors', page: 'applications' },
              { title: 'Microelectronics & Nanoelectronics', page: 'applications' },
              { title: 'Microfluidics and Nanofluidics', page: 'applications' },
              { title: 'Micro-Optics and Photonics', page: 'applications' }
            ]
          },
          {
            headline: 'Emerging Tech',
            items: [
              { title: 'Nanoimprint Templates', page: 'applications' },
              { title: 'Photomasks Fabrication', page: 'applications' },
              { title: 'Quantum Devices & Qubits', page: 'applications' },
              { title: 'Semiconductors', page: 'applications' },
              { title: 'Sensors Nanopatterning', page: 'applications' }
            ]
          }
        ]
      }
    },
    {
      id: 'products',
      label: 'Products & Systems',
      page: 'products',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Research & Development',
            items: [
              { title: 'µMLA Maskless Aligner', page: 'products' },
              { title: 'MLA 150 Maskless Aligner', page: 'products' },
              { title: 'DWL 66<sup>+</sup> Laser Lithography System', page: 'products' },
              { title: 'VPG 300 DI Maskless Stepper', page: 'products' },
              { title: 'NanoFrazor Nanolithography Tool', page: 'products' }
            ]
          },
          {
            headline: 'Industrial Fabs',
            items: [
              { title: 'MLA 300 Maskless Aligner', page: 'products' },
              { title: 'DWL 2000 GS / DWL 4000 GS', page: 'products' },
              { title: 'VPG<sup>+</sup> 200 / VPG<sup>+</sup> 400 / VPG<sup>+</sup> 800', page: 'products' },
              { title: 'VPG<sup>+</sup> 1400 FPD / VPG<sup>+</sup> 1850 FPD', page: 'products' },
              { title: 'ULTRA Semiconductor Mask Writer', page: 'products' }
            ]
          },
          {
            headline: 'Interactive Tools',
            items: [
              { title: 'Optics & Dosage Simulator', page: 'designer' },
              { title: 'License Plans & Pricing', page: 'shop' }
            ]
          }
        ]
      }
    },
    {
      id: 'designer',
      label: 'DESIGNER Suite',
      page: 'designer',
      hasSubmenu: false
    },
    {
      id: 'shop',
      label: 'Shop & Licenses',
      page: 'shop',
      hasSubmenu: false
    },
    {
      id: 'service',
      label: 'Service & Support',
      page: 'support',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Cleanroom Support',
            items: [
              { title: 'Process Engineering Support', page: 'support' },
              { title: 'Consultation with Engineers', page: 'premium-consultation' },
              { title: 'Service Locations & Labs', page: 'about' },
              { title: 'Frequently Asked Questions', page: 'support' }
            ]
          }
        ]
      }
    },
    {
      id: 'company',
      label: 'Company',
      page: 'about',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'About MLLMLANanofab',
            items: [
              { title: 'About Us', page: 'about' },
              { title: 'Cleanroom Heritage & Quality', page: 'about' },
              { title: 'Executive Dashboard', page: 'admin' },
              { title: 'Legal & Privacy Policy', page: 'legal-notice' }
            ]
          }
        ]
      }
    }
  ];

  const languages = [
    { code: 'EN', page: 'home', active: true },
    { code: '简体中文', page: 'home', active: false },
    { code: '日本語', page: 'home', active: false },
    { code: '한국어', page: 'home', active: false },
    { code: 'Español', page: 'home', active: false },
    { code: 'Français', page: 'home', active: false }
  ];

  const topMenuItems = [
    { label: 'Careers', page: 'about' },
    { label: 'Contact Sales', page: 'premium-consultation' },
    { label: 'Contact Service', page: 'support' }
  ];

  const toggleSubmenu = (id) => {
    setOpenSubmenu(openSubmenu === id ? null : id);
  };

  const toggleMobileSubmenu = (id) => {
    setOpenMobileSubmenu(openMobileSubmenu === id ? null : id);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <header
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: 'white',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Top Bar - Above Header */}
      <div style={{
        background: 'white',
        borderBottom: '1px solid #E5E7EB',
        padding: '0.25rem 0',
        display: 'none',
        '@media (min-width: 1024px)': { display: 'block' }
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '1.25rem'
        }}>
          {topMenuItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.page}`}
              onClick={(e) => handleNavClick(e, item.page)}
              style={{
                color: '#4B5563',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: '400',
                transition: 'color 0.3s',
                fontFamily: 'Source Sans Pro, sans-serif'
              }}
              onMouseEnter={(e) => e.target.style.color = '#DA2B1F'}
              onMouseLeave={(e) => e.target.style.color = '#4B5563'}
            >
              {item.label}
            </a>
          ))}

          {/* Auth buttons in Top Bar */}
          {currentUser ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.8rem', color: '#DA2B1F', fontWeight: 700 }}>
                👤 {currentUser.email || currentUser.name || 'User'}
              </span>
              <button
                onClick={onLogout}
                style={{ background: '#333F4C', color: 'white', border: 'none', borderRadius: '4px', padding: '0.2rem 0.6rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <button
                onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('login'); }}
                style={{ background: 'transparent', border: '1px solid #CBD5E1', borderRadius: '4px', padding: '0.2rem 0.6rem', color: '#333F4C', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
              >
                Sign In
              </button>
              <button
                onClick={(e) => { e.preventDefault(); if (setCurrentPage) setCurrentPage('signup'); }}
                style={{ background: '#DA2B1F', border: 'none', borderRadius: '4px', padding: '0.2rem 0.6rem', color: 'white', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Language Switcher in Top Bar */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: '#4B5563',
                fontSize: '0.8rem',
                fontWeight: '700',
                fontFamily: 'Source Sans Pro, sans-serif',
                padding: '0.25rem 0.5rem'
              }}
            >
              <Globe size={14} color="#DA2B1F" />
              <span>🌐 {language}</span>
              <ChevronDown size={12} />
            </button>
            {isLanguageOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: 'white',
                borderRadius: '6px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                padding: '0.5rem 0',
                minWidth: '150px',
                marginTop: '0.25rem',
                zIndex: 9999,
                border: '1px solid #CBD5E1'
              }}>
                {[
                  { code: 'EN', name: 'English' },
                  { code: 'DE', name: 'Deutsch' },
                  { code: 'ZH', name: '简体中文' },
                  { code: 'JA', name: '日本語' },
                  { code: 'ES', name: 'Español' },
                  { code: 'FR', name: 'Français' }
                ].map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { changeLanguage(lang.code); setIsLanguageOpen(false); }}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.45rem 1rem',
                      color: language === lang.code ? '#DA2B1F' : '#333F4C',
                      background: language === lang.code ? '#FFF5F5' : 'transparent',
                      border: 'none',
                      fontSize: '0.8rem',
                      fontWeight: language === lang.code ? '700' : '500',
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                  >
                    {lang.name} ({lang.code})
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        {/* Logo */}
        <div className="logo" style={{ flexShrink: 0 }}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'linear-gradient(135deg, #DA2B1F 0%, #333F4C 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: '1.3rem', boxShadow: '0 4px 12px rgba(218, 43, 31, 0.3)' }}>
              M
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#333F4C', lineHeight: 1, letterSpacing: '-0.02em' }}>
                MLLMLA<span style={{ color: '#DA2B1F' }}>Nanofab</span>
              </div>
              <div style={{ fontSize: '0.68rem', color: '#6B7280', fontWeight: '600', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '3px' }}>
                Maskless Lithography Systems
              </div>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'none',
          '@media (min-width: 1024px)': { display: 'flex' }
        }}>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '0',
            alignItems: 'center'
          }}>
            {navItems.map((item) => (
              <li
                key={item.id}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.hasSubmenu && setOpenSubmenu(item.id)}
                onMouseLeave={() => item.hasSubmenu && setOpenSubmenu(null)}
              >
                <a
                  href={`#${item.page}`}
                  onClick={(e) => handleNavClick(e, item.page)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    color: '#333F4C',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '600',
                    transition: 'color 0.3s',
                    fontFamily: 'Source Sans Pro, sans-serif'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#DA2B1F'}
                  onMouseLeave={(e) => e.target.style.color = '#333F4C'}
                >
                  {item.label}
                  {item.hasSubmenu && (
                    <ChevronDown size={14} style={{ marginLeft: '4px', opacity: 0.6 }} />
                  )}
                </a>

                {/* Submenu */}
                {item.hasSubmenu && openSubmenu === item.id && item.submenu && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    padding: '1rem',
                    minWidth: '820px',
                    maxWidth: '1050px',
                    marginTop: '0.25rem',
                    border: '1px solid #E5E7EB',
                    zIndex: 1000,
                    maxHeight: '75vh',
                    overflowY: 'auto'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: `repeat(${item.submenu.columns.length}, 1fr)`,
                      gap: '0',
                      padding: '0'
                    }}>
                      {item.submenu.columns.map((column, idx) => (
                        <div key={idx} style={{
                          padding: '15px',
                          borderRight: idx < item.submenu.columns.length - 1 ? '1px solid #E5E7EB' : 'none'
                        }}>
                          {column.headline && (
                            <a
                              href={`#${column.page || item.page}`}
                              onClick={(e) => handleNavClick(e, column.page || item.page)}
                              style={{
                                display: 'block',
                                fontWeight: 'bold',
                                color: '#333F4C',
                                textDecoration: 'none',
                                fontSize: '16px',
                                marginBottom: '0px',
                                padding: '7px 7px 0px 20px',
                                borderBottom: 'dotted 1px #eeeeee'
                              }}
                            >
                              {column.headline}
                            </a>
                          )}
                          <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                          }}>
                            {column.items && column.items.map((subItem, iIdx) => (
                              <li key={iIdx} style={{
                                borderBottom: 'solid 1px #eeeeee'
                              }}>
                                <a
                                  href={`#${subItem.page || item.page}`}
                                  onClick={(e) => handleNavClick(e, subItem.page || item.page)}
                                  style={{
                                    display: 'block',
                                    padding: '7px 7px 7px 20px',
                                    color: '#333F4C',
                                    textDecoration: 'none',
                                    fontSize: '12px',
                                    fontWeight: '400',
                                    transition: 'all 0.3s',
                                    fontFamily: 'Source Sans Pro, sans-serif'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.target.style.color = '#e63312';
                                    e.target.style.paddingLeft = '30px';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.target.style.color = '#333F4C';
                                    e.target.style.paddingLeft = '20px';
                                  }}
                                  dangerouslySetInnerHTML={{ __html: subItem.title }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Mobile search and language */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            '@media (min-width: 1024px)': { display: 'none' }
          }}>
            <button
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: isScrolled ? '#333F4C' : 'white',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
          </div>

          <button
            onClick={toggleMobileMenu}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: isScrolled ? '#333F4C' : 'white',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '@media (min-width: 1024px)': { display: 'none' }
            }}
            aria-label="open / close menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          background: 'white',
          overflowY: 'auto',
          padding: '1rem 2rem',
          zIndex: 998,
          animation: 'slideDown 0.3s ease'
        }}>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            {/* Mobile Auth Widget */}
            <div style={{ padding: '0.75rem 0', borderBottom: '1px solid #E5E7EB', marginBottom: '0.75rem' }}>
              {currentUser ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <div style={{ fontSize: '0.9rem', color: '#DA2B1F', fontWeight: 700 }}>
                    👤 {currentUser.email || currentUser.name || 'User'}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                    Status: {currentUser.is_active ? 'Active Premium Subscriber' : 'Free Basic User'}
                  </div>
                  <button
                    onClick={() => { onLogout(); setIsMobileMenuOpen(false); }}
                    style={{ width: '100%', background: '#333F4C', color: 'white', border: 'none', borderRadius: '6px', padding: '0.5rem', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer', marginTop: '0.25rem' }}
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <button
                    onClick={(e) => handleNavClick(e, 'login')}
                    style={{ width: '100%', background: 'transparent', border: '1px solid #CBD5E1', borderRadius: '6px', padding: '0.5rem', color: '#333F4C', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={(e) => handleNavClick(e, 'signup')}
                    style={{ width: '100%', background: '#DA2B1F', border: 'none', borderRadius: '6px', padding: '0.5rem', color: 'white', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', textAlign: 'center' }}
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            {/* Top Menu Items */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid #E5E7EB',
              marginBottom: '0.5rem'
            }}>
              {topMenuItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.page}`}
                  onClick={(e) => handleNavClick(e, item.page)}
                  style={{
                    color: '#4B5563',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: '400',
                    padding: '0.25rem 0'
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {navItems.map((item) => (
              <li key={item.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0'
                }}>
                  <a
                    href={`#${item.page}`}
                    onClick={(e) => handleNavClick(e, item.page)}
                    style={{
                      color: '#333F4C',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: '500',
                      fontFamily: 'Source Sans Pro, sans-serif'
                    }}
                  >
                    {item.label}
                  </a>
                  {item.hasSubmenu && (
                    <button
                      onClick={() => toggleMobileSubmenu(item.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#4B5563',
                        padding: '0.25rem'
                      }}
                    >
                      <ChevronDown
                        size={20}
                        style={{
                          transform: openMobileSubmenu === item.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s'
                        }}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.hasSubmenu && openMobileSubmenu === item.id && item.submenu && (
                  <div style={{ paddingLeft: '1rem', paddingBottom: '0.75rem' }}>
                    {item.submenu.columns.map((column, idx) => (
                      <div key={idx} style={{ marginBottom: '0.75rem' }}>
                        {column.headline && (
                          <p style={{
                            fontWeight: 'bold',
                            color: '#333F4C',
                            fontSize: '0.85rem',
                            margin: '0 0 0.25rem 0',
                            padding: '7px 7px 0px 20px',
                            borderBottom: 'dotted 1px #eeeeee'
                          }}>
                            {column.headline}
                          </p>
                        )}
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {column.items && column.items.map((subItem, iIdx) => (
                            <li key={iIdx} style={{ borderBottom: 'solid 1px #eeeeee' }}>
                              <a
                                href={`#${subItem.page || item.page}`}
                                onClick={(e) => handleNavClick(e, subItem.page || item.page)}
                                style={{
                                  display: 'block',
                                  padding: '7px 7px 7px 20px',
                                  color: '#333F4C',
                                  textDecoration: 'none',
                                  fontSize: '0.85rem',
                                  fontFamily: 'Source Sans Pro, sans-serif'
                                }}
                                dangerouslySetInnerHTML={{ __html: subItem.title }}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}

            {/* Mobile Language */}
            <li style={{ borderBottom: '1px solid #E5E7EB', padding: '0.75rem 0' }}>
              <button
                onClick={() => setIsMobileLanguageOpen(!isMobileLanguageOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#333F4C',
                  fontSize: '1rem',
                  fontWeight: '500',
                  fontFamily: 'Source Sans Pro, sans-serif',
                  padding: '0.25rem 0'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Globe size={20} />
                  Language
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    transform: isMobileLanguageOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s'
                  }}
                />
              </button>
              {isMobileLanguageOpen && (
                <div style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {[
                    { code: 'EN', name: 'English' },
                    { code: 'DE', name: 'Deutsch' },
                    { code: 'ZH', name: '简体中文' },
                    { code: 'JA', name: '日本語' },
                    { code: 'ES', name: 'Español' },
                    { code: 'FR', name: 'Français' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { changeLanguage(lang.code); setIsMobileLanguageOpen(false); setIsMobileMenuOpen(false); }}
                      style={{
                        display: 'block',
                        textAlign: 'left',
                        padding: '0.4rem 0.6rem',
                        color: language === lang.code ? '#DA2B1F' : '#4B5563',
                        background: language === lang.code ? '#FFF5F5' : 'transparent',
                        borderRadius: '4px',
                        border: 'none',
                        fontSize: '0.85rem',
                        fontWeight: language === lang.code ? '700' : '500',
                        cursor: 'pointer'
                      }}
                    >
                      {lang.name} ({lang.code})
                    </button>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>
      )}

      {/* CSS Animation for slide down */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 1024px) {
          nav {
            display: flex !important;
          }
        }
        @media (max-width: 1023px) {
          nav {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

export { Header };