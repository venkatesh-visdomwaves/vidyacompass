import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero/HeroSection';
import AboutSection from './components/About/AboutSection';
import FeaturesSection from './components/Features/FeaturesSection';
import ModulesSection from './components/Modules/ModulesSection';
import ChallengesSection from './components/Challenges/ChallengesSection';
import ContactSection from './components/Contact/ContactSection';
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

  // Basic smooth scroll implementation for standard browsers
  useEffect(() => {
    document.title = "Vidya Compass | Navigate Your Future";
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-primary-100 selection:text-primary-700">

      {/* 1. Global Navigation Bar */}
      <Navbar onOpenAuth={openAuth} />

      <main>
        {/* 2. Above-the-fold Hero Section (Text Left, Compass Right) */}
        <HeroSection onOpenAuth={openAuth} />

        {/* 3. Foundational Overview */}
        <AboutSection />

        {/* 4. Strategic Advantages */}
        <FeaturesSection />

        {/* 5. Core Operational Modules */}
        <ModulesSection />

        {/* 6. Problem/Solution Deep Dive */}
        <ChallengesSection />

        {/* 7. Conversion/Inquiry Point */}
        <ContactSection />
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
  );
};

export default App;
