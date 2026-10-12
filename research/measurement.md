# Best Measurement casebook

Six Best Measurement winners, 2023 to 2025, read for how they write. Our page under review is the
Digital Twin (`software/index.html`), which makes its strongest claim about measurement rather than
about code.

Sources are the rendered text files in `sources/text/measurement-*.md`, listed with their URLs in
`sources/pages.measurement.txt`. Word counts are rough and include captions and image alt text.
Quoted fragments are verbatim from those files (iGEM wiki content, CC BY 4.0). The excerpt bank is
`research/measurement.excerpts.json`, 22 excerpts, at least three per winner.

The prize name did not change: it was Best Measurement in 2023, 2024 and 2025 and is Best
Measurement in 2026. No year or track was tied, and no sections were combined.

## Criteria

iGEM's 2026 description: "Measurements are how you show that a system, physical or computational,
behaves as expected, that data are reliable, and that a result actually matters." Standard URL:
`/measurement`. Ballot questions, verbatim:

1. Could the measurement(s) be reproduced by other iGEM teams?
2. Are the methods or protocols described well?
3. Could it be useful to other projects?
4. Did the team validate and calibrate their measurement process appropriately for their approach?

What each one rewards in writing terms:

Q1 reproduced. Not "was your work rigorous" but "can a stranger run it". It rewards the
instrument named with its model, the setting that changes the number, the reagent with its supplier
and grade, the volume, the wait, the blank, and the n. It punishes a verb with no object:
"we measured OD600" without wavelength, path length, instrument and blank is not reproducible, no
matter how good the data behind it are. Every winner answers this with nouns and numbers, not with
adjectives.

Q2 described well. This is about order and reason, not completeness. The winners who score here
write a step, then why that step is in that place. KULeuven has a whole table on the order in which
three reagents go into a cuvette. Estonia-TUIT tells you to order DNA with the overhangs already on
it and why that saves a PCR. A protocol that is correct but hidden behind a modal or a PDF scores
badly on this question, because the judge reads the page.

Q3 useful to other projects. It rewards one sentence that cuts the method loose from the
project, and one named artefact a team could pick up: a curve, a protocol, a guide, a test case,
a conversion factor. Estonia-TUIT does the cutting in nineteen words. William-and-Mary writes two
guides for other iGEM teams and says who they are for. Vague offers of collaboration score nothing.

Q4 validate and calibrate. The hinge is "appropriately for their approach". EPFL won the 2025
undergraduate award with a wood board, a gas flame, two cameras and ImageJ. The question is not
whether the instrument was expensive but whether the team established what it can and cannot see:
a standard with known values, a fit with its residuals, a stated range of validity, a limit of
detection, and controls that each rule out one thing. The two clearest patterns in the whole set
are a calibration curve read out loud at both ends (Aalto, Austin) and a standard made up in the
same matrix as the samples (KULeuven).

Where each winner answers each question on the page:

| Question | EPFL 2025 UG | Aalto-Helsinki 2025 OG | Austin-utexas 2024 UG | KULeuven 2024 OG | William-and-Mary 2023 UG | Estonia-TUIT 2023 OG |
|---|---|---|---|---|---|---|
| 1 Reproduced | 90 s flame cap, gridded boards, two synchronised feeds, n = 3, Fiji thresholding, plots and stats code on GitLab | Four protocols written out by day and step with per-well volumes and incubation times; plate map figure | iGEM calibration protocols cited by protocols.io link; gain 75, ex 570 nm, em 610 nm, Tecan Infinite 200 Pro named | Reagent order table, OD 0.2 start, 0.02% arabinose, 10 to 1000 mg/L range, named imager and plate reader | Numbered 14-step OD-to-CFU procedure in the body; full microscope system block with exposure, objective, filter wavelengths and software versions | Golden Gate part numbers in a table, plasmid-by-plasmid cloning strategy, flow cytometry at 24 h |
| 2 Described well | "Reasons behind the measurement choice" section before any result | Each assay has Aim, Materials, Protocol, Control Groups, Data Processing, Results, Discussion and Troubleshooting | Three conversion curves chained in order, each with its own Methods and Results | Hypothesis, Reasoning, Expected outcome per assay, plus Problem and Troubleshooting pairs and a reagent-order table | Why microscopy, why standards, what is missing from published methods, then the method | Design rationale per plasmid, then the assembly, then the readout |
| 3 Useful | Protocol designed to be run without fire-lab access; code published | "no identified studies that quantify cobalt in intrinsic factor–B12 reaction samples using MP‑AES"; documents a method gap | OD660 conversion curve offered for any team working with RFP; 4.44e8 cells per OD600 | "provides a roadmap for other researchers"; a scalable workflow from qualitative to quantitative | Guide to Quantitative Microscopy and Guide to Soil Microscopy, written for iGEM teams; extends iGEM calibration to a third instrument class | "this system could be modified to optimize shRNAs or siRNAs for any desirable target" |
| 4 Validated | n = 3, Welch's t-tests with Bonferroni correction, exact p values, spatial calibration from grid marks | 4PL standard curve with stated detection floor and saturation ceiling; five control groups each with Aim and Rationale; a result reported as below LOD | iGEM Calibrants Kit, Sulforhodamine 101 and silica nanoparticles, Anderson promoters as strength benchmarks, R² 0.9998 | Calibration curve 25 to 300 mg/L made in 0.85% saline to match the sample matrix; controls on every plate | Reproducibility defined as a formula, flat-field correction against a reference slide, residual plot to justify the linear fit, two independent counters | Two-sample two-tailed t-test with unequal variances, 3 biological replicates, normalisation to each strain's own parent |

