# V5 — Deliverables against `Trend_Dashboard_Review.txt`

Built 2026-11-04/05 from V4. **V3 and V4 are untouched.** This file is §10.4 of the review
document: the evidence table, the removal log, the number and time-label definitions, and the
list of things still unverified.

**Nothing here is deployed.** V5 runs locally only (`http://localhost:8842`). Per §10.3 the site
is not claimed to be updated or live.

---

## 1. What changed, in one table

| § | Required | Status |
|---|---|---|
| 10.1 ① | Fix the §4 evidence mismatches | Done — all four confirmed real, plus **five more** found |
| 10.1 ② | Separate product fact / interpretation / Zebra hypothesis | Done — new `THEMES` structure, rendered on all 8 domain pages |
| 10.1 ③ | Re-cluster all reports, allow cases to join no theme | Done — 45 reports, 5 themes, **8 in no theme** (46 until the RB22 withdrawal, §10) |
| 10.1 ④ | Update the 8 domain pages | Done — 6 of 8 summaries had defects, all rewritten |
| 10.1 ⑤ | Home page, aesthetic, numbers, time labels, Zebra items | Done — thesis rewritten, tension bar removed, labels relabelled, priorities converted to hypotheses |

---

## 2. Theme ↔ evidence table

Every row quotes the report's own section heading, so each claim can be checked against the
source file. **All 57 cited headings were verified by script**: each exists verbatim in the named
report, and none is one of that report's last four headings (the "What Zebra Can Apply" cards).

