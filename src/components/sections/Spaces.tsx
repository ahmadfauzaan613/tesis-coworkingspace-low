import { Button } from "@/components/ui/button"
import { Users, Lock, Coffee, Monitor, Sofa, Video } from "lucide-react"
import { useNavigate } from "react-router-dom"

const spaces = [
  {
    id: "hot-desk",
    name: "Hot Desk",
    tagline: "Fleksibel & Sosial",
    desc: "Pilihan sempurna untuk freelancer dan remote worker yang butuh suasana baru setiap hari. Duduk di mana saja di area open-plan kami yang luas dan dinamis.",
    price: "75K",
    unit: "/hari",
    features: ["Meja & Kursi Ergonomis", "Locker Pribadi", "Akses Café", "WiFi 1 Gbps", "Printing (20 lembar/hari)"],
    icon: Users,
    gradient: "from-violet-600 to-purple-800",
    accentColor: "violet",
    badge: null,
    imgLabel: "320 Kursi Tersedia",
  },
  {
    id: "dedicated-desk",
    name: "Dedicated Desk",
    tagline: "Meja Tetapmu",
    desc: "Meja eksklusif yang selalu tersedia untukmu setiap hari kerja. Personalisasi ruang kerjamu dan tinggalkan barang-barangmu dengan aman.",
    price: "2.5 Jt",
    unit: "/bulan",
    features: ["Meja Tetap 24/7", "Loker Pribadi Besar", "Alamat Bisnis", "5 Jam Meeting Room", "Akses Komunitas VIP"],
    icon: Monitor,
    gradient: "from-cyan-600 to-blue-800",
    accentColor: "cyan",
    badge: "🔥 Terpopuler",
    imgLabel: "160 Unit Tersedia",
  },
  {
    id: "private-office",
    name: "Private Office",
    tagline: "Tim & Startup",
    desc: "Ruang kantor privat untuk tim kamu. Fully furnished, branded sesuai identitas perusahaanmu, dengan semua fasilitas premium SpaceHub.",
    price: "8 Jt",
    unit: "/bulan",
    features: ["Ruangan Pribadi Terkunci", "Branding Perusahaan", "10 Jam Meeting Room", "Resepsionis Dedikasi", "Internet Dedicated Line"],
    icon: Lock,
    gradient: "from-pink-600 to-rose-800",
    accentColor: "pink",
    badge: "💎 Premium",
    imgLabel: "48 Unit Tersedia",
  },
  {
    id: "meeting-room",
    name: "Meeting Room",
    tagline: "Profesional & Imersif",
    desc: "Ruang meeting berteknologi tinggi untuk presentasi, interview, atau rapat penting. Tersedia berbagai kapasitas dari 4 hingga 30 orang.",
    price: "150K",
    unit: "/jam",
    features: ["Layar 4K Ultra HD", "Video Conference System", "Whiteboard Digital", "Sound System Premium", "Catering On Request"],
    icon: Video,
    gradient: "from-amber-600 to-orange-800",
    accentColor: "amber",
    badge: null,
    imgLabel: "24 Ruang Tersedia",
  },
  {
    id: "lounge",
    name: "Rooftop Lounge",
    tagline: "Santai & Inspiratif",
    desc: "Area outdoor di rooftop dengan pemandangan skyline Jakarta. Cocok untuk brainstorming informal, networking, atau sekadar rehat sejenak.",
    price: "Free",
    unit: "untuk member",
    features: ["Pemandangan Kota 360°", "Furniture Outdoor Premium", "BBQ Area (Weekend)", "Akses Sore - Malam", "Tersedia untuk Event Privat"],
    icon: Sofa,
    gradient: "from-emerald-600 to-teal-800",
    accentColor: "emerald",
    badge: "🌆 Iconic",
    imgLabel: "Kapasitas 80 Orang",
  },
  {
    id: "podcast",
    name: "Podcast Studio",
    tagline: "Konten & Kreasi",
    desc: "Studio podcast profesional dengan soundproofing terbaik, peralatan audio kelas broadcast, dan setup kamera multi-angle untuk konten video.",
    price: "200K",
    unit: "/jam",
    features: ["Soundproofing Premium", "Mic Shure SM7B", "Kamera 4K Multi-angle", "Software Editing", "Lighting Studio"],
    icon: Coffee,
    gradient: "from-indigo-600 to-violet-800",
    accentColor: "indigo",
    badge: "🎙 Eksklusif",
    imgLabel: "3 Studio Tersedia",
  },
]

const accentMap: Record<string, string> = {
  violet: "border-violet-500/30 text-violet-400",
  cyan: "border-cyan-500/30 text-cyan-400",
  pink: "border-pink-500/30 text-pink-400",
  amber: "border-amber-500/30 text-amber-400",
  emerald: "border-emerald-500/30 text-emerald-400",
  indigo: "border-indigo-500/30 text-indigo-400",
}


export default function Spaces() {
  const navigate = useNavigate()
  const goToContact = (spaceName?: string) => navigate(spaceName ? `/kontak?interest=${encodeURIComponent(spaceName)}` : "/kontak")

  return (
    <section id="spaces" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c1e]/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-5">
            Pilihan Ruangan
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ruangan untuk Setiap{" "}
            <span className="bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
              Kebutuhan
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Dari hot desk harian hingga private office untuk tim, kami punya pilihan yang tepat untuk kamu.
          </p>
        </div>

        {/* Spaces Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="relative bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-3xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${space.gradient}`} />

              {/* Card header */}
              <div className={`relative p-6 bg-gradient-to-br ${space.gradient} bg-opacity-10`}>
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/20 to-transparent" />

                {space.badge && (
                  <span className="absolute top-4 right-4 text-xs font-bold bg-white/15 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                    {space.badge}
                  </span>
                )}

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <space.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">{space.tagline}</div>
                  <h3 className="text-xl font-black text-white mb-2">{space.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-white">Rp {space.price}</span>
                    <span className="text-white/60 text-sm">{space.unit}</span>
                  </div>
                </div>

                {/* Availability chip */}
                <div className="absolute bottom-4 right-4 text-xs bg-black/30 text-white/70 px-2 py-1 rounded-full backdrop-blur-sm">
                  {space.imgLabel}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{space.desc}</p>
                <ul className="space-y-2.5 mb-6">
                  {space.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <span className={`w-5 h-5 rounded-full ${accentMap[space.accentColor]} border flex items-center justify-center text-xs shrink-0`}>
                        ✓
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => goToContact(space.name)}
                  variant="none"
                  data-testid={`space-book-${space.id}`}
                  className={`w-full bg-gradient-to-r ${space.gradient} hover:opacity-90 text-white font-semibold border-0 transition-opacity`}
                >
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
