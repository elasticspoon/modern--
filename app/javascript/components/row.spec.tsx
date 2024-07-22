import * as React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Row, { RowProps } from "./row"

describe("Row Component", () => {
  function renderRow(props = {}) {
    const defaultProps: RowProps = {
      rowNumber: 0,
      seatsPerRow: 1,
      ticketsToBuyCount: 1,
    }

    return render(
      <table>
        <thead></thead>
        <tbody>
          <Row {...defaultProps} {...props}></Row>
        </tbody>
      </table>
    )
  }

  it("renders a row with multiple seats and correct seat numbers", () => {
    renderRow({ seatsPerRow: 3 })

    expect(screen.getByText("1")).toBeDefined()
    expect(screen.getByText("2")).toBeDefined()
    expect(screen.getByText("3")).toBeDefined()
  })

  it("swaps an unsold seat to sold when clicked", () => {
    const seat = renderRow().getByText("1")
    fireEvent.click(seat)

    expect(seat).toHaveClass("bg-green-500")
  })

  it("does nothing is a user clicks an invalid seat", () => {
    const row = renderRow({ seatsPerRow: 2, ticketsToBuyCount: 2 })

    expect(row.getByText("2")).toHaveClass("bg-red-500")

    fireEvent.click(row.getByText("2"))

    expect(row.getByText("1")).toHaveClass("bg-white")
    expect(row.getByText("2")).toHaveClass("bg-red-500")
  })

  it("swaps an sold seat to sold when clicked", () => {
    const seat = renderRow().getByText("1")
    fireEvent.click(seat)

    expect(seat).toHaveClass("bg-green-500")
  })

  describe("when a user is buying multiple tickets", () => {
    it("does not allow a user to buy tickets if there are not ticketsToBuyCount-1 seat to the right", () => {
      const row = renderRow({ seatsPerRow: 4, ticketsToBuyCount: 2 })

      expect(row.getByText("4")).toHaveClass("bg-red-500")
    })

    it("marks multiple seats as sold", () => {
      const row = renderRow({ seatsPerRow: 4, ticketsToBuyCount: 2 })
      fireEvent.click(row.getByText("3"))

      expect(row.getByText("3")).toHaveClass("bg-green-500")
      expect(row.getByText("4")).toHaveClass("bg-green-500")
    })

    it("marks seats next to sold seats as invalid", () => {
      const row = renderRow({ seatsPerRow: 4, ticketsToBuyCount: 2 })
      fireEvent.click(row.getByText("3"))

      expect(row.getByText("1")).toHaveClass("bg-white")
      expect(row.getByText("2")).toHaveClass("bg-red-500")
    })
  })
})
