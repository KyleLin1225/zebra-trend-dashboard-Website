// Trend Dashboard V3 data model.
// Folder convention: weeks/<W##>/... for weekly-bundled reports, singles/... for standalone reports.
// report.file is ROOT-RELATIVE (resolved against the site root, used by report-viewer.html as an iframe src).

const PERIOD_LABEL = "2026-09-21 – 2026-10-04";

const DOMAINS = [
  { id: "automotive", name: "Automotive & Mobility", accent: "#D40000", // Ferrari red
    blurb: "Five 2026 launches — a bespoke BRABUS coachbuilt GT, Ferrari's first EV and its driver-first hybrid hypercar, Red Bull's new power-unit era, and Tesla's Model Y refresh — converge on how much a cabin can simplify before the hand needs something to hold onto.",
    application: "All five reports point the same direction: the more a product integrates power, cooling and automated geometry, the more deliberately it has to keep the human's actions tactile and unmistakable. For Zebra, the closest analogues are vehicle-mounted computers (VC-series) and forklift/vehicle cradles used across warehousing and field service, where gloved operators need the same kind of locatable, non-screen controls these cars return to for critical actions. The light-signature trend is a cue for status indication on dock and charging cradles — a single engineered optical signal can replace a cluttered LED cluster. The active-geometry trend maps directly onto auto-release dock latches and adjustable mounts: define locked, transitional and failed states as explicitly as an active wing does. Role-based cabin zoning suggests an opportunity in multi-operator vehicle computing, and the structural-integration trend reinforces that thermal and sealing validation for ruggedized mobile computers should happen at the same contact points these automakers now treat as first-class design problems." },
  { id: "ai",         name: "AI Devices",             accent: "#81D8D0", // Tiffany blue
    blurb: "Ray-Ban Meta's audio-only and camera-enabled glasses, Meta's split-compute VR glasses, and Apple's foldable iPhone Duo all treat sensing state, fit and shared feedback as explicit design problems rather than spec-sheet footnotes.",
    application: "This period's AI-forward devices point most directly at Zebra's own worker-worn hardware: wrist-worn mobile computers, ring scanners, and headset/voice devices (HC-series headsets, Workforce Connect Voice), plus customer-facing handheld displays. Visible, shared sensing state is directly applicable to any Zebra wearable with a mic or camera — mute, listening and capture states need the same bystander-legible treatment Ray-Ban is building. Tactile fallback reinforces keeping a physical button or dial on any voice- or gesture-driven interface for noisy or glove-on environments. Fit, hinge and service-part thinking supports swappable straps, pads and hinge adjustments as first-class service parts. Compute moving off the primary surface is a direct reference for offloading battery and processing to a belt pack or cradle, and one-platform-many-forms argues for a shared compute-and-sensing core fitted to different roles across a Zebra wearable family." },
  { id: "wearables",  name: "Wearable Devices",       accent: "#8B5CF6", // purple
    blurb: "Amazfit's dual-solar T-Rex reframes a rugged outdoor watch as a study in power recovery and glanceable, field-ready status.",
    application: "Amazfit's dual-solar watch points directly at Zebra's own rugged wrist-worn mobile computers and wearable scanners. The two-charging-moments trend supports a dual-surface or dock-plus-body charging path rather than relying on one contact point. Power-scarcity-as-workflow-state is a strong model for a defined \"recoverable minimum\" mode that preserves scan confirmation and location reporting before a Zebra device goes fully dark. And glanceable, rugged identity argues for high-contrast, quick-glance status states validated under glare, gloves and motion, with configuration detail deliberately offloaded to a companion app rather than crowding the wrist display." },
  { id: "robotics",   name: "Robotics",               accent: "#38BDF8", // sky blue
    blurb: "ANYbotics' ANYmal earns credentialed passage through secured plant doors, while Sharpa's D01 / W02 / AE01 stack tunes tactile sensing resolution by contact zone and closes the loop with haptic feedback.",
    application: "ANYmal's credentialed-access pattern maps closely onto Zebra's own autonomous mobile robot and fixed industrial scanning portfolio: warehouse and yard robots increasingly need the same managed, revocable digital identity to move through badge-controlled doors, gates and elevators alongside human workers. The legible-authorization trend argues for the same request/grant/deny/fallback states at every robot-operated threshold, with a human-escalation path Zebra's fleet-management software could own. Sharpa's zone-matched sensing and task-explaining haptics are directly relevant to Zebra's handheld and wearable scanners, and the shrinking-envelope trend is a useful discipline for any next-generation Zebra wearable or cobot accessory." },
  { id: "industrial", name: "Industrial Devices",     accent: "#b9ff43", // unchanged
    blurb: "Panasonic's TOUGHBOOK 34 keeps gloved, physical interaction central to rugged field computing while separating durable structure from modular, serviceable interface zones.",
    application: "Every trend here applies almost without translation to Zebra's rugged tablets, mobile computers (TC/MC/ET-series) and vehicle/dock cradles. Gloved-interaction-first reinforces keeping dedicated hardware buttons for scan, acknowledge and recovery actions, validated with representative gloves rather than assumed from a touchscreen spec. The modular-structure trend is a direct cue for how Zebra should define its own service bays with explicit access tools, while pairing every dock or cradle's locked/partial/released state with a confirming visual or tactile cue. Legacy-port preservation protects fleet investment, and protection-as-identity argues for Zebra's industrial design language to keep expressing durability through genuine structural cues rather than cosmetic ruggedization." },
  { id: "sports",     name: "Sports Industry",        accent: "#F76900", // Nike orange
    blurb: "adidas' FREERIDER 2027 range splits flat-pedal and clipless riders into task-matched variants, with micro-adjustable closure and asymmetric protection in the Pro models.",
    application: "adidas FREERIDER's family strategy and adjustable closure map directly onto Zebra's wearable scanner straps and accessory retention systems. One-family-task-matched-variants supports a shared base accessory with task-specific variants rather than one-size-fits-all. Reachable micro-adjustment argues for quick-adjust dials or buckles tested with gloves, mid-task, with the usable range documented rather than promoted as movement for its own sake. And friction-and-impact-zones-engineered-separately supports mapping grip, impact and attachment zones independently on any wearable mount, with inspectable, cleanable wear surfaces built in from the start." },
  { id: "mobile",     name: "Mobile & Handheld Devices", accent: "#FFD60A", // gold
    blurb: "Samsung's Galaxy Tab S12 Ultra and Amazon's redesigned Kindle treat attachment posture, control placement and AI-output review as explicit, testable design decisions on an otherwise familiar handheld slate.",
    application: "Both devices give Zebra direct hypotheses for its own field tablets and handhelds. The Galaxy Tab's paired AI-summary-beside-source pattern is a strong reference for keeping automated suggestions reviewable before a worker accepts a field decision. Its keyboard and pen-attachment postures, together with the Kindle's optional page-turn cover, support designing accessory attachment as its own tested state rather than an assumed add-on. The Kindle's relocated power button is a direct prompt to test Zebra's own trigger and power placement against real one-handed and gloved grips, and its color/material tiering shows how finish can signal device role without touching status-color legibility." }
];

