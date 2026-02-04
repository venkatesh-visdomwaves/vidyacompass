import React from 'react';
import {
    FaCompass,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram
} from 'react-icons/fa';
import './Footer.css';

/**
 * Footer Component
 * 
 * Provides site-wide links, brand information, and legal disclaimers.
 * Features:
 * - Organized link columns.
 * - Social media links.
 * - Copyright and legal sub-links.
 */
const Footer = () => {
    // Navigation mapping for footer sections
    const footerLinks = {
        Platform: ['Features', 'Modules', 'Careers', 'Pricing'],
        Support: ['Parents', 'Students', 'FAQs', 'Help Center'],
        Company: ['About Us', 'Blog', 'Careers', 'Press'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
    };

    return (
        <footer className="bg-black text-gray-400 border-t border-gray-900 relative">
            {/* Shiny Top Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent shadow-[0_0_8px_rgba(255,255,255,0.4)]"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Main Footer Content Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-10 md:gap-8 mb-10">

                    {/* Brand Info Section */}
                    <div className="col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <FaCompass className="text-2xl md:text-3xl text-primary-500" />
                            <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">Vidya Compass</h3>
                        </div>
                        <p className="text-xs md:text-sm text-gray-500 mb-6 leading-relaxed max-w-sm">
                            Your AI-powered career navigation platform. Empowering students to Navigate Their Future with confidence and precision.
                        </p>

                        {/* Social Icons for Footer */}
                        <div className="flex gap-3">
                            {[
                                { icon: <FaFacebookF />, hover: 'hover:text-blue-500', label: 'Facebook' },
                                { icon: <FaTwitter />, hover: 'hover:text-sky-400', label: 'Twitter' },
                                { icon: <FaLinkedinIn />, hover: 'hover:text-blue-600', label: 'LinkedIn' },
                                { icon: <FaInstagram />, hover: 'hover:text-pink-500', label: 'Instagram' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    aria-label={social.label}
                                    className={`w-9 h-9 md:w-10 md:h-10 rounded-lg border border-gray-900 flex items-center justify-center text-gray-500 ${social.hover} hover:border-gray-700 transition-all duration-300 bg-gray-950`}
                                >
                                    <span className="text-xs md:text-sm">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Link Columns Mapping */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="space-y-4">
                            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest border-b border-gray-900 pb-2 inline-block">
                                {category}
                            </h4>
                            <ul className="space-y-2 md:space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-white transition-colors text-xs md:text-sm inline-block group">
                                            {link}
                                            <span className="block h-[1px] w-0 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Legal and Copyright Bottom Bar */}
                <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p className="text-[10px] text-primary-500 font-bold uppercase tracking-[0.2em] mb-1">Powered by Visdom Waves</p>
                        <p className="text-[10px] md:text-xs text-gray-600 uppercase tracking-widest text-center md:text-left">
                            © 2026 Vidya Compass. Precision Career Guidance. All Rights Reserved.
                        </p>
                    </div>
                    <div className="flex gap-4 md:gap-8 text-[10px] md:text-[11px] text-gray-600 uppercase tracking-widest">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
