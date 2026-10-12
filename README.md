# Dry lab writing coach

The same thing as the [Engagement writing coach](https://github.com/Timmy97-TW/releaf-writing-coach),
built for the dry lab. ReLEAF's Math Model, Protein Design and Digital Twin pages are
served exactly as they stand on the wiki, with writing notes in the margin, and each note
sits beside a passage from a team that won the matching iGEM special prize. Audience: the
dry lab students, who rewrite their own pages from it.

Site: https://timmy97-tw.github.io/releaf-drylab-coach/ (GitHub Pages from `main` `/docs`).

## Keeping the pages in sync with the wiki

```
python3 tools/sync.py           # pull the wiki, re-extract every page's text, check every note
python3 tools/sync.py --build   # the same, then rebuild docs/ if no note broke
git add -A && git commit && git push
```

`tools/sync.py` keeps a shallow clone of the wiki in `.wiki-src/` (gitignored), renders each
page with headless Chrome (run it with the Bash sandbox off), and writes
`releaf-text/<slug>.md` (the page body) and `releaf-text/<slug>.abstract.md` (the abstract
sheet under the banner). A nested slug such as `protein-design/methodology` is flattened to
`protein-design__methodology` for these files and for its annotations. A note matches only
inside its own zone: `"zone": "abstract"` notes against the abstract file, all others against
the body. Every anchor must occur exactly once in its zone; the check prints any that do not
and writes `annotations/_check.json`. A broken note means the students changed that sentence:
re-run that page's review for those notes (prompts in `annotations/prompts/`) before building,
so nothing is published pointing at text that is gone.

## Pages and prizes

| Page | Prize its notes are written against |
|---|---|
| Math Model | Best Model |
| Protein Design, and its Methodology, Sprints and Molecular Dynamics subpages | Best Model |
| Digital Twin | Best Software, Best Measurement |

Two prizes carry the Digital Twin page because its software claim and its measurement claim
are judged separately: the software ballot asks about standards, validation, reuse,
integration, usability and documentation, and the measurement ballot asks whether another
team could reproduce the measurements and whether they were calibrated.

## Cases

Winners of the 2023, 2024 and 2025 special prizes, undergraduate (UG) and overgraduate (OG),
taken from `competition.igem.org/results/<year>?tab=special-prizes` and recorded in
`research/winners.json`. Best Software was called Best Software Tool in those years. Where a
collegiate section had fewer than ten teams the sections were combined, so some years have
one winner rather than two.

## Layout

- `sources/text/` rendered text of each winning page, one file per page, named
  `<prize>-<year>-<track>-<team>.md`. Headings are `#`, list items `-`, figure captions
  `[CAPTION]`, images `[IMG] alt`, folds `[FOLD]`.
- `sources/text/judging-special-prizes.md` iGEM's 2026 prize descriptions and ballot questions.
- `sources/pages.txt` file name to URL.
- `research/<prize>.md` casebook per prize; `research/<prize>.excerpts.json` the excerpt bank
  the notes draw from; `research/winners.json` the prize table the landing page builds from.
- `tools/render.sh` headless-Chrome renderer; `tools/totext.py` DOM to text (third argument
  `body` or `abstract` picks a zone).
- `tools/sync.py` wiki to text to note check; `tools/build_site.py` to `docs/`;
  `site-src/coach/` the coach layer (coach.js, coach.css, landing.css).

## Licence

All iGEM wiki content is CC BY 4.0. Every excerpt carries team, year, track and source URL,
and the page shows that credit next to each one.

## Excerpt schema (`research/*.excerpts.json`)

```json
{
  "id": "model-2025-UG-team-01",
  "prize": "model | software | measurement",
  "team": "TeamName", "year": 2025, "track": "UG",
  "url": "https://2025.igem.wiki/teamname/model",
  "section": "the heading the passage sits under, verbatim",
  "function": "page-opening | section-intro | assumption | method | evidence-with-numbers | validation | limitation | uncertainty | reuse | loop-closing | transition | conclusion | definition | audience-framing | other",
  "text": "verbatim passage, copied exactly from sources/text",
  "why_it_works": "one or two plain sentences naming the move",
  "teaches": ["clarity", "structure", "evidence", "..."]
}
```

## Annotation schema (`annotations/<page>.json`)

```json
{
  "page": "model",
  "summary": {
    "verdict": "2 or 3 sentences: where the page stands against the winners",
    "strengths": ["3 to 5 specific things the students did well"],
    "priorities": ["3 to 5 ordered fixes, biggest payoff first"],
    "ballot": [{"question": "verbatim ballot question", "status": "strong | partial | missing", "where": "the section that answers it, or empty", "note": "one sentence"}],
    "skeleton": {"releaf": ["our top-level sections in order"], "winners": ["the shared winner skeleton"], "gap": "one or two sentences"},
    "extras": ["smaller fixes that cannot be anchored, each quoting the wrong text and the fix"]
  },
  "notes": [{
    "id": "mm-001",
    "zone": "optional: \"abstract\" for notes on the sheet under the banner",
    "type": "praise | restructure | cut | mistake | clarify | suggest",
    "anchor": "exact text from ONE line of releaf-text/<page>.md, 4 to 30 words, unique in that file",
    "title": "8 plain words or fewer",
    "body": "1 to 4 sentences to the students, plain English",
    "after": "optional: one way to write it (never invents facts; uses [placeholders])",
    "excerpts": ["0 to 2 excerpt ids from research/*.excerpts.json"],
    "excerpt_note": "optional: what to look at in the winner passage",
    "ballot": "optional: the ballot question this note serves"
  }]
}
```

Types: **praise** good writing, named precisely; **restructure** sentence or paragraph order;
**cut** words or passages the page does not need; **mistake** errors, typos, number or name
mismatches, contradictions with another page; **clarify** unclear writing and knowledge the
reader is assumed to have; **suggest** missing content the criteria ask for.
