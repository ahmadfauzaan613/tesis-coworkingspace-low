"use client"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle, Send, MapPin, Clock, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 811-5790-0000",
    sub: "Balas dalam 1 jam kerja",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    action: () => window.open("https://wa.me/628115790000?text=Halo+SpaceHub!+Saya+ingin+tahu+lebih+lanjut.", "_blank"),
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@spacehub.id",
    sub: "Kami balas < 24 jam",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    action: () => window.open("mailto:hello@spacehub.id", "_blank"),
  },
  {
    icon: Phone,
    label: "Telepon",
    value: "+62 21 5790 1234",
    sub: "Senin–Jumat, 08.00–18.00",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    action: () => window.open("tel:+622157901234"),
  },
  {
    icon: MapPin,
    label: "Kantor Utama",
    value: "SpaceHub Sudirman, Lt. 12",
    sub: "Jl. Jend. Sudirman Kav. 45",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
    action: () => window.open("https://maps.google.com/?q=Sudirman+Jakarta", "_blank"),
  },
]

const interests = [
  "Hot Desk", "Dedicated Desk", "Private Office",
  "Meeting Room", "Podcast Studio", "Event Space",
  "Tur Lokasi", "Custom Plan",
]

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const interestParam = searchParams.get("interest")
    if (interestParam) {
      const matched = interests.find(
        (i) => i.toLowerCase() === interestParam.toLowerCase() || interestParam.toLowerCase().includes(i.toLowerCase())
      )
      if (matched) {
        setForm((f) => ({ ...f, interest: matched }))
      } else {
        const lowerParam = interestParam.toLowerCase()
        if (
          lowerParam.includes("pass") ||
          lowerParam.includes("starter") ||
          lowerParam.includes("professional") ||
          lowerParam.includes("pro") ||
          lowerParam.includes("enterprise") ||
          lowerParam.includes("annual")
        ) {
          setForm((f) => ({
            ...f,
            interest: "Custom Plan",
            message: `Halo, saya tertarik menanyakan tentang paket: ${interestParam}.`,
          }))
        } else {
          setForm((f) => ({
            ...f,
            interest: "Custom Plan",
            message: `Halo, saya tertarik menanyakan tentang: ${interestParam}.`,
          }))
        }
      }
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1500)
  }

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0b20]/60 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-violet-800/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">
            Hubungi Kami
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
            Mulai Perjalanan{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Produktifmu
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Tim kami siap membantu kamu menemukan ruang kerja yang paling sesuai dengan kebutuhan dan budgetmu.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left — Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <button
                key={info.label}
                onClick={info.action}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border ${info.border} ${info.bg} hover:brightness-125 transition-all duration-200 group text-left`}
              >
                <div className={`w-11 h-11 rounded-xl ${info.bg} border ${info.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{info.label}</div>
                  <div className={`font-semibold text-sm ${info.color}`}>{info.value}</div>
                  <div className="text-xs text-gray-600">{info.sub}</div>
                </div>
              </button>
            ))}

            {/* Quick WhatsApp CTA */}
            <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-green-900/20 to-emerald-900/10 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">Online Sekarang</span>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Chat langsung dengan tim kami di WhatsApp. Respons cepat dalam hitungan menit!
              </p>
              <Button
                onClick={() => window.open("https://wa.me/628115790000?text=Halo+SpaceHub!+Saya+ingin+tahu+lebih+lanjut.", "_blank")}
                variant="none"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold border-0 gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Chat WhatsApp Sekarang
              </Button>
            </div>

            {/* Hours */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-violet-400" />
                <span className="text-white font-semibold text-sm">Jam Operasional CS</span>
              </div>
              <div className="space-y-1.5 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Senin – Jumat</span>
                  <span className="text-gray-300">08.00 – 20.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="text-gray-300">09.00 – 17.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span className="text-gray-500">Via WhatsApp Only</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 data-testid="contact-success-title" className="text-2xl font-black text-white mb-3">Pesan Terkirim! 🎉</h3>
                  <p className="text-gray-400 max-w-sm">
                    Terima kasih, <span className="text-violet-400 font-semibold">{form.name}</span>! Tim kami akan menghubungimu dalam waktu 1×24 jam kerja.
                  </p>
                  <Button
                    onClick={() => setSent(false)}
                    variant="outline"
                    data-testid="contact-reset-btn"
                    className="mt-8 border-white/20 text-white hover:bg-white/10"
                  >
                    Kirim Pesan Lain
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-white mb-1">Kirim Pesan</h3>
                    <p className="text-gray-500 text-sm">Isi form dan tim kami akan segera menghubungi kamu.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">
                        Nama Lengkap *
                      </label>
                      <Input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        data-testid="contact-name"
                        placeholder="Nama kamu"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500/50 focus:ring-0 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">
                        Email *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        data-testid="contact-email"
                        placeholder="email@kamu.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500/50 focus:ring-0 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">
                      No. WhatsApp
                    </label>
                    <Input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      data-testid="contact-phone"
                      placeholder="08xx-xxxx-xxxx"
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500/50 focus:ring-0 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                      Saya tertarik dengan
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setForm({ ...form, interest: item })}
                          data-testid={`contact-interest-${item.toLowerCase().replace(/\s+/g, "-")}`}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 ${
                            form.interest === item
                              ? "bg-violet-600 border-violet-500 text-white shadow-lg shadow-violet-500/25"
                              : "bg-white/5 border-white/10 text-gray-400 hover:border-white/25 hover:text-white"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 block">
                      Pesan
                    </label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      data-testid="contact-message"
                      placeholder="Ceritakan kebutuhan kamu, jumlah orang, atau pertanyaan yang ingin kamu tanyakan..."
                      rows={4}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-violet-500/50 focus:ring-0 rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    variant="none"
                    data-testid="contact-submit"
                    className="w-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold py-6 text-base border-0 shadow-lg shadow-violet-500/25 gap-2 disabled:opacity-70"
                    size="lg"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Kirim Pesan Sekarang
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
