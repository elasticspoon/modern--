import { Controller } from "@hotwired/stimulus"
import { ValueDefinitionMap } from "@hotwired/stimulus/dist/types/core/value_properties"

// Connects to data-controller="css-flip"
export default class extends Controller {
  static targets: string[] = ["element"]
  elementTarget: HTMLElement

  static classes: string[] = ["on", "off"]
  onClasses: string[]
  offClasses: string[]

  static values: ValueDefinitionMap = { status: Boolean }
  statusValue: boolean

  toggle(): void {
    this.flipState()
  }

  flipState(): void {
    this.statusValue = !this.statusValue
  }

  statusValueChanged(): void {
    this.updateClasses()
  }

  updateClasses(): void {
    for (const cssClass of this.onClasses) {
      this.elementTarget.classList.toggle(cssClass, this.statusValue)
    }
    for (const cssClass of this.offClasses) {
      this.elementTarget.classList.toggle(cssClass, !this.statusValue)
    }
  }
}
