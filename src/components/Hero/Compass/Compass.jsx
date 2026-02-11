import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa';
import './Compass.css';

const Compass = ({ careerPaths, hoveredPath, setHoveredPath }) => {
    const [deflection, setDeflection] = useState(0);
    const lastPos = React.useRef({ x: 0, y: 0 });
    const timerRef = React.useRef(null);

    const handleMouseMove = useCallback((e) => {
        const dx = e.clientX - lastPos.current.x;
        const dy = e.clientY - lastPos.current.y;
        const velocity = Math.sqrt(dx * dx + dy * dy);

        if (velocity > 2) {
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            const shake = (Math.sin(angle) * velocity) / 12;
            setDeflection(shake);

            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setDeflection(0), 150);
        }
        lastPos.current = { x: e.clientX, y: e.clientY };
    }, []);

    // Cleanup timer on unmount
    React.useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            className="relative w-full h-full flex items-center justify-center transform-gpu cursor-crosshair"
        >

            {/* 3D Rim and Body */}
            <div className="absolute inset-0 rounded-full compass-rim p-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden bg-slate-900">
                {/* Rotating Background Image Layer */}
                <motion.div
                    className="absolute inset-0 z-0 animate-slow-rotate"
                >
                    <img
                        src="/wmremove-transformed.png"
                        alt="Compass Texture"
                        className="w-full h-full object-cover opacity-100 brightness-110 scale-105"
                    />
                </motion.div>

                {/* Rotating Light Effect */}
                <div className="light-rotation"></div>

                {/* Inner Glass Layer */}
                <div className="absolute inset-2 rounded-full compass-glass z-20 border border-white/30"></div>

                {/* Degree Marks (Rotating with background) */}
                <div className="absolute inset-4 z-10 opacity-40 pointer-events-none animate-slow-rotate">
                    {[...Array(72)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-0 left-1/2 w-0.5 h-full bg-black/60 origin-center"
                            style={{ transform: `translateX(-50%) rotate(${i * 5}deg)` }}
                        >
                            <div className={`w-full bg-black ${i % 18 === 0 ? 'h-6' : i % 9 === 0 ? 'h-4' : 'h-1.5'}`}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= REALISTIC 3D NEEDLE (SVG for perfect fit) ================= */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <motion.div
                    animate={{
                        rotate: (hoveredPath !== null
                            ? careerPaths[hoveredPath].angle
                            : 360) + deflection
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 70,
                        damping: 10,
                        mass: 1.8
                    }}
                    className="w-12 h-[88%] relative flex items-center justify-center"
                >
                    {/* SVG Needle for perfect scaling and responsiveness */}
                    <svg
                        viewBox="0 0 40 400"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.5)]"
                        preserveAspectRatio="none"
                    >
                        {/* North Half (Red) */}
                        <path d="M20 0L40 200H0L20 0Z" fill="#EF4444" />
                        <path d="M20 0L20 200H0L20 0Z" fill="#B91C1C" />

                        {/* South Half (Blue) */}
                        <path d="M20 400L0 200H40L20 400Z" fill="#3B82F6" />
                        <path d="M20 400L20 200H40L20 400Z" fill="#1D4ED8" />
                    </svg>

                    {/* Pivot Cap - Integrated with SVG center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full needle-pivot border-2 border-white/20 z-50 shadow-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-700 opacity-50"></div>
                    </div>
                </motion.div>
            </div>

            {/* ================= CAREER PATH ICONS ================= */}
            <div className="absolute inset-0 z-40">
                {careerPaths.map((path, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setHoveredPath(index)}
                        onMouseLeave={() => setHoveredPath(null)}
                        className="absolute"
                        style={{
                            top: '50%',
                            left: '50%',
                            transform: `translate(-50%, -50%) rotate(${path.angle}deg) translateY(-38%)`
                        }}
                    >
                        <div className="flex flex-col items-center gap-1 cursor-pointer" style={{ transform: `rotate(-${path.angle}deg)` }}>
                            <motion.div
                                animate={hoveredPath === index ? {
                                    scale: 1.4,
                                    y: -8,
                                    filter: 'drop-shadow(0 0 20px currentColor)'
                                } : {
                                    scale: 1,
                                    y: 0,
                                    filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.4))'
                                }}
                                className={`text-2xl md:text-3xl ${path.color} transition-all duration-300 drop-shadow-xl`}
                            >
                                {path.icon}
                            </motion.div>

                            <AnimatePresence>
                                {hoveredPath === index && (
                                    <motion.span
                                        initial={{ opacity: 0, scale: 0.5, y: 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.5, y: 10 }}
                                        className="text-[10px] md:text-[12px] font-black tracking-widest uppercase text-white bg-blue-600/90 px-3 py-1 rounded-full backdrop-blur-md shadow-lg border border-white/20"
                                    >
                                        {path.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ================= CENTER STUDENT ICON (Education Logo) ================= */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                <motion.div
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600
 rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.5)] relative group"
                >
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    {/* {<FaUserGraduate className="text-yellow-00 text-2xl md:text-3xl drop-shadow-md" /> } */}
                    {/* {<FaUserGraduate className=""text-2xl md:text-3xl drop-shadow-lg
             text-transparent bg-clip-text
             bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700 /> } */}
                </motion.div>
            </div>

        </motion.div>
    );
};

export default Compass;
