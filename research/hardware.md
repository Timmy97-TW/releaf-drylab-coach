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
`hardware-2025-OG-tudarmstadt-03` and `hardware-2025-OG-tudarmstadt-04`.

The bioreactor is validated the same way: a leak test and an air test, each with its pass condition
written out, then a culture test with volume, inoculum, strain, temperature and the observation
that settles it. Excerpt `hardware-2025-OG-tudarmstadt-07`.

### User testing

The device is shown to Eva Schätzlein and David Sipos of the cOSmicStrain group, one of eight
groups on the DLR Cellbox-45 missions. They are named, their project is described, and their four
remarks are quoted as bullets: the rig needs a continuous PC connection and is not autonomous for a
two-week run, cable routing or hollow-shaft motors would stop tangling, samples closer to the
rotation centre would average lower, and clip systems would fit vials and microtiter plates. The
four "opportunities" that close the section answer those four remarks in the same order. Excerpt
`hardware-2025-OG-tudarmstadt-05`.

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
could not test or integrate it into the bioreactor within the project timeframe", which is
excerpt `hardware-2025-OG-tudarmstadt-06`. Anaerobic
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

## Cornell 2025

Project: PRoSPER, perchlorate remediation on Mars. The device is the Adaptive Reaction Chamber
(ARC), a modular benchtop bioreactor in four variants. About 2,100 words, 29 images, no captions,
no references. The page carries its own "Best Undergraduate Hardware 2025" banner.

### Page anatomy

1. Adaptive Reaction Chamber (~120 words): what was built, for which organisms, and the claim that
   it also serves the wider community.
2. Four variant sections, Liquid Culture, Biofilm, Photobioreactor, Treatment (~150 total): one
   short paragraph each, keyed to a letter.
3. Build for PRoSPER and for your own ideas (~1,100): footprint and volume, the autoclave
   workflow, the motor, the module standard, the magnetic connector, then one block per module with
   its measured numbers, then Bluetooth and the companion app, then the operating manual, named in one sentence as
   excerpt `hardware-2025-UG-cornell-06`.
4. The bill of materials (~350 of table): unit price, quantity, line total and a note per line.
5. Future Plans (~350): three numbered directions.

### Opening

Three sentences, and the third is the one that scores: the reactor is a deployment platform for
their project "but also serves as a comprehensive benchtop bioreactor solution synthetic biology
community". The sentence has a word missing and still does more work than a paragraph of vision,
because it tells a judge the device is offered to other people. Excerpt
`hardware-2025-UG-cornell-01`.

### Numbers against requirements

The move to steal. Cornell does not report what its LED can do and leave it there. It reports the
panel at 1,000 lumens, then 37 klux at the working distance, then that Synechococcus needs
3,000 lux, then that the final tests used 20% brightness with two modules. Four numbers, and the
third one converts the other three into evidence. The same shape recurs: the air pump reaches
sufficient aeration for a 1 L culture "at only 30-40% of the PWM output", and four LED modules at
20% draw under 10 W, "far less than the power draw of a phone charger". Headroom is stated, not
implied. Excerpt `hardware-2025-UG-cornell-04`.

### The bill of materials

The best costed table in the set and the model for ours. Every line carries a unit price, a
quantity, a line total and a note that explains the arithmetic: "$12.99 for 5 pcs", "Each pillar
has 6 magnets", "4.99 is for a pair, Only needs male for module". Subtotals are given per module,
so a reader who wants only the heating module knows it is $14.45. The total, $285.15, sits under a
headline of "only $300". Then the caveat: prices are for reference, and the CNC top mount priced
here is the most expensive variant. Excerpt `hardware-2025-UG-cornell-05`.

### The boundary with the biology

Handled through sterility and nothing else, which is a clean choice. The top is CNC-machined
aluminium with stainless barbs and silicone tubing, so the assembly is autoclavable, and the team
designed "a dedicated autoclave configuration" that lets sterilised parts be joined to
non-autoclavable electronics afterwards without opening the top. The page explains the workflow and
then stops. No growth curve, no strain, no wet-lab result anywhere. Excerpt `hardware-2025-UG-cornell-03`.

### Weak spots