const WEEKS = [
  {
    id: "W40", year: 2026, label: "W40", dateRange: "28 Sep – 4 Oct 2026",
    indexFile: "weeks/W40/index.html",
    zipName: "Weekly_TR_W40_2026-09-28_to_2026-10-04_Merged_6_Topics.zip",
    reports: [
      { title: "Galaxy Tab S12 Ultra", date: "2026-10-04", domain: "mobile",
        blurb: "A thin, sealed tablet becomes a configurable work surface through a pen, keyboard and desktop-style interface.",
        hero: "https://img.global.news.samsung.com/au/wp-content/uploads/2026/09/Thin-and-light-3-728x410.jpg",
        file: "weeks/W40/01_Galaxy_Tab_S12_Ultra.html",
        tags: ["tablet","mobile","productivity","pen","android","samsung","handheld"] },
      { title: "Kindle 2026 Family", date: "2026-10-04", domain: "mobile",
        blurb: "A flush-front reader separates a calm default device from optional tactile controls for different ways of holding it.",
        hero: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/P1011575.jpg?w=800",
        file: "weeks/W40/02_Kindle_2026.html",
        tags: ["e-reader","mobile","reader","kindle","amazon","handheld"] },
      { title: "Logitech Zone Vibe Pro", date: "2026-10-04", domain: "wearables",
        blurb: "A work headset can remain comfortable and repairable while moving between calls, focused work and everyday listening.",
        hero: "https://resource.logitech.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/headsets/zone-vibe-pro/gallery/graphite/zone-vibe-pro-headset-graphite-lifestyle-gallery-2.jpg",
        file: "weeks/W40/03_Logitech_Zone_Vibe_Pro.html",
        tags: ["wearable","headset","audio","office","enterprise","logitech"] },
      { title: "Panasonic TOUGHBOOK 34", date: "2026-10-02", domain: "industrial",
        blurb: "A field workstation connects gloved interaction, detachable postures and replaceable modules without hiding the operator's next action.",
        hero: "https://cdn.mos.cms.futurecdn.net/xFyyTAsRTt2BeMc8uKE4nB-1200-80.jpg",
        file: "weeks/W40/Panasonic_TOUGHBOOK_34.html",
        tags: ["industrial","rugged","rugged device","rugged computer","field computer","toughbook","durable","gloved","tablet"] },
      { title: "Sharpa D01 · W02 · AE01", date: "2026-10-02", domain: "robotics",
        blurb: "A robot body, dexterous hand and haptic glove form one contact loop: sense the object, communicate its state and learn the operator's adjustment.",
        hero: "https://www.sharpa.com/cdn/shop/files/D01-banner.png?v=1790739804&width=3840",
        file: "weeks/W40/Sharpa_Tactile_Platform.html",
        tags: ["robot","robotics","humanoid","haptic","dexterous hand","teleoperation","ai","ai robot"] },
      { title: "adidas FREERIDER 2027", date: "2026-10-02", domain: "sports",
        blurb: "A single footwear family differentiates grip, closure and impact protection around the rider's actual contact with the pedal and terrain.",
        hero: "https://cdn.road.cc/wp-content/uploads/2026/09/Adidas-Freerider-Whistler.jpg",
        file: "weeks/W40/adidas_FREERIDER_2027.html",
        tags: ["wearable","footwear","shoe","cycling","sports gear","adjustable"] }
    ]
  },
  {
    id: "W39", year: 2026, label: "W39", dateRange: "21 – 27 Sep 2026",
    indexFile: "weeks/W39/index.html",
    zipName: "Weekly_Design_Trend_Report_2026-W39_2026-09-21_to_09-27_Visual_Repair.zip",
    reports: [
      { title: "Ray-Ban Meta Audio", date: "2026-09-27", domain: "ai",
        blurb: "Removing the camera makes the frame lighter and socially different, while leaving audio, microphones, battery and serviceable fit as the true design problem.",
        hero: "https://images2.ray-ban.com//prod-onecp-record-files/pieyewear/010ade5c-b241-4310-b8c3-b4b700a6f2fe/0RW7004__601_1M__P21__shad__qt.png",
        file: "weeks/W39/01_Ray_Ban_Meta_Audio.html",
        tags: ["wearable","ai","ai glasses","ai device","smart glasses","audio wearable","eyewear","meta"] },
      { title: "Meta VR Glasses", date: "2026-09-27", domain: "ai",
        blurb: "A 100 g facial display shifts compute to a tethered puck, turning VR into a wearable cinema and workspace.",
        hero: "https://about.fb.com/wp-content/uploads/2026/09/04_VRGlasses_Inline_NBA.jpg?resize=960%2C768",
        file: "weeks/W39/02_Meta_VR_Glasses.html",
        tags: ["wearable","ai","ai device","vr","virtual reality","smart glasses","immersive","meta"] },
      { title: "ANYmal Door Access", date: "2026-09-27", domain: "robotics",
        blurb: "The breakthrough is not a new robot body but the permission to cross a controlled threshold.",
        hero: "https://assets.newatlas.com/dims4/default/5b61d73/2147483647/strip/true/crop/6629x3480+0+469/resize/1200x630!/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2F85%2Fc9%2Fd8d7d55441838b767a3d41fc73b9%2Fanymal-autonomous-inspection-power-grid.jpg",
        file: "weeks/W39/03_ANYmal_Autonomous_Door_Access.html",
        tags: ["robot","robotics","quadruped","industrial robot","access control","autonomous"] },
      { title: "Amazfit T-Rex Dual Solar", date: "2026-09-27", domain: "wearables",
        blurb: "Dual-sided solar charging turns a rugged outdoor watch into a study of power recovery.",
        hero: "https://us.amazfit.com/cdn/shop/files/T-Rex_Dual_Solar__Lifestyle_15.jpg?v=1789715426&width=3840",
        file: "weeks/W39/04_Amazfit_T_Rex_Dual_Solar.html",
        tags: ["wearable","smartwatch","watch","outdoor","solar","fitness","rugged"] },
      { title: "Ray-Ban Meta (Gen 3)", date: "2026-09-27", domain: "ai",
        blurb: "A slimmer capture-enabled glasses family places fit, tactile control and visible sensing state at the center of everyday wear.",
        hero: "https://images2.ray-ban.com//prod-onecp-record-files/pieyewear/3725658c-ff83-4293-a212-b4750075f7c2/0RW4016__6905M4__P21__shad__qt.png",
        file: "weeks/W39/05_Ray_Ban_Meta_Gen_3.html",
        tags: ["wearable","ai","ai glasses","ai device","smart glasses","camera glasses","eyewear","meta"] }
    ]
  }
];

