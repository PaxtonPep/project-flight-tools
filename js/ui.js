import { aircraft } from "./aircraft.js";
import { airports } from "./airports.js";

function sortByName(arr) {
  return [...arr].sort((a, b) => a.name.localeCompare(b.name));
}

function populateList(elementId, items) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";

  sortByName(items).forEach(item => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${item.id}"> ${item.name}`;
    container.appendChild(label);
  });
}

export function initUI() {
  populateList("aircraft-list", aircraft);
  populateList("from-list", airports);
  populateList("to-list", airports);

  const aircraftSearch = document.getElementById("aircraft-search");
  const fromSearch = document.getElementById("from-search");
  const toSearch = document.getElementById("to-search");

  aircraftSearch.addEventListener("input", () => {
    const term = aircraftSearch.value.toLowerCase();
    const container = document.getElementById("aircraft-list");
    container.querySelectorAll("label").forEach(label => {
      label.style.display = label.innerText.toLowerCase().includes(term) ? "block" : "none";
    });
  });

  fromSearch.addEventListener("input", () => {
    const term = fromSearch.value.toLowerCase();
    const container = document.getElementById("from-list");
    container.querySelectorAll("label").forEach(label => {
      label.style.display = label.innerText.toLowerCase().includes(term) ? "block" : "none";
    });
  });

  toSearch.addEventListener("input", () => {
    const term = toSearch.value.toLowerCase();
    const container = document.getElementById("to-list");
    container.querySelectorAll("label").forEach(label => {
      label.style.display = label.innerText.toLowerCase().includes(term) ? "block" : "none";
    });
  });
}

initUI();
