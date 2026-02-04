import React from 'react';
import { motion } from 'framer-motion';

const Logo3D = ({ className = "w-10 h-10 md:w-12 md:h-12" }) => {
    return (
        <motion.div
            className={`relative ${className}`}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Definitions for 3D Shading & Shine */}
                <defs>
                    <linearGradient id="needleRedShiny" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FB7185" />
                        <stop offset="50%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#BE123C" />
                    </linearGradient>

                    <linearGradient id="needleBlueShiny" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#93C5FD" />
                        <stop offset="50%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#1E40AF" />
                    </linearGradient>
                </defs>

                {/* Outer Ring - More Robust for Small Sizes */}
                <circle cx="50" cy="50" r="32" stroke="white" strokeWidth="2.5" fill="none" opacity="0.8" strokeDasharray="30 10" />

                {/* Main Needles (N-S and E-W) - Bolder Paths */}
                {/* E-W Needle (Silver) */}
                <path d="M50 50 L85 50 L50 46 Z" fill="#F1F5F9" />
                <path d="M50 50 L85 50 L50 54 Z" fill="#64748B" />
                <path d="M50 50 L15 50 L50 46 Z" fill="#F1F5F9" />
                <path d="M50 50 L15 50 L50 54 Z" fill="#64748B" />

                {/* N-S Needle (Deep Red/Blue) */}
                <path d="M50 50 L50 15 L46 50 Z" fill="url(#needleRedShiny)" />
                <path d="M50 50 L50 15 L54 50 Z" fill="#881337" />
                <path d="M50 50 L50 85 L46 50 Z" fill="url(#needleBlueShiny)" />
                <path d="M50 50 L50 85 L54 50 Z" fill="#1E3A8A" />

                {/* Center Education Icon - Highly Visible Graduation Cap */}
                <g transform="translate(50, 50)">
                    <circle cx="0" cy="0" r="11" fill="white" className="drop-shadow-sm" />
                    <circle cx="0" cy="0" r="9" fill="#0F172A" />

                    {/* Simplified Bolder Hat */}
                    <path d="M-6 -2 L0 1 L6 -2 L0 -5 Z" fill="#FCD34D" /> {/* Top */}
                    <path d="M-3.5 0.5 V3.5 C-3.5 3.5 -2 5 0 5 C2 5 3.5 3.5 3.5 3.5 V0.5" stroke="#FCD34D" strokeWidth="1.5" fill="none" />
                    <path d="M6 -2 V4" stroke="#FCD34D" strokeWidth="1.5" /> {/* Tassel */}
                </g>

                {/* Labels - Larger for Small Sizes */}
                <text x="50" y="8" fontSize="11" fill="white" fontWeight="900" textAnchor="middle" dominantBaseline="middle">N</text>
                <text x="50" y="93" fontSize="11" fill="white" fontWeight="900" textAnchor="middle" dominantBaseline="middle">S</text>
                <text x="94" y="50" fontSize="11" fill="white" fontWeight="900" textAnchor="middle" dominantBaseline="middle">E</text>
                <text x="6" y="50" fontSize="11" fill="white" fontWeight="900" textAnchor="middle" dominantBaseline="middle">W</text>
            </svg>
        </motion.div>
    );
};

export default Logo3D;
