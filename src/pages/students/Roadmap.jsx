import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaBriefcase, FaCertificate, FaRocket, FaFilePdf, FaCheckCircle, FaChevronRight, FaMapMarkerAlt, FaWalking } from 'react-icons/fa';
import StudentSubNavbar from '../../components/Navbar/StudentSubNavbar';

const Roadmap = () => {
    const years = [
        { year: 'Year 1', title: 'Learn Basics', desc: 'Focus on your studies and learn how to speak and write better.', icon: <FaRocket /> },
        { year: 'Year 2', title: 'First Practice', desc: 'Do a small internship to see how companies actually work.', icon: <FaBriefcase /> },
        { year: 'Year 3', title: 'Get Certified', desc: 'Take extra certificates to show you are an expert in your field.', icon: <FaCertificate /> },
        { year: 'Year 4', title: 'Job Prep', desc: 'Practice for interviews and build your final resume.', icon: <FaCheckCircle /> },
        { year: 'Year 5', title: 'First Big Job', desc: 'Apply for your dream company or go for higher studies (Masters).', icon: <FaBriefcase /> }
    ];

    return (
        <div className="bg-white min-h-screen pt-16">
            <StudentSubNavbar />

            {/* Simple Hero Section */}
            <section className="py-24 px-6 bg-[#0F172A] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#138808 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center text-center mt-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 bg-[#138808]/20 border border-[#138808]/30 rounded-lg text-[10px] font-black uppercase tracking-[0.3em] text-[#138808] mb-8"
                    >
                        Your Step-By-Step Plan
                    </motion.div>
                    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight italic uppercase">Success <br /> <span className="text-[#FF9933]">Roadmap</span></h1>
                    <p className="text-lg text-gray-400 max-w-2xl mb-12 font-medium leading-relaxed">
                        Don't get lost in your journey. We give you a simple, year-by-year map that shows you exactly what to do from college to your first job.
                    </p>
                    <button className="px-10 py-5 bg-[#138808] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-2xl">Create My Plan Now</button>
                </div>
            </section>

            {/* Practical Guide / How this helps */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase italic leading-tight">Why Use a Roadmap?</h2>
                        <div className="grid gap-6">
                            {[
                                { title: "Simple Goals", desc: "Small tasks every year are easier to finish than one huge goal.", icon: <FaWalking /> },
                                { title: "No Missed Chances", desc: "We tell you when to take exams so you never miss a deadline.", icon: <FaMapMarkerAlt /> },
                                { title: "Stay Ahead", desc: "Know what skills companies want before they even start hiring.", icon: <FaCheckCircle /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-[2rem] border border-gray-100 group hover:border-[#138808] transition-all">
                                    <div className="p-4 bg-white text-[#138808] rounded-xl text-xl shadow-sm">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1 uppercase text-sm italic">{item.title}</h4>
                                        <p className="text-xs text-gray-500 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 bg-gray-50 p-12 rounded-[4rem] border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#138808]/5 rounded-full -mr-16 -mt-16"></div>
                        <h3 className="text-xl font-bold mb-8 italic uppercase text-[#138808]">Your 5-Year Journey</h3>
                        <div className="space-y-12 relative">
                            {/* Small dot line */}
                            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gray-200 border-dashed border-l-2"></div>

                            {years.map((y, idx) => (
                                <div key={idx} className="flex gap-6 items-start relative z-10">
                                    <div className="w-12 h-12 bg-white border border-gray-100 rounded-xl flex items-center justify-center text-[#138808] font-black text-xs shadow-sm shadow-gray-200">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-gray-900 text-xs mb-1 uppercase tracking-wider">{y.title}</h4>
                                        <p className="text-[11px] text-gray-400 font-medium leading-relaxed">{y.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Resume Forge Section simplified */}
            <section id="portfolio" className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-1">
                        <span className="text-[#138808] text-[10px] font-black uppercase tracking-[0.3em] mb-6 block">Build Your Profile</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight uppercase italic font-serif">Resume & <br /> <span className="text-[#FF9933]">Portfolio Builder</span></h2>
                        <p className="text-gray-500 text-lg mb-12 font-medium leading-relaxed">Don't just have a plain paper. We help you build a digital portfolio that shows all your projects and certificates clearly to employers.</p>

                        <div className="flex flex-wrap gap-4 mb-12 font-bold text-[10px] uppercase tracking-widest">
                            <button className="px-10 py-5 bg-gray-900 text-white rounded-2xl hover:bg-[#138808] transition-all flex items-center gap-3 shadow-xl">
                                <FaFilePdf /> Create My Resume
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-white p-2 rounded-[3.5rem] shadow-2xl overflow-hidden transform md:-rotate-1 group hover:rotate-0 transition-all duration-700">
                        <div className="bg-gray-50 p-12 rounded-[3.1rem]">
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                </div>
                                <span className="text-[10px] font-black uppercase text-gray-300 tracking-widest">Preview Mode</span>
                            </div>
                            <div className="space-y-6">
                                <div className="w-full h-10 bg-white rounded-xl flex items-center px-4"><div className="w-1/3 h-2 bg-gray-100 rounded"></div></div>
                                <div className="w-3/4 h-2 bg-white rounded ml-4"></div>
                                <div className="w-1/2 h-2 bg-white rounded ml-4"></div>

                                {/* Skills boxes */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="p-4 bg-white rounded-2xl border border-gray-100 italic text-[10px] text-gray-300 font-bold">Skills List</div>
                                    <div className="p-4 bg-white rounded-2xl border border-gray-100 italic text-[10px] text-gray-300 font-bold">Certificates</div>
                                </div>

                                <div className="w-full h-24 bg-white rounded-3xl border border-dashed border-gray-200 flex items-center justify-center">
                                    <FaCheckCircle className="text-[#138808] opacity-10 text-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Roadmap;
