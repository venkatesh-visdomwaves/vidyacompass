import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    FaCompass, FaGlobeAmericas, FaRoute, FaWallet, FaBrain,
    FaArrowRight, FaRobot, FaChartLine, FaCheckCircle, FaUserGraduate,
    FaChevronRight, FaLightbulb, FaShieldAlt, FaRocket
} from 'react-icons/fa';

const studentPillars = [
    {
        icon: <FaCompass className="text-[#FF9933]" />,
        title: "Find Your Career",
        desc: "Take a simple test to find which jobs match your personality and interests.",
        link: "/students/career-discovery",
        benefit: "Stop guessing and start knowing what job is perfect for you."
    },
    {
        icon: <FaGlobeAmericas className="text-[#138808]" />,
        title: "Study Abroad",
        desc: "Compare costs, colleges, and scholarships in over 50 countries easily.",
        link: "/students/global-explorer",
        benefit: "Find the best education that fits your budget."
    },
    {
        icon: <FaRoute className="text-[#FF9933]" />,
        title: "Your 5-Year Plan",
        desc: "Get a clear, year-by-year guide from school to your first big job.",
        link: "/students/roadmap",
        benefit: "Know exactly what to do every year to succeed."
    },
    {
        icon: <FaWallet className="text-[#138808]" />,
        title: "Money & Loans",
        desc: "See how much college costs and find easy ways to get loans and grants.",
        link: "/students/financial-planning",
        benefit: "Plan your payments without any stress or confusion."
    },
    {
        icon: <FaBrain className="text-[#FF9933]" />,
        title: "Job Market News",
        desc: "See which jobs are growing and how much money you can earn in the future.",
        link: "/students/career-intelligence",
        benefit: "Choose a career that will pay well and stay in demand."
    }
];

const StudentsPage = () => {
    return (
        <div className="bg-white min-h-screen pt-16">
            {/* Simple Hero Section */}
            <section className="relative py-20 px-6 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#138808]/5 rounded-full blur-[100px] -mr-48 -mt-24"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-widest text-[#138808] mb-6 rounded-lg"
                        >
                            For Every Student
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight italic uppercase"
                        >
                            Build Your <br />
                            <span className="text-[#138808]">Future Career.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-gray-500 mb-10 max-w-xl leading-relaxed font-medium"
                        >
                            We help you find the right path, pick the best college, and plan your success with simple tools and clear advice.
                        </motion.p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/students/career-discovery" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-[#138808] transition-all flex items-center gap-2 shadow-xl">
                                Start Here <FaArrowRight size={10} />
                            </Link>
                            <a href="#features" className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-xs uppercase tracking-widest hover:border-[#FF9933] transition-all">
                                See Features
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="relative p-10 bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border border-white/5">
                            <div className="relative z-10">
                                <h4 className="text-white font-bold text-lg mb-8 italic">How We Help You:</h4>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                                        <div className="p-3 bg-[#138808]/20 text-[#138808] rounded-xl"><FaCheckCircle /></div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Clear Direction</p>
                                            <p className="text-gray-500 text-[10px] font-medium mt-1 uppercase tracking-wider">No more confusion about what to study.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5 text-left">
                                        <div className="p-3 bg-[#FF9933]/20 text-[#FF9933] rounded-xl"><FaShieldAlt /></div>
                                        <div>
                                            <p className="text-white font-bold text-sm">Safe Planning</p>
                                            <p className="text-gray-500 text-[10px] font-medium mt-1 uppercase tracking-wider">Know the costs before you spend any money.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pillar Grid - Feature Section */}
            <section id="features" className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 uppercase italic">Our 5 Main Tools</h2>
                        <p className="text-gray-500 max-w-xl mx-auto font-medium text-base">Simple blocks to help you reach your goals.</p>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {studentPillars.map((pillar, idx) => (
                            <Link
                                key={idx}
                                to={pillar.link}
                                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-gray-50 flex items-center justify-center text-2xl mb-8 group-hover:bg-gray-900 group-hover:text-white transition-all">
                                    {pillar.icon}
                                </div>
                                <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight uppercase">{pillar.title}</h3>
                                <p className="text-[11px] text-gray-400 leading-relaxed font-medium mb-6 flex-1">{pillar.desc}</p>

                                <div className="pt-6 border-t border-gray-50 mt-auto">
                                    <p className="text-[9px] font-black text-[#138808] uppercase tracking-widest mb-1 italic">The Benefit:</p>
                                    <p className="text-[10px] text-gray-500 font-medium leading-tight">{pillar.benefit}</p>
                                </div>

                                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#FF9933] group-hover:gap-3 transition-all">
                                    Open Tool <FaChevronRight size={8} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* New "How it works" section in Simple English */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="flex-1">
                            <h2 className="text-3xl font-black text-gray-900 mb-8 uppercase italic">Ready to Begin?</h2>
                            <div className="space-y-8">
                                {[
                                    { title: "1. Take the Test", desc: "Spend 5 minutes answering simple questions about yourself.", icon: <FaLightbulb /> },
                                    { title: "2. Get your Match", desc: "See which careers fit you best based on your answers.", icon: <FaBrain /> },
                                    { title: "3. Follow the Guide", desc: "Use our step-by-step plan to reach your selected career.", icon: <FaRocket /> }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-6 items-start group">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-[#138808] border border-gray-100 group-hover:bg-[#138808] group-hover:text-white transition-all">
                                            {step.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900">{step.title}</h4>
                                            <p className="text-gray-500 text-sm font-medium mt-1">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 bg-gray-50 p-12 rounded-[3rem] border border-gray-100 text-center">
                            <FaUserGraduate className="text-5xl text-[#138808] mx-auto mb-8" />
                            <h3 className="text-2xl font-black mb-6 uppercase italic">Join 10,000+ Students</h3>
                            <p className="text-gray-500 mb-10 font-medium">Over 10,000 students have used these tools to find their dream careers and colleges.</p>
                            <Link to="/students/career-discovery" className="block w-full py-5 bg-[#138808] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-lg">
                                Get Your Free Guide Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StudentsPage;
