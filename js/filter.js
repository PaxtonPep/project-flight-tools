export function filterByGamepass(aircraft, passes) {
    return aircraft.filter(a =>
        !a.gamepass.length || a.gamepass.some(g => passes.includes(g))
    );
}

export function filterByCategory(aircraft, category) {
    return aircraft.filter(a => a.category === category);
}

export function filterBySize(aircraft, size) {
    return aircraft.filter(a => a.size === size);
}
