"use client";

import { motion } from "framer-motion";

const skills = [
    { emoji: "🍎", title: "iOS Development", desc: "Building native apps with Swift & SwiftUI. Currently developing TallyTrail for subscription tracking." },
    { emoji: "🤖", title: "AI Prototyping", desc: "Experimenting with AI tools like TermsGuard and travel itinerary concepts using Firebase." },
    { emoji: "⚡", title: "Automation", desc: "Exploring workflow tools like n8n and Rilo, focusing on Generative Engine Optimization (GEO)." },
    { emoji: "🎨", title: "UI/UX Design", desc: "Creating Apple-inspired interfaces in Figma. Focus on professional aesthetic standards." }
];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
};

export function Skills() {
    return (
        <section id="currently" className="py-32 bg-black relative">
            <div className="container-custom">
                <motion.div
                    className="mb-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-white text-sm font-medium tracking-widest uppercase opacity-50">
                        02 — What I Do
                    </h2>
                    <p className="max-w-xl text-2xl text-white/80 font-light leading-relaxed">
                        I&apos;m focused on transitioning from <span className="text-white font-normal">academic concepts</span> to <span className="text-white font-normal">real-world applications</span>.
                        Learning the full lifecycle of app development, from UI design to backend integration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="mb-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                {skill.emoji}
                            </div>
                            <h3 className="text-xl text-white font-medium mb-3">{skill.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">
                                {skill.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
