import React from 'react';
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
                <p style={{ color: '#4B5563', fontSize: '0.85rem' }}>Contact details coming soon</p>
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
                <p style={{ color: '#4B5563', fontSize: '0.85rem' }}>Newsletter coming soon</p>
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
                  Social links coming soon.
                </p>
                {/* TODO: add verified social links */}
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
                <span style={{ color: '#333F4C', textDecoration: 'none' }}>
                  APPLICATIONS
                </span>
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>1D and 2D Materials</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Advanced Packaging</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Biotechnology and Medical Engineering</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Displays</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>High-Security Printing</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Materials Science</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>MEMS</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Microelectronics and Nanoelectronics</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Microfluidics and Nanofluidics</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Micro-Optics and Photonics</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Nanoimprint Templates</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Photomasks</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Quantum Devices</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Semiconductors</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Sensors</span></li>
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
                <span style={{ color: '#333F4C', textDecoration: 'none' }}>
                  CORE TECHNOLOGIES
                </span>
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Maskless Laser Lithography</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Thermal Scanning Probe Lithography</span></li>
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
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Accurate Pattern Placement</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Grayscale Lithography</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>High Aspect Ratio</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>High &amp; Ultra-High Resolution</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>In-situ Inspection &amp; Metrology</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Non-invasive Nanolithography</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Small &amp; Unconventional Substrates</span></li>
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
                <span style={{ color: '#333F4C', textDecoration: 'none' }}>
                  PRODUCTS
                </span>
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                lineHeight: '1.8',
                color: '#4B5563'
              }}>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>μMLA</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>MLA 150</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>DWL 66<sup>+</sup></span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>NanoFrazor</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>MLA 300</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>DWL 2000 GS / DWL 4000 GS</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>VPG<sup>+</sup> 200 / VPG<sup>+</sup> 400 / VPG<sup>+</sup> 800</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>VPG<sup>+</sup> 1400 FPD / VPG<sup>+</sup> 1850 FPD</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>VPG 300 DI</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>ULTRA</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Find Your Solution</span></li>
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
                <span style={{ color: '#333F4C', textDecoration: 'none' }}>
                  LIBRARY
                </span>
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
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Service &amp; Support</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Contact Service</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Service Locations</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Frequently Asked Questions</span></li>
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
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Press Releases</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Blog</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Events</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Newsletter</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Application Image Gallery</span></li>
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
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>About Us</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>The Lithographer</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>History</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Careers</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Network Memberships</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Locations</span></li>
                <li><span style={{ color: '#4B5563', textDecoration: 'none' }}>Contact Sales</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LANGUAGE SWITCHER & DISCLAIMER ===== */}
      <section style={{ padding: '1rem 0', background: '#D0D4E3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          {/* Language links removed (pointed to another company's site) */}

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

      {/* ===== LEGAL LINKS & COPYRIGHT ===== */}
      <section style={{ padding: '0.5rem 0 1.5rem 0', background: '#D0D4E3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <p style={{ textAlign: 'center', color: '#4B5563', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
            &copy; {new Date().getFullYear()} MLLMLANanofab. All rights reserved.
          </p>
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