import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import ContactPage from './pages/ContactPage';
import PlatformPage from './pages/PlatformPage';
import CareersPage from './pages/CareersPage';
import ParentsPage from './pages/ParentsPage';
import StudentsPage from './pages/StudentsPage';
import CareerDiscovery from './pages/students/CareerDiscovery';
import GlobalExplorer from './pages/students/GlobalExplorer';
import Roadmap from './pages/students/Roadmap';
import FinancialPlanning from './pages/students/FinancialPlanning';
import CareerIntelligence from './pages/students/CareerIntelligence';
import ProgressDashboard from './pages/parents/ProgressDashboard';
import FinancialSupport from './pages/parents/FinancialSupport';
import RiskSafety from './pages/parents/RiskSafety';
import ExpertGuidance from './pages/parents/ExpertGuidance';

// Careers Sub-pages
import ResumeBuilder from './pages/careers/ResumeBuilder';
import Applications from './pages/careers/Applications';
import SkillAnalysis from './pages/careers/SkillAnalysis';
import MarketIntelligence from './pages/careers/MarketIntelligence';

// Abroad Ecosystem Pages
import AbroadPage from './pages/abroad/AbroadPage';
import CountryDetailPage from './pages/abroad/CountryDetailPage';
import DocumentStorage from './pages/abroad/DocumentStorage';
import IntelligencePage from './pages/abroad/IntelligencePage';

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
            <Route path="/platform" element={<PlatformPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/parents" element={<ParentsPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/students/career-discovery" element={<CareerDiscovery />} />
            <Route path="/students/global-explorer" element={<GlobalExplorer />} />
            <Route path="/students/roadmap" element={<Roadmap />} />
            <Route path="/students/financial-planning" element={<FinancialPlanning />} />
            <Route path="/students/career-intelligence" element={<CareerIntelligence />} />
            <Route path="/parents/dashboard" element={<ProgressDashboard />} />
            <Route path="/parents/financial-support" element={<FinancialSupport />} />
            <Route path="/parents/risk-safety" element={<RiskSafety />} />
            <Route path="/parents/expert-guidance" element={<ExpertGuidance />} />

            {/* Career Sub-routes */}
            <Route path="/careers/resume-builder" element={<ResumeBuilder />} />
            <Route path="/careers/applications" element={<Applications />} />
            <Route path="/careers/skill-analysis" element={<SkillAnalysis />} />
            <Route path="/careers/market-intelligence" element={<MarketIntelligence />} />

            {/* Abroad Routes */}
            <Route path="/abroad" element={<AbroadPage />} />
            <Route path="/abroad/:country" element={<CountryDetailPage />} />
            <Route path="/abroad/documents" element={<DocumentStorage />} />
            <Route path="/intelligence" element={<IntelligencePage />} />

            <Route path="*" element={<HomePage onOpenAuth={openAuth} />} />

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
