"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Reveal Text
            const texts = document.querySelectorAll(".reveal-text");
            texts.forEach((text) => {
                gsap.fromTo(
                    text,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        scrollTrigger: {
                            trigger: text,
                            start: "top 80%",
                        },
                    }
                );
            });

            // Parallax Image
            gsap.to(".parallax-img", {
                yPercent: -20,
                ease: "none",
                scrollTrigger: {
                    trigger: ".parallax-section",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={containerRef} className="bg-background min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="h-[70vh] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2670&auto=format&fit=crop"
                        alt="Chocolate Background"
                        fill
                        className="object-cover grayscale"
                    />
                </div>
                <div className="relative z-10 text-center space-y-6">
                    <h1 className="reveal-text text-5xl md:text-7xl font-serif text-cocoa-900">Our Story</h1>
                    <p className="reveal-text text-gold-500 uppercase tracking-widest text-sm font-bold">Est. 2025</p>
                </div>
            </section>

            {/* Narrative Section */}
            <section className="py-32 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="reveal-text text-4xl font-serif text-cocoa-900">The Art of Slow Luxury</h2>
                    <div className="reveal-text w-24 h-[1px] bg-gold-400" />
                    <p className="reveal-text text-cocoa-800 leading-relaxed font-light text-lg">
                        In a world of mass production, we chose to slow down. a Chocomile was born out of a desire
                        to bring back the elegance of gifting. We believe that chocolate is not just a sweet treat,
                        but a medium of expression—love, gratitude, and celebration.
                    </p>
                    <p className="reveal-text text-cocoa-900/70 leading-relaxed font-light">
                        Each truffle, bar, and praline is handcrafted by Paridhi in small batches, ensuring that every
                        bite tells a story of passion, patience, and perfection.
                    </p>
                </div>
                <div className="parallax-section relative aspect-[3/4] overflow-hidden border border-cocoa-200/50 rounded-sm shadow-xl">
                    <Image
                        src="https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=2532&auto=format&fit=crop"
                        alt="Chocolatier at work"
                        fill
                        className="parallax-img object-cover scale-125"
                    />
                </div>
            </section>

            {/* Philosophy */}
            <section className="py-32 bg-cream-100 border-y border-cocoa-100 text-center">
                <div className="container mx-auto px-6 max-w-4xl space-y-12">
                    <h2 className="reveal-text text-4xl md:text-5xl font-serif text-gold-gradient italic">
                        "We don't just sell chocolate. We curate moments."
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="reveal-text space-y-4">
                            <span className="text-4xl">🌱</span>
                            <h3 className="text-xl font-serif text-cocoa-900">Ethical Sourcing</h3>
                            <p className="text-sm text-cocoa-900/60 font-medium">
                                Single-origin cocoa sourced directly from responsible farms in South India and Ghana.
                            </p>
                        </div>
                        <div className="reveal-text space-y-4">
                            <span className="text-4xl">🖐️</span>
                            <h3 className="text-xl font-serif text-cocoa-900">Handcrafted</h3>
                            <p className="text-sm text-cocoa-900/60 font-medium">
                                No machines. Made by hand, fresh after order, ensuring zero presets.
                            </p>
                        </div>
                        <div className="reveal-text space-y-4">
                            <span className="text-4xl">🧈</span>
                            <h3 className="text-xl font-serif text-cocoa-900">Pure Ingredients</h3>
                            <p className="text-sm text-cocoa-900/60 font-medium">
                                Real cocoa butter, expensive nuts, and festive spices. No vegetable oil.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
