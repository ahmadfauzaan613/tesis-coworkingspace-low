import {
  Wifi, Clock, Coffee, Printer, Mic2, MonitorPlay,
  Dumbbell, Car, Utensils, ShieldCheck, Zap, Snowflake
} from "lucide-react"

const facilities = [
  {
    icon: Wifi,
    title: "Internet 1 Gbps",
    desc: "Fiber optic dedicated line dengan backup jaringan, dijamin stabil 99.9% uptime.",
    tag: "🔥 Favorit",
    color: "from-violet-500/20 to-violet-700/5",
    iconBg: "bg-violet-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Clock,
    title: "Akses 24/7",
    desc: "Masuk kapan saja tanpa batasan waktu dengan smart card access yang personal.",
    tag: null,
    color: "from-cyan-500/20 to-cyan-700/5",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: MonitorPlay,
    title: "Meeting Room HD",
    desc: "24 ruang meeting dengan layar 4K, sound system profesional, dan whiteboard digital.",
    tag: "📺 Premium",
    color: "from-blue-500/20 to-blue-700/5",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Coffee,
    title: "Café & Pantry",
    desc: "Kopi premium, teh herbal, snack sehat, dan makanan ringan tersedia sepanjang hari.",
    tag: "☕ Gratis",
    color: "from-amber-500/20 to-amber-700/5",
    iconBg: "bg-amber-500/20",
    iconColor: "text-amber-400",
  },
  {
    icon: Mic2,
    title: "Podcast Studio",
    desc: "Studio rekaman bersoundproofing dengan peralatan audio profesional broadcast-ready.",
    tag: "🎙 Eksklusif",
    color: "from-pink-500/20 to-pink-700/5",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Printer,
    title: "Print & Scan",
    desc: "Printer laser berwarna, scanner dokumen, dan mesin fotokopi berkecepatan tinggi.",
    tag: null,
    color: "from-green-500/20 to-green-700/5",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    desc: "Gym mini dengan treadmill, dumbell, dan yoga area untuk jaga stamina kerja.",
    tag: "💪 Baru",
    color: "from-orange-500/20 to-orange-700/5",
    iconBg: "bg-orange-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Car,
    title: "Parkir Luas",
    desc: "Area parkir mobil & motor aman dengan CCTV dan petugas keamanan 24 jam.",
    tag: null,
    color: "from-slate-500/20 to-slate-700/5",
    iconBg: "bg-slate-500/20",
    iconColor: "text-slate-400",
  },
  {
    icon: Utensils,
    title: "Rooftop Lounge",
    desc: "Area santai di rooftop dengan pemandangan kota, cocok untuk brainstorming outdoor.",
    tag: "🌆 Views",
    color: "from-indigo-500/20 to-indigo-700/5",
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan 24/7",
    desc: "Sistem CCTV, security guard, dan akses kartu pintar untuk keamanan maksimal.",
    tag: null,
    color: "from-emerald-500/20 to-emerald-700/5",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Zap,
    title: "Power Backup",
    desc: "Generator backup & UPS untuk menjamin aktivitas kerja tidak terganggu saat mati lampu.",
    tag: "⚡ 24h",
    color: "from-yellow-500/20 to-yellow-700/5",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
  },
  {
    icon: Snowflake,
    title: "AC Sentral",
    desc: "Sistem pendingin ruangan sentral dengan kontrol temperatur individual di setiap zona.",
    tag: null,
    color: "from-sky-500/20 to-sky-700/5",
    iconBg: "bg-sky-500/20",
    iconColor: "text-sky-400",
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-28 px-6 bg-gradient-to-b from-transparent via-[#0a0a18]/50 to-transparent overflow-hidden">
      {/* BG decoration */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-cyan-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-5">
            Fasilitas Lengkap
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Semua yang Kamu Butuhkan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Ada di Sini
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Fasilitas kelas dunia yang terus diperbarui untuk memenuhi standar kerja para profesional modern.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {facilities.map((fac) => (
            <div
              key={fac.title}
              className={`relative bg-gradient-to-br ${fac.color} border border-white/8 hover:border-white/20 rounded-2xl p-5 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group cursor-default`}
            >
              {fac.tag && (
                <span className="absolute top-4 right-4 text-xs font-semibold bg-white/10 text-white/80 px-2 py-0.5 rounded-full">
                  {fac.tag}
                </span>
              )}
              <div className={`w-11 h-11 rounded-xl ${fac.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <fac.icon className={`w-5 h-5 ${fac.iconColor}`} />
              </div>
              <h3 className="text-white font-bold text-sm mb-2">{fac.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{fac.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
