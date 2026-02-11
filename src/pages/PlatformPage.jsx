import React from 'react';
import { motion } from 'framer-motion';
import {
    FaUsers, FaSchool, FaGraduationCap, FaHospital, FaUniversity,
    FaBrain, FaGlobeAmericas, FaChartLine, FaMoneyBillWave,
    FaMedal, FaStethoscope, FaBriefcase, FaFlask, FaPalette, FaBuilding,
    FaExclamationTriangle, FaChartPie, FaSearchLocation
} from 'react-icons/fa';

const StatCard = ({ icon, title, value, subtext, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group p-5 rounded-[1.5rem] bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden"
    >
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity rounded-bl-full`}></div>
        <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-white text-base mb-3 shadow-md shadow-black/5`}>
            {icon}
        </div>
        <h4 className="text-gray-500 text-[10px] font-semibold uppercase tracking-widest mb-1">{title}</h4>
        <div className="text-xl md:text-2xl font-bold text-gray-900 mb-1">{value}</div>
        {subtext && <p className="text-[10px] text-gray-400 font-medium">{subtext}</p>}
    </motion.div>
);

const ProgressBar = ({ label, percentage, color, icon }) => (
    <div className="mb-5">
        <div className="flex justify-between items-center mb-1.5">
            <div className="flex items-center gap-2">
                <span className={`text-xs ${color.replace('from-', 'text-').split(' ')[0]}`}>{icon}</span>
                <span className="text-xs font-semibold text-gray-600">{label}</span>
            </div>
            <span className="text-xs font-bold text-gray-800">{percentage}%</span>
        </div>
        <div className="h-1.5 w-full bg-gray-50 rounded-full overflow-hidden p-[1px]">
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentage}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`h-full rounded-full bg-gradient-to-r ${color}`}
            />
        </div>
    </div>
);

