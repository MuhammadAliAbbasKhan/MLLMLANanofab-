// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Youtube, Twitter, Mail, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(3);
  const [activeProductSlide, setActiveProductSlide] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const sliderRef = useRef(null);
  const productSliderRef = useRef(null);

  // Hero slides data
  const heroSlides = [
    {
      id: 'slide1',
      title: 'Your Application. <br>Our Solution.',
      description: 'As an equipment manufacturer, we develop direct-write lithography systems that adapt to your needs and enable freedom and precision in research and scalable industrial production.',
      cta: 'Find your match',
      ctaLink: 'https://heidelberg-instruments.com/products/',
      bgImage: 'https://heidelberg-instruments.com/wp-content/uploads/2025/11/Our-Solutions-for-Industry-and-RD.webp'
    },
    {
      id: 'slide2',
      title: 'Advanced Packaging',
      description: 'Enabling Next-Generation Electronics with Maskless Lithography. Flexible designs, high throughput, uniformity, and yield are the basic requirements in the semiconductor industry. The MLA 300 Maskless Aligner meets all of these.',
      cta: 'Discover this application',
      ctaLink: 'https://heidelberg-instruments.com/applications/advanced-packaging/',
      bgImage: 'https://heidelberg-instruments.com/wp-content/uploads/2026/04/Slider_Advanced-Packaging.webp'
    },
    {
      id: 'slide3',
      title: '450 nm Lines and Spaces<br>High Aspect Ratio<br>Automatic Loading',
      description: 'Achieve sharper lines and spaces with superior pattern fidelity for advanced lithography applications. Meet the MLA 150 – the most important tool in cleanrooms.',
      cta: 'Learn more',
      ctaLink: 'https://heidelberg-instruments.com/product/mla150/',
      bgImage: 'https://heidelberg-instruments.com/wp-content/uploads/2026/04/MLA-150-slider.webp'
    },
    {
      id: 'slide4',
      title: 'The DWL 66<sup>+</sup> Now Delivers 200 nm Features and 65,536 Shades of Gray',
      description: 'The DWL 66<sup>+</sup> is now more powerful than ever, featuring two game-changing enhancements that redefine what\'s possible with optical lithography.',
      cta: 'Learn more',
      ctaLink: 'https://heidelberg-instruments.com/closing-the-gap-to-e-beam-the-dwl-66sup-sup-now-delivers-200-nm-features-and-unrivaled-grayscale/',
      bgImage: 'https://heidelberg-instruments.com/wp-content/uploads/2021/02/DWL66_Combined-Micro-structures_Application-Image_NoScalebar.webp'
    },
    {
      id: 'slide5',
      title: 'Read the Surface Issue of The Lithographer',
      description: 'We\'re excited to announce the third edition of The Lithographer, a Heidelberg Instruments magazine providing exciting insights into the world of micro- and nanofabrication. Learn how micro- and nanoscale features are engineered to drive innovation in research and industry.',
      cta: 'Take a look inside',
      ctaLink: 'https://heidelberg-instruments.com/the-lithographer/',
      bgImage: 'https://heidelberg-instruments.com/wp-content/uploads/2025/05/Slider-The-Lithographer.webp'
    }
  ];

  // Products data
  const products = [
    {
      id: 'umla',
      title: 'µMLA Maskless Aligner',
      category: 'Maskless Aligner',
      description: 'Configurable and compact tabletop maskless aligner with raster scan and vector exposure modules.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_uMLA-2025_840x740.webp',
      link: 'https://heidelberg-instruments.com/product/%ce%bcmla/'
    },
    {
      id: 'mla150',
      title: 'MLA 150 Maskless Aligner',
      category: 'Maskless Aligner',
      description: 'The fastest maskless tool for rapid prototyping, the alternative to the mask aligners. Perfect for standard binary lithography.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_MLA150-2025_840x740.webp',
      link: 'https://heidelberg-instruments.com/product/mla150/'
    },
    {
      id: 'dwl66',
      title: 'DWL 66<sup>+</sup> Laser Lithography System',
      category: 'Direct Write Laser Lithography System',
      description: 'Our most versatile system for R&D and rapid prototyping with resolution down to 200 nm and professional grayscale capabilities.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_DWL66-2025_840x740.webp',
      link: 'https://heidelberg-instruments.com/product/dwl-66/'
    },
    {
      id: 'mla300',
      title: 'MLA 300 Maskless Aligner',
      category: 'Maskless Aligner',
      description: 'Optimized for flexible industrial production with highest precision and seamless integration into industrial production lines.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_MLA300B-2025_840x740.webp',
      link: 'https://heidelberg-instruments.com/product/mla300/'
    },
    {
      id: 'dwl4000',
      title: 'DWL 2000 GS / DWL 4000 GS Laser Lithography Systems',
      category: 'Direct Write Laser Lithography System',
      description: 'The most advanced industrial grayscale lithography tool on the market.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_DWL4000GS-2025_840x740.webp',
      link: 'https://heidelberg-instruments.com/product/dwl-2000-4000-gs/'
    },
    {
      id: 'vpg800',
      title: 'VPG<sup>+</sup> 200 / VPG<sup>+</sup> 400 / VPG<sup>+</sup> 800 Volume Pattern Generators',
      category: 'Volume Pattern Generator',
      description: 'Powerful production tools for standard photomasks and microstructures in i-line resists.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_VPG800-2025_840x740.webp',
      link: 'https://heidelberg-instruments.com/product/vpg-200-400-800/'
    },
    {
      id: 'vpg1850',
      title: 'VPG<sup>+</sup> 1400 FPD / VPG<sup>+</sup> 1850 FPD Volume Pattern Generators',
      category: 'Volume Pattern Generator',
      description: 'Photomask production on large substrates, perfect for display applications.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2021/02/product-image-VPG1850FPD.webp',
      link: 'https://heidelberg-instruments.com/product/vpg-1400-1850-fpd/'
    },
    {
      id: 'vpg300',
      title: 'VPG 300 DI Maskless Stepper',
      category: 'Maskless Stepper',
      description: 'Maskless direct imager for high-accuracy and high-resolution microstructures.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2021/02/Product_image_VPG300DI-2025_840x740.webp',
      link: 'https://heidelberg-instruments.com/product/vpg-300-di/'
    },
    {
      id: 'ultra',
      title: 'ULTRA Semiconductor Mask Writer',
      category: 'Laser Mask Writer',
      description: 'A tool specifically designed to produce mature semiconductor photomasks.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_image_ULTRA-2025_840x740.webp',
      link: 'https://heidelberg-instruments.com/product/ultra/'
    },
    {
      id: 'nanofrazor',
      title: 'NanoFrazor Nanolithography Tool',
      category: 'Thermal Scanning Probe Lithography System',
      description: 'Versatile & modular tool combining Thermal Scanning Probe Lithography, Direct Laser Sublimation, and advanced automation for cutting-edge R&D.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2024/05/2024-05-HIMT_NF_840x740_web.webp',
      link: 'https://heidelberg-instruments.com/product/nanofrazor/'
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'The Glass Revolution: Why Maskless Lithography is the Key to Next-Gen AI Packaging',
      date: 'April 14, 2026',
      excerpt: 'Organic substrates are hitting a wall. Discover how MLLMLANanofab\'s maskless lithography enables the glass revolution to break the sub-2 µm barrier for AI.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2026/03/Glass-Core-Substrate.webp',
      link: 'https://heidelberg-instruments.com/the-glass-revolution-why-maskless-lithography-is-the-key-to-next-gen-ai-packaging/'
    },
    {
      id: 2,
      title: 'MLLMLANanofab Receives Repeat Order from Leading Asian Display Photomask Manufacturer for its VPG<sup>+</sup> 1400 FPD System',
      date: 'April 1, 2026',
      excerpt: 'MLLMLANanofab is excited to announce a follow-up order from a leading Asian manufacturer of display photomasks for its flagship VPG⁺ 1400 FPD Volume Pattern Generator.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2025/03/Product_header_VPG1400FPD-2025_Kopie-1.webp',
      link: 'https://heidelberg-instruments.com/heidelberg-instruments-receives-repeat-order-from-leading-asian-display-photomask-manufacturer-for-its-vpg-1400-fpd-system/'
    },
    {
      id: 3,
      title: 'Beta Site Installation of NanoFrazor with Parallelization Capabilities at EPFL',
      date: 'January 20, 2026',
      excerpt: 'Following the successful introduction of the modular NanoFrazor nanolithography system in 2024, MLLMLANanofab is proud to announce the installation of the newest NanoFrazor at EPFL.',
      image: 'https://heidelberg-instruments.com/wp-content/uploads/2026/01/NanoFrazor-Installation-EPFL.webp',
      link: 'https://heidelberg-instruments.com/beta-site-installation-of-nanofrazor-with-parallelization-capabilities-at-epfl/'
    }
  ];

  // Auto-play hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Auto-play product slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProductSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, [products.length]);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextProductSlide = () => {
    setActiveProductSlide((prev) => (prev + 1) % Math.ceil(products.length / 3));
  };

  const prevProductSlide = () => {
    setActiveProductSlide((prev) => (prev - 1 + Math.ceil(products.length / 3)) % Math.ceil(products.length / 3));
  };

  const getVisibleProducts = () => {
    const start = activeProductSlide * 3;
    return products.slice(start, start + 3);
  };

  return (
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: 'white' }}>
      {/* ===== HERO SLIDER ===== */}
      <section style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: index === activeSlide ? 1 : 0,
                  transition: 'opacity 800ms ease-in-out',
                  zIndex: index === activeSlide ? 1 : 0,
                  height: '100vh',
                  minHeight: '500px',
                  maxHeight: '800px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `url(${slide.bgImage}) center center / cover no-repeat`,
                    transform: 'scale(1.05)',
                    transition: 'transform 8s ease-in-out'
                  }}
                  className={index === activeSlide ? 'slide-bg-active' : ''}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0,0,0,0.3)',
                  zIndex: 1
                }} />
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 2rem',
                  maxWidth: '1280px',
                  margin: '0 auto'
                }}>
                  <div style={{
                    maxWidth: '600px',
                    color: 'white',
                    padding: '2rem',
                    background: 'rgba(0,0,0,0.2)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(4px)'
                  }}>
                    <h2
                      style={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                        lineHeight: '1.2',
                        marginBottom: '1rem'
                      }}
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p
                      style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem',
                        opacity: 0.9
                      }}
                      dangerouslySetInnerHTML={{ __html: slide.description }}
                    />
                    <a
                      href={slide.ctaLink}
                      style={{
                        display: 'inline-block',
                        padding: '0.75rem 2rem',
                        background: '#DA2B1F',
                        color: 'white',
                        borderRadius: '4px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'background 0.3s',
                        fontSize: '0.95rem'
                      }}
                      onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                      onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
                    >
                      {slide.cta}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            style={{
              position: 'absolute',
              left: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              padding: '0.75rem',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.7)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.4)'}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(0,0,0,0.4)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              padding: '0.75rem',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'background 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(0,0,0,0.7)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(0,0,0,0.4)'}
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination Dots */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 10
          }}>
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  background: index === activeSlide ? '#DA2B1F' : 'rgba(255,255,255,0.5)',
                  outline: 'none'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== HEADLINE SECTION ===== */}
      <section style={{ padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#333F4C',
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            MLLMLANanofab – <span style={{ color: '#DA2B1F' }}>The Power of Direct Writing</span>
          </h1>
          <h2 style={{
            fontSize: '1.3rem',
            fontWeight: '400',
            color: '#1D252E',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 1.5rem auto',
            lineHeight: '1.6'
          }}>
            MLLMLANanofab is a global leader in high-precision laser lithography systems, maskless aligners, and nanofabrication tools.
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto', color: '#4B5563', fontSize: '1rem', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '0.75rem' }}>
              For 40 years, we've empowered innovation in micro- and nanofabrication, installing over 1,500 systems worldwide. We understand that every customer's needs are unique, so we provide customized lithography solutions tailored to even the most challenging applications.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Our portfolio spans from compact, tabletop systems ideal for prototyping and R&amp;D, to high-end photomask manufacturing equipment designed for high-volume industrial production. This breadth allows us to support a wide range of surface structuring techniques, including precise 2D patterning and complex 2.5D features using grayscale lithography.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Our commitment to customer success extends beyond our products. At our Process and Application Labs (PAL) in Germany, Switzerland, and China, our expert engineers collaborate closely with customers, providing comprehensive training and support to ensure they maximize the potential of their MLLMLANanofab equipment.
            </p>
            <p style={{ marginBottom: '0.75rem' }}>
              Leading companies, top universities, and renowned research institutes worldwide rely on the flexibility and advanced capabilities of our systems for micro- and nanopatterning. Our technology enables breakthroughs across diverse fields, including micro-optics and microsystems technology, photonics, electronics, semiconductors and advanced packaging, quantum devices, MEMS, nanofluidics, biomedical engineering, 2D materials, and many more.
            </p>
            <p>
              <a
                href="https://heidelberg-instruments.com/contact-sales/"
                style={{ color: '#DA2B1F', textDecoration: 'none', fontWeight: '500' }}
                onMouseEnter={(e) => e.target.style.color = '#7C8795'}
                onMouseLeave={(e) => e.target.style.color = '#DA2B1F'}
              >
                Contact us today to discuss your micro- or nanofabrication needs.
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ===== APPLICATIONS | TECHNOLOGIES | KEY FEATURES SECTION ===== */}
      <section
        style={{
          position: 'relative',
          minHeight: '300px',
          background: 'url(https://heidelberg-instruments.com/wp-content/uploads/2023/02/MLA300-Via-Holes.webp) center center / cover no-repeat',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '3rem 0'
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(60, 60, 59, 0.5)',
          zIndex: 0
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            Applications | Technologies | Key Features
          </h2>
        </div>
      </section>

      {/* ===== 3-COLUMN SECTION ===== */}
      <section style={{
        padding: '3rem 0',
        background: 'white'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {/* Column 1 - Applications */}
            <div>
              <div style={{
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <img
                  src="https://heidelberg-instruments.com/wp-content/uploads/2023/02/MLA300-Via-Holes-1024x683.webp"
                  alt="MLA300 - Via Holes"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.5rem'
              }}>
                <a
                  href="https://heidelberg-instruments.com/applications/"
                  style={{ color: '#333F4C', textDecoration: 'none' }}
                >
                  Applications
                </a>
              </h3>
              <div style={{
                color: '#4B5563',
                fontSize: '0.9rem',
                lineHeight: '1.6'
              }}>
                <p>
                  <a href="https://heidelberg-instruments.com/applications/1d-2d-materials/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}>1D &amp; 2D Materials</a> |
                  <a href="https://heidelberg-instruments.com/applications/advanced-packaging/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Advanced Packaging</a> |
                  <a href="https://heidelberg-instruments.com/applications/biotechnology-medical-engineering/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Biotechnology and Medical Engineering</a> |
                  <a href="https://heidelberg-instruments.com/applications/displays/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Displays</a> |
                  <a href="https://heidelberg-instruments.com/applications/high-security-printing/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> High-Security Printing</a> |
                  <a href="https://heidelberg-instruments.com/applications/materials-science/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Materials Science</a> |
                  <a href="https://heidelberg-instruments.com/applications/mems/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> MEMS</a> |
                  <a href="https://heidelberg-instruments.com/applications/microelectronics-nanoelectronics/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Microelectronics and Nanoelectronics</a> |
                  <a href="https://heidelberg-instruments.com/applications/microfluidics-nanofluidics/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Microfluidics and Nanofluidics</a> |
                  <a href="https://heidelberg-instruments.com/applications/micro-optics-photonics/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Micro-optics and Photonics</a> |
                  <a href="https://heidelberg-instruments.com/applications/nanoimprint-templates/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Nanoimprint Templates</a> |
                  <a href="https://heidelberg-instruments.com/applications/photomasks/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Photomasks</a> |
                  <a href="https://heidelberg-instruments.com/applications/quantum-devices/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Quantum Devices</a> |
                  <a href="https://heidelberg-instruments.com/applications/semiconductors/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Semiconductors</a> |
                  <a href="https://heidelberg-instruments.com/applications/sensors/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Sensors</a>
                </p>
              </div>
            </div>

            {/* Column 2 - Core Technologies */}
            <div>
              <div style={{
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <img
                  src="https://heidelberg-instruments.com/wp-content/uploads/2023/02/ULTRA-Zerodur-Chuck-1024x683.webp"
                  alt="ULTRA Zerodur Chuck"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.5rem'
              }}>
                <a
                  href="https://heidelberg-instruments.com/core-technologies/"
                  style={{ color: '#333F4C', textDecoration: 'none' }}
                >
                  Core Technologies
                </a>
              </h3>
              <div style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <p>
                  <a href="https://heidelberg-instruments.com/core-technologies/maskless-laser-lithography/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}>Maskless Laser Lithography</a>
                  <br />
                  <a href="https://heidelberg-instruments.com/core-technologies/thermal-scanning-probe-lithography/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}>Thermal Scanning Probe Lithography</a>
                </p>
              </div>
            </div>

            {/* Column 3 - Key Features */}
            <div>
              <div style={{
                borderRadius: '8px',
                overflow: 'hidden',
                marginBottom: '1rem'
              }}>
                <img
                  src="https://heidelberg-instruments.com/wp-content/uploads/2025/03/DWL66-WMI-Irregular-Concave-Microlens-Array-1-1024x664.webp"
                  alt="Irregular Microlens Array"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.5rem'
              }}>
                Key Features
              </h3>
              <div style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: '1.8' }}>
                <p>
                  <a href="https://heidelberg-instruments.com/core-technologies/accurate-pattern-placement/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}>Accurate Pattern Placement</a> |
                  <a href="https://heidelberg-instruments.com/core-technologies/grayscale-lithography/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Grayscale Lithography</a> |
                  <a href="https://heidelberg-instruments.com/core-technologies/high-aspect-ratio/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> High Aspect Ratio</a> |
                  <a href="https://heidelberg-instruments.com/core-technologies/high-ultra-high-resolution/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> High &amp; Ultra-High Resolution</a> |
                  <a href="https://heidelberg-instruments.com/core-technologies/in-situ-inspection-metrology/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> In-Situ Inspection &amp; Metrology</a> |
                  <a href="https://heidelberg-instruments.com/core-technologies/non-invasive-nanolithography/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Non-Invasive Nanolithography</a> |
                  <a href="https://heidelberg-instruments.com/core-technologies/small-unconventional-substrates/" target="_blank" rel="noopener" style={{ color: '#DA2B1F', textDecoration: 'none' }}> Small &amp; Unconventional Substrates</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS DIVIDER ===== */}
      <section
        style={{
          position: 'relative',
          minHeight: '150px',
          background: 'url(https://heidelberg-instruments.com/wp-content/uploads/2021/04/product-divider.png) center center / cover no-repeat',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '2rem 0'
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.2)',
          zIndex: 0
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            <a
              href="https://heidelberg-instruments.com/products/"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Products
            </a>
          </h2>
        </div>
      </section>

      {/* ===== PRODUCT CAROUSEL ===== */}
      <section style={{ padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}>
              {getVisibleProducts().map((product) => (
                <div
                  key={product.id}
                  style={{
                    background: 'white',
                    borderRadius: '8px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                    transition: 'box-shadow 0.3s',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '500px'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'}
                >
                  <div style={{
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginBottom: '0.75rem',
                    flexShrink: 0
                  }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                  </div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#333F4C',
                    marginBottom: '0.25rem'
                  }}
                    dangerouslySetInnerHTML={{ __html: product.title }}
                  />
                  <p style={{
                    fontSize: '0.7rem',
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '0.5rem'
                  }}>
                    {product.category}
                  </p>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#4B5563',
                    lineHeight: '1.5',
                    flex: 1
                  }}>
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    style={{
                      display: 'inline-block',
                      padding: '0.5rem 1.5rem',
                      background: '#DA2B1F',
                      color: 'white',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      transition: 'background 0.3s',
                      marginTop: '1rem'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                    onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>

            {/* Product Slider Navigation */}
            {activeProductSlide > 0 && (
              <button
                onClick={prevProductSlide}
                style={{
                  position: 'absolute',
                  left: '-1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'white',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronLeft size={20} />
              </button>
            )}
            {activeProductSlide < Math.ceil(products.length / 3) - 1 && (
              <button
                onClick={nextProductSlide}
                style={{
                  position: 'absolute',
                  right: '-1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'white',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  borderRadius: '50%',
                  padding: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ChevronRight size={20} />
              </button>
            )}

            {/* Product Pagination */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1.5rem'
            }}>
              {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProductSlide(index)}
                  style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: index === activeProductSlide ? '#DA2B1F' : '#D1D5DB'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEWS BLOG SECTION ===== */}
      <section
        style={{
          position: 'relative',
          minHeight: '150px',
          background: 'url(https://heidelberg-instruments.com/wp-content/uploads/2022/06/blog-headerimg_v2-2_20231206.webp) center center / cover no-repeat',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '2rem 0'
        }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.3)',
          zIndex: 0
        }} />
        <div style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 2rem',
          width: '100%'
        }}>
          <h2 style={{
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}>
            News blog
          </h2>
        </div>
      </section>

      {/* ===== BLOG POSTS ===== */}
      <section style={{ padding: '3rem 0', background: '#f8faff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem'
          }}>
            {blogPosts.map((post) => (
              <div
                key={post.id}
                style={{
                  background: 'white',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  transition: 'box-shadow 0.3s',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.15)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)'}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.1)',
                    opacity: 0,
                    transition: 'opacity 0.3s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0'}
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener"
                      style={{
                        color: 'white',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        background: 'rgba(0,0,0,0.6)',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '4px',
                        textDecoration: 'none'
                      }}
                    >
                      Read More
                    </a>
                  </div>
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{
                    fontSize: '0.75rem',
                    color: '#6B7280',
                    marginBottom: '0.5rem'
                  }}>
                    {post.date}
                  </p>
                  <h3
                    style={{
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      color: '#333F4C',
                      marginBottom: '0.5rem',
                      lineHeight: '1.3',
                      flex: 1
                    }}
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#4B5563',
                    lineHeight: '1.5'
                  }}>
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener"
                    style={{
                      display: 'inline-block',
                      padding: '0.4rem 1.5rem',
                      border: '2px solid #DA2B1F',
                      color: '#DA2B1F',
                      borderRadius: '4px',
                      textDecoration: 'none',
                      fontWeight: '600',
                      fontSize: '0.85rem',
                      transition: 'all 0.3s',
                      marginTop: '1rem',
                      textAlign: 'center'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = '#DA2B1F';
                      e.target.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = '#DA2B1F';
                    }}
                  >
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* More Blogs Button */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://heidelberg-instruments.com/blog/"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2.5rem',
                background: '#DA2B1F',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'background 0.3s',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => e.target.style.background = '#7C8795'}
              onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
            >
              MORE BLOGS
            </a>
          </div>

          {/* Events Section */}
          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '0 1rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#333F4C',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Would you like to know more about our system portfolio, key features, our corresponding core technologies or possible applications?
              <br /><br />
              Meet us at exhibitions and conferences year-round.
            </h2>
            <a
              href="https://heidelberg-instruments.com/events/"
              style={{
                display: 'inline-block',
                padding: '0.75rem 2.5rem',
                background: '#DA2B1F',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'background 0.3s',
                letterSpacing: '0.05em'
              }}
              onMouseEnter={(e) => e.target.style.background = '#7C8795'}
              onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
            >
              ALL DATES &amp; EVENTS
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER SECTION ===== */}
      <footer style={{ background: '#D0D4E3', padding: '2rem 0 1rem 0' }}>
        {/* Get in Touch / Sign up / Connect */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
            marginBottom: '2rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(51, 63, 76, 0.1)'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.5rem'
              }}>
                Get in Touch
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.9rem', marginBottom: '1rem' }}>
                We are always at your disposal. <br />Please send us your request.
              </p>
              <a
                href="https://heidelberg-instruments.com/contact-sales/"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  background: '#DA2B1F',
                  color: 'white',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
              >
                SALES REQUEST
              </a>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.5rem'
              }}>
                Sign up
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Get quarterly news from<br />the lithography world.
              </p>
              <a
                href="https://share-eu1.hsforms.com/1XLh2iUVtSLq6kbKdE_Np0Q2enb0m"
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1.5rem',
                  background: '#DA2B1F',
                  color: 'white',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.85rem',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
              >
                SUBSCRIBE
              </a>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.5rem'
              }}>
                Connect
              </h3>
              <p style={{ color: '#4B5563', fontSize: '0.9rem', marginBottom: '1rem' }}>
                Follow us on social media to benefit <br />from a range of useful resources.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href="https://linkedin.com/company/heidelberg-instruments"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: '#333F4C',
                    borderRadius: '50%',
                    color: 'white',
                    transition: 'background 0.3s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#DA2B1F'}
                  onMouseLeave={(e) => e.target.style.background = '#333F4C'}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://bsky.app/profile/himt-lithography.bsky.social"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: '#333F4C',
                    borderRadius: '50%',
                    color: 'white',
                    transition: 'background 0.3s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#DA2B1F'}
                  onMouseLeave={(e) => e.target.style.background = '#333F4C'}
                >
                  <svg width="20" height="20" viewBox="0 0 24 25" fill="none">
                    <path d="M5.4 3C8.2 5.1 11.3 9.5 12.4 11.8V18C12.4 17.9 12.4 18 12.2 18.3C11.6 20 9.3 26.8 4.1 21.4C1.3 18.6 2.6 15.7 7.6 14.9C4.7 15.4 1.5 14.6 0.6 11.4C0.4 10.4 0 4.8 0 4C0 0.2 3.3 1.4 5.4 3ZM19.5 3C16.7 5.1 13.6 9.5 12.5 11.8V18C12.5 17.9 12.5 18 12.7 18.3C13.3 20 15.6 26.8 20.8 21.4C23.6 18.6 22.3 15.7 17.3 14.9C20.2 15.4 23.4 14.6 24.3 11.4C24.6 10.4 25 4.8 25 4C25 0.2 21.7 1.4 19.5 3Z" fill="white" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/c/HeidelbergInstruments"
                  target="_blank"
                  rel="noopener"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    background: '#333F4C',
                    borderRadius: '50%',
                    color: 'white',
                    transition: 'background 0.3s',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#DA2B1F'}
                  onMouseLeave={(e) => e.target.style.background = '#333F4C'}
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            {/* Applications */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                <a href="https://heidelberg-instruments.com/applications/" style={{ color: '#333F4C', textDecoration: 'none' }}>
                  APPLICATIONS
                </a>
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><a href="https://heidelberg-instruments.com/applications/1d-2d-materials/" style={{ color: '#4B5563', textDecoration: 'none' }}>1D and 2D Materials</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/advanced-packaging/" style={{ color: '#4B5563', textDecoration: 'none' }}>Advanced Packaging</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/biotechnology-medical-engineering/" style={{ color: '#4B5563', textDecoration: 'none' }}>Biotechnology and Medical Engineering</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/displays/" style={{ color: '#4B5563', textDecoration: 'none' }}>Displays</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/high-security-printing/" style={{ color: '#4B5563', textDecoration: 'none' }}>High-Security Printing</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/materials-science/" style={{ color: '#4B5563', textDecoration: 'none' }}>Materials Science</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/mems/" style={{ color: '#4B5563', textDecoration: 'none' }}>MEMS</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/microelectronics-nanoelectronics/" style={{ color: '#4B5563', textDecoration: 'none' }}>Microelectronics and Nanoelectronics</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/microfluidics-nanofluidics/" style={{ color: '#4B5563', textDecoration: 'none' }}>Microfluidics and Nanofluidics</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/micro-optics-photonics/" style={{ color: '#4B5563', textDecoration: 'none' }}>Micro-Optics and Photonics</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/nanoimprint-templates/" style={{ color: '#4B5563', textDecoration: 'none' }}>Nanoimprint Templates</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/photomasks/" style={{ color: '#4B5563', textDecoration: 'none' }}>Photomasks</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/quantum-devices/" style={{ color: '#4B5563', textDecoration: 'none' }}>Quantum Devices</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/semiconductors/" style={{ color: '#4B5563', textDecoration: 'none' }}>Semiconductors</a></li>
                <li><a href="https://heidelberg-instruments.com/applications/sensors/" style={{ color: '#4B5563', textDecoration: 'none' }}>Sensors</a></li>
              </ul>
            </div>

            {/* Core Technologies & Key Features */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                <a href="https://heidelberg-instruments.com/core-technologies/" style={{ color: '#333F4C', textDecoration: 'none' }}>
                  CORE TECHNOLOGIES
                </a>
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><a href="https://heidelberg-instruments.com/core-technologies/maskless-laser-lithography/" style={{ color: '#4B5563', textDecoration: 'none' }}>Maskless Laser Lithography</a></li>
                <li><a href="https://heidelberg-instruments.com/core-technologies/thermal-scanning-probe-lithography/" style={{ color: '#4B5563', textDecoration: 'none' }}>Thermal Scanning Probe Lithography</a></li>
              </ul>

              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginTop: '1.5rem',
                marginBottom: '0.75rem'
              }}>
                KEY FEATURES
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><a href="https://heidelberg-instruments.com/core-technologies/accurate-pattern-placement/" style={{ color: '#4B5563', textDecoration: 'none' }}>Accurate Pattern Placement</a></li>
                <li><a href="https://heidelberg-instruments.com/core-technologies/grayscale-lithography/" style={{ color: '#4B5563', textDecoration: 'none' }}>Grayscale Lithography</a></li>
                <li><a href="https://heidelberg-instruments.com/core-technologies/high-aspect-ratio/" style={{ color: '#4B5563', textDecoration: 'none' }}>High Aspect Ratio</a></li>
                <li><a href="https://heidelberg-instruments.com/core-technologies/high-ultra-high-resolution/" style={{ color: '#4B5563', textDecoration: 'none' }}>High &amp; Ultra-High Resolution</a></li>
                <li><a href="https://heidelberg-instruments.com/core-technologies/in-situ-inspection-metrology/" style={{ color: '#4B5563', textDecoration: 'none' }}>In-situ Inspection &amp; Metrology</a></li>
                <li><a href="https://heidelberg-instruments.com/core-technologies/non-invasive-nanolithography/" style={{ color: '#4B5563', textDecoration: 'none' }}>Non-invasive Nanolithography</a></li>
                <li><a href="https://heidelberg-instruments.com/core-technologies/small-unconventional-substrates/" style={{ color: '#4B5563', textDecoration: 'none' }}>Small &amp; Unconventional Substrates</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                <a href="https://heidelberg-instruments.com/products/" style={{ color: '#333F4C', textDecoration: 'none' }}>
                  PRODUCTS
                </a>
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><a href="https://heidelberg-instruments.com/product/%ce%bcmla/" style={{ color: '#4B5563', textDecoration: 'none' }}>μMLA</a></li>
                <li><a href="https://heidelberg-instruments.com/product/mla150/" style={{ color: '#4B5563', textDecoration: 'none' }}>MLA 150</a></li>
                <li><a href="https://heidelberg-instruments.com/product/dwl-66/" style={{ color: '#4B5563', textDecoration: 'none' }}>DWL 66<sup>+</sup></a></li>
                <li><a href="https://heidelberg-instruments.com/product/nanofrazor/" style={{ color: '#4B5563', textDecoration: 'none' }}>NanoFrazor</a></li>
                <li><a href="https://heidelberg-instruments.com/product/mla300/" style={{ color: '#4B5563', textDecoration: 'none' }}>MLA 300</a></li>
                <li><a href="https://heidelberg-instruments.com/product/dwl-2000-4000-gs/" style={{ color: '#4B5563', textDecoration: 'none' }}>DWL 2000 GS / DWL 4000 GS</a></li>
                <li><a href="https://heidelberg-instruments.com/product/vpg-200-400-800/" style={{ color: '#4B5563', textDecoration: 'none' }}>VPG<sup>+</sup> 200 / VPG<sup>+</sup> 400 / VPG<sup>+</sup> 800</a></li>
                <li><a href="https://heidelberg-instruments.com/product/vpg-1400-1850-fpd/" style={{ color: '#4B5563', textDecoration: 'none' }}>VPG<sup>+</sup> 1400 FPD / VPG<sup>+</sup> 1850 FPD</a></li>
                <li><a href="https://heidelberg-instruments.com/product/vpg-300-di/" style={{ color: '#4B5563', textDecoration: 'none' }}>VPG 300 DI</a></li>
                <li><a href="https://heidelberg-instruments.com/product/ultra/" style={{ color: '#4B5563', textDecoration: 'none' }}>ULTRA</a></li>
                <li><a href="https://heidelberg-instruments.com/products/#product-finder" style={{ color: '#4B5563', textDecoration: 'none' }}>Find Your Solution</a></li>
              </ul>
            </div>

            {/* Library & Service */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                <a href="https://heidelberg-instruments.com/library/" style={{ color: '#333F4C', textDecoration: 'none' }}>
                  LIBRARY
                </a>
              </h4>

              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginTop: '1rem',
                marginBottom: '0.75rem'
              }}>
                SERVICE
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><a href="https://heidelberg-instruments.com/service-and-support/" style={{ color: '#4B5563', textDecoration: 'none' }}>Service &amp; Support</a></li>
                <li><a href="https://heidelberg-instruments.com/contact-service/" style={{ color: '#4B5563', textDecoration: 'none' }}>Contact Service</a></li>
                <li><a href="https://heidelberg-instruments.com/service-and-support/#service-locations" style={{ color: '#4B5563', textDecoration: 'none' }}>Service Locations</a></li>
                <li><a href="https://heidelberg-instruments.com/faq/" style={{ color: '#4B5563', textDecoration: 'none' }}>Frequently Asked Questions</a></li>
              </ul>
            </div>

            {/* News & Events / Company */}
            <div>
              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                NEWS &amp; EVENTS
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><a href="https://heidelberg-instruments.com/press-releases/" style={{ color: '#4B5563', textDecoration: 'none' }}>Press Releases</a></li>
                <li><a href="https://heidelberg-instruments.com/blog/" style={{ color: '#4B5563', textDecoration: 'none' }}>Blog</a></li>
                <li><a href="https://heidelberg-instruments.com/events/" style={{ color: '#4B5563', textDecoration: 'none' }}>Events</a></li>
                <li><a href="https://share-eu1.hsforms.com/1XLh2iUVtSLq6kbKdE_Np0Q2enb0m" target="_blank" style={{ color: '#4B5563', textDecoration: 'none' }}>Newsletter</a></li>
                <li><a href="https://heidelberg-instruments.com/application-image-gallery-on-advanced-micro-nanofabrication/" style={{ color: '#4B5563', textDecoration: 'none' }}>Application Image Gallery</a></li>
              </ul>

              <h4 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginTop: '1rem',
                marginBottom: '0.75rem'
              }}>
                COMPANY
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><a href="https://heidelberg-instruments.com/about-us/" style={{ color: '#4B5563', textDecoration: 'none' }}>About Us</a></li>
                <li><a href="https://heidelberg-instruments.com/the-lithographer/" style={{ color: '#4B5563', textDecoration: 'none' }}>The Lithographer</a></li>
                <li><a href="https://heidelberg-instruments.com/history/" style={{ color: '#4B5563', textDecoration: 'none' }}>History</a></li>
                <li><a href="https://heidelberg-instruments.com/career/" style={{ color: '#4B5563', textDecoration: 'none' }}>Careers</a></li>
                <li><a href="https://heidelberg-instruments.com/network-memberships/" style={{ color: '#4B5563', textDecoration: 'none' }}>Network Memberships</a></li>
                <li><a href="https://heidelberg-instruments.com/locations/" style={{ color: '#4B5563', textDecoration: 'none' }}>Locations</a></li>
                <li><a href="https://heidelberg-instruments.com/contact-sales/" style={{ color: '#4B5563', textDecoration: 'none' }}>Contact Sales</a></li>
              </ul>
            </div>
          </div>

          {/* Language Switcher & Legal */}
          <div style={{
            borderTop: '1px solid rgba(51, 63, 76, 0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="https://heidelberg-instruments.com/" style={{ color: '#333F4C', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>English</a>
              <a href="https://heidelberg-instruments.com/zh-hans/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>简体中文</a>
              <a href="https://heidelberg-instruments.com/ja/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>日本語</a>
              <a href="https://heidelberg-instruments.com/ko/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>한국어</a>
              <a href="https://heidelberg-instruments.com/es/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>Español</a>
              <a href="https://heidelberg-instruments.com/fr/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>Français</a>
            </div>
          </div>

          <div style={{
            fontSize: '0.75rem',
            color: '#6B7280',
            textAlign: 'center',
            marginTop: '1rem'
          }}>
            <p>Disclaimer: Translations were created with the help of AI. Heidelberg Instruments does not guarantee the correctness of the translations.</p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '1rem',
            flexWrap: 'wrap'
          }}>
            <a href="https://heidelberg-instruments.com/legal-notice/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.8rem' }}>Legal Notice</a>
            <a href="https://heidelberg-instruments.com/data-protection/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.8rem' }}>Data Protection</a>
            <a href="https://heidelberg-instruments.com/terms-and-conditions/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.8rem' }}>Terms and Conditions</a>
            <span
              style={{ color: '#4B5563', fontSize: '0.8rem', cursor: 'pointer' }}
              onClick={() => {
                if (window.Cookiebot) {
                  window.Cookiebot.renew();
                }
              }}
            >
              Cookie Settings
            </span>
          </div>
        </div>
      </footer>

      {/* CSS for background animation */}
      <style>{`
        .slide-bg-active {
          transform: scale(1) !important;
          transition: transform 8s ease-in-out !important;
        }
        @media (max-width: 1024px) {
          .elementor-container {
            flex-direction: column;
          }
          .elementor-column {
            width: 100% !important;
          }
        }
        @media (max-width: 768px) {
          .slide-bg-active {
            transform: scale(1) !important;
          }
        }
      `}</style>
    </main>
  );
}

export { HomePage };