"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-all duration-300 
                ${isScrolled ? "border-b border-white/5 shadow-lg" : ""} 
                ${!isScrolled ? "md:mix-blend-difference" : ""}
            `}
            style={{
                backgroundColor: isScrolled ? '#000000' : 'transparent'
            }}
        >
            <div className="flex justify-between items-center">
                <div className="text-white text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity cursor-default">
                    Lakshay Gupta
                </div>

                {/* Hamburger - Always opaque */}
                <button
                    className="md:hidden flex flex-col justify-around w-10 h-10 bg-black/80 backdrop-blur-sm rounded-lg border border-white/10 p-2 cursor-pointer z-[1001]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className={`w-full h-[2px] bg-white transition-all ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`w-full h-[2px] bg-white transition-all ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`w-full h-[2px] bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>

                {/* Nav Links */}
                <div className={`
                    md:flex md:gap-8 md:relative md:top-0 md:right-0 md:w-auto md:h-auto md:bg-transparent md:flex-row md:items-center md:justify-center md:p-0
                    fixed top-0 right-0 w-[70%] max-w-[300px] h-screen bg-black flex-col items-center justify-center gap-10 p-8 transition-all duration-300 z-[1000]
                    ${isOpen ? "flex shadow-2xl border-l border-white/10" : "hidden md:flex"}
                `}>
                    <Link href="#home" onClick={(e) => handleNavClick(e, "home")} className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide">
                        Overview
                    </Link>
                    <Link href="#projects" onClick={(e) => handleNavClick(e, "projects")} className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide">
                        Selected Works
                    </Link>
                    <Link href="#currently" onClick={(e) => handleNavClick(e, "currently")} className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide">
                        Expertise
                    </Link>
                    <Link href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-white/70 hover:text-white transition-colors text-sm font-medium tracking-wide">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
}
