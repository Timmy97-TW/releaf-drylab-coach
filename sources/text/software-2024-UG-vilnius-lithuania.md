[IMG]
SOFTWARE
[IMG]
## Introduction
Monitoring and ensuring optimal bacterial growth conditions can often be a time-consuming task due to the long periods required for bacteria to grow and replicate. This was no exception in our wet lab activities, as our bioreactor required constant supervision and in-person presence in the lab. Additionally, identifying problems and when they occurred was challenging. To address this, we developed a remote interface for the bioreactor, reducing the time required for supervision and automating data collection by storing bioreactor readings in a remote database.
## Planning
To implement our software tool for the bioreactor, we used the Scrum framework, delivering features incrementally while adjusting after each iteration. The main stakeholders were our wet lab colleagues, who directly influenced the feature development, as they best understood the needs for automating laboratory activities. We started by defining the Minimum Viable Product (MVP) and expanded functionality over several iterations, allowing us to address their needs progressively. Each MVP provides an opportunity to learn from real user interactions and feedback. This helps refine the product based on actual user needs and preferences, rather than assumptions made at the start of the project [1].
Initially, we conducted a requirement analysis with the stakeholders and dry lab team members to outline the MVP. This approach ensured that the software tool was functional from the start while evolving through continuous feedback loops. With each MVP, we added more features to the bioreactor interface, eventually completing the full product specification as outlined below:
- MVP1: A website capable of storing bioreactor temperature and pH readings online, providing a platform for data viewing and export.
- MVP2: Online control of the bioreactor’s mixing speed and temperature to allow remote adjustments.
- MVP3: The capability to monitor turbidity or optical density, providing insights into bacterial growth.
- MVP4: An alert system that sends email notifications when the bioreactor’s readings exceed the pre-set thresholds, enabling quick intervention.
- MVP5: A glucose concentration monitoring system with an automated glucose feeding mechanism to maintain optimal glucose levels.
This iterative development process ensured that the tool evolved in sync with the needs of the lab. The Scrum methodology allowed for continuous value delivery and agile adjustments based on feedback, resulting in a robust and responsive bioreactor interface that effectively optimized laboratory processes.
## Architecture
Based on our project requirements, we identified the need for a modular software architecture, which includes several key components (Fig. 1):
- PostgreSQL Database: This relational database stores all bioreactor measurements and control settings, ensuring data persistence and easy access for both users and automated processes.
- Python Flask Server: Acts as the backend, providing RESTful endpoints to read and write data to the database. Additionally, it handles automated processes such as sending alert emails when bioreactor readings exceed preset thresholds.
- Arduino Client: The microcontroller in the bioreactor communicates with the system through REST APIs, sending real-time measurements (temperature, pH, turbidity) to the server and fetching updated control values like mixing speed and temperature settings. This integration allows the hardware to operate in sync with user inputs.
- React Web Client: This serves as the user interface where users can remotely monitor the bioreactor’s status and adjust settings in real-time. It communicates with the Flask server via REST requests, making the interface dynamic and responsive.
[IMG] Main software components diagram
[CAPTION] Fig. 1. Main software components diagram
We decided to containerize each of these components (except Arduino Client) using Docker to ensure a standardized deployment environment. Docker ensures that all dependencies and environment configurations are encapsulated within containers, preventing compatibility issues across development and production stages. This allows for efficient scaling, isolation of services, and easier updates. Additionally, containerization streamlines the development workflow by creating consistent environments across different stages of deployment, reducing the "works on my machine" problem and accelerating the release cycle [2].
Overall, this architecture ensures that the bioreactor software is robust, scalable, and efficient, allowing us to integrate all the necessary functionalities seamlessly.
## Modelling
We designed the database schema for the bioreactor software to efficiently handle measurements, control settings, and alert parameters in separate tables. As shown in Fig. 2, the schema consists of three key tables:
- Measurement: Stores real-time sensor data such as turbidity, temperature, and pH, with each entry uniquely identified by its timestamp.
- Control: Handles user-defined control settings, such as temperature and mixing speed.
- Alert: Contains alert parameters, including thresholds for sensor values and user’s email, with a timestamp to limit alerts to once every 30 minutes.
[IMG] Database schema
[CAPTION] Fig. 2. Database schema
This schema ensures flexibility, allowing easy expansion with new sensors or control parameters by adding columns to the existing tables.
## Implementation
In the implementation of our bioreactor server, we have developed a comprehensive set of API endpoints to facilitate both data retrieval and control of the bioreactor’s operational parameters. The API provides endpoints for retrieving and updating control settings (e.g., mixing speed, temperature), posting and fetching measurement data (temperature, pH, turbidity), and subscribing to alerts. Subscriptions allow users to receive email notifications when specific parameter thresholds are met. Additionally, users can manage these subscriptions by subscribing, retrieving all active subscriptions, or unsubscribing. The API documentation is presented in an interactive format using Swagger documentation (Fig. 3).
## Synhesion Bioreactor Server API 1.0
[ Base URL: / ] https://static.igem.wiki/teams/5246/json/bioreactor-server-api.json
An API for storing and accessing bioreactor measurements and control data
### measurement
Measurement operations
### control
Control operations
### subscription
Subscription operations
[CAPTION] Fig. 3. API documentation for the bioreactor server
One of the API consumers is the Arduino microcontroller, which every minute sends a POST request to the server with the latest measurements. After that, it sends a GET request to fetch the latest control settings. The server responds with the current control settings, which the Arduino uses to adjust the bioreactor’s parameters. If the temperature is lower than the set value, the Arduino sends a signal to a relay to turn on the heater. If the temperature is higher, the relay turns off the heater.
In our bioreactor web client implementation, we've created a user interface to access the server's endpoints. The UI is divided into three sections: Measurements, Controls, and Alerts.
- The Measurements section displays a graph for each reading, enabling users to monitor the bioreactor's status over time. A datetime range selector allows viewing data for a specific period. Data can also be exported in SVG, PNG, or CSV formats.
- The Controls section allows users to adjust the bioreactor's parameters, such as temperature and mixing speed. Values can be modified by entering a new value or incrementally using + and - buttons.
- The Alerts section provides a checkbox for each measurement. When selected, a form appears to set thresholds for that measurement. Users can define both lower and upper thresholds and set an email address for alerts. Unsubscription is also available by providing an email.
All this functionality is demonstrated in the video below (Fig. 4).
[CAPTION] Fig. 4. Video demonstration of the bioreactor interface
In addition to monitoring the core parameters of the bioreactor, we have also undertaken efforts to calculate new insights from the existing measurements. Optical Density (OD), being a widely accepted indicator of bacterial growth, prompted us to develop a calibration curve to correlate OD with turbidity readings. More information how we've collected the data can be found in Hardware page. This calibration process provided a more precise understanding of bacterial concentration over time. You can find a detailed explanation of the data collection process on the Hardware page.
The relationship we established between turbidity and OD follows the equation: Y = (X - 185) / 2890, where X represents turbidity and Y represents the calculated OD. By applying this equation, we have successfully incorporated OD as an additional parameter in the bioreactor’s control panel, enhancing the measurement tables with this new metric (Fig. 5). This allows for more comprehensive monitoring of bacterial growth, ensuring better control and optimization of the bioreactor’s performance.
[IMG] Turbidity and Optical Density tables in bioreactor control panel
[CAPTION] Fig. 5. Turbidity and Optical Density tables in bioreactor control panel
## Usage
The bioreactor server, web-client, and Arduino code are available in our GitLab Software Tool repository. The requirements for running the server and web-client are minimal, as all necessary dependencies are installed using Docker. The requirements are as follows:
- Docker installed and running.
- Git for cloning the repository.
The Arduino code can be uploaded to the microcontroller using the Arduino IDE.
We have simplified the setup process: the user only needs to run a single command to build and start all services after cloning the project. Follow these steps:
- Clone the repository:git clone https://gitlab.igem.org/2024/software-tools/vilnius-lithuania.git
cd vilnius-lithuania
- Build and run the services using Docker Compose:docker compose up --build
This command will set up and start the following services:
- PostgreSQL database
- Flask API server
- React web client
You can then access the client by navigating to http://localhost:8000.
## Conclusion
Out of the five planned MVPs, we successfully implemented four. Unfortunately, MVP5, which involved the glucose monitoring system, was incomplete due to time constraints and complexity. However, the current system provides a robust and efficient solution for remotely monitoring and controlling the bioreactor.
Software like this is oftentimes pricey, which many projects can not afford. Our software is designed to be compatible with any bioreactor, making it easily accessible for future iGEM teams. This adaptability ensures that future teams can integrate the software into their projects without extensive customization.
The system has been well-received by our wet lab colleagues, who have found it to be a valuable tool in their daily activities. It has significantly reduced the time required for supervision and data collection, allowing our team to focus on other essential tasks.
## Key References
- Nguyen Duc, A. and Abrahamsson, P. (2016) ‘Minimum viable product or multiple facet product? The role of MVP in software startups’, in Proceedings of the International Conference on Agile Software Development. doi: https://doi.org/10.1007/978-3-319-33515-5_10.
- Verma, S.B., Pandey, B. and Gupta, B.K. (2023) ‘Containerization and its architectures: A study’, ADCAIJ Advances in Distributed Computing and Artificial Intelligence Journal, 11(4), pp. 395-409. doi: https://doi.org/10.14201/adcaij.28351.
# Accessibility Options
[IMG]
## Text size
[IMG]
## Line height
[IMG]
## Letter spacing
[IMG]
## Font
[IMG]
## Contrast
