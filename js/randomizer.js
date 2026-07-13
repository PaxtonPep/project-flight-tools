export function generateFlight(aircraft, airports) {
    if (!aircraft.length) return "No aircraft found.";
    if (!airports.length) return "No airports found.";

    // Pick a random aircraft
    const plane = aircraft[Math.floor(Math.random() * aircraft.length)];

    // Filter airports that can handle the plane
    const validAirports = airports.filter(a => {
        if (a.maxSize === "small") return plane.size === "small";
        if (a.maxSize === "medium") return plane.size === "small" || plane.size === "medium";
        if (a.maxSize === "heavy") return true;
    });

    if (!validAirports.length) {
        return `No airports can handle the ${plane.name} (${plane.size}).`;
    }

    const airport = validAirports[Math.floor(Math.random() * validAirports.length)];

    const liveryNames = plane.liveries.map(l => l.name).join(", ");

    return `
        <strong>Aircraft:</strong> ${plane.name}<br>
        <strong>Size:</strong> ${plane.size}<br>
        <strong>Liveries:</strong> ${liveryNames}<br>
        <strong>Departure:</strong> ${airport.name}<br>
        <strong>Airport Max Size:</strong> ${airport.maxSize}
    `;
}
