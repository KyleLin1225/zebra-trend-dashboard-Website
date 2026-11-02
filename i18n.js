/* ============================================================================
   i18n.js — EN / 繁體中文 language layer for the Trend Dashboard.

   This file is the ENGINE ONLY. The words live in i18n.zh.js.
   You should never need to edit this file to add a translation.

   WHY IT WORKS THIS WAY
   ---------------------
   The dashboard is rendered from data.js by inline scripts on every page.
   Forking that into an English and a Chinese build would mean maintaining two
   copies of every report, every signal and every page. Instead this runs after
   the page has rendered, walks the finished DOM, and swaps any string it
   recognises — keyed on the exact English source string.

   The consequence is deliberate: a string with no entry stays in English.
   A translation gap shows up as untranslated text, never as a missing block,
   and never as something invented to fill the hole.

   ADDING TRANSLATIONS FOR A NEW PERIOD
   ------------------------------------
   1. Open the page and switch the toggle to 中.
   2. Run  __i18nExtract()  in the browser console.
      It lists every string currently falling through untranslated, already
      JSON-quoted and ready to paste.
   3. Paste the ones worth translating into the dictionary in i18n.zh.js.

   Strings that SHOULD stay English — product names, brand names, week codes,
   dates, bare numbers — will show up in that list too. Ignore them; leaving
   them out is the correct outcome, not an omission.
   ============================================================================ */