const SINGLE_REPORTS = [
  { title: "Ferrari F80", date: "2026-10-02", domain: "automotive",
    blurb: "A driver-first \"1+\" cabin turns hybrid power, active geometry and tactile control into one tightly integrated architecture.",
    hero: "https://vrrb-prod-s3.s3.us-west-1.amazonaws.com/strapi/Screenshot_2026_04_01_165401_7665b911db.jpg",
    file: "singles/Ferrari_F80.html", zip: "Ferrari_F80_Trend_Report_2026-10-02.zip",
    tags: ["automotive","car","hypercar","hybrid","ferrari","driver-first"] },
  { title: "BRABUS BODO", date: "2026-10-01", domain: "automotive",
    blurb: "A bespoke carbon body builds a new identity around an established operating architecture.",
    hero: "https://media.brabus.com/_Resources/Persistent/3/5/5/8/3558070213588965d4b2b2339a180daf9f7da516/BRABUS%20BODO_in%20Monaco_Steffen%20Miethke_web%20%2817%29-960x640.jpg",
    file: "singles/BRABUS_BODO.html", zip: "BRABUS_BODO_Trend_Report_2026-10-01.zip",
    tags: ["automotive","car","supercar","coachbuilt","gt","carbon body","brabus"] },
  { title: "Red Bull RB22", date: "2026-10-01", domain: "automotive",
    blurb: "A new power-unit era makes functional boundaries, operating states and identity work as one system.",
    hero: "https://img.redbull.com/images/c_limit,w_1400,h_1000/f_jpg,q_85/redbullcom/2026/2/12/f7kccji62eznkhsnltgl/rb22-oracle-red-bull-racing",
    file: "singles/Red_Bull_RB22.html", zip: "Red_Bull_RB22_Trend_Report_2026-10-01.zip",
    tags: ["automotive","race car","f1","formula 1","motorsport","red bull"] },
  { title: "iPhone Duo", date: "2026-10-01", domain: "ai",
    blurb: "A foldable phone becomes useful when display, posture and feedback behave as one continuous task system.",
    hero: "https://www.apple.com/newsroom/images/2026/09/apple-unveils-iphone-duo/article/Apple-iPhone-Duo-colors-260909_big.jpg.large.jpg",
    file: "singles/iPhone_Duo.html", zip: "iPhone_Duo_Trend_Report_2026-10-01.zip",
    tags: ["mobile","phone","smartphone","foldable","handheld","apple","ai device"] },
  { title: "Tesla Model Y", date: "2026-09-30", domain: "automotive",
    blurb: "Juniper refines a familiar crossover through light, comfort and software.",
    hero: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Premium-Hero-Desktop-NA.jpg",
    file: "singles/Tesla_Model_Y.html", zip: "Tesla_Model_Y_Trend_Report_2026-09-30_Remote.zip",
    tags: ["automotive","car","ev","electric vehicle","crossover","tesla"] },
  { title: "Ferrari Luce", date: "2026-09-28", domain: "automotive",
    blurb: "Ferrari's first fully electric car turns the four-door, five-seat brief into a tactile grand tourer.",
    hero: "https://hips.hearstapps.com/hmg-prod/images/49b4cefb-f99d-4c4b-a95c-774fd2b732a7.jpg?crop=0.703xw:0.700xh;0.136xw,0.180xh&resize=1400:*",
    file: "singles/Ferrari_Luce.html", zip: "Ferrari_Luce_2026-09-28_Previous_Version.zip",
    tags: ["automotive","car","ev","electric vehicle","sedan","grand tourer","ferrari"] }
];

