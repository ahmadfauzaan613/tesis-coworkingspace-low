import { Button } from "@/components/ui/button"

import { ArrowRight, Play, Users, Building2, MapPin, Award } from "lucide-react"

const stats = [
  { icon: Users, value: "2,400+", label: "Anggota Aktif" },
  { icon: Building2, value: "8", label: "Tipe Ruangan" },
  { icon: MapPin, value: "3", label: "Lokasi Jakarta" },
  { icon: Award, value: "5★", label: "Rating Pengguna" },
]

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#06060f]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-700/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          🚀 Coworking Space #1 di Jakarta
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6">
          <span className="text-white">Kerja Lebih </span>
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Cerdas
          </span>
          <br />
          <span className="text-white">Kolaborasi Tanpa </span>
          <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Batas
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          SpaceHub hadir dengan ruang kerja premium, komunitas inspiratif, dan fasilitas kelas dunia
          untuk mendorong produktivitas dan kreativitasmu ke level berikutnya.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={() => scrollTo("#spaces")}
            size="lg"
            className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold px-8 py-6 text-base shadow-2xl shadow-violet-500/30 border-0 group"
          >
            Jelajahi Ruangan
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => scrollTo("#pricing")}
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-bold px-8 py-6 text-base backdrop-blur-sm group gap-2"
          >
            <Play className="w-4 h-4 fill-current" />
            Lihat Harga Paket
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-5 hover:bg-white/8 hover:border-violet-500/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-600/30 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <stat.icon className="w-5 h-5 text-violet-300" />
              </div>
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
        </div>
      </div>
    </section>
  )
}
