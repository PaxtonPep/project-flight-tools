const aircraft = [

  // --- AIRBUS AIRLINERS ---

{
  id: "a220",
  name: "Airbus A220",
  category: "airliner",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Canadian", type: "airline" },
    { name: "Air Baltic", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "Delta", type: "airline" },
    { name: "Swiss", type: "airline" },
    { name: "JetBlue", type: "airline" },
    { name: "Korean Air", type: "airline" },
    { name: "Qantas", type: "airline" }
  ]
},

{
  id: "a320",
  name: "Airbus A320",
  category: "airliner",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Aer Lingus", type: "airline" },
    { name: "Aeroflot", type: "airline" },
    { name: "Air Canada", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "American Airlines", type: "airline" },
    { name: "Azul Brazilian Airlines", type: "airline" },
    { name: "Delta", type: "airline" },
    { name: "Wizz Air", type: "airline" },
    { name: "Swiss", type: "airline" },
    { name: "British Airways", type: "airline" },
    { name: "Cebu Pacific", type: "airline" },
    { name: "Condor", type: "airline" },
    { name: "easyJet", type: "airline" },
    { name: "Iberia", type: "airline" },
    { name: "Jet2", type: "airline" },
    { name: "JetBlue", type: "airline" },
    { name: "Lufthansa", type: "airline" },
    { name: "TUI", type: "airline" },
    { name: "Qantas", type: "airline" },
    { name: "Qatar", type: "airline" },
    { name: "Air New Zealand", type: "airline" },
    { name: "United Airlines", type: "airline" },
    { name: "SAS Scandinavian", type: "airline" },
    { name: "Spirit", type: "airline" },
    { name: "Thai Airways", type: "airline" },
    { name: "Turkish Airlines", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "a330",
  name: "Airbus A330",
  category: "airliner",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Aer Lingus", type: "airline" },
    { name: "Aeroflot", type: "airline" },
    { name: "Air Canada", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "American Airlines", type: "airline" },
    { name: "Azul", type: "airline" },
    { name: "Delta", type: "airline" },
    { name: "Swiss", type: "airline" },
    { name: "Cathay Pacific", type: "airline" },
    { name: "Cebu Pacific", type: "airline" },
    { name: "Condor", type: "airline" },
    { name: "Emirates", type: "airline" },
    { name: "Iberia", type: "airline" },
    { name: "Jet2", type: "airline" },
    { name: "KLM", type: "airline" },
    { name: "Korean Air", type: "airline" },
    { name: "Lufthansa", type: "airline" },
    { name: "TUI", type: "airline" },
    { name: "Qantas", type: "airline" },
    { name: "Qatar", type: "airline" },
    { name: "SAS", type: "airline" },
    { name: "Singapore Airlines", type: "airline" },
    { name: "Thai Airways", type: "airline" },
    { name: "Turkish Airlines", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "a330cargo",
  name: "Airbus A330 Cargo",
  category: "cargo",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "DHL", type: "cargo" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "a340",
  name: "Airbus A340",
  category: "airliner",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Air Canada", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "Swiss", type: "airline" },
    { name: "Cathay Pacific", type: "airline" },
    { name: "Emirates", type: "airline" },
    { name: "Konrad Adenauer", type: "special" },
    { name: "Iberia", type: "airline" },
    { name: "Lufthansa", type: "airline" },
    { name: "Qatar", type: "airline" },
    { name: "SAS", type: "airline" },
    { name: "Singapore Airlines", type: "airline" },
    { name: "Thai Airways", type: "airline" },
    { name: "Turkish Airlines", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "a350",
  name: "Airbus A350",
  category: "airliner",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Aeroflot", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "Azul Brazilian", type: "airline" },
    { name: "Delta", type: "airline" },
    { name: "Swiss", type: "airline" },
    { name: "British Airways", type: "airline" },
    { name: "Cathay Pacific", type: "airline" },
    { name: "Emirates", type: "airline" },
    { name: "Iberia", type: "airline" },
    { name: "KLM", type: "airline" },
    { name: "Korean Air", type: "airline" },
    { name: "Lufthansa", type: "airline" },
    { name: "Qantas", type: "airline" },
    { name: "Qatar", type: "airline" },
    { name: "Private", type: "private" },
    { name: "SAS", type: "airline" },
    { name: "Singapore Airlines", type: "airline" },
    { name: "Thai Airways", type: "airline" },
    { name: "Turkish Airlines", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "a380",
  name: "Airbus A380",
  category: "airliner",
  size: "heavy",
  gamepass: ["a380"],
  liveries: [
    { name: "Air France", type: "airline" },
    { name: "British Airways", type: "airline" },
    { name: "Emirates", type: "airline" },
    { name: "Korean Air", type: "airline" },
    { name: "Lufthansa", type: "airline" },
    { name: "Qantas", type: "airline" },
    { name: "Qatar", type: "airline" },
    { name: "Singapore Airlines", type: "airline" },
    { name: "Thai Airways", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

  {
  id: "b707",
  name: "Boeing 707",
  category: "airliner",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Air Force One", type: "special", gamepass: "presidential" },
    { name: "Aer Lingus", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "American Airlines", type: "airline" },
    { name: "British Airways", type: "airline" },
    { name: "Cathay Pacific", type: "airline" },
    { name: "Pan Am", type: "airline" },
    { name: "Condor", type: "airline" },
    { name: "Korean Air", type: "airline" },
    { name: "Lufthansa", type: "airline" },
    { name: "Qantas", type: "airline" },
    { name: "United Airlines", type: "airline" },
    { name: "Singapore Airlines", type: "airline" },
    { name: "Turkish Airlines", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "b727",
  name: "Boeing 727",
  category: "airliner",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Air Canada", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "American Airlines", type: "airline" },
    { name: "Delta", type: "airline" },
    { name: "British Airways", type: "airline" },
    { name: "Pan Am", type: "airline" },
    { name: "Condor", type: "airline" },
    { name: "Emirates", type: "airline" },
    { name: "Iberia", type: "airline" },
    { name: "Korean Air", type: "airline" },
    { name: "Lufthansa", type: "airline" },
    { name: "Northwest", type: "airline" },
    { name: "Qatar", type: "airline" },
    { name: "United Airlines", type: "airline" },
    { name: "Singapore Airlines", type: "airline" },
    { name: "Turkish Airlines", type: "airline" }
  ]
},

{
  id: "b727cargo",
  name: "Boeing 727 Cargo",
  category: "cargo",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Oil Spill Response", type: "cargo" },
    { name: "UPS", type: "cargo" },
    { name: "FedEx", type: "cargo" },
    { name: "DHL", type: "cargo" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "b737",
  name: "Boeing 737",
  category: "airliner",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Aer Lingus", type: "airline" },
    { name: "Aeroflot", type: "airline" },
    { name: "Air Canada", type: "airline" },
    { name: "Air Baltic", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "American Airlines", type: "airline" },
    { name: "Delta", type: "airline" },
    { name: "British Airways", type: "airline" },
    { name: "Ryanair", type: "airline" },
    { name: "C40 Clipper", type: "special", gamepass: "presidential" },
    { name: "Pan Am", type: "airline" },
    { name: "Condor", type: "airline" },
    { name: "Flybe", type: "airline" },
    { name: "easyJet", type: "airline" },
    { name: "Iberia", type: "airline" },
    { name: "Jet2", type: "airline" },
    { name: "KLM", type: "airline" },
    { name: "LOT", type: "airline" },
    { name: "Korean Air", type: "airline" },
    { name: "Lufthansa", type: "airline" },
    { name: "TUI", type: "airline" },
    { name: "Southwest", type: "airline" },
    { name: "Qantas", type: "airline" },
    { name: "Qatar", type: "airline" },
    { name: "Air New Zealand", type: "airline" },
    { name: "United Airlines", type: "airline" },
    { name: "SAS", type: "airline" },
    { name: "Singapore Airlines", type: "airline" },
    { name: "Thai Airways", type: "airline" },
    { name: "Turkish Airlines", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "b737cargo",
  name: "Boeing 737 Cargo",
  category: "cargo",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "FedEx", type: "cargo" },
    { name: "DHL", type: "cargo" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "b747",
  name: "Boeing 747",
  category: "airliner",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Air Force One", type: "special", gamepass: "presidential" },
    { name: "Aer Lingus", type: "airline" },
    { name: "Air Canada", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "American Airlines", type: "airline" },
    { name: "British Airways", type: "airline" },
    { name: "Delta", type: "airline" },
    { name: "Cathay Pacific", type
  
  ]
},

  {
  id: "c172",
  name: "Cessna 172",
  category: "ga",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Civil Air Patrol", type: "special" },
    { name: "Coast Guard", type: "coastGuard", gamepass: "coastGuard" },
    { name: "Gold and Black", type: "generic" },
    { name: "Student", type: "generic" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "c172floats",
  name: "Cessna 172 (Floats)",
  category: "seaplane",
  size: "small",
  gamepass: ["seaplane"],
  liveries: [
    { name: "Blue", type: "generic" },
    { name: "Coast Guard", type: "coastGuard", gamepass: "coastGuard" },
    { name: "Orange", type: "generic" },
    { name: "Stripes", type: "generic" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "c182",
  name: "Cessna 182",
  category: "ga",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Black and Green", type: "generic" },
    { name: "Blue", type: "generic" },
    { name: "Red", type: "generic" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "c182floats",
  name: "Cessna 182 (Floats)",
  category: "seaplane",
  size: "small",
  gamepass: ["seaplane"],
  liveries: [
    { name: "Flame", type: "generic" },
    { name: "Red and Gold", type: "generic" },
    { name: "Turquoise", type: "generic" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "caravan",
  name: "Cessna Caravan",
  category: "ga",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Azul Brazilian", type: "airline" },
    { name: "Coast Guard", type: "coastGuard", gamepass: "coastGuard" },
    { name: "Purple", type: "generic" },
    { name: "Skydive", type: "generic" },
    { name: "St Barths Commuter", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "caravanfloats",
  name: "Cessna Caravan (Floats)",
  category: "seaplane",
  size: "small",
  gamepass: ["seaplane"],
  liveries: [
    { name: "Grey", type: "generic" },
    { name: "Stripes", type: "generic" },
    { name: "White", type: "generic" },
    { name: "Yellow and Black", type: "generic" }
  ]
},

{
  id: "caravancargo",
  name: "Cessna Caravan Cargo",
  category: "cargo",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "FedEx", type: "cargo" },
    { name: "DHL", type: "cargo" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "kingair260",
  name: "King Air 260",
  category: "ga",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Black and Gold", type: "generic" },
    { name: "Orange", type: "generic" },
    { name: "RAF", type: "military" },
    { name: "Red", type: "generic" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "learjet",
  name: "Bombardier Learjet",
  category: "ga",
  size: "small",
  gamepass: ["privateJets"],
  liveries: [
    { name: "White", type: "generic" },
    { name: "Blue", type: "generic" },
    { name: "Silver", type: "generic" }
  ]
},

{
  id: "da50",
  name: "Diamond DA50",
  category: "ga",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Blue", type: "generic" },
    { name: "Green/White", type: "generic" },
    { name: "Orange/Grey", type: "generic" },
    { name: "Silver/Grey", type: "generic" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "f4phantom",
  name: "F-4 Phantom",
  category: "oldMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Blue Angels", type: "military" },
    { name: "German", type: "military" },
    { name: "Hellenic", type: "military" },
    { name: "Marines", type: "military" },
    { name: "RAF", type: "military" },
    { name: "Sundowners", type: "military" },
    { name: "Thunderbirds", type: "military" }
  ]
},

{
  id: "f14",
  name: "F-14 Tomcat",
  category: "oldMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Jolly Rogers", type: "military" },
    { name: "VF-1 Wolfpack", type: "military" },
    { name: "VF-2 Bounty Hunters", type: "military" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "f15",
  name: "F-15 Eagle",
  category: "modernMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "USAF", type: "military" },
    { name: "Japan", type: "military" },
    { name: "Israel", type: "military" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "f16",
  name: "F-16 Fighting Falcon",
  category: "modernMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Thunderbirds", type: "military" },
    { name: "USAF", type: "military" },
    { name: "Belgium", type: "military" },
    { name: "Netherlands", type: "military" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "f18",
  name: "F/A-18 Hornet",
  category: "modernMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Blue Angels", type: "military" },
    { name: "US Navy", type: "military" },
    { name: "Royal Australian Air Force", type: "military" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "f22",
  name: "F-22 Raptor",
  category: "modernMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "USAF", type: "military" },
    { name: "Prototype", type: "military" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "f35",
  name: "F-35B",
  category: "modernMilitary",
  size: "medium",
  gamepass: ["f35"],
  liveries: [
    { name: "Default", type: "military" },
    { name: "Marines", type: "military" },
    { name: "Prototype", type: "military" }
  ]
},

{
  id: "a10",
  name: "A-10 Thunderbolt II",
  category: "oldMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "USAF", type: "military" },
    { name: "Desert Camo", type: "military" },
    { name: "Grey", type: "military" }
  ]
},

{
  id: "sr71",
  name: "SR-71 Blackbird",
  category: "modernMilitary",
  size: "medium",
  gamepass: ["sr71"],
  liveries: [
    { name: "USAF", type: "military" },
    { name: "NASA", type: "special" }
  ]
},

{
  id: "su57",
  name: "Su-57",
  category: "modernMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Blue Digital", type: "military" },
    { name: "Grey Digital", type: "military" },
    { name: "Grey Splinter", type: "military" }
  ]
},

{
  id: "eurofighter",
  name: "Eurofighter Typhoon",
  category: "modernMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "RAF", type: "military" },
    { name: "German Air Force", type: "military" },
    { name: "Italian Air Force", type: "military" }
  ]
},

{
  id: "mig15",
  name: "MiG-15",
  category: "oldMilitary",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Soviet", type: "military" },
    { name: "Chinese", type: "military" },
    { name: "Polish", type: "military" }
  ]
},

{
  id: "p38",
  name: "P-38 Lightning",
  category: "oldMilitary",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "WWII Silver", type: "military" },
    { name: "Olive Drab", type: "military" }
  ]
},

{
  id: "p51",
  name: "P-51 Mustang",
  category: "oldMilitary",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Red Tails", type: "military" },
    { name: "WWII Blue Nose", type: "military" },
    { name: "Silver", type: "military" }
  ]
},

{
  id: "zero",
  name: "A6M Zero",
  category: "oldMilitary",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "WWII Green", type: "military" },
    { name: "WWII Grey", type: "military" }
  ]
},

{
  id: "hurricane",
  name: "Hawker Hurricane",
  category: "oldMilitary",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "RAF", type: "military" },
    { name: "Desert Camo", type: "military" }
  ]
},

{
  id: "vulcan",
  name: "Avro Vulcan",
  category: "oldMilitary",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "RAF", type: "military" },
    { name: "Camo", type: "military" }
  ]
},

{
  id: "lightning",
  name: "English Electric Lightning",
  category: "oldMilitary",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "RAF", type: "military" },
    { name: "Silver", type: "military" }
  ]
},

{
  id: "bell412",
  name: "Bell 412",
  category: "heli",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "White", type: "generic" },
    { name: "Search and Rescue", type: "coastGuard", gamepass: "coastGuard" }
  ]
},

