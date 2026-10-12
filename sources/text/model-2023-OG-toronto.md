[IMG] Methanivore Logo
[IMG] Methanivore
Flux Balance Analysis for Metabolic Engineering of Methylotrophic E. coli
None None
1. Purpose
Escherichia coli can be genetically modified to uptake methane from landfill sites, mitigating the pollutive impact of methane production. The Dry Lab division aims to provide genetic addition, knock-out, and over-expression targets for improved methane uptake. We made use of well-established modelling and simulation tools such as Flux Balance Analysis as well novel implementations of scanning algorithms to produce results. The key targets reported are frdABCD (knockout), MEOHDH, MEOHtrpp, MEOHtex(overexpression), FDH (addition). These results were validated through literature. Experimental validation will follow. The two main new software implementations by the team are a modified implementation of the existing Flux Scanning Based on Enforced Objective Flux (FSEOF) algorithm and Knock-Out Candidate Scanning algorithm.
None None
2. Background: Metabolic Modelling and Analysis
Flux-balance analysis (FBA) is a method that seeks to mathematically model and simulate the metabolism of organisms. A comprehensive tutorial can be found in [1] . For completeness, we briefly recount FBA in the following.
At its core, FBA solves a linear programming (LP) problem with stoichiometric constraints and an objective corresponding to cellular growth. The first step in FBA is to construct a genome-scale metabolic model (GSMM) for the organism. A GSMM comprises (1) a set of M metabolites in the organism, (2) a list of N reactions between the metabolites, and (3) a set of gene-protein rules that relate the organism's genes to the reactions. The gene-protein rules are often encoded as Boolean expressions that specify how the functionality of a reaction depends on a set of related genes. Next, FBA makes an important steady-state assumption: that the concentration of all metabolites is constant over time. This stoichiometrically couples the fluxes of the GSMM, which is a key to the efficiency of FBA. Formally, let vi be the flux through the i-th reaction, commonly given in units of mmol / (gDw.h). Given a metabolite x with concentration [x], for suitable stoichiometric coefficients si:
∑i=1nsivi=d[x]dt=0,
Where the last equality follows from the steady-state assumption. Written differently, Sv=0, where v∈RN is the vector of reaction fluxes and S is an M×N stoichiometric matrix derived from the metabolic reaction network of the GSMM. We may also want to bound the fluxes within some interval, a≤v≤b, with the inequalities applied element-wise.
Finally, we provide FBA with an objective function f(v) that is linear in the elements of v. FBA then solves for the flux distributions that optimize the objective:
maxv∈Rnf(v),subject to: Sv=0 and a≤v≤b
This is an LP problem, which is well-studied and can be solved efficiently. Commonly, f is a "biomass" function that is tuned such that its optimal value under FBA matches the growth rate of the organism.
None None
3. Methodology
With the aforementioned tools, we modeled metabolic pathways of {E. coli} and its media culture {in silico} using well-established algorithms, as well as novel implementations (see Section ???) primarily relying on flux balance and steady-state assumption. Thus, we predicted optimal genetic modifications to enable improved methane uptake.
None
### 3.1. Motivation
The primary motivation for Dy Lab modeling was to guide Wet Lab experiments by providing relevant knock-out, over-expression, and addition targets. In order to achieve this, we aimed to simulate the bacteria and its media as accurately as possible, enabling well-informed predictions. Additionally, all Dry Lab work followed the iterative engineering cycle. Results were continuously brought to and discussed with the experiment design team. Given the mathematical and simplified nature of metabolic modelling, it was crucial to analyze the validity of all results from a biological perspective, assessing the biological explanation behind the results. This led to a feedback cycle, generating multiple iterations of all algorithms and results.
Additionally, the implementation of many algorithms was primarily optimized for producing helpful and productive results for experimental teams. For example, the knockout algorithm (Section ???) prioritizes increased granularity in results in order to clearly distinguish between the top identified knockout targets. This was motivated by the fact that due to time limitations, the experimental team could only test one knockout prediction, and higher certainty and distinction between targets was greatly valuable.
None
### 3.2. Constructing the GSMM of T-B18
The bacterial strain used as a base chassis for metabolic engineering is T-B18, a genetically engineered strain of E. coli capable of assimilating methanol via the ribulose monophosphate pathway (RuMP cycle) [2] . This strain was further optimized through genetic modifications in order to improve methanol uptake. In vitro engineering of T-B18 was performed by Wet Lab via CRISPR knockouts, knock-ins, Adaptive Laboratory Evolution (ALE), and other genetic engineering techniques (link to Wet Lab page).
The Python package COBRApy (Constraint-Based Reconstruction and Analysis) was chosen as a freely available and community-supported software package for the analysis of metabolic systems at a large scale. The package supports commonly used analysis methods, including flux balance analysis (FBA), flux variability analysis (FVA), gene deletion, and model reconstruction, all of which are implemented using object-oriented interfaces. The centralized repository for high-quality genome-scale metabolic models BiGG was used to obtain GSMMs of COBRApy-compatible format.
Given its novelty, there are currently no publicly available GSMMs of T-B18. Hence, we obtain the GSMM of T-B18 strain via the following steps:
- 1. Obtain existing GSMM iML1515 of strain MG1655 from BiGG Models
- 2. Knock out araABD, rhaABD, lacZ to obtain the GSMM of strain BW25113 [3]
- 3. Knock out frmA (encoding formaldehyde dehydrogenase), and add in puD9 plasmid containing the exogenous, methanol assimilation genes mdh (methanol dehydrogenase), phi (6-phospho-3-hexulose isomerase), hps (3-hexulose-6-phosphate synthase) to obtain the GSMM of T-B18 strain.
[IMG] Figure 1a. Metabolic pathway of strain E. coli BW25113
Figure 1a. Metabolic pathway of strain E. coli BW25113
[IMG] Figure 1b. Metabolic pathway of strain E. coli T-B18
Figure 1b. Metabolic pathway of strain E. coli T-B18
[CAPTION] Escher-FBA generated visualization of E. coli upstream metabolic pathway of BW25113 (Fig. 1a) and T-B18 strain (Fig. 1b). Note the addition of upstream methanol consumption genes which results in new pathways (upper left corner, highlighted in red).
None
### 3.3. Gene-Protein-Reaction associations
[IMG]
Our genome-scale metabolic model (GSMM) of the engineered T-B18 strain is modified from the iML1515 genome scale reconstruction of the metabolic network in E. coli K-12 MG1655 [4] . In particular, every gene in iML1515 is associated with a protein product, catalyzing domain, and enzymatic transformation. Such reconstructed gene-protein-reaction association is extracted from external databases, in particular the NCBI Protein Data Bank and homology models.
Thus, A GPR provides an explicit, formal connection between genotype and phenotype in a genome-scale reconstruction; it links the gene (G) to the protein (P) that catalyzes a reaction (R) in the network. The Gene-Protein-Reaction rules are read from BiGG model and embedded in COBRApy reconstructed mdoel using the Abstract Syntax Tree (AST) as a base class. In particular, how a set of genes regulate a given reaction is represented using Boolean binary operators ∧ and ∨.
For example, the encoding of enzyme cytochrome oxidase bio3 is regulated by all of the four genes: cyoA, cyoB, cyoD, cyoC. This is represented as below:
Cytochrome oxidase bo3 (ubiquinol-8: 4 protons) (periplasm):cyoA∧cyoB∧cyoD∧cyoC
However, the direction of the association is an important piece of information that is not embedded within the BiGG model; that is, whether a gene induces or inhibits a reaction that catalyze specific enzymes. As in the above example, it is unclear if any, some of all of the four genes listed is responsible for inducing or inhibiting the transcription of cytochrome oxidase. Therefore, it is important that wet-lab insight is consulted regarding analysis of over-expression candidates within a transcriptional genomics context before any laboratory experimentation is conducted based on these results.
None
### 3.4. Media Analysis
One of the greatest challenges of conducting meaningful simulations using GSMMs is modeling the growth media of the bacteria. Since the metabolic model is centered in the bacteria's metabolome, the growth media is defined as the set of pseudo reactions that represent the transport of molecules from outside to the inside of the cell. These reactions are called exchange reactions. However, the language in which these GSMMs talk and listen about metabolites and chemicals is "fluxes". That is, resources in the growth media are represented, not in concentrations (e.g., millimoles), but in mMolgDW⋅h. This contrasts with how academic papers and the scientific community describe growth media compositions: in concentrations.
Thus, exploring the relationship between exchange reactions and the behavior of the rest of the metabolic network is to both: translate between fluxes and concentrations, and optimize of exchange fluxes to maximize growth while potentially minimizing resource consumption.
The most immediately relevant translation task was fitting the fluxes of the relevant exchange reactions to available experimental data. Specifically, we first aimed to make the growth rate predicted by our model match the experimentally measured one. However, due to time and logistic constraints, rather than performing our own experimental trials to determine growth rate, we decided to use existing data. We contacted directly the authors of the paper that had designed the E. coli strain, T-B18, that we later used as the base chassis for further genetic engineering. The authors Maciek Antoniewicz and Jie Ren Gerald Har kindly shared with us the Optical Density at 600nm (OD600) vs. time data of T-B18 bacteria as they grew under known conditions (M9 minimal media, supplemented with 5mM Threonine and 250 mM Methanol). From this, we calculated the exponential growth rate by plotting the natural logarithm of OD600 against time and obtaining the slope of the steepest "growth phase". We defined a "growth phase" as a set of (OD600, time) points such that the slope between any two neighboring points varies less than 20% from the slope of the linear regression of all points in the growth phase (see Figure 3). The calculated average growth rate was 0.4358 ± 0.0162 h-1.
[IMG] Figure 1a. Metabolic pathway of strain E. coli BW25113
Figure 1a. Metabolic pathway of strain E. coli BW25113
[IMG] Figure 1b. Metabolic pathway of strain E. coli T-B18
Figure 1b. Metabolic pathway of strain E. coli T-B18
Calculation of experimentally measured growth rate:
(a) OD600 vs. Time graph
(b) ln⁡(OD600) vs. Time graph
of T-B18 growing on M9 minimal media with 250 mM of methanol and 5mM of threonine. Three repetitions were made (labeled Rep 1, Rep 2, and Rep 3).
Now, to adjust the fluxes through relevant exchange reactions so that our model produced a very similar growth rate we used three different methods:
- Scanning through enforced growth rates.
- Scanning through enforced exchange reaction combinations using Phenotypic Phase Plane Analysis.
- Calculating concentrations using a translation formula.
For scanning through enforced growth rates, we added a constraint to FBA so that the bacteria model was "forced" to have a specified growth rate. Then we repeatedly performed FBA with different enforced growth rates and recorded how the fluxes through every exchange reaction changed accordingly. Furthermore, we constrained the maximum flux through Threonine exchange to be a 5250th of the maximum flux through methanol exchange, so that the ratio between concentrations was approximately conserved in the ratio between fluxes. Overall, we scanned through 10 different growth rates ranging from 80% to 120% of the experimentally measured one. However, those results had two main problems: firstly, the ratio between fluxes was not very close to the ratio between concentrations, and - assuming flux at steady state is proportional to initial concentration - this is a misrepresentation of experimental conditions. Secondly, the produced flux through the methanol exchange reaction was in all cases higher than what is generally accepted to be biologically realistic fluxes for these types of cases.
Thus, we tried a more systems biology-appropriate approach: Phenotypic Phase Plane (PhPP) analysis. FBA can be used to generate a Pheotype Phase Plane (also known as production envelope), which provides a much more systematic and comprehensive picture of how the flux of two exchange reactions impact biomass. It is built by varying the flux through two reactions through specified ranges and performing FBA for each combination of fluxes, to optimize for biomass production. In our case, we used it to evaluate the impact of threonine and methanol fluxes, which are by far the most significant carbon sources in the media. A graphic representation is shown in Figure 4.
[IMG] Figure 1a. Metabolic pathway of strain E. coli BW25113
Figure 1a. Metabolic pathway of strain E. coli BW25113
[IMG] Figure 1b. Metabolic pathway of strain E. coli T-B18
Figure 1b. Metabolic pathway of strain E. coli T-B18
[CAPTION] Phenotype Phase Plane of varying threonine and methanol fluxes.
As can be seen, there is more than one combination of exchange fluxes that will make our model produce the same, or nearly the same, growth rate. This is not entirely unexpected, as it is the nature of linear optimization problems that sometimes more than a single combination of parameters will produce the optimal value. Therefore, we then further processed and filtered the PhPP information to narrow the possible threonine and methanol fluxes that our bacteria might really "choose" in experimental conditions.
It is important to note that PhPP provides much more information than just relations between growth rates and fluxes. For instance, it also provides insights such as carbon yield: the ratio between output moles of carbon atoms of the product (in this case biomass) and input moles of carbon coming from source compounds (in this case threonine and methanol). A higher carbon yield could hence be though of as a more efficient allocation of resources. This is useful because in an evolutionary setting such as ALE there is selective pressure in favour of more efficient consumption of media resources. Thus, it is a valid assumption that exchange flux combinations that result in a higher carbon yield will be preferred by T-B18, since it already went through ALE.
Additionally, we calculated the methanol-to-threonine exchange flux ratio for each possible flux combination evaluated in the PhPP. So, the two criteria followed to filter out combinations of threonine and methanol fluxes that resulted in the same observed growth rate were:
- How close the methanol exchange flux to threonine exchange flux ratio is to the methanol initial concentration to threonine initial concentration ratio.
- How high the carbon yield is, with respect to other candidate combinations.
These criteria led to more reasonable fluxes to model growth media (see "Results" section).
Lastly, another method of flux estimation was the formula: φexchange=[φexchange]steady-statetsteady-state⋅[Cell]⋅mcell
Where φexchange is the exchange flux in mmol/gDW⋅h, [φexchange]steady-state is the metabolite concentration in the growth media at the beginning of the steady state in mM, tsteady-state is the time taken for bacteria to reach steady state in h, [Cell] is the cell concentration in cells/L, and mcell is the mass of each cell in gDW/cell.
The parameters were taken from a combination of experimental data and values reported in the scientific literature. The only value that could not be obtained from either of those categories was [φexchange]steady-state. So, the formula was used for 100 different values of [φexchange]steady-state, ranging from 0 to 99% of initial methanol consumption. This produced unreasonably high fluxes for the vast majority of values, so the results were not investigated further. The only fluxes that fell within biologically viable ranges were the ones in which it was assumed that 98% or more of the initial methanol had been consumed by the start of the steady state.
[IMG] Figure 4: Calculated exchange flux of methanol as a function of percentage of consumed methanol
Figure 4: Calculated exchange flux of methanol as a function of percentage of consumed methanol
Hence, the most reasonable results are the ones from the PhPP approach, so that methodology was chosen to determine the exchange fluxes that best modelled the growth media. This was used to make the genetic modification algorithms run on the closest model to experimental conditions.
None
### 3.5. Flux scanning based on enforced objective flux (FSEOF) and FSEOF-like algorithms
#### 3.5.1. Classical FSEOF
Flux Scanning Based on Enforced Objective Flux (FSEOF) is an algorithm developed to predict gene amplification targets, in particular over-expression [Choi2010In]. Here, initial metabolic fluxes (vjinitial) are calculated using FBA. Biomass flux (vbiomass) is maximized while subjected to an enforced secondary constraint as follows:
vproductenforced=vproductinitial+kn(vproductmax−vproductinitial)
Where K={k|k=1,2,…,n−1} and n≥10. k essentially corresponds to the number of steps of the increase, and n corresponds to the nth fraction of the difference taken between vproductmax and vproductinitial.
This constraint is typically the reaction being maximized or minimized in addition to biomass production. As the reaction is enforced, the fluxes of various metabolites are scanned for. Internal fluxes that increase with increased product formation flux are selected as amplification targets. Though this is a well-established algorithm, the original publication lacks source code for the algorithm. The only two implementations of the algorithm found by our team are the Cameo FSEOF algorithm and an open-source development by a former iGEM team. Initial results were generated using these algorithms and are available in Section Gene Overexpression. Cameo's implementation of FSEOF is refered to as "Cameo FSEOF." The team's implementation of the version of FSEOF detailed in this paper is referenced as "Classical, Team Implementation." The two changes made by the team to the algorithm are referred to as "Special Case (Team Implementation)" and "Q-Slope (Team Implementation)."
#### 3.5.2. FSEOF Modification
Given the existing implementation of FSEOF, there are rooms for improvement, both in inaccurate mathematical interpretation of the original research paper, as well as the flexibility to tailor the algorithm to our specific needs.
The FSEOF algorithm is based on an important presupposition about the enforced objective: the enforced reaction is assumed to compete with the objective (biomass) reaction.
Given the equation to calculate different enforced objectives:
Maximize vbiomass
Subject to for n,k ∈ N such that ∀k<n we have vproductenforced=vproductinitial+kn(vproductmax−vproductinitial)
∀i∈M,j∈N⟹∑j=1|N|Sijvj=0
We have the following:
If vproductmax=vproductinitial, then the constraint becomes vproductenforced=vproductinitial because the other terms become zero. Thus, the "enforced" flux becomes completely meaningless since we are simply enforcing it to be equal to itself. Furthermore, if we tried to enforce, not up to the maximal possible flux through the objective reaction, but rather up to a realistic upper bound (approximately 90\% according to [5] , the algorithm fails:
If we are constraining vproductenforced=vproductinitial+kn(vproductmax⋅0.9−vproductinitial) and vproductmax=vproductinitial, then kn(vproductmax⋅0.9−vproductinitial)<0.
Therefore, the algorithm would inadvertently enforce a decreasing flux instead of an increasing one. The predicted targets for over-expression would thus not only be biologically irrelevant, but also misleading.
If the maximum flux through the enforced reaction is the same as the initial flux, the enforced reaction would not be competing against, but rather complementing growth. In other words, the enforced reaction is synergistic with biomass. This makes sense especially in our case, since the reaction we are enforcing is a consumption reaction. Specifically, consumption of a carbon source that gets used in E. coli's central carbon metabolism. An antagonistic enforced objective would have the opposite effect. We consider this a significant shortcoming of the classical FSEOF as it fails to take into consideration synergistic objectives.
To address the synergistic enforced objective, we set vproductinitial to zero in the case where vproductinitial=vproductmax. Therefore, the flux is gradually increased from 0 to the maximum. This is rationalized as follows: Even if methanol consumption and biomass are synergistic with each other, there are several reactions in the metabolic network whose flux necessarily increases as methanol consumption increases, but not necessarily as biomass increases. These are the reactions we want to uncover with this fix. For example, flux through the Ribose-5-phosphate isomerase reaction is associated with high methanol consumption (more negative methanol exchange fluxes); nevertheless, high fluxes through this reaction are also associated with smaller biomass fluxes.
Another aspect of our particular case that the classical FSEOF failed to consider, was that in GSMMs usually, consumption reactions are set to have negative fluxes. The more negative a flux, through a consumption reaction, the more metabolite is consumed. Hence, the way $v_{product}^{max}$ is calculated must change because the maximum flux is the most negative, which means the optimization problem must be phrased differently.
To address this issue, our algorithm changed the calculation of vproductmax if vproduct is a consumption reaction. vproductmax is calculated as follows:
Minimize vproduct
Subject to:
∀i∈M,j∈N⟹∑j=1|N|Sijvj=0
vjα≤v<≤vjβ
where vjα and vjβ are the lower and upper bounds for flux in any arbitrary reaction vj. For non-reversible consumption reactions, vjβ=0, and for non-reversible production reactions, vjα=0.
Lastly, the classical FSEOF does not provide a very fine ranking of overexpression targets. So, we implemented a rough measure of how much the flux through a given reaction increases/decreases as we scan through enforced objectives: it is simply a linear regression and its associated Pearson Correlation Coefficient (r) value. The steeper the slope and the higher the r value, the "better" candidate a reaction is for overexpression.
None
### 3.6. Knockout Algorithm
To search for gene knockout candidates, we begin with the following motivation. Suppose there are two individuals of T-B18 that have growth rates ρ and ρ∗, where ρ<ρ∗. For a reaction r, consider the fluxes vr and vr∗ through r in individuals ρ and ρ∗, respectively. If
Suppose there are two individuals of T-B18 that have growth rates ρ and ρ∗, where ρ<ρ∗. For a reaction r, consider the fluxes vr and vr∗ through r in individuals ρ and ρ∗, respectively. If
|vr|≫0and|vr∗|≈0
then the reaction r might be a good knockout target. Intuitively, r exhibits high flux in the slower-growing individual but low flux in the faster-growing one. Then, knocking it out may encourage the bacteria to adopt a more optimal metabolic flux distribution. We can turn this into gene-level scores by considering for each gene g:
s(g)=max{|vr|∣r is a reaction associated with g}
and defining s∗(g) analogously. That is, we desire that s(g)≫0 and s∗(g)≈0.
Implementation. We use the same T-B18 model and media as described above. We set ρ=0.7μ and ρ∗=0.9μ, where μ is the optimal simulated growth rate under FBA. An important technicality is that, in the preceding discussion, we presupposed a single flux distribution for each individual. However, the solution space for FBA problems is rarely uniquely determined. Hence, we require another heuristic: the metabolic flux of T-B18 growing on methanol should be minimally rerouted from that of native E. coli, or T-B18 growing on glucose. Specifically, consider the individual with growth rate ρ. Using parsimonious enzyme usage FBA [6] , we first obtain the flux distribution v0 of T-B18 growing at rate ρ on the same media except with glucose instead of methanol. Then, we solve for the fluxes v of T-B18 on the original media, but take the solution that minimizes the flux distance ‖v−v0‖1. This is done through the linear minimization of metabolic adjustment algorithm [7] . We perform the same process for the faster-growing individual.
None
### 3.7 OptForce Model and Validation
One of the algorithms considered additionally to FSEOF is OptForce. The purpose of algorithms such as FSEOF and OptForce is to consider the role of overexpression in product optimization under FBA. FSEOF was used to model overexpression targets, and OptForce was used to verify them and provide a basic sensitivity analysis. These incorporated the application of FBA to the problem of optimizing reaction fluxes across an organism's metabolic network.
We consider the possibility of different reaction bounds and minimum/maximum ranges for fluxes for each reaction in the network. OptForce takes these combinations of bounds and dictates the specific set of genes targeting those reactions which will optimize the flux in a given direction, increasing or decreasing that particular flux [Ranganathan2010OptForce]. In this way, we obtain a range of possible bounds—here chosen between linear combinations of the original default lower and upper bounds, and either a linear shift, α1=(0,0.1,0.2,0.3,…,1.0), or an exponential shift, \(\boldsymbol{\alpha}_{2} = (10^{-5}, 10^{-4}, 10^{-3}, \ldots, 10^{5}). Based on the algorithm developed by Ranganathan et al., we construct a modified Flux Variability Analysis method applied to the reactions triggered by each gene found by FSEOF [Choi2010In][Park2012Flux]. This allows a variation in certain conditions such as gene expression, which may influence the overall flux of the target.
In our case, the optimization problem involves maximizing biomass and targeting the MEOH exchange production process. The variation of ranges allows for a broad verification of the FSEOF targets and the basis of a future genome-wide search looking at combinations of genes which must increase or decrease in flux to maintain a consistent and optimal Biomass production [Ranganathan2010OptForce]. A basic OptForce analysis was computed and is available on the Gitlab, though a full OptForce genome-wide study will be left for the road ahead.
None None
4. Result
None
### 4.1. Gene Additions
We used FBA and its associated methods for the in silico discovery of genes that can be added. One of our preliminary simulations found a 25% increase in (optimal) exponential growth rate by adding formaldehyde dehydrogenase (FDH) from P. putida to T-B18.
None
### 4.2. Gene Overexpression
The main results from the overexpression algorithms are reported in Table 1 as reactions that are easily searchable in the BiGG Models database.
Cameo FSEOF: Cameo is a Python library that provides algorithms for metabolic modeling and simulations [insert ref for Cameo] We ran its FSEOF algorithm on our T-B18 model, and generated a list of target reactions under 'Cameo FSEOF'.
Classical: Our team developed the FSEOF algorithm in COBRApy, and the resulting target reactions from it are in the 'Classical (Team Implement)' column.
[TABLE] Over-Expression Targets
| Over-Expression Algorithms
| Cameo FSEOF
| Classical (Team Implement)
| Special Case (Team Implement)
| Q-Slope (Team Implement)
| Target 1
| MEOHDH
| MTHFD
| Gene name
| ATPS4rpp
| Target 2
| MEOHtrpp
| ADPRDP
| Gene name
| EX_h2o_e
| Target 3
| MEOHtex
| FORtppi
| Gene name
| NADH16pp
| Target 4
| HPS
| NMNDA
| Gene name
| CYTBO3_4pp
| Target 5
| PHI
| NADN
| Gene name
| MEOHDH
| Target 6
| PFL
| GLYCL
| Gene name
| HPS
| Target 7
| FORtppi
| NNATr
| Gene name
| PHI
| Target 8
| FLDR2
| LPLIPAL2E161
| Gene name
| MEOHtrpp
| Target 9
| CO2tpp
| FTHFD
| Gene name
| MEOHtex
| Target 10
| CO2tex
| FEROpp
| Gene name
| O2tpp
None
### 4.3. Gene Knockouts
The main results of the final knockout algorithm are reported below.
[TABLE] Gene knockout targets
| Name
Score (0.7×optGR)
Score (0.9×optGR)
| frdC
| 0.810332
| 4.037750e-03
| frdB
| 0.810332
| 4.037750e-03
| frdA
| 0.810332
| 4.037750e-03
| frdD
| 0.810332
| 4.037750e-03
| ppc
| 0.368830
| 0.000000e+00
| glxK
| 0.184415
| 2.450159e-15
| gcl
| 0.184415
| 2.450159e-15
| glxR
| 0.184415
| 2.450159e-15
| garR
| 0.184415
| 2.450159e-15
The top four genes are associated with the same reaction: Fumarate reductase.
None None
5. Discussion
None
### 5.1. Analysis of results
#### 5.1.1. Addition
The abnormally high methanol concentration resulting from the addition suggest that formate was a non-trivial waste product (e.g., not HA2O or COA2)
#### 5.1.2. Knockout
Some existing literature suggests that fumarate reductases (frdC, frdB, frdA, frdD) could be reasonanle knockout targets. [8]
#### 5.1.3. Over-Expression
From generated results, it seems that reactions involved in upstream methanol consumption are good targets for over-expression.
None
### 5.2 Limitations and Applications
One of the main limitations of FSEOF and FSEOF-like methods is their oversimplification of phenotypic expression landscape. It assumes that an increasing tendency in flux through a given reaction as the flux through the enforced objective increases means an increase in flux will always correspond to an increase in enforced objective. In reality, there might be biological mechanisms in place to prevent wasteful use of energy spent on an abnormally high biochemical process within an organism, as well as other unforeseen phenotypic behaviors. Shortly, FSEOF works best for phenotypic phase planes that tend to the following trajectory:
[IMG] Phenotypic Phase Plane of methanol and threonine flux, over the flux ranges at which that exhibit simple linear association.
Phenotypic Phase Plane of methanol and threonine flux, over the flux ranges at which that exhibit simple linear association.
In contrast, phase planes that follow abnormal behavior are not well detected by FSEOF.
[IMG]
[CAPTION] Phenotype Phase Plane of Methanol exchange and Triose-phosphate isomerase. This does not exhibit simple linear behavior.
In the second case, which is, in fact, one of the top targets for overexpression predicted by our algorithms, a small increase in fluxes through Triose-phosphate isomerase (TPI) correlates with the highest growth rates. However, as can be observed from Figure 6, this relationship is not uniformly positive throughout the entire possible flux ranges. This makes TPI a less than ideal candidate for overexpression than what FSEOF suggests.
This lack of accuracy can be explained as follow. Since FBA always seeks the optimal solution, for the range of methanol exchange fluxes FSEOF scans over, the model only assigns a small flux through (TPI), as that would result in the highest growth rate. Coincidentally, that flux is small enough such that there is a positive and strong correlation between absolute flux through TPI and absolute exchange flux through methanol exchange (both optimized for biomass maximization). However, as is inferred from above graphs, a too abnormal increase in the flux will cause the growth rate to plummet. FSEOF will mark this reaction as a great target for overexpression, not realizing that if we overexpress too much then growth will be negatively, rather than positively, affected.
More generally, applications of the various bounds for OptForce creates a sensitivity analysis for different ranges of fluxes by target. Especially, due to computational constraints, which would require parallel processing of the entire E. coli genome, we were unable to assess a broad framework to determine the MUST and FORCE sets. Hence, we were limited to focusing on the specific pathways discovered by FSEOF. With a lack of such a genome-wide perspective, we were unable to construct the MUST and FORCE sets for each of the genes in the FSEOF-dictated pathways. This would form the basis of a future genome-wide search, in order to find the auxillary genes which guarantee optimal Biomass production.
None None
6. Open-Source Implementations
Our FSEOF implementation is available here on Github.
None None
7. The Road Ahead
In order to further enhance our project that leverages stoichiometric modeling to predict knockout, gene addition, and overexpression targets, we will focus on advancing our methodologies and extending our predictive capabilities. The following steps outline our path forward:
### Integration of Flux Variability Scanning based on Enforced Objective Flux (FVSEOF):
- Explore and implement the FVSEOF approach into our existing modeling framework. This advanced method will enable us to identify gene amplification targets with higher precision and efficiency.
- Develop algorithms and scripts to automate the FVSEOF analysis, making it more accessible and user-friendly for the research team.
### Enhanced Kinetic and Enzymatic Modeling:
- Incorporate additional variables into our kinetic and enzymatic models, such as substrate availability, cellular compartmentalization, and enzyme regulation.
- Optimize parameter estimation techniques to refine the accuracy of our models, potentially incorporating experimental data to validate and calibrate the models.
### Experimental Validation:
- Collaborate more with experimental biologists and geneticists to validate our predictions in the laboratory. Conduct knockout, gene addition, and overexpression experiments to verify the targets identified through our modeling approaches.
- Gather quantitative data from these experiments and use it to iteratively improve our models, enhancing their predictive power.
### Incorporate omics data:
- Integrate omics data, such as transcriptomics, proteomics, and metabolomics, into our modeling framework. This will provide a more comprehensive understanding of cellular processes and help refine our predictions.
### Machine Learning Integration:
- Implement machine learning techniques to assist in data analysis and model refinement. These methods can help identify patterns and correlations within large datasets, improving the accuracy of our predictions.
### Documentation and Knowledge Sharing:
- Document our methodologies, algorithms, and modeling parameters comprehensively. This documentation will serve as a valuable resource for the research community and facilitate knowledge sharing.
### Optimizing OptForce:
A couple of issues we had with OptForce involved certain ambiguities in implementation for the metabolic network model. OptForce requires a systematic genome-wide assessment of the metabolic fluxes, so a good starting point would be to, for example, assess a sensitivity analysis for a search across the entire genome of E. coli. From this, a flux network can be constructed where, using the mathematics of network theory [9] and genomics at a systems level (e.g. [10] , [11] , [12] ), can be constructed for each gene to observe its respective effect on all the fluxes in the network. In most cases, one should pay attention to the biomass production under the overexpression of the target reactions at a shift of a linear rate increases, but it converges at a shift of an exponential rate. The most relevant reactions among those found by FSEOF were investigated to assess the sensitivity and generalizability of the results using OptForce.
By following these steps and embracing a multidisciplinary approach, we aim to further advance our project's capabilities in predicting knockout, gene addition, and overexpression targets while contributing valuable insights to the field of systems biology and synthetic biology.
None None
8. Conclusion
We have modeled and simulated E. coli T-B18 using media simulation and Flux Balance Analysis (FBA) to make predictions for genetic modifications aimed at improving the bacteria's methane uptake and consumption of landfill gas. After exploring existing algorithms and their implementations, such as Flux Scanning based on Enforced Objective Flux (FSEOF) and FBA knockout prediction, we created project-specific implementations of these algorithms to improve their accuracy with respect to our own model. Our open-source implementation of FSEOF is available on Github. Our final recommendations for gene addition, knock-outs, and over-expression were found to be FDH, frdABCD, and MEOHDH, MEOHtrpp, MEOHtex, respectively. Experimental validation will follow, enabling iteration upon these predictions.
[1] Orth, Jeffrey D and Thiele, Ines and Palsson, Bernhard {\O} (2010). What is flux balance analysis?. Nature Biotechnology, 28(3), 245--248. doi: 10.1038/nbt.1614.
[2] Har, Jie Ren Gerald and Agee, Alec and Bennett, R. Kyle and Papoutsakis, Eleftherios T. and Antoniewicz, Maciek R. (2021). Adaptive laboratory evolution of methylotrophic {Escherichia} coli enables synthesis of all amino acids from methanol-derived carbon. Applied Microbiology and Biotechnology, 105(2), 869--876.
[4] Monk, Jonathan M and Lloyd, Colton J and Brunk, Elizabeth and Mih, Nathan and Sastry, Anand and King, Zachary and Takeuchi, Rikiya and Nomura, Wataru and Zhang, Zhen and Mori, Hirotada and Feist, Adam M and Palsson, Bernhard O (2017). iML1515, a knowledgebase that computes {Escherichia} coli traits. Nature Biotechnology, 35(10), 904--908.
[5] Choi, Hyung Seok and Lee, Sang Yup and Kim, Tae Yong and Woo, Han Min (2010). In {Silico} {Identification} of {Gene} {Amplification} {Targets} for {Improvement} of {Lycopene} {Production}. Applied and Environmental Microbiology, 76(10), 3097--3105.
[6] Nathan E Lewis and Kim K Hixson and Tom M Conrad and Joshua A Lerman and Pep Charusanti and Ashoka D Polpitiya and Joshua N Adkins and Gunnar Schramm and Samuel O Purvine and Daniel Lopez-Ferrer and Karl K Weitz and Roland Eils and Rainer K\"{o}nig and Richard D Smith and Bernhard {\O} Palsson (2010). Omic data from evolved \textit{E. coli} are consistent with computed optimal growth from genome-scale models. Molecular Systems Biology, 6(1), . doi: 10.1038/msb.2010.47.
[7] Schellenberger, Jan and Que, Richard and Fleming, Ronan M T and Thiele, Ines and Orth, Jeffrey D and Feist, Adam M and Zielinski, Daniel C and Bordbar, Aarash and Lewis, Nathan E and Rahmanian, Sorena and Kang, Joseph and Hyduke, Daniel R and Palsson, Bernhard {\O} (2011). Quantitative prediction of cellular metabolism with constraint-based models: the COBRA Toolbox v2.0. Nature Protocols, 6(9), 1290--1307. doi: 10.1038/nprot.2011.308.
[8] Fuchs, Georg and Stupperich, Erhard and Thauer, Rudolf K. (1978). Function of fumarate reductase in methanogenic bacteria ({Methanobacterium}). Archives of Microbiology, 119(2), 215--218.
[9] Ruiz Amores, Gerardo and Mart{\' i}nez-Antonio, Agustino (2022). Basics on network theory to analyze biological systems: a hands-on outlook. Functional &amp; Integrative Genomics, 22(6), 1433--1448.
[10] Erciyes, Kayhan (2015). Distributed and {Sequential} {Algorithms} for {Bioinformatics}.
[11] Civelek, Mete and Lusis, Aldons J. (2013). Systems genetics approaches to understand complex traits. Nature Reviews Genetics, 15(1), 34--48.
[12] (2022). Microbial {Systems} {Biology}.
- 1. Purpose
- 2. Background: Metabolic Modelling and Analysis
- 3. Methodology
3.1. Motivation
3.2. Constructing the GSMM of T-B18
3.3. Gene-Protein-Reaction associations
3.4. Media Analysis
3.5. Flux scanning based on enforced objective flux (FSEOF) and FSEOF-like algorithms
3.6. Knockout Algorithm
3.7 OptForce Model and Validation
- 4. Result
4.1. Gene Additions
4.2. Gene Overexpression
4.3. Gene Knockouts
- 5. Discussion
5.1. Analysis of results
5.2 Limitations and Applications
- 6. Open-Source Implementations
- 7. The Road Ahead
- 8. Conclusion
[IMG]
[{"heading": "", "key": "", "subheadings": [{"key": "-1.-purpose", "subsubheadings": [], "text": "1. Purpose"}, {"key": "-2.-background:-metabolic-modelling-and-analysis", "subsubheadings": [], "text": "2. Background: Metabolic Modelling and Analysis"}, {"key": "-3.-methodology", "subsubheadings": [{"key": "-3.-methodology-3.1.-motivation", "text": "3.1. Motivation"}, {"key": "-3.-methodology-3.2.-constructing-the-gsmm-of-t-b18", "text": "3.2. Constructing the GSMM of T-B18"}, {"key": "-3.-methodology-3.3.-gene-protein-reaction-associations", "text": "3.3. Gene-Protein-Reaction associations"}, {"key": "-3.-methodology-3.4.-media-analysis", "text": "3.4. Media Analysis"}, {"key": "-3.-methodology-3.5.-flux-scanning-based-on-enforced-objective-flux-(fseof)-and-fseof-like-algorithms", "text": "3.5. Flux scanning based on enforced objective flux (FSEOF) and FSEOF-like algorithms"}, {"key": "-3.-methodology-3.6.-knockout-algorithm", "text": "3.6. Knockout Algorithm"}, {"key": "-3.-methodology-3.7-optforce-model-and-validation", "text": "3.7 OptForce Model and Validation"}], "text": "3. Methodology"}, {"key": "-4.-result", "subsubheadings": [{"key": "-4.-result-4.1.-gene-additions", "text": "4.1. Gene Additions"}, {"key": "-4.-result-4.2.-gene-overexpression", "text": "4.2. Gene Overexpression"}, {"key": "-4.-result-4.3.-gene-knockouts", "text": "4.3. Gene Knockouts"}], "text": "4. Result"}, {"key": "-5.-discussion", "subsubheadings": [{"key": "-5.-discussion-5.1.-analysis-of-results", "text": "5.1. Analysis of results"}, {"key": "-5.-discussion-5.2-limitations-and-applications", "text": "5.2 Limitations and Applications"}], "text": "5. Discussion"}, {"key": "-6.-open-source-implementations", "subsubheadings": [], "text": "6. Open-Source Implementations"}, {"key": "-7.-the-road-ahead", "subsubheadings": [], "text": "7. The Road Ahead"}, {"key": "-8.-conclusion", "subsubheadings": [], "text": "8. Conclusion"}]}]
