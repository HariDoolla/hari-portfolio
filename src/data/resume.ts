export const profile = {
  name: 'Doolla Hari',
  title: 'Full Stack Developer',
  tagline:
    'I design and ship scalable web applications, from polished React interfaces to reliable Node.js backends, for enterprise teams that move fast and care about quality.',
  email: 'Haridoolla36@gmail.com',
  phone: '+91 8297782907',
  linkedin: 'https://www.linkedin.com/in/hari-doolla',
}

export const summary = [
  'Across telecom, healthcare, logistics, and data platforms, I have partnered with cross-functional teams including product owners, QA, DevOps, and backend engineers to deliver on tight timelines without compromising code quality or user experience.',
  'I bring a hands-on, ownership-driven mindset: mentoring junior developers, setting up quality pipelines with SonarQube and automated testing, and staying current with emerging tools so every release is faster, safer, and more reliable than the last.',
]

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
  { name: 'Next.js', icon: devicon('nextjs'), url: 'https://nextjs.org' },
  { name: 'Redux', icon: devicon('redux'), url: 'https://redux.js.org' },
  { name: 'TypeScript', icon: devicon('typescript'), url: 'https://www.typescriptlang.org' },
  { name: 'JavaScript', icon: devicon('javascript'), url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'HTML5', icon: devicon('html5'), url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS3', icon: devicon('css3'), url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Tailwind CSS', icon: devicon('tailwindcss'), url: 'https://tailwindcss.com' },
  { name: 'Bootstrap', icon: devicon('bootstrap'), url: 'https://getbootstrap.com' },
  { name: 'Material-UI', icon: devicon('materialui'), url: 'https://mui.com' },
  { name: 'Ant Design', icon: devicon('antdesign'), url: 'https://ant.design' },
  { name: 'Sass', icon: devicon('sass'), url: 'https://sass-lang.com' },
  { name: 'Vite', icon: devicon('vite'), url: 'https://vite.dev' },
  { name: 'Webpack', icon: devicon('webpack'), url: 'https://webpack.js.org' },
  { name: 'Framer Motion', icon: simpleIcon('framer'), url: 'https://www.framer.com/motion' },
  { name: 'Storybook', icon: simpleIcon('storybook'), url: 'https://storybook.js.org' },
  { name: 'React Router', icon: simpleIcon('reactrouter'), url: 'https://reactrouter.com' },
  { name: 'Axios', icon: simpleIcon('axios'), url: 'https://axios-http.com' },
  { name: 'GraphQL', icon: simpleIcon('graphql'), url: 'https://graphql.org' },
  { name: 'Node.js', icon: devicon('nodejs'), url: 'https://nodejs.org' },
  { name: 'Express.js', icon: devicon('express'), url: 'https://expressjs.com' },
  { name: 'MongoDB', icon: devicon('mongodb'), url: 'https://www.mongodb.com' },
  { name: 'REST APIs', icon: simpleIcon('openapiinitiative'), url: 'https://www.openapis.org' },
  { name: 'Git', icon: devicon('git'), url: 'https://git-scm.com' },
  { name: 'GitHub', icon: devicon('github'), url: 'https://github.com' },
  { name: 'Bitbucket', icon: devicon('bitbucket'), url: 'https://bitbucket.org' },
  { name: 'VS Code', icon: devicon('vscode'), url: 'https://code.visualstudio.com' },
  { name: 'Figma', icon: devicon('figma'), url: 'https://www.figma.com' },
  { name: 'Jest', icon: simpleIcon('jest'), url: 'https://jestjs.io' },
  { name: 'Playwright', icon: 'https://playwright.dev/img/playwright-logo.svg', url: 'https://playwright.dev' },
  { name: 'ESLint', icon: devicon('eslint'), url: 'https://eslint.org' },
  { name: 'Prettier', letterIcon: 'P', url: 'https://prettier.io' },
  { name: 'SonarQube', icon: devicon('sonarqube'), url: 'https://www.sonarsource.com/products/sonarqube' },
  { name: 'Postman', icon: devicon('postman'), url: 'https://www.postman.com' },
  { name: 'Jira', icon: devicon('jira'), url: 'https://www.atlassian.com/software/jira' },
  { name: 'Confluence', icon: devicon('confluence'), url: 'https://www.atlassian.com/software/confluence' },
  { name: 'npm', icon: devicon('npm'), url: 'https://www.npmjs.com' },
  { name: 'Cursor', icon: 'https://cdn.simpleicons.org/cursor', url: 'https://cursor.com' },
  { name: 'ChatGPT', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v14/icons/openai.svg', url: 'https://chatgpt.com' },
  { name: 'Gemini', icon: simpleIcon('googlegemini'), url: 'https://gemini.google.com' },
  { name: 'Claude Code', icon: simpleIcon('anthropic'), url: 'https://claude.ai/code' },
]

