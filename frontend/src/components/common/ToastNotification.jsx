import React from 'react';
import { useToast } from '../../context/ToastContext';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const ToastNotification = () => {
  const { toasts, removeToast } = useToast();

  if (!toasts.length) return null;

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={18} color="#10B981" />;
      case 'error':
      case 'danger':
        return <AlertCircle size={18} color="#EF4444" />;
      case 'warning':
        return <AlertTriangle size={18} color="#F59E0B" />;
      default:
        return <Info size={18} color="#00E5FF" />;
    }
  };

  const getBorderColor = (type) => {
    switch (type) {
      case 'success': return '#10B981';
      case 'error':
      case 'danger': return '#EF4444';
      case 'warning': return '#F59E0B';
      default: return '#00E5FF';
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      maxWidth: '400px',
      width: 'calc(100% - 48px)'
    }}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          style={{
            background: 'rgba(15, 35, 66, 0.95)',
            backdropFilter: 'blur(12px)',
            color: '#F8FAFC',
            padding: '12px 16px',
            borderRadius: '8px',
            borderLeft: `4px solid ${getBorderColor(toast.type)}`,
            boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {getIcon(toast.type)}
            <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{toast.message}</span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            style={{ background: 'none', border: 'none', color: '#94A3B8', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
