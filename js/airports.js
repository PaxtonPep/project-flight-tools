export const airports = [
  // --- BIG RED HUBS (ANY PLANE) ---

  {
    id: "IRFD",
    name: "Greater Rockford",
    color: "red",
    maxSize: "a380",
    allowedCategories: ["airliner", "ga", "cargo", "military", "heli", "seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "ILAR",
    name: "Larnaca International",
    color: "red",
    maxSize: "a380",
    allowedCategories: ["airliner", "ga", "cargo", "military", "heli", "seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "IZOL_INTL",
    name: "Izolirani International",
    color: "red",
    maxSize: "a380",
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
    maxSize: "a380",
    allowedCategories: ["airliner", "ga", "cargo", "military", "heli", "seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "ITKO",
    name: "Tokyo International",
    color: "red",
    maxSize: "a380",
    allowedCategories: ["airliner", "ga", "cargo", "military", "heli", "seaplane"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  // --- ORANGE MEDIUM/LARGE AIRPORTS ---

  {
    id: "IMLR",
    name: "Mellor International",
    color: "orange",
    maxSize: "b777", // biggest allowed: 777, no 747/A380
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
    maxSize: "b757", // biggest: 757/707/727/C130
    allowedCategories: ["airliner", "ga", "cargo", "military"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "IPAP",
    name: "Paphos International",
    color: "orange",
    maxSize: "b777",
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
    maxSize: "q400", // biggest: CRJ700/Q400/ATR72
    allowedCategories: ["airliner", "ga"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false // no modern military
  },

  // --- LIGHT BLUE SMALL STRIPS / SPECIALS ---

  {
    id: "ISAB",
    name: "Saba Airport",
    color: "lightBlue",
    maxSize: "kingair260", // or Vision Jet
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "ILUK",
    name: "Lukla",
    color: "lightBlue",
    maxSize: "learjet", // or P-38
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
    maxSize: "learjet", // same as Lukla
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
    maxSize: "kingair260", // same as Saba
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
    maxSize: "kingair260", // same as Saba
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
    maxSize: "kingair260", // same as Saba
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  {
    id: "IJAF",
    name: "Al Najaf",
    color: "lightBlue",
    maxSize: "q400", // same as Saint Barts
    allowedCategories: ["airliner", "ga", "military"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true // can spawn military
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
    allowModernMilitary: false // ONLY C172
  },

  // --- DARK BLUE COAST GUARD HELIPORTS ---

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

  // --- DARK BLUE SEAPLANE BASES ---

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
    id: "PING",
    name: "Pingeyri",
    color: "darkBlue",
    maxSize: "kingair260", // same as Saba
    allowedCategories: ["ga", "oldMilitary"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: false
  },

  // --- DARK BLUE MILITARY BASES / CARRIERS ---

  {
    id: "USS_GER",
    name: "USS Gerald R. Ford",
    color: "darkBlue",
    maxSize: "b757", // medium-ish
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
    maxSize: "b757",
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
    maxSize: "c17", // big military
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
    maxSize: "b757",
    allowedCategories: ["military", "heli"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  },

  {
    id: "IIAB",
    name: "McConnell AFB",
    color: "darkBlue",
    maxSize: "c17",
    allowedCategories: ["military", "heli"],
    requiresGamepass: [],
    onlyHeli: false,
    onlySeaplane: false,
    allowModernMilitary: true
  }
];
