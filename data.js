// Trend Dashboard V3 data model.
// Folder convention: weeks/<W##>/... for weekly-bundled reports, singles/... for standalone reports.
// report.file is ROOT-RELATIVE (resolved against the site root, used by report-viewer.html as an iframe src).

const PERIOD_LABEL = "2026-09-21 – 2026-10-18";

const DOMAINS = [
  { id: "automotive", name: "Automotive & Mobility", accent: "#D40000", // Ferrari red
    blurb: "Fourteen 2026 launches — from Ferrari's first EV to six Stellantis concept cars and Renault, Alpine and Tesla's Paris Motor Show reveals — converge on keeping tactile, locatable controls and legible system state inside increasingly digital, automated cabins.",
    application: "Physical controls survive even as automotive cabins go fully digital. Ferrari, Tesla and six Stellantis concepts all keep real buttons and dials for the actions that matter most, while Renault, Alpine and the Roadster extend the same discipline to cabin layout, repeated identity cues and concealed active systems. Zebra can apply the same discipline to vehicle-mounted computers, giving every automated mount an explicit locked and failed state.",
    cardImage: "https://vrrb-prod-s3.s3.us-west-1.amazonaws.com/strapi/Screenshot_2026_04_01_165401_7665b911db.jpg" },
  { id: "ai",         name: "Sensing & Capture Devices", accent: "#81D8D0", // Tiffany blue
    blurb: "Ray-Ban's audio and capture-enabled glasses, Meta's VR headset, Ring's camera family, XREAL's spatial display and Sony's wireless mic kit all treat sensing state, fit and point-of-use confirmation as explicit design problems.",
    application: "Sensing state has to be unmistakable to the wearer and everyone nearby. Ray-Ban Meta's camera lines and Ring's camera family pair a physical capture cue with swappable fit parts, while XREAL and Sony show that fit calibration and point-of-use state confirmation matter just as much. Zebra can apply the same unmistakable sensing indicator, tactile fallback and visible state confirmation to its worker-worn hardware.",
    cardImage: "https://images.ctfassets.net/a3peezndovsu/54lfzLXdIk48j3MEALH8Vy/50d100a828eef652c87f8cf33c49f360/ring_pan-tilt_indoor_cam_2K_lifestyle_atf_1500x1500_03.jpg?w=1100&q=80" },
  { id: "wearables",  name: "Wearable Devices",       accent: "#8B5CF6", // purple
    blurb: "Amazfit's dual-solar watch and Logitech's Zone Vibe Pro headset both treat power recovery and serviceable wear parts as visible product features.",
    application: "Running low on power should be a visible state, not a hidden failure. Amazfit's dual-solar charging and Logitech's swappable pads and batteries both treat power and service as product features. Zebra can give its scanners and headsets the same glanceable low-power state and fast-service parts.",
    cardImage: "https://us.amazfit.com/cdn/shop/files/T-Rex_Dual_Solar__Lifestyle_15.jpg?v=1789715426&width=3840" },
  { id: "robotics",   name: "Robotics",               accent: "#38BDF8", // sky blue
    blurb: "ANYmal's credentialed door access, Sharpa's haptic manipulation stack and Skydio's docked F10 drone all turn autonomy into something legible and correctable, not just capable.",
    application: "Autonomy earns trust through visible, correctable state, not just capability. ANYmal's credentialed door access and Skydio's dock-managed fleet readiness make robot behavior legible before it acts. Zebra's mobile robots can apply the same request/grant/deny logic and inspectable dock status.",
    cardImage: "https://assets.newatlas.com/dims4/default/5b61d73/2147483647/strip/true/crop/6629x3480+0+469/resize/1200x630!/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2F85%2Fc9%2Fd8d7d55441838b767a3d41fc73b9%2Fanymal-autonomous-inspection-power-grid.jpg" },
  { id: "industrial", name: "Rugged Devices",     accent: "#b9ff43", // unchanged
    blurb: "Panasonic's TOUGHBOOK 34 keeps gloved, physical interaction central to rugged field computing while separating structure from serviceable interface zones.",
    application: "Gloved, physical interaction still belongs at the center of rugged computing. The TOUGHBOOK 34 validates hardware buttons with real gloves and exposes a defined service bay instead of hidden disassembly. Zebra can apply the same dedicated buttons and explicit service access to its next rugged tablet.",
    cardImage: "https://cdn.mos.cms.futurecdn.net/xFyyTAsRTt2BeMc8uKE4nB-1200-80.jpg" },
  { id: "sports",     name: "Sports Industry",        accent: "#F76900", // Nike orange
    blurb: "adidas' FREERIDER 2027 splits one footwear family into task-matched variants with micro-adjustable, inspectable wear zones.",
    application: "One hardware family can still be matched to the task at hand. adidas' FREERIDER 2027 splits one shoe family into task-specific variants with reachable, glove-tested adjustment. Zebra can apply the same shared base and quick-adjust design to its wearable-scanner mounts.",
    cardImage: "https://cdn.road.cc/wp-content/uploads/2026/09/Adidas-Freerider-Whistler.jpg" },
  { id: "mobile",     name: "Mobile & Handheld Devices", accent: "#FFD60A", // gold
    blurb: "Samsung's Galaxy Tab, Amazon's Kindle and Alexa Tablets, and Apple's foldable iPhone Duo, all treat attachment, hinge and control placement as explicit, testable decisions on a familiar handheld device.",
    application: "Attachments and controls deserve their own tested state, not an assumption. Galaxy Tab, Kindle and the Alexa Tablets all treat a keyboard attachment or control placement as a deliberate design decision. Zebra can validate the same attachment stability and glove-tested control layout before freezing a handheld's design.",
    cardImage: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/P1011550.jpg?w=800" },
  { id: "consumer",   name: "Shared Display Systems", accent: "#14B8A6", // teal
    blurb: "Logitech's Rally Bar 2 and Rally System 2 Pro turn enterprise room hardware into serviceable, centrally managed modules, while Apple's HomeView extends the same shared-screen logic into a proximity- and identity-aware home display.",
    application: "Enterprise hardware should be serviceable without a full teardown. Rally Bar 2's pivoting mount and Rally System 2 Pro's modular components both expose service access and central management, while HomeView shows a shared screen can also adapt its density and access to who is approaching. Zebra can apply the same swing-access mount, modular configuration and distance/identity-aware interface to its kiosks and terminals.",
    cardImage: "https://resource.logitech.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/rally-bar-2/rally-bar2-video-bar-install-minutes-desktop-2.jpg?v=1" }
];

const WEEKS = [
  {
    id: "W43", year: 2026, label: "W43", dateRange: "19 – 25 Oct 2026",
    indexFile: "weeks/W43/index.html",
    zipName: "Weekly_Design_Trend_Report_2026-W43_2026-10-19_to_10-25.zip",
    reports: [
      { title: "Sigma fp2", date: "2026-10-23", domain: "consumer",
        blurb: "A physical STILL/CINE switch, a dedicated Color button and 1/4-20 mounts across the chassis replace menu depth with choices a thumb can find without looking.",
        hero: "https://amateurphotographer.com/wp-content/uploads/sites/7/2026/10/Sigma_FP2-PA190228-acr-AW-AP.jpg",
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
    keyword: "Tactile Confirmation Returns",
    domain: "automotive",
    statement: "Visible surfaces are getting quieter, while a small set of physical, tactile confirmations are fought for and kept.",
    detail: "Ferrari, Tesla, Panasonic and Alfa Romeo all bring back real buttons where a touchscreen-first era tried to remove them. Products that skip this discipline are the exception this period, not the rule.",
    evidence: ["Ferrari F80", "Ferrari Luce", "Tesla Model Y", "BRABUS BODO", "Panasonic TOUGHBOOK 34", "Alfa Romeo Cuorerosso"],
    heroOverride: "https://www.topgear.com/sites/default/files/2025/07/11-Ferrari-F80-review-2025.jpg"
  },
  {
    keyword: "Visible Sensing State",
    domain: "ai",
    statement: "Sensing and recording state has to be unmistakable to the wearer — and to the people around them.",
    detail: "Ray-Ban Meta's camera-free and capture-enabled lines both treat sensing state as a social design problem, and Ring's camera family reinforces it with a physical lens cover rather than an app alone.",
    evidence: ["Ray-Ban Meta Audio", "Ray-Ban Meta (Gen 3)", "Ring 2026 Camera Family"],
    heroOverride: "https://cdn.mos.cms.futurecdn.net/CKfFyaXRjUXvbfG8nEpFJA-1200-80.jpg"
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
    detail: "Tesla's Roadster conceals high-energy aerodynamic and thrust hardware behind a minimal shell, while Sony's ECM-W5 puts pairing, gain and backup-recording state on a small screen at the exact point an operator is already holding the kit. Both treat visible state as the cost of hiding complexity, not an afterthought.",
    evidence: ["Tesla Roadster", "Sony ECM-W5"],
    heroOverride: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-04-World-Desktop.jpg"
  }
];

// Per-domain trend breakdowns — these feed the "Trending Keywords" cloud and each
// domain card's trend count. Distinct from TOP_SIGNALS, which are cross-domain synthesis.
const DOMAIN_TRENDS = {
  automotive: [
    { keyword: "Tactile Return", statement: "Minimal surfaces still need a tactile anchor: physical controls are coming back for the actions that matter most.", application: "Keep locatable physical controls for scan, acknowledge and recovery actions on vehicle-mounted computers and cradles.", evidence: ["Ferrari F80", "Ferrari Luce", "Tesla Model Y", "BRABUS BODO"], heroOverride: "https://www.topgear.com/sites/default/files/2025/07/11-Ferrari-F80-review-2025.jpg" },
    { keyword: "Light as Identity", statement: "Brand identity is moving from grille ornamentation into engineered light signatures.", application: "A single engineered optical signal can replace a cluttered LED cluster on dock and charging-cradle status indicators.", evidence: ["Tesla Model Y", "Ferrari Luce", "BRABUS BODO"] },
    { keyword: "Active Geometry", statement: "Moving aerodynamic and body geometry is engineered as a stateful control system, not a styling flourish.", application: "Define locked, transitional and failed states as explicitly as an active wing for auto-release dock latches and adjustable mounts.", evidence: ["Ferrari F80", "Red Bull RB22", "Ferrari Luce", "BRABUS BODO"], heroOverride: "https://www.topgear.com/sites/default/files/2025/07/6-Ferrari-F80-review-2025.jpg" },
    { keyword: "Role-Based Cabin", statement: "Cabin architecture is explicitly designed around distinct occupant roles — not just \"driver plus passengers.\"", application: "Multi-operator vehicle computing (driver versus dock worker) can borrow the same role-based zoning.", evidence: ["Ferrari F80", "Ferrari Luce", "Tesla Model Y", "Red Bull RB22"] },
    { keyword: "Structural Integration", statement: "Power, thermal and aerodynamic systems are integrated at the structural level, pushing validation down to the contact point.", application: "Validate thermal and sealing for ruggedized mobile computers at the same contact points — ports, latches, cooling paths.", evidence: ["Ferrari F80", "Red Bull RB22", "Tesla Model Y", "BRABUS BODO"] },
    { keyword: "Tactile Anchors Inside Digital Cockpits", statement: "Even as displays become reconfigurable or transparent, concepts keep distinct physical shapes for the controls that matter most.", application: "Give scan, confirm and release controls distinct, locatable shapes inside an increasingly digital control panel, and validate blind identification with gloves.", evidence: ["Alfa Romeo Cuorerosso", "Peugeot RCZ Vision", "DS F3VER"], heroOverride: "https://images.autoexpress.co.uk/autoexpress/2026/10/Alfa%20Romeo%20Cuorerosso-25.jpg" },
    { keyword: "Declared Service Boundaries", statement: "Concepts increasingly make repair and reconfiguration boundaries visible on the body itself, rather than hiding every seam inside one continuous shell.", application: "Give rugged handhelds and vehicle-mounted computers a visibly distinct, independently replaceable impact boundary, separate from a legible accessory-reconfiguration boundary, so a technician can read repair scope versus reconfiguration scope directly from the housing without full teardown.", evidence: ["Citroën 2 CV Concept", "FIAT Multiplay"], heroOverride: "https://i0.wp.com/lenouvelautomobiliste.fr/wp-content/uploads/2026/10/Citroen-2CV-concept-Le-Nouvel-automobiliste-thibaut-dumoulin-30.jpg?resize=1024%2C683&ssl=1" },
    { keyword: "Cabin-First Layout, Then the Shell", statement: "The cabin's activity and access needs are designed first, with the exterior shell wrapped around them rather than the reverse.", application: "Sequence Zebra vehicle-mount and work-cell design from the technician's entry, reach and task flow outward, instead of fitting a mount into whatever space a vehicle shell leaves behind.", evidence: ["Renault E-Space Concept"], heroOverride: "https://media.renault.com/wp-content/uploads/2026/10/29e955b0a637d2219c0fb074df072df8-l.jpg.webp" },
    { keyword: "Identity Cues Repeated Across Scales", statement: "A single family identity cue is carried from the full body down to a wheel or small component, instead of being repeated as the same shape only once.", application: "Give a Zebra device family one consistent grip, dock or accent geometry that repeats at the handheld, cradle and accessory scale, so recognition and correct docking don't depend on reading a logo.", evidence: ["Alpine A310 VISION"], heroOverride: "https://media.alpinecars.com/wp-content/uploads/2026/10/b00e6ee15e01bd060e8ac0d8a64119f5-l.jpg.webp" },
    { keyword: "Concealed Active Systems Need Unmistakable State", statement: "Hiding complex, active or high-energy hardware behind a calm shell raises the bar for making that hardware's real state obvious before and during activation.", application: "Any concealed sensor, emitter or high-energy accessory on Zebra hardware needs an explicit arm, active and fault signal, with decorative lighting kept visually distinct from a genuine warning.", evidence: ["Tesla Roadster"], heroOverride: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-04-World-Desktop.jpg" }
  ],
  ai: [
    { keyword: "Visible, Shared Sensing State", statement: "Sensing and recording state has to be unmistakable to the wearer — and to the people around them.", application: "Mute, listening and capture states need the same bystander-legible treatment on any Zebra wearable with a mic or camera.", evidence: ["Ray-Ban Meta Audio", "Ray-Ban Meta (Gen 3)"], heroOverride: "https://media.ray-ban.com/cms/resource/blob/1855480/0569c828966f15647a99b37f440fece6/rbm-pdp-ho26-aperol-features-capture-cover-data.jpg" },
    { keyword: "Tactile Fallback Beside Voice & Gesture", statement: "Tactile shortcuts remain the reliable fallback beside voice and gesture control.", application: "Keep a physical button or dial on any voice- or gesture-driven interface for noisy or glove-on environments.", evidence: ["Ray-Ban Meta (Gen 3)", "Meta VR Glasses", "Ray-Ban Meta Audio"], heroOverride: "https://s.yimg.com/lo/mysterio/api/3e4eb9924407eed0f50656241e18eab8edec436925b929a3fa63565ee949cd05/lightyear_networkapi/resizefill_w780_h438%3Bquality_80%3Bformat_webp/https%3A%2F%2Fmedia.zenfs.com%2Fen%2Fengadget_100%2Fe40d2527e511f6f7158af339d6530dd6.jpg" },
    { keyword: "Fit, Hinge & Service Parts", statement: "Fit and contact surfaces are being redesigned as a serviceable, swappable system rather than one fixed shape.", application: "Design swappable straps, pads and hinge adjustments as first-class service parts.", evidence: ["Meta VR Glasses", "Ray-Ban Meta (Gen 3)", "Ray-Ban Meta Audio"], heroOverride: "https://cdn.mos.cms.futurecdn.net/Si53kYKWYKYQfks8AVsZNA-1200-80.jpg" },
    { keyword: "Compute Moves Off the Primary Surface", statement: "Power and compute budgets are becoming an explicit, designed workflow state instead of a background spec.", application: "Offload battery and processing to a belt pack or cradle rather than the head- or hand-worn unit.", evidence: ["Meta VR Glasses"] },
    { keyword: "One Platform, Many Physical Forms", statement: "A shared sensing and compute platform now ships in several fit- and task-matched physical forms.", application: "Share one compute-and-sensing core across a family of wrist, ring and headset form factors fitted to different roles.", evidence: ["Ray-Ban Meta (Gen 3)", "Ray-Ban Meta Audio"] },
    { keyword: "Physical Sensor State Over Software Status", statement: "Camera and sensing products pair a physical, visible state cue — a lens cover, a mount boundary — with software status rather than trusting an app alone.", application: "Use a physical cover or mechanical indicator for any Zebra device with a camera or mic, so capture state reads without opening software.", evidence: ["Ring 2026 Camera Family"], heroOverride: "https://images.ctfassets.net/a3peezndovsu/zdYnQBL7LJCI1Bay38gY8/37b034e4ec6c88b9c6156394bf649d34/ring_pan-tilt_indoor_cam_2K_360_coverage_atf_1500x1500_04.jpg?w=1100&q=80" },
    { keyword: "Fit Is Part of Display Performance", statement: "For a worn display, physical fit adjustments are a calibration step that determines image stability, not a cosmetic afterthought.", application: "Document nose pad, temple and IPD-style fit adjustments as part of a wearable display's setup and validation process, and test text recognition after a full-shift wear trial, not just at first fitting.", evidence: ["XREAL 1 Pro+"], heroOverride: "https://resource.xreal.com/www-xreal-com/images/hebe/hebe-scene-work-bg-desktop.webp" },
    { keyword: "Redundant Capture Needs a Visible Confirmation", statement: "A backup recording path only earns trust when its state — present, charged, recording — is visible at the point where the operator is already holding the kit.", application: "Pair any Zebra field-audio or evidence-capture accessory with a local backup path and a small, glanceable display showing pairing, recording and remaining capacity at the component the worker is handling.", evidence: ["Sony ECM-W5"], heroOverride: "https://d1ncau8tqf99kp.cloudfront.net/PDP/DI/Accessories/ECM-W5/desktop/hero.jpg" }
  ],
  wearables: [
    { keyword: "Two Solar Surfaces, Two Charging Moments", statement: "Two solar collection surfaces split \"worn\" from \"set aside\" charging into two deliberately different moments.", application: "A dual-surface or dock-plus-body charging path can replace a single charging contact point.", evidence: ["Amazfit T-Rex Dual Solar"], heroOverride: "https://us.amazfit.com/cdn/shop/files/T-Rex_Dual_Solar__Lifestyle_2.jpg?v=1789715428&width=1500" },
    { keyword: "Power Scarcity as a Named Workflow State", statement: "Running low on power becomes a named workflow state, not a failure the product tries to hide.", application: "A defined \"recoverable minimum\" mode can preserve scan confirmation and location before a device goes fully dark.", evidence: ["Amazfit T-Rex Dual Solar"], heroOverride: "https://us.amazfit.com/cdn/shop/files/T-Rex_Dual_Solar__Lifestyle_4.jpg?v=1789715427&width=3840" },
    { keyword: "Glanceable, Rugged Identity Over Screen Time", statement: "A rugged visual grammar is built for fast status checks, not extended screen time.", application: "High-contrast, quick-glance status states should be validated under glare, gloves and motion, with detail offloaded to a companion app.", evidence: ["Amazfit T-Rex Dual Solar"] },
    { keyword: "Replaceable Wear Parts as a Visible Feature", statement: "Serviceability is shown as a product feature in its own right, not hidden as a repair afterthought.", application: "Design pads, straps and batteries around simple maintenance intervals with accessible fastening and clear part identification for shared, fleet-managed wearables.", evidence: ["Logitech Zone Vibe Pro"], heroOverride: "https://resource.logitech.com/w_389,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/headsets/zone-vibe-pro-b2b/b2b-zone-vibe-pro-recycle-materials.jpg?v=1" },
    { keyword: "Connection State Has to Be Understandable", statement: "Multi-device pairing and mode switching need host-side and device-side feedback a wearer can actually read, not just functional connectivity.", application: "Make receiver, Bluetooth and call/scan status understandable at a glance and by touch, with a recovery path when pairing or authorization fails.", evidence: ["Logitech Zone Vibe Pro"] }
  ],
  robotics: [
    { keyword: "Credentialed Access", statement: "Robots are gaining managed digital identity so they can pass through existing secured infrastructure instead of replacing it.", application: "Give autonomous mobile robots the same managed, revocable digital identity to move through badge-controlled doors, gates and elevators.", evidence: ["ANYmal Door Access"] },
    { keyword: "Legible Authorization", statement: "Authorization and approach state must be visible at the point of action, with an explicit path when access is denied.", application: "Use the same request/grant/deny/fallback states at every robot-operated threshold, with a human-escalation path.", evidence: ["ANYmal Door Access"] },
    { keyword: "Zone-Matched Sensing", statement: "Contact and perceptual sensing resolution is matched to the zone — fingertip precision where it matters, coarser coverage everywhere else.", application: "Design scan-confirmation feedback like fingertip haptics — distinguishing a clean read, a low-confidence read and a required retry.", evidence: ["Sharpa D01 · W02 · AE01", "ANYmal Door Access"], heroOverride: "https://assets.newatlas.com/dims4/default/759d630/2147483647/strip/true/crop/6580x4387+0+0/resize/440x293!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2Fed%2F34%2F5455155648f497dd65859aa60726%2Fanymal-robot-stairs-climbing.jpg" },
    { keyword: "Haptics Explain the Task", statement: "Haptic feedback is being designed to communicate a task state — success, uncertainty, retry — not just confirm contact happened.", application: "Design vibration patterns around task state, not a single undifferentiated buzz.", evidence: ["Sharpa D01 · W02 · AE01"], heroOverride: "https://assets.newatlas.com/dims4/default/268985a/2147483647/strip/true/crop/6720x4480+0+0/resize/440x293!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2F10%2F18%2Ff9579f784980af62973fbece417b%2Fanymal-robot-going-to-inspection-mission.jpg" },
    { keyword: "Shrinking Envelopes", statement: "Robot hardware keeps shrinking generation over generation while staying matched to human hands and tools.", application: "Show the previous generation as an explicit size reference for any next-generation wearable or cobot accessory.", evidence: ["Sharpa D01 · W02 · AE01", "ANYmal Door Access"], heroOverride: "https://assets.newatlas.com/dims4/default/8e6af0b/2147483647/strip/true/crop/6667x4445+0+0/resize/440x293!/format/webp/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.ap-southeast-2.amazonaws.com%2F83%2F7f%2F4b60ecd94a989ff611711ffaa330%2Fanymal-robot-inspects-industrial-plant.jpg" },
    { keyword: "Docked Fleet Readiness as a Visible System", statement: "Autonomous vehicles are paired with a dock that manages launch, charging and handoff as one visible readiness system.", application: "Treat multi-unit charging and task handoff for mobile robots as one inspectable system, so a worker can identify the ready unit without a separate dashboard.", evidence: ["Skydio F10 Lightrunner"], heroOverride: "https://cdn.sanity.io/images/mgxz50fq/production-v3-red/23a3e22ff89164157e2656ad3caf2c7a32603779-3954x4394.png?w=1200&fit=max&fm=jpg" }
  ],
  industrial: [
    { keyword: "Gloved Interaction First", statement: "Gloved, physical interaction stays the primary interface across handling, carrying and work-surface states.", application: "Keep dedicated hardware buttons for scan, acknowledge and recovery actions, validated with representative gloves.", evidence: ["Panasonic TOUGHBOOK 34"], heroOverride: "https://cdn.mos.cms.futurecdn.net/hf9RKAAe5rHK8Fy5sPFEkB-1200-80.jpg" },
    { keyword: "Modular + Unmistakable States", statement: "Durable core structure is separated from modular interface zones, and every attachment state is made mechanically and visually unmistakable.", application: "Define service bays with explicit access tools, and pair every dock/cradle state with a confirming visual or tactile cue.", evidence: ["Panasonic TOUGHBOOK 34"], heroOverride: "https://cdn.mos.cms.futurecdn.net/kdctSx98RhDrahrheLkZiB-1200-80.jpg" },
    { keyword: "Legacy + Protection as Identity", statement: "Legacy compatibility and rugged identity are both expressed through genuine structure, not decoration.", application: "Protect fleet investment when introducing new connector standards, and express durability through genuine structural cues.", evidence: ["Panasonic TOUGHBOOK 34"] }
  ],
  consumer: [
    { keyword: "Service Access Designed Into the Mount", statement: "Fixed enterprise hardware is designed so its own mount provides serviceable access — pivoting, an exposed rear — instead of requiring full removal for maintenance.", application: "Give vehicle-mounted terminals and fixed scanners a controlled service swing or access panel, and measure maintenance time and reach from the actual mounting height.", evidence: ["Logitech Rally Bar 2"], heroOverride: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/video-conferencing/rally-bar-2/rally-bar2-video-bar-fast-setup.jpg?v=1" },
    { keyword: "Modular Roles, Managed Centrally", statement: "Distributed hardware systems separate sensing, audio and compute into distinct modules while a central fleet dashboard keeps configuration legible.", application: "Separate sensing, display and compute into serviceable, replaceable modules for shared stations, and expose their configuration state to remote fleet management.", evidence: ["Logitech Rally System 2 Pro"], heroOverride: "https://resource.logitech.com/w_1200,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/business/products/video-conferencing/rally-system-2-pro/rally-system-2-pro-modular-solution.jpg?v=1" },
    { keyword: "Threshold Status Made Public", statement: "Availability state is pushed outside the room itself, readable before someone commits to walking in and interrupting.", application: "Give shared Zebra kiosks and mounted terminals the same red/green, distance-readable availability signal instead of hiding status behind a login screen.", evidence: ["Logitech Rally System 2 Pro"], heroOverride: "https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/business/products/video-conferencing/rally-system-2-pro/rally-system-2-pro-device-space-management-3.jpg?v=1" },
    { keyword: "Shared Screens Adapt to Distance and Identity", statement: "A fixed shared screen changes its information density and access based on who is approaching and from how far away, rather than showing one generic state to everyone.", application: "Give shared Zebra kiosks and wall terminals a large glanceable state at a distance and a detailed, identity-confirmed control set up close, with every identity switch explicit and reversible.", evidence: ["Apple HomeView"], heroOverride: "https://www.apple.com/newsroom/images/2026/10/meet-apple-homeview-a-new-way-to-enjoy-entertainment-and-manage-the-home/article/Apple-HomeView-FaceTime-Center-Stage-261013_big.jpg.large.jpg" }
  ],
  sports: [
    { keyword: "One Family, Task-Matched Variants", statement: "A single footwear family splits into variants matched to the rider's actual task, not cosmetic tiering.", application: "A shared base accessory with task-specific variants can replace a one-size-fits-all wearable mount.", evidence: ["adidas FREERIDER 2027"], heroOverride: "https://www.bikeradar.com/resources/content/32337f2f-7841-4ef6-a233-d1f001580530/fbf3ce62-f438-47b2-a2d5-fbfff07117af/832c34b2-e6f8-4d61-8a41-9e0a05ba03c2/adidas-Freerider-Pro-BOA-C-sole-scaled.jpg?preview=false&platform=WEB&deviceId=62acf397-4952-4f26-966e-a704cf065c37" },
    { keyword: "Reachable Micro-Adjustment Mid-Task", statement: "Micro-adjustment is placed where a rider can actually reach it mid-task, with the resulting range made measurable.", application: "Quick-adjust dials or buckles should be tested with gloves, mid-task, with the usable range documented.", evidence: ["adidas FREERIDER 2027"], heroOverride: "https://www.bikeradar.com/resources/content/32337f2f-7841-4ef6-a233-d1f001580530/fbf3ce62-f438-47b2-a2d5-fbfff07117af/feed6d6e-06ee-400e-9700-35fed3a08274/adidas-Freerider-Pro-BOA-scaled.jpg?preview=false&platform=WEB&deviceId=62acf397-4952-4f26-966e-a704cf065c37" },
    { keyword: "Friction & Impact Zones, Engineered Separately", statement: "Friction and impact zones are engineered as separate systems rather than one uniform surface.", application: "Map grip, impact and attachment zones independently on any wearable mount, with inspectable, cleanable wear surfaces.", evidence: ["adidas FREERIDER 2027"], heroOverride: "https://www.bikeradar.com/resources/content/32337f2f-7841-4ef6-a233-d1f001580530/fbf3ce62-f438-47b2-a2d5-fbfff07117af/f056788c-0538-4310-a82c-77da5bb459ee/adidas-Freerider-Pro-scaled.jpg?preview=false&platform=WEB&deviceId=62acf397-4952-4f26-966e-a704cf065c37" }
  ],
  mobile: [
    { keyword: "AI Output Stays Inspectable Beside the Source", statement: "Automated suggestions are kept reviewable by staying visually next to the material they summarize, rather than replacing it.", application: "Show source text beside generated summaries before a Zebra worker accepts a field decision, and flag uncertain content rather than presenting it as fact.", evidence: ["Galaxy Tab S12 Ultra"] },
    { keyword: "Attachment Changes Posture, and Becomes a New Wear Point", statement: "A keyboard or cover attachment converts a held device into a propped work station, while its hinge or contact line becomes a new wear and cleaning point.", application: "Treat dock, cover and keyboard attachments as their own tested state — covering stability, gloved handling and the contact line's resistance to debris.", evidence: ["Galaxy Tab S12 Ultra", "Kindle 2026 Family"], heroOverride: "https://www.sammobile.com/wp-content/uploads/2026/09/Samsung-Galaxy-Tab-S12-Ultra-Screen-S-Pen-Keyboard-Cover-1920x1079.jpg" },
    { keyword: "Vulnerable Controls Move Away from the Resting Hand", statement: "A frequently mis-pressed control is relocated away from where the support hand naturally rests, and edge controls are gathered into one reachable zone.", application: "Test power, trigger and recovery key placement against common one-handed and gloved grips before freezing a Zebra handheld's control layout.", evidence: ["Kindle 2026 Family", "Galaxy Tab S12 Ultra"], heroOverride: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/09/P1011578.jpg?w=800" },
    { keyword: "Material and Tier Signaling Without Touching Legibility", statement: "Finish and color differentiate product tiers while the core reading or working surface stays visually neutral.", application: "Use finish and color to identify a device's role or durability tier without weakening screen legibility or status-color meaning.", evidence: ["Kindle 2026 Family"] },
    { keyword: "Mode Changes Need Obvious Hardware Cues", statement: "Products increasingly make an input-mode transition — pen, keyboard, voice — physically obvious rather than purely software-driven.", application: "Give pen, keyboard and dock connection states one consistent on-screen location so gloved operators can predict the active input mode before acting.", evidence: ["Amazon Alexa Tablets"], heroOverride: "https://platform.theverge.com/wp-content/uploads/sites/2/2026/10/268799_AlexaTablet12Pro_2.jpg?quality=80&strip=all&w=1200" },
    { keyword: "A Hinge Becomes a Self-Standing Mode, Not Just a Fold", statement: "A precision hinge lets the device hold itself open at a chosen angle without external support, turning the fold itself into a hands-free viewing or working posture.", application: "Apply the same logic to Zebra rugged tablets and handhelds: a built-in, self-locking hinge or kickstand, validated for drop and vibration, lets a device stand at a fixed, glanceable angle without a separate mount, freeing the worker's hands for scanning or picking while keeping the screen visible.", evidence: ["iPhone Duo"], heroOverride: "https://cdn.mos.cms.futurecdn.net/BWjEcLrmjEaRDGw4enTc6P.jpg" }
  ]
};
