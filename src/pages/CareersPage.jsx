import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaSearch, FaStar, FaChartLine } from 'react-icons/fa';

const categories = ["All", "Technology", "Healthcare", "Creative Arts", "Business", "Space Tech"];

const careers = [
    {
        title: "AI Ethics Specialist",
        category: "Technology",
        salary: "$120k - $180k",
        growth: "High",
        tags: ["Machine Learning", "Philosophy", "Governance"],
        image: "from-blue-500 to-indigo-600"
    },
    {
        title: "Space Tourism Pilot",
        category: "Space Tech",
        salary: "$200k+",
        growth: "Explosive",
        tags: ["Astronautics", "Crisis Management", "Physics"],
        image: "from-black to-slate-900"
    },
    {
        title: "Tele-Health Surgeon",
        category: "Healthcare",
        salary: "$350k - $500k",
        growth: "Stable",
        tags: ["Robotics", "Medicine", "Remote Ops"],
        image: "from-emerald-500 to-teal-600"
    },
    {
        title: "Sustainable Fashion Designer",
        category: "Creative Arts",
        salary: "$80k - $140k",
        growth: "Steady",
        tags: ["Design", "Bio-materials", "Eco-Science"],
        image: "from-rose-500 to-orange-600"
    },
    {
        title: "Fintech Risk Analyst",
        category: "Business",
        salary: "$110k - $160k",
        growth: "High",
        tags: ["Finance", "Blockchain", "Cybersecurity"],
        image: "from-amber-500 to-yellow-600"
    },
    {
        title: "Quantum Computing Engineer",
        category: "Technology",
        salary: "$150k - $250k",
        growth: "High",
        tags: ["Quantum Physics", "Algorithms", "Nano-tech"],
        image: "from-indigo-600 to-violet-700"
    }
];

const CareersPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCareers = selectedCategory === "All"
        ? careers
        : careers.filter(c => c.category === selectedCategory);

    return (
        <div className="pt-24 bg-[#E1F0FF] min-h-screen">
            {/* Header section with search-like aesthetic */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-8"
                        >
                            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black tracking-tight flex flex-col italic uppercase leading-tight">
                                <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">
                                    Career Explorer
                                </span>
                                <span className="text-gray-900 mt-2 block not-italic font-light text-xl md:text-3xl tracking-[0.2em] uppercase">Find Your True North</span>
                            </h1>
                            <div className="w-32 h-1.5 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] rounded-full shadow-sm border border-gray-100 mt-6"></div>
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${selectedCategory === cat ? 'bg-primary-900 text-white shadow-xl shadow-primary-900/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCareers.map((c) => (
                            <motion.div
                                key={c.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] transition-all duration-500"
                            >
                                <div className={`h-48 bg-gradient-to-br ${c.image} p-8 flex flex-col justify-end text-white relative`}>
                                    <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                                        <FaStar className="text-yellow-400" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 mb-2">{c.category}</span>
                                    <h3 className="text-2xl font-bold leading-tight">{c.title}</h3>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Average Salary</span>
                                            <span className="text-slate-900 font-black">{c.salary}</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Growth</span>
                                            <span className={`font-bold ${c.growth === 'Explosive' ? 'text-rose-500' : 'text-emerald-500'}`}>{c.growth}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {c.tags.map((t, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-bold border border-slate-100 uppercase tracking-wider">{t}</span>
                                        ))}
                                    </div>
                                    <button className="w-full py-4 bg-slate-950 text-white rounded-2xl font-bold flex items-center justify-center gap-3 group/btn hover:bg-primary-900 transition-colors">
                                        Explore Pathway <FaChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="bg-slate-50 py-24 mt-32">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-10"></div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Don't see your dream career?</h2>
                    <p className="text-xl text-slate-600 mb-12 font-light">Our AI can predict emerging roles tailored specifically to your unique cognitive profile.</p>
                    <button className="px-12 py-5 bg-primary-600 text-white rounded-2xl font-black shadow-2xl shadow-primary-600/30 hover:scale-105 transition-transform">
                        Run Personality Scan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
