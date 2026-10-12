# Hardware precedents casebook: photometer and bioreactor

Four iGEM hardware projects, read for how they write, chosen as the closest well-documented
precedents for our two instruments: the in-line OD600 photometer at
`hardware/photometer/index.html` and the BR-01 perfusion reactor at
`hardware/bioreactor/index.html`.

Photometer pair: Aachen 2014 (the OD/F Device) and TU Darmstadt 2019 (the SensorBrick).
Bioreactor pair: Aachen 2015 (the DIY chemostat) and Humboldt Berlin 2019 (the openPBR).

None of the four won Best Hardware. Two were not nominated for anything in hardware at all.
They are here because they document an instrument well enough that another team could rebuild
it, which is the thing the 2026 ballot actually asks about and the thing a prize list does not
measure. The Best Hardware winners of 2023 to 2025 are covered separately in
`research/hardware.*`; this bank sits outside that set by design, and the one place the two
banks touch is noted under Source notes.

Sources are the rendered text files in `sources/text/hwp-*.md`, listed with their URLs in
`sources/pages.hardware-precedents.txt`. Word counts are from those files and include captions
and image alt text. Quoted fragments are verbatim from them. All iGEM wiki content is CC BY,
and every excerpt in `research/hardware-precedents.excerpts.json` (20 excerpts) carries team,
year, track and source URL.

## Criteria

The 2026 prompt rewards hardware that "makes work with standard parts easier, faster, better,
or more accessible" and says strong contenders "demonstrate utility, user testing, and easy
reproducibility". Standard URL: `/hardware`. Ballot questions, verbatim:

1. Does the hardware you developed address a need or problem in synthetic biology?
2. Did the team conduct user testing and learn from user feedback?
3. Did the team demonstrate utility and functionality in their hardware proof of concept?
4. Is the documentation of the hardware system sufficient to enable reproduction by other teams?

What each one rewards in writing terms, rather than in work terms:

1. A first paragraph that names the problem and who has it before it names the device. Question
   1 is lost by pages that open on the mechanism.
2. A named person outside the team, what they said, and the sentence saying what changed. None
   of the four does this well, which is the biggest gap in this bank.
3. A number next to a claim, and a statement of the conditions it holds under. "Works" is not
   an answer; "one-to-one up to OD 2.5" is.
4. A costed parts list, part numbers, downloadable files, and steps in the imperative. Question
   4 is answered by tables and downloads, not by prose about how reproducible something is.

Where each project answers each question:

| Question | Aachen 2014 | TU Darmstadt 2019 | Aachen 2015 | Humboldt Berlin 2019 |
|---|---|---|---|---|
| 1 Need and who has it | Opens on cost barrier, names biohackspaces, DIY, community labs, schools | Opens on the job (auto-induce at the right OD), names other iGEM teams as users | Opens on sterility and the 10 mL sampling problem | Opens on configurations and who it is for ("offer scientists a simple and versatile cultivation platform") |
| 2 User testing | Independent repeat by team Freiburg on a third cell type | None; reuse is offered, not tested | None on the page | None; GitHub is offered as the channel |
| 3 Utility with numbers | $60, under 200 g, transmission stable across three cell types | Pearson 0.98, then two held-out runs that disagree | 110 h run, D = 0.1/0.3/0.4 per hour, pumps 0.5 to 1400 mL/h, stirrer 200 to 1400 rpm | OD reliable 0 to 1, 300 µE, gas to 250 L/h, D = 0.018 to 0.064 per hour |
| 4 Reproduction | Costed BOM in EUR and USD, STL, SVG, two .ino sketches, 12 photographed steps, instructables link | CAD files and firmware on GitLab, build prose with drill and rod dimensions | Per-subsystem cost table to 384.81 EUR for three reactors, five design archives, assembly videos, per-module manuals | 588 EUR subsystem table, GitHub release with assembly instructions, parts list and software, laser-cut files |

## Aachen 2014

Project "Cellock Holmes", Measurement Track. The OD/F Device reads OD600 and GFP fluorescence
in one body: a 600 nm LED and a TSL235R-LF light-to-frequency sensor across a 3D-printed
cuvette holder, in a laser-cut acrylic case, for a stated $60. Three pages, about 4,680 words
in all.

### The instrument

A cuvette photometer, not an in-line one. It is here anyway because it is the best-documented
DIY photometer in iGEM and because it is the root of the lineage this bank follows. Aachen's
own 2015 in-line biomass sensor is built on it, Tsinghua-A 2018 credits it by name, and TU
Darmstadt 2019 lists it among the sensors it set out to improve on.

### Page anatomy

Project page (925 words, about 5 content figures): intro (~95), Measuring Principle (~130),
Modus operandi (~40 plus a flowsheet), Achievements (~390), Outlook (~85).

Engineering notebook (3,200 words, 34 image slots of which 12 are construction photographs):
General Considerations, Cuvette Holder, Light Filters, Linearity of the Hardware Light Sensor,
Evaluation of the Optical Density Measurement (From Transmittance to True Optical Density,
Experiments, per-organism blocks), Evaluation of the Fluorescence Measurement, DIY: How to
Build Your Own Device (Technical Components, Breadboards, Construction Steps), References.

Interlab Study hardware page (559 words): Commercial Hardware, Open Source DIY Hardware,
Hardware Requirements, Fluorescence with its Characteristic Curve, then Optical Density.

The split is the thing to copy. The project page argues that the device is worth having. The
notebook shows the work. The parts list sits on a third page that a reader can print.

### Build documentation

The costed table is the strongest in the bank: quantity, component, cost in EUR, cost in USD,
line total in EUR, line total in USD, with the exchange rate and its date in the header row
("1€= $1.27 on 14/10/2014"), and a live vendor link per non-obvious part (Mouser for the
TSL235R-LF, Dialight 550-2505F for the LED, Lee Filters Medium Yellow 010 and Twickenham Green
736). Subtotals are given for the OD-only and the combined build.

