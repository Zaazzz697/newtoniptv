import { WA_TRIAL } from "@/lib/whatsapp";

const steps = [
  {
    num: "01",
    title: "Choose Your Plan",
    desc: "Select the IPTV subscription that fits your needs — from 1 month to a full year for maximum savings.",
    dir: "reveal-left",
  },
  {
    num: "02",
    title: "Get Your Credentials",
    desc: "Receive your M3U playlist URL or Xtream Codes login instantly via email within minutes of purchase.",
    dir: "reveal",
  },
  {
    num: "03",
    title: "Start Streaming",
    desc: "Add your credentials to any IPTV app (IPTV Smarters, TiviMate, GSE Player) and enjoy 20,000+ channels.",
    dir: "reveal-right",
  },
];

const stepDelays = ["delay-0", "delay-200", "delay-400"];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-brand-bg2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="reveal delay-100 text-brand-gray max-w-xl mx-auto">
            Start streaming your favourite UK channels in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className={`${step.dir} ${stepDelays[i]} relative text-center group`}>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[40%] h-px bg-brand-border group-hover:bg-brand-red/30 transition-colors duration-500" />
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full
                bg-brand-red-light border-2 border-brand-red/30 mb-5
                group-hover:bg-brand-red group-hover:border-brand-red
                group-hover:shadow-lg group-hover:shadow-brand-red/25
                transition-all duration-300 group-hover:scale-110">
                <span className="text-brand-red font-extrabold text-lg group-hover:text-white group-hover:animate-float transition-colors duration-300">
                  {step.num}
                </span>
              </div>
              <h3 className="text-brand-dark font-bold text-lg mb-2 group-hover:text-brand-red transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-brand-gray text-sm leading-6">{step.desc}</p>
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
            Get Started Now →
          </a>
          <p className="mt-3 text-brand-gray/50 text-xs">Takes 30 seconds · Instant delivery</p>
        </div>
      </div>
    </section>
  );
}
