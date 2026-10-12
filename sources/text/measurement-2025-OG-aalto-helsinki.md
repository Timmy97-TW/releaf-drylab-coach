[IMG] iGEM logo
[IMG] Aalto Helsinki iGEM 2025
### Contents
MeasurementMeasurement
## Introduction
Once we had successfully produced and purified intrinsic factor (IF) proteins from multiple species, our priority became figuring out how to evaluate them in a way that would guide future design choices for oral vitamin B12 supplementation. Rather than running isolated tests, we planned a measurement sequence where each experiment would answer a different question and each answer would shape what we looked for next.
[IMG] Diagram illustrating the measurement pipeline from immunology to elemental analysis
Figure 1. The four pillars of measurement used to characterise recombinant intrinsic factor (IF) proteins in our project, providing immunological, biochemical, structural, and elemental insights.
Our starting point was the antibody-interference ELISA. The logic here was clinical: in conditions like pernicious anemia, anti‑human GIF antibodies can block B12 binding. We needed to know if our non‑human IF variants would be recognized by these antibodies. So, our ELISA setup was an early filter for candidates that might evade immunological blockage in real‑world use.
With that immunological context in place, the next step was the B12 binding assay. Here the thinking was functional: regardless of antibody recognition, could these IFs actually capture and hold onto cyanocobalamin? We used UV‑Vis method of spectroscopy with centrifugal filtration because it allowed us to directly separate bound from free ligand, giving a clear readout of binding capability under controlled conditions. This step was designed to test the biochemical “core job” of IF-ligand capture in a way that connected back to the ELISA stage: an IF that avoids antibody binding but also binds B12 poorly would be unsuitable. We then turned to structural analysis by Circular Dichroism (CD) spectroscopy to ask why our best candidate IF's might behave differently than commercial IF or other reference protein. Our reasoning was that secondary structure, meaning the α/β fold arrangement, governs both the shape of the B12 binding site and the exposure of antibody epitopes. By looking at the far‑UV spectra, we could infer whether our best IF candidate folding was atypical, potentially explaining binding or immunoreactivity. This measurement was also tried to be complemented with our dry lab work.
Finally, we attempted elemental cobalt quantification with microwave plasma atomic emission spectroscopy (MP‑AES). This was our way of probing binding from a different angle: instead of relying on spectrophotometric ligand absorbance, we would detect the cobalt atom intrinsic to B12 after oxidative digestion. The rationale was to add an orthogonal, chemistry‑based verification method, but this step also served as a sensitivity test for the technique itself in our small‑volume, protein‑rich matrices, informing whether such elemental analysis is practical for future work or if ICP‑MS/OES should be pursued instead of MP-AES.
By structuring our measurements in this immunological ➜ functional ➜ structural ➜ elemental order, we created a reasoning chain that moved from clinical relevance to biochemical capability, then to molecular explanation, and finally to analytical validation. This approach ensured that even when an experiment had technical limits, it still contributed to the bigger picture of how to choose and refine IF variants for cross‑species engineering.
## In-vitro Antibody Interference Measurement: Indirect ELISA
### Aim
We planned this assay to assess whether synthetically produced intrinsic factor (IF) proteins from different species (human, bovine, rat, and platypus) exhibit cross-reactivity with commercially available anti-human GIF antibodies in an indirect ELISA format.
As we mentioned, intrinsic factor is a gastric glycoprotein essential for vitamin B12 absorption, and the presence of antibodies against IF (as seen in autoimmune gastritis or pernicious anemia) can impair B12 binding and transport, leading to deficiency. Antibody interference, which is basically high-affinity binding of anti-IF antibodies to the IF protein in this context, can block its functional domain for vitamin B12 binding.
In this experiment, we used indirect ELISA to quantify the ability of anti-human GIF antibodies to bind our recombinant IF proteins from different species. The commercial recombinant human IF served as a positive control, while blank and secondary-only wells served as negative/background controls. High ELISA absorbance values indicate strong antibody binding to the IF antigen (greater potential for interference), while low absorbance values indicate weak or negligible binding.
### Materials & Equipments
#### 1. Reagents
- Purified IF Proteins:
- PLT: 0.03967 mg/mL (39.67 µg/mL), MW 46020 Da, 0.862 µM
- RAT: 0.02167 mg/mL (21.67 µg/mL), MW 46000 Da, 0.471 µM
- BOV: 0.06067 mg/mL (60.67 µg/mL), MW 45440 Da, 1.335 µM
- HUMAN: 0.06167 mg/mL (61.67 µg/mL), MW 45420 Da, 1.358 µM
- Commercial control (Cloud-Clone corp., Recombinant Human GIF, RPD111Hu01)
- Primary antibody: Rabbit polyclonal anti-GIF (ThermoFisher PA5‑97783), stock 5 mg/mL, unconjugated IgG
- Secondary antibody: Goat anti‑rabbit IgG Fc‑HRP (ThermoFisher A18817), lyophilized and reconstituted to 0.8–1.0 mg/mL as per datasheet
- Buffers and solutions:
- TMB substrate: Ready-to-use (acquired from our PI Shiqi Wang)
- Stop solution: 0.2 M H₂SO₄ (or 1 M HCl)
- Coating buffer: 0.05 M carbonate-bicarbonate buffer, pH 9.6 (Bio‑Rad indirect ELISA protocol)
- Blocking buffer: PBS + 1% BSA (w/v) (Bio‑Rad BUF032 equivalent)
- Wash buffer: PBS + 0.05% Tween‑20 (PBST)
- PBS (1×)
- Sterile deionized water
#### Consumables
- High-binding ELISA plate (Nunc MaxiSorp F96)
- Adhesive plate sealers
- Micropipette tips (filtered, sterile)
- 1.5 mL microcentrifuge tubes
- 15/50 mL conical tubes
- Multichannel pipette reservoirs
#### 3. Equipments
- Micropipettes (P10, P100, P200, P1000)
- Multichannel pipette (P200)
- Plate reader (Varioskan LUX) (450 nm with 620–650 nm reference)
- SkanIt Software 6.1 RE for Microplate Readers RE, ver. 6.1.0.51
- pH meter
- Analytical balance
### Protocol
#### Day 1: Antigen coating
- Preparation of antigen solutions
- Target coating concentration: 5 μg/mL in carbonate–bicarbonate coating buffer
- Volume per well: 100 μL
- Calculated amounts for each IF antigen:
- Platypus IF: 126.1 μL stock + 873.9 μL buffer (per 10 wells)
- Rat IF: 230.8 μL stock + 769.2 μL buffer
- Bovine IF: 82.45 μL stock + 917.55 μL buffer
- Human IF: 81.05 μL stock + 918.95 μL buffer
- Commercial IF: 50 μL stock (0.1 mg/mL) + 950 μL buffer
- Dispense 100 μL of each diluted antigen into designated wells of the ELISA plate
- Add 100 μL coating buffer only to blank control wells
- Seal plate with adhesive film
- Incubate overnight at 4°C
#### Day 2: Blocking and Assay
##### Blocking
- Remove coating solution by flicking plate over the sink
- Wash wells 3× with 200 μL PBST (fill, flick, tap dry on paper towel)
- Add 200 μL blocking buffer (PBS + 1% BSA) to each well
- Incubate 1 h at room temperature (RT)
- Wash wells 3× with PBST
##### Primary antibody incubation
- Prepare two dilutions of primary antibody in blocking buffer:
1:5,000 (26 wells):
- Total volume: 2,860 μL (includes 10% excess)
- Add 0.572 μL stock (5 mg/mL) + 2,859.43 μL blocking buffer
1:100,000 (26 wells):
- Prepare intermediate 1:1,000 dilution: 1 μL stock + 999 μL buffer
- From intermediate, dilute 1:100 to final volume: 28.6 μL intermediate + 2,831.4 μL buffer (final total 2,860 μL)
- Add 100 μL diluted primary antibody to appropriate wells (secondary-only wells receive no primary)
- Incubate 1 h at RT
##### Washing
Wash 3× with PBST, leaving buffer in wells for ~30 sec each time
##### Secondary antibody incubation
- Prepare secondary antibody (1:5,000 in blocking buffer) for 64 wells:
- Total volume: 7,040 μL (includes 10% excess)
- Add 1.408 μL stock (0.8 mg/mL) + 7,038.592 μL blocking buffer
- Add 100 μL diluted secondary antibody to each well
- Incubate 1 h at RT
##### Final Washing
Wash 5× with PBST, leaving buffer in wells ~30 sec each time
##### TMB Reaction and Reading
- Add 100 μL TMB substrate to each well
- Incubate 15 min in dark; monitor for blue color development
- Stop reaction with 50 μL stop solution (0.2 M H₂SO₄ or 1 M HCl)
- Read absorbance at 450 nm within 30 min, using 620–650 nm as reference wavelength
[IMG] fig 1
Figure 1. Enzyme-substrate reaction upon TMB addition and following absorbance reading step with microplate reader (created with BioRender)
### Control Groups & Their Purposes
Our ELISA setup included several control groups to ensure data reliability, check for non-specific binding, and measure background signal:
#### 1. Commercial recombinant human IF (Positive control) (C5-6, C11-12, D1-2, D7-8)
- Aim: To confirm that the anti-human GIF primary antibody is functional and capable of binding human IF with high affinity.
- Rationale: This antigen is known to be recognized by the antibody according to manufacturer data and literature. It sets the benchmark for maximal binding signal in the assay.
#### 2. Blank (only coating buffer control) (D3-6, D9-12)
- Aim: To measure background signal arising from blocking buffer, antibodies, and substrate in the absence of any antigen.
- Rationale: Wells are coated only with carbonate-bicarbonate buffer, no protein. Any absorbance indicates non-specific binding of antibodies or substrate to the plate surface.
#### 3. Secondary-only control (F:1,3,5,7,9,11 & G:1,3,5,7,9,11)
- Aim: To detect non-specific binding of the HRP-conjugated secondary antibody to the plate or antigen in the absence of primary antibody.
- Rationale: Wells are coated with antigen and blocked, but receive only secondary antibody (no primary). Any signal here is due to secondary antibody binding directly to the antigen or plate.
#### 4. Without antigen control (PBS coating) (E1-12)
- Aim: To verify that signals require antigen coating and are not produced by binding of antibodies to the plate surface or blocking agents.
- Rationale: Wells are processed through the full ELISA workflow but are coated with PBS only.
#### 5. Substrate-only wells (H10-12)
- Aim: To check for any intrinsic color development or optical artefacts from the TMB substrate and stop solution alone.
- Rationale: Wells contain substrate and stop solution without prior antibody or antigen steps; absorbance readings here serve as a baseline for instrument zeroing.
[IMG] fig 2
Figure 2. 96-well plate design for our indirect ELISA setup with all well explanations and dilution factors (created with BioRender)
### Data Processing
In our data processing step, first, the raw absorbance data from the ELISA plate was collected in elisa_data.csv, with each row representing a well and its optical density (OD) reading at 450 nm. Plate layout and sample identity were mapped using experimental documentation, allowing assignment of each well to a specific antigen type (platypus, rat, bovine, human, or commercial positive control) and primary antibody dilution (either 1:5,000 or 1:10,000). To account for background signal, readings from blank wells (coated only with buffer, no antigen) were averaged and subtracted from every well on the plate. This ensured that detected absorbance reflects specific antibody–antigen interaction, not plate artifacts or buffer absorption. Then, each sample's final corrected absorbance was further normalized for its primary antibody dilution factor, by multiplying the background, subtracted OD by the corresponding dilution (either 5,000 or 10,000). This converts all data to reflect equivalent undiluted conditions, allowing us to do quantitative comparisons between groups.
For each antigen and dilution, the mean, standard deviation (SD), and coefficient of variation (CV%) were calculated across all replicate wells to be used to construct graph shown in Figure 5 in Results section. To determine the assay's quantitative range and detection limits, reference wells containing commercial IF standards at known concentrations (ng/mL) were used to construct a sensitivity (standard) curve (Figure 5). These points were fit to a four-parameter logistic (4PL) model, which is standard for ELISA quantitation. The resulting calibration function enables interpolation of unknown sample concentrations from their absorbance values.
Finally, absorbance values for all experimental groups were visualized as bars with error bars (SD), and the standard curve was presented with concentration labels, allowing easy comparison and interpretation, as shown in Figure 4 in Results section.
### Results
[IMG] fig 3
Figure 3. Well-plate color change result after stop solution addition
[IMG] fig 4
Figure 4. Bar chart of absorbance for each antigen and dilution
Bar chart of dilution-corrected, background-subtracted absorbance values (mean ± SD) for each recombinant antigen (platypus, rat, bovine, human, commercial) at each primary antibody dilution (1:5,000 and 1:10,000). Higher bars reflect greater antibody binding. The commercial IF shows the highest reactivity, validating assay sensitivity. Lower absorbance in the more dilute primary antibody samples confirms specificity of detection.
[IMG] fig 5
Figure 5. Sensitivity/Standard Curve (4PL fit)
In Figure 5, a four-parameter logistic (4PL) standard curve relating measured absorbance at 450 nm (background-subtracted) to known commercial IF concentrations (ng/mL) is shown. Individual standard points (red dots) are labeled with their concentrations; the smooth blue line shows the fit. This calibration curve allows precise determination of unknown IF concentrations within the assay's dynamic range. For example, our leftmost standard (0.1 ng/mL) gives us an idea of the lowest IF concentration that can be reliably detected above background. So, values that are much lower than this are not confidently distinguishable from background absorbance. Conversely, the highest standard (50 ng/mL) approaches the upper plateau of the curve, where the assay starts to saturate. As can be seen from the graph, the absorbance here is maximal; meaning higher concentrations will not give proportionally higher signals and should be diluted before being quantified. With light of all these, it can be proudly said that the tight fit of the red dots to the blue curve with sensible spacing and matching labels confirms that our ELISA reagents and plate protocol worked as expected. Any points clearly off the curve would suggest technical errors or unexpected antibody/antigen issues.
### Discussion & Troubleshooting
In an indirect ELISA, high absorbance after background correction reflects strong antibody binding to the coated antigen. Therefore, high absorbance = high interference potential, and low absorbance = low or negligible interference.
In our antibody interference analysis, commercial recombinant human IF control gave much higher absorbance than any of our recombinant IF tested. Since the commercial one is our positive control, this confirms that the anti-human GIF antibody is functional and the assay is sensitive. Besides, both primary antibody dilutions behaved as expected:
- More concentrated primary (1:5,000) → higher absorbance
- More dilute primary (1:10,000) → lower absorbance
Our recombinant IF samples showed consistently low absorbance, roughly ~0.33× (about one-third) of the commercial IF signal in the less diluted set. Specifically, rat IF had the highest absorbance among our species variants in the 1:5,000 dilution set, suggesting the greatest cross-reactivity to the anti-human GIF in our panel. On the other hand, platypus and bovine IF showed even lower absorbance, indicating minimal antibody binding.
If we want to do interpretation in context of literature, Greibe & Nexo (2022) demonstrated that properly validated IF ELISAs can distinguish specific IF-antibody interactions, with low non-specific binding when using optimized buffers and blocking [1]. When we consider the results, our commercial control behaving as expected confirms assay validity. Additionally, Lukens et al. (2020) found that anti-IF antibody assays can differ in sensitivity depending on antigen source (human vs. porcine vs. recombinant) [2]. The high signal for commercial recombinant human IF fits this pattern and the polyclonal antibody was raised against recombinant human IF, so epitope matching is perfect.
On the other hand, lower signals for our cross-species IFs suggest either:
- Epitope divergence in which the anti-human GIF antibody recognizes human-specific epitopes that are absent or altered in other species.
- Protein folding or glycosylation differences in our recombinant proteins that mask epitopes or reduce antibody binding.
When we consider these two possibilities, we thought that the rat IF showing relatively higher reactivity may indicate conserved epitope regions closer to human IF than the other species tested. From an antibody interference perspective, low absorbance is beneficial, it means our engineered IF variants are less likely to be blocked by anti-human GIF in patients with autoimmune gastritis or pernicious anemia. While encouraging from an antibody interference standpoint, the relatively low absorbance observed for our recombinant IF variants could stem from a combination of technical and biological factors that merit further refinement. Antigen coating efficiency remains a key consideration; even with precise μg/mL stock dilutions, incomplete adsorption to the ELISA plate can reduce effective antigen presentation, so verifying protein integrity by SDS-PAGE again and confirming plate binding with a tag-specific antibody would have been be useful for us.
Similarly, as being said, the recombinant IFs may have suffered from degradation, misfolding, or lacked native glycosylation, masking epitopes that the anti-human GIF antibody recognizes. This points toward expressing the proteins in mammalian or insect systems, or introducing refolding steps for bacterial products, to better preserve native structure.
Blocking and washing conditions can also be revisited in the future, as over-blocking may mask antigenic sites, while insufficient washing can elevate background signals; comparing current PBS + 1% BSA with alternative blocking agents such as casein could help optimize specificity. Given that the ThermoFisher rabbit polyclonal antibody was raised against recombinant human IF (aa 19–417), cross-species epitope divergence likely contributes to reduced binding; sequence alignments and in silico epitope mapping could be used to identify conserved and divergent regions, guiding the design of IF variants with minimized antigenicity but retained B12-binding capacity.
Moving forward, integrating functional assays that measure B12 binding alongside ELISA reactivity will allow correlation between antibody recognition and biological activity. Expanding the species panel tested will enable a more complete map of evolutionary divergence effects on cross-reactivity, and introducing monoclonal antibodies as comparators may reveal different binding profiles. Finally, exploring different antibody interference assays with vitamin B12 present during coating or incubation could uncover whether ligand binding alters antibody accessibility.
This iterative approach for the future can strengthen confidence that low ELISA signals truly reflect reduced interference potential rather than technical artefacts.
## Functional Binding Measurement 1:
## IF-Vitamin B12 Binding Assay
### Aim
The goal of our B12 binding experiment was to evaluate and compare Vitamin B12 (cyanocobalamin) binding capabilities of intrinsic factor (IF) proteins we produced.
Originally, the binding analysis was planned using Isothermal Titration Calorimetry (ITC), which measures thermodynamic parameters such as Kd, ΔH, ΔS, and binding stoichiometry. However, due to the ITC instrument being under maintenance, we opted for a UV-Vis spectrophotometer-based binding assay as an alternative.
This method provides a rapid and cost-effective way to directly assess whether cyanocobalamin remains bound to IF after separation from free ligand using centrifugal filtration. By measuring absorbance at 361 nm (specific for cyanocobalamin) and 280 nm (protein quantification), we could simultaneously determine protein recovery and B12 binding efficiency in the same small-volume sample. A 3.5 kDa molecular weight cut-off (MWCO) centrifugal filter was used so that free B12 passes through, while IF is retained.
### Materials & Equipment
#### 1. Materials
- Purified recombinant intrinsic factor proteins:
- Human IF, Bovine IF, Rat IF, Platypus IF (Porcine IF excluded as explained previously)
- Commercial intrinsic factor (Cloud-Clone corp., Recombinant Human GIF, RPD111Hu01)
- Cyanocobalamin powder (Vitamin B12, Sigma-Aldrich, PHR1234, MW 1355.37 g/mol)
- Binding buffer:
- 50 mM HEPES, 150 mM NaCl, pH 7.5 (physiological, B12-compatible)
- Milli-Q water
- Light-protective foil (to prevent B12 photodegradation)
#### 2. Equipment
- Spectrophotometer (DeNovix DS-11) with UV-Vis mode
- 3.5 kDa MWCO centrifugal filters
- Microcentrifuge capable of 14,000 × g
- pH meter
- Analytical balance
### Protocol
#### 1. Binding Buffer Preparation
To prepare 100 mL of 50 mM HEPES + 150 mM NaCl, pH 7.5:
- Weigh 1.19 g HEPES free acid (MW 238.3 g/mol) and 0.876 g NaCl (MW 58.44 g/mol)
- Dissolve in ~80 mL Milli-Q water
- Adjust pH to 7.5 with 5 M NaOH dropwise
- Bring to 100 mL with Milli-Q water
- Filter-sterilize (0.2 µm) and store at 4 °C (≥1 day)
#### 2. Protein Concentration Measurement
- Measure each IF sample at A280 on the spectrophotometer (1.5–2 µL)
- Record concentration in mg/mL and convert to µM (MW ~45 kDa for recombinant IF, 28 kDa for commercial IF)
- Target B12 concentration = 3× molar excess to IF
#### 3. Cyanocobalamin Stock & Working Solution
- Prepare 1 mM stock: weigh 13.55 mg cyanocobalamin and dissolve in 10 mL Milli-Q water.
- Prepare 10 µM working stock: dilute 1 mM stock 1:100 (10 µL stock + 990 µL water).
- Keep working stock on ice and protect from light.
#### 4. Binding Reaction Setup
For each IF sample (human, bovine, rat, platypus, commercial) and controls:
- IF + B12 (binding test)
- IF only (protein control at 280 nm)
- B12 only (ligand control at 361 nm)
- Buffer only (blank)
We determined reaction volume as 100 µL
- Add maximum available IF stock volume for that species
- Add required B12 working stock volume to achieve 3× molar excess
- Fill to 100 µL with binding buffer
#### 5. Binding Incubation
- Incubate at RT (20–25 °C) for 30 min
- Wrap tubes in foil to protect from light
#### 6. Separation of Bound vs Free B12
- Pre-rinse 3.5 kDa MWCO filter with 100 µL binding buffer, spin briefly
- Load 100 µL binding reaction
- Centrifuge at 14,000 × g for 10 min (until retentate is ~20–30 µL)
- Collect flow-through (free B12)
- Recover retentate (IF + bound B12) by inverting filter into a new tube and spinning briefly
#### 7. Spectrophotometer Measurements
- Zero spectrophotometer with binding buffer
- Measure A280 (protein) and A361 (B12) for retentate and filtrate
- Record values to an excel sheet
#### 8. Data Processing
Our B12 binding experiment data processing workflow takes raw absorbance measurements from spectrophotometer UV-Vis experiments and transforms them into interpretable metrics of B12 binding to intrinsic factor (IF) proteins. All calculations and visualizations are specifically designed to reflect the actual experimental design and the precise sample preparation volumes used in our project (see our lab notebook for details). Data processing B12 binding experiment was completed in 4 main steps.
##### 8.1. Data Import and Sample Annotation
The process begins by importing the CSV file containing sample names and absorbance readings at 280 nm (A280) and 361 nm (A361).
- Sample names are parsed to identify:
- B12-only standards (e.g., "B12 - HUMAN")
- Protein-only controls (e.g., "HUMAN IF")
- Binding reactions (e.g., "BOV IF B12 R" for retentate, "BOV IF B12 F" for filtrate)
- Commercial IF variants are recognized and grouped appropriately.
##### 8.2. B12 Standard Curve Construction
For each B12-only sample, the true B12 concentration is calculated from the actual pipetted volume of 10 µM B12 stock into 100 µL total volume, by using the formula below:
[IMG]
The measured absorbance at 361 nm (A361) is plotted against the calculated B12 concentration to generate a standard curve. Meanwhile, a linear fit through the origin (A361 = m × [B12]µM) is performed, and the slope (m) and R² are reported. This fit is used to validate the instrument response and confirm the conversion factor for B12 quantification.
##### 8.3. Baseline Correction
For each binding reaction (retentate and filtrate), the A361 value is baseline-corrected by subtracting the mean A361 of the corresponding protein-only control:
[IMG]
This correction accounts for protein background absorbance at 361 nm.
##### 8.4. Bound Fraction Calculation
For each IF, the fraction of B12 bound is calculated using baseline-corrected A361 values:
[IMG]
This is mathematically identical to using the converted B12 concentrations, since the conversion factor cancels.
### Results
The results of our Vitamin B12 binding assay demonstrated the binding capabilities of different intrinsic factor proteins. The data processing workflow successfully converted raw absorbance measurements into quantitative binding metrics, allowing for direct comparison between recombinant and commercial IF variants.
[IMG] B12 binding A280 bar chart
Figure 1. Bar chart of A280 for all samples. Negative absorbance values are labeled "ND" (not detected)
Protein-only samples (Human, Bovine, Rat, Platypus IF) show the highest A280 values, as expected for pure protein solutions. Retentate samples also show positive A280, indicating protein retention after filtration. Filtrate and B12-only samples generally have very low or negative A280, consistent with little or no protein present (denoted as 'ND' non-detectable). Commercial IF could not be included in the protein-only group due to limited material.
[IMG] B12 binding A361 bar chart
Figure 2. Bar chart of A361 for all samples. Negative absorbance values are labeled "ND" (not detected)
Positive A361 values are observed in B12-only, retentate, and filtrate samples, as expected since these contain B12. Protein-only samples show low or negative A361, confirming minimal B12 background. Notably, the commercial IF retentate shows a high A361, similar to its A280, suggesting either high B12 binding or possible background. When looking at the ratios of retentate to filtrate, the commercial IF values were found to be very close to each other; among our IF samples, the RAT values were also nearly identical when rounded (0.0268 vs. 0.0271).
[IMG] B12 binding standard curve scatter plot
Figure 3. Scatter plot of A361 vs. true B12 concentration for standards, with sample names annotated and linear fit (A361 = m × [B12]µM) and R² displayed
The standard curve plots measured A361 against the actual B12 concentrations prepared for each standard. Each point is labeled with its sample name. The linear fit (A361 = m × [B12]µM) and R² are shown. The fit is not perfect (R² < 1), indicating some variability or non-ideal behavior, possibly due to matrix effects or pipetting error. Among our proteins, BOVINE samples align best (closer to) with the fit, suggesting more reliable quantification in these cases.
[IMG] B12 binding percent bound bar chart
Figure 4. Bar chart of percent B12 bound for each IF, calculated from baseline-corrected A361 values
This bar chart shows the percentage of B12 bound (retentate/(retentate+filtrate) × 100) for each IF, calculated from baseline-corrected A361. IFs with higher bars have more efficient B12 binding. Human IF and Bovine IF showed the highest percentages in Figure 4, which indicates under the experimental conditions, our bovine and human IF was effective at capturing and retaining vitamin B12 during the binding assay. This result is consistent with previous findings that bovine IF is capable of binding B12 efficiently, although in some studies, the total binding capacity of bovine IF or serum is reported to be somewhat lower than that of human IF [7], which actually corrects Figure 4. All in all, in this experiment, the strong performance of BOV IF suggests it is a robust binder of B12 under the tested conditions, making it a suitable candidate for further applications or comparative studies of IF-mediated B12 uptake.
### Discussion & Troubleshooting
This spectrophotometer-based centrifugal filtration assay allowed us to rapidly compare the Vitamin B12-binding capacities of recombinant intrinsic factor proteins from different species and a commercial IF preparation under identical experimental conditions. The results indicated that human IF and bovine IF were the strongest binders to vitamin B12 in our case, retaining the majority of B12 in the retentate after filtration. This is in line with previous literature reporting that both human and bovine IF have high affinity for cyanocobalamin, although bovine IF can sometimes exhibit slightly lower maximal binding capacity than human IF. Platypus IF showed an intermediate level of binding, retaining detectable but reduced amounts of B12 compared to the strong binders. In contrast, rat IF displayed almost identical A361 values for retentate and filtrate, suggesting very weak binding under the tested conditions, possibly due to differences in structure, folding, or post-translational modifications that affect ligand affinity. Commercial IF presented a more ambiguous case, in which its retentate A361 was high, but the filtrate A361 was also elevated, resulting in a low retentate-to-filtrate ratio. This could indicate either high but incomplete removal of free B12 or background absorbance from the preparation itself. Overall, the assay proved effective for qualitative and semi-quantitative comparison of IF variants, providing valuable insights for selecting candidates in future cross-species engineering studies.
Several technical challenges arose during the experiment which influenced both the reliability and interpretation of the results. Low protein concentrations in the recombinant IF preparations initially led to inconsistent spectrophotometer readings, increasing the sample measurement volume from 1.5 µL to 2 µL improved reproducibility. Buffer composition was another critical factor, in which the initial HEPES-based binding buffer yielded poor blank readings, and switching to alternative formulations such as Tris + NaCl did not improve results. Ultimately, re-adjusting the pH of the original HEPES buffer restored clean baselines, highlighting the importance of precise pH control. In addition, some IF samples were still in imidazole-containing purification buffers, which can absorb strongly at 280 nm and slightly at 361 nm, potentially interfering with both protein and B12 quantification. This was addressed by using buffer-matched blanks for background subtraction. We also verified with 'B12-only' controls that free cyanocobalamin passes through the 3.5 kDa MWCO filter without appreciable sticking, although in future assays pre-blocking filters with BSA could further minimize any nonspecific losses. Finally, because cyanocobalamin is light-sensitive, all B12-containing samples were wrapped in foil throughout handling to prevent photodegradation. These optimizations allowed the assay to produce interpretable results despite constraints such as limited protein availability and the lack of pre-buffer exchange steps.
## Secondary Structure Revealing of Best IF Candidate: Circular Dichroism (CD) Spectroscopy
### Aim
To determine the secondary structure characteristics of the Bovine Intrinsic Factor (BOV-IF) protein sample using far-UV Circular Dichroism (CD) spectroscopy.
The experiment involves buffer exchange into a CD-compatible buffer, concentration adjustment of the protein sample, and spectral acquisition under controlled conditions. A positive control (BSA) is measured to verify instrument performance and accuracy.
### Materials & Equipment
#### 1. Chemicals and Reagents
- NaH₂PO₄·H₂O (MW = 137.99 g/mol) (Fisher Bioreagents)
- Na₂HPO₄ (MW = 141.96 g/mol) (Fisher Bioreagents)
- Milli-Q ultrapure water
- Bovine Intrinsic Factor (BOV IF) protein sample
- Bovine Serum Albumin (BSA), lyophilized powder, ≥ 98.0 % (Sigma) for positive control
- Hellmanex II cleaning solution (2%)
- Ice packs for sample transport
#### 2. Consumables
- Amicon Ultra-15 centrifugal filter unit, 10 kDa MWCO
- UV-grade quartz cuvette (0.1 cm pathlength)
- Low-binding microcentrifuge tubes (UV-grade)
- Disposable pipette tips
#### 3. Equipment
- Analytical balance
- pH meter (Fisher Scientific, Accumet AE150)
- Magnetic stirrer and stir bar
- Refrigerated centrifuge (capable of 4,000 × g)
- Circular Dichroism spectropolarimeter (Jasco 1500 CD) with temperature control
- Nitrogen gas supply (flow rate ~7 L/min)
- Water bath circulator (set to 4°C for sample stability)
- Spectrophotometer (DeNovix, DS-11) (for protein concentration measurement, A₂₈₀)
### Protocol
#### 1. Buffer Preparation (100 mL of 10 mM sodium phosphate buffer, pH 7.4)
Objective: Prepare a far-UV compatible buffer for CD measurements.
Rationale: Buffers for far-UV CD must have low absorbance below 200 nm to allow measurements down to ~185 nm. Sodium phosphate is optimal.
Procedure:
- Dissolve 0.103 g NaH₂PO₄·H₂O (Fisher Bioreagents) and 0.109 g Na₂HPO₄ (Fisher Bioreagents) in ~70 mL Milli-Q water in a clean glass beaker
- Stir until fully dissolved
- Measure pH; adjust to pH 7.4 by adding minute quantities of NaOH/HCl if needed
- Bring the total volume to 100 mL with Milli-Q water
- Store at 4°C until use
#### 2. Protein Sample Preparation
##### 2.1. Buffer Exchange and Concentration (Diafiltration):
- Pre-rinse the Amicon Ultra-15 (10 kDa MWCO) filter with ~2 mL Milli-Q water; spin at 4,000 × g for 5 min; discard filtrate
- Load protein sample (~500 μL) into the filter
- Concentration step: Spin at 4,000 × g until retentate volume is ~50-100 μL (check every 2 min to prevent drying)
- Buffer exchange step: Add 500 μL fresh CD buffer to the retentate, mix gently, and spin again to ~50-100 μL
- Repeat buffer exchange for 3-4 cycles (>99% buffer replacement)
- Transfer final retentate to UV-grade tube; measure concentration via spectrophotometer at A₂₈₀ using correct extinction coefficient
New concentration after concentrating BOV IF:
1. Convert MW to g/ml:
45.440 Da = 45.440 g/mol
2. Apply formula:
[IMG]
µM ≈ 1.643
##### 2.2. Positive Control Preparation:
Prepare 600 μL of Bovine Serum Albumin (BSA), lyophilized powder, ≥ 98.0 % (Sigma) at 0.22 mg/mL in CD buffer for instrument performance check.
#### 3. Sample Transport & Preservation
- Aliquot sample into UV-grade microcentrifuge tubes
- Store on ice packs in an insulated transport box (4°C)
- Avoid freeze-thaw before CD → freezing can alter secondary structure
- Transport time ≤ 2 hours from purification to measurement to minimize degradation
#### 4. Instrument Setup
- Turn on N₂ gas (flow rate ~7 L/min) and purge optics for 10 min
- Turn on CD instrument main power
- Launch CD acquisition software
- Turn on XE-lamp; warm for 10 min before measurement
- Set temperature control to 4°C (to minimize potential unfolding of uncharacterized protein)
#### 5. Baseline Measurement
In Measurement mode:
- Select Baseline (green button)
- Fill cuvette with matching buffer (no protein)
- Auto-save baseline spectrum
- Rinse cuvette with deionized water before sample loading
#### 6. Sample Measurement
- Rinse quartz cuvette with sample buffer.
- Load 220–250 μL of protein sample (avoid bubbles)
Measurement parameters:
- Mode: Wavelength scan
- Wavelength range: 190–260 nm
- Bandwidth: 1.0 nm
- Data pitch: 0.5 nm
- Scan speed: 20 nm/min
- Response time: 4 sec
- Accumulations: 8-16 (increase if signal is weak)
- HT voltage limit: Stop scan if >700 V
- Save raw data immediately
#### 7. Shutdown & Cleaning
- Remove sample, first clean x3 with 2% Hellmanex
- Rinse cuvette with DI water ×10
- If residue present, then soak in 2% Hellmanex for 20 min
- After rinsing thoroughly with DI water, dry (compressed inert gas or air-dry)
- Turn off the lamp, software and instrument
- Turn off N₂ gas supply
### Analysis of CD Spectroscopy Data
To obtain a rapid, first-pass estimation of the secondary structure composition of BSA and intrinsic factor (BOV-IF) from our CD spectra, we implemented a Python script based on empirical relationships between ellipticity and secondary structure. Specifically, the fractional helicity was approximated from the mean residue ellipticity at 222 nm using %α-helix ≈ (−[θ]₂₂₂ / 33,000) × 100, while β-sheet content was estimated from the ellipticity near 217 nm using %β-sheet ≈ (−[θ]₂₁₇ / 30,000) × 100. These relationships originate from empirical calibrations of proteins and model peptides, where fully α-helical peptides display ellipticities around −33,000 to −40,000 deg·cm²·dmol⁻¹ at 222 nm [4, 5]. β-rich proteins, by contrast, exhibit minima near 215–218 nm with magnitudes around −20,000 to −30,000 deg·cm²·dmol⁻¹ [6, 7]. Although these simplified equations cannot replace deconvolution against reference datasets, they remain a useful heuristic when a quick, unit-corrected comparison is required [4, 7].
Below is the explanation of the pipeline implemented by the code we wrote.
#### Objective
Process raw CD spectra (input in mdeg) for two proteins (BSA and BOV), subtract buffer, convert the signals to Mean Residue Ellipticity (MRE), smooth the spectra, perform a stable polynomial fit, plot raw/smoothed/fit curves, and save the processed data and plot image. This code also provides a simple and transparent estimate of secondary structure (α-helix / β-sheet / random coil) for the two samples (BSA and BOV).
#### Input data & assumptions
- Input file: a CSV (read with pd.read_csv("collectivelyCSV_ch1_CD [mdeg].csv")).
- Columns expected (zero-based indexing used in code):
- Column 0: Wavelength in nm (190–260 nm, step 0.5 nm).
- Column 1: BSA raw spectrum (mdeg). BSA: MW = 66440 g·mol⁻¹, conc = 0.22 mg/mL, path = 0.1 cm
- Columns 2–4: Three replicate measurements of BOV (mdeg). BOV: MW = 45440 g·mol⁻¹, conc = 0.074 mg/mL, path = 0.1 cm
- Column 5: Buffer (blank) spectrum (mdeg): will be subtracted from each sample spectrum
#### High-level pipeline
##### 1) Read data
df = pd.read_csv("collectivelyCSV_ch1_CD [mdeg].csv")
Arrays extracted: wavelength, BSA_raw, BOV_raw_reps (shape N×3), Buffer.
##### 2) Buffer subtraction
sample_corrected = sample_raw − buffer for every wavelength point to remove baseline.
##### 3) Average replicates (BOV)
The three BOV replicates are averaged point-by-point to produce a single BOV spectrum.
##### 4) Concentration conversion (units)
Input concentration is given in mg/mL. For the MRE formula we need concentration in mol·L⁻¹ (M).
The correct conversion is:
1 mg/mL = 1 g/L, so
conc_M (mol/L) = conc_mgml (mg/mL) / MW (g/mol)
##### 5) mdeg → MRE conversion
Converting observed ellipticity from millidegrees to degrees:
[IMG]
Mean residue ellipticity formula used:
[IMG]
where
c = protein concentration in mol·L⁻¹
l = path length in cm (0.1 cm)
n = number of residues
Units of MRE: deg·cm²·dmol⁻¹·res⁻¹ (commonly written as deg·cm²·dmol⁻¹·resid⁻¹)
##### 6) Remove invalid points
- Any NaN or Inf produced (e.g., from division by very small concentration or missing data) are masked:
- mask = np.isfinite(array)
- Only infinite points are kept for smoothing, fitting and plotting
##### 7) Smoothing (Savitzky-Golay)
- A Savitzky-Golay filter is applied to reduce high-frequency noise while preserving peak shapes:
- savgol_filter(..., window_length=11, polyorder=3)
- Notes: window_length must be an odd integer ≤ number of data points
##### 8) Polynomial fit (stable least squares)
- A polynomial fit of degree 5 is computed using numpy.polynomial.Polynomial.fit(...).
- Degree = 5 chosen as a compromise between flexibility and overfitting; you can change it.
- Fit is performed on the masked (clean) wavelength grid.
- The polynomial fit provides a smooth analytical curve used for visual comparison with the smoothed data.
##### 9) Interpolation & unified output grid
The code writes a single output CSV on the BSA wavelength grid: BOV values are linearly interpolated onto that grid using np.interp(...). This makes side-by-side columns aligned for downstream use.
##### 10) Plotting & saving
- The plot contains: raw MRE, smoothed MRE, polynomial fit for both BSA and BOV.
- X-axis: Wavelength (nm), Y-axis: MRE (deg·cm²·dmol⁻¹·res⁻¹).
- The plot is saved as CD_spectra_plot.png with dpi=300 and bbox_inches="tight". The processed data is saved as CD_MRE_processed.csv.
#### Secondary-Structure Estimation
The goal of this part of our code was to get a quick, and repeatable of α-helix / β-sheet / coil fractions from MRE spectra without relying on external deconvolution servers.
##### A. Reference values in our code
We use simple reference amplitudes (typical literature numbers):
- α-helix: reference MRE at 208 nm ≈ −33,000 and at 222 nm ≈ −36,000 (deg·cm²·dmol⁻¹)
- β-sheet: reference at 215 nm ≈ −23,000
- coil: reference at 200 nm ≈ −4,000
These are scaling references, not absolute "true" fingerprints. They let us convert an observed negative MRE into a relative contribution to each structural class.
##### B. How does our code compute percentages?
1. Pick representative MRE values from the spectrum:
- For α: read the MRE at the wavelengths nearest 208 nm and 222 nm.
- For β: read the MRE near 215 nm.
- For coil: use the average MRE across 200–205 nm (this reduces noise sensitivity compared to using a single point).
2. Compute scores by ratio to reference
Because CD signals are negative for helix/sheet, we use absolute values to get positive contributions. For example:
[IMG]
These formulas in the code make a positive 'strength' metric for each structural class.
3. Normalize the percentages
- Sum the three scores: total = alpha_score + beta_score + coil_score
- Each percent = 100 × score / total
- The result is a relative split that sums to ~100% across the three classes
#### C. Rationale & Advantages & Limitations of Our Approach
The rationale is that a full deconvolution requires a library of reference spectra and a least-squares decomposition across the entire spectral range. This is what DichroWeb, CDPro or SESCA do. But those are external services which use much larger reference sets. For an in-code quick estimate, a small-number, physically motivated scoring method gives an interpretable number and is easy to reproduce and inspect.
Among the advantages of our approach is its robustified coil estimate by averaging 200-205 nm which reduces noise-sensitivity and also it uses physically meaningful landmarks (208/222 for helix, 215 for sheet).
However, our approach has limitations as well. It has no true spectral deconvolution, so it does not fit the entire spectral shape to a multi-component basis set. Also, reference amplitudes are approximate and protein-dependent as well as cross-talk signals that are only coarsely handled via the simple scoring scheme.
To complement our in-house analysis, we also attempted to process the CD data using established external software tools, namely the SESCA prediction platform and the CDPro package. SESCA, which is designed for secondary structure estimation based on spectral deconvolution [8], repeatedly failed to execute successfully and returned errors under the tested conditions. Similarly, the CDPro suite did not provide interpretable results, likely due to limitations in input formatting or reference set compatibility. These difficulties highlight the technical expertise and additional optimization required to integrate such tools reliably into our workflow. In contrast, we used DichroWeb (with the K2d algorithm) and BeStSel to compare the results of our estimation code.
### Results
#### Python Code Estimation:
Our python analysis produced BOV-IF with 36.6% α-helix, 25.9% β-sheet, and 37.5% coil; BSA with 41.4% α-helix, 40.2% β-sheet, and 18.3% coil.
[IMG] cd-result-code
Figure 1. CD Spectra of Raw, Smoothed and Polynomial Fit, result from our python code
[IMG] cd-result-2-code-secondary-structure
Figure 2. Secondary structure content estimation of our our python code
#### DichroWeb (K2d):
When analyzed with DichroWeb using the K2d algorithm, BOV-IF was predicted to be almost exclusively α-helical (100%), with a very high NRMSD (0.978), indicating a poor fit. BSA was estimated at 37% α-helix, 26% β-sheet, and 38% random coil.
[IMG] cd-estimation-results-dichroweb
Figure 3. DichroWeb CD spectra and secondary structure estimation results of BOV-IF and BSA protein
#### BeStSel:
This prediction tool yielded, for BOV-IF, 4.3% helix, 33.8% total β-structure, and 50.7% other; for BSA, 34.7% helix, ~16% β-structure, 11.5% turn, and 37.7% other.
[IMG] cd-estimation-results-bestsel
Figure 4. BeStSel CD spectra and secondary structure estimation results of BOV-IF and BSA protein
### Discussion & Troubleshooting
#### Consistency with structural expectations:
BSA is well established as an α-helical protein [9]. BSA's CD spectrum consistently shows strong negative bands at 208 and 222 nm, a hallmark of α-helicity [4]. Our python script, DichroWeb (K2d) and BeStSel captured this general trend, though β-sheet fraction was likely overestimated. On the other hand, BOV (bovine) intrinsic factor has been crystallographically shown to adopt a two-domain α/β fold [10], consistent with BeStSel's mixed α/β assignment and with our observation of a shallow 208/222 nm signal and a distinct 215–218 nm minimum. The K2d result of 100% helix for IF is inconsistent with this known structural information, highlighting algorithm limitations.
Reasons for these differences across methods arise from algorithmic assumptions, reference dataset dependency (K2d is prone to error outside its calibration set), BeStSel bias (it is optimized for β structures, sometimes underestimates helicity) and experimental scaling.
It should be noted that, for reliable quantification in the future, CD spectra should be first rigorously converted to mean residue ellipticity (MRE) and provided as a cleaned two-column wavelength-MRE datasets. These processed spectra can then be submitted to specialized deconvolution platforms such as DichroWeb, BeStSel, or CDPro. It is equally important to confirm computational assignments using orthogonal techniques, including FTIR or ATR-FTIR for probing secondary-structure bands, Raman spectroscopy for complementary vibrational signatures, and high-resolution approaches such as NMR spectroscopy or X-ray crystallography/cryo-EM where feasible. Biochemical or functional assays may also provide supportive evidence of structural states in the future.
If future estimations remain inconsistent across methods, the first step should be to re-examine experimental and preprocessing parameters: verifying protein concentration, cuvette pathlength, and residue counts; evaluating noise levels in the low-wavelength region; and assessing replicate variability. Also, preprocessing strategies such as spectral trimming or Savitzky-Golay smoothing can then be applied to minimize artifacts before re-analysis.
It should also be noted that the reliability of CD-based secondary structure estimation increases with replicate measurements and sample redundancy. In our project, the limited availability of protein meant that only a small number of replicates could be collected, reducing the robustness of the dataset. Furthermore, even the concentration of bovine intrinsic factor was relatively low (0.074 mg/mL), which may have contributed to greater uncertainty in deconvolution results. Due to these material constraints, we were also unable to extend CD analysis to other available samples (such as PLT or RAT), limiting the scope of our comparative study. Addressing these limitations in future work by preparing larger quantities of purified protein and acquiring multiple independent spectral replicates would significantly enhance data quality and reliability.
While CD spectroscopy provides important information about secondary structure and folding, high-resolution structural information from X-ray crystallography would allow future teams to visualize the molecular details of IF and its interactions with vitamin B12 (cobalamin). Due to constraints in time and resources, we could not perform crystallography. However, we prepared a detailed primary protocol for the crystallization of K. phaffii-expressed IF and IF-B12 complexes, including considerations for glycosylated samples and partial deglycosylation with Endo H. By sharing this protocol, we aim to support future iGEM teams who may wish to build on our work and pursue structural studies to complement spectroscopic data.
## Functional Binding Measurement 2:
## Elemental Analysis: Microwave Plasma Atomic Emission Spectroscopy (MP-AES) for Cobalt Quantification in Bound B12
### Aim
This experiment aimed to quantify cobalt originating from corrin-bound vitamin B12 in intrinsic factor (IF)-B12 binding reaction mixtures using microwave plasma atomic emission spectroscopy (MP‑AES), to support cross‑species engineering of our IFs by comparing binding setups across rat, platypus, bovine, and human IF proteins produced.
The secondary aim was to assess whether MP‑AES sensitivity is sufficient for elemental cobalt analysis in small‑volume, proteinaceous binding matrices after oxidative digestion, and to benchmark practical detection against method limits of detection (LOD) and quantitation (LOQ) in this matrix.
### Materials & Equipment
#### Proteins
- IF proteins from platypus, rat, bovine and human (since they were in limited amount, only one group is prepared) (see our lab notebook for reaction and control volumes)
#### Ligand
- 10 µM working stock B12 (cyanocobalamin) as prepared in B12 binding assay)
#### Buffers and Reagents
- Binding buffer 50 mM HEPES, 150 mM NaCl, pH 7.4 (same as in B12 binding assay)
- Concentrated (70%) HNO3 (trace‑metal grade, MERCK)
- Hydrogen peroxide (HCl) ≥37 % (trace‑metal grade, Sigma-Aldrich)
- MilliQ water
#### Equipment
- MP‑AES (microwave plasma atomic emission spectrometer), cobalt emission line per lab method (e.g., typical Co 340.512 nm)
- Pipettes and sterile tips
- Fume hood
- Heating block (80-90 °C)
- Autosampler compatible with MP-AES tubes
#### Safety Requirement
Fume hood used for oxidative digestion & waste is disposed per radiochemistry lab practices for acid digests.
### Protocol
#### Reaction Setup & Binding
- Label acid‑washed 1.5 mL tubes for each sample & control
- Pipette IF and B₁₂ volumes according to the control table
- Adjust with binding buffer to total 100 µL
- Mix gently, incubate at RT for 30 min to allow binding
Table 1. Our sample tubes with their purposes
[IMG] cd-estimation-results-bestsel
#### Oxidative Digestion
- In fume hood, add 400 µL concentrated HNO₃ (70 %, trace‑metal grade) to each 100 µL sample
- Cap loosely, place in a heating block at 80–90 °C for 30 min
- This oxidizes organics, releasing Co²⁺ from B12
- Add 8µL HCl to boost digestion and continue heating for 10 min
- Cool to RT in fume hood
[IMG] tev-protease-sds-page
Figure 2. A) During oxidative digestion, B) After oxidative digestion; showing B12 saturated reaction tube, low B12 reaction tube, only IF protein (no B12) tube
#### Dilution to Measurement Matrix
- Quantitatively transfer the digest to acid‑washed volumetric flask or tube
- Dilute with ultrapure water to final volume giving 5 % HNO₃
- For 500 µL digest (100 µL sample + 400 µL acid), add 5.5 mL ultrapure water to reach ~6 mL total (5 % v/v HNO₃)
- Adjust volumes if needed to match MP‑AES autosampler tubes
### Results
MP‑AES analysis of nitric acid digests prepared from our intrinsic factor–vitamin B12 binding reactions produced cobalt signals below the reliable detection capability of method on the instrument used, with readbacks typically in the 20–30 µg/L range but a validated practical LOD of approximately 50 µg/L in this proteinaceous, acidified matrix; therefore, cobalt concentrations for all samples are reported as "< 50 µg/L (LOQ)" with no numeric values used in calculations or comparisons, and the measurements are attributed to Adj. Prof. Risto Koivula (Department of Chemistry \- Radiochemistry, University of Helsinki) who operated the instrument.
Table 2. Results of elemental analysis
[IMG] cd-estimation-results-bestsel
### Discussion
The sub‑LOD outcomes reflect the well‑known sensitivity limits of microwave plasma emission for certain elements and complex matrices: after small‑volume IF–B12 bindings are oxidatively digested and diluted to a 5% HNO3 measurement matrix, the expected corrin‑derived cobalt often lies at or below tens of µg/L, where matrix effects and element sensitivity constrain reliable detection without preconcentration; in this setting, instrument‑reported signals around 20–30 µg/L were appropriately deemed non‑reportable under standard LoB/LOD/LOQ principles [11], and results were conservatively expressed as "< 50 µg/L (LOD)" for all samples to maintain data integrity and avoid over‑interpretation.
When we did critical thinking and discussion among ourselves, we also hypothesized that even after digestion, residual acid and salts can interfere with plasma robustness, which might have also affected the outcome. Literature on elemental cobalt determination for vitamin B12 commonly favors ICP-MS/ICP‑OES/ICP‑AES [12, 13, 14, 15] or, for trace‑level and speciation needs, HPLC–ICP‑MS [16] targeting 59Co in complex matrices, while classical and modern IF–B12 studies emphasize binding specificity and thermodynamics rather than elemental cobalt measurement of binding mixtures; notably, there are no identified studies that quantify cobalt in intrinsic factor–B12 reaction samples using MP‑AES, which likely reflects both sensitivity demands in this concentration regime and the analytical advantages of species separation and higher sensitivity offered by ICP‑MS‑based workflows, underscoring that our team's attempt addresses a recognized methodological gap rather than a failure to replicate established practice.
Given the project's constraints, it is also important to document that the we initially aimed to use ICP‑MS or ICP‑OES but encountered training and access barriers; consequently, elemental analysis proceeded via MP‑AES under external operation by Adj. Prof. Koivula, and results were transparently reported with proper qualifiers, reinforcing that the work was designed rigorously, executed safely with oxidative digestion controls, and interpreted in line with established reporting conventions for measurements below detection limits.
## End Note
With these immunological, functional, structural, and elemental measurements completed, we moved into a broader proof‑of‑concept discussion, where the results were synthesized into general conclusions and future directives (presented in detail on our Proof‑of‑Concept page). In our Engineering page, these same measurement steps are mapped into the “test” stage of our design–build–test–learn cycle, showing exactly how experimental evidence is fed back into our design logic.
## References
- Greibe, E., & Nexo, E. (2022). Development of a sensitive Elisa for gastric intrinsic factor and detection of intrinsic factor immunoreactivity in human serum. Nutrients, 14(19), 4043.
- Lukens, M. V., Koelman, C. A., Curvers, J., Roozendaal, C., Bakker-Jonges, L. E., Damoiseaux, J. G. M. C., & Kroesen, B.-J. (2020). Comparison of different immunoassays for the detection of antibodies against intrinsic factor and parietal cells. Journal of Immunological Methods, 487, 112867.
- Polak, D. M., Elliot, J. M., & Haluska, M. (1979). Vitamin B12 binding proteins in bovine serum. Journal of Dairy Science, 62(5), 697–701.
- Greenfield, N. J. (2006). Using circular dichroism spectra to estimate protein secondary structure. Nature Protocols, 1(6), 2876–2890.
- Marqusee, S., & Baldwin, R. L. (1987). Helix stabilization by glu-...lys+ salt bridges in short peptides of de novo design. Proceedings of the National Academy of Sciences, 84(24), 8898–8902.
- Sreerama, N., & Woody, R. W. (2000). Estimation of protein secondary structure from circular dichroism spectra: Comparison of Contin, SELCON, and CDSSTR methods with an expanded reference set. Analytical Biochemistry, 287(2), 252–260.
- Whitmore, L., & Wallace, B. A. (2007). Protein secondary structure analyses from circular dichroism spectroscopy: Methods and reference databases. Biopolymers, 89(5), 392–400.
- Nagy, G., Igaev, M., Jones, N. C., Hoffmann, S. V., & Grubmüller, H. (2019). SESCA: Predicting circular dichroism spectra from protein molecular structures. Journal of Chemical Theory and Computation, 15(9), 5087–5102.
- El Kadi, N., Taulier, N., Le Huérou, J. Y., Gindre, M., Urbach, W., Nwigwe, I., Kahn, P. C., & Waks, M. (2006). Unfolding and refolding of bovine serum albumin at ACID PH: Ultrasound and structural studies. Biophysical Journal, 91(9), 3397–3404.
- Mathews, F. S., Gordon, M. M., Chen, Z., Rajashankar, K. R., Ealick, S. E., Alpers, D. H., & Sukumar, N. (2007). Crystal Structure of Human Intrinsic Factor- Cobalamin Complex at 2.6 A Resolution.
- Armbruster, D. A., & Pry, T. (2008). Limit of blank, limit of detection and limit of quantitation. The Clinical biochemist. Reviews, 29 Suppl 1(Suppl 1), S49–S52.
- Thermo Fisher Scientific. Kutscher et al. (n.d.). ICP-MS determination of elemental impurities in vitamin B12 (Application Note AN43403).
- Zhang, N., Wang, W., Wang, K., Ding, Z., & Wei, Z. (2008). Rapid determination of vitamin B12by inductively coupled plasma mass spectrometry in multivitamin tablets. Spectroscopy Letters, 41(7), 332–336.
- Dubascoux, S., Richoz Payot, J., Sylvain, P., Nicolas, M., & Campos Gimenez, E. (2021). Vitamin B12 quantification in human milk – beyond current limitations using liquid chromatography and inductively coupled plasma – mass spectrometry. Food Chemistry, 362, 130197.
- Dash, K., Rastogi, L., Thangavel, S., & Venkateswarulu, G. (2016). Traceable quantitation of cyanocobalamin (vitamin B12) via measurement of cobalt and phosphorus: A comparative assessment using inductively coupled plasma atomic emission spectrometry (ICP-AES) and Ion Chromatography (IC). RSC Advances, 6(112), 111090–111098.
- Yang, Y., Zhou, B., & Zheng, C. (2024). The fast quantification of vitamin B12 in milk powder by high-performance liquid chromatography-inductively coupled plasma mass spectrometry. Molecules, 29(8), 1795.
[IMG] Sponsor 1
[IMG] Sponsor 2
[IMG] Sponsor 3
[IMG] Sponsor 4
[IMG] Sponsor 5
[IMG] Sponsor 6
[IMG] Sponsor 7
[IMG] Sponsor 8
[IMG] Sponsor 9
[IMG] Sponsor 10
[IMG] Sponsor 11
[IMG] Sponsor 1
[IMG] Sponsor 2
[IMG] Sponsor 3
[IMG] Sponsor 4
[IMG] Sponsor 5
[IMG] Sponsor 6
[IMG] Sponsor 7
[IMG] Sponsor 8
[IMG] Sponsor 9
[IMG] Sponsor 10
[IMG] Sponsor 11
