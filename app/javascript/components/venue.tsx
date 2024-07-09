import * as React from "react"
import VenueBody from "./venue_body"
import VenueHeader from "./venue_header"

export interface VenueProps {
  seatsPerRow: number
  rows: number
}

function Venue({ seatsPerRow, rows }: VenueProps): React.ReactElement {
  const [ticketsToBuyCount, setTicketsToBuyCount] = React.useState(1)
  return (
    <>
      <VenueHeader
        seatsPerRow={seatsPerRow}
        setTicketsToBuyCount={setTicketsToBuyCount}
      />
      <VenueBody
        seatsPerRow={seatsPerRow}
        rows={rows}
        ticketsToBuyCount={ticketsToBuyCount}
      />
    </>
  )
}

export default Venue
