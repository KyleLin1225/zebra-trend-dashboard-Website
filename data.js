// Trend Dashboard V4 Test data model. (Copied from V3; the header said V3 until now, which is
// misleading while both sites are served side by side for comparison.)
// Folder convention: weeks/<W##>/... for weekly-bundled reports, singles/... for standalone reports.
// report.file is ROOT-RELATIVE (resolved against the site root, used by report-viewer.html as an iframe src).

const PERIOD_LABEL = "2026-09-21 – 2026-11-08";

// V4 TEST — homepage synthesis narrative tying the current Top Signals together into one
// throughline, instead of leaving three independent cards for the reader to connect themselves.
// Rewrite this each sync to reflect whatever the actual current Top 3 are.
// V4 TEST — now structured so the narrative claim is backed by a real number, not just prose.
// `tension` splits the current Top Signals into the two sides of the throughline's argument;
// the evidence-count bar rendered from it is computed live, not hand-typed, so it can't drift
// out of sync with the actual TOP_SIGNALS data the way a hand-typed stat could.
const PERIOD_NARRATIVE = {
  // LENGTH NOTE — the thesis renders at display size and the detail sits directly under it, so
  // both are read before anyone has decided to read the page. Earlier V5 drafts ran 37 and 159
  // words; at that length the thesis stops being a claim and becomes a paragraph. Held to roughly
  // 20 and 70. Everything cut from here is still argued in full on the theme blocks and in
  // V5_CHANGES.md — this is the headline, not the evidence.
  thesis: "The cue aimed at a bystander is moving into hardware — a moulded boundary, a deleted feature. Firmware cannot switch those off.",
  detail: "Ring moulds a boundary around the lens instead of offering an app toggle; Meta ships a whole camera-free Ray-Ban line whose argument is the absent lens corner; Ferrari lets body geometry report that a system is open. Different industries, one conclusion: a cue that software can disable is a weaker promise than one built into the shape. Note the scope — this is one of five themes below, and two of them have nothing to do with proving state.",
  // ===== `tension` REMOVED 2026-11-04 (V5) =====================================================
  // It was a two-sided bar splitting the top signals into "state declared by hardware" against
  // "state declared by the system". Three things were wrong with it and none could be fixed by
  // relabelling:
  //   · The axis was not real. "Visible Sensing State" sat on the system side, but both of its
  //     cases are hardware decisions — Meta ships a camera-free SKU, Ring moulds a lens boundary
  //     instead of offering an app toggle. Filed correctly, the split became 3 against 1, which
  //     is a one-sided finding wearing a two-sided chart.
  //   · Hardware is part of the system, so the two sides were never mutually exclusive, and two
  //     reports were being counted on both sides at once (review doc §7.1).
  //   · It read as a market verdict — "this period runs 17 to 6" — off 21 of 46 reports that we
  //     chose to write up. Editorial sample size is not market share (§7.1, §10.3).
  // What replaces it is `evidenceScale` below: how strongly each research theme is actually
  // sourced, measured in INDEPENDENT BRANDS rather than report count, so the chart answers "how
  // much should I trust this" instead of implying a contest between two camps.
  //
  // `brands` is not stored here — the renderer reads it from THEMES, so this cannot drift out of
  // sync with the themes it describes. All this needs is the order and the caption.
  evidenceScale: {
    caption: "Independent brands behind each theme — not report counts. Six Stellantis marques from one press day is one occasion, not six datapoints.",
    disclaimer: "This measures how well sourced each theme is in our own reading, not how widely adopted it is in the market. We write up what we choose to write up."
  }
};

// V5 — THESE ARE HYPOTHESES TO VALIDATE, NOT WORK TO SCHEDULE.
// The review document's §8.1 is the reason. The top item here was marked "act this cycle" and
// specified binding the active DataWedge profile to the application LED — a named API, a named
// LED, on named devices. Nothing in this corpus establishes that the problem it solves exists:
//   · Which workflow actually switches to the wrong profile?
//   · What is it that the worker does not know at that moment?
//   · What does the error cost — rework, a mis-ship, a safety event, nothing?
//   · Would an LED be seen, understood and remembered under real workload?
//   · Does it collide with the feedback those devices already give?
// None of those were answered, and this analysis did NOT re-verify the DataWedge API or the LED
// capability of each model against current documentation, so it cannot serve as an implementation
// spec. A further caution from §8.1 worth keeping in view: a capability missing from public
// documentation is not proof it is absent from every Zebra model or customer build.
//
// So `urgency` no longer means "how soon to build". It means how ready the idea is to be TESTED:
//   "now"   — the question is well formed and testable with existing hardware this cycle
//   "next"  — worth testing, but the problem statement needs sharpening first
//   "watch" — too few independent cases; monitor rather than prototype
// Each entry carries `validate`: what has to be true for the idea to be worth building at all.
// Do not promote an entry to a build request until those are answered with evidence.
//
// §8.2 ALSO APPLIES, AND CUTS THE OTHER WAY. The baseline gate below drops a candidate when
// Zebra already ships the obvious version. That is right for avoiding fake novelty and wrong as
// a blanket rule: viewing angle, glove recognition, cross-product consistency, cleaning, repair,
// accessory coexistence and failure recovery are all real design opportunities ON TOP OF an
// existing capability. A dropped candidate should be re-read for that before it is discarded —
// see the note on DROPPED_PRIORITIES below.
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
    // RESCOPED 2026-11-04 (V5). Was "Bind the active capture profile to the application LED these
    // devices already ship" at urgency "now" — an implementation instruction naming an API and a
    // specific LED. The title now states the thing to find out, because the underlying problem has
    // never been shown to occur. If `validate` comes back saying mode confusion is rare or cheap,
    // the right outcome is to drop this, not to build a smaller version of it.
    title: "Find out whether workers lose track of the active capture profile — and what it costs",
    urgency: "now",
    validate: [
      "Which workflows switch profile without the worker initiating it, and how often does the wrong one end up active? Obtainable from DataWedge profile-switch logs against task logs — no new hardware.",
      "When it goes wrong, what does the worker see? Establish whether they discover it at the trigger pull, at the next scan, or not until a downstream exception.",
      "What does one occurrence cost — a re-scan, a mis-pick, a returned shipment? If it is a re-scan, this whole item is not worth an LED.",
      "If a cue is justified, is an LED the right channel at all? It competes with the decode LED, the beeper and the haptic already firing on the same event.",
      "Re-verify the premise before any build: this analysis did not re-check the Get Active Profile intent's current behaviour or per-model application-LED capability against Zebra's live documentation."
    ],
    rationale: "Zebra is not short of controls — six remappable keys on the TC53, six more behind the VC8300's Blue modifier, four on the WS50. They are all momentary, so none of them declares anything. Mode itself lives in a DataWedge profile that switches per app with no indicator at all. The unassigned application LED is the cheapest surface to put it on.",
    // "Light Became a State Channel" dropped here on 2026-11-04: it is no longer a signal. The
    // Signode case that backed it survives in OBSERVATIONS, and it is the single closest analogue
    // to Zebra's own floor, so this priority's argument is unaffected — but it now rests on one
    // observed case rather than a trend, which is worth knowing before acting on it.
    relatedSignals: ["The Surviving Button Declares Mode"],
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
    validate: [
      "Who is actually in frame of a fixed Zebra scanner or machine-vision camera — staff, customers, or nobody for most of the shift? The answer decides whether this is a design question or a compliance one.",
      "Is this already governed by site signage or regional notice requirements rather than by product design? If so the product cue is redundant and the real work is elsewhere.",
      "Ray-Ban's capture LED answers a consumer-privacy question in a public setting. Test whether the same cue reads as reassurance or as surveillance in a workplace, where the person in frame cannot walk away.",
      "Structural beats electronic per this period's strongest finding — so ask first whether a moulded or mechanical indication of the sensing envelope would serve better than another LED."
    ],
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
//
// V5 CAVEAT, per review doc §8.2. "Zebra already ships it" is a reason to reject a claim of
// NOVELTY. It is not a reason to reject a design question. Shipping an LED does not settle
// whether it is visible at the angle the work happens at, recognisable through a glove, the same
// colour as the one on the next device in the kit, cleanable, replaceable, still legible with an
// accessory fitted, or useful when the thing it reports has failed. Each entry below was dropped
// on novelty; before it is discarded entirely it should be re-read against that list, because a
// capability that exists can still be the wrong capability. Also from §8.2: public documentation
// not mentioning a feature does not prove it is missing from every model and customer build —
// the three `reason` fields below rest on published pages only.
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
    blurb: "Fifteen 2026 launches — from Ferrari's first EV to six Stellantis concept cars, Renault, Alpine and Tesla's Paris Motor Show reveals, Jetta's first EV sedan and Toyota's five tracked Snowhunter concepts at SEMA — converge on keeping tactile, locatable controls legible in digital cabins, while Citroën, FIAT and Toyota mark repair, reconfiguration and dirty-versus-clean boundaries right on the body, and both Jetta's three-trim platform and Toyota's five-vehicle equipment language show one system can scale across a whole range. W45 adds BYD's Yangwang Altior, Singapore Airlines' next-generation cabin and three EICMA machines, which push two further ideas: luxury spent on touch, and a deleted control used to reopen the layout.",
    // EVIDENCE FIX 2026-11-04 (V5) — three of the seven brands named in this sentence did not
    // support it. BRABUS BODO's only control claim is its apply card "Keep frequent actions
    // physically distinct"; DS F3VER's analytical text is entirely exterior volume, light and
    // finish; Red Bull RB22 was a single-seat race car whose report was about the occupied zone
    // and the surrounding crew — and that report has since been withdrawn from the corpus
    // entirely (2026-11-08, too niche a subject). The four that remain all state it in their
    // analytical sections, and
    // Citroën and Alfa Romeo were added because they do too — Alfa's "Steer-by-wire does not
    // remove every analogue cue" is the clearest statement of this in the whole corpus.
    application: "Physical controls survive even as automotive cabins go fully digital. Ferrari, Tesla's Model Y and the Alfa Romeo, Peugeot and Citroën concepts all keep real, distinctly shaped controls for the actions that matter most — and Alfa states the rule outright, keeping analogue cues after removing the mechanical steering linkage. Renault, Alpine and the Roadster extend a related discipline to cabin layout, repeated identity cues and concealed active systems. Citroën's 2 CV Concept, FIAT Multiplay and Toyota's Snowhunter family mark a separate thread: repair, reconfiguration and dirty-versus-clean boundaries are declared right on the body instead of hidden inside one shell. Scale is the third thread — Jetta's M6 shows one shell can gate a range in software across three trims, and Snowhunter shows one cargo, protection and access language can carry unchanged across five vehicle sizes. W45 adds a fourth: Yamaha deletes the clutch lever and the gear pedal and redraws the body around what that frees, Honda unhooks the compressor from the crankshaft so the engine's vee and intake ducts change with it, and Singapore Airlines stores a seat as a named situation that follows the passenger to the next flight instead of resetting at the gate. Zebra can apply each of these — distinctly shaped, glove-tested physical controls; a visibly separate impact-versus-reconfiguration boundary a gloved hand can read in bad weather; and one chassis and mounting language held consistent across price tiers and across truck, forklift and van installations alike — plus two newer tests: ask what a deletion would free before adding anything, and carry a worker's handedness, grip and trigger sensitivity between shared devices the way language and display already travel.",
    cardImage: "https://vrrb-prod-s3.s3.us-west-1.amazonaws.com/strapi/Screenshot_2026_04_01_165401_7665b911db.jpg" },
  { id: "ai",         name: "Sensing & Capture Devices", accent: "#81D8D0", // Tiffany blue
    blurb: "Ray-Ban's audio and capture-enabled glasses, Meta's VR headset, Ring's camera family, XREAL's spatial displays and AURA eyewear, and Sony's wireless mic kit all treat sensing state, fit and point-of-use confirmation as explicit design problems — and increasingly treat the cable to an off-body compute pack as product architecture rather than a compromise. DJI's Matrice 5T extends the same discipline to what gets published: each sensing limit is stated as a condition rather than as a single number.",
    application: "Sensing state has to be unmistakable to the wearer and everyone nearby. Ray-Ban Meta's camera lines and Ring's camera family pair a physical capture cue with swappable fit parts, while XREAL and Sony show that fit calibration and point-of-use state confirmation matter just as much. AURA adds a fourth thread: once compute, battery and heat move to a waistband puck, the lead between them is published as a standard, user-replaceable USB-C part rather than a captive assembly. Zebra can apply the same unmistakable sensing indicator, tactile fallback and visible state confirmation to its worker-worn hardware — and make the most-flexed cable in any tethered system a stock line it can replace on site instead of a warranty event. The Matrice 5T adds one more: DJI states each limit as a condition — a 21.6mm conductor at 32 metres in darkness — and names which sensor takes over when another runs out, which is how Zebra could publish a scanner or camera range instead of one unconditional figure.",
    cardImage: "https://images.ctfassets.net/a3peezndovsu/54lfzLXdIk48j3MEALH8Vy/50d100a828eef652c87f8cf33c49f360/ring_pan-tilt_indoor_cam_2K_lifestyle_atf_1500x1500_03.jpg?w=1100&q=80" },
  { id: "wearables",  name: "Wearable Devices",       accent: "#8B5CF6", // purple
    // EVIDENCE FIX 2026-11-04 (V5) — "Logitech's swappable pads and batteries" was not observed.
    // The Zone Vibe Pro report's serviceability claim is its apply card "Serviceability appears in
    // the parts story"; its analytical sections cover the boomless form, a soft contact band on a
    // load-bearing structure, and the pairing sequence. The replacement claim — structure and
    // contact surface designed as separate parts — is the stronger finding anyway, and is actually
    // in the report.
    blurb: "Amazfit's dual-solar watch, Logitech's Zone Vibe Pro headset and Antigravity's Watch and Ring Remotes treat power recovery, body contact and a hardware fallback as deliberate product decisions rather than specification lines. Aina's ring turns the worn device from something that measures the wearer into something that asks them a question.",
    application: "What touches the body and what carries the load are being designed as separate parts. Logitech splits them explicitly — a load-bearing structure carrying a soft contact band — which lets each be tuned without compromising the other, and its pairing sequence is treated as a system part rather than a setup step. Amazfit makes power recovery continuous rather than an event, charging both on and off the wrist, and makes mode and state readable in direct sun, which is the only place in this corpus where the reading environment is part of the feedback specification. Antigravity keeps one gloved-operable hardware button in reserve behind its gesture and wrist-screen control. For Zebra: whether its current wrist mount asks one part to do both the load and the contact job, whether its state cues survive the lighting its workers actually stand in, and whether every gesture path still has a hardware fallback a gloved hand can find. Aina adds one more: the worn unit now proposes an action and waits for a thumb to approve or dismiss it, rather than measuring the wearer and reporting upward — so anything an agent proposes on Zebra worn hardware needs a one-thumb approve and dismiss on the device itself, and a defined outcome when neither is given.",
    cardImage: "https://us.amazfit.com/cdn/shop/files/T-Rex_Dual_Solar__Lifestyle_15.jpg?v=1789715426&width=3840" },
  { id: "robotics",   name: "Robotics",               accent: "#38BDF8", // sky blue
    // EVIDENCE FIX 2026-11-04 (V5) — "legible and correctable" was the whole problem here. In the
    // ANYmal report "Make authorization state legible" is apply card 02, and in the Sharpa report
    // "Make feedback mean a task state" is apply card 01 — so both halves of the old summary were
    // Zebra suggestions written up as finished robot behaviour, and the clause "distinguishing a
    // clean grasp, a low-confidence read and a required retry" paraphrased the apply card almost
    // word for word. Sharpa's analytical text supports only a hardware spec, and the report itself
    // cautions that more intensity levels do not prove a wearer can tell them apart.
    blurb: "ANYmal's credentialed door access, Sharpa's haptic manipulation hardware, Skydio's docked F10 drone and Signode's five-class AMR portfolio all push autonomy past capability — into identity, readiness and shared-space signalling.",
    application: "Permission, readiness and visibility are becoming as designed as the motion itself. ANYmal's door access is the clearest case: credential, access policy and door motor are described as one audited interaction running on installed dormakaba hardware, so the robot joins the building's existing identity system rather than getting its own. Skydio treats readiness as something the dock establishes and verifies before a mission may start, and Signode is the one case here where light genuinely does state work — a lit mast strip, a multi-angle dome LED and hazard striping as one language for a shared human/robot aisle. Sharpa belongs to a different question: it specifies five LRA motors with 256 levels per fingertip, and its own report warns that resolution is not the same as interpretability. For Zebra the testable items are a request/grant/deny path that reuses existing site access control, a cradle that can establish shift-readiness rather than display it, and — before adding any haptic vocabulary — evidence that the cues already shipping are read correctly under load.",
    cardImage: "https://assets.newatlas.com/dims4/default/5b61d73/2147483647/strip/true/crop/6629x3480+0+469/resize/1200x630!/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2F85%2Fc9%2Fd8d7d55441838b767a3d41fc73b9%2Fanymal-autonomous-inspection-power-grid.jpg" },
  { id: "industrial", name: "Rugged Devices",     accent: "#b9ff43", // unchanged
    blurb: "Panasonic's TOUGHBOOK 34 keeps gloved, physical interaction central to rugged field computing, separates structure from serviceable interface zones, and expresses both legacy compatibility and rugged durability through genuine structure rather than decoration.",
    // "validates hardware buttons with real gloves" softened 2026-11-04 (V5): the report states
    // that gloves belong in the primary interaction, which is a design position. It does not
    // report a test, and saying it does would be inventing a verification result.
    application: "Gloved, physical interaction still belongs at the center of rugged computing. The TOUGHBOOK 34 treats glove operation as the primary input case rather than an accommodation, exposes a defined service bay instead of hidden disassembly, treats battery exchange as a state the workflow passes through, and protects existing accessory and connector investments even as it adopts new standards. Zebra can apply the same dedicated buttons, explicit service access, and genuine structural (not decorative) expression of both legacy compatibility and durability to its next rugged tablet.",
    cardImage: "https://cdn.mos.cms.futurecdn.net/xFyyTAsRTt2BeMc8uKE4nB-1200-80.jpg" },
  { id: "sports",     name: "Sports Industry",        accent: "#F76900", // Nike orange
    blurb: "adidas' FREERIDER 2027 splits one footwear family into task-matched variants with micro-adjustable, inspectable wear zones.",
    // EVIDENCE FIX 2026-11-04 (V5) — "glove-tested" removed: no test is reported. The analytical
    // heading is "Place adjustment where it can be reached", and the testing language belongs to
    // the apply cards ("Prototype adjustment with the whole load path", "Make correct fit visible
    // and tangible"). The genuinely strong finding — binding geometry protected from styling — was
    // missing from this summary entirely and is now the lead.
    application: "An interface can be defended against the rest of the design. adidas reserves geometry for the mechanical binding connection, so the one surface that has to mate with another product is not available to styling — the clearest statement in this corpus that an interface needs protecting. The same family splits into task-matched variants, places its adjustment where a hand can actually reach it on a slope, and treats grip, impact and attachment as separate engineered zones with finish changes used to explain the structure rather than decorate it. For Zebra's wearable-scanner mounts the open question is which interface geometry is currently negotiable in a styling review and should not be, and whether adjustment is reachable in the posture the work is done in rather than the one it is specified in.",
    cardImage: "https://cdn.road.cc/wp-content/uploads/2026/09/Adidas-Freerider-Whistler.jpg" },
  { id: "mobile",     name: "Mobile & Handheld Devices", accent: "#FFD60A", // gold
    blurb: "Samsung's Galaxy Tab, Amazon's Kindle and Alexa Tablets, Apple's foldable iPhone Duo, and OPPO's Find X10 Series with its factory Tilta Khronos rig all treat attachment, hinge and control placement as explicit, testable — and increasingly officially supported — decisions on a familiar handheld device, while Apple's hand-held iPad mini beside its touch MacBook Pro and Turtle Beach's flip-over stick modules push the same thinking further, letting the device's own shape and posture declare which input mode is live.",
    application: "Attachments and controls deserve their own tested state, not an assumption. Galaxy Tab, Kindle and the Alexa Tablets all treat a keyboard attachment or control placement as a deliberate design decision, the iPhone Duo's self-locking hinge turns a fold into its own hands-free standing mode, and OPPO's own factory-built Khronos rig shows a device maker can own that modularity directly instead of leaving it to third parties. Mode is the newer question: Turtle Beach's modules physically flip, so the active thumb-input mode reads off the controller's outline rather than out of a setting, and Apple designs the same direct touch for two different postures — tablet in one hand, laptop open on a desk — with a different set of controls surviving in each. motorola's signature 27 adds the opposite question — what a device stops showing about itself — carrying three durability certifications with none of the shape cues that used to announce them. Zebra can validate the same attachment stability and glove-tested control layout, apply a self-locking hinge or kickstand for hands-free scanning postures, consider an official rigging accessory for specialized field tasks, and treat a handheld's in-hand and docked postures as two separate design targets rather than assuming one inherits the other. The signature 27 raises a separate one: IP68, IP69 and MIL-STD-810H are held inboard under a PANTONE-named weave, so ruggedness is no longer something the silhouette has to say. Zebra has the engineering and withholds the vocabulary — no current spec sheet names a housing material or a colour standard, and naming them is the cheap half of this.",
    cardImage: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/P1011550.jpg?w=800" },
  { id: "consumer",   name: "Consumer Electronics", accent: "#14B8A6", // teal
    blurb: "Logitech's Rally Bar 2 and Rally System 2 Pro turn room hardware into serviceable, managed modules with status visible before anyone walks in; Apple's HomeView extends shared-screen logic into the home; Sigma's fp2 and Teenage Engineering's EP-35 show a physical switch or handle can replace menu depth as the primary interface; and Sony's ELF-MN1 and Fujifilm's instax mini Evo 2 add two newer moves — delivering depth to one viewer with no worn optics at all, by steering light to each eye and tracking the observer, and placing a deliberate preview between capture and an irreversible print. Sony's MDR-3R adds a third: a reissue whose specification is largely a list of what must not change.",
    // FABRICATION REMOVED 2026-11-08 — this blurb previously ended "publishing an optical
    // envelope as a hard dimension", the same invented Sony specification §4.12 removed from the
    // application paragraph below and §10.6 removed from the consumer domain trend. See those
    // notes for the word-count verification against the source report.
    application: "Consumer electronics increasingly treat one physical element as the whole interface. They also increasingly surface room status before someone has to walk in to check it — Rally Bar 2's pivoting mount exposes service access, Rally System 2 Pro's modular components support central management while its own distance-readable availability signal is visible before someone commits to entering, HomeView adapts a shared screen to who's approaching, and Sigma's STILL/CINE switch and Teenage Engineering's carry handle turn an existing control into the main interface instead of adding menus. Two further threads arrive with the ELF-MN1 and the instax mini Evo 2: Sony builds a single-viewer desk display that delivers depth with no headset and no worn hardware at all, directing light to each eye and tracking the observer rather than asking them to wear the optics, and Fujifilm puts a preview step between capture and the irreversible act of spending film. Zebra can apply the same swing-access mount, modular configuration, outside-the-room availability signal, identity-aware interface, and dedicated-switch-over-menu logic across its kiosks, terminals and handhelds — and put an explicit review step in front of anything a worker cannot undo. The MDR-3R adds a last thread: Sony keeps the 1979 silhouette, drivers, box artwork and manual and confines every change to the cable, so when Zebra refreshes a long-lived accessory it can isolate the change to one replaceable sub-assembly and state which parts are deliberately unchanged, keeping field stock and training valid.",
    // FABRICATION REMOVED 2026-11-04 (V5). The previous version of this paragraph said Sony
    // "publishes its usable viewing distance, angle and ambient-light range as hard numbers and
    // derives the cradle angle and body size from them", and the Zebra line asked Zebra to
    // "publish a viewing envelope for every mounted display the way it publishes a drop rating".
    // The ELF-MN1 report contains none of this. Searched the full file: "viewing distance",
    // "ambient", "angle", "lux", "degree" and "cm" do not occur anywhere in it, in any section.
    // This was not an apply card misread as a fact — it was a specification that does not exist,
    // and a Zebra recommendation built on top of it. Worth recording as its own failure mode: the
    // other defects in V5 came from quoting the wrong part of a real report, this one came from
    // nowhere in the report at all, so no heading-position check would ever have caught it. What
    // catches it is searching the source file for the specific words a claim depends on.
    cardImage: "https://resource.logitech.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/rally-bar-2/rally-bar2-video-bar-install-minutes-desktop-2.jpg?v=1" }
];

