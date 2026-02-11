import React from 'react';
import {
    FaCompass,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const footerSections = [
        {
            title: 'Platform',
            links: [
                { name: 'Platform', href: '/platform' },
                { name: 'How It Works', href: '/how-it-works' },
                { name: 'Careers', href: '/careers' }
            ]
        },
        {
            title: 'Support',
            links: [
                { name: 'Parents', href: '/parents' },
                { name: 'Students', href: '/students' },
                { name: 'Contact', href: '/contact' }
            ]
        },
        {
            title: 'Company',
            links: [
                { name: 'About Us', href: '/#about' },
                { name: 'Blog', href: '#' },
                { name: 'Resources', href: '#' }
            ]
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' }
            ]
        }
    ];

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
                    {footerSections.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h4 className="text-white text-[10px] md:text-xs font-black uppercase tracking-widest border-b border-gray-900 pb-2 inline-block">
                                {section.title}
                            </h4>
                            <ul className="space-y-2 md:space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            onClick={() => window.scrollTo(0, 0)}
                                            className="hover:text-white transition-colors text-xs md:text-sm inline-block group"
                                        >
                                            {link.name}
                                            <span className="block h-[1px] w-0 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Legal and Copyright Bottom Bar */}
                <div className="border-t border-gray-900 pt-8">
                    <div className="flex flex-col items-center gap-3 text-center">
                        <h3 className="text-base md:text-lg font-bold text-white">
                            Vidya Compass <span className="text-gray-400 font-normal">– Precision Career Guidance</span>
                        </h3>
                        <p className="text-sm md:text-base text-gray-400">
                            Powered by <span className="text-primary-500 font-bold">Visdom Waves</span>
                        </p>
                        <p className="text-xs md:text-sm text-gray-600">
                            © 2026 Vidya Compass. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
