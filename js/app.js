// Mode switching
const modeRadios = document.querySelectorAll("input[name='mode']");
const projectFlightSection = document.getElementById("projectFlightSection");
const ptfsSection = document.getElementById("ptfsSection");

modeRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    if (radio.value === "projectFlight") {
      projectFlightSection.classList.remove("hidden");
      ptfsSection.classList.add("hidden");
    } else {
      projectFlightSection.classList.add("hidden");
      ptfsSection.classList.remove("hidden");
    }
  });
});

// --- Minimal PTFS randomizer (placeholder) ---
document.getElementById("generateBtn").addEventListener("click", () => {
  const result = document.getElementById("result");
  result.textContent = "PTFS randomizer will go here once we add your full airport + aircraft database.";
});
