# Best Hardware casebook

Five Best Hardware winners, 2023 to 2025, read for how they write. Four of our pages are judged
against this prize: `hardware/bioreactor`, `hardware/photometer`, `hardware/diopal` and
`hardware/hydroponics`. The casebook serves all four, and each winner section ends with the one
of our pages it is the best precedent for.

Five, not six. The 2023 results page lists no undergraduate winner for Best Hardware: the Winner
slot is empty and four nominees sit beneath it, while the overgraduate and high school slots are
filled. That is recorded in `research/winners.hardware.json` under `unawarded` rather than as a
guessed team, and the verification is in Source notes at the end.

Sources are the rendered text files in `sources/text/hardware-*.md`, listed with their URLs in
`sources/pages.hardware.txt`. Word counts are rough and include captions and image alt text.
Quoted fragments are verbatim from those files (iGEM wiki content, CC BY 4.0). The excerpt bank is
`research/hardware.excerpts.json`, 28 excerpts, five to seven per winner.

The prize name did not change: Best Hardware in 2023, 2024, 2025 and 2026. The ballot did change.
The 2026 ballot asks about user testing, and no 2023 or 2024 winner in this set would score well
on that question. Read the older winners for their documentation and their honesty, not for their
user work.

## Criteria

iGEM's 2026 description: "Good iGEM hardware makes work with standard parts easier, faster,
better, or more accessible: think a sensor that helps characterize parts, or a robot that
automates experiments and cloning. Strong contenders demonstrate utility, user testing, and easy
reproducibility." Standard URL: `/hardware`. Ballot questions, verbatim:

1. Does the hardware you developed address a need or problem in synthetic biology?
2. Did the team conduct user testing and learn from user feedback?
3. Did the team demonstrate utility and functionality in their hardware proof of concept?
4. Is the documentation of the hardware system sufficient to enable reproduction by other teams?

What each one rewards in writing terms:

Q1 need or problem. The operative words are "in synthetic biology", not "in the world". A
page can open with a famine, a cancer statistic or a drought and still score nothing here, because
the question asks what was hard in the lab or the field for a person doing synthetic biology, and
what this device makes easier. The winners answer it with three facts in sequence: what the work
requires, what is currently used to do it, and what that costs or fails to do. TUDarmstadt does it
in one paragraph with a price range and a named gap in the prior art. Evry does it by pointing at
its own protocol. The failure mode is a page that justifies the project and forgets to justify the
instrument.

Q2 user testing and feedback. Two verbs, and the second is the one that scores: conduct, and
learn. It rewards a named person who is not on the team, a place or occasion, what they said in
their terms, and the change their words caused. It punishes the words "we consulted stakeholders"
with no stakeholder, and it punishes a feedback list that no later section answers. UBC-Vancouver
scores on volume, five separate sessions with named people. TUDarmstadt scores on quality, four
technical remarks from two researchers who would actually run the device. Note what neither does:
hand the device to a stranger and watch them fail to use it. That is still an open move in this
prize, and the cheapest one to make.

Q3 utility and functionality in the proof of concept. The hinge is "demonstrate". It rewards
one run of the device doing the job it was built for, reported with numbers, against something: a
control, a requirement, a reference instrument, or a static sample. It does not reward a
specification table. The clearest pattern in the whole set is a capability quoted next to a
requirement: Cornell says the LED panel delivers 37 klux where the organism needs 3,000 lux, and
that only 20% brightness was used. The second clearest is a test with a stated pass condition:
TUDarmstadt and UBC-Vancouver both fill the vessel with water, shake or submerge it, and say
plainly that nothing leaked.

Q4 documentation sufficient to enable reproduction. The judge is the test subject. This
question asks whether a reader with a 3D printer and a soldering iron could build the device from
the page. It rewards nouns with part numbers, a quantity, a price, a file to download, and steps
in order. It punishes the sentence that says the files are documented without linking them, which
is exactly what Evry does, and it punishes a parts table whose price column is empty, which is
exactly what three of our four pages do. A PDF counts, but only if the page says what is in it.

Where each winner answers each question on the page:

| Question | TUDarmstadt 2025 OG | Cornell 2025 UG | UBC-Vancouver 2024 UG | Aachen 2024 OG | Evry-Paris-Saclay 2023 OG |
|---|---|---|---|---|---|
| 1 Need | Commercial RPMs cost 8,000 to 50,000 $; two DIY designs exist and "neither was validated"; bioreactors "come with a price tag of several thousand dollars" | ARC built for two coculture organisms, offered as "a comprehensive benchtop bioreactor solution synthetic biology community" at $300 | Hub states goals as sustainability and scalability; the bioreactor subpage opens with a textbook definition of a bioreactor | Personalized therapy unreachable in low-resource settings; 5-year CRC survival 19% in Kampala against 52% in the US | Three needs taken from their own protocol: light 96 wells independently, measure lux to calibrate that, automate screening |
| 2 User testing | Demonstrated to Eva Schätzlein and David Sipos of the cOSmicStrain group, four technical remarks recorded; Open Campus Day; blind identification of the rotated sample | One named interview, Dr. Hans Carlson, credited as an input before the build | Five sessions: Maggie Chopra at the UBC Biomedical Research Facility, Dr. Steven Hallam's lab, Ahmed Kabil and Taehyeon Kim, Thristan Taberna and Laura Gonzalez, Dr. Mike Hughes | One clause, "as we found out during our research and in our interviews"; no testing of the device | None |
| 3 Proof of concept | Effective gravity 0.028 to 0.070 g from a phone IMU; g against squared feed rate; dye diffusion at 20, 50 and 100 min against a static tube; leak and air tests; 1.7 L culture of B. subtilis 168 at 34 °C | 37 klux against 3,000 lux required, 20% brightness used; 1 Wh per 10 min at 10% brightness; 15 mL/s pump at 90%; 800 mL in a 19×19×24 cm footprint | Growth curves against a flask control, OD600 in triplicate every 20 min for 2 h, then Mk.2 and Mk.3 over 5.5 h; leak and bubble tests; bubbling fixed at 2/sec, 9 V and 0.9 A at 100 mL depth | Ponceau S calibration curve, then a weaker Resazurin curve; HT-29 cells cultured 24 h in PDMS and FlexDym chips with resazurin viability readout | Prototype 3 reaches RGB control through a diffuser; 64 electrodes move droplets; no measured performance figure for either device |
| 4 Documentation | Two parts tables with per-item prices, totals ~90€ and 150 to 180€; seven numbered assembly steps each with a photo; pin-level wiring checklist; Arduino and Python code inline; 3D_print_RPM.zip, a G-code file and an embedded DIY protocol PDF | Bill of materials with unit price, quantity, line total and pack-size notes, total $285.15; operating manual PDF embedded; module CAD called open-sourced but not linked | Three Design History File PDFs, an assembly video per Mark, embedded 3D models; no bill of materials and no cost anywhere; subpages unreachable from the site | Three PDFs (build instructions, chip fabrication, cell cultivation), GitLab CAD and code folders, two cost tables, sensor and board part numbers | Part numbers throughout (CREE XLamp XT-E, BH1750, HV507, 12 µm ETFE, Arduino Nano); the CAD and PCB files the page promises are never linked |

## Reproduction audit

The fastest thing our students can act on. Eight artefacts a reader needs to rebuild a device,
checked against every winner and against our four pages. "Page" means on the page itself; "PDF"
means present but one click away; "claimed" means the page says it exists and does not link it.

