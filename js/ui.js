import { aircraft } from "./aircraft.js";
import { airports } from "./airports.js";

function populateList(elementId, items) {
  const container = document.getElementById(elementId);
  container.innerHTML = "";

  items.forEach(item => {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" value="${item.id}"> ${item.name}`;
    container.appendChild(label);
  });
}

populateList("aircraft-list", aircraft);
populateList("from-list", airports);
populateList("to-list", airports);

// Search filters
document.querySelectorAll(".search").forEach((searchBox, index) => {
  const listId = ["aircraft-list", "from-list", "to-list"][index];
  const list = document.getElementById(listId);

  searchBox.addEventListener("input", () => {
    const term = searchBox.value.toLowerCase();
    list.querySelectorAll("label").forEach(label => {
      label.style.display = label.innerText.toLowerCase().includes(term)
        ? "block"
        : "none";
    });
  });
});
