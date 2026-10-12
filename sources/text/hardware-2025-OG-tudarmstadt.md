[IMG] Owl looking forward
Loading…
🚀
# Hardware
To make synthetic biology more accessible beyond Earth, our team designed and built two open-source hardware solutions:
- A Random Positioning Machine (RPM): a validated, low-cost simulator of microgravity and partial gravity.
- DIY bioreactor: a modular stirred-tank system designed for robust microbial cultivation.
Both devices were developed with the iGEM community in mind: easy to build, affordable to reproduce, and documented step-by-step so that any team can explore synthetic biology in new environments.
[IMG] hardware illustration
## Random positioning machine
### Motivation
Microgravity significantly alters cellular growth, mobility, gene expression and biofilm formation [1, 2]. As parabolic flights are too short for long biological experiments and launches are expensive and limited, random positioning machines (RPMs) are used to simulate microgravity for an extended time in the lab. However, as commercial RPMs cost around 8.000$-50.000$ [3] they are inaccessible to many student labs and iGEM teams. Luckily, there are existing DIY solutions [3]; We discovered two GitLab projects describing DIY RPMs with a protocol and STL-data for printing (by Wahab Kawafi and Core Electronics). However, neither was validated to prove real microgravity simulation, and most published RPMs are either too expensive or described in overly complex, inaccessible papers [4].
An RPM simulates microgravity by continuously reorienting the sample along two perpendicular axes. On Earth, the gravitational acceleration vector always points downwards with constant magnitude and direction. By contrast, in an RPM the orientation of the sample, relative to gravity, changes rapidly and uniformly in three dimensions. This causes the direction of the gravitational vector occurring within the sample to change so rapidly over time that the particles/cells do not drift away and the net effect approaches zero when averaged over many orientations.
1𝑇⁢∫𝑇0𝑅⁡(𝑡)⁢𝑔 𝑑⁢𝑡=0,𝑅⁡(𝑡):𝑅⁡𝑜⁢𝑡⁢𝑎⁢𝑡⁢𝑖⁢𝑜⁢𝑛 𝑚⁢𝑎⁢𝑡⁢𝑟⁢𝑖⁢𝑥
The assumptions are that (i) the reorientation is fast enough to prevent sedimentation, (ii) slow enough to avoid centrifugal or shear artifacts, (iii) all orientations are sampled uniformly. Under these conditions, the RPM provides a functional microgravity environment without eliminating gravity itself, but by neutralizing its directional bias. Under these conditions, the RPM mimics the loss of a fixed gravity direction, reducing sedimentation and convection in small samples. However, gravity’s magnitude is unchanged, so hydrostatic pressure and weight remain, thus the machine cannot reproduce the true freefall environment of orbital microgravity [3, 5].
[IMG] rpm-design-1
[IMG] rpm-design-2
[CAPTION] Figure 1. RPM design by Core Electronics (right) and by Wahab Kawafi / Dan Dragomirescu (left)
These reasons motivated us to create an affordable, open-source, and validated RPM with clear documentation, bridging the gap between theoretical design and practical, useful community hardware.
### Overview
Our team built a low-cost, open-source RPM to simulate microgravity on Earth. We also improved the code to simulate different gravity levels, such as Martian gravity (0.38 g), opening new opportunities for iGEM teams and researchers to explore biology under space-like conditions.
#### Key achievements:
- Dual axis and randomized rotation
- Affordable: 2% price of one of the cheapest commercially available RPM [3]
- Open-source CAD, electronics and code for reproducibility
- Modular sample holder for multiple experiments type
#### our CAD model
### Building
All resources are available at this site. The 3D model was created with Autodesk Fusion 360, and the design, originally inspired by the(YURI RPM) paved the way for our implementation. We designed a two-axis system, each independently driven by stepper motors and a sample holder with holes to attach different samples to the RPM.
DATE: 2025-08-28
REV: 1.0
APPROVED: IGEM TEAM
#### Materials and Tools
[TABLE] Table 1: Overview of all materials and tools needed for building the RPM
| Item
| Details
| PLA filament
| 1.75mm, around 450g
| CNC Shield
| V3.0
| GT2 Belt
| 220mm, 6mm width
| Stepper Drivers
| 2x A4988
| Stepper Motors
| 3 pcs (with mounting screws)
| Timing Pulleys
| 3 pcs, min. 20 Teeth
| Metal Rod
| 4mm radius, 24cm length
| Arduino
| Uno R3
| Power Supply
| 12V regulated Pecos ATX 350W
| Cables
| Assorted wiring
| Hex wrench
| 1.5 mm and 1/16 mm
The total cost of components is approximately 150-180€ , and the system can be assembled without prior engineering knowledge, as all necessary instructions and resources are provided.
##### RPM parts: Hover to see the name of the components
[IMG] CAD base with motor
[CAPTION] CAD base with motor
[IMG] CAD axis, sample holder and metal rod with motors
[CAPTION] CAD axis, sample holder and metal rod with motors
[IMG] Timing pulley
[CAPTION] Timing pulley
[IMG] Arduino Uno
[CAPTION] Arduino Uno
[IMG] CNC shield
[CAPTION] CNC shield
[IMG] Power supply: Pecos ATX-350W
[CAPTION] Power supply: Pecos ATX-350W
[IMG] Stepper driver: A4988
[CAPTION] Stepper driver: A4988
[IMG] GT2 Belt
[CAPTION] GT2 Belt
[IMG] finished RPM
[CAPTION] finished RPM
[IMG]
Notably, the system was designed and built by a biotechnologist, demonstrating that complex scientific tools can be created independently outside of traditional engineering disciplines. She made sure that the design is fully accessible and openly documented to ensure that the RPM can easily be replicated by others. The CAD models to download are at the bottom of the page
### Software
The stepper motors are controlled through a software–hardware communication system that ensures precise motion and synchronization. Commands are generated using the Universal G-code Sender, which transmits G-code instructions to the Arduino Uno via USB. The Arduino runs the GRBL firmware, responsible for interpreting these commands and translating them into motor movements (see Figure 2). This setup allows accurate and reproducible control of the RPM’s mechanical components. For that the Arduino is connected to a CNC shield, which drives the stepper motors via A4988 drivers as depicted in Figure 3. Detailed configuration steps and connection guidelines are described in here.
[IMG] rpm-work-flow
Figure 2: Overview of the hardware- software communication. Commands from the Universal G-code Sender are transmitted to the Arduino Uno, which runs the GRBL firmware library. The Arduino interprets the G-code and sends control signals to the RPM device.
[IMG] rpm-usage
Figure 3: Electronic connection of the RPM control system.
#### Calculating the rotor movements
To find out the optimal rotation pattern for simulating microgravity, we wrote a software pipeline in Python inspired by Wubshed [6]. It generates uniform orientation trajectories on the unit sphere and translates them into two-axis GRBL commands. The method is illustrated in Figure 4.
[IMG] Software simulation
[CAPTION] Figure 4. Simulation to generate rotation patterns for microgravity conditions: (A) Uniform orientations are generated on a unit sphere. (B) A constrained random walk connects nearby points smoothly, avoiding large angular jumps. (C) The resulting orientation path is analyzed to compute the effective gravity.
To calculate appropriate rotor movements in order to create simulated microgravity, first, random points are distributed uniformly on the sphere surface (Figure 4A) and connected by a constrained random walk (Figure 4B). The walk ensures consecutive orientations remain close in Euclidean distance, maintaining smooth, continuous rotation [6].
From this sequence of orientations, the effective gravity is computed as the time-averaged magnitude of the gravity vector in the sample frame, see Figure 4C. This allows verification that the motion converges toward microgravity.
Finally, the orientation path is converted into relative rotary instructions (G91 mode) for the Y and Z axes, with a defined feed rate. The output is a GRBL-compatible G-code program that can be streamed directly to the RPM.
##### Embedded PDF
## Validation
We didn’t just build the RPM: we proved it’s working!
### See how we measured with Phyphox
### Validation in silico of µg with an accelerometer
As written in the protocol with the usage of a mobile phone's IMU (lsm6dso from STMicro) and the app phyphox we were able to verify that the average effective gravity is in the range of microgravity, precisely between 0,028-0,070 g as depicted in Figure 5. By adjusting the motor steps per min (i.e. feedrate), it is also possible to modularly simulate different gravitational forces such as Martian gravity.
Figure 5: Averaged effective gravity during RPM operation with a programmed feed rate of 50 mm/min. Data was recorded by the LSM6DSOX sensor and downsampled (every 500th point was taken). Measurement of the acceleration started after 3s
Figure 6: Dependency of the measured average effective gravity on the squared feed rate F^2 during rotation. The data follows a linear trend consistent with theoretical relation. Measurement of the acceleration started after 3s and lasted 10 min for F100 and F50, otherwise 1 min.
Given the time series where acceleration is measured for three axes {𝑡𝑘,𝑎𝑥⁡(𝑡𝑘),𝑎𝑦⁡(𝑡𝑘),𝑎𝑧⁡(𝑡𝑘)}, at any time point, we can calculate the magnitude of the absolute acceleration to then calculate the normalized acceleration vector for each direction 𝑢𝑖⁡(𝑡𝑘).
‖𝐚‖⁢(𝑡𝑘)=√𝑎𝑥⁢(𝑡𝑘)2+𝑎𝑦⁢(𝑡𝑘)2+𝑎𝑧⁢(𝑡𝑘)2
𝑢𝑖⁡(𝑡𝑘)=𝑎𝑖⁡(𝑡𝑘)‖𝐚‖,𝑖∈{𝑥,𝑦,𝑧}
Since measurements are conducted on Earth, the effective gravity at any timepoint is still 1 g, but the average effective gravity over time tends toward µg.
𝑔eff⁡(𝑛)=√√ √ √ √⎷(1𝑛⁢𝑛∑𝑘=1𝑢𝑥⁡(𝑡𝑘))2+(1𝑛⁢𝑛∑𝑘=1𝑢𝑦⁡(𝑡𝑘))2+(1𝑛⁢𝑛∑𝑘=1𝑢𝑧⁡(𝑡𝑘))2
While exporting the file from Phyphox, choose CSV with the comma as the decimal separator (otherwise adjust the code).
import pandas as pd import numpy as np import matplotlib.pyplot as plt # Add file name here input_file = "" output_file = "simplified.csv" skip_step = 500 df = pd.read_csv(input_file, engine="python", sep=None, decimal=",") time_col = df.columns[0] b_col, c_col, d_col, e_col = df.columns[1:5] for col in [time_col, b_col, c_col, d_col, e_col]: df[col] = pd.to_numeric(df[col], errors="coerce") den = df[e_col].replace(0, np.nan) df['F'] = df[b_col] / den df['G'] = df[c_col] / den df['H'] = df[d_col] / den df['F_mean'] = df['F'].expanding().mean() df['G_mean'] = df['G'].expanding().mean() df['H_mean'] = df['H'].expanding().mean() df['RMS'] = np.sqrt(df['F_mean']**2 + df['G_mean']**2 + df['H_mean']**2) simplified_df = df[[time_col, 'RMS']].iloc[::skip_step] simplified_df.to_csv(output_file, index=False) print(f"Simplified data exported to: {output_file}") plt.figure(figsize=(12, 6)) plt.scatter(simplified_df[time_col], simplified_df['RMS'], s=30, label=f'Every {skip_step}th Point') plt.title("Averaged Effective Gravity Over Time") plt.xlabel("Time [s]") plt.ylabel("Averaged effective gravity (× g)") plt.legend() plt.grid(True) plt.show()
We firstly tried using Microsoft Excel to analyze acceleration data but output from phyphox is large such that it costs much computational power and thus we used python instead for plotting. Since not everyone is familiar with python and we want to be sure that even everyone even a school kids have the opportunity to validate their RPM, we created a simple web interface. You can upload your csv file and see how the average effective gravity over time changes and export a simplified csv file with average effective gravity over time.
This is really helpful to validate the RPM and made it possible that we found all the mechanical problems our prototype had in the beginning (see our engineering page)
#### Tool to plot and simplify acceleration data
### Upload
Drop Demo Data here or
active: F50.csv
### Demo-Data
Load example datasets from us by clicking: F stands for Feedrate in mm/min.
### average effective gravity (× g)
0.043
### sampling & export
Skip step
rendered points: 103 (from 1030)
### Dye Diffusion Test
t = 0 min
#### Baseline frame
Reference image before diffusion begins: the static probe is on the left, the rotated probe on the right.
Tip: Handle both probes under identical imaging conditions.
Inspired by NASA’s dye diffusion test [7], we aimed to demonstrate a simple and reproducible physical effect of the RPM that others could easily replicate. After testing several approaches, we settled on using a 0.5% agar solution solidified in a falcon tube, onto which 100 µL of resazurin-colored water was injected.
One tube was kept static, while the other was rotated in the RPM. After 20 minutes, differences became visible: In the static tube, the dye spread evenly, whereas in the rotating tube it remained concentrated. After 50 minutes, the static sample was fully diffused, while the rotating one still showed a distinct undyed region. Only after 100 minutes did both appear uniformly colored.
[IMG] Dye diffusion frame
t = 0 min
#### Discussion
To test whether this difference was noticeable, several team members, without prior knowledge of which tube had been rotated, were asked to identify the RPM sample. Everyone could correctly recognize it.
Because agar is easy to prepare and can even be combined with food coloring, this setup provides a reproducible and accessible demonstration of the RPM's effect. It can be carried out at home as a simple alternative if more advanced tools (like a smartphone for tracking diffusion) are not available.
Disclaimer: It can be challenging to distribute the colored water evenly at such small volumes, but this can be approximated at home using a simple Pasteur pipette and a toothpick.
### User insight and usage
On our university's Open Campus Day, the prototype of the RPM became a real attraction. Many children were curious what it was and eager to see its effects. As it was unfortunately not finished yet, we could just explain the concept and show how it rotates. Still they found it visually impressive and easy to understand. One 12 year-old even asked detailed questions about the Arduino system, the materials we used, and how the device functions, showing how the RPM can spark genuine curiosity about science and engineering at an early age.
During a visit to the 3D printer laboratory, I had the opportunity to meet Andreas Blaeser’s research group, cOSmicStrain, from the Technische Universität Darmstadt. The team is one of eight research groups participating in the upcoming Cellbox-45 missions, conducted in cooperation with the Deutsches Zentrum für Luft- und Raumfahrt (DLR).
The cOSmicStrain project investigates the influence of external mechanical forces on the differentiation and function of bone-forming cells under microgravity conditions. Prolonged exposure to microgravity disrupts the natural balance of bone remodeling, leading to increased bone loss comparable to age-related osteoporosis. Understanding these mechanisms is essential for developing countermeasures to support astronaut health during long-term space missions.
We demonstrated the Random Positioning Machine (RPM) to team members Eva Schätzlein and David Sipos, who expressed great interest in using it for ground-based experiments simulating microgravity. They provided several valuable technical remarks and suggestions for further optimization:
- The current RPM setup requires a continuous PC connection and is not yet fully autonomous for extended runs (~2 weeks).
- Improved cable routing or the integration of hollow-shaft motors could help prevent tangling.
- Depending on the experimental setup, sample positioning closer to the rotation center may yield more lower average microgravity results.
- Introducing adaptable mounting or clip systems could enhance compatibility with various sample formats, such as small glass vials or microtiter plates used in spaceflight experiments.
[IMG] Eva and David from the cOSmicStrain team
It is also worth noting that other exciting space-related research projects are being conducted nearby, such as the GSI Biophysics space experiment, further highlighting the region’s strong focus on space science and life sciences in microgravity.
We hope that our hardware expands the playground of synthetic biology by making it possible to go beyond Earth. For us, this project has been more than just building a tool. It has been a chance to explore other things. Turning an idea into something tangible and useful. In the process, we had fun experimenting, learning, and proving that innovation does not have to be limited by engineering expertise. Most importantly, we hope this work inspires others to explore, create, and dream bigger. To use the RPM to explore means that weren’t possible before because of the laboratory limitation. We envision the RPM evolving into a universal platform for space-inspired biology experiments making simulated gravity research accessible to every lab, from iGEM teams to classrooms and research institutions worldwide.
While our RPM is already affordable, open-source, and validated, we see several opportunities to make it even more powerful for the iGEM community:
- Integrated sensors: Embed accelerometers directly into the frame for real-time monitoring and validation.
- Vibration damping: Incorporate damping mechanisms for improved stability and accuracy, though this would increase build complexity.
- specific sample holders: Develop a snap-in system compatible with various formats such as microplates, Petri dishes, and flasks, instead of relying on a universal holder.
- Enhanced motors: Use higher-quality motors without copper cables to better withstand rotational forces during long experiments. Alternatively, slip rings could mitigate this issue but this would increase the cost and complexity.
### Download documentation
📦 Download 3D_print_RPM.zip ⚙️ G-code for Y and Z coordinates to simulate microgravity
##### Embedded PDF
## The Martian Bioreactor
Innovating a DIY stirred-tank bioreactor for robust perchlorate degradation on Mars.
#### Problem
Bioreactors are essential tools for growing and studying microorganisms, but in most cases, they come with a price tag of several thousand dollars. We built a low-cost stirred-tank bioreactor that is modular, easy to assemble, and equipped with core functions such as temperature control, stirring, and real-time monitoring.
### Overview
Building on the principles of accessibility and open-source design, we developed our bioreactor with a strong DIY ethos (Figure 7). The modularity of the bioreactor is based on a central tube, through which regulatory or sensory equipment can be passed without the need to drill and seal several holes in the lid of the bioreactor. It also as a mounting for all the equipment inside the bioreactor. Our comprehensive construction manual walks users through every step from sourcing affordable materials and assembling the components to programming the device, ensuring that anyone can build it.
[IMG] Bioreactor 1
[CAPTION] Figure 7: Schematic drawing of the bioreactor
### Parts
We developed a modular, low-cost bench-scale bioreactor made from readily available materials, designed to be easily expandable with sensors and equipment while serving as a hands-on learning tool for students. In designing our DIY bioreactor, we prioritized essential functions of conventional systems, incorporating a heating element for precise temperature control, a thermometer for continuous monitoring, a pH sensor for accurate pH measurement, and a magnetic stirrer to ensure nutrient distribution. We did not add any aeration system, because we would need anaerobic conditions for our organism to degrade perchlorate, but it would be possible to install one.
DATE: 2025-10-06
REV: 1.0
APPROVED: IGEM TEAM
#### DIY Bioreactor Parts List
[TABLE] Table 2: Parts used to build the DIY Bioreactor
| Bioreactor Part
| Price
| Glass vessel with metal lid
| 2€
| Big cable gland
| ~4€
| Small cable gland
| ~2€
| Aquarium heater
| ~17€
| Thermometer
| ~5€
| Small tube
| ~2€
| Zip ties
| ~1€
| Liquid pH Sensor for Arduino with BNC Electrode
| ~14€
| Arduino UNO Rev3 / Raspberry Pi 4B
| 29€
| Photodiode (BPW34)
| 0.6€
| Orange LED
| 0.1€
| LM358P Operational amplifiers
| 0.24€
| Resistors (330 Ω, 100 kΩ, 470 kΩ)
| 0.5€
| Capacitors (22 pF, 100 pF, 1 µF)
| 0.5€
| JOY-IT Display 2.6" 16×2 Characters I2C
| 5.5€
| ARCELI 16 Bit 4 Channel I2C ADC PGA Converter
| 5.99€
| Total Cost
| ~90€
1. Drill a hole into the vessel lid using a hole saw and a drill. The hole should be the right size for your big cable gland so that the threaded side fits through the lid.
[IMG] Bioreactor-plus-drill
[CAPTION] Use an electric drill and a hole saw to drill a hole into the lid of the container.
2. Unscrew the nut from the cable gland (A), insert the threaded side through the lid (B), and secure it with the nut (C).
[IMG] bioreactor-lid-plus-cable-gland
[CAPTION] Fit Cablegland through the hole in the lid and secure with the nut.
3. Take a piece of tube. The diameter should match the cable gland or the sensor equipment you want to use. The length of the tubing depends on the depth of the vessel. Secure the tube by tightening it with the cable gland.
[IMG] lid-plus-tubing
[CAPTION] Fit tubing through the cable gland and secure it.
4. Insert the desired sensory or regulatory equipment (in our case heating element, temperature sensor, pH sensor) equipment through the tubing so that it reaches inside the bioreactor.
[IMG] lid-with-sensors
[CAPTION] Insert desired sensory or regulatory equipment through the tubing.
5. Fix everything in place inside the bioreactor using zip ties.
[IMG] assembled-lid
[CAPTION] Secure every equipment on the tubing using zip ties.
6. Optional: To seal the tube, you can use different methods. The quickest and easiest is to fill the tubing with silicone to create an airtight seal (if necessary) and secure any cables running through it.
7. Your bioreactor is now assembled.
[IMG] assembled-bioreactor
[CAPTION] Assembled DIY-bioreactor
### Designing Individual Components of the DIY-bioreactor
In order to create an affordable and easily reproducible bioreactor, we integrated several sensors, which we assembled ourselves, alongside low-cost control and measurement devices such as an aquarium heater and a basic thermometer or a magnetic stirrer. Additionally, we experimented with a self developed solution for measuring optical density and pH-value, aiming to replace expensive commercial alternatives.
#### pH-Sensor
While commercial pH sensors are available, they may be costly or not fully compatible with our setup. By using a pH electrode with a microcontroller and a display, we can create a solution tailored to our specific reactor design and experimental needs. We calibrated the pH sensor using calibration solutions from our lab, and confirmed that it worked. In order to enable others to rebuild the pH-sensor, the Arduino code used to program the sensor is given below.
[IMG] assembled-ph-sensor
[CAPTION] Figure 8: Self-assembled pH-sensor
##### Arduino Code:
This code reads analog input from a pH sensor, smooths the signal, calculates pH from voltage, and displays it on an LCD screen.
#include // Set LCD address, number of columns and rows LiquidCrystal_I2C lcd(0x27, 16, 2); // Change 0x27 to your address // Define pH sensor pin #define pHpin A0 // Variables for calibration and smoothing float pHValue; float voltage; const int numReadings = 10; int readings[numReadings]; int readIndex = 0; int total = 0; int average = 0; void setup() { Serial.begin(9600); lcd.init(); lcd.backlight(); lcd.clear(); lcd.setCursor(0, 0); lcd.print("pH Meter"); lcd.setCursor(0, 1); lcd.print("Initializing..."); delay(2000); lcd.clear(); for (int thisReading = 0; thisReading < numReadings; thisReading++) { readings[thisReading] = 0; } } void loop() { // 1. Read and smooth the analog value total = total - readings[readIndex]; readings[readIndex] = analogRead(pHpin); total = total + readings[readIndex]; readIndex = (readIndex + 1) % numReadings; average = total / numReadings; // 2. Convert analog to voltage (for 5V Arduino) voltage = average * (5.0 / 1023.0); // 3. Convert voltage to pH value (adjust slope/intercept per calibration) pHValue = 7 + ((4.018 - voltage) / (0.174)); // Example calibration // 4. Display results lcd.setCursor(0, 0); lcd.print("pH: "); lcd.print(pHValue, 2); lcd.print(" "); lcd.setCursor(0, 1); lcd.print("Voltage: "); lcd.print(voltage, 3); lcd.print("V "); // 5. Debug via Serial Serial.print("Voltage: "); Serial.print(voltage, 3); Serial.print("V | pH: "); Serial.println(pHValue, 2); delay(1000); }
#### OD Measurement
To accurately monitor the cell density of Bacillus subtilis culture, we developed a DIY optical density (OD) sensor. It uses an orange LED (emission spectrum 590–625 nm) and a photodiode to measure the turbidity of the liquid culture. We successfully built a working circuit for the optical sensor, but could not test or integrate it into the bioreactor within the project timeframe.
[IMG] Assembled optical density sensor
[CAPTION] Figure 9: Self-assembled optical density (OD) sensor
DATE: 2025-10-02
REV: B2.0
APPROVED: IGEM TEAM
##### Wiring Steps
[TABLE] Table 3: DIY OD Sensor – Wiring Checklist
| Step
| Connection
| Component Pins
| Notes
| 1. Power and Ground Connections
| 1.1
| Main Power
| Raspberry Pi 3.3V → Breadboard VCC (+ rail)
| Power the breadboard’s positive rail.
| 1.2
| Ground
| Raspberry Pi GND → Breadboard GND (− rail)
| Establish common ground.
| 1.3
| ADS1115 Power
| ADS1115 VCC → Breadboard VCC
| Power the ADC.
| 1.4
| ADS1115 Ground
| ADS1115 GND → Breadboard GND
| 1.5
| LM358 Power
| LM358 Pin 8 (V+) → Breadboard VCC
| Positive supply.
| 1.6
| LM358 Ground
| LM358 Pin 4 (V−) → Breadboard GND
| Ground / negative supply.
| 2. Decoupling and I²C Connections
| 2.1
| LM358 Decoupling (High Freq)
| 0.1 µF between Pin 8 (V+) and Pin 4 (V−)
| Place close to the chip.
| 2.2
| Power Rail Decoupling (Low Freq)
| 10 µF between breadboard VCC and GND
| Near LM358 for stability.
| 2.3
| I²C SCL
| ADS1115 SCL → RPi SCL
| Typically GPIO 3 (Pin 5).
| 2.4
| I²C SDA
| ADS1115 SDA → RPi SDA
| Typically GPIO 2 (Pin 3).
| 3. Vref Buffer (Op Amp A)
| 3.1
| Resistor 1 (R1)
| 100 kΩ → Breadboard VCC
| One end to 3.3 V.
| 3.2
| Resistor 2 (R2)
| 100 kΩ → Breadboard GND
| One end to GND.
| 3.3
| Vref Node
| Free leads of R1 & R2 → common row
| Raw Vref ≈ 1.65 V.
| 3.4
| Buffer Input
| Raw Vref → LM358 Pin 3 (non-inv)
| Op Amp A input.
| 3.5
| Buffer Feedback
| LM358 Pin 1 → Pin 2
| Voltage follower; Pin 1 = buffered Vref.
| 4. Transimpedance Amplifier (Op Amp B)
| 4.1
| Photodiode Anode
| BPW34 Anode → Buffered Vref (LM358 Pin 1)
| Sets reference bias.
| 4.2
| Photodiode Cathode
| BPW34 Cathode → LM358 Pin 6 (inv)
| TIA summing node.
| 4.3
| TIA Reference
| Buffered Vref (Pin 1) → LM358 Pin 5 (non-inv)
| Baseline offset.
| 4.4
| Feedback Resistor (Rf)
| 100 kΩ between LM358 Pin 7 and Pin 6
| Vout = −IPD·Rf.
| 4.5
| Feedback Capacitor (Cf)
| 10–100 pF in parallel with Rf
| Stability/anti-noise.
| 4.6
| ADC Input
| LM358 Pin 7 → ADS1115 A0
| Final amplified signal.
#### Python code:
# Raspberry Pi + ADS1115 + BPW34 photodiode # pip3 install adafruit-circuitpython-ads1x15 import time import math import board import busio from adafruit_ads1x15.ads1115 import ADS1115, P0 from adafruit_ads1x15.analog_in import AnalogIn import RPi.GPIO as GPIO # ==== Hardware setup ==== LED_PIN = 17 # GPIO pin for LED control GPIO.setmode(GPIO.BCM) GPIO.setwarnings(False) GPIO.setup(LED_PIN, GPIO.OUT) #GPIO.output(LED_PIN, GPIO.HIGH) Power_PIN = 16 GPIO.setup(Power_PIN, GPIO.OUT) GPIO.output(Power_PIN, GPIO.HIGH) i2c = busio.I2C(board.SCL, board.SDA) ads = ADS1115(i2c) # ADS1115 instance chan = AnalogIn(ads, P0) # Photodiode amplifier connected to A0 # ==== Circuit parameters ==== Vref = 1.65 # Reference voltage at op-amp non-inverting input (measure with multimeter) Rf = 100e3 # Feedback resistor used in transimpedance amplifier # ==== Helper functions ==== def read_voltage(n=10, delay=0.01): """Average 'n' voltage samples from ADS1115""" s = 0.0 for _ in range(n): s += chan.voltage time.sleep(delay) return s / n def measure_photocurrent(): """Measure photocurrent with LED OFF and ON, subtract ambient""" # LED off baseline GPIO.output(LED_PIN, GPIO.LOW) time.sleep(1) v_off = read_voltage(10) # LED on signal GPIO.output(LED_PIN, GPIO.HIGH) time.sleep(1) v_on = read_voltage(10) print(f"DEBUG: v_off={v_off:.4f} V, v_on={v_on:.4f} V") # Return LED-only voltage difference v_signal = max(v_on - v_off, 1e-6) # avoid negatives or zero photocurrent = (Vref - v_signal) / Rf return v_signal, photocurrent def calc_OD(blank_current, sample_current): """Calculate OD using Beer-Lambert law""" if sample_current <= 0 or blank_current <= 0: return None return -math.log10(sample_current / blank_current) # ==== Calibration ==== print("Insert blank cuvette, LED will flash to calibrate...") time.sleep(2) _, photocurrent_blank = measure_photocurrent() print(f"Blank photocurrent = {photocurrent_blank*1e6:.3f} uA") # ==== Measurement loop ==== try: while True: v_sig, photocurrent = measure_photocurrent() od = calc_OD(photocurrent_blank, photocurrent) print(f"Signal {v_sig:.4f} V, I {photocurrent*1e6:.3f} uA, OD {od}") time.sleep(0.5) except KeyboardInterrupt: print("Exiting...") finally: GPIO.cleanup()
### Functionality test of the DIY-Bioreactor
#### Leak test:
In order to be able to use the Bioreactor in our lab everything needs to be airtight/watertight.
To test the watertightness of the bioreactor it was assembled and filled with water and underwent heavy shaking to see if the bioreactor would leak any water. The test was successful; no water was leaking out of the bioreactor.
To test airtightness, the bioreactor was assembled and submerged in a container filled with water while rotating the bioreactor to see if any air is leaking. The test was successful; no air was observed coming out of the submerged bioreactor.
#### Culture test:
In order to find out whether our DIY-bioreactor was able to support life we filled it with ~1.7 L LB Media and inoculated it with a 10 ml liquid culture of wild-type Bacillus subtilis 168. Growth progression was documented after 24 hours. Comparing the media after inoculation and 24 hours later, it is recognizable that it turned turbid after 24 hours caused by bacterial growth inside the bioreactor.
[IMG] culture-test
[CAPTION] Figure 10: Culture test. of the DIY-bioreactor The culture test was done using wild-type Bacillus subtilis 168. Growth of the culture was documented after inoculation (left picture) and after 24 hours of cultivation time (right picture). Cells were cultivated in LB media at 34°C.
### Future Improvements
We still see a lot of potential in this project and hope to help others by incorporating the DIY-bioreactor into their project. The following points remain open for further consideration:
- Identification of anaerobic conditions within the bioreactor
- We were not able to prove if we are able to hold constant anaerobic conditions inside the bioreactor.
- Design and construction of additional components/sensors that can be integrated
- As the design of the bioreactor is highly adaptable and DIY sensory or regulatory equipment is often more affordable, there is great potential to design and assemble additional DIY-sensor equipment for the bioreactor, e.g.:
- Oxygen sensors for quantitative oxygen measurements
- Aeration system to ensure adequate oxygen supply
- Revision of the material selected to build the bioreactor
- To keep the bioreactor affordable for other teams, we used only low-cost, widely available materials. These have limitations (e.g. not suited for autoclaving), so upgrading the design with more durable materials could be considered.
## References
[1] J. M. Acres, M. J. Youngapelian, and J. Nadeau, “The influence of spaceflight and simulated microgravity on bacterial motility and chemotaxis,” npj Microgravity, vol. 7, no. 1, p. 7, 2021, doi: 10.1038/s41526-021-00135-x.
[2] S. Bijlani, E. Stephens, N. K. Singh, K. Venkateswaran, and C. C. C. Wang, “Advances in space microbiology,” iScience, vol. 24, no. 5, p. 102395, 2021, doi: 10.1016/j.isci.2021.102395.
[3] T. Y. Kim, “Theoretical study on microgravity and hypogravity simulated by random positioning machine,” Acta astronautica, vol. 177, pp. 684–696, 2020, doi: 10.1016/j.actaastro.2020.07.047.
[4] D. Kim, Q. T. T. Nguyen, S. Lee, K.-M. Choi, E.-J. Lee, and J. Y. Park, “Customized small-sized clinostat using 3D printing and gas-permeable polydimethylsiloxane culture dish,” npj Microgravity, vol. 9, no. 1, p. 63, 2023, doi: 10.1038/s41526-023-00311-1.
[5] A. G. Borst and J. J. W. A. van Loon, “Technology and Developments for the Random Positioning Machine, RPM,” (in En;en), Microgravity Sci. Technol., vol. 21, no. 4, pp. 287–292, 2009, doi: 10.1007/s12217-008-9043-2.
[6] N. H. Wubshet et al., “Simulating microgravity using a random positioning machine for inducing cellular responses to mechanotransduction in human osteoblasts,” The Review of scientific instruments, vol. 92, no. 11, p. 114101, 2021, doi: 10.1063/5.0056366.
[7] Angie M. Diaz,Wenyan Li,Tesia Irwin, “Investigation into Space Effects on Biofilm Growth Using Simulated Microgravity,” [Online]. Available: https://ntrs.nasa.gov/api/citations/20220003678/downloads/ICES_215.pdf
