import { aircraft } from "./aircraft.js";
import { airports } from "./airports.js";
import { generateFlight } from "./randomizer.js";
import { setupUI } from "./ui.js";

setupUI();

document.getElementById("generateBtn").addEventListener("click", () => {
    const result = generateFlight(aircraft, airports);
    document.getElementById("result").innerHTML = result;
});
