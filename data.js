// Trend Dashboard V4 Test data model. (Copied from V3; the header said V3 until now, which is
// misleading while both sites are served side by side for comparison.)
// Folder convention: weeks/<W##>/... for weekly-bundled reports, singles/... for standalone reports.
// report.file is ROOT-RELATIVE (resolved against the site root, used by report-viewer.html as an iframe src).

const PERIOD_LABEL = "2026-09-21 – 2026-11-01";

// V4 TEST — homepage synthesis narrative tying the current Top Signals together into one
// throughline, instead of leaving three independent cards for the reader to connect themselves.
// Rewrite this each sync to reflect whatever the actual current Top 3 are.
// V4 TEST — now structured so the narrative claim is backed by a real number, not just prose.
// `tension` splits the current Top Signals into the two sides of the throughline's argument;
// the evidence-count bar rendered from it is computed live, not hand-typed, so it can't drift
// out of sync with the actual TOP_SIGNALS data the way a hand-typed stat could.
const PERIOD_NARRATIVE = {
  thesis: "This period, every category is solving the same problem: proving system state exactly when someone needs to rely on it.",
  detail: "Where a physical control survives a screen-first redesign, it is being spent on declaring the operating mode — Sigma's STILL/CINE switch, Ferrari's drive-mode rotary, Jetta's one remaining dial. W44 pushes that one step further: Turtle Beach's modules physically flip, so the mechanism's own shape declares the mode and no control is involved at all. Light is moving the same direction, from identity signature into a state channel on drones, AMRs and storage hatches. Sensing and autonomous hardware reaches the same goal by another route: a removed lens, a physical cover, a credential check. The mechanism differs; the problem being solved doesn't.",
  tension: [
    { label: "State declared by hardware", signals: ["Mode Is Declared by Changing Shape", "The Surviving Button Declares Mode", "Light Became a State Channel"] },
    { label: "State declared by the system", signals: ["Visible Sensing State", "Credentialed, Legible Autonomy"] }
  ]
};

// V4 TEST — prescriptive synthesis layer, distinct from TOP_SIGNALS (which describe what's
// happening). This answers "what should Zebra actually do about it", ranked by urgency rather
// than evidence count. Hand-authored per sync, same discipline as a Key Takeaway: re-read this
// each time TOP_SIGNALS changes and confirm the ranking/rationale still holds.
// urgency: "now" (broad, validated pattern — act this cycle) | "next" (solid but narrower —
// plan for the next cycle) | "watch" (early, 2-3 data points — prototype/monitor only).
//
// ===== THE ZEBRA BASELINE GATE =================================================================
// A priority used to be derived from the report corpus alone. That is only half the job, and it
// produced three items that Zebra had already shipped: "give every handheld a physical control"
// (the TC53 has six remappable keys and a gun-style trigger handle), "give accessories a legible
// state cue" (the DS3600's LEDs wrap the housing specifically so they read from any angle), and a
// third that merely restated the first. A recommendation that describes the current product is
// not a recommendation.
//
// So every entry now has to clear a second gate, and carries the evidence that it did:
//   `zebraBaseline.ships` — what Zebra ALREADY does in this area, checked on zebra.com, not from
//                           memory. Assume Zebra has already solved the obvious version.
//   `zebraBaseline.source` — the zebra.com page that says so, so the claim is auditable.
//   `zebraBaseline.gap`   — the specific thing that is still missing once `ships` is accounted
//                           for. This, not the trend, is what the title must argue for.
// If no gap survives, the priority is DROPPED rather than reworded. That is the normal outcome
// for most candidates and it is not a failure — see the note under `droppedCandidates` below.
// Re-run the check each sync: Zebra ships product, so a real gap can close between periods.
// ==============================================================================================
// `image` is a MECHANISM shot pulled from the body of one of the cited reports (not that report's
// cover hero, which is a product beauty shot chosen to represent a whole report and can't evidence
// a claim about a specific control). Each one is picked so the photo literally shows the thing the
// title argues for. Candidates come from the figures in weeks/**/*.html + singles/*.html, which
// already carry an alt/tag/h3 describing the mechanism — re-harvest those when the priorities
// change. If `image` is absent the renderer falls back to deriving a hero from the evidence set.
const ZEBRA_PRIORITIES = [
  {
    title: "Bind the active capture profile to the application LED these devices already ship",
    urgency: "now",
    rationale: "Zebra is not short of controls — six remappable keys on the TC53, six more behind the VC8300's Blue modifier, four on the WS50. They are all momentary, so none of them declares anything. Mode itself lives in a DataWedge profile that switches per app with no indicator at all. The unassigned application LED is the cheapest surface to put it on.",
    relatedSignals: ["The Surviving Button Declares Mode", "Light Became a State Channel"],
    zebraBaseline: {
      ships: "Dual dedicated scan buttons, a dedicated PTT key and a remappable key map on TC53/TC58; six programmable keys doubled by the Blue modifier on VC8300-10; four programmable buttons on WS50; a gun-style Trigger Handle accessory.",
      source: "https://www.zebra.com/us/en/products/spec-sheets/mobile-computers/handheld/tc53-tc58.html",
      gap: "Every one of those controls is momentary, and mode lives in DataWedge profiles that switch per-app. Zebra ships no built-in indicator of the active profile — it is only obtainable through a Get Active Profile intent, which Zebra's own developer blog warns returns the wrong answer unless called from a foreground service. The worker cannot see which profile is live. The hardware to show it is already fitted and unassigned: VC8300's blue application-programmable LED, WS50's two multi-colour application LEDs."
    },
    // Signode AMR · "Color becomes a configurable safety signal" — an illuminated state band on
    // an AMR in a real warehouse aisle: the mechanism this priority asks for, on the closest
    // analogue to Zebra's own floor. Three rejected alternates: "Light and sound cover blind
    // sides" is the same report's cover hero, so it would collide with the Top Signal card above;
    // Antigravity's "A Blue LED Does the Talking" is the purest illustration but is a
    // white-background cutout the hero rule excludes; Tesla's "Tie light cues to state" reads as
    // a car reveal rather than work equipment.
    image: "https://www.signode.com/Signode/media/Signode/Automation/Application-by-Forklift.png"
  },
  {
    title: "Make capture state legible to the person in frame, not just the operator",
    urgency: "next",
    rationale: "Zebra over-delivers here already — but every cue it ships faces the operator, confirming to whoever holds the device that the read worked. Ray-Ban Meta's capture LED exists for the other person. Fixed scanners and machine-vision cameras now sit in shared workspaces, and nothing in that line indicates anything to the people in front of them.",
    relatedSignals: ["Visible Sensing State", "Concealed Systems, Legible at the Point of Use"],
    zebraBaseline: {
      ships: "DS3600 LEDs wrap the housing so they read from any position, plus beeper and vibration; CS60 adds a good-decode LED, adjustable tone, haptics and a Direct Decode Indicator projected onto the barcode itself; FS40 carries 360° decode-status lights.",
      source: "https://www.zebra.com/us/en/products/spec-sheets/scanners/ultra-rugged-scanners/ds36x8-hp.html",
      gap: "All of it is operator feedback — it answers \"did my scan work\", aimed at the hand holding the device. None of it answers \"is this thing capturing me\" for the person on the other side of the lens, which is the job Ray-Ban Meta's capture LED and Ring's indicators are built to do. The exposure is growing on its own: Zebra's FS40/FS70/FS80 scanners and CV60/CV70 and VS40/VS70 cameras are fixed installations in shared workspaces, where there is no operator present to read an operator-facing cue."
    },
    // Ray-Ban Meta Gen 3 · "Camera and signal share the front" — the capture indicator module
    // itself, aimed outward at the subject rather than back at the wearer.
    image: "https://cdn.mos.cms.futurecdn.net/CKfFyaXRjUXvbfG8nEpFJA-1200-80.jpg"
  }
];

// Candidates that this period's signals supported but that did NOT clear the baseline gate.
// Published rather than deleted, because "we checked and Zebra already does this" is a real
// finding, and because silently dropping to two items would otherwise look like thin research.
// Rendered under the focus list so the reader can see what was considered and rejected.
const DROPPED_PRIORITIES = [
  {
    title: "Prototype a handheld whose existing switch or grip replaces menu-based mode switching",
    reason: "A near-duplicate of the first item above, and the shipped half is already done: the TC53's Trigger Handle, the MC9400's trigger plus keypad scan button and the WS50's trigger all put capture on an existing physical element. What was actually missing is mode visibility, which the first item now covers directly."
  },
  {
    title: "Give fixed scanners and machine-vision cameras a light channel that reports state to the floor",
    reason: "Already shipped. The FS40 carries 360° LED lights that show decode status plus five camera status LEDs, and the FS80 has Power, User, Status and Ethernet LEDs with a 360° status option.",
    source: "https://www.zebra.com/content/dam/zebra_dam/en/spec-sheets/fs40-spec-sheet-en-us.pdf"
  },
  {
    title: "Use light to make one device findable and identifiable across a shared floor",
    reason: "Already shipped in software. Device Tracker plays a customisable chirp on the lost device and can alert nearby devices by audio, vibration or LED, with blue as the default; Bluetooth scanners get separate beep and LED find options.",
    source: "https://techdocs.zebra.com/devicetracker/latest/guide/use/"
  },
  {
    title: "Give autonomous equipment a legible authority/credential state",
    reason: "Dropped as unverified rather than disproven. The Fetch Freight100 base already advertises at-a-glance Wi-Fi, battery, run-stop and Fetch Core status lights; whether any of them expresses operating authority is not documented publicly, and the signal behind it rests on only three reports. Re-check when the AMR line's own documentation is to hand."
  }
];

