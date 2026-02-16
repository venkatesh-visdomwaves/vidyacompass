import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    FaFileAlt, FaMagic, FaDownload, FaLinkedin,
    FaCheckCircle, FaExclamationTriangle, FaEye,
    FaColumns, FaPaintBrush, FaArrowRight, FaSearch
} from 'react-icons/fa';
import CareerSubNavbar from '../../components/Navbar/CareerSubNavbar';

const templates = [
    { name: 'Future Corporate', image: 'bg-blue-900', style: 'Minimal' },
    { name: 'Tech Disruptor', image: 'bg-slate-900', style: 'Modern' },
    { name: 'Creative Bio', image: 'bg-rose-500', style: 'Artistic' },
    { name: 'Academic Plus', image: 'bg-emerald-600', style: 'Standard' }
];

const ResumeBuilder = () => {
    const [selectedTemplate, setSelectedTemplate] = useState('Future Corporate');

    return (
        <div className="bg-white min-h-screen pt-16">
            <CareerSubNavbar />

            {/* Hero Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-blue-50/50 to-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-block px-4 py-1 bg-[#1e3a8a]/10 text-[#1e3a8a] text-[10px] font-bold uppercase tracking-widest rounded-lg mb-6"
                        >
                            AI-Powered Builder
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight italic uppercase">
                            Your Profile, <br />
                            <span className="text-[#1e3a8a]">Professionally Mapped.</span>
                        </h1>
                        <p className="text-lg text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
                            Our AI architect converts your Student Passport into a high-impact, recruiter-approved resume. Optimized for ATS and visual storytelling.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-10 py-5 bg-[#1e3a8a] text-white rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl hover:bg-[#FF9933] transition-all">
                                Generate Resume Now
                            </button>
                            <button className="px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-gray-900 transition-all">
                                Upload Existing
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        {/* Live Resume Preview Card */}
                        <div className="bg-white rounded-[3.5rem] p-1 shadow-2xl border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-white p-10 rounded-[3.1rem]">
                                <div className="flex justify-between items-center mb-10 pb-10 border-b border-gray-50">
                                    <h3 className="text-2xl font-black italic uppercase text-gray-900">John Doe</h3>
                                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400"><FaEye /></div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#1e3a8a]"></div>
                                        <div className="h-2 w-3/4 bg-gray-50 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-2 h-2 rounded-full bg-[#FF9933]"></div>
                                        <div className="h-2 w-1/2 bg-gray-50 rounded-full"></div>
                                    </div>
                                    <div className="pt-10 space-y-4">
                                        <div className="h-24 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center">
                                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">AI Experience Suggestion...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 flex gap-2">
                                    <div className="px-3 py-1 bg-blue-50 text-[8px] font-black text-blue-600 rounded-full uppercase tracking-widest">Leadership</div>
                                    <div className="px-3 py-1 bg-green-50 text-[8px] font-black text-green-600 rounded-full uppercase tracking-widest">Python</div>
                                    <div className="px-3 py-1 bg-orange-50 text-[8px] font-black text-orange-600 rounded-full uppercase tracking-widest">Data Science</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Step-by-Step AI Journey */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { title: 'Data Scan', desc: 'Syncs with your Vidya profile instantly.', icon: <FaSearch /> },
                        { title: 'AI Matching', desc: 'Matches skills to job requirements.', icon: <FaMagic /> },
                        { title: 'Template Choice', desc: 'Pick from local & global styles.', icon: <FaPaintBrush /> },
                        { title: 'Job Ready', desc: 'Download as PDF or link to LinkedIn.', icon: <FaDownload /> }
                    ].map((step, i) => (
                        <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all">
                            <div className="w-16 h-16 rounded-2xl bg-gray-50 text-[#1e3a8a] flex items-center justify-center text-2xl mb-8 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all">
                                {step.icon}
                            </div>
                            <h4 className="text-lg font-black uppercase italic text-gray-900 mb-4">{step.title}</h4>
                            <p className="text-sm text-gray-400 font-medium leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Template Selector Section */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic">Select Your Style</h2>
                            <p className="text-gray-500 font-medium">Curated templates for every industry and seniority level.</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="p-4 bg-gray-900 text-white rounded-2xl"><FaColumns /></button>
                            <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-gray-100 transition-all"><FaEye /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {templates.map((t, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedTemplate(t.name)}
                                className={`group p-6 rounded-[3rem] border transition-all cursor-pointer ${selectedTemplate === t.name ? 'border-[#1e3a8a] bg-blue-50/50 shadow-xl' : 'border-gray-100 bg-white hover:border-gray-300'}`}
                            >
                                <div className={`aspect-[3/4] rounded-[2rem] ${t.image} mb-8 shadow-inner relative overflow-hidden`}>
                                    <div className="absolute inset-x-4 top-4 h-2 bg-white/20 rounded-full"></div>
                                    <div className="absolute inset-x-4 top-10 h-2 bg-white/20 rounded-full w-2/3"></div>
                                    <div className="absolute inset-x-4 bottom-4 h-12 bg-white/10 backdrop-blur-md rounded-xl"></div>
                                </div>
                                <h4 className="text-lg font-black text-gray-900 uppercase italic mb-1">{t.name}</h4>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.style} Preference</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resume Quality Check (Informational) */}
            <section className="py-32 px-6 bg-gray-900 text-white relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase italic leading-tight">AI Quality <br /> <span className="text-[#FF9933]">Audit.</span></h2>
                        <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                            Every resume built on Vidya Compass undergoes a 50-point quality check against global hiring standards.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: 'ATS Readability', score: '98%', icon: <FaCheckCircle className="text-green-500" /> },
                                { title: 'Keyword Optimization', score: '95%', icon: <FaCheckCircle className="text-green-500" /> },
                                { title: 'Action Verbs Usage', score: '92%', icon: <FaCheckCircle className="text-green-500" /> },
                                { title: 'Formatting Consistency', score: '100%', icon: <FaCheckCircle className="text-green-500" /> }
                            ].map((stat, i) => (
                                <div key={i} className="flex justify-between items-center p-6 bg-white/5 rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                                    <div className="flex items-center gap-4">
                                        {stat.icon}
                                        <span className="font-bold text-sm uppercase tracking-widest">{stat.title}</span>
                                    </div>
                                    <span className="text-[#FF9933] font-black italic">{stat.score}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF9933] to-[#1e3a8a] rounded-[4rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-black rounded-[4rem] p-12 border border-white/10 shadow-3xl">
                            <div className="flex items-center gap-3 mb-10 pb-8 border-b border-white/10">
                                <FaExclamationTriangle className="text-[#FF9933]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#FF9933]">AI Critical Fixes</span>
                            </div>
                            <div className="space-y-8">
                                <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-[#138808]">
                                    <p className="text-xs font-bold text-white uppercase italic mb-2">Success!</p>
                                    <p className="text-[10px] text-gray-400 font-medium">Quantified your "Python Project" with 25% efficiency growth metric. Added to Experience section.</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-2xl border-l-4 border-rose-500">
                                    <p className="text-xs font-bold text-white uppercase italic mb-2">Improvement Needed</p>
                                    <p className="text-[10px] text-gray-400 font-medium">Your header font is too small for modern US-based tech recruiting standards. Auto-adjusting to 14pt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6">
                <div className="max-w-5xl mx-auto rounded-[4rem] bg-[#1e3a8a] p-20 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <FaLinkedin className="text-7xl text-white/10 mx-auto mb-10" />
                    <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase italic leading-tight">Ready for your <br /> <span className="text-[#FF9933]">Next Big Move?</span></h2>
                    <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-medium">Sync with LinkedIn, Download PDF, and start applying to verified global roles instantly.</p>
                    <button className="px-12 py-5 bg-white text-[#1e3a8a] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] hover:text-white transition-all shadow-2xl">
                        Launch Resume Builder
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ResumeBuilder;
