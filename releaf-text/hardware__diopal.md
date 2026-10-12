Skip to content
[IMG] ReLeaf team logo
ReLeaf
DescriptionBiomanufacturingEngineeringDevelopmentContributionResults
ExperimentsPartsPlantsMeasurementSafetyNotebook
Math ModelHardwareDigital TwinProtein DesignDry Lab Notebook
Integrated Human PracticesEducationEntrepreneurshipSustainabilityLaws and RegulationsGeospatial AnalysisData Physicalization
MembersAttributionMilestone
DescriptionBiomanufacturingEngineeringDevelopmentContributionResults
ExperimentsPartsPlantsMeasurementSafetyNotebook
Math ModelHardwareDigital TwinProtein DesignDry Lab Notebook
Integrated Human PracticesEducationEntrepreneurshipSustainabilityLaws and RegulationsGeospatial AnalysisData Physicalization
MembersAttributionMilestone
[IMG]
LPA
One question, six answers
Dual-wavelength array
- 520nmgreen channel
- 660nmred channel
- 24cultures at once
- 6light conditions
01The switch
Green on, red off
In these cells a green photon and a red photon mean opposite things: green switches protectant production on through the CcaS/CcaR pair, red switches it off. The instrument exists to hold that one variable still.
02The tube
Lit from underneath
Each tube drops into the rack over an emitter that fires up through its floor. Nothing goes into a culture and nothing is drawn out of it for the whole run — the only thing that reaches it is light.
03Shielding
One tube sees one LED
Every tube sits in its own bore over its own LED, and the housing closes the array in. A tube in a red column never sees green light from the column beside it.
04The grid
Six conditions, four tubes each
Two wavelengths at three intensities is six conditions, and every condition gets four tubes. One run answers all six at once, under the same temperature, shaking and medium.
05Dose
Intensity is a duty cycle
The tier is set by how long each LED is on, fixed before the run starts. Nothing in the light path is adjusted while a run is going, so the dose is a number you can state.
06Drive
One MOSFET per intensity
The green and the red column at one intensity share a MOSFET and a single PWM pin, so a tier switches as a pair — three gates across the whole array.
07Assembly
It goes back the same way
Base plate, perf board, LED holder, housing, tube rack. Nothing is aligned by hand: the geometry between an LED and its tube is set by the print, so the array is the same instrument every time it is put together.
Six conditions. One run. One variable.
Loading 0%
Scroll
## Summary
A 24‑well LED array that holds engineered Bacillus subtilis WB800 under six defined light conditions at once.
The strain carries the CcaS/CcaR switch: green light induces protectant production and red light halts it. To measure that switch, cultures have to see a known wavelength at a known intensity with nothing else varying. Three design‑build‑test‑learn cycles got there. Cycle 2 measured all 40 LEDs one by one and found a 26% spread across parts sold as identical, so the intensity tiers are set by the PWM duty cycle and the LEDs are only matched to each other. Cycle 3 enclosed the array and moved the tiers into code.
The instrument is built and characterised. The biology run it was built for has not been done yet, and every reading on this page is in lux, which is weighted for human vision and cannot be compared with a published photon dose until it is converted.
Array
  4×6
Cultures
  24
Conditions
  6/run
Tiers
  3
Footprint
  211mm
