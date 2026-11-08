import { updateAllProfileCards } from "./modules/profile-view.js";

function initialize() {
  updateAllProfileCards();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize, { once: true });
} else {
  initialize();
}
