import { DredgerProduct, MarineService, SurveyCapability, MarineApplication, CareerPosition } from '../types/marine';

export const COMPANY_INFO = {
  name: 'Royal Swalf',
  groupName: 'Swalf Group',
  legalEntity: 'Swalf Immanuel International India Pvt. Ltd. / Royal Swalf Marine',
  tagline: 'Engineering Marine Solutions. Built for Challenging Waters.',
  establishedYear: '2010',
  description: 'Royal Swalf (Swalf Group) is a premier marine engineering organization headquartered in India, delivering cutter suction dredgers, specialized marine equipment, capital & maintenance dredging contracting, high-precision hydrographic surveys, and subsea inspection services across India and international maritime regions.',
  mumbaiOffice: {
    title: 'Corporate Headquarters',
    address: 'Swalf Marine Towers, Nariman Point / CBD Belapur, Mumbai, Maharashtra 400021, India',
    phone: '+91 (022) 2756 8920 / +91 98201 44520',
    email: 'mumbai@royalswalf.com',
  },
  chennaiOffice: {
    title: 'Southern Regional & Marine Operations Hub',
    address: 'Swalf Engineering Yard, Old Mahabalipuram Road (OMR), Chennai, Tamil Nadu 600096, India',
    phone: '+91 (044) 4289 1100 / +91 94440 23180',
    email: 'chennai@royalswalf.com',
  },
  internationalDesk: {
    title: 'International Projects & Maritime Trading',
    email: 'projects@royalswalf.com',
    supportHotline: '+91 98201 44521',
  },
  generalEmail: 'info@royalswalf.com',
  quoteEmail: 'tenders@royalswalf.com',
  tenderEmail: 'tenders@royalswalf.com',
  salesEmail: 'sales@royalswalf.com',
  supportEmail: 'support@royalswalf.com',
  careersEmail: 'careers@royalswalf.com',
  workingHours: 'Monday - Saturday: 08:30 - 18:30 IST',
  standards: ['ISO 9001:2015 Quality Management', 'ISO 14001:2015 Environmental', 'ISO 45001:2018 Occupational Health & Safety', 'IHO S-44 Hydrographic Standards', 'IRS / DNV Marine Classification Support']
};

export const CORE_BUSINESS_CATEGORIES = {
  trading: {
    title: 'Trading & Equipment Supply',
    subtitle: 'High-performance marine equipment, dredging machinery, and heavy industrial components engineered for demanding oceanic and inland conditions.',
    items: [
      { name: 'Cutter Suction Dredgers', desc: 'Custom & standard stationary and self-propelled CSDs from 350mm to 650mm discharge.' },
      { name: 'Dredging Components & Spares', desc: 'Dredge pumps, cutter heads, pick points, spuds, and heavy-duty winches.' },
      { name: 'HDPE Pipes & Polyethylene Floaters', desc: 'Wear-resistant slurry pipelines with quick-coupling stub ends and UV-stabilized floaters.' },
      { name: 'Imported Marine Equipment', desc: 'Deck machinery, marine gearboxes, high-efficiency diesel engines, and propulsion units.' },
      { name: 'Mining & Tailing Dredgers', desc: 'Specialized gold mining, mineral extraction, and heavy slurry excavation dredgers.' },
      { name: 'Amphibious Vehicles & Dredgers', desc: 'Multi-terrain tracked machines for swamp, marshland, and shallow canal desilting.' },
      { name: 'Slurry Pumps, Motors & Gensets', desc: 'High-head booster stations, marine auxiliary gensets, and electric drive motors.' }
    ]
  },
  service: {
    title: 'Marine Contracting & Technical Services',
    subtitle: 'Comprehensive marine contracting, project execution, hydrographic surveying, and underwater inspection backed by certified marine personnel.',
    items: [
      { name: 'Dredging Contractor', desc: 'Turn-key execution of capital, maintenance, port basin, reservoir, and reclamation dredging.' },
      { name: 'Project Management Consultancy (PMC)', desc: 'Feasibility studies, DPR preparation, dredging volume audits, and tender preparation.' },
      { name: 'Dredger Operation & Fleet Manning', desc: 'Certified dredge masters, marine chief engineers, hydraulic technicians, and deck officers.' },
      { name: 'Hydrographic & Bathymetric Survey', desc: 'Single-beam and multi-beam soundings, volume calculations, and navigational charting.' },
      { name: 'Geophysical & Oceanographic Survey', desc: 'Side-scan sonar seabed mapping, sub-bottom strata profiling, and current/tide measurements.' },
      { name: 'Underwater Inspection & ROV', desc: 'Subsea video surveys, jetty piling assessments, intake screen inspections, and ROV logging.' },
      { name: 'Commercial Diving & Hull Cleaning', desc: 'Underwater propeller polishing, sea chest clearing, hull biofouling removal, and salvage support.' },
      { name: 'Marine Logistics & Support Crafts', desc: 'Anchor handling tugs, workboat charter, split hopper barge operations, and pipeline deployment.' }
    ]
  }
};

