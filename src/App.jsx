import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer/Footer';
import AICompanion from './components/Companion/AICompanion';
import AuthModal from './components/Auth/AuthModal';
import './App.css';

/**
 * Main App Component
 * 
 * Assembles all modular components to form the Vidya Compass platform.
 * Manages high-level layout and global states if necessary.
 */
const App = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  const openAuth = (mode = 'signin') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary-100 selection:text-primary-700">

        {/* 1. Global Navigation Bar */}
        <Navbar onOpenAuth={openAuth} />

        <main>
          <Routes>
            <Route path="/" element={<HomePage onOpenAuth={openAuth} />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* 8. Global Site Footer */}
        <Footer />

        {/* AI Voice Navigator & Companion */}
        <AICompanion />

        {/* Global Auth Modal */}
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
          initialMode={authMode}
        />

      </div>
    </BrowserRouter>
  );
};

export default App;
