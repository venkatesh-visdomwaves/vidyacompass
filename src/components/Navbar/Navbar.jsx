import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo3D from './Logo3D';
import './Navbar.css';

/**
 * Navbar Component
 * 
 * Provides a sticky navigation bar with a glassmorphic effect on scroll.
 * Features a mobile-responsive menu and smooth link transitions.
 */
const Navbar = ({ onOpenAuth }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');
    const navigate = useNavigate();
    const location = useLocation();

    // Monitor scroll position to update navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll Spy & Route handling
    useEffect(() => {
        // Set active link based on current route
        const currentPath = location.pathname;
        const matchingLink = navLinks.find(link =>
            link.isRoute ? link.href === currentPath : false
        );

        if (matchingLink) {
            setActiveLink(matchingLink.href);
        } else if (currentPath === '/') {
            setActiveLink('/');
        }
    }, [location.pathname]);

    // Define navigation links for consistency
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Platform', href: '/platform', isRoute: true },
        { name: 'How It Works', href: '/how-it-works', isRoute: true },
        { name: 'Careers', href: '/careers', isRoute: true },
        { name: 'Parents', href: '/parents', isRoute: true },
        { name: 'Students', href: '/students', isRoute: true }
    ];

    const handleNavClick = (link) => {
        navigate(link.href);
        window.scrollTo(0, 0);
        setActiveLink(link.href);
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-black'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Brand Logo & Tagline (Clickable to Home) */}
                    <div
                        onClick={() => handleNavClick({ href: '/', isRoute: true })}
                        className="flex items-center space-x-2 md:space-x-3 cursor-pointer group/logo"
                    >
                        <Logo3D />
                        <div className="flex flex-col items-start gap-0 ml-1">
                            <h1 className="text-xl md:text-2xl font-black tracking-tighter leading-none italic uppercase">
                                <span className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    Vidya
                                </span>
                                <span className="ml-1 text-white opacity-90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                                    Compass
                                </span>
                            </h1>
                            <p className="text-[6px] md:text-[8px] text-[#138808] font-bold uppercase tracking-[0.2em] leading-none mt-0.5 ml-0.5">
                                Navigate Your Future
                            </p>
                        </div>
                    </div>

                    {/* Navigation Links for Desktop */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link, idx) => {
                            const isActive = activeLink === link.href;
                            const colors = ['#FF9933', '#FFFFFF', '#138808', '#FF9933', '#FFFFFF', '#138808'];
                            const activeColor = colors[idx % colors.length];

                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link)}
                                    className={`relative text-xs font-light transition-all duration-300 group ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                                >
                                    {link.name}
                                    {/* Active State Underline & Glow */}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${isActive ? 'w-full shadow-[0_0_8px_currentColor]' : 'w-0 group-hover:w-full'}`}
                                        style={{ backgroundColor: activeColor, color: activeColor }}
                                    ></span>
                                    {isActive && (
                                        <span
                                            className="absolute inset-0 bg-white/5 blur-lg -z-10 rounded-full"
                                            style={{ backgroundColor: `${activeColor}20` }}
                                        ></span>
                                    )}
                                </button>
                            );
                        })}

                        <div className="flex items-center gap-4 border-l border-gray-800 pl-6 ml-2">
                            <button
                                onClick={() => onOpenAuth('signin')}
                                className="flex items-center gap-2 px-6 py-2 rounded-full border border-[#FFBF00] bg-[#1a1a1a] text-[#FFBF00] hover:bg-[#FFBF00] hover:text-black transition-all duration-300 group"
                            >
                                <span className="text-sm font-medium">Account</span>
                            </button>
                            {/* <button onClick={() => handleNavClick({ href: '/contact', isRoute: true })}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-5 py-2 bg-gradient-to-r from-primary-400 to-accent-400 text-black rounded text-[10px] font-black shadow-lg hover:brightness-110 transition-all"
                                >
                                    Get Started
                                </motion.div>
                            </button> */}
                        </div>
                    </div>

                    {/* Toggle for Mobile Navigation */}
                    <button
                        className="md:hidden text-gray-200 text-xl"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-t border-gray-800"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    className={`block w-full text-left font-medium py-2 text-sm ${activeLink === link.href ? 'text-white pl-2 border-l-2 custom-border-l' : 'text-gray-300 hover:text-white'}`}
                                    onClick={() => handleNavClick(link)}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="pt-4 space-y-3">
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        onOpenAuth('signin');
                                    }}
                                    className="w-full px-6 py-2.5 rounded-full border border-[#FFBF00] bg-[#1a1a1a] text-[#FFBF00] font-bold text-sm flex items-center justify-center gap-2"
                                >
                                    Account
                                </button>
                                {/* <button
                                    className="w-full px-6 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded font-bold text-sm navbar-button-indian"
                                    onClick={() => handleNavClick({ href: '/contact', isRoute: true })}
                                >
                                    Get Started
                                </button> */}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Shiny Bottom Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
        </motion.nav>
    );
};

export default Navbar;
