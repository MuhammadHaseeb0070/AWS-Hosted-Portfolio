import { IProject, IExperience, ITechStack } from '@/types';

export const GENERAL_INFO = {
    email: 'muhammadhaseeb0070@gmail.com',
    phone: '+923133478691',
    location: 'Sukkur, Pakistan',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Muhammad Haseeb, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/MuhammadHaseeb0070' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/muhammad-haseeb-b4544a257/' },
    { name: 'email', url: `mailto:${GENERAL_INFO.email}` },
];

export const MY_STACK: { [key: string]: ITechStack[] } = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'React Native',
            icon: '/logo/react.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgresql.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Kotlin',
            icon: '/logo/kotlin.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'LavaCrypt',
        slug: 'lavacrypt',
        liveUrl: '#',
        sourceCode: 'https://github.com/MuhammadHaseeb0070/DialogueFrontEnd',
        year: 2024,
        description: `
      An end-to-end encrypted chat application with true randomness encryption (avalanche movement). Features OTP login with no server-side key storage for maximum security. Built as my Final Year Project, this app demonstrates advanced cryptographic techniques and secure communication protocols. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🔐 End-to-End Encryption: True randomness encryption using avalanche movement</li>
        <li>🔑 OTP Authentication: Secure login with no server-side key storage</li>
        <li>💬 Real-time Messaging: Socket.io for instant communication</li>
        <li>🛡️ Maximum Security: Advanced cryptographic protocols</li>
        <li>📱 Mobile App: Built with React Native for cross-platform support</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented custom encryption algorithms for secure messaging</li>
        <li>Developed real-time chat functionality using Socket.io</li>
        <li>Created secure authentication system with OTP</li>
        <li>Built responsive mobile interface with React Native</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Node.js, Express.js, MongoDB for data storage</li>
        <li>🎨 Frontend: React Native for mobile application</li>
        <li>🔒 Security: Implemented custom encryption algorithms</li>
        <li>💬 Real-time: Socket.io for instant messaging</li>
        <li>🔑 Authentication: OTP-based secure login system</li>
      </ul>
      `,
        techStack: [
            'React Native',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Socket.io',
            'Cryptography',
            'OTP Authentication',
        ],
        thumbnail: '/projects/thumbnail/lavacrypt.png',
        longThumbnail: '/projects/long/lavacrypt.png',
        images: [
            '/projects/images/fyp1.png',
            '/projects/images/fyp2.jpg',
            '/projects/images/fyp3.jpg',
            '/projects/images/fyp4.jpg',
            '/projects/images/fyp5.jpg',
            '/projects/images/fyp7.jpg',
            '/projects/images/fyp8.jpg',
        ],
    },
    {
        title: 'CineHub',
        slug: 'cinehub',
        techStack: [
            'Kotlin',
            'Android Studio',
            'TMDB API',
            'Retrofit',
            'Room Database',
            'Material Design',
        ],
        thumbnail: '/projects/thumbnail/cinehub.jpg',
        longThumbnail: '/projects/long/cinehub.jpg',
        images: [
            '/projects/images/cinehub1.jpg',
            '/projects/images/cinehub2.jpg',
        ],
        sourceCode: 'https://github.com/MuhammadHaseeb0070/CineHub',
        liveUrl: 'https://drive.google.com/file/d/1V4HiQuVmJo3bCXOu8ZL2ciOwiUnX3oCp/view',
        year: 2023,
        description: `A comprehensive movie recommendation app built using Kotlin for Android. Integrates with TMDB API to provide personalized movie recommendations, detailed movie information, ratings, and reviews. Features modern Material Design UI with smooth animations and offline capabilities.`,
        role: `As the solo developer, I: <br/>
        - Built the entire Android app from scratch using Kotlin and Android Studio.<br/>
        - Integrated TMDB API for movie data and recommendations.<br/>
        - Implemented offline capabilities with Room Database.<br/>
        - Delivered a modern, user-friendly interface with Material Design.`,
    },
    {
        title: 'FlowTrack',
        slug: 'flowtrack',
        techStack: [
            'React Native',
            'React Navigation',
            'Victory Charts',
            'AsyncStorage',
            'HCI Design',
            'Expo',
        ],
        thumbnail: '/projects/thumbnail/flowtrack.png',
        longThumbnail: '/projects/long/flowtrack.png',
        images: [
            '/projects/images/flowtrack1.png',
            '/projects/images/flowtrack2.jpg',
            '/projects/images/flowtrack3.jpg',
            '/projects/images/flowtrack4.jpg',
            '/projects/images/flowtrack5.jpg',
            '/projects/images/flowtrack6.jpg',
        ],
        sourceCode: 'https://github.com/MuhammadHaseeb0070/flowtrack',
        liveUrl: 'https://drive.google.com/file/d/1C5-6SrPHT2uCRBwfhh4quUxtgg0qnNse/view',
        year: 2023,
        description:
            'A personal finance tracker app built with React Native focusing on optimal user experience through HCI principles. Features interactive graphs, comprehensive dashboards, detailed reports, and expense categorization. Designed to help users manage their finances effectively with intuitive interfaces.',
        role: `As the solo developer, I:<br/>
        - Designed and developed the app using React Native and HCI principles.<br/>
        - Implemented interactive charts and graphs for data visualization.<br/>
        - Created intuitive dashboards for expense tracking and management.<br/>
        - Built responsive interface optimized for mobile devices.`,
    },
    {
        title: 'Resume Architect',
        slug: 'resume-architect',
        techStack: ['React JS', 'HTML2Canvas', 'Local Storage', 'CSS3', 'JavaScript ES6'],
        thumbnail: '/projects/thumbnail/resumearchitect.png',
        longThumbnail: '/projects/long/resumearchitect.png',
        images: ['/projects/images/resumearchitect.png'],
        sourceCode: 'https://github.com/MuhammadHaseeb0070/ResumeArchitect',
        liveUrl: 'https://resumearchitect.netlify.app',
        year: 2023,
        description:
            'A professional resume builder web application with customizable templates and local data saving. Users can create, edit, and download professional resumes with multiple template options. Features drag-and-drop functionality, real-time preview, and responsive design for all devices.',
        role: `As the solo developer, I:<br/>
        - Designed and developed the platform using React JS.<br/>
        - Implemented multiple resume templates with customization options.<br/>
        - Created real-time preview and download functionality.<br/>
        - Built responsive design for desktop and mobile devices.`,
    },
    {
        title: 'UI Architect',
        slug: 'ui-architect',
        techStack: ['React JS', 'CSS3', 'Component Library', 'Responsive Design', 'JavaScript'],
        thumbnail: '/projects/thumbnail/uiarchitect.png',
        longThumbnail: '/projects/long/uiarchitect.png',
        images: ['/projects/images/UIarchitect.png'],
        sourceCode: 'https://github.com/MuhammadHaseeb0070/UIArchitect',
        liveUrl: 'https://uiarchitect.netlify.app',
        year: 2023,
        description: `A comprehensive UI components library featuring ready-to-use React components including navigation bars, buttons, cards, and other essential UI elements. Designed to help developers quickly build beautiful interfaces with consistent design patterns and responsive layouts.`,
        role: ``,
    },
];

export const MY_EXPERIENCE: IExperience[] = [
    {
        title: 'Networking Intern',
        company: 'SEPCO, Sukkur',
        duration: 'Jun 2024 - Jul 2024',
    },
    {
        title: 'Team Lead',
        company: 'SIBA FEST 2024',
        duration: '2024',
    },
];
