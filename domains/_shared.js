// Shared renderer for domains/*.html. Each page sets `const DOMAIN_ID = "...";`
// then loads ../data.js and this file. Keeping the template here means new
// reports or trends only need an edit in data.js, not in every domain page.
(function(){
  const $ = (s, el=document) => el.querySelector(s);
  const d = DOMAINS.find(x => x.id === DOMAIN_ID);
  if (!d) { document.getElementById("app").innerHTML = "<p>Unknown domain.</p>"; return; }

  document.title = d.name + " — Trend Dashboard";
  document.documentElement.style.setProperty("--accent", d.accent);

  const reports = ALL_REPORTS.filter(r => r.domain === DOMAIN_ID).sort((a,b)=> new Date(b.date) - new Date(a.date));
  // Top 3 trends, styled identically to the dashboard's Top Signal component so a domain page
  // reads as a focused extension of the main dashboard, not a separate design. Picking purely
  // by evidence count can pick 3 trends that all cite the same one or two products in a domain
  // with few reports, which reads as the same card repeated — so selection is greedy for new
  // evidence (new products) first, falling back to evidence strength as the tiebreaker.
  const MAX_TRENDS = 3;
  function pickTopTrends(all, n){
    const pool = all.slice();
    const picked = [];
    const usedEvidence = new Set();
    for (let k = 0; k < n && pool.length; k++){
      let bestIdx = 0, bestScore = -1;
      pool.forEach((t, i) => {
        const ev = t.evidence || [];
        const freshCount = ev.filter(e => !usedEvidence.has(e)).length;
        const score = freshCount * 1000 + ev.length;
        if (score > bestScore){ bestScore = score; bestIdx = i; }
      });
      const t = pool.splice(bestIdx, 1)[0];
      picked.push(t);
      (t.evidence || []).forEach(e => usedEvidence.add(e));
    }
    return picked;
  }
  const allDomainTrends = DOMAIN_TRENDS[DOMAIN_ID] || [];
  const trends = pickTopTrends(allDomainTrends, MAX_TRENDS);
  // The old stat here counted `trends`, which is always MAX_TRENDS — a box that could only ever
  // read "3". Report the domain's whole tracked pool and how much of it has more than one source,
  // which is the part that actually differs between a thick domain and a thin one.
  const multiSourceTrends = allDomainTrends.filter(t => (t.evidence||[]).length >= 2).length;

  // The stat box says "8 tracked" but the page only ever showed 3, so the other 5 were invisible.
  // The index below names them — and is a *leaderboard, not a log*: MAX_TRACKED is a hard ceiling,
  // so as later periods add trends the weakest fall off the bottom instead of the list growing
  // without limit. Ranking is momentum first (a trend the newest reports still feed outranks one
  // coasting on old evidence), then evidence count. The 3 cards above are pinned in regardless,
  // since the page would contradict itself if a featured trend were missing from its own index.
  // In a domain thin enough that the cards already show everything, the index is suppressed —
  // it would just be the same three rows again.
  const MAX_TRACKED = 8;
  const MOMENTUM_RANK = { new: 0, building: 1, holding: 2 };

  // V4 TEST — same momentum tag as the homepage Top Signals, reused here so the per-domain
  // Trend Signal cards show whether an entry grew with fresh evidence this week or is holding
  // steady on older evidence. Injects its own CSS since domain pages don't share index.html's.
  const styleTag = document.createElement("style");
  styleTag.textContent = ".momentum-badge{font-size:10px;letter-spacing:.08em;text-transform:uppercase;font-weight:800;padding:3px 9px;border-radius:999px;border:1px solid currentColor}.momentum-badge.new{color:var(--accent)}.momentum-badge.building{color:#ffb020}.momentum-badge.holding{color:var(--muted);opacity:.7}";
  document.head.appendChild(styleTag);
  // Same week map as the dashboard's (see index.html): WEEKS membership is authoritative, and the
  // standalone/launch-event reports that appear in ALL_REPORTS but in no week are placed by date
  // into the nearest week instead of being dropped. The old version here filtered them out, which
  // is why "The Dial That Declares Drive Mode" read "New This Week" on this page while resting on
  // Ferrari Luce, Tesla Model Y and Ferrari F80 — three standalone reports spanning W39 to W43.
  const WEEK_COLS = WEEKS.slice().reverse();                 // oldest week first
  const LATEST_COL = WEEK_COLS.length - 1;
  const reportWeekCol = {};
  (function buildWeekMap(){
    const ms = s => new Date(s).getTime();
    const colMid = WEEK_COLS.map(w => {
      const ds = w.reports.map(r => ms(r.date)).filter(n => !isNaN(n));
      return ds.length ? (Math.min(...ds) + Math.max(...ds)) / 2 : 0;
    });
    WEEK_COLS.forEach((w, i) => w.reports.forEach(r => { reportWeekCol[r.title] = i; }));
    ALL_REPORTS.forEach(r => {
      if (reportWeekCol[r.title] !== undefined) return;
      const t = ms(r.date);
      if (isNaN(t)) return;
      let best = 0;
      colMid.forEach((m, i) => { if (Math.abs(t - m) < Math.abs(t - colMid[best])) best = i; });
      reportWeekCol[r.title] = best;
    });
  })();
  function weekProfile(entry){
    const counts = WEEK_COLS.map(() => 0);
    (entry.evidence||[]).forEach(t => { const c = reportWeekCol[t]; if (c !== undefined) counts[c]++; });
    return { counts, active: counts.reduce((a,n,i) => (n ? a.concat(i) : a), []) };
  }
  function momentumTag(entry){
    const { active } = weekProfile(entry);
    if (!active.length || active[active.length-1] !== LATEST_COL) return { cls:"holding", label:"Holding" };
    return active.length === 1 ? { cls:"new", label:"New This Week" } : { cls:"building", label:"Building" };
  }
  // The dashboard prints a week strip beside every trend; the domain pages get the same strip, so
  // a trend reads the same way whichever page you meet it on.
  function spanLabel(entry){
    const { active } = weekProfile(entry);
    if (!active.length) return "Not dated";
    const a = WEEK_COLS[active[0]].label, b = WEEK_COLS[active[active.length-1]].label;
    return active.length === 1 ? `${a} only` : `${a}–${b} · ${active.length} of ${WEEK_COLS.length} weeks`;
  }
  // showLabel:false for the tracked-trend index, whose meta column already carries a flag, a
  // momentum badge and a report count — a fourth text item there just crowds the row, and the
  // strip alone still answers "when" at a glance.
  function sparkWrap(entry, showLabel = true){
    const { counts } = weekProfile(entry);
    const n = counts.length;
    const active = counts.reduce((a,c,i) => (c ? a.concat(i) : a), []);
    const span = active.length > 1
      ? `<span class="sp-span" style="left:${(active[0]+.5)/n*100}%;right:${(n-active[active.length-1]-.5)/n*100}%"></span>` : "";
    // --sd staggers each dot by its week index so the strip fills in chronological order.
    const cells = counts.map((c, i) => `<span class="sp-cell">${c
      ? `<i style="--dd:${Math.min(11, 4 + c*2.4)}px;--o:${Math.min(1, .45 + c*.18)};--sd:${120 + i*70}ms"></i>` : ""}</span>`).join("");
    const tip = "Reports by week — " + WEEK_COLS.map((w,i) => `${w.label}: ${counts[i]}`).join(" · ");
    const label = showLabel ? `<span class="spark-label">${spanLabel(entry)}</span>` : "";
    return `<span class="spark-wrap"><span class="spark" title="${tip.replace(/"/g,"&quot;")} — ${spanLabel(entry)}"><span class="sp-rail"></span>${span}${cells}</span>${label}</span>`;
  }
  const periodLabel = (typeof PERIOD_LABEL !== "undefined") ? PERIOD_LABEL : "";
  const DOMAIN_FILE = { automotive:"Automotive", ai:"AI_Devices", wearables:"Wearable_Devices", robotics:"Robotics", industrial:"Industrial_Devices", sports:"Sports_Industry", mobile:"Mobile_Devices", consumer:"Consumer_Electronics" };
  const backPath = "domains/" + (DOMAIN_FILE[DOMAIN_ID] || DOMAIN_ID) + ".html";

  // Split the domain's application paragraph into a bold lead sentence + supporting detail,
  // mirroring the single-report "Key Takeaway" pattern — same real text, just given a focal point
  // instead of one dense wall of copy.
  function splitLead(text){
    const m = (text||"").match(/^(.+?[.!?])\s+(.*)$/s);
    return m ? { lead: m[1], rest: m[2] } : { lead: text||"", rest: "" };
  }

  function zipFor(r){
    if (r.source.type === "week") {
      const w = WEEKS.find(x => x.id === r.source.week);
      return w ? w.zipName : "";
    }
    if (r.source.type === "event") {
      const ev = (typeof LAUNCH_EVENTS !== "undefined") ? LAUNCH_EVENTS.find(x => x.id === r.source.event) : null;
      return ev ? ev.zipName : "";
    }
    return r.zip || "";
  }

  // Same lookup pattern as index.html's signalHero(), plus de-duplication: a domain's trends
  // often share evidence (e.g. the same car shows up under several automotive trends), so
  // picking the first evidence image for each trend independently made multiple cards on the
  // same page show an identical hero. usedHeroes tracks what's already on screen and skips to
  // the next piece of evidence instead, so the 3 cards shown together stay visually distinct.
  function trendHero(t, usedHeroes){
    const candidates = [];
    if (t.heroOverride) candidates.push(t.heroOverride);
    (t.evidence||[]).forEach(title => {
      const r = ALL_REPORTS.find(x => x.title === title);
      if (r && r.hero) candidates.push(r.hero);
    });
    const fresh = candidates.find(h => !usedHeroes.has(h));
    const chosen = fresh || candidates[0] || null;
    if (chosen) usedHeroes.add(chosen);
    return chosen;
  }
  const usedTrendHeroes = new Set();

  // Build the capped index described above. Featured trends keep their card order at the top;
  // the rest compete for the remaining slots by momentum, then evidence count, then name.
  const featuredSet = new Set(trends);
  const contenders = allDomainTrends.filter(t => !featuredSet.has(t)).sort((a,b) => {
    const ra = MOMENTUM_RANK[momentumTag(a).cls], rb = MOMENTUM_RANK[momentumTag(b).cls];
    if (ra !== rb) return ra - rb;
    const ea = (a.evidence||[]).length, eb = (b.evidence||[]).length;
    if (ea !== eb) return eb - ea;
    return a.keyword.localeCompare(b.keyword);
  });
  const tracked = trends.concat(contenders).slice(0, MAX_TRACKED);
  const droppedCount = allDomainTrends.length - tracked.length;

  document.getElementById("app").innerHTML = `
    <div class="kicker">Domain · ${periodLabel}</div>
    <h1>${d.name}</h1>
    <p class="lead">${d.blurb}</p>
    <div class="stat-row">
      <div class="stat"><b>${reports.length}</b><span>Reports this period</span></div>
      <div class="stat"><b>${allDomainTrends.length}</b><span>Trends tracked · ${multiSourceTrends} multi-source</span></div>
      <div class="stat"><b style="font-size:20px">${periodLabel}</b><span>Coverage window</span></div>
    </div>

    <div class="section-label"><span>Trend signals this period</span></div>
    <div class="signals">
      ${trends.map((t,i) => {
        const hero = trendHero(t, usedTrendHeroes);
        const bgStyle = hero ? ` style="background-image:linear-gradient(180deg, rgba(7,9,9,.1) 0%, rgba(7,9,9,.62) 55%, rgba(7,9,9,.97) 100%), url('${hero}')"` : "";
        const mom = momentumTag(t);
        return `
        <div class="signal" data-i="${i}">
          <div class="signal-bg"${bgStyle}></div>
          <div class="signal-body">
            <div class="eyebrow kicker">Trend Signal <span class="momentum-badge ${mom.cls}">${mom.label}</span></div>
            <h2><strong>${t.keyword}.</strong> ${t.statement}</h2>
            <p class="detail">${t.application}</p>
            <div class="sig-time">${sparkWrap(t)}</div>
          </div>
          <button class="expander" data-i="${i}" title="See the reports behind this signal"><span class="tri">▾</span></button>
          <div class="evidence" id="dev-${i}">
            <div><div class="ev-row">
            ${(t.evidence||[]).map(title=>{
              const r = ALL_REPORTS.find(x=>x.title===title);
              if(!r) return "";
              return `<a class="ev-card" href="../report-viewer.html?src=${encodeURIComponent(r.file)}&amp;title=${encodeURIComponent(r.title)}&amp;back=${encodeURIComponent(backPath)}" style="text-decoration:none;color:inherit">
                <img src="${r.hero}" alt="${r.title}"><div><div class="et">${r.title}</div><div class="ed">${r.date}</div></div>
              </a>`;
            }).join("")}
            </div></div>
          </div>
        </div>
      `;}).join("")}
    </div>

    ${tracked.length <= trends.length ? `` : `
    <div class="section-label">
      <span>Everything tracked in this domain</span>
      <span class="ti-cap">Strips run ${WEEK_COLS[0].label} → ${WEEK_COLS[LATEST_COL].label} · capped at ${MAX_TRACKED}, weakest drops off as new trends arrive</span>
    </div>
    <ol class="trend-index">
      ${tracked.map(t => {
        const ev = t.evidence || [];
        const mom = momentumTag(t);
        const featured = featuredSet.has(t);
        return `<li class="ti-row${featured ? " featured" : ""}">
          <a class="ti-name" href="../reports-overview.html?titles=${encodeURIComponent(ev.join("|"))}&amp;kw=${encodeURIComponent(t.keyword)}">${t.keyword}</a>
          <span class="ti-meta">
            ${featured ? `<span class="ti-flag">In focus</span>` : ``}
            ${sparkWrap(t, false)}
            <span class="momentum-badge ${mom.cls}">${mom.label}</span>
            <span class="ti-count${ev.length < 2 ? " thin" : ""}">${ev.length} report${ev.length===1?"":"s"}</span>
          </span>
        </li>`;
      }).join("")}
    </ol>
    ${droppedCount > 0 ? `<p class="ti-note">${droppedCount} older trend${droppedCount===1?"":"s"} dropped out of tracking — still readable in the source reports below.</p>` : ``}
    `}

    <div class="section-label">
      <span>Browse reports one by one</span>
      <span class="rep-nav" id="repNav">
        <button class="rep-arrow" id="repPrev" title="Previous">←</button>
        <span class="rep-count" id="repCount"></span>
        <button class="rep-arrow" id="repNext" title="Next">→</button>
      </span>
    </div>
    <div class="report-grid" id="reportGrid"></div>

    <div class="key-takeaway">
      <div class="eyebrow">Key Takeaway</div>
      ${(()=>{ const s = splitLead(d.application); return `<p class="take"><strong>${s.lead}</strong></p><p class="take-detail">${s.rest}</p>`; })()}
    </div>

    <div class="sources-section">
      <div class="section-label"><span>Sources</span></div>
      ${reports.map(r => `${r.title} — source file: <code>${zipFor(r)}</code>`).join("<br>")}
    </div>
  `;

  document.querySelectorAll(".expander").forEach(btn => btn.addEventListener("click", ()=>{
    btn.classList.toggle("open");
    document.getElementById("dev-"+btn.dataset.i).classList.toggle("open");
    // On mobile the detail paragraph is itself clamped to 2 lines (see CSS) — the same tap
    // that reveals the evidence cards also unclamps it, rather than a second "more" control.
    // The card also gets "detail-open" so .signal-body can grow past its fixed height to fit
    // the now-unclamped text instead of clipping it against the hero image.
    const signal = btn.closest(".signal");
    const detail = signal.querySelector("p.detail");
    const isOpen = btn.classList.contains("open");
    if (detail) detail.classList.toggle("expanded", isOpen);
    signal.classList.toggle("detail-open", isOpen);
  }));

  // Reports are paginated 6-at-a-time instead of all shown at once, with left/right arrows —
  // avoids an ever-growing single-screen grid as more weekly/event reports feed into a domain.
  const REPORTS_PER_PAGE = 6;
  let reportPage = 0;
  const totalPages = Math.max(1, Math.ceil(reports.length / REPORTS_PER_PAGE));
  function renderReportPage(){
    const start = reportPage * REPORTS_PER_PAGE;
    const pageItems = reports.slice(start, start + REPORTS_PER_PAGE);
    $("#reportGrid").innerHTML = pageItems.map(r => `
      <a class="report-card" href="../report-viewer.html?src=${encodeURIComponent(r.file)}&title=${encodeURIComponent(r.title)}&back=${encodeURIComponent(backPath)}">
        <img src="${r.hero}" alt="${r.title}">
        <div class="rc"><div class="rcmeta"><span>${r.date}</span></div><h4>${r.title}</h4><p>${r.blurb}</p></div>
      </a>
    `).join("");
    $("#repCount").textContent = reports.length ? `${start+1}–${Math.min(start+REPORTS_PER_PAGE, reports.length)} of ${reports.length}` : "0 of 0";
    $("#repPrev").disabled = reportPage === 0;
    $("#repNext").disabled = reportPage >= totalPages - 1;
  }
  if (reports.length <= REPORTS_PER_PAGE) $("#repNav").style.display = "none";
  $("#repPrev").addEventListener("click", ()=>{ if(reportPage>0){ reportPage--; renderReportPage(); } });
  $("#repNext").addEventListener("click", ()=>{ if(reportPage<totalPages-1){ reportPage++; renderReportPage(); } });
  renderReportPage();

  /* ---------- motion (mirrors the dashboard's; see the MOTION LAYER block in index.html) ------
     These pages had no entrance at all — everything appeared at once on load, which is the
     opposite problem from animating too much: nothing told the reader where one section ended
     and the next began. Same three ideas as the dashboard, nothing more: sections fade up as
     they are scrolled to, siblings arrive as a sequence rather than a slab, and each week strip
     draws itself left to right because that is the direction of time.
     Same fail-safe too — the from-states are CSS and are released by script, so if the observer
     never runs (background tab, suspended rendering) the page must still be readable. */
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function skipMotion(){
    document.body.classList.add("motion-off");
    document.querySelectorAll(".reveal-init").forEach(el => el.classList.remove("reveal-init"));
    document.querySelectorAll(".spark:not(.spark-go)").forEach(el => el.classList.add("spark-go"));
  }
  function markReveal(sel, step){
    const els = Array.from(document.querySelectorAll(sel));
    els.forEach((el, i) => { el.classList.add("reveal-init"); el.style.setProperty("--d", Math.min(i,5)*step + "ms"); });
    return els;
  }
  if (REDUCED) {
    skipMotion();
  } else {
    const targets = [].concat(
      markReveal(".signals .signal", 90),
      markReveal(".trend-index .ti-row", 40),
      markReveal(".key-takeaway", 0)
    );
    let fired = false;
    const reveal = el => {
      el.classList.add("reveal-in");
      const done = () => { el.classList.remove("reveal-in","reveal-init"); el.removeEventListener("transitionend", done); clearTimeout(t); };
      el.addEventListener("transitionend", done);
      const t = setTimeout(done, 1400 + parseFloat(el.style.getPropertyValue("--d") || 0));
    };
    const obs = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      fired = true;
      if (e.target.classList.contains("spark")) e.target.classList.add("spark-go");
      else reveal(e.target);
      obs.unobserve(e.target);
    }), { threshold:.1, rootMargin:"0px 0px -30px 0px" });
    targets.concat(Array.from(document.querySelectorAll(".spark"))).forEach(el => obs.observe(el));
    const bail = () => { if (!fired) skipMotion(); };
    setTimeout(bail, 4000);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) setTimeout(bail, 400); });
  }
})();
