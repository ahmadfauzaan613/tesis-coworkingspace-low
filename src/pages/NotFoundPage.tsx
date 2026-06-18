import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Home, AlertTriangle, ArrowLeft } from "lucide-react"
import { useEffect } from "react"

export default function NotFoundPage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "SpaceHub | Halaman Tidak Ditemukan"
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#06060f]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-700/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-cyan-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-md mx-auto text-center">
        {/* Glow Icon Container */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-violet-600/20 to-cyan-500/20 border border-white/10 shadow-2xl shadow-violet-500/10 mb-8 relative group">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
          <AlertTriangle className="w-10 h-10 text-violet-400 relative z-10 animate-bounce" />
        </div>

        <h1 className="text-8xl font-black tracking-tighter mb-4">
          <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            404
          </span>
        </h1>
        
        <h2 className="text-2xl font-bold text-white mb-3">Halaman Tidak Ditemukan</h2>
        
        <p className="text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed">
          Maaf, halaman yang kamu cari tidak dapat ditemukan atau telah dipindahkan ke alamat lain.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 gap-2 px-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
          <Button
            onClick={() => navigate("/")}
            variant="none"
            className="bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-semibold px-6 border-0 shadow-lg shadow-violet-500/20 gap-2"
          >
            <Home className="w-4 h-4" />
            Beranda
          </Button>
        </div>
      </div>
    </section>
  )
}
