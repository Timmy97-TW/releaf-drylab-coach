[IMG]
### Contents
#### MAIK - Microfluidic Absorption Intensity Kit
#### Affordable Personalized Cancer Care
#### MAIK's Key Values
#### MAIK - Your Tool for Precise Color Measurements
#### Cost Estimation of MAIK
#### MAIK and Microfluidic Chip Interaction
#### Low-Cost Microfluidics for Personalized Therapy
#### Outlook
#### References
## MAIK - Microfluidic Absorption Intensity Kit
In our iGEM project, we have focused on a targeted approach to cancer therapy, leveraging the human microbiome as a key element in our strategy. For our project, we chose colorectal cancer as our model.
As part of this broader initiative, our team developed a hardware solution aimed at advancing personalized cancer therapy — a research field that is growing rapidly, as we found out during our research and in our interviews. We wanted to design a concept that allows us to test individual responses to cancer treatments, making therapy more tailored and effective for each patient.
To achieve this, we designed a complete rapid test system, including a cultivation environment for human tumor cells — a microfluidic chip — and an accompanying measurement and analysis platform, which we call MAIK, short for Microfluidic Absorption Intensity Kit. To test the system and culture cells in the microfluidic chips, we chose colorectal cancer cells from the HT-29 cell line to directly evaluate the effectiveness of drugs against CRC.
## Affordable Personalized Cancer Care
Driven by the mission to revolutionize global healthcare, our project aims to make personalized cancer therapy accessible to communities worldwide. We envision MAIK and the microfluidic chips being used in hospitals, research labs, and clinics globally, offering an affordable and scalable solution for tailored medicine.
In wealthier countries, advanced technologies like genomic sequencing and high-throughput diagnostics are available in specialized centers. In contrast, non-industrialized countries face significant challenges in accessing these technologies, despite rising cancer cases. Nepal and Nigeria, with low gross domestic products and poor healthcare systems, illustrate the state of personalized medicine in developing nations. These obstacles are common across many developing countries. In high-income countries, breakthroughs in basic research over the last two decades have advanced oncology, leading to the establishment of personalized medicine. It’s now known that cancers from the same tissue can differ despite appearing identical under the microscope [1]. High costs, lack of dedicated infrastructure, and insufficient expertise mean that many patients cannot benefit from cutting-edge cancer treatments. Comparing the 5-year survival rate of CRC cancer patients from Kampala (Uganda) with that of US patients diagnosed with the disease in the same years, the survival rate is just 19% compared to 52%. Here low-tech solutions, such as portable screening tests, could substantially improve outcomes [2].
Our project directly addresses these challenges by developing a microfluidic chip system - CRC-on-a-Chip - where human HT-29 colorectal cancer cells are cultured, along with the MAIK measurement system. Designed as a rapid test, this concept offers a low-cost and accessible alternative for quickly assessing therapy effectiveness on patient-specific tumor samples. By providing a simple and affordable solution, it has the potential to bring personalized medicine to resource-limited settings, where traditional diagnostics are often out of reach.
By prioritizing affordability, ease of use, and modularity, our concept aims to democratize personalized medicine, enabling tailored treatments in both labs and clinics with basic cell-culturing capabilities. It empowers communities to advance cancer treatment and exemplifies the potential of synthetic biology in overcoming healthcare disparities.
## MAIK's Key Values
### ACCESSIBILITY
MAIK seeks to make personalized cancer therapy available to communities worldwide, particularly in underserved regions where healthcare infrastructure is limited. By providing a solution that can be easily integrated into various healthcare settings, we aim to bridge the gap in access to advanced cancer treatments.
### SIMPLICITY
With user-friendliness in mind, MAIK is designed to ensure that researchers and clinicians can easily operate the system. This simplicity enhances usability and encourages adoption, allowing healthcare providers to focus on delivering personalized care without the barrier of complex technology.
### MODULARITY
The modular design of MAIK allows it to be adapted for use in a variety of settings, from well-equipped laboratories in developed countries to clinics in resource-constrained areas. This modularity ensures that personalized cancer therapies can reach diverse patient populations, maximizing the impact of our technology.
### EMPOWERMENT
Our project emphasizes the importance of understanding synthetic biology in healthcare. By educating researchers and clinicians about the technology behind MAIK, we enable communities to take control of cancer treatment decisions, fostering a sense of ownership and engagement in their healthcare journeys.
## MAIK - Your Tool for Precise Color Measurements
Welcome to our innovative Microfluidic Absorption Intensity Kit, developed as part of our iGEM project! MAIK provides a versatile and cost-effective solution for precise color measurements in a wide range of biological and technological applications. From colorimetric cell assays to experiments with colored liquids, our kit supports you in capturing and analyzing data accurately.
### What is MAIK?
MAIK is a flexible, easily customizable measurement system designed for colorimetric applications. It consists of a tailor-made casing that securely houses sensors, LEDs, and your sample to ensure accurate and reproducible measurements. Whether you’re working in synthetic biology, chemistry, or physics, MAIK provides you with the tools to make your experiments more efficient and precise.
Our kit is especially useful for color measurements in biological samples, such as cell assays or concentration measurements. Thanks to its simple construction and open design, the kit can be easily replicated and adapted to your specific needs. By lowering the barriers to accurate measurements, we encourage creative solutions and innovation – the essence of iGEM!
## Click here for a detailled instrution and all the parts you need!
#### +
Open the instructions for building your own MAIK!
Download all the CAD parts!
Access the code!
### How does MAIK work?
The core of MAIK is a 3D-printed casing, specifically designed to integrate sensors, LEDs, and samples for precise measurements. It features two measurement chambers that can be used separately or together, depending on the type of experiment you want to conduct. The electronics are based on the Arduino Uno Rev3, a microcontroller that is easy to program and quickly connects to the color sensors.
### Technical Details and Setup
### Casing
The casing of MAIK was designed with Autodesk Inventor and optimized to meet the requirements for colour measurements in microfluidic systems. It is made of a robust, opaque material that minimizes external light influences and thus enables precise measurement of the samples. The 3D-printed design ensures that the housing is flexibly adaptable and easily reproducible. The modular design allows you to modify the casing according to your experimental requirements. For example, you can add additional chambers or sensor holders or adapt the design to specific sample applications. We tested two different Materials in our project: VeroBlack and polyethylene terephthalate. Both materials demonstrated excellent performance in our application.
[IMG] Figure 1: Rendering of the 3D printed casing with cut-out for the TCS230/3200
Figure 1: Rendering of the 3D printed casing with cut-out for the TCS230/3200
### Sensors
The sensors we use in MAIK are the TCS230/3200 and the TCS34725 - both high-precision color sensors specialized in RGB measurements. These sensors offer high sensitivity in the detection of red, green and blue hues, making them ideal for color measurements in colored liquids or biological samples.
TCS230/3200:This sensor converts light into frequency-proportional signals and is customizable for a wide range of light intensities. Its compact design makes it ideal for use in space-limited systems such as MAIK.
TCS34725:With an integrated IR filter and high dynamic range, this sensor is particularly suitable for precise measurements in environments with variable lighting. The sensor blocks infrared rays, ensuring clear and accurate detection of visible light wavelengths. This is particularly useful when working in environments with fluctuating light conditions. For our project the TCS34725 worked best.
[IMG] Figure 2: Images of the TCS230/3200 and TCS34725 (taken from store.arduino.cc)
Figure 2: Images of the TCS230/3200 and TCS34725 (taken from store.arduino.cc)
### Electronics
We use an Arduino Uno Rev3 to evaluate the data. The Arduino communicates directly with the color sensors and collects the raw data (red, green, blue and clear value), which is then transferred to the computer for further analysis. Thanks to the widespread use of the Arduino Uno, it is possible to use a variety of ready-made libraries, which makes programming and implementing the sensors much easier. In our MAIK project, we have created customized Arduino scripts that enable real-time acquisition and processing of sensor data. You can use these scripts directly or adapt them to your own needs. The Arduino Uno also ensures that MAIK can be operated with minimal power consumption, which is particularly useful in mobile or energy-efficient experiments.
[IMG] Figure 3: Image of the Arduino Uno Rev3 (taken from store.arduino.cc)
Figure 3: Image of the Arduino Uno Rev3 (taken from store.arduino.cc)
### Software and Data Analysis
The sensor data is processed in real-time via the Arduino. For more advanced analysis, we use Matlab software to create calibration curves and interpret experimental data. With our custom Matlab software, you can efficiently analyze your data and obtain precise results for your experiments. Simply insert your calibration data and the software will show you your calibration curve for red, green and blue values. After selecting a fitting calibration curve for your application, add your measurement file and the software will calculate your desired value, i.e number of cells or concentration.
[IMG] Figure 4: Presentation of our universal software, adapted to MAIK
Figure 4: Presentation of our universal software, adapted to MAIK
### Results
In our project, we successfully utilized MAIK to capture and analyze a calibration curve using Ponceau S dye in a first try. By conducting a series of experiments with varying concentrations of the dye, we were able to establish a reliable calibration curve that demonstrates the linear relationship between dye concentration and absorbance. Through this calibration, we could accurately determine the concentrations of unknown samples by comparing their absorbance values to the calibration curve. This result confirms the effectiveness of MAIK in performing precise quantitative analyses of colorimetric solutions. Additionally, the preset concentrations were correctly identified, demonstrating the kit’s ability to deliver consistent and reproducible results in real-time measurements.
[IMG] Figure 5: Calibration functions for the TCS34725 with Ponceau S.
Figure 5: Calibration functions for the TCS34725 with Ponceau S.
In addition to Ponceau S, we also measured Resazurin. While the results were not as optimal as those obtained with Ponceau S, the calibration curve for Resazurin still provided usable data. Although the sensitivity and accuracy of the Resazurin measurements were slightly lower, our system remains effective for applications involving this dye. Importantly, we were still able to collect and analyze samples with Resazurin, yielding results that, while not as precise, were sufficient for interpretation and further experimentation.
[IMG] Figure 6: Calibration Curves of the Resazurin. On the left side all three calibration curves are shown. On the right side the calibration curve for red values is shown, which we used for caibration.
Figure 6: Calibration Curves of the Resazurin. On the left side all three calibration curves are shown. On the right side the calibration curve for red values is shown, which we used for caibration.
### Resazurin-Assay
During the development of MAIK, we selected the resazurin assay for the determination of cell viability due to its ease of use and affordability.
Resazurin, also known as Alamar Blue, is a low molecular weight phenoxazine-3-one dye that undergoes a visible color change in response to cellular metabolic activity. The reduction of resazurin to resorufin is catalyzed by mitochondrial and cytoplasmic reductases in the presence of biologically abundant reductive species such as NADH, NADPH or FADH (Fig. 7). This reaction leads to a shift in absorbance from λmax = 600 nm (resazurin, blue) to λmax = 570 nm (resorufin, pink), especially at physiological pH values of 7.4-7.5 [3].
[IMG] Figure 7: Schematic representation of the resazurin to resorufin conversion.
Figure 7: Schematic representation of the resazurin to resorufin conversion.
This color change from blue to pink serves as a clear indicator of metabolic activity and thus provides information about the viability of the cells, making the assay an ideal tool for evaluating the effectiveness of cancer treatments.
## Cost Estimation of MAIK
The following table shows the cost breakdown for the components of the project, divided by the two materials used, polyethylene terephthalate with glycol modification (PETG) and VeroBlack. For each material variant, the prices of the individual components, such as sensors, box, Arduino and cables, are listed for both the TCS230 and the TCS34725 sensor in order to compare the total costs.
PETG
VeroBlack
Sensors
3.20 €
Box
4.45 €
38.66 €
Arduino
10.80 €
Cables
2.00 €
Sum:
20.45 €
54.66 €
Table 1: Listing of the material costs for the MAIK measuring unit. Comparison of two different 3D-printing materials.
Depending on the 3D printing material used, MAIK can be even cheaper in terms of material costs, as can be seen in Table 1. It can also be stated that MAIK is generally an inexpensive measuring unit in which simple color measurements can be carried out with sufficient accuracy.
## MAIK and Microfluidic Chip Interaction
Based on the latest research in personalized cancer therapy, MAIK combines microfluidic technology with colorimetric analysis to assess the effectiveness of cancer treatments. MAIK works by utilizing a microfluidic chip with two chambers — one for untreated control cells and one for drug testing. In our case the chambers are seeded with adherent HT-29 colorectal carcinoma cells. After a 24-hour incubation period, the test chamber is exposed to a therapeutic agent, while the control chamber remains untreated. For safety reasons, we did not use toxic cytostatics, but rather tested the effectiveness with ethanol. The culture medium is replaced by a resazurin solution, a dye that changes color depending on the cells' viability: pink indicates living cells, while blue indicates dead cells. MAIK’s color sensors detect the intensity of these color changes, and the system's software analyzes the data to quantify cell viability. This process allows us to determine the drug’s effectiveness by comparing the treated and untreated cells. Additionally, the comparison between different drugs is of the essence. The simplicity and cost-effectiveness of this system makes it suitable for rapid, personalized cancer treatment testing, especially in low-resource settings.
[IMG] Figure 8: CAD rendering of MAIK - Our Microfluidic Absorption Intensity Kit.
Figure 8: CAD rendering of MAIK - Our Microfluidic Absorption Intensity Kit.
## Low-Cost Microfluidics for Personalized Therapy
[IMG] Figure 9: CAD model of our final microfluidic chip design.
Figure 9: CAD model of our final microfluidic chip design.
### Comparing Fabrication Methods
The procedures for both chip production methods and the inoculation of the chips can be found in the following PDF files.
## Click here for PDFs and CAD on Microfluidic Chip Fabrication and Cell Cultivation
#### +
Find out about the methods for cell cultivation and resazurin assay!
Find out about the methods for the microfluidic chip fabrication!
Download the Chip's CAD!
#### Results of Cultivating Cells on the Chips
In our efforts to develop accessible and affordable microfluidic chips for personalized cancer therapy, we compared two fabrication methods: the established polydimethylsiloxane (PDMS) casting process and the less common thermoplastic hot-embossing process using FlexdymTM. The goal was to assess the suitability of these materials for cultivating HT-29 colorectal cancer cells and to determine which method is more cost-effective.
The results show that while both methods supported cell cultivation, HT-29 cells exhibited better growth in the PDMS chips, likely due to PDMS being gas-permeable, allowing better gas exchange compared to the thermoplastic FlexdymTM. Despite this difference, the FlexdymTM thermoplastic material still allowed for adequate cell growth, though further optimization is needed to improve its performance. These adjustments were unfortunately outside the scope of our current project timeline but would be valuable for future iterations.
The iterations that we were able to make within the iGEM competition and with which we were able to achieve a good result can be viewed in the hardware section on our engineering page. Importantly, our tests demonstrated that cells adhered well to the glass bottom of both chip variants over a 24-hour period, with no significant difference in adhesion compared to standard cell culture dishes. This is a promising indicator that either chip could be suitable for larger-scale applications in personalized therapy.
As seen in figure 2, the HT-29 cells were able to adhere within 24 hours, and a cell monolayer began forming at the bottom of the culture vessel. Furthermore, it can be observed that the cells also grew well within the chips. Notably, the PDMS chip exhibited significant cell growth after 24 hours, which could be attributed, on one hand, to a higher number of cells introduced during seeding, as can be inferred from the images taken directly after seeding. On the other hand, it might also be due to the fact that the PDMS chamber could be completely filled, unlike the thermoplastic chips, where a small air gap had to be left at the top of the chamber, since the material is not gas-permeable. Therefore, it is also possible that the cells in the PDMS chip are in better condition than those in the thermoplastic chip, potentially making them more viable. It is worth noting that both chips were incubated with resazurin after microscopic observation and confirmed the cells' viability by a pink color. This also can be seen in figure 2.
Comparing the images further, one can see that the cell culture dish and the thermoplastic chip look quite similar after 24 hours of incubation, likely due to the fact that fewer cells were seeded in these than in the PDMS chip. Additionally, it could also be due to the very favorable conditions for the cells within the PDMS chip.
[IMG] Figure 10: Microscope and smartphone images of a commercially available cell culture dish directly after passaging the HT-29 cells and after 24 hours of incubation, a PDMS chip directly after inoculation with HT-29 cells and after 24 hours of incubation and a thermoplastic chip directly after inoculation with HT-29 cells and after 24 hours of incubation. The last row of images shows the chip chambers after treatment with resazurin to indicate cell viability (pink=living, blue=dead).
Figure 10: Microscope and smartphone images of a commercially available cell culture dish directly after passaging the HT-29 cells and after 24 hours of incubation, a PDMS chip directly after inoculation with HT-29 cells and after 24 hours of incubation and a thermoplastic chip directly after inoculation with HT-29 cells and after 24 hours of incubation. The last row of images shows the chip chambers after treatment with resazurin to indicate cell viability (pink=living, blue=dead).
Furthermore, it is interesting to note that in the PDMS chips it was possible to prove in every experiment that the cells were still alive. With the thermoplastic chips, this could not be proven in every experiment, but only partially in the final design of the chip. This again confirms that cultivation in the thermoplastic chips can work, but still requires some improvements. In addition, as mentioned above, sources of error that cause an uneven design must be eliminated as far as possible. For this observation check figure 3.
[IMG] Figure 11: Microscope and smartphone images of HT-29 cultivations in PDMS and thermoplastic chips. The last row of images shows the chip chambers after treatment with resazurin to indicate cell viability (pink=living, blue=dead).
Figure 11: Microscope and smartphone images of HT-29 cultivations in PDMS and thermoplastic chips. The last row of images shows the chip chambers after treatment with resazurin to indicate cell viability (pink=living, blue=dead).
In order to possibly improve the adhesion of the cells, a slide coated with PDMS was used as the underside of the chip in one of the interaction cycles instead of a plain glass slide. As there was no clear improvement in the adhesion of the cell to PDMS under the microscope compared to glass (see Figure 4), we stayed with the simple glass slide for cost reasons.
There is also no improvement with the thermoplastic chip with PDMS as a base. The cells in Figure 4 are no longer alive or adherent after 24 hours of incubation in the thermoplastic chip on PDMS. This is despite the fact that one might expect a PDMS substrate to improve gas entry into the chip.
[IMG] Figure 12: Microscope and smartphone images of HT-29 cultivations in PDMS and thermoplastic chips.
Figure 12: Microscope and smartphone images of HT-29 cultivations in PDMS and thermoplastic chips.
As the costs of the chips and their cost efficiency have now been addressed more frequently and have only just played a role again, a rough calculation of the material costs is made in the following section.
#### Cost Estimation of the Chips
In terms of cost, our preliminary calculations indicate that the production of thermoplastic chips is generally cheaper than that of PDMS chips, especially when labor costs are factored in. The table below highlights that, while both methods can scale well for larger production, the hourly wages of workers are the largest cost driver. For a clearer comparison, we also calculated the pure material costs for each chip, where thermoplastic chips again proved to be more affordable.
The prices are based on website research ([4], [5]), on averaged values from various sources or on the statements of our advisors. To calculate the quantities, the volumes and materials used were approximated and the physical density of the materials was taken into account.
Microfluidic Chip from PDMS
Microfluidic Chip from FlexDymTM
Mold
5.50 €
891.00 €
Chip Material
6,160.00 €
20.00 €
Glass Slide
50.00 €
Overall Price for 1,000 Chips
6,215.50 €
961.00 €
Overall Price for 1 Chip
6.22 €
0.96 €
Table 2: Cost breakdown and comparison between PDMS manufacturing method and thermoplastic manufacturing method, only looking at the material costs.
While we can only provide material costs, which makes it difficult to directly compare our chip prices with those of other manufacturers, it's still worth noting that our microfluidic chips offer a low-cost, functional environment for cultivating HT-29 cells. Many competitors focus on more complex organ-on-a-chip systems with intricate membrane structures, driving up both complexity and cost, making direct comparisons less relevant. Despite this, our simple chip design proves highly efficient and effective, fitting seamlessly into the MAIK-Box and supporting reliable cell culture at a fraction of the cost.
#### Summary of the Chip Results and Future Improvements
In summary, it can be said that the cells were able to adhere to the glass bottom in both the PDMS chip and the thermoplastic chip and survived a cultivation period of 24 hours. It was noticed that the conditions in the PDMS chips seemed to be more suitable for the HT-29 cells than those in the thermoplastic chips. However, the thermoplastic chips performed better in the cost analysis with a factor of almost 6.5. Furthermore, the manufacturing process of the thermoplastic chips could probably be scaled up more easily. With the PDMS chips, cutting out the chips, which is not an easy task even by hand with a scalpel, could lead to problems in upscaling. For a future with worldwide access to personalized therapies based on microfluidic chips, thermoplastic chips need to be further developed and their production standardized, then thermoplastic chips will provide a reliable and cost-effective cultivation environment for tumor cells.
As already indicated in the previous text, there is still room for improvement in the chips, which will be discussed below.
The thermoplastic chips produced were unfortunately not particularly uniform, as there are many factors that influence the shape of the chips. If, for example, the epoxy mold is not uniformly thick or has uneven edges, the thermoplastic cannot be uniformly thick after pressing either. Random air pockets can also occur in the thermoplastic. For these reasons, it can happen that the thermoplastic around the actual cultivation chamber does not adhere properly to the slide and the medium or cell culture leaks out of the chamber when the chips are inoculated and is drawn under the thermoplastic. There is therefore still room for improvement in the thermoplastic process.
### How We Assess the Scalability of the Manufacturing Processes
Both PDMS casting and thermoplastic hot-embossing have potential for industrial-scale production, given the right equipment. PDMS casting would require substantial infrastructure, including industrial mixers, cooling units for storing excess PDMS, and large vacuum ovens for curing. Upscaling challenges include careful PDMS cutting and the high energy costs associated with storage and curing.
Thermoplastic hot-embossing, while requiring a PDMS mold initially, is more resource-efficient as molds can be reused. Large-scale production would involve pressing thermoplastic material onto molds with industrial hot presses, followed by cutting to size. Both methods would need an assembly line for bonding chips to a glass base for cell culture compatibility.
Thermoplastic hot-embossing offers a more streamlined and cost-effective option due to reusable molds and lower energy demands, though PDMS provides better cell compatibility due to its gas permeability. Ultimately, the choice between the two methods depends on project requirements, but both offer scalable solutions for personalized therapy rapid tests.
## Outlook
Both the microfluidic chips and MAIK are highly modular, making them adaptable for various rapid tests and applications beyond colorectal cancer. The design of the chips can be easily modified to any experimental application, while MAIK can be used for any application using colorimetric assays. The following are examples of how we envision MAIK could be adapted to other applications. If small, affordable sensors are available, multiple measurements could be made by placing the sensors closer together, or a single sensor could scan multiple chambers, increasing the versatility of the system. Of course, the layout of the MAIK box would need to be adapted accordingly. This flexibility significantly increases the potential benefits of the system.
For the future, it is crucial to develop culturable cell lines from patient-derived tumor tissues to fully apply the concept we have proved. This will enable personalized cancer therapy on a broader scale.
MAIK's and the microfluidic chips' cost-effectiveness makes them especially valuable for resource-limited settings, helping democratize access to personalized treatments.
Additionally, MAIK's ability to collect anonymized data could facilitate further research and improve diagnostic accuracy and treatment outcomes over time. Cancer registration systems are an important part of the WHO's cancer control program. In Africa for example, they are used to research the causes of cancer and to identify new risk factors for cancer [2].
With the right infrastructure and support, our concept of a rapid test has the potential to significantly advance personalized cancer therapy on a global scale. It can bridge the gap between cutting-edge research and practical applications in healthcare, ultimately benefiting patient care. As we continue to develop and refine MAIK, our vision is to transform the landscape of cancer treatment, making personalized therapies accessible to all, regardless of geographical or economic barriers.
## References
#### +
- Adeniji, A.A., S. Dulal, and M.G. Martin, Personalized Medicine in Oncology in the Developing World: Barriers and Concepts to Improve Status Quo. World J Oncol, 2021. 12(2-3): p. 50-60. https://doi.org/10.14740/wjon1345.
- Jemal, A., et al., Cancer burden in Africa and opportunities for prevention. Cancer, 2012. 118(18): p. 4372-84. https://doi.org/10.1002/cncr.27410.
- Darja, L., et al., Revisiting the Resazurin-Based Sensing of Cellular Viability: Widening the Application Horizon. Biosensors (Basel), 2022. 196 12(4). https://doi.org/10.3390/bios12040196.
- grubster. Pricing for Stratasys Polyjet VEROCLEAR RGD810. Available from: https://www.grubster.de/3d-filament/stratasys/154265/stratasys-polyjet-veroclear-rgd810-18kg/17l-pack-of-1-fuer-design-j4xx.
- KauPo. Pricing for EPOXACASTTM 690 Clear/1. Available from: https://www.kaupo.de/shop/en/EPOXY-RESIN/EPOXACAST-SERIES/EpoxAcast-690-Clear/EpoxAcast-690-Clear-1-Epoxide-Resin.html?listtype=search&searchparam=epoxacast.
[IMG]
#### Follow Us:
[IMG]
#### Contact:
igem@rwth-aachen.de
© 2024 - Content on this site is licensed under a Creative Commons Attribution 4.0 International license.
The repository used to create this website is available at https://gitlab.igem.org/2024/aachen.
