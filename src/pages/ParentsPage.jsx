import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaChartPie, FaWallet, FaShieldAlt, FaComments,
    FaArrowRight, FaCheckCircle, FaUserShield, FaHandshake,
    FaChevronRight, FaLightbulb, FaRocket, FaUserGraduate, FaChartLine
} from 'react-icons/fa';
import ParentSubNavbar from '../components/Navbar/ParentSubNavbar';

const parentPillars = [
    {
        icon: <FaChartPie className="text-[#1e3a8a]" />,
        title: "Student Dashboard",
        desc: "Monitor your child's grades, skills, and job readiness in one simple view.",
        link: "/parents/dashboard",
        benefit: "Stay informed without asking a hundred questions."
    },
    {
        icon: <FaWallet className="text-[#138808]" />,
        title: "Financial Planning",
        desc: "Estimate total costs, plan budgets, and find low-interest student loans.",
        link: "/parents/financial-support",
        benefit: "Remove the stress of big education costs."
    },
    {
        icon: <FaShieldAlt className="text-[#FF9933]" />,
        title: "Risk & Safety",
        desc: "Check country safety scores, visa rules, and cultural lifestyle guides.",
        link: "/parents/risk-safety",
        benefit: "Ensure your child is safe and happy abroad."
    },
    {
        icon: <FaComments className="text-[#1e3a8a]" />,
        title: "Expert Guidance",
        desc: "Talk to expert counselors about pathways, PR, and career security.",
        link: "/parents/expert-guidance",
        benefit: "Get professional advice tailored to your family goals."
    }
];

const ParentsPage = () => {
    return (
        <div className="bg-white min-h-screen pt-16">
            <ParentSubNavbar />

            {/* Simple Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e3a8a]/5 rounded-full blur-[100px] -mr-48 -mt-24"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a] mb-6 rounded-lg"
                        >
                            <FaUserShield /> For Modern Parents
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight italic uppercase"
                        >
                            Empower Your <br />
                            <span className="text-[#1e3a8a]">Child’s Future.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-500 mb-10 max-w-xl leading-relaxed font-medium"
                        >
                            Track progress, plan finances, and make confident global education decisions with data and clarity.
                        </motion.p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/parents/dashboard" className="px-10 py-5 bg-[#1e3a8a] text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all flex items-center gap-3 shadow-xl">
                                View Dashboard <FaArrowRight size={10} />
                            </Link>
                            <a href="#features" className="px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-[#1e3a8a] transition-all">
                                Explore Planning Tools
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative p-1 bg-gradient-to-br from-gray-100 to-white rounded-[3.5rem] shadow-2xl overflow-hidden border border-gray-100">
                            <div className="bg-white p-10 rounded-[3.1rem]">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-[#1e3a8a]/10 flex items-center justify-center text-[#1e3a8a]"><FaChartLine /></div>
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-900">Success Index</span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-[#138808] bg-[#138808]/10 px-3 py-1 rounded-lg">Above Average</span>
                                </div>
                                <div className="space-y-8">
                                    <div>
                                        <div className="flex justify-between text-[8px] font-bold uppercase text-gray-400 mb-3 tracking-[0.2em]">
                                            <span>Academic Progress</span>
                                            <span className="text-[#1e3a8a]">88%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                                            <div className="h-full bg-[#1e3a8a] w-[88%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[8px] font-bold uppercase text-gray-400 mb-3 tracking-[0.2em]">
                                            <span>Job Readiness</span>
                                            <span className="text-[#FF9933]">72%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                                            <div className="h-full bg-[#FF9933] w-[72%]"></div>
                                        </div>
                                    </div>
                                    <div className="pt-6 border-t border-gray-50 flex items-center gap-4">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white"></div>)}
                                        </div>
                                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">3 Expert Advisors Connected</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 Pillars Grid */}
            <section id="features" className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic">The Parent Portal</h2>
                    <p className="text-gray-500 max-w-xl mx-auto font-medium text-lg">Support your child's journey with security and data.</p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {parentPillars.map((pillar, i) => (
                        <Link
                            key={i}
                            to={pillar.link}
                            className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#1e3a8a]/5 rounded-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-[#1e3a8a]/10"></div>

                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-10 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all relative z-10">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight uppercase relative z-10">{pillar.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-medium mb-10 flex-1 relative z-10">{pillar.desc}</p>

                            <div className="pt-8 border-t border-gray-50 mt-auto relative z-10">
                                <p className="text-[10px] font-black text-[#1e3a8a] uppercase tracking-widest mb-2 italic">How it helps:</p>
                                <p className="text-xs text-gray-500 font-medium leading-normal">{pillar.benefit}</p>
                            </div>

                            <div className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#FF9933] group-hover:gap-5 transition-all relative z-10">
                                Explore <FaChevronRight size={10} />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* How it Works Section */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic">How It Works</h2>
                        <p className="text-gray-500 font-medium text-lg">Four simple steps to peace of mind.</p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                            {[
                                { title: "Connect Profile", desc: "Easily link with your student's account with one click.", icon: <FaHandshake /> },
                                { title: "Track Progress", desc: "Get live updates on grades, attendance, and skills.", icon: <FaChartLine /> },
                                { title: "Analyze Plan", desc: "Review budget forecasts and scholarship options.", icon: <FaWallet /> },
                                { title: "Smart Decisions", desc: "Pick the best global path with expert safety data.", icon: <FaCheckCircle /> }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 rounded-3xl bg-white border-2 border-gray-100 flex items-center justify-center text-2xl text-[#1e3a8a] mb-8 shadow-sm group-hover:border-[#FF9933] transition-all group-hover:-translate-y-2">
                                        <div className="absolute top-0 right-0 w-8 h-8 bg-gray-900 text-white text-[10px] font-black flex items-center justify-center rounded-tr-2xl rounded-bl-2xl">0{i + 1}</div>
                                        {step.icon}
                                    </div>
                                    <h4 className="text-xl font-black text-gray-900 mb-4 uppercase italic">{step.title}</h4>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed px-4">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action for Parents */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-5xl mx-auto bg-[#1e3a8a] rounded-[4rem] p-16 text-center text-white relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="relative z-10">
                        <FaUserGraduate className="text-6xl text-white/20 mx-auto mb-10" />
                        <h2 className="text-3xl md:text-5xl font-black mb-10 uppercase italic leading-tight">Investment in <br /> <span className="text-[#FF9933]">Success</span></h2>
                        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-medium">Join thousands of parents who have moved from questioning to supporting with Vidya Compass.</p>
                        <button className="px-12 py-5 bg-white text-[#1e3a8a] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] hover:text-white transition-all shadow-2xl">Create Parent Account</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ParentsPage;
