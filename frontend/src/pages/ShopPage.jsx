import React, { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ShopPage = ({ onOpenAuth, currentUser, onOpenCheckout }) => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { addToast } = useToast();

  const handleSelectPlan = (planKey) => {
    if (!currentUser) {
      addToast('Please sign in or create an account to purchase a license plan.', 'info');
      onOpenAuth();
    } else {
      onOpenCheckout();
    }
  };

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
            Licenses & Pricing
          </span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', margin: '0.5rem 0' }}>
            MLLMLANanofab License Plans
          </h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            Select software simulation licenses, GDSII converters, and cleanroom support packages tailored to your research facility.
          </p>
        </div>
      </section>

      {/* Toggle & Cards */}
      <section style={{ padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'white', borderRadius: '30px', padding: '0.3rem', border: '1px solid #CBD5E1', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <button
                onClick={() => setBillingCycle('monthly')}
                style={{ padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, border: 'none', cursor: 'pointer', background: billingCycle === 'monthly' ? '#DA2B1F' : 'transparent', color: billingCycle === 'monthly' ? 'white' : '#333F4C' }}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                style={{ padding: '0.5rem 1.5rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, border: 'none', cursor: 'pointer', background: billingCycle === 'yearly' ? '#DA2B1F' : 'transparent', color: billingCycle === 'yearly' ? 'white' : '#333F4C' }}
              >
                Yearly Billing (20% OFF)
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Academic Plan */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#FFF5F5', color: '#DA2B1F', border: '1px solid #FCA5A5' }}>ACADEMIC & R&D</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333F4C', marginTop: '0.75rem' }}>Academic License</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#DA2B1F', margin: '0.75rem 0' }}>
                  ${billingCycle === 'yearly' ? 119 : 149} <span style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '400' }}>/ month</span>
                </div>
                <p style={{ color: '#4B5563', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  For universities, institute cleanrooms, and non-profit researchers.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#4B5563' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Full 2D Optics Simulation Engine</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> GDSII / OASIS file pre-checker</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Up to 5 active research projects</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Academic forum support</li>
                </ul>
              </div>
              <button
                onClick={() => handleSelectPlan('academic')}
                style={{ width: '100%', padding: '0.75rem', background: '#DA2B1F', color: 'white', borderRadius: '4px', border: 'none', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
              >
                Subscribe Academic Plan
              </button>
            </div>

            {/* Commercial Plan */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', border: '2px solid #DA2B1F', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#DA2B1F', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                MOST POPULAR
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#FFF5F5', color: '#DA2B1F', border: '1px solid #FCA5A5' }}>COMMERCIAL NANOFAB</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333F4C', marginTop: '0.75rem' }}>Commercial License</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#DA2B1F', margin: '0.75rem 0' }}>
                  ${billingCycle === 'yearly' ? 399 : 499} <span style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '400' }}>/ month</span>
                </div>
                <p style={{ color: '#4B5563', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  For semiconductor startups, micro-optics foundries, and industrial R&D.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#4B5563' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Everything in Academic tier</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Unlimited GDSII layout conversions</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> 2.5D Grayscale depth profiler</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Dedicated Cleanroom Process Engineer</li>
                </ul>
              </div>
              <button
                onClick={() => handleSelectPlan('commercial')}
                style={{ width: '100%', padding: '0.75rem', background: '#DA2B1F', color: 'white', borderRadius: '4px', border: 'none', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
              >
                Subscribe Commercial Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#FFF5F5', color: '#DA2B1F', border: '1px solid #FCA5A5' }}>ENTERPRISE FOUNDRY</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333F4C', marginTop: '0.75rem' }}>Enterprise License</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#DA2B1F', margin: '0.75rem 0' }}>
                  ${billingCycle === 'yearly' ? 799 : 999} <span style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '400' }}>/ month</span>
                </div>
                <p style={{ color: '#4B5563', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  For high-volume wafer fabs, multi-site organizations, and custom tool suites.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#4B5563' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Multi-seat site license (Unlimited users)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Custom SECS/GEM fab automation API</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> MongoDB Atlas Cloud Sync & Custom DB</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> 24/7 SLA Executive Support & Onsite Training</li>
                </ul>
              </div>
              <button
                onClick={() => handleSelectPlan('enterprise')}
                style={{ width: '100%', padding: '0.75rem', background: '#DA2B1F', color: 'white', borderRadius: '4px', border: 'none', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
                onMouseEnter={(e) => e.target.style.background = '#7C8795'}
                onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
              >
                Subscribe Enterprise Plan
              </button>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default ShopPage;
