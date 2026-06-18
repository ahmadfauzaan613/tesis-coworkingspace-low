import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Badge variant="secondary" className="mb-4 font-poppins">
            🚀 Ready to Build
          </Badge>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            React + Tailwind + shadcn/ui
          </h1>
          <p className="text-slate-400 text-lg">
            Setup berhasil! Font{" "}
            <span className="text-purple-400 font-semibold">Poppins</span>{" "}
            aktif.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                ⚡ Vite
              </CardTitle>
              <CardDescription className="text-slate-400">
                Build tool super cepat dengan HMR
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">
                Lightning-fast dev server dengan hot module replacement
                yang instant.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                🎨 Tailwind CSS v4
              </CardTitle>
              <CardDescription className="text-slate-400">
                Utility-first CSS framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">
                Styling modern dengan pendekatan utility-first dan
                performa optimal.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                🧩 shadcn/ui
              </CardTitle>
              <CardDescription className="text-slate-400">
                Komponen UI yang accessible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">
                Koleksi komponen siap pakai berbasis Radix UI dan
                Tailwind CSS.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                🔤 Poppins
              </CardTitle>
              <CardDescription className="text-slate-400">
                Google Font modern & elegan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-300">
                Font Poppins diload via Google Fonts, tersedia semua weight
                dari 100–900.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="flex gap-3 justify-center">
          <Button
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8"
            size="lg"
          >
            Mulai Development
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10"
          >
            Lihat Dokumentasi
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
