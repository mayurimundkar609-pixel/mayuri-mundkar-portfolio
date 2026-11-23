export const skillsData = {
  categories: [
    {
      id: "programming",
      name: "Programming Languages",
      description: "Core languages used for systems programming, data structures, and foundational algorithm development.",
      skills: [
        {
          name: "C",
          level: "Academic Core / Intermediate",
          badge: "Strong Foundation",
          icon: "Terminal",
          description: "Pointers, memory allocation, procedural architecture, modular programming, and bitwise operations.",
          confidence: 85
        },
        {
          name: "C++",
          level: "Academic Core / Intermediate",
          badge: "OOP & STL",
          icon: "Code2",
          description: "Object-oriented programming, classes, polymorphism, templates, standard template library (STL), and recursion.",
          confidence: 85
        },
        {
          name: "Python",
          level: "Beginner",
          badge: "Actively Learning",
          icon: "FileCode",
          description: "Syntax fundamentals, scripting basics, data processing libraries (NumPy/Pandas basics), and introductory problem solving.",
          confidence: 45,
          isBeginner: true
        }
      ]
    },
    {
      id: "computer-science",
      name: "Computer Science & DSA",
      description: "Theoretical and algorithmic foundations mastered through academic coursework and rigorous practice.",
      skills: [
        {
          name: "Data Structures & Algorithms",
          level: "Core Competency",
          icon: "GitBranch",
          description: "Time & space complexity analysis (Big-O), design paradigms, and algorithmic efficiency.",
          confidence: 80
        },
        {
          name: "Arrays and Matrices",
          level: "Core Competency",
          icon: "Grid",
          description: "Multi-dimensional arrays, matrix manipulation, indexing algorithms, and linear searches.",
          confidence: 88
        },
        {
          name: "Stack and Queue",
          level: "Core Competency",
          icon: "Layers",
          description: "LIFO/FIFO implementation, expression evaluation, circular queues, and queue scheduling.",
          confidence: 85
        },
        {
          name: "Singly Linked List",
          level: "Core Competency",
          icon: "Link",
          description: "Node manipulation, traversal, insertion, deletion, and reversal algorithms.",
          confidence: 82
        },
        {
          name: "Doubly Linked List",
          level: "Core Competency",
          icon: "ChevronsLeftRight",
          description: "Bidirectional traversal, node linkage management, memory overhead consideration.",
          confidence: 80
        },
        {
          name: "Problem Solving",
          level: "Active Practice",
          icon: "Cpu",
          description: "Deconstructing complex technical challenges into manageable procedural steps.",
          confidence: 82
        },
        {
          name: "Programming Fundamentals",
          level: "Solid Core",
          icon: "Binary",
          description: "Control flow, recursion, variable scoping, debugging, and computational logic.",
          confidence: 90
        }
      ]
    },
    {
      id: "tech-interests",
      name: "Technology Interests & Emerging Fields",
      description: "Areas of passionate study, applied academic project work, and future engineering specialization.",
      skills: [
        {
          name: "Artificial Intelligence",
          status: "Future Career Goal & Deep Interest",
          icon: "Brain",
          description: "Exploring foundational AI concepts, rule-based systems, and intelligent agent architectures."
        },
        {
          name: "Machine Learning",
          status: "Foundational Study & Lab Work",
          icon: "Sparkles",
          description: "Learning supervised/unsupervised learning fundamentals, feature engineering, and model evaluation."
        },
        {
          name: "Internet of Things (IoT)",
          status: "Practical Academic Application",
          icon: "Wifi",
          description: "Microcontroller integration (ESP32/NodeMCU), ultrasonic and environmental sensors, telemetry."
        },
        {
          name: "Software Development",
          status: "Core Engineering Practice",
          icon: "Laptop",
          description: "Clean architecture, component-driven design, version control, and modular application logic."
        },
        {
          name: "Web Development",
          status: "Frontend & Full-Stack Learning",
          icon: "Globe",
          description: "Modern responsive web interfaces, HTML5/CSS3/JavaScript, API consumption, and dashboard design."
        },
        {
          name: "Embedded Systems",
          status: "Academic Hardware Exploration",
          icon: "Microchip",
          description: "Interfacing microcontrollers with digital/analog sensors, serial communication, and display modules."
        }
      ]
    }
  ]
};

