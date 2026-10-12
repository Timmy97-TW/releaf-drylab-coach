Jump to...
Adaptive Reaction Chamber
Best Undergraduate Hardware 2025
Liquid Culture
Biofilm
Photobioreactor
Treatment
Build for PRoSPER - and for your own ideas
Future Plans
# Adaptive Reaction Chamber
[IMG] Best hardware
# Best Undergraduate Hardware 2025
The Product Development Subteam has designed and built the Adaptive Reaction Chamber (ARC) bioreactor family tailored for two coculture model organisms: E. coli and Synechococcus. To accommodate the diverse requirements of these microbes, the bioreactor features a fully modular assembly. This design not only provides an ideal deployment platform for the PRoSPER project but also serves as a comprehensive benchtop bioreactor solution synthetic biology community.
[IMG] Image 1
[IMG] Image 2
[IMG] Image 3
In response to the specific needs of the PRoSPER project and the broader demands of synthetic biology bioreactor applications, we integrated a key interview with Dr. Hans Carlson and independently designed and fabricated the following variants of the ARC bioreactor family.
[IMG] ARC-L Liquid Culture
## Liquid Culture
“L” stands for Liquid Culture. This variant is equivalent to continuous stirred-tank reactor (CSTR). It features a top-mounted agitator and integrated pH and temperature sensors. Peripheral units include a heating module, an air pump, and input/output water pump module.
[IMG] ARC-B Biofilm
## Biofilm
“B” stands for Biofilm. Designed as a biofilm reactor. ARC-B builds upon the ARC-L and integrates four glass wool biofilm carriers.
[IMG] ARC-P Photobioreactor
## Photobioreactor
“P” stands for Photobioreactor. Tailored for photoautotrophic organisms. This variant adds a Chip-On-Board (COB) LED lighting module.
[IMG]
## Treatment
“T” stands for Treatment. This model is made for the PRoSPER to conduct perchlorate remediation. It contains six biofilm carrier slots and a specialized Soil Flowthrough Module designed to extract perchlorate from Martian Regolith.
# Build for PRoSPER - and for your own ideas
Mars may be distant. ARC’s compact design also makes it ideal for laboratories that require efficient bacterial culture systems.
[IMG]
ARC achieves large-volume liquid culture within an exceptionally small footprint. This is made possible by its efficient stirring system and robust aeration, allowing more culture medium to be accommodated within the same space. With a compact 19×19×24 cm volume, ARC can cultivate approximately 800 mL of liquid medium.
[IMG]
The top section of the reactor is CNC-machined from aluminum alloy and equipped with four stainless steel hose barbs. The combination of stainless steel, aluminum alloy, and internal silicone tubing makes the entire assembly autoclavable. Based on this, we designed a dedicated autoclave configuration, which allows the sterilized components to be assembled later with non-autoclavable parts. This ensure a rigorous and contamination-free sterile workflow.
[IMG]
The user can add culture medium and autoclave directly in this configuration. Afterward, the remaining components including the electronic circuits, top-mounted agitator, and sensors can be installed without opening the top, ensuring a sterile environment throughout the process.
[IMG]
The liquid-culture configuration of ARC is equipped with a 12V BLDC motor capable of up to 500 rpm, driving a 6 cm impeller. This setup provides high torque and speed for mixing in viscous media, supported by up to four aeration inlets that deliver airflow far beyond bacterial demand. In the biofilm configuration, due to limited top space, a motor rated up to 200 rpm is used instead.
[IMG]
Each module serves a different function but shares the same standardized size, allowing it to fit into any of the six slots surrounding the main reactor body. Two of these slots are dedicated to pump modules, which can be swapped between water and air pumps. The remaining four slots can be interchanged between COB LED modules and heating modules.
[IMG]
Each module serves a different function but shares the same standardized size, allowing it to fit into any of the six slots surrounding the main reactor body. Two of these slots are dedicated to pump modules, which can be swapped between water and air pumps. The remaining four slots can be interchanged between COB LED modules and heating modules.
[IMG]
Each module serves a different function but shares the same standardized size, allowing it to fit into any of the six slots surrounding the main reactor body. Two of these slots are dedicated to pump modules, which can be swapped between water and air pumps. The remaining four slots can be interchanged between COB LED modules and heating modules.
[IMG]
Each module serves a different function but shares the same standardized size, allowing it to fit into any of the six slots surrounding the main reactor body. Two of these slots are dedicated to pump modules, which can be swapped between water and air pumps. The remaining four slots can be interchanged between COB LED modules and heating modules.
[IMG]
Each module serves a different function but shares the same standardized size, allowing it to fit into any of the six slots surrounding the main reactor body. Two of these slots are dedicated to pump modules, which can be swapped between water and air pumps. The remaining four slots can be interchanged between COB LED modules and heating modules.
[IMG]
Each module serves a different function but shares the same standardized size, allowing it to fit into any of the six slots surrounding the main reactor body. Two of these slots are dedicated to pump modules, which can be swapped between water and air pumps. The remaining four slots can be interchanged between COB LED modules and heating modules.
[IMG]
Each module serves a different function but shares the same standardized size, allowing it to fit into any of the six slots surrounding the main reactor body. Two of these slots are dedicated to pump modules, which can be swapped between water and air pumps. The remaining four slots can be interchanged between COB LED modules and heating modules.
[IMG]
For the most efficient configuration switching, we deeply integrated magnetic connectivity. Each module uses a MagPin connector that provides a 5-pin electrical interface. The main circuit is housed in the base, minimizing module size while enabling multifunctional interchangeability.
[IMG]
With the standard established, new modules naturally follow. At this stage, we have developed COB LED modules, heating modules, and two types of pump modules — one for liquid and one for air
[IMG]
Each COB LED module is equipped with a 12V 16W COB LED panel capable of delivering up to 1000 lumens of brightness. At the working distance within ARC, a single panel can provide up to 37 klux of brightness, which is more than sufficient to support Synechococcus which requires 3000 lux. In the final tests, only 20% brightness was needed to achieve optimal illumination with 2 modules.
[IMG]
During our testing with all four COB LED modules, running at 10% brightness for 10 minutes consumes only 1 Wh, and at 20% brightness, just 1.5 Wh. The total power of all four panels combined stays below 10 W, which is far less than the power draw of a phone charger.
[IMG]
Each heating module is equipped with two 12V 12W heat pads, attach to the beaker via a thermal pad to ensure uniform heat distribution. It also features aerogel insulation layers to minimize heat loss. An Arduino-based control algorithm implements a negative-feedback loop with the temperature sensor to optimize power usage.
[IMG]
The pump module comes in two configurations: an air pump and a liquid pump. The liquid pump delivers a combined flow rate of 15 mL/s across two channels at 90% power. The air pump version is able to reach sufficient aeration for a 1 L culture at only 30–40% of the PWM output.
[IMG]
ARC achieves full-system wireless control through via the HM-10 Bluetooth module. Building on this foundation, the Wiki subteam also developed ArcDash, a companion software for real-time monitoring, control, and calibration of the bioreactor.
[IMG]
HM-10 module connects to the microcontroller that drives the entire ARC bioreactor - an Arduino Mega 2560 Pro. It is soldered and wired directly to interface with the other modules.
[IMG]
Meanwhile, we also prepared a general operating manual containing detailed assembly guidelines and operation guidelines. It contains detailed descriptions of the precautions in operation, the assembly of autoclave configuration, and the specific structural differences among different variants.
User Guide PDF
All of these features come at a cost price of only $300.
| Item
| Unit Price ($)
| Total Price ($)
| Quantity
| Notes
| Main Structure
| 1L Beaker
| 5.80
| 1
| Main Structure
| 3D Printing Filament 1kg
| 15.99
| 1
| Main Chamber Printing
| DC 12V Gear Motor
| 11.24
| 1
| Agitator
| ¼” Hose Barb
| 4.99
| 19.98
| 4
| $9.99 for 2 units, needs 4
| The Rim CNC
| 43.78
| 1
| Top Structure in autoclave configuration
| Top Mount CNC
| 57.36
| 1
| 20×5×2 Magnets
| 0.20
| 7.20
| 36
| Each pillar has 6 magnets
| MagPins
| 4.99
| 29.97
| 6
| 3 pairs; main body needs 6× female connectors
| Silicone Tubing
| 11.99
| 1
| 3 m
| Bubbler Stone
| 6.75
| 1
| $13.49 for 2 units
| pH Sensor
| 19.88
| 1
| Temperature Sensor
| 13.48
| 4.49
| 1
| $13.48 for 3 units
| Electronics
| Arduino Mega 2560 Pro
| 16.99
| 1
| DRV8871
| 3.96
| 23.76
| 6
| $11.88 for 3 pcs, needs 6
| Mosfet Module
| 1.30
| 2.60
| 2
| $12.99 for 10 pcs
| HM-10
| 4.66
| 1
| $13.99 for 3 pcs
| DC-DC Buck Converter
| 2.21
| 1
| $13.25 for 6 pcs
| PCB Prototyping Board
| 0.50
| 1
| COB LED Module
| 12V 16W COB LED Panel
| 2.60
| 1
| $12.99 for 5 pcs
| Aluminum Heat Sink
| 0.96
| 2.87
| 3
| $11.49 for 12 pcs
| 3D Printing Filament
| 15.99 /kg
| ~1.50
| 1
| Heating Module
| 12V 12W Heat Pad
| 1.25
| 2.49
| 2
| $14.99 for 12 pcs
| Thermal Pad
| 2.59
| 1
| $10.39 for 4 units
| Aerogel Insulation Tape
| 1.59
| 1
| $15.99 for 10 units
| Aerogel Insulation Padding
| 2.59
| 1
| $25.99 for 10 units
| 3D Printing Filament
| 15.99 /kg
| ~1.50
| 1
| Pump Module
| 12V Water Pump / Air Pump
| 9.45
| 18.90
| 2
| MagPins
| 4.99
| 2.49
| 1
| 4.99 is for a pair, Only needs male for module
| Magnets
| 0.2
| 1.2
| 6
| 9.99 for 50 pcs
| 3D Printing Filament
| 15.99 / kg
| ~1.5
| 1
| Total Price = $285.15 | COB LED Module = $10.66 | Heating Module = $14.45 | Pump Module = $24.09
The prices listed above are for reference only. For example, the CNC-machined Top Mount refers to the ARC-B version; other versions would be less expensive, as the CNC machining of the biofilm carrier slots in ARC-B involves higher complexity and precision.
# Future Plans
ARC is constantly evolving. Looking ahead, we see multiple directions for continuous development, each representing a major potential update that could solve a new problem.
1. Integrated PCB Development
As mentioned earlier, one of our primary goals is to develop an integrated PCB version of the control system. Compared to the current prototype, the PCB version would offer higher stability, smaller footprint, and consistent manufacturability. This is a key step toward transitioning from a prototype to a fully productized platform.
2. Expansion of Modules
Although we have already open-sourced the existing module files and dimensions, we plan to continue developing new modules. The first focus is on compatibility with a broader range of model organisms and experimental workflows. For instance, a cooling module could enable finer temperature control, while new sensor modules could provide monitoring for additional parameters.
Another line of development involves adding advanced features such as an optical sensing module. We have envisioned this concept for a long time but could not yet implement due to time and precision constraints. Successfully realizing this would mark a great milestone for ARC.
Finally, an automated pipetting system is also a promising direction. Through precise control with stepper motors, this would move ARC further toward full automation.
3. Scaling and Capacity Expansion
Last but not least, scalability remains an important development frontier. The current design uses a 1 L beaker, but future iterations could explore larger chambers or soil flow-through setups, depending on mission requirements. Under permissible mass and volume limits for Mars missions, scaling up will be an essential step toward achieving large-scale operation.
[IMG] Rocket
