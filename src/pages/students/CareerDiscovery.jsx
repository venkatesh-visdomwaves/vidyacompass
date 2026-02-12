import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaStar, FaChevronRight, FaLightbulb, FaUserTie, FaQuestionCircle, FaCheckCircle } from 'react-icons/fa';
import StudentSubNavbar from '../../components/Navbar/StudentSubNavbar';

const CareerDiscovery = () => {
    return (
        <div className="bg-white min-h-screen pt-16">
            <StudentSubNavbar />

            {/* Simple Hero Section */}
            <section id="hero" className="py-20 px-6 bg-gradient-to-b from-green-50/50 to-white">
                <div className="max-w-7xl mx-auto text-center mt-8 md:mt-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-1 bg-[#138808]/10 text-[#138808] text-[10px] font-bold uppercase tracking-widest rounded-lg mb-6"
                    >
                        Find Your Best Job
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight italic uppercase"
                    >
                        Learn About Yourself <br />
                        <span className="text-[#138808]">Before Picking a Career</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
                    >
                        Don't follow the crowd. Answer a few easy questions and we will show you which jobs actually fit your personality and skills.
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-[#138808] transition-all"
                    >
                        Start the Easy Test
                    </motion.button>
                </div>
            </section>

            {/* How This Helps / Why Use This */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase italic">How This Helps You</h2>
                        <p className="text-gray-500 font-medium">Why every student should take this test before deciding their future.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Avoid Costly Mistakes", desc: "Don't spend years and money on a college degree you will end up hating.", icon: <FaLightbulb /> },
                            { title: "Find Hidden Talents", desc: "Discover skills you didn't know you had that are perfect for modern jobs.", icon: <FaStar /> },
                            { title: "Get a Clear Plan", desc: "Once you know your best fit, we show you exactly how to get there.", icon: <FaUserTie /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                                <div className="w-12 h-12 bg-gray-50 text-[#138808] rounded-xl flex items-center justify-center text-xl mb-8">{item.icon}</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase">{item.title}</h4>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 1: Skill Check */}
            <section id="skills" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase italic">What Do You <br /> Love Doing?</h2>
                        <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                            We don't just look at your grades. We look at what you enjoy. Whether you like solving puzzles, drawing, or helping people, we find a job for it.
                        </p>
                        <div className="space-y-4">
                            {['Simple and fun questions', 'Takes only 5 minutes', 'Clear results you can use'].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4">
                                    <div className="w-6 h-6 rounded-full bg-[#138808]/10 flex items-center justify-center text-[#138808]">
                                        <FaCheckCircle size={12} />
                                    </div>
                                    <span className="text-gray-700 font-bold text-sm tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-[3rem] shadow-2xl p-10 border border-gray-100">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-3 italic uppercase text-[#138808]">
                            <FaQuestionCircle /> Sample Question
                        </h3>
                        <div className="space-y-8 font-medium">
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <p className="text-gray-900 font-bold mb-6 italic">If you had a free weekend, which project would you pick?</p>
                                <div className="grid gap-4">
                                    <button className="w-full p-4 bg-white border border-[#138808] rounded-xl text-left text-xs font-bold text-[#138808] hover:bg-[#138808] hover:text-white transition-all">Building a small robot or machine</button>
                                    <button className="w-full p-4 bg-white border border-gray-200 rounded-xl text-left text-xs font-bold text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-all">Painting a mural or designing a poster</button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-2">
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Question 3 of 15</span>
                                <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#138808]" style={{ width: '25%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Personality Result Placeholder */}
            <section id="personality" className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase italic">Your Work Style</h2>
                    <p className="text-gray-500 font-medium">Every student is different. Here are the 4 main styles we check.</p>
                </div>
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: 'The Thinker', desc: 'You like logic, math, and solving complex problems.' },
                        { label: 'The Artist', desc: 'You enjoy being creative, original, and making new things.' },
                        { label: 'The Leader', desc: 'You are good at talking to people and making big decisions.' },
                        { label: 'The Researcher', desc: 'You are curious and like to find out how things work.' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-[#138808] transition-all group">
                            <h3 className="text-lg font-bold mb-3 text-gray-900">{item.label}</h3>
                            <p className="text-gray-400 text-xs leading-relaxed font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto bg-gray-900 rounded-[3rem] p-16 text-center text-white relative group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#138808]/20 to-transparent"></div>
                    <div className="relative z-10 flex flex-col items-center">
                        <FaBrain className="text-5xl text-[#138808] mb-8" />
                        <h2 className="text-3xl md:text-5xl font-black mb-8 uppercase italic leading-tight">Ready to see your <br /> <span className="text-[#FF9933]">Match Score?</span></h2>
                        <button className="px-12 py-5 bg-[#138808] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-xl flex items-center gap-3 group/btn">
                            Start Test Now <FaChevronRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerDiscovery;
