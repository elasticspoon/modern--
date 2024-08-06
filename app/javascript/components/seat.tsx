import * as React from "react"
import styled from "styled-components"

export interface SeatProps {
  seatNumber: number
  status: string
  clickHandler: (seatNumber: number) => void
}

function stateColor(status: string): string {
  if (status === "unsold") {
    return "white"
  } else if (status === "held") {
    return "green"
  } else {
    return "red"
  }
}

interface SquareProps {
  status: string
  className?: string
}
const buttonClass = "p-4 m-2 border-black border-4 button text-lg"
const ButtonSquare = styled.span.attrs({
  className: buttonClass,
})<SquareProps>`
  background-color: ${(props) => stateColor(props.status)};
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.status === "unsold" ? "lightblue" : stateColor(props.status)};
  }
`

// function Seat(props: { seatNumber: number }): React.ReactElement { # inline interface
// function Seat({ seatNumber: seatNumber }: SeatProps): React.ReactElement { # with destructuring
function Seat({
  seatNumber,
  status,
  clickHandler,
}: SeatProps): React.ReactElement {
  function changeState(): void {
    clickHandler(seatNumber)
  }

  return (
    <td>
      <ButtonSquare status={status} onClick={changeState}>
        {seatNumber + 1}
      </ButtonSquare>
    </td>
  )
}

export default Seat
