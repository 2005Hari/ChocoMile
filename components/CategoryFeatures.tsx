"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react";

// Expanded data with multiple "stories" per category
const categories = [
    {
        name: "Luxury Hampers",
        thumbnail: "/signature_hamper.png",
        stories: [
            { type: "image", src: "/signature_hamper.png", duration: 5000 },
            { type: "image", src: "/hazelnut_praline.png", duration: 5000 }
        ]
    },
    {
        name: "Festive Bark",
        thumbnail: "/festive_bark.png",
        stories: [
            { type: "image", src: "/festive_bark.png", duration: 5000 }
        ]
    },
    {
        name: "Dark Truffles",
        thumbnail: "/artisanal_truffles.png",
        stories: [
            { type: "image", src: "/artisanal_truffles.png", duration: 5000 }
        ]
    },
    {
        name: "Milk Chocolates",
        thumbnail: "/signature_hamper.png",
        stories: [
            { type: "image", src: "/signature_hamper.png", duration: 5000 }
        ]
    },
    {
        name: "Assorted Box",
        thumbnail: "/artisanal_truffles.png",
        stories: [
            { type: "image", src: "/artisanal_truffles.png", duration: 5000 },
            { type: "image", src: "/hazelnut_praline.png", duration: 5000 }
        ]
    },
];

export default function CategoryFeatures() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState<number | null>(null);
    const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const activeCategory = activeCategoryIndex !== null ? categories[activeCategoryIndex] : null;

    const closeStory = useCallback(() => {
        setActiveCategoryIndex(null);
        setCurrentStoryIndex(0);
        setProgress(0);
    }, []);

    const nextStory = useCallback(() => {
        if (!activeCategory) return;

        if (currentStoryIndex < activeCategory.stories.length - 1) {
            // Next slide in current category
            setCurrentStoryIndex(prev => prev + 1);
            setProgress(0);
        } else {
            // Next category
            if (activeCategoryIndex !== null && activeCategoryIndex < categories.length - 1) {
                setActiveCategoryIndex(prev => (prev as number) + 1);
                setCurrentStoryIndex(0);
                setProgress(0);
            } else {
                closeStory();
            }
        }
    }, [activeCategory, currentStoryIndex, activeCategoryIndex, closeStory]);

    const prevStory = useCallback(() => {
        if (currentStoryIndex > 0) {
            setCurrentStoryIndex(prev => prev - 1);
            setProgress(0);
        } else {
            // Previous category
            if (activeCategoryIndex !== null && activeCategoryIndex > 0) {
                setActiveCategoryIndex(prev => (prev as number) - 1);
                // Set to last story of previous category
                // We need to access categories inside set state or just use the index
                const prevCat = categories[(activeCategoryIndex as number) - 1];
                setCurrentStoryIndex(prevCat.stories.length - 1);
                setProgress(0);
            }
        }
    }, [activeCategoryIndex, currentStoryIndex]);

    // Auto-advance
    useEffect(() => {
        if (activeCategoryIndex === null || !activeCategory) return;

        const duration = activeCategory.stories[currentStoryIndex].duration;
        const intervalTime = 50; // Update every 50ms for smooth bar
        const increment = 100 / (duration / intervalTime);

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    nextStory();
                    return 0; // Reset conceptually, though nextStory handles it
                }
                return prev + increment;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [activeCategoryIndex, currentStoryIndex, nextStory, activeCategory]);


    return (
        <section className="py-20 bg-cream-100 text-center relative z-20">
            <h2 className="text-4xl font-serif text-cocoa-800 mb-2">Categories Features</h2>
            <div className="w-16 h-[2px] bg-gold-400 mx-auto mb-12" />

            <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-center gap-5 md:gap-10">
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-2 md:gap-4 group cursor-pointer"
                        onClick={() => setActiveCategoryIndex(idx)}
                    >
                        <div className="w-16 h-16 md:w-32 md:h-32 rounded-full p-[2px] md:p-[3px] bg-gradient-to-tr from-gold-300 to-cocoa-500 hover:from-gold-400 hover:to-gold-200 transition-all duration-500 relative">
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-white border md:border-2 border-white">
                                <Image
                                    src={cat.thumbnail}
                                    alt={cat.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                        </div>
                        <span className="text-cocoa-900 font-medium text-xs md:text-base text-center max-w-[80px] md:max-w-none leading-tight">{cat.name}</span>
                    </div>
                ))}
            </div>

            {/* Story Viewer Overlay */}
            <AnimatePresence>
                {activeCategoryIndex !== null && activeCategory && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-0 md:p-8"
                    >
                        {/* Close Button Mobile */}
                        <button
                            onClick={closeStory}
                            className="absolute top-6 right-6 z-50 text-white md:hidden"
                        >
                            <X size={32} />
                        </button>

                        <div className="relative w-full md:max-w-md md:aspect-[9/16] h-full md:h-auto bg-cocoa-950 md:rounded-2xl overflow-hidden shadow-2xl flex flex-col">

                            {/* Progress Bars */}
                            <div className="absolute top-0 left-0 w-full z-20 p-2 md:p-4 flex gap-1 h-3 md:h-4">
                                {activeCategory.stories.map((_, index) => (
                                    <div key={index} className="h-full flex-1 bg-white/30 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-white transition-all duration-100 ease-linear"
                                            style={{
                                                width: index < currentStoryIndex ? '100%' :
                                                    index === currentStoryIndex ? `${progress}%` : '0%'
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Header User Info */}
                            <div className="absolute top-6 left-0 w-full z-20 px-4 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/50 relative">
                                    <Image src={activeCategory.thumbnail} alt="thumb" fill className="object-cover" />
                                </div>
                                <span className="text-white font-bold tracking-wide text-sm drop-shadow-md">{activeCategory.name}</span>
                                <span className="text-white/60 text-xs ml-auto font-light">Sponsored</span>
                                <button onClick={closeStory} className="text-white/80 hover:text-white hidden md:block">
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Story Content */}
                            <div className="relative flex-1 bg-black">
                                <Image
                                    src={activeCategory.stories[currentStoryIndex].src}
                                    alt="Story"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

                                {/* Tap Nav Areas */}
                                <div className="absolute inset-0 z-10 flex">
                                    <div className="w-1/3 h-full" onClick={prevStory} />
                                    <div className="w-2/3 h-full" onClick={nextStory} />
                                </div>
                            </div>

                            {/* Bottom Actions */}
                            <div className="absolute bottom-0 left-0 w-full z-20 p-4 md:p-6 flex justify-between items-center text-white">
                                <div className="flex-1 bg-white/10 backdrop-blur-md rounded-full px-4 py-3 border border-white/20 text-sm text-white/70">
                                    Reply to {activeCategory.name}...
                                </div>
                                <div className="flex gap-4 ml-4">
                                    <Heart className="w-6 h-6 hover:fill-red-500 hover:text-red-500 transition-colors cursor-pointer" />
                                    <Share2 className="w-6 h-6 hover:text-blue-400 transition-colors cursor-pointer" />
                                </div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
