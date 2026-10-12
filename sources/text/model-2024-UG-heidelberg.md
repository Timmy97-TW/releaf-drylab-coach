[IMG] Team Heidelberg
Home Awards
Project
[IMG] Google Material Icon
### Project Description
##### Folding Plasmids
[IMG] Google Material Icon
### Results
##### Goal, Hypothesis, Data, Conclusion
[IMG] Google Material Icon
### Engineering
##### Design, Build, Test, Learn
[IMG] Google Material Icon
### Model
##### Modeling DNA Folds
[IMG] Google Material Icon
### Applications
##### Potential Plans for the Future
[IMG] Google Material Icon
### Contribution
##### to the iGEM Community
Lab
[IMG] Google Material Icon
### Experiments
##### Materials & Methods
[IMG] Google Material Icon
### Part Collection
##### The Parts We Created
[IMG] Google Material Icon
### Notebook
##### Overview of Notebook
[IMG] Google Material Icon
### Safety
##### General, Laboratory, Application
Human Practices
[IMG] Google Material Icon
### Human Practices
##### Conversing with Experts
[IMG] Google Material Icon
### Education
##### Workshops, Outreach, Science
[IMG] Google Material Icon
### Public Engagement
##### Reaching out
[IMG] Google Material Icon
### Art Gallery
##### Dream Organism Science Competition
Team
[IMG] Google Material Icon
### Team Members
##### Learn More about Us!
[IMG] Google Material Icon
### Attributions
##### Acknowledging All Efforts
[IMG] Google Material Icon
### Sponsors & Partners
##### Appreciating the Support
### Model
[IMG] Google Material Icon
### Project Description
##### Folding Plasmids
[IMG] Google Material Icon
### Results
##### Goal, Hypothesis, Data, Conclusion
[IMG] Google Material Icon
### Engineering
##### Design, Build, Test, Learn
[IMG] Google Material Icon
### Model
##### Modeling DNA Folds
[IMG] Google Material Icon
### Applications
##### Potential Plans for the Future
[IMG] Google Material Icon
### Contribution
##### to the iGEM Community
[IMG] Google Material Icon
### Experiments
##### Material & Methods
[IMG] Google Material Icon
### Part Collection
##### The Parts We Created
[IMG] Google Material Icon
### Safety
##### General, Laboratory, Application
[IMG] Google Material Icon
### Notebook
##### Overview of Notebook
[IMG] Google Material Icon
### Human Practices
##### Conversing with Experts
[IMG] Google Material Icon
### Education
##### Workshops, Outreach, Science
[IMG] Google Material Icon
### Public Engagement
##### Reaching out
[IMG] Google Material Icon
### Art Gallery
##### Dream Organism Science Competition
[IMG] Google Material Icon
### Team Members
##### Learn More about Us!
[IMG] Google Material Icon
### Sponsors & Partners
##### Appreciating the Support
[IMG] Google Material Icon
### Attributions
##### Acknowledging All Efforts
- Project
[IMG] Google Material Icon
#### Project Description
[IMG] Google Material Icon
#### Results
[IMG] Google Material Icon
#### Engineering
[IMG] Google Material Icon
#### Model
[IMG] Google Material Icon
#### Applications
[IMG] Google Material Icon
#### Contribution
- Wetlab
[IMG] Google Material Icon
#### Experiments
[IMG] Google Material Icon
#### Part Collection
[IMG] Google Material Icon
#### Safety
[IMG] Google Material Icon
#### Notebook
- Human Practices
[IMG] Google Material Icon
#### Human Practices
[IMG] Google Material Icon
#### Public Engagement
[IMG] Google Material Icon
#### Education
[IMG] Google Material Icon
#### Art Gallery
- Team
[IMG] Google Material Icon
#### Team Members
[IMG] Google Material Icon
#### Attributions
[IMG] Google Material Icon
#### Sponsors
- Home
# Model
### Our Model DaVinci
Engineering the spatial 3D genome organization by artificially inducing DNA-DNA interactions with our PICasSO “staple” proteins offers profoundly new avenues in synthetic biology and genomics. Still, trial-and-error iterations through various staple designs and experimental conditions can be labor-intensive, costly, and time-consuming. To overcome this limitation, we developed DaVinci , an in silico model for rapid engineering and prototyping of our PICasSO system. DaVinci acts as a digital twin to PICasSO and is designed to understand the forces acting on the DNA in presence of PICasSO staple proteins, refine experimental parameters and optimize the spatial connections between protein staples and target DNA. To accomplish this task, we divided the problem into three parts.
First, we perform structural modeling of the protein staple using modern machine learning-based structure prediction tools. Next, we simulate the molecular dynamics of the staple in complex with an attached piece of DNA. Finally, we assess the effects of one or multiple staples on long-range DNA interactions. We calibrated DaVinci with our own experimental data, i.e. protein-DNA binding affinities derived from in vitro measurement, as well as additional data from literature. This powerful modeling pipeline enabled us to simulate complex, programmed spatial DNA rearrangements in silico, thereby providing direct input for the design of further experiments. Combining all steps into the unified DaVinci pipeline enables scientists to effectively and safely engineer genomes in the third dimension based on accurate model-based predictions.
Scroll down
### DaVinci in a Nutshell
- Input: staple target DNA sequence, experimental condition, and staple protein structure
- Output stapling feasibility, staple design, and binding characteristics including binding energy and dynamics
- Assumes only Newtonian mechanics and conventional base pair interactions
[IMG] Results Icon
### Static Molecular Interaction Predictions
- Characterization of nucleotide and peptide linkers through their influence on experimental outcomes
- Applying custom metrics to identify optimal predictions
- Generation of starting configurations for molecular dynamics simulations
[IMG] Results Icon
### All-Atom Dynamics Simulations
- Characterizing dynamics of the fusion guide RNA-based CRISPR/Cas staple.
- Calculating reliable distances and forces acting within the modeled system, thus establishing the forces used by the long-range modeling
- Expanding the static structure of the DNA-bound protein by the simulation of transition states to estimate binding energies comparable to our experimental EMSA data
[IMG] Results Icon
### Long-Range DNA Dynamics Simulations
- Using the predicted structures of Cas staples to study enhancer hijacking in silico
- By testing the boundaries of double-strand DNA stability, we confirm that forces imposed by protein staples do not disturb DNA strand integrity
- Determining import parameters for multiplexed Cas stapling
[IMG] Results Icon
## Introduction
Currently, no comprehensive toolset for 3D genome engineering exists in silico. While state-of-the-art software provides solutions for individual parts necessary to model PICasSO, no end-to-end pipeline is available that is suitable for this task. We took three different perspectives onto our PICasSO system, all on different scales and resolution levels, to understand and quantitatively dissect the parameters determining successful 3D genome engineering.
[IMG]
### DaVinci in a Nutshell
The first step is modeling the staple protein structure itself. With the release of AlphaFold2 in 2021, a neural network capable of predicting protein structures from a given amino acid sequence without costly and time-consuming crystallography, in silico protein structure inference became reality. In its newest iteration, AlphaFold3, computational prediction was expanded toward cofactors and multimeric complexes, including protein-DNA interaction. These improved capabilities render Alphafold3 a powerful entry point into our computational pipeline, functioning as a “staple structure generator” used to predict multiple initial staple configurations ranked by custom metrics.
While offering a great first insight into how staple proteins might fold, Alphafold3 only renders a static image of a singular state of a protein. To understand the dynamics and stability underlying PICasSO, we hence leveraged additional tools that simulate the dynamic staple-DNA interaction over a set time frame. Modern molecular dynamics (MD) platforms such as GROMACS provide a broad foundation to examine physical properties such as forces, velocities, and positions of every singular atom. MD enables us to build a simulation that characterizes the dynamic aspects of our system.
Since modeling every atom at every time increment is a resource-intensive task that scales unfavorably regarding the needed computational resources, it is only applicable for small timeframes and size-constraint systems. Hence, we use the coarse-grained simulation tool oxDNA to model the long-range DNA interactions. OxDNA has been successfully employed for the design of complex DNA assemblies in DNA origami, making it the ideal basis to simulate the effects of PICasSO on entire plasmids even with multiple staples. With our long-range simulation, we can also account for global effects as well as unintended, adverse effects such as DNA double-strand breaks due to high strains. This enables us to select and optimize staple target sites and fine-tune the PICasSO for high precision and safe deployment.
By combining the strengths of the aforementioned, specialized tools with our customized adaptor and scoring functions, we create a unified DaVinci modeling pipeline that handles both local and long-range interactions and transforms static predictions into dynamic simulations. By iteratively exchanging information between DaVinci and PICasSO during their development, we created a rapid engineering cycle, where we iterated through testing ideas in silico, applying them in the lab and finally feeding the experimental data back into the computational pipeline. Adopting this approach to engineer and observe enhancer hijacking, we demonstrate DaVinci is working successfully.
DaVinci is running on the high-performance computing cluster BwForCluster Helix, which is accessible free-of-charge to academic institutions in the state of Baden-Württemberg.
### Background Information
#### Predicting the Structure of Staples
We fed the sequences of our constructs from the wet lab as inputs to AlphaFold3, generating a protein structure in interaction with the corresponding DNA sequences. Model seeds were adjusted pseudo-randomly and automatically. We predicted all structures with corresponding cofactors as specified in the literature (i.e. on UniProt). AlphaFold3 searches internal structural databases for matching templates and builds multiple sequence alignments to augment the input with further information. For every run, AlphaFold3 generates five different structure predictions (Abramson et al., 2024), which are ranked by the predicted Local Distance Difference Test (pLDDT), and returned in the crystallography information format (CIF) (Hall et al., 1991).
#### Structure Prediction
We fed the sequences of our constructs from the WetLab as inputs to AlphaFold 3, generating a protein structure in interaction with the corresponding DNA sequences. Model seeds were adjusted pseudo-randomly automatically. We predicted all structures with corresponding cofactors as specified in the literature (on UniProt). AlphaFold 3 searches internal databases for matching templates and builds multiple sequence alignments to augment the input with further information. For every run AlphaFold 3 generates five different predictions (Abramson et al., 2024), which are ranked by the predicted Local Distance Difference Test (pLDDT), and returned in the crystallography information format (CIF) (Hall et al., 1991).
We ranked all predicted structures according to AlphaFold3s internal metrics, including pLDDT and ipTM as we are mostly interested in the interaction points. The pLDDT metric can also act as a rough surrogate for flexibility, enabling us to assess our linker rigidity. Further, we applied metrics specified by CAPRI (Critical Assessment of Prediction of Interactions, (Janin et al., 2003)) and performed the analysis via DockQ’s implementation of Fnat, iRMSD, and LRMSD about crystal structures, if available (Basu, et al. 2016). Furthermore, when looking at complexes of multiple structures, we aligned substructures to experimentally resolved crystal structures and ranked the complexes accordingly by iRMSD and LRMSD. If no experimental structure was available we used the singular predicted structure as a reference.
Structural alignment was performed using PyMOL. Afterward, scores were calculated and the best-ranking protein structures were then prepared for the next step in our pipeline and saved in the protein data bank format (PDB) (Berman et al., 2014).
#### All-Atom Molecular Dynamics
We built our all-atom molecular dynamics simulations in GROMACS. This provides a platform to set up and assess MD simulations in a standardized and reproducible way. The simulations of our PICasSO System generally involve 6 main steps to provide us with the equilibrated system we can simulate.
As a first step, previously generated protein structures were used to generate a GROMACS topology. This also results in positional restraints for each chain and creates the necessary indices for all atoms within our simulation. Most importantly, we assigned an initial set of velocities and masses on each atom using the AMBER14SB-OL21 force field. This force field was chosen because it is experimentally determined, and extensively refined, especially for DNA-simulations in water (Zgarbová et al., 2021). It is the current state of the art for DNA-Ligand interactions and has high accuracy for canonical B-DNA configurations, which ideally fits our PICasSO system (Love et al., 2023; Zgarbová et al., 2021).
Secondly, we had to define spatial boundaries of our simulation. Therefore, a simulation box was set up using ‘gmx editconf’, creating a confined space of interest. This space is (3) filled with water, and (4) neutralized with ions. TIP3P was selected as a water model since it was validated to yield fairly accurate results and is easy to implement (Izadi et al., 2014; Jorgensen et al., 1983). Neutralization was performed with the standard of 150 mM KCl, reducing electrostatic artifacts. To prepare the neutral system, its energy (5) was minimized throughout 50.000 steps. Afterward, it was equilibrated with a constant amount of substance, pressure, and temperature (6) to 310 K and 1 bar, using the velocity-rescale thermostat and Parrinello-Rahman barostat (Bussi et al., 2007; Parrinello & Rahman, 1981). Each part of this setup needs its own specialized set of parameters, which are available in the supplementary material.
Performing this initial setup laid a solid foundation for all upcoming simulation runs. It meant that it was possible to start a simulation in thermal equilibrium, calculating the forces acting on each atom (M. Abraham et al., 2024; M. J. Abraham et al., 2015; Berendsen et al., 1995; Páll et al., 2015; Pronk et al., 2013; Van Der Spoel et al., 2005). The calculation was performed in 3 steps:
- compute the combined force acting on any atom by computing forces between non-bonded atom pairs, bonded interactions, restraining and or external forces. Fi=−∂V∂ri
- update configuration: movements are determined by solving Newton's equations of motion numerically. Fimi=d2ridt2
- output step update all parameters e.g. positions, velocities, energies, temperature, and pressure.
To observe a sufficiently large time interval, we simulated all parts of our PICasSO System for 1 ns and made five additional long runs for our main construct for 10 ns each, thus achieving ergodicity. An individual time step in our simulation accounts for 2 fs. The subsequent data was processed using the MDAnalysis package in Python (Michaud-Agrawal et al., 2011; Van Der Walt et al., 2011).
Calculation of ΔG
To assess the binding affinity of our PICasSO system, we ran simulations using a harmonic force that pulled our complex apart . Therefore, the system was equilibrated at equally spaced timesteps over the whole pulling trajectory. We then apply a force exactly counteracting the attractive forces holding the complex together, while restraining the movement of its center of mass. By doing so, we approximate an artificial (non-Boltzmann) weight function, which we can use to sample the configuration space via Monte Carlo simulation. This, in turn, allows us to calculate the free Gibbs energy required to transition from one state (i.e. bound) to another (i. e. unbound). (Frenkel & Smit, 2023) To do so, we used the weighted histogram analysis method (WHAM) implemented into the GROMACS Platform by Lindahl et al. (2014) and adapted it to our system through selection of modeled configurations. The resulting difference in free Gibbs energy observed via this modeling approach can then be directly compared to the equilibrium constant measured through EMSA in the wet lab (Wedler & Freund, 2018). ΔG=ΔH−TΔS=−RTln⁡K
Comparing macroscopic conditions
To test the influence of simulation temperature on PICasSO, we simulated a range of reaction temperatures from 275 K to 315 K over a time span of 1 ns. The resulting trajectories were compared using the Hausdorff- and the Frechét metrics (Seyler et al., 2015). The range and specific simulation temperatures were optimized using the design of experiment theory developed by Plackett and Burman and implemented within the pyDOE package (Baudin & Christopoulou, 2018; PLACKETT & BURMAN, 1946). For this we developed, and implemented the plan, of how to set up experiments, using an optimal number of experiments. We generated data for those experiments but were not able to process it, as we generated more than 2 TB of data, whose alignment of trajectories did not finish running.
#### Coarse-grained Molecular Dynamics
To model full-length DNA strands, all-atom molecular dynamics proved insufficient as its memory requirements scale with O(T N log N), where T is the number of time-steps and N is the number of simulated atoms. To simulate long-range DNA dynamics, we therefore decided to run simulations at lower resolution based on oxDNA - a coarse-grain molecular dynamics approach specialized in DNA-DNA interactions that is used to model large DNA assemblies (Rovigatti et al., 2015). It is particularly effective for investigating B-DNA interactions and mechanical properties like bond and angular forces, as well as base stacking effects. By representing each nucleotide as a single particle, oxDNA significantly reduces complexity compared to all-atom approaches, enabling us to study large DNA systems while retaining the DNA-dependent behavior critical to our analysis. Even though oxDNA is mostly used to accurately simulate the self-assembly processes in DNA origami, we leveraged its precision in determining whether DNA strands remain bound to the Cas staples and to one another. Very importantly, taking into account the exerted forces, we also examined if our staples could cause unintended DNA double-strand breaks.
oxDNA models DNA interactions by only considering Watson-Crick base pairings , which allows large-scale analysis while staying computationally efficient. The three possible interaction types for DNA implemented in oxDNA are similar to each other while having slight differences regarding nucleotide orientation, strength of interactions, and availability of screened electrostatic interactions (Sengar et al., 2021). We chose the DNA1 interaction type because it is best suited for long-range effects on DNA (Šulc et al., 2012).
To represent genomic DNA while limiting computation time, we decided to implement a minimal viable system. Simulating whole genomes is quite complex and not needed to study the basic effects of DNA-DNA interaction by our staples. We decided to implement our interacting DNA in the form of plasmids, as we argued that these better represent genomes than just linear DNA strands. Adding to that, circular plasmids show constraints regarding orientation, making them more realistic than freely moving linear strands. Additionally, this approach supports our wet lab experiments in which we also used a plasmid based system to simulate enhancer hijacking in mammalian cells. To stay as close as possible to the conditions used in the wet lab, we set up our simulations with the same 5 kb sized plasmids.To adhere to cellular conditions, we set the temperature for all our simulations to 310 K. For all simulations presented, we applied a barostat, keeping the system's pressure constant at 1 bar. When applying forces in the final step, however, we disabled the barostat as the oxDNA implementation shrinks the simulation box as a response to external forces, which interfered with the simulation.
When trying to model the fgRNA in our system as well, we realized that simulating RNA-DNA interactions proved not suitable because GPU-accelerated computing was not available in the oxDNA environment. All presented simulations were run with time steps of 1 fs for 10 million steps, except the Cas staple result, which was generated by running an extensive simulation over 100 million steps.
Aiming for mechanistic insights, we set out to focus on the dynamics of the bound state at first. Here, the Cas staples exert forces onto their target nucleotides in a highly complex manner.
To transform our forces from an all-atom MD simulation to the coarse-grain level of oxDNA we averaged the forces acting on every residue in our DNA strand and projected them onto the corresponding nucleotide. As nucleotide forces are influenced by all other nucleotides in proximity, it results in n (n-1) forces that have to be accounted for. As a first approximation and to keep simulations manageable, we decided to implement only 20 forces, one for each nucleotide of every strand in the target region. These forces are applied via a ‘mutual trap’, where a force can be specified through the stiffness parameter (Documentation - OxDNA , o. J.). We calculated the stiffness k using Hooke’s law: (The Feynman Lectures on Physics Vol. II Ch. 38: Elasticity, o. J.) F=kΔr Analyzing our simulation results was done with customized scripts from the oxDNA analysis tools (Poppleton et al., 2021). To visualize our output files, we used the software oxView (Bohlin et al., 2022) which allowed us to view each timestep and export the short videos you will find in our results.
## User Guide
### How to use DaVinci
## Implementations
### Structure Prediction and All-Atom Simulation Parameters
### Long-Range DNA Interaction Parameters
## Static Molecular Interaction Predictions
[IMG]
### Results
Before simulating our Cas staples, we needed to explore and subsequently optimize the configurations of the fgRNA, which is key to connecting the Cas proteins into the staple complex. Selecting the appropriate fgRNA linker, i.e. the nucleic acid sequence connecting the Cas12a and Cas9 parts of the fgRNA, is crucial, as the linker length and composition determines the proximity and steric arrangement of the stapled DNA sequences, ultimately impacting functionality.
We experimented with varying linker lengths, focusing on a poly-CA configuration to minimize secondary structure formation. Without a connecting linker (i.e. direct fusion of Cas12a crRNA to Cas9 gRNA), we observed steric hindrance between the two Cas proteins upon fgRNA binding, leading to a loss of staple functionality (see fig. 1). However, by using a longer 40-nucleotide linker RNA, we were able to resolve this issue and could confirm functionality of the in silico optimized Cas staple in our wet lab experiments.
[IMG]
Figure 1: Cas Staples comprising dCas12 (left protein, in grey) and dCas9 (right protein, in grey) with fused guide RNA (fgRNA) without (left figure panel) or with (right figure panel) 40 nt linker. Each Cas staple is attached to two dsDNA strands. Proteins are derived from Part BBa_K5237000
For the fgRNA without a linker we observed restricted movement of the dCas12 subunit, which aligns with the wet lab results showing this staple is non-functional in vivo or in vitro. The added linker allowed for greater freedom of movement of the Cas moieties, enabling successful stapling, which we could confirm in wet lab experiments.
Relying solely on the fgRNA to connect our Cas staple limits its overall functionality. So we next looked into a fusion Cas approach: connecting the two Cas proteins with an additional peptide linker can improve the stability of the staple complex while allowing for functional flexibility by using the fgRNA to precisely program the DNA residue pairs to be tethered.
When selecting a suitable peptide linker, both the linker length and rigidity are important parameters to consider. Similar to the fgRNA linker, these parameters are essential for optimal functionality of a Cas staple construct. We selected seven peptide linkers from the literature to cover a broad range of biophysical properties (Chen et al., 2013). We tested these linkers first on our Mini staples consisting of simple and small DNA binding domains (GCN4 leucine-zipper-based, TetR-based, Oct1-based), which allowed for quicker and easier experimental assessment before moving to the more complex Cas staples. A detailed description of these Mini staples can be found in the proximity assay section of our wet lab results page and on the registry BBa_K5237009.
[IMG]
Figure 2: Variation of linkers connecting our mini staples. Panels A (BBa_K5237007) and B (BBa_K5237008) show orientations of the leucine zipper, each bound to DNA, colored by chain. Panels C to I display linker variations colored by their pLDDT confidence score, which serves as a surrogate for chain flexibility (Akdel et al., 2022). Note that panels H and I are not bound to the second DNA strand. All structures were predicted using the AlphaFold server (Google DeepMind, 2024).
We assessed the flexibility and rigidity of our constructs through the pLDDT values assigned during the predictions. Figure 2 illustrates the variation in linkers using the (‘GGGGS’)n sequence for flexible linkers and the (‘EAAAK’)n sequence for rigid linkers (Arai et al., 2001). The predictions are colored by their pLDDT scores, which act as a surrogate measure of chain rigidity (Akdel et al., 2022; Guo et al., 2022). The construct displayed in 2C was tested as part BBa_K5237009 in the wet lab - it did not bind DNA on any side, probably since its structure is too rigid, which hinders dimerization of the two subunits. Additionally, it is important to note that AlphaFold3 tends to generate alpha-helical structures, meaning segments colored green and yellow might represent loops rather than helices.
To investigate whether these results translate to other configurations, we applied the selected linkers to construct our simple staples BBa_K5237016 BBa_K5237017 BBa_K5237006. Our computational predictions indicated that the chosen linkers performed well in connecting the Simple staples and FRET-reporter proteins without impacting binding affinity (see fig. 3 ). We additionally extended these principles derived from our modeling to functionalized linkers, e.g. cleavable by cancer-specific proteases. This resulted in parts BBa_K5237020 BBa_K5237010 BBa_K5237011 BBa_K5237012 BBa_K5237013.
[IMG]
Figure 3: Representations of the Simple staple constructs. Upper representations are shown colored by chain and the lower ones by their predicted structural accuracy. As the linkers displayed high variability, we implemented these structures directly in the wet lab. (BBa_K5237016, BBa_K5237017, BBa_K5237006) The linkers were selected based on their structural property providing maximal flexibility. All structures were predicted using the AlphaFold server (Google DeepMind, 2024).
#### In case you see two black boxes, click here!
WebGL appears to be disabled.
Cas staple with fgRNA (BBa_K5237000), colored
by pLDDT scores. Bound DNA in grey.
Dual TetR-Oct1 staple (BBa_K5237006), colored
by pLDDT scores. Bound DNA in grey.
## All-Atom Dynamics Simulations
[IMG]
### Results
At its core, we wanted to use GROMACS to calculate the equilibrium distances of our DNA strands. We achieved this by simulating our equilibrated model over 10 ns and measuring the positions and forces acting on each atom every 2 ps - resulting in a sample size of 5.000 representative values for every parameter and atom.
[IMG]
Figure 4: Simulated Cas staples induce proximity between DNA strands. Graph A shows the average distances within a DNA strand over 1 ns. The distance of the strand is low at the beginning and the end of the sequence. In the middle, it is unwound by the Cas staple. From this, we can deduce that the Cas staples bind our DNA properly at the inserted binding sequence of the simulated sequence. Graph B shows the average distance of two DNA strands that do not interact directly. Nucleotide positions 10-30 (binding site) exhibit lower distances than the bordering nucleotides, which also indicates correct stapling. The equilibrium distance is shown for the interaction DNA1-DNA2 and DNA0-DNA3 (connections are formed for DNA1-DNA0 and DNA2-DNA3, respectively).
The forces involved in stapling were projected onto the corresponding base pair and averaged over time. Corresponding stiffnesses were calculated from Hooke's law (The Feynman Lectures on Physics Vol. II Ch. 38: Elasticity, o. J.).
Here, our objective was to calculate the Gibbs free energy between the bound and unbound state of the DNA-Protein interaction. For this purpose, we started with the most simple construct: Our half Mini staple (A leucine zipper with a bound dsDNA, BBa_K5237008) (see Fig. 5).
[IMG]
Figure 5: Calculating the Binding Energy of Mini Staples.
The simulation (left) illustrates the dissociation of our half Mini staple (BBa_K5237008) from a bound DNA sequence under an external force (e.g., tension applied to the staple). By plotting the corresponding potential of mean force (PMF) against the pulling distance, we observed an estimated Gibbs free binding energy reaching a maximum of 175 ± 97 kcal/mol. However, this value does not align with our EMSA results obtained from wet lab experiments, indicating the need for further refinement. The large error is likely due to improper histogram distribution in the weight function during the simulation.
For this construct, we observed a positive ΔG of 175±97kCal⋅mol−1 for dissociation, suggesting that the reverse process — protein binding — occurs spontaneously over time. Comparing this result with wet lab data highlights discrepancies, as they measured ΔG=9.256±10.676⋅kCal⋅mol−1 using EMSA. This can also be compared to literature with an estimate of ΔG=10.7±11.48⋅kCal⋅mol−1 (Jessica J. Hollenbeck et al., 2001). Even though our calculation is within the 1.6 deviation of the experimental data, this is due to a large error in the calculation. Moreover, when visualizing the trajectory, DNA strand separation was observed, suggesting an unnatural event. Thus, this calculation will require further investigation to improve accuracy.
## Long-Range DNA Dynamics Simulations
[IMG]
### Results
Starting out with modeling long-range dynamics mediated with PICasSO, we first wanted to understand the general behavior of a two-DNA (for modeling simplicity: two-plasmid) system to later understand the effects of our staples on DNA spatial arrangement. To generate a baseline simulation, we constructed a two-plasmid system without any staple that would mediate a connection.
[IMG]
Figure 6: Two plasmids without constraints.
As it is not possible to generate circular plasmids directly in our simulations, we took linear strands and circularized them into plasmids individually. Then, we artificially induced proximity in regions targeted by the staples on both plasmids by softly pulling them together with mild force. This setup was defined as the starting condition. Next, we started our simulation of plasmid spatial arrangement over time.
[IMG]
Figure 7: Nucleotides initialized in close proximity separate over time in absence of a Cas staple. The distances between nucleotides in a close-proximity starting configuration (light blue) and the distances between all other nucleotides (orange) for the two plasmids are plotted against the logarithmic frequency at which they occur. The proximity-induced nucleotides show a rather even distribution ranging from around 5 nm to 230 nm, with an exception at distances of 105 nm. On the contrary, the non-stapled nucleotides are equally spaced out up to over 700 nm.
The simulation results (see Fig. 7) indicate that the distances between the tracked regions on both plasmids increased over time. This clearly shows that a staple would be needed to keep the plasmids in proximity. Furthermore, all other nucleotides showed a uniform distribution for all distances up to a maximum distance of approximately 700 nm. Having established this staple-free baseline scenario, we started looking into the specific dynamics of enhancer hijacking with our engineered staples.
#### Assumptions
- Stapling distances: Distances of the stapled nucleotides are predicted in our all-atom simulation, based on the Cas staple with a fgRNA containing a 40 nt linker
- Stapling forces are taken from atomistic predictions of what forces the fusion Cas protein staple exerts on its binding sequences
- For more details see Core Assumptions
Next, we aimed to simulate the core principles of the enhancer hijacking experiments we conducted in the lab. For these experiments, we utilized two plasmids: one containing binding sites for a transcriptional activator, and a second containing a reporter gene driven from a minimal promoter. Hence, reporter activity is only observed upon successful “stapling” of the transactivator-recruiting plasmid to the reporter plasmid.
To simulate this “synthetic enhancer hijacking” experiment in silico, we adapted our two plasmids simulation from the previous experiment. Our simulated plasmids are identical to experimentally used ones containing target sequences for the fgRNA, which were selected as staple targets. Sequences of these two plasmids are also available in our part collection (BBa_K5237023 and BBa_K5237024).
[IMG]
Figure 8: Cas stapled plasmids
On top of the two plasmids, we modeled the Cas staple by applying a “DNA-DNA tethering force” throughout our simulation, selectively on the regions targeted by the fgRNA. As mentioned in the “all-atom dynamics simulations” parts above, we predicted and simulated the dynamics of our Cas staple (BBa_K5237000). Additionally, we averaged the predicted forces exerted by the Cas staple onto these specific, fgRNA-targeted nucleotides. Then, we used approximated distances as values to orient the regions targeted by the fgRNA to each other. This created an accurate and precise model resulting in an expected distance between the target region on both plasmids of 7.4 nm.
[IMG]
Figure 9: Fusion Cas staples hold stapled nucleotides in close proximity. Here, the distances between the stapled nucleotides (light blue) and the distances between all other nucleotides (orange) for two plasmids are plotted against the logarithmic frequency at which they occur. For the fusion Cas, the target nucleotides appear to be consistently 5-10 nm apart from one another across the simulation. The baseline is quite evenly distributed up until the maximum distance, which are the opposite plasmid sites from the stapling site.
Our simulation showed the expected behavior, i.e. target sequences of the Cas staple are “held” in close proximity, i.e. at a distance of 5-10 nanometers, indicated by a sharp peak in Figure 9 (see light blue histogram). Thus, no double-strand breaks occurred, letting us conclude that the forces exerted onto our DNA facilitate effective tethering, but do not pose a safety hazard. The distance between all other not-targeted nucleotides was uniformly distributed and showed that the ends of both plasmids are a maximum of 700 nm apart as expected. Overall, these exciting results demonstrate that we can successfully model the core principles of enhancer hijacking with a total of 20 thousand simulated nucleotides in silico.
#### Assumptions
- Stapling distances of stapled nucleotides is defined so that they adhere to a fully stretched and linear fgRNA with a 40 nt linker
- Stapling forces represent an average of atomistic predictions about the forces exerted by fusion Cas protein staples on their binding sequences
- For more details see Core Assumptions
Next, we aimed to stress test our system to determine the amount of force required to induce DNA double-strand breaks. To achieve this, we used an identical setup to the previous experiment but instead of experimentally determined forces, we used artificial forces of varying strength (Fig. 10).
[IMG]
Figure 10: Cas stapled plasmids
It is important to know that our in silico model responds to forces that cause double-strand breaks by scattering the nucleotides across the simulation box. As the specified bonds cannot actually break within the simulation, the phosphate backbone bonds become severely distorted and exhibit erratic behavior in the simulation videos. This also implies that as soon as the stapled nucleotides show more than one peak, DNA double-strand breaks occured in the simulation.
In Figures 11A and 11B, we see that our constructs look more or less identical to our baseline results when applying forces with a stiffness of 1.2 and 1.4. We also observe a local peak around the expected distance for the stapled nucleotides in Figures 11C and 11D, but the wide distribution with another maximum of around 400 nm indicates that the targeted nucleotides do not stay in close contact over the entire simulation time. The forces needed to damage the DNA started at stiffnesses between 1.4 and 3 (see Fig. 11) - an increase of around 320 and 680 times compared to the actual Cas staple forces, respectively.
A
B
C
D
[IMG]
Figure 11: Forces needed to damage DNA exceed the Cas staple force by more than factor 320. The distances between the stapled nucleotides ( light blue) and the distances between all other nucleotides ( orange) for the two plasmids are plotted against the logarithmic frequency at which they occur. With a stiffness of 1.2 in A and 1.4 in B, the stapled nucleotides remain in proximity. Once even stronger forces are applied, the nucleotides targeted by the baseline Cas staple start getting more and more evenly distributed and are less often in proximity. This effect gets stronger when moving from a stiffness of 3 in C to 5 in D.
As expected, the reference nucleotides showed a relatively uniform distribution. When comparing the plots from Figure 11 with one another, the reference nucleotides represent the baseline accurately for different forces. Interestingly, the far ends of the plasmid are never separated by more than 700 nm, which is caused by the set boundaries of the simulation box.
All in all, we concluded that the forces needed to damage the DNA integrity are more than 320 times stronger than those directed onto the DNA by the Cas staple (see Fig. 11B). This provides important evidence regarding the safety of our staple approach for 3D genome engineering: According to our model, DNA-DNA tethering with our Cas staples is not expected to have a negative effect on the DNA stability.
#### Assumptions
- Distances of stapled nucleotides are defined so that they adhere to a fully stretched and linear fgRNA
- Stapling forces amount to the average force exerted by fusion Cas protein staples on their binding sequence during atomistic predictions
- For more details see Core Assumptions
Finally, we simulated the behavior of multiple staples at once. Therefore, we expanded our previously introduced experimental setup by a second Cas staple (BBa_K5237000).
[IMG]
Figure 12: Multiplexing with 2 Cas staples can destroy the bound plasmids. On the blue plasmid, the Cas binding sequences are 40 nucleotides apart.
In a first approach, we targeted an additional region next to the original chosen one. This region is 40 nucleotides away from the first target region on the plasmid displayed in blue connecting it to the opposite site of the orange plasmid, therefore bringing both ends of the orange plasmid together (see Fig. 12).
[IMG]
Figure 13: Double Cas stapling within 40 nucleotide distance induces double-strand breaks. The distances between the nucleotides targeted by the first (light blue) and second staple (green) as well as the distances between all other nucleotides (orange) for the respective plasmids are plotted against the logarithmic frequency at which they occur. While the reference nucleotides were expected to be quite evenly distributed, the stapled ones also showed a rather even distribution up to distances of 400 nm. This indicated occurring double-strand breaks, as the stapled nucleotides started in close proximity. Here, the distances between the stapled nucleotides (light blue) and the distances between all other nucleotides (orange) for two plasmids are plotted against the logarithmic frequency at which they occur. For the fusion Cas, the target nucleotides appear to be consistently 5-10 nm apart from one another across the simulation. The baseline is quite evenly distributed up until the maximum distance, which are the opposite plasmid sites from the stapling site.
As shown in Figure 13, our simulation predicted that with these staple points, DNA double-strand breaks would occur. This is inferred from the scattering of targeted nucleotides across the simulation box and a missing single peak for the expected distance of 7.4 nm. While the predicted distance still presents the global maximum for the distribution, the simulation did show that the distances between stapled nucleotides increased over time. From inspecting the simulation video, we learned that both plasmids started to break.
To simulate a setup where we expect no double-strand breaks, we increased the distance between the stapling sites on the blue plasmid (BBa_K5237023) from 40 to 980 nucleotides (see Fig. 14).
[IMG]
Figure 14: Stable multiplexing with 2 Cas staples. On the blue plasmid, the Cas binding sequences are 980 nucleotides apart.
With this increased distance between stapling sites, we observed a stabilized system. Both staples now showed a single sharp peak with the expected distances of stapled DNA parts around 20 nm (see Fig. 15), while other nucleotides in the two plasmids (not targeted by either staple) were more widely spread out. Most interestingly, these non-stapled regions showed maximum distances close to 500 nm, indicating that the two staples led to more compact plasmid structures.
[IMG]
Figure 15: Increasing the distance between Cas staple targets to 980 nucleotides stabilizes multiplexing. The distances between the nucleotides targeted by the first (light blue) and second staple (green) as well as the distances between all other nucleotides (orange) for the respective plasmids are plotted against the logarithmic frequency at which they occur. The first and second staple distances overlap for the expected distances of around 20 nm while the overall distances are limited to under 500 nm.
In conclusion, we show that applying multiple staples on the same structures can lead to double-strand breaks if the staples are positioned closely to one another. However, increasing the separation of staples leads to a stable system without DNA damage. Thus, it is definitely possible to multiplex Cas staples, thereby increasing the compactness of DNA structures. This shows the potential of creating complex regulatory networks by bringing genetic elements into spatial proximity with a multitude of Cas protein staples.
## Discussion and the Road Ahead
With DaVinci, we have developed a comprehensive in silico pipeline that enables the rapid simulation of various designs and experimental conditions of the PICasSO system. We here have laid the groundwork for characterizing key components of protein staples with computational modeling, such as staple configuration, dynamics of staple-DNA complexes as well as target site spacing during staple multiplexing. This allowed us to estimate the influence of these parameters while engineering artificial DNA-DNA interactions, the insights of which were leveraged to improve experimental design.
Incorporating cutting-edge technology, a bottom-up approach to model protein staples was followed here, starting with static protein and DNA structures and gradually scaling them into more complex molecular dynamic models. This methodology enabled a thorough analysis of each PICasSO toolbox component, i.e. all protein and DNA components, optimizing the modeling process based on insights from experimental work. This iterative engineering cycle between dry and wet lab crucial information on the optimal design, including the fgRNA linker and target site spacing. Similarly, the effect of peptide linkers on the function of the engineered Mini staples was investigated, revealing the optimal choice of triple motif flexible linkers.
In addition to gaining insight from static structure analysis, the dynamic all-atom view enabled the calculation of Gibbs free binding energy for several Mini staples, allowing for comparison with experimental data obtained by EMSA. However, the wet lab data and dry lab predictions aligned only partially, likely due to the large uncertainty in the calculation. However, this uncertainty can be significantly reduced by sampling additional transition states and refining the pathway from the DNA bound to unbound state. As a result, our approach demonstrates the modeling of DNA-protein binding transition states and the exploration of surrounding energy landscapes, representing a substantial improvement to our initial model.
Moreover, we successfully modeled the impact of protein staples on DNA stability. This approach allowed the identification of critical physical forces at which DNA double strand breaks might occur. As all inferred protein staple forces are far below this threshold, we conclude that PICasSO poses no safety hazard regarding the target DNA integrity/stability. Further, studying multiplexed staple systems allowed us to identify staple configurations that remained stably bound extended time periods. In contrast, staples that were positioned too close to each other on the DNA sequence appeared to generate torsional forces that could ultimately induce double-strand breaks. This observation can be attributed to core assumptions made during the coarse-grained simulation step, as Cas staples are fixed to the DNA in our simulation. As Cas proteins are significantly more likely to dissociate from DNA than to induce a strand break, the staple connection will rather be lost in such a case due to staple dissociation.
Using the predicted properties of the Cas staple (BBa_K5237003), the core mechanism of enhancer hijacking was modeled. These simulations confirmed that “stapled” DNA strands remained in close proximity over time. This example shows that DaVinci can support the design of DNA-stapling experiments by providing a “preview” of the experimentally expected results, hence serving as digital twin for PICasSO.
Despite our engineering success, DaVinci’s precision could be further improved with the development of more powerful computational hardware in the future. Current all-atom dynamics simulations are mainly limited through hardware constraints. With the availability of better and faster CPUs, GPUs and storage solutions it might become feasible to model the entire system at an all-atom resolution, thus providing an even more accurate representation of the physical forces at work. A similar constraint was observed for static structures. Due to AlphaFold’s unfavorable scaling with protein/DNA sequence length, it is currently not possible to predict structures for multiple staples or long DNA sequences. Considering the rapid advances in machine learning in the recent past, many more avenues to improve our model might open up and could even allow us to predict molecular structure and dynamics in a single step.
As immediate next steps, we will extend our free binding energy calculations to the Simple staple constructs and to the main fusion Cas constructs, thereby expanding the characterization of our toolbox. Additionally, we plan to further explore the limits of our DNA stapling system by incorporating even larger DNA samples and modeling more than two plasmids.
Looking into the future, we aim to advance DaVinci to automatically optimize the positioning of multiple staples given a desired three-dimensional DNA configuration using optimization strategies like Bayesian variational inference. Additionally we plan to provide the wet lab with automatically optimized experimental parameters such as equilibration temperature, ion concentration, and buffer conditions, which we already started implementing.
In summary, our computational DaVinci pipeline is capable of effectively modeling DNA-DNA interactions induced by the PICasSO toolbox, starting from small all-atom simulations up to coarse-grained long-range DNA interactions. DaVinci is able to handle multiple staples and its predictions were successfully corroborated with experimental data from the wet lab.
Abraham, M., Alekseenko, A., Basov, V., Bergh, C., Briand, E., Brown, A., Doijade, M., Fiorin, G., Fleischmann, S., Gorelov, S., Gouaillardet, G., Gray, A., Irrgang, M. E., Jalalypour, F., Jordan, J., Kutzner, C., Lemkul, J. A., Lundborg, M., Merz, P., … Lindahl, E. (2024) GROMACS 2024.2 Source code (Version 2024.2) [Software]. Zenodo. https://doi.org/10.5281/zenodo.11148655
Abramson, J., Adler, J., Dunger, J., Evans, R., Green, T., Pritzel, A., Ronneberger, O., Willmore, L., Ballard, A. J., Bambrick, J., Bodenstein, S. W., Evans, D. A., Hung, C.-C., O’Neill, M., Reiman, D., Tunyasuvunakool, K., Wu, Z., Žemgulytė, A., Arvaniti, E., … Jumper, J. M. (2024). Accurate structure prediction of biomolecular interactions with AlphaFold 3. Nature 2024 630:8016, 630(8016). https://doi.org/10.1038/s41586-024-07487-w
Baudin, M., & Christopoulou, M. (2018). pyDOE: Design of experiments for Python (Version 0.3.8) [Python; OS Independent]. https://github.com/tisimst/pyDOE
Berendsen, H. J. C., van der Spoel, D., & van Drunen, R. (1995). GROMACS: A message-passing parallel molecular dynamics implementation. Computer Physics Communications, 91(1), 43–56. https://doi.org/10.1016/0010-4655(95)00042-E
Berman, H. M., Kleywegt, G. J., Nakamura, H., & Markley, J. L. (2014). The Protein Data Bank archive as an open data resource. Journal of Computer-Aided Molecular Design, 28(10), 1009–1014. https://doi.org/10.1007/s10822-014-9770-y
Bohlin, J., Matthies, M., Poppleton, E., Procyk, J., Mallya, A., Yan, H., & Šulc, P. (2022). Design and simulation of DNA, RNA and hybrid protein–nucleic acid nanostructures with oxView. Nature Protocols, 17(8), 1762–1788. https://doi.org/10.1038/s41596-022-00688-5
Bussi, G., Donadio, D., & Parrinello, M. (2007). Canonical sampling through velocity rescaling. The Journal of Chemical Physics, 126(1), 014101. https://doi.org/10.1063/1.2408420
Documentation—OxDNA. (o. J.). Abgerufen 30. September 2024, von https://dna.physics.ox.ac.uk/index.php/Documentation
Frenkel, D., & Smit, B. (2023). Understanding molecular simulation: From algorithms to applications (Third edition). Academic Press, an imprint of Elsevier.
GROMACS 4: Algorithms for Highly Efficient, Load-Balanced, and Scalable Molecular Simulation | Journal of Chemical Theory and Computation. (o. J.). Abgerufen 28. September 2024, von https://pubs.acs.org/doi/10.1021/ct700301q
Hall, S. R., Allen, F. H., & Brown, I. D. (1991). The crystallographic information file (CIF): A new standard archive file for crystallography. Acta Crystallographica Section A Foundations of Crystallography, 47(6), 655–685. https://doi.org/10.1107/S010876739101067X
Izadi, S., Anandakrishnan, R., & Onufriev, A. V. (2014). Building Water Models: A Different Approach. The Journal of Physical Chemistry Letters, 5(21), 3863–3871. https://doi.org/10.1021/jz501780a
Janin, J., Henrick, K., Moult, J., Eyck, L. T., Sternberg, M. J. E., Vajda, S., Vakser, I., & Wodak, S. J. (2003). CAPRI: A Critical Assessment of PRedicted Interactions. Proteins: Structure, Function, and Bioinformatics, 52(1), 2–9. https://doi.org/10.1002/prot.10381
Jessica J. Hollenbeck, Daniel G. Gurnon, Gia C. Fazio, Jennifer J. Carlson, and, & Martha G. Oakley*. (2001). A GCN4 Variant with a C-Terminal Basic Region Binds to DNA with Wild-Type Affinity†. https://doi.org/10.1021/bi011088
Jorgensen, W. L., Chandrasekhar, J., Madura, J. D., Impey, R. W., & Klein, M. L. (1983). Comparison of simple potential functions for simulating liquid water. The Journal of Chemical Physics, 79(2), 926–935. https://doi.org/10.1063/1.445869
Lindahl, V., Lidmar, J., & Hess, B. (2014). Accelerated weight histogram method for exploring free energy landscapes. The Journal of Chemical Physics, 141(4), 044110. https://doi.org/10.1063/1.4890371
Love, O., Galindo-Murillo, R., Zgarbová, M., Šponer, J., Jurečka, P., & Cheatham, T. E. I. (2023). Assessing the Current State of Amber Force Field Modifications for DNA─2023 Edition. Journal of Chemical Theory and Computation, 19(13), 4299–4307. https://doi.org/10.1021/acs.jctc.3c00233
Michaud-Agrawal, N., Denning, E. J., Woolf, T. B., & Beckstein, O. (2011). MDAnalysis: A toolkit for the analysis of molecular dynamics simulations. Journal of Computational Chemistry, 32(10), 2319–2327. https://doi.org/10.1002/jcc.21787
Páll, S., Abraham, M. J., Kutzner, C., Hess, B., & Lindahl, E. (2015). Tackling Exascale Software Challenges in Molecular Dynamics Simulations with GROMACS. In S. Markidis & E. Laure (Hrsg.), Solving Software Challenges for Exascale (Bd. 8759, S. 3–27). Springer International Publishing. https://doi.org/10.1007/978-3-319-15976-8_1
Parrinello, M., & Rahman, A. (1981). Polymorphic transitions in single crystals: A new molecular dynamics method. Journal of Applied Physics, 52(12), 7182–7190. https://doi.org/10.1063/1.328693
PLACKETT, R. L., & BURMAN, J. P. (1946). THE DESIGN OF OPTIMUM MULTIFACTORIAL EXPERIMENTS. Biometrika, 33(4), 305–325. https://doi.org/10.1093/biomet/33.4.305
Poppleton, E., Romero, R., Mallya, A., Rovigatti, L., & Šulc, P. (2021). OxDNA.org: A public webserver for coarse-grained simulations of DNA and RNA nanostructures. Nucleic Acids Research, 49(W1), W491–W498. https://doi.org/10.1093/nar/gkab324
Pronk, S., Páll, S., Schulz, R., Larsson, P., Bjelkmar, P., Apostolov, R., Shirts, M. R., Smith, J. C., Kasson, P. M., van der Spoel, D., Hess, B., & Lindahl, E. (2013). GROMACS 4.5: A high-throughput and highly parallel open source molecular simulation toolkit. Bioinformatics, 29(7), 845–854. https://doi.org/10.1093/bioinformatics/btt055
Rovigatti, L., Šulc, P., Reguly, I. Z., & Romano, F. (2015). A comparison between parallelization approaches in molecular dynamics simulations on GPUs. Journal of Computational Chemistry, 36(1), 1–8. https://doi.org/10.1002/jcc.23763
Sengar, A., Ouldridge, T. E., Henrich, O., Rovigatti, L., & Šulc, P. (2021). A Primer on the oxDNA Model of DNA: When to Use it, How to Simulate it and How to Interpret the Results. Frontiers in Molecular Biosciences, 8. https://doi.org/10.3389/fmolb.2021.693710
Seyler, S. L., Kumar, A., Thorpe, M. F., & Beckstein, O. (2015). Path Similarity Analysis: A Method for Quantifying Macromolecular Pathways. PLOS Computational Biology, 11(10), e1004568. https://doi.org/10.1371/journal.pcbi.1004568
Šulc, P., Romano, F., Ouldridge, T. E., Rovigatti, L., Doye, J. P. K., & Louis, A. A. (2012). Sequence-dependent thermodynamics of a coarse-grained DNA model. The Journal of Chemical Physics, 137(13), 135101. https://doi.org/10.1063/1.4754132
The Feynman Lectures on Physics Vol. II Ch. 38: Elasticity. (o. J.). Abgerufen 29. September 2024, von https://www.feynmanlectures.caltech.edu/II_38.html#Ch38-S1
Van Der Spoel, D., Lindahl, E., Hess, B., Groenhof, G., Mark, A. E., & Berendsen, H. J. C. (2005). GROMACS: Fast, flexible, and free. Journal of Computational Chemistry, 26(16), 1701–1718. https://doi.org/10.1002/jcc.20291
Van Der Walt, S., Colbert, S. C., & Varoquaux, G. (2011). The NumPy Array: A Structure for Efficient Numerical Computation. Computing in Science & Engineering, 13(2), 22–30. https://doi.org/10.1109/MCSE.2011.37
Wedler, G., & Freund, H.-J. (2018). Lehr- und Arbeitsbuch physikalische Chemie (Siebte, wesentlich überarbeitete und erweiterte Auflage). Wiley-VCH Verlag GmbH & Co. KGaA.
Zgarbová, M., Šponer, J., & Jurečka, P. (2021). Z-DNA as a Touchstone for Additive Empirical Force Fields and a Refinement of the Alpha/Gamma DNA Torsions for AMBER. Journal of Chemical Theory and Computation, 17(10), 6292–6301. https://doi.org/10.1021/acs.jctc.1c00697
