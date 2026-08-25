import React from 'react';
import { AuthModal } from '../components/common/AuthModal';

export const AuthPage = ({ initialMode = 'login', onLoginSuccess, setCurrentPage }) => {
  return (
    <div style={{ background: '#F8FAFC', minHeight: '75vh', padding: '3rem 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <AuthModal
        isOpen={true}
        onClose={() => setCurrentPage('home')}
        onLoginSuccess={onLoginSuccess}
        initialMode={initialMode}
      />
    </div>
  );
};

export default AuthPage;