export const DREDGER_PRODUCTS: DredgerProduct[] = [
  {
    id: 'csd-500-cutter-suction',
    name: 'Cutter Suction Dredger (CSD 500)',
    category: 'dredgers',
    tagline: 'Heavy-Duty Hydraulic Stationary Dredger for Ports, Rivers & Canals',
    shortDesc: 'State-of-the-art 500mm discharge cutter suction dredger engineered for heavy silt, compacted sand, clay, and moderate gravel dredging with maximum uptime.',
    fullDesc: 'The Royal Swalf CSD 500 represents the pinnacle of stationary cutter suction dredger engineering. Built with a modular three-pontoon design for rapid road or sea transport, it features a heavy-duty mechanical cutter head, high-efficiency inboard dredge pump, robust hydraulic winches, and an ergonomic climate-controlled operator cabin with modern dredging automation instruments.',
    image: '/images/1544620347-c4fd4a3d5957.jpg',
    dischargeDiameter: '500 mm (20 inch)',
    maxDredgingDepth: '14.0 m (standard) / 18.0 m (extended ladder)',
    waterFlowCapacity: '4,000 m³/hr',
    solidProduction: '700 - 950 m³/hr (soil dependent)',
    totalInstalledPower: '1,193 kW (1,600 HP) Marine Diesel',
    dischargeDistance: 'Up to 2,500 m without booster pump',
    keyFeatures: [
      'Modular dismountable 3-pontoon hull for rapid transport & easy reassembly',
      'Wear-resistant high-chrome alloy dredge pump casing and impeller',
      'Heavy-duty crown cutter head with interchangeable pick points and chisels',
      'Dual hydraulic spud cylinders with optional spud tilting carriage system',
      'PLC-based dredge automation with production measurement and GPS cutter tracking'
    ],
    applications: ['Port & Harbour Basin Deepening', 'Inland Waterway Navigation Channels', 'Land Reclamation & Coastal Fill', 'Reservoir & Dam Desilting'],
    technicalSpecs: [
      { label: 'Length Overall (Ladder Extended)', value: '38.50 m' },
      { label: 'Hull Length (Pontoons)', value: '26.80 m' },
      { label: 'Beam Overall', value: '7.85 m' },
      { label: 'Main Hull Depth', value: '2.40 m' },
      { label: 'Mean Operating Draft', value: '1.45 m' },
      { label: 'Dredge Pump Type', value: 'Single-stage centrifugal slurry pump' },
      { label: 'Cutter Drive Power', value: '180 kW Hydraulic' },
      { label: 'Swing Winch Line Pull', value: '120 kN' },
      { label: 'Spud Diameter & Length', value: 'Ø 610 mm × 19.0 m' },
      { label: 'Fuel Tank Capacity', value: '24,000 Litres' }
    ],
    standardEquipment: [
      'Marine diesel main engine with heat exchanger cooling',
      'Independent auxiliary engine for hydraulic circuits & electrical power',
      'Air-conditioned operator cabin with 360-degree panoramic sightlines',
      'Sound-proofed acoustic engine room lining',
      'Complete navigation lighting & marine communication pack'
    ],
    optionalEquipment: [
      'Spud carriage installation (increases swing efficiency by up to 25%)',
      'Submerged dredge pump on ladder for ultra-high density slurry recovery',
      'Anchor boom set for fast anchor repositioning without workboat assistance',
      'Radio remote monitoring & automated production logging system'
    ]
  },
  {
    id: 'csd-350-compact',
    name: 'Compact Cutter Suction Dredger (CSD 350)',
    category: 'dredgers',
    tagline: 'Agile & Highly Maneuverable Dredger for Rivers, Lakes & Marinas',
    shortDesc: 'A versatile 350mm cutter dredger tailored for shallow inland waters, narrow canal maintenance, and confined marina basins requiring rapid mobilization.',
    fullDesc: 'Engineered specifically for shallow draft operations and rapid road deployment across India, the CSD 350 features a single center pontoon with two side stabilizers that can be launched directly by standard mobile cranes without requiring slipway facilities.',
    image: '/images/1559136555-9303baea8ebd.jpg',
    dischargeDiameter: '350 mm (14 inch)',
    maxDredgingDepth: '10.0 m',
    waterFlowCapacity: '2,200 m³/hr',
    solidProduction: '300 - 450 m³/hr',
    totalInstalledPower: '522 kW (700 HP)',
    dischargeDistance: 'Up to 1,500 m',
    keyFeatures: [
      'Low draft design allows operation in water depths as low as 1.1 meters',
      'Easily transportable on standard low-bed flatbed trailers across Indian highways',
      'Hydraulic swing and ladder winches with fail-safe multi-disc brakes',
      'Low fuel consumption marine diesel engine optimized for high duty cycles'
    ],
    applications: ['Inland River Dredging', 'Irrigation Canals & Drainage Networks', 'Marina & Yacht Basin Deepening', 'Industrial Effluent Ponds'],
    technicalSpecs: [
      { label: 'Length Overall', value: '26.50 m' },
      { label: 'Beam Overall', value: '5.90 m' },
      { label: 'Operating Draft', value: '1.05 m' },
      { label: 'Cutter Power', value: '80 kW' },
      { label: 'Cutter Speed', value: '0 - 32 rpm Variable' },
      { label: 'Discharge Connection', value: 'Flanged 350 mm nominal' }
    ],
    standardEquipment: ['Main engine driving pump via reduction gearbox', 'Operator ergonomic console', 'Bilge pump system', 'Mooring bitts and fairleads'],
    optionalEquipment: ['Grit-resistant mechanical shaft seals', 'GPS positioning mast', 'Pipeline swivel bend']
  },
  {
    id: 'custom-built-dredgers',
    name: 'Custom-Built Dredgers & Specialized Craft',
    category: 'dredgers',
    tagline: 'Bespoke Marine Engineering Tailored to Site-Specific Strata & Geometries',
    shortDesc: 'Tailor-engineered dredging vessels designed to match exact soil resistance, tidal currents, bridge air-drafts, and specific environmental constraints.',
    fullDesc: 'Every waterway presents unique geotechnical and hydrological hurdles. Royal Swalf designs and manufactures custom dredging platforms from the ground up—including shallow-draft rock cutters, demountable reservoir desilters, and electric-powered zero-emission lagoon dredgers.',
    image: '/images/1505705694340-019e1e335916.jpg',
    dischargeDiameter: '250 mm to 700 mm (Customized)',
    maxDredgingDepth: '6.0 m to 28.0 m',
    waterFlowCapacity: '1,500 - 7,500 m³/hr',
    solidProduction: 'Engineered per project specification',
    totalInstalledPower: 'Electric / Hybrid / Marine Diesel options',
    dischargeDistance: 'Engineered to match pipeline route',
    keyFeatures: [
      'Custom hull dimensions built for narrow canal locks or ultra-low bridge clearances',
      'Choice between high-torque rock cutter heads or environmental shrouds',
      'Option for electric shore-power supply for noise & emission sensitive metropolitan zones',
      'Built in compliance with IRS, DNV, BV, or local maritime authority rules'
    ],
    applications: ['Tailings Ponds with Aggressive Chemicals', 'Extreme Depth Dam Desilting', 'Urban Canal Cleaning Projects', 'Restricted Waterway Navigations'],
    technicalSpecs: [
      { label: 'Design Standard', value: 'IRS / IACS Compatible Marine Steel' },
      { label: 'Propulsion Options', value: 'Stationary spud-walk or self-propelled azimuth thrusters' },
      { label: 'Power Source', value: 'Direct Diesel, Diesel-Electric, or 6.6kV Shore Cable' }
    ],
    standardEquipment: ['Fully engineered general arrangement drawings', 'Class certified weld inspections', 'Operational commissioning on site'],
    optionalEquipment: ['Remote wireless pilot console', 'Integrated acoustic flowmeters']
  },
  {
    id: 'amphibious-multipurpose-dredger',
    name: 'Multi-Purpose Amphibious Dredger',
    category: 'dredgers',
    tagline: 'Tracked All-Terrain Dredging Machine for Wetlands, Marshes & Sludge',
    shortDesc: 'Self-propelled amphibious dredger equipped with heavy caterpillar pontoons, rear spuds, and quick-change cutter, bucket, and rake attachments.',
    fullDesc: 'The Royal Swalf Multi-Purpose Amphibious Dredger transitions seamlessly from dry land into deep water without requiring cranes or auxiliary workboats. Equipped with independently driven sealed pontoon tracks and four stabilizer legs, it operates as an excavator, cutter suction dredger, and vegetation rake all in one vessel.',
    image: '/images/1581092160607-ee22621dd758.jpg',
    dischargeDiameter: '250 mm - 300 mm',
    maxDredgingDepth: '6.5 m',
    waterFlowCapacity: '1,200 m³/hr',
    solidProduction: '150 - 250 m³/hr',
    totalInstalledPower: '205 kW (275 HP) Turbocharged Diesel',
    dischargeDistance: 'Up to 1,200 m',
    keyFeatures: [
      'Self-walking onto trailers and entering water directly from shoreline',
      'Front boom interchangeable with cutter pump, clamshell bucket, and weed rake',
      'Four tilting hydraulic spud legs for stable anchoring in turbulent currents',
      'Low ground pressure tracks prevent sinking into soft swamp mud and marshlands'
    ],
    applications: ['Mangrove & Wetland Restoration', 'Flood Channel & River Bank Desilting', 'Aquatic Vegetation & Weed Clearing', 'Lake Beautification & Sludge Extraction'],
    technicalSpecs: [
      { label: 'Working Weight', value: '19,500 kg' },
      { label: 'Ground Pressure', value: '0.14 kg/cm²' },
      { label: 'Travel Speed (Land)', value: '0 - 4.5 km/h' },
      { label: 'Propulsion (Water)', value: 'Track paddle action & auxiliary waterjet' },
      { label: 'Boom Reach', value: '8.20 m' }
    ],
    standardEquipment: ['Air-suspended operator seat with joystick controls', 'High-flow auxiliary hydraulic lines for attachments', 'Biodegradable hydraulic fluid'],
    optionalEquipment: ['Excavator dredging bucket 600L', 'Hydraulic piling hammer attachment', 'Bio-debris weed rake']
  },
  {
    id: 'jet-suction-dredger',
    name: 'High-Pressure Jet Suction Dredger',
    category: 'dredgers',
    tagline: 'High-Efficiency Deep Sand Mining & Coarse Sediment Extraction',
    shortDesc: 'Equipped with ultra-high pressure water disintegrator jets designed to fluidize compacted sand deposits and pump at exceptional solids ratios.',
    fullDesc: 'Designed specifically for riverbed sand extraction, coastal nourishment, and desilting deep water reservoirs where standard mechanical cutters experience severe abrasive wear. High-pressure centrifugal jet pumps break up consolidated sand formations, which are instantly drawn by the high-volume slurry pump.',
    image: '/images/1518709268805-4e9042af9f23.jpg',
    dischargeDiameter: '350 mm - 450 mm',
    maxDredgingDepth: '22.0 m',
    waterFlowCapacity: '3,200 m³/hr',
    solidProduction: '500 - 750 m³/hr in granular sands',
    totalInstalledPower: '895 kW (1,200 HP)',
    dischargeDistance: 'Up to 2,000 m',
    keyFeatures: [
      'No rotating mechanical cutter heads—dramatically reduces abrasive maintenance downtime',
      'High-pressure water jet ring (6-12 bar) effortlessly fluidizes dense sand layers',
      'Capable of dredging to deep depths of 20+ meters in rivers and lakes',
      'Low specific energy consumption per cubic meter of clean sand extracted'
    ],
    applications: ['Commercial Sand Reclamation', 'Deep Riverbed Deepening', 'Reservoir Sediment Purging', 'Harbour Reclamation Fill'],
    technicalSpecs: [
      { label: 'Jet Water Pump Flow', value: '600 m³/hr @ 8.5 bar' },
      { label: 'Discharge Pipe Size', value: '400 mm' },
      { label: 'Suction Ladder Length', value: '28.0 m' }
    ],
    standardEquipment: ['Dedicated high pressure jet pump engine', 'Robust suction pipe suspension gantry'],
    optionalEquipment: ['Submerged slurry pump for extreme 30m depth capability']
  },
  {
    id: 'gold-mine-dredger',
    name: 'Industrial Gold & Mineral Mining Dredger',
    category: 'dredgers',
    tagline: 'Integrated Excavation, Trommel Washing & Gravity Separation Plant',
    shortDesc: 'Turn-key mineral dredging vessel equipped with cutter/bucket ladder, high-pressure trommel scrubber, and multi-stage sluice recovery systems.',
    fullDesc: 'A complete floating mineral beneficiation factory. It continuously excavates heavy alluvial placer deposits, washes and classifies material through a revolving trommel screen, and separates heavy minerals (gold, rutile, ilmenite, zircon) across high-recovery pulsating sluice boxes.',
    image: '/images/1578328819058-b69f3a3b0f6b.jpg',
    dischargeDiameter: 'Trommel Discharge + Tailings Chute',
    maxDredgingDepth: '12.0 m',
    waterFlowCapacity: 'Placer processing rate 150-250 tonnes/hr',
    solidProduction: 'Continuous alluvial separation',
    totalInstalledPower: '380 kW',
    dischargeDistance: 'Integrated stern tailings discharge conveyor',
    keyFeatures: [
      'Heavy duty manganese steel trommel screen with internal water spray bars',
      'High-recovery gold carpet sluice boxes with gold capture efficiency over 92%',
      'Stern tailings discharge conveyor distributes barren gravel away from dredge pool',
      'Equipped with clean water supply circuits for mineral concentration'
    ],
    applications: ['Alluvial Gold Placer Mining', 'Heavy Mineral Sands (Ilmenite, Garnet, Zircon)', 'Diamond Gravel Extraction'],
    technicalSpecs: [
      { label: 'Trommel Diameter', value: '1.50 m × 6.0 m length' },
      { label: 'Screen Mesh Sizing', value: 'Dual layer 8mm / 16mm' },
      { label: 'Recovery Units', value: 'Pulsating sluice + centrifugal concentrator' }
    ],
    standardEquipment: ['Main generator set', 'Raw water wash pump', 'Security bullion collection lockbox'],
    optionalEquipment: ['Centrifugal Knelson/Falcon concentrator', 'Vibrating grizzly feeder']
  },
  {
    id: 'dam-reservoir-dredger',
    name: 'Deep-Water Dam & Reservoir Desilting Dredger',
    category: 'dredgers',
    tagline: 'Precision Sediment Removal to Restore Dam Live Storage Capacity',
    shortDesc: 'Deep-suction specialized dredging vessel designed to remove consolidated clay and fine silt from hydro dams without clouding downstream water supplies.',
    fullDesc: 'Reservoirs across India lose substantial water storage volume annually due to silt accumulation. The Royal Swalf Dam Desilting Dredger operates at depths down to 35 meters with specialized suction hoods, positive displacement pumps, and turbidity-control curtains to restore storage capacity safely.',
    image: '/images/1541888946425-d0fbb186156a.jpg',
    dischargeDiameter: '300 mm - 400 mm',
    maxDredgingDepth: '35.0 m',
    waterFlowCapacity: '2,500 m³/hr',
    solidProduction: '350 - 550 m³/hr',
    totalInstalledPower: '745 kW (1,000 HP)',
    dischargeDistance: 'Up to 3,500 m (with booster)',
    keyFeatures: [
      'Deep suction ladder with submerged electric or hydraulic slurry pump',
      'Turbidity-suppression shroud minimizes suspended solids near intake towers',
      'Low draught sectional barges allow overland transport to remote mountain dam sites',
      'Continuous echo-sounder monitoring prevents damage to dam base concrete'
    ],
    applications: ['Hydroelectric Dam Reservoirs', 'Municipal Water Storage Lakes', 'Thermal Power Station Cooling Ponds'],
    technicalSpecs: [
      { label: 'Max Operating Depth', value: '35.0 m' },
      { label: 'Deployment System', value: 'Modular containerized pontoons' },
      { label: 'Turbidity Barrier', value: 'Included multi-layer curtain system' }
    ],
    standardEquipment: ['Depth sonar sensor', 'Over-head A-frame ladder hoist', 'Hydraulic winch console'],
    optionalEquipment: ['Floating booster pump station', 'Submerged agitator cutter head']
  },
  {
    id: 'hdpe-pipes-floaters',
    name: 'Dredging HDPE Pipes & Polyethylene Floaters',
    category: 'accessories',
    tagline: 'High-Strength Abrasion-Resistant Slurry Discharge Pipeline Systems',
    shortDesc: 'Virgin PE100 high-density polyethylene dredge pipes, quick-connect steel backing rings, and UV-stabilized rotational molded pipeline floaters.',
    fullDesc: 'Engineered specifically for abrasive slurry transport under high working pressures. Our HDPE dredge pipes feature thicker wear margins and low friction coefficients, ensuring lower pumping head loss and three times the service life of standard mild steel pipes.',
    image: '/images/1504307651254-35680f356dfd.jpg',
    keyFeatures: [
      'Manufactured from virgin PE100 high-density polyethylene compound',
      'Floaters made from rotationally molded virgin UV-stabilized PE shell filled with PU closed-cell foam',
      'Resistant to saltwater corrosion, marine growth, and harsh tropical UV rays',
      'Equipped with galvanized steel stub ends and loose backing flanges'
    ],
    applications: ['Floating Slurry Lines', 'Submerged Sink Lines', 'Shoreline Discharge Pipelines'],
    technicalSpecs: [
      { label: 'Pipe Outer Diameters', value: 'Ø 200 mm to Ø 900 mm' },
      { label: 'Pressure Ratings', value: 'PN6, PN10, PN16, PN20 bar' },
      { label: 'Floater Foam Density', value: 'Closed cell polyurethane 35-40 kg/m³' },
      { label: 'Connection Method', value: 'Flanged with EPDM gaskets or butt-fusion' }
    ],
    standardEquipment: ['Corrosion-proof galvanized bolts and nuts', 'Pre-assembled floater fasteners'],
    optionalEquipment: ['Wear indicator stripe', 'Ball-and-socket quick couplers']
  },
  {
    id: 'heavy-duty-slurry-pumps',
    name: 'Marine Slurry & Dredge Pumps',
    category: 'accessories',
    tagline: 'High-Efficiency Heavy-Duty Single-Stage Centrifugal Dredge Pumps',
    shortDesc: 'High-chrome alloy (A05 / Cr27) wear-resistant dredge pumps engineered for abrasive sand, gravel, and heavy density slurry pumping.',
    fullDesc: 'Manufactured with high-hardness chromium white iron alloy casings and wide-passage non-clogging closed impellers, Royal Swalf dredge pumps deliver hydraulic efficiency up to 82% while passing large gravel boulders without blockage.',
    image: '/images/1581092335397-9583fe92d232.jpg',
    keyFeatures: [
      'High chrome white iron alloy with hardness exceeding 60-65 HRC',
      'Wide impeller passage allows stones up to 250mm to pass easily',
      'Expeller seal and mechanical gland packing prevent slurry leakage into bearings',
      'Heavy-duty grease/oil lubricated roller bearing assemblies'
    ],
    applications: ['Main Inboard Dredge Pumps', 'Submerged Ladder Pumps', 'Shoreline Booster Pump Stations'],
    technicalSpecs: [
      { label: 'Discharge Bore', value: '300 mm to 650 mm' },
      { label: 'Capacity Flow', value: '1,500 to 6,500 m³/hr' },
      { label: 'Total Head', value: '25 to 75 m water column' },
      { label: 'Max Solid Particle Size', value: 'Up to 240 mm' }
    ],
    standardEquipment: ['Heavy cast iron base frame', 'High-chrome replacement wear plates'],
    optionalEquipment: ['Double-wall pump casing for ultimate safety in rock dredging']
  },
  {
    id: 'workboats-anchor-tugs',
    name: 'Workboats & Anchor Handling Tugs',
    category: 'marine-equipment',
    tagline: 'Dedicated Auxiliary Crafts for Dredge Towing, Spud Positioning & Crew Transfer',
    shortDesc: 'Twin-screw steel hull auxiliary workboats equipped with high bollard pull, hydraulic crane, and heavy bow pushing knees for marine dredging support.',
    fullDesc: 'Crucial support vessels for any major dredging operation. Royal Swalf workboats provide anchor positioning, fuel and fresh water bunkering to dredgers, pipeline towing, and rapid crew transport between shore and offshore dredging spreads.',
    image: '/images/1506953823976-52e1fdc0149a.jpg',
    keyFeatures: [
      'Twin-screw diesel propulsion with nozzle rudders for maximum bollard pull',
      'Foredeck hydraulic telescopic knuckle crane (3.0t @ 8m reach)',
      'Heavy-duty anchor handling deck winch with warping head',
      'Heavy rubber push knees for dredger maneuvering and barge pushing'
    ],
    applications: ['Dredge Anchor Relocation', 'Pipeline Towing & Positioning', 'Crew Transfer & Emergency Standby', 'Survey Support Craft'],
    technicalSpecs: [
      { label: 'Vessel Length', value: '14.50 m - 22.0 m' },
      { label: 'Beam', value: '5.20 m' },
      { label: 'Bollard Pull', value: '8.5 to 18 Tonnes' },
      { label: 'Main Engines', value: 'Twin Marine Diesels (2 × 350 - 650 HP)' }
    ],
    standardEquipment: ['Class approved towing hook with quick release', 'Marine VHF and radar'],
    optionalEquipment: ['Firefighting monitor 120 m³/hr', 'Fuel transfer pump to dredgers']
  },
  {
    id: 'dredger-brokerage-service',
    name: 'Dredger Buying, Selling & Brokerage',
    category: 'brokerage',
    tagline: 'Pre-Owned Dredger Inspection, Valuation, Refurbishment & International Trading',
    shortDesc: 'Certified marine surveyors and brokers facilitating buying, selling, chartering, and technical refitting of used dredgers, barges, and tugs.',
    fullDesc: 'Royal Swalf provides transparent, technically verified brokerage for dredging assets. We conduct comprehensive ultrasound hull thickness surveys, engine health diagnostics, pump casing residual wear measurements, and manage customs clearance, towing, and mobilization to Indian and global ports.',
    image: '/images/1518241353330-0f7941c2d9b5.jpg',
    keyFeatures: [
      'Rigorous 120-point pre-purchase mechanical and ultrasonic hull inspection',
      'Accurate fair market valuation backed by operational historical data',
      'Turn-key shipyard refurbishment, re-engining, and classification renewal',
      'Export/import clearance, Indian port registration, and delivery voyage logistics'
    ],
    applications: ['Acquisition of Certified Pre-Owned Dredgers', 'Fleet Liquidation & Divestment', 'Bareboat & Time Charter Contracts'],
    technicalSpecs: [
      { label: 'Asset Types Covered', value: 'CSD, TSHD, Split Barges, Workboats, Cranes' },
      { label: 'Inspection Scope', value: 'Ultrasonic hull gauge, pump wear, engine NDT' },
      { label: 'Transaction Support', value: 'Escrow, maritime contract, flag registration' }
    ],
    standardEquipment: ['Official Royal Swalf Technical Survey & Condition Report'],
    optionalEquipment: ['Turn-key mobilization to client job site', 'Crew training package']
  }
];

