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
[FOLD] Contents
On this page
- 1Significance
- 2Key findings
- 3Setup and parameters
- 4Wild type
- 5Truncation ladder
- 6pH 5.5
- 7Apo receptor
- 8Overall
- 9Limitations
- 10Application of results
# Molecular Dynamics
## 1.Significance of molecular dynamics
Molecular Dynamics (MD) simulation is a fundamental computational methodology that uses statistical mechanics to evaluate the physical properties, structural stability, and mechanism of action of engineered proteins and peptides. By integrating Newtonian equations of motion, MD tracks the velocities, positions, and interactions between molecules over time. We applied this to our project to understand the translation and secretion efficiency of our protectants by analyzing the interactions between different receptors.
With HADDOCK providing a structural framework for how our protectants bind to specific molecules, Molecular Dynamics (MD) simulations offer a glimpse into whether these predicted bound poses remain stable over time. Rather than treating a single docking pose as a definitive representation of the binding interaction, MD subjects the complex to a simulated dynamic environment, allowing the protein and protectant to move and interact as they would under molecular conditions. While MD runs can answer crucial hypotheses, they can also serve as trigger points for unique, project-altering strategies.
## 2.Key findings and design implications
[FOLD] Results Histidine tag
The decision to move the purification tag to the C-terminus resulted in six histidines beginning at Asn23 and the loss of the free carboxylate's participation in the native bidentate salt bridge with Arg487. While this tagged peptide satisfied the distance-based criterion used by the project, a more rigorous test considering both distance and bond angle showed that the bidentate salt bridge was missing in every simulated frame in contrast to 100% of native frames. The difference in these findings indicates the tagged peptide fails to maintain the native salt bridge, despite satisfying the project's original distance criteria. An N-terminal tag or synthetic peptide without a purification tag would not disrupt the C-terminal free carboxylate.
loading…
time
  0.00 ns
Asn23 to Arg487
  —
clamp, 4 contacts
  —
