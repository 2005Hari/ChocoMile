"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import GoldButton from "./GoldButton";
import Link from "next/link"; // Keeping Link
import { motion } from "framer-motion";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.fromTo(
                ".hero-text-main",
                { y: 100, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" }
            )
                .fromTo(
                    ".hero-floating",
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power2.out" },
                    "-=1"
                );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image - Top Down View */}
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-90 md:opacity-80"
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-cocoa-950/40 via-transparent to-cocoa-950/90" />
                {/* Darker overall overlay for text visibility - Reduced for mobile visibility */}
                <div className="absolute inset-0 bg-black/20 md:bg-black/40" />
                {/* Left Side Gradient for Text Contrast - Reduced width on mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-cocoa-950/70 via-cocoa-950/10 to-transparent md:from-cocoa-950/80 md:via-cocoa-950/20" />

                {/* Bottom Fade to Content */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cocoa-950 to-transparent z-10" />
            </div>

            <div className="relative z-10 w-full px-6 md:px-20 max-w-7xl mx-auto mt-0 md:mt-0 flex flex-col justify-center h-full items-start text-left">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="hero-text-main font-serif text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-cream-100 drop-shadow-2xl mb-6 md:mb-8 leading-[0.9] break-words max-w-full">
                        <span className="block text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-script text-gold-400 mb-2 md:mb-4 ml-1 md:ml-2 drop-shadow-lg">The Art of</span>
                        a Chocomile
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="hero-floating text-cocoa-100 text-sm sm:text-base md:text-2xl font-medium tracking-normal md:tracking-wide mb-8 md:mb-12 max-w-full md:max-w-xl pr-2"
                >
                    Ultra-Premium Handcrafted Chocolates. <br />
                    <span className="font-light italic text-cocoa-200/80">Designed for modern gifting.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="hero-floating flex flex-row gap-4 md:gap-8 items-center"
                >
                    <Link href="/collections">
                        <GoldButton className="shadow-lg shadow-gold-400/20 hover:scale-105 active:scale-95 transition-transform duration-300 transform scale-90 md:scale-100 origin-left">Explore Collection</GoldButton>
                    </Link>
                    <a href="https://wa.me/91XXXXXXXXXX" className="text-white font-bold uppercase tracking-widest text-[10px] md:text-xs border-b-2 border-white/50 hover:text-gold-400 hover:border-gold-400 transition-colors pb-1">
                        Order via WhatsApp
                    </a>
                </motion.div>
            </div>


        </section>
    );
}
