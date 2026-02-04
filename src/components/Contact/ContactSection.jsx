import React from 'react';
import { motion } from 'framer-motion';
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram
} from 'react-icons/fa';
import './ContactSection.css';

/**
 * ContactSection Component
 * 
 * Provides a formal way for users to reach out.
 * Contains:
 * - A responsive form with validation styles.
 * - Contact info cards (Email, Phone, Address).
 * - Social media links.
 */
const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Touch</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Ready to navigate your future? Contact us today!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left: Interactive Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
                    >
                        <form className="space-y-4 md:space-y-6">
                            <div className="form-group">
                                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors text-sm md:text-base"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors text-sm md:text-base"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors text-sm md:text-base"
                                    placeholder="+91 XXXXX XXXXX"
                                />
                            </div>
                            <div className="form-group">
                                <label className="block text-gray-700 font-semibold mb-1 md:mb-2 text-sm md:text-base">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full px-4 py-2.5 md:py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors resize-none text-sm md:text-base"
                                    placeholder="Tell us about your career goals..."
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Right: Contact Information Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 md:space-y-8"
                    >
                        {/* Email Card */}
                        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                <FaEnvelope className="text-white text-lg md:text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-0.5 md:mb-1">Email Us</h3>
                                <p className="text-gray-600 text-sm md:text-base">info@vidyacompass.ai</p>
                                <p className="text-gray-600 text-xs md:text-sm">support@vidyacompass.ai</p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                <FaPhone className="text-white text-lg md:text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-0.5 md:mb-1">Call Us</h3>
                                <p className="text-gray-600 text-sm md:text-base">+91 79977 55155</p>
                                <p className="text-gray-600 text-xs md:text-sm">Mon-Fri: 9AM - 6PM IST</p>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg flex items-start gap-3 md:gap-4 hover:translate-x-2 transition-transform">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                                <FaMapMarkerAlt className="text-white text-lg md:text-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-0.5 md:mb-1">Visit Us</h3>
                                <p className="text-gray-600 text-sm md:text-base">Hyderabad, Telangana</p>
                                <p className="text-gray-600 text-xs md:text-sm">India</p>
                            </div>
                        </div>

                        {/* Social Connect Banner */}
                        <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-5 md:p-6 text-white shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <FaMapMarkerAlt className="text-6xl md:text-8xl rotate-12" />
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-4 relative z-10">Follow Us</h3>
                            <div className="flex gap-3 md:gap-4 relative z-10">
                                {[
                                    { icon: <FaFacebookF />, color: 'hover:bg-blue-600' },
                                    { icon: <FaTwitter />, color: 'hover:bg-sky-500' },
                                    { icon: <FaLinkedinIn />, color: 'hover:bg-blue-700' },
                                    { icon: <FaInstagram />, color: 'hover:bg-pink-600' }
                                ].map((social, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center ${social.color} transition-colors border border-white/20`}
                                    >
                                        <span className="text-sm md:text-base">{social.icon}</span>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
