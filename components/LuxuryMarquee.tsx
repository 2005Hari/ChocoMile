"use client";

import { motion } from "framer-motion";

export default function LuxuryMarquee() {
    const marqueeText = [
        "Handcrafted in Belgium",
        "100% Sustainable Cocoa",
        "Artisanal Quality",
        "The Art of a Chocomile",
        "Exquisite Flavors",
        "Luxury Gift Packaging",
    ];

    return (
        <div className="relative w-full overflow-hidden bg-cocoa-950 py-6 border-y border-gold-500/20">
            <div className="absolute inset-0 bg-gold-400/5 pointer-events-none" />
            <div className="flex whitespace-nowrap">
                <MarqueeContent text={marqueeText} />
                <MarqueeContent text={marqueeText} />
                <MarqueeContent text={marqueeText} />
                <MarqueeContent text={marqueeText} />
            </div>
        </div>
    );
}

function MarqueeContent({ text }: { text: string[] }) {
    return (
        <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            className="flex items-center shrink-0"
        >
            {text.map((item, i) => (
                <div key={i} className="flex items-center mx-4 md:mx-8">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold-500 mx-3 md:mx-6 opacity-60" />
                    <span className="text-lg md:text-2xl font-serif text-cocoa-100/90 tracking-wider">
                        {item}
                    </span>
                </div>
            ))}
        </motion.div>
    );
}
