"use client";

import { motion } from "framer-motion";
import MeltingDivider from "@/components/MeltingDivider";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    const staggerContainer = {
        visible: { transition: { staggerChildren: 0.15 } }
    };

    return (
        <main className="min-h-screen bg-cocoa-950 text-foreground overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 text-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <motion.h1
                        variants={fadeIn}
                        className="text-5xl md:text-7xl font-serif font-bold text-gold-gradient tracking-tight"
                    >
                        Get in Touch
                    </motion.h1>
                    <motion.p
                        variants={fadeIn}
                        className="text-lg md:text-xl text-cocoa-200/80 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Whether for bespoke orders, corporate gifting, or just to say hello, we are here to make your chocolate dreams come true.
                    </motion.p>
                </motion.div>
            </section>

            <MeltingDivider color="#1A100E" />

            {/* Content Grid */}
            <div className="bg-cocoa-900 pb-32 pt-20">
                <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="space-y-12"
                    >
                        <motion.div variants={fadeIn}>
                            <h2 className="text-3xl font-serif text-gold-200 mb-6">Our Atelier</h2>
                            <p className="text-cocoa-100/70 leading-relaxed mb-8">
                                Visit our flagship boutique and chocolate laboratory to witness the magic of chocolate making firsthand.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-cocoa-800/50 rounded-full border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                                        <MapPin className="w-6 h-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg text-gold-100">Address</h3>
                                        <p className="text-cocoa-200/60">123 Chocolate Avenue, <br />Sweet Dipper District, CA 90210</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-cocoa-800/50 rounded-full border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                                        <Mail className="w-6 h-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg text-gold-100">Email</h3>
                                        <p className="text-cocoa-200/60">concierge@chocomile.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-cocoa-800/50 rounded-full border border-gold-500/20 group-hover:border-gold-500/50 transition-colors">
                                        <Phone className="w-6 h-6 text-gold-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-lg text-gold-100">Phone</h3>
                                        <p className="text-cocoa-200/60">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn} className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl border border-gold-500/10 grayscale hover:grayscale-0 transition-all duration-700 bg-cocoa-950">
                            {/* Placeholder for map or store image */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cocoa-800 to-cocoa-950 flex items-center justify-center">
                                <span className="text-cocoa-500/30 font-serif italic text-2xl">Atelier Preview</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-gold-400/5 rounded-2xl blur-2xl -z-10" />
                        <form className="bg-cocoa-950/50 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gold-500/10 space-y-6 shadow-2xl">
                            <h2 className="text-3xl font-serif text-gold-200 mb-2">Send a Message</h2>
                            <p className="text-cocoa-200/50 mb-8 text-sm">We typically respond within 24 hours.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormInput label="First Name" placeholder="Jane" />
                                <FormInput label="Last Name" placeholder="Doe" />
                            </div>

                            <FormInput label="Email Address" type="email" placeholder="jane@example.com" />
                            <FormInput label="Subject" placeholder="Inquiry about..." />

                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gold-500/60 pl-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-cocoa-900/30 border border-gold-500/20 rounded-lg p-4 text-cocoa-100 placeholder:text-cocoa-500/50 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/50 transition-all resize-none"
                                    placeholder="Tell us about your chocolate desires..."
                                />
                            </div>

                            <button className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-cocoa-950 font-serif font-bold text-lg rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 mt-4">
                                <span>Send Message</span>
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            {/* Bottom Melt if needed, or footer handles it */}
        </main>
    );
}

function FormInput({ label, type = "text", placeholder }: { label: string, type?: string, placeholder?: string }) {
    return (
        <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gold-500/60 pl-1">{label}</label>
            <input
                type={type}
                className="w-full bg-cocoa-900/30 border border-gold-500/20 rounded-lg px-4 py-3 text-cocoa-100 placeholder:text-cocoa-500/50 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/50 transition-all"
                placeholder={placeholder}
            />
        </div>
    );
}
