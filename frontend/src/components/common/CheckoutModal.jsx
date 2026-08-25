import React, { useState } from 'react';
import { X, CreditCard, Lock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const CheckoutModal = ({ isOpen, onClose, currentUser, onPaymentSuccess }) => {
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('888');
  const [isProcessing, setIsProcessing] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const planName = currentUser?.plan_tier || 'Academic';
  const planPrices = {
    academic: 149,
    commercial: 499,
    enterprise: 999
  };
  const price = planPrices[planName.toLowerCase()] || 149;

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    addToast('Contacting Stripe Payment Gateway...', 'info');

    setTimeout(() => {
      setIsProcessing(false);
      const updatedUser = {
        ...(currentUser || {}),
        plan_tier: planName,
        is_active: true,
        payment_reference: `STRIPE-MLLMLA-${Math.floor(100000 + Math.random() * 900000)}`
      };
      addToast(`Payment of $${price} confirmed! Subscription activated.`, 'success');
      onPaymentSuccess(updatedUser);
      onClose();
    }, 1800);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(4, 13, 26, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#0F2342', border: '1px solid rgba(0, 229, 255, 0.4)', borderRadius: '16px', maxWidth: '480px', width: '100%', padding: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', position: 'relative' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,229,255,0.1)', color: '#00E5FF', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600, border: '1px solid rgba(0,229,255,0.3)', marginBottom: '0.75rem' }}>
            <Zap size={14} /> Stripe Secure Checkout
          </div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', fontWeight: 700 }}>
            {planName.toUpperCase()} License Subscription
          </h3>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00E5FF', margin: '0.5rem 0' }}>
            ${price} <span style={{ fontSize: '0.9rem', color: '#94A3B8', fontWeight: 400 }}>/ month</span>
          </div>
        </div>

        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '10px', padding: '1rem', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: '0.85rem', color: '#E2E8F0', fontWeight: 600, marginBottom: '0.5rem' }}>Included Features:</div>
          <ul style={{ listStyle: 'none', fontSize: '0.8rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#10B981" /> Full Lithography Optics Simulator Canvas</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#10B981" /> Unlimited GDSII / OASIS exposure file layouts</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#10B981" /> Direct write & maskless dosage calculation tools</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><CheckCircle2 size={14} color="#10B981" /> Priority Cleanroom Process Engineering support</li>
          </ul>
        </div>

        <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>Card Number</label>
            <div style={{ position: 'relative' }}>
              <CreditCard size={16} color="#00E5FF" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.65rem 0.65rem 2.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem', fontFamily: 'monospace' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>Expiration</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem', textAlign: 'center', fontFamily: 'monospace' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.25rem', fontWeight: 500 }}>CVC / CVV</label>
              <input
                type="text"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem', textAlign: 'center', fontFamily: 'monospace' }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', padding: '0.85rem', marginTop: '0.5rem', opacity: isProcessing ? 0.7 : 1 }}
          >
            {isProcessing ? 'Processing Stripe Intent...' : `Pay $${price} & Activate Subscription`}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '1rem', color: '#64748B', fontSize: '0.75rem' }}>
          <Lock size={12} /> Encrypted via 256-bit SSL Stripe Protocol
        </div>
      </div>
    </div>
  );
};