export const MARINE_SERVICES: MarineService[] = [
  {
    id: 'capital-maintenance-dredging',
    title: 'Capital & Maintenance Dredging',
    category: 'dredging',
    summary: 'Executing port navigation channel deepening, maintenance desilting, berth pocket clearing, and coastal reclamation across India.',
    description: 'Royal Swalf operates a versatile dredging fleet capable of tackling demanding capital projects (dredging virgin unworked seabed, compact clay, and weathered rock) as well as continuous maintenance dredging to guarantee certified draft for container terminals, oil jetties, and naval bases.',
    image: '/images/1544620347-c4fd4a3d5957.jpg',
    capabilities: [
      'Capital deepening of approach channels and turning basins',
      'Annual maintenance dredging of silted harbour berths and navigation routes',
      'Precision trenching for subsea oil, gas, and power cable lay projects',
      'Controlled spoil disposal with floating pipeline management and designated dumping grounds'
    ],
    standards: ['IRS / MMD Regulations', 'MoEFCC Environmental Clearances', 'IHO Navigational Depth Compliance'],
    applications: ['Major & Non-Major Ports in India', 'Shipyard Drydock Basins', 'LNG & Petroleum Marine Terminals'],
    equipmentUsed: ['Cutter Suction Dredgers (CSD 350 - 650)', 'Split Hopper Barges', 'Anchor Handling Tugs', 'Real-time DGPS Cutter Guidance']
  },
  {
    id: 'inland-waterway-dredging',
    title: 'Inland Waterways & River Dredging',
    category: 'dredging',
    summary: 'Navigational channel development, shoal removal, and flood-mitigation desilting across National Waterways and major river systems.',
    description: 'In support of Inland Waterways Authority of India (IWAI) initiatives and regional irrigation boards, Royal Swalf mobilizes shallow-draft dredging spreads to maintain Least Available Depth (LAD) for cargo barges, passenger ferries, and river cruise vessels while reinforcing river embankments.',
    image: '/images/1559136555-9303baea8ebd.jpg',
    capabilities: [
      'Maintaining Least Available Depth (LAD 2.5m - 3.5m) along river corridors',
      'River training and sandbar cutting to redirect erosive monsoon currents',
      'Desilting barrages, irrigation weirs, and intake forebays',
      'Geotextile tube filling with dredged sand for river bank stabilization'
    ],
    standards: ['IWAI Waterway Standards', 'Central Water Commission (CWC) Guidelines'],
    applications: ['National Waterways (NW-1, NW-2, NW-4, etc.)', 'Irrigation Canals', 'Barrages & Flood Channels'],
    equipmentUsed: ['Compact CSDs', 'Amphibious Dredgers', 'HDPE Discharge Pipelines with Floaters']
  },
  {
    id: 'hydrographic-bathymetric-survey',
    title: 'Hydrographic & Bathymetric Survey',
    category: 'survey',
    summary: 'IHO compliant single-beam and high-resolution multi-beam echo soundings for seabed mapping, volume audits, and nautical charting.',
    description: 'Our hydrographic division deploys survey vessels equipped with dual-frequency single-beam, high-resolution multi-beam swath bathymetry, motion reference units (MRU), and RTK-DGPS to provide centimetre-level seabed topography before, during, and after dredging works.',
    image: '/images/1505705694340-019e1e335916.jpg',
    capabilities: [
      'High-density Multi-Beam Sonar Bathymetry (IHO Order 1a & Special Order)',
      'Pre-dredge, progress, and post-dredge volume calculation reports',
      'Electronic Navigational Charting (ENC) and bathymetric contour maps',
      'Port approach hazard detection, shallow anomaly tagging, and clearance surveys'
    ],
    standards: ['IHO S-44 Standards 6th Edition', 'National Hydrographic Office (NHO) Specifications'],
    applications: ['Port Dredging Certification', 'Bridge Piling Scour Monitoring', 'Harbour Construction Planning'],
    equipmentUsed: ['Reson / Norbit Multi-Beam Sonars', 'Applanix POS MV Inertial Systems', 'HYPACK / HYSWEEP Processing Suites']
  },
  {
    id: 'geophysical-sonar-survey',
    title: 'Geophysical & Side-Scan Sonar Survey',
    category: 'survey',
    summary: 'Acoustic seabed feature imaging, sub-bottom strata profiling, and subsea pipeline / cable route hazard surveys.',
    description: 'Using high-frequency dual-channel side-scan sonars, sub-bottom profilers, and marine magnetometers, Royal Swalf maps seabed geological features, buried pipelines, historical shipwrecks, and sub-surface rock strata to ensure safe marine engineering design.',
    image: '/images/1518709268805-4e9042af9f23.jpg',
    capabilities: [
      'Digital high-resolution Side-Scan Sonar seabed mosaic imaging',
      'Sub-bottom chirp profiling to determine sediment layer thickness above bedrock',
      'Marine magnetometer surveys for locating buried metallic debris and ordnance',
      'Undersea pipeline and fiber optic cable route survey and burial depth assessment'
    ],
    standards: ['IMCA Guidelines', 'SUT Marine Geophysics Recommended Practices'],
    applications: ['Offshore Wind & Cable Routes', 'Port Dredging Stratigraphy Analysis', 'Underwater Archaeological Surveys'],
    equipmentUsed: ['Edgetech Side-Scan Sonars', 'Chirp Sub-Bottom Profilers', 'Marine Geometrics Magnetometers']
  },
  {
    id: 'underwater-inspection-rov',
    title: 'ROV Subsea Inspection & Commercial Diving',
    category: 'survey',
    summary: 'Subsea video logging, jetty piling structural integrity checks, intake screen clearing, and underwater hull biofouling cleaning.',
    description: 'Combining state-of-the-art Remotely Operated Vehicles (ROV) with certified commercial diving teams, Royal Swalf conducts non-destructive underwater testing (NDT), ultrasonic metal thickness gauging, propeller polishing, and marine structure inspections in zero-visibility conditions.',
    image: '/images/1581092160607-ee22621dd758.jpg',
    capabilities: [
      'Inspection Class ROV subsea 4K video recording with manipulator arm',
      'Ultrasonic hull thickness measurement and cathodic protection anode logging',
      'Jetty pile integrity assessments and scour concrete jacket inspections',
      'Underwater hull scrubbing, propeller super-polishing, and sea chest grating clearing'
    ],
    standards: ['IMCA Diving Guidelines', 'DNV / ABS In-Water Survey (UWILD) Certified Procedures'],
    applications: ['Commercial Shipping Vessels', 'Offshore Oil & Gas Platforms', 'Port Jetties & Wharves', 'Intake Reservoirs'],
    equipmentUsed: ['Observation Class ROVs with Sonar Integration', 'Hydraulic Rotary Hull Cleaning Units', 'Cygnus Subsea Ultrasonic Thickness Gauges']
  },
  {
    id: 'dredger-operation-manning',
    title: 'Dredger Operation & Fleet Manning Services',
    category: 'marine-support',
    summary: 'Supplying highly certified Dredge Masters, Chief Engineers, and hydraulic specialists to manage client-owned marine fleets.',
    description: 'Equipment is only as effective as the crew at the helm. Royal Swalf provides complete operational management and technical crews for port trusts, marine contractors, and industrial operators—maximizing hourly solid production while minimizing fuel consumption and mechanical wear.',
    image: '/images/1518241353330-0f7941c2d9b5.jpg',
    capabilities: [
      'Turn-key crewing with certified Dredge Masters, 1st Class Marine Engineers, and deck teams',
      'Preventative planned maintenance systems (PMS) and lubrication audits',
      'On-site operator training in dredge automation, swing optimization, and slurry density control',
      '24/7 technical breakdown support with rapid spares dispatch across Indian ports'
    ],
    standards: ['STCW Convention', 'Directorate General of Shipping (DGS) India Guidelines'],
    applications: ['Port Trust Dredgers', 'Mining Concessions', 'Contractor Fleet Augmentation'],
    equipmentUsed: ['Planned Maintenance Software', 'Hydraulic Test Benches', 'Vibration Analysis Meters']
  },
  {
    id: 'marine-project-consultancy',
    title: 'Marine Project Management Consultancy (PMC)',
    category: 'consultancy',
    summary: 'Technical feasibility studies, Detailed Project Report (DPR) preparation, dredging volume audits, and contractor supervision.',
    description: 'We advise government agencies, port authorities, and private developers on dredging feasibility, dredgeability studies based on soil geotechnical boreholes, environmental mitigation, tender document preparation, and independent third-party volume measurement.',
    image: '/images/1506953823976-52e1fdc0149a.jpg',
    capabilities: [
      'Dredgeability assessment and equipment sizing for tender documentation',
      'Independent hydrographic pre- and post-dredging volume certifications',
      'Environmental Impact Assessment (EIA) support and turbidity plume modeling',
      'Slurry transport pipeline friction head loss and booster pump sizing calculations'
    ],
    standards: ['FIDIC Marine Contract Principles', 'PIANC Dredging Technical Reports'],
    applications: ['Port Expansion Master Plans', 'River Navigation DPRs', 'EPC Marine Tender Evaluations'],
    equipmentUsed: ['Geotechnical Analysis Software', 'Hydraulic Slurry Pipeline Simulation Models']
  }
];

