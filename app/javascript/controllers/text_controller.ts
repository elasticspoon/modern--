import { Controller } from "@hotwired/stimulus"
import { ValueDefinitionMap } from "@hotwired/stimulus/dist/types/core/value_properties"

// Connects to data-controller="text"
export default class extends Controller {
  static targets: string[] = ["elementWithText"];
  elementWithTextTarget: HTMLElement

  static values: ValueDefinitionMap = {
    status: Boolean,
    on: { type: String, default: "On" },
    off: { type: String, default: "Off" }
  }
  onValue: string
  offValue: string
  statusValue: boolean

  statusValueChanged(): void {
    this.updateText()
  }

  toggle(): void {
    this.statusValue = !this.statusValue
  }

  updateText(): void {
    this.elementWithTextTarget.innerHTML = this.newText()
  }

  newText(): string {
    return this.statusValue ? this.onValue : this.offValue;
  }
}
