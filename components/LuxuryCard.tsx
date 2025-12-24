"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LuxuryCardProps {
    title: string;
    subtitle?: string;
    image: string;
    href: string;
    price?: string;
    className?: string;
}

export default function LuxuryCard({ title, subtitle, image, href, price, className }: LuxuryCardProps) {
    return (
        <Link href={href} className={cn("group block relative", className)}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:shadow-2xl group-hover:shadow-gold-400/20 group-hover:-translate-y-2">
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                {/* Bloom Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gold-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Quick View Button (appears on hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="bg-white/95 backdrop-blur-md text-cocoa-900 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-gold-500 hover:text-white transition-colors transform hover:scale-105 active:scale-95 duration-200">
                        Quick View
                    </span>
                </div>
            </div>

            <div className="mt-3 md:mt-5 text-center">
                <h3 className="text-lg md:text-xl font-serif font-bold text-cocoa-900 group-hover:text-gold-600 transition-colors duration-300">
                    {title}
                </h3>
                {subtitle && (
                    <p className="text-sm text-cocoa-800/60 font-medium tracking-wide mt-1 group-hover:text-cocoa-800/80 transition-colors">
                        {subtitle}
                    </p>
                )}
                {price && (
                    <div className="inline-block mt-3 bg-cocoa-50 px-4 py-1.5 rounded-full border border-cocoa-100 group-hover:border-gold-200 transition-colors">
                        <p className="text-gold-600 font-bold text-sm tracking-tight">{price}</p>
                    </div>
                )}
            </div>
        </Link>
    );
}