const WEEKS = [
  // ===== W45 ADDED 2026-11-10 — synced from the promoted ZIP in 01_Weekly Report\W45. Reports are
  // copied verbatim from that archive; only the week index gained the site's "← Dashboard" chrome
  // and had its EICMA card repointed at the root launch-events copy. Dates below are each
  // product's own announcement date, read from that report's Sources list, not the week window.
  {
    id: "W45", year: 2026, label: "W45", dateRange: "2 – 8 Nov 2026",
    indexFile: "weeks/W45/index.html",
    zipName: "Weekly_Design_Trend_Report_2026-W45_2026-11-02_to_11-08.zip",
    reports: [
      { title: "Yangwang Altior", date: "2026-11-07", domain: "automotive",
        blurb: "BYD spends its luxury budget on 48 real-metal controls, hand-polished jade and Suzhou silk embroidery, at the moment the rest of the industry is deleting switches.",
        hero: "https://paultan.org/image/2026/11/Yangwang-Altior-front-three-quarter-1200x675.jpg",
        file: "weeks/W45/01_Yangwang_Altior.html",
        tags: ["automotive","car","suv","luxury","physical controls","material","craft","byd","yangwang"] },
      { title: "Singapore Airlines Next-Generation Cabin", date: "2026-11-06", domain: "automotive",
        blurb: "Two First Class suites drop their divider to make one 80 by 60 inch bed, and the seat position a passenger sets is carried forward to their next flight.",
        hero: "https://runway-media-production.global.ssl.fastly.net/us/originals/2026/11/Singapore-Airlines-First-Class-Double-Seater-Sofa-2.jpg",
        file: "weeks/W45/02_Singapore_Airlines_Next-Generation_Cabin.html",
        tags: ["transport interior","cabin","aviation","seating","reconfigurable","persistent settings","singapore airlines"] },
      { title: "Aina Ring", date: "2026-11-05", domain: "wearables",
        blurb: "A ring with a screen, a speaker and a thumb control, built so an agent's proposed action can be approved or rejected without reaching for a phone.",
        hero: "https://www.aina.com/_next/static/immutable/media/aina-usecase-cues.3t-u1iygc8ny9.webp",
        file: "weeks/W45/03_Aina_Ring.html",
        tags: ["wearable","smart ring","ai device","worn interface","thumb control","agent approval","aina"] },
      { title: "DJI Matrice 5T", date: "2026-11-05", domain: "ai",
        blurb: "Rated only IP55, it spends everything on perception instead — a rotating LiDAR, three mmWave radars and a native 1,280 by 1,024 thermal imager.",
        hero: "https://www-cdn.djiits.com/cms/uploads/c1ffb3281498454131d2b70dbcc55eb0.jpg",
        file: "weeks/W45/04_DJI_Matrice_5T.html",
        tags: ["drone","sensing","lidar","thermal imaging","radar","field equipment","ingress rating","dji"] },
      { title: "motorola signature 27", date: "2026-11-05", domain: "mobile",
        blurb: "IP68, IP69 and MIL-STD-810H on a $1,599 phone finished in a PANTONE-named weave: ruggedness has become a property a luxury object advertises.",
        hero: "https://assets.motorola.com/global/zeus/moto_signature_27_zeus_pdp_page_design_desktop_1.png",
        file: "weeks/W45/05_motorola_signature_27.html",
        tags: ["mobile","phone","smartphone","rugged","certification","material","finish","pantone","motorola"] },
      { title: "Sony MDR-3R", date: "2026-11-05", domain: "consumer",
        blurb: "The 1979 Walkman headphones return with the same 23mm drivers and the original box artwork, and everything that changed sits on the cable: USB-C, a Y-split, an in-line remote.",
        hero: "https://sony.scene7.com/is/image/sonyglobalsolutions/overview-01-D?wid=900",
        file: "weeks/W45/06_Sony_MDR-3R.html",
        tags: ["consumer electronics","audio","headphones","heritage","reissue","usb-c","in-line remote","sony"] }
    ]
  },
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
        // FABRICATION REMOVED 2026-11-08 — was "...desk tool, with the optical envelope
        // published as a dimension." Third and last instance of the invented Sony spec; see §10.6.
        blurb: "A six-inch glasses-free spatial display turns a 3D object into a compact, single-viewer desk tool by steering light to each eye and tracking the observer.",
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
  // REPORT WITHDRAWN 2026-11-08 — "Red Bull RB22". Pulled from the single-report set as too niche
  // a subject: a single-seat F1 car is not a product anyone buys, configures or services, so its
  // design decisions transfer to Zebra hardware only by analogy. It was already the weakest
  // report in the corpus on evidence grounds — V5 had to remove it from two separate claims (the
  // automotive control sentence and "Control Authority Reaches the Second Row") because its
  // single-seat architecture could not support either. Every citation of it is removed below and
  // the counts it fed are restated, rather than left to resolve to a missing report at render
  // time. The HTML still sits in singles/ unreferenced — see V5_CHANGES.md §10.
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
  // ===== EICMA 2026 ADDED 2026-11-10 — synced from the promoted ZIP in 02_Launch Event. This event
  // sits inside 2026-W45: the W45 week index carries exactly one card for it, and that card links
  // here. The three reports are copied verbatim from the archive; only this index gained the
  // site's "← Dashboard" chrome, the share menu and the report-viewer routing.
  {
    id: "eicma-2026-milan", name: "EICMA 2026 · Fiera Milano Rho", shortName: "EICMA 2026",
    // This event sits inside 2026-W45. `week` is what puts it in the W45 branch of the sidebar
    // tree, under the six standalone reports — it is not a seventh report and is not counted as one.
    week: "W45",
    dateRange: "3 – 8 Nov 2026", eventDate: "2026-11-03",
    indexFile: "launch-events/EICMA_2026_Milan/index.html",
    zipName: "EICMA_2026_Milan_Three_Full_Reports.zip",
    reports: [
      { title: "Honda RN0", date: "2026-11-03", domain: "automotive",
        blurb: "Honda's first high-end e-MTB moulds its display flush into the top tube instead of clamping it to the bars, and applies motorcycle chassis habits to a carbon bicycle frame.",
        hero: "https://hondanews.eu/image/motorcycles/low/593271/1_1/5?v=2",
        file: "launch-events/EICMA_2026_Milan/01_Honda_RN0.html",
        tags: ["bicycle","e-mtb","integrated display","carbon frame","cross-category","eicma","honda"] },
      { title: "Honda V3R 900 E-Compressor", date: "2026-11-03", domain: "automotive",
        blurb: "Driving the compressor electrically frees it from the crankshaft, which fills the engine's vee, makes the intake ducts the bike's face, and gets lettered under the handlebar.",
        hero: "https://hondanews.eu/image/motorcycles/low/598501/1_1/5?v=2",
        file: "launch-events/EICMA_2026_Milan/02_Honda_V3R_900_E-Compressor.html",
        tags: ["motorcycle","powertrain packaging","forced induction","raw finish","typography","eicma","honda"] },
      { title: "Yamaha RW700 Explore", date: "2026-11-03", domain: "automotive",
        blurb: "Deleting the clutch lever and the gear pedal frees the left switch cube, the foot platform and the volume under the seat — and invents a machine between scooter and adventure bike.",
        hero: "https://cdn2.yamaha-motor.eu/prod/product-assets/2027/RW700DX/2027-Yamaha-RW700DX-EU-Forest_Green-Static-003-03.jpg",
        file: "launch-events/EICMA_2026_Milan/03_Yamaha_RW700_Explore.html",
        tags: ["motorcycle","scooter","control deletion","category invention","automatic transmission","eicma","yamaha"] }
    ]
  },
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
  // ===== W45 ADDED 2026-11-10. Both entries carry two reports, so neither displaces the current
  // displayed top three (8 and 7 evidence items); they sit benched until their evidence grows,
  // which is the expected behaviour, not a gap. Length held under the 27-word keyword+statement
  // ceiling set by the three signals actually rendered today.
  {
    keyword: "Ruggedness Stopped Looking Rugged",
    domain: "mobile",
    statement: "Durability is argued through certification and sensing now, while the outside is finished like a consumer object.",
    detail: "motorola carries IP68, IP69 and MIL-STD-810H under a PANTONE-named woven back and announces none of it through shape. DJI accepts IP55 on the Matrice 5T and spends the budget on perception instead — roof LiDAR, three mmWave radars, native thermal. Both hold the durability inboard and let the outside look like something else entirely.",
    evidence: ["motorola signature 27", "DJI Matrice 5T"],
    heroOverride: "https://assets.motorola.com/global/zeus_2027/motorola_signature_27_pdp_form_factor_03_d_.jpg" },
  {
    keyword: "The Readout Moves Into the Held Part",
    domain: "wearables",
    statement: "Information is built into the structure the hand already holds, instead of bolted on as a separate module.",
    detail: "Honda recesses the RN0's display flush into the top tube, in the rider's downward sightline, rather than clamping a unit to the bars. Aina puts a screen, a speaker and a thumb control on the finger itself. Zebra's worn displays still mount on the wrist or the back of the hand.",
    evidence: ["Honda RN0", "Aina Ring"],
    heroOverride: "https://hondanews.eu/image/motorcycles/low/593402/1_1/5?v=2" },
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
    // EVIDENCE FIX 2026-11-04 (V5) — Jetta M6 removed from the detail sentence and from `evidence`.
    // The claim read "Jetta's single remaining dial ... state the operating mode". Neither half is in
    // the report. The only passage in the Jetta file that mentions a dial is the LAST of its four h3s
    // — "Keep One Dial Beside the Glass" — which is a What-Zebra-Can-Apply recommendation, not an
    // observed feature, and even there the dial is for the most-used function, not for mode. "Single
    // remaining" is unsourced. Per the review doc §10.3: an apply card is never citable as a product
    // fact. Sigma's STILL/CINE switch and Ferrari's drive-mode rotary are both genuine analytical-
    // section facts, so the signal stands on them.
    detail: "Sigma's STILL/CINE switch and Ferrari's drive-mode rotary both do one narrow job: state the operating mode before any menu is involved. Kindle goes further and moves tactile input off the device into an optional cover. Apple's first touch Mac makes the point from the opposite direction — touch arrives on the panel and the keyboard, trackpad and Touch ID key all stay.",
    evidence: ["Sigma fp2", "Ferrari Luce", "Tesla Model Y", "Panasonic TOUGHBOOK 34", "Antigravity A1 Follow Me Bundle", "Kindle 2026 Family", "Amazon Alexa Tablets", "Apple iPad mini and MacBook Pro"],
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
    // EVIDENCE FIX 2026-11-04 (V5) — the old title "Credentialed, Legible Autonomy" fused a real
    // product fact with a recommendation, in one phrase. Checked against the ANYmal file: "Give
    // devices governed credentials" is APPLY card 01 and "MAKE AUTHORIZATION STATE LEGIBLE" is APPLY
    // card 02 — the "legible" half of the title was quoting a Zebra suggestion as if it had shipped.
    // What the analytical sections DO state is narrower and still interesting: "Credential, access
    // policy and door motor form a single audited interaction", via dormakaba ED100/250 operators.
    // So the credential claim stays and the legibility claim goes.
    //
    // Sharpa dropped from `evidence`. The old detail said "Sharpa's haptics communicate task state".
    // The report's analytical text supports only a hardware spec — five LRA motors, 256 levels per
    // fingertip — and the meaning-bearing part is APPLY card 01, "Make feedback mean a task state".
    // The report even argues against the old wording: "a larger number of intensity levels is not
    // proof that users can reliably interpret them."
    keyword: "Robots Are Being Issued Governed Credentials",
    domain: "robotics",
    statement: "Autonomous machines are starting to carry managed identity on the same access infrastructure that governs people.",
    detail: "ANYmal's breakthrough is permission rather than mobility: credential, access policy and door motor are described as one audited interaction, using installed dormakaba ED100/250 operators rather than a robot-specific door. Skydio's F10 makes readiness a property the dock establishes before a mission is allowed to start. Whether that authorisation state is also made legible to bystanders is, so far, a recommendation in both reports — not a shipped feature.",
    evidence: ["ANYmal Door Access", "Skydio F10 Lightrunner"],
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
  // DEMOTED 2026-11-04 (V5) — "Light Became a State Channel" was removed from TOP_SIGNALS and now
  // lives in OBSERVATIONS below as a single-case note. It claimed seven products; re-checked
  // against each report's analytical sections (per the review doc §3.2, which requires state
  // feedback, brand identity and work lighting to be counted separately), exactly one survived.
  // The audit is recorded on the OBSERVATIONS entry itself so the removal is auditable rather
  // than silent.
  {
    keyword: "The Chassis Is a Mounting Platform",
    domain: "consumer",
    statement: "The body is being published as an attachment interface — threads, rails, pogo pins, clips — so accessories become product architecture.",
    detail: "Sigma covers the fp2 chassis in 1/4-20 threads, OPPO ships a factory Tilta rig where one mount accepts lens, light and fan, and Teenage Engineering's clips turn the case into a rack. Toyota scales the same idea to a vehicle: five Snowhunter concepts share one cargo, protection and access interface across different body sizes. The interface is documented, not left to third parties.",
    evidence: ["Sigma fp2", "OPPO Find X10 Series", "Teenage Engineering EP-35", "Antigravity A1 Follow Me Bundle", "Amazon Alexa Tablets", "Panasonic TOUGHBOOK 34", "Toyota Snowhunter Concept Family"],
    heroOverride: "https://www.oppo.com/content/dam/oppo_com/oppo/product-asset-library/find-x/find-x10-series-en/find-x10-pro-max/en/white-gray/v1/assets/video-professionism-en-4.jpg.avif"
  }
];

