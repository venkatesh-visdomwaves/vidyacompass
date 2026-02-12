import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaArrowRight, FaVideo, FaHeadset, FaFilePdf, FaClipboardList, FaQuestionCircle, FaChevronDown, FaHistory, FaDownload } from 'react-icons/fa';
import ParentSubNavbar from '../../components/Navbar/ParentSubNavbar';

const ExpertGuidance = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const faqs = [
        {
            q: "How does the AI recommend careers?",
            a: "Our AI uses neuro-cognitive profiling. It looks at your child's personality, skill scores, and passion areas, then matches them with 2026 job market trends."
        },
        {
            q: "How reliable are the financial estimates?",
            a: "We update our fee and inflation data every month. Estimates include tuition, living costs, and average visa fee hikes as of February 2026."
        },
        {
            q: "How often is student data updated?",
            a: "Academic records sync once a week, while skill heatmaps and job readiness scores update every time the student completes a new module or test."
        },
        {
            q: "Can we manage multiple sibling profiles?",
            a: "Yes, parents can add multiple student profiles under one account and switch between dashboards seamlessly."
        }
    ];

    return (
        <div className="bg-white min-h-screen pt-16 font-sans">
            <ParentSubNavbar />

            {/* Simple Hero Section */}
            <section className="py-24 px-6 bg-slate-50 border-b border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-8">
                    <div className="px-4 py-1 bg-[#1e3a8a]/10 border border-[#1e3a8a]/20 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#1e3a8a] mb-10">
                        Professional Support
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-tight italic uppercase max-w-4xl">Expert <br /> <span className="text-[#FF9933]">Guidance</span></h1>
                    <p className="text-lg text-slate-500 max-w-2xl font-medium leading-relaxed mb-12">
                        You don't have to navigate your child's future alone. Access professional counselors and data-backed resources in one click.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 font-black text-[10px] uppercase tracking-widest">
                        <button className="px-10 py-5 bg-[#1e3a8a] text-white rounded-2xl hover:bg-[#FF9933] transition-all shadow-xl flex items-center gap-3">
                            Book a Meeting <FaVideo />
                        </button>
                        <button className="px-10 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl hover:border-[#1e3a8a] transition-all flex items-center gap-3">
                            Chat with Support <FaHeadset />
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 1: Resource Tools */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic leading-tight underline decoration-[#138808] decoration-4 underline-offset-8">Planning <br /> Resources</h2>
                            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-12">
                                Download proven templates and checklists used by thousands of families to organize their child's global college application.
                            </p>
                            <div className="space-y-4">
                                {[
                                    { title: 'Career Planning Checklist', desc: 'Step-by-step goals from Grade 9 to 12.', icon: <FaClipboardList /> },
                                    { title: 'Financial Template', desc: 'Calculate your savings vs university costs.', icon: <FaDownload /> },
                                    { title: 'Study Abroad Guide 2026', desc: 'Everything on visas and safety.', icon: <FaFilePdf /> }
                                ].map((res, i) => (
                                    <div key={i} className="group p-6 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-between hover:border-[#1e3a8a] transition-all">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1e3a8a] shadow-sm">{res.icon}</div>
                                            <div>
                                                <h4 className="text-[11px] font-black uppercase text-slate-900 tracking-wide">{res.title}</h4>
                                                <p className="text-[10px] text-slate-400 font-medium">{res.desc}</p>
                                            </div>
                                        </div>
                                        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:text-[#FF9933] group-hover:bg-[#FF9933]/5 transition-all">
                                            <FaDownload size={12} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-full bg-slate-900 rounded-[4rem] p-16 text-white relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e3a8a]/30 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                            <FaHistory className="text-6xl text-white/10 mb-10" />
                            <h3 className="text-2xl md:text-4xl font-black mb-8 italic uppercase leading-tight">Return-To-India <br /> <span className="text-[#FF9933]">ROI Path</span></h3>
                            <p className="text-slate-400 font-medium leading-relaxed mb-10 border-l-2 border-slate-700 pl-6">Access insights on how to transition your child back to the Indian job market after their global degree.</p>
                            <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#138808] hover:text-white transition-all shadow-xl">Explore Pathways</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: FAQ & Help Center */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20 text-[#1e3a8a]">
                        <FaQuestionCircle className="text-5xl mx-auto mb-6 opacity-20" />
                        <h2 className="text-3xl font-black uppercase italic text-slate-900">FAQ & Help Center</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    className="w-full p-8 flex items-center justify-between text-left group"
                                >
                                    <span className="font-extrabold text-slate-900 uppercase tracking-tight text-sm md:text-base">{faq.q}</span>
                                    <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-all ${openFaq === i ? 'rotate-180 bg-[#1e3a8a] text-white' : 'group-hover:bg-slate-100 text-slate-400'}`}>
                                        <FaChevronDown size={10} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-8 pt-0 text-slate-500 text-sm font-medium leading-relaxed border-t border-slate-50 mt-4 mx-8">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 bg-white rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-2xl text-[#1e3a8a]"><FaHeadset /></div>
                            <div>
                                <h4 className="text-lg font-black text-slate-900 uppercase m-0 italic">Still Have Questions?</h4>
                                <p className="text-slate-400 text-xs font-medium">Our human support team is online 24/7.</p>
                            </div>
                        </div>
                        <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#1e3a8a] transition-all flex items-center gap-2">
                            Start Chat Now <FaArrowRight size={10} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExpertGuidance;
