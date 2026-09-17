export const profile = {
  name: 'Doolla Hari',
  title: 'Senior Frontend Developer | React.js | TypeScript | JavaScript | Redux',
  stack: 'React.js | TypeScript | JavaScript | Redux',
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
  { name: 'Ant Design', icon: simpleIcon('antdesign'), url: 'https://ant.design' },
  { name: 'Tailwind CSS', icon: devicon('tailwindcss'), url: 'https://tailwindcss.com' },
  { name: 'Bootstrap', icon: devicon('bootstrap'), url: 'https://getbootstrap.com' },
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
  { name: 'Confluence', icon: simpleIcon('confluence'), url: 'https://www.atlassian.com/software/confluence' },
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
      'Architected core frontend modules for Aetna\'s ID Card Excellence platform using React.js, Redux, and React Hooks, directly supporting enterprise-scale insurance card issuance for a high-compliance healthcare client.',
      'Designed a configurable component library that absorbs evolving copay and business-rule changes without code rewrites, cutting delivery time on new requirements and reducing engineering rework.',
      'Established Playwright end-to-end coverage and SonarQube static analysis as mandatory release gates, sharply reducing production defects and raising overall code maintainability.',
    ],
  },
  {
    role: 'Senior Software Developer',
    company: 'iSpatial Techno Solutions',
    location: 'Hyderabad',
    period: 'Apr 2024 – Sep 2025',
    highlights: [
      'Directed client-side development and production deployments across several concurrent enterprise projects, standardizing shared UI libraries for reuse across teams.',
      'Translated cross-functional requirements into modular, responsive component architectures, shortening the feedback loop between design, engineering, and QA.',
      'Coached junior engineers through structured code reviews, raising team-wide proficiency in React patterns and modern JavaScript best practices.',
    ],
  },
  {
    role: 'Technology Analyst',
    company: 'Infosys Limited',
    location: 'Bengaluru',
    period: 'Jan 2024 – Mar 2024',
    highlights: [
      'Completed structured onboarding into enterprise-scale application architecture, engineering standards, and delivery frameworks ahead of live project deployment.',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    location: 'Hyderabad',
    period: 'Nov 2021 – Jan 2024',
    highlights: [
      'Delivered production-grade React.js modules using Redux, Material UI, and React Router for telecom network-management platforms serving enterprise clients.',
      'Introduced standardized component and state-management patterns adopted across multiple product teams, improving consistency and reducing onboarding time.',
      'Held the line on code quality via SonarQube and aligned every release with corporate security-compliance requirements.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Innova Solutions Pvt Ltd',
    location: 'Hyderabad',
    period: 'Jan 2021 – Nov 2021',
    highlights: [
      'Delivered client-facing product features end-to-end using React.js and Redux, from requirement breakdown through production release.',
      'Worked directly with QA and backend teams to triage defects quickly and keep releases on schedule under compressed timelines.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Transin Logistics Pvt Ltd',
    location: 'Hyderabad',
    period: 'Sep 2018 – Dec 2020',
    highlights: [
      'Built the transporter-facing web platform for trip execution and load-receipt processing, wired end-to-end into ERP and finance systems.',
      'Optimized component rendering and data flow across core logistics modules, measurably improving page load performance.',
      'Delivered compliant, real-time integrations with government logistics APIs for accurate regulatory data handling.',
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
      'Core UI layer of a production platform issuing insurance ID cards at enterprise scale, with override-capable copay configuration and mandatory quality gates.',
    fullDescription: [
      'Built the core UI layer of a production platform issuing insurance ID cards at enterprise scale.',
      'Designed an override-capable configuration system letting business teams adjust copay rules without new deployments.',
      'Backed every feature with Playwright regression suites, catching UI regressions before they reached production.',
      'Enforced SonarQube quality gates across the codebase, keeping defect leakage low through frequent release cycles.',
      'Persisted card and copay data through a backend API layer for reliable downstream processing.',
    ],
    technologies: ['React.js', 'Redux', 'TypeScript', 'Jest', 'Playwright', 'SonarQube'],
  },
  {
    name: 'Open Data Platform',
    company: 'Data Management & Analytics | iSpatial Techno Solutions',
    period: 'Apr 2024 – Sep 2025',
    description:
      'Interactive dashboards and dynamic filtering for a real-time, high-volume data analytics platform, with a conversational AI chatbot for plain-language queries.',
    fullDescription: [
      'Built interactive dashboards and dynamic filtering for a real-time, high-volume data analytics platform.',
      'Integrated a conversational AI chatbot that let users query datasets in plain language instead of configuring manual filters.',
      'Profiled and trimmed frontend bundle size to keep dashboards responsive as dataset volume scaled.',
      'Managed asset delivery and content workflows through FileZilla, with version control via Bitbucket.',
    ],
    technologies: ['React.js', 'Redux', 'TypeScript', 'Jest', 'SonarQube', 'FileZilla', 'Bitbucket'],
  },
  {
    name: 'ACSS User',
    company: 'Telecommunications | Tata Consultancy Services',
    period: 'May 2023 – Jan 2024',
    description:
      'Automated query-submission and credit-approval workflow tooling for regional telecom operators, with a region-aware state layer that avoids duplicated market logic.',
    fullDescription: [
      'Built automated query-submission and credit-approval workflow tooling for regional telecom operators.',
      'Designed a region-aware state layer that branched business logic correctly without duplicating code across markets.',
      'Wrote Jest unit tests and enforced SonarQube coverage thresholds across every release.',
      'Ran BlackDuck and Sysdig scans in the release pipeline to catch security and licensing risks early.',
    ],
    technologies: ['React.js', 'Redux', 'Material UI', 'Node.js', 'Jest', 'SonarQube', 'BlackDuck', 'Sysdig'],
  },
  {
    name: 'Network Circuit Order',
    company: 'Telecom & Infrastructure | Tata Consultancy Services',
    period: 'Aug 2022 – Apr 2023',
    description:
      'Circuit-provisioning and infrastructure-tracking tool covering global network locations, with modular components reused across the telecom product suite.',
    fullDescription: [
      'Built a circuit-provisioning and infrastructure-tracking tool covering global network locations.',
      'Designed modular components for reuse across the broader telecom product suite, cutting duplicate build effort.',
      'Aligned frontend data contracts with backend provisioning APIs through close cross-team collaboration.',
      'Ran the release through a CI pipeline alongside BlackDuck and Sysdig scans to keep deployments secure and consistent.',
    ],
    technologies: ['React.js', 'Redux', 'Material UI', 'Node.js', 'Jest', 'SonarQube', 'BlackDuck', 'Sysdig'],
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
    company: 'Freight & Supply Chain Logistics | Transin Logistics',
    period: 'Sep 2018 – Dec 2020',
    description:
      'Freight-operations dashboard for booking, real-time load tracking, and carrier status updates, with government E-way Bill APIs in the booking flow.',
    fullDescription: [
      'Built a freight-operations dashboard for booking, real-time load tracking, and carrier status updates.',
      'Integrated government E-way Bill APIs directly into the booking flow for regulatory compliance.',
      'Designed custom Material UI modules tailored to freight and logistics workflows.',
      'Worked with operations teams to refine real-time load-tracking accuracy.',
    ],
    technologies: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Material UI', 'Ant Design', 'MongoDB', 'Jest'],
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
    'A senior frontend developer focused on component-driven architecture, automated testing, and release quality across enterprise domains.',
  projects:
    'Selected work spanning healthcare, telecom, logistics, and data platforms. Tap any card for more details.',
  skills:
    'The tools and practices I rely on daily to build high-performance frontend applications that scale with the business.',
  education:
    'Academic foundation in computer applications that set the stage for a career in software engineering.',
}