One paragraph about the six module slots is repeated verbatim seven times, under seven different
images. It is the single most visible defect in any winner page in this set, and it survived
judging. The module CAD files are called open-sourced in Future Plans and are not linked. There is
no calibration of the pH or temperature sensors, no test with a pass criterion, and no proof that
anything grew in the reactor. User testing is one named interview before the build, excerpt `hardware-2025-UG-cornell-02`. Several
sentences have missing words or wrong agreement ("This ensure a rigorous and contamination-free
sterile workflow").

### For us

Best precedent for: the bioreactor, specifically its materials list.

Take the table, exactly. Our bioreactor's materials list has 13 lines and a real total, but the
page has to admit that "The sheet does not say whether a price is per unit or per line". Cornell's
notes column is the fix: one short note per line saying what the price covers. Take the headroom
sentence too. Our DiOPAL reports lux tiers without ever saying what the CcaS system needs, and
Cornell would have written the requirement next to the capability.

Our page is already ahead on the thing Cornell skipped. Cornell has no proof the ARC grows
anything; our bioreactor has a growth curve, a western blot and two containment platings, and it
labels each one Measured or Partial.

## UBC-Vancouver 2024

Project: nuCloud, DNA data storage. Three hardware projects, of which one is documented in depth.
The `/hardware` page is a 445-word hub. The bioreactor subpage carries the award-winning work:
about 5,200 words, 8 images, three Design History File PDFs, four assembly videos.

Navigation warning for anyone following this up. The hub's three project cards are images with no
link, the site navigation lists only top-level pages, and the subpage URLs resolve only with a
trailing slash. `/hardware/bioreactor/` is 69 KB of content that nothing on the site points to. The
third project, Multiphase Microfluidic Chips, has a card and no page at all.

### Page anatomy

1. What is a Bioreactor (~200 words): a textbook definition with a citation.
2. How Does this align with our Project and our Vision (~450): five paragraphs of modularity and
   sustainability claims, no device detail.
3. Our Build Process (~450): five numbered phases, from design needs through literature review,
   prototyping, wet lab validation and iHP feedback.
4. Mk.1 (~1,400): image, quick overview, four feature blocks, Designing, Building, Testing,
   Lessons Learned Internally, then user feedback from two sources, then a Design History File.
5. Mk.2, Mk.3, Mk.4 (~1,900 total): the same skeleton, thinning as it goes. Mk.3 and Mk.4 have
   features and feedback but no Testing section.
6. Wet Lab Validation (~700): Mk.1 against a flask with a triplicate OD600 table, then Mk.2 and
   Mk.3 against a control over 5.5 h.
7. Future Directions, 3D models, video tutorials, references.

### Named prototypes

Four Marks, each a section, each introduced by what changed and why. Mk.2 opens with "The most
notable change is the integration of a peristaltic pump and change in main vessel", and the vessel
shrinks from 2 L to 160 mL because testers said the first one was too large. Features are written
as one short paragraph per part, which is a format worth copying: a reader can skim the parts list
of a prototype without reading its prose.

The best single sentence in their iteration writing attaches a part to the prototype that forced
it: "Taking from experiences on Mark 1, internal pressure relief is an important part of being able
to inflow and outflow reagents and substances." Excerpt `hardware-2024-UG-ubc-02` is the internal
lesson, `hardware-2024-UG-ubc-04` is that sentence.

### User testing

Five sessions, all with named people outside the team, and this is why the page is the reference
case for Q2.

Mk.1 was carried to the UBC Biomedical Research Facility with their human practices contact Maggie
Chopra, and came back with four problems: noisy and clunky operation, inconsistent bubbling,
exposed circuitry, and too many disconnected parts. Dr. Steven Hallam's lab added five more, size
and automation among them. Mk.2 was shown to Ahmed Kabil and Taehyeon Kim of the Kelly McNagny Lab,
both senior PhD candidates, who asked for sterility at the cap, a better growth readout than
biomass, and tidier wiring. Mk.3 went to Thristan Taberna and Laura Gonzalez, who work with
bioreactors daily, and asked for remote access and a better interface. The final build was shown to
Dr. Mike Hughes. Excerpts `hardware-2024-UG-ubc-03` and `hardware-2024-UG-ubc-05`.

Two things make this writing work. The feedback is always negative and specific, phrased as the
tester's complaint rather than the team's summary. And each tester's expertise is stated, which
explains why that particular criticism mattered.

The weakness is traceability. The feedback lists are long, the next Mark's feature list is long,
and only the pressure relief valve is explicitly tied back. A reader has to do the matching.

### Testing with numbers

The bubbling test is the most quietly useful passage in the set. They set a target of two bubbles
per second, discover that the reading depends on how deep the tube sits, fix a standard depth of
100 mL below the surface, and only then report 9 V and 0.9 A. Fixing the condition is what makes
the number mean anything. Excerpt `hardware-2024-UG-ubc-01`.

### Weak spots

One statistical sentence is simply wrong: "Statistical analysis showed a P-value of 0.738,
exceeding the significance level, allowing us to reject the null hypothesis of no difference. This
indicates a significant difference in bacterial growth between the two methods." A p value of 0.738
licenses the opposite conclusion. It is quoted here as a warning, not as a model, and it is not in
the excerpt bank.

The Mk.1 OD table is missing the control values for its first two time points. The Mk.4 build is
never validated: the final growth comparison covers Mk.1, Mk.2 and Mk.3. One sentence, "we also get
feedback from our iGEM Supervisor, Dr. Steven Hallam. Members of his lab saw Mk.1 in action", is
pasted under Mk.1, Mk.2 and Mk.3 unchanged, so under Mk.3 it credits feedback on a prototype two
generations old. The Mk.3 section is headed Mk.3 and opens "For Mk.4, we incorporated iHP
feedback". There is no bill of materials and no cost on any page.

### For us

Best precedent for: every one of our four pages, on the one question we score zero on.

This page is the reason the user-testing gap is the first priority in our rewrite. It is not a
high bar. A named person who is not on the team, a place, what they said about our device in their
words, and what we changed. UBC did it five times with lab neighbours and PhD students, not with
farmers or policy makers, and that was enough.

Take their Features format for our prototypes too. Our photometer's four builds are told as
narrative, and a short paragraph per part under each build would let a reader see what physically
changed between V2 and the angled stand.

## Aachen 2024

Project: MAIK, the Microfluidic Absorption Intensity Kit, a colorimeter for cell-viability assays,
plus the microfluidic chip it reads. About 4,600 words, 15 images, 14 numbered figures and tables,
5 references. Hardware iterations are deferred to `/aachen/engineering`.

### Page anatomy

1. MAIK (~250 words): the project, the disease model, the device named and expanded.
2. Affordable Personalized Cancer Care (~550): the access argument, with survival statistics.
3. MAIK's Key Values (~250): four headed claims, accessibility, simplicity, modularity,
   empowerment.
4. MAIK, Your Tool for Precise Color Measurements (~1,100): what it is, the fold holding
   instructions, CAD and code, then casing, sensors, electronics, software, results, and the
   resazurin assay it was built for.
5. Cost Estimation of MAIK (~150): a two-material comparison table.
6. MAIK and Microfluidic Chip Interaction (~300): how instrument and biology meet.
7. Low-Cost Microfluidics (~1,500): fabrication method comparison, results in both chip types, a
   failed adhesion attempt, a chip cost table, a summary, and a scalability assessment.
8. Outlook (~400), References (5).

### Opening

The need is framed as access, not as cancer. The paragraph that does the work names the two
countries, the two survival rates and the conclusion that "low-tech solutions, such as portable
screening tests, could substantially improve outcomes", and the next paragraph names the device
that is the low-tech solution. Excerpt `hardware-2024-OG-aachen-01`.

Note what Aachen does not do: it never claims the device is a clinical instrument. The claim is a
rapid test for assessing therapy effectiveness in a lab with "basic cell-culturing capabilities".
The ambition is sized to the evidence.

### The reuse voice

Aachen is the only winner in the set that writes to the reader in the second person throughout.
"It consists of a tailor-made casing that securely houses sensors, LEDs, and your sample." "Simply
insert your calibration data and the software will show you your calibration curve." "You can use
these scripts directly or adapt them to your own needs." The page reads like documentation for a
kit, which is what the reproduction question rewards. Excerpt `hardware-2024-OG-aachen-02`.

The fold is labelled with three imperatives: open the instructions, download all the CAD parts,
access the code. Three artefacts, named by what the reader does with them.

### Choosing between two parts

The sensor section describes the TCS230/3200 and the TCS34725, gives each one its strength, and
ends with a verdict: "For our project the TCS34725 worked best." Both were tried, both are
documented, one won. The same structure runs the chip comparison: PDMS grows cells better because
it is gas-permeable, FlexDym is 6.5 times cheaper and scales better, and the summary states the
trade-off in both directions without resolving it falsely.

### A failed improvement

The cleanest example of the move in this document. A PDMS-coated slide was tried as a chip base to
improve cell adhesion. It did not help. "As there was no clear improvement in the adhesion of the
cell to PDMS under the microscope compared to glass (see Figure 4), we stayed with the simple glass
slide for cost reasons." Two sentences: what was tried, what was observed, what was kept and on
what grounds. Excerpt `hardware-2024-OG-aachen-05`.

### Calibration

A real calibration, reported with its weaker half. Ponceau S gives a clean linear response. Then:
"In addition to Ponceau S, we also measured Resazurin. While the results were not as optimal as
those obtained with Ponceau S, the calibration curve for Resazurin still provided usable data."
The degradation is graded three times over, and the reader is told what the instrument is still
good for. Excerpt `hardware-2024-OG-aachen-03`.

What is missing is a number. No slope, no R², no limit of detection, no range of validity. The
curves are in figures and the text never reads them out.

### Weak spots

MAIK's Key Values is 250 words of adjectives with no evidence, and a judge could skip it without
losing anything. The calibration has no numeric result. There is no user testing. The cost tables
mix material cost with labour in the chip comparison and then state that "the hourly wages of
workers are the largest cost driver" without showing that row. The hardware iterations that would
answer how the design evolved are on another page, and the sentence that sends you there is vague:
"can be viewed in the hardware section on our engineering page".

### For us

Best precedent for: the photometer.

MAIK is our photometer's nearest relative in the whole winner set, a cheap printed colorimeter with
named sensors, a cost table and a dye calibration. Two things to take. The second-person voice: our
photometer explains itself to a reader who is watching, not to a reader who is building, and
switching even the Design Files and Specifications sections into "you" would change what the page
is for. And the two-material cost table, excerpt `hardware-2024-OG-aachen-04`: ours compares the complex
and slim builds on performance in a six-row table and never once on price, beyond "roughly $70
cheaper".

Where we are ahead: our calibration section reads its curves out loud, with slopes, intercepts, R²
and residual scatter, and Aachen's does not. If Aachen won an overgraduate award with two unread
curves, our silica run is a strength we should not bury.

## Evry-Paris-Saclay 2023

Project: directed evolution of microbial opsins. Three devices on one continuous page with a table
of contents: a 96-well plate illuminator, a lux sensor, and a digital microfluidics platform. About
2,700 words, 12 images, 13 figure captions, 10 references.

### Page anatomy

1. Table of contents, then Hardware (~90 words): the three devices as a list, and the promise that
   they are documented for replication.
2. 96-well microplates lighter (~1,300): the biology that sets the requirement, the first design,
   the multiplexing failure, the PWM workaround, the power budget, the heat problem and its fix,
   then prototypes two and three.
3. Lux Sensor (~450): why it exists, the microcontroller, the sensor and its three resolution
   modes, the enclosure, the USB access.
4. Digital microfluidics lab automation platform (~800): the alternatives rejected, the EWOD
   principle, the vision, the dielectric layer, the factors governing droplet speed, the
   electrowetting equation, the shift register, the 64-electrode prototype.
5. References (10).

### Opening

Shortest in the set and still sufficient. The team identified a need for specialised hardware, and
built three things, listed. Then the sentence that sets the page's standard: documentation for
replication was a primary objective, and it "influenced our choices throughout, including the
selection of components and the extensive use of 3D printed parts". A reproducibility promise in
the opening, which the page then half keeps. Excerpt `hardware-2023-OG-evry-01`.

### How the need is derived

This is the model for our DiOPAL. Three paragraphs of opsin biology, ending in the experimental
requirement: cultures must be lit at decreasing intensities to find the variant that responds to
fewer photons. The device is then designed against that requirement. The reader never has to ask
why a 96-well illuminator is needed, because the protocol asked for it two paragraphs earlier.

The lux sensor is justified the same way, in one sentence: the illuminator had to be calibrated,
protocols needed precision, and a professional probe spectrometer was out of budget. Excerpt `hardware-2023-OG-evry-04`.

### The failed prototype

The best failure writing in the set, and the reason this page is worth reading despite its gaps.
The plan is described in full and with enthusiasm: 96 LEDs multiplexed at 200 to 9000 Hz, faster
than the eye can resolve, with per-LED intensity by duty cycle. Then: "However, this method wasn't
as effective as we'd hoped. Since only one LED lit up at a time, the maximum intensity of each LED
was effectively reduced by a factor of 96." One sentence of physics kills it, and the workaround
that follows is understandable because the reader knows exactly what went wrong. Excerpt `hardware-2023-OG-evry-02`.

Prototype one then fails a second time, on usability rather than physics: it worked, it had a
screen, it was user-friendly, and dimming the whole matrix turned out to be the wrong experiment to
support. Prototype two gives each column its own intensity, prototype three moves to RGB with a
diffuser. Three prototypes, each killed by a different kind of problem.

### Naming the alternative

"We initially considered high-throughput solutions, particularly robotic liquid handlers. But given
our budget, performance needs, and tight timelines, we decided against it." Then microfluidics is
considered and narrowed to digital microfluidics. Two rejections in one short paragraph, each with
its reason. Excerpt `hardware-2023-OG-evry-05`.

### Numbers

The power budget is the page's one piece of real quantitative work and it is shown as arithmetic:
8 rows by 12 columns, 12 by 350 mA giving 4.2 A, 8 by 2.82 V giving 22.56 V, 220 V AC stepped to
24 V DC, a buck converter for the 12 V rail. A reader can check it. Excerpt `hardware-2023-OG-evry-03`.

### Weak spots

The page promises replication and does not deliver it. "We detaile the construction steps and all
the 3D CAD files and PCB design files, with the hope that it can serve as a useful guide for fellow
optogenetic enthusiasts" is followed by no link, no file, no step. There is no bill of materials, no
cost, no assembly sequence and no performance measurement for any of the three devices: the
illuminator's output is never measured in lux by the lux sensor built to measure it. The
microfluidics section ends in future tense. There is no user testing. Four words are misspelled
("detaile", "involvs", "enabls", "identifing"). It still won the overgraduate award.

### For us

Best precedent for: the DiOPAL, and for the photometer's prototype narrative.

Evry is the closest structural match to our house style of anything in the set: one continuous
scroll, several devices, a table of contents, prose that moves through design decisions, no numbered
DBTL headings. It shows that the style can win.

The lesson is the one Evry failed. Our DiOPAL opens on the right foot, naming the biological
question the array exists to answer, exactly as Evry derives the illuminator from its opsin
protocol. But Evry's illuminator was never measured by its own lux sensor, and our DiOPAL's
wavelengths are "taken from the published CcaS/CcaR values, not measured here". Two teams built
light instruments and left the light unmeasured. Ours at least says so on the page.

## 2023 undergraduate: no winner

Worth a paragraph because it tells our students something about the prize. In 2023 the overgraduate
award went to Evry and the high school award to GreatBay-SCIE, while the undergraduate slot was
left empty with four nominees listed beneath it: HUST-China, Kyoto, OUC-China and Rochester. The
sections were not combined that year, since both collegiate awards are shown separately elsewhere
on the same page. iGEM's rule is that a winner must meet a minimum performance standard, so the
most likely reading is that no undergraduate entry met it.

The practical lesson: this prize is not graded on a curve against the other teams in the room.
Four teams were good enough to be nominated and none was good enough to win.

## How winners write a failed prototype

All four of our pages are built around named prototypes that failed and were replaced, so this is
the move to get right. Four patterns in the winner set, in descending order of usefulness.

The physics kill. Evry's multiplexing. The plan is described at full length and in its own
logic, then one sentence names the mechanism that defeats it, with a number: only one LED is lit at
a time, so each one runs at a ninety-sixth of its intensity. The reader is never told the idea was
bad, only why it could not work. This is the pattern to copy for our photometer's horizontal build
and our DiOPAL's white tube holder, because in both cases we already know the mechanism.

The usability kill. Evry again, one paragraph later: prototype one worked, had a screen, was
user-friendly, and was still replaced because dimming the whole matrix did not match the
experiment they wanted to run. A prototype can fail without breaking. Our photometer's vertical
build is this case, and the page already says it: the change "did not make the drastic difference
we had hoped for".

The revert. Aachen's PDMS-coated slide. Tried, no improvement observed, reverted to glass for
cost. The important part is that the reverted option stays on the page. A reader learns that the
obvious improvement was tested, which saves them testing it.

The build lesson. UBC's Dremel paragraph. The failure is not in the design but in the making:
parts fitted too tightly, hours went into sanding, and the lesson is stated as a rule for next
time about tolerances and printer error. Our photometer has the same story with a better ending,
since the TPU-lined seats actually solved it, and the page should say the rule out loud the way UBC
does.

What no winner does, and what our pages do. None of the five labels a prototype as failed in
a heading or a status line. UBC calls them Mk.1 to Mk.4 and lets the feedback lists carry the
problems. Our DiOPAL puts "Failed" in a status row in the summary, against "Overnight run on a
shaker", with the mechanism in the same line: "a bottom-plate post snapped and the white holder
leaked light between wells". That is more honest than anything in the winner set and it costs the
page nothing, because the next row says "Both failures answered" and names the three fixes. Keep
it.

One caution. A failure needs a resolution in the same breath, or the reader is left holding it. Each
of the four winner patterns above closes: a workaround, a different prototype, a reverted choice, a
rule for next time. Our bioreactor's summary says "Eight further cycles are outlined and not yet
written", which is honest but unresolved, and a judge reading only the summary meets an admission
with no answer attached.

## How winners show somebody outside the team using the hardware

Nobody in this set does it. That is the finding, and it is the opening our students have.

What the five actually do, in descending order of strength:

TUDarmstadt shows the device to two researchers who would use it, Eva Schätzlein and David Sipos,
and records four technical limits they identified. The researchers handled and discussed it; the
page does not claim they ran an experiment on it.

UBC-Vancouver carries Mk.1 to another building and shows it to lab staff and PhD students across
five sessions. The page says the Hallam lab "saw Mk.1 in action". Seeing, not operating.

TUDarmstadt runs the only blinded check in the set, and the subjects are its own team members, who
were asked to identify the rotated tube without knowing which it was. Blind, but internal.

TUDarmstadt also puts the unfinished prototype in front of the public on Open Campus Day, where a
twelve-year-old asked about the Arduino. It is engagement, and the page is careful to say the device
was "unfortunately not finished yet".

Cornell credits one interview, before the build.

So the strongest available evidence in three years of winners is a demonstration to a plausible
user, followed by a written list of what they said was wrong. That is reachable for us in a single
afternoon, and the three candidate forms are, in rising order of value: show the instrument to a
neighbouring lab and write down their objections; have someone from outside the hardware team
assemble a device from our own STLs and print settings and record where they got stuck; have
someone else take a reading on the photometer and compare it with ours. The second of those tests
the documentation question and the user-testing question with one activity, and our photometer
already admits the exact place a stranger would stumble: the LED "does not always point perfectly
straight when it is placed in its socket".

## The boundary between the instrument and the biology

Our student editor cut the wet-lab paragraphs off the bioreactor page. The winner set says she is
right, and it also says where the line has to be crossed.

Cornell draws the hardest line. Not one biological result appears on the hardware page. The biology
enters only as a requirement (Synechococcus needs 3,000 lux) and as a workflow constraint (the
assembly must be autoclavable). The cost of that discipline is that Q3 is weakly answered: nothing
on the page proves a culture ever grew.

TUDarmstadt crosses the line exactly once per device, at the end. The RPM gets a dye diffusion test
in agar, which is physics, not biology. The bioreactor gets one culture test: 1.7 L of LB,
B. subtilis 168, 34 °C, turbid at 24 hours. One paragraph, one figure, then back to hardware. This
is the pattern to follow.

Aachen interleaves the two and gets away with it because the instrument's whole purpose is to read
a biological assay. The resazurin chemistry is explained on the hardware page because the device
measures a colour change, and the HT-29 culture results are there because they are what distinguish
two chip materials. Even so, the chip results run for 1,500 words and are the part of the page a
hardware judge would skim.

UBC puts its wet lab work in its own section at the end, headed Wet Lab Validation, with the
instrument comparison as its only subject: bioreactor against flask, same strain, same medium, OD
in triplicate. The section exists to validate the device, not to report on the organism.

The rule that falls out of the four: biology appears on a hardware page in three roles only. As a
requirement the device must meet. As a validation that the device works, kept to one run and placed
at the end. As a constraint on materials, sterility or geometry. Anything else belongs on the wet
lab page.

Checked against ours. The bioreactor keeps the line well, with the growth cycles present as device
validation and the western blot reported in one line. The photometer keeps it almost too well: the
400-hour run is a culture run, and the organism (engineered B. subtilis WB800 at 22 °C) is named
once in passing. DiOPAL has the opposite problem, since the biology it exists to serve has not run
yet, so the page has a requirement and no validation. Hydroponics never names a plant that grew in
it.

## Length, figures and density

Winner word counts, images and figure captions, from the rendered text files:

| Page | Words | Images | Captions, figures and tables | Headings deep | References |
|---|---|---|---|---|---|
| TUDarmstadt 2025 OG | 5,134 | 29 | 25 | 5 levels | 7 |
| UBC-Vancouver 2024 UG, bioreactor subpage | 5,156 | 8 | 3 | 4 levels | 4 |
| Aachen 2024 OG | 4,622 | 15 | 14 | 4 levels | 5 |
| Evry 2023 OG | 2,694 | 12 | 13 | 4 levels | 10 |
| Cornell 2025 UG | 2,111 | 29 | 0 | 2 levels | 0 |
| UBC-Vancouver 2024 UG, hub | 445 | 4 | 0 | 2 levels | 0 |
| UBC-Vancouver 2024 UG, pump subpage | 323 | 1 | 0 | 1 level | 0 |

The range that wins is 2,100 to 5,200 words for a device page. Two winners are under 3,000. Cornell
won an undergraduate award with 2,111 words and no captions at all, carrying its content in a
picture per paragraph and one table. Density matters more than length: Cornell's words are almost
all specification and price, and it has no vision section.

Images run from 1 per 170 words (Cornell) to 1 per 640 words (UBC's bioreactor). Captions are
optional: Cornell has none, UBC's bioreactor has three. TUDarmstadt is the only page that captions
almost everything, and it is also the only page whose figures carry measurement conditions in the
caption.

References run from zero to ten. Two of the five winners have none. References are not what this
prize rewards.

Ours, for comparison, measured with the wiki extractor rather than the winner extractor, so treat
the counts as indicative:

| Page | Words | Images | Diagrams | Status rows |
|---|---|---|---|---|
| Bioreactor | 9,341 | 20 | 14 | 6 |
| Photometer | 7,120 | 44 | 17 | 6 |
| DiOPAL | 4,487 | 32 | 10 | 9 |
| Hydroponics | 2,787 | 11 | 14 | 6 |

Our bioreactor is 1.8 times the longest winner and our photometer 1.4 times. Only hydroponics sits
inside the winning range. That is not automatically a fault, because our pages carry calibration
data no winner attempted, but it does mean two things. A judge will not read every word, so the
summary and the status rows at the top of each page are doing more work than on any winner page.
And some material would carry better in another form: the photometer's electronics section explains
the transistor, the shared ground and the two supply rails in prose, where TUDarmstadt puts the
same level of detail in a numbered wiring checklist with a Notes column. The table is faster to
build from and shorter to read.

## Cross-case synthesis

### Shared skeleton

No two winners use the same section order, but five slots recur, and they recur in roughly this
sequence:

1. Need. What the work requires, what is used now, what that costs or cannot do. Present on all
   five pages. First on four of them.
2. Overview of the device. What it is, in one paragraph, often with a numbered or bulleted list of
   its key properties. Cornell and TUDarmstadt both use bullets here, and both put a price or a
   price ratio in the list.
3. Design and build. The longest slot. Either organised by prototype (UBC, Evry) or by subsystem
   (Cornell, Aachen, TUDarmstadt). The subsystem order is always physical: structure, then optics or
   mechanics, then electronics, then software.
4. Demonstration. One run that shows the device does its job. Last or second to last on four
   pages. Absent from Cornell.
5. Reproduction. Parts, costs, files, instructions. Positioned late on every page that has it, and
   on TUDarmstadt it is split, with the parts table early in Building and the downloads at the end.

Where they differ. User feedback has no fixed home: UBC repeats it inside every prototype
section, TUDarmstadt gives it one section of its own near the end, Cornell folds it into the
opening. Limitations have no fixed home either. TUDarmstadt and UBC put them in Future
Improvements, Aachen scatters them through the results, and Cornell has none. Only Aachen and
Evry use a table of contents, and both of those are the single-scroll pages, which is our format.

### UG and OG

Three overgraduate winners (Evry 2023, Aachen 2024, TUDarmstadt 2025) and two undergraduate
(UBC 2024, Cornell 2025). The difference is not length or polish.

The overgraduate pages argue with the literature. Evry cites ten papers and derives its device from
published opsin behaviour. TUDarmstadt names the two prior DIY designs, cites the theory of RPM
microgravity, and positions its contribution as validation that the prior art lacked. Aachen cites
survival statistics and a resazurin mechanism paper. All three locate the device in existing work.

The undergraduate pages argue with the lab bench. UBC's reference points are its own previous
prototype and the flask beside it. Cornell's are the organism's requirement and a price. Neither
cites prior hardware at all, and Cornell has no references.

Both approaches won. For our pages, the bioreactor is already written in the overgraduate register,
since its Purpose section argues against shelf production and transgenic release. The photometer is
written in the undergraduate register, against the BioDrop on the bench. Neither needs changing,
but the photometer would gain from one sentence naming the published in-line OD instruments it sits
beside.

### 2023 to 2025

The trend is towards reproduction artefacts and away from prose.

2023 Evry: part numbers, no files, no costs, no tables, 2,700 words of continuous prose.
2024 Aachen and UBC: PDFs appear. Aachen links CAD and code folders and three protocol PDFs;
UBC publishes Design History Files and assembly videos. Cost tables appear on Aachen.
2025 Cornell and TUDarmstadt: the parts table with prices becomes standard, direct file downloads
appear (a print zip and a G-code file), and both pages carry a document block or an embedded
manual. TUDarmstadt publishes code inline and a browser tool so other teams can validate their own
build.

If the trend holds, the 2026 bar is a priced parts table, a downloadable file set, step numbering,
and at least one named outside user. Three of those four are cheap for us.

### Figures, tables, code links and references

Figures carry argument on two pages and decoration on one. TUDarmstadt's captions state the
measurement conditions ("Measurement of the acceleration started after 3s and lasted 10 min for
F100 and F50, otherwise 1 min"), so a figure can be read without the body text. Cornell's 29 images
have no captions at all and the body paragraph beside each one carries the information. Both work.
What does not work is Aachen's pair of figures whose captions repeat the body sentence verbatim.

Tables are where the winners put anything a reader will act on: parts, prices, wiring, materials.
No winner puts a result in a table except UBC, whose OD values are tabulated and then also plotted.

Code appears on exactly one page. TUDarmstadt prints the Arduino pH sketch and the Python
photodiode script in full, inline, with comments. Nobody else shows a line of code, and Aachen and
Cornell both have software they only describe. Inline code is not required, but TUDarmstadt's is
the only software on any of the five pages a reader could actually run.

References are optional and never load-bearing. Two winners have none.

### Sentence patterns worth stealing

Capability next to requirement. "a single panel can provide up to 37 klux of brightness, which is
more than sufficient to support Synechococcus which requires 3000 lux" (Cornell).

The named gap in the prior art. "However, neither was validated to prove real microgravity
simulation" (TUDarmstadt).

The bounded claim. "the RPM provides a functional microgravity environment without eliminating
gravity itself" (TUDarmstadt).

The condition that makes a number repeatable. "We decided to set a standard metric at 100 mL below
surface level and found that 9 V and 0.9 A produced the desired bubbling rate" (UBC).

The graded negative. "While the results were not as optimal as those obtained with Ponceau S, the
calibration curve for Resazurin still provided usable data" (Aachen).

The revert with its reason. "we stayed with the simple glass slide for cost reasons" (Aachen).

The failure with its mechanism. "Since only one LED lit up at a time, the maximum intensity of each
LED was effectively reduced by a factor of 96" (Evry).

The priced caveat. "The prices listed above are for reference only" (Cornell).

The reader as builder. "Whether you're working in synthetic biology, chemistry, or physics, MAIK
provides you with the tools" (Aachen).

### Anti-patterns seen in winners

Values sections. Aachen's four headed virtues, UBC's five paragraphs of vision. Adjective-dense,
evidence-free, and skippable. Both pages would be stronger without them.

Benefit lists with no numbers. UBC's microfluidic pump page is 323 words of advantages, every one
of them unquantified, on a page that is part of a prize-winning submission. It is the weakest
writing in the whole set and a useful calibration: this is the floor the prize tolerates.

Copy-paste duplication. Cornell repeats one paragraph seven times. UBC pastes the same
supervisor-feedback sentence under three different prototypes, so under Mk.3 it credits feedback on
Mk.1. Both survived judging, which means nobody is checking, which means the cost of it is a
careful reader's trust rather than the award.

Stale cross-references. UBC's Mk.3 section opens "For Mk.4, we incorporated iHP feedback". Aachen's
"can be viewed in the hardware section on our engineering page" sends the reader to another page
without naming the section.

Claimed but unlinked files. Evry promises CAD and PCB files and links none. Cornell says the module
files are open-sourced and links none. This is the commonest reproduction failure in the set.

Orphaned pages. UBC's two subpages carry the award-winning content and nothing on the site links to
them.

## Our four pages against the winners

### Bioreactor

Better than the winners on claim discipline. The summary labels each result Measured, Partial or
Untested, with the reason in the same line, and no winner does anything comparable. The Purpose
section is the best need argument of anything read here, winners included, because it names the
alternative design and why it lost: "A release problem became a containment problem, and containment
is something hardware can solve." The Limitations section separates Demonstrated from Not
established, lists eight open items with what each one needs, and includes a retraction, "A wrong
claim was found and withdrawn. The 50 kDa cut-off and the vesicle claim were checked against the
part actually bought." Nothing in the winner set retracts anything.

Worse on reproduction, and the page knows it. The materials list has prices but cannot say what they
mean: "The sheet does not say whether a price is per unit or per line". The assembly guide is a
"working draft" that stops in the middle of the main assembly, after step eight. There are no CAD or
STL files for the vessel, the only one of our four pages with no downloadable geometry. Cornell and
TUDarmstadt both ship a complete parts table and a complete sequence, and TUDarmstadt's is seven
steps with a photograph each.

Worse on user testing, like all four of our pages: zero named outside users, against UBC's five
sessions on a bioreactor of its own.

### Photometer

Better than every winner on calibration, and by a wide margin. The page states the principle, "A
photometer is only worth the reference it has been checked against", then runs two standards,
reports slope, intercept, R² and mean difference by range, and separates its own error from the
reference instrument's: "Below OD 2.5 the BioDrop is a reference. Above it, the BioDrop is an
estimate, and a noisy one". It finds the reference's own failure, "at 35 mg the direct channel says
1.536 and the dilution says 1.326", and it refuses the flattering reading. It then bounds the result
for anyone reusing it: "Silica and bacteria do not scatter identically", so "these constants
describe the instruments, not a conversion that can be dropped onto a culture unchecked". Aachen,
the only winner with a real calibration, reports two curves and reads neither.

Better on honest diagnosis. "We first guessed contamination, a second organism taking over, and that
was wrong: the recirculation pump had failed." A wrong hypothesis, named and corrected. No winner
admits a misdiagnosis.

Better on files. Eight STLs with sizes and descriptions, plus a print settings table naming the
printer, nozzle, plate, profile, layer height, infill, supports and filaments. TUDarmstadt ships a
zip; nobody ships print settings.

Worse on cost. Every price cell in the bill of materials reads "not costed yet", the total row
included, while the summary carries "The parts are estimated at $150 against the $15,000 BioDrop it
was blanked against" and the page states plainly that "The bill of materials in 1.1 is not yet
costed". An uncosted table is worse than no table, because the structure promises a number that
never arrives. Cornell's equivalent table is complete to the cent.

Worse on assembly. There is no sequence on the page. The print settings reference "the doc's
assembly guide", which is not linked, and the one assembly difficulty the page does describe, the
LED that "does not always point perfectly straight when it is placed in its socket", is in
Limitations rather than in an instruction.

One editorial loose end: the calibration section contains an unresolved review note, "Confirm which
of the two is the design being carried forward", left inline in the published text.

### DiOPAL

Better than the winners on instrument characterisation. Forty LEDs were measured one by one and the
page reports what that found: "Cycle 2 measured all 40 LEDs one by one and found a 26% spread across
parts sold as identical". The consequence is then followed through, since matching alone left the
tiers 4 to 10% apart, so the tiers were moved into the PWM duty cycle instead. That is a measurement
changing a design, written in two lines.

Better on stating what a reading is not. "every reading on this page is in lux, which is weighted for
human vision and cannot be compared with a published photon dose until it is converted" is a more
careful caveat than anything in the winner set, and it sits in the summary rather than buried.

Better on naming a failure. The status row reads Failed, with the mechanism beside it.

Worse on proof of concept, which is ballot question three. "The biology run it was built for has not
been done yet", and the two sections that would carry it, Proof of Concept and Level 2 Test, are
headings with a statement of intent and no data. Every winner has at least one demonstration run.
TUDarmstadt's dye tube is the cheap answer to this: a physical demonstration with a control, run in
an afternoon.

Worse on reproduction. The bill of materials has eleven lines and no part numbers, no suppliers and
no prices, and says so: "Unit costs and suppliers are not on record yet". The assembly guide section
contains the words "Until it is written". The wavelengths, which are the instrument's whole claim,
are "Assumed", taken from published CcaS/CcaR values rather than measured on our own LEDs, which is
precisely Evry's unfixed weakness repeated.

### Hydroponics

Better than the winners on design requirements. Five numbered requirements, each with a reason,
including two that are about reproduction rather than function: "One standard printer" and "Nothing
to glue". No winner writes requirements this cleanly, and R4 and R5 are exactly the constraints that
make a design rebuildable.

Better on dimensional honesty. Every dimension and displacement is measured off the STLs rather than
asserted, and the result is a usable rule: "it sits about 1 mm lower for each 3.5 g it carries".

Worse on everything a reader needs to build it. No costs ("No cost is recorded for any of them"), no
suppliers, no part numbers, no assembly sequence, incomplete print settings ("Layer height, wall
count and print orientation are not recorded"), and the files are absent: "The files are not yet
attached to this page". It is the only one of our four pages with no downloadable geometry and no
print settings, and it is the page whose entire output is printed parts.

Worse on functionality. The plate was never weighed, so the load line is computed and unchecked:
"The printed plate was not weighed, so the load line is unchecked against a real part". No plant is
reported growing in it. A winner would have put thirteen seedlings in it, photographed the
freeboard, and weighed the plate on a kitchen scale.

### What our pages do better than the winners, in one list

1. Status labels per claim. Measured, Partial, Untested, Observed, Failed, with the reason in the
   same line. No winner has this.
2. Calibration read out in numbers, with the reference instrument's own error separated from ours.
3. Retraction and correction of our own earlier claims.
4. Naming what a number is not: lux against photon dose, silica against cells, index against OD600.
5. Print settings and per-part STL descriptions.
6. Design requirements written as numbered constraints, two of them about reproducibility.
7. Honest misdiagnosis, with the wrong hypothesis left visible.

### What our pages do worse

1. No user testing anywhere, on any of the four pages. The strongest winner has five sessions with
   named people; we have none, and the word "farmer" appears only as an assumed user, as in the
   photometer's "lets farmers keep track of the bacterial density in it".
2. No price on any of the four pages that can be checked, despite three of the four having a table
   built for one.
3. No assembly sequence a stranger could follow. One is a working draft, one is unwritten, two do
   not exist.
4. Two pages with no files attached at all (bioreactor geometry, hydroponics STLs).
5. No licence statement on any of the four pages, where Aachen states CC BY 4.0 in its own text.
6. Length. Two pages are longer than any winner, and the material that would be cut first is the
   prose that duplicates what a table could hold.
7. Unresolved editorial notes left in published text.

### Moves our pages are missing entirely

1. A named person outside the team who handled the device, with what they said and what changed.
2. A completed parts table with unit price, quantity, line total and a note per line, in the
   Cornell format.
3. A numbered assembly sequence with one photograph per step, in the TUDarmstadt format.
4. A test with a stated pass condition reported in the results, not only in the instructions. Our
   bioreactor has the sentence ("Check before going on: leak test") in the wrong place.
5. A cost comparison against a named commercial instrument for the bioreactor. Our own page lists
   this as an open item: "A costed BOM against a named commercial perfusion system".
6. A demonstration run for DiOPAL and hydroponics, of any kind, with a control.
7. A licence line and a repository link on each page.
8. A sentence offering the instrument to another team for a named use, in the second person.

## Rewrite checklist

In priority order, biggest payoff first.

1. Put a named outside user on each page. One session, one named person, what they said, what
   changed. If nothing changed yet, say so and list what their remarks would change, as TUDarmstadt
   does.
2. Fill in every price cell, or delete the empty columns. A table that says "not costed yet"
   eighteen times does more damage than a sentence saying the parts come to about $150.
3. Finish one assembly sequence. The bioreactor's draft is closest. Number the steps, photograph
   each, and state the check at the end of each segment.
4. Attach the missing files. Hydroponics has four STLs rendered on the page and none attached.
5. Give DiOPAL and hydroponics one demonstration each. A blinded or controlled physical test
   counts: the dye tube, a weighed plate, a plate of cultures under two tiers.
6. Move the pass conditions into the results. "No water leaked" is a result, not an instruction.
7. Add the requirement next to every capability. DiOPAL reports lux tiers without saying what the
   CcaS switch needs.
8. Add a licence line and the repository link to each page.
9. Convert the photometer's electronics prose into a wiring table with a Notes column, keeping the
   four highlighted principles as the table's section headings.
10. Resolve the inline review note in the photometer's calibration section before anything is
    published.

## Source notes

Winner verification. All five winners were read off
`https://competition.igem.org/results/<year>?tab=special-prizes` for 2023, 2024 and 2025. The 2023
undergraduate gap was checked twice, once in the shared render at `.render/results-2023.html` and
once in an independent re-render on 2026-10-12, both of which show the Winner slot empty with four
nominees beneath it. No team name is recorded for that slot.

Renders. All five hardware pages rendered on the first attempt, from 33 KB to 267 KB of DOM.
Nothing in this casebook comes from a failed or partial render. Three supporting pages were rendered
to check cross-references and are not part of the delivered source set: `/aachen/engineering`,
`/tudarmstadt/engineering` and `/ubc-vancouver/proof-of-concept`.

UBC-Vancouver's subpages. `/hardware` is a 445-word hub whose three project cards are images with
no href, and the site navigation lists only top-level pages, so the two subpages carrying the
award-winning content are unreachable by clicking. Both resolve only with a trailing slash:
`/hardware/bioreactor` returns 302, `/hardware/bioreactor/` returns 200. The third project,
Multiphase Microfluidic Chips, has a card and no page; five candidate slugs return 404, and the
string "multiphase" does not appear on the team's proof-of-concept page. Both subpages are delivered
as separate files, `hardware-2024-UG-ubc-vancouver-bioreactor.md` and
`hardware-2024-UG-ubc-vancouver-pump.md`.

Content behind folds and iframes. Aachen's build instructions, CAD and code sit behind two
accordion folds; the fold labels render and the three PDFs and two GitLab folders they link were
read from the page source. Cornell's operating manual is an iframe to
`general-operating-manual.pdf` and TUDarmstadt embeds two PDFs the same way. The PDFs themselves
were not read, so claims about them in this casebook are limited to what the page says they contain.

Our own pages. Read on 2026-10-12 from the wiki clone at
`/Users/timmy/Documents/Claude/Projects/Releaf_Wiki/releaf-wiki/hardware/{bioreactor,photometer,diopal,hydroponics}/index.html`
with the scratchpad extractor, which wraps lines, so quotations from our pages here are
whitespace-normalised. Every quotation in this casebook was verified against the page text. Our word
and image counts come from that extractor and the winners' from `tools/totext.py`, so the two sets
are comparable but not measured identically.

Excerpt bank. 28 excerpts in `research/hardware.excerpts.json`, every one copied verbatim from a
line of `sources/text/hardware-*.md` and verified against the file, 31 to 119 words, spread across
all five winners (5, 5, 5, 6 and 7) and eleven functions. User-testing passages carry the function
`audience-framing`, since the excerpt schema has no user-testing value, and are tagged
`user testing` under `teaches` so the notes can find them. UBC-Vancouver's incorrect p-value
sentence is discussed in the UBC section but deliberately not banked.
