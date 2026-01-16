"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const certificates = [
    { src: "/assets/geek1.jpg", alt: "GeeksforGeeks Certificate" },
    { src: "/assets/geek2.jpg", alt: "GeeksforGeeks Certificate 2" },
    { src: "/assets/microsoft.png", alt: "Microsoft Certificate" },
];

export function Certificates() {
    return (
        <section id="certificates" className="py-32 bg-black relative">
            <div className="container-custom">
                <motion.div
                    className="mb-20 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-white text-sm font-medium tracking-widest uppercase opacity-50">
                        02 — Credentials
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="group relative aspect-[4/3] w-full overflow-hidden rounded-[20px] border border-white/10 bg-white/5"
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Image
                                src={cert.src}
                                alt={cert.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <p className="text-white text-sm font-medium tracking-wide">{cert.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
