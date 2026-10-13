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
Photometer
It never opens the loop
How it reads a culture
- 600nmamber LED
- 0.2mmpath length
- 400hunattended run
- 2,132points logged
01Sampling
In the line
The culture never leaves the loop: it flows through a cuvette 0.2 mm thick and straight back to the reactor. Every reading is taken through the glass, on culture that is still moving.
02Amber LED
One source
A single amber LED at 600 nm, the wavelength optical density is defined at, fires down the optical axis. Everything below is what happens to that one beam.
03Beam conditioning
Gathered into a column
The cone leaving the emitter is wider than the cuvette it has to cross. A focusing lens gathers it, and from here down the light is one tight column.
04Beamsplitter
Two paths
A 45° beamsplitter turns one beam into two. One crosses the culture. The other never meets it — it goes straight to a second sensor as a reference.
05The measurement
The ratio, not the reading
The sample beam crosses 0.2 mm of flowing culture and lands on one sensor; the reference has already gone straight to the other. The instrument records the ratio, so anything that changes the lamp divides out of it.
06The record
400 hours, unattended
2,132 points across the run, no samples withdrawn. The dip is a recirculation pump that failed overnight — the instrument caught it because it was still reading when nobody was watching.
Sample0.00lx
Reference0.00lx
Sample ÷ reference0.00×
Optical density, without opening the loop.
Loading 0%
Scroll
## Summary
The photometer reads OD600 from the flowing culture without ever drawing a sample.
A 600 nm LED shines through a 0.2 mm flow cuvette plumbed into the bioreactor’s lumen loop. A 90 : 10 splitter sends a tenth of the beam to a reference sensor before the sample, and reported OD600 is the ratio of the two sensors, so drift in the LED divides out. It ran in line for more than 400 hours, 2,132 points logged over the first 336, with nothing withdrawn from the culture.
The parts are estimated at $150 against the $15,000 BioDrop it was blanked against. The bill of materials in 1.1 is not yet costed.
Wavelength
  600nm
Path length
  0.2mm
Unattended run
  400h
Points logged
  2,132
