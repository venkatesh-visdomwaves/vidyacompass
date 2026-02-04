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
        <section id="features" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="lg:grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left side: Content */}
                <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    >
                        <div className="inline-block px-3 py-1 bg-accent-50 text-accent-600 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
                            Key Benefits
                        </div>
                        <h2 className="text-2xl md:text-3xl font-light text-slate-900 mb-8 tracking-tight">
                            The <span className="text-primary-600 font-normal">Vidya-Compass</span> Advantage
                    </h2>
                        <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-10 font-light">
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
