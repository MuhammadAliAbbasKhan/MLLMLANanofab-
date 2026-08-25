import React, { useState } from 'react';
import { X, User, Lock, Mail, Building, Shield, ArrowRight } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [planTier, setPlanTier] = useState('100');
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      if (addToast) addToast('Please enter both email address and password.', 'error');
      return;
    }
    if (!email.includes('@')) {
      if (addToast) addToast('Please enter a valid email address.', 'error');
      return;
    }

    const userData = {
      email,
      name: fullName || email.split('@')[0],
      company: company || 'Nanofab Cleanroom Lab',
      plan_tier: planTier === '100' ? 'Basic Premium Service' : planTier === '150' ? 'Professional Premium Service' : 'Enterprise Premium Service',
      is_admin: email.includes('admin')
    };

    if (mode === 'login') {
      if (addToast) addToast(`Welcome back, ${userData.name}! Successfully signed in.`, 'success');
      onLoginSuccess(userData);
      onClose();
    } else {
      if (addToast) addToast(`Account created successfully for ${userData.name}! Opening Stripe Checkout...`, 'success');
      onLoginSuccess(userData, true); // Trigger checkout modal
      onClose();
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(29, 37, 46, 0.85)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', overflowY: 'auto' }}>
      <div style={{ background: 'white', borderRadius: '12px', maxWidth: '440px', width: '100%', padding: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.2)', position: 'relative', border: '1px solid #E2E8F0' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #DA2B1F 0%, #333F4C 100%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', color: 'white' }}>
            <Shield size={24} />
          </div>
          <h3 style={{ color: '#333F4C', fontSize: '1.4rem', fontWeight: 800, margin: 0 }}>
            {mode === 'login' ? 'Sign In to MLLMLANanofab' : 'Create Research Account'}
          </h3>
          <p style={{ color: '#6B7280', fontSize: '0.85rem', marginTop: '0.35rem' }}>
            {mode === 'login' ? 'Enter your credentials to access your simulation recipes' : 'Free DESIGNER access included. Upgrade for premium services.'}
          </p>
        </div>

        {/* Tab Toggle */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', background: '#F1F5F9', borderRadius: '8px', padding: '0.25rem', marginBottom: '1.25rem' }}>
          <button
            onClick={() => setMode('login')}
            style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', background: mode === 'login' ? 'white' : 'transparent', color: mode === 'login' ? '#DA2B1F' : '#6B7280', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', boxShadow: mode === 'login' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none' }}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode('signup')}
            style={{ padding: '0.5rem', borderRadius: '6px', border: 'none', background: mode === 'signup' ? 'white' : 'transparent', color: mode === 'signup' ? '#DA2B1F' : '#6B7280', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', boxShadow: mode === 'signup' ? '0 2px 4px rgba(0,0,0,0.06)' : 'none' }}
          >
            Register Account
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mode === 'signup' && (
            <>
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.25rem', fontWeight: 600 }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="#DA2B1F" style={{ position: 'absolute', left: '10px', top: '10px' }} />
                  <input
                    type="text"
                    required
                    placeholder="Dr. Alexander Weber"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ width: '100%', padding: '0.6rem 0.65rem 0.6rem 2.2rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.25rem', fontWeight: 600 }}>Organization / University</label>
                <div style={{ position: 'relative' }}>
                  <Building size={16} color="#DA2B1F" style={{ position: 'absolute', left: '10px', top: '10px' }} />
                  <input
                    type="text"
                    placeholder="Max Planck Institute / Cleanroom Lab"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{ width: '100%', padding: '0.6rem 0.65rem 0.6rem 2.2rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.25rem', fontWeight: 600 }}>Service Tier Plan</label>
                <select
                  value={planTier}
                  onChange={(e) => setPlanTier(e.target.value)}
                  style={{ width: '100%', padding: '0.6rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem' }}
                >
                  <option value="100">Standard Service Plan ($100 USD/mo)</option>
                  <option value="150">Professional Service Plan ($150 USD/mo)</option>
                  <option value="200">Enterprise Service Plan ($200 USD/mo)</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.25rem', fontWeight: 600 }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#DA2B1F" style={{ position: 'absolute', left: '10px', top: '10px' }} />
              <input
                type="email"
                required
                placeholder="user@cleanroom-lab.org"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '0.6rem 0.65rem 0.6rem 2.2rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', color: '#4B5563', marginBottom: '0.25rem', fontWeight: 600 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#DA2B1F" style={{ position: 'absolute', left: '10px', top: '10px' }} />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '0.6rem 0.65rem 0.6rem 2.2rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.85rem' }}
              />
            </div>
          </div>

          <button
            type="submit"
            style={{ width: '100%', padding: '0.75rem', background: '#DA2B1F', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', transition: 'background 0.3s', marginTop: '0.5rem' }}
          >
            {mode === 'login' ? 'Sign In to Account' : 'Create Account & Proceed'} <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;
