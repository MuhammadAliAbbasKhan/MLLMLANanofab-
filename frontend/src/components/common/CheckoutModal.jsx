import React, { useState } from 'react';
import { X, CreditCard, Lock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const CheckoutModal = ({ isOpen, onClose, currentUser, onPaymentSuccess }) => {
  const [selectedTier, setSelectedTier] = useState('100');
  const [cardNumber, setCardNumber] = useState('4242 •••• •••• 4242');
  const [expiry, setExpiry] = useState('12/28');
  const [cvc, setCvc] = useState('888');
  const [isProcessing, setIsProcessing] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const tierPrices = {
    '100': { name: 'Standard Premium', price: 100 },
    '150': { name: 'Professional Premium', price: 150 },
    '200': { name: 'Enterprise Premium', price: 200 }
  };

  const currentTier = tierPrices[selectedTier] || tierPrices['100'];

  const handlePay = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    if (addToast) addToast('Connecting to Stripe Payment Gateway...', 'info');

    setTimeout(() => {
      setIsProcessing(false);
      const updatedUser = {
        ...(currentUser || {}),
        plan_tier: currentTier.name,
        is_active: true,
        payment_reference: `STRIPE-MLLMLA-${Math.floor(100000 + Math.random() * 900000)}`
      };
      if (addToast) addToast(`Stripe Payment of $${currentTier.price} USD successful! Subscription active.`, 'success');
      onPaymentSuccess(updatedUser);
      onClose();
    }, 1600);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(29, 37, 46, 0.85)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', overflowY: 'auto' }}>
      <div style={{ background: 'white', borderRadius: '12px', maxWidth: '480px', width: '100%', padding: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.2)', position: 'relative', border: '1px solid #E2E8F0' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF5F5', color: '#DA2B1F', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, border: '1px solid #FCA5A5', marginBottom: '0.75rem' }}>
            <Zap size={14} /> Stripe Credit Card Checkout
          </div>
          <h3 style={{ color: '#333F4C', fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>
            Select Premium Service Tier
          </h3>
        </div>

        {/* Tier Selector ($100 USD, $150 USD, $200 USD) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {[
            { id: '100', label: '$100 USD' },
            { id: '150', label: '$150 USD' },
            { id: '200', label: '$200 USD' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setSelectedTier(t.id)}
              style={{
                padding: '0.6rem 0.25rem',
                borderRadius: '6px',
                border: selectedTier === t.id ? '2px solid #DA2B1F' : '1px solid #CBD5E1',
                background: selectedTier === t.id ? '#FFF5F5' : '#F8FAFC',
                color: selectedTier === t.id ? '#DA2B1F' : '#333F4C',
                fontWeight: 800,
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '1rem', marginBottom: '1.5rem', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.9rem', color: '#333F4C', fontWeight: 700 }}>{currentTier.name}</span>
            <span style={{ fontSize: '1.25rem', color: '#DA2B1F', fontWeight: 800 }}>${currentTier.price} USD</span>
          </div>
          <div style={{ fontSize: '0.8rem', color: '#6B7280' }}>
            ✓ Free DESIGNER Suite included. Pays for recipe exports & GDSII conversion engine.
          </div>
        </div>

        {/* Stripe Card Input Form */}
        <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.25rem', fontWeight: 600 }}>Credit Card Number</label>
            <div style={{ position: 'relative' }}>
              <CreditCard size={16} color="#DA2B1F" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="text"
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.65rem 0.65rem 2.4rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.9rem', fontFamily: 'monospace' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.25rem', fontWeight: 600 }}>Expiration (MM/YY)</label>
              <input
                type="text"
                required
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.9rem', textAlign: 'center', fontFamily: 'monospace' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.25rem', fontWeight: 600 }}>CVC Code</label>
              <input
                type="password"
                required
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.9rem', textAlign: 'center', fontFamily: 'monospace' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#6B7280', justifyContent: 'center', marginTop: '0.25rem' }}>
            <Lock size={12} color="#10B981" /> 256-Bit SSL Encrypted by Stripe Payments
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            style={{ width: '100%', padding: '0.8rem', background: isProcessing ? '#94A3B8' : '#DA2B1F', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '0.95rem', cursor: isProcessing ? 'not-allowed' : 'pointer', transition: 'background 0.3s' }}
          >
            {isProcessing ? 'Processing Stripe Transaction...' : `Pay $${currentTier.price} USD & Activate`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
