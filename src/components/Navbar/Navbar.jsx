import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown, FaCompass, FaGlobeAmericas, FaRoute, FaWallet, FaBrain, FaArrowRight, FaChartPie, FaShieldAlt, FaComments } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import VidyaLogo from './VidyaLogo';
import './Navbar.css';

/**
 * Navbar Component
 */
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Platform', href: '/platform', isRoute: true },
    { name: 'How It Works', href: '/how-it-works', isRoute: true },
    { name: 'Careers', href: '/careers', isRoute: true },
    {
        name: 'Parents',
        href: '/parents',
        isRoute: true,
        hasMegaMenu: true
    },
    {
        name: 'Students',
        href: '/students',
        isRoute: true,
        hasMegaMenu: true
    }
];

const studentColumns = [
    { title: 'Find Career', href: '/students/career-discovery', icon: <FaCompass />, color: 'text-[#FF9933]', desc: 'What fits you?' },
    { title: 'Study Abroad', href: '/students/global-explorer', icon: <FaGlobeAmericas />, color: 'text-[#138808]', desc: 'Global Colleges' },
    { title: 'Success Path', href: '/students/roadmap', icon: <FaRoute />, color: 'text-[#FF9933]', desc: 'Your 5-Year Plan' },
    { title: 'Money & Loans', href: '/students/financial-planning', icon: <FaWallet />, color: 'text-[#138808]', desc: 'Fees & Funding' },
    { title: 'Job Market', href: '/students/career-intelligence', icon: <FaBrain />, color: 'text-[#FF9933]', desc: 'Future Earnings' },
];

const parentColumns = [
    { title: 'Dashboard', href: '/parents/dashboard', icon: <FaChartPie />, color: 'text-[#1e3a8a]', desc: 'Track Progress' },
    { title: 'Finance', href: '/parents/financial-support', icon: <FaWallet />, color: 'text-[#138808]', desc: 'Budget & ROI' },
    { title: 'Safety', href: '/parents/risk-safety', icon: <FaShieldAlt />, color: 'text-[#FF9933]', desc: 'Risk Insights' },
    { title: 'Expert Help', href: '/parents/expert-guidance', icon: <FaComments />, color: 'text-[#1e3a8a]', desc: 'Counseling' },
];