## The record
- LED output matched Measured 40 LEDs read one by one; the 24 kept hold to 1–2% within a column
- Intensity tiers Partial matching alone left the tiers 4–10% apart, so they come from PWM instead
- Six conditions in one run Built Arduino PWM through three MOSFETs, one per tier, held constant
- Overnight run on a shaker Failed a bottom‑plate post snapped and the white holder leaked light between wells
- Both failures answered Rebuilt four screws, reinforced joints, and a black holder at four wall loops
- Culture run end to end Untested no run under the LPA on record yet
- Production against intensity Untested the question the array was built to answer is still open
- Wavelengths on our own parts Assumed taken from the published CcaS/CcaR values, not measured here
- CAD and blueprints Open files six STL meshes in millimetres, in the instrument’s own coordinates
Contents
- 01Hardware highlights
- 02Purpose
- 03Dual-wavelength array
- 04Matched output, shielding
- 05Enclosed, set in code
- 06Final Design
- 07Proof of Concept
- 08Intensity variability
- 09Reproduction
- 10References
# LPA
Section02
## Purpose
The LPA is a testing apparatus, not part of the bioreactor control loop. It exists to answer one biological question:
> How does the wavelength and intensity of applied light affect protectant development in engineered B. subtilis WB800?
The strain carries a CcaS/CcaR light‑responsive expression system. Green light induces protectant production and red light halts it. To characterise that switch we need to expose cultures to defined wavelengths at defined intensities, repeatably, with nothing else varying. The LPA is the fixture that makes that possible.
The array is a 4 × 6 grid built around two wavelengths and three intensity levels. Each of the three tiers has a green channel and a red channel, and each channel is four internal‑resistance‑matched LEDs. One run therefore compares low, medium and high intensity at both wavelengths at the same time, under identical external conditions, which is the only way the comparison is fair.
[CAPTION] Figure 1 The array from above Six columns of four LEDs: a green and a red column at each of the three intensity tiers. Each column is one light condition, and its four matched LEDs light four tubes. Brightness here only marks the tier.
Intensity is set by pulse‑width modulation from an Arduino through three MOSFETs, one per tier, and each tier is held constant for the whole of a test. The LPA applies a fixed dose and does not adjust output as it goes. It characterises, it does not control.
The LPA reached this form in three design‑build‑test‑learn cycles, and what each cycle found set the next one’s design (Figure 2).
[IMG] The cycle-1 array on a desk: a black printed LED holder with a few green and red LEDs lit, wired across to a breadboard.
Cycle 1 Dual‑wavelength array AddedA green and a red LED per column, nothing calibrated FoundLED output varies, and outside light gets in
[IMG] The cycle-2 LED holder stood upright on a desk, most of its LEDs lit, rows of red alternating with rows of green, reflected in a clear parts box in front.
Cycle 2 Matched output, light shielding Added40 LEDs measured, 24 matched in fours; cover from outside light FoundMatching works, but the tiers must come from PWM
[IMG] The cycle-3 LPA on a desk: the white tube holder seated in the black housing, its wells lit green and red, a grey slider plate at the side of the housing.
Cycle 3 Enclosed, set in code AddedHousing, intensity set in code, sliders, tube holder FoundOn a shaker a post snapped, and the white holder leaked light
[IMG] The final LPA: the black tube holder with its 24 bores seated in the black housing.
Final design Black holder, four screws ChangedTube holder in black, 4 wall loops; four screws, not two; solder joints reinforced
[CAPTION] Figure 2 Three cycles at a glance Each photo is the LPA as built at that stage. What a cycle found became the next one’s design: cycle 2 matched the LEDs and shut out outside light, cycle 3 moved the tiers into software, and its overnight test gave the final build its black tube holder. Each panel links to its section.
Section03
DBTLCycle1
DBTL cycle 1 of 3
## DBTL Cycle 1: Dual‑Wavelength Array
Does the idea work at all? A green and a red LED in every column, switched on and off, with nothing calibrated yet.
- DDesignA green and a red LED per column
- BBuildThe first array, wired to a breadboard
- LLearnLED output varies, and outside light gets in
### 3.1 Design
The first build tests the simplest version of the idea: put a green and a red LED in each column, so we can switch between them quickly and exercise the on and off control of protectant production directly. Nothing is calibrated at this stage, because the question is whether the concept works at all before we spend effort making it precise.
Wire‑management prints were included from the start, since even at this size the harness gets unmanageable fast.
### 3.2 Build
[IMG] The first LPA on a desk: a black printed LED holder with a few green and red LEDs lit, wired across to a breadboard and a microcontroller board.
[CAPTION] Figure 3 Cycle 1 on the bench The first array: green and red LEDs in a black printed holder, wired out to a breadboard.
### 3.4 Learn
The dual‑wavelength concept worked, but two things were not controlled, and both matter more than they first appear.
#### LED‑to‑LED output was not consistent
Nominally identical cheap single‑bulb LEDs draw different currents and emit different intensities at the same drive level. As long as that is true, an intensity tier is not a real quantity, and the wavelength comparison is not fair either, since the green and red channels would be running at unknown relative brightness.
#### External light was not blocked
Ambient light adds an unknown amount of illumination to every tube, and it lands hardest on the low‑intensity condition, which is exactly where we need the cleanest separation.
Both have to be solved before intensity means anything, which is what cycle 2 is for.
Section04
DBTLCycle2
DBTL cycle 2 of 3
## DBTL Cycle 2: Matched Output and Light Shielding
Make intensity a real quantity: measure every LED, build columns of matched LEDs, and shield the array from outside light.
- DDesignThree intensity tiers from matched LEDs
- BBuildEvery LED measured on its own, then rewired
- TTest40 readings, sorted into matched groups
- LLearnMatching works; the tiers must come from PWM
### 4.1 Design
Cycle 2 introduces the three‑intensity structure that defines the array, and the LED matching needed to make it real.
The approach is to measure the light output of every LED individually and use that to identify units with similar internal resistance. From the matched units we form three groups of four per wavelength, one group per intensity tier, arranged as columns.
Because the LEDs within a column are matched, the column can be recalibrated as a unit through straightforward mathematical adjustment, so that every column at a given tier matches every other. That is what turns low, medium and high from labels into reproducible quantities.
Coverage was added to block external light, so that the intensity a culture receives is the intensity we set.
### 4.2 Build
Every LED was driven at 5 V and measured individually on a lux meter using a printed sensor fixture, so each reading is taken at the same distance and orientation. Each LED carries a tag made of its row and its column, with rows A to D running downward and columns 1 to 5 running across, so any physical LED can be traced back to its own measurement. The array was then rewired with the matched units grouped into columns.
[IMG] A round black printed fixture on a desk with one green LED lit at its centre, wired to the bench, the lux meter's case behind it.
[CAPTION] Figure 4 Measure One LED at a time in the printed sensor fixture, at a fixed distance and angle.
[IMG] A row of loose LEDs laid along the edge of a desk, each pair of leads carrying an orange paper tag.
[CAPTION] Figure 5 Tag Every LED labelled with its row and column, so its reading follows it.
[IMG] The black LED holder standing upright with green and red LEDs lit, tagged red and black leads running from it to a breadboard in front.
[CAPTION] Figure 6 Rewire The matched LEDs back in the holder, grouped into columns.
### 4.3 Test
All 20 green LEDs were read in kLux and all 20 red LEDs in lux, each at 5 V. The tables are laid out by the measurement tags of 4.2 (rows A to D, columns 1 to 5), not by the array's 4 × 6 grid. The shading marks which matched group each LED went into.
[FOLD] The 40 readings, LED by LED2 tables
LowMidHighNot used
[TABLE] Table 1 Green LEDs at 5 V, kLux
| Row
| 1
| 2
| 3
| 4
| 5
| A
| 2.54
| 2.19
| 2.33 (low)
| 2.40 (high)
| B
| 2.37 (mid)
| 2.11
| 2.34 (low)
| 2.48
| 2.33 (low)
| C
| 2.01
| 2.37 (mid)
| 2.38 (high)
| 2.42 (high)
| 2.36 (mid)
| D
| 2.33 (low)
| 2.05
| 2.35 (mid)
| 2.45
| 2.20
[TABLE] Table 2 Red LEDs at 5 V, lux
| Row
| 1
| 2
| 3
| 4
| 5
| A
| 431 (high)
| 371
| 424 (high)
| 393 (low)
| 438
| B
| 400
| 380
| 430 (high)
| 397 (low)
| 360
| C
| 410 (mid)
| 360
| 416 (mid)
| 397 (low)
| D
| 411 (mid)
| 390 (low)
| 360
| 388
| 428 (high)
Sorting those into groups of four by output gives the matched sets, one per tier and wavelength. After rewiring, the six channels read as follows, in kLux.
[TABLE] Table 3 The six channels after rewiring, kLux: the readings of Table 1 and Table 2, regrouped
| Green low
| Red low
| Green mid
| Red mid
| Green high
| Red high
| 2.33
| 0.390
| 2.35
| 0.410
| 2.38
| 0.424
| 2.33
| 0.393
| 2.36
| 0.410
| 2.40
| 0.428
| 2.33
| 0.397
| 2.37
| 0.411
| 2.40
| 0.430
| 2.34
| 0.397
| 2.37
| 0.416
| 2.42
| 0.431
### 4.4 Learn
Green LEDs at 5 V26%across all 20→0.4% · 0.9% · 1.7%within each matched group
Red LEDs at 5 V22%across all 20→1.8% · 1.5% · 1.7%within each matched group
[CAPTION] Figure 7 The spread is real, and matching tightens it Every LED from Table 1 and Table 2 on one axis (top), then the twelve kept per colour magnified (bottom). Hollow dots are the eight per colour that were not used.
The green LEDs ran from 2.01 to 2.54 kLux, a spread of 26% across parts sold as identical. The red LEDs ran from 360 to 438 lux, a spread of 22%. Building intensity tiers out of unsorted LEDs would have meant every column sitting at an unknown brightness, so the matching step is not optional.
Sorting by measured output tightens each group considerably. The green low group holds 2.33 to 2.34 and the green mid group holds 2.35 to 2.37, which is well inside 1%. The red groups hold to about 2% each.
Two things did not come out clean, and both need addressing before this data supports an intensity claim.
- The loosest of the three green groups. Green high spans 2.38 to 2.42 kLux, about 1.7%, against 0.4% and 0.9% for the other two green groups. It is the leftover group, made of what did not match anything else.
- The tiers are too close together. Green low to green high is about 4%, and red low to red high about 10%. Those gaps are the parts’ own spread after sorting; they are not three distinct light levels.
The tiers therefore have to come from the PWM duty cycle, not from LED selection. Matching makes the four LEDs in a column agree with each other, and software sets how bright that column runs. That is what cycle 3 builds.
What remained after this cycle was also practical. The electronics were still exposed, intensity was still set by hand, and there was no dedicated way to hold the test tubes in a repeatable position over the array.
Section05
DBTLCycle3
DBTL cycle 3 of 3
## DBTL Cycle 3: Enclosed and Software‑Controlled Instrument
Turn the array into an instrument someone else can use: enclosed, set in code, assembled without tools, with the tubes held at a fixed distance over the LEDs.
- DDesignEnclosure, intensity in code, sliders, fixed tubes
- BBuildArduino PWM through three MOSFETs, one per tier
- TTestOvernight on a shaker: a post snapped, light leaked
- LLearnFour screws, reinforced solder joints, black tube holder
### 5.1 Design
Cycle 3 keeps the calibrated tiers and the light shielding from cycle 2 and turns the array into something that can be handed to someone else and used. Four changes do that. Each is tagged with the CAD part it lives in.
[IMG]
01 · LPA_Box
Enclosed electronicsAn outer frame print houses the LED wiring and the perf board, so no electronics sit loose on the bench.
02 · Arduino code
Intensity in codeLight intensity is varied in code, so a run is defined by a set of values, not by a physical adjustment someone has to remember.
[IMG]
03 · Left_C, Right_C
Tool‑free assemblySlider prints allow assembly and disassembly without tools.
[IMG]
04 · Tube_Holder
Fixed tube positionA tall print holds the test tubes at a fixed position over the array, so the distance between LED and culture is the same every run.
### 5.2 Build
Control runs from an Arduino Uno R4 WiFi. PWM signals from the Arduino drive three MOSFETs, one per intensity tier, and software sets the duty cycle for each tier. The selected intensities are held constant for the duration of a test, so each culture receives a fixed, well‑defined dose. Three calibrated tiers across two wavelengths give six defined light conditions per run.
[CAPTION] Figure 8 Drive chain The duty cycle for each tier is fixed in software before the run; the Arduino’s PWM pins drive three MOSFETs, one per tier, and each MOSFET switches a green and a red column of four. Nothing in the light path changes during a run, so each culture receives a fixed, well‑defined dose.
[IMG] Three black MOSFETs with metal tabs standing in a row on a white breadboard, coloured jumper wires running to them, the edge of the black LED holder at the left.
Cycle 2On a breadboard, beside the LED holder
[IMG] The LPA with its housing lifted off: the black 24-bore LED holder held on corner screws above a green perf board, a bundle of red and black wires with orange paper tags beneath it and three MOSFETs on the board, all on a dusty grey bottom plate with cone-shaped posts.
Cycle 3On the perf board, under the LED holder
[CAPTION] Figure 9 Three MOSFETs, two boards The switching stage of Figure 8 as built. In cycle 2 the three MOSFETs stood on a breadboard on the bench; in cycle 3 they sit on the perf board under the LED holder, which the housing covers (shown here lifted off).
[IMG] The LPA assembled on a desk: a white 24-well tube holder seated in the top of a black printed housing, one lit tube standing in a corner well. Beside the housing, the Arduino sits on the desk on a clear base, with a USB-C cable and three jumper wires tagged P9, P10 and P11 running to the housing.
[CAPTION] Figure 10 Enclosed Cycle 3 assembled: the white tube holder on the black housing, the Arduino beside it on the desk.
[IMG] Looking down into the white tube holder: 24 wells lit, the columns alternating green and red, one capped tube glowing green in a corner well.
[CAPTION] Figure 11 Under light The 24 wells from above, green and red columns alternating.
### 5.3 Test
During our overnight test run, the connection point on the bottom plate broke off. The LPA was on a shaker for the run; the frequency was most likely too high for the printed post. Several wires came undone and had to be resoldered.
[IMG] Close-up of the LPA on a lab shaker: the lower edge of the black housing with a screw, the grey bottom plate beneath it with white debris spread around a torn hole, a black rubber mat, and the shaker's blue front panel with a dial marked 60 and 80 and a strip of yellow tape by its knob.
[CAPTION] Figure 12 On the shaker The LPA’s base after the overnight run: white debris around a torn hole in the bottom plate, the shaker’s dial below.
[IMG] A grey printed bottom plate with a cone-shaped base; fingers hold the snapped-off cylindrical post just above it, a screw through its top, with the perf board, three MOSFETs and dust on the plate behind.
[CAPTION] Figure 13 The snapped post One of the bottom plate’s connection posts, broken off its base.
The white tube holder print (Figure 11) allowed light to leak into neighbouring holes. This compromised our data, as the test tubes were receiving light from more than one source.
### 5.4 Learn
#### Hold the plate at four points
All four screws on the bottom plate are now used, not two, which spreads the load across four points instead of concentrating it on a pair. Every soldered connection was reinforced. Neither change has been through a second overnight run on the shaker, so the repair is untested.
#### Black, thicker tube holder
We replaced the white tube holder print with a black one, and increased its wall thickness from 2 loops to 4 (Figure 15; the last two panels of Figure 2 set the white and the black side by side).
Section06
## Final Design
### 6.1 Final CAD and Prototype Photo
The final CAD is rendered in 3D at the top of this page, with the black tube holder of the final build (5.4). Figure 14 lays out its parts, numbered as in the CAD file list in 9.3, Figure 15 is the final prototype, and Figure 16 in 6.2 cuts through the assembly to show how the parts stack.
[IMG] Rendering of the LPA's CAD parts laid out side by side: the black housing, the black tube holder with 24 bores, the black LED holder, the grey bottom plate with four posts, the green perf board and the two grey slider plates.
1 2 3 4 5 6 7
[CAPTION] Figure 14 The CAD, part by part At true relative scale and coloured as printed for the final build: 1 Bottom_Plate · 2 Left_C · 3 Right_C · 4 LPA_Box · 5 LED_Holder · 6 Tube_Holder · 7 perf board (bought, modelled for fit).
[IMG] The final LPA on a desk: a black printed tube holder with 24 round bores seated in the top of the black housing, the slider tab on its side.
[CAPTION] Figure 15 Final prototype The black tube holder that replaced the white one, seated on the housing.
### 6.2 Key Specifications
[FOLD] Key specifications8 rows
Array
  4 × 6 (rows × columns), being 2 wavelengths × 3 intensity tiers, with 4 matched LEDs per column
