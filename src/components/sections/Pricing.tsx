import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Zap } from "lucide-react"
import { useNavigate } from "react-router-dom"

type Period = "daily" | "monthly" | "yearly"

const plans = {
  daily: [
    {
      name: "Day Pass",
      price: "75.000",
      desc: "Akses sehari penuh ke semua area hot desk",
      highlight: false,
      badge: null,
      features: [
        "Hot Desk (pilih tempat sendiri)",
        "WiFi 1 Gbps",
        "Akses Café & Pantry",
        "Printing 20 lembar",
        "Loker harian",
        "Akses 08.00–22.00",
      ],
      cta: "Mulai Hari Ini",
    },
    {
      name: "Flexi Pass",
      price: "300.000",
      desc: "5 hari akses dalam sebulan, bebas pilih hari",
      highlight: true,
      badge: "🔥 Best Value",
      features: [
        "5 Hari Hot Desk/bulan",
        "WiFi 1 Gbps",
        "Akses Café & Pantry",
        "Printing 50 lembar",
        "Loker harian",
        "Akses 24/7 (5 hari)",
        "1 Jam Meeting Room",
      ],
      cta: "Pilih Flexi",
    },
    {
      name: "Team Day",
      price: "500.000",
      desc: "Akses sehari untuk tim hingga 10 orang",
      highlight: false,
      badge: "👥 Tim",
      features: [
        "10 Orang Hot Desk",
        "WiFi 1 Gbps",
        "Akses Café & Pantry",
        "Printing 100 lembar",
        "2 Jam Meeting Room",
        "Koordinator Layanan",
      ],
      cta: "Bawa Tim",
    },
  ],
  monthly: [
    {
      name: "Starter",
      price: "1.500.000",
      desc: "Hot desk bulanan untuk individu produktif",
      highlight: false,
      badge: null,
      features: [
        "Hot Desk Unlimited",
        "WiFi 1 Gbps Dedicated",
        "Akses Café & Pantry",
        "Printing 100 lembar",
        "Loker Pribadi",
        "Akses 24/7",
        "2 Jam Meeting Room",
      ],
      cta: "Mulai Sekarang",
    },
    {
      name: "Professional",
      price: "2.500.000",
      desc: "Dedicated desk dengan semua keistimewaan",
      highlight: true,
      badge: "⭐ Terpopuler",
      features: [
        "Dedicated Desk (meja tetap)",
        "WiFi 1 Gbps Dedicated",
        "Akses Café & Pantry",
        "Printing Unlimited",
        "Loker Besar Pribadi",
        "Akses 24/7",
        "5 Jam Meeting Room",
        "Alamat Bisnis Resmi",
        "Akses Komunitas VIP",
      ],
      cta: "Upgrade ke Pro",
    },
    {
      name: "Enterprise",
      price: "8.000.000",
      desc: "Private office untuk tim hingga 10 orang",
      highlight: false,
      badge: "💎 Premium",
      features: [
        "Private Office (terkunci)",
        "Branding Perusahaan",
        "WiFi Dedicated Line",
        "Printing Unlimited",
        "Resepsionis Dedicasi",
        "10 Jam Meeting Room",
        "Parkir 2 Mobil",
        "Event Space Access",
        "Priority Support",
      ],
      cta: "Hubungi Kami",
    },
  ],
  yearly: [
    {
      name: "Starter Annual",
      price: "1.200.000",
      desc: "Hemat 20% dengan komitmen tahunan",
      highlight: false,
      badge: "💰 Hemat 20%",
      features: [
        "Hot Desk Unlimited",
        "WiFi 1 Gbps Dedicated",
        "Akses Café & Pantry",
        "Printing 150 lembar",
        "Loker Pribadi",
        "Akses 24/7",
        "3 Jam Meeting Room",
        "Akses Webinar Eksklusif",
      ],
      cta: "Hemat Tahunan",
    },
    {
      name: "Pro Annual",
      price: "2.000.000",
      desc: "Dedicated desk, hemat 20% per bulan",
      highlight: true,
      badge: "🏆 Best Deal",
      features: [
        "Dedicated Desk",
        "WiFi 1 Gbps Dedicated",
        "Akses Café & Pantry",
        "Printing Unlimited",
        "Loker Besar",
        "Akses 24/7",
        "8 Jam Meeting Room",
        "Alamat Bisnis Resmi",
        "Komunitas VIP",
        "1x Event Hosting Gratis",
      ],
      cta: "Terbaik untuk Kamu",
    },
    {
      name: "Enterprise Annual",
      price: "6.400.000",
      desc: "Private office tahunan, hemat 20%",
      highlight: false,
      badge: "💎 Premium",
      features: [
        "Private Office",
        "Branding Perusahaan",
        "Dedicated Internet",
        "Printing Unlimited",
        "Resepsionis",
        "15 Jam Meeting Room",
        "Parkir 3 Mobil",
        "Unlimited Event Space",
        "Account Manager",
      ],
      cta: "Hubungi Tim Kami",
    },
  ],
}

