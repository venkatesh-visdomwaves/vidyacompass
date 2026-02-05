import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaUsers, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { productData } from '../../data/productData';
import Logo3D from '../Navbar/Logo3D';

/**
 * ChallengesSection Component
 * 
 * Highlights common pain points for both students and parents.
 * Concludes with the Vidya Compass value proposition.
 */
const ChallengesSection = () => {
    const { challenges } = productData.studentCompass;

    return (
        <section id="challenges" className="py-12 bg-[#E6F3FF] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading - Unified Strategic Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight flex flex-col items-center justify-center italic uppercase">
                        <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">
                            Problem Statement
                        </span>
                        <span className="text-gray-900 mt-2 block not-italic font-light">Navigating Challenges</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto rounded-full shadow-sm mb-8"></div>
                    <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                        {challenges.intro}
                    </p>
                </motion.div>

                <div className="space-y-40">
                    {challenges.categories.map((group, groupIdx) => (
                        <div key={groupIdx} className="relative">
                            {/* Group Header - Centered & Professional */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="mb-20 text-center"
                            >
                                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight inline-block relative pb-4">
                                    {group.title}
                                    <div className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-blue-500 rounded-full"></div>
                                </h3>
                            </motion.div>

                            {/* Challenge Items - Vertical List (One by One) */}
                            <div className="max-w-4xl mx-auto space-y-12">
                                {group.items.map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                                        className="relative pl-12 md:pl-16 p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-500 group"
                                    >
                                        {/* Premium Modern Point Indicator */}
                                        <div className="absolute left-6 md:left-8 top-10 flex flex-col items-center">
                                            <div className="w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-125 transition-transform duration-500" />
                                            {idx !== group.items.length - 1 && (
                                                <div className="w-0.5 h-full bg-slate-200 absolute top-4 -z-10" />
                                            )}
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                                {item.title}
                                            </h4>

                                            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light text-justify">
                                                {item.desc}
                                            </p>

                                            {item.bullets && (
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                                    {item.bullets.map((bullet, bIdx) => (
                                                        <motion.div
                                                            key={bIdx}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.2 + (bIdx * 0.05) }}
                                                            className="flex items-center gap-3 bg-white/80 p-3 rounded-2xl border border-slate-100 group-hover:border-blue-50 transition-colors"
                                                        >
                                                            <div className="w-2 h-2 bg-blue-400 rounded-full shrink-0 shadow-sm" />
                                                            <span className="text-sm text-slate-500 font-medium">{bullet}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            )}

                                            {item.outro && (
                                                <p className="text-sm text-blue-600 font-semibold italic pt-4 opacity-80 decoration-blue-200 underline-offset-4 underline">
                                                    {item.outro}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* The Core Gap Section - Enhanced with Logo */}
                {challenges.coreGap && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-40"
                    >
                        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-24 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-[120px] -mr-48 -mt-48" />
                            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600 opacity-10 rounded-full blur-[120px] -ml-48 -mb-48" />

                            <div className="max-w-4xl mx-auto relative z-10 text-center">
                                {/* Title Above Logo */}
                                <h2 className="text-xl md:text-2xl font-black mb-12 uppercase tracking-[0.5em] text-blue-400 opacity-80">
                                    {challenges.coreGap.title}
                                </h2>

                                {/* Large Clear 3D Logo */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                                    className="flex justify-center mb-12"
                                >
                                    <div className="relative group">
                                        <div className="absolute -inset-10 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        <Logo3D className="w-48 h-48 md:w-64 md:h-64 transform group-hover:scale-105 transition-transform duration-700 drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
                                    </div>
                                </motion.div>

                                {/* Description Below Logo */}
                                <p className="text-xl md:text-3xl font-light leading-snug mb-16 text-white italic">
                                    "{challenges.coreGap.desc}"
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                                    {challenges.coreGap.bullets.map((bullet, idx) => (
                                        <motion.div
                                            key={idx}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 px-8 py-5 rounded-2xl shadow-lg hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                                                <FaCheckCircle className="text-white text-[10px]" />
                                            </div>
                                            <span className="text-sm md:text-base font-medium text-gray-200">{bullet}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-white to-primary-600 mx-auto rounded-full opacity-30" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ChallengesSection;
