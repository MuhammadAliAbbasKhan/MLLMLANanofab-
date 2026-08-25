import React, { useState } from 'react';
import { ShieldCheck, Lock, Users, Activity, FileText, CheckCircle2, AlertTriangle, Key } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const AdminPage = () => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('analytics');
  const { addToast } = useToast();

  const mockUsers = [
    { id: 1, name: 'Dr. Hans Weber', email: 'weber@mpg-optics.de', company: 'Max Planck Institute', plan: 'Academic', status: 'Active', created: '2026-08-10' },
    { id: 2, name: 'Elena Rostova', email: 'elena@nanofab-systems.com', company: 'Nanofab Systems Inc.', plan: 'Commercial', status: 'Active', created: '2026-08-14' },
    { id: 3, name: 'Prof. Chen Wei', email: 'chenwei@tsinghua.edu.cn', company: 'Tsinghua University', plan: 'Enterprise', status: 'Active', created: '2026-08-20' }
  ];

  const mockTrials = [
    { id: 101, name: 'Dr. Sarah Lin', email: 'slin@mit.edu', system: 'MLA 150', status: 'Pending Review', date: '2026-08-24' },
    { id: 102, name: 'Marcus Brody', email: 'brody@quantum-foundry.com', system: 'NanoFrazor', status: 'Approved', date: '2026-08-22' }
  ];

  const handleAuth = (e) => {
    e.preventDefault();
    if (passcode === 'aliabbas1234578!') {
      setIsAuthenticated(true);
      addToast('Executive Admin Access Granted!', 'success');
    } else {
      addToast('Invalid Admin Secret Passcode.', 'error');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ background: '#0A192F', minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="glass-panel" style={{ maxWidth: '420px', width: '100%', padding: '2.5rem', textAlign: 'center', border: '1px solid rgba(0, 229, 255, 0.3)' }}>
          <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: 'linear-gradient(135deg, #00E5FF 0%, #0284C7 100%)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
            <ShieldCheck size={30} color="#040D1A" />
          </div>
          <h2 style={{ color: '#FFF', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Executive Admin Portal 🛡️
          </h2>
          <p style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            Enter your secret passcode to unlock system analytics, user management, and MongoDB Atlas database records.
          </p>

          <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <Key size={16} color="#00E5FF" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="password"
                required
                placeholder="Enter Admin Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.65rem 0.65rem 2.4rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#FFF', fontSize: '0.9rem' }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>
              Authenticate Admin Console
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#0A192F', color: '#F8FAFC', padding: '3rem 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', gap: '1rem' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00E5FF', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase' }}>
              <ShieldCheck size={14} /> Authorized Executive Console
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#FFF' }}>
              MLLMLANanofab Admin Dashboard
            </h1>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="btn-outline" style={{ fontSize: '0.8rem' }}>
            Lock Console
          </button>
        </div>

        {/* Dashboard Stat Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600 }}>TOTAL USERS</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00E5FF', margin: '0.25rem 0' }}>1,248</div>
            <div style={{ color: '#10B981', fontSize: '0.75rem' }}>+12% this month</div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600 }}>ACTIVE SUBSCRIPTIONS</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00E5FF', margin: '0.25rem 0' }}>482</div>
            <div style={{ color: '#CBD5E1', fontSize: '0.75rem' }}>Academic & Commercial</div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600 }}>EVALUATION TRIALS</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#00E5FF', margin: '0.25rem 0' }}>34</div>
            <div style={{ color: '#F59E0B', fontSize: '0.75rem' }}>8 pending review</div>
          </div>

          <div className="glass-card" style={{ padding: '1.5rem' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600 }}>DUAL DB SYNC STATUS</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981', margin: '0.4rem 0' }}>✓ SQLite + MongoDB</div>
            <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Atlas Cloud Sync Online</div>
          </div>
        </div>

        {/* Management Tabs */}
        <div className="glass-panel" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
            <button
              onClick={() => setActiveTab('analytics')}
              style={{ background: 'none', border: 'none', color: activeTab === 'analytics' ? '#00E5FF' : '#94A3B8', fontWeight: 700, fontSize: '0.9rem' }}
            >
              Registered Users
            </button>
            <button
              onClick={() => setActiveTab('trials')}
              style={{ background: 'none', border: 'none', color: activeTab === 'trials' ? '#00E5FF' : '#94A3B8', fontWeight: 700, fontSize: '0.9rem' }}
            >
              Trial Requests
            </button>
          </div>

          {activeTab === 'analytics' && (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ color: '#00E5FF', borderBottom: '1px solid rgba(0,229,255,0.2)' }}>
                    <th style={{ padding: '0.75rem' }}>ID</th>
                    <th style={{ padding: '0.75rem' }}>User Name</th>
                    <th style={{ padding: '0.75rem' }}>Email</th>
                    <th style={{ padding: '0.75rem' }}>Organization</th>
                    <th style={{ padding: '0.75rem' }}>Plan Tier</th>
                    <th style={{ padding: '0.75rem' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockUsers.map((u) => (
                    <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1' }}>
                      <td style={{ padding: '0.75rem' }}>#{u.id}</td>
                      <td style={{ padding: '0.75rem', fontWeight: 600, color: '#FFF' }}>{u.name}</td>
                      <td style={{ padding: '0.75rem' }}>{u.email}</td>
                      <td style={{ padding: '0.75rem' }}>{u.company}</td>
                      <td style={{ padding: '0.75rem' }}><span style={{ color: '#00E5FF', fontWeight: 700 }}>{u.plan}</span></td>
                      <td style={{ padding: '0.75rem' }}><span style={{ color: '#10B981' }}>{u.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'trials' && (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                <thead>
                  <tr style={{ color: '#00E5FF', borderBottom: '1px solid rgba(0,229,255,0.2)' }}>
                    <th style={{ padding: '0.75rem' }}>Request ID</th>
                    <th style={{ padding: '0.75rem' }}>Applicant Name</th>
                    <th style={{ padding: '0.75rem' }}>Email</th>
                    <th style={{ padding: '0.75rem' }}>Target System</th>
                    <th style={{ padding: '0.75rem' }}>Status</th>
                    <th style={{ padding: '0.75rem' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTrials.map((t) => (
                    <tr key={t.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#CBD5E1' }}>
                      <td style={{ padding: '0.75rem' }}>#{t.id}</td>
                      <td style={{ padding: '0.75rem', fontWeight: 600, color: '#FFF' }}>{t.name}</td>
                      <td style={{ padding: '0.75rem' }}>{t.email}</td>
                      <td style={{ padding: '0.75rem', color: '#00E5FF' }}>{t.system}</td>
                      <td style={{ padding: '0.75rem' }}>{t.status}</td>
                      <td style={{ padding: '0.75rem' }}>
                        <button onClick={() => addToast(`Approved trial request #${t.id}`, 'success')} className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem' }}>
                          Approve License
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default AdminPage;
