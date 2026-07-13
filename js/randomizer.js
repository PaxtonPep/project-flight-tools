export function generateFlight(aircraft, airports) {
    if (!aircraft.length) return "No aircraft found.";
    if (!airports.length) return "No airports found.";

    const plane = aircraft[Math.floor(Math.random() * aircraft.length)];
    const airport = airports[Math.floor(Math.random() * airports.length)];

    const liveryNames = plane.liveries.map(l => l.name).join(", ");

    return `
        <strong>Aircraft:</strong> ${plane.name}<br>
        <strong>Liveries:</strong> ${liveryNames}<br>
        <strong>Departure:</strong> ${airport.name}
    `;
}
