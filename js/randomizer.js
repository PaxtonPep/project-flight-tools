// randomizer.js

// Size ranking by aircraft ID (higher = bigger)
const sizeRank = {
    a380: 10,
    an225: 10,

    b747: 9,
    b747cargo: 9,

    b777: 8,
    b777cargo: 8,
    a350: 8,
    c17: 8,
    sr71: 8,
    vulcan: 8,

    b787: 8,
    a340: 8,
    kc46: 8,
    kc130j: 8,

    b767: 7,
    b767cargo: 7,
    a330: 7,
    a330cargo: 7,
    a330mrtt: 7,
    md11: 7,
    md11f: 7,
    b29: 7,
    e3: 7,
    p8: 7,

    b757: 6,
    b757cargo: 6,
    c130: 6,
    c130hercules: 6,

    b727: 5,
    b727cargo: 5,
    b707: 5,
    kc707: 5,
    f4phantom: 5,
    f18: 5,
    a10: 5,
    su27: 5,
    eurofighter: 6, // slightly bigger

    a320: 4,
    b737: 4,
    b737cargo: 4,
    a220: 4,
    e190: 4,
    crj700: 4,
    q400: 4,
    atr72: 4,
    atr72f: 4,
    dc10: 7,
    dc10f: 7,
    md90: 4,
    comet: 4,
    tristar: 7,
    concorde: 7,

    learjet: 3,
    kingair260: 2,
    c182: 2,
    c182floats: 2,
    c402: 2,
    sf50: 2,
    da50: 2,

    c172: 1,
    c172floats: 1,
    piperCub: 1,
    piperCubFloats: 1,
    twinotter: 2,
    twinotterFloats: 2,
    caravan: 2,
    caravanFloats: 2,
    caravanCargo: 2,

    seaplane: 2,
    heli: 1,

    p51: 3,
    p38: 3,
    corsair: 3,
    hurricane: 3,
    zero: 3,
    mig15: 3,

    f14: 6,
    f15e: 6,
    f16: 5,
    f22: 7,
    f35b: 7,
    su57: 7,
    hawkT1: 4,

    s92: 2,
    bell412: 1,
    uh60: 2
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
        <strong>ID:</strong> ${plane.id}<br>
        <strong>Liveries:</strong> ${liveryNames}<br>
        <strong>Departure:</strong> ${airport.name} (${airport.id})<br>
        <strong>Airport Color:</strong> ${airport.color}<br>
        <strong>Airport Max Size:</strong> ${airport.maxSize}
    `;
}
