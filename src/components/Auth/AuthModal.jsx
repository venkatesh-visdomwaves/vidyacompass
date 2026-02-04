import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'signin' }) => {
    const [isSignIn, setIsSignIn] = useState(initialMode === 'signin');

    // Reset mode when modal opens
    React.useEffect(() => {
        setIsSignIn(initialMode === 'signin');
    }, [isOpen, initialMode]);

    if (!isOpen) return null;

    const toggleMode = () => setIsSignIn(!isSignIn);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
                        >
                            <FaTimes size={20} />
                        </button>

                        <div className="relative p-8 md:p-10">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2">
                                    {isSignIn ? 'Welcome Back' : 'Create Account'}
                                </h2>
                                <p className="text-gray-400">
                                    {isSignIn ? 'Please sign in to continue your journey' : 'Join Vidya Compass and start navigating your future'}
                                </p>
                            </div>

                            {/* Form */}
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                {!isSignIn && (
                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
                                        />
                                    </div>
                                )}
                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all"
                                    />
                                </div>

                                {isSignIn && (
                                    <div className="flex justify-end">
                                        <button type="button" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
                                            Forgot Password?
                                        </button>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-primary-500/20 transition-all flex items-center justify-center gap-2 group"
                                >
                                    {isSignIn ? 'Sign In' : 'Create Account'}
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>

                            {/* Footer */}
                            <div className="mt-8 text-center">
                                <p className="text-gray-400 text-sm">
                                    {isSignIn ? "Don't have an account?" : "Already have an account?"}{' '}
                                    <button
                                        onClick={toggleMode}
                                        className="text-primary-400 font-bold hover:underline"
                                    >
                                        {isSignIn ? 'Sign Up' : 'Sign In'}
                                    </button>
                                </p>
                            </div>
                        </div>

                        {/* Decorative Background Elements */}
                        <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary-500/10 rounded-full blur-[80px]" />
                        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent-500/10 rounded-full blur-[80px]" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
