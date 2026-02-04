import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import {
    FaLightbulb,
    FaBrain,
    FaGlobeAmericas,
    FaChartLine,
    FaHeart,
    FaRoad,
    FaCheckCircle,
    FaUsers,
    FaMobileAlt,
    FaCompass
} from 'react-icons/fa';
import { productData } from '../../data/productData';

/**
 * ModulesSection Component
 * 
 * Detailed breakdown of the platform's core functionalities.
 * Utilizes a premium grid of feature highlight cards with images.
 */
const ModulesSection = () => {
    const { services } = productData.studentCompass;

    return (
        <section id="modules" className="py-32 bg-[#D6E9FF] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Module Header - Unified Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight flex flex-col items-center justify-center italic uppercase">
                        <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">
                            Key Features & Modules
                        </span>
                        <span className="text-gray-900 mt-2 block not-italic font-light text-xl md:text-2xl lowercase normal-case">
                            Comprehensive Ecosystem. Powerful Modules.
                        </span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto rounded-full shadow-sm mb-8"></div>
                    <p className="text-slate-500 text-sm md:text-base font-light max-w-3xl mx-auto leading-relaxed">
                        Vidya-Compass combines artificial intelligence, in-depth student profiling, and real-world career data to deliver personalized, practical, and future-ready guidance.
                    </p>
                </motion.div>

                {/* Grid of Modules - 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (idx % 2) * 0.1 }}
                            className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.05)] border border-white/50 overflow-hidden flex flex-col md:flex-row h-full group hover:shadow-2xl transition-all duration-700"
                        >
                            {/* Card Image (Left Side) */}
                            <div className="w-full md:w-[40%] relative overflow-hidden min-h-[250px] md:min-h-full">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                            </div>

                            {/* Card Content (Right Side) */}
                            <div className="w-full md:w-[60%] p-8 flex flex-col">
                                <h3 className="text-xl md:text-2xl font-black text-slate-800 mb-4 leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-6 leading-relaxed font-light">
                                    {service.fullDesc || service.desc}
                                </p>

                                {/* Key Features Section */}
                                {service.features && (
                                    <div className="mb-6">
                                        <h4 className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-3">Key Features</h4>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                                                    <FaCheckCircle className="text-blue-500 text-[10px]" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* How It Helps Section */}
                                <div className="mt-auto pt-6 border-t border-slate-50">
                                    <h4 className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-2">How It Helps</h4>
                                    <p className="text-sm font-bold text-blue-700 leading-snug">
                                        {service.howItHelps}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
                <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-200/20 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-200/20 rounded-full blur-[120px]"></div>
            </div>
        </section>
    );
};

export default ModulesSection;
