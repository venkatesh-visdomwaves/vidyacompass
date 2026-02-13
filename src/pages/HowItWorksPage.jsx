import React from 'react';
import { motion } from 'framer-motion';
import { HowItWorksHero } from '../components/Hero/HowItWorksHero';

const steps = [
    {
        title: "Student Discovery",
        subtitle: "360-Degree Profiling",
        content: "We build a comprehensive profile covering interests, skills, personality, learning patterns, and aspirations. This goes beyond exam scores to understand who the student truly is.",
        color: "from-primary-500 to-primary-600"
    },
    {
        title: "AI Career Matching",
        subtitle: "Intelligent Recommendations",
        content: "Advanced AI models generate ranked career options based on suitability and feasibility. We explore traditional, emerging, and interdisciplinary paths.",
        color: "from-accent-500 to-accent-600"
    },
    {
        title: "Reality Check",
        subtitle: "Practical Feasibility Analysis",
        content: "Each career is evaluated for financial practicality, health considerations, and geographic scope. We balance dreams with real-world constraints.",
        color: "from-emerald-500 to-emerald-600"
    },
    {
        title: "Career Roadmap",
        subtitle: "Step-by-Step Pathway",
        content: "Students receive a clear, actionable plan with timelines, required courses, skill development milestones, and alternative routes.",
        color: "from-primary-600 to-accent-500"
    },
    {
        title: "Continuous Guidance",
        subtitle: "Adaptive Support",
        content: "Recommendations adapt as students evolve. Progress tracking and ongoing guidance ensure the path remains relevant.",
        color: "from-accent-600 to-emerald-500"
    }
];

const HowItWorksPage = () => {
    return (
        <div className="pt-16 bg-[#E1F0FF] min-h-screen">
            <HowItWorksHero />

            <div className="max-w-6xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight flex flex-col items-center justify-center italic uppercase">
                        <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">
                            Vidya Compass
                        </span>
                        <span className="text-gray-900 mt-2 block not-italic font-light">Our Process & Methodology</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto rounded-full shadow-sm border border-gray-100 mb-8"></div>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                        A structured path from confusion to clarity, powered by AI and real-world intelligence.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line - Subtle Gradient */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary-200 via-primary-100 to-transparent transform -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-8 md:space-y-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative flex items-center justify-between md:flex-row flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Center Marker - Enhanced Glow */}
                                <div className={`absolute left-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br ${step.color} rounded-full z-10 transform -translate-x-1/2 hidden md:block shadow-[0_0_20px_white,0_0_10px_rgba(0,112,243,0.5)] border-2 border-white`}></div>

                                <div className="w-full md:w-[47%]">
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.01 }}
                                        className="backdrop-blur-xl bg-white/40 p-7 md:p-9 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white/60 hover:border-white/90 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                                    >
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className={`flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${step.color} text-white font-bold text-sm shadow-lg shadow-primary-500/10`}>
                                                {index + 1}
                                            </div>
                                            <span className={`text-[10px] font-bold tracking-[0.2em] bg-gradient-to-r ${step.color} bg-clip-text text-transparent uppercase`}>
                                                Step {index + 1}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-1.5 text-slate-900 group-hover:text-primary-700 transition-colors duration-300">
                                            {step.title}
                                        </h3>
                                        <p className="text-primary-600/80 font-bold mb-4 text-[10px] uppercase tracking-[0.25em]">
                                            {step.subtitle}
                                        </p>
                                        <p className="text-slate-700 leading-relaxed font-normal text-base md:text-lg opacity-90">
                                            {step.content}
                                        </p>
                                    </motion.div>
                                </div>

                                <div className="hidden md:block md:w-[47%]"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorksPage;
