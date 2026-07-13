export const airports = [
  {
    id: "IRFD",
    name: "Greater Rockford",
    color: "red",
    maxSize: "heavy",              // any plane
    allowedCategories: ["airliner", "ga", "cargo", "military", "heli", "seaplane"],
    requiresGamepass: [],          // none
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "IMLR",
    name: "Mellor International",
    color: "orange",
    maxSize: "777",                // no 747 / A380
    allowedCategories: ["airliner", "ga", "cargo"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "ISAU",
    name: "Sauthamptona",
    color: "orange",
    maxSize: "757",                // biggest from your list
    allowedCategories: ["airliner", "ga", "cargo", "military"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false     // no F‑22 etc.
  },

  {
    id: "IPAP",
    name: "Paphos International",
    color: "orange",
    maxSize: "777",
    allowedCategories: ["airliner", "ga", "cargo"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "IBTH",
    name: "Saint Barthelemy",
    color: "orange",
    maxSize: "q400",               // “biggest” turboprop from your list
    allowedCategories: ["airliner", "ga"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false     // no modern military
  },

  {
    id: "IJAF",
    name: "Al Najaf",
    color: "lightBlue",
    maxSize: "q400",               // same as Saint Barts
    allowedCategories: ["airliner", "ga", "military"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "ILUK",
    name: "Lukla",
    color: "lightBlue",
    maxSize: "learjet",            // or P‑38
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "ISKP",
    name: "Skepelos Airfield",
    color: "lightBlue",
    maxSize: "learjet",            // same as Lukla
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "ISAB",
    name: "Saba Airport",
    color: "lightBlue",
    maxSize: "kingair260",         // or Vision Jet
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "IBLT",
    name: "Blotic Airfield",
    color: "lightBlue",
    maxSize: "kingair260",         // same as Saba
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "IHEN",
    name: "Henstridge Airfield",
    color: "lightBlue",
    maxSize: "kingair260",         // same as Saba
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "IBAR",
    name: "Barra Airport",
    color: "lightBlue",
    maxSize: "kingair260",         // same as Saba
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "ITCR",
    name: "Training Centre",
    color: "lightBlue",
    maxSize: "c172",
    allowedCategories: ["ga"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "OREN",
    name: "Orenji Coast Guard",
    color: "darkBlue",
    maxSize: "heli",
    allowedCategories: ["heli"],
    requiresGamepass: ["coastGuard"],
    onlyHeli: true,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "KEF_CG",
    name: "Keflavik Coast Guard",
    color: "darkBlue",
    maxSize: "heli",
    allowedCategories: ["heli"],
    requiresGamepass: ["coastGuard"],
    onlyHeli: true,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "PER_CG",
    name: "Perth Coast Guard",
    color: "darkBlue",
    maxSize: "heli",
    allowedCategories: ["heli"],
    requiresGamepass: ["coastGuard"],
    onlyHeli: true,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "GR_CG",
    name: "Greater Rockford Coast Guard",
    color: "darkBlue",
    maxSize: "heli",
    allowedCategories: ["heli"],
    requiresGamepass: ["coastGuard"],
    onlyHeli: true,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "TAV_SEA",
    name: "Tavaro Seabase",
    color: "darkBlue",
    maxSize: "seaplane",
    allowedCategories: ["seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: true,
    allowModernMilitary: false
  },

  {
    id: "SEAH",
    name: "Sea Haven",
    color: "darkBlue",
    maxSize: "seaplane",
    allowedCategories: ["seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: true,
    allowModernMilitary: false
  },

  {
    id: "WATR",
    name: "Waterloo",
    color: "darkBlue",
    maxSize: "seaplane",
    allowedCategories: ["seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: true,
    allowModernMilitary: false
  },

  {
    id: "MCON",
    name: "McConnell AFB",
    color: "darkBlue",
    maxSize: "heavy",
    allowedCategories: ["military", "heli"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "USS_GER",
    name: "USS Gerald R. Ford",
    color: "darkBlue",
    maxSize: "medium",
    allowedCategories: ["military", "heli"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "HMS_QE",
    name: "HMS Queen Elizabeth",
    color: "darkBlue",
    maxSize: "medium",
    allowedCategories: ["military", "heli"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "IGAR",
    name: "Airbase Garry",
    color: "darkBlue",
    maxSize: "heavy",
    allowedCategories: ["military", "heli"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "ISCM",
    name: "RAF Scampton",
    color: "darkBlue",
    maxSize: "medium",
    allowedCategories: ["military", "heli"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "IZOL_CG",
    name: "Izolirani Coast Guard",
    color: "darkBlue",
    maxSize: "heli",
    allowedCategories: ["heli"],
    requiresGamepass: ["coastGuard"],
    onlyHeli: true,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "IZOL_INTL",
    name: "Izolirani International",
    color: "red",
    maxSize: "heavy",
    allowedCategories: ["airliner", "ga", "cargo", "military", "heli", "seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "KEF_INTL",
    name: "Keflavik International",
    color: "red",
    maxSize: "heavy",
    allowedCategories: ["airliner", "ga", "cargo", "military", "heli", "seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  }
];
