[IMG]
Objectives
Construction
Assemble
Cost
Demonstration
Improvement
[IMG]
# . Hardware .
## 1. Objectives
Co-culture is a powerful tool in synthetic biology with high challenges. It brings the possibility of producing more complex and valuable biobased products but also the difficulty of monitoring and controlling the whole bioprocess. This year, our team tried to generate Bacterial Celluloses (BCs) / Hyaluronic Acid (HA) crosslink compounds by co-culturing engineered E. coli Nissle 1917 and E. coli BL21(DE3) to improve the soil drought problem. With the pre-selection of the BC: HA ratio in the compounds with the best water retention capability, we want to create a continuous fermentation system to produce that as the final goal. Thus, our hardware, the FermentX (Fig. 1), is proposed with the full consideration of scientific research, feedback from farmers who are the end users of BC/HA cross-link compounds, and future business potential, not only for solving the soil drought problem but also to enhance the co-culture research with automation in the synthetic biology area.
[IMG]
Fig. 1 The FermentX for co-culture
## 2. Construction
The FermentX can be split into the following parts (Fig. 2): the Bio-Reactor is the central place for co-culture, the Controller keeps the whole device running well, and six blue cap bottles. All the containers (one Bio-Reactor and six blue cap bottles) are equipped with connectors for easy connection. The connection between different containers and pumps is completed by silicone tubes. The contents of six blue cap bottles are listed as follows: acid and base for pH balance for the whole system, two different kinds of antibiotics to adjust the population ratio of two co-culture bacteria (see more in Design and Result), feedings for the primary nutrients used in the further bioprocess, and collected product/waste.
[IMG]
Fig. 2 Different parts in FermentX
The Controller, the heart of the FermentX, is the most complex part of the FermentX. It ensures that suitable pH, temperature, nutrients, and operation signals the model decides can be maintained and deployed to the Bio-Reactor quickly and correctly. The Controller can be divided into three parts (Fig. 3).
[IMG]
Fig. 3 The structure of Controller
The top parts of the Controller have many chips and pumps (Fig. 4), which may need more lifecycle and be replaced frequently. The principal elements of the Controller are convenient for them to be repaired and examined here. There are three kinds of pumps here: single-direction liquid transport in/out BioReactor, liquid transport in circle for OD/RFP/GFP detection, and air pumps. The control of single-direction fluid transport in/out of BioReactor will influence the dilution rate of the system and the concentration of different antibiotics, which will affect the population of different bacteria and the ratio of product compounds. While five sorts of chips are placed to regulate the seven liquid pumps, collect pH and temperature data, control the heater, and control the fermentation process. One thing that needs to be stressed here is that for the wild used (like in the farm), ESP-32 for fermentation process control is required. The AP-STA mode of the ESP-series chip will go across the difficulty of network loss. The breadboard is recommended to be used to connect different chips together here.
[IMG]
Fig. 4 The top part of Controller
In the middle parts of the Controller lay three light-density detectors for OD/RFP/GFP detection, which are compatible with the corresponding LED and filter (Fig. 5). The main part of the detectors is manufactories using 3D-printed technology. Multi LEDs work well here when the culture bacteria is in the high density. The light-density data is collected using scan mode: the PWM is used to control the light density of LEDs from high to low to avoid the LOD (Limit of Detection) problem of the light density sensor when the single light density of LEDs is employed. In comparison, the bottom part of the Controller is the socket for the power supply. Behind assembling and installing the entire device, the box is an optional choice if you want to have a portable one by gathering them together (Fig. 1). Or you can place it in the lab as you wish (Fig. 2).
[IMG]
Fig. 5 The structure of light-density sensors
The whole device needs to be assembled physically, but the code for the ESP-32 in the middle parts of the Controller is also required. There are two ESP-32s, one for fermentation control and the other for the OD/RFP/GFP monitor. The ESP-32 will be the first initial, and then ask the online database (powered by Flask) for the running project information, then deploy the operation, such as calibration, fermentation or measurement. For the fermentation control, coroutine technology is required to control the pumps for each run interval set to 5s. Then, the sensor data of the Bio-Reactor (pH, temperature, and pump information, including real-time speed and additional volume) will be updated to the database for future control (Fig. 6).
[IMG]
Fig. 6 The control schedule of ESP-32
Both of ESP-32 are coded using the MicroPython. In the beginning, the Python environment of your computer and Thonny software is required. First, download the newest version of Micropython, a .bin file (marked as YOU_FILES.bin). Then connect the ESP-32 to the computer by the USB cable and create the MicroPython environment to the ESP-32 using the following command "esptool.py --chip esp32 --port COM[?] erase_flash" and "esptool.py --chip esp32 --port COM[?] --baud 460800 write_flash -z 0x1000 YOU_FILES.bin" (Windows). The COM[?] refer to the device number, which can be found in the device management (Fig. 7).
[IMG]
Fig. 7 COM[?] in the the device management
Finally, choose the right COM number in the Thonny software (Fig. 8a) and, open the boot.py in your new ESP-32 device (Fig. 8c), copy the code in software repo to the boot.py (Fig. 8d). The same operation should be performed twice for both fermentation control ESP-32 and the OD/RFP/GFP monitor one.
[IMG]
Fig. 8 Deply the code to ESP-32 using software Thonny
Thus, the construction of the FermentX is finished. Let's begin our exploration of the co-culture world with our Software!
## 3. Assemble
Here, we provided fully assembled Fusion 360 files of our FermentX for use. Our hardware can be created using different materials and technology, such as acrylic board, PLA (FDM 3D printed method), and UV resin (SLA 3D printed method). The full assemble video and more files is available on our Software repo!
## 4. Cost
We calculated the total cost of our construction, which is 168.49 dollars. Compared to the commercial Bio-Reactor, the FermentX has excellent advantages over it.
Table 1 Here is the cost of FermentX
| Product
| Quantity
| Total Price (Dollars)
| bioreactor
| 1
| 19.88
| blue cap bottle
| 6
| 20.5
| caps
| 10
| 19.74
| peristaltic pump
| 7
| 15.48
| rubber tubes
| 2
| 1.41
| magnetic stir bar
| 1
| 19.88
| magnetic mixer
| 1
| 16.52
| heater
| 1
| 5.6
| filter
| 2
| 11.2
| LED
| 6
| 6.22
| light density sensor
| 2
| 0.85
| air pump
| 1
| 5.32
| MOSFET Relay
| 8
| 4.63
| Dupont Wire
| 8
| 2.76
| ESP-32
| 2
| 4.03
| power supply
| 9
| 15.54
| charger
| 1
| 1.11
| power strip
| 1
| 2.56
| acrylic board
| 5
| 7.7
| clear acrylic corner brace
| 40
| 2.52
| plastic box
| 1
| 3.63
## 5. Demonstration
### 5.1 Manufacture
We created two hardware versions, including the desktop and the portable, and one demo. With the timeline, more and more different part is integrated into the whole device, making it a more and more robust one for co-culture research (Fig. 9).
[IMG]
Fig. 9 The Development of our FermentX
We also test the functionality by culturing the bacteria in the early demo stage. The turbidity of the culture medium indicates the growth of bacteria (Fig. 10).
[IMG]
Fig. 10 Culturing experiments in the early demo stage
The stable veriosn of our FermentX can achieve high density culutre of E. coli (Fig. 11).
[IMG]
Fig. 11 Culturing experiments in the early demo stage
### 5.2 Temperature Control
Temperature is vital for bacterial growth and production, and the typical temperature is 37 ℃ when fermentation. In our hardware, the PID algorithm controls the heater to maintain the temperature in a certain value coupling with the temperature sensor. After tuning the PID parameters, we achieved a fluctuation of 0.5 ℃ in temperature control (Fig. 12).
[IMG]
Fig. 12 Temperature Control in the Fermentation Process
### 5.3 pH Control
The suitable pH range is 6.5 to 7.5 for E. coli, and our device matin the pH = 7.0 by adding the base with the help of the PID algorithm (Fig. 13).
[IMG]
Fig. 13 pH Control in the Fermentation Process
### 5.4 The production of BC and HA
First, the hyaluronic acid fermentation produced by the engineered strain was carried out in the hardware with a 600 mL working volume. As shown in Fig. 14a, the max value of biomass (OD600) and hyaluronic acid concentration reached 16.91 and 782 mg/L (Fig. 14a), respectively. The biomass is 9.4-fold higher than that in the shake flask, while hyaluronic acid concentration is 4.3-fold higher than that in the shake flask. At the same time, the substrate (glucose) can be exhausted at last. It demonstrated that the hardware is suitable for both bacteria growth and hyaluronic acid production.
[IMG]
Fig. 14 Hyaluronic acid production versus time in hardware. a The concentration of HA (mg/L) and biomass (OD600). b The glucose concentration, NaOH (mL), and Feeding (g). HA: hyaluronic acid.
The bacterial cellulose fermentation produced by the engineered strain was also carried out in the hardware with a 600 mL working volume. As shown in Fig. 15a, the max value of biomass (OD600) and bacterial cellulose concentration reached 16.93 and 603 mg/L (Fig. 15a), respectively. The biomass is 9.5-fold higher than that in the shake flask, while bacterial cellulose concentration is 6.28-fold higher than that in the shake flask. The total produce time reduced from 63 to 38 hours. It demonstrated that the hardware is suitable for both bacteria growth and bacterial cellulose production.
[IMG]
Fig. 15 Bacterial cellulose production versus time in hardware. a The concentration of BC (mg/L) and biomass (OD600). b The glucose concentration, NaOH (mL), and Feeding (g). BC: bacterial cellulose.
## 6. Improvement
Continuous improvement can make the hardware evolve to a satisfactory state. The feedback from farmers encourages us to make the device available offline, running with STA-AP mode of ESP-32, and also bringing the improvement of the cell phone APP. The research requirement from our teammate makes the API programming as possible, and the Controller device becomes more robust in this process. In the future, we want to move the whole machine to plug-in mode with the PCB version to make it more integrable.
[IMG]
Xiamen University
[IMG]
Xiamen University, Fujian, China
No.422, Siming South Road, Fujian, P.R.China 361005
[IMG]
follow us
[IMG]
contact us
[IMG]
igem_xmu@163.com
