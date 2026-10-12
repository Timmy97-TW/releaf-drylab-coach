#!/usr/bin/env python3
"""Bring the coach up to date with the live ReLeaf wiki.

    python3 tools/sync.py            # fetch, extract text, check every note
    python3 tools/sync.py --build    # ... and rebuild docs/ when nothing broke
    python3 tools/sync.py --no-fetch # reuse the copy already in .wiki-src/

1. Updates .wiki-src/ to the wiki's origin/main (a shallow clone, gitignored).
2. Renders every page in pages.json with headless Chrome and writes its text to
   releaf-text/<slug>.md (the page body) and releaf-text/<slug>.abstract.md
   (the abstract sheet under the banner). The abstract repeats sentences from
   the body, so notes are matched against one zone only: a note with
   "zone": "abstract" against the abstract file, every other note against the
   body file.
3. Checks every note's anchor: it must occur exactly once in its zone. Writes
   annotations/_check.json and prints the notes that broke, so the page's
   review can be re-run before anything is published.

Headless Chrome needs the Bash sandbox off (see README).
"""
import json, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
WIKI = ROOT / ".wiki-src"
CFG = json.loads((ROOT / "pages.json").read_text())
TOOLS = ROOT / "tools"


def git(*a, cwd=None):
    return subprocess.run(["git", *a], cwd=cwd, check=True, capture_output=True, text=True).stdout.strip()


def fetch():
    if not (WIKI / ".git").exists():
        git("clone", "--depth", "1", CFG["wiki_repo"], str(WIKI))
    else:
        git("fetch", "--depth", "1", "origin", "main", cwd=WIKI)
        git("reset", "--hard", "origin/main", cwd=WIKI)
    return git("log", "-1", "--format=%h %cs %s", cwd=WIKI)


def flat(slug):
    """One file per page, so a nested slug does not need nested folders."""
    return slug.replace("/", "__")


def extract(slug):
    out = ROOT / "releaf-text"
    out.mkdir(exist_ok=True)
    html = ROOT / ".render" / f"{flat(slug)}.html"
    html.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run([str(TOOLS / "render.sh"), (WIKI / slug / "index.html").as_uri(), str(html)],
                   check=True, capture_output=True)
    for zone, name in (("body", f"{flat(slug)}.md"), ("abstract", f"{flat(slug)}.abstract.md")):
        subprocess.run([sys.executable, "-I", str(TOOLS / "totext.py"), str(html), str(out / name), zone], check=True)


def norm(s):
    return " ".join(s.replace("’", "'").replace("‘", "'").replace("“", '"')
                    .replace("”", '"').replace(" ", " ").split())


def check(slug):
    f = ROOT / "annotations" / f"{flat(slug)}.json"
    if not f.exists():
        return None
    a = json.loads(f.read_text())
    text = {z: norm((ROOT / "releaf-text" / n).read_text()) for z, n in
            (("body", f"{flat(slug)}.md"), ("abstract", f"{flat(slug)}.abstract.md"))}
    bad = []
    for n in a["notes"]:
        z = n.get("zone", "body")
        k = norm(n["anchor"]).lstrip("| ").strip()
        c = text[z].count(k)
        if z == "abstract" and "·" in k:  # spans two parts of an abstract row, which the page does not join with a space
            c = -1
        if c != 1:
            bad.append({"id": n["id"], "zone": z, "found": c, "anchor": n["anchor"]})
    return {"notes": len(a["notes"]), "broken": bad}


def main():
    args = set(sys.argv[1:])
    head = git("log", "-1", "--format=%h %cs %s", cwd=WIKI) if "--no-fetch" in args else fetch()
    print("wiki", head)
    report = {"wiki": head, "pages": {}}
    for p in CFG["pages"]:
        extract(p["slug"])
        r = check(p["slug"])
        report["pages"][p["slug"]] = r
        if r is None:
            print(f"  {p['slug']}: no annotations yet")
        else:
            print(f"  {p['slug']}: {r['notes'] - len(r['broken'])}/{r['notes']} notes still match")
            for b in r["broken"]:
                print(f"     {b['id']} ({b['zone']}, found {b['found']}x): {b['anchor'][:80]}")
    (ROOT / "annotations" / "_check.json").write_text(json.dumps(report, indent=1, ensure_ascii=False))
    broken = sum(len(r["broken"]) for r in report["pages"].values() if r)
    if "--build" in args:
        if broken:
            print(f"not building: {broken} notes no longer match their text")
            sys.exit(1)
        subprocess.run([sys.executable, str(TOOLS / "build_site.py"), str(WIKI)], check=True)


if __name__ == "__main__":
    main()
