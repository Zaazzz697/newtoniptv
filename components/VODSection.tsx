import Image from "next/image";
import { WA_TRIAL } from "@/lib/whatsapp";

const posters = [
  { title: "Movie 1", src: "/1.jpg" },
  { title: "La Casa de Papel", src: "/2.jpg" },
  { title: "Series 3", src: "/3.webp" },
];

export default function VODSection() {
  return (
    <section className="py-20 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="inline-block bg-brand-red/20 text-brand-red text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wider">
            On Demand
          </span>
          <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Unlimited TV Shows, Movies &amp; More
          </h2>
          <p className="reveal delay-100 text-white/50 max-w-xl mx-auto">
            Over 80,000 movies and series available on demand — new titles added daily, all included in every plan.
          </p>
        </div>

        {/* Poster Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {posters.map((p) => (
            <div
              key={p.title}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ aspectRatio: "2/3" }}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 33vw, 25vw"
              />
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-16 flex flex-wrap justify-center gap-10 sm:gap-16">
          {[
            { value: "80,000+", label: "Movies & Series" },
            { value: "Daily", label: "New Additions" },
            { value: "4K & HD", label: "Stream Quality" },
            { value: "All Genres", label: "Available" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="reveal text-center"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl font-extrabold text-brand-red mb-1">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
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
          <p className="mt-3 text-white/30 text-xs">80,000+ titles · All included in every plan</p>
        </div>
      </div>
    </section>
  );
}
