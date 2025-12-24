import { Truck, Headset, RotateCcw, CreditCard } from "lucide-react";

const features = [
    { icon: Truck, title: "Free Delivery", sub: "Worldwide from $75" },
    { icon: Headset, title: "Support", sub: "24*7 Support" },
    { icon: RotateCcw, title: "Returns", sub: "24*7 Free Returns" },
    { icon: CreditCard, title: "Payment", sub: "100% Secure" },
];

export default function FeatureIcons() {
    return (
        <section className="bg-cocoa-950 py-12 relative z-10 -mt-1">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-cocoa-900/30 backdrop-blur-sm p-4 rounded-full border border-gold-500/10 hover:border-gold-500/30 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0 group-hover:bg-gold-400 text-gold-400 group-hover:text-cocoa-950 transition-all duration-500">
                                <feature.icon size={20} />
                            </div>
                            <div>
                                <h4 className="text-gold-100 font-serif font-bold text-sm">{feature.title}</h4>
                                <p className="text-cocoa-200/50 text-[10px] uppercase tracking-wide group-hover:text-cocoa-200/80 transition-colors">{feature.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
