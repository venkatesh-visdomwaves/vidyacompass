import React from 'react';
import { motion } from 'framer-motion';
import {
    FaPaperPlane, FaClock, FaCheckCircle, FaUserTie,
    FaComments, FaBriefcase, FaTimesCircle, FaChartLine,
    FaRegCalendarAlt, FaEnvelopeOpenText, FaSearch, FaFilter, FaChevronRight
} from 'react-icons/fa';
import CareerSubNavbar from '../../components/Navbar/CareerSubNavbar';

const stats = [
    { label: 'Total Applied', val: '24', color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Interviews', val: '08', color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Offers', val: '02', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Pending', val: '14', color: 'text-purple-600', bg: 'bg-purple-50' }
];

const jobs = [
    { company: 'Google', role: 'UX Intern', date: '2 days ago', status: 'Interviewing', logo: <FaBriefcase />, color: 'bg-blue-500' },
    { company: 'Tesla', role: 'Robotics Eng', date: '5 days ago', status: 'Applied', logo: <FaBriefcase />, color: 'bg-red-500' },
    { company: 'SpaceX', role: 'Payload Spec', date: '1 week ago', status: 'Offer Received', logo: <FaBriefcase />, color: 'bg-black' },
    { company: 'Anthropic', role: 'AI Safety', date: '2 weeks ago', status: 'Screening', logo: <FaBriefcase />, color: 'bg-amber-600' }
];

const Applications = () => {
    return (
        <div className="bg-white min-h-screen pt-16">
            <CareerSubNavbar />

            {/* Header Section */}
            <section className="py-20 px-6 bg-gradient-to-b from-gray-50/50 to-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-8 leading-tight italic uppercase">
                            Your Application <br />
                            <span className="text-[#138808]">Command Center.</span>
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl font-medium leading-relaxed mb-16">
                            Manage every stage of your career journey. From initial outreach to signed contracts, all in one verified channel.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((s, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className={`p-8 rounded-[2.5rem] border border-gray-100 ${s.bg} flex flex-col items-center text-center`}
                            >
                                <span className={`text-4xl font-black italic mb-2 ${s.color}`}>{s.val}</span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{s.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content: Tracking & Tasks */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
                    {/* Left Column: Tasks / Deadlines */}
                    <div className="lg:col-span-1 space-y-12">
                        <div>
                            <h3 className="text-xl font-black uppercase italic text-gray-900 mb-8 flex items-center gap-3">
                                <FaRegCalendarAlt className="text-[#FF9933]" /> Upcoming Deadlines
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { title: 'Portfolio Submission', deadline: 'May 15', sub: 'Adobe Design Role' },
                                    { title: 'Technical Interview', deadline: 'May 18', sub: 'AWS Cloud Intern' },
                                    { title: 'Visa Forms Due', deadline: 'May 20', sub: 'London Relocation' }
                                ].map((task, i) => (
                                    <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-100 group hover:border-[#FF9933] transition-all">
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-black text-gray-900 uppercase italic leading-tight">{task.title}</span>
                                            <span className="text-[9px] font-black text-rose-500 uppercase">{task.deadline}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{task.sub}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-10 bg-gray-900 rounded-[3rem] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-all"></div>
                            <FaUserTie className="text-4xl text-[#FF9933] mb-8" />
                            <h4 className="text-xl font-black uppercase italic mb-4 leading-tight">Expert Review</h4>
                            <p className="text-sm text-gray-400 font-medium mb-8 leading-relaxed">
                                Get a senior counselor to audit your application status and recruiter messages.
                            </p>
                            <button className="w-full py-4 bg-white text-gray-900 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#FF9933] hover:text-white transition-all">
                                Request Review
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Job List */}
                    <div className="lg:col-span-2">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <h3 className="text-xl font-black uppercase italic text-gray-900">Active Applications</h3>
                            <div className="flex gap-3">
                                <div className="relative">
                                    <input type="text" placeholder="Filter..." className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold uppercase tracking-widest focus:outline-none" />
                                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]" />
                                </div>
                                <button className="p-3 bg-gray-50 text-gray-400 rounded-xl hover:bg-gray-100 transition-all"><FaFilter size={12} /></button>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {jobs.map((job, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                                        <div className="flex items-center gap-6">
                                            <div className={`w-14 h-14 rounded-2xl ${job.color} text-white flex items-center justify-center text-xl shadow-lg`}>
                                                {job.logo}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-black text-gray-900 uppercase italic leading-tight">{job.role}</h4>
                                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{job.company}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-12">
                                            <div className="hidden md:flex flex-col items-center">
                                                <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">Applied</span>
                                                <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">{job.date}</span>
                                            </div>
                                            <div className="flex flex-col items-end">
                                                <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2 ${job.status === 'Offer Received' ? 'bg-green-50 text-green-600' :
                                                    job.status === 'Interviewing' ? 'bg-blue-50 text-blue-600' : 'bg-gray-50 text-gray-500'
                                                    }`}>
                                                    <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${job.status === 'Offer Received' ? 'bg-green-600' :
                                                        job.status === 'Interviewing' ? 'bg-blue-600' : 'bg-gray-500'
                                                        }`}></div>
                                                    {job.status}
                                                </span>
                                            </div>
                                            <button className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-[#1e3a8a] group-hover:text-white transition-all">
                                                <FaChevronRight size={10} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="w-full mt-10 py-5 border-2 border-dashed border-gray-100 rounded-3xl text-[10px] font-black uppercase tracking-widest text-gray-400 hover:border-gray-200 hover:text-gray-900 transition-all">
                            Load 12 More Applications
                        </button>
                    </div>
                </div>
            </section>

            {/* Funnel Visualization (Informational) */}
            <section className="py-32 px-6 bg-gray-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic leading-tight">The Recruitment <br /> <span className="text-[#FF9933]">Funnel.</span></h2>
                        <p className="text-lg text-gray-400 font-medium leading-relaxed mb-12">
                            Visualize your progress across thousands of data points. We optimize your path by identifying bottlenecks in your screening process.
                        </p>
                        <div className="space-y-4">
                            {[
                                { label: 'Discovery', width: '100%', count: '240' },
                                { label: 'Applications', width: '85%', count: '156' },
                                { label: 'Interviews', width: '40%', count: '32' },
                                { label: 'Final Offers', width: '10%', count: '04' }
                            ].map((level, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-[8px] font-black uppercase tracking-widest text-gray-500 mb-2">
                                        <span>{level.label}</span>
                                        <span>{level.count}</span>
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: level.width }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className="h-full bg-gradient-to-r from-[#FF9933] to-[#138808]"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative">
                        <div className="p-10 bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl">
                            <div className="flex items-center gap-3 mb-12">
                                <FaChartLine className="text-[#FF9933]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">AI Conversion Insight</span>
                            </div>
                            <h4 className="text-2xl font-black uppercase italic mb-6">"You are 2.4x more likely to get an interview in <span className="text-[#138808]">Space Tech</span> roles than the average student."</h4>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed mb-8">Identify your niche and focus your power where the data shows the highest return on energy.</p>
                            <div className="flex gap-4">
                                <button className="px-8 py-3 bg-white text-gray-900 rounded-xl font-black text-[9px] uppercase tracking-widest">View Detailed Analysis</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <FaEnvelopeOpenText className="text-5xl text-[#138808] mx-auto mb-8" />
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase italic leading-tight">Got a New Job Lead?</h2>
                    <p className="text-xl text-gray-500 mb-12 font-medium">Add manual entries to your tracker and let the AI help you prep for it.</p>
                    <button className="px-12 py-5 bg-[#138808] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-900 transition-all shadow-xl">Add Manual Application</button>
                </div>
            </section>
        </div>
    );
};

export default Applications;
