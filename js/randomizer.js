// randomizer.js

// Size ranking by aircraft ID (higher = bigger)
const sizeRank = {
    a380: 10,
    b747: 9,
    b777: 8,
    a350: 8,
    b787: 8,
    b767: 7,
    a330: 7,
    b757: 6,
    b727: 5,
    b707: 5,
    a320: 4,
    b737: 4,
    e190: 4,
    crj700: 4,
    q400: 4,
    atr72: 4,
    learjet: 3,
    kingair260: 2,
    c182: 2,
    c172: 1,
    piperCub: 1,
    twinotter: 2,
    seaplane: 2,   // generic seaplane bucket
    heli: 1,       // generic helicopter bucket
    oldMilitary: 4,
    modernMilitary: 7
};

function canAirportHandle(airport, plane, selectedGamepasses) {
    // 1. Gamepass requirement for airport
    if (airport.requiresGamepass && airport.requiresGamepass.length) {
        const hasRequired = airport.requiresGamepass.some(g =>
            selectedGamepasses.includes(g)
        );
        if (!hasRequired) return false;
    }

    // 2. Category restriction
    if (airport.allowedCategories && airport.allowedCategories.length) {
        if (!airport.allowedCategories.includes(plane.category)) {
            return false;
        }
    }

    // 3. Heli-only
    if (airport.onlyHeli && plane.category !== "heli") {
        return false;
    }

    // 4. Seaplane-only
    if (airport.onlySeaplane && plane.category !== "seaplane") {
        return false;
    }

    // 5. Modern military restriction
    if (airport.allowModernMilitary === false && plane.category === "modernMilitary") {
        return false;
    }

    // 6. Size check using IDs
    const planeRank = sizeRank[plane.id] || 0;
    const airportRank = sizeRank[airport.maxSize] || 0;

    if (planeRank > airportRank) {
        return false;
    }

    return true;
}

export function generateFlight(aircraft, airports, selectedGamepasses) {
    if (!aircraft.length) return "No aircraft found.";
    if (!airports.length) return "No airports found.";

    // Filter aircraft by gamepass
    const usableAircraft = aircraft.filter(plane => {
        if (!plane.gamepass || plane.gamepass.length === 0) return true;
        return plane.gamepass.some(g => selectedGamepasses.includes(g));
    });

    if (!usableAircraft.length) {
        return "No aircraft match your gamepasses.";
    }

    // Pick a random plane
    const plane = usableAircraft[Math.floor(Math.random() * usableAircraft.length)];

    // Filter airports that can handle this plane
    const validAirports = airports.filter(a =>
        canAirportHandle(a, plane, selectedGamepasses)
    );

    if (!validAirports.length) {
        return `No airports can handle ${plane.name}.`;
    }

    const airport = validAirports[Math.floor(Math.random() * validAirports.length)];
    const liveryNames = plane.liveries.map(l => l.name).join(", ");

    return `
        <strong>Aircraft:</strong> ${plane.name}<br>
        <strong>Category:</strong> ${plane.category}<br>
        <strong>Size ID:</strong> ${plane.id}<br>
        <strong>Liveries:</strong> ${liveryNames}<br>
        <strong>Departure:</strong> ${airport.name} (${airport.id})<br>
        <strong>Airport Max Size:</strong> ${airport.maxSize}
    `;
}