// ===== OBSERVATIONS ===========================================================================
// NEW IN V5. A trend needs independent cases; a single well-evidenced case is still worth
// carrying, but it is not a trend and must not be counted or displayed as one. Before this array
// existed there was nowhere to put a claim that survived verification but only in one product, so
// such claims stayed in TOP_SIGNALS and got padded with cases that did not actually support them.
// That padding is the specific failure the review document catalogues.
//
// An entry here is a candidate, not a conclusion. Promote it to TOP_SIGNALS only when a second
// INDEPENDENT case appears — independent meaning a different brand, not a second product in the
// same family and not a second report about the same launch event.
const OBSERVATIONS = [
  {
    keyword: "Light Became a State Channel",
    domain: "robotics",
    statement: "Signode specifies colour and light on its AMRs as a configurable safety signal — light doing state work rather than brand work.",
    detail: "A vertical blue LED strip runs along the mast as a live status light, with a dome LED readable from several angles, and the same report describes blue status LEDs, 360° rings and yellow hazard striping as one shared language for a mixed human/robot aisle. One brand, one portfolio, one report.",
    evidence: ["Signode AMR Portfolio"],
    // ----- WHY THIS IS NOT A TREND -------------------------------------------------------------
    // It was a TOP_SIGNAL in V3/V4 citing seven products. Each was re-read in its ANALYTICAL
    // sections only (the last four h3s of every report are "What Zebra Can Apply" and are
    // recommendations, never product facts), and the review doc's §3.2 separation was applied:
    // state feedback, brand identity and work lighting are three different things.
    notSupporting: [
      { case: "Tesla Roadster",      why: "The only light-and-state text in the file is the apply card 'Tie light cues to state', phrased as an instruction. No observed feature." },
      { case: "Alpine A310 VISION",  why: "The illuminated rear wordmark reveals brand identity on activation. That is the OLD job this claim said was being inverted, so it argues against the trend rather than for it." },
      { case: "Teenage Engineering EP-35", why: "'A hatch that lights itself' is task illumination for seeing inside a case — work lighting, not a state report." },
      { case: "Ring 2026 Camera Family",   why: "Floodlight plus capture LED; the analytical text covers illumination and lens placement. 'Expose sensor state' is an apply card." },
      { case: "Skydio F10 Lightrunner",    why: "'Readiness is a fleet property' is about the dock establishing readiness. No light cue is described." },
      { case: "Antigravity A1 Follow Me Bundle", why: "No LED-as-state anywhere in the analytical text. The blue LED appears only in an image caption on the charging grip." }
    ],
    limits: "One brand means no independent corroboration, and Signode sells into exactly the shared-aisle warehouse context where status lighting is longest established — so this may be mature practice in that segment rather than a new direction. Resolving that needs competitor AMR teardowns, which this corpus does not contain.",
    // The strongest image in this corpus — an AMR with its blue state band lit in a real aisle —
    // is deliberately NOT used here. It is spent on ZEBRA_PRIORITIES item 01, whose argument is
    // specifically about a warehouse status LED and which needs it more. Per the image rule: when
    // two cards want one shot, it goes to the narrower argument.
    heroOverride: "https://www.signode.com/Signode/media/Signode/Automation/Application-by-Forklift.png"
  }
];