export const SURVEY_CAPABILITIES: SurveyCapability[] = [
  {
    id: 'multibeam-bathymetry',
    title: 'High-Resolution Multi-Beam Bathymetry',
    type: 'Hydrographic Acoustic Sounding',
    description: 'Swath acoustic sonar that maps 100% of the seabed with hundreds of soundings per ping, providing full-coverage 3D digital terrain models (DTM).',
    equipment: 'Norbit iWBMS / Teledyne Reson SeaBat Multi-beam + Applanix POS MV WaveMaster',
    deliverables: ['3D Seabed Point Clouds', 'IHO Order 1a Sounding Sheets', 'Difference Volume Grids', 'Color-Coded Depth Contours'],
    ihoClass: 'Special Order & Order 1a Compliant'
  },
  {
    id: 'singlebeam-survey',
    title: 'Dual-Frequency Single-Beam Bathymetry',
    type: 'Hydrographic Sounding',
    description: 'Simultaneous high (200 kHz) and low (33 kHz) frequency soundings to differentiate hard consolidated seabed from fluid mud / soft silt layers.',
    equipment: 'Odom Hydrotrac II / SonarMite Dual Frequency Echo Sounders + Leica RTK GPS',
    deliverables: ['Cross-Section Profiles', 'Navigational Sounding Charts', 'Siltation Rate Estimates'],
    ihoClass: 'Order 1b & Order 2 Compliant'
  },
  {
    id: 'side-scan-sonar',
    title: 'Digital Dual-Frequency Side-Scan Sonar',
    type: 'Seabed Feature & Obstacle Imaging',
    description: 'Photographic-like acoustic imaging of the seafloor to pinpoint wrecks, submerged rocks, dropped containers, anchor scars, and exposed pipelines.',
    equipment: 'EdgeTech 4125 Dual-Frequency (400/900 kHz) Towfish Sonar',
    deliverables: ['Georeferenced Acoustic Mosaics', 'Target Contact Log with Dimensions', 'Seabed Classification Maps'],
    ihoClass: 'Seabed Search & Object Detection Standard'
  },
  {
    id: 'sub-bottom-profiling',
    title: 'Chirp Sub-Bottom Profiling (SBP)',
    type: 'Geophysical Stratigraphy',
    description: 'Acoustic penetration beneath the seabed to determine the thickness of silt, sand, and clay strata above impenetrable bedrock before dredging.',
    equipment: 'EdgeTech 3100 Sub-Bottom Profiler with Chirp Acoustic Pulse Technology',
    deliverables: ['Sub-surface Seismic Reflection Profiles', 'Rock Head Level Maps', 'Dredgeability Geotechnical Sections'],
    ihoClass: 'Geophysical Stratigraphic Mapping'
  },
  {
    id: 'subsea-rov-inspection',
    title: 'ROV Subsea Visual & NDT Inspection',
    type: 'Subsea Robotics & Non-Destructive Testing',
    description: 'Deploying high-definition micro-ROVs equipped with robotic grabbers, laser scaling, and ultrasonic gauges to inspect submerged marine infrastructure.',
    equipment: 'Deep Trekker REVOLUTION / VideoRay Pro 4 ROV with 4K UHD Tilt Camera & Sonar',
    deliverables: ['Continuous 4K Video Logs with Depth Stamp', 'Ultrasonic Metal Thickness Certificates', 'Structural Integrity Anomaly Reports'],
    ihoClass: 'In-Water Survey (UWILD) Certified'
  },
  {
    id: 'topographic-coastal-survey',
    title: 'Topographic & Drone Photogrammetry',
    type: 'Terrestrial & Coastal Baseline',
    description: 'High-precision RTK total stations and RTK survey drones capturing coastline topography, reclamation fill volume, and foreshore baselines.',
    equipment: 'DJI Matrice 300 RTK with Zenmuse P1 Sensor + Leica TS16 Robotic Total Stations',
    deliverables: ['Orthomosaic Maps', 'Digital Surface Models (DSM)', 'Reclamation Stockpile Volume Audits'],
    ihoClass: 'Survey of India Benchmark Tied'
  }
];

