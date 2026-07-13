export function setupUI() {
    const modeRadios = document.querySelectorAll("input[name='mode']");
    const projectFlightSection = document.getElementById("projectFlightSection");
    const ptfsSection = document.getElementById("ptfsSection");

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
}
