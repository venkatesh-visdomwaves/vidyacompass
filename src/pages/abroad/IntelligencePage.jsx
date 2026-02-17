import React from 'react';
import { motion } from 'framer-motion';
import {
    FaChartBar, FaChartPie, FaChartLine, FaBrain, FaUserGraduate,
    FaBriefcase, FaArrowUp, FaArrowDown, FaBuilding, FaSearch,
    FaGlobeAmericas, FaShieldAlt, FaMapMarkedAlt, FaDatabase
} from 'react-icons/fa';

const IntelligencePage = () => {
    return (
        <div className="min-h-screen bg-[#FBFCFE] text-gray-900 selection:bg-blue-50">
            {/* 🔹 Enhanced Hero Intelligence Section */}
            <section className="relative pt-32 pb-24 bg-black overflow-hidden border-b-4 border-transparent">
                {/* Neural Map Background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/30 to-indigo-600/20 rounded-full blur-[150px] -mr-48 -mt-48 animate-pulse text-gray-900"></div>
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-10 rounded-lg backdrop-blur-md italic"
                    >
                        <FaDatabase size={10} className="animate-spin-slow" /> Neural Mobility Matrix 2.0
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter italic leading-tight uppercase">
                        Global <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500">
                            Intelligence
                        </span> HUB
                    </h1>

                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed italic border-x border-white/10 px-12 mb-16">
                        Real-time telemetry and predictive modelling for the Indian student diaspora.
                        Decoding the 2026 academic economic engine.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Visa Success Velocity', val: '88.4%', trend: '+4.2%', color: 'text-emerald-400', icon: <FaChartLine /> },
                            { label: 'Avg Global Salary', val: '$68.5k', trend: '+12%', color: 'text-blue-400', icon: <FaBriefcase /> },
                            { label: 'Neural Stress Index', val: '42/100', trend: '-2.1%', color: 'text-orange-400', icon: <FaBrain /> },
                            { label: 'ROI Trajectory', val: '1.4:1', trend: '+0.5%', color: 'text-purple-400', icon: <FaUserGraduate /> }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all cursor-crosshair group backdrop-blur-xl"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`text-3xl ${stat.color} group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                                    <span className={`text-[9px] font-black px-2 py-1 rounded-lg bg-white/5 border border-white/5 ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'} italic`}>
                                        {stat.trend}
                                    </span>
                                </div>
                                <div className="text-4xl font-black italic tracking-tighter mb-1 text-white uppercase">{stat.val}</div>
                                <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] uppercase">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Data Deep-Dives */}
            <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto space-y-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 item-start">
                    {/* Domain Distribution Chart */}
                    <div className="lg:col-span-2 bg-white rounded-[4rem] border-2 border-gray-50 p-12 shadow-[0_20px_80px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-2 uppercase">Subject Domain Distribution</h3>
                                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest italic">Global enrollment categories 2026 Analytics</p>
                            </div>
                            <FaChartPie className="text-5xl text-blue-600/10" />
                        </div>

                        <div className="space-y-10">
                            {[
                                { label: 'STEM & Engineering', val: 45, color: 'from-blue-500 to-blue-600' },
                                { label: 'Business & Management', val: 28, color: 'from-emerald-500 to-emerald-600' },
                                { label: 'Health & Life Sciences', val: 15, color: 'from-purple-500 to-purple-600' },
                                { label: 'Creative Arts & Psych', val: 12, color: 'from-orange-500 to-orange-600' }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between items-center mb-4 text-[11px] font-black uppercase tracking-[0.2em] italic text-gray-600 uppercase">
                                        <span>{item.label}</span>
                                        <span className="text-gray-900">INTEL: {item.val}%</span>
                                    </div>
                                    <div className="w-full h-3 bg-gray-50 rounded-full overflow-hidden p-0.5">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${item.val}%` }}
                                            transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                                            className={`h-full bg-gradient-to-r ${item.color} rounded-full shadow-[0_0_15px_rgba(0,0,0,0.05)]`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Psychological & Safety Panel */}
                    <div className="bg-gradient-to-br from-indigo-900 via-gray-900 to-black border-4 border-white shadow-2xl rounded-[4rem] p-12 text-white flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black italic uppercase tracking-tighter mb-10 leading-none uppercase">Psychological <br /> Profile</h3>
                            <div className="flex items-center gap-8 mb-12">
                                <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-4xl shadow-inner group-hover:rotate-12 transition-transform">
                                    <FaBrain className="text-orange-400 animate-pulse" />
                                </div>
                                <div>
                                    <div className="text-5xl font-black italic tracking-tighter mb-1 uppercase">65%</div>
                                    <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] uppercase">Culture Shock Probability</div>
                                </div>
                            </div>
                            <p className="text-xs text-indigo-200/60 leading-relaxed font-bold italic mb-12 uppercase tracking-widest uppercase">
                                "Mental equilibrium is the foundation of academic success. Our data indicates 65% of students require localized adaptation support protocols."
                            </p>
                        </div>
                        <button className="relative z-10 w-full py-6 bg-white text-black rounded-[2.5rem] text-[10px] font-black uppercase tracking-[0.4em] hover:bg-orange-500 hover:text-white transition-all shadow-2xl active:scale-95 italic uppercase">
                            Deploy Support Matrix
                        </button>
                    </div>
                </div>

                {/* NIRF Intelligence Matrix */}
                <div className="bg-white rounded-[4rem] border-2 border-gray-50 p-12 shadow-xl shadow-gray-100/50">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
                        <div>
                            <div className="inline-flex items-center gap-3 px-3 py-1 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest rounded-lg mb-4 italic uppercase">
                                Domestic Institutional Data
                            </div>
                            <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-2 uppercase text-gray-900">NIRF Data Matrix</h3>
                            <p className="text-sm text-gray-400 font-bold uppercase tracking-[0.2em] italic uppercase">Top ranking Indian institutions driving 2026 global movement</p>
                        </div>
                        <div className="relative w-full md:w-[400px] group">
                            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-blue-600 transition-colors" />
                            <input type="text" placeholder="FILTER INSTITUTIONAL ASSETS..." className="w-full h-16 bg-gray-50 border-2 border-gray-100 rounded-2xl pl-16 pr-6 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-blue-500/30 transition-all placeholder:text-gray-300" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { rank: 1, name: 'IIT Madras', city: 'Chennai', score: 86.4, color: 'border-l-orange-500' },
                            { rank: 2, name: 'IISc Bangalore', city: 'Bengaluru', score: 84.1, color: 'border-l-blue-600' },
                            { rank: 3, name: 'IIT Delhi', city: 'New Delhi', score: 82.9, color: 'border-l-emerald-600' },
                            { rank: 4, name: 'IIT Bombay', city: 'Mumbai', score: 81.7, color: 'border-l-indigo-600' },
                            { rank: 5, name: 'IIT Kanpur', city: 'Kanpur', score: 79.5, color: 'border-l-purple-600' },
                            { rank: 6, name: 'IIT Roorkee', city: 'Roorkee', score: 78.2, color: 'border-l-pink-600' },
                            { rank: 7, name: 'IIT Kharagpur', city: 'Kharagpur', score: 77.9, color: 'border-l-emerald-400' },
                            { rank: 8, name: 'IIT Guwahati', city: 'Guwahati', score: 74.8, color: 'border-l-orange-400' }
                        ].map((inst, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -12, scale: 1.02 }}
                                className={`p-8 bg-gray-50/50 border border-gray-100 rounded-3xl hover:bg-white transition-all border-l-8 ${inst.color} group shadow-sm hover:shadow-2xl text-gray-900 cursor-default`}
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl font-black text-gray-100 italic tracking-tighter group-hover:text-gray-200 transition-colors">#{inst.rank}</span>
                                    <div className="px-3 py-1 bg-white text-[10px] font-black italic text-blue-600 shadow-sm rounded-lg">{inst.score} API</div>
                                </div>
                                <h5 className="text-lg font-black italic uppercase tracking-tighter text-gray-900 mb-2 group-hover:text-blue-600 transition-colors uppercase leading-none">{inst.name}</h5>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] uppercase">{inst.city}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Employment High-Resolution Data Table */}
                <div className="bg-white rounded-[4rem] border-2 border-gray-50 p-12 shadow-2xl shadow-blue-500/5 text-gray-900">
                    <div className="flex items-center gap-6 mb-16">
                        <div className="w-16 h-1 bg-blue-600 rounded-full" />
                        <h3 className="text-4xl font-black italic uppercase tracking-tighter uppercase">Graduate Employment Intelligence</h3>
                    </div>
                    <div className="overflow-x-auto no-scrollbar">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b-2 border-gray-100">
                                    <th className="px-8 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Industry Hub</th>
                                    <th className="px-8 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Demand Index</th>
                                    <th className="px-8 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">Median Yield</th>
                                    <th className="px-8 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400">PR Corridor</th>
                                    <th className="px-8 py-8 text-[11px] font-black uppercase tracking-[0.4em] text-gray-400 text-right">Trend Velocity</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 text-gray-900">
                                {[
                                    { sector: 'AI & Neural Systems', demand: 'CRITICAL', salary: '$95.2k', pr: 'L-1B Priority', trend: 'Up', color: 'text-blue-600' },
                                    { sector: 'Sustainable Energy', demand: 'HIGH', salary: '$82.4k', pr: 'Skilled Route', trend: 'Up', color: 'text-emerald-600' },
                                    { sector: 'Biomedical Engineering', demand: 'STABLE', salary: '$88.1k', pr: 'Tier 2 ICT', trend: 'Static', color: 'text-purple-600' },
                                    { sector: 'FinTech Architecture', demand: 'HIGH', salary: '$91.5k', pr: 'Global Talent', trend: 'Up', color: 'text-orange-600' },
                                    { sector: 'Quantum Computing', demand: 'EMERGING', salary: '$112.0k', pr: 'Research Visa', trend: 'Up', color: 'text-cyan-600' }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-blue-50/30 transition-all cursor-pointer group">
                                        <td className="px-8 py-10">
                                            <div className="flex items-center gap-6">
                                                <div className={`w-3 h-3 rounded-full ${row.color.replace('text', 'bg')} shadow-[0_0_10px_currentColor]`} />
                                                <span className="text-xl font-black italic uppercase tracking-tighter group-hover:text-blue-600 transition-colors uppercase">{row.sector}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-10">
                                            <span className="px-5 py-2 bg-gray-900 text-white rounded-xl text-[10px] font-black uppercase tracking-widest italic">{row.demand}</span>
                                        </td>
                                        <td className="px-8 py-10 text-xl font-black italic tracking-tighter text-blue-600 font-mono italic">{row.salary}</td>
                                        <td className="px-8 py-10 text-[11px] font-black text-gray-500 uppercase tracking-[0.2em] italic uppercase">{row.pr}</td>
                                        <td className="px-8 py-10 text-right">
                                            <span className={`text-[11px] font-black italic uppercase tracking-[0.2em] ${row.trend === 'Up' ? 'text-emerald-500' : 'text-gray-400'}`}>
                                                {row.trend === 'Up' ? '▲ ACCELERATING' : '— SUSTAINED'}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IntelligencePage;
