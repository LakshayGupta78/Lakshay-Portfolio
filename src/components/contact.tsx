"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const socialLinks = [
    { href: "https://www.instagram.com/lakshaygupta1783/", icon: "/assets/instagram-icon.svg", alt: "Instagram", useSvg: false },
    { href: "https://www.linkedin.com/in/lakshay-gupta-bb1775376/", icon: "/assets/linkedin-logo.webp", alt: "LinkedIn", useSvg: false },
    { href: "https://github.com/LakshayGupta78", icon: "/assets/github-logo.png", alt: "GitHub", useSvg: false },
];

export function Contact() {
    return (
        <section id="contact" className="py-32 bg-black relative">
            <div className="container-custom">
                <div className="border-t border-white/10 pt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-[clamp(3rem,6vw,5rem)] font-semibold leading-[0.9] text-white tracking-tighter mb-8 mix-blend-difference">
                                Let&apos;s build <br />
                                <span className="text-white/40">something new.</span>
                            </h2>
                            <p className="text-xl text-white/60 font-light max-w-md">
                                Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <motion.div
                                className="mt-12"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <a
                                    href="mailto:lakshaygupta953@gmail.com"
                                    className="inline-block text-2xl text-white font-medium border-b border-white/30 pb-1 hover:border-white transition-colors"
                                >
                                    lakshaygupta953@gmail.com
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="flex flex-col justify-end items-start md:items-end gap-10"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="flex gap-8">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                            <Image
                                                src={link.icon}
                                                alt={link.alt}
                                                width={24}
                                                height={24}
                                                className="w-6 h-6 object-contain brightness-0 invert group-hover:brightness-0 group-hover:invert-0 transition-all"
                                            />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            <motion.div
                                className="text-right"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                <p className="text-white/40 text-sm uppercase tracking-widest mb-2">Location</p>
                                <p className="text-white text-lg font-light">New Delhi, India</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="mt-32 flex justify-between items-end text-white/20 text-xs uppercase tracking-widest font-medium"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div>© 2024 Lakshay Gupta.</div>
                        <div>Designed & Engineered.</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