Green channel
  Around 535 nm, which induces protectant expression
Red channel
  Around 670 nm, which halts it
Intensity tiers
  Three, resistance‑matched and mathematically recalibrated to match across columns
Control
  Arduino PWM through three MOSFETs, one per tier (5.2), held constant for the duration of a test
Shielding
  External‑light coverage isolating the cultures from ambient light
Enclosure
  Enclosed frame for the LED wiring, with slider prints for tool‑free assembly
Tube holder
  Tall print sized to hold test tubes at a fixed distance from the array
1 2 3 4 5 6 7 108 mm 80 mm 211 mm 18 mm
[CAPTION] Figure 16 The LPA in section Cut from the CAD files through the second row of bores, the parts numbered as in Figure 14. The perf board (7) sits on the bottom plate’s four corner posts (outside this cut) inside the housing (4); the LED holder (5) sits in the housing’s top and the tube holder (6) stands on it, every tube bore over an LED bore on the same 18 mm pitch. The sliders (2, 3) pass through the housing’s sides.
[FOLD] Dimensions, measured from the CAD files6 values
Measured from the CAD files
Footprint
  211 × 164 mm (217 mm across the sliders)
Height
  108 mm from the bottom plate to the top of the housing; the tube holder adds 80 mm
LED grid
  4 × 6 on an 18 mm pitch, shared by the LED holder and the tube holder
