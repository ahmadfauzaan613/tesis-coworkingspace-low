import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, it, expect } from "vitest"
import Pricing from "@/components/sections/Pricing"

describe("Pricing Component FAQ Accordion & Period Toggles", () => {
  it("renders pricing section and period toggles correctly", () => {
    render(
      <MemoryRouter>
        <Pricing />
      </MemoryRouter>
    )

    expect(screen.getByText("Harga Transparan")).toBeInTheDocument()
    expect(screen.getByText("Harian")).toBeInTheDocument()
    expect(screen.getByText("Bulanan")).toBeInTheDocument()
    expect(screen.getByText("Tahunan")).toBeInTheDocument()
  })

  it("renders the FAQ list and toggles expand/collapse state when clicked", () => {
    render(
      <MemoryRouter>
        <Pricing />
      </MemoryRouter>
    )

    // Verify FAQ header is present
    expect(screen.getByText("Pertanyaan Sering Diajukan")).toBeInTheDocument()

    // Find the first FAQ question button
    const questionText = "Apakah saya bisa ganti paket di tengah bulan?"
    const questionButton = screen.getByText(questionText)
    expect(questionButton).toBeInTheDocument()

    // Find the answer text
    const answerText = screen.getByText(/Kamu bisa melakukan upgrade atau downgrade paket kapan saja/i)
    expect(answerText).toBeInTheDocument()

    // The answer parent container is what toggles max-h-0 / max-h-[200px] classes
    const container = answerText.parentElement
    expect(container).toHaveClass("max-h-0")
    expect(container).not.toHaveClass("max-h-[200px]")

    // Toggle: Expand FAQ
    fireEvent.click(questionButton)
    expect(container).toHaveClass("max-h-[200px]")
    expect(container).toHaveClass("opacity-100")
    expect(container).not.toHaveClass("max-h-0")

    // Toggle: Collapse FAQ
    fireEvent.click(questionButton)
    expect(container).toHaveClass("max-h-0")
    expect(container).not.toHaveClass("max-h-[200px]")
  })
})
