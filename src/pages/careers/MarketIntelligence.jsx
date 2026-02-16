import React from 'react';
import { motion } from 'framer-motion';
import {
    FaChartBar, FaGlobeAmericas, FaWallet, FaArrowUp,
    FaShieldAlt, FaHistory, FaMapMarkerAlt,
    FaRegBuilding, FaChartLine
} from 'react-icons/fa';

import CareerSubNavbar from '../../components/Navbar/CareerSubNavbar';

const trends = [
    { year: '2025', val: 40, label: 'Current Demand' },
    { year: '2027', val: 65, label: 'AI Integration Phase' },
    { year: '2030', val: 95, label: 'Market Dominance' }
];

const MarketIntelligence = () => {
    return (
        <div className="bg-white min-h-screen pt-16">
            <CareerSubNavbar />

            {/* Hero Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-[150px] -mr-96 -mt-96"></div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a] mb-8 rounded-lg"
                        >
                            <FaGlobeAmericas /> Real-Time Market Data
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-tight italic uppercase">
                            Know the <br />
                            <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">Numbers.</span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
                            Don't guess your future value. Access real-time salary indices, growth predictions, and regional demand for every future-tech career.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-5 bg-[#1e3a8a] text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-xl">
                                Access Database
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="p-10 bg-white rounded-[4rem] shadow-2xl border border-gray-50 relative z-10">
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black uppercase text-gray-400">Salary Index 2026</span>
                                    <h4 className="text-2xl font-black italic uppercase text-gray-900">$184k Avg.</h4>
                                </div>
                                <div className="px-4 py-2 bg-green-50 text-[#138808] text-[9px] font-black rounded-lg flex items-center gap-2">
                                    <FaArrowUp /> +14.2% YOY
                                </div>
                            </div>

                            <div className="flex items-end justify-between h-48 gap-4 mb-10 pt-8">
                                {trends.map((t, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-4">
                                        <div className="w-full bg-gray-50 rounded-2xl relative overflow-hidden" style={{ height: `${t.val}%` }}>
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: '100%' }}
                                                transition={{ duration: 1.5, delay: i * 0.2 }}
                                                className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] to-[#138808]"
                                            />
                                        </div>
                                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{t.year}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <div className="w-6 h-6 rounded-lg bg-gray-100"></div>
                                    <div className="w-6 h-6 rounded-lg bg-gray-100"></div>
                                    <div className="w-6 h-6 rounded-lg bg-gray-100"></div>
                                </div>
                                <span className="text-[9px] font-black text-[#1e3a8a] uppercase tracking-widest">Global Trends Enabled</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Region Analysis Section */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="max-w-3xl mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic">Regional Hotspots</h2>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">Where the money and growth are concentrated for AI and Space Tech careers.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { region: 'Silicon Valley, USA', growth: '92/100', cost: 'High', salary: '$240k+', tag: 'Innovation Hub' },
                            { region: 'Bangalore, India', growth: '98/100', cost: 'Low', salary: '$80k+', tag: 'Scaling Tech' },
                            { region: 'Zurich, Switzerland', growth: '88/100', cost: 'High', salary: '$210k+', tag: 'Fintech Capital' },
                            { region: 'Berlin, Germany', growth: '84/100', cost: 'Medium', salary: '$120k+', tag: 'Sustainability Hub' },
                            { region: 'Singapore', growth: '94/100', cost: 'High', salary: '$190k+', tag: 'Strategic AI' },
                            { region: 'London, UK', growth: '86/100', cost: 'High', salary: '$180k+', tag: 'Global Governance' }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col group transition-all"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-[#1e3a8a] group-hover:bg-[#1e3a8a] group-hover:text-white transition-all shadow-sm">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <span className="px-3 py-1 bg-gray-50 rounded-lg text-[9px] font-black uppercase tracking-widest text-[#138808]">{item.tag}</span>
                                </div>
                                <h4 className="text-xl font-black text-gray-900 uppercase italic mb-6 leading-tight">{item.region}</h4>
                                <div className="space-y-4 mb-4">
                                    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        <span>Growth Potential</span>
                                        <span className="text-[#138808]">{item.growth}</span>
                                    </div>
                                    <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                        <span>Living Cost</span>
                                        <span className="text-orange-500">{item.cost}</span>
                                    </div>
                                </div>
                                <div className="mt-auto pt-8 border-t border-gray-50 flex justify-between items-center">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Starting Salary</span>
                                    <span className="text-lg font-black italic text-gray-900">{item.salary}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Job Replacement Score Section */}
            <section className="py-32 px-6 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-slate-900"></div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { title: 'Creative Roles', score: 'Low Risk', color: 'bg-emerald-500' },
                                { title: 'Data Entry', score: '99% Risk', color: 'bg-rose-500' },
                                { title: 'AI Engineering', score: 'Immune', color: 'bg-[#1e3a8a]' },
                                { title: 'Ethics & Law', score: 'Low Risk', color: 'bg-amber-500' }
                            ].map((risk, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] group hover:bg-white/10 transition-all">
                                    <div className={`w-3 h-3 rounded-full ${risk.color} mb-4 animate-pulse`}></div>
                                    <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{risk.title}</h5>
                                    <p className="text-xl font-black uppercase italic text-white">{risk.score}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-2">
                        <FaShieldAlt className="text-5xl text-[#FF9933] mb-8" />
                        <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase italic leading-tight">Future-Proof <br /> <span className="text-white">Security.</span></h2>
                        <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                            Our AI neural engine calculates the "Automation Risk Score" for every career path over the next decade. Build a career that evolves with AI, not against it.
                        </p>
                        <button className="px-12 py-5 bg-[#FF9933] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-gray-900 transition-all shadow-2xl">Check Your Risk Score</button>
                    </div>
                </div>
            </section>

            {/* Market Reports (Informational) */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic">Market Reports</h2>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">Deep-dive analysis updated every 24 hours.</p>
                    </div>

                    <div className="space-y-6 max-w-4xl mx-auto">
                        {[
                            { title: 'The 2026 Global AI Salary Report', type: 'PDF Research', time: 'NEW' },
                            { title: 'Space Tech: The Multi-Trillion Dollar Opportunity', type: 'Market Insight', time: 'TRENDING' },
                            { title: 'Sustainability: Europe vs North America Salaries', type: 'Comparative Study', time: '1D AGO' }
                        ].map((report, i) => (
                            <div key={i} className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 flex items-center justify-between group hover:bg-white hover:border-[#1e3a8a] transition-all cursor-pointer">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#1e3a8a] shadow-sm"><FaRegBuilding /></div>
                                    <div>
                                        <h4 className="text-lg font-black uppercase italic text-gray-900 leading-tight">{report.title}</h4>
                                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{report.type}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <span className="text-[9px] font-black text-[#138808] uppercase tracking-widest">{report.time}</span>
                                    <FaArrowUp className="text-gray-200 rotate-45 group-hover:text-[#1e3a8a] transition-all" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <FaChartLine className="text-6xl text-[#1e3a8a] mx-auto mb-10" />
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase italic leading-tight">Build for the Future Market.</h2>
                    <p className="text-xl text-gray-500 mb-12 font-medium">Stop choosing based on yesterday's demand. Start building for 2030.</p>
                    <button className="px-12 py-5 bg-[#1e3a8a] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-xl shadow-blue-900/10">Access Data Terminal</button>
                </div>
            </section>
        </div>
    );
};

export default MarketIntelligence;