| | Bill of materials | Part numbers or suppliers | CAD or STL files | Assembly sequence | Calibration protocol | Test protocol with pass criteria | Cost | Licence |
|---|---|---|---|---|---|---|---|---|
| TUDarmstadt 2025 OG | Yes, page, two tables with prices | Yes, specs per item | Yes, zip plus G-code | Yes, 7 numbered steps, photo each | Partial, pH "calibrated using calibration solutions from our lab", no numbers | Yes, leak and air tests, both with a stated result | Yes, ~90€ and 150 to 180€ | Footer CC BY 4.0 |
| Cornell 2025 UG | Yes, page, unit and line prices with pack sizes | Partial, modules named, few part numbers | No, called open-sourced, not linked | PDF, operating manual | No | No | Yes, $285.15 against a $300 headline | Footer CC BY 4.0 |
| UBC-Vancouver 2024 UG | No | Partial, L298N, ESP8266, DHT, Elegoo Mega named | PDF and embedded viewer, no download link found | Video per Mark, plus 3 Design History File PDFs | No, read on an external spectrophotometer | Yes, leak and bubble tests with pass conditions | No | Footer CC BY 4.0 |
| Aachen 2024 OG | Partial, cost tables by component group | Yes, TCS230/3200, TCS34725, Arduino Uno Rev3 | Yes, GitLab CAD folder | PDF, build instructions | Yes, Ponceau S and Resazurin curves | No | Yes, 20.45€ or 54.66€ by material; chips 6.22€ against 0.96€ | Stated in page text, CC BY 4.0 |
| Evry 2023 OG | No | Yes, extensive | Claimed, never linked | No | No, the lux sensor is the calibration tool, no protocol for it | No | No | Footer CC BY 4.0 |
| Our bioreactor | Yes, 13 lines in TWD, totals ambiguous | Yes, BP1000-DNUN64B, H0009, CKP-DC-S08 | No | Partial, working draft, stops mid-assembly | Yes, through the photometer section | Yes, "Check before going on: leak test" with a fix path | Yes, NT$16,450 parts, NT$30,450 sheet | None on the page |
| Our photometer | Structure only, 18 parts, every price cell "not costed yet" | Yes, GY-302, Arduino Uno Q, UTC PN2222, resistor values, wire gauges | Yes, 8 STLs with sizes, plus full print settings | No, points to a guide not on the page | Yes, the strongest in this document | Partial, the 50% rejection alarm is a live criterion | Partial, $150 estimate, uncosted table | None on the page |
| Our DiOPAL | Structure only, 11 lines, all costs and suppliers blank | Partial, Arduino Uno R4 WiFi, board size | Yes, 6 STLs | No, "Until it is written" | Yes, 40 LEDs measured one by one | Partial, tiers held to 1 to 2% within a column | No, "Unit costs and suppliers are not on record yet" | None on the page |
| Our hydroponics | Partial, 4 parts with volumes, "No cost is recorded for any of them" | No | No, "The files are not yet attached to this page" | No | Not applicable | No, the plate was never weighed | No | None on the page |

Three readings of that table.

The winners are not uniformly good at this. Evry won an overgraduate award with no bill of
materials, no cost, no assembly sequence and no linked files. What it has instead is a part number
for nearly every component and the arithmetic behind its power supply. That is the floor: name the
parts precisely enough that a reader can buy them.

Nobody in this set has all eight. TUDarmstadt comes closest with six and a half, and it is the
2025 overgraduate winner. The gap between the best documented winner and a page that would satisfy
a careful reader is still wide, which means this question is winnable.

Our four pages are strong on files and weak on money. We publish 14 STLs across three pages with
print settings a winner would envy, and we publish not one price. Three of the four say so in
their own words. That combination is unusual and it is fixable in an afternoon with a receipt file.

## TUDarmstadt 2025

Project: synthetic biology beyond Earth. Two devices on one page, a random positioning machine
(RPM) that simulates microgravity and a DIY stirred-tank bioreactor. About 5,100 words, 29 images,
25 captions and tables, 7 references. The prototype's failures are deferred to
`/tudarmstadt/engineering#rpm`.

### Page anatomy

1. Hardware (~90 words): two bullets naming both devices and one sentence of intent.
2. RPM Motivation (~400): why microgravity, why not parabolic flights, what commercial kit costs,
   what the two existing DIY designs lack, the averaging integral, the three assumptions and the
   limit.
3. RPM Overview (~120): four key achievements as bullets, one of them a price ratio.
4. RPM Building (~350): a materials and tools table, the cost, a hover gallery of every component,
   and the note that a biotechnologist built it.
5. RPM Software (~450): the G-code toolchain, the Python pipeline for rotation patterns, an
   embedded PDF of the code.
6. Validation (~900): accelerometer measurement with numbers, the maths, the analysis script, a
   browser tool for other teams, then the dye diffusion test and its blind check.
7. User insight and usage (~500): Open Campus Day, then the cOSmicStrain researchers and their
   four remarks, then four opportunities.
8. Download documentation (~20): the zip and the G-code.
9. The Martian Bioreactor (~1,700): problem, overview, parts list with prices, seven assembly
   steps, pH sensor with code, OD sensor with a wiring checklist and code, leak test, culture test,
   future improvements.
10. References (7).

### Opening

