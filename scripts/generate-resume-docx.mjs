import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx'
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '..', 'public', 'resume.docx')

const heading = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 80 },
    children: [new TextRun({ text, bold: true, size: 24, font: 'Calibri', color: '1E3A8A' })],
  })

const body = (text) =>
  new Paragraph({
    spacing: { after: 80 },
    children: [new TextRun({ text, size: 21, font: 'Calibri' })],
  })

const bullet = (text) =>
  new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 40 },
    children: [new TextRun({ text, size: 21, font: 'Calibri' })],
  })

const jobTitle = (role, company, period) =>
  new Paragraph({
    spacing: { before: 160, after: 40 },
    children: [
      new TextRun({ text: `${role} | ${company}`, bold: true, size: 22, font: 'Calibri' }),
      new TextRun({ text: `  ${period}`, size: 21, font: 'Calibri', color: '475569' }),
    ],
  })

const doc = new Document({
  sections: [
    {
      properties: {
        page: { margin: { top: 720, bottom: 720, left: 720, right: 720 } },
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [new TextRun({ text: 'DOOLLA HARI', bold: true, size: 36, font: 'Calibri' })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: 'Senior Frontend Developer | React.js | TypeScript | JavaScript | Redux | Next.js',
              size: 22,
              font: 'Calibri',
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: '+91 8297782907 | haridoolla36@gmail.com | linkedin.com/in/hari-doolla | doolla-hari.vercel.app',
              size: 20,
              font: 'Calibri',
            }),
          ],
        }),
        heading('PROFESSIONAL SUMMARY'),
        body(
          'Senior Frontend Developer with 8+ years of experience building and delivering scalable, high-performance web applications across healthcare, telecommunications, supply chain and data analytics. Strong expertise in React.js, JavaScript (ES6+), TypeScript, Redux, React Hooks and reusable component architecture. Experienced in responsive UI development, frontend performance optimization, REST API integration and automated testing with Jest and Playwright. Collaborates with engineering, QA and business teams in Agile environments and mentors junior developers.',
        ),
        heading('TECHNICAL SKILLS'),
        body('Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3'),
        body(
          'Frontend: React.js, Next.js, Redux, React Hooks, Context API, React Router, Vue.js, Material UI, Ant Design, Tailwind CSS, Bootstrap',
        ),
        body(
          'UI Engineering: Responsive Design, Reusable Components, Component Architecture, Frontend Performance Optimization',
        ),
        body('API & Integration: REST APIs, API Integration, Postman, Swagger/OpenAPI'),
        body('Testing & Code Quality: Jest, Playwright, SonarQube, ESLint, Prettier'),
        body('Backend Exposure: Node.js, Express.js, MongoDB'),
        body('Tools & Delivery: Git, Bitbucket, Jira, Confluence, VS Code, Agile, Scrum, Kanban'),
        body('AI-Assisted Development: Claude, Cursor, GitHub Copilot, Lovable'),
        heading('PROFESSIONAL EXPERIENCE'),
        jobTitle(
          'Senior Software Developer',
          'Gem Source IT Consulting Pvt Ltd (Client: Infosys – Aetna)',
          'Oct 2025 – Aug 2026',
        ),
        bullet(
          'Developed core frontend modules for Aetna’s ID Card Excellence platform using React.js, Redux and React Hooks in an enterprise healthcare environment.',
        ),
        bullet(
          'Designed reusable, configurable UI components to accommodate changing copay and business rules without repeated component rewrites.',
        ),
        bullet(
          'Introduced Playwright end-to-end test coverage and SonarQube static-analysis quality gates to strengthen release validation and code maintainability.',
        ),
        jobTitle('Senior Software Developer', 'iSpatial Techno Solutions', 'Apr 2024 – Sep 2025'),
        bullet(
          'Led client-side development and production deployments across enterprise projects, standardizing shared UI components for reuse.',
        ),
        bullet(
          'Translated cross-functional requirements into modular, responsive React components and coordinated implementation with design, engineering and QA.',
        ),
        bullet(
          'Mentored junior engineers through code reviews, reinforcing React patterns, JavaScript practices and maintainable frontend development.',
        ),
        jobTitle('Technology Analyst', 'Infosys Limited', 'Jan 2024 – Mar 2024'),
        bullet(
          'Completed structured onboarding in enterprise application architecture, engineering standards and delivery processes ahead of project deployment.',
        ),
        jobTitle('Systems Engineer', 'Tata Consultancy Services', 'Jan 2021 – Jan 2024'),
        bullet(
          'Delivered React.js modules using Redux, Material UI and React Router for enterprise telecom network-management platforms.',
        ),
        bullet(
          'Established reusable component and state-management patterns across product teams to improve consistency and simplify onboarding.',
        ),
        bullet(
          'Applied SonarQube quality checks and followed corporate security and release-compliance requirements, and partnered with QA and backend teams to resolve defects.',
        ),
        bullet(
          'Employment detail: Jan 2021 – Nov 2021 under Innova Solutions payroll, then permanent TCS employee from Nov 2021.',
        ),
        jobTitle('Software Development Engineer', 'Transin Logistics Pvt Ltd', 'Sep 2018 – Dec 2020'),
        bullet(
          'Built a transporter-facing web platform for trip execution and load-receipt processing, integrating workflows with ERP and finance systems.',
        ),
        bullet(
          'Optimized React component rendering and data flow across logistics modules to improve page responsiveness.',
        ),
        bullet('Integrated government logistics APIs to support accurate regulatory data handling.'),
        heading('SELECTED PROJECTS'),
        jobTitle('ID Card Excellence', 'Healthcare | Aetna', 'Oct 2025 – Aug 2026'),
        body('Technologies: React.js, Redux, TypeScript, REST APIs, Jest, Playwright, SonarQube'),
        bullet('Developed the core UI for an enterprise insurance ID-card platform and configurable copay workflows.'),
        bullet(
          'Created override-capable components that allowed business teams to update copay rules without repeated UI rewrites.',
        ),
        bullet('Built Playwright regression coverage and applied SonarQube quality gates to support reliable releases.'),
        jobTitle('Open Data Platform', 'Data Management & Analytics | iSpatial Techno Solutions', 'Apr 2024 – Sep 2025'),
        body('Technologies: React.js, Vue.js, Redux, TypeScript, REST APIs, Jest, SonarQube, Bitbucket'),
        bullet('Developed interactive dashboards and dynamic filtering for a high-volume data analytics platform.'),
        bullet('Integrated a conversational AI chatbot that enabled users to query datasets in natural language.'),
        bullet(
          'Reviewed and optimized frontend bundle assets to help maintain dashboard responsiveness as data volume increased, and contributed to an additional Vue.js project.',
        ),
        jobTitle('ACSS User', 'Telecommunications | Tata Consultancy Services', 'May 2023 – Jan 2024'),
        body('Technologies: React.js, Next.js, Redux, Material UI, Node.js, Jest, SonarQube, BlackDuck, Sysdig'),
        bullet('Developed query-submission and credit-approval workflow tools for regional telecom operators.'),
        bullet(
          'Implemented region-aware frontend state and business rules to support multiple markets without duplicating UI logic.',
        ),
        bullet('Created Jest unit tests and followed code-quality, security and licensing checks.'),
        jobTitle('Network Circuit Order', 'Telecom & Infrastructure | Tata Consultancy Services', 'Aug 2022 – Apr 2023'),
        body('Technologies: React.js, Redux, Material UI, Node.js, Jest, SonarQube'),
        bullet('Built a circuit-provisioning and infrastructure-tracking application covering global network locations.'),
        bullet(
          'Developed modular components for reuse across the telecom product suite and aligned frontend data contracts with backend APIs.',
        ),
        jobTitle('Truce Platform', 'Freight & Supply Chain Logistics | Transin Logistics', 'Sep 2018 – Dec 2020'),
        body('Technologies: React.js, Redux, Node.js, Express.js, MongoDB, Material UI, Ant Design, Jest'),
        bullet('Built a freight-operations dashboard supporting booking, load tracking and carrier status updates.'),
        bullet(
          'Integrated government E-Way Bill APIs into booking workflows and developed custom Material UI components for logistics use cases.',
        ),
        heading('EDUCATION'),
        jobTitle(
          'Master of Computer Applications (MCA)',
          'P.B. Siddhartha College of Arts & Science, Vijayawada | Krishna University | 77%',
          '2015 – 2018',
        ),
        jobTitle(
          'Bachelor of Science (B.Sc.)',
          'Sri Harshini Degree College, Ongole | Acharya Nagarjuna University | 66%',
          '2012 – 2015',
        ),
      ],
    },
  ],
})

const buffer = await Packer.toBuffer(doc)
writeFileSync(outputPath, buffer)
console.log(`Wrote ${outputPath}`)