## Results
- The long in-line run Measured Past 400 h at 22 °C; 2,132 points traced over the first 336 h, no sample withdrawn
- Bubble and outlier filter Measured 14-reading bursts cut at median ± 3·MAD; 28.6% rejected on day 10, under the 50% alarm
- The 10° tilt Observed Almost all bubbles left the cuvette within about a quarter of a second; horizontal and vertical builds trapped them
- Agreement with the BioDrop Partial Close once blanked against the nutrient medium instead of distilled water; no comparison is tabulated on this page
- The compact redesign Partial Its OD readings are reported to deviate little or not at all; it was not integrated into the bioreactor for lack of time
- More than one wavelength Untested Range sensors bought; no multi-wavelength source purchased, integrated or tested
Contents
- 01Final Product
- Material List and Pricing
- Final Photometer Assembly
- The Long Run, Traced
- 02Optical Design
- 03Mechanical Design
- 04Electronics and Firmware
- 05Calibration
- 06Simplified Photometer
- 07Specifications and Future Implications
- 08Limitations
- 09Design Files
- Files and Short Description
# RELEAF In‑Line Flow‑Cell Photometer
Part1
## Final Product
### 1.1 Material List and Pricing
The full bill of materials is below, itemised to the individual component with part numbers and unit costs in US dollars. The animation at the top of the page follows the beam through the optical parts; the pictures in the table are the parts’ own CAD models, in the animation’s colours.
[FOLD] Bill of materials18 parts, 3 groups
[TABLE] Table 1 Bill of materials, photometer
| Component
| Specification
| Unit cost (USD)
| Total cost (USD)
| Light path in the order the light meets it, as in Figure 6
[IMG]
LED
| 1× 600 nm
| –not costed yet
[IMG]
Paralleling lens
| –not costed yet
[IMG]
Beam splitter
| 90 : 10 split (2.2)
| –not costed yet
[IMG]
Flow cuvette
| –not costed yet
[IMG]
Lux sensor
| 2× GY‑302
| –not costed yet
| Electronics wired as in Figure 10
| Microcontroller
| 1× Arduino Uno Q
| –not costed yet
| PCB
| 2 × 8 cm
| –not costed yet
| Transistor
| 1× UTC PN2222
| –not costed yet
| Resistors
- 1× 330 Ω
- 1× 1.2 kΩ
- 1× 10 kΩ
| –not costed yet
| Wires
- 3× 12 in + 1 in 20 AWG black
- 3× 12 in + 1 in 20 AWG red
- 2× 12 in + 1 in 20 AWG green
- 2× 12 in + 1 in 20 AWG blue
- 1× 24 in 20 AWG red
- 1× 24 in 20 AWG black
| –not costed yet
| Heat shrink
| 2× 2.0 × 45 mm heat‑shrink tube
| –not costed yet
| 2510 connectors
- 2× 5‑pin female connector
- 4× 2‑pin female connector
- 2× 5‑pin male connector
- 4× 2‑pin male connector
- 18× terminal crimp pin
| –not costed yet
| DuPont connections
- 10× female DuPont crimp pin
- 2× 5‑pin female DuPont crimp‑pin housing
| –not costed yet
| Male header pins
| 10× bent male header pins (all connected together)
| –not costed yet
| Body and assembly the eight printed parts are in 9.1
[IMG]
Filament
| Black PLA and black TPU (soft)
| –not costed yet
| Fasteners and solder
- 4× 5 mm 10‑32 screws
- 2× 10‑32 Nylock
- 1× roll of solder
| –not costed yet
| Total sum cost
| –not costed yet
### 1.2 Final Photometer Assembly
We went through cycles of tuning to optimise the photometer, and the final setup we landed on is drawn in Figure 1. The photometer sits inside our larger bioreactor and lets farmers keep track of the bacterial density in it, so they are reminded when medium or a refill of our bacteria must be added to keep the bioreactor working.
We have since developed a more compact, simpler design, and shown that its optical‑density readings deviate little or not at all. We lacked the time to integrate it into our commercial bioreactor, so the final assembly reported here is our second‑to‑last photometer design. The compact one is Part 6.
- Base
- Body
- Sensor frame
- Sensor frame cover
- Body cover
- Body cover, small
- Lens holder
- LED mount
glass sensor boards
[IMG] The finished photometer upright on its square printed base, covers on, wired to an Arduino on the bench
As built
[CAPTION] Figure 1 The final assembly, exploded The eight printed parts, with the glass and sensor boards in place, drawn from the CAD with the covers pulled forward, the LED mount lifted and the base lowered; the numbers match the design files in 9.1. The photo is the build itself, on the bench.
### 1.3 The Long Run, Traced
400hContinuous run
2,132Points traced (first 336 h)
0Samples withdrawn
The final assembly’s long run: wild-type Bacillus subtilis 168 at 22 °C, read in line through the flow cell, so no sampling event interrupted the culture and nothing was removed to measure it. The run passed 400 hours. Its first 336 hours, 2,132 logged points, are traced in Figure 2 from the live dashboard.
Elapsed336.0h
OD6001.387
PhasePlateau
[CAPTION] Figure 2 The traced record OD600 against elapsed time, traced from the live dashboard at 14 d 0 h 11 m: 336 h and 2,132 points. The band is the raw scatter and the line its median. The traced endpoint, OD600 1.3866, matches the 1.3864 shown on screen.
[IMG] The photometer standing in the loop inside a glass incubator, beside a bottle of medium on a stirrer, with its wiring on a breadboard
[CAPTION] Figure 3 In the incubator The final assembly standing in the loop beside the medium bottle during the long run, wired on a breadboard
[IMG] The OD600 dashboard on a laptop at 1 day 6 hours and 291 points
[CAPTION] Figure 4 Hour 30 The dashboard at 1 d 6 h 46 m and 291 points: OD600 0.4834 from a 195.54 lx sample against a 26.67 lx reference, a ratio of 7.33×.
Late in the run the trace dropped sharply. We first guessed contamination, a second organism taking over, and that was wrong: the recirculation pump had failed, which a teammate confirmed on inspection and replaced the same evening (notebook, week 22). The pump failed with nobody watching, and the trace recorded it. Optical density alone cannot separate lysis from sporulation or settling, and the flush and reblank that would have told fouling from biology was never run, so the shape of the curve is reported as observed.
Part2
## Optical Design
### 2.1 Wavelength Selection
We chose to work at 600 nm for three key reasons.
- It is the field standard. OD600 is the standard measure of bacterial density in culture. Matching that wavelength makes our readings comparable with the BioDrop, with published growth curves, and with anything a judge or another lab would expect from our photometer. Every report would have had limitations had we worked at 700 nm.
- It measures turbidity. Little absorbs 600 nm light, but cells scatter it strongly. Our OD600 readings are not really measuring absorbed light; they are purely turbidity. We measure how many bacteria are in the bioreactor by how much light scatters off the cells, not by what light they absorb. At 600 nm we are clear of protein and nucleic‑acid absorbance in the UV, and of most of the medium’s absorbance, which is in the blue, so 600 nm isolates the value we want to measure.
- It does not cross‑talk with our optogenetic circuit. Our CcaS/CcaR system is actuated by green and red light. A light that comes on every 10 minutes, over runs of days, weeks or even months, would be a major problem if it actuated the circuit. 600 nm sits in a strong amber, right in the middle of the green (~535 nm) and red (~672 nm) peaks of CcaS, so the photometer does not accidentally switch on protectant secretion.
[CAPTION] Figure 5 Why 600 nm The photometer’s wavelength sits midway between the two CcaS peaks that switch the optogenetic circuit, and clear of the UV and blue, where the cells’ proteins and nucleic acids and most of the medium absorb.
### 2.2 Beam Splitting and Reference
The beam splitter splits the light path in two: 90% of the light goes straight through, and 10% is sent off at a 90° angle. The stronger beam passes through the flow cuvette, which holds the continually flowing medium, before it reaches its lux sensor. The point of the split is to account for changes and degradation in the light source itself.
The bioreactor and the photometer are meant to run for long periods and keep their readings accurate throughout, and an LED degrades over years. The splitter gives us a reference sensor that measures 10% of the light directly from the source, to compare against the sample sensor, which then only has to measure the absorbance (in fact the scattering) of the bacteria in solution. These calculations are built into our software, which keeps the interface easy to navigate for a small‑scale farmer.
[CAPTION] Figure 6 Optical path The 10% reference is split off before the sample, so any drift in the LED appears in both readings and divides out of their ratio. Not to scale; Figure 9 shows the same path in the CAD, with the reference sensor on the same side.
Part3
## Mechanical Design
### 3.1 Design Requirements
Our photometer took many iterations, and had to overcome several design challenges before it was usable in testing. Three requirements shaped it.
#### No bubbles in the beam
The flow cuvette had to stay free of bubbles for most of the testing period for the data to be reliable.
#### Blind to room light
Neither the sample nor the reference lux sensor could be affected by changes in external lighting, so the photometer collects data in any environment.
#### Stable, with good tolerances
The structure had to be stable and well toleranced, so it assembles the same way every time, without inconsistency in build quality or in the data while running.
### 3.2 Modelling Approach
While modelling the photometer in 3D we planned a clear path of improvement. We knew it needed darkness, an enclosed space and a strong structure, but we also knew how much modifiability and access mattered, especially early in the design process.
So we began with a loose, high‑tolerance system that could be tightened and loosened by hand to shift the positions of the sensors, lenses and other components. It was also completely open to outside light, so that we could keep adjusting it easily. To test, we switched off the room lights and closed every door and window, so that external light could not skew the measurements (Figure 7).
Once testing was easy, we moved to larger, more specific design changes that locked the parts in place, and began to enclose the light path in a dark chamber. This brought the mechanism closer to the final design.
[IMG] The first printed photometer: a black rail on the bench with the LED, lens, sensors and wiring mounted along it, open to the room
First Open and adjustable
[IMG] The V4 photometer: the enclosed black column with its covers on, standing on its angled base, wired to the Arduino
Then Locked and enclosed
[CAPTION] Figure 7 Open, then enclosed The first printed build: every component slides along one rail and is set by hand, with the light path open to the room. V4: the parts fixed at their positions and the light path under snap‑in covers from the LED to the sample sensor.
### 3.3 Mounting and Tolerances
In the final design we still wanted easy access to the inside, in case the light path shifted or a sensor broke and needed replacing, so the enclosure was designed to come off smoothly.
[IMG]
4
[IMG]
5
[IMG]
6
Snap‑on covers. An indentation runs along the whole photometer body, and the covers snap onto it. A cover comes off easily whenever the photometer needs changing (parts 4–6 in Figure 1).
[IMG]
1
[IMG]
2
Base and body printed apart. To get the best print quality, we did not print the photometer body as one piece: printed on the diagonal it would need a lot of support material, which makes the dimensions inaccurate and the whole system visually unappealing. We separated the base from the body instead, and joined them at a diagonal insertion point, which fixed both problems (parts 1 and 2).
[IMG]
3
[IMG]
7
Two filaments for a tight fit. In many of our earlier iterations, the seats for the beam splitter, paralleling lens and lux sensors were all too loose (they are in parts 3 and 7). Tightening them in large steps risked wasting whole prints, so we combined two filaments: PLA, a cheap, hard plastic, for the main structure, and TPU, a flexible, high‑friction rubber, lining the slots of the smaller components inside. The TPU holds each component tightly without damaging it, and the change gave us a large jump in data accuracy across long test runs.
### 3.4 Orientation
Another important decision was the orientation of the whole photometer. We began with a horizontal design, in which the culture crossed the measuring region in the horizontal plane. We quickly found that bubbles got trapped there very easily, so we moved to a vertical, standing design to let them travel through the flow cuvette more easily.
That change did not make the drastic difference we had hoped for. While adjusting the standing design, however, we found that tilting it at a 10° angle made almost all of the bubbles leave within about a quarter of a second.
The tilt has stayed with the photometer through every later iteration, and has not yet proved unreliable.
[IMG] The first build lying flat on a lab bench: a black printed rail with the LED lit at one end, wired to a breadboard, beside a gloved hand holding a sample tube
01 Horizontal
Bubbles got trapped in the flat measuring region
[IMG] The second build standing upright in a darkened room: a vertical printed column on a square base, its LED glowing amber near the top, tubing and wires around the base
02 Vertical
It helped, but not the drastic difference we had hoped for
[IMG] The third build, the angled stand: the column on its printed stand with the LED lit at the top, wired to an Arduino beside it
03 Tilted
At 10°, almost all bubbles left within about a quarter of a second
[IMG] The final design in CAD: the enclosed column with its covers on, leaning on its wedge-shaped base
04 Final CAD
The tilt kept through every later iteration
[CAPTION] Figure 8 Four builds Horizontal, vertical, tilted, and the final CAD, in the order this section tells them; under each, what it showed.
### 3.5 Individual Part Breakdown
The photometer can be seen as three distinct portions (Figure 9).
- The LED housing compartment, where the 600 nm light is fired toward the sensors. It needed little change over our four iterations, apart from moving to a dedicated LED holder that holds the LED more securely in place.
- The light‑travelling region, which holds the paralleling lens and is the longest portion of the photometer. Most of it, however, is empty space, needed for the light to reach the focus of the lens at the right position.
- The last portion, the most complicated region. It holds four things, here in the order the light meets them (section 2.2 has more on this portion):
- the 2 mm light slit, which narrows the light reaching the sensors for more specific and accurate readings;
[IMG]
the beam splitter, which splits the one light path in two: one continues through the flow cuvette and solution into the sample lux sensor, the other turns 90° with 10% of the light into the reference sensor, with no cuvette in its way;
[IMG]
the flow cuvette;
[IMG]
and the lux sensors themselves.
[CAPTION] Figure 9 Three portions, to scale The assembled photometer from the front, drawn from the CAD with the housing see‑through and the beam in amber. Lengths are measured on the CAD: the light‑travelling region is longer than the other two portions together.
Part4
## Electronics and Firmware
### 4.1 Breadboard, Sensors, LED
Our final photometer does not use a breadboard: it uses a soldered PCB connected to an Arduino Uno Q. The Uno Q is a small computer in itself, so it runs our code from a power supply alone, with no computer plugged in. That takes us one step closer to a cheap, accessible bioreactor, and removes one failure point from the photometer’s sensing: a computer‑to‑Arduino cable coming unplugged.
One shared ground. The Arduino has a limited number of ground ports, so the ground wires of the sensors, the LED and the transistor are all joined together.
A transistor for the LED. The transistor lets us give the LED a different voltage from the sensors, and turn the LED on and off without disturbing the running sensors. We want this because the LED’s voltage may need to rise as we scale up the bioreactor, and it is safer and more sustainable for the bioreactor not to keep the LED on around the clock. The transistor has three terminals: collector, base and emitter. The LED’s ground wire connects to the collector. Arduino pin D3 connects to the base through a 1.2 kΩ resistor, and the base also passes through a 10 kΩ resistor to join the emitter; together they meet the sensor ground wires at one Arduino ground port.
Two sensors on one bus. With a sample sensor and a reference sensor, we connect the two SDA pins together and the two SCL pins together, and run each pair to the same Arduino port. This lets one microcontroller read both sensors at the same time; the firmware reads them at separate addresses to tell sample from reference.
Two supply voltages. The LED currently takes 5 V, which may need to rise in future work once the bioreactor scales up, while the sensors need 3.3 V to run smoothly. So the two lux sensors share one power input, and the LED’s stays separate.
After all the wiring on the PCB, six wires lead out: SCL, SDA, D3, 3.3 V, 5 V and ground, which makes the last step of setting up the photometer very simple (Figure 10).
Highlight
[CAPTION] Figure 10 Wiring, as 4.1 describes it D3 switches the LED through the PN2222; both GY‑302 sensors share 3.3 V, SDA and SCL; every ground meets at one Arduino ground pin. The joins sit on the soldered PCB. Not drawn: the 330 Ω resistor in Table 1, and how two sensors on one bus get separate addresses.
### 4.2 Data Acquisition and Filtering
A bubble‑and‑outlier rejection filter runs on the incoming stream of readings, and the dashboard reports the rejection rate live.
A burst of fourteen. We take 14 lux readings in a short burst. If a bubble drifts past, one or two of them shoot far higher than they should. We cannot use the average of the 14, because the bubble drags the average upward, but the median (the middle value) rarely moves. That makes the median a bubble‑proof estimate of the true value.
The spread. With the median of the burst found, we take the 13 distances of the points from the median. The median of those distances, the MAD (median absolute deviation), says how much the clean readings wobble: tight readings give a low MAD, and loose ones a high one. The trick is the same in both steps: a median of the distances cannot be inflated by one giant bubble.
The cut. The filter rejects every reading beyond the median ± 3·MAD, and the rejected points are removed from the OD measurement, keeping the data clean. The fraction thrown out is reported as the rejection percentage.
1
Take 14 lux readings in a burst
2
Median of the burst, the bubble‑proof centre
3
Median of the distances from it, the MAD
4
Reject beyond median ± 3·MAD
One burst, with the bubbles under your hand Fourteen readings, the mean and the median, and the band at median ± 3·MAD
MedianMeanKeptRejectedKept band, median ± cutoff
Bubble size How many bubbles Cutoff × MAD
Mean
  29.04
