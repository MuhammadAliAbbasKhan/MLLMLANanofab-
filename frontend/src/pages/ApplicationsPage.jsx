// src/pages/ApplicationsPage.jsx
import React from 'react';

export default function ApplicationsPage() {
  // Application categories data
  const applicationCategories = [
    {
      id: '1d-2d-materials',
      title: '1D & 2D Materials',
      link: 'https://heidelberg-instruments.com/applications/1d-2d-materials/'
    },
    {
      id: 'advanced-packaging',
      title: 'Advanced Packaging',
      link: 'https://heidelberg-instruments.com/applications/advanced-packaging/'
    },
    {
      id: 'biotechnology-medical-engineering',
      title: 'Biotechnology and Medical Engineering',
      link: 'https://heidelberg-instruments.com/applications/biotechnology-medical-engineering/'
    },
    {
      id: 'displays',
      title: 'Displays',
      link: 'https://heidelberg-instruments.com/applications/displays/'
    },
    {
      id: 'high-security-printing',
      title: 'High-Security Printing',
      link: 'https://heidelberg-instruments.com/applications/high-security-printing/'
    },
    {
      id: 'materials-science',
      title: 'Materials Science',
      link: 'https://heidelberg-instruments.com/applications/materials-science/'
    },
    {
      id: 'mems',
      title: 'MEMS',
      link: 'https://heidelberg-instruments.com/applications/mems/'
    },
    {
      id: 'microelectronics-nanoelectronics',
      title: 'Microelectronics and Nanoelectronics',
      link: 'https://heidelberg-instruments.com/applications/microelectronics-nanoelectronics/'
    },
    {
      id: 'microfluidics-nanofluidics',
      title: 'Microfluidics and Nanofluidics',
      link: 'https://heidelberg-instruments.com/applications/microfluidics-nanofluidics/'
    },
    {
      id: 'micro-optics-photonics',
      title: 'Micro-optics and Photonics',
      link: 'https://heidelberg-instruments.com/applications/micro-optics-photonics/'
    },
    {
      id: 'nanoimprint-templates',
      title: 'Nanoimprint Templates',
      link: 'https://heidelberg-instruments.com/applications/nanoimprint-templates/'
    },
    {
      id: 'photomasks',
      title: 'Photomasks',
      link: 'https://heidelberg-instruments.com/applications/photomasks/'
    },
    {
      id: 'quantum-devices',
      title: 'Quantum Devices',
      link: 'https://heidelberg-instruments.com/applications/quantum-devices/'
    },
    {
      id: 'semiconductors',
      title: 'Semiconductors',
      link: 'https://heidelberg-instruments.com/applications/semiconductors/'
    },
    {
      id: 'sensors',
      title: 'Sensors',
      link: 'https://heidelberg-instruments.com/applications/sensors/'
    }
  ];

  return (
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: 'white' }}>
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          position: 'relative',
          minHeight: '300px',
          background: 'url(https://heidelberg-instruments.com/wp-content/uploads/2023/04/Applications-Header_MLA300-Packaging-Demonstrator-SEM.webp) center center / cover no-repeat',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '3rem 0'
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
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <h1 style={{
              color: 'white',
              fontSize: '3rem',
              fontWeight: 'bold',
              margin: 0
            }}>
              Applications
            </h1>
            <a
              href="https://heidelberg-instruments.com/contact-sales/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.5rem',
                background: '#DA2B1F',
                color: 'white',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'background 0.3s',
                border: 'none',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.target.style.background = '#7C8795'}
              onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
            >
              CONTACT
            </a>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section style={{ padding: '3rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Title */}
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#1D252E',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Our Applications Across Industries and Research
          </h2>

          {/* Hero Image */}
          <div style={{
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '2rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
          }}>
            <img
              src="https://heidelberg-instruments.com/wp-content/uploads/2024/09/Product_header_APPLICATIONS-2025_2300x1280.webp"
              alt="Our applications depicted in a circle together with suitable systems."
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Description Text */}
          <div style={{
            maxWidth: '900px',
            margin: '0 auto 2rem auto',
            color: '#333F4C',
            fontSize: '1rem',
            lineHeight: '1.7'
          }}>
            <p style={{ marginBottom: '0.75rem' }}>
              Heidelberg Instruments systems are used worldwide by industry leaders, universities, and research 
              institutes for advanced micro- and nanofabrication. Our tools enable precise micro- and nanoscale 
              patterning for a wide range of applications, from photonics, micro-optics, and MEMS to quantum 
              devices, microelectronics, and biomedical engineering.
            </p>
            <p>
              We provide customized lithography solutions to meet the complex requirements of our global customers, 
              whether for high-resolution prototyping, small-batch production, or cutting-edge research.
            </p>
          </div>

          {/* Applications List */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '0.5rem',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {applicationCategories.map((app) => (
              <a
                key={app.id}
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.5rem 0.75rem',
                  color: '#333F4C',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s',
                  borderRadius: '4px',
                  borderBottom: '1px solid #E5E7EB'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#DA2B1F';
                  e.target.style.paddingLeft = '1rem';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333F4C';
                  e.target.style.paddingLeft = '0.75rem';
                }}
              >
                <span style={{ color: '#DA2B1F', fontSize: '0.7rem' }}>▸</span>
                {app.title}
              </a>
            ))}
          </div>

          {/* Spacer */}
          <div style={{ height: '20px' }} />
        </div>
      </section>
    </main>
  );
}

export { ApplicationsPage };