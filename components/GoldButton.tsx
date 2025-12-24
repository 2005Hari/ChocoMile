"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface GoldButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline";
}

const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
    ({ className, children, variant = "primary", ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative overflow-hidden px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300",
                    variant === "primary"
                        ? "bg-gold-400 text-white shadow-lg shadow-gold-400/20 hover:bg-gold-500 hover:shadow-xl"
                        : "bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-white",
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children as React.ReactNode}
                </span>
            </motion.button>
        );
    }
);

GoldButton.displayName = "GoldButton";

export default GoldButton;
