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
# Math Model
[IMG] Math Model. A pencil lies across a printed multi-line chart of yearly values, annotated by hand with a yield-to-price note and a trend expression.
[FOLD] Contents
On this page
- 1One chain: weather goes in, litres of protectant per hectare come out
- 2Stress index
- Variable selection
- Our model
- Validation
- 3Optogenetic kinetics
- Light setpoint
- Response time
- Reactor output
- 4Dose and payback
- How much is needed
- Where the numbers come from
- Can we make it, is it worth it
- 5Conclusion
## 1.One chain: weather goes in, litres of protectant per hectare come out
Abiotic stress (heat, soil salinity, and vapor pressure deficit) reduces crop yields across Taiwan's farmland long before visible damage appears, by disrupting plant hormone balance and protein stability at the cellular level. ReLEAF addresses this by deploying an optogenetically controlled B. subtilis bioreactor that senses field stress in real time and produces tailored protectant proteins. Our mathematical model asks the question that connects every part of that system: given today's stress conditions in a Taiwanese farm field, how much engineered protectant actually reaches the plant?
1 Stress index
AsksHow much is this field losing, and how much of that can ACC deaminase reach?
TakesWeather by growth stage
GivesStress index S, addressable share Saddr, demand f
Standing onOurs 25 years of county harvests
2 Optogenetic kinetics
AsksWhat lamp setting does that demand mean, how fast does the reactor answer, and how much enzyme comes out?
TakesDemand f
GivesLamp PPFD, response horizon, activity in mU mL−1 and g ACC L−1 day−1
Standing onOurs DNPH assay, Literature CcaSR transfer function
3 Dose and payback
AsksHow many litres does one hectare need, how often, and is it worth making?
TakesActivity per litre, release dekads, efficacy ε
GivesLitres per hectare per application, applications per season, fleet lead time, NT$ per hectare per year
Standing onOurs the dose that worked on plants, Ours DNPH titre
[IMG] Three panels under the title From Environmental Stress to Targeted Foliar AccD Delivery. Block 1, environment to stress prediction, shows a sensor in a field with temperature, conductivity and vapour pressure deficit, and a stage-weighted anomaly model. Block 2, engineered cell to AccD production, shows a reactor under green and red light with the CcaS and CcaR proteins and a Hill light response. Block 3, concentration to foliar delivery, shows the reactor feeding a bottle and a sprayer onto a leaf, with the delivered-dose equations. A strip at the bottom runs weather to anomaly to PPFD to AccD activity to spray volume to delivered dose.
[CAPTION] Figure 1. The three blocks and the quantity each one passes on. The strip along the bottom is the whole chain in one line.
## 2.Block 1 · Stress index
Taiwan’s own harvests decide what a stressed season costs.
Our bioreactor makes a crop protectant only when its green lamp is on. So the whole system depends on one number: how stressed is the crop right now?
Most crop stress indices add temperature, water and light with weights chosen by experts, and are rarely checked against what happened in the field. We took a different route: let Taiwan's own harvests decide. The Agriculture and Food Agency (農粮署) has published county rice yields for every season since 2001. A season whose yield fell below its trend was a stressed season. If weather alone can predict which seasons fall, and by how much, that prediction is a stress index, and every harvest becomes a test of it.
[IMG] A chain of five boxes. Weather from ERA5 daily and CWA stations feeds stress terms for typhoon, rain, light, cold and humidity by stage; those give a stress index S defined through log yield loss; S gives an addressable part of the stress that ACC deaminase can act on; that sets the green light through the inverted CcaSR Hill curve. A branch below turns S into a predicted yield, cross-checked against the realised harvest.
[CAPTION] Figure 2. The pipeline. Weather becomes stress terms; their sum is the stress index S; S predicts yield, which is checked against the real harvest; the part of S our system can act on sets the green light.
[FOLD] Assumptions
[TABLE] The five assumptions the stress index rests on, with the reason for each
| #
| Assumption
| Why?
| 1
| A county's yield trend reflects technology and management; the deviation from it reflects weather.
| Varieties and practices change slowly; weather changes every season.
| 2
| The same weather stress causes more damage at some growth stages than others.
| Rice sensitivity is stage-specific (e.g. cold at heading, rain at tillering).
| 3
| Stress can only reduce yield, and only after it passes a threshold.
| Physical damage is one-sided: a calm day does not add rice.
| 4
| The two rice crops respond differently to weather and should be modeled separately.
| Different seasons, weather and stresses.
| 5
| The value of lost rice can be estimated using the current farm-gate price.
| Official daily price exists; public purchase price is close.
[FOLD] Methods
Stage-weighted exposure
xstage = ∑dP(stage∣d) xd(1) x_{\mathrm{stage}} \;=\; \sum_{d} P(\mathrm{stage}\mid d)\; x_{d} \tag{1} xstage​=d∑​P(stage∣d)xd​(1)
Summed over the days d of the season. P(stage | d) is the probability that day d fell in that growth stage, which smooths the transplanting-date differences between counties.
The yield model, and the index inside it
anomaly = a + γP + ∑ibi z(xi) − ∑jβjEj⏟S,βj≥0(2) \mathrm{anomaly} \;=\; a \;+\; \gamma P \;+\; \sum_{i} b_i\, z(x_i) \;-\; \underbrace{\sum_{j} \beta_j E_j}_{\textstyle S} , \qquad \beta_j \ge 0 \tag{2} anomaly=a+γP+i∑​bi​z(xi​)−Sj∑​βj​Ej​​​,βj​≥0(2)
z(x) = x−μcountyσtrain,y^ = trend×exp⁡(anomaly)(3) z(x) \;=\; \frac{x - \mu_{\mathrm{county}}}{\sigma_{\mathrm{train}}} , \qquad \hat{y} \;=\; \mathrm{trend} \times \exp(\mathrm{anomaly}) \tag{3} z(x)=σtrain​x−μcounty​​,y^​=trend×exp(anomaly)(3)
One fit per crop. P is the sunshine-potential term, z(xi) are the stage terms standardised against the county's own history, and Ej are the damage exposures. The constraint βj ≥ 0 is assumption 3 written as an equation: a damage term can take yield away and never add it. The stress index S is the damage sum alone, which is why it is bounded below by zero and why it reads as a loss.
Index to yield loss, and to the lamp
loss = 1−e−S,Saddr = ∑jεj βjEj(4) \mathrm{loss} \;=\; 1 - e^{-S} , \qquad S_{\mathrm{addr}} \;=\; \sum_{j} \varepsilon_j\, \beta_j E_j \tag{4} loss=1−e−S,Saddr​=j∑​εj​βj​Ej​(4)
The first identity is what makes a harvest a test of the index: predicted yield is the county trend times e−S, and the Agency publishes the realised yield beside it. The second is what Block 2 receives: each damage term is weighted by εj, the share of that stress ACC deaminase can act on (0.58 for salinity, Figure 10), and the normalised result is the demand f.
### Result 1 · Light, wind and badly timed water cost rice; heat earns nothing
We gathered 18 candidate stresses. For each crop, every one of the 215 − 1 = 32,767 combinations of 15 candidates was fitted and scored on years it had not seen. Each candidate was then judged three ways.
[IMG] Two horizontal bar charts, second crop on the left and first crop on the right, ranking fifteen candidate weather stresses by the mean change in prediction error when the variable is added. For the second crop, rain by five stages and typhoon wind are furthest to the left and green; for the first crop, sunshine potential, dark spell and light deficit lead. Grey bars are dropped variables, and minimum and maximum temperature by stage sit at the bottom of the first crop with bars to the right, meaning they hurt.
[CAPTION] Figure 3. The leaderboard of stresses. Bars: average change in prediction error when the variable is added (left = helps). Green = kept in the final model. Percentages: share of combinations where it helped. Stars mark student-model variables.
[IMG] Two bar charts of the increase in mean absolute error when each student-model variable is shuffled. For the second crop, rain by five stages costs about twenty kilograms per hectare with p equals 0.01 and is highlighted green; every other bar is near zero. For the first crop, every bar is at or below zero and no p-value is below 0.01 except humid days.
[CAPTION] Figure 4. Permutation test for the student-model variables. Shuffling rain by growth stage costs 19.8 kg/ha (p = 0.010); shuffling warm nights or humid days costs nothing.
Which stresses were supported by the data. After testing each candidate stress with three different methods, these were the variables that consistently improved the model and were kept in the final version.
[TABLE] The weather terms kept in the final model for each crop, as read from the leaderboard
| Crop
| Kept
| Dropped despite being proposed
| Second (二期)
| Rain by growth stage, typhoon wind, light deficit, sunshine potential, heavy-rain days ≥ 150 mm, lodging gusts, cold hours at heading
| Humidity, minimum and mean temperature by stage, warm nights, hours ≥ 35 °C
| First (一期)
| Sunshine potential, dark spell, light deficit, humidity by growth stage, humid days, warm nights, hours ≥ 35 °C
| Wet-day runs, early storm rain, seedling cold, heavy-rain days, rain by stage, mean and minimum temperature by stage
### Result 2 · One equation per crop, and what its index is worth in dollars
One equation predicts county yields, and its damage half is the stress index. Each index value has a price in kilograms and New Taiwan dollars.
[IMG] Two horizontal bar charts of each model term's effect on yield in kilograms per hectare, with ninety per cent bootstrap intervals. For the second crop the largest red damage bars are radiation deficit, rain days over 150 millimetres and typhoon wind, each about minus 250 to minus 500. For the first crop the largest are dark spell and radiation deficit. Blue radiation surplus is positive in both.
[CAPTION] Figure 5. Effect of each term in the final model, in kg/ha at the average yield. Red = damage terms at a bad exposure (90th percentile), green = stage terms per standard deviation, blue = sunshine potential. Bars: 90% bootstrap interval.
[IMG] Two stacked line charts of area-weighted yearly yield anomaly from 2007 to 2025, observed in heavy black against six model predictions. The second crop panel above has swings from minus thirty per cent in 2007 and 2016 to plus fifteen per cent in 2012 and 2014, and the merged models track most of them; 2023 is marked unexplained and 2024 is marked Gaemi. The first crop panel below has smaller swings and the models follow them less closely.
[CAPTION] Figure 6. Area-weighted year means on the 399 county-seasons all models share (11 counties, 2007–2025). Black = observed. Grey = trend only; orange = student model (v-county); blue = instructor model (v3); greens = the three best merged combinations.
#### What one index point has historically cost, in rice and in New Taiwan dollars
The stress index S is the damage side of the model (Methods, eq. 2). Its meaning comes from history: for every county-season since 2001 we know its index (computed without that year) and the real harvest. Grouping seasons by index gives the typical outcome at each level.
[IMG] Two scatter plots of realised yield versus a normal year, in per cent, against the normalised stress index, with bands shaded none, mild, moderate and severe. For the first crop the typical line falls from plus seven per cent at index zero to minus four per cent by index 0.35 and then flattens; red triangles for the 2026 counties sit along it. For the second crop the line falls from plus twelve per cent to minus fifteen per cent by index 0.75.
[CAPTION] Figure 7. Each dot is one county-season. Green line: typical harvest vs a normal year at each index level; band: middle 50% of the 40 most similar seasons. Red triangles: 2026 first-crop counties.
[TABLE] What each first-crop stress index level has historically meant for yield and farm-gate value
| First-crop index
| Band
| Typical vs normal year
| kg/ha
| NT$/ha
| Chance of losing > 5%
| 0.05
| none
| +5.7%
| +422
| +10,858
| 2%
| 0.10
| none
| +1.5%
| +109
| +2,802
| 12%
| 0.15
| mild
| +0.0%
| +1
| +17
| 25%
| 0.20
| mild
| −1.8%
| −129
| −3,311
| 35%
| 0.25
| mild
| −1.8%
| −129
| −3,311
| 25%
| 0.30
| mild
| −3.4%
| −252
| −6,487
| 32%
| 0.35
| moderate
| −4.0%
| −293
| −7,539
| 45%
At the recent typical first-crop trend yield (7,354 kg/ha) and the official 2026 farm-gate price (NT$25.7/kg). Second crop: a normal year sits near 0.33; −5% at 0.5, −9% at 0.6, −15% at 0.8. The same number means different things in the two crops, so the index is always reported with its crop.
[IMG] An interface panel for the first crop at stress index 0.32, labelled mild, reporting minus 3.4 per cent versus a normal year, minus 252 kilograms per hectare, minus NT$6,483 per hectare and a 38 per cent chance of losing more than five per cent, over a curve of outcome against index with a red marker at 0.32.
[CAPTION] Figure 8. The lookup as a farmer sees it, first crop. Based on 37 past county-seasons within ± 0.05 of this index.
[IMG] The same interface panel switched to the second crop at stress index 0.33, also labelled mild, but reporting plus 0.7 per cent versus a normal year, plus 40 kilograms per hectare and a 25 per cent chance of losing more than five per cent.
[CAPTION] Figure 9. The same index value, 0.33, on the second crop. It is a normal year here and a bad one there, which is why the crop is always quoted with the number.
#### How much of that loss ACC deaminase can reach: the coefficient our wet lab sets
Efficacy is the share of the yield a stress costs that ACC deaminase could save: 1 means all of it, 0 means none. The values in Figure 10 come from the literature. Our wet lab measured the first one directly, for salinity, in Arabidopsis (experiment #9: buffer or ACCD given one day before, together with, or one day after 0, 75 or 100 mM NaCl; 15 days on agar). We then carried the result to rice grain yield with published rice studies.
[TABLE] Arabidopsis fresh weight at 75 millimolar sodium chloride, with and without ACC deaminase at three timings
| Arabidopsis, 75 mM NaCl
| Fresh weight (g)
| Change under salt (vs same treatment, 0 mM)
| vs buffer at 75 mM
| Buffer (control)
| 0.064
| −51%
| —
| ACCD before salt
| 0.164
| +35%
| +158%
| ACCD with salt
| 0.144
| −34%
| +127%
| ACCD after salt
| 0.141
| +42%
| +122%
[IMG] Rice yield as a per cent of non-saline against root-zone salinity in decisiemens per metre. A black line for no protection falls from one hundred per cent at two decisiemens to under ten at twelve. A green line with ACC deaminase at efficacy 0.58 falls far more slowly, reaching about sixty per cent at twelve, with a shaded band for efficacy 0.38 to 0.79. Dotted markers show the lab doses of 75 and 100 millimolar sodium chloride.
[CAPTION] Figure 10. About 58% of the yield a salty paddy loses could be saved, if ACCD is present before the salt arrives.
### Result 3 · It beats the no-weather trend on years it never saw
Every test asks the same question, how far off is the predicted county yield, but closes a different loophole. The reference is the trend: each county's yield trend with no weather at all, the "no skill" line any weather model must beat.
[IMG] Island mean first-crop paddy yield from 2001 to 2026 in black, rising from 5,850 to about 7,350 kilograms per hectare with large year to year swings. A green model line and a dotted grey trend line, both predicted from earlier years only, follow it from 2008. Below, a bar chart of island error per cent shows the green model bars shorter than the grey trend bars in the bad years 2013, 2018 and 2022. A 2026 forecast of 7,644 kilograms per hectare frozen on 26 September is marked at the right with an error bar.
[CAPTION] Figure 11. Island first-crop yield (black), with the model's and the trend's predictions from earlier years only. 2016–2025 county error: trend 419, model 365 kg/ha. It gains most in bad seasons (2018, 2022) and loses a little in quiet ones.
[IMG] Left: frozen forecast against official 2026 first-crop yield for four counties, with eighty per cent intervals, scattered around the one to one line; Taichung and Pingtung sit on it, Taitung and Hualien off it; the overall error is 533 kilograms per hectare or 7.9 per cent. Right: yield versus trend against the 2026 first-crop stress index, with the historical typical-outcome line and band, and the four counties as red triangles; Taichung falls on the line, Taitung below it and Hualien and Pingtung far above.
[CAPTION] Figure 12. The blind test, as far as it has gone. The 2026 forecast was frozen on 26 September, before any county published. Four of sixteen are in: county error 7.9% against the trend's 8.8%. Four counties is too few to call, and the right-hand panel shows why: Hualien and Pingtung beat their index badly, Taitung undershot it, and only Taichung landed where history said it would.
Conclusion
Across the historical rice data, the weather linked to yield loss differed between the two crops. For the second crop, the strongest signals came from typhoon-related wind and lodging, low light, and water-related stress. Heat and warm nights added little once those factors were considered. The first-crop index was less informative, consistent with its smaller and harder-to-distinguish yield losses.
The index gives these patterns a scale that can be compared with past harvests. Its relationship with yield loss was stronger for the second crop than the first, so it is more useful for identifying high-risk second-crop seasons than for making precise predictions in every county and year. The 2026 comparison is still incomplete, and historical weather replay does not demonstrate that the system can forecast stress early enough to act.
Block 1 therefore provides a historically tested estimate of crop stress and potential protectant demand, not proof that ACC deaminase will prevent the predicted loss. It passes an addressable stress signal to Block 2; the biological efficacy of that signal still needs direct testing.
## 3.Block 2 · Optogenetic kinetics
One litre of culture clears a gram of ACC a day.
The reactor holds Bacillus subtilis WB800 carrying the cyanobacterial CcaSR two-component system. Green light at 535 nm activates the sensor kinase CcaS, which phosphorylates CcaR. CcaR~P activates the PcpcG2 promoter, transcribing acdS fused to a secretion signal peptide. The Sec translocon exports the enzyme and cleaves the signal peptide, leaving active ACC deaminase in the culture supernatant.
[IMG] A schematic of a Bacillus subtilis WB800 cell. Green 535 nanometre light drives the membrane sensor CcaS, which carries a phycocyanobilin chromophore needing ho1 and pcyA; red 672 nanometre light reverses it. CcaS phosphorylates CcaR, and CcaR~P activates the P_cpcG2 promoter driving a signal peptide fused to acdS. The ribosome makes pre-ACCD, the Sec translocon exports it and cleaves the signal peptide, leaving active ACC deaminase outside. A line at the bottom reads measured at this point: samyQ 7.25, csn 3.31 below detection, WB800 host zero.
[CAPTION] Figure 13. The induction and secretion pathway. Green light drives CcaS; red light at 672 nm reverses it. CcaS requires the chromophore phycocyanobilin, which B. subtilis does not synthesise, so the construct must also carry ho1 and pcyA. Activity is measured in the supernatant, after the final step.
[FOLD] Assumptions
[TABLE] The three assumptions the optogenetic kinetics rest on, with the basis for each
| #
| Assumption
| Basis
| B1
| The construct supplies phycocyanobilin.
| CcaS is a bilin-binding photoreceptor. B. subtilis does not synthesise PCB, so Castillo-Hair co-expressed ho1 and pcyA alongside the sensor.
| B2
| The CcaSR transfer function measured on a fluorescent reporter also describes acdS transcription.
| Same promoter, same sensor, same host.
| B3
| Activity in the supernatant is proportional to correctly folded, secreted enzyme.
| The assay measures α-ketobutyrate, produced 1:1 with ACC cleaved, so it reports catalytic activity rather than protein mass.
### Result 1 · Useful control runs from demand 0.015 to 0.94, and the lamp sets both ends
The measured transfer function. Castillo-Hair et al. (2019) characterised CcaSR in B. subtilis and fitted the steady-state response to a Hill function with half-maximal intensity K½ = 4.66 ± 0.63 µmol m−2 s−1 and Hill coefficient n = 1.88 ± 0.16, over a dynamic range exceeding 70-fold. The same system in E. coli gives K½ = 1.075 and n = 2.737, so the parameters are host-specific and the B. subtilis values are the correct ones here.
[IMG] Promoter output as a per cent of maximum against green light photon flux on a logarithmic axis. A green curve for the B. subtilis system reaches half maximum at 4.66 micromoles per square metre per second; a dashed grey curve for the E. coli system reaches half maximum at 1.075 and rises more steeply. A shaded band marks the reactor lamp range from 0.5 to 20.
[CAPTION] Figure 14. CcaSR steady-state transfer function. The B. subtilis system is four-fold less sensitive and less cooperative than the E. coli system. Shaded band is the reactor lamp range.
Inversion. Block 1 produces addressable stress Saddr and converts it to a demand f between 0 and 1. The lamp setpoint is the light intensity that drives promoter output to that fraction of maximum:
Lamp setpoint from demand
I = K1/2(f1−f)1/n(5) I \;=\; K_{1/2} \left( \frac{f}{1-f} \right)^{1/n} \tag{5} I=K1/2​(1−ff​)1/n(5)
K½ = 4.66 µmol m−2 s−1, n = 1.88.
[IMG] Lamp photon flux against demand f, rising gently from 0.5 at low demand through about 4.7 at demand 0.5, then steeply to the 20 micromole ceiling just past demand 0.94. A grey dashed line continues the unclipped inverse Hill above the ceiling. A right-hand axis converts to illuminance up to about 2,500 lux. Shaded strips mark the lamp floor below demand 0.015 and saturation above 0.94.
[CAPTION] Figure 15. Demand to lamp setpoint. Below f = 0.015 the computed intensity falls under the lamp floor; above f = 0.94 it exceeds the 20 µmol m−2 s−1 ceiling. Right axis gives illuminance at 526 nm.
[TABLE] Lamp photon flux and illuminance for six demand levels
| Demand
| PPFD (µmol m−2 s−1)
| Illuminance (lux)
| 0.05
| 0.97
| 121
| 0.1
| 1.45
| 180
| 0.25
| 2.6
| 322
| 0.5
| 4.66
| 578
| 0.75
| 8.36
| 1,037
| 0.9
| 15.00
| 1,859
The lux conversion uses photon energy at 526 nm (3.78 × 10−19 J, or 0.228 J µmol−1) and the photopic luminous efficacy at that wavelength (683 × 0.80 = 546 lm W−1), giving 124 lux per µmol m−2 s−1. Both quantities are per unit area, so no area term enters. The ceiling saturates the promoter at f = 0.94, so demands above that are indistinguishable to the reactor.
### Result 2 · Seven hours from decision to protection, so the controller must run on forecast
[IMG] Four panels. Top left, output rising to half of final 105 minutes after the lamp goes on. Top right, output falling to half 75 minutes after it goes off. Bottom left, a stacked bar of the 7.3 hour horizon: 1.8 hours transcription lag, 2 hours accumulation, 0.5 hours harvest and load, a sliver for spraying, and 3 hours stomatal uptake. Bottom right, dose time against demand under three assumptions: flat at two hours if required mass scales with demand, rising linearly if it scales with the square, and falling steeply if the required mass is fixed.
[CAPTION] Figure 16. Top: CcaSR response kinetics; activation is slower than deactivation, so the system commits to production before it can confirm the stress. Bottom left: the horizon by step. Bottom right: dose time against demand under three assumptions about how required mass scales.
[TABLE] The five steps between deciding to produce and the enzyme being active in the leaf
| Step
| Hours
| Source
| Transcription lag (to half-max)
| 1.8
| CcaSR reporter kinetics Literature
| Accumulate required amount
| 2
| Assumed placeholder
| Harvest, concentrate, load
| 0.5
| Block 3 Design
| Spray
| 0.1
| Knapsack application Design
| Stomatal uptake into apoplast
| 3
| Surfactant-assisted uptake Literature
| Total H
| 7.3
| Reactor alone would be 4.2 h
### Result 3 · Secretion detected at 7.25 mU mL−1, not yet quantified
Measured activity. ACC deaminase activity was measured by DNPH colorimetry on culture supernatant. The enzyme converts ACC to α-ketobutyrate and ammonia in 1:1 stoichiometry, so α-ketobutyrate production equals ACC cleaved. Reaction conditions were 43.0 mM ACC, pH 8.0, 30 °C, 30 min, with the WB800 host supernatant as blank.
[IMG] Bar chart of ACC deaminase activity in milliunits per millilitre of supernatant for three constructs. WB800 host blank is zero, csn signal peptide is 3.31, samyQ signal peptide is 7.25. A dashed limit-of-detection line sits at 4.9 and a dashed limit-of-quantitation line at 14.8, so only samyQ clears detection and neither clears quantitation.
[CAPTION] Figure 17. Secreted activity by signal peptide. Detection and quantitation limits are derived from the standard-curve residuals as 3.3σ/m and 10σ/m.
[TABLE] Measured absorbance, cell density and derived activity for the host and two signal peptides
| Construct
| A540
| OD600
| Activity (mU mL−1)
| Per OD600
| Status
| WB800 host
| 0.388
| 3.322
| 0
| —
| Blank by definition
| csn
| 0.404
| 2.638
| 3.31
| 1.25
| Below LOD
| samyQ
| 0.423
| 3.058
| 7.25
| 2.37
| Detected, below LOQ
Signal is not a biomass artefact. WB800 has the highest OD600 and the lowest absorbance; samyQ has lower biomass and higher signal. A background from cell density or secreted carbonyl metabolites would produce matching ranks. This argument is independent of the standard curve and survives any calibration error.
Calibration correction. The standard-curve concentrations were originally computed against a 110 µL reaction volume while the actual standard volume was 160.6 µL. Correcting this reduces every derived activity by a factor of 1.460.
[IMG] Absorbance at 540 nanometres against alpha-ketobutyrate concentration. Red crosses mark the five standards as originally labelled, spread out to 4 millimolar; grey arrows move each one left onto a green fitted line, with the corrected points reaching only 2.7 millimolar. The title says labels overstated concentration 1.460 times, inflating activity 46 per cent.
[CAPTION] Figure 18. Standard curve before and after correction. Arrows show each point moving to its true concentration. Fitted slope 0.18695 AU mM−1, R2 0.99907, residual SD 0.00715.
Implied enzyme concentration. Substrate was 43.0 mM against a Km of 3.4 mM, so the assay ran at 93% of Vmax. Correcting to Vmax = 7.82 mU mL−1 and applying kcat = 146 min−1 (P. putida UW4) gives a secreted enzyme concentration of 54 nM, or 1.96 mg L−1.
From activity to protein
vVmax⁡=[S]Km+[S]=43.03.4+43.0=0.927,Vmax⁡=7.250.927=7.82 mU mL−1(6) \frac{v}{V_{\max}} = \frac{[S]}{K_m + [S]} = \frac{43.0}{3.4 + 43.0} = 0.927 , \qquad V_{\max} = \frac{7.25}{0.927} = 7.82\ \mathrm{mU\,mL^{-1}} \tag{6} Vmax​v​=Km​+[S][S]​=3.4+43.043.0​=0.927,Vmax​=0.9277.25​=7.82 mUmL−1(6)
[E] = Vmax⁡kcat = 7.82 nmol min−1 mL−1146 min−1 = 53.6 nM = 1.96 mg L−1(7) [E] \;=\; \frac{V_{\max}}{k_{\mathrm{cat}}} \;=\; \frac{7.82\ \mathrm{nmol\,min^{-1}\,mL^{-1}}}{146\ \mathrm{min^{-1}}} \;=\; 53.6\ \mathrm{nM} \;=\; 1.96\ \mathrm{mg\,L^{-1}} \tag{7} [E]=kcat​Vmax​​=146 min−17.82 nmolmin−1mL−1​=53.6 nM=1.96 mgL−1(7)
Michaelis–Menten with no inhibition. The mass uses the 36.5 kDa subunit, because kcat is per active site and the active tetramer carries four of them: 53.6 nM of sites is 13.4 nM of tetramer, and both come to the same 1.96 mg L−1 of protein. The published range for B. subtilis heterologous secretion is 4 to 200 mg L−1, so this sits a factor of two below its floor.
Accumulation. Enzyme accumulates while the lamp runs and decays in the medium, so banked activity saturates at production rate × mean lifetime. Running the reactor longer past that point adds nothing.
[IMG] Banked activity in kilounits inside a 1,000 litre reactor against days of accumulation, for three assumed medium half-lives. One day flattens at a ceiling of 50 kilounits within four days; seven days reaches 264 and is still rising at a ceiling of 352; thirty days reaches 417 against a ceiling of 1,506.
[CAPTION] Figure 19. Banked activity at the measured secretion rate, for three assumed medium half-lives. The half-life has not been measured for this preparation.
Culture reached OD600 3.06. At a doubling time of 29 min in LB at 37 °C, that is about 5.9 doublings from a 1:100 inoculum, or 4 to 6 h including the approach to stationary phase. Batch duration was not recorded, so the production rate is inferred rather than measured.
In the unit Block 3 works in, 7.25 mU mL−1 is 44.0 mg of ACC cleared per litre of supernatant per hour, or 1.056 g per day.
Conclusion
The CcaSR literature provides a starting point for translating a desired promoter response into a green-light intensity. In our assay, the samyQ construct produced a detectable ACC deaminase signal in the culture supernatant, while the csn result was below the detection limit. This supports carrying samyQ forward for testing.
The measured activity is not yet precise enough to establish production capacity: it came from one well and falls below the assay's quantification limit. The light-response curve comes from published reporter measurements, and several steps used to estimate when active enzyme would reach the plant rely on assumptions rather than measurements of our construct and delivery system. The resulting response-time estimate is therefore a planning scenario, not a validated operating time.
Block 2 establishes a promising secretion signal and a framework for light control. It does not yet show how much enzyme a given stress level requires or how quickly a field-ready dose can be produced. Those are the key measurements needed before the Block 1 demand signal can be converted into a dependable production schedule.
## 4.Block 3 · Dose and payback
How much protectant, and how many reactors?
Blocks 1 and 2 end in units nobody farms with: a stress index, and a titre in mU mL−1. This block turns them into litres, machines and New Taiwan dollars for waterlogging in the second rice crop, which is the stress Block 1 can actually count and the one this enzyme acts on most strongly.
[IMG] Four boxes under the title the whole calculation. One plate, 1.67 millilitres over 100 square centimetres, measured. One hectare, 1,670 litres of neat culture, arithmetic. A rice canopy, 4,008 litres for one application, modelled. In the tank, 400 litres of water plus concentrate, what the farmer handles. Arrows between them read times ten to the eighth divided by 100, times 2.4, and divided by 10 concentrate. A note says only the first box is measured on a plant, the third carries a band of 2,806 to 5,878 litres, and the third box multiplies by the field area in hectares.
[CAPTION] Figure 20. From one plate to one application. Step 2 is arithmetic on a measured rate. Step 3 is the only modelled step, and it carries the widest uncertainty in the block.
[FOLD] Assumptions
Working scenario, not a validated field dose: about 4,082 L/ha of culture-equivalent per modelled pass. It follows from a reported plate treatment, an assumed plate area, and an unvalidated rice-canopy correction. The minimum effective dose and the actual per-pass amount for rice have not yet been measured. The seasonal pass counts below are likewise historical simulations under a provisional trigger and an unmeasured protection lifetime.
The figures and tables in this block carry 4,008 L/ha, which is the same chain with the canopy correction rounded to 2.4; 4,082 L/ha is the unrounded 2.444, 1.8% higher and well inside the 2,806 to 5,878 L band the correction already spans.
### Result 1 · How much protectant is needed?
This is the most important result. Everything that leads to the calculation in Result 1 is set out in Result 2.
Nothing in the science changes with field size. Every figure here is the same per-hectare rate multiplied by area. A farmer with 1 分 and a farmer with 10 公頁 face the identical calculation. Only two things fail to scale cleanly: reactor units round up to whole machines, and whether a season fires at all is set by the weather, not by how much land you have.
[TABLE] Litres of neat culture by field size, for one application, a median season that fires, and the worst season on record
| Land size
| One application
| A season that fires (9 passes)
| Worst on record (17 passes)
| 1 分 (0.097 ha)
| 389 L
| 3,499 L
| 6,609 L
| 5 分 (0.485 ha)
| 1,944 L
| 17,493 L
| 33,043 L
| 1 甲 (0.970 ha)
| 3,887 L
| 34,986 L
| 66,085 L
| 1 公頁 (1.000 ha)
| 4,008 L
| 36,072 L
| 68,136 L
| 3 公頁 (3.000 ha)
| 12,024 L
| 108,216 L
| 204,408 L
| 10 公頁 (10.000 ha)
| 40,080 L
| 360,720 L
| 681,360 L
Litres of neat culture. One application is diluted into 400 L of tank mix per hectare.
#### Amount of protectant, by land size and stress level
Two inputs. Field size sets the litres per application, and the stress level sets how many applications the season needs. The stress bar is not a made-up scale: its four stops are the only four outcomes that occur in 25 years of 雲林 record, with how often each one happened.
[IMG] A calculator panel with a field size of 1.00 公頃 and a stress slider at its lowest stop. A line reads quiet season, no dekad crosses the trigger, 17 of 25 seasons including 2024. Four figures below: 4,008 litres for one application with 400 litres in the tank, zero applications this season, zero litres as the season total with the reactor idle, and 68,136 litres as the worst case for sizing at 17 applications in 2001 and 2008.
[CAPTION] Figure 21. One hectare on a quiet season. No dekad crosses the release trigger, so nothing is sprayed and the reactor stays idle. 17 of the 25 seasons on record look like this, 2024 among them.
[IMG] The same calculator panel with the stress slider at the third stop. A line reads two stress windows, two separate runs, 2 of 25: 2007 and 2023. The figures below read 4,008 litres for one application with 400 litres in the tank, 12 applications this season, 48,096 litres as the season total with 4,800 litres of tank mix, and the same 68,136 litre worst case.
[CAPTION] Figure 22. The same hectare with two stress windows, which happened in 2 of the 25 seasons, 2007 and 2023: 12 applications, 48,096 L of culture across the season and 4,800 L of tank mix.
### Result 2 · Where those numbers come from
Three things to justify: the dose we measured, the correction we modelled, and how often a field needs it. Then one question that could undo all three.
#### The dose, and why it is a ceiling rather than a requirement
Experiment #9 sprayed 1.67 mL of filtered supernatant onto a plate of seven-day-old Arabidopsis. A recorded volume over an assumed plate area is a rate, and a rate scales to a hectare without any modelling in between.
[TABLE] What the per-hectare dose rests on, quantity by quantity, with whether each was measured or assumed
| Quantity
| Value
| Status
| Volume applied
| 1.67 mL
| From the protocol Measured
| Plate area
| 100 cm2
| Reconstructed, never written down Assumed
| Rate per hectare
| 1,670 L
| Arithmetic
| Our measured titre
| 7.2514 mU mL−1
| Above LOD, below LOQ Measured
| Activity delivered
| 12.1 kU ha−1
| Arithmetic
The experiment changed salt level and timing, but not the amount. So 1,670 L/ha is a dose that worked, not the smallest dose that works, and the true minimum sits somewhere at or below it. One plate with neat, 1:3, 1:10 and 1:30 arms would find it, and every litre on this page would move with the answer.
#### The canopy correction, the one modelled step
A seedling plate and a rice canopy are not the same target. Rice carries far more leaf, so it catches much more of the spray, and then shares it over much more surface. Those two effects pull in opposite directions, and the second wins.
[IMG] Two panels. A seedling plate at leaf area index 0.115 catches 5.6 per cent of the spray, giving 0.486 per unit of leaf. A rice canopy at leaf area index 4.5 catches 89.5 per cent, giving 0.199 per unit of leaf. A note reads rice catches 16 times more spray but has 39 times more leaf to share it among, so each leaf gets 0.41 times as much and the dose is multiplied by 2.44. This is a model, not a measurement.
[CAPTION] Figure 23. The canopy correction. Rice catches 16× more spray and carries 39× more leaf to share it among, so the dose is multiplied by 2.44×. This is a model, not a measurement.
#### How often a field actually needs treating
Block 1 rebuilt its stress index dekad by dekad for every 雲林縣 second crop (二期) from 2001 to 2025. A dekad (a 10-day period) qualifies for release when the share of stress this enzyme can act on, here waterlogging, reaches 1% expected loss on its own.
[TABLE] Applications per season and the culture they need, on four bases, with what each basis is good for
| Basis
| Applications
| Culture, L/ha
| What it is for
| Averaged over all 25 seasons
| 3.28
| 13,146
| Budgeting only. No season ever looks like this
| A median season that fires
| 9
| 36,072
| The realistic planning case
| 90th percentile
| 12
| 48,096
| A defensible basis for sizing capacity
| Worst on record, 2001 and 2008
| 17
| 68,136
| What the hardware has to survive
#### Enzyme entering the leaf
This does not enter the arithmetic, because whatever uptake happened on the plate is already inside the 1,670 L. It matters for a different reason. If an intact enzyme cannot cross into a rice leaf, then no amount of volume fixes it, and the canopy correction is correcting the wrong thing.
[IMG] Horizontal bars on a logarithmic size axis in nanometres under the title the cuticle is shut, the stoma is wide open. Water 0.3, sucrose 1.0, cuticle aqueous pore 4.5 in red, ACCD subunit 5.9, ACCD active tetramer 9.4, and open stomatal pore 2,000. A pale vertical band marks the cuticle pore width, and both enzyme bars extend past it.
[CAPTION] Figure 24. Sizes on a log scale. The enzyme is excluded from the cuticle by two-fold. The open stomatal pore is not the barrier it looks like here: along that route the size-exclusion limit is about 10 nm, and the 9.4 nm tetramer clears it only just.
Rice is amphistomatous: stomata sit on both surfaces, about 187 per mm² above and 621 below. Most crops keep theirs only on the underside, where a spray never lands, so a sprayed rice leaf at least offers pores on the side the droplets reach.
[IMG] Light micrograph of the upper surface of a rice leaf, with rows of stomata running parallel to the veins.
[CAPTION] Figure 25. Rice leaf, upper (adaxial) surface, 186.7 stomata per mm2.
[IMG] Light micrograph of the lower surface of a rice leaf, with denser rows of stomata between the veins.
[CAPTION] Figure 26. Lower (abaxial) surface, 621.0 per mm2. A spray lands on the upper one.
### Result 3 · Can we make it, and is it worth it
#### On-time delivery
Block 2 gives the reactor a production rate of 34,807 mU per reactor-litre per day at our titre, which is 0.2083 reactor-litre-days for every litre of culture. Lead time for one application is then the culture volume divided by total vessel volume, plus the 7.3 h forecast lag.
[TABLE] Lead time for one hectare and three hectares, for fleets of two to twenty 20-litre vessels
| Fleet, 20 L vessels
| Total volume
| Lead time for 1 ha
| Lead time for 3 ha
| Verdict
| 2 units
| 40 L
| 21.2 d
| 62.9 d
| Too slow to chase a forecast
| 5 units
| 100 L
| 8.7 d
| 25.4 d
| Too slow to chase a forecast
| 10 units
| 200 L
| 4.5 d
| 12.8 d
| Only works with stock on hand
| 20 units
| 400 L
| 2.4 d
| 6.6 d
| Only works with stock on hand
The useful weather forecast runs about 3 days ahead. Producing a single hectare-application takes 4.5 days on a 10-unit fleet, and the worst recorded window in 2008 needed 16.4 days of lead against that 3-day forecast. The reactor cannot chase the weather. It runs continuously through the season and builds stock; the forecast decides when to spend the stock, not when to start brewing. Storage stability is therefore load bearing, and it is unmeasured.
#### Payback, and the answer nobody wants
At the official 2026 farm-gate price, a hectare of ordinary 雲林 paddy carries NT$4,429 per crop of weather-attributable loss that this enzyme could address. Block 3 also finds the first crop never crosses the release threshold in 25 years, so only one crop a year benefits. With 10 units at NT$30,000 each, payback is 64.7 years. Pushing efficacy to the physical ceiling of 1.0 still leaves 38.3 years. A 5-year payback would need an efficacy of 12.8, which is not a hard target, it is an impossible one.
[TABLE] Annual benefit and payback period on ordinary and salt-affected land, at two efficacies, two unit counts and two unit prices
| Land
| Efficacy
| Units
| NT$/unit
| Benefit/yr
| Payback
| Ordinary paddy
| 0.28
| 10
| 30,000
| 4,635
| 64.7 y
| Ordinary paddy
| 1.00
| 10
| 30,000
| 7,824
| 38.3 y
| Ordinary paddy
| 1.00
| 10
| 3,000
| 7,824
| 3.8 y
| Salt-affected
| 0.28
| 10
| 30,000
| 126,967
| 2.4 y
| Salt-affected
| 0.28
| 50
| 30,000
| 126,967
| 11.8 y
| Salt-affected
| 1.00
| 10
| 30,000
| 444,724
| 0.7 y
Limitations
Three experiments could change our estimates substantially: measuring how long the enzyme lasts on leaves, finding the minimum effective dose, and measuring spray capture on rice canopies.
#### Where improvements need to be made
Four errors survived into drafts of this page before we caught them. We list them because a model that has never been wrong in public has usually not been checked.
[TABLE] An error caught in an earlier draft of this block, and why it was wrong
| What we had
| Why it was wrong
| “The enzyme passes with room to spare”
| We compared a 9.4 nm tetramer with the ~2,000 nm stomatal aperture. The aperture is not the barrier. The size-exclusion limit of about 10 nm is, and we clear it only just.
The draft writes out one of the four. The other three are not recorded anywhere, so they are not listed here.
#### What would overturn this
Measuring rice leaf area and spray capture directly would replace the canopy correction, which alone spans 1.68 to 3.52. Until those are done, 4,082 L/ha should be read as a modelled scenario, neither a validated requirement nor an established upper bound.
## 5.Conclusion
Block 1 ends with a stress index fitted to 25 years of county harvests: 32% less county error than the no-weather trend in the second crop, and a price on every index level, about 4% of yield or NT$7,539/ha at a moderate first-crop season. Block 2 ends at the reactor outlet: useful lamp control between demand 0.015 and 0.94, 7.3 h from decision to enzyme in the leaf, and 7.25 mU mL−1 of secreted activity, above detection and below quantitation. Block 3 turns both into the number a farmer would act on.
Given that the crop is rice, how much protectant does a farmer need for a field of a given size? Under the current assumptions, the calculator gives a modelled scenario of about 4,082 litres of culture-equivalent per hectare per pass, formulated into 400 litres of tank mix. This is not yet a validated rice dose or a minimum effective amount. The historical pass count is also conditional on a provisional stress trigger and an unmeasured protection lifetime. Land-size scaling is straightforward; the biological dose is not.
A number on its own is not a model. Getting to this one forced us to reconsider not just the dose, but how ReLEAF would actually work in the field.
1 · From production to application
A 10-unit reactor fleet needs 4.5 days to produce one hectare's application, longer than our three-day forecast window. We would need to produce and store culture in advance. Our weather analysis also showed that one stress window can require multiple sprays, with the number depending on how long the enzyme remains effective on leaves. Both storage stability and spray lifetime remain untested.
2 · From Arabidopsis to rice
Our Arabidopsis results already reach the ceiling of our efficacy calculation. More experiments under similar conditions won't answer the question that matters: whether ReLEAF works on rice. Our next step is to test rice in soil, measuring fresh weight, root length and applied volume, while finding the minimum effective dose and measuring spray capture on rice leaves.
3 · From a general solution to a specific need
Our model estimates a 64.7-year payback on ordinary paddy, compared with 2.4 years on salt-affected coastal land. These are projections, but the difference changes where ReLEAF might be useful.
And one thing we cannot fix this year
The payback is priced on salinity. The spray schedule, in the same block, is counted from waterlogging dekads. Salinity is chronic and sits in the soil every day, so it has no event for a forecast to catch, and Block 1 does not carry it in the index. Making the two agree means rebuilding the release rule around salt-sensitive growth stages, which would need roughly 15 applications over a 30-day window instead of 9. We know this is the largest open problem in the model. We would rather state it than paper over it.
We began by trying to calculate how much protectant a farmer would need. We ended up discovering how much we still need to learn before that number can be used in a real field. For us, that is the purpose of the model: not just to produce an estimate, but to show exactly what needs to be tested before ReLEAF can move beyond the lab.
## References
### Block 1 · Stress index
- Agriculture and Food Agency, Ministry of Agriculture (農粮署). County rice yield statistics, every season from 2001. The record the stress index is fitted and tested against, and the source of the realised 2026 first-crop yields.
- ERA5 daily reanalysis for the historical fit, and Central Weather Administration (中央氣象署) station data for live use. The weather inputs behind every stress term.
- Official 2026 farm-gate paddy price, NT$25.7/kg, used for every NT$ figure on this page.
- Grattan, S.R. et al. (2002) rice salt-tolerance yield response, the black line in Figure 10, with the older Maas–Hoffman guideline shown for comparison.
- Shultana, R. et al. (2020), the 8 dS/m reference point marked on Figure 10.
- Our wet lab: Arabidopsis salinity experiment #9, buffer or ACCD at three timings against 0, 75 and 100 mM NaCl, 15 days on agar.
### Block 2 · Optogenetic kinetics
- Castillo-Hair, S.M., Baerman, E.A., Fujita, M., Igoshin, O.A., Tabor, J.J. (2019) Optogenetic control of Bacillus subtilis gene expression. Nature Communications 10:3099. doi:10.1038/s41467-019-10906-6. Source of K½ = 4.66 ± 0.63 and n = 1.88 ± 0.16, of the ho1 and pcyA requirement, and of the response kinetics in Figure 16.
- ACC deaminase kinetics: Pseudomonas putida UW4, Km 3.4 mM, kcat 146 min−1.
- ACC deaminase quaternary structure: homotetramer, ~144 kDa, 36.5 kDa per subunit.
- B. subtilis heterologous secretion yields, 4 mg L−1 to 200 mg L−1.
- B. subtilis doubling time 28–30 min in LB at 37 °C.
- Our wet lab: DNPH ACC deaminase activity assay, 2026-10-07, FlexA A540 readings, n = 1.
### Block 3 · Dose and payback
- Our wet lab: Arabidopsis salinity experiment #9, phase 3 application protocol, three sprays from a sterilised nozzle at 10 cm, calibrated at 1.67 mL per three sprays in the companion heat protocol. Recorded on Plants. The source of the applied volume behind 1,670 L/ha.
- Our wet lab: DNPH ACC deaminase activity assay, 2026-10-07, 7.2514 mU mL−1 of reactor permeate, above the limit of detection and below the limit of quantitation. Every litre figure scales with it.
- Block 1 rebuilt dekad by dekad for every 雲林縣 second crop (二期), 2001 to 2025, from Agriculture and Food Agency yields and ERA5 daily weather. The source of the release count, of the 17 quiet seasons out of 25, and of the 2001 and 2008 worst case.
- Rice leaf area index 4.5 at panicle initiation against 0.115 on a seedling plate, and the spray-capture fraction at each. The canopy correction of 2.44× is modelled from these, not measured.
- Cuticular aqueous pores 4 to 5 nm, against the 9.4 nm active tetramer; organosilicone surfactants drive stomatal mass flow (Knoche 1994). Behind Figure 24.
- Rice stomatal density: IR64, 186.7 mm−2 adaxial and 621.0 mm−2 abaxial. Figures 25 and 26.
- ACC deaminase quaternary structure: homotetramer, about 144 kDa, 36.5 kDa per subunit, giving the 9.4 nm hydrodynamic size.
- Geospatial Analysis: capital cost NT$30,000 per unit, unit density by soil type, and the salt-affected profit figures behind the 2.4-year payback.
- Official 2026 farm-gate paddy price, NT$25.7/kg, behind the NT$4,429 per crop of addressable loss on ordinary 雲林 paddy.
[IMG]
