# Best Model casebook

Six Best Model winners, 2023 to 2025, read for how they write. Two of our pages are judged
against this prize: `model/index.html`, the Math Model page, and the `protein-design/`
cluster with its three subpages. Each winner below is marked as a precedent for one, both or
neither.

Sources are the rendered text files in `sources/text/model-*.md`, listed with their URLs in
`sources/pages.model.txt`. Word counts are body only, excluding wiki navigation, and include
captions and image alt text. Quoted fragments are verbatim from those files (iGEM wiki
content, CC BY 4.0). The excerpt bank is `research/model.excerpts.json` (22 excerpts).

The prize is called Best Model on the 2023, 2024 and 2025 results pages and in the 2026
judging handbook. Unlike Best Software Tool, which 2026 renames Best Software, this name has
not changed, so `also_known_as` is empty. Every winner was verified from
`competition.igem.org/results/<year>?tab=special-prizes`. There were no ties and no combined
collegiate sections: both Undergrad and Overgrad were awarded separately in all three years.

Two teams won twice. Heidelberg took 2024 UG and 2025 OG with different projects and
different models. The University of Toronto won 2023 OG as `Toronto` and 2024 OG as
`UToronto`, which the results pages treat as separate teams (`teams.igem.org/4615` and
`/5230`). So the six winner slots are four distinct institutions.

## Criteria

The 2026 ballot questions, verbatim:

1. How impressive is the modeling or computational approach?
2. Did the model or computational approach help the team understand, predict, or design a
   part, device, or system?
3. Did the team use experimental or other relevant data to develop, train, or validate the
   model or computational approach?
4. Does the modeling or computational approach provide a good example for others?

What each one rewards in writing terms, rather than in work terms:

1. Not difficulty. Scope stated early and honestly: what was modelled, at what scale, with
   what method, and what the model cannot do. A reader who cannot say in one sentence what
   the model takes in and gives out will not score this high however hard the maths was.
2. A named decision changed by the model. Not "informed our design" but a construct dropped,
   a cut point chosen, a tag moved, a setpoint fixed. The verb has to be transitive and past
   tense.
3. A comparison against a number the model did not already contain. Winners score here by
   showing the comparison fail as often as by showing it pass, provided the failure is
   diagnosed.
4. Reusability written for a stranger: parameters, versions, inputs, and the instruction for
   extending the thing. All six give software versions. Only three give a repository.

Where each winner answers each question:

| Question | Peking 2025 UG | Heidelberg 2025 OG | Heidelberg 2024 UG | UToronto 2024 OG | ZJU-China 2023 UG | Toronto 2023 OG |
|---|---|---|---|---|---|---|
| 1 Impressive | Eight models across six orders of magnitude, from gel dissolution to a population SEIR | Binder generation, umbrella sampling, coarse-grained membrane, ODE circuit, inverted into a design database | Three nested scales: AlphaFold3, all-atom GROMACS, coarse-grained oxDNA | Mamba2 state-space model on 137,041 plasmids with a BPE tokenizer | Cross-scale: large-eddy wind field to RNA random walk to antibody binding | Genome-scale FBA plus a modified FSEOF and a new knockout scanner |
| 2 Helped design | Lamp-free: picks the gel, the motor load and the dosing window | Binder shortlist, transmembrane domain choice, and a top-k architecture shortlist | fgRNA linker length, staple target spacing, peptide linker choice | Class B oris chosen for the wet lab; 6 proteins ordered | Antibody pair selected; a working concentration recommended | Five named gene targets: frdABCD, MEOHDH, MEOHtrpp, MEOHtex, FDH |
| 3 Data used | 100 ns MD validated against its own equilibration; SEIR anchored on a published 40.66% prevalence | CF2H assay, flow cytometry on >33,000 cells, Kendall's tau against wet lab rankings | EMSA binding energies, and literature values, compared against computed dG | In vitro ori replication across three batches; ESMFold structure screens | qPCR mRNA gradients against finite-element predictions | Literature only, stated as such |
| 4 Example for others | GitHub repository, GROMACS Zenodo DOI, a Parameter Sources section | PHOENICS Builder, an extensible precomputed database, 11 parameter tables | 15 Registry part links, parameters in supplementary material, named HPC cluster | 17 DOIs, an appendix of hyperparameters and hardware, a released package | One GitLab link, no parameter files | FSEOF implementation on GitHub, GSMM built in three reproducible steps |

None of Marburg, UZurich, HUST-China, Bielefeld-CeBiTec or the Thessaloniki teams won or was
nominated for Best Model in 2023, 2024 or 2025. Their modelling-adjacent placings were in
other prizes. The full Best Model nominee lists for the three years are in
`/tmp/results-20{23,24,25}.txt` if anyone wants to check.

## Peking 2025 UG

Project: engineered *Saccharomyces boulardii* against *Helicobacter pylori*, delivered in
pH-responsive microspheres carrying calcium-carbonate micromotors. About 13,700 words, 118
headings, nesting to six levels, 97 numbered figure references.

### Page anatomy

An untitled lead, then eight models in the order the drug meets the body: gel dissolution
kinetics; micromotor propulsion; diffusion in the gastric cavity; penetration of the mucus
layer; molecular dynamics of the HopQ-C1ND complex; the GPCR signalling cascade as ODEs;
AiiA diffusion by finite elements; and an improved SEIR model with drug resistance. Each
block runs Background, Model Assumptions, Mathematical Modelling, Methods, Parameter Table,
Results. The page closes with Parameter Sources, Code availability and References.