const DOMAINS = [
  { id: "automotive", name: "Automotive & Mobility", accent: "#D40000", // Ferrari red
    blurb: "Sixteen 2026 launches — from Ferrari's first EV to six Stellantis concept cars, Renault, Alpine and Tesla's Paris Motor Show reveals, Jetta's first EV sedan and Toyota's five tracked Snowhunter concepts at SEMA — converge on keeping tactile, locatable controls legible in digital cabins, while Citroën, FIAT and Toyota mark repair, reconfiguration and dirty-versus-clean boundaries right on the body, and both Jetta's three-trim platform and Toyota's five-vehicle equipment language show one system can scale across a whole range.",
    application: "Physical controls survive even as automotive cabins go fully digital. Ferrari, Tesla, BRABUS, Red Bull and the Alfa Romeo, Peugeot and DS concepts all keep real, distinctly shaped buttons and dials for the actions that matter most, while Renault, Alpine and the Roadster extend the same discipline to cabin layout, repeated identity cues and concealed active systems. Citroën's 2 CV Concept, FIAT Multiplay and Toyota's Snowhunter family mark a separate thread: repair, reconfiguration and dirty-versus-clean boundaries are declared right on the body instead of hidden inside one shell. Scale is the third thread — Jetta's M6 shows one shell can gate a range in software across three trims, and Snowhunter shows one cargo, protection and access language can carry unchanged across five vehicle sizes. Zebra can apply all three — distinctly shaped, glove-tested physical controls; a visibly separate impact-versus-reconfiguration boundary a gloved hand can read in bad weather; and one chassis and mounting language held consistent across price tiers and across truck, forklift and van installations alike.",
    cardImage: "https://vrrb-prod-s3.s3.us-west-1.amazonaws.com/strapi/Screenshot_2026_04_01_165401_7665b911db.jpg" },
  { id: "ai",         name: "Sensing & Capture Devices", accent: "#81D8D0", // Tiffany blue
    blurb: "Ray-Ban's audio and capture-enabled glasses, Meta's VR headset, Ring's camera family, XREAL's spatial displays and AURA eyewear, and Sony's wireless mic kit all treat sensing state, fit and point-of-use confirmation as explicit design problems — and increasingly treat the cable to an off-body compute pack as product architecture rather than a compromise.",
    application: "Sensing state has to be unmistakable to the wearer and everyone nearby. Ray-Ban Meta's camera lines and Ring's camera family pair a physical capture cue with swappable fit parts, while XREAL and Sony show that fit calibration and point-of-use state confirmation matter just as much. AURA adds a fourth thread: once compute, battery and heat move to a waistband puck, the lead between them is published as a standard, user-replaceable USB-C part rather than a captive assembly. Zebra can apply the same unmistakable sensing indicator, tactile fallback and visible state confirmation to its worker-worn hardware — and make the most-flexed cable in any tethered system a stock line it can replace on site instead of a warranty event.",
    cardImage: "https://images.ctfassets.net/a3peezndovsu/54lfzLXdIk48j3MEALH8Vy/50d100a828eef652c87f8cf33c49f360/ring_pan-tilt_indoor_cam_2K_lifestyle_atf_1500x1500_03.jpg?w=1100&q=80" },
  { id: "wearables",  name: "Wearable Devices",       accent: "#8B5CF6", // purple
    blurb: "Amazfit's dual-solar watch, Logitech's Zone Vibe Pro headset and Antigravity's Watch and Ring Remotes treat power recovery, serviceable wear parts and gesture-control fallback as visible, deliberate product features.",
    application: "Running low on power should be visible, not a hidden failure. Amazfit's dual-solar charging and Logitech's swappable pads and batteries both treat power and service as product features, while Logitech's own pairing and mode-switching feedback shows connection state needs to be just as readable as battery state. Antigravity's Watch and Ring Remotes add a third thread: wearable gesture control still keeps a manual hardware button in reserve. Zebra can give its scanners and headsets the same glanceable low-power and connection state, fast-service parts, and a gesture-independent hardware fallback.",
    cardImage: "https://us.amazfit.com/cdn/shop/files/T-Rex_Dual_Solar__Lifestyle_15.jpg?v=1789715426&width=3840" },
  { id: "robotics",   name: "Robotics",               accent: "#38BDF8", // sky blue
    blurb: "ANYmal's credentialed door access, Sharpa's haptic manipulation stack, Skydio's docked F10 drone and Signode's five-class AMR portfolio expansion all turn autonomy into something legible and correctable, not just capable.",
    application: "Autonomy earns trust through visible, correctable state, not just capability. ANYmal's credentialed door access and Skydio's dock-managed fleet readiness make robot behavior legible before it acts, Sharpa's haptic manipulation stack extends that same legibility into touch — distinguishing a clean grasp, a low-confidence read and a required retry — and Signode's AMR portfolio carries it across an entire fleet with one repeated status-light language. Zebra's mobile robots and handhelds can apply the same request/grant/deny logic, task-distinguishing haptic feedback, inspectable dock status, and one shared status language across every vehicle class.",
    cardImage: "https://assets.newatlas.com/dims4/default/5b61d73/2147483647/strip/true/crop/6629x3480+0+469/resize/1200x630!/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2F85%2Fc9%2Fd8d7d55441838b767a3d41fc73b9%2Fanymal-autonomous-inspection-power-grid.jpg" },
  { id: "industrial", name: "Rugged Devices",     accent: "#b9ff43", // unchanged
    blurb: "Panasonic's TOUGHBOOK 34 keeps gloved, physical interaction central to rugged field computing, separates structure from serviceable interface zones, and expresses both legacy compatibility and rugged durability through genuine structure rather than decoration.",
    application: "Gloved, physical interaction still belongs at the center of rugged computing. The TOUGHBOOK 34 validates hardware buttons with real gloves, exposes a defined service bay instead of hidden disassembly, and protects existing accessory and connector investments even as it adopts new standards. Zebra can apply the same dedicated buttons, explicit service access, and genuine structural (not decorative) expression of both legacy compatibility and durability to its next rugged tablet.",
    cardImage: "https://cdn.mos.cms.futurecdn.net/xFyyTAsRTt2BeMc8uKE4nB-1200-80.jpg" },
  { id: "sports",     name: "Sports Industry",        accent: "#F76900", // Nike orange
    blurb: "adidas' FREERIDER 2027 splits one footwear family into task-matched variants with micro-adjustable, inspectable wear zones.",
    application: "One hardware family can still be matched to the task at hand. adidas' FREERIDER 2027 splits one shoe family into task-specific variants with reachable, glove-tested adjustment, and engineers its grip, impact and attachment zones as separate, inspectable surfaces rather than one uniform shell. Zebra can apply the same shared base and quick-adjust design, with independently mapped, cleanable wear zones, to its wearable-scanner mounts.",
    cardImage: "https://cdn.road.cc/wp-content/uploads/2026/09/Adidas-Freerider-Whistler.jpg" },
  { id: "mobile",     name: "Mobile & Handheld Devices", accent: "#FFD60A", // gold
    blurb: "Samsung's Galaxy Tab, Amazon's Kindle and Alexa Tablets, Apple's foldable iPhone Duo, and OPPO's Find X10 Series with its factory Tilta Khronos rig all treat attachment, hinge and control placement as explicit, testable — and increasingly officially supported — decisions on a familiar handheld device, while Apple's hand-held iPad mini beside its touch MacBook Pro and Turtle Beach's flip-over stick modules push the same thinking further, letting the device's own shape and posture declare which input mode is live.",
    application: "Attachments and controls deserve their own tested state, not an assumption. Galaxy Tab, Kindle and the Alexa Tablets all treat a keyboard attachment or control placement as a deliberate design decision, the iPhone Duo's self-locking hinge turns a fold into its own hands-free standing mode, and OPPO's own factory-built Khronos rig shows a device maker can own that modularity directly instead of leaving it to third parties. Mode is the newer question: Turtle Beach's modules physically flip, so the active thumb-input mode reads off the controller's outline rather than out of a setting, and Apple designs the same direct touch for two different postures — tablet in one hand, laptop open on a desk — with a different set of controls surviving in each. Zebra can validate the same attachment stability and glove-tested control layout, apply a self-locking hinge or kickstand for hands-free scanning postures, consider an official rigging accessory for specialized field tasks, and treat a handheld's in-hand and docked postures as two separate design targets rather than assuming one inherits the other.",
    cardImage: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/P1011550.jpg?w=800" },
  { id: "consumer",   name: "Consumer Electronics", accent: "#14B8A6", // teal
    blurb: "Logitech's Rally Bar 2 and Rally System 2 Pro turn room hardware into serviceable, managed modules with status visible before anyone walks in; Apple's HomeView extends shared-screen logic into the home; Sigma's fp2 and Teenage Engineering's EP-35 show a physical switch or handle can replace menu depth as the primary interface; and Sony's ELF-MN1 and Fujifilm's instax mini Evo 2 add two newer moves — publishing an optical envelope as a hard dimension, and placing a deliberate preview between capture and an irreversible print.",
    application: "Consumer electronics increasingly treat one physical element as the whole interface. They also increasingly surface room status before someone has to walk in to check it — Rally Bar 2's pivoting mount exposes service access, Rally System 2 Pro's modular components support central management while its own distance-readable availability signal is visible before someone commits to entering, HomeView adapts a shared screen to who's approaching, and Sigma's STILL/CINE switch and Teenage Engineering's carry handle turn an existing control into the main interface instead of adding menus. Two further threads arrive with the ELF-MN1 and the instax mini Evo 2: Sony publishes its usable viewing distance, angle and ambient-light range as hard numbers and derives the cradle angle and body size from them, and Fujifilm puts a preview step between capture and the irreversible act of spending film. Zebra can apply the same swing-access mount, modular configuration, outside-the-room availability signal, identity-aware interface, and dedicated-switch-over-menu logic across its kiosks, terminals and handhelds — then publish a viewing envelope for every mounted display the way it publishes a drop rating, and put an explicit review step in front of anything a worker cannot undo.",
    cardImage: "https://resource.logitech.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/rally-bar-2/rally-bar2-video-bar-install-minutes-desktop-2.jpg?v=1" }
];

const WEEKS = [
  {
    id: "W44", year: 2026, label: "W44", dateRange: "26 Oct – 1 Nov 2026",
    indexFile: "weeks/W44/index.html",
    zipName: "Weekly_Design_Trend_Report_2026-W44_2026-10-26_to_2026-11-01.zip",
    reports: [
      { title: "Apple iPad mini and MacBook Pro", date: "2026-10-28", domain: "mobile",
        blurb: "The hand-held iPad and the touch-enabled MacBook Pro expose two different physical postures for the same direct input, and the controls that survive in each.",
        hero: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/268836_iPad_Mini_OLED_handson_ADiBenedetto_0012.jpg?quality=90&strip=all",
        file: "weeks/W44/apple-ipad-mini-macbook-pro.html",
        tags: ["mobile","tablet","laptop","touch","handheld","posture","apple","direct input"] },
      { title: "Sony ELF-MN1", date: "2026-10-28", domain: "consumer",
        blurb: "A six-inch glasses-free spatial display turns a 3D object into a compact, single-viewer desk tool, with the optical envelope published as a dimension.",
        hero: "https://sony.scene7.com/is/image/sonyglobalsolutions/original_ELF-MN1_005?$jpMediumStaticMainImage$",
        file: "weeks/W44/sony-elf-mn1.html",
        tags: ["consumer electronics","display","spatial","glasses-free 3d","eye tracking","desk object","sony"] },
      { title: "XREAL AURA", date: "2026-10-28", domain: "ai",
        blurb: "A light optical display and a separate compute puck move spatial work off the face, with the cable between them published as part of the product.",
        hero: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ManinOffice_V2.width-1300.png",
        file: "weeks/W44/xreal-aura.html",
        tags: ["ai device","wearable","smart glasses","spatial computing","android xr","tethered compute","xreal"] },
      { title: "Toyota Snowhunter Concept Family", date: "2026-10-27", domain: "automotive",
        blurb: "Five tracked SEMA concepts carry one winter-expedition equipment language across different vehicle sizes, organising cargo, protection and access the same way on each.",
        hero: "https://i0.wp.com/gearheaddaily.com/wp-content/uploads/2026/10/toyota-snowhunter-concept-sema-2026-tundra-tacoma-4runner-gallery-43.jpg",
        file: "weeks/W44/toyota-snowhunter.html",
        tags: ["automotive","concept car","sema","tracked vehicle","modular cargo","equipment language","toyota"] },
      { title: "instax mini Evo 2", date: "2026-10-27", domain: "consumer",
        blurb: "A hybrid instant camera puts a preview step between capture and print, so committing film becomes its own deliberate, visible action.",
        hero: "https://asset.fujifilm.com/www/py/files/2026-10/b233641728c6fac08fb1a9232b216fd9/news_14132_06_en.jpg",
        file: "weeks/W44/instax-mini-evo-2.html",
        tags: ["consumer electronics","camera","instant print","hybrid","tactile dial","preview","fujifilm"] },
      { title: "Turtle Beach Stealth Flip Wireless Controller", date: "2026-10-27", domain: "mobile",
        blurb: "A mechanical flip turns stick modules into capacitive touchpads, making the active thumb-input mode readable from the shape of the controller itself.",
        hero: "https://cdn.shopify.com/s/files/1/0556/5795/5430/files/1_Stealth_Flip_Wireless_Controller_2400x1350-DTC_LOGO_1.png?v=1790958290",
        file: "weeks/W44/turtle-beach-stealth-flip.html",
        tags: ["handheld","controller","input","touchpad","reconfigurable","thumb control","turtle beach"] }
    ]
  },
  {
    id: "W43", year: 2026, label: "W43", dateRange: "19 – 25 Oct 2026",
    indexFile: "weeks/W43/index.html",
    zipName: "Weekly_Design_Trend_Report_2026-W43_2026-10-19_to_10-25.zip",
    reports: [
      { title: "Sigma fp2", date: "2026-10-23", domain: "consumer",
        blurb: "A physical STILL/CINE switch, a dedicated Color button and 1/4-20 mounts across the chassis replace menu depth with choices a thumb can find without looking.",
        hero: "https://petapixel.com/assets/uploads/2026/10/11_PPhoto_FP_Beauty_Top_50mm_F2_Black_4000px_ecom-800x600.jpg",
        file: "weeks/W43/01_Sigma_fp2.html",
        tags: ["camera","consumer electronics","modular","physical switch","sigma","full-frame"] },
      { title: "Antigravity A1 Follow Me Bundle", date: "2026-10-20", domain: "wearables",
        blurb: "A 44.7g touchscreen watch and an 8.2g single-button ring replace goggles and a joystick, wagering that gesture control plus GNSS tracking can out-simplify a traditional controller.",
        hero: "https://cdn.dronexl.co/wp-content/uploads/2026/10/antigravity-a1-follow-me-bundle-cyclist-watch-ring-remote.webp",
        file: "weeks/W43/02_Antigravity_A1_Follow_Me.html",
        tags: ["drone","wearable","gesture control","wrist remote","antigravity","hardware fallback"] },
      { title: "Teenage Engineering EP-35", date: "2026-10-22", domain: "consumer",
        blurb: "A carry handle houses every input and becomes the entire control surface, while a rear storage hatch lights itself the moment it opens.",
        hero: "https://assets.teenage.engineering/_img/6ada1e46982c0e6e3c49faf7_4096.webp",
        file: "weeks/W43/03_TE_EP-35.html",
        tags: ["audio","consumer electronics","industrial design","modular","teenage engineering","amplifier"] },
      { title: "Signode AMR Portfolio", date: "2026-10-22", domain: "robotics",
        blurb: "Five new AMR vehicle classes join Signode's lineup, sharing one navigation, docking and blue-LED status language across a shared-aisle warehouse floor.",
        hero: "https://spnews.com/downloads/11387/download/Untitled-4.png?cb=561e960248a96d8f011aeefe5308fd53",
        file: "weeks/W43/04_Signode_AMR_Portfolio.html",
        tags: ["robotics","amr","warehouse automation","fleet","signode","safety"] },
      { title: "Jetta M6", date: "2026-10-22", domain: "automotive",
        blurb: "FAW-Volkswagen's first battery-electric sedan pairs a \"Bamboo Aesthetics\" surface language with one shared body shell and a dual-screen cockpit, split across three trims.",
        hero: "https://cnevpost.com/wp-content/uploads/2026/10/2026102210152997.jpg",
        file: "weeks/W43/05_VW_Jetta_M6.html",
        tags: ["automotive","car","ev","electric vehicle","volkswagen","jetta","shared platform"] },
      { title: "OPPO Find X10 Series", date: "2026-10-21", domain: "mobile",
        blurb: "A Hasselblad-engineered triple-200MP camera system and a factory-built Tilta Khronos creator rig turn the phone into two different products depending on which accessories are attached.",
        hero: "https://www.oppo.com/content/dam/oppo_com/oppo/product-asset-library/find-x/find-x10-series-en/find-x10-pro-max/en/white-gray/v1/assets/eye-care-en-characters-bg.jpg.avif",
        file: "weeks/W43/06_OPPO_Find_X10_Series.html",
        tags: ["mobile","smartphone","camera","oppo","hasselblad","modular accessory"] }
    ]
  },
  {
    id: "W42", year: 2026, label: "W42", dateRange: "12 – 18 Oct 2026",
    indexFile: "weeks/W42/index.html",
    zipName: "Weekly_Design_Trend_Report_2026-W42_2026-10-12_to_10-18.zip",
    reports: [
      { title: "XREAL 1 Pro+", date: "2026-10-18", domain: "ai",
        blurb: "A targeted refresh connects optical performance to physical fit: the virtual screen becomes useful only when the product stays aligned, comfortable and understandable throughout a session.",
        hero: "https://mmx.prnewswire.com/media/MS2014604/XREAL-Product-Image.jpg?id=OA3022510&p=medium",
        file: "weeks/W42/01_XREAL_1_Pro_Plus.html",
        tags: ["wearable","ai","ai device","spatial display","smart glasses","xreal","fit"] },
      { title: "Apple HomeView", date: "2026-10-18", domain: "consumer",
        blurb: "HomeView brings a shared screen, spatial placement and personal context into one product, exposing the right information to only the right person.",
        hero: "https://www.apple.com/newsroom/images/2026/10/meet-apple-homeview-a-new-way-to-enjoy-entertainment-and-manage-the-home/article/Apple-HomeView-FaceTime-Center-Stage-261013_big.jpg.large.jpg",
        file: "weeks/W42/02_Apple_HomeView.html",
        tags: ["smart home","shared display","consumer electronics","identity","apple","proximity"] },
      { title: "Sony ECM-W5", date: "2026-10-18", domain: "ai",
        blurb: "ECM-W5 treats microphones, receiver, charging case and camera connection as one capture workflow, with automatic readiness and an intelligible recovery path when wireless recording becomes uncertain.",
        hero: "https://d1ncau8tqf99kp.cloudfront.net/PDP/DI/Accessories/ECM-W5/desktop/hero.jpg",
        file: "weeks/W42/03_Sony_ECM_W5.html",
        tags: ["audio","ai device","wireless microphone","modular","sony","capture"] },
      { title: "Renault E-Space Concept", date: "2026-10-18", domain: "automotive",
        blurb: "E-Space begins with the people and activities inside the cabin: reconfigurable seats, separated display and input zones, and a visually light enclosure make spatial organization the central proposition.",
        hero: "https://media.renault.com/wp-content/uploads/2026/10/64d08e9acf342f2c2d326fb7f8189df2-l.jpg.webp",
        file: "weeks/W42/04_Renault_E_Space_Concept.html",
        tags: ["automotive","car","concept car","ev","electric vehicle","renault","modular interior"] },
      { title: "Alpine A310 VISION", date: "2026-10-18", domain: "automotive",
        blurb: "Alpine reinterprets the A310 through geometry, layered surfaces and an architectural centerline, carrying recognizable identity into new construction possibilities.",
        hero: "https://media.alpinecars.com/wp-content/uploads/2026/10/b00e6ee15e01bd060e8ac0d8a64119f5-l.jpg.webp",
        file: "weeks/W42/05_Alpine_A310_VISION.html",
        tags: ["automotive","car","concept car","ev","electric vehicle","alpine","heritage design"] },
      { title: "Tesla Roadster", date: "2026-10-18", domain: "automotive",
        blurb: "The redesigned Roadster combines a restrained outer envelope with increasingly complex active systems, explaining capability, operating state and configuration boundaries as modes multiply.",
        hero: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-04-World-Desktop.jpg",
        file: "weeks/W42/06_Tesla_Roadster_2026.html",
        tags: ["automotive","car","active aerodynamics","ev","electric vehicle","tesla","concealed systems"] }
    ]
  },
  {
    id: "W41", year: 2026, label: "W41", dateRange: "5 – 11 Oct 2026",
    indexFile: "weeks/W41/index.html",
    zipName: "Weekly_Design_Trend_Report_2026-W41_2026-10-05_to_10-11.zip",
    reports: [
      { title: "Amazon Alexa Tablets", date: "2026-10-11", domain: "mobile",
        blurb: "A premium aluminum tablet family makes reading, touch, pen and voice feel like deliberate modes of one portable work surface.",
        hero: "https://media.wired.com/photos/6ac61dacb08b32ac78ec37d0/master/w_1600%2Cc_limit/DSC_9818.jpg",
        file: "weeks/W41/01_Alexa_Tablets.html",
        tags: ["tablet","mobile","handheld","pen","amazon","alexa","android"] },
      { title: "Ring 2026 Camera Family", date: "2026-10-11", domain: "ai",
        blurb: "A camera family distributes imaging across walls, rooms and power conditions without losing a common visual vocabulary.",
        hero: "https://assets.aboutamazon.com/da/01/499bedff40f989fc37e1cece41ad/freya-pr-ring-family-1-2000x1126.jpg",
        file: "weeks/W41/02_Ring_Camera_Family.html",
        tags: ["camera","ai","ai device","sensing","security camera","smart home","ring"] },
      { title: "Logitech Rally Bar 2", date: "2026-10-11", domain: "consumer",
        blurb: "A low-profile meeting bar turns camera, audio, sensing and service access into one managed room component.",
        hero: "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/rally-bar-2/gallery/rally-bar2-video-bar-graphite-gallery1.png?v=1",
        file: "weeks/W41/03_Logitech_Rally_Bar_2.html",
        tags: ["consumer electronics","enterprise","video conferencing","room device","serviceable","logitech","fleet management"] },
      { title: "Logitech Rally System 2 Pro", date: "2026-10-11", domain: "consumer",
        blurb: "A distributed meeting system treats the room as a reconfigurable network of capture, audio and compute modules.",
        hero: "https://resource.logitech.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/business/products/video-conferencing/rally-system-2-pro/rally-system-2-pro-smarter-video-better-audio-key-feature-1.jpg?v=1",
        file: "weeks/W41/04_Logitech_Rally_System_2_Pro.html",
        tags: ["consumer electronics","enterprise","modular","video conferencing","room system","logitech","fleet management"] },
      { title: "Skydio F10 Lightrunner", date: "2026-10-11", domain: "robotics",
        blurb: "A fixed-wing robot combines long-range speed with docked launch and an operator interface designed around exceptions.",
        hero: "https://cdn.sanity.io/images/mgxz50fq/production-v3-red/f1f49fd419a54fb24a2e204b050ddc1ef156f977-1920x1920.png?w=1200&fit=max&fm=jpg",
        file: "weeks/W41/05_Skydio_F10_Lightrunner.html",
        tags: ["robot","robotics","drone","autonomous","aerial robot","ai robot"] }
    ]
  },
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
  { title: "iPhone Duo", date: "2026-10-01", domain: "mobile",
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

const LAUNCH_EVENTS = [
  {
    id: "stellantis-mondial-2026", name: "Stellantis · Mondial de l'Auto 2026 Special Edition", shortName: "Stellantis Mondial 2026",
    dateRange: "11 Oct 2026", eventDate: "2026-10-11",
    indexFile: "launch-events/Stellantis_Mondial_2026/index.html",
    zipName: "Stellantis_Mondial_2026_Six_Full_Reports.zip",
    reports: [
      { title: "Alfa Romeo Cuorerosso", date: "2026-10-11", domain: "automotive",
        blurb: "A driver-centred manifesto that connects sculptural mass, moving instruments and tactile controls.",
        hero: "https://images.autoexpress.co.uk/autoexpress/2026/10/Alfa%20Romeo%20Cuorerosso-9.jpg?w=1260&h=710&fit=crop&q=75&auto=format%2Ccompress&dpr=1",
        file: "launch-events/Stellantis_Mondial_2026/01_Alfa_Romeo_Cuorerosso.html",
        tags: ["automotive","car","concept car","grand tourer","alfa romeo","tactile controls","stellantis"] },
      { title: "Citroën 2 CV Concept", date: "2026-10-11", domain: "automotive",
        blurb: "A small electric concept that turns affordability into a design discipline, with separate impact pieces and portable everyday objects.",
        hero: "https://images.autoexpress.co.uk/autoexpress/2026/10/Citroen%202CV%20Concept-4.jpg?w=1260&h=710&fit=crop&q=75&auto=format%2Ccompress&dpr=1",
        file: "launch-events/Stellantis_Mondial_2026/02_Citroen_2_CV_Concept.html",
        tags: ["automotive","car","concept car","ev","electric vehicle","citroen","affordable","repairable","stellantis"] },
      { title: "DS F3VER", date: "2026-10-11", domain: "automotive",
        blurb: "A compact electric concept where integrated assemblies and dimensional lighting let fewer visible pieces create a stronger identity.",
        hero: "https://images.autoexpress.co.uk/autoexpress/2026/10/DS%20F3VER%20concept.jpg?w=1260&h=710&fit=crop&q=75&auto=format%2Ccompress&dpr=1",
        file: "launch-events/Stellantis_Mondial_2026/03_DS_F3VER.html",
        tags: ["automotive","car","concept car","ev","electric vehicle","ds automobiles","integrated lighting","stellantis"] },
      { title: "FIAT Multiplay", date: "2026-10-11", domain: "automotive",
        blurb: "A family-mobility laboratory that changes configuration as the task changes, combining passenger space with an open load bed.",
        hero: "https://www.stellantis.com/content/dam/stellantis-corporate/news/press-releases/2026/october/11-10-2026/FIAT-Arnaud-Belloni.jpg",
        file: "launch-events/Stellantis_Mondial_2026/04_FIAT_Multiplay.html",
        tags: ["automotive","car","concept car","fiat","modular","configurable","family vehicle","stellantis"] },
      { title: "Opel STX Concept", date: "2026-10-11", domain: "automotive",
        blurb: "An electric estate study that links cargo-friendly volume with a low aerodynamic silhouette and moving rear aero elements.",
        hero: "https://stellantis3.dam-broadcast.com/medias/domain12808/media110639/3191769-ns5x5nf6iu-xlarge.jpg",
        file: "launch-events/Stellantis_Mondial_2026/05_Opel_STX_Concept.html",
        tags: ["automotive","car","concept car","ev","electric vehicle","opel","estate","active aero","stellantis"] },
      { title: "Peugeot RCZ Vision", date: "2026-10-11", domain: "automotive",
        blurb: "An electric GT manifesto connecting a glass-bubble silhouette with selective information and tactile controls.",
        hero: "https://images.autoexpress.co.uk/autoexpress/2026/10/Peugeot%20RCZ%20Vision%202026-3.jpg?w=1260&h=710&fit=crop&q=75&auto=format%2Ccompress&dpr=1",
        file: "launch-events/Stellantis_Mondial_2026/06_Peugeot_RCZ_Vision.html",
        tags: ["automotive","car","concept car","ev","electric vehicle","peugeot","grand tourer","hypersquare","stellantis"] }
    ]
  }
];
// Newest event always sorts first, by the event's own date — independent of array insertion
// order or when reports get added/edited within an event, so this holds even as new events
// (or late-added reports on existing events) are appended to the array above over time.
LAUNCH_EVENTS.sort((a,b) => new Date(b.eventDate) - new Date(a.eventDate));

// Flatten everything into one searchable pool, tagging each with its source.
const ALL_REPORTS = [];
WEEKS.forEach(w => w.reports.forEach(r => ALL_REPORTS.push({ ...r, source: { type: "week", week: w.id, dateRange: w.dateRange, indexFile: w.indexFile } })));
SINGLE_REPORTS.forEach(r => ALL_REPORTS.push({ ...r, source: { type: "single", zip: r.zip } }));
LAUNCH_EVENTS.forEach(ev => ev.reports.forEach(r => ALL_REPORTS.push({ ...r, source: { type: "event", event: ev.id, dateRange: ev.dateRange, indexFile: ev.indexFile } })));
ALL_REPORTS.sort((a,b) => new Date(b.date) - new Date(a.date));

const TOP_SIGNALS = [
  {
    // The escalation of "The Surviving Button Declares Mode" below, not a duplicate of it:
    // there the last surviving control is spent on declaring mode; here the mechanism's own
    // geometry changes, so mode is readable with no control involved at all.
    keyword: "Mode Is Declared by Changing Shape",
    domain: "mobile",
    statement: "The product physically reconfigures, so the live mode is readable across a room.",
    detail: "Turtle Beach's stick modules mechanically flip over into capacitive touchpads, so which thumb-input mode is live is readable from the controller's silhouette rather than from a setting. Apple's touch MacBook Pro and hand-held iPad mini expose two different working postures for the same direct input. XREAL moves the screen off the face entirely, making the wearer's working state legible from outside.",
    evidence: ["Turtle Beach Stealth Flip Wireless Controller", "Apple iPad mini and MacBook Pro", "XREAL AURA"],
    heroOverride: "https://cdn.shopify.com/s/files/1/0556/5795/5430/files/1_Stealth_Flip_Wireless_Controller_2400x1350-DTC_LOGO_1.png?v=1790958290"
  },
  {
    keyword: "The Tether Is Part of the Product",
    domain: "ai",
    statement: "Move compute off the device and the cable gets designed, not hidden.",
    detail: "XREAL frames glasses, cable and compute puck together as one object and makes the lead a standard, user-replaceable USB-C part rather than a captive assembly. Sony routes a single USB-C cord behind a transparent plinth so power and video arrive without a visible harness. Meta's VR Glasses set the pattern a month earlier with a tethered puck.",
    evidence: ["XREAL AURA", "Sony ELF-MN1", "Meta VR Glasses"],
    heroOverride: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ManinOffice_V2.width-1300.png"
  },
  {
    keyword: "The Surviving Button Declares Mode",
    domain: "automotive",
    statement: "Where one physical control survives a screen-first redesign, it is the one that declares which mode the product is in.",
    detail: "Sigma's STILL/CINE switch, Ferrari's drive-mode rotary and Jetta's single remaining dial all do one narrow job: state the operating mode before any menu is involved. Kindle goes further and moves tactile input off the device into an optional cover. Apple's first touch Mac makes the point from the opposite direction — touch arrives on the panel and the keyboard, trackpad and Touch ID key all stay.",
    evidence: ["Sigma fp2", "Ferrari Luce", "Jetta M6", "Tesla Model Y", "Panasonic TOUGHBOOK 34", "Antigravity A1 Follow Me Bundle", "Kindle 2026 Family", "Amazon Alexa Tablets", "Apple iPad mini and MacBook Pro"],
    heroOverride: "https://ferrari-cdn.thron.com/delivery/public/image/ferrari/d368f0c9-8dde-433a-b097-26b77421e8b6/bocxuw/std/1920x1080/d368f0c9-8dde-433a-b097-26b77421e8b6?quality=high"
  },
  {
    keyword: "Visible Sensing State",
    domain: "ai",
    statement: "Bystander legibility moved from an indicator-light decision to a product-line decision — the answer is a different SKU, not a brighter LED.",
    detail: "Privacy LEDs are a decade old. What is new is Meta shipping an entire camera-free Ray-Ban line whose design argument is the absent lens corner, and Ring answering with a physical lens boundary rather than an app toggle.",
    evidence: ["Ray-Ban Meta Audio", "Ray-Ban Meta (Gen 3)", "Ring 2026 Camera Family"],
    // Ray-Ban Meta Audio · "No lens-corner camera eye" — the absent lens is the whole argument,
    // and it keeps this off the shot the priority card already uses.
    heroOverride: "https://cdn.mos.cms.futurecdn.net/swENUj8ALYwGWMt996y6Rd-1200-80.jpg"
  },
  {
    keyword: "Credentialed, Legible Autonomy",
    domain: "robotics",
    statement: "Robots are gaining managed digital identity and task-explaining feedback so autonomy stays legible, not just capable.",
    detail: "ANYmal pairs robot identity with existing access infrastructure, Sharpa's haptics communicate task state, and Skydio's F10 dock makes fleet readiness visible before a mission starts.",
    evidence: ["ANYmal Door Access", "Sharpa D01 · W02 · AE01", "Skydio F10 Lightrunner"],
    heroOverride: "https://www.gevernova.com/news/sites/default/files/inline-images/aui-anybotics_0.png"
  },
  {
    keyword: "Concealed Systems, Legible at the Point of Use",
    domain: "automotive",
    statement: "Hiding a complex or active system behind a calm surface only works if its real state becomes obvious exactly where someone needs to check it.",
    detail: "Tesla's Roadster hides high-energy aerodynamic hardware behind a minimal shell, while Sony's ECM-W5 puts pairing, gain and backup-recording state on a screen exactly where the operator already holds the kit.",
    evidence: ["Tesla Roadster", "Sony ECM-W5"],
    heroOverride: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-04-World-Desktop.jpg"
  },
  {
    keyword: "One Physical Surface, Several Working Roles",
    domain: "consumer",
    statement: "An existing physical element — a switch, a handle, a factory rig — is repurposed as the primary interface instead of adding a new control surface.",
    detail: "Sigma's STILL/CINE switch, Teenage Engineering's carry handle and OPPO's Tilta Khronos rig all turn a structural or functional part the user already touches into the main point of control, rather than layering menus or new buttons on top.",
    evidence: ["Sigma fp2", "Teenage Engineering EP-35", "OPPO Find X10 Series"],
    heroOverride: "https://assets.teenage.engineering/_img/6ada1e46982c0e6e3c49faf7_4096.webp"
  },
  {
    keyword: "Light Became a State Channel",
    domain: "robotics",
    statement: "Light is being specified as a channel that reports operating state — the inverse of its older job, carrying brand identity.",
    detail: "Tesla's Roadster ties light cues to state, Alpine reveals its illuminated identity only on activation, and Teenage Engineering's hatch lights itself as it opens. Signode makes colour a configurable safety signal across a fleet.",
    evidence: ["Tesla Roadster", "Alpine A310 VISION", "Teenage Engineering EP-35", "Antigravity A1 Follow Me Bundle", "Signode AMR Portfolio", "Skydio F10 Lightrunner", "Ring 2026 Camera Family"],
    // REPLACED the Signode "Universal Material Transfer AMR" render (2026-11-02). That image sat
    // under the report figure "Light and sound cover blind sides", so it passed every check that
    // reads alt text and headings — but opening the file shows a product render with every
    // indicator UNLIT. A card titled "Light Became a State Channel" was illustrated by a picture
    // with no light in it.
    //
    // Ring Floodlight Cam 4K Plus, wired, shown powered on at dusk: both lamps lit on a real wall,
    // and the blue capture LED beside the lens is lit in the same frame — illumination and a state
    // indicator in one in-context shot, no white cutout.
    //
    // HONEST LIMIT: the dominant read is floodlighting, not state signalling; the capture LED is
    // small. The one image in this signal's corpus that shows light doing state work unambiguously
    // is Signode's "Color becomes a configurable safety signal" (an AMR with its blue LED strip lit
    // in a warehouse aisle) — and it is already spent on focus item 01 below, which needs it more
    // because that argument is specifically about a warehouse LED. Rejected alternates: Alpine's lit
    // rear wordmark depicts light carrying brand identity, which is the OLD job this signal says is
    // being inverted; Tesla's launch shot carries a TESLA LIVE watermark and a person on stage;
    // Teenage Engineering's lit hatch is the purest illustration but is a white-background cutout
    // that would wash out the card's overlaid text.
    heroOverride: "https://images.ctfassets.net/a3peezndovsu/7qZMZ80Qcs3jC1HicLoZvW/c20ea9b6d751bb7e42aaf116ea7b0892/ring_floodlight_cam_4k_plus_wired_lifestyle_atf_1500x1500.jpg?w=1100&q=80"
  },
  {
    keyword: "The Chassis Is a Mounting Platform",
    domain: "consumer",
    statement: "The body is being published as an attachment interface — threads, rails, pogo pins, clips — so accessories become product architecture.",
    detail: "Sigma covers the fp2 chassis in 1/4-20 threads, OPPO ships a factory Tilta rig where one mount accepts lens, light and fan, and Teenage Engineering's clips turn the case into a rack. Toyota scales the same idea to a vehicle: five Snowhunter concepts share one cargo, protection and access interface across different body sizes. The interface is documented, not left to third parties.",
    evidence: ["Sigma fp2", "OPPO Find X10 Series", "Teenage Engineering EP-35", "Antigravity A1 Follow Me Bundle", "Amazon Alexa Tablets", "Panasonic TOUGHBOOK 34", "Toyota Snowhunter Concept Family"],
    heroOverride: "https://www.oppo.com/content/dam/oppo_com/oppo/product-asset-library/find-x/find-x10-series-en/find-x10-pro-max/en/white-gray/v1/assets/video-professionism-en-4.jpg.avif"
  }
];

// V4 TEST — visual/material/form-language trends, as distinct from TOP_SIGNALS above (which are
// interaction-mechanism trends: what a product DOES). Deliberately kept to only the entries with
// genuine 2+-report evidence of the same visual pattern — a smaller, honest pool rather than
// stretching mechanism trends to also count as "aesthetic."
// NEWNESS TEST — every claim here (and in TOP_SIGNALS) has to be something that would have been
// wrong or unsayable three years ago. A pattern that was already industry practice is background
// knowledge, not a trend. "Light as Identity" was cut under this test: engineered light signatures
// have carried brand recognition since Audi's DRL era, so this period's cars do not make it news.
// What IS new is light being specified as a state channel — that moved to TOP_SIGNALS instead.
// `images` is one mechanism shot per evidence product, in the same order as `evidence`, harvested
// from the body of each cited report rather than its cover hero — so the gallery actually shows
// the aesthetic move being claimed (a light signature, an exposed service point) instead of three
// product beauty shots. `mediaRatio` is the tile aspect for that trend's gallery, set to whatever
// its source photos natively are, so the grid crops as little as possible.
//
// TITLE AND STATEMENT FORM — the newness test above must not leak into the wording. It is run as
// "what was true before, what is true now", and for a while all three entries simply transcribed
// both halves, so every title read "A, Not B" and every statement was a passive progressive with
// a contrast clause bolted on the end. Three of three identical made the section look generated
// and flattened the differences between the claims. Rewritten 2026-11-02 so each entry has its
// own sentence shape; only "Seams Are Drawn Now, Not Erased" keeps the contrast title, because
// there the reversal of the seamless era IS the claim rather than a framing device. For future
// entries: write the test in the comment, write the trend in the copy.
const AESTHETIC_TRENDS = [
  {
    // Newness test: three years ago product colour was overwhelmingly mood and SKU
    // differentiation. In this period's corpus colour is repeatedly given a *referent* —
    // it names a zone, an operator, a safety state or a cable's job.
    keyword: "Every Colour Points at Something",
    statement: "Pick a colour on any of these products and it names something: a zone, an operator, a safety state, a cable's job.",
    detail: "Renault colour-codes cabin zones; Ferrari F80 marks the primary operator's seat. Signode makes AMR colour a configurable safety signal, Teenage Engineering codes cables by function, and Antigravity leaves the watch one colour cue.",
    evidence: ["Renault E-Space Concept", "Ferrari F80", "Signode AMR Portfolio", "Teenage Engineering EP-35", "Antigravity A1 Follow Me Bundle", "Kindle 2026 Family"],
    mediaRatio: "16/9",
    images: [
      // Ferrari F80 · "Color can identify the primary operator"
      "https://www.topgear.com/sites/default/files/2025/07/12-Ferrari-F80-review-2025.jpg",
      // Signode AMR Portfolio · "Yellow stripes mark the no-go zone" — the forklift shot from
      // "Color becomes a configurable safety signal" reads as a generic warehouse; this one
      // actually shows the colour doing the signalling.
      "https://www.signode.com/Signode/media/Signode/Automation/Robotic-Palletizing.png",
      // Renault E-Space Concept · "Make color a spatial organizer". Antigravity's "One Glance,
      // One Color Cue" shot is a white-background cutout and the cue isn't visible in it.
      "https://media.renault.com/wp-content/uploads/2026/10/59531bf1bcdb47e91296d29530efd5a5-l.jpg.webp",
      // Kindle 2026 Family · "Color is used where content benefits"
      "https://assets.aboutamazon.com/dims4/default/2fc3538/2147483647/strip/true/crop/1600x900+0+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Fassets.aboutamazon.com%2Ff8%2F9a%2Fdb4438604fa69f1fb37a8097858e%2Fabout-amazon-inline-devices-kindle-new-and-reimagined-amazon-news-cdlt-20260929.jpg"
    ]
  },
  {
    // REPLACED "The Edge Carries What the Face Lost" (2026-10-30). That entry failed on every
    // count: side buttons, side ports and sidewall branding are where those things have always
    // lived, a full-width luminous tail band is the trope Hyundai's design chief has called
    // played out, and the five cited products shared only a geometric location — not a driver.
    // It also readmitted the light-as-identity claim this file says it cut (see note above).
    //
    // NEWNESS TEST — for two decades the premium cue was the absence of a seam: unibody, flush
    // glass, body-coloured bumpers, glued assemblies. Drawing the component boundary ON is the
    // reversal, and it would have read as a cost compromise three years ago.
    //
    // BASELINE — what already forces parts to separate, so we don't claim credit for compliance:
    //   · ESPR (EU) 2024/1781 — Art.5 names ease of disassembly, Art.7 requires disassembly
    //     information, Recital 30 a repairability score.
    //   · Right to Repair Directive (EU) 2024/1799 — adopted 13 Jun 2024, APPLIES 31 Jul 2026.
    //   · Battery Regulation (EU) 2023/1542 Art.11 — end-user-removable portable batteries
    //     from 18 Feb 2027.
    // None of the three requires the boundary to be VISIBLE. A hidden screw and a PDF manual is
    // full compliance. So regulation explains why parts must come apart; it does not explain why
    // Citroën styles the separation onto the exterior of a concept car or why Logitech publishes
    // the teardown as a selling point. That voluntary move past compliance is the actual trend —
    // the same shape of argument as Euro NCAP mandating five physical controls but not drive mode.
    //
    // COUNTER-EVIDENCE — the falsifier, from this same period's corpus: OPPO's Find X10 Pro Max
    // puts a deliberate, prominent seam between velvet-etched and smooth glass with nothing
    // serviceable behind it, and the Galaxy Tab's "orderly accessory seams" are alignment
    // aesthetics. A visible seam is not automatically a repair seam; the claim only holds where
    // the brand also publishes what comes off.
    //
    // EVIDENCE INDEPENDENCE — weaker than the count suggests: Citroën and FIAT are both
    // Stellantis and both from the same Mondial reveal, and two entries are Logitech. Four
    // independent corporate sources, not six. TOUGHBOOK 34 is the softest datapoint, since a
    // defined service bay is category baseline for rugged, not a change.
    keyword: "Seams Are Drawn Now, Not Erased",
    statement: "Brands spent two decades hiding the joins. Now the component boundary is styled back onto the outside, because the part behind it is meant to come off.",
    detail: "Citroën gives the 2 CV's bumper its own visible border and FIAT's spoiler declares where it reconfigures; Logitech publishes Rally Bar 2's split lines and Zone Vibe Pro's spare parts; adidas marks the wear zones with finish changes.",
    evidence: ["Citroën 2 CV Concept", "Logitech Rally Bar 2", "Logitech Zone Vibe Pro", "adidas FREERIDER 2027", "Panasonic TOUGHBOOK 34", "FIAT Multiplay"],
    mediaRatio: "16/9",
    images: [
      // Citroën 2 CV Concept · "The bumper announces its separate job" — the boundary is the
      // subject of the photo, which is what the replaced entry's tiles never managed.
      "https://i0.wp.com/lenouvelautomobiliste.fr/wp-content/uploads/2026/10/Citroen-2CV-concept-Le-Nouvel-automobiliste-thibaut-dumoulin-30.jpg?resize=1024%2C683&ssl=1",
      // Logitech Rally Bar 2 · the intact bar above its own separated parts. Logitech's alt text
      // states the intent outright: parts "easily separated and sorted by e-waste recyclers".
      "https://resource.logitech.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/rally-bar-2/rally-bar2-video-bar-designed-grind-desktop.jpg?v=1",
      // Logitech Zone Vibe Pro · "Serviceability appears in the parts story" — pads, strap and
      // battery shown as separate parts, not a sealed product shot.
      "https://resource.logitech.com/w_389,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/headsets/zone-vibe-pro-b2b/b2b-zone-vibe-pro-recycle-materials.jpg?v=1",
      // adidas FREERIDER 2027 · "Let finish changes explain the structure". Chosen over the
      // outsole and heel shots, which are white-on-white at tile size (hero background rule).
      "https://bikepacking.com/wp-content/uploads/2026/09/2026-adidas-freerider_5.jpg"
    ]
  },
  {
    // Newness test: a product's outline has been treated as fixed brand property for as long as
    // industrial design has had brands — you recognise the shape, that is the point. What is new
    // here is the outline being spent as a *readable variable*: the silhouette changes with the
    // working mode, so the shape reports state instead of identity. Distinct from "Seams Are
    // Drawn Now" above, which is about boundaries between parts that stay put.
    //
    // EVIDENCE INDEPENDENCE — three independent makers (Turtle Beach, Apple, Apple). Weaker than
    // it looks: two of the three are Apple products, and the iPhone Duo is a W39 carry-over
    // rather than this period's evidence. Held at three rather than padded.
    keyword: "The Signature Shape Stopped Being Fixed",
    statement: "The outline a brand once held fixed as its signature is now spent on telling you which working mode is live.",
    detail: "Turtle Beach's stick modules flip over bodily, so the controller's outline — not a light or a label — tells you which thumb-input mode is live. Apple gives the same direct-touch input two different silhouettes, a tablet in one hand and a laptop open on a desk. The iPhone Duo's hinge turns a fold into its own standing posture.",
    evidence: ["Turtle Beach Stealth Flip Wireless Controller", "Apple iPad mini and MacBook Pro", "iPhone Duo"],
    mediaRatio: "16/9",
    images: [
      // Turtle Beach · "Read two modes" — both module orientations in one frame, which is the
      // claim itself. Chosen over "Two thumb surfaces", which shows only one state.
      "https://cdn.shopify.com/s/files/1/0556/5795/5430/files/9_Stealth_Flip_Wireless_Controller_2400x1350_cfc14314-2ab5-4864-bdf5-b64cce9b651b.png?v=1788979376",
      // Apple · "Touch changes desk posture" — the open-on-a-desk silhouette, paired against the
      // in-hand tablet shot used as this week's index card.
      "https://www.apple.com/newsroom/images/2026/10/apple-unveils-groundbreaking-macbook-pro-with-proled-xdr-display/article/Apple-MacBook-Pro-with-PROLED-XDR-Display-lifestyle-office-261028_big.jpg.large.jpg",
      // iPhone Duo · the hinge holding its own standing angle, already cited by the mobile
      // domain trend "Hinge Becomes a Self-Standing Mode".
      "https://cdn.mos.cms.futurecdn.net/BWjEcLrmjEaRDGw4enTc6P.jpg"
    ]
  }
];

// Per-domain trend breakdowns — these feed the "Trending Keywords" cloud and each
// domain card's trend count. Distinct from TOP_SIGNALS, which are cross-domain synthesis.
const DOMAIN_TRENDS = {
  automotive: [
    { keyword: "The Dial That Declares Drive Mode", statement: "The physical control that survives a screen-first cabin is specifically the one that declares which mode is active — not the one that is merely convenient.", application: "Give vehicle-mounted computers and cradles one distinctly shaped physical control that states the device's operating mode, rather than a touch target that has to be woken and read before the mode is known.", evidence: ["Ferrari Luce", "Tesla Model Y", "Jetta M6", "Ferrari F80"], heroOverride: "https://images.autoexpress.co.uk/autoexpress/2026/10/Alfa%20Romeo%20Cuorerosso-25.jpg" },
    { keyword: "Light Reports State", statement: "Exterior and cabin lighting is being tied to operating state rather than used purely as a recognition signature.", application: "Use one engineered optical signal to report dock, charge and managed-state on cradles, instead of an LED cluster that only distinguishes powered from unpowered.", evidence: ["Tesla Roadster", "Alpine A310 VISION"] },
    { keyword: "Moving Hardware Needs a State Model", statement: "Moving aerodynamic and body geometry is engineered as a stateful control system with declared locked, transitional and failed states — not a styling flourish.", application: "Define locked, transitional and failed states as explicitly as an active wing for auto-release dock latches and adjustable mounts.", evidence: ["Ferrari F80", "Red Bull RB22", "Ferrari Luce"], heroOverride: "https://www.topgear.com/sites/default/files/2025/07/6-Ferrari-F80-review-2025.jpg" },
    { keyword: "Control Authority Reaches the Second Row", statement: "Non-primary occupants are being given real control surfaces rather than more space — role is now expressed as authority over the system.", application: "In multi-operator vehicle computing, assign actual control authority per role (driver versus dock worker) instead of giving the second role a read-only screen.", evidence: ["Ferrari Luce", "Ferrari F80", "Red Bull RB22", "Tesla Model Y"] },
    { keyword: "One Equipment Language Across a Vehicle Range", statement: "A single equipment grammar — cargo, protection, access — is carried unchanged across five vehicle sizes, rather than restyled for each platform.", application: "Specify one mounting, cargo and protection language for Zebra's vehicle-mount range and hold it across truck, forklift and van installations, so a technician trained on one cab can service another without relearning where anything is.", evidence: ["Toyota Snowhunter Concept Family"], heroOverride: "https://i0.wp.com/gearheaddaily.com/wp-content/uploads/2026/10/toyota-snowhunter-concept-sema-2026-tundra-tacoma-4runner-gallery-43.jpg" },
    { keyword: "Declared Service Boundaries", statement: "Concepts make repair and reconfiguration boundaries visible on the body, instead of hiding every seam inside one shell.", application: "Give rugged handhelds and vehicle-mounted computers a visibly distinct, independently replaceable impact boundary, separate from a legible accessory-reconfiguration boundary, so a technician can read repair scope versus reconfiguration scope directly from the housing without full teardown. Toyota's Snowhunter extends the same logic to a dirty/clean zone split a gloved hand can read in bad weather.", evidence: ["Citroën 2 CV Concept", "FIAT Multiplay", "Toyota Snowhunter Concept Family"], heroOverride: "https://i0.wp.com/lenouvelautomobiliste.fr/wp-content/uploads/2026/10/Citroen-2CV-concept-Le-Nouvel-automobiliste-thibaut-dumoulin-30.jpg?resize=1024%2C683&ssl=1" },
    { keyword: "Viewing Zone Split From Reaching Zone", statement: "Where information is displayed is being separated from where it is touched, instead of assuming one screen serves both jobs.", application: "On vehicle mounts, put the readable display where the eyes already go and the controls where the hand already rests — as screens grow, these stop being the same surface.", evidence: ["Renault E-Space Concept", "Tesla Model Y"], heroOverride: "https://media.renault.com/wp-content/uploads/2026/10/29e955b0a637d2219c0fb074df072df8-l.jpg.webp" },
    { keyword: "Concealed Active Systems Need Unmistakable State", statement: "Hiding complex, active or high-energy hardware behind a calm shell raises the bar for making that hardware's real state obvious before and during activation.", application: "Any concealed sensor, emitter or high-energy accessory on Zebra hardware needs an explicit arm, active and fault signal, with decorative lighting kept visually distinct from a genuine warning.", evidence: ["Tesla Roadster"], heroOverride: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-04-World-Desktop.jpg" },
    { keyword: "Price Tiers Gated by Software, Not Shell", statement: "An entire trim range now shares one shell, with the tier boundary drawn in software and compute instead of in sheet metal.", application: "Keep one chassis visually and mechanically consistent across Zebra product tiers, gating capability by software and compute rather than redesigning the housing per tier.", evidence: ["Jetta M6"], heroOverride: "https://cnevpost.com/wp-content/uploads/2026/10/2026102210152997.jpg" }
  ],
  ai: [
    { keyword: "Visible Sensing State, Physical Not Just Software", statement: "Sensing and recording state must be unmistakable, confirmed by a physical cue, not software.", application: "Give mute, listening and capture states the same physical, bystander-legible treatment — a lens cover, mechanical indicator or hardware cue — on any Zebra wearable or camera-equipped device with a mic or camera, so capture state reads without opening an app.", evidence: ["Ray-Ban Meta Audio", "Ray-Ban Meta (Gen 3)", "Ring 2026 Camera Family"], heroOverride: "https://media.ray-ban.com/cms/resource/blob/1855480/0569c828966f15647a99b37f440fece6/rbm-pdp-ho26-aperol-features-capture-cover-data.jpg" },
    { keyword: "Fit, Hinge & Service Parts", statement: "Fit and contact surfaces are being redesigned as a serviceable, swappable system rather than one fixed shape.", application: "Design swappable straps, pads and hinge adjustments as first-class service parts.", evidence: ["Meta VR Glasses", "Ray-Ban Meta (Gen 3)", "Ray-Ban Meta Audio"], heroOverride: "https://cdn.mos.cms.futurecdn.net/Si53kYKWYKYQfks8AVsZNA-1200-80.jpg" },
    { keyword: "Compute Moves Off the Primary Surface", statement: "Power and compute budgets are becoming an explicit, designed workflow state instead of a background spec.", application: "Offload battery and processing to a belt pack or cradle rather than the head- or hand-worn unit, and measure neck and wrist load across a full shift against a self-contained unit rather than at first fitting.", evidence: ["Meta VR Glasses", "XREAL AURA", "Sony ELF-MN1"], heroOverride: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ManinOffice_V2.width-1300.png" },
    { keyword: "The Tether Is Specified, Not Hidden", statement: "The cable left behind when compute moves off the device is being designed as a named, replaceable part rather than treated as an embarrassment to conceal.", application: "Make the most-flexed cable on any worn or tethered Zebra system a standard, user-replaceable stock line rather than a captive assembly, and publish the routing — then track replacements instead of warranty returns.", evidence: ["XREAL AURA", "Sony ELF-MN1", "Meta VR Glasses"], heroOverride: "https://sony.scene7.com/is/image/sonyglobalsolutions/original_ELF-MN1_005?$jpMediumStaticMainImage$" },
    { keyword: "One Head Shape Can't Be the Default", statement: "Fit variation is being treated as a product-line requirement rather than an accessory size chart — one platform ships in several head-matched silhouettes.", application: "Ship head- and hand-worn Zebra devices as genuine fit variants off one platform, instead of one average size corrected with padding.", evidence: ["Ray-Ban Meta (Gen 3)", "Ray-Ban Meta Audio", "XREAL 1 Pro+"] },
    { keyword: "Fit Is Part of Display Performance", statement: "For a worn display, fit adjustments are a calibration step, not a cosmetic afterthought.", application: "Document nose pad, temple and IPD-style fit adjustments as part of a wearable display's setup and validation process, and test text recognition after a full-shift wear trial, not just at first fitting.", evidence: ["XREAL 1 Pro+"], heroOverride: "https://resource.xreal.com/www-xreal-com/images/hebe/hebe-scene-work-bg-desktop.webp" },
    { keyword: "Redundant Capture Needs a Visible Confirmation", statement: "A backup recording path only earns trust when its state — present, charged, recording — is visible at the point where the operator is already holding the kit.", application: "Pair any Zebra field-audio or evidence-capture accessory with a local backup path and a small, glanceable display showing pairing, recording and remaining capacity at the component the worker is handling.", evidence: ["Sony ECM-W5"], heroOverride: "https://d1ncau8tqf99kp.cloudfront.net/PDP/DI/Accessories/ECM-W5/desktop/hero.jpg" }
  ],
  wearables: [
    { keyword: "Two Solar Surfaces, Two Charging Moments", statement: "Two solar collection surfaces split \"worn\" from \"set aside\" charging into two deliberately different moments.", application: "A dual-surface or dock-plus-body charging path can replace a single charging contact point.", evidence: ["Amazfit T-Rex Dual Solar"], heroOverride: "https://us.amazfit.com/cdn/shop/files/T-Rex_Dual_Solar__Lifestyle_2.jpg?v=1789715428&width=1500" },
    { keyword: "Power Scarcity as a Named Workflow State", statement: "Running low on power becomes a named workflow state, not a failure the product tries to hide.", application: "A defined \"recoverable minimum\" mode can preserve scan confirmation and location before a device goes fully dark.", evidence: ["Amazfit T-Rex Dual Solar"], heroOverride: "https://us.amazfit.com/cdn/shop/files/T-Rex_Dual_Solar__Lifestyle_4.jpg?v=1789715427&width=3840" },
    { keyword: "The Pairing Dongle Is a Designed Part", statement: "The receiver that establishes a connection is being designed as a first-class system part with its own state readout, not a bundled afterthought.", application: "Treat scanner and headset pairing hardware as a designed, losable, replaceable part that reports its own state, with a recovery path when pairing fails.", evidence: ["Logitech Zone Vibe Pro", "Sony ECM-W5"] },
    { keyword: "Gesture Control Keeps a Hardware Fallback", statement: "Wrist- and finger-worn gesture control ships alongside a manual hardware button as backup.", application: "Keep a hardware trigger as a gesture-independent fallback on wrist and ring scanners, verified under gloves and low light rather than assumed from a clean demo.", evidence: ["Antigravity A1 Follow Me Bundle"], heroOverride: "https://cdn.dronexl.co/wp-content/uploads/2026/10/antigravity-a1-follow-me-bundle-cyclist-watch-ring-remote.webp" }
  ],
  robotics: [
    { keyword: "Credentialed Access Made Legible at the Threshold", statement: "Robots are gaining managed digital identity to cross existing secured infrastructure, with authorization state visible at the point of action.", application: "Give autonomous mobile robots the same managed, revocable digital identity to move through badge-controlled doors, gates and elevators, using consistent request/grant/deny/fallback states with a human-escalation path at every robot-operated threshold.", evidence: ["ANYmal Door Access"] },
    { keyword: "Zone-Matched Sensing", statement: "Contact and perceptual sensing resolution is matched to the zone, with fingertip precision only where it matters.", application: "Design scan-confirmation feedback like fingertip haptics — distinguishing a clean read, a low-confidence read and a required retry.", evidence: ["Sharpa D01 · W02 · AE01", "ANYmal Door Access"], heroOverride: "https://assets.newatlas.com/dims4/default/759d630/2147483647/strip/true/crop/6580x4387+0+0/resize/440x293!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2Fed%2F34%2F5455155648f497dd65859aa60726%2Fanymal-robot-stairs-climbing.jpg" },
    { keyword: "Haptics Explain the Task", statement: "Haptic feedback is being designed to communicate a task state — success, uncertainty, retry — not just confirm contact happened.", application: "Design vibration patterns around task state, not a single undifferentiated buzz.", evidence: ["Sharpa D01 · W02 · AE01"], heroOverride: "https://assets.newatlas.com/dims4/default/268985a/2147483647/strip/true/crop/6720x4480+0+0/resize/440x293!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2F10%2F18%2Ff9579f784980af62973fbece417b%2Fanymal-robot-going-to-inspection-mission.jpg" },
    { keyword: "Fleet Status Stays Visible Without a Dashboard", statement: "A fleet's status stays visible through the dock itself or a shared status light.", application: "Treat multi-unit charging and task handoff as one inspectable system, and standardize a status-light and label-zone language across every handoff point, so a worker can identify the ready unit and the correct scan point without a separate dashboard, regardless of which robot class is involved.", evidence: ["Skydio F10 Lightrunner", "Signode AMR Portfolio"], heroOverride: "https://cdn.sanity.io/images/mgxz50fq/production-v3-red/23a3e22ff89164157e2656ad3caf2c7a32603779-3954x4394.png?w=1200&fit=max&fm=jpg" }
  ],
  industrial: [
    { keyword: "Battery Swap Is a Workflow State", statement: "Maintenance actions like battery exchange are being designed as named, legible workflow states rather than interruptions to hide.", application: "Design hot-swap and charging transitions as explicit device states that both the worker and the fleet dashboard can read, instead of treating them as downtime.", evidence: ["Panasonic TOUGHBOOK 34", "Amazfit T-Rex Dual Solar"], heroOverride: "https://cdn.mos.cms.futurecdn.net/hf9RKAAe5rHK8Fy5sPFEkB-1200-80.jpg" },
    { keyword: "Modular + Unmistakable States", statement: "Durable core structure is separated from modular interface zones, with every attachment state made unmistakable.", application: "Define service bays with explicit access tools, and pair every dock/cradle state with a confirming visual or tactile cue.", evidence: ["Panasonic TOUGHBOOK 34"], heroOverride: "https://cdn.mos.cms.futurecdn.net/kdctSx98RhDrahrheLkZiB-1200-80.jpg" }
  ],
  consumer: [
    { keyword: "Service Access Designed Into the Mount", statement: "Fixed enterprise hardware is designed so its mount itself provides serviceable access.", application: "Give vehicle-mounted terminals and fixed scanners a controlled service swing or access panel, and measure maintenance time and reach from the actual mounting height.", evidence: ["Logitech Rally Bar 2"], heroOverride: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/rally-bar-2/rally-bar2-video-bar-fast-setup.jpg?v=1" },
    { keyword: "The Room Becomes a Managed Object", statement: "A physical space is being represented as one managed asset with its own readiness state, rather than as a list of the devices inside it.", application: "Model a work cell or vehicle bay as a single managed object with its own readiness state, instead of as separate device records a supervisor has to reassemble.", evidence: ["Logitech Rally System 2 Pro", "Logitech Rally Bar 2", "Skydio F10 Lightrunner"], heroOverride: "https://resource.logitech.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/business/products/video-conferencing/rally-system-2-pro/rally-system-2-pro-modular-solution.jpg?v=1" },
    { keyword: "Threshold Status Made Public", statement: "Availability state is pushed outside the room itself, readable before someone commits to walking in and interrupting.", application: "Give shared Zebra kiosks and mounted terminals the same red/green, distance-readable availability signal instead of hiding status behind a login screen.", evidence: ["Logitech Rally System 2 Pro"], heroOverride: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/business/products/video-conferencing/rally-system-2-pro/rally-system-2-pro-device-space-management-3.jpg?v=1" },
    { keyword: "Shared Screens Adapt to Distance and Identity", statement: "A fixed shared screen changes its information density and access based on who is approaching and from how far, not one generic state for everyone.", application: "Give shared Zebra kiosks and wall terminals a large glanceable state at a distance and a detailed, identity-confirmed control set up close, with every identity switch explicit and reversible.", evidence: ["Apple HomeView"], heroOverride: "https://www.apple.com/newsroom/images/2026/10/meet-apple-homeview-a-new-way-to-enjoy-entertainment-and-manage-the-home/article/Apple-HomeView-FaceTime-Center-Stage-261013_big.jpg.large.jpg" },
    { keyword: "A Physical Control Becomes the Primary Interface", statement: "An existing switch or grip carries the full interface, replacing menu depth.", application: "Give a Zebra handheld's major mode changes a dedicated physical switch position, and ring its carry handle or grip with the controls a worker reaches for first — so lifting the device out of a holster is already most of the setup, without a menu to navigate.", evidence: ["Sigma fp2", "Teenage Engineering EP-35"], heroOverride: "https://assets.teenage.engineering/_img/6ada1e46982c0e6e3c49faf7_4096.webp" },
    { keyword: "Commitment Gets Its Own Step", statement: "An irreversible action is being separated from the capture that precedes it, with a preview placed deliberately in between so the costly step is chosen rather than triggered.", application: "Put an explicit review step in front of any Zebra action a worker cannot undo — a label printed, a pick confirmed, a shipment closed — and show what is about to be committed rather than only confirming afterwards that it happened.", evidence: ["instax mini Evo 2"], heroOverride: "https://asset.fujifilm.com/www/py/files/2026-10/b233641728c6fac08fb1a9232b216fd9/news_14132_06_en.jpg" },
    { keyword: "The Viewing Envelope Is a Published Dimension", statement: "A display's usable viewing distance, angle and ambient-light range are published as hard numbers up front, and the housing is then derived from them rather than styled first.", application: "Publish the usable viewing envelope for Zebra vehicle-mount and kiosk displays the way a drop rating is published, then check actual mount positions and aisle lighting against it instead of assuming the screen works wherever it fits.", evidence: ["Sony ELF-MN1"], heroOverride: "https://sony.scene7.com/is/image/sonyglobalsolutions/original_ELF-MN1_005?$jpMediumStaticMainImage$" }
  ],
  sports: [
    { keyword: "Reachable Micro-Adjustment Mid-Task", statement: "Micro-adjustment is placed where a rider can actually reach it mid-task, with the resulting range made measurable.", application: "Quick-adjust dials or buckles should be tested with gloves, mid-task, with the usable range documented.", evidence: ["adidas FREERIDER 2027"], heroOverride: "https://www.bikeradar.com/resources/content/32337f2f-7841-4ef6-a233-d1f001580530/fbf3ce62-f438-47b2-a2d5-fbfff07117af/feed6d6e-06ee-400e-9700-35fed3a08274/adidas-Freerider-Pro-BOA-scaled.jpg?preview=false&platform=WEB&deviceId=62acf397-4952-4f26-966e-a704cf065c37" },
    { keyword: "Friction & Impact Zones, Engineered Separately", statement: "Friction and impact zones are engineered as separate systems rather than one uniform surface.", application: "Map grip, impact and attachment zones independently on any wearable mount, with inspectable, cleanable wear surfaces.", evidence: ["adidas FREERIDER 2027"], heroOverride: "https://www.bikeradar.com/resources/content/32337f2f-7841-4ef6-a233-d1f001580530/fbf3ce62-f438-47b2-a2d5-fbfff07117af/f056788c-0538-4310-a82c-77da5bb459ee/adidas-Freerider-Pro-scaled.jpg?preview=false&platform=WEB&deviceId=62acf397-4952-4f26-966e-a704cf065c37" }
  ],
  mobile: [
    { keyword: "AI Output Stays Inspectable Beside the Source", statement: "Automated suggestions are kept reviewable by staying visually next to the material they summarize, rather than replacing it.", application: "Show source text beside generated summaries before a Zebra worker accepts a field decision, and flag uncertain content rather than presenting it as fact.", evidence: ["Galaxy Tab S12 Ultra"] },
    { keyword: "Attachment Becomes a New Wear Point", statement: "An attachment props up a held device, and its hinge becomes a new wear point.", application: "Treat dock, cover and keyboard attachments as their own tested state — covering stability, gloved handling and the contact line's resistance to debris.", evidence: ["Galaxy Tab S12 Ultra", "Kindle 2026 Family"], heroOverride: "https://www.sammobile.com/wp-content/uploads/2026/09/Samsung-Galaxy-Tab-S12-Ultra-Screen-S-Pen-Keyboard-Cover-1920x1079.jpg" },
    { keyword: "Vulnerable Controls Move Away From the Hand", statement: "A frequently mis-pressed control is relocated away from where the support hand naturally rests, and edge controls are gathered into one reachable zone.", application: "Test power, trigger and recovery key placement against common one-handed and gloved grips before freezing a Zebra handheld's control layout.", evidence: ["Kindle 2026 Family", "Galaxy Tab S12 Ultra"], heroOverride: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/P1011578.jpg?w=800" },
    { keyword: "Tier Colour Must Not Collide With Status Colour", statement: "Finish and colour differentiate tiers only where they cannot be mistaken for status meaning — the two colour systems are being kept deliberately separate.", application: "Keep device-tier colour and status-indicator colour on separate palettes, so a premium finish never reads as an alert and a safety signal never reads as trim.", evidence: ["Kindle 2026 Family", "Signode AMR Portfolio"] },
    { keyword: "Mode Changes Need Obvious Hardware Cues", statement: "Products make an input-mode transition — pen, keyboard, touch — physically obvious, and this period the mechanism itself does the declaring rather than a cue beside it.", application: "Give pen, keyboard and dock connection states one consistent on-screen location so gloved operators can predict the active input mode before acting — and where a Zebra device genuinely has two input modes, prefer a physical configuration a supervisor can read across an aisle over a setting buried in a profile.", evidence: ["Amazon Alexa Tablets", "Turtle Beach Stealth Flip Wireless Controller", "Apple iPad mini and MacBook Pro"], heroOverride: "https://cdn.shopify.com/s/files/1/0556/5795/5430/files/1_Stealth_Flip_Wireless_Controller_2400x1350-DTC_LOGO_1.png?v=1790958290" },
    { keyword: "One Input Model, Two Working Postures", statement: "The same direct-touch input is being designed for two different body postures — device in hand, and device on a surface — with the control set that survives differing between them.", application: "Define the hand-held and docked postures of a Zebra handheld as two separate design targets, and verify which controls stay reachable in each, instead of validating one posture and assuming the other inherits it.", evidence: ["Apple iPad mini and MacBook Pro"], heroOverride: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/268836_iPad_Mini_OLED_handson_ADiBenedetto_0012.jpg?quality=90&strip=all" },
    { keyword: "Hinge Becomes a Self-Standing Mode", statement: "A precision hinge holds the device open, turning a fold into a hands-free stand.", application: "Apply the same logic to Zebra rugged tablets and handhelds: a built-in, self-locking hinge or kickstand, validated for drop and vibration, lets a device stand at a fixed, glanceable angle without a separate mount, freeing the worker's hands for scanning or picking while keeping the screen visible.", evidence: ["iPhone Duo"], heroOverride: "https://cdn.mos.cms.futurecdn.net/BWjEcLrmjEaRDGw4enTc6P.jpg" },
    { keyword: "Factory-Official Modular Rig, Not a Third-Party Workaround", statement: "A device maker ships its own official modular rigging accessory for a specialized task, instead of leaving that modularity to third-party cases and mounts.", application: "Offer an official, factory-designed rigging accessory for specialized field tasks rather than leaving modular attachment to third parties, so fit and durability are validated by the device maker itself.", evidence: ["OPPO Find X10 Series"], heroOverride: "https://www.oppo.com/content/dam/oppo_com/oppo/product-asset-library/find-x/find-x10-series-en/find-x10-pro-max/en/white-gray/v1/assets/eye-care-en-characters-bg.jpg.avif" }
  ]
};
