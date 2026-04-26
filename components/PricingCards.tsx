"use client";
import { useState } from "react";
import { waPlan } from "@/lib/whatsapp";

const monthlyPlans = [
  {
    name: "Basic",
    price: 9.99,
    period: "month",
    features: [
      "1 Device Connection",
      "20,000+ TV Channels",
      "Watch on Any Device",
      "Over 80,000 Movies and TV Series",
      "24/7 Customer Support",
    ],
    cta: "/free-trial",
    highlight: false,
  },
  {
    name: "Standard",
    price: 27.99,
    period: "3 months",
    features: [
      "1 Device Connection",
      "20,000+ TV Channels",
      "Watch on Any Device",
      "Over 80,000 Movies and TV Series",
      "24×7 Live Support",
    ],
    cta: "/free-trial",
    highlight: true,
  },
  {
    name: "Pro",
    price: 49.99,
    period: "6 months",
    features: [
      "1 Device Connection",
      "20,000+ TV Channels",
      "Watch on Any Device",
      "Over 80,000 Movies and TV Series",
      "24×7 Live Support",
    ],
    cta: "/free-trial",
    highlight: false,
  },
];

const yearlyPlans = [
  {
    name: "Basic",
    price: 79.99,
    period: "1 Year",
    features: [
      "1 Device Connection",
      "20,000+ TV Channels",
      "Watch on Any Device",
      "Over 80,000 Movies and TV Series",
      "24×7 Live Support",
    ],
    cta: "/free-trial",
    highlight: false,
  },
  {
    name: "Standard",
    price: 149.99,
    period: "2 Year",
    features: [
      "1 Device Connection",
      "20,000+ TV Channels",
      "Watch on Any Device",
      "Over 80,000 Movies and TV Series",
      "24×7 Live Support",
    ],
    cta: "/free-trial",
    highlight: true,
  },
  {
    name: "Pro",
    price: 399.99,
    period: "Lifetime",
    features: [
      "1 Device Connection",
      "20,000+ TV Channels",
      "Watch on Any Device",
      "Over 80,000 Movies and TV Series",
      "24×7 Live Support",
    ],
    cta: "/free-trial",
    highlight: false,
  },
];

interface PricingCardsProps {
  compact?: boolean;
}

export default function PricingCards({ compact = false }: PricingCardsProps) {
  const [isYearly, setIsYearly] = useState(false);
  const plans = isYearly ? yearlyPlans : monthlyPlans;

  return (
    <div>
      {/* Monthly / Yearly Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-white border border-brand-border rounded-full p-1 shadow-sm">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              !isYearly ? "bg-brand-dark text-white shadow-md" : "text-brand-gray hover:text-brand-dark"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              isYearly ? "bg-brand-dark text-white shadow-md" : "text-brand-gray hover:text-brand-dark"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-end">
        {plans.map((plan, idx) => (
          /*
           * Outer wrapper: handles position context + vertical offset for highlighted card.
           * No overflow-hidden here — that's what was clipping the badge.
           */
          <div
            key={plan.name + (isYearly ? "-y" : "-m")}
            className={`relative ${plan.highlight ? "z-10 md:-my-4" : ""}`}
            style={{ animation: `scale-in 0.45s cubic-bezier(0.22,1,0.36,1) ${idx * 100}ms both` }}
          >
            {/* Popular Choice badge — outside overflow-hidden, so it's never clipped */}
            {plan.highlight && (
              <div className="absolute -top-5 left-0 right-0 flex justify-center z-30">
                <span className="inline-block bg-white text-brand-red text-xs font-extrabold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap tracking-wide uppercase border border-brand-red/10">
                  ⭐ Popular Choice
                </span>
              </div>
            )}

            {/* Card — overflow-hidden is safe here because badge is a sibling, not a child */}
            <div
              className={`rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2
                ${plan.highlight
                  ? "bg-brand-red shadow-2xl shadow-brand-red/30 border-2 border-brand-red"
                  : "bg-brand-dark shadow-xl"
                }`}
            >
              <div className="flex flex-col items-center text-center px-8 pt-10 pb-8 flex-1">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-start justify-center gap-0.5">
                    <span className={`text-base mt-2 font-semibold ${plan.highlight ? "text-white/80" : "text-white/60"}`}>
                      £
                    </span>
                    <span className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                      {plan.price.toFixed(2).split(".")[0]}
                      <span className="text-3xl">.{plan.price.toFixed(2).split(".")[1]}</span>
                    </span>
                    <span className="text-sm mt-auto mb-1 font-medium text-white/60">
                      &nbsp;/ {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                {!compact && (
                  <ul className="space-y-3 mb-8 flex-1 text-left w-full">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium text-white/85">
                        <span className="flex-shrink-0 font-bold text-white">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {/* CTA Button */}
                <a
                  href={waPlan(plan.name, plan.price, plan.period)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full max-w-[200px] text-center py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider
                    transition-all duration-200 hover:scale-105 active:scale-95
                    ${plan.highlight
                      ? "bg-white text-brand-red hover:bg-brand-red-light font-extrabold shadow-lg"
                      : "bg-white text-brand-dark hover:bg-brand-bg2 shadow-lg"
                    }`}
                >
                  Order Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