### Opening

The lead sits above every heading. Two numbers retire the existing options: combination
antibiotics "initially achieved eradication rates of approximately 90%" and then declined,
probiotics came in "often below 30%". Then the physical cause in one sentence: "The core
problem is that probiotics, as large particles, have difficulty penetrating gastric mucus".
Then the roadmap, which is the model's own order: "in the dry lab, we aimed to model the
drug's journey from entry into the body". The order of the model is the order of the problem.
No excerpt is banked from this passage because it sits under no heading at all.

### Reporting numbers

The strongest thing on the page. In the MD section every quantity carries a spread and most
carry a coefficient of variation: backbone RMSD "stabilized at 0.29±0.01 nm with fluctuation
amplitude ≤0.02 nm", radius of gyration "3.02±0.03 nm throughout 100 ns simulation with only
0.99% coefficient of variation", SASA "195±15 nm² with range 180-210 nm²". Equilibration is
written up as a result rather than skipped: temperature "stabilized at 300±0.5 K with
Gaussian distribution", pressure converged "to 1±50 atm", density "1000±2 kg/m³", and the
paragraph ends by saying what that buys, "validating the rationality of the simulation
environment".

The Parameter Sources section cross-checks each borrowed parameter by a second independent
route and quotes the disagreement: a hydration radius derived two ways "with <10% deviation
between methods", a diffusion coefficient checked against two homologous enzymes "with <6%
deviation between derived and measured values". This is the answer to a chain that multiplies
literature factors.

### Assumptions

Listed per block under their own heading, each named as an assumption and then translated.
The pattern is a "that is" or "meaning that" clause: the Hill coefficient "is set to n=1,
meaning that each binding site is independent of each other". The translation is what makes
the list readable by a judge from another field.

### Weak spots

- Many assumptions name the simplification without costing it. The mucus layer is "modeled
  as a uniform Newtonian fluid with constant viscosity", and nothing says what breaks if it
  is not.
- The SEIR conclusion overruns its evidence. Reproducing one published prevalence figure
  becomes "demonstrating the reliability of our model".
- Six levels of heading and 118 headings. Several govern two sentences.
- LaTeX leaks into the rendered page: "radius RRR and mass mmm", "r_h=2.55\ \text{nm}rh".
  This is on the live page, not an artefact of our extraction.

### Precedent for

`model/index.html`, strongly. It is the only winner that orders a multi-block model by the
physical journey of the thing being modelled, which is what our three blocks do. Its MD
section is also a direct precedent for `protein-design/molecular-dynamics/`, and the better
one of the two: it shows what our nine trajectories should look like with spreads attached.

## Heidelberg 2025 OG

Project: PHOENICS, retargetable synthetic receptors plus a phosphorylation logic circuit for
tumour microenvironments. The model is SPARC, the Simulator for Phosphorylation And Receptor
Characterization. About 13,000 words, 48 headings, 37 numbered figures, 11 tables.

### Page anatomy

1. Introduction, with the model's three jobs named as headings.
2. Expanding Tumor Targeting Potential: de novo binder generation with BindCraft; affinity
   characterisation by umbrella sampling and potential of mean force; coarse-grained
   simulation of membrane receptor dimerisation. Each ends in Results then Outlook.
3. Mathematical Modeling of System Processes: Underlying Assumptions, then a sensing layer
   and a processing layer developed separately and then integrated.
4. Model-guided PHOENICS Cell Design: ultrasensitivity analysis, then a precomputed database.
5. PHOENICS Builder, an interactive tool on the page.

### Assumptions

The single best assumption statement in the six. It gets its own heading, names the central
assumption in one clause, defends it by mechanism rather than by convention, and cites a
textbook, a paper and a named interview. The justification is the part worth copying: the
steady state is "appropriate, because our system is based on rapid phosphorylation and
dephosphorylation of existing cellular components, instead of relying on significantly slower
expression".

### Validation

Three validations, each against something the model had not seen, and each reported with the
statistic that fits the sample. The binder work ranks five de novo binders in silico and then
compares the ranking to a Cell-free Two-Hybrid assay using "Kendall's tau as well as
Spearman correlation", with Kendall chosen because it "is better suited for quantifying
ranking similarity for the small sample size of n = 5 binders". The team's own generator
scores negative, tau = -0.20, and that is printed in a table beside the two methods that beat
it. The circuit model is then overlaid on a flow-cytometry titration and agrees at R² ≈ 0.93,
with the enabling assumption stated plainly: intracellular concentrations were unknown, so
"we assumed that the relative transfection ratios proportionally reflected the ratio of
intracellular concentrations".

### Admitting a limitation

