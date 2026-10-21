/**
 * Navkar Tools & Machineries - Official B2B Industrial Catalog Data
 * Station Road, Near Surja Devi Shukla Market, Raipur, Chhattisgarh - 492001
 * Primary Hotline: +91 76930 24617 | +91 78282 58727
 */

export const COMPANY_INFO = {
  name: "Navkar Tools & Machineries",
  tagline: "Central India's Premier Industrial Power Tools & Machinery Distributor",
  address: "Station Road, Near Surja Devi Shukla Market, Raipur, Chhattisgarh - 492001",
  phone1: "+91 76930 24617",
  phone1Raw: "917693024617",
  phone2: "+91 78282 58727",
  phone2Raw: "917828258727",
  whatsapp: "917693024617",
  email: "sales@navkartools.com",
  gstin: "22AAKFN4829K1ZX (Verified GST Supplier)",
  hours: "Mon - Sat: 10:00 AM - 8:30 PM (Sunday Closed / Emergency Support Available)",
  mapLink: "https://maps.google.com/?q=Station+Road+Raipur+Chhattisgarh",
  experienceYears: "15+",
  machinesSupplied: "2,500+",
  activeClients: "850+",
  authorizedBrands: [
    "DCA Power Tools",
    "ESAB Welding",
    "KOBMAX Industrial",
    "MAF PRO Tools",
    "SWASTIK-G Machineries",
    "JAIN Welding Systems",
    "DCX Pressure Washers",
    "PowerTech Generators",
    "XTRA-POWER Abrasives"
  ]
};

export const CATEGORIES = [
  { id: "all", name: "All Machinery & Tools", icon: "grid" },
  { id: "magnetic-drills", name: "Magnetic Drills", icon: "drill" },
  { id: "welding", name: "Welding & Inverters", icon: "zap" },
  { id: "grinders-cutters", name: "Grinders & Cutters", icon: "disc" },
  { id: "demolition-drills", name: "Demolition & Impact Drills", icon: "hammer" },
  { id: "washers-pumps", name: "Car Washers & Pumps", icon: "droplet" },
  { id: "chainsaws-forestry", name: "Chainsaws & Outdoor", icon: "tree" },
  { id: "generators", name: "Generators & Power", icon: "power" },
  { id: "consumables-tools", name: "Abrasives & Tool Sets", icon: "tool" }
];

