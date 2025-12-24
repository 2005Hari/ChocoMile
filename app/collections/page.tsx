"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LuxuryCard from "@/components/LuxuryCard";
import { SIGNATURE_COLLECTIONS, FESTIVE_COLLECTIONS } from "@/lib/products";
import { FESTIVALS } from "@/lib/festivals";
import { cn } from "@/lib/utils";
import { Sparkles, Leaf, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function CollectionsPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const allProducts = [...SIGNATURE_COLLECTIONS, ...FESTIVE_COLLECTIONS];

    const filteredProducts = activeFilter === "all"
        ? allProducts
        : activeFilter === "festive"
            ? FESTIVE_COLLECTIONS
            : SIGNATURE_COLLECTIONS;

    return (
        <main className="bg-cream-100 min-h-screen">
            <Navbar />

            {/* Immersive Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/signature_hamper.png"
                        alt="Handcrafted Chocolates"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-cocoa-950/80 via-cocoa-950/60 to-cream-100" />
                </div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-gold-400 font-bold tracking-[0.2em] text-sm uppercase mb-4 block"
                    >
                        The Collection
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-serif text-cream-100 mb-8"
                    >
                        Handcrafted Perfection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-cream-200/90 text-lg md:text-xl font-light italic"
                    >
                        Every piece is a work of art, rolled by hand and dusted with gold.
                    </motion.p>
                </div>
            </section>

            {/* Filter Navigation */}
            <section className="container mx-auto px-6 -mt-10 relative z-20 mb-16">
                <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg p-2 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto border border-white/40">
                    <button
                        onClick={() => setActiveFilter("all")}
                        className={cn(
                            "px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300",
                            activeFilter === "all"
                                ? "bg-cocoa-900 text-gold-400 shadow-md"
                                : "text-cocoa-600 hover:bg-cocoa-100"
                        )}
                    >
                        All Collections
                    </button>
                    <button
                        onClick={() => setActiveFilter("signature")}
                        className={cn(
                            "px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2",
                            activeFilter === "signature"
                                ? "bg-cocoa-900 text-gold-400 shadow-md"
                                : "text-cocoa-600 hover:bg-cocoa-100"
                        )}
                    >
                        <Gift size={16} /> Signature
                    </button>
                    <button
                        onClick={() => setActiveFilter("festive")}
                        className={cn(
                            "px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2",
                            activeFilter === "festive"
                                ? "bg-cocoa-900 text-gold-400 shadow-md"
                                : "text-cocoa-600 hover:bg-cocoa-100"
                        )}
                    >
                        <Sparkles size={16} /> Festive Edit
                    </button>
                </div>
            </section>

            {/* Product Grid */}
            <section className="container mx-auto px-6 pb-24">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {filteredProducts.map((product) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={product.id}
                        >
                            <LuxuryCard
                                title={product.title}
                                subtitle={product.subtitle}
                                image={product.image}
                                href={product.href}
                                price={product.price}
                                className="h-full bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border border-cocoa-100/50"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 text-cocoa-400 italic">
                        No collections found in this category.
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
