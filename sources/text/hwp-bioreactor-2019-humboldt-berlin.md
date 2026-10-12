[IMG]
# Team:Humboldt Berlin/Hardware
MathJax example
[IMG] plasmid
# Hardware
[IMG] OPEN PBR LOGO
# Introduction
# Overview of single components
# Designing the bioreactor
# Additional ressources
[IMG] Cultivation chamber_menübild
### Introduction
The openPBR is a low-cost, easy to assemble and reliable option to cultivate phototrophic organisms. We have developed it as an open-source platform to operate as you need it. It comes in several setups, from nine cultivation vessels to three flat panels with a minimum width of 15 mm and up to a volume of 190 ml. It provides users with the ability to measure optical density at wavelengths from 400 nm to 800 nm, online and provides a .csv file output. All parts are openly available and even gas supply is exactly adjustable through a rotameter, depending on the needs of your organism and setup. We want to offer scientists a simple and versatile cultivation platform.
[IMG]
[CAPTION] Presenting the openPBR at the Giant Jamboree 2019. For three days many teams, judges and unaffiliated guests of the Giant Jamboree discussed with us the utility and advantages of the modular cultivation setup. The feedback will influence our further design iterations.
### Overview of single components
### Sensors
### Illumination
### Gas mixing and pumps
### Cultivation chamber
### Casing
[IMG] Our Open PBR
[CAPTION] Klick on part-labels for more information
### Cultivation Chamber
The openPBR can be used with several different cultivation vessels. Originally designed to hold three 95 ml, fully autoclavable, flat panels, with interchangeable rings from 15 mm (95 ml) up to 30 mm width (190 ml). For growth-comparison studies, the openPBR can be set up with up to nine hybridization flasks with standard SCHOTT-45 cups. Even the use of cell-culture flasks is possible. For this use-case we 3D-printed autoclavable cups to connect them with hoses for classical cell-culture flasks.
Because of our model of light limited cultivation, we decided to build a flat-panel device. If you want to know how a flat-panel bioreactor makes it possible to cultivate at high densities, look at our model .
[IMG]
[IMG] Replacement rings for flatpanel
[CAPTION] Fig. 1. Replacement rings for the flat panels panels inside the openPBR. The flat panels are held together by butterfly nuts. The rings in between can be interchanged by replacements with different width.
[IMG] Cell flasks for the bioreactor
[IMG] 3D-printed screw tap
[CAPTION] Fig. 2. The openPBR can also hold cell-culture-flasks. The screw cap was 3D-printed to connect plastic hoses for gas- and media-supply.
Read more Read less
[IMG]
### Illumination
The LED panel of the openPBR is designed to give you full control of both color and intensity of the light source powered by 250 single RGB LEDs and 250 white LEDs with a total light intensity of up to 300 µE. Having a constant and reproducible light source in a photobioreactor setup is one of the most difficult tasks to achieve. To learn how to build and control your own please visit our step-by-step tutorial.
[IMG] LED panel
To get an impression of how to set up the relative voltage in the OBP-software to get the desired light intensity we developed a light intensity adjustment curve. We measured the light intensity at 24 different positions above the LED panel, each with the relative voltage set to 15, 140 and 225. Using these values we calculated a linear fit, which can be used to predict the light intensity at any given relative voltage.
Additonally we calculated three different heat maps indicating the light intensity distributions inside the openPBR for three different settings of relative voltage. The distribution in µE is shown in the figures below.
[IMG]
[CAPTION] Fig. 3. Light spectrum of the LEDs.
[IMG]
[CAPTION] Fig. 4. Light intensity adjustment curve. Light intensity was measured at 3 different values of relative voltage and fitted with a linear fit.
[IMG] Heatmap 1
[CAPTION] Fig. 5 Light intensity distribution inside the opbenPBR for the relative voltage setting of 15.
[IMG] Heatmap 2
[CAPTION] Fig .6 Light intensity distribution inside the opbenPBR for the relative voltage setting of 140.
[IMG] Heatmap 3
[CAPTION] Fig. 7 Light intensity distribution inside the opbenPBR for the relative voltage setting of 225.
Read more Read less
[IMG]
### Gas supply
The gas supply system of the openPBR provides the setup with a controllable gas flow of up to 250 l/h. Chaotic mixing of the culture is solely provided by the gas pressure, which can be regulated by rotameters. To hydrate the air that comes into the culture, a 500 ml SCHOTT bottle is filled with water and the gas flow directed through it.
[IMG] Our Gas and mixing pumps
[CAPTION] Fig. 8. Assembled Schott-bottle with gas supply pump. Gas supply is controlled by a rotameter
Read more Read less
[IMG]
### Sensors
The sensory system of the openPBR consists of up to nine Opt 101 Monolithic linear voltage sensors and nine LEDs with the specific wavelength of 680 nm. It is possible to use any LED in the linear area of the sensor thus measurements from 400 nm to 800 nm are feasible.
[IMG] optical responsivity
[IMG] sensor rail
[CAPTION] Fig. 9. Rail containing the light sensors. The rail is attached to the front of the openPBR and detects the light that passes through the culture.
In the front of the reactor the Opt101 sensors are built into a rail. On the opposite side, built into the LED panel, are the 680 nm LEDs which emit light that is absorbed by the culture. Therefore, the voltage output of the Opt101 decreases. Using this simple principle it is possible to get absorption curves at any wavelength in the measurement range of the sensor. In our case we wanted to measure the specific absorption of the photosystem II at 680 nm to determine culture density and in consequence assess the growth of C. reinhardtii.
### Calibration
Once the sensors are installed, you need to calibrate them. To get a net voltage, you need to subtract the output value from the input value. Subtract the Vout values from the Vin values and plot them against the reference OD of your photometer. Then perform a logarithmic fit as shown in Fig. 10.
[IMG]
[CAPTION] Fig.10: Measured OD with reference photometer against measured ∆V with openPBR
After calibration, we measured other random samples both with our reference photometer (Expected OD) and with the openPBR (Figure 2). We also plotted the “ideal correlation”, meaning expected value = measured value, in order to get an idea of how good the openPBR measurements were.
[IMG]
[CAPTION] Fig.11: Expected OD values of the reference photometer plotted against openPBR measurements with an “ideal correlation” of x = y
From this we can conclude that, while the openPBR measurements between OD = 0 and OD = 1 are quite reliable, further calibrating points are needed in order to improve the range beyond OD = 1.
Read more Read less
[IMG]
### Casing
The casing of the openPBR consists of 10 unique laser-cut plexiglas parts. The whole openPBR can be assembled without making use of screws. Adjustment of the cultivation temperature is achieved by regulating the water temperature of the filled inner chamber of the openPBR.
The peristaltic pumps are held by mounts fitted to the model so that they are kept in place solely by friction. All the laser cutting files and tutorials are available on GitHub.
[IMG] Casing Plexiglas files
[IMG] Overview of the hierarchical and modular cloning system
[CAPTION] Fig. 12. Overview of the laser cut file. Files for laser-cutting plexiglas to build the casing are online on our GitHub page.
We decided to use acrylic glass as material for the casing because it is transparent and allows light to pass almost without losses.
Read more Read less
[IMG]
### Pumps
The pumps of the openPBR are versatile in their functions. They can be used to pump media in and out or to connect multiple chambers, for example to dilute the cultures. To control the cell density in the cultivation chamber, the openPBR measures the cell density and indicates the pump system to keep turbidostatic conditions. On a given density one pump pumps out media/cell culture and the second pump pumps in new media.
[IMG]
[CAPTION] Fig. 13. Peristaltic rotameter pumps.
[IMG]
[CAPTION] Fig. 14. Pumps for turbidostat conditions. To maintain the optical density of a culture, this is the needed setup of connected pumps to pump in fresh media, while pumping out cells.
Read more Read less
[IMG]
### Electronics and Software
The openPBR is controlled by an Arduino AT Mega 2560 microcontroller. The whole system is powered by a 12 V network adapter. The gas supply system and LED panel run on 12 V. A voltage regulator (LM317) provides the sensors and pumps with 5 V. In this first iteration the whole wiring is placed on one standard breadboard making it possible to rebuild this setup with a simple Arduino starter kit and some additional parts like MOSFETs and the LM317. Future iterations could be built on a shield expansion card making the workflow even simpler.
[IMG] arduino
[CAPTION] Fig. 16. Assembled electronics for the cultivation set-up.
[IMG]
[CAPTION] Fig. 15. Wiring and circuit diagram of the sensory setup.
Read more Read less
[IMG]
### Designing the bioreactor
### Chemostat equation
### Growth rate and light intensity
### OD Measurement
[IMG] Bringing Chlamy to iGEM
### Chemostat Equation
This chapter gives an overview over important parameters for cultivation resulting from the general chemostat equation.
[IMG]
The chemostat equation which we treated as a part of modelling provides us with an overview of general parameters important to a microbial culture. If we want to cultivate in turbidostat-mode, we need to remove liquid from the culture continuously. This removing is quantified through dilution rate D: D=1Vc⋅ddtVin Vc:Volume of culture inmLVin:Volume of added medium inmL This equation allows us to quantify dilution of the culture independently of the cultivation setup. With characteristic values between 0.018−0.0641h, we can calculate the rate at which our pumps should pump medium out of the culture: D⋅Vc=ddtVin Substituting Vc=95mL for our self build chamber, we get values for ddtVin between 1.71 and 6.08mLh, so a many pumps should be sufficient.
Read more Read less
[IMG]
### Growth rate and light intensity
An important aspect of photosynthetic growth is illumination. Read about the light environment in a cultivation vessel here.
[IMG]
According to the Beer-Lambert law described in our model of light limited growth , the light gradient in a culture can be described by a exponential decay equation for every wavelength. From this equation, we get an expression for the growth rate as a function of light intensity: μ(Iin,Iout)=μmax⋅ln(Iin+HIout+H)ln(IinIout)−μe This function has an upper asymptote, meaning that with growing input intensity Iin, μ is barely changing (light saturation, [1]). According to [2], C. reinhardtii shows light saturation at Iin=300μmolphotonsm2⋅s.
We therefore decided to build our bioreactor with illumination that is able to cover the range below 300μmolphotonsm2⋅s, so we can test as many growth rates as possible with our setup.
[IMG]
Read more Read less
[IMG]
### OD Measurement
With the same equation describing the light gradient inside the culture, we can define a relationship to measure cell density and other parameters.
[IMG] Short Illustration Lambert-Beer
Measurement of OD is based on the Beer-Lambert law (see our model for further information). From this law, OD is defined as: OD=log(I0(λ)I(λ))=ϵX⋅cX⋅d I0(λ,t):light intensity upon entrance into vessel inμmolm2⋅sϵX:light attenuation coefficent for algae inLmol⋅cmbg:background turbidity1cmd:light path incm
Generally speaking, realization of the setup should make the variables in the equation as indifferent to parameters that have an impact on measurement as possible.
[IMG] Laser measuring OD
[CAPTION] Fig. 17. Laser measuring optical density. Sensors are mounted on the aluminium rail at the reactor front.
Read more Read less
[IMG]
### Additional ressources
### Github Project
### Pricing
This chapter provides you with everything you need to rebuild our setup on your own - including software, a list of used parts and assembly instructions.
### Github Project
Visit our Github page, where assembly instructions, list of parts and software are provided together and are kept up to date!
Judging release for software
[IMG] Overview of the hierarchical and modular cloning system
### Pricing
Since we are a non-profit team of our own, we know that financing is one of the limiting and most problematic challenges of this contest. So it was important to us, that every iGEM team who wants to continue our project ,or any new project using a phototrophic organism, has a low-price but efficient way to fulfill their great ideas. For only 588 € it is possible to rebuild our bioreactor that offers many opportunities to design a set-up tailored to the needs of innovative projects.
[IMG] currency symbols
| parts
| price
| Electronics
| 81 €
| Casing
| 78 €
| Flatpanel
| 87 €
| LED Panel
| 150 €
| Sensors
| 32 €/69 €
| Pumps
| 89 €
| Gas Supply
| 78 €
| Total
| ∑ 588 €
Read more Read less
[IMG]
[1] Huisman, J., Matthijs, H.C., Visser, P.M. et al. Antonie Van Leeuwenhoek (2002) 81: 117. https://doi.org/10.1023/A:1020537928216
[2] Kliphuis, A. M., Klok, A. J., Martens, D. E., Lamers, P. P., Janssen, M., & Wijffels, R. H. (2012). Metabolic modeling of Chlamydomonas reinhardtii: energy requirements for photoautotrophic growth and maintenance. Journal of applied phycology, 24(2), 253–266. doi:10.1007/s10811-011-9674-3
10811-011-9674-3
