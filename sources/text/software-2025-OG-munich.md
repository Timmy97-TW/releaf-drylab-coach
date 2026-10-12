[IMG] InkSight Logo
[IMG] Page Icon
# Software
The Modular Extracellular Sensor Architecture (MESA) represents one of synthetic biology’s most versatile platforms for engineering mammalian cell-based biosensors. Since its introduction by Daringer et al. (2014), MESA has enabled researchers to create orthogonal, customizable receptors that can detect virtually any extracellular signal and translate it into a desired cellular response. The beauty of MESA lies in its modularity, each component can be independently created, optimized and combined in countless ways, making it a perfect embodiment of synthetic biology’s engineering principles.
The MESA framework has proven invaluable across diverse applications in synthetic biology. From therapeutic cell engineering to environmental biosensing, MESA receptors have been implemented in numerous iGEM projects over the years. Teams like SMMU-China 2019, Munich 2022, and UTokyo 2023 have leveraged MESA‘s modularity to create synthetic receptor toolkits, proximity based CAR T-cell activation, and protease based signaling for rapid protein secretion, respectively. The system’s orthogonality ensures minimal crosstalk with endogenous signaling pathways, while its customizability allows researchers to tune sensitivity, specificity, and output characteristics to match their specific needs (Daringer et al., 2014).
Despite MESA‘s immense potential, designing these receptors has remained challenging. The literature contains over 250 experimentally validated MESA configurations, each with different transmembrane domains, linker sequences, protease variants, and cargo proteins (Edelstein et al., 2020). Navigating this vast design space requires deep expertise in protein engineering, structural biology, and molecular biology. Researchers must manually search through dozens of papers, extract relevant sequences, and piece together compatible components, a process that can take weeks and is prone to errors.
Recognizing this bottleneck, our team at iGEM Munich 2025, in collaboration with the original MESA creators, developed MESA Designer, an intuitive, comprehensive toolkit that transforms MESA receptor design from a weeks-long manual process into a streamlined, error-free workflow that takes minutes. Our software integrates validated experimental data, provides intelligent design recommendations, and generates production-ready genetic constructs that comply with synthetic biology standards.
> Experience the simplicity yourself - Design your first MESA receptor at https://mesa.igem-munich.com/
## Usage
Usage guide with SAbDab search:
Usage guide with Custom Binder:
### Input-Output Pipeline
MESA Designer transforms biological targets into production-ready genetic constructs through an intelligent design pipeline. The software accepts multiple input types to accommodate different research workflows:
Inputs:
MESA receptors require binding domains to recognize specific target molecules/antigens. Thus creating a MESA Receptor begins with target identification, this is the first step during manual MESA Receptor construction and, in a greatly simplified manner, also the first step of the MESA Designer pipeline.
Our searchable integration of SAbDab (The Structural Antibody Database) (Schneider et al., 2022) provides over 10,000 experimentally validated antibody structures to find binders for your target antigen. The software automatically retrieves structural data and allows extraction of relevant binding domains and desired subsections. Further you can inform your choice via the available affinity data integrated into our tools and provided by SAbDab and SKEMPI v2.0 (Jankauskaitė et al., 2019).
Since users might want to use something other than an antibody such as a receptor or in cases where there is not currently a known antibody, importing custom binder sequences is also supported. Whether de novo designed using BindCraft, experimentally determined through selection campaigns, natural receptors or any other source, importing the custom sequence is a one-step process (Pacesa et al., 2024).
While the binding domains of a MESA Receptor are key to the constructs functionality, many other components are also necessary. Transmembrane domains (validated options from Edelstein et al., 2020), linker sequences, protease variants, and cargo proteins can be customized using our curated database of experimentally validated components. Additionally optional components include auto-inhibitory peptides which can reduce background signaling by impeding the protease when the two chains are not dimerized. To help detect, isolate and purify constructs we also provide the ability of adding a few default tags with an option for any custom tag you might need.
For users requiring completely custom designs for any component, we provide seamless integration with specialized tools:
BindCraft: AI-powered de novo binder design (Pacesa et al., 2024).
TMDock”: Transmembrane domain modeling and optimization (Lomize and Pogozheva, 2017).
SPELL: Intelligent protein splitting for custom split protease designs or any other split intra cellular domain Check out our guide in our contribution section. Dagliyan et al. (2018)
Outputs:
The tools output is composed of different files with customizable options. Industry-standard GenBank files compatible with all major molecular biology software including Geneious Prime, SnapGene and Benchling are the default. Each functional domain is properly annotated with feature tags for easy visualization and modification.
Additionally we provide the option of creating codon-optimized sequences for the target organism with avoided restriction sites for standard cloning methods these include: RFC10, RFC12, RFC1000, BioBrick standards, any custom restriction sites or a pre-assembled iGEM Registry Compatible Collection.
For immediate binder dimerization testing FRET Validation Constructs can be automatically generated. Enabling this option creates mCerulean/mVenus fusion constructs. Functional validation and binder dimerization verification can be performed via FRET Imaging (Jares-Erijman and Jovin, 2003).
If using SAbDab search, you can receive the original PDB file and binding analysis data whenever available.
The GenBank output files can be directly imported into gene editing and project planning tools or uploaded to gene synthesis platforms (Twist Bioscience, IDT, GenScript) for ordering. Following synthesis, these constructs are ready for cloning into expression vectors and transfection into target cells for your specific application.
### Step-by-Step User Guide
You can download a freely distributable and modifiable step-by-step guide here.
#### Step 1: Target Selection
Begin by identifying your target molecule. You have two pathways:
Option A: Database Search
[IMG] InkSight Image
Enter your target antigen name (e.g., “progesterone”, “CD19”, “PD-L1”)
Review search results showing experimentally validated antibody structures with resolution, organism, and binding affinity data
Select your preferred binder based on affinity, species compatibility, or structural considerations
Option B: Custom Binder
[IMG] InkSight Image
Toggle “Custom Binder” mode
Paste your validated Chain A and Chain B sequences. Note: You are not required to create both at the same time, however this does provide better overview of the complete functionality
The software automatically validates sequence format and identifies potential issues
#### Step 2.1: Structural Inspection and Chain Selection
[IMG] InkSight Image
Interact with the 3D molecular viewer to inspect your selected structure
Select specific chains or residue ranges for inclusion in your MESA receptor’s binder
Hover over specific residues to inform selection based on additional data
Change display style or view the structure on RCSB PDB for more information about the structure and its associated publication (Berman et al., 2000).
#### Step 2.2: Assemble Desired Sequence
[IMG] InkSight Image
Use the sortable interface to arrange variable chains and specify linker positions
Nanobodies derived from antibodies’ variable domains can make excellent binders (Teng et al., 2024). You can build these by simply dragging and dropping your residue selections in the desired order. They will be automatically connected via appropriate linkers.
Preview the assembled binder sequence in real-time
#### Step 3: Linker Design
[IMG] InkSight Image
Choose from experimentally validated flexible linker patterns (GGGGS, EAAAK, etc.) (Edelstein et al., 2020)
Specify repeat numbers based on required spacing (typically 5-15 repeats)
Or input custom linker sequences for specialized applications
The software automatically connects the linker and assembles the MESA Chains
#### Step 4: Transmembrane Domain Selection
[IMG] InkSight Image
Select from our curated database of validated TMDs with different dimerization properties (Edelstein et al., 2020).
View experimental data on each TMD‘s performance characteristics and get information from original sources.
Options include homodimerizing and heterodimerizing domains.
Custom TMD sequences can be entered for novel designs which can be evaluated in-silico using TMDock (Lomize and Pogozheva, 2017).
#### Step 5: Intracellular Component Configuration
Protease Design Options:
[IMG] InkSight Image
Split Protease: N-terminal and C-terminal fragments on separate chains for minimal background signaling. Custom proteases or proteins can be evaluated using SPELL (Dagliyan et al., 2018).
Complete Protease: Full protease on one chain for simplified design, split vs. complete evaluation or in cases where split designs are not feasable.
Choose from curated, experimentally validated TEV protease variants with different activities
Cargo Configuration:
[IMG] InkSight Image
Configure release mechanisms (protease release, cargo release)
Enter your cargo protein sequence (transcription factors, reporters, enzymes)
Select appropriate Protease Recognition Sequence (PRS) variants or enter a completely custom sequence
Custom Intracellular Domain
- While the default options offer a lot of customizability within the general concept of MESA Receptors, you have the option of creating a completely custom ICD by toggling this option and simply entering the sequence of the MESA Chain
Additional Options:
Add Auto-Inhibitory Peptides (AIPs) to reduce background signaling
Include detection tags (FLAG, HA, Myc, custom) for experimental validation
Generate FRET constructs for immediate functional testing of binder dimerization (Jares-Erijman and Jovin, 2003)
#### Step 6: Review and Download
[IMG] InkSight Image
Review complete construct sequences with clear, color-coded domain annotations
Select sequences for inclusion in download
Configure optimization parameters (organism, restriction sites) or choose to simply download an amino acid sequence. This option also allows future iGEM Teams to make their sequences directly iGEM Registry compatible
Download comprehensive ZIP package with all desired design and source/reference files
### Programmatic Access
While our web interface provides an intuitive and capable design experience, MESA Designer’s true power extends through its comprehensive programmatic interfaces. These interfaces transform MESA design from a manual process into an automatable, scalable workflow suitable for high-throughput applications and integration into larger computational pipelines.
#### REST API
Our RESTful API provides language-agnostic access to all MESA Designer functionality. REST (Representational State Transfer) architecture ensures compatibility with virtually any programming environment while maintaining stateless, cacheable operations that scale effortlessly (Fielding, 2000). The API follows OpenAPI 3.0 specifications, enabling automatic client generation in over 50+ programming language (Swagger-Codegen-Contributors, 2025).
The REST architecture offers several critical advantages for biological software:
Platform Independence: Access MESA Designer from any system - whether running Python on Linux clusters, R in RStudio, or MATLAB on Windows workstations.
Scalability: Stateless design allows horizontal scaling for high-throughput design campaigns. This means that once deployed on an appropriate system the API can handle a virtually unlimited number of clients without having to store any client-associated data (Fielding, 2000).
Versioning: API versioning ensures backward compatibility as we add new features. This means that any tools developed around the tool don’t break if the API is updated.
Documentation: Interactive Swagger UI at /docs provides real-time API exploration and testing.
Example API workflow:
# Search for anti-HER2 antibodies curl -X GET "https://mesa.igem-munich.com/api/search_antigen?antigen=HER2" # Generate linked chains from PDB structure curl -X POST "https://mesa.igem-munich.com/api/pdb/1N8Z/generate_linked_chains" \ -H "Content-Type: application/json" \ -d '{"selection": {"A": [1, 107], "B": [1, 113]}, "linkage": {"A": ["A", "B"]}}'
You can get a complete overview of all API Endpoints, their schemas and output here:
# MESA-Designer API
0.1.0
[ Base URL: / ] OpenAPI: 3.1.0
https://mesa.igem-munich.com/
API for MESA-Designer to programmatically interact with its functionalities.
General General API operations
[FOLD] GET /
Root endpoint that returns a welcome message.
Operation ID: read_root__get
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "type": "string" }, "type": "object", "title": "Response Read Root Get" }
Search Antigen search operations
[FOLD] GET /search_antigen
Search for antibodies based on an antigen query
Operation ID: search_antigens_search_antigen_get
#### Parameters
| Name
| In
| Description
| Schema
| antigen*
| query
| The antigen name to search for
| string
#### Responses
200: Successful Response
application/json
{ "type": "object", "additionalProperties": { "anyOf": [ { "type": "array", "items": { "type": "object", "additionalProperties": { "type": "string" } } }, { "type": "number" } ] }, "title": "Response Search Antigens Search Antigen Get" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
PDB PDB operations
[FOLD] GET /pdb/{pdb_id}_chains
Retrieve PDB chain data
Operation ID: get_pdb_chains_pdb__pdb_id__chains_get
#### Parameters
| Name
| In
| Description
| Schema
| pdb_id*
| path
| The PDB ID to retrieve chain data for
| string
#### Responses
200: Successful Response
application/json
{ "type": "object", "additionalProperties": { "anyOf": [ { "type": "string" }, { "type": "array", "items": { "type": "object", "additionalProperties": { "type": "string" } } } ] }, "title": "Response Get Pdb Chains Pdb Pdb Id Chains Get" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
[FOLD] GET /pdb/{pdb_id}_structure
Retrieve PDB file from RCSB
Operation ID: get_pdb_structure_pdb__pdb_id__structure_get
#### Parameters
| Name
| In
| Description
| Schema
| pdb_id*
| path
| The PDB ID to retrieve PDB file from RCSB for. It should be noted that it is likely faster to get this structure directly from RCSB
| string
#### Responses
200: Successful Response
application/json
{ "type": "object", "additionalProperties": { "type": "string" }, "title": "Response Get Pdb Structure Pdb Pdb Id Structure Get" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
[FOLD] GET /pdb/{pdb_id}_fasta
Retrieve FASTA file from RCSB
Operation ID: get_pdb_fasta_pdb__pdb_id__fasta_get
#### Parameters
| Name
| In
| Description
| Schema
| pdb_id*
| path
| The PDB ID to retrieve FASTA file from RCSB for. It should be noted that it is likely faster to get this file directly from RCSB
| string
#### Responses
200: Successful Response
application/json
{ "type": "object", "additionalProperties": { "type": "string" }, "title": "Response Get Pdb Fasta Pdb Pdb Id Fasta Get" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
[FOLD] POST /pdb/{pdb_id}/generate_chain_selection
Generate chain selection from selected PDB cahins and residues
Operation ID: get_chain_selection_pdb__pdb_id__generate_chain_selection_post
#### Parameters
| Name
| In
| Description
| Schema
| pdb_id*
| path
| The PDB ID for which to generate the chain selection
| string
#### Request Body *
application/json
{ "$ref": "#/components/schemas/ChainSelection" }
#### Responses
200: Successful Response
application/json
{ "type": "object", "additionalProperties": { "anyOf": [ { "type": "string" }, { "type": "object", "additionalProperties": { "type": "string" } } ] }, "title": "Response Get Chain Selection Pdb Pdb Id Generate Chain Selection Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
[FOLD] POST /pdb/{pdb_id}/generate_linked_chains
Link selected chains/residues from a specified pdb structure in supplied order and attach custom linkers
Operation ID: get_linked_chains_pdb__pdb_id__generate_linked_chains_post
#### Parameters
| Name
| In
| Description
| Schema
| pdb_id*
| path
| The PDB ID which supplies the selected chains
| string
| linker
| query
| The amino acid sequence to use as a linker between concatenated chains. Defaults to 5 repeats of 'GGGGS'.
| string
#### Request Body *
application/json
{ "$ref": "#/components/schemas/Body_get_linked_chains_pdb__pdb_id__generate_linked_chains_post" }
#### Responses
200: Successful Response
application/json
{ "type": "object", "additionalProperties": { "anyOf": [ { "type": "string" }, { "type": "object", "additionalProperties": { "type": "string" } }, { "type": "object", "additionalProperties": { "type": "array", "items": { "type": "string" } } } ] }, "title": "Response Get Linked Chains Pdb Pdb Id Generate Linked Chains Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
TMD Transmembrane domain operations
[FOLD] GET /tmd/overview
Receive an overview over a selection of TMDs taken from various papers.
Operation ID: get_tmd_overview_tmd_overview_get
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "additionalProperties": { "items": { "type": "string" }, "type": "array" }, "type": "object" }, { "items": { "type": "string" }, "type": "array" } ] }, "type": "object", "title": "Response Get Tmd Overview Tmd Overview Get" }
[FOLD] POST /tmd/attach
Attach a specified TMD to a provided chain with specified linker and prepend CD4 signal peptide.
Operation ID: get_attached_tmd_tmd_attach_post
#### Parameters
| Name
| In
| Description
| Schema
| tmd*
| query
| The ID of the Transmembrane Domain (TMD) to attach (e.g., 'FGFR4').
| string
| sequence*
| query
| The amino acid sequences to which the TMD should be attached. Usually the result of a post request to /pdb/{pdb_id}/generate_linked_chains.
| string
| linker
| query
| The linker to be used when attaching the TMD sequence.
| string
#### Responses
200: Successful Response
application/json
{ "type": "object", "additionalProperties": { "type": "string" }, "title": "Response Get Attached Tmd Tmd Attach Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
Protease Protease operations
[FOLD] GET /protease/overview
Get an overview over protease design options and select amino acid sequences
Operation ID: get_protease_overview_protease_overview_get
#### Responses
200: Successful Response
application/json
{ "additionalProperties": true, "type": "object", "title": "Response Get Protease Overview Protease Overview Get" }
[FOLD] GET /protease/split_tev_protease
Retrieves the sequences for split TEV protease components (N-terminal and C-terminal).
Operation ID: get_split_tevp_protease_split_tev_protease_get
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "additionalProperties": { "items": { "type": "string" }, "type": "array" }, "type": "object" }, "type": "object", "title": "Response Get Split Tevp Protease Split Tev Protease Get" }
[FOLD] POST /protease/attach_split_protease
Attach the chains of a split protease to two uploaded sequences with short linker.
Operation ID: get_attached_split_protease_protease_attach_split_protease_post
#### Request Body *
application/json
{ "$ref": "#/components/schemas/SplitProteaseAttachmentInput" }
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "type": "string" }, { "additionalProperties": { "type": "string" }, "type": "object" } ] }, "type": "object", "title": "Response Get Attached Split Protease Protease Attach Split Protease Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
[FOLD] POST /protease/attach_protease
Attach a protease sequence to a provided sequence with a short linker.
Operation ID: get_attached_protease_protease_attach_protease_post
#### Request Body *
application/json
{ "$ref": "#/components/schemas/ProteaseAttachmentInput" }
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "type": "string" }, "type": "object", "title": "Response Get Attached Protease Protease Attach Protease Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
[FOLD] GET /protease/prs_overview
Get an overview over available TEV-Protease recognition sequences.
Operation ID: get_prs_overview_protease_prs_overview_get
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "items": { "type": "string" }, "type": "array" }, { "additionalProperties": { "items": { "type": "string" }, "type": "array" }, "type": "object" } ] }, "type": "object", "title": "Response Get Prs Overview Protease Prs Overview Get" }
[FOLD] POST /protease/attach_prs
Attach a protease recognition sequence (PRS) to a provided set of sequences with a short linker.
Operation ID: get_attached_prs_protease_attach_prs_post
#### Request Body *
application/json
{ "$ref": "#/components/schemas/PrsAttachmentInput" }
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "type": "string" }, { "additionalProperties": { "type": "string" }, "type": "object" } ] }, "type": "object", "title": "Response Get Attached Prs Protease Attach Prs Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
[FOLD] GET /protease/aip_overview
Get an overview over available TEV-Protease auto-inhibitory peptides and sequences.
Operation ID: get_aip_overview_protease_aip_overview_get
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "items": { "type": "string" }, "type": "array" }, { "additionalProperties": { "items": { "type": "string" }, "type": "array" }, "type": "object" } ] }, "type": "object", "title": "Response Get Aip Overview Protease Aip Overview Get" }
[FOLD] POST /protease/attach_aip
Attach an auto-inhibitory peptide to a provided set of sequences with a short linker.
Operation ID: get_attached_aip_protease_attach_aip_post
#### Request Body *
application/json
{ "$ref": "#/components/schemas/AipAttachmentInput" }
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "type": "string" }, { "additionalProperties": { "type": "string" }, "type": "object" } ] }, "type": "object", "title": "Response Get Attached Aip Protease Attach Aip Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
Cargo Cargo operations
[FOLD] POST /cargo/attach_cargo
Attach a cargo and optionally a protease recognition sequence to provided chains.
Operation ID: get_attached_cargo_cargo_attach_cargo_post
#### Request Body *
application/json
{ "$ref": "#/components/schemas/CargoAttachmentInput" }
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "type": "boolean" }, { "type": "string" }, { "additionalProperties": { "type": "string" }, "type": "object" } ] }, "type": "object", "title": "Response Get Attached Cargo Cargo Attach Cargo Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
Extra Extra operations
[FOLD] POST /extra/fret_sequences
Create FRET imaging sequences from input sequences
Operation ID: get_fret_sequences_extra_fret_sequences_post
#### Request Body *
application/json
{ "$ref": "#/components/schemas/FretSequenceInput" }
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "additionalProperties": { "type": "string" }, "type": "object" }, "type": "object", "title": "Response Get Fret Sequences Extra Fret Sequences Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
[FOLD] GET /extra/tag_overview
Get an overview of select Tags from synthetic biology.
Operation ID: get_tag_overview_extra_tag_overview_get
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "items": { "type": "string" }, "type": "array" }, { "additionalProperties": { "items": { "type": "string" }, "type": "array" }, "type": "object" } ] }, "type": "object", "title": "Response Get Tag Overview Extra Tag Overview Get" }
[FOLD] POST /extra/attach_tag
Prepend supplied amino acid sequences to all provided sequences.
Operation ID: get_prepended_tag_extra_attach_tag_post
#### Request Body *
application/json
{ "$ref": "#/components/schemas/TagSequenceInput" }
#### Responses
200: Successful Response
application/json
{ "additionalProperties": { "anyOf": [ { "type": "string" }, { "additionalProperties": { "type": "string" }, "type": "object" } ] }, "type": "object", "title": "Response Get Prepended Tag Extra Attach Tag Post" }
422: Validation Error
application/json
{ "$ref": "#/components/schemas/HTTPValidationError" }
#### Schemas
[FOLD] AipAttachmentInput
Pydantic model for attaching an Auto-Inhibitory Peptide (AIP) to multiple provided sequences.
#### Properties
sequences object *
A dictionary mapping identifiers (e.g., chain names) to the amino acid sequences to which the auto-inhibitory peptide will be attached.
Example:
{ "A": "SEQUENCE_FOR_CHAIN_A", "B": "SEQUENCE_FOR_CHAIN_B" }
aip_sequence string
The auto-inhibitory peptide to attach tothe provided sequences. Defaults to a standard AIP for TEV-Protease.
Default: "ELVYSQ"
Example:
"ELVYSQ"
[FOLD] Body_get_linked_chains_pdb__pdb_id__generate_linked_chains_post
#### Properties
selection_data ChainSelection *
linkage_data ChainLinkage *
[FOLD] CargoAttachmentInput
Pydantic model for attaching a cargo sequence and optionally a PRS to provided chains.
#### Properties
sequences object *
A dictionary mapping identifiers (e.g., chain names) to the amino acid sequences to which the cargo will be attached.
Example:
{ "A": "SEQUENCE_FOR_CHAIN_A", "B": "SEQUENCE_FOR_CHAIN_B" }
cargo_sequence string *
The desired target's amino acid sequence
Example:
[ "AAAAAAAAAAAAAAAAAAAAAA" ]
prepend_prs boolean
Optional toggle to prepend a PRS sequence
Default: true
prs_sequence string
The Protease Recognition Sequence (PRS) to attach to the provided sequences. Defaults to a standard TEV-Protease PRS sequence.
Default: "ENLYFQ"
Example:
"ENLYFQ"
[FOLD] ChainLinkage
Pydantic model to define how selected chains from a PDB should be linked together to form new MESA receptor chains (Chain A, Chain B).
#### Properties
linkage object *
Dictionary where A, B represent the chains of a MESA receptor. The values lists representing the order in which chainselections from a provided PDB structure should be linked.
Example:
{ "A": [ "H", "L" ], "B": [ "B" ] }
[FOLD] ChainSelection
Pydantic model to define the structure for selecting specific chain segments within a PDB structure.
#### Properties
selection object *
Dictionary where keys are chain IDs and values are tuples of 0-indexed start and endpoint of chain selection.
Example:
{ "A": [ 0, 200 ], "C": [ 45, 87 ] }
[FOLD] FretSequenceInput
Pydantic model for generating FRET imaging sequences from input sequences.
#### Properties
sequences object *
A dictionary mapping identifiers (e.g., chain names) to the amino acid sequences to which the cargo will be attached.
Example:
{ "A": "SEQUENCE_FOR_CHAIN_A", "B": "SEQUENCE_FOR_CHAIN_B" }
[FOLD] HTTPValidationError
#### Properties
detail array
[FOLD] ProteaseAttachmentInput
Pydantic model for attaching a complete protease sequence to a single provided sequence.
#### Properties
sequence string *
The amino acid sequence to attach the protease to.
Example:
"MASEQUENCE"
protease_sequence string
The protease sequence to attach to the provided sequence. Defaults to the TEV protease sequence.
Default: "ESLFKGPRDYNPISSTICHLTNESDGHTTSLYGIGFGPFIITNKHLFRRNNGTLLVQSLHGVFKVKNTTTLQQHLIDGRDMIIIRMPKDFPPFPQKLKFREPQREERICLVTTNFQTKSMSSMVSDTSCTFPSSDGIFWKHWIQTKDGQCGSPLVSTRDGFIVGIHSASNFTNTNNYFTSVPKNFMELLTNQEAQQWVSGWRLNADSVLWGGHKVFMVKPEEPFQPVKEATQLMN"
Example:
"ESLFKGPRDYNPISSTICHLTNESDGHTTSLYGIGFGPFIITNKHLFRRNNGTLLVQSLHGVFKVKNTTTLQQHLIDGRDMIIIRMPKDFPPFPQKLKFREPQREERICLVTTNFQTKSMSSMVSDTSCTFPSSDGIFWKHWIQTKDGQCGSPLVSTRDGFIVGIHSASNFTNTNNYFTSVPKNFMELLTNQEAQQWVSGWRLNADSVLWGGHKVFMVKPEEPFQPVKEATQLMN"
[FOLD] PrsAttachmentInput
Pydantic model for attaching a Protease Recognition Sequence (PRS) to multiple provided sequences.
#### Properties
sequences object *
A dictionary mapping identifiers (e.g., chain names) to the amino acid sequences to which the protease recognition sequence will be attached.
Example:
{ "A": "SEQUENCE_FOR_CHAIN_A", "B": "SEQUENCE_FOR_CHAIN_B" }
prs_sequence string
The Protease Recognition Sequence (PRS) to attach to the provided sequences. Defaults to a standard TEV-Protease PRS sequence.
Default: "ENLYFQ"
Example:
"ENLYFQ"
[FOLD] SplitProteaseAttachmentInput
Pydantic model for attaching split protease components to sequences.
#### Properties
sequences object *
A dictionary with 'n' and 'c' as keys, mapping to the amino acid sequences to which the N and C terminal parts of the protease are to be attached, respectively.
Example:
{ "c": "SEQUENCE_TO_C_TERMINUS", "n": "SEQUENCE_TO_N_TERMINUS" }
protease_splits object
A dictionary with 'n' and 'c' as keys, mapping to the corresponding split protease amino acid sequences. Defaults to TEV protease splits.
Default: {"n":"ESLFKGPRDYNPISSTICHLTNESDGHTTSLYGIGFGPFIITNKHLFRRNNGTLLVQSLHGVFKVKNTTTLQQSLIDGRDMIIIRMPKDFPPFPQKLKFREPQREERICLVTTNFQT","c":"KSMSSMVSDTSCTFPSSDGIFWKHWIQTKDGQCGSPLVSTRDGFIVGIHSASNFTNTNNYFTSVPKNFMELKTNQEAQQWVSGWRLNADSVLWGGHKVFMVKPEEPFQPVKEATQLMN"}
[FOLD] TagSequenceInput
Pydantic model for prepending a tag sequence to multiple provided sequences.
#### Properties
sequences object *
A dictionary mapping identifiers (e.g., chain names) to the amino acid sequences to which the tag will be prepended.
Example:
{ "A": "SEQUENCE_FOR_CHAIN_A", "B": "SEQUENCE_FOR_CHAIN_B" }
tag_sequence string *
Amino acid sequence of the tag to be prepended to all supplied sequences
[FOLD] ValidationError
#### Properties
loc array *
msg string *
type string *
#### Python Package
While REST APIs provide universal access, the Python package (available on Python Package Index (PyPi) and installable via pip install mesa-designer) offers deeper integration with the scientific Python ecosystem. This native implementation provides several compelling advantages over API-only access.
The Python package operates directly on data structures without HTTP overhead, enabling processing of hundreds of thousands of designs in seconds rather than minutes. Removal of network requests and local caching prevents redundant database queries. This increased Performance and Efficiency makes it ideal for design space exploration, where researchers might generate and evaluate hundreds of MESA variants.
Native Python implementation enables seamless integration with the biological computing ecosystem allowing for Rich Data Integration. BioPython objects flow directly into and out of MESA Designer functions, eliminating format conversion overhead. Pandas DataFrames enable complex filtering and analysis of design variants. Integration with structural biology tools like PyMOL and ChimeraX allows real-time visualization of designed receptors. Machine learning frameworks like scikit-learn and TensorFlow can directly consume sequence features for predictive modeling.
The Python package transforms MESA Designer from a design tool into a design platform, enabling Advanced Workflow Capabilities. Researchers can implement custom scoring functions that evaluate designs based on multiple criteria - expression level predictions, immunogenicity scores, or structural stability metrics. Automated optimization routines can explore the design space systematically, using genetic algorithms or Bayesian optimization to find optimal configurations. Integration with laboratory information management systems (LIMS) enables direct transmission of designs to automated DNA synthesis and cloning pipelines.
Example Python workflow showcasing advanced capabilities:
import mesa-designer as md import pandas as pd from Bio import SeqIO # Batch design generation with optimization designs = [] for tmd in md.TMD_DATA: chain = md.MesaChain() chain.add_binder(sequence=my_binder) chain.add_tmd_linker(repeats=10) chain.add_tmd(tmd_name=tmd) chain.add_protease(protease_name="NTEVp_H75S") # Evaluate design with custom metrics if chain.predict_expression_level() > 0.8: designs.append(chain) # Analyze design space df = pd.DataFrame([d.to_dict() for d in designs]) optimal_designs = df[df['stability_score'] > df['stability_score'].quantile(0.9)] # Generate constructs with organism-specific optimization for design in optimal_designs: design.optimize_codons(organism='h_sapiens') design.avoid_restriction_sites(['EcoRI', 'BamHI', 'XhoI']) design.save_genbank(f"construct_{design.id}.gb")
## Validation
### Experimental Foundation
MESA Designer’s reliability stems from its foundation on experimentally validated components. Every selectable component in our database has been functionally characterized in peer-reviewed publications. TMDs have been tested and quantitative data on dimerization strength, specificity, and orientation is available. Our protease variants have been tested across multiple cellular contexts, with activity measurements under various expression levels and conditions. Linkers, Tags, AIPs and FRET sequences are all experimentally verified and data is available in linked publications. All 10.000 structures in SAbDab, our primary source when searching for anti-target-antibodies, are experimentally determined structures (Schneider et al., 2022).
Key validation examples:
FKBP & FRB based rapamycin sensor : Our tool generates the exact construct validated as the original MESA Receptor Daringer et al. (2014)
VEGF-sensing scFv based MESA: Reproduced design is validated by existing experiments (Schwarz et al., 2017)
GFP-sensing MESA: Employed anti-GFP nanobodies as binder domains for detecting GFP, reproducable with our SAbDab search tool (Edelstein et al., 2020)
### Expert Considerations
During a live demonstration with Prof. Dr. Joshua Leonard, one of the original MESA creators, we received valuable feedback on MESA Designer’s functionality and future development. Prof. Leonard praised the tool’s comprehensive feature set, intuitive interface, and practical application scenarios, particularly highlighting the seamless integration of experimentally validated components and clear literature references.
A few key improvements were identified during the session. As resources become available and compute cheaper, further Computational Integration directly incorporated into the software will provide de-novo binder design tools. For now Structure Prediction Support will be provided via ready-to-run BindCraft configuration files with MESA-specific parameters, particularly optimized for creating C-terminal proximity in binding domains among other factors. For now we are also planning to build a SLURM cluster ready variant which provides extended features on high-performance compute clusters.
Additionally he suggested that providing a detailed “breadcrumbs” file which tracks all selections and could be directly loaded into the tool would improve Experimental Reproducibility. This would allow users to share their configurations in an unmistakable way and supporting perfect reproducibility as feature complexity increases.
Prof. Leonard identified an unanticipated use case. MESA Designer’s clear visualization and extensive documentation make it ideal for educational settings, transforming it from purely a research tool into a teaching platform for synthetic receptor design. To this end Educational Resources like a specialized educator’s guide will be developed. The intuitive UI and immediate access to relevant papers position it as a great resource in protein engineering courses.
The validation session provided as with excellent feedback. Future iterations will focus on reducing external tool dependencies and enhancing reproducibility features to support the growing complexity of design options. He confirmed that in its current design MESA Designer successfully addresses the core challenge of accessible receptor design and “fills a gap” providing us with excellent expert validation.
Check out the meeting protocol on our Human Practices Page.
### Wet Lab Validation
Our team is currently validating MESA Designer through the construction and testing of two novel MESA receptors:
Progesterone-Responsive MESA Receptor: This receptor targets progesterone, a critical hormone in reproductive biology and a biomarker for various conditions. We designed the receptor using a crystal structure (pdbID: 9FKD) identified through our SAbDab search. The receptor consists of two chains with one binder being the linked ScFv domains of an anti-progesterone antibody and the other binder being a de-novo binder (Marchand et al., 2025). The software recommended TMD combination of CD28 and FGFR4 backed by experimental results for robust dimerization with minimal background signaling (Marchand et al., 2025). Split TEV protease was used to further enhance the fold change between bound and unbound states. You can see the creation of this MESA Construct in our instructional video on creating MESA Receptors using SAbDab search..
Human IgG1 Fc-Responsive MESA Receptor: Designed to detect human antibodies, this receptor has applications in autoimmune disease monitoring and therapeutic antibody detection. We utilized an Fc-binding domain from Protein A for one chain and human IgG-Fc-RI receptor as the other binder. Similar to the Progesterone-Responsive MESA Receptor, the software recommended a TMD combination of FGFR4 and CD28 for low background signaling and high fold change. You can see the creation of this MESA construct in our instructional video on creating MESA Receptors using a custom binder.
Wet lab validation will include cloning the part into pcDNAT7 vector (BBa_25GU3656) using Gibson Assembly followed by DNA maxiprep and cloning validation via restriction digest and Sanger sequencing to obtain: BBa_25636P3C (progesterone) and BBa_25QFZDG9 (Ig-G). Then, parts will be tested in HEK293T cells via two experiments:
#### MESA activation and reporter gene activation testing
Expected results:
Upon stimulation of MESA with the correct ligand, split TEV protease is expected to reconstitute and cleave the membrane-tethered tTA fusion with blue fluorescent protein (BFP). The released tTA will then translocate to the nucleus, bind to the tetracycline response element (TRE), and activate transcription of the yellow-fluorescent protein (YFP) reporter gene. In microscopy images, this is expected to be represented by nuclear BFP signal (tTA localization) together with cytoplasmic YFP expression.
Protocol:
HEK293T cells will be seeded in culture-treated plates and transfected 8 h later with plasmids encoding the software-generated MESA receptors (BBa_25636P3C and BBa_25QFZDG9), a TEV-releasable membrane-tethered tetracycline-controlled transactivator (tTA) (BBa_255QL5HA), and a tTA-inducible YFP reporter (BBa_25QFZDG9). Control groups will include cells transfected with the complete plasmid set but stimulated with a non-specific protein such as bovine serum albumin (BSA), mock-transfected cells receiving only carrier DNA, and cells receiving different combinations of the plasmids to assess background activity from individual components. Sixteen hours post-transfection, cells will be stimulated with either progesterone or IgG respectively. Fluorescence imaging will be performed 24 h after transfection, using the BFP channel to monitor tTA localization and the YFP channel to test reporter activation, as well as bright-field imaging for assessing cell condition. The resulting signals will be analyzed and quantified to evaluate ligand-dependent MESA dimerization and downstream transcriptional activation.
Results:
[IMG] InkSight Image
The objective of this experiment was to functionally validate a novel MESA receptor system entirely designed by our software. Transfection of HEK293T cells with various component combinations yielded a clear and interpretable pattern of fluorescence, confirming the system’s overall functionality while providing insight into its specific behavior.
As expected, control transfections containing only the MESA receptor, or MESA paired with just tTA-BFP or just the YFP reporter, showed no discernible BFP or YFP signal. These results are crucial as they demonstrate the specificity of the system; fluorescence is not produced by any single component alone and requires the complete pathway to be operational.
The critical data came from transfecting the full system, comprising the MESA receptor, tTA-BFP, and the YFP reporter. In the uninduced state, we observed both BFP and YFP fluorescence, indicating a detectable level of basal signaling activity within the cascade. Most importantly, upon induction with IgG Fc, we recorded a significant increase in the YFP signal. This ligand-dependent amplification confirms the core success of our design: the computationally designed MESA receptor is expressed, properly binds its ligand, and triggers the intended intracellular signaling cascade that culminates in reporter gene activation.
A notable observation was the absence of BFP signal in the ”MESA + tTA-BFP” condition, despite its presence in the full system. We interpret this not as a failure of expression, but rather as a consequence of cellular oversaturation when tTA-BFP is produced without its downstream partner. Based on previous experiments, we hypothesize that this oversaturation leads to protein misfolding, fluorophore quenching, or even degradation, thereby ablating the fluorescent signal.
In conclusion, this analysis robustly validates the function of our software-designed MESA receptor. The system demonstrates strong, specific, and inducible activation, with all results aligning with the expected biological logic and our understanding of expression artifacts. These findings provide a solid foundation for the next stages of development and application.
#### MESA activation and encapsulin assembly:
Expected results:
We designed Myxococcus xanthus pro-encapsulins (BBa_25KXAEJD) to include three repeating LBT-15 domains, separated by GS linkers, positioned upstream of the encapsulin sequences to sterically prevent self-assembly. A TEV protease cleavage site was placed between these domains and the encapsulin core to allow inducible nanocage assembly upon proteolytic cleavage. Encapsulins are tagged with eUnaG, providing a fluorescent signal to directly monitor nanocage formation. This design links encapsulin assembly to biomarker detection by the MESA receptor: upon ligand binding, MESA dimerizes and reconstitutes split TEV protease, which cleaves the pro-encapsulins and removes the steric hindrance, thereby triggering eUnaG-tagged encapsulin assembly. In the Native PAGE gels, assembled encapsulins are expected to appear as distinct higher-order fluorescent bands, whereas unstimulated conditions should predominantly show monomeric pro-encapsulins with hindrance domains migrating lower on the gel.
Protocol:
HEK293T cells will be seeded in culture-treated plates and transfected 16–24 h later with plasmids encoding the MESA receptors and the pro-encapsulin constructs. Sixteen hours post-transfection, cells will be stimulated with either progesterone or IgG. After 24 h of stimulation, cells will be lysed and the lysates analyzed by native PAGE. Gels will first be imaged to detect eUnaG fluorescence as a readout of nanocage assembly, and subsequently stained with Coomassie to visualize the total protein content.
The detailed protocols can be found on our experiments page
## Development
### FAIR4RS
The FAIR4RS prinicples address significant challenges in discoverability, productivity, quality and sustainability of research software. The FAIR4RS Working Group defines research software as “source code files, algorithms, scripts, com-
putational workflows and executables that were created during the research process or for a research purpose.” Barker et al. (2022) Our tool fits squarely within multiple of these definitions and as such adhering to the practices and guidelines layed out by FAIR4RS is greatly beneficial for all the purposes it tries to accomplish. The FAIR acronym outlines the following aspects and we fulfill any applicable aspects in these specific ways:
| Requirement
| Implementation
| F: Software, and its associated metadata, is easy for both humans and machines to find.
| Description
| F1: Software is assigned a globally unique and persistent identifier.
| This is accomplished by using the same name on every platform (GitLab, GitHub, DockerHub, Python Package Index) the tool or a component of it is available the same: mesa-designer. While variations such as MESA Designer Toolkit are used to describe the collection of packages, the globally unique identifier is consitent.
| F1.1: Components of the software representing levels of granularity are assigned distinct identifiers.
| This is achieved by calling the web application and api and any sub-components by their specific names. On dockerhub we distinguish between -all, -api and -webapp images.
| F1.2 Different versions of the software are assigned distinct identifiers.
| Different version of our Software are identified via different version tags (example: v1.5.2 or latest)
| A: Software, and its metadata, is retrievable via standardised protocols.
| Description
| A1: Software is retrievable by its identifier using a standardised communications protocol.
| We accomplish this by relying on established and widely adopted methods. GitLab and GitHub use git allowing for simple git pull commands, DockerHub simply uses the standardized docker pull for image retrieval and the python package is installable via a simple and standard pip install mesa-designer.
| 1.1: The protocol is open, free, and universally implementable.
| This is the case for all listed methods.
| A1.2: The protocol allows for an authentication and authorization procedure, where necessary.
| Since all of the code is openly available, no authentication is necessary.
| I: Software interoperates with other software by exchanging data and/or metadata, and/or through interaction via application programming interfaces (APIs), described through standards.
| Description
| I1: Software reads, writes and exchanges data in a way that meets domain-relevant community standards.
| All components of mesa-designer are able to and rely on inputting and outputting in default, standardized methods such as genbank files and pdb files. This integrates perfectly with existing synbio tools. API Endpoints and the python package implement this criterium on the software side.
| Software includes qualified references to other objects.
| All sources for curated data are clearly available in all distributions and version of the software.
| R: Software is both usable (can be executed) and reusable (can be understood, modified, built upon, or incorporated into other software).
| Description
| R1. Software is described with a plurality of accurate and relevant attributes.
| By commenting all aspects of the software (as described below) this is achieved.
| R1.1. Software is given a clear and accessible license.
| As all aspects of iGEM the MESA Designer Software is distributed under the CC-BY-4.0 license.
| R2. Software includes qualified references to other Software.
| We focused on this by including different tools such as BindCraft, TMDock and SPELL from the start of design to support full customizability.
Barker et al. (2022)
### Examples
Type Safety and Documentation: Every function in our codebase features complete type annotations, enabling static type checking that catches errors before runtime. This is critical when handling biological data where a single character difference can mean the difference between life and death. Consisten documentation, annotations and docstrings, with every parameter, return value, and potential exception explicitly documented make understanding the code easy and fast. This comprehensive documentation enables both immediate use and future contributions. With increased AI usage by biologists this also enables LLMs to truly understand the code and provide good help to inexperienced programmers.
You can take a look at one such function and its extensive annotations here:
# cache for better performance as users typically switch back and forth, thus allowing for previous determinations to be re-used @st.cache_data(show_spinner=False) def enable_sequence_optimization(sequences: list[str], legal_amino_acids: set[str]) -> bool: """ This function takes a list of sequences and determines whether sequence optimization is possible. :param sequences: A list of sequences. :param legal_amino_acids: A set of legal amino acid characters. :return: True if sequence optimization is possible, False otherwise. """ # check if any of the sequences contain illegal characters for seq in sequences: seq_letters: set[str] = set(letter for letter in seq) for aa in seq_letters: if aa not in legal_amino_acids: print(f"Sequence optimization is not possible due to illegal character in sequence: {seq}; aa: {aa}") return False # return true otherwise return True
Error Handling and Validation: Robust error handling prevents silent failures that could lead to non-functional constructs. Input validation ensures sequences contain only valid amino acids, chain selections reference existing structures, and optimization parameters are biologically reasonable. When errors occur, informative messages guide users toward solutions rather than presenting cryptic stack traces.
Performance and Scalability: Strategic use of caching accelerates repeated operations - PDB structures are cached after retrieval, sequence optimization results are memoized, and database queries use connection pooling. These optimizations enable MESA Designer to handle both single designs through the web interface and thousands of designs through the API without performance degradation.
### Architecture
#### Architecture
[IMG] Architecture Diagram
#### User Interaction
[IMG] User Interaction Data Flow Diagram
MESA Designer employs a modular, service-oriented architecture that separates concerns while maintaining cohesion:
Frontend Layer (Streamlit Web App): The web application provides an intuitive interface built on Streamlit's reactive framework. Components are modularized for maintainability - target selection, structure visualization, linker design, and TMD selection exist as independent modules that communicate through well-defined interfaces using streamlit session state. The 3D structure viewer leverages Py3Dmol for interactive molecular visualization without requiring browser plugins.
REST API (FastAPI): Our REST API built on FastAPI provides high-performance asynchronous request handling with automatic OpenAPI documentation generation. Input validation through Pydantic models ensures data integrity while providing clear error messages. The API’s stateless design enables horizontal scaling and load balancing for high-throughput applications.
Python Package: The mesa_designer package contains the business logic for MESA construction, separated from presentation concerns. Object-oriented design models biological concepts intuitively - MesaChain objects represent individual receptor chains, with methods for adding components that mirror the biological assembly process. This separation enables the same logic to power the web interface, API, and standalone Python package.
Data Layer: Curated databases of validated components are stored as structured JSON and SQLite Databases for fast access and easy updates. Integration with external databases (SAbDab for antibodies, RCSB for structures) uses asynchronous requests with fallback mechanisms for reliability and availability while minimizing the applications footprint.
### Future Development
Our development roadmap, shaped by community feedback and tracked through GitLab issues and GitHub issues, focuses on expanding capabilities while maintaining usability:
Planned Features:
Including predictive models for MESA performance based on component combinations will enable in-silico verification and pre-selection. This will further contribute to the integration of the tool in design space exploration. Integrated machine learning models will be trained on the expanding database of validated designs.
As of now MESA Designer requires users to design their genetic circuits. Our modular approach will enable us to create a Multiplexed Receptor Design component supporting multiple inputs, logical connections and orthogonal outputs.
By supporting automatic codon-optimization for any target organism and restriction site set, we already reduced the time required for wetlab experiments for our own team significantly, however this can be further improved by expanding the toolkit with an Automated Cloning Design module which generates complete cloning strategies including primer design, Gibson assembly fragments, and Golden Gate compatible parts.
The current tool is incredibly light-weight and can be run with ease without requiring a lot of resources, access is further improved by offering pre-built Docker images thus enabling a single server to host the service and allowing anyone with a web-browser to access the tool. Supporting User accounts with saved designs, version control and collaboration features would certainly be an improvement over the current single-session design. The addition of Real-time Collaboration, like google docs for MESA Constructs might also be interesting.
We actively solicit feedback from the synthetic biology community through user surveys, GitLab and GitHub discussions, and direct outreach to MESA experts and users. This feedback directly influences our development priorities, ensuring MESA Designer keeps focusing on real research needs rather than hypothetical use cases.
## Installation
Linux install:
Mac OS install:
Windows install:
### Containerized Deployment
Docker deployment ensures consistency across environments and greatly simplifies installation. This also enables easy integration with existing environments via the use of docker compose scripts. This modular, containerized approach minimizes resource usage - a research group might deploy only the API on their compute cluster while running the web interface on a local workstation.
Pre-Built Docker Images (Recommended for Beginners):
#### Requirements
- Docker: latest version. You can download and install this according to the official installation instructions
#### Steps
- You can view pre-built docker images on dockerhub and find a preferred version (we recommend the latest).
Note: For most versions there are different containers available: all, webapp and api. These can be identified by their respective names ending in -all, -webapp and -api respectively. You can download (pull) the latest official version from dockerhub by running this command from a commandline or terminal while docker is running on your system:
docker pull --platform linux/amd64 aeneastews/mesa-designer:latest
- The image can be started by running the following command from a commandline or terminal while docker is running on your system:
docker run -p 8501:8501 -p 8000:8000 aeneastews/mesa-designer:latest
Production Deployment / Custom Build:
For institutional deployment, we provide easily adaptable dockerfiles for orchestrated multi-container deployment with reverse proxies, SSL termination, and automated backups. The software runs efficiently on standard cloud platforms such as AWS EC2, Google Cloud Platform or Hetzner Cloud. The environments are also compatible with standard academic computing environments including everything from simple machines to SLURM clusters.
#### Requirements
- Docker: latest version. You can download and install this according to the official installation instructions
#### Steps
Download or clone the Dockerfile from the repository. This can be done by navigating to the Munich 2025 iGEM GitLab repo and downloading the Dockerfile from the list of files. You can then adapt the file to your specific needs or use the default settings for an easy deployment. However, in the latter case we recommend using a pre-built image.
Move the downloaded Dockerfile to a directory of your choice and ensure it is named “Dockerfile”
Start docker on your system if not already running. You can navigate to the same directory using a commandline or terminal and run the following command to compile the docker image:
docker build -t mesa-designer .
- This image can be started by running the following command from a commandline or terminal while docker is running on your system:
docker run -p 8501:8501 -p 8000:8000 mesa-designer
### Local Installation
For researchers requiring local installation due to data sensitivity or customization needs, we provide the option of local deployment. This approach enables complete access, customizability and data privacy by removing the need for cross-device communication thus enabling increased security and protecting user’s data.
#### Requirements
- Python: version=3.13.x. You can download and install this according to the official installation instructions. It may already be installed, you can check this by running python --version or python3 --version from a commandline or terminal. If the result is anything other than Python 3.13.x # Note: x represents a flexible number then you likely do not have the correct version of Python installed.
- Git: This is recommended for cloning the repository, though not strictly necessary. This will, however, enable easy updates to future versions. You can download it according to the official installation instructions. This may already be installed on your system. You can check this by running git --version from a commandline or terminal. If the result is anything other than git version x.x.x you will probably have to install it.
#### Steps
- Download or clone the repository:
If you elected not to download git (not recommended), you have to download the zip archive from the Munich 2025 iGEM GitLab repo by clicking the Code dropdown and selecting the zip-archive option.
Assuming you downloaded git (recommended), run these commands from a commandline or terminal:
git clone https://gitlab.igem.org/2025/software-tools/munich.git cd munich
- Running the tool requires a few dependencies. To keep these separated, you should create a python virtual environment.
This can be done by running this command from a commandline or terminal.
Note: You should do this inside the munich directory which was downloaded during the previous step:
python -m venv .venv
- To install the required packages in the virtual environment, it has to be activated first.
# On Windows run this command from the munich directory: .\.venv\Scripts\activate # On Mac OS or Linux run this command from the munich directory: source ./.venv/bin/activate
The required packages will be automatically installed and setup via this command on both systems:
pip install -r requirements.txt
- The MESA Designer tool is based on validated experimental data from multiple databases. This data can be automatically set up using the included setup.py script. Please run it using:
python setup.py
- Since the system comes with two available services, you can start these individually to your liking. Starting the webapp can be achieved by running the following command from a commandline or terminal:
# On Windows run this command from the munich directory: streamlit run .\app\main.py # On Mac OS or Linux run this command from the munich directory: streamlit run ./app/main.py
- Starting the API does not require the webapp to be running. However, if you wish to start both at the same time, we recommend doing so in a new commandline or terminal window.
From the munich directory run the following command in a new commandline or terminal window:
uvicorn api.main:app
### Python Package Index (PyPi) Package
For easy integration with custom projects, the python package provides extended features, low-level control and complete documentation. This method is intended to be used by developers seeking to integrate MESA functionality into their project or extend the MESA Designer Toolkit.
#### Requirements
- Python: version>=3.10. You can download and install this according to the official installation instructions. It may already be installed, you can check this by running python --version or python3 --version from a commandline or terminal. If the result is anything other than Python 3.13.x # Note: x represents a flexible number then you likely do not have the correct version of Python installed.
- biopython: compatible version with your own project. You can check it out on and install it from PyPi.
#### Steps
- Having activated your desired installation python environment, run:
pip install mesa-designer
### Additional Notes
#### Opening the Terminal / Command Line
Windows:
- Press Windows Key + R, type cmd, and press Enter
- Or search for “Command Prompt” or “PowerShell” in the Start menu
macOS:
- Press Command + Space, type “Terminal”, and press Enter
- Or find it in Applications > Utilities > Terminal
Linux:
- Press Ctrl + Alt + T
- Or search for “Terminal” in your applications menu
Try MESA Designer Now at https://mesa.igem-munich.com/
### Hardware Requirements
Extensive testing revealed that at least 4GB of RAM and 2 CPU cores should be available for the system. While the tool itself doesn’t benefit a lot from multithreading, users will likely want to be able to do other things. For this reason at least 2 cores are strongly recommended. If you are close to these minimum requirements, should consider using the local installation guide, as this has the least overhead compared to other installation methods. Note: These specifications represent the minimum requirements. While the app will run, you may experience long wait times. 8GB or RAM and at least 4 cores with Hyper-Threading are strongly recommended.
## Conclusion
### Vision for iGEM and Beyond
MESA Designer transforms synthetic receptor engineering from an expert-only endeavor into an accessible tool for the entire synthetic biology community. We envision future iGEM teams leveraging our software across diverse tracks:
Therapeutics Track: Teams could rapidly prototype CAR-T cell receptors by designing MESA variants that recognize tumor antigens while maintaining orthogonality to native T-cell signaling. The ability to quickly generate multiple receptor variants with different sensitivities enables optimization of therapeutic windows.
Diagnostics Track: Environmental sensing becomes straightforward with MESA and MESA Designer. Teams could create whole-cell biosensors for water quality monitoring by designing receptors for heavy metals, pesticides, or pathogens. The FRET validation constructs enable rapid prototyping without waiting for functional assays.
Software Development: The excellent documentation, use of well-known components such as python and modular architecture of MESA Designers code base allows excellent extension and improvement of the software. Its architecture serves as a starting point for future design software. Teams could extend our codebase to design other synthetic biology components - imagine similar tools for designing synthetic promoters, terminators, or metabolic pathways.
Manufacturing Track: MESA receptors could control bioproduction in response to extracellular signals. Teams might design receptors that sense nutrient depletion and trigger production of valuable compounds, or create quality control systems that respond to contamination markers.
Looking at past iGEM projects, we see immense potential for MESA adoption. Teams like Munich 2022 (working on CAR T-Cell activation), SMMU-China 2019 (creating a synthetic receptors toolkit), and UTokyo 2023 (creating IL-6 biosensors) could have accelerated their development timelines from months to days using our software.
### Sustainable Open Science
MESA Designer embodies open science principles that ensure its longevity and impact:
Comprehensive Documentation Suite: Beyond our wiki and README, we provide videos on installation and usage, live streams and downloadable PDF guides for offline reference - perfect for laboratory environments with limited internet access. Our documentation includes:
- Installation Guide
Complete User Manual with detailed protocols
Open API Reference allowing for automatic client generation in 50+ programming languages (Swagger-Codegen-Contributors, 2025)
Troubleshooting Guide addressing common issues
Community and Collaboration: Our open-source model (CC-BY-4.0 license) ensures MESA Designer remains freely available while encouraging contributions. The codebase architecture facilitates extensions - new components can be added by simply updating a configuration file, and new analysis modules can be integrated seamlessly through python and streamlit.
Educational Impact: MESA Designer serves as an educational platform for understanding synthetic receptor design. The visual interface demystifies complex molecular interactions, while the open codebase provides a real-world example of professional biological software development.
### Get Started Today
MESA Designer stands ready to accelerate your synthetic biology projects. Whether you’re designing your first biosensor or optimizing a therapeutic cell circuit, our software provides the tools and knowledge to succeed.
Explore: Visit https://mesa.igem-munich.com/ to design your first MESA receptor
Learn: Download our comprehensive guides and explore example designs
Contribute: Report issues, suggest features, or contribute code on GitLab
Connect: Join our community discussions and share your MESA success stories
The future of synthetic receptor engineering is modular, accessible, and powerful. With MESA Designer, that future is now.
## References
Escherichia Coli Human Embryonic Kidney Cells Modular Extracellular Sensory Architecture Tobacco Etch Virus Technical University of Munich Ludwig-Maximilians-Universität München Förster Resonance Energy Transfer Ligand Binding Domain Transmembrane Domain Intracellular Effector Domain Generalized Extracellular Molecule Sensor Synthetic Intermembrane Proteolysis Receptors Transcription Factor Human Embryonic Kidney Human Embryonic Kidney Amino Acid Triangulation Number C-terminal Domain N-terminal Domain Split Protease-Cleavable Orthogonal Coiled-Coil High-Performance Liquid Chromatography Heterodimeric Coiled-Coiled Peptides enhanced Unagi (eel) Green fluorescent protein tetracycline-controlled transactivator Heterodimeric Coiled-Coil Peptide P3 Heterodimeric Coiled-Coil Peptide P4 circular permutation Bicinchoninic acid Bovine Serum Albumin Erythropoietin
Barker, M., Chue Hong, N.P., Katz, D.S., Lamprecht, A.-L., Martinez-Ortiz, C., Psomopoulos, F., Harrow, J., Castro, L.J., Gruenpeter, M., Martinez, P.A., others, 2022. Introducing the FAIR Principles for research software. Scientific Data 9, 622.
Berman, H.M., Westbrook, J., Feng, Z., Gilliland, G., Bhat, T.N., Weissig, H., Shindyalov, I.N., Bourne, P.E., 2000. The protein data bank. Nucleic acids research 28, 235–242.
Dagliyan, O., Krokhotin, A., Ozkan-Dagliyan, I., Deiters, A., Der, C.J., Hahn, K.M., Dokholyan, N.V., 2018. Computational design of chemogenetic and optogenetic split proteins. Nature Communications 9, 4042. https://doi.org/10.1038/s41467-018-06531-4
Daringer, N.M., Dudek, R.M., Schwarz, K.A., Leonard, J.N., 2014. Modular extracellular sensor architecture for engineering mammalian cell-based devices. ACS synthetic biology 3, 892–902. https://doi.org/10.1021/sb400128g
Edelstein, H.I., Donahue, P.S., Muldoon, J.J., Kang, A.K., Dolberg, T.B., Battaglia, L.M., Allchin, E.R., Hong, M., Leonard, J.N., 2020. Elucidation and refinement of synthetic receptor mechanisms. Synthetic Biology (Oxford, England) 5, ysaa017. https://doi.org/10.1093/synbio/ysaa017
Fielding, R.T., 2000. Architectural styles and the design of network-based software architectures. University of California, Irvine.
Jankauskaitė, J., Jiménez-Garcı́a, B., Dapkūnas, J., Fernández-Recio, J., Moal, I.H., 2019. SKEMPI 2.0: an updated benchmark of changes in protein–protein binding energy, kinetics and thermodynamics upon mutation. Bioinformatics 35, 462–469.
Jares-Erijman, E.A., Jovin, T.M., 2003. FRET imaging. Nature biotechnology 21, 1387–1395.
Lomize, A.L., Pogozheva, I.D., 2017. TMDOCK: an energy-based method for modeling α-helical dimers in membranes. Journal of molecular biology 429, 390–398.
Marchand, A., Buckley, S., Schneuing, A., Pacesa, M., Elia, M., Gainza, P., Elizarova, E., Neeser, R.M., Lee, P.-W., Reymond, L., others, 2025. Targeting protein–ligand neosurfaces with a generalizable deep learning tool. Nature 639, 522–531.
Pacesa, M., Nickel, L., Schellhaas, C., Schmidt, J., Pyatova, E., Kissling, L., Barendse, P., Choudhury, J., Kapoor, S., Alcaraz-Serna, A., others, 2024. BindCraft: one-shot design of functional protein binders. bioRxiv 2024–09.
Schneider, C., Raybould, M.I., Deane, C.M., 2022. SAbDab in the age of biotherapeutics: updates including SAbDab-nano, the nanobody structure tracker. Nucleic acids research 50, D1368–D1372.
Schwarz, K.A., Daringer, N.M., Dolberg, T.B., Leonard, J.N., 2017. Rewiring human cellular input–output using modular extracellular sensors. Nature chemical biology 13, 202–209.
Swagger-Codegen-Contributors, 2025. Swagger Codegen GitHub Repository.
Teng, F., Cui, T., Zhou, L., Gao, Q., Zhou, Q., Li, W., 2024. Programmable synthetic receptors: the next-generation of cell and gene therapies. Signal Transduction and Targeted Therapy 9, 7.
Follow us on social media
[IMG] Facebook
[IMG] Instagram
[IMG] LinkedIn
[IMG] BlueSky
[IMG] YouTube
[IMG] iGEM Munich Website
© 2025 - Content on this site is licensed under a Creative Commons Attribution 4.0 International license.
The repository used to create the wiki for iGEM Team Munich 2025 is available at gitlab.igem.org/2025/munich.
