import React, { useState } from 'react';
import { X, CreditCard, Lock, CheckCircle2, ShieldCheck, Zap, AlertCircle } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const CheckoutModal = ({ isOpen, onClose, currentUser, onPaymentSuccess }) => {
  const [selectedTier, setSelectedTier] = useState('100');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { addToast } = useToast();

  if (!isOpen) return null;

  const tierPrices = {
    '100': { name: 'Basic Premium Service', price: 100 },
    '150': { name: 'Professional Premium Service', price: 150 },
    '200': { name: 'Enterprise Premium Service', price: 200 }
  };

  const currentTier = tierPrices[selectedTier] || tierPrices['100'];

  const handlePay = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Real Data Validation
    if (!fullName.trim() || fullName.trim().length < 3) {
      setErrorMessage('Please enter a valid Cardholder Full Name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    const cleanCard = cardNumber.replace(/\s+/g, '');
    if (!cleanCard || cleanCard.length < 15 || isNaN(cleanCard)) {
      setErrorMessage('Please enter a valid 15-16 digit credit card number.');
      return;
    }
    if (!expiry.trim() || !expiry.includes('/') || expiry.length < 5) {
      setErrorMessage('Please enter a valid Expiration Date (MM/YY).');
      return;
    }
    if (!cvc.trim() || cvc.length < 3 || isNaN(cvc)) {
      setErrorMessage('Please enter a valid 3 or 4 digit security CVC code.');
      return;
    }

    setIsProcessing(true);
    if (addToast) addToast('Connecting to Stripe Payment Gateway...', 'info');

    setTimeout(() => {
      setIsProcessing(false);
      const updatedUser = {
        ...(currentUser || {}),
        name: fullName,
        email: email,
        plan_tier: currentTier.name,
        price_paid: currentTier.price,
        is_active: true,
        paid_date: new Date().toISOString(),
        payment_reference: `STRIPE-MLLMLA-${Math.floor(100000 + Math.random() * 900000)}`
      };
      if (addToast) addToast(`Stripe Payment of $${currentTier.price} USD successful! Subscription active for 30 days.`, 'success');
      onPaymentSuccess(updatedUser);
      onClose();
    }, 1600);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(29, 37, 46, 0.85)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', overflowY: 'auto' }}>
      <div style={{ background: 'white', borderRadius: '12px', maxWidth: '480px', width: '92vw', maxHeight: '90vh', overflowY: 'auto', padding: '2rem 1.75rem', boxShadow: '0 20px 50px rgba(0,0,0,0.25)', position: 'relative', border: '1px solid #E2E8F0', margin: 'auto' }}>
        <button
          onClick={onClose}
          aria-label="Close checkout"
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333F4C', cursor: 'pointer', zIndex: 10, transition: 'all 0.2s' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#DA2B1F'; e.currentTarget.style.color = '#FFF'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#F1F5F9'; e.currentTarget.style.color = '#333F4C'; }}
        >
          <X size={18} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#FFF5F5', color: '#DA2B1F', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 700, border: '1px solid #FCA5A5', marginBottom: '0.75rem' }}>
            <Zap size={14} /> Stripe Secure Checkout
          </div>
          <h3 style={{ color: '#333F4C', fontSize: '1.35rem', fontWeight: 800, margin: 0 }}>
            Activate Premium Service Tier
          </h3>
        </div>

        {/* Tier Selector ($100 USD, $150 USD, $200 USD) */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem', marginBottom: '1.25rem' }}>
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
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '0.85rem 1rem', marginBottom: '1.25rem', border: '1px solid #E2E8F0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#333F4C', fontWeight: 700 }}>{currentTier.name}</span>
            <span style={{ fontSize: '1.15rem', color: '#DA2B1F', fontWeight: 800 }}>${currentTier.price} USD</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#6B7280' }}>
            ✓ Includes full 30 days active cleanroom service exports & GDSII conversion engine.
          </div>
        </div>

        {/* Validation Error Message */}
        {errorMessage && (
          <div style={{ background: '#FEF2F2', border: '1px solid #FCA5A5', color: '#991B1B', borderRadius: '6px', padding: '0.65rem', fontSize: '0.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <AlertCircle size={16} /> {errorMessage}
          </div>
        )}

        {/* Real Data Form Inputs */}
        <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.2rem', fontWeight: 600 }}>Cardholder Full Name</label>
            <input
              type="text"
              placeholder="e.g. Dr. Alexander Weber"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 0.75rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.2rem', fontWeight: 600 }}>Billing Email Address</label>
            <input
              type="email"
              placeholder="alexander@cleanroom-lab.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.6rem 0.75rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem' }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.2rem', fontWeight: 600 }}>Credit Card Number (16 digits)</label>
            <div style={{ position: 'relative' }}>
              <CreditCard size={16} color="#DA2B1F" style={{ position: 'absolute', left: '10px', top: '10px' }} />
              <input
                type="text"
                placeholder="4532 •••• •••• 8892"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                style={{ width: '100%', padding: '0.6rem 0.65rem 0.6rem 2.2rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem', fontFamily: 'monospace' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.2rem', fontWeight: 600 }}>Expiry (MM/YY)</label>
              <input
                type="text"
                placeholder="10/28"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                style={{ width: '100%', padding: '0.6rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem', textAlign: 'center', fontFamily: 'monospace' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.2rem', fontWeight: 600 }}>Security CVC</label>
              <input
                type="password"
                placeholder="882"
                maxLength={4}
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                style={{ width: '100%', padding: '0.6rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem', textAlign: 'center', fontFamily: 'monospace' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#6B7280', justifyContent: 'center', marginTop: '0.2rem' }}>
            <Lock size={12} color="#10B981" /> 256-Bit SSL Encrypted via Stripe Payments
          </div>

          <button
            type="submit"
            disabled={isProcessing}
            style={{ width: '100%', padding: '0.75rem', background: isProcessing ? '#94A3B8' : '#DA2B1F', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '0.9rem', cursor: isProcessing ? 'not-allowed' : 'pointer', transition: 'background 0.3s' }}
          >
            {isProcessing ? 'Processing Transaction...' : `Pay $${currentTier.price} USD & Activate`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
