/* ------------------------------------------------------------------ */
/*  THE PIPELINE — single source of truth for all copy & data          */
/* ------------------------------------------------------------------ */

export const PROFILE = {
  nameFirst: 'MUHAMMAD',
  nameLast: 'HASEEB',
  role: 'Integration Engineer',
  focus: 'IBM ACE · ESQL · API Middleware',
  location: 'Karachi, Pakistan',
  coords: '24.86°N — 67.00°E',
  email: 'muhammadhaseeb0070@gmail.com',
  phone: '+92 313 3478691',
  github: 'https://github.com/MuhammadHaseeb0070',
  linkedin: 'https://www.linkedin.com/in/muhammad-haseeb-b4544a257/',
  site: 'muhammadhaseeb.space',
};

export const NAV = [
  { id: 'transform', label: 'TRANSFORM' },
  { id: 'route', label: 'ROUTE' },
  { id: 'protocols', label: 'PROTOCOLS' },
  { id: 'deliver', label: 'DELIVER' },
  { id: 'handshake', label: 'HANDSHAKE' },
];

export const BOOT_LINES = [
  '> ESTABLISHING SESSION ............ OK',
  '> NEGOTIATING TLS 1.3 ............ OK',
  '> ROUTING PAYLOAD → NODE_00 ..... OK',
  '> PAYLOAD ACCEPTED',
];

export const TRACE_LOGS = [
  ['POST /v1/transfers', '→ 200 OK · mapped via ESQL · 14ms'],
  ['SOAP → REST gateway', '→ legacy channel upgraded'],
  ['MQ.PUT CORE.BANKING.REQ', '→ depth=0 · queue healthy'],
  ['BAR deploy → QA env', '→ flow started · 0 errors'],
  ['GET /health NODE_00', '→ payload accepted · you are here'],
  ['PL/SQL proc LEDGER_POST', '→ committed · 8ms'],
  ['DFDL parse ISO20022', '→ pacs.008 validated'],
  ['ROUTE /cards/limits', '→ 200 OK · 9ms · cached'],
];

export const MARQUEE_ITEMS = [
  'IBM ACE', 'ESQL', 'SOAP', 'REST', 'IBM MQ', 'JSON', 'XML', 'DFDL',
  'PL/SQL', 'ORACLE', 'POSTGRESQL', 'JAVA', 'REACT', 'KOTLIN', 'NODE.JS',
  'AWS', 'DOCKER', 'GITHUB ACTIONS',
];

export const STATS = [
  { value: 5, suffix: '+', label: 'Projects shipped & deployed' },
  { value: 3, suffix: '', label: 'Environments managed — DEV / QA / PROD' },
  { value: 2, suffix: '', label: 'Spoken languages — EN / UR' },
];

export interface Role {
  id: string;
  route: string;
  role: string;
  org: string;
  period: string;
  points: string[];
}

export const ROUTES: Role[] = [
  {
    id: '01',
    route: 'CORE_BANKING ↔ EXTERNAL_APIS',
    role: 'Software Engineer — Integration & API Engineering',
    org: 'Dubai Islamic Bank Pakistan',
    period: 'NOV 2024 — PRESENT',
    points: [
      'Building and maintaining IBM App Connect Enterprise message flows powering real-time transaction processing for banking operations.',
      'Writing ESQL for transformation, validation and routing between core banking systems and external applications.',
      'Implementing SOAP → REST transformations so legacy channels can speak to modern APIs.',
      'Mapping JSON / XML payloads with DFDL to keep data consistent across distributed systems.',
      'Writing PL/SQL procedures for Oracle integrations inside message flows.',
      'Unit-testing flows and packaging BAR files for deployment across DEV, QA and PROD environments.',
    ],
  },
  {
    id: '02',
    route: 'FIELD_NETWORK ↔ SECURE_ACCESS',
    role: 'Networking Intern',
    org: 'Sukkur Electric Power Company (SEPCO)',
    period: 'JUN 2024 — JUL 2024',
    points: [
      'Delivered a secure VPN solution enabling remote access to internal applications.',
      'Configured authentication and routing policies with proper network segmentation.',
    ],
  },
  {
    id: '03',
    route: 'EDU_NODE — BSC_CS',
    role: 'BSc Computer Science',
    org: 'Sukkur IBA University',
    period: 'AUG 2025',
    points: [
      'Coursework: Distributed Computing, Data Structures, DBMS, AI/ML, Web Engineering, Mobile App Development.',
      'Team Lead — SIBA FEST: coordinated technical competitions across web, robotics and project exhibitions.',
    ],
  },
];

