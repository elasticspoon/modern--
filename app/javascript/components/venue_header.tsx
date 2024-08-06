import * as React from "react"
import styled from "styled-components"

export interface VenueHeaderProps {
  seatsPerRow: number
  setTicketsToBuyCount: (n: number) => void
}

const StyledHeader = styled.span`
  font-size: 1.5rem;
  font-wieght: bold;
  margin-inline: 15px;
`

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
      <StyledHeader>How many tickets would you like?</StyledHeader>
      <span>
        <select onChange={setTicketsOnChange}>
          {options(seatsPerRow)}
        </select>
      </span>
    </div>
  )
}

export default VenueHeader
