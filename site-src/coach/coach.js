/* =============================================================================
   Engagement writing coach: the layer over a ReLeaf page
   -----------------------------------------------------------------------------
   Reads window.COACH (written by tools/build_site.py from annotations/<page>.json
   and the excerpt banks), finds each note's anchor text in the page, wraps it
   in a <mark>, and lays the notes out in the right margin level with their
   anchors. Notes whose anchor sits in a shut chapter or fold are hidden until
   that chapter opens. On narrow screens a note opens as a bottom sheet.
   ========================================================================== */

(function () {
  "use strict";
  var C = window.COACH;
  if (!C) return;

  var TYPES = [
    ["praise", "Praise"], ["restructure", "Restructure"], ["cut", "Cut"],
    ["clarify", "Clarify"], ["mistake", "Mistake"], ["suggest", "Add"]
  ];
  var TYPE_NAME = {}; TYPES.forEach(function (t) { TYPE_NAME[t[0]] = t[1]; });
  var LIVE = C.live;          // pages outside the coach link to the live wiki
  var MOCK = C.mockPages;     // the pages this site carries, from pages.json

  var doc = document, html = doc.documentElement;
  var $ = function (s, r) { return (r || doc).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); };
  function el(tag, cls, txt) {
    var e = doc.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }

  var notes = C.notes.slice();
  var active = null;
  var on = {}; TYPES.forEach(function (t) { on[t[0]] = true; });
  var wide = function () { return window.matchMedia("(min-width: 1180px)").matches; };

  /* ---- 1. find anchors ------------------------------------------------------ */

  function norm(s) {
    return s.replace(/[‘’ʼ]/g, "'").replace(/[“”]/g, '"')
            .replace(/[–—]/g, "-").replace(/ /g, " ");
  }

  // The text of one zone of the page: "abstract" is the sheet under the banner,
  // "body" is everything else. The abstract repeats sentences from the body, so
  // a note is only ever matched inside its own zone.
  function textIndex(zone) {
    var root = doc.body, chars = [], map = [];
    var skip = "SCRIPT,STYLE,NOSCRIPT,SVG,BUTTON,TEXTAREA".split(",");
    var w = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var inAbs = false;
        for (var p = n.parentNode; p && p !== root; p = p.parentNode) {
          if (p.classList && p.classList.contains("abstract")) inAbs = true;
        }
        if ((zone === "abstract") !== inAbs) return NodeFilter.FILTER_REJECT;
        for (p = n.parentNode; p && p !== root; p = p.parentNode) {
          if (skip.indexOf(p.nodeName.toUpperCase()) >= 0) return NodeFilter.FILTER_REJECT;
          if (p.id === "site-nav" || (p.classList && (p.classList.contains("cx-rail") || p.classList.contains("cx-bar") ||
              p.classList.contains("cx-sum") || p.classList.contains("cx-sheet")))) return NodeFilter.FILTER_REJECT;
          if (p.nodeName === "FOOTER" || (p.nodeName === "NAV" && !inAbs)) return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var n, lastSpace = true;
    while ((n = w.nextNode())) {
      var t = n.nodeValue;
      for (var i = 0; i < t.length; i++) {
        var ch = t[i];
        if (/\s/.test(ch)) {
          if (lastSpace) continue;
          ch = " "; lastSpace = true;
        } else lastSpace = false;
        chars.push(ch); map.push([n, i]);
      }
    }
    return { str: norm(chars.join("")), map: map };
  }

  function wrap(idx, start, end, note) {
    var segs = [], i = start;
    while (i < end) {
      var node = idx.map[i][0], s = idx.map[i][1], e = s;
      var j = i;
      while (j < end && idx.map[j][0] === node) { e = idx.map[j][1]; j++; }
      segs.push([node, s, e + 1]);
      i = j;
    }
    var marks = [];
    segs.forEach(function (sg) {
      var node = sg[0], range = doc.createRange();
      range.setStart(node, sg[1]); range.setEnd(node, sg[2]);
      var m = el("mark", "cx-m cx-" + note.type + (note.type === "cut" ? " cx-m--cut" : ""));
      m.dataset.note = note.id;
      try { range.surroundContents(m); marks.push(m); } catch (err) { /* crosses an element edge */ }
    });
    return marks;
  }

  function anchorAll() {
    // Wrap from the end of the page backwards so earlier map offsets stay valid.
    var idxs = { body: textIndex("body"), abstract: textIndex("abstract") }, found = [];
    notes.forEach(function (n) {
      var idx = idxs[n.zone === "abstract" ? "abstract" : "body"];
      var a = norm(n.anchor).replace(/^\s*\|\s*/, "").replace(/\s+/g, " ").trim();
      var at = idx.str.indexOf(a);
      if (at < 0) {
        // a note about a figure may quote its description: mark the image itself
        var img = $$("img[alt]").filter(function (i) { return norm(i.alt).replace(/\s+/g, " ").indexOf(a) >= 0; })[0];
        if (img) {
          img.classList.add("cx-m", "cx-img", "cx-" + n.type);
          img.dataset.note = n.id;
          n.marks = [img];
          if (!img.id) img.id = "cx-" + n.id;
        } else n.missing = true;
        return;
      }
      found.push({ n: n, s: at, e: at + a.length, idx: idx });
    });
    // per zone, wrap from the end backwards so earlier offsets stay valid
    found.sort(function (x, y) { return x.idx === y.idx ? y.s - x.s : (x.idx === idxs.body ? -1 : 1); });
    var last = { body: Infinity, abstract: Infinity };
    found.forEach(function (f) {
      var z = f.idx === idxs.body ? "body" : "abstract";
      if (f.e > last[z]) f.e = last[z];  // overlapping anchors: trim the earlier one
      if (f.e <= f.s) { f.n.missing = true; return; }
      f.n.marks = wrap(f.idx, f.s, f.e, f.n);
      if (!f.n.marks.length) f.n.missing = true;
      else { f.n.marks[0].id = "cx-" + f.n.id; last[z] = f.s; }
    });
    notes = notes.filter(function (n) { return !n.missing; });
    notes.sort(function (x, y) {
      var p = x.marks[0].compareDocumentPosition(y.marks[0]);
      return p & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : p & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
    });
    notes.forEach(function (n, i) { n.no = i + 1; });
    var miss = C.notes.filter(function (n) { return n.missing; });
    if (miss.length && window.console) console.warn("coach: anchors not found", miss.map(function (n) { return n.id; }));
  }

  /* ---- 2. note cards -------------------------------------------------------- */

  function card(n) {
    var c = el("article", "cx-card cx-" + n.type);
    c.dataset.note = n.id;
    var top = el("div", "cx-card__top");
    top.appendChild(el("span", "cx-chip", TYPE_NAME[n.type] || n.type));
    top.appendChild(el("span", "cx-card__no", n.no + " / " + notes.length));
    c.appendChild(top);
    c.appendChild(el("h4", null, n.title));
    c.appendChild(el("p", "cx-card__body", n.body));
    var more = el("div", "cx-card__more");
    if (n.after) {
      var a = el("div", "cx-after");
      a.appendChild(el("b", null, n.type === "cut" ? "Shorter" : "One way to write it"));
      a.appendChild(afterBody(n.after));
      more.appendChild(a);
    }
    var ex = (n.excerpts || []).map(function (id) { return C.excerpts[id]; }).filter(Boolean);
    if (ex.length) {
      var w = el("div", "cx-win");
      w.appendChild(el("span", "cx-win__label", "How winners wrote it"));
      if (n.excerpt_note) w.appendChild(el("p", "cx-win__note", n.excerpt_note));
      ex.forEach(function (x) {
        var q = el("div", "cx-quote"), who = el("div", "cx-quote__who");
        var link = el("a", null, x.team + " " + x.year);
        link.href = x.url; link.target = "_blank"; link.rel = "noopener";
        who.appendChild(link);
        who.appendChild(el("span", "cx-pill", x.track === "OG" ? "Overgrad" : x.track === "UG" ? "Undergrad" : x.track));
        who.appendChild(el("span", "cx-pill", x.prizeName));
        var slip = /^counter-example[:.]/i.test(x.why_it_works || "");
        if (slip) who.appendChild(el("span", "cx-pill cx-pill--slip", "Even winners slip"));
        q.appendChild(who);
        q.appendChild(el("blockquote", null, x.text));
        q.appendChild(el("p", "cx-quote__why", (x.why_it_works || "").replace(/^counter-example[:.]\s*/i, "")));
        w.appendChild(q);
      });
      more.appendChild(w);
    }
    if (n.ballot) more.appendChild(el("p", "cx-ballot-tag", "Ballot: " + n.ballot));
    c.appendChild(more);
    return c;
  }

  // "after" text: plain lines, or a small table written as | a | b | rows
  function afterBody(t) {
    var lines = t.split("\n").filter(function (l) { return l.trim(); });
    if (lines.length > 1 && lines.every(function (l) { return /^\s*\|/.test(l); })) {
      var tb = el("table", "cx-after__table");
      lines.forEach(function (l, i) {
        if (/^\s*\|[\s:|-]+\|\s*$/.test(l)) return;
        var tr = el("tr");
        l.trim().replace(/^\||\|$/g, "").split("|").forEach(function (c) { tr.appendChild(el(i ? "td" : "th", null, c.trim())); });
        tb.appendChild(tr);
      });
      return tb;
    }
    var p = el("p", null, t); p.style.whiteSpace = "pre-line"; return p;
  }

  var rail, sheet, cards = {};

  function buildRail() {
    rail = el("div", "cx-rail");
    notes.forEach(function (n) {
      var c = card(n); cards[n.id] = c; rail.appendChild(c);
      c.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        if (active !== n) select(n, "card");
      });
      c.addEventListener("mouseenter", function () { hot(n, true); });
      c.addEventListener("mouseleave", function () { hot(n, false); });
    });
    doc.body.appendChild(rail);
    sheet = el("div", "cx-sheet");
    doc.body.appendChild(sheet);
  }

  function hot(n, v) { (n.marks || []).forEach(function (m) { m.classList.toggle("is-hot", v); }); }

  /* ---- 3. layout ------------------------------------------------------------ */

  function visible(n) {
    var m = n.marks[0];
    if (!on[n.type]) return false;
    return !!(m.offsetParent || m.getClientRects().length);
  }

  var pending = false;
  function layout() {
    if (pending) return; pending = true;
    setTimeout(function () { pending = false; doLayout(); }, 16);
  }
  function doLayout() {
    html.classList.toggle("cx-wide", wide());
    if (!wide()) return;
    var railTop = rail.getBoundingClientRect().top + window.scrollY;
    var list = [];
    notes.forEach(function (n) {
      var c = cards[n.id], v = visible(n);
      c.classList.toggle("is-away", !v);
      if (!v) return;
      var r = n.marks[0].getBoundingClientRect();
      list.push({ n: n, c: c, want: r.top + window.scrollY - railTop - 6 });
    });
    list.sort(function (a, b) { return a.want - b.want; });
    list.forEach(function (x) { x.h = x.c.offsetHeight; });
    var gap = 10, ai = -1;
    list.forEach(function (x, i) { if (x.n === active) ai = i; });
    if (ai < 0) {
      var y = 0;
      list.forEach(function (x) { x.top = Math.max(x.want, y); y = x.top + x.h + gap; });
    } else {
      list[ai].top = list[ai].want;
      var yd = list[ai].top + list[ai].h + gap;
      for (var i = ai + 1; i < list.length; i++) { list[i].top = Math.max(list[i].want, yd); yd = list[i].top + list[i].h + gap; }
      var yu = list[ai].top - gap;
      for (var k = ai - 1; k >= 0; k--) { list[k].top = Math.min(list[k].want, yu - list[k].h); yu = list[k].top - gap; }
      if (list.length && list[0].top < 0) {
        var shift = -list[0].top;
        list.forEach(function (x) { x.top += shift; });
      }
    }
    list.forEach(function (x) { x.c.style.top = Math.round(x.top) + "px"; });
    var last = list[list.length - 1];
    rail.style.height = last ? (last.top + last.h + 40) + "px" : "0";
  }

  /* ---- 4. selecting a note ---------------------------------------------------- */

  function select(n, from) {
    if (active) {
      cards[active.id].classList.remove("is-on");
      active.marks.forEach(function (m) { m.classList.remove("is-on"); });
    }
    active = n;
    if (!n) { sheet.classList.remove("is-open"); layout(); stepLabel(); return; }
    if (!visible(n)) {
      if (!on[n.type]) { on[n.type] = true; applyFilter(); }
      // engage.js / ihp.js open the chapter or fold that holds a hashed target
      if (history.replaceState) history.replaceState(null, "", "#cx-" + n.id);
      window.dispatchEvent(new HashChangeEvent("hashchange"));
    }
    cards[n.id].classList.add("is-on");
    n.marks.forEach(function (m) { m.classList.add("is-on"); });
    stepLabel();
    if (wide()) {
      doLayout();
      if (from !== "mark") {
        var r = n.marks[0].getBoundingClientRect();
        if (r.top < 90 || r.bottom > window.innerHeight - 90) window.scrollTo({ top: r.top + window.scrollY - window.innerHeight * 0.3, behavior: "smooth" });
      }
      setTimeout(layout, 350);
    } else {
      sheet.innerHTML = "";
      var c = card(n); c.classList.add("is-on"); sheet.appendChild(c);
      sheet.classList.add("is-open"); sheet.scrollTop = 0;
      var r2 = n.marks[0].getBoundingClientRect();
      if (r2.top < 70 || r2.bottom > window.innerHeight * 0.35) window.scrollTo({ top: r2.top + window.scrollY - 90, behavior: "smooth" });
    }
  }

  doc.addEventListener("click", function (e) {
    var m = e.target.closest && e.target.closest(".cx-m");
    if (m && !m.classList.contains("is-filtered") && !html.classList.contains("cx-off")) {
      e.preventDefault();
      var n = notes.filter(function (x) { return x.id === m.dataset.note; })[0];
      if (n) select(active === n ? null : n, "mark");
      return;
    }
    if (active && !e.target.closest(".cx-card, .cx-bar, .cx-sheet")) select(null);
  });
  doc.addEventListener("keydown", function (e) {
    if (e.target.closest && e.target.closest("input, textarea, [contenteditable]")) return;
    if (e.key === "Escape") select(null);
    if (e.key === "j" || e.key === "ArrowDown" && e.altKey) step(1);
    if (e.key === "k" || e.key === "ArrowUp" && e.altKey) step(-1);
  });

  /* ---- 5. toolbar --------------------------------------------------------------- */

  var stepEl;
  function shown() { return notes.filter(function (n) { return on[n.type]; }); }
  function step(d) {
    var list = shown(); if (!list.length) return;
    var i = list.indexOf(active);
    i = i < 0 ? (d > 0 ? 0 : list.length - 1) : (i + d + list.length) % list.length;
    select(list[i], "step");
  }
  function stepLabel() {
    if (!stepEl) return;
    var list = shown(), i = list.indexOf(active);
    stepEl.textContent = (i < 0 ? "–" : (i + 1)) + " / " + list.length;
  }
  function svg(d) { return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg>'; }

  function applyFilter() {
    notes.forEach(function (n) {
      n.marks.forEach(function (m) { m.classList.toggle("is-filtered", !on[n.type]); });
      cards[n.id].classList.toggle("is-filtered", !on[n.type]);
    });
    $$(".cx-bar .cx-t").forEach(function (b) { b.classList.toggle("is-on", on[b.dataset.t]); });
    if (active && !on[active.type]) select(null);
    stepLabel(); layout();
  }

  function buildBar() {
    var bar = el("div", "cx-bar"); bar.setAttribute("role", "toolbar");
    var home = el("a", "cx-home"); home.href = C.root || "../";
    home.innerHTML = svg("M3 11l9-7 9 7M5 10v10h14V10") + "<span>All pages</span>";
    home.title = "All pages";
    bar.appendChild(home);
    bar.appendChild(el("span", "cx-bar__sep"));
    TYPES.forEach(function (t) {
      var count = notes.filter(function (n) { return n.type === t[0]; }).length;
      if (!count) return;
      var b = el("button", "cx-t cx-" + t[0] + " is-on");
      b.dataset.t = t[0];
      b.innerHTML = '<b class="cx-t__name" style="font-weight:500">' + t[1] + "</b><span>" + count + "</span>";
      b.title = t[1];
      b.addEventListener("click", function (e) {
        var only = e.altKey || e.metaKey;
        if (only) TYPES.forEach(function (x) { on[x[0]] = x[0] === t[0]; });
        else on[t[0]] = !on[t[0]];
        applyFilter();
      });
      bar.appendChild(b);
    });
    bar.appendChild(el("span", "cx-bar__sep"));
    var prev = el("button"); prev.innerHTML = svg("M15 18l-6-6 6-6"); prev.setAttribute("aria-label", "Previous note");
    var next = el("button"); next.innerHTML = svg("M9 18l6-6-6-6"); next.setAttribute("aria-label", "Next note");
    stepEl = el("button", "cx-bar__step");
    prev.addEventListener("click", function () { step(-1); });
    next.addEventListener("click", function () { step(1); });
    stepEl.addEventListener("click", function () { var s = $(".cx-sum"); if (s) s.scrollIntoView({ behavior: "smooth", block: "start" }); });
    stepEl.title = "Page summary";
    bar.appendChild(prev); bar.appendChild(stepEl); bar.appendChild(next);
    doc.body.appendChild(bar);
    stepLabel();
  }

  /* ---- 6. summary card ------------------------------------------------------------ */

  function buildSummary() {
    var s = C.summary; if (!s) return;
    var wrapEl = el("section", "cx-sum"); wrapEl.id = "coach-summary";
    var c = el("div", "cx-sum__card");
    c.appendChild(el("p", "cx-sum__eyebrow", "Writing coach · " + C.prizeName));
    c.appendChild(el("h2", null, C.title));
    c.appendChild(el("p", "cx-sum__verdict", s.verdict));
    var counts = el("ul", "cx-sum__counts");
    TYPES.forEach(function (t) {
      var k = notes.filter(function (n) { return n.type === t[0]; }).length;
      if (k) { var li = el("li", "cx-" + t[0], t[1] + " " + k); counts.appendChild(li); }
    });
    c.appendChild(counts);
    var grid = el("div", "cx-sum__grid");
    function box(title, items, ordered, type) {
      var b = el("div", "cx-sum__box cx-" + type);
      var h = el("h3", null); h.appendChild(el("span", "cx-chip", "")); h.appendChild(doc.createTextNode(title));
      b.appendChild(h);
      var l = el(ordered ? "ol" : "ul");
      (items || []).forEach(function (x) { l.appendChild(el("li", null, x)); });
      b.appendChild(l);
      return b;
    }
    grid.appendChild(box("What is working", s.strengths, false, "praise"));
    grid.appendChild(box("Fix first", s.priorities, true, "mistake"));
    c.appendChild(grid);
    if (s.ballot && s.ballot.length) {
      var d = el("details"); d.appendChild(el("summary", null, "Against the judges' ballot"));
      var inner = el("div"), t = el("table", "cx-ballot");
      s.ballot.forEach(function (b) {
        var tr = el("tr");
        tr.appendChild(el("td", null, b.question));
        var st = el("td"); st.appendChild(el("span", "cx-status cx-status--" + b.status, b.status.charAt(0).toUpperCase() + b.status.slice(1)));
        tr.appendChild(st);
        var nt = el("td"); nt.textContent = b.note + (b.where ? " (" + b.where + ")" : "");
        tr.appendChild(nt);
        t.appendChild(tr);
      });
      inner.appendChild(t); d.appendChild(inner); c.appendChild(d);
    }
    if (s.extras && s.extras.length) {
      var d3 = el("details"); d3.appendChild(el("summary", null, "Smaller fixes not marked in the text (" + s.extras.length + ")"));
      var inner3 = el("div"), ul3 = el("ul", "cx-extras");
      s.extras.forEach(function (x) { ul3.appendChild(el("li", null, x)); });
      inner3.appendChild(ul3); d3.appendChild(inner3); c.appendChild(d3);
    }
    if (s.skeleton) {
      var d2 = el("details"); d2.appendChild(el("summary", null, "Page outline against the winners"));
      var k = el("div", "cx-skel");
      function col(title, items) {
        var x = el("div"); x.appendChild(el("h4", null, title));
        var ol = el("ol"); (items || []).forEach(function (i) { ol.appendChild(el("li", null, i)); });
        x.appendChild(ol); return x;
      }
      k.appendChild(col("ReLeaf now", s.skeleton.releaf));
      k.appendChild(col("Shared by the winners", s.skeleton.winners));
      if (s.skeleton.gap) k.appendChild(el("p", "cx-skel__gap", s.skeleton.gap));
      var inner2 = el("div"); inner2.appendChild(k); d2.appendChild(inner2); c.appendChild(d2);
    }
    wrapEl.appendChild(c);
    var head = $("section.abstract") || $(".pagehead") || $("header");
    if (head && head.parentNode) { head.parentNode.insertBefore(wrapEl, head.nextSibling); return; }
    var docWrap = $(".doc-wrap");          // hardware pages: between the dark hero and the document
    if (docWrap && docWrap.parentNode) docWrap.parentNode.insertBefore(wrapEl, docWrap);
    else doc.body.insertBefore(wrapEl, doc.body.firstChild);
  }

  /* ---- 7. site nav: pages outside the mock go to the live wiki ------------------- */

  function fixNav() {
    var base = new URL(C.root || "../", location.href).pathname;   // this site's root
    $$("#site-nav a[href], footer a[href]").forEach(function (a) {
      var h = a.getAttribute("href");
      if (!h || /^(https?:|mailto:|#)/.test(h)) return;
      var u = new URL(h, location.href);
      if (u.pathname.indexOf(base) !== 0) return;
      var rel = u.pathname.slice(base.length).replace(/index\.html$/, "").replace(/\/$/, "");
      if (!rel) return;
      if (MOCK.indexOf(rel) >= 0 || MOCK.indexOf(rel.split("/")[0]) >= 0) return;
      a.href = LIVE + rel + "/" + u.search + u.hash;
    });
  }

  /* ---- start ---------------------------------------------------------------------- */

  function start() {
    doc.title = "Coach · " + doc.title;
    buildSummary();
    anchorAll();
    buildRail();
    buildBar();
    html.classList.toggle("cx-wide", wide());
    layout();
    fixNav(); setTimeout(fixNav, 600);
    window.addEventListener("resize", layout);
    window.addEventListener("load", layout);
    doc.addEventListener("click", function () { setTimeout(layout, 30); setTimeout(layout, 450); }, true);
    doc.addEventListener("toggle", layout, true);
    if (window.ResizeObserver) new ResizeObserver(layout).observe(doc.body);
    if (window.MutationObserver) new MutationObserver(function (ms) {
      if (ms.some(function (m) { return !(m.target.closest && m.target.closest(".cx-rail, .cx-bar, .cx-sheet")); })) layout();
    }).observe(doc.body, { attributes: true, attributeFilter: ["hidden", "open", "class"], subtree: true });
    var h = location.hash.match(/^#cx-(.+)$/);
    if (h) { var n = notes.filter(function (x) { return x.id === h[1]; })[0]; if (n) setTimeout(function () { select(n, "step"); }, 300); }
  }

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", start);
  else start();
})();
