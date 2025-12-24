import type { Metadata } from "next";
import { Inter, Playfair_Display, Alex_Brush } from "next/font/google"; // Switch to Alex Brush
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const scriptFont = Alex_Brush({ weight: "400", subsets: ["latin"], variable: "--font-script" }); // Define script font

export const metadata: Metadata = {
  title: "a Chocomile | Luxury Handcrafted Chocolates",
  description: "Ultra-premium handmade chocolates for gifting, couples, and festivals. Crafted by Paridhi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${scriptFont.variable} font-sans`}>
        <SmoothScroll>
          {/* Navbar will be added here */}
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
