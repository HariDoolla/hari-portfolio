export const profile = {
  name: 'Doolla Hari',
  title: 'Senior Frontend Developer | React.js | TypeScript | JavaScript | Redux | Next.js',
  stack: 'React.js | TypeScript | JavaScript | Redux | Next.js',
  tagline:
    'Senior Frontend Developer with 8+ years of experience building and delivering scalable, high-performance web applications across healthcare, telecommunications, supply chain and data analytics.',
  professionalSummary:
    'Senior Frontend Developer with 8+ years of experience building and delivering scalable, high-performance web applications across healthcare, telecommunications, supply chain and data analytics. Strong expertise in React.js, JavaScript (ES6+), TypeScript, Redux, React Hooks and reusable component architecture. Experienced in responsive UI development, frontend performance optimization, REST API integration and automated testing with Jest and Playwright. Collaborates with engineering, QA and business teams in Agile environments and mentors junior developers.',
  email: 'haridoolla36@gmail.com',
  phone: '+91 8297782907',
  linkedin: 'https://www.linkedin.com/in/hari-doolla',
  website: 'https://doolla-hari.vercel.app',
}

export const resumeFiles = {
  pdf: {
    path: '/resume.pdf',
    downloadName: 'Doolla_Hari_Front-End_Developer.pdf',
  },
  docx: {
    path: '/resume.docx',
    downloadName: 'Doolla_Hari_Front-End_Developer.docx',
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
  { name: 'JavaScript', icon: devicon('javascript'), url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: devicon('typescript'), url: 'https://www.typescriptlang.org' },
  { name: 'HTML5', icon: devicon('html5'), url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: devicon('css3'), url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'React.js', icon: devicon('react'), url: 'https://react.dev' },
  { name: 'Next.js', icon: devicon('nextjs'), url: 'https://nextjs.org' },
  { name: 'Redux', icon: devicon('redux'), url: 'https://redux.js.org' },
  { name: 'React Hooks', letterIcon: 'H', url: 'https://react.dev/reference/react/hooks' },
  { name: 'Context API', letterIcon: 'C', url: 'https://react.dev/learn/passing-data-deeply-with-context' },
  { name: 'React Router', icon: simpleIcon('reactrouter'), url: 'https://reactrouter.com' },
  { name: 'Vue.js', icon: devicon('vuejs'), url: 'https://vuejs.org' },
  { name: 'Material UI', icon: devicon('materialui'), url: 'https://mui.com' },
  { name: 'Ant Design', icon: simpleIcon('antdesign'), url: 'https://ant.design' },
  { name: 'Tailwind CSS', icon: devicon('tailwindcss'), url: 'https://tailwindcss.com' },
  { name: 'Bootstrap', icon: devicon('bootstrap'), url: 'https://getbootstrap.com' },
  { name: 'REST APIs', icon: simpleIcon('openapiinitiative'), url: 'https://www.openapis.org' },
  { name: 'Postman', icon: devicon('postman'), url: 'https://www.postman.com' },
  { name: 'Swagger', icon: simpleIcon('swagger'), url: 'https://swagger.io' },
  { name: 'Jest', icon: simpleIcon('jest'), url: 'https://jestjs.io' },
  { name: 'Playwright', icon: 'https://playwright.dev/img/playwright-logo.svg', url: 'https://playwright.dev' },
  { name: 'SonarQube', icon: devicon('sonarqube'), url: 'https://www.sonarsource.com/products/sonarqube' },
  { name: 'ESLint', icon: devicon('eslint'), url: 'https://eslint.org' },
  { name: 'Prettier', letterIcon: 'P', url: 'https://prettier.io' },
  { name: 'Node.js', icon: devicon('nodejs'), url: 'https://nodejs.org' },
  { name: 'Express.js', icon: devicon('express'), url: 'https://expressjs.com' },
  { name: 'MongoDB', icon: devicon('mongodb'), url: 'https://www.mongodb.com' },
  { name: 'Git', icon: devicon('git'), url: 'https://git-scm.com' },
  { name: 'Bitbucket', icon: devicon('bitbucket'), url: 'https://bitbucket.org' },
  { name: 'Jira', icon: devicon('jira'), url: 'https://www.atlassian.com/software/jira' },
  { name: 'Confluence', icon: simpleIcon('confluence'), url: 'https://www.atlassian.com/software/confluence' },
  { name: 'VS Code', icon: devicon('vscode'), url: 'https://code.visualstudio.com' },
  { name: 'Agile', letterIcon: 'A', url: 'https://agilemanifesto.org' },
  { name: 'Scrum', letterIcon: 'S', url: 'https://www.scrum.org' },
  { name: 'Kanban', letterIcon: 'K', url: 'https://kanban.university' },
  { name: 'Claude', icon: simpleIcon('anthropic'), url: 'https://claude.ai' },
  { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor', url: 'https://cursor.com' },
  { name: 'GitHub Copilot', icon: simpleIcon('githubcopilot'), url: 'https://github.com/features/copilot' },
  { name: 'Lovable', letterIcon: 'L', url: 'https://lovable.dev' },
]

export const experiences = [
  {
    role: 'Senior Software Developer',
    company: 'Gem Source IT Consulting Pvt Ltd (Client: Infosys – Aetna)',
    location: 'Hyderabad',
    period: 'Oct 2025 – Aug 2026',
    highlights: [
      'Developed core frontend modules for Aetna’s ID Card Excellence platform using React.js, Redux and React Hooks in an enterprise healthcare environment.',
      'Designed reusable, configurable UI components to accommodate changing copay and business rules without repeated component rewrites.',
      'Introduced Playwright end-to-end test coverage and SonarQube static-analysis quality gates to strengthen release validation and code maintainability.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'iSpatial Techno Solutions',
    location: 'Hyderabad',
    period: 'Apr 2024 – Sep 2025',
    highlights: [
      'Led client-side development and production deployments across enterprise projects, standardizing shared UI components for reuse.',
      'Translated cross-functional requirements into modular, responsive React components and coordinated implementation with design, engineering and QA.',
      'Mentored junior engineers through code reviews, reinforcing React patterns, JavaScript practices and maintainable frontend development.',
    ],
  },
  {
    role: 'Technology Analyst',
    company: 'Infosys Limited',
    location: 'Bengaluru',
    period: 'Jan 2024 – Mar 2024',
    highlights: [
      'Completed structured onboarding in enterprise application architecture, engineering standards and delivery processes ahead of project deployment.',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    location: 'Hyderabad',
    period: 'Jan 2021 – Jan 2024',
    highlights: [
      'Delivered React.js modules using Redux, Material UI and React Router for enterprise telecom network-management platforms.',
      'Established reusable component and state-management patterns across product teams to improve consistency and simplify onboarding.',
      'Applied SonarQube quality checks and followed corporate security and release-compliance requirements, and partnered with QA and backend teams to resolve defects.',
      'Employment detail: Jan 2021 – Nov 2021 under Innova Solutions payroll, then permanent TCS employee from Nov 2021.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Transin Logistics Pvt Ltd',
    location: 'Hyderabad',
    period: 'Sep 2018 – Dec 2020',
    highlights: [
      'Built a transporter-facing web platform for trip execution and load-receipt processing, integrating workflows with ERP and finance systems.',
      'Optimized React component rendering and data flow across logistics modules to improve page responsiveness.',
      'Integrated government logistics APIs to support accurate regulatory data handling.',
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
      'Core UI for an enterprise insurance ID-card platform with configurable copay workflows, Playwright regression coverage and SonarQube quality gates.',
    fullDescription: [
      'Developed the core UI for an enterprise insurance ID-card platform and configurable copay workflows.',
      'Created override-capable components that allowed business teams to update copay rules without repeated UI rewrites.',
      'Built Playwright regression coverage and applied SonarQube quality gates to support reliable releases.',
    ],
    technologies: ['React.js', 'Redux', 'TypeScript', 'REST APIs', 'Jest', 'Playwright', 'SonarQube'],
  },
  {
    name: 'Open Data Platform',
    company: 'Data Management & Analytics | iSpatial Techno Solutions',
    period: 'Apr 2024 – Sep 2025',
    description:
      'Interactive dashboards and dynamic filtering for a high-volume data analytics platform, with a conversational AI chatbot for natural-language queries.',
    fullDescription: [
      'Developed interactive dashboards and dynamic filtering for a high-volume data analytics platform.',
      'Integrated a conversational AI chatbot that enabled users to query datasets in natural language.',
      'Reviewed and optimized frontend bundle assets to help maintain dashboard responsiveness as data volume increased, and contributed to an additional Vue.js project.',
    ],
    technologies: ['React.js', 'Vue.js', 'Redux', 'TypeScript', 'REST APIs', 'Jest', 'SonarQube', 'Bitbucket'],
  },
  {
    name: 'ACSS User',
    company: 'Telecommunications | Tata Consultancy Services',
    period: 'May 2023 – Jan 2024',
    description:
      'Query-submission and credit-approval workflow tools for regional telecom operators, with region-aware frontend state and business rules.',
    fullDescription: [
      'Developed query-submission and credit-approval workflow tools for regional telecom operators.',
      'Implemented region-aware frontend state and business rules to support multiple markets without duplicating UI logic.',
      'Created Jest unit tests and followed code-quality, security and licensing checks.',
    ],
    technologies: ['React.js', 'Next.js', 'Redux', 'Material UI', 'Node.js', 'Jest', 'SonarQube', 'BlackDuck', 'Sysdig'],
  },
  {
    name: 'Network Circuit Order',
    company: 'Telecom & Infrastructure | Tata Consultancy Services',
    period: 'Aug 2022 – Apr 2023',
    description:
      'Circuit-provisioning and infrastructure-tracking application covering global network locations, with modular components reused across the telecom product suite.',
    fullDescription: [
      'Built a circuit-provisioning and infrastructure-tracking application covering global network locations.',
      'Developed modular components for reuse across the telecom product suite and aligned frontend data contracts with backend APIs.',
    ],
    technologies: ['React.js', 'Redux', 'Material UI', 'Node.js', 'Jest', 'SonarQube'],
  },
  {
    name: 'Truce Platform',
    company: 'Freight & Supply Chain Logistics | Transin Logistics',
    period: 'Sep 2018 – Dec 2020',
    description:
      'Freight-operations dashboard supporting booking, load tracking and carrier status updates, with government E-Way Bill APIs in booking workflows.',
    fullDescription: [
      'Built a freight-operations dashboard supporting booking, load tracking and carrier status updates.',
      'Integrated government E-Way Bill APIs into booking workflows and developed custom Material UI components for logistics use cases.',
    ],
    technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'MongoDB', 'Material UI', 'Ant Design', 'Jest'],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    score: '77%',
    institution: 'P.B. Siddhartha College of Arts & Science, Vijayawada | Krishna University',
    period: '2015 – 2018',
  },
  {
    degree: 'Bachelor of Science (B.Sc.)',
    score: '66%',
    institution: 'Sri Harshini Degree College, Ongole | Acharya Nagarjuna University',
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
    'A senior frontend developer focused on reusable component architecture, REST API integration, automated testing, and mentoring across enterprise domains.',
  projects:
    'Selected work spanning healthcare, telecom, logistics, and data platforms. Tap any card for more details.',
  skills:
    'Languages, frontend libraries, testing, APIs, and delivery tools used to build high-performance applications.',
  education:
    'Academic foundation in computer applications that set the stage for a career in software engineering.',
}
