# Best Software casebook

Eight Best Software winners, 2023 to 2025, read for how they write. The prize has eight
winners in this range, not six: 2025 is tied in both collegiate tracks.

Sources are the rendered text files in `sources/text/software-*.md`. Word counts are rough
and include captions and image alt text. Quoted fragments are verbatim from those files
(iGEM wiki content, CC BY 4.0). The excerpt bank is `research/software.excerpts.json`
(20 excerpts). Three of those are counter-examples; their `why_it_works` starts with
"Counter-example:" or names the weaker half of the same passage.

Our page under review is `software/index.html`, titled Digital Twin.

## The winners

| Year | Track | Team | Tool | Page |
|---|---|---|---|---|
| 2025 | UG | BIT-China | BiGEM, an iGEM project search and visualisation platform | https://2025.igem.wiki/bit-china/software |
| 2025 | UG | EPFL | Pyronix drone stack, ROS and analysis tools | https://2025.igem.wiki/epfl/software |
| 2025 | OG | Marburg | mATChmaker, NRPS hybrid design in Docker | https://2025.igem.wiki/marburg/software |
| 2025 | OG | Munich | MESA Designer, a receptor design toolkit | https://2025.igem.wiki/munich/software |
| 2024 | UG | Vilnius-Lithuania | remote bioreactor monitoring and control | https://2024.igem.wiki/vilnius-lithuania/software |
| 2024 | OG | UniMuenster | seq-mutator, low-N protein engineering CLI | https://2024.igem.wiki/unimuenster/software |
| 2023 | UG | Fudan | RAP: KineticHub, RAP Builder, PartHub 2 | https://2023.igem.wiki/fudan/software |
| 2023 | OG | INSAENSLyon1 | guide-RNA motif finder for a gene database | https://2023.igem.wiki/insaenslyon1/software |

2025 UG and 2025 OG are ties, confirmed on the results page: BIT-China and EPFL are listed
together under Undergrad / Winner, Marburg and Munich together under Overgrad / Winner.
All three years call the award **Best Software Tool**. The 2026 handbook renames it
**Best Software**. No year combines the collegiate sections for this award.

Vilnius-Lithuania 2024 is the closest case to ours. Their tool monitors and controls their
own bioreactor. Read that page first.

## Criteria

The 2026 ballot questions, verbatim from `sources/text/judging-special-prizes.md`:

1. How well is the software compatible with, and does it leverage, existing synthetic biology standards? (e.g. SBOL, other RFCs, data formats, etc.)
2. How well was the software validated (e.g., through experimental work, test data, or benchmarking)?
3. Can the software be useful to other projects?
4. How well can the software be integrated with external tools/software applications? (APIs, packages, etc.)
5. Is the software user-friendly?
6. How well is the software written and documented for future groups to extend and improve? (Code documentation, comments in the code, performance evaluation, architecture diagrams, installation and execution scripts, etc.)

Eligibility: documented and released under an OSI-approved open-source licence, source code
hosted in iGEM's GitLab. Standard URL `https://2026.igem.wiki/example/software`.

What each question rewards in writing terms:

1. **Standards.** Not a declaration that you are standards-compliant. A list of the formats
   your tool reads and writes, named, and the tools that can open them. Munich names GenBank,
   PDB, RFC10, RFC12, RFC1000 and BioBrick, plus Geneious Prime, SnapGene and Benchling.
   Only one winner mentions SBOL at all, and never uses it.
2. **Validation.** A number the reader can check, with its denominator and its exclusions.
   Marburg's 68 % is credible because the sentence before it gives the two pass criteria and
   the sentence containing it names what was left out.
3. **Usefulness.** A person outside the team who ran it. Fudan names two iGEM teams. The
   cheap substitute is "designed to be compatible with any X", which Vilnius and Munich both
   reach for and which proves nothing.
4. **Integration.** The route in and the route out, written as a command or a format. A curl
   call, a pip name, a CSV between modules.
5. **User-friendliness.** Prose written for someone who has not used a terminal, and a test
   of it. INSAENSLyon1 explains what a command prompt is. UniMuenster gave the install guide
   to a team member with no Python experience and reports the result.
6. **Written and documented.** One artefact shown rather than described. Munich pastes a
   single annotated function. Fudan names its commit convention and versioning scheme.

Where each winner answers each question:

| Q | Marburg 2025 OG | Munich 2025 OG | BIT-China 2025 UG | EPFL 2025 UG | Vilnius 2024 UG | UniMuenster 2024 OG | Fudan 2023 UG | INSAENSLyon1 2023 OG |
|---|---|---|---|---|---|---|---|---|
| 1 Standards | GenBank from antiSMASH as the only input; SMILES; PDB; Chai-1 restraint CSV | GenBank out, annotated per domain; PDB; RFC10/12/1000, BioBrick, Registry collection; OpenAPI 3.1; FAIR4RS table | JSON and CSV internally; no synbio standard | One clause claims SBOL/SBOL3 and CSV/JSON/YAML; never shown again | OpenAPI/Swagger spec published as a JSON file; CSV, SVG, PNG export | FASTA in, CSV between every module; Hugging Face; tensorboard | GenBank, called "an existing standards"; iGEM Registry; BRENDA with its licence | FASTA in, CSV out |
| 2 Validation | Similarity score vs experimental success; 467 complexes, 2,335 structures; 68 % correctly folded; cryo-EM overlay (PDB 9BE4) | Regenerates three published, already-tested constructs; HEK293T experiment with controls; expert session | None, beyond V1 solving the team's own search problem | UDP-to-ROS bridge, three topics published simultaneously; statistical tests on burn data | None. A turbidity-to-OD calibration equation only | In-silico experiments on an existing dataset; 28 PAS variants by HPLC-MS; tutorial tested on a novice | Stem-loop model vs measured GFP/RFP ratio, with the part and the dataset linked; Monte Carlo converges in 1,000 iterations | None for the tool; its output was used in their lab |
| 3 Useful to others | GitLab, developer's guide, Colab notebook, 2,335 structures on Zenodo | PyPI, DockerHub, hosted web app, freely modifiable step-by-step guide; track-by-track vision (hypothetical) | Planned RESTful API | READMEs per tool | "compatible with any bioreactor" (asserted); price argument | pip install, example data in repo, Contributing workflow | Two named iGEM teams used it and fed back; 2022 judges' feedback; live demo; docker image per component | Notebook left behind for the dropped AI approach; cross-platform |
| 4 Integration | antiSMASH, PARAS, Chai-1, GetContacts, Clustal Omega; Jupyter for advanced users | REST API (OpenAPI 3.1, curl examples), PyPI package, BioPython, Pandas, PyMOL, ChimeraX, scikit-learn, LIMS, BindCraft, TMDock, SPELL, Twist/IDT/GenScript | Qwen API | ROS nodes, MAVROS/MAVLink, QGroundControl, Isaac Sim, PX4 SITL | REST API with Swagger; the Arduino is itself an API consumer | Hugging Face, jackhmmer, a BLAST alternative path, tensorboard, tbparse, IDT tools | RESTful APIs per component; SnapGene; contributed a patch upstream to BRENDApyrser | None. A standalone web form |
| 5 User-friendly | Menu-driven CLI; "starting up the program only takes a minute"; step-by-step guides on GitLab | Six numbered steps with screenshots; how to open a terminal on three OSes; measured hardware minimums | Usage walkthrough with screenshots and usage tips | A macOS ROS install guide, because ROS 2 Jazzy is not on Apple Silicon | Three UI sections described; video demo; one command to start everything | `--help`, autocompletion, virtual-env guidance, example data, novice test | Web UI, browser support table, online and offline docs, tutorial videos, live demo | Teaches the terminal; every form field documented with its default |
| 6 Written and documented | Developer's guide for bioinformaticians; log files; structured `workspace/results/`; modular design | FAIR4RS requirement/implementation table; one annotated function pasted in full; type annotations; error handling; caching; four named layers; GitLab and GitHub issues | Four architecture layers listed with their technologies | Claims comments, CI tests and containers; shows the diagrams | Architecture and database-schema figures; Docker; Swagger | Module list, data-directory tree, Contributing steps, Authors, License | UML diagram; Conventional Commits; Semantic Versioning 2.0.0; changelog and GitLab tags | "How it is working" walks the algorithm in prose |

