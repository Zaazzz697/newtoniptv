"use client";
import { useState } from "react";
import { waLink } from "@/lib/whatsapp";

const perks = [
  { icon: "📺", text: "20,000+ Live Channels" },
  { icon: "🎬", text: "80,000+ Movies & VOD" },
  { icon: "🔴", text: "4K & HD Streaming" },
  { icon: "📱", text: "All Devices Supported" },
  { icon: "⚡", text: "Instant Activation" },
  { icon: "💳", text: "No Credit Card Needed" },
];

export default function FreeTrialPage() {
  const [name, setName] = useState("");
  const [device, setDevice] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `Hi! My name is ${name || "a new customer"} and I'm interested in the Newton IPTV 24-hour free trial.${device ? ` My device is ${device}.` : ""} Can you help me get started?`;
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="min-h-screen py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="text-brand-red text-sm font-medium">Free 24-Hour Trial</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              Try the UK&apos;s Best{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-red to-brand-orange">
                IPTV Free Trial
              </span>
            </h1>

            <p className="text-brand-gray text-lg mb-8">
              Get instant access to <strong className="text-brand-dark">20,000+ live UK channels</strong> and{" "}
              <strong className="text-brand-dark">80,000+ movies</strong> — completely free for 24 hours.
              No payment. No commitment.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {perks.map((p) => (
                <div key={p.text} className="flex items-center gap-2 text-sm text-brand-gray">
                  <span className="text-lg">{p.icon}</span>
                  {p.text}
                </div>
              ))}
            </div>

            <div className="bg-brand-bg2 border border-brand-border rounded-2xl p-5">
              <p className="text-brand-dark text-sm font-semibold mb-1">Compatible with:</p>
              <p className="text-brand-gray text-sm">
                Smart TV · Amazon Firestick · Android TV · iPhone · iPad · PC · Mac · MAG Box · IPTV Smarters · TiviMate
              </p>
            </div>
          </div>

          <div className="bg-white border border-brand-border rounded-3xl p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-brand-dark mb-2 text-center">
              Get Your Free Trial
            </h2>
            <p className="text-brand-gray text-sm text-center mb-8">
              Fill in your details and we&apos;ll set you up instantly via WhatsApp.
            </p>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-gray mb-1.5">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-brand-bg2 border border-brand-border rounded-xl px-4 py-3 text-brand-dark placeholder-brand-gray2 text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="device" className="block text-sm font-medium text-brand-gray mb-1.5">
                  Your Device
                </label>
                <select
                  id="device"
                  value={device}
                  onChange={(e) => setDevice(e.target.value)}
                  className="w-full bg-brand-bg2 border border-brand-border rounded-xl px-4 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/20 transition-colors"
                >
                  <option value="">Select your device</option>
                  <option>Amazon Firestick</option>
                  <option>Android TV Box</option>
                  <option>Smart TV</option>
                  <option>iPhone / iPad</option>
                  <option>Android Phone / Tablet</option>
                  <option>PC / Mac</option>
                  <option>MAG Box</option>
                  <option>Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-4 rounded-xl font-bold text-base transition-colors shadow-lg shadow-brand-red/20 mt-2"
              >
                Get My Free Trial on WhatsApp →
              </button>

              <p className="text-center text-brand-gray/50 text-xs">
                By submitting you agree to our{" "}
                <a href="/terms" className="underline hover:text-brand-gray">Terms of Service</a>.
                No spam, ever.
              </p>
            </form>

            <div className="mt-6 pt-6 border-t border-brand-border flex items-center justify-center gap-6 text-xs text-brand-gray2">
              <span>✓ Instant delivery</span>
              <span>✓ No card needed</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">
            What Happens After My IPTV Trial?
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto mb-8">
            After your 24-hour free IPTV trial ends, your service will automatically pause.
            You choose whether to subscribe — absolutely no automatic charges.
            If you love it (and you will), simply pick a plan starting from £9.99/month.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto text-left">
            {[
              { step: "1", title: "Submit the form", desc: "Takes 30 seconds — just your name and device." },
              { step: "2", title: "Chat on WhatsApp", desc: "We send your credentials instantly via WhatsApp." },
              { step: "3", title: "Start streaming", desc: "Load into any IPTV app and enjoy 20,000+ channels free." },
            ].map((s) => (
              <div key={s.step} className="bg-white border border-brand-border rounded-2xl p-5 shadow-sm">
                <span className="text-brand-orange font-extrabold text-2xl block mb-2">0{s.step}</span>
                <p className="text-brand-dark font-semibold text-sm mb-1">{s.title}</p>
                <p className="text-brand-gray text-xs">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
