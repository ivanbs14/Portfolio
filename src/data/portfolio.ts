export const METRICS_CHIPS = [
  {
    value: "5+",
    label: "Years Exp",
  },
  {
    value: "99%",
    label: "Perf Score",
  },
  {
    value: "SOLID",
    label: "Clean Arch",
  },
] as const;

export const FEATURED_MISSION = {
  title: "Nexus Dashboard",
  status: "LIVE",
  description:
    "Real-time monitoring interface for decentralized server infrastructure.",
  tags: ["React", "WebSockets", "ThreeJS"],
  image: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTJiAzxsJDbRE_hVMhyrySSLMZdKsqhalPAzTXK218CSzpgSp3fMIwpX4e1gv5enLjruTfJNZF74vVHkL69a52o-cRja8SNWBdn240tv1hVIgrKVCD8BuhrfXqN7rZRt9mJcUA0SXj77OEbqgkt_nOC7t7ADmAt8dPS3ZmA3-WUyVvH22PvY3JLzcQMjhhizBGEloX2H3x8VQ_OL6EhxdFo-vI4qqThOVg78_CSKp3P1gK5vHUbq131bOgIMpI8aRZxp5jJwSYqdIV",
    alt: "Futuristic cybersecurity interface displaying nodes and telemetry.",
  },
} as const;

export const PROJECT_GRID = [
  {
    title: "Balance AI - Personal Financial Management",
    description:
      "Corporate personal finance management platform that uses artificial intelligence to monitor transactions and provide personalized insights. The system enables detailed budget control with advanced capabilities.",
    version: "2025",
    links: ["code", "external"],
    linkUrls: {
      code: "https://github.com/ivanbs14/balance.git",
      external: "https://youtu.be/SonR1LwSMjM?si=0w6e9cJDQLAwWcvo",
    },
  },
  {
    title: "AI Video Copilot",
    description:
      "Developed a web application that receives a video and, through the ChatGPT API, generates titles, hashtags, and a summary of the video's content.",
    version: "2024",
    links: ["code", "external"],
    linkUrls: {
      code: "https://github.com/ivanbs14/Upload_AI_web",
      external: "https://youtu.be/hX-rhRG8sfQ?si=kkNalRIODDp8TAfK",
    },
  },
  {
    title: "Weather App",
    description:
      "Check the weather with ease. This application provides accurate and up-to-date weather information anywhere in the world.",
    version: "2024",
    links: ["code", "external"],
    linkUrls: {
      code: "https://github.com/ivanbs14/App_Clima",
      external: "https://youtu.be/LFhiYoKkfRk?si=ezxPxo7DohKf8CUT",
    },
  },
] as const;

export const TECH_MATRIX = [
  {
    category: "Languages",
    tags: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    tags: ["React", "Next.js", "Tailwind CSS", "Styled Components"],
  },
  {
    category: "Backend",
    tags: [
      "NestJS",
      "Node.js",
      "Express",
      "REST API",
      "DTO Validation",
      "Dependency Injection",
      "JWT",
      "Swagger/OpenAPI",
    ],
  },
  {
    category: "Databases",
    tags: ["PostgreSQL", "MongoDB", "SQL", "NoSQL", "Prisma", "TypeORM"],
  },
  {
    category: "Cloud / DevOps",
    tags: [
      "AWS",
      "Azure",
      "Docker",
      "CI/CD",
      "Automated Testing",
      "Modular Architecture",
      "Code Review",
      "Git",
      "GitLab CI",
    ],
  },
  {
    category: "AI / LLM",
    tags: [
      "Azure OpenAI",
      "OpenAI API",
      "AI Agents",
      "Prompt Engineering",
      "LLM API Integration",
      "Workflow Orchestration",
      "Structured Data Extraction",
      "Data Classification",
    ],
  },
] as const;

export const EXPERIENCE_TIMELINE = [
  {
    period: "[ Jun/2025 - Sep/2026 ]",
    title: "Full-Stack Developer",
    company: "LongView Tecnologia",
    highlights: [
      "Developed end-to-end features with Next.js, NestJS, TypeScript, PostgreSQL, and MongoDB across frontend, backend, and data layers.",
      "Designed REST APIs and improved application performance, scalability, error handling, and modular architecture.",
      "Contributed to code reviews, engineering standards, CI/CD pipelines, and automated testing.",
      "Implemented AWS integrations with Amazon S3 and Lambda, plus Azure OpenAI and OpenAI API solutions for support, proposals, automation, and data extraction and classification.",
    ],
    isActive: false,
  },
  {
    period: "[ Oct/2024 - May/2025 ]",
    title: "Tech Lead | Full Stack Developer",
    company: "Hausey",
    highlights: [
      "Led delivery planning, architectural decisions, and the definition of technical standards as Tech Lead.",
      "Developed scalable and maintainable features with Next.js, NestJS, PostgreSQL, and MongoDB.",
      "Supported code reviews, engineering best practices, and CI/CD pipeline improvements.",
      "Contributed to AWS storage integrations and backend automations.",
    ],
    isActive: false,
  },
  {
    period: "[ Dec/2023 - Oct/2024 ]",
    title: "Front-end Developer",
    company: "Bugaboo Studio",
    highlights: [
      "Developed responsive interfaces with React, TypeScript, Tailwind CSS, and Styled Components, integrating data with MongoDB.",
      "Improved frontend usability and visual consistency with a focus on accessibility and user experience.",
      "Integrated frontend applications with REST APIs and aligned contracts across application layers.",
    ],
    isActive: false,
  },
  {
    period: "[ Jan/2023 - Dec/2023 ]",
    title: "Full Stack Developer",
    company: "CodeDraw Technology",
    highlights: [
      "Developed and maintained application features with React.js and Styled Components.",
      "Worked on backend services with Node.js, MongoDB, and API integrations.",
      "Used Docker, GitLab CI, and Git throughout the development and delivery pipeline.",
    ],
    isActive: false,
  },
] as const;

export const PROFILE_BIO = {
  name: "Ivan Barbosa da Silva",
  location: "Fortaleza/CE",
  contact: {
    email: "ivanbarbosag@gmail.com",
    phone: "(85) 9 9924-6230",
    phoneHref: "+5585999246230",
    linkedin: "linkedin.com/in/ivanbarbosa2",
    linkedinHref: "https://www.linkedin.com/in/ivanbarbosa2",
  },
  summary:
    "Full-Stack Engineer and Tech Lead experienced in scalable web applications, REST APIs, SQL and NoSQL databases, cloud infrastructure, CI/CD, and generative AI solutions with OpenAI and Azure OpenAI.",
  principles: [
    "Scalable architecture",
    "Technical leadership",
    "Team collaboration",
    "Full-stack",
  ],
  avatar: {
    src: "/Screenshot%202026-03-19%20at%2018.37.50.png",
    alt: "Portrait of a software developer.",
  },
} as const;

export const BOTTOM_HUD_NAV = [
  {
    label: "Home",
    icon: "home",
    isActive: true,
  },
  {
    label: "Stack",
    icon: "stack",
    isActive: false,
  },
  {
    label: "Experience",
    icon: "about",
    isActive: false,
  },
  {
    label: "Projects",
    icon: "projects",
    isActive: false,
  },
] as const;
