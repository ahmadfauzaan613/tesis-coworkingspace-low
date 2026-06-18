import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
  ArrowRight, Users, Building2, MapPin, Award,
  Wifi, Clock, Coffee, MonitorPlay, Mic2, Car,
  Star, ChevronRight, Zap
} from "lucide-react"

const stats = [
  { icon: Users, value: "2,400+", label: "Anggota Aktif" },
  { icon: Building2, value: "8", label: "Tipe Ruangan" },
  { icon: MapPin, value: "3", label: "Lokasi Jakarta" },
  { icon: Award, value: "5★", label: "Rating Pengguna" },
]

const facilityHighlights = [
  { icon: Wifi, label: "Internet 1 Gbps", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: Clock, label: "Akses 24/7", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: MonitorPlay, label: "Meeting Room HD", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: Coffee, label: "Café & Pantry", color: "text-amber-400", bg: "bg-amber-500/10" },
  { icon: Mic2, label: "Podcast Studio", color: "text-pink-400", bg: "bg-pink-500/10" },
  { icon: Car, label: "Parkir Luas", color: "text-slate-400", bg: "bg-slate-500/10" },
]

const spaceHighlights = [
  { name: "Hot Desk", price: "Rp 75K", unit: "/hari", gradient: "from-violet-600 to-purple-800", desc: "Fleksibel untuk freelancer & remote worker" },
  { name: "Dedicated Desk", price: "Rp 2.5 Jt", unit: "/bulan", gradient: "from-cyan-600 to-blue-800", desc: "Meja tetap dengan semua keistimewaan" },
  { name: "Private Office", price: "Rp 8 Jt", unit: "/bulan", gradient: "from-pink-600 to-rose-800", desc: "Ruang privat untuk tim & startup" },
]

