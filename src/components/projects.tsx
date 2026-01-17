"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
    {
        title: "Xcode App – Practice Portfolio (Swift, Xcode)",
        description:
            "A learning-focused native iOS app created using Swift and Xcode. This simple project served as a hands-on introduction to UIKit, layouts, and basic navigation within iOS apps. It helped explore how to structure views, use Swift for UI logic, and understand the iOS app lifecycle",
        image: "/assets/xcodeproject.png",
        imageFirst: true,
    },
    {
        title: "DC to AC Inverter (Electronics Project)",
        description:
            "A basic DIY electronics project to convert 12V DC to 230V AC using a square wave oscillator circuit and transformer. Designed and tested on a breadboard, this project explores practical applications of switching circuits and power conversion fundamentals",
        image: "/assets/electrical.jpg",
        imageFirst: false,
    },
    {
        title: "Weather App (HTML, CSS, JavaScript + API)",
        description:
            "A responsive weather web app that fetches live weather data using a public API. Users can search for any city to get real-time temperature, weather status, and icons. JavaScript handles API requests and DOM updates, while CSS keeps the UI clean and user-friendly",
        image: "/assets/weatherapp.jpg",
        imageFirst: true,
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });

    // Parallax values
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const y = useTransform(scrollYProgress, [0, 1], [300, -100]); // Increased range
    const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                opacity,
                y,
                rotateX: rotate
            }}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-20 max-w-6xl mx-auto perspective-1000"
        >
            {project.imageFirst ? (
                <>
                    <div className="flex-1 w-full relative group order-1 md:order-1">
                        <div className="absolute -inset-4 rounded-[30px] bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="relative w-full aspect-video rounded-[20px] object-cover transition-all duration-700 hover:scale-[1.02]"
                        />
                    </div>
                    <div className="flex-1 order-2 md:order-2">
                        <h3 className="text-3xl text-white font-bold mb-6 tracking-tight">{project.title}</h3>
                        <p className="text-lg text-white/90 leading-relaxed font-normal">
                            {project.description}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex-1 order-2 md:order-1">
                        <h3 className="text-3xl text-white font-bold mb-6 tracking-tight">{project.title}</h3>
                        <p className="text-lg text-white/90 leading-relaxed font-normal">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex-1 w-full relative group order-1 md:order-2">
                        <div className="absolute -inset-4 rounded-[30px] bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"></div>
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="relative w-full aspect-video rounded-[20px] object-cover transition-all duration-700 hover:scale-[1.02]"
                        />
                    </div>
                </>
            )}
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="py-32 bg-black relative">
            <div className="container-custom">
                <div className="mb-32 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start gap-8">
                    <h2 className="text-white text-sm font-medium tracking-widest uppercase opacity-50">
                        05 — Selected Works
                    </h2>
                </div>

                <div className="space-y-32">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
