import PageHero from "@/components/PageHero"
import Contact from "@/components/sections/Contact"

export default function KontakPage() {
  return (
    <>
      <PageHero
        badge="Hubungi Kami"
        badgeColor="bg-violet-500/10 text-violet-400 border-violet-500/20"
        title="Mulai Perjalanan"
        titleHighlight="Produktifmu"
        description="Tim kami siap membantu kamu menemukan ruang kerja paling sesuai. Hubungi via form, WhatsApp, email, atau langsung kunjungi lokasi kami."
        breadcrumb="Kontak"
      />
      <Contact />
    </>
  )
}