Downloads are listed as a block: cuvette-holder STL, casing SVG, lid SVG, and two Arduino
sketchbooks, one per build. The construction manual is twelve photographs, each with its own
instruction in the imperative. One gap is stated rather than hidden: the LCD library "can not
be uploaded for legal reasons".

### Calibration and validation with numbers

Calibration is written as a composition of two functions, `OD(T) = f(T) ∘ g(device)`, where `f`
turns the device's transmittance into a true OD and `g` maps that onto the lab
photospectrometer's OD. The method is cited (Lawrence and Maier) and the steps are given as
four arithmetic lines.

The numbers are the regression coefficients for `g`: 3.416 for *P. putida*, 3.461 for
*S. cerevisiae*, fixed at the average 3.432, with the reason for averaging stated. Sensor
linearity is justified by component choice rather than by correction: the TSL235R-LF "shows
perfect linearity such that no software correction is needed", confirmed on an *E. coli*
dilution series with a regression coefficient of 0.99.

Validation is cross-organism and partly independent. Transmittance for NIH 3T3 mouse
fibroblasts lines up with *P. putida* and *S. cerevisiae* "even though the measured optical
densities are lower by 1-2 orders of magnitude", and the mammalian repeat was run by another
iGEM team, Freiburg. Fluorescence is compared against a plate reader, and the comparison is
reported as a linear factor rather than as agreement.

### Limits

Limits sit next to the component they belong to. The Twickenham Green filter paragraph ends on
the number that costs them: "Unfortunately, the transmission rate of this filter is quite bad,
20% only, for the target emission wavelength of 511 nm." The Achievements section states the
design compromise as a question it then answers. The Outlook names the real pain: "The
calibration process is quite intensive work."

Against that, the Interlab page's Optical Density section is a stub. Its body is "Some general
information" and the heading beneath it, "### calibration", has nothing under it at all. A page
that teaches calibration better than anyone else in this bank left its calibration heading
empty on one of its three pages.

### Licence and repository

CC BY 3.0 (the iGEM MediaWiki footer, "Attribution 3.0 Unported"). No GitHub or GitLab. Design
files are wiki uploads and the construction manual is mirrored to instructables.com. Eleven
years on, the download block still resolves.

### Length and figures

About 4,680 words across three pages. Roughly 25 content figures, of which 12 are the
construction photographs and 26 are tables on the notebook page.

### Moves to copy

1. Open on the barrier, not the mechanism. Cost first, then who is shut out, then the device.
2. State the compromise as a question and answer it. "we therefore had to compromise some of
   the measurement quality, were we still able to produce stable, precise and good data?" is a
   section plan, and the Achievements section is the answer.
3. Survey the prior art and name what it failed to document, not what it failed to build:
   earlier DIY turbidity meters exist, but "a proper assessment of their linearity as well as a
   calculated OD-value are missing".

## TU Darmstadt 2019

The SensorBrick: an in-line OD600 sensor made from a polystyrene bar cut to a 3 cm cuboid,
drilled 4 mm lengthwise for flow and 1.2 mm across for two plastic optical fibres, one carrying
light from an LED and one taking it to a six-wavelength spectral sensor. It is plumbed between
the bioreactor and a syringe pump so the sample is stationary while it is read. 2,619 words,
22 image slots. Overgrad.

### The instrument

The closest architectural match to our photometer in the bank: an OD600 sensor on a reactor
loop, not a cuvette on a bench, built to trigger an action (induction) rather than to produce a
publishable OD. It differs from ours in one deliberate way, and the page says why: they stop
the flow to measure, where we read the culture moving.

### Page anatomy

One page, six headings, and that is a problem. Everything about the SensorBrick sits in
click-to-open sub-tabs under a single "Do it yourself" heading, so a reader cannot link to the
calibration, and all five of our excerpts from this page carry the same `section` value. The
content order inside that heading is: design rationale, web app, SensorBrick build, calibration,
verification, syringe pump, final setup.

### Build documentation

