import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FaChevronRight, FaSearch, FaStar, FaChartLine,
    FaFileAlt, FaPaperPlane, FaBrain, FaBullseye,
    FaRocket, FaUserTie, FaCheckCircle, FaBriefcase,
    FaHistory, FaChartBar, FaArrowRight, FaShieldAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CareerSubNavbar from '../components/Navbar/CareerSubNavbar';

const careerPillars = [
    {
        icon: <FaFileAlt className="text-[#138808]" />,
        title: "AI Resume Builder",
        desc: "Convert your Student Profile into a professional, recruiter-ready resume in 60 seconds.",
        link: "/careers/resume-builder",
        benefit: "Recruiter-approved templates and AI keyword optimization."
    },
    {
        icon: <FaPaperPlane className="text-[#FF9933]" />,
        title: "Smart Application",
        desc: "One-click applications to global internships and entry-level roles verified by Vidya Compass.",
        link: "/careers/applications",
        benefit: "Track your status from 'Applied' to 'Salary Credited'."
    },
    {
        icon: <FaBrain className="text-[#1e3a8a]" />,
        title: "Skill Gap Analysis",
        desc: "AI identifies exactly what skills you're missing for your dream job and builds a roadmap.",
        link: "/careers/skill-analysis",
        benefit: "Know what to learn before you apply."
    },
    {
        icon: <FaChartBar className="text-[#138808]" />,
        title: "Market Intelligence",
        desc: "Real-time data on salaries, growth trends, and job stability for the next 10 years.",
        link: "/careers/market-intelligence",
        benefit: "Choose a career that won't be replaced by AI."
    }
];

const categories = ["All", "Technology", "Healthcare", "Creative Arts", "Business", "Space Tech", "Sustainability"];

const careers = [
    {
        title: "AI Ethics Specialist",
        category: "Technology",
        salary: "$120k - $180k",
        growth: "High",
        tags: ["Machine Learning", "Philosophy", "Governance"],
        image: "from-blue-500 to-indigo-600",
        matchScore: 98
    },
    {
        title: "Space Tourism Pilot",
        category: "Space Tech",
        salary: "$200k+",
        growth: "Explosive",
        tags: ["Astronautics", "Crisis Management", "Physics"],
        image: "from-black to-slate-900",
        matchScore: 85
    },
    {
        title: "Tele-Health Surgeon",
        category: "Healthcare",
        salary: "$350k - $500k",
        growth: "Stable",
        tags: ["Robotics", "Medicine", "Remote Ops"],
        image: "from-emerald-500 to-teal-600",
        matchScore: 92
    },
    {
        title: "Sustainable Designer",
        category: "Sustainability",
        salary: "$80k - $140k",
        growth: "Steady",
        tags: ["Design", "Bio-materials", "Eco-Science"],
        image: "from-rose-500 to-orange-600",
        matchScore: 78
    },
    {
        title: "Fintech Risk Analyst",
        category: "Business",
        salary: "$110k - $160k",
        growth: "High",
        tags: ["Finance", "Blockchain", "Cybersecurity"],
        image: "from-amber-500 to-yellow-600",
        matchScore: 95
    },
    {
        title: "Quantum Engineer",
        category: "Technology",
        salary: "$150k - $250k",
        growth: "High",
        tags: ["Quantum Physics", "Algorithms", "Nano-tech"],
        image: "from-indigo-600 to-violet-700",
        matchScore: 88
    }
];

