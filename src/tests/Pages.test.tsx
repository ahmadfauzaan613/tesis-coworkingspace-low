import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import HomePage from "@/pages/HomePage"
import TentangPage from "@/pages/TentangPage"
import FasilitasPage from "@/pages/FasilitasPage"
import RuanganPage from "@/pages/RuanganPage"
import TestimoniPage from "@/pages/TestimoniPage"
import LokasiPage from "@/pages/LokasiPage"
import NotFoundPage from "@/pages/NotFoundPage"

describe("Smoke Tests - Presentational Pages Mount", () => {
  it("renders HomePage without crashing", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    expect(screen.getByText(/Kerja Lebih/i)).toBeInTheDocument()
    expect(screen.getByText(/Kolaborasi/i)).toBeInTheDocument()
  })

  it("renders TentangPage without crashing", () => {
    render(
      <MemoryRouter>
        <TentangPage />
      </MemoryRouter>
    )
    // Matches the first element since the phrase appears in both PageHero and About section
    expect(screen.getAllByText(/Lebih dari Sekadar/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Ruang Kerja/i)[0]).toBeInTheDocument()
  })

  it("renders FasilitasPage without crashing", () => {
    render(
      <MemoryRouter>
        <FasilitasPage />
      </MemoryRouter>
    )
    // Matches the first element since the phrase appears in both PageHero and Facilities list
    expect(screen.getAllByText(/Semua yang Kamu Butuhkan/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Ada di Sini/i)[0]).toBeInTheDocument()
  })

  it("renders RuanganPage without crashing", () => {
    render(
      <MemoryRouter>
        <RuanganPage />
      </MemoryRouter>
    )
    // Matches the first element since the phrase appears in both PageHero and Spaces list
    expect(screen.getAllByText(/Ruangan untuk Setiap/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Kebutuhan/i)[0]).toBeInTheDocument()
  })

  it("renders TestimoniPage without crashing", () => {
    render(
      <MemoryRouter>
        <TestimoniPage />
      </MemoryRouter>
    )
    // Matches the first element since the phrase "Mereka Sudah" appears in both PageHero and Testimonials list
    expect(screen.getAllByText(/Mereka Sudah/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Merasakannya/i)[0]).toBeInTheDocument()
  })

  it("renders LokasiPage without crashing", () => {
    render(
      <MemoryRouter>
        <LokasiPage />
      </MemoryRouter>
    )
    // Matches the first element since the phrase "Ada di Jantung" appears in both PageHero and Location list
    expect(screen.getAllByText(/Ada di Jantung/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Jakarta/i)[0]).toBeInTheDocument()
  })

  it("renders NotFoundPage without crashing", () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )
    expect(screen.getByText("404")).toBeInTheDocument()
    expect(screen.getByText(/Halaman Tidak Ditemukan/i)).toBeInTheDocument()
  })
})
