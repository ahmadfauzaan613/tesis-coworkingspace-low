import { MapPin, Clock, Phone, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const locations = [
  {
    id: "sudirman",
    name: "SpaceHub Sudirman",
    badge: "🏙 Pusat Bisnis",
    address: "Gedung Sudirman Plaza, Lantai 12-14\nJl. Jend. Sudirman Kav. 45-46\nJakarta Pusat, DKI Jakarta 10210",
    phone: "+62 21 5790 1234",
    whatsapp: "628115790000",
    hours: "Senin – Minggu, 06.00 – 24.00",
    note: "Akses 24/7 untuk member bulanan",
    transport: ["MRT Dukuh Atas (3 min)", "Busway Karet (5 min)", "Parkir 300 mobil"],
    mapUrl: "https://maps.google.com/?q=Sudirman+Jakarta",
    highlight: true,
    stats: { floors: "3 Lantai", desks: "500+ Kursi", rooms: "12 Meeting Room" },
  },
  {
    id: "scbd",
    name: "SpaceHub SCBD",
    badge: "💼 Premium",
    address: "Pacific Place Mall, Tower B Lt. 5\nJl. Jend. Sudirman Kav. 52-53 SCBD\nJakarta Selatan, DKI Jakarta 12190",
    phone: "+62 21 5150 5678",
    whatsapp: "628115150000",
    hours: "Senin – Minggu, 07.00 – 22.00",
    note: "Akses 24/7 untuk member private office",
    transport: ["MRT Senayan (7 min)", "Busway Gelora (5 min)", "Parkir Mall Tersedia"],
    mapUrl: "https://maps.google.com/?q=SCBD+Jakarta",
    highlight: false,
    stats: { floors: "2 Lantai", desks: "300+ Kursi", rooms: "8 Meeting Room" },
  },
  {
    id: "kemang",
    name: "SpaceHub Kemang",
    badge: "🌿 Creative Hub",
    address: "Kemang Village Office Tower, Lt. 8\nJl. Kemang Raya No. 1\nJakarta Selatan, DKI Jakarta 12730",
    phone: "+62 21 7197 9012",
    whatsapp: "628117197000",
    hours: "Senin – Sabtu, 07.00 – 22.00",
    note: "Minggu: 09.00 – 18.00 (area lounge)",
    transport: ["Busway Kemang (5 min)", "Grab/Gojek Mudah", "Parkir 200 mobil"],
    mapUrl: "https://maps.google.com/?q=Kemang+Jakarta",
    highlight: false,
    stats: { floors: "2 Lantai", desks: "250+ Kursi", rooms: "6 Meeting Room" },
  },
]

export default function Location() {
  const navigate = useNavigate()
  return (
    <section id="location" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-5">
            Lokasi Strategis
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Ada di Jantung{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Jakarta
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            3 lokasi premium di titik-titik paling strategis di Jakarta, mudah dijangkau dari mana saja.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                loc.highlight
                  ? "border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/10"
                  : "border border-white/10 hover:border-white/20"
              }`}
            >
              {loc.highlight && <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-violet-500" />}

              {/* Map placeholder with gradient */}
              <div className="relative h-44 bg-gradient-to-br from-cyan-900/30 to-violet-900/20 overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                  }}
                />
                {/* Map pin animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-cyan-500/20 rounded-full animate-ping" />
                    <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center shadow-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="mt-4 text-white font-bold text-sm bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    {loc.name}
                  </div>
                </div>
                {/* Badge */}
                <span className="absolute top-3 left-3 text-xs font-bold bg-black/50 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {loc.badge}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6 bg-white/[0.03]">
                <h3 className="text-white font-black text-lg mb-1">{loc.name}</h3>

                {/* Stats row */}
                <div className="flex gap-3 mb-4">
                  {Object.entries(loc.stats).map(([, val]) => (
                    <span key={val} className="text-xs bg-white/8 text-gray-400 px-2.5 py-1 rounded-full">{val}</span>
                  ))}
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex gap-3 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400 whitespace-pre-line leading-relaxed">{loc.address}</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <Clock className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-gray-300">{loc.hours}</div>
                      <div className="text-gray-600 text-xs mt-0.5">{loc.note}</div>
                    </div>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <Phone className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-gray-400">{loc.phone}</span>
                  </div>
                </div>

                {/* Transport */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {loc.transport.map((t) => (
                    <span key={t} className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <Button
                  onClick={() => window.open(loc.mapUrl, "_blank")}
                  variant="outline"
                  className="w-full border-white/15 text-white hover:bg-white/10 hover:border-white/30 font-semibold text-sm gap-2"
                  size="sm"
                >
                  <Navigation className="w-4 h-4" />
                  Buka di Google Maps
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Hours CTA */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-violet-900/20 border border-white/10 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-2">Mau Kunjungi Langsung?</h3>
          <p className="text-gray-400 mb-6">Book tur gratis ke lokasi pilihan kamu dan rasakan sendiri suasana SpaceHub.</p>
          <Button
            onClick={() => navigate("/kontak")}
            variant="none"
            className="bg-gradient-to-r from-cyan-600 to-violet-600 hover:from-cyan-500 hover:to-violet-500 text-white font-bold px-8 border-0 shadow-lg"
            size="lg"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Jadwalkan Tur Gratis
          </Button>
        </div>
      </div>
    </section>
  )
}
