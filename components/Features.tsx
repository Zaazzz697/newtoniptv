import Image from "next/image";
import { WA_TRIAL } from "@/lib/whatsapp";

const features = [
  {
    id: "channels",
    title: "20,000+ Live Channels",
    desc: "UK sports, news, entertainment, international — all in one place. Sky, BT Sport, BBC, ITV and thousands more.",
    icon: "/icon-1.png",
  },
  {
    id: "vod",
    title: "80,000+ Movies & Series",
    desc: "A massive VOD library with the latest films and TV shows. New content added daily.",
    icon: "/icon-2.png",
  },
  {
    id: "quality",
    title: "4K & HD Streaming",
    desc: "Crystal-clear picture quality with minimal buffering, powered by premium CDN servers across the UK.",
    icon: "/icon-3.png",
  },
  {
    id: "devices",
    title: "All Devices Supported",
    desc: "Works on Smart TV, Firestick, Android, iOS, MAG Box, Enigma2, PC and more.",
    icon: "/icon-4.png",
  },
  {
    id: "buffering",
    title: "Anti-Buffering Technology",
    desc: "Our servers are optimised for UK connections, giving you smooth, stable streaming every time.",
    icon: "/icon-5.png",
  },
  {
    id: "trial",
    title: "24-Hour Free Trial",
    desc: "Not sure? Try before you buy. No credit card needed — just your email to get instant access.",
    icon: "/icon-6.png",
  },
];

const delays = ["delay-0", "delay-100", "delay-200", "delay-300", "delay-400", "delay-500"];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Why Choose Newton IPTV?
          </h2>
          <p className="reveal delay-100 text-brand-gray max-w-xl mx-auto">
            Everything you need for the ultimate IPTV experience, built specifically for UK viewers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.id}
              className={`reveal-scale ${delays[i]} group bg-white border border-brand-border rounded-2xl p-8
                hover:border-brand-red/30 hover:shadow-xl hover:shadow-brand-red/5
                transition-all duration-300 hover:-translate-y-1 text-center`}
            >
              <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-brand-dark font-bold text-lg mb-2 group-hover:text-brand-red transition-colors duration-300">
                {f.title}
              </h3>
              <p className="text-brand-gray text-sm leading-6">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href={WA_TRIAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors shadow-lg shadow-brand-red/25"
          >
            Start Free Trial →
          </a>
          <p className="mt-3 text-brand-gray/50 text-xs">No credit card · Instant access</p>
        </div>
      </div>
    </section>
  );
}
