import React, { useState } from 'react';
import { ShieldCheck, Zap, FileText, Cpu, Clock, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const PremiumServicesPage = ({ currentUser, onOpenCheckout, setCurrentPage }) => {
  const [serviceType, setServiceType] = useState('gdsii');
  const [description, setDescription] = useState('');
  const [submittedTickets, setSubmittedTickets] = useState([
    { id: 'TKT-8841', service: '2.5D Grayscale Recipe Export', status: 'In Progress by Cleanroom PAL Lab', date: '2026-08-25' }
  ]);
  const { addToast } = useToast();

  const isSubscribed = currentUser && currentUser.is_active;

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      if (addToast) addToast('Please describe your cleanroom service requirements.', 'error');
      return;
    }

    const newTicket = {
      id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      service: serviceType === 'gdsii' ? 'GDSII Layout Conversion' : serviceType === 'grayscale' ? '2.5D Grayscale Profiling' : 'Fab SECS/GEM Automation',
      status: 'Assigned to Senior Application Engineer',
      date: new Date().toISOString().split('T')[0]
    };

    setSubmittedTickets([newTicket, ...submittedTickets]);
    setDescription('');
    if (addToast) addToast(`Service ticket ${newTicket.id} submitted! Application team assigned.`, 'success');
  };

  return (
    <main style={{ fontFamily: 'Source Sans Pro, sans-serif', background: '#F8FAFC', color: '#1D252E', paddingTop: '40px', minHeight: '100vh' }}>
      
      {/* Banner */}
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
            Subscriber Hub & Cleanroom Engineering
          </span>
          <h1 style={{ fontSize: '2.4rem', fontWeight: 'bold', margin: '0.4rem 0' }}>
            Premium Services & Order Management
          </h1>
          <p style={{ fontSize: '1.05rem', opacity: 0.9, maxWidth: '750px', margin: 0 }}>
            Submit custom GDSII conversions, 2.5D grayscale depth profile requests, and track cleanroom process tickets.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '3.5rem 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Subscription Status Banner */}
          {!isSubscribed ? (
            <div style={{ background: '#FFF5F5', border: '2px solid #DA2B1F', borderRadius: '8px', padding: '1.5rem 2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#333F4C', margin: '0 0 0.4rem 0' }}>
                  Upgrade to Access Premium Cleanroom Services
                </h3>
                <p style={{ color: '#4B5563', fontSize: '0.9rem', margin: 0 }}>
                  You are currently using the Free DESIGNER Suite. Activate a Premium Service Plan ($100 USD, $150 USD, or $200 USD) to request custom GDSII conversions and engineer support.
                </p>
              </div>
              <button
                onClick={onOpenCheckout}
                style={{ background: '#DA2B1F', color: 'white', border: 'none', borderRadius: '6px', padding: '0.75rem 1.5rem', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' }}
              >
                Activate Subscription ($100 - $200 USD)
              </button>
            </div>
          ) : (
            <div style={{ background: '#ECFDF5', border: '1px solid #10B981', borderRadius: '8px', padding: '1.25rem 2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <CheckCircle2 size={24} color="#10B981" />
              <div>
                <strong style={{ color: '#065F46', fontSize: '1rem' }}>Active Premium Subscription Verified!</strong>
                <div style={{ color: '#047857', fontSize: '0.85rem' }}>
                  Plan: {currentUser?.plan_tier || 'Premium Service'} • Ref: {currentUser?.payment_reference || 'STRIPE-ACTIVE'} (No re-payment required for this month)
                </div>
              </div>
            </div>
          )}

          {/* Service Request Form & Active Tickets Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            
            {/* Submit Service Request */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Send size={20} color="#DA2B1F" /> Submit New Service Order
              </h3>

              <form onSubmit={handleSubmitRequest} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Select Premium Service Category
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem', color: '#1D252E' }}
                  >
                    <option value="gdsii">GDSII Layout Conversion & Optimization ($100 USD Plan)</option>
                    <option value="grayscale">2.5D Grayscale Depth Profile Recipe ($150 USD Plan)</option>
                    <option value="secs">Fab SECS/GEM Automation & MongoDB Sync ($200 USD Plan)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: '#4B5563', marginBottom: '0.4rem', fontWeight: 600 }}>
                    Service Requirements & Specifications
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Specify target laser wavelength, resist dosage (mJ/cm²), wafer size, min feature size..."
                    style={{ width: '100%', padding: '0.65rem', background: '#F8FAFC', border: '1px solid #CBD5E1', borderRadius: '6px', fontSize: '0.9rem' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isSubscribed}
                  style={{ width: '100%', padding: '0.75rem', background: isSubscribed ? '#DA2B1F' : '#94A3B8', color: 'white', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: isSubscribed ? 'pointer' : 'not-allowed' }}
                >
                  {isSubscribed ? 'Submit Cleanroom Service Request' : 'Subscription Required to Order'}
                </button>
              </form>
            </div>

            {/* Active Tickets & History */}
            <div style={{ background: 'white', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #E2E8F0' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#333F4C', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Clock size={20} color="#DA2B1F" /> Cleanroom Service Orders
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {submittedTickets.map((t) => (
                  <div key={t.id} style={{ background: '#F8FAFC', borderRadius: '6px', padding: '1rem', border: '1px solid #E2E8F0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#333F4C' }}>{t.id} - {t.service}</span>
                      <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>{t.date}</span>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <CheckCircle2 size={14} /> {t.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default PremiumServicesPage;
