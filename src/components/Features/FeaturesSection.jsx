import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar, FaAward, FaUsers, FaChartBar, FaRocket } from 'react-icons/fa';
import { productData } from '../../data/productData';

/**
 * FeaturesSection Component
 * 
 * Showcases the key competitive advantages of Vidya Compass.
 * Uses a premium Advantage design with high-impact visual elements.
 */
const FeaturesSection = () => {
    const { advantage } = productData.studentCompass;

    const icons = [
        <FaStar />, <FaAward />, <FaChartBar />, <FaRocket />
    ];

    return (
        <section id="features" className="py-20 bg-[#E1F0FF] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="lg:grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tight flex flex-col italic uppercase">
                            <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent underline decoration-[#138808]">
                                The Advantage
                            </span>
                            <span className="text-gray-900 mt-2 block not-italic font-light text-xl md:text-3xl tracking-[0.1em] uppercase">Precision Career Guidance</span>
                        </h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] rounded-full shadow-sm border border-gray-100 mb-8"></div>

                        <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-10 font-light text-justify">
                            {advantage.intro}
                        </p>

                        <div className="space-y-4">
                            {advantage.bullets.map((bullet, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary-100 hover:bg-white hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-500 text-base group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                                        {icons[idx] || <FaCheckCircle />}
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-normal text-slate-700 group-hover:text-primary-600 transition-colors">
                                            {bullet}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right side: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative mt-20 lg:mt-0"
                    >
                        <div className="absolute -inset-10 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-slate-50">
                            <img
                                src="https://media.istockphoto.com/id/1312257273/photo/compass-sitting-over-metallic-dark-blue-background.jpg?s=612x612&w=0&k=20&c=InwSQjqC5lXpodDC6dfQbGOY7flchbvjNlsmpeFfQqE="
                                alt="Vidya Compass Advantage"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
                        </div>

                        {/* Decorative Circles */}
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-primary-500 rounded-full opacity-5 animate-float"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-500 rounded-full opacity-5 animate-float" style={{ animationDelay: '2s' }}></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
