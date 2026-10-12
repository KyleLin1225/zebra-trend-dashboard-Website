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
  const trends = pickTopTrends(DOMAIN_TRENDS[DOMAIN_ID] || [], MAX_TRENDS);
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

  document.getElementById("app").innerHTML = `
    <div class="kicker">Domain · ${periodLabel}</div>
    <h1>${d.name}</h1>
    <p class="lead">${d.blurb}</p>
    <div class="stat-row">
      <div class="stat"><b>${reports.length}</b><span>Reports this period</span></div>
      <div class="stat"><b>${trends.length}</b><span>Top trends</span></div>
      <div class="stat"><b style="font-size:20px">${periodLabel}</b><span>Coverage window</span></div>
    </div>

    <div class="section-label"><span>Trend signals this period</span></div>
    <div class="signals">
      ${trends.map((t,i) => {
        const hero = trendHero(t, usedTrendHeroes);
        const bgStyle = hero ? ` style="background-image:linear-gradient(180deg, rgba(7,9,9,.1) 0%, rgba(7,9,9,.62) 55%, rgba(7,9,9,.97) 100%), url('${hero}')"` : "";
        return `
        <div class="signal" data-i="${i}">
          <div class="signal-bg"${bgStyle}></div>
          <div class="signal-body">
            <div class="eyebrow kicker">Trend Signal</div>
            <h2><strong>${t.keyword}.</strong> ${t.statement}</h2>
            <p class="detail">${t.application}</p>
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
})();