const PlatformPage = () => {
    return (
        <div className="pt-20 bg-[#FBFCFE] min-h-screen selection:bg-primary-50">
            {/* Header Section - High Visibility with Tricolor Border */}
            <div className="relative max-w-6xl mx-auto px-6 mb-12 text-center py-12 rounded-[3rem] overflow-hidden border-4 border-transparent bg-clip-border relative">
                {/* Indian Tricolor Border Effect */}
                <div className="absolute inset-0 rounded-[3rem] p-[4px] bg-gradient-to-r from-[#FF9933] via-white to-[#138808] -m-[4px]"></div>
                <div className="absolute inset-0 bg-[#FBFCFE] rounded-[2.8rem] m-[1px]"></div>

                <div className="absolute inset-0 opacity-25 pointer-events-none rounded-[2.8rem] overflow-hidden">
                    <img src="/landscape_hero.png" alt="" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#FBFCFE]/40 via-transparent to-[#FBFCFE]/40"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block px-3 py-1 mb-5 rounded-full bg-primary-50 border border-primary-100 text-primary-600 text-[10px] font-bold uppercase tracking-[0.2em] relative z-10"
                >
                    System Intelligence & Analytics
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight relative z-10"
                >
                    The Landscape of <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent italic underline decoration-[#FF9933]/10">Indian Education</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto font-normal leading-relaxed overflow-hidden relative z-10"
                >
                    Mapping the reality of 300 million students. A data-driven exploration of India's academic infrastructure, student demographics, and the challenges that define our future.
                </motion.p>
            </div>

            <div className="max-w-6xl mx-auto px-6 space-y-20 pb-24">

                {/* 1. Population & Infrastructure - Integrated Hero Image */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-[1px] flex-1 bg-gray-100"></div>
                        <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                            <FaUsers className="text-[#FF9933]/70" /> Population & Infrastructure
                        </h2>
                        <div className="h-[1px] flex-1 bg-gray-100"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                        <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
                            <StatCard icon={<FaUsers />} title="Total Students" value="29.2 Crore" subtext="Across all levels in India" color="from-orange-400 to-orange-500" />
                            <StatCard icon={<FaSchool />} title="School Students" value="24.8 Crore" subtext="Class 1 to 12" color="from-blue-400 to-blue-500" />
                            <StatCard icon={<FaGraduationCap />} title="Higher Education" value="4.46 Crore" subtext="UG, PG, PhD Scholars" color="from-emerald-400 to-emerald-500" />
                            <StatCard icon={<FaUniversity />} title="Schools (Total)" value="14.72 Lakh" subtext="Nationwide Infrastructure" color="from-purple-400 to-purple-500" />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="relative h-[340px] rounded-[2rem] overflow-hidden shadow-lg order-1 lg:order-2 group"
                        >
                            <img
                                src="/infra_hero.png"
                                alt="Indian Infrastructure"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                            <div className="absolute bottom-5 left-6 text-white">
                                <div className="text-2xl font-bold italic mb-1">14.72 LAKH</div>
                                <div className="text-[10px] font-semibold tracking-widest uppercase opacity-80">Educational Institutions</div>
                                <div className="mt-3 flex gap-2">
                                    <span className="px-2 py-0.5 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold uppercase">Schools</span>
                                    <span className="px-2 py-0.5 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold uppercase">Colleges</span>
                                    <span className="px-2 py-0.5 bg-white/10 backdrop-blur-md rounded-full text-[8px] font-bold uppercase">Hospitals</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-indigo-900 text-white shadow-md relative overflow-hidden">
                            <div className="text-xl text-white opacity-30 relative z-10"><FaUniversity /></div>
                            <div className="relative z-10">
                                <div className="text-xl font-bold">70,683</div>
                                <div className="text-[9px] text-white/50 uppercase font-bold tracking-widest">Higher Ed Units</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-blue-900 text-white shadow-md relative overflow-hidden">
                            <div className="text-xl text-white opacity-30 relative z-10"><FaBuilding /></div>
                            <div className="relative z-10">
                                <div className="text-xl font-bold">12,000+</div>
                                <div className="text-[9px] text-white/50 uppercase font-bold tracking-widest">Standalone Institutes</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-5 rounded-[1.5rem] bg-emerald-900 text-white shadow-md relative overflow-hidden">
                            <div className="text-xl text-white opacity-30 relative z-10"><FaHospital /></div>
                            <div className="relative z-10">
                                <div className="text-xl font-bold">70,000+</div>
                                <div className="text-[9px] text-white/50 uppercase font-bold tracking-widest">Healthcare Units</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Higher Education Domains - Refined scale */}
                <section className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="inline-block px-3 py-1 mb-4 rounded-lg bg-indigo-50 text-indigo-600 text-[10px] font-bold uppercase tracking-widest">
                            Domain Distribution
                        </div>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight">
                            What are they <span className="text-indigo-500 italic">Studying?</span>
                        </h2>
                        <p className="text-gray-500 mb-6 text-sm leading-relaxed font-normal">
                            Analyzing the academic focus of 4.46 crore higher education students.
                            Arts remains the dominant choice, followed by Science and Commerce.
                        </p>
                        <div className="space-y-3">
                            <ProgressBar label="Arts" percentage={34.2} color="from-purple-500 to-indigo-600" icon={<FaPalette />} />
                            <ProgressBar label="Science" percentage={14.8} color="from-blue-500 to-cyan-500" icon={<FaFlask />} />
                            <ProgressBar label="Commerce" percentage={13.3} color="from-orange-500 to-yellow-500" icon={<FaMoneyBillWave />} />
                            <ProgressBar label="Engineering & Tech" percentage={11.9} color="from-slate-600 to-slate-800" icon={<FaBriefcase />} />
                            <ProgressBar label="Medical & Nursing" percentage={6.2} color="from-red-500 to-rose-600" icon={<FaStethoscope />} />
                            <ProgressBar label="Management" percentage={4.5} color="from-emerald-500 to-teal-600" icon={<FaBuilding />} />
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2 group">
                        <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-lg relative bg-white border-4 border-white">
                            <img
                                src="/pathways_hero.png"
                                alt="Quiet Reflection"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-indigo-900/30 backdrop-blur-[1px] flex items-center justify-center">
                                <div className="text-center text-white">
                                    <FaChartPie className="text-6xl mb-3 mx-auto opacity-30 animate-spin-slow" />
                                    <div className="text-4xl font-bold italic tracking-tighter">4.46 Cr</div>
                                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-80">Total HEI Students</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Graduation & Employment - Refined scale */}
                <section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] filter blur-sm grayscale pointer-events-none">
                        <img src="/graduation_hero.png" alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] text-[15rem] -rotate-12"><FaGraduationCap /></div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-4xl font-bold mb-8 tracking-tight">
                                Graduation & <span className="text-emerald-400 italic">Employment</span>
                            </h2>
                            <div className="space-y-6 mb-10">
                                <div className="flex gap-5 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg shrink-0"><FaGraduationCap /></div>
                                    <div>
                                        <div className="text-2xl font-bold">95L - 1 Cr</div>
                                        <div className="text-xs text-white/50 font-semibold uppercase tracking-wider">New graduates annually</div>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 text-lg shrink-0"><FaChartLine /></div>
                                    <div>
                                        <div className="text-2xl font-bold">51.3%</div>
                                        <div className="text-xs text-white/50 font-semibold uppercase tracking-wider">Immediate employability</div>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 text-lg shrink-0"><FaExclamationTriangle /></div>
                                    <div>
                                        <div className="text-2xl font-bold">13.4%</div>
                                        <div className="text-xs text-white/50 font-semibold uppercase tracking-wider">Unemployment Gap</div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 rounded-[1.5rem] bg-white/5 border border-white/10 backdrop-blur-md">
                                <p className="text-sm text-white/80 italic leading-relaxed">
                                    "Approximately 2-3 crore students are estimated to be in the 'coaching culture' for govt exams or technical mastery."
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl">
                                <img
                                    src="/graduation_hero.png"
                                    alt="Graduation"
                                    className="w-full h-[380px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent"></div>
                                <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-3 text-center">
                                    <div className="bg-white/10 backdrop-blur-xl p-5 rounded-[1.5rem] border border-white/20">
                                        <div className="text-xl font-bold text-emerald-400">2-3 Cr</div>
                                        <div className="text-[7px] font-bold uppercase tracking-widest text-white/60">Competitive Prep</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-xl p-5 rounded-[1.5rem] border border-white/20">
                                        <div className="text-xl font-bold text-red-400">~40%</div>
                                        <div className="text-[7px] font-bold uppercase tracking-widest text-white/60">Youth Reach</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Mental Health - Refined scale */}
                <section className="text-center max-w-5xl mx-auto py-12 relative">
                    <div className="absolute inset-0 bg-red-500/5 blur-[100px] rounded-full"></div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <div className="w-14 h-14 rounded-[1.2rem] bg-red-100 flex items-center justify-center text-red-600 text-xl mx-auto mb-6 shadow-lg">
                            <FaBrain />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">
                            A Heavy <span className="text-red-500 underline decoration-red-200 decoration-[6px] underline-offset-[10px]">Academic Toll</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                            <div className="relative group overflow-hidden rounded-[2.5rem] h-[380px] border-4 border-white shadow-xl">
                                <img
                                    src="/mental_health_hero.png"
                                    alt="Mental Health Silent Crisis"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/30 to-transparent p-8 flex flex-col justify-end">
                                    <div className="text-4xl font-bold text-white mb-1 italic">13,000+</div>
                                    <div className="text-base font-bold text-red-300 mb-3 uppercase tracking-widest">Annual Student Suicides</div>
                                    <p className="text-white/80 text-sm leading-relaxed font-light">
                                        The invisible cost of competition. Driven by systemic failure, family pressure, and the coaching ecosystem.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] border-4 border-gray-50 shadow-lg flex flex-col justify-center">
                                <div className="text-4xl font-bold text-orange-500 mb-2 italic">1 in 7</div>
                                <div className="text-xl font-bold text-gray-800 mb-5 uppercase tracking-tight">Silent Crisis: Depression</div>
                                <p className="text-gray-500 text-base leading-relaxed mb-6 font-light">
                                    Young Indians (15–24 years) report feelings of being significantly uninterested or disinterested in daily activities.
                                </p>
                                <img
                                    src="https://images.unsplash.com/photo-1518101400755-19985d1fb3ca?q=80&w=2070&auto=format&fit=crop"
                                    alt="Quiet Reflection"
                                    className="w-full h-40 object-cover rounded-[1.2rem] grayscale contrast-125 opacity-40"
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* 5. Indian Students Abroad - Refined scale */}
                <section>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-5">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tight flex items-center gap-3">
                                <FaGlobeAmericas className="text-blue-600/80" /> Beyond Borders
                            </h2>
                            <p className="text-lg text-gray-400 font-light">13.3 Lakh Indian souls seeking excellence across every meridian.</p>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold text-blue-700 italic">13.3 L</div>
                            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">Global Mobility</div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-5">
                            {[
                                { name: "Canada", count: "4,27,085", color: "from-red-500 to-red-700" },
                                { name: "USA", count: "3,31,602", color: "from-blue-500 to-blue-700" },
                                { name: "UAE", count: "2,53,832", color: "from-emerald-500 to-emerald-700" },
                                { name: "UK", count: "1,73,190", color: "from-indigo-500 to-indigo-700" },
                                { name: "Australia", count: "1,38,579", color: "from-blue-400 to-indigo-600" },
                                { name: "Germany", count: "49,483", color: "from-yellow-400 to-yellow-600" }
                            ].map((country, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -6, scale: 1.02 }}
                                    className="p-5 rounded-[1.5rem] bg-white border border-gray-100 shadow-md flex flex-col items-center text-center group"
                                >
                                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${country.color} mb-3 flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                                        {country.name.slice(0, 2).toUpperCase()}
                                    </div>
                                    <div className="text-sm font-bold text-gray-800 mb-1">{country.name}</div>
                                    <div className="text-blue-600 font-bold text-lg group-hover:scale-105 transition-transform">{country.count}</div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="h-full min-h-[300px] rounded-[2rem] overflow-hidden shadow-lg relative border-4 border-white">
                            <img
                                src="/abroad_hero.png"
                                alt="Students Abroad"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-center">
                                <div className="p-6">
                                    <FaSearchLocation className="text-5xl mb-3 mx-auto text-gray-300" />
                                    <div className="text-xl font-bold text-gray-400 uppercase tracking-tighter">Global Excellence</div>
                                    <p className="text-[9px] opacity-60 text-gray-400 uppercase tracking-widest mt-1">Searching for a future</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Socio-Economic Status - Refined scale */}
                <section className="bg-black rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-15 filter grayscale blur-sm">
                        <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=2076&auto=format&fit=crop" alt="Economic" className="w-full h-full object-cover" />
                    </div>
                    <div className="relative z-10 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold mb-12 tracking-tighter">
                            The Economic <span className="text-emerald-500 italic">Engine</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="group p-7 rounded-[1.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center">
                                <FaMedal className="text-3xl text-yellow-500 mx-auto mb-5" />
                                <div className="text-3xl font-bold mb-1">15%</div>
                                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Elite Class</div>
                                <p className="text-gray-400 text-xs leading-relaxed font-light">International mobility & premium private units.</p>
                            </div>
                            <div className="group p-7 rounded-[1.5rem] bg-emerald-500 scale-105 shadow-xl shadow-emerald-500/20 text-slate-900 text-center">
                                <FaUsers className="text-3xl text-slate-900/40 mx-auto mb-5" />
                                <div className="text-3xl font-bold mb-1">31-50%</div>
                                <div className="text-xs font-bold uppercase tracking-widest mb-3">Middle Class</div>
                                <p className="text-slate-900/80 text-xs leading-relaxed font-bold italic">The massive driver of academic spending & career dreams.</p>
                            </div>
                            <div className="group p-7 rounded-[1.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center">
                                <FaMoneyBillWave className="text-3xl text-primary-500 mx-auto mb-5" />
                                <div className="text-3xl font-bold mb-1">35-40%</div>
                                <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Lower Income</div>
                                <p className="text-gray-400 text-xs leading-relaxed font-light">Highest dropout sensitivity & scholarship reliance.</p>
                            </div>
                        </div>

                        <div className="mt-14 p-7 rounded-[1.5rem] bg-red-600/20 border border-red-500/30 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                            <div className="text-red-500 font-bold text-2xl italic bg-white px-7 py-2 rounded-full shadow-lg shrink-0">25%</div>
                            <p className="text-base text-red-100 font-light italic leading-relaxed">
                                "Nearly 25% of students cite financial constraints as the primary barrier preventing progression after secondary school."
                            </p>
                        </div>
                    </div>
                </section>

                {/* 7. Top Indian Universities - Refined scale */}
                <section>
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-5 tracking-tighter">
                            Pillars of <span className="bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent italic">Excellence</span>
                        </h2>
                        <p className="text-base text-gray-400 font-normal tracking-tight">The Pinnacle of Indian Academia — NIRF Data Intelligence.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
                        {[
                            { title: "Overall Best", bg: "bg-indigo-950", items: ["IIT Madras", "IISc Bangalore", "IIT Bombay"], img: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop" },
                            { title: "Medical Leaders", bg: "bg-rose-950", items: ["AIIMS New Delhi", "PGIMER Chandigarh"], img: "https://images.unsplash.com/photo-1538108149393-fdfd81895907?q=80&w=2028&auto=format&fit=crop" },
                            { title: "Management", bg: "bg-emerald-950", items: ["IIM Ahmedabad", "IIM Bangalore"], img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" },
                            { title: "General Univ", bg: "bg-blue-950", items: ["JNU, DU", "BHU Varanasi"], img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop" }
                        ].map((cat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                className={`p-7 rounded-[1.5rem] ${cat.bg} text-white shadow-lg relative overflow-hidden group`}
                            >
                                <div className="absolute inset-0 opacity-15 transition-opacity group-hover:opacity-25">
                                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="relative z-10">
                                    <div className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 mb-6">{cat.title}</div>
                                    <div className="space-y-5">
                                        {cat.items.map((item, idx) => (
                                            <div key={idx} className="flex gap-2 items-center">
                                                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[8px] font-bold border border-white/20">{idx + 1}</span>
                                                <span className="text-xs font-bold tracking-tight">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center text-[10px] text-gray-400 max-w-2xl mx-auto leading-relaxed p-6 rounded-[1.5rem] bg-gray-50 border-2 border-white shadow-md">
                        <strong className="text-gray-900 block mb-1 text-sm font-bold italic underline decoration-[#FF9933] decoration-2">DATA VERACITY & CITATIONS</strong>
                        Mapping the reality of the Indian Education System using UDISE+, AISHE, and MEA verified datasets. While figures represent state snapshots, the dynamic nature of academia ensures constant transformation.
                    </div>
                </section>

            </div>
        </div>
    );
};

export default PlatformPage;