Layer tags: `product-fact` (observed), `visible-structure` (readable from the object),
`vendor-claim` (the maker's stated position), `analyst-inference` (our reading).

### Which Actions Earn a Physical Control

**Problem.** Once the interface is a screen, every control costs money, space and sealing. So which actions are worth keeping off the glass — and what do the products that kept one actually spend it on?

| Report | Section heading cited | Layer |
|---|---|---|
| Sigma fp2 | A switch states intent before menus do | product-fact |
| Panasonic TOUGHBOOK 34 | Gloves belong in the primary interaction | product-fact |
| Ferrari F80 | Return critical actions to physical buttons | product-fact |
| Ferrari Luce | Keep frequent driving actions under the fingers | product-fact |
| Alfa Romeo Cuorerosso | Steer-by-wire does not remove every analogue cue | product-fact |
| Peugeot RCZ Vision | Important settings keep distinguishable hardware | product-fact |
| Citroën 2 CV Concept | A visible handle keeps the action understandable | product-fact |
| Tesla Model Y | Minimal surfaces still need a tactile anchor | product-fact |
| Antigravity A1 Follow Me Bundle | One Button, Even With Gloves | product-fact |
| Teenage Engineering EP-35 | The handle is the dashboard | visible-structure |
| instax mini Evo 2 | Rotary choice | product-fact |
| Kindle 2026 Family | Buttons live in an optional cover | product-fact |
| Apple iPad mini and MacBook Pro | Retain physical control paths | product-fact |

**Counts.** 10 independent brands · 13 families · 11 occasions · 13 reports. Alfa Romeo, Peugeot and Citroën are three Stellantis marques from one Mondial press day; Kindle is Amazon.

**Not supporting.** Jetta M6 (the dial is an apply card, and is for the most-used function, not mode) · Galaxy Tab S12 Ultra (posture, not control selection) · Turtle Beach (controls relocated, not selected).

**Limits.** Nine of thirteen are consumer or automotive, where a physical control is also a premium cue — some of this may be priced rather than reasoned. No brand in the corpus *removed* a control this period, so the rule is derived only from survivors: survivorship bias we cannot correct from these reports.

### The Body Is Published as an Attachment Interface

**Problem.** One device has to serve several jobs. Do you build variants, or publish the interface and let accessories carry the difference?

| Report | Section heading cited | Layer |
|---|---|---|
| Sigma fp2 | Chassis becomes a rigging platform | product-fact |
| OPPO Find X10 Series | One mount accepts lens, light and fan | product-fact |
| Teenage Engineering EP-35 | Clips turn the case into a rack | visible-structure |
| Amazon Alexa Tablets | Pogo pins expose modular intent | visible-structure |
| Panasonic TOUGHBOOK 34 | Concentrate change in defined modules | product-fact |
| Sony ECM-W5 | Extend capability through a clear interface | product-fact |
| Antigravity A1 Follow Me Bundle | A Kit Built From Swappable Parts | product-fact |
| Toyota Snowhunter Concept Family | External storage | visible-structure |
| FIAT Multiplay | A spoiler can become a carrying tool | product-fact |
| adidas FREERIDER 2027 | Reserve geometry for the mechanical connection | product-fact |

**Counts.** 9 independent brands · 10 families · 9 occasions · 10 reports.

**Not supporting.** Kindle 2026 Family (a cost decision about one control, not a published interface) · Galaxy Tab S12 Ultra (argues the opposite — capability moved *into* the device).

**Limits.** "Published" is doing real work and only **three** cases meet it: Sigma's standard hot shoe, adidas's protected binding geometry, Toyota's shared range interface. The rest are proprietary mounts the maker alone supplies — an accessory business, not an open interface, and decades old. **Treat the strong version as resting on three cases, not ten.**

### Where the Product Comes Apart Is Designed, Not Hidden

**Problem.** Some parts wear out, get dirty, or need swapping mid-shift. Is that access an afterthought behind a service panel, or part of the exterior design?

| Report | Section heading cited | Layer |
|---|---|---|
| Panasonic TOUGHBOOK 34 | Battery exchange is a workflow state | product-fact |
| Logitech Rally Bar 2 | Parts are designed to separate | product-fact |
| Ring 2026 Camera Family | Replacement is a designed action | product-fact |
| Logitech Rally System 2 Pro | Each module has a clear job | visible-structure |
| adidas FREERIDER 2027 | Place adjustment where it can be reached | product-fact |
| Citroën 2 CV Concept | The bumper announces its separate job | visible-structure |

**Counts.** 5 independent brands · 6 families · 6 occasions · 6 reports. **Weakest theme in the set** — two reports are the same Logitech Rally family from one launch.

**Not supporting.** Logitech Zone Vibe Pro (spare-parts claim is an apply card) · OPPO Find X10 Series (**the falsifier** — a prominent seam with nothing serviceable behind it) · Galaxy Tab S12 Ultra (alignment aesthetics).

**Limits.** Defined service bays are category baseline for rugged and conferencing hardware, not a change. EU regulation (ESPR 2024/1781; Right to Repair 2024/1799, applies 31 Jul 2026; Battery Regulation 2023/1542 Art.11, from Feb 2027) explains why parts must come apart but requires none of it to be **visible** — a hidden screw and a PDF is full compliance. Only the voluntary move past compliance is news, and it rests on the two technically weakest cases.

### Mass and Fit Are Specified Before the Feature Set

**Problem.** Wearable and handheld products are worn for a whole shift. Where does the weight sit, what touches the body, and which posture is the product actually designed for?

| Report | Section heading cited | Layer |
|---|---|---|
| XREAL 1 Pro+ | Treat optical fit as product architecture | product-fact |
| Meta VR Glasses | Mass moves away from the bridge of the nose | product-fact |
| XREAL AURA | Remote compute mass | product-fact |
| Ray-Ban Meta Audio | Wearability is the real specification | vendor-claim |
| Ray-Ban Meta (Gen 3) | Geometry matters more than weight alone | analyst-inference |
| Apple iPad mini and MacBook Pro | Thickness shifts grip load | product-fact |
| Logitech Zone Vibe Pro | Structure carries a soft contact band | visible-structure |
| Turtle Beach Stealth Flip Wireless Controller | Grip mass and clearance | product-fact |
| Sharpa D01 · W02 · AE01 | Let the data interface follow the hand | product-fact |
| iPhone Duo | The opened product reads as a held workspace | analyst-inference |
| Galaxy Tab S12 Ultra | Keyboard changes working posture | product-fact |
| adidas FREERIDER 2027 | Design the contact patch intentionally | product-fact |
| Sigma fp2 | A hinge changes the shooting silhouette | product-fact |

**Counts.** 9 independent brands · 12 families · 10 occasions · 13 reports. Meta supplies three, all from the same W39 cycle; XREAL two.

**Not supporting.** Sony ELF-MN1 (fixed desk display) · Amazfit T-Rex Dual Solar (power path, not load).

**Limits.** Eleven of thirteen are consumer products worn by choice for an hour or two. Zebra's are worn under instruction for 8–12 hours, and **no report here measures anything over a full shift** — including the one that claims geometry beats weight. The tether strategy is unvalidated for work: moving mass to a belt pack only wins if the cable survives the shift.

### Feedback Is Specified by Who Has to Read It

**Problem.** Not "does the product show its state" — that is settled. The live question is who the cue is for: the person holding it, a bystander in the same space, or someone supervising many units remotely.

| Report | Section heading cited | Reader | Layer |
|---|---|---|---|
| Sony ECM-W5 | Keep feedback in the working position | operator | product-fact |
| XREAL 1 Pro+ | Keep feedback close to the wearer | operator | product-fact |
| Amazfit T-Rex Dual Solar | Modes are visible | operator | product-fact |
| instax mini Evo 2 | Preview on device | operator | product-fact |
| Turtle Beach Stealth Flip | Read two modes | operator | visible-structure |
| Panasonic TOUGHBOOK 34 | Make attachment states obvious | operator | product-fact |
| Tesla Roadster | Put critical information near the sightline | operator | product-fact |
| Signode AMR Portfolio | Color becomes a configurable safety signal | bystander | product-fact |
| Ring 2026 Camera Family | A lens with a physical boundary | bystander | product-fact |
| Ray-Ban Meta Audio | No lens-corner camera eye | bystander | product-fact |
| Ferrari F80 | Opening is an operating state | bystander | product-fact |
| Apple HomeView | Show whose experience is active | bystander | product-fact |
| Red Bull RB22 | Design for the people around the product | bystander | product-fact |
| Skydio F10 Lightrunner | Readiness is a fleet property | fleet | product-fact |
| Logitech Rally System 2 Pro | The room appears as a managed object | fleet | analyst-inference |

**Counts.** 15 independent brands · 15 families · 15 occasions · 15 reports. **The only theme with no shared-parent or shared-event discount** — that independence, not the report count, is why it is the strongest here.

**Not supporting.** Alpine A310 VISION (brand recognition, the older job) · Teenage Engineering EP-35 (task illumination) · Sharpa (hardware spec only; the meaning is an apply card, and the report itself cautions that more levels ≠ interpretability).

**Limits.** The three-reader split is **our** reading — no report draws it. The bystander group is the one most shaped by regulation and platform policy rather than design choice, which this corpus cannot separate. And none of these reports tests whether a cue is actually read correctly under workload.

---

## 3. Reports that feed no theme (8 of 45)

Listed rather than absorbed, per §10.1 ③.

| Report | Why |
|---|---|
| BRABUS BODO | Exterior identity, proportion, rear light signature |
| DS F3VER | Volume, light architecture, finish |
| Opel STX Concept | Proportion and aero at the body boundary |
| Alpine A310 VISION | Identity and illumination as recognition — actively argues *against* the state-channel reading it was cited for in V3/V4 |
| Jetta M6 | Exterior crease, aero target, packaging; its interior headings are screen layout |
| Renault E-Space Concept | Interior volume and spatial organisation; close to the controls theme but about screen architecture |
| Sony ELF-MN1 | Fixed single-viewer desk display; genuinely unlike anything else in the corpus |
| ANYmal Door Access | **Candidate sixth theme**, not a miss — see below |

**The candidate sixth theme.** ANYmal's real subject is a robot designed around *installed plant
infrastructure* rather than the reverse. It rhymes with Logitech's "Mount geometry reduces labor"
and Ring's "Power choice changes installation". Three cases across three brands is enough to
watch and not enough to declare. Revisit next period rather than forcing it into one of the five.

---

## 4. Removed, demoted and reclassified — with reasons

### 4.1 The four mismatches the review document named — all confirmed

| # | Claim on the site | What the source actually says |
|---|---|---|
| 4.1 | "Tesla's Roadster ties light cues to state" | "Tie light cues to state" is **apply card 04**, phrased as an instruction |
| 4.2 | "Jetta's single remaining dial … states the operating mode" | The only dial is **apply card 04**, "Keep One Dial Beside the Glass", and it is for the most-used function. "Single remaining" is unsourced |
| 4.3 | Red Bull RB22 under "Control Authority Reaches the Second Row" | A single-seat F1 car. No second row, no passenger |
| 4.4 | Sony ELF-MN1 under "Compute Moves Off the Primary Surface" | The report says "**without a headset**", "rather than relying on a wearable headset" — the opposite claim |

### 4.2 Five more found during verification

| # | Claim | Problem |
|---|---|---|
| 4.5 | "Credentialed, **Legible** Autonomy" | The credential is real (dormakaba ED100/250, "credential, access policy and door motor form a single audited interaction"). "Make authorization state legible" is **apply card 02** — the title fused a fact and a recommendation in one phrase |
| 4.6 | "Sharpa's haptics communicate task state" | Analytical text supports only a spec (5 LRA motors, 256 levels/fingertip). "Make feedback mean a task state" is **apply card 01**, and the report warns that more levels do not prove interpretability |
| 4.7 | "TE codes cables by function" | "Color-code cables by function" is an **apply card** |
| 4.8 | "Logitech publishes Zone Vibe Pro's spare parts" | "Serviceability appears in the parts story" is an **apply card** |
| 4.9 | Apple iPad/MacBook under "The Signature Shape Stopped Being Fixed" | Two different products, not one product reconfiguring (§10.3) |

### 4.3 Three more found while rewriting the domain pages

| # | Claim | Problem |
|---|---|---|
| 4.10 | Automotive: "Ferrari, Tesla, **BRABUS, Red Bull** and the Alfa Romeo, Peugeot and **DS** concepts all keep real, distinctly shaped buttons and dials" | BRABUS's only control claim is its apply card "Keep frequent actions physically distinct"; DS F3VER's analytical text is entirely exterior; RB22 is single-seat. **Three of seven brands did not support the sentence** |
| 4.11 | Sports: adidas's "**glove-tested** adjustment" | No test is reported. The heading is "Place adjustment where it can be reached"; the testing language is in the apply cards |
| 4.12 | Consumer: "Sony **publishes its usable viewing distance, angle and ambient-light range as hard numbers** and derives the cradle angle and body size from them" | **Fabricated.** Searched the full ELF-MN1 file: "viewing distance", "ambient", "angle", "lux", "degree" and "cm" do not occur anywhere in it. A Zebra recommendation ("publish a viewing envelope … the way it publishes a drop rating") was built on top of it. Both removed |

**4.12 is a different failure mode from the rest** and worth separating. Every other defect came
from quoting the wrong *part* of a real report, which the heading-position rule catches
mechanically. This one came from nowhere in the report at all, and no structural check would ever
have found it. What finds it is searching the source file for the specific words a claim depends
on.

### 4.4 Demoted

**`Light Became a State Channel`** — was a top signal citing seven products; **one survived.**
Re-read in analytical sections only, applying §3.2 (state feedback, brand identity and work
lighting counted separately):

| Case | Verdict |
|---|---|
| Signode AMR Portfolio | ✅ Real — lit mast strip as a live status light, multi-angle dome LED, colour as a configurable safety signal |
| Tesla Roadster | ❌ Apply card |
| Alpine A310 VISION | ❌ Brand identity — the *old* job this claim said was being inverted |
| Teenage Engineering EP-35 | ❌ Work lighting ("a hatch that lights itself") |
| Ring 2026 Camera Family | ❌ Floodlight; "Expose sensor state" is an apply card |
| Skydio F10 Lightrunner | ❌ Dock readiness, no light cue described |
| Antigravity A1 | ❌ No LED-as-state in analytical text; the blue LED is an image caption |

One brand is not a trend (§7.3). Moved to a new `OBSERVATIONS` array with the audit attached.

**`Light Reports State`** (automotive domain trend) — rested on Tesla + Alpine only. Both failed.
Deleted outright rather than reworded; the automotive page now shows one fewer trend, and **that
is the correct count, not a gap to fill.**

### 4.5 Reclassified

- **Red Bull RB22** → from "Control Authority Reaches the Second Row" to the feedback theme as a
  **bystander** case. "Design for the people around the product" and "Keep the occupied zone
  unmistakable" are about readers outside the cockpit — the pit crew.
- **Sony ELF-MN1** → out of "Compute Moves Off the Primary Surface"; stays correctly under "The
  Tether Is Part of the Product", which its routed USB-C cord does support.
- **Tesla Roadster** → its light claim was rejected *and* it was admitted to the feedback theme on
  a different heading. **A report is judged claim by claim, not admitted or rejected whole.**

---

## 5. Definitions — numbers and time labels

### 5.1 Counts (§7.3)

| Term | Means | Does not mean |
|---|---|---|
| **Reports** | How many write-ups in this corpus touch the theme | Market size. This is an editorial sample — we write up what we choose to write up |
| **Independent brands** | Distinct corporate owners. Alfa/Citroën/DS/FIAT/Opel/Peugeot = **1** (Stellantis). Kindle/Alexa/Ring = **1** (Amazon). Rally Bar/Rally System/Zone Vibe = **1** (Logitech) | Market share |
| **Product families** | Distinct product lines, so two SKUs in one range count once | — |
| **Separate occasions** | Distinct launch events. Six Stellantis marques from one Mondial press day = **1 occasion** | Six datapoints |

**Read `brands` as the strength of a theme. `reports` only measures our coverage.**

### 5.2 The "17 to 6" bar is gone (§7.1)

The two-sided tension bar was removed, not relabelled. Four things were wrong with it: hardware is
part of the system so the sides were never mutually exclusive; two reports were counted on both
sides; it covered 21 of 46 reports while sitting under a 46-report masthead; and it read as a
market verdict off an editorial sample.

It is replaced by an **evidence-strength chart measured in independent brands**, which answers
"how much should I trust this" instead of implying a contest between two camps.

### 5.3 Time labels (§7.2)

| Was | Now | Means exactly |
|---|---|---|
| New This Week | **New case this week** | First appearance; latest week only |
| Building | **Repeats across weeks** | Cases in the latest week *and* earlier ones |
| Holding | **No new case this week** | Nothing in the latest week — **a statement about our coverage.** The market may have moved in a week we did not cover |

### 5.4 Zebra items are hypotheses, not work (§8.1)

`urgency` no longer means "how soon to build". It means how ready the idea is to be **tested**:
`Test This Cycle` / `Sharpen First` / `Watch Only`. Each item now carries a `validate` list —
questions that must be answered before anything is built — shown open on the page, not hidden
behind a disclosure, because the whole point is that they must not be skippable.

The top item was "Bind the active capture profile to the application LED" at *Act Now*. It is now
"**Find out whether workers lose track of the active capture profile — and what it costs**". If
validation shows mode confusion is rare or cheap, the right outcome is to drop it.

---

## 6. Still to verify externally

Nothing below was checked for V5. Each is a claim or an assumption the site now rests on.

1. **DataWedge API and per-model LED capability.** Not re-checked against Zebra's live
   documentation. The §8.1 item must not be treated as an implementation spec.
2. **Does the mode-confusion problem exist at all?** Needs profile-switch logs against task logs.
3. **Competitor rugged lines** (Honeywell, Datalogic). If they show the same service-access
   pattern, the repair theme is category convergence, not a direction to lead.
4. **Competitor AMR status lighting.** Signode is one brand in a segment where status lighting may
   be long-established practice rather than new.
5. **"Geometry beats weight."** The most testable claim in the corpus and untested even by the
   report that makes it. Needs same-mass/different-load-path measurement at hour eight.
6. **Tether durability over a full shift.** No report evaluates the cable-management cost of
   moving mass off the body.
7. **Are shipped cues read correctly under load?** Sharpa's caution applies directly to Zebra's
   own multi-colour LEDs. Untested.
8. **Who is actually in frame** of a fixed Zebra scanner, and whether site signage already covers
   it.
9. **§8.2 re-read of the dropped candidates.** They were cut on novelty. Viewing angle, glove
   recognition, cross-product consistency, cleaning, repair, accessory coexistence and failure
   recovery are design opportunities *on top of* an existing capability. Public documentation not
   mentioning a feature also does not prove it absent from every model and customer build.

---

## 7. Reading density

The first V5 build printed every §10.2 field open on the page. That was a wall, and the first
attempt to fix it — hiding the same content behind a disclosure — only moved the wall one click
away. **It also printed every case twice**: once as a row, then again under a "case by case"
heading with the same report name and the same section heading. Six stacked all-caps labels on
top of that made each theme read as a form rather than as prose.

A third problem: the theme blocks were the only text-only component on a site that is otherwise
image-led everywhere else.

| | First build | Disclosure | Text rows | **Now** |
|---|---|---|---|---|
| Automotive page — total words | 3,213 | 1,451 | 1,620 | **1,475** |
| Words per theme block | ~450 | ~95 / ~450 open | ~120 | **~75–130** |
| Case presentation | prose, twice | prose, twice | text row | **image card** |
| Home page — total words | 2,782 | — | — | **2,430** |
| Home thesis / detail | 37 / 159 words | — | — | **22 / 79** |

**A dashboard is not the place for the dossier.** Each theme is now one fixed shape — a title, a
strength figure, one line of problem, a row of product cards, one line of caveat:

```
Theme name                                    10 brands · 11 occasions
One line: the problem this answers

 ┌──────────┐ ┌──────────┐ ┌──────────┐      ← coloured top edge = layer
 │  photo   │ │  photo   │ │  photo   │
 │ Sigma fp2│ │ TE EP-35 │ │instax Evo│
 │ A switch │ │ The hand-│ │ Rotary   │      ← the section heading that
 │ states…  │ │ le is…   │ │ choice   │        anchors the claim
 └──────────┘ └──────────┘ └──────────┘

 WEAKEST POINT  one line        +10 more in other domains
```

The layer is now the card's **top border colour** — green `product-fact`, blue
`visible-structure`, amber `vendor-claim`, violet `analyst-inference` — so it costs no space at
all. Each card links to the report it cites, and the caption is the report's own section
heading, so the evidence anchor survives the redesign.

Verified across all eight domain pages: **47 case images, 0 broken.**

**Nothing was removed from the data.** `productPractice`, the full `inference` and `limits`, the
per-case notes, `notSupporting`, all four counts and the `zebraQuestions` are all still in
`data.js` for every theme — and all of them are in §2 of this document, which is where a reader
who wants the evidence should go. The page uses `limitShort`, a one-line field added for
display; `inferenceShort` exists alongside it but is no longer rendered, because the problem
line and the cards were already doing that job between them.

The Zebra questions are no longer duplicated on the domain pages either: each page's Key Takeaway
already ends with that domain's open questions in prose.

On the home page the Zebra items keep their warning visible — the summary reads "Not validated —
N questions to answer before building this" — because that is the part §8.1 says must not be
skippable. The questions behind it are reference.

---

## 8. Design brief mode — `brief.html`

**Added at request, outside the review document's scope.** Everything else on this site is
indexed by where the evidence *came from* — by report domain, by week, by theme. That is the
wrong index for the person who has to use it. Someone starting a handheld does not think "let me
read the automotive page", so they never reach Ferrari's rule about which control survives, or
the Kindle case where Amazon agreed a control was worth keeping and then refused to pay for it
on the base device.

A brief re-indexes the same data by **Zebra product type**. Six are defined:

| Brief | Themes it uses | Cases | Baseline |
|---|---|---|---|
| Handheld computer | 3 | 9 | ✅ verified on zebra.com |
| Wearable scanner | 3 | 7 | ⚠ not checked |
| Fixed scanning & machine vision | 2 | 5 | ✅ verified on zebra.com |
| Vehicle-mount computer | 3 | 7 | ⚠ not checked |
| Rugged tablet | 3 | 7 | ⚠ not checked |
| Self-service kiosk | 2 | 5 | ⚠ not checked |

Each brief shows: a one-line framing of the real question; the themes that apply with a "why
here" line each; 2–3 picked cases as image cards linking to the report; the weakest point; the
themes that **do not** apply and why; what Zebra already ships; and three questions to take into
the project. Roughly 600 words per brief.

**It invents nothing.** Every case shown is already a verified case on a theme, and the renderer
validates each `pick` against that theme's own case list — a brief that cites evidence the theme
does not hold is dropped and logged rather than displayed. Checked: 40 cards across six briefs,
0 broken images, 0 invalid picks.

Three rules carried over from the rest of V5:

- **Baseline is never guessed.** Only two product areas were actually verified on zebra.com, and
  those two show their source. The other four say "not checked for V5" and warn that some
  questions may describe something Zebra already does. Inventing a baseline to look complete
  would be the §4.12 failure again.
- **Every theme is accounted for.** A brief must either use a theme or explicitly skip it with a
  reason — a brief that matched all five would be filtering nothing. Verified by script.
- **Questions, not features.** Same rule as §5.4: the corpus can say what other industries did,
  never that Zebra should copy it.

The handheld brief is the clearest demonstration of why this index exists: its nine cases come
from **seven different report domains** — consumer, automotive, mobile, AI, robotics, industrial
and sports. None of them would be found by someone browsing a "mobile devices" page.

Reachable as card 05 on the dashboard, and deep-linkable — `brief.html#wearable` opens that
brief directly, so one can be sent to a colleague.

---

## 9. Verification run on V5 itself

| Check | Result |
|---|---|
| All cited section headings exist verbatim in the named report | **56 / 56 pass** |
| No cited heading is one of a report's last four (apply cards) | **56 / 56 pass** |
| Every report assigned to exactly one of {theme case, unclustered} | **45 / 45, no gaps, no duplicates** |
| `counts.reports` matches actual case count on every theme | **5 / 5 pass** |
| No dangling evidence titles anywhere in `data.js` | **pass** |
| All 8 domain pages render | **pass, no console errors** |
| All aesthetic images load | **14 / 14** |

Re-run the first two with the script pattern in §2: fetch each report, take all `<h3>` elements,
and reject any cited heading whose index falls in the last four.

---

## 10. Report withdrawn 2026-11-08 — Red Bull RB22

The RB22 single report was pulled from `00_Single Report` as too niche a subject. A single-seat
F1 car is not a product anyone buys, configures or services, so its decisions reach Zebra
hardware only by analogy — and it was already the weakest report in the corpus on evidence
grounds, having had to be removed from two separate V5 claims (§4.3 and §4.10) because its
single-seat architecture could not support either.

**The corpus is now 45 reports; automotive is 15.** Both numbers are computed from
`ALL_REPORTS`, so the masthead, the reports-overview counter and the domain cards followed
automatically. The prose numbers did not, and were restated by hand.

### 10.1 Every citation removed

| Where | Was | Now |
|---|---|---|
| `SINGLE_REPORTS` | the report entry | removed, replaced by a dated comment |
| `DOMAINS.automotive.blurb` | "Sixteen 2026 launches" | "Fifteen 2026 launches" |
| `THEMES` → feedback-addressed-to-a-reader | case at "Design for the people around the product" | removed; theme goes 15 → 14 cases, 6 → 5 bystander cases |
| same theme, `counts` | 15 / 15 / 15 / 15 | 14 / 14 / 14 / 14 |
| `AESTHETIC_TRENDS` → "Material Is Spent Where the Body Lands" | 6 reports, 5 independent sources | 5 reports, 4 independent sources |
| same entry, `detail` | the Red Bull sentence | deleted |
| same entry, `images` | the RB22 shot | replaced with Tesla `MY_Interior_Front_02` |
| `DOMAIN_TRENDS.automotive` → "Moving Hardware Needs a State Model" | Ferrari F80, RB22, Ferrari Luce | Ferrari F80, Ferrari Luce |
| `DESIGN_BRIEFS.vehicle-mount.lead` | "sixteen vehicle cabins" | "fifteen vehicle cabins" |
| `i18n.zh.js` automotive takeaway | still keyed on the pre-V5 English naming Red Bull, BRABUS and DS — a dead entry, so the page had been showing English | re-keyed to the current V5 sentence and retranslated |
| `README.md` | "46 reports", and still titled V4 | "45 reports", titled V5 |

### 10.2 What this costs, stated plainly

Two places are genuinely weaker, and neither was papered over:

**The aesthetic entry loses its sharpest case.** "Material Is Spent Where the Body Lands" argues
that premium material is now allocated by contact rather than by sightline. The RB22 was the
cleanest proof of exactly that — a finished contact edge inside a car almost nobody sees the
inside of, where no showroom justification exists at all. The claim still stands on five
reports, but it is now argued less vividly. The comment in `data.js` says so.

**"Moving Hardware Needs a State Model" is now a one-brand trend.** Both surviving cases are
Ferrari. It is kept rather than deleted, because the automotive list already carries
single-report trends on the same footing (Snowhunter, Jetta M6, Roadster) and the two evidence
chips make the single brand visible on the card. **If no second marque appears next period, it
should be demoted rather than restated.**

The feedback theme is not weakened in substance. The case removed was a sound one, but the
structural-cue finding that makes the theme interesting rests on Ring, Ray-Ban Meta and Ferrari,
none of which is affected. At 14 independent brands it is still the widest-sourced theme in the
set.

### 10.3 Difference from a §4 evidence fix

Everything in §4 was removed because the evidence did not support the claim. This is not that.
The RB22 citations that survived into V5 were accurate; the report is going for editorial
reasons. The comments in `data.js` say "withdrawn with its report", not "evidence failed", so a
later reader does not mistake this for a fourteenth evidence defect.

### 10.4 Left in place

`singles/Red_Bull_RB22.html` is **still on disk and unreferenced**. Nothing links to it and it
will not appear in search, the reports list or any theme, but it is also not deleted — say the
word and it goes. Note that if V5 is zipped as-is, that file ships inside the archive.

### 10.5 Re-verification after the removal

| Check | Result |
|---|---|
| `ALL_REPORTS.length` | **45** |
| Automotive reports | **15** |
| Duplicate titles | **0** |
| Dangling evidence titles across `TOP_SIGNALS`, `AESTHETIC_TRENDS`, `DOMAIN_TRENDS`, `THEMES`, `OBSERVATIONS`, `UNCLUSTERED` | **0** |
| `DESIGN_BRIEFS` picks that are not real cases on their theme | **0** |
| Any "Red Bull" / "RB22" string in rendered output | **0** |
| Broken images, dashboard + automotive + reports-overview + brief | **0** |
| `reports-overview` counter | **"45 of 45 reports"** |
| Chinese toggle on the automotive page | renders the new translation, blurb reads 十五 |

---

## 11. A second fabricated Sony claim, found 2026-11-08

§4.12 recorded the invented Sony ELF-MN1 viewing specification as removed on 2026-11-04. **That
fix was incomplete.** The same claim was still live in three more places, and one of them stated
it more baldly than the paragraph that was cleaned:

| Where | Text | Status |
|---|---|---|
| `DOMAIN_TRENDS.consumer` | A whole trend, "The Viewing Envelope Is a Published Dimension" — *"A display's usable viewing distance, angle and ambient-light range are published as hard numbers up front"* | **deleted** |
| `DOMAINS.consumer.blurb` | "publishing an optical envelope as a hard dimension" | rewritten |
| Sony ELF-MN1 report blurb | "with the optical envelope published as a dimension" | rewritten |
| `i18n.zh.js` | three entries translating the deleted trend | deleted |

**Re-verified against the source.** Tags stripped from `weeks/W44/sony-elf-mn1.html`, then counted:

```
envelope 0 · viewing distance 0 · ambient 0 · angle 0
distance 0 · lux 0 · cm 0 · mm 0 · dimension 0
```

The report publishes no optical envelope and no numbers of any kind. Its analytical headings are
"Direct light to each eye" and "Track the observer position" — it steers light per eye and
follows the viewer. Both blurbs now say that instead.

The trend was **deleted rather than reworded**: it rested on one report, and that report says
none of this. Consumer now shows six domain trends, which is the correct count.

**What this says about the V4→V5 audit.** A fabrication can survive a fix aimed at the sentence
that contained it. The §4.12 note searched the *source report* for the invented words, which was
right, but nobody searched `data.js` for them. A removal is not finished until the phrase is
grepped across every file — `evidence`, `blurb`, `statement` and the Chinese dictionary included.

---

## 12. Chinese translation pass, 2026-11-08

Two problems, one reported by the user and one found while fixing it.

**The literalisms.** "The control that survives a screen-first cabin" had been rendered 存活
(biological survival) where Chinese wants 留下來. "Automotive & Mobility" was 汽車與移動, leaving
移動 dangling as a bare verb — now 汽車與移動載具. Roughly 30 further entries were rewritten off
the same pattern: 正被…成 passives, 模型化為, 表述為, noun phrases ending in a bare verb, and
English clause order preserved under Chinese words.

**The gap.** Everything V5 introduced — the themes, the evidence-strength chart, the whole design
brief page — had no dictionary entry at all, so 中 mode showed it in English.
`__i18nMissing()` across all 15 pages reported **238 real strings** once report titles, brand
names, week codes and `.zip` filenames were excluded.

| | before | after |
|---|---|---|
| Untranslated strings, all pages | 238 | **1** |
| Dictionary entries | ~370 | 519 |
| Pattern rules | 71 | 84 |

The one remaining is `TC53 / TC58 · MC9400 · EDA-class`, left English on purpose — it is a list
of Zebra model numbers.

Thirteen new pattern rules cover the generated strings (`<b>14</b> brands · 14 occasions`,
`+7 more in other domains`, `product fact · <brand>`) so they keep working as the counts change
each period, rather than needing one entry per combination.

**One deliberate call.** The case-card captions quote section headings out of English-language
reports, and each card links to that report. They *are* translated — a grid of English captions
is unreadable to the audience this toggle exists for — but kept tight enough to be matched by eye
against the English heading the reader lands on.

**Reading test.** Each page was re-read in Chinese rather than diffed. One catch survived to that
stage: "Why here" as 為什麼在這裡 is a sentence, and as a chip label butted against the text it
introduces it read as a run-on. Now 為何入選.

---

## 13. Header, 2026-11-08

The `V5 DRAFT` chip is gone — a working aid for telling the three local builds apart, never part
of the design, and the tab title still does that job. `.lede-delta` was `margin-left:auto`, which
pushed the badge row to the right edge and left it there once it wrapped onto its own line, so
the two header rows hung off opposite margins. It is now `flex:0 0 100%`: its own row by
intention, flush with the kicker above and the headline below. Verified — all three sit at the
same x.

---

## 14. The empty right third of the masthead, 2026-11-08

Reported as "主頁的排版 右邊空了一塊". It was one element, and it carried **three** stale width
caps — `.tension-bar{max-width:560px}`, `.mast-tension{max-width:700px}` and a second
`.tension-bar{max-width:640px}`. Equal specificity, so source order decided it and the oldest
560px rule was the one in force; the other two had been edited in good faith and never applied.

All three were inherited from the two-segment tension bar this chart replaced. That bar was one
track and had no use for more width. The evidence-strength chart is five ranked rows, and at
560px inside a 1132px header it left the right **492px empty for the chart's full 271px height** —
a dead rectangle between the headline above and the figures band below, in the first screen of
the home page.

**The columns were also the wrong way round.** `.es-row` was
`minmax(0,1fr) 92px 74px`: the label took every spare pixel and the bar stayed a 92px stub, so
removing the cap alone would only have stretched five lines of 12.5px type. Inverted to
`minmax(0,340px) minmax(90px,1fr) 74px` — 340px is the longest theme name in the set at its
rendered size ("Where the Product Comes Apart Is Designed, Not Hidden", ~310px), so nothing
ellipsises, and the **track** now takes the slack. The bar is the part the reader measures by
eye; bar length being comparable at a glance is the only reason to draw this as a chart rather
than a list, and the bars share a left baseline, which is what makes that comparison legitimate.

The two caption lines under the chart gained a `max-width:660px` of their own. They are prose,
not chart furniture — at 1100px a line of 11px type runs past 180 characters and the eye loses
the return.

| | before | after |
|---|---|---|
| Chart width in a 1132px header | 560px | 1132px |
| Bar track at 1440px viewport | 92px | 694px |
| Dead space right of the chart | 492px | 0 |
| Theme labels truncated | 0 | 0 |

Checked at 1680 / 1440 / 1180 / 1024 / 900 / 820 / 620 / 390, in both languages. No horizontal
overflow at any of them (`scrollWidth == clientWidth`), and no label ellipsises above 620px. At
620px and below the existing mobile rule still applies and still inverts the columns back — at
that width the label needs the room more than the bar does, and 4 of 5 labels ellipsis there
exactly as they did before this change.

**Not changed:** the headline still stops at its 15.5em measure, leaving ~280px open on its
right. That is a type measure, not a layout gap — a 55px display line set to the full 1132px
would run past 60 characters.

---

## 15. Correcting §14 — reading span, and what a "brand" is, 2026-11-09

Two things, reported together off the live page: **「資訊跨距太大」**, and **「brands 是指甚麼?」**.
They have one root. §14 filled the empty right third by stretching the chart across it, which
fixed the hole and created a worse problem: every row became a 1130px journey — label at the far
left, bar, then the figure that label refers to a thousand pixels away at the right margin, five
times over. And the one word that defines the unit, *independent*, was 500px away in 11px grey
type at the bottom.

**Reading span.** The chart is back to a 700px measure and the space is filled by something that
belongs in it rather than by stretching: the caption that defines the unit is promoted from a
footnote underneath to a margin note beside the first row. `.es-main` carries the 700px cap
itself, not just the grid column, so the single-column fallback below 1120px cannot hand the
chart the full header again and reintroduce the span.

| | §14 | now |
|---|---|---|
| Label-to-figure span | 1132px | **700px** |
| Bar track at 1440px | 694px | 262px |
| Dead space right of the chart | 0 | 0 — the note sits there |

**What a brand is.** The chart had no title at all; it simply appeared under the headline. It now
carries one, in the same label style the week axis below it already uses: *How well sourced each
theme is · bars are independent brands*. The number is read live from `THEMES[].counts.brands`,
which is the count of **distinct parent companies** behind a theme's supporting cases, not the
number of reports:

| Theme | reports | brands | why they differ |
|---|---|---|---|
| Feedback Is Specified by Who Has to Read It | 14 | **14** | no discount — 14 brands, 14 occasions |
| Which Actions Earn a Physical Control | 13 | **10** | Alfa Romeo + Peugeot + Citroën = one Stellantis press day; Kindle = Amazon |
| Mass and Fit Are Specified Before the Feature Set | 13 | **9** | Meta supplies 3 from one W39 cycle, XREAL 2 |
| The Body Is Published as an Attachment Interface | 10 | **9** | FIAT = Stellantis/Mondial |
| Where the Product Comes Apart Is Designed, Not Hidden | 6 | **5** | two reports are the same Logitech Rally family |

The bar is drawn in brands rather than reports on purpose — report count measures our own
editorial choices, brand count is the closest thing in this corpus to an outside signal. That was
the entire reason the two-segment tension bar was replaced (§4), and until now the chart never
said so on the page.

Checked at 1440 / 1100 / 900 / 620 / 390 in both languages: span holds at 700px down to the
620px rule, no label truncates above 620px, no horizontal overflow.

---

## 16. The margin note is gone, 2026-11-09

**This supersedes the layout half of §15.** That section's answer to the empty right side was to
promote the chart's caption into a margin note beside it, and its table claims the space is filled
by that note. It is not — the note was removed on instruction: **「旁邊不要有說明，整理排版就好」**.

The reasoning is sound and worth keeping on the record, because it reverses my own: a sidebar of
explanatory prose next to a five-row chart is one more thing competing for the eye in the first
screen of the page, and open space to the right of a 700px measure is not a fault that needs
filling. Three attempts in two days went 560px → full width → two columns; the answer was none of
them. The block is now one block, one left edge, one measure:

```
HOW WELL SOURCED EACH THEME IS · BARS ARE INDEPENDENT BRANDS   ← label, 700px
Feedback Is Specified by Who Has to Read It  ████████  14 brands ← rows,  700px
…
Independent brands behind each theme — not report counts …      ← caption, 700px
```

Everything in it measures 700px and ends on the same right edge — label, all five rows, both
caption lines. Verified at 1440 and 1043, EN and 中: all four report `left: 149 / right: 849` at
1440. The caption's own 660px cap went with the change (it stopped short of the rows above it),
and `.es-rows{margin-bottom:11px}` went too — with `.tb-notes{margin-top:13px}` it was stacking
24px of dead space into the middle of a single block.

**Kept from §15:** the chart's label. It answers the question that prompted all of this — what a
"brand" is — and it sits above the rows, not beside them.

**Open space on the right of the masthead:** the headline stops at its 15.5em measure and the
chart at 700px, so the right of both is open. That is now a deliberate state, not an unresolved
one.

---

## 17. A picture in the masthead, 2026-11-09

Requested as **「頁首加入圖片讓視覺起來更均勻」**. §14–16 tried to settle the open right side of the
header by moving the chart around three times. The header was missing a picture; the chart was
never the wrong width.

**The picture is not decoration and was not chosen for looks.** The thesis names two artefacts —
"a moulded boundary, a deleted feature" — and `THEMES` records both as specific cases under
*Feedback Is Specified by Who Has to Read It*:

| thesis phrase | case in THEMES | note in the data |
|---|---|---|
| a moulded boundary | Ring 2026 Camera Family · "A lens with a physical boundary" | "the boundary is moulded, not rendered, so it cannot be switched off" |
| a deleted feature | Ray-Ban Meta Audio · "No lens-corner camera eye" | "the capability is removed so the cue is the absence of hardware" |

The masthead shows the second. The shot comes from the Ray-Ban Meta Audio report's own image set —
worn, in context, not a plinth — and it was checked against the rendered page before being added:
it appears nowhere else on the home page, and nothing new was sourced for it. The caption carries
the claim rather than just the product name, and links to the report.

**Layout.** `.mast-lede` is a two-column grid: headline and chart left, picture right at 380px.
The chart keeps its 700px measure untouched — 380 + 44 gap leaves 708 at the widest content
column. The figure stretches to the row height rather than carrying a fixed one, so it is as tall
as whatever the headline wraps to. Below 1024px it goes under the chart at 16:9.

**The crop took three attempts and is worth recording.** Meta's frame has a burned-in voice-UI
chip reading "Hey Meta, what are the most" across the top right, 49%–88% of the width:

| attempt | result |
|---|---|
| `object-position:50% 34%` | chip in frame, cut off mid-word — someone else's marketing copy, broken, in our masthead |
| `object-position:0% 30%` | chip's rounded edge and part of its icon still showed in the corner |
| `0% 30%` + `scale(1.18)` | visible window 42% of the source width instead of 50% — seven points clear |

A 380×658 column against a 1920×1672 source shows half the width and all of the height, so the
chip can only be excluded horizontally. Stacked, the crop turns landscape and the problem inverts:
full width, 64% of the height, so the chip has to go vertically instead — `50% 52%` puts the window
at 18%–83% and the chip ends at 15%. **The remaining 16:9 images in that report set are all 1.78,
which crop badly to a portrait column; the only near-square source in the set is the one with the
chip on it.** That is why this is solved with a crop rather than by swapping the file.

Three candidates were compared at full size before committing. The Ring family shot was rejected:
it is a near-white studio set that reads as a glaring block on a black page, and at this crop the
moulded boundary it is cited for is not legible anyway.

**Two fixes came out of it:**
- `alt` added to `ATTRS` in `i18n.js`. The three attributes already there were handled identically,
  so this is the same code path, and an alt with no entry stays English like everything else. The
  masthead alt describes the empty lens corner — the first alt on this site worth reading.
- The caption's link is `display:block`, not `inline-block`. The Chinese caption is shorter and
  left room on the last line, so the link sat mid-sentence in 中 and on its own line in EN.

Verified at 1440 / 1000 / 390, EN and 中: figure 380×633 beside a 700px chart at 1440, 700×394
stacked at 1000, no chip visible in either crop, no horizontal overflow, no console errors, and
the caption, link and alt all translate.

---

## 18. Correcting §17 — the crop and the bottom edge, 2026-11-09

Reported off the live page: **「圖片的裁切位置看起來有問題，另外底下的邊線應該要跟旁邊的文字對齊」**.

### The bottom edge

`.mast-tension` carried `margin:0 0 32px`. Inside the left column that margin counted towards the
column's height, and the figure beside it stretches to the row height — so the picture's bottom
edge finished exactly 32px below the last line of text next to it. **The margin belonged to the
row, not to the element at the bottom of one of its columns.** Moved to `.mast-lede`; the 760px
override moved with it; the stacked rule changed from `margin-bottom:30px` to `margin-top:30px`,
because the gap below the row is now the row's and the chart no longer has one of its own.
`figure.bottom - .tb-scope.bottom` is now **0** at 1280, 1440 and 1680, in both languages.

### The crop — the image was the problem, not the crop

§17 solved the burned-in "Hey Meta, what are the most" chip with a 1.18 scale. That was treating
the symptom. The chip occupies 49–88% of the width at 8–15% of the height, and in this frame the
subject's head spans 5–62% of the width — **the chip sits on exactly the corner the composition
needs**, so a tall window forces a choice:

| | result |
|---|---|
| pin the window left, keep full height | whole head, but the right half of the glasses is cut |
| crop below the chip at 18–20% | whole glasses, but the top of the head is cut and two thirds of the frame is neck and jacket |

Three crops were rendered at the true 380×601 and all three lost something the caption is about.

**Changed image — same report, different frame:** `FVqRF2qhXhL7b6dCWxF7Sd-1200-80.jpg`, the
Ray-Ban Meta Audio glasses on a stand at the press event. No overlay anywhere in it, and it shows
the claim more directly than a worn shot can: both lens corners are square to the camera and
visibly empty. A tall window takes a 36% vertical slice — poster band above, glasses across the
middle, floor below — and `object-position:42%` puts that slice on the lens fronts rather than on
a temple. The `transform` is gone; it only ever existed to push the chip out of the old frame.
Checked before swapping: the file is used nowhere else on the home page.

Five candidates were compared at full size. The worn shot by the same publication was rejected for
the reason above; the Ring family shot stays rejected as a near-white studio set (§17); the
outdoor worn shot reads as stock photography and the glasses are too small in frame.

Verified at 1680 / 1280 / 980 / 390, EN and 中: 380×601 beside a 700px chart above 1024px,
700×394 stacked below it with a 30px gap, bottom edges flush, no horizontal overflow, no console
errors, caption and alt both translating.

**Standing note for the next period:** the corpus is almost entirely 16:9 press imagery. A tall
masthead column needs a frame whose subject is vertical or centred, and that is a real constraint
on which report can supply the masthead picture — not a reason to force a crop.

---

## 19. The masthead picture is now chosen, not cropped, 2026-11-09

**「在直式的狀態要能完整顯示重點 要依此挑選」** — and that is a selection criterion, not a crop
setting. §17 and §18 both treated it as a crop problem and both were wrong in the same way.

**The arithmetic nobody checked first.** The column is 380×601, aspect 0.63. A window that shape
over a **16:9** source keeps **36% of its width** and all of its height. A pair of glasses spans
the frame by definition, so every Ray-Ban frame in the corpus loses its own subject in this
column — which is what the live page was showing: half a pair of glasses under a caption about
lens corners. The same window over a **1:1** source keeps **63%**.

| source | kept in a 380×601 window |
|---|---|
| 16:9 (1.78) | 36% of width |
| 3:2 (1.50) | 42% |
| 1:1 | **63%** |

**So the question became which report publishes square imagery.** The Ring 2026 Camera Family
report does — its set is 1500×1500 from Ring's own CDN, product centred. Ring is also the
thesis's **first** artefact, and the better one for this headline: THEMES records it as
Ring 2026 Camera Family · "A lens with a physical boundary" · *"the boundary is moulded, not
rendered, so it cannot be switched off"* — which is the sentence the headline ends on
("Firmware cannot switch those off"). The caption says exactly that and no more.

Six frames were compared at the true 380×601:

| frame | verdict |
|---|---|
| floodlight cam, wall, dusk, lamps lit | **chosen** — whole product in frame, lens and its moulded boundary legible at 380px, in context |
| pan-tilt cam, kitchen counter | rejected — **already the Sensing & Capture Devices tile further down this page** |
| indoor cam render, white | rejected on the hero-image rule, though it shows the boundary best |
| outdoor cam, solar, white | same |
| exploded install view | near-white studio set, and it is about mounting, not the lens |
| floodlight family lineup | the bright studio wall of §17, still rejected |

`object-position` is back to `50% 50%` and there is no transform: when the picture is chosen for
the shape it has to live in, the crop stops having work to do. The stacked state moved from
16:9 to **3:2** for the same reason — 16:9 would show 56% of a square source's height, enough to
clip the base of the camera while the caption covered the rest; 3:2 shows 67% and holds the whole
product.

Verified at 1680 / 1440 / 980 / 390, EN and 中: 380×601 beside a 700px chart with bottom edges
flush (`bottomDelta 0`), 700×467 stacked, no horizontal overflow, no console errors, caption and
alt both translating.

**The rule for next period, stated once so it is not rediscovered a fourth time: pick the
masthead picture from the square or portrait frames in the week's sets, and check it carries its
point whole at 380×601 before writing a caption about it.** The corpus is overwhelmingly 16:9
press imagery, so this genuinely constrains which report can supply the picture. That is a
selection constraint, not a cropping problem.
