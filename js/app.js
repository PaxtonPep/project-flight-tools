// Loading screen timeout
setTimeout(() => {
  document.getElementById("loadingScreen").style.display = "none";
  document.getElementById("mainContent").classList.remove("hidden");
}, 3000); // 3 seconds loading animation

// Airport selector logic
const airportSelect = document.getElementById("airportSelect");
const searchBox = document.getElementById("searchBox");
const selectedAirport = document.getElementById("selectedAirport");

function updateAirport() {
  const option = airportSelect.options[airportSelect.selectedIndex];
  selectedAirport.textContent = "Selected Airport: " + option.text;
}

airportSelect.addEventListener("change", updateAirport);

// Search filter
searchBox.addEventListener("input", () => {
  const query = searchBox.value.toLowerCase();

  for (let i = 0; i < airportSelect.options.length; i++) {
    const opt = airportSelect.options[i];
    if (opt.text.toLowerCase().includes(query) || opt.value.toLowerCase().includes(query)) {
      airportSelect.selectedIndex = i;
      updateAirport();
      break;
    }
  }
});

// Initialize
updateAirport();
