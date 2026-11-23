export const projectsData = [
  {
    id: "iot-waste-management",
    title: "IoT-Based Plastic Waste Management System for Smart City Application",
    subtitle: "Real-time ultrasonic bin fill-level monitoring with smart notifications and municipal dashboard.",
    category: "IoT & Embedded Systems",
    status: "Live Project & Dashboard",
    featured: true,
    liveUrl: "https://io-t-l8e9.vercel.app/",
    githubUrl: null, // "Repository coming soon"
    repoNote: "Repository coming soon",
    badge: "Live Web App",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    summary: "An IoT-based smart waste management solution designed to monitor dustbin fill levels in real-time and provide alerts when bins reach capacity, preventing overflow in urban environments.",
    
    problemStatement: "Traditional waste collection routes in smart cities often follow static schedules, resulting in either prematurely emptied bins or unhygienic overflowing containers that pollute public spaces and waste fuel.",
    
    proposedSolution: "Engineered an IoT-connected telemetry system where ultrasonic sensors calculate waste volume percentages in real-time, relaying status updates across empty, half-full, and full states to an interactive municipal monitoring dashboard.",
    
    technologies: [
      "IoT",
      "ESP32 / NodeMCU Concepts",
      "Ultrasonic Sensors",
      "Web Technologies",
      "Telemetry Dashboard",
      "Responsive UI"
    ],
    
    keyFeatures: [
      "Smart bin fill-level monitoring with accurate percentage calculation",
      "Real-time empty, half-full, and full threshold visual indicators",
      "Automated full-bin notification concept for route dispatchers",
      "Smart city centralized waste management monitoring dashboard",
      "IoT-based telemetry architecture designed for scalable municipal deployment"
    ],
    
    implementationDetails: "The system models an end-to-end IoT pipeline: ultrasonic distance sensors measure headspace inside collection units, converting raw depth telemetry into fill percentages. The web interface updates dynamically to reflect bin states, enabling optimized route planning."
  },
  {
    id: "water-pollution-alarm",
    title: "Water Pollution Alarm System",
    subtitle: "Real-time water quality monitoring combining TDS and turbidity sensors with threshold alerts.",
    category: "Environmental & IoT",
    status: "Prototype / Academic Implementation",
    featured: true,
    liveUrl: null,
    githubUrl: null,
    repoNote: "Repository coming soon",
    badge: "Hardware Prototype",
    gradient: "from-cyan-600 via-blue-500 to-indigo-600",
    summary: "An environmental monitoring system designed to monitor water quality parameters using specialized sensors and alert users immediately when contaminant levels exceed safe thresholds.",
    
    problemStatement: "Contaminated water sources in residential and institutional environments often remain undetected until illness occurs, because routine testing is infrequent and expensive.",
    
    proposedSolution: "Developed a microcontroller-driven sensor probe that continuously measures Total Dissolved Solids (TDS) and turbidity, evaluating readings against safety benchmarks and sounding audio/visual alarms on deviation.",
    
    technologies: [
      "ESP32 Microcontroller",
      "TDS Sensor",
      "Turbidity Sensor",
      "Electronics & Circuitry",
      "LCD / Display Concept",
      "Threshold Alert Logic"
    ],
    
    keyFeatures: [
      "Real-time Total Dissolved Solids (TDS) sensor monitoring",
      "Turbidity (water cloudiness) measurement using optical sensing",
      "Sensor-based water quality calibration against safe drinking standards",
      "ESP32 microcontroller processing telemetry in real-time",
      "LCD / display concept showing live PPM and NTU metrics",
      "Rapid water quality alert system for anomalous contamination"
    ],
    
    implementationDetails: "Combines an analog TDS probe for dissolved ion detection and a turbidity optical sensor for suspended particulate measurement, connected to an ESP32 ADC for fast sampling and threshold evaluation."
  },
  {
    id: "traffic-management-system",
    title: "Traffic Management System",
    subtitle: "Algorithmic simulation and density analysis to optimize vehicle flow and reduce intersection delays.",
    category: "System Concepts & Algorithms",
    status: "Academic Project Concept",
    featured: false,
    liveUrl: null,
    githubUrl: null,
    repoNote: "Repository coming soon",
    badge: "Algorithmic Concept",
    gradient: "from-purple-600 via-pink-500 to-rose-500",
    summary: "An academic project concept focused on understanding and improving urban traffic flow through computational modeling of traffic density, congestion patterns, and signal timing.",
    
    problemStatement: "Fixed-timer traffic lights fail to adapt to variable traffic surges, causing severe gridlock, increased emissions, and emergency vehicle delays.",
    
    proposedSolution: "Formulated an algorithmic traffic analysis model that evaluates dynamic vehicle density across intersection lanes to compute responsive green-light durations and identify congestion bottlenecks.",
    
    technologies: [
      "C / C++ Fundamentals",
      "Queue & Graph Data Structures",
      "Traffic Density Modeling",
      "Signal Delay Optimization",
      "Computational Logic"
    ],
    
    keyFeatures: [
      "Traffic density calculation based on vehicle queue accumulation",
      "Congestion index classification across multi-lane junction models",
      "Simulated vehicle speed and clearance time calculation",
      "Dynamic signal delay adjustment algorithms",
      "Accident-related delay tracking and route advisory concepts"
    ],
    
    implementationDetails: "Features only the verified implemented academic scope: focused on the analytical modeling of queue lengths, mathematical signal delay calculations, and simulated bottleneck analysis without overstating production deployment."
  },
  {
    id: "ecosmart-campus",
    title: "EcoSmart Campus / Smart Energy Management System",
    subtitle: "Comprehensive framework for campus-wide energy conservation through occupancy sensing.",
    category: "System Concepts & Algorithms",
    status: "Academic Technology Concept",
    featured: false,
    liveUrl: null,
    githubUrl: null,
    repoNote: "Repository coming soon",
    badge: "Sustainability Concept",
    gradient: "from-emerald-600 via-teal-500 to-cyan-500",
    summary: "An academic technology concept focused on analyzing campus energy consumption patterns and architecting automated conservation policies using distributed IoT sensing.",
    
    problemStatement: "Academic buildings, lecture halls, and laboratories often draw peak electrical power even when vacant, resulting in substantial energy wastage and high carbon footprints.",
    
    proposedSolution: "Proposed an intelligent energy governance framework that correlates lecture hall schedules and motion-sensor occupancy with HVAC and lighting relays to ensure power is drawn strictly on demand.",
    
    technologies: [
      "Energy Analytics Concept",
      "IoT Sensor Network Modeling",
      "Occupancy Detection Logic",
      "Smart Campus Architecture",
      "Power Efficiency Calculations"
    ],
    
    keyFeatures: [
      "Zone-based electrical load analysis for educational facilities",
      "PIR / motion-based occupancy integration concept",
      "Automated idle-power shutdown logic for empty classrooms",
      "Energy conservation telemetry dashboard architectural mockups",
      "Carbon savings forecasting model"
    ],
    
    implementationDetails: "Maintained strictly as an academic concept framework: focuses on system design diagrams, energy modeling formulas, and requirement specifications for university facilities."
  }
];

