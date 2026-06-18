import PageHero from "@/components/PageHero"
import Location from "@/components/sections/Location"

export default function LokasiPage() {
  return (
    <>
      <PageHero
        badge="Lokasi Strategis"
        badgeColor="bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
        title="Ada di Jantung"
        titleHighlight="Jakarta"
        description="3 lokasi premium di titik paling strategis Jakarta — Sudirman, SCBD, dan Kemang. Mudah dijangkau via MRT, Busway, maupun kendaraan pribadi."
        breadcrumb="Lokasi"
      />
      <Location />
    </>
  )
}
