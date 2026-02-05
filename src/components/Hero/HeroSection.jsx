import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaStethoscope, FaPalette, FaBriefcase } from 'react-icons/fa';
import Compass from './Compass/Compass';
import './HeroSection.css';

import logo from '../../assets/visdom_waves_logo.png';

const HeroSection = ({ onOpenAuth }) => {
    const [hoveredPath, setHoveredPath] = useState(null);

    const titleChars = "Vidya Compass".split("");
    const subTitleChars = "Navigate Your Future".split("");

    const careerPaths = [
        { icon: <FaLaptopCode />, label: 'Tech', angle: 0, color: 'text-blue-400' },
        { icon: <FaStethoscope />, label: 'Med', angle: 90, color: 'text-red-400' },
        { icon: <FaPalette />, label: 'Arts', angle: 180, color: 'text-purple-400' },
        { icon: <FaBriefcase />, label: 'Biz', angle: 270, color: 'text-emerald-400' }
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 md:py-20 pt-24 md:pt-32"
        >

            {/* ===== Dynamic Nature Background ===== */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                {/* Sun / Sunrise Element */}
                <div className="absolute top-[10%] right-[15%] w-40 h-40 md:w-64 md:h-64 bg-yellow-500 rounded-full blur-[80px] opacity-40 animate-sun-glow"></div>
                <div className="absolute top-[15%] right-[20%] w-20 h-20 md:w-32 md:h-32 bg-orange-400 rounded-full blur-[40px] opacity-60 animate-sunrise"></div>

                {/* Light Rays */}
                <div className="light-beam animate-rays-drift"></div>

                {/* Stars/Dust particles (Simplified for performance) */}
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white rounded-full w-1 h-1"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                filter: 'blur(1px)',
                                animation: `float ${5 + Math.random() * 5}s infinite ease-in-out`,
                                animationDelay: `${Math.random() * 5}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* ===== Premium Overlay (No Blur for Clarity) ===== */}
            <div className="absolute inset-0 bg-slate-950/20"></div>


            <div className="relative max-w-7xl mx-auto w-full z-10">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 pt-8 md:pt-0">

                    {/* ===== Left Content ===== */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl lg:pl-16">
                        {/* Branding */}
                        {/* <a
                            href="https://erp.visdomwaves.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/branding"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex items-center gap-3 mb-6 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
                            >
                                <img src={logo} alt="Visdom Waves" className="h-4 md:h-5 w-auto" />
                                <span className="text-[10px] md:text-xs font-bold text-white/60 tracking-widest uppercase">
                                    Powered by <span className="text-primary-400 group-hover/branding:text-primary-300 transition-colors">Visdom Waves</span>
                                </span>
                            </motion.div>
                        </a> */}

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className=" text-transparent bg-clip-text
  bg-gradient-to-r
  from-orange-500 via-blue-900 to-green-600
  drop-shadow-[0_0_25px_rgba(19,41,75,0.5)]
  mb-2 inline-block"
                            >
                                Vidya Compass
                            </motion.span>

                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-yellow-500 drop-shadow-lg font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] uppercase inline-block whitespace-nowrap"
                            >
                                Navigate Your Future
                            </motion.span>
                        </h1>
                        {/* Branding */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            {/* Logo as Button */}
                            <a
                                href="https://erp.visdomwaves.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/logo relative p-2 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer shadow-lg hover:shadow-primary-500/20"
                            >
                                <img src={logo} alt="Visdom Waves" className="h-6 md:h-8 w-auto" />
                            </a>

                            {/* Text as Plain Text */}
                            <span className="text-[10px] md:text-xs font-bold text-white/60 tracking-widest uppercase">
                                Powered by <span className="text-primary-400">Visdom Waves</span>
                            </span>
                        </motion.div>


                        {/* ===== Description ===== */}
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm md:text-lg text-blue-50/70 mb-8 md:mb-12 max-w-xl leading-relaxed font-light"
                        >
                            Unlock your potential with premium career navigation. Experience advanced profiling, real-time insights, and a crystal-clear roadmap to your dream career.
                        </motion.p>


                        {/* ===== Buttons ===== */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start items-center w-full sm:w-auto"
                        >
                            <button
                                onClick={() => onOpenAuth('signup')}
                                className="w-full sm:w-auto px-10 md:px-12 py-4 bg-white/10 text-white border-2 border-white/40 rounded-2xl font-bold text-sm md:text-base hover:bg-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 group/btn hover:border-white/60"
                            >
                                Start Your Journey <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            <a href="#about" className="w-full sm:w-auto">
                                <button className="w-full px-10 md:px-12 py-4 bg-white/5 text-white border-2 border-white/20 rounded-2xl font-bold text-sm md:text-base hover:bg-white/10 backdrop-blur-md transition-all">
                                    Our Methodology
                                </button>
                            </a>
                        </motion.div>
                    </div>


                    {/* ===== Right Content: Compass Container ===== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex justify-center lg:justify-end w-full lg:w-auto relative z-0 lg:pr-20 xl:pr-64"
                    >
                        <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] transition-transform duration-700 hover:scale-105">
                            <Compass
                                careerPaths={careerPaths}
                                hoveredPath={hoveredPath}
                                setHoveredPath={setHoveredPath}
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
//  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
// <motion.span
//     initial={{ opacity: 0, x: -20 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.8 }}
//     className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] mb-2 inline-block"
// >
//     Vidya Compass
// </motion.span>

//                             <motion.span
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.2 }}
//                                 className="text-yellow-400 drop-shadow-lg font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] uppercase inline-block whitespace-nowrap"
//                             >
//                                 Navigate Your Future
//                             </motion.span>
//                         </h1>
