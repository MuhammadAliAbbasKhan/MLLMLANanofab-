import React, { useState, useEffect } from 'react';
import { ToastProvider } from './context/ToastContext';
import { ToastNotification } from './components/common/ToastNotification';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CheckoutModal } from './components/common/CheckoutModal';
import { TrialModal } from './components/common/TrialModal';
import { SearchModal } from './components/common/SearchModal';

import { HomePage } from './pages/HomePage';
import { DesignerPage } from './pages/DesignerPage';
import { ProductsPage } from './pages/ProductsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { ShopPage } from './pages/ShopPage';
import { SupportPage } from './pages/SupportPage';
import { AboutPage } from './pages/AboutPage';
import { AdminPage } from './pages/AdminPage';
import { PremiumConsultationPage } from './pages/PremiumConsultationPage';
import { LegalPage } from './pages/LegalPage';
import { AuthPage } from './pages/AuthPage';

import { FunctionsPage } from './pages/FunctionsPage';
import { BenefitsPage } from './pages/BenefitsPage';
import { BasicsPage } from './pages/BasicsPage';
import { VideosPage } from './pages/VideosPage';
import { BrochurePage } from './pages/BrochurePage';
import { PartnersPage } from './pages/PartnersPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { SystemRequirementsPage } from './pages/SystemRequirementsPage';
import { DemoPage } from './pages/DemoPage';
import { TutorialsPage } from './pages/TutorialsPage';
import { FAQPage } from './pages/FAQPage';
import { HandbookPage } from './pages/HandbookPage';
import { ChangelogPage } from './pages/ChangelogPage';

function MainApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentUser, setCurrentUser] = useState(null);

  // Modals state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isTrialOpen, setIsTrialOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('mllmla_user');
      if (stored) {
        setCurrentUser(JSON.parse(stored));
      }
    } catch (e) {
      // Ignore parsing errors
    }
  }, []);

  const handleLoginSuccess = (user, triggerCheckout = false) => {
    setCurrentUser(user);
    localStorage.setItem('mllmla_user', JSON.stringify(user));
    if (triggerCheckout) {
      setIsCheckoutOpen(true);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('mllmla_user');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} onOpenTrial={() => setIsTrialOpen(true)} onOpenAuth={() => setCurrentPage('login')} />;
      case 'designer':
        return <DesignerPage />;
      case 'products':
        return <ProductsPage setCurrentPage={setCurrentPage} onOpenTrial={() => setIsTrialOpen(true)} />;
      case 'applications':
        return <ApplicationsPage setCurrentPage={setCurrentPage} />;
      case 'shop':
        return <ShopPage onOpenAuth={() => setCurrentPage('login')} currentUser={currentUser} onOpenCheckout={() => setIsCheckoutOpen(true)} />;
      case 'support':
        return <SupportPage />;
      case 'about':
        return <AboutPage onOpenTrial={() => setIsTrialOpen(true)} />;
      case 'admin':
        return <AdminPage />;
      case 'premium-consultation':
        return <PremiumConsultationPage currentUser={currentUser} onOpenAuth={() => setCurrentPage('login')} />;
      case 'login':
        return <AuthPage initialMode="login" onLoginSuccess={handleLoginSuccess} setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <AuthPage initialMode="signup" onLoginSuccess={handleLoginSuccess} setCurrentPage={setCurrentPage} />;
      case 'legal-notice':
      case 'privacy-statement':
      case 'terms-conditions':
      case 'service-specification':
      case 'how-to-order':
        return <LegalPage type={currentPage} setCurrentPage={setCurrentPage} />;
      case 'functions':
        return <FunctionsPage setCurrentPage={setCurrentPage} />;
      case 'benefits':
        return <BenefitsPage setCurrentPage={setCurrentPage} />;
      case 'basics':
        return <BasicsPage />;
      case 'videos':
        return <VideosPage />;
      case 'brochure':
        return <BrochurePage />;
      case 'partners':
        return <PartnersPage />;
      case 'testimonials':
        return <TestimonialsPage />;
      case 'system-requirements':
        return <SystemRequirementsPage />;
      case 'demo':
        return <DemoPage onOpenTrial={() => setIsTrialOpen(true)} />;
      case 'tutorials':
        return <TutorialsPage />;
      case 'faq':
        return <FAQPage />;
      case 'handbook':
        return <HandbookPage />;
      case 'changelog':
        return <ChangelogPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} onOpenTrial={() => setIsTrialOpen(true)} onOpenAuth={() => setCurrentPage('login')} />;
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#0A192F', color: '#F8FAFC' }}>
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentUser={currentUser}
        onOpenAuth={() => setCurrentPage('login')}
        onOpenSearch={() => setIsSearchOpen(true)}
        onLogout={handleLogout}
      />

      <main style={{ flex: 1, background: '#0A192F' }}>
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Global Modals */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        currentUser={currentUser}
        onPaymentSuccess={(updatedUser) => {
          setCurrentUser(updatedUser);
          localStorage.setItem('mllmla_user', JSON.stringify(updatedUser));
        }}
      />

      <TrialModal
        isOpen={isTrialOpen}
        onClose={() => setIsTrialOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        setCurrentPage={setCurrentPage}
      />

      <ToastNotification />
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <MainApp />
    </ToastProvider>
  );
}
