import * as React from "react"

export interface SeatProps {
  seatNumber: number
  status: string
  clickHandler: (seatNumber: number) => void
}

// function Seat(props: { seatNumber: number }): React.ReactElement { # inline interface
// function Seat({ seatNumber: seatNumber }: SeatProps): React.ReactElement { # with destructuring
function Seat({
  seatNumber,
  status,
  clickHandler,
}: SeatProps): React.ReactElement {
  const cssClass = "p-4 m-2 border-black border-4 button text-lg"

  function stateDisplayClass(): string {
    if (status === "unsold") {
      return "hover:bg-blue-300 bg-white"
    } else if (status === "held") {
      return "bg-green-500"
    } else {
      return "bg-red-500"
    }
  }

  function changeState(): void {
    clickHandler(seatNumber)
  }

  return (
    <td>
      <span
        className={`${cssClass} ${stateDisplayClass()}`}
        onClick={changeState}>
        {seatNumber + 1}
      </span>
    </td>
  )
}

export default Seat
