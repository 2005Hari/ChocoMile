import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0F0A0A", // Deep Cocoa Black
                foreground: "#F5F5F0", // Soft cream text
                cocoa: {
                    50: "#F7F5F4",
                    100: "#EFEBE9",
                    900: "#1A100E",
                    950: "#0F0A0A",
                },
                gold: {
                    100: "#F9F1D8",
                    200: "#F0E0AA",
                    300: "#E6CE78",
                    400: "#D4AF37", // Classic Gold
                    500: "#C5A028",
                    600: "#A38218",
                },
                champagne: {
                    100: "#F4EBD9",
                    200: "#EADFB4", // Champagne
                }
            },
            fontFamily: {
                serif: ["var(--font-serif)"],
                sans: ["var(--font-sans)"],
                script: ["var(--font-script)"], // Added custom script font
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "luxury-gradient": "linear-gradient(to right, #0F0A0A, #1A100E, #0F0A0A)",
                "gold-shimmer": "linear-gradient(45deg, transparent 25%, rgba(212, 175, 55, 0.3) 50%, transparent 75%)",
            },
            animation: {
                "fade-in-slow": "fadeIn 1.5s ease-out forwards",
                "fade-in-up": "fadeInUp 1s ease-out forwards",
                "shimmer": "shimmer 3s infinite linear",
                "float": "float 6s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "200% 0" },
                    "100%": { backgroundPosition: "-200% 0" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                }
            }
        },
    },
    plugins: [],
};
export default config;
