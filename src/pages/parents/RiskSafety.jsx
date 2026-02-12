import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaGlobeAmericas, FaPassport, FaUserCheck, FaMapMarkerAlt, FaClinicMedical, FaBalanceScale, FaUtensils, FaCloudSun, FaExclamationCircle } from 'react-icons/fa';
import ParentSubNavbar from '../../components/Navbar/ParentSubNavbar';

const RiskSafety = () => {
    return (
        <div className="bg-white min-h-screen pt-16 font-sans">
            <ParentSubNavbar />

            {/* Simple Hero Section */}
            <section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FF9933 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-8 relative z-10">
                    <div className="flex-1">
                        <div className="px-3 py-1 bg-[#FF9933]/20 border border-[#FF9933]/30 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#FF9933] mb-8 inline-block">
                            Security & Wellness
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black mb-10 leading-tight italic uppercase">Safety <br /> <span className="text-[#138808]">Insights</span></h1>
                        <p className="text-lg text-slate-400 max-w-xl font-medium leading-relaxed">
                            Your child's safety is non-negotiable. We provide real-time updates on global security, health, and visa policy changes.
                        </p>
                    </div>
                    <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-[3.5rem] p-12 backdrop-blur-xl">
                        <h3 className="text-xl font-bold uppercase italic mb-10 text-[#FF9933]">2026 Safe Destinations</h3>
                        <div className="space-y-8">
                            {[
                                { country: 'Iceland', score: 98, rank: '1st' },
                                { country: 'Ireland', score: 94, rank: '2nd' },
                                { country: 'New Zealand', score: 91, rank: '3rd' },
                                { country: 'Singapore', score: 89, rank: '6th' }
                            ].map((item, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 mb-3 tracking-widest">
                                        <span>{item.country}</span>
                                        <span>Rank: <span className="text-white">{item.rank}</span></span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#138808]" style={{ width: `${item.score}%` }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Country Safety Index */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic leading-tight underline decoration-[#FF9933] decoration-4 underline-offset-8">Country <br /> Safety Index</h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                            We use the 2026 Global Peace Index (GPI) and local "Student Welfare" laws to rate destination safety. Some countries like New Zealand and Ireland have specific laws to protect international students.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: 'Crime Rate', icon: <FaShieldAlt />, rating: 'Very Low' },
                                { title: 'Health Care', icon: <FaClinicMedical />, rating: 'Top Tier' },
                                { title: 'Political Stability', icon: <FaBalanceScale />, rating: 'Excellent' },
                                { title: 'Indian Community', icon: <FaUserCheck />, rating: 'Growing' }
                            ].map((stat, i) => (
                                <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-3xl border border-slate-100 items-center">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#1e3a8a] shadow-sm">{stat.icon}</div>
                                    <div>
                                        <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest">{stat.title}</p>
                                        <p className="text-sm font-black text-slate-900">{stat.rating}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full p-10 bg-slate-50 rounded-[3.5rem] border border-slate-100 flex flex-col gap-6">
                        <div className="flex items-center gap-3 mb-4">
                            <FaExclamationCircle className="text-[#FF9933] text-xl" />
                            <h4 className="text-xl font-black text-slate-900 uppercase italic">Safety Alerts</h4>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border-l-[6px] border-[#FF9933] shadow-sm">
                            <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 text-slate-900">Emergency Support</h5>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">Direct SOS link to the nearest Indian Embassy and local campus security integrated in student profile.</p>
                        </div>
                        <div className="p-6 bg-white rounded-3xl border-l-[6px] border-[#138808] shadow-sm">
                            <h5 className="text-[10px] font-black uppercase tracking-widest mb-2 text-slate-900">Welfare Compliance</h5>
                            <p className="text-xs text-slate-500 font-medium leading-relaxed">Automated alerts if attendance drops below 80%, ensuring visa rules are always met.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Cultural Adaptation Guide */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase italic">Lifestyle & Adaptation</h2>
                        <p className="text-slate-500 font-medium">Helping students settle into their new homes comfortably.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Climate Prep', desc: 'Packing guides for winter in Canada or humidity in Singapore.', icon: <FaCloudSun /> },
                            { title: 'Food & Lifestyle', desc: 'Access to local Indian grocery stores and student meal plans.', icon: <FaUtensils /> },
                            { title: 'Cultural Norms', desc: 'Understand local work etiquette and social habits before arrival.', icon: <FaGlobeAmericas /> }
                        ].map((card, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                                <div className="w-14 h-14 bg-slate-50 text-[#1e3a8a] rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all">
                                    {card.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase">{card.title}</h4>
                                <p className="text-xs text-slate-400 font-medium leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Visa & Policy Updates */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 w-full bg-slate-900 p-12 rounded-[4rem] text-white overflow-hidden relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF9933]/10 to-transparent"></div>
                        <div className="relative z-10">
                            <FaPassport className="text-5xl text-[#FF9933] mb-10 group-hover:rotate-12 transition-transform" />
                            <h3 className="text-3xl font-black mb-10 uppercase italic leading-tight">Latest Visa <br /> Policy Updates</h3>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                    <h5 className="text-[10px] font-black text-[#FF9933] uppercase mb-1">Canada (Feb 2026)</h5>
                                    <p className="text-[11px] text-slate-400 font-medium">Cap of 408,000 permits; preference now given to Master’s and PhD students.</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                    <h5 className="text-[10px] font-black text-[#138808] uppercase mb-1">Australia</h5>
                                    <p className="text-[11px] text-slate-400 font-medium">Visa fees have risen to AUD 2,000 (~₹1.19 Lakhs).</p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                                    <h5 className="text-[10px] font-black text-[#1e3a8a] uppercase mb-1">USA</h5>
                                    <p className="text-[11px] text-slate-400 font-medium">Social media history for the last 5 years is now mandatory for F-1 interviews.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic leading-tight">Navigate the <br /> Changing Rules</h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                            The world changes fast. Our policy tracker ensures you are never surprised by new rules, fee hikes, or work right changes in the UK or Canada.
                        </p>
                        <div className="flex flex-col gap-4">
                            {[
                                'Work rights after graduation (PR Pathways)',
                                'Updated financial funding requirements',
                                'Spouse work permit updates for 2026',
                                'Regional visa sponsorship news'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 text-xs font-black uppercase text-slate-400 tracking-widest">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF9933]"></div>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <button className="mt-12 px-10 py-5 bg-[#1e3a8a] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-xl">Download Policy PDF</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RiskSafety;