// Flatten everything into one searchable pool, tagging each with its source.
const ALL_REPORTS = [];
WEEKS.forEach(w => w.reports.forEach(r => ALL_REPORTS.push({ ...r, source: { type: "week", week: w.id, dateRange: w.dateRange, indexFile: w.indexFile } })));
SINGLE_REPORTS.forEach(r => ALL_REPORTS.push({ ...r, source: { type: "single", zip: r.zip } }));
ALL_REPORTS.sort((a,b) => new Date(b.date) - new Date(a.date));

const TOP_SIGNALS = [
  {
    keyword: "Tactile Confirmation Returns",
    domain: "automotive",
    statement: "Across nearly every category this period, visible surfaces are getting quieter while a small set of physical, tactile or stateful confirmations are fought for and kept.",
    detail: "Ferrari and Tesla bring back buttons a touchscreen-first era tried to remove. Panasonic relies on gloved-aware hardware buttons when touch alone would be ambiguous. Products that skip this discipline are the exception this period, not the rule.",
    evidence: ["Ferrari F80", "Ferrari Luce", "Tesla Model Y", "BRABUS BODO", "Panasonic TOUGHBOOK 34"]
  },
  {
    keyword: "Visible Sensing State",
    domain: "ai",
    statement: "Sensing and recording state has to be unmistakable to the wearer — and to the people around them.",
    detail: "Ray-Ban Meta's camera-free Audio line and its capture-enabled Gen 3 family both treat sensing state as a social design problem, not just a spec sheet entry. Mute, listening and capture states need bystander-legible treatment.",
    evidence: ["Ray-Ban Meta Audio", "Ray-Ban Meta (Gen 3)"]
  },
  {
    keyword: "Credentialed, Legible Autonomy",
    domain: "robotics",
    statement: "Robots are gaining managed digital identity and task-explaining feedback so autonomy stays legible and correctable, not just capable.",
    detail: "ANYmal earns credentialed passage through secured doors by pairing robot identity with existing access infrastructure. Sharpa's haptic stack is designed to communicate task state — success, uncertainty, retry — not just confirm contact happened.",
    evidence: ["ANYmal Door Access", "Sharpa D01 · W02 · AE01"]
  }
];

