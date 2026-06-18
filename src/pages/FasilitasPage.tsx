import PageHero from "@/components/PageHero"
import Facilities from "@/components/sections/Facilities"

export default function FasilitasPage() {
  return (
    <>
      <PageHero
        badge="Fasilitas Lengkap"
        badgeColor="bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
        title="Semua yang Kamu Butuhkan"
        titleHighlight="Ada di Sini"
        description="12 fasilitas premium kelas dunia yang terus diperbarui untuk memenuhi standar kerja para profesional modern. Dari internet 1 Gbps hingga podcast studio broadcast-ready."
        breadcrumb="Fasilitas"
      />
      <Facilities />
    </>
  )
}