The best need statement in the set, and it is four moves long. Microgravity changes cell behaviour,
with two citations. Parabolic flights are too short and launches too expensive. Commercial RPMs
cost 8,000 to 50,000 $, so student labs cannot have one. DIY designs exist, and here the paragraph
turns: "neither was validated to prove real microgravity simulation, and most published RPMs are
either too expensive or described in overly complex, inaccessible papers". The project's
contribution is the last clause of the need statement, which is why the device feels necessary
rather than merely built. Excerpt `hardware-2025-OG-tudarmstadt-01`.

### Assumptions and limits

Stated before any result, numbered, and closed with a boundary: the reorientation must be fast
enough to prevent sedimentation, slow enough to avoid shear artifacts, and uniform across
orientations, and even then "gravity's magnitude is unchanged, so hydrostatic pressure and weight
remain, thus the machine cannot reproduce the true freefall environment of orbital microgravity".
The team draws the line its own device cannot cross, in the section that introduces it. Excerpt
`hardware-2025-OG-tudarmstadt-02`.

### Validation

Three independent checks, which is why this page scores on Q3. A phone IMU (lsm6dso) with the
phyphox app gives an average effective gravity "precisely between 0,028-0,070 g". A second figure
shows that measured gravity follows the squared feed rate, which turns one measurement into a
calibration curve for other gravity levels. Then the dye diffusion test, borrowed from NASA, with
a static control tube and three time points: visible difference at 20 minutes, still a distinct
undyed region at 50, both uniform at 100. The team then removes its own bias: several members who
did not know which tube had been rotated were asked to pick it out, and all of them did. Excerpts
`-03` and `-04`.

The bioreactor is validated the same way: a leak test and an air test, each with its pass condition
written out, then a culture test with volume, inoculum, strain, temperature and the observation
that settles it. Excerpt `-07`.

### User testing

The device is shown to Eva Schätzlein and David Sipos of the cOSmicStrain group, one of eight
groups on the DLR Cellbox-45 missions. They are named, their project is described, and their four
remarks are quoted as bullets: the rig needs a continuous PC connection and is not autonomous for a
two-week run, cable routing or hollow-shaft motors would stop tangling, samples closer to the
rotation centre would average lower, and clip systems would fit vials and microtiter plates. The
four "opportunities" that close the section answer those four remarks in the same order. Excerpt
`-05`.

What is missing is a before and after. The feedback produced a roadmap, not a rebuild, and the page
does not pretend otherwise.

### Reproduction package

The most complete in the set. Materials and tools table with sizes and counts down to the hex
wrench. Cost of 150 to 180€ with the claim that no engineering knowledge is needed. Seven numbered
assembly steps, each with its own photograph and caption. A wiring checklist that names op-amp pin
numbers and says why each capacitor is there. Arduino and Python source inline. A zip of the printed
parts and a G-code file as direct downloads. Two embedded PDFs. Drawing blocks carrying DATE, REV
and APPROVED. Upstream projects credited by name and link, which is what makes the "neither was
validated" claim fair rather than dismissive.

### Weak spots

The pH calibration is one sentence with no numbers: the sensor was calibrated with lab solutions
and "confirmed that it worked". The slope and intercept in the published code are labelled
"Example calibration", so a reader who copies it has an uncalibrated instrument. The OD sensor is
built and then abandoned: "We successfully built a working circuit for the optical sensor, but
could not test or integrate it into the bioreactor within the project timeframe". Anaerobic
conditions, the whole point of the organism, were never demonstrated. Several sentences are
ungrammatical ("even everyone even a school kids"). None of that cost them the award.

### For us

Best precedent for: the bioreactor, and for the DiOPAL's validation problem.

Three things to take. First, the need statement: four moves ending on the gap in the prior art, and
our bioreactor's Purpose section is one rewrite away from it. Second, the pass-condition test: our
bioreactor already has "Check before going on: leak test" in its assembly draft, and TUDarmstadt
shows that the same sentence belongs in the results, not only in the instructions. Third, the blind
check. Our DiOPAL cannot yet run its biology experiment, and TUDarmstadt's dye tube is proof that a
physical demonstration with a control and a naive observer can carry a page while the biology
waits.

Their OD sensor is our photometer in miniature: an orange LED at 590 to 625 nm and a photodiode,
built and never integrated. We built ours, integrated it, ran it for 400 hours and calibrated it
against two standards. That contrast is worth knowing, because it is the clearest place where our
work is ahead of a winner's.
