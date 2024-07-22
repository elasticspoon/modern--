import * as React from "react"
import Seat from "./seat"

export interface RowProps {
  rowNumber: number
  seatsPerRow: number
  ticketsToBuyCount: number
}

// obscure code that does
// ex: seatPerRow = 5 =>
// [0, 1, 2, 3, 4]
//
// Array.from(
//     Array(props.seatPerRow).keys()
//   )
function Row({
  seatsPerRow,
  ticketsToBuyCount,
}: RowProps): React.ReactElement {
  const [seatStatuses, setSeatStatuses] = React.useState(
    Array.from(Array(seatsPerRow).keys()).map(() => "unsold")
  )

  function isSeatValid(seatNumber: number): boolean {
    if (seatNumber + ticketsToBuyCount > seatsPerRow) {
      return false
    }

    for (let i = 1; i < ticketsToBuyCount; i++) {
      if (seatStatuses[seatNumber + i] === "held") {
        return false
      }
    }
    return true
  }

  function validSeatStatus(seatNumber: number): string {
    if (seatStatuses[seatNumber] === "held") {
      return "held"
    } else {
      return isSeatValid(seatNumber) ? "unsold" : "invalid"
    }
  }

  function newState(oldState: string) {
    if (oldState === "unsold") {
      return "held"
    } else if (oldState === "held") {
      return "unsold"
    } else {
      return "invalid"
    }
  }

  function onSeatChange(seatNumber: number): void {
    if (validSeatStatus(seatNumber) === "invalid") {
      return
    }

    setSeatStatuses(
      seatStatuses.map((status, index) => {
        if (index >= seatNumber && index < seatNumber + ticketsToBuyCount) {
          return newState(status)
        } else {
          return status
        }
      })
    )
  }

  const seatItems: React.ReactElement[] = Array.from(
    Array(seatsPerRow).keys()
  ).map((seatNumber: number) => {
    return (
      <Seat
        seatNumber={seatNumber}
        key={seatNumber}
        status={validSeatStatus(seatNumber)}
        clickHandler={onSeatChange}
      />
    )
  })
  return <tr className="h-20">{seatItems}</tr>
}

export default Row
