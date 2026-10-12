[IMG]
# MEASUREMENTS
Abstract Introducing RNAi to baker’s yeast to minimize animal testing RNA-induced silencing complex (RISC) pathway A three plasmid system to enable fluorescence-based siRNA evaluation in yeast Experiments and Methods Results Further advancements of the yeast siRNA assay
## ABSTRACT
Utilizing the biotechnological potential of Saccharomyces cerevisiae, we aim to combat the detrimental effects of the Deformed wing virus (DWV) in honey bees by supplementing the bees with antiviral short interfering RNAs (siRNAs) produced in engineered yeast. Despite strong efforts in computational evaluation of siRNA efficiency (Knott et al., 2014), the designed siRNAs must still be experimentally tested to achieve high efficiency suppression of gene expression. We designed an experimental approach for rapid, quantitative and cheap evaluation of shRNA activities in yeast.
S. cerevisiae does not have the RNA interference (RNAi) machinery, but by introducing the AGO1 and DCR1 genes from Saccharomyces castellii into baker's yeast (Drinnenberg et al., 2009), we enabled siRNA production in this model organism via the RNA-induced silencing complex (RISC) pathway. Additionally, a novel RNAi efficiency readout was established by fusing the siRNA targets to green fluorescent protein (GFP) coding sequence, facilitating real-time efficacy visualization. This approach promises immediate, quantifiable siRNA assessment, cost-efficiency, scalability, and circumvents ethical concerns associated with animal testing. While we use this approach to address the global bee population decline caused by DWV, this system could be modified to optimize shRNAs or siRNAs for any desirable target.
## Introducing RNAi to baker's yeast to minimize animal testing
Honey bees, indispensable to both agriculture and natural ecosystems, are besieged by pathogens such as the Deformed wing virus (DWV). This virus compromises the bee’s wing integrity, curtails their lifespan, and causes downfall of bee populations worldwide. As a counteractive measure to protect the bees, our exploration delves into the potential of using exogenous siRNAs to inhibit viruses. These small RNAs target and drive the degradation of DWV RNA, thereby inhibiting its replication. We utilize Saccharomyces cerevisiae, commonly known as baker's yeast, to produce siRNA targeting DWV.
Establishing a robust and reliable testing system is paramount to screen for efficient siRNAs. While animal testing provides a more accurate physiological context, it is time-consuming, expensive and should be minimized whenever alternative options are possible. Furthermore, in case when viruses are studied, it is important to use methods that do not require working with a replication-proficient virus due to safety concerns. To provide an alternative to animal testing in siRNA optimization, we introduced the RNAi machinery and the viral target sequences in yeast S. cerevisiae.
Our approach involves the fusion of a siRNA target with GFP coding sequence, positioned immediately after the GFP stop codon. This construct provides a real-time visual cue: a decrease in GFP fluorescence is indicative of the siRNA action, facilitating both swift and precise assessments of its efficacy. Furthermore, using yeast as a tool, with its cost-effectiveness and reputation as a stalwart model organism, streamlines the testing of diverse siRNA sequences and enables upscaling the number of tested sequences. This approach circumvents the ethical quandaries linked to animal testing and promises a stable, consistent environment for experimentation.
## RNA-induced silencing complex (RISC) pathway
S. cerevisiae offers vast biotechnological potential. However, its native genetic repertoire lacks genes for siRNA processing. To overcome this limitation, we turned to another yeast species, Saccharomyces castellii that has inherent RNAi machinery (Drinnenberg et al., 2009).
Central to this pathway are two genes: DCR1 and AGO1. DCR1 encodes for Dicer, an enzyme that processes long double-stranded RNAs (dsRNAs) or short hairpin RNAs (shRNAs) into siRNAs. These siRNAs then associate with the Argonaute protein, the product of the AGO1 gene, to form the core of the RNA Induced Silencing Complex (RISC). Once activated, this complex guides the siRNAs to their complementary mRNA targets, orchestrating the subsequent degradation of these mRNAs.
Our strategy to achieve a siRNA validation method in yeast was to integrate these two genes from S. castellii into S. cerevisiae. This genetic engineering constituted the RISC pathway in S. cerevisiae, enabling it to produce siRNAs and mediate targeted RNA degradation.
## A three plasmid system to enable fluorescence-based siRNA evaluation in yeast
Our novel system for siRNA production and evaluation in S. cerevisiae uses three plasmids, designed to address both the synthesis and assessment of siRNAs against DWV in honey bees.
- Plasmid 1 - siRNA Production and Target Silencing Machinery: This plasmid houses the genes that form the RISC complex (Fig. 1):
- AGO1 gene, positioned under the control of the pPGK1 promoter. As a constitutive promoter, pPGK1 ensures the consistent expression of Ago1, an essential component of the RISC complex.
- DCR1 gene, driven by the pTEF1 promoter. pTEF1 mediates uninterrupted synthesis of the Dicer enzyme, which processes precursor RNA molecules into siRNAs.
[IMG]
Figure 1. Multigene cassette for Argonaute and Dicer expression in yeast.
- Plasmid 2 - Target Visualization Reporter: Based on the pRS304 yeast vector, this plasmid serves as our real-time assessment tool. It consists of the GFP (Green Fluorescent Protein) coding sequence with the desired siRNA target sequence located in its 3’-UTR. This target sequence is positioned between the GFP STOP codon and the tCYC1 terminator. The GFP target expression is regulated by the pGAL1 promoter, which can be induced by galactose. Thus, upon induction, the mRNA containing the GFP and the siRNA target sequences is expressed. A decrease in GFP fluorescence indicates successful siRNA targeting and action, providing a quantitative visual proxy for siRNA activity.
[IMG]
Figure 2. Expression cassette for fusion transcript of GFP and the predicted siRNA target site in yeast to monitor siRNA efficiency. The siRNA target sequence of interest is added downstream of the STOP codon of GFP in the 3’ UTR of the transcript.
- Plasmid 3 - shRNA Production: This plasmid is dedicated to producing the specific shRNA designed to target DWV. The shRNA sequence is controlled by the pGAL1 promoter, ensuring that siRNA production is synchronous with the expression of the GFP target fusion, allowing for simultaneous production and evaluation (Fig. 3).
[IMG]
Figure 3. Galactose-inducible expression cassette for shRNA in yeast.
In summary, this tri-plasmid system ensures a seamless integration of both siRNA production machinery and real-time evaluation within S. cerevisiae. By leveraging the consistent expression from constitutive promoters for the RISC pathway components and the inducible nature of the pGAL1 promoter for synchronous siRNA and target production, we have established a robust, cost-effective, and scalable platform to screen shRNAs.
## Experiments and Methods
### Plasmid construction
#### Plasmid 1 - siRNA Synthesis Machinery
The genes required for siRNA synthesis were ordered as synthetic DNA from Twist Bioscience.We recommend ordering these fragments with predefined BsaI and BsmBI overhangs, as described in the MoClo kit by Lee et al., 2015. This approach streamlines the process and minimizes the need for additional steps like introducing overhangs via PCR. As synthetic gene fragments are limited to a maximum length of 1800 bp, the coding sequence of Ago1, which is 3900 base pairs long, had to be divided into three separate fragments. These fragments were arranged in the correct order and designed with overhangs that corresponded to the type 3a, 3b, and 4a elements specified in the MoClo kit Prior to further manipulations, the synthetic DNA was cloned via blunt end ligation into pUC19 (Fig. 4). pUC19 allows for blue-white screening to select the correct colonies. Additionally, blunt-end ligations typically require smaller amounts of DNA and provide a backup option in case the cloning needs to be repeated.
[IMG]
Figure 4. Blunt-end cloning of AGO1 and DCR1 coding sequences to pUC19.
The gene fragments were ligated to SmaI-digested pUC19. The transformants were plated on X-GAL+IPTG containing plates to allow blue-white screening for colonies that contained the inserts.
Then, the AGO1 and DCR1 gene fragments were assembled into pYTK001 plasmid from Mo-Clo kit (Fig. 5). Utilizing plasmids as DNA fragment sources for Golden Gate assembly has proven to be more efficient than using PCR fragments.
[IMG]
Figure 5. Cloning of DCR1 and AGO1 gene fragments to Mo-Clo kit plasmid.
To create the yeast expression plasmid for AGO1 and DCR1 we utilized the Mo-Clo kit for Golden Gate assembly due to its rapid and versatile capability for one-pot assembly of multiple DNA fragments. Initially, DCR1 and AGO1 were assembled into their respective transcriptional units (TUs), along with an integration cassette as shown in Table 1.
Table 1. Mo-Clo parts used in the Golden Gate assembly
| DCR1 TU
| AGO1 TU
| Integration cassette
| pYTK003
| pYTK002
| pYTK008
| pYTK013
| pYTK011
| pYTK048
| pYTK001-DCR1_type3
| pYTK001-AGO1_type3a
| pYTK073
| pYTK054
| pYTK001-AGO1_type3b
| pYTK075
| pYTK072
| pYTK001-AGO1_type4a
| pYTK087
| pYTK075
| pYTK064
| pYTK089
| pYTK087
| pYTK067
| pYTK093
| pYTK090
| pYTK076
| pYTK093
| pYTK088
| pYTK090
| pYTK094
AGO1 and DCR1 TUs and the LEU2 integration cassette were then combined together in another Golden Gate reaction, resulting in a single plasmid that can be used for integration of both AGO1 and DCR1 expression cassettes into yeast genome (Fig. 6).
[IMG]
Figure 6. Golden Gate assembly to construct a yeast integration vector with both DCR1 and AGO1 expression cassettes.
#### Plasmid 2 - Target Visualization Reporter:
The PCR cloning strategy was used to introduce the siRNA target sequences to the GFP reporter construct (Fig. 7). The target sequences are inserted downstream of the EGFP STOP codon, in the 3’ UTR of the transcript.
[IMG]
Figure 7. Full plasmid PCR cloning to introduce siRNA target sequences to the GFP reporter.
The target sequences are introduced as 5’ overhangs in the PCR primers. A pRS304-based plasmid containing pGAL1-EGFP-tCYC1 cassette is PCR-amplified, followed by product phosphorylation, ligation and transformation into E. coli. The E. coli colonies are validated by sequencing to contain the intended RNAi target sequence.
#### Plasmid 3 - Plasmid 3 - siRNA Production:
The sense-loop-antisense sequences of the shRNAs were ordered as separate DNA oligonucleotides for each strand and were annealed before the Golden Gate assembly (Fig. 8A). Each oligonucleotide included an overhang from its 5'-end to ensure correct assembly into the pYTK001 entry vector using the BsmBI restriction enzyme. The hairpin shRNA sequence replaced the GFP expression cassette in pYTK001, and after assembly, it fell into the part 3 category. Upon transformation with the Golden Gate reaction mixture, bacterial colonies carrying correctly assembled pYTK001-shRNAs displayed a white coloration, in contrast to green colonies carrying initial pYTK001 entry vectors. In expression vectors, shRNA were cloned under the control of an inducible pGAL1 promoter in 2μ-based plasmid. The expression vectors were assembled with the BsaI restriction enzyme (Fig. 8B).
[IMG]
Figure 8. Golden Gate assembly to make the shRNA expression vector. (A) First, the DNA oligonucleotides for the shRNA are annealed and assembled with pYTK001. (B) shRNA expression plasmid was assembled using BsaI restriction enzyme from pYTK001_shRNA and indicated standard MoCLo kit parts.
## Results
We used flow cytometry to measure the GFP fluorescence intensities in yeast cultures 24h after inducing the expression of shRNA and the GFP-target sequence reporter. In the absence of shRNA, the GFP-reporter-expressing cultures showed much higher GFP signal in comparison to background fluorescence of non-induced cultures, confirming sufficient expression of the reporter protein (Fig. 9). It is noteworthy that fluorescence intensities among different GFP-target constructs significantly varied, suggesting that the viral sequence introduced into the 3'-UTR of the transcript may influence mRNA stability (not shown). Reduced mRNA stability, in turn, leads to impaired translation and decreased GFP fluorescence. For this reason, to compare the impact of shRNAs on GFP reporter expression, we normalized the GFP fluorescence for each strain with shRNA to the data obtained for its parent strain without shRNA expression. Out of seven tested shRNAs, four showed statistically significant decrease in fluorescence levels, as determined by Two-sample Two-tailed Student’s T-test with unequal variances (p-value at least less than 0.05) (Fig. 9).
[IMG]
Figure 9. Expressing shRNAs in the engineered RNAi-capable yeast enables testing of siRNA activities. Plot showing the mean GFP fluorescence intensities of a population of cells expressing the indicated shRNA and the GFP reporters, measured by flow cytometry 24h after induction. The GFP fluorescence data presented was normalized to cells expressing the GFP reporter, but not shRNAs. The mean with standard deviation from 3 biological replicates for each shRNA variant is shown. Error bars indicate standard deviation. Statistical analysis (Two-sample Two-tailed Student’s T-test with unequal variances) was performed. Not Significant (NS) - p-value > 0.05; * - p-value ≤ 0.05; ** - p-value ≤ 0.01; *** - p-value ≤ 0.001.
## Further advancements of the yeast siRNA assay
The initial experiments confirmed the potential of using this engineered yeast to characterize siRNAs, and they also revealed multiple aspects that could be modified to improve the method.
In the presented experiments, EGFP was used as the reporter protein. However, the half-life of EGFP in the cell is several hours. This creates a delay in GFP signal loss upon siRNA expression and mRNA degradation. When more rapid responses are of interest, EGFP in our system could easily be replaced by destabilized GFP (Li et al., 1998). This modification could further streamline the shRNA validation process in yeast.
In the current system, both shRNA and the GFP reporter are expressed from pGAL1 promoter, as was done in Drinnenberg et al 2009. However, it is advisable to employ distinct inducible promoters for shRNA and GFP to enable separate control over their expression within the same strain. This approach allows for the independent regulation of shRNA and GFP in response to specific experimental conditions or needs. With the current single promoter design, different strains must be used to obtain the reporter fluorescence signal without RNAi. Utilizing distinct promoters would enable the use of a single strain in which reporter expression can be independently induced from shRNA expression, simplifying the process of measuring uninterrupted reporter expression and streamlining the methodology.
While the first round of experiments confirmed efficient RNAi by the tested shRNAs, we were not able to detect quantitative differences in the efficiencies of these shRNAs, because most of them caused comparative partial suppression of the GFP reporter (Fig. 9, fluorescence dropping to GFP negative background level). In these strains shRNAs are expressed from a high copy number 2μ plasmid, which ensures extremely high expression. In future experiments, we could consider expressing shRNAs from a CEN plasmid, which exists in lower numbers within yeast cells, thereby resulting in reduced shRNA expression. This way the method could be more sensitive to quantitative differences in shRNA efficiency.
When combined with fluorescence-activated cell sorting and next generation sequencing, our method could be taken further to do high-throughput pooled screening of shRNAs. For example, a longer segment of the target sequence could be tiled with shRNAs and the resulting sequences could be ordered as a DNA oligonucleotide library. This library would be cloned to the shRNA expression plasmid as described above and transformed to yeast. However, instead of measuring the GFP expression suppression of single shRNAs, the pooled yeast library would be subjected to fluorescence-activated cell sorting and the cells driving the strongest GFP suppression would be quantified by next generation sequencing. This would allow rapid high-throughput quantitative characterization of shRNA efficiencies in a simple model organism.
Drinnenberg, I. A., Weinberg, D. E., Xie, K. T., Mower, J. P., Wolfe, K. H., Fink, G. R., & Bartel, D. P. (2009). RNAi in Budding Yeast. Science, 326(5952), 544–550. https://doi.org/10.1126/science.1176945
Knott, S. R. V., Maceli, A. R., Erard, N., Chang, K., Marran, K., Zhou, X., Gordon, A., ElDemerdash, O., Wagenblast, E., Kim, S., Fellmann, C., & Hannon, G. J. (2014). A Computational Algorithm to Predict shRNA Potency. Molecular Cell, 56(6), 796–807. https://doi.org/10.1016/J.MOLCEL.2014.10.025
Lee, M. E., DeLoache, W. C., Cervantes, B., & Dueber, J. E. (2015). A Highly Characterized Yeast Toolkit for Modular, Multipart Assembly. ACS Synthetic Biology, 4(9), 975–986. https://doi.org/10.1021/sb500366v
Li, X., Zhao, X., Fang, Y., Jiang, X., Duong, T., Fan, C., Huang, C. C., & Kain, S. R. (1998). Generation of destabilized green fluorescent protein as a transcription reporter. The Journal of Biological Chemistry, 273(52), 34970–34975. https://doi.org/10.1074/JBC.273.52.34970
[IMG]