## EPFL 2025

Project: Pyronix, a fire-retardant hydrogel. The page is titled "Burn Measurement". About 2,800
words, 23 captioned figures, no reference list of its own.

### Page anatomy

1. Objective (~90 words): what the experiment was for, in two sentences.
2. Experimental Setup & Protocol (~120): the flame cap, the safety stop, the citation the design
   came from, a schematic, a pointer to a PDF.
3. Reasons behind the measurement choice (~190): the constraint, the chosen metrics, the ablation
   design, the three negative controls.
4. Burn Test Videos (~190 of captions).
5. Qualitative Analysis (~900, nearly all captions): seven conditions, each a final-state photo and
   an IR image, then a Discussion.
6. Quantitative Analysis (~700): how the burn rate was derived, the statistics, four figures with
   results in their captions, then a Discussion.
7. Supplementary: Fiji analysis and data retrieval (~200).

### Opening

Four sentences and the reader knows what was measured, why, and against what. "The objective of
this experiment was to evaluate the fire-retardant properties of our hydrogel under controlled
conditions." Then the three things they wanted to show. Then the comparison: treated against
untreated wood, and burn behaviour over time. No wildfire statistics, no project recap.

### Calibration and limits

The calibration is spatial, not chemical: the grid marks printed on the boards convert pixels to
real area in Fiji. That is the whole calibration, and they say so plainly. The uncertainty is
carried by statistics instead: n = 3 per condition, Welch's t-tests, Bonferroni correction for
multiple comparisons, and the exact p value for every comparison including the ones that failed.

### Negative results

The best in the set. Their own engineered protein, SRSF1, did not beat the base gel or the lysate
control. They say it in one sentence, name the likely source of variance (wind, flame intensity),
and list three specific fixes. The partial formulations are reported with three p values, one of
which is 1.0000. Nothing is softened.

### Weak spots

The protocol itself is in a PDF and the sentence that points to it reads "More detailed information
on the experimental protocol and measurement methodology is available in the accompanying PDF:".
The page therefore fails its own strongest claim: a judge who does not open the PDF cannot repeat
the burn test. The qualitative section carries most of its content in figure captions, and two
captions (Figures F and H) are copy-paste duplicates describing the wrong sample. There is no
limit of detection: the smallest difference in charred area the method can resolve is never stated.

### For us

The "Reasons behind the measurement choice" heading is the single most transferable thing here, and
we have no equivalent. EPFL names the constraint before the metric, which turns a cheap rig into a
design decision. Their burn-rate normalisation is also our problem in another form: they divide
damage by time-to-removal because samples pulled early would otherwise look protected, exactly as
we convert flux to 25 degrees before comparing runs.

## Aalto-Helsinki 2025

Project: recombinant intrinsic factor from four species for oral vitamin B12. About 9,000 words,
the longest after William-and-Mary, 48 images, 16 references, four levels of heading.

### Page anatomy

1. Introduction (~700 words): the four pillars, and why they run in that order.
2. ELISA (~2,400): Aim, Materials and Equipments (reagents, consumables, equipment), Protocol by
   day and step, Control Groups & Their Purposes, Data Processing, Results, Discussion and
   Troubleshooting.
3. B12 binding assay (~2,200): same skeleton, with an eight-part data processing section.
4. Circular dichroism (~2,900): same skeleton, plus a ten-step analysis pipeline, a rationale and
   limitations block for their own scoring code, and three independent estimates compared.
5. MP-AES cobalt (~600): same skeleton, result below detection.
6. End Note (~70): pointers to Proof-of-Concept and Engineering.

### Opening

The best page-opening in the set, and the one our page should study. It starts after the work:
proteins already purified, the question now being how to evaluate them. The second sentence makes
the order of the experiments the claim: "Rather than running isolated tests, we planned a
measurement sequence where each experiment would answer a different question and each answer would
shape what we looked for next." Four paragraphs then walk the chain, each naming the logic
(clinical, functional, structural, orthogonal) before the instrument.

### Calibration and limits

Two models worth copying. The ELISA standard curve is read at both ends: the lowest standard is
named as the floor below which values are "not confidently distinguishable from background
absorbance", and the highest is named as the point where the assay "starts to saturate", with the
instruction that follows (dilute before quantifying). And the five control groups each get an Aim
and a Rationale, so every control rules out one named thing: plate-surface binding, secondary
antibody binding, substrate colour, antigen coating.

### Negative results

The cobalt measurement came back under the detection limit and the page reports it as a censored
value, with the raw readbacks shown and explicitly barred from arithmetic. They then argue that a
method nobody has published for this matrix returning nothing is a documented gap and not a
failure to replicate. They also say they wanted ICP-MS and hit "training and access barriers". The
CD section reports that one of three algorithms returned 100 per cent helix with a very poor fit
and calls it an algorithm limitation against the published crystal structure.

### Weak spots

