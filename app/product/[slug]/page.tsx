import { Metadata } from "next";
import { SIGNATURE_COLLECTIONS, FESTIVE_COLLECTIONS } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MoveLeft, Star, Clock, Gift } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProductActions from "./ProductActions";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const allProducts = [...SIGNATURE_COLLECTIONS, ...FESTIVE_COLLECTIONS];
    const product = allProducts.find((p) => p.href.includes(params.slug));

    if (!product) {
        return {
            title: "Product Not Found | a Chocomile",
        };
    }

    return {
        title: `${product.title} | a Chocomile Luxury Gifting`,
        description: `Order ${product.title} - ${product.subtitle}. Handcrafted luxury chocolates by Paridhi.`,
        openGraph: {
            images: [product.image],
        },
    };
}

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const allProducts = [...SIGNATURE_COLLECTIONS, ...FESTIVE_COLLECTIONS];
    const product = allProducts.find((p) => p.href.includes(params.slug));

    if (!product) {
        return (
            <main className="bg-background min-h-screen flex items-center justify-center text-cocoa-900">
                <div className="text-center">
                    <h1 className="text-4xl font-serif mb-4">Product Not Found</h1>
                    <Link href="/collections" className="text-gold-500 border-b border-gold-500 pb-1 font-medium">Return to Collections</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <div className="container mx-auto px-6 py-32">
                <Link href="/collections" className="inline-flex items-center gap-2 text-cocoa-900/60 hover:text-gold-500 uppercase tracking-widest text-xs mb-12 transition-colors font-medium">
                    <MoveLeft size={16} /> Back to Collections
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Product Image - Cinematic */}
                    <div className="relative aspect-[4/5] overflow-hidden border border-cocoa-200/50 rounded-sm shadow-xl group bg-white">
                        <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 border border-white/0 transition-all duration-700 group-hover:inset-4 group-hover:border-white/80" />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-8 sticky top-32">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-serif text-cocoa-900 mb-2">{product.title}</h1>
                            <p className="text-gold-500 uppercase tracking-widest text-sm font-bold">{product.subtitle}</p>
                        </div>

                        <div className="text-3xl text-cocoa-800 font-light font-serif">
                            {product.price}
                        </div>

                        <div className="h-[1px] w-full bg-cocoa-200" />

                        <p className="text-cocoa-900/80 leading-relaxed font-light text-lg">
                            Handcrafted to perfection using single-origin cocoa. This luxury box is curated for those who appreciate the finer things in life.
                            Each piece is a work of art, balancing flavor and texture in a symphony of taste.
                        </p>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4 py-4">
                            <div className="flex items-center gap-3 text-cocoa-800/80 text-sm font-medium">
                                <Clock size={18} className="text-gold-500" />
                                <span>Made After Order</span>
                            </div>
                            <div className="flex items-center gap-3 text-cocoa-800/80 text-sm font-medium">
                                <Gift size={18} className="text-gold-500" />
                                <span>Luxury Packaging</span>
                            </div>
                            <div className="flex items-center gap-3 text-cocoa-800/80 text-sm font-medium">
                                <Star size={18} className="text-gold-500" />
                                <span>Premium Ingredients</span>
                            </div>
                        </div>

                        <ProductActions productTitle={product.title} />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
