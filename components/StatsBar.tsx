const stats = [
  { value: "20,000+", label: "Live Channels" },
  { value: "80,000+", label: "Movies & Series" },
  { value: "4K Ultra HD", label: "Streaming Quality" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "10,000+", label: "Happy Customers" },
];

const delays = ["delay-0", "delay-100", "delay-200", "delay-300", "delay-400"];

export default function StatsBar() {
  return (
    <section className="bg-brand-bg2 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal ${delays[i]}`}>
              <p className="text-2xl font-extrabold text-brand-red">{s.value}</p>
              <p className="text-brand-gray text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
