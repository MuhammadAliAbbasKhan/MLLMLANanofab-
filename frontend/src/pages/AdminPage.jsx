import React, { useState } from 'react';
import { ShieldCheck, Key } from 'lucide-react';
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
      <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: '#F8FAFC', minHeight: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5rem 1rem 2rem 1rem' }}>
        <div style={{ background: 'white', borderRadius: '8px', maxWidth: '420px', width: '100%', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #E2E8F0', textAlign: 'center' }}>
          <div style={{ width: '54px', height: '54px', borderRadius: '14px', background: '#FFF5F5', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', border: '1px solid #FCA5A5' }}>
            <ShieldCheck size={30} color="#DA2B1F" />
          </div>
          <h2 style={{ color: '#333F4C', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
            Executive Admin Portal 🛡️
          </h2>
          <p style={{ color: '#6B7280', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            Enter your secret passcode to unlock system analytics, user management, and MongoDB Atlas database records.
          </p>

          <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <Key size={16} color="#DA2B1F" style={{ position: 'absolute', left: '12px', top: '12px' }} />
              <input
                type="password"
                required
                placeholder="Enter Admin Passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                style={{ width: '100%', padding: '0.65rem 0.65rem 0.65rem 2.4rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', color: '#1D252E', fontSize: '0.9rem' }}
              />
            </div>
            <button
              type="submit"
              style={{ width: '100%', padding: '0.75rem', background: '#DA2B1F', color: 'white', border: 'none', borderRadius: '4px', fontWeight: '600', cursor: 'pointer', transition: 'background 0.3s' }}
              onMouseEnter={(e) => e.target.style.background = '#7C8795'}
              onMouseLeave={(e) => e.target.style.background = '#DA2B1F'}
            >
              Authenticate Admin Console
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: '#F8FAFC', color: '#1D252E', paddingTop: '80px', minHeight: '80vh' }}>
      
      {/* Banner */}
      <section style={{
        position: 'relative',
        minHeight: '160px',
        background: 'linear-gradient(135deg, #333F4C 0%, #1D252E 100%)',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 0',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#DA2B1F', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Authorized Executive Console
            </span>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '0.25rem 0' }}>
              MLLMLANanofab Admin Dashboard
            </h1>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            style={{ padding: '0.5rem 1rem', background: 'transparent', border: '1px solid white', color: 'white', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}
          >
            Lock Console
          </button>
        </div>
      </section>

      {/* Dashboard Content */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: 'white', borderRadius: '8px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#6B7280', fontSize: '0.8rem', fontWeight: 600 }}>TOTAL USERS</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#DA2B1F', margin: '0.25rem 0' }}>1,248</div>
              <div style={{ color: '#10B981', fontSize: '0.75rem' }}>+12% this month</div>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#6B7280', fontSize: '0.8rem', fontWeight: 600 }}>ACTIVE SUBSCRIPTIONS</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#333F4C', margin: '0.25rem 0' }}>482</div>
              <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>Academic & Commercial</div>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#6B7280', fontSize: '0.8rem', fontWeight: 600 }}>EVALUATION TRIALS</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#DA2B1F', margin: '0.25rem 0' }}>34</div>
              <div style={{ color: '#F59E0B', fontSize: '0.75rem' }}>8 pending review</div>
            </div>

            <div style={{ background: 'white', borderRadius: '8px', padding: '1.5rem', border: '1px solid #E2E8F0', boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#6B7280', fontSize: '0.8rem', fontWeight: 600 }}>DUAL DB SYNC STATUS</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#10B981', margin: '0.4rem 0' }}>✓ SQLite + MongoDB</div>
              <div style={{ color: '#6B7280', fontSize: '0.75rem' }}>Atlas Cloud Sync Online</div>
            </div>
          </div>

          <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', border: '1px solid #E2E8F0', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
              <button
                onClick={() => setActiveTab('analytics')}
                style={{ background: 'none', border: 'none', color: activeTab === 'analytics' ? '#DA2B1F' : '#6B7280', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}
              >
                Registered Users
              </button>
              <button
                onClick={() => setActiveTab('trials')}
                style={{ background: 'none', border: 'none', color: activeTab === 'trials' ? '#DA2B1F' : '#6B7280', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}
              >
                Trial Requests
              </button>
            </div>

            {activeTab === 'analytics' && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ color: '#333F4C', borderBottom: '2px solid #E2E8F0' }}>
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
                      <tr key={u.id} style={{ borderBottom: '1px solid #F1F5F9', color: '#4B5563' }}>
                        <td style={{ padding: '0.75rem' }}>#{u.id}</td>
                        <td style={{ padding: '0.75rem', fontWeight: 600, color: '#333F4C' }}>{u.name}</td>
                        <td style={{ padding: '0.75rem' }}>{u.email}</td>
                        <td style={{ padding: '0.75rem' }}>{u.company}</td>
                        <td style={{ padding: '0.75rem' }}><span style={{ color: '#DA2B1F', fontWeight: 700 }}>{u.plan}</span></td>
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
                    <tr style={{ color: '#333F4C', borderBottom: '2px solid #E2E8F0' }}>
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
                      <tr key={t.id} style={{ borderBottom: '1px solid #F1F5F9', color: '#4B5563' }}>
                        <td style={{ padding: '0.75rem' }}>#{t.id}</td>
                        <td style={{ padding: '0.75rem', fontWeight: 600, color: '#333F4C' }}>{t.name}</td>
                        <td style={{ padding: '0.75rem' }}>{t.email}</td>
                        <td style={{ padding: '0.75rem', color: '#DA2B1F' }}>{t.system}</td>
                        <td style={{ padding: '0.75rem' }}>{t.status}</td>
                        <td style={{ padding: '0.75rem' }}>
                          <button onClick={() => addToast(`Approved trial request #${t.id}`, 'success')} style={{ padding: '0.25rem 0.6rem', background: '#333F4C', color: 'white', border: 'none', borderRadius: '4px', fontSize: '0.75rem', cursor: 'pointer' }}>
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
      </section>

    </main>
  );
};

export default AdminPage;
