import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    FaGlobeAmericas, FaSearch, FaFilter, FaChartLine, FaUserGraduate,
    FaMoneyBillWave, FaShieldAlt, FaPlaneDeparture, FaStar, FaChevronRight,
    FaArrowRight, FaMapMarkedAlt, FaBrain
} from 'react-icons/fa';
import { countries, globalStats } from './countriesData';

const AbroadPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Low Tuition', 'PR Friendly', 'High Safety', 'English Speaking'];

    const filteredCountries = countries.filter(c => {
        const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.capital.toLowerCase().includes(searchTerm.toLowerCase());

        if (activeFilter === 'All') return matchesSearch;
        if (activeFilter === 'Low Tuition') return matchesSearch && (c.id === 'germany' || c.id === 'france' || c.id === 'ireland');
        if (activeFilter === 'PR Friendly') return matchesSearch && c.prFriendly;
        if (activeFilter === 'High Safety') return matchesSearch && c.safetyRating >= 9.5;
        if (activeFilter === 'English Speaking') return matchesSearch && ['usa', 'uk', 'canada', 'australia', 'ireland', 'new-zealand'].includes(c.id);
        return matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#FBFCFE] selection:bg-blue-50">
            {/* 🔹 SECTION 1: High-Impact Global Intelligence Hero */}
            <section className="relative pt-32 pb-24 px-4 md:px-8 bg-black overflow-hidden border-b-4 border-transparent">
                {/* Indian Tricolor Subtle Gradient Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/20 rounded-full blur-[180px] animate-pulse"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex-1 text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-8 rounded-lg backdrop-blur-md">
                                <FaGlobeAmericas size={10} className="animate-spin-slow" /> Global Education Index 2026
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter italic leading-none uppercase">
                                Redefining <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 underline decoration-white/10 underline-offset-[10px]">
                                    Mobility.
                                </span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-medium leading-relaxed italic border-l-2 border-blue-500/30 pl-6 mb-10">
                                Empowering {globalStats.totalStudents} Indian visionaries with real-time migration intelligence and academic ROI analysis.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-blue-500 hover:text-white transition-all shadow-2xl shadow-blue-500/20 active:scale-95 italic">
                                    Start Global Audit
                                </button>
                                <button className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-white/10 transition-all italic">
                                    Intelligence HUB
                                </button>
                            </div>
                        </motion.div>

                        {/* Interactive Data Pulse */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full lg:w-[450px] aspect-square rounded-[4rem] bg-gradient-to-br from-gray-900 to-gray-800 border-4 border-white/5 shadow-2xl relative p-10 flex flex-col justify-between overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-bl-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-700" />
                            <div className="relative z-10">
                                <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-4">Total Indian Outflow</h4>
                                <div className="text-6xl font-black text-white italic tracking-tighter mb-2">{globalStats.totalStudents}</div>
                                <div className="flex items-center gap-2 text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                                    <FaChartLine /> +{globalStats.growthRate} YOY Velocity
                                </div>
                            </div>

                            <div className="relative z-10 bg-black/40 backdrop-blur-xl p-6 rounded-3xl border border-white/5">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em]">Market Distribution</span>
                                    <FaBrain className="text-blue-500 animate-pulse" />
                                </div>
                                <div className="space-y-3">
                                    {[
                                        { l: 'STEM', p: '42%', c: 'bg-blue-500' },
                                        { l: 'BUSINESS', p: '28%', c: 'bg-emerald-500' },
                                        { l: 'HEALTH', p: '15%', c: 'bg-orange-500' }
                                    ].map((cat, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-[8px] font-black text-white uppercase mb-1">
                                                <span>{cat.l}</span>
                                                <span>{cat.p}</span>
                                            </div>
                                            <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                                                <div className={`h-full ${cat.c}`} style={{ width: cat.p }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quick Core Pulse Stats */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Visa Velocity', val: globalStats.visaSuccessRate, icon: <FaShieldAlt />, color: 'text-emerald-400' },
                            { label: 'Global Spend', val: globalStats.totalExpenditure, icon: <FaMoneyBillWave />, color: 'text-blue-400' },
                            { label: 'Top Corridor', val: globalStats.topDestination, icon: <FaPlaneDeparture />, color: 'text-orange-400' },
                            { label: 'Growth Vector', val: '2026 PEAK', icon: <FaChartLine />, color: 'text-purple-400' }
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center gap-6 hover:bg-white/10 transition-all group">
                                <div className={`text-3xl ${stat.color} group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                                <div>
                                    <div className="text-2xl font-black text-white italic tracking-tighter">{stat.val}</div>
                                    <div className="text-[9px] font-black text-gray-500 uppercase tracking-[0.3em] mt-1">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 SECTION 2: Premium Country Grid with Smart Filters */}
            <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-12">
                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-lg mb-6 italic">
                            Migration Search Engine
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter italic leading-none mb-6">
                            Destination <br />
                            <span className="text-blue-600">Intelligence.</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-medium max-w-xl italic">
                            Comprehensive 2026 data mapping for elite students seeking global mastery.
                        </p>
                    </div>

                    {/* Search & Enhanced Filters */}
                    <div className="w-full lg:w-auto space-y-6">
                        <div className="relative group">
                            <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="Query Destination, City or Capital..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full lg:w-[450px] h-16 pl-16 pr-6 rounded-2xl bg-white border-2 border-gray-100 focus:border-blue-500/30 focus:ring-4 focus:ring-blue-500/5 transition-all font-black text-xs uppercase tracking-widest placeholder:text-gray-300 shadow-sm"
                            />
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {filters.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`px-6 py-2 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all italic border-2 ${activeFilter === f ? 'bg-gray-900 border-gray-900 text-white shadow-xl shadow-black/20' : 'bg-white border-gray-100 text-gray-400 hover:border-blue-500/20 hover:text-blue-600'}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Country Grid - Premium Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence>
                        {filteredCountries.map((country, idx) => (
                            <motion.div
                                key={country.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}
                                onClick={() => navigate(`/abroad/${country.id}`)}
                                className="group relative cursor-pointer"
                            >
                                <div className="bg-white rounded-[3.5rem] p-10 border-2 border-gray-50 shadow-[0_15px_50px_rgba(0,0,0,0.02)] group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] group-hover:border-blue-500/10 transition-all duration-700 overflow-hidden text-gray-900">
                                    {/* Abstract Decor */}
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-gray-50 rounded-bl-[6rem] -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-700 opacity-50 group-hover:bg-blue-50"></div>

                                    <div className="relative z-10 text-gray-900">
                                        <div className="flex justify-between items-start mb-10">
                                            <span className="text-7xl drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 block">{country.flag}</span>
                                            <div className="text-right">
                                                <div className="flex items-center gap-1 mb-2 justify-end">
                                                    {[...Array(5)].map((_, i) => (
                                                        <FaStar key={i} size={10} className={`${i < Math.floor(country.stars) ? 'text-yellow-400' : 'text-gray-100'}`} />
                                                    ))}
                                                </div>
                                                <div className="px-3 py-1 bg-gray-900 text-white text-[8px] font-black uppercase tracking-widest rounded-full italic">TOP STUDY HUB</div>
                                            </div>
                                        </div>

                                        <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-tighter group-hover:text-blue-600 transition-colors italic leading-none">
                                            {country.name}
                                        </h3>
                                        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8 italic">{country.fullName}</p>

                                        <div className="grid grid-cols-2 gap-4 mb-10">
                                            <div className="bg-gray-50/50 p-5 rounded-[2.5rem] border border-gray-100 group-hover:bg-white transition-colors">
                                                <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-2 italic">TUITION BLUEPRINT</div>
                                                <div className="text-sm font-black text-gray-800 italic tracking-tight">{country.avgTuition}</div>
                                            </div>
                                            <div className="bg-gray-50/50 p-5 rounded-[2.5rem] border border-gray-100 group-hover:bg-white transition-colors">
                                                <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-2 italic">SAFETY INDEX</div>
                                                <div className="text-sm font-black text-emerald-600 italic tracking-tight">{country.safetyRating}/10.0</div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-10">
                                            {country.prFriendly && (
                                                <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest border border-emerald-100 italic">PR Pathways Enabled</span>
                                            )}
                                            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[8px] font-black uppercase tracking-widest border border-blue-100 italic">2026 Trending</span>
                                        </div>

                                        <div className="flex items-center justify-between group/btn">
                                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] group-hover:text-gray-900 transition-all italic">Open Destination Intelligence</span>
                                            <div className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white group-hover:bg-blue-600 transition-all duration-500 shadow-xl shadow-black/10 group-hover:rotate-12">
                                                <FaArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Load More Button */}
                <div className="mt-28 text-center text-gray-900">
                    <button className="px-14 py-6 bg-gray-900 text-white rounded-3xl text-[11px] font-black uppercase tracking-[0.4em] hover:bg-blue-600 shadow-2xl shadow-black/10 transition-all active:scale-95 italic group flex items-center gap-4 mx-auto">
                        Global Directory Archive 2026 <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <p className="mt-8 text-[10px] text-gray-400 font-black uppercase tracking-[0.3em] italic">Accessing datasets for 195+ sovereign nations</p>
                </div>
            </section>

            {/* 🔹 SECTION 3: Ecosystem Accelerators */}
            <section className="py-32 bg-white border-y border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 opacity-30 rounded-full blur-[120px] -mr-48 -mt-24 pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {[
                            { title: 'Visa Success AI', desc: 'Predictive approval modelling based on real-time embassy datasets and compliance trends.', icon: <FaShieldAlt />, color: 'text-orange-500', bg: 'bg-orange-50' },
                            { title: 'Vault Repository', desc: 'Enterprise-grade encrypted storage for global applications and document verification.', icon: <FaPlaneDeparture />, color: 'text-blue-500', bg: 'bg-blue-50' },
                            { title: 'Capital ROI Audit', desc: 'Calculate post-study earning potential against your total academic investment footprint.', icon: <FaMoneyBillWave />, color: 'text-emerald-500', bg: 'bg-emerald-50' }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="flex flex-col p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all group"
                            >
                                <div className={`w-20 h-20 rounded-[2rem] ${s.bg} flex items-center justify-center text-3xl shrink-0 mb-8 group-hover:rotate-12 transition-transform`}>
                                    <div className={s.color}>{s.icon}</div>
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tighter italic mb-4">{s.title}</h4>
                                <p className="text-gray-400 text-sm font-medium leading-relaxed italic mb-8">{s.desc}</p>
                                <button className="mt-auto flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-900 hover:text-blue-600 transition-colors">
                                    Launch Service <FaArrowRight />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 SECTION 4: Data Veracity Footer Note */}
            <section className="py-20 bg-[#FBFCFE] text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="w-16 h-px bg-gray-200 mx-auto mb-10" />
                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.4em] leading-loose italic">
                        The Global Education Intelligence (GEI) Portal aggregates UDISE+, MEA, and sovereign department datasets.
                        Visa success metrics and institutional rankings are subject to 2026 Q1 volatility.
                    </p>
                    <div className="mt-10 flex justify-center gap-10">
                        <div className="text-left">
                            <div className="text-3xl font-black italic tracking-tighter text-gray-900">1.33M+</div>
                            <div className="text-[8px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1">Verified Movements</div>
                        </div>
                        <div className="text-left">
                            <div className="text-3xl font-black italic tracking-tighter text-gray-900">12,000+</div>
                            <div className="text-[8px] font-black text-gray-400 uppercase tracking-[0.3em] mt-1">Institutions Mapped</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AbroadPage;
