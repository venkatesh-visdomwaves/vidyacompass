import React from 'react';
import { motion } from 'framer-motion';
import { productData } from '../../data/productData';

/**
 * AboutSection Component
 * 
 * Overview of Vidya Compass.
 * Illustrates the platform's vision of AI-powered career guidance.
 */
const AboutSection = () => {
    const { overviewSections } = productData.studentCompass;

    return (
        <section id="about" className="py-12 bg-[#E1F0FF] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight flex flex-col items-center justify-center italic uppercase">
                        <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">
                            Vidya Compass
                        </span>
                        <span className="text-gray-900 mt-2 block not-italic font-light">Strategic Intent & Our Aim</span>
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto rounded-full shadow-sm border border-gray-100"></div>
                </motion.div>

                {overviewSections.map((section, idx) => (
                    <div key={idx} className={`grid lg:grid-cols-2 gap-16 items-center ${idx !== 0 ? 'mt-16' : ''}`}>

                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={`relative ${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                        >
                            <div className="absolute -inset-6 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-[3rem] blur-2xl opacity-20"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-4 border-white group">
                                <img
                                    src={
                                        idx === 0 ? "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600" :
                                            idx === 1 ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600" :
                                                idx === 2 ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600" :
                                                    "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1600"
                                    }
                                    alt={section.title}
                                    className="w-full h-[350px] md:h-[450px] object-cover transform group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <p className="text-white font-bold tracking-widest uppercase text-xs">{section.title}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className={`space-y-8 ${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                        >
                            <div className="space-y-4">
                                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight relative inline-block pb-3">
                                    {section.title}
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-primary-600 rounded-full"></div>
                                </h3>

                                <p className="text-base md:text-lg text-gray-600 leading-relaxed text-justify font-light">
                                    {section.content}
                                </p>
                            </div>

                            {section.bullets && (
                                <ul className="grid grid-cols-1 gap-4 mt-8">
                                    {section.bullets.map((bullet, bIdx) => (
                                        <motion.li
                                            key={bIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + (bIdx * 0.1) }}
                                            className="flex items-center gap-4 bg-gray-50/50 p-4 rounded-2xl border border-gray-100 hover:border-primary-300 hover:bg-white hover:shadow-lg transition-all group"
                                        >
                                            <div className="w-3 h-3 bg-primary-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)] group-hover:scale-125 transition-transform"></div>
                                            <span className="text-sm md:text-base font-semibold text-gray-800">{bullet}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutSection;
