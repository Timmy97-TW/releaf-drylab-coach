#!/usr/bin/env python3
"""Build the writing-coach site into docs/.

    python3 tools/build_site.py [wiki checkout]     (default: .wiki-src, kept by tools/sync.py)

Copies every page listed in pages.json, and the files it uses, from the wiki
unchanged, then adds the coach layer: coach.css in <head>, and before </body> a
data file (annotations + the winner excerpts they cite) and coach.js. A page
without annotations/<page>.json is left out. Writes docs/index.html.

Which files a page uses is read from the page itself: the stylesheets and
scripts it links, and every assets/img/<folder>/ named in the page or in those
files (the whole folder is copied, so srcset sizes and script-built paths come
along). A new page needs only a pages.json entry and its annotations.
"""
import html, json, re, shutil, subprocess, sys, time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

CFG = json.loads((ROOT / "pages.json").read_text())
PAGES = [(p["slug"], p["title"], p["prize"], p.get("short", p["title"])) for p in CFG["pages"]]
SKIP_IN_PAGE = {p["slug"]: p.get("skip", []) for p in CFG["pages"]}  # big folders left on the live wiki
LIVE = CFG["live_wiki"]
PRIZE_SHORT = {"model": "Best Model", "software": "Best Software", "measurement": "Best Measurement"}


def flat(slug):
    """One file per page, so a nested slug does not need nested folders."""
    return slug.replace("/", "__")


def up(slug):
    """The ../ prefix a page at this depth needs to reach the site root."""
    return "../" * (slug.count("/") + 1)
VER = time.strftime("%m%d%H%M%S")
TYPES = [("praise", "Praise"), ("restructure", "Restructure"), ("cut", "Cut"),
         ("clarify", "Clarify"), ("mistake", "Mistake"), ("suggest", "Add")]


def excerpts():
    bank = {}
    for f in sorted((ROOT / "research").glob("*.excerpts.json")):
        for x in json.loads(f.read_text()):
            x["prizeName"] = PRIZE_SHORT.get(x.get("prize"), x.get("prize", ""))
            bank[x["id"]] = x
    return bank


def used_files(src, slug):
    """What a page needs from assets/img: the files its HTML names (srcset
    sizes included), and whole folders named in its stylesheets and scripts,
    which may build file names at run time."""
    page = (src / slug / "index.html").read_text()
    linked = set(re.findall(r'(?:href|src)="\.\./(assets/(?:css|js|data)/[^"?#]+)', page))
    code = [(src / f).read_text(errors="ignore") for f in linked if (src / f).is_file()]
    code += [f.read_text(errors="ignore") for f in (src / slug).glob("*") if f.suffix in (".css", ".js") and f.is_file()]
    files = set(re.findall(r"assets/img/([A-Za-z0-9_-]+/[^\"'()\s,]+)", page))
    dirs = set(re.findall(r"assets/img/([A-Za-z0-9_-]+)/", " ".join(code)))
    return files, dirs


def main(src):
    src = Path(src)
    bank = excerpts()
    if DOCS.exists():
        shutil.rmtree(DOCS)
    (DOCS / "assets").mkdir(parents=True)
    for d in ["css", "js", "data", "fonts", "vendor"]:
        shutil.copytree(src / "assets" / d, DOCS / "assets" / d)
    (DOCS / "assets/img").mkdir()
    for f in (src / "assets/img").iterdir():
        if f.is_file():
            shutil.copy2(f, DOCS / "assets/img" / f.name)
    files, dirs = set(), set()
    for p in PAGES:
        if (ROOT / "annotations" / f"{flat(p[0])}.json").exists():
            f, d = used_files(src, p[0])
            files |= f; dirs |= d
    for d in sorted(dirs):
        if (src / "assets/img" / d).is_dir():
            shutil.copytree(src / "assets/img" / d, DOCS / "assets/img" / d)
    for f in sorted(files):
        s_, t_ = src / "assets/img" / f, DOCS / "assets/img" / f
        if s_.is_file() and not t_.exists():
            t_.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(s_, t_)
    shutil.copytree(ROOT / "site-src/coach", DOCS / "coach")
    (DOCS / "coach/data").mkdir(exist_ok=True)

    mock = [p[0] for p in PAGES if (ROOT / "annotations" / f"{flat(p[0])}.json").exists()]
    wiki = ""
    if (src / ".git").exists():
        wiki = subprocess.run(["git", "log", "-1", "--format=%h, %cs"], cwd=src, capture_output=True, text=True).stdout.strip()
    built = []
    for slug, title, prize, short in PAGES:
        ann = ROOT / "annotations" / f"{flat(slug)}.json"
        if not ann.exists():
            continue
        a = json.loads(ann.read_text())
        skip = SKIP_IN_PAGE.get(slug, [])
        shutil.copytree(src / slug, DOCS / slug, dirs_exist_ok=True,
                        ignore=lambda d, names: [n for n in names if n in skip])
        if "/" in slug:   # a subpage needs its parent's stylesheets even when the parent is not built
            par = slug.split("/")[0]
            (DOCS / par).mkdir(parents=True, exist_ok=True)
            for f in (src / par).iterdir():
                if f.is_file() and f.name != "index.html" and not (DOCS / par / f.name).exists():
                    shutil.copy2(f, DOCS / par / f.name)
        used = {i for n in a["notes"] for i in n.get("excerpts", [])}
        data = {"page": slug, "title": title, "prizeName": prize, "summary": a.get("summary"),
                "live": LIVE, "mockPages": mock, "wiki": wiki, "root": up(slug),
                "notes": a["notes"], "excerpts": {i: bank[i] for i in sorted(used) if i in bank}}
        missing = sorted(used - set(bank))
        if missing:
            print(f"  {slug}: excerpt ids not in any bank: {missing}")
        (DOCS / "coach/data" / f"{flat(slug)}.js").write_text(
            "window.COACH = " + json.dumps(data, ensure_ascii=False) + ";\n")
        p = DOCS / slug / "index.html"
        h = p.read_text()
        u = up(slug)
        h = h.replace("</head>", f'  <link rel="stylesheet" href="{u}coach/coach.css?v={VER}" />\n</head>', 1)
        h = h.replace("</body>", f'  <script src="{u}coach/data/{flat(slug)}.js?v={VER}"></script>\n'
                                 f'  <script src="{u}coach/coach.js?v={VER}"></script>\n</body>', 1)
        for d in skip:
            h = h.replace(f'href="{d}/', f'href="{LIVE}{slug}/{d}/')
        p.write_text(h)
        counts = {t: sum(1 for n in a["notes"] if n["type"] == t) for t, _ in TYPES}
        built.append((slug, title, prize, short, a, counts))
        print(f"  {slug}: {len(a['notes'])} notes, {len(data['excerpts'])} winner passages")

    (DOCS / "index.html").write_text(landing(built, bank, wiki))
    (DOCS / ".nojekyll").write_text("")
    print("built", len(built), "pages into", DOCS)


