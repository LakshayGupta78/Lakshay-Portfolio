"use client";

import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

export function Hero() {
    const handleScrollToCurrently = () => {
        const element = document.getElementById("currently");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-[120px]">
            <motion.div
                className="max-w-4xl"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    className="text-sm font-medium tracking-widest text-white/50 mb-8 uppercase"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Student Developer — Apple Ecosystem & AI
                </motion.p>
                <motion.h1
                    className="text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.9] text-white tracking-tighter mb-10 mix-blend-difference"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    Building the <br />
                    <span className="text-white/40">future, one app at a time.</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-white/70 max-w-2xl leading-relaxed font-light mb-16"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    I&apos;m <span className="text-white font-normal">Lakshay Gupta</span> — an 18-year-old BCA student focused on iOS development and AI-driven automation. Currently building a foundation in the Apple ecosystem while exploring the intersection of design and technology.
                </motion.p>

                <motion.div
                    className="flex items-center gap-12"
                    variants={fadeInUp}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div
                        onClick={handleScrollToCurrently}
                        className="group flex items-center gap-4 cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-white">
                            <span className="text-xl">↓</span>
                        </div>
                        <span className="text-white text-sm font-medium tracking-wide uppercase group-hover:opacity-80 transition-opacity">
                            Explore Work
                        </span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
