import PageHero from "@/components/PageHero"
import Testimonials from "@/components/sections/Testimonials"

export default function TestimoniPage() {
  return (
    <>
      <PageHero
        badge="Testimoni Member"
        badgeColor="bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
        title="Mereka Sudah"
        titleHighlight="Merasakannya"
        description="Lebih dari 2,400 profesional sudah memilih SpaceHub. Baca cerita nyata dari para member kami — freelancer, startup founder, remote worker, hingga content creator."
        breadcrumb="Testimoni"
      />
      <Testimonials />
    </>
  )
}
