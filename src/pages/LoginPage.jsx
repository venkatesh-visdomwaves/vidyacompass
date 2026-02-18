import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaMobileAlt, FaEnvelope, FaLock, FaSpinner, FaCheckCircle, FaExclamationCircle, FaEye, FaEyeSlash, FaCompass } from 'react-icons/fa';
import VidyaLogo from '../components/Navbar/VidyaLogo';
import './LoginPage.css';

const PARTICLES = [...Array(40)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 3 + Math.random() * 7,
    delay: Math.random() * 5
}));

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [formData, setFormData] = useState({
        mobile: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error'
    const [shake, setShake] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors = {};

        // Mobile validation (10 digits)
        if (!/^\d{10}$/.test(formData.mobile)) {
            newErrors.mobile = "Mobile number must be exactly 10 digits";
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Password validation
        if (formData.password !== 'vidyacompass123') {
            newErrors.password = "Incorrect access password";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        // Artificial delay for premium feel
        await new Promise(resolve => setTimeout(resolve, 1500));

        if (validate()) {
            const success = login(formData.password);
            if (success) {
                setStatus('success');
                setTimeout(() => navigate(from, { replace: true }), 1000);
            } else {
                setStatus('error');
                setShake(true);
                setTimeout(() => setShake(false), 500);
            }
        } else {
            setStatus('error');
            setShake(true);
            setTimeout(() => setShake(false), 500);
        }
        setIsLoading(false);
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1437]">
            {/* Background Reused from Hero */}
            <div className="absolute inset-0">
                <div className="absolute top-[8%] right-[12%] w-48 h-48 md:w-72 md:h-72 bg-yellow-500 rounded-full blur-[80px] opacity-40 animate-sun-glow"></div>
                <div className="absolute top-[10%] right-[14%] w-24 h-24 md:w-40 md:h-40 bg-orange-400 rounded-full blur-[40px] opacity-50 animate-sunrise"></div>

                {/* Rotating Rays - Like Home Page */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none select-none">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[conic-gradient(from_0deg,transparent,rgba(66,133,244,0.1),transparent_20deg,transparent_40deg,rgba(155,81,224,0.1),transparent_60deg)] animate-[spin_60s_linear_infinite]"></div>
                </div>

                <div className="light-beam animate-rays-drift"></div>

                <div className="absolute inset-0 pointer-events-none">
                    {PARTICLES.map((p) => (
                        <div
                            key={p.id}
                            className="absolute bg-white rounded-full w-0.5 h-0.5 shadow-[0_0_8px_rgba(255,255,255,1)]"
                            style={{
                                top: p.top,
                                left: p.left,
                                animation: `star-twinkle ${p.duration}s infinite ease-in-out`,
                                animationDelay: `${p.delay}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Login Card */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    x: shake ? [-5, 5, -5, 5, 0] : 0
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative z-10 w-full max-w-md p-8 sm:p-10 mx-4 login-glass-card rounded-[2rem] text-white`}
            >
                <div className="flex flex-col items-center mb-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-row items-center justify-center gap-6 w-full"
                    >
                        {/* 3D Rotating Logo (React Icon Style) */}
                        <div className="relative group/logo">
                            <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full"></div>
                            <motion.div
                                className="relative z-10"
                                style={{
                                    mixBlendMode: 'screen',
                                    perspective: 1000
                                }}
                                animate={{
                                    rotateY: [0, 360],
                                    rotateZ: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <VidyaLogo className="w-16 h-16 md:w-20 md:h-20" />
                            </motion.div>
                        </div>

                        {/* Text Branding */}
                        <div className="flex flex-col items-start pt-2">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter italic uppercase leading-none">
                                <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Vidya</span>
                                <span className="ml-2 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">Compass</span>
                            </h1>
                            <p className="mt-1.5 text-blue-400 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase opacity-80">
                                Navigate Your Future
                            </p>
                        </div>
                    </motion.div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Mobile Field */}
                    <div className="relative">
                        <div className="relative group">
                            <FaMobileAlt className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${formData.mobile ? 'text-blue-400' : 'text-white/30'}`} />
                            <input
                                id="mobile"
                                type="tel"
                                className={`w-full thick-input pl-12 pr-4 py-4 rounded-xl input-glass text-sm peer placeholder-transparent ${errors.mobile ? 'border-red-500/50' : ''}`}
                                value={formData.mobile}
                                onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                placeholder="Mobile Number"
                                required
                            />
                            <label
                                htmlFor="mobile"
                                className="absolute left-12 top-0 -translate-y-7 text-[10px] font-bold text-blue-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:left-12 peer-focus:top-0 peer-focus:-translate-y-7 peer-focus:text-[10px] peer-focus:text-blue-400 pointer-events-none"
                            >
                                Mobile Number
                            </label>
                        </div>
                        {errors.mobile && <p className="absolute -bottom-5 left-1 text-red-400 text-[9px] flex items-center gap-1"><FaExclamationCircle className="text-[10px]" /> {errors.mobile}</p>}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <div className="relative group">
                            <FaEnvelope className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${formData.email ? 'text-blue-400' : 'text-white/30'}`} />
                            <input
                                id="email"
                                type="email"
                                className={`w-full thick-input pl-12 pr-4 py-4 rounded-xl input-glass text-sm peer placeholder-transparent ${errors.email ? 'border-red-500/50' : ''}`}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="Email Address"
                                required
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-12 top-0 -translate-y-7 text-[10px] font-bold text-blue-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:left-12 peer-focus:top-0 peer-focus:-translate-y-7 peer-focus:text-[10px] peer-focus:text-blue-400 pointer-events-none"
                            >
                                Email Address
                            </label>
                        </div>
                        {errors.email && <p className="absolute -bottom-5 left-1 text-red-400 text-[9px] flex items-center gap-1"><FaExclamationCircle className="text-[10px]" /> {errors.email}</p>}
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                        <div className="relative group">
                            <FaLock className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${formData.password ? 'text-blue-400' : 'text-white/30'}`} />
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                className={`w-full thick-input pl-12 pr-12 rounded-xl input-glass text-sm peer placeholder-transparent ${errors.password ? 'border-red-500/50' : ''}`}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="Access Password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-blue-400 transition-colors z-20"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            <label
                                htmlFor="password"
                                className="absolute left-12 top-0 -translate-y-7 text-[10px] font-bold text-blue-400 uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/30 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:left-12 peer-focus:top-0 peer-focus:-translate-y-7 peer-focus:text-[10px] peer-focus:text-blue-400 pointer-events-none"
                            >
                                Access Password
                            </label>
                        </div>
                        {errors.password && <p className="absolute -bottom-5 left-1 text-red-400 text-[9px] flex items-center gap-1"><FaExclamationCircle className="text-[10px]" /> {errors.password}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all ${status === 'success' ? 'bg-emerald-500' : 'btn-login-gradient'}`}
                    >
                        {isLoading ? (
                            <FaSpinner className="animate-spin text-lg" />
                        ) : status === 'success' ? (
                            <><FaCheckCircle /> Access Granted</>
                        ) : (
                            'Unlock Website'
                        )}
                    </button>
                </form>

                <div className="mt-12 pt-6 border-t border-white/5 text-center">
                    <p className="text-white/30 text-[10px] tracking-widest uppercase">
                        Secure Access System &copy; 2026 Vidya Compass
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