Two findings from that table.

Nobody uses SBOL. The only mention in eight pages is EPFL's "plays well with synthetic
biology standards (SBOL/SBOL3)", which nothing later supports. Question 1 is answered in
practice by naming file formats, registries and the tools that read them.

Two of eight winners report no validation of any kind. Vilnius and BIT-China won on
architecture, install path and usability. Validation is not the bar that keeps teams out of
this prize. It is where our page is already far ahead.

## Marburg 2025 OG

mATChmaker, guiding NRPS hybrid design. About 5,100 words, 46 headings, 13 figures.

### Page anatomy

1. Lead (~350): the problem, their own 27 % success rate, what the tool does.
2. Architecture and access (~700): the install problem, Docker, cross-platform, the CLI, the
   Jupyter route, the developer's guide, input contract, output directories, batch mode, repo.
3. Key Points, then the phylogenetics approach: Abstract, Introduction, Application,
   Results, Outlook (~1,200).
4. Key Points, then the structural approach: Abstract, Introduction, the four external tools
   each with a subsection, the pipeline, three method subsections, Automated Structure
   Prediction, Analyzing interactions, Outlook (~2,700).
5. References, nine of them, all with DOIs.

### Opening

Two paragraphs. The first states the field's limitation in one sentence. The second turns it
into the team's own measured failure: "during our first attempt at derivatization by Golden
Gate cloning, only 27 % of combinations were catalytically active." Then one sentence on what
the tool does about it. A judge knows the purpose and its justification inside 80 words.

### The architecture paragraph

This is the best architecture-justification writing in the set. The order is fixed:

```
[The problem we hit]: dependency conflicts, OS requirements.
[Its cost]: a day to install correctly, inaccessible to people without coding experience.
[So we built]: the tool.
[The choice]: Docker-based architecture.
[What is inside]: Ubuntu 20.04, Python, Biopython, RDKit, Clustal Omega, OpenBabel, conda envs.
[The consequence]: identical behaviour on Windows, macOS and Linux.
[The user's saving]: they never install the constituent tools themselves.
[The number]: after the first installation, starting up takes a minute.
```

Nothing in that sequence is an adjective. Each line is a fact with a consequence.

### Evidence and numbers

The validation accounting is the model: 35 donor units, 2 impossible because the donor T and
C domains sit in separate genes, 9 failed because an epimerisation domain intervened, 24
evaluated, 49 structures correct, "representing 68 % of the 72 condensation complexes
excluding split genes and epimerisation domains". Every exclusion is named with its reason.
Separately: similarity scores from 15 % to 100 %, correlated against experimental success;
467 complexes predicted, 2,335 files, deposited on Zenodo; one prediction overlaid on a
cryo-EM structure by PDB accession.

### Assumptions

Two are stated in the body at the point where they bite. One comes from a bug: comparing
early structures against crystal structures showed antiSMASH annotations of C domains "were
always missing around 150 amino acids on the C-terminal side", so the code assumes the 450
residues after `protein_start` are the C domain. The other is a shrug made explicit:
antiSMASH gives no specificity for C-starter domains, "we decided to assume for the purpose
of this software that all C-starter domains incorporate acetic acid."

### Limitations

Three, each one sentence. GetContacts is implemented and reachable but "we did not have the
time to process the generated data to train a model." Chai-1 needs A100 GPUs, HPCs and Colab
are both incompatible with Docker, so Chai-1 is outside the container and shipped as a Colab
notebook instead, with the price named (11 € per month) for teams without a cluster. The
sample-output table caption carries the third: proto-cores can overlap, so "we recommend that
all provided input files contain only one NRPS cluster and one TE domain."

### Voice

We, past tense for the work, present for what the tool does. Plain. Second person for
instructions to the user. Explains every external tool in its own subsection before using it.

### Weak spots

- The page is two papers bolted together. "Abstract", "Introduction", "Outlook" and
  "Key Points" each appear three times, so the contents list reads as a repeated loop.
- "Our documentation contains all information needed for installing and using our software
  tool" is the only thing said about the documentation. Nothing is shown.
- No licence anywhere on the page.
- The reader is told to read the NRPS domains page first, which pushes the mechanism off-page.

### For a reactor-software team

Copy the architecture paragraph wholesale: the problem, its cost in hours, the choice, the
contents, the consequence, the number. Copy the exclusion accounting for any success rate.
Copy the Colab paragraph for any dependency you cannot ship: what it needs, why it is not
bundled, what it costs someone else, and what you provide instead.

## Munich 2025 OG

MESA Designer. About 9,600 words, 102 headings, the longest page in the set. Roughly a third
of it is a generated API reference.

### Page anatomy

1. Lead (~700): MESA explained, prior iGEM teams who used MESA, the design bottleneck
   (over 250 validated configurations, weeks of manual work), the tool, a link to the live app.
2. Usage (~1,900): input-output pipeline, then six numbered steps with a screenshot each.
3. Programmatic Access (~3,500): REST API rationale, curl examples, then the full OpenAPI
   reference rendered inline, then the Python package rationale with an example workflow.
4. Validation (~1,600): Experimental Foundation, Expert Considerations, Wet Lab Validation
   with expected results, protocol and results for two experiments.
5. Development (~1,400): FAIR4RS table, code examples, architecture by layer, future work.
6. Installation (~1,200): Docker (pre-built and custom), local, PyPI, how to open a terminal,
   hardware requirements.
7. Conclusion (~700) and references.

### Opening

