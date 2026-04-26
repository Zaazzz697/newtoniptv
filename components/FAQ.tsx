"use client";
import { useState } from "react";
import { WA_TRIAL } from "@/lib/whatsapp";

const faqs = [
  {
    q: "What is Newton IPTV?",
    a: "Newton IPTV is a premium IPTV subscription service based in the UK. We provide access to 20,000+ live channels, 80,000+ movies and series, all streamed in HD and 4K quality.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes! We offer a 24-hour free IPTV trial with full access to all channels and VOD. No credit card required — just your email address.",
  },
  {
    q: "What devices does Newton IPTV work on?",
    a: "Newton IPTV works on all major devices: Smart TVs, Amazon Firestick, Android TV boxes, iOS and Android phones, tablets, PC and Mac, MAG boxes, and Enigma2 receivers.",
  },
  {
    q: "How do I set up my IPTV subscription?",
    a: "After purchase you receive your M3U URL and Xtream Codes credentials by email. Load these into an IPTV app like IPTV Smarters Pro, TiviMate, or GSE Player and you're ready to stream.",
  },
  {
    q: "Can I watch UK sports live?",
    a: "Absolutely. Newton IPTV includes all major UK sports channels — Sky Sports, BT Sport, TNT Sports, and more — so you never miss Premier League, Champions League, boxing, or cricket.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, PayPal, and cryptocurrency for secure and anonymous payments.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-brand-bg2">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="reveal delay-100 text-brand-gray">
            Everything you need to know about our IPTV service.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              /* Reveal wrapper — className never changes, so is-visible persists */
              <div key={faq.q} className="reveal" style={{ transitionDelay: `${Math.min(i * 80, 400)}ms` }}>
                {/* Inner card — className changes on click, but is outside the reveal wrapper */}
                <div
                  className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-brand-red/40 shadow-md"
                      : "border-brand-border hover:border-brand-red/20"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-brand-bg2 transition-colors"
                  >
                    <span className="text-brand-dark font-semibold text-sm pr-4">{faq.q}</span>
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base font-bold transition-all duration-300"
                      style={{
                        background: isOpen ? "#dc2626" : "#f3f4f6",
                        color: isOpen ? "#fff" : "#6b7280",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      +
                    </span>
                  </button>

                  {/* Smooth height transition via grid trick */}
                  <div
                    className="transition-all duration-300 ease-in-out overflow-hidden"
                    style={{ maxHeight: isOpen ? "200px" : "0px", opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="px-6 pb-5 pt-1">
                      <p className="text-brand-gray text-sm leading-6">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href={WA_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors shadow-lg shadow-brand-red/25"
          >
            Start Your Free Trial →
          </a>
          <p className="mt-3 text-brand-gray/50 text-xs">No credit card · Full access for 24 hours</p>
        </div>
      </div>
    </section>
  );
}
