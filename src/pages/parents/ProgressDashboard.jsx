import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaChartBar, FaGraduationCap, FaBrain, FaCheckCircle, FaExclamationTriangle, FaStar, FaUserTie } from 'react-icons/fa';
import ParentSubNavbar from '../../components/Navbar/ParentSubNavbar';

const ProgressDashboard = () => {
    return (
        <div className="bg-white min-h-screen pt-16 font-sans">
            <ParentSubNavbar />

            {/* Hero Section */}
            <section className="py-20 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-8">
                    <div className="flex-1">
                        <div className="px-4 py-1 bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#1e3a8a] mb-8 inline-block">
                            Live Progress Feed
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 leading-tight italic uppercase">Student <br /> <span className="text-[#1e3a8a]">Success Matrix</span></h1>
                        <p className="text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
                            Monitor your child's academic growth and skill development in real-time. No more guessing—just clear, data-backed insights.
                        </p>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 relative group overflow-hidden">
                            <div className="flex justify-between items-center mb-12">
                                <div>
                                    <h4 className="text-xl font-black text-slate-900 uppercase italic">Overall Readiness</h4>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Based on global standards</p>
                                </div>
                                <div className="w-20 h-20 rounded-full border-4 border-[#138808] flex flex-col items-center justify-center">
                                    <span className="text-2xl font-black text-slate-900">76%</span>
                                </div>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { label: 'Academic Standing', val: '88%', color: '#1e3a8a' },
                                    { label: 'Skill Mastery', val: '64%', color: '#FF9933' },
                                    { label: 'Profile Strength', val: '72%', color: '#138808' }
                                ].map((item, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-[8px] font-black uppercase text-slate-400 mb-2 tracking-widest">
                                            <span>{item.label}</span>
                                            <span style={{ color: item.color }}>{item.val}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100">
                                            <div className="h-full rounded-full" style={{ width: item.val, backgroundColor: item.color }}></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Academic Tracking */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="flex-1 w-full order-2 lg:order-1">
                            <div className="p-10 bg-slate-900 rounded-[3.5rem] text-white shadow-2xl">
                                <div className="flex items-center gap-3 mb-12">
                                    <FaChartLine className="text-[#FF9933] text-2xl" />
                                    <h3 className="text-xl font-bold uppercase italic tracking-wide">Performance Trends</h3>
                                </div>
                                {/* Mock graph UI */}
                                <div className="h-64 flex items-end justify-between px-4 pb-4 border-b border-white/10 relative">
                                    {[40, 60, 45, 80, 75, 90].map((h, i) => (
                                        <div key={i} className="w-8 bg-white/10 rounded-t-lg relative group transition-all hover:bg-[#1e3a8a]">
                                            <div className="absolute bottom-0 w-full bg-[#1e3a8a] rounded-t-lg transition-all" style={{ height: `${h}%` }}></div>
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">7.{i}</div>
                                        </div>
                                    ))}
                                    <div className="absolute left-0 bottom-1/2 w-full border-t border-dashed border-white/5 pointer-events-none"></div>
                                </div>
                                <div className="flex justify-between text-[8px] font-black text-white/30 uppercase tracking-[0.3em] mt-6 px-2">
                                    <span>Sem 1</span><span>Sem 2</span><span>Sem 3</span><span>Sem 4</span><span>Sem 5</span><span>Recent</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 order-1 lg:order-2">
                            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic leading-loose underline decoration-[#FF9933] decoration-4 underline-offset-8">Academic <br /> Tracking</h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                                We sync directly with the college LMS to provide weekly GPA updates, class attendance, and credit completion rates. No more waiting for semester reports.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest italic font-serif">Attendance</p>
                                    <h4 className="text-2xl font-black text-slate-900">92% <span className="text-[10px] text-[#138808] lowercase tracking-normal font-sans">Stable</span></h4>
                                </div>
                                <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                    <p className="text-[9px] font-black text-slate-400 uppercase mb-2 tracking-widest italic font-serif">Global GPA</p>
                                    <h4 className="text-2xl font-black text-slate-900">3.8 <span className="text-[10px] text-slate-400 lowercase tracking-normal font-sans">/ 4.0</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Skill Development Tracking */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase italic">Skill Heatmap</h2>
                        <p className="text-slate-500 font-medium">Monitoring the mastery of high-demand skills for 2026.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { title: 'Generative AI', level: 85, icon: <FaBrain />, color: '#1e3a8a' },
                            { title: 'Public Speaking', level: 60, icon: <FaStar />, color: '#FF9933' },
                            { title: 'Data Analysis', level: 92, icon: <FaChartLine />, color: '#138808' },
                            { title: 'Leadership', level: 45, icon: <FaUserTie />, color: '#1e3a8a' }
                        ].map((skill, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl text-slate-900 mb-8 group-hover:bg-slate-900 group-hover:text-white transition-all">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xs font-black uppercase text-slate-900 mb-6 tracking-widest">{skill.title}</h4>
                                <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden mb-3">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: skill.color }}
                                    ></motion.div>
                                </div>
                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Progress: {skill.level}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Career Path Monitoring */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic leading-tight">Career Path <br /> <span className="text-[#FF9933]">Monitoring</span></h2>
                        <div className="space-y-6">
                            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-[#1e3a8a] transition-all">
                                <div className="w-14 h-14 rounded-3xl bg-white text-[#138808] flex items-center justify-center text-2xl shadow-sm"><FaCheckCircle /></div>
                                <div>
                                    <h4 className="font-black text-slate-900 text-xs mb-1 uppercase tracking-widest">Job Readiness Score</h4>
                                    <p className="text-xs text-slate-400 font-medium mb-3">Score out of 100 based on internships and mock interviews.</p>
                                    <span className="px-3 py-1 bg-[#138808]/10 text-[#138808] text-[9px] font-bold rounded-lg uppercase">Score: 82 / 100</span>
                                </div>
                            </div>
                            <div className="flex gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:border-[#FF9933] transition-all">
                                <div className="w-14 h-14 rounded-3xl bg-white text-[#FF9933] flex items-center justify-center text-2xl shadow-sm"><FaExclamationTriangle /></div>
                                <div>
                                    <h4 className="font-black text-slate-900 text-xs mb-1 uppercase tracking-widest">Gap Analysis</h4>
                                    <p className="text-xs text-slate-400 font-medium mb-3">Missing industry-recognized badges needed for dream role.</p>
                                    <span className="px-3 py-1 bg-[#FF9933]/10 text-[#FF9933] text-[9px] font-bold rounded-lg uppercase">2 Certifications Pending</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-slate-900 p-12 rounded-[4rem] text-white flex flex-col items-center text-center relative group overflow-hidden border-8 border-slate-50 shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/20 to-transparent"></div>
                        <FaGraduationCap className="text-6xl text-white/10 mb-10 group-hover:scale-110 transition-transform" />
                        <h3 className="text-3xl font-black mb-10 uppercase italic leading-tight px-6">Ready for <br /> Application?</h3>
                        <div className="w-32 h-32 rounded-full border-4 border-white/20 flex flex-col items-center justify-center mb-10 relative z-10">
                            <span className="text-4xl font-black">7.2</span>
                            <span className="text-[10px] uppercase font-bold text-slate-500">Tier Index</span>
                        </div>
                        <p className="text-slate-400 text-[11px] font-medium leading-relaxed px-10 mb-10 border-t border-white/5 pt-10">This student is currently eligible for Top 50 global universities based on consistent data tracking.</p>
                        <button className="w-full py-5 bg-[#138808] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-xl relative z-10">Download History Report</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProgressDashboard;
