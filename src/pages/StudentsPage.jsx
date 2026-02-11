import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUserAstronaut, FaGamepad, FaRobot, FaCrown } from 'react-icons/fa';

const journeySteps = [
    {
        icon: <FaLightbulb />,
        title: "Spark",
        desc: "Discover your hidden talents through fun, interactive quests.",
        color: "bg-amber-400"
    },
    {
        icon: <FaRobot />,
        title: "Sync",
        desc: "Connect your personality with our AI to map your ideal future.",
        color: "bg-blue-400"
    },
    {
        icon: <FaRocket />,
        title: "Sprint",
        desc: "Launch your career roadmap with actionable daily milestones.",
        color: "bg-rose-400"
    }
];

const StudentsPage = () => {
    return (
        <div className="pt-24 bg-[#E1F0FF] min-h-screen overflow-hidden">
            {/* Student Hero Section */}
            <div className="relative max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2 mb-10 bg-white border border-gray-100 px-6 py-3 rounded-full shadow-sm"
                >
                    <FaCrown className="text-yellow-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#138808]">Future Explorer Mode</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight flex flex-col items-center justify-center italic uppercase leading-none">
                        <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">
                            Student Elevation
                        </span>
                        <span className="text-gray-900 mt-4 block not-italic font-light text-xl md:text-3xl tracking-[0.2em] uppercase">Your Potential, Unlocked.</span>
                    </h1>
                    <div className="w-48 h-2 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto rounded-full shadow-sm border border-gray-100"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mb-16 leading-relaxed"
                >
                    Turn your future into an adventure. Discover your unique cognitive fingerprint through interactive experiences and build a roadmap to your dream career.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] text-white rounded-[2rem] font-black text-xl shadow-2xl flex items-center gap-4 group"
                >
                    Start Exploration <FaGamepad className="group-hover:rotate-12 transition-transform" />
                </motion.button>
            </div>

            {/* Journey Grid */}
            <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {journeySteps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:bg-white/10 transition-all"
                    >
                        <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center text-2xl text-white mb-8 shadow-2xl group-hover:scale-110 transition-transform`}>
                            {step.icon}
                        </div>
                        <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                        <p className="text-slate-400 leading-relaxed font-light text-lg">{step.desc}</p>

                        {/* Decorative number */}
                        <span className="absolute top-10 right-10 text-6xl font-black text-white/5 pointer-events-none">0{i + 1}</span>
                    </motion.div>
                ))}
            </div>

            {/* Avatar / Dashboard Preview */}
            <div className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
                <div className="grid md:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-6xl font-black mb-8 italic"
                        >
                            Your Digital <br />
                            <span className="text-primary-400 underline decoration-primary-800">Ascension.</span>
                        </motion.h2>
                        <div className="space-y-10">
                            {[
                                { title: "Skill Trees", desc: "Unlock skills in tech, design, or leadership as you progress." },
                                { title: "Quest Board", desc: "Real-world internships and challenges tailored to your profile." },
                                { title: "Nexus Forge", desc: "Connect with mentors who've already beaten the level you're on." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-1 h-16 bg-white/10 group-hover:bg-primary-500 transition-colors"></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">{item.title}</h4>
                                        <p className="text-slate-500 font-light">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-rose-500/30 blur-[100px] animate-pulse"></div>
                        <div className="relative p-12 bg-white/5 border border-white/10 rounded-[4rem] backdrop-blur-2xl shadow-2xl overflow-hidden">
                            <div className="flex flex-col items-center mb-12">
                                <div className="w-40 h-40 rounded-full border-4 border-primary-500/50 p-2 mb-6">
                                    <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center text-5xl">
                                        <FaUserAstronaut className="text-primary-200" />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold">Commander Alex</h3>
                                <p className="text-primary-400 font-bold tracking-widest uppercase text-xs">Level 42 Architect</p>
                            </div>

                            <div className="space-y-6">
                                {["Logic", "Creativity", "Resilience"].map((stat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest text-slate-400">
                                            <span>{stat}</span>
                                            <span>{85 + i * 5}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${85 + i * 5}%` }}
                                                className="h-full bg-primary-500 rounded-full shadow-[0_0_10px_rgba(0,112,243,0.5)]"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentsPage;
