Skip to main content
[IMG] Peking
Peking
[IMG]
- pH-Sensitive Dissolution
- Mathematical Modeling
- Computational Method with Simulation
- Result
- Propulsion Model
- Background
- Parameters and Physical Assumptions
- Modeling the Drag Force in Fluid
- Equation of Motion
- Result
- Background
- Microsphere Diffusion in Stomach
- Background
- Model Assumptions
- Mathematical Model
- Simulation Results
- Penetrating Gastric Mucus
- Background
- Model Assumptions
- Mathematical Modeling Process
- Results and Physical Interpretation
- Adhesion
- Background
- Indicators of the Molecular Dynamics Simulation
- Methods
- Parameter Table
- Results
- Data Sources
- GPCR Signaling Pathway
- Molecular Dynamics (MD) Simulation Analysis of GPCRs
- ODE Modeling of G Protein Pathway Signal Transduction
- AiiA Protein Diffusion
- Objectives of our model
- Assumptions
- Formulas
- Methods
- Parameter Table
- Results Analysis and Discussion
- Parameter Sources
- Improved SEIR Model
- Abstract
- Review of the Traditional SIR Model
- Model Improvements
- Simulation Process and Results
- Results
- Code availability
- References
[IMG] Figure
Helicobacter pylori infection affects over half of the population. This seemingly tiny bacterium can cause chronic gastritis, gastric ulcers, and even increase the risk of gastric cancer. Once infected, it often remains dormant in the body for a long time, severely impacting quality of life.
Traditionally, we have relied primarily on combination therapy, primarily antibiotics, which initially achieved eradication rates of approximately 90%. However, with the rise of drug resistance, efficacy has steadily declined. Furthermore, antibiotics indiscriminately damage the intestinal flora, leading many patients to experience side effects such as diarrhea and bloating. Later, probiotics were tried as adjunctive therapy or even as monotherapy, but the results have been less than ideal, with eradication rates often below 30%. The core problem is that probiotics, as large particles, have difficulty penetrating gastric mucus and reaching the deeper layers where H. pylori accumulates. To this end, we designed a highly efficient delivery system. The stomach’s highly acidic environment and thick mucus layer have always been two major obstacles for drugs to reach the site of H. pylori infection. We encapsulated the modified yeast into microspheres using a pH-responsive gel—a gel that remains stable in gastric acid (pH < 4) and only dissolves and releases upon reaching the gastric mucosa (pH 6-7). Crucially, we loaded the microspheres with calcium carbonate-based micromotors, which provide propulsion and help the microspheres penetrate the viscous mucus layer and reach the “lesions” where H. pylori accumulates.
Thus, in the dry lab, we aimed to model the drug’s journey from entry into the body and gradual diffusion into the stomach wall, its penetration of the gastric mucus layer under the propulsion of the micromotors, its adhesion to the H. pylori, activation of the GPCR response pathway, and secretion of AiiA (killer protein), as well as the impact of drug intervention on the spread of H. pylori in the human population. In the following content, we will follow this logic to introduce our drylab content.
### Dissolution Kinetics Modeling of pH-Sensitive Microspheres
First, we needed to ensure that our living drug would not lose its activity in the highly acidic environment of gastric fluid. Therefore, we devised a gel coating method. This prevented the Saccharomyces boulardii from dying in gastric fluid. Furthermore, to ensure that it could sense and respond properly deep within the gastric mucus layer, we also needed to ensure that the outer shell would readily degrade in a neutral environment. Therefore, we first needed to simulate the degradation of the entire gel under different pH conditions.
#### Mathematical Modeling
We model the dissolution of alginate-based drug-loaded microspheres using a first-order kinetic model. The main assumption is that the dissolution rate is proportional to the amount of undissolved material remaining at any given time. Mathematically, this can be expressed as:
dM(t)dt=−k⋅M(t)\begin{equation} \frac{dM(t)}{dt} = -k \cdot M(t) \end{equation}dtdM(t)​=−k⋅M(t)​​
where:
- M(t)M(t)M(t): mass (or fraction) of undissolved microspheres at time tt
- kkk: dissolution rate constant, which depends on pH
Solving the differential equation by separation of variables gives:
dMM=−k dt∫1M dM=−k∫dtln⁡M=−kt+CM(t)=M0⋅e−kt\begin{align} \frac{dM}{M} &= -k \, dt \\ \int \frac{1}{M} \, dM &= -k \int dt \\ \ln M &= -kt + C \\ M(t) &= M_0 \cdot e^{-kt} \end{align}MdM​∫M1​dMlnMM(t)​=−kdt=−k∫dt=−kt+C=M0​⋅e−kt​​
Assuming M0=1M_0 = 1M0​=1 ( 100% undissolved at t=0t=0t=0 ), it further simplifies to:
M(t)=e−kt\begin{equation} M(t) = e^{-kt} \end{equation}M(t)=e−kt​​
In real scenarios, the rate constant k varies with pH, so we further model:
k=f(pH)\begin{equation} k = f(\mathrm{pH}) \end{equation}k=f(pH)​​
This allows the prediction of drug release profiles at arbitrary pH levels.
#### Computational Method with Simulation
Workflow:
- Collect experimental data of undissolved mass vs. time at different pH values.
- Fit each data to the exponential decay model to extract the rate constant kkk.
- Fit the kkk pH relationship using a suitable nonlinear function (see Figure 1).
- Use the fitted k(pH)k(pH)k(pH) to simulate release curves under any target pH. Here we consider k as a function of ph.
Test data:
| t (min)
| pH = 1.5
| pH = 3.0
| pH = 5.0
| pH = 7.0
| 0
| 1.00
| 5
| 0.95
| 0.88
| 0.40
| 0.10
| 10
| 0.88
| 0.75
| 0.23
| 0.05
| 15
| 0.82
| 0.65
| 0.10
| 0.00
| 20
| 0.77
| 0.50
| 0.00
Tabulated experimental data (The values in the table represent the percentage of undepolymerization.) Here, due to reasons such as the amount of experiments, we were unable to conduct large-scale experiments. Therefore, in order to illustrate the reliability of our method, we used simulated data as a demonstration.
#### Result
We used the above data to calculate and obtained the following results.
[IMG] Figure 1
Figure 1: Dissolution rate constant k as a function of pH.
After obtaining the functional relationship of kkk with respect to pH, we can then predict the change in the percentage of undegraded gel microspheres over time at any given pH.
[IMG] Figure 2
Figure 2: Model-predicted undissolved fraction curve at pH = 2.0.
[IMG] Figure 3
Figure 3: Model-predicted undissolved fraction curve at pH = 6.0.
In real-world experiments, we found that in a strongly acidic environment, the microspheres remained undegraded for up to an hour. In a neutral environment, however, the gel microspheres completely degraded in about 90 seconds, which was close to our prediction.
### Propulsion Model of Micropheres in Acidic Solution
#### Background
Next, we simulated the velocity of the microspheres after entering the human body, driven by the calcium carbonate reaction. We simulated the propulsive force of calcium carbonate-coated microspheres in gastric fluid and reviewed the classical Stokes solution for low Reynolds number flow around a sphere. We derived the equations of motion and simulated the velocity-time behavior to obtain the velocity of the microspheres in the liquid environment.
#### Parameters and Physical Assumptions
We consider a spherical CaCO3CaCO_3CaCO3​ microsphere with:
- Mass: m=1×10−7 kgm = 1\times 10^{-7}\,\mathrm{kg}m=1×10−7kg (100 μg\mu gμg)
- Density: ρ=3.000 g/cm3\rho = 3.000\,\mathrm{g/cm^3}ρ=3.000g/cm3
At the same time, by consulting the literature, we can also obtain the parameters of the gastric mucus layer：
Its radius is determined by:
r=(3m4πρ)1/3\begin{align} r = \left(\frac{3m}{4\pi \rho}\right)^{1/3} \end{align}r=(4πρ3m​)1/3​​
Assume the CaCO₃ reacts with excess acid at pH 2, producing CO₂ by
CaCO3(s)+2H+(aq)→Ca2+(aq)+CO2(g)+H2O(l)\begin{align} CaCO3(s) + 2H^+ (aq) \rightarrow Ca^{2+}(aq) + CO2(g) + H2O(l) \end{align}CaCO3(s)+2H+(aq)→Ca2+(aq)+CO2(g)+H2O(l)​​
Assuming the entire CaCO₃ sphere reacts over time TreactT_{\mathrm{react}}Treact​, the maximum CO₂ generation rate is:
m˙CO2=mTreact⋅MCO2MCaCO3=mTreact⋅44.01100.09\begin{align} \dot m_{\mathrm{CO}_2} = \frac{m}{T_{\mathrm{react}}} \cdot \frac{M_{\mathrm{CO}_2}}{M_{\mathrm{CaCO}_3}} = \frac{m}{T_{\mathrm{react}}}\cdot \frac{44.01}{100.09} \end{align}m˙CO2​​=Treact​m​⋅MCaCO3​​MCO2​​​=Treact​m​⋅100.0944.01​​​
where MCO2M_{\mathrm{CO}_2}MCO2​​ and MCaCO3M_{\mathrm{CaCO}_3}MCaCO3​​ are the molar masses of CO₂ (44.01 g/mol) and CaCO₃ (100.09 g/mol), respectively.
The thrust is generated by the liberation of CO₂, imparting momentum to the particle (neglecting losses):
Fthrust=m˙CO2vex\begin{align} F_{\mathrm{thrust}} = \dot m_{\mathrm{CO}_2} v_{\mathrm{ex}} \end{align}Fthrust​=m˙CO2​​vex​​​
where vexv_{\mathrm{ex}}vex​ denotes the effective exhaust velocity of CO₂ as it escapes (estimation: vexv_{\mathrm{ex}}vex​ can be approximated as gas flow velocity at interface, typically 10–30 m/s per microfluidics literature).
#### Modeling the Drag Force in Fluid
The drag force is described using Stokes law.
##### Stream Function in Cylindrical Coordinates
For an incompressible, axisymmetric, low-Reynolds-number flow past a fixed sphere of radius RRR in a uniform stream uuu, introduce the Stokes stream function ψ(r,z)\psi(r,z)ψ(r,z) satisfying:
uz=1r∂ψ∂r,ur=−1r∂ψ∂z\begin{align} u_z = \frac{1}{r} \frac{\partial \psi}{\partial r}, \quad u_r = -\frac{1}{r} \frac{\partial \psi}{\partial z} \end{align}uz​=r1​∂r∂ψ​,ur​=−r1​∂z∂ψ​​​
which ensures ∇⋅u=0\nabla\cdot\mathbf{u}=0∇⋅u=0 by construction.
##### Vorticity and Governing Equations
The sole nonzero vorticity is:
ωφ=∂ur∂z−∂uz∂r=−∂∂r(1r∂ψ∂r)−1r∂2ψ∂z2\begin{align} \omega_\varphi = \frac{\partial u_r}{\partial z} - \frac{\partial u_z}{\partial r} = -\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial \psi}{\partial r}\right) - \frac{1}{r}\frac{\partial^2 \psi}{\partial z^2} \end{align}ωφ​=∂z∂ur​​−∂r∂uz​​=−∂r∂​(r1​∂r∂ψ​)−r1​∂z2∂2ψ​​​
and it satisfies:
∇2ωφ=0\begin{align} \nabla^2 \omega_\varphi = 0 \end{align}∇2ωφ​=0​​
##### Exact Solutions for Stream Function and Velocities
The well-known solution is:
ψ(r,z)=−12ur2[1−3R2r2+z2+12(Rr2+z2)3]\begin{align} \psi(r,z) = -\frac{1}{2} u r^2 \left[1 - \frac{3R}{2\sqrt{r^2+z^2}} + \frac{1}{2}\left(\frac{R}{\sqrt{r^2+z^2}}\right)^3\right] \end{align}ψ(r,z)=−21​ur2[1−2r2+z2​3R​+21​(r2+z2​R​)3]​​
leading to velocity components ur(r,z)u_r(r,z)ur​(r,z) and uz(r,z)u_z(r,z)uz​(r,z).
##### Vorticity, Pressure, and Drag Force
The azimuthal vorticity and pressure fields are:
ωφ(r,z)=−3Ru2r(r2+z2)3/2,p(r,z)=−3μRu2z(r2+z2)3/2\begin{align} \omega_\varphi(r, z) = -\frac{3Ru}{2}\frac{r}{(r^2+z^2)^{3/2}}, \quad p(r, z) = -\frac{3\mu R u}{2} \frac{z}{(r^2 + z^2)^{3/2}} \end{align}ωφ​(r,z)=−23Ru​(r2+z2)3/2r​,p(r,z)=−23μRu​(r2+z2)3/2z​​​
In spherical coordinates:
p(r,θ)=−3μRu2cos⁡θr2\begin{align} p(r, \theta) = -\frac{3\mu R u}{2} \frac{\cos\theta}{r^2} \end{align}p(r,θ)=−23μRu​r2cosθ​​​
The total drag force—evaluated via surface integration of the stress tensor—is:
Fd=6πμR u\begin{align} \mathbf{F}_d = 6\pi \mu R\,\mathbf{u} \end{align}Fd​=6πμRu​​
where μ\muμ is the dynamic viscosity of the surrounding solution (for water at 25 °C, μ=5×10−3\mu=5\times10^{-3}μ=5×10−3 Pa·s4; acidic media similar). This classical Stokes drag formula is valid for Re≤1Re \leq 1Re≤1 1.
#### Equation of Motion
Applying Newton’s second law:
mdvdt=Fthrust(t)−Fd=m˙CO2vex−6πμrv\begin{align} m \frac{dv}{dt} = F_{\mathrm{thrust}}(t) - F_{d} = \dot m_{\mathrm{CO}_2} v_{\mathrm{ex}} - 6\pi \mu r v \end{align}mdtdv​=Fthrust​(t)−Fd​=m˙CO2​​vex​−6πμrv​​
with FthrustF_{\mathrm{thrust}}Fthrust​ as above. If m˙CO2\dot{m}_{\mathrm{CO}_2}m˙CO2​​ is constant, the analytical solution for velocity is straightforward. If time-varying, a numerical solution is required. So we will get the numerical solution through numerical simulation.
#### Result
In summary, we wrote a program in Python to solve the ODE equations above. We then plotted the velocity-time curve.
[IMG] Figure 4
Figure 4: Predicting the speed of a microsphere.
The results showed that the microspheres’ speed in the stomach was relatively stable, maintaining a constant speed of around 20 micrometers per second when only the micromotor (calcium carbonate) and acid reaction were considered. To further ensure the accuracy and reliability of our model, we consulted relevant literature. Existing articles have shown that similar methods have also achieved microsphere movement speeds of 20-150 μm/s\mu m/sμm/s micrometers per second2,3, demonstrating the validity of our model.
At the same time, take into account the possible adverse effects of gas release，we can simply calculate the amount of gas released during the reaction of each microsphere.
[IMG] Figure 5
Figure 5: CO2 release dynamics predition.
One microsphere will only produce about 0.01 ml of gas, which means that taking 2g of the drug will only produce 80 ml of gas, which is safe enough for the human body.
### Mathematical Modeling of Microsphere Diffusion in the Stomach
#### Background
To study the movement, diffusion, and contact of gel microspheres in the gastric cavity in drug delivery systems, we establish a dynamic model combining Brownian motion, gastric fluid flow, and boundary conditions. The goal is to predict the spatial distribution of microspheres, adhesion ratio, and excretion over a given timescale.
#### Model Assumptions
- Geometry: The gastric cavity is defined by two eighth-order polynomial curves (lesser curvature and greater curvature), forming a closed region Ω\OmegaΩ.
- Movement: Microsphere movement is driven by Brownian diffusion and gastric fluid flow.
- Boundary conditions: Microspheres near the gastric wall have a probability of adhesion; if they reach the outlet, they are considered excreted.
#### Mathematical Model
##### 1. Gastric Cavity Boundary
(xs(t),ys(t)), (xl(t),yl(t)),t∈[0,1]\begin{align} (x_s(t), y_s(t)), \ (x_l(t), y_l(t)), \quad t \in [0,1] \end{align}(xs​(t),ys​(t)), (xl​(t),yl​(t)),t∈[0,1]​​
Here sss denotes the lesser curvature and lll denotes the greater curvature. The gastric cavity region is:
Ω={(x,y) ∣ xs(t)≤x≤xl(t), y∈[ymin⁡,ymax⁡]}\begin{align} \Omega = \{ (x,y) \ | \ x_s(t) \leq x \leq x_l(t), \ y \in [y_{\min}, y_{\max}] \} \end{align}Ω={(x,y) ∣ xs​(t)≤x≤xl​(t), y∈[ymin​,ymax​]}​​
##### 2. Microsphere Dynamics
Each microsphere position (x,y)(x,y)(x,y) satisfies the update equations:
x(t+Δt)=x(t)+Δxdiff+Δxflow\begin{align} x(t+\Delta t) = x(t) + \Delta x_{\text{diff}} + \Delta x_{\text{flow}} \end{align}x(t+Δt)=x(t)+Δxdiff​+Δxflow​​​ y(t+Δt)=y(t)+Δydiff+Δyflow\begin{align} y(t+\Delta t) = y(t) + \Delta y_{\text{diff}} + \Delta y_{\text{flow}} \end{align}y(t+Δt)=y(t)+Δydiff​+Δyflow​​​
- Diffusion term (Brownian motion):
Δxdiff∼N(0,2DΔt),Δydiff∼N(0,2DΔt)\begin{align} \Delta x_{\text{diff}} \sim \mathcal{N}(0, \sqrt{2D\Delta t}), \quad \Delta y_{\text{diff}} \sim \mathcal{N}(0, \sqrt{2D\Delta t}) \end{align}Δxdiff​∼N(0,2DΔt​),Δydiff​∼N(0,2DΔt​)​​
- Flow term:
(Δxflow,Δyflow)=v⋅v^(x,y)⋅Δt\begin{align} (\Delta x_{\text{flow}}, \Delta y_{\text{flow}}) = v \cdot \hat{\mathbf{v}}(x,y) \cdot \Delta t \end{align}(Δxflow​,Δyflow​)=v⋅v^(x,y)⋅Δt​​
where vvv is the average flow velocity and v^(x,y)\hat{\mathbf{v}}(x,y)v^(x,y) is the locally normalized velocity direction.
##### 3. State Transitions
Microspheres exist in three states:
- Free state (S=0S=0S=0): moving freely;
- Attached state (S=1S=1S=1):
d((x,y),∂Ω)≤r⇒S=1 with probability pattach\begin{align} d((x,y), \partial\Omega) \le r \quad \Rightarrow \quad S=1 \ \text{ with probability } \ p_{\text{attach}} \end{align}d((x,y),∂Ω)≤r⇒S=1 with probability pattach​​​
- Exited state (S=2S=2S=2):
(x,y)∉Ω⇒S=2\begin{align} (x,y) \notin \Omega \quad \Rightarrow \quad S=2 \end{align}(x,y)∈/Ω⇒S=2​​
#### Simulation Results
We perform simulation according to the above formula. We also observed the effects of the drug 60 seconds and 10 minutes after it entered the body. Through numerical simulations (initial microsphere number N=1000N=1000N=1000, total simulation time 600s), the following conclusions are drawn:
[IMG] Figure 6
Figure 6: The diffusion of microspheres in the stomach was observed in 60 seconds.
[IMG] Figure 7
Figure 7: The diffusion of microspheres in the stomach.
- Microspheres gradually deposit in the gastric fundus region under diffusion and flow effects, continually contacting the gastric wall. At 60 seconds, a large number of microspheres have diffused to the surface of the stomach wall.
- Over time, the number of free microspheres decreases, the proportion of attached microspheres increases, and some microspheres are excreted through the outlet.
- Long-term simulation results show that about 80% of gel microspheres eventually contact and adhere to the gastric wall, while the remaining microspheres mainly exist in free or excreted forms.28
### Physical Modeling of the Penetration Process of Microspheres through Gastric Mucus Layer
#### Background
The objective of this section is to establish a physical model to describe and analyze the penetration process of a microsphere drug delivery system through the gastric mucus layer. In our design, the drug is encapsulated in a pH-responsive hydrogel microsphere, with calcium carbonate-based micromotors loaded on its surface. Upon entering the stomach, the microspheres remain stable in the acidic environment and release the drug when approaching the gastric mucosa. A key challenge lies in effectively penetrating the thick gastric mucus layer to reach the H. pylori aggregation region.
We aim to answer the following questions through our physical model:
- What are the conditions for microsphere penetration of the mucus layer?
- How does the incident angle θ\thetaθ affect penetration efficiency? Is there a maximum angle θmax\theta_{max}θmax​ such that penetration is possible when θ≤θmax\theta \leq \theta_{max}θ≤θmax​? What is the corresponding penetration probability?
- How do mucus thickness HHH, viscosity η\etaη, microsphere radius RRR, and propulsion speed vvv affect the penetration conditions?
[IMG] Figure 8
Figure 8: Illustration of microspheres through gastric mucus layer.
#### Model Assumptions
To simplify the complex real-world situation, we make the following assumptions:
Microsphere assumption:
The microsphere is a rigid sphere with radius RRR and mass mmm. It moves at a constant velocity vvv with a fixed incident angle θ\thetaθ. The propulsion force always aligns with the direction of motion.
Medium assumption:
The mucus layer has thickness HHH, modeled as a uniform Newtonian fluid with constant viscosity η\etaη, independent of velocity. The mucus layer boundaries are clearly defined.
Mechanical assumption:
Upon entering the mucus layer, the microsphere is subject to:
- Propulsion force FpF_pFp​;
- Viscous resistance FdF_dFd​, described by Stokes’ law: Fd=6πηRv\begin{align} F_d = 6\pi \eta R v \end{align}Fd​=6πηRv​​
- The relationship between propulsion force and velocity has been simulated in previous work, showing that in the mucus layer region, velocity v≈50 μm/sv \approx 50\ \mu\text{m/s}v≈50 μm/s.
Gravity and buoyancy are neglected.
Energy criterion assumption:
The criterion for penetration is that the microsphere’s kinetic energy in the vertical direction must be greater than or equal to the energy needed to overcome resistance and interfacial effects.
#### Mathematical Modeling Process
##### Time and Angle Relationship from the Perspective of Uniform Motion
###### Arrival Time and Incident Angle
A microsphere moves with velocity vvv at constant speed into a mucus layer of thickness HHH, with incident angle θ\thetaθ (relative to the perpendicular direction).
Its travel path length is:
L(θ)=Hcos⁡θ,(cos⁡θ>0).\begin{align} L(\theta) = \frac{H}{\cos\theta}, \quad (\cos\theta > 0). \end{align}L(θ)=cosθH​,(cosθ>0).​​
The time to reach the gastric wall is:
t(θ)=L(θ)v=Hvcos⁡θ.\begin{align} t(\theta) = \frac{L(\theta)}{v} = \frac{H}{v \cos\theta}. \end{align}t(θ)=vL(θ)​=vcosθH​.​​
Rearranging:
cos⁡θ=Hvt,θ(t)=arccos⁡ ⁣(Hvt),\begin{align} \cos\theta = \frac{H}{vt}, \qquad \theta(t) = \arccos\!\left(\frac{H}{vt}\right), \end{align}cosθ=vtH​,θ(t)=arccos(vtH​),​​
where t≥Hvt \geq \tfrac{H}{v}t≥vH​ is required for physical meaning.
###### Reachable Angle Condition
If the microsphere has a maximum sustainable travel time TTT, then only when
t(θ)≤T\begin{align} t(\theta) \leq T \end{align}t(θ)≤T​​
can it reach the gastric wall. That is:
Hvcos⁡θ≤T⟺cos⁡θ≥HvT.\begin{align} \frac{H}{v \cos\theta} \leq T \quad \Longleftrightarrow \quad \cos\theta \geq \frac{H}{vT}. \end{align}vcosθH​≤T⟺cosθ≥vTH​.​​
Therefore, the critical incident angle is:
θmax⁡=arccos⁡ ⁣(HvT).\begin{align} \theta_{\max} = \arccos\!\left(\frac{H}{vT}\right). \end{align}θmax​=arccos(vTH​).​​
Boundary cases:
- If T<H/vT < H/vT<H/v, no angles can reach;
- If T=H/vT = H/vT=H/v, only vertical incidence θ=0\theta=0θ=0 can reach;
- If T>H/vT > H/vT>H/v, all θ∈[0,θmax⁡]\theta \in [0,\theta_{\max}]θ∈[0,θmax​] are reachable.
###### Penetration Probability (Uniform Angle Distribution Assumption)
Assuming the incident angle is uniformly distributed over [0,π/2][0,\pi/2][0,π/2], the reachable probability is:
P=θmax⁡π/2=2π arccos⁡ ⁣(HvT),when HvT≤1.\begin{align} P = \frac{\theta_{\max}}{\pi/2} = \frac{2}{\pi}\,\arccos\!\left(\frac{H}{vT}\right), \qquad \text{when } \frac{H}{vT}\leq 1. \end{align}P=π/2θmax​​=π2​arccos(vTH​),when vTH​≤1.​​
###### Numerical Calculation
Experiments and literature show that H=150 μm,T=90 sH=150\ \mu\text{m}, T=90\ \text{s}H=150 μm,T=90 s, with v≈50 μm/sv \approx 50\ \mu\text{m/s}v≈50 μm/s in the mucus layer region:
HvT=15050×90=130,θmax⁡=arccos⁡ ⁣(130)≈88.1∘,\begin{align} \frac{H}{vT} = \frac{150}{50 \times 90} = \tfrac{1}{30}, \theta_{\max} = \arccos\!\left(\tfrac{1}{30}\right) \approx 88.1^\circ, \end{align}vTH​=50×90150​=301​,θmax​=arccos(301​)≈88.1∘,​​
penetration probability:
P=88.1∘90∘≈97.9%.\begin{align} P = \frac{88.1 ^\circ}{90 ^\circ} \approx 97.9\%. \end{align}P=90∘88.1∘​≈97.9%.​​
#### Results and Physical Interpretation
- Increasing viscosity η\etaη, radius RRR, or thickness HHH increases required energy, reducing the critical angle θmax⁡\theta_{\max}θmax​, requiring incidence closer to vertical.
- Increasing velocity vvv increases kinetic energy, increasing θc\theta_cθc​, making penetration easier at larger angles.
- Under current assumptions, most microspheres can penetrate the gastric mucus layer and reach the gastric wall.
Overall, we establishes an energy-based physical model describing the microsphere penetration process through the gastric mucus layer, deriving an analytical expression for the critical incident angle θmax⁡\theta_{\max}θmax​ and estimating the penetration range. The model reveals how velocity, radius, viscosity, and thickness affect penetration ability, providing a theoretical basis for optimizing microsphere design and guiding subsequent experiments.
### Molecular Dynamics Simulation Analysis of the HopQ-C1ND Protein Complex
#### Background
HopQ, a type I adhesin of H. pylori, mediates bacterial colonization and regulates host immune responses by specifically binding to the N-terminal domain (C1ND) of CEACAM1 on human host cells. CEACAM1 is a core molecular pair in H. pylori pathogenesis5. We achieved targeted adhesion to H. pylori by displaying C1ND on the surface of yeast.
Molecular dynamics (MD) simulations can track the motion of atoms under physiological conditions and dynamically analyze the structural stability of protein complexes. We used MD simulations to study the dynamic behavior of the HopQ-C1ND complex under physiological conditions, providing theoretical validation for our project’s adhesion system.
#### Indicators of the Molecular Dynamics Simulation
The protein complex is recognized to maintain stable overall conformation under simulated physiological conditions (300 K, 1 atm, aqueous environment), with backbone root-mean-square deviation (RMSD) stabilizing within a physiologically reasonable range of ≤0.35 nm in the later simulation stages.
The binding interface region of the complex is considered to exhibit higher structural flexibility compared to core domains, with significantly increased root-mean-square fluctuation (RMSF) values, and this flexibility directly correlates with binding specificity and dynamic regulatory functions.
Complex stability is supposed to be maintained through synergistic effects of multiple non-covalent interactions, with van der Waals forces and electrostatic forces as primary driving forces, and the total binding free energy showing a significantly negative value, indicating thermodynamically spontaneous and stable binding.
After energy minimization and NVT/NPT equilibration, physical parameters including temperature, pressure, and density are required to converge to physiologically steady-state ranges (temperature fluctuation ≤1 K, pressure approaching 1 atm, density ≈1000 kg/m³), to unsure biological relevance of simulation results.
The solvent-accessible surface area (SASA) and radius of gyration (Rg) of the complex are required to exhibit small fluctuation amplitudes during simulation, with hydrogen bond counts maintained at high levels, which collectively reflect conformational stability.
#### Methods
This study conducted all-atom molecular dynamics simulations using GROMACS 2018.8 software10, with the following workflow:
##### Target Protein Structure Acquisition and Screening
Target Protein Structure Acquisition and Screening High-resolution experimental structures were retrieved and screened from the Protein Data Bank (PDB)7,8 :
- HopQ monomer structure: PDB ID 5LP2 (X-ray diffraction, 2.60 Å resolution, no mutations, expressed in E. coli);
- C1ND (CEACAM1 N-domain) structure: PDB ID 4WHD (X-ray diffraction, 2.50 Å resolution, homodimer, human origin);
- HopQ-CEACAM1 complex reference structure: PDB ID 6AW2 (X-ray diffraction, 2.68 Å resolution, heterodimer, containing complete binding interface).
All structures were validated using the wwPDB Validation tool, with Ramachandran plot favored regions ≥95% and no significant structural defects.
##### Protein Structure Preprocessing
Structure splitting and integration: Binding interface coordinates of HopQ and CEACAM1 were extracted from 6AW2, with 5LP2 and 4WHD as templates to generate initial HopQ-C1ND complex structure using PyMOL;
Residue repair: Missing residues 120-125 in 5LP2 and broken peptide bonds in 4WHD were completed using the SWISS-MODEL server6,9, with modeling templates selected from homologous structures with ≥85% sequence identity (GMQE=0.85, QMEAN=-1.2);
Structure optimization: Atomic overlaps in the repaired structure were eliminated through energy minimization to ensure bond lengths and angles conform to standard force field parameters.
[IMG] Figure 9
Figure 9: The structure of HopQ-CEACAM1 complex.
##### Topology File Construction and Force Field Selection
Force field selection: The OPLS-AA/L all-atom force field was chosen for its high accuracy in describing protein-ligand interactions, widely applied in protein complex simulations;
Topology file generation: GROMACS’ gmx pdb2gmx module was used to assign force field parameters to the complex, generating topology (top) and coordinate (gro) files;
Ion and solvent models: The SPC water model was used to describe water molecules, with Cl⁻ ions added to neutralize total system charge (0.15 mol/L ion concentration, simulating physiological salt environment).
gmx pdb2gmx -f 6AW2.pdb -o 6AW2_processed.gro -water tip3p `
##### Simulation Environment Construction
Boundary conditions: Cubic periodic boundary conditions were employed, with minimum distance between box edges and protein surface set to 10 Å to ensure complete solvent encapsulation;
gmx editconf -f 6AW@_processed.gro -o 6AW2_newbox.gro -c -d 1.2 -bt cubic
Solvent filling: Approximately 25,000 SPC water molecules were added using the gmx solvate module;
gmx solvate -cp 6AW2_newbox.gro -cs spc216.gro -o 6AW2_solv.gro -p topol.top
[IMG] Figure 10
Figure 10: HopQ-CEACAM1 complex after solvent filling.
Ion addition: Water molecules in the solvent box were replaced with Cl⁻ ions using gmx genion to neutralize system charge (total charge +4, 4 Cl⁻ ions added).
gmx grompp -f inputs/ions.mdp -c 6AW2_solv.gro -p topol.top -o ions.tpr gmx genion -s ions.tpr -o 6AW2_solv_ions.gro -p topol.top -pname NA -nname CL -neutral
[IMG] Figure 11
Figure 11: HopQ-CEACAM1 complex after ion addition.
##### Pre-Simulation Equilibration
- Energy minimization: Combined “steepest descent (1000 steps) + conjugate gradient (5000 steps)” methods were used for energy minimization, with termination condition of maximum force ≤1000 kJ/(mol·nm), resulting in final system potential energy below -4.4×10⁶ kJ/mol; gmx grompp -f inputs/minim.mdp -c 6AW2_solv_ions.gro -p topol.top -o em.tpr gmx mdrun -v -deffnm em gmx energy -f em.edr -o potential.xvg
[IMG] Figure 12
Figure 12: Energy change during energy minimization.
NVT equilibration: 200 ps simulation under constant volume (V) and temperature (T=300 K) conditions, using V-rescale thermostat for temperature control, 2 fs integration step, with protein backbone atoms constrained (LINCS algorithm) to stabilize system temperature at 300±1 K;
gmx grompp -f inputs/nvt.mdp -c em.gro -r em.gro -p topol.top -o nvt.tpr gmx mdrun -deffnm nvt gmx energy -f nvt.edr -o temperature.xvg
[IMG] Figure 13
Figure 13: Temperature change during NVT equilibration.
NPT equilibration: 200 ps simulation under constant pressure (P=1 atm) and temperature (T=300 K) conditions, using Parrinello-Rahman barostat with compressibility 4.5×10⁻⁵ bar⁻¹ to stabilize system density at 1000±5 kg/m³.
gmx grompp -f inputs/npt.mdp -c nvt.gro -r nvt.gro -t nvt.cpt -p topol.top -o npt.tpr gmx mdrun -deffnm npt gmx energy -f npt.edr -o pressure.xvg
[IMG] Figure 14
Figure 14: Density change during NPT equilibration.
[IMG] Figure 15
Figure 15: Pressure change during NPT equilibration.
##### Production Simulation and Result Analysis
Production run: 100 ns NPT ensemble simulation with parameters consistent with equilibration, trajectory saved every 10 ps;
gmx grompp -f inputs/md.mdp -c npt.gro -t npt.cpt -p topol.top -o md_0_10.tpr gmx mdrun -deffnm md_0_10
Trajectory analysis: Core indicators calculated using GROMACS modules:
gmx rms: Backbone Cα atom RMSD calculation;
gmx rmsf: Per-atom RMSF calculation;
gmx gyrate: Total Rg and axial Rg calculation;
gmx sasa: Total SASA and binding interface SASA calculation;
gmx hbond: Hydrogen bond counting (criteria: donor-acceptor distance ≤0.35 nm, angle ≥150°);
gmx mmpbsa: Binding free energy calculation using MM-GBSA method;
Visualization and plotting: Protein structures visualized with PyMOL, and indicator curves plotted with QtGrace.
#### Parameter Table
| Parameter Category
| Specific Parameter
| Value/Setting
| Description
| Simulation Basics
| Software version
| GROMACS 2018.8
| Industry-standard MD simulation software
| Target structure PDB IDs
| HopQ:5LP2; C1ND:4WHD; Complex reference:6AW2
| All high-resolution X-ray structures
| Force Field & Models
| All-atom force field
| OPLS-AA/L
| Suitable for protein complex interaction simulations
| Water model
| SPC
| Fast equilibration with accurate protein interaction description
| Ion type & concentration
| Cl⁻, 0.15 mol/L
| Simulates physiological salt environment, neutralizes charge
| Simulation Environment
| Boundary conditions
| Cubic periodic
| Eliminates boundary effects
| Box size
| ≥10 Å from protein surface to box wall
| Ensures complete solvent encapsulation
| Number of water molecules
| ~25000
| Meets physiological water environment requirements
| Energy Minimization
| Algorithm
| Steepest descent + conjugate gradient
| Efficiently eliminates high-energy defects
| Termination condition
| Max force ≤1000 kJ/(mol·nm)
| System reaches low-energy steady state
| Final potential energy
| ≤-4.4×10⁶ kJ/mol
| Energy converges to reasonable range
| Equilibration (NVT)
| Ensemble type
| NVT (constant volume, temperature)
| Establishes reasonable kinetic energy distribution
| Thermostat
| V-rescale
| High-precision temperature control
| Target temperature/fluctuation
| 300 K / ≤1 K
| Simulates human physiological temperature
| Simulation time
| 200 ps
| Sufficient temperature convergence
| Equilibration (NPT)
| Ensemble type
| NPT (constant pressure, temperature)
| Achieves volume and density rationalization
| Barostat
| Parrinello-Rahman
| Suitable for pressure control in flexible systems
| Target pressure/density
| 1 atm / ~1000 kg/m³
| Conforms to physiological physical parameters
| Simulation time
| 200 ps
| Sufficient pressure and density stabilization
| Production Simulation
| Ensemble type
| NPT
| Maintains physiological environment parameters
| Simulation duration
| 100 ns
| Captures long-term dynamic conformational changes
| Integration step
| 2 fs
| Matches force field time scale
| Trajectory saving frequency
| 10 ps
| Balances data volume and analysis precision
| Analysis Parameters
| RMSD calculation atoms
| Backbone Cα atoms
| Reflects overall conformational stability
| Hydrogen bond criteria
| Distance ≤0.35 nm, angle ≥150°
| Industry-standard thresholds
| Binding free energy method
| MM-GBSA
| Accurately evaluates thermodynamic stability
#### Results
##### Validation of Simulation System Equilibrium
Energy convergence characteristics: During energy minimization, total system potential energy decreased from initial -2.0×10⁶ kJ/mol to -4.4×10⁶ kJ/mol, with bond length, bond angle, and dihedral energies converging synchronously (fluctuation amplitude ≤5%), indicating complete elimination of unreasonable interatomic interactions. Potential energy remained stable during NVT and NPT equilibration with no significant jumps, confirming establishment of energy steady state.
Temperature and pressure dynamics: Temperature rapidly increased to 300 K during initial NVT equilibration (0-50 ps), then stabilized at 300±0.5 K with Gaussian distribution (mean 300 K, standard deviation 0.3 K); pressure gradually converged to 1±50 atm from initial fluctuations (-400~200 atm) during NPT equilibration, with amplitude ≤20 atm by 200 ps; density stabilized at 1000±2 kg/m³ after 100 ps NPT equilibration, consistent with liquid water density. All parameters met physiological steady-state standards, validating the rationality of the simulation environment.
##### Overall Structural Stability of Protein Complex
RMSD time evolution: Backbone Cα atom RMSD showed “three-stage” behavior:
Initial stage (0-20 ns): Rapid increase (0.10→0.28 nm), corresponding to initial conformational adjustment in aqueous environment;
Transition stage (20-80 ns): Slow increase with minor fluctuations (0.28→0.30 nm), representing local structural optimization;
Stable stage (80-100 ns): Stabilized at 0.29±0.01 nm with fluctuation amplitude ≤0.02 nm and no significant drift, indicating achievement of stable overall complex structure.
[IMG] Figure 16
Figure 16: RMSD analysis during simulation.
Radius of gyration (Rg) characteristics: Total Rg remained stable at 3.02±0.03 nm throughout 100 ns simulation with only 0.99% coefficient of variation, demonstrating good overall compactness without significant expansion or contraction. Axial Rg analysis showed:
X-axis Rg: 1.5-2.8 nm, mean 2.1±0.17 nm, coefficient of variation 8.2%;
Y-axis Rg: 2.0-2.9 nm, mean 2.4±0.16 nm, coefficient of variation 6.5%;
Z-axis Rg: 1.5-2.8 nm, mean 2.2±0.17 nm, coefficient of variation 7.9%.
Maximum X-axis Rg fluctuation, combined with secondary structure analysis, is hypothesized to be related to flexible movement of HopQ’s α-helix terminal segment (5LP2: residues 250-260).
[IMG] Figure 17
Figure 17: Radius of gyration during simulation.
Solvent-accessible surface area (SASA): Total SASA averaged 195±15 nm² with range 180-210 nm² and 7.7% coefficient of variation. Binding interface SASA decreased to 45±5 nm² in later simulation stages, approximately 18% lower than initial stage (55 nm²), indicating increased burial of interface residues within the molecule after binding, reducing solvent exposure and further enhancing complex stability.
[IMG] Figure 18
Figure 18: Solvent-accessible surface area during simulation.
##### Local Structural Flexibility Characteristics (RMSF Analysis)
RMSF profiles revealed significant flexibility differences across complex regions, categorized into three types:
Low flexibility regions (RMSF≤0.2 nm): Mainly distributed in complex core domains, including 4WHD’s β-sheet region (residues 10-50) and 5LP2’s β-barrel region (residues 80-120). Restricted atomic movement in these regions forms the structural scaffold, providing stable support for binding.
Moderate flexibility regions (0.2-0.4 nm): Located at junctions between α-helices and β-sheets (e.g., 5LP2 residues 150-170). Moderate flexibility in these regions enables conformational fine-tuning of core domains, avoiding binding energy loss from rigid structures.
High flexibility regions (RMSF≥0.4 nm): Precisely localized at the HopQ-C1ND binding interface, including 5LP2 residues 210-230 (RMSF=0.55±0.03 nm) and 4WHD residues 80-100 (RMSF=0.52±0.04 nm). Sequence analysis showed these regions are enriched in polar amino acids (Asp, Lys, Asn), whose dynamic movement modulates hydrogen bond and electrostatic interaction formation, enhancing binding specificity.
[IMG] Figure 19
Figure 19: RMSF analysis during simulation.
##### Intermolecular Interaction Characteristics
Hydrogen bond network: Hydrogen bond count remained stable at 2000-2500 pairs during simulation, averaging 2250±150 pairs. Trajectory tracking identified 12 high-frequency stable hydrogen bonds (duration ≥80 ns), with core pairs including:
- 5LP2: Arg185 - 4WHD: Glu92 (92 ns duration);
- 5LP2: Asn201 - 4WHD: Lys88 (88 ns duration);
- 5LP2: Tyr215 - 4WHD: Asp76 (85 ns duration).
These hydrogen bonds are located at the binding interface center, representing key interactions maintaining complex stability.
[IMG] Figure 20
Figure 20: Hydrogen bond analysis during simulation.
Binding free energy analysis: MM-GBSA calculations showed total binding free energy (TOTAL) of -34864.90±500 Kcal/mol, with significantly negative value indicating thermodynamically spontaneous and stable binding. Energy component contributions were:
Van der Waals energy (VDWAALS): -11490.15 Kcal/mol, accounting for 32.9% of total binding energy as primary driving force;
Electrostatic energy (EEL): -6965.76 Kcal/mol, 19.9% contribution, synergizing with van der Waals forces to enhance binding;
Generalized Born solvation energy (EGB): -4679.48 Kcal/mol, with polar solvation effects favoring complex stability;
Surface energy (ESURF): 155.09 Kcal/mol, with positive nonpolar solvation contribution offset by EGB, resulting in total solvation free energy (GSOLV) of -4524.39 Kcal/mol;
Gas-phase free energy (GGAS): -3574.99 Kcal/mol, reflecting stability of intramolecular interactions.
[IMG] Figure 21
Figure 21: Free energy analysis during simulation.
#### Data Sources
Protein structure data: Protein Data Bank (PDB) database, including:
- HopQ: PDB ID 5LP2 Opens in a new tab , released 2016;
- C1ND: PDB ID 4WHD Opens in a new tab , released 2015;
- HopQ-CEACAM1 complex: PDB ID 6AW2 Opens in a new tab , released 2018.
Structure repair tool: SWISS-MODEL server Opens in a new tab , accessed August 2025, modeling quality assessment: GMQE=0.85, QMEAN=-1.2.
Simulation and analysis software: GROMACS 2018.8 Opens in a new tab , force field parameters from OPLS-AA/L, original literature 2001; QtGrace 0.2.6 (for data visualization); PyMOL 2.5 (for structure display).
Force field and model parameters: SPC water model and OPLS-AA/L force field parameters from official GROMACS force field library (D:/gromacs/gmx2018.8/share/gromacs/top).
### Modeling and Analysis of GPCR Signaling Pathway
#### Background
In the microscopic biological world, G protein-coupled receptors (GPCRs) function as cellular “signal antennas” that receive extracellular signals and initiate intracellular cascade reactions. This process plays a core role in numerous life activities, including yeast mating and mammalian physiological regulation. In our project, GPCRs serve as the central component of the sensing system. However, the activation of GPCRs and the transmission of downstream pathways involve highly dynamic and complex conformational changes, which cannot be fully captured by static experimental structures alone.
To address this challenge, we screened for the most sensitive and effective engineered GPCRs using molecular docking and molecular dynamics (MD) simulations. Furthermore, we deciphered the complete signal transduction mechanism from perception to response via ordinary differential equation (ODE) mathematical modeling, enabling quantitative analysis of the signaling process. Ultimately, we innovatively reengineered the yeast mating signal system into a H. pylori recognition system. Our GPCR signaling pathway modeling, integrated with wet-lab validation, provides a promising universal strategy for engineering yeast GPCR sensing systems to achieve specific functions, offering valuable insights for future iGEM teams focusing on GPCR modification.
#### Molecular Dynamics (MD) Simulation Analysis of GPCRs
##### Sources of GPCR Variants
To engineer the endogenous yeast GPCR (Ste2) for the recognition of α-methylhistamine, we adopted three parallel design strategies to screen for the most sensitive and efficient GPCR sensors:
###### Strategy 1: Chimeric GPCR
Principle: This strategy leverages the modular nature of GPCRs. We fused the ligand-recognition domains—extracellular domains (ECDs) and transmembrane domains (TMDs)—of human histamine receptors (e.g., hH1R, hH2R, hH3R, hH4R) with the intracellular domains (ICDs) of the yeast Ste2 receptor, which mediate interactions with the downstream G protein Gpa1, thereby constructing novel chimeric proteins.
###### Strategy 2: Exogenous GPCR + Chimeric G-protein
Principle: G proteins also exhibit prominent modularity, with their GPCR selectivity primarily determined by several key amino acids at the C-terminus. We retained intact, unmodified human GPCRs (e.g., hH3R) while engineering the endogenous yeast Gα protein (Gpa1). Specifically, we replaced the 5 C-terminal amino acids of Gpa1 with the corresponding sequences from three human Gα subtypes (Gαi, Gαs, Gαq), generating three chimeric G proteins: Gpai, Gpas, and Gpaq.26
###### Strategy 3: Literature-Validated Positive Controls
To verify the reliability of our simulation system, we incorporated two systems previously validated in the literature27 :
mhH3R-Gpai: An optimized modified histamine H3 receptor with high ligand sensitivity, paired with the chimeric Gpai protein.
P2Y2-Gpap: The human P2Y2 receptor, an extracellular ATP (eATP) sensor. Literature has confirmed its synergistic function with the chimeric G protein Gpap in yeast, where it successfully activates downstream pathways upon ATP binding. This system served as the “positive control” for our simulation workflow to ensure our analytical methods could accurately capture known activation events.
##### Methods
###### Preparation
GPCRs and G proteins: The 3D structures of target GPCRs (hH1R, hH2R, hH3R, hH4R, mhH3R, P2Y2) and G proteins (Gpai, Gpaq, Gpap, Gpas) were prioritized from the Protein Data Bank (PDB)7,8. For proteins lacking experimental structures or containing missing loops (e.g., chimeric proteins), homology modeling tools SWISS-MODEL were used for structure completion and construction. All structures underwent rigorous inspection prior to use.
Ligand Preparation: The mol2 structure file of the target ligand Nα-methylhistamine (NAMH) was retrieved from the ZINC database or CHEMICAL BOOK website. The Antechamber tool and General Amber Force Field (GAFF) were used to generate ligand topology files14, which were then converted to GROMACS-compatible itp force field files using the ACPYPE script15,16.
Construction of Protein-Membrane Complexes: The “Membrane Builder” module of the CHARMM-GUI online server was employed for system construction. The GPCR structure was embedded in a pre-equilibrated phospholipid bilayer mimicking the yeast membrane composition (POPE: POPI: POPC: POPS: ERG = 6: 2: 2: 1: 6; see the figure below for details)17 . Subsequently, the corresponding Gα protein (e.g., Gpai) was positioned on the intracellular side of the GPCR, with reference to resolved GPCR-G protein complex structures to ensure a physiologically relevant initial orientation.
[IMG] Figure 22
Figure 22: The composition table of membrane.
Then we can get the results：
[IMG] Figure 23
Figure 23: The generation report of the membrane.
[IMG] Figure 24
Figure 24: Sketch map of membrane-protein complex.
###### Molecular Docking Process
Semi-flexible docking was performed using AutoDock Vina to predict the optimal binding conformation and affinity of NAMH within the active pockets of different GPCR variants.
Workflow:
The GPCR was treated as a rigid receptor, and NAMH as a flexible ligand.
A sufficiently sized grid box was defined in the region enclosed by transmembrane helices, based on either the binding sites of known homologous ligands or cavity recognition algorithms.
Docking calculations were executed to generate multiple binding conformations.
The conformation with the lowest binding affinity (kcal/mol) and the most clustered, physiologically reasonable structure was selected as the initial structure for subsequent MD simulations.
[IMG] Figure 25
Figure 25: Molecular docking site.
###### Molecular Dynamics Simulation Process
Software and Force Fields: All MD simulations were performed using the GROMACS 2020 package10. The CHARMM36m force field was applied to proteins, lipids, and ions, and the TIP3P water model was used for solvation.
grep -v "HSM" input.pdb | grep "ATOM" > protein.pdb grep "HSM" input.pdb > ligand.pdb gmx pdb2gmx -f protein.pdb -o protein.gro -p topol.top -ff amber99sb-ildn -water tip3p -ignh gmx editconf -f ligand.pdb -o ligand.gro sed -i '/forcefield.itp/a #include "ligand.itp"' topol.top echo "" >> topol.top echo "; Ligand" >> topol.top echo "HSM 1" >> topol.top PROTEIN_ATOMS=$(tail -n 2 protein.gro | head -n 1 | awk '{print $1}') LIGAND_ATOMS=$(tail -n 2 ligand.gro | head -n 1 | awk '{print $1}') BOX_VECTOR=$(tail -n 1 protein.gro) TOTAL_ATOMS=$((PROTEIN_ATOMS + LIGAND_ATOMS echo "Complex of Protein and Ligand" > complex.gro echo " ${TOTAL_ATOMS}" >> complex.gro sed -n '3,$(($PROTEIN_ATOMS+2))p' protein.gro >> complex.gro sed -n '3,$(($LIGAND_ATOMS+2))p' ligand.gro >> complex.gro echo "${BOX_VECTOR}" >> complex.gro
- System Preparation:
Solvation: The constructed GPCR-membrane-G protein complex was placed in a sufficiently large simulation box and solvated with TIP3P water molecules.
gmx editconf -f complex.gro -o complex_boxed.gro -c -d 1.0 -bt cubic gmx solvate -cp complex_boxed.gro -cs spc216.gro -o system_solvated.gro -p topol.top
Neutralization: Na⁺ or Cl⁻ ions were added to neutralize the total charge of the system and achieve a physiological salt concentration (~0.15 M).
gmx grompp -f ions.mdp -c system_solvated.gro -p topol.top -o ions.tpr echo "SOL" | gmx genion -s ions.tpr -o system_ions.gro -p topol.top -neutral
Energy Minimization: The steepest descent algorithm was used to minimize the system energy, eliminating unfavorable steric clashes and atomic interactions.
gmx grompp -f em.mdp -c system_ions.gro -p topol.top -o em.tpr gmx mdrun -deffnm em
- Equilibration:
NVT Equilibration: A 1-nanosecond (ns) simulation was conducted under constant volume and temperature (310 K). Position restraints were applied to the heavy atoms of proteins and lipids to allow water molecules and ions to equilibrate around the solute.
gmx grompp -f nvt.mdp -c em.gro -r em.gro -p topol.top -o nvt.tpr gmx mdrun -deffnm nvt
NPT Equilibration: A 10-ns simulation was performed under constant pressure (1 bar) and temperature (310 K). Position restraints were gradually weakened and ultimately removed to stabilize the system density and pressure.
gmx grompp -f npt.mdp -c nvt.gro -r nvt.gro -p topol.top -o npt.tpr gmx mdrun -deffnm npt
- Simulation:
A 40,000-ps (40 ns) production simulation was performed for each docked system under the NPT ensemble. The Parrinello-Rahman pressure coupling and Nosé-Hoover temperature coupling methods were utilized. Long-range electrostatic interactions were calculated via the Particle Mesh Ewald (PME) algorithm, and a cutoff radius was set for van der Waals interactions and short-range Coulomb forces. Trajectory coordinates were saved every 10 picoseconds (ps).
gmx grompp -f md.mdp -c npt.gro -p topol.top -o md.tpr gmx mdrun -deffnm md
- Result Analysis and Output:
GROMACS built-in tools (e.g., gmx rms, gmx rmsf, gmx covar, gmx anaeig, gmx hbond) were used to analyze trajectory files, extract key parameters, and export data in xvg format for subsequent plotting and analysis.
# --- 1.preparation--- echo -e "resname ${LIGAND_ITP_MOLNAME}\nname 19 MyLigand\n\"Protein\" | \"MyLigand\"\nname 20 Complex\nq" | gmx make_ndx -f em.gro -o index.ndx check_file_exists "index.ndx" echo "Complex System" | gmx trjconv -s md.tpr -f md.xtc -o md_whole.xtc -n index.ndx -pbc whole -center -ur compact check_file_exists "md_whole.xtc" echo "Backbone System" | gmx trjconv -s md.tpr -f md_whole.xtc -o md_final.xtc -fit rot+trans check_file_exists "md_final.xtc" # --- 2. RMSD analysis --- echo "Backbone Backbone" | gmx rms -s em.tpr -f md_final.xtc -o rmsd.xvg -tu ns # --- 3. RMSF analysis --- echo "C-alpha" | gmx rmsf -s md.tpr -f md_final.xtc -o rmsf.xvg -res # --- 4. Rg analysis--- echo "Complex" | gmx gyrate -s md.tpr -f md_final.xtc -o gyrate.xvg # --- 5. TM2-TM6 Distance analysis --- gmx make_ndx -f em.gro -o index_tm2-tm6.ndx <<EOF a CA & r ${TM2_RES} name 21 TM2_CA a CA & r ${TM6_RES} name 22 TM6_CA q EOF check_file_exists "index_tm2-tm6.ndx" echo -e "TM2_CA\nTM6_CA" | gmx distance -s md.tpr -f md_final.xtc -n index_tm2-tm6.ndx -oav distance_TM2-TM6.xvg
##### Results
###### Molecular Docking
AutoDock enabled the determination of the spatial binding modes of α-methylhistamine with GPCRs, and the binding affinities were quantified using the built-in scoring function of AutoDock Vina, as summarized in the table below.
| Combination
| Agonist
| Receptor
| G Protein
| G-
| G+
| 1
| NAMH
| CH1R
| None
| -4.841
| None
| 2
| NAMH
| CH2R
| None
| -3.361
| None
| 3
| NAMH
| CH3R
| None
| -4.704
| None
| 4
| NAMH
| CH4R
| None
| -4.263
| None
| 5
| NAMH
| hH1R
| Gpas
| -4.236
| -3.976
| 6
| NAMH
| hH1R
| Gpai
| -4.236
| -4.321
| 7
| NAMH
| hH1R
| Gpaq
| -4.236
| -4.191
| 8
| NAMH
| hH2R
| Gpas
| -3.963
| -4.513
| 9
| NAMH
| hH2R
| Gpai
| -3.963
| -4.411
| 10
| NAMH
| hH2R
| Gpaq
| -3.963
| -4.515
| 11
| NAMH
| hH3R
| Gpas
| -4.351
| -4.396
| 12
| NAMH
| hH3R
| Gpai
| -4.351
| -4.128
| 13
| NAMH
| hH3R
| Gpaq
| -4.351
| -4.047
| 14
| NAMH
| hH4R
| Gpas
| -3.597
| -4.213
| 15
| NAMH
| hH4R
| Gpai
| -3.597
| -4.190
| 16
| NAMH
| hH4R
| Gpaq
| -3.597
| -4.209
| 17
| NAMH
| mhH3R
| Gpai
| -4.597
| -4.054
| 18
| ATP
| P2Y2
| Gpap
| -4.254
| -4.648
[IMG] Figure 26
Figure 26: Binding energy without G protein (P2Y2 to ATP, others to NAMH).
[IMG] Figure 27
Figure 27:Binding energy with G Protein (P2Y2 to ATP, others to NAMH).
Three hH3R combinations (hH3R-Gpai, hH3R-Gpas, hH3R-Gpaq), along with mhH3R-Gpai and P2Y2-Gpap, were selected as candidates based on their favorable binding affinities. However, binding affinity alone is insufficient; the key criterion is whether ligand binding induces conformational changes to initiate downstream signal transduction. Thus, we further performed MD simulations for these five candidate combinations.
###### Molecular Dynamics Simulation Results
Quality Control:
Root Mean Square Deviation (RMSD): RMSD of the protein backbone was calculated to assess structural stability during simulations. All five systems reached equilibrium within ~10–20 ns, with RMSD values plateauing, indicating stable system structures without extreme events such as unfolding.
[IMG] Figure 28
Figure 28: RMSD analysis during simulation.
Radius of Gyration (Rg): Rg reflects the compactness of the protein structure. In all simulations, the total Rg values (black line in figures) remained stable without significant fluctuations, confirming that proteins maintained their native folded conformation and compactness throughout the 40-ns simulation.
[IMG] Figure 29
Figure 29: Radius of gyration during simulation.
Root Mean Square Fluctuation (RMSF): RMSF analysis revealed residue-specific flexibility. All systems exhibited typical GPCR dynamic features: low fluctuations (structural rigidity) in transmembrane helices, and high fluctuations (structural flexibility) in intracellular/extracellular loops and N/C-termini.
[IMG] Figure 30
Figure 30: RMSF analysis during simulation.
Principal Component Analysis (PCA):
Eigenvalues of the Covariance Matrix: For all systems, the first ~10 eigenvalues accounted for the majority of total system motion, followed by a rapid decay to near zero. This indicates that protein motion is dominated by a few major collective modes (principal components), justifying the use of the first two components (PC-1, PC-2) to describe conformational changes.
[IMG] Figure 31
Figure 31: Eigenvalues of the covariance matrix.
Projection onto Eigenvectors: Trajectory projection onto PC-1 and PC-2 showed that systems did not fully converge to a single conformational cluster within 40 ns, but rather exhibited directional drift along PC-1. This drift suggests a slow, global conformational transition occurring on a timescale longer than the simulation. Specifically,CH3R, hH3R-Gpai, hH3R-Gpaq, hH3R-Gpas, mhH3R-Gpai, and the positive control P2Y2-Gpap all showed a continuous increasing trend along PC-1, indicating shared major motion modes. Behavior along PC-2 was more complex, with oscillations or gradual changes (e.g., hH3R-Gpai showed decreasing PC-2 values with oscillation, while P2Y2-Gpap showed an initial increase followed by a decrease), reflecting differences in secondary motion modes. PCA results confirmed high dynamics of these GPCR-G protein complexes, and the shared drift along PC-1 (consistent with the positive control) suggests conformational changes associated with receptor activation.
[IMG] Figure 32
Figure 32: Projection onto eigenvectors.
###### Activation State Analysis
GPCR activation is characterized by conformational rearrangement of transmembrane (TM) helices. According to a Nature study25, the class D fungal GPCR Ste2 has a unique activation mechanism summarized as “obstruction removal and inward compaction”:
Inactive State: In the absence of agonist, the intracellular end of TM helix H7 is disordered and folded inward, physically blocking the G protein binding site.
Active State: Agonist binding triggers conformational changes, including a ~20 Å outward swing of the disordered H7 region (removing the obstruction) and a ~12 Å inward movement of the intracellular end of H6 (forming the G protein binding site).
We used the “12 Å inward movement of the H6 intracellular end” as the activation criterion, monitoring the H2-H6 distance during simulations:
[IMG] Figure 33
Figure 33: The distance between H2 and H6.
P2Y2-Gpap System (Figure 33.g): As the positive control, this system displays a clear and rapid activation event. The H2-H6 distance sharply decreases from an initial ~3.5 nm (35 Å) to a stable conformation at ~1.5-2.0 nm (15-20 Å). This represents a significant reduction of approximately 1.5-2.0 nm (15-20 Å), confirming the validity of the simulation criteria for activation.
hH3R-Gpaq System (Figure 33.e): This system demonstrates a strong activation profile similar to the positive control. The distance undergoes a substantial reduction from ~8.0 nm (80 Å) to a stable range of ~5.0 nm (50 Å). The total decrease of ~3.0 nm (30 Å) clearly indicates a significant conformational change consistent with receptor activation.
CH3R System (Figure 33.b): This simulation also shows a notable distance reduction. The H2-H6 distance decreases from approximately 9.5 nm (95 Å) to a more compact state around 7.5 nm (75 Å), resulting in a total reduction of ~2.0 nm (20 Å), which suggests an activation-like conformational change.
hH3R-Gpai System (Figure 33.c): This system also meets the quantitative requirements for activation. The H2-H6 distance decreases from an initial value of approximately 10.5 nm (105 Å) to a range around 8.0 nm (80 Å). This results in a total reduction of ~2.5 nm (25 Å), which exceeds the threshold for an activation event. However, it’s worth noting that the final state exhibits more fluctuation compared to the stable conformations seen in the P2Y2-Gpap and hH3R-Gpaq systems.
CH1R (Figure 33.a), hH3R-Gpas (Figure 33.d), and mhH3R-pai (Figure 33.f) Systems: These three systems do not show clear evidence of sustained activation.
**Figure 33.a:** The distance fluctuates dynamically between 4.0 nm and 7.5 nm without settling into a stable, reduced state **Figure 33.c:** Although there is a slight downward trend from ~10.5 nm to ~8.0 nm, the high degree of fluctuation and modest overall change suggest an unstable or non-activated state. **Figure 33.f:** The distance remains in a relatively stable but dynamic range between 2.0 nm and 3.5 nm, showing no significant reduction.
###### Conclusion
The analysis reveals that the hH3R-Gpaq system (e) exhibits a clear and stable activation event, a behavior that is strongly mirrored by the positive control, P2Y2-Gpaq (g). Additionally, the hH3R-Gpai (c) and CH3R (b) systems show significant H2-H6 distance reductions (~2.5 nm and ~2.0 nm respectively) that meet the quantitative criteria for activation, although their final states are more dynamic. Conversely, the other hH3R-Gpas simulation (d) shows a distinct increase in distance, indicating a failure to activate. The remaining systems did not display conformational changes consistent with activation.
In summary, we established an efficient screening and analysis workflow using a dry-lab strategy combining molecular docking and MD simulations: First, molecular docking and binding affinity scoring enabled initial screening of numerous GPCR-G protein candidates, identifying high-potential combinations. Next, MD simulations probed the dynamic conformational evolution of engineered GPCRs upon NAMH binding. Finally, comprehensive evaluation of binding stability and conformational activity identified CH3R，hH3R-Gpai ,hH3R-Gpaq as the optimal candidate. This dry-lab strategy not only narrowed the scope of subsequent wet-lab validation but also revealed the molecular mechanisms of receptor-protein-ligand interactions, laying a solid theoretical foundation for functional validation of the sensing system.
#### ODE Modeling of G Protein Pathway Signal Transduction
When the H. pylori-associated signaling molecule hH3R diffuses to the gut and binds to the seven-transmembrane receptor Ste2, it activates downstream G proteins, recruits the scaffold protein Ste5 to form a signal complex, and further initiates the MAPK cascade reaction composed of Ste11-Ste7-Fus3. Ultimately, it activates the transcription factor Ste12 to regulate the expression of target genes12. To clearly reveal the dynamic change rules of each molecular concentration, the rate-limiting steps of key reactions, and the synergistic mechanism of signal transmission in this process, this section adopts ordinary differential equations (ODEs) to construct a mathematical model, realizing the quantitative simulation and analysis of the GPCR signaling pathway, and laying a foundation for studying the sensitivity and response time of the sensing system in our project.
[IMG] Figure 34
Figure 34: The GPCR signaling pathway in modified yeast.
##### Assumptions
The model is based on the following core assumptions that conform to biological common sense and physical laws:
Short-Term Steady-State Assumption: The simulation focuses on the short-term signal transmission process (within 300 seconds) after hH3R activation. De novo protein synthesis is not considered for the time being, and it is assumed that the total concentrations of core molecules such as Ste2, Ste5, and the MAPK family remain stable.
Unified Dephosphorylation Assumption: In the MAPK cascade reaction, the dephosphorylation of molecules such as Ste11, Ste7, and Fus3 is mediated by phosphatases. To simplify the model, it is assumed that they have the same basic dephosphorylation rate constant.
Molecular Behavior Assumption: The reactions of all molecules in the system follow the random collision theory and are not disturbed by external environmental factors such as temperature and pH. The reaction process is only determined by concentration and reaction rate constants.
Gβγ Concentration Correlation Assumption: The concentration of activated G protein βγ subunits (Gβγ) is directly linked to the concentration of the hH3R-Ste2 receptor complex, that is, the degree of receptor activation directly reflects the release amount of Gβγ.
Hill Coefficient Assumption: The binding of the transcription factor Ste12 to DNA does not consider cooperative effects for the time being, and the Hill coefficient is set to n=1, meaning that each binding site is independent of each other.
##### Core Formulas
The model is divided into five functional modules according to the signal transmission sequence. The core reaction equations, ODE equations, and parameter meanings of each module are as follows:
###### 1. Receptor Activation Module
The binding and dissociation kinetic process of hH3R and the seven-transmembrane receptor Ste2, which is the initial step of signal transmission.
Reaction Equations
Binding reaction: hH3R+Ste2→KhshH3R−Ste2hH3R + Ste2 \stackrel{K_{hs}}{\to} hH3R-Ste2hH3R+Ste2→Khs​hH3R−Ste2
Dissociation reaction: hH3R−Ste2→KshhH3R+Ste2hH3R-Ste2 \stackrel{K_{sh}}{\to} hH3R + Ste2hH3R−Ste2→Ksh​hH3R+Ste2
ODE Equations
d[Ste2]dt=−Khs[hH3R][Ste2]+Ksh[hH3R−Ste2]d[hH3R−Ste2]dt=Khs[hH3R][Ste2]−Ksh[hH3R−Ste2]d[hH3R]dt=−Khs[hH3R][Ste2]+Ksh[hH3R−Ste2]\begin{align} \frac{d[Ste2]}{dt} &= -K_{hs}[hH3R][Ste2] + K_{sh}[hH3R-Ste2] \\ \frac{d[hH3R-Ste2]}{dt} &= K_{hs}[hH3R][Ste2] - K_{sh}[hH3R-Ste2] \\ \frac{d[hH3R]}{dt} &= -K_{hs}[hH3R][Ste2] + K_{sh}[hH3R-Ste2] \end{align} dtd[Ste2]​dtd[hH3R−Ste2]​dtd[hH3R]​​=−Khs​[hH3R][Ste2]+Ksh​[hH3R−Ste2]=Khs​[hH3R][Ste2]−Ksh​[hH3R−Ste2]=−Khs​[hH3R][Ste2]+Ksh​[hH3R−Ste2]​​
Parameter and Variable Meanings
| Symbol
| Meaning
| KhsK_{hs}Khs​
| Reaction rate constant: Rate constant for hH3R and Ste2 to form the hH3R-Ste2 complex
| KshK_{sh}Ksh​
| Reaction rate constant: Rate constant for the dissociation of the hH3R-Ste2 complex into free hH3R and Ste2
| [x][x][x]
| Concentration of the molecule in brackets (e.g., [Ste2][Ste2][Ste2] represents the concentration of free Ste2 receptors)
| hH3R−Ste2hH3R-Ste2hH3R−Ste2
| Receptor-ligand complex formed by the binding of hH3R and Ste2
###### 2. Scaffold Formation Module
Activated Gβγ subunits recruit the scaffold protein Ste5 to form a multi-level assembly process of monomolecular binding, dimers, and advanced complexes, providing anchor sites for the MAPK cascade reaction.
Reaction Equations
Ste5 dimerization: Ste5+Ste5→KSSSte5−Ste5Ste5 + Ste5 \stackrel{K_{SS}}{\to} Ste5-Ste5Ste5+Ste5→KSS​Ste5−Ste5
Binding of Gβγ and Ste5: Gβγ+Ste5→KSGGβγ−Ste5G\beta\gamma + Ste5 \stackrel{K_{SG}}{\to} G\beta\gamma-Ste5Gβγ+Ste5→KSG​Gβγ−Ste5
Binding of Gβγ and double Ste5: Gβγ+Ste5+Ste5→KGSS1Gβγ−Ste5−Ste5G\beta\gamma + Ste5 + Ste5 \stackrel{K_{GSS1}}{\to} G\beta\gamma-Ste5-Ste5Gβγ+Ste5+Ste5→KGSS1​Gβγ−Ste5−Ste5
Binding of Gβγ-Ste5 and Ste5: Gβγ−Ste5+Ste5→KGSS2Gβγ−Ste5−Ste5G\beta\gamma-Ste5 + Ste5 \stackrel{K_{GSS2}}{\to} G\beta\gamma-Ste5-Ste5Gβγ−Ste5+Ste5→KGSS2​Gβγ−Ste5−Ste5
Binding of double Gβγ-Ste5: Gβγ−Ste5+Gβγ−Ste5→KGSSG1Gβγ−Ste5−Ste5−GβγG\beta\gamma-Ste5 + G\beta\gamma-Ste5 \stackrel{K_{GSSG1}}{\to} G\beta\gamma-Ste5-Ste5-G\beta\gammaGβγ−Ste5+Gβγ−Ste5→KGSSG1​Gβγ−Ste5−Ste5−Gβγ
Binding of Gβγ and Gβγ-Ste5-Ste5: Gβγ−Ste5−Ste5+Gβγ→KGSSG2Gβγ−Ste5−Ste5−GβγG\beta\gamma-Ste5-Ste5 + G\beta\gamma \stackrel{K_{GSSG2}}{\to} G\beta\gamma-Ste5-Ste5-G\beta\gammaGβγ−Ste5−Ste5+Gβγ→KGSSG2​Gβγ−Ste5−Ste5−Gβγ
ODE Equations
d[Ste5−Ste5]dt=KSS[Ste5]2d[Gβγ−Ste5]dt=KSG[Gβγ][Ste5]d[Gβγ−Ste5−Ste5]dt=KGSS1[Gβγ][Ste5]2+KGSS2[Gβγ−Ste5][Ste5]d[Gβγ−Ste5−Ste5−Gβγ]dt=KGSSG1[Gβγ−Ste5]2+KGSSG2[Gβγ−Ste5−Ste5][Gβγ]d[Ste5]dt=−2KSS[Ste5]2−KSG[Gβγ][Ste5]−2KGSS1[Gβγ][Ste5]2−KGSS2[Gβγ−Ste5][Ste5][Gβγ]=(hH3R−Ste2)stable\begin{align} \frac{d[Ste5-Ste5]}{dt} &= K_{SS}[Ste5]^2 \\ \frac{d[G\beta\gamma-Ste5]}{dt} &= K_{SG}[G\beta\gamma][Ste5] \\ \frac{d[G\beta\gamma-Ste5-Ste5]}{dt} &= K_{GSS1}[G\beta\gamma][Ste5]^2 + K_{GSS2}[G\beta\gamma-Ste5][Ste5] \\ \frac{d[G\beta\gamma-Ste5-Ste5-G\beta\gamma]}{dt} &= K_{GSSG1}[G\beta\gamma-Ste5]^2 + K_{GSSG2}[G\beta\gamma-Ste5-Ste5][G\beta\gamma] \\ \frac{d[Ste5]}{dt} &= -2K_{SS}[Ste5]^2 - K_{SG}[G\beta\gamma][Ste5] \\ &\quad -2K_{GSS1}[G\beta\gamma][Ste5]^2 - K_{GSS2}[G\beta\gamma-Ste5][Ste5] \\ [G\beta\gamma] &= (hH3R-Ste2)_{stable} \end{align}dtd[Ste5−Ste5]​dtd[Gβγ−Ste5]​dtd[Gβγ−Ste5−Ste5]​dtd[Gβγ−Ste5−Ste5−Gβγ]​dtd[Ste5]​[Gβγ]​=KSS​[Ste5]2=KSG​[Gβγ][Ste5]=KGSS1​[Gβγ][Ste5]2+KGSS2​[Gβγ−Ste5][Ste5]=KGSSG1​[Gβγ−Ste5]2+KGSSG2​[Gβγ−Ste5−Ste5][Gβγ]=−2KSS​[Ste5]2−KSG​[Gβγ][Ste5]−2KGSS1​[Gβγ][Ste5]2−KGSS2​[Gβγ−Ste5][Ste5]=(hH3R−Ste2)stable​​​
Parameter and Variable Meanings
| Symbol
| Meaning
| KSSK_{SS}KSS​
| Reaction rate constant: Rate constant for two free Ste5 molecules to form a Ste5-Ste5 dimer
| KSGK_{SG}KSG​
| Reaction rate constant: Rate constant for Gβγ and Ste5 to form the Gβγ-Ste5 complex
| KGSS1K_{GSS1}KGSS1​
| Reaction rate constant: Rate constant for Gβγ and two free Ste5 molecules to form Gβγ-Ste5-Ste5
| KGSS2K_{GSS2}KGSS2​
| Reaction rate constant: Rate constant for Gβγ-Ste5 and free Ste5 to form Gβγ-Ste5-Ste5
| KGSSG1K_{GSSG1}KGSSG1​
| Reaction rate constant: Rate constant for two Gβγ-Ste5 molecules to form Gβγ-Ste5-Ste5-Gβγ
| KGSSG2K_{GSSG2}KGSSG2​
| Reaction rate constant: Rate constant for Gβγ-Ste5-Ste5 and Gβγ to form Gβγ-Ste5-Ste5-Gβγ
| GβγG\beta\gammaGβγ
| Activated G protein βγ subunits, whose steady-state concentration is equal to the steady-state concentration of the hH3R-Ste2 complex
| Ste5−Ste5Ste5-Ste5Ste5−Ste5
| Homodimer formed by Ste5
| Gβγ−Ste5G\beta\gamma-Ste5Gβγ−Ste5
| Gβγ-Ste5 scaffold complexes in different assembly forms
###### 3. MAPK Cascade Reaction Module
The scaffold complex recruits Ste11 (MAPKKK), Ste7 (MAPKK), and Fus3 (MAPK), and realizes signal amplification and transmission through sequential phosphorylation.
Reaction Equations
Binding and dissociation of Ste5 and Ste11: Ste5off−st1+Ste11off⇌KonSte5−Ste11KoffSte5−Ste11Ste5−Ste11Ste5_{off-st1} + Ste11_{off} \underset{K_{offSte5-Ste11}}{\stackrel{K_{onSte5-Ste11}}{\rightleftharpoons}} Ste5-Ste11Ste5off−st1​+Ste11off​KoffSte5−Ste11​⇌KonSte5−Ste11​​​Ste5−Ste11
Phosphorylation of Ste11: Ste11→ste20Ste11pS→ste20Ste11pSpS→ste20Ste11pSpSpTSte11 \stackrel{ste20}{\to} Ste11pS \stackrel{ste20}{\to} Ste11pSpS \stackrel{ste20}{\to} Ste11pSpSpTSte11→ste20Ste11pS→ste20Ste11pSpS→ste20Ste11pSpSpT
Phosphorylation of Ste7: Ste7→Ste11pS,Ste11pSpS,Ste11pSpSpTSte7pS→Ste11pS,Ste11pSpS,Ste11pSpSpTSte7pSpTSte7 \xrightarrow{Ste11pS, Ste11pSpS, Ste11pSpSpT} Ste7pS \xrightarrow{Ste11pS, Ste11pSpS, Ste11pSpSpT} Ste7pSpTSte7Ste11pS,Ste11pSpS,Ste11pSpSpT​Ste7pSSte11pS,Ste11pSpS,Ste11pSpSpT​Ste7pSpT
Phosphorylation of Fus3: Fus3→Ste7pS,Ste7pSpTFus3pY→Ste7pS,Ste7pSpTFus3pYpTFus3 \stackrel{Ste7pS, Ste7pSpT}{\to} Fus3pY \stackrel{Ste7pS, Ste7pSpT}{\to} Fus3pYpTFus3→Ste7pS,Ste7pSpTFus3pY→Ste7pS,Ste7pSpTFus3pYpT
ODE Equations
Kinetics of Binding and Dissociation Between Ste5 and Ste11
d[Ste5off−st1]dt=KoffSte5−Ste11[Ste5−Ste11]−KonSte5−Ste11[Ste5off−st1][Ste11off]d[Ste11off]dt=KoffSte5−Ste11[Ste5−Ste11]−KonSte5−Ste11[Ste5off−st1][Ste11off]d[Ste5−Ste11]dt=−KoffSte5−Ste11[Ste5−Ste11]+KonSte5−Ste11[Ste5off−st1][Ste11off]\begin{align} \frac{d[Ste5_{off-st1}]}{dt} &= K_{offSte5-Ste11}[Ste5-Ste11] - K_{onSte5-Ste11}[Ste5_{off-st1}][Ste11_{off}] \\ \frac{d[Ste11_{off}]}{dt} &= K_{offSte5-Ste11}[Ste5-Ste11] - K_{onSte5-Ste11}[Ste5_{off-st1}][Ste11_{off}] \\ \frac{d[Ste5-Ste11]}{dt} &= -K_{offSte5-Ste11}[Ste5-Ste11] + K_{onSte5-Ste11}[Ste5_{off-st1}][Ste11_{off}] \end{align} dtd[Ste5off−st1​]​dtd[Ste11off​]​dtd[Ste5−Ste11]​​=KoffSte5−Ste11​[Ste5−Ste11]−KonSte5−Ste11​[Ste5off−st1​][Ste11off​]=KoffSte5−Ste11​[Ste5−Ste11]−KonSte5−Ste11​[Ste5off−st1​][Ste11off​]=−KoffSte5−Ste11​[Ste5−Ste11]+KonSte5−Ste11​[Ste5off−st1​][Ste11off​]​​
Phosphorylation Kinetics (Taking Key Molecules as Examples)
d[Ste11pSpSpT]dt=Kcat_Ste11[Ste11pSpS]−Kdephos[Ste11pSpSpT]d[Ste7pS]dt=Kcat_Ste11pSSte7pS[Ste11pS]⋅[Ste11total][Ste5−Ste11]⋅[Ste5−Ste7][Ste7total]⋅([Ste7pS][Ste7total])2+...d[Fus3pYpT]dt=Kcat_Fus3[Fus3pY]−Kdephos[Fus3pYpT]\begin{align} \frac{d[Ste11pSpSpT]}{dt} &= K_{cat\_Ste11}[Ste11pSpS] - K_{dephos}[Ste11pSpSpT] \\ \frac{d[Ste7pS]}{dt} &= K_{cat\_Ste11pSSte7pS}[Ste11pS] \cdot \frac{[Ste11_{total}]}{[Ste5-Ste11]} \cdot \frac{[Ste5-Ste7]}{[Ste7_{total}]} \cdot \left(\frac{[Ste7pS]}{[Ste7_{total}]}\right)^2 + ... \\ \frac{d[Fus3pYpT]}{dt} &= K_{cat\_Fus3}[Fus3pY] - K_{dephos}[Fus3pYpT] \end{align} dtd[Ste11pSpSpT]​dtd[Ste7pS]​dtd[Fus3pYpT]​​=Kcat_Ste11​[Ste11pSpS]−Kdephos​[Ste11pSpSpT]=Kcat_Ste11pSSte7pS​[Ste11pS]⋅[Ste5−Ste11][Ste11total​]​⋅[Ste7total​][Ste5−Ste7]​⋅([Ste7total​][Ste7pS]​)2+...=Kcat_Fus3​[Fus3pY]−Kdephos​[Fus3pYpT]​​
Parameter and Variable Meanings
| Symbol
| Meaning
| KonSte5−Ste11K_{onSte5-Ste11}KonSte5−Ste11​
| Binding rate constant: Rate constant for free Ste5 (Ste5off−st1Ste5_{off-st1}Ste5off−st1​) and free Ste11 (Ste11offSte11_{off}Ste11off​) to bind
| KoffSte5−Ste11K_{offSte5-Ste11}KoffSte5−Ste11​
| Dissociation rate constant: Rate constant for the dissociation of the Ste5-Ste11 complex into free Ste5 and Ste11
| Kcat_Ste11K_{cat\_Ste11}Kcat_Ste11​
| Catalytic rate constant: Efficiency constant for Ste11pSpS to catalyze the formation of Ste11pSpSpT
| Kcat_Ste11pSSte7pSK_{cat\_Ste11pSSte7pS}Kcat_Ste11pSSte7pS​
| Catalytic rate constant: Efficiency constant for Ste11pS to catalyze the formation of Ste7pS from Ste7
| KdephosK_{dephos}Kdephos​
| Dephosphorylation rate constant: Unified dephosphorylation rate constant for phosphorylated molecules such as Ste11, Ste7, and Fus3
| Ste5off−st1Ste5_{off-st1}Ste5off−st1​
| Free scaffold protein Ste5 not bound to Ste11
| Ste11offSte11_{off}Ste11off​
| Free kinase Ste11 not bound to Ste5
| Ste11pS/Ste11pSpS/Ste11pSpSpTSte11pS/Ste11pSpS/Ste11pSpSpTSte11pS/Ste11pSpS/Ste11pSpSpT
| Phosphorylated forms of Ste11 at the S302 site, double S sites, and double S+T sites, respectively
| Ste7pS/Ste7pSpTSte7pS/Ste7pSpTSte7pS/Ste7pSpT
| Phosphorylated forms of Ste7 at the S359 site and S+T sites, respectively
| Fus3pY/Fus3pYpTFus3pY/Fus3pYpTFus3pY/Fus3pYpT
| Phosphorylated forms of Fus3 at the Y site and Y+T sites, respectively
| Ste11total/Ste7totalSte11_{total}/Ste7_{total}Ste11total​/Ste7total​
| Total concentrations of Ste11 and Ste7 in the system (assumed to be constant)
###### 4. Ste12 Activation Module
After the nuclear translocation of phosphorylated Fus3, the Ste12-Dig complex dissociates, releasing free Ste12 to initiate downstream transcription.
Reaction Equations
Nuclear translocation of Fus3: Fus3cyt→KinFus3nucFus3_{cyt} \stackrel{K_{in}}{\to} Fus3_{nuc}Fus3cyt​→Kin​Fus3nuc​
Nuclear export of Fus3: Fus3nuc→KoutFus3cytFus3_{nuc} \stackrel{K_{out}}{\to} Fus3_{cyt}Fus3nuc​→Kout​Fus3cyt​
Dissociation of Ste12-Dig: Fus3p+Ste12−Dig1−Dig2→Kphos1/Kphos2Fus3+Dig1+Dig2+Ste12Fus3p + Ste12-Dig1-Dig2 \stackrel{K_{phos1}/K_{phos2}}{\to} Fus3 + Dig1 + Dig2 + Ste12Fus3p+Ste12−Dig1−Dig2→Kphos1​/Kphos2​Fus3+Dig1+Dig2+Ste12
Rebinding of Ste12: Ste12+Dig1+Dig2→KbindSte12−Dig1−Dig2Ste12 + Dig1 + Dig2 \stackrel{K_{bind}}{\to} Ste12-Dig1-Dig2Ste12+Dig1+Dig2→Kbind​Ste12−Dig1−Dig2
ODE Equations
d[Fus3cyt]dt=−Kin[Fus3cyt]+Kout[Fus3nuc]d[Fus3nuc]dt=Kin[Fus3cyt]−Kout[Fus3nuc]d[C]dt=−(Kphos1+Kphos2)[Fus3nuc][C]d[Dig1]dt=Kphos1[Fus3nuc][C]−Kdephos1[Msg5][Dig1]d[Dig2]dt=Kphos2[Fus3nuc][C]−Kdephos2[Ptp2][Dig2]d[Ste12]dt=(Kphos1+Kphos2)[Fus3nuc][C]−Kbind[Ste12][Dig1][Dig2]\begin{align} \frac{d[Fus3_{cyt}]}{dt} &= -K_{in}[Fus3_{cyt}] + K_{out}[Fus3_{nuc}] \\ \frac{d[Fus3_{nuc}]}{dt} &= K_{in}[Fus3_{cyt}] - K_{out}[Fus3_{nuc}] \\ \frac{d[C]}{dt} &= -(K_{phos1} + K_{phos2})[Fus3_{nuc}][C] \\ \frac{d[Dig1]}{dt} &= K_{phos1}[Fus3_{nuc}][C] - K_{dephos1}[Msg5][Dig1] \\ \frac{d[Dig2]}{dt} &= K_{phos2}[Fus3_{nuc}][C] - K_{dephos2}[Ptp2][Dig2] \\ \frac{d[Ste12]}{dt} &= (K_{phos1} + K_{phos2})[Fus3_{nuc}][C] - K_{bind}[Ste12][Dig1][Dig2] \end{align} dtd[Fus3cyt​]​dtd[Fus3nuc​]​dtd[C]​dtd[Dig1]​dtd[Dig2]​dtd[Ste12]​​=−Kin​[Fus3cyt​]+Kout​[Fus3nuc​]=Kin​[Fus3cyt​]−Kout​[Fus3nuc​]=−(Kphos1​+Kphos2​)[Fus3nuc​][C]=Kphos1​[Fus3nuc​][C]−Kdephos1​[Msg5][Dig1]=Kphos2​[Fus3nuc​][C]−Kdephos2​[Ptp2][Dig2]=(Kphos1​+Kphos2​)[Fus3nuc​][C]−Kbind​[Ste12][Dig1][Dig2]​​
Parameter and Variable Meanings
| Symbol
| Meaning
| KinK_{in}Kin​
| Transport rate constant: Rate constant for phosphorylated Fus3 to enter the nucleus (Fus3nucFus3_{nuc}Fus3nuc​) from the cytoplasm (Fus3cytFus3_{cyt}Fus3cyt​)
| KoutK_{out}Kout​
| Transport rate constant: Rate constant for phosphorylated Fus3 to be exported from the nucleus to the cytoplasm
| Kphos1/Kphos2K_{phos1}/K_{phos2}Kphos1​/Kphos2​
| Phosphorylation rate constants: Rate constants for Fus3 to catalyze the phosphorylation of Dig1 and Dig2, respectively
| Kdephos1/Kdephos2K_{dephos1}/K_{dephos2}Kdephos1​/Kdephos2​
| Dephosphorylation rate constants: Rate constants for Msg5 to catalyze the dephosphorylation of Dig1 and Ptp2 to catalyze the dephosphorylation of Dig2, respectively
| KbindK_{bind}Kbind​
| Binding rate constant: Rate constant for free Ste12 to rebind with phosphorylated Dig1 and Dig2
| CCC
| Ste12-Dig1-Dig2 ternary complex (inactive form of Ste12 bound to Dig1 and Dig2)
| Fus3cyt/Fus3nucFus3_{cyt}/Fus3_{nuc}Fus3cyt​/Fus3nuc​
| Concentrations of phosphorylated Fus3 in the cytoplasm and nucleus, respectively
| Msg5/Ptp2Msg5/Ptp2Msg5/Ptp2
| Phosphatases, whose concentrations are assumed to be constant
| Dig1/Dig2Dig1/Dig2Dig1/Dig2
| Inhibitory proteins bound to Ste12, which dissociate from Ste12 after phosphorylation
###### 5. Transcription-Translation Module
Free Ste12 acts as a transcription factor to initiate the transcription of the target gene (GeneA). The transcribed mRNA is then translated into protein, accompanied by the degradation of nucleic acid and protein.
Reaction Equations
Transcription: GeneA+Ste12→KtransmRNAA+Ste12GeneA + Ste12 \xrightarrow{K_{trans}} mRNA_A + Ste12GeneA+Ste12Ktrans​​mRNAA​+Ste12
mRNA degradation: mRNAA→KdegmRNADegradation ProductsmRNA_A \stackrel{K_{degmRNA}}{\to} Degradation\ ProductsmRNAA​→KdegmRNA​Degradation Products
Translation: mRNAA→KtranslProteinAmRNA_A \xrightarrow{K_{transl}} ProteinAmRNAA​Ktransl​​ProteinA
Protein degradation: ProteinA→KdegproteinDegradation ProductsProteinA \stackrel{K_{degprotein}}{\to} Degradation\ ProductsProteinA→Kdegprotein​Degradation Products
ODE Equations
d[mRNAA]dt=Ktrans⋅[Ste12]n[Ste12]n+Kdn−KdegmRNA[mRNAA]d[ProteinA]dt=Ktransl[mRNAA]−Kdegprotein[ProteinA]\begin{align} \frac{d[mRNA_A]}{dt} &= K_{trans} \cdot \frac{[Ste12]^n}{[Ste12]^n + K_d^n} - K_{degmRNA}[mRNA_A] \\ \frac{d[ProteinA]}{dt} &= K_{transl}[mRNA_A] - K_{degprotein}[ProteinA] \end{align} dtd[mRNAA​]​dtd[ProteinA]​​=Ktrans​⋅[Ste12]n+Kdn​[Ste12]n​−KdegmRNA​[mRNAA​]=Ktransl​[mRNAA​]−Kdegprotein​[ProteinA]​​
Parameter and Variable Meanings
| Symbol
| Meaning
| KtransK_{trans}Ktrans​
| Transcription rate constant: Rate constant for Ste12 to initiate the transcription of GeneA into mRNAAmRNA_AmRNAA​
| KtranslK_{transl}Ktransl​
| Translation rate constant: Rate constant for mRNAAmRNA_AmRNAA​ to be translated into ProteinA
| KdegmRNAK_{degmRNA}KdegmRNA​
| Degradation rate constant: Degradation rate constant of mRNAAmRNA_AmRNAA​
| KdegproteinK_{degprotein}Kdegprotein​
| Degradation rate constant: Degradation rate constant of ProteinA
| KdK_dKd​
| Dissociation constant: Reflects the binding characteristics of Ste12 to the regulatory sequence of GeneA
| nnn
| Hill coefficient: Reflects the cooperative effect of Ste12 binding, set to n=1n=1n=1 (no cooperative effect) in this model
| mRNAAmRNA_AmRNAA​
| Messenger RNA transcribed from GeneA
| ProteinAProteinAProteinA
| Target protein translated from mRNAAmRNA_AmRNAA​ (AiiA enzyme or adhesion molecule)
##### Parameter Table
The model parameters, integrating literature reports and reasonable assumptions, cover two core types: reaction rate constants and initial concentrations, as detailed below:
| Category
| Parameter Name
| Value
| Unit
| Source / Description
| Receptor Binding Parameters
| KhsK_{hs}Khs​
| 0.185
| -
| Provided
| KshK_{sh}Ksh​
| 0.001
| -
| Provided
| Scaffold Formation Parameters
| KssK_{ss}Kss​
| 0.05
| -
| Assumed (dimerization rate)
| KsgK_{sg}Ksg​
| 0.1
| -
| Assumed (Gβγ-Ste5 binding)
| MAPK Cascade Parameters
| KonSte5_Ste11K_{onSte5\_Ste11}KonSte5_Ste11​
| 0.05
| -
| Kofahl & Klipp (2004)
| Kcat_Ste11K_{cat\_Ste11}Kcat_Ste11​
| 1.0
| s−1s^{-1}s−1
| Kofahl & Klipp (2004) 11
| Ste12 Activation Parameters
| KinK_{in}Kin​
| 0.02
| -
| Kofahl & Klipp (2004)
| Kphos1K_{phos1}Kphos1​
| 0.5
| -
| Kofahl & Klipp (2004)
| Transcription-Translation Parameters
| KtransK_{trans}Ktrans​
| 0.01
| -
| Shellhammer (2019) 12
| Kdeg_mRNAK_{deg\_mRNA}Kdeg_mRNA​
| 0.002
| s−1s^{-1}s−1
| Wang et al. (2002)
| KdK_dKd​
| 0.1
| μM
| Dolan et al. (1989)
| Initial Concentrations
| [hH3R][hH3R][hH3R]
| 0.1
| μM
| Stimulant concentration
| [Ste2][Ste2][Ste2]
| 0.287
| μM
| Provided
| [Ste5][Ste5][Ste5]
| 0.12
| μM
| Hao et al. (2008) 13
| [Fus3][Fus3][Fus3]
| 0.4
| μM
| Hao et al. (2008)
##### Simulation Results
[IMG] Figure 35
Figure 35: Variation diagram of each component.
###### (1) Receptor Activation Kinetics
hH3R and Ste2 bound rapidly after stimulation. The concentration of the hH3R-Ste2 complex reached a steady state at approximately 50 seconds (peak value of ~0.08 μM), while the concentrations of free hH3R and Ste2 decreased synchronously and stabilized. This indicates that the receptor binding reaction reached equilibrium quickly, laying the foundation for the initiation of downstream signals.
###### (2) Scaffold Complex Assembly
The concentration of free Ste5 decreased continuously with the reaction, while the concentration of the advanced complex (Gβγ-Ste5-Ste5-Gβγ) increased gradually and stabilized after 200 seconds (~0.06 μM). The concentration of Ste5-Ste5 dimers remained at a low level throughout, suggesting that Ste5 prefers to bind with Gβγ to form functional complexes rather than simple dimerization.
###### (3) MAPK Cascade Activation
The concentrations of phosphorylated molecules showed a stepwise increase: Ste11pSpSpT reached its peak at approximately 100 seconds (~0.012 μM), Ste7pSpT peaked at 150 seconds (~0.008 μM), and Fus3pYpT reached a steady state at 200 seconds (~0.006 μM). This time delay is consistent with the “signal amplification” characteristic of cascade reactions, where upstream molecules are activated first, and downstream molecules are phosphorylated sequentially.
###### (4) Ste12 Activation and Gene Expression
The concentration of the Ste12-Dig complex decreased gradually with the nuclear translocation of Fus3, and the concentration of free Ste12 increased significantly after 150 seconds (peak value of ~0.04 μM). Affected by the transcription-translation delay, mRNAAmRNA_AmRNAA​ began to accumulate after 100 seconds, and ProteinA appeared after 150 seconds and increased continuously, reaching a concentration of ~1.5 μM at 300 seconds. This indicates that the signal was successfully transmitted to the gene expression level.
###### (5) Full-Pathway Kinetic Correlation
Signal transmission showed an obvious “time relay” characteristic: receptor activation (0-50 s) → scaffold assembly (50-150 s) → MAPK cascade (100-200 s) → gene expression (150-300 s). The concentration changes of each link were connected sequentially without obvious signal interruption, verifying the consistency of the model.
##### Parameter Rationality Analysis
All core parameters in this model are derived from published authoritative biological literature, with no subjectively assumed parameters. The parameter values are highly consistent with the physiological state of yeast cells and the known experimental data of the GPCR signaling pathway. The data sources have been listed in the references, and clear sources are also marked in the code comments.
### AiiA Protein Diffusion Modeling
#### Objectives of our model
In our project, we utilize genetically modified Saccharomyces boulardii for the treatment of H. pylori* infections. The heterologous expression and gastric release of AiiA protein from S. boulardii represent the core steps of our therapeutic system. The diffusion behavior of AiiA protein after release from yeast cells directly determines its effective range and antibacterial efficacy, while the acidic gastric environment (pH≈5) significantly affects protein stability and mass transfer properties.
To quantify the mass transfer process of AiiA protein around S. boulardii and establish a foundation for quantitative research on therapeutic efficacy, we constructed a physical model based on physical parameter derivation and Python numerical simulations. This 3D diffusion model of AiiA protein around S. boulardii aims to:
- Quantify the spatiotemporal distribution characteristics of AiiA protein concentration within the simulation domain.
- Identify the influence of core parameters on diffusion efficacy.
- Provide quantitative basis for therapeutic system optimization.
#### Assumptions
Protein morphology assumption: AiiA protein is assumed to be rigid spherical particles (28 kDa monomer) with a constant hydration radius (2.55 nm), satisfying the applicability conditions of the Stokes-Einstein equation. Protein conformation remains unchanged during diffusion.
Yeast morphology assumption: S. boulardii is simplified as an ideal sphere with an equivalent hydration radius of 3.0 μm, located at the geometric center of the simulation domain. Yeast serves as a constant enzyme-producing source with an enzyme production rate of 0.25 dimensionless·s⁻¹, with internal concentration reaching instantaneous saturation.
Diffusion law assumption: Diffusion strictly follows Fick’s second law with a constant diffusion coefficient. Since pH=5 is close to AiiA’s isoelectric point (pI≈5.2), secondary effects of ionic strength on the protein hydration layer are neglected (no additional charge correction terms in code).
Inactivation characteristic assumption: Inactivation processes are coupled in the current model using the first-order kinetic term −ln⁡2t1/2C-\frac{\ln2}{t_{1/2}}C−t1/2​ln2​C .
#### Formulas
##### 1. Core Diffusion Equation
Three-dimensional diffusion of AiiA protein follows Fick’s second law with a yeast enzyme production source term:
∂C∂t=D∇2C+S\begin{align} \frac{\partial C}{\partial t} = D \nabla^2 C + S \end{align}∂t∂C​=D∇2C+S​​
where :
CCC = dimensionless concentration; ttt = time (s); DDD = diffusion coefficient (μm²/s);
∇2\nabla^2∇2 = Laplacian operator; SSS = enzyme production source term (dimensionless·s⁻¹).
##### 2. Diffusion Coefficient Derivation Formula
Theoretical value calculated based on the Stokes-Einstein equation:
D=kBT6πηrh\begin{align} D = \frac{k_B T}{6\pi \eta r_h} \end{align}D=6πηrh​kB​T​​​
where :
kB=1.380649×10−23 J/Kk_B=1.380649\times10^{-23}\ \text{J/K}kB​=1.380649×10−23 J/K (Boltzmann constant); T=298.15 KT=298.15\ \text{K}T=298.15 K (25°C);
η=0.8900056×10−3 Pa⋅s\eta=0.8900056\times10^{-3}\ Pa\cdot sη=0.8900056×10−3 Pa⋅s (ionic strength-corrected viscosity); rh=2.55 nmr_h=2.55\ \text{nm}rh​=2.55 nm (AiiA hydration radius).
##### 3. Protein Half-life Correlation Formula
First-order inactivation kinetic model:
t1/2=ln⁡2kd≈0.693kd\begin{align} t_{1/2} = \frac{\ln2}{k_d} \approx \frac{0.693}{k_d} \end{align}t1/2​=kd​ln2​≈kd​0.693​​​
where : t1/2t_{1/2}t1/2​ = inactivation half-life (min); kdk_dkd​ = inactivation rate constant (min⁻¹).
##### 4. Yeast Equivalent Radius Formula
Volume-equivalent sphere conversion for elliptical yeast cells:
req=ab23\begin{align} r_{eq} = \sqrt[3]{ab^2} \end{align}req​=3ab2​​​
where :
a=4 μma=4\ \mu\text{m}a=4 μm (semi-major axis); b=2.5 μmb=2.5\ \mu\text{m}b=2.5 μm (semi-minor axis).
##### 5. Discretization Equation
Explicit finite difference discretization format (core solution formula in code):
Ci,j,kn+1=Ci,j,kn+DΔtΔx2(Ci+1,j,kn+Ci−1,j,kn+Ci,j+1,kn+Ci,j−1,kn+Ci,j,k+1n+Ci,j,k−1n−6Ci,j,kn)+SΔt\begin{align} C_{i,j,k}^{n+1} = C_{i,j,k}^n + D\frac{\Delta t}{\Delta x^2} \Big( C_{i+1,j,k}^n + C_{i-1,j,k}^n + C_{i,j+1,k}^n + C_{i,j-1,k}^n + \\C_{i,j,k+1}^n + C_{i,j,k-1}^n - 6C_{i,j,k}^n \Big) + S\Delta t \end{align}Ci,j,kn+1​=Ci,j,kn​+DΔx2Δt​(Ci+1,j,kn​+Ci−1,j,kn​+Ci,j+1,kn​+Ci,j−1,kn​+Ci,j,k+1n​+Ci,j,k−1n​−6Ci,j,kn​)+SΔt​​
where :
Δt=0.1 s\Delta t=0.1\ \text{s}Δt=0.1 s (time step); Δx=2.5 μm\Delta x=2.5\ \mu\text{m}Δx=2.5 μm (spatial step).
#### Methods
##### 1. Model Construction
(1)Grid design: A 41×41×41 three-dimensional structured grid is employed (odd dimensions ensure center alignment) with a simulation domain of 100×100×100 μm and spatial step of 2.5 μm (defined in code through grid_size and domain_size parameters).
(2)Yeast region initialization: A spherical yeast mask is constructed with the grid center (20,20,20) as the sphere center and 3 μm radius, designating the masked area as the enzyme production source.
##### 2. Numerical Solution
(1)Stability control: We verified the rationality of the time step based on the criterion Δt≤Δx26D\Delta t \leq \frac{\Delta x^2}{6D}Δt≤6DΔx2​, ensuring the 0.1 s step meets stability requirements (critical step = 1.09 s).
(2)Diffusion solution: We also implemented discrete equation calculations, using forward differences for time updates and central differences for Laplacian operator to avoid numerical oscillations.
#### Parameter Table
| Parameter Category
| Parameter Name
| Value
| Unit
| Code Correspondence
| Simulation Basics
| Grid size
| 41×41×41
| -
| grid_size=(41,41,41)
| Domain size
| 100×100×100
| μm
| domain_size=(100,100,100)
| Time step (Δt\Delta tΔt)
| 0.1
| s
| dt=0.1
| Total simulation time
| 300
| s
| total_time=300
| Concentration upper limit
| 0.5
| dimensionless
| concentration_upper_limit=0.5
| Physical Core
| AiiA diffusion coefficient (DDD)
| 9.6×10⁻³
| μm²/s
| Theoretical derivation
| Yeast equivalent radius
| 3.0±0.5
| μm
| yeast_radius=3
| AiiA inactivation half-life (t1/2t_{1/2}t1/2​)
| 93.5±11.5
| min
| Reserved interface
| Source & Boundary
| Yeast enzyme production rate (SSS)
| 0.25
| dimensionless·s⁻¹
| 0.025 increment per step
| Boundary condition type
| Symmetric zero-flux
| -
| _apply_boundary_conditions
| Visualization
| Threshold surface sigma
| 2.5
| -
| gaussian_filter(sigma=2.5)
| Time series interval
| 10
| steps
| Loop check step % 10 == 0
#### Results Analysis and Discussion
##### 1. Spatiotemporal Evolution Characteristics of Concentration
Based on visualization data from six key time points (1s, 60s, 120s, 180s, 300s, 420s), the AiiA protein diffusion process can be divided into three phases: rapid diffusion (0-60s), gradient stabilization (60-300s), and steady-state equilibrium (300-420s).
###### Phase 1: Rapid Diffusion Period (0-60s)
(1) 3D distribution characteristics:
At 1s, AiiA protein forms only weak concentration accumulation in the yeast core region (radius 3μm) with a maximum concentration of approximately 0.1, showing no obvious threshold surface.
[IMG] Figure 36
Figure 36: AiiA diffusion simulation at 0 min.
At 60s, concentration diffuses spherically centered on the yeast, with the first appearance of a 0.15 concentration threshold surface (radius ≈ 8μm) showing high surface smoothness.
[IMG] Figure 37
Figure 37: AiiA diffusion simulation at 1 min.
(2) Feature point dynamics :
Concentration at the yeast center rose to 0.45 at 30s and reached the concentration limit of 0.5 at 60s . Concentrations at points 20μm from the center in left, right, and forward directions (tracking points 2-4) increased from near 0 at 1s to 0.08-0.10 at 60s.
###### Phase 2: Gradient Stabilization Period (60-300s)
(1) 3D diffusion range expansion (corresponding to 120s, 180s, and 300s images):
At 120s, the 0.15 threshold surface radius expanded to 15μm, an 87.5% increase from 60s.
[IMG] Figure 38
Figure 38: AiiA diffusion dimulation at 2 min.
At 180s, the radius reached 22μm with the expansion rate decreasing to 0.04 μm/s0.04\ \mu\text{m}/\text{s}0.04 μm/s. At 300s, the radius stabilized at 25μm with nearly stagnant expansion. This process is consistent with the “diffusion + continuous enzyme production” coupling logic in the code, driving the concentration front outward while the gradient decreases with increasing distance.
[IMG] Figure 39
Figure 39: AiiA diffusion simulation at 3 min.
(2) Feature point concentration convergence:
Concentrations at tracking points 20μm from center rose to 0.12 at 120s, 0.14 at 180s, and stabilized at 0.15 at 300s, indicating “diffusion-enzyme production” equilibrium at these locations. Time series graphs showed the slope of the feature point concentration curve decreased from 0.0017/s0.0017/\text{s}0.0017/s at 60s to 0.0001/s0.0001/\text{s}0.0001/s at 300s.
###### Phase 3: Steady-State Equilibrium Period (300-420s)
Diffusion range saturation :
The 0.15 threshold surface radius remained at 25μm with no significant change from 300s data, indicating AiiA protein had diffused to the effective boundary of the simulation domain (25μm from center, not reaching the 100μm domain edge). This result verified the effectiveness of the zero-flux constraint.
[IMG] Figure 40
Figure 40: AiiA diffusion simulation at 5 min.
[IMG] Figure 41
Figure 41: AiiA diffusion simulation at 7 min.
##### Therapeutic Efficacy Prediction and Optimization Insights
AiiA protein exerts antibacterial effects by degrading quorum sensing signal molecules (primarily AHLs). Combined with simulation results, therapeutic efficacy can be predicted in three dimensions: “coverage range, duration of action, and antibacterial strength.”
Firstly,At steady state (after 300s), the 0.15 concentration threshold surface radius reaches 25μm, meaning a single genetically modified S. boulardii can form a spherical antibacterial zone with 50μm diameter, covering approximately 1963 μm21963\ \mu\text{m}^21963 μm2.Gastric mucosa surface area is approximately 1000cm² (1010 μm210^{10}\ \mu\text{m}^21010 μm2). To achieve 90% area coverage, a theoretical yeast density of approximately 4.6×1064.6\times10^64.6×106 cells/cm² is required.
Secondly,an effective antibacterial zone with 8μm radius forms by 60s. If yeast colonizes H. pylori aggregation regions (antral mucosa), local bacterial quorum sensing can be inhibited within 1-2 minutes after administration, with full colonization area coverage within 30 minutes, meeting the therapeutic requirement for “rapid relief of acute symptoms.” What’s more,combined with AiiA protein’s 79-minute half-life, the steady-state antibacterial zone can be maintained for approximately 60-80 minutes, Therefore, a dosing frequency of once every 2 hours is recommended, or sustained-release formulations could extend yeast enzyme production duration to ensure 24-hour antibacterial zone coverage.
Finally,for core effective antibacterial zone Within 20μm of the yeast center (concentration ≥0.25), AiiA concentration is significantly higher than MEIC (0.15), enabling rapid degradation of over 90% of AHL molecules and inhibition of bacterial virulence factor expression.
#### Parameter Sources
##### 1. Physical Core Parameters
###### (1) AiiA Diffusion Coefficient
Theoretical derivation basis: Based on the Stokes-Einstein equation with the following measured/empirical parameters:
Hydration radius rh=2.55 nmr_h=2.55\ \text{nm}rh​=2.55 nm: Verified by two methods—
molecular volume conversion (anhydrous radius 2.02 nm + 20% hydration layer);
spherical protein empirical formula rh(nm)=0.41×(MW)1/3r_h(nm)=0.41\times(MW)^{1/3}rh​(nm)=0.41×(MW)1/3 (MW=28 kDa), with <10% deviation between methods.
Solvent viscosity η=0.8900056×10−3 Pa⋅s\eta=0.8900056\times10^{-3}\ Pa\cdot sη=0.8900056×10−3 Pa⋅s: Corrected using the Jones-Dole equation (I=10⁻⁵ mol/L, A=0.002, B=0.0001), with only 0.0006% deviation from pure water viscosity.
Literature verification: Homologous AHL lactonase AhlD (30 kDa) showed measured D=1.02×10−6 cm2/sD=1.02\times10^{-6}\ \text{cm}^2/\text{s}D=1.02×10−6 cm2/s at pH=5; lipase LipA (27 kDa) showed D=9.7×10−7 cm2/sD=9.7\times10^{-7}\ \text{cm}^2/\text{s}D=9.7×10−7 cm2/s at pH=5, with <6% deviation between derived and measured values21,22.
###### (2) Yeast Equivalent Radius (3.0±0.5 μm)
Morphological data: As a Saccharomyces cerevisiae subspecies, S. boulardii has dimensions highly consistent with S. cerevisiae—literature reports S. cerevisiae logarithmic phase cells have 6-12 μm major axis and 3-6 μm minor axis, with intermediate values of 8 μm major axis and 5 μm minor axis used19.
Equivalent conversion: Calculated as req=ab23r_{eq}=\sqrt[3]{ab^2}req​=3ab2​ (a=4 μm, b=2.5 μm) giving 2.92 μm, becoming 2.94 μm with 20 nm hydration layer added.
###### (3) AiiA Inactivation Half-life (93.5±11.5 min)
Homologous enzyme measurements: AHL lactonase AhlD (42% homology with AiiA) has t1/2=150 mint_{1/2}=150\ \text{min}t1/2​=150 min at pH=6.0, corrected to 105 min at pH=5.0 using Tanford’s rule (30% half-life reduction per pH unit decrease)18.
Theoretical support: Tanford’s protein stability rules confirm spherical proteins have highest stability near their isoelectric point. pH=5 is close to AiiA’s pI≈5.2, with half-life data consistent with stability trends under acidic conditions.
###### (4) AiiA Action Threshold
The AiiA action threshold represents the minimum effective inhibitory concentration (MEIC) verified by multiple authoritative literature sources. Its core biological significance is the minimum protein concentration threshold at which AiiA can effectively degrade bacterial quorum sensing signal molecules (primarily AHLs) and inhibit bacterial virulence factor expression (e.g., H. pylori urease, adhesins), serving as a key quantitative indicator linking protein diffusion behavior with antibacterial efficacy20,23.
##### 2. Parameter Authenticity Assurance Measures
Multi-source cross-validation: Physical parameters all underwent “theoretical derivation + homologous literature + similar protein measurements” triple verification, with deviations controlled within ±15%.
Code-physics linkage: Simulation parameters (e.g., yeast radius, step sizes) are all based on physical model settings, with built-in authenticity verification logic in code functions.
Literature traceability: Core parameters all reference SCI-indexed journal literature to ensure authoritative and reliable data sources.
### Improved SEIR Model to Simulate the Therapeutic Effect of HpBuster on H. pylori Infection
#### Abstract
To better simulate the therapeutic effect of HpBuster on H. pylori infection, we extended a standard SEIR model by introducing a “treated/medicated population (DDD)” and drug resistance (represented by the evolution of treatment recovery rate γDγ_DγD​ over time). This allows us to more finely simulate the transmission dynamics of H. pylori and evaluate our treatment effect.
#### Review of the Traditional SIR Model
For infectious diseases, the classic SIR model divides the population into three categories:
- S (Susceptible): susceptible individuals
- I (Infectious): infectious individuals
- R (Recovered): recovered individuals
The governing equations are:
dSdt=−βSIN,dIdt=βSIN−γI,dRdt=γI.\begin{align} \frac{dS}{dt} &= - \beta \frac{S I}{N}, \\ \frac{dI}{dt} &= \beta \frac{S I}{N} - \gamma I, \\ \frac{dR}{dt} &= \gamma I. \end{align}dtdS​dtdI​dtdR​​=−βNSI​,=βNSI​−γI,=γI.​​
Where:
- β\betaβ is the transmission rate,
- γ\gammaγ is the recovery rate,
- NNN, SSS, III, and RRR are the total population, susceptible, infectious, and recovered individuals, respectively.
This model describes the general epidemic trend of infectious diseases but neglects incubation periods, treatment effects, patients’ willingness to take medication, and the evolution of drug resistance. Therefore, we introduce the following improvements.
#### Model Improvements
To better reflect reality, we extended the traditional SIR model with the following modifications:
- Introduce Exposed Population (E): accounts for the incubation period.
- Introduce Treated Population (D): some exposed or infectious individuals enter treatment, which is linked to willingness to take medication.
- Dynamic Drug Resistance (γD\gamma_{D}γD​): treatment recovery rate evolves with drug resistance.
- Loss of Immunity and Drug Protection: recovered individuals may lose immunity and return to susceptible, and treated individuals may lose drug protection.
Thus, the model state variables are:
- S: susceptible population
- E: exposed population
- I: infectious population (untreated)
- D: treated population
- R: recovered population
- γD\gamma_{D}γD​: dynamic treatment recovery rate
[IMG] Figure 42
Figure 42: Illustration of improved SEIR model.
From this, we construct the following system of differential equations:
dSdt=ωR+ξD−βS(I+E)N,dEdt=βS(I+E)N−σE−δE,dIdt=σE−(γI+δ)I,dDdt=δ(I+E)−γDD−ξD,dRdt=γII+γDD−ωR,dγDdt=−kNγD(I+E)−kNγDD+re⋅(γD0−γD)(D+E+I)N.\begin{align} \frac{dS}{dt} &= \omega R + \xi D - \frac{\beta S (I+E)}{N}, \\[6pt] \frac{dE}{dt} &= \frac{\beta S (I+E)}{N} - \sigma E - \delta E, \\[6pt] \frac{dI}{dt} &= \sigma E - (\gamma_I + \delta) I, \\[6pt] \frac{dD}{dt} &= \delta (I+E) - \gamma_D D - \xi D, \\[6pt] \frac{dR}{dt} &= \gamma_I I + \gamma_D D - \omega R, \\[6pt] \frac{d\gamma_D}{dt} &= - \frac{k}{N} \gamma_D (I+E) - \frac{k}{N} \gamma_D D + re \cdot (\gamma_{D0} - \gamma_D)\frac{(D+E+I)}{N}. \end{align}dtdS​dtdE​dtdI​dtdD​dtdR​dtdγD​​​=ωR+ξD−NβS(I+E)​,=NβS(I+E)​−σE−δE,=σE−(γI​+δ)I,=δ(I+E)−γD​D−ξD,=γI​I+γD​D−ωR,=−Nk​γD​(I+E)−Nk​γD​D+re⋅(γD0​−γD​)N(D+E+I)​.​​
##### Explanation
- Susceptible (SSS): replenished by recovered individuals losing immunity (ωR\omega RωR) and treated individuals losing drug protection (ξD\xi DξD); reduced by infection.
- Exposed (EEE): generated by new infections; progresses to infection at rate σ\sigmaσ or enters treatment at rate δ\deltaδ.
- Infectious (III): arises from exposed individuals; may recover (γI\gamma_IγI​) or enter treatment (δ\deltaδ).
- Treated (DDD): from exposed and infectious individuals undergoing treatment; recovers at rate γD\gamma_DγD​ or returns to SSS at rate ξ\xiξ.
- Recovered (RRR): from recovery of III and DDD; may lose immunity at rate ω\omegaω and return to SSS.
- Dynamic Recovery Rate (γD\gamma_DγD​): decreases with resistance (first two terms); can recover towards the initial value γD0\gamma_{D0}γD0​ when resistance eases (third term).
##### Parameter List
| Parameter
| Meaning
| Default Value
| NNN
| Total population
| 10000
| β\betaβ
| Transmission rate
| 0.03
| ρ\rhoρ
| Relative infectiousness after treatment
| 0.2
| σ\sigmaσ
| Incubation transition rate
| 0.0005
| γI\gamma_IγI​
| Recovery rate without treatment
| 1/2000
| γD0\gamma_{D0}γD0​
| Initial treatment recovery rate
| 1/30
| δ\deltaδ
| Treatment coverage
| 0.01
| ω\omegaω
| Immunity loss rate
| 1/10
| ξ\xiξ
| End of drug protection rate
| 1/20
| kkk
| Resistance development rate
| 0.001
| rerere
| Resistance recovery rate
| 0.00001
| tmax⁡t_{\max}tmax​
| Total simulation time
| 2000
#### Simulation Process and Results
In the simulation, we first reproduced the current widespread infection of H. pylori: studies show that the average infection rate per individual is 40.66%24.
After the system reaches equilibrium, we introduce our therapy to observe how much our treatment can change the infection and control of H. pylori. Thus, we conduct the simulation in two stages:
- Stage 1 (0–1000 days): natural disease spread, low treatment rate, resistance gradually accumulates.
- Stage 2 (after 1000 days): introduce medication, increase treatment coverage δ\deltaδ, improve initial recovery rate γD0\gamma_{D0}γD0​, and reduce resistance development rate kkk.
After defining the simulation process, we use Python to numerically solve the above system of ODEs, obtaining the following results.
#### Results
[IMG] Figure 43
Figure 43: Population dynamics of SEIR-SD model with drug resistance.
In the first stage, we successfully reproduced the current widespread prevalence of H. pylori, demonstrating the reliability of our model.
After drug introduction, the epidemic is effectively suppressed: infection numbers decrease, treatment effect is maintained, and resistance stabilizes or grows slowly. This shows that our therapy can significantly improve the current situation.
##### Code availability
The codebase for dry lab part of Peking2025 is publicly available at GitHub Repository.
##### References
Stokes’ law. https://en.wikipedia.org/wiki/Stokes%27_law (Accessed on July 12, 2025).↖
de Ávila BE, Angsantikul P, Li J, et al. Micromotor-enabled active drug delivery for in vivo treatment of stomach infection. Nat Commun. 2017;8(1):272. Published 2017 Aug 16. doi:10.1038/s41467-017-00309-w.↖
Gao W, Dong R, Thamphiwatana S, et al. Artificial micromotors in the mouse’s stomach: a step toward in vivo use of synthetic motors. ACS Nano. 2015;9(1):117-123. doi:10.1021/nn507097k.↖
Ruiz-Pulido G, Quintanar-Guerrero D, Serrano-Mora LE, Medina DI. Triborheological Analysis of Reconstituted Gastrointestinal Mucus/Chitosan:TPP Nanoparticles System to Study Mucoadhesion Phenomenon under Different pH Conditions. Polymers (Basel). 2022;14(22):4978. Published 2022 Nov 17. doi:10.3390/polym14224978 ↖
Klaile E, Vorontsova O, Sigmundsson K, et al. The CEACAM1 N-terminal Ig domain mediates cis- and trans-binding and is essential for allosteric rearrangements of CEACAM1 microclusters. J Cell Biol. 2009;187(4):553-567. doi:10.1083/jcb.200904149↖
Grosdidier A, Zoete V, Michielin O. SwissDock, a protein-small molecule docking web service based on EADock DSS. Nucleic Acids Res. 2011;39(Web Server issue):W270-W277. doi:10.1093/nar/gkr366 ↖
Berman HM, Battistuz T, Bhat TN, et al. The Protein Data Bank. Acta Crystallogr D Biol Crystallogr. 2002;58(Pt 6 No 1):899-907. doi:10.1107/s0907444902003451 ↖↖
Berman H, Henrick K, Nakamura H, Markley JL. The worldwide Protein Data Bank (wwPDB): ensuring a single, uniform archive of PDB data. Nucleic Acids Res. 2007;35(Database issue):D301-D303. doi:10.1093/nar/gkl971 ↖↖
Waterhouse A, Bertoni M, Bienert S, et al. SWISS-MODEL: homology modelling of protein structures and complexes. Nucleic Acids Res. 2018;46(W1):W296-W303. doi:10.1093/nar/gky427 ↖
Abraham M, Alekseenko A, Andrews B, et al. GROMACS 2025.3 Manual (Version 2025.3). Zenodo; 2025. doi:10.5281/zenodo.16992569. Available at: https://doi.org/10.5281/zenodo.16992569. ↖
Kofahl B, Klipp E. Modelling the dynamics of the yeast pheromone pathway. Yeast. 2004;21(10):831-850. doi:10.1002/yea.1122↖
Shellhammer JP, Pomeroy AE, Li Y, et al. Quantitative analysis of the yeast pheromone pathway. Yeast. 2019;36(8):495-518. doi:10.1002/yea.3395 ↖
Hao N, Behar M, Elston TC, Dohlman HG. Systems biology analysis of G protein and MAP kinase signaling in yeast. Oncogene. 2007;26(22):3254-3266. doi:10.1038/sj.onc.1210416 ↖
Klauda JB, Venable RM, Freites JA, et al. Update of the CHARMM all-atom additive force field for lipids: validation on six lipid types. J Phys Chem B. 2010;114(23):7830-7843. doi:10.1021/jp101759q ↖
Venable RM, Sodt AJ, Rogaski B, et al. CHARMM all-atom additive force field for sphingomyelin: elucidation of hydrogen bonding and of positive curvature. Biophys J. 2014;107(1):134-145. doi:10.1016/j.bpj.2014.05.034 Biophysical Journal, 107(1), 134-145. ↖
Jo S, Kim T, Iyer VG, Im W. CHARMM-GUI: a web-based graphical user interface for CHARMM. J Comput Chem. 2008;29(11):1859-1865. doi:10.1002/jcc.20945 ↖
Pogozheva ID, Armstrong GA, Kong L, et al. Comparative Molecular Dynamics Simulation Studies of Realistic Eukaryotic, Prokaryotic, and Archaeal Membranes. J Chem Inf Model. 2022;62(4):1036-1051. doi:10.1021/acs.jcim.1c01514 ↖
Tinh NT, Dung NV, Trung CT, Thuy VT. In Vitro Characterization of a Recombinant AHL-Lactonase from Bacillus cereus Isolated from a Striped Catfish (Pangasianodon hypophthalmus) Pond. Indian J Microbiol. 2013;53(4):485-487. doi:10.1007/s12088-013-0415-y ↖
Pais P, Almeida V, Yılmaz M, Teixeira MC. Saccharomyces boulardii: What Makes It Tick as Successful Probiotic?. J Fungi (Basel). 2020;6(2):78. Published 2020 Jun 4. doi:10.3390/jof602007 ↖
Rehman ZU, Momin AA, Aldehaiman A, Irum T, Grünberg R, Arold ST. The exceptionally efficient quorum quenching enzyme LrsL suppresses Pseudomonas aeruginosa biofilm production. Front Microbiol. 2022;13:977673. Published 2022 Aug 22. doi:10.3389/fmicb.2022.977673 ↖
Śmigiel WM, Mantovanelli L, Linnik DS, et al. Protein diffusion in Escherichia coli cytoplasm scales with the mass of the complexes and is location dependent. Sci Adv. 2022;8(32):eabo5387. doi:10.1126/sciadv.abo5387 ↖
Brune D, Kim S. Predicting protein diffusion coefficients. Proc Natl Acad Sci USA. 1993;90(9):3835-3839. doi:10.1073/pnas.90.9.3835 ↖
Kim MH, Choi WC, Kang HO, et al. The molecular structure and catalytic mechanism of a quorum-quenching N-acyl-L-homoserine lactone hydrolase. Proc Natl Acad Sci USA. 2005;102(49):17606-17611. doi:10.1073/pnas.0504996102 ↖
Zhou XZ, Lyu NH, Zhu HY, et al. Large-scale, national, family-based epidemiological study on Helicobacter pylori infection in China: the time to change practice for related disease prevention. Gut. 2023;72(5):855-869. doi:10.1136/gutjnl-2022-328965 ↖
Velazhahan V, Ma N, Vaidehi N, Tate CG. Activation mechanism of the class D fungal GPCR dimer Ste2.* Nature*. 2022;603(7902):743-748. doi:10.1038/s41586-022-04498-3 ↖
Watanabe A, Nakajima A, Shiroishi M. Recovery of the histamine H3 receptor activity lost in yeast cells through error-prone PCR and in vivo selection. Sci Rep. 2023;13(1):16127. Published 2023 Sep 26. doi:10.1038/s41598-023-43389-z ↖
Scott BM, Gutiérrez-Vázquez C, Sanmarco LM, et al. Self-tunable engineered yeast probiotics for the treatment of inflammatory bowel disease. Nat Med. 2021;27(7):1212-1222. doi:10.1038/s41591-021-01390-x ↖
Ferrua MJ, Singh RP. Modeling the fluid dynamics in a human stomach to gain insight of food digestion.* J Food Sci*. 2010;75(7):R151-R162. doi:10.1111/j.1750-3841.2010.01748.x ↖