export const MARINE_APPLICATIONS: MarineApplication[] = [
  {
    id: 'ports-harbours',
    title: 'Commercial Ports & Harbours',
    sector: 'Commercial Maritime',
    description: 'Deepening approach channels, turning basins, and container terminal berths to accommodate modern Capesize and ultra-large container vessels.',
    typicalChallenges: ['Heavy vessel traffic requires non-intrusive operations', 'Tight berth pocket tolerances', 'Strict environmental turbidity regulations'],
    recommendedSolutions: ['High-production stationary CSD with spud carriage', 'Hydrographic multi-beam quality control', 'Submerged discharge lines'],
    image: '/images/1544620347-c4fd4a3d5957.jpg'
  },
  {
    id: 'rivers-canals',
    title: 'Rivers & Inland National Waterways',
    sector: 'Inland Navigation & Irrigation',
    description: 'Clearing silted river channels, maintaining Least Available Depth (LAD) for inland barge transport, and desilting major irrigation canal networks.',
    typicalChallenges: ['Shallow drafts and rapid water level fluctuations', 'Low bridge clearances prevent large equipment', 'Remote logistics'],
    recommendedSolutions: ['CSD 350 compact demountable units', 'Multi-purpose amphibious dredgers', 'Lightweight HDPE floating pipelines'],
    image: '/images/1559136555-9303baea8ebd.jpg'
  },
  {
    id: 'dams-reservoirs',
    title: 'Hydro Dams & Water Reservoirs',
    sector: 'Energy & Municipal Water',
    description: 'Restoring live storage capacity in municipal water reservoirs and hydroelectric dam headponds without taking power turbines offline.',
    typicalChallenges: ['Extreme water depths exceeding 25-35 meters', 'Highly compacted deep clay sediments', 'Water quality preservation'],
    recommendedSolutions: ['Deep-suction dredgers with submerged pumps', 'Silt curtain turbidity barriers', 'High-head booster stations'],
    image: '/images/1541888946425-d0fbb186156a.jpg'
  },
  {
    id: 'mining-tailings',
    title: 'Mining Settling Ponds & Mineral Recovery',
    sector: 'Mining & Heavy Industry',
    description: 'Continuous extraction of abrasive mineral sands, tailing recovery, and industrial lagoon de-sludging in abrasive chemical environments.',
    typicalChallenges: ['Highly abrasive slurries rapidly erode standard pumps', 'Chemical acidity or caustic tailing pond fluids', 'Lined lagoons require zero liner damage'],
    recommendedSolutions: ['Gold mine placer dredgers', 'Auger dredgers with rubber wheels', 'Cr27 high-chrome alloy slurry pumps'],
    image: '/images/1578328819058-b69f3a3b0f6b.jpg'
  },
  {
    id: 'land-reclamation',
    title: 'Land Reclamation & Waterfront Development',
    sector: 'Infrastructure & Coastal Civil',
    description: 'Pumping millions of cubic meters of marine sand to create new land for port expansions, industrial parks, and coastal protection.',
    typicalChallenges: ['Long pumping distances requiring multiple booster stations', 'Strict compaction and grain size specifications', 'Monsoon sea swells'],
    recommendedSolutions: ['High-capacity CSD 500/650 spreads', 'Large-bore HDPE discharge lines with floater sets', 'Heavy anchor handling tugs'],
    image: '/images/1504307651254-35680f356dfd.jpg'
  },
  {
    id: 'environmental-desilting',
    title: 'Environmental Dredging & Toxic Sludge Removal',
    sector: 'Ecological Restoration',
    description: 'Precision dredging of contaminated organic sludge from urban lakes and industrial lagoons with minimal secondary water resuspension.',
    typicalChallenges: ['Preventing contaminant plume release', 'De-watering dredged sludge efficiently', 'Fragile lake ecosystems'],
    recommendedSolutions: ['Horizontal auger dredge with environmental shroud', 'Geotextile dewatering containment bags', 'Real-time turbidity sensors'],
    image: '/images/1518709268805-4e9042af9f23.jpg'
  }
];

