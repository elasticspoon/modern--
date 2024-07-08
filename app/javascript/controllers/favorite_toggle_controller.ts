import { Controller } from "@hotwired/stimulus"
import { ValueDefinitionMap } from "@hotwired/stimulus/dist/types/core/value_properties";

export default class FavoriteToggleController extends Controller {
  static classes: string[] = ["hidden"]
  hiddenClass: string

  static targets: string[] = ["elementToHide", "elementWithText"];
  elementToHideTarget: HTMLElement
  elementWithTextTarget: HTMLElement

  static values: ValueDefinitionMap = { visible: Boolean }
  visibleValue: Boolean

  toggle(): void {
    this.flipState()
  }

  visibleValueChanged(): void {
    this.updateText()
    this.updateHiddenClass()
  }

  flipState(): void {
    this.visibleValue = !this.visibleValue
  }

  updateHiddenClass(): void {
    this.elementToHideTarget.classList.toggle(this.hiddenClass, !this.visibleValue);
  }

  newText(): string {
    return this.visibleValue ? "Hide" : "Show"
  }

  updateText(): void {
    this.elementWithTextTarget.innerText = this.newText()
  }
}
