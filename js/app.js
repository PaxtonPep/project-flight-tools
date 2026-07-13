import { aircraft } from "./aircraft.js";
import { airports } from "./airports.js";
import { generateFlight } from "./randomizer.js";
import { setupUI } from "./ui.js";

setupUI();

function getSelectedGamepasses() {
    const boxes = document.querySelectorAll(".gamepass");
    const selected = [];
    boxes.forEach(box => {
        if (box.checked) selected.push(box.value);
    });
    return selected;
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const passes = getSelectedGamepasses();
    const result = generateFlight(aircraft, airports, passes);
    document.getElementById("result").innerHTML = result;
});
