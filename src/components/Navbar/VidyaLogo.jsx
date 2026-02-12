import React from "react";
import { motion } from "framer-motion";

const VidyaLogo = ({ className = "w-10 h-10 md:w-12 md:h-12" }) => {
    return (
        <motion.div
            className={`relative ${className}`}
        >
            <img
                src="/logovw.jpeg"
                alt="Vidya Logo"
                className="w-full h-full object-contain"
            />
        </motion.div>
    );
};

export default VidyaLogo;
