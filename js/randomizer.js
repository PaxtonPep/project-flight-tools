import { airports } from "./airports.js";
import { aircraft } from "./aircraft.js";

function allowedAtAirport(plane, airport) {
  if (!plane || !airport) return false;

  if (plane.category === "airliner" && airport.maxAirliner < plane.value) return false;
  if (plane.category === "cargo"    && airport.maxCargo    < plane.value) return false;
  if (plane.category === "ga"       && airport.maxGA       < plane.value) return false;
  if (plane.category === "heli"     && airport.maxHeli     < plane.value) return false;
  if (plane.category === "seaplane" && airport.maxSeaplane < plane.value) return false;

  if (plane.category === "military") {
    if (plane.modern && airport.blocksModernMilitary) return false;
    if (airport.maxMilitary < plane.value) return false;
  }

  return true;
}

export function filterAircraftForRoute(selectedAircraft, fromAirportId, toAirportId) {
  const from = airports.find(a => a.id === fromAirportId);
  const to   = airports.find(a => a.id === toAirportId);

  return selectedAircraft.filter(id => {
    const plane = aircraft.find(a => a.id === id);
    return allowedAtAirport(plane, from) && allowedAtAirport(plane, to);
  });
}

export function randomFlight(selectedAircraft, fromAirports, toAirports) {
  if (!selectedAircraft.length || !fromAirports.length || !toAirports.length) {
    return { aircraft: "NO SELECTION", from: "-", to: "-" };
  }

  const from = fromAirports[Math.floor(Math.random() * fromAirports.length)];
  const to   = toAirports[Math.floor(Math.random() * toAirports.length)];

  const validAircraft = filterAircraftForRoute(selectedAircraft, from, to);

  if (!validAircraft.length) {
    return { aircraft: "NO VALID AIRCRAFT", from, to };
  }

  const aircraftChoice = validAircraft[Math.floor(Math.random() * validAircraft.length)];

  return { aircraft: aircraftChoice, from, to };
}
