import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaHome } from 'react-icons/fa';

const studentNavLinks = [
    { name: 'Find Career', href: '/students/career-discovery' },
    { name: 'Study Abroad', href: '/students/global-explorer' },
    { name: 'Success Path', href: '/students/roadmap' },
    { name: 'Money & Loans', href: '/students/financial-planning' },
    { name: 'Job Market', href: '/students/career-intelligence' }
];

const StudentSubNavbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isSticky, setIsSticky] = useState(false);

    // Get current breadcrumb
    const getBreadcrumb = () => {
        const path = location.pathname;
        if (path === '/students') return 'Overview';
        const link = studentNavLinks.find(l => l.href === path);
        return link ? link.name : '';
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${isSticky ? 'fixed top-16' : 'relative'} left-0 right-0 z-40 transition-all duration-300 w-full`}>
            <div className={`bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm ${isSticky ? 'py-1' : 'py-2'}`}>
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    {/* Path / Breadcrumbs */}
                    <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                        <Link to="/" className="hover:text-[#138808]">Home</Link>
                        <span>/</span>
                        <Link to="/students" className="hover:text-[#138808]">Students</Link>
                        {location.pathname !== '/students' && (
                            <>
                                <span>/</span>
                                <span className="text-[#138808]">{getBreadcrumb()}</span>
                            </>
                        )}
                    </div>

                    <div className="flex items-center justify-between h-10 gap-2">
                        {/* Back Link */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => navigate('/students')}
                                className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#138808] hover:text-[#FF9933] transition-colors group"
                            >
                                <FaChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
                                <span>Go Back</span>
                            </button>
                            <Link to="/" className="text-gray-400 hover:text-[#138808] transition-colors">
                                <FaHome size={14} />
                            </Link>
                        </div>

                        {/* Sub Links - Simplified names */}
                        <div className="flex-1 flex items-center justify-center gap-2 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4">
                            {studentNavLinks.map((link) => {
                                const isActive = location.pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.href}
                                        className={`relative text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all duration-300 px-3 py-1.5 rounded-md ${isActive
                                            ? 'text-[#138808] bg-[#138808]/5'
                                            : 'text-gray-400 hover:text-gray-900 border border-transparent hover:border-gray-100'
                                            }`}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="studentActiveLine"
                                                className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#138808]"
                                                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Brand Accent */}
                        <div className="hidden lg:flex items-center gap-1 opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF9933]"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-white border border-gray-200"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-[#138808]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentSubNavbar;