Prose is loose, with filler that a judge will read as padding ("With light of all these, it can be
proudly said that", "When we did critical thinking and discussion among ourselves"). The B12
standard curve is described as "not perfect (R² < 1)" without giving the number, which is the one
place they report a fit without reporting it. The censored cobalt result is written "< 50 µg/L
(LOQ)" in Results and "< 50 µg/L (LOD)" in the Discussion, two different quantities. Replicate
counts are given as CV% across wells but never as a stated n per group.

### For us

The LOD and saturation passage is the direct model for our OD 1.2 ceiling, and shows what we are
missing at the other end: we state where the photometer stops being linear and never state where it
stops being able to see anything. Their troubleshooting paragraph (symptom, change, result, for
five separate problems) is also the most reusable thing on their page, and we have the same material
sitting in the "What it gave" column of our run table in a form nobody can lift.

## Austin-utexas 2024

Project: gliadin-degrading GI-tract bacteria. Listed on the results page as Austin-utexas; the wiki
brands itself UT Austin. About 3,100 words, 6 figures, 8 references.

### Page anatomy

1. Introduction (~330 words): project, why measurement matters here, the calibration kit.
2. Contributions and Achievements in Measurement (~90): four bullets, each one deliverable.
3. Calibration and Standardization (~1,200): the OD660 problem, three chained conversion curves
   each with Methods and Results, then the Sulforhodamine 101 fluorescence curve.
4. Characterized Constitutive Antibiotic Resistance Promoter Library (~1,000): design, methods,
   results against the Anderson series.
5. Measurement Award Considerations (~250): four bullets answering the ballot.
6. References.

### Opening

Three paragraphs, each doing one job: what the project needs measured, what was measured against
what benchmark, and what was used to calibrate. The benchmark is named in the second paragraph with
part numbers.

### Calibration and limits

The cleanest calibration chain in the set. They cannot read OD600 because mScarlet absorbs there,
so they move to 660 nm, build OD660 to OD600, then OD600 to cell count, then compose the two into
OD660 to cell count, and report each fit. They state the lower limit of their plate reader (not
reliable at or below OD600 0.1) and the lower limit of its fluorescence channel (nonlinear below 10
arbitrary units), in both cases from looking at the log-scale plot. They also justify their
reporting unit before using it, so "fluorescence per cell" means something by the time a number
appears in it.

### Negative results

Thin. The only inconvenient findings are instrument limits and the SpecR promoters that produced
"little to no fluorescence per cell, with levels too low to even compare to our Anderson Promoter
standards", which is honest but not dwelt on. Nothing failed that they had hoped would work.

### Weak spots

"Measurement Award Considerations" answers the ballot in the team's own voice and claims
"propagated uncertainty calculations" that appear nowhere on the page. The figure captions give
equations with the axes swapped relative to the text. Several sentences are garbled ("Although
particle count does value is not directly equivalent to cell count"). All protocol detail is
delegated to the experiments page, which renders as a stub because its protocol bodies are
collapsed.

### For us

This is the page our R2 section should be read against. They calibrate against purchased
standards with known values and chain conversions explicitly; we go one better by scoring two
instruments against a known dose instead of against each other, but we never write the chain. Their
honesty about particle count standing in for cell count is exactly our "TiO₂ shows linearity, not
cell number", and they say in the same breath what they did about it and who recommended it.

## KULeuven 2024

Project: engineered E. coli with metal-binding proteins for biomining. About 3,700 words, 12
figures, 3 tables, 1 reference.

### Page anatomy

1. A pull quote, then "From qualitative to quantitative" (~400 words): the three-assay progression
   and the one that was not done.
2. A compact units block: for each assay, Purpose, Results, Units, including "No specific
   units—data are qualitative" and a future assay marked as such.
3. Spot assay (~600): Introduction, Problem, Troubleshooting, Experimental setup and validation,
   Hypothesis, Reasoning, Expected outcome, Result and Discussion.
4. OD600 toxicity assay (~700): same skeleton.
5. Colorimetric assay (~1,400): same skeleton plus assay chemistry, reagent order table, two
   sampling approaches compared, standard curve, the arithmetic written out.
6. Future Perspectives (~400): ICP-OES and metal recovery.

### Opening

The progression is the opening. Three sentences take the reader from a qualitative screen to a
semi-quantitative assay to an indirect quantification, each introduced by what the previous one
could not tell them. The fourth paragraph says the direct quantification did not happen.

### Calibration and limits

The standards for the copper assay are made up in 0.85 per cent saline because the samples are in
saline, and the sentence says so. That one clause is the difference between a curve that transfers
to the samples and one that does not, and no other winner states it. The curve's range is given
(25 to 300 mg/L) and the working concentration sits inside it (50 mg/L). The conversion arithmetic
is written out as two equations so a reader can check the direction of the subtraction.

### Negative results

Three, all brief and all placed where they belong. The gradient streak assay was discarded for
introducing variability. Zinc never got a stable complex in the concentration range they needed.
The cobalt protein would not clone, so the optimised cobalt assay was never used on a sample. The
OD600 limitation (living and dead cells both scatter) is stated in the section that relies on
OD600, then bounded: the assay is only being used to pick concentrations for the next experiment.

### Weak spots

No n anywhere, and no error bars described. "The spot assay - Quantitative" labels a section the
text calls qualitative. Typos in units ("mg/Ly", "Caliberation") and a duplicated section number.
The single reference does the work of a bibliography.

### For us

Two things. First, the units block: Purpose, Results, Units, including the honest "no specific
units" and the channels that do not exist yet. That is our "What the reactor measures now" table
with the one column we are missing, which is what the number is good for. Second, the way a
limitation gets bounded rather than hedged: name what the reading cannot distinguish, then name the
decision it is still good enough to make. Our "Current limits" list names the limits but rarely
says which decisions survive them.

## William-and-Mary 2023

Project: Mycobacterium smegmatis as a soil chassis. About 12,400 words, 21 figures, 57 references.
The deepest measurement page in the set and the closest in spirit to ours.

### Page anatomy

1. Summary (~300 words): why measurement is hard in soil, and the strategy that follows.
2. "Our contributions and achievements in Measurement" (~350): ten bullets in two groups.
3. OD to CFU standard curve (~1,800): why the literature disagrees, a 14-step procedure, results,
   limitations of plate counting, then a long paragraph of literature discrepancies.
4. Promoter library (~1,300): why relative units, the dual-channel design, a seven-step
   normalisation, the ratiometric equation.
5. Fluorescence microscopy calibration (~3,000): the standards literature, the gap, the microscope
   system block, reproducibility, flat-field correction, concentration against intensity, residuals.
6. Direct microscopic enumeration (~2,000): what failed and why.
7. Microscopy Guides (~130), Direct plating (~1,200), promoters in soil-like media (~600),
   qRT-PCR (~800), Multimodal measurement (~500), InterLab (~70), References.

### Opening

It opens on the difficulty, not the project. Soil particles attach bacteria, scatter light and
autofluoresce; separation procedures are biased; therefore every variable gets more than one
measurement method. The strategy is a consequence of the first three sentences rather than an
announcement, and the whole 12,000 words are organised by that one decision.

### Calibration and limits

The richest material in the set. Reproducibility is defined as a formula before it is used.
Flat-field correction is validated against a reference slide, with the manufacturer's own tolerance
quoted as the comparison. A residual plot is produced to justify the linear fit, and the reasoning
is given: the residual R² of 0 and the scatter about zero mean a line was the right model. The
microscope system block lists objective, camera, gain, binning, exposure, illuminator voltage,
every filter's excitation and emission band, and the software versions. That block is the answer to
Q1 in one paragraph.

### Negative results

Four, and none of them buried. The dye slides reached only 54 per cent reproducibility against 78
for commercial beads, and the concentration-to-intensity fit was weak at R² 0.451; they list four
candidate causes and conclude the standard has potential but needs work. Direct microscopy could
not distinguish bacteria from soil, and they separate the cause cleanly: the non-significant result
"is representative of the limitation of the analysis method, not of biological results", proved by
plate counts. Subtracting control CFU counts produced negative values for 38 of 120 data points,
reported as a fraction. The qRT-PCR no-template controls were contaminated, so the whole dataset is
presented as proof of concept only.

### Weak spots

Length. Three sections tell the reader the same thing about multimodal measurement, and the
promoter-library paragraph appears twice almost word for word (lines 55 and 88 of the rendered
text). The literature-discrepancy paragraph is a 450-word wall. Numbers arrive without units
("threshold level of 20"), figure numbering slips (text says Figure 4 and 5, captions say 9 and 10),
and the two guides the page is built around are PDFs behind a 164-word wrapper page, so the guides
themselves are not readable from the wiki.

### For us

The model for our Results section. Their OD-to-CFU curve exists because the literature disagreed,
which is the same argument shape as our TiO₂ calibration existing because two instruments disagreed.
Their dual-channel reporter is our reference beam in biological form: a control channel measured at
the same time to absorb the variation you cannot otherwise account for. And their separation of
instrument limit from biology is the exact claim our trust layer makes, written out in a sentence
with the independent evidence attached.

## Estonia-TUIT 2023

Project: siRNA against Deformed wing virus, produced in engineered yeast. The page is titled
"MEASUREMENTS". About 2,700 words, 9 figures, 1 table, 4 references. The shortest winner.

### Page anatomy

1. Abstract (~290 words): the problem, the method, the generalisation.
2. Introducing RNAi to baker's yeast to minimize animal testing (~370): why this assay exists at
   all, including the ethical and biosafety argument.
3. RISC pathway (~200): the mechanism a reader needs.
4. The three-plasmid system (~450): one paragraph per plasmid, each with the design reason.
5. Experiments and Methods (~700): cloning strategy per plasmid, with advice.
6. Results (~250): one figure, one paragraph, the statistics in the caption.
7. Further advancements of the yeast siRNA assay (~450): four named improvements.

### Opening

The whole page is an argument that the measurement needed to exist. Computational siRNA prediction
is not enough, animal testing is slow and expensive, working with live virus is a safety problem,
so they built a yeast reporter. By the end of the abstract the reader knows the readout is GFP loss
and that the system generalises.

### Calibration and limits

No calibration in the instrument sense. What stands in for it is a confound found in the readout
itself: different target sequences in the 3' UTR changed GFP levels on their own, so every strain
is normalised to its own parent without shRNA. Three biological replicates, a two-sample
two-tailed t-test with unequal variances, and the significance thresholds are all in the figure
caption.

### Negative results

The headline limitation is a dynamic range problem, and it is the sharpest version of a problem our
page has. Four of seven shRNAs worked, but the assay could not rank them, because expression from a
high-copy plasmid drove the reporter down to background in every case. The fix is named and costed
in one sentence: use a lower-copy CEN plasmid. They also note the reporter's own half-life delays
the signal, and name the destabilised GFP that would fix it.

### Weak spots

Results are one paragraph for a page whose subject is a measurement method, and the key observation
about target-sequence effects is marked "(not shown)". No absolute units, no detection limit, and
no reference list heading (the four references are loose lines at the foot of the page). Of the four
"further advancements", none was tried.

### For us

The dynamic-range paragraph is the one to put beside our Beer-Lambert limit. It shows the honest
shape: the assay worked, here is the question it still cannot answer, here is the specific change
that would fix it, in that order and in about 90 words. Their abstract's last sentence is also the
move our "For other teams" list does well and our page never does for the rig app itself: cut the
method loose from the project in one sentence.

## Cross-case synthesis

### Shared skeleton

All six run in this order, with only the names changing:

1. Why this measurement, stated as a problem the project could not otherwise solve. Four of six
   make this a difficulty rather than a goal (soil interferes, OD600 collides with mScarlet, the
   literature disagrees, prediction is not enough).
2. What was measured against what: the standard, the benchmark, the control, the reference
   instrument.
3. The procedure, with reasons attached to the steps that matter.
4. The calibration and its range of validity.
5. Results, with n and a statistical test. None of the six holds any data back from the fit it
   reports, so held-out or leave-one-out scoring is a move available to us that no winner used.
6. What the measurement cannot see, and what decision it is still good enough for.
7. What another team can take.

Where they differ: whether the structure repeats per assay or runs once for the page. Aalto and
KULeuven use a fixed per-assay template (KULeuven's is Hypothesis, Reasoning, Expected outcome,
Result; Aalto's is Aim, Materials, Protocol, Controls, Data Processing, Results, Discussion and
Troubleshooting) and repeat it three or four times. EPFL, Austin and Estonia run the skeleton once
for the whole page. William-and-Mary runs it once per measurement modality and then adds a section
that compares the modalities against each other, which is the most ambitious structure of the six
and the only one that treats disagreement between methods as a result.

Only two of six have a section that exists to answer the ballot (Austin's "Measurement Award
Considerations", William-and-Mary's contributions list). Both read as the weakest part of their
page. The others let the structure answer it.

### UG and OG

- The three undergraduate pages (EPFL, Austin, William-and-Mary) are 2,800, 3,100 and 12,400 words.
  Two of three lean on published iGEM calibration protocols by name and link, which is how an
  undergraduate team buys credibility cheaply. Statistics appear as tests and p values.
- The three overgraduate pages (Aalto, KULeuven, Estonia) are 9,000, 3,700 and 2,700 words. All
  three develop an assay rather than apply one, and all three report an assay that did not work
  (zinc, cobalt, shRNA ranking). Two of three write per-assay protocols out in full.
- Neither track is longer or more rigorous on average. The strongest single page is undergraduate
  and the strongest single calibration passage is overgraduate.

### 2023 to 2025

- 2023 (William-and-Mary, Estonia): long-form argument, heavy citation, protocols in the body. The
  page is a document.
- 2024 (Austin, KULeuven): templates arrive. Hypothesis and Reasoning blocks, units tables, Problem
  and Troubleshooting pairs. Protocols start migrating to an experiments page.
- 2025 (EPFL, Aalto): the reasoning chain becomes explicit, with a section or paragraph whose only
  job is to say why these measurements and in this order. Figures carry more of the content, and
  the protocol detail moves into PDFs and modals, which is the one clear regression across the
  three years.

### Figures, equations, tables, code and references

- Figures: 6 to 23 per page, one every 120 to 450 words. The captions do real work in 2025 and
  almost none in 2023. EPFL puts results in captions ("the cellulose–silica–chitosan gel showed
  strong protection compared with water (p < 0.0002)"); William-and-Mary's captions are labels.
  Four of six put n, error-bar definition and the statistical test in the caption. Nobody names a
  source data file.
- Equations: used sparingly and always defined term by term. William-and-Mary gives the ratiometric
  formula with six symbols each defined on its own line. KULeuven writes y = mx + c and then
  x = (y-c)/m so the direction of the inversion cannot be mistaken. Aalto gives the 4PL model by
  name rather than in full, which is enough.
- Tables: used for parts lists, reagent order, units and control maps, never for results. The most
  copyable table in the set is KULeuven's reagent-order table, whose columns are the reagent, its
  purpose and why it goes in at that point.
- Code: two of six link it (EPFL's plotting and statistics on GitLab, Aalto's analysis described
  step by step in prose but not linked). Nobody publishes raw data.
- References: 0 to 57. The spread is the loudest difference between the pages. William-and-Mary
  cites the instrument-standards literature to establish that microscopy standards are
  underdeveloped, which is what earns the next 3,000 words. KULeuven's single reference is for the
  assay chemistry it adopted, which is the minimum that works. EPFL and Estonia have no reference
  list on the measurement page at all and still won.

### Length and density

Median is about 3,400 words. Four of six are between 2,700 and 3,700. Two are long, 9,000 and
12,400, and both earn it with multiple independent measurement modalities rather than with longer
paragraphs. Heading nesting goes two deep on four pages and four deep on Aalto, where it is used to
separate protocol steps from protocol materials. Paragraphs are short in 2025 and long in 2023.
No winner uses tabs or an accordion for the main argument.

### Sentence patterns worth stealing

- Range of validity: "This indicates that our plate reader may not provide accurate readings for
  values at or below OD600 of 0.1." (Austin)
- Saturation with an instruction: "higher concentrations will not give proportionally higher signals
  and should be diluted before being quantified" (Aalto)
- Censored value: "reported as '< 50 µg/L (LOQ)' with no numeric values used in calculations or
  comparisons" (Aalto)
- Instrument limit, not biology: "This statistical insignificance is representative of the
  limitation of the analysis method, not of biological results" (William-and-Mary)
- Matrix matching: "diluted from a stock solution in 0.85% saline to ensure consistency with the
  sample matrix" (KULeuven)
- Bounded limitation: "it cannot directly assess survival" followed by the decision the assay is
  still good for (KULeuven)
- Null result with its correction: "None of these conditions differed significantly from water
  following Bonferroni correction" (EPFL)
- A measurement deciding the next one: "At 50 mg/L, however, the OD600 readings for nearly all
  strains were consistent, suggesting this as an optimal concentration for subsequent experiments"
  (KULeuven)
- Confound normalised away: "we normalized the GFP fluorescence for each strain with shRNA to the
  data obtained for its parent strain without shRNA expression" (Estonia)
- Method cut loose: "this system could be modified to optimize shRNAs or siRNAs for any desirable
  target" (Estonia)

### Anti-patterns seen in winners

1. Protocol behind a PDF or a modal (EPFL's burn protocol, William-and-Mary's two guides, Austin's
   experiments page, EPFL's protocol cards). Four of six. It is the commonest fault in the set and
   it attacks the first two ballot questions directly.
2. A section that argues the team deserves the prize (Austin's "Measurement Award Considerations"),
   including a claim the page does not support.
3. A fit reported without its number ("not perfect (R² < 1)", Aalto).
4. Two names for one quantity (LOQ in Results, LOD in Discussion, Aalto).
5. Results living only in figure captions, so the argument cannot be read continuously (EPFL's
   qualitative section).
6. Duplicated captions describing the wrong sample (EPFL Figures F and H).
7. The same paragraph twice (William-and-Mary, promoter library).
8. A section labelled Quantitative whose text says qualitative (KULeuven spot assay).
9. No n, anywhere (KULeuven).
10. Key observation marked "(not shown)" in a page about measurement (Estonia).
11. Filler that reads as padding ("it can be proudly said that", Aalto).
12. Unit and spelling slips in the numbers themselves ("mg/Ly", KULeuven).

## Our page against the winners

Read on 12 October 2026 from `/Users/timmy/Documents/Claude/Projects/Releaf_Wiki/releaf-wiki/software/index.html`.
About 5,900 words, 10 figures, 9 references, 24 section headings, 213 table rows, 12 tab
switchers. Longer than four of the six winners.

The Digital Twin page's measurement argument is that the instruments are the only witness to a batch
nobody is standing next to. The evidence is a reference beam that never passes through the culture,
wall shear computed twice from two sensors agreeing to 2.8 per cent, a photometer calibrated against
a known TiO₂ dose rather than against another instrument, provenance stamped on every logged row,
and a trust layer that gave 26.7 hours of warning before the OD channel failed on a 434-hour run.

### Better than the winners

- Two independent routes to one quantity, used live. Wall shear from pressure and from flow,
  agreeing to 2.8 per cent in August, and a 20 per cent disagreement in October treated as a fault
  rather than as noise. No winner cross-checks a derived quantity by two routes and then uses the
  agreement as a running diagnostic. Aalto's MP-AES was meant to be the orthogonal check on their
  UV-Vis binding assay and it never produced a number.
- Calibrating against truth instead of against an instrument. Scoring both the in-line
  photometer and the BioDrop against a known TiO₂ dose, and reporting that the cheaper instrument
  was the more linear of the two, is a better calibration design than anything in the six. Austin
  calibrates to purchased standards, which is the same instinct, but never scores the reference.
- An independent witness on the instrument. The reference beam never sees the culture, so lamp
  drift is separable from biology. William-and-Mary's dual-channel reporter and flat-field reference
  slide are the same idea, but ours is scored as its own axis with a threshold fixed in advance on
  the healthy first 120 hours, which nobody in the set does.
- Scoring on data the fit never saw. R5 leaves out each light arm in turn, fits the other five and
  predicts the held-out arm's 24-hour biomass from its first eight hours (at most 7 per cent error
  with the prior, 29 to 68 per cent without). R3's alarm threshold is fixed on the healthy first
  120 hours and then scored on the remaining 314. Not one of the six winners holds data back from
  its own calibration; William-and-Mary comes closest by comparing plating, microscopy and qRT-PCR
  against each other. Our own R1 is the counter-example on our own page, and it says so: "No point
  was held out."
- A detection claim with a comparator. 26.7 hours of warning, and a naive step detector scored
  on the same data (23 per cent of sensor anomalies, 0.8 per cent of biological shifts, and unable
  to tell them apart). Only EPFL comes close to this discipline, and they do it with p values
  against controls.
- Provenance and data integrity. Each window fsynced as it closes, the same file resumed after a
  restart with the gap in a `gap_s` column, missing readings left blank and never zero, every row
  carrying the algorithm and constants that produced it. Not one winner writes a sentence about
  whether their logged data survived the experiment.
- A pre-registered prediction. `prereg_forecast_20261002.json`, SHA-256 fixed before the batch,
  with acceptance criteria and the sentence "the score goes here whichever way it falls". Nothing in
  the six is comparable, and no iGEM measurement page we read does this.
- A limits section with numbers in it. Eight bullets, each carrying a figure or a named cause.
  Denser and more specific than any winner's limitations.

### Worse than the winners

- No protocol. Not one measurement on the page can be repeated from the page. The whole TiO₂
  calibration is "cumulative TiO₂ additions gave 45 paired points between the in-line photometer
  and the BioDrop spectrophotometer": no dose per addition, no loop volume, no blank procedure, no
  settling time, no number of replicates. Compare Aalto's ELISA written out by day with per-well
  volumes, or William-and-Mary's 14 numbered steps. Ballot questions 1 and 2 are where we are
  weakest, and the material exists: our own wet lab Measurement page has the five-step SiO₂
  procedure, the bill of materials and the acquisition algorithm.
- n is a confession, not a column. "n = 1 almost everywhere" is in Current limits, which is
  honest, but no individual result states its replicate structure. R1 is eight pump settings
  measured once. R2 is 45 points from one afternoon. R3 is one run with one event of each kind. R5
  is one plate. Every winner states n where the result is: "n = 3 each" (EPFL), "3 biological
  replicates" (Estonia), "four trials ... triplicate cultures" (Austin), "n=3" (William-and-Mary).
- Headline numbers without intervals. We report R² and residual SD for R1 and R2, which is
  better than most, and then give 26.7 hours, 2.8 per cent, 41 per cent and 7 per cent with no
  uncertainty at all. 26.7 hours is one event on one run presented in the Abstract and the Key
  results as a capability.
- No limit of detection or blank level. The linear ceiling is stated and defended (OD 1.2 in a
  2 mm cell). The floor is never mentioned, and it matters most: run 4 starts "from near zero to
  0.24" and the 8 October batch opens at OD600 0.1758 AU, both inside the region where a blank-level
  statement decides whether the reading means anything. Austin states OD600 0.1. Aalto states
  0.1 ng/mL and 50 µg/L.
- Our two pages disagree about the same experiment. The Digital Twin says the photometer "was
  calibrated against a known TiO₂ dose", that both instruments "degrade above 30 mg", and gives the
  BioDrop R² 0.85 with SD 0.12. Our Measurement page calls the instrument "a validated,
  calibration-free in-line OD600 measurement device", says "we treat calibration as unnecessary",
  and reports "R² = 0.9999 photometer against R² = 0.9998 BioDrop" against the same TiO₂ standard. A
  judge who opens both sees one experiment reported two ways. The lamp is "amber LED" in our
  provenance table and "600 nm" on the Measurement page, which cannot both support an OD600 claim.
- No control written with its purpose. Blanks, a jumper in place of the module, and a
  minus-ACC blank all appear, but the page never says what each one rules out. Aalto gives five
  controls an Aim and a Rationale each; KULeuven gives one sentence of Reasoning per control.
- Residual SD without a residual plot. We report residual SD for both pressure fits and the
  photometer regression and show no residuals. William-and-Mary plots residuals specifically to
  justify choosing a line, which is the figure that would settle our OD 1.2 cut.
- Figure captions name the source file and not the data structure. Naming
  `0721, test3 20 day.csv` in a caption is better than anything the winners do and should stay. The
  captions never say n, what the shading means statistically, or whether the hourly medians carry a
  spread.

### Moves our page is missing entirely

1. A step-wise procedure for any measurement on the page. Even one, for the TiO₂ calibration, with
   doses, volumes and waits.
2. A blank level or limit of detection for the photometer, stated with the same care as the OD 1.2
   ceiling.
3. n and replicate structure beside each result, not only in the limits list.
4. Controls described by what they exclude.
5. A residuals figure for at least one calibration.
6. Any inter-operator or repeat-measurement check. Our flow measurement was moved to a meter
   because manual timing was "too dependent on the operator's technique", and that sentence is on
   the Measurement page, not here. William-and-Mary has two independent counters and a written rule
   for disagreements.
7. A matrix-matched calibration, or a statement of what one would need. The page says "TiO₂ shows
   linearity, not cell number" and stops. KULeuven makes its standards in the sample matrix on
   purpose and says why in one clause.
8. A troubleshooting log in symptom, change, result form. The material is in the run table's "What
   it gave" column and in the sentence "The rig app's interlocks, board-side recording, bubble
   rejection and calibration bookkeeping each exist because a run failed without them", which is a
   whole troubleshooting section compressed into one line.
9. A boundary sentence near the top saying which of our two pages owns which measurement. The
   pointer exists, in the last line before References.
10. A one-sentence generalisation of the rig app and its logger, cut loose from ReLeaf. "For other
    teams" does this well for five items and never for the thing that recorded every number on the
    page.

### The leaf sensor write-up

The bench test of the field leaf-and-air sensor is not on the page as rendered on 12 October: the
page carries only "One leaf sensor, on a bench. It reads a dummy leaf, cannot tell guttation from
dew" and a must-have line for calibrating then scoring it. When the numbers land, a leaf thermistor
reading 1.2 to 1.9 degrees warm against a reference in the same air, and a wetness channel that was
never wetted, that is the page's one chance to show a calibration that failed. The winners' pattern
is consistent and worth following exactly: put it in the section that uses the instrument, not in a
limits list; give the number and the reference it was measured against; say what decision the
channel can and cannot support until it is fixed; name the specific next test. EPFL's SRSF1
paragraph, Aalto's cobalt result and William-and-Mary's dye slides are all built that way, and all
three teams won.

## Rewrite checklist

Each rule can be checked by reading the page.

1. Give every measurement a procedure a stranger could run, on this page, in steps. Reason: ballot
   questions 1 and 2 ask for nothing else. Shown by Aalto (ELISA by day and volume),
   William-and-Mary (14 numbered steps), KULeuven (reagent order and why).
2. Put n next to the result, not in the limits list. Check: find every number in Key results and
   ask how many times it was measured. Reason: a judge cannot grade reproducibility without n.
   EPFL, Estonia, Austin, William-and-Mary.
3. State the range of validity at both ends. We have the ceiling; add the floor. Reason: a
   calibration without a floor cannot support a reading taken near zero, which is where every run
   starts. Austin (OD600 0.1), Aalto (0.1 ng/mL and saturation at 50 ng/mL).
4. Report a fit with its residuals and show them once. Reason: residuals are the evidence that the
   model was the right one. William-and-Mary.
5. Say what each control rules out, in one clause. Reason: a control with no stated purpose is
   decoration. Aalto (Aim and Rationale per control), KULeuven (Reasoning).
6. Make the standard match the matrix, or say what a matched standard would need. Reason: a curve
   fitted in water does not transfer to a culture, and the page already knows it. KULeuven.
7. Bound every limitation with the decision it still permits. Check: for each bullet in Current
   limits, add the sentence "so this reading can still be used to decide X". Reason: an unbounded
   limitation reads as an excuse. KULeuven (OD600 and survival), Estonia (dynamic range).
8. Reconcile the photometer story with the Measurement page before the freeze, and put one sentence
   at the top of each page saying which one owns the instrument. Reason: two accounts of one
   experiment is the fastest way to lose a measurement prize.
9. Attach an interval or an n to every number in the Abstract and Key results. Reason: 26.7 hours
   from one event, stated bare, invites the question we cannot answer. EPFL's p values, Aalto's
   SD and CV%.
10. Keep the source file in every caption and add n, the spread and what the shading means.
    Reason: nobody in the six names their data files and we should keep the lead.
11. Write the troubleshooting history as symptom, change, result. Reason: it is the most reusable
    thing on Aalto's page and we already have the material in one compressed sentence.
12. Report a failed calibration in the section that uses the instrument, with its number and its
    next test. Reason: all three of the strongest winners do exactly this. EPFL (SRSF1), Aalto
    (cobalt below LOD), William-and-Mary (dye slides at R² 0.451).
13. Add one sentence that cuts the logger and the trust layer loose from ReLeaf. Reason: ballot
    question 3 is answered by a sentence, not by a repository. Estonia's abstract.
14. Do not add a section arguing we deserve the prize. Reason: both winners who did it produced
    their own page's weakest passage, and one of them claimed something the page does not show.
    Counter Austin.
15. Keep the protocol out of modals and PDFs. Reason: four of six winners hid protocols that way
    and it is the clearest shared weakness in the set.

## Source notes

- All six winners were verified from `https://competition.igem.org/results/<year>?tab=special-prizes`
  for 2023, 2024 and 2025, rendered with `tools/render.sh` into `.render/results-<year>.html`. No
  tie, no combined section, no renamed prize.
- Three subpages were rendered and discarded as sources because their content is not in the DOM:
  `https://2023.igem.wiki/william-and-mary/guide-book` (164 words, PDF wrapper),
  `https://2024.igem.wiki/austin-utexas/experiments` (151 words, protocol bodies collapsed),
  `https://2025.igem.wiki/epfl/protocols` (288 words, 16 protocol cards whose text is in modals).
  Each failure is noted in the relevant Weak spots section, because it is also a finding about how
  winners lose Q1 and Q2.
- Our Measurement page (`measurement/index.html`, the wet lab assay page, about 14,700 words) is
  not ours to review. It is read here only for the boundary, and it matters in two places: it owns
  the photometer build, bill of materials, acquisition algorithm and the SiO₂ cross-validation
  protocol, and it contradicts the Digital Twin page on whether the photometer is calibrated.
- The Digital Twin page carries no mention of SiO₂, silica or microspheres as of 12 October. The
  silica repeat of the TiO₂ calibration exists only on the Measurement page, and there as a written
  protocol with no results behind it.
