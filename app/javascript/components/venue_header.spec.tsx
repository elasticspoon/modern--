import * as React from "react"
import { render, fireEvent } from "@testing-library/react"
import VenueHeader, { VenueHeaderProps } from "./venue_header"

describe("VenueHeader Component", () => {
  const mockClickHandler = jest.fn().mockName("mockClickHandler")

  function renderVenueHeader(props = {}) {
    const defaultProps: VenueHeaderProps = {
      seatsPerRow: 1,
      setTicketsToBuyCount: mockClickHandler,
    }

    return render(<VenueHeader {...defaultProps} {...props} />)
  }

  it("renders a select with seatsPerRow options", () => {
    const header = renderVenueHeader({ seatsPerRow: 3 })

    expect(header.getByRole("combobox")).toBeDefined()
    expect(header.getAllByRole("option").length).toEqual(3)
  })

  it("sets ticketsToBuyCount based on value selected from options", () => {
    const header = renderVenueHeader({ seatsPerRow: 3 })

    const combobox = header.getByRole("combobox")
    fireEvent.change(combobox, { target: { value: 2 } })

    expect(mockClickHandler).toHaveBeenCalledTimes(1)
    expect(mockClickHandler).toHaveBeenCalledWith(2)
  })
})
