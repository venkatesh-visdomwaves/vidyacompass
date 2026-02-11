import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaComments, FaChartPie, FaMobileAlt, FaUserGraduate, FaHandshake } from 'react-icons/fa';

const values = [
    {
        icon: <FaShieldAlt />,
        title: "Safe & Private",
        description: "Your child's developmental data is encrypted and never shared with third parties. Privacy is our core foundation."
    },
    {
        icon: <FaChartPie />,
        title: "Progress Tracking",
        description: "Get weekly insights into your child's evolving interests, skills development, and potential career matches."
    },
    {
        icon: <FaHandshake />,
        title: "Expert Guidance",
        description: "Access curated resources to help you support your child's unique journey without being overbearing."
    },
    {
        icon: <FaMobileAlt />,
        title: "Parent Dashboard",
        description: "A dedicated interface for parents to monitor milestones and financial planning for higher education."
    }
];

const ParentsPage = () => {
    return (
        <div className="pt-24 bg-[#E1F0FF] min-h-screen">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-20 h-20 rounded-3xl bg-white border border-gray-100 flex items-center justify-center text-3xl text-primary-600 mb-10 shadow-lg"
                >
                    <FaUserGraduate />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-8 tracking-tight flex flex-col items-center justify-center italic uppercase leading-none">
                        <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">
                            Parent Partnership
                        </span>
                        <span className="text-gray-900 mt-4 block not-italic font-light text-xl md:text-3xl tracking-[0.2em] uppercase">The Science of Your Child's Success</span>
                    </h1>
                    <div className="w-48 h-2 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] mx-auto rounded-full shadow-sm border border-gray-100"></div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-600 font-light max-w-4xl mx-auto leading-relaxed text-center"
                >
                    We bridge the gap between parental aspirations and student potential with data-driven clarity and emotional intelligence.
                </motion.p>
            </div>

            {/* Values Grid */}
            <div className="max-w-7xl mx-auto px-6 py-24 border-t border-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-start"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xl text-primary-600 mb-6 shadow-sm">
                                {v.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{v.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-light">{v.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonial / Story Section */}
            <div className="bg-primary-900 py-32 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-[3rem] bg-slate-800 border border-white/10 overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1544717297-fa154da09f9b?auto=format&fit=crop&q=80&w=1000" alt="Parent and student" className="w-full h-full object-cover opacity-80" />
                            </div>
                            <div className="absolute -bottom-8 -right-8 p-8 bg-white text-slate-900 rounded-[2rem] shadow-2xl max-w-xs">
                                <FaComments className="text-primary-500 text-2xl mb-4" />
                                <p className="italic font-light mb-4 text-sm">"Vidya Compass changed our family dynamic. Instead of arguing about his future, we now have data to discuss together."</p>
                                <p className="font-bold text-xs">— Samantha R., Parent</p>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Decisions based on <br /><span className="text-primary-400">Insights, not Pressure.</span></h2>
                            <p className="text-xl text-primary-100/70 mb-10 font-light leading-relaxed">
                                Most career decisions are based on traditional prestige or social trends. Vidya Compass uses neuro-cognitive profiling to reveal what will truly make your child thrive in the 21st century.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    "Financial ROI analysis for universities",
                                    "Mental well-being compatibility checks",
                                    "Work-life balance predictions",
                                    "Future-proof skill gap analysis"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-primary-50 font-medium">
                                        <div className="w-2 h-2 rounded-full bg-primary-400"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Preview */}
            <div className="max-w-3xl mx-auto px-6 py-32 text-center">
                <h2 className="text-4xl font-bold mb-16 text-slate-900">Have Questions?</h2>
                <div className="space-y-6 text-left">
                    {[
                        { q: "Is the technology biased?", a: "Our AI is trained on diverse global datasets to ensure neutrality across cultures and backgrounds." },
                        { q: "How early can we start?", a: "We recommend starting from grade 8 to build a robust developmental profile early on." },
                        { q: "Can I manage multiple children?", a: "Yes, the parent dashboard supports multi-profile management under one account." }
                    ].map((faq, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                            <h4 className="text-lg font-bold mb-3 text-slate-900 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{faq.q}</h4>
                            <p className="text-slate-500 font-light text-sm">{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ParentsPage;
