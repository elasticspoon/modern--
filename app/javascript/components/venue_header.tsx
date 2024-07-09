import * as React from "react"

interface VenueHeaderProps {
  seatsPerRow: number
  setTicketsToBuyCount: (n: number) => void
}

function options(seatsPerRow: number): React.ReactNode {
  const arrayOfNumbers: number[] = Array.from(Array(seatsPerRow).keys())
  return arrayOfNumbers.map((i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ))
}

function VenueHeader({
  seatsPerRow,
  setTicketsToBuyCount,
}: VenueHeaderProps): React.ReactElement {
  function setTicketsOnChange(event: React.SyntheticEvent): void {
    const target = event.target as HTMLSelectElement
    setTicketsToBuyCount(parseInt(target.value, 10))
  }

  return (
    <div>
      <span>How many tickets would you like?</span>
      <span>
        <select onChange={setTicketsOnChange}>
          {options(seatsPerRow)}
        </select>
      </span>
    </div>
  )
}

export default VenueHeader