{
  id: "s92",
  name: "Sikorsky S-92",
  category: "heli",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Bristow", type: "generic" },
    { name: "Coast Guard", type: "coastGuard", gamepass: "coastGuard" },
    { name: "Executive", type: "generic" },
    { name: "H92 Superhawk", type: "military" },
    { name: "Marine One", type: "presidential", gamepass: "presidential" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "uh60",
  name: "UH-60 Blackhawk",
  category: "military",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "Blackhawk (Black)", type: "military" },
    { name: "Army Green", type: "military" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "mh60",
  name: "MH-60 Jayhawk",
  category: "heli",
  size: "medium",
  gamepass: ["coastGuard"],
  liveries: [
    { name: "Coast Guard", type: "coastGuard", gamepass: "coastGuard" }
  ]
},

{
  id: "ch47",
  name: "CH-47 Chinook",
  category: "military",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "US Army", type: "military" },
    { name: "RAF", type: "military" },
    { name: "Tan", type: "generic" }
  ]
},

{
  id: "ah64",
  name: "AH-64 Apache",
  category: "military",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "US Army", type: "military" },
    { name: "Desert", type: "military" },
    { name: "Grey", type: "military" }
  ]
},

{
  id: "ec135",
  name: "Eurocopter EC-135",
  category: "heli",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Police", type: "special" },
    { name: "Medical", type: "special" },
    { name: "Yellow", type: "generic" },
    { name: "White", type: "generic" }
  ]
}