Median
  26.78
MAD
  0.105
Rejected
  1 / 14
The mean has been pulled 2.28 lux off the clean readings; the median stayed with them, within 0.02 lux. The bubble falls outside median ± 3·MAD and is thrown out.
[CAPTION] Figure 11 Why the median Fourteen readings, with bubbles you control. The mean chases the bubbles while the median stays with the clean readings; that gap is the whole reason the filter works. Set the bubbles to zero and a clean burst can still lose a reading, because on a burst of fourteen the MAD is itself a noisy estimate.
#### Excess‑bubble alarm
If the rejection percentage exceeds 50% of all readings, the software shows the number in red and tells the user there are excessive bubbles to fix in the bioreactor.
[IMG] The live OD600 dashboard on a laptop screen at 10 days 4 hours 9 minutes: current OD600 1.4746, sample 120 lux, reference 25.83 lux, a sample-to-reference ratio of 4.64 times shown in red against an expected 10 to 1, a bubble and outlier reject rate of 28.6 percent, 1,574 data points, and the growth curve up to about 244 hours
[CAPTION] Figure 12 The rejection rate, live The long run’s dashboard ten days in (10 d 4 h 9 m, 1,574 points), its rejection rate outlined: 28.6%, under the 50% alarm and so not in red. The red figure beside it is the sample‑to‑reference ratio, 4.64× against the dashboard’s expected ≈ 10:1.
### 4.3 OD Calculation
Each sensor returns an illuminance in lux. The sample sensor reports the light transmitted through the culture; the reference sensor reports the light diverted before the sample. Reported OD600 comes from the ratio of sample to reference, which normalises every reading against the LED’s output and so corrects for drift in that output over a multi‑week run, if the LED degrades.
Step by step: at the start of a live reading, we take a blank and calculate K, the sample sensor reading through the cuvette and medium with no bacteria, divided by the reference sensor reading, which passes through neither the cuvette nor the medium.
K= SblankRblank
With K captured, every live reading is converted with:
OD600= −log10( SliveK · Rlive )
S is the sample sensor and R the reference sensor, both in lux.
Part5
## Calibration
### 5.1 TiO2, the First Standard
A photometer is only worth the reference it has been checked against. We calibrate against inert mineral suspensions rather than culture, because a growing culture changes while it is being measured: cells divide, settle and lyse, so no two instruments ever read quite the same sample. A suspension of hard, non-absorbing particles holds still, scatters in proportion to how much of it is there, and can be added in weighed steps — which gives a ground truth independent of both instruments, instead of only ever comparing one machine against another.
Our first calibration used titanium dioxide. The iGEM protocol specifies silica, but TiO2 was on the shelf, behaved almost identically suspended in 1% SDS, and cost a fraction as much, so we used it to answer the first question — does this instrument respond linearly at all? — and deferred the standard material. It does: across two runs the raw, uncalibrated output tracked the BioDrop to a median paired difference of 3.8%, with both instruments regressing against TiO2 mass at R² > 0.999. No correction transform was needed, and none has been applied since. Those two runs, their two excluded points and their open questions are written up in full as photometer cycle 6 on the bioreactor page.
What that run could not do is say anything above OD 1.9, or about any build but the complex one. Both gaps are what the silica run was for.
### 5.2 SiO2, the Standard Material
On 10 October we ran the calibration the protocol actually calls for. Silica was added to 500 mL of 1% SDS in 2.5 mg steps from 2.5 to 100 mg, forty points in all, stirred continuously and circulated through the same loop the earlier runs used. At every step the suspension was read three times over: on the BioDrop, on the complex photometer, and on the slim build described in the previous section. This is the first run that puts all three on one series, which is what makes the comparison below possible at all.
#### Where the reference runs out
The first thing the run established is a limit of the reference instrument, not of ours. The BioDrop’s direct channel climbs normally to about OD 2.3 and then stops: from 70 mg onward it returns exactly 2.50 at every single point, which is a ceiling, not a measurement. To carry the series past it we read dilutions instead — a two-fold dilution from 22.5 mg and a four-fold from 50 mg — and multiplied back. Every BioDrop value plotted above OD 2.5 is therefore reconstructed, and the reconstruction has its own error:
- In the 22.5–50 mg window we have both a direct reading and a two-fold one for the same sample. They disagree by up to 14% — at 35 mg the direct channel says 1.536 and the dilution says 1.326.
- Above 50 mg the dilution-corrected BioDrop falls as silica is added at 7 of its 20 steps, the worst by 0.34 OD at 80 mg. A weighed, inert scattering standard cannot become less turbid when more of it is added, so those steps are measurement error rather than sample behaviour.
This matters for reading everything that follows. Below OD 2.5 the BioDrop is a reference. Above it, the BioDrop is an estimate, and a noisy one — so a disagreement up there does not automatically belong to our instrument.
[CAPTION] Figure 13 All three against the standard. OD600 against silica added. The complex photometer sits on the BioDrop’s trace until about OD 2.5 and then reads lower; the BioDrop’s own trace turns jagged past 50 mg, where it is reconstructed from dilutions; the slim build rises smoothly but on a compressed scale.
#### The complex photometer against the reference
Over the range where the BioDrop is measuring rather than estimating, the agreement is as close as the TiO2 run suggested it would be, and now holds over a range more than twice as wide:
[TABLE] Table 2 Complex photometer against the dilution-corrected BioDrop, SiO2 series
| Range
| Slope
| Intercept
| R²
| Mean difference
| OD 0–1.0
| 1.001
| −0.123
| 0.988
| −0.12
| OD 0–2.5
| 0.995
| −0.074
| 0.982
| −0.08
| OD above 2.5
| 0.594
| +0.944
| 0.796
| −0.33
A slope of 0.995 with an intercept of −0.07 is, for practical purposes, a one-to-one instrument: up to OD 2.5 the photometer reports the BioDrop’s number without any transform applied to it. Above OD 2.5 the slope drops to 0.59 and the photometer reads about 0.33 OD low.
[CAPTION] Figure 14 Against the line of identity. Filled points are where the BioDrop still has a direct reading; open points are where its value is reconstructed from a four-fold dilution.
#### Whose error is it, above OD 2.5?
The honest answer is that this run cannot fully separate the two, and we want to be clear about that rather than claim the flattering reading. What it can do is ask which instrument better tracks the one quantity neither of them measures — the mass of silica actually weighed in. Over the 50–100 mg span, against that ground truth:
[TABLE] Table 3 Each instrument against weighed SiO2 mass, 50–100 mg
| Instrument
| R² vs mass
| Residual scatter
| Steps that decrease
| Complex photometer
| 0.990
| 0.035 OD
| 0 of 20
| Slim photometer
| 0.993
| 0.007 OD
| 1 of 20
| BioDrop, reconstructed
| 0.878
| 0.165 OD
| 7 of 20
Against the standard itself, both of our builds are the better-behaved instruments in that span: the complex photometer scatters about its line five times less than the reconstructed BioDrop does, and it never once reads lower when more silica has been added. So the gap above OD 2.5 is not simply our instrument failing — a real part of it is the dilution step in the reference.
That said, we are not claiming the gap is all the reference. Compression at high turbidity is exactly what a single-pass absorbance measurement is expected to do, as multiply-scattered light finds its way to the sample sensor and the relationship between transmission and density stops being logarithmic. Both effects point the same way and this dataset cannot weigh one against the other. Settling it needs a reference that does not saturate at 2.5 — a shorter path length, or a reference instrument with more headroom — which is the next calibration we would run.
What the run does settle is the working range. Up to OD 2.5 the complex photometer can be read as an absolute OD600 instrument. Above that it is still strictly monotonic and still linear in true concentration, so it remains usable for following a culture, but its numbers should be treated as an index of density rather than as OD600 values until the high range has a reference worth checking against.
#### Resolution
Linearity says where the readings sit; it says nothing about how finely the instrument can tell two concentrations apart. Taking the point-to-point scatter of each series — which, over a smoothly rising standard, is dominated by measurement noise rather than by any real curvature — and dividing by how much each instrument’s reading moves per milligram of silica gives the smallest difference each one can actually resolve:
[TABLE] Table 4 Smallest resolvable change, expressed as SiO2 mass
| Instrument
| Noise
| Low range
| High range
| Complex photometer
| 0.010 OD
| 0.21 mg
| 0.46 mg
| Slim photometer
| 0.004 OD
| 0.49 mg
| 0.78 mg
| BioDrop
| 0.106 OD
| 2.20 mg
| 3.60 mg
The complex photometer resolves a change about ten times smaller than the reference does on this series. That is less surprising than it sounds, and it is worth being precise about why: the BioDrop is a far better instrument that was being used here in a far worse way. It reads a hand-pipetted cuvette once per point, and above its ceiling a hand-made dilution of one; our photometer reads a continuously stirred, flowing loop and returns the median of a 14-reading burst with outliers rejected. The comparison is not "which instrument is better" but "which measurement is more repeatable", and for following one vessel over time, the second question is the one that matters.
### 5.3 Simplified Against Complex
The slim build was the point of running all three instruments on one series. It drops the paralleling lens and the beam splitter and couples the LED to the cuvette through an optical fibre instead, which is what removes the long light-travelling region and most of the cost. The question was what that costs in measurement.
Two slim designs are described on this page, and they are not the same instrument. The design-changes section keeps the beam splitter and replaces only the lens. The unit measured on 10 October has the splitter removed as well, so it is single-beam: it carries no reference sensor and has nothing to normalise against LED drift. Everything below is measured on the second. Which of the two is carried forward is not yet decided, and the limitation at the end of this section follows from that choice.
The headline result is that the slim build is linear across the entire range, and slightly more smoothly so than the complex one: R² = 0.992 against silica mass over the full series, against the complex build’s 0.974, and it reverses direction only once in 39 steps, by 0.013 OD. Plotted against the complex photometer, the two builds fall on a single straight line.
[CAPTION] Figure 15 One line, one scale factor. The slim build’s reading against the complex build’s for the same forty samples.
That straight line is the whole finding, and it has two halves. The good half: with R² = 0.993 between them, the slim build is not measuring something different or something noisier — it is measuring the same thing on a different scale, and a single constant converts one to the other. Rescaling the slim reading by 5.57×, less a 0.07 offset — OD = 5.573 × r − 0.073 — brings it onto the OD600 axis, and once rescaled its mean difference from the BioDrop below OD 2.5 is −0.10, against the complex build’s −0.08. In agreement with the reference, the two builds are near enough indistinguishable.
The costly half: that scale factor is a six-fold compression. Across the whole series the slim build moves only from 0.03 to 0.60, where the complex one moves from 0.05 to 3.17. It is quieter in absolute terms — 0.004 OD of point-to-point scatter against 0.010 — but not quietly enough to pay for the lost span, so after rescaling it resolves about twice as coarse a change: 0.49 mg against 0.21 mg of silica at the low end. It is stable, and it is blunt.
This is the sense in which the slim build is “more stable but less sensitive”, and the data lets us say exactly how much of each: it buys whole-range linearity and about two-thirds off the length and roughly $70 off the cost, and it pays for that with half the resolution and the loss of the reference beam.
[TABLE] Table 5 The two builds on the 10 October SiO2 series
| Complex
| Slim
| Optical path
| Dual beam: lens, splitter, sample and reference sensors
| Single beam: fibre-coupled LED, sample sensor
| Reads OD600 directly
| Yes, to OD 2.5
| No — needs a 5.57× factor
| Agreement with BioDrop, OD ≤ 2.5
| −0.08 OD
| −0.10 OD
| Linearity vs mass, full range
| R² 0.974
| R² 0.992
| Resolution, low range
| 0.21 mg
| 0.49 mg
| Corrects for LED drift
| Yes, reference beam
| No
### 5.4 Which Build to Use
The two are not competing versions of one instrument; this run shows they are suited to different jobs, and the choice follows from the run you intend to do.
Use the complex photometer for a bioreactor run.
  It reads true OD600 without a conversion up to OD 2.5, resolves twice as finely, and — the reason it exists — its reference beam normalises every reading against the LED’s own output. Over a run of several hundred hours that is not a refinement; it is what keeps a slow drift in the source from being recorded as growth.
