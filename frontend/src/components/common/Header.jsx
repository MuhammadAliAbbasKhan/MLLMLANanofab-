// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Search, Globe, Menu, X, ChevronDown, Linkedin, Youtube, Twitter } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileLanguageOpen, setIsMobileLanguageOpen] = useState(false);
  const headerRef = useRef(null);

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

  // Navigation data
  const navItems = [
    {
      id: 'applications',
      label: 'Applications',
      link: 'https://heidelberg-instruments.com/applications/',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Applications',
            headlineLink: 'https://heidelberg-instruments.com/applications/',
            items: [
              { title: '1D & 2D Materials', link: 'https://heidelberg-instruments.com/applications/1d-2d-materials/' },
              { title: 'Advanced Packaging', link: 'https://heidelberg-instruments.com/applications/advanced-packaging/' },
              { title: 'Biotechnology and Medical Engineering', link: 'https://heidelberg-instruments.com/applications/biotechnology-medical-engineering/' },
              { title: 'Displays', link: 'https://heidelberg-instruments.com/applications/displays/' },
              { title: 'High-Security Printing', link: 'https://heidelberg-instruments.com/applications/high-security-printing/' }
            ]
          },
          {
            headline: '',
            items: [
              { title: 'Materials Science', link: 'https://heidelberg-instruments.com/applications/materials-science/' },
              { title: 'MEMS', link: 'https://heidelberg-instruments.com/applications/mems/' },
              { title: 'Microelectronics and Nanoelectronics', link: 'https://heidelberg-instruments.com/applications/microelectronics-nanoelectronics/' },
              { title: 'Microfluidics and Nanofluidics', link: 'https://heidelberg-instruments.com/applications/microfluidics-nanofluidics/' },
              { title: 'Micro-Optics and Photonics', link: 'https://heidelberg-instruments.com/applications/micro-optics-photonics/' }
            ]
          },
          {
            headline: '',
            items: [
              { title: 'Nanoimprint Templates', link: 'https://heidelberg-instruments.com/applications/nanoimprint-templates/' },
              { title: 'Photomasks', link: 'https://heidelberg-instruments.com/applications/photomasks/' },
              { title: 'Quantum Devices', link: 'https://heidelberg-instruments.com/applications/quantum-devices/' },
              { title: 'Semiconductors', link: 'https://heidelberg-instruments.com/applications/semiconductors/' },
              { title: 'Sensors', link: 'https://heidelberg-instruments.com/applications/sensors/' }
            ]
          }
        ]
      }
    },
    {
      id: 'core-technologies',
      label: 'Core Technologies',
      link: 'https://heidelberg-instruments.com/core-technologies/',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Core Technologies',
            headlineLink: 'https://heidelberg-instruments.com/core-technologies/',
            items: [
              { title: 'Maskless Laser Lithography', link: 'https://heidelberg-instruments.com/core-technologies/maskless-laser-lithography/' },
              { title: 'Thermal Scanning Probe Lithography', link: 'https://heidelberg-instruments.com/core-technologies/thermal-scanning-probe-lithography/' }
            ]
          },
          {
            headline: 'Key Features',
            items: [
              { title: 'Accurate Pattern Placement', link: 'https://heidelberg-instruments.com/core-technologies/accurate-pattern-placement/' },
              { title: 'Grayscale Lithography', link: 'https://heidelberg-instruments.com/core-technologies/grayscale-lithography/' },
              { title: 'High Aspect Ratio', link: 'https://heidelberg-instruments.com/core-technologies/high-aspect-ratio/' },
              { title: 'High & Ultra-High Resolution', link: 'https://heidelberg-instruments.com/core-technologies/high-ultra-high-resolution/' }
            ]
          },
          {
            headline: '',
            items: [
              { title: 'In-Situ Inspection & Metrology', link: 'https://heidelberg-instruments.com/core-technologies/in-situ-inspection-metrology/' },
              { title: 'Non-Invasive Nanolithography', link: 'https://heidelberg-instruments.com/core-technologies/non-invasive-nanolithography/' },
              { title: 'Small & Unconventional Substrates', link: 'https://heidelberg-instruments.com/core-technologies/small-unconventional-substrates/' }
            ]
          }
        ]
      }
    },
    {
      id: 'products',
      label: 'Products',
      link: 'https://heidelberg-instruments.com/products/',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Research & Development',
            items: [
              { title: 'µMLA Maskless Aligner', link: 'https://heidelberg-instruments.com/product/%ce%bcmla/' },
              { title: 'MLA 150 Maskless Aligner', link: 'https://heidelberg-instruments.com/product/mla150/' },
              { title: 'DWL 66<sup>+</sup> Laser Lithography System', link: 'https://heidelberg-instruments.com/product/dwl-66/' },
              { title: 'VPG 300 DI Maskless Stepper', link: 'https://heidelberg-instruments.com/product/vpg-300-di/' },
              { title: 'NanoFrazor Nanolithography Tool', link: 'https://heidelberg-instruments.com/product/nanofrazor/' }
            ]
          },
          {
            headline: 'Industrial',
            items: [
              { title: 'MLA 300 Maskless Aligner', link: 'https://heidelberg-instruments.com/product/mla300/' },
              { title: 'DWL 2000 GS / DWL 4000 GS', link: 'https://heidelberg-instruments.com/product/dwl-2000-4000-gs/' },
              { title: 'VPG<sup>+</sup> 200 / VPG<sup>+</sup> 400 / VPG<sup>+</sup> 800', link: 'https://heidelberg-instruments.com/product/vpg-200-400-800/' },
              { title: 'VPG<sup>+</sup> 1400 FPD / VPG<sup>+</sup> 1850 FPD', link: 'https://heidelberg-instruments.com/product/vpg-1400-1850-fpd/' },
              { title: 'VPG 300 DI Maskless Stepper', link: 'https://heidelberg-instruments.com/product/vpg-300-di/' },
              { title: 'ULTRA Semiconductor Mask Writer', link: 'https://heidelberg-instruments.com/product/ultra/' }
            ]
          },
          {
            headline: '',
            items: [
              { title: 'Find Your Solution', link: 'https://heidelberg-instruments.com/products/#product-finder' }
            ]
          }
        ]
      }
    },
    {
      id: 'library',
      label: 'Library',
      link: 'https://heidelberg-instruments.com/library/',
      hasSubmenu: false
    },
    {
      id: 'service',
      label: 'Service and Support',
      link: '#',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Worldwide Service',
            items: [
              { title: 'Service and Support', link: 'https://heidelberg-instruments.com/service-and-support/' },
              { title: 'Contact Service', link: 'https://heidelberg-instruments.com/contact-service/' },
              { title: 'Service Locations', link: 'https://heidelberg-instruments.com/service-and-support/#service-locations' },
              { title: 'Frequently Asked Questions', link: 'https://heidelberg-instruments.com/faq/' }
            ]
          }
        ]
      }
    },
    {
      id: 'news',
      label: 'News and Events',
      link: '#',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'News and Events',
            items: [
              { title: 'Press Releases', link: 'https://heidelberg-instruments.com/press-releases/' },
              { title: 'Blog Posts', link: 'https://heidelberg-instruments.com/blog/' },
              { title: 'Dates & Events', link: 'https://heidelberg-instruments.com/events/' },
              { title: 'Newsletter', link: 'https://share-eu1.hsforms.com/1XLh2iUVtSLq6kbKdE_Np0Q2enb0m' },
              { title: 'Application Image Gallery', link: 'https://heidelberg-instruments.com/application-image-gallery-on-advanced-micro-nanofabrication/' }
            ]
          }
        ]
      }
    },
    {
      id: 'company',
      label: 'Company',
      link: '#',
      hasSubmenu: true,
      submenu: {
        columns: [
          {
            headline: 'Company',
            items: [
              { title: 'About Us', link: 'https://heidelberg-instruments.com/about-us/' },
              { title: 'The Lithographer', link: 'https://heidelberg-instruments.com/the-lithographer/' },
              { title: 'History', link: 'https://heidelberg-instruments.com/history/' },
              { title: 'Careers', link: 'https://heidelberg-instruments.com/career/' }
            ]
          },
          {
            headline: '',
            items: [
              { title: 'Network Memberships', link: 'https://heidelberg-instruments.com/network-memberships/' },
              { title: 'Locations', link: 'https://heidelberg-instruments.com/locations/' },
              { title: 'Contact Sales', link: 'https://heidelberg-instruments.com/contact-sales/' }
            ]
          }
        ]
      }
    }
  ];

  const languages = [
    { code: 'EN', link: 'https://heidelberg-instruments.com/', active: true },
    { code: '简体中文', link: 'https://heidelberg-instruments.com/zh-hans/', active: false },
    { code: '日本語', link: 'https://heidelberg-instruments.com/ja/', active: false },
    { code: '한국어', link: 'https://heidelberg-instruments.com/ko/', active: false },
    { code: 'Español', link: 'https://heidelberg-instruments.com/es/', active: false },
    { code: 'Français', link: 'https://heidelberg-instruments.com/fr/', active: false }
  ];

  const topMenuItems = [
    { label: 'Careers', link: 'https://heidelberg-instruments.com/career/' },
    { label: 'Contact Sales', link: 'https://heidelberg-instruments.com/contact-sales/' },
    { label: 'Contact Service', link: 'https://heidelberg-instruments.com/contact-service/' }
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
        zIndex: 999,
        background: isScrolled ? 'white' : 'transparent',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      {/* Top Bar - Above Header */}
      <div style={{
        background: isScrolled ? 'white' : 'rgba(255,255,255,0.9)',
        borderBottom: isScrolled ? '1px solid #E5E7EB' : '1px solid rgba(51,63,76,0.1)',
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
          gap: '1.5rem'
        }}>
          {topMenuItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
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
                fontWeight: '400',
                fontFamily: 'Source Sans Pro, sans-serif',
                padding: '0.25rem 0.5rem'
              }}
            >
              <Globe size={14} />
              <span>EN</span>
              <ChevronDown size={12} />
            </button>
            {isLanguageOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                background: 'white',
                borderRadius: '4px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                padding: '0.5rem 0',
                minWidth: '140px',
                marginTop: '0.25rem',
                zIndex: 100
              }}>
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href={lang.link}
                    style={{
                      display: 'block',
                      padding: '0.4rem 1rem',
                      color: lang.active ? '#DA2B1F' : '#4B5563',
                      textDecoration: 'none',
                      fontSize: '0.8rem',
                      fontWeight: lang.active ? '600' : '400',
                      transition: 'background 0.3s',
                      fontFamily: 'Source Sans Pro, sans-serif'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#F3F4F6'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                  >
                    {lang.code}
                  </a>
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
          <a href="https://heidelberg-instruments.com/" style={{ textDecoration: 'none' }}>
            <img
              src="https://heidelberg-instruments.com/wp-content/uploads/2022/07/HIMT-LOGO-21V2_rgb_bicolor_72dpi.png"
              alt="Heidelberg Instruments"
              style={{
                height: '50px',
                width: 'auto',
                transition: 'height 0.3s'
              }}
            />
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
            alignItems: 'center',
            borderBottom: '1px solid #333F4C',
            paddingBottom: '18px'
          }}>
            {navItems.map((item) => (
              <li
                key={item.id}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.hasSubmenu && setOpenSubmenu(item.id)}
                onMouseLeave={() => item.hasSubmenu && setOpenSubmenu(null)}
              >
                <a
                  href={item.link}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px 15px 60px 15px',
                    color: '#333F4C',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '400',
                    transition: 'color 0.3s',
                    fontFamily: 'Source Sans Pro, sans-serif',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#DA2B1F'}
                  onMouseLeave={(e) => e.target.style.color = '#333F4C'}
                >
                  {item.label}
                  {item.hasSubmenu && (
                    <ChevronDown size={14} style={{ marginLeft: '4px', opacity: 0.5 }} />
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
                    borderRadius: '1px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    padding: '0',
                    minWidth: '900px',
                    maxWidth: '1100px',
                    marginTop: '0',
                    border: '1px solid rgba(34,34,34,0.5)',
                    width: '100vw',
                    maxHeight: '80vh',
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
                            column.headlineLink ? (
                              <a
                                href={column.headlineLink}
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
                            ) : (
                              <p style={{
                                fontWeight: 'bold',
                                color: '#333F4C',
                                fontSize: '16px',
                                margin: '0 0 0px 0',
                                padding: '7px 7px 0px 20px',
                                borderBottom: 'dotted 1px #eeeeee'
                              }}>
                                {column.headline}
                              </p>
                            )
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
                                  href={subItem.link}
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
                  href={item.link}
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
                    href={item.link}
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
                                href={subItem.link}
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
                <div style={{ paddingLeft: '2rem', marginTop: '0.5rem' }}>
                  {languages.map((lang) => (
                    <a
                      key={lang.code}
                      href={lang.link}
                      style={{
                        display: 'block',
                        padding: '0.4rem 0',
                        color: lang.active ? '#DA2B1F' : '#4B5563',
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: lang.active ? '600' : '400',
                        fontFamily: 'Source Sans Pro, sans-serif'
                      }}
                    >
                      {lang.code}
                    </a>
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