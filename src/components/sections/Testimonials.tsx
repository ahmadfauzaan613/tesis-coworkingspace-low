import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Aditya Pratama",
    role: "Founder, NovaTech Studio",
    avatar: "AP",
    avatarColor: "from-violet-500 to-purple-700",
    rating: 5,
    text: "SpaceHub benar-benar mengubah cara kerja tim kami. Dari startup yang kerja di kafe, kini kami punya kantor proper dengan semua fasilitas lengkap. Komunitas di sini juga luar biasa — sudah dapat 3 klien baru dari networking di SpaceHub!",
    tag: "Private Office",
    tagColor: "bg-violet-500/20 text-violet-400",
  },
  {
    name: "Sarah Wijaya",
    role: "UX Designer Freelance",
    avatar: "SW",
    avatarColor: "from-cyan-500 to-blue-700",
    rating: 5,
    text: "Sebagai freelancer, saya butuh tempat yang nyaman tapi fleksibel. SpaceHub jawaban sempurna! WiFi kenceng, kopi enak, dan suasana kerjanya bikin mood selalu on. Pindah dari kerja di rumah ke SpaceHub adalah keputusan terbaik tahun ini.",
    tag: "Hot Desk",
    tagColor: "bg-cyan-500/20 text-cyan-400",
  },
  {
    name: "Budi Santoso",
    role: "CEO, Reka Digital",
    avatar: "BS",
    avatarColor: "from-pink-500 to-rose-700",
    rating: 5,
    text: "Kami sewa private office untuk tim 8 orang. Harga jauh lebih murah dari kantor konvensional, tapi kualitas jauh lebih premium. Meeting room-nya impresif banget untuk client meeting. Klien kami selalu terkesima!",
    tag: "Private Office",
    tagColor: "bg-pink-500/20 text-pink-400",
  },
  {
    name: "Dewi Kusuma",
    role: "Content Creator & Podcaster",
    avatar: "DK",
    avatarColor: "from-amber-500 to-orange-700",
    rating: 5,
    text: "Podcast studio di SpaceHub kualitasnya beneran setara studio profesional. Sudah rekam 50+ episode di sini dan hasilnya selalu memuaskan. Plus bisa networking dengan fellow creator yang juga nge-book studio yang sama!",
    tag: "Podcast Studio",
    tagColor: "bg-amber-500/20 text-amber-400",
  },
  {
    name: "Rizky Firmansyah",
    role: "Software Engineer, Remote",
    avatar: "RF",
    avatarColor: "from-emerald-500 to-teal-700",
    rating: 5,
    text: "Remote worker butuh koneksi internet yang bisa diandalkan. SpaceHub punya dedicated fiber 1 Gbps yang stabil banget — bahkan lebih stabil dari kantor lama saya! Dedicated desk saya udah jadi 'rumah kedua' selama 1 tahun ini.",
    tag: "Dedicated Desk",
    tagColor: "bg-emerald-500/20 text-emerald-400",
  },
  {
    name: "Maya Sari",
    role: "Marketing Director, GrowthLab",
    avatar: "MS",
    avatarColor: "from-indigo-500 to-violet-700",
    rating: 5,
    text: "Kami pakai SpaceHub untuk hosting workshop bulanan. Event space-nya fleksibel, setup AV-nya profesional, dan tim SpaceHub sangat helpful dalam mempersiapkan segala sesuatunya. Peserta workshop kami selalu puas dengan venuenya!",
    tag: "Event Space",
    tagColor: "bg-indigo-500/20 text-indigo-400",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0c20]/60 to-transparent pointer-events-none" />
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-violet-900/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 mb-5">
            Testimoni Member
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Mereka Sudah{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Merasakannya
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Lebih dari 2,400 profesional sudah memilih SpaceHub sebagai ruang kerja terbaik mereka.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white font-bold text-xl">4.9</span>
            <span className="text-gray-500 text-sm">dari 800+ ulasan</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-white/[0.03] border border-white/10 hover:border-white/20 rounded-2xl p-6 hover:-translate-y-1 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-white/10 mb-4 group-hover:text-white/20 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">{t.text}</p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-600 text-xs">{t.role}</div>
                  </div>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${t.tagColor}`}>
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
