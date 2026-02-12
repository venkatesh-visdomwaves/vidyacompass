import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaChartArea, FaPiggyBank, FaUniversity, FaFileInvoiceDollar, FaHandHoldingUsd, FaArrowRight, FaSearchDollar, FaInfoCircle } from 'react-icons/fa';
import ParentSubNavbar from '../../components/Navbar/ParentSubNavbar';

const FinancialSupport = () => {
    const [tuition, setTuition] = useState(3500000);
    const [inflation, setInflation] = useState(6);

    const calculateFutureCost = () => {
        const cost = tuition * Math.pow((1 + (inflation / 100)), 4);
        return cost.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });
    };

    return (
        <div className="bg-white min-h-screen pt-16 font-sans">
            <ParentSubNavbar />

            {/* Simple Hero Section */}
            <section className="py-24 px-6 bg-[#0B1120] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#138808]/10 rounded-full blur-[120px] -mr-48 -mt-24"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 mt-8 relative z-10">
                    <div className="flex-1">
                        <div className="px-3 py-1 bg-[#138808]/20 border border-[#138808]/30 rounded-lg text-[10px] font-black uppercase tracking-widest text-[#138808] mb-8 inline-block">
                            Investment Clarity
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black mb-10 leading-tight italic uppercase">Education <br /> <span className="text-[#FF9933]">Finance Guide</span></h1>
                        <p className="text-lg text-slate-400 max-w-xl font-medium leading-relaxed">
                            Most career decisions break because of money. We provide the exact math so your family can plan without fear.
                        </p>
                    </div>
                    <div className="flex-1 w-full bg-white/5 border border-white/10 rounded-[3.5rem] p-12 backdrop-blur-xl group">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-[#138808] rounded-2xl flex items-center justify-center text-xl text-white shadow-lg"><FaPiggyBank /></div>
                            <h3 className="text-xl font-bold uppercase italic">Loan Impact Tracker</h3>
                        </div>
                        <div className="space-y-10">
                            <div>
                                <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 mb-4 tracking-widest">
                                    <span>Current Floating Rate (2026)</span>
                                    <span className="text-[#138808]">9.25% Avg</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                    <div className="h-full bg-[#138808] w-[45%]"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:bg-white/10 transition-all">
                                    <p className="text-[9px] text-slate-500 font-black uppercase mb-1">Tax Saving</p>
                                    <p className="text-xl font-black">Section 80E</p>
                                    <p className="text-[8px] text-[#138808] font-bold mt-1 uppercase">100% Deduction</p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:bg-white/10 transition-all">
                                    <p className="text-[9px] text-slate-500 font-black uppercase mb-1">EMI Start</p>
                                    <p className="text-xl font-black">Day 1 of Job</p>
                                    <p className="text-[8px] text-slate-500 font-bold mt-1 uppercase">Moratorium Incl.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 1: Budget Planning & Cost Forecast */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1 w-full p-12 bg-slate-50 border border-slate-100 rounded-[3.5rem] shadow-sm">
                        <div className="flex items-center gap-3 mb-10">
                            <FaSearchDollar className="text-[#1e3a8a] text-xl" />
                            <h4 className="text-xl font-black text-slate-900 uppercase italic">Future Cost Forecaster</h4>
                        </div>
                        <div className="space-y-10">
                            <div>
                                <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-4 block">Current Yearly Cost (₹)</label>
                                <input
                                    type="number"
                                    value={tuition}
                                    onChange={(e) => setTuition(Number(e.target.value))}
                                    className="w-full text-3xl font-black bg-transparent border-b border-slate-200 focus:border-[#1e3a8a] outline-none pb-4 text-slate-900"
                                    placeholder="35,00,000"
                                />
                            </div>
                            <div>
                                <label className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-4 block">Estimated Yearly Inflation (%)</label>
                                <input
                                    type="number"
                                    value={inflation}
                                    onChange={(e) => setInflation(Number(e.target.value))}
                                    className="w-full text-3xl font-black bg-transparent border-b border-slate-200 focus:border-[#FF9933] outline-none pb-4 text-slate-900"
                                    placeholder="6"
                                />
                            </div>
                            <div className="pt-8 flex flex-col items-center gap-4 bg-white p-10 rounded-3xl border border-slate-100">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Cost After 4 Years</p>
                                <h2 className="text-4xl font-black text-[#1e3a8a]">{calculateFutureCost()}</h2>
                                <p className="text-[9px] text-slate-400 font-bold uppercase italic">*Includes tuition, rent, and local inflation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic leading-tight underline decoration-[#138808] decoration-4 underline-offset-8">Financial <br /> Forecasting</h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
                            We use historical data and current 2026 inflation rates (avg 5-7%) to show you the true cost of university in USA, Australia, and India by the time your child graduates.
                        </p>
                        <div className="space-y-4">
                            {[
                                { country: 'USA (Top Tier)', cost: '₹45 L / yr', trend: 'High Growth' },
                                { country: 'Germany (Public)', cost: '₹12 L / yr', trend: 'Stable Cost' },
                                { country: 'India (Private Tech)', cost: '₹6 L / yr', trend: 'Moderate' }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-[#FF9933] transition-all">
                                    <span className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{item.country}</span>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-[#1e3a8a]">{item.cost}</p>
                                        <p className="text-[9px] text-[#138808] font-bold uppercase">{item.trend}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Scholarship & Loan Insights */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase italic">Scholarship Strategy 2026</h2>
                        <p className="text-slate-500 font-medium">Data-backed strategies to reduce your financial burden.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Tax Benefits (80E)', desc: 'Claim 100% deduction on loan interest for up to 8 years. Essential for Indian parents.', icon: <FaFileInvoiceDollar /> },
                            { title: 'Success Probability', desc: 'An 8.5+ GPA increases your chances of a full scholarship by 40%.', icon: <FaChartArea /> },
                            { title: 'Moratorium Period', desc: 'Find loans where you only pay simple interest during study years.', icon: <FaUniversity /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center group">
                                <div className="w-14 h-14 bg-slate-50 text-[#138808] rounded-2xl flex items-center justify-center text-2xl mx-auto mb-8 group-hover:bg-[#138808] group-hover:text-white transition-all">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-tight">{item.title}</h4>
                                <p className="text-xs text-slate-400 font-medium leading-relaxed px-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Professional Support */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto bg-[#1e3a8a] rounded-[4rem] p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                    <div className="relative z-10">
                        <FaHandHoldingUsd className="text-6xl text-white/20 mx-auto mb-10" />
                        <h3 className="text-3xl md:text-5xl font-black mb-10 uppercase italic leading-tight">Need a Personalized <br /> <span className="text-[#FF9933]">Loan Strategy?</span></h3>
                        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto font-medium leading-relaxed">Our finance experts help you compare rates from Reliance, Tata, and SBI to find the best moratorium periods and tax benefits.</p>
                        <button className="px-12 py-5 bg-[#138808] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all shadow-2xl flex items-center gap-3 mx-auto">
                            Talk to Finance Expert <FaArrowRight size={10} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinancialSupport;
