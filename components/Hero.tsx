import Link from "next/link";
import Image from "next/image";
import { WA_TRIAL } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[620px] lg:min-h-[700px] flex items-center">
      {/* Background image — fills entire section, under all content */}
      <Image
        src="/hero-bg.png"
        alt="Premium IPTV streaming - Watch live football and sports"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[#0a0e2a]/65" />

      {/* Gradient tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(99,102,241,0.15)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(139,92,246,0.1)_0%,_transparent_50%)]" />

      {/* Floating blobs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-violet-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Text content — centred on mobile, left on desktop */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col items-center text-center sm:items-start sm:text-left max-w-2xl mx-auto sm:mx-0">

          {/* Badge */}
          <div className="animate-badge inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-3 py-1.5 mb-6">
            <span className="w-2 h-2 flex-shrink-0 rounded-full bg-brand-red animate-pulse" />
            <span className="text-brand-red text-xs sm:text-sm font-medium">24-Hour Free Trial – No Credit Card</span>
          </div>

          {/* Heading */}
          <h1 className="animate-hero-h1 text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Best IPTV Subscription{" "}
            <span className="text-shimmer">UK</span>{" "}
            Starting from{" "}
            <span className="text-brand-orange">£9.99</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-hero-sub text-base sm:text-lg text-brand-gray max-w-xl mb-8 leading-relaxed">
            Buy IPTV and enjoy streaming with{" "}
            <strong className="text-white">99.9% uptime</strong>,{" "}
            <strong className="text-white">20,000+ TV Channels</strong>{" "}
            and <strong className="text-white">80,000+ Movies &amp; TV Series</strong>.
          </p>

          {/* CTA Buttons */}
          <div className="animate-hero-cta flex flex-col sm:flex-row gap-4 justify-center sm:justify-start w-full sm:w-auto mb-8">
            <a
              href={WA_TRIAL}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-glow inline-flex items-center justify-center bg-brand-red hover:bg-brand-red-hover text-white px-10 py-4 rounded-lg text-lg font-bold transition-all duration-200 shadow-lg shadow-brand-red/25 hover:scale-105 active:scale-95"
            >
              Buy Now
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors hover:bg-white/5"
            >
              View Plans
            </Link>
          </div>

          {/* Platform icons */}
          <div className="animate-hero-note flex items-center gap-5 justify-center sm:justify-start text-brand-gray/60">
            <svg className="w-6 h-6 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <svg className="w-6 h-6 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.523 15.341c-.583 0-1.055.472-1.055 1.055s.472 1.055 1.055 1.055 1.055-.472 1.055-1.055-.472-1.055-1.055-1.055m-11.046 0c-.583 0-1.055.472-1.055 1.055s.472 1.055 1.055 1.055 1.055-.472 1.055-1.055-.472-1.055-1.055-1.055m11.405-6.02l1.92-3.326a.398.398 0 00-.69-.398l-1.946 3.371A12.02 12.02 0 0012 7.789c-1.87 0-3.63.442-5.166 1.179L4.888 5.597a.398.398 0 00-.69.398l1.92 3.326C2.705 11.384.342 15.27 0 19.778h24c-.342-4.508-2.705-8.394-6.118-10.457"/>
            </svg>
            <svg className="w-5 h-5 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
            </svg>
            <svg className="w-6 h-6 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
            </svg>
            <svg className="w-5 h-5 hover:text-white transition-colors cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-6l5-4-5-4v8zm-2-8v8l-3-4 3-4z"/>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
