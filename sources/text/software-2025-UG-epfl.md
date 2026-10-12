# Software
The software architecture and algorithms that enable autonomous flight and data processing.
Table of Contents
## Overview
Our software began with the drone, but it doesn’t end there. It now powers the entire Pyronix workflow: automating flights and simulations, retrieving and analyzing biological data, and running the statistical tests that link design to results. The stack plays well with synthetic biology standards (SBOL/SBOL3) and open formats (CSV/JSON/YAML), and it integrates smoothly with external tools via clean Python APIs, ROS nodes, and a simple CLI. It’s easy to use and well documented, with examples and a ROS installation tutorial PDF provided below. Under the hood, the codebase is thoughtfully structured and commented, supported by architecture diagrams, CI tests, and containerized environments for full reproducibility.
Most software work centers on the drone (covered first on this page), while additional, indispensable tools are outlined in Other Software Contributions.
## Drone Software - System Diagram
[IMG] Software system diagram
[CAPTION] Figure 1: High-level software architecture showing data flows between Jetson, Pixhawk, cameras, and ground station.
The software stack on our UAV is designed to make the system modular, autonomous, safe, and versatile. Beyond simple remote control, the drone can process sensor data, make decisions, and coordinate its components with minimal human input.
A lot more detail can be found in the Engineering section where we detail what we tried and what worked or didn't.
## Key intended features
- ROS Integration (Robot Operating System): Provides a unified communication backbone so that all modules, from cameras to the flight controller, work seamlessly together.
- Stereo Vision & Depth Estimation: Running on the Jetson, our UAV uses state-of-the-art models to generate depth maps, detect obstacles, and navigate safely in dense forests. Everything runs onboard for fast inference and autonomous operation.
- Live Video & Telemetry: Camera and IR feeds are encoded onboard and streamed in real time to the ground station over wfb-ng, a modified Wi-Fi protocol optimized for low-latency, long-range video transmission.
- Flight Control & Sensors: The Pixhawk controller manages stability and integrates distance sensors, while coordinating with the Jetson for higher-level autonomy.
- Failsafe Remote Control: A dedicated transmitter/receiver link ensures that the operator can always take over manually; a simple switch on the remote triggers failsafe mode for maximum safety.
- Route Planning: With QGroundControl, we pre-plan complex missions from a laptop, enabling autonomous patrols and fire-monitoring routes.
This architecture, powered by PX4, ROS, and open-source frameworks, opens the door to many features: automated fire detection alerts, dynamic re-routing, swarm coordination, and advanced monitoring for large forest areas.
## Robot Operating System (ROS)
#### What is ROS?
An open-source middleware that connects robotic hardware and software. It offers messaging, tooling, and conventions for building complex robot apps—more a framework than a full OS.
#### What is it used for?
- Orchestrates communication between modules
- Processes sensor data in real time
- Coordinates perception, navigation, and control
- Enables modular, reusable system design
#### Why ROS for our drone?
- Scalable: Add sensors/components without rewrites
- Supported: Huge ecosystem (vision, mapping, AI)
- Flexible: Plays well with PX4, Gazebo, Isaac, etc.
- Future-proof: Suits research and industrial use
#### How we used it?
- Linked Pixhawk (PX4) for control/telemetry (via MAVLink / MAVROS2)
- Integrated stereo + IR cameras for real-time processing
- Enabled live video and depth mapping
- Structured all data exchange via ROS topics/services
Due to time limitations, the ROS integration could not be fully achieved. The progress achieved can be seen on the Software GitLab repository.
### ROS Nodes Diagram
[IMG] ROS nodes diagram
[CAPTION] Figure 2: ROS2 node layout showing perception, planning, and telemetry flows.
### Our ROS2-based UAV stack (Jetson Orin Nano)
- Camera Input 1: Left RGB feed
- Camera Input 2: Right RGB feed
- IR Input: Thermal/infrared feed
- Foundation Stereo Processing: Fuses left/right images for depth estimation
- SLAM Node: Combines stereo depth + GPS for mapping & localization
- Obstacle Avoidance & Path Planning: Computes safe navigation routes
- Fire Detection: Runs the yologx model trained on fire imagery for real-time wildfire detection
- Ground Transmission: Streams processed data via wfb-ng
- PX4 Flight Controller Link: Keeps ROS2 and PX4 synchronized for control and telemetry
### ROS Results: UDP Video Streaming Validation
[IMG] RViz window showing ROS 2 topics for stereo RGB and infrared video feeds
[CAPTION] Figure: Visualization of multiple UDP-fed ROS 2 video topics during system validation.
We validated the UDP-to-ROS bridge by streaming local videos with ffmpeg to emulate the Raspberry Pi camera feeds. The bridge nodes successfully published three simultaneous topics: the stereo RGB feeds (/stereo/left/image_raw and /stereo/right/image_raw) and the thermal IR feed (/ir/image_raw). The screenshot above captures the ROS 2 visualization while all topics ran in real time, confirming the nodes can ingest and relay stereo plus thermal data without drops.
### ROS Installation Guide
To help newcomers ramp up quickly, our team authored a concise guide tailored for macOS users. Because ROS 2 Jazzy is not yet available natively on Apple Silicon, we documented a Docker-based workflow that covers setting up a workspace, building packages, launching nodes, and inspecting topics, with direct links to the official tutorials. Check it out here: ROS and Gazebo Setup.
### Fire detection
YOLO-GX is an advanced member of the YOLO (You Only Look Once) family of object detection models. It improves on YOLOv8 with higher accuracy, faster inference, and better handling of small or complex objects, making it well-suited for tasks like fire, smoke, or obstacle detection in UAV applications. It’s lightweight enough for edge devices (like Jetson) while still delivering state-of-the-art real-time detection.
[IMG] YOLO-GX fire detection
[CAPTION] Figure 3: Example YOLO-GX detections on thermal/RGB imagery.
Reference: Frontiers: Wildfire detection (2024)
### Stereo Vision
For our UAV project aimed at forest fire detection and autonomous navigation, we plan to integrate FoundationStereo, a state-of-the-art stereo vision model. Trained on nearly one million diverse stereo pairs, it delivers strong zero-shot depth estimation without the need for per-scene calibration. The model processes left and right camera inputs by extracting features, constructing a cost volume, and applying advanced context reasoning to produce accurate, dense depth maps. This capability allows our UAVs to perceive terrain and obstacles reliably under challenging forest conditions, enabling both real-time fire monitoring and safe autonomous flight through complex environments.
[IMG] FoundationStereo depth estimation
[CAPTION] Figure 4: FoundationStereo output — dense depth maps used for obstacle avoidance and mapping.
### Video Transmission
We plan to use wfb-ng, an open-source digital video transmission system that repurposes Wi-Fi hardware for low-latency, long-range video links. Unlike standard Wi-Fi networking, which relies on higher-level protocols that introduce delay, wfb-ng transmits raw data frames directly over the air, minimizing overhead and ensuring faster response times. Onboard the drone, the Jetson Orin will capture and encode the RGB and IR camera feeds before streaming them over the wfb-ng link. A ground station equipped with a compatible Wi-Fi adapter will then receive and decode the streams for real-time monitoring. This setup provides a lightweight and efficient connection purpose-built for live video transmission, rather than general network traffic, making it well-suited for responsive UAV operations.
[IMG] Video transmission schematic
[CAPTION] Figure 5: Low-latency video pipeline from Jetson to ground station over wfb-ng.
### Flight Controller
Our drone is equipped with a Pixhawk 6C flight controller, which acts as the central hub coordinating all onboard systems. It continuously fuses data from its dual IMUs, barometer, magnetometer, and external GPS to calculate the drone’s exact position, orientation, and movement. Using this information, it issues precise commands to the ESCs, ensuring that the six motors adjust their speed in real time to maintain stability and execute flight maneuvers. Beyond basic stabilization, the Pixhawk 6C supports advanced functionality such as autonomous navigation, failsafe mechanisms, and payload management. Through the MAVROS interface, it links directly to ROS, enabling seamless communication between the companion computer (Jetson Orin Nano) and additional sensors (stereo cameras, IR, ultrasonic, distance).
[IMG] Pixhawk 6C and sensor integration
[CAPTION] Figure 6: Pixhawk 6C flight controller and integrated sensors (IMU, GPS, barometer).
## Other Software Contributions
In addition to the drone stack described above, we developed complementary tools that streamline data processing, visualization, and experimental validation. This includes:
### IR camera application
We developed an infrared (IR) camera application to perform and monitor the burn test. The system uses both I²C and SPI communication protocols — I²C for register access and SPI for the high-speed video feed. A custom C++ program processes the SPI data and converts it into a live thermal gradient that automatically adjusts to the detected temperature range. The application provides real-time max and min temperature readings, automatic color recalibration, and a central crosshair showing a localized 5×5 pixel temperature average. It also includes a recalibration button, built-in video recording directly from the GUI, and smart overlay text that changes color for better visibility during use.
Infrared Camera Application Testing
This video shows the testing of our custom infrared (IR) camera application, developed to capture and process real-time thermal data.
You can see an example for video feed in the Burn Measurement section.
### Data Processing and Analysis
Automated microscopy image analysis
A crucial part of Pyronix was turning raw data into actionable insight. We built end-to-end pipelines to clean data, visualize trends, and apply appropriate statistical tests, so we could judge whether observed effects were genuine and reproducible. These tools include a Fiji macro for automated microscopy image analysis , a data-visualization script for quantitative plots, and code that fits hydrogel rheology data to a known model, bridging software, biological experimentation, and materials science (for more information, refer to the Results section ).
We also developed statistical analysis and plotting code for the burn measurements (see Burn Measurement ), which underscored the value of significance testing and made outcomes easy to interpret.
All code is hosted on our GitLab with dedicated README files to ensure reproducibility, transparent methods, and clear contributions for future collaborators.
### Simulation of the Drone
We rebuilt our simulation pipeline around NVIDIA Isaac Sim coupled with Pegasus so the virtual drone matches our CAD twin. The Fusion 360 assembly was exported to USD, annotated with the measured mass and inertia, and wrapped in a Pegasus vehicle profile that mounts the same stereo RGB and thermal cameras we fly in hardware.
Pegasus drives PX4 SITL while our ROS 2 launch files bring up the simulator, autopilot bridge, and perception nodes together. Those runs stream stereo and IR topics into the same workspace that powers the drone, letting us exercise the FoundationStereo depth pipeline and record reproducible bags for downstream analytics before ever leaving the lab.
Detailed notes and future work stay tracked on the Modeling page.