export const PRODUCTS = [
  // 01 DCA AJC30 Magnetic Drill
  {
    id: "dca-ajc30",
    name: "DCA AJC30 Magnetic Core Drilling Machine",
    brand: "DCA",
    category: "magnetic-drills",
    badge: "Fast Mover",
    badgeColor: "amber",
    image: "/assets/images/dca-magnetic-drill.jpg",
    shortDesc: "Commercial grade high-adhesion magnetic base core drill for structural steel fabrication, PEB erecting, and site work.",
    priceNote: "Wholesale / Retail Best Price on Request",
    inStock: true,
    rating: 4.9,
    reviewsCount: 38,
    leadTime: "Immediate Dispatch (Raipur Depot)",
    keySpecs: [
      { label: "Core Drill Cap.", value: "30 mm" },
      { label: "Electromagnet Force", value: "11,500 N" },
      { label: "Motor Power", value: "900 W Copper" },
      { label: "Spindle Stroke", value: "140 mm" }
    ],
    fullSpecs: {
      "Brand / Model": "DCA AJC30",
      "Rated Power Input": "900 Watt All-Copper Armature",
      "Rated Voltage": "220V - 240V, 50/60 Hz",
      "Core Drill Max Diameter": "30 mm (Twist Drill up to 23mm with chuck)",
      "Max Magnetic Adhesion": "11,500 N High-Coercivity Electromagnet Base",
      "Max Stroke Length": "140 mm Heavy Precision Rail",
      "Spindle Taper": "MT2 / Weldon Shank Adapter Ready",
      "Coolant System": "Gravity feed coolant bottle with fluid regulator",
      "Net Machine Weight": "11.5 kg (Portable Jobsite Ready)",
      "Included Accessories": "Coolant bottle set, safety strap, hex keys, carbon brush pair, heavy carrying case"
    },
    features: [
      "Ultra-strong 11,500N magnetic base securely locks onto steel beams in horizontal or vertical orientation",
      "High torque copper wound armature engineered for continuous hole broaching without thermal stalling",
      "Dual dovetail slide rail with precision brass adjustment screws eliminates cutter chatter",
      "Safety magnetic interlock switch ensures motor cannot be triggered without active magnetic clamp"
    ],
    applications: "Structural steel erection, railway rolling stock workshops, bridge building, PEB shed fabricators, pre-engineered steel frames."
  },

  // 02 JAIN Inverter Welding Machine
  {
    id: "jain-arc250",
    name: "JAIN Inverter Arc Welding Machine (IGBT Heavy Duty)",
    brand: "JAIN",
    category: "welding",
    badge: "Heavy Fabrication",
    badgeColor: "emerald",
    image: "/assets/images/jain-inverter-welder.jpg",
    shortDesc: "Advanced IGBT digital inverter welding machine capable of burning 2.5mm to 4.0mm electrodes continuously under severe voltage drops.",
    priceNote: "Direct Distributor Pricing Available",
    inStock: true,
    rating: 4.8,
    reviewsCount: 52,
    leadTime: "In Stock (Ready to Test at Showroom)",
    keySpecs: [
      { label: "Output Current", value: "20A - 250A" },
      { label: "Duty Cycle", value: "60% @ 250A" },
      { label: "Electrode Size", value: "2.5 to 4.0 mm" },
      { label: "Inverter Type", value: "Dual IGBT Bridge" }
    ],
    fullSpecs: {
      "Brand / Series": "JAIN Industrial Inverter ARC Series",
      "Input Power Supply": "1-Phase 220V ±15%, 50Hz (Generator Friendly)",
      "Output Welding Current": "20A to 250A Smooth Continuous Dial",
      "Rated Duty Cycle": "60% at 250A / 100% at 195A",
      "Electrode Compatibility": "6013, 7018, Stainless Steel, Low Carbon Alloy",
      "Arc Force & Hot Start": "Built-in automatic anti-stick & hot-strike booster",
      "Cooling Architecture": "High-CFM twin tunnel fan with thermal overload cut-off",
      "Protection Rating": "IP21S Weather-resistant casing with reinforced rubber corners",
      "Net Weight": "6.2 kg",
      "Supplied Cable Kit": "Heavy duty copper welding cable with 300A holder & earth clamp"
    },
    features: [
      "Advanced dual IGBT inverter module delivers stable, spatter-free arc on low and fluctuating mains",
      "Digital LED display monitors exact amperage output in real time for code-compliant welding",
      "Anti-stick circuitry instantly reduces current if rod adheres to workpiece, protecting transformer",
      "Rugged impact-resistant chassis engineered for dusty site conditions and heavy fabrication shops"
    ],
    applications: "Grill & gate fabrication, industrial structural welding, commercial repair yards, farm machinery maintenance."
  },

  // 03 KOBMAX KXT-50B Angle Grinder 850W
  {
    id: "kobmax-kxt50b",
    name: "KOBMAX KXT-50B Angle Grinder (850W / 100mm)",
    brand: "KOBMAX",
    category: "grinders-cutters",
    badge: "Top Seller",
    badgeColor: "amber",
    image: "/assets/images/kobmax-angle-grinder.jpg",
    shortDesc: "High-RPM ergonomic 850 Watt 4-inch angle grinder engineered for metal deburring, weld smoothing, and concrete cutting.",
    priceNote: "Contractor Pack & Bulk Carton Discounts",
    inStock: true,
    rating: 4.9,
    reviewsCount: 76,
    leadTime: "Immediate Dispatch (Bulk Quantities Ready)",
    keySpecs: [
      { label: "Motor Power", value: "850 Watt" },
      { label: "Disc Diameter", value: "100 mm (4\")" },
      { label: "No-Load Speed", value: "11,000 RPM" },
      { label: "Spindle Size", value: "M10 Thread" }
    ],
    fullSpecs: {
      "Brand / Model": "KOBMAX KXT-50B Heavy Duty",
      "Motor Capacity": "850 Watt 100% pure copper coil with epoxy resin armoring",
      "Operating Voltage": "220V - 240V / 50 Hz",
      "Wheel Diameter": "100 mm (4 Inch)",
      "Rated Free Speed": "11,000 RPM High Torque",
      "Gearbox Housing": "Die-cast alloy metal with spiral bevel gears for low noise",
      "Switch Mechanism": "Rear toggle safety switch with dust seal protection",
      "Tool Weight": "1.85 kg Slim-grip body",
      "Standard Package": "Side auxiliary handle, pin spanner wrench, wheel safety guard, carbon brushes"
    },
    features: [
      "Slim-waist body contour allows fatigue-free single-handed operation over long grinding shifts",
      "Epoxy-coated stator coils repel abrasive metal dust particles, extending motor life by 300%",
      "Spiral bevel gears deliver whisper-smooth torque transfer and reduced gear vibration",
      "Burst-resistant steel wheel guard quickly locks in multi-angle positions for maximum user safety"
    ],
    applications: "Metal fabrication, granite edge chamfering, pipe bevelling, automotive body shops, structural weld finishing."
  },

  // 04 SWASTIK-G 84cc Petrol Chainsaw 22 Inch
  {
    id: "swastik-84cc",
    name: "SWASTIK-G 84cc Heavy Petrol Chainsaw (22\" Bar)",
    brand: "SWASTIK-G",
    category: "chainsaws-forestry",
    badge: "Extreme Power",
    badgeColor: "rose",
    image: "/assets/images/swastik-chainsaw.jpg",
    shortDesc: "Commercial forestry grade 84cc high-displacement 2-stroke chainsaw equipped with 22-inch laser-tipped guide bar and quick-start recoil.",
    priceNote: "Special Agricultural & Contractor Rate",
    inStock: true,
    rating: 4.7,
    reviewsCount: 29,
    leadTime: "In Stock (Raipur)",
    keySpecs: [
      { label: "Displacement", value: "84 cc" },
      { label: "Power Output", value: "4.8 kW / 6.5 HP" },
      { label: "Guide Bar", value: "22 Inch (55 cm)" },
      { label: "Engine Type", value: "2-Stroke OHV" }
    ],
    fullSpecs: {
      "Brand / Model": "SWASTIK-G 8400 Pro Timber Series",
      "Engine Displacement": "84 cc High Performance 2-Stroke Single Cylinder",
      "Max Power Rating": "4.8 kW (6.5 HP) @ 9,000 RPM",
      "Guide Bar Size": "22 Inch (550 mm) Hardened Sprocket Nose Bar",
      "Saw Chain Pitch / Gauge": "0.375\" (3/8\") Pitch, 0.058\" Gauge Heavy Chisel Chain",
      "Starting Mechanism": "Easy-Pull decompressed recoil starter with spring assist",
      "Fuel Tank Capacity": "750 ml (50:1 2T mix ratio)",
      "Chain Oil Tank": "400 ml with adjustable automated lubrication pump",
      "Dry Weight": "7.4 kg (powerhead only)",
      "Standard Package": "22\" bar, full chisel chain, fuel mixing bottle, tool toolkit, bar sheath"
    },
    features: [
      "Massive 84cc engine delivers effortless bucking of hardwood trunks and forestry logs",
      "Dual spring inertia-activated chain brake stops spinning cutter chain in milliseconds during kickback",
      "Three-point anti-vibration rubber isolation dampers isolate engine shake from user grip",
      "Centrifugal air filtration pre-cleans air intake before reaching carburetor for reduced filter clogging"
    ],
    applications: "Hardwood timber felling, sawmill log sizing, highway tree clearance, rural agriculture, municipal emergency rescue."
  },

  // 05 DCX PW-550 Trolley High Pressure Car Washer
  {
    id: "dcx-pw550",
    name: "DCX PW-550 Trolley Commercial High Pressure Washer",
    brand: "DCX",
    category: "washers-pumps",
    badge: "Commercial Wash",
    badgeColor: "sky",
    image: "/assets/images/dcx-pressure-washer.jpg",
    shortDesc: "Heavy duty trolley-mounted 3.0 HP copper induction motor pressure washer for commercial vehicle wash centers and industrial floor cleaning.",
    priceNote: "Complete Ready-to-Run Setup Quote",
    inStock: true,
    rating: 4.9,
    reviewsCount: 44,
    leadTime: "Showroom Testing & Dispatch Same Day",
    keySpecs: [
      { label: "Working Pressure", value: "180 Bar Max" },
      { label: "Motor Power", value: "2.2 kW / 3.0 HP" },
      { label: "Water Flow", value: "14 L / min" },
      { label: "Pump Type", value: "Brass Triplex Plunger" }
    ],
    fullSpecs: {
      "Brand / Model": "DCX PW-550 Commercial Trolley",
      "Motor Type": "100% Copper Wound 4-Pole Induction Motor (Low Noise, Long Duty)",
      "Rated Motor Power": "2.2 kW (3.0 HP) / 220V Single Phase",
      "Operating Working Pressure": "140 - 180 Bar (Variable Unloader Knob)",
      "Rated Water Discharge": "12 to 14 Litres per minute",
      "Pump Construction": "Solid forged brass manifold cylinder head with ceramic coated pistons",
      "Trolley Frame": "Tubular powder-coated steel chassis with solid rubber transport wheels",
      "Auto Total-Stop System": "Pump motor automatically shuts down when trigger is released",
      "Hose Spec": "10 Meter Steel Wire Braided High Pressure Hose with Quick Disconnects",
      "Accessories Included": "Heavy brass spray gun, lance extension, suction hose with dual strainer, 4 quick-connect nozzles"
    },
    features: [
      "Pure copper induction motor runs cool even during continuous 8-hour car wash center operations",
      "Heavy duty forged brass pump head withstands high hydraulic stress and gritty borewell water",
      "Complete mobile trolley layout with hose hook and gun holder for effortless maneuvering across wash bays",
      "Total Stop System (TSS) saves water, reduces electrical consumption, and prolongs pump life"
    ],
    applications: "Commercial automobile wash stations, earthmoving equipment wash, poultry/dairy shed sanitization, industrial floor degreasing."
  },

  // 06 MAF PRO MPSE-5 Screw Extractor Set
  {
    id: "maf-mpse5",
    name: "MAF PRO MPSE-5 Reverse Spiral Screw Extractor (5 Pcs)",
    brand: "MAF PRO",
    category: "consumables-tools",
    badge: "Workshop Essential",
    badgeColor: "amber",
    image: "/assets/images/maf-screw-extractor.jpg",
    shortDesc: "High-grade GCR15 alloy steel reverse spiral flute screw extractor set for removing broken studs, rusted bolts, and stripped screws effortlessly.",
    priceNote: "Retail & Workshop Trade Pack",
    inStock: true,
    rating: 4.8,
    reviewsCount: 65,
    leadTime: "Ready to Pick / Dispatch",
    keySpecs: [
      { label: "Material", value: "GCR15 Alloy Steel" },
      { label: "Pieces", value: "5 Piece Set" },
      { label: "Bolt Range", value: "3 mm to 18 mm" },
      { label: "Flute Design", value: "Left Hand Spiral" }
    ],
    fullSpecs: {
      "Brand / Model": "MAF PRO MPSE-5 Industrial Extractor Set",
      "Steel Grade": "Vacuum Heat-Treated GCR15 High Carbon Chrome Alloy Steel",
      "Hardness Rating": "HRC 60 - 62 Edge Retention",
      "Extractor Sizes": "#1 (3-6mm / 1/8\"-1/4\"), #2 (6-8mm / 1/4\"-5/16\"), #3 (8-11mm / 5/16\"-7/16\"), #4 (11-14mm / 7/16\"-9/16\"), #5 (14-18mm / 9/16\"-3/4\")",
      "Drive Shank": "Square end shank for tap wrench, adjustable wrench, or socket adapter",
      "Flute Geometry": "Aggressive counter-clockwise reverse tapered spiral flutes",
      "Storage Packaging": "High impact indexed red/black heavy plastic blow-molded carrying case"
    },
    features: [
      "Aggressive reverse helical threads dig deeper into broken bolt shank as reverse torque increases",
      "Heat-treated alloy steel construction prevents snapping inside the workpiece during high-torque extraction",
      "Clearly stamped size markings on each extractor shank for instant selection in grease-covered workshops",
      "Compatible with hand tap wrenches or hex sockets for tight, recessed engine bay access"
    ],
    applications: "Automotive engine rebuilds, industrial machinery overhaul, pipe maintenance, bolt shear repair."
  },

  // 07 PowerTech PT8000 Gasoline Generator
  {
    id: "powertech-pt8000",
    name: "PowerTech PT8000 Commercial Gasoline Generator (8 kW)",
    brand: "PowerTech",
    category: "generators",
    badge: "Heavy Backup",
    badgeColor: "amber",
    image: "/assets/images/powertools.jpg",
    shortDesc: "Commercial grade 8.0 kW peak output gasoline generator with key electric start, digital meter, and heavy tubular wheel trolley.",
    priceNote: "Special Project Quotation",
    inStock: true,
    rating: 4.9,
    reviewsCount: 24,
    leadTime: "Immediate Showroom Demo / Dispatch",
    keySpecs: [
      { label: "Peak Power", value: "8.0 kW (8000W)" },
      { label: "Engine Size", value: "459 cc OHV 4-Stroke" },
      { label: "Fuel Tank", value: "25 Liters" },
      { label: "Starting", value: "Key Electric + Recoil" }
    ],
    fullSpecs: {
      "Brand / Model": "PowerTech PT8000 Pro Series",
      "Rated Continuous Output": "7.5 kW (7500 Watts)",
      "Surge / Peak Output": "8.0 kW (8000 Watts)",
      "Engine Displacement": "459 cc 4-Stroke OHV Air Cooled Single Cylinder",
      "Alternator Winding": "100% Pure Electrolytic Copper Winding",
      "Voltage Regulation": "Automatic Voltage Regulator (AVR) ±1.5% Voltage Stability",
      "Fuel Capacity": "25 Liter heavy steel fuel tank with built-in level gauge",
      "Runtime @ 50% Load": "10.5 Hours continuous operation",
      "Control Console": "Dual 230V 16A Sockets, Single 32A Industrial Socket, 12V DC Port, Digital 3-in-1 Meter (Volts/Hz/Hours)",
      "Mobility Kit": "Dual never-flat 10\" wheels with heavy rubber grip fold-down transport handles"
    },
    features: [
      "Solid 8 kW output effortlessly powers multiple welding inverters, magnetic drills, and large pumps simultaneously",
      "Precision AVR technology delivers clean, steady power safe for digital inverter equipment and tools",
      "Low-oil auto-shutdown sensor stops the engine before any low lubrication damage can occur",
      "Electric push-button key starter with included maintenance-free 12V battery and backup pull starter"
    ],
    applications: "Remote construction sites, telecom tower backup, bridge and highway project sites, showroom power emergency."
  },

  // 08 MAF PRO DBH22000 Heavy Duty Demolition Hammer
  {
    id: "maf-dbh22000",
    name: "MAF PRO DBH22000 Heavy Demolition Breaker (2200W / 65J)",
    brand: "MAF PRO",
    category: "demolition-drills",
    badge: "Maximum Impact",
    badgeColor: "rose",
    image: "/assets/images/powertools.jpg",
    shortDesc: "Massive 2200 Watt concrete breaker delivering 65 Joules of destruction force with 30mm hex chisel lock and anti-vibration control.",
    priceNote: "Inquire for Best Trade Quote",
    inStock: true,
    rating: 4.9,
    reviewsCount: 33,
    leadTime: "Ready at Raipur Showroom Depot",
    keySpecs: [
      { label: "Motor Power", value: "2200 Watt" },
      { label: "Impact Energy", value: "65 Joules" },
      { label: "Impact Speed", value: "1,600 BPM" },
      { label: "Tool Holder", value: "30 mm Hex System" }
    ],
    fullSpecs: {
      "Brand / Model": "MAF PRO DBH22000 Heavy Breaker",
      "Input Power": "2200 Watt High-Output Motor with heat-treated alloy gears",
      "Rated Voltage": "220V - 240V / 50Hz",
      "Impact Rate at Load": "1,600 Blows Per Minute (BPM)",
      "Impact Joule Rating": "65 Joules Single Impact Energy",
      "Chisel Retention": "30 mm Hex quick-insertion pull-ring lock",
      "Casing Material": "Industrial magnesium alloy barrel and piston cylinder",
      "Vibration Reduction": "Internal pneumatic air cushion damper + isolated rear handle",
      "Machine Weight": "16.8 kg",
      "Package Includes": "Heavy steel carrying trunk case, 1 pointed chisel, 1 flat spade chisel, wrench, grease tub"
    },
    features: [
      "Industrial 65 Joule impact power crushes reinforced concrete, road asphalt, and stone foundations rapidly",
      "Full magnesium alloy crank housing provides superior heat dissipation and enduring mechanical strength",
      "Pneumatic vibration-damping handle protects operator joints and spine over extended demolition shifts",
      "Auto-stop carbon brushes cut off current when worn to protect the commutator from scoring"
    ],
    applications: "Foundation demolition, asphalt road trenching, RCC beam breaking, industrial floor renovation, masonry removal."
  },

  // 09 MAF PRO MPID850 Impact Drill 850W
  {
    id: "maf-mpid850",
    name: "MAF PRO MPID850 Professional Impact Drill (850W / 13mm)",
    brand: "MAF PRO",
    category: "demolition-drills",
    badge: "Versatile",
    badgeColor: "sky",
    image: "/assets/images/powertools.jpg",
    shortDesc: "Dual-mode rotary hammer and drilling tool with 13mm keyed steel chuck, variable speed limiter, and forward/reverse rocker switch.",
    priceNote: "Bulk Box & Single Unit Pricing",
    inStock: true,
    rating: 4.8,
    reviewsCount: 47,
    leadTime: "Immediate Dispatch",
    keySpecs: [
      { label: "Motor Power", value: "850 Watt" },
      { label: "Chuck Capacity", value: "13 mm Keyed" },
      { label: "No-Load Speed", value: "0 - 2,800 RPM" },
      { label: "Impact Rate", value: "0 - 44,800 IPM" }
    ],
    fullSpecs: {
      "Brand / Model": "MAF PRO MPID850 Variable Impact Drill",
      "Motor Rating": "850 Watt 100% Copper Wire Core",
      "Drilling Modes": "Dual Mode (Drill Only / Impact Hammer Drill)",
      "Chuck Type": "13 mm All-Steel Heavy Duty Keyed Chuck",
      "No-Load Variable Speed": "0 to 2,800 RPM with trigger thumb-wheel limiter",
      "Blows Per Minute": "0 to 44,800 IPM High-Frequency Hammering",
      "Max Drilling Capacities": "Concrete: 16 mm / Steel: 13 mm / Wood: 30 mm",
      "Rotation": "Forward and Reverse rocker switch for screw driving / bit unlocking",
      "Included Accessories": "360° rotating side auxiliary handle, steel depth gauge rod, chuck key"
    },
    features: [
      "Robust 850W motor delivers ample power for drilling into brick, mortar, concrete, wood, and steel",
      "Variable speed trigger with thumb-wheel speed dial allows precision pilot hole starting without bit skating",
      "All-metal 13mm keyed chuck clamps drill bits securely with zero slipping during high-torque hammer drilling",
      "Ergonomic rubberized grip with lock-on button minimizes finger strain during continuous drilling tasks"
    ],
    applications: "Electrical conduit installation, plumbing anchoring, woodworking fabrication, metal fabrication, wall fixtures."
  },

  // 10 XTRA-POWER GC Wheel Flexible Grinding Wheel
  {
    id: "xtrapower-gc-wheel",
    name: "XTRA-POWER Green Silicon Carbide (GC) Flexible Wheel",
    brand: "XTRA-POWER",
    category: "consumables-tools",
    badge: "Abrasive Pro",
    badgeColor: "emerald",
    image: "/assets/images/kobmax-angle-grinder.jpg",
    shortDesc: "Premium green silicon carbide flexible grinding wheel engineered for weld blending, stainless steel polishing, and stone finishing.",
    priceNote: "Box of 25 Pcs / Bulk Master Carton Rates",
    inStock: true,
    rating: 4.9,
    reviewsCount: 88,
    leadTime: "Ready Stock in Bulk (Raipur Depot)",
    keySpecs: [
      { label: "Wheel Spec", value: "GC 60 / GC 80" },
      { label: "Dimensions", value: "100 x 3.0 x 16 mm" },
      { label: "Max Speed", value: "13,700 RPM" },
      { label: "Backing", value: "Dual Fiberglass Mesh" }
    ],
    fullSpecs: {
      "Brand / Model": "XTRA-POWER Premium Flexible GC Disc",
      "Abrasive Mineral": "Selected Green Silicon Carbide (GC) Grains",
      "Grit Options": "GC 60 (Stock Removal) / GC 80 (Fine Finishing)",
      "Wheel Dimensions": "100 mm Outer Dia x 3.0 mm Thickness x 16 mm Bore (4\" x 1/8\" x 5/8\")",
      "Max Operating Speed": "13,700 RPM (72 m/s Safety Standard Certified)",
      "Bonding Agent": "Synthetic Resin with Double High-Tensile Fiberglass Reinforcement",
      "Flexible Design": "Patterned dimple surface promotes air cooling and prevents workpiece burn",
      "Packaging Unit": "25 Discs per inner moisture-sealed box / 200 Discs per master carton"
    },
    features: [
      "Unique flexible disc construction dampens grinding vibration and conforms to contoured weld seams",
      "Premium green silicon carbide grains fracture continuously to expose sharp new cutting edges",
      "Waffle-pattern textured surface promotes heat dissipation, preventing discoloration on stainless steel",
      "Reinforced double fiberglass mesh delivers maximum bursting resistance under harsh industrial abuse"
    ],
    applications: "Stainless steel pipe welding, marble and granite edge smoothing, cast iron flash deburring, curved vessel finishing."
  },

  // Core Industrial Machinery 1: Air Compressor
  {
    id: "navkar-screw-compressor",
    name: "TITAN Heavy Rotary Screw Air Compressor (15 HP / 11 kW)",
    brand: "TITAN Industrial",
    category: "washers-pumps",
    badge: "Plant Machinery",
    badgeColor: "sky",
    image: "/assets/images/compressor.jpg",
    shortDesc: "Direct-drive industrial rotary screw compressor with integrated refrigerated air dryer and smart microcomputer controller.",
    priceNote: "Turnkey Plant Supply & Installation Quote",
    inStock: true,
    rating: 4.9,
    reviewsCount: 17,
    leadTime: "Custom Delivery & Onsite Commissioning",
    keySpecs: [
      { label: "Motor Power", value: "15 HP (11 kW)" },
      { label: "Air Discharge", value: "58 CFM (1.65 m³/min)" },
      { label: "Working Pressure", value: "8 - 10 Bar" },
      { label: "Drive Type", value: "Direct Gear Drive" }
    ],
    fullSpecs: {
      "Brand / Series": "TITAN Industrial Air Systems",
      "Motor Specification": "15 HP (11 kW) IE3 High Efficiency 3-Phase 415V 50Hz",
      "Free Air Delivery (FAD)": "58 CFM (1.65 m³/min) @ 8 Bar",
      "Noise Level": "65 ± 2 dBA Super-Silent Acoustic Cabinet",
      "Cooling System": "High-efficiency aluminum plate-fin oil and air cooler",
      "PLC Controller": "Touch keypad microcomputer display monitoring pressure, temp, and service hours"
    },
    features: [
      "Continuous 24/7 duty cycle engineered for industrial factories and manufacturing facilities",
      "Integrated microcomputer controller protects against phase reverse, over-temperature, and motor overload",
      "Direct-drive airend guarantees zero transmission belt slip and reduced maintenance downtime"
    ],
    applications: "Pneumatic automation lines, laser cutting assist gas, spray paint booths, CNC machinery pneumatic feeds."
  },

  // Core Industrial Machinery 2: Heavy Metal Bandsaw
  {
    id: "navkar-bandsaw-350",
    name: "PRO-CUT 350 Semi-Automatic Hydraulic Bandsaw Machine",
    brand: "PRO-CUT",
    category: "grinders-cutters",
    badge: "Heavy Workshop",
    badgeColor: "amber",
    image: "/assets/images/bandsaw.jpg",
    shortDesc: "Semi-automatic hydraulic mitre metal cutting horizontal bandsaw machine with dual direction swivel head for precision structural steel cutting.",
    priceNote: "Factory Direct Dealer Price",
    inStock: true,
    rating: 4.8,
    reviewsCount: 14,
    leadTime: "Showroom Inspection Available",
    keySpecs: [
      { label: "Cutting Capacity", value: "Round 350 mm" },
      { label: "Hydraulic Downfeed", value: "Infinitely Variable" },
      { label: "Mitre Angle", value: "0° to 60° Swivel" },
      { label: "Main Motor", value: "3.0 HP 3-Phase" }
    ],
    fullSpecs: {
      "Brand / Model": "PRO-CUT BS-350 Semi-Auto",
      "Round Bar Cutting Capacity": "90°: 350 mm / 45°: 240 mm / 60°: 150 mm",
      "Rectangular Capacity": "90°: 350 x 220 mm",
      "Blade Dimensions": "3160 x 27 x 0.9 mm Bi-Metal M42",
      "Motor Power": "3.0 HP (2.2 kW) 415V 3-Phase",
      "Blade Speeds": "4-Speed Step Pulley (27, 45, 69, 90 m/min)",
      "Coolant Tank": "Built-in pump with twin adjustable flood coolant nozzles"
    },
    features: [
      "Precision hydraulic cylinder controls smooth, chatter-free bow downfeed for razor-sharp square cuts",
      "Swivelling saw bow allows angled mitre cutting without repositioning heavy steel bars",
      "Heavy cast-iron construction dampens vibration, delivering maximum blade life and burr-free cuts"
    ],
    applications: "Steel stockholders, PEB fabrication shops, pipe manufacturing, heavy engineering machine shops."
  }
];

export function generateWhatsAppMessage(product) {
  const text = `Hello Navkar Tools & Machineries Team,

I am interested in getting an official quotation for:
*Product:* ${product.name}
*Brand / Model:* ${product.brand}
*Category:* ${product.category}

Please share:
1. Best Price (Including GST)
2. Availability & Dispatch Timeline from Raipur
3. Technical Catalog / Datasheet

My Location / Firm:
Requirement Quantity:

Thank you!`;
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function generateCartWhatsAppMessage(cartItems) {
  let itemsList = cartItems
    .map((item, idx) => `${idx + 1}. *${item.name}* (Qty: ${item.quantity || 1}) - Brand: ${item.brand}`)
    .join("\n");

  const text = `Hello Navkar Tools & Machineries (Raipur),

I would like to request an official wholesale quotation for the following machinery & tools:

${itemsList}

Please provide:
- Itemized GST Quotation
- Immediate stock availability at your Station Road Showroom
- Freight / Dispatch terms to our site

Client / Firm Name:
Contact Number:
Delivery Pincode / City:

Thank you!`;
  return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
}