Tube bores
  24, each 17 mm across, narrowing to 16 mm in a 3 mm lip at the LED end
Between tubes
  1 mm of wall between neighbouring bores (2 mm at the lip): the 18 mm pitch less a 17 mm bore
### 6.3 Limitations
#### A fixed dose, no feedback
The LPA applies a fixed dose and does not respond to the culture, so it cannot be used to close a control loop. That is deliberate, but it means nothing here transfers directly to the bioreactor without a feedback path being added.
#### Wavelengths assumed, not measured
The wavelengths are taken from the published CcaS/CcaR values and have not been measured on our own parts, so the stated peaks are assumptions until the LEDs are characterised.
#### No correction for drift
Matching corrects for spread between LEDs at build time. It does not correct for drift as the LEDs age or warm up during a long run.
A note on the units
Every reading on this page is in lux, which is weighted for human vision (peak near 555 nm), so the weighting error is not the same size on the green and the red channel. The dose that matters to the cells is photon flux, in µmol m−2 s−1. The team found this in week 16; until the readings are converted, they compare LEDs with each other and cannot be compared with a published dose.
Section07
## Proof of Concept
The purpose of this section is to show a culture run completed end to end under the LPA, without yet claiming any relationship between intensity and production rate. That relationship is the subject of section 8.
Section08
## Level 2 Test: Intensity Variability
This is the test the LPA was built for. Holding wavelength fixed and varying intensity across the three calibrated tiers, does protectant production change with the intensity applied?
Section09
## Reproduction
### 9.1 Materials List
Full costing is kept in the LPA cost sheet, which feeds the cost analysis in the business plan.
[FOLD] Bill of materials11 lines, costing incomplete
Twelve LEDs of each colour go into the array, picked from twenty of each and measured one by one (4.3). The roll of solder is shared with the team’s other instruments. Unit costs and suppliers are not on record yet.
[TABLE] Table 4 Bill of materials
| Component
| Part number / spec
| Qty
| Unit cost (TWD)
| Total (TWD)
| Supplier
| Green LED
| —
| 12
| —
| Red LED
| —
| 12
| —
| MOSFET
| —
| 3
| —
| Microcontroller
| Arduino Uno R4 WiFi
| 1
| —
| Perf board
| 160 × 100 mm in the CAD
| 1
| —
| Power supply
| 5 V
| 1
| —
| Hook‑up wire
| 20 AWG jumpers, 10 cm
| 12
| —
| Solder
| —
| 1 roll
| —
| Heat‑set inserts
| —
| Screws
| —
| Filament, PLA
| Bambu Lab PLA Basic, 1.75 mm, 1 kg spool
| 1
| 355.99
| —
| Total
| —
[FOLD] Printed parts6 parts
[TABLE] Table 5 Printed parts
| Part
| Material
| Filament (g)
| Infill
[IMG]
LPA_Box
| Black PLA
| —
[IMG]
Bottom_Plate
| Grey PLA
| —
[IMG]
Tube_Holder
| Black PLA, 4 wall loops (5.4)
| —
[IMG]
LED_Holder
| Black PLA
| —
[IMG]
Left_C
| Grey PLA
| —
[IMG]
Right_C
| Grey PLA
| —
#### Equipment
Lux meter, 3D printer, soldering iron, calipers, and the printed sensor fixture used for LED matching.
### 9.2 Assembly Guide
Until it is written, Figure 16 shows how the parts stack in the finished instrument, and Figure 14 lays them out one by one.
### 9.3 Downloadable Blueprints
The CAD files below are numbered as in Figure 14. They are STL meshes in millimetres, in the instrument's own coordinates, so they open already assembled.
[FOLD] The six STLsone per printed part
- 1
Base Plate
Part Bottom_Plate
STL 196 KB
[IMG]
- 2
Left
Part Left_C
STL 140 KB
[IMG]
- 3
Right
Part Right_C
STL 143 KB
[IMG]
- 4
Box
Part LPA_Box
STL 159 KB
[IMG]
- 5
LPA Body
Part LED_Holder
STL 196 KB
[IMG]
- 6
Tube Insert
Part Tube_Holder
STL 196 KB
[IMG]
Section10
## References
The LPA is not a new idea. Illuminating a plate of cultures from below with per‑well control is the Light Plate Apparatus pattern from the optogenetics literature; our LPA follows that pattern and is named after it. What we added is the dual‑wavelength column layout and the resistance‑matched LED selection, in an enclosure sized for our own tubes.
The biology is the CcaS/CcaR green/red switch, also from the literature, not designed here. Our dose target comes from the Castillo‑Hair characterisation of that system, whose half‑maximal point is 4.66 µmol m−2 s−1.
↑↓ move ↵ go esc close
