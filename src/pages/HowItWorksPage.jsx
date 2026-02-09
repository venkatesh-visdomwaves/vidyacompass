import React from 'react';
import { HowItWorksHero } from '../components/Hero/HowItWorksHero';

const HowItWorksPage = () => {
    return (
        <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
            <HowItWorksHero />
            {/* Additional content sections can be added here */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
                    <p>Detailed breakdown steps coming here...</p>
                </div>
            </section>
        </div>
    );
};

export default HowItWorksPage;