// ===== THEMES — THE LAYERED RESEARCH STRUCTURE ================================================
// NEW IN V5. This is the review document's §10.2 structure and its §10.4 deliverable 4: a shape
// that keeps product fact, vendor claim, visible structure, analyst inference and Zebra
// recommendation in SEPARATE FIELDS so they cannot be blended into one persuasive sentence. Every
// evidence defect fixed in V5 — Roadster, Jetta, RB22, ELF-MN1, ANYmal, the TE cables, the Zone
// Vibe spare parts — had the same root cause: TOP_SIGNALS has one `detail` string, so a fact and
// a recommendation written into it become indistinguishable the moment the sentence is read.
// Here they cannot be, because they are different keys.
//
// HOW EACH CASE IS ANCHORED. `at` quotes the report's own section heading verbatim. Every report
// in this corpus ends with exactly four "What Zebra Can Apply" h3s, so a heading can be checked
// mechanically: if it is one of the last four, it is a recommendation and may NOT appear as a
// fact. That rule is what the re-clustering below was run against — all 46 reports then in the
// corpus (45 since the RB22 withdrawal on 2026-11-08), analytical
// sections only.
//
// WHY THESE FIVE. They are the review doc's §9 candidates, kept because the corpus supports them
// and NOT padded to a round number. Reports were allowed to land in no theme; eight did, and they
// are listed in UNCLUSTERED below rather than quietly dropped.
//
// `counts` deliberately separates reports from brands, families and events, because reports are
// an editorial sample. Six Stellantis marques from one Mondial press day is one event, not six
// datapoints — stating it as six would be the §10.3 prohibition on reading sample size as market
// strength. Read `brands` as the real strength of a theme; `reports` only measures our coverage.
//
// STATUS. This array is the content layer. The renderer does not read it yet — wiring the eight
// domain pages (step 4) and the home page (step 5) to it is the remaining work. Nothing here is
// displayed, so nothing here is claimed to be live.
const THEMES = [
  {
    id: "physical-controls-for-critical-actions",
    name: "Which Actions Earn a Physical Control",
    problem: "Every physical control costs money, space and sealing. So which actions are worth keeping off the glass?",
    productPractice: "The surviving control is consistently spent on an action that is either frequent, mode-setting, or must work when attention and hands are committed elsewhere. It is almost never spent on a feature that is merely important.",
    cases: [
      // ===== W45 ADDED 2026-11-10 =====
      { report: "Yangwang Altior", at: "Spend the luxury budget on the controls", layer: "product-fact",
        note: "48 metal control pieces across 11 locations, refined over 30 iterations, with the switches tapped by small hammers to tune how they sound and feel. The spend goes to the things a hand touches rather than to screen area." },
      { report: "Yamaha RW700 Explore", at: "Decide which controls do not survive", layer: "product-fact",
        note: "Deleting the clutch lever and the gear pedal frees the left switch cube, which then carries a cruise rocker, a MODE button, a four-way joystick with a centre button and a separate finger paddle. This is the first case in the corpus of a brand REMOVING controls rather than keeping them." },
      { report: "Aina Ring", at: "One control for the decision that matters", layer: "product-fact",
        note: "A single protruding side control approves or dismisses the action an agent proposes, reachable by the thumb already resting on it." },
      { report: "Sigma fp2",                    at: "A switch states intent before menus do",        layer: "product-fact",      note: "A STILL/CINE switch sets the operating mode ahead of any menu. The same body also keeps thirteen looks on one physical button and two dials carrying the information load." },
      { report: "Panasonic TOUGHBOOK 34",       at: "Gloves belong in the primary interaction",      layer: "product-fact",      note: "Glove operation is treated as the primary input case, not an accessibility mode; 'Keep frequent actions outside the menu' states the selection rule explicitly." },
      { report: "Ferrari F80",                  at: "Return critical actions to physical buttons",   layer: "product-fact",      note: "A reversal: controls that had migrated to the screen were moved back. The report separates these from secondary functions, which get a stable but non-physical home." },
      { report: "Ferrari Luce",                 at: "Keep frequent driving actions under the fingers", layer: "product-fact",    note: "Frequency, not criticality, is the stated selection rule. 'A visible control makes state changes deliberate' adds a second rule: a state change should cost a deliberate physical act." },
      { report: "Alfa Romeo Cuorerosso",        at: "Steer-by-wire does not remove every analogue cue", layer: "product-fact",   note: "The clearest statement of the theme in the corpus: removing the mechanical linkage did not remove the tactile anchors. 'Instruments physically change the information level' is a physical control over information density." },
      { report: "Peugeot RCZ Vision",           at: "Important settings keep distinguishable hardware", layer: "product-fact",   note: "Distinguishable by touch, not merely present — the control has to be findable without looking." },
      { report: "Citroën 2 CV Concept",         at: "A visible handle keeps the action understandable", layer: "product-fact",   note: "Legibility of the action, not speed of access, is the argument." },
      { report: "Tesla Model Y",                at: "Minimal surfaces still need a tactile anchor",  layer: "product-fact",      note: "From the most screen-committed brand in the corpus, which makes it the strongest single datapoint against the idea that this is nostalgia." },
      { report: "Antigravity A1 Follow Me Bundle", at: "One Button, Even With Gloves",               layer: "product-fact",      note: "The whole control scheme reduced to one button plus a wrist screen; glove operation is the stated constraint that produced it." },
      { report: "Teenage Engineering EP-35",    at: "The handle is the dashboard",                   layer: "visible-structure", note: "An existing structural part carries the controls, rather than a control area being added. 'One knob swaps the whole effect' is the mode-setting case." },
      { report: "instax mini Evo 2",            at: "Rotary choice",                                 layer: "product-fact",      note: "Physical rotary selection kept alongside a live digital preview — the two are not presented as alternatives." },
      { report: "Kindle 2026 Family",           at: "Buttons live in an optional cover",             layer: "product-fact",      note: "THE INFORMATIVE EXCEPTION. Amazon agreed the control was worth keeping and then refused to pay for it on the base device, moving it into an accessory. Any Zebra read of this theme has to account for this case, not just the ones that confirm it." },
      { report: "Apple iPad mini and MacBook Pro", at: "Retain physical control paths",              layer: "product-fact",      note: "Touch was added to the MacBook and the keyboard, trackpad and Touch ID key all stayed — addition rather than replacement." }
    ],
    // `inferenceShort` and `limitShort` are the one-line versions shown on the dashboard; the full
    // `inference` and `limits` below are for V5_CHANGES.md and for anyone auditing the theme.
    // Added 2026-11-05 after the first build put every field on the page at once and made the
    // domain pages unreadable. Keep these to roughly 25 words — they sit in a single line slot.
    inferenceShort: "The rule is not “keep the important controls” — it is keep the one that is frequent, sets a mode, or survives committed hands.",
    limitShort: "Nine of thirteen are consumer or automotive, where a physical control is also a premium cue — some of this may be priced rather than reasoned.",
    inference: "Across these cases the selection rule is observable and consistent, and it is not 'keep the important controls'. It is: keep the control whose action is frequent, sets a mode, or has to survive committed hands. Three brands state the rule in their own words rather than leaving it to be inferred.",
    notSupporting: [
      { case: "Jetta M6",           why: "Cited in V3/V4 as 'the single remaining dial that declares mode'. The report's only dial is in an apply card, and it is for the most-used function. Removed from the site in V5." },
      { case: "Galaxy Tab S12 Ultra", why: "'Keyboard changes working posture' is about posture, not about which action keeps a control. Belongs to the posture theme." },
      { case: "Turtle Beach Stealth Flip Wireless Controller", why: "Controls are relocated and duplicated, not selected — the report is about reconfiguration, not about what earns a control." }
    ],
    counts: { reports: 16, brands: 13, families: 16, events: 14,
      note: "Alfa Romeo, Peugeot and Citroën are three Stellantis marques from one Mondial press day; Kindle is Amazon. W45 adds BYD, Yamaha and Aina, each on its own occasion. Thirteen independent brands across fourteen independent occasions is the honest figure." },
    limits: "Twelve of the sixteen are consumer or automotive products, where a physical control is also a premium cue — so some of this may be priced rather than reasoned. TOUGHBOOK and the A1 are the only cases where the stated driver is a working constraint (gloves) rather than feel. Until W45 the corpus contained no case of a brand REMOVING a control, so the rule rested only on survivors. The Yamaha RW700 is the first deletion case and it points the same way — the two controls removed are the ones automation made redundant, and what they freed went back into the surviving switch cube. One case does not clear the survivorship bias, but it is no longer uncontested.",
    zebraQuestions: [
      "Zebra handhelds already carry six or more remappable keys, so the question is not whether to have physical controls — it is whether the current assignment follows the rule these products follow. Which Zebra key is spent on a mode rather than a momentary action?",
      "The Kindle case is the one to test commercially: is a control worth keeping if it ships in an accessory rather than the base device? Zebra already sells Trigger Handles, so this is a question about what belongs in the box, not about feasibility.",
      "Glove operation is the only working constraint stated in the corpus. Does it change which control wins, or only how big it has to be?"
    ]
  },
  {
    id: "accessories-make-a-work-platform",
    name: "The Body Is Published as an Attachment Interface",
    problem: "One device, several jobs. Build variants, or publish the interface and let accessories carry the difference?",
    productPractice: "The chassis is given documented, repeated attachment points — threads, pogo pins, rails, clips, a shared mount — and the accessory range, not the device range, carries task variation.",
    cases: [
      { report: "Sigma fp2",              at: "Chassis becomes a rigging platform",        layer: "product-fact",      note: "1/4-20 threads across the body; the EVF attaches rather than embeds, and the hot shoe is shared across brands. The interface is an existing open standard, not a proprietary one." },
      { report: "OPPO Find X10 Series",   at: "One mount accepts lens, light and fan",     layer: "product-fact",      note: "A single mount serving three unrelated accessory types is the strongest form of the claim. 'A cage adds hand controls the phone lacks' — the accessory supplies a capability the device deliberately omits." },
      { report: "Teenage Engineering EP-35", at: "Clips turn the case into a rack",        layer: "visible-structure", note: "'One port, several swappable roles' — one physical interface is re-roled in software, which is a different strategy from adding ports." },
      { report: "Amazon Alexa Tablets",   at: "Pogo pins expose modular intent",           layer: "visible-structure", note: "The pins are visible on the outside of the device; the report reads their visibility as a deliberate declaration that the interface exists." },
      { report: "Panasonic TOUGHBOOK 34", at: "Concentrate change in defined modules",     layer: "product-fact",      note: "The rugged case: variation is confined to named modules rather than spread across SKUs, which is the enterprise version of this strategy." },
      { report: "Sony ECM-W5",            at: "Extend capability through a clear interface", layer: "product-fact",    note: "'Give the case a second workflow' — even the charging case is given an operational role rather than being storage only." },
      { report: "Antigravity A1 Follow Me Bundle", at: "A Kit Built From Swappable Parts", layer: "product-fact",      note: "Sold as a bundle of parts rather than a configured product." },
      { report: "Toyota Snowhunter Concept Family", at: "External storage",                layer: "visible-structure", note: "The same idea at vehicle scale: five concepts share one cargo, protection and access interface across different body sizes." },
      { report: "FIAT Multiplay",         at: "A spoiler can become a carrying tool",      layer: "product-fact",      note: "A structural part given a second, unrelated job — the inverse of adding an accessory mount." },
      { report: "adidas FREERIDER 2027",  at: "Reserve geometry for the mechanical connection", layer: "product-fact", note: "Binding interface geometry is protected from styling. The clearest statement in the corpus that an interface has to be defended against the rest of the design." }
    ],
    inferenceShort: "What separates this from an ordinary accessory range is that the interface is published — made standard or documented — rather than left to be reverse-engineered.",
    limitShort: "Only three of the ten genuinely publish anything. The rest are proprietary mounts the maker alone supplies, which is an accessory business and decades old.",
    inference: "The difference from ordinary accessory ranges is that the interface is being published — made visible, standard, or documented — rather than left for third parties to reverse-engineer. Sigma using an existing hot shoe and adidas protecting binding geometry are the two cases where this is unambiguous.",
    notSupporting: [
      { case: "Kindle 2026 Family", why: "Buttons in a cover is a cost decision about one control, not a published attachment interface. It belongs to the physical-controls theme as its exception." },
      { case: "Galaxy Tab S12 Ultra", why: "'Pen input starts without an add-on' argues the opposite — capability moved INTO the device rather than out to an accessory." }
    ],
    counts: { reports: 10, brands: 9, families: 10, events: 9,
      note: "Amazon appears once here. FIAT is Stellantis/Mondial. Nine independent brands." },
    limits: "'Published' is doing real work in this claim and only three cases genuinely meet it — Sigma's standard hot shoe, adidas's protected binding geometry, Toyota's shared range interface. The rest show a proprietary mount that the maker alone supplies, which is an accessory business, not an open interface, and has been true for decades. Treat the strong version of this theme as resting on three cases, not ten.",
    zebraQuestions: [
      "Zebra already ships hand straps, Trigger Handles, Boots and Cradles against the same device. Which of those four interfaces could physically be shared, and which must stay separate because of load path or sealing? This is answerable with existing hardware and a fit study — no new product needed.",
      "Is Zebra's accessory interface documented to the level a customer could design against, or only to the level they can buy against? That distinction is what separates the three strong cases from the other seven.",
      "OPPO's cage supplies controls the phone deliberately omits. Is there a Zebra capability currently in the base device that would be better placed in an accessory — and what would that do to the base price?"
    ]
  },
  {
    id: "service-access-as-architecture",
    name: "Where the Product Comes Apart Is Designed, Not Hidden",
    problem: "Parts wear out and get swapped mid-shift. Is that access hidden behind a panel, or part of the exterior design?",
    productPractice: "The split line, the service bay and the replaceable part are located, shaped and finished deliberately — and in several cases are visible from the outside rather than concealed.",
    cases: [
      // ===== W45 ADDED 2026-11-10 =====
      { report: "Sony MDR-3R", at: "Ship the first wear part in the box", layer: "product-fact",
        note: "A second set of ear pads is boxed with the headphones rather than listed as a spare, and the cable — the assembly that fails first — is the only part of the 1979 design the reissue changed." },
      { report: "Panasonic TOUGHBOOK 34", at: "Battery exchange is a workflow state",      layer: "product-fact",      note: "The strongest framing in the corpus: a swap is treated as a state the workflow passes through, not a maintenance event. 'Map service zones across the rear' locates them deliberately." },
      { report: "Logitech Rally Bar 2",   at: "Parts are designed to separate",            layer: "product-fact",      note: "'A mount can expose the rear' and 'The cable side is intentionally reachable' — access is designed into the installed orientation, not just the bench condition." },
      { report: "Ring 2026 Camera Family", at: "Replacement is a designed action",         layer: "product-fact",      note: "'The bracket defines service access' — the mount, not the body, governs serviceability, which is a different and more durable decision." },
      { report: "Logitech Rally System 2 Pro", at: "Each module has a clear job",          layer: "visible-structure", note: "'Standard cable carries expansion' — a commodity cable rather than a proprietary loom is what makes field reconfiguration possible." },
      { report: "adidas FREERIDER 2027",  at: "Place adjustment where it can be reached",  layer: "product-fact",      note: "Reach is evaluated in the real posture — on a slope, gloved — not at the bench." },
      { report: "Citroën 2 CV Concept",   at: "The bumper announces its separate job",     layer: "visible-structure", note: "The boundary is styled onto the exterior. NOTE THE LIMIT: a visible boundary is not evidence of repairability (§10.3) — this case supports only the visual claim." }
    ],
    inferenceShort: "Two different things sit here: designing the access path, and styling the boundary so the split is readable. Only Panasonic and Logitech do both.",
    limitShort: "Defined service bays are category baseline for rugged and conferencing hardware, not a change — and EU repair law requires none of this to be visible.",
    inference: "Two genuinely different things are present and should not be merged: Panasonic, Logitech and Ring design the access PATH (where you reach, in what orientation, with what tool), while Citroën and adidas style the BOUNDARY so the separation is readable. Only Panasonic and Logitech do both.",
    notSupporting: [
      { case: "Logitech Zone Vibe Pro", why: "Cited in V4's aesthetic section for publishing spare parts. That is an apply card, not an observed practice. The product's visible split lines remain valid for the aesthetic claim only." },
      { case: "OPPO Find X10 Series",   why: "A deliberate, prominent seam between two glass finishes with nothing serviceable behind it — the direct falsifier for equating a visible seam with repairability." },
      { case: "Galaxy Tab S12 Ultra",   why: "'Orderly accessory seams' are alignment aesthetics." }
    ],
    counts: { reports: 7, brands: 6, families: 7, events: 7,
      note: "WEAKEST THEME IN THE SET. Two of the seven reports are the same Logitech Rally family from one launch, so this is really six independent brands across six occasions." },
    limits: "Rugged and conferencing hardware have had defined service bays for years — for TOUGHBOOK in particular this is category baseline, not a change, so it cannot evidence a new direction. EU regulation (ESPR 2024/1781, Right to Repair 2024/1799 applying 31 Jul 2026, Battery Regulation 2023/1542 Art.11 from Feb 2027) explains why parts must come apart but requires none of this to be VISIBLE — a hidden screw and a PDF is full compliance. The voluntary move past compliance is the only part that is news, and it rests on Citroën, adidas and now Sony — the first two being the weakest cases technically, and Sony's being a boxed consumable rather than a structural access decision.",
    zebraQuestions: [
      "Panasonic's 'battery exchange is a workflow state' is directly testable against Zebra hot-swap: time a shift-change swap in the real posture — gloved, device on a strap, in a cold store — rather than at a desk. Does the current access path survive that?",
      "Ring put serviceability in the bracket rather than the body. Could Zebra's cradle carry service access that the device currently has to?",
      "This theme is five brands. Before acting on it, verify whether the same pattern appears in Honeywell's and Datalogic's current rugged lines — if it does, this is category convergence rather than a direction to lead."
    ]
  },
  {
    id: "form-follows-body-and-posture",
    name: "Mass and Fit Are Specified Before the Feature Set",
    problem: "Worn all shift. Where does the weight sit, what touches the body, and which posture is it really designed for?",
    productPractice: "Load path and contact area are treated as architecture — decided early and protected — rather than as an ergonomics review applied to a finished package. Several products move mass off the body entirely.",
    cases: [
      // ===== W45 ADDED 2026-11-10 =====
      { report: "Aina Ring", at: "Mass is placed before the feature set", layer: "product-fact",
        note: "The band does not close, and the whole module sits on one side of the finger, so where the mass lands is settled before anything else about the ring is." },
      { report: "XREAL 1 Pro+",           at: "Treat optical fit as product architecture", layer: "product-fact",      note: "The most explicit statement in the corpus. 'Spread load without losing alignment' names the real conflict: comfort and optical accuracy pull against each other." },
      { report: "Meta VR Glasses",        at: "Mass moves away from the bridge of the nose", layer: "product-fact",    note: "'Thickness is carried along the side' and 'Compute becomes a separate handheld object' — two different load strategies in one product." },
      { report: "XREAL AURA",             at: "Remote compute mass",                       layer: "product-fact",      note: "Compute moved off the head onto a tether. 'Interchangeable contact' makes the contact part itself a variant." },
      { report: "Ray-Ban Meta Audio",     at: "Wearability is the real specification",     layer: "vendor-claim",      note: "Stated as the governing specification. 'A small part defines long wear' and 'Flexible fit meets rigid hardware' describe the hinge conflict concretely." },
      { report: "Ray-Ban Meta (Gen 3)",   at: "Geometry matters more than weight alone",   layer: "analyst-inference", note: "An explicit argument against gram-count as the comfort metric — useful because it is falsifiable and testable." },
      { report: "Apple iPad mini and MacBook Pro", at: "Thickness shifts grip load",       layer: "product-fact",      note: "'Keep a tablet in one hand' and 'Separate pointing from holding' — the hand doing two jobs is the stated constraint." },
      { report: "Logitech Zone Vibe Pro", at: "Structure carries a soft contact band",     layer: "visible-structure", note: "Load-bearing structure separated from the contact surface, so each can be tuned independently." },
      { report: "Turtle Beach Stealth Flip Wireless Controller", at: "Grip mass and clearance", layer: "product-fact",  note: "Mass distribution evaluated across both mechanical configurations, not just one." },
      { report: "Sharpa D01 · W02 · AE01", at: "Let the data interface follow the hand",   layer: "product-fact",      note: "'Reduce the envelope with a clear reference' — the envelope is specified against the hand before the sensing is placed." },
      { report: "iPhone Duo",             at: "The opened product reads as a held workspace", layer: "analyst-inference", note: "Posture claim about the open state; the hinge detents define which postures are actually supported." },
      { report: "Galaxy Tab S12 Ultra",   at: "Keyboard changes working posture",          layer: "product-fact",      note: "The accessory changes the posture, so posture becomes a configuration rather than a property." },
      { report: "adidas FREERIDER 2027",  at: "Design the contact patch intentionally",    layer: "product-fact",      note: "The only case in the corpus where the contact patch is also the performance surface." },
      { report: "Sigma fp2",              at: "A hinge changes the shooting silhouette",   layer: "product-fact",      note: "A screen hinge that changes which posture the camera supports — the lightest case here." }
    ],
    inferenceShort: "Two strategies get confused: redistribute the mass on the body, or move it off the body onto a tether. The second trades comfort for cable management.",
    limitShort: "Eleven of thirteen are worn by choice for an hour or two. Nothing here is measured over a full shift, including the claim that geometry beats weight.",
    inference: "Two distinct strategies are visible and are often confused: REDISTRIBUTE the mass on the body (Meta's temples, Logitech's contact band, Turtle Beach's grip) or REMOVE it from the body entirely onto a tether (XREAL's puck, Meta's handheld compute). The second trades a comfort problem for a cable-management problem, and no report in this corpus evaluates that trade over a full shift.",
    notSupporting: [
      { case: "Sony ELF-MN1",  why: "A fixed desk display. 'Track the observer position' adapts the image to the viewer, which is not a load or posture decision about a worn product." },
      { case: "Amazfit T-Rex Dual Solar", why: "'Charge while worn' is a power-path decision; the report makes no load or fit argument." }
    ],
    counts: { reports: 14, brands: 10, families: 13, events: 11,
      note: "Meta supplies three of the thirteen, all from the same W39 cycle, and XREAL two. Ten independent brands with Aina added — and the wearables evidence is still more concentrated than the report count suggests." },
    limits: "Twelve of fourteen are consumer products worn by choice for an hour or two. Zebra's wearables are worn under instruction for eight to twelve hours, and no report here measures anything over a full shift — the Ray-Ban Gen 3 report says geometry beats weight but does not test it over time either. The tether strategy in particular is unvalidated for a working environment: moving mass to a belt pack is only a win if the cable survives the shift.",
    zebraQuestions: [
      "The 'geometry beats weight' claim is the single most testable thing in this corpus and it contradicts how wearable comfort is usually specified. Run it: same mass, different load paths, measured at hour eight rather than at fitting.",
      "For the tether strategy, the open question is not comfort but failure — what does a belt-pack cable do across a full shift of reaching, twisting and docking? Compare against a self-contained unit on the same route.",
      "Logitech separates load-bearing structure from the contact band so each can be tuned separately. Does Zebra's current wrist-mount do both jobs with one part, and what would separating them cost?"
    ]
  },
  {
    id: "feedback-addressed-to-a-reader",
    name: "Feedback Is Specified by Who Has to Read It",
    problem: "Not whether a product shows its state, but who the cue is for: the operator, a bystander, or a remote supervisor.",
    productPractice: "The cue is placed, sized and chosen according to the reader. Operator cues sit in the working sightline; bystander cues are readable across a room and increasingly structural rather than electronic; fleet cues are aggregated onto a dashboard and verified before the work starts.",
    cases: [
      // ===== W45 ADDED 2026-11-10 =====
      { report: "Honda RN0", at: "Put the readout in the sightline it is read from", layer: "product-fact", reader: "operator",
        note: "The display is recessed flush into the top tube, in the rider's downward sightline, instead of clamped to the handlebar where a bike computer normally goes." },
      { report: "Sony ECM-W5",            at: "Keep feedback in the working position",     layer: "product-fact",      reader: "operator", note: "Pairing, gain and backup-recording state put where the operator already holds the kit. 'Label the direction of the signal' resolves which unit is which." },
      { report: "XREAL 1 Pro+",           at: "Keep feedback close to the wearer",         layer: "product-fact",      reader: "operator", note: "Same rule on a head-worn product, where the sightline is the display itself." },
      { report: "Amazfit T-Rex Dual Solar", at: "Modes are visible",                       layer: "product-fact",      reader: "operator", note: "'Readable in direct sun' makes the environment part of the feedback specification, which most of the corpus leaves out." },
      { report: "instax mini Evo 2",      at: "Preview on device",                         layer: "product-fact",      reader: "operator", note: "Live preview placed before a deliberate print, so the irreversible step is the one that gets confirmation." },
      { report: "Turtle Beach Stealth Flip Wireless Controller", at: "Read two modes",     layer: "visible-structure", reader: "operator", note: "The mechanism's own geometry carries the cue — no indicator involved. 'Mark active surfaces' handles the ambiguous case." },
      { report: "Signode AMR Portfolio",  at: "Color becomes a configurable safety signal", layer: "product-fact",     reader: "bystander", note: "The clearest bystander case in the corpus: colour, 360° rings and hazard striping as one language for a shared human/robot aisle. 'Shuttle alignment becomes visible, not assumed' states the principle." },
      { report: "Ring 2026 Camera Family", at: "A lens with a physical boundary",          layer: "product-fact",      reader: "bystander", note: "A structural answer to a bystander question — the boundary is moulded, not rendered, so it cannot be switched off." },
      { report: "Ray-Ban Meta Audio",     at: "No lens-corner camera eye",                 layer: "product-fact",      reader: "bystander", note: "The strongest version: the capability is removed so the cue is the absence of hardware. An entire SKU answering a legibility question." },
      { report: "Ferrari F80",            at: "Opening is an operating state",             layer: "product-fact",      reader: "bystander", note: "Body geometry reports state to anyone nearby. 'Use a boundary to make function readable' is the same rule in surface terms." },
      { report: "Skydio F10 Lightrunner", at: "Readiness is a fleet property",             layer: "product-fact",      reader: "fleet",     note: "Readiness is established by the dock and verified before a mission is allowed to start — it is a precondition, not a status display." },
      { report: "Logitech Rally System 2 Pro", at: "The room appears as a managed object", layer: "analyst-inference", reader: "fleet",     note: "'Small displays make state public' is the local half of the same system." },
      { report: "Panasonic TOUGHBOOK 34", at: "Make attachment states obvious",            layer: "product-fact",      reader: "operator",  note: "Whether a module is seated is a state worth showing — the kind of cue that only matters once accessories are architecture." },
      { report: "Apple HomeView",         at: "Show whose experience is active",           layer: "product-fact",      reader: "bystander", note: "A shared device declaring whose session is live, which is the household version of a multi-operator shift." },
      // CASE WITHDRAWN 2026-11-08 with the report — "Red Bull RB22" at "Design for the people
      // around the product". This was a sound citation: the pit-crew case is the corpus's purest
      // bystander-reader example, and V5 moved it here specifically because it did not fit the
      // second-row claim it had been filed under. It goes because the report goes, not because
      // the evidence failed. The theme loses one bystander case and keeps five; the structural-cue
      // inference rests on Ring, Ray-Ban Meta and Ferrari, none of which is affected.
      { report: "Tesla Roadster",         at: "Put critical information near the sightline", layer: "product-fact",    reader: "operator",  note: "This heading is a genuine analytical-section fact and is the ONLY feedback claim in the Roadster report that survives. The light-cue claim it was cited for in V3/V4 is an apply card — see the audit on the OBSERVATIONS entry." }
    ],
    inferenceShort: "The shift is that the bystander cue is becoming structural rather than electronic — and a moulded or absent feature cannot be disabled by firmware.",
    limitShort: "The three-reader split is our reading, not one any report draws. And none of them tests whether a cue is actually read correctly under workload.",
    inference: "The interesting shift is not that products report state — they always have — but that the bystander cue is increasingly STRUCTURAL rather than electronic. Ring moulds the boundary, Meta deletes the camera, Ferrari uses body geometry. A moulded or absent feature cannot be disabled by firmware, which is a stronger guarantee than an indicator and is the actual news here.",
    notSupporting: [
      { case: "Alpine A310 VISION",  why: "'Use activation to reveal identity' is brand recognition — the older job, not state reporting." },
      { case: "Teenage Engineering EP-35", why: "'A hatch that lights itself' is task illumination." },
      { case: "Sharpa D01 · W02 · AE01", why: "Only a hardware spec (five LRA motors, 256 levels) is in the analytical text; 'Make feedback mean a task state' is an apply card, and the report explicitly warns that more levels do not prove interpretability." }
      // Tesla Roadster is NOT listed here even though its light-cue claim failed: a different
      // heading in the same report ("Put critical information near the sightline") does support
      // the theme, so it appears in `cases` instead. A report is judged claim by claim, not
      // admitted or rejected whole — the light audit lives on the OBSERVATIONS entry.
    ],
    counts: { reports: 15, brands: 15, families: 15, events: 15,
      note: "Every case is a different brand on a different occasion — the only theme in the set with no shared-parent or shared-event discount. That independence, not the report count, is why this is the strongest theme here. Was 15 until the Red Bull RB22 report was withdrawn on 2026-11-08, and is back to 15 with Honda RN0 from W45 — a different brand on a different occasion again, so the no-discount property still holds. It remains the widest-sourced theme in the set." },
    limits: "The three-reader split is OUR reading, not a distinction any report draws itself; no product in the corpus is described as designing different cues for different audiences deliberately. The bystander group is also the one most shaped by regulation and platform policy rather than design choice, which this corpus cannot separate. And none of these reports measures whether a cue is actually read correctly under workload — Sharpa's report is the only one that raises the question, and it raises it as a caution.",
    zebraQuestions: [
      "Zebra's scan feedback is addressed almost entirely to the operator. Who else in a store or DC needs to read a device's state — the supervisor, the customer being scanned near, the person sharing the aisle with a robot — and is any cue currently aimed at them?",
      "The structural-cue finding is the actionable one: is there a Zebra state currently shown by an LED that could instead be carried by a moulded, mechanical or absent feature, so it cannot be turned off in software?",
      "Skydio treats readiness as a precondition the dock verifies, not a status the operator checks. Could a Zebra cradle refuse to release a device that is not shift-ready, rather than displaying that it is not?",
      "Before any of this: test whether the cues already shipping are read correctly by a worker under load. Sharpa's caution applies directly to Zebra's own multi-colour LEDs."
    ]
  }
];