Use the slim photometer where cost and size decide.
  For a teaching lab, a replicate vessel, or anywhere a second instrument is better than none, it is about two-thirds shorter, roughly $70 cheaper, simpler to assemble, and linear across a wider range than the complex build. It needs its scale factor applied and it should be blanked more often, since it has no reference beam to lean on.
One caveat applies to both. The 5.57× factor and the OD 2.5 working limit come from a single run on one scattering standard. Silica and bacteria do not scatter identically — cells are larger, softer and change shape as they grow — so these constants describe the instruments, not a conversion that can be dropped onto a culture unchecked. Before either build is trusted quantitatively on culture, the same series needs repeating against B. subtilis at known cell densities.
Part6
## Simplified Photometer
### 6.1 Rationale
We believe our current photometer still has room for improvement. The flow cuvette, which lets the photometer take live, continuous data directly from the bioreactor, raises the cost of the whole system by a large margin. To make the bioreactor more accessible, we began reducing the cost of the rest of the photometer. Its other costly components are the beam splitter and the paralleling lens. The beam splitter is a must‑have, because it ensures long‑term use without imprecise readings, which leaves the paralleling lens to change.
[IMG]
Stays Flow cuvette
Raises the cost by a large margin, and is what lets the photometer read the loop live
[IMG]
Stays Beam splitter
A must‑have: it keeps long runs free of imprecise readings
[IMG]
To change Paralleling lens
Replaced by shaping the LED’s own output: a sanded flat cap, or another type of LED (6.2)
[CAPTION] Figure 16 Which costly part goes The three costly optical parts as 6.1 weighs them, pictured from the CAD: the cuvette and the splitter stay, which leaves the lens.
### 6.2 Design Changes
We used a paralleling lens to straighten the light path of the LED. By changing the shape of the LED’s output itself instead, either with a sanded flat cap or by switching to a different type of LED, we believe we can shrink the photometer by ⅔ and cut its cost by $70. The light‑travelling region described in 3.5 is the stretch the lens needs for its focus (Figure 9).
Part7
## Specifications and Future Implications
[FOLD] Specifications13 rows
Specifications
Measures
  OD600, in line and continuously, with no sample drawn
