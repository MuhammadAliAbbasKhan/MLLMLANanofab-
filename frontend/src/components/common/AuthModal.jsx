import React, { useState } from 'react';
import { X, User, Lock, Mail, Building, Check, Shield } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [planTier, setPlanTier] = useState('academic');
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      addToast('Please enter both email and password.', 'error');
      return;
    }

    const userData = {
      email,
      name: fullName || email.split('@')[0],
      company: company || 'Nanofab Research Lab',
      plan_tier: planTier,
      is_admin: email.includes('admin')
    };

    if (mode === 'login') {
      addToast(`Welcome back, ${userData.name}!`, 'success');
      onLoginSuccess(userData);
      onClose();
    } else {
      addToast(`Account created successfully for ${userData.name}! Triggering license checkout...`, 'success');
      onLoginSuccess(userData, true); // trigger checkout modal
      onClose();
    }
  };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(4, 13, 26, 0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ background: '#0F2342', border: '1px solid rgba(0, 229, 255, 0.3)', borderRadius: '16px', maxWidth: '460px', width: '100%', padding: '2rem', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', position: 'relative' }}>
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #00E5FF 0%, #0284C7 100%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
            <Shield size={26} color="#040D1A" />
          </div>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.4rem', fontWeight: 700 }}>
            {mode === 'login' ? 'Sign In to MLLMLANanofab' : 'Create Research Account'}
          </h3>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            {mode === 'login' ? 'Access your optical simulation projects and nanofab specs' : 'Select a subscription plan to access premium lithography tools'}
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {mode === 'signup' && (
            <>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 500 }}>Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="#00E5FF" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                  <input
                    type="text"
                    required
                    placeholder="Dr. Hans Weber"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.65rem 0.65rem 2.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 500 }}>Institution / Organization</label>
                <div style={{ position: 'relative' }}>
                  <Building size={16} color="#00E5FF" style={{ position: 'absolute', left: '12px', top: '12px' }} />
                  <input
                    type="text"
                    placeholder="Max Planck Institute / Tech University"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem 0.65rem 0.65rem 2.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 500 }}>Subscription Plan Tier</label>
                <select
                  value={planTier}
                  onChange={(e) => setPlanTier(e.target.value)}
                  style={{ width: '100%', padding: '0.65rem', background: '#142A4A', border: '1px solid rgba(0,229,255,0.3)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
                >
                  <option value="academic">Academic Plan ($149/mo)</option>
                  <option value="commercial">Commercial Nanofab ($499/mo)</option>
                  <option value="enterprise">Enterprise Foundry ($999/mo)</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 500 }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={16} color="#00E5FF" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="email"
                required
                placeholder="name@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.65rem 0.65rem 2.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: 500 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#00E5FF" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.65rem 0.65rem 2.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem', padding: '0.8rem' }}
          >
            {mode === 'login' ? 'Sign In' : 'Proceed to Stripe Checkout'}
          </button>
        </form>

        <div style={{ marginTop: '1.25rem', textAlign: 'center', fontSize: '0.85rem', color: '#94A3B8' }}>
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button onClick={() => setMode('signup')} style={{ background: 'none', color: '#00E5FF', fontWeight: 600 }}>
                Register here
              </button>
            </>
          ) : (
            <>
              Already registered?{' '}
              <button onClick={() => setMode('login')} style={{ background: 'none', color: '#00E5FF', fontWeight: 600 }}>
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
