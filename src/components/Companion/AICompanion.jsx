import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrophone, FaVolumeUp, FaTimes, FaRobot } from 'react-icons/fa';
import './AICompanion.css';

/**
 * AICompanion Component
 * 
 * A premium 3D-styled AI robot that supports:
 * - Voice recognition for site navigation.
 * - Text-to-speech feedback.
 * - Autonomous form filling.
 */
const AICompanion = () => {
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [lastCommand, setLastCommand] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const recognitionRef = useRef(null);

    // Voice Function: Speak Text with Phonetic Adjustments for Branding
    const speak = (text) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();

        // Phonetic fix for Telugu-style "Vidya" -> "Vee-dhya" or "Vid-yaa"
        let processedText = text.replace(/Vidya/gi, "Vid-yaa");

        const utterance = new SpeechSynthesisUtterance(processedText);
        utterance.rate = 0.9; // Slightly slower for clarity
        utterance.pitch = 1.2; // Friendly robot tone
        utterance.onstart = () => setIsSpeaking(true);
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
    };

    // Command Processor: Navigation and Interaction
    const processCommand = useCallback((cmd) => {
        if (cmd.includes("home") || cmd.includes("modati") || cmd.includes("start")) {
            window.location.hash = "#home";
            speak("Navigating to Home. Mana modati page ki veltunnam.");
        } else if (cmd.includes("about") || cmd.includes("evari") || cmd.includes("who")) {
            window.location.hash = "#about";
            speak("This is about Vidya Compass. Mana gurinchi ikkada undi.");
        } else if (cmd.includes("feature") || cmd.includes("panulu")) {
            window.location.hash = "#features";
            speak("Exploring our features. Mana features chudandi.");
        } else if (cmd.includes("contact") || cmd.includes("form") || cmd.includes("matladu")) {
            window.location.hash = "#contact";
            speak("Let's get in touch. Form fill cheyyadaniki ready ga unnanu.");
        } else if (cmd.includes("fill name") || cmd.includes("peru")) {
            const name = cmd.split("peru")[1] || cmd.split("name is")[1] || cmd.split("fill name")[1];
            const input = document.querySelector('input[placeholder="Enter your name"]');
            if (input) {
                input.value = name.trim();
                speak(`Correct, filling name as ${name}`);
            }
        } else if (cmd.includes("welcome") || cmd.includes("namaste")) {
            speak("Namaste! Welcome to Vidya Compass. I am your AI companion. How can I help you today?");
        } else {
            speak("I heard " + cmd + ". Try saying Home, About, or Contact.");
        }
    }, []);

    // Initialize Speech Synthesis & Recognition
    useEffect(() => {
        if (window.webkitSpeechRecognition) {
            const SpeechRecognition = window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = 'en-US';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript.toLowerCase();
                setLastCommand(transcript);
                processCommand(transcript);
                setIsListening(false);
            };

            recognitionRef.current.onerror = () => setIsListening(false);
            recognitionRef.current.onend = () => setIsListening(false);
        }
    }, [processCommand]);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            setIsListening(true);
            recognitionRef.current?.start();
        }
    };

    // Auto-welcome on first open
    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                speak("Namaste! Welcome to Vidya Compass. Mana site navigate cheyyadaniki, mic click chesi command cheppandi. I can help you find Home, About, or Contact.");
            }, 500);
        }
    }, [isOpen]);

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end gap-2 md:gap-4">

            {/* 3D Character UI */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: 100 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 100 }}
                        className="companion-bubble relative mb-4"
                    >
                        {/* Robot Body System */}
                        <div className="robot-container">
                            {/* Matte White Head */}
                            <div className="robot-head">
                                <div className="ear left-ear"></div>
                                <div className="ear right-ear"></div>

                                {/* Black Visor with Glowing Eyes */}
                                <div className="visor">
                                    <div className={`eye ${isListening ? 'listening' : ''}`}></div>
                                    <div className={`eye ${isListening ? 'listening' : ''}`}></div>
                                </div>

                                {/* Animated Mouth */}
                                <div className="mouth-container">
                                    <div className={`mouth-bar ${isSpeaking ? 'speaking' : ''}`}></div>
                                    <div className={`mouth-bar ${isSpeaking ? 'speaking' : ''}`}></div>
                                    <div className={`mouth-bar ${isSpeaking ? 'speaking' : ''}`}></div>
                                </div>
                            </div>

                            {/* White Torso & Limbs */}
                            <div className="robot-body">
                                <div className="arm left-arm"></div>
                                <div className="arm right-arm"></div>
                                <div className="leg left-leg"></div>
                                <div className="leg right-leg"></div>
                            </div>
                        </div>

                        {/* Instructional Overlay - Positioned to side/above to avoid covering face */}
                        <div className="absolute bottom-full mb-6 md:mb-0 right-0 md:right-full md:bottom-0 md:mr-8 bg-white shadow-2xl rounded-2xl p-4 border border-blue-50 w-64 md:w-72">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-600 mb-2">How to use me 🎙️</h4>
                            <ul className="text-[10px] text-gray-600 space-y-1.5 list-disc pl-3">
                                <li>Click the **Microphone** to start speaking</li>
                                <li>Say **"Go to About"** to navigate</li>
                                <li>Say **"Fill name [Your Name]"** in Contact</li>
                                <li>I speak **Telugu & English** (Namaste!)</li>
                            </ul>
                            <div className="mt-3 pt-2 border-t border-gray-100 italic text-[10px] text-blue-400">
                                {lastCommand ? `I heard: "${lastCommand}"` : "Try saying: 'Take me to Contact'"}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Control Button */}
            <div className="flex gap-2">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleListening}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${isListening ? 'bg-red-500 animate-pulse' : 'bg-primary-600'}`}
                >
                    <FaMicrophone className="text-white text-xl" />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all ${isOpen ? 'bg-red-500' : 'bg-black'}`}
                >
                    {isOpen ? <FaTimes className="text-white text-xl" /> : <FaRobot className="text-white text-xl" />}
                </motion.button>
            </div>

        </div>
    );
};

export default AICompanion;