def esc(s):
    return html.escape(s or "", quote=True)


TRACK = {"UG": "Undergrad", "OG": "Overgrad"}


def winners_html(W, page_titles):
    """The prize-by-year table: every cell links to the page that won."""
    cols = [(y, t) for y in (2025, 2024, 2023) for t in ("UG", "OG")]
    head = "".join(f'<th scope="col"><a href="{W["results"].format(year=y)}">{y}</a><span>{TRACK[t]}</span></th>' for y, t in cols)
    rows = []
    for pr in W["prizes"]:
        cells = []
        for y, t in cols:
            ws = [w for w in pr["winners"] if w["year"] == y and w["track"] == t]
            links = "".join(f'<a href="{w["url"]}">{esc(w["team"])}</a>' for w in ws)
            cells.append(f'<td>{links}{"<em>tie</em>" if len(ws) > 1 else ""}</td>')
        coach = "".join('<a class="lp-win__page" href="%s/">Our %s page</a>' % (g, esc(page_titles[g]))
                        for g in pr.get("link_pages", pr.get("pages", [pr.get("page")])) if g in page_titles)
        rows.append(f'<tr><th scope="row">{esc(pr["name"])}{coach}</th>{"".join(cells)}</tr>')
    rows = "".join(rows)
    prec_rows = []
    for x in W.get("precedents", []):
        links = "".join('<a href="%s">%s</a>' % (u, esc(n)) for n, u in x["links"])
        used = " · ".join(esc(page_titles.get(f, f)) for f in x["for"])
        prec_rows.append('<tr><th scope="row">%s %s</th><td>%s</td><td>%s</td><td>%s</td></tr>'
                         % (esc(x["team"]), x["year"], used, links, esc(x["standing"])))
    prec_html = ""
    if prec_rows:
        prec_html = ('<h3>Pages with no prize of their own</h3>'
                     '<p>Where no special prize covers a page, its notes quote the closest work we could find.</p>'
                     '<div class="lp-win__scroll"><table class="lp-win__table lp-win__table--prec">'
                     '<thead><tr><th scope="col">Team</th><th scope="col">Used for</th>'
                     '<th scope="col">Page</th><th scope="col">Standing</th></tr></thead>'
                     '<tbody>' + "".join(prec_rows) + '</tbody></table></div>')
    return f"""
    <section class="lp-win" id="winners">
      <h2>The teams we compare against</h2>
      <p>Undergraduate and overgraduate winners of the three iGEM special prizes our dry lab pages are written for, 2023 to 2025. Each name opens the page that won it; each year opens iGEM's results for that year. A blank cell means the two collegiate sections were combined that year, or that no winner could be verified from the results page.</p>
      <div class="lp-win__scroll"><table class="lp-win__table">
        <thead><tr><th scope="col">Prize</th>{head}</tr></thead>
        <tbody>{rows}</tbody>
      </table></div>{prec_html}
      <p class="lp-win__lic">All iGEM wiki text is licensed CC BY 4.0. Every quoted passage in the notes links to its source page.</p>
    </section>"""


