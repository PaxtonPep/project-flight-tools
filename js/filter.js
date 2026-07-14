import { aircraft } from "./aircraft.js";

export function filterAircraftByGamepass(selected, gp) {
  return selected.filter(id => {
    const plane = aircraft.find(a => a.id === id);

    if (plane.category === "military" && !gp.military) return false;
    if (plane.category === "cargo" && !gp.cargo) return false;
    if (plane.category === "heli" && !gp.heli) return false;
    if (plane.category === "seaplane" && !gp.seaplane) return false;
    if (plane.category === "vip" && !gp.vip) return false;

    return true;
  });
}
