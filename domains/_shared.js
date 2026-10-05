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
  const trends = DOMAIN_TRENDS[DOMAIN_ID] || [];
  const periodLabel = (typeof PERIOD_LABEL !== "undefined") ? PERIOD_LABEL : "";
  const DOMAIN_FILE = { automotive:"Automotive", ai:"AI_Devices", wearables:"Wearable_Devices", robotics:"Robotics", industrial:"Industrial_Devices", sports:"Sports_Industry", mobile:"Mobile_Devices" };
  const backPath = "domains/" + (DOMAIN_FILE[DOMAIN_ID] || DOMAIN_ID) + ".html";

  function zipFor(r){
    if (r.source.type === "week") {
      const w = WEEKS.find(x => x.id === r.source.week);
      return w ? w.zipName : "";
    }
    return r.zip || "";
  }

  document.getElementById("app").innerHTML = `
    <div class="kicker">Domain · ${periodLabel}</div>
    <h1>${d.name}</h1>
    <p class="lead">${d.blurb}</p>
    <div class="stat-row">
      <div class="stat"><b>${reports.length}</b><span>Reports this period</span></div>
      <div class="stat"><b>${trends.length}</b><span>Trends identified</span></div>
      <div class="stat"><b style="font-size:20px">${periodLabel}</b><span>Coverage window</span></div>
    </div>

    <div class="section-label">Trend signals this period</div>
    <div class="signal-grid">
      ${trends.map(t => `
        <div class="signal-card">
          <div class="kw">${t.keyword}</div>
          <h4>${t.statement}</h4>
          <p class="app"><strong>Zebra application —</strong> ${t.application}</p>
          <div class="evidence">${t.evidence.map(e=>`<span>${e}</span>`).join("")}</div>
        </div>
      `).join("")}
    </div>

    <div class="section-label">Browse reports one by one</div>
    <div class="report-grid">
      ${reports.map(r => `
        <a class="report-card" href="../report-viewer.html?src=${encodeURIComponent(r.file)}&title=${encodeURIComponent(r.title)}&back=${encodeURIComponent(backPath)}">
          <img src="${r.hero}" alt="${r.title}">
          <div class="rc"><div class="rcmeta"><span>${r.date}</span></div><h4>${r.title}</h4><p>${r.blurb}</p></div>
        </a>
      `).join("")}
    </div>

    <div class="apply-section">
      <div class="eyebrow">Zebra Technologies Application</div>
      <p>${d.application}</p>
    </div>

    <div class="sources-section">
      <div class="section-label">Sources</div>
      ${reports.map(r => `${r.title} — source file: <code>${zipFor(r)}</code>`).join("<br>")}
    </div>
  `;
})();
