/* ============================================================================
   i18n.zh.js — 繁體中文 translations for the Trend Dashboard.

   This is the only file you edit to add or change Chinese copy.
   See the header of i18n.js for how to find what still needs translating
   (open the page, switch to 中, run __i18nExtract() in the console).

   Two parts:
     I18N_ZH_RULES — patterns, for strings the page GENERATES with numbers in
                     them ("W39–W43 · 4 of 5 weeks"). These keep working as the
                     numbers change each period, so they rarely need touching.
     I18N_ZH       — exact strings, keyed on the English source text.

   Anything with no match stays in English. That is the intended behaviour:
   product names, brand names, week codes and dates should stay English, and a
   genuinely missing translation should look missing rather than be papered over.

   SCOPE: this covers the dashboard shell — the home page, the four overview
   pages, the eight domain pages and the waiting list. The individual report
   documents under weeks/, singles/ and launch-events/ are still English only.
   ============================================================================ */

var I18N_MON = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

/* Keys taken from innerHTML arrive HTML-escaped. Dictionary entries are written
   as plain text, so decode before looking one up. */
function I18N_DEC(s) {
  return String(s).replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
                  .replace(/&quot;/g, '"').replace(/&#0?39;|&apos;/g, "'").replace(/&nbsp;/g, " ");
}

window.I18N_ZH_RULES = [

  /* ---- dates ---------------------------------------------------------- */
  // "28 Sep – 4 Oct 2026", optionally prefixed with "· "
  [/^(·\s*)?(\d+)\s+([A-Z][a-z]{2})\s*–\s*(\d+)\s+([A-Z][a-z]{2})\s+(\d{4})$/,
    function (m) { return (m[1] ? "· " : "") + m[6] + "年" + I18N_MON[m[3]] + "月" + m[2] + "日–" + I18N_MON[m[5]] + "月" + m[4] + "日"; }],
  // "19 – 25 Oct 2026"
  [/^(·\s*)?(\d+)\s*–\s*(\d+)\s+([A-Z][a-z]{2})\s+(\d{4})$/,
    function (m) { return (m[1] ? "· " : "") + m[5] + "年" + I18N_MON[m[4]] + "月" + m[2] + "–" + m[3] + "日"; }],
  // "11 Oct 2026"
  [/^(·\s*)?(\d+)\s+([A-Z][a-z]{2})\s+(\d{4})$/,
    function (m) { return (m[1] ? "· " : "") + m[4] + "年" + I18N_MON[m[3]] + "月" + m[2] + "日"; }],

  /* ---- counts, spans, pagination -------------------------------------- */
  // The masthead kicker. Three-part form first — it is what the home page renders now; the
  // two-part form is kept because the fallback path and the domain pages still produce it.
  [/^Generated from (\d+) reports · (W\d+–W\d+) · latest (\S+)$/,
    function (m) { return "由 " + m[1] + " 篇報告生成 · " + m[2] + " · 最新 " + m[3]; }],
  [/^Generated from (\d+) reports · latest (\S+)$/,
    function (m) { return "由 " + m[1] + " 篇報告生成 · 最新 " + m[2]; }],
  [/^W(\d+)–W(\d+) · (\d+) reports?$/,
    function (m) { return "W" + m[1] + "–W" + m[2] + " · " + m[3] + " 篇報告"; }],
  [/^W(\d+)–W(\d+) · (\d+) of (\d+) weeks$/,
    function (m) { return "W" + m[1] + "–W" + m[2] + " · " + m[4] + " 週中的 " + m[3] + " 週"; }],
  [/^(W\d+) only$/, function (m) { return "僅 " + m[1]; }],
  [/^only (W\d+)$/, function (m) { return "僅 " + m[1]; }],
  [/^(W\d+) plus earlier weeks$/, function (m) { return m[1] + " 加上更早的週次"; }],
  [/^nothing new in (W\d+)$/, function (m) { return m[1] + " 沒有新證據"; }],
  [/^Not dated$/, function () { return "未標註日期"; }],
  [/^Reports by week — (.+)$/, function (m) { return "各週報告數 — " + m[1]; }],
  [/^W(\d+): (\d+) reports?$/, function (m) { return "W" + m[1] + "：" + m[2] + " 篇報告"; }],
  [/^(\d+) reports?: (.+)$/, function (m) { return m[1] + " 篇報告：" + m[2]; }],
  [/^(\d+) reports?$/, function (m) { return m[1] + " 篇報告"; }],
  [/^(\d+) reports? this week$/, function (m) { return "本週 " + m[1] + " 篇報告"; }],
  [/^(\d+) weekly releases?$/, function (m) { return m[1] + " 次週報發布"; }],
  [/^(\d+) launch events?$/, function (m) { return m[1] + " 場發表會"; }],
  [/^(\d+) domains? this period$/, function (m) { return "本期 " + m[1] + " 個領域"; }],
  [/^(\d+) suggested topics?$/, function (m) { return m[1] + " 個建議主題"; }],
  [/^(\d+) of (\d+) reports$/, function (m) { return m[2] + " 篇報告中的 " + m[1] + " 篇"; }],
  [/^(\d+)–(\d+) of (\d+)$/, function (m) { return "第 " + m[1] + "–" + m[2] + " 筆，共 " + m[3] + " 筆"; }],
  [/^(\d+) selected$/, function (m) { return "已選取 " + m[1] + " 筆"; }],
  [/^<b>(\d+)<\/b> reports?$/, function (m) { return "<b>" + m[1] + "</b> 篇報告"; }],
  [/^<b>(\d+)<\/b> trends?$/, function (m) { return "<b>" + m[1] + "</b> 個趨勢"; }],
  [/^<b>(\d+)<\/b> multi-source$/, function (m) { return "<b>" + m[1] + "</b> 個多來源"; }],
  [/^<b>(\d+)<\/b> reports? · (.+)$/,
    function (m, tr) { return "<b>" + m[1] + "</b> 篇報告 · " + tr(m[2]); }],

  /* ---- the tension bar -------------------------------------------------
     The verdict and the scope line are both computed from the live evidence counts now, so
     neither can be a dictionary entry. The side labels themselves stay exact entries below;
     the rules re-capitalise before looking one up, because the sentence form lowercases it. */
  [/^The evidence leans toward (.+), but not decisively\.$/,
    function (m, tr) { var l = tr(m[1].charAt(0).toUpperCase() + m[1].slice(1)); return "證據偏向" + l + "，但還沒拉開。"; }],
  [/^This period runs (\d+) to (\d+) toward (.+)\.$/,
    function (m, tr) { var l = tr(m[3].charAt(0).toUpperCase() + m[3].slice(1)); return "本期是 " + m[1] + " 比 " + m[2] + "，明顯偏向" + l + "。"; }],
  [/^(\d+) of (\d+) reports, cited by (\d+) of (\d+) top signals · (\d+) counted on both sides$/,
    function (m) { return m[2] + " 篇報告裡的 " + m[1] + " 篇，來自 " + m[4] + " 條主要訊號中的 " + m[3] + " 條 · 其中 " + m[5] + " 篇兩邊都算到"; }],
  [/^(\d+) of (\d+) reports, cited by (\d+) of (\d+) top signals$/,
    function (m) { return m[2] + " 篇報告裡的 " + m[1] + " 篇，來自 " + m[4] + " 條主要訊號中的 " + m[3] + " 條"; }],

  /* ---- the 01–04 chain cards ------------------------------------------
     Count-only forms first: the cards dropped their explanatory clause, which was 81 words of
     navigation prose sitting between the header and the first evidence. The long forms below
     are kept because the domain pages still build the clause version. */
  [/^(\d+) of (\d+) tracked signals$/,
    function (m) { return m[2] + " 個追蹤訊號中的 " + m[1] + " 個"; }],
  [/^(\d+) aesthetic signals?$/, function (m) { return m[1] + " 個美學訊號"; }],
  // Domain pages only render this once a trend is actually pushed out of the tracked window,
  // which first happened when W44 added an entry to Automotive — hence no rule until now.
  [/^(\d+) older trends? dropped out of tracking — still readable in the source reports below\.$/,
    function (m) { return "另有 " + m[1] + " 個較舊的趨勢已經退出追蹤，內容在下方的原始報告裡還看得到。"; }],
  [/^(\d+) focus items? · (\d+) cut on the Zebra check$/,
    function (m) { return m[1] + " 個重點項目 · " + m[2] + " 個在基線查核被刪"; }],
  [/^(\d+) focus items?$/, function (m) { return m[1] + " 個重點項目"; }],
  [/^(\d+) keywords · (\d+) domains$/,
    function (m) { return "橫跨 " + m[2] + " 個領域的 " + m[1] + " 個關鍵字"; }],
  [/^(\d+) keywords across (\d+) domains — the inventory 01–03 were drawn from\.$/,
    function (m) { return "橫跨 " + m[2] + " 個領域的 " + m[1] + " 個關鍵字 —— 01–03 就是從這份清單抽出來的。"; }],

  [/^(\d+) of (\d+) tracked signals — (.+)$/,
    function (m, tr) { return m[2] + " 個追蹤訊號中的 " + m[1] + " 個 — " + tr(m[3]); }],
  [/^(\d+) aesthetic signals? — (.+)$/,
    function (m, tr) { return m[1] + " 個美學訊號 — " + tr(m[2]); }],
  [/^(\d+) focus items? — only what Zebra doesn't already ship, checked against zebra\.com \((\d+) candidates cut on that check\)\.$/,
    function (m) { return m[1] + " 個重點項目 — 只留下 Zebra 尚未出貨的部分，並逐項對照 zebra.com 查證（有 " + m[2] + " 個候選在這一關被刪掉）。"; }],
  [/^(\d+) focus items? — only what Zebra doesn't already ship, checked against zebra\.com\.$/,
    function (m) { return m[1] + " 個重點項目 — 只留下 Zebra 尚未出貨的部分，並逐項對照 zebra.com 查證。"; }],
  [/^(\d+) tracked keywords across (\d+) domains — (.+)$/,
    function (m, tr) { return "橫跨 " + m[2] + " 個領域的 " + m[1] + " 個追蹤關鍵字 — " + tr(m[3]); }],
  [/^(\d+) keywords tracked across (\d+) domains — (.+)$/,
    function (m, tr) { return "橫跨 " + m[2] + " 個領域、共追蹤 " + m[1] + " 個關鍵字 — " + tr(m[3]); }],
  [/^Showing the (\d+) best-evidenced of (\d+) tracked keywords — (.+)$/,
    function (m, tr) { return "顯示 " + m[2] + " 個追蹤關鍵字中證據最充分的 " + m[1] + " 個 — " + tr(m[3]); }],

  /* ---- the lede (first screen) ----------------------------------------
     All five carry a live count, so they have to be rules rather than dictionary entries —
     the numbers change every period as momentum shifts and candidates get cut. */
  [/^<b>(\d+)<\/b> new this week$/, function (m) { return "<b>" + m[1] + "</b> 條本週新增"; }],
  [/^<b>(\d+)<\/b> building$/, function (m) { return "<b>" + m[1] + "</b> 條持續累積"; }],
  [/^<b>(\d+)<\/b> holding$/, function (m) { return "<b>" + m[1] + "</b> 條無新證據"; }],
  [/^<b>(\d+)<\/b> cut on the Zebra check$/, function (m) { return "<b>" + m[1] + "</b> 條被基線砍掉"; }],
  [/^Full check, and (\d+) more ↓$/,
    function (m) { return "完整對照，另外還有 " + m[1] + " 項 ↓"; }],
  [/^The full check against what Zebra already ships, and (\d+) more ↓$/,
    function (m) { return "完整的 Zebra 既有出貨對照，以及另外 " + m[1] + " 項 ↓"; }],
  [/^What to do about it · (.+)$/,
    function (m, tr) { var a = tr(m[1]); return a === m[1] ? null : "該怎麼做 · " + a; }],

  /* ---- focus items ----------------------------------------------------- */
  // Bare urgency labels, needed on their own now the lede badge composes them differently
  // from the numbered "01 · Act Now" badge in 03.
  [/^Act Now$/, function () { return "立即執行"; }],
  [/^Next Cycle$/, function () { return "下個週期"; }],
  [/^Later$/, function () { return "後續觀察"; }],
  [/^(\d+) · Act Now$/, function (m) { return m[1] + " · 立即執行"; }],
  [/^(\d+) · Next Cycle$/, function (m) { return m[1] + " · 下個週期"; }],
  [/^(\d+) · Later$/, function (m) { return m[1] + " · 後續觀察"; }],
  [/^(\d+) further candidates were cut against Zebra's current products$/,
    function (m) { return "另有 " + m[1] + " 個候選在對照 Zebra 現有產品後被刪掉"; }],
  [/^Tracked signal, not among the (\d+) shown in 01 this period — opens its (\d+) reports?$/,
    function (m) { return "這是被追蹤的訊號，但不在本期 01 展示的 " + m[1] + " 個之內 — 點開可看它的 " + m[2] + " 篇報告"; }],

  /* ---- domain pages ---------------------------------------------------- */
  [/^(.+) — source file:$/, function (m) { return m[1] + " — 原始檔案："; }],
  [/^Domain · (.+) – (.+)$/, function (m) { return "領域 · " + m[1] + " – " + m[2]; }],
  [/^Trends tracked · (\d+) multi-source$/, function (m) { return "追蹤中的趨勢 · " + m[1] + " 個多來源"; }],
  [/^Strips run (W\d+) → (W\d+) · capped at (\d+), weakest drops off as new trends arrive$/,
    function (m) { return "軸線範圍 " + m[1] + " → " + m[2] + " · 上限 " + m[3] + " 個，有新趨勢進來時最弱的會被擠掉"; }],
  [/^(.+) — Trend Dashboard$/, function (m, tr) { var t = tr(m[1]); return t === m[1] ? null : t + " — 趨勢儀表板"; }],

  /* ---- "<strong>Keyword.</strong> Statement" ---------------------------
     Lets a trend's name and its statement live as two separate dictionary
     entries, the same way they are two separate fields in data.js. Both halves
     must resolve, otherwise the whole thing stays English rather than coming
     out half-translated.
     These keys come from innerHTML, so "&" arrives as "&amp;" — decode before
     looking up, otherwise "Fit, Hinge & Service Parts" would never match. */
  [/^<strong>(.+)\.<\/strong>\s+(.+)$/, function (m, tr) {
    var k1 = I18N_DEC(m[1]), k2 = I18N_DEC(m[2]);
    var a = tr(k1), b = tr(k2);
    if (a === k1 || b === k2) return null;
    return "<strong>" + a + "。</strong>" + b;
  }],
  [/^<strong>(.+)\.<\/strong>$/, function (m, tr) {
    var k = I18N_DEC(m[1]), a = tr(k);
    return a === k ? null : "<strong>" + a + "。</strong>";
  }],

  /* ---- generic compounds (keep these last) ----------------------------- */
  [/^(.+) · (\d{4}-\d{2}-\d{2})$/, function (m, tr) { var t = tr(m[1]); return t === m[1] ? null : t + " · " + m[2]; }],
  [/^(.+) ↗$/, function (m, tr) { var t = tr(m[1]); return t === m[1] ? null : t + " ↗"; }],
  [/^(\d{2}) · (.+)$/, function (m, tr) { var t = tr(m[2]); return t === m[2] ? null : m[1] + " · " + t; }]
];


window.I18N_ZH = {

  /* ======================= page chrome ================================== */
  "Trend Dashboard": "趨勢儀表板",
  "Trend Dashboard · V4": "趨勢儀表板 · V4",
  "Domains · Trend Dashboard": "領域 · 趨勢儀表板",
  "Weekly Trend Reports · Trend Dashboard": "每週趨勢報告 · 趨勢儀表板",
  "Launch Events · Trend Dashboard": "發表會 · 趨勢儀表板",
  "All Reports · Trend Dashboard": "所有報告 · 趨勢儀表板",
  "Waiting List · Trend Dashboard": "候選清單 · 趨勢儀表板",
  "Report Viewer": "報告檢視器",
  "Report": "報告",
  "⬇ Download": "⬇ 下載",
  "Direct download needs the site to be served over http(s) — right-click the report in the iframe and choose \"Save as\" instead.":
    "直接下載需要網站以 http(s) 提供 —— 請改為在內嵌視窗中對報告按右鍵，選擇「另存新檔」。",
  "← Dashboard": "← 儀表板",
  "← Back": "← 返回",
  "Weekly Trend Reports": "每週趨勢報告",
  "Launch Events": "發表會",
  "Reports": "報告",
  "All Reports": "所有報告",
  "Domains": "領域",
  "More →": "更多 →",
  "Show all": "顯示全部",
  "Browse all →": "瀏覽全部 →",
  "Suggest a Topic": "建議主題",
  "Send": "送出",
  "Waiting List": "候選清單",
  "No suggestions yet.": "目前還沒有建議。",
  "Latest reports": "最新報告",
  "Domains this period": "本期領域",
  "Open sidebar": "開啟側邊欄",
  "Collapse sidebar": "收合側邊欄",
  "Search": "搜尋",
  "Clear": "清除",
  "Scroll left": "向左捲動",
  "Scroll right": "向右捲動",
  "e.g. Oura Ring Gen5": "例如 Oura Ring Gen5",
  "Search e.g. \"rugged device\", \"ai device\"…": "搜尋，例如「rugged device」、「ai device」…",
  "Example only": "僅為範例",
  "See the reports behind this signal": "查看這個訊號背後的報告",

  /* ======================= hero + stat row ============================== */
  // Chinese headlines drop the trailing full stop — at display size the full-width 。
  // reads as a detached glyph.
  "A trend site that keeps updating.": "一個會持續更新的趨勢網站",
  "Every weekly release and standalone report rolls straight into this dashboard. Browse the sidebar by year and week, search by idea, or drop into any report one by one.":
    "每一次週報發布與每一篇單篇報告，都會直接匯入這個儀表板。可以從側邊欄依年份與週次瀏覽、用概念搜尋，或逐篇打開任何一份報告。",
  "Total reports": "報告總數",
  "Weekly releases": "週報發布",
  "Standalone reports": "單篇報告",
  "Latest report": "最新報告",

  /* ======================= the four-step header ========================= */
  "This period's read ·": "本期讀法 ·",
  "Four views of one period, in reading order.": "同一期的四種讀法，依閱讀順序排列",
  "The next four blocks are not four separate lists — they are two readings of this period, the decision taken from them, and the inventory they were drawn out of. Every trend in all four carries the same week strip, so you can see when its evidence actually arrived rather than taking \"trending\" on trust.":
    "接下來的四個區塊不是四份各自獨立的清單 —— 它們是對同一期的兩種讀法、由此做出的決定，以及這一切被抽取出來的素材庫。四個區塊裡的每一個趨勢都帶著同一條週次軸線，所以你可以看見它的證據實際上是什麼時候出現的，而不必把「正在流行」當成前提接受。",
  "What's happening": "正在發生什麼",
  "What it looks like": "它長成什麼樣子",
  "What Zebra does about it": "Zebra 該怎麼回應",
  "Everything underneath": "底下的全部素材",
  "how products behave, and what they tell the person using them.": "產品如何運作，以及它們告訴使用者什麼。",
  "the same period read through colour, surface and where the controls sit.": "用顏色、表面與控制件擺放的位置，重讀同一期。",
  "the inventory the three readings were drawn from.": "前面三種讀法所取材的素材庫。",
  "every trend in 01–03 was drawn out of this. Cloud shows how much evidence each one carries; Timeline shows the same week axis as the strips above, one row per keyword.":
    "01–03 的每一個趨勢都是從這裡抽出來的。雲圖顯示每個關鍵字累積了多少證據；時間軸則用與上方軸線相同的週次刻度，一個關鍵字一列。",
  "Timeline view and the domain pages list the rest.": "其餘的可以在時間軸檢視與各領域頁面查看。",
  "The week axis every strip below is drawn against": "底下每一條軸線所依據的週次刻度",
  // Short form, replacing the 51-word original — kept below in case an older page still ships it.
  "Oldest week on the left; dot size is how many reports that week fed in.":
    "最舊的一週在左邊；圓點大小代表那一週餵進了幾篇報告。",
  "Read left to right, oldest week first. A dot marks a week whose reports fed that trend — the bigger the dot, the more of them. The bar runs from its first such week to its latest.":
    "由左至右，最舊的一週在前。有圓點的那一週代表該週的報告餵進了這個趨勢，點愈大代表報告愈多。橫條從它最早的那一週拉到最新的那一週。",
  "New This Week": "本週新增",
  "Building": "持續累積",
  "Holding": "暫無新增",

  /* ======================= 01 · top signals ============================= */
  "Top signals this period": "本期主要訊號",
  "The throughline": "貫穿主線",
  "What connects the three": "這三條的共同點",
  "The throughline, in detail": "貫穿主線的細節",
  "This period, every category is solving the same problem: proving system state exactly when someone needs to rely on it.":
    "這一期，每一個類別其實都在解同一個問題：在有人必須依賴系統的那一刻，把系統狀態證明出來。",
  "Where a physical control survives a screen-first redesign, it is being spent on declaring the operating mode — Sigma's STILL/CINE switch, Ferrari's drive-mode rotary, Jetta's one remaining dial. W44 pushes that one step further: Turtle Beach's modules physically flip, so the mechanism's own shape declares the mode and no control is involved at all. Light is moving the same direction, from identity signature into a state channel on drones, AMRs and storage hatches. Sensing and autonomous hardware reaches the same goal by another route: a removed lens, a physical cover, a credential check. The mechanism differs; the problem being solved doesn't.":
    "一個實體控制件要是能在螢幕優先的改款裡活下來，它多半就是拿來講模式的：Sigma 的 STILL/CINE 撥桿、Ferrari 的駕駛模式旋鈕、Jetta 只剩的那一顆旋鈕。W44 又往前推一步，Turtle Beach 的模組整塊翻面，外形自己就把模式講完了，連控制件都不必動用。光也在往同一個方向走，從過去的品牌識別，變成無人機、AMR 和置物艙上的狀態訊號。感測和自主機具則換了一條路走到同一個地方：拿掉鏡頭、加一片實體遮蓋、查一次憑證。手法各不相同，要解的問題是同一個。",
  "State declared by hardware": "由硬體宣告狀態",
  "State declared by the system": "由系統宣告狀態",
  "Neither side is winning. Design for both.": "兩邊都沒贏。兩邊都要顧。",
  // The methodology note this replaced is now the element's tooltip, so it still needs a line.
  "Counted live from this period's Top Signals evidence.": "依本期主要訊號的證據即時計算。",
  "Neither approach is winning outright this period — Zebra's own designs should account for both, not bet the roadmap on just one. (Counted live from this period's Top Signals evidence.)":
    "這一期兩種作法都沒有壓倒性勝出 —— Zebra 自己的設計應該同時涵蓋兩者，而不是把整條產品路線押在其中一邊。（依本期主要訊號的證據即時計算。）",
  "Top Signal": "主要訊號",
  "Becomes focus item": "成為重點項目",
  "Not yet turned into a focus item — read as context.": "尚未轉成重點項目 —— 當作脈絡閱讀。",

  "The Surviving Button Declares Mode": "存活下來的那顆按鍵，負責宣告模式",
  "Where one physical control survives a screen-first redesign, it is the one that declares which mode the product is in.":
    "當只有一個實體控制件在螢幕優先的改款中存活下來，它就是負責宣告產品現在處於哪一種模式的那一個。",
  "Sigma's STILL/CINE switch, Ferrari's drive-mode rotary and Jetta's single remaining dial all do one narrow job: state the operating mode before any menu is involved. Kindle goes further and moves tactile input off the device into an optional cover. Apple's first touch Mac makes the point from the opposite direction — touch arrives on the panel and the keyboard, trackpad and Touch ID key all stay.":
    "Sigma 的 STILL/CINE 撥桿、Ferrari 的駕駛模式旋鈕、Jetta 只剩的那一顆旋鈕，都只做一件很窄的事：在選單介入之前先把模式講清楚。Kindle 走得更遠，乾脆把實體操作移出機身，放進一個選配保護殼。Apple 第一台觸控 Mac 則從反面印證了同一件事：觸控上了螢幕，鍵盤、觸控板和 Touch ID 鍵一個都沒少。",

  "Light Became a State Channel": "光變成一條狀態頻道",
  "Light is being specified as a channel that reports operating state — the inverse of its older job, carrying brand identity.":
    "光正被規格化成一條回報運作狀態的頻道 —— 和它過去承載品牌識別的角色正好相反。",
  "Tesla's Roadster ties light cues to state, Alpine reveals its illuminated identity only on activation, and Teenage Engineering's hatch lights itself as it opens. Signode makes colour a configurable safety signal across a fleet.":
    "Tesla Roadster 把燈光提示綁定在狀態上，Alpine 只在啟動時才顯露發光的身分識別，Teenage Engineering 的置物艙則在打開時自己亮起來。Signode 更把顏色做成整個車隊都可設定的安全訊號。",

  "The Chassis Is a Mounting Platform": "機身本身就是一個安裝平台",
  "The body is being published as an attachment interface — threads, rails, pogo pins, clips — so accessories become product architecture.":
    "機身正被當成一組對外公開的接附介面 —— 螺牙、導軌、pogo pin、卡扣 —— 讓配件變成產品架構的一部分。",
  "Sigma covers the fp2 chassis in 1/4-20 threads, OPPO ships a factory Tilta rig where one mount accepts lens, light and fan, and Teenage Engineering's clips turn the case into a rack. Toyota scales the same idea to a vehicle: five Snowhunter concepts share one cargo, protection and access interface across different body sizes. The interface is documented, not left to third parties.":
    "Sigma 在 fp2 機身上鋪滿 1/4-20 螺牙，OPPO 出原廠 Tilta 外掛架，一個接口同時吃鏡頭、燈和風扇，Teenage Engineering 的卡扣則把機殼變成一組機架。Toyota 把同一個想法放大到整台車，五台 Snowhunter 概念車不管車身多大，都共用同一套載物、防護和取用的接口。這套接口是原廠寫成文件的，不是丟給第三方自己想辦法。",

  /* ---- W44 (26 Oct – 1 Nov 2026) --------------------------------------------------------
     Two new Top Signals, one new aesthetic trend, five new domain trends and the week's six
     report blurbs. The two new signals carry three evidence items each, so they sit below the
     home page's top-3 cut for now and surface on the overview and domain pages. ---------- */

  "Mode Is Declared by Changing Shape": "外形一變，模式就講明了",
  "The product physically reconfigures, so the live mode is readable across a room.":
    "產品的形狀真的會變，隔一個房間都看得出來現在在哪個模式。",
  "Turtle Beach's stick modules mechanically flip over into capacitive touchpads, so which thumb-input mode is live is readable from the controller's silhouette rather than from a setting. Apple's touch MacBook Pro and hand-held iPad mini expose two different working postures for the same direct input. XREAL moves the screen off the face entirely, making the wearer's working state legible from outside.":
    "Turtle Beach 的搖桿模組可以整塊翻過來變成觸控板，所以現在用的是哪一種拇指操作，看控制器的外形就知道，不必去翻設定。Apple 把觸控同時放進 MacBook Pro 和單手拿的 iPad mini，同一種直接操作就有了兩種工作姿勢。XREAL 更乾脆，螢幕整個搬離臉部，旁邊的人也看得出戴的人正在做什麼。",

  "The Tether Is Part of the Product": "那條線也是產品",
  "Move compute off the device and the cable gets designed, not hidden.":
    "運算搬出機身以後，那條線是要好好設計的，不是要藏起來的。",
  "XREAL frames glasses, cable and compute puck together as one object and makes the lead a standard, user-replaceable USB-C part rather than a captive assembly. Sony routes a single USB-C cord behind a transparent plinth so power and video arrive without a visible harness. Meta's VR Glasses set the pattern a month earlier with a tethered puck.":
    "XREAL 把眼鏡、線和運算盒當成同一件產品一起拍，而且那條線就是一般的 USB-C，使用者自己換得掉，不是拆不開的整組。Sony 讓一條 USB-C 從透明底座後面走，電源和影像都進來了，桌上卻看不到一團線。Meta 的 VR Glasses 早一個月就是這樣做的。",

  "The Signature Shape Stopped Being Fixed": "招牌外形不再固定",
  "The outline a brand once held fixed as its signature is now spent on telling you which working mode is live.":
    "以前當成招牌、絕不更動的外形，現在拿來告訴你產品正在哪一個模式。",
  "Turtle Beach's stick modules flip over bodily, so the controller's outline — not a light or a label — tells you which thumb-input mode is live. Apple gives the same direct-touch input two different silhouettes, a tablet in one hand and a laptop open on a desk. The iPhone Duo's hinge turns a fold into its own standing posture.":
    "Turtle Beach 的搖桿模組整塊翻過去，所以告訴你現在是哪一種拇指操作的是外形，不是燈號，也不是標籤。Apple 讓同一種觸控長出兩種外形：單手拿著的平板，和攤在桌上的筆電。iPhone Duo 的轉軸則讓對折本身變成一種站立姿勢。",

  "The Tether Is Specified, Not Hidden": "那條線寫進規格，不是藏起來",
  "The cable left behind when compute moves off the device is being designed as a named, replaceable part rather than treated as an embarrassment to conceal.":
    "運算搬走以後留下的那條線，現在會給它料號、做成換得掉的零件，而不是當成不好看的東西遮起來。",
  "Make the most-flexed cable on any worn or tethered Zebra system a standard, user-replaceable stock line rather than a captive assembly, and publish the routing — then track replacements instead of warranty returns.":
    "Zebra 配戴式或外接式系統上彎折最兇的那條線，應該做成標準料號、使用者自己換得掉，不要做成拆不開的整組，走線方式也一併公開。之後要追的是換了幾條，不是保固退修。",

  "One Equipment Language Across a Vehicle Range": "整個車系共用一套裝備語言",
  "A single equipment grammar — cargo, protection, access — is carried unchanged across five vehicle sizes, rather than restyled for each platform.":
    "載物、防護、取用這一整套做法，五種車身尺寸原封不動照搬，不是每個平台各自重做造型。",
  "Specify one mounting, cargo and protection language for Zebra's vehicle-mount range and hold it across truck, forklift and van installations, so a technician trained on one cab can service another without relearning where anything is.":
    "Zebra 車載產品線應該訂出一套安裝、載物與防護的做法，卡車、堆高機、廂型車一律照辦。技師在一種車上學會了，換另一種也不用重新找東西在哪。",

  "Commitment Gets Its Own Step": "不可逆的那一步，單獨切出來",
  "An irreversible action is being separated from the capture that precedes it, with a preview placed deliberately in between so the costly step is chosen rather than triggered.":
    "把不可逆的動作從前面的擷取裡切開，中間刻意擺一道預覽，讓這一步是想過才做，不是順手按下去。",
  "Put an explicit review step in front of any Zebra action a worker cannot undo — a label printed, a pick confirmed, a shipment closed — and show what is about to be committed rather than only confirming afterwards that it happened.":
    "標籤印出去、揀貨確認、出貨結掉，這些作業員一旦做了就收不回來的動作，前面都該擺一道複查。重點是先顯示等一下會送出什麼，而不是等做完才回報已完成。",

  "The Viewing Envelope Is a Published Dimension": "可視範圍要像尺寸一樣寫出來",
  "A display's usable viewing distance, angle and ambient-light range are published as hard numbers up front, and the housing is then derived from them rather than styled first.":
    "顯示器能用的觀看距離、角度和環境光範圍，一開始就用明確數字講清楚，外殼再照著這些數字做，不是先造型再說。",
  "Publish the usable viewing envelope for Zebra vehicle-mount and kiosk displays the way a drop rating is published, then check actual mount positions and aisle lighting against it instead of assuming the screen works wherever it fits.":
    "Zebra 車載和自助機的顯示器，應該像標落摔等級那樣把可視範圍標出來，然後拿實際的安裝位置和走道照明去對，不要以為裝得下就看得清楚。",

  "One Input Model, Two Working Postures": "一種操作方式，兩種工作姿勢",
  "The same direct-touch input is being designed for two different body postures — device in hand, and device on a surface — with the control set that survives differing between them.":
    "同一種觸控操作會針對兩種姿勢分開設計：拿在手上，和放在檯面上。兩種姿勢留下來的控制件並不一樣。",
  "Define the hand-held and docked postures of a Zebra handheld as two separate design targets, and verify which controls stay reachable in each, instead of validating one posture and assuming the other inherits it.":
    "Zebra 手持機的手持和入座應該當成兩個設計目標分開驗，各自確認哪些控制件還搆得到，不要驗完一種就假設另一種也一樣。",

  /* W44 report blurbs (week index cards and the searchable report pool). */
  "The hand-held iPad and the touch-enabled MacBook Pro expose two different physical postures for the same direct input, and the controls that survive in each.":
    "單手拿的 iPad 和支援觸控的 MacBook Pro，把同一種直接操作拆成兩種姿勢，也看得出各自留下了哪些控制件。",
  "A six-inch glasses-free spatial display turns a 3D object into a compact, single-viewer desk tool, with the optical envelope published as a dimension.":
    "六吋裸視空間顯示器把 3D 物件變成一台小巧的單人桌上工具，而且把光學可視範圍當成規格直接寫出來。",
  "A light optical display and a separate compute puck move spatial work off the face, with the cable between them published as part of the product.":
    "輕量光學顯示加上獨立的運算盒，把空間運算搬離臉部，中間那條線也當成產品的一部分一起交代。",
  "Five tracked SEMA concepts carry one winter-expedition equipment language across different vehicle sizes, organising cargo, protection and access the same way on each.":
    "五台在 SEMA 亮相的履帶概念車共用同一套冬季探險裝備語言，不管車身多大，載物、防護和取用的方式都一樣。",
  "A hybrid instant camera puts a preview step between capture and print, so committing film becomes its own deliberate, visible action.":
    "混合式拍立得在拍和印之間插了一道預覽，讓「要不要用掉這張底片」變成一個看得見、想過才做的動作。",
  "A mechanical flip turns stick modules into capacitive touchpads, making the active thumb-input mode readable from the shape of the controller itself.":
    "模組整塊翻過來就從搖桿變成觸控板，現在用的是哪一種拇指操作，看控制器的形狀就知道。",

  "Visible Sensing State": "可見的感測狀態",
  "Concealed Systems, Legible at the Point of Use": "隱藏的系統，在使用當下仍然可讀",

  /* ======================= 02 · aesthetic signals ======================= */
  "Aesthetic signals this period": "本期美學訊號",
  "The same products as 01, read through form instead of behaviour: colour, surface, where the controls sit. Only patterns with evidence across 2+ reports.":
    "和 01 同一批產品，但改從形而不是行為來讀：顏色、表面、控制件擺在哪裡。只收錄在 2 篇以上報告中有證據的模式。",
  "Aesthetic Signal": "美學訊號",
  "Seen in": "見於",
  "Every Colour Points at Something": "每個顏色都指著一樣東西",
  "Pick a colour on any of these products and it names something: a zone, an operator, a safety state, a cable's job.":
    "這些產品上隨便挑一個顏色，它都在指某樣東西：一塊區域、一位操作者、一種安全狀態，或是一條線的用途。",
  "Renault colour-codes cabin zones; Ferrari F80 marks the primary operator's seat. Signode makes AMR colour a configurable safety signal, Teenage Engineering codes cables by function, and Antigravity leaves the watch one colour cue.":
    "Renault 用顏色分座艙區域；Ferrari F80 標出主駕駛的位置。Signode 讓 AMR 的顏色變成可以設定的安全訊號，Teenage Engineering 用顏色分線材的用途，Antigravity 則只在手錶上留一個顏色提示。",
  "Seams Are Drawn Now, Not Erased": "接縫現在用畫的，不是用藏的",
  "Brands spent two decades hiding the joins. Now the component boundary is styled back onto the outside, because the part behind it is meant to come off.":
    "接合處廠商藏了二十年。現在零件的分界又刻意畫回外殼表面，因為後面那個零件本來就該拆得下來。",
  "Citroën gives the 2 CV's bumper its own visible border and FIAT's spoiler declares where it reconfigures; Logitech publishes Rally Bar 2's split lines and Zone Vibe Pro's spare parts; adidas marks the wear zones with finish changes.":
    "Citroën 給 2 CV 的保險桿一條看得見的邊；FIAT 的尾翼直接標出它會從哪裡變形。Logitech 公開 Rally Bar 2 的分件線，也公開 Zone Vibe Pro 有哪些備品；adidas 則用換表面處理的方式標出會磨損的地方。",

  /* ======================= 03 · where Zebra should focus ================ */
  "Where Zebra should focus": "Zebra 應該聚焦的方向",
  "Every item must come out of the tracked signals <em>and</em> be something Zebra doesn't already ship — checked against zebra.com, not from memory.":
    "每一個項目都必須是從被追蹤的訊號裡長出來的，<em>而且</em>必須是 Zebra 還沒有出貨的東西 —— 對照 zebra.com 查證，不是憑印象。",
  "Each item has to clear two gates: it must come out of the tracked signals, <em>and</em> it must still be something Zebra doesn't already ship — checked against the current product pages on zebra.com, not from memory. Open \"what Zebra already ships\" on any item to see that check. Its strip is the combined evidence of the signals it draws from, so an item whose strip stops short of the latest week is riding on older reports. Sources marked ↗ are tracked but aren't among the three shown in 01.":
    "每一個項目都必須通過兩道關卡：它必須是從被追蹤的訊號裡長出來的，<em>而且</em>必須仍然是 Zebra 還沒有出貨的東西 —— 這一點是對照 zebra.com 上現行的產品頁面查證的，不是憑印象。點開任何一個項目的「Zebra 在這裡已經出貨什麼」就能看到那次查證。它的軸線是它所取材的各個訊號的證據總和，所以軸線沒有延伸到最新一週的項目，就是靠比較舊的報告撐著的。標示 ↗ 的來源有被追蹤，但不在 01 展示的三個之內。",
  "What Zebra already ships here — and what's actually missing": "Zebra 在這裡已經出貨什麼 —— 以及真正缺的是什麼",
  "Already ships.": "已經出貨。",
  "zebra.com ↗": "zebra.com ↗",
  "Draws from:": "取材自：",
  "see it in the keyword cloud ↓": "在關鍵字雲中查看 ↓",

  "Bind the active capture profile to the application LED these devices already ship":
    "把目前啟用的擷取 profile 綁到這些裝置上早已配備的 application LED",
  "Zebra is not short of controls — six remappable keys on the TC53, six more behind the VC8300's Blue modifier, four on the WS50. They are all momentary, so none of them declares anything. Mode itself lives in a DataWedge profile that switches per app with no indicator at all. The unassigned application LED is the cheapest surface to put it on.":
    "Zebra 並不缺控制件 —— TC53 上有六顆可重新映射的按鍵，VC8300 的 Blue 修飾鍵後面還有六顆，WS50 有四顆。但它們全都是瞬時鍵，所以沒有任何一顆在宣告什麼。模式本身住在 DataWedge profile 裡，隨 app 切換，而且完全沒有指示器。那顆尚未指派用途的 application LED，是放它最便宜的位置。",
  "Dual dedicated scan buttons, a dedicated PTT key and a remappable key map on TC53/TC58; six programmable keys doubled by the Blue modifier on VC8300-10; four programmable buttons on WS50; a gun-style Trigger Handle accessory.":
    "TC53/TC58 有兩顆專用掃描鍵、一顆專用 PTT 鍵與一份可重新映射的按鍵表；VC8300-10 有六顆可程式化按鍵，再由 Blue 修飾鍵翻倍；WS50 有四顆可程式化按鍵；另有槍型 Trigger Handle 配件。",
  "<b>The gap.</b> Every one of those controls is momentary, and mode lives in DataWedge profiles that switch per-app. Zebra ships no built-in indicator of the active profile — it is only obtainable through a Get Active Profile intent, which Zebra's own developer blog warns returns the wrong answer unless called from a foreground service. The worker cannot see which profile is live. The hardware to show it is already fitted and unassigned: VC8300's blue application-programmable LED, WS50's two multi-colour application LEDs.":
    "<b>落差。</b>上述每一顆控制件都是瞬時鍵，而模式住在隨 app 切換的 DataWedge profile 裡。Zebra 沒有出貨任何內建的「啟用中 profile」指示器 —— 它只能透過 Get Active Profile intent 取得，而 Zebra 自己的開發者部落格就警告過，不從前景 service 呼叫就會拿到錯的答案。作業員看不到現在是哪一個 profile 在跑。能顯示它的硬體早就裝好而且閒置著：VC8300 的藍色 application-programmable LED、WS50 的兩顆多色 application LED。",

  "Make capture state legible to the person in frame, not just the operator":
    "讓擷取狀態對鏡頭前的人也可讀，而不只是對操作者",
  "Zebra over-delivers here already — but every cue it ships faces the operator, confirming to whoever holds the device that the read worked. Ray-Ban Meta's capture LED exists for the other person. Fixed scanners and machine-vision cameras now sit in shared workspaces, and nothing in that line indicates anything to the people in front of them.":
    "Zebra 在這裡其實已經給得太多 —— 但它出貨的每一個提示都朝向操作者，是在向手裡拿著裝置的人確認「讀到了」。Ray-Ban Meta 的拍攝 LED 存在的理由是另一個人。固定式掃描器與機器視覺相機如今就裝在共用的工作空間裡，而那條產品線沒有任何東西對站在它前面的人表達任何事。",
  "DS3600 LEDs wrap the housing so they read from any position, plus beeper and vibration; CS60 adds a good-decode LED, adjustable tone, haptics and a Direct Decode Indicator projected onto the barcode itself; FS40 carries 360° decode-status lights.":
    "DS3600 的 LED 環繞整個機身，從任何角度都讀得到，另有蜂鳴器與震動；CS60 再加上成功解碼 LED、可調提示音、觸覺回饋，以及直接投影在條碼上的 Direct Decode Indicator；FS40 則配有 360° 解碼狀態燈。",
  "<b>The gap.</b> All of it is operator feedback — it answers \"did my scan work\", aimed at the hand holding the device. None of it answers \"is this thing capturing me\" for the person on the other side of the lens, which is the job Ray-Ban Meta's capture LED and Ring's indicators are built to do. The exposure is growing on its own: Zebra's FS40/FS70/FS80 scanners and CV60/CV70 and VS40/VS70 cameras are fixed installations in shared workspaces, where there is no operator present to read an operator-facing cue.":
    "<b>落差。</b>這些全部都是操作者回饋 —— 它們回答的是「我這一下掃到了嗎」，瞄準的是握著裝置的那隻手。沒有一個回答「這東西正在拍我嗎」，而那正是 Ray-Ban Meta 的拍攝 LED 與 Ring 的指示燈被造出來要做的事。這個暴露面還在自己長大：Zebra 的 FS40/FS70/FS80 掃描器與 CV60/CV70、VS40/VS70 相機都是裝在共用工作空間裡的固定設備，現場根本沒有操作者可以去讀一個朝向操作者的提示。",

  "Prototype a handheld whose existing switch or grip replaces menu-based mode switching":
    "做一台手持機原型，讓既有的撥桿或握把取代選單式的模式切換",
  "A near-duplicate of the first item above, and the shipped half is already done: the TC53's Trigger Handle, the MC9400's trigger plus keypad scan button and the WS50's trigger all put capture on an existing physical element. What was actually missing is mode visibility, which the first item now covers directly.":
    "和上面第一項幾乎重複，而且該出貨的那一半已經做完了：TC53 的 Trigger Handle、MC9400 的扳機加鍵盤掃描鍵、WS50 的扳機，都已經把擷取動作放在既有的實體元件上。真正還缺的是模式的可見性，而那一點現在由第一項直接涵蓋。",
  "Give fixed scanners and machine-vision cameras a light channel that reports state to the floor":
    "給固定式掃描器與機器視覺相機一條向現場回報狀態的光頻道",
  "Already shipped. The FS40 carries 360° LED lights that show decode status plus five camera status LEDs, and the FS80 has Power, User, Status and Ethernet LEDs with a 360° status option.":
    "已經出貨。FS40 配有顯示解碼狀態的 360° LED 燈，外加五顆相機狀態 LED；FS80 則有 Power、User、Status 與 Ethernet LED，並提供 360° 狀態選項。",
  "Use light to make one device findable and identifiable across a shared floor":
    "用光讓某一台裝置在共用場域中被找到、被辨識",
  "Already shipped in software. Device Tracker plays a customisable chirp on the lost device and can alert nearby devices by audio, vibration or LED, with blue as the default; Bluetooth scanners get separate beep and LED find options.":
    "已經以軟體形式出貨。Device Tracker 會在遺失的裝置上播放可自訂的提示音，並可用聲音、震動或 LED 通知附近的裝置，預設為藍色；藍牙掃描器另有獨立的嗶聲與 LED 尋找選項。",
  "Give autonomous equipment a legible authority/credential state":
    "給自主設備一個可讀的授權／憑證狀態",
  "Dropped as unverified rather than disproven. The Fetch Freight100 base already advertises at-a-glance Wi-Fi, battery, run-stop and Fetch Core status lights; whether any of them expresses operating authority is not documented publicly, and the signal behind it rests on only three reports. Re-check when the AMR line's own documentation is to hand.":
    "以「未經查證」而非「已被推翻」的理由排除。Fetch Freight100 底座本身就已標榜可一眼看懂的 Wi-Fi、電量、run-stop 與 Fetch Core 狀態燈；其中是否有任何一項在表達運作授權，公開文件沒有寫，而且支撐它的訊號只有三篇報告。等拿到 AMR 產品線自己的文件後再重新查核。",

  /* ======================= 04 · keyword landscape ======================= */
  "Everything underneath — click a keyword to jump to its reports": "底下的全部素材 —— 點一個關鍵字就能跳到它的報告",
  "Cloud": "雲圖",
  "Timeline": "時間軸",
  "Keyword": "關鍵字",
  "↔ Drag to explore": "↔ 拖曳瀏覽",
  "A dashed outline means the keyword rests on a single report so far. Hover any keyword for its source count. Thinly-covered domains fill in as later periods add reports.":
    "虛線外框代表這個關鍵字目前只靠一篇報告支撐。把游標移到任何關鍵字上可以看到它的來源數量。覆蓋較薄的領域會隨著後續期數加入報告而補上。",
  "The cloud shows how much evidence a keyword has; this shows <em>when</em> that evidence arrived. A bar spanning several weeks means a sustained pattern; a single dot means one week's spike. Dot size is the number of reports that week.":
    "雲圖顯示一個關鍵字累積了多少證據；這裡顯示的是那些證據<em>什麼時候</em>出現。橫條跨越好幾週代表持續的模式；只有一個點代表某一週的尖峰。點的大小是該週的報告數量。",

  /* ======================= tracked keyword names ======================== */
  "The Dial That Declares Drive Mode": "宣告駕駛模式的那顆旋鈕",
  "Light Reports State": "光負責回報狀態",
  "Moving Hardware Needs a State Model": "會動的硬體需要一套狀態模型",
  "Control Authority Reaches the Second Row": "控制權延伸到第二排",
  "Declared Service Boundaries": "被明示出來的維修邊界",
  "Viewing Zone Split From Reaching Zone": "觀看區與伸手可及區被拆開",
  "Concealed Active Systems Need Unmistakable State": "被隱藏的主動系統需要不會認錯的狀態",
  "Price Tiers Gated by Software, Not Shell": "價格級距由軟體決定，不是外殼",
  "Visible Sensing State, Physical Not Just Software": "可見的感測狀態，要實體的而不只是軟體的",
  "Fit, Hinge & Service Parts": "配戴貼合、轉軸與維修零件",
  "Compute Moves Off the Primary Surface": "運算移出主要機身",
  "One Head Shape Can't Be the Default": "不能只用一種頭型當預設",
  "Fit Is Part of Display Performance": "配戴貼合是顯示效能的一部分",
  "Redundant Capture Needs a Visible Confirmation": "備援錄製需要一個看得見的確認",
  "Two Solar Surfaces, Two Charging Moments": "兩片太陽能面，兩個充電時刻",
  "Power Scarcity as a Named Workflow State": "電力不足是一個被命名的工作流程狀態",
  "The Pairing Dongle Is a Designed Part": "配對接收器是一個被設計過的零件",
  "Gesture Control Keeps a Hardware Fallback": "手勢控制保留實體備援",
  "Credentialed Access Made Legible at the Threshold": "通行授權在門口就被看懂",
  "Zone-Matched Sensing": "依區域匹配的感測精度",
  "Haptics Explain the Task": "觸覺回饋說明任務狀態",
  "Fleet Status Stays Visible Without a Dashboard": "不靠儀表板也看得到機隊狀態",
  "Battery Swap Is a Workflow State": "換電池是一個工作流程狀態",
  "Modular + Unmistakable States": "模組化，加上不會認錯的狀態",
  "Service Access Designed Into the Mount": "維修通道直接設計進安裝座",
  "The Room Becomes a Managed Object": "會議空間本身變成一個受管理的物件",
  "Threshold Status Made Public": "空間狀態公開在門外",
  "Shared Screens Adapt to Distance and Identity": "共用螢幕依距離與身分調整",
  "A Physical Control Becomes the Primary Interface": "實體控制件成為主要介面",
  "Reachable Micro-Adjustment Mid-Task": "任務進行中伸手就能做的微調",
  "Friction & Impact Zones, Engineered Separately": "摩擦區與衝擊區分開設計",
  "AI Output Stays Inspectable Beside the Source": "AI 產出與原文並陳，維持可查核",
  "Attachment Becomes a New Wear Point": "外接配件成為新的磨耗點",
  "Vulnerable Controls Move Away From the Hand": "易誤觸的控制件遠離手的位置",
  "Tier Colour Must Not Collide With Status Colour": "等級用色不能和狀態用色撞在一起",
  "Mode Changes Need Obvious Hardware Cues": "模式切換需要明顯的硬體提示",
  "Hinge Becomes a Self-Standing Mode": "轉軸本身變成一種自立模式",
  "Factory-Official Modular Rig, Not a Third-Party Workaround": "原廠官方模組化外掛架，而不是第三方的變通方案",

  /* ======================= domain names + chrome ======================== */
  "Automotive & Mobility": "汽車與移動",
  "Sensing & Capture Devices": "感測與擷取裝置",
  "Wearable Devices": "穿戴裝置",
  "Robotics": "機器人",
  "Rugged Devices": "強固型裝置",
  "Sports Industry": "運動產業",
  "Mobile & Handheld Devices": "行動與手持裝置",
  "Consumer Electronics": "消費性電子",
  "All domains": "所有領域",
  "Go to domain dashboard →": "前往領域儀表板 →",
  "Every domain, one place.": "所有領域，集中一處。",
  "Every week, one place.": "所有週次，集中一處。",
  "Every launch event, one place.": "所有發表會，集中一處。",
  "Every report, one place.": "所有報告，集中一處。",
  "No weekly reports yet.": "目前還沒有週報。",
  "No launch events yet.": "目前還沒有發表會。",
  "No reports match that search.": "沒有符合這個搜尋的報告。",
  "Search by name, domain, or idea (e.g. \"rugged device\", \"ai device\")…":
    "依名稱、領域或概念搜尋（例如「rugged device」、「ai device」）…",
  "⬇ Download selected as .zip": "⬇ 將所選項目下載為 .zip",
  "Clear selection": "清除選取",
  "Select all": "全選",
  "🗑 Delete selected": "🗑 刪除所選",
  "Suggested topics, waiting to be covered.": "已建議、尚未製作的主題。",
  "Saved on this browser only — suggestions aren't shared across devices.": "只儲存在這個瀏覽器 —— 建議不會跨裝置同步。",
  "No suggestions yet — add one from the dashboard sidebar.": "目前還沒有建議 —— 可以從儀表板側邊欄新增。",
  "Stellantis · Mondial de l'Auto 2026 Special Edition": "Stellantis · 2026 巴黎車展特別版",

  "Trend signals this period": "本期趨勢訊號",
  "Trend Signal": "趨勢訊號",
  "In focus": "本期焦點",
  "Key Takeaway": "關鍵結論",
  "Coverage window": "涵蓋期間",
  "Reports this period": "本期報告",
  "Everything tracked in this domain": "這個領域追蹤的全部項目",
  "Browse reports one by one": "逐篇瀏覽報告",
  "Sources": "來源",
  "Next": "下一個",
  "Previous": "上一個",

  /* ======================= domain blurbs (In focus) ===================== */
  "Sixteen 2026 launches — from Ferrari's first EV to six Stellantis concept cars, Renault, Alpine and Tesla's Paris Motor Show reveals, Jetta's first EV sedan and Toyota's five tracked Snowhunter concepts at SEMA — converge on keeping tactile, locatable controls legible in digital cabins, while Citroën, FIAT and Toyota mark repair, reconfiguration and dirty-versus-clean boundaries right on the body, and both Jetta's three-trim platform and Toyota's five-vehicle equipment language show one system can scale across a whole range.":
    "2026 年有十六場發表講的其實是同一件事：數位座艙裡還是得留住摸得到、找得到的實體控制件。從 Ferrari 第一輛電動車、六輛 Stellantis 概念車、Renault、Alpine 和 Tesla 的巴黎車展亮相、Jetta 第一款電動轎車，到 Toyota 在 SEMA 推出的五台履帶式 Snowhunter，都是如此。Citroën、FIAT 和 Toyota 則乾脆把維修、重組、髒區與乾淨區的界線直接畫在車身上。Jetta 的三級距平台和 Toyota 橫跨五款車的裝備語言也證明，同一套系統撐得起一整條產品線。",
  "Ray-Ban's audio and capture-enabled glasses, Meta's VR headset, Ring's camera family, XREAL's spatial displays and AURA eyewear, and Sony's wireless mic kit all treat sensing state, fit and point-of-use confirmation as explicit design problems — and increasingly treat the cable to an off-body compute pack as product architecture rather than a compromise.":
    "Ray-Ban 的音訊與拍攝眼鏡、Meta 的 VR 頭戴裝置、Ring 的相機家族、XREAL 的空間顯示器和 AURA 眼鏡，還有 Sony 的無線麥克風組，都把感測狀態、配戴貼合、使用當下的確認當成正式的設計題目在處理。而且愈來愈多產品把連到體外運算盒的那條線當成產品架構的一部分，不再當成妥協。",
  "Amazfit's dual-solar watch, Logitech's Zone Vibe Pro headset and Antigravity's Watch and Ring Remotes treat power recovery, serviceable wear parts and gesture-control fallback as visible, deliberate product features.":
    "Amazfit 的雙面太陽能手錶、Logitech 的 Zone Vibe Pro 耳機，以及 Antigravity 的手錶與戒指遙控器，都把電力回復、可維修的磨耗件與手勢控制的備援，當成看得見、刻意為之的產品特性。",
  "ANYmal's credentialed door access, Sharpa's haptic manipulation stack, Skydio's docked F10 drone and Signode's five-class AMR portfolio expansion all turn autonomy into something legible and correctable, not just capable.":
    "ANYmal 的憑證式門禁通行、Sharpa 的觸覺操作堆疊、Skydio 可停靠的 F10 無人機，以及 Signode 擴增到五種車型的 AMR 產品線，都把自主性變成可讀、可修正的東西，而不只是能力強。",
  "Panasonic's TOUGHBOOK 34 keeps gloved, physical interaction central to rugged field computing, separates structure from serviceable interface zones, and expresses both legacy compatibility and rugged durability through genuine structure rather than decoration.":
    "Panasonic 的 TOUGHBOOK 34 讓戴手套的實體操作維持在強固型現場運算的核心，把結構與可維修的介面區分開，並用真正的結構而非裝飾，同時表達對舊規格的相容與強固耐用。",
  "adidas' FREERIDER 2027 splits one footwear family into task-matched variants with micro-adjustable, inspectable wear zones.":
    "adidas 的 FREERIDER 2027 把單一鞋款家族拆成依任務匹配的版本，搭配可微調、可檢查的磨耗區。",
  "Samsung's Galaxy Tab, Amazon's Kindle and Alexa Tablets, Apple's foldable iPhone Duo, and OPPO's Find X10 Series with its factory Tilta Khronos rig all treat attachment, hinge and control placement as explicit, testable — and increasingly officially supported — decisions on a familiar handheld device, while Apple's hand-held iPad mini beside its touch MacBook Pro and Turtle Beach's flip-over stick modules push the same thinking further, letting the device's own shape and posture declare which input mode is live.":
    "Samsung 的 Galaxy Tab、Amazon 的 Kindle 和 Alexa 平板、Apple 的摺疊 iPhone Duo，還有配上原廠 Tilta Khronos 外掛架的 OPPO Find X10 系列，都把外接、轉軸和控制件位置當成明確、可以測試的設計決策，而且愈來愈多由原廠自己扛起來。Apple 單手拿的 iPad mini 和那台觸控 MacBook Pro 擺在一起，加上 Turtle Beach 整塊翻面的搖桿模組，又把這套想法往前推：裝置自己的形狀和姿勢，就說明了現在是哪一種輸入模式。",
  "Logitech's Rally Bar 2 and Rally System 2 Pro turn room hardware into serviceable, managed modules with status visible before anyone walks in; Apple's HomeView extends shared-screen logic into the home; Sigma's fp2 and Teenage Engineering's EP-35 show a physical switch or handle can replace menu depth as the primary interface; and Sony's ELF-MN1 and Fujifilm's instax mini Evo 2 add two newer moves — publishing an optical envelope as a hard dimension, and placing a deliberate preview between capture and an irreversible print.":
    "Logitech 的 Rally Bar 2 和 Rally System 2 Pro 把空間硬體變成可維修、受管理的模組，人還沒走進去就看得到狀態。Apple 的 HomeView 把共用螢幕的邏輯延伸到家裡。Sigma 的 fp2 和 Teenage Engineering 的 EP-35 則證明一顆實體撥桿或一支提把就能取代層層選單，當成主要介面。Sony 的 ELF-MN1 和 Fujifilm 的 instax mini Evo 2 又帶來兩個新做法：把光學可視範圍當成規格寫出來，以及在拍和印之間刻意插一道預覽。",

  /* ======================= domain key takeaways ========================= */
  "Physical controls survive even as automotive cabins go fully digital": "即使汽車座艙全面數位化，實體控制件依然存活下來",
  "Ferrari, Tesla, BRABUS, Red Bull and the Alfa Romeo, Peugeot and DS concepts all keep real, distinctly shaped buttons and dials for the actions that matter most, while Renault, Alpine and the Roadster extend the same discipline to cabin layout, repeated identity cues and concealed active systems. Citroën's 2 CV Concept, FIAT Multiplay and Toyota's Snowhunter family mark a separate thread: repair, reconfiguration and dirty-versus-clean boundaries are declared right on the body instead of hidden inside one shell. Scale is the third thread — Jetta's M6 shows one shell can gate a range in software across three trims, and Snowhunter shows one cargo, protection and access language can carry unchanged across five vehicle sizes. Zebra can apply all three — distinctly shaped, glove-tested physical controls; a visibly separate impact-versus-reconfiguration boundary a gloved hand can read in bad weather; and one chassis and mounting language held consistent across price tiers and across truck, forklift and van installations alike.":
    "Ferrari、Tesla、BRABUS、Red Bull，還有 Alfa Romeo、Peugeot 和 DS 的概念車，都替最要緊的操作留下了真的按鍵和旋鈕，而且形狀明顯不一樣。Renault、Alpine 和 Roadster 把同一套紀律用到座艙佈局、重複出現的識別元素，以及藏起來的主動系統上。Citroën 2 CV Concept、FIAT Multiplay 和 Toyota 的 Snowhunter 家族走的是另一條線：維修、重組、髒區和乾淨區的界線，直接畫在車身上，不藏進同一塊外殼裡。第三條線是規模。Jetta M6 證明同一塊外殼可以用軟體分成三個級距，Snowhunter 則證明同一套載物、防護、取用的做法可以原封不動用在五種車身尺寸上。這三件事 Zebra 都用得上：形狀明顯不同、戴手套實測過的實體控制件；一條戴著手套在惡劣天候也看得出來的抗撞與重組界線；還有一套不分價格級距，卡車、堆高機、廂型車也都一致的機身與安裝語言。",
  "Sensing state has to be unmistakable to the wearer and everyone nearby": "感測狀態對配戴者與附近每一個人都必須不會認錯",
  "Ray-Ban Meta's camera lines and Ring's camera family pair a physical capture cue with swappable fit parts, while XREAL and Sony show that fit calibration and point-of-use state confirmation matter just as much. AURA adds a fourth thread: once compute, battery and heat move to a waistband puck, the lead between them is published as a standard, user-replaceable USB-C part rather than a captive assembly. Zebra can apply the same unmistakable sensing indicator, tactile fallback and visible state confirmation to its worker-worn hardware — and make the most-flexed cable in any tethered system a stock line it can replace on site instead of a warranty event.":
    "Ray-Ban Meta 的相機系列和 Ring 的相機家族，把實體的拍攝提示和可更換的貼合零件配成一套。XREAL 和 Sony 則說明貼合校正、使用當下的狀態確認一樣重要。AURA 再加上第四條線：運算、電池和發熱都搬到腰間的盒子以後，中間那條線就當成標準的 USB-C 零件公開，使用者自己換得掉，不做成拆不開的整組。Zebra 可以把同一套不會看錯的感測指示、觸覺備援和看得見的狀態確認，用在作業員配戴的硬體上，再把外接系統裡彎折最兇的那條線做成常備料號，現場直接換掉，不必走保固。",
  "Running low on power should be visible, not a hidden failure": "電量快沒了這件事應該被看見，而不是一個被藏起來的失敗",
  "Amazfit's dual-solar charging and Logitech's swappable pads and batteries both treat power and service as product features, while Logitech's own pairing and mode-switching feedback shows connection state needs to be just as readable as battery state. Antigravity's Watch and Ring Remotes add a third thread: wearable gesture control still keeps a manual hardware button in reserve. Zebra can give its scanners and headsets the same glanceable low-power and connection state, fast-service parts, and a gesture-independent hardware fallback.":
    "Amazfit 的雙面太陽能充電與 Logitech 可更換的耳墊與電池，都把電力與維修當成產品特性；而 Logitech 自己的配對與模式切換回饋，則顯示連線狀態需要和電量狀態一樣可讀。Antigravity 的手錶與戒指遙控器加上第三條線：穿戴式手勢控制仍然保留一顆手動實體按鍵作為後備。Zebra 可以給它的掃描器與耳機同樣一眼可讀的低電量與連線狀態、可快速維修的零件，以及一個不依賴手勢的實體備援。",
  "Autonomy earns trust through visible, correctable state, not just capability": "自主性靠看得見、可修正的狀態贏得信任，不只是靠能力",
  "ANYmal's credentialed door access and Skydio's dock-managed fleet readiness make robot behavior legible before it acts, Sharpa's haptic manipulation stack extends that same legibility into touch — distinguishing a clean grasp, a low-confidence read and a required retry — and Signode's AMR portfolio carries it across an entire fleet with one repeated status-light language. Zebra's mobile robots and handhelds can apply the same request/grant/deny logic, task-distinguishing haptic feedback, inspectable dock status, and one shared status language across every vehicle class.":
    "ANYmal 的憑證式門禁通行與 Skydio 由停機艙管理的機隊就緒狀態，讓機器人的行為在動作之前就可讀；Sharpa 的觸覺操作堆疊把同一種可讀性延伸到觸覺 —— 分辨乾淨的抓取、低信心的讀取與必須重試；而 Signode 的 AMR 產品線則用一套重複使用的狀態燈語言，把它帶到整個機隊。Zebra 的移動機器人與手持機可以套用同一套請求／核准／拒絕邏輯、能分辨任務的觸覺回饋、可檢視的停靠狀態，以及一套橫跨所有車型的共用狀態語言。",
  "Gloved, physical interaction still belongs at the center of rugged computing": "戴著手套的實體操作，仍然該留在強固型運算的核心",
  "The TOUGHBOOK 34 validates hardware buttons with real gloves, exposes a defined service bay instead of hidden disassembly, and protects existing accessory and connector investments even as it adopts new standards. Zebra can apply the same dedicated buttons, explicit service access, and genuine structural (not decorative) expression of both legacy compatibility and durability to its next rugged tablet.":
    "TOUGHBOOK 34 用真的手套驗證硬體按鍵，開出一個定義明確的維修艙而不是隱藏式拆解，並且在採用新標準的同時保住既有的配件與接頭投資。Zebra 可以把同樣的專屬按鍵、明確的維修通道，以及用真正的結構（而非裝飾）同時表達舊規格相容與耐用性的做法，套用到下一代強固型平板上。",
  "One hardware family can still be matched to the task at hand": "同一個硬體家族仍然可以對應到手邊的任務",
  "adidas' FREERIDER 2027 splits one shoe family into task-specific variants with reachable, glove-tested adjustment, and engineers its grip, impact and attachment zones as separate, inspectable surfaces rather than one uniform shell. Zebra can apply the same shared base and quick-adjust design, with independently mapped, cleanable wear zones, to its wearable-scanner mounts.":
    "adidas 的 FREERIDER 2027 把單一鞋款家族拆成任務專屬的版本，配上伸手可及、經手套實測的調整機構，並把抓地、衝擊與接附區當成各自獨立、可檢查的表面來設計，而不是一整片均質外殼。Zebra 可以把同樣的共用基座與快調設計，加上各自獨立規劃、可清潔的磨耗區，套用到它的穿戴式掃描器安裝座上。",
  "Attachments and controls deserve their own tested state, not an assumption": "外接配件與控制件應該有屬於自己的測試狀態，而不是一個假設",
  "Galaxy Tab, Kindle and the Alexa Tablets all treat a keyboard attachment or control placement as a deliberate design decision, the iPhone Duo's self-locking hinge turns a fold into its own hands-free standing mode, and OPPO's own factory-built Khronos rig shows a device maker can own that modularity directly instead of leaving it to third parties. Mode is the newer question: Turtle Beach's modules physically flip, so the active thumb-input mode reads off the controller's outline rather than out of a setting, and Apple designs the same direct touch for two different postures — tablet in one hand, laptop open on a desk — with a different set of controls surviving in each. Zebra can validate the same attachment stability and glove-tested control layout, apply a self-locking hinge or kickstand for hands-free scanning postures, consider an official rigging accessory for specialized field tasks, and treat a handheld's in-hand and docked postures as two separate design targets rather than assuming one inherits the other.":
    "Galaxy Tab、Kindle 和 Alexa 平板都把鍵盤外接或控制件位置當成刻意的設計決策。iPhone Duo 會自鎖的轉軸，讓對折本身變成免持立起的模式。OPPO 原廠自己做的 Khronos 外掛架則說明，這塊模組化原廠扛得起來，不必留給第三方。比較新的問題是模式：Turtle Beach 的模組整塊翻過去，現在用的是哪一種拇指操作，看外形就知道，不必去翻設定；Apple 則把同一種觸控設計給兩種姿勢，單手拿的平板和攤在桌上的筆電，兩邊留下來的控制件並不一樣。Zebra 可以照樣驗證外接穩定度和戴手套的控制件配置，替免持掃描加上會自鎖的轉軸或立架，也可以考慮為特定現場任務出原廠外掛配件。還有一點：手持機的手持和入座要當成兩個設計目標分開驗，不要假設其中一個會自動繼承另一個。",
  "Consumer electronics increasingly treat one physical element as the whole interface": "消費性電子愈來愈把單一個實體元件當成整個介面",
  "They also increasingly surface room status before someone has to walk in to check it — Rally Bar 2's pivoting mount exposes service access, Rally System 2 Pro's modular components support central management while its own distance-readable availability signal is visible before someone commits to entering, HomeView adapts a shared screen to who's approaching, and Sigma's STILL/CINE switch and Teenage Engineering's carry handle turn an existing control into the main interface instead of adding menus. Two further threads arrive with the ELF-MN1 and the instax mini Evo 2: Sony publishes its usable viewing distance, angle and ambient-light range as hard numbers and derives the cradle angle and body size from them, and Fujifilm puts a preview step between capture and the irreversible act of spending film. Zebra can apply the same swing-access mount, modular configuration, outside-the-room availability signal, identity-aware interface, and dedicated-switch-over-menu logic across its kiosks, terminals and handhelds — then publish a viewing envelope for every mounted display the way it publishes a drop rating, and put an explicit review step in front of anything a worker cannot undo.":
    "它們也愈來愈把空間狀態在人走進去之前就先秀出來。Rally Bar 2 可翻轉的安裝座露出維修通道；Rally System 2 Pro 的模組化元件支援集中管理，它遠距就讀得到的可用狀態訊號，在人決定要不要進去之前就看得見；HomeView 會看誰在靠近而調整共用螢幕；Sigma 的 STILL/CINE 撥桿和 Teenage Engineering 的提把，則把既有的控制件變成主要介面，而不是再多加選單。ELF-MN1 和 instax mini Evo 2 再帶來兩條線：Sony 把能用的觀看距離、角度和環境光範圍用明確數字寫出來，托架角度和機身尺寸都是照著這些數字做的；Fujifilm 則在拍和「用掉一張底片」這個收不回來的動作之間，插了一道預覽。Zebra 可以把同樣的翻轉維修座、模組化組態、房間外的可用狀態訊號、看得出身分的介面，以及用專屬撥桿取代選單的做法，用在服務機、終端和手持機上，再像標落摔等級那樣替每一台固定安裝的顯示器標出可視範圍，並且在任何作業員收不回來的動作前面擺一道複查。",

  /* ======================= domain trend statements ====================== */
  "The physical control that survives a screen-first cabin is specifically the one that declares which mode is active — not the one that is merely convenient.":
    "在螢幕優先的座艙裡能存活下來的實體控制件，正是宣告哪一個模式啟用中的那一個 —— 不是那個只是比較方便的。",
  "Give vehicle-mounted computers and cradles one distinctly shaped physical control that states the device's operating mode, rather than a touch target that has to be woken and read before the mode is known.":
    "給車載電腦與座架一個外形明顯有別的實體控制件，用它說出裝置的運作模式，而不是一個得先喚醒、先讀過才知道模式的觸控目標。",
  "Exterior and cabin lighting is being tied to operating state rather than used purely as a recognition signature.":
    "外部與座艙照明正被綁定到運作狀態上，而不再只是當作辨識用的簽名。",
  "Use one engineered optical signal to report dock, charge and managed-state on cradles, instead of an LED cluster that only distinguishes powered from unpowered.":
    "在座架上用一組經過設計的光訊號回報停靠、充電與受管理狀態，取代只能分辨通電與否的 LED 群。",
  "Moving aerodynamic and body geometry is engineered as a stateful control system with declared locked, transitional and failed states — not a styling flourish.":
    "會動的空力與車體幾何是以帶狀態的控制系統來設計的，明確定義鎖定、過渡與失效狀態 —— 不是造型上的點綴。",
  "Define locked, transitional and failed states as explicitly as an active wing for auto-release dock latches and adjustable mounts.":
    "為自動鬆脫的座架卡榫與可調安裝座定義鎖定、過渡與失效狀態，要和主動尾翼一樣明確。",
  "Non-primary occupants are being given real control surfaces rather than more space — role is now expressed as authority over the system.":
    "非主要乘員拿到的是真正的控制介面，而不是更多空間 —— 角色現在是用對系統的控制權來表達的。",
  "In multi-operator vehicle computing, assign actual control authority per role (driver versus dock worker) instead of giving the second role a read-only screen.":
    "在多人操作的車載運算裡，依角色（駕駛與碼頭作業員）分配真正的控制權，而不是給第二個角色一塊唯讀螢幕。",
  "Concepts make repair and reconfiguration boundaries visible on the body, instead of hiding every seam inside one shell.":
    "概念車把維修與重組的邊界直接做在車身上看得見，而不是把每一道接縫都藏進同一塊外殼裡。",
  "Give rugged handhelds and vehicle-mounted computers a visibly distinct, independently replaceable impact boundary, separate from a legible accessory-reconfiguration boundary, so a technician can read repair scope versus reconfiguration scope directly from the housing without full teardown. Toyota's Snowhunter extends the same logic to a dirty/clean zone split a gloved hand can read in bad weather.":
    "給強固型手持機和車載電腦一圈外觀上就分得出來、可以單獨換掉的抗撞邊界，跟配件重組的邊界分開。技師不用整機拆開，光看機殼就知道哪邊是維修範圍、哪邊是重組範圍。Toyota Snowhunter 把同一套邏輯延伸到髒區和乾淨區的分界，戴著手套、天氣再差也看得出來。",
  "Where information is displayed is being separated from where it is touched, instead of assuming one screen serves both jobs.":
    "資訊顯示的位置正在和被觸碰的位置分開，不再假設同一塊螢幕可以同時勝任兩件事。",
  "On vehicle mounts, put the readable display where the eyes already go and the controls where the hand already rests — as screens grow, these stop being the same surface.":
    "在車載安裝座上，把可讀的顯示放在視線本來就會去的地方，把控制件放在手本來就擱著的地方 —— 螢幕愈大，這兩個位置就愈不會是同一個面。",
  "Hiding complex, active or high-energy hardware behind a calm shell raises the bar for making that hardware's real state obvious before and during activation.":
    "把複雜、主動或高能量的硬體藏在一副冷靜的外殼後面，反而拉高了在啟動之前與啟動期間把它真實狀態講清楚的門檻。",
  "Any concealed sensor, emitter or high-energy accessory on Zebra hardware needs an explicit arm, active and fault signal, with decorative lighting kept visually distinct from a genuine warning.":
    "Zebra 硬體上任何被隱藏的感測器、發射器或高能量配件，都需要明確的待命、作動與故障訊號，而且裝飾性燈光必須在視覺上和真正的警示清楚區隔。",
  "An entire trim range now shares one shell, with the tier boundary drawn in software and compute instead of in sheet metal.":
    "整條車型級距現在共用同一塊外殼，級距界線畫在軟體與運算上，不是畫在鈑金上。",
  "Keep one chassis visually and mechanically consistent across Zebra product tiers, gating capability by software and compute rather than redesigning the housing per tier.":
    "讓同一個機身在 Zebra 各產品級距之間維持視覺與機構上的一致，用軟體與運算來分級能力，而不是每一級重新設計機殼。",

  "Sensing and recording state must be unmistakable, confirmed by a physical cue, not software.":
    "感測與錄製狀態必須不會被認錯，而且要由實體提示確認，不能只靠軟體。",
  "Give mute, listening and capture states the same physical, bystander-legible treatment — a lens cover, mechanical indicator or hardware cue — on any Zebra wearable or camera-equipped device with a mic or camera, so capture state reads without opening an app.":
    "在任何帶麥克風或相機的 Zebra 穿戴或攝影裝置上，讓靜音、聆聽與擷取狀態獲得同樣實體、旁人也讀得懂的處理 —— 鏡頭蓋、機構式指示或硬體提示 —— 讓擷取狀態不必開 app 就讀得出來。",
  "Fit and contact surfaces are being redesigned as a serviceable, swappable system rather than one fixed shape.":
    "貼合與接觸面正被重新設計成可維修、可更換的系統，而不是一個固定形狀。",
  "Design swappable straps, pads and hinge adjustments as first-class service parts.":
    "把可更換的頭帶、襯墊與轉軸調整，當成一等的維修零件來設計。",
  "Power and compute budgets are becoming an explicit, designed workflow state instead of a background spec.":
    "電力與運算預算正變成一個明確、被設計過的工作流程狀態，而不是背景規格。",
  "Offload battery and processing to a belt pack or cradle rather than the head- or hand-worn unit, and measure neck and wrist load across a full shift against a self-contained unit rather than at first fitting.":
    "電池和運算搬到腰包或座架上，不要壓在頭戴或手持的那一端。頸部和手腕的負荷要用一整個班次去跟一體機比，不能只在剛戴上時量一次。",
  "Fit variation is being treated as a product-line requirement rather than an accessory size chart — one platform ships in several head-matched silhouettes.":
    "貼合差異正被當成產品線層級的需求，而不是配件尺寸表 —— 同一個平台會以數種對應頭型的外形出貨。",
  "Ship head- and hand-worn Zebra devices as genuine fit variants off one platform, instead of one average size corrected with padding.":
    "讓 Zebra 的頭戴與手持裝置以同一平台出真正的貼合版本，而不是出一個平均尺寸再用襯墊補救。",
  "For a worn display, fit adjustments are a calibration step, not a cosmetic afterthought.":
    "對一副穿戴式顯示器來說，貼合調整是一道校正程序，不是事後的外觀修飾。",
  "Document nose pad, temple and IPD-style fit adjustments as part of a wearable display's setup and validation process, and test text recognition after a full-shift wear trial, not just at first fitting.":
    "把鼻墊、鏡腳與瞳距類的貼合調整，寫進穿戴式顯示器的設定與驗證流程，並且在完整一個班次的配戴試驗之後再測一次文字辨識度，而不是只在初次配戴時測。",
  "A backup recording path only earns trust when its state — present, charged, recording — is visible at the point where the operator is already holding the kit.":
    "備援錄製路徑只有在它的狀態 —— 存在、已充電、錄製中 —— 就顯示在操作者本來就握著的位置時，才值得信任。",
  "Pair any Zebra field-audio or evidence-capture accessory with a local backup path and a small, glanceable display showing pairing, recording and remaining capacity at the component the worker is handling.":
    "為任何 Zebra 的現場收音或證據擷取配件配上本機備份路徑，以及一塊就在作業員實際拿著的那個元件上、一眼就看得到的小顯示，顯示配對、錄製與剩餘容量。",

  "Two solar collection surfaces split \"worn\" from \"set aside\" charging into two deliberately different moments.":
    "兩片太陽能收集面，把「配戴中」與「放在一旁」的充電刻意拆成兩個不同的時刻。",
  "A dual-surface or dock-plus-body charging path can replace a single charging contact point.":
    "雙面或底座加本體的充電路徑，可以取代單一個充電接點。",
  "Running low on power becomes a named workflow state, not a failure the product tries to hide.":
    "電力不足變成一個被命名的工作流程狀態，而不是產品試圖掩蓋的失敗。",
  "A defined \"recoverable minimum\" mode can preserve scan confirmation and location before a device goes fully dark.":
    "一個定義明確的「可復原最低限度」模式，可以在裝置完全斷電之前保住掃描確認與位置資訊。",
  "The receiver that establishes a connection is being designed as a first-class system part with its own state readout, not a bundled afterthought.":
    "負責建立連線的接收器正被設計成具備自身狀態顯示的一等系統零件，而不是隨附的附帶品。",
  "Treat scanner and headset pairing hardware as a designed, losable, replaceable part that reports its own state, with a recovery path when pairing fails.":
    "把掃描器與耳機的配對硬體當成一個被設計過、會弄丟、可更換、而且會回報自身狀態的零件，並在配對失敗時提供復原路徑。",
  "Wrist- and finger-worn gesture control ships alongside a manual hardware button as backup.":
    "腕戴與指戴的手勢控制，都和一顆手動實體按鍵一起出貨作為備援。",
  "Keep a hardware trigger as a gesture-independent fallback on wrist and ring scanners, verified under gloves and low light rather than assumed from a clean demo.":
    "在腕戴與戒指型掃描器上保留一個不依賴手勢的實體扳機，並且在戴手套與低光環境下實測，而不是從一段乾淨的展示影片推論。",

  "Robots are gaining managed digital identity to cross existing secured infrastructure, with authorization state visible at the point of action.":
    "機器人正取得受管理的數位身分以通過既有的安全設施，而授權狀態在動作發生的那一點就看得見。",
  "Give autonomous mobile robots the same managed, revocable digital identity to move through badge-controlled doors, gates and elevators, using consistent request/grant/deny/fallback states with a human-escalation path at every robot-operated threshold.":
    "給自主移動機器人同一套受管理、可撤銷的數位身分，用來通過刷卡門禁、閘門與電梯，並在每一個由機器人操作的出入口使用一致的請求／核准／拒絕／退場狀態，以及一條轉交給人的升級路徑。",
  "Contact and perceptual sensing resolution is matched to the zone, with fingertip precision only where it matters.":
    "接觸與感知的解析度是依區域匹配的，只有在真正需要的地方才用到指尖等級的精度。",
  "Design scan-confirmation feedback like fingertip haptics — distinguishing a clean read, a low-confidence read and a required retry.":
    "把掃描確認的回饋設計得像指尖觸覺一樣 —— 分辨乾淨的讀取、低信心的讀取，以及必須重試。",
  "Haptic feedback is being designed to communicate a task state — success, uncertainty, retry — not just confirm contact happened.":
    "觸覺回饋正被設計來傳達任務狀態 —— 成功、不確定、重試 —— 而不只是確認有接觸發生。",
  "Design vibration patterns around task state, not a single undifferentiated buzz.":
    "依任務狀態設計震動模式，而不是一種沒有分別的嗡嗡聲。",
  "A fleet's status stays visible through the dock itself or a shared status light.":
    "整個機隊的狀態，靠停靠座本身或一盞共用狀態燈就看得見。",
  "Treat multi-unit charging and task handoff as one inspectable system, and standardize a status-light and label-zone language across every handoff point, so a worker can identify the ready unit and the correct scan point without a separate dashboard, regardless of which robot class is involved.":
    "把多機充電與任務交接當成同一個可檢視的系統，並在每一個交接點標準化同一套狀態燈與標示區語言，讓作業員不必另開儀表板，也不管面對的是哪一類機型，都能認出就緒的那一台與正確的掃描點。",

  "Maintenance actions like battery exchange are being designed as named, legible workflow states rather than interruptions to hide.":
    "換電池這類維護動作，正被設計成被命名、可讀的工作流程狀態，而不是需要掩蓋的中斷。",
  "Design hot-swap and charging transitions as explicit device states that both the worker and the fleet dashboard can read, instead of treating them as downtime.":
    "把熱抽換與充電的轉換設計成作業員與機隊儀表板都讀得到的明確裝置狀態，而不是當成停機時間。",
  "Durable core structure is separated from modular interface zones, with every attachment state made unmistakable.":
    "耐用的核心結構與模組化的介面區被分開，而且每一個接附狀態都做到不會認錯。",
  "Define service bays with explicit access tools, and pair every dock/cradle state with a confirming visual or tactile cue.":
    "為維修艙定義明確的開啟工具，並讓每一個底座／座架狀態都配上一個確認用的視覺或觸覺提示。",

  "Fixed enterprise hardware is designed so its mount itself provides serviceable access.":
    "固定式的企業硬體，被設計成由它的安裝座本身提供維修通道。",
  "Give vehicle-mounted terminals and fixed scanners a controlled service swing or access panel, and measure maintenance time and reach from the actual mounting height.":
    "給車載終端與固定式掃描器一個可控的維修翻轉或維修蓋，並且從實際安裝高度去量測維修時間與伸手距離。",
  "A physical space is being represented as one managed asset with its own readiness state, rather than as a list of the devices inside it.":
    "一個實體空間正被表述為具有自身就緒狀態的單一受管理資產，而不是裡面那一串裝置的清單。",
  "Model a work cell or vehicle bay as a single managed object with its own readiness state, instead of as separate device records a supervisor has to reassemble.":
    "把一個工作單元或車輛工位模型化為具有自身就緒狀態的單一受管理物件，而不是一堆要由主管自行拼湊的裝置紀錄。",
  "Availability state is pushed outside the room itself, readable before someone commits to walking in and interrupting.":
    "可用狀態被推到空間之外，在有人決定走進去打斷之前就讀得到。",
  "Give shared Zebra kiosks and mounted terminals the same red/green, distance-readable availability signal instead of hiding status behind a login screen.":
    "給共用的 Zebra 服務機與壁掛終端同樣一套紅／綠、遠距可讀的可用狀態訊號，而不是把狀態藏在登入畫面後面。",
  "A fixed shared screen changes its information density and access based on who is approaching and from how far, not one generic state for everyone.":
    "固定的共用螢幕會依誰在接近、從多遠接近，改變它的資訊密度與存取權限，而不是對所有人都用同一種狀態。",
  "Give shared Zebra kiosks and wall terminals a large glanceable state at a distance and a detailed, identity-confirmed control set up close, with every identity switch explicit and reversible.":
    "給共用的 Zebra 服務機與壁面終端一個遠看就懂的大型狀態，以及近看才出現、經身分確認的詳細控制組，而且每一次身分切換都要明確且可還原。",
  "An existing switch or grip carries the full interface, replacing menu depth.":
    "既有的一顆撥桿或一支握把承擔整個介面，取代選單深度。",
  "Give a Zebra handheld's major mode changes a dedicated physical switch position, and ring its carry handle or grip with the controls a worker reaches for first — so lifting the device out of a holster is already most of the setup, without a menu to navigate.":
    "給 Zebra 手持機的主要模式切換一個專屬的實體撥桿位置，並把作業員最先會去摸的控制件環繞在提把或握把上 —— 讓把裝置從槍套抽出來這個動作，本身就完成了大部分的設定，不必再進選單。",

  "Micro-adjustment is placed where a rider can actually reach it mid-task, with the resulting range made measurable.":
    "微調被放在騎乘者在任務進行中真的伸手就能構到的位置，而且調整範圍是可量測的。",
  "Quick-adjust dials or buckles should be tested with gloves, mid-task, with the usable range documented.":
    "快調旋鈕或扣具應該在戴手套、任務進行中實測，並且把可用範圍寫成文件。",
  "Friction and impact zones are engineered as separate systems rather than one uniform surface.":
    "摩擦區與衝擊區是當成兩套獨立系統來設計的，而不是同一片均質表面。",
  "Map grip, impact and attachment zones independently on any wearable mount, with inspectable, cleanable wear surfaces.":
    "在任何穿戴式安裝座上，把抓握、衝擊與接附區各自獨立規劃，並使用可檢查、可清潔的磨耗面。",

  "Automated suggestions are kept reviewable by staying visually next to the material they summarize, rather than replacing it.":
    "自動產生的建議被保持在可複查的狀態，做法是讓它在視覺上緊鄰它所摘要的素材，而不是取代素材。",
  "Show source text beside generated summaries before a Zebra worker accepts a field decision, and flag uncertain content rather than presenting it as fact.":
    "在 Zebra 作業員接受一個現場決策之前，把原文顯示在生成摘要旁邊，並且把不確定的內容標示出來，而不是當成事實呈現。",
  "An attachment props up a held device, and its hinge becomes a new wear point.":
    "外接配件把手持裝置撐起來，而它的轉軸就成了一個新的磨耗點。",
  "Treat dock, cover and keyboard attachments as their own tested state — covering stability, gloved handling and the contact line's resistance to debris.":
    "把底座、保護殼與鍵盤配件當成它們自己的測試狀態 —— 涵蓋穩定度、戴手套操作，以及接觸線對粉塵碎屑的耐受度。",
  "A frequently mis-pressed control is relocated away from where the support hand naturally rests, and edge controls are gathered into one reachable zone.":
    "經常被誤按的控制件被移離支撐手自然擱放的位置，而邊緣控制件則被集中到同一個構得到的區域。",
  "Test power, trigger and recovery key placement against common one-handed and gloved grips before freezing a Zebra handheld's control layout.":
    "在凍結 Zebra 手持機的控制件配置之前，先用常見的單手與戴手套握法，測試電源鍵、扳機與復原鍵的位置。",
  "Finish and colour differentiate tiers only where they cannot be mistaken for status meaning — the two colour systems are being kept deliberately separate.":
    "表面處理與顏色只在不會被誤讀為狀態意義的地方用來區分等級 —— 這兩套顏色系統正被刻意分開。",
  "Keep device-tier colour and status-indicator colour on separate palettes, so a premium finish never reads as an alert and a safety signal never reads as trim.":
    "把裝置等級用色與狀態指示用色放在不同的色票上，讓高階質感的表面永遠不會被讀成警示，安全訊號也永遠不會被讀成外觀配色。",
  "Products make an input-mode transition — pen, keyboard, touch — physically obvious, and this period the mechanism itself does the declaring rather than a cue beside it.":
    "手寫筆、鍵盤、觸控之間的切換，產品會在實體上做得一目瞭然。這一期更進一步，負責講清楚的是機構本身，不再是旁邊多加的一個提示。",
  "Give pen, keyboard and dock connection states one consistent on-screen location so gloved operators can predict the active input mode before acting — and where a Zebra device genuinely has two input modes, prefer a physical configuration a supervisor can read across an aisle over a setting buried in a profile.":
    "手寫筆、鍵盤和底座的連接狀態，固定擺在畫面同一個位置，戴手套的作業員動手之前就知道現在是哪一種輸入。Zebra 裝置真的有兩種輸入模式時，寧可讓外形講話，主管隔著走道就看得出來，也不要把它埋進設定檔。",
  "A precision hinge holds the device open, turning a fold into a hands-free stand.":
    "一具精密轉軸讓裝置保持開啟，把摺疊變成一種免持的立架狀態。",
  "Apply the same logic to Zebra rugged tablets and handhelds: a built-in, self-locking hinge or kickstand, validated for drop and vibration, lets a device stand at a fixed, glanceable angle without a separate mount, freeing the worker's hands for scanning or picking while keeping the screen visible.":
    "把同樣的邏輯套用到 Zebra 的強固型平板與手持機上：一個內建、可自鎖的轉軸或立架，通過落摔與振動驗證之後，可以讓裝置以固定且一眼可讀的角度自己立著，不需要另外的安裝座，讓作業員空出雙手掃描或揀貨，同時螢幕仍然看得見。",
  "A device maker ships its own official modular rigging accessory for a specialized task, instead of leaving that modularity to third-party cases and mounts.":
    "裝置製造商親自為特定任務出自家官方的模組化外掛配件，而不是把這塊模組化留給第三方的保護殼與支架。",
  "Offer an official, factory-designed rigging accessory for specialized field tasks rather than leaving modular attachment to third parties, so fit and durability are validated by the device maker itself.":
    "為特定的現場任務提供原廠設計的官方外掛配件，而不是把模組化接附留給第三方，讓貼合度與耐用度由裝置製造商自己驗證。",

  /* ======================= report summaries ============================= */
  "A physical STILL/CINE switch, a dedicated Color button and 1/4-20 mounts across the chassis replace menu depth with choices a thumb can find without looking.":
    "一顆實體 STILL/CINE 撥桿、一顆專屬 Color 按鍵，加上遍布機身的 1/4-20 螺牙接口，用拇指不必看就找得到的選項取代了選單深度。",
  "A carry handle houses every input and becomes the entire control surface, while a rear storage hatch lights itself the moment it opens.":
    "提把容納了全部輸入元件，本身就是整個控制面；後方的置物艙則在打開的那一刻自己亮起來。",
  "Five new AMR vehicle classes join Signode's lineup, sharing one navigation, docking and blue-LED status language across a shared-aisle warehouse floor.":
    "五款新的 AMR 車型加入 Signode 產品線，在共用走道的倉儲場域裡共享同一套導航、停靠與藍色 LED 狀態語言。",
  "FAW-Volkswagen's first battery-electric sedan pairs a \"Bamboo Aesthetics\" surface language with one shared body shell and a dual-screen cockpit, split across three trims.":
    "一汽-福斯第一款純電轎車，把「竹韻美學」的表面語言與單一共用車體、雙螢幕座艙結合，再分成三個車型級距。",
  "A Hasselblad-engineered triple-200MP camera system and a factory-built Tilta Khronos creator rig turn the phone into two different products depending on which accessories are attached.":
    "哈蘇共同調校的三顆 200MP 相機系統，加上原廠打造的 Tilta Khronos 創作者外掛架，讓這支手機依裝上哪些配件而變成兩種不同的產品。",
  "A 44.7g touchscreen watch and an 8.2g single-button ring replace goggles and a joystick, wagering that gesture control plus GNSS tracking can out-simplify a traditional controller.":
    "44.7 克的觸控手錶與 8.2 克的單鍵戒指取代了護目鏡與搖桿，賭的是手勢控制加上 GNSS 追蹤，可以比傳統遙控器更簡單。",
  "A 100 g facial display shifts compute to a tethered puck, turning VR into a wearable cinema and workspace.":
    "100 克的臉部顯示器把運算移到一顆有線的運算塊上，讓 VR 變成可穿戴的影院與工作空間。",
  "A bespoke carbon body builds a new identity around an established operating architecture.":
    "全訂製碳纖維車體，在既有的運作架構上建立一個新的身分識別。",
  "A camera family distributes imaging across walls, rooms and power conditions without losing a common visual vocabulary.":
    "一整個相機家族把影像擷取分散到牆面、房間與不同供電條件上，卻沒有失去共通的視覺語彙。",
  "A compact electric concept where integrated assemblies and dimensional lighting let fewer visible pieces create a stronger identity.":
    "一款緊湊的電動概念車，用整合式組件與具立體感的燈光，讓更少的可見零件造出更強的身分識別。",
  "A distributed meeting system treats the room as a reconfigurable network of capture, audio and compute modules.":
    "一套分散式會議系統，把會議空間視為可重組的擷取、音訊與運算模組網路。",
  "A driver-centred manifesto that connects sculptural mass, moving instruments and tactile controls.":
    "一份以駕駛者為中心的宣言，把雕塑般的量體、會動的儀表與觸覺控制件連成一氣。",
  "A driver-first \"1+\" cabin turns hybrid power, active geometry and tactile control into one tightly integrated architecture.":
    "以駕駛者為先的「1+」座艙，把混合動力、主動幾何與觸覺控制整併成一套緊密的架構。",
  "A family-mobility laboratory that changes configuration as the task changes, combining passenger space with an open load bed.":
    "一間家庭移動實驗室，隨任務改變而改變配置，把乘坐空間與開放式載貨平台結合在一起。",
  "A field workstation connects gloved interaction, detachable postures and replaceable modules without hiding the operator's next action.":
    "一台現場工作站，把戴手套操作、可分離的使用姿態與可更換模組串起來，同時不把操作者的下一步藏起來。",
  "A fixed-wing robot combines long-range speed with docked launch and an operator interface designed around exceptions.":
    "一台固定翼機器人，結合長程速度、從停機艙起飛，以及以例外狀況為設計核心的操作者介面。",
  "A flush-front reader separates a calm default device from optional tactile controls for different ways of holding it.":
    "一台正面齊平的閱讀器，把安靜的預設裝置與選配的觸覺控制件分開，對應不同的握持方式。",
  "A foldable phone becomes useful when display, posture and feedback behave as one continuous task system.":
    "摺疊手機要真的好用，得讓顯示、姿態與回饋表現成一套連續的任務系統。",
  "A low-profile meeting bar turns camera, audio, sensing and service access into one managed room component.":
    "一條扁平低矮的會議棒，把相機、音訊、感測與維修通道整合成單一個受管理的空間元件。",
  "A new power-unit era makes functional boundaries, operating states and identity work as one system.":
    "新的動力單元世代，讓功能邊界、運作狀態與身分識別一起作為同一套系統運作。",
  "A premium aluminum tablet family makes reading, touch, pen and voice feel like deliberate modes of one portable work surface.":
    "高階鋁合金平板家族，讓閱讀、觸控、手寫筆與語音都像是同一塊可攜工作面上刻意設計的模式。",
  "A robot body, dexterous hand and haptic glove form one contact loop: sense the object, communicate its state and learn the operator's adjustment.":
    "機器人本體、靈巧手與觸覺手套構成一個接觸迴圈：感測物件、傳達它的狀態，並學會操作者的修正。",
  "A single footwear family differentiates grip, closure and impact protection around the rider's actual contact with the pedal and terrain.":
    "單一鞋款家族，依騎乘者與踏板、地形的實際接觸，分化出不同的抓地、扣合與衝擊防護。",
  "A slimmer capture-enabled glasses family places fit, tactile control and visible sensing state at the center of everyday wear.":
    "更纖薄、具備擷取功能的眼鏡家族，把配戴貼合、觸覺控制與可見的感測狀態放在日常配戴的核心。",
  "A small electric concept that turns affordability into a design discipline, with separate impact pieces and portable everyday objects.":
    "一款小型電動概念車，把可負擔性變成一種設計紀律，配上獨立的抗撞件與可攜帶的日常物件。",
  "A targeted refresh connects optical performance to physical fit: the virtual screen becomes useful only when the product stays aligned, comfortable and understandable throughout a session.":
    "一次針對性的改版，把光學效能和實體配戴貼合連在一起：虛擬螢幕只有在整段使用過程中都保持對位、舒適且可理解時，才真的有用。",
  "A thin, sealed tablet becomes a configurable work surface through a pen, keyboard and desktop-style interface.":
    "一塊薄型密封平板，透過手寫筆、鍵盤與桌機式介面，變成可組態的工作面。",
  "A work headset can remain comfortable and repairable while moving between calls, focused work and everyday listening.":
    "一副工作用耳機，在通話、專注工作與日常聆聽之間切換時，仍然可以保持舒適且可維修。",
  "Alpine reinterprets the A310 through geometry, layered surfaces and an architectural centerline, carrying recognizable identity into new construction possibilities.":
    "Alpine 以幾何、層疊表面與建築式中軸線重新詮釋 A310，把可辨識的身分識別帶進新的結構可能性裡。",
  "An electric GT manifesto connecting a glass-bubble silhouette with selective information and tactile controls.":
    "一份電動 GT 宣言，把玻璃泡泡般的輪廓、經過篩選的資訊與觸覺控制件連在一起。",
  "An electric estate study that links cargo-friendly volume with a low aerodynamic silhouette and moving rear aero elements.":
    "一項電動旅行車研究，把利於載貨的量體、低風阻輪廓與會動的尾部空力元件串在一起。",
  "Dual-sided solar charging turns a rugged outdoor watch into a study of power recovery.":
    "雙面太陽能充電，讓一支強固型戶外手錶成為一則關於電力回復的研究。",
  "E-Space begins with the people and activities inside the cabin: reconfigurable seats, separated display and input zones, and a visually light enclosure make spatial organization the central proposition.":
    "E-Space 從座艙裡的人與活動出發：可重組座椅、分離的顯示與輸入區，以及視覺上輕盈的圍閉，讓空間組織成為核心命題。",
  "ECM-W5 treats microphones, receiver, charging case and camera connection as one capture workflow, with automatic readiness and an intelligible recovery path when wireless recording becomes uncertain.":
    "ECM-W5 把麥克風、接收器、充電盒與相機連接當成同一條擷取流程，具備自動就緒，並在無線錄音變得不確定時提供一條看得懂的復原路徑。",
  "Ferrari's first fully electric car turns the four-door, five-seat brief into a tactile grand tourer.":
    "Ferrari 第一輛純電車，把四門五座的任務書變成一台有觸感的 GT。",
  "HomeView brings a shared screen, spatial placement and personal context into one product, exposing the right information to only the right person.":
    "HomeView 把共用螢幕、空間擺放與個人脈絡整進同一個產品，只把對的資訊露出給對的人。",
  "Juniper refines a familiar crossover through light, comfort and software.":
    "Juniper 透過燈光、舒適性與軟體，細修一台大家已經熟悉的跨界車。",
  "Removing the camera makes the frame lighter and socially different, while leaving audio, microphones, battery and serviceable fit as the true design problem.":
    "拿掉相機讓鏡架更輕，社交意義也不同了，而音訊、麥克風、電池與可維修的配戴貼合，才是真正的設計問題。",
  "The breakthrough is not a new robot body but the permission to cross a controlled threshold.":
    "突破不在於新的機器人本體，而在於通過受控門禁的那份許可。",
  "The redesigned Roadster combines a restrained outer envelope with increasingly complex active systems, explaining capability, operating state and configuration boundaries as modes multiply.":
    "重新設計的 Roadster 把克制的外部輪廓與日益複雜的主動系統結合，在模式愈來愈多時解釋能力、運作狀態與組態邊界。"
};
