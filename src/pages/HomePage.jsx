import React from 'react';
import HeroSection from '../components/Hero/HeroSection';
import AboutSection from '../components/About/AboutSection';
import FeaturesSection from '../components/Features/FeaturesSection';
import ModulesSection from '../components/Modules/ModulesSection';
import ChallengesSection from '../components/Challenges/ChallengesSection';
import SubNavbar from '../components/Navbar/SubNavbar';

const HomePage = ({ onOpenAuth }) => {
    return (
        <>
            <HeroSection onOpenAuth={onOpenAuth} />
            <SubNavbar />
            <AboutSection />
            <FeaturesSection />
            <ModulesSection />
            <ChallengesSection />
        </>
    );
};

export default HomePage;
