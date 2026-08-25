export const profile = {
  name: 'Doolla Hari',
  title: 'Senior Frontend Developer',
  tagline:
    'Senior Frontend Developer with 8+ years of experience developing scalable, high-performance web applications across Healthcare, Telecommunications, Supply Chain, and Data Analytics.',
  professionalSummary:
    'Senior Frontend Developer with 8+ years of experience developing scalable, high-performance web applications across Healthcare, Telecommunications, Supply Chain, and Data Analytics. Skilled in React.js, TypeScript, JavaScript (ES6+), Redux, HTML5, CSS3, and modern UI libraries. Experienced in designing reusable component architectures, implementing automated testing with Playwright and Jest, optimizing application performance, and maintaining code quality through SonarQube and CI/CD practices.',
  email: 'haridoolla36@gmail.com',
  phone: '+91 8297782907',
  linkedin: 'https://www.linkedin.com/in/hari-doolla',
  website: 'https://doolla-hari.vercel.app',
}

export const resumeFiles = {
  pdf: {
    path: '/resume.pdf',
    downloadName: 'Doolla Hari.pdf',
  },
  docx: {
    path: '/resume.docx',
    downloadName: 'Doolla Hari.docx',
  },
}

export const summary: string[] = []

export interface SkillItem {
  name: string
  icon?: string
  letterIcon?: string
  url: string
}

const devicon = (name: string, variant: 'original' | 'plain' = 'original') =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`

const simpleIcon = (name: string) => `https://cdn.simpleicons.org/${name}`

