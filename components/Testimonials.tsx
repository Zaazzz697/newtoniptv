import { WA_GENERAL } from "@/lib/whatsapp";

const testimonials = [
  { name: "James Harper", location: "Manchester", stars: 5, text: "Switched from Sky and saving £80 a month. Every channel I need — Premier League, Champions League, the lot. Quality is brilliant." },
  { name: "Sarah Kendall", location: "London", stars: 5, text: "Setup was dead easy and channels loaded instantly. Tried other IPTV providers and none compare. No buffering at all during live sport." },
  { name: "David Mitchell", location: "Birmingham", stars: 5, text: "Best IPTV subscription I've found. Tried the free trial and signed up for a year. Support sorted an issue within minutes." },
  { name: "Emma Thompson", location: "Leeds", stars: 5, text: "My husband and I use it on different devices simultaneously with no issues. VOD library is massive — we haven't run out of things to watch." },
  { name: "Ryan Byrne", location: "Liverpool", stars: 5, text: "Absolutely class service. All Premier League games in 4K without a single buffer. Worth every penny compared to what Sky charges." },
  { name: "Claire Watson", location: "Edinburgh", stars: 5, text: "I was sceptical at first but the free trial convinced me instantly. Crystal clear picture on my Firestick and Smart TV at the same time." },
  { name: "Tom Gallagher", location: "Newcastle", stars: 5, text: "Watched the entire World Cup in 4K without a single drop. My mates all asked what I was using. Now they're all subscribed too." },
  { name: "Helen Crawford", location: "Cardiff", stars: 5, text: "Switched after 12 years with Sky. Biggest regret is not doing it sooner. Same channels, better picture, saving over £100 a month." },
];

const doubled = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="reveal text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            Loved by UK Streamers
          </h2>
          <div className="reveal delay-100 flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-brand-orange text-xl">★</span>
            ))}
          </div>
          <p className="reveal delay-200 text-brand-gray">4.9/5 from 2,000+ verified reviews</p>
        </div>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-linear-to-l from-white to-transparent" />

        <div className="flex animate-marquee gap-5 w-max">
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-72 flex-shrink-0 bg-brand-dark border border-brand-dark2 rounded-2xl p-5
                hover:border-brand-red/40 hover:shadow-lg hover:shadow-black/20
                transition-all duration-300 cursor-default"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(t.stars)].map((_, si) => (
                  <span key={si} className="text-brand-orange text-sm">★</span>
                ))}
              </div>
              <p className="text-white/70 text-sm leading-6 mb-4 line-clamp-4">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-white text-sm font-semibold">{t.name}</p>
              <p className="text-white/40 text-xs">{t.location}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3.5 rounded-full font-bold text-sm transition-colors shadow-lg shadow-brand-red/25"
        >
          Join 10,000+ Happy Customers →
        </a>
        <p className="mt-3 text-brand-gray/50 text-xs">4.9/5 from 2,000+ reviews · Try free for 24 hours</p>
      </div>
    </section>
  );
}
