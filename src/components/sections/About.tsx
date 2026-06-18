import { Lightbulb, Heart, Rocket, Shield } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Inovasi Tanpa Henti",
    desc: "Lingkungan yang dirancang untuk mendorong ide-ide segar dan terobosan bisnis setiap harinya.",
    color: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
    border: "hover:border-yellow-500/30",
  },
  {
    icon: Heart,
    title: "Komunitas Solid",
    desc: "Bergabung dengan 2,400+ profesional, startup, dan kreator yang saling mendukung dan menginspirasi.",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-400",
    border: "hover:border-pink-500/30",
  },
  {
    icon: Rocket,
    title: "Akselerasi Bisnis",
    desc: "Akses ke networking event, workshop, dan mentoring dari para pelaku bisnis berpengalaman.",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
    border: "hover:border-violet-500/30",
  },
  {
    icon: Shield,
    title: "Keamanan & Privasi",
    desc: "Sistem keamanan 24/7 dengan CCTV, akses kartu pintar, dan jaringan internet terenkripsi.",
    color: "from-cyan-500/20 to-teal-500/20",
    iconColor: "text-cyan-400",
    border: "hover:border-cyan-500/30",
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
            Tentang SpaceHub
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Lebih dari Sekadar{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Ruang Kerja
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            SpaceHub berdiri sejak 2019 dengan visi menciptakan ekosistem kerja terbaik di Indonesia.
            Kami percaya bahwa lingkungan yang tepat adalah kunci produktivitas dan kesuksesan.
          </p>
        </div>

        {/* Story block */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-black text-white leading-tight">
              Didesain untuk Generasi{" "}
              <span className="text-violet-400">Profesional Modern</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              SpaceHub hadir sebagai jawaban atas kebutuhan para profesional, freelancer, dan startup
              yang ingin bekerja di lingkungan dinamis tanpa biaya operasional kantor konvensional.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Dengan desain interior premium bernuansa industrial-modern, fasilitas berteknologi tinggi,
              dan komunitas yang aktif, SpaceHub menjadi rumah kedua bagi para achiever Indonesia.
            </p>
            <div className="flex gap-8 pt-2">
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">2019</div>
                <div className="text-sm text-gray-500 mt-1">Tahun Berdiri</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">50K+</div>
                <div className="text-sm text-gray-500 mt-1">Jam Produktif/Bulan</div>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-gray-500 mt-1">Tingkat Kepuasan</div>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/10 rounded-3xl blur-xl" />
            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Hot Desk", val: "320 kursi", color: "bg-violet-500/20 text-violet-300" },
                  { label: "Private Office", val: "48 unit", color: "bg-cyan-500/20 text-cyan-300" },
                  { label: "Meeting Room", val: "24 ruang", color: "bg-pink-500/20 text-pink-300" },
                  { label: "Event Space", val: "3 area", color: "bg-yellow-500/20 text-yellow-300" },
                ].map((item) => (
                  <div key={item.label} className={`${item.color} rounded-2xl p-5`}>
                    <div className="text-2xl font-black mb-1">{item.val}</div>
                    <div className="text-sm opacity-80">{item.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 text-sm font-medium">Occupancy Hari Ini</span>
                  <span className="text-cyan-400 font-bold text-sm">87% Penuh</span>
                </div>
                <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className={`relative bg-white/5 border border-white/10 ${v.border} rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 group cursor-default`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <v.icon className={`w-6 h-6 ${v.iconColor}`} />
              </div>
              <h4 className="text-white font-bold mb-2">{v.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