export const CAREER_POSITIONS: CareerPosition[] = [
  {
    id: 'dredge-master-captain',
    title: 'Dredge Master / Captain (CSD Operations)',
    department: 'Marine Dredging Operations',
    location: 'Mumbai / Project Sites (Pan-India)',
    experience: '7 - 12 Years in Cutter Suction Dredging',
    type: 'Full-Time / Rotation',
    description: 'Lead dredging production on high-capacity cutter suction dredgers. Responsible for vessel navigation, swing optimization, slurry concentration management, and deck safety.',
    requirements: [
      'Valid Master / Mate Home Trade or Dredge Master Grade I / II Certificate',
      'Proven experience operating CSDs of 450mm diameter or larger in tidal waters',
      'Thorough understanding of hydraulic spud systems and anchoring spreads',
      'Strong leadership and emergency response management'
    ]
  },
  {
    id: 'senior-hydrographic-surveyor',
    title: 'Senior Hydrographic Surveyor',
    department: 'Survey & Inspection Division',
    location: 'Chennai Operations Base / Coastal Sites',
    experience: '5 - 9 Years in Marine Hydrography',
    type: 'Full-Time',
    description: 'Execute high-precision multi-beam bathymetric soundings, side-scan sonar surveys, and produce certified pre- and post-dredging volume calculation reports.',
    requirements: [
      'Degree / Diploma in Geomatics, Geodesy, Ocean Engineering, or Hydrography (FIG/IHO Cat A or Cat B preferred)',
      'Proficient in HYPACK / HYSWEEP, QPS QINSy, and CARIS HIPS and SIPS',
      'Hands-on expertise with Reson / Norbit multibeam sonars and Applanix POS MV',
      'Experience in volume computation and IHO S-44 compliance standards'
    ]
  },
  {
    id: 'chief-marine-engineer',
    title: 'Chief Marine Engineer (Dredging Spreads)',
    department: 'Fleet Engineering & Maintenance',
    location: 'Yard / Coastal Project Sites',
    experience: '8 - 15 Years in Marine Machinery & Slurry Pumps',
    type: 'Full-Time',
    description: 'Oversee maintenance, overhaul, and trouble-free operation of large marine diesel engines, reduction gearboxes, high-pressure hydraulic circuits, and dredge pumps.',
    requirements: [
      'MEO Class I / Class II Marine Engineer or equivalent mechanical engineering degree',
      'Extensive hands-on background with high-chrome centrifugal slurry pumps and heavy marine diesels (Cummins, Caterpillar, Wärtsilä)',
      'Expertise in hydraulic circuit diagnostics (pumps, proportional valves, cylinders)',
      'Strong preventative maintenance planning and spares inventory management'
    ]
  },
  {
    id: 'naval-architect-design-engineer',
    title: 'Naval Architect & Marine Design Engineer',
    department: 'Engineering & Custom Solutions',
    location: 'Mumbai Corporate Office',
    experience: '4 - 8 Years',
    type: 'Full-Time',
    description: 'Perform hydrostatic stability calculations, structural finite element analysis (FEA), and general arrangement design for custom dredgers and auxiliary workboats.',
    requirements: [
      'Bachelor’s / Master’s Degree in Naval Architecture & Ocean Engineering',
      'Proficiency with Maxsurf, Rhino 3D, AutoCAD Marine, and ANSYS structural packages',
      'Knowledge of Indian Register of Shipping (IRS) and DNV vessel classification rules',
      'Familiarity with dredge pipeline slurry dynamics and pontoon flotation mechanics'
    ]
  },
  {
    id: 'underwater-inspection-technician',
    title: 'Commercial Diver & ROV Technician',
    department: 'Subsea Inspection Services',
    location: 'Pan-India Port Hubs',
    experience: '3 - 6 Years',
    type: 'Full-Time / Project Contract',
    description: 'Operate observation-class ROVs, conduct underwater hull inspections, perform ultrasonic thickness measurements, and execute propeller polishing.',
    requirements: [
      'Commercial Surface-Supplied Diving Certificate or IMCA ROV Pilot/Technician rating',
      'CSWIP 3.1U / 3.2U Underwater Inspection qualification is an advantage',
      'Competent in subsea video documentation and ultrasonic thickness gauge calibration',
      'Physically fit and compliant with international offshore medical standards'
    ]
  }
];

