# Design Trend Dashboard — V4

A static site. No build step, no dependencies, no package manager. Open `index.html` and it runs.

Covers **2026-09-21 – 2026-11-01** (W39–W44), 46 reports.

## Running it locally

Opening `index.html` straight off disk works for the home page, but the report viewer
loads reports into an iframe, which some browsers block over `file://`. Serve the folder
over HTTP instead — any static server will do:

```
python -m http.server 8841
```

Then open <http://localhost:8841>.

## Layout

```
index.html                 home — the 01→04 argument
weeks-overview.html        all weekly releases
reports-overview.html      every report, searchable
domains-overview.html      the eight domains
launch-events-overview.html
report-viewer.html         iframe wrapper: ?src=<path>&title=<name>&back=<page>
waiting-list.html
data.js                    ← single source of truth for all content
i18n.js                    post-render DOM translation engine
i18n.zh.js                 Traditional Chinese dictionary + number rules
domains/                   one page per domain + _shared.css / _shared.js
weeks/<W##>/               the shipped weekly packages, filenames unchanged
single-reports/, launch-events/
```

## Editing content

Everything the site shows comes out of `data.js`. Nothing is hard-coded into the HTML.

| Key | What it drives |
| --- | --- |
| `PERIOD_LABEL` | the date range in the header |
| `PERIOD_NARRATIVE` | the period thesis and the tension bar |
| `TOP_SIGNALS` | section 01 (home shows the top 3 by evidence count) |
| `AESTHETIC_TRENDS` | section 02 |
| `ZEBRA_PRIORITIES` / `DROPPED_PRIORITIES` | section 03, including what was cut and why |
| `DOMAIN_TRENDS` | section 04's keyword cloud and timeline, and each domain page |
| `DOMAINS` | domain cards; `.application` renders as that page's Key Takeaway |
| `WEEKS` / `SINGLE_REPORTS` / `LAUNCH_EVENTS` | the report pool (`ALL_REPORTS` is derived) |

Every `evidence` string must match an `ALL_REPORTS` title exactly — an unmatched title
silently drops the chip rather than erroring.

`data.js` carries its own editorial rules as comments: the newness test, the Zebra baseline
gate, evidence-independence notes, and why specific entries were cut. Read them before
adding an entry.

## Bilingual layer

The EN / 中 toggle translates the rendered DOM after the page builds, so no markup is
duplicated. `i18n.zh.js` holds exact-string entries plus regex rules for generated strings
that carry numbers.

New content stays English until its strings are added to the dictionary — that is the
designed fallback, not a bug. Two console helpers:

- `__i18nExtract()` — every translatable string on the current page
- `__i18nMissing()` — the ones with no dictionary entry yet

On a correctly translated page `__i18nMissing()` returns only product names, brand names,
week codes, dates and ZIP filenames, which stay English on purpose.

## .nojekyll

GitHub Pages runs Jekyll by default, and Jekyll skips files and folders whose names start
with an underscore. This site has `domains/_shared.css` and `domains/_shared.js`. The empty
`.nojekyll` file at the repository root turns that off. **Do not delete it** — without it
all eight domain pages lose their styling and behaviour.

If this folder is ever nested inside a larger repository, `.nojekyll` has to move to that
repository's root to have any effect.
