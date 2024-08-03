import * as React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Seat, { SeatProps } from "./seat"

describe("Seat Component", () => {
  const mockClickHandler = jest.fn().mockName("mockClickHandler")
  function renderSeat(props = {}) {
    const defaultProps: SeatProps = {
      seatNumber: 0,
      status: "unsold",
      clickHandler: mockClickHandler,
    }

    return render(
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <Seat {...defaultProps} {...props}></Seat>
          </tr>
        </tbody>
      </table>
    )
  }

  it("renders a seat", () => {
    renderSeat()
    expect(screen.getByText("1")).toBeDefined()
  })

  it("renders correct styles for a unsold seat", () => {
    renderSeat({ status: "unsold" })
    expect(screen.getByText("1")).toHaveClass("hover:bg-blue-300 bg-white")
  })

  it("renders correct styles for a held seat", () => {
    renderSeat({ status: "held" })
    expect(screen.getByText("1")).toHaveClass("bg-green-500")
  })

  it("renders correct styles for a invalid seat", () => {
    renderSeat({ status: "invalid" })
    expect(screen.getByText("1")).toHaveClass("bg-red-500")
  })

  it("calls clickHandler on click", () => {
    renderSeat()
    const seat = screen.getByText("1")
    fireEvent.click(seat)

    expect(mockClickHandler).toHaveBeenCalledTimes(1)
  })
})
