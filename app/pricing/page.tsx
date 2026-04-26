import type { Metadata } from "next";
import PricingCards from "@/components/PricingCards";
import { WA_TRIAL } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans UK – Pricing",
  description:
    "Browse Newton IPTV subscription plans. From £9.99/month to £49.99/year. Best IPTV provider UK — 20,000+ channels, 4K quality. Try free for 24 hours.",
  keywords: ["iptv subscription", "iptv providers uk", "iptv subscription uk", "best iptv provider", "iptv plans uk"],
};

const features = [
  "20,000+ Live Channels",
  "80,000+ Movies & Series",
  "4K & HD Streaming",
  "Anti-Buffering Technology",
  "24/7 Customer Support",
  "All Devices Supported",
  "Regular Channel Updates",
  "99.9% Uptime SLA",
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Newton IPTV Subscription",
  description: "Premium IPTV subscription for the United Kingdom. 20,000+ channels, 80,000+ VOD.",
  brand: { "@type": "Brand", name: "Newton IPTV" },
  offers: [
    {
      "@type": "Offer",
      name: "Starter Plan",
      price: "9.99",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://newtoniptv.co.uk/pricing",
    },
    {
      "@type": "Offer",
      name: "Popular Plan",
      price: "19.99",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://newtoniptv.co.uk/pricing",
    },
    {
      "@type": "Offer",
      name: "Best Value Plan",
      price: "49.99",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: "https://newtoniptv.co.uk/pricing",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-4">
            IPTV Subscription Plans
          </h1>
          <p className="text-brand-gray text-lg max-w-xl mx-auto">
            Premium UK IPTV starting from just £9.99. All plans include a{" "}
            <strong className="text-brand-dark">24-hour free trial</strong> — no credit card required.
          </p>
        </div>

        <PricingCards />

        <div className="max-w-4xl mx-auto px-4 mt-16">
          <h2 className="text-2xl font-extrabold text-brand-dark text-center mb-8">
            Everything Included in Every Plan
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-brand-gray">
                <span className="text-brand-orange font-bold flex-shrink-0">✓</span>
                {f}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 mt-16 text-center">
          <h2 className="text-2xl font-extrabold text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-left">
            {[
              { q: "Can I upgrade my plan later?", a: "Yes, you can upgrade at any time and we'll apply the difference to your new plan." },
              { q: "Do I need a box or special hardware?", a: "No — Newton IPTV works on devices you already own: Smart TV, Firestick, phone, tablet, or PC." },
              { q: "How quickly do I get access after payment?", a: "Instantly. Your credentials are emailed within minutes of a successful payment." },
              { q: "Is there a money-back guarantee?", a: "We offer a 24-hour free trial so you can be 100% sure before paying. Contact support if you have issues." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-brand-bg2 border border-brand-border rounded-xl p-5">
                <p className="text-brand-dark font-semibold text-sm mb-2">{q}</p>
                <p className="text-brand-gray text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href={WA_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-10 py-4 rounded-full text-lg font-bold transition-colors shadow-lg shadow-brand-red/25"
          >
            Start Your Free Trial
          </a>
          <p className="mt-3 text-brand-gray/60 text-xs">No credit card · Instant access</p>
        </div>
      </section>
    </>
  );
}
