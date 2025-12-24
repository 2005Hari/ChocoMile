"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/collections" },
        { name: "Our Story", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out",
                scrolled
                    ? "bg-cream-100/90 backdrop-blur-md py-4 shadow-sm"
                    : "bg-transparent py-6 bg-gradient-to-b from-black/50 to-transparent"
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className={cn(
                        "text-3xl md:text-4xl font-serif font-black tracking-tight transition-colors duration-300",
                        scrolled ? "text-cocoa-900" : "text-cream-100 drop-shadow-md"
                    )}
                >
                    Chocomile
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-bold tracking-wide transition-colors duration-300 hover:text-gold-400",
                                scrolled ? "text-cocoa-900" : "text-cream-100/90"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/91XXXXXXXXXX"
                        className={cn(
                            "px-6 py-2.5 rounded-full transition-all duration-300 text-xs font-bold uppercase tracking-widest hover:scale-105",
                            scrolled
                                ? "bg-cocoa-900 text-gold-100 hover:bg-gold-400 hover:text-white"
                                : "bg-cream-100 text-cocoa-900 hover:bg-gold-400 hover:text-white shadow-lg"
                        )}
                    >
                        Order Now
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden transition-colors duration-300",
                        scrolled ? "text-cocoa-900" : "text-cream-100"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-cream-100 border-t border-cocoa-200 p-8 md:hidden flex flex-col items-center gap-6 shadow-lg rounded-b-3xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-cocoa-900 text-lg font-serif font-bold hover:text-gold-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/91XXXXXXXXXX"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-cocoa-900 text-white px-8 py-3 w-full rounded-full text-center uppercase tracking-widest font-bold hover:bg-gold-500 transition-colors"
                        >
                            Order Now
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
