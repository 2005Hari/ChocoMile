import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import LuxuryMarquee from "@/components/LuxuryMarquee";
import CategoryFeatures from "@/components/CategoryFeatures";
import LuxuryCard from "@/components/LuxuryCard";
import { SIGNATURE_COLLECTIONS } from "@/lib/products";
import GoldButton from "@/components/GoldButton";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const displayProducts = SIGNATURE_COLLECTIONS.slice(0, 4);



  return (
    <main className="bg-cream-100 min-h-screen">
      <Navbar />

      {/* 3D Hero */}
      <div className="relative z-0">
        <HeroSection />
      </div>

      {/* Transition: Luxury Marquee */}
      <div className="relative z-10 bg-cocoa-950">
        <LuxuryMarquee />
      </div>

      <div className="relative z-20 bg-cream-100 pb-20">

        {/* Categories */}
        <CategoryFeatures />

        {/* Curated Gift Collections */}
        <section className="container mx-auto px-4 md:px-6 py-10 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-cocoa-900 mb-2 md:mb-3">Curated Gift Collections</h2>
            <p className="text-cocoa-700 italic max-w-2xl mx-auto text-sm md:text-base">Discover the perfect gift for every occassion, wrapped in luxury.</p>
            <div className="w-12 md:w-16 h-[2px] bg-gold-400 mx-auto mt-4 md:mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[450px] md:auto-rows-[550px]">
            {/* Card 1: Signature Hampers */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden group shadow-xl">
              <Image src="/signature_hamper.png" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Signature Hampers" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950 via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 items-start">
                <span className="text-gold-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">Best Seller</span>
                <h3 className="text-cream-100 font-serif text-2xl md:text-3xl mb-2 md:mb-3">Signature Hampers</h3>
                <p className="text-cream-200/80 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">Assorted pralines and truffles in our iconic gold box. The ultimate gesture of luxury.</p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <GoldButton className="w-fit text-sm px-4 py-2">Shop Now</GoldButton>
                  <span className="text-white text-xs md:text-base font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">From ₹1499</span>
                </div>
              </div>
            </div>

            {/* Card 2: Festive Edit */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden group shadow-xl">
              <Image src="/festive_bark.png" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Festive Edit" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950 via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 items-start">
                <span className="text-gold-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">Limited Edition</span>
                <h3 className="text-cream-100 font-serif text-2xl md:text-3xl mb-2 md:mb-3">Festive Edit</h3>
                <p className="text-cream-200/80 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">Exclusive seasonal flavors inspired by tradition, wrapped in celebration.</p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <Link href="/collections">
                    <GoldButton className="w-fit text-sm px-4 py-2">View Collection</GoldButton>
                  </Link>
                  <span className="text-white text-xs md:text-base font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">From ₹999</span>
                </div>
              </div>
            </div>

            {/* Card 3: Luxury Truffles */}
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden group shadow-xl">
              <Image src="/artisanal_truffles.png" fill className="object-cover group-hover:scale-110 transition-transform duration-1000" alt="Luxury Truffles" />
              <div className="absolute inset-0 bg-gradient-to-t from-cocoa-950 via-transparent to-transparent opacity-90" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 items-start">
                <span className="text-gold-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1 md:mb-2">Connoisseur&apos;s Choice</span>
                <h3 className="text-cream-100 font-serif text-2xl md:text-3xl mb-2 md:mb-3">Luxury Truffles</h3>
                <p className="text-cream-200/80 mb-4 md:mb-6 text-xs md:text-sm leading-relaxed">Rich ganache centers dusted in cocoa. A melt-in-your-mouth experience.</p>
                <div className="flex items-center justify-between w-full mt-auto">
                  <Link href="/collections">
                    <GoldButton className="w-fit text-sm px-4 py-2">Shop Truffles</GoldButton>
                  </Link>
                  <span className="text-white text-xs md:text-base font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">From ₹1299</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Products */}
        <section className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-cocoa-900">Top Product</h2>
            <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 mb-8" />
            <div className="flex justify-center gap-4">
              <span className="px-6 py-2 bg-cocoa-100 rounded-full text-xs font-bold uppercase text-cocoa-600 cursor-pointer hover:bg-gold-400 hover:text-white transition-colors">Latest</span>
              <span className="px-6 py-2 bg-gold-400 text-white rounded-full text-xs font-bold uppercase shadow-lg shadow-gold-400/40">Featured</span>
              <span className="px-6 py-2 bg-cocoa-100 rounded-full text-xs font-bold uppercase text-cocoa-600 cursor-pointer hover:bg-gold-400 hover:text-white transition-colors">Bestseller</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...displayProducts].slice(0, 4).map((product) => (
              <LuxuryCard
                key={product.id}
                title={product.title}
                subtitle={product.subtitle}
                price={product.price}
                image={product.image}
                href={product.href}
                className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all"
              />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
