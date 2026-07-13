// =========================
// PTFS FLIGHT TOOLS DATABASE
// =========================

// Master aircraft array — YOU WILL PASTE BATCHES INSIDE HERE
const aircraft = [

  // BATCHES GO HERE
  // Example:
  // { id: "a320", name: "Airbus A320", ... },

]; // ← DO NOT DELETE THIS BRACKET



// =========================
// MODE SWITCHING
// =========================

const modeRadios = document.querySelectorAll("input[name='mode']");
const projectFlightSection = document.getElementById("projectFlightSection");
const ptfsSection = document.getElementById("ptfsSection");

// Default: PTFS visible
projectFlightSection.classList.add("hidden");
ptfsSection.classList.remove("hidden");

modeRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "ptfs") {
      ptfsSection.classList.remove("hidden");
      projectFlightSection.classList.add("hidden");
    } else {
      ptfsSection.classList.add("hidden");
      projectFlightSection.classList.remove("hidden");
    }
  });
});



// =========================
// TEMPORARY RANDOMIZER
// (Will be replaced once all planes + airports are added)
// =========================

document.getElementById("generateBtn").addEventListener("click", () => {
  const result = document.getElementById("result");

  if (aircraft.length === 0) {
    result.textContent = "No aircraft added yet. Paste the batches into app.js.";
    return;
  }

  const randomPlane = aircraft[Math.floor(Math.random() * aircraft.length)];

  result.innerHTML = `
    <strong>Random Aircraft:</strong> ${randomPlane.name}<br>
    <strong>Liveries:</strong> ${randomPlane.liveries.map(l => l.name).join(", ")}
  `;
});
