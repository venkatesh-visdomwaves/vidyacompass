import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaArrowLeft, FaShieldAlt, FaMoneyBillWave, FaClock, FaPassport,
    FaUniversity, FaGraduationCap, FaCheckCircle, FaChevronDown,
    FaDownload, FaCloudUploadAlt, FaHistory, FaMapMarkerAlt, FaBriefcase,
    FaFileAlt, FaLock, FaExternalLinkAlt, FaChartLine, FaStar, FaGlobeAmericas,
    FaRobot, FaChartPie, FaBuilding
} from 'react-icons/fa';
import { countries } from './countriesData';

const CountryDetailPage = () => {
    const { country: countryId } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Overview');

    const country = countries.find(c => c.id === countryId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [countryId]);

    if (!country) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white">
                <div className="text-center p-12 bg-gray-50 rounded-[3rem] border border-gray-100">
                    <h2 className="text-3xl font-black mb-6 uppercase italic tracking-tighter text-gray-900">Destination Not Found</h2>
                    <button
                        onClick={() => navigate('/abroad')}
                        className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl"
                    >
                        Back to Global Search
                    </button>
                </div>
            </div>
        );
    }

    const tabs = ['Overview', 'Costs', 'Scholarships', 'Visa Process', 'Jobs & PR'];

    return (
        <div className="min-h-screen bg-[#FBFCFE] selection:bg-blue-50">
            {/* 🔹 Enhanced Hero Section */}
            <section className="relative pt-32 pb-24 bg-black overflow-hidden">
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/30 to-emerald-600/20 rounded-full blur-[150px] -mr-48 -mt-48 animate-pulse text-gray-900"></div>
                    <div className="absolute top-0 right-0 p-20 opacity-[0.05] text-[35rem] font-black -rotate-12 select-none uppercase pointer-events-none text-white">
                        {country.name}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                    <button
                        onClick={() => navigate('/abroad')}
                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.3em] mb-12 group"
                    >
                        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Dashboard Intelligence
                    </button>

                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex-1"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-blue-400 mb-6 rounded-lg backdrop-blur-md">
                                <FaGlobeAmericas size={10} /> Destination Profile
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                                <span className="text-7xl md:text-8xl drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)]">{country.flag}</span>
                                <div>
                                    <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic leading-none mb-2">
                                        {country.name}
                                    </h1>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <p className="text-emerald-400 text-xs font-black uppercase tracking-[0.4em] italic leading-none">{country.fullName}</p>
                                        <div className="h-px w-10 bg-white/20 hidden sm:block"></div>
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} size={10} className={i < Math.floor(country.stars) ? 'text-yellow-400' : 'text-gray-700'} />
                                            ))}
                                            <span className="text-[10px] font-black ml-2 text-white/50">{country.stars} Global Rating</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-400 max-w-2xl text-lg font-medium leading-relaxed italic border-l-2 border-blue-500/30 pl-6">
                                {country.summary}
                            </p>
                        </motion.div>

                        {/* Premium Quick Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
                            {[
                                { label: 'Safety Index', val: `${country.safetyRating}/10`, icon: <FaShieldAlt />, color: 'text-emerald-400' },
                                { label: 'Study Investment', val: country.avgTuition.split(' ')[0], icon: <FaMoneyBillWave />, color: 'text-blue-400' },
                                { label: 'Work Perm.', val: country.workRights.split(' ')[0], icon: <FaClock />, color: 'text-orange-400' },
                                { label: 'PR VIABILITY', val: country.prFriendly ? 'HIGH' : 'Standard', icon: <FaChartLine />, color: 'text-purple-400' }
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-6 rounded-[2rem] text-center hover:bg-white/10 transition-all group backdrop-blur-sm"
                                >
                                    <div className={`text-xl flex justify-center mb-3 ${s.color} group-hover:scale-110 transition-transform`}>{s.icon}</div>
                                    <div className="text-sm font-black text-white uppercase tracking-tight mb-1">{s.val}</div>
                                    <div className="text-[8px] font-black text-gray-500 uppercase tracking-widest uppercase">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Tabs - Platform Style */}
                    <div className="flex items-center gap-2 border-b border-white/5 overflow-x-auto no-scrollbar scroll-smooth">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-10 py-5 text-[10px] font-black uppercase tracking-[0.3em] transition-all relative shrink-0 italic ${activeTab === tab ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div layoutId="activeTabLine" className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 shadow-[0_0_20px_#3b82f6]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Core Content Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2">
                        <AnimatePresence mode="wait">
                            {activeTab === 'Overview' && (
                                <motion.div
                                    key="overview"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                >
                                    <div className="mb-20 text-gray-900">
                                        <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tighter italic mb-10 border-l-8 border-blue-600 pl-8">
                                            Strategic <span className="text-blue-600">Advantages</span>
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {country.whyStudy.map((text, i) => (
                                                <div key={i} className="flex gap-5 p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all group">
                                                    <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                                        <FaCheckCircle size={20} />
                                                    </div>
                                                    <span className="text-sm font-bold text-gray-700 leading-tight uppercase tracking-tight">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-20">
                                        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic mb-10 border-l-8 border-orange-500 pl-8">
                                            System <span className="text-orange-600">Intelligence</span>
                                        </h3>
                                        <div className="bg-white border-2 border-gray-50 rounded-[3.5rem] p-10 shadow-2xl shadow-gray-100/50">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-900">
                                                <div className="space-y-8">
                                                    <div>
                                                        <h4 className="flex items-center gap-3 text-xs font-black text-gray-400 uppercase tracking-widest mb-6 uppercase">
                                                            <FaUniversity className="text-blue-600" /> Institutional Framework
                                                        </h4>
                                                        <div className="flex flex-wrap gap-3">
                                                            {country.educationSystem.types.map((type, i) => (
                                                                <span key={i} className="px-5 py-2 bg-gray-50 text-[10px] font-black uppercase tracking-widest rounded-xl border border-gray-100 text-gray-800">{type}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="p-6 bg-blue-50/30 rounded-3xl border border-blue-100/50">
                                                        <p className="text-xs text-blue-800 font-bold leading-relaxed italic">"{country.educationSystem.publicVsPrivate}"</p>
                                                    </div>
                                                </div>
                                                <div className="border-l-2 border-gray-50 md:pl-12">
                                                    <h4 className="flex items-center gap-3 text-xs font-black text-gray-400 uppercase tracking-widest mb-6 uppercase">
                                                        <FaGraduationCap className="text-orange-500" /> Structure & Requirements
                                                    </h4>
                                                    <div className="mb-8">
                                                        <div className="text-2xl font-black text-gray-900 italic uppercase tracking-tighter mb-1 uppercase">{country.educationSystem.structure}</div>
                                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Academic Cycle Duration</div>
                                                    </div>
                                                    <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm">
                                                        <p className="text-[10px] text-orange-600 font-black uppercase tracking-widest mb-4">Mandatory Admissions Exams</p>
                                                        <div className="space-y-4">
                                                            {country.exams.map((ex, i) => (
                                                                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                                                                    <span className="text-[11px] font-black text-gray-800 italic uppercase">{ex.name}</span>
                                                                    <span className="text-[11px] font-black text-orange-600 bg-orange-50 px-3 py-1 rounded-full">{ex.score}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-20">
                                        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic mb-10 border-l-8 border-emerald-500 pl-8">
                                            Premium <span className="text-emerald-600">Institutions</span>
                                        </h3>
                                        <div className="overflow-hidden border border-gray-100 rounded-[3rem] shadow-xl bg-white">
                                            <table className="w-full text-left">
                                                <thead className="bg-[#FBFCFE]">
                                                    <tr>
                                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Institutional Brand</th>
                                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Rank</th>
                                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Location</th>
                                                        <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Intel</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-50 text-gray-900">
                                                    {country.universities.map((uni, i) => (
                                                        <tr key={i} className="hover:bg-blue-50/20 transition-all group">
                                                            <td className="px-8 py-6">
                                                                <div className="text-lg font-black text-gray-900 italic uppercase tracking-tighter group-hover:text-blue-600 transition-colors">
                                                                    {uni.name}
                                                                </div>
                                                            </td>
                                                            <td className="px-8 py-6">
                                                                <span className="px-4 py-1.5 bg-gray-900 text-white text-[10px] font-black rounded-full italic shadow-lg shadow-black/10">#{uni.ranking} GS</span>
                                                            </td>
                                                            <td className="px-8 py-6 text-[11px] text-gray-500 font-bold uppercase tracking-wider">{uni.city}</td>
                                                            <td className="px-8 py-6 text-right">
                                                                <a href={`https://${uni.website}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all ml-auto">
                                                                    <FaExternalLinkAlt size={14} />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Costs' && (
                                <motion.div
                                    key="costs"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                >
                                    <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic mb-12 border-l-8 border-emerald-600 pl-8">
                                        Fiscal <span className="text-emerald-600">Dynamics</span>
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                        <div className="p-10 bg-white border border-gray-100 rounded-[3rem] shadow-xl text-gray-900">
                                            <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-10 uppercase">Tuition Infrastructure</h4>
                                            <div className="space-y-10">
                                                <div>
                                                    <div className="flex justify-between items-end mb-4">
                                                        <span className="text-[11px] font-black uppercase text-gray-900 tracking-[0.2em] italic uppercase">Undergraduate Path</span>
                                                        <span className="text-2xl font-black text-blue-600 italic tracking-tighter">{country.costBreakdown.tuition.ug}</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden p-0.5">
                                                        <motion.div initial={{ width: 0 }} animate={{ width: '70%' }} className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="flex justify-between items-end mb-4">
                                                        <span className="text-[11px] font-black uppercase text-gray-900 tracking-[0.2em] italic uppercase">Postgraduate Cycle</span>
                                                        <span className="text-2xl font-black text-emerald-600 italic tracking-tighter">{country.costBreakdown.tuition.pg}</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden p-0.5">
                                                        <motion.div initial={{ width: 0 }} animate={{ width: '85%' }} className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-10 bg-gray-900 rounded-[3rem] text-white relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full" />
                                            <h4 className="text-xs font-black text-white/50 uppercase tracking-[0.2em] mb-10 italic uppercase">Living Utility Matrix</h4>
                                            <div className="space-y-6">
                                                {Object.entries(country.costBreakdown.living).map(([key, val], i) => (
                                                    <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 group hover:bg-white/5 px-4 rounded-xl transition-all">
                                                        <span className="text-[10px] font-black uppercase text-white/70 tracking-[0.3em] italic uppercase">{key}</span>
                                                        <span className="text-sm font-black text-emerald-400 italic font-mono uppercase">{val}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-[#FF9933]/5 via-white to-[#138808]/5 p-1 rounded-[3.5rem] shadow-2xl">
                                        <div className="bg-white rounded-[3.4rem] p-12 flex flex-col md:flex-row items-center gap-12 border border-gray-100">
                                            <div className="shrink-0 w-32 h-32 rounded-[2.5rem] bg-emerald-50 border-4 border-white flex items-center justify-center text-5xl shadow-2xl shadow-emerald-500/10 active:rotate-12 transition-transform cursor-pointer">
                                                💰
                                            </div>
                                            <div className="flex-1 text-gray-900">
                                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest rounded-lg mb-4 uppercase">
                                                    Calculated Mobility Index
                                                </div>
                                                <h5 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter mb-2 uppercase">Global Living Ceiling</h5>
                                                <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-6 italic uppercase">1 Academic Term (Tuition + Essentials + Insurance)</p>
                                                <div className="text-5xl md:text-6xl font-black text-blue-600 italic tracking-tighter drop-shadow-sm">
                                                    ₹{parseInt(country.costBreakdown.tuition.pg.match(/\d+/)) + parseInt(country.costBreakdown.living.accommodation.match(/\d+/)) + parseInt(country.costBreakdown.living.food.match(/\d+/))}L+
                                                </div>
                                            </div>
                                            <button className="px-12 py-5 bg-gray-900 text-white rounded-[2rem] text-[11px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-black/20 hover:bg-blue-600 transition-all active:scale-95 italic uppercase">
                                                Launch Calculator
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Visa Process' && (
                                <motion.div
                                    key="visa"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic mb-12 border-l-8 border-purple-600 pl-8">
                                        Compliance <span className="text-purple-600">Pipeline</span>
                                    </h3>

                                    <div className="relative pl-12">
                                        <div className="absolute left-4 top-0 w-1.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-emerald-500 rounded-full" />
                                        <div className="space-y-12">
                                            {country.visaProcess.map((step, i) => (
                                                <div key={i} className="relative group">
                                                    <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 z-10 group-hover:scale-125 transition-transform shadow-lg flex items-center justify-center text-[10px] font-black italic">
                                                        {i + 1}
                                                    </div>
                                                    <div className="p-8 bg-white border-2 border-gray-50 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all transition-duration-500 flex items-center justify-between text-gray-900">
                                                        <div>
                                                            <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-2 italic">Phase Sequence 0{i + 1}</h5>
                                                            <p className="text-xl font-black text-gray-900 italic uppercase tracking-tighter">{step}</p>
                                                        </div>
                                                        <FaArrowLeft className="rotate-180 text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeTab === 'Jobs & PR' && (
                                <motion.div
                                    key="jobs"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter italic mb-12 border-l-8 border-cyan-500 pl-8">
                                        Employment <span className="text-cyan-600">Architecture</span>
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
                                        <motion.div whileHover={{ scale: 1.02 }} className="bg-[#050505] p-10 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-700" />
                                            <FaClock className="text-cyan-400 text-3xl mb-8 opacity-50" />
                                            <h4 className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em] mb-4 italic uppercase">PSW Duration Permit</h4>
                                            <div className="text-5xl font-black text-white italic tracking-tighter mb-4">{country.jobOps.duration}</div>
                                            <p className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.2em] uppercase">Post-Graduation Stay-Back Term</p>
                                        </motion.div>

                                        <motion.div whileHover={{ scale: 1.02 }} className="bg-white border-2 border-gray-50 p-10 rounded-[3rem] shadow-xl relative overflow-hidden group text-gray-900">
                                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-[100px]" />
                                            <FaPassport className="text-blue-500 text-3xl mb-8 opacity-50" />
                                            <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 italic uppercase">Path to Residency</h4>
                                            <div className="text-xl font-black text-gray-900 italic uppercase tracking-tighter mb-6 leading-tight uppercase">{country.jobOps.prOptions}</div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full uppercase">
                                                <FaCheckCircle /> Legal Pathway Active
                                            </div>
                                        </motion.div>
                                    </div>

                                    <h4 className="text-2xl font-black text-gray-900 uppercase italic tracking-tighter mb-10 border-b border-gray-100 pb-4 uppercase">Emerging Skill Shortages 2026</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                        {country.jobOps.topIndustries.map((ind, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ y: -5 }}
                                                className="p-8 bg-white border border-gray-100 rounded-[2.5rem] text-center group hover:bg-gray-900 transition-all shadow-sm flex flex-col items-center"
                                            >
                                                <div className="w-16 h-16 rounded-[1.5rem] bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all shadow-inner">
                                                    <FaBriefcase className="text-gray-400 group-hover:text-white transition-colors" size={24} />
                                                </div>
                                                <span className="text-[10px] font-black text-gray-800 uppercase tracking-[0.2em] group-hover:text-white transition-all italic leading-relaxed uppercase">{ind}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* 🔹 Lateral Intelligence Panels */}
                    <div className="space-y-10">
                        {/* Secure Vault Widget */}
                        <div className="bg-[#050505] rounded-[3.5rem] p-10 text-white relative overflow-hidden border border-white/5 shadow-2xl">
                            <div className="absolute inset-0 opacity-10 pointer-events-none text-white" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-10">
                                    <div>
                                        <h4 className="text-sm font-black uppercase tracking-[0.4em] italic text-blue-400 mb-2 uppercase">Vault Explorer</h4>
                                        <p className="text-[9px] text-white/40 font-black uppercase tracking-widest uppercase">Secure Cloud Repository</p>
                                    </div>
                                    <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 border border-white/10">
                                        <FaLock size={18} />
                                    </div>
                                </div>

                                <div className="space-y-5 mb-10">
                                    {country.documents.slice(0, 5).map((doc, i) => (
                                        <div key={i} className="flex justify-between items-center group cursor-pointer py-1">
                                            <span className="text-[11px] font-bold text-gray-500 group-hover:text-white transition-all italic tracking-tight uppercase">{doc}</span>
                                            <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center text-[10px] group-hover:border-blue-500 group-hover:text-blue-400 transition-all opacity-30 group-hover:opacity-100">
                                                <FaHistory />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <button
                                    onClick={() => navigate('/abroad/documents')}
                                    className="w-full py-5 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-blue-500 hover:text-white transition-all shadow-xl active:scale-95 italic uppercase"
                                >
                                    <FaCloudUploadAlt size={20} /> Deploy Documents
                                </button>
                            </div>
                        </div>

                        {/* Stability Engine */}
                        <div className="bg-white border-2 border-gray-50 rounded-[3.5rem] p-10 shadow-xl relative group text-gray-900">
                            <h4 className="text-xs font-black text-gray-900 uppercase tracking-[0.3em] italic mb-10 border-l-4 border-emerald-500 pl-4 uppercase">Stability Engine</h4>
                            <div className="relative h-56 flex items-center justify-center mb-10">
                                {/* Radar effect */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-full h-full border border-gray-100 rounded-full flex items-center justify-center">
                                        <div className="w-3/4 h-3/4 border border-gray-100 rounded-full flex items-center justify-center">
                                            <div className="w-1/2 h-1/2 border border-gray-100 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                                    className="absolute w-full h-full bg-blue-500/5 rounded-full"
                                    style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 50%)' }}
                                />
                                <div className="relative text-center">
                                    <div className="text-6xl font-black italic tracking-tighter text-gray-900 drop-shadow-sm mb-1">{country.safetyRating}</div>
                                    <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest leading-none uppercase">Global Index</div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 text-center group-hover:bg-emerald-50 transition-colors">
                                    <div className="text-xl font-black italic text-emerald-600">ZERO</div>
                                    <div className="text-[7px] font-black text-gray-400 uppercase tracking-[0.3em] mt-2 uppercase">Insecurity</div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 text-center group-hover:bg-blue-50 transition-colors">
                                    <div className="text-xl font-black italic text-blue-600">PEAK</div>
                                    <div className="text-[7px] font-black text-gray-400 uppercase tracking-[0.3em] mt-2 uppercase">Governance</div>
                                </div>
                            </div>
                        </div>

                        {/* Funding Intelligence */}
                        <div className="bg-gradient-to-br from-blue-900 via-[#050505] to-indigo-900 rounded-[3.5rem] p-10 text-white shadow-2xl shadow-indigo-500/20">
                            <div className="flex items-center gap-3 mb-10">
                                <FaRobot className="text-blue-400 animate-bounce" />
                                <h4 className="text-xs font-black uppercase tracking-[0.4em] italic mb-0 uppercase">Funding Intel</h4>
                            </div>
                            <div className="space-y-6">
                                {country.scholarships.map((sch, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 5 }}
                                        className="p-5 bg-white/5 border border-white/5 rounded-3xl hover:bg-white/10 transition-all cursor-pointer group"
                                    >
                                        <div className="flex justify-between items-start mb-3 text-blue-300">
                                            <span className="text-[9px] font-black uppercase tracking-[0.4em] italic uppercase">{sch.Type} Protocol</span>
                                            <FaStar size={12} className="group-hover:text-yellow-400 group-hover:rotate-45 transition-all" />
                                        </div>
                                        <h6 className="text-[11px] font-black italic uppercase tracking-tight mb-2 text-white group-hover:text-blue-400 transition-colors uppercase">{sch.name}</h6>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest uppercase">{sch.amount}</p>
                                    </motion.div>
                                ))}
                            </div>
                            <button className="w-full mt-10 text-[9px] font-black uppercase tracking-[0.4em] text-blue-400 hover:text-white transition-all flex items-center justify-center gap-3 group uppercase">
                                Unlock All Grants <FaArrowLeft className="rotate-180 group-hover:translate-x-2 transition-transform" size={10} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Enhanced CTA Section */}
            <section className="py-24 bg-blue-600 relative overflow-hidden mx-4 md:mx-8 mb-24 rounded-[4rem] shadow-2xl shadow-blue-500/40">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700" />
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] -mr-96 -mt-96" />
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10 text-white">
                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter italic mb-10 leading-tight uppercase">
                        Architect Your Future <br /> in <span className="underline decoration-white/20 underline-offset-[15px]">{country.name}</span>
                    </h2>
                    <p className="text-blue-100 text-lg md:text-xl mb-14 max-w-3xl mx-auto font-medium italic opacity-80 leading-relaxed uppercase">
                        Connect with our elite {country.name} immigration intelligence officers for a high-velocity profile audit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 bg-white text-blue-600 rounded-[2.5rem] text-[11px] font-black uppercase tracking-[0.4em] shadow-2xl hover:scale-105 transition-all active:scale-95 italic uppercase">
                            Begin FREE Audit Profile
                        </button>
                        <button className="px-12 py-6 bg-black text-white rounded-[2.5rem] text-[11px] font-black uppercase tracking-[0.4em] border border-white/10 hover:bg-gray-900 transition-all active:scale-95 italic uppercase">
                            Country Checklist PDF
                        </button>
                    </div>
                </div>
            </section>

            {/* 🔹 Lifestyle Matrix Section */}
            <section className="py-32 bg-white border-t border-gray-50">
                <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative text-gray-900">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl mb-10 italic uppercase">
                            <FaCloudUploadAlt size={14} /> Lifestyle Intelligence 0x1
                        </div>
                        <h3 className="text-5xl font-black text-gray-900 uppercase tracking-tighter italic mb-10 leading-none uppercase">
                            Cultural <span className="text-blue-600">Calibration</span> & <br /> Environmental Matrix
                        </h3>
                        <p className="text-gray-500 text-lg leading-relaxed mb-12 font-medium italic uppercase">
                            Aligning your lifestyle with {country.name}'s ecosystem. From {country.climate.toLowerCase()} transitions
                            to specialized Indian dietary hub mapping, we ensure a seamless neural adaptation.
                        </p>
                        <div className="flex items-center gap-16">
                            <div className="group cursor-default">
                                <div className="text-5xl font-black italic tracking-tighter text-gray-900 group-hover:text-blue-600 transition-colors leading-none uppercase">85%</div>
                                <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mt-3 italic uppercase">DESI COMMUNITY DENSITY</div>
                            </div>
                            <div className="w-px h-16 bg-gray-100 hidden md:block uppercase" />
                            <div className="group cursor-default">
                                <div className="text-5xl font-black italic tracking-tighter text-gray-900 group-hover:text-emerald-50 transition-colors leading-none uppercase">PEAK</div>
                                <div className="text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] mt-3 italic uppercase">INDIAN CUISINE ACCESS</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        {/* Indian Tricolor Border Frame Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9933] via-[#FBFCFE] to-[#138808] -m-2 blur-[1px] rounded-[5rem] opacity-30" />
                        <motion.div
                            whileHover={{ scale: 0.98 }}
                            className="aspect-[4/3] bg-white p-4 rounded-[4.5rem] shadow-2xl shadow-blue-500/10 border-2 border-white relative z-10 overflow-hidden"
                        >
                            <img
                                src={`https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200&auto=format&fit=crop&q=80`}
                                alt={country.name}
                                className="w-full h-full object-cover rounded-[3.5rem] grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>

                        {/* Float Badge */}
                        <div className="absolute -bottom-10 -right-6 bg-white p-10 rounded-[3.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] flex items-center gap-8 border-4 border-gray-50 z-20 hover:-translate-y-4 transition-transform duration-500">
                            <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-5xl shadow-inner border border-white">
                                {country.flag}
                            </div>
                            <div>
                                <div className="text-[11px] font-black uppercase text-gray-400 tracking-[0.4em] mb-2 italic leading-none uppercase">Climate Index</div>
                                <div className="text-3xl font-black italic tracking-tighter text-gray-900 whitespace-nowrap uppercase">{country.climate.split(' ')[0]}</div>
                                <div className="text-[10px] font-black text-blue-600 mt-2 uppercase tracking-widest italic leading-none uppercase">Adaptation Req: Low</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CountryDetailPage;
