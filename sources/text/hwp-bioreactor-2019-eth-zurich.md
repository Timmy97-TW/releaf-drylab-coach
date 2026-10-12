[IMG]
# Team:ETH Zurich/core/hardware
## Contents
- 1 Hardware
- 1.1 General
- 1.2 Application: Recombineering Library Enrichment
- 1.2.1 Goal
- 1.2.2 Experiment Setup
- 1.2.3 Result
- 1.3 Hardware
- 1.4 Components
- 1.5 Software
- 1.5.1 HW
- 1.5.2 Drivers
- 1.5.3 Devices
- 1.5.4 Experiment Setup
- 1.6 Optical Density Measurement Device
- 1.6.1 Calibration
- 1.7 Temperature PID Controller
- 1.8 Hardware Assembly
- 1.9 Hardware Model Interaction
- 1.10 Improvements
- 1.10.1 Build
- 1.10.2 Dry Test
- 1.10.3 User Feedback
- 1.11 User Interaction
- 1.11.1 Command Interface
- 1.11.2 Experiment Setup
- 1.12 Decontamination
# Hardware
<nav>
<a class="nav-item nav-link active" id="nav-general-tab" data-toggle="tab" href="#nav-general" role="tab" aria-controls="nav-general" aria-selected="false">General</a> <a class="nav-item nav-link" id="nav-case-study-tab" data-toggle="tab" href="#nav-case-study" role="tab" aria-controls="nav-case-study" aria-selected="false">Application</a> <a class="nav-item nav-link" id="nav-hardware-tab" data-toggle="tab" href="#nav-hardware" role="tab" aria-controls="nav-hardware" aria-selected="false">Hardware</a> <a class="nav-item nav-link" id="nav-software-tab" data-toggle="tab" href="#nav-software" role="tab" aria-controls="nav-software" aria-selected="false">Software</a> <a class="nav-item nav-link" id="nav-od-tab" data-toggle="tab" href="#nav-od" role="tab" aria-controls="nav-od" aria-selected="false">Optical Density Sensor</a> <a class="nav-item nav-link" id="nav-temp-tab" data-toggle="tab" href="#nav-temp" role="tab" aria-controls="nav-temp" aria-selected="false">Temperature PID Control</a> <a class="nav-item nav-link" id="nav-build-tab" data-toggle="tab" href="#nav-build" role="tab" aria-controls="nav-build" aria-selected="false">Hardware Assembly</a> <a class="nav-item nav-link" id="nav-inter-tab" data-toggle="tab" href="#nav-inter" role="tab" aria-controls="nav-inter" aria-selected="false">Hardware Model Interaction</a> <a class="nav-item nav-link" id="nav-use-tab" data-toggle="tab" href="#nav-use" role="tab" aria-controls="nav-use" aria-selected="false">Usage</a> <a class="nav-item nav-link" id="nav-impr-tab" data-toggle="tab" href="#nav-impr" role="tab" aria-controls="nav-impr" aria-selected="false">Improvements</a> <a class="nav-item nav-link" id="nav-dec-tab" data-toggle="tab" href="#nav-dec" role="tab" aria-controls="nav-dec" aria-selected="false">Decontamination</a>
</nav>
## General
We designed and built a bioreactor to efficiently select phage variants with the highest infectivity towards the target host. The <a class="a-link" href="#nav-hardware/" onClick="showCorrectTab('nav-hardware/');">hardware</a> consists of three flasks, in which cell growth is regulated through <a class="a-link" href="#nav-temp/" onClick="showCorrectTab('nav-temp/');">temperature control</a>, influx/outflux control and custom <a class="a-link" href="#nav-od/" onClick="showCorrectTab('nav-od/');">OD sensors</a>. This enables the cultivation of bacteria at specific, constant OD profiles. Real-time data from ongoing experiments can be fed into custom controllers and combined with a <a class="a-link" href="#nav-inter/" onClick="showCorrectTab('nav-inter/');">model</a> to adjust the hardware control values by using the <a class="a-link" href="#nav-software/" onClick="showCorrectTab('nav-software/');">hardware control software</a>. User-friendly software allows the definition of new experimental setups with custom parameters and monitoring mechanisms. Furthermore, the reactor has been designed for effective <a class="a-link" href="#nav-dec/" onClick="showCorrectTab('nav-dec/');">decontamination</a> between different experiments. This allows the usage of our bioreactor for a broad range of <a class="a-link" href="#nav-case-study/" onClick="showCorrectTab('nav-case-study/');">applications</a> such as <a class="a-link" href="#nav-case-study/" onClick="showCorrectTab('nav-case-study/');">screening of the recombineering library</a>. During these experiments, we continuously <a class="a-link" href="#nav-impr/" onClick="showCorrectTab('nav-impr/');">improved</a> our hardware and software thanks to the feedback from the experimental team. The hardware and software are extensively documented on <a href="https://github.com/andreaskuster/igem19-ethz-phage-hw-model" target="_blank">Github</a>. Click <a class="a-link" href="#nav-build/" onClick="showCorrectTab('nav-build/');">here</a> to check out the assembly of our hardware if you want to build your own bioreactor and <a class="a-link" href="#nav-use/" onClick="showCorrectTab('nav-use/');">here</a> to see how you can operate it. Overall this bioreactor offers a flexible and cost-efficient solution to perform complex experiments.
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor0.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor1.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor2.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor3.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor4.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor5.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor6.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor7.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor8.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor9.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor10.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor11.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor12.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor13.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor14.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor15.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor16.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="hhttps://static.igem.org/mediawiki/2019/c/c4/T--ETH_Zurich--hw-reactor17.JPG" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor18.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor19.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor20.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor21.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor22.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor23.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor24.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor25.JPG
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor26.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor27.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor28.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor29.JPG
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--hw-reactor30.JPG
" alt="">
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> Previous </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> Next </a>
## Application: Recombineering Library Enrichment
This page illustrates how we used our bioreactor for the screening of phage libraries generated with the recombineering approach. Furthermore, it emphasizes the advantage of a fully automated and self-regulating experimental setup.
### Goal
The phage library we constructed with the recombineering approach consists of roughly 0.1% T7 phages with randomized tail fiber and 99.9% wildtype T7 phages. Given a target host that is resistant against the wildtype phage, we seek to find and enrich phages from the library that can efficiently infect the target host and to evolve them to further increase their infectivity.
By keeping the cell density in the reactor with the phages constant, we can ensure that the phage infection rate stays in the optimal phase. This allows the most efficient phages to eventually outperform all other phages.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-case_study_sim.jpg
" alt=""> <figcaption> Population growth simulation of two phage types with different infection rate and initial concentrations. </figcaption> </figure>
### Experiment Setup
In order to fulfill the above objective, we grow the resistant target host in one reactor and let the infection happen in a separate reactor. If the cell density in the reactor where the infection happens gets too high, the software controller automatically pumps LB in and waste out. If the OD value gets too low, more cells are pumped in from the reactor where the resistant target host is growing. Additionally, target host is pumped in in regular intervals independent of the cell density. This is to ensure that even if the target host co-evolves with the phages in the reactor where the infection happens, there are always cells present that have not yet co-evolved, thus ensuring that the selective pressure for the phages isn't too high.
<figure class="figure-center"> <img src="https://static.igem.org/mediawiki/2019/6/61/T--ETH_Zurich--hw-case_study.svg" alt=""> </figure>
The plot below shows such a long term experiment run with the initial target OD value set to 0.3 and further reduced by the user to 0.2 after 50 minutes.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--case_study_od.jpg
" alt=""> </figure>
### Result
In order to confirm our conjecture of increasing the phage library efficiency through the evolvement in the bioreactor, we performed spot assays with the phage library before (pre) evolving it in the bioreactor and after 2 hours (post) with a host that has been engineered to be resistant against T7 phages with CRISPR-Cas. From the image below it is visible that the phage library is about 103 more infectious towards the new host.
<figure class="figure-center"> <img src="https://static.igem.org/mediawiki/2019/2/21/T--ETH_Zurich--hw-case_study_result.svg" alt=""> </figure>
## Hardware
The following illustration shows the interaction between the different hardware devices present on the bioreactor. As a control terminal, every laptop, tablet or even mobile phone can be used to connect to the reactor's Wi-Fi network and control it.
On the reactor hardware itself, the Raspberry Pi single-board computer coordinates all control loops and user input as well as the simulation. The devices are connected either through the I2C or 1-Wire bus.
<figure class="figure-center"> <img src="https://static.igem.org/mediawiki/2019/8/82/T--ETH_Zurich--hw-hardware_overview.svg" alt=""> </figure>
## Components
The Raspberry Pi is a small and inexpensive single-board computer and the main coordinator of the bioreactor. All the control logic and simulations are being executed on this device.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-raspberry_pi_3b.jpg
" alt="" style="width:400px"> </figure>
The peristaltic pumps are used to pump liquids between the different bottles and flasks. The great benefit with these kind of pumps is that they never get in direct contact with the liquid (except the pipe).
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-peristaltic_pump.jpg
" alt=" " style="width:400px"> </figure>
The TEC1-12715 is the thermoelectric peltier element used to cool down and heat up the water in the water baths.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-tec1-12715.jpg
" alt=" " style="width:400px"> </figure>
The electronic speed controllers (ESC), which are used in remote controlled airplanes, cars and boats, are a cheap solution for switching relatively high power devices in the positive and negative voltage range (change polarity using an H-bridge).
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-ESC.jpg
" alt=" " style="width:400px"> </figure>
Since the ESC devices use a different protocol for communication that needs real-time support, an inexpensive microcontroller, the Arduino Nano, takes care of listening on the I2C bus and translating the commands to the PPM protocol used by the ESC devices.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-arduino_nano.jpg
" alt=" " style="width:400px"> </figure>
The CPU PC fan dissipates the excess of heat or cold away from the thermoelectric peltier element.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-cpu_fan.jpg
" alt=" " style="width:400px"> </figure>
The water pump transfers water from the reactor water bath to the heat exchanger and back.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-water_pump.jpg
" alt=" " style="width:400px"> </figure>
The PCA9685 is a 16 channel pulse-width-modulation device. This is used to control and regulate the speed of the peristaltic pumps, the PC fans and the water pumps.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-pca9685.jpg
" alt=" " style="width:400px"> </figure>
The output ports of the PCA9685 cannot directly be used to drive large loads. Therefore, we use MOSFET transistors that are capable of switching several amperes of current.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-mosfet.jpg
" alt=" " style="width:400px"> </figure>
The TLP281 optocoupler allows us to convert the high frequency 5 Volt logic signal from the PCA9685 to a 12Volt signal with the same waveform. This is required in order to control the speed of the PC fans.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-tlp281.jpg
" alt=" " style="width:400px"> </figure>
The PCF8574 module extends the limited number of input and output ports from the Raspberry Pi by 8 additional ports. We need this to drive the LED lights of the OD sensors.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-pcf8574.jpg
" alt=" " style="width:400px"> </figure>
The DS18B20 is a one-wire digital and water-proof temperature sensor used in the reactor water bath.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-ds18b20.jpg
" alt=" " style="width:400px"> </figure>
The TSL2591 is a high-gain digital light sensor. We use this module in the optical density sensors.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-tsl2591.jpg
" alt=" " style="width:400px"> </figure>
The TSL2591 light sensors have a fixed, non-modifiable bus address. Since we use three of these devices, they cannot be connected to the same I2C bus at the same time. In order to overcome this limitation, we use the TCA9548, a I2C multiplexer. This device allows us to switch between the three light sensors from software.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-tca9548a.jpg
" alt=" " style="width:400px"> </figure>
The BME230 is an ambient temperature and pressure sensor. Since the reactor's maximum and minimum reachable temperature depends a lot on the current ambient temperature, we can use this value to compute the approximate temperature limits for heating and cooling.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-bme280.jpg
" alt=" " style="width:400px"> </figure>
We mounted a magnetic stirrer below each reactor bath in order to be able to keep the biomass in the reactor homogeneous.
<figure class="figure-center "> <img src="
[IMG] T--ETH_Zurich--hw-magnetic_stirrer.jpg
" alt=" " style="width:400px"> </figure>
## Software
The introduction of software abstraction layers ensures flexible, adaptable and customizable adaption to hardware changes and software requirements. On the one hand, we need to ensure a proper handling of the shared hardware resources, on the other hand we seek to make upper layers as simple to use as possible in order to easily set up the reactor experiments. Furthermore, the whole software is open source and available on our <a href="https://github.com/andreaskuster/igem19-ethz-phage-hw-model" target="_blank">github repository</a>.
<figure class="figure-center"> <img src="https://static.igem.org/mediawiki/2019/1/1f/T--ETH_Zurich--hw-software_overview.svg" alt=" "> </figure>
### HW
The HW layer consists of code handling the direct connection with the hardware modules (i.e. through the I2C bus).
### Drivers
The Drivers layer implements classes for the basic hardware device functions such as light sensors and the water pump. Some of them share the same hardware classes (i.e. the PCA9685)
### Devices
The Devices layer implements the control and management logic of composite devices such as the optical density sensor.
### Experiment Setup
The uppermost layer processes the user input, outputs status data, manages thread handling and call of the scheduled event loop execution functions. Furthermore, custom controllers and modeling are implemented here.
## Optical Density Measurement Device
One of the key components of our hardware reactor is the self-built online optical density measurement device, which allows continuous measurement of cell density.
The sensor consists of a modified cuvette, a light emitting diode (LED) at 600nm wavelength as well as a high-gain digital light sensor. The modified cuvette with an inlet and an outlet pipe attached represents the body for measurements. The LED is directed towards the cuvette with the light sensor mounted on the opposite side of the cuvette. Therefore, the sensor detects the remaining light that is not absorbed by the cells in the cuvette. To ensure that we only measure the light from the LED and not having the urge of buying an expensive bandpass filter, we 3D-printed a plastic case to prevent the entry of light from outside. The latest CAD drawings of the case can be found in our <a href="https://github.com/andreaskuster/igem19-ethz-phage-hw-model/tree/master/cad" target="_blank">github repository</a>.
<figure class="figure-center"> <img src="https://static.igem.org/mediawiki/2019/b/bb/T--ETH_Zurich--hw-od_sensor.svg" alt=""> </figure>
First, the peristaltic pump is activated for 10 seconds in order to get fresh culture into the cuvette. Then, we wait for 3 seconds in order to let possible bubbles float up. In the next step, we do the dark value measurement with the LED switched off, followed by 8 sequential measurements with the LED turned on. The raw sensor value represents the difference between the dark value and the mean of all light values.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--od-bottom.png
" alt=""> </figure> <figcaption> CAD drawing of the bottom part of the optical density sensor. </figcaption>
### Calibration
The raw sensor value of the device does not direclty output optical density values, but rather a light intensity value in the interval from 0 to 216-1. Therefore, we have to find the corresponding mapping from the sensor values to the actual OD values. This can be achieved by performing the following calibration procedure:
A cell culture is grown in the reactor and automatic raw sensor value measurements are taken every 30 seconds (see graph below).
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-od_calibration_raw_data.png
" alt=""> </figure>
Simultaneously, samples were taken from the reactor every few minutes and a reference OD value was measured with a commercial OD measurement device.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-od_calibration_ref_data.png
" alt=""> </figure>
By combining the data from above, we get a pointwise mapping between the raw sensor value and the actual OD value.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-od_calibration_relation.png
" alt=""> </figure>
Since the relation is non-linear, we decided to perform support vector regression (SVM) in order to find the mapping for all points.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-od_calibration_regression.png
" alt=""> </figure>
The prediction from SVM then allows us to compute the OD value for arbitrary raw sensor values (within the range of the training samples). The plot below shows such a growth curve of a cell culture, measured using the OD sensor with the prediction from the SVM model.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-od_calibration_sample_run.png
" alt=""> </figure>
The image gallery shows a selection of images from early OD sensor prototypes to the final version mounted onto the bioreactor.
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od-early-prototype0.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od-early-prototype1.jpg
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od-early-prototype2.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od0.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od1.jpg
" alt="" style="transform:rotate(270deg);">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od2.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od2.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od3.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od4.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od5.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od6.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od7.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od8.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od-cuvette0.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od-cuvette1.jpg
" alt="">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--od-cuvette2.jpg
" alt="">
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> Previous </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> Next </a>
## Temperature PID Controller
Having the ability to regulate temperature of each individual bioreactor not only allows us to grow the cell cultures at optimal temperatures, but can also be used to slow down the growth rate with lower temperatures.
By replacing the traditional resistive heating by a thermoelectric peltier element (heat pump) we can actively heat and cool using a single device. To keep the flexibility of using different shapes and sizes of the bioreactor as well as avoid any direct contamination, we decided to perform heat conducting through a secondary water cycle. A waterbath is heated up or cooled down to a target setpoint. This temperature then diffuses through the flask glass to the actual cell culture.
<figure class="figure-center"> <img src="https://static.igem.org/mediawiki/2019/6/6a/T--ETH_Zurich--hw-temperature_control.svg" alt=""> </figure>
The system contains a closed feedback loop (sensor: temperature sensor, actuator: thermoelectric peltier element) controlled by a PID controller.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-temperature_control_heating387.png
" alt=""> </figure>
As shown by the temperature measurements, the system is able to precisely adjust the temperature within few minutes.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-temperature_control_cooling222.png
" alt=""> </figure>
The video shows the process of drawing the reactor bath and later printing it using our 3D printer.
<video width="1000" controls> <source src="https://static.igem.org/mediawiki/2019/9/9d/T--ETH_Zurich--reactor-bath-build-process.mp4" type="video/mp4"> Your browser does not support the video tag. </video>
## Hardware Assembly
Please have a look at our time-lapse video of the reactor build process.
<video width="1000" controls> <source src="https://static.igem.org/mediawiki/2019/8/89/T--ETH_Zurich--reacotr-build.mp4" type="video/mp4"> Your browser does not support the video tag. </video>
## Hardware Model Interaction
Many experiments work fine with the naive approach of using binary control logic such as running some pumps if the optical density value reaches a certain threshold value. More complex reactor configurations or functional constraints from the experiment require more sophisticated control loops. This is where the model comes into play. Predicting future cell density for different temperature and nutrient concentration scenarios, gives the controller a lot of additional insight. This can for example be used to cool down a reactor in order to slow down its growth rate.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--hw-model-interaction.jpg
" alt=""> </figure>
The choice of having a Raspberry Pi computer with decent computing power and memory capacity allows to directly run these simulations in conjunction with the control of the hardware.
## Improvements
Building such a complex piece of hardware and software involves many design decisions during planning, ordering of material and the build process. During the initial tests by the experimental team, some of these decisions turned out to be suboptimal and need to be improved or fixed. This section points out the most relevant improvements throughout the whole creation cycle.
### Build
Our self-build optical density sensor required several iterations for the 3D printed case, the electronic circuit and the software, as well as the math behind the correct callibration, conversion of raw sensor values and their interpretation.
### Dry Test
During the first runs of the temperature controller, we experienced water leakage in the 3d printed reactor bath. Further investigations have shown that these were caused by tiny cracks in the printed surface due to irregularities of the printer. We fixed this problem by coating silicone to the inside wall of the reactor baths.
The temperature control loop was working fine, but we observed that the temperature was rising and falling very slowly, especially far from the ambient temperature. This was mainly caused by the limited heat transport power (TEC1-12705, ~50W) of the thermoelectric peltier element. Therefore, we replaced it with a more powerful thermoelectric peltier element, the TEC1-12715 with a heat transport power of roughly 140 Watts.
The online optical density flow-through cuvettes were all leaking after some time of use. Increasing the silicone fillings viscosity by mixing in starch helped first, but turned out to be a temporary solution only. We therefore created a custom lid for the cuvette, which we printed on our 3D printer. By glueing it into the cuvette, we didn't have any more leakage issues.
During the first runs of the PID temperature control loop, the actual value overshooted the target value by many degrees celcius. It turned out that setting the target value far from the current temperature value lead to a huge integral component of the PID controller, which then lead to the large overshoot. We could solve this problem by implementing the anti-windup technique of disabling the I-component for large differences between the target and actual temperature.
### User Feedback
The initial version of the command line interface for controlling the hardware did not comfirm the successful receipt of user commands. This lead to some confusion, since for some commands no immediate percepteable reaction follows from the hardware. This feature has then been implemented.
Long-term usages have revealed some instabilities of device functionalities over time. We recognized that for example the ESC controllers randomly stopped working after some hours, which lead to a drift from the target temperature. After careful examination, we could adapt the timing of the PPM protocol from the microcontroller to the ESC controllers.
The internal timings of the constant optical density value controllers have been adjusted and refined using the observation of the user during the experiments.
## User Interaction
A key element for exploiting the full potential of such a productivity-enhancing device is the intuitive and simple interaction between the end user and the device. That's why we set a strong focus on a user-friendly interface.
### Command Interface
After switching the power of the hardware reactor on, it automatically creates a wireless access point. This allows the end-user to connect with their favorite device i.e. laptop, tablet or even mobile phone. After successful connection, the device lists all available commands to control the hardware i.e. for starting the optical density sensor 1, the user can enter "enable sensor od1" in the command line. The hardware reactor will then comfirm that it has received the command successful.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--usage0.jpg
" alt=""> </figure>
### Experiment Setup
The command interface can be used to start and stop individual hardware components or custom controllers. While controlling the hardware components is always identical, the controller logic highly depends on the experiment that has to be performed. Some standard controllers are already available such as keeping the optical density value constant in a reactor. Due to the abstraction of the lower-level interaction with the actual hardware, the user can also write custom controllers by instantiating the abstracted devices such as the PeristalticPump, OpticalDensitySensor or ReactorTemperatureControl. Complex control loops can be constructed with very few lines of actual code.
<figure class="figure-center"> <img src="
[IMG] T--ETH_Zurich--usage1.jpg
" alt=""> </figure>
## Decontamination
One of our most important requirements for the reactor hardware was to ensure highest decontamination standards, especially while working with phages.
We constructed the device in a way that all components in contact with the biological material are disassemblable and either autoclavable or easily replaced and thus disposable as autoclave waste. The reactor containers are lab-grade Erlenmeyer flasks. The free tubes as well as those within the peristaltic pumps consist of autoclavable silicone and can easily be removed from the peristaltic pumps.
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--decontamination1.jpg
" alt="Pipe Rinsing 1">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--decontamination0.jpg
" alt="Pipe Rinsing 2">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--decontamination2.jpg
" alt="Pump Disassembly 1">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--decontamination3.jpg
" alt="Pump Disassembly 2">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--decontamination4.jpg
" alt="Pump Disassembly 3">
<img class="d-block w-100" src="
[IMG] T--ETH_Zurich--decontamination5.jpg
" alt="Pump Disassembly 4">
<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> Previous </a> <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> Next </a>
We decontaminate the device by first rinsing all tubes using 70% ethanol. Later we disasselbe the pipes, remove the erlenmeyer flasks and autoclave everything.
