import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, ShoppingCart, HelpCircle } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ShopPage = ({ onOpenAuth, currentUser, onOpenCheckout }) => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // monthly or yearly
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
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '4rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', background: 'rgba(0, 229, 255, 0.1)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0, 229, 255, 0.3)', marginBottom: '0.75rem' }}>
            <ShoppingCart size={15} /> Software Licenses & Cleanroom Consumables
          </div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FFF' }}>
            Subscription Plans & <span style={{ color: '#00E5FF' }}>Shop</span>
          </h1>
          <p style={{ color: '#CBD5E1', fontSize: '1rem', marginTop: '0.5rem' }}>
            Select your software optics simulation tier or purchase cleanroom laser heads & thermal probe tips.
          </p>

          {/* Billing Cycle Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'rgba(255,255,255,0.06)', borderRadius: '30px', padding: '0.3rem', border: '1px solid rgba(255,255,255,0.1)', marginTop: '1.5rem' }}>
            <button
              onClick={() => setBillingCycle('monthly')}
              style={{ padding: '0.4rem 1.25rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, background: billingCycle === 'monthly' ? '#00E5FF' : 'transparent', color: billingCycle === 'monthly' ? '#040D1A' : '#CBD5E1' }}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              style={{ padding: '0.4rem 1.25rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 600, background: billingCycle === 'yearly' ? '#00E5FF' : 'transparent', color: billingCycle === 'yearly' ? '#040D1A' : '#CBD5E1' }}
            >
              Yearly Billing (20% OFF)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          
          {/* Academic Tier */}
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}>ACADEMIC & R&D</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFF', marginTop: '0.75rem' }}>Academic License</h3>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#00E5FF', margin: '0.75rem 0' }}>
                ${billingCycle === 'yearly' ? 119 : 149} <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 400 }}>/ mo</span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                For universities, institute cleanrooms, and non-profit researchers.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> Full 2D Optics Simulation Engine</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> GDSII / OASIS file pre-checker</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> Up to 5 active research projects</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> Academic forum support</li>
              </ul>
            </div>
            <button onClick={() => handleSelectPlan('academic')} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Subscribe Academic Plan
            </button>
          </div>

          {/* Commercial Tier */}
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '2px solid #00E5FF', boxShadow: '0 0 25px rgba(0,229,255,0.3)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#00E5FF', color: '#040D1A', padding: '0.15rem 0.8rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
              MOST POPULAR
            </div>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}>COMMERCIAL NANOFAB</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFF', marginTop: '0.75rem' }}>Commercial License</h3>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#00E5FF', margin: '0.75rem 0' }}>
                ${billingCycle === 'yearly' ? 399 : 499} <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 400 }}>/ mo</span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                For semiconductor startups, micro-optics foundries, and industrial R&D.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> Everything in Academic tier</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> Unlimited GDSII layout conversions</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> 2.5D Grayscale depth profiler</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> Dedicated Cleanroom Process Engineer</li>
              </ul>
            </div>
            <button onClick={() => handleSelectPlan('commercial')} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Subscribe Commercial Plan
            </button>
          </div>

          {/* Enterprise Tier */}
          <div className="glass-panel" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(0,229,255,0.15)', color: '#00E5FF' }}>ENTERPRISE FOUNDRY</span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FFF', marginTop: '0.75rem' }}>Enterprise License</h3>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#00E5FF', margin: '0.75rem 0' }}>
                ${billingCycle === 'yearly' ? 799 : 999} <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 400 }}>/ mo</span>
              </div>
              <p style={{ color: '#CBD5E1', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                For high-volume wafer fabs, multi-site organizations, and custom tool suites.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#CBD5E1', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> Multi-seat site license (Unlimited users)</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> Custom SECS/GEM fab automation API</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> MongoDB Atlas Cloud Sync & Custom DB</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#00E5FF" /> 24/7 SLA Executive Support & Onsite Training</li>
              </ul>
            </div>
            <button onClick={() => handleSelectPlan('enterprise')} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Subscribe Enterprise Plan
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ShopPage;
