import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalculator, FaMoneyBillWave, FaPercentage, FaPiggyBank, FaChartBar, FaUniversity, FaChevronRight, FaHandHoldingUsd, FaFileInvoiceDollar } from 'react-icons/fa';
import StudentSubNavbar from '../../components/Navbar/StudentSubNavbar';

const FinancialPlanning = () => {
    const [tuitionCost, setTuitionCost] = useState(0);
    const [expectedSalary, setExpectedSalary] = useState(0);

    const calculateROI = () => {
        if (!tuitionCost || !expectedSalary) return 0;
        // Simplified view: How many months to earn back the cost
        const recoveryMonths = (tuitionCost / (expectedSalary / 12)).toFixed(0);
        return recoveryMonths;
    };

    return (
        <div className="bg-white min-h-screen pt-16">
            <StudentSubNavbar />

            {/* Simple Hero Section */}
            <section className="py-24 px-6 bg-white overflow-hidden relative">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[#138808] font-black tracking-[0.3em] uppercase text-[10px] mb-6 bg-[#138808]/5 inline-block px-4 py-1.5 rounded-lg"
                        >
                            Smart Money Planning
                        </motion.div>
                        <h1 className="text-4xl md:text-7xl font-black mb-10 leading-tight italic uppercase">College <br /> <span className="text-[#FF9933]">Money Guide</span></h1>
                        <p className="text-gray-500 text-lg mb-12 max-w-xl font-medium leading-relaxed">
                            Don't let high costs stop your dreams. We help you calculate true college costs, find low-interest loans, and get free money through grants.
                        </p>
                        <div className="flex flex-wrap gap-4 font-black text-[10px] uppercase tracking-widest">
                            <button className="px-10 py-5 bg-[#138808] text-white rounded-2xl hover:bg-[#FF9933] transition-all shadow-xl">Find Free Scholarships</button>
                            <button className="px-10 py-5 bg-gray-50 text-gray-500 border border-gray-100 rounded-2xl hover:text-gray-900 transition-all">Common Loan Rates</button>
                        </div>
                    </div>

                    <div className="flex-1 w-full bg-gray-900 rounded-[3.5rem] p-12 text-white relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#138808]/10 to-transparent"></div>
                        <h3 className="text-xl font-bold mb-10 flex items-center gap-3 italic text-[#FF9933]">
                            <FaPiggyBank /> Savings Tracker
                        </h3>

                        <div className="space-y-10">
                            <div>
                                <div className="flex justify-between mb-4 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                                    <span>Goal for College Fund</span>
                                    <span className="text-[#FF9933]">₹5.5 L / ₹10 L</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '55%' }}
                                        className="h-full bg-[#138808] rounded-full"
                                    ></motion.div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:bg-white/10 transition-all">
                                    <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-2">Loan Estimate</p>
                                    <p className="text-2xl font-black">7.5% <span className="text-[10px] font-medium text-gray-500">Interest</span></p>
                                </div>
                                <div className="p-6 bg-white/5 rounded-3xl border border-white/5 group-hover:bg-white/10 transition-all">
                                    <p className="text-[9px] text-gray-500 font-black uppercase tracking-widest mb-2">Money Saved</p>
                                    <p className="text-2xl font-black text-[#138808]">₹4.2 L</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Practical Guide / How this helps */}
            <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-gray-900 mb-4 uppercase italic">How This Helps Your Family</h2>
                        <p className="text-gray-500 font-medium">Clear information to help parents and students make the best choices.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "No Hidden Costs", desc: "We show you rent, food, and book costs, not just college fees.", icon: <FaFileInvoiceDollar /> },
                            { title: "Best Loan Rates", desc: "We compare top banks to find the lowest interest for you.", icon: <FaHandHoldingUsd /> },
                            { title: "ROI Check", desc: "See if the salary after study is worth the money you spend.", icon: <FaChartBar /> }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center">
                                <div className="w-14 h-14 bg-gray-50 text-[#138808] rounded-3xl flex items-center justify-center text-2xl mx-auto mb-8">{item.icon}</div>
                                <h4 className="text-lg font-bold text-gray-900 mb-4 uppercase">{item.title}</h4>
                                <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smart ROI Calculator Simplified */}
            <section id="earning-calculator" className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-900 rounded-[4rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-white/5">
                        <div className="flex-1 p-12 md:p-20 text-white">
                            <h3 className="text-2xl font-black mb-10 italic uppercase text-[#FF9933]">Earning Potential</h3>
                            <p className="text-gray-500 text-sm font-medium mb-12">Enter the college cost and your expected salary to see how fast you can earn your money back.</p>

                            <div className="space-y-10">
                                <div className="group">
                                    <label className="block text-[8px] font-black uppercase text-gray-500 tracking-[0.2em] mb-4 group-hover:text-white transition-colors">Total College Fees (₹)</label>
                                    <input
                                        type="number"
                                        onChange={(e) => setTuitionCost(Number(e.target.value))}
                                        placeholder="Enter total money"
                                        className="w-full text-3xl font-black bg-transparent border-b border-white/10 focus:border-[#138808] focus:outline-none pb-4 transition-all"
                                    />
                                </div>
                                <div className="group">
                                    <label className="block text-[8px] font-black uppercase text-gray-500 tracking-[0.2em] mb-4 group-hover:text-white transition-colors">Expected Annual Salary (₹)</label>
                                    <input
                                        type="number"
                                        onChange={(e) => setExpectedSalary(Number(e.target.value))}
                                        placeholder="Expected earning"
                                        className="w-full text-3xl font-black bg-transparent border-b border-white/10 focus:border-[#FF9933] focus:outline-none pb-4 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-[380px] bg-[#138808] p-12 text-white flex flex-col items-center justify-center text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-white/5 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                            <div className="w-44 h-44 rounded-full border-4 border-white/20 flex flex-col items-center justify-center gap-1 mb-10 shadow-2xl relative z-10">
                                <span className="text-4xl font-black">{calculateROI()}</span>
                                <span className="text-[10px] font-black uppercase tracking-widest text-white/70">Months</span>
                            </div>
                            <h4 className="text-xl font-black uppercase tracking-widest mb-4 italic">Recovery Time</h4>
                            <p className="text-white/80 text-[10px] font-medium leading-relaxed px-6">This is how long it will take to earn back the money you spent on college.</p>

                            <div className="mt-12 text-[8px] font-black uppercase tracking-widest text-black/40 bg-white px-4 py-2 rounded-full">Calculated for 100% ROI</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Section for Loans */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-black text-gray-900 mb-10 uppercase italic leading-tight">Get Trusted <br /> Funding Help</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Bank Partnerships", desc: "Lower interest rates for our students.", icon: <FaUniversity /> },
                                { title: "Grant Portals", desc: "Easy links to apply for government money.", icon: <FaHandHoldingUsd /> }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 group hover:border-[#FF9933] transition-all">
                                    <div className="w-12 h-12 bg-gray-50 text-[#138808] rounded-xl flex items-center justify-center text-xl group-hover:bg-[#138808] group-hover:text-white transition-all">{item.icon}</div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-sm mb-1 uppercase tracking-wide">{item.title}</h4>
                                        <p className="text-xs text-gray-400 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-[#138808] p-12 rounded-[4rem] text-white flex flex-col items-center text-center border-8 border-white shadow-2xl">
                        <FaCalculator className="text-4xl mb-10 opacity-30" />
                        <h3 className="text-3xl font-black mb-8 uppercase italic leading-tight">Apply for a <br /> Money Review</h3>
                        <p className="text-white/80 mb-12 font-medium">We look at your family's savings and goals to provide a personalized financial roadmap.</p>
                        <button className="w-full py-5 bg-white text-[#138808] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-all shadow-xl">Start Review Now</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FinancialPlanning;
