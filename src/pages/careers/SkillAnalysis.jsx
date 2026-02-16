import React from 'react';
import { motion } from 'framer-motion';
import {
    FaBrain, FaChartPie, FaLightbulb, FaRoute,
    FaCheckCircle, FaProjectDiagram, FaArrowRight,
    FaTerminal, FaCode, FaMicrochip, FaUsers, FaGlobe
} from 'react-icons/fa';
import CareerSubNavbar from '../../components/Navbar/CareerSubNavbar';

const skillGaps = [
    { skill: 'Neural Networks', level: 65, market: 90, status: 'Learning' },
    { skill: 'Cloud Architecture', level: 40, market: 95, status: 'Critical Gap' },
    { skill: 'Python/C++', level: 85, market: 80, status: 'Proficient' },
    { skill: 'Agile Ops', level: 50, market: 75, status: 'Intermediate' }
];

const SkillAnalysis = () => {
    return (
        <div className="bg-white min-h-screen pt-16">
            <CareerSubNavbar />

            {/* Hero Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-blue-50/50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a] mb-8 rounded-lg"
                        >
                            <FaBrain /> Neural Skill Mapping
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight italic uppercase">
                            Close the <br />
                            <span className="text-[#138808]">Skill Gap.</span>
                        </h1>
                        <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium">
                            AI compares your current expertise with 10,000+ real-world job requirements to pinpoint exactly what you need to master next.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#138808] transition-all shadow-xl">
                                Run Full Audit
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        {/* Skill Radar / Graph Visualization Mockup */}
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 border-[20px] border-gray-50 rounded-full"></div>
                            <div className="absolute inset-[40px] border-[20px] border-gray-50/50 rounded-full"></div>
                            <div className="absolute inset-[80px] border-[20px] border-gray-50/20 rounded-full"></div>

                            {/* Floating Skill Bubbles */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute top-10 left-10 p-4 bg-[#1e3a8a] text-white rounded-2xl shadow-xl flex items-center gap-3 z-10"
                            >
                                <FaCode /> <span className="text-[10px] font-black uppercase italic">Hard Skills</span>
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute bottom-10 right-10 p-4 bg-[#138808] text-white rounded-2xl shadow-xl flex items-center gap-3 z-10"
                            >
                                <FaUsers /> <span className="text-[10px] font-black uppercase italic">Soft Skills</span>
                            </motion.div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-full shadow-2xl border border-gray-100 flex items-center justify-center">
                                <FaMicrochip className="text-4xl text-gray-200" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gap Analysis Table Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic">Comparison Dashboard</h2>
                        <p className="text-gray-500 font-medium">Your level vs Market Requirement for "Senior AI Ethics Role"</p>
                    </div>

                    <div className="space-y-6">
                        {skillGaps.map((gap, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 group hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all duration-500"
                            >
                                <div className="grid md:grid-cols-4 gap-8 items-center">
                                    <div className="flex flex-col">
                                        <h4 className="text-lg font-black text-gray-900 uppercase italic leading-tight mb-2">{gap.skill}</h4>
                                        <span className={`text-[9px] font-black uppercase tracking-widest ${gap.status === 'Critical Gap' ? 'text-rose-500' : 'text-[#138808]'}`}>{gap.status}</span>
                                    </div>

                                    <div className="md:col-span-2">
                                        <div className="flex justify-between text-[8px] font-black text-gray-400 uppercase tracking-widest mb-2">
                                            <span>Current: {gap.level}%</span>
                                            <span>Market Req: {gap.market}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-200 rounded-full relative overflow-hidden">
                                            <div className="absolute inset-0 bg-blue-100 h-full" style={{ width: `${gap.market}%` }}></div>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${gap.level}%` }}
                                                transition={{ duration: 1 }}
                                                className={`absolute inset-0 h-full z-10 ${gap.status === 'Critical Gap' ? 'bg-rose-500' : 'bg-[#1e3a8a]'}`}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#138808] group-hover:gap-4 transition-all">
                                            Upskill Now <FaArrowRight size={10} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Learning Roadmap Section */}
            <section className="py-32 px-6 bg-gray-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="space-y-8 relative">
                            <div className="absolute left-6 top-8 bottom-8 w-px bg-white/10"></div>
                            {[
                                { title: 'Foundations', sub: 'Calculus & Statistics for AI', time: 'Phase 01' },
                                { title: 'Specialization', sub: 'Deep Learning with PyTorch', time: 'Phase 02' },
                                { title: 'Project Lab', sub: 'Ethical Bias Detection Tools', time: 'Phase 03' },
                                { title: 'Certification', sub: 'Vidya Certified Ethics Expert', time: 'Phase 04' }
                            ].map((phase, i) => (
                                <div key={i} className="flex gap-8 items-start relative">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center text-[10px] font-black shadow-lg relative z-10">
                                        0{i + 1}
                                    </div>
                                    <div className="flex-1 pt-2">
                                        <p className="text-[#FF9933] font-black text-[9px] uppercase tracking-widest mb-1">{phase.time}</p>
                                        <h4 className="text-xl font-black text-white uppercase italic mb-1">{phase.title}</h4>
                                        <p className="text-gray-400 text-sm font-medium">{phase.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-2">
                        <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase italic leading-tight">Adaptive <br /> <span className="text-[#138808]">Roadmap.</span></h2>
                        <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                            Once your gaps are identified, we build a dynamic learning path that adjusts as you complete projects.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                <FaTerminal className="text-2xl text-[#FF9933] mb-4" />
                                <h5 className="text-sm font-black uppercase italic mb-2">Hands-on Lab</h5>
                                <p className="text-[10px] text-gray-400 font-medium">Write code in our integrated AI playground.</p>
                            </div>
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10">
                                <FaGlobe className="text-2xl text-[#1e3a8a] mb-4" />
                                <h5 className="text-sm font-black uppercase italic mb-2">Global Mentors</h5>
                                <p className="text-[10px] text-gray-400 font-medium">Connect with experts from Stanford & Oxford.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-gray-50 rounded-[5rem] p-20 text-center border border-gray-100 group overflow-hidden">
                    <FaLightbulb className="text-6xl text-[#FF9933] mx-auto mb-12 group-hover:scale-120 transition-transform" />
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase italic leading-tight">Identify Your <br /> <span className="text-[#138808]">Power Skills.</span></h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">Stop collecting certificates and start building the skills that actually lead to job offers.</p>
                    <button className="px-12 py-5 bg-[#1e3a8a] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-xl">Start Neural Audit</button>
                </div>
            </section>
        </div>
    );
};

export default SkillAnalysis;