// Per-domain trend breakdowns — these feed the "Trending Keywords" cloud and each
// domain card's trend count. Distinct from TOP_SIGNALS, which are cross-domain synthesis.
const DOMAIN_TRENDS = {
  automotive: [
    { keyword: "Tactile Return", statement: "Minimal surfaces still need a tactile anchor: physical controls are coming back for the actions that matter most.", application: "Keep locatable physical controls for scan, acknowledge and recovery actions on vehicle-mounted computers and cradles.", evidence: ["Ferrari F80", "Ferrari Luce", "Tesla Model Y", "BRABUS BODO"] },
    { keyword: "Light as Identity", statement: "Brand identity is moving from grille ornamentation into engineered light signatures.", application: "A single engineered optical signal can replace a cluttered LED cluster on dock and charging-cradle status indicators.", evidence: ["Tesla Model Y", "Ferrari Luce", "BRABUS BODO"] },
    { keyword: "Active Geometry", statement: "Moving aerodynamic and body geometry is engineered as a stateful control system, not a styling flourish.", application: "Define locked, transitional and failed states as explicitly as an active wing for auto-release dock latches and adjustable mounts.", evidence: ["Ferrari F80", "Red Bull RB22", "Ferrari Luce", "BRABUS BODO"] },
    { keyword: "Role-Based Cabin", statement: "Cabin architecture is explicitly designed around distinct occupant roles — not just \"driver plus passengers.\"", application: "Multi-operator vehicle computing (driver versus dock worker) can borrow the same role-based zoning.", evidence: ["Ferrari F80", "Ferrari Luce", "Tesla Model Y", "Red Bull RB22"] },
    { keyword: "Structural Integration", statement: "Power, thermal and aerodynamic systems are integrated at the structural level, pushing validation down to the contact point.", application: "Validate thermal and sealing for ruggedized mobile computers at the same contact points — ports, latches, cooling paths.", evidence: ["Ferrari F80", "Red Bull RB22", "Tesla Model Y", "BRABUS BODO"] }
  ],
  ai: [
    { keyword: "Visible, Shared Sensing State", statement: "Sensing and recording state has to be unmistakable to the wearer — and to the people around them.", application: "Mute, listening and capture states need the same bystander-legible treatment on any Zebra wearable with a mic or camera.", evidence: ["Ray-Ban Meta Audio", "Ray-Ban Meta (Gen 3)", "iPhone Duo"] },
    { keyword: "Tactile Fallback Beside Voice & Gesture", statement: "Tactile shortcuts remain the reliable fallback beside voice and gesture control.", application: "Keep a physical button or dial on any voice- or gesture-driven interface for noisy or glove-on environments.", evidence: ["Ray-Ban Meta (Gen 3)", "Meta VR Glasses", "Ray-Ban Meta Audio"] },
    { keyword: "Fit, Hinge & Service Parts", statement: "Fit and contact surfaces are being redesigned as a serviceable, swappable system rather than one fixed shape.", application: "Design swappable straps, pads and hinge adjustments as first-class service parts.", evidence: ["Meta VR Glasses", "Ray-Ban Meta (Gen 3)", "Ray-Ban Meta Audio", "iPhone Duo"] },
    { keyword: "Compute Moves Off the Primary Surface", statement: "Power and compute budgets are becoming an explicit, designed workflow state instead of a background spec.", application: "Offload battery and processing to a belt pack or cradle rather than the head- or hand-worn unit.", evidence: ["Meta VR Glasses", "iPhone Duo"] },
    { keyword: "One Platform, Many Physical Forms", statement: "A shared sensing and compute platform now ships in several fit- and task-matched physical forms.", application: "Share one compute-and-sensing core across a family of wrist, ring and headset form factors fitted to different roles.", evidence: ["Ray-Ban Meta (Gen 3)", "Ray-Ban Meta Audio"] }
  ],
  wearables: [
    { keyword: "Two Solar Surfaces, Two Charging Moments", statement: "Two solar collection surfaces split \"worn\" from \"set aside\" charging into two deliberately different moments.", application: "A dual-surface or dock-plus-body charging path can replace a single charging contact point.", evidence: ["Amazfit T-Rex Dual Solar"] },
    { keyword: "Power Scarcity as a Named Workflow State", statement: "Running low on power becomes a named workflow state, not a failure the product tries to hide.", application: "A defined \"recoverable minimum\" mode can preserve scan confirmation and location before a device goes fully dark.", evidence: ["Amazfit T-Rex Dual Solar"] },
    { keyword: "Glanceable, Rugged Identity Over Screen Time", statement: "A rugged visual grammar is built for fast status checks, not extended screen time.", application: "High-contrast, quick-glance status states should be validated under glare, gloves and motion, with detail offloaded to a companion app.", evidence: ["Amazfit T-Rex Dual Solar"] },
    { keyword: "Replaceable Wear Parts as a Visible Feature", statement: "Serviceability is shown as a product feature in its own right, not hidden as a repair afterthought.", application: "Design pads, straps and batteries around simple maintenance intervals with accessible fastening and clear part identification for shared, fleet-managed wearables.", evidence: ["Logitech Zone Vibe Pro"] },
    { keyword: "Connection State Has to Be Understandable", statement: "Multi-device pairing and mode switching need host-side and device-side feedback a wearer can actually read, not just functional connectivity.", application: "Make receiver, Bluetooth and call/scan status understandable at a glance and by touch, with a recovery path when pairing or authorization fails.", evidence: ["Logitech Zone Vibe Pro"] }
  ],
  robotics: [
    { keyword: "Credentialed Access", statement: "Robots are gaining managed digital identity so they can pass through existing secured infrastructure instead of replacing it.", application: "Give autonomous mobile robots the same managed, revocable digital identity to move through badge-controlled doors, gates and elevators.", evidence: ["ANYmal Door Access"] },
    { keyword: "Legible Authorization", statement: "Authorization and approach state must be visible at the point of action, with an explicit path when access is denied.", application: "Use the same request/grant/deny/fallback states at every robot-operated threshold, with a human-escalation path.", evidence: ["ANYmal Door Access"] },
    { keyword: "Zone-Matched Sensing", statement: "Contact and perceptual sensing resolution is matched to the zone — fingertip precision where it matters, coarser coverage everywhere else.", application: "Design scan-confirmation feedback like fingertip haptics — distinguishing a clean read, a low-confidence read and a required retry.", evidence: ["Sharpa D01 · W02 · AE01", "ANYmal Door Access"] },
    { keyword: "Haptics Explain the Task", statement: "Haptic feedback is being designed to communicate a task state — success, uncertainty, retry — not just confirm contact happened.", application: "Design vibration patterns around task state, not a single undifferentiated buzz.", evidence: ["Sharpa D01 · W02 · AE01"] },
    { keyword: "Shrinking Envelopes", statement: "Robot hardware keeps shrinking generation over generation while staying matched to human hands and tools.", application: "Show the previous generation as an explicit size reference for any next-generation wearable or cobot accessory.", evidence: ["Sharpa D01 · W02 · AE01", "ANYmal Door Access"] }
  ],
  industrial: [
    { keyword: "Gloved Interaction First", statement: "Gloved, physical interaction stays the primary interface across handling, carrying and work-surface states.", application: "Keep dedicated hardware buttons for scan, acknowledge and recovery actions, validated with representative gloves.", evidence: ["Panasonic TOUGHBOOK 34"] },
    { keyword: "Modular + Unmistakable States", statement: "Durable core structure is separated from modular interface zones, and every attachment state is made mechanically and visually unmistakable.", application: "Define service bays with explicit access tools, and pair every dock/cradle state with a confirming visual or tactile cue.", evidence: ["Panasonic TOUGHBOOK 34"] },
    { keyword: "Legacy + Protection as Identity", statement: "Legacy compatibility and rugged identity are both expressed through genuine structure, not decoration.", application: "Protect fleet investment when introducing new connector standards, and express durability through genuine structural cues.", evidence: ["Panasonic TOUGHBOOK 34"] }
  ],
  sports: [
    { keyword: "One Family, Task-Matched Variants", statement: "A single footwear family splits into variants matched to the rider's actual task, not cosmetic tiering.", application: "A shared base accessory with task-specific variants can replace a one-size-fits-all wearable mount.", evidence: ["adidas FREERIDER 2027"] },
    { keyword: "Reachable Micro-Adjustment Mid-Task", statement: "Micro-adjustment is placed where a rider can actually reach it mid-task, with the resulting range made measurable.", application: "Quick-adjust dials or buckles should be tested with gloves, mid-task, with the usable range documented.", evidence: ["adidas FREERIDER 2027"] },
    { keyword: "Friction & Impact Zones, Engineered Separately", statement: "Friction and impact zones are engineered as separate systems rather than one uniform surface.", application: "Map grip, impact and attachment zones independently on any wearable mount, with inspectable, cleanable wear surfaces.", evidence: ["adidas FREERIDER 2027"] }
  ],
  mobile: [
    { keyword: "AI Output Stays Inspectable Beside the Source", statement: "Automated suggestions are kept reviewable by staying visually next to the material they summarize, rather than replacing it.", application: "Show source text beside generated summaries before a Zebra worker accepts a field decision, and flag uncertain content rather than presenting it as fact.", evidence: ["Galaxy Tab S12 Ultra"] },
    { keyword: "Attachment Changes Posture, and Becomes a New Wear Point", statement: "A keyboard or cover attachment converts a held device into a propped work station, while its hinge or contact line becomes a new wear and cleaning point.", application: "Treat dock, cover and keyboard attachments as their own tested state — covering stability, gloved handling and the contact line's resistance to debris.", evidence: ["Galaxy Tab S12 Ultra", "Kindle 2026 Family"] },
    { keyword: "Vulnerable Controls Move Away from the Resting Hand", statement: "A frequently mis-pressed control is relocated away from where the support hand naturally rests, and edge controls are gathered into one reachable zone.", application: "Test power, trigger and recovery key placement against common one-handed and gloved grips before freezing a Zebra handheld's control layout.", evidence: ["Kindle 2026 Family", "Galaxy Tab S12 Ultra"] },
    { keyword: "Material and Tier Signaling Without Touching Legibility", statement: "Finish and color differentiate product tiers while the core reading or working surface stays visually neutral.", application: "Use finish and color to identify a device's role or durability tier without weakening screen legibility or status-color meaning.", evidence: ["Kindle 2026 Family"] }
  ]
};
