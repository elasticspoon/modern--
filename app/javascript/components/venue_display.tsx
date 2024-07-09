import { createRoot } from "react-dom/client"
import * as React from "react"
import Venue from "./venue"

document.addEventListener("turbo:load", () => {
  if (document.getElementById("react-element")) {
    const container = document.getElementById("react-element")
    const root = createRoot(container)

    return root.render(<Venue seatsPerRow={10} rows={10} />)
  }
})