export const experiences = [
  {
    role: 'Sr Software Developer',
    company: 'Gem Source IT Consulting Pvt Ltd',
    period: 'Oct 2025 - Present',
    highlights: [
      'Serving as a senior developer on the Aetna ID Card Excellence initiative for a leading healthcare client, through Gem Source IT Consulting.',
      'Leading frontend development for insurance ID card generation, owning feature delivery, configuration workflows, and release quality across a business-critical healthcare platform.',
      'Driving code quality with SonarQube gates, Playwright E2E automation, and structured code reviews to keep releases stable at enterprise scale.',
    ],
  },
  {
    role: 'Sr Software Developer',
    company: 'I Spatial Techno Solutions',
    period: 'Apr 2024 - Sept 2025',
    highlights: [
      'Owned end-to-end frontend delivery across multiple client projects, from architecture decisions to production deployment.',
      'Mentored junior developers on React.js, JavaScript, and Node.js, helping the team adopt consistent patterns and faster delivery cycles.',
      'Led technical discussions and code reviews, establishing front-end standards that improved maintainability and reduced regression defects.',
    ],
  },
  {
    role: 'Technology Analyst',
    company: 'Infosys Limited',
    period: 'Jan 2024 - Mar 2024',
    highlights: [
      'Joined Infosys as Technology Analyst at the Bangalore office, bringing 5+ years of React and enterprise delivery experience.',
      'Completed onboarding and interviews for an upcoming client project before the role was placed on hold due to a project realignment.',
      'Moved forward professionally and continued delivering production-grade applications with the same focus on quality and collaboration.',
    ],
  },
  {
    role: 'Systems Engineer',
    company: 'Tata Consultancy Services',
    period: 'Nov 2021 - Jan 2024',
    highlights: [
      'Developed and maintained enterprise React applications using Redux, Material UI, and React Router for telecom and network service clients.',
      'Set up SonarQube for continuous code quality monitoring, vulnerability tracking, and coverage reporting across multiple project teams.',
      'Contributed to security hardening with Fortify, Sysdig, and Blackduck integrations, ensuring applications met client compliance standards.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Innova Solutions Pvt Ltd',
    period: 'Jan 2021 - Nov 2021',
    highlights: [
      'Worked on-site with TCS as a client partner, delivering React-based solutions for high-priority enterprise modules.',
      'Consistently met delivery milestones and technical expectations, which led to a direct offer to join TCS on their permanent payroll.',
    ],
  },
  {
    role: 'Software Development Engineer',
    company: 'Transin Logistics Pvt Ltd',
    period: 'Sept 2018 - Dec 2020',
    highlights: [
      'Built the frontend for a logistics and finance platform used by transporters to manage daily trips, load receipts, and billing workflows.',
      'Delivered responsive, production-ready UIs with React.js, Redux, Ant Design, and Material-UI. This was my first deep dive into full product ownership.',
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
    name: 'ID Card Excellence (Aetna)',
    company: 'Gem Source IT Consulting / Infosys (Client: Aetna)',
    period: 'Oct 2025 - Present',
    description:
      'Healthcare platform for generating insurance ID cards and copay summaries, built for accuracy, configurability, and enterprise-grade release confidence.',
    fullDescription: [
      'As a senior developer on Aetna\'s ID Card Excellence platform, I build and maintain the application that generates member ID cards and copay details. This system is used at scale across insurance product lines where accuracy is non-negotiable.',
      'I designed flexible configuration and override layers so business teams can adapt card layouts and rules without developer intervention, cutting turnaround time for regulatory and product changes.',
      'To strengthen release confidence, I introduced SonarQube quality gates, automated coverage reporting, and Playwright end-to-end tests, giving the team faster feedback and fewer production surprises.',
    ],
    technologies: ['React.js', 'Redux', 'React Hooks', 'JavaScript', 'HTML5', 'CSS3', 'SonarQube', 'Playwright', 'Jest'],
  },
  {
    name: 'Open Data Platform',
    company: 'I Spatial Techno Solutions',
    period: 'Apr 2024 - Sept 2025',
    description:
      'Enterprise data hub with live dashboards, smart filtering, and an AI assistant, built to handle heavy traffic and large datasets.',
    fullDescription: [
      'The Open Data Platform gives teams a single place to access, explore, and act on real-time data across devices, replacing fragmented reports with one responsive, always-current interface.',
      'I built interactive dashboards with advanced filters, sorting, and user-driven ratings so stakeholders could find insights in seconds instead of waiting on manual exports.',
      'An integrated AI chatbot lets users query data in natural language, dramatically lowering the barrier for non-technical teams to get answers on demand.',
      'I handled secure production deployments and performance tuning for high-traffic usage, ensuring the platform stayed fast even under peak load.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'Node.js', 'REST APIs', 'FileZilla', 'AI Chatbot Integration'],
  },
  {
    name: 'ACSS',
    company: 'Tata Consultancy Services',
    period: 'May 2023 - Jan 2024',
    description:
      'Telecom credit management system with region-based approvals, manager workflows, and full test coverage.',
    fullDescription: [
      'ACSS streamlines how telecom teams submit service queries and manage credit approvals, with managers assigning credits by region, area, and service tier.',
      'I built the React frontend to track user-specific data tied to network service regions, making approval chains transparent and reducing manual follow-ups.',
      'Quality was a priority: I wrote Jest unit tests with shallow rendering and configured SonarQube coverage gates before every production push.',
    ],
    technologies: ['React.js', 'Redux', 'React Hooks', 'JavaScript', 'HTML5', 'CSS3', 'Jest', 'SonarQube'],
  },
  {
    name: 'Network Circuit Order',
    company: 'Tata Consultancy Services',
    period: 'Aug 2022 - Apr 2023',
    description:
      'Network infrastructure tracker with real-time circuit visibility, security scanning, and enforced code quality standards.',
    fullDescription: [
      'Network Circuit Order gives operations teams a live view of circuit locations and status across the client\'s network, replacing spreadsheet-based tracking with a centralized React application.',
      'I developed dynamic, location-aware interfaces with Redux state management to handle complex filtering, mapping, and status updates across thousands of network nodes.',
      'Security was embedded from day one: I contributed to Fortify, Sysdig, and Blackduck setup alongside SonarQube coverage enforcement to meet strict enterprise compliance requirements.',
    ],
    technologies: ['React.js', 'Redux', 'React Hooks', 'JavaScript', 'Fortify', 'Sysdig', 'Blackduck', 'SonarQube'],
  },
  {
    name: 'Vson',
    company: 'Tata Consultancy Services',
    period: 'Jan 2021 - Jul 2022',
    description:
      'Admin dashboard for monitoring user registrations and network statistics with powerful search and test automation.',
    fullDescription: [
      'Vson is an internal admin tool that tracks user registrations and usage statistics across the client\'s network, giving operations teams full visibility without digging through backend logs.',
      'I built the admin dashboard with advanced search, filtering, and data export features so managers could act on user trends in real time.',
      'Beyond feature work, I authored integrated test suites to validate component interactions across the React frontend, catching regressions before they reached QA.',
    ],
    technologies: ['React.js', 'Redux', 'React Hooks', 'JavaScript', 'HTML5', 'CSS3', 'Jest', 'SonarQube'],
  },
  {
    name: 'Truce',
    company: 'Transin Logistics Pvt Ltd',
    period: 'Nov 2019 - Dec 2020',
    description:
      'Logistics management suite with E-way bill compliance, centralized state management, and performance-optimized UI.',
    fullDescription: [
      'Truce is a logistics technology platform where I owned the frontend for fleet and transporter workflows, from trip planning to regulatory document generation.',
      'I built responsive UI components with Ant Design and Material-UI, wired Redux for predictable state across complex multi-step forms, and integrated third-party E-way bill APIs for GST compliance.',
      'Performance tuning was ongoing: lazy loading, memoization, and API call batching kept the app responsive even when transporters managed hundreds of active trips.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'Ant Design', 'Material-UI', 'REST APIs', 'E-way Bill API'],
  },
  {
    name: 'Simple Load Receipt',
    company: 'Transin Logistics Pvt Ltd',
    period: 'Sep 2018 - Dec 2020',
    description:
      'Trip and receipt management tool for transporters, shipped incrementally with tight feedback loops from real users.',
    fullDescription: [
      'Simple Load Receipt helps transporters capture trip details, load receipts, and financial records in one place, connected to a broader finance management platform.',
      'I developed the React frontend with Redux and dual UI libraries (Material-UI and Ant Design), prioritizing mobile-friendly layouts since most users worked from the field.',
      'We shipped features in small, iterative releases based on direct user feedback, an approach that taught me how to balance speed with stability early in my career.',
    ],
    technologies: ['React.js', 'Redux', 'JavaScript', 'HTML5', 'CSS3', 'Material-UI', 'Ant Design', 'React Router'],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications',
    score: '77%',
    institution: 'P.B. Siddhartha College Of Arts & Science, Vijayawada',
    period: '2015 - 2018',
  },
  {
    degree: 'Bachelor of Science in MECS',
    score: '66%',
    institution: 'Sri Harshini Degree College, Ongole',
    period: '2012 - 2015',
  },
  {
    degree: 'Intermediate',
    score: '86%',
    institution: 'Andhra Pradesh Residential Junior College, Venkatagiri',
    period: '2010 - 2012',
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

// Section subtitles used across components
export const sectionCopy = {
  about:
    'A developer who cares as much about clean code and team growth as about shipping features that work.',
  projects:
    'Selected work spanning healthcare, telecom, logistics, and data platforms. Tap any card for the full story.',
  skills:
    'The tools and practices I rely on daily to build applications that scale with the business.',
  education:
    'A strong academic foundation in computer applications that set the stage for a career in software engineering.',
}
