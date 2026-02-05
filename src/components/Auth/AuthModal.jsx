import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaUser, FaEnvelope, FaLock, FaArrowRight, FaPhone, FaShieldAlt } from 'react-icons/fa';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose, initialMode = 'signin' }) => {
    // Mode: 'signin' | 'signup' | 'forgotPassword' | 'verify'
    const [mode, setMode] = useState(initialMode);
    const [verificationMethod, setVerificationMethod] = useState(null); // 'email' | 'sms'

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        otp: ''
    });
    const [errors, setErrors] = useState({});

    // Reset mode and form when modal opens
    useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
            resetForm();
        }
    }, [isOpen, initialMode]);

    const resetForm = () => {
        setFormData({ name: '', email: '', phone: '', password: '', confirmPassword: '', otp: '' });
        setErrors({});
        setVerificationMethod(null);
    };

    const handleModeSwitch = (newMode) => {
        setMode(newMode);
        setErrors({});
        // We might want to keep email/phone if switching between related modes, but for simplicity reset or keep relevant fields
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (mode === 'signup' && !formData.name.trim()) {
            newErrors.name = 'Full Name is required';
        }

        if (mode !== 'verify') {
            // Basic email validation for signin, signup, and forgotPassword (if verified via email)
            // simplified: check email if it's filled or required
            if ((mode === 'signup' || mode === 'signin' || (mode === 'forgotPassword' && !formData.phone))) {
                if (!formData.email && !formData.phone && mode === 'forgotPassword') {
                    // For forgot password, one is enough. logic handled in submit.
                } else if (mode !== 'forgotPassword' && !formData.email) {
                    newErrors.email = 'Email Address is required';
                } else if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
                    newErrors.email = 'Email Address is invalid';
                }
            }
        }

        if (mode === 'signin' || mode === 'signup') {
            if (!formData.password) {
                newErrors.password = 'Password is required';
            } else if (mode === 'signup' && formData.password.length < 6) {
                newErrors.password = 'Password must be at least 6 characters';
            }
        }

        if (mode === 'signup') {
            if (!formData.confirmPassword) {
                newErrors.confirmPassword = 'Please re-enter your password';
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = 'Passwords do not match';
            }
        }

        if (mode === 'verify' && !formData.otp) {
            newErrors.otp = 'Verification code is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e, method = null) => {
        e.preventDefault();

        if (mode === 'forgotPassword') {
            if (!formData.email && !formData.phone) {
                setErrors({ email: 'Please enter Email or Phone number to proceed', phone: ' ' });
                return;
            }
            // Simulate sending code
            const methodUsed = method || (formData.email ? 'email' : 'sms');
            setVerificationMethod(methodUsed);
            alert(`Verification code sent to your ${methodUsed === 'email' ? 'Email' : 'Phone'}!`);
            handleModeSwitch('verify');
            return;
        }

        if (validateForm()) {
            console.log('Form Submitted', { mode, formData });

            if (mode === 'verify') {
                alert('Verification Successful! You can now reset your password.');
                handleModeSwitch('signin'); // In real app, go to ResetPassword mode
            } else if (mode === 'signin') {
                alert('Successfully Signed In!');
                onClose();
            } else if (mode === 'signup') {
                alert('Successfully Signed Up!');
                onClose();
            }
        }
    };

    // Render Logic Helpers
    const getTitle = () => {
        switch (mode) {
            case 'signin': return 'Welcome Back';
            case 'signup': return 'Create Account';
            case 'forgotPassword': return 'Reset Password';
            case 'verify': return 'Verify Identity';
            default: return 'Welcome';
        }
    };

    const getDescription = () => {
        switch (mode) {
            case 'signin': return 'Please sign in to continue your journey';
            case 'signup': return 'Join Vidya Compass and start navigating your future';
            case 'forgotPassword': return 'Enter your details to receive a recovery code';
            case 'verify': return `Enter the code sent to your ${verificationMethod || 'device'}`;
            default: return '';
        }
    };

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
                                <h2 className="text-3xl font-bold text-white mb-2">{getTitle()}</h2>
                                <p className="text-gray-400">{getDescription()}</p>
                            </div>

                            {/* Form */}
                            <form className="space-y-4" onSubmit={handleSubmit}>

                                {/* Name Field (Signup Only) */}
                                {mode === 'signup' && (
                                    <div className="relative">
                                        <FaUser className="absolute left-4 top-4 text-gray-500" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className={`w-full bg-white/5 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all`}
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
                                    </div>
                                )}

                                {/* Email Field (Signin, Signup, ForgotPassword) */}
                                {(mode === 'signin' || mode === 'signup' || mode === 'forgotPassword') && (
                                    <div className="relative">
                                        <FaEnvelope className="absolute left-4 top-4 text-gray-500" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className={`w-full bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all`}
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
                                    </div>
                                )}

                                {/* Phone Field (Forgot Password Option) */}
                                {mode === 'forgotPassword' && (
                                    <div className="relative">
                                        <div className="text-gray-500 text-center text-xs my-2">- OR -</div>
                                        <div className="relative">
                                            <FaPhone className="absolute left-4 top-4 text-gray-500" />
                                            <input
                                                type="text"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number (for SMS)"
                                                className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all`}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Password Fields (Signin, Signup) */}
                                {(mode === 'signin' || mode === 'signup') && (
                                    <div className="relative">
                                        <FaLock className="absolute left-4 top-4 text-gray-500" />
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Password"
                                            className={`w-full bg-white/5 border ${errors.password ? 'border-red-500' : 'border-white/10'} rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all`}
                                        />
                                        {errors.password && <p className="text-red-500 text-xs mt-1 ml-2">{errors.password}</p>}
                                    </div>
                                )}

                                {mode === 'signup' && (
                                    <div className="relative">
                                        <FaLock className="absolute left-4 top-4 text-gray-500" />
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            placeholder="Re-enter Password"
                                            className={`w-full bg-white/5 border ${errors.confirmPassword ? 'border-red-500' : 'border-white/10'} rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all`}
                                        />
                                        {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 ml-2">{errors.confirmPassword}</p>}
                                    </div>
                                )}

                                {/* OTP Field (Verify) */}
                                {mode === 'verify' && (
                                    <div className="relative">
                                        <FaShieldAlt className="absolute left-4 top-4 text-gray-500" />
                                        <input
                                            type="text"
                                            name="otp"
                                            value={formData.otp}
                                            onChange={handleChange}
                                            placeholder="Enter Verification Code"
                                            className={`w-full bg-white/5 border ${errors.otp ? 'border-red-500' : 'border-white/10'} rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-all letter-spacing-2`}
                                        />
                                        {errors.otp && <p className="text-red-500 text-xs mt-1 ml-2">{errors.otp}</p>}
                                    </div>
                                )}

                                {/* Forgot Password Link (Signin Only) */}
                                {mode === 'signin' && (
                                    <div className="flex justify-end">
                                        <button
                                            type="button"
                                            onClick={() => handleModeSwitch('forgotPassword')}
                                            className="text-sm text-primary-400 hover:text-primary-300 transition-colors"
                                        >
                                            Forgot Password?
                                        </button>
                                    </div>
                                )}

                                {/* Actions */}
                                {mode === 'forgotPassword' ? (
                                    <div className="grid grid-cols-2 gap-4">
                                        <button
                                            type="button"
                                            onClick={(e) => handleSubmit(e, 'email')}
                                            className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition-all border border-white/10"
                                        >
                                            Get Email Code
                                        </button>
                                        <button
                                            type="button"
                                            onClick={(e) => handleSubmit(e, 'sms')}
                                            className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl transition-all border border-white/10"
                                        >
                                            Get SMS Code
                                        </button>
                                    </div>
                                ) : (
                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-bold py-3 rounded-xl shadow-lg hover:shadow-primary-500/20 transition-all flex items-center justify-center gap-2 group"
                                    >
                                        {mode === 'signin' ? 'Sign In' : mode === 'signup' ? 'Create Account' : 'Verify & Proceed'}
                                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                )}
                            </form>

                            {/* Footer / Switching */}
                            <div className="mt-8 text-center">
                                <p className="text-gray-400 text-sm">
                                    {mode === 'signin' ? "Don't have an account?" :
                                        mode === 'signup' ? "Already have an account?" :
                                            mode === 'forgotPassword' ? "Remember your password?" : ""}

                                    {(mode === 'signin' || mode === 'signup' || mode === 'forgotPassword') && (
                                        <button
                                            onClick={() => handleModeSwitch(mode === 'signin' ? 'signup' : 'signin')}
                                            className="text-primary-400 font-bold hover:underline ml-1"
                                        >
                                            {mode === 'signin' ? 'Sign Up' : 'Sign In'}
                                        </button>
                                    )}

                                    {mode === 'verify' && (
                                        <button
                                            onClick={() => handleModeSwitch('forgotPassword')}
                                            className="text-primary-400 font-bold hover:underline ml-1"
                                        >
                                            Resend Code
                                        </button>
                                    )}
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
