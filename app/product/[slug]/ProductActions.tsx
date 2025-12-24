"use client";

import { useState } from "react";
import GoldButton from "@/components/GoldButton";

export default function ProductActions({ productTitle }: { productTitle: string }) {
    const [message, setMessage] = useState("");
    const whatsappLink = `https://wa.me/91XXXXXXXXXX?text=Hi, I would like to order the ${productTitle}. ${message ? `Custom Message: ${message}` : ''}`;

    return (
        <>
            {/* Customization */}
            <div className="space-y-4 pt-4">
                <label className="block text-xs uppercase tracking-widest text-cocoa-900/60 font-bold">
                    Add a Message Card (Optional)
                </label>
                <textarea
                    className="w-full bg-cream-100 border border-cocoa-200 p-4 text-cocoa-900 focus:outline-none focus:border-gold-400 transition-colors text-sm font-light resize-none placeholder:text-cocoa-300"
                    rows={3}
                    placeholder="Write a sweet note..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            {/* CTA */}
            <div className="pt-6">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full">
                    <GoldButton className="w-full shadow-lg shadow-gold-400/20">
                        Order on WhatsApp
                    </GoldButton>
                </a>
                <p className="text-center text-cocoa-900/40 text-xs mt-4 uppercase tracking-wider font-medium">
                    Secure Payment via UPI / Bank Transfer
                </p>
            </div>
        </>
    );
}
