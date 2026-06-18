import { Zap, ArrowUpRight, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

// Custom SVG social icons karena lucide-react v0.4+ hapus brand icons
const SocialIcons = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  ),
  Tiktok: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.17 8.17 0 004.77 1.53V6.82a4.85 4.85 0 01-1-.13z" />
    </svg>
  ),
}

const footerLinks = {
  "Produk": [
    { label: "Hot Desk", href: "/ruangan" },
    { label: "Dedicated Desk", href: "/ruangan" },
    { label: "Private Office", href: "/ruangan" },
    { label: "Meeting Room", href: "/ruangan" },
    { label: "Podcast Studio", href: "/ruangan" },
    { label: "Event Space", href: "/ruangan" },
  ],
  "Perusahaan": [
    { label: "Tentang SpaceHub", href: "/tentang" },
    { label: "Fasilitas", href: "/fasilitas" },
    { label: "Lokasi", href: "/lokasi" },
    { label: "Blog & Tips", href: "#" },
    { label: "Karir", href: "#" },
    { label: "Press Kit", href: "#" },
  ],
  "Dukungan": [
    { label: "FAQ", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Hubungi Kami", href: "/kontak" },
    { label: "Partner Program", href: "#" },
  ],
}


const socials = [
  { Icon: SocialIcons.Instagram, href: "https://instagram.com/spacehub.id", label: "Instagram" },
  { Icon: SocialIcons.Twitter, href: "https://twitter.com/spacehubid", label: "Twitter/X" },
  { Icon: SocialIcons.Linkedin, href: "https://linkedin.com/company/spacehub-id", label: "LinkedIn" },
  { Icon: SocialIcons.Youtube, href: "https://youtube.com/@spacehubid", label: "YouTube" },
  { Icon: SocialIcons.Tiktok, href: "https://tiktok.com/@spacehubid", label: "TikTok" },
]

const apps = [
  { name: "App Store", icon: "🍎", href: "#" },
  { name: "Google Play", icon: "▶", href: "#" },
]

export default function Footer() {
  const navigate = useNavigate()

  const handleNav = (href: string) => {
    if (href.startsWith("/") || (href.startsWith("#") && href.length > 1)) {
      // internal route or anchor
      const route = href.startsWith("#") ? href.slice(1) : href
      navigate(route.startsWith("/") ? route : `/${route}`)
    } else if (href !== "#") {
      window.open(href, "_blank")
    }
  }

  return (
    <footer className="relative border-t border-white/8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06060f] to-[#08081a]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        {/* Top CTA Banner */}
        <div className="relative bg-gradient-to-r from-violet-900/40 to-cyan-900/30 border border-white/10 rounded-3xl p-8 mb-16 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Siap Bergabung dengan{" "}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  SpaceHub?
                </span>
              </h3>
              <p className="text-gray-400">Coba 3 hari gratis tanpa kartu kredit. Batal kapan saja.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => handleNav("/kontak")}
                data-testid="footer-cta-free"
                className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-violet-500/25 text-sm"
              >
                Coba 3 Hari Gratis
              </button>
              <button
                onClick={() => handleNav("/harga")}
                data-testid="footer-cta-pricing"
                className="px-6 py-3 bg-white/10 hover:bg-white/15 text-white font-bold rounded-xl transition-all border border-white/10 text-sm"
              >
                Lihat Harga
              </button>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 mb-5 group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Space<span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Hub</span>
              </span>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Coworking space premium di jantung Jakarta. Dirancang untuk profesional, startup, dan kreator
              yang ingin bekerja di level berikutnya.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-violet-500/20 border border-white/10 hover:border-violet-500/30 flex items-center justify-center transition-all group"
                >
                  <span className="text-gray-500 group-hover:text-violet-400 transition-colors">
                    <s.Icon />
                  </span>
                </a>
              ))}
            </div>

            {/* App stores */}
            <div className="flex gap-3">
              {apps.map((app) => (
                <a
                  key={app.name}
                  href={app.href}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all group"
                >
                  <span className="text-sm">{app.icon}</span>
                  <div>
                    <div className="text-[10px] text-gray-600">Download di</div>
                    <div className="text-xs font-semibold text-gray-300 group-hover:text-white">{app.name}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className="text-gray-500 hover:text-gray-200 text-sm transition-colors group flex items-center gap-1"
                    >
                      {link.label}
                      {link.href !== "#" && !link.href.startsWith("#") && (
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                      {link.href !== "#" && link.href.startsWith("#") && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} SpaceHub Indonesia. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-600 text-xs">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Semua sistem normal
            </span>
            <span>|</span>
            <span>Dibuat dengan ❤️ di Jakarta</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
