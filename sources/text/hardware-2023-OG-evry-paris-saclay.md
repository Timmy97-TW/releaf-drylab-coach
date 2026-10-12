[IMG]
#### Table of Contents
- Introduction
- 96-well microplates lighter
- Lux Sensor
- Digital microfluidics lab automation platform
- References
# Hardware
During our project development, we identified the need for specialized hardware. We embraced this challenge by creating three distinct pieces of equipment:
- A 96-well microplates illuminator.
- A lux sensor.
- A lab automation platform utilizing digital microfluidics.
Our primary objective was not only to support our project but also to ensure our hardware designs were well-documented. This would allow easy replication and use by the broader community. Our commitment to this philosophy influenced our choices throughout, including the selection of components and the extensive use of 3D printed parts.
## 96-well microplates lighter
The primary challenge with microbial opsins in the past was their limited sensitivity to light. This meant that a significant number of photons had to interact with these proteins to trigger a conformational change. Only after this change could the ion channel within the opsin protein open, subsequently initiating a neural response. Consequently, using these proteins in genetic therapy required patients to wear specialized goggles [1]. These goggles amplified the light intensity of the surrounding environment, compensating for the low sensitivity of the opsins.
Our project's primary aim was to evolve these opsins. We wanted to create genetic variants that responded to light with enhanced sensitivity. In simpler terms, these evolved opsins would open their ion channels with far fewer photons. The end goal was to harness these proteins for genetic therapy, eliminating the need for patients to rely on light-boosting goggles. Another facet of our project was to shift the light absorption of these opsins. By evolving them to absorb light closer to the red end of the visible spectrum, instead of the blue, we intended to reduce potential cellular damage. This shift was crucial because blue light carries more energy and can be harmful to cells over prolonged exposure.
Given the optogenetic foundation of our project, a specific stage in the evolution process required us to shine light on the liquid cultures. This was to prompt the opsins to open their sodium (Na+) channels. We then detected this influx of sodium using a fluorescent dye. Once we successfully detected an opsin channel opening, our subsequent tests involvs illuminating our cultures with decreasing light intensities post-evolution. This step is critical in pinpointing which genetic variant underwent a mutation during random mutagenesis, granting it enhanced light sensitivity. In the later stages, we also aim at identifing variants that had evolved to absorb light of a shifted wavelength.
When we first envisioned the construction of the machine, our plan was to equip each well with a high-intensity LED (350mA / 2.85V). We designed a 3D-printed structure to hold the microplate above the apparatus, and incorporated cylindrical structures to ensure each well was illuminated independently by its respective LED (CREE LED High Brightness LED, XLamp XT-E, Cool White, 115 °, 130 lm, 5700 K, 1.5 A).
Our initial prototype had an array of white LEDs (Figure 1). The control system, powered by an Arduino microcontroller, could dim these LEDs collectively. We initially aimed to control each of the 96 LEDs in the matrix individually through multiplexing. By rapidly "scanning" each LED position between 200-9000Hz, we hoped the entire matrix would seem lit at once, given that the human eye can typically only detect up to about 100Hz. By varying the duration each LED was on, we also intended to control individual LED intensities. However, this method wasn't as effective as we'd hoped. Since only one LED lit up at a time, the maximum intensity of each LED was effectively reduced by a factor of 96.
Figure 1. The 96-well microplates illuminator with low speed multiplexing.
As a workaround, we tried a different tactic. By connecting a potentiometer to the Arduino's analog pins, we could set a value, which was then translated to a digital pin output for pulse width modulation (PWM). This PWM signal controlled a Mosfet transistor, modulating the current flow (Figure 2).
[IMG]
Figure 2. Pulse-width Modulation (PWM) to control light intensity / dimming.
During the prototype's development, a significant challenge was sourcing components that could handle the high voltage/current demands. Given the inherent low light sensitivity of microbial opsins (a challenge in their use for genetic therapy), the LED system we built required much higher currents than standard systems. For instance, while most LEDs might operate at 20mA, ours needed 350mA. This demanded a custom control system tailored to these high-power requirements.
The LED matrix was powered column-wise and consisted of 8 rows and 12 columns. This meant a total power requirement of 12 x 350mA = 4.2A and 8 x 2.82V = 22.56V. To power our setup, we used a transformer to convert standard 220V AC from a wall socket to 24V DC. Meanwhile, the microcontroller and other control components ran on 12V DC, which we derived using a buck converter.
[IMG]
Figure 3. Plate-lighter prototype 3 PCB, designed on KiCad.
Figure 4. Early plate lighter prototype 1 with a few installed elements & controls.
Given the high-power output of the LEDs, we noticed a significant amount of heat during our initial experiments. To address this, we modified our design to include heat sinks on the bottom of our board. To further assist with cooling, we added two Noctua 12V fans. The fans' speeds were regulated by a thermistor, which acted as a heat sensor.
This adjustment allowed the fans to respond to the system's temperature, ensuring the entire setup remained cool. This is crucial in keeping the bacterial cultures in the microwells at a consistent temperature, especially given the heat produced by the high-power LEDs.
Our first prototype worked well. With a screen displaying the light intensity, it was user-friendly. However, as we continued testing, we realized that dimming the entire LED matrix wasn't the most practical approach. While it was beneficial to expose 96 different samples to the same light intensity and then repeat the process with different intensities, we thought it'd be more efficient to conduct the entire evolution process on a single 96-well plate.
With that in mind, we developed a second prototype. This version had each column of the LED matrix set to a different light intensity. By adjusting the resistance using a potentiometer, users could tailor the light to their needs. This meant the first 8 wells on a plate could be exposed to high-intensity light, the next 8 to a slightly dimmer light, and so on. This setup created a light gradient across the 96-well plates, making it easier for us to conduct our experiments.
Our third prototype was even more advanced. We used red, green, and blue (RGB) LEDs. After testing various LEDs, we settled on a design with 36 columns, grouped in pairs of three for each color. By adjusting the current flowing through each column and color, we could achieve specific light wavelengths. We also added a diffuser between the LEDs and the plate's wells to ensure the colors blended smoothly. This allowed us to produce a white light by setting the R, G, and B intensities equally.
This advanced setup enabls us to evolve the opsins in two significant ways: first, we aimed for heightened light sensitivity, second, we wanted to shift the opsins' optimal absorption wavelength from the potentially harmful blue spectrum to the gentler red spectrum.
## Lux Sensor
Given the need to calibrate our light illuminator and to enhance the precision of our protocols, combined with a tight budget, we decided to create our own light intensity (lux) detector (Figure 5). This decision was particularly valuable for our optogenetic project, as acquiring a professional probe spectrometer wasn't feasible within our experimental timeline.
[IMG] Fusion 360 3D printed enclosure design
Figure 5. Lux Sensor, powered by a 9V replacable battery.
We detaile the construction steps and all the 3D CAD files and PCB design files, with the hope that it can serve as a useful guide for fellow optogenetic enthusiasts (Figure 6).
At the heart of our detector was an Arduino Nano microcontroller. This microcontroller communicated with a 1602 LCD screen via an I2C bus. While we tested various light sensors, the BH1750 stood out due to its ability to measure light intensity in lux ranging from 1 to 65535 lux. One of the perks of the BH1750 was its I2C-based control, necessitating just two wires for data transfer, similar to the screen. This design meant we could use a single wire to relay data for both the sensor and screen, along with a separate wire for the clock signal.
[IMG] Fusion 360 3D printed enclosure design
Figure 6. Lux Sensor: fusion 360 3D printed enclosure design.
The BH1750 offered six measurement modes, split between continuous and one-time readings (Figure 7). In the continuous mode, it constantly gauged light levels, whereas in one-time mode, it took a single reading and then entered a power-saving mode. We also had three precision options:
- Low Resolution: 4 lx precision over 16ms
- High Resolution: 1 lx precision over 120ms
- High Resolution Mode 2: 0.5 lx precision over 120ms
By default, we used the Continuous High-Resolution Mode.
[IMG] Fusion 360 3D printed enclosure design
Figure 7. Lux sensor demonstration.
A nice feature was that we could access the microcontroller via USB through its 3D-printed casing. This accessibility allowed us to tweak the code as needed to adjust various settings on-the-go.
## Digital microfluidics lab automation platform
In the course of our project, which utilized directed evolution, we recognized the potential advantages of automating certain processes. Specifically, the screening phase stood out. The rationale was straightforward: the more variants we could screen, the better our chances of identifying evolved opsins with enhanced properties.
However, as we delved deeper into the project, we realized that automation could be beneficial beyond just the screening phase. It could streamline various other protocols integral to our work. We initially considered high-throughput solutions, particularly robotic liquid handlers. But given our budget, performance needs, and tight timelines, we decided against it.
Our search then led us to microfluidics. Yet, traditional microfluidics seemed somewhat limiting for our needs, especially if we were aiming for comprehensive lab automation. That's when we stumbled upon digital microfluidics, underpinned by the electrowetting on dielectric (EWOD) principle.
To explain EWOD simply: imagine a droplet resting on a hydrophobic surface (Figure 8). When electrical charges build up in a dielectric layer underneath, the droplet's contact angle decreases. This happens because water, being bipolar molecules, are slightly attracted by the charges in the dielectric film acting as a capacitor, reorienting themself.
[IMG]
Figure 8. Electrowetting on dielectric (EWOD) / Digital Microfluidic principles.
#### Moving a Droplet Using EWOD
By applying voltage to an adjacent electrode while turning off the one beneath the droplet, the droplet starts stretching towards the activated electrode. Due to surface tension, it's eventually pulled in that direction entirely [2]. Harnessing this principle, we could control droplet movement, mix, and even split them with a smart electrode layout. Plus, we could add different components to the platform to create specialised functional zones, such as heating zones for PCR or cell incubation liquid culture, cold storage, magnetic zones for functionalized magnetic beads-based molecular purification, optical analysis for droplet content quantification comparable to a nanodrop apparatus, etc [3].
#### Our Vision for the Platform
In our project, we aimed to demonstrate that the envisioned platform could go beyond merely aiding the automation of directed evolution protocols. We believed that it held vast potential as an ultra-high-throughput, multifunctional lab automation system. With the rise of AI, we opted to make our hardware compatible with machine learning algorithms. Our goal was to highlight the potential future of AI-driven research platforms.
#### Platform Design and Capabilities
When it came to the platform's design and capabilities, we began by constructing a basic version (Figure 9). However, we didn't compromise on performance. While we utilized straightforward Mosfet transistor controls to power individual electrodes [4], our choice of polymers set our work apart. This combination enabled us to showcase a pioneering electrowetting platform in the iGEM competition. Looking at past projects, there has never been a digital microfluidic apparatus demonstration capable of moving droplets at such high speed with no missteps.
Figure 9. EWOD early proto video - 6 electrodes.
#### Dielectric Layer Importance
A crucial component of our design was the dielectric layer, made of a 12um ETFE film [5], a teflon analog. The thickness of this layer is critical for effective droplet movement; thinner layers typically yield better results [6].
#### Factors Influencing Liquid Droplet Speed
The speed of the liquid droplet is influenced by:
- The electrical constant and how thick the film is
- The electric force exerted on the electrode
- How hydrophobic the surface is
- The remaining static electricity of the particle
<4 id="electrowetting-principle" style="text-align: center; margin-top: 60px;">Electrowetting Details
The interaction among these factors is given by the principal formula for electrowetting:
[IMG] Fusion 360 3D printed enclosure design
In which θ signifies the contact angle when subjected to external electric potential V, θe represents the stable contact angle when V equals 0 V, ε0 stands for the vacuum's permittivity, εd is the dielectric layer's permittivity, γ defines the boundary tension between the droplet and the adjacent insulating liquid, and d refers to the dielectric layer's thickness [7].
As our goal was to demonstrate the potential of such technology, we aimed at developing an apparatus capable of multiple hundreds of simultaneous droplets displacements, potentially even thousands and beyond [8].
To that end, we required the need for a specialized piece of electronic components called a shift register, of the digital to parallel converter type; its goal is to take a digital signal as an input, and connected to high voltage, distribute that power to its many different parallel outputs [9].
After many testings, we decided to use the HV507 IC [10] for that task, here is how it works (Figures 10 and 11).
[IMG] HV507 shift register prototyping designs
Figure 10. HV507 Shift register principles.
[IMG] Electrowetting chip, 64 electrodes prototype
Figure 11. HV507 Shift register principles -2.
First we needed to prototype it’s behavior, then we integrated it to control 64 electrowetting electrodes (Figures 12 and 13).
[IMG] Functional module for electrowetting chip
Figure 12. HV507 Prototyping board.
[IMG] Electrowetting chip, 64 electrodes prototype
Figure 13. Electrowetting chip, 64 electrodes prototype.
Being very enthusiastic about our initial results on such a platform, we aim to develop it further and increase its scale in the following weeks and months to try to demonstrate its full potential as a generalist ultra high-throughput AI driven automation platform that could revolutionise synthetic biology and biotech as a whole.
## References
- [1] Häusser M. Optogenetics - The might of light. The New England Journal of Medicine (2021) 385: 1623–1626.
- [2] Abdelgawad M. Digital microfluidics: automating microscale liquid handling. IEEE Nanotechnology Magazine (2020) 14: 6–23.
- [3] Gach PC, Iwai K, Kim PW, Hillson NJ, Singh AK. Droplet microfluidics for synthetic biology. Lab on a Chip (2017) 17: 3388–3400.
- [4] Kothamachu VB, Zaini S, Muffatto F. Role of digital microfluidics in enabling access to laboratory automation and making biology programmable. SLAS Technology (2020) 25: 411–426.
- [5] Li J, Kim C-J “CJ.” Current commercialization status of electrowetting-on-dielectric (EWOD) digital microfluidics. Lab on a Chip (2020) 20: 1705–1712.
- [6] Nemr CR, Sklavounos AA, Wheeler AR, Kelley SO. Digital microfluidics as an emerging tool for bacterial protocols. SLAS Technology (2023) 28: 2–15.
- [7] Samiei E, Tabrizian M, Hoorfar M. A review of digital microfluidics as portable platforms for lab-on a-chip applications. Lab on a Chip (2016) 16: 2376–2396.
- [8] Xu X, Cai L, Liang S, Zhang Q, Lin S, Li M, Yang Q, Li C, Han Z, Yang C. Digital microfluidics for biological analysis and applications. Lab on a Chip (2023) 23: 1169–1191.
- [9] Yang Y-T, Ho T-Y. Conquering the tyranny of number with digital microfluidics. Frontiers in Chemistry (2021) 9: 676365.
- [10] Zhang Y, Liu Y. Advances in integrated digital microfluidic platforms for point-of-care diagnosis: a review. Sensors & Diagnostics (2022) 1: 648–672.
