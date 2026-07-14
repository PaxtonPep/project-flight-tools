import { airports } from "./airports.js";
import { aircraft } from "./aircraft.js";
import { filterAircraftByGamepass } from "./filters.js";
import { randomFlight } from "./randomizer.js";

document.getElementById("generate-btn").addEventListener("click", () => {

  const selectedAircraft = [...document.querySelectorAll("#aircraft-list input:checked")].map(i => i.value);
  const fromAirports = [...document.querySelectorAll("#from-list input:checked")].map(i => i.value);
  const toAirports = [...document.querySelectorAll("#to-list input:checked")].map(i => i.value);

  const gamepasses = {
    military: document.getElementById("gp-military").checked,
    cargo: document.getElementById("gp-cargo").checked,
    heli: document.getElementById("gp-heli").checked,
    seaplane: document.getElementById("gp-seaplane").checked,
    vip: document.getElementById("gp-vip").checked
  };

  const filteredAircraft = filterAircraftByGamepass(selectedAircraft, gamepasses);

  const result = randomFlight(filteredAircraft, fromAirports, toAirports);

  document.getElementById("output").innerHTML = `
    <h3>Generated Flight</h3>
    <p><strong>Aircraft:</strong> ${result.aircraft}</p>
    <p><strong>From:</strong> ${result.from}</p>
    <p><strong>To:</strong> ${result.to}</p>
  `;
});