export const skillsWithIcons: SkillItem[] = [
  { name: 'React.js', icon: devicon('react'), url: 'https://react.dev' },
  { name: 'JavaScript', icon: devicon('javascript'), url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: devicon('typescript'), url: 'https://www.typescriptlang.org' },
  { name: 'Redux', icon: devicon('redux'), url: 'https://redux.js.org' },
  { name: 'React Router', icon: simpleIcon('reactrouter'), url: 'https://reactrouter.com' },
  { name: 'Material UI', icon: devicon('materialui'), url: 'https://mui.com' },
  { name: 'HTML5', icon: devicon('html5'), url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: devicon('css3'), url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'REST APIs', icon: simpleIcon('openapiinitiative'), url: 'https://www.openapis.org' },
  { name: 'Postman', icon: devicon('postman'), url: 'https://www.postman.com' },
  { name: 'Swagger', icon: simpleIcon('swagger'), url: 'https://swagger.io' },
  { name: 'Node.js', icon: devicon('nodejs'), url: 'https://nodejs.org' },
  { name: 'Express.js', icon: devicon('express'), url: 'https://expressjs.com' },
  { name: 'Jest', icon: simpleIcon('jest'), url: 'https://jestjs.io' },
  { name: 'Playwright', icon: 'https://playwright.dev/img/playwright-logo.svg', url: 'https://playwright.dev' },
  { name: 'SonarQube', icon: devicon('sonarqube'), url: 'https://www.sonarsource.com/products/sonarqube' },
  { name: 'ESLint', icon: devicon('eslint'), url: 'https://eslint.org' },
  { name: 'Prettier', letterIcon: 'P', url: 'https://prettier.io' },
  { name: 'Git', icon: devicon('git'), url: 'https://git-scm.com' },
  { name: 'Bitbucket', icon: devicon('bitbucket'), url: 'https://bitbucket.org' },
  { name: 'Jenkins', icon: devicon('jenkins'), url: 'https://www.jenkins.io' },
  { name: 'Agile', letterIcon: 'A', url: 'https://agilemanifesto.org' },
  { name: 'Scrum', letterIcon: 'S', url: 'https://www.scrum.org' },
  { name: 'Kanban', letterIcon: 'K', url: 'https://kanban.university' },
  { name: 'Waterfall', letterIcon: 'W', url: 'https://en.wikipedia.org/wiki/Waterfall_model' },
  { name: 'Jira', icon: devicon('jira'), url: 'https://www.atlassian.com/software/jira' },
  { name: 'VS Code', icon: devicon('vscode'), url: 'https://code.visualstudio.com' },
  { name: 'Figma', icon: devicon('figma'), url: 'https://www.figma.com' },
  { name: 'Claude', icon: simpleIcon('anthropic'), url: 'https://claude.ai' },
  { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor', url: 'https://cursor.com' },
  { name: 'Lovable', letterIcon: 'L', url: 'https://lovable.dev' },
]

export const experiences = [
  {
    role: 'Senior Software Developer',
    company: 'Gem Source IT Consulting Pvt Ltd',
    location: 'Hyderabad',
    period: 'Oct 2025 – Aug 2026',
    highlights: [
      'Architected and maintained key frontend features for Aetna\'s ID Card Excellence platform using React.js, Redux, JavaScript, and React Hooks.',
      'Engineered reusable UI component libraries and flexible configuration workflows to manage insurance ID card generation and copay structures.',
      'Established Playwright end-to-end testing suites and SonarQube static code analysis to elevate test coverage, code maintainability, and release confidence.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'I Spatial Techno Solutions',
    location: 'Hyderabad',
    period: 'Apr 2024 – Sep 2025',
    highlights: [
      'Led client-side development and production deployment across multiple enterprise projects utilizing React.js, Redux, and custom UI libraries.',
      'Designed modular component architectures and responsive layouts while partnering with cross-functional teams to accelerate feature delivery and defect resolution.',
      'Mentored junior frontend developers in React.js best practices, state management, and modern JavaScript techniques through technical code reviews.',
    ],
  },
  {
    role: 'Technology Analyst',
    company: 'Infosys Limited',
    location: 'Bengaluru',
    period: 'Jan 2024 – Mar 2024',
    highlights: [
      'Completed technical onboarding and domain orientation while awaiting project allocation, gaining exposure to enterprise application architecture and development practices.',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    location: 'Hyderabad',
    period: 'Nov 2021 – Jan 2024',
    highlights: [
      'Developed robust React.js web modules integrating Redux, JavaScript, HTML5, CSS3, Material UI, and React Router.',
      'Built standardized UI component libraries and state management patterns to ensure smooth, responsive user experiences across enterprise applications.',
      'Enforced code quality standards using SonarQube and aligned development practices with corporate security compliance protocols.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Innova Solutions Pvt Ltd',
    location: 'Hyderabad',
    period: 'Jan 2021 – Nov 2021',
    highlights: [
      'Engineered core frontend features for client-facing web applications using React.js, JavaScript, HTML5, CSS3, and Redux.',
      'Collaborated closely with cross-functional development teams to implement UI features, resolve software bugs, and ensure timely deliverables.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Transin Logistics Pvt Ltd',
    location: 'Hyderabad',
    period: 'Sep 2018 – Dec 2020',
    highlights: [
      'Designed and deployed responsive web interfaces for transporter trip execution and load receipt management integrated with core ERP/finance backends.',
      'Engineered modular frontend components using React.js, Redux, and Material UI, improving interface load performance across core logistics modules.',
      'Integrated real-time logistics tracking and government API workflows to ensure accurate, compliant data handling.',
    ],
  },
]

export interface Project {
  name: string
  company: string
  period: string
  description: string
  fullDescription: string[]
  technologies: string[]
}

export const projects: Project[] = [
  {
    name: 'ID Card Excellence',
    company: 'Healthcare | Aetna',
    period: 'Oct 2025 – Aug 2026',
    description:
      'Responsive user interfaces for dynamic insurance ID card generation and custom copay logic with configurable components and automated quality gates.',
    fullDescription: [
      'Developed responsive user interfaces for dynamic insurance ID card generation and custom copay logic.',
      'Built configurable UI components and override mechanisms to accommodate shifting business rules.',
      'Integrated Playwright automated testing and SonarQube automated quality gates into the development lifecycle.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'TypeScript', 'Jest', 'SonarQube', 'Playwright', 'MongoDB'],
  },
  {
    name: 'Open Data Platform',
    company: 'Data Management & Analytics | iSpatial Techno Solutions',
    period: 'Apr 2024 – Sep 2025',
    description:
      'High-performance interfaces for real-time data streaming, dynamic filtering, interactive dashboards, and AI-powered contextual data retrieval.',
    fullDescription: [
      'Engineered high-performance interfaces for real-time data streaming, dynamic filtering, interactive dashboards, and user feedback.',
      'Integrated an AI-powered conversational chatbot to enable intuitive, real-time contextual data retrieval.',
      'Optimized frontend bundle sizes and assets to ensure rapid rendering and smooth user interaction with massive datasets.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'TypeScript', 'Jest', 'SonarQube', 'FileZilla', 'Drupal'],
  },
  {
    name: 'ACSS User',
    company: 'Telecommunications | Tata Consultancy Services',
    period: 'May 2023 – Jan 2024',
    description:
      'Automated query submission and credit approval workflow tools for enterprise telecommunications management with region-specific state handling.',
    fullDescription: [
      'Built automated query submission and credit approval workflow tools for enterprise telecommunications management.',
      'Implemented state management pipelines to handle region-specific network operator data accurately.',
      'Created unit tests using Jest and maintained strict SonarQube code quality and coverage thresholds.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'Node.js', 'Jest', 'SonarQube', 'BlackDuck', 'Sysdig', 'Jenkins'],
  },
  {
    name: 'Network Circuit Order',
    company: 'Telecom & Infrastructure | Tata Consultancy Services',
    period: 'Aug 2022 – Apr 2023',
    description:
      'Responsive web interfaces to track global network locations, circuit provisioning, and infrastructural data with modular React components.',
    fullDescription: [
      'Designed responsive web interfaces to track global network locations, circuit provisioning, and infrastructural data.',
      'Created modular client-side components utilizing React.js and Redux.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'Node.js', 'Jest', 'SonarQube', 'BlackDuck', 'Sysdig', 'Jenkins'],
  },
  {
    name: 'Vson Portal',
    company: 'User Analytics & Network Security | Tata Consultancy Services',
    period: 'Jan 2021 – Jul 2022',
    description:
      'Comprehensive admin portal for user registration, live network performance statistics, and security audit logs.',
    fullDescription: [
      'Engineered a comprehensive admin portal for user registration, live network performance statistics, and security audit logs.',
      'Developed reusable UI component libraries and actively contributed to automated unit testing and code refactoring.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'Node.js', 'Jest', 'SonarQube', 'BlackDuck', 'Sysdig', 'Jenkins'],
  },
  {
    name: 'Truce Platform',
    company: 'Freight & Supply Chain Logistics | Transin Logistics Pvt Ltd',
    period: 'Nov 2019 – Dec 2020',
    description:
      'Interactive logistics dashboards for freight booking, real-time load management, and carrier status updates with government E-way Bill integration.',
    fullDescription: [
      'Created interactive logistics dashboards for freight booking, real-time load management, and carrier status updates.',
      'Integrated government E-way Bill APIs and crafted custom UI modules using Material UI.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'Material UI', 'Node.js'],
  },
  {
    name: 'Simple Load Receipt',
    company: 'Fleet & Transport Management | Transin Logistics Pvt Ltd',
    period: 'Sep 2018 – Dec 2020',
    description:
      'Intuitive web portal allowing fleet transporters to efficiently log, track, and manage trip load receipts.',
    fullDescription: [
      'Developed an intuitive web portal allowing fleet transporters to efficiently log, track, and manage trip load receipts.',
      'Delivered responsive, accessible UI features using React.js, Redux, and modern design frameworks.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'Node.js', 'Material UI', 'AntD'],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    score: '77%',
    institution: 'P.B. Siddhartha College of Arts & Science | Vijayawada, Andhra Pradesh',
    period: '2015 – 2018',
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    score: '66%',
    institution: 'Sri Harshini Degree College | Ongole, Andhra Pradesh',
    period: '2012 – 2015',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

export const sectionCopy = {
  about:
    'A senior frontend developer focused on scalable UI architecture, automated testing, and release quality across enterprise domains.',
  projects:
    'Selected work spanning healthcare, telecom, logistics, and data platforms. Tap any card for more details.',
  skills:
    'The tools and practices I rely on daily to build high-performance frontend applications that scale with the business.',
  education:
    'Academic foundation in computer applications that set the stage for a career in software engineering.',
}