// Reports that belong to NO cross-case theme. The review document explicitly permits this (§10.1
// step 3: "允許案例不進入任何跨案例主題；不要為配合五個候選主題而硬塞") and listing them is
// what stops the five themes from quietly absorbing everything. Each is still a valid report and
// still appears everywhere else on the site — it simply does not evidence a cross-case pattern.
const UNCLUSTERED = [
  { report: "BRABUS BODO",            why: "Exterior identity, proportion and a rear light signature. No interaction, service or posture argument." },
  { report: "DS F3VER",               why: "Volume, light architecture and finish. Its 'optical depth depends on a physical architecture' is a surface-craft observation." },
  { report: "Opel STX Concept",       why: "Proportion and aero at the body boundary." },
  { report: "Alpine A310 VISION",     why: "Entirely about identity and illumination as recognition — actively argues against the state-channel reading it was cited for in V3/V4." },
  { report: "Jetta M6",               why: "Exterior crease, aero target and packaging. Its two interior headings are screen layout, not control selection. Cited in V3/V4 for a dial that only exists in an apply card." },
  { report: "Renault E-Space Concept", why: "Interior volume and spatial organisation. 'Position information separately from touch' is close to the controls theme but is about screen architecture, not about which action keeps a control." },
  { report: "Sony ELF-MN1",           why: "A fixed single-viewer desk display. Was wrongly cited under compute-offload in V3/V4; its report argues the opposite ('without a headset'). Genuinely interesting and genuinely unlike anything else in the corpus." },
  { report: "ANYmal Door Access",     why: "CANDIDATE SIXTH THEME, not a miss. Its real subject — a robot designed around installed plant infrastructure rather than the reverse — rhymes with Logitech's 'Mount geometry reduces labor' and Ring's 'Power choice changes installation'. Three cases across three brands is enough to watch and not enough to declare. Revisit next period rather than forcing it into one of the five." }
];

