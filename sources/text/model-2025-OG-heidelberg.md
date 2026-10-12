[IMG] Description
Description
Get to Know PHOENICS
[IMG] Results
Results
Where data tells the story
[IMG] Engineering
Engineering
Design, Build, Test, Learn
[IMG] Model
Model
Optimizing the PHOENICS Cell
[IMG] Contribution
Contribution
For Other iGEMers
[IMG] Application
Application
From Lab to Therapy
[IMG] Experiments
Experiments
Material & Methods
[IMG] Notebook
Notebook
Logs & Protocols
[IMG] Safety and Security
Safety and Security
Responsible Research
[IMG] Safety and Security
Part Collection
Explore our Parts
[IMG] Human Practices
Integrated Human Practices
Insights That Shaped Our Project
[IMG] Education
Education
Inspiring the Community
[IMG] Public Outreach
Public Outreach
Science in Public
[IMG] Learning Platform
Learning Platform
Educating the Next Generation
[IMG] Members
Members
Meet the Team
[IMG] Attributions
Attributions
Credits & Acknowledgments
[IMG] Sponsors
Sponsors & Partners
Powered by Our Supporters
Home
[IMG] Description
Description
Get to Know Phoenics
[IMG] Results
Results
Where data tells the story
[IMG] Engineering
Engineering
Design, Build, Test, Learn
[IMG] Contribution
Contribution
For Other iGEMers
[IMG] Model
Model
Optimizing the PHOENICS Cell
[IMG] Application
Application
From Lab to Therapy
[IMG] Experiments
Experiments
Material & Methods
[IMG] Notebook
Notebook
Logs & Protocols
[IMG] Safety
Safety and Security
Responsible Research
[IMG] Part Collection
Part Collection
Explore our Parts
[IMG] Integrated Human Practices
Integrated Human Practices
Insights That Shaped Our Project
[IMG] Education
Education
Inspiring the Community
[IMG] Outreach
Public Outreach
Science in Public
[IMG] Learning platform
Learning Platform
Educating the Next Generation
[IMG] Members
Members
Meet the Team
[IMG] Attributions
Attributions
Credits & Acknowledgments
[IMG] Sponsors
Sponsors & Partners
Powered by Our Supporters
Awards
[IMG] Loading...
SPARC
Loading page...
MODEL
​ :=++++-. :+*+++**+++++=+++=+.*=..-+=+ =*:#$%:#-++$@%+#$@-$+@++$@#% =*:%@$%=**++-++.-..!+==.==.. -+=$+++**=. :=#+:+*+++-. .-*+$+#-. -*#=+#+: :=%*:**#: -+#+=*+- .-#*$+#-. -*#=+#+: :=%*:**- -#*:*%=: -*%*=#*- .-#%%@*.*%-. /#@@$@#=%*- .. .. ... .....=@#&#§%%%. @#$@%$@@@$$@%%@@+@A@%+@% @%$$@#%@$@%%%@@@$@%@@@@* -#%@@@%*- ​
Our model, SPARC, is a powerful tool designed to accelerate the development of personalized cancer therapies by optimizing synthetic immune cell systems. By integrating deep learning-based de novo binder design with physics-based molecular dynamics (MD) simulations, SPARC enables the rapid prototyping of protein binders, receptor configurations, and synthetic circuits. Our integrated MD-based pipeline provides a reliable pre-screening metric for binder selection, outperforming traditional methods and reducing experimental costs. We then successfully validated novel binders against tumor-relevant ligands in the wet lab, showcasing our model's predictive capabilities.
Integrating these findings into our mathematical framework of receptor dimerization and intracellular phosphorylation dynamics aided us in our experimental design. This enabled us to not only navigate the design space of our part collection, but also optimize our cells to sense stimulatory and inhibitory ligands simultaneously. This is complemented by a digital database that maps the behavior of various circuit architectures to target diverse tumor types. By streamlining the design process, SPARC offers a safe, adaptable and scalable solution for personalized cancer therapies, ultimately accelerating the path to clinical application.
## Introduction
Our PHOENICS system is a cutting-edge synthetic biology platform designed to respond to specific tumor microenvironments by leveraging modular receptor systems and logic-based phosphorylation circuits. By equipping tumor-homing chassis cells with a retargetable synthetic receptor architecture and an effector-coupled intracellular processing unit, PHOENICS cells have the potential to precisely detect and respond to multiple cancer-related cues. This allows for targeted therapeutic strategies that can be adapted to diverse tumor types, representing a significant advancement in personalized oncology.
A key challenge in developing such a sophisticated system is understanding the complex interactions within the PHOENICS cell. The intricacies of receptor dimerization, ligand binding, and intracellular signaling require accurate prediction and optimization before experimental testing. This is why we have created SPARC – the Simulator for Phosphorylation And Receptor Characterization. This framework allows us to build a computational replica of the PHOENICS cell system, enabling us to simulate and analyze its behavior under varying conditions. At its core, our model serves three main purposes:
#### Binder Development
SPARC plays a crucial role in expanding the range of tumor ligands our system can target. By designing and testing novel binders in silico, we can enhance the modularity of our receptors and ensure their ability to sense a broader array of TME-associated proteins.
#### Enhanced Understanding
Our digital twin provides deep insights into the complex biochemical processes that govern receptor-ligand interactions and downstream signaling, giving us a clearer understanding of the system's dynamics and switching characteristics.
#### Designing Optimal Cellular Architectures
SPARC allows us to explore different configurations of receptor and signaling components, helping us identify the most effective designs for a desired therapeutic outcome.
- Binder Development: SPARC plays a crucial role in expanding the range of tumor ligands our system can target. By designing and testing novel binders in silico, we can enhance the modularity of our receptors and ensure their ability to sense a broader array of TME-associated proteins.
- Enhanced Understanding: Our digital twin provides deep insights into the complex biochemical processes that govern receptor-ligand interactions and downstream signaling, giving us a clearer understanding of the system's dynamics and switching characteristics.
- Designing Optimal Cellular Architectures: SPARC allows us to explore different configurations of receptor and signaling components, helping us identify the most effective designs for a desired therapeutic outcome.
Click on the graphical abstract to jump to the relevant section!
The development of the PHOENICS toolkit and its digital twin was built on several core components in our dry lab modeling efforts. We started with the design and generation of novel binders leveraging the cutting-edge de novo protein design tool BindCraft. Novel binders were then characterized using advanced molecular dynamics simulations, which provided accurate rankings of the binder candidates based on their binding affinities. To understand the dimerization behavior of our MESA receptors in the membrane, we leveraged coarse-grained simulations, which allowed us to optimize transmembrane domain selection based on their background dimerization rates. Finally, the entire PHOENICS system was integrated into a mathematical framework that simulates receptor-ligand binding, receptor dimerization, and phosphorylation-based signaling, helping us to predict system behavior under various ligand concentrations.
Our modeling pipeline is tightly integrated with our wet lab efforts, where we validated key findings through experimental assays such as the Cell-Free Two-Hybrid binding assay and flow cytometry. This iterative feedback loop between computational modeling and experimental validation ensured that the digital twin accurately captures the system's biological behavior, while simultaneously optimizing our part designs for in vitro testing.
## Expanding Tumor Targeting Potential
### De novo Protein Binder Generation
A crucial aim of our dry lab efforts was to expand the targetable ligand space that our synthetic receptor can sense beyond those initially tested in our wet lab. Leveraging the modular architecture of our sensing platform, we focused on generating novel binding domains for a variety of TME-associated proteins. This approach enhances the system's ability to adapt to and target different tumor types, paving the way for more versatile and personalized therapies.
While antibody fragment engineering has long been a standard approach for target recognition, generating large panels of antibody fragments is time-consuming and often not feasible (Wang et al., 2025). In recent years, de novo protein binder design has emerged as a powerful alternative, driven especially by generative deep learning models such as RFdiffusion and ProteinMPNN (Bennett et al., 2023; Watson et al., 2023). Earlier this year, BindCraft was published as a next-generation platform, capable of generating protein binders with nanomolar affinities (Pacesa et al., 2025). Its neural network-based hallucination model leverages the predictive power of AlphaFold, and offers both accessibility and efficiency for rapid binder prototyping. Within SPARC's modeling framework, we integrated BindCraft to extend the modularity of our receptor platform, particularly due to its proven, strong performance coupled with ease of use and tunability.
We focused our binder generation efforts on ligands of high relevance in the tumor microenvironment (TME). These included the homodimer growth/differentiation factor 15 (GDF15), which is upregulated in the pancreatic TME (Zhu et al., 2024) as well as lymphocyte antigen 6 family member K (LY6K), a protein overexpressed in cervical cancer (Luo et al., 2016). We furthermore sought to target the monomeric ligand osteoglycin (OGN), which exhibits increased expression in pancreatic cancer, however is downregulated in cervical cancer (Robinson et al., 2019).
#### Results
To initiate binder design, we predicted 3D structures of the target ligands using AlphaFold3 (Abramson et al., 2024). These predicted structures were visually analyzed in PyMOL, where unstructured loops and low-confidence regions were trimmed (Schrödinger, LLC, 2015). Stable regions with high prediction confidence (pLDDT > 90) were defined as optimal binder interfaces. Using standard BindCraft settings (c.f. SPARC user manual), we generated 10 binders for each target with sequence lengths within 60–150 amino acids. These binders were successfully docked to the selected interface regions, and the interface predicted template modeling (i_pTM) score was used as an initial ranking metric by BindCraft, estimating binding affinity (Figure 1 A-C). Binders with an i_pTM score of above 0.8 were then selected for experimental validation in the Cell-free Two-Hybrid wet lab binding assay (click to see our results).
#### A
Your browser/graphics card does not seem to support WebGL.
Find out how to get it here.
Click to load molecular structure
Error: Cannot set properties of undefined (setting 'backgroundColor')
Frame 0 / 0
#### B
Your browser/graphics card does not seem to support WebGL.
Find out how to get it here.
Click to load molecular structure
Error: Cannot set properties of undefined (setting 'backgroundColor')
Frame 0 / 0
#### C
Your browser/graphics card does not seem to support WebGL.
Find out how to get it here.
Click to load molecular structure
Error: Cannot set properties of undefined (setting 'backgroundColor')
Frame 0 / 0
#### D
Your browser/graphics card does not seem to support WebGL.
Find out how to get it here.
Click to load molecular structure
Error: Cannot set properties of undefined (setting 'backgroundColor')
Frame 0 / 0
Figure 1: 3D structure of target-binder complex. The rotatable structure of BindCraft-generated binders docked to the target (A) GDF15, (B) OGN and (C) LY6K. (D) 3D structure of arodyn-fused binder (6 streically unhindered residues shown in red) bound to GDF15 for implementation in GPCR-based PAGER architecture.
To adapt de novo generation of binders to our GPCR-based receptor architecture, an additional modification of the BindCraft tool was required. This involved integrating an arodyn moiety at the N-terminus of the binder to meet the functional requirements for this receptor design, which would enable effective protein-gating for receptor activation (Kalogriopoulos et al., 2025). While BindCraft does not natively support this modification, we successfully tuned the tool's sequence initialization and backpropagation functionalities. BindCraft's hallucination model now accounts for the presence of the arodyn-terminus and optimizes the binder sequence accordingly (c.f. SPARC user manual). This adaptation allowed us to generate a library of arodyn-fused binders targeting GDF15, specifically optimized for our GPCR receptor component. Importantly, this modification did not compromise the strengths of BindCraft, preserving its ability to generate high-affinity, well-structured binders, thereby extending the sensing potential of the PHOENICS cell (Figure 1 D).
#### Outlook
Although BindCraft provides the i_pTM metric as an internal ranking criterion, we found that this score is not a reliable predictor of binding affinity for further experimental characterization. This was additionally emphasized by Dr. Martin Pacesa, the first author of the BindCraft publication, who underlined the fact that the i_pTM score is rather a binary estimator than a ranking metric. Therefore, to streamline the process from in silico generation to wet lab testing, our modeling framework required a more robust and trustworthy predictor of binding affinities. Developing such a metric was crucial for pre-filtering candidates and prioritizing those most likely to succeed in downstream characterization assays like KD-value measurement.
### Affinity-based Binder Characterization
To further refine our binder selection, we identified the need for a more robust characterization of the binding affinities of the BindCraft generated binders. To address this, we leveraged molecular dynamics simulations, particularly the umbrella sampling (US) method, to predict the free energy profiles of our binder-target complexes, from which a thermodynamically relevant dissociation constant can be derived. While alternative methods, such as alchemical calculations, could have been employed, they do not adequately capture entropic effects and lack the precision required for our application (Govind Kumar et al., 2023). In contrast, our physics-based US approach offers a more reliable ranking of binders (Deng & Roux, 2009), facilitating the pre-selection of candidates for further experimental characterization with techniques like surface plasmon resonance (SPR) or quartz crystal microbalance with dissipation monitoring (QCM-D). Though essential for obtaining accurate binding affinity measurements, these methods are costly and impractical for large-scale testing, which further emphasizes the necessity of a validated pre-screening pipeline (Easley et al., 2022; Kartal et al., 2021).
Besides US, we also tried to estimate binding affinities using the open-source machine learning tool Prodigy, a predictor which is solely based upon interfacial contacts for a protein-protein interaction (Vangone & Bonvin, 2017). With this approach, we also sought to compare and interpret the utility of both ML-based and physics-based methods, to truly find out the optimal pre-screening tool for integration into SPARC's complete pipeline.
[IMG] Dropdown Header
Umbrella Sampling Derivation & Workflow
#### Potential of Mean Force (PMF)
The potential of mean force (PMF) is a key entity for understanding the binding affinities of our generated binders. By projecting the complex's potential energy onto a single 1D reaction coordinate (RC) ξ, we can derive a free energy profile for the system. The PMF represents the change in free energy along this RC, which helps us estimate thermodynamic properties like the standard binding free energy ΔG° and dissociation constant KD. The formula for the unbiased PMF profile G(ξ) is given as:
(1)G(ξ)=−kBTln⁡p(ξ)+C
In this equation, p(ξ) represents the unbiased probability density of finding the system at position ξ during thermal equilibrium. kB denotes the Boltzmann constant, T is the temperature, and C is an arbitrary constant (Mukherjee & Sasikala, 2013).
#### Preprocessing Steps
Before performing the umbrella sampling to compute the PMF, we parameterized the system consisting of our docked binder and target using the Amber99sb-ildn force field, which is ideal for protein complexes (Lindorff-Larsen et al., 2010). A rectangular simulation box was defined with a z-length of 2.5 times the z-span of the protein complex, solvated in TIP3P water with a final sodium chloride concentration of 150 mM. After two preliminary energy minimizations (EM) with 1000 steps to remove steric clashes, we relaxed the whole system using a longer EM with 50000 steps and the steep gradient descent algorithm with the maximum target force Fmax=1000 kJmol×nm.
First, the system temperature was equilibrated in the NVT (constant temperature, volume and number of molecules) ensemble to 300 K for 100 ps using the C-rescale thermostat. Following this, three NPT (constant temperature, pressure and number of molecules) runs were conducted with decreasing position restraints to equilibrate the system pressure at 1 atm using the V-rescale barostat (see SPARC user manual).
#### Umbrella Sampling (US)
To calculate the PMF, we applied US along the center-of-mass (COM) distance between the binder and its target. Using steered molecular dynamics (SMD), we gradually pulled the binder away from the target, applying a harmonic biasing potential Ubias(ξ) according to Equation (2) (Liao, 2020).
(2)Ubias(ξ)=12k(ξ−ξ0)2
Here, ξ is the RC along the pulled z-direction, ξ0 is the reference position, and k is the force constant, which was set to 10000 kJnm2. This 100 ns long SMD run produced a discrete set of sampling windows at different RC values. Independent MD production runs were conducted at each window to generate biased count distributions Hbias(ξ), which are converted to probability distributions pbias(ξ). These biased distributions were then unbiased using Equation (3) to generate the free energy profile G(ξ) at each ξ0:
(3)G(ξ)=−kBTln⁡pbias(ξ)−Ubias(ξ)+C
The Weighted Histogram Analysis Method (WHAM) was subsequently used to reweight and combine the unbiased free energy profiles into the unbiased PMF over the whole RC (Kumar et al., 1992). As the PMF curve itself is a representation of the free energy landscape, any difference between two points on the curve directly corresponds to the Gibbs free energy change (ΔG) between those states (Roux, 1995). Keeping this in mind, the free energy for unbinding between the binder and target was calculated as the difference between the bound state (minimal energy state in the PMF) G(ξbound) and the unbound state G(ξunbound) (plateau region of the PMF):
(4)ΔGbinding=−ΔGunbinding=−(G(ξunbound)−G(ξbound))
To ensure better convergence of the PMF and ensure the sampling happens along a 1D reaction coordinate, additional position restraints were added to the pulled binder in the x and y directions during the steered MD simulation, which needs correction to acquire the unrestrained free energy value (Aho et al., 2024). In addition to this, a standard state volume correction has to be performed to obtain the final standard binding free energy ΔG° (Equation (5)) (Gilson et al., 1997).:
(5)ΔG°binding=ΔGbinding+ΔGV+ΔGR
With this, the calculation of the dissociation constant KD is straight-forward using the Gibbs-equilibrium equation:
(6)ΔG°=−RTln⁡(KD)⇔KD=e−(ΔG°/RT)
For Prodigy, the target-binder complexes were simulated in 7 ns MD runs to assess the complete configurational space of the interaction. From the complete run, the frames were extracted using 'gmx trjconv', which were then given as input to Prodigy. The mode of the distribution of the outputted KD values from each frame was taken as the resultant dissociation constant for the protein-binder complex.
#### Results
The umbrella sampling protocol showed successful steered MD simulation of the binder and target for all cases, which yielded satisfactory histogram overlaps of the unbiased count distributions H(ξ) (Figure 2 A-B). The resulting PMF showed convergence after a COM distance of 7 nm, as seen by the plateau in the unbound state (Figure 2 C) for binder 3 for GDF15.
#### A
Click to load molecular trajectory
Loading molecular structure...
Frame 0 / 0
#### B
[IMG] Histogram US
#### C
[IMG] PMF Curve US
Figure 2: Steered MD and umbrella sampling of GDF15 and Binder 2. (A) The trajectory of the 10 ns steered MD simulation (k=1000kJnm2) is visualized. (B) The unbiased count distributions H(ξ) of each umbrella sampling window at the RC ξ0 are shown, displaying significant overlap. (C) Resulting PMF curve G(ξ) generated using WHAM for the umbrella sampling simulation. The binding free energy of −25.4kJmol was calculated from the energy in the bound state ΔGbound(ξ) and unbound state ΔGunbound(ξ).
All generated binders were characterized using the US approach, and their KD values were calculated from the corrected ΔG° values (Tables 1-3). Additionally, Tables 1-3 show the dissociation constants predicted by Prodigy, which generally estimates most binders to be in the nanomolar range.
Table 1: Corrected standard binding free energies ΔG° and dissocition constants KD for GDF15 binders estimated from US and Prodigy. The resulting corrected ΔG° is calculated according to (Equation (5)) using the restraint correction ΔGR and standard state volume correction ΔGV. All binding energies are given in [kJmol], for binders 1, 3, 5 and 7 the mean and standard error of mean are given for measured triplicates. KD values derived from US are calculated using (Equation (6)) and the Prodigy predicted values are also also shown for comparison.
| Binder
| ΔGPMF
| ΔGV
| ΔGR
| ΔG°
| KD [μM]
| KD (Prodigy) [μM]
| 1
| −18.99±4.29
| −10.26±0.63
| 19.6±0.22
| −9.64±4.42
| (4.15±4.00)×104
| 1.14×10−2
| 2
| −25.8
| −11.19
| 21.84
| −15.86
| 1.73×103
| 2.23×10−1
| 3
| −24.74±3.10
| −11.25±0.10
| 20.25±0.20
| −15.74±3.10
| (2.88±3.04)×103
| 1.52×10−1
| 4
| −19.38
| −11.26
| 20.15
| −10.49
| 1.49×104
| 1.11×10−1
| 5
| −18.20±2.52
| −10.23±0.15
| 19.23±0.25
| −9.19±2.48
| (3.24±2.15)×104
| 3.72×10−1
| 6
| −22.57
| −9
| 18.91
| −12.67
| 6.23×103
| 5.79×10−1
| 7
| −49.5±0.85
| −10.46±0.28
| 19.53±0.28
| −40.44±0.85
| (9.37±3.13)×10−2
| 1.39×10−1
| 8
| −17.17
| −8.02
| 19.65
| −5.54
| 1.09×105
| 4.76×10−1
| 9
| −17.18
| −10.26
| 19.6
| −7.83
| 4.32×104
| 1.51×10−1
| 10
| −10.57
| −9.06
| 19.68
| 0.05
| 1.02×106
| 1.90×10−1
[IMG] Dropdown Header
Table 2: OGN Binders
Table 2: Corrected standard binding free energies ΔG° and dissocition constants KD for OGN binders estimated from US and Prodigy. The resulting corrected ΔG° is calculated according to (Equation (5)) using the restraint correction ΔGR and standard state volume correction ΔGV. All binding energies are given in [kJmol]. KD values derived from US are calculated using (Equation (6)) and the Prodigy predicted values are also also shown for comparison.
| Binder
| ΔGPMF
| ΔGV
| ΔGR
| ΔG°
| KD [μM]
| KD (Prodigy) [μM]
| 1
| −15.37
| −7.55
| 19.74
| −3.18
| 2.79×105
| 5.25×10−1
| 2
| −19.64
| −8.54
| 19.72
| −8.46
| 3.36×104
| 1.04
| 3
| −16.58
| −9.68
| 19.59
| −6.68
| 6.88×104
| 2.87
| 4
| −17.88
| −10.68
| 19.57
| −8.99
| 2.72×104
| 2.26
| 5
| −27.63
| −8.46
| 20.09
| −16.00
| 1.64×103
| 1.26×10−1
| 6
| −19.01
| −9.73
| 19.63
| −9.11
| 2.60×104
| 1.32
| 7
| −16.69
| −10.06
| 19.96
| −6.79
| 6.58×104
| 1.05
| 8
| −22.23
| −8.80
| 19.42
| −11.61
| 9.50×103
| 7.19×10−1
| 9
| −21.38
| −11.66
| 19.83
| −13.21
| 5.02×103
| 1.45×10−1
| 10
| −21.66
| −8.14
| 19.77
| −10.03
| 1.79×104
| 1.33×10−1
[IMG] Dropdown Header
Table 3: LY6K Binders
Table 3: Corrected standard binding free energies ΔG° and dissocition constants KD for LY6K binders estimated from US and Prodigy. The resulting corrected ΔG° is calculated according to (Equation (5)) using the restraint correction ΔGR and standard state volume correction ΔGV. All binding energies are given in [kJmol]. KD values derived from US are calculated using (Equation (6)) and the Prodigy predicted values are also also shown for comparison.
| Binder
| ΔGPMF
| ΔGV
| ΔGR
| ΔG°
| KD [μM]
| KD (Prodigy) [μM]
| 1
| −34.62
| −10.06
| 19.97
| −24.72
| 4.97×101
| 6.09×10−2
| 2
| −19.73
| −11.06
| 19.95
| −10.84
| 1.30×104
| 5.91×10−2
| 3
| −28.07
| −10.66
| 20.00
| −18.72
| 5.49×102
| 2.97×10−2
| 4
| −12.28
| −9.85
| 19.75
| −2.38
| 3.85×105
| 8.57×10−4
| 5
| −19.97
| −10.05
| 19.95
| −10.07
| 1.77×104
| 4.55×10−1
| 6
| −32.92
| −9.89
| 19.79
| −23.02
| 9.82×101
| 1.70×10−3
| 7
| −21.34
| −9.98
| 19.89
| −11.44
| 1.02×104
| 2.33×10−1
| 8
| −41.98
| −10.05
| 19.95
| −32.08
| 2.6
| 2.41×10−2
| 9
| −19.83
| −11.05
| 19.94
| −10.94
| 1.25×104
| -
| 10
| −26.07
| −10.19
| 20.09
| −16.17
| 1.53×103
| -
#### Results: Wet lab binder and metric validation
In the wet lab, we additionally tested the binding strength of five GDF15 binders using the fluorescence readout-based Cell-free Two-Hybrid assay: Here, binder 3 yielded the highest signal, suggesting a promising de novo designed binder for GDF15 (Figure 3).
[IMG] Description of your image
Figure 3: Functional validation of BindCraft-generated de novo binders with CF2H assay. Neg. ctrl: No DBD-binder encoding DNA. Pos. ctrl: DNA encoding for NbALFA nanobody paired cognate ALFA-tag epitope. sfGFP fluorescence [AU] was measured for induction with GDF15 and compared to fluorescence without target protein, displaying mean ± SEM. Fluorescence was analyzed by two-way ANOVA. Adjusted p-values are shown for each binder and used as a ranking metric.
The ranking of the experimentally validated binders was subsequently compared to BindCraft-derived i_pTM scores, as well as KD-based rankings acquired through our US simulations and Prodigy. For this, the Kendall's τ as well as Spearman correlation metric were utilized, whereas Kendall's τ is better suited for quantifying ranking similarity for the small sample size of n = 5 binders (Kendall, 1938). We found that both the US-derived ranking showed the better alignment with the experimental data than the BindCraft i_pTM ranking, with a Kendall's τUS = 0.80 compared to τBindCraft = −0.20 (Table 4), whereas Prodigy also performed relatively well with a Kendall's τProdigy = 0.40.
Table 4: Comparison of in silico characterized and wet lab measured GDF15 binder rankings. Binders 1, 2, 3, 5 and 7 were experimentally characterized using the CF2H assay to obtain a ranking based on fluorescence readout fold-change between the induced and uninduced conditions (c.f. Figure 3). This ranking was compared to the rankings obtained from BindCraft (based on i_pTM scores), umbrella sampling and Prodigy (based on predicted KD values) using the Kendall's τ and Spearman's ρ correlation coefficients.
| Method
| Ranking of Binders
| Kendall's τ
| Spearman's ρ
| Wetlab (CF2H assay)
| B3 > B7 > B2 > B5 > B1
| -
| Bindcraft
| B1 > B2 > B3 > B5 > B7
| −0.20
| −0.30
| Umbrella sampling
| B7 > B2 > B3 > B5 > B1
| 0.80
| 0.90
| Prodigy
| B1 > B7 > B3 > B2 > B5
| 0.40
| 0.50
#### Outlook
The results evidently highlight the fact that the BindCraft i_pTM-based ranking is insufficient to specifically characterize the binder affinities among themselves, as seen by the negative Kendall's τ value. This demonstrates the power of both of our pre-filtering approaches in drastically reducing the work, cost, and time associated with testing all generated binders using methods such as SPR or QCMD to obtain biologically relevant KD values (Easley et al., 2022; Kartal et al., 2021). However, we rationally decide to choose the MD-based estimator as SPARC's primary method in the overall workflow over Prodigy. This is explained by the fact that the US method is based on a more realistic, thermodynamic approach that takes into account more parameters than Prodigy. Still, both validated methods allowed us to make the binder selection process much more efficient and accurate for downstream use in SPARC's mathematical model.
### Simulating Membrane-associated Receptor Dimerization
In addition to the binder characterization, a critical component of SPARC's work is focused on the characterization of MESA receptor dimerization within the membrane. This aspect is crucial for guiding the design of the wet lab experiments and identifying optimal transmembrane (TM) domains that minimize background dimerization. Since all-atom simulations cannot efficiently model such large membrane-protein systems due to their high computational cost, we turned to coarse-grained (CG) simulations. Here, the atoms of a molecular structure are grouped into CG beads based on their physical properties and parameterized using special force fields, which drastically reduces the degrees of freedom of the whole system (Borges-Araújo et al., 2023). For this we decided to use the Martini3 force field upon talking to experts, such as Dr. Fabian Grünewald (Souza et al., 2021). This allows us to perform longer simulations of biologically meaningful durations (2-10 µs) of membrane-protein complexes, providing insights into the dynamic behavior of the receptors. The goal was to simulate receptor halves of the FK506 binding protein (FKBP) and the FKBP-rapamycin binding domain (FRB) embedded in the membrane, without the dimerization-inducing rapalog ligand, to evaluate the background dimerization behavior of various TM domains for implementation in the wet lab (Levintov et al., 2024).
[IMG] Dropdown Header
Protein Coarse-graining and Membrane Insertion
First, we designed FKBP and FRB receptor halves with their respective TM domains: To this end, we compared the homodimer pair of the CD28 TM domain with the heterodimer pair of the CD28 and CD28(M3) domains (Yang et al., 2025). For this, the open source tool Modeller was employed, which is a homology-based modeling framework of tertiary protein structures (Webb & Sali, 2016). The template PDB structure of the dimerized FKBP and FRB halves (PDB ID: 3fap) was used to de novo design the linker and TM halves, resulting in a structure of the dimerized receptor state. The receptor halves were subsequently separated manually in PyMOL to create an initial starting configuration to insert into the membrane.
The resulting all-atom structures were then converted into coarse-grained models via the Martini-internal function martinize2 (Kroon et al., 2023). The resulting CG proteins were inserted into a simplified biological plasma membrane (Table 3) using the Insane (INSert membrANE) function, a built-in script in the Martini Initiative, that sets up coarse-grained membrane systems based on lipid compositions and types parameterized in the Martini3 force field and facilitates proper insertion of proteins into the membrane (Wassenaar et al., 2015).
Table 5: Lipid types and compositions for a model mammalian plasma membrane adapted from (Wassenaar et al., 2015). The table depicts the lipid types with their respective head groups that are compatible with the Martini3 force field, along with their full names and compositions in both the outer and inner leaflets of the membrane. The following lipids were inserted accordingly into the membrane using the Insane tool.
| Lipid
| Tail-head group
| Full name
| Outer Leaflet
| Inner Leaflet
| CHOL
| Choleserol
| Cholesterol
| 33.8%
| 25.3%
| DLPE
| di-C18:2-PE
| 1,2-dilauroyl-sn-glycero-3-phosphoethanolamine
| 5.9%
| 16.8%
| PAPC
| C16:0/20:4-PC
| 1-palmitoyl-2-arachidonoyl-sn-glycero-3-phosphatidylcholine
| 11.6%
| 7.7%
| PAPS
| C16:0/20:4-PS
| 1-palmitoyl-2-arachidonoyl-sn-glycero-3-phosphatidylserine
| -
| 16.8%
| POPC
| C16:0/18:1-PC
| 1-palmitoyl-2-oleoyl-sn-glycero-3-phosphatidylcholine
| 23.4%
| 14.4%
| POPE
| C16:0/18:1-PE
| 1-palmitoyl-2-oleoyl-sn-glycero-3-phosphoethanolamine
| 1.9%
| 5.5%
| SAP6
| C16:0/20:4-PIP2(4,5)
| 1-stearoyl-2-arachidonoyl-sn-glycero-3-phosphatidylinositol bisphosphate
| -
| 2.3%
| SSM
| di-C18:0-SM
| N-stearoyl-D-erythro-sphingosylphosphorylcholine
| 23.4%
| 11.2%
With Insane, the membrane-protein system was additionally solvated with coarse-grained water with an NaCl concentration of 150 mM. We began with a single energy minimization with 5000 steps, followed by a 10 ns NPT equilibration at 300 K and 1 atm. A 2 μs membrane simulation was then performed for both receptor halves in one orientation, keeping the initial distance between the receptor halves constant for both the CD28/CD28 homodimer and CD28/CD28(M3) heterodimer TM domain pairs.
#### Results
The dimerization behavior of the two TM domain pairs (CD28/CD28 and CD28/CD28(M3)) was monitored by visualizing the MD trajectory as well as plotting the center-of-mass (COM) distance between the receptor halves over time (Figure 4 A). From the trajectory, it becomes evident that both TM domain pairs exhibit some level of background dimerization in the absence of the rapalog ligand, which is in line with literature stating high levels of baseline signal for the MESA receptor architecture (Zhou et al., 2023).
#### A
#### B
[IMG] Distance Plot
Figure 4: Coarse-grained background dimerization of MESA receptors for different TM domain pairs. (A) The trajectory for the background membrane dimerization of CD28/CD28 TM domain pair in the absence of rapalog is visualized in a mammalian plasma membrane in a coarse-grained simulation with the Martini3 force field. (B) The distance plot shows the center-of-mass (COM) distance between the two receptor halves over the course of the 2 μs simulation for the CD28/CD28 (orange) and CD28/CD28(M3) (purple) domain pairs.
As shown in the plot, the CD28/CD28 pair dimerized more quickly than the CD28/CD28(M3) pair, indicating a higher background dimerization rate. These results were leveraged to improve the induction of MESA receptors using our expression readout system. The wet lab experiment comparing both TM domain pairs showed that the CD28/CD28(M3) pair indeed has a significantly lower background dimerization in the uninduced state and higher fold-change in response to rapamycin-induced expression (Figure 4 B).
Using SPARC's coarse-grained dimerization simulation, we were able to confirm that the CD28/CD28(M3) TM pair has more favorable properties for the MESA receptor design, which guided the engineering cycle for receptor optimization for the PHOENICS cell in the wet lab.
#### Outlook
The validated coarse-grained Martini simulations have shown promising results and hold great potential for further development and improvement of SPARC's predictive capabilities. In the future, by combining umbrella sampling with CG models, these simulations could be used to estimate kinetic parameters, such as background dimerization rates and binding affinities, which can be integrated into SPARC's mathematical model (Patel & Ytreberg, 2018). This approach could further enhance our pipeline, improving both accuracy and precision through the incorporation of membrane-based dynamics, while also accelerating binder screening by complementing time-intensive all atom simulations
## Mathematical Modeling of System Processes
For a deeper understanding of the underlying processes in a PHOENICS cell, our approach was to build a mathematical model into SPARC, simulating the biochemical reactions of our entire system. This model predicts the concentration of phosphorylated substrate for varying input concentrations of both stimulatory and inhibitory tumor ligands. The cellular architecture is represented by a set of kinetic and thermodynamic parameters of our wet lab components, which determine the system's behavior. This defines the model's end-to-end input-output mapping, which we used to guide and optimize experimental assays throughout the project.
To obtain expert perspectives and counsel, we engaged with multiple specialists in systems biology and information processing. Based on their feedback, we developed the model in two segments, reflecting our system's modules: a sensing layer that captures ligand binding and receptor dimerization, which then feeds into a processing layer that describes intracellular phosphorylation and dephosphorylation. This modular approach allowed us to develop each element independently before integrating them into a complete, but more intricate framework.
#### Underlying Assumptions
To strike a balance between feasibility and an accurate reflection of the biological complexity, we adopted a set of assumptions, which we developed in close collaboration with various experts in systems biology. Most importantly, our central assumption is that the system operates at steady-state, which is a common simplification in mathematical biology, assuming equilibrium concentrations of components that remain constant over time (Mathematical Biology. Vol. 1, c.f. Interview Dr. Pahle). This is appropriate, because our system is based on rapid phosphorylation and dephosphorylation of existing cellular components, instead of relying on significantly slower expression. Therefore, switching between the cell's inactive and active state occurs dynamically, quickly establishing equilibrium conditions that allow for steady-state simplification (Goldbeter & Koshland, 1984). Additionally, the modeled pathway behaves in a feed-forward manner with no engineered feedback loops, minimizing the likelihood of oscillations or multistability (Ferrell, 2002). Together, these factors ensure that the system quickly reaches a quasi-equilibrium state upon an imposed change in condition, supporting the steady-state approximation.
### Sensing Layer: Ligand Binding and Receptor Dimerization
The sensing layer is responsible for translating the extracellular signal in terms of ligand concentrations into intracellular signaling. This process involves the dimerization of two receptor halves upon ligand binding, leading to spatial co-localization on the membrane. This induces spatial proximity between the intracellular leucine zipper and the enzyme coupled to the intracellular domain on each receptor half. We chose to model a receptor system capable of both hetero- and homodimerization, which increases the flexibility of possible receptor architectures.
Our mathematical model for receptor dimerization is based on existing work that describes the rapamycin-induced heterodimerization of FKBP and FRB (Lu & Wang, 2017). This framework aligns with the well established MESA-receptor system used in our wet lab approach. The receptors' reaction mechanism follows a two-step process, where the intermediate, a ligand molecule bound to a single receptor half, can stably exist (Figure 5).
[IMG] Description of your image
Figure 5: Reaction scheme of receptor heterodimerization. Ligand binding to free receptor halves (top-left) can occur under the dissociation constants KD,1 or KD,2. Once one receptor half is bound to the ligand (top right and bottom left), the second receptor half can bind under the adjusted dissociation constants K3=K1α and K4=K2α, where α is the cooperativity factor (bottom right). In the case of homodimerization, K1 and K2 are set to identical values.
Starting with free-floating ligand L, receptor half 1 (R1), and receptor half 2 (R2), the ligand can bind either to R1 or R2. Binding occurs at the underlying kinetic on-rates k1+ and k2+, respectively, while dissociation happens at off-rates k1− and k2−. Once the ligand binds to one receptor half, a receptor chain of the other species can engage the already bound ligand, resulting in a complex of both receptor halves and the ligand molecule (R1R2L). The involved reaction steps up to this point are described in the following reactions:
[IMG]
(R.1)
[IMG]
(R.2)
[IMG]
(R.3)
[IMG]
(R.4)
The equilibria for these reactions are defined by the respective dissociation constants, which are the ratios of the off-rate (k−) to the on-rate (k+):
(7)KD=k−k+
While this model is primarily designed to represent a heterodimerization process, it can also account for homodimerizations by setting K1 and K2 to identical values. The dissociation constants K3 and K4 for the second reaction step, corresponding to the binding of R1 to R2L and R2 to R1L, are defined as the dissociation constants K1 and K2 from the first step, respectively, divided by the cooperativity factor (α). This adjustment to the dissociation constants reflects a change in the favorability of receptor half binding when the other half is already bound to the ligand. If α is greater than one, as is the case for rapamycin-induced FKBP-FRB dimerization, binding is more favorable when the ligand is already bound by the other receptor half (c.f. Figure 5) (Wang et al., 2019). Based on the explained biochemical reactions, a solvable polynomial can be defined to calculate the concentration of the dimerized receptor. Expand the section below to view the detailed derivation.
[IMG] Dropdown Header
Expand for Detailed Mathematical Derivation
Considering a steady-state and set total concentrations of the involved proteins, the following equations hold true:
(8)[R1][L]=KD,1[R1L] (9)[R2][L]=KD,2[R2L] (10)[R1][R2L]=KD,3[R1R2L]=KD,1α[R1R2L] (11)[R2][R1L]=KD,4[R1R2L]=KD,2α[R1R2L]
Additionally, since the mass conservation law applies, the total concentrations of each involved protein can be formulated the following way, where the index T indicates the total concentration:
(12)[R1]T=[R1]+[R1L]+[R1R2L] (13)[R2]T=[R2]+[R2L]+[R1R2L] (14)[L]T=[L]+[R1L]+[R2L]+[R1R2L]
On the basis of the established equations, equilibrium concentrations for each species of protein complex can be reformulated into the following terms:
(15)[R1]=KD,1KD,1KD,2−[L]2[[L]([L]−[L]T+[RD,2]T)+KD,2([L]−[L]T+[R1]T)] (16)[R2]=KD,2KD,1KD,2−[L]2[[L]([L]−[L]T+[RD,1]T)+KD,1([L]−[L]T+[R2]T)] (17)[R1L]=[L]KD,1KD,2−[L]2[[L]([L]−[L]T+[RD,2]T)+KD,2([L]−[L]T+[R1]T)] (18)[R2L]=[L]KD,1KD,2−[L]2[[L]([L]−[L]T+[RD,1]T)+KD,1([L]−[L]T+[R2]T)] (19)[R1R2L]=[R2]T−KD,2+[L]KD,1KD,2−[L]2[[L]([L]−[L]T+[RD,1]T)+KD,1([L]−[L]T+[R2]T)]
Substitution of the unknown concentrations of the protein complexes with different expressions produces the following equation.
A quintic equation for the concentration of the free ligand [L] can be derived:
(20)a0[L]5+a1[L]4+a2[L]3+a3[L]2+a4[L]1+a5=0
with the coefficients
(21)a0=1−1α (22)a1=−[L]T+(1−1α)(KD,1+KD,2−[L]T+[R1]T+[R2]T) (23)a2=(KD,1−[L]T+[R1]T)(KD,2−[L]T+[R2]T)−(1−1α)[KD,2([L]T−[R1]T)+KD,1([L]T−[R2]T)] (24)a3=KD,2(KD,1−[L]T+[R1]T)(KD,1α−[L]T+[R1]T)+KD,1(KD,2−[L]T+[R2]T)(KD,2α−[L]T+[R2]T)+2KD,1KD,2α[L]T (25)a4=KD,1KD,2(KD,1α−[L]T+[R1]T)(KD,2α−[L]T+[R2]T)+(1−1α)1αKD,12KD,22 (26)a5=−1αKD,12KD,22[L]T
Solving this quintic equation yields the concentration of the free ligand at equilibrium. By definition, a polynomial of degree five has five solutions, but only one of these solutions is biologically relevant. Selecting the correct root is crucial to ensure that the model calculates the proper concentration. To select the appropriate root, we filter out any roots with a negative real part, leaving only plausible positive solutions. If multiple positive roots remain after this selection, the root with the smallest imaginary part is chosen, and its imaginary component is projected to the real part. This assumes that the physically meaningful solution is the nearly real root with a positive real part.
With the concentration of free ligand now known, we could calculate the concentrations of all other species using equations (15)-(19). This allowed the model to compute the concentration of the dimerized receptor complex [R1R2L] at equilibrium.
#### Results
Given a set of parameters, [R1]T, [R2]T, K1, K2, and α, the dimerization behavior of the receptor can be investigated by increasing the ligand concentration [L] (Figure 6). The concentration of the R1R2L complex in steady-state increases with ligand concentration until it reaches a maximum. Beyond this point, increasing the ligand concentration further results in a decline in the dimerized receptor amount. This behavior is expected, as increasing ligand concentrations saturate the receptor halves, preventing them from binding to ligands already bound to other receptor halves (Han, 2020). As a result, the concentration of the dimerized complex decreases to nearly zero, indicating that nearly all receptor halves are occupied by a single ligand. This behavior aligns with biological expectations, validating the receptor dimerization model and completing the first module of the overall model (Han, 2020; Ross et al., 2020).
[IMG] Description of your image
Figure 6: Predicted receptor dimerization levels for various receptor ratios. The dimerized receptor amount [R1R2L] for [R2] = 50nM is shown for increasing ligand concentrations [L] at different [R1] values: 10nM (dark purple), 50nM (orange), 250nM (yellow) and 1500nM (purple). Other model parameters were set to [K1]=25nM, [K2]=250nM and α=10.
### Processing Layer: Phosphorylation Circuit
The processing layer is the core of the PHOENICS system, integrating multiple inputs into a single output through a carefully designed phosphorylation cycle. The central component of this circuit is the substrate (S), which is phosphorylated and dephosphorylated by an orthogonal kinase and phosphatase, respectively. A leucine zipper (LZ) connected to the substrate localizes it to the enzymes, which each have a complementary LZ attached. Once the substrate is positioned near the enzyme via leucine zipper dimerization, the proximity-induced enzymatic reaction can occur. When phosphorylated, the substrate is in its "activated" form, serving as the starting point for any downstream effector pathways. The primary objective of this module is to predict the concentration of the phosphorylated (active) substrate based on the given concentrations of the kinase and phosphatase. The model of the phosphorylation cycle is derived from the mathematical description of the system on which our circuit is based, with modifications to suit our specific needs (Yang et al., 2025).
The substrate, whether phosphorylated (Sp) or unphosphorylated (Su), can bind either to the leucine zipper of the kinase (K) or the phosphatase (P) (Figure 7). The reaction equilibria for these interactions are defined by the dissociation constants KLZ,s for the substrate-kinase LZ dimerization and KLZ,i for the substrate-phosphatase LZ dimerization. The following reactions can be described:
[IMG]
(R.5)
[IMG]
(R.6)
[IMG]
(R.7)
[IMG]
(R.8)
[IMG] Description of your image
Figure 7: Reaction scheme of intracellular phosphorylation circuit. The substrate can bind reversibly to complementary LZs of the kinase and phosphatase receptor halves under the dissociation constants KLZ,s and KLZ,i, respectively. When in proximity to the kinase, the unphosphorylated substrate can be irreversibly phosphorylated at a rate of k~K or when near the phosphatase, it can be dephosphorylated at a rate of k~P. Additionally, background phosphorylation occurs at a rate of k~bg. All phosphorylation rates are normalized to the background dephosphorylation rate kbg,dephos.
When bound to the LZ near the enzyme, the substrate becomes available for enzymatic conversion. A reaction can only occur if an unphosphorylated substrate is associated with a kinase (Eq. R.5), or if a phosphorylated substrate is associated with a phosphatase (Eq. R.8). Phosphorylated and unphosphorylated substrates will still bind to the leucine zippers of the kinase and phosphatase, respectively (Eq. (R.7), (R.6)), but will dissociate again without a reaction having occurred (Figure 7). The reaction rates for the phosphorylation of the unphosphorylated substrate and the dephosphorylation of the phosphorylated substrate are defined as k~K and k~P, respectively. In addition to the conversion catalyzed by the synthetic enzymes, the substrate is also phosphorylated by background phosphorylation activity, denoted as k~bg. The tilde (~) indicates that the enzymatic rates are normalized to the background dephosphorylation rate, thereby eliminating the need to separately account for this additional reaction. The enzymatic reactions are represented as follows:
[IMG]
(R.9)
[IMG]
(R.10)
[IMG]
(R.11)
Based on these set of reactions, a polynomial can be defined, and its solution can be used to calculate the concentration of the phosphorylated substrate. To view the full derivation, expand the section below.
[IMG] Dropdown Header
Expand for Detailed Mathematical Derivation
We define the equilibria of all binding events by their dissociation constants
(27)KLZ,s=kLZ,s−kLZ,s+=eβΔϵLZ,i (28)KLZ,i=kLZ,i−kLZ,i+=eβΔϵLZ,i
where β=1kBT and Δϵ denotes the corresponding binding energy.
Both enzymes, together with background processes, interconvert the substrate between phosphorylated and unphosphorylated forms. Binding further generates a range of protein complexes. The influx and efflux of each complex pool are governed by the rate equations
(29)d[Sp]dt=kLZ,s−[SpK]−kLZ,s+[K][Sp]+kbgp[Su]−kbgu[Sp] (30)d[SpK]dt=kLZ,s+[K][Sp]−kLZ,s−[SpK]+kKp[SpK]+kbgp[SuK]−kbgu[SpK] (31)d[SpP]dt=kLZ,i+[P][Sp]−kLZ,i−[SpP]−kPu[SpP]+kbgp[SuP]−kbgu[SpP] (32)d[Su]dt=kLZ,s−[SuK]−kLZ,s+[K][Su]+kbgu[Sp]−kbgp[Su] (33)d[SuK]dt=kLZ,s+[K][Su]−kLZ,s−[SuK]−kKp[SuK]+kbgu[SpK]−kbgp[SuK] (34)d[SuP]dt=kLZ,i+[P][Su]−kLZ,i−[SuP]+kPu[SpP]+kbgu[SpP]−kbgp[SuP]
At steady-state, the time derivatives can be equaled to zero , and by conservation the total concentrations of each protein are given
(35)[K]T=[K]+[SpK]+[SuK] (36)[P]T=[P]+[SpP]+[SuP] (37)[S]T=[Su]T+[Sp]T (38)[Su]T=[Su]+[SuK]+[SuP] (39)[Sp]T=[Sp]+[SpK]+[SpP] (40)[S]=[Su]+[Sp]
With these definitions, we can write partition functions for the kinase and the phosphatase. The partition function Z=∑ie−βEi sums the Boltzmann weights of all accessible states, serves as the normalizing constant for state probabilities, and provides access to thermodynamic quantities such as equilibrium constants
(41)ZK=1+[Sp]KLZ,s+[Su]KLZ,s=1+e−β(ΔϵLZ,s−kBTlog⁡[Sp])+e−β(ΔϵLZ,s−kBTlog⁡[Su]) (42)ZP=1+[Sp]KLZ,i+[Su]KLZ,i=1+e−β(ΔϵLZ,i−kBTlog⁡[Sp])+e−β(ΔϵLZ,i−kBTlog⁡[Su])
Given the partition functions, one can express conditional probabilities for every state in the system. For brevity, we do not list them here; see Yang et al. (2025) for the complete set.
To obtain a kinetic expression for the total phosphorylated substrate, we sum Eq. (29)-(31) and set the result to zero. This yields
(43)[Sp]T[S]T=kKpp(SuK|P,K)+kbgpkKpp(SuK|P,K)+kPup(SpP|P,K)+kbgp+kbgu=k~Kp(SuK|P,K)+k~bgk~Kp(SuK|P,K)+k~Pp(SpP|P,K)+k~bg+1
Here, enzyme reaction rates and background phosphorylation are normalized by the background dephosphorylation rate, indicated by a tilde.
(44)k~K=kKpkbgu (45)k~P=kPukbgu (46)k~bg=kbgpkbgu
These results yield expressions for the concentrations of free protein species:
(47)K[K]T=11+[S]KLZ,s (48)P[P]T=11+[S]KLZ,i (49)[S][S]T=11+[K]KLZ,s]+[P]KLZ,i]
Combining these with the conditional probabilities leads directly to the polynomial in Eq. (50).
By solving the following cubic polynomial, the concentration of the free substrate at steady-state can be derived:
(50)0=([S]KLZ,sKLZ,i)3+(KLZ,s+KLZ,iKLZ,sKLZ,i+[K]T+[P]T−[S]TKLZ,sKLZ,i)([S]KLZ,sKLZ,i)2+(1+[K]T−[S]TKLZ,s+[P]T−[S]TKLZ,i)([S]KLZ,sKLZ,i)−[S]TKLZ,sKLZ,i
With the known concentration of the free substrate, all other unknown concentrations, including the total concentration of the phosphorylated substrate [Sp]T, can be calculated.
#### Results: Model Predictions
The model successfully computed the concentration of phosphorylated substrate based on the kinase and phosphatase levels. Using this framework, we generated dose–response curves by fixing the concentration of either the kinase or phosphatase and varying the other enzyme. For each sampling point, we calculated both the phosphorylation rate ([Sp]T[S]T) and the kinase-to-phosphatase ratio. Plotting the phosphorylation rate against this ratio produced plausible sigmoid activation curves, indicative of switching behavior within the circuit (Figure 8). Phosphorylation remained near baseline levels when the phosphatase predominated, but increased as the kinase concentration rose, eventually plateauing at the maximum phosphorylation rate under kinase-dominant conditions (Porter & Miller, 2012). We further observed an increase in the relative phosphorylation level, when modeling a kinase variant with a higher enzymatic rate (k~K), as well as a shift in the activation point when using a phosphatase variant with a lower enzymatic rate (k~P) (Figure 8). These changes shift in the dose-response curve towards higher phosphorylation levels and lower kinase-to-phosphatase ratios demonstrates the model's sensitivity to changes in enzymatic activity.
[IMG] Description of your image
Figure 8: Predicted dose-response curves for different ABL kinase and PTPN1 phosphatase variants. The relative phosphorylated substrate amount [Sp]T[S]T is computed for increasing kinase-to-phosphatase ratios [K]T[P]T ([P]T = 5000nM) for different configurations of strong (k~K = 2.9) and medium (k~K = 0.41) ABL and strong (k~P = 8.0) and weak (k~P = 0.49) PTPN1 variants. Other constant model parameters were set to KLZ,s = KLZ,i = 0.0028nM, k~bg = 0.0016 and [S]T = 2190nM.
#### Results: Wet Lab Validation of Circuit Model Predictions
While the behavior of the circuit model appeared to be biologically sound, we sought to verify its performance by comparing it with our wet-lab-generated data. For this, we designed an experiment in which cells were transfected with constant amounts of our ABL kinase and varying amounts of the PTPN1 phosphatase. We then set the model parameters to values corresponding to the specific circuit components. The reaction rates of the enzymes and the background phosphorylation were known, as were the dissociation constants of the LZs attached to the enzymes. Since the total intracellular protein concentrations were unknown, we assumed that the relative transfection ratios proportionally reflected the ratio of intracellular concentrations.
When overlaying measured and predicted phosphorylation ratios and scaling the outputs to a comparable range, we observed that the experimental switching point of the synthetic cells aligned well (R2 ≈ 0.93) with model predicted data (Figure 9).
[IMG] Description of your image
Figure 9: Validation of model-predicted data with wet lab titration assay. The total predicted phosphorylated substrate concentration [Sp]T (purple curve) is shown for increasing kinase-to-phosphatase ratios [K]T[P]T with constant [K]T = 2000nM . The experimentally measured phosphorylation levels with flow cytometry (> 33000 single cells per condition, values display geometric mean of SplitFast fluorescence (RFU), geometric SEM < 2% (not displayed)) for various ABL-to-PTPN1 transfected ratios [Ktrans.]T[Ptrans.]T with constant amount of transfected ABL kinase [Ktrans.]T = 100ng are overlaid after scaling to a comparable range (orange points). The model parameters were set to match the experimental setup, with k~K = 0.41, k~P = 8.0, KLZ,s = KLZ,i = 0.0028nM, k~bg = 0.0016 and [S]T = 500nM.
Together, these results demonstrate that the phosphorylation circuit model accurately captures the experimentally observed circuit behavior. Even without knowledge of the absolute intracellular concentrations, the model performed reliably based on the provided enzyme ratios. This validation experiment confirms the intracellular phosphorylation model, thereby completing the second module of our overall system model.
### Integrated Modeling of the PHOENICS Cell
After developing the models for the sensing and processing layers, we combined them into a unified system. To do this, we duplicated the receptor model to provide mathematical descriptions for both the stimulatory and inhibitory input-sensing units. These modules calculate receptor dimerization based on the concentrations of two distinct ligands. Since dimerization of receptor halves induces enzymatic activity toward the substrate, we assumed that the concentrations of dimerized receptors for stimulatory and inhibitory ligands directly correspond to the concentrations of active kinase and phosphatase, respectively. The outputs from the first module thus serve as inputs for the second, resulting in a seamless pipeline. Additionally, we assumed that the enzymatic rates of the receptor-attached kinase and phosphatase match those of their cytosolic counterparts. This allowed us to infer the steady-state concentration of the phosphorylated substrate based solely on ligand concentrations in the extracellular environment.
[IMG] Dropdown Header
Input Parameters for SPARC's Mathematical Model
Table 6: Parameters of integrated receptor and phosphorylation circuit mathematical model. The table lists all 18 relevant input kinetic and thermodynamic parameters and concentrations for SPARC's complete mathematical model, with their descriptions and units.
| Nr.
| Parameter
| Description
| Unit
| 1
| [Ls]
| Total concentration of stimulatory ligand
| nM
| 2
| [Li]
| Total concentration of inhibitory ligand
| nM
| 3
| [R1s]T
| Total concentration of stimulatory receptor half 1
| nM
| 4
| [R2s]T
| Total concentration of stimulatory receptor half 2
| nM
| 5
| [R1i]T
| Total concentration of inhibitory receptor half 1
| nM
| 6
| [R2i]T
| Total concentration of inhibitory receptor half 2
| nM
| 7
| KD1,s
| Dissociation constant of stimulatory ligand to its receptor half 1
| nM
| 8
| KD2,s
| Dissociation constant of stimulatory ligand to its receptor half 2
| nM
| 9
| KD1,i
| Dissociation constant of inhibitory ligand to its receptor half 1
| nM
| 10
| KD2,i
| Dissociation constant of inhibitory ligand to its receptor half 2
| nM
| 11
| αs
| Cooperativity factor for stimulatory receptor
| unitless
| 12
| αi
| Cooperativity factor for inhibitory receptor
| unitless
| 13
| [S]T
| Total concentration of substrate
| nM
| 14
| k~K
| Kinase phosphorylation rate (normalized by background dephosphorylation)
| unitless
| 15
| k~P
| Phosphatase dephosphorylation rate (normalized by background dephosphorylation)
| unitless
| 16
| k~bg
| Background phosphorylation rate (normalized by background dephosphorylation)
| unitless
| 17
| KLZ,s
| Binding affinity of substrate LZ to stimulatory receptor LZ
| nM
| 18
| KLZ,i
| Binding affinity of substrate LZ to inhibitory receptor LZ
| nM
#### Results: Model Predictions
The behavior of a specific cell architecture, defined by parameters 3 to 18, can be explored by modulating the concentrations of stimulatory and inhibitory ligands. By fixing the concentration of one ligand and varying the other, we predicted phosphorylation levels for different ligand ratios. Plotting phosphorylation levels against the ligand ratio yielded dose-response curves, clearly displaying the cell's switching behavior for different possible circuit architectures. Furthermore, we observed that holding the inhibitory ligand concentration constant while varying the stimulatory ligand produced a bell-shaped curve where the phosphorylation level plateaued at an optimal ligand ratio and dipped for increaisng stimulatory ligand concentration (Figure 10). This is in line with the trend observed with the simple receptor model, where excessive ligand concentrations lead to a decrease in dimerization due to saturation of receptor binding sites (Han, 2020). The model's reliable predictive capabilites were additionally confirmed when observing a reflected curve when holding the stimulatory ligand constant and varying the inhibitory ligand (Figure 10).
[IMG] Description of your image
Figure 10: Predicted dose-response curves from complete, integrated model. The predicted relative phosphorylated substrate amount is shown for increasing stimulatory-to-inhibitory ligand ratios [Ls][Li], where either Li=100nM (purple) or Ls=100nM (orange) is held constant. In both cases, [R1,s]T = [R2,s]T = 10000nM and [R1,i]T = [R2,i]T = 100nM. Other model parameters were set constant to k~K = 0.41, k~P = 8.0, KLZ,s = KLZ,i = 0.0028nM, k~bg = 0.0016 and [S]T = 100nM. All dissociaton constants for the receptor model (Parameters 7-10) were held constant at 100nM.
#### Results: Leveraging SPARC for Optimal Dual-Ligand Sensing
Next, we sought out to implement SPARC's complete, integrated mathematical framework to assist in designing the dual-ligand wet lab experiment with our MESA receptors. For this, different ratios of the stimulatory and inhibitory receptors were tested as input values to predict the phosphorylation output of the entire dual-ligand system, while keeping all other intracellular model parameters constant. The binding affinities for the TNF-α based homodimerization (stimulatory ligand) and rapalog based heterodimerization (inhibitory ligand) were taken from literature (Abdolalizadeh et al., 2013; Lu & Wang, 2017).
Based on these configurations, SPARC predicted the best fold change for TNF-α induced phosphorylation for the 4:1 ratio, which aligns with our expectations, as this condition contains the highest amount of stimulatory receptor (Figure 11, B). Interestingly, the 1:4 ratio also depicted a satisfactory fold change of 3.7. However, when computing the fold change for the rapalog induced dephosphorylation in the presence of TNF-α, a ratio of 1:4 showed the best signal quenching behavior with a 6.3x fold change (Figure 11, B). This hints towards the fact that a higher concentration of inhibitory receptor halves compared to stimulatory receptor halves leads to the best switch upon induction with both ligands, while still retaining a sufficiently high activation fold change.
[IMG] Description of your image
Figure 11: Comparison of model-predicted and wet lab generated data for dual-ligand MESA activation (A) Experimentally measured NanoLuc luminescence (RLU) upon ligand-induced expression normalized by Firefly luminescence (RLU) for 1:4, 1:1 anf 4:1 transfected ratios of stimulatory and inhibitory receptor halves, respectively. Luminescence was analyzed by two-way ANOVA. Adjusted p-values (ns > 0.05; * ≤ 0.05; ** ≤ 0.01; *** ≤ 0.001; **** ≤ 0.0001) and fold changes are shown for each condition. (B) Predicted data from SPARC's mathematical model showing total substrate phosphorylation levels for 1:4, 1:1 and 4:1 ratios of stimulatory (TNF-α) to inhibitory (Rapalog) receptor halves, respectively. Parameters for the inhibitory Rapalog ligand (KD1,i = 0.3nM, KD2,i = 26μM, αi = 117) and stimulatory ligand TNF-α (KD1,s = KD2,s = 15nM, αs ≈ 1) were taken from literature (Abdolalizadeh et al., 2013; Lu & Wang, 2017), whereas all other parameters were held constant to k~K = 2.5, k~P = 8.0, KLZ,s = KLZ,i = 0.0028nM, k~bg = 0.0016 and [S]T = 300nM to match experimental conditions.
To achieve the optimal switch with our PHOENICS cell, the aforementioned conditions were replicated in the wet lab, by transfecting the ratios of stimulatory and inhibitory receptors as mentioned above. As predicted by SPARC, the 1:4 ratio performed best in the dual ligand experiment, showing the most efficient switch with rapalog-mediated dephosphorylation in the presence of the stimulatory ligand TNF-α (2.0x and 1.9x fold change) (Figure 11, A). In contrast, the other conditions did not show the desired quenching behavior, which can also be seen in the trend predicted by the model. This experiment not only proves the validity of the complete, integrated mathematical model, but also shows SPARC's predictive capabilities for designing optimal PHOENICS cells in-silico.
#### Outlook
With our efforts, we successfully developed a generalized mathematical framework that captures the entire process from ligand sensing to phosphorylation output. Our model enables rapid calculation of phosphorylation levels at steady-state, providing accurate predictions of circuit behavior. Although we could not directly translate transfection concentrations into intracellular protein concentrations, wet lab validation confirmed that the model accurately predicts switching behavior. This provides valuable insights for tuning receptor and intracellular component ratios. Ultimately, this enables SPARC to serve as a tool for circuit analysis and optimization, guiding the development of PHOENICS cells tailored to specific therapeutic needs.
## Model-guided PHOENICS Cell Design
Having established robust mathematical modeling of our entire circuit within SPARC we can efficiently characterize cellular switching behavior, a core feature of the PHOENICS cell. This behavior allows the cell to transition from a dormant to an active state once a specific ratio of stimulatory to inhibitory ligands is reached. The range and the exact ligand ratio at which this transition occurs can be finetuned by modifying the model parameters. Our goal was to quantify this switching behavior in terms of speed and concentration threshold. By integrating this functionality into SPARC, we aim to streamline the filtering of suitable circuit architectures for specific use cases for more efficient, model-guided experimental testing. This would enable anyone to design a PHOENICS cell and adapt our toolkit for any desired purpose.
### Ultrasensitivity Analysis for Circuit Characterization
Switching behavior can be quantified through ultrasensitivity analysis, which assesses how sharply a system responds to input changes. A system is considered ultrasensitive if its response is more pronounced than the classical Michaelis-Menten curve, meaning switching happens within a narrower, more defined window. In synthetic circuit design, this steepness is critical, as it ensures tight control over the activation of responses. A steeper switch indicates a rapid and precise transition from inactive to active states, minimizing background activity in dormant states and ensuring swift activation once the activation threshold is crossed (Ferrell & Ha, 2014). In our case the precise switch we have built can be described by simple Goldbeter-Koshland kinetics, which we learned in the interview with Dr. Stefan Kallenberger (Goldbeter & Koshland, 1984). He especially advised us to implement this model in our ultrasensitivity analysis, which makes the calculation of characteristic values, like the Hill coefficient and EC50-value straightforward.
In the context of PHOENICS cells, high sensitivity is especially important to avoid activation in healthy tissues and ensure TME specific targeting. By filtering out circuit designs with lower sensitivity early in the development process, we can focus on those most likely to exhibit the desired switching behavior, enabling an efficient allocation of resources.
#### Hill Coefficient and EC50
The sigmoidal dose-response curve generated by varying the ligand ratio can be approximated by the Hill equation:
(51)[Sp][S]T=11+(EC50[L]T)nH
This equation is characterized by the Hill coefficient (nH) and the half-maximal effective concentration (EC50). The Hill coefficient quantifies the steepness of the switch: higher values indicate a faster, more abrupt switch, while lower values represent a more gradual response. The Hill coefficient can be calculated using EC10 and EC90 values derived from the model-generated curve:
(52)nH=log10⁡(81)log10⁡(EC90EC10)
EC50 represents the ligand ratio at which the phosphorylated substrate reaches half of its maximal value, marking the point where the system is halfway through its transition. This concentration is considered the switching point of the circuit.
For a swift determination of switching characteristics of a given circuit architecture, we utilized SPARC's integrated mathematical modeling, which spans from receptor input to phosphorylation output. Without prior knowledge of the precise location of the switch, we begin with an initial rough sampling of input signal ratios to identify the general range where the switch occurs. From this initial sampling, the borders of the switching window for every composition are inferred, ensuring that both the minimal and maximal output signals are captured within the interval. Once the region of interest has been identified, a second fine-grained sampling of ratios is performed to generate a high-resolution dose-response curve around the switching point. Since the Hill equation is designed to produce values between 0 and 1, the model-generated data requires baseline correction and scaling. This results in a curve that spans from the lower plateau at value 0 to the upper plateau at value 1. Only after this adjustment can the EC10 , EC90, and EC50 values be extracted from the ratios at which the output reaches these specific points. These values are then used to calculate the Hill coefficient. In summary, this approach assigns each circuit architecture a Hill coefficient and its corresponding EC50 value, which define its switching behavior.
#### Results: Wet Lab Validation of Circuit Switch Behavior
Since the Hill coefficient and EC50 are characteristic of each circuit architecture, we aimed to validate whether our established workflow can be aligned with experimentally observed behavior. For experimental feasibility, we first decided to characterize these circuit attributes only for the intracellular processing module of the PHOENICS circuit, for now excluding the receptors. To achieve this, the phosphorylation output was measured in vitro for a set of cytosolic, LZ-fused kinase and phosphatase ratios. We then fitted a modified Hill equation to the data points, accounting for the offset from zero (b) and scaling of the values with s:
(53)[Sp][S]T=b+s1+(EC50[L]T)nH
The fit closely matched the data points, resulting in a nearly perfect fit, with an R2 ≈ 0.98 (Figure 12). The optimal fit was obtained for a nH = 1.373. To compare these results to the model, we introduced the parameters of the circuit architecture into SPARC and generated a dose-response curve. The Hill coefficient was subsequently calculated from the curve, yielding a value of nH = 1.002. While not a perfect match, the values for both the predicted and fitted Hill coefficients fall within the low-cooperativity regime, indicating a gradual rather than an ultrasensitive transition (Figure 12). This is further supported by the minimal visible change in the estimated half-maximal effective concentration (EC50), which suggests that the dose-response range remains similar (Figure 12). The slight upward deviation in the fitted nH value could be due to experimental noise, minor cooperative effects not accounted for in the model, or simplifications in the model itself. However, these small discrepancies do not change the core conclusion: the system's dose-response curve is slow-switching. This level of agreement is sufficient for early-stage screening to identify and exclude designs with clearly undesirable characteristics and to prioritize architectures for more detailed in-vitro characterization.
[IMG] Description of your image
Figure 12: Comparison of model-predicted and experimentally measured switching characteristic from dose-response curves. The experimentally measured data points from the flow cytometry expriment (Figure 9) are fitted to the scaled Hill equation, yielding an nH = 1.373 (orange). The model-predicted dose-response curve (purple) is overlayed and the Hill coefficent (nH = 1.002) is inferred according to Equation (52).
### Database Construction for Optimizing the PHOENICS Cell
Up to this point, SPARC operated in a forward mode: given a circuit architecture and input conditions, it predicted the resulting switching response using typical circuit properties. To enable design-by-specification, we inverted this workflow so that the system proposes matching architectures for a desired switching profile. Because the mathematical model spans 18 coupled parameters, an analytical inversion is infeasible. Instead, we approached this task by creating a precomputed database of all possible circuit compositions and their respective behaviors described by their EC50 and Hill coefficient.
For this, we systematically enumerate all possible combinations of components and concentrations, run each through the mathematical model, to estimate these characteristic properties. This maps switching characteristics to circuit composition, producing a behavioral design space that can be leveraged for straight forward application of the PHOENICS toolkit. A user can specify desired switch behavior and target ligands, while SPARC determines the most suitable circuit composition by finding the nearest point in the behavior space. For this, the standardized euclidean distance between the desired and available sets of properties is minimized. The closest match represents the best available architecture from our current parts collection, providing the most fitting design to the desired switching characteristics. By returning the top-k closest matches, we generate a shortlist of candidate architectures that can be experimentally validated in cells, allowing for further refinement and testing.
Try out our PHOENICS Builder using the pre-computed database below.
#### Outlook
The current database is limited to a selection of components with measured or well-characterized parameter values, but the framework is designed to be easily extendable. The process of database generation is fully automated. Users provide a structured table with allowed parameter values, and the pipeline systematically generates all possible permutations. These combinations are then evaluated using the model, and the resulting descriptors are recorded for each configuration. To expand the database, users can simply add new components with their respective kinetic parameters, including protein binding domains for additional ligands, additional LZs for fine tuned substrate recruitment dynamics and enzymes for tailored catalytic activity. The pipeline will automatically characterize all newly generated combinations, which could uncover previously inaccessible switching behaviors. This flexibility allows for a continuous expansion of targetable tumor contexts using the PHOENICS platform, as the library of components are extended by us and others.
## PHOENICS Builder
Try out the PHOENICS Builder to find the optimal cell architecture for your desired cellular switch and activation threshold! Additionally you can choose from a set of inhibitory and stimulatory tumor ligands and small molecules that you would like your PHOENICS cell to sense. Based on your input, SPARC will search through our pre-computed database of circuit architectures and return the 100 closest matches that you can experimentally test in the wet lab. Below is a summarizing table of all available components and their respective parameters that are used in the database generation.
Stimulatory Input:
Inhibitory Input:
Sensitivity:
Activation Threshold:
Please choose parameters and press "Find!"
[IMG] Dropdown Header
Parameters of Synthetic Part Collection
Table 7: Component parameter space of PHOENICS part collection. Listed are the variants of synKinase, synPhosphatase, LZ and BindCraft-generated binders incorporated in our behaviour space and the PHOENICS builder with all relavant kinetic and thermodynamic parameters.
| Component
| Parameter
| Value
| Strong synKinase
| k~K
| 2.9
| Medium synKinase
| k~K
| 0.41
| Weak synKinase
| k~K
| 0.087
| Strong synPhosphatase
| k~P
| 8.0
| Weak synPhosphatase
| k~P
| 0.49
| Strong LZ
| KLZ
| 0.0028
| Medium LZ
| KLZ
| 0.16
| Weak LZ
| KLZ
| 0.65
| GDF15 Binder 1
| KD1,s=KD2,s
| 11.4 nM
| GDF15 Binder 2
| KD1,s=KD2,s
| 222.7 nM
| GDF15 Binder 10
| KD1,s=KD2,s
| 990.2 nM
| OGN Binder 1
| KD1,i=KD2,i
| 113.1 nM
| OGN Binder 3
| KD1,i=KD2,i
| 524.8 nM
| OGN Binder 10
| KD1,i=KD2,i
| 2872 nM
| LY6K Binder 3
| KD1,s=KD2,s
| 0.857 nM
| LY6K Binder 4
| KD1,s=KD2,s
| 29.7 nM
| LY6K Binder 5
| KD1,s=KD2,s
| 455 nM
| TNF-alpha
| KD1,s=KD2,s
| 15 nM
| Rapalog
| KD1,i/KD2,i
| 0.3 nM / 26 μM
## Outlook
### Limitations and The Road Ahead
While our work on SPARC has laid a solid foundation for designing and optimizing personalized cancer therapies with PHOENICS, there are still some minor limitations that we will address as we move forward.
The binder generation process is currently limited to generating binders for single epitopes, which restricts us to homomultimeric ligands. However, Dr. Martin Pacesa, the main publisher of BindCraft, has emphasized the possibility to extend this method to heterodimers with a few minor tweaks, such as hotspot definition and further target structure trimming. This improvement would significantly expand the scope of binders we can generate and test, thus enhancing the versatility of SPARC's binder design capabilities.
Another limitation lies in our use of all-atom molecular dynamics simulations. While MD simulations provide valuable insights into binder-target interactions, the quantitative determination of KD values remains a significant challenge in the field, due to inconsistencies in the umbrella sampling method (Roux, 1995). Despite this, we were successful in developing an internal ranking system using MD simulations that has proven to be more reliable than BindCraft's i_pTM metric. Moreover, machine learning-based estimators for KD calculation have shown great potential (Piao et al., 2025). These methods could be incorporated into SPARC's pipeline to enhance binder ranking, reduce computational costs, and improve the efficiency of binder screening.
The mathematical framework we have developed for SPARC is based on the assumption that the system operates at steady-state, which simplifies the complexity of dynamic activation and system behavior. While this assumption holds true in many conditions, it does not capture the full temporal dynamics of the system, such as the speed and activation timeline. To address this, we plan to extend the mathematical framework to incorporate dynamic behaviors. Time-resolved wet lab experiments are already underway to provide the necessary data for building more detailed dynamic models. This addition will further refine SPARC's ability to predict effector output over time.
In addition, the current model does not account for background receptor dimerization rates, which have been observed in wet lab experiments. However, the promising results we see from coarse-grained Martini simulations offer a potential solution. These simulations are already providing reliable, wet lab-validated results, and by combining them with techniques like umbrella sampling, we can estimate background dimerization kinetic rates and binding affinities in the membrane. This approach will not only improve the model's accuracy but also provide deeper insights into the interplay of the PHOENICS components. Simulations spanning across longer time intervals could also be used to capture a broader range of dynamic interactions within the membrane, which would further enhance the system's predictive capabilities.
Another challenge has been the integration of our synthetic GPCR sensing architecture into the existing SPARC framework. Currently, the mathematical model is based solely on our MESA-receptor designs. However, we have already taken the first steps to incorporate the GPRC-based PAGER system into SPARC by adapting BindCraft to generate binders compatible with their architecture. The next steps involve further MD-based filtering and wet lab validation of these arodyn-fused binders. Additionally, the extensive literature describing various mathematical modeling approaches for native GPCR reactions provides a solid foundation for adapting SPARC for the PAGER platform, providing further flexibility and scalability of our model (Carvalho et al., 2021; Culhane et al., 2022).
### Our Vision
Despite some limitations, SPARC enables the design and optimization of PHOENICS cells for personalized synthetic immune cell therapies. We envision this process as follows: By utilizing patient tumor biopsy data and subsequent TME profiling, researchers could use SPARC's binder generation and characterization workflow to rapidly design protein binders for biomarkers that are differentially expressed in the TME compared to healthy tissue. SPARC could then generate an optimized PHOENICS cell candidate in silico with the most suitable circuit architecture, fine-tuned to patient-specific biomarker concentrations by leveraging the ultrasensitivity database and our synthetic part collection. In an ideal scenario, once target biomarkers are identified, this patient-specific circuit design process could be completed within days, significantly accelerating personalized cancer therapy development. Beyond patient-specific designs, SPARC can also be leveraged to create off-the-shelf PHOENICS cells precisely engineered for common tumor types. This would drastically reduce cell therapy costs and significantly improve accessibility of effective cancer treatment.
Looking ahead, SPARC's modular architecture facilitates continuous optimization and extension of individual components over time. By addressing current limitations and implementing our proposed improvements, SPARC can evolve into an increasingly powerful tool for therapeutic cell engineering. This progress will be accelerated through continued collaboration with the iGEM and broader scientific communities, building upon the robust foundation we have established.
[IMG] Dropdown Header
References
- Abdolalizadeh, J., Nouri, M., Zolbanin, J. M., Barzegari, A., Baradaran, B., Barar, J., Coukos, G., & Omidi, Y. (2013). Targeting Cytokines: Production and Characterization of Anti-TNF-α scFvs by Phage Display Technology. Current Pharmaceutical Design, 19(15), 2839–2847. https://doi.org/10.2174/1381612811319150019
- Abramson, J., Adler, J., Dunger, J., Evans, R., Green, T., Pritzel, A., Ronneberger, O., Willmore, L., Ballard, A. J., Bambrick, J., Bodenstein, S. W., Evans, D. A., Hung, C.-C., O'Neill, M., Reiman, D., Tunyasuvunakool, K., Wu, Z., Žemgulytė, A., Arvaniti, E., … Jumper, J. M. (2024). Accurate structure prediction of biomolecular interactions with AlphaFold 3. Nature, 630(8016), 493–500. https://doi.org/10.1038/s41586-024-07487-w
- Aho, N., Groenhof, G., & Buslaev, P. (2024). Do All Paths Lead to Rome? How Reliable is Umbrella Sampling Along a Single Path? Journal of Chemical Theory and Computation, 20(15), 6674–6686. https://doi.org/10.1021/acs.jctc.4c00134
- Bennett, N. R., Coventry, B., Goreshnik, I., Huang, B., Allen, A., Vafeados, D., Peng, Y. P., Dauparas, J., Baek, M., Stewart, L., DiMaio, F., De Munck, S., Savvides, S. N., & Baker, D. (2023). Improving de novo protein binder design with deep learning. Nature Communications, 14(1), 2625. https://doi.org/10.1038/s41467-023-38328-5
- Borges-Araújo, L., Patmanidis, I., Singh, A. P., Santos, L. H. S., Sieradzan, A. K., Vanni, S., Czaplewski, C., Pantano, S., Shinoda, W., Monticelli, L., Liwo, A., Marrink, S. J., & Souza, P. C. T. (2023). Pragmatic Coarse-Graining of Proteins: Models and Applications. Journal of Chemical Theory and Computation, 19(20), 7112–7135. https://doi.org/10.1021/acs.jctc.3c00733
- Carvalho, S., Pearce, A., & Ladds, G. (2021). Novel mathematical and computational models of G protein–coupled receptor signalling. Current Opinion in Endocrine and Metabolic Research, 16, 28–36. https://doi.org/10.1016/j.coemr.2020.07.002
- Culhane, K. J., Gupte, T. M., Madhugiri, I., Gadgil, C. J., & Sivaramakrishnan, S. (2022). Kinetic model of GPCR-G protein interactions reveals allokairic modulation of signaling. Nature Communications, 13(1), 1202. https://doi.org/10.1038/s41467-022-28789-5
- Deng, Y., & Roux, B. (2009). Computations of Standard Binding Free Energies with Molecular Dynamics Simulations. The Journal of Physical Chemistry. B, 113(8), 10.1021/jp807701h. https://doi.org/10.1021/jp807701h
- Easley, A. D., Ma, T., Eneh, C. I., Yun, J., Thakur, R. M., & Lutkenhaus, J. L. (2022). A practical guide to quartz crystal microbalance with dissipation monitoring of thin polymer films. Journal of Polymer Science, 60(7), 1090–1107. https://doi.org/10.1002/pol.20210324
- Ferrell, J. E. (2002). Self-perpetuating states in signal transduction: Positive feedback, double-negative feedback and bistability. Current Opinion in Cell Biology, 14(2), 140–148. https://doi.org/10.1016/S0955-0674(02)00314-9
- Ferrell, J. E., & Ha, S. H. (2014). Ultrasensitivity Part I: Michaelian responses and zero-order ultrasensitivity. Trends in Biochemical Sciences, 39(10), 496–503. https://doi.org/10.1016/j.tibs.2014.08.003
- Goldbeter, A., & Koshland, D. E. (1984). Ultrasensitivity in biochemical systems controlled by covalent modification. Interplay between zero-order and multistep effects. Journal of Biological Chemistry, 259(23), 14441–14447. https://doi.org/10.1016/S0021-9258(17)42619-6
- Govind Kumar, V., Polasa, A., Agrawal, S., Kumar, T. K. S., & Moradi, M. (2023). Binding affinity estimation from restrained umbrella sampling simulations. Nature Computational Science, 3(1), 59–70. https://doi.org/10.1038/s43588-022-00389-9
- Han, B. (2020). A suite of mathematical solutions to describe ternary complex formation and their application to targeted protein degradation by heterobifunctional ligands. The Journal of Biological Chemistry, 295(45), 15280–15291. https://doi.org/10.1074/jbc.RA120.014715
- Kalogriopoulos, N. A., Tei, R., Yan, Y., Klein, P. M., Ravalin, M., Cai, B., Soltesz, I., Li, Y., & Ting, A. Y. (2025). Synthetic GPCRs for programmable sensing and control of cell behaviour. Nature, 637(8044), 230–239. https://doi.org/10.1038/s41586-024-08282-3
- Kartal, Ö., Andres, F., Lai, M. P., Nehme, R., & Cottier, K. (2021). waveRAPID—A Robust Assay for High-Throughput Kinetic Screens with the Creoptix WAVEsystem. SLAS Discovery, 26(8), 995–1003. https://doi.org/10.1177/24725552211013827
- Kendall, M. G. (1938). A NEW MEASURE OF RANK CORRELATION. Biometrika, 30(1–2), 81–93. https://doi.org/10.1093/biomet/30.1-2.81
- Kroon, P. C., Grunewald, F., Barnoud, J., Tilburg, M. van, Souza, P. C. T., Wassenaar, T. A., & Marrink, S. J. (2023). Martinize2 and Vermouth: Unified Framework for Topology Generation. eLife, 12. https://doi.org/10.7554/eLife.90627.1
- Kumar, S., Rosenberg, J. M., Bouzida, D., Swendsen, R. H., & Kollman, P. A. (1992). THE weighted histogram analysis method for free-energy calculations on biomolecules. I. The method. Journal of Computational Chemistry, 13(8), 1011–1021. https://doi.org/10.1002/jcc.540130812
- Levintov, L., Gorai, B., & Vashisth, H. (2024). Spontaneous Dimerization and Distinct Packing Modes of Transmembrane Domains in Receptor Tyrosine Kinases. bioRxiv, 2024.05.09.593448. https://doi.org/10.1101/2024.05.09.593448
- Liao, Q. (2020). Chapter Four—Enhanced sampling and free energy calculations for protein simulations. In B. Strodel & B. Barz (Eds.), Progress in Molecular Biology and Translational Science (Vol. 170, pp. 177–213). Academic Press. https://doi.org/10.1016/bs.pmbts.2020.01.006
- Lindorff-Larsen, K., Piana, S., Palmo, K., Maragakis, P., Klepeis, J. L., Dror, R. O., & Shaw, D. E. (2010). Improved side-chain torsion potentials for the Amber ff99SB protein force field. Proteins, 78(8), 1950–1958. https://doi.org/10.1002/prot.22711
- Lu, C., & Wang, Z.-X. (2017). Quantitative Analysis of Ligand Induced Heterodimerization of Two Distinct Receptors. Analytical Chemistry, 89(13), 6926–6930. https://doi.org/10.1021/acs.analchem.7b01274
- Luo, L., McGarvey, P., Madhavan, S., Kumar, R., Gusev, Y., & Upadhyay, G. (2016). Distinct lymphocyte antigens 6 (Ly6) family members Ly6D, Ly6E, Ly6K and Ly6H drive tumorigenesis and clinical outcome. Oncotarget, 7(10), 11165–11193. https://doi.org/10.18632/oncotarget.7163
- Mathematical biology. Vol. 1: An introduction. 3rd ed. (n.d.). ResearchGate. Retrieved October 3, 2025, from https://www.researchgate.net/publication/265399582_Mathematical_biology_Vol_1_An_introduction_3rd_ed
- Mukherjee, A., & Sasikala, W. D. (2013). Chapter One - Drug–DNA Intercalation: From Discovery to the Molecular Mechanism. In T. Karabencheva-Christova (Ed.), Advances in Protein Chemistry and Structural Biology (Vol. 92, pp. 1–62). Academic Press. https://doi.org/10.1016/B978-0-12-411636-8.00001-8
- Ozturk, T. N., König, M., Carpenter, T. S., Pedersen, K. B., Wassenaar, T. A., Ingólfsson, H. I., & Marrink, S. J. (2024). Chapter Seven—Building complex membranes with Martini 3. In M. Deserno & T. Baumgart (Eds.), Methods in Enzymology (Vol. 701, pp. 237–285). Academic Press. https://doi.org/10.1016/bs.mie.2024.03.010
- Pacesa, M., Nickel, L., Schellhaas, C., Schmidt, J., Pyatova, E., Kissling, L., Barendse, P., Choudhury, J., Kapoor, S., Alcaraz-Serna, A., Cho, Y., Ghamary, K. H., Vinué, L., Yachnin, B. J., Wollacott, A. M., Buckley, S., Westphal, A. H., Lindhoud, S., Georgeon, S., … Correia, B. E. (2025). One-shot design of functional protein binders with BindCraft. Nature, 1–10. https://doi.org/10.1038/s41586-025-09429-6
- Patel, J. S., & Ytreberg, F. M. (2018). Fast Calculation of Protein–Protein Binding Free Energies Using Umbrella Sampling with a Coarse-Grained Model. Journal of Chemical Theory and Computation, 14(2), 991–997. https://doi.org/10.1021/acs.jctc.7b00660
- Piao, H., Boorla, V. S., Santra, S., & Maranas, C. D. (2025). BindPred: A Framework for Predicting Protein-Protein Binding Affinity from Language Model Embeddings (p. 2025.09.27.678407). bioRxiv. https://doi.org/10.1101/2025.09.27.678407
- Porter, C. M., & Miller, B. G. (2012). Cooperativity in monomeric enzymes with single ligand-binding sites. Bioorganic Chemistry, 43, 44–50. https://doi.org/10.1016/j.bioorg.2011.11.001
- Robinson, J. L., Feizi, A., Uhlén, M., & Nielsen, J. (2019). A Systematic Investigation of the Malignant Functions and Diagnostic Potential of the Cancer Secretome. Cell Reports, 26(10), 2622-2635.e5. https://doi.org/10.1016/j.celrep.2019.02.025
- Ross, G. M. S., Filippini, D., Nielen, M. W. F., & Salentijn, G. IJ. (2020). Unraveling the Hook Effect: A Comprehensive Study of High Antigen Concentration Effects in Sandwich Lateral Flow Immunoassays. Analytical Chemistry, 92(23), 15587–15595. https://doi.org/10.1021/acs.analchem.0c03740
- Roux, B. (1995). The calculation of the potential of mean force using computer simulations. Computer Physics Communications, 91(1), 275–282. https://doi.org/10.1016/0010-4655(95)00053-I
- Schrödinger, LLC. (2015). The PyMOL Molecular Graphics System, Version 1.8.
- Souza, P. C. T., Alessandri, R., Barnoud, J., Thallmair, S., Faustino, I., Grünewald, F., Patmanidis, I., Abdizadeh, H., Bruininks, B. M. H., Wassenaar, T. A., Kroon, P. C., Melcr, J., Nieto, V., Corradi, V., Khan, H. M., Domański, J., Javanainen, M., Martinez-Seara, H., Reuter, N., … Marrink, S. J. (2021). Martini 3: A general purpose force field for coarse-grained molecular dynamics. Nature Methods, 18(4), 382–388. https://doi.org/10.1038/s41592-021-01098-3
- Vangone, A., & Bonvin, A. M. J. J. (2017). PRODIGY: A Contact-based Predictor of Binding Affinity in Protein-protein Complexes. Bio-Protocol, 7(3), e2124. https://doi.org/10.21769/BioProtoc.2124
- Wang, X.-D., Ma, B.-Y., Lai, S.-Y., Cai, X.-J., Cong, Y.-G., Xu, J.-F., & Zhang, P.-F. (2025). High-throughput strategies for monoclonal antibody screening: Advances and challenges. Journal of Biological Engineering, 19(1), 41. https://doi.org/10.1186/s13036-025-00513-z
- Wang, Y., Barnett, S. F. H., Le, S., Guo, Z., Zhong, X., Kanchanawong, P., & Yan, J. (2019). Label-free Single-Molecule Quantification of Rapamycin-induced FKBP–FRB Dimerization for Direct Control of Cellular Mechanotransduction. Nano Letters, 19(10), 7514–7525. https://doi.org/10.1021/acs.nanolett.9b03364
- Wassenaar, T. A., Ingólfsson, H. I., Böckmann, R. A., Tieleman, D. P., & Marrink, S. J. (2015). Computational Lipidomics with insane: A Versatile Tool for Generating Custom Membranes for Molecular Simulations. Journal of Chemical Theory and Computation, 11(5), 2144–2155. https://doi.org/10.1021/acs.jctc.5b00209
- Watson, J. L., Juergens, D., Bennett, N. R., Trippe, B. L., Yim, J., Eisenach, H. E., Ahern, W., Borst, A. J., Ragotte, R. J., Milles, L. F., Wicky, B. I. M., Hanikel, N., Pellock, S. J., Courbet, A., Sheffler, W., Wang, J., Venkatesh, P., Sappington, I., Torres, S. V., … Baker, D. (2023). De novo design of protein structure and function with RFdiffusion. Nature, 620(7976), 1089–1100. https://doi.org/10.1038/s41586-023-06415-8
- Webb, B., & Sali, A. (2016). Comparative Protein Structure Modeling Using MODELLER. Current Protocols in Bioinformatics / Editoral Board, Andreas D. Baxevanis ... [et Al.], 54, 5.6.1-5.6.37. https://doi.org/10.1002/cpbi.3
- Yang, X., Rocks, J. W., Jiang, K., Walters, A. J., Rai, K., Liu, J., Nguyen, J., Olson, S. D., Mehta, P., Collins, J. J., Daringer, N. M., & Bashor, C. J. (2025). Engineering synthetic phosphorylation signaling networks in human cells. Science, 387(6729), 74–81. https://doi.org/10.1126/science.adm8485
- Zhou J, Ge Q, Wang D, Guo Q, Tao Y. Engineering a modular double-transmembrane synthetic receptor system for customizing cellular programs. Cell Rep. 2023 Apr 25;42(4):112385. doi: 10.1016/j.celrep.2023.112385. Epub 2023 Apr 11. PMID: 37043348.
- Zhu, X., Olson, B., Keith, D., Norgard, M. A., Levasseur, P. R., Diba, P., Protzek, S., Li, J., Li, X., Korzun, T., Sattler, A. L., Buenafe, A. C., GrosSsberg, A. J., & Marks, D. L. (2024). GDF15 and LCN2 for early detection and prognosis of pancreatic cancer. Translational Oncology, 50, 102129. https://doi.org/10.1016/j.tranon.2024.102129