{
  id: "concorde",
  name: "Concorde",
  category: "airliner",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "British Airways", type: "airline" },
    { name: "Air France", type: "airline" },
    { name: "Prototype", type: "special" }
  ]
},

{
  id: "dc10",
  name: "DC-10",
  category: "airliner",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "American Airlines", type: "airline" },
    { name: "United Airlines", type: "airline" },
    { name: "Swissair", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "md11",
  name: "MD-11",
  category: "airliner",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Delta", type: "airline" },
    { name: "Swiss", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "md11cargo",
  name: "MD-11 Cargo",
  category: "cargo",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "FedEx", type: "cargo" },
    { name: "UPS", type: "cargo" },
    { name: "DHL", type: "cargo" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "l1011",
  name: "L-1011 Tristar",
  category: "airliner",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Delta", type: "airline" },
    { name: "British Airways", type: "airline" },
    { name: "TWA", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "an225",
  name: "Antonov AN-225",
  category: "cargo",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Antonov Airlines", type: "cargo" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "beluga",
  name: "Airbus Beluga",
  category: "cargo",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Airbus Transport", type: "cargo" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "dreamlifter",
  name: "Boeing Dreamlifter",
  category: "cargo",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "Boeing", type: "cargo" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "vc10",
  name: "Vickers VC10",
  category: "airliner",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "RAF Transport", type: "military" },
    { name: "BOAC", type: "airline" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "c130",
  name: "C-130 Hercules",
  category: "military",
  size: "medium",
  gamepass: [],
  liveries: [
    { name: "USAF", type: "military" },
    { name: "RAF", type: "military" },
    { name: "Grey", type: "generic" }
  ]
},

{
  id: "c17",
  name: "C-17 Globemaster",
  category: "military",
  size: "heavy",
  gamepass: [],
  liveries: [
    { name: "USAF", type: "military" },
    { name: "RAF", type: "military" },
    { name: "White", type: "generic" }
  ]
}

{
  id: "twinotter",
  name: "DHC-6 Twin Otter",
  category: "ga",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Air Inuit", type: "airline" },
    { name: "Air Tahiti", type: "airline" },
    { name: "Winair", type: "airline" },
    { name: "Coast Guard", type: "coastGuard", gamepass: "coastGuard" },
    { name: "White", type: "generic" }
  ]
},

{
  id: "piperCub",
  name: "Piper Cub",
  category: "ga",
  size: "small",
  gamepass: [],
  liveries: [
    { name: "Yellow", type: "generic" },
    { name: "Blue", type: "generic" },
    { name: "Red", type: "generic" },
    { name: "White", type: "generic" }
  ]
}

]; // ← DO NOT DELETE THIS BRACKET

