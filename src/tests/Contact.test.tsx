import { render, screen, fireEvent, act } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import { describe, it, expect, vi } from "vitest"
import Contact from "@/components/sections/Contact"

describe("Contact Component Form and Query Parameter Prefill", () => {
  it("allows inputs to be filled and submits successfully", () => {
    vi.useFakeTimers()

    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )

    // Form inputs queried by stable test IDs
    const nameInput = screen.getByTestId("contact-name")
    const emailInput = screen.getByTestId("contact-email")
    const phoneInput = screen.getByTestId("contact-phone")
    const messageTextarea = screen.getByTestId("contact-message")
    const submitButton = screen.getByTestId("contact-submit")

    // Fill form
    fireEvent.change(nameInput, { target: { value: "Ahmad Fauzan" } })
    fireEvent.change(emailInput, { target: { value: "ahmad@example.com" } })
    fireEvent.change(phoneInput, { target: { value: "08123456789" } })
    fireEvent.change(messageTextarea, { target: { value: "Ingin memesan tur hari Senin." } })

    expect(nameInput).toHaveValue("Ahmad Fauzan")
    expect(emailInput).toHaveValue("ahmad@example.com")
    expect(phoneInput).toHaveValue("08123456789")
    expect(messageTextarea).toHaveValue("Ingin memesan tur hari Senin.")

    // Submit form
    fireEvent.click(submitButton)

    // Verify loading state
    expect(screen.getByText("Mengirim...")).toBeInTheDocument()

    // Fast-forward fake timers by 1500ms
    act(() => {
      vi.advanceTimersByTime(1500)
    })

    // Verify success screen using data-testid for stable assertion
    expect(screen.getByTestId("contact-success-title")).toBeInTheDocument()
    expect(screen.getByText(/Terima kasih/i)).toBeInTheDocument()
    expect(screen.getByText("Ahmad Fauzan")).toBeInTheDocument()

    vi.useRealTimers()
  })

  it("pre-populates interest category from query parameters", () => {
    // Simulating URL search param: /kontak?interest=Private Office
    render(
      <MemoryRouter initialEntries={["/kontak?interest=Private%20Office"]}>
        <Routes>
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    )

    // Check that "Private Office" option button has the active classes (bg-violet-600) via its data-testid
    const interestBtn = screen.getByTestId("contact-interest-private-office")
    expect(interestBtn).toHaveClass("bg-violet-600")

    // Other buttons like "Hot Desk" should not have active classes
    const inactiveBtn = screen.getByTestId("contact-interest-hot-desk")
    expect(inactiveBtn).not.toHaveClass("bg-violet-600")
  })

  it("pre-populates custom message when specific pricing plan name is passed", () => {
    // Simulating URL search param: /kontak?interest=Day Pass
    render(
      <MemoryRouter initialEntries={["/kontak?interest=Day%20Pass"]}>
        <Routes>
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </MemoryRouter>
    )

    // Check that "Custom Plan" is active since "Day Pass" is not in the base interests list
    const customPlanBtn = screen.getByTestId("contact-interest-custom-plan")
    expect(customPlanBtn).toHaveClass("bg-violet-600")

    // The message textarea should be pre-populated
    const messageTextarea = screen.getByTestId("contact-message")
    expect(messageTextarea).toHaveValue("Halo, saya tertarik menanyakan tentang paket: Day Pass.")
  })
})