(function () {
  "use strict";

  var STORE_KEY = "trendDashboardLang";

  /* Tags whose text stays part of the PARENT's lookup key, so a sentence with
     inline emphasis is still translated as one sentence. Note that SPAN is not
     here on purpose: the dashboard uses spans as structural labels, so a span
     is always descended into and translated on its own. */
  var KEEP = { B: 1, I: 1, EM: 1, STRONG: 1, BR: 1, CODE: 1, SUP: 1, SUB: 1, U: 1, SMALL: 1, MARK: 1 };
  var SKIP_TAG = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEXTAREA: 1, SVG: 1, CANVAS: 1, IFRAME: 1 };
  var ATTRS = ["placeholder", "title", "aria-label"];

  var ORIG = new WeakMap();          // Text node -> original English string
  var missing = Object.create(null); // strings seen with no translation
  var lang = "en";
  var mo = null;
  var pending = 0;

  function norm(s) { return String(s).replace(/\s+/g, " ").trim(); }

  function dict() { return window.I18N_ZH || {}; }
  function rules() { return window.I18N_ZH_RULES || []; }

  /* Look a string up: exact entry first, then the pattern rules (which handle
     generated strings like "W39–W43 · 4 of 5 weeks" without needing one entry
     per combination). Returns null when nothing matches. */
  function lookup(s) {
    if (!s) return null;
    var d = dict()[s];
    if (d != null) return d;
    var R = rules();
    for (var i = 0; i < R.length; i++) {
      var m = s.match(R[i][0]);
      if (m) {
        var out = R[i][1](m, tr);
        if (out != null) return out;
      }
    }
    return null;
  }

  function tr(s) { var r = lookup(norm(s)); return r == null ? s : r; }

  /* Worth remembering as a gap? Pure numbers, punctuation and single glyphs
     are noise, so they are not reported by __i18nExtract(). */
  function noteMissing(s) {
    if (!s || s.length < 2) return;
    if (!/[A-Za-z]{2}/.test(s)) return;
    missing[s] = (missing[s] || 0) + 1;
  }

  /* An element is translated as a whole only when every element child is an
     inline-emphasis tag with no children of its own. Otherwise we descend. */
  function qualifies(el) {
    if (!el.childElementCount) return !!norm(el.textContent);
    for (var i = 0; i < el.children.length; i++) {
      var c = el.children[i];
      if (!KEEP[c.tagName] || c.childElementCount) return false;
    }
    return !!norm(el.textContent);
  }

  function translateAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i], store = "data-i18n-en-" + a;
      if (el.hasAttribute(store)) continue;
      var v = el.getAttribute(a);
      if (!v || !norm(v)) continue;
      var out = lookup(norm(v));
      if (out == null) { noteMissing(norm(v)); continue; }
      el.setAttribute(store, v);
      el.setAttribute(a, out);
    }
  }

  function walk(el) {
    if (SKIP_TAG[el.tagName] || el.hasAttribute("data-i18n-skip")) return;
    if (el.hasAttribute("data-i18n-en")) return;  // already swapped wholesale
    translateAttrs(el);

    if (qualifies(el)) {
      // A leaf is keyed on its text, so "&" never has to be written as "&amp;"
      // in the dictionary. Only an element with inline children is keyed on
      // markup, because its emphasis is part of the sentence.
      var key = norm(el.childElementCount ? el.innerHTML : el.textContent);
      var out = lookup(key);
      if (out == null) { noteMissing(key); return; }
      el.setAttribute("data-i18n-en", el.innerHTML);
      el.innerHTML = out;
      return;
    }

    var kids = el.childNodes;
    for (var i = 0; i < kids.length; i++) {
      var n = kids[i];
      if (n.nodeType === 1) walk(n);
      else if (n.nodeType === 3) {
        if (ORIG.has(n)) continue;
        var t = norm(n.nodeValue);
        if (!t) continue;
        var o = lookup(t);
        if (o == null) { noteMissing(t); continue; }
        ORIG.set(n, n.nodeValue);
        n.nodeValue = n.nodeValue.replace(/^(\s*)[\s\S]*?(\s*)$/, "$1" + o.replace(/\$/g, "$$$$") + "$2");
      }
    }
  }

  function restore(root) {
    root.querySelectorAll("[data-i18n-en]").forEach(function (el) {
      el.innerHTML = el.getAttribute("data-i18n-en");
      el.removeAttribute("data-i18n-en");
    });
    ATTRS.forEach(function (a) {
      root.querySelectorAll("[data-i18n-en-" + a + "]").forEach(function (el) {
        el.setAttribute(a, el.getAttribute("data-i18n-en-" + a));
        el.removeAttribute("data-i18n-en-" + a);
      });
    });
    var tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var n;
    while ((n = tw.nextNode())) if (ORIG.has(n)) { n.nodeValue = ORIG.get(n); ORIG.delete(n); }
  }

  /* Disconnect while we rewrite, so our own edits are never fed back to us. */
  function apply() {
    if (mo) mo.disconnect();
    try {
      if (lang === "zh") walk(document.body);
      else restore(document.body);
    } finally {
      if (mo) observe();
    }
  }

  function schedule() {
    if (pending) return;
    pending = setTimeout(function () { pending = 0; apply(); }, 50);
  }

  function observe() {
    mo.observe(document.body, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: ATTRS
    });
  }

  /* ---------- page chrome ---------- */

  var CSS = [
    '.lang-toggle{display:inline-flex;align-items:center;border:1px solid var(--line,#2a3030);border-radius:999px;overflow:hidden;background:transparent;padding:0;cursor:pointer;flex:0 0 auto;font:inherit;line-height:1}',
    '.lang-toggle .lt-opt{padding:6px 11px;font-size:11.5px;font-weight:750;letter-spacing:.06em;color:var(--muted,#abb2af);transition:background .18s,color .18s}',
    '.lang-toggle .lt-opt.on{background:var(--accent,#b9ff43);color:#0b0f0b}',
    '.lang-toggle:hover{border-color:var(--accent,#b9ff43)}',
    '.topbar-inner .lang-toggle{margin-left:auto}',
    '.topbar .wrap .lang-toggle,.topline .lang-toggle,.barWrap .lang-toggle{margin-left:auto}',
    '.barWrap .lang-toggle{margin-left:0}',
    // .topline is a plain block on the domain pages; make it a row so the toggle can sit right.
    '.topline{display:flex;align-items:center;gap:14px}',
    '.lang-toggle.floating{position:fixed;top:14px;right:16px;z-index:999;background:#0b0f0ecc;backdrop-filter:blur(8px)}',
    /* Latin tracking is set tight all over the dashboard; CJK needs it back at 0. */
    'html[lang^="zh"] body,html[lang^="zh"] input,html[lang^="zh"] button,html[lang^="zh"] textarea{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang TC","Noto Sans TC","Microsoft JhengHei","Hiragino Sans TC","Heiti TC",sans-serif}',
    'html[lang^="zh"] h1,html[lang^="zh"] h2,html[lang^="zh"] h3,html[lang^="zh"] .pr-title,html[lang^="zh"] .p-title{letter-spacing:0}',
    'html[lang^="zh"] .kicker,html[lang^="zh"] .section-label,html[lang^="zh"] .sb-label,html[lang^="zh"] .pn-kicker,html[lang^="zh"] .spark-label,html[lang^="zh"] .momentum-badge,html[lang^="zh"] .p-badge{letter-spacing:.04em}',
    'html[lang^="zh"] .lead,html[lang^="zh"] .pr-sub,html[lang^="zh"] .section-sub,html[lang^="zh"] .pn-detail,html[lang^="zh"] .p-rationale,html[lang^="zh"] .detail{line-height:1.78}',
    'html[lang^="zh"] .lang-toggle .lt-opt{letter-spacing:.02em}'
  ].join("");

  function injectCSS() {
    var s = document.createElement("style");
    s.id = "i18nStyle";
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function mountToggle() {
    var btn = document.createElement("button");
    btn.className = "lang-toggle";
    btn.id = "langToggle";
    btn.type = "button";
    btn.setAttribute("data-i18n-skip", "");
    btn.setAttribute("aria-label", "Language / 語言");
    btn.innerHTML = '<span class="lt-opt" data-v="en">EN</span><span class="lt-opt" data-v="zh">中</span>';
    btn.addEventListener("click", function () { setLang(lang === "zh" ? "en" : "zh"); });

    var host = document.querySelector(".topbar-inner")
            || document.querySelector(".topbar .wrap")
            || document.querySelector(".topline")
            || document.querySelector(".barWrap");
    if (host) host.appendChild(btn);
    else { btn.classList.add("floating"); document.body.appendChild(btn); }
    return btn;
  }

  function paintToggle() {
    var opts = document.querySelectorAll("#langToggle .lt-opt");
    for (var i = 0; i < opts.length; i++) opts[i].classList.toggle("on", opts[i].dataset.v === lang);
  }

  /* ---------- public ---------- */

  function setLang(next, quiet) {
    lang = next === "zh" ? "zh" : "en";
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    if (!quiet) { try { localStorage.setItem(STORE_KEY, lang); } catch (e) {} }
    missing = Object.create(null);
    apply();
    // <title> is outside <body>, so it is handled on its own.
    if (lang === "zh") {
      if (!document.documentElement.dataset.i18nTitle) document.documentElement.dataset.i18nTitle = document.title;
      document.title = tr(document.documentElement.dataset.i18nTitle);
    } else if (document.documentElement.dataset.i18nTitle) {
      document.title = document.documentElement.dataset.i18nTitle;
    }
    paintToggle();
    // Anything that measured text before the swap (the keyword cloud packs chips by
    // measured width) needs a chance to re-measure.
    try { document.dispatchEvent(new CustomEvent("i18n:change", { detail: { lang: lang } })); } catch (e) {}
  }

  function start() {
    injectCSS();
    mountToggle();
    mo = new MutationObserver(schedule);

    // ?lang=zh makes a shareable Chinese link, and it sticks for the rest of the
    // visit — otherwise the language would reset on the first click through.
    var urlLang = new URLSearchParams(location.search).get("lang");
    var saved = null;
    try { saved = localStorage.getItem(STORE_KEY); } catch (e) {}
    setLang(urlLang || saved || "en");
    observe();
  }

  /* Console helper — see the header comment. */
  window.__i18nExtract = function () {
    var keys = Object.keys(missing).sort();
    console.log("%c" + keys.length + " untranslated strings on this page", "font-weight:700");
    console.log(keys.map(function (k) { return "  " + JSON.stringify(k) + ": \"\","; }).join("\n"));
    return keys;
  };
  window.__i18nMissing = function () { return Object.keys(missing).sort(); };
  window.setLang = setLang;
  window.getLang = function () { return lang; };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
