import { Controller } from "@hotwired/stimulus"
import { ValueDefinitionMap } from "@hotwired/stimulus/dist/types/core/value_properties";

// Connects to data-controller="css"
export default class extends Controller {
  static targets: string[] = ["element"]
  elementTarget: HTMLElement

  static classes: string[] = ["css"]
  cssClasses: string[]

  static values: ValueDefinitionMap = { status: Boolean }
  statusValue: boolean

  toggleClass() {
    this.statusValue = !this.statusValue
  }

  statusValueChanged(): void {
    this.updateClasses()
  }

  updateClasses(): void {
    for (const cssClass of this.cssClasses) {
      this.elementTarget.classList.toggle(cssClass, this.statusValue);
    }
  }
}