const CareersPage = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCareers = careers.filter(c => {
        const matchesCategory = selectedCategory === "All" || c.category === selectedCategory;
        const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen pt-16">
            <CareerSubNavbar />

            {/* Premium Hero Section */}
            <section className="relative py-24 px-6 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1e3a8a]/5 rounded-full blur-[120px] -mr-48 -mt-24"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#138808]/5 rounded-full blur-[100px] -ml-24 -mb-24"></div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1 text-left">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase tracking-widest text-[#1e3a8a] mb-8 rounded-lg"
                        >
                            <FaBullseye /> Career Intelligence Platform
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-tight italic uppercase"
                        >
                            Future-Proof <br />
                            <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">Your Career.</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium"
                        >
                            AI-driven resume building, internship applications, and market intelligence to navigate the changing world of work.
                        </motion.p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-10 py-5 bg-[#1e3a8a] text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#FF9933] transition-all flex items-center gap-3 shadow-xl shadow-blue-900/10">
                                Build AI Resume <FaFileAlt size={10} />
                            </button>
                            <button className="px-10 py-5 bg-white text-gray-900 border border-gray-200 rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-[#1e3a8a] transition-all">
                                Explore Jobs
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        {/* Interactive UI Mockup */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="relative p-2 bg-gradient-to-br from-gray-100 to-white rounded-[4rem] shadow-2xl border border-gray-100"
                        >
                            <div className="bg-white p-10 rounded-[3.5rem]">
                                <div className="flex justify-between items-center mb-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600"><FaRocket /></div>
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-900">Live Tracker</span>
                                    </div>
                                    <span className="text-[10px] font-black uppercase text-[#138808] bg-[#138808]/10 px-3 py-1 rounded-lg">3 Interviews Pending</span>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        { company: 'SpaceX', role: 'Ops Lead', status: 'Applied', color: 'bg-blue-500' },
                                        { company: 'Google AI', role: 'Ethics Spec', status: 'Interviewing', color: 'bg-orange-500' },
                                        { company: 'Neuralink', role: 'Interface Eng', status: 'Offer Received', color: 'bg-green-500' }
                                    ].map((job, idx) => (
                                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-[#1e3a8a] transition-all">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{job.company}</span>
                                                <span className="text-sm font-black text-gray-900 uppercase italic">{job.role}</span>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">{job.status}</span>
                                                <div className={`w-2 h-2 rounded-full ${job.color} animate-pulse`}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>)}
                                    </div>
                                    <span className="text-[9px] font-bold text-[#1e3a8a] uppercase tracking-widest">Connect with Recruiters</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4 Pillars Grid */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic tracking-tight">The Career Suite</h2>
                    <p className="text-gray-500 max-w-xl mx-auto font-medium text-lg leading-relaxed">Tools designed to bridge the gap between education and high-impact careers.</p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {careerPillars.map((pillar, i) => (
                        <div
                            key={i}
                            className="bg-white p-10 rounded-[3.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full flex flex-col group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#1e3a8a]/5 rounded-full -mr-12 -mt-12 transition-all group-hover:scale-150 group-hover:bg-[#1e3a8a]/10"></div>

                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-10 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all relative z-10 shadow-sm">
                                {pillar.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight uppercase relative z-10 italic">{pillar.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed font-medium mb-10 flex-1 relative z-10">{pillar.desc}</p>

                            <div className="pt-8 border-t border-gray-50 mt-auto relative z-10">
                                <p className="text-[10px] font-black text-[#1e3a8a] uppercase tracking-widest mb-2 italic">Impact:</p>
                                <p className="text-xs text-gray-500 font-medium leading-normal">{pillar.benefit}</p>
                            </div>

                            <Link to={pillar.link} className="mt-8 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#FF9933] group-hover:gap-5 transition-all relative z-10">
                                Launch Tool <FaChevronRight size={10} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Career Explorer Section with Filters & Search */}
            <section id="explorer" className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic leading-tight">Job Explorer</h2>
                            <p className="text-gray-500 font-medium text-lg leading-relaxed">Discover roles that match your unique profile. Filter by high-growth industries and futuristic paths.</p>
                        </div>
                        <div className="flex flex-col gap-6">
                            {/* Search Bar */}
                            <div className="relative w-full md:w-80">
                                <input
                                    type="text"
                                    placeholder="Search careers..."
                                    className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-bold focus:outline-none focus:border-[#1e3a8a] transition-all uppercase tracking-widest"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                            </div>
                            {/* Category Filter */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${selectedCategory === cat ? 'bg-[#1e3a8a] text-white shadow-lg shadow-blue-900/10' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredCareers.map((c, idx) => (
                            <motion.div
                                key={idx}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="group bg-white rounded-[3.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                            >
                                <div className={`h-56 bg-gradient-to-br ${c.image} p-10 flex flex-col justify-between text-white relative`}>
                                    <div className="flex justify-between items-start">
                                        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest">
                                            {c.category}
                                        </span>
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-xl">
                                            <FaStar className="text-yellow-400" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-8 h-1 bg-white/50 rounded-full"></div>
                                            <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80">AI Match: {c.matchScore}%</span>
                                        </div>
                                        <h3 className="text-3xl font-black uppercase italic leading-tight">{c.title}</h3>
                                    </div>
                                </div>

                                <div className="p-10 flex flex-col flex-1">
                                    <div className="flex items-center justify-between mb-8 pb-8 border-b border-gray-50">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-gray-400 uppercase tracking-widest font-black mb-1">Average Salary</span>
                                            <span className="text-lg font-black text-gray-900 italic">{c.salary}</span>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <span className="text-[9px] text-gray-400 uppercase tracking-widest font-black mb-1">Stability</span>
                                            <span className="text-lg font-black text-[#138808] italic uppercase">7-Year High</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {c.tags.map((t, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-gray-50 text-gray-400 rounded-lg text-[9px] font-black uppercase tracking-widest border border-gray-100">{t}</span>
                                        ))}
                                    </div>

                                    <div className="mt-auto space-y-4">
                                        <div className="flex gap-3">
                                            <button className="flex-1 py-4 bg-gray-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#1e3a8a] transition-all shadow-lg flex items-center justify-center gap-2 group/apply">
                                                Apply Now <FaPaperPlane size={8} className="group-hover/apply:translate-x-1 transition-transform" />
                                            </button>
                                            <button className="w-14 h-14 bg-gray-50 text-gray-900 rounded-2xl border border-gray-100 flex items-center justify-center hover:bg-white hover:border-[#FF9933] transition-all">
                                                <FaStar />
                                            </button>
                                        </div>
                                        <button className="w-full py-4 bg-white text-gray-400 border border-gray-100 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-gray-900 hover:text-gray-900 transition-all">
                                            View Career Roadmap
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AI Resume Builder Feature Section */}
            <section className="py-32 px-6 bg-gray-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF9933]/10 rounded-full blur-[150px] -mr-96 -mt-96"></div>

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24 relative z-10">
                    <div className="flex-1 order-2 lg:order-1">
                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-[3rem] p-12 text-gray-900 shadow-2xl relative z-20"
                            >
                                <div className="flex justify-between items-start mb-12">
                                    <div className="flex flex-col">
                                        <h4 className="text-xl font-black uppercase italic leading-none mb-2">Resume Preview</h4>
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Optimized for ATS Systems</span>
                                    </div>
                                    <div className="w-12 h-12 bg-[#138808] rounded-2xl flex items-center justify-center text-white text-xl shadow-lg shadow-green-900/20">
                                        <FaCheckCircle />
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="w-full h-4 bg-gray-100 rounded-full"></div>
                                    <div className="w-3/4 h-4 bg-gray-100 rounded-full"></div>
                                    <div className="grid grid-cols-3 gap-4 py-8">
                                        <div className="h-20 bg-gray-50 rounded-2xl border border-gray-100"></div>
                                        <div className="h-20 bg-gray-50 rounded-2xl border border-gray-100"></div>
                                        <div className="h-20 bg-gray-50 rounded-2xl border border-gray-100"></div>
                                    </div>
                                    <div className="w-full h-24 bg-gray-50 rounded-2xl border border-dashed border-gray-200 flex items-center justify-center">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-300">AI Experience Mapping...</span>
                                    </div>
                                </div>
                            </motion.div>
                            {/* Decorative Floating Card */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute -top-10 -right-10 bg-[#FF9933] p-8 rounded-[2rem] shadow-xl z-30 hidden md:block"
                            >
                                <FaSparkles className="text-white text-3xl" />
                            </motion.div>
                        </div>
                    </div>

                    <div className="flex-1 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF9933] mb-8 block">Exclusive Feature</span>
                            <h2 className="text-4xl md:text-7xl font-black mb-10 uppercase italic leading-tight">AI Resume <br /> <span className="text-white">Optimizer.</span></h2>
                            <p className="text-xl text-gray-400 mb-12 font-medium leading-relaxed">
                                Our neural engine scans your profile, academic achievements, and skill assessments to generate a high-impact resume that passes any ATS filter.
                            </p>
                            <ul className="space-y-6 mb-12">
                                {[
                                    '15+ Premium Portfolio Templates',
                                    'AI-Generated Impact Statements',
                                    'One-Click PDF/JSON Export',
                                    'Direct Integration with LinkedIn'
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-4 text-gray-300 font-bold uppercase tracking-widest text-[10px]">
                                        <div className="w-2 h-2 rounded-full bg-[#138808]"></div>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                            <button className="px-12 py-5 bg-white text-gray-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] hover:text-white transition-all shadow-2xl">
                                Start Building Now
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-32 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 uppercase italic tracking-tight">The Success Path</h2>
                        <p className="text-gray-500 font-medium text-lg leading-relaxed">How Vidya Compass converts your profile into a professional career.</p>
                    </div>

                    <div className="relative">
                        {/* Connection Line */}
                        <div className="absolute top-1/2 left-0 w-full h-px bg-gray-100 -translate-y-1/2 hidden lg:block"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
                            {[
                                { title: "Define Profile", desc: "Complete assessment to map your cognitive DNA.", icon: <FaBrain /> },
                                { title: "Build Assets", desc: "Generate AI resume and tailored cover letters.", icon: <FaFileAlt /> },
                                { title: "Smart Apply", desc: "Target high-growth roles with matched scoring.", icon: <FaPaperPlane /> },
                                { title: "Track Progress", desc: "Monitor your interview pipeline in real-time.", icon: <FaRocket /> }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-24 h-24 rounded-[2.5rem] bg-white border border-gray-100 flex items-center justify-center text-3xl text-[#1e3a8a] mb-10 shadow-sm group-hover:border-[#FF9933] group-hover:-translate-y-2 transition-all duration-500 relative">
                                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-900 text-white text-xs font-black flex items-center justify-center rounded-2xl border-4 border-white shadow-lg">0{i + 1}</div>
                                        {step.icon}
                                    </div>
                                    <h4 className="text-xl font-black text-gray-900 mb-4 uppercase italic tracking-tight">{step.title}</h4>
                                    <p className="text-sm text-gray-400 font-medium leading-relaxed px-6">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application Tracker UI (Informational) */}
            <section className="py-24 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#138808] mb-8 block">Control Center</span>
                        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-10 uppercase italic leading-tight">Master Your <br /> <span className="text-[#138808]">Applications.</span></h2>
                        <p className="text-xl text-gray-500 mb-12 font-medium leading-relaxed">
                            No more guessing. See exactly where your application stands in the recruitment funnel. Get instant nudges when it's time to follow up or schedule an interview.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: 'Live Funnel View', desc: 'Visualization of your career pipeline.' },
                                { title: 'Direct Recruiter Chat', desc: 'Secure communication with verified hiring managers.' },
                                { title: 'Interview Simulator', desc: 'AI-driven practice tailored to specific job roles.' }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#138808] group-hover:bg-[#138808] group-hover:text-white transition-all shadow-sm">
                                        <FaCheckCircle />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-lg font-black text-gray-900 uppercase italic mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-white rounded-[4rem] p-10 shadow-2xl border border-gray-50 relative z-10">
                            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-8 pb-8 border-b border-gray-50 flex items-center gap-3">
                                <FaHistory /> Recent Activity
                            </h3>
                            <div className="space-y-12 relative">
                                <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-100"></div>
                                {[
                                    { text: 'Applied to Senior AI Ethics Specialist @ Anthropic', time: '2 hours ago', icon: <FaPaperPlane />, color: 'bg-blue-500' },
                                    { text: 'Resume viewed by 4 Global Recruiters', time: '5 hours ago', icon: <FaUserTie />, color: 'bg-orange-500' },
                                    { text: 'New Career Roadmap generated for Quantum Tech', time: 'Yesterday', icon: <FaRocket />, color: 'bg-purple-500' },
                                    { text: 'Interview Scheduled with Tesla Robotics', time: '2 days ago', icon: <FaBriefcase />, color: 'bg-green-500' }
                                ].map((act, i) => (
                                    <div key={i} className="flex gap-8 items-start relative">
                                        <div className={`w-12 h-12 rounded-2xl ${act.color} text-white flex items-center justify-center text-sm shadow-lg relative z-10`}>
                                            {act.icon}
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <p className="text-gray-900 font-bold text-sm leading-tight uppercase italic mb-1">{act.text}</p>
                                            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{act.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto bg-[#1e3a8a] rounded-[5rem] p-20 text-center text-white relative group overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                    <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-[#FF9933]/10 rounded-full blur-[100px]"></div>

                    <div className="relative z-10 flex flex-col items-center">
                        <FaUserTie className="text-7xl text-white/20 mb-12 animate-pulse-slow" />
                        <h2 className="text-4xl md:text-7xl font-black mb-10 mt-4 uppercase italic leading-tight">Your Career, <br /> <span className="text-[#FF9933]">Accelerated.</span></h2>
                        <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">Join the next generation of professionals building their future with AI clarity and data-driven security.</p>

                        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-md">
                            <button className="flex-1 px-12 py-6 bg-white text-[#1e3a8a] rounded-[2rem] font-black text-xs uppercase tracking-widest hover:bg-[#FF9933] hover:text-white transition-all shadow-xl">Create Career Profile</button>
                            <button className="flex-1 px-12 py-6 bg-transparent text-white border-2 border-white/20 rounded-[2rem] font-black text-xs uppercase tracking-widest hover:border-white transition-all">Watch Demo</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Simple Sparkles icon as FaSparkles isn't in standard fa
const FaSparkles = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" fill="currentColor" />
    </svg>
);

export default CareersPage;
