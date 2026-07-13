export function generateFlight(aircraft, airports, selectedGamepasses) {
    if (!aircraft.length) return "No aircraft found.";
    if (!airports.length) return "No airports found.";

    // Filter aircraft by gamepass
    const usableAircraft = aircraft.filter(plane => {
        if (!plane.gamepass || plane.gamepass.length === 0) return true;
        return plane.gamepass.some(g => selectedGamepasses.includes(g));
    });

    if (!usableAircraft.length) return "No aircraft match your gamepasses.";

    // Pick a random plane
    const plane = usableAircraft[Math.floor(Math.random() * usableAircraft.length)];

    // Filter airports that can handle this plane
    const validAirports = airports.filter(a => {
        // gamepass requirement
        if (a.requiresGamepass.length &&
            !a.requiresGamepass.some(g => selectedGamepasses.includes(g))) {
            return false;
        }

        // category
        if (!a.allowedCategories.includes(plane.category)) return false;

        // heli-only
        if (a.onlyHeli && plane.category !== "heli") return false;

        // seaplane-only
        if (a.onlySeaplane && plane.category !== "seaplane") return false;

        // modern military restriction
        if (!a.allowModernMilitary && plane.category === "modernMilitary") return false;

        // size logic (simple: heavy > medium > small)
        const sizeRank = { small: 1, medium: 2, heavy: 3 };
        if (["small", "medium", "heavy"].includes(a.maxSize)) {
            return sizeRank[plane.size] <= sizeRank[a.maxSize];
        }

        // if maxSize is a specific aircraft label (like "777", "q400", etc.)
        // we just allow it for now; you can refine later
        return true;
    });

    if (!validAirports.length) {
        return `No airports can handle ${plane.name} (${plane.category}, ${plane.size}).`;
    }

    const airport = validAirports[Math.floor(Math.random() * validAirports.length)];
    const liveryNames = plane.liveries.map(l => l.name).join(", ");

    return `
        <strong>Aircraft:</strong> ${plane.name}<br>
        <strong>Category:</strong> ${plane.category}<br>
        <strong>Size:</strong> ${plane.size}<br>
        <strong>Liveries:</strong> ${liveryNames}<br>
        <strong>Departure:</strong> ${airport.name} (${airport.id})<br>
        <strong>Airport Color:</strong> ${airport.color}<br>
        <strong>Max Size:</strong> ${airport.maxSize}
    `;
}