Build prose carries the dimensions a maker needs: 3 cm cuboid, 1.2 cm sides, 4 mm lengthwise
bore, 1.2 mm fibre holes that "must be centered", epoxy adhesive, heat-shrink, light-protective
sheets, and "All parts are designed to fit with M2,5 threaded rods". The measurement chamber's
material choice is justified by the property that matters ("due to the high dependence on
transmittance").

What is missing is a table. There is no bill of materials and no costs anywhere, despite the
page calling the sensor "low-cost" twice. CAD files and firmware are on GitLab. The page also
names the two outside open-source projects it built on, which is a credit move almost no iGEM
hardware page makes.

### Calibration and validation with numbers

Calibration: read OD600 on the SensorBrick and on a photometer simultaneously every 15 minutes
over a growth curve, plot one against the other, report the Pearson coefficient, 0.98, and use
the regression to convert raw values to OD.

Then the part that makes this project worth reading. "To verify our calibration we ran another
two experiments and compared the data to the photometer." The held-out runs disagree. The
SensorBrick reads low, and they work out why: the calibration strain carried pTeTW3con2
expressing sfGFP, and "the expressed fluorescence increased the intensity of light in the range
of 600 nm, so the calculated values of OD600 appear lower than they actually are."

The weakness is that the actual numbers live in figures. The regression equation, the slope and
the size of the deviation are not in the text, so a reader cannot check the claim without
reading pixels. Our own page is far better on this.

### Limits

The best limitation paragraph found in this entire search, and it does five things in six
sentences: gives the threshold (approximate values above OD600 0.3), draws the general rule
("It can not be universally calibrated, especially when fluorescent proteins are present"),
names the part that would fix it (a monochromator), downgrades its own claim ("can only be seen
as qualitative values"), and then says why the downgraded claim is still enough ("This still
suits the purpose of determining the exact moment for the web app to initiate the induction").

### Licence and repository

CC BY 3.0 footer. GitLab at `gitlab.com/igemtud/bio-reactor/`, live. No separate hardware
licence, and no licence statement attached to the CAD files themselves.

### Length and figures

2,619 words, 22 image slots, 6 headings. Roughly nine numbered figures carry the calibration
and verification results.

### Moves to copy

1. Separate calibration from verification in a single sentence, then report the verification
   even when it disagrees.
2. When a reading is off, give the mechanism. The sfGFP diagnosis turns a bad result into the
   most informative paragraph on the page.
3. Downgrade the claim, then defend the downgraded claim. Saying the output is qualitative and
   then saying qualitative is sufficient for the job is stronger than claiming it is absolute.

## Aachen 2015

A DIY chemostat. 10 mL working volume, 3D-printed peristaltic pumps, a magnet-and-DC-motor
stirrer, and an in-line continuous OD unit at 605 nm reading through a glass flow path so
nothing is withdrawn to measure. Five pages rendered, about 4,720 words in all.

### The instrument

A continuous-culture reactor with cell-density monitoring on the loop. Architecturally our BR-01
without the membrane: same peristaltic pumping, same in-line optical reading, same intent to run
unattended. The Biomass Sensor manual is the in-line sibling of Aachen's 2014 cuvette device and
says so.

### Page anatomy

Hardware page (1,121 words, 11 headings): Overview, Key Achievements, Pumps with Principle,
Stirrer, Continous OD Device with Measurement Principle, Assembly, Outlook, References.

Characterization of Bioreactor (501 words): Evaluation of the Bioreactor Design, Preliminary
Runs, Final Experiment.

Construction Manuals index (564 words): module links (Circuit, Communication Protocol,
Structural Setup, Stirrer, Biomass Sensor, Pumps), then Cost Estimation, then Video Links,
then References.

Biomass Sensor manual (1,260 words): Materials required with a block per part, Assembly split
into LED, Photo transistor and Glass structure, Assembling the device, Files, References.

Pumps manual (1,270 words): materials, driver specification with a microstep table, build,
Calibration Unit.

Key Achievements is the move worth stealing wholesale. Seven bullets, each a capability with
its measured range: pumps "with a dynamic range of 0.5-1400 ml/h", "calibrated magnetic
stirring from 100-1400 rpm", "characterization of DIY chemostat bioreactors". A judge reads
seven lines and knows what was built and how well.

### Build documentation

Documentation is modular, and the index says so: "Our bioreactor consists of several modules
that can theoretically be used independently. Here we provide construction manuals and more
detailed information". Each module then gets its own manual with its own materials list.

The cost table is scoped before it is given, which is its best feature: it covers "a complete
system consisting of three bioreactors with three pumps and a biomass sensor each". Rows are
grouped by subsystem (OD device, Pumps, Stirrer, Structure, General Components), each with its
own subtotal, down to M3 washers and nuts, with a dated exchange rate and five numbered vendor
references. Total 384.81 EUR or 448.39 USD for three reactors.

Files are archives on the wiki, and all five still download and are valid: Lasercutter_files
42 KB, PumpRotors 475 KB, PumpProg 2.2 KB, OD_Module 102 KB, OD_final 809 bytes (the firmware
sketches are small because they are text). Assembly videos are linked per device.

### Calibration and validation with numbers

Two instruments are calibrated, and each is calibrated against a primary standard rather than
against another instrument. The pumps are calibrated gravimetrically: the pump is connected to
a weighing scale and the mass gain per step is logged, with an extra serial-read circuit built
for the job. That is the same logic as our weighed-silica calibration, which is worth pointing
out to the students.

The reactor itself is characterised over a real run. The preliminary run is 110 hours of
*E. coli* DH5α in LB with manual spectrophotometer readings, showing stable OD across different
dilution rates for five reactor volumes. The final run uses BL21 Gold (DE3) pSB1KRDP in M9:
batch for 5 hours to OD above 1.0, then continuous mode at D = 0.1 per hour, then a step to 0.3
at hour 48, then 0.4 at hour 63.

The success criterion is stated before the result, which is the part our page never does: the
experiment "was designed to keep the dilution rates constant for 3 reactor volumes, so as to
obtain constant optical density ... within human sampling error, to achieve proof of concept".

The honest paragraph is the pump-balance fault. The feed pump outran the harvest pump, the
control program was changed to run harvest 30% faster, and the consequence is given as a number:
average OD fell from 0.78 to 0.76. Nothing is hidden and the cost of the fix is quantified.

### Limits

Thinner than the rest of the page is good. The scoping statement on the OD device is the
strongest: a batch test is described in full, then fenced off. "This setup was far from being
perfect from a bioprocess perspective, but the goal of this experiment was testing the OD sensor
and not the generation of biologically relevant samples." The Outlook gives one real
constraint, that the Arduino Uno's digital ports are all used so a larger controller is needed
next. The Biomass Sensor manual adds the one sentence that tells a user what invalidates their
calibration: "every time we change the measurement time, the device needs to be calibrated
again."

There is no limitations section as such, and one internal inconsistency: Key Achievements says
stirring is calibrated from 100 to 1400 rpm and the Stirrer section says the range is 200 to
1400 rpm.

### Licence and repository

CC-BY-SA, stated in the footer of every page as "CC-BY-SA iGEM Aachen 2015", which is a
stronger and more explicit statement than the default footer the other three carry. Design
archives on the wiki. The control software is separately released under GPL v3 on the
igemsoftware GitHub organisation.

### Length and figures

About 4,720 words over five pages, 21 image slots. The characterisation page carries its whole
result in two plots, which is thin: 501 words and 2 figures for the only long run on the page.

### Moves to copy

1. A Key Achievements list where every bullet carries a measured range. Seven lines, no prose.
2. State the success criterion before the result, including what counts as noise ("within human
   sampling error").
3. Report the mid-run fault with the fix and the number it cost: 30% faster harvest, OD 0.78 to
   0.76.

## Humboldt Berlin 2019

The openPBR: an open-source flat-panel photobioreactor and turbidostat for
*Chlamydomonas reinhardtii*. Nine cultivation vessels or three flat panels, 15 to 30 mm
interchangeable width, 95 to 190 mL, an LED panel of 250 RGB and 250 white LEDs to 300 µE, gas
by rotameter to 250 L/h, and an OPT101 sensor rail reading online optical density against 680 nm
LEDs anywhere from 400 to 800 nm. 2,237 words, 19 captioned figures. Overgrad, and the Overgrad
winner of Best Plant Synthetic Biology that year.

### The instrument

A continuous-culture reactor that holds cell density by pumping, which is our BR-01's control
problem in a different organism. Its OD rail is also a second photometer precedent in disguise:
LED through culture onto a linear voltage sensor, calibrated against a bench photometer.

### Page anatomy

Four top-level blocks (Introduction, Overview of single components, Designing the bioreactor,
Additional ressources), each opening into fold sections with a "Read more Read less" control.
Components are covered one per fold: Cultivation Chamber, Illumination, Gas supply, Sensors with
Calibration, Casing, Pumps, Electronics and Software. The modelling block holds the Chemostat
equation, Growth rate and light intensity, and OD Measurement. The last block is just two
things: the GitHub project and Pricing.

Ending the page on the repository and the price, rather than on a conclusion, is a deliberate
choice and the right one for ballot question 4.

### Build documentation

The subsystem price table is the model our bioreactor page needs: Electronics 81 EUR, Casing
78 EUR, Flatpanel 87 EUR, LED Panel 150 EUR, Sensors 32 EUR or 69 EUR, Pumps 89 EUR, Gas Supply
78 EUR, total 588 EUR. Seven rows, one per subsystem, so a team can price a partial build.

Parts are named where it matters (Arduino ATmega 2560, OPT101 sensors, LM317 regulator,
MOSFETs) and the electronics paragraph is written so a reader can judge the difficulty: the
whole wiring sits on one standard breadboard, "making it possible to rebuild this setup with a
simple Arduino starter kit and some additional parts". There is a wiring and circuit diagram.
Laser-cut files for the plexiglas casing, assembly instructions, the parts list and the software
are on GitHub under a tagged release, and the page says they are "kept up to date".

There is no itemised part-number-level BOM on the page itself; the subsystem table is the
summary and GitHub holds the detail.

### Calibration and validation with numbers

Calibration is written as instructions, in the second person, which no other page in this bank
does: "Once the sensors are installed, you need to calibrate them. ... Subtract the Vout values
from the Vin values and plot them against the reference OD of your photometer. Then perform a
logarithmic fit."

Validation is separate and uses fresh samples. "After calibration, we measured other random
samples both with our reference photometer (Expected OD) and with the openPBR", plotted against
an "ideal correlation" line of x = y, so the reader sees the deviation rather than being told
about it.

Illumination is calibrated too, and reported with its method: light intensity measured at 24
positions above the LED panel at three voltage settings, fitted linearly to predict intensity at
any setting, plus three heat maps of the distribution inside the vessel. Spatial
non-uniformity is shown rather than assumed away.

The operating point is derived from theory rather than asserted. The chemostat equation gives
D between 0.018 and 0.064 per hour, and substituting the 95 mL chamber yields a required pump
rate of 1.71 to 6.08 mL/h, "so a many pumps should be sufficient".

What is missing: no slope, intercept or R² appears in the text. The fits are in figures only.

### Limits

One sentence, and it does the job: "while the openPBR measurements between OD = 0 and OD = 1 are
quite reliable, further calibrating points are needed in order to improve the range beyond
OD = 1." A range, a verdict and the work that would extend it.

There is no limitations section beyond that, and nothing is said about contamination,
sterilisation or run length anywhere on the page.

### Licence and repository

CC BY 3.0 footer. GitHub at `igemsoftware2019/Humboldt_Berlin` with a judging release tagged
1.0.0, live. The Pricing paragraph is the nearest thing to an accessibility licence statement,
and it is aimed at other iGEM teams by name.

### Length and figures

2,237 words, 19 captioned figures across 13 figure elements, 46 image slots. Dense for its
length because the folds hold a lot per screen.

### Moves to copy

1. Write the calibration as instructions a reader performs, not as a procedure the team
   performed.
2. End the page on the repository and the price.
3. Give the reason for publishing the price before the price: other iGEM teams are short of
   money, so here is the number.

## Supplementary cases

Four more pages are rendered in `sources/text/` and quoted here but not excerpted, because the
excerpt bank is weighted to the four primary projects.

ETH Zurich 2019, `hwp-bioreactor-2019-eth-zurich.md`, 4,011 words. Overgrad Best Hardware
nominee, did not win. A three-flask continuous-culture reactor for phage selection with a
self-built in-line OD sensor on a modified flow-through cuvette. Its Improvements section is the
best failure log in the search, structured as Build, Dry Test and User Feedback, with each
paragraph running symptom, investigated cause, fix. Two to lift: the Peltier element was too
weak, "the limited heat transport power (TEC1-12705, ~50W)", so it was replaced with a
TEC1-12715 "with a heat transport power of roughly 140 Watts"; and the flow cuvettes leaked,
where "Increasing the silicone fillings viscosity by mixing in starch helped first, but turned
out to be a temporary solution only." Its measurement sequence is also the closest analogue to
our burst filter: pump 10 seconds for fresh culture, wait 3 seconds "in order to let possible
bubbles float up", one dark reading with the LED off, then eight lit readings. Rejected as a
primary because its Hardware Assembly section is a link to a time-lapse video, there is no BOM
or cost anywhere, and the raw-to-OD mapping is an SVM fit with no error reported.

Cornell 2022, `hwp-bioreactor-2022-cornell.md`, 4,666 words. The answer to our unmatched
flask arm. The comparison is specified on both sides, including why the control was limited
("Due to the size of our incubator, we could not go higher than 150 rpm or the flask would tip
and spill"), sampling moves to triplicate part-way through for a stated reason, error bars are
standard deviations, and the result is negative and said so: the flask grew faster, "which was
not what we expected." It also logs the incident that spoiled eight hours of the run, tape
failing so tubing tangled the impeller, and records that they removed the flask from shaking too
"To maintain consistency". Rejected as a primary because it has no bill of materials and no
downloadable CAD.

XMU-China 2023, `hwp-bioreactor-2023-xmu-china.md`, 1,852 words. Continuous co-culture
fermenter. The validation style to copy is the fold change against a shake-flask control:
OD600 16.91 and hyaluronic acid 782 mg/L at 600 mL working volume, "9.4-fold higher than that in
the shake flask" for biomass and 4.3-fold for product; for bacterial cellulose, 6.28-fold and
"The total produce time reduced from 63 to 38 hours." Rejected as a primary because it has no
limitations section, and its Improvement section is a list of future features rather than an
account of what does not work.

Tsinghua-A 2018, `hwp-photometer-2018-tsinghua-a.md`, 1,404 words. A $20 handheld OD600 and
fluorescence reader. Two moves worth the page. It credits its ancestor and says what it changed
in one line: "We refer to the design of Team Aachen, 2014, but our Devices are more automated
and miniaturized." And it reports its calibration as a fitted equation with its residual
distribution, `spectrophotometer = −0.06759 + 4.61774·DeviceReadout + ε, ε ~ N(0, 0.0052)`,
which is more statistical honesty than any of the four primaries manage in text. Rejected as a
primary on length and on having no held-out validation.

## The photometer pair against our photometer page

Our page is `hardware/photometer/index.html`, about 7,280 words, 43 headings, nine numbered
parts. It is longer than Aachen 2014 and TU Darmstadt 2019 combined.

### What they do better

Aachen 2014 costs its bill of materials. Ours does not. Our table in 1.1 is itemised to the
component with part numbers, which is good, and then every single cost cell reads
"–not costed yet". The summary says "The parts are estimated at $150 against the $15,000
BioDrop it was blanked against. The bill of materials in 1.1 is not yet costed." Aachen gives
quantity, unit cost in two currencies, line total, subtotal per build, the exchange rate and its
date. This is the single largest gap on our page and it is a few hours of work, not a new
experiment.

Both put assembly steps on the page. Ours points off it. Aachen's twelve photographed steps
are on the wiki. TU Darmstadt's build prose carries the drill diameters and the thread size. Our
9.1 gives eight STLs with descriptions and a print-settings table, which is genuinely useful,
but the assembly itself is delegated: "From the slicer project in the doc's assembly guide
(Bambu Studio)". A reader who downloads our STLs has no instruction telling them what to glue,
in what order, or how to align the LED, except the warning in 8.2 that the LED must be turned
in its clip.

Aachen had an outside team repeat the calibration. Freiburg ran the mammalian-cell series.
That is the only answer to ballot question 2 anywhere in this bank, and our page has no user
testing at all: no second builder, no outside lab, no one following our instructions.

TU Darmstadt names the prior art it set out to beat. It lists Aachen 2015, Graz 2017 and
Singapore 2018 and says what it did differently and why. Our page never mentions another team's
instrument. We compare against a $15,000 commercial BioDrop and against nothing in iGEM, which
makes our contribution harder to size.

Both offer a design repository. We offer a website repository. TU Darmstadt has GitLab with
CAD and firmware; Aachen has STL, SVG and both Arduino sketches. Our footer gives CC BY 4.0 and
`gitlab.igem.org/2026/gems-taiwan`, which is the wiki's source, not the instrument's. Our STLs
download from the page, but there is no CAD source, no firmware, and no licence attached to the
hardware designs as distinct from the page text.

### What we do better

Our calibration numbers are in the text, not in the pictures. This is the clearest margin.
TU Darmstadt reports a Pearson coefficient and leaves the regression in a figure; Humboldt
leaves its logarithmic fit in a figure; Aachen gives two coefficients. We tabulate slope,
intercept, R² and mean difference over three ranges, and then do it again against the weighed
standard: "A slope of 0.995 with an intercept of −0.07 is, for practical purposes, a
one-to-one instrument: up to OD 2.5 the photometer reports the BioDrop's number without any
transform applied to it."

We calibrate against a primary standard, not against another instrument. Our 5.1 states the
principle better than any of the four: "A photometer is only worth the reference it has been
checked against. We calibrate against inert mineral suspensions rather than culture, because a
growing culture changes while it is being measured". Only Aachen 2015's gravimetric pump
calibration matches the logic, and that is on an actuator, not a sensor.

We audit the reference instrument. No precedent does this. We establish that the BioDrop
saturates, say so plainly, and keep the consequence in front of the reader: "Every BioDrop value
plotted above OD 2.5 is therefore reconstructed, and the reconstruction has its own error",
with the 14% direct-versus-dilution disagreement and the seven of twenty steps where the
reference falls as silica is added. Then we refuse the flattering conclusion: "The honest answer
is that this run cannot fully separate the two, and we want to be clear about that rather than
claim the flattering reading."

We fence the calibration constants. Our 5.4 caveat is the move TU Darmstadt makes, made
better: "The 5.57× factor and the OD 2.5 working limit come from a single run on one scattering
standard. Silica and bacteria do not scatter identically ... so these constants describe the
instruments, not a conversion that can be dropped onto a culture unchecked."

We explain the algorithm so a reader could reimplement it. The 4.2 walkthrough of the
median and MAD filter, with the reason the median is used rather than the mean, has no
counterpart in any of the four. None of them documents its outlier handling at all.

We compare two builds head to head on one series. 5.3 and 5.4 put the complex and slim
builds on the same silica run and then say which job each is for. No precedent runs two of its
own builds against each other.

## The bioreactor pair against our bioreactor page

Our page is `hardware/bioreactor/index.html`, about 9,580 words, 122 headings, eight parts, nine
design-build-test-learn cycles.

### What they do better

Aachen 2015 has the long continuous run we do not. Their 110-hour preliminary run and their
step changes through D = 0.1, 0.3 and 0.4 per hour are exactly the experiment our own 7.2 says
is missing. Our page is honest about it: "The longest recording known to have the membrane
module fitted is about two days (53 h, integration cycle 1)", and the 400-hour record is the
photometer loop, not the membrane. Aachen also states the pass criterion up front, three reactor
volumes at constant OD within sampling error, where our growth results are reported without one.

Their bills of materials are unambiguous. Ours is not. Aachen scopes the estimate in a
sentence and groups rows by subsystem with subtotals and a dated exchange rate; Humboldt gives
seven subsystem lines to 588 EUR. Our 6.1 reports a sheet it cannot interpret: "Costs are as
entered on the team's component sheet, in New Taiwan dollars. The sheet does not say whether a
price is per unit or per line, and its total adds the column". Being honest about the ambiguity
is better than hiding it, but the fix is to re-enter the sheet with quantities and unit costs.

Their assembly documentation is finished. Aachen publishes a manual per module plus assembly
videos per device, and five design archives that still download. Humboldt points at a GitHub
release holding assembly instructions, parts list and software together. Our 6.2 is labelled
"working draft" on the page, and it is good as far as it goes (the four membrane segments, the
leak test with 3 to 5 drops of water), but it stops partway through the main assembly.

Humboldt derives the operating point from theory. The chemostat equation gives a dilution
rate band, the 95 mL volume gives a required pump rate of 1.71 to 6.08 mL/h, and the pump choice
follows. Our 94 mL/min culture flow and 371 mL/min dashboard figure are reported as measured
settings, never derived from the doubling time or the residence time, and 4.1 has to record the
two figures side by side without reconciling them.

Humboldt calibrates the whole field, not one point. Light intensity at 24 positions at three
settings, with heat maps of the distribution inside the vessel. Our equivalent would be
characterising the green LED strip that drives the optogenetic circuit, which 4.1 lists as "3 m
green-light LED strip" with no intensity, uniformity or delivered dose anywhere.

Both state a licence for the designs. Aachen 2015 carries "CC-BY-SA iGEM Aachen 2015" in
every footer and releases its control software under GPL v3. Our hardware pages carry CC BY 4.0
for the page content and a link to the wiki's own repository, with nothing said about the STLs,
the firmware or the dashboard.

### What we do better

Our limitations section has no equal in this bank, or near it. Neither primary has a
limitations section at all; Humboldt has one sentence. Our 7.1 splits Demonstrated from Not
established and names each gap with the experiment that would close it: "Containment with an n.
Two platings, with no replicate count stated for either, and no incubation conditions for the
first." Our 7.2 ranks the open parameters and attaches a Needs line to each, down to
"Transmembrane pressure logged across a multi-day run". Aachen reports the one fault it hit; we
enumerate what we have not shown.

We grade our own results. The Results strip at the top of the page labels each finding
Measured, Partial, Observed or Untested, and the Partial and Untested labels are used against
our own headline claims: breach detection is "Untested ... pressure transducers and a droplet
sensor are fitted; no breach or alarm test is on record". No precedent exposes a confidence
label per claim.

We argue containment from first principles. Our 5.1 reasons from cell size against pore
size and then states the limit of that reasoning: the 0.2 µm pore "stops whole cells and
nothing smaller". ETH Zurich argues containment by construction, which is good, and Bielefeld
2018 makes a pore argument, but neither names what the barrier does not stop. Humboldt and
Aachen 2015 say nothing about containment.

We withdraw claims in public. The page records "A wrong claim was found and withdrawn. The
50 kDa cut-off and the vesicle claim were checked against the part actually bought." Nothing in
the precedent set does this.

We trace every specification to the run that produced it. 4.1 gives the value "as recorded"
with a pointer to the cycle, and says so where it is missing: "where the final design's value is
not yet recorded, the row says so". Aachen and Humboldt both state specifications as settled
facts without saying which run established them.

Our design history is structured and complete. Nine DBTL cycles with Design, Build, Test and
Learn under each is a stronger skeleton than any precedent's. ETH Zurich's Improvements section
is tighter per paragraph, but it is one section at the end rather than the spine of the page.

## Moves our two pages are missing entirely

1. User testing. Neither page has a second builder, an outside lab, or anyone following our
   instructions. Ballot question 2 is unanswered on both. Aachen 2014's Freiburg repeat is the
   model, and the cheapest version is one person outside the sub-team building from 9.1 and 6.2
   and writing down where they got stuck.
2. A costed bill of materials. Photometer: every cost cell says "not costed yet".
   Bioreactor: the sheet cannot be interpreted. Both need quantity, unit cost, line total and a
   dated exchange rate.
3. Any reference to another iGEM team's instrument. Neither page names a precedent, cites
   one, or says what it did differently. TU Darmstadt 2019's one-paragraph survey and
   Tsinghua-A 2018's one-line credit are both cheap to copy, and the lineage already exists:
   Aachen 2014 to 2015, and Aachen 2024 among the Best Hardware winners.
4. Calibration written as instructions. Humboldt writes "you need to calibrate them ...
   Subtract the Vout values from the Vin values". Our 5.1 and 5.2 describe what we did. A reader
   rebuilding our photometer cannot follow our calibration without translating it first.
5. A design repository with a licence. STLs that download from a page are not a repository.
   No CAD source, no firmware, no licence on the designs as distinct from the prose.
6. An operating point derived from the biology. Humboldt's dilution-rate arithmetic and
   UCSC 2016's doubling-time calculation both get from a growth rate to a pump setting. Our flow
   rates arrive as settings.
7. A capability list with measured ranges. Aachen 2015's seven-bullet Key Achievements, each
   with its range, is a better front door than either of our Results strips, which mix measured
   results with confidence labels.
8. A finished assembly guide. The bioreactor's is a working draft; the photometer's is off
   the page.

## Candidates rejected

Thirty-eight pages were opened and triaged, twenty-eight of them rendered and measured. The
field, with why each was not used.

Photometer and OD instruments:

| Candidate | URL | Why not |
|---|---|---|
| Sheffield 2017, 96-well plate reader | 2017.igem.org/Team:Sheffield/Hardware | The best calibration numbers found anywhere (Y = 0.000665·X + 0.05062, R² = 0.9313 against a Victor plate reader, with 95% confidence bands) and a costed sensor-option comparison table. A plate reader is too far from an in-line flow cell, and the page has no consolidated BOM and no limitations heading. Strongly recommended as a model for how to write 5.2 regardless. |
| UPenn 2021, OptoReader | 2021.igem.org/Team:UPenn/Hardware | Two BOM tables with manufacturer part numbers, a price comparison against a Tecan, a measured 10% reduction in relative standard deviation from per-well normalisation, and an OD > 0.1 validity bound. A 96-well PCB instrument, not a flow cell; no unit prices or device total. |
| ASU 2024, turbidostat | 2024.igem.wiki/asu/hardware | The most complete artefact package in the search: BOM PDF, interactive assembly walkthrough, Onshape CAD, PCB and Gerbers, firmware on GitHub, CC BY 4.0, $124 against a $200 budget, and two rounds of user testing with volunteers following their own instructions. Rejected because the measurement science is thin: OD is a raw photoresistor voltage against a laser, there is no spectrophotometer comparison, no slope and no R². Worth reading for ballot question 2 alone. |
| Tsinghua-A 2018 | 2018.igem.org/Team:Tsinghua-A/Hardware | Kept as a supplementary case. Too short at 1,404 words and no held-out validation. |
| Aachen 2014, Interlab hardware page | 2014.igem.org/Team:Aachen/Interlab_Study/Hardware | Used, as a subpage of the Aachen 2014 case. Its own Optical Density section is a stub. |
| Aachen 2018, Merlin spectrometer | 2018.igem.org/Team:Aachen/Hardware/Spectrometer | A real DIY spectrophotometer with a construction manual PDF, an STL archive and a validation against an Ocean Optics HR4000 giving 4.14 nm resolution. A scanning spectrometer, not an OD sensor; the component list is an image with no part numbers. |
| EPFL 2020, Espress'EAU | 2020.igem.org/Team:EPFL/Hardware | 11 dilution samples from OD600 0 to 1 in 0.1 steps against a spectrophotometer, then a 16-hour live growth curve, STLs on GitHub. Cost table and the key regression are images, so no numbers in text. |
| MADRID UCM 2021, openPBR fork | 2021.igem.org/Team:MADRID_UCM/Hardware | A good worked example of building on Humboldt 2019 including contacting a 2019 member, but derivative, with no BOM and no costs. |
| UAM 2022 | 2022.igem.wiki/uam/hardware | Full BOM to $79.19 and a circuit diagram with pin assignments, but no calibration against anything, no validation, no limitations and no assembly steps. |
| Hopkins 2023 | 2023.igem.wiki/hopkins/hardware | Two dated parts lists ($208.03 then $308.48), an 11-step build and a 10-step test procedure, good reflection on their own earlier version. Zero calibration numbers and no OD data; the OD claim is architectural. |
| Cambridge 2010, E.glometer | 2010.igem.org/Team:Cambridge/Tools/Eglometer | A luminometer, not an OD reader. Of interest only because Aachen 2014 cites it as the predecessor that published no comparison against a commercial instrument. |
| Stanford 2019 | 2019.igem.org/Team:Stanford/Harware | 916 words, no decimal numbers anywhere in the text, reuses Aachen's sensor without documenting a build. |
| Edinburgh UG 2016 | 2016.igem.org/Team:Edinburgh_UG/Plate_Reader | InterLab calibration of a commercial plate reader. No hardware built. |
| Sheffield 2023 | 2023.igem.wiki/sheffield/hardware-modelling | 9,060 words, but a Simulink simulation of a turbidostat. No instrument. |
| Exeter 2024; Lambert GA 2022 | 2024.igem.wiki/exeter/hardware; 2022.igem.wiki/lambert-ga/hardware | Both fluorometers. Lambert's validation writing is good (zero-intercept slopes 0.9473 and 0.9194, −2.952% error) but the instrument is wrong. |
| TU Darmstadt 2025 | 2025.igem.wiki/tudarmstadt/hardware | In the sibling bank as a 2025 Best Hardware winner, and its DIY OD sensor was never tested or integrated. |
| Groningen 2023; Kyoto, BIT, Thessaly 2024; Paris-Bettencourt 2022; Mingdao 2021 | various | Probed; no OD-instrument content. |

Bioreactors:

| Candidate | URL | Why not |
|---|---|---|
| ETH Zurich 2019 | 2019.igem.org/Team:ETH_Zurich/core/hardware | Kept as a supplementary case. Assembly is a video link, no BOM or costs, and the raw-to-OD mapping is an SVM fit with no error reported. |
| UBC Vancouver 2025 | 2025.igem.wiki/ubc-vancouver/bioreactors/... | The best structure in the search: Requirements, Build and Validation per reactor, flask-control validation with numbers (6.1× against the wet lab's 6.9×, peak at 40 h against 127 h), a Mark 1 failure with named causes, and CFD with a six-item limitations list. Rejected only to avoid doubling up on the sibling bank, which already holds UBC-Vancouver 2024's bioreactor and pump pages. Worth adding later if the instructor wants a modern structural model. |
| XMU-China 2023, FermentX | 2023.igem.wiki/xmu-china/hardware | Kept as a supplementary case. No limitations section. |
| Cornell 2022 | 2022.igem.wiki/cornell/hardware | Kept as a supplementary case. No BOM and no downloadable CAD. |
| Bielefeld-CeBiTec 2018 | 2018.igem.org/Team:Bielefeld-CeBiTec/Hardware | Architecturally the closest to BR-01 in the whole search: cross-flow, cell retention, a reversible pump to back-flush the filter cake, an explicit containment argument, FreeCAD archive, costs under $360, and a prototype that failed because the membrane plugged too fast, replaced by a sedimentation settler. Rejected because the page has no BOM table and no OD or growth data at all, and shares its page with an unrelated printed-electronics project. Read it for 5.1 and for the fouling narrative. |
| UFMG-UFV Brazil 2022 | 2022.igem.wiki/ufmg-ufv-brazil/hardware | The cleanest BOM in the search: 17 lines with unit prices to $270, consumables explicitly excluded, plus a 25-page manual PDF, a printable-parts archive, GitLab and CC BY 4.0. Rejected because the OD sensor is an APDS9960 colour sensor with no calibration or validation, and they never tested their own organism. |
| Washington 2017, Chromastat | 2017.igem.org/Team:Washington/Hardware | Best BOM artefact, a spreadsheet with Item, Source and Price columns, honest about its own gaps ("????", "DONATED"), three STEP archives, syringe pump accurate to ±0.01 mL, ~$80 against ~$1000. Almost no culture-level characterisation: no growth curves and no control-accuracy data. |
| UCSC 2016, Taris | 2016.igem.org/Team:UCSC/Hardware | Derives the medium flow rate from a 100-minute doubling time and a 3.78 L volume, characterises the pumps over PWM duty cycle at 50, 75 and 100 Hz, publishes a Build-A-Bioreactor Handbook, GPL-3.0 controller repo. Rejected for pages of textbook PID theory, no growth data, and equations delivered as images whose alt text is all "Mountain View". |
| Sheffield 2022, rEvolver | 2022.igem.wiki/sheffield/hardware | A 10-page construction manual PDF and the best explicit limitations section of the modern set (extremophiles out of scope, acrylic glass-transition risk, no autoclaving), under £200 against £1000+. No OD calibration numbers and no reference-instrument comparison. |
| UPF Barcelona 2020 | 2020.igem.org/Team:UPF_Barcelona/Hardware | Unusually specific component identification down to manufacturer part numbers and drive voltages, but weak on characterisation numbers and no CAD or repository found. |
| NAWI Graz 2017 | 2017.igem.org/Team:NAWI_Graz/Bioreactor | Port-by-port enumeration of the reactor cap is a good move worth stealing. Otherwise it re-runs Aachen's firmware: documents reuse, not a build. No BOM, costs, CAD or control accuracy. |
| NUS Singapore 2021, HERO | 2021.igem.org/Team:NUS_Singapore/Hardware | Some control data (setpoint reached 20 minutes from room temperature) and a Thingiverse link. Thin on BOM and costs. |
| Humboldt-adjacent: Open Science Global 2021 | 2021.igem.org/Team:Open_Science_Global/Hardware | A frugal biofoundry trio at about $4,000 with a cookbook and a GitHub org, but claims performance "comparable to their commercial counterparts" without showing the comparison. |
| Calgary 2020 | 2020.igem.org/Team:Calgary/Bioreactor | Strong design-rationale narrative and a good human-practices-driven constraint, but the parts list is an image, there are no characterisation numbers (one decimal figure in 2,076 words), and the reactor was not run. |
| KU Leuven 2021 | 2021.igem.org/Team:KU_Leuven/Hardware | A perfusion reactor with external cell retention, which would have scored highest on architecture. The team says they "decided to keep the concept a concept". Never built. |
| Thessaly 2023; RUM-UPRM 2022; CCA San Diego 2021; Leiden 2016 | various | Designs never built or never operated; specifications stated as targets rather than measurements. |
| Waterloo 2018 | 2018.igem.org/Team:Waterloo/Turbidostat | 738 words, built by a lab associate rather than the team, no BOM, CAD or numbers. |
| Washington 2016; Duesseldorf 2020; Aachen 2015 stirrer page | various | Superseded by the team's own later work, or tutorial material with no characterisation. |
| Uppsala 2016; Tsinghua-A's vibration module; Toronto 2024; Rochester 2023; BIT 2023 | various | Out of scope: microfluidic chip fabrication, a colony counter, a bioprinter. Rochester 2023 is worth reading as a documentation model (per-part STLs, separate purchased and printed cost PDFs, a user manual, a size-exclusion containment argument) despite the wrong device. |

## Source notes

- Legacy `*.igem.org` wikis sit behind a CloudFront WAF that returns a 925-byte 403 page to
  automated requests in bursts. Twelve candidate renders failed this way mid-search and
  succeeded later when paced. Any `sources/text/hwp-*.md` under about 4 KB should be treated as
  a failed render, not a thin page. All fourteen files in this bank were confirmed to carry real
  content.
- The 2014 and 2015 iGEM results pages do not render usefully (59 and 365 words), so the
  Overgrad or Undergrad track for both Aachen cases is recorded as null rather than guessed. The
  2019 results pages render fully, which is how TU Darmstadt and Humboldt Berlin were confirmed
  as Overgrad.
- 2014 and 2015 wiki pages leak unparsed MediaWiki external-link syntax into extracted text, so
  some excerpts contain fragments like `[http://leefilters.com/... Twickenham Green]`. These are
  left verbatim rather than tidied.
- The extractor marks table cells and captions with a leading `| `. Where an excerpt is a caption
  or a table cell, that marker is stripped and nothing else is changed. Aachen 2014's
  construction steps are captions, so excerpt `hwp-photometer-2014-aachen-06` is one of these.
- Aachen's 2014 notebook nests per-organism headings inside its Experiments section, so the
  nearest heading above the calibration synthesis is "Saccharomyces cerevisiae". That one
  excerpt records the parent heading, "Experiments", instead.
- TU Darmstadt's page holds all SensorBrick content in click-to-open sub-tabs under a single
  "Do it yourself" heading, so all five of its excerpts share that `section` value. This is a
  property of their page, not of the extraction.
- Aachen 2015's five design archives were fetched and checked: Lasercutter_files.zip 42 KB,
  PumpRotors.zip 475 KB, OD_Module.zip 102 KB, PumpProg.zip 2.2 KB, OD_final.zip 809 bytes. All
  are valid zip archives; the two small ones are firmware sketches. The GitHub and GitLab
  repositories for TU Darmstadt 2019, Humboldt Berlin 2019, ETH Zurich 2019 and Tsinghua-A 2018
  all return 200.
- One claim reported by a search sweep could not be verified and is therefore not used: an
  Aachen 2015 limitation about sensor values below OD 0.1 relative to the standard deviation
  over a 15-second calibration interval. It does not appear in any of the five Aachen 2015 pages
  rendered here, and the Software page returned 403 on every attempt.
- The one place this bank touches the sibling bank is Aachen. `research/hardware.*` holds Aachen
  2024, a Best Hardware winner. Aachen 2014 and 2015 here are the same university's earlier
  hardware, and the three together are a documented ten-year lineage rather than a duplication.
  The other near-overlap, UBC Vancouver, was avoided on purpose and is listed under rejections.
