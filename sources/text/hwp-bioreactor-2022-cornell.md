# Hardware
Overview. . As our primary product is a bacterially produced bioink with expressed chromoproteins, it is essential that we can provide a safe and efficient place for our bacteria to grow. This bacterial home must maintain a precise balance of several variables and react to the changing environment of the bacteria in real-time. In order to produce a large amount of bacteria without needing a giant growth chamber, we have chosen to create a continuous flow bioreactor. In essence, we supply nutrients and dilute basic solutions to meet the needs of the growing E. coli, which produce the csgA subunits necessary for the assembly of the bioink. When existing E. coli have expressed the desired csgA protein, they are pumped out of the growth tank to be replaced by new generations of bacteria to continue the process. This whole process is monitored by a fleet of sensors, which connect to multiple support systems in order to optimize our protein production.
- Bioreactor
- Bioreactor Sources
- 3D Printer
- Handheld Bioprinter
- Sources
## Bioreactor
#### Overview
As our primary product is a bacterially produced bioink with expressed chromoproteins, it is essential that we can provide a safe and efficient place for our bacteria to grow. This bacterial home must maintain a precise balance of several variables and react to the changing environment of the bacteria in real-time. In order to produce a large amount of bacteria without needing a giant growth chamber, we have chosen to create a continuous flow bioreactor. In essence, we supply nutrients and dilute basic solutions to meet the needs of the growing E. coli, which produce the csgA subunits necessary for the assembly of the bioink. When existing E. coli have expressed the desired csgA protein, they are pumped out of the growth tank to be replaced by new generations of bacteria to continue the process. This whole process is monitored by a fleet of sensors, which connect to multiple support systems in order to optimize our protein production.
##### Cycle 1
Design Process
The nature of our project requires a functioning bioreactor, which we were able to implement by building upon the bioreactor implemented last year in Cornell’s 2021 iGEM project, Collatrix [1]. Despite appearing functional, this setup had setbacks that prevented it from performing at its desired capabilities. Thus, the goal of our engineering cycle was to improve and optimize this former setup into a system that suits our new requirements.
[IMG]
[CAPTION] Figure 1: 2021 iGEM Cornell Collatrix bioreactor implementation [1]
Our primary concern was the scale of our project compared to that of last year. With the need for a larger volume of effluent in order to supply the 3D printer with a proper amount of printing material, we considered increasing from 2 jars to 3 jars. This would also provide 3 compartments for us to be able to grow 3 different types of modified E. coli that expressed unique chromoproteins for a larger range of color when 3D printing. Before finalizing this larger system, we decided to first optimize the existing smaller bioreactor.
As we brainstormed further ways to optimize, we made various sketches of what we wanted the updated version to look like.
[IMG]
[CAPTION] Figure 2: Sketches of the updated bioreactor for the first iteration
Build Process
Once we began building the updated version of the bioreactor, we realized that a nozzle shown in Figure 2, while in theory is great for sampling, would cause issues. These issues being that it could lead to potential contamination of the cells within the bioreactor, and how to ensure sterility on the outside nozzle. Additionally, once we put the sensors onto the sides of the bioreactor, we noted that three motor fans would be too many and they would bump into the sensors. Thus, we opted for one motor fan for our next iteration.
##### Cycle 2
[IMG]
[CAPTION] Figure 3: Sketch of the bioreactor for the second iteration
Our primary area of optimization was the mixer blades. From last year, the mixer blade was harnessed to a threaded rod and connected to the motor via a shaft coupler. Initial considerations wondered if the use of 2-3 total mixer blades per threaded rod would be effective in providing uniform mixing of bacteria. This was considered as we progressed through our CAD design process. Ultimately, this multi-stack mixer blade was not used because of the presence of the sensors in the motor as well as the uncertainty of actual improvement. Due to the sensors, there was a physical limit to how far up the motor blade could be positioned. Additionally, it was skeptical if having more motor blades would actually improve efficiency when the additional blades would not be positioned in the center of the solution, but instead near the top or bottom. Thus, we opted to remain with only one mixer blade per bioreactor.
[IMG]
[CAPTION] Figure 4: Mixer blade from Collatrix 2021
[IMG]
[CAPTION] Figure 5: First iteration of new mixer CAD model
[IMG]
[CAPTION] Figure 6: Final design for mixer CAD model
The mixer blades themselves were redesigned to have a total of 6 wings as well as having a larger radius. This was our solution to having more uniform mixing by increasing the surface area of the blades, there would be more volume that was constantly in motion to create even mixing. We maximized the length of the mixer blades to provide clearance for the sensors necessary for the maintenance of the bacteria by gorilla taping the sensors to the walls of the container.
[IMG]
[CAPTION] Figure 7: Electrical box of the bioreactor with working LCD display (left)
In addition to the mixer blades, we made improvements to the electrical circuit of the bioreactor. In Cornell Collatrix 2021, the final system was not tested due to the fact that one of the motors was reversed and inadvertently overflowed the base additive over the electrical wiring and boards. Our solution to this problem was in two steps: firstly, building a modular electrical box to house all our motor driver boards, arduinos, wires, and breadboard, and secondly, improving the standardization of wiring and code such that a miscommunication or misalignment would not result in harming our project.
[IMG]
[CAPTION] Figure 8: View of the electrical box in relation to the existing bioreactor and potential placement of the modular component.
The electrical box was made with recycled plexiglass from the construction of the bioreactor housing. The corners were joined and sealed with waterproof caulk and a thin foam sheet was fitted to the bottom of the casing to allow the parts to stay more static. A physical improvement to the circuit was the addition of a working LCD display that will be used to periodically confirm that the system is functioning properly. Furthermore, we were able to consolidate the circuit down from four motor drivers to three.
The standardization of wiring and code was done in part with the help of multi-colored wires. All sets of wires from motor drivers were consistent colors as seen in figure 8 and when applicable, wires connecting ground and power were black and red respectively. Additionally, all wires running from motor drivers to motors were color coded in pairs to make pin input into the code more systematic along with the addition of marking tape on the wires. The marking tape allowed us to identify which wire of the colored pair would map to the positive or negative terminal of the motor (we selected a marked wire as the positive end), such that if a wire were to come loose or needed adjustment it would be simple to reattach and maintain. These new implementations to our electrical system were in attempts to optimize and improve on what was learned from Cornell Collatrix. A comprehensive guide to our electrical system assembly can be found in the Contribution page, in the bioreactor section.
Future plans for the electrical system involve the transfer of the breadboard wiring onto a perforated board. This soldered connection is more secure and reliable as compared to our existing breadboard and would ensure that our system is solid and could be transportable. Ideally, this would evolve into a custom PCB system that would truly solidify our wiring.
[IMG]
[CAPTION] Figure 9: Second iteration of the bioreactor from Cornell Collatrix 2021
Overall, the structure of the bioreactor is similar to that of Cornell Collatrix. Notable changes include the addition of an output in the lid of the bioreactor that allows easy access for pipette to harvest grown cells. When not in use, this output is closed with a plug as seen on the right green lid in figure 9. Additionally, taking note of our previous bioreactor, the base housing (pink lid) can be seen positioned farthest away from the electrical box. An improvement to this base system would be the dual motor system installed on the pink lid. By consolidating two base containers to just one eliminates added risk as well as optimizes the number of motor drivers necessary for the electrical system.
[IMG]
[CAPTION] Figure 10: Completed bioreactor system
[IMG]
[CAPTION] Figure 11: Completed bioreactor electrical circuit schematic
Software
Similarly to the hardware, we inherited the software for the bioreactor from Cornell’s 2021 iGEM project, Collatrix. The code controls the major components for bacterial growth, such as pH, O2 concentration, temperature, and feed. With the aid of an Arduino, the native packages from the sensors that we utilized were installed and used to monitor these levels. La Chatelier’s principle will be applied in the Arduino such that when either pH, O2 concentration, or temperature are not at the optimal level, this would trigger a motor to input base, O2 bubbles, or adjust the sous vide machine to counteract the change to reestablish equilibrium.
| Conditions
| pH
| O2 Concentration
| Temperature
| Change
| drop
| rise
| drop
| rise
| drop
| rise
| Effect
| Input base
| N/A
| O2 bubbles
| N/A
| Sous vide machine
Table 1: Maintenance of optimum condition in the bioreactor
The feed of the system is monitored differently and has to be modeled as the feed has to be supplied accordingly to the bacteria growth rate. It is necessary that the feed for the bacteria also increases exponentially to maintain optimum equilibrium between the feed and the bacteria. With a stepwise feed cycle, we are able to mimic an exponential growth curve by inputting increased amounts of feed at a set time interval, always maintaining more feed than the bacteria need. This implementation allows us to always have excess feed, minimizing the possibility of feed being a limiting factor, therefore resulting in better growth. An excess supply of feed also optimizes process time by minimizing the amount of calculation necessary for the Arduino to perform in the loop.
##### Testing
To test the bioreactor, it was set up in our lab space and tested in comparison to a shaker flask culture. This test was meant to compare growth in both environments. Since our reactor was optimized for pH, oxygen, and feed to provide a better growth environment, we expected to see greater growth in the reactor versus the shaker flask.
During set up, one of the mason jars for the reactor cracked. Thus, we had to continue the testing with only one jar.
[IMG]
[CAPTION] Figure 12: Cracked mason jar that was meant to be used in the bioreactor initial setup.
Figure 13: Video of final bioreactor up and running in the lab
The reactor was set up with 1000 mL of LB broth, 1000 uL chloramphenicol solution, and inoculated to a starting OD of 0.04 with E. coli DH5ɑ that was transformed with the asPink chromoprotein. Though this was not our fusion protein, we wanted to observe growth that best reflected the transformed cells we would be using for the final product, so we decided the transformed pink colonies would be a better model to test with than un-transformed cells. Sodium hydroxide at pH 11 was used as a base to control for pH. The reactor was temperature controlled in a water bath at 37°C.
The shaker flask was set up with 60 mL of LB broth, 60 uL chloramphenicol solution, and inoculated to a starting OD of 0.04 using the same cells as the reactor. The flask was temperature controlled in a shaking incubator, shaking at 150 rpm. Due to the size of our incubator, we could not go higher than 150 rpm or the flask would tip and spill.
Both the reactor and flask were left to run for 40 hours. Samples were taken at 8 hour intervals for both. At first we began with single aliquots, but starting from hour 24 we took three aliquots so we could obtain average OD values in case of data outliers. Between hours 8 and 16 of the reactor, the tape we used to fasten some tubing had fallen off and we did not have extra to use to refasten them. This was interfering with the impeller as the tubing and wires were becoming tangled without being fastened by tape. Thus, the reactor was left for another 8 hours without stirring or oxygen control to avoid overflowing, but was maintained at 37°C. To maintain consistency, the shaker flask was also removed from shaking and kept at 37°C.
Figure 14 below shows the average OD600 readings for the 40 hour period, with error bars depicting the standard deviation. Both setups showed relative stagnation until between 32 to 40 hours, upon which cell density increased greatly. Based on this data, the flask exhibited a greater rate of growth at later times compared to the bioreactor, which was not what we expected.
[IMG]
[CAPTION] Figure 14: Bioreactor vs. Flask growth experiment over a 40 hour period to compare cell density over time.
Our team came up with several reasons for this observed pattern:
- Growth rate lowered between 8 and 16 hours due to lack of rotation/spinning
- Our transformed cells have typically taken longer than usual (i.e. compared to wild type E. coli DH5ɑ) to grow and exhibit any color, which suggests why the cell density did not increase until later times
- Feed was only periodically pumped into the reactor, and might not have been done so often enough to refresh the cultures
Another run of this experiment will be conducted to gain more data, especially since the standard deviations at later times are so large. Some fixes will also need to be made to the reactor, such as finding a more secure way to fasten tubing, editing the time between pumping feed, and ensuring pH adjustment is operating as intended. With these adjustments, we still hypothesize that the bioreactor will exhibit better growth than the flask.
## Sources
[1] “Hardware.” 2021 iGEM Team:Cornell, 2021, https://2021.igem.org/Team:Cornell/Hardware
[2] Kropp, Christina & Massai, Diana & Zweigerdt, Robert. (2016). Progress and Challenges in Large-Scale Expansion of Human Pluripotent Stem Cells. Process Biochemistry. 59. 10.1016/j.procbio.2016.09.032.
## 3D Printer
The major hardware component of this project is the development of a biocompatible hydrogel 3D bioprinter. We will be accomplishing this through the modification of a 3D bioprinter to become compatible with hydrogel extrusion. Our team’s 3D printer design took inspiration from various sources, such as Professor Joshi’s 3D bioprinter, the TU Delft 2015 iGEM project, as well as guidance from their advisor, Professor Anne Meyer. Our 3D bioprinter shares some design similarities with the previously mentioned 3D printer projects, such as using premade hydrogels and printing through a modified traditional 3D printer, both of which help the development time and reliability of our printer. Curing and mixing hydrogels while printing can cause significant issues with final print quality, and add additional complexity to the print head, thus modifying a premade printer helps in saving time in the development stages, as well as increases the reliability of the print (tested parts and compatibility with traditional software).
The primary improvements made over these other designs include the use of a rack and pinion system combined with a custom-designed 3D printer head to feed hydrogels out of a syringe cartridge onto the print surface. This change allowed our team to use the built-in motor that came with the printer to drive the extrusion of hydrogels through a larger syringe, thus eliminating the need to code a new solution or use external computers (such as Arduino) to print the hydrogels, as well as enabling us to use larger syringe cartridges. The other design improvement, the use of a custom printed head, enabled our team to more quickly and cost-effectively change and improve our print output. By using a custom 3D printed head, we were able to ensure that our syringe print head could easily and reliably pair with the existing framework of the printer without needing to make major modifications, such as drilling holes or removing more parts than necessary (both of which would compromise printer functionality).
Cycle 1
Our base printer is a Makerbot Replicator 2, which will be altered in 2 primary ways: the adjustment of the print head, and the creation of a hydrogel reservoir to replace the traditional plastic extrusion roll.
[IMG]
[CAPTION] Figure 1: 3D printer with new syringe-holder printer head
Most household 3D printers print plastic through the use of a heating element designed to melt the extruded material, and quickly cool and resolidify in layers. Heating elements can heat the plastic to over 200 degrees Celsius. Temperatures this extreme would cause damage to our hydrogel and kill live bacteria in the hydrogel (thus eliminating any CO2 uptake capabilities of our art) [1, 3]. In order to avoid this, we will be removing the heating elements from the printing head of the Replicator. The removal of the heating element, which also serves as the extrusion nozzle, will then be replaced with a custom-designed hydrogel extrusion head. The extrusion head will feature a motor connected to a syringe needle through a series of gears, which will serve as the new extrusion head for our 3D printer. The exact diameter and extrusion rate will be determined through testing of model hydrogels [see extrusion testing for more information]. In order to house the needle and syringe, we will design a new 3D printed part to replace the carriage of the Replicator. Since the specialized part will be 3D printed, it is designed based on the existing carriage assembly, and will thus be easily interchangeable with the existing carriage, requiring fewer hardware and software changes to make the printer compatible.
[IMG]
[CAPTION] Figure 2: Sketches for Syringe-Holder Printer Head
An initial 3D printed design was created, however it was found to not fit using the originally determined CAD dimensions (specifically the base dimensions were off by 1 mm, and the syringe holder slot was not properly fitted to allow the syringe to slide in), and as such a second version was printed using the modified dimensions. The modified extrusion head was mated with the syringe, and then installed onto the print head (in place of the heated element) to be used for testing and further printing.
[IMG]
[CAPTION] Figure 3: Image of Syringe-Holder Printer Head issues
In order to feed the hydrogel to our extrusion head, we will be creating a new reservoir for our hydrogels, which will help serve as the “ink cartridge” for our printer. Initially, there are 2 proposed designs for the reservoir. The first would be to use a syringe preloaded with hydrogels, which is attached directly to a linear stepper motor that drives the extrusion of the hydrogels [1]. This design would utilize a similar hydrogel extrusion model to the Collatrix hydrogel extrusion form last year, with adjustments made to accommodate for the extrusion through tubing into the printer extrusion head. This design is limited by the size of the syringe, where each ink cartridge can only hold as much as the syringe volume, and would then need to be replaced. The second design would use a small tank, containing a larger volume of hydrogel, with tubing fed through a peristaltic pump into the printer tubing. In this design, the extrusion rate is directly proportional to the pump rate, and the use of a larger reservoir means that fewer ink refills are necessary, however, the use of a peristaltic pump for hydrogel extrusion may lead to complications with 3D printing. After testing and feedback from interviews our team decided to move forward with the syringe model as 20mL syringes hold enough ink for several development scale prints, and can be quickly swapped out to test different inks without needing to clear transport tubes as required with a pump based design.
Cycle 2
In order to further incorporate the new printing head with the old printer, a geared syringe holding block was built that could integrate with the previous motor used for plastic extrusion. This allows the former wiring and code used to run the printer to be seamlessly transferred to the syringe based system, removing the need for a new software package to be designed and installed. The initial printed model for this head was off in several dimensions, as tolerances between the new part and the existing hardware had to be tested. The first model was also able to be used and reconfigured in order to determine what modifications would make the system run smoothly.
[IMG]
[CAPTION] Figure 4: First 3D printed gears and print head
A new model was designed in an integrated assembly in order to test gear interactions and syringe motions.
[IMG]
[CAPTION] Figure 5: CAD Model of the new print head
[IMG]
[CAPTION] Figure 6: Disassembled printer head showing individual parts
Figure 7: Extrusion test video
After installation, the new design worked and was able to extrude prepared hydrogels using existing printer gcode. However, the extrusion rate used for the plastic based system pushed a much smaller diameter feed using a gear with a smaller diameter, two factors that both contributed to an extrusion rate that was initially nearly two orders of magnitude too high. After reducing this speed, the mechanisms behind the printer head were safe from self destruction and extrusion testing could begin.
[IMG]
[CAPTION] Figure 8: Video camera connected to printer
Modifications were made to the syringe diameter, nozzle, and racking system in order to improve the print quality. A video camera was also added to the printer in order to record video and allow for a livestream to be connected. Achieving a quality print required honing in on sufficient balance between print speed and volume, nozzle geometry, and ink composition. The bacterial hydrogel mimetic used was gelatin, which presented issues due to forming clumps and forming weak bonds after printing in its hydrated state. With the thixotropic bacterially produced hydrogels, they will have the ability to reconnect and form strong bridges and 3D structures.
Figure 9: Printing iGEM logo
[IMG]
[CAPTION] Figure 10: Gelatin iGEM logo printed on plexiglass
## Handheld Bioprinter
The purpose of creating a handheld bioprinter was to provide bioartists with a user friendly and portable device as well as a cheaper alternative to a large 3D printer. Previous IGEM teams such as Warwick and LMU-Munich have developed 3D bioprinters to aid in tissue and/or bone repair, yet none of them have created a handheld device.
This handheld bio printer adopted its hardware from both Cornell Collatrix’s gradient machine and previous sources that had a similar idea. [1,3] As such, it functions using two 28BYJ 48 stepper motors driving syringe pushers to initiate extrusion of the hydrogel. This, coupled with a simple reloading mechanism that allows the syringes to be replaced, creates a novel and user friendly device. This is enclosed within a casing that holds up to two syringes to allow for extrusion of different colors. A push button was incorporated to alternate between which syringe is extruding.
[IMG]
[CAPTION] Figure 1: CAD Model of Handheld Bioprinter
Bioprinter Casing: When designing the bioprinter casing, we prioritized minimizing space while still being able to hold two syringes. The casing includes a base that protrudes from the back to maintain syringe pusher position and prevent rotation along with the threaded rod. The syringe pusher will move along the base to initiate extrusion.
[IMG]
[CAPTION] Figure 2: CAD Model of Syringe Pusher
[IMG]
[CAPTION] Figure 3: Sketches for Bioprinter Casing
[IMG]
[CAPTION] Figure 4: First Iteration of Casing
Testing was conducted using gelatin hydrogel. We tested extrusion by determining if it could extrude the hydrogel smoothly and at a consistent rate throughout the nozzle. Speed could be adjusted through the code by changing the rate of revolution of the stepper motor. Tested at the fastest setting of 15 rpm, extrusion rate was 0.882 mm/s. However, this also revealed inconsistencies in printing. To fix this, we added a 1 mml syringe tip and tested. Testing failed due to pressure buildup and we concluded it was more effective to maintain the 3 mm syringe tips. Extrusion can be seen here:
Figure 5: Video of Extrusion
Accuracy and precision of the bioprinter was tested by printing sketches of sample bioart and comparing expected results to printed products. From this, resolution, precision, and accuracy were determined through user testing seen in Figure 6.
Figure 6: Video of Smiley Face Drawing
In the above video, one can see that in the middle of the printing process, the hydrogel pauses for a second or two before continuing to print. This is due to the fact that when filling the syringe, there were air bubbles that did not allow for further movement of the gel. All in all, the smiley face drawing showed us that our resolution and accuracy can improve with further iterations of the handheld device, in which we can shrink the syringe size for precision and use a different type of hydrogel that does not contain gelatin.
Reloading
When considering reloading, our initial idea was to use the counterclockwise rotation of the stepper motors and threaded rods to move the syringe pusher upstream of the base. The syringe pusher was redesigned to reload the syringe as it was moved up the base.
[IMG]
[CAPTION] Figure 7: Syringe Pusher for Reloading
This mechanism failed since the stepper motor’s maximum speed of 15 rpm was slow and ineffective for reloading. Thus, we came up with an alternative solution by redesigning the casing to include a cover attached to a friction freeze hinge and a sliding rod to fixate the cover when closed. This would allow users to open the casing and remove syringes when printing finished. Second iteration of the casing can be seen here:
Figure 8: Second Iteration of Casing
As seen in Figure 8, the new casing for the device will contain a hinge. This iteration of our design will be implemented as our next steps to further providing user-friendly aspects.
## Sources
[1] Ying, G., Manríquez, J., Wu, D., Zhang, J., Jiang, N., Maharjan, S., Medina, D. H. H., & Zhang, Y. S. (2020, August 21). An open-source handheld extruder loaded with pore-forming bioink for in situ wound dressing. Materials Today Bio. Retrieved September 30, 2022, from https://www.sciencedirect.com/science/article/pii/S259000642030034X
[2] Duraj-Thatte, A. M., Manjula-Basavanna, A., Rutledge, J., Xia, J., Hassan, S., Sourlis, A., Rubio, A. G., Lesha, A., Zenkl, M., Kan, A., Weitz, D. A., Zhang, Y. S., & Joshi, N. S. (2021, November 23). Programmable microbial ink for 3D printing of living materials produced from genetically engineered protein nanofibers. Nature News. Retrieved September 30, 2022, from https://www.nature.com/articles/s41467-021-26791-x
[3] Hakimi, N., Cheng, R., Leng, L., Sotoudehfar, M., Ba, P. Q., Bakhtyar, N., Amini-Nik, S., Jeschke, M. G., & Günther, A. (2018, April 11). Handheld skin printer: In situ formation of planar biomaterials and tissues. Lab on a Chip. Retrieved October 6, 2022, from https://pubs.rsc.org/en/content/articlelanding/2018/lc/c7lc01236e
[4] O'Connell C;Ren J;Pope L;Li Y;Mohandas A;Blanchard R;Duchi S;Onofrillo C; (no date) Characterizing Bioinks for extrusion bioprinting: Printability and rheology, Methods in molecular biology (Clifton, N.J.). U.S. National Library of Medicine. Available at: https://pubmed.ncbi.nlm.nih.gov/32207108/ (Accessed: October 6, 2022).