const faqs = [
  {
    q: "Apakah saya bisa ganti paket di tengah bulan?",
    a: "Tentu saja! Kamu bisa melakukan upgrade atau downgrade paket kapan saja. Biaya akan dihitung secara prorata (pro-rated) berdasarkan hari yang tersisa."
  },
  {
    q: "Bagaimana cara memesan tour lokasi sebelum bergabung?",
    a: "Kamu bisa menjadwalkan tur gratis dengan mengeklik tombol 'Jadwalkan Tur' di halaman Kontak atau Lokasi. Tim kami akan menyambutmu dan menunjukkan area kerja."
  },
  {
    q: "Apakah ada deposit untuk sewa Private Office?",
    a: "Untuk Private Office, diperlukan deposit jaminan sebesar 1 bulan sewa. Deposit ini sepenuhnya dapat dikembalikan saat masa sewa selesai tanpa kerusakan."
  },
  {
    q: "Fasilitas apa saja yang sudah termasuk dalam harga paket?",
    a: "Semua paket (kecuali Day Pass dasar) mencakup akses internet 1 Gbps, akses pantry & café free-flow, loker pribadi, kredit cetak dokumen, dan undangan ke acara komunitas kami."
  },
  {
    q: "Apakah saya bisa memesan Meeting Room tanpa menjadi member?",
    a: "Ya! Non-member dapat menyewa Meeting Room dan Podcast Studio secara per jam dengan tarif standar. Hubungi kami langsung via WhatsApp untuk reservasi."
  }
]

export default function Pricing() {
  const [period, setPeriod] = useState<Period>("monthly")
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const navigate = useNavigate()
  const goToContact = (planName?: string) => navigate(planName ? `/kontak?interest=${encodeURIComponent(planName)}` : "/kontak")

  return (
    <section id="pricing" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b1f]/50 to-transparent pointer-events-none" />
      <div className="absolute right-10 top-20 w-80 h-80 bg-violet-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-10 bottom-20 w-80 h-80 bg-cyan-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
            Harga Transparan
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Paket yang Pas{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              untuk Kamu
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Harga jelas, tanpa biaya tersembunyi. Pilih paket sesuai kebutuhan dan mulai bekerja hari ini.
          </p>

          {/* Period Toggle */}
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center bg-white/5 border border-white/10 rounded-xl p-1 gap-1 max-w-full">
            {(["daily", "monthly", "yearly"] as Period[]).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                data-testid={`pricing-toggle-${p}`}
                className={`px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  period === p
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {p === "daily" ? "Harian" : p === "monthly" ? "Bulanan" : "Tahunan"}
                {p === "yearly" && (
                  <span className="ml-1 sm:ml-1.5 text-[10px] sm:text-xs bg-green-500/20 text-green-400 px-1.5 py-0.5 rounded-full">-20%</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans[period].map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group ${
                plan.highlight
                  ? "border-2 border-violet-500/50 shadow-2xl shadow-violet-500/20"
                  : "border border-white/10 hover:border-white/25"
              }`}
            >
              {plan.highlight && (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 to-cyan-900/10 pointer-events-none" />
              )}
              {plan.highlight && (
                <div className="h-1 w-full bg-gradient-to-r from-violet-500 to-cyan-500" />
              )}

              <div className="relative p-8 bg-white/[0.03]">
                {/* Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{plan.name}</div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-gray-500">Rp</span>
                      <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-white"}`}>
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {period === "daily" ? "per akses" : period === "monthly" ? "per bulan" : "per bulan (tagihan tahunan)"}
                    </div>
                  </div>
                  {plan.badge && (
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                      plan.highlight
                        ? "bg-violet-500/30 text-violet-200 border border-violet-500/30"
                        : "bg-white/10 text-white/70"
                    }`}>
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="text-gray-400 text-sm mb-6 leading-relaxed">{plan.desc}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.highlight
                          ? "bg-violet-500/20 text-violet-400"
                          : "bg-white/10 text-gray-400"
                      }`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className={plan.highlight ? "text-gray-200" : "text-gray-400"}>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => goToContact(plan.name)}
                  variant="none"
                  data-testid={`pricing-book-${plan.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={`w-full font-semibold ${
                    plan.highlight
                      ? "bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white border-0 shadow-lg shadow-violet-500/30"
                      : "bg-white/8 hover:bg-white/15 text-white border border-white/10 hover:border-white/25"
                  }`}
                >
                  {plan.highlight && <Zap className="w-4 h-4 mr-2 fill-current" />}
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-600 text-sm mt-8">
          💳 Semua harga sudah termasuk PPN. Pembayaran via transfer bank, kartu kredit, atau GoPay/OVO.
          <button onClick={() => navigate("/kontak")} className="text-violet-400 hover:text-violet-300 ml-1 underline underline-offset-2">
            Hubungi kami untuk custom plan.
          </button>
        </p>

        {/* FAQ Section */}
        <div className="mt-28 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              Punya Pertanyaan?
            </span>
            <h3 className="text-3xl font-black text-white">Pertanyaan Sering Diajukan</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="bg-white/[0.02] border border-white/8 rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/15"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    data-testid={`faq-button-${index}`}
                    className="w-full flex items-center justify-between p-5 text-left text-white font-bold text-base md:text-lg hover:text-violet-400 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 ml-4 text-violet-400">
                      {isOpen ? (
                        <svg className="w-5 h-5 transform rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 transform transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    data-testid={`faq-answer-${index}`}
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[200px] border-t border-white/8 opacity-100 p-5 text-gray-400 text-sm md:text-base leading-relaxed" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
