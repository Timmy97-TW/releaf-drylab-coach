[IMG]
# Introduction
## BiGEM:Biological Data Retrieval & Visualization Platform
BiGEM is a comprehensive tool designed for efficient retrieval, analysis, and visualization of project data from the International Genetically Engineered Machine competition. By integrating project information from 2004 to 2024, BiGEM provides the iGEM community with powerful data analysis tools for systematic analysis and expands potential applications in research and education.
Unlike traditional methods where users manually browse massive wiki pages to extract useful content, BiGEM supports multiple data dimensions, including project descriptions, technical solutions, awards, team profiles, and biological parts. It greatly reduces the time needed for information extraction, removes repetitive manual collection work, and provides a unified access point. It also integrates semantic search powered by large language models and supports diverse visualization methods to help users explore project information and identify trends in synthetic biology.
## Platform Features
BiGEM's main advantage lies in its intelligent data processing capabilities. Using the Qwen large language model, it automatically extracts and structures wiki text, supports natural language queries and semantic search, and offers three visualization modes: force-directed graphs, tree diagrams, and Sankey diagrams. This forms a complete chain from raw data to insights.
# Architecture
To meet project requirements, BiGEM designed a modular software architecture with several core components:
[IMG] System Architecture
System Architecture
## Presentation Layer
Web Frontend: Built with React + Vite, offering responsive search, filtering, and data display
Data Visualization: Implemented with D3.js, supporting force-directed graphs, tree diagrams, and Sankey diagrams
## Communication Layer
HTTP/HTTPS: Handles data transmission between frontend and API
Ajax/Fetch: Enables asynchronous communication with the Qwen API
## Service Layer
Data Processing: Includes web crawling, ETL workflows, and text structuring
ETL Process
Extract: Automated crawlers and manual retrieval of wiki HTML
Transform: Parse HTML into plain text, clean and normalize data, convert into JSON/CSV
Load: Store as CSV files for frontend use
Data Cleaning
Raw HTML → Remove HTML tags → Remove navigation/footer → Unify encoding → Remove duplicate paragraphs → Standardize format
Search and Retrieval: Provides keyword search, advanced filtering, and semantic search functions
AI Intelligent Analysis: Calls Qwen large model API for semantic search and query expansion
Visualization Processing: Converts project data into data formats required for charts
## Data Layer
CSV Files: Store cleaned project data
IndexedDB: Browser local cache for faster queries
Redux Store: Manages application state and user interaction data
JSON Data: Stores structured project information extracted from AI
# Engineering
The inspiration for BiGEM came from our struggle to find suitable promoters for red and green light systems - the extensive information browsing was heavy and time-consuming, which pushed us to build this platform.
## Development Iteration Process
V1: Scraped biological parts data from all past participating teams. Built a simple search page. Successfully found the light-controlled promoters we needed through this platform, significantly improving our team's search efficiency.
V2: Expanded the scope to other tracks beyond biological parts. Integrated a large language model to break down long paragraphs from wiki pages into structured information fields.
Final Version: Covered project basic data from 2004–2024, with detailed data from 2022 to 2024. Redesigned the user interface with homepage, search page, visualization page, and about page. Integrated three types of visualizations (force-directed relationship graph, biological parts tree diagram, and Sankey diagram), semantic search, and multi-dimensional filtering. Achieved balance of completeness and functionality to support actual research and educational needs.
## Development Stages
Data Collection and Preprocessing
Designed and implemented large-scale automated web crawlers
Targeted wiki pages of all award-winning and nominated teams from 2004-2024 for data collection
Manually crawled project information for special-structure wikis that cannot be properly obtained through automatic crawlers
Standardized all page content into unified text format
Intelligent Information Extraction and Data Structuring
Used Qwen large language model to deeply analyze and extract information from collected wiki texts
Built specialized data structures to store multi-dimensional project information
Included key fields such as project titles, team information, competition years, award status, technical solutions, and application fields
Visualization Data Preparation and Processing
Converted structured project data into data formats suitable for visualization display
Developed specialized data processing methods that can generate corresponding data structures according to the requirements of different visualization components
Built network graph data by analyzing technical keyword similarity and collaboration relationships between projects for force-directed relationship graphs
Established a hierarchical classification system that organizes biological parts used in projects according to function and type for biological part tree diagrams
Integrated flow relationships between projects across different dimensions, generating multi-dimensional flow datasets for Sankey diagrams
User Function Integration and Platform Construction
Built a complete user interaction interface and function integration
Provided all collected and processed data to users through a unified data retrieval and visualization platform
Implemented multiple data access and analysis methods
Included a multi-level search system: keyword search, advanced filtering, and semantic search
Integrated three different types of data display methods with responsive design
Through systematic implementation of these four development stages, we successfully built a fully functional, high-performance iGEM data retrieval and visualization platform. This provides the synthetic biology research community with powerful data insight tools.
# Installation
## Requirements
Node.js 16.0+ (18.0+ recommended)
npm 8.0+
Browser: Chrome 90+, Firefox 88+, Safari 14+
## Steps
1.
Clone repository: git clone https://gitlab.igem.org/2025/software-tools/bit-china.git
2.
Enter directory: cd bit-china
3.
Install dependencies: npm install
4.
Start server: npm run dev
5.
Access application: Open your browser and visit http://localhost:xxxx (where xxxx is the port number displayed in the terminal)
Clone repository:
git clone https://gitlab.igem.org/2025/software-tools/bit-china.git
Install dependencies:
npm install
Start server:
npm run dev
# Usage
Open your browser and visit the displayed local address to enter the main interface of BiGEM. Click "Start Search" or the "Search" tab in the navigation bar to enter the search page. The following are usage methods for main functions:
## Data Search and Filtering
Basic Search
Enter keywords in the search box (such as 'biosensor', 'environment') and click search
The system will automatically match and return project titles, descriptions, or award information containing these keywords
Advanced Filtering
Year Filtering: Limit to projects from a specific year or several designated years
Team Filtering: Quickly locate related projects based on team names
Medal Filtering: Filter by Gold, Silver, Bronze, etc.
Awards and Nominations Filtering: Such as Best Wiki, Best Hardware, and other special awards or nominations
Track Filtering: Filter by different villages or different sections
[IMG] Advanced Filtering Interface
Advanced Filtering Interface
[IMG] Search Interface
Search Interface
Semantic Search
Enter natural language questions or keywords (for example: 'ocean pollution')
The system will understand semantics based on large language models and expand to related terms
Users can select expansion words themselves, click 'Apply Terms', and return more intelligent results
[IMG] Semantic Search Example 1
Semantic Search Example 1
[IMG] Semantic Search Example 2
Semantic Search Example 2
Users can further add custom keywords in search results to improve retrieval accuracy. They can also first obtain desired data through filtering conditions, then add keywords for further precise constraints.
## Data Visualization
Enter the main interface of BiGEM and click "Explore Visualization" or the "Visualization" tab in the navigation bar to enter the visualization page. Multiple visualization methods are supported to help users understand and analyze iGEM project development trends from different dimensions:
Force-directed Relationship Graph
Shows technical associations and similarities between different projects
Node size represents project influence (based on award status)
Line thickness represents technical similarity between projects
[IMG] Force-directed Graph Overview
Force-directed Graph Overview
[IMG] Force-directed Graph Detail
Force-directed Graph Detail
Biological Parts Tree Diagram
Hierarchically displays biological parts used by projects
Supports expand/collapse operations
Different categories are distinguished by colors
[IMG] Biological Parts Tree Overview
Biological Parts Tree Overview
[IMG] Biological Parts Tree Detail
Biological Parts Tree Detail
Sankey Diagram
Shows flow relationships between projects across different dimensions
Such as conversion paths from technical fields to award categories
Flow band width represents data volume size, helping users understand project distribution and evolution trends
[IMG] Sankey Diagram Overview
Sankey Diagram Overview
[IMG] Sankey Diagram Detail
Sankey Diagram Detail
## Usage Tips
Search and filtering functions can be used in combination. For example: first select year, then enter keywords to quickly narrow the result range. Interactive operations are supported - users can click nodes or items to view more detailed project information.
# Future Improvements
Our goal is to create a fast and accessible iGEM project data retrieval and visualization platform for every synthetic biology researcher. Planned upgrades include:
Technical Enhancement
More advanced language models (GPT-4, Claude)
Multimodal data extraction to improve accuracy and processing capabilities
Feature Expansion
New features such as intelligent recommendations, user comments, data exports
Team collaboration spaces
Platform Openness
RESTful API and mobile app support
For broader integration and accessibility
The goal is to make BiGEM a comprehensive global tool for synthetic biology research, offering powerful data insights to the iGEM community and beyond.
