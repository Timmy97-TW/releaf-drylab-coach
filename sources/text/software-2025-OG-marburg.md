0%
[IMG] Banner
# Contents
## Abstract
## Introduction
## AntiSMASH
## PARAS
## Chai-1
## GetContacts
## Our Structure prediction pipeline
## Improving Domain Extraction
## Generating substrate SMILES
## Defining constraints
## Automated Structure Prediction
## Analyzing interactions
## Outlook
## Key Points
## Abstract
## Introduction
## Application in mATChmaker
## Results
## Outlook
# Software
## mATChmaker
Nonribosomal peptide synthetases (NRPSs) and their modular recombination hold great potential for discovering novel antimicrobial compounds. However, this approach is fundamentally limited by one key challenge: predicting which module combinations will yield a functional enzyme complex.
We observed the same limitation in our project — while we successfully generated numerous hybrid NRPSs, many failed to produce detectable peptides. Specifically, during our first attempt at derivatization by Golden Gate cloning, only 27 % of combinations were catalytically active. Knowing beforehand which units work together and which do not would save us and other researchers a lot of time and resources and this is why we developed mATChmaker - a software tool to guide NRPS hybrid design.
mATChmaker explores two strategies to facilitate hybrid NRPS design. Since closely related clusters tend to recombine more successfully, the tool helps assess how similar two NRPS clusters are. The phylogenetic analysis of our library already proved that using related clusters greatly increases engineering success rates.
Furthermore, as the condensation reaction is the heart of peptide synthesis, the formation of the condensation complex seems to play a critical role in hybrid NRPS functionality. Our structural pipeline greatly facilitates the 3D structure prediction of condensation complexes including their substrates, enabling experimental design and model-building for a more mechanistic understanding of NRPS unit incompatibility.
[IMG] Fig. 1
🔍
[CAPTION] Fig. 1: 3D structure of a condensation complex predicted by our pipeline.
During the integration of bioinformatic tools into our pipelines, we encountered many problems with dependency conflicts and requirements for specific operating systems. Some programs could take our drylab team members a day to install correctly, meaning that they are essentially inaccessible to people without coding experience. To make our drylab work easily available to future iGEM teams and researchers, we developed our software tool mATChmaker.
At its core, mATChmaker is built on a Docker-based architecture, ensuring that every user, regardless of operating system, can run the same environment without dependency management. The Docker image, based on Ubuntu 20.04, comes pre-configured with all required libraries (Python, Biopython, RDKit, Clustal Omega, OpenBabel, and others) as well as multiple conda environments for specialized tasks such as paras and GetContacts. This setup offers a set of key advantages that are crucial in making sure that our software tool can reach a wide and diverse user base:
First, mATChmaker ensures cross-platform compatibility. Because the entire system runs inside a Docker container, it behaves identically on Windows, macOS, and Linux. All dependencies and libraries are pre-installed, ensuring that analyses yield the same results regardless of the user’s operating system.
This also means that the user does not need to manually install the constituent bioinformatic tools included in the pipelines - the installation of Docker and mATChmaker already covers everything! There are step-by-step guides for both these installations, on our gitlab. After the first installation, starting up the program only takes a minute.
To ensure a user-friendly experience, a simple and intuitive menu-driven command-line interface guides the user through the available options such as the T-TE phylogenetics analysis and the condensation complex structure prediction. The interface also offers the option to use PARAS (an A domain specificity predictor) and getcontacts (a tool to extract interactions from protein structures) separately from the structure prediction pipeline. This design makes the tool accessible even to users with no prior Python experience.
Since mATChmaker unifies both pipelines into one software, it eliminates the need for separate installations or configurations. More advanced users can use a Jupyter Notebook interface to combine different parts of our pipelines and integrate their own functions by adding new Python scripts under workspace/utils/ and calling them in main.py. More information about this is given in our developer’s guide , which was specifically tailored towards more experienced bioinformaticians eager to use our tool. The modular design of our software allows rapid integration of additional algorithms, visualization tools, or data-processing utilities.
Both pipelines require no further input than GenBank files annotated by antiSMASH, which represents the state of the art in secondary metabolite research. All results are automatically stored in structured directories under workspace/results/ and include log files for reproducibility and traceability. All directories that are part of our software tool are accessible both from within the Docker and in the regular file system of the user’s computer.
The tool is designed to efficiently handle high-throughput analysis. For both T-TE analysis and structure prediction, users can input entire folders of GenBank files, enabling automated high-throughput analysis of multiple sequences or complexes in a single run. This reduces manual effort and accelerates data processing for large projects.
You can find the tool in the GitLab Repository. Our documentation contains all information needed for installing and using our software tool. To see mATChmaker in action, you can watch the video below.
Please click on one of the buttons below to learn more about our phylogenetic approach for donor module selection or our structural prediction pipeline!
## Key Points
The sequence similarity scores of clusters based on T-TE regions are a very good predictor of NRPS unit compatibility.
The phylogenetics pipeline of mATChmaker is the first tool that enables rational selection of donor units for NRPS engineering.
## Abstract
Since closely related NRPS clusters are more likely to form functional hybrids when combined, we saw a great potential in using phylogenetics to guide NRPS hybrid design. However, this is complicated by the many natural recombination events that NRPS undergo frequently[1]. To our knowledge, no comprehensive workflow yet uses phylogenetics to predict module compatibility - a gap mATChmaker closes by providing an easy-to-use tool for selecting compatible NRPS units.
## Introduction
As we explain on our Phylogenetics page the key idea we came up with was to use the thioesterase (TE) domains as phylogenetic marker to assess the relatedness of entire NRPS clusters. To validate this strategy, we consulted Prof. Dr. Georg Hochberg, an expert in evolutionary biochemistry, who endorsed the approach and confirmed that TE domains are particularly suitable for this purpose. Since TE domains typically occur only once per NRPS, they avoid duplication events common in other domains such as adenylation domains, which can complicate phylogenetic mapping.
During our cluster selection process, we filtered NRPS clusters by the amino acids incorporated by their A domains. For each A domain specificity that we wanted to represent in our donor units, we compared the TE domain sequences of all relevant clusters and built a phylogenetic tree. Based on this, we chose units from clusters that were closely related to the NRPS that we wanted to derivatize - the chaiyaphumine synthetase.
## Application in mATChmaker
Although this selection of donor modules already greatly improved engineering success, we soon realized that phylogenetic trees were not the ideal tool for our analysis. While they allow a more complete overview of the relations of all NRPS clusters present in the tree, we were only interested in the relatedness to our reference NRPS chaiyaphumine synthetase. Therefore, we pivoted to sequence similarity scores, which provide a simple and quantitative measure of relatedness. We also decided to include the final T domain, which is also not often involved in recombination events, in our sequences together with the TE domain. We will call this the T-TE region.
mATChmaker automatically extracts these T-TE regions from GenBank files that were created with antiSMASH, the standard tool for genome mining and annotation in secondary metabolite research[2]. Because the TE domains were not always included in the standard antiSMASH annotations, our software uses the Protein Family (Pfam) annotations to find all TE domains in a file and extract the sequence from the terminal T domain. On the antiSMASH website, GenBank files with Pfam annotations can be easily created - we recommend pressing the ‘All on’ button in the ‘Extra features’ section to make sure that all needed annotations are included.
mATChmaker then compares this sequence with the T-TE extraction of a reference file. In our case, this would be a GenBank file of the chaiyaphumine synthetase, but users can easily provide their own file if they want to derivatize a different NRPS. Using the Clustal Omega algorithm[3], it aligns the two sequences and calculates a sequence similarity score.
The software also extracts the ‘monomer pairings’ from the antiSMASH annotations - these are the amino acids incorporated by the A domains of each cluster. This directly enables the user to identify promising donor units by looking for clusters that incorporate a given amino acid and have a high T-TE sequence similarity with the provided reference file. An exemplary output is provided in Tab. 1.
Tab. 1: Sample output from mATChmaker. The xentrivalpeptide and xenobactin synthetases were analyzed with the chaiyaphumine synthetase as reference. If multiple NRPS clusters are present in one GenBank file, mATChmaker tries to distinguish them using the ‘NRPS proto-core’ annotations provided by antiSMASH. However, proto-cores can sometimes still contain multiple NRPS or overlap. To ensure expected behavior, we recommend that all provided input files contain only one NRPS cluster and one TE domain.
| File Name
| File Locus
| RegionID
| Monomer Pairing
| CDS_locus_tag
| TTE Length
| TTE Sequence
| Similarity
| Reference.gb
| Xenorhabdus_sp._PB61.4_-_Chaiyaphumine
| proto_core_1
| Thr → Thr | Phe → D-Phe | Ala → D-Ala | Pro → Pro | Trp → Trp
| ctg207_14
| 325
| QLCAIWQDILELGRV…
| REFERENCE
| Sample_1.gb
| Xenorhabdus_sp._KK7.4_-_Xentrivalpeptide
| proto_core_1
| val → val | thr → thr | phe → D‑phe | pro → pro | val → val | val → val | val → val
| XEKKV2_12065
| 325
| QLCAIWQDILALERV…
| 87.07692
| Sample_2.gb
| Xenorhabdus_sp._KK7.4_-_Xenobactin
| proto_core_1
| thr → thr | X → X | thr → thr | val → D‑val | ile → D‑ile | leu → leu
| XEKKV2_11980
| 327
| QLCAIWQDILGLKQV…
| 62.15385
## Results
We used this pipeline to calculate a T-TE sequence similarity score for all the clusters that our donor units originated from compared with the chaiyaphumine synthetase. Even though the donor units were already chosen based on phylogenetic criteria, the sequence similarity scores still varied significantly, ranging from 15 % to 100 % (for units directly taken from the chaiyaphumine synthetase). The reason for this is that many amino acids are not incorporated by any NRPS that are closely related to the chaiyaphumine synthetase, requiring us to choose units from more distant relatives.
When we compared these similarity scores to our experimental results, we noticed a very clear trend. The higher the T-TE sequence similarity score between a donor and Chaiyaphumine, the more likely the donor was compatible and a hybrid NRPS was successfully produced (Fig. 2). This strong correlation shows that sequence similarity scores are indeed a useful rationale to select units for NRPS reprogramming.
[IMG] Fig. 2
🔍
[CAPTION] Fig. 2: Higher T-TE Sequence Similarity Correlates with Increased Success in NRPS-Derived Peptide Production.
## Outlook
Although we showed empirically that the T-TE sequence similarity pipeline included in mATChmaker can be helpful in selecting clusters that work well together in NRPS engineering, the phylogenetic approach cannot provide any insight into the mechanistic reasons for NRPS unit incompatibility. This is why we also developed a structural prediction pipeline as a part of mATChmaker. You can read more about this Structural approach by clicking here.
## Key Points
Establishment of a pipeline for the 3D structure prediction of condensation complexes.
Creation of over 2000 structures representing condensation complexes of NRPS assemblies from our lab.
## Abstract
Modern bioinformatic tools that facilitate genome mining, annotation and substrate prediction have greatly advanced NRPS research. mATChmaker combines these tools with in silico NRP synthesis to predict intermediate products of NRPS systems and to create high-throughput 3D structures of condensation complexes. This pipeline provides structural insights to address the problem of NRPS unit incompatibility.
This text relies heavily on our page on NRPS domains and condensation complexes. We recommend that you read that page before proceeding with this one.
## Introduction
As we showed in our project, the phylogenetic relation of T-TE regions shows a strong correlation with NRPS unit compatibility and can be used successfully to select units that have a high chance of working well together. Nonetheless, this approach has two short-comings. First, concentrating on only a handful of clusters that have a high T-TE sequence similarity to a given reference cluster (in our case, the chaiyaphumine synthetase) reduces the accessible chemical space since some amino acids might not be incorporated by any of the available A domains. In our case, this meant that the donor NRPS units for some of our amino acids had to originate from clusters that were only distantly related to the chaiyaphumine synthetase, even though those led to worse results. Secondly, the T-TE phylogenetics approach provides no mechanistic insight into the reasons why NRPS units are not compatible, since the T-TE domain similarity scores are only a proxy for the overall relatedness of two clusters.
While the T-TE phylogenetics tool included in our software can be used directly to support the wetlab work of future iGEM teams, we also wanted to lay the groundwork for future drylab projects that aim to address NRPS unit compatibility. This pipeline offers a structure-based approach by enabling the high-throughput prediction of condensation complexes including substrate-protein interactions, allowing for an analysis of both domain incompatibility and substrate incompatibility. To implement such a pipeline we had to make use of several already available bioinformatic tools, which will be explained in the following paragraphs:
### AntiSMASH
AntiSMASH is a genome mining and annotation tool specialized for the detection of gene clusters for the biosynthesis of secondary metabolites (which include NRPs)[2]. When prompted with an NRPS gene sequence, AntiSMASH will recognize the regions in which the various NRPS domains are located and return an annotated genebank file (.gbk). These annotations contain translations of all genes in the cluster, the start and end of the domains in these protein sequences, a predicted substrate specificity of the A domain and a domain subtype (LCL, DCL, Dual or Starter) for Condensation domains.
## Exemplary annotation of a C domain
[IMG]
Our code reads out the values for /aSDomain, /domain_subtypes, /protein_end and /protein_start:
aSDomain 23477..24391 /aSDomain="Condensation" /aSTool="nrps_pks_domains" /database="nrpspksdomains.hmm" /detection="hmmscan" /domain_id="nrpspksdomains_XEKKV2_12065_Condensation_DCL.1" /domain_subtype="Condensation_DCL" /evalue="3.90E-63" /locus_tag="XEKKV2_12065" /protein_end=388 /protein_start=83 /score="205.1" /tool="antismash" /translation="EAIFPATSLQQGFVYHYLSQPQDDAYRVQLLLDYHTSIDVDAYQ QAWTLASRRFPILRTAFDWEGEILQIVTTGASIDATNFRYEDITELSEEEKNRAIDTL QQHDLTLPFDLRQPGLARFTLIKQRQQLITVVITLHHSIIDGWSYPVLLQTVHGYYNA LVQGHTPEIVVDKAYLNAQQYYRNHQADTDIYWAERKAQWQGTNDLSALLSHRVDLTQ IKAIEKPAEQLLTVQGNAYEQLKNTCRIHGITLNVALQFAWHKLLHIYTADEQTIVGT TVSGRDIPVEGIESSVGLYINTLPLAVQW"
The input for our pipeline are antiSMASH-annotated genebank files. AntiSMASH itself is not included in our software tool because it is easily accessible as a web page and because we wanted to give users the option to customize the annotations. Specifically, the specificity of A domains can sometimes be inaccurate or not predictable. In our case, since we were mostly working with already characterized clusters whose products were known, we could go through the annotations and change them whenever we noticed a discrepancy between the predicted and the experimentally validated substrate specificities.
### PARAS
PARAS is a tool developed by the same working group as antiSMASH that provides a more accurate prediction of the A domain specificity[4]. It was suggested to us by Dr. Terlouw, who was involved in the development of both antiSMASH and PARAS, during our interview. We have incorporated it into the pipeline and the user can decide whether to use the substrate specificity already provided by the genebank file or to reanalyze all A domains with PARAS. The former option should be chosen if you are working with known clusters and have manually verified all specificities in the genebank file using literature or experimental data. However, if you are directly using an unreviewed genebank file as input to the pipeline, PARAS should always be activated. This is because antiSMASH will sometimes give the substrate specificity as ‘X’ if it cannot make a good prediction, which is incompatible with our pipeline. In contrast, PARAS will always return the most likely amino acid for each A domain, circumventing this problem.
### Chai-1
Chai-1 is an AI-based 3D structure prediction tool similar to the more well-known AlphaFold[5]. We decided to use this tool because it provides the option to model ligands that are covalently connected to the given protein chains. In our case, this allowed us to model condensation complexes together with the activated amino acid substrates bound to the phosphopantetheine (Ppant) cofactors on the T domains.
### GetContacts
The final piece of our pipeline is GetContacts, which is a tool that extracts protein-protein interactions and protein-substrate interactions from 3D structures. It outputs the type of interaction and the involved residues and atoms. This data could be leveraged in order to train a model, which will be highlighted in our outlook section.
## Our Structure prediction pipeline
A curious feature of condensation complexes is that the involved domains are not directly connected, as the C domain and the acceptor T domain are separated by an A domain that does not participate in the condensation reaction. Including this A domain in the input for Chai-1 might lead to structures that do not contain a condensation complex, as the acceptor T domain can also interact with the upstream A domain. Therefore, we decided to split our input into two protein chains: one containing the donor T domain and the C domain and the other containing the acceptor T domain (Fig. 3). Chai-1 will treat these two chains as if they were two separate proteins and will output structures where they interact with each other. In most cases, this approach gave us structures that were very similar to experimental condensation complex structures from cryoEM studies.
[IMG] Fig. 3
🔍
[CAPTION] Fig. 3: Folding of the first condensation complex of the chaiyaphumine synthetase. Folding the entire sequence from donor T domain to acceptor T domain will lead to wrong structures, since the acceptor T domain interacts with the A domain (left). Instead, we separate the protein into two separate chains, cutting out the A domain. This leads to correct condensation complex structures (right).
Therefore, we will need to give six pieces of information for Chai-1: Two protein chains (provided as FASTA sequences), two ligands (provided as SMILES sequences) and two constraints that indicate where the ligands are connected to the protein chains. In the following paragraphs, we will explain how we automatically generated all these inputs for all condensation complexes based on antiSMASH-annotated genebank files.
[IMG] Fig. 4
🔍
[CAPTION] Fig. 4: Comparison of an early iteration of our 3D structure prediction (yellow) with a condensation complex structure taken by cryo-EM (PDB 9BE4[6], (red and violet). The part of the C domain that is present in the experimental but not in the predicted structure is shown in violet.
### Improving Domain Extraction
As antiSMASH annotations directly contain the translations of the genes and indices for the start and end points of each domain, creating the FASTA sequences is straightforward. However, we noticed a problem with our first 3D structures: When we compared them with experimental crystal structures, they aligned very well, but were missing a part of the C domain (Fig. 4). We then found out that antiSMASH annotations of C domains were always missing around 150 amino acids on the C-terminal side. We resolved this issue by expanding the annotated part over the protein_end index, assuming instead that the 450 residues after the protein_start index make up the C domain.
### Generating substrate SMILES
Using the substrate information given by the annotation of the A domain and the stereochemical information given by the annotation of the C domain, we can now predict the structures of the two Ppant-bound substrates. The only issue is that antiSMASH does not provide a prediction for the substrate specificity of C-starter domains - we decided to assume for the purpose of this software that all C-starter domains incorporate acetic acid.
The structure of the ligands needs to be provided in the SMILES (Simplified Molecular Input Line Entry System) format[7]. You can learn more about how SMILES work in our page about the prediction of the final products of NRPS for automating the analysis of LC-MS spectra.
The linear nature of the Ppant arm makes it easy to create SMILES strings simply by concatenation. We created a database of SMILES fragments for every amino acid that is commonly incorporated by NRPS A-domains (using the same list of common substrates that was also used by PARAS). These fragments do not contain the amino or carboxy groups, but only the ⍺-carbon atom and the residue bound to it. As a very simple example, the fragment for glycine would simply be C. The fragment for alanine would be C(C) with the methyl group in parentheses - except the ⍺-carbon is chiral, requiring us to use the stereochemistry indicators @ and @@ to distinguish between the L-alanine fragment, [C@H](C), and the D-alanine fragment, [C@@H](C).
A SMILES fragment for the Ppant arm is then connected to the SMILES fragments for the amino acids at the C-terminus. NC(=O) is inserted in between the amino acids, representing the peptide bonds. In the end, either [NH3+], representing a free N-terminal amino group, or NC(=O)C, representing an acetylated amino group, is appended. Both these terminators and the fragment for the peptide bond must be modified if the preceding amino acid is proline, as the nitrogen has another substituent as part of the five-membered ring. Fig. 5 shows how the final SMILES would be assembled. Note that the phosphorus atom of the Ppant arm only has four bonds - the fifth will be to the oxygen of the serine, which is part of the protein chain.
[IMG] Fig. 5
🔍
[CAPTION] Fig. 5: Assembly of peptidyl-Ppant SMILES for a condensation complex of the chaiyaphumine synthetase. Yellow: Ppant arm SMILES fragment. Green: D-alanine SMILES fragment. Gray: peptide bond SMILES fragments. Violet: D-phenylalanine SMILES fragment. Pink: L-threonine SMILES fragments. Red: acetylated amino group SMILES fragment. Black (structure only): connecting bonds between the fragments. In the SMILES code, these are implied through the concatenation since single bonds do not need to be explicitly stated.
### Defining constraints
For the constraints, our code searches the FASTA sequences for the conserved sequence FFxxGGxS and extracts the position of the conserved serine.The dropdown-boxes below show how the FASTA sequences (green), SMILES codes (red) and these positions (violet) are inserted into the two input files for ChaiDiscovery. All input files for all condensation complexes of an intein shuffling experiment can be generated fully automatically from the antiSMASh-annotated genebank files of the starter, elongation and termination modules using our software tool.
## Input file specifying the protein chains and SMILES codes
[IMG]
>protein|XtpS_T1-CE1
ETQLCAIWQDVLELERVGIDDNFFRLGGNSLTAIKLIAAIRRTLSTDISLAQ
LFELKTIAGLATQMDTQIRTVIPPLAQARYPLSFAQERMLFIEQYEQGSDVY
HIPYLVELAQDTSLPLLKTTINQLAERHAVLRTVYRSDDQGQQYQQALDTYL
VIPSQSCDDKETLLANVRTEIATPFDLTTEPSLRLRHYQVADRHYLLLLWHH
IAMDGWSIDIFMAELAEVYHALQAGHDSQLPALDITYGDYAAWQRDYLQGDI
REQQLAYWQQALAGYESLALPTDHPRPAQVNYQGQDLNFELDAQLSEQLREL
AKTQETTLYTVLLSAFYVTLAKLSGQDDIVIGTPTDNRHHAQTQPLLGMFVN
TLALRAQL
>protein|XtpS_T1
ETQLCTLWQAVLGLERISIHDNFFRIGGDSIISLQLVSKLRQAGFSLQVKTIFEAPTVAQLAVLLMQT
>ligand|PPant-ligand1
[O-]P(=O)OCC(C)(C)[C@@H](O)C(=O)NCCC(=O)NCCSC(=O)[C@H]([C@H](O)C)NC(=O)C
>ligand|PPant-ligand2
[O-]P(=O)OCC(C)(C)[C@@H](O)C(=O)NCCC(=O)NCCSC(=O)[C@H](Cc1ccccc1)[NH3+]
## Specification of restraints for Chai-1
[IMG]
chainA,res_idxA,chainB,res_idxB,connection_type,confidence,min_distance_angstrom,max_distance_angstrom,comment,restraint_id
A,S30@OG,C,@P1,covalent,1.0,0.0,0.0,protein-ligand,bond1
B,S30@OG,D,@P1,covalent,1.0,0.0,0.0,protein-ligand,bond2
### Automated Structure Prediction
Chai-1 itself needs access to A100 GPUs to run. We are very grateful that we had the opportunity to perform the computationally very demanding high-throughput prediction of 3D structures using the High Performance Cluster (HPC) system Raven from the Max Planck Computing & Data Facility. During the earlier stages of our project, we also had success using the subscription service of Google Colab, which offers access to A100 GPUs for 11 € per month. We would recommend this option to teams who want to work with mATChmaker but do not have access to an HPC. Both HPCs and Colab are incompatible with Docker. Hence, we did not integrate Chai-1 into our Docker. Instead, we provide a Colab Notebook.
In total, we predicted the structures of 467 condensation complexes, resulting in a total of 2335 3D structure files, since Chai-1 provides five structures per prompt. All these structures are available via Zenodo. To evaluate the accuracy of our predictions, we wanted to assess structures with non-native domain-domain interactions and non-native domain-substrate interactions. For this reason, we looked at all condensation complexes from our golden gate cloning experiments in which the C domain was part of the donor unit. From the five structures that Chai Discovery provided per prompt, we always chose the one for which Chai-1 gave the highest aggregate score, representing its confidence in the prediction. As an example, fig. 6 shows the three condensation complexes that we examined for the proline LCL unit.
Click & explore: Rotate, zoom, and inspect the structure.
2
3
4
[IMG] Fig. 6
🔍
[CAPTION] Fig. 6: Three 3D structures of condensation complexes from NRPS assemblies with our proline LCL donor unit (above). Schematic overview of the condensation complexes analyzed (below).[8]
From the 35 donor units, 2 contain two separate genes. In these cases, folding was impossible using our methodology because the donor T domain and the C domain could not be represented as one protein sequence. Splitting the condensation complex into three separate protein chains would require further restraints to make sure that the two T domains do not bind at the opposite positions on the C domain. Nine further donor units had an epimerization domain between the donor T domain and the C domain. We folded these complexes by including the epimerization domain into the structure, but the structures did not contain a condensation complex since the donor T domain always interacted with the E domain instead of the C domain.
Structures containing one of the remaining 24 donor units were evaluated using two criteria: The two T domains should be bound to opposite ends of the C domain and the Ppant arm substrates should extend into the C domain. 49 structures were correctly folded, representing 68 % of the 72 condensation complexes excluding split genes and epimerisation domains.
All correctly folded structures looked very similar. We verified several of the correct structures by overlaying them with a cryo-EM structure of a condensation complex and it showed a very good match (Fig. 7).
[IMG] Fig. 7
🔍
[CAPTION] Fig. 7: Comparison of one of our 3D structure predictions (yellow) with a condensation complex structure taken by cryo-EM (PDB 9BE4)[6].
### Analyzing interactions
The final piece of our pipeline is GetContacts, which is a tool that extracts protein-protein interactions and protein-substrate interactions from 3D structures. While we successfully implemented it and made it accessible in our software, we did not have the time to process the generated data to train a model.
## Outlook
The generation of 3D structures of condensation complexes by X-ray crystallography or cryogenic electron microscopy (cryo-EM) is greatly complicated by the dynamic nature of NRPS interactions. In recent chemical biology approaches, the ligands on the Ppant arms of the T domains have been modified to be non-hydrolysable or to form a crosslink in the active site of the C domain, thereby freezing the NRPS in the condensation complex state and enabling the creation of high-quality 3D structures[6][9]. However, it is difficult with this approach to study the protein-substrate interactions since the substrates have been modified. Our pipeline offers researchers the opportunity to quickly and easily predict customizable 3D structures of condensation complexes that show both involved substrates in their native state. We believe that this tool can be of assistance in identifying the interactions that drive substrate incompatibility in NRPS engineering, enabling rational design of experiments - e.g. mutagenesis approaches - to overcome this problem.
Furthermore, our pipeline has been tailored for high-throughput prediction, enabling its use for building a model to predict NRPS unit compatibility. A possible approach for a simple model (e. g. an ElasticNet logistic regression or a convolutional neural network (CNN)) using the GetContacts output would be to focus on inter-domain and domain-substrate interactions. These could be subdivided by the types of interaction, such as hydrogen-bonds, salt bridges and van der Waals interactions, and by the types of interaction partners, such as acceptor T domain + C domain, acceptor Ppant + C domain, etc. For each of these subcategories, the total number of interactions could be tallied and used as input for the model.
In our interview, Dr. Terlouw also suggested exploring sequence-based models. Similar to the approach taken by NRPSPredictor2, the A domain specificity predictor included in antiSMASH, she suggested using our 3D structures to determine which residues are close to the interaction surfaces and the active site of the C domain. These residues could be determined for each condensation complex and given as additional input to a model. According to Dr. Terlouw, this approach might help in recognizing more dynamic interactions that are not immediately visible in a static structure.
Another way to gain more insights into the dynamic nature of condensation complexes would be to combine 3D structure predictions from our pipeline with molecular dynamics (MD) calculations, similar to the model-building approach by the 2024 team from Heidelberg in their modelling of DNA-protein interactions. Similarly, density functional theory (DFT) calculations starting from condensation complex crystal structures have been employed[9] to study the mechanism of condensation in the C domain - this approach could also be applied to predicted 3D structures with various domains and substrates to evaluate possible reasons for substrate incompatibility.
## References
[1] Baunach, M., Chowdhury, S., Stallforth, P., & Dittmann, E. (2021). The Landscape of Recombination Events That Create Nonribosomal Peptide Diversity. Molecular Biology and Evolution, 38(5), 2116–2130. https://doi.org/10.1093/molbev/msab015
[2] Blin, K. et al. (2025). antiSMASH 8.0: extended gene cluster detection capabilities and analyses of chemistry, enzymology, and regulation. Nucleic Acids Research, 53(W1), W32-W38. https://doi.org/10.1093/nar/gkaf334
[3] Sievert, F. et al. (2011). Fast, scalable generation of high-quality protein multiple sequence alignments using Clustal Omega. Molecular Systems Biology, 7:539. https://doi.org/10.1038/msb.2011.75
[4] Terlouw, B. et al. (2025). PARAS: high-accuracy machine-learning of substrate specificities in nonribosomal peptide synthetases. bioRxiv. https://doi.org/10.1101/2025.01.08.631717
[5] Chai Discovery team (2024). Chai-1: Decoding the molecular interactions of life. bioRxiv https://doi.org/10.1101/2024.10.10.615955
[6] Heberlig, G. W., La Clair, J. J. & Burkart, M. D. (2024). Crosslinking intermodular condensation in non-ribosomal peptide biosynthesis. Nature. 638, 261–269. https://doi.org/10.1038/s41586-024-08306-y
[7] Weininger, D. (1988). SMILES, a chemical language and information system. 1. Introduction to methodology and encoding rules. Journal of Chemical Information and Computer Sciences, 28(1), 31–36. https://doi.org/10.1021/ci00057a005
[8] Nicholas Rego and David Koes 3Dmol.js: molecular visualization with WebGL Bioinformatics (2015) 31 (8): 1322-1324 https://doi.org/10.1093/bioinformatics/btu829
[9] Pistofidis, A., Ma, P., Li, Z., Munro, K., Houk, K. N. & Schmeing, T. M. (2025). Structures and mechanism of condensation in non-ribosomal peptide synthesis. Nature 638, 270–278. https://doi.org/10.1038/s41586-024-08417-6
Show all references
[IMG]
Show less
[IMG]
