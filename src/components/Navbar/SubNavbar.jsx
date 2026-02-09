import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * SubNavbar Component
 * 
 * Provides secondary navigation for Home page sections.
 * Positioned below Hero section with dynamic color themes based on active section.
 */
const SubNavbar = () => {
    const [activeLink, setActiveLink] = useState('#about');
    const [isSticky, setIsSticky] = useState(false);

    // Define sub-navigation links with their color themes
    const subNavLinks = [
        {
            name: 'About',
            href: '#about',
            bgGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(37, 99, 235, 0.95) 100%)',
            textColor: 'text-blue-100',
            activeColor: '#60A5FA',
            borderColor: 'border-blue-700/50',
            glowColor: 'rgba(96, 165, 250, 0.3)'
        },
        {
            name: 'Features',
            href: '#features',
            bgGradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.95) 0%, rgba(147, 51, 234, 0.95) 100%)',
            textColor: 'text-purple-100',
            activeColor: '#C084FC',
            borderColor: 'border-purple-700/50',
            glowColor: 'rgba(192, 132, 252, 0.3)'
        },
        {
            name: 'Modules',
            href: '#modules',
            bgGradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%)',
            textColor: 'text-emerald-100',
            activeColor: '#34D399',
            borderColor: 'border-emerald-700/50',
            glowColor: 'rgba(52, 211, 153, 0.3)'
        },
        {
            name: 'Challenges',
            href: '#challenges',
            bgGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.95) 0%, rgba(249, 115, 22, 0.95) 100%)',
            textColor: 'text-orange-100',
            activeColor: '#FB923C',
            borderColor: 'border-orange-700/50',
            glowColor: 'rgba(251, 146, 60, 0.3)'
        }
    ];

    // Get current section theme
    const getCurrentTheme = () => {
        return subNavLinks.find(link => link.href === activeLink) || subNavLinks[0];
    };

    const currentTheme = getCurrentTheme();

    // Scroll Spy - Track which section is currently in view
    useEffect(() => {
        const handleScrollSpy = () => {
            const sections = subNavLinks.map(link => link.href.substring(1));
            const scrollPosition = window.scrollY + 150;

            let currentSection = '#about';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        currentSection = `#${section}`;
                        break;
                    }
                }
            }
            setActiveLink(currentSection);
        };

        window.addEventListener('scroll', handleScrollSpy, { passive: true });
        handleScrollSpy();
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    // Check if navbar should be sticky
    useEffect(() => {
        const handleSticky = () => {
            const heroSection = document.getElementById('home');
            if (heroSection) {
                const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
                setIsSticky(window.scrollY >= heroBottom - 64); // 64px for main navbar height
            }
        };

        window.addEventListener('scroll', handleSticky, { passive: true });
        handleSticky();
        return () => window.removeEventListener('scroll', handleSticky);
    }, []);

    const handleNavClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            const offset = 128; // Account for both navbars when sticky
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setActiveLink(href);
    };

    return (
        <motion.div
            className={`${isSticky ? 'sticky top-16' : 'relative'} z-40 transition-all duration-500`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                key={activeLink}
                initial={{ background: currentTheme.bgGradient }}
                animate={{ background: currentTheme.bgGradient }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className={`backdrop-blur-sm border-b ${currentTheme.borderColor} shadow-md`}
                style={{
                    background: currentTheme.bgGradient,
                    boxShadow: `0 2px 10px ${currentTheme.glowColor}`
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center h-10 gap-4 md:gap-8">
                        {subNavLinks.map((link) => {
                            const isActive = activeLink === link.href;

                            return (
                                <motion.button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    whileHover={{ scale: 1.03, y: -1 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`relative text-xs md:text-sm font-medium transition-all duration-300 px-3 py-1 rounded-md ${isActive
                                        ? 'text-white bg-white/15 shadow-md'
                                        : `${currentTheme.textColor} hover:text-white hover:bg-white/5`
                                        }`}
                                >
                                    {link.name}

                                    {/* Active State Indicator */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <>
                                                <motion.span
                                                    initial={{ scaleX: 0, opacity: 0 }}
                                                    animate={{ scaleX: 1, opacity: 1 }}
                                                    exit={{ scaleX: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                                                    style={{
                                                        backgroundColor: link.activeColor,
                                                        boxShadow: `0 0 6px ${link.activeColor}80`
                                                    }}
                                                />
                                                <motion.span
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    className="absolute inset-0 -z-10 rounded-md blur-sm"
                                                    style={{
                                                        backgroundColor: link.activeColor,
                                                        opacity: 0.15
                                                    }}
                                                />
                                            </>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>

                {/* Animated Bottom Line */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-[1px]"
                    style={{
                        background: `linear-gradient(to right, transparent, ${currentTheme.activeColor}60, transparent)`,
                        boxShadow: `0 0 4px ${currentTheme.glowColor}`
                    }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default SubNavbar;
