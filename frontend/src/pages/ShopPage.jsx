import React, { useState } from 'react';
import { Check, ShoppingCart, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ShopPage = ({ onOpenAuth, currentUser, onOpenCheckout, setCurrentPage }) => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const { addToast } = useToast();

  const isSubscribed = currentUser && currentUser.is_active;

  const handleSelectPlan = (planKey) => {
    if (isSubscribed) {
      if (addToast) addToast(`You are already an active subscriber to ${currentUser.plan_tier || 'Premium Services'} for this month!`, 'info');
      if (setCurrentPage) setCurrentPage('premium-services');
      return;
    }

    if (!currentUser) {
      if (addToast) addToast('Please sign in or create an account to activate a premium service tier.', 'info');
      onOpenAuth();
    } else {
      onOpenCheckout();
    }
  };

  return (
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: '#F8FAFC', color: '#1D252E', paddingTop: '40px', minHeight: '100vh' }}>
      
      {/* Page Header Banner */}
      <section style={{
        position: 'relative',
        minHeight: '200px',
        background: 'linear-gradient(135deg, #333F4C 0%, #1D252E 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '2.5rem 0',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%' }}>
          <span style={{ color: '#DA2B1F', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Transparent Pricing & Premium Services
          </span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold', margin: '0.4rem 0' }}>
            MLLMLANanofab Service Plans
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            The basic DESIGNER tool is 100% FREE for all users. You only pay when activating Premium Recipe Exports, 2.5D Profiling, or Wafer Fabs ($100 USD, $150 USD, $200 USD).
          </p>
        </div>
      </section>

      {/* Free Tier Banner & Subscription Status */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          {isSubscribed ? (
            <div style={{ background: '#ECFDF5', border: '2px solid #10B981', borderRadius: '8px', padding: '1.5rem 2rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <CheckCircle2 size={28} color="#10B981" />
                <div>
                  <strong style={{ color: '#065F46', fontSize: '1.1rem' }}>Active Premium Subscriber for This Month!</strong>
                  <div style={{ color: '#047857', fontSize: '0.85rem', marginTop: '2px' }}>
                    Active Plan: <strong>{currentUser.plan_tier || 'Premium Service'}</strong> • Payment Ref: {currentUser.payment_reference || 'STRIPE-OK'} (No duplicate re-payment required!)
                  </div>
                </div>
              </div>
              <button
                onClick={() => { if (setCurrentPage) setCurrentPage('premium-services'); }}
                style={{ background: '#10B981', color: 'white', border: 'none', borderRadius: '6px', padding: '0.65rem 1.25rem', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}
              >
                Access Premium Services Hub →
              </button>
            </div>
          ) : (
            <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Zap size={24} color="#2563EB" />
                <div>
                  <strong style={{ color: '#1E40AF', fontSize: '1rem' }}>DESIGNER Suite is 100% Free for Basic Use!</strong>
                  <div style={{ color: '#3B82F6', fontSize: '0.85rem', marginTop: '2px' }}>You only pay when activating Premium Recipe Exports, 2.5D Profiling, or Wafer Fabs.</div>
                </div>
              </div>
              <button
                onClick={onOpenCheckout}
                style={{ background: '#2563EB', color: 'white', border: 'none', borderRadius: '4px', padding: '0.5rem 1.25rem', fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer' }}
              >
                Explore Premium Features
              </button>
            </div>
          )}

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

          {/* Single Form Centralized Pricing Grid ($100 USD, $150 USD, $200 USD) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Standard Service - $100 USD */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#F1F5F9', color: '#333F4C', border: '1px solid #CBD5E1' }}>STANDARD PREMIUM</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333F4C', marginTop: '0.75rem' }}>Basic Premium Service</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#DA2B1F', margin: '0.75rem 0' }}>
                  ${billingCycle === 'yearly' ? 80 : 100} <span style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '400' }}>USD / month</span>
                </div>
                <p style={{ color: '#4B5563', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  Essential CAD GDSII converters & downloadable PDF recipe profiles for cleanroom users.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#4B5563' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Free 2D Optics Simulator access</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> GDSII & OASIS file pre-checker</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Up to 10 exported recipe files / mo</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Standard Email & Ticket Support</li>
                </ul>
              </div>
              <button
                onClick={() => handleSelectPlan('basic')}
                style={{ width: '100%', padding: '0.75rem', background: isSubscribed ? '#10B981' : '#DA2B1F', color: 'white', borderRadius: '4px', border: 'none', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
              >
                {isSubscribed ? '✓ Active Plan (No Re-payment)' : 'Select $100 USD Service Plan'}
              </button>
            </div>

            {/* Professional Service - $150 USD */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 8px 24px rgba(0,0,0,0.12)', border: '2px solid #DA2B1F', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#DA2B1F', color: 'white', padding: '0.2rem 0.8rem', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                POPULAR CHOICE
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#FFF5F5', color: '#DA2B1F', border: '1px solid #FCA5A5' }}>PROFESSIONAL NANOFAB</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333F4C', marginTop: '0.75rem' }}>Professional Service</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#DA2B1F', margin: '0.75rem 0' }}>
                  ${billingCycle === 'yearly' ? 120 : 150} <span style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '400' }}>USD / month</span>
                </div>
                <p style={{ color: '#4B5563', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  Full 2.5D Grayscale depth profiler, multi-layer alignment & unlimited CAD layout conversions.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#4B5563' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Everything in $100 Tier</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> 2.5D Grayscale depth & profile engine</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Unlimited CAD GDSII recipe exports</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Priority Application Engineer support</li>
                </ul>
              </div>
              <button
                onClick={() => handleSelectPlan('pro')}
                style={{ width: '100%', padding: '0.75rem', background: isSubscribed ? '#10B981' : '#DA2B1F', color: 'white', borderRadius: '4px', border: 'none', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
              >
                {isSubscribed ? '✓ Active Plan (No Re-payment)' : 'Select $150 USD Service Plan'}
              </button>
            </div>

            {/* Enterprise Service - $200 USD */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#F1F5F9', color: '#333F4C', border: '1px solid #CBD5E1' }}>ENTERPRISE FOUNDRY</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#333F4C', marginTop: '0.75rem' }}>Enterprise Service</h3>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#DA2B1F', margin: '0.75rem 0' }}>
                  ${billingCycle === 'yearly' ? 160 : 200} <span style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: '400' }}>USD / month</span>
                </div>
                <p style={{ color: '#4B5563', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  Complete cleanroom wafer fab integration, multi-user site license & MongoDB Atlas cloud sync.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#4B5563' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Multi-user site license (Unlimited users)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> Direct SECS/GEM fab automation API</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> SQLite + MongoDB Atlas Cloud sync</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#DA2B1F" /> 24/7 SLA Dedicated Cleanroom Consultant</li>
                </ul>
              </div>
              <button
                onClick={() => handleSelectPlan('enterprise')}
                style={{ width: '100%', padding: '0.75rem', background: isSubscribed ? '#10B981' : '#DA2B1F', color: 'white', borderRadius: '4px', border: 'none', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
              >
                {isSubscribed ? '✓ Active Plan (No Re-payment)' : 'Select $200 USD Service Plan'}
              </button>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default ShopPage;
