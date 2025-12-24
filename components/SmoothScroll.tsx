"use client";

// import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    // Temporary bypass for Lenis while fixing build
    return <>{children}</>;
}
