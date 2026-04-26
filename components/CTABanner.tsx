import Link from "next/link";
import { WA_TRIAL, WA_GENERAL } from "@/lib/whatsapp";

export default function CTABanner() {
  return (
    <section className="bg-brand-red py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="reveal text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Start Your 24-Hour Free Trial Today
        </h2>
        <p className="reveal delay-100 text-white/80 text-lg mb-10 max-w-lg mx-auto">
          Join 10,000+ UK households already streaming with Newton IPTV.
          No credit card. No commitment. Cancel anytime.
        </p>

        <div className="reveal delay-200 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WA_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-red hover:bg-brand-red-light px-10 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-black/10"
          >
            Get Free Trial Now
          </a>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-white/40 hover:border-white text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/10"
          >
            See Pricing
          </a>
        </div>

        <p className="reveal delay-300 mt-6 text-white/50 text-xs">
          Full access for 24 hours · No payment required · Instant delivery
        </p>

        {/* decorative dots */}
        <div className="reveal delay-400 mt-12 flex justify-center gap-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-white/20"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