export const WORK_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand Your Requirement',
    desc: 'Our marine engineers review your tender specs, navigational constraints, soil borehole data, and project objectives.'
  },
  {
    step: '02',
    title: 'Survey & Project Assessment',
    desc: 'We conduct high-resolution pre-dredge bathymetry, side-scan sonar, and geotechnical profiling to accurately map the seabed.'
  },
  {
    step: '03',
    title: 'Engineering & Solution Design',
    desc: 'Selection of optimal cutter heads, dredge pump flow velocities, discharge pipeline alignments, and booster station requirements.'
  },
  {
    step: '04',
    title: 'Equipment & Service Selection',
    desc: 'Mobilization of purpose-matched cutter suction dredgers, workboats, HDPE pipes, floaters, and certified marine crew.'
  },
  {
    step: '05',
    title: 'Project Execution & Monitoring',
    desc: '24/7 dredging production with real-time DGPS cutter positioning, turbidity plume monitoring, and daily volume tracking.'
  },
  {
    step: '06',
    title: 'Post-Survey & Final Handover',
    desc: 'IHO-certified post-dredging bathymetric verification, volume calculation audits, and seamless project sign-off.'
  }
];

export const WHY_CHOOSE_POINTS = [
  {
    title: 'Proven Marine Engineering Heritage',
    desc: 'Over a decade of specialized focus on cutter suction dredgers, high-wear slurry pumps, and demanding Indian coastal and riverine geology.'
  },
  {
    title: 'End-to-End Turnkey Execution',
    desc: 'From initial hydrographic bathymetric surveys and equipment manufacturing to dredging execution and final client certification.'
  },
  {
    title: 'Rapid Deployment & Road Mobilization',
    desc: 'Dismountable modular dredgers and equipment engineered for rapid transport across Indian highway networks and remote inland sites.'
  },
  {
    title: 'IHO-Compliant Survey Precision',
    desc: 'Equipped with cutting-edge multi-beam sonars, sub-bottom profilers, and ROVs, ensuring accurate volume measurement.'
  },
  {
    title: 'Stringent QHSE & Marine Classification',
    desc: 'Operations managed under ISO 9001, ISO 14001, and ISO 45001 standards in accordance with IRS, DNV, and MMD requirements.'
  },
  {
    title: 'Dedicated Spares & Technical Support',
    desc: 'Extensive inventory of dredge pumps, cutter heads, HDPE pipes, and rapid-response mobile engineering teams.'
  }
];
