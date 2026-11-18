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

---

# W46 content sync — 2026-11-16

**Nothing here is deployed.** Verified locally only, over a temporary static server on
`http://localhost:8099`. Per §10.3 the site is not claimed to be updated or live. **V3 and V4 are
untouched** (confirmed: no file in either folder has a 2026-11-16 timestamp).

Source: the edition the user promoted into `01_Weekly Report\W46`, i.e.
`Weekly_Design_Trend_Report_2026-W46.zip` (43,122 B, 7 entries). This is the GPT-produced edition,
the same one as `04_GPT_Weekly Report\W46` byte-for-byte — **not** either of the two Claude W46
runs that sit in `03_Claude_Weekly Report\01_Scheduled weekly trend report\`. Those two were left
alone.

## Files added

`weeks/W46/` — six report HTML files plus `index.html`, transformed exactly the way W45 was:

1. `referrerpolicy="no-referrer"` added to every `<img src=`.
2. On the week index only: `.index{padding:72px 0}` replaced with the `.index` / `.topline` /
   `.back` rule block, and a `<div class="topline">` back-link inserted after `<div class="wrap">`.

The transform was validated before use by replaying it against the W45 ZIP and diffing the result
against the W45 files already in the site — byte-identical on all five, so this is the established
transform rather than a guess.

## Domain assignments

Per `environment-overrides.md` §8, the domain follows the report's SUBJECT.

| Report | Domain | Why |
|---|---|---|
| Ring Robotics | `robotics` | The subject is a machine that drives and flies around a building — the same kind of subject as Skydio F10 and DJI Matrice 5T. Deliberately NOT filed with the W41 Ring camera family in `ai`. |
| Samsung Intelligent Eyewear | `ai` | Worn capture device, beside Ray-Ban Meta and XREAL AURA. |
| SwitchBot Curtain Track 4 | `consumer` | Smart-home retrofit, beside Apple HomeView. |
| Apptronik Apollo 2 | `robotics` | Humanoid. |
| Arlo Video Doorbell (3rd Gen) | `ai` | A fixed camera — the opposite case to Ring Robotics, and exactly where the W41 Ring cameras sit. |
| Polestar Formula 2030 | `automotive` | Concept car. |

## Merged rather than fragmented (§7.5)

- **TOP_SIGNALS "Visible Sensing State"** +Ring Robotics +Samsung Intelligent Eyewear → 3 evidence
  to 5. Same mechanism the signal already names: the cue is carried by shape or by range, not by
  an indicator firmware owns.
- **DOMAIN_TRENDS.ai "Visible Sensing State, Physical Not Just Software"** +Samsung.
- **DOMAIN_TRENDS.automotive "The Dial That Declares Drive Mode"** +Polestar — its analytical card
  "The tunnel concentrates mode choice" states this claim directly.
- **DOMAIN_TRENDS.consumer "Service Access Designed Into the Mount"** +SwitchBot — "Charge without
  removing the motor" is the same mechanism as Logitech's serviceable mount.
- **AESTHETIC_TRENDS "Every Colour Points at Something"** +Polestar — "A quiet weave carries the
  accent" and the steering-wheel yellow as an orientation cue.

## Added as new

- **TOP_SIGNALS "The Robot's Body Reports Its Task"** (Ring Robotics, Apptronik Apollo 2). Two
  independent brands, so it clears the OBSERVATIONS bar. Not merged into "Visible Sensing State"
  (that is about whether a sensor is capturing; Apollo 2 has no privacy argument at all) and not
  into "State Has to Be Readable Mid-Task" (that is the operator's own body carrying their state).
- **DOMAIN_TRENDS.robotics "Status Has a Fixed Place on the Body"** (Apollo 2, Ring Robotics).
- **DOMAIN_TRENDS.robotics "Wear Parts Declared as Separate Objects"** (Apollo 2, single report).
- **DOMAIN_TRENDS.ai "The Power Path Decides What Gets Recorded"** (Arlo, single report).
- **DOMAIN_TRENDS.consumer "Fit Is Published Before the Purchase"** (SwitchBot, single report).
- **DOMAIN_TRENDS.automotive "The Display Swaps Cards, Not Sizes"** (Polestar, single report).

## THEMES

Cases added, each quoting an analytical-section heading and nothing from an apply card:

| Theme | Case | `at` |
|---|---|---|
| Feedback Is Specified by Who Has to Read It | Ring Robotics | The screen announces its role |
| Feedback Is Specified by Who Has to Read It | Apptronik Apollo 2 | The chest gives status a home |
| Feedback Is Specified by Who Has to Read It | Samsung Intelligent Eyewear | Controls sit along the arm |
| Where the Product Comes Apart Is Designed, Not Hidden | SwitchBot Curtain Track 4 | Charge without removing the motor |
| Where the Product Comes Apart Is Designed, Not Hidden | Apptronik Apollo 2 | A rear pack exposes service intent |
| Which Actions Earn a Physical Control | Polestar Formula 2030 | The console keeps controls in reach |
| Mass and Fit Are Specified Before the Feature Set | Samsung Intelligent Eyewear | The temple carries the load |

Counts restated honestly. **The feedback theme loses its perfect-independence property**: Ring
Robotics is a second Ring report, so 18 reports are 17 brands. It was the only theme in the set
with no shared-parent discount; it now has one. The occasions are still all distinct.

Service access goes from 6 reports / 5 brands to 8 / 7 and is no longer the weakest theme in the
set. Its `inference` is restated: the access-path versus styled-boundary split is now four to two,
and Apptronik joins Panasonic and Logitech as a case that does both.

## Claims deliberately NOT made

- **Samsung's recording light is not cited as a bystander interlock.** The report states only that
  "an outward LED signals image capture". Its stronger bystander language, "Signal capture to both
  sides", is apply card 03 — a recommendation, not a shipped feature.
- **Apollo 2 is not added to "Seams Are Drawn Now, Not Erased".** It does draw a dark joint
  mechanism against white protective panels, but the report's reason is reading moving parts apart
  from fixed ones, not that the part behind the boundary comes off. Different claim.
- **The candidate sixth theme is not promoted.** The ANYmal entry in `UNCLUSTERED` recorded
  "designed around installed infrastructure" as a three-brand watch item. W46 takes it to five
  brands (SwitchBot's published clearances, Arlo's power-branched setup). Promoting it is a
  structural change to the theme set and to every brief's `skip` list, so it is recorded for a
  decision rather than declared in a sync. **This is the one open editorial question from W46.**

## Headline discipline (§7.7) — recomputed, not reused

The displayed top three are "The Surviving Button Declares Mode" (8 evidence, 25 words), "The
Chassis Is a Mounting Platform" (7, 27) and "Visible Sensing State" (5, 25). **Ceiling = 27
combined words**, not the 21 from the 2026-10-27 precedent.

Nine of the 24 displayed domain Trend Signal cards were over it and were shortened: the automotive
drive-mode dial (32), the ai tether (32) and head-shape (30) entries, the wearables pairing dongle
(30) and one-action (28), the new robotics body-status entry (28), the consumer managed-room
object (31), and the mobile mode-change (33) and tier-colour (32) entries. All 24 are now within
the ceiling.

Two domain **Key Takeaway** leads were over the 12-word / 80-character limit and were shortened —
`wearables` at 15 words / 85 characters and `consumer` at 84 characters. Both pre-existing; caught
by running the whole checklist rather than only the entries W46 touched. The `robotics` lead was
also at 82 characters and was shortened as part of its rewrite.

## One code fix in `index.html`

The first delta chip counted only `new` — signals whose ONLY active week is the latest one. A
signal that had run for three weeks and gained a report this week was excluded, so the chip read
"1 of 14" when two signals had actually taken a W46 report. The second chip compounded it by
saying "of them", which framed `building` as a subset of `new` when `momentumTag` makes the two
mutually exclusive by construction — that sentence could never have been true. Both numbers now
come off the same set and read "3 of 14 signals picked up a W46 report · 2 of those run across
several weeks".

## Chinese layer

Editing the English orphaned a set of existing translations, which would have made the 中 view
*worse* than before this sync. Repaired and extended in `i18n.zh.js`: **635 keys, up from 544.**

Across the whole shell — home page, eight domain pages, four overview pages, the brief and the
waiting list — the only untranslated strings left are `TC53 / TC58 · MC9400 · EDA-class` and
`EICMA 2026 · Fiera Milano Rho`, both of which the file's own rule says should stay English, plus
report and brand names and ZIP filenames, same rule. W44 and W45 leftovers were cleared too.

Two generated-string rules were added: the two lede chips were rewritten in English on 2026-11-10
and their `I18N_ZH_RULES` patterns were never updated, so both chips had been falling back to
English ever since. Also `· N reports`.

Individual report documents under `weeks/` remain English only — unchanged scope.

## Verification actually performed

Run over a temporary PowerShell `HttpListener` static server, because this project has no Node or
Python and the browser pane will not execute a local file.

- `data.js` parses; **every `evidence` title in TOP_SIGNALS and DOMAIN_TRENDS resolves to a real
  report in `ALL_REPORTS`** (57 reports).
- Masthead reads "Generated from 57 reports · W39–W46 · latest 2026-11-12".
- Sidebar shows W46 first and exactly 8 weeks (`WEEKS.slice(0,8)`); `weeks-overview.html` lists all
  eight uncapped. `WEEKS` is now at the cap of 8 — the ninth week will need the overview page to
  carry the overflow, which it already does.
- Latest-reports feed shows all six W46 topics.
- Home page: 52 images, **0 broken**. All 15 shell pages: 0 broken images, 0 console errors.
- Week index: back link resolves to `../../index.html`, all six cards link correctly, all 6 images
  carry `referrerpolicy`.
- **All 108 report images loaded in a real browser** — 108 `<img>` across six files, 108 unique
  URLs, 0 failures, 100% carrying `referrerpolicy="no-referrer"`. Repeated dimensions per host
  (Ring 1500×1500, Polestar 1000×563, YouTube 480×360) are each publisher's standard render size,
  and Polestar's is `w=1000` in the URL itself — no hotlink-placeholder signature.

## Two fixes after the first review, same day

**1. The aesthetic gallery layout, which this sync broke.** A Polestar image was added to
"Every Colour Points at Something" and it is **960×1704 — portrait**. `.aes-media` is
`align-self:stretch` inside a flex row and the tiles take their height from the row, so one
portrait source drove that feature's row to 804px against the ~440px of its neighbours: four
224×399 tiles, a text column stretched to match, and a void under the copy.

The image was removed rather than substituted. The only two frames in the Polestar report that
carry this claim are both portrait (`28-d` 960×1704, `08-d` 640×1136), and the landscape frames
show something else — `12-d` is the harness, not "the zone a hand reaches for". Polestar stays in
`evidence` and in `detail`; the gallery keeps four shots that each show their own claim.
`aesMedia()` caps at 4, so the fifth image had only displaced Kindle anyway.

Re-measured: the four features are now 413 / 437 / 343 / 503 px with **0 portrait tiles**.

The earlier image check grouped results by host and flagged only groups of five or more identical
dimensions, looking for hotlink placeholders. A single odd-shaped image passes that test. **Check
the natural aspect of any image going into a stretch-height grid, individually.**

**2. All eight domain blurbs rewritten.** They had grown into roll-calls — automotive was one
150-word sentence naming fifteen products, which is the index the page already shows underneath.
A domain summary should say what kind of product sits here and what question it keeps raising;
the evidence belongs on the trend cards. All eight are now 32–35 words, two sentences, and the
cards on `domains-overview.html` sit at a uniform 481–494px instead of ranging from one line to
twelve.

Chinese updated with them — `i18n.zh.js` is at **643 keys**. Re-swept all 15 shell pages in 中:
the only untranslated strings are still `TC53 / TC58 · MC9400 · EDA-class` and
`EICMA 2026 · Fiera Milano Rho`, 0 broken images, 0 portrait gallery tiles.


# Candidate sixth theme — audited and closed, 2026-11-17

Standing instruction from this date: a pending editorial item is not carried to the next week.
The trend state has to be current every week, so the candidate recorded on the ANYmal
`UNCLUSTERED` entry was resolved rather than deferred to W47.

**It was not promoted, and the reason matters more than the outcome.** The decision was taken by
re-reading every analytical card in all 57 reports — a scripted sweep over each report's `h3`
headings and their body paragraphs, excluding the last four headings of every file, which are
the "What Zebra Can Apply" cards. Two things in the three-version-old note turned out to be wrong.

**1. The candidate was named after an apply card.** ANYmal's "Design around installed
infrastructure" — the phrase the whole candidate was built on — is apply card 15 of 16, not an
observed practice. Under the project's own rule an apply card is a recommendation to Zebra and can
never evidence that anyone shipped the thing. It had survived three versions of `data.js` unchecked.
The analytical card that genuinely carries the idea is **"Existing plants are the design
constraint"**: pipes, barriers and service lanes define the deployment context, and the access
system must work with, not replace, those facilities. The case survives; its citation was wrong.

**2. Logitech was not a fifth brand.** "Mount geometry reduces labor" is about one-person
installation effort, not about conforming to infrastructure the maker does not control. Rally Bar 2's
other cited headings ("Ports are grouped behind the body", "The cable side is intentionally
reachable") are service-access claims that theme already holds.

So the real count is **four independent brands, not five**:

| Brand | Analytical card | What it actually says |
|---|---|---|
| SwitchBot Curtain Track 4 | Compatibility precedes setup | U-shaped tracks only; I-rails and rods out of scope; buyer checks before purchase |
| Arlo Video Doorbell (3rd Gen) | Installation stays at the entrance | "a battery-powered path and a hardwired path rather than one universal installation" |
| Ring 2026 Camera Family | One enclosure, another power route | "the same capture head can serve a different infrastructure condition" |
| ANYmal Door Access | Existing plants are the design constraint | "must work with, not replace, those facilities" |

Four is below the weakest theme in the set (service-access, seven brands). The broad reading also
fails the newness test: retrofit hardware sized to rails that already exist was sayable twenty
years ago. The genuinely new and narrower claims — **the fit check published as a pass-or-fail gate
before purchase**, and **the building's wiring deciding what the product may record** — are already
carried at the right scope by two `DOMAIN_TRENDS` entries added in the W46 sync, consumer
"Fit Is Published Before the Purchase" and ai "The Power Path Decides What Gets Recorded".
Promoting a sixth theme would restate those two on weaker evidence.

**Reopen condition, written into the entry:** two further independent brands publishing a
pre-purchase fit gate, or tying a recording capability to the building's power path. At six brands
it clears the bar and the two domain trends should be merged up into it.

`THEMES` is unchanged at 5. `UNCLUSTERED` stays at 9 entries; the ANYmal and Arlo `why` strings
were rewritten. `i18n.zh.js` holds at **643 keys** — two keys replaced, not added. Verified in both
languages on `domains/Robotics.html` and `domains/AI_Devices.html`: the new text renders, and every
remaining untranslated string is a product name, brand name or ZIP filename, which stay English by
design.

# Hero images re-audited at the real crop, 2026-11-17

Reported: "這張照片完全沒有出現對應的產品" against the ai trend **Visible Sensing State, Physical
Not Just Software**. Correct, and the cause was not a broken URL.

**The card geometry is the whole story.** A domain-page trend hero is `.signal-bg` at
**1177×380 — ratio 3.10** — `background-size:cover`, `background-position:50% 50%`, under a
`linear-gradient(.1 → .62 at 55% → .97)` overlay. So two things happen to every hero: a hard centre
crop to 3.10, and the bottom half darkened almost to black because the headline and body sit there.
**The usable area is the upper-middle band of a 3.10 centre crop.** Nothing in the pipeline checked
that.

The old URL was Ray-Ban's own `rbm-pdp-ho26-aperol-features-capture-cover-data.jpg` — the filename
says "features capture cover", the file is a fashion campaign frame: airport stairs, 1934×1000, the
glasses small and inside the top ~8%. The 3.10 crop removed the head, leaving a coat and a handbag
to illustrate a claim about capture indicators. **The filename is why it survived review.**

## Site-wide re-audit

All **48** `heroOverride` values — `TOP_SIGNALS`, `AESTHETIC_TRENDS` and all eight `DOMAIN_TRENDS`
— were re-rendered at exactly 3.10 with the real gradient and inspected. Three were replaced, each
from the trend's **own** evidence reports:

| Trend | Was | Now |
|---|---|---|
| ai · Visible Sensing State, Physical Not Just Software | Ray-Ban campaign frame, head cropped off | Ray-Ban Meta Gen 3, "Hand-held Aviator front corner camera and indicator" |
| mobile · Vulnerable Controls Move Away From the Hand | Soft pale surface, nothing identifiable | Kindle Click in hand, thumb on the physical control |
| wearables · Power Scarcity as a Named Workflow State | Hiker and battery-day figures, no device in frame | Amazfit T-Rex Dual Solar on a sunlit wrist |

No duplicates introduced: both replacement URLs appeared zero times in `data.js` beforehand. The
four remaining duplicate-URL groups are the intentional TOP_SIGNAL ↔ DOMAIN_TRENDS pairs (same
claim at two scales, never on the same page) and were left alone.

**Left as judgement calls, flagged not changed** — the product or the claim-carrying content is
present, the frame is just weak: ai · Fit, Hinge & Service Parts (fabric macro, product unclear);
ai · The Power Path Decides What Gets Recorded (wiring spec graphic, mostly white, small type);
consumer · Threshold Status Made Public and consumer · Shared Screens Adapt to Distance and Identity
(light-background UI screenshots that read as pale side panels under the gradient).

## The rule this establishes

A hero is verified by **rendering it at the card's real aspect, crop and overlay**. Never from the
filename, never from the full frame — the full frame is not what ships. Added to `data.js` as a
comment on the replaced entry so the next sync inherits the reason rather than the URL.

# Two follow-ups, 2026-11-18

## The ai hero fix was wrong the first time

Reported: the two marked cards on the ai page look too alike. Correct. The replacement chosen
on 17 Nov — a Ray-Ban Meta Gen 3 hand-held close-up — sits two rows above
**One Head Shape Can't Be the Default**, which uses *that same product's report hero*. A page
image census confirmed the scale of it: `images2.ray-ban.com` appears **8×** on that one page.
Fixing "no product visible" by reaching for the nearest good product shot produced a duplicate.

Now **Ring 2026 Camera Family, Outdoor Cam 4K Plus on its wall mount** — the only non-eyewear
evidence this trend has, and the strongest case for the claim, since Ring's boundary is moulded
into the housing and cannot be switched off in software.

**The check is now two-part, not one:** the product must survive the 3.10 crop **and** must not
repeat a product already shown on the same page.

The census also surfaced two repeats nobody has reported yet: **sports** runs both its trend
heroes off the same adidas Freerider shoot (`adidas-Freerider-Pro-BOA-scaled` /
`adidas-Freerider-Pro-scaled`), and **consumer** runs two of three off Logitech Rally hardware.
Flagged, not changed.

## `.lede-act` box removed

Reported as a bracket that matches nothing else on the page, and it was: `.lede-act` was the only
element carrying a full 1px outline **plus** a 3px accent rule down its left edge, and at full
width that outline reads as a bracket drawn around the row. Everything else in that column is
separated by horizontal rules alone.

Border, radius, background and horizontal padding are gone; the thumbnail's left edge now lines up
with the section label and headline above it. Hover had been carried entirely by the border, so it
moved to the title colour plus a small lift on the thumbnail — the row is still an `<a>`.

## Homepage image provenance — answering "several never seem to change"

Measured rather than estimated. The homepage renders **55 image slots, 47 unique URLs**:

| Source | Count | Changes week to week? |
|---|---|---|
| Pinned `heroOverride` strings | 10 | **No** — only when someone edits `data.js` |
| Older report heroes | 13 | Only when a signal's evidence set changes |
| Evidence thumbnails and section art | 18 | Rarely |
| **W46 report heroes** | **6** | **Yes — these are the new ones** |

So roughly **6 of 47 images turn over in a normal week**, and the three largest banners at the top
are among the ones that do not. That is structural, not an oversight: `pickTopSignals` ranks by pure
evidence count and takes the top three, and the leaders — Surviving Button (8), Chassis Is a
Mounting Platform (7), Visible Sensing State (5) — have held those places for weeks. Their images
are hard-coded strings, so the top of the page looks identical even in a week with six new reports.

# Image selection rebuilt as a mechanism, 2026-11-18

Three reports in sequence — "這兩張圖重複性太高", "有好幾張圖感覺一直都沒有變", "如果有更適合的
圖片就要更新" — are one problem: picking heroes by hand, one at a time, with no rule behind it.
Both selectors were rewritten.

## What was broken

`trendHero()` in `domains/_shared.js` pushed `heroOverride` **first**, so a pinned string always won
and a banner stayed frozen regardless of new evidence. Behind it, evidence was walked in author
order — roughly oldest-first — so even unpinned trends showed their oldest case. De-duplication
compared **exact URLs**, which two different photographs of the same product pass cleanly: that is
precisely how the ai page ended up with two Ray-Ban Meta Gen 3 banners. `signalHero()` in
`index.html` had the same ordering fault and **no de-duplication at all**.

## What they do now

1. **Curation leads.** `heroOverride` is first in the candidate list. A hero is chosen for
   suitability, not freshness.
2. **Then same-domain evidence, newest first.** Same-domain outranks newer cross-domain evidence:
   with a plain newest-first sort the *mobile* banner became the Signode warehouse AMR, because
   Signode (22 Oct) is newer than the Kindle (4 Oct) and both are real evidence. Valid evidence,
   unreadable banner. Cross-domain evidence belongs in the evidence strip, not the domain headline.
3. **The duplicate guard keys on the product**, not the URL — the report an image belongs to, or
   failing that its host. A second frame of the same product, or a second shot from one press kit,
   is skipped for the next candidate. This is also what stopped *consumer* running two Logitech
   Rally units. The guard can push past an override whose product is already on screen, so curation
   cannot reintroduce a duplicate.
4. **Fallback is explicit and ordered:** unused candidate → any candidate with an unused product →
   first candidate, duplicate and all, because a repeated picture beats no picture.

## Domain cards

All eight `DOMAINS[].cardImage` values were pinned and **none had ever been revisited**, so the
domain strip looked identical every week. Each was compared against the newest report in its domain,
rendered at the card's real 567×284. **Three were beaten and updated:**

| Domain | Was | Now |
|---|---|---|
| automotive | Ferrari F80, an April screenshot | Polestar Formula 2030, rear three-quarter on a road |
| robotics | ANYmal power grid (W39) | Ring Robotics Rover in an office corridor (W46) |
| mobile | Kindle frame (W40) | motorola signature 27 in the hand (W45) |

**Five were kept**, because switching every card to "newest report hero" wholesale would have made
three *worse*: ai → a portrait headshot, wearables → an airport scene with no device in frame,
consumer → a promo banner with marketing copy set into the artwork.

## Two further rules, added from review and now part of the check

- **A car reads as a car from the outside.** An automotive card takes an exterior frame however good
  the interior argument is. The Polestar interior briefly used here was reverted under this rule.
- **No image with headline or marketing copy burnt into it.** This disqualified the SwitchBot
  candidate for consumer ("Two Curtains, One Command" plus a legal footnote in the artwork). A card
  carries the site's typography, not the vendor's.

## Verified

Across all eight domain pages and the dashboard: **0 same-product repeats, 0 broken images**, and
all eight domain cards pass the no-burnt-in-text check. Domain banners now lead with W46 cases
where the evidence supports it. The three dashboard Top Signals still show the same products — that
is the *ranking* (`pickTopSignals` is pure evidence count and the leaders have held for weeks), not
the image logic, and all three overrides are good matches to their claims.

**Not a defect, recorded so it is not "fixed" later:** *sports* shows two adidas Freerider frames
because the sports domain holds exactly one report in the whole corpus and both its trends cite only
that report. The two frames are different and each matches its own claim — the BOA dial for
"Reachable Micro-Adjustment Mid-Task", the sole and side for "Friction & Impact Zones". Swapping one
for variety would break the text-image match to fix nothing.
## Addendum, same day — a third rule, and a full homepage inventory

Two of the three domain-card updates above clashed on the dashboard and were reverted:

- **robotics → Ring Robotics Rover** was also the Ring Robotics *report* card (W46), and the ai card
  is a Ring camera — two Ring products in an eight-card strip. Now **DJI Matrice 5T (W45)**, the one
  robotics frame nothing else on the dashboard uses. Apollo 2 and Ring were blocked by their own
  report cards; Signode already appears in the lede thumbnail.
- **automotive → Polestar** was reverted *twice*: the interior under the exterior rule, then the
  exterior because Polestar is this week's automotive report and already holds a report card.
  Now **Toyota Snowhunter (W44)**.

**THIRD RULE:** a domain card must not come from the current week's reports. Those six already have
cards directly below the strip, so picking the newest report for a domain card guarantees the clash
every week; picking the best representative from outside the current week never does, and does not
churn when the week rolls over.

Verified on the dashboard: **18 large image slots, 0 same-product duplicates, 0 domain cards drawn
from the current week, 0 broken images page-wide.**

### What on the dashboard still never changes

| Slot | Count | Bound to | Refreshes? |
|---|---|---|---|
| Masthead figure | 1 | hard-coded URL (Ring Floodlight Cam, W41) | **No — never has** |
| Top Signal banners | 3 | pinned `heroOverride` + `pickTopSignals` ranking | No, while the same 3 signals lead |
| Aesthetic galleries | 14 | per-claim image lists in `AESTHETIC_TRENDS` | Only when a claim's evidence changes |
| Lede + "what Zebra" thumbs | 3 | `ZEBRA_PRIORITIES` lead item | Only when the priority changes |
| Domain cards | 8 | `cardImage`, now re-curated each sync | Yes, by curation |
| Evidence thumbnails | 20 | cited evidence | Yes, as evidence changes |
| Report cards | 6 | latest week | Yes, every week |

The masthead is the largest and most prominent image on the site, has not changed since W41, and is
a Ring camera — the same brand as the ai domain card. Flagged for a decision rather than swapped:
it is the site's opening image and the choice is editorial.

The aesthetic galleries are deliberately **not** rotated for freshness. Each frame is evidence for
one specific aesthetic claim, the same reason the sports banners stay on one shoe. They change when
the claim does, which is what happened to the Polestar frame in the W46 sync.
## Masthead replaced, and the Top Signal content audited — 2026-11-18

**Masthead.** Approved for replacement. It is 378×594 — **portrait, ratio 0.64**, `object-fit:cover`,
a different problem from the 3.10 banners, so the subject has to survive a tall narrow crop. The
thesis beside it names three things — *a moulded boundary, **a deleted feature**, a dock that covers
the lens* — and only the first had ever been illustrated. Now **Ray-Ban Meta Audio**: glasses shipped
with no camera at all, so there is nothing to switch off because there is nothing there. Caption and
report link updated with it, and the Chinese caption added (the old Ring line is kept in the
dictionary because the same sentence still runs as the Ring evidence caption elsewhere).

Two frames read the claim even more directly and were both unavailable under the per-page product
rule: "No lens-corner camera eye" is already the Visible Sensing State banner, and the Aviator
close-up is priority 02's picture. The rule applies to the masthead like anything else.

## Top Signal content — verified, with two false alarms of my own

| Check | Result |
|---|---|
| Every evidence title resolves to a real report | **Yes, 0 broken references** |
| Signals that took a W46 case | 2 — Visible Sensing State, The Robot's Body Reports Its Task |
| Do those two name their new cases in prose? | **Yes, both** |
| Momentum badges on the 3 displayed signals | 2 × "No new case this week", 1 × "Repeats across weeks" — correct |
| Week strips (`W39–W46 · 3 of 8 weeks`) | Computed per signal, all three differ — not hard-coded |
| THEMES declared counts vs actual case lists | **All 5 match exactly, 0 unresolved cases** |

Four entries cite evidence their prose never names: *The Surviving Button Declares Mode* (4 of 8),
*The Chassis Is a Mounting Platform* (3 of 7), *Every Colour Points at Something* (1 of 6), *Seams
Are Drawn Now, Not Erased* (1 of 6). **These are not defects.** A ~60-word detail cannot name eight
products, the evidence cards below list them all, and none of the W46-touched entries is affected.

**Two checks I wrote were wrong before the content was:**
- The first version flagged **55** entries, because it expected DOMAIN_TRENDS to name products in
  prose. They have a one-sentence `statement` and an `application` and are *designed* not to — the
  evidence is the cards. Only entries with a `detail` field are in scope.
- The second flagged *The Robot's Body Reports Its Task* for not explaining Apollo 2. The detail says
  "Apollo 2"; the check was looking for "Apptronik". Matching now uses any distinctive token.

Recording both because a verification pass that over-reports is worse than none — it invites
rewriting text that was already correct.

## Zebra priority card images

Priority **02** ("Make capture state legible to the person in frame") carries the Ray-Ban Aviator
front-corner camera and indicator — the rationale names Ray-Ban Meta's capture LED explicitly, so
picture and claim agree.

Priority **01** ("Find out whether workers lose track of the active capture profile") carries the
Signode forklift. That is the *operating environment*, not the claim: the card is about momentary
keys and DataWedge profiles on Zebra handhelds, and no Zebra product imagery exists in this corpus.
Defensible as context, flagged as the weaker of the two. Left unchanged pending a decision.
### Masthead, second pass

The first replacement was a man *wearing* the glasses and the face dominated the 0.64 portrait crop.
A masthead leads with the product. Now the same report's frame of the glasses alone on a plain
surface — real photography, product only, no person, no text, used nowhere else in `index.html` or
`data.js`. Two others were rejected on the way: the Ray-Ban report hero is a transparent-background
cutout, which on this dark panel is exactly the cutout look the background rule exists to prevent and
which already runs as an evidence thumbnail; "No lens-corner camera eye" is the Visible Sensing State
banner. Verified at the real geometry: natural 2560×1440, rendered 378×594, not broken.

**Correction:** a reported mismatch between the header's "LATEST 2026-11-12" and the stat tile was my
own misreading of a low-resolution screenshot. Both read 2026-11-12, which is Samsung Intelligent
Eyewear, the newest report in the corpus. Nothing was wrong and nothing was changed.
### Masthead, third pass — the real constraint was geometry

Both earlier replacements failed for one unexamined reason. The slot is **378×594, ratio 0.64 —
portrait**. Glasses are a *wide* object: any 16:9 photograph of a pair of glasses loses its sides to
a 0.64 centre crop and lands as an unreadable macro of a lens rim. The Ring floodlight this slot
opened with worked because it was 1500×1500 with the product centred — the CSS note said so, and that
constraint was never carried into the replacements. **Candidates are now filtered by source ratio
(≤1.25) before anything else is judged.**

Now **Ring Robotics, Drone Cam above its dock** (1500×1500). It illustrates the third clause of the
thesis — *a dock that covers the lens* — which had never been pictured. Grounded in the analytical
card "Docking closes the camera": *"the Drone rests inside a low docking enclosure, with its camera
covered when not flying… a physical privacy cue that does not depend on interpreting an app icon."*
Not an apply card. Caption, report link and Chinese updated with it.

Ring Robotics also holds a report card below. Allowed as a recorded exception: it is a **different
device in the same report** — the card is the ground Rover, the masthead is the Drone and its dock —
and every square-or-portrait alternative in the corpus was person-dominant or a white cutout.

### Zebra priority 01 image

Was the Signode forklift: the operating *environment*, not the claim. The card is about momentary
keys and DataWedge profiles on Zebra handhelds and a warehouse aisle says nothing about either. No
Zebra product imagery exists in this corpus, so any picture here is a stand-in; the honest stand-in
is the nearest device of the same class. Now **Panasonic TOUGHBOOK 34** — this signal's own evidence,
a rugged handheld like the TC53/VC8300/WS50 the rationale names, and square (1440×1440) for a 300×294
thumbnail.

### Period narrative — confirmed current

The thesis and its detail *are* updated for W46, against the data rather than by eye: the thesis
clause "a dock that covers the lens" is Ring Robotics (W46), and the detail names both W46 products
that evidence this pattern — *"parks its Drone Cam in a dock that covers the camera"* and *"Samsung
spreads one sensing platform across thirty frames"*. The other four W46 reports are absent by design:
the narrative argues one pattern, not a summary of the week.

### Final dashboard state

21 large image slots, **0 product-level repeats, 0 broken images**. Three host-level repeats remain
and are all benign: `connect.na.panasonic.com` is priority 01 shown twice *by design* (the lede card
is that priority's own teaser); `cdn.mos.cms.futurecdn.net` is a publisher CDN carrying two unrelated
brands; `images.ctfassets.net` is **three different Ring devices** — Drone and dock (masthead), indoor
camera (ai domain card), ground Rover (report card). The last one is worth a decision: three Ring
frames at large size on one page is defensible as three distinct devices, but it is the only brand
appearing that often.
# Reducing repetition on the dashboard — 2026-11-18

Asked for smoother reading and less repeated content. Two repeats removed, both measured rather
than guessed.

## The focus headline was on the page three times

`Find out whether workers lose track of the active capture profile — and what it costs` — thirteen
words — appeared in the lede pointer, again on the Top Signal card that feeds it ("Becomes focus
item 01 · *full title*"), and again in section 03. The first two sat about one screen apart.

The signal card's cross-link now prints **`Becomes focus item 01 ↓`** and nothing else. Its job is
to say *that* the signal is being acted on and to get the reader there; the headline is waiting at
the other end of the click. **3 occurrences → 2**, and the two that remain are a pointer and its
target, which is the relationship that was intended.

## The lede pointer was carrying a second copy of the picture

Its own CSS note calls it "a pointer", and the code comment claimed it was "not a second copy of the
copy" — but it reproduced the headline, the image *and* two clamped lines of the gap text. The
image was always the same file (both read `lead.image`); that only became visible once the file
changed from a warehouse scene to a device with a recognisable silhouette.

Thumbnail and its rules removed — markup, `.la-thumb` CSS, the hover rule it carried, and the 760px
breakpoint that stacked it. The pointer keeps badge, headline, clamped gap and "and 1 more ↓". The
image now appears **once** on the page, large, in 03, beside the argument it belongs to.

## One self-inflicted regression, caught before it shipped

The first version of the cross-link read `Becomes focus item <a>01</a> in <span>Where Zebra should
focus ↓</span>`. That split the sentence into fragments the dictionary cannot reach — a bare "in" is
its own text node — so 中 rendered **"成為重點項目 01 in Where Zebra should focus ↓"**. Rewritten to
put the arrow inside the link, which introduces no new key at all and reuses the "Becomes focus
item" string already in the dictionary. Verified in 中: `成為重點項目 01 ↓`, and the only
untranslated strings left on the dashboard are product names.

**Rule this adds:** when editing generated markup, keep each translatable sentence inside a single
element. A change that reads fine in English can silently un-translate itself in 中.
# Acting on the editorial review — 2026-11-18

A `design trend editor` subagent reviewed the whole site. Items 1–4 below were actioned; each was
verified against the data before acting, and **two of the review's claims did not survive that check**.

## 1. The week axis was missing an entire press day

`stellantis-mondial-2026` had no `week` key while `eicma-2026-milan` has had one since it was
created, and only events carrying a `week` fold into that week's `totalReports`. **W41 went from 5
to 11** and the axis sum from 46 to 52. 11 Oct 2026 is the last day of W41.

52, not 57, is now correct: the five standalone reports belong to no week. The legend says so —
*"The standalone reports belong to no week, so the columns sum to fewer than the total above."*
Chinese added with it. Every momentum sparkline on the site is drawn against this axis, so the
error was never confined to one chart.

## 2. A 2,509-character internal audit was published to readers

`UNCLUSTERED[].why` is **rendered copy**. The ANYmal entry had grown into the full sixth-theme audit
— "three versions of this file", a reopen threshold, brand counts — at 12px, 261px tall, the longest
prose block on the Robotics page, in its least important section, where every other row is one clean
line. **2,509 characters → 212.** Arlo given the same treatment. The audit moved into a JS comment
and lives in this file; nothing was lost. Both Chinese entries re-translated.

## 3. The priority 01 image was wrong twice in one day

It began as a Signode forklift (the environment, not the claim), then became a front-on TOUGHBOOK 34
— which failed this field's own rule a few lines above it (*"a MECHANISM shot… picked so the photo
literally shows the thing the title argues for"*): no control, no LED, no indicator. It also
collided with the Rugged Devices domain card, which is also a TOUGHBOOK and **cannot be changed** —
the industrial domain holds exactly one report in the corpus.

Now the **Sigma fp2 top plate: a labelled two-position CINE | STILL switch**. The switch *position*
is the mode, which is precisely what the card says Zebra's six momentary keys and an indicator-less
DataWedge profile cannot do. Analytical figure, h3 2 of 16.

**Known limitation recorded in the file:** the de-duplication key resolves a URL to a report only
when it matches that report's `hero` exactly, so a different frame of the same product falls back to
its host and two images of one product can carry two keys. That is how the TOUGHBOOK collision got
through. Authoring a `product` field beside the image fields would close it.

## 4. The apply-card rule was wrong, and the audit it gated was never run on DOMAIN_TRENDS

**The rule asserted in `data.js` — "the last four h3s are the apply cards" — is false for 5 of the
57 reports.** Verified by counting: Amazfit T-Rex, Ray-Ban Meta Gen 3, Galaxy Tab S12 Ultra, Kindle
2026 and Logitech Zone Vibe Pro have **12 h3s, all analytical**; their apply cards are
`ARTICLE.card.apply-card` elements, not h3s. Applying the rule to them condemns 20 analytical
headings, and it already cost one real case — Logitech's "Serviceability appears in the parts story"
was rejected twice as an apply card when it is analytical.

**The reliable detector is the `.apply-card` class**, which returns exactly four in all 57 files.
Confirmed mechanically. The project memory has been corrected.

Re-running the audit over `DOMAIN_TRENDS` with the correct detector:

| Entry | Verdict |
|---|---|
| robotics · *Credentialed Access Made Legible at the Threshold* | **CONFIRMED violation — fixed** |
| robotics · *Haptics Explain the Task* | **Not confirmed** — "Haptics should describe an actionable state" is an analytical h3 |
| robotics · *Zone-Matched Sensing* | **Not a violation** — "Sense contact beyond the fingertips" and "Use resolution where contact matters" are both analytical |
| sports · *Friction & Impact Zones* | Borderline; statement echoes apply card "Separate friction and impact zones". Flagged, not changed |
| 3 further word-overlap hits (automotive, ai, wearables, consumer) | Similar wording, analytical support present |

The confirmed one is retitled **"Credentialed Access to Doors That Already Exist"**. The old title
and the tail of its statement — *"with authorization state visible at the point of action"* — came
from ANYmal apply card 02, *"Make authorization state legible"*. That claim had already been cut
from `TOP_SIGNALS` in V5 for this exact reason; the fix was never carried across. The identity half
survives on analytical evidence ("secured doors still require a separate identity and actuation
layer"); the legibility half is gone. The `application` is untouched — asking Zebra for legible
grant/deny states is a fine recommendation, it just cannot be reported as industry practice.

**Two review claims rejected.** Reported here because a review that is accepted wholesale is worth
no more than one that is ignored: *Haptics Explain the Task* and *Zone-Matched Sensing* both hold
analytical support, and the second is fully supported. The reviewer's separate complaint about
*Zone-Matched Sensing* — that its ANYmal-on-stairs hero does not illustrate fingertip contact
resolution — stands and is unaddressed.
# Consolidating the dashboard — 2026-11-18

Reported as "too much, too scattered". Measured first: **8,887px = 9.1 screens, 2,758 visible
words, 7 labelled bands** on top of a 1.5-screen masthead.

The length was not the real problem. The page had grown **three separate "here is everything we
track" components**, in three places, in three shapes, with no statement anywhere of how the layers
relate: a signal index under 01 (added earlier the same day), the keyword cloud/timeline in 04, and
the domain strip below it. That is what "scattered" was — the same promise made three times in
three dialects. It is also what produced the earlier report that the signal index "feels repetitive
with the timeline below": the two share **no content at all** (one is `TOP_SIGNALS`, the other
`DOMAIN_TRENDS` keywords; the only apparent overlap, "Visible Sensing State", is two different
entries) but a reader cannot see that through the layout.

## Section 04 is now the index of all three layers

One control, three panels: **Signals 10 · Keywords 50 · Domains 8**. The counts are written from
the data, and they are the first time the page states out loud that there are ten signals inside
fifty keywords across eight domains. The Cloud/Timeline toggle drops one level, inside the keywords
panel, where it belongs — it is a view of keywords, not a peer of the layers.

- The signal index moved out of 01; a one-line pointer stays behind in its place.
- The domain strip moved in, arrows and "Show all" with it; the old "Domains this period" band is
  gone.
- **Keywords stays the default layer on purpose.** `layoutKeywordCloud()` measures chips to place
  them and a hidden panel measures as zero, so the view that was visible on arrival before is still
  the view that is visible on arrival. Switching back to Keywords re-runs the layout; verified 30
  of 30 chips placed after a round trip through the other two layers.

**9.1 → 7.7 screens.** Switching verified in both directions, 0 broken images, no console errors.

## Two self-inflicted i18n faults, both caught before they shipped

Both are the same mistake in different clothes: **markup that splits a translatable sentence into
fragments the dictionary cannot reach.**

- The pointer was authored as `All <b id="sigIndexCount">10</b> signals tracked…`, so the extractor
  saw the id in the middle of the string and no rule could match it. The whole sentence is now
  written from JS as one string, matched by a rule that carries the count.
- The three layer buttons were `Signals <b>10</b>` — a bare text node beside an element, which the
  translator skips as mixed content. 中 rendered three English layer names under a fully translated
  heading. The label now sits in its own `<span>`: 訊號 10 · 關鍵詞 50 · 領域 8.

Verified in 中: 0 untranslated sentences on the dashboard; everything still outstanding is a
product name.
## Correction, same day: the three-layer control was the wrong idea

Reported, and right on both counts.

**Domains do not belong behind that control.** Signals and keywords are both *named claims we
track*; a domain is a *place*. Making it the third tab of a claim index buried an overview and
crowded 04 at the same time. It is its own section again — and a better one than the slider it
replaced: that showed three of eight tiles and hid the rest behind a scroll gesture nobody is told
about. An overview you have to scroll to see is not an overview. **All eight now sit in a 4×2 grid,
visible at once.**

**Signals and keywords do not belong behind one control either.** A segmented control says
"either/or, same kind of thing". These are nested — ten signals *inside* fifty keywords — so the
control was flattening a hierarchy into a false choice. The signal index went back under the signal
cards, where the section is already about signals; 04 is keywords again, with Cloud / Timeline,
which is what a segmented control is actually for: two views of one thing.

What was genuinely wrong with the index in its first position was its *shape*, not its address: a
momentum badge and a report count on every row made it a second data table one screen above the
keyword timeline. That stays fixed — badges only where there is something to say, no count column.

### Domain tile crowding, four fixes

The 4-up grid inherited body metrics sized for a 380px tile. Measured and corrected: top padding
that put the title against the picture; a two-line name ("Automotive & Mobility", "Mobile &
Handheld Devices") pushing its stats row down while its neighbours' stayed up, so no row lined up —
the heading now reserves two lines whether it needs them or not; "MULTI-SOURCE" breaking across two
lines inside a 12px uppercase label, now `nowrap`; and a 23px heading sized for a tile twice this
wide, now 18px. Verified: 8 tiles, 2 rows, stats aligned in **both** rows, **0** wrapping stat rows.

### Honest accounting on length

**It did not get shorter.** 9.1 screens before the consolidation, 7.7 at the three-layer stage,
**9.3 now** — because pulling Domains back out restored a full band and the signal index came back
with it. The structure is better and the domain overview is genuinely clearer, but the page is the
same length it was this morning. The two remaining reductions that were costed and not yet taken —
moving the five-bar sourcing chart out of the masthead, and capping the 2.1-screen aesthetic
section the way the signal section is capped — are where actual length would come from.
# Widening the shell, 2026-11-18

Reported: the page reads like a phone proportion on a desktop. Measured, and it did — on a 1798px
viewport `main.content` was capped at **1180px**, leaving **309px of dead margin on each side, 34%
of the screen empty**, with the content in a tall narrow column.

**1180 → 1520.** Empty margin drops from 34% to 15%.

**The width goes into layout, not into longer lines.** That distinction is the whole change: the
prose was already running **119 characters** at 13.5px before the widening, and simply opening the
shell would have pushed it past 150. Every block of running text now carries its own measure —
`.signal p.detail` 600px (**~89 characters**), `.sig-limit` 600px, `.period-narrative` 720px — and
leading went from 1.58 to 1.66. The extra space goes to the grids, which gain columns.

**Text stays on the hero image.** Reviewed as a readability cost and explicitly kept: it is the
component's character. Only how far that text runs before it wraps has changed.

## Three faults the widening exposed, all mine

**The `.detail` rule silently died.** An edit that matched the `.detail{` fragment spliced a comment
into the middle of `.signal p.detail`, splitting the selector into `.signal p` + `.detail`. The rule
stopped matching anything, the text fell back to the 15px body default at full card width — **180
characters a line** — and nothing in the page looked broken enough to notice. Caught by reading
computed styles rather than the file. The selector now carries a note about its own shape.

**The hero crop ratio moved without anyone touching an image.** `.signal-bg` was a fixed 380px band:
a 3.10 crop at the old 1180px shell — the ratio every hero on this site was chosen against — and a
**4.0** crop at 1520. Same pictures, more of each product cut away. Height now tracks width,
`clamp(330px, 31vw, 470px)`, holding the ratio near 3.1 at any viewport; `.signal-body` takes the
same value so the text block still sits exactly on the picture. Verified 2.92 at 1190px wide.

**The domain pictures went timid.** Cut from 284px to 132px for the 4-up grid, the image became a
thin strip with the text doing all the work — and a domain tile is navigated *by* its picture. Now
`clamp(150px, 13vw, 206px)`: **54% of the tile**, scaling with the column so it keeps presence as
the grid grows rather than thinning out.

## What was taken from the reference layout, and what was not

Only the layout method. Observed on a WGSN article and measured: 17px body, 1.78 leading, an 86-
character column inside a much wider page — horizontal space spent on structure, with the reading
measure held constant. That is the principle applied here. Their light theme, their card style and
their content treatment were not copied; the dark theme and the text-over-image hero are this
site's own and stay.
## Two things the widening broke, 2026-11-18

**The aesthetic galleries were sized by the prose beside them.** `.aes-media` had
`align-self:stretch` inside a flex row and `grid-auto-rows:minmax(0,1fr)`, so the grid took its
height from the TEXT column and then divided it between the tiles. Picture size was a function of
how much copy sat next to it. Measured across the four features at the widened shell: **366, 466,
322 and 564px tall**, with tiles at 279×180, 279×230, **279×320 — portrait** — and 279×279. Four
galleries of one component, four different crops. Widening made it worse, because a wider text
column is a *shorter* text column.

The grid no longer stretches: it starts at the top of the row and each tile holds a fixed **4:3**.
Verified — **one distinct tile size across all four features (279×209), 0 portrait tiles**, feature
heights now 425 / 425 / 322 / 458.

**The domain name was the least visible thing on a tile that exists to be recognised.** At 18px in
the body under the picture it read as a caption. It now sits on the image bottom-left over its own
gradient — the same treatment the Top Signal cards use, so the two components speak one language —
with the accent bar above it as the colour key, at 19px in white. The counts stay below on a thin
strip: detail you read second, and three small numbers over a photograph would be noise.

The picture gets its height back as a result: **78% of the tile**, against 46% when a half-tile text
block sat under it. Verified: 8 tiles, 2 rows, all 8 names over the image, stats aligned in both
rows, 0 broken images, no console errors, 0 untranslated sentences in 中.
### Domain name enlarged

**19px / 760 → 23px / 830**, tracking tightened to -.02em as the usual compensation at the larger
size. The gradient's lead-in grew 34 → 46px so a two-line name still has dark behind its top line
instead of sitting half on the photograph.

Verified at both languages: EN gives three two-line names ("Automotive & Mobility", "Sensing &
Capture Devices", "Mobile & Handheld Devices") and five on one line, **none clipped**, every name
box inside the image. 中 fits all eight on a single line.
### Consumer Electronics card image

Reported as having its subject blocked, and it did. `.cat-img` crops with
`object-position:center 22%` — it keeps the TOP of a frame, which is right for most product
photography. The Logitech Rally Bar picture put its subject along the **bottom**, under a
wall-mounted television, so the tile showed the TV's black screen and the little of the bar that
survived the crop was then covered by the name's gradient. The tile relies on an unwritten rule —
*the subject sits in the upper half* — and that image broke it.

Now **instax mini Evo 2, "Grip and lens"**: camera held in both hands, subject in the upper-middle
where the crop keeps it and the gradient does not reach, with colour and depth behind it.

Chosen by rendering every unused consumer frame **at the real 273×156 crop, with the gradient and
the name overlaid** — not by looking at the full pictures. Eight candidates, and only two put their
subject where this tile can show it. After the swap all eight domain tiles draw from eight
different hosts; 0 broken images.
# The masthead thesis was wrong, 2026-11-18

Challenged in review: *"a moulded edge around the lens"* — you cannot read a state off a styled rim,
so what has it got to do with anything? Checked against the report rather than argued. The challenge
was right, and the error was older and larger than a wording problem.

**What the report actually says.** Ring 2026 Camera Family, analytical card **"A lens with a
physical boundary"**: *"the optical face in a compact upright body with **a removable lens cover**.
**That cover** provides a physical, visible barrier independent of software status."* The boundary
**is** the cover. Someone read the heading as a moulded housing feature and the clause has been on
the masthead ever since — through two rewrites of this sentence earlier the same day, both of which
preserved it.

**It was not a third mechanism either.** A cover over the lens and a dock that closes over the lens
are the same move, so the thesis listed three examples of which two were one thing. An earlier
caption compounded it: *"it is in the housing, so it cannot be switched off"* — a removable cover is
neither in the housing nor impossible to remove.

**The three clauses are now three genuinely different mechanisms, each quoted from an analytical
card**, apply cards excluded:

| Clause | Source |
|---|---|
| a dock that covers the lens | Ring Robotics, *"Docking closes the camera"* — "the Drone rests inside a low docking enclosure, with its camera covered when not flying… a physical privacy cue that does not depend on interpreting an app icon" |
| a camera never fitted | Ray-Ban Meta Audio, *"No lens-corner camera eye"* — a camera-free frame that "reads as ordinary eyewear". The report's own caveat, now carried in the detail: the microphones remain |
| electronics shown instead of disguised | Samsung Intelligent Eyewear, *"Bold frames expose hardware"* — "the form makes the equipment visible instead of disguising it as a conventional wire frame" |

The leading clause is also the one the masthead picture shows, which was the complaint that started
this: the picture illustrates one of three examples, so the one it illustrates has to lead. The
`detail` paragraph was rewritten with it, and a second error fixed in passing — it said "one of five
themes **below**" when the five themes are the bars **above** it.

Chinese rewritten with both. Verified: 0 untranslated sentences.

**The lesson is not about this sentence.** A heading was quoted instead of the body under it, and
the mistake then survived every later edit because each one treated the existing text as the thing
to improve rather than the thing to check. Same failure mode as the apply-card rule corrected
earlier today.
## Narrowing the window broke the cards — fixed, 2026-11-18

Reported: shortening the window should not break the layout, and it was breaking. It was my fault
and the cause was a fixed height.

`.signal-bg` had always been a BAND with a height of its own — 380px originally, and
`clamp(330px,31vw,470px)` after the hero-crop fix earlier today — with `.signal-body` set to the
same value. **A band cannot know how tall the card will end up.** Narrow the column and the same
copy wraps to more lines; the body outgrows the band; the last things on the card — the Weakest
point line, the week strip, the focus-item link — land on flat black below the photograph. Widening
the shell made this easy to trigger, because the sig-limit line added earlier gave every card two
more lines to overflow with.

**The picture now covers the whole card** (`inset:0`, no height) and **`.signal-body` uses
`min-height`, never `height`**. The clamp still sets the card's resting size, which is what keeps
the hero crop near 3.1 on a desktop, but the body is free to grow past it instead of spilling out of
it. Where content does push a card taller the crop gets *less* extreme, not more. The 620px
breakpoint's three height overrides were deleted — they existed to patch the same fault and are
redundant now.

Verified at **1190, 890 and 600px**: every card's Weakest point, week strip and focus link sit
inside the image at all three, and there is no horizontal overflow at any of them.

**One false alarm, recorded so it is not re-fixed later.** At 600px two cards measured 1008px and
919px tall, which looked like the bug again. They were not: `evidence.open` was true and `.detail`
carried `.expanded` — the cards had been clicked open. An expanded card is *supposed* to be that
tall. Collapsed, the same three measure 442 / 442 / 464.
# Expander, evidence strip and cloud zoom — 2026-11-18

Three things, two of them regressions from the responsive fix an hour earlier.

## The arrow was pinned to a height that no longer exists

`.expander` sat at a hard `top:316px`, measured against a card that was always 380px tall. Once the
card's height became content-driven the button stopped being anywhere in particular — on a tall card
it floated in the middle of the photograph, detached from what it opens. Now `bottom:20px;
right:20px`, so it is the card's corner at any height. Verified: **22px from the bottom and right in
both the collapsed and expanded states.**

## Opening a card showed nothing

Making the hero cover the whole card (`inset:0`) put everything without its own stacking context
*underneath* the picture. `.signal-body` already carried `z-index:1`; `.evidence` did not, so the
strip animated open behind the photograph and the reader got an empty gap where eight report cards
should be. `position:relative;z-index:1` on `.evidence` fixes it. Verified: strip opens to **211px,
8 evidence cards, first card 74px and visible**, card grows 229px.

## Zoom on the keyword cloud, at every width

Asked for on desktop and phone. The porthole existed only below 700px — the desktop drew the cloud
as a static block with no gestures — and two containers would have meant two zoom implementations.
**The porthole is now the container at every width**, and the desktop starts at zoom 1 with the whole
cloud in view, which is what it looked like before.

- `.chip-cloud` has `transform-origin:0 0`, so the transform is `translate(pan) scale(z)` and a
  content point lands at `c*z + pan`. Zooming keeps the point under the cursor — or under the
  midpoint of a pinch — fixed: `pan = focus - (focus - pan) * (newZ/oldZ)`. Anything else feels like
  the cloud jumping away from you.
- Controls: **− / level / + / reset** buttons, **pinch** on touch, and **⌘/Ctrl + scroll**. The wheel
  deliberately requires a modifier so the page still scrolls normally over the cloud.
- Range 50–300%. Buttons disable at the ends.
- The lens magnification — chips swelling toward the middle — stays phone-only. It was built for a
  canvas much larger than its window; at desktop zoom 1 there is no middle to drift toward.

**One bug found and fixed in the same pass:** the packer grows the cloud box when the chips need
more than the 560px base, and `inset:0` had pinned it to the porthole — the cloud measured 680px
inside a 560px window and the bottom row was clipped at zoom 1. The cloud keeps its own height now
and the porthole is resized to match after layout, so **0 chips are clipped at 100%** and panning
only has somewhere to go once you zoom in.

Where this earns its place is the phone: at 100% a 1100px cloud seen through a 375px window is a
narrow vertical slice. At 50% the whole shape is legible — **9 of 30 chips fully readable** against
a handful before.

Chinese added for all four new strings. Verified: **0 untranslated sentences, 0 console errors on a
clean load, 0 broken images.**

## Dead carousel code removed

`CAT_SCROLL_KEY`, `savedCatScroll` and the two `.scrollLeft` handlers were still saving and
restoring the domain carousel's horizontal position. The carousel became a 4×2 grid earlier today
and does not scroll, so those lines were reading `.scrollLeft` off an element that no longer has it.
Removed; a clean page load now logs nothing.
### Pinch verified, and a jump fixed before it shipped

Asked whether the phone can actually pinch. It can, and the gesture path has now been exercised
rather than assumed — the earlier pass only tested the buttons.

Driven with synthetic touch-type `PointerEvent`s at a 375px viewport:

| Gesture | Result |
|---|---|
| two fingers 60px apart, spread to 180px (3×) | 100% → **300%** (clamped at the ceiling) |
| pinched back to 40px apart (0.67×) | → **67%** |
| single finger dragged 40px | pan moves **exactly 40px** |
| tap on a chip | navigates — confirmed by the page actually leaving for that keyword's report list |

`touch-action:none` on the viewport is what makes the second finger reach the handler at all,
and it is in place.

**A bug found by reading the handler back, not by the test.** Lifting one finger of a pinch leaves
the other one down, and that finger becomes a pan — but the drag baseline still pointed at where the
*first* finger started, so the cloud would jump the whole distance between the two touch points the
instant one left. The baseline is now re-anchored on whichever pointer is still on the glass.
Verified: after a pinch to 200%, lifting one finger and moving the other 25px pans **exactly 25px**.

---

## 2026-11-18 · "What connects the three" rescoped, and the AI gap closed

Two reports in one message:「這邊主要在說主要的三個，跟總表的連結性比較低」and
「另外趨勢的走向，或是zebra該著墨的東西都沒有ai相關的嗎?」Both were right. The first was worse
than described; the second turned out to be a filing failure, not an absence of evidence.

### 1 · The block titled "What connects the three" described one card, not three

`pickTopSignals` is pure evidence-count descending, so today's three cards are **The Surviving
Button Declares Mode** (8 reports), **The Chassis Is a Mounting Platform** (7) and **Visible
Sensing State** (5). The paragraph underneath named Ring's Drone Cam, Ray-Ban Meta Audio and
Samsung Intelligent Eyewear — **all five of those products sit inside the third card alone.**

How it got there is the part worth keeping. `thesis` and `detail` are written as a pair, and the
thesis is pinned to the masthead photograph, which is a Ring camera. Rewriting the thesis earlier
the same day so the sentence and the picture agreed — correct in itself — dragged the detail onto
the same three products. Nothing in the file or the page checks that `detail` still covers the
cards it sits under.

> **The rule this produces:** `thesis` answers to the masthead image. `detail` answers to
> `pickTopSignals`. They are two different obligations and have to be checked separately.

Rewritten so it does both jobs — states the throughline across the three cards, then places the
rest of the index it physically sits under. The partition was produced by reading all eleven
entries, not estimated: six argue about state declared by the object, three about the body as a
control or attachment surface, two sit outside (governed robot credentials, whose own entry says
the legible half is still only a recommendation; and the new AI signal, the one entry about a
screen rather than a housing). **These counts are prose, not computed — re-count every sync.**

Kicker widened to "What connects the three — and where the rest sit", because the old one gave the
paragraph no licence to mention anything but the three.

### 2 · There was no AI anywhere above the domain pages — and the evidence was already in the file

Checked before answering. No TOP_SIGNALS entry, no ZEBRA_PRIORITIES entry. The domain whose id is
`ai` is displayed as **"Sensing & Capture Devices"** and is about who can see you, not about
generated output — so the site had no AI lane at all.

Scanning the 49 report files for AI terminology found 16 with hits, and three with *analytical*
findings saying the same thing. They were already in the data, split into fragments that could
never clear the two-brand bar:

| where it was | entry | reports |
|---|---|---|
| `DOMAIN_TRENDS.mobile` | "AI Output Stays Inspectable Beside the Source" | 1 |
| `DOMAIN_TRENDS.wearables` | "One Action at a Time, Confirmed Explicitly" | 1 |
| nowhere | motorola's "Contextual AI interface" card | — |

motorola's case was in no trend entry at all; that report's only entry, "Material Tells the Hand
Where to Go", is about grip and finish. Merged, that is **three independent brands** — the same bar
"The Robot's Body Reports Its Task" clears at two. Exactly the failure the cross-domain fragment
scan exists to catch.

Both domain entries are **kept**. A domain trend is that page's own reading of its own reports;
deleting them would strip Mobile and Wearables of a finding that is genuinely theirs.

**New signal — "A Suggestion Is Shown Beside Its Source"** (domain `mobile`, following the
subjects: two of three products are a tablet and a phone). All three citations read back out of
the analytical sections they sit in:

- Galaxy Tab S12 Ultra, section 02 card 1 — "The paired panes put an AI-produced summary next to
  material a person can inspect. This layout can make acceptance or correction more deliberate
  because the source is still visible."
- motorola signature 27, section 03 card 4 — "proximity can reduce app switching, but it also
  risks making uncertain output look final. Clear labels and a reversible action path are
  essential whenever the interface proposes a consequential step."
- Aina Ring, section 02's own statement "Make adaptive actions visible before execution", under it
  "The user must still recognize which mode has control before a blind flick."

**Not cited, and each an apply card in its own report:** Galaxy Tab's "Keep AI output inspectable",
Aina's "Keep field approvals brief and reversible", Ray-Ban Gen 3's "State visibility".

Honesty note inherited from the Samsung report itself: the Note Assist figure "illustrates a
workflow intention, not measured accuracy of the generated text". This is a claim about how an
interface is arranged, not about whether the output is any good.

Momentum renders **"No new case this week"** — the cases are W40 and W45, none in W46. Left alone
rather than padded.

### 3 · The baseline gate, run on zebra.com rather than from memory

New focus item **03 · Sharpen First — "Show a frontline worker where an agent's answer came from,
before they act on it."** The first item on this site that comes from software behaviour rather
than from a housing.

- **Already ships:** Zebra Companion (GenAI agents reached by voice, "grounded in your business —
  your inventory, your operating procedures, your product catalogs"; the Knowledge agent works
  from a company's own SOPs), plus Frontline AI Enablers — on-device vision models, sample apps
  and APIs. Source: `zebra.com/us/en/software/ai-software/zebra-companion.html`.
- **The gap:** every published claim on both pages is about the answer being *right* — grounded,
  tailored, accurate, fast, less training. Neither page describes what the worker sees of where an
  answer came from, how an uncertain one is marked, or what the confirm-and-undo path is when an
  agent proposes a consequential step.
- Kept as a **question, not a build instruction**, per the rule at the top of `ZEBRA_PRIORITIES`.
  Five validation questions, the last of which is the §8.2 caveat in full: a marketing page not
  mentioning a feature is not proof it is absent from the product, Companion is early-access, and
  its shipped interface was not inspected.

One of the five questions is the one most likely to kill the item, and it is deliberately in
there: Note Assist works because a tablet has room for two panes. A TC53 held one-handed in an
aisle does not, and a voice reply through "Hey Zebra" has no pane at all.

**Image:** the Galaxy Tab Note Assist split-pane figure, chosen by rendering four candidates at
the real 300×294 `.wz-thumb-wrap` crop. The other three fail the field's own rule — Aina's meeting
shot has no interface in frame, Aina's three-ring shot is a white cutout, the DeX frame shows a
desktop rather than a source/summary pair. motorola's own "Contextual AI interface" frame would
show the mechanism but is blocked: motorola signature 27 is already the Mobile domain card on this
same page. Verified at card size that the two panes read as two panes even though the text does
not. Noted and accepted: Samsung is on the page twice as a *brand* (the W46 Intelligent Eyewear
report card) — not a repeat under the rule, which is about one product read twice.

### 4 · Three defects the addition exposed, all pre-existing, all fixed

**A dead "see it in the keyword cloud ↓" button.** Rendered unconditionally on every priority row,
but it only works if a chip in the cloud claims that rank — and the cloud shows **30 of the 50**
keyword entries. The new item's three reports are cited only by single-report entries that missed
the cut, so rank 3's button pointed at nothing and silently did nothing. Forcing those chips into
the cloud to make a button work would be rigging the cloud's ranking, so the button is removed
when it has no target — along with the ` · ` before it, or the row ends on a dangling middot.
Verified: ranks 1 and 2 keep theirs, rank 3 has none.

**"Ten signals INSIDE fifty keywords" was never true.** Asserted in two comments. Checked: **zero**
of the 11 signal keywords appears among the 50 `DOMAIN_TRENDS` keywords. They are two separately
authored naming layers over one corpus, linked by evidence overlap — which is how
`claimingPriority()` actually works — not by name. Both comments corrected. This is the belief that
produced the dead button above.

**The index caption over-claimed.** "A signal is a narrower cut inside one of the themes" was flat.
Ran `signalTheme()` over all eleven: nine resolve at the 60% evidence-overlap bar, **two return
null** — "Robots Are Being Issued Governed Credentials" (already true before today) and the new
entry. Those are the same two the rewritten paragraph calls out as sitting outside the argument,
arrived at independently, which is a reason to trust both. Caption now says "most… not all".

A length regression caught by measuring rather than looking: the first wording of that fix ran 180
characters and pushed **both** the label and the caption onto a second line — header height 19px →
38px at 1200px. Re-cut to 154 characters, measured at 19px in both languages, identical to what it
replaced.

### 5 · Chinese layer

16 new keys. `__i18nMissing()` under 中 reports **zero** untranslated prose; the 57 remaining
entries are all product names, which stay in English by convention.

Three of those keys are **not** from today's additions: "State Has to Be Readable Mid-Task", "One
Physical Surface, Several Working Roles" and "Robots Are Being Issued Governed Credentials" had
never been translated. They became visible only when the signal index moved back under section 01
earlier the same day, so nobody had seen them in English.

### Not done

All eleven signal rows, the three cards, the three focus items and both languages were checked.
Nothing from this change is left pending.