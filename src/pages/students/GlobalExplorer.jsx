import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaTable, FaUniversity, FaGraduationCap, FaChevronDown, FaSearch, FaDollarSign, FaPassport, FaHome } from 'react-icons/fa';
import StudentSubNavbar from '../../components/Navbar/StudentSubNavbar';

const GlobalExplorer = () => {
    return (
        <div className="bg-white min-h-screen pt-16">
            <StudentSubNavbar />

            {/* Simple Hero Section */}
            <section className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] opacity-20"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center mt-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-block px-4 py-1 bg-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-lg mb-8"
                    >
                        Your Global School Finder
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-7xl font-black mb-8 leading-tight italic uppercase"
                    >
                        Study Anywhere <br /> <span className="text-[#FF9933]">In The World</span>
                    </motion.h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                        We help you compare colleges around the world. Find out where you can study, how much it costs, and how to get there.
                    </p>
                    <div className="max-w-xl mx-auto bg-white rounded-2xl p-1.5 flex items-center shadow-2xl overflow-hidden group">
                        <div className="px-4 text-gray-400"><FaSearch /></div>
                        <input type="text" placeholder="Type a Country or College name..." className="flex-1 py-3 text-sm text-gray-800 focus:outline-none font-bold" />
                        <button className="bg-[#138808] text-white px-8 md:px-12 py-3 rounded-xl font-bold hover:bg-[#FF9933] transition-all text-[10px] uppercase tracking-widest">Find Now</button>
                    </div>
                </div>
            </section>

            {/* How This Helps / Section Guide */}
            <section className="py-20 px-6 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { title: "Price Checks", desc: "Know the exact fees before you apply.", icon: <FaDollarSign /> },
                            { title: "Visa Help", desc: "Learn how to get your student permit.", icon: <FaPassport /> },
                            { title: "Living Costs", desc: "See how much rent and food will cost.", icon: <FaHome /> },
                            { title: "Top Degrees", desc: "Find the best courses in each country.", icon: <FaGraduationCap /> }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-center group">
                                <div className="p-3 bg-gray-50 text-[#138808] rounded-xl group-hover:bg-[#138808] group-hover:text-white transition-all text-xl">{item.icon}</div>
                                <div>
                                    <h5 className="font-bold text-gray-900 text-xs mb-1 uppercase italic">{item.title}</h5>
                                    <p className="text-[10px] text-gray-400 font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 1: Compare Countries (Simple Table) */}
            <section id="compare" className="py-24 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase italic">Compare Popular Countries</h2>
                        <p className="text-gray-500 font-medium">See the differences between studying in India and abroad.</p>
                    </div>

                    <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-xl bg-white overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-900 text-white">
                                <tr>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest">Main Details</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-[#138808]">India</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-[#FF9933]">USA</th>
                                    <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-blue-400">Germany</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[
                                    { feature: 'Fees per Year', india: '₹2 Lakh - 10 Lakh', usa: '₹25 Lakh - 50 Lakh', germany: 'Nearly Free' },
                                    { feature: 'Rent & Living', india: '₹1 Lakh - 3 Lakh', usa: '₹12 Lakh - 18 Lakh', germany: '₹9 Lakh - 12 Lakh' },
                                    { feature: 'Work after Study', india: 'Depends on Job', usa: 'Up to 3 Years', germany: '18 Months' },
                                    { feature: 'Scholarships', india: 'For Merit students', usa: 'Many available', germany: 'Very Few' },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-10 py-6 text-xs font-black text-gray-900 italic uppercase">{row.feature}</td>
                                        <td className="px-10 py-6 text-xs text-gray-600 font-bold">{row.india}</td>
                                        <td className="px-10 py-6 text-xs text-gray-600 font-bold">{row.usa}</td>
                                        <td className="px-10 py-6 text-xs text-gray-600 font-bold">{row.germany}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Section 2: Scholarship Finder (Simple English) */}
            <section id="scholarships" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-[#138808] rounded-[3.5rem] p-12 md:p-24 text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full -mr-32 -mt-32 group-hover:scale-110 transition-transform duration-700"></div>

                        <div className="relative z-10 flex flex-col items-center text-center">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 inline-block bg-white/10 px-4 py-1.5 rounded-lg">Get Free Money</span>
                            <h2 className="text-4xl md:text-6xl font-black mb-10 uppercase italic">10,000+ <br /> Scholarships</h2>
                            <p className="text-white/80 text-lg mb-12 max-w-2xl font-medium">You don't have to pay for everything yourself. We help you find colleges that give free money to good students.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="px-10 py-5 bg-white text-[#138808] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] hover:text-white transition-all shadow-2xl">Find My Scholarship</button>
                                <button className="px-10 py-5 bg-[#138808] text-white border border-white/20 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">How to Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Section: Simple Advice */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase italic leading-tight">Start Your <br /> Global Story</h2>
                        <div className="space-y-6">
                            {[
                                "Pick a country that matches your budget.",
                                "Check if your course is famous in that country.",
                                "Talk to our experts about the Visa process."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-4 items-center">
                                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-[#138808] font-black text-sm">{i + 1}</div>
                                    <p className="text-gray-600 font-bold text-sm tracking-wide">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-white p-12 rounded-[3.5rem] shadow-xl border border-gray-100 italic">
                        <p className="text-xl text-gray-400 font-medium leading-relaxed mb-10">"I thought studying in the USA was impossible for my family. But Vidya Compass helped me find a scholarship that paid for 100% of my fees!"</p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                            <div>
                                <p className="text-gray-900 font-black text-xs uppercase tracking-widest">Rahul Sharma</p>
                                <p className="text-[#138808] font-bold text-[10px] uppercase">MS Student, USA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GlobalExplorer;
