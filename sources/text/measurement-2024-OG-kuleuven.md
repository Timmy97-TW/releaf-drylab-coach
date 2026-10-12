# Measurement
Intro The Spot Assay OD600 based toxicity assay Colorimetric Assay Future Perspectives References
[IMG] Open quote green
###### Uncovering the full potential of metal biomining requires a rigorous approach to detection and quantification. Our multi-modal measurement approach meticulously evaluates the metal-binding characteristics of our engineered bacteria, providing a comprehensive understanding from various analytical perspectives.
[IMG] Close quote green
## From qualitative to quantitative: Hitting the mark in measurement of metal accumulation.
Our iGEM team focused on engineering E. coli strains with specialized metal-binding proteins to target a diverse range of environmentally persistent and economically significant metals. We developed a library of engineered bacteria designed to bind metal ions and screened them against common environmental contaminants like copper, zinc, nickel, and cobalt. Their prevalence in polluted water bodies drove the choice of these metals, but we were also guided by the need to safely manage the experimental risks associated with handling more toxic metals. Our proof of concept revolved around demonstrating that our engineered strains could recover higher concentrations of metal ions from water than non-engineered bacteria.
After successfully cloning and developing our strains, we began by testing their ability to tolerate metal ions at concentrations relevant to real-world contamination levels. Initially, we employed a spot-based toxicity assay to qualitatively assess metal tolerance. To obtain a clearer understanding, we conducted an OD600-based toxicity assay, treating our strains with metal ion concentrations ranging from 10 to 750 mg/L. This allowed us to accurately determine the maximum concentration each strain could tolerate. Armed with this information, we then shifted our focus to measuring metal accumulation. We started with a colorimetric assay to assess the unbound metal ions remaining in the supernatant after treatment, giving us an initial, though indirect, indication of the strain’s metal-binding efficiency.
Although we initially planned to use inductively coupled plasma optical emission spectrometry (ICP-OES) for more precise and reliable quantification of the accumulated metals, time constraints prevented us from completing this step. However, we aim to perform ICP-OES in the future to further validate our findings and obtain a more direct measurement of metal accumulation.
### Bacterial Metal Tolerance and growth Assessment
The spot assay - Quantitative
Purpose: Initial qualitative screening of metal tolerance across engineered E. coli strains.
Results: Growth patterns observed visually (density and distribution of colonies along concentration gradient.
Units: No specific units—data are qualitative, based on comparison of colony density.
OD600 toxicity assay - Semi Quantitative
Purpose: To quantitatively determine the maximum tolerable metal concentration for the engineered strains.
Results:Optical density (OD600) measured, reflecting bacterial growth at different metal ion concentrations (10–750 mg/L).
Units: OD600; Metal concentrations reported in mg/Ly.
### Quantitative measurement of metal accumulation
Colorimetric - Indirect Quantification
Purpose:To indirectly assess the amount of metal ion captured by the bacteria by measuring unbound metal in the supernatant with the help of a complexing agent.
Results: Color change correlated with concentration of unbound metal ions.
Units: Metal ion concentration in mg/L.
Future perspective ICP-OES - Direct quantification
Purpose: Direct quantification of metal ions accumulated within the bacterial cells.
Results:Concentration of metals recovered within the bacterial cells.
Units: Metal concentration in µg/L or mg/L, depending on detection limits and concentration rangeg/Ly.
Through this iterative process, we gradually refined our techniques, ensuring that each step is built upon the limitations of the previous one. This carefully structured, stepwise approach not only allows us to explore bacterial metal binding from both qualitative and quantitative perspectives but also provides a roadmap for other researchers. For future iGEM teams, this workflow offers a scalable model for investigating metal recuperation and bacterial tolerance, balancing cost-effective methods with state-of-the-art technologies. By refining and applying these techniques, future teams can build on our work to tackle similar challenges in environmental biotechnology, improving the efficacy and sustainability of bio-based metal recovery systems.
## 1. The Spot Assay
### 1.1 Introduction
We designed this preliminary assay to rapidly evaluate a variety of metal-binding E. coli strains with three key metal ions: Cu, Zn, and Ni. We started out a qualitative assessment with a gradient agar toxicity assay, where we initially evaluated bacterial growth by measuring the length of growth streaks along the metal concentration gradient (Fig. 1a). However, we observed that this approach introduced variability and potential inaccuracies, as the growth length might not consistently reflect the true tolerance of the bacteria to metal ions. To address this issue, we transitioned to a spot-based assay, which provides a more reliable measurement of bacterial growth and tolerance.
In the spot-based assay, we use diluted bacterial cultures to form clusters of colonies on agar plates with varying metal concentrations (Fig. 1b). This method replaces the previous streaking technique with distinct spots of bacteria, allowing us to better assess the density of bacterial growth across the concentration gradient. By evaluating the density of colonies rather than the length of streaks, we gain a clearer and more consistent indication of bacterial tolerance and metal binding efficiency. This revised approach improves the accuracy of our assessments and indirectly provides a more robust qualitative evaluation of the metal-binding capabilities of the E. coli strains.
### Problem
- Uneven spreading, inconsistent inoculation, or variability in agar preparation.
- Incomprehensible growth patterns among the stains.
[IMG] Fig. 1a Gradient Agar-Based Growth Inhibition Assay
[CAPTION] Figure 1a: Gradient Agar-Based Growth Inhibition Assay Featuring Various Engineered E. coli Strains
[IMG] Green arrow to the right
### Troubleshooting
- Focusing on colony density rather than streak length - easier to compare results visually.
- Well-defined growth characteristics
[IMG] Fig. 1b Modified Spot assay with various engineered <i>E. coli</i> stains
[CAPTION] Figure 1b: Modified Spot assay with various engineered E. coli stains
### 1.2 Experimental setup and validation
For the spot assay, overnight cultures of control (DH10b and pBAD empty) and test strains (short peptides and gBlocks) are prepared using LB broth and kanamycin. Gradient agar plates are made with two layers—one containing the highest metal concentration (1000 mg/L recommended) and the other with LB. The metal layer is poured first, marked to a set level, and allowed to solidify before adding the LB layer. After overnight incubation, cultures are adjusted to an OD of 0.2, induced with arabinose, and then applied across the metal gradient on the plates. Colony growth is visualized the next day using a Typhoon FLA 9500 biomolecular imager (Fig. 1c).
[IMG] Figure 1c. Schematic representation of the spot assay workflow: 1.Expression, 2.Dilution, 3.Plate Preparation
[CAPTION] Figure 1c: Schematic representation of the spot assay workflow
### Hypothesis
Engineered E. coli strains will have higher metal tolerance and will grow better compared to controls (DH10b and pBAD empty).
### Reasoning
Controls (DH10b and pBAD empty) ensure that observed growth differences are due to the metal-binding modifications, not inherent strain properties or experimental artifacts.
### Expected outcome
Engineered strains will show improved tolerance on metal-containing media compared to DH10b and pBAD empty controls. In the spot-based assay, engineered strains will form denser colonies at higher metal concentrations.
Table 1. Summary of Hypotheses, Validation Methods, Controls, and Expected Outcomes for Metal-Binding E. coli Strain Screening
### 1.3 Result and Discussion
Fig. 1d provides a glimpse into our spot assay results, where we screened all metal-binding proteins against copper, using the pBAD empty backbone as a control on each plate. Notably, several engineered strains — GBP1, ModA, PbrR, and MymT — demonstrated significantly higher growth across the gradient compared to the control and other strains, suggesting a strong potential for these metal-binding peptides to interact effectively with copper ions. Additionally, each strain displayed distinct growth patterns, ranging from no colonies to sparse or exceptionally dense growth. This variation hints at the differential binding efficiencies of the peptides, offering valuable inputs into their comparative performance in copper binding. However, this approach doesn't provide much insights on the specific concentrations that impact growth. This is where the OD600 assay becomes crucial.
[IMG] Spot assay 1
[CAPTION] Figure 1d: Spot assay with various engineered E. coli stains against Cu ions (The triangular wedge depicts the Cu gradient across the plate: Broad to narrow - High to low concentration)
Take a look at our results and experiments page for complete information on the spot assay!
## 2. OD600 based toxicity assay
### 2.1 Introduction
The OD600-based toxicity assay was introduced to address the limitations of the spot-based assay, which, while useful for an initial qualitative assessment of bacterial growth under varying metal concentrations, does not provide information on the recuperation efficacy of the bacterium, but merely the influence of the concentration of the metal ion on its survival.
The principle of this assay revolves around measuring the optical density (OD600) of bacterial cultures, which is an indicator of cell density and growth. By treating the bacterial strains with different concentrations of metal ions and tracking their OD600 over time, we can quantitatively assess how much bacterial growth is inhibited at various metal concentrations. This assay allows us to pinpoint the maximum threshold concentration of metal ions that the bacteria can tolerate, providing a more detailed and reliable understanding of the strains' resilience compared to the spot assay's qualitative results.
Even though, the OD600 is widely used to assess bacterial growth characteristics, it has to be mentioned that this assay does have some disadvantages. Since OD600 measures cell density based on light scattering, both living and dead cells contribute to the reading. This means that while the assay provides insights into bacterial growth, it cannot directly assess survival. A high OD600 value might indicate high cell density, but it doesn't differentiate between actively growing cells and those that have perished due to metal toxicity. However, since our subsequent techniques delve deeper into the quantitative analysis of metal recuperation, the data obtained from the toxicity assay primarily serve to guide us in selecting the relevant concentrations for further testing. By knowing the tolerance levels, we can focus our efforts on metal concentrations that are most informative for understanding metal binding and accumulation.
### 2.2 Experimental setup and validation
Overnight cultures were prepared for strains expressing the proteins of interest, along with wild-type DH10B and pBAD empty as controls. Cultures were grown in LB with kanamycin, except for DH10B. After measuring OD600, the cultures were diluted to an OD600 of 0.2, induced with 0.02% arabinose, and incubated for 2-3 hours. Metal solutions were prepared at concentrations ranging from 10 to 1000 mg/L, and strains were screened against Cu, Zn, and Ni. Cultures were diluted to 1000 cells per well in a 96-well plate with metal solutions. The plate was read using a SPECTROstar nano plate reader, incubated overnight, and analyzed to assess bacterial response to the metals
[IMG] Figure 2a. Schematic representation of the OD600 toxicity assay workflow
[CAPTION] Figure 2a. Schematic representation of the OD600 toxicity assay workflow
### Hypothesis
Bacteria expressing metal-binding proteins (MBP) will have a higher OD600 compared to the control strain in the presence of metal ions.
### Reasoning
Metal-binding proteins prevent metal ions from disrupting cellular processes, allowing bacteria to grow better under metal stress.
### Expected outcome
The engineered strains will show a higher minimum inhibitory concentration than the control strains, indicating enhanced metal tolerance due to metal binding protein expression.
Table 2. Summary of Hypotheses, Validation Methods, Controls, and Expected Outcomes for Metal-Binding E. coli Strain Screening
### Results and Discussion
The following figure informs on some of the OD600 assays that we perfomed against Cu ions in the concentration range of 10-750 mg/L (Fig. 2b). As in the spot assay, we included the pBAD empty backbone as a control on each 96-well plate. Our observations show that most strains experience significant cell death around 200 mg/L. At 50 mg/L, however, the OD600 readings for nearly all strains were consistent, suggesting this as an optimal concentration for subsequent experiments for the colorimetric assay.
[IMG] Figure 2a. Schematic representation of the OD600 toxicity assay workflow
[CAPTION] Figure 2b: OD600 assay with various engineered E. coli stains against Cu ions
Take a look at our results and experiments page for complete information on OD600-assay results
## 3. Colorimetric Assay
### 3.1 Introduction
The colorimetric assay is a crucial component of our workflow for measuring the unbound metal ions in bacterial cultures. This assay utilizes specific chelating agents that react with metal ions, forming a colored complex that can be quantitatively measured using spectrophotometry. The intensity of the color produced directly correlates with the concentration of metal ions such as copper or cobalt in the sample. We were able to adapt and optimize a colorimetric assay for Copper and Cobalt, however we couldn’t achieve a stable complex and sensitivity in the concentration range that we needed for Zinc. A detailed context on the assay for Copper and Cobalt has been provided in the below sections.
###### The Biquinoline assay
#### Cu
The 2, 2 biquinoline-based colorimetric assay is a molecular spectrophotometric technique designed to detect and quantify copper ions (Cu+) in solution. The principle of this assay revolves around the interaction between copper(I) ions and biquinoline. This reagent forms a highly stable, colored complex in the presence of ethanol and Triton X-100. This complex exhibits a characteristic absorbance at 545 nm, allowing for the precise spectrophotometric measurement of copper concentrations. We adapted this method due to its ease of experimentation and cost-efficiency. Although this assay specifically detects copper in the Cu(I) state, we used Cu(II) in all our experiments, as this is the more environmentally relevant oxidation state of copper found in contaminated water bodies and it was reduced to Cu(I) with hydroxylamine hydrochloride as suggested in the literature. The concentration of copper tested in our experiments was 50 mg/L, with the standard range spanning from 20 to 300 mg/L to ensure accurate quantification across a broad spectrum of possible copper contamination levels [1].
[IMG] Image of the Biquinoline assay
###### The KCSN assay
#### Co
The potassium thiocyanate (KSCN)-based colorimetric assay is a spectrophotometric technique designed for the quantitative detection of cobalt(II) ions (Co^2+). The core chemistry of this assay involves the formation of a highly stable tetrathiocyanatocobaltate(II) complex, [Co(SCN)_4]^2-, which exhibits a characteristic blue color. This complex forms when cobalt(II) ions react with thiocyanate ions (SCN^-) in solution, producing a coordination complex in which four SCN^- ligands are bound to the Co^2+ ion.
Similar to the Cu assay, we treated our bacterial stains with 50 mg/L Co concentration and calibrated our standard curve in the 20-300 mg/L range. Even though we had an optimized protocol for the Co quantification, our cloning of the Cobalt binding protein turned unsuccessful and we were unable to check its binding efficacy any further.
[IMG] Image of the KCSN assay
#### Method
#### Rationale
#### Approach 1
Monitoring metal accumulation during bacterial growth in LB medium.
This method simulates the natural environmental conditions, where bacteria encounter metals while actively growing in nutrient-rich environments. By allowing the bacteria to grow and bind metals simultaneously, we aimed to capture how well the metal-binding proteins performed under dynamic conditions of growth and nutrient availability.
#### Approach 2
Assessing metal accumulation in a stable bacterial population suspended in 0.85% saline solution.
This method was intended to investigate metal binding in a controlled environment where growth and metabolic activities were minimized. The rationale behind this approach was to isolate the metal-binding activity from the potential confounding effects of bacterial growth and division, focusing solely on the bacteria's capacity to bind metals at a fixed population density.
Upon analyzing the results from both approaches, it became evident that the stable bacterial population in saline solution provided more consistent and interpretable data. The controlled conditions minimized variability due to growth kinetics and allowed us to directly quantify metal accumulation. This approach ensured that the observed metal binding was primarily attributable to the engineered proteins rather than the bacteria's growth phase or metabolic state, leading to more accurate and reproducible measurements of the metal-binding capacity.
### 3.2.1 Copper colorimetric assay
For the colorimetric assay, cultures expressing metal-binding peptides were adjusted to 10^8 cells/mL and washed with 0.85% saline. The cells were then treated with 50 mg/L of Cu²⁺ and incubated for 1 hour to allow metal binding. After incubation, the cultures were centrifuged, and the supernatant was collected to quantify unbound copper using a colorimetric assay. The assay involved mixing the supernatant with hydroxylamine hydrochloride, biquinodone, and acetate buffer [1]. Absorbance at 545 nm was measured in a spectrophotometer, and the unbound copper concentration was determined using a standard curve, providing insight into the strains' metal-binding efficiency.
#### Reagent
#### Hydroxylamine hydrochloride
#### Biquinoline
##### Acetate buffer (pH 4.8)
#### Purpose
Reducing agent - reduces Cu2+ to Cu+.
Chelates Cu^+ ions to form a stable, colored complex that absorbs light at 545 nm.
Ensures the stability of the complex over time.
#### Importance of the order
It is essential for the Cu2+ to be reduced to Cu+ in order to react with Biquinoline, eventhough it binds to Cu+, it also shows minimal binding towards Cu2+, hence its necessary to avoid any multiple oxidation states to avoid inaccuracies.
biquinoline forms a stable complex only with Cu^+. Adding biquinoline before reduction could result in incomplete complex formation, which would reduce the accuracy of the assay.
The buffer is added last to avoid interfering with the reduction and binding steps, as buffer ions could alter the reaction kinetics if introduced too early.
Table 3. Detailed explanation on the importance of the order in which the chemicals are added after the sample, as well as the function of each reagent
[IMG] Schematic illustration of the workflow of Copper colorimetric assay
[CAPTION] Figure 3a: Schematic illustration of the workflow of Copper colorimetric assay
### 3.3 Results and discussion
### 3.3.1 Standard Caliberation Curve
To quantify the concentration of metal ions in bacterial samples, a standard calibration curve was generated using known concentrations of Cu ions (25, 50, 75, 100, 150, 200, 250 and 300 mg/L) . The standard solutions were diluted from a stock solution in 0.85% saline to ensure consistency with the sample matrix, as bacterial samples would also be suspended in saline. Absorbance measurements were taken at a wavelength of 545 nm using a spectrophotometer, and the standard curve is depicted below:
[IMG] Standard curve for copper in cuvettes
[CAPTION] Figure 3b: Standard curve for copper in cuvettes
From the standard curve, it was clear that the tested concentration exhibited good linearity, suggesting that the absorbance could be directly correlated to the concentration of the metal ion, thereby complying with the Beer Lamberts Law. By comparing the absorbance of bacterial lysates with that of the calibration curve, the concentration of metal ions accumulated inside the bacteria can be indirectly quantified.
### 3.3.1 Calculations for indirect metal quantification
To determine the concentration of metal ions within bacterial samples, the absorbance values obtained from the colorimetric assay were compared against the standard curve, which was constructed using known concentrations of metal ions. The equation derived from the standard curve was of the form:
###### y = mx + c
Where, y is the absorbance, m is the slope of the calibration curve, x is the concentration of metal ions in the solution (mg/L), and c is the y-intercept. Solving for x (metal ion concentration) represents the amount of metal ions in the supernatant.
###### x = (y-c)/m
To calculate the metal ion accumulation within the bacteria, the calculated concentration from the above equation (representing the concentration in the supernatant) could be subtracted with the initial concentration before exposure (50 mg/L), allowing for the indirect quantification of metal uptake.
### 3.3.2 Calculations for indirect metal quantification
Figure 3c presents the results of our colorimetric assay for copper removal using biquinoline, with absorbance measured at 545 nm. As in our previous toxicity assays, DH10β and pBAD were used as controls. Notably, the strains GaPept and CDS7 demonstrated approximately 50% copper removal after a one-hour incubation, suggesting their strong potential as candidates for copper remediation. In contrast, other strains such as HP, P1, and CuPept showed minimal efficiency, highlighting their limited capacity for copper binding under the tested condition.
[IMG] Biquinoline assay performed for all the engineered stains against Cu ions
[CAPTION] Figure 3c: Biquinoline assay performed for all the engineered stains against Cu ions
Take a look at our results page for complete information on colorimetric-assay results!
## Future Perspectives: Our Next Phase
### ICP-OES
We initially planned to use inductively coupled plasma optical emission spectrometry (ICP-OES) to obtain precise, high-resolution data on metal accumulation within our engineered strains. However, due to time constraints and logistical issues, we were unable to complete this analysis during the current phase of our project. Our secondary PI, Dr. Benjamin Hooremans lab is equipped with the necessary instrumentation, and this analysis will be carried out in the future to complement our findings from the colorimetric assay.
### Recovery
For the final picture of our project, we wanted to recover the recuperated metals from the bacterium and develop a prototype to scale up our project. For the final phase of our project, our goal was to recover the accumulated metals from the bacteria and develop a scalable prototype to further refine and expand our approach. For the recovery phase, we aimed to isolate the bacteria that had accumulated the metal from the solution and incinerate them in a muffle furnace. The metals contained in the ash could then be extracted using acid treatment, allowing for efficient metal recovery. Additionally, we envisioned developing a multi-metal remediation system, practical for real-world samples containing multiple metal ions. In this approach, we would engineer bacterial strains to express proteins specific to one metal at a time. After allowing the bacteria to bind and remove the targeted metal, we would separate the bacteria from the solution and repeat the process in cycles for each metal (Fig.4). This cyclic approach would not only enable the removal of all metals from the water but also allow us to recover each metal with minimal impurities.
[IMG] Schematic illustration of the cyclic approach for multi-metal remediation
[CAPTION] Figure 4: Schematic illustration of the cyclic approach for multi-metal remediation
### References
[1] Nascimento Rocha, S. A., Dantas, A. F., Jaeger, H. V., Costa, A. C. S., Leão, E. dos S., & Gonçalves, M. R. (2008). Spectrofotometric determination of copper in sugar cane spirit using biquinoline in the presence of ethanol and Triton X-100. Spectrochimica Acta Part A: Molecular and Biomolecular Spectroscopy, 71(4), 1414–1418. https://doi.org/10.1016/j.saa.2008.04.013
