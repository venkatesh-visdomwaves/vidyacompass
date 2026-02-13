import React from 'react';
import { motion } from 'framer-motion';
import TubesBackground from '../ui/neon-flow';

const VisdomWaves = () => {
    return (
        <TubesBackground className="h-[500px]">
            <div className="flex flex-col items-center justify-center w-full h-full text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 pointer-events-none"
                >
                    <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-2 tracking-wide">
                        Powered By
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                            VisdomWaves
                        </span>
                    </h1>
                    <p className="text-lg text-slate-400 font-light tracking-[0.2em] uppercase">
                        Driven by Vision
                    </p>
                </motion.div>

                <div className="absolute bottom-8 flex flex-col items-center gap-2 text-white/50 animate-pulse pointer-events-none">
                    <span className="text-[10px] uppercase tracking-widest">Click to randomize colors</span>
                </div>
            </div>
        </TubesBackground>
    );
};

export default VisdomWaves;