// ===== DESIGN BRIEFS — THE "I AM WORKING ON X" MODE ==========================================
// NEW IN V5. Everything else on this site is organised by where the evidence CAME FROM — by
// report domain, by week, by theme. That is the wrong index for the person who actually has to
// use it. A designer starting a handheld does not think "let me read the automotive page", and
// so never finds Ferrari's rule about which control survives, or the Kindle case where Amazon
// agreed a control was worth keeping and then refused to pay for it on the base device. The
// cross-domain transfer is the whole value of this corpus and it was the hardest thing to reach.
//
// A brief re-indexes the same data by Zebra product type. It invents nothing: every case it
// points at is already a verified case on a THEME, and `pick` is validated against that theme's
// own case list, so a brief cannot cite evidence the theme does not hold.
//
// HONESTY RULES, carried over from everything V5 fixed:
//   · `baseline` is only filled in where it was actually checked on zebra.com and carries its
//     source. Where it was not checked it says so — `{ unchecked: true }` — rather than being
//     guessed. Recommending something Zebra already ships is the failure the baseline gate
//     exists to prevent, and inventing the baseline to avoid that is worse.
//   · `skip` says which themes do NOT apply to this product and why. A brief that found every
//     theme relevant would be doing no filtering and would be worth nothing.
//   · `firstTests` are questions, not features. Same rule as ZEBRA_PRIORITIES after §8.1: the
//     corpus can say what other industries did, never that Zebra should copy it.
const DESIGN_BRIEFS = [
  {
    id: "handheld",
    name: "Handheld computer",
    examples: "TC53 / TC58 · MC9400 · EDA-class",
    lead: "You are not short of physical controls. The open question is what each one is spent on, and who — besides the operator — can tell what the device is doing.",
    themes: [
      { id: "physical-controls-for-critical-actions",
        why: "Six remappable keys already. Every one is momentary, so none of them declares anything.",
        pick: ["Sigma fp2", "Ferrari Luce", "Kindle 2026 Family"] },
      { id: "feedback-addressed-to-a-reader",
        why: "Every cue a Zebra handheld gives faces the hand holding it. Nothing is aimed at anyone else.",
        pick: ["Ray-Ban Meta Audio", "Signode AMR Portfolio", "Panasonic TOUGHBOOK 34"] },
      { id: "accessories-make-a-work-platform",
        why: "Trigger Handle, Boot, hand strap and cradle all mount to one body that was never published as an interface.",
        pick: ["Sigma fp2", "adidas FREERIDER 2027", "OPPO Find X10 Series"] }
    ],
    skip: [
      { id: "form-follows-body-and-posture", why: "Relevant but thin here — the corpus is about worn products, and a handheld is set down. Use it for the wearable brief instead." },
      { id: "service-access-as-architecture", why: "Zebra already ships hot-swap, and the corpus's strongest case is a direct competitor doing the same thing. Nothing here is a lead. The rugged-tablet brief takes it further." }
    ],
    baseline: {
      ships: "Dual dedicated scan buttons, a dedicated PTT key and a remappable key map on TC53/TC58; six programmable keys doubled by the Blue modifier on VC8300-10; four programmable buttons on WS50; a gun-style Trigger Handle accessory.",
      source: "https://www.zebra.com/us/en/products/spec-sheets/mobile-computers/handheld/tc53-tc58.html"
    },
    firstTests: [
      "Which of your existing keys is spent on a MODE rather than a momentary action? On the evidence here, that is the one worth having.",
      "The Kindle question, and it is commercial not technical: is a control still worth keeping if it ships in an accessory rather than in the box?",
      "Can anyone other than the operator tell what the device is doing? If not, is that a problem in your deployment — or not one at all?"
    ]
  },
  {
    id: "wearable",
    name: "Wearable scanner",
    examples: "WS50 · RS5100 · HD4000 · wrist and ring form factors",
    lead: "The corpus is strongest here, and least applicable here. Eleven of thirteen wearable cases are consumer products worn by choice for an hour. Yours is worn under instruction for twelve.",
    themes: [
      { id: "form-follows-body-and-posture",
        why: "The one theme where load path is treated as architecture rather than as an ergonomics review at the end.",
        pick: ["XREAL 1 Pro+", "Logitech Zone Vibe Pro", "Meta VR Glasses"] },
      { id: "feedback-addressed-to-a-reader",
        why: "A wrist device is read at a glance, in whatever light the floor happens to have.",
        pick: ["Amazfit T-Rex Dual Solar", "XREAL 1 Pro+"] },
      { id: "physical-controls-for-critical-actions",
        why: "Gloves are the only working constraint anywhere in this corpus, and two cases are built around it.",
        pick: ["Antigravity A1 Follow Me Bundle", "Panasonic TOUGHBOOK 34"] }
    ],
    skip: [
      { id: "accessories-make-a-work-platform", why: "A wearable is itself the accessory. Nothing in the corpus speaks to mounting things onto one." },
      { id: "service-access-as-architecture", why: "No wearable case in the corpus designs its own service access; adidas is the closest and it is a shoe." }
    ],
    baseline: { unchecked: true },
    firstTests: [
      "Does your wrist mount ask one part to carry the load AND be the thing that touches skin? Logitech splits them so each can be tuned separately.",
      "Run the geometry-beats-weight claim properly: same mass, different load paths, measured at hour eight rather than at fitting.",
      "Are your state cues readable in the lighting your workers actually stand in? Amazfit is the only case here that treats the environment as part of the spec."
    ]
  },
  {
    id: "fixed-scanning",
    name: "Fixed scanning & machine vision",
    examples: "FS40 / FS70 / FS80 · CV60 / CV70 · VS40 / VS70",
    lead: "These sit in shared workspaces with no operator standing at them. That makes the bystander the primary reader — the one group Zebra's feedback has never been aimed at.",
    themes: [
      { id: "feedback-addressed-to-a-reader",
        why: "The strongest theme in the corpus, and its bystander half is exactly this situation.",
        pick: ["Ring 2026 Camera Family", "Ray-Ban Meta Audio", "Signode AMR Portfolio"] },
      { id: "service-access-as-architecture",
        why: "A fixed install is serviced in place, on a ladder, in the orientation it was mounted in.",
        pick: ["Ring 2026 Camera Family", "Logitech Rally Bar 2"] }
    ],
    skip: [
      { id: "form-follows-body-and-posture", why: "Nothing here is worn or held." },
      { id: "physical-controls-for-critical-actions", why: "There is no operator at the device to press anything." },
      { id: "accessories-make-a-work-platform", why: "Mounting matters, but as service access — covered by the second theme above." }
    ],
    baseline: {
      ships: "DS3600 LEDs wrap the housing so they read from any position, plus beeper and vibration; CS60 adds a good-decode LED, adjustable tone, haptics and a Direct Decode Indicator projected onto the barcode itself; FS40 carries 360° decode-status lights.",
      source: "https://www.zebra.com/us/en/products/spec-sheets/scanners/ultra-rugged-scanners/ds36x8-hp.html"
    },
    firstTests: [
      "All of that shipped feedback answers “did my scan work”. None of it answers “is this thing capturing me”. Who is actually in frame, and for how much of the shift?",
      "Is this already handled by site signage or regional notice rules? If so the product cue is redundant and the real work is elsewhere.",
      "Ring moulds the boundary rather than lighting it. Could a sensing envelope be indicated structurally, so it cannot be switched off in firmware?"
    ]
  },
  {
    id: "vehicle-mount",
    name: "Vehicle-mount computer",
    examples: "VC8300 · forklift and yard-truck installations",
    lead: "This is the one Zebra product with a direct industry analogue — the corpus contains fifteen vehicle cabins arguing about exactly which control survives a screen.",
    themes: [
      { id: "physical-controls-for-critical-actions",
        why: "Six automotive cases, including the clearest statement in the corpus: analogue cues kept after the mechanical linkage was removed.",
        pick: ["Alfa Romeo Cuorerosso", "Ferrari Luce", "Tesla Model Y"] },
      { id: "accessories-make-a-work-platform",
        why: "One mount language across truck, forklift and van is the same problem Toyota solved across five body sizes.",
        pick: ["Toyota Snowhunter Concept Family", "Panasonic TOUGHBOOK 34"] },
      { id: "feedback-addressed-to-a-reader",
        why: "A driver reads state without looking away from where the vehicle is going.",
        pick: ["Tesla Roadster", "Ferrari F80"] }
    ],
    skip: [
      { id: "form-follows-body-and-posture", why: "Nothing is worn; the mount carries the mass." },
      { id: "service-access-as-architecture", why: "Relevant to the cradle, not to the terminal — and the corpus adds nothing beyond what rugged already does." }
    ],
    baseline: { unchecked: true, note: "VC8300's six programmable keys and its blue application-programmable LED are documented under the handheld brief; the mounting and cradle range was not checked for V5." },
    firstTests: [
      "Alfa kept the analogue cues after removing the steering linkage. Which VC8300 control is the one a driver must find without looking — and is it shaped differently from its neighbours?",
      "Could one mounting and cradle language hold across truck, forklift and van, the way Toyota held one cargo and access interface across five vehicle sizes?",
      "Is critical state in the driver's existing sightline, or does reading it require looking away?"
    ]
  },
  {
    id: "rugged-tablet",
    name: "Rugged tablet",
    examples: "ET40 / ET45 · ET60 / ET65 · L10",
    lead: "The closest direct competitor in the corpus is here — TOUGHBOOK 34 — and it is the only case that treats a battery swap as a state the workflow passes through rather than as maintenance.",
    themes: [
      { id: "service-access-as-architecture",
        why: "Mid-shift swaps, cleaning and port protection are the whole argument, and a direct competitor is one of the cases.",
        pick: ["Panasonic TOUGHBOOK 34", "Logitech Rally Bar 2", "Ring 2026 Camera Family"] },
      { id: "physical-controls-for-critical-actions",
        why: "Glove operation treated as the primary input case, not as an accommodation added afterwards.",
        pick: ["Panasonic TOUGHBOOK 34", "Apple iPad mini and MacBook Pro"] },
      { id: "accessories-make-a-work-platform",
        why: "Keyboards, straps, docks and readers all attach to the same chassis.",
        pick: ["Amazon Alexa Tablets", "Panasonic TOUGHBOOK 34"] }
    ],
    skip: [
      { id: "feedback-addressed-to-a-reader", why: "A tablet's screen is already the feedback channel; the corpus adds little a display cannot do." },
      { id: "form-follows-body-and-posture", why: "Held rather than worn, so the load-path cases do not transfer. The one that does — a keyboard turning a tablet into a different working posture — is on the mobile domain page." }
    ],
    baseline: { unchecked: true },
    firstTests: [
      "Time a shift-change battery swap in the real posture — gloved, on a strap, in a cold store — not at a desk. Does the current access path survive it?",
      "Ring put serviceability in the BRACKET rather than the body. Could your cradle carry service access the tablet currently has to?",
      "Before acting on any of this: check whether Honeywell and Datalogic already do the same. If they do, this is category convergence, not a lead."
    ]
  },
  {
    id: "kiosk",
    name: "Self-service kiosk",
    examples: "CC6000 · customer-facing terminals",
    lead: "The only Zebra product whose primary user is untrained, unsupervised and did not choose to be there. Two cases in the corpus are about exactly that reader.",
    themes: [
      { id: "feedback-addressed-to-a-reader",
        why: "A shared device has to declare whose session is live, and be readable from outside before anyone commits to walking up.",
        pick: ["Apple HomeView", "Logitech Rally System 2 Pro", "Ring 2026 Camera Family"] },
      { id: "physical-controls-for-critical-actions",
        why: "For an untrained user the argument is legibility of the action, not speed of access.",
        pick: ["Citroën 2 CV Concept", "instax mini Evo 2"] }
    ],
    skip: [
      { id: "form-follows-body-and-posture", why: "Fixed installation, nothing worn or carried." },
      { id: "accessories-make-a-work-platform", why: "Configured once at install; the corpus is about accessories swapped during use." },
      { id: "service-access-as-architecture", why: "Genuinely relevant, but no kiosk-scale case exists in this corpus. Borrow from the rugged-tablet brief instead." }
    ],
    baseline: { unchecked: true },
    firstTests: [
      "Can someone tell what the kiosk is doing — and whether it is theirs to use — before they walk up to it? Logitech makes that readable from outside the room.",
      "instax puts a deliberate preview in front of an irreversible act. What can a customer do at your kiosk that cannot be undone, and what sits in front of it?",
      "If the kiosk has a camera, the Ring question applies with no operator present at all to explain it."
    ]
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
  // ===== W45 ADDED 2026-11-10. This is the riskiest of the W45 additions against the newness test:
  // "finish matters" is decades-old ID practice and was rejected before. The claim here is narrower
  // and is about DISCLOSURE — the surface is published as a measurable specification (a colour
  // standard, a piece count, an iteration count, a tuned click), which is what both reports name as
  // the exact Zebra gap. The four images are deliberately four different subjects: the two motorola
  // CMF macros are the same crop in two colourways, so only one of them is used.
  {
    keyword: "The Finish Is Written Down",
    statement: "Surface is specified like a component — a colour standard, a named weave, a count of pieces and iterations — not described in adjectives.",
    detail: "BYD publishes 48 metal pieces across 11 locations, refined over 30 iterations, with the switches tapped by small hammers to tune their sound. motorola names its backs to a PANTONE standard and engraves the audio and camera specifications into the brushed plane above the weave.",
    evidence: ["Yangwang Altior", "motorola signature 27"],
    mediaRatio: "16/9",
    images: [
      "https://assets.motorola.com/global/zeus/moto_signature_27_zeus_pdp_page_design_desktop_2.png",
      "https://assets.motorola.com/global/zeus_2027/motorola_signature_27_pdp_highlights_03_d_.jpg",
      "https://paultan.org/image/2026/11/Yangwang-Altior-official-grille-1200x675.jpg",
      "https://paultan.org/image/2026/11/Yangwang-Altior-Shanhe-Dingyun-door-panel-1200x750.jpg"
    ] },
  {
    // Newness test: three years ago product colour was overwhelmingly mood and SKU
    // differentiation. In this period's corpus colour is repeatedly given a *referent* —
    // it names a zone, an operator, a safety state or a cable's job.
    keyword: "Every Colour Points at Something",
    statement: "Pick a colour on any of these products and it names something: a zone, an operator, a safety state, a cable's job.",
    // EVIDENCE FIX 2026-11-04 (V5) — "Teenage Engineering codes cables by function" removed, and
    // EP-35 dropped from `evidence`. "Color-code cables by function" is one of that report's four
    // What-Zebra-Can-Apply cards, so it was a suggestion to Zebra being quoted as something TE
    // ships. The remaining five cases are all observed in analytical sections.
    detail: "Renault colour-codes cabin zones; Ferrari F80 marks the primary operator's seat. Signode makes AMR colour a configurable safety signal, and Antigravity leaves the watch one colour cue.",
    evidence: ["Renault E-Space Concept", "Ferrari F80", "Signode AMR Portfolio", "Antigravity A1 Follow Me Bundle", "Kindle 2026 Family"],
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
    // EVIDENCE FIX 2026-11-04 (V5), two separate problems in one sentence:
    //   · "Logitech publishes Zone Vibe Pro's spare parts" — "Serviceability appears in the parts
    //     story" is an apply card in that report, not something Logitech was observed doing. The
    //     product stays in `evidence` for its visible split lines, but the spare-parts claim goes.
    //   · "Brands spent two decades hiding the joins" — nothing in the corpus measures two decades
    //     of anything. The reversal is real and is argued properly in the newness note above; the
    //     invented interval was doing the persuading, so it is replaced with the baseline the file
    //     can actually defend.
    keyword: "Seams Are Drawn Now, Not Erased",
    statement: "The premium cue used to be the absence of a seam. Now the component boundary is styled back onto the outside, because the part behind it is meant to come off.",
    detail: "Citroën gives the 2 CV's bumper its own visible border and FIAT's spoiler declares where it reconfigures; Logitech draws Rally Bar 2's split lines on the outside; adidas marks the wear zones with finish changes.",
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
    // EVIDENCE FIX 2026-11-04 (V5) — Apple iPad mini and MacBook Pro removed. The claim here is
    // that ONE product's outline changes to report its live mode. Apple's case was an iPad and a
    // MacBook: two different products that happen to accept the same input. A difference between
    // two SKUs is not one object reconfiguring, and treating it as such is exactly the substitution
    // the review doc §10.3 forbids. Its image went with it.
    //
    // This leaves two cases, which is the floor for a trend rather than a comfortable margin — and
    // one of them (iPhone Duo) is a W39 carry-over, so this period contributes a single new case.
    // Held at two rather than padded back to three; if nothing joins it next period it should drop
    // to OBSERVATIONS.
    keyword: "The Signature Shape Stopped Being Fixed",
    statement: "The outline a brand once held fixed as its signature is now spent on telling you which working mode is live.",
    detail: "Turtle Beach's stick modules flip over bodily, so the controller's outline — not a light or a label — tells you which thumb-input mode is live. The iPhone Duo's hinge turns a fold into its own standing posture.",
    evidence: ["Turtle Beach Stealth Flip Wireless Controller", "iPhone Duo"],
    mediaRatio: "16/9",
    images: [
      // Turtle Beach · "Read two modes" — both module orientations in one frame, which is the
      // claim itself. Chosen over "Two thumb surfaces", which shows only one state.
      "https://cdn.shopify.com/s/files/1/0556/5795/5430/files/9_Stealth_Flip_Wireless_Controller_2400x1350_cfc14314-2ab5-4864-bdf5-b64cce9b651b.png?v=1788979376",
      // iPhone Duo · the hinge holding its own standing angle, already cited by the mobile
      // domain trend "Hinge Becomes a Self-Standing Mode".
      "https://cdn.mos.cms.futurecdn.net/BWjEcLrmjEaRDGw4enTc6P.jpg"
    ]
  },
  {
    // ADDED 2026-11-04 (V5), answering review doc §6.4. The three entries above all resolved into
    // a state declaration — colour names a state, the seam declares removability, the silhouette
    // reports the mode — and §6.4 asks for aesthetic analysis that does not collapse every item
    // into "this tells you something": volume and proportion, soft-to-hard transitions, technical
    // versus contact zones, part lines, gloss and texture contrast. This entry is about material
    // and where it is spent. Nothing here declares a state.
    //
    // NEWNESS TEST — premium material used to be distributed by VISIBILITY: the surfaces a buyer
    // looks at in a showroom got the good finish, which is why cars had soft-touch dashboards
    // nobody leans on. What these products do instead is allocate it by CONTACT, and the two no
    // longer coincide — adidas spends it on a sole, and Logitech puts its one soft band on a
    // structure built to be the opposite of soft. A showroom-driven CMF strategy would not
    // produce either.
    //
    // EVIDENCE CHANGE 2026-11-08 — the Red Bull RB22 case is gone with its report. It was the
    // sharpest illustration here (a finished contact edge inside a car almost nobody sees the
    // inside of, so there is no showroom justification for it at all), and losing it costs this
    // entry its cleanest proof that visibility and contact have come apart. The claim still
    // stands on five reports; it is stated less vividly than it was.
    //
    // EVIDENCE INDEPENDENCE — five reports but four independent sources: Alfa Romeo and Peugeot
    // are two Stellantis marques from one Mondial press day. Read it as four.
    keyword: "Material Is Spent Where the Body Lands",
    statement: "The soft, the warm and the finely textured are being concentrated on the few square inches a person actually touches, and withheld everywhere else — so the surface map now follows the body rather than the sightline.",
    detail: "Alfa Romeo concentrates its tactile richness at the points of contact and leaves the rest machined. Peugeot keeps soft and machined materials visibly distinct rather than blending them. Tesla reserves its premium expression for where the body meets the cabin. Logitech carries a soft band on a structure that is deliberately not soft, and adidas separates how a surface feels from what it has to do mechanically.",
    evidence: ["Alfa Romeo Cuorerosso", "Peugeot RCZ Vision", "Tesla Model Y", "Logitech Zone Vibe Pro", "adidas FREERIDER 2027"],
    mediaRatio: "16/9",
    images: [
      // Alfa Romeo Cuorerosso · "Tactile richness is concentrated where bodies touch"
      "https://images.autoexpress.co.uk/autoexpress/2026/10/Alfa%20Romeo%20Cuorerosso-21.jpg?w=1260&h=710&fit=crop&q=75&auto=format%2Ccompress&dpr=1",
      // Tesla Model Y · "MY_Interior_Front_02", from the Tesla report's own image set. Promoted
      // into the grid on 2026-11-08 to fill the slot the withdrawn Red Bull shot left. It is the
      // weaker picture and the note below says why — a wide interior view in which the contact
      // zone is present but is not the subject. Kept because four filled cells read better than
      // three, not because it illustrates the claim as well as the shot it replaces.
      "https://www.topgear.com/sites/default/files/2025/01/MY_Interior_Front_02.jpg",
      // Logitech Zone Vibe Pro · "Structure carries a soft contact band" — the soft/hard split is
      // visible as two separate parts in one frame.
      "https://resource.logitech.com/w_544,h_544,ar_1,c_fill,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/headsets/zone-vibe-pro/gallery/graphite/zone-vibe-pro-headset-graphite-lifestyle-gallery-4.jpg",
      // adidas FREERIDER 2027 · "Separate texture from material performance" — the sole, where
      // feel and mechanical function are explicitly not the same specification.
      "https://www.bikeradar.com/resources/content/32337f2f-7841-4ef6-a233-d1f001580530/fbf3ce62-f438-47b2-a2d5-fbfff07117af/c8c01305-1589-4ac9-b9ab-f5d81c7307cf/adidas-Freerider-Pro-sole-scaled.jpg?preview=false&platform=WEB&deviceId=62acf397-4952-4f26-966e-a704cf065c37"
      // FIAT's "Multiplay-10" is the one cited shot still not used: a wide interior view where
      // the contact zone is present but not the subject, and four images is the grid cap.
    ]
  }
];

// Per-domain trend breakdowns — these feed the "Trending Keywords" cloud and each
// domain card's trend count. Distinct from TOP_SIGNALS, which are cross-domain synthesis.
const DOMAIN_TRENDS = {
  automotive: [
    // ===== W45 ADDED 2026-11-10 (two entries). Checked against every existing automotive entry for
    // a merge first; neither matches one. "Deleting a Part Reopens the Layout" is not "Declared
    // Service Boundaries" (that is about reading repair scope off the body) and not "Price Tiers
    // Gated by Software" (one shell, several tiers). Transport interiors are filed here because
    // Automotive & Mobility is the mobility domain.
    { keyword: "Deleting a Part Reopens the Layout", statement: "Removing a mechanical dependency is used as a packaging move: what the part occupied becomes new room, and the body is redrawn around the absence.", application: "Before adding anything to a Zebra handheld, test what a deletion would free — a removed trigger, key or port reopens grip, port placement and internal volume that an addition can only consume.", evidence: ["Yamaha RW700 Explore", "Honda V3R 900 E-Compressor"], heroOverride: "https://cdn2.yamaha-motor.eu/prod/product-assets/2027/RW700DX/2027-Yamaha-RW700DX-EU-NA-Detail-010-03.jpg" },
    { keyword: "Settings Follow the Person, Not the Seat", statement: "A position is stored as a named situation that travels with the passenger to the next journey, instead of an adjustment lost when they leave the seat.", application: "Carry a worker's handedness, grip and trigger sensitivity between shared Zebra devices the way language, display and sound already travel, so a shift change does not restart the setup.", evidence: ["Singapore Airlines Next-Generation Cabin"], heroOverride: "https://mainlymiles.com/wp-content/uploads/2026/11/SQ-2027-F-Star-Button-Singapore-Airlines-768x512.jpg" },
    { keyword: "The Dial That Declares Drive Mode", statement: "The physical control that survives a screen-first cabin is specifically the one that declares which mode is active — not the one that is merely convenient.", application: "Give vehicle-mounted computers and cradles one distinctly shaped physical control that states the device's operating mode, rather than a touch target that has to be woken and read before the mode is known.", // EVIDENCE FIX 2026-11-04 (V5) — Jetta M6 removed here for the same reason as in the top signal
    // of the same name: the report's only dial is an apply card, and it is about the most-used
    // function rather than the drive mode.
    evidence: ["Ferrari Luce", "Tesla Model Y", "Ferrari F80"], heroOverride: "https://images.autoexpress.co.uk/autoexpress/2026/10/Alfa%20Romeo%20Cuorerosso-25.jpg" },
    // REMOVED 2026-11-04 (V5) — "Light Reports State". It rested on exactly two cases and neither
    // survived the audit recorded on the OBSERVATIONS entry: Tesla's "tie light cues to state" is
    // an apply card, and Alpine's illuminated wordmark is the recognition signature this trend
    // claimed to be moving away from. With both gone there is no evidence left, so the trend is
    // deleted rather than reworded. The automotive page now shows one fewer trend; that is the
    // correct count, not a gap to fill.
    // EVIDENCE CHANGE 2026-11-08 — Red Bull RB22 removed with its report. Both remaining cases
    // are Ferrari, so this is now a one-brand trend. It is kept rather than deleted because the
    // automotive list already carries single-report trends on the same footing (Snowhunter,
    // Jetta M6, Roadster) and the two evidence chips make the single brand plain on the card.
    // If no second marque shows up next period, this should be demoted, not restated.
    { keyword: "Moving Hardware Needs a State Model", statement: "Moving aerodynamic and body geometry is engineered as a stateful control system with declared locked, transitional and failed states — not a styling flourish.", application: "Define locked, transitional and failed states as explicitly as an active wing for auto-release dock latches and adjustable mounts.", evidence: ["Ferrari F80", "Ferrari Luce"], heroOverride: "https://www.topgear.com/sites/default/files/2025/07/6-Ferrari-F80-review-2025.jpg" },
    { keyword: "Control Authority Reaches the Second Row", statement: "Non-primary occupants are being given real control surfaces rather than more space — role is now expressed as authority over the system.", application: "In multi-operator vehicle computing, assign actual control authority per role (driver versus dock worker) instead of giving the second role a read-only screen.", // EVIDENCE FIX 2026-11-04 (V5) — Red Bull RB22 removed. The RB22 is a single-seat F1 car: it has
    // no second row and no passenger, so it cannot evidence a claim about non-primary occupants
    // getting control surfaces. The report's analytical text is about the occupied zone and the
    // surrounding team, which was close enough in wording to pass unnoticed and is not the same
    // claim. Ferrari Luce, F80 and Model Y all genuinely describe passenger-side controls.
    evidence: ["Ferrari Luce", "Ferrari F80", "Tesla Model Y"] },
    { keyword: "One Equipment Language Across a Vehicle Range", statement: "A single equipment grammar — cargo, protection, access — is carried unchanged across five vehicle sizes, rather than restyled for each platform.", application: "Specify one mounting, cargo and protection language for Zebra's vehicle-mount range and hold it across truck, forklift and van installations, so a technician trained on one cab can service another without relearning where anything is.", evidence: ["Toyota Snowhunter Concept Family"], heroOverride: "https://i0.wp.com/gearheaddaily.com/wp-content/uploads/2026/10/toyota-snowhunter-concept-sema-2026-tundra-tacoma-4runner-gallery-43.jpg" },
    { keyword: "Declared Service Boundaries", statement: "Concepts make repair and reconfiguration boundaries visible on the body, instead of hiding every seam inside one shell.", application: "Give rugged handhelds and vehicle-mounted computers a visibly distinct, independently replaceable impact boundary, separate from a legible accessory-reconfiguration boundary, so a technician can read repair scope versus reconfiguration scope directly from the housing without full teardown. Toyota's Snowhunter extends the same logic to a dirty/clean zone split a gloved hand can read in bad weather.", evidence: ["Citroën 2 CV Concept", "FIAT Multiplay", "Toyota Snowhunter Concept Family"], heroOverride: "https://i0.wp.com/lenouvelautomobiliste.fr/wp-content/uploads/2026/10/Citroen-2CV-concept-Le-Nouvel-automobiliste-thibaut-dumoulin-30.jpg?resize=1024%2C683&ssl=1" },
    { keyword: "Viewing Zone Split From Reaching Zone", statement: "Where information is displayed is being separated from where it is touched, instead of assuming one screen serves both jobs.", application: "On vehicle mounts, put the readable display where the eyes already go and the controls where the hand already rests — as screens grow, these stop being the same surface.", evidence: ["Renault E-Space Concept", "Tesla Model Y"], heroOverride: "https://media.renault.com/wp-content/uploads/2026/10/29e955b0a637d2219c0fb074df072df8-l.jpg.webp" },
    { keyword: "Concealed Active Systems Need Unmistakable State", statement: "Hiding complex, active or high-energy hardware behind a calm shell raises the bar for making that hardware's real state obvious before and during activation.", application: "Any concealed sensor, emitter or high-energy accessory on Zebra hardware needs an explicit arm, active and fault signal, with decorative lighting kept visually distinct from a genuine warning.", evidence: ["Tesla Roadster"], heroOverride: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-04-World-Desktop.jpg" },
    { keyword: "Price Tiers Gated by Software, Not Shell", statement: "An entire trim range now shares one shell, with the tier boundary drawn in software and compute instead of in sheet metal.", application: "Keep one chassis visually and mechanically consistent across Zebra product tiers, gating capability by software and compute rather than redesigning the housing per tier.", evidence: ["Jetta M6"], heroOverride: "https://cnevpost.com/wp-content/uploads/2026/10/2026102210152997.jpg" }
  ],
  ai: [
    // ===== W45 ADDED 2026-11-10. Not a merge into "Redundant Capture Needs a Visible Confirmation"
    // — that is about confirming a capture happened; this is about how a limit is published.
    { keyword: "Limits Published as Conditions", statement: "A sensing platform states each limit as a condition — this range, at this target size, in this light — and names which sensor takes over when another runs out.", application: "Publish Zebra scanner and camera limits the same way: the distance at a stated symbol size and light level, plus the fallback that engages beyond it, instead of one unconditional number.", evidence: ["DJI Matrice 5T"], heroOverride: "https://www-cdn.djiits.com/dps/b97ad15e69cde4bba2ca6a675716ea99.jpg" },
    { keyword: "Visible Sensing State, Physical Not Just Software", statement: "Sensing and recording state must be unmistakable, confirmed by a physical cue, not software.", application: "Give mute, listening and capture states the same physical, bystander-legible treatment — a lens cover, mechanical indicator or hardware cue — on any Zebra wearable or camera-equipped device with a mic or camera, so capture state reads without opening an app.", evidence: ["Ray-Ban Meta Audio", "Ray-Ban Meta (Gen 3)", "Ring 2026 Camera Family"], heroOverride: "https://media.ray-ban.com/cms/resource/blob/1855480/0569c828966f15647a99b37f440fece6/rbm-pdp-ho26-aperol-features-capture-cover-data.jpg" },
    { keyword: "Fit, Hinge & Service Parts", statement: "Fit and contact surfaces are being redesigned as a serviceable, swappable system rather than one fixed shape.", application: "Design swappable straps, pads and hinge adjustments as first-class service parts.", evidence: ["Meta VR Glasses", "Ray-Ban Meta (Gen 3)", "Ray-Ban Meta Audio"], heroOverride: "https://cdn.mos.cms.futurecdn.net/Si53kYKWYKYQfks8AVsZNA-1200-80.jpg" },
    { keyword: "Compute Moves Off the Primary Surface", statement: "Power and compute budgets are becoming an explicit, designed workflow state instead of a background spec.", application: "Offload battery and processing to a belt pack or cradle rather than the head- or hand-worn unit, and measure neck and wrist load across a full shift against a self-contained unit rather than at first fitting.", // EVIDENCE FIX 2026-11-04 (V5) — Sony ELF-MN1 removed. This trend is about moving compute off a
    // head- or hand-worn unit onto a tether. The ELF-MN1 is a fixed desk display whose own report
    // argues the opposite case: it delivers a spatial image "without a headset", "rather than
    // relying on a wearable headset". There is no primary surface for compute to move off. It
    // remains correctly cited under "The Tether Is Part of the Product", which is about the cable
    // being designed rather than hidden — a claim its single routed USB-C cord does support.
    evidence: ["Meta VR Glasses", "XREAL AURA"], heroOverride: "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/ManinOffice_V2.width-1300.png" },
    { keyword: "The Tether Is Specified, Not Hidden", statement: "The cable left behind when compute moves off the device is being designed as a named, replaceable part rather than treated as an embarrassment to conceal.", application: "Make the most-flexed cable on any worn or tethered Zebra system a standard, user-replaceable stock line rather than a captive assembly, and publish the routing — then track replacements instead of warranty returns.", evidence: ["XREAL AURA", "Sony ELF-MN1", "Meta VR Glasses"], heroOverride: "https://sony.scene7.com/is/image/sonyglobalsolutions/original_ELF-MN1_005?$jpMediumStaticMainImage$" },
    { keyword: "One Head Shape Can't Be the Default", statement: "Fit variation is being treated as a product-line requirement rather than an accessory size chart — one platform ships in several head-matched silhouettes.", application: "Ship head- and hand-worn Zebra devices as genuine fit variants off one platform, instead of one average size corrected with padding.", evidence: ["Ray-Ban Meta (Gen 3)", "Ray-Ban Meta Audio", "XREAL 1 Pro+"] },
    { keyword: "Fit Is Part of Display Performance", statement: "For a worn display, fit adjustments are a calibration step, not a cosmetic afterthought.", application: "Document nose pad, temple and IPD-style fit adjustments as part of a wearable display's setup and validation process, and test text recognition after a full-shift wear trial, not just at first fitting.", evidence: ["XREAL 1 Pro+"], heroOverride: "https://resource.xreal.com/www-xreal-com/images/hebe/hebe-scene-work-bg-desktop.webp" },
    { keyword: "Redundant Capture Needs a Visible Confirmation", statement: "A backup recording path only earns trust when its state — present, charged, recording — is visible at the point where the operator is already holding the kit.", application: "Pair any Zebra field-audio or evidence-capture accessory with a local backup path and a small, glanceable display showing pairing, recording and remaining capacity at the component the worker is handling.", evidence: ["Sony ECM-W5"], heroOverride: "https://d1ncau8tqf99kp.cloudfront.net/PDP/DI/Accessories/ECM-W5/desktop/hero.jpg" }
  ],
  wearables: [
    // ===== W45 ADDED 2026-11-10. The existing wearables entries are all about power, pairing and
    // gesture fallback; none is about the device holding a decision, so this is a new entry rather
    // than a merge.
    { keyword: "The Worn Device Proposes and Waits", statement: "A worn unit puts a decision in front of the wearer and holds for an answer, instead of measuring them and reporting upward.", application: "If an agent acts through a Zebra worn device, give the wearer a one-thumb approve and dismiss on the device itself, and define what happens when neither is given.", evidence: ["Aina Ring"], heroOverride: "https://www.aina.com/_next/static/immutable/media/aina-ring-render-front-black.39s0q-52gtqqi.webp" },
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
    // ===== W45 ADDED 2026-11-10. Adjacent to "Commitment Gets Its Own Step" but not the same
    // mechanism: that one adds a deliberate step to a workflow, this one scopes a product revision.
    { keyword: "Everything That Changed Sits on the Cable", statement: "A reissue publishes what must not change and confines every update to one named sub-assembly, so the product's age and its modernisation are both legible.", application: "When refreshing a long-lived Zebra accessory, isolate the change to one replaceable sub-assembly and state which parts are deliberately unchanged, so field stock and training stay valid.", evidence: ["Sony MDR-3R"], heroOverride: "https://sony.scene7.com/is/image/sonyglobalsolutions/Product-Intro-Plate_08_M?wid=900" },
    { keyword: "Service Access Designed Into the Mount", statement: "Fixed enterprise hardware is designed so its mount itself provides serviceable access.", application: "Give vehicle-mounted terminals and fixed scanners a controlled service swing or access panel, and measure maintenance time and reach from the actual mounting height.", evidence: ["Logitech Rally Bar 2"], heroOverride: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/rally-bar-2/rally-bar2-video-bar-fast-setup.jpg?v=1" },
    { keyword: "The Room Becomes a Managed Object", statement: "A physical space is being represented as one managed asset with its own readiness state, rather than as a list of the devices inside it.", application: "Model a work cell or vehicle bay as a single managed object with its own readiness state, instead of as separate device records a supervisor has to reassemble.", evidence: ["Logitech Rally System 2 Pro", "Logitech Rally Bar 2", "Skydio F10 Lightrunner"], heroOverride: "https://resource.logitech.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/business/products/video-conferencing/rally-system-2-pro/rally-system-2-pro-modular-solution.jpg?v=1" },
    { keyword: "Threshold Status Made Public", statement: "Availability state is pushed outside the room itself, readable before someone commits to walking in and interrupting.", application: "Give shared Zebra kiosks and mounted terminals the same red/green, distance-readable availability signal instead of hiding status behind a login screen.", evidence: ["Logitech Rally System 2 Pro"], heroOverride: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/business/products/video-conferencing/rally-system-2-pro/rally-system-2-pro-device-space-management-3.jpg?v=1" },
    { keyword: "Shared Screens Adapt to Distance and Identity", statement: "A fixed shared screen changes its information density and access based on who is approaching and from how far, not one generic state for everyone.", application: "Give shared Zebra kiosks and wall terminals a large glanceable state at a distance and a detailed, identity-confirmed control set up close, with every identity switch explicit and reversible.", evidence: ["Apple HomeView"], heroOverride: "https://www.apple.com/newsroom/images/2026/10/meet-apple-homeview-a-new-way-to-enjoy-entertainment-and-manage-the-home/article/Apple-HomeView-FaceTime-Center-Stage-261013_big.jpg.large.jpg" },
    { keyword: "A Physical Control Becomes the Primary Interface", statement: "An existing switch or grip carries the full interface, replacing menu depth.", application: "Give a Zebra handheld's major mode changes a dedicated physical switch position, and ring its carry handle or grip with the controls a worker reaches for first — so lifting the device out of a holster is already most of the setup, without a menu to navigate.", evidence: ["Sigma fp2", "Teenage Engineering EP-35"], heroOverride: "https://assets.teenage.engineering/_img/6ada1e46982c0e6e3c49faf7_4096.webp" },
    { keyword: "Commitment Gets Its Own Step", statement: "An irreversible action is being separated from the capture that precedes it, with a preview placed deliberately in between so the costly step is chosen rather than triggered.", application: "Put an explicit review step in front of any Zebra action a worker cannot undo — a label printed, a pick confirmed, a shipment closed — and show what is about to be committed rather than only confirming afterwards that it happened.", evidence: ["instax mini Evo 2"], heroOverride: "https://asset.fujifilm.com/www/py/files/2026-10/b233641728c6fac08fb1a9232b216fd9/news_14132_06_en.jpg" },
    // FABRICATION REMOVED 2026-11-08 — "The Viewing Envelope Is a Published Dimension". This is
    // the SAME fabricated Sony specification that §4.12 recorded as removed on 2026-11-04. That
    // fix only cleaned the consumer `application` paragraph; this trend, which states the
    // invented claim in its purest form, was missed and has been rendering on the consumer
    // domain page ever since. Its statement read: "A display's usable viewing distance, angle
    // and ambient-light range are published as hard numbers up front, and the housing is then
    // derived from them rather than styled first." Re-verified against the source on 2026-11-08
    // by stripping the tags from weeks/W44/sony-elf-mn1.html and counting: "envelope" 0,
    // "viewing distance" 0, "ambient" 0, "angle" 0, "distance" 0, "lux" 0, "cm" 0, "mm" 0,
    // "dimension" 0. The report publishes no optical envelope and no numbers of any kind. Its
    // analytical headings are "Direct light to each eye" and "Track the observer position" — it
    // steers light per eye and follows the viewer; it does not specify a viewing range.
    // Deleted rather than reworded: the trend rested on one report, and that report says none
    // of this. The consumer page now shows six trends; that is the correct count.
  ],
  sports: [
    { keyword: "Reachable Micro-Adjustment Mid-Task", statement: "Micro-adjustment is placed where a rider can actually reach it mid-task, with the resulting range made measurable.", application: "Quick-adjust dials or buckles should be tested with gloves, mid-task, with the usable range documented.", evidence: ["adidas FREERIDER 2027"], heroOverride: "https://www.bikeradar.com/resources/content/32337f2f-7841-4ef6-a233-d1f001580530/fbf3ce62-f438-47b2-a2d5-fbfff07117af/feed6d6e-06ee-400e-9700-35fed3a08274/adidas-Freerider-Pro-BOA-scaled.jpg?preview=false&platform=WEB&deviceId=62acf397-4952-4f26-966e-a704cf065c37" },
    { keyword: "Friction & Impact Zones, Engineered Separately", statement: "Friction and impact zones are engineered as separate systems rather than one uniform surface.", application: "Map grip, impact and attachment zones independently on any wearable mount, with inspectable, cleanable wear surfaces.", evidence: ["adidas FREERIDER 2027"], heroOverride: "https://www.bikeradar.com/resources/content/32337f2f-7841-4ef6-a233-d1f001580530/fbf3ce62-f438-47b2-a2d5-fbfff07117af/f056788c-0538-4310-a82c-77da5bb459ee/adidas-Freerider-Pro-scaled.jpg?preview=false&platform=WEB&deviceId=62acf397-4952-4f26-966e-a704cf065c37" }
  ],
  mobile: [
    // ===== W45 ADDED 2026-11-10. The domain-level half of the "Ruggedness Stopped Looking Rugged"
    // top signal; kept here as well because the keyword cloud reads DOMAIN_TRENDS, not TOP_SIGNALS.
    { keyword: "Certification Held Inboard", statement: "Ingress and drop ratings are carried without any of the shape cues that used to announce them — no bumpers, no visible armour, just a textile back.", application: "Zebra has the engineering and withholds the vocabulary: no current spec sheet names a housing material or a colour standard, and no product carries IP69K. Naming them is the cheap half of this.", evidence: ["motorola signature 27"], heroOverride: "https://assets.motorola.com/global/zeus/moto_signature_27_zeus_pdp_page_design_desktop_2.png" },
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