Light source
  600 nm LED at 5 V, switched from pin D3 (2.1, 4.1)
[IMG]
Beam split
  90 : 10, reference taken before the sample (2.2)
[IMG]
Flow cuvette
  0.2 mm path, in the lumen loop
[IMG]
Slit
  2 mm (3.5)
Sensors
  2× GY‑302 lux sensors at 3.3 V on one SDA/SCL pair (4.1)
[IMG]
Controller
  Arduino Uno Q, runs with no computer attached
Sampling
  About every 10 minutes (2.1)
Filtering
  14‑reading bursts, cut at median ± 3·MAD, alarm above 50% rejected (4.2)
Orientation
  Tilted 10° to clear bubbles (3.4)
Build
  Eight printed parts, PLA with TPU‑lined seats (3.3, 9)
[IMG]
Longest run
  Past 400 hours (1.3)
### 7.1 Future Use
Our photometer can help any student or professor measure the optical density of their solution at 600 nm, live, during growth runs. It removes the reliance on sampling entirely, and with it the chance of human error in that whole process. These benefits come at a relatively low cost of around $150, small beside the prices of commercial laboratory spectrophotometers: the BioDrop we compared our photometer against during calibration costs $15,000.
$150
Our estimate for the whole photometer, against $15,000 for the BioDrop we compared it with.
Every part is listed in 1.1 and every printed part downloads from 9.1, so a lab that needs in‑line OD600 at 600 nm can build this one instead of buying a spectrophotometer.
Part8
## Limitations
### 8.1 Spectrophotometer
Our photometer was designed purely to measure the optical density of the bacteria in our medium, live, at 600 nm. It was not originally planned to measure across wavelengths, so integrating a light source with several colours, or with light outside the visible spectrum, would mean adapting the design. It could likely be converted easily for other single‑wavelength measurements, but it would fall short where several wavelengths must be measured at once.
We have bought sensors that capture a range of wavelengths. A light source able to emit several wavelengths has not been purchased, integrated or tested, so multi‑wavelength measurement is untested.
### 8.2 Assembly/Blanking Process
To keep the photometer small, and for lack of testing time, we could not test different LED clip holders, so the LED does not always point perfectly straight when it is placed in its socket. That does not mean the readings will be off: by turning the LED in its clip during assembly, you can still find an orientation in which the light path lines up with the sensors. It only adds a few minutes to the assembly.
[IMG] The 600 nm LED seated in its black clip holder, rendered from the CAD
The LED in its clip
seats in →
[IMG] The printed LED mount, rendered from the CAD
The LED mount (part 8, 9.1)
[CAPTION] Figure 17 Where the LED is turned The LED, its clip and the mount the clip sits in, from the CAD. Not to scale: in the CAD the clip is about 8 mm across and the mount about 60 mm. During assembly the LED is turned in its clip until the light path lines up with the sensors.
Part9
## Design Files
### 9.1 Files and Short Description
The eight printed parts, numbered as in Figure 1. Each STL downloads under a descriptive name.
[FOLD] The eight STLsone per printed part
- 1
Base
Structural support that angles the photometer for efficient bubble travel.
STL 186 KB
[IMG]
- 2
Body
Body structure of the photometer that all components attach to.
STL 168 KB
[IMG]
- 3
Sensor frame
Structure that holds the beam splitter and both sensors.
STL 194 KB
[IMG]
- 4
Sensor frame cover
Cover that blocks external light from hitting the sensors.
STL 201 KB
[IMG]
- 5
Body cover
Cover that blocks external light along the light path.
STL 57 KB
[IMG]
- 6
Body cover, small
Cover that blocks external light along the light path.
STL 133 KB
[IMG]
- 7
Lens holder
Holder for the paralleling lens, for a parallel light path.
STL 58 KB
[IMG]
- 8
LED mount
Structure that holds the LED.
STL 63 KB
[IMG]
[FOLD] Print settings7 rows
Print settings
From the slicer project in the doc’s assembly guide (Bambu Studio).
Printer
  Bambu Lab X1 Carbon, 0.4 mm nozzle, textured PEI plate
Profile
  0.20 mm Standard @BBL X1C
Layer height
  0.2 mm, first layer 0.2 mm
Sparse infill
  20% gyroid
Supports
  On: normal (auto), 30° threshold
Top surface
  Line width 0.25 mm
Filaments
  PLA Matte, TPU 95A and PETG-CF, on three plates. The guide prints plate 1 (the lens holder and sensor frame) in PETG, CF optional, and paints TPU onto its seats.
↑↓ move ↵ go esc close
