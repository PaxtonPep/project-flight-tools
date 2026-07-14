export const airports = [

  // ─────────────────────────────────────────────
  // LARGE INTERNATIONALS
  // ─────────────────────────────────────────────

  {
    id: "larnaca",
    name: "Larnaca",
    maxAirliner: 10,
    maxCargo: 10,
    maxGA: 10,
    maxMilitary: 10,
    maxHeli: 10,
    maxSeaplane: 10,
    blocksModernMilitary: false
  },

  {
    id: "perth",
    name: "Perth International",
    maxAirliner: 10,
    maxCargo: 10,
    maxGA: 10,
    maxMilitary: 10,
    maxHeli: 10,
    maxSeaplane: 10,
    blocksModernMilitary: false
  },

  {
    id: "keflavik",
    name: "Keflavik",
    maxAirliner: 8,
    maxCargo: 8,
    maxGA: 10,
    maxMilitary: 8,
    maxHeli: 10,
    maxSeaplane: 10,
    blocksModernMilitary: false
  },

  // ─────────────────────────────────────────────
  // SMALL / SPECIAL AIRPORTS
  // ─────────────────────────────────────────────

  {
    id: "pingeyri",
    name: "Pingeyri",
    maxAirliner: 0,
    maxCargo: 2,       // Caravan Cargo
    maxGA: 10,
    maxMilitary: 3,    // P-38 tier
    maxHeli: 10,
    maxSeaplane: 10,
    blocksModernMilitary: true
  },

  {
    id: "barra",
    name: "Barra",
    maxAirliner: 0,
    maxCargo: 0,
    maxGA: 2,          // Twin Otter / Caravan
    maxMilitary: 0,
    maxHeli: 10,
    maxSeaplane: 10,
    blocksModernMilitary: true
  },

  // ─────────────────────────────────────────────
  // CUSTOM AIRPORTS YOU DEFINED
  // ─────────────────────────────────────────────

  {
    id: "mellor",
    name: "Mellor",
    maxAirliner: 8,    // A350
    maxCargo: 7,       // A330F / Beluga tier
    maxGA: 10,
    maxMilitary: 8,    // C-17
    maxHeli: 10,
    maxSeaplane: 10,
    blocksModernMilitary: false
  },

  {
    id: "training",
    name: "Training Center",
    maxAirliner: 0,
    maxCargo: 0,
    maxGA: 1,          // C172 only
    maxMilitary: 0,
    maxHeli: 0,
    maxSeaplane: 0,
    blocksModernMilitary: true
  },

  {
    id: "garry",
    name: "Airbase Garry",
    maxAirliner: 0,
    maxCargo: 0,
    maxGA: 0,
    maxMilitary: 8,    // C-17 / SR-71 tier
    maxHeli: 10,
    maxSeaplane: 0,
    blocksModernMilitary: false
  },

  {
    id: "mcconnell",
    name: "McConnell",
    maxAirliner: 0,
    maxCargo: 10,
    maxGA: 10,
    maxMilitary: 10,
    maxHeli: 10,
    maxSeaplane: 0,
    blocksModernMilitary: false
  },

  {
    id: "scampton",
    name: "RAF Scampton",
    maxAirliner: 0,
    maxCargo: 0,
    maxGA: 10,
    maxMilitary: 7,    // Vulcan / B-29 tier
    maxHeli: 10,
    maxSeaplane: 0,
    blocksModernMilitary: true
  }

];
