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
# Digital Twin
[IMG] Digital Twin. The perfusion rig on a bench with pump, tubing and a wired Arduino board, beside a laptop showing the twin's dark dashboard.
[FOLD] Contents
On this page
- 1Introduction
- 2What the reactor measures now
- Within the bioreactor
- Outside the reactor
- 3Results
- Every run so far
- R1 Module pressure drop
- R2 Photometer calibration
- R3 Trust layer
- R4 Field sensors
- R5 Batch forecasting
- R6 Plate-to-reactor prior
- 4Registered forecast
- 5The software that runs the reactor
- The rig app
- The next interface
- 6Gaps and limits
- Must have, yet to have
- Current limits
- 7For other teams
## 1.Introduction
Our bioreactor will run for weeks beside farmland, far from a lab. Nobody will be there to take samples or read every value, so the twin has to turn the instrument readings into a recommendation a farmer can act on.
Without manual sampling, the reactor's own instruments are the only record of the batch, and they drift as they wear. On the 434-hour run the OD channel failed, and the twin's trust layer flagged the reference beam 26.7 hours before the OD readings became unusable.
The twin reads three kinds of data. Regional data (the weather forecast, crop-stress risk and the Geospatial Analysis maps) show when and where crops will come under stress. Field sensors beside the crop measure leaf temperature, leaf wetness, and air temperature and humidity, which show what the plants are experiencing at that moment and check the regional forecast against conditions on site (R4). Local data from BR-01 show how much biomass is in the loop, whether it is growing, whether the membrane still passes permeate, and whether those readings can be trusted (R3).
From these it works out when to switch on green light to start protectant production, which protectant, and how much. Induction makes sense when the field is heading into stress and the culture can respond, and the forecast (R5) and growth prior (R6) say whether the batch will be ready in time.
[FOLD] What is a digital twin?
A digital model represents a physical system but is updated by hand. A digital shadow receives live data automatically, but changes back to the system still need a person. A digital twin closes the loop: data flows automatically from the system to the model and back. The line between the three is not always clear; what separates them is whether information moves on its own.
## 2.What the reactor measures now
Every value is tagged by how it was obtained:
- in-line A sensor on the loop of culture pumped around the bioreactor.
- commanded Set by the operator (the farmer).
- soft Calculated from in-line readings.
- bench tested Measured on a bench, not yet in the field or on the rig.
- planned Not yet collected.
- external Data pulled in from outside the rig.
The rig app logs plain CSV with a fixed header and follows no synthetic biology standard such as SBOL. In the log only temperature carries its source, in temp_src; the columns are under What survives which failure.
### Within the bioreactor
[TABLE] Measured channels and actuators of BR-01
| Channel
| Instrument
| Purpose
| Provenance
| OD600
| Photometer: 600 nm amber LED, 2 mm flow cuvette, sample and reference lux sensors
| Biomass
| in-line
| pH
| Arduino pH probe
| Growth and secretion conditions; alarm
| in-line
| Pressure × 3
| Transducers on lumen in, lumen out and shell
| Lumen ΔP, trans-membrane pressure (TMP), fouling
| in-line
| Loop flow
| Turbine flow meter
| Cross-flow, wall shear, hydraulic model (R1)
| in-line
| Pinch valve
| One STS3215 serial servo
| Lumen isolation
| commanded
| Luer valves × 4
| Turned by hand; no actuator yet
| Routing between reservoir, module and permeate
| planned
| Lumen ΔP, TMP, fouling ratio
| Pressure and flow through the hydraulic model
| Membrane state; when to clean
| soft
| Green light
| Characterised on the light-programmable array (LPA)
| Induces the CcaS/CcaR strain to make protectant
| planned
| Loop temperature
| DS18B20 probe, or a value typed by the operator; the record says which
| pH compensation, viscosity, growth
| in-line or commanded, per row
| Dissolved oxygen, permeate mass
| None fitted
| See Must have, yet to have
| planned
This is the rig as designed. The firmware reads three of the four pressure transducers on the parts list, one pinch valve, and no Luer valve or light.
### Outside the reactor
Today's rig software reads none of these channels. They belong to the next interface, and the leaf and air sensors have been on a bench, never on a plant (R4).
[TABLE] Field sensors beside the crop, and regional data the twin uses
| Channel
| Instrument or source
| Purpose
| Provenance
| Leaf temperature
| SN-3001-YM-N01 dummy-leaf sensor, read over Modbus RTU by an ESP32
| Leaf minus air temperature as a water-stress signal
| bench tested
| Leaf wetness
| The same sensor, its other register
| Biotic stress detection
| planned
| Air temperature and humidity
| SHT31 on I²C, in the same air as the leaf sensor
| Local heat and vapour pressure deficit; the reference the leaf sensor is scored against; 5-day mean temperature for the blast rule
| bench tested
| Geospatial analysis
| Geospatial Analysis maps
| Where crops are likely to come under stress
| external
| Weather forecast
| Open-Meteo, hourly, five days back and three ahead
| Temperature, humidity, rain, wind, evapotranspiration
| external
| Crop stress risk
| Computed from the forecast
| When protectant is needed
| soft
| Time
| Crop calendar
| Tracks the farming cycle
| planned
[FOLD] The rice blast rule
Leaf wetness does not stress rice; it matters because blast fungus needs a wet leaf to infect. The interface applies the BLASTAM rule for leaf blast [7], which counts a wet period from hours of leaf wetness and their temperature [8], with future hours taken from forecast humidity [9]. The sensor is on a bench, the rule is unscored on Taiwanese fields and ACC deaminase is untested against blast, so blast risk is shown to the grower and triggers nothing.
## 3.Results
[FOLD] Strains on this page
Reactor runs 1 to 4 used B. subtilis 168: wild type in runs 1 to 3, and 168 with the constitutive ACC deaminase secretion construct in run 4. All four had the hollow fibre module fitted. The production strain, WB800, has no reactor result on this page, and the CcaS/CcaR green-light strain has grown only on the light-programmable array (R6). R6 and the registered forecast use WB800.
Four runs
### Every run so far
Runs 1 and 2 were June prototypes sampled by hand against a shake flask; from July the in-line photometer took over. Figure 1 shows all four.
[TABLE] The four reactor runs, what changed in each and what they gave
| Run
| Set-up
| OD600
| What it gave
| 1 · 6 June
prototype 260606
| 168. PES hollow fibre, lumen about 200 mL; 300 mL LB plus 20 mL overnight culture; peristaltic pump at 94 mL/min; no stirring
| Hand samples to 27 h: reactor 0.17 to 0.37, flask to 2.46
| Stopped by a pump leak. 2 mL of shell-side liquid grew no colonies. Next: BPT tubing, stirring, sampling at the reservoir
| 2 · 14 June
prototype 260614
| 168. Run 1 plus stirring at 200 rpm and a sampler before the pump; 37 °C; 300 mL as in run 1
| Samples every 15–20 min to 7.1 h: reactor 0.90 by 145 min, flask 0.83 by 278 min
| Stirred reactor plateaued about two hours before the flask. Next: 22 °C
| 3 · 21 July to 8 August
| Wild-type 168 at 22 °C, 300 mL, hollow fibre module fitted, in-line photometer
| 434 h continuous, peak about 1.5
| The trust layer (R3); the 22 °C plateau in Limits
| 4 · 1 to 6 September
| 168 with constitutive ACC deaminase secretion, in the incubator, full-length hollow fibre module; 1 L
| Two files: 3.2 h from near zero to 0.24; 10.2 h unlogged; then 102 h from 0.84 to 3.77
| The forecast comparison (R5), on the second file. The 53 hours of 2 to 4 September in the Dry Lab Notebook are the first part of this run
[IMG] Four panels of OD600 against time: run 1 and run 2 hand-sampled against a shake flask, run 3 over 434 hours in-line, and run 4 in two logged parts with a 10-hour unlogged gap.
[CAPTION] Figure 1. The four runs. Runs 1 and 2 are hand samples; runs 3 and 4 are hourly medians of the in-line photometer. Shaded: where run 3's OD channel had failed, and run 4's unlogged hours. Source: 260610 test1 no stir.xlsx, 260614, test 2 stir.xlsx, 0721, test3 20 day.csv, 20260902 and 20260906 test4 photometer.csv.
[FOLD] What the June pair measured
Run 1, unstirred: both vessels started at OD 0.172. The flask grew at r = 0.309 ± 0.023 h⁻¹ (doubling time 134 min, R² 0.95) to 2.17 at 24 h. The bioreactor stayed between 0.083 and 0.194, a fitted rate of −0.04 ± 0.03 h⁻¹ that cannot be told from zero, and read 0.197 at 24 h, eleven times less than the flask.
Run 2, stirred at 37 °C: the flask grew at 0.430 ± 0.012 h⁻¹ (97 min, R² 0.99). After about an hour's lag the bioreactor grew at 1.195 ± 0.058 h⁻¹ (35 min, R² 0.99) to OD 0.895, then held 0.84 ± 0.05 for four hours. That rate is four times the 0.299 h⁻¹ fitted on the light-programmable array at the same temperature, so a growth prior has to carry its vessel, mixing and strain (168 here, WB800 on the plate).
The June pair is why the reactor has a stirrer. Run 1 also gave the first containment check: no colonies from the shell side of the membrane.
R1 calibrated
### Module pressure drop
16 August 2026: water at 22 °C, eight pump settings from 10 to 24% in steps of 2, each measured once, with the module fitted and again with a jumper in its place. Both fit ΔP=aQ+bQ2\Delta P = aQ + bQ^2ΔP=aQ+bQ2 through the origin (module R² 0.9954, residual SD 10.1 mbar; jumper R² 0.9950, SD 5.7 mbar). At 263 mL/min the net module drop is 0.096 bar, 1.03 times the Hagen–Poiseuille prediction for 11 open fibres, which justifies using the model as a soft sensor for flow. No point was held out.
[IMG] Pressure drop against flow, with the module fitted and with a jumper only, each fitted through the origin, and the net-module difference curve.
[CAPTION] Figure 2. Pressure drop with the module (filled) and a jumper only (open); dashed, the difference of the fits. Source: 260816 pressure to flow rate.xlsx.
263 mL/min was chosen as the operating point: wall shear 4064 s⁻¹, mid-way in the module's 2000–6000 band; Re 531, laminar; about 11 effective fibres of a nominal 11, so none are blocked. Axial non-uniformity is 28% against a 20% target, but lowering the flow would also lower shear.
Wall shear computed from pressure and from flow agrees to 2.8% at 263 mL/min. Away from it the fitted drop leaves theory: 0.83× at 113 mL/min and 1.27× at 450.
R2 calibrated
### Photometer and BioDrop calibration against TiO₂ doses
On 23 August 2026, cumulative TiO₂ additions gave 45 paired points between the in-line photometer and the BioDrop spectrophotometer (Figure 3). The doses ran from 2 to 60 mg into 500 mL. The photometer logged 59 points and the BioDrop 45, the last at 46 mg. Scoring both against the known dose, not against each other, showed that both degrade above 30 mg in different ways. Over the 16 points above 30 mg the BioDrop keeps its slope but scatters (R² 0.85, SD 0.12), while the photometer stays precise (R² 0.99, SD 0.022) and its response per milligram falls.
[IMG] In-line photometer and BioDrop readings against known TiO2 dose, showing the BioDrop losing linearity above 30 mg.
[CAPTION] Figure 3. Both instruments against the known dose. Source: Inline photometer to biodrop.xlsx.
Up to OD 1.2 the photometer regresses on the BioDrop with slope 1.018, R² 0.995, residual SD 0.024 OD. Past OD 1.2 the linear fit's error rises from 0.0235 to 0.1715. A Gaussian process fitted as a check holds 0.067 there, but its 95% band covered only 88.9% of held-out points, so the linear fit is kept and OD 1.2 is its limit. TiO₂ shows linearity, not cell number: every OD on this page is an optical reading, and the dilution series in Must have, yet to have is what would turn it into biomass.
The R² of 0.85 and 0.99 are for the window above 30 mg. Measurement quotes the whole series, where both instruments fit above R² 0.999, and calls the photometer calibration-free because it needs no fit against the BioDrop.
#### The silica repeat, 10 October
On 10 October 2026 the same loop ran the calibration iGEM's protocol actually asks for: silica in 2.5 mg steps from 2.5 to 100 mg in 500 mL of 1% SDS, read at every step on the BioDrop and on both photometer builds, and logged in-line every five seconds for 4 h 27 min. Against the reference the current build is one to one to OD 2.5 (slope 0.995, intercept −0.07) and reads about 0.33 low above it, where the BioDrop's values are reconstructed from dilutions. The instrument comparison is on the photometer page; three findings matter to the twin.
The reference channel has a warm-up. It rose from 289 to 324 lux over the first two hours and then held flat, a 12% change with no fault behind it. R3's sensor axis scores this channel, so a run started from cold would raise a sensor alarm on its own warm-up, and the first two hours of a batch are not scoreable until the twin models it. These lux values are on the 9:1 splitter build and are not comparable with run 3's 26.67 lux.
The run carries its own check. At 137.6 min the suspension was diluted and then restored, which tests proportionality without the dose being known: 2.3610 before (SD 0.0033, 29 readings), 0.7943 after (SD 0.0017, 38), and 2.3665 restored (SD 0.0157, 16). The ratio across the dilution is 2.97 one way and 2.98 the other, and the restored reading returns within 0.2% of the original. A reading of 2.36 therefore carries the same proportional meaning as one of 0.79, which is the property a calibration needs for the twin to compare one reading against another.
The optical path matters more than the particle. The OD 1.2 limit was measured on the path runs 3 and 4 used. This run used the dual-beam splitter at 9:1 with a path-length factor of 5.0, and it agrees well past OD 1.2. The limit belongs to a configuration and has to be re-measured whenever the path changes. One bubble flag or more appeared in 40% of readings, which is what the eight robust estimators are there to absorb; between OD 3.0 and 3.2 they agree within 0.002 OD, so the choice of estimator makes little difference to the reported value.
R3 scored on unseen data
### The trust layer on a 434-hour growth log
21 July to 8 August 2026: 434 hours of wild-type B. subtilis 168 at 22 °C with the hollow fibre module fitted, 2,671 valid rows of 2,720 logged, no sample drawn. Two axes are scored separately: a sensor axis on the reference beam, which never passes through the culture, and a process axis on the specific growth rate.
Each axis is scored every 10 minutes. A check is an alarm when its score exceeds the 99.5th percentile of the healthy first 120 hours; the table gives the share of alarms in each window.
| Window
| What happened
| Sensor axis
| Process axis
| Interpretation
| 120–160 h
| OD falls 0.93 to 0.72; reference normal
| 0%
| 73%
| Process event
| 220–240 h
| Reference steps 26.67 to 25.83 lux; OD still clean
| 100%
| 0%
| Photometer drifting while OD still looks fine
| 240–434 h
| Reference collapses; OD scatter 5 to 10× higher
| 100%
| 35–36%
| Photometer and OD both unreliable
[IMG] OD600 and the photometer reference channel over the 434-hour batch, with the process event and instrument event shaded and the sensor alarm marked.
[CAPTION] Figure 4. OD600 (top) and reference channel (bottom) over 434 h. Shaded: the process and instrument events. Dashed: sensor alarm at 216.3 h. Source: out/sentinel.json.
The trust layer flagged the sensor at 216.3 h, 26.7 h before the OD channel failed completely at 243.0 h: enough time for a controller to drop the faulty feed. The alarm was computed afterwards from the log; during the run nobody watched the trace daily and the fault was found late. The cause was the recirculation pump: it failed, and swapping it knocked the optical axis (Engineering). A standard step detector (any jump above 0.05 OD) flagged 23% of sensor anomalies and 0.8% of biological shifts, and could not tell them apart.
[FOLD] The 120–160 h drop
The 120–160 h drop is real: 0.21 OD against a local residual SD of 0.022, with the optical channel normal. Four-quadrant streaks gave 168 colony morphology, which argues against a gross contaminant; the culture also still smelled of B. subtilis, which is weaker evidence. Autolysis with cryptic growth, sporulation and regermination, and biofilm sloughing remain, and one run cannot separate them.
The forecast (R5), the prior (R6) and induction all work from the OD reading, and a drifting sensor can produce numbers that look like normal growth. R3 sits upstream: the sensor axis says whether the instrument can be trusted, the process axis whether the culture changed. On the 434-hour run, with one instrument event, this gave 26.7 hours to mark OD unreliable and pause forecasts while the readings still looked normal. It has been shown on one run with one event of each kind; a detection rate needs deliberate faults on unseen batches.
R4 bench, one day
### The leaf and air sensors on the bench
This test uses the same idea as the trust layer in R3: give an instrument a companion that cannot see what it measures. There, the reference beam checks the photometer because it never passes through the culture. Here, the SHT31 checks the leaf thermistor because both sensors sit in the same air. On 10 October 2026 the field sensor rig was tested at three sites with stable air temperature: an incubator at 22 °C, a room at 26 °C and a stairwell at 26.4 °C. The rig is an ESP32 reading two sensors: an SHT31 for air temperature and humidity, and an SN-3001-YM-N01 for leaf temperature and leaf wetness over RS485. Both sensors were held in air beside each other, with no leaf. The SN-3001-YM-N01 reads the temperature and the surface wetness of its own white plastic disc, which stands in for a leaf, so in this test it was reading air and not a plant. Each site had three five-minute runs logged every five seconds, giving 540 paired readings.
[IMG] The bench rig on a desk: a breadboard carrying the SHT31, an ESP32 on its expansion board, a red RS485 converter, and the white disc of the leaf sensor on its cable, with the logging laptop behind.
[CAPTION] Figure 5. The rig as tested on 10 October. The leaf sensor is the white disc; the SHT31 is on the breadboard, in the same air.
[IMG] Wiring diagram: the ESP32 drives a TTL to RS485 converter on GPIO17 and GPIO16, which carries A and B to the leaf sensor, while the SHT31 sits on the I2C pins GPIO21 and GPIO22. Sensor power is taken from 5 V or a 12 V adapter depending on the spec card.
[CAPTION] Figure 6. How the rig is wired. The leaf sensor answers Modbus RTU on RS485; the SHT31 is on I²C. Both channels of the leaf sensor arrive as integers scaled by ten, so 0.1 °C is the whole resolution it has.
The SHT31 matched the nominal temperature of each site. Sharing the same air, the two sensors should agree, yet the leaf sensor read 1.2 to 1.9 °C warmer once settled, and the size of that gap changed from site to site, so one fixed offset will not correct it.
[TABLE] Air conditions at each site and the leaf sensor's offset against the air reference
| Site
| Air temperature
| Air humidity
| Leaf − air, site mean
| By run
| Incubator, 22 °C
| 21.81 to 22.64 °C
| 34.7 to 36.2%
| +1.71 ± 0.20 °C
| +1.76, +1.50, +1.86
| Stairwell, 26.4 °C
| 26.20 to 26.81 °C
| 55.8 to 61.9%
| +1.31 ± 0.19 °C
| +1.52, +1.22, +1.20
| Room, 26 °C
| 25.52 to 26.20 °C
| 58.9 to 62.0%
| +0.47 ± 0.46 °C
| −0.09, +0.54, +0.97
[IMG] Leaf minus air temperature for nine bench runs. The incubator sits near plus 1.8 degrees and the stairwell near plus 1.3; the room starts below zero and climbs past plus 1 across its three runs. A side panel gives the mean of each run against its site mean.
[CAPTION] Figure 7. Leaf minus air at the three sites, each site's three runs joined end to end. The joins are dashed because the log has a sample interval and no timestamp, so the gaps between runs are not recoverable. Source: 1010Temp_incubator_22C_runs1-3.csv and its two companions; numbers in software/figures/numbers.json.
The leaf channel was also still moving. It drifted within single runs by as much as 0.13 °C a minute, and at the room site it climbed across all three: the gap opened from −0.42 °C in the first readings of run 1 to +1.11 °C in the last readings of run 3, the leaf reading rising 2.2 °C while the air rose 0.68. Five minutes is not long enough for it to settle, so this test cannot tell a site-dependent offset from a sensor still warming from cold. The channel is also coarse: 0.1 °C steps against 0.01 °C from the SHT31.
Leaf wetness read 0.0% in every sample. The sensor was never wetted, so this test cannot yet show whether the channel responds. It rules out only that damp air by itself reads as wet. A water-dose series, a dry-down and a cold-plate dew test would settle it; they are written up with the ESP32 sketch and the three logs in igem2026-leaf-sensor-bench.
In the field the leaf sensor will be on a plant and the two readings are expected to differ: the leaf minus air temperature difference is one of the signals of water stress. A bias of 1.2 to 1.9 °C is large enough to hide that signal or invent one, so it has to be measured and removed before the twin acts on it.
R5 rules fixed in advance
### Batch forecasting
We ran 102 hours of perfusion, 2 to 6 September 2026, with B. subtilis 168 secreting ACC deaminase constitutively; OD600 rose from 0.84 to 3.77. This is the second of run 4’s two files (Every run so far): the culture started on 1 September, was logged for 3.2 h to OD 0.24, then went unrecorded for 10.2 h, so most of the exponential phase is in the gap. We compared Kalman filter, local linear, global linear and exponential forecasts against persistence, which predicts no change. A forecast was made every hour from 12 h, each using only data up to that point.
| Horizon
| Persistence RMSE
| Kalman RMSE
| Improvement
| 2 h
| 0.067
| 0.040
| 41%
| 4 h
| 0.132
| 0.083
| 38%
| 8 h
| 0.256
| 0.192
| 25%
| 12 h
| 0.373
| 0.310
| 17%
A two-state Kalman filter (level and slope) beats persistence at every horizon, by less as the horizon grows.
Most of the run is above the linear limit. The 12-hour median OD rose from 1.06 to 3.75, so R5 forecasts the photometer reading, not biomass. The model comparison still holds, because every model forecasts the same signal.
[IMG] Forecast error against horizon for persistence, local linear, global linear, exponential and Kalman models on the 102-hour run.
[CAPTION] Figure 8. Walk-forward error by horizon. Source: walkforward_0902_results.csv.
[FOLD] Why the other forecasts fall behind
Global linear weighs early data as much as recent data, so it points the wrong way when growth changes speed. Exponential assumes growth keeps accelerating, which it does not over 102 hours of perfusion, so it overshoots. Local linear follows the recent level and slope; the Kalman filter also weighs each reading against the noise, so it follows real changes without chasing scatter.
The Kalman filter updates with each reading without refitting and tracks its own uncertainty, shown as a band on the Growth twin tab. It sits downstream of R3 because it is only as good as its input.
R6 held-out arms
### Carrying a growth prior from plate to reactor
A reactor run takes days; a plate run takes 24 hours and tests six conditions, so a prior fitted on a plate would let the twin forecast from the first few hours, when R5's Kalman filter has least to work with. On 19 September 2026, B. subtilis WB800 grew in light-programmable array wells at 37 °C under six light arms (red and green, each at a weak, a medium and a high level in the same intensity ratio), read on a plate reader at five time points to 24 h. A logistic model beat logistic-with-lag by AICc, a score that penalises the extra parameter, and fits at NRMSE 1.9% (normalised root-mean-square error; R² 0.997), against the 15% criterion for bioprocess models [3]: r=0.299±0.017 h−1r = 0.299 \pm 0.017\;\mathrm{h^{-1}}r=0.299±0.017h−1 (doubling time 139 min), K=1.005K = 1.005K=1.005, X0=0.0235X_0 = 0.0235X0​=0.0235.
Across these six light arms, green induction costs no growth: r spans 0.279 to 0.317 h⁻¹, within one standard error, and the weakest-green arm reaches the highest plateau. The arms are biologically near-identical, so this is a reproducibility result and not a test of a new condition. To test the fit as a prior, we left out each arm in turn, fitted the other five, and predicted its 24 h OD from its first 8 hours, with and without the prior.
| Arm
| Observed OD at 24 h
| With the prior
| Without the prior
| R1 weak red
| 0.967
| 0.972
| 0.306
| R2 medium red
| 0.910
| 0.973
| 0.296
| R3 high red
| 0.967
| 0.969
| 0.355
| G1 weak green
| 1.014
| 0.958
| 0.666
| G2 medium green
| 0.975
| 0.977
| 0.695
| G3 high green
| 0.958
| 0.986
| 0.502
With the prior the error was at most 7%; without it, 29 to 68%, from the same eight hours. The plate works as a scale-down model of the reactor, as in biomanufacturing process transfer [3].
[IMG] Logistic growth fit to the 19 September LPA run, with the six light arms and the pooled curve.
[CAPTION] Figure 9. The logistic fit and the six light arms. Source: lpa_growth_fit_20260919.json.
[IMG] Leave-one-arm-out forecast of 24-hour OD with and without the prior, against the observed values.
[CAPTION] Figure 10. Held-out forecasts of 24 h biomass from data up to 8 h, with and without the prior.
[FOLD] What this test cannot show
With no sample between 8 and 24 h, K rests on one time point.
Only r carries over for now: K and X0 need the plate-reader and in-line OD scales cross-calibrated, so the registered forecast predicts r alone.
## 4.Registered forecast
To test the twin's forecast, we registered it before a reactor run of B. subtilis WB800 with constitutive ACC deaminase secretion. The forecast file is prereg_forecast_20261002.json, SHA-256 bceda7c0…6e0388fc. It has not been scored yet, and the score goes here whichever way it falls.
[TABLE] The registered prediction and its acceptance criteria
| Registered prediction
| Value
| Criterion for passing
| Specific growth rate r
| 0.2986 h⁻¹, 90% interval 0.2705 to 0.3300 (doubling time 139 min, 126 to 154)
| The fitted r falls inside the interval
| Growth curve shape
| Logistic, prior-predicted trace
| NRMSE below 15% [3]
| Time to reach OD 0.5
| Depends on measured inoculum: 7.3 h from OD 0.10, 9.8 h from 0.05, 13.0 h from 0.02
| Observed time inside the 5–95% band
[FOLD] Why only the growth rate is scored
KKK and X0X_0X0​ were fitted on the plate-reader scale in a 150 µL well and the reactor reads a 2 mm flow cuvette, with no cross-calibration yet, so only rrr is scored. The plate ran at 37 °C (Measurement) and the registered file assumes the same temperature, medium and aeration in the reactor. The criterion therefore applies to a reactor batch at 37 °C.
If the rate fails and the shape passes, aeration and mixing are the first suspects: in June the stirred reactor grew four times faster than the plate at the same nominal temperature. If both fail, the prior does not transfer from plate to reactor, and we will report that.
## 5.The software that runs the reactor
Firmware v3.10.9 · backend v4.12 · interface v4.13
### The rig app
Every feature in the rig app is there because a run failed without it: the interlocks, the board-side recording, the bubble rejection and the calibration bookkeeping. It is the Arduino App Lab application our instructor Chars Hsieh wrote for the Uno Q board on BR-01, and it recorded every reactor number on this page. The plate prior (R6), the bench sensor test (R4) and the BioDrop column in R2 were measured on other instruments.
It has three parts. Firmware v3.10.9 (sketch/sketch.ino) runs on the Uno Q's microcontroller, reads the instruments and holds every interlock. Backend v4.12 (python/main.py) runs on the board's Linux side, computes derived values and alarms, writes the log to the board's disk and serves the page on port 7000. Interface v4.13 (assets/index.html) is one file in the browser, which displays and commands and protects nothing. The firmware pushes readings to the backend and the backend calls the firmware for commands, over the board's Bridge link.
1008AppLab.html · interface v4.13 Open full screen →
[CAPTION] Figure 11. The rig interface, live. With no board attached the readings stay blank.
The source is in software/rig-app/, with a README in Traditional Chinese. To run it, import the folder into Arduino App Lab on an Uno Q (one library, SCServo 1.0.2, plus App Lab's web_ui brick) and open http://<board address>:7000. The page is in English or Traditional Chinese, with a normal range behind every information mark. With no board, open the interface file and it loads with blank readings.
[FOLD] What survives which failure
All interlocks run in the Uno Q's microcontroller firmware, so no fault in a model, backend or browser can push the loop past a limit. Lumen-in or trans-membrane pressure above 0.5 bar for two consecutive 200 ms windows opens the pinch valve and latches a fault, as do fifteen minutes closed, a servo at 60 °C, or a servo that stops answering. A latched fault stays until an operator clears it.
Each sampling window is written and fsynced to the board's disk as it closes, so a jammed command channel loses control but not data, and closing the browser loses neither. After a restart the app appends to the same file and records the gap in gap_s. Missing readings are left blank, never zero, and each row carries the algorithm, configuration and constants that produced it.
The log is plain CSV with a fixed 73-column header, one row per 30 s window, units in the column names: window (window_index, elapsed_s, timestamp_start, gap_s), photometer (od600_au, od600_lux_sample, od600_lux_ref, od600_bubble_pct, od600_valid), flow and pressure (flow_mlmin, pressure_feed_bar, pressure_retentate_bar, pressure_permeate_bar), conditions (pump_pwm, ph, ph_temp_c, temp_src, valve_state), derived (dp_ratio, gamma_pressure_s1, gamma_flow_s1, gamma_ratio, j_lmh) and trace (alg_profile, config_version, constants_version). Run 3 predates this header and has nine columns.
[FOLD] How each reading is made
[TABLE] How each instrument reading is produced
| Instrument
| How the reading is made
| OD600
| An amber LED and two lux sensors, one through the 2 mm flow cuvette and one on the lamp, which never sees the culture. Four dark readings, then sixteen lit, of which the first two are dropped while the lamp settles and fourteen are scored; bubbles are rejected by median absolute deviation, and the burst is retried if over half is rejected. OD600=log⁡10(Rblank/R)×f\mathrm{OD}_{600}=\log_{10}(R_{\text{blank}}/R)\times fOD600​=log10​(Rblank​/R)×f on the sample-to-reference ratio.
| Pressure
| Three transducers, 14-bit, sixteen-fold oversampled at 100 Hz; peak, trough and mean of a one-second window every 200 ms. The trough matters: a peristaltic pump can drive the membrane backwards at a trough while the mean looks safe.
| Loop flow
| A turbine meter on an interrupt pin, 2580 pulses per litre; pulses closer than 500 µs are treated as bounce.
| pH and temperature
| pH every 500 ms on a temperature-compensated Nernst slope; values outside pH 2–12 are left blank. Temperature comes from the loop probe when it answers and a typed value when it does not, and the record says which.
[FOLD] What it computes
From three pressures and one flow the app reports TMP_out as Pout−PsP_{\text{out}}-P_sPout​−Ps​, the lumen drop minus the water column, and wall shear twice, from pressure as τw/μ\tau_w/\muτw​/μ and from flow as 8v/d8v/d8v/d; their ratio is the clogging indicator. The module is 11 fibres of 1 mm bore and 0.6 m length, 0.02 m² of 0.2 µm membrane; thresholds come from R1.
Fouling is tracked as R=ΔPnet/QR=\Delta P_{\text{net}}/QR=ΔPnet​/Q, with cleaning at twice baseline. Flux is converted to 25 °C before runs are compared, since a 3 °C room drift otherwise reads as fouling. Ratios are suppressed below 10 mL/min, where the flow meter is too coarse.
1007UI.html · MIT licence
### The next interface
The rig app knows the reactor but not the field: it has no forecast, no leaf sensor and no way to judge crop stress. The rewrite keeps the split between a browser that displays and firmware that protects, and adds the regional forecast and the leaf sensor. Six tabs: what to do now, a live P&ID, the growth twin against its forecast band, weather and blast risk, the batch record, and setup.
1007UI.html · MIT licence Open full screen →
[CAPTION] Figure 12. The rewritten interface on simulated data. With no board or leaf sensor attached, process values come from the model in the file and the leaf is simulated from the live forecast; every screen says so.
The farmer never sees this screen; they see the ReLEAF phone app on Entrepreneurship.
Until the rewrite carries over the rig app's interlocks, board-side recording, bubble rejection and calibration bookkeeping, the rig app records and the rewrite is tested on its recordings. Nothing on this page was measured by the rewrite.
#### Licence
Both programs, the rig app and the rewrite, are released under the MIT licence. The text is in software/LICENSE, beside the rig app's source in software/rig-app/. The wiki's own text and figures stay under CC BY 4.0.
## 6.Gaps and limits
### Must have, yet to have
[TABLE] Missing measurements and experiments, with what each unlocks
| Missing
| What it unlocks
| Status
| Loop temperature, actually reading
| Normalises flux between runs and explains the largest unknown in growth. The probe is fitted but has not been answering, so the app runs on a typed temperature.
| must have wiring, not code
| Permeate flow or mass
| Productivity in mg per day, a closed mass balance, and a fouling signal independent of pressure. A load cell under the permeate vessel is enough.
| must have
| Dissolved oxygen
| Separates oxygen limitation from stationary phase and settles kLak_LakL​a (45.7 against 60 h⁻¹). Neither probe can be autoclaved, so the problem is aseptic insertion.
| must have an insertion method, not a sensor
| In-line versus plate OD cross-calibration
| Lets KKK and X0X_0X0​ transfer from the plate prior, not just rrr. Half a day of dilution series.
| must have
| Two more reactor growth runs
| Retires the n = 1 on the prior.
| must have
| A fouling run to the cleaning threshold
| Fits the fouling law and re-measures the clean-module baseline.
| one run
| Green light on the reactor
| Makes induction a controlled variable and closes the loop: 14 days or more, green on and red off, against protein output.
| next build
| The leaf sensor, wetted and settled
| A wet test of the wetness channel, and a run long enough for the thermistor to flatten with a clock in the log (R4). Then a paddy trial with lesion counts scores BLASTAM on Taiwanese fields.
| bench, then field
### Current limits
- The loop is not closed. Valves move under software control, but every decision about the culture, above all induction, still goes through a person, so by the definition in the introduction this is a digital shadow with actuation and not yet a twin [1, 2].
- n = 1 almost everywhere. One run behind R3, part of one behind R5, one plate behind R6. The 102 hour log also records the reference beam, so it can be a second test of the trust layer without a new run.
- 37 °C fits, 22 °C operation. At 22 °C growth is 28 times slower but plateaus at OD 1.454, within noise of the 37 °C plateau, so the cost is time, not yield, and rate parameters do not transfer.
- Beer–Lambert at scale. On the path runs 3 and 4 used, the photometer is linear only to about OD 1.2, so most of the 102 hour run sits above it. The splitter path reads one to one to OD 2.5 (the silica repeat) but does not retrofit the earlier runs.
- Induction light is not measured in the culture. A dense culture will attenuate it in a way nothing on the rig measures.
- Trans-membrane pressure is below transducer resolution at the operating point, so lumen ΔP is used instead.
- The clean-module baseline is provisional, so every fouling ratio divides by a number not re-measured on this plumbing.
- Calibration can outlive its conditions. Blanks and pressure zeros are restored from file after a reboot; the app says so on screen, but a restored zero is not a measured one.
- One leaf sensor, on a bench, and it reads warm (R4). It reads a dummy leaf, cannot tell guttation from dew, and the blast rule it feeds comes from Japanese fields.
## 7.For other teams
- The two-axis trust layer. A reference channel that never sees the sample, scored separately from the process, with a threshold fixed on the healthy start of a run. Any team with an optical sensor can use it; the 434 h batch comes with it as a test case.
- Calibrate against a known dose, not another instrument. Cumulative TiO₂ additions score both instruments against truth. One afternoon showed our in-line photometer was the more linear of the two, the opposite of what we expected, and the silica repeat in October showed the same thing over a wider range.
- Give every sensor a companion that cannot see what it measures. The reference beam checks the photometer; an air probe checks the leaf thermistor (R4). It found a 1.2 to 1.9 °C bias in a sensor we were about to trust.
- A plate assay as a scale-down model. Fit growth on a plate, pass it to the reactor as a prior, and register the prediction before the batch. The method transfers; the parameters are our strain's.
- A logger that outlives its operator. Each window written to disk as it closes, the same file resumed after a restart with the gap marked, missing readings left blank, every row stamped with its constants.
- The rewrite's serial protocol. One ASCII line per message over Web Serial at 115200 baud. The board sends PV OD=0.412 PH=7.02 FLOW=263 PT1=2.69 PT3=1.31 PT4=0.45 PT5=0.35. The page answers SET XV01=OPEN LIGHT=GREEN every 2 s as a heartbeat, and the firmware's 5 s link timeout puts the rig in its safe state if the page stops talking. Fields the page does not recognise are ignored. The rig app uses App Lab's Bridge calls instead.
- Pressure logging as containment monitoring. A broken fibre shows up as a trans-membrane pressure anomaly, and those transducers are already logged, so detection is a software change. The other three layers are on Safety.
The rig app, the rewrite, the figure scripts and the numbers behind them are in the team repository, and all of it will be mirrored to gitlab.igem.org/2026/software-tools/ before the wiki freeze. The reactor is on Hardware, the growth and transport models on Math Model, and the assays on Measurement.
## References
- Portela, R. M. C., Varsakelis, C., Richelle, A., Giannelos, N., Pence, J., Dessoy, S., & von Stosch, M. (2021). When is an in silico representation a digital twin? A biopharmaceutical industry approach to the digital twin concept. Advances in Biochemical Engineering/Biotechnology 176, 35–56. doi:10.1007/10_2020_138 ↩
- Gargalo, C. L., Caño de las Heras, S., Jones, M. N., Udugama, I., Mansouri, S. S., Krühne, U., & Gernaey, K. V. (2021). Towards the development of digital twins for the bio-manufacturing industry. Advances in Biochemical Engineering/Biotechnology 176, 1–34. doi:10.1007/10_2020_142 ↩
- Sinner, P., Daume, S., Herwig, C., & Kager, J. (2021). Usage of digital twins along a typical process development cycle. Advances in Biochemical Engineering/Biotechnology 176, 71–96. doi:10.1007/10_2020_149 ↩
- Cabaneros Lopez, P., Udugama, I. A., Thomsen, S. T., Roslander, C., Junicke, H., Mauricio-Iglesias, M., & Gernaey, K. V. (2020). Towards a digital twin: a hybrid data-driven and mechanistic digital shadow to forecast the evolution of lignocellulosic fermentation. Biofuels, Bioproducts and Biorefining 14, 1046–1060. doi:10.1002/bbb.2108
- Satwekar, A., Gracieux-Singleton, M. C., Cummings, C., et al. (2026). Operationalizing digital twins in biomanufacturing through interoperable process analytical technology. Bioprocess and Biosystems Engineering 49, 2061–2083. doi:10.1007/s00449-026-03369-9
- Zhao, L., Jiao, T., Adade, S. Y.-S. S., Wang, Z., Ouyang, Q., & Chen, Q. (2025). Digital twin for predicting and controlling food fermentation: a case study of kombucha fermentation. Journal of Food Engineering 393, 112467. doi:10.1016/j.jfoodeng.2025.112467
- Koshimizu, Y. (1988). [BLASTAM, leaf blast forecasting from AMeDAS weather data; in Japanese.] Bulletin of the Tohoku National Agricultural Experiment Station 78, 67–121. Cited from secondary sources; the original was not read. ↩
- Yoshino, R. (1979). [Leaf wetness duration and temperature required for rice blast infection; in Japanese.] Bulletin of the Hokuriku National Agricultural Experiment Station 22, 163. Cited from secondary sources; the original was not read. ↩
- Sentelhas, P. C., Dalla Marta, A., Orlandini, S., Santos, E. A., Gillespie, T. J., & Gleason, M. L. (2008). Suitability of relative humidity as an estimator of leaf wetness duration. Agricultural and Forest Meteorology 148, 392–400. doi:10.1016/j.agrformet.2007.09.011 ↩
[IMG]
