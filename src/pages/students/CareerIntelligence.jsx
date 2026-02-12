import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDollarSign, FaSearchDollar, FaMicrochip, FaLeaf, FaRobot, FaDna, FaShieldAlt, FaArrowUp, FaBriefcase, FaChartBar } from 'react-icons/fa';
import StudentSubNavbar from '../../components/Navbar/StudentSubNavbar';

const CareerIntelligence = () => {
    return (
        <div className="bg-white min-h-screen pt-16">
            <StudentSubNavbar />

            {/* Simple Hero Section */}
            <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-50"></div>

                <div className="max-w-7xl mx-auto text-center mt-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/10 border border-white/20 text-[#FF9933] text-[10px] font-black uppercase tracking-[0.3em] mb-10"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF9933] animate-pulse"></div>
                        Future Job Data
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-8xl font-black mb-10 leading-none italic uppercase"
                    >
                        Job Market <br /> <span className="text-[#138808]">Insights</span>
                    </motion.h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
                        Don't study for a job that won't exist in 5 years. We show you which jobs are growing, how much they pay, and where they are located.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-6 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-default">
                            <span className="text-3xl font-black text-[#138808]">₹28L+</span>
                            <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest text-left leading-tight">Max Salary <br /> For New Grads</span>
                        </div>
                        <div className="flex items-center gap-6 bg-white/5 border border-white/10 px-8 py-6 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-default">
                            <span className="text-3xl font-black text-[#FF9933]">18%</span>
                            <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest text-left leading-tight">Job Growth <br /> Every Year</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* How This Helps / Section Guide */}
            <section className="py-20 px-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase italic">How This Helps You Pick</h2>
                    <p className="text-gray-500 font-medium">Data-driven choices for a long and successful career.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: "Know Your Value", desc: "See the exact salary companies are paying for your skills.", icon: <FaDollarSign /> },
                        { title: "Future-Proof", desc: "Find out if AI will take your job or make it better.", icon: <FaBriefcase /> },
                        { title: "Skills to Learn", desc: "Get a list of the top skills companies want right now.", icon: <FaChartBar /> }
                    ].map((item, i) => (
                        <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                            <div className="w-14 h-14 bg-white text-[#138808] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-8 shadow-sm">{item.icon}</div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">{item.title}</h4>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 1: Growth Sectors simplified */}
            <section id="sectors" className="py-24 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-gray-900 mb-6 uppercase italic italic underline decoration-[#138808] decoration-4 underline-offset-8">Growing Jobs</h2>
                        <p className="text-gray-500 font-medium mt-10">Companies are hiring fast in these 3 areas for 2026.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: 'Artificial Intelligence', demand: 'Very High Need', salary: '₹12L - ₹28L', color: '#138808', icon: <FaRobot /> },
                            { title: 'Green Energy', demand: 'Growing Fast', salary: '₹8L - ₹15L', color: '#FF9933', icon: <FaLeaf /> },
                            { title: 'Chip Design', demand: 'Steady Need', salary: '₹15L - ₹22L', color: '#000000', icon: <FaMicrochip /> },
                        ].map((trend, idx) => (
                            <div key={idx} className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all relative group">
                                <div className="w-16 h-16 bg-gray-50 text-gray-900 rounded-3xl flex items-center justify-center text-2xl mb-10 group-hover:bg-gray-900 group-hover:text-white transition-all transform group-hover:-translate-y-2">
                                    {trend.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight uppercase">{trend.title}</h3>
                                <div className="text-[10px] font-black uppercase tracking-[0.2em] mb-12 flex items-center gap-2" style={{ color: trend.color }}>
                                    <FaArrowUp /> {trend.demand}
                                </div>

                                <div className="pt-10 border-t border-gray-50">
                                    <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest mb-2 italic">Salary for New Joiners</p>
                                    <p className="text-2xl font-black text-gray-900 italic uppercase tracking-tighter">{trend.salary}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Salary Comparison Matrix simplified */}
            <section id="salary-checker" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="flex-1">
                        <motion.span className="text-[#138808] text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Global Earning Check</motion.span>
                        <h2 className="text-4xl font-black text-gray-900 mb-10 uppercase italic leading-tight">Salary <br /> Matrix 2026</h2>
                        <p className="text-lg text-gray-500 mb-12 font-medium leading-relaxed">
                            Compare how much you can earn for the same job in India versus other countries.
                        </p>

                        <div className="space-y-4">
                            {[
                                { role: 'Cloud Engineer', india: '₹22L', usa: '₹1.2 Cr', eu: '₹80 Lakh' },
                                { role: 'Product Manager', india: '₹18L', usa: '₹1.1 Cr', eu: '₹75 Lakh' },
                                { role: 'Data Expert', india: '₹16L', usa: '₹95 Lakh', eu: '₹68 Lakh' }
                            ].map((row, i) => (
                                <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] flex flex-col sm:flex-row items-center justify-between gap-6 group hover:bg-white hover:border hover:border-gray-200 hover:shadow-xl transition-all">
                                    <span className="text-[12px] font-black uppercase tracking-widest text-gray-900">{row.role}</span>
                                    <div className="flex gap-4">
                                        <div className="text-center">
                                            <p className="text-[8px] font-black text-gray-400 uppercase mb-1">India</p>
                                            <span className="text-xs font-black text-[#138808] bg-[#138808]/5 px-4 py-2 rounded-xl">{row.india}</span>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-[8px] font-black text-gray-400 uppercase mb-1">Abroad</p>
                                            <span className="text-xs font-black text-[#FF9933] bg-[#FF9933]/5 px-4 py-2 rounded-xl">{row.usa}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full bg-gray-900 rounded-[4rem] p-16 text-white relative flex flex-col items-center text-center group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center text-[#138808] text-3xl mb-10 shadow-2xl border border-white/5 group-hover:bg-[#138808] group-hover:text-white transition-all group-hover:rotate-12">
                            <FaChartBar />
                        </div>
                        <h3 className="text-2xl font-black mb-8 uppercase italic leading-tight">Get Your Custom <br /> Salary Report</h3>
                        <p className="text-gray-500 mb-12 font-medium">Tell us your skills and target country, and we will send you a full data report on what salary you should expect.</p>
                        <button className="w-full py-5 bg-[#138808] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-xl">Get Report Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareerIntelligence;