def landing(built, bank, wiki=""):
    W = json.loads((ROOT / "research/winners.json").read_text())
    titles = {b[0]: b[1] for b in built}
    compared = {}
    for pr in W["prizes"]:
        for g in pr.get("pages", [pr.get("page")]):
            for w in pr["winners"]:                      # a team can win two of our prizes in one year
                name = f'{w["team"]} {w["year"]}'
                if name not in compared.setdefault(g, []):
                    compared[g].append(name)
    for x in W["precedents"]:
        for f in x["for"]:
            compared.setdefault(f, []).append(f'{x["team"]} {x["year"]}')
    cards = []
    for slug, title, prize, short, a, counts in built:
        chips = "".join(f'<li class="cx-{t}">{name} {counts[t]}</li>' for t, name in TYPES if counts[t])
        pri = a.get("summary", {}).get("priorities", [])[:1]
        cards.append(f'''
      <a class="lp-card" href="{slug}/">
        <span class="lp-card__prize">{esc(prize)}</span>
        <h3>{esc(title)}</h3>
        <p>{esc(a.get("summary", {}).get("verdict", ""))}</p>
        {f'<p class="lp-card__first"><b>Fix first</b>{esc(pri[0])}</p>' if pri else ""}
        <p class="lp-card__vs"><b>Compared with</b>{esc(", ".join(compared.get(slug, [])))}</p>
        <ul class="cx-sum__counts">{chips}</ul>
      </a>''')
    names = {"model": ["Math Model", "Model page"], "software": ["Digital Twin", "Software page"],
             "protein-design": ["Protein Design"], "protein-design/methodology": ["Methodology"],
             "protein-design/sprints": ["Sprints", "Sprints and Results"],
             "protein-design/molecular-dynamics": ["Molecular Dynamics", "MD page"]}
    wiki_pages = ["Results", "Measurement", "Hardware", "Experiments", "Engineering", "Biomanufacturing",
                  "Parts", "Geospatial Analysis", "Safety", "Plants", "Description"]
    cross = []
    for slug, title, prize, short, a, counts in built:
        other = re.compile(r"\b(" + "|".join(re.escape(x) for k, v in names.items() if k != slug for x in v) +
                           "|" + "|".join(wiki_pages) + r")\b")
        for n in a["notes"]:
            if n["type"] == "mistake" and other.search(n["body"]):
                cross.append(f'<li><a href="{slug}/#cx-{n["id"]}"><span>{esc(title)}</span><b>{esc(n["title"])}</b>{esc(n["body"])}</a></li>')
    cross_html = (f'<section class="lp-cross"><h2>Facts that disagree between pages</h2>'
                  f'<p>A judge who reads two pages will notice these. Agree on one version as a team, then fix every page that carries the other.</p>'
                  f'<ul>{"".join(cross)}</ul></section>') if cross else ""
    waiting = [p for p in PAGES if p[0] not in {b[0] for b in built}]
    wait_html = "".join(f'<li>{esc(p[1])}</li>' for p in waiting)
    legend = "".join(f'<li class="cx-{t}"><b>{name}</b>{d}</li>' for (t, name), d in zip(TYPES, [
        "writing that already works, and why a judge rewards it",
        "the same facts in a clearer order",
        "words the page does not need",
        "jargon, missing context, or knowledge the reader is assumed to have",
        "errors, and facts that disagree with another page",
        "what the judges' ballot asks for that the page does not yet give"]))
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Dry Lab Writing Coach | ReLEAF</title>
  <link rel="icon" href="assets/img/logo.png" />
  <link rel="stylesheet" href="assets/css/tokens.css" />
  <link rel="stylesheet" href="coach/coach.css?v={VER}" />
  <link rel="stylesheet" href="coach/landing.css?v={VER}" />
</head>
<body class="lp">
  <header class="lp-head">
    <img src="assets/img/logo.png" alt="ReLeaf logo" width="44" height="44" />
    <p class="lp-eyebrow">ReLeaf · GEMS Taiwan · iGEM 2026</p>
    <h1>Dry lab writing coach</h1>
    <p class="lp-lede">Our Math Model, Protein Design and Digital Twin pages as they stand on the wiki, with notes in the margin. Each note sits beside a passage from a team that won the matching iGEM special prize in 2023, 2024 or 2025, so you can see how they wrote the same part. Open a page, read down the margin, and fix your own words in the wiki.</p>
  </header>
  <main class="lp-main">
    <section class="lp-grid">{"".join(cards)}
    </section>
    {winners_html(W, titles)}
    {f'<section class="lp-wait"><h2>Still in review</h2><ul>{wait_html}</ul></section>' if waiting else ''}
    {cross_html}
    <section class="lp-legend">
      <h2>The six kinds of note</h2>
      <ul>{legend}</ul>
    </section>
    {f'<p class="lp-src">Pages as they stood on the ReLeaf wiki at commit {esc(wiki)}.</p>' if wiki else ''}
  </main>
</body>
</html>
'''


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ROOT / ".wiki-src")
