import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ChevronRight, Home } from "lucide-react"

interface PageHeroProps {
  badge: string
  badgeColor?: string
  title: string
  titleHighlight: string
  description: string
  breadcrumb: string
}

export default function PageHero({
  badge,
  badgeColor = "bg-violet-500/10 text-violet-400 border-violet-500/20",
  title,
  titleHighlight,
  description,
  breadcrumb,
}: PageHeroProps) {
  useEffect(() => {
    document.title = `SpaceHub | ${breadcrumb}`
  }, [breadcrumb])
  return (
    <section className="relative pt-32 pb-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-800/15 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-cyan-800/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="flex items-center gap-1 hover:text-gray-300 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-300 font-medium">{breadcrumb}</span>
        </div>

        {/* Badge */}
        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border mb-5 ${badgeColor}`}>
          {badge}
        </span>

        <h1 className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
          {title}{" "}
          <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {titleHighlight}
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
