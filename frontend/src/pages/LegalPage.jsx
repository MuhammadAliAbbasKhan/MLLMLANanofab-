import React from 'react';
import { Shield, Lock, FileText } from 'lucide-react';

export const LegalPage = () => {
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
            Legal & Compliance
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
            Legal Notice & Privacy Policy
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            Information according to § 5 TMG, General Data Protection Regulation (GDPR compliance), and terms of service for MLLMLANanofab systems.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ background: 'white', borderRadius: '8px', padding: '3rem', boxShadow: '0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#333F4C', marginBottom: '1rem', borderBottom: '2px solid #F1F5F9', paddingBottom: '0.5rem' }}>
              1. Information According to § 5 TMG
            </h2>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              <strong>MLLMLANanofab GmbH</strong><br />
              Laser & Nanofabrication Systems Division<br />
              Mittelgewann 13, D-69123 Heidelberg, Germany<br />
              Commercial Register: HRB 332194 | Registration Court: Mannheim
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#333F4C', marginBottom: '1rem', borderBottom: '2px solid #F1F5F9', paddingBottom: '0.5rem' }}>
              2. Data Protection & GDPR Compliance
            </h2>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We take the protection of your personal data seriously. CAD pattern files uploaded to the DESIGNER simulator are processed locally and securely encrypted using TLS 1.3 protocol. User account data is synchronized strictly under EU GDPR data security guidelines with dual SQLite and MongoDB Atlas backup servers.
            </p>

            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#333F4C', marginBottom: '1rem', borderBottom: '2px solid #F1F5F9', paddingBottom: '0.5rem' }}>
              3. Copyright & Intellectual Property
            </h2>
            <p style={{ color: '#4B5563', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 0 }}>
              The content, interactive simulators, and software specifications on this site are governed by the copyright laws of Germany. Reproduction, processing, or distribution outside the limits of copyright law requires written consent from MLLMLANanofab.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
};

export default LegalPage;