const Navbar = ({ onOpenAuth }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (link) => {
        navigate(link.href);
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(false);
        setActiveMegaMenu(null);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' : 'bg-black'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand Logo */}
                    <div
                        onClick={() => handleNavClick({ href: '/', isRoute: true })}
                        className="flex items-center space-x-2 md:space-x-3 cursor-pointer group/logo"
                    >
                        <VidyaLogo />
                        <div className="flex flex-col items-start gap-0 ml-1">
                            <h1 className="text-xl md:text-2xl font-bold tracking-tighter leading-none italic uppercase">
                                <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    Vidya
                                </span>
                                <span className="ml-1 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    Compass
                                </span>
                            </h1>

                            {/* Tagline - Stable */}
                            <div className="flex flex-row ml-0.5 mt-[2px]">
                                {"Navigate Your Future".split("").map((char, index) => (
                                    <span
                                        key={index}
                                        className="text-[7px] md:text-[9px] text-white font-bold uppercase tracking-[0.2em] leading-none inline-block origin-bottom"
                                        style={{ marginRight: char === " " ? "4px" : "0" }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links for Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link, idx) => {
                            const isActive = location.pathname.startsWith(link.href) && (link.href !== '/' || location.pathname === '/');
                            const colors = ['#FF9933', '#FFFFFF', '#138808', '#FF9933', '#138808', '#FF9933'];
                            const activeColor = colors[idx % colors.length];

                            if (link.hasMegaMenu) {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative"
                                        onMouseEnter={() => setActiveMegaMenu(link.name)}
                                        onMouseLeave={() => setActiveMegaMenu(null)}
                                    >
                                        <button
                                            onClick={() => handleNavClick(link)}
                                            className={`relative text-[10px] font-black uppercase tracking-widest transition-all duration-300 group flex items-center gap-1.5 py-6 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            {link.name} <FaChevronDown className={`text-[8px] transition-transform duration-300 ${activeMegaMenu === link.name ? 'rotate-180' : ''}`} />
                                            {/* Active State Underline */}
                                            <span
                                                className={`absolute bottom-5 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full shadow-[0_0_8px_currentColor]' : 'w-0 group-hover:w-full'}`}
                                                style={{ backgroundColor: activeColor, color: activeColor }}
                                            ></span>
                                        </button>

                                        {/* Mega Menu Dropdown */}
                                        <AnimatePresence>
                                            {activeMegaMenu === link.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-7xl bg-white rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.15)] border border-gray-100 p-10 overflow-hidden z-50 mt-1"
                                                >
                                                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                                                        {(link.name === 'Students' ? studentColumns : parentColumns).map((col, i) => (
                                                            <Link
                                                                key={i}
                                                                to={col.href}
                                                                onClick={() => setActiveMegaMenu(null)}
                                                                className="flex flex-col items-center text-center group/col p-6 rounded-[2rem] hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100"
                                                            >
                                                                <div className={`w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl mb-6 group-hover/col:scale-110 group-hover/col:bg-gray-900 group-hover/col:text-white transition-all ${col.color}`}>
                                                                    {col.icon}
                                                                </div>
                                                                <h4 className="text-xs font-black text-gray-900 group-hover/col:text-[#138808] transition-colors leading-tight uppercase tracking-widest mb-2 font-serif">
                                                                    {col.title}
                                                                </h4>
                                                                <p className="text-[10px] text-gray-400 font-medium group-hover/col:text-gray-500 transition-colors">
                                                                    {col.desc}
                                                                </p>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="mt-10 pt-8 border-t border-gray-100 flex justify-between items-center px-4">
                                                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-300">Vidya Compass Student Ecosystem</span>
                                                        <Link to="/students" className="text-[10px] font-black text-[#138808] hover:text-[#FF9933] uppercase tracking-widest flex items-center gap-2 group/all">
                                                            View All Sections <FaArrowRight size={8} className="group-hover/all:translate-x-1 transition-transform" />
                                                        </Link>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            }

                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link)}
                                    className={`relative text-[10px] font-black uppercase tracking-widest transition-all duration-300 group ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full shadow-[0_0_8px_currentColor]' : 'w-0 group-hover:w-full'}`}
                                        style={{ backgroundColor: activeColor, color: activeColor }}
                                    ></span>
                                </button>
                            );
                        })}

                        <div className="flex items-center gap-4 border-l border-gray-800 pl-6 ml-2">
                            <button
                                onClick={() => onOpenAuth('signin')}
                                className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#FFBF00] bg-[#1a1a1a] text-[#FFBF00] hover:bg-[#FFBF00] hover:text-black transition-all duration-300 group"
                            >
                                <span className="text-[10px] font-black uppercase tracking-widest">Account</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-gray-200 text-xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-t border-gray-800 overflow-hidden"
                    >
                        <div className="px-4 py-8 space-y-6">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <button
                                        className={`flex justify-between items-center w-full text-left font-black py-2 text-[10px] uppercase tracking-[0.2em] ${location.pathname.startsWith(link.href) && (link.href !== '/' || location.pathname === '/') ? 'text-[#FF9933] border-l-2 pl-4 border-[#FF9933]' : 'text-gray-400 hover:text-white'}`}
                                        onClick={() => handleNavClick(link)}
                                    >
                                        {link.name}
                                        {link.hasMegaMenu && <FaChevronDown className="text-[8px]" />}
                                    </button>
                                    {link.hasMegaMenu && (
                                        <div className="pl-6 mt-4 grid grid-cols-1 gap-3">
                                            {(link.name === 'Students' ? studentColumns : parentColumns).map((col, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => handleNavClick(col)}
                                                    className="flex items-center gap-3 w-full text-left py-2 text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-widest"
                                                >
                                                    <span className={col.color}>{col.icon}</span>
                                                    {col.title}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="pt-8">
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        onOpenAuth('signin');
                                    }}
                                    className="w-full px-6 py-3.5 rounded-full border border-[#FFBF00] bg-[#1a1a1a] text-[#FFBF00] font-black text-[10px] uppercase tracking-widest flex items-center justify-center"
                                >
                                    Account
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </motion.nav>
    );
};

export default Navbar;
