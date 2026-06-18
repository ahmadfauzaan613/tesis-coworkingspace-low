import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/sections/Footer"
import HomePage from "@/pages/HomePage"
import TentangPage from "@/pages/TentangPage"
import FasilitasPage from "@/pages/FasilitasPage"
import RuanganPage from "@/pages/RuanganPage"
import HargaPage from "@/pages/HargaPage"
import TestimoniPage from "@/pages/TestimoniPage"
import LokasiPage from "@/pages/LokasiPage"
import KontakPage from "@/pages/KontakPage"
import NotFoundPage from "@/pages/NotFoundPage"
import ScrollToTop from "@/components/ScrollToTop"

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#06060f] text-white overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/fasilitas" element={<FasilitasPage />} />
            <Route path="/ruangan" element={<RuanganPage />} />
            <Route path="/harga" element={<HargaPage />} />
            <Route path="/testimoni" element={<TestimoniPage />} />
            <Route path="/lokasi" element={<LokasiPage />} />
            <Route path="/kontak" element={<KontakPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
