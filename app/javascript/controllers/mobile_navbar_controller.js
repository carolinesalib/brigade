import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="mobile-navbar"
export default class extends Controller {
  open() {
    const menu = document.getElementById("mobile-navbar")
    menu.classList.remove("hidden")
  }

  close() {
    const menu = document.getElementById("mobile-navbar")
    menu.classList.add("hidden")
  }
}