Four paragraphs before the tool is named. The bottleneck is quantified ("over 250
experimentally validated MESA configurations", "a process that can take weeks and is prone to
errors") and the collaboration with the original MESA creators is stated. Then one line with
the live URL. Slower than Marburg's opening but every number is load-bearing.

### Entry template

The step is the unit, and it is the same six times:

```
#### Step N: [What you are choosing]
[screenshot]
[Action]
[Action, with the validated options named and cited]
[What the software does automatically]
[The escape hatch: or enter a custom sequence]
```

Every step offers a curated default and a custom path. That pairing is what makes the tool
read as usable by both a beginner and an expert.

### Evidence and numbers

Validation is reproduction: the tool regenerates three constructs that were already published
and tested, each named with its citation, including "the exact construct validated as the
original MESA Receptor Daringer et al. (2014)". Then a real wet-lab experiment on
software-designed receptors, written as expected results, protocol, results, with the control
conditions listed and one anomaly explained rather than hidden. Hardware minimums are
measured: "at least 4GB of RAM and 2 CPU cores", with the honest rider that at the minimum
"you may experience long wait times".

### The FAIR4RS table

Two columns, requirement and implementation, one row per FAIR principle. F1 is answered by
using the same identifier on four platforms. A1 is answered by naming `git pull`,
`docker pull` and `pip install mesa-designer`. I1 is answered by GenBank and PDB files. Each
row is a sentence about something that was actually done. This is the device our page has no
equivalent of, and it is the cleanest answer to question 1 in the set.

### Code documentation

One function is pasted in full, with its decorator, type annotations and docstring. The
paragraph above it claims complete type annotations across the codebase; the function is the
evidence. Then three short paragraphs on error handling ("informative messages guide users
toward solutions rather than presenting cryptic stack traces"), and performance (caching,
memoisation, connection pooling).

### Weak spots

- The licence row says the software is "distributed under the CC-BY-4.0 license". CC BY 4.0 is
  not an OSI-approved open-source licence. UniMuenster and Fudan make the same mistake. See
  the note on licences below.
- The inline OpenAPI dump adds about 3,000 words of schema tables that a judge will not read.
  A link to `/docs` would have done the same work.
- "Vision for iGEM and Beyond" invents four tracks of hypothetical users and says three real
  teams "could have accelerated their development timelines from months to days". That is
  reuse asserted, and the number is guessed.
- Expert validation leans on praise: "Prof. Leonard praised the tool's comprehensive feature
  set, intuitive interface" and "'fills a gap' providing us with excellent expert validation".
  The usable part of that section is his three criticisms, which did become roadmap items.
- The wet-lab section switches to future tense ("Wet lab validation will include cloning")
  and then reports results for one of the two experiments, so a reader cannot tell what is done.
- Typos in the same sentences that claim rigour: "Consisten documentation", "reproducable",
  "consitent", "criterium", "feasable".

### For a reactor-software team

Take the FAIR4RS table shape and fill it with your own facts. Take "show one function" as the
rule for any claim about code quality. Take the measured hardware minimum with its caveat.
Avoid the hypothetical-user section: it is the weakest page-ending in the set.

## BIT-China 2025 UG

BiGEM. About 1,500 words, the shortest-but-one page, and a tied winner.

### Page anatomy

1. Introduction (~200): what it is, the years covered, what it replaces.
2. Platform Features (~70).
3. Architecture (~350): four layers, each a list of components with their technology.
4. Engineering (~450): why they built it, three versions, four development stages.
5. Installation (~120): requirements, five numbered steps with commands.
6. Usage (~450): search, filtering, semantic search, three visualisations, tips.
7. Future Improvements (~130).

### Opening

Two paragraphs, then one. The first says what the tool does and what it covers. The second
opens "Unlike traditional methods where users manually browse massive wiki pages" and names
the five data dimensions. The reason the tool exists arrives much later, in Engineering:
"The inspiration for BiGEM came from our struggle to find suitable promoters for red and green
light systems". That sentence belonged in the first screen.

### The version chain

V1, V2, Final Version. V1 is scored by whether it solved the team's own problem:
"Successfully found the light-controlled promoters we needed through this platform,
significantly improving our team's search efficiency." A first release judged by use, not by
features shipped. This is the only validation on the page and it was enough.

### The ETL chain

Extract, Transform, Load, one line each, then the cleaning steps as an arrow chain:
"Raw HTML → Remove HTML tags → Remove navigation/footer → Unify encoding → Remove duplicate
paragraphs → Standardize format". A pipeline written so a reader can repeat it.

### Weak spots

- No validation, no limitations section, no licence, and no figure captions. The screenshots
  carry their own filenames as labels.
- No references at all.
- Future Improvements admits the API does not exist ("RESTful API and mobile app support") but
  the page never says so where a reader would look for it.
- The install steps are printed twice, once numbered and once not.
- Development Stages is four blocks of self-praise in passive voice ("Designed and implemented
  large-scale automated web crawlers") ending in "we successfully built a fully functional,
  high-performance iGEM data retrieval and visualization platform".

### For a reactor-software team

The version chain is the cheapest credible validation available to any team: say what the
first version was for, and whether it did that. Our page has the material for this and does
not use it. Thirteen releases of the rig app in five weeks, and the page says only that it is
the thirteenth.

## EPFL 2025 UG

The Pyronix drone software stack. About 1,800 words, 7 figures, a tied winner.

### Page anatomy

1. Overview (~130): a single paragraph answering all six ballot questions.
2. System diagram and Key intended features (~350).
3. ROS (~700): what it is, what it is for, why it was chosen, how it was used, the node list,
   one validation result, an install guide, then fire detection, stereo vision, video
   transmission and the flight controller.
4. Other Software Contributions (~450): IR camera application, data processing, simulation.

### The ballot-answering paragraph

The Overview walks the ballot in order: standards (SBOL/SBOL3), formats (CSV/JSON/YAML),
integration (Python APIs, ROS nodes, CLI), ease of use, documentation and examples, code
structure, architecture diagrams, CI tests, containers. One paragraph, nine claims.

Use it both ways. The structure is worth copying: a judge who reads one paragraph should hit
every criterion. The content is not, because almost every claim is an adjective the page never
returns to. "Thoughtfully structured and commented" appears once and is never shown. The page
would be stronger with three of those claims and the evidence for each.

### Honest tense

The section is called "Key intended features", not "Features". Stereo vision is "we plan to
integrate". Video transmission is "We plan to use". And the ROS section ends:
"Due to time limitations, the ROS integration could not be fully achieved. The progress
achieved can be seen on the Software GitLab repository." A page can be mostly plans and still
win, if it labels them.

### The one hard result

The UDP-to-ROS bridge validation. They streamed local video with ffmpeg to emulate the
cameras, published three topics, named them (`/stereo/left/image_raw`,
`/stereo/right/image_raw`, `/ir/image_raw`), and state what that confirms: the nodes "can
ingest and relay stereo plus thermal data without drops". Small, specific, checkable.

### Weak spots

- Four of the subsections describe third-party tools (YOLO-GX, FoundationStereo, wfb-ng,
  Pixhawk 6C) in vendor register. They read as a parts catalogue, not as the team's work.
- No install path on the page, no licence, no references section, no limitations section.
- "All code is hosted on our GitLab with dedicated README files to ensure reproducibility,
  transparent methods, and clear contributions" is the whole documentation claim.

### For a reactor-software team

Write the Overview paragraph, then delete every claim you cannot point at. That exercise maps
directly onto our abstract.

## Vilnius-Lithuania 2024 UG

A remote monitoring and control interface for their own bioreactor. About 1,700 words, 5
captioned figures. The nearest neighbour to our page and the shortest winner that reads as
complete.

### Page anatomy

1. Introduction (~90): the lab problem and the tool in four sentences.
2. Planning (~300): Scrum, the stakeholders, five MVPs listed in order.
3. Architecture (~250): four components with roles, then the Docker decision.
4. Modelling (~130): three database tables and what each holds.
5. Implementation (~450): the API endpoints in prose, the Swagger spec, how the Arduino uses
   the API, the three UI sections, the turbidity-to-OD calibration.
6. Usage (~200): repository, requirements, two commands, the three services, the local URL.
7. Conclusion (~150) and two references.

### Opening

Four sentences, no hook. Bacteria take a long time to grow, so the reactor needed constant
supervision and in-person presence. Faults were hard to locate in time. So they built a remote
interface that cuts supervision time and logs readings to a remote database. The problem is
the lab's, not the software's, which is why it lands.

### Architecture as four sentences

PostgreSQL stores measurements and settings. Flask provides RESTful endpoints and sends alert
emails. The Arduino posts measurements and fetches control values over REST. React displays
and adjusts. Every component has a technology and a verb. Then Docker, with the reason named
("reducing the 'works on my machine' problem") and a citation.

### The hardware boundary

One paragraph does what our page needs: "One of the API consumers is the Arduino
microcontroller, which every minute sends a POST request to the server with the latest
measurements. After that, it sends a GET request to fetch the latest control settings." Then
the control law in two sentences: if temperature is below setpoint, the relay turns the heater
on; if above, off. Sample interval, direction of data flow, and who decides.

### The database schema in prose

Three tables, one line each, including a design detail that matters: the Alert table carries
"a timestamp to limit alerts to once every 30 minutes". Then one sentence on extensibility:
"This schema ensures flexibility, allowing easy expansion with new sensors or control
parameters by adding columns to the existing tables."

### Install

The whole reproduction path in six lines: the GitLab repository, two prerequisites (Docker and
Git), the clone command with the full URL, `docker compose up --build`, the three services
that start, and `http://localhost:8000`.

### The conclusion

"Out of the five planned MVPs, we successfully implemented four. Unfortunately, MVP5, which
involved the glucose monitoring system, was incomplete due to time constraints and
complexity." A scoreboard against a plan stated earlier on the same page. The MVP list in
Planning is what makes the count mean anything.

### Weak spots

- No validation and no benchmarking. The turbidity-to-OD relation `Y = (X - 185) / 2890` is
  given with no R², no range, no residual, and the data collection is pushed to the Hardware
  page.
- "Our software is designed to be compatible with any bioreactor" has nothing behind it. No
  second reactor was tried.
- "The system has been well-received by our wet lab colleagues, who have found it to be a
  valuable tool" is praise in place of a number. They had an email-alert count, a supervision
  time saving and five MVPs to measure against, and used none of them.
- "resulting in a robust and responsive bioreactor interface that effectively optimized
  laboratory processes" is a self-assessment closing a method section.
- The Planning section explains Scrum and MVP to the judges with a citation. Two paragraphs on
  a methodology that the five-item list already demonstrates.
- No licence on the page.

### For a reactor-software team

This page is the template. Take the Architecture paragraph, the Arduino paragraph, the schema
paragraph and the Usage block, and fill them with BR-01, the Uno Q firmware, the App Lab
backend, the browser interface, the CSV log and its columns. Take the MVP scoreboard: state
what the rig app was meant to do, then count. Avoid the reuse claim and the colleague
testimonial.

## UniMuenster 2024 OG

seq-mutator, a command-line tool for low-N protein engineering. About 5,000 words, 30
headings, only 8 figures, and over half the page is installation and usage.

### Page anatomy

1. Abstract (~160): who it helps, what it does, platforms, distribution.
2. Introduction (~700): the field, the low-throughput situation, the paper they implemented,
   what they added, how it installs, how the modules communicate, the tutorial test.
3. Description (~1,100): the method, the four subcommands, zero-shot, DNA shuffling, a use case.
4. Implementation (~250): languages, libraries, formats.
5. Installation (~1,000): prerequisites, Python per OS, virtual environments, pip,
   jackhmmer, GPU.
6. Usage (~1,500): a data-directory tree, then one subsection per subcommand with the exact
   command and inline comments on every flag.
7. Contributing, Authors and acknowledgment, License, References.

### Opening

Second person, immediately: "It can help you in case you too want to improve some protein's
activity, stability or any other characteristic, but are limited in your measuring capability
to only few rounds of a small number of measurements." Then the platforms and the distribution
method. A judge who will not install anything learns what it is, who it is for, and how it
would arrive, in four sentences.

### How user-friendliness is proved

"To ensure the quality of our tutorial we tested it both for Windows and Linux, and
additionally tasked one of our team members, who didn't have any python or command line
experience, with following the installation guide and all the usage examples, to great
success." The evidence is a person, identified by what they did not know.

### Scope of testing, stated

"The software tool is only tested for the following Python versions: Python 3.10.11,
Python 3.10.12." Two versions, named. The honest version of "cross-platform".

### Limitations at the point of use

Three, each placed where a user would hit it. A note in the install section: "Parsing Blast
output files was not implemented due to time constraints but might be implemented in future
releases." A warning in the zero-shot section explaining that language-model likelihoods come
from evolutionary data and "might therefore not correlate with your desired activity", with
the advice that follows. A sentence in the description that similar shuffling tools existed
"but none of the more elaborate tools are accessible anymore".

### Interoperability as a design consequence

"Our modules communicate through easy-to-parse .csv files, so at any step it is possible to
use some different tool and inject the results into our workflow." And the forward-compatibility
argument stated twice: because the restriction enzymes are parsed by BioPython from an upstream
registry, "if new restriction enzymes emerge, they will also be available in our software
tool"; because the models come from Hugging Face, "future novel protein language models will
automatically be available".

### Weak spots

- The License section says "Creative Commons Attribution 4.0 International (CC BY 4.0)". Not
  OSI-approved. The eligibility rule asks for an OSI licence and this page fails it in writing.
- Figure 1 and Figure 2 each appear twice with near-identical captions, one of them containing
  a typo the other fixes ("eESN-2" against "eESM-2").
- The usage section is a README pasted onto a wiki. It is the right content, but 1,500 words of
  commands with no summary means a judge has to scroll past all of it to reach Contributing.
- No limitations section and no performance numbers. There is no statement of how long
  evotuning takes or on what hardware, though VRAM estimation is delegated to a Hugging Face tool.
- "making it a highly accessible one-stop solution for AI-driven protein engineering" and
  "a seamless, all-in-one solution" are vendor phrases in a page that otherwise earns its claims.

### For a reactor-software team

Take the abstract's second person. Take the novice test and run it: hand the rig interface to
someone who has never seen it and report what happened. Take the "only tested for" sentence as
the template for every compatibility claim on our page. Take the Contributing block, seven
steps, which costs fifty words.

## Fudan 2023 UG

RAP: three tools (KineticHub, RAP Builder, PartHub 2) for designing polycistronic expression.
About 4,900 words, 29 figures, 13 references, 6 tables, heading depth 4. The strongest
all-round answer to the ballot in the set.

### Page anatomy

1. Overview (~600): a six-bullet Highlights list, the problem, the previous team's two named
   limits, the three tools, one paragraph answering four ballot questions, the repository URL.
2. Principle of pRAP (~400): the biology, with references.
3. Web UI (~1,400): browser support table, the stack, documentation links, then a four-step
   tutorial with a screenshot per step and query-example tables.
4. KineticHub (~500): notation table, Assumption 1, Assumption 2, the derivation, Implementation.
5. RAP Builder (~900): notation table, Assumptions 1 to 4 including the experimental validation
   of the stem-loop model, Implementation.
6. PartHub 2 (~700): what changed since 2022 and why, the graph model, PageRank, Louvain,
   Implementation.
7. DBTL cycles of RAP (~400), References.

### Opening

A dated note that they won the award, then the live demo URL and three docker links. Then
Highlights: six bullets, each one ballot question. Then the problem, then the previous Fudan
team's two limits named as bullets, then the tool. The repository URL closes the Overview.

The six Highlights bullets are the device to steal: "Intuitive WebUI with APIs for flexible
development", "Compatible with GenBank format, and easy integration with SnapGene", "Full DBTL
cycle support", "Experimentally validated results", "Up-to-date documentation and tutorial
videos". A judge reads the ballot answers in fifteen seconds and then chooses where to check.

### Reuse, evidenced

One paragraph in the Overview names everything: a Web UI with tutorials for ordinary users,
RESTful APIs for advanced ones, the GenBank format "which is an existing standards" and
SnapGene as the tool that opens it, two named iGEM teams (SCUT-China 2023, Nanjing-China 2023)
who used the software and fed back, and experimental validation of the sequences it generated.
Five claims, five referents. This is the passage our page has no equivalent of.

PartHub 2 extends it backwards: the 2022 version was used at the Jamboree, "so this year we
gathered feedback from PartHub users (2022 iGEMers and some judges in 2022 Grand Jamboree),
resolved known issues, and launched the improved PartHub 2", with three named changes.

### Assumptions

Each model gets a notation table first, then numbered Assumption headings, then the derivation.
The pattern inside each assumption is constant: the claim, the equation, then what it buys.
Assumption 1 of KineticHub: flux balance, the equation, "With this assumption, it prevents
metabolic stress caused by flux imbalance and permits the cell to be in a state of flux
balance." Assumption 4 of RAP Builder is where the experiment lives: they designed synthetic
stem-loops with distinct free energies, measured the GFP-to-RFP ratio, fitted SVR, and link the
part number and the dataset.

### Software-level evidence

Two numbers that are about the code rather than the biology. "RAP Builder's Monte Carlo
algorithm has a good search efficiency and can get a suitable sequence in a range of up to
1,000 iterations", with a convergence figure. And the browser support table, five browsers with
minimum versions and a date ("until Oct 2023").

### Engineering process as repo artefacts

"RAP strictly follows Conventional Commits and Semantic Versioning 2.0.0. Changelog capture the
changes made in each commit during the development of RAP, and the tags released in GitLab show
how RAP improved during the DBTL cycle." Process claims pointed at things a reader can open.

### Integration, both directions

They consumed BRENDA, named its licence (CC BY 4.0) and its size (over 70,000 records, over
7,000 EC numbers), hit the problem that it ships as a text file, and then "used and contributed
to a Python package to parse and manipulate the BRENDA database". A patch sent upstream is the
strongest integration evidence in the set.

### Weak spots

- The site licence is CC BY 4.0, the third winner to name a non-OSI licence for software.
- The rendered text carries "(opens new window)" after every external link, 69 times.
  On the live page these are link affordances; in the text file they are noise.
- "Softwar" appears as a heading above "Software", and the title is duplicated.
- "All synthetic, no worry of potential patent barrior" is a legal claim in five words with a
  typo in it.
- Figure 16's caption repeats Figure 13's ("Model of transcription and translation") and
  describes a Monte Carlo diagram.
- The DBTL section states the same thing twice in consecutive sentences, once with the clauses
  reordered.
- Opening with "we won the Best Software Tool (Undergrad)" is an artefact of a post-Jamboree
  edit, not a model to copy.

### For a reactor-software team

Take the Highlights block and write six bullets, one per ballot question, each naming an
artefact. Take the notation table before the equations. Take the assumption-then-consequence
shape. Take the two-named-teams sentence as the target: find one person outside the team who
ran our code, and say what they found.

## INSAENSLyon1 2023 OG

A guide-RNA motif finder across a gene database. About 2,700 words, 2 references, no tables,
heading depth 2. The plainest page in the set and the one most clearly written for a biologist.

### Page anatomy

1. Introduction (~120): the gap in the existing tool, what theirs does, cross-platform.
2. Motivation (~550): the project, the specific difficulty, what the program does, the search
   window and the ranking rule.
3. How to install it (~350): what a command prompt is, how to open one, four commands,
   Python and pip prerequisites per OS.
4. Installation (~400): clone, cd, check, dependencies, run, open the browser.
5. The input form (~350): every field, what it takes, what happens if left empty.
6. Example of use (~200): reproduce the team's own lab result, step by step.
7. Implementation (~70), How it is working (~550), Future improvements (~150), References.

### Opening

Three sentences carry it: "We wanted to develop software to solve a technical problem for
which no existing solution was found. Indeed, the only available tool only finds guide RNAs on
a single gene. But for our project, we wanted to find guide RNAs capable of hybridizing on
multiple genes of the same class." The gap, in one comparison, against a named class of tool.

### The install section

It starts below zero: it explains what a command prompt is, says "don't worry", and teaches
`cd`, `ls` and `pwd` before any installation step. Then Python and pip checks written out
separately for Windows and for Linux/macOS. No other winner starts this low, and this is the
cheapest user-friendliness evidence available.

### Parameter documentation

Every field on the form gets a line, and every optional field states its default: "If left
empty, the size of the pattern will be 23 nucleotides", "If left empty, the window will be 13
to 17". A reader can predict what the tool does before running it.

### The worked example

"To illustrate this, suppose you want to replicate the steps we performed to obtain the
patterns used in our laboratory experiments." Then the gene (oxa48, JF388_29535), the genome
file (`genome.fna`), the size (20), the motif (NGG) and the window (13 to 16). The team's own
experiment, re-runnable by a stranger. This is the move our page is furthest from.

### Decision with its cost

"We chose to code our software using Python. Even if this language is less effective and slower
than C, it is also the most commonly used for bioinformatic purposes. For this reason, it
seemed to be the most appropriate language to ensure accessibility and enable researchers or
future iGEM teams to use and improve our software." A choice, its price, and the reason the
price was worth paying.

### The dropped feature

The best limitation paragraph in the set. The confound first: the training data came from the
E. coli genome, "which differs considerably from the multiple species present in our
beta-lactamase database". Then the notebook left behind for others. Then the decision: "We
chose not to include this AI approach in our final software due to poor results due to our
training dataset." Then what survives: the functions that produce the gene context the approach
needs, "and could be implemented by future iGEM teams". Failure, cause, decision, salvage.

### Future improvements

Six items, and one of them names a bad behaviour in the shipped code: the coverage search "for
now, it chooses arbitrarily between two motifs when they have the same coverage". Naming an
arbitrary tie-break is more convincing than any claim of rigour on the page.

### Weak spots

- "Best Sotfware award" is a heading. The page misspells the prize it won.
- No validation, no benchmark, no runtime, no test data beyond the worked example.
- Fifteen images, ten of them decorative dividers with the alt text "Judging" or "Model".
  Two real figures.
- No licence named, though the code is on iGEM GitLab.
- "How it is working" is 550 words of algorithm narration in one voice with no subheadings, no
  pseudocode and no complexity statement. The content is good and nearly unreadable.
- Grammar slips throughout ("lauch", "the infos", "less effective").

### For a reactor-software team

Take the worked example and build ours: the run, the raw file, the script, the command, the
expected output. Take the parameter documentation for the rig interface's thresholds and
constants. Take the dropped-feature paragraph shape for any analysis we tried and cut.

## Cross-case synthesis

### Shared skeleton

Seven of eight follow this order, with variations:

1. **What it is and who needs it.** One or two paragraphs. The gap in existing tools, named.
   Platforms and distribution method, where they exist.
2. **Why it exists.** The team's own blocked work, ideally with a number (Marburg's 27 %,
   Munich's weeks per design, BIT-China's promoter search, Vilnius' supervision time).
3. **Architecture.** Components with their technology and their job. Five of eight have a
   diagram; all five also write the diagram out in prose.
4. **Method or model, per component.** Assumptions, equations and algorithms where there are
   any (Fudan, Marburg). Otherwise the pipeline in steps.
5. **Install.** Requirements, then commands, then the URL or executable you end up with.
   Five of eight put this on the page itself with runnable commands; Fudan gives docker images
   and a live demo instead.
6. **Usage.** A numbered walkthrough, a worked example, or a documented parameter list.
7. **Validation**, where present. Six of eight.
8. **Limits and future work.** Eight of eight, under some name: Future Improvements, Outlook,
   Future Development, Conclusion.
9. **Repository, licence, references.**

Where they agree: install and usage are separate, named sections with commands in them, and
they come before or beside the science rather than after it. The page is organised for someone
who might run the thing.

Where they differ: where validation sits. Munich gives it a top-level section after Usage.
Marburg folds Results into each approach. Fudan buries its best experiment inside
"Assumption 4". Vilnius, BIT-China and INSAENSLyon1 have none and still won.

Two devices appear independently and are worth copying: a claim list at the top (Fudan's
Highlights, Marburg's Key Points, EPFL's Overview paragraph), and a curated-default-plus-custom
pairing in every usage step (Munich, UniMuenster, INSAENSLyon1).

### UG and OG

- UG pages are shorter: 1,464 to 4,922 words. BIT-China and EPFL are both under 1,800 and both
  tied for the win. Length is not the lever.
- OG pages add the documentation apparatus: a Contributing section (UniMuenster), a developer's
  guide for a second audience (Marburg), a FAIR4RS table and an API reference (Munich).
- Validation quality does not track track or length. Marburg at 5,100 words and Fudan at 4,900
  have the cleanest evidence chains. Munich at 9,600 has the most material and the loosest
  claims around it.

### 2023 to 2025

- 2023 (Fudan, INSAENSLyon1): the tool is a program you install, and the page is its manual.
  Install and usage dominate. Fudan is the only page in the set that documents its own
  development process by pointing at commits and tags.
- 2024 (Vilnius, UniMuenster): architecture sections arrive, with diagrams and database
  schemas, and Docker and pip become the distribution story. Both pages test something about
  their own usability (Vilnius with its wet-lab stakeholders, UniMuenster with a novice).
- 2025 (Marburg, Munich, BIT-China, EPFL): hosted services, containers and REST APIs are
  standard. Munich brings a formal standards framework (FAIR4RS) onto the page. The ballot is
  answered more explicitly, sometimes to the point of EPFL's checklist paragraph. Marburg is
  the only 2025 winner whose numbers all carry denominators.

### Sentence patterns that answer the ballot

Fragments from the winners, each doing one ballot job:

- Gap in prior art: "the only available tool only finds guide RNAs on a single gene"
  (INSAENSLyon1)
- Own failure as motivation: "only 27 % of combinations were catalytically active" (Marburg)
- Install cost quantified: "could take our drylab team members a day to install correctly"
  (Marburg)
- Startup time: "After the first installation, starting up the program only takes a minute."
  (Marburg)
- Scope of testing: "The software tool is only tested for the following Python versions"
  (UniMuenster)
- Novice test: "tasked one of our team members, who didn't have any python or command line
  experience" (UniMuenster)
- Interop as consequence: "Our modules communicate through easy-to-parse .csv files, so at any
  step it is possible to use some different tool" (UniMuenster)
- Forward compatibility: "if new restriction enzymes emerge, they will also be available in
  our software tool" (UniMuenster)
- Extensibility as instruction: "adding new Python scripts under workspace/utils/ and calling
  them in main.py" (Marburg)
- Benchmark with denominator: "representing 68 % of the 72 condensation complexes excluding
  split genes and epimerisation domains" (Marburg)
- Reproduction as validation: "Our tool generates the exact construct validated as the original
  MESA Receptor" (Munich)
- Dogfooding: "Successfully found the light-controlled promoters we needed through this
  platform" (BIT-China)
- Named external users: "we have collaborated with other iGEM teams (SCUT-China iGEM 2023 and
  Nanjing-China iGEM 2023) to improve the software" (Fudan)
- Upstream contribution: "we used and contributed to a Python package to parse and manipulate
  the BRENDA database" (Fudan)
- Scoreboard against a plan: "Out of the five planned MVPs, we successfully implemented four."
  (Vilnius)
- Unbundled dependency: "Both HPCs and Colab are incompatible with Docker. Hence, we did not
  integrate Chai-1 into our Docker. Instead, we provide a Colab Notebook." (Marburg)
- Cost to a reuser: "offers access to A100 GPUs for 11 € per month" (Marburg)
- Honest minimum: "These specifications represent the minimum requirements. While the app will
  run, you may experience long wait times." (Munich)
- Feature cut with salvage: "We chose not to include this AI approach ... However, our functions
  still allow us to get the gene context" (INSAENSLyon1)
- Arbitrary behaviour named: "for now, it chooses arbitrarily between two motifs when they have
  the same coverage" (INSAENSLyon1)
- Unfinished work labelled: "the ROS integration could not be fully achieved" (EPFL)

The verbs that answer a ballot question are tested, measured, named, converged, deposited,
clone, install, run, contributed, reproduced. The verbs that leave it open are leverages,
ensures, plays well with, seamlessly integrates, is designed to be compatible with.

### Anti-patterns seen in winners

1. **Adjectives as compliance.** "plays well with synthetic biology standards", "thoughtfully
   structured and commented", "robust and responsive" (EPFL, Vilnius). Nothing follows.
2. **Reuse asserted.** "compatible with any bioreactor" (Vilnius) and "could have accelerated
   their development timelines from months to days" (Munich). Compare Fudan's two named teams.
3. **The wrong licence.** CC BY 4.0 named as the software licence by Munich and UniMuenster, and
   as the site licence by Fudan. CC BY is not an OSI-approved open-source licence, and
   eligibility asks for one. Creative Commons itself advises against using CC licences for
   software. Name MIT, Apache-2.0, BSD or GPL and put a LICENSE file in the repository.
4. **Praise as validation.** "well-received by our wet lab colleagues" (Vilnius);
   "Prof. Leonard praised the tool's comprehensive feature set" (Munich).
5. **Teaching the judges their own vocabulary.** Two paragraphs on Scrum and MVP with a
   citation (Vilnius); REST explained from first principles with Fielding cited (Munich).
6. **The README pasted whole.** 1,500 words of commands (UniMuenster), a 3,000-word inline
   OpenAPI dump (Munich). Right content, wrong altitude.
7. **The reason the tool exists arriving late.** BIT-China's promoter struggle is in section
   four; Vilnius' is in sentence two, which is why Vilnius' opening works.
8. **Self-assessment as a section ending.** "we successfully built a fully functional,
   high-performance ... platform" (BIT-China); "effectively optimized laboratory processes"
   (Vilnius).
9. **Repeated structure with no new content.** Abstract, Introduction, Outlook and Key Points
   three times over (Marburg); duplicated figures with near-identical captions (UniMuenster).
10. **Typos in the sentence claiming rigour.** "Consisten documentation" (Munich),
    "Best Sotfware award" (INSAENSLyon1), "Softwar" (Fudan).
11. **Future tense mixed with results.** "Wet lab validation will include cloning", followed by
    results for one experiment (Munich).
12. **Numbers with no denominator.** "over 80 % expressed interest" style claims appear across
    the set; Marburg is the only page where every rate names what it is a rate of.

## What our page does better than the winners

Specifics from `software/index.html`.

- **Validation against a baseline.** No winner compares its tool to a null model. R4 scores the
  Kalman filter against persistence at four horizons (41 %, 38 %, 25 %, 17 % improvement), and
  R3 scores the trust layer against a standard step detector that "flagged 23% of sensor
  anomalies and 0.8% of biological shifts, and could not tell them apart". Marburg's 68 % is the
  closest thing in the set and it has no baseline.
- **Held-out testing.** R5's leave-one-arm-out table gives the observed 24 h OD, the prediction
  with the prior and the prediction without, for all six arms. Error at most 7 % with the prior
  against 29 to 68 % without. Only UniMuenster runs in-silico experiments on data the model had
  not seen, and reports them on a different page.
- **Pre-registration.** `prereg_forecast_20261002.json`, SHA-256 `bceda7c0…6e0388fc`, with
  acceptance criteria stated in advance and "the score goes here whichever way it falls".
  Nothing in the eight winners does this.
- **A limits section with reasons.** Eight limits, each with the mechanism: n = 1 almost
  everywhere, 37 °C fits against 22 °C operation, Beer-Lambert linear only to OD 1.2, TMP below
  transducer resolution, a provisional clean-module baseline, restored calibration, one leaf
  sensor on a bench, the unexplained 120 to 160 h event. Marburg and INSAENSLyon1 manage three
  each; four winners have none.
- **Reporting a fault in our own current software, inside the section that describes it.** The
  ΔP ratio reads 0.83 and the γ ratio 1.01 for quantities that should agree to a constant of
  1.009, traced to two different flow windows, and set against the 2.8 % agreement measured in
  August. No winner reports a live bug in the tool they are being judged on.
- **A provenance vocabulary.** Every channel tagged in-line, commanded, soft, planned or
  external, and "Missing readings are left blank, never zero, and each row carries the
  algorithm, configuration and constants that produced it, so a September run can be pooled
  with an October one." This is a data standard, and it is better than anything in the FAIR4RS
  table, except that we never call it one.
- **Failure-driven design, stated.** "The rig app's interlocks, board-side recording, bubble
  rejection and calibration bookkeeping each exist because a run failed without them." The only
  comparable sentence in the set is Marburg's "a day to install correctly".
- **Live embeds.** Two running interfaces on the page, each with a caption saying what a reader
  sees with no board attached. Munich links a hosted app. Nobody else embeds.
- **A transferable-methods section.** "For other teams" gives five methods, each with its test
  case, including "the 434 h batch comes with it as a test case". The structure matches
  Marburg's and UniMuenster's best work.
- **References.** Nine, with DOIs, and two marked "Cited from secondary sources; the original
  was not read." Six winners have fewer; two have none. No winner flags an unread source.
- **Separating what was designed from what is wired.** "This is the rig as designed. The
  firmware reads three of the four pressure transducers on the parts list, one pinch valve, and
  no Luer valve or light." And "Nothing on this page was measured by the rewrite."

## What our page does worse

- **No install path.** Five of eight winners print requirements and runnable commands. We
  print none.
  "One file, no install, served by the board on port 7000" describes the operator's experience,
  not a reader's reproduction route. There is no clone URL, no dependency list, no command and
  no port a judge could open on their own machine.
- **No resolvable repository.** "Code and data are in the team repository and will be mirrored
  to gitlab.igem.org/2026/software-tools/ before the wiki freeze." Five winners print the exact
  `gitlab.igem.org/<year>/software-tools/<team>` clone URL in the body. This is also the
  eligibility item, so it is the highest-cost gap on the page.
- **Licence is a figure label.** "1007UI.html · MIT licence" appears twice as a caption prefix.
  The rig app, the analysis scripts and the data have no licence stated anywhere. Munich and
  UniMuenster give licence its own heading, and both name the wrong kind of licence, so stating
  MIT under a heading would put us ahead of them.
- **No architecture section.** The page names firmware v3.10.9, backend v4.12 and interface
  v4.13, and says interlocks live in the microcontroller. It never lists the components with
  their jobs. A reader cannot draw Vilnius' Figure 1 from our prose.
- **No interface contract shown.** "A documented two-line ASCII protocol with a heartbeat
  watchdog" appears once, in a bullet, in the second-to-last section. Vilnius publishes a
  Swagger spec; Munich prints curl calls; Fudan links example notebooks. We show neither the
  protocol nor one line of a log file.
- **No test description.** "a desktop harness that tests firmware and page together without
  hardware" is one clause. Nothing says what it covers or how to run it. EPFL earns credit for
  "CI tests" on less, which is a reason to write ours out rather than a reason to stay quiet.
- **No user outside the team.** Fudan names two iGEM teams who ran the software and changed it.
  Our page names nobody, and its reuse language is the weak kind: "Any team with an optical
  sensor can use it", "Others can reuse the method". That is Vilnius' "compatible with any
  bioreactor" with the same evidence behind it.
- **The data format is never named as a format.** We have the best provenance scheme in the
  comparison and we never give the reader a column list, a header line, a file-name convention
  or the units. The `gap_s` column is mentioned once in a subordinate clause.
- **No user walkthrough.** Munich has six numbered steps with a screenshot each.
  INSAENSLyon1 documents every form field and its default. Our Figure 9 describes one screenshot
  in prose. Neither interface is explained as something to operate.
- **The one software performance number is hidden in a caption.** "The status line shows 95 of
  the intended 100 pressure samples a second" sits inside Figure 9's caption. Fudan puts its
  convergence number in the body with a figure of its own.
- **Assumed knowledge.** TMP, LMH, wall shear, Nernst slope, oversampling, Kalman filter,
  NRMSE, AICc, persistence baseline and k_La all appear undefined. The page defines one term,
  digital twin, and does it well. INSAENSLyon1 explains what a command prompt is; Munich
  explains how to open a terminal on three operating systems.
- **Length in the wrong place.** At 6,044 words we are longer than six of the eight winners,
  and almost all of it is results. Winners spend a third to a half of their words on
  architecture, install and usage.
- **A question raised and left open.** "Whether two signals separate in one cuvette, and how far
  from 600 nm the second peak must sit, is open." Marburg handles the same situation by stating
  what a future model would take as input, which converts an open question into a specification.

## Moves our page is missing entirely

Each one is writing, not work. Every item exists in at least two winners.

1. A clone URL and an install command, in the body. (Vilnius, BIT-China, UniMuenster, Munich,
   INSAENSLyon1; Fudan prints the repository URL and per-component docker images)
2. A licence statement under its own heading, naming an OSI-approved licence for all the code.
   (Munich, UniMuenster; both name the wrong licence, so this is a chance to be right)
3. A component list: what runs on the board, what runs in the backend, what runs in the
   browser, and which one owns each job. (Vilnius, Munich, BIT-China)
4. The interface contract shown: the two-line serial protocol, or one line of it, or the
   backend endpoints. (Vilnius, Munich, Fudan)
5. The export format written out: the column list, the units, one header line, the file-name
   convention. (UniMuenster's data tree, Munich's output section)
6. A test statement: what the desktop harness covers, what it does not, and the command that
   runs it. (EPFL, Munich)
7. A numbered walkthrough of one interface, with the screenshot we already have. (Munich,
   INSAENSLyon1, BIT-China, Vilnius)
8. Someone outside the team running the code, and what they found. (Fudan, UniMuenster)
9. A requirements line: the board, the Python or browser versions it was tested on, and the
   ones it was not. (UniMuenster, Munich, BIT-China)
10. A performance statement in the body: achieved sample rate, loop latency, log growth per
    day, and how long an analysis run takes. (Fudan, Munich, Marburg)
11. A paragraph naming which standards and formats the data does and does not follow, and why
    not. (Munich's FAIR4RS table, Fudan's GenBank sentence)
12. A version and changelog convention, named, with the tags pointed at. (Fudan)
13. A "what another team must change to reuse the trust layer" paragraph: the healthy-window
    length, the percentile, the scoring interval, and what breaks if the reference beam is
    absent. (Marburg's `workspace/utils/` instruction, UniMuenster's module list)
14. A separate pointer for developers rather than operators. (Marburg's developer's guide,
    UniMuenster's Contributing)
15. A scoreboard against a plan: what the rig app's thirteen releases in five weeks were for,
    and which of those goals were met. (Vilnius' five MVPs)

## Length and density

| Page | Words | Figures | Captions | Headings | Max depth |
|---|---|---|---|---|---|
| Munich 2025 OG | 9,637 | 20 | 0 | 102 | 4 |
| Marburg 2025 OG | 5,075 | 13 | 7 | 46 | 3 |
| UniMuenster 2024 OG | 5,009 | 8 | 0 | 30 | 4 |
| Fudan 2023 UG | 4,922 | 29 | 0 | 26 | 4 |
| INSAENSLyon1 2023 OG | 2,686 | 15 | 1 | 10 | 2 |
| EPFL 2025 UG | 1,785 | 7 | 7 | 21 | 4 |
| Vilnius 2024 UG | 1,723 | 10 | 5 | 18 | 3 |
| BIT-China 2025 UG | 1,464 | 12 | 0 | 19 | 2 |
| **ours** | **6,044** | 9 images, 12 svg tab blocks | 10 | 24 | 3 |

Median winner: about 3,800 words. Three winners are under 1,800. Ours is second longest.

Figures run 7 to 29. Only Marburg, EPFL and Vilnius caption consistently, and Marburg is the
only one whose captions carry findings rather than titles ("Folding the entire sequence from
donor T domain to acceptor T domain will lead to wrong structures"). Our captions already
carry source filenames, which no winner does, and that is worth keeping.

Equations appear on two pages. Fudan puts a notation table before every derivation and files
each step under an Assumption heading. We use inline LaTeX with no notation table, which makes
R1, R5 and the forecast section harder to follow than they need to be.

Tables are the highest-value device in the set: Munich's FAIR4RS requirement/implementation
grid, Marburg's sample-output row with a caveat in the caption, Fudan's browser-support matrix
and notation tables. We already use tables heavily and well; the missing ones are a ballot
grid and a format or column table.

Code links: five of eight print a clone URL in the body, Fudan links a docker image per
component, Munich links DockerHub and PyPI, Marburg links a Zenodo deposit of 2,335 files. We
link no artefact at all.

Heading depth stays at 3 or 4. Nobody nests deeper. Munich's 102 headings are a warning, not a
target: most of them belong to a generated API dump.

## Source notes

- All three results pages were rendered from
  `https://competition.igem.org/results/<year>?tab=special-prizes`. Winner links there point at
  `teams.igem.org` team records, not wiki pages, so each wiki URL was reached by the standard
  `/<team-slug>/software` address and confirmed by rendering it.
- Fudan: the rendered text carries "(opens new window)" after every external link, 69 times, and the heading "Softwar" appears above "Software". Both are on the live page. One
  excerpt (`software-2023-ug-fud-01`) keeps the artefact because the rule is verbatim.
- Munich: 33 `[FOLD]` markers in the text file are the collapsed API endpoint rows. The three
  usage videos and the two linked PDFs (installation instructions, usage guide) are not in the
  text. The architecture and user-interaction diagrams render as bare `[IMG]`.
- Marburg: the page is tabbed or button-switched, so the contents list at the top repeats
  "Abstract", "Introduction", "Outlook" and "Key Points" three times. All three sections are
  captured. The two input-file dropdowns rendered fully.
- Vilnius: the Swagger widget renders as its three tag names (measurement, control,
  subscription) plus the spec URL, so the endpoint list itself is missing from the text file.
  The spec is at `https://static.igem.wiki/teams/5246/json/bioreactor-server-api.json`.
  Fig. 4 is a video and renders as a caption only.
- UniMuenster: Figures 1 and 2 each appear twice, which is in the source, not the renderer.
  The install and usage code blocks render with their inline comments joined onto one line.
- EPFL: the IR camera test video and the burn-measurement figures live on other pages. The ROS
  and Gazebo setup guide is a linked PDF, not captured.
- BIT-China: no captions in the source; the screenshot labels repeat the alt text. The
  installation steps appear twice in the rendered text because the page prints them both as a
  numbered list and as copyable blocks.
- INSAENSLyon1: ten of the fifteen images are decorative dividers with alt text "Judging" or
  "Model"; three more render as a bare `[IMG]`.
- No render came back under 4 KB and no retry was needed. The smallest text file is BIT-China
  at 10.9 KB.