The Hill coefficient comparison is the template. Predicted 1.002 against fitted 1.373. Three
candidate causes are offered, one of them the model's own simplifications. Then the two
sentences that keep the reader: the conclusion that survives ("these small discrepancies do
not change the core conclusion: the system's dose-response curve is slow-switching") and the
standard of accuracy the model actually needs ("This level of agreement is sufficient for
early-stage screening to identify and exclude designs with clearly undesirable
characteristics"). Naming the required accuracy is what stops a mismatch reading as a
failure.

### Making it reusable

The forward model is inverted into design by specification. Because "the mathematical model
spans 18 coupled parameters, an analytical inversion is infeasible", so the team enumerated
the design space instead and matches a desired switching profile by nearest neighbour,
returning a top-k shortlist. The Outlook then gives the extension recipe: what a user
supplies, what the pipeline does with it, and what new components would add.

### Weak spots

- The Introduction is written in grant-application register: "cutting-edge", "a significant
  advancement in personalized oncology". The three model purposes are then printed twice,
  once as headings and once as bullets.
- Figure alt text is "Description of your image" throughout, so a screen reader gets nothing
  from 32 images.
- No code repository beyond the footer GitLab link, despite 11 parameter tables.

### Precedent for

`protein-design/`, strongly, and it is the closest match to what our cluster is trying to
be: generate candidates, rank them computationally, validate the ranking against a bench
assay, then publish the ranking method that won. Partial precedent for `model/index.html`
through its layered structure, but it has no economics.

## Heidelberg 2024 UG

Project: PICasSO, Cas-based "staple" proteins that force DNA-DNA contacts for 3D genome
engineering. The model is DaVinci, which the page calls a digital twin. About 8,200 words
of body text, 23 content figures, 19 numbered figures, 15 Registry part links.

### Page anatomy

Our Model DaVinci (the lead), DaVinci in a Nutshell, three result teasers, Introduction,
Background Information (structure prediction, all-atom MD, coarse-grained MD), User Guide,
Implementations, Static Molecular Interaction Predictions, Long-Range DNA Dynamics
Simulations, Discussion and the Road Ahead, references. Three nested scales: AlphaFold3 for
static structures, GROMACS all-atom MD for dynamics and binding energies, oxDNA
coarse-grained for whole-plasmid effects.

### Opening

Four sentences, and the fourth is the one that matters. The biology, then the cost of doing
it at the bench ("trial-and-error iterations through various staple designs and experimental
conditions can be labor-intensive, costly, and time-consuming"), then the model named with a
job ("To overcome this limitation, we developed DaVinci"), then the structure. A reader knows
why the model exists before any method is named.

### The model card

Immediately after the lead, three bullets: what goes in, what comes out, and "Assumes only
Newtonian mechanics and conventional base pair interactions". Forty words fix the scope of
an 8,000-word page. Each result section then repeats a short `Assumptions` bullet block of
its own, ending "For more details see Core Assumptions". Assumptions stated once centrally
and restated locally wherever they bite.

### Reporting a number against the bench

The strongest uncertainty writing in the six. A computed dissociation free energy of 175 ± 97
kcal/mol is put beside the team's own EMSA measurement of 9.256 ± 10.676 and a published
10.7 ± 11.48. The apparent agreement is then refused rather than claimed: "Even though our
calculation is within the 1.6 deviation of the experimental data, this is due to a large
error in the calculation." A second, independent check settles it: the trajectory shows "DNA
strand separation was observed, suggesting an unnatural event". The figure caption carries
the same verdict instead of only naming the plot.

### Teaching the reader to read your output

A short paragraph explains how the simulation expresses a failure it cannot literally
represent: bonds cannot break in oxDNA, so a break shows up as scattered nucleotides and
distorted backbones, and therefore "as soon as the stapled nucleotides show more than one
peak, DNA double-strand breaks occured in the simulation". Every figure afterwards is
readable. Our MD page needs exactly this for clamp integrity.

### Closing the loop and bounding the claim

The safety conclusion is a ratio, not an adjective: the forces needed to damage DNA are "more
than 320 times stronger" than the staple's own, and the sentence that states it begins
"According to our model". The multiplexing result reports a failure and the fix in one
breath: staples 40 nucleotides apart break the plasmid, 980 apart do not. And in the
Discussion, a predicted strand break is reinterpreted against reality by appealing to the
model's own assumption: staples are "fixed to the DNA in our simulation", whereas a real Cas
protein "will rather be lost in such a case due to staple dissociation".

### Weak spots

- The Background Information section prints its structure-prediction paragraph twice, nearly
  word for word, under two headings.
- "User Guide / How to use DaVinci" and "Implementations" render as headings with no content.
- "DaVinci in a Nutshell" is used as a heading twice for different material.

### Precedent for

`protein-design/` and especially `protein-design/molecular-dynamics/`. It is the closest
structural twin to our MD work: a static prediction stage, an all-atom stage, a comparison
against a bench measurement that does not agree, and a coarse stage for the system-level
question. Also the precedent for calling a model a digital twin and then showing the
pipeline that earns the word.

## UToronto 2024 OG

Project: de novo plasmid generation. A Mamba2 state-space model with a custom Byte Pair
Encoding tokenizer, pre-trained on 137,041 plasmid sequences, generating oris and
antimicrobial proteins that were then tested in vitro. About 6,700 words, 41 headings, 17
DOIs, 10 journal links, an appendix of architecture, hyperparameters and hardware.

### Page anatomy

Abstract, Background, Objectives, Methods (Dataset Curation, Model Development, In Silico
Validation Pipeline, Protein Validation), Ori Batch Results (Batch 1, 2, 3), Protein
Selection, Most Valuable Plasmid, Discussion, Limitations (four named), Next Steps,
Conclusion, References, Appendix. The cleanest skeleton of the six and the easiest to steal.

### Opening

The gap is stated as an absence a reader can check: "no experimentally validated models exist
for reliably designing biologically viable, de novo plasmids". Then the claim, the
architecture, and the size of the training set. The abstract ends on status rather than
triumph: proteins were identified and "are currently being tested".

### The batch chronology

The organising idea worth copying. Three batches in order, each saying what changed since the
last, what the in silico pipeline said, what the wet lab did with it and what came back.
Batch 1 ends "None of the oris in this batch worked." Its own sentence, five words, after a
paragraph of encouraging signals. The wet lab also pushes back inside that paragraph: Class A
plasmids "were deemed to be too difficult to test at this stage", so the shortlist was
rebuilt as five Class B oris. By Batch 2, "At least 6 oris from this batch have shown
promising results as of the time of writing".

### Rejecting the standard metric

Before validating proteins, the page explains why the conventional approach will not work
here, in two numbered reasons: homology alignment ignores overfitting, and a 75% similarity
threshold "would leave out potentially viable proteins". The replacement threshold is then
justified by benchmarking against a named published model. A page that argues its way out of
the default metric is doing ballot question 4.

### Numbers and the funnel

The yield is reported at every stage: "Out of a batch of 10,000 sequences, 140 DNA sequences
were found to have aligned with the AMRFinderPlus database above the minimum 20% coverage to
reference sequences, and only 6 translated amino acid sequences were predicted to form viable
3D protein structures." The overfitting check is then run on the survivors and reported as a
number: half are "only ~50% in comparison to wild type".

### Limitations

Four, each with its own heading, and each either mitigated or blocked. Limited training data
is answered with the augmentation actually used. Motif annotation names the missing resource:
"Currently, we are unable to find a database of replication protein binding motifs." The
class B alignment failure runs the full four steps: the negative result, the diagnosis (one
reference sequence instead of a set), the fix, and the admission that the fix is blocked too.

### Weak spots

- Raw nucleotide sequences of 500 to 800 bases are dumped inline in the results, twice.
- Seventeen images and no figure captions at all. Nothing on the page is called "Figure 1".
- Typos in the Conclusion ("bioloigcally") and in the validation section ("established
  consequence sequences" for consensus).
- Discussion and Conclusion overlap heavily.

### Precedent for

`protein-design/`, especially `methodology/` and `sprints/`. It is the precedent for the
generate-then-triage-then-order shape our cluster already has, and for reporting a batch of
candidates as a funnel with the failures left in. Its Limitations section is the model for
ours.

## ZJU-China 2023 UG

Project: saRNA plant vaccines against rice blast. Four models across scales: wind-field large
eddy simulation and turbulent virus diffusion; RNA movement through the vascular bundle;
replication and degradation with a deep-learning structure predictor; antigen-antibody
binding. About 5,300 words, 16 headings, 20 numbered figures, 12 equations, 3 tables. The
only winner working on a crop.

### Opening

An Overview that does the whole job in three sentences: what was modelled, at what scales
with what methods and that the results were "compared with the experimental results", then
the parts list. Our Abstract does the same work, and this is the closest precedent for it.

### Validation

The best passage on the page. Two independent predictions of the finite-element model are
each checked against a qPCR measurement: mRNA falls off with distance "the same as the finite
element simulation result", and the shorter 720 bp GFP construct travels better than the
3951 bp RUBY construct, "consistent with the finite element results". The claim is on
direction of effect and nothing stronger. There is also a numerical robustness check: several
initial iteration points converge to "the same convergent solution in the error range".

### Weak spots

- No limitations section anywhere, and no uncertainty on almost any number.
- Heavy assumed knowledge with no gloss: large eddy simulation, Wiener process, entropic
  elasticity and the Langevin equation all arrive undefined.
- Long run-on sentences. Several results are a single sentence of ninety words.
- Assumptions are embedded in the derivations rather than collected, so a reader cannot audit
  them without reading every equation.

### Precedent for

`model/index.html`, for the cross-scale chain and for the Abstract. Not a precedent for
`protein-design/`: its structural work is one short deep-learning section with no
trajectories.

## Toronto 2023 OG

Project: Methanivore, methylotrophic *E. coli* for landfill methane. Genome-scale metabolic
model of strain T-B18, a modified FSEOF implementation, a knockout candidate scanner, and
OptForce for verification. About 6,300 words, 24 headings, numbered sections 1 to 7.

### Opening

Section 1 is called Purpose and behaves like one. It names the deliverable the dry lab owes
the wet lab ("genetic addition, knock-out, and over-expression targets for improved methane
uptake"), lists the five targets by name, and then separates evidence from intention in two
short sentences: "These results were validated through literature. Experimental validation
will follow." No winner handles validation status more cleanly in fewer words.

### The wet lab shapes the model

The move no other winner makes this explicitly. In section 3.1 the algorithm's design is
traced back to a bench constraint: "due to time limitations, the experimental team could only
test one knockout prediction, and higher certainty and distinction between targets was
greatly valuable", so the knockout scanner "prioritizes increased granularity in results".
The wet lab's budget is given as the reason for a choice inside the model.

### Limitations

Section 5.2 does the strongest single thing in the casebook. It states the assumption inside
the borrowed algorithm in plain words, names the biology that breaks it, and then applies it
to the team's own headline result. Triose-phosphate isomerase "is, in fact, one of the top
targets for overexpression predicted by our algorithms", and the section shows the
relationship is "not uniformly positive throughout the entire possible flux ranges" and
concludes TPI is "a less than ideal candidate for overexpression than what FSEOF suggests".
A published result of their own, withdrawn in the section where a reader will look for it.

### Reproducibility

The GSMM is built in three numbered steps from a named public model (iML1515 from BiGG), each
step a specific gene knockout or plasmid addition. Another team can rebuild the chassis model
exactly. The FSEOF implementation is on GitHub, and the OptForce analysis "is available on the
Gitlab".

### Weak spots

- Broken cross-references on the live page: "(see Section ???)" appears at least twice,
  including in the Motivation paragraph quoted above.
- "None None" placeholders where figures should be, and a "Dy Lab" typo in the first line of
  section 3.1.
- Section 4, the results, is mostly tables with one-line analyses under them.
- Typos: "reasonanle", "auxillary".

### Precedent for

Neither page's subject matter. It is the precedent for two specific moves our Math Model page
already half makes: a dry lab that states the deliverable it owes the wet lab in its first
paragraph, and a limitations section that takes down its own best result. Read it for section
1 and section 5.2 and nothing else.

## Cross-case synthesis

### Shared skeleton

1. A lead of 100 to 400 words: the problem, the cost of solving it at the bench, the model
   named, and what it takes in and gives out. Five of six do this. ZJU's Overview and
   Heidelberg 2024's lead are the tightest.
2. A scope or assumptions declaration near the top. Heidelberg 2024 does it as a three-bullet
   model card, Heidelberg 2025 and Peking as their own headed sections.
3. Methods before results, with tool choices justified rather than listed. All six.
4. Results in blocks, each block ending in a stated consequence. The block unit differs: a
   physical stage (Peking), a model layer (Heidelberg 2025), a scale (Heidelberg 2024), a
   generated batch (UToronto), a scale again (ZJU), an algorithm (Toronto).
5. A comparison against data the model did not contain. Five of six. Toronto is the exception
   and says so.
6. Limitations, next steps, references. Four of six have a dedicated limitations section;
   ZJU has none.

The ordering principle is the real choice. Peking orders by the journey of the thing being
modelled, which is the most readable of the six and the one our Math Model page already uses.
UToronto orders by what changed between attempts, which is the most honest. Nobody orders by
tool, and a page that does reads as a catalogue.

### Opening a page

The winners' openings share a four-beat shape: the problem with a number attached; why the
existing approach fails, mechanistically; the model named and given a job; what it takes in
and gives out. Heidelberg 2024 compresses all four into four sentences. Peking spends two
numbers retiring antibiotics and probiotics before naming the physical obstacle. UToronto
states the gap as an absence that can be falsified. None of them opens with a definition of
modelling, and none opens with a global statistic unattached to the project.

### Stating an assumption with its consequence

Three patterns, in increasing strength:

- Named only. "The mucus layer has thickness H, modeled as a uniform Newtonian fluid with
  constant viscosity" (Peking). Weakest, and common.
- Named and translated. "the Hill coefficient is set to n=1, meaning that each binding site
  is independent of each other" (Peking). The "that is" or "meaning that" clause costs eight
  words and is what makes the list auditable.
- Named, justified by mechanism, and acted on. The steady-state paragraph (Heidelberg 2025);
  the minimal viable system paragraph (Heidelberg 2024), which justifies plasmids over
  genomes three ways and then sets the simulated plasmid to the same 5 kb as the bench one.

The highest form is an assumption that changes a later claim. Heidelberg 2024's discussion
reinterprets a predicted double-strand break by appealing to its own assumption that staples
are fixed to the DNA.

### Reporting a number with its uncertainty

- Spread plus a normalised spread: "3.02±0.03 nm throughout 100 ns simulation with only 0.99%
  coefficient of variation" (Peking).
- A tolerance and a settling time: "stabilized at 300±0.5 K", pressure "to 1±50 atm, with
  amplitude ≤20 atm by 200 ps" (Peking).
- Error bars on all three of model, own measurement and literature, side by side
  (Heidelberg 2024).
- A statistic chosen because n is small, with n stated: "better suited for quantifying ranking
  similarity for the small sample size of n = 5 binders" (Heidelberg 2025).
- A denominator rather than a percentage: "1 of 41 and 2 of 41" (used by UToronto's style
  throughout its funnel).
- A band quoted as a band: SASA "195±15 nm² with range 180-210 nm²" (Peking).

Where a winner has no uncertainty to report it changes the claim instead of the notation.
ZJU claims direction of effect only. Toronto says validation is by literature and that
experiments will follow.

### Showing validation on unseen data

Four shapes:

1. Rank in silico, then rank at the bench, then correlate the rankings (Heidelberg 2025).
   Reports the correlation even when it is negative.
2. Predict, then measure, then overlay and quote the fit (Heidelberg 2025, R² ≈ 0.93).
3. Compute, then compare against a bench number and a literature number together, and
   refuse the agreement if the error explains it (Heidelberg 2024).
4. Reproduce a known external figure before projecting anything (Peking's SEIR anchored on
   a published 40.66% prevalence). The move is right; Peking's claim about it is too strong.

A control run counts as validation and three winners use one. Heidelberg 2024 simulates two
plasmids with no staple to establish what separation looks like without the mechanism.

### Admitting a limitation without losing the reader

The pattern, in four beats: state the mismatch; give its candidate causes, including your own
simplifications; say which conclusion survives it; say what level of accuracy this model
actually needs. Heidelberg 2025's Hill paragraph runs all four. UToronto's class B paragraph
runs a variant: result, diagnosis, fix, and why the fix is blocked.

What keeps the reader is the third and fourth beats. A limitation with no surviving
conclusion reads as a retraction. A limitation with no stated accuracy requirement invites
the judge to pick their own, which will be stricter than yours.

Admitting something unfinished works when the reason is a quantity. "we generated more than
2 TB of data, whose alignment of trajectories did not finish running" (Heidelberg 2024).

### Closing the loop

Verbs that close it, taken from the six: ordered, dropped, abandoned, selected, delivered,
rebuilt, moved, prioritized, chose, set, recoded, withdrawn. Verbs that leave it open:
informed, guided, suggested, highlighted, will test, could inform.

The concrete forms:

- An artefact named: "5 promising Class B oris were delivered to Wet Lab" (UToronto).
- A result refused: "None of the oris in this batch worked." (UToronto).
- A constraint from the bench changing the model: the one-knockout budget (Toronto).
- A parameter set from the model: a working antibody concentration (ZJU), a transmembrane
  domain chosen on background dimerisation (Heidelberg 2025).
- A design space handed over as a shortlist: top-k architectures (Heidelberg 2025).

### Making the work reusable

All six name software with versions. Three give a repository (Toronto, Peking, UToronto).
UToronto alone gives hyperparameters and hardware in an appendix. Heidelberg 2025 alone gives
an extension recipe written for a stranger: what table to supply, what the pipeline does,
what new components would unlock. Heidelberg 2024 links 15 Registry parts and names the HPC
cluster and its access terms. Peking adds a Parameter Sources section, which is reuse of a
different kind: it lets another team check a borrowed constant rather than inherit it.

### Anti-patterns seen in winners

1. Marketing register in the lead. "cutting-edge", "a significant advancement in personalized
   oncology" (Heidelberg 2025).
2. Telling it twice. The three purposes as headings then as bullets (Heidelberg 2025); the
   structure-prediction paragraph printed twice (Heidelberg 2024); Discussion repeating
   Conclusion (UToronto).
3. Conclusions outrunning the evidence. One reproduced prevalence figure "demonstrating the
   reliability of our model" (Peking).
4. Empty or broken apparatus. "Section ???" cross-references (Toronto); headings with no
   content under them (Heidelberg 2024); "Description of your image" alt text on 32 images
   (Heidelberg 2025).
5. Figures with no captions and no numbers. Seventeen images, zero captions (UToronto).
6. Assumed knowledge with no gloss (ZJU, throughout).
7. Raw data dumped in the prose: 800-base nucleotide strings inline (UToronto).
8. Nesting past four levels. Peking reaches six, and headings start governing two sentences.
9. Assumptions named without being costed (Peking, most blocks).
10. No limitations section at all (ZJU).

## Figures, equations, tables, code and references

Figures. The winners run 11 to 43 content images each. Numbered captions are inconsistent:
Peking references 97 numbered figures, Heidelberg 2025 37, ZJU 20, Heidelberg 2024 19,
Toronto 17, and UToronto zero. The best captions state a finding rather than naming the
object, and the best of those carries the verdict: Heidelberg 2024's Figure 5 caption says
the computed energy "does not align with our EMSA results obtained from wet lab experiments,
indicating the need for further refinement. The large error is likely due to improper
histogram distribution".

Equations. Numbered and inline, never in an appendix. ZJU carries about 12 numbered
equations, Heidelberg 2025 about 10, Peking 4, and Heidelberg 2024 and UToronto effectively
none despite both being heavily computational. An equation is always followed by a sentence
saying what its symbols are and what it is for. Nobody writes a derivation without that
sentence.

Tables. Heidelberg 2025 has 11, mostly parameter sets and one ranking comparison that is the
page's best single object. Peking uses a Parameter Table per block. Tables carry parameters
and comparisons; results stay in prose and figures.

Code. Three repositories across six winners, plus one Zenodo DOI set for the simulation
engine (Peking). None of the six publishes input files, run scripts or seeds.

References. Numbered and inline, 10 to 40 per page. UToronto gives 17 DOIs and Toronto 3
DOIs plus 3 PubMed links. Heidelberg 2024 cites software by version with a Zenodo DOI for
GROMACS 2024.2. Heidelberg 2025 and Peking use author-date. All six cite the tools they used
as literature, not just as names.

## Length and density

| Winner | Body words | Headings | Max depth | Content figures | Numbered figures | Repo |
|---|---|---|---|---|---|---|
| Peking 2025 UG | 13,700 | 118 | 6 | 43 | 97 refs | GitHub |
| Heidelberg 2025 OG | 13,000 | 48 | 4 | 32 | 37 | footer only |
| Heidelberg 2024 UG | 8,200 | 56 non-nav | 4 | 23 | 19 | GitLab |
| UToronto 2024 OG | 6,700 | 41 | 4 | 17 | 0 | GitLab |
| Toronto 2023 OG | 6,300 | 24 | 4 | 11 | 17 refs | GitHub |
| ZJU-China 2023 UG | 5,300 | 16 | 3 | 23 | 20 | GitLab |

Length is not the discriminator. The 2023 winners are 5,000 to 6,500 words and the 2025
winners 13,000. What grows is the number of distinct models on one page, not the words per
model. Every winner keeps the Best Model work on a single `/model` page: none of the six uses
subpages. Depth settles at four levels; the one page that goes to six is the one whose
headings start governing two sentences.

Density per model block is remarkably stable across all six: 600 to 1,500 words, two to five
figures, one assumptions statement, one results subsection, one consequence.

## What our two pages do better than the winners

`model/index.html`:

- Headings that state findings. "Result 3 · Secretion detected at 7.25 mU mL−1, not yet
  quantified" and "Payback, and the answer nobody wants" carry the result in the heading. No
  winner does this. Peking and Heidelberg 2025 both use bare "Results".
- Provenance labelling per quantity. The dose table's Status column marks each input
  Measured, Assumed or Arithmetic, including "Plate area | 100 cm2 | Reconstructed, never
  written down". Only Peking's Parameter Sources comes near, and it does not label its own
  measurements against its borrowings in a single view.
- Marking the modelled step. "Step 3 is the only modelled step, and it carries the widest
  uncertainty in the block", and Figure 23's caption repeats "This is a model, not a
  measurement". No winner separates measured from modelled this explicitly.
- Publishing a self-found error that reduces its own numbers. The standard-curve correction
  of 1.460 that cuts every derived activity by 46% is a move no winner makes.
- Reporting against a detection limit. 7.25 mU mL−1 stated as above LOD and below LOQ, with
  both limits derived and quoted. Heidelberg 2024 reports a large error; our page reports
  that the measurement is not yet quantifiable at all, which is stronger.
- A genuine blind test with a freeze date. The 2026 forecast frozen 26 September, 4 of 16
  counties in, 7.9% against the trend's 8.8%, and the explicit refusal to call it: "Four
  counties is too few to call". No winner has a prospective test.
- A no-skill baseline. The county trend with no weather is the line the model must beat, and
  it is named as such. Only Peking anchors on an external baseline, and less rigorously.
- An economics block at all. None of the six winners puts a cost, a price or a payback period
  on its model page. Our Block 3 has no comparison class among Best Model winners.
- Admitting an unresolved internal mismatch: the spray schedule is built on waterlogging
  while the economic case is salinity.

`protein-design/`:

- The 9-23 falsification chain on the molecular-dynamics page. A hypothesis stated, a
  construct designed to discriminate, the discriminating measurement reported, the hypothesis
  rejected, a different mechanism found, and the next experiment named. Nothing in the six
  winners is this clean.
- A control run used to bound what the data can support. The apo-receptor trajectory
  establishes a noise floor, and a claim is then voluntarily withdrawn because of it.
  Heidelberg 2024 runs a staple-free baseline but does not use it to retire a claim.
- Discounting the team's own primary metric. The "Reading a docking score" section quantifies
  how much of the HADDOCK ranking is explained by peptide length and net charge alone and
  reports a correlation with measured activity near zero. Toronto 2023 does this for FSEOF;
  no other winner does it at all.
- A negative control reported as having failed to be negative, with the timescale caveat
  attached.
- Event-level reporting instead of a mean: a contact that "broke 94 times or 22.9% of the
  trajectory", with each break bounded at 0.68 ns.
- Compute cost disclosed: 270 ns and 25.9 GPU-hours on a named GPU. Only Heidelberg 2024
  discusses compute, and without numbers.

## What our two pages do worse

`model/index.html`:

- Length without a reading path. 7,960 words of body in a flat heading structure where every
  heading is the same level. Winners at this length use four levels and a visible hierarchy.
- Several load-bearing numbers rest on one well or one plate, and the notation does not say
  so inline. The DNPH titre is n = 1 and the dose is one plate; both appear elsewhere on the
  page as bare figures with four significant digits ("7.2514 mU mL−1"). Peking's convention
  would attach a spread or refuse the decimals.
- Unmeasured literature factors multiplied without a cross-check. The canopy correction of
  2.44x, the efficacy of 0.58 and a kcat borrowed from *P. putida* chain together into the
  litre figures. Peking's Parameter Sources shows the fix: derive each borrowed constant a
  second way and quote the deviation.
- A placeholder inside a published total. The response-horizon table carries "Accumulate
  required amount | 2 | Assumed placeholder", and that 2 hours is inside the headline 7.3 h.
  Honest, but a winner would either measure it or report the total as a range.
- An efficacy value that changes without explanation. Figure 10 and the Methods use 0.58 for
  salinity; the payback table uses 0.28 and the text jumps to a ceiling of 1.0. Where 0.28
  comes from is not stated on the page.
- A figure cross-reference error. The efficacy section says "The values in Figure 11 come
  from the literature", but Figure 11 is the island yield chart. The efficacy figure is 10.
- The cross-page disagreement is not on the page. The brief describes a list of numbers that
  conflict with another of our pages. It is not in the rendered text and not in the HTML.
  What the page does carry is a reference to Geospatial Analysis as the source of the
  NT$30,000 unit cost and the salt-affected profit figures, with no note that the two pages
  disagree. Either publish the conflict or reconcile it; citing the other page silently is
  the one option that costs credibility.

`protein-design/`:

- One `±` in 18,192 words. The nine-system table reports clamp integrity, occupancy and RMSD
  to one decimal from n = 1 with no error column and no column definitions. The limitations
  section says single-seed differences "could therefore be an outcome of variance rather than
  a true consequence of peptide design", and then the notation on every other line
  contradicts that. Peking's MD section is the fix.
- The molecular-dynamics page has seven figures, zero captions, zero figure numbers and no
  text reference to any of them. Even UToronto, the weakest of the six on captions, at least
  does not build its argument on uncited images.
- Jargon carrying the headline numbers undefined. "Clamp integrity" is the page's primary
  metric and is never defined. Nor is "Bidentate Arg487", nor the acceptance threshold, which
  surfaces once mid-sentence.
- No reuse material. No repository, no input files, no run scripts, no seed value, and no
  link to the nine run reports the page is built on. MD setup omits temperature, ions, box
  size, thermostat, barostat, equilibration and electrostatics. Three of six winners publish
  a repository and UToronto publishes hyperparameters and hardware.
- The headline finding has no section of its own. The histidine-tag result is the most
  important thing the MD work produced and is the only one of the nine runs without a
  section, at about 290 words of 5,045.
- Stale content the other pages have overtaken. The methodology page still specifies the
  discarded design, "also appending a C-terminal 6xHis purification tag", with no note that
  this was reversed.
- Contradictions between pages left standing: the conserved block described as 15 to 23 on
  one page and corrected to stopping at 20 on another, with the second page noting the first
  is wrong and the first unchanged.
- Three headings reading "### Methodology" govern the three largest arguments on the sprints
  page, and each in fact contains Methodology plus Key results plus Project.
- Overclaiming verbs. "We proved this via HADDOCK" on the methodology page, against the same
  page's later finding that the HADDOCK score "did not track structural accuracy".

## Moves our pages are missing entirely

For `model/index.html`:

1. A scope card near the top. Heidelberg 2024's three bullets: what the chain takes in, what
   it gives out, what it assumes. Our Abstract gives the chain but never the boundary.
2. A second route to each borrowed constant, with the deviation quoted. Peking's Parameter
   Sources.
3. A statement of the accuracy the model needs to be useful. Heidelberg 2025's "sufficient
   for early-stage screening" sentence. Our page reports errors without ever saying what
   error would be small enough.
4. A paragraph teaching the reader how to read our own output, in the Heidelberg 2024 manner.
   The stress index is reported on two different crop scales where 0.33 is normal in one and
   bad in the other, and the page says so once in passing.
5. Software and data reuse. No repository, no fitting code, no release of the 32,767-model
   scoring run, no version numbers. Three winners publish a repository.
6. A limitations section with its own heading. Ours is a two-paragraph fold inside Block 3,
   and it covers only Block 3.
7. Named next experiments with an owner, in the Toronto style of separating what is validated
   from what will be.

For `protein-design/`:

1. Uncertainty notation of any kind on the nine-system table, or an explicit n = 1 column.
2. Figure captions, figure numbers and text references on the molecular-dynamics page.
3. A definitions block for clamp integrity, bidentate occupancy and the acceptance threshold,
   at first use.
4. A validation table in the Heidelberg 2025 shape: our computational ranking against any
   external ranking, with the correlation printed. The alanine scan already has the material,
   since it misses the two substitutions published activities show matter most.
5. Links to the nine run reports, and a repository with inputs, seeds and analysis code.
6. The two pre-registered DisVis runs reported. The page sets up a positive control and a
   decision rule and then never gives either run's numbers.
7. A hub abstract that states the design question, not just the scope. The sharpest statement
   of it currently sits buried on the sprints page.
8. One section for the histidine-tag finding, with the construct ID of the retagged version
   named.

## Source notes

- All six pages rendered on the first attempt, well above the 4 KB failure threshold
  (133 KB to 3.9 MB of DOM). No render failed and no retry was needed.
- None of the six winners splits its Best Model work across subpages, so there are no
  subpages to render. Every link out of each `/model` page goes to a different prize's page
  (results, engineering, human practices) or to a reference.
- `model-2024-UG-heidelberg.md` carries about 120 lines of duplicated site navigation before
  the body. The content starts at the `# Model` heading. Word and heading counts in this
  casebook are measured from there, and image counts exclude the nav's "Google Material Icon"
  entries.
- `model-2025-OG-heidelberg.md` body starts at `## Introduction` on line 112. Its 32 images
  have the placeholder alt text "Description of your image" on the live page.
- `model-2025-UG-peking.md` leaks LaTeX source into the rendered text in the parameter and
  assumption sections ("radius RRR and mass mmm"). This is on the live page. Excerpts were
  chosen from passages free of it. Peking's opening paragraphs sit above the first heading,
  so no excerpt is banked from them; they are quoted in the Peking section above instead.
- `model-2023-OG-toronto.md` renders its top-level section headings as plain text, so the
  file's `#` headings start at `### 3.1. Motivation`. Sections 1 to 7 are in the text and
  complete. "None None" lines are figure placeholders. The "Section ???" cross-references are
  on the live page.
- `model-2023-UG-zju-china.md` renders its figure captions as body text rather than
  figcaptions, so `[CAPTION]` markers are absent. The text is complete.
- `model-2024-OG-utoronto.md` has no figure captions on the live page, not as an extraction
  artefact.
- Our own pages were read from the wiki clone at
  `/Users/timmy/Documents/Claude/Projects/Releaf_Wiki/releaf-wiki/` as of 12 October, via
  `html2txt.py`. The `model` page body is 7,960 words; the `protein-design` cluster is 541
  (hub), 9,093 (methodology), 3,513 (sprints) and 5,045 (molecular-dynamics).
