[IMG]
Model
[IMG]
Loading
Overview
1 Plant virus diffusion infection model
1.1 Wind Field Large Eddy Simulation (LES)
1.2 Turbulent diffusion model of plant viruses
1.3 Plant virus pattern dynamics
1.4 Plant virus infestation process
[IMG]
2 Movement of RNA in plant transduction
2.1 Physical Shapes and Entropic Elasticity of RNA in Fluids
2.2 Wiener process in vascular bundle
2.3 Transpiration tension in vascularity
[IMG]
3 Deep learning and central dogma
3.1 Replication and degradation dynamics
3.2 Feasibility analysis based on deep learning
[IMG]
4 Binding of antigens and antibodies
Reference
# Overview
Rice blast occurs in major rice regions of the world, with the more severe rice areas concentrated in Asia and Africa. Rice blast can occur in all growth stages and parts of rice, the most serious of which are leaf blast and neck blast. In disease-endemic areas or diseased fields, about 10%~30% of rice yield is reduced or even extinct every year [1]
Major grasses (maize, wheat and rice) together account for about half of global caloric intake. Unfortunately, our global dependence on grasses has inadvertently promoted some of the most destructive fungal plant pathogens, such as Magnaporthe Oryza sativa, the pathogen of rice blast.
In order to resist the damage of viruses to plants, we designed saRNA-based plant vaccines, and modeled the processes of virus infection, vaccine transport and delivery, efficacy time, antigen-antibody matching, etc. The whole modeling adopts a cross-scale model, from the macroscopic infection process to the microscopic molecular transport, combined with the neural network model and finite element method, and compared with the experimental results, to provide explanations and feasibility demonstrations for biological phenomena. The entire model is divided into four parts:
[IMG]
Figure 1 workflow
(1) Plant virus diffusion infection model: the wind field large eddy simulation(LES) was carried out in the experimental area (Zhejiang University), which provided a basis for the diffusion coefficient in the plant virus turbulent diffusion model. Assuming the linear propagation of the initial instantaneous wavefront, the influence of temporal and spatial factors on virus propagation is investigated by analytical solution. For the nonlinear plant virus diffusion model, the spatiotemporal dynamics of infection were constructed according to pattern dynamics.
(2) Movement of RNA in plant transpiration: according to the random walk model and considering the influence of charge on the spatial configuration of RNA, a possible three-dimensional configuration is obtained. Since the random movement of the entire RNA molecule needs to be considered at its scale, with the concentration gradient-driven vaccine transport delivery, the vaccine transport delivery process under multiple inducing forces is simulated.
(3) Deep learning and central dogma: With the assistance of AlphaFold & deep learning and stochastic differential equations, the replication, translation and degradation processes of saRNA are constructed, the translation results of RNA are predicted, and the time of pharmacodynamic effects is analyzed according to the competitive model of RNA replication and degradation. In the process of training the model, white Gaussian noise and random restart are added to improve the robustness and stability of the model, and the generalization of translation result prediction is improved with the help of meta-learning.
(4) Binding of antigens and antibodies: according to the deep learning model, in the process of selecting the best antigen and antibody binding, the binding energy and chemical pairing relationship are synthesized, and finally the binding method with the highest score and the corresponding protein structure are selected. Finally, on the basis of the screening results, the binding probability is analyzed according to the coordination model to provide a feasibility demonstration for the vaccine effect.
# 1 Plant virus diffusion infection model
## 1.1 Wind Field Large Eddy Simulation (LES)
Meteorology is a huge factor affecting the whole process of plant growth, and there are various air currents around the world, as shown in the figure below [2]. Since the transmission mode of rice blast spores is mainly environmental transmission (such as airflow, etc.), it is necessary to simulate the airflow field eddy in the planting environment. The Yuquan Campus of Zhejiang University (longitude: 120.123077, latitude: 30.263842) where the ZJU-China team is located was used as an example to simulate the rice planting environment.
[IMG]
Figure 2 Meteorological simulation of Hangzhou area (2023-08-20-15:00)
[IMG]
Figure 3 Satellite imagery of Yuquan Campus of Zhejiang University
[IMG]
Figure 4 Geometric modeling
Because it is large-scale meteorological flow, then, large eddy simulation is used to directly calculate large-scale fluid pulsation, and small-scale vortex is filtered. For the fundamental Navier-Stokes tensor equation:
(1)∂ui∂xi=0
(2)DuiDt=−1ρ∂p∂xi+ν∂2ui∂xj∂xj+fi
where ui represents the magnitude of velocity, xi represents the spatial position of the fluid, fi represents the mass force, ρ represents the density of the fluid, p represents the pressure, t represents time, and ν represents Kinematic viscosity.
The method of small-scale vortex filtration is to perform low-pass filter of the Navier-Stokes equation, which decomposes the fluid velocity into large-scale motion velocity (solvable scale pulsation) and small-scale pulsation velocity (sublattice-scale pulsation):
(3)u(x,t)=u~(x,t)+u″(x,t)
where u(x,t) represents the actual velocity, u~(x,t) represents the low-pass pulsation, and u″(x,t) represents the residual pulsation. The integral filtering equation can be determined by the following expression:
(4)u~(x,t)=1l3∫−l2l2∫−l2l2∫−l2l2u(ξ,t)G(x−ξ)dξ1dξ2dξ3
where G(x−ξ) is the filter function, and the integral filtering of the cube of length l is performed, then the one-dimensional box integral filtering function can be expressed as:
(5)G(η)={1, |η|<l20, |η|>l2
In addition to box filtering, there are also gaussian filters and other forms. Considering the uniform filtering process, in the physical space, the filtering operation and the partial conduction operation can be interchanged. Substitute the above form into the Navier-Stokes equation, we can derive the filtered Navier-Stokes equation:
(6)∂u~i∂xi=0
(7)∂u~i∂t+∂u~iu~j∂xj=−1ρ∂p~∂xi+v∂2u~i∂xj∂xj+f~i+∂τij∂xj
where (⋅)~ represents filtered variable, and τij=u~iu~j−uiuj~ is the sublattice stress. Sublattice stress is the momentum transport between filtered out small-scale pulsations and solvable-scale turbulence. To achieve large eddy simulation, it is necessary to construct a closure of sublattice stresses.
Assuming that the small-scale pulsations filtered out by the isotropic filter are locally equilibrium, that is, the energy transfer from the unsolvable scale pulsations of the solvable scale term is equal to the turbulent energy dissipation, the sublattice Reynolds stress mode in the vortex-viscous form is [3]:
(8)τij=u~iu~j−uiuj~=2νtSij−13 τkkδij
where νt is the sublattice vortex viscosity coefficient, Sij is the strain rate tensor, and the figure below is the large eddy simulation results of the environment of Yuquan Campus of Zhejiang University in a defined physical space.
[IMG]
Figure 5 Large eddy simulation results
Assuming that the wind flows from the cold source to the hot environment, the West Lake is considered as the cold source, so the setting condition is that the air flows from east to west. From the simulation results, it can be seen that in the part where the mountain and architecture areas are not encountered, the air flow has relatively small vortex generation, while in the part with buildings and mountains, the air flow has a relatively large and unstable vortex state, and the streamline line is also deflected, so the planting environment here has the characteristics of turbulent atmosphere.
## 1.2 Turbulent diffusion model of plant viruses
Consider a large, homogeneous field, planted to the rice which is genetically uniform, and a single infection of the plant pathogen is introduced to the field. Consider further that the theory of turbulent diffusion governs the dispersal of windborne spores of most foliar pant pathogens which suggests that spread becomes more efficient as the area with diseased plants expands. This should result in epidemics with increasing frontal velocity (dispersive epidemic waves).
Under ideal circumstances, the direction from which the wind moves through the rice is random. Then, the fact leads to a focal epidemic whose front will expand radially in a wavelike manner from the site of initial infection [4].
Let U(r,t) be the diseased rice tissue (e.g., the number of diseased leaflets per plant) at radial distance r and time t. Based on the simulation of the airflow above (see Section 1.1 for details) with the theory of Richardson for turbulent atmospheric diffusion predicts that the diffusion coefficient is K(r)∝r43. And considering the disease intensifies follows the Vanderplank logistic equation with apparent infection rate γ, then the differential equation is:
(9)∂U(r,t)∂t=1r∂∂r(K(r)r∂U∂r)+γU(1−U)
where K(r)=C1r43, C1 is a constant, then:
(10)∂U(r,t)∂t=C1r∂∂r(r73∂U∂r)+γU(1−U)
However, the equation (10) cannot be solved analytically. If we only focus on the front of the epidemic, the differential equation can be solved approximately by changing the logistic term γU(1−U) into linear term γU:
(11)∂U(r,t)∂t=C1r∂∂r(r73∂U∂r)+γU
solving the equation, together with the boundary condition U(r,0)=δ(r) and U(∞,t)→0:
U(r,t)=16π(49C1t)3exp⁡(γt−9r234C1t)
[IMG]
Figure 6 linear approximation (take γ and C1 as unit)
[TABLE] Table 1 Infection Rate vs. Time Series
| Time Series
| 0
| 23
| 45
| 68
| 91
| 113
| 136
| 158
| 181
| Infection Rate
| 0.00%
| 11.12%
| 23.18%
| 37.83%
| 47.23%
| 59.14%
| 69.54%
| 77.46%
| 80.58%
The table above shows the changes in the proportion of infections measured with the time series at a defined place r. According to the quasi-steady-state frontal approximation, the curves are fitted using the sets of data, and the Trust-Region Dogleg method is used to calculate the nonlinear system of equations with random initial iterations, and the constant values and iterative data are obtained in the following table (only convergent solutions are shown):
[TABLE] Table 2 Fitting constants
| Times
| C1 origin
| γ origin
| r origin
| C1 converge
| γ converge
| r converge
| 1
| 0.221747
| 0.117418
| 0.296676
| 0.007803174
| 0.049709744
| 0.140243978
| 2
| 0.679728
| 0.136553
| 0.721227
| 0.007803174
| 0.049709744
| 0.140243978
| 3
| 0.08347
| 0.133171
| 0.173389
| 0.007803306
| 0.049710212
| 0.140244064
| 4
| 0.325146
| 0.105629
| 0.610959
| 0.007803174
| 0.049709744
| 0.140243978
| 5
| 0.695140
| 0.067993
| 0.254790
| 0.007803174
| 0.049709744
| 0.140243978
| 6
| 0.473486
| 0.152721
| 0.341125
| 0.007803304
| 0.049710294
| 0.140245163
| 7
| 0.318074
| 0.119215
| 0.939829
| 0.007803174
| 0.049709744
| 0.140243978
| 8
| 0.218677
| 0.105798
| 0.109697
| 0.007803174
| 0.049709744
| 0.140243978
| 9
| 0.192028
| 0.138874
| 0.696266
| 0.007803174
| 0.049709744
| 0.140243981
| 10
| 0.347713
| 0.149997
| 0.586092
| 0.007803174
| 0.049709744
| 0.140243978
It can be found that the convergent solutions are all the same convergent solution in the error range, other initial iteration points do not make the results converge or conform to practical requirements, and the larger the value of the random point (the more it deviates from the initial stability domain), the less it converges.
[IMG]
From the left graph, it can be seen that the data can match the curve only if it meets the quasi-static short time approximation, and the curve deviates after exceeding the quasi-static short time.
## 1.3 Plant virus pattern dynamics
In order to construct a mathematical model consisting of activator and inhibitor, assuming V(r,t) as the dead or recovered rice tissue (i.e., that tissue cannot infect other plants) at radial distance r and time t , the equation is:
(13)∂V(r,t)∂t=K2r∂∂r(r∂V∂r)+G~(U,V)
where K2 is the diffusion coefficient of the infection-free rice, G~(U,V) is the function controls interactions between nfected and uninfected plants. Considering a small area of the field, the diffusion coefficient can be regarded as a constant parameter K1, then the equation is:
(14)∂U(r,t)∂t=K2r∂∂r(r∂U∂r)+F~(U,V)
Combine equations (13)(14) and take a polynomial function approximation to the function F~ and G~, assuming that the uninfected tissue will get infected by contacting with the other two infected tissue, then the form is consistent with pattern dynamics.
[IMG]
Figure 7 Pattern Dynamics
The whole process of the spread of M. Oryza sativa is shown in the figures above, the patterns start from small random position, and then spread to the whole area, and the speed of diffusion first increases and then decreases.
## 1.4 Plant virus infestation process
The rice blast is mainly in the form of conidia and hyphae under certain temperature and humidity conditions relying on airflow, through airborne transmission to plant leaves and other aerial parts, in the presence of water film and suitable environmental conditions, the viscosity of the conidia tip makes it adhered to the surface of aboveground tissues such as rice leaves. Then, under the premise of not needing external nutrients, the conidia only germinate through the endogenous nutrients of the spores to form bud tubes, and then the bud tubes specifically differentiate into attached cells with melanin. Then the attachment cells of melanin form infection plugs and penetrate the stratum corneum and superficial cell wall of some plant tissues above ground, invading epidermal cells or elongated cells. After invasion, rice blast bacteria grow in rice cells, and the hyphae rapidly expand and spread, and then infect adjacent epidermal cells and penetrate deep into mesophyll cells.
After the infection is completed, hyphae and conidia are produced in the infected cells, and are directly released into the air from the stomata or penetrating the plant epidermis, and new conidia are produced at the apex of the conidia peduncle, and mature conidia are released into the air, and again spread to the leaves of other rice by means of airflow propagation to cause secondary infection [5].
# 2 Movement of RNA in plant transduction
## 2.1 Physical Shapes and Entropic Elasticity of RNA in Fluids
Consider random walk of saRNA to describe its physical morphology in rice vascular. Assuming the polymer chains can be decentralized into plenty of rigid segments, denoted Kuhn length a. It is assumed that the physical morphology of saRNA is determined by end-to-end distance R, i.e., the distance that the end of the RNA segments leaves the initial end after random walk N times. Using the averaging method, the expected value of R is:
(15)⟨R⟩=⟨∑i=1Nxi⟩
where xi=±a is the displacement of step i, then considering the variance of random walk:
(16)⟨R2⟩=⟨∑i=1N∑j=1Nxixj⟩
the expansion of equation (16) is:
(17)⟨R2⟩=∑i=1N⟨xi2⟩∑i≠j=1N⟨xixj⟩
Due to the randomness of the walk, the walk at step j is not correlated with the i step, then the second term of equation (17) is 0, and the variance is determined entirely by the autocorrelation displacement:
(18)⟨R2⟩=Na2
according to the results of one-dimensional random walk [6], it can be generalized to three-dimensional form:
(19)p(R;N)=Ne−κR2
the parameters N and κ are determined by normalization and variance:
(20){∭−∞+∞p(R;N)d3R=1∭−∞+∞R2p(R;N)d3R=Na2
the random walk chain distance distribution consisting of Kuhn length with N step length a is obtained:
(21)p(R;N)=(32πNa2)32e−3R22Na2
[IMG]
Figure 8 Gaussian Distribution of the Chain Length of RNA Molecules
From the results, it can be seen that ideally, the probability of conformation is the largest when R is small (the probability of center position is the highest in the figure), that is, RNA molecular chains tend to form more uniform clusters, while fully elongated long chains are not easy to appear, and the simulation schematic diagram of the two cases based on molecules is as follows:
[IMG]
Figure 9 End-to-end distance of the chain
### Appendix
The theory that RNA segments can be discretized into plenty of rigid segments is based on the theory of persistence length of RNA, assuming that within the persistence length, the molecular segments basically take the form of straight segments. The persistence length is the characteristic scale of the tangent vector correlation function attenuating along the chain segment:
(22)⟨t(s)⋅t(u)⟩=e−|s−u|ξp
where t(x) represents the tangent vector, x represents the position along the segment in a chain segment of length L, and ξp is the resident length, it should be noted that the exponential decay rate only applies to sufficiently small spacings |s−u|. By definition, the end-to-end distance is:
(23)R=∫0Lt(s)ds
then the end-to-end distance variance is:
(24)⟨R2⟩=⟨∫0Lt(s)ds⋅∫0Lt(u)du⟩≈2Lξp
It can be seen that the relationship between the Kuhn length a and the resident length ξp is a=2ξp.
The physical morphology of RNA is not only affected by thermodynamics, but also by the electrostatic action of the spatial structure, as well as the electrical action of ions around the liquid during vascular transport (satisfying the Poisson-Boltzmann equation), considering the above influencing factors, the ball and stick model of a physical form of RNA is shown below [7]
[IMG]
Figure 10 RNA ball stick morphology
## 2.2 Wiener process in vascular bundle
Based on the investigation of its physical form in Section 2.1, if the saRNA molecule is regarded as a whole, it meets the requirements of the Wiener process for molecular scale of 0.1~10 microns. Consider RNA molecule with coordinates q and momentum p suspended in a liquid composed of solvent particles:
(25)H(p,q,{pi,qi})=p22M+∑i=1Npi22mi+∑i=1NVFP(q−qi)+∑1≤i≤j≤NVFF(qi−qj)+Vext(q)
where the VFP is the interaction of solvent particles and particles, the VFF is the interaction of solvent particles and solvent particles, and the Vext is the external field potential. Leaving aside the macroscopic flow of the fluid, assuming that there is a harmonic oscillator potential VFP(q−qi)=12miωi2(q−qi)2, and assuming that the interaction potential between solvent molecules is zero potential energy, and all solvent molecular masses are the same m, and M≫m, then the Hamiltonian can be simplified to: H(p,q,{pi,qi}) = p22M + ∑ip22mi + 12∑iωi2(q−qi)2 + V(q)
according to the momentum theorem and Hamiltonian equations:
(26)d2qidt2=1mdpidt=−1m∂H∂qi=−ωi2(qi−q(t))
From the Duhamel integral, it can be seen that the trajectory of the solvent molecule is:
(27)qi(t)=qi(0)cos(ωit)+pi(0)mωisin(ωit)+ωi∫otq(s)sin(ωi(t−s))ds
Integral by parts to equation (27):
(28)qi(t)=qi(0)cos(ωit)+pi(0)mωisin(ωit)+q(t)−q(0)cos(ωit)−1M∫0tp(s)cos(ωi(t−s))ds
Then the Hamiltonian equation for RNA clusters is:
(29)dqdt=pM
(30)dpdt=−∇V(q)−∑i=1Nmiωi2(q−qi)
where (q−qi) can be obtained by transposition from equation (28):
(31)qi(t)−q(t)=qi(0)cos(ωit)+pi(0)mωisin(ωit)−q(0)cos(ωit)−1M∫0tp(s)cos(ωi(t−s))ds
let:
(32)K(t)=∑imωi2cos(ωit)
(33)ξ(t)=−∑imωi2(q(0)−qi(0))cos(ωit)+∑ipi(0)ωisin(ωit)
Substitute the above equation into (29)(30), we can derive the equilibrium dynamical equation:
(34){dqdt=pMdpdt=−∇V(q)−∫0tp(s)MK(t−s)ds+ξ(t)
It can be seen from the above kinetic equation that without considering the interaction between solvents, K(t) reflects that the solvent molecules only play a buffering role, remembering the effect of RNA particles on the solution at the past moment and delaying this effect to the RNA particles; ξ(t) is related to the initial states of the system, which are unknown and can be treated as random variables. Assuming that the solution is in equilibrium, ξ(t) conforms to the Gaussian distribution, then there are:
(35)⟨ξ(t)⟩=0
(36)⟨ξα(t)ξβ(t′)⟩=kBTδαβK(t−t′)
Taking K(t)=2μδ(t) gives the Langevin equation for RNA, where ξ(t) is white Gaussian noise. Since the movement of RNA is a superposition of random motion and transpiration tension, if the influence of one of these factors is studied, it is necessary to characterize it with the assistance of another equivalent tracer particle, because the expression of fluorescent protein is related to RNA, and to a certain extent, the two are similar in scale, so fluorescent protein can be used as a "conjugated particle" to approximate the influence of RNA random motion factors. For solving the above stochastic differential equation, the following assumptions are met according to the experiment:
(1) Fluorescent label does not have a specific drift direction:
(37)⟨Wt+t0−Wt0⟩=0
(2) The drift direction of the fluorescent label is independent of the previous time, and the different increments are independent of each other if ti<ti+1≤tj<tj+1:
(38)⟨(Wtj+1−Wtj)(Wti+1−Wti)⟩=0
(3) The mean displacement squared of the movement of the fluorescent label is proportional to time:
(39)⟨(Wt+t0−Wt0)2⟩∝|t|
(4) The displacement increment of fluorescent label obeys the Gaussian distribution:
(40)Wt+t0−Wt0∼N(0,t)
Since the mass of the fluorophore is small, the kinetic equation after ignoring the inertia term can be reduced to:
(41)dq(t)dt=−∇V(q)+ξ(t), ⟨ξ(t)⟩=0, ⟨ξ(t)ξ′(t)⟩=δ(t−t′)
Solving the above equation, we can derive q(t)=Wt, i.e., the solution to the differential equation for the stochastic process is the Wiener process. For a stochastic Xt process, if it has a Wiener process with an offset of f(Xt,t) and a standard deviation 2D(Xt,t), the corresponding Langevin equation is:
(42)dXt=f(Xt,t)dt+2D(Xt,t)dWt
For the random process to take the value at the left end of the interval, the Ito- Langevin equation for fluorescence motion can be obtained by using the Ito integral:
(43)Xt=X0+∫0tf(Xt,t)dt+limmax{ti+1−ti}→0∑i2D(Xt,t)(Wi+1−Wi)
The trajectory can be obtained by computer simulation of the above process, assuming that the fluorescence starts from the black point to the red point terminate, and the trajectory color changes from the initial position white to the dark blue at the end point, which is consistent with the fluorescence diffusion of the experiment under statistical average, as shown in the figure below:
[IMG]
Figure 11 Timing Wiener process
## 2.3 Transpiration tension in vascularity
Rice transpiration can be modeled according to energy conservation and mass conservation, which links transpiration to leaf-to-air vapor pressure difference:
(44)λET=Rn−Hc
(45)λET=ρCpγgtDc
where λ is the latent heat of vaporization, ET is the evapotranspiration rate, Rn is the net radiation intercepted by the crop, Hc is the sensible heat exchanged between the canopy and the air, ρ is the density of the air, Cp is the specific heat of air, γ is the psychrometric constant, gt is the total canopy conductance to water vapor transfer, Dc is the canopy-to-air vapor pressure difference. Since some parameters are difficult to measure, the parameters need to be transformed or equivalented [8].
In the process of modeling plant conducting tissues, the transpiration of plants will cause the difference in water content in the ducts from roots to leaf fragments, resulting in inorganic salt concentration gradients, while the TLS segment of RNA can bind proteins to drive RNA movement in the ducts with a concentration gradient. Not only that, transpiration itself also causes water to flow from the roots to the leaves, and can also carry RNA throughout the body. Since the scale of the simulation is macroscopic, a cross-scale model needs to be established to simulate the average effect of the Wiener process in Section 2.2.
In the simulation, the chemical potential difference and osmotic pressure difference caused by the concentration gradient can be equivalent to the duct pipe pressure difference, and the overall equivalent structural pressure difference and the laminar flow of the pipe triggered by the initial flow rate can simulate the process of RNA passing through the plant conducting tissue to the whole body.
[IMG]
Figure 12 Small-scale approximation of straight-vascular bundle flow simulation
In the figure above, a small scale approximation part along the axis length of a plant vascular bundle is taken, and due to the small axis length of the selected segment, it can be approximately equivalent to a straight segment for a curved plant vascular. Considering the fluid pressure differential drive and Brownian motion caused by transpiration tension, the saRNA transport is relatively stable. And the actual plant vascular is with pipe curvature and there is a certain ring in the duct, ring and pipe bending will affect the flow state of fluid particles, making the actual flow more complex, as shown in the following two figures, vascular bending and the existence of ring lines will delay the flow speed, considering gravity, will further increase the resistance of the transpiration tension of the plant from the root to the leaf, so the flow state in the vascular tube is similar to laminar flow, the flow rate and streamline are relatively stable.
[IMG]
Figure 13 Curved vascular bundle flow velocity simulation
[IMG]
Figure 14 Flow vortex simulation of curved vascular bundles
[IMG]
Figure 15 Particle transport motion simulation
In the experimental results, taking the results of 720bp GFP mRNA and 3951bp RUBY mRNA as an example, three TLS and a control group were used in the experiment, and Actin was used as the control group in each collection, and the fluorescence intensity was measured with qPCR to reflect the mRNA concentration of different spatial positions of the plants on the fourth day.
(1) In the same spatial position, by filtering the flow direction data (that is, taking the Lagrange description coordinate system as the reference coordinate), a spatial position change map is made, and extracting different frames can verify that its motion is random in the relative coordinate system.
(2) With the increase of distance, the amount of mRNA decreases, which is the same as the finite element simulation result.
(3) With the increase of the bp number of mRNA, it is clear that the movement efficiency of the GFP mRNA group is higher than that of the RUBY mRNA group, that is, the larger physical configuration molecules as particle streams, their transport is slower, consistent with the finite element results, the figure below is the diffusion spatial location map and the relative mRNA magnitude.
[IMG]
Figure 16 Random motion in Lagrange description
[TABLE] Table 3 Experimental result
| 0 cm
| 1 cm
| 2 cm
| 3 cm
| Ara. ΔΔt
| 0.95237
| 1.03555
| 1.01207
| 0.027021215
| 0.03111
| 0.02469
| 0.006631412
| 0.00713
| 0.00709
| 0.003939975
| 0.003794662
| Ara. full
| 1.03142
| 0.89493
| 1.07365
| 0.502395045
| 0.50875
| 0.58817
| 0.1900898
| 0.14691
| 0.13312
| 0.16744408
| 0.128286766
| 0.281430415
| Nico. full
| 0.99112
| 1.00888
| 0.354603498
| 0.36521
| 0.44602
| 0.066838305
| 0.05554
| 0.04482
| 0.065587886
| 0.08402915
| 0.07390646
| None
| 1.04465
| 0.96651
| 0.98884
| 0.007697609
| 0.00743
| 0.00751
| 0.007601851
| 0.00888
| 0.00721
| 0.005060847
| 0.006411933
| 0.006501321
# 3 Deep learning and central dogma
## 3.1 Replication and degradation dynamics
Triggering the replication of saRNA requires the replicase to recognize a specific site, so the saRNA that is not bound to the replicase is regarded as an inactive state Is and the saRNA that binds to the replicase is regarded as an activated state As, then there are:
(46)IsaRNA⇋AsaRNA
The state function p is used to digitize the active and inactive states φ(IsaRNA)=0;φ(AsaRNA)=1, and assume that the degradation products of saRNA are η, and the degradation products of proteins are ξ, α, β, γ, ω, c1, c2 are constants:
[IMG]
A ternary function is used to describe a random system, if λ represents the amount of saRNA (including activated and inactivated, where the proportion of activated saRNA in the total is θ), μ represents the amount of protein, and φ is a state function variable, then the joint distribution rate is:
(47){fλμ=P[saRNA=λ,protein=μ;φ=0]gλμ=P[saRNA=λ,protein=μ;φ=1]
the master equation of the system over time is:
(48)dfλμdt=c1gλμ−c2fλμ+(1+γ)[(λ+1)fλ+1;μ−λfλμ]+βλfλ;μ−1+ω(μ+1)fλ;μ+1−(βλ+ωμ)fλμ
(49)dgλμdt=c2fλμ−c1gλμ+(1+γ)[(λ+1)gλ+1;μ−λgλμ]+αθφ(A)gλ−1;μ−αθφ(A)gλμ+βλgλ;μ−1+ω(μ+1)gλ;μ+1−(βλ+ωμ)gλμ
where λ, μ∈N0, and the influence terms in the differential equation are all influence terms added considering feedback regulation. When there is a large number of genes and proteins, according to the Law of Large Numbers, the result will converge according to the probability, but this requires a lot of differential equations to describe the phenomenon, as the number of molecules increases, the number of differential equations required will exceed the solvable range, so considering practical applications, it is necessary to simplify the above master equation and describe the system with stochastic differential equations to make the problem solvable[9].
For the above phenomenon, the state of the gene is described by the random process G(t):
(50)dλdt=−λ+H⋅G(t)
(51)dμdt=KΛ−σμ
The stable solution of the above equation is described by expectation as well as variance, as shown in the figure:
[IMG]
Figure 17 Relative mRNA level predicted of different days
[IMG]
Figure 18 Decline rate of mRNA
To better describe the phenomenon, different molecular behaviors can be modeled separately over time:
(1) Expression of plasmid: After the plasmid is injected into the plant, the expression amount will reach a peak after a certain period of time, after which it will be degraded, and it can be seen from the predicted results that the expression peaks on the 7th day of injection.
(2) Transcription and translation: Transcription and translation rely in part on the stochastic differential equation of (50)(51).
(3) Product degradation: After infection and vaccination, the previous product will be degraded during the recovery process of the plant, and the whole existence process lasts about 15 days from the prediction results.
## 3.2 Feasibility analysis based on deep learning
Artificial intelligence has been widely used in biological structure prediction, and the prediction of translated structure, especially the prediction of protein folding structure, has made great progress after the emergence of AlphaFold [10]. In this model, with the assistance of meta-learning, simple RNA sequence-based structure prediction is trained, and the feasibility of the project is analyzed through the results of structure prediction. Since AlphaFold does not solve the structural prediction caused by mutations, and mutations often occur in general biological experiments, the structural model based on mutation sequences is trained with the assistance of meta-learning, and the method of randomly adding restrictive white Gaussian noise is used in the generation of mutation raw samples, and the mutation sites are classified into different tasks in quantitative form, and the tasks are divided into Training Tasks and Testing Tasks in a ratio of 7:3. In each task, the original sample data is randomly produced by adding the method of restrictive white Gaussian noise for certain times, so that the data is more realistic, and the samples in each task are divided into Support Set and Query Set, according to which the Model Agnostic Meta Learning (MAML)[11] is used to train model parameters as the loss function to consider the value, and a random restart algorithm is added to avoid falling into local extremums in the optimization process. In the final protein structure prediction, this model uses the method of embedding AlphaFold to predict the results.
The criteria for evaluating the feasibility of the project are: after entering the genetic sequence in a certain plasmid measured in the experiment, the corresponding protein and its structure are predicted, and the experimental design is feasible if the final result (taking into account the bond angle, spacing, and amino acid type) matches the designed antibody with a high probability. By entering the sequence constructed in the experiment, the result feasibility is predicted.
[IMG]
Figure 19 Feasibility analysis process
# 4 Binding of antigens and antibodies
The selection process of antibodies can be with the assistance of deep learning models, in the process of selecting the best antigen and antibody binding, the binding energy and chemical pairing relationship are synthesized, and finally the binding method with the highest score and the corresponding protein structure are selected (see the Deep Learning Section for details), this chapter only discusses the binding probability of antigens and antibodies under the premise of selecting antibodies. Antigen-antibody binding is essentially a ligand receptor binding problem, consider the following chemical equation:
(52)A+B⇋AB
The extent to which the reaction proceeds can be described by the dissociation constant:
(53)Kd=[A][B][AB]
Since the probability of antigen-antibody binding is occupied by the receptor rate, the probability of the complex occupying the whole is:
(54)p=[A][B][AB]=[A]Kd1+([A]Kd)
Considering the solution lattice model, i.e., Φ ligands are randomly distributed in Ω lattices, according to the Boltzmann distribution function:
(55)Z(Φ,Ω)=∑e−βΦεsol+e−βεb∑e−β(Φ−1)εsol
The probabilities can be deduced as [6]:
(56)p=e−βεbΩΦ−1(Φ−1)!e−β(Φ−1)εsolΩΦ(Φ)!e−βΦεsol+e−βεbΩΦ−1(Φ−1)!e−β(Φ−1)εsol
where εb is the ligand-receptor binding energy and εsol is the energy of the ligand in solution, comparing (54)(56) two equations:
(57)Kd=1veβΔε
Taking kb=1.38×10−23J/(K⋅T), selecting the unit volume of 1nm3, εb−εsol≈−10kbT in the lattice model, it can be seen from the results that 95% binding rate can be achieved in a solution with a concentration of 101 order of magnitude, and compared with different binding energy differences, the greater the binding energy difference, indicating that the antigen-antibody binding is more specific, the more stable the binding, and the lower the concentration required to achieve 95% binding rate. In this project, our antibodies have high specificity, and the reference concentration provided in the modeling can be selected to maximize antibody efficiency.
[IMG]
Figure 20 The probability varies with concentration
# Reference
[1] HE Zhenrui, HUANG Xiaotong, SHU Canwei, ZHOU Erxun. Research Progress on Mycoviruses of Magnaporthe Oryza sativa[J]. Journal of Tropical Biology, 2021, 12(3): 385-392.
[2] earth :: a global map of wind, weather, and ocean conditions[EB/OL]. [2023-08-20]. https://earth.nullschool.net.
[3] Berselli L C. Mathematics of large eddy simulation of turbulent flows[M]. Berlin ; New York: Springer, 2006.
[4] Scherm H. On the velocity of epidemic waves in model plant disease epidemics[J]. Ecological Modelling, 1996, 87(1-3): 217-222.
[5] LE Mei-wang, CHEN Shiß, PAN Qing-hua, ZENG Ren-sen, LUO Shi-ming. A Review of Infecting Approaches of Rice Blast Fungus Magnaporthe grisea[J]. Acta Agriculturae Jiangxi, 2006, 18(2):101~105.
[6] Phillips R. Physical biology of the cell[M]. Second edition. London : New York, NY: Garland Science, 2013.
[7] Townshend R J L, Eismann S, Watkins A M, et al. Geometric deep learning of RNA structure[J]. Science, 2021, 373(6558): 1047-1051.
[8] Katsoulas N, Stanghellini C. Modelling Crop Transpiration in Greenhouses: Different Models for Different Applications[J]. Agronomy, 2019, 9(7): 392.
[9] Kærn M, Elston T C, Blake W J, et al. Stochasticity in gene expression: from theories to phenotypes[J]. Nature Reviews Genetics, 2005, 6(6): 451-464.
[10] Senior A W, Evans R, Jumper J, et al. Improved protein structure prediction using potentials from deep learning[J]. Nature, 2020, 577(7792): 706-710.
[11] Finn C, Abbeel P, Levine S. Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks[M]. arXiv, 2017.
[IMG]
BACK TO
TOP !
