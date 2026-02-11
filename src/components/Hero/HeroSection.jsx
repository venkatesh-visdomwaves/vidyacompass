import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaLaptopCode, FaStethoscope, FaPalette, FaBriefcase } from 'react-icons/fa';
import Compass from './Compass/Compass';
import './HeroSection.css';

import logo from '../../assets/visdom_waves_logo.png';

// Generate static particle positions outside the component to avoid impurity warnings during render
const PARTICLES = [...Array(40)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 7,
    delay: Math.random() * 5
}));

const HeroSection = ({ onOpenAuth }) => {
    const [hoveredPath, setHoveredPath] = useState(null);
    const [taglineIndex, setTaglineIndex] = useState(0);

    const taglines = [
        { text: "Navigate Your Future", color: "from-blue-400 to-cyan-400" },
        { text: "Shape Your Future", color: "from-purple-400 to-pink-400" },
        { text: "Guide Your Path", color: "from-teal-400 to-emerald-400" },
        { text: "Discover Your Direction", color: "from-orange-400 to-yellow-400" },
        { text: "Plan Your Success", color: "from-pink-400 to-rose-400" },
        { text: "Choose Your Career", color: "from-cyan-400 to-blue-400" },
        { text: "Direct Your Dreams", color: "from-indigo-400 to-purple-400" },
        { text: "Build Your Tomorrow", color: "from-green-400 to-teal-400" },
        { text: "Map Your Journey", color: "from-amber-400 to-orange-400" },
        { text: "Lead Your Way", color: "from-blue-500 to-indigo-500" },
        { text: "Find Your Future", color: "from-violet-400 to-fuchsia-400" },
        { text: "Unlock Your Potential", color: "from-sky-400 to-blue-400" },
        { text: "Empower Your Journey", color: "from-orange-500 to-red-500" },
        { text: "Create Your Path", color: "from-emerald-500 to-teal-500" },
        { text: "Design Your Destiny", color: "from-purple-500 to-pink-500" },
        { text: "Explore Your Goals", color: "from-cyan-500 to-blue-500" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setTaglineIndex((prev) => (prev + 1) % taglines.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [taglines.length]);

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
            <div className="absolute inset-0 bg-[#0B1437]">
                {/* Sun / Sunrise Element */}
                <div className="absolute top-[8%] right-[12%] w-48 h-48 md:w-72 md:h-72 bg-yellow-500 rounded-full blur-[80px] opacity-60 animate-sun-glow"></div>
                <div className="absolute top-[10%] right-[14%] w-24 h-24 md:w-40 md:h-40 bg-orange-400 rounded-full blur-[40px] opacity-70 animate-sunrise"></div>

                {/* Sun Core (The "Shine") */}
                <div className="absolute top-[12%] right-[16%] w-16 h-16 md:w-24 md:h-24 bg-white rounded-full blur-xl opacity-90 animate-pulse"></div>
                <div className="absolute top-[12%] right-[16%] w-1 h-32 md:w-1.5 md:h-48 bg-white/20 blur-sm -rotate-45"></div>
                <div className="absolute top-[12%] right-[16%] w-1 h-32 md:w-1.5 md:h-48 bg-white/20 blur-sm rotate-45"></div>

                {/* Rotating Light Rays */}
                <div className="light-beam animate-rays-drift"></div>
                {/* Radial Burst / Rays */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,_rgba(66,133,244,0.15),transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_60%,_rgba(20,40,100,0.3),transparent_70%)]"></div>

                {/* Stars/Dust particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {PARTICLES.map((p) => (
                        <div
                            key={p.id}
                            className="absolute bg-white rounded-full w-0.5 h-0.5 shadow-[0_0_8px_rgba(255,255,255,1)]"
                            style={{
                                top: p.top,
                                left: p.left,
                                animation: `star-twinkle ${p.duration}s infinite ease-in-out`,
                                animationDelay: `${p.delay}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Light Rays Burst from Compass */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full opacity-30 pointer-events-none select-none">
                <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,0.05),transparent_20deg)] animate-[spin_60s_linear_infinite]"></div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1437] via-transparent to-transparent opacity-60"></div>


            <div className="relative max-w-7xl mx-auto w-full z-10">

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-32 pt-8 md:pt-0">

                    {/* ===== Left Content ===== */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl">
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

                        <h1 className="flex flex-col items-center lg:items-start mb-6 w-full select-none">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-light tracking-tight mb-4 md:mb-6 leading-none whitespace-nowrap"
                            >
                                Vidya Compass
                            </motion.span>

                            <div className="h-[1.5em] flex items-center overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={taglineIndex}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className={`bg-gradient-to-r ${taglines[taglineIndex].color} bg-clip-text text-transparent text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold tracking-[0.2em] uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] whitespace-nowrap`}
                                    >
                                        {taglines[taglineIndex].text}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
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
                            className="text-sm md:text-base lg:text-lg text-white/60 mb-8 md:mb-12 max-w-xl leading-relaxed"
                        >
                            Unlock your potential with premium career navigation. Experience advanced profiling, real-time insights, and a crystal-clear roadmap to your dream career.
                        </motion.p>


                        {/* ===== Buttons ===== */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center w-full sm:w-auto"
                        >
                            <button
                                onClick={() => onOpenAuth('signup')}
                                className="btn-glass w-full sm:w-auto px-8 md:px-10 py-3.5 text-sm md:text-base text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 group/btn"
                            >
                                Start Your Journey <FaArrowRight className="text-white group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            <button className="btn-glass w-full sm:w-auto px-8 md:px-10 py-3.5 text-sm md:text-base text-white rounded-xl font-bold transition-all">
                                Our Methodology
                            </button>
                        </motion.div>
                    </div>


                    {/* ===== Right Content: Compass Container ===== */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="flex justify-center w-full lg:w-auto relative z-0"
                    >
                        <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[450px] xl:h-[450px] transition-transform duration-700">
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