export const publicGithubRepos = [
  {
    name: "personal-finance-advisor-bot",
    displayName: "FinWise AI – Personal Finance Advisor & Wealth Dashboard",
    description: "Intelligent personal finance advisor & wealth dashboard with 50/30/20 budgeting, expense analytics, what-if simulator & autonomous client-side engine.",
    language: "TypeScript",
    html_url: "https://github.com/mayurimundkar609-pixel/personal-finance-advisor-bot",
    stars: 0,
    forks: 0,
    topics: ["typescript", "finance-advisor", "budgeting", "wealth-dashboard"]
  },
  {
    name: "financial-bot-",
    displayName: "Financial Bot Utility",
    description: "Modular financial utility for expense tracking and personal budgeting algorithms.",
    language: "TypeScript",
    html_url: "https://github.com/mayurimundkar609-pixel/financial-bot-",
    stars: 0,
    forks: 0,
    topics: ["typescript", "finance-tool"]
  },
  {
    name: "finance-bot",
    displayName: "Finance Bot Core",
    description: "Interactive financial bot interface with analytical computations and budget metrics.",
    language: "TypeScript",
    html_url: "https://github.com/mayurimundkar609-pixel/finance-bot",
    stars: 0,
    forks: 0,
    topics: ["typescript", "bot", "analytics"]
  }
];

