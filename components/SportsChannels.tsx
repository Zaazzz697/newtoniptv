import Image from "next/image";
import { WA_TRIAL } from "@/lib/whatsapp";

const sports = [
  { id: "pl", src: "/premiemleague.webp", alt: "Premier League" },
  { id: "laliga", src: "/laliga.webp", alt: "LaLiga" },
  { id: "ucl", src: "/wor.webp", alt: "UEFA Champions League" },
  { id: "nba", src: "/nba.webp", alt: "NBA" },
  { id: "seriea", src: "/serie.webp", alt: "Serie A" },
  { id: "ligue1", src: "/ligue1.webp", alt: "Ligue 1" },
];

const doubled = [...sports, ...sports];

export default function SportsChannels() {
  return (
    <section className="py-20 bg-brand-dark">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-red/20 text-brand-red text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            Live Sports
          </span>
          <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Your Favourite Sports Channels Included
          </h2>
          <p className="reveal delay-100 text-white/50 max-w-xl mx-auto">
            Never miss a match. Every major league, every race, every fight — live and in stunning 4K quality.
          </p>
        </div>
      </div>

      {/* Mobile only — infinite marquee */}
      <div className="block sm:hidden relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-linear-to-r from-brand-dark to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-linear-to-l from-brand-dark to-transparent" />
        <div className="flex animate-marquee gap-3 w-max">
          {doubled.map((s, i) => (
            <div
              key={i}
              className="flex-shrink-0 relative rounded-xl overflow-hidden shadow-xl"
              style={{ width: "130px", height: "195px" }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover object-center"
                sizes="130px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tablet + Desktop — static grid */}
      <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-3 px-3">
        {sports.map((s) => (
          <div
            key={s.id}
            className="relative rounded-xl overflow-hidden shadow-xl"
            style={{ aspectRatio: "2/3" }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 33vw, 17vw"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href={WA_TRIAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors shadow-lg shadow-brand-red/30"
        >
          Start Free Trial →
        </a>
        <p className="mt-3 text-white/30 text-xs">All sports included in every plan</p>
      </div>
    </section>
  );
}
