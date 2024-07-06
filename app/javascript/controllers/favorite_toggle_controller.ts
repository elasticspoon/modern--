import { Controller } from "@hotwired/stimulus"

export default class FavoriteToggleController extends Controller {
  toggle({ params: { text } }) {
    console.log(text)
  }
}
