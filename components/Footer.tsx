import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-cocoa-900 border-t border-cocoa-800 pt-12 md:pt-20 pb-10 text-cream-100 rounded-t-[2rem] md:rounded-t-[3rem] mt-8 md:mt-12 mx-2">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-3xl font-serif text-gold-200 mb-6 font-black">Chocomile</h2>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="https://www.instagram.com/a_choco_mile?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                                <Instagram size={20} className="text-gold-400 hover:text-white transition-colors cursor-pointer" />
                            </a>
                            <Facebook size={20} className="text-gold-400 hover:text-white transition-colors cursor-pointer" />
                            <Twitter size={20} className="text-gold-400 hover:text-white transition-colors cursor-pointer" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white uppercase tracking-widest text-sm mb-6 font-bold">Menu</h4>
                        <ul className="space-y-4 text-cocoa-200/80 font-medium text-sm">
                            <li><Link href="/collections" className="hover:text-gold-400 transition-colors">Gift Boxes</Link></li>
                            <li><Link href="/collections" className="hover:text-gold-400 transition-colors">Festive Editions</Link></li>
                            <li><Link href="/collections" className="hover:text-gold-400 transition-colors">Bulk Orders</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white uppercase tracking-widest text-sm mb-6 font-bold">Company</h4>
                        <ul className="space-y-4 text-cocoa-200/80 font-medium text-sm">
                            <li><Link href="/about" className="hover:text-gold-400 transition-colors">Our Story</Link></li>
                            <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
                            <li><Link href="/faq" className="hover:text-gold-400 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white uppercase tracking-widest text-sm mb-6 font-bold">Address</h4>
                        <p className="text-cocoa-200/80 font-medium text-sm leading-relaxed">
                            123, Cocoa Lane,<br />
                            Mumbai, India 400050<br />
                            <br />
                            <span className="text-gold-400">hello@chocomile.com</span>
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-cocoa-800 text-center text-xs text-cocoa-200/40 uppercase tracking-wider font-bold">
                    <p>&copy; {new Date().getFullYear()} a Chocomile. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
