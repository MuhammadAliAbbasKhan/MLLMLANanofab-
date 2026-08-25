import React, { useState } from 'react';
import { AuthModal } from '../components/common/AuthModal';

export const AuthPage = ({ initialMode = 'login', onLoginSuccess, setCurrentPage }) => {
  return (
    <div style={{ background: '#0A192F', minHeight: '80vh', padding: '4rem 0' }}>
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
