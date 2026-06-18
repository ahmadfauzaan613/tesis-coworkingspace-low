import PageHero from "@/components/PageHero"
import Pricing from "@/components/sections/Pricing"

export default function HargaPage() {
  return (
    <>
      <PageHero
        badge="Harga Transparan"
        badgeColor="bg-violet-500/10 text-violet-400 border-violet-500/20"
        title="Paket yang Pas"
        titleHighlight="untuk Kamu"
        description="Harga jelas tanpa biaya tersembunyi. Pilih antara paket harian, bulanan, atau tahunan (hemat 20%). Semua sudah termasuk PPN dan fasilitas lengkap."
        breadcrumb="Harga"
      />
      <Pricing />
    </>
  )
}
