import React from 'react';
import { Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer style={{ background: '#D0D4E3', fontFamily: 'Source Sans Pro, sans-serif' }}>
      {/* ===== GET IN TOUCH / SIGN UP / CONNECT SECTION ===== */}
      <section style={{ padding: '2rem 0', background: '#D0D4E3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            background: '#D0D4E3',
            padding: '1rem 0',
            borderRadius: '0'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem'
            }}>
              {/* Get in Touch */}
              <div>
                <h2 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#333F4C',
                  marginBottom: '0.5rem'
                }}>
                  Get in Touch
                </h2>
                <div style={{ height: '10px' }} />
                <p style={{
                  color: '#4B5563',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  We are always at your disposal. <br />Please send us your request.
                </p>
                <div style={{ height: '10px' }} />
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
                    transition: 'background 0.3s',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                  onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
                >
                  SALES REQUEST
                </a>
              </div>

              {/* Sign up */}
              <div>
                <h2 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#333F4C',
                  marginBottom: '0.5rem'
                }}>
                  Sign up
                </h2>
                <div style={{ height: '10px' }} />
                <p style={{
                  color: '#4B5563',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  Get quarterly news from<br />the lithography world.
                </p>
                <div style={{ height: '10px' }} />
                <a
                  href="https://share-eu1.hsforms.com/1XLh2iUVtSLq6kbKdE_Np0Q2enb0m"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                  onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
                >
                  SUBSCRIBE
                </a>
              </div>

              {/* Connect */}
              <div>
                <h2 style={{
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: '#333F4C',
                  marginBottom: '0.5rem'
                }}>
                  Connect
                </h2>
                <p style={{
                  color: '#4B5563',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  Follow us on social media to benefit <br />from a range of useful resources.
                </p>
                <div style={{
                  display: 'flex',
                  gap: '0.75rem',
                  justifyContent: 'center',
                  paddingTop: '0.5rem'
                }}>
                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/company/heidelberg-instruments"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      background: '#424E5B',
                      borderRadius: '50%',
                      color: 'white',
                      transition: 'background 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#DA2B1F'}
                    onMouseLeave={(e) => e.target.style.background = '#424E5B'}
                  >
                    <Linkedin size={20} />
                  </a>

                  {/* Bluesky */}
                  <a
                    href="https://bsky.app/profile/himt-lithography.bsky.social"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Bluesky"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      background: '#424E5B',
                      borderRadius: '50%',
                      color: 'white',
                      transition: 'background 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#DA2B1F'}
                    onMouseLeave={(e) => e.target.style.background = '#424E5B'}
                  >
                    <svg width="20" height="20" viewBox="0 0 24.9 25" fill="currentColor">
                      <path d="M5.4,3c2.8,2.1,5.9,6.5,7,8.8v6.2c0-.1,0,0-.2.3-.6,1.7-2.9,8.5-8.1,3.1-2.8-2.8-1.5-5.7,3.5-6.5-2.9.5-6.1-.3-7-3.5C.4,10.4,0,4.8,0,4,0,.2,3.3,1.4,5.4,3ZM19.5,3c-2.8,2.1-5.9,6.5-7,8.8v6.2c0-.1,0,0,.2.3.6,1.7,2.9,8.5,8.1,3.1,2.8-2.8,1.5-5.7-3.5-6.5,2.9.5,6.1-.3,7-3.5.3-.9.7-6.6.7-7.3,0-3.8-3.3-2.6-5.4-1.1h0Z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/c/HeidelbergInstruments"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      background: '#424E5B',
                      borderRadius: '50%',
                      color: 'white',
                      transition: 'background 0.3s',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#DA2B1F'}
                    onMouseLeave={(e) => e.target.style.background = '#424E5B'}
                  >
                    <Youtube size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER LINKS SECTION ===== */}
      <section style={{ padding: '1rem 0', background: '#D0D4E3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '2rem'
          }}>
            {/* APPLICATIONS */}
            <div>
              <h2 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                <a href="https://heidelberg-instruments.com/applications/" style={{ color: '#333F4C', textDecoration: 'none' }}>
                  APPLICATIONS
                </a>
              </h2>
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

            {/* CORE TECHNOLOGIES & KEY FEATURES */}
            <div>
              <h2 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                <a href="https://heidelberg-instruments.com/core-technologies/" style={{ color: '#333F4C', textDecoration: 'none' }}>
                  CORE TECHNOLOGIES
                </a>
              </h2>
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

              <h2 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginTop: '1.5rem',
                marginBottom: '0.75rem'
              }}>
                KEY FEATURES
              </h2>
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

            {/* PRODUCTS */}
            <div>
              <h2 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                <a href="https://heidelberg-instruments.com/products/" style={{ color: '#333F4C', textDecoration: 'none' }}>
                  PRODUCTS
                </a>
              </h2>
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

            {/* LIBRARY & SERVICE */}
            <div>
              <h2 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                <a href="https://heidelberg-instruments.com/library/" style={{ color: '#333F4C', textDecoration: 'none' }}>
                  LIBRARY
                </a>
              </h2>

              <h2 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginTop: '1rem',
                marginBottom: '0.75rem'
              }}>
                SERVICE
              </h2>
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

            {/* NEWS & EVENTS / COMPANY */}
            <div>
              <h2 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginBottom: '0.75rem'
              }}>
                NEWS &amp; EVENTS
              </h2>
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
                <li><a href="https://share-eu1.hsforms.com/1XLh2iUVtSLq6kbKdE_Np0Q2enb0m" target="_blank" rel="noopener noreferrer" style={{ color: '#4B5563', textDecoration: 'none' }}>Newsletter</a></li>
                <li><a href="https://heidelberg-instruments.com/application-image-gallery-on-advanced-micro-nanofabrication/" style={{ color: '#4B5563', textDecoration: 'none' }}>Application Image Gallery</a></li>
              </ul>

              <h2 style={{
                fontSize: '0.9rem',
                fontWeight: 'bold',
                color: '#333F4C',
                marginTop: '1.5rem',
                marginBottom: '0.75rem'
              }}>
                COMPANY
              </h2>
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
        </div>
      </section>

      {/* ===== LANGUAGE SWITCHER & DISCLAIMER ===== */}
      <section style={{ padding: '1rem 0', background: '#D0D4E3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '0.75rem'
          }}>
            <a href="https://heidelberg-instruments.com/" style={{ color: '#333F4C', textDecoration: 'none', fontSize: '0.85rem', fontWeight: '600' }}>English</a>
            <a href="https://heidelberg-instruments.com/zh-hans/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>简体中文</a>
            <a href="https://heidelberg-instruments.com/ja/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>日本語</a>
            <a href="https://heidelberg-instruments.com/ko/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>한국어</a>
            <a href="https://heidelberg-instruments.com/es/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>Español</a>
            <a href="https://heidelberg-instruments.com/fr/" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.85rem' }}>Français</a>
          </div>

          <p style={{
            textAlign: 'center',
            color: '#6B7280',
            fontSize: '0.75rem',
            margin: 0
          }}>
            Disclaimer: Translations were created with the help of AI. MLLMLANanofab does not guarantee the correctness of the translations.
          </p>
        </div>
      </section>

      {/* ===== LEGAL LINKS ===== */}
      <section style={{ padding: '0.5rem 0 1.5rem 0', background: '#D0D4E3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <a href="#legal-notice" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.8rem' }}>{t('legalNotice', 'Legal Notice')}</a>
            <a href="#privacy-statement" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.8rem' }}>{t('privacyStatement', 'Privacy Statement')}</a>
            <a href="#terms-conditions" style={{ color: '#4B5563', textDecoration: 'none', fontSize: '0.8rem' }}>{t('termsConditions', 'Terms and Conditions')}</a>
            <span
              id="changeOrWithdrawConsent"
              style={{
                color: '#DA2B1F',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'color 0.2s linear'
              }}
              onMouseEnter={(e) => e.target.style.color = '#7C8795'}
              onMouseLeave={(e) => e.target.style.color = '#DA2B1F'}
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
      </section>

      {/* ===== HIDDEN SCRIPT FOR COOKIEBOT ===== */}
      <div style={{ display: 'none' }}>
        <script dangerouslySetInnerHTML={{
          __html: `
            if(document.querySelector('#changeOrWithdrawConsent')) {
              document.querySelector('#changeOrWithdrawConsent').addEventListener('click', function() { 
                if (window.Cookiebot) {
                  Cookiebot.renew();
                }
              });
            }
          `
        }} />
      </div>
    </footer>
  );
}

export { Footer };