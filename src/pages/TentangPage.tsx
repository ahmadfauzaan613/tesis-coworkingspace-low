import PageHero from "@/components/PageHero"
import About from "@/components/sections/About"

export default function TentangPage() {
  return (
    <>
      <PageHero
        badge="Tentang SpaceHub"
        badgeColor="bg-violet-500/10 text-violet-400 border-violet-500/20"
        title="Lebih dari Sekadar"
        titleHighlight="Ruang Kerja"
        description="Kenali SpaceHub lebih dalam — visi, misi, dan nilai-nilai yang menjadi fondasi ekosistem kerja terbaik di Indonesia sejak 2019."
        breadcrumb="Tentang"
      />
      <About />
    </>
  )
}