export interface SkillRow {
  id: string;
  category: string;
  skills: string[];
}

export const PROTOCOLS: SkillRow[] = [
  { id: 'P-01', category: 'Middleware', skills: ['IBM ACE / IIB', 'ESQL', 'Message Flows', 'IBM MQ', 'ESB Patterns', 'BAR Packaging'] },
  { id: 'P-02', category: 'API & Protocols', skills: ['SOAP', 'REST', 'HTTP/S', 'WSDL', 'JSON', 'XML', 'DFDL'] },
  { id: 'P-03', category: 'Languages', skills: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'PL/SQL', 'Kotlin', 'ESQL'] },
  { id: 'P-04', category: 'Data', skills: ['Oracle', 'PostgreSQL', 'Message Queuing'] },
  { id: 'P-05', category: 'Tooling', skills: ['Git', 'SoapUI', 'Postman', 'IBM Integration Toolkit', 'VS Code', 'Cursor'] },
  { id: 'P-06', category: 'Platform', skills: ['AWS S3 + CloudFront', 'Docker', 'GitHub Actions', 'Node.js', 'Express', 'React', 'React Native', 'WebSockets'] },
];

export interface Project {
  id: string;
  index: string;
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  image?: string;
  links: { label: string; href: string }[];
  diagram?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'lavacrypt',
    index: '01',
    title: 'LavaCrypt',
    tag: 'SECURE MESSAGING — FINAL YEAR PROJECT',
    desc:
      'Full-stack encrypted messenger where entropy comes from a real lava lamp — LavaGen streams footage of molten wax and distils it into cryptographically secure random values. End-to-end encryption, OTP authentication, zero server-side key storage.',
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'WebSockets', 'Cryptography'],
    image: '/images/lavacrypt.jpg',
    links: [{ label: 'Source', href: 'https://github.com/MuhammadHaseeb0070/DialogueFrontEnd' }],
  },
  {
    id: 'cinehub',
    index: '02',
    title: 'CineHub',
    tag: 'ANDROID — NATIVE APP',
    desc:
      'Native Android client for TMDB built on Kotlin coroutines — asynchronous REST integration, reactive discovery feeds and a modern UI system for browsing cinema.',
    tech: ['Kotlin', 'Coroutines', 'TMDB API', 'Android Studio'],
    image: '/images/cinehub.jpg',
    links: [
      { label: 'Source', href: 'https://github.com/MuhammadHaseeb0070/CineHub' },
      { label: 'APK', href: 'https://drive.google.com/file/d/1V4HiQuVmJo3bCXOu8ZL2ciOwiUnX3oCp/view' },
    ],
  },
  {
    id: 'flowtrack',
    index: '03',
    title: 'FlowTrack',
    tag: 'FINTECH — HCI RESEARCH',
    desc:
      'Personal finance tracker designed around human-computer interaction principles — interactive charts, dashboards and reports that make money legible at a glance.',
    tech: ['React Native', 'HCI Design', 'Victory Charts', 'AsyncStorage'],
    image: '/images/flowtrack.png',
    links: [
      { label: 'Source', href: 'https://github.com/MuhammadHaseeb0070/flowtrack' },
      { label: 'APK', href: 'https://drive.google.com/file/d/1C5-6SrPHT2uCRBwfhh4quUxtgg0qnNse/view' },
    ],
  },
  {
    id: 'resume-architect',
    index: '04',
    title: 'Resume Architect',
    tag: 'WEB APP — PRODUCT BUILD',
    desc:
      'Resume builder with configurable templates, drag-and-drop sections and real-time PDF preview — a tool for people who care how they are read.',
    tech: ['React', 'HTML2Canvas', 'LocalStorage', 'CSS3'],
    image: '/images/resumearchitect.png',
    links: [
      { label: 'Source', href: 'https://github.com/MuhammadHaseeb0070/ResumeArchitect' },
      { label: 'Live', href: 'https://resumearchitect.netlify.app' },
    ],
  },
  {
    id: 'cloud-pipeline',
    index: '05',
    title: 'Cloud Pipeline',
    tag: 'DEVOPS — THIS VERY SITE',
    desc:
      'Zero-downtime deployment pipeline on AWS — GitHub Actions builds, S3 holds, CloudFront delivers worldwide over Route 53 with SSL termination. The payload you are reading right now came through it.',
    tech: ['AWS S3', 'CloudFront', 'Route 53', 'GitHub Actions'],
    diagram: true,
    links: [],
  },
];



