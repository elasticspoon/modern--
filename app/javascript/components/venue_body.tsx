import * as React from "react"
import Row from "./row"

interface VenueBodyProps {
  ticketsToBuyCount: number
  seatsPerRow: number
  rows: number
}

function rowItems({
  rows,
  seatsPerRow,
  ticketsToBuyCount,
}: VenueBodyProps): React.ReactElement[] {
  const rowNumbers: number[] = Array.from(Array(rows).keys())
  return rowNumbers.map((rowNumber: number) => {
    return (
      <Row
        rowNumber={rowNumber}
        key={rowNumber}
        seatsPerRow={seatsPerRow}
        ticketsToBuyCount={ticketsToBuyCount}
      />
    )
  })
}

function VenueBody(props: VenueBodyProps): React.ReactElement {
  return (
    <table className="table">
      <tbody>{rowItems(props)}</tbody>
    </table>
  )
}

export default VenueBody
