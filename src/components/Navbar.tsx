import { useState, useEffect } from "react"
import { NavLink, Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"

const navLinks = [
  { label: "Tentang", href: "/tentang" },
  { label: "Fasilitas", href: "/fasilitas" },
  { label: "Ruangan", href: "/ruangan" },
  { label: "Harga", href: "/harga" },
  { label: "Testimoni", href: "/testimoni" },
  { label: "Lokasi", href: "/lokasi" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#06060f]/90 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
            <Zap className="w-5 h-5 text-white" fill="white" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            Space<span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              data-testid={`navbar-link-${link.label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-2 text-sm rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/8"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            onClick={() => navigate("/kontak")}
            variant="none"
            data-testid="navbar-cta-desktop"
            className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold px-5 shadow-lg shadow-violet-500/25 border-0"
            size="sm"
          >
            Book a Tour
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
          data-testid="navbar-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4 bg-[#0d0d1a]/95 backdrop-blur-xl border-t border-white/10 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              data-testid={`navbar-mobile-link-${link.label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-left px-4 py-3 rounded-lg transition font-medium ${
                  isActive ? "text-white bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/8"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            onClick={() => { navigate("/kontak"); setMenuOpen(false) }}
            variant="none"
            data-testid="navbar-cta-mobile"
            className="mt-3 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold border-0"
          >
            Book a Tour
          </Button>
        </div>
      </div>
    </header>
  )
}