const testimonialHighlights = [
  {
    name: "Aditya Pratama", role: "Founder, NovaTech Studio",
    avatar: "AP", color: "from-violet-500 to-purple-700",
    text: "SpaceHub mengubah cara kerja tim kami. Komunitas di sini luar biasa — sudah dapat 3 klien baru dari networking!",
  },
  {
    name: "Sarah Wijaya", role: "UX Designer Freelance",
    avatar: "SW", color: "from-cyan-500 to-blue-700",
    text: "WiFi kenceng, kopi enak, suasana kerjanya bikin mood selalu on. Keputusan terbaik pindah ke SpaceHub!",
  },
  {
    name: "Budi Santoso", role: "CEO, Reka Digital",
    avatar: "BS", color: "from-pink-500 to-rose-700",
    text: "Harga lebih murah dari kantor konvensional, kualitas jauh lebih premium. Klien kami selalu terkesan!",
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "SpaceHub | Coworking Space Premium di Jakarta"
  }, [])

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#06060f]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-700/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            🚀 Coworking Space #1 di Jakarta
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6">
            <span className="text-white">Kerja Lebih </span>
            <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">Cerdas</span>
            <br />
            <span className="text-white">Kolaborasi Tanpa </span>
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Batas</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            SpaceHub hadir dengan ruang kerja premium, komunitas inspiratif, dan fasilitas kelas dunia
            untuk mendorong produktivitas dan kreativitasmu ke level berikutnya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              onClick={() => navigate("/ruangan")}
              size="lg"
              variant="none"
              data-testid="hero-cta-rooms"
              className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold px-8 py-6 text-base shadow-2xl shadow-violet-500/30 border-0 group"
            >
              Jelajahi Ruangan
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => navigate("/harga")}
              size="lg"
              variant="none"
              data-testid="hero-cta-pricing"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-6 text-base border border-white/25 hover:border-white/50 backdrop-blur-sm transition-all"
            >
              Lihat Harga Paket
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-5 hover:bg-white/8 hover:border-violet-500/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-5 h-5 text-violet-300" />
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
            <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── ABOUT PREVIEW ─── */}
      <section className="relative py-20 px-6">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
                Tentang SpaceHub
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-5 leading-tight">
                Lebih dari Sekadar{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Ruang Kerja</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                SpaceHub berdiri sejak 2019 dengan visi menciptakan ekosistem kerja terbaik di Indonesia.
                Lebih dari 2,400 profesional, freelancer, dan startup mempercayai SpaceHub sebagai rumah kedua mereka.
              </p>
              <div className="flex gap-8 mb-8">
                {[{ v: "2019", l: "Tahun Berdiri" }, { v: "50K+", l: "Jam/Bulan" }, { v: "98%", l: "Kepuasan" }].map((s) => (
                  <div key={s.l}>
                    <div className="text-2xl font-black bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{s.v}</div>
                    <div className="text-xs text-gray-500 mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
              <Button onClick={() => navigate("/tentang")} variant="outline" className="border-violet-500/40 text-violet-400 hover:bg-violet-500/10 font-semibold gap-2">
                Selengkapnya <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/10 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[
                    { label: "Hot Desk", val: "320 kursi", color: "bg-violet-500/20 text-violet-300" },
                    { label: "Private Office", val: "48 unit", color: "bg-cyan-500/20 text-cyan-300" },
                    { label: "Meeting Room", val: "24 ruang", color: "bg-pink-500/20 text-pink-300" },
                    { label: "Event Space", val: "3 area", color: "bg-yellow-500/20 text-yellow-300" },
                  ].map((item) => (
                    <div key={item.label} className={`${item.color} rounded-2xl p-5`}>
                      <div className="text-xl font-black mb-1">{item.val}</div>
                      <div className="text-sm opacity-80">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-600/20 to-cyan-600/20 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm font-medium">Occupancy Hari Ini</span>
                    <span className="text-cyan-400 font-bold text-sm">87% Penuh</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[87%] bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FACILITIES PREVIEW ─── */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-[#0a0a18]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
                Fasilitas Premium
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Semua yang Kamu Butuhkan{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Ada di Sini</span>
              </h2>
            </div>
            <Button onClick={() => navigate("/fasilitas")} variant="outline" className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 font-semibold gap-2 shrink-0">
              Semua Fasilitas <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilityHighlights.map((f) => (
              <div key={f.label} className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-5 text-center hover:scale-105 transition-all duration-300 group cursor-default">
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <div className="text-white text-sm font-semibold">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPACES PREVIEW ─── */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-4">
                Pilihan Ruangan
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Ruangan untuk Setiap{" "}
                <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">Kebutuhan</span>
              </h2>
            </div>
            <Button onClick={() => navigate("/ruangan")} variant="outline" className="border-pink-500/40 text-pink-400 hover:bg-pink-500/10 font-semibold gap-2 shrink-0">
              Semua Ruangan <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {spaceHighlights.map((s) => (
              <div key={s.name} className="relative bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                <div className={`h-1.5 w-full bg-gradient-to-r ${s.gradient}`} />
                <div className={`p-6 bg-gradient-to-br ${s.gradient} bg-opacity-10`}>
                  <div className="text-sm font-black text-white mb-1">{s.name}</div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white">{s.price}</span>
                    <span className="text-white/60 text-xs">{s.unit}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 text-sm mb-4">{s.desc}</p>
                  <Button onClick={() => navigate("/ruangan")} variant="none" className={`w-full bg-gradient-to-r ${s.gradient} text-white font-semibold border-0 hover:opacity-90`} size="sm">
                    Lihat Detail
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS PREVIEW ─── */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-transparent via-[#0c0c20]/60 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mb-4">
                Testimoni Member
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                Mereka Sudah{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Merasakannya</span>
              </h2>
            </div>
            <Button onClick={() => navigate("/testimoni")} variant="outline" className="border-yellow-500/40 text-yellow-400 hover:bg-yellow-500/10 font-semibold gap-2 shrink-0">
              Semua Testimoni <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonialHighlights.map((t) => (
              <div key={t.name} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm`}>{t.avatar}</div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-600 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-gradient-to-br from-violet-900/40 to-cyan-900/20 border border-white/10 rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-violet-500/30">
                <Zap className="w-8 h-8 text-white" fill="white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Siap Bergabung?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
                Coba SpaceHub 3 hari gratis. Tanpa kartu kredit, batal kapan saja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate("/kontak")}
                  size="lg"
                  variant="none"
                  data-testid="home-cta-start"
                  className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold px-10 border-0 shadow-2xl shadow-violet-500/30"
                >
                  Mulai 3 Hari Gratis
                </Button>
                <Button
                  onClick={() => navigate("/harga")}
                  size="lg"
                  variant="none"
                  data-testid="home-cta-plans"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 border border-white/25 hover:border-white/50 transition-all"
                >
                  Lihat Semua Paket
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
