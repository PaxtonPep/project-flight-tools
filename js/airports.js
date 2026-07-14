export const airports = [

{
  id: "ISAU",
  name: "Sauthamptona",

  maxAirliner: "b757",
  maxCargo: "b757",
  maxGA: "kingair260",        // “any GA” → highest GA plane
  maxMilitary: "c17",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,
  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "IHEN",
  name: "Henstridge Airfield",

  maxAirliner: "none",
  maxCargo: "caravanCargo",
  maxGA: "kingair260",
  maxMilitary: "p38",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: false,          // only caravan cargo allowed
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

  {
  id: "IPAP",
  name: "Paphos International",

  maxAirliner: "b777",
  maxCargo: "b777",
  maxGA: "kingair260",
  maxMilitary: "c17",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,
  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "IBTH",
  name: "Saint Barthelemy",

  maxAirliner: "q400",
  maxCargo: "q400",
  maxGA: "kingair260",
  maxMilitary: "su57",     
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,
  blocksModernMilitary: false,

  requiresGamepass: []
},
  
{
  id: "ILUK",
  name: "Lukla",

  maxAirliner: "none",
  maxCargo: "caravanCargo",
  maxGA: "learjet",
  maxMilitary: "su57",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: false,          // only caravan cargo allowed
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,
  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "ISKP",
  name: "Skepelos",

  maxAirliner: "none",
  maxCargo: "caravanCargo",
  maxGA: "kingair260",        // all GA allowed → highest GA plane
  maxMilitary: "p38",         // old military only
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: false,          // only caravan cargo allowed
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: true,  // you said no modern military

  requiresGamepass: []
},

{
  id: "IBLT",
  name: "Boltic Airfield",

  maxAirliner: "none",
  maxCargo: "caravanCargo",
  maxGA: "kingair260",
  maxMilitary: "p38",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: false,          // only caravan cargo allowed
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IWAT",
  name: "Waterloo",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "none",
  maxSeaplane: "seaplane",     // all seaplanes allowed

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: true,
  blocksSeaplane: false,       // seaplanes allowed

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IBRD",
  name: "Bird Island",

  maxAirliner: "none",
  maxCargo: "caravanCargo",
  maxGA: "kingair260",
  maxMilitary: "none",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: false,          // only caravan cargo allowed
  blocksGA: false,
  blocksMilitary: true,        // no military at all
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "ISAB",
  name: "Saba",

  maxAirliner: "none",
  maxCargo: "caravanCargo",
  maxGA: "kingair260",
  maxMilitary: "none",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: false,          // only caravan cargo allowed
  blocksGA: false,
  blocksMilitary: true,        // no military at all
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IORB",
  name: "Road Base (Orenji)",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "su57",         // all fighters allowed, modern + old
  maxHeli: "none",
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: false,       // military allowed
  blocksHeli: true,
  blocksSeaplane: true,

  blocksModernMilitary: false, // modern fighters allowed

  requiresGamepass: []
},

{
  id: "ICGO",
  name: "Coast Guard (Orenji)",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "heli",            // all helicopters allowed
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: true,

  requiresGamepass: ["coastguard"]
},

{
  id: "ITKO",
  name: "Tokyo International",

  maxAirliner: "a380",          // full-size airport, all airliners allowed
  maxCargo: "747f",             // all cargo allowed
  maxGA: "kingair260",          // all GA allowed
  maxMilitary: "su57",          // all modern + old military allowed
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "IUSS",
  name: "USS Carrier",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "su57",        // all fighters allowed
  maxHeli: "heli",            // all helicopters allowed
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: false,      // military allowed
  blocksHeli: false,          // helis allowed
  blocksSeaplane: true,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "IHMS",
  name: "HMS Carrier",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "su57",        // all fighters allowed
  maxHeli: "heli",            // all helicopters allowed
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: false,      // military allowed
  blocksHeli: false,          // helis allowed
  blocksSeaplane: true,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "IORG",
  name: "Oil Rig",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "heli",            // all helicopters allowed
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "ISKP",
  name: "Skopelos",

  maxAirliner: "none",
  maxCargo: "caravanCargo",
  maxGA: "kingair260",
  maxMilitary: "p38",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IIZO",
  name: "Izolrani",

  maxAirliner: "a380",
  maxCargo: "an225",
  maxGA: "kingair260",
  maxMilitary: "c17",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "ISAT",
  name: "Sauthamptona",

  maxAirliner: "757",
  maxCargo: "c17",
  maxGA: "kingair260",
  maxMilitary: "c17",          // all military except VC-25
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "INAL",
  name: "Al Najaf",

  maxAirliner: "crj",
  maxCargo: "atr72f",
  maxGA: "kingair260",
  maxMilitary: "c130",        // highest-value military allowed
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "RB02",
  name: "Road Base (Greater Rockford)",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "su57",        // all fighters allowed, modern + old
  maxHeli: "none",
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: false,      // military allowed
  blocksHeli: true,
  blocksSeaplane: true,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "ICGP",
  name: "Coast Guard (Perth)",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "heli",            // all helicopters allowed
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: true,

  requiresGamepass: ["coastguard"]
},

{
  id: "ICGG",
  name: "Grindavik Coast Guard",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "heli",
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: true,

  requiresGamepass: ["coastguard"]
},

{
  id: "ICGR",
  name: "Greater Rockford Coast Guard",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "heli",
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: true,

  requiresGamepass: ["coastguard"]
},

{
  id: "ITAV",
  name: "Tavaro Seabase",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "none",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: true,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IGRS",
  name: "Greater Rockford Seabase",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "none",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: true,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "ISEA",
  name: "Sea Haven",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "none",
  maxHeli: "none",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: true,
  blocksHeli: true,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IRAF",
  name: "RAF Scampton",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "c17",        // no limit → highest military plane in PF
  maxHeli: "heli",
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: false,

  requiresGamepass: []
},
  
{
  id: "IPER",
  name: "Perth International",

  maxAirliner: "a380",        // no limit → largest airliner
  maxCargo: "an225",          // no limit → largest cargo
  maxGA: "kingair260",        // all GA allowed
  maxMilitary: "c17",         // no limit → largest military
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "IMCC",
  name: "McConnell",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "vc25",       // no limit → highest military aircraft
  maxHeli: "heli",
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: false,    
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "ILAR",
  name: "Larnaca",

  maxAirliner: "a380",
  maxCargo: "an225",
  maxGA: "kingair260",
  maxMilitary: "vc25",
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "IBAR",
  name: "Barra",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "kingair260",     // light aircraft only
  maxMilitary: "p38",      // old military only
  maxHeli: "none",
  maxSeapplane: "seaplane", // amphibious only

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: false,         // light GA allowed
  blocksMilitary: false,   // old military allowed
  blocksHeli: true,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IKEF",
  name: "Keflavik",

  maxAirliner: "a350",       // biggest allowed airliner
  maxCargo: "md11f",         // biggest cargo from your screenshot
  maxGA: "kingair260",
  maxMilitary: "c17",        // biggest modern military
  maxHeli: "heli",
  maxSeaplane: "none",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "IPIN",
  name: "Pingeyri",

  maxAirliner: "none",
  maxCargo: "caravan",      // Cessna Caravan Cargo
  maxGA: "kingair260",      // all GA allowed
  maxMilitary: "p38",       // old military only
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: true,
  blocksCargo: false,       // Caravan allowed
  blocksGA: false,
  blocksMilitary: false,    // old military allowed
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IMEL",
  name: "Mellor",

  maxAirliner: "a350",        // biggest allowed airliner
  maxCargo: "beluga",         // biggest allowed cargo
  maxGA: "kingair260",        // all GA allowed
  maxMilitary: "c17",         // biggest modern military
  maxHeli: "heli",
  maxSeaplane: "seaplane",

  blocksAirliner: false,
  blocksCargo: false,
  blocksGA: false,
  blocksMilitary: false,
  blocksHeli: false,
  blocksSeaplane: false,

  blocksModernMilitary: false,

  requiresGamepass: []
},

{
  id: "ITRN",
  name: "Training Center",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "cessna172",
  maxMilitary: "none",
  maxHeli: "none",
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: false,        // only C172 allowed
  blocksMilitary: true,
  blocksHeli: true,
  blocksSeaplane: true,

  blocksModernMilitary: true,

  requiresGamepass: []
},

{
  id: "IGRY",
  name: "Airbase Garry",

  maxAirliner: "none",
  maxCargo: "none",
  maxGA: "none",
  maxMilitary: "c17",        // highest modern military allowed
  maxHeli: "heli",
  maxSeaplane: "none",

  blocksAirliner: true,
  blocksCargo: true,
  blocksGA: true,
  blocksMilitary: false,     // military allowed
  blocksHeli: false,
  blocksSeaplane: true,

  blocksModernMilitary: false,

  requiresGamepass: []
} 
];
