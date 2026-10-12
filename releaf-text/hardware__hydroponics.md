Skip to the written record
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
[IMG]
Hydroponics
Floating Plate
06
Roots reach the solution
Growth
Shoots rise from the baskets while the roots grow down through them into the aerated water.
Loading 0%
Scroll
## Summary
A printed plate that floats on the medium, so thirteen Arabidopsis seedlings sit at one depth however much liquid is left.
The flotation is sealed air built into the frame itself: two chambers inside the pontoons, 42.27 cm³ between them, with no foam block and nothing strapped underneath. Every dimension and every displacement here is measured off the STLs the parts print from, which gives the plate a load line: it sits about 1 mm lower for each 3.5 g it carries. Sixteen pieces print in PLA on a standard FDM machine and go together with no adhesives and no fasteners.
Seedlings
  13
Sealed air
  42.27cm³
Freeboard drawn
  9.2mm
Sensitivity
  3.5g per mm
Printed parts
  16
## Results
- Buoyancy sized from the STLs Computed 42.27 cm³ of sealed air, and a freeboard for every mass from 0 to 111.9 g
- Geometry off the CAD Measured 13 bores at a 21.59 mm pitch; pontoons 10.16 mm wide, 21.91 mm deep
- The first floating version printed Built In PLA on 25 June, with washers on four corner poles to trim the freeboard
- Freeboard of a printed plate Untested The printed plate was not weighed, so the load line is unchecked against a real part
- Print settings Partial PLA, 15% gyroid in the pontoons, no supports; layer height, walls and orientation not recorded
- One STL per printed part Four files Plate, two handles and the seed holder: 74.72 cm³ across sixteen pieces
Contents
- 013D Design and Animation
- 02Purpose
- Standardization of Hydroponics for Labs
- The Problem With Fixed Plates
- 03Design Requirements
- 04Buoyancy Design
- 05Geometry and Mechanical Design
- 06Design Evolution
- 07Full DBTL Cycles
- 08Reproduction
- 09Design Files
# Hydroponics Floating Plate
Section02
## Purpose
### 2.1 Standardization of Hydroponics for Labs
Labs that grow Arabidopsis in liquid medium tend to improvise the setup: a piece of foam cut to size, a mesh taped over a container, or a fixed plate sitting above a reservoir. None of it is repeatable between labs, or even between runs in the same lab.
Our plate floats on the medium, so the seedlings stay at the same depth no matter how much liquid is left. The whole thing is four STLs printed on a normal FDM machine, so another lab can run the same geometry we did. Same depth, same spacing, same conditions, whoever is running it.
### 2.2 The Problem With Fixed Plates
Our first version was a fixed plate sitting over a liquid chamber. The plate held the seedlings at a set height and the medium sat underneath, so the level had to be set by hand before every run.
The level has to sit just under the growing platform and as high as we can get it. Too low and the roots lose contact; too high and the platform floods. The window between those two failures is narrow.
It also does not stay where you put it. The plants drink and the medium evaporates, so a level that was right at the start of a run is wrong by the end of it. Someone has to watch the reservoir and top it up, and every top-up is a chance for conditions to drift between replicates. That is what we set out to remove.
Level inside the window
Same depth at every level
Start of a runEnd of a run
[CAPTION] Figure 1 The level falls through a run. Over a fixed plate it has to stay in a narrow window: too high and the platform floods, too low and the roots lose contact. A floating plate falls with the level, so the roots stay at the same depth. Schematic, not to scale.
Section03
## Design Requirements
#### R1 · Constant root depth
Hold root depth constant for the whole run, with no manual topping up.
The plate floats, so the seedlings stay at the same depth however much liquid is left. Sections 2.2 and 4.
#### R2 · Thirteen seedlings
Carry 13 Arabidopsis seedlings.
Thirteen seed positions in rows of four, five and four. Section 5.
#### R3 · Flotation in the frame
Float on the medium under its own buoyancy, with no separate float attached.
Sealed air built into its own frame: no foam block, nothing strapped underneath. Section 4.
#### R4 · One standard printer
Print in PLA on a standard FDM machine.
PLA, 15% gyroid infill in the pontoon sections, no supports needed. Section 8.2.
#### R5 · Nothing to glue
Assemble with no adhesives and no fasteners.
Clip-in handles, and nothing to glue or strap on. Section 5.
Section04
## Buoyancy Design
The plate floats on a sealed air volume built into its own frame. There is no foam block and nothing strapped underneath. The pontoon sections run hollow with a teardrop cross-section and print at 15% gyroid infill, which keeps the walls light while leaving enough internal structure to hold their shape.
The teardrop is the sealed chamber inside each pontoon: a box section 6.99 mm wide whose lower sides are chamfered at about 45° to a point, so its cross-section is a pentagon 20.32 mm deep, walled in 1.59 mm of plastic (Figure 5). The two chambers hold 42.27 cm³ of sealed air between them.
Sizing them is a displacement problem. The plate has to displace its own mass plus the seedlings plus whatever water the printed part takes on, and it has to do that while sitting at the freeboard that puts the roots in the medium and the crowns above it. We ran this calculation again every time the design changed, because any change to wall thickness or footprint moves the mass and the displacement at the same time.
- MassThe plate's own mass, plus the seedlings, plus whatever water the printed part takes on.
- BuoyancyThe medium the pontoons displace below the waterline (hatched).
- FreeboardWhere the two balance: the roots in the medium and the crowns above it.
[CAPTION] Figure 2 A displacement problem. Section A–A of the CAD, afloat. The plate settles where its mass equals the mass of medium it displaces. The waterline is drawn 6.0 mm under the slab, a freeboard of 9.2 mm, where the assembled plate displaces 54.2 cm³ (Table 1; point 1 of Figure 3).
Measured off the CAD, the displacement at each waterline gives the plate’s load line (Figure 3). In water at 1.00 g/cm³ every cubic centimetre displaced floats a gram, so weigh the assembled plate with its seedlings, find that mass along the bottom, and read the freeboard up the side; Table 1 lists seven of its points. Down the straight sides of the pontoons the hull gains 3.51 cm³ per millimetre of draft, so every 3.5 g added sinks it about 1 mm.
Freeboard, mm
0510152025020406080100120123about 1 mm lowerfor every 3.5 gsolid PLA
Mass afloat, g: the plate, its seedlings and any water it takes on
- 1The waterline drawn in Figure 2: 54.2 g floats with 9.2 mm of freeboard.
- 2The slab’s underside meets the water at 79.4 g and 3.2 mm. From here the whole slab displaces, so each gram sinks it less.
- 3The slab top is awash at 111.9 g.
- Solid PLA: printed solid, the sixteen parts would weigh 92.6 g at most, and float with 1.9 mm of freeboard.
[CAPTION] Figure 3 How low it floats. The load line of the assembled plate, computed from the STLs: the freeboard it floats at for each mass it carries. The dots are the seven waterlines of Table 1. Down the pontoons’ straight sides it sinks about 1 mm for every 3.5 g; past point 2, about 1 mm for every 10 g.
[FOLD] Displacement at each waterline7 waterlines
[TABLE] Table 1 Displacement at each waterline
| Freeboard
| Draft
| Plate alone
| Assembled
| 18.2 mm
| 6.9 mm
| 22.4 cm³
| 15.2 mm
| 9.9 mm
| 32.9 cm³
| 12.2 mm
| 12.9 mm
| 43.4 cm³
| 9.2 mm, as drawn
| 15.9 mm
| 54.0 cm³
| 54.2 cm³
| 6.2 mm
| 18.9 mm
| 64.5 cm³
| 65.5 cm³
| 3.2 mm, slab underside at the water
| 21.9 mm
| 75.9 cm³
| 79.4 cm³
| 0, slab top at the water
| 25.1 mm
| 105.9 cm³
| 111.9 cm³
Freeboard is the slab top above the water; draft, the pontoon bottoms below it. Displacement is the volume of the printed shell below the waterline, sealed air included, computed exactly from the STLs. Assembled adds the parts of the two handles and the thirteen seed holders that sit under the water. Assumes the medium reaches the slab's underside, with no air trapped beneath it.
[FOLD] An earlier draft, and the ballast poleswhere the margin was
One worked case from the drafts shows how tight the sizing is. At a plate mass of roughly 180 g the pontoons came up short and needed about 0.65 cubic inches (about 10.7 cm³) of extra volume each to sit at the target freeboard. That mass is not this plate: 180 g is well past the 111.9 g at which the plate measured here goes under (Table 1). The case is an earlier draft’s, and no printed plate has been put on a balance, so the load line above stands on the STLs alone.
The four corner poles on the first floating version were the safety margin on this. They took washers as ballast in case the plate rode too high. Later iterations tuned the volume closely enough that the poles came off.
Section05
## Geometry and Mechanical Design
[IMG] Render of the floating plate from its CAD, cut across the outer row of seed holders. A dark slab is carried by a pontoon along each long side; inside each pontoon is a violet sealed chamber that closes to a point. Brown seed holders sit in the bores, a grey handle stands at the far end, and nothing hangs under the middle of the plate.
1 2 3
[CAPTION] Figure 4 Cut open. Rendered from the CAD and cut through the outer row of seed holders. Each pontoon carries a sealed chamber (violet); the middle of the plate is open underneath. Pins 1 to 3 match the list below; 4 is not on this version of the plate.
- 1
Teardrop cross-section on the pontoon tubes, which prints without support and sheds the overhang cleanly. Each is a box section with its lower sides chamfered to a point: a pentagon.
- 2
The frame is the flotation. Sealed air chambers are part of the structure, so there is nothing to glue or strap on and nothing to come loose in the medium. The slab, both pontoons and their chambers print as one piece.
- 3
Clip-in handles, so the plate lifts out of the reservoir without anyone touching the seedlings.
- 4
Corner poles for washer ballast on the first floating version, removed once the buoyancy was tuned (section 6).
- Sealed air chamber, hidden below the slab
- Pontoon, hidden below the slab
- Clip-in handle
- Sealed air, in section
- Printed plate, in section
- Seed holder
[CAPTION] Figure 5 Measured off the CAD. Plan, section A–A through the outer-row bores, and one pontoon in detail. Every outline is a slice of the STLs the parts print from; dimensions in millimetres.
[FOLD] Measured geometry11 dimensions
[TABLE] Table 2 Measured geometry
| Feature
| Measured off the CAD
| The plate
| Plate envelope
| 117.50 × 92.50 × 25.08 mm
| Top slab
| 3.18 mm thick
| Seed positions
| 13 bores in rows of 4, 5 and 4; 21.59 mm apart along a row, rows 22.86 mm apart, the outer rows half a pitch off the middle one
| Bores
| Teardrop-shaped: a ∅10.39 mm circle drawn out to a point, 11.69 mm long. Each seed holder's flange is the same shape
| Flotation
| Pontoons
| One along each long side, 10.16 mm wide and reaching 21.91 mm below the slab, with 3.81 mm corner radii. Each hooks inward at both ends and stops short of the handle pocket
| Sealed chambers
| One inside each pontoon, 114.33 mm long overall: a box section 6.99 mm wide whose lower sides are chamfered at about 45° to a point, a pentagon 20.32 mm deep, with 1.59 mm walls and floor; the slab is its roof. 21.13 cm³ each, 42.27 cm³ the pair
| Below the centre
| Nothing: the middle of the plate is flat slab, open underneath
| Displacement
| 75.9 cm³ up to the underside of the slab; 105.9 cm³ with the whole plate submerged; 117.0 cm³ with the handles and seed holders as well (Table 1)
| The printed parts
| Printed volume
| Plate 63.60 cm³; handles 2.76 cm³ each; seed holders 0.43 cm³ each. 74.72 cm³ across all sixteen pieces
| Handles
| 12.34 × 25.40 × 32.89 mm, one at each end. The foot wraps the end of the slab and locates on a trapezoid notch; the grip stands 26.51 mm above the slab
| Seed holder
| An 11.92 × 13.21 mm flange over a tapered basket, 12.07 mm tall. Modelled once, placed thirteen times
Section06
## Design Evolution
01
#### Fixed plate
A plate held at a set height over a liquid chamber. It worked, but only for as long as someone kept the level correct, which is covered in 2.2.
Why it changedThe level does not stay where you put it: the plants drink and the medium evaporates, so someone had to watch the reservoir and top it up (2.2).
02
#### First floating version
started 6/25
We moved the flotation into the frame and let the plate ride on the surface. Corner poles carried washers so we could trim the freeboard after printing instead of reprinting the whole part.
How it changedThe poles were the safety margin on the buoyancy. We ran the displacement calculation again every time the design changed (section 4), and later iterations tuned the volume closely enough that the poles came off.
03
#### Current version
Smaller footprint, clip-in handles, and buoyancy tuned closely enough that the ballast poles were no longer doing anything. This is the version in section 8.
The side views are schematic, not to scale. The current version is drawn from its CAD in Figure 5.
[IMG] The first printed floating plate on a dark table: a white slab perforated with a grid of holes over a closed hollow frame, with a threaded pole and a washer stack rising from each of the four corners.
[CAPTION] Figure 6 The first floating version, printed. 25 June 2026, step 02 above. The flotation is the closed frame under the slab, and each corner pole carries the washers that trim the freeboard. It was never put on a balance (section 4).
Section07
DBTLCycles
DBTL cycles on the Plants DBTL page
## Full DBTL Cycles
The plate’s full design–build–test–learn cycles belong on the Plants DBTL page. Stage by stage, this is what this page already holds.
- DDesignBuoyancy sizing, the CAD and its drawings
- BBuildThe first floating version, printed 25 June
- LLearnWhat each version changed, and why
Section08
## Reproduction
### 8.1 Bill of Materials
[IMG] Render of the printed parts from the CAD, drawn apart: the dark floating plate with thirteen teardrop-shaped bores, thirteen brown seed holders lifted above them, and a grey clip-in handle lifted off each end.
[CAPTION] Figure 7 The printed parts. One floating plate, two clip-in handles and thirteen seed holders, drawn apart from the CAD.
[FOLD] Printed parts4 parts, 16 pieces
[TABLE] Table 3 Printed parts
| Part
| Qty
| Volume, each
| Cost
[IMG]
Floating plate
| 1
| 63.60 cm³
[IMG]
Handle, left and right
| 2
| 2.76 cm³
[IMG]
Seed holder
| 13
| 0.43 cm³
| Total
| 16
| 74.72 cm³ in all
All four parts print in PLA. Volume is the solid volume of one part in the CAD, not the filament a print uses, which depends on walls and infill. No cost is recorded for any of them.
### 8.2 Print Settings
[FOLD] Print settings4 rows
Print settings
Material
  PLA
Printer
  A standard FDM printer
Infill
  15% gyroid in the pontoon sections
Supports
  None needed
Layer height, wall count and print orientation are not recorded.
Section09
## Design Files
The four printed parts, one STL each, rendered here from their own files. The plate, the handles and the holder all print in PLA (8.2). The files are not yet attached to this page.
[FOLD] The four STLsone per printed part
- 1
Floating plate
The slab, both pontoons and their sealed chambers, as one print. 117.50 × 92.50 × 25.08 mm.
[IMG]
- 2
Left handle
Its foot wraps one end of the slab and locates on a trapezoid notch. 12.34 × 25.40 × 32.89 mm.
[IMG]
- 3
Right handle
The left handle’s mirror image, for the other end of the slab.
[IMG]
- 4
Seed holder
A flange over a tapered basket, 12.07 mm tall. Print thirteen, one for each bore.
[IMG]
↑↓ move ↵ go esc close
