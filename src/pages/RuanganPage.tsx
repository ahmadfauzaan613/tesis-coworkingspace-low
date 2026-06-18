import PageHero from "@/components/PageHero"
import Spaces from "@/components/sections/Spaces"

export default function RuanganPage() {
  return (
    <>
      <PageHero
        badge="Pilihan Ruangan"
        badgeColor="bg-pink-500/10 text-pink-400 border-pink-500/20"
        title="Ruangan untuk Setiap"
        titleHighlight="Kebutuhan"
        description="Dari hot desk harian yang fleksibel hingga private office eksklusif untuk tim kamu. 6 tipe ruangan dirancang untuk mendukung berbagai gaya kerja modern."
        breadcrumb="Ruangan"
      />
      <Spaces />
    </>
  )
}