[FOLD] Results pH 5.5
The slightly acidic apoplast environment led us to consider pH 5.5 instead of neutral pH as the default condition. At this pH, with His14, His22, and His227 protonated to reflect this environment, the bidentate salt bridge between peptide Glu12 and receptor His227 was present in 99.9% of frames compared to 0.8% at pH 7.0. This interaction is also present in the neutral pH AtPEP1 benchmark, and the acidic environment may facilitate a similar interaction in BoPEP4. We therefore found this to be the more suitable condition for studying BoPEP4, but we continued to simulate at pH 7.0 as a control.
[FOLD] Results Truncation ladder
Simulations revealed an important interaction, Lys7–Asp129, that was not included in the published hotspot lists that we initially consulted. In the full-length peptide (Lys7–Arg156), a salt bridge between Lys7 and Asp129 was present in 98.7% of frames at a distance of 2.81 Å. Its absence in the 9–23 construct provides a more straightforward explanation for the construct's diminished stability than our initial hypothesis that it was due to the newly exposed terminus. Simulations also revealed that stability was not progressively diminished by each successive truncation. This implies a testable next step, namely introducing a K7A mutation in the full-length peptide to test whether it is specifically the Lys7 side chain that is important for this interaction and structural stability.
[FOLD] Results Wild-type BoPEP4 and the K18R mutation rationale
The simulation of wild-type BoPEP4 led us to re-examine the evidence for the planned K18R mutation. While there is a contact between Lys18 and Asp348 in 53.7% of frames at distances between 2.55 and 9.37 Å , this is not the short-distance interaction implied by the static nature of the docking model. The trajectory revealed that Gly20 maintained an interaction with Phe371, providing an alternative account of the pattern of local contacts.
## 3.Simulation setup and parameters
All nine systems were solvated in explicit OPC water and simulated using the AMBER ff19SB force field with the PEPR1 ectodomain (residues 29-738) from PDB 5GR8. The systems have ~127,600 atoms each and underwent mass repartitioning of the hydrogen atoms to enable a 4 fs time step. Each trajectory 30 ns of production dynamics from a single random seed and 1,500 frames were saved for analysis. This adds up to a total of 270 ns of simulation time or 25.9 GPU-hours on a single NVIDIA A100 GPU. The nine systems varied in four ways: the identity of the ligand, the length of the peptide, whether the peptide had a free C-end or not, and the protonation states of three histidines. All other simulation parameters were the same. The same analysis codebase was used for all nine trajectories, with identical definitions and calculations for all reported metrics, which allows for a common footing in analysis of structural stability and intermolecular interactions between the nine systems.
[FOLD] The nine systems, run by run
[TABLE] The nine trajectories: the four variables that change between them, and the two contact metrics and backbone RMSD each produced
| System
| Ligand
| Residues
| C-end
| His+
| Clamp integrity
| Bidentate Arg487
| RMSD Å
| 1–23reference
| BoPEP4
| 23
| free
| 0
| 100.0
| 1.67
| AtPEP1 7–23benchmark
| AtPEP1
| 17
| free
| 0
| 99.9
| 1.17
| 7–23truncation
| BoPEP4
| 17
| free
| 0
| 98.5
| 87.7
| 1.38
| 9–23truncation
| BoPEP4
| 15
| free
| 0
| 77.1
| 46.9
| 2.28
| 15–23truncation
| BoPEP4
| 9
| free
| 0
| 99.9
| 97.2
| 1.81
| 1–23 + 6×Histag
| BoPEP4
| 29
| blocked
| 0
| 99.7
| 2.4
| 1.12
| 1–23pH 5.5
| BoPEP4
| 23
| free
| 3
| 100.0
| 99.9
| 1.34
| 9–23pH 5.5
| BoPEP4
| 15
| free
| 3
| 19.3
| 6.9
| 1.33
| Apo receptorcontrol
| none
| no ligand
| ·
| 0
| ·
## 4.Wild type
The wild-type run served as a comparison and analysis benchmark for the other mutations. We found that the eight N-terminal residues had an average fluctuation above 2 Å. This was consistent with the alanine scan results, which found that mutations to the first six residues had the least penalty in the peptide-receptor docking, indicating a lower contribution to peptide-receptor interaction. All residues past Pro10 had over 75% contact with the receptor, except for Pro19. All residues past Arg11 had under 1 Å fluctuation, except for Lys18. Our conserved window 15-23, defined by aligning sequences from the PEP receptor family, had near 100% contact with mostly sub-Ångström movements. This evidence supports that the N- and C-termini have different behaviours and roles as the N-terminus has greater conformational freedom, while the conserved C-terminus region remains stabilized in contact with the receptor. The conserved residues also form the primary region of the peptide that interacts with the binding pocket, highlighting their importance.
The run also supported our decision to use truncations instead of point mutations. Arg9 has a fluctuation of 1.32 Å and a mean closest approach of 2.79 Å and 100% contact, which explains the sharp jump in the HADDOCK score when removing Arg9. Although Ile2 and Ile4 have contact with the receptor, they have a fluctuation of over 1.5 Å and switch between different locations on the PEPR1 instead of maintaining contact. Adding these residues also necessitates preserving the surrounding disordered residues, which have only about 25% contact with the receptor. The improved binding from adding these residues was not worth the extra sequence length, so we did not pursue the Δ1 and Δ1-3 designs and instead opted for the truncation designs with residues 7 and 9.
[FOLD] Reassessing Arg18 contact network
The MD results also prompted us to reassess the rationale for the K18R substitution. The literature identifies two receptor contacts involving Arg18 in AtPep1: one with Asp348 and another with Phe371. BoPEP4 contains lysine at the corresponding position, and our initial docking poses suggested that Lys18 could reproduce both interactions at approximately crystal-like distances. On this basis, we initially proposed K18R as a way to restore an interaction that was already largely established.
The MD trajectory, however, showed that these contacts were less stable than the docking poses suggested. Asp348 is the primary receptor partner of Lys18, with the next-closest peptide residue remaining 7.87 Å away. Despite this preference, the Lys18–Asp348 contact is present in only 53.7% of frames, with distances ranging from 2.55 to 9.37 Å. By comparison, the Asn23–Arg487 interaction maintains 100% occupancy within a 0.54 Å distance window. Although Lys18 can interact with Asp348, the variation in distance and incomplete occupancy indicate that the contact is not maintained consistently throughout the simulation.
The interaction with Phe371 further illustrates the difference between the static model and the simulated behavior. During the trajectory, Phe371 most frequently contacts Gly20, which remains within 3.69 Å for 84.4% of frames. Lys18, in contrast, has an average distance of 5.12 Å from Phe371 and approaches within 4 Å in only 18.1% of frames. The residue assigned to this interaction in the original docking model therefore does not maintain the contact for most of the simulation. Taken together, these results suggest that the initial docking poses overstated the extent to which Lys18 reproduces the interactions attributed to Arg18 in AtPep1.
This does not rule out K18R as a viable design. Lysine has a shorter side chain than arginine, whose guanidinium group can support the proposed bidentate interaction. The distinction is that the substitution should not be described as simply restoring a contact that is already largely formed in BoPEP4. Rather, introducing arginine is intended to provide the side-chain geometry needed to establish the proposed interaction more effectively. Whether K18R achieves this geometry remains untested and requires a dedicated simulation.
The stability of the Lys18–Asp348 contact also varies with peptide length. In the nine-residue construct, its occupancy increases from 53.7% to 90.1%, suggesting that the surrounding sequence influences how consistently the interaction forms. This difference highlights the importance of evaluating receptor contacts in the context of the complete peptide construct, as changes elsewhere in the sequence can affect the behavior of individual residues.
Overall, the MD results provide a more specific basis for the K18R design. The substitution remains plausible because arginine may support a bidentate interaction that lysine cannot reproduce as effectively. However, the current simulations do not establish that this geometry will form after substitution. K18R should therefore be treated as a design hypothesis to be tested, rather than as a confirmed restoration of an interaction already present in the original BoPEP4 sequence.
## 5.Truncation ladder
[FOLD] An unidentified N-terminal anchor
The 9-23 construct was added to the truncation series to investigate the effects of N-terminal truncation on receptor engagement. It was the least stable of all the untagged constructs. It had 77.1% clamp integrity, formed the bidentate salt bridge in only 46.9% of frames, and had the 81.1% of frames with the distance between Asn23 and Arg487 within the defined cutoff distance. It formed 68.5 contacts in the conserved window compared to 96.5 in the wild type. It had a backbone RMSD of 2.28 Å, the largest of the BoPEP4 trajectories. Although the 9-23 construct passed the acceptance gate, it had all the contact-based metrics lower than the other untagged constructs simulated at pH 7. The bidentate salt bridge transiently dissociated multiple times rather than breaking once and staying broken. It broke 94 times or 22.9% of the trajectory. Each break lasted no longer than 0.68 ns. Asp348 and Phe371 had their contacts shifting between different peptide residues. Overall, these indicated that the interface was engaged, but much more dynamically than in the wild type.
We initially hypothesized that the unusual instability was caused by the novel N-terminus created by the deletion of the first 8 residues. In the 9-23 construct, the positively-charged alpha-ammonium group of Arg9 becomes the new N-terminal residue, which could be forming a new interaction with the receptor. To investigate this possibility, we simulated the 7-23 construct, which moves the free N-terminus to Lys7, which is an internal residue. The interface became much more stable, the clamp integrity jumped to 98.5% from 77.1%, the occupancy of the Asn23-Arg487 interaction rose to 99.9% from 81.1%, and the occupancy of the bidentate salt bridge jumped to 87.7% from 46.9%. The shared 9-23 sequence had its contacts increasing to 151.3 from 128.7. These changes supported the importance of the residues removed in the 9-23 construct, but did not prove that it was due to the charge on the N-terminus. In the 7-23 construct, the alpha-amino group of Lys7 was 7.11 Å away from its closest receptor carboxylate and within 4 Å of it in 0.0% of frames. In the 9-23 construct, the N-terminal Arg9 was within 4 Å of a receptor carboxylate in only 18.5% of frames. The full-length BoPEP4 and the AtPep1 benchmark had little evidence of their N-termini making persistent interactions. The truncation series had revealed an unexpected N-terminal anchor that was not included in the published hotspot list. The side chain of Lys7 formed a salt bridge with Asp129 at 2.81 Å in 98.7% of frames, even when it was the N-terminal residue when the 7-23 construct was simulated. Arg9 contributed to the interaction network in 100% of frames. These identified two N-terminal salt bridges in the BoPEP4 that were not in the published hotspot list and offered an alternative explanation to the instability of the 9-23 construct that did not rely on the introduction of the interaction with the terminal alpha-ammonium group. The instability of the 9-23 construct is more consistent with the removal of the Lys7-Asp129 anchor and retaining the residues 9-14 within the binding interface. This explains why the 9-23 construct was not consistently less stable with decreasing peptide length. Full-length BoPEP4, 7-23, and 15-23 had clamp integrity of 100.0%, 98.5%, and 99.9%, respectively, while the intermediate 9-23 construct had a clamp integrity of 77.1%. This indicates that it depended on which interactions were removed rather than how many residues were remaining. Directly testing the proposed role of Lys7 would be to simulate a full-length K7A mutant. This would remove the proposed side-chain anchor without changing the peptide termini and directly assess its contribution to receptor engagement.
[FOLD] 7–23 as a benchmark for AtPep1
The 7-23 construct offers a more direct comparison to the AtPep1 crystal structure as they both span the same 7-23 sequence and share the same free N-terminus. 15 out of the 17 positions had very similar contact occupancies between the two peptides. The main sequence difference within the published receptor-contact hotspots was that AtPep1 had an Arg18 while BoPEP4 had a Lys18, which is the structural basis for the proposed K18R substitution. There was a difference in the anchoring of the N-termini between the two peptides. AtPep1 used Gln8 to make a contact with Tyr153 at 3.41 Å in 95.8% of frames while Lys7 contributed in only 19.0% of frames. Conversely, BoPEP4 used Lys7 to make a contact with Asp129 at 2.81 Å in 98.7% of frames while Lys8 contributed in only 4.1% of frames. One residue was primarily making the contact at this end of the interface for both peptides, but the anchoring residue and receptor partner was different by both sequence and position. They shared a free N-terminal residue of Lys7 and this comparison is less affected by the difference in the terminal configuration and more directly compares the different interaction networks of the two peptides. This is also seen in the occupancy of the Lys7 contact, which reached 99.9% in the BoPEP4 and only 23.5% in the AtPep1. Otherwise, 7-23 closely recapitulated the binding architecture of full-length BoPEP4. However, it was not entirely similar. The Asn465 hydrogen bond happened in 62.9% of frames compared to 99.8% in wild type and the bidentate salt bridge was occupied in 87.7% of frames compared to 100%. While the 7-23 construct had all the main features of the binding interface, it had a reduction in persistence of some of the interactions. This is important to note when using 7-23 as a benchmark as it offers a similar terminal configuration for comparison, but it does not capture all the interactions seen with full-length BoPEP4.
[FOLD] 15–23 as a negative control
The 15-23 construct was designed to be a negative control as the sequence before it was proposed to be important for stable receptor engagement. Unexpectedly, the peptide was highly organized throughout the simulation. It had a clamp integrity of 99.9%, occupancy of the bidentate salt bridge of 97.2%, and a backbone RMSD of 1.81 Å. The other 9 residues formed 89.6 contacts compared to 96.5 contacts made by the same residues in wild type. Thus, despite the deletion of 14 residues, the construct had ~93% of the contact network of its corresponding sequence in the full-length peptide. However, the dissociation of peptides from a leucine-rich repeat (LRR) ectodomain could have microsecond to millisecond timescales, much longer than the 30 ns trajectories simulated here. The lack of dissociation in the simulation does not prove that the peptide would not eventually dissociate or that its equilibrium affinity is unchanged. Still, it shows that the conserved C-terminal region can maintain an organized binding register for the duration of the simulated trajectory in the absence of the sequence before it.
[FOLD] Implications of the truncation series
The 9-23 construct is especially revealing: deleting the first 8 residues removed the Lys7-Asp129 anchor but left residues 9-14 within the binding interface, where they continued to make contacts with the receptor. By contrast, 15-23 lacks this intervening sequence and nonetheless maintains an organized interaction through its conserved C-terminal contacts.
These results undermine a simple connection between peptide length and binding stability. They point instead to a specific N-terminal interaction network whose contribution depends on the surrounding sequence and on which residues persist after truncation. The proposed role of Lys7 still awaits experimental confirmation or a targeted simulation such as the full-length K7A mutant, whose N-terminus would disrupt the proposed side-chain anchor without affecting the peptide ends, directly testing its role in interface stability.
The truncation series indicates that the conserved C-terminal region forms the structural basis for receptor engagement, while the sequence before it contributes extra interactions that affect the stability and dynamics of the interface.
## 6.pH 5.5
Because conventional molecular dynamics does not dynamically simulate pH, our pH 5.5 condition represents a fixed protonation state intended to approximate the apoplast rather than a constant-pH simulation. Histidine protonation was assigned using model pKa values, with His14 and His22 on BoPEP4 and His227 on PEPR1 carrying positive charges, while all other histidines remained neutral and all Asp and Glu residues remained deprotonated throughout the 30 ns trajectory. No other simulation parameter was changed relative to the wild-type pH 7 run, making the three protonation changes the sole variable in this comparison.
Under this condition, the interaction between peptide Glu12 and receptor His227 was substantially strengthened, with the pair separated by 2.75 ± 0.11 Å in 99.9% of frames compared with 5.33 Å and only 0.8% occupancy at pH 7. This interaction is already present in the AtPEP1 benchmark at neutral pH, where the corresponding pair occurs at 3.36 Å with 76.9% occupancy, indicating that protonation allows BoPEP4 to recover a contact present in its structural benchmark rather than introducing an entirely new interaction. Importantly, this improvement did not compromise the primary C-terminal anchor: clamp integrity remained at 100.0%, the bidentate salt bridge at 99.9%, and the conserved window formed 95.7 contacts with a backbone RMSD of 1.34 Å, the lowest value observed among the untagged constructs that satisfied their acceptance criteria.
This result therefore changes the interpretation of the original sequence difference at Glu12-His227. The lower contact occupancy observed at pH 7 had initially appeared to reflect a sequence-level deficiency in BoPEP4, but the pH-controlled comparison indicates that it was instead a consequence of the protonation state used in the simulation. Because the apoplast is the environment in which the engineered protectant is expected to function, pH 5.5 is therefore a more physiologically relevant default for full-length BoPEP4, with pH 7 retained as the control. At the same time, the trajectory does not support the proposed His14 pH-switch mechanism: His14 remained approximately 6.1 Å from the nearest receptor carboxylate and formed a sub-4 Å contact in 0.0% of frames at either condition. The pH-responsive interaction identified here is instead the Glu12-His227 pair.
[FOLD] Evaluating protonation in the 9–23 construct
Protonation improved the interaction network of full-length BoPEP4 at pH 5.5, raising the question of whether the same effect could improve the stability of the 9–23 construct, which was the least stable untagged peptide at pH 7. To investigate this, we repeated the 9–23 simulation using the same starting coordinates and protonating the same three histidines as in the full-length pH 5.5 simulation, while keeping all other simulation parameters unchanged.
Contrary to the full-length result, protonation further destabilized the 9-23 construct. Asn23-Arg487 remained within 4 Å in only 23.6% of frames, well below the 60% acceptance threshold, while clamp integrity fell to 19.3% and bidentate salt-bridge occupancy to 6.9%, making this the only BoPEP4 trajectory that failed its pre-registered acceptance criteria. The underlying mechanism was a new intramolecular interaction between protonated His22 and the C-terminal carboxylate: this contact occurred at 2.84 Å in 96.9% of frames in 9-23 at pH 5.5, compared with 17.4% at pH 7. For comparison, the corresponding interaction occurred in only 1.1% of full-length frames at pH 7 and increased to 64.7% at pH 5.5 while the full-length clamp remained intact.
Therefore, the combined effect of truncation and protonation is important. Neither condition alone was sufficient to produce the strong self-contact observed in the failed trajectory: truncation increased occupancy from 1.1% to 17.4% at neutral pH, while protonation increased full-length occupancy to 64.7%; only their combination produced the 96.9% occupancy that coincided with collapse of the C-terminal anchor. At the same time, the stabilizing Arg9-Asp179 interaction remained highly occupied in full-length trajectories but decreased to 75.0% in 9-23 at pH 5.5, leaving the shortened peptide sufficiently unconstrained for its C terminus to fold back toward His22. Thus, protonation should not be treated as a universal stabilizing condition across constructs; instead, its effect depends on the interaction network remaining in each peptide.
Two additional observations support this interpretation. First, the newly exposed Arg9 α-amino group remained 6.90 Å from its nearest receptor carboxylate and formed a sub-4 Å contact in only 5.8% of frames, providing further evidence against the proposed terminal salt bridge. Second, although protonation restored the Glu12-His227 interaction to 99.9% occupancy in full length, the same pair reached only 26.4% in 9-23, indicating that protonation alone cannot stabilize an interaction when the upstream peptide sequence required to position it has been removed.
loading…
time
  0.00 ns
Asn23 to Arg487
  —
clamp, 4 contacts
  —
## 7.Apo receptor
To determine whether peptide binding itself produced measurable conformational changes in PEPR1, we also simulated the receptor without peptide using chain A from the wild-type complex and otherwise identical conditions. Contrary to the expectation that the unbound receptor would become substantially more flexible or that its binding groove would partially collapse, the apo receptor remained structurally comparable to the peptide-bound trajectories.
The apo receptor had the lowest mean Cα RMSD of all nine simulations at 1.57 Å, compared with 1.58-2.16 Å across the peptide-bound runs, while its groove span was 35.91 Å compared with 35.65-36.42 Å for the bound structures. Its per-residue flexibility profile also correlated strongly with the wild-type profile at r = 0.94-0.97. Moreover, the 54 interface residues shifted by only +0.125 Å relative to wild type, compared with +0.156 Å for the remaining 656 residues, with the largest differences occurring at residues 41-55, which constitute the N-terminal cap of the ectodomain, and with residue 738, the final residue, being the most rigid in the structure. Both observations reflect chain-end effects distant from the binding groove. Thus, within the 30 ns simulation window, we found no evidence for a substantial peptide-induced conformational change in the receptor.
This provides both a structural and methodological control. The pre-formed groove supports representing the binding surface using a mean receptor structure rather than assuming that ligand binding creates the pocket. More importantly, the apo trajectory establishes a noise floor against which receptor-side differences can be interpreted: the seven peptide-bound runs differed from one another by 0.59 Å in receptor Cα RMSD, while the apo trajectory was only 0.01 Å below the steadiest bound trajectory. Because changing the peptide produced more receptor-side variation than removing it entirely, we do not interpret small receptor RMSD or flexibility differences as evidence that BoPEP4 stabilizes PEPR1. Instead, our comparisons remain centered on peptide-side contact geometry.
## 8.Overall
The combined trajectories demonstrate why RMSD and aggregate structural measures are insufficient for ranking these constructs. Across the eight peptide-containing runs, backbone RMSD over the conserved window correlated only weakly with the bidentate Arg487 salt bridge, with Pearson and Spearman coefficients of +0.13 and +0.29, respectively, while correlations with clamp integrity were −0.03 and −0.07.
The individual trajectories illustrate this more clearly: the tagged construct and 9-23 at pH 5.5 had the two lowest RMSDs, at 1.12 Å and 1.33 Å, yet their bidentate salt bridges were occupied in only 2.4% and 6.9% of frames, whereas 15-23 had a higher RMSD of 1.81 Å but retained the salt bridge in 97.2% of frames. Contact count performed relatively better, with a Spearman correlation of +0.71 across the seven untagged runs, but this comparison is based on only seven trajectories and is strongly influenced by individual constructs. Together with the earlier docking-score analysis, these results support using named atom-pair criteria rather than aggregate scores to determine whether a construct retains the intended binding chemistry.
In other words, overall structural stability was largely independent of whether the key binding interaction remained chemically intact.
## 9.Limitations
The 30 ns timescale constrains what can be inferred about binding strength. While the 30 ns snapshot of each peptide-receptor complex illustrates how each peptide-peptide complex evolved during the simulation, these timescales are too short to capture many protein-peptide dissociation events which occur on several orders of magnitude longer timescales. Thus, a peptide occupying the binding groove during the course of the trajectory does not imply strong binding or stability during longer timescales. Moreover, these results should be interpreted as the structural persistence during the simulation period and not as evidence of stability during longer timescales. To further directly address binding strength, longer simulation times, independent sampling, and additional free energy calculations or experimental measurements may be required.
The absence of replicate simulations constrains the reliability of construct comparisons. Each system was simulated with a single trajectory and thus a single set of initial velocities and relaxation pathways. These molecular systems can relax along different pathways even when they share similar initial structures and are simulated with the same parameters. Differences in contact occupancy, backbone fluctuation, or structural integrity could therefore be an outcome of variance rather than a true consequence of peptide design. For example, a given contact may be less persistent in one construct and behave differently in another independent trajectory. Simulating each system with multiple independent seeds will help ascertain whether the observed behaviors are generalizable and if the differences between constructs are robust.
The acceptance criteria demand particular care when comparing the tagged and untagged constructs. The original acceptance criteria were set before the simulation of the C-terminal histidine-tagged construct and were set around the interactions present in the untagged peptide, the interaction between the free C-terminal carboxylate of Asn23 and Arg487 on PEPR1. Adding six histidines C-terminal to Asn23 alters this C-terminal chemistry, Asn23 is no longer the free C-terminus and the original interaction cannot be assessed in the same manner. Thus, while the trajectory with the C-terminal histidine-tag is still usable, the acceptance criteria cannot be applied to this construct in the same manner as the untagged constructs without further consideration for this changed chemistry. The acceptance criteria should be revised to differentiate between interactions that are still pertinent after the addition of the histidine-tag and those that rely on the native free C-terminus.
The acidic-pH simulations denote a specific model rather than a comprehensive simulation of pH-dependent behavior. For the pH 5.5 simulations, His14, His22 on BoPEP4 and His227 on PEPR1 were assigned a positive charge based on their estimated pKa and all other histidines were assigned a neutral charge which was held fixed throughout the trajectory. This approach allowed us to observe how the complexes interacted under a specific set of protonation states, but did not permit residues to dynamically gain or lose a proton when their local environment changed. For example, the interaction observed between Glu12 and His227 provides the potential for a pH-dependent interaction under these conditions, but does not prove how this interaction behaves under the full set of conditions found in the plant apoplast. This constraint is pertinent to the tagged construct which had its histidines modeled as neutral even under the acidic condition. These residues can have different protonation states under an acidic condition and this simulation does not comprehensively demonstrate how the tag behaves under its intended conditions. Additional findings with more suitable tag protonation designations or a constant-pH simulation scheme may help resolve this uncertainty.
## 10.Application of results
#### Wetlab
The protein design workflow chart connects the computational findings to the experiments that follow because simulations can help identify which design changes are worth testing, but their predicted stability must ultimately be evaluated through biological experiments. For the histidine-tagged construct, the results informed the decision to move the purification tag to the N-terminus before expression, preserving the native C-terminal chemistry implicated in receptor binding. Similarly, the relatively consistent contact network across the longer and shorter constructs raised the possibility that truncation could reduce the peptide's production burden without eliminating its key interactions. This remains a manufacturability hypothesis, however, and will be tested through secretion assays comparing the truncated constructs with wild-type BoPEP4. These experiments will determine whether the computationally identified designs can be produced and secreted effectively in practice.
#### Worked case
The Peptide Design page (following BoPEP4 residue-level detail) links the results of the simulations to the specific interactions of interest for receptor binding. The MD trajectories highlight the difference between sustained and transient interactions, with comparisons to AtPep1 offering context for the differences observed at the binding interface. This page integrates these results with the per-residue per-interface data and the constructs that have been ordered for validation, outlining how the authors' knowledge of individual residue interactions guided their peptide design. The simulations offer a molecular-level explanation for why certain residues and truncation points were favored in the peptide designs, while the peptide design record explains how the simulation results informed the construction of the specific constructs.
## References
- Tian, C. et al. ff19SB: amino-acid-specific protein backbone parameters trained against quantum mechanics energy surfaces in solution. Journal of Chemical Theory and Computation 16, 528 to 552 (2020).
- Izadi, S., Anandakrishnan, R. & Onufriev, A. V. Building water models: a different approach. Journal of Physical Chemistry Letters 5, 3863 to 3871 (2014). OPC.
- Tang, J., Han, Z., Sun, Y., Zhang, H., Gong, X. & Chai, J. Structural basis for recognition of an endogenous peptide by the plant receptor kinase PEPR1. Cell Research 25, 110 to 120 (2015). PDB 5GR8.
