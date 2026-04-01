import { ExperienceType, ProjectType } from "@/types/appTypes";

const routes = [
    { label: 'Home', href: "/" },
    { label: 'Experience', href: "/" },
    { label: 'Blog', href: "/" },
]

export const expertise = ['Ts', 'Js', 'React\nNative', 'React', 'Next', 'Jest', 'HTML', 'CSS', 'Jira', 'Scrum', 'Solid Princ.', 'git', 'Redux', 'T.wind', 'Saga'];

export const contactInfo = {
    name: 'Chathura Buddhika',
    surName: 'Liyana Pathiranage',
    bDay: 'February 07',
    nationality: 'Sri Lankan',
    languages: 'English and Sinhala',
    freelance: 'Available',
    mobile: '+94 789307370',
    address: 'Kalutara,\nWestern Province,\nSri Lanka',
    email: 'lpchathurabuddhika@gmail.com',
    whatsapp: 'https://wa.me/94789307370',
    linkedin: 'https://www.linkedin.com/in/cblp/',
    facebook: 'https://www.facebook.com/chathurabuddhikalp/',
    instagram: 'https://www.instagram.com/chathurabuddhikalp/',
    blog: 'https://appcitor.com',
    git: 'https://github.com/ChathuraLiyanapathirana',
}

export const experienceSummary: ExperienceType[] = [
    {
        nested: true,
        company: 'Freelance Software Development Consulting',
        domain: 'Software Development Consulting',
        designation: 'Software Development Consultant',
        duration: 'Present',
        product: 'Contract-based freelance projects',
        description: `<strong>Responsibilities:</strong>
        Providing comprehensive software development consulting services on a contract basis. 
        Specializing in full-stack development, mobile application development, and technical 
        consultation for various clients. Delivering custom solutions across different domains 
        including web applications, mobile apps, and system integrations. Working with diverse 
        technologies and frameworks to meet client requirements and project specifications.
        <br></br>
        <strong>Programming Best Practices:</strong> SOLID principles / Design patterns / 
        OOP on TypeScript / Clean Architecture<br></br>
        <strong>Agile Development:</strong> Flexible engagement models, client collaboration, 
        iterative development processes.<br></br>
        <strong>Tools and Technologies:</strong> React, React Native, Next.js, TypeScript, 
        Node.js, Express, MongoDB, PostgreSQL, AWS services, Git version control, and 
        various deployment platforms. Adaptable to client technology stack requirements.`,
        nestedItems: [
            {
                company: 'HelaYes',
                domain: 'Travel & Tourism',
                designation: 'Senior Software Engineer/Lead (React Native)',
                duration: '2025 - Present',
                product: 'iOS & Android consumer application',
                description: `
                <strong>Scope:</strong> Developed and maintained a cross platform travel companion app focused on helping global travelers plan and navigate trips efficiently.<br></br>
                
                <strong>Highlights:</strong> Implemented geo tracking and Google APIs for location based features; built remote and local notification systems; integrated Firebase services, analytics (Google Analytics, Clarity), and Sentry for monitoring and debugging; optimized performance across iOS and Android; developed native modules where required; managed CI/CD using Bitrise and handled App Store & Play Store publishing.<br></br>
                
                <strong>Stack:</strong> React Native, TypeScript, Redux, Redux Toolkit, Google APIs, Geo Tracking, Firebase, Push Notifications (Remote & Local), Sentry, Google Analytics, Clarity, Native Modules (iOS & Android), Bitrise CI/CD, Performance Optimization.
                `
            },
            {
                company: 'PocketCFO',
                domain: 'AI driven Accounting Software',
                designation: 'Senior Software Engineer (React Native)',
                duration: '2025 - Present',
                product: 'iOS & Android consumer application',
                description: `
                <strong>Scope:</strong> Leading mobile development using Expo, focusing on codebase restructuring, maintainability, and scalable feature delivery.<br></br>
                
                <strong>Highlights:</strong> Improved code quality and architecture for long-term maintainability; implemented notification systems; managed CI/CD using EAS; handled App Store and Play Store publishing; contributed to performance tuning and ongoing feature enhancements.<br></br>
                
                <strong>Stack:</strong> React Native (Expo), TypeScript, Context API, EAS (CI/CD), Push Notifications, Mobile Architecture, Performance Optimization.
                `
            },
            {
                company: 'patpat.lk',
                domain: 'Classified Platform',
                designation: 'Senior Software Engineer/Lead (React Native)',
                duration: '2024 - Present',
                product: 'patpat.lk iOS and Android application development',
                description: `
                <strong>Scope:</strong> Led end to end mobile development, defining architecture and delivering a scalable, high performance application from UI/UX designs.<br></br>
                
                <strong>Highlights:</strong> Built reusable component architecture; implemented real-time messaging and notifications; integrated Firebase services; enhanced security (SSL pinning, integrity checks, anti-tampering); optimized performance across iOS/Android; managed App Store & Play Store releases including complex signing issues; developed YOLO based number plate recognition for Sri Lankan formats.<br></br>
                
                <strong>Stack:</strong> React Native, TypeScript, Redux, Redux Saga, Firebase, Mobile Architecture, Performance Optimization, Mobile Security, Native Modules, Python (YOLO).
                `
            },
            {
                company: 'Coming App',
                domain: 'Dating & Social Networking Platform',
                designation: 'Senior Software Engineer (React Native)',
                duration: '2025 - 2026',
                product: 'iOS and Android application development',
                description: `
                <strong>Scope:</strong> Developed and maintained a dating and social networking application focused on enabling meaningful user connections. Led a major React Native upgrade to support the 16KB page size requirement while ensuring app stability and compliance with store policies.<br></br>
                
                <strong>Highlights:</strong> Successfully completed the core upgrade within 3-4 weeks, followed by extensive debugging to resolve runtime crashes and improve performance. Managed and upgraded 60–70 third-party libraries, ensuring compatibility and optimization. Independently handled the full development lifecycle, including environment setup, configuration, policy compliance updates, and publishing to both Apple App Store and Google Play Store.<br></br>
                
                <strong>Stack:</strong> React Native, TypeScript, Redux, Redux Saga, Native Modules (iOS & Android), Version Upgrades, Play Store & App Store Publishing, 16KB Page Size Optimization.
                `
            },
            {
                company: 'Uniconnect.ai',
                domain: 'Call center system',
                designation: 'Software Engineer (Associate Lead Full Stack)',
                duration: '2024 - 2025',
                product: 'Uniconnect Call center system',
                description: `<strong>Scope:</strong> Worked as a full-stack engineer leading the development team, building and maintaining backend REST APIs, a frontend web portal, and an intermediate service layer to handle 3CX integrations and database operations.<br></br> <strong>Highlights:</strong> Mentored junior developers and led system design decisions, designed and developed microservices using Moleculer.js, implemented real-time communication features with WebSockets, and ensured scalable architecture with efficient caching and background job handling.<br></br> <strong>Stack:</strong> React, Moleculer.js, Express.js, WebSockets, SCSS, PostgreSQL, Redis, Bull.`
            },
        ],
    },
    {
        company: 'Rhino Partners (Pvt) Ltd',
        domain: 'Insurance and payment sdk development',
        designation: 'Senior Software Engineer',
        duration: 'Sep, 2024',
        product: 'Singlife (Singapore & Philippine) , Komoju RN SDK',
        description: `<strong>Responsibilities:</strong>
        In the dynamic realm of React Native application development, a
        comprehensive approach to Research and Development is paramount for
        success. Our team diligently engages in the meticulous Design and
        implementation of reusable components, a crucial step towards
        optimizing efficiency and scalability. To guarantee the robustness
        of our codebase, we prioritize the imperative task of ensuring code
        quality, coupled with the conscientious authoring of unit tests.
        Rigorous code reviews further reinforce our commitment to delivering
        impeccable solutions. In tandem, our development process involves
        the meticulous demonstration of implemented features, ensuring that
        they seamlessly integrate across both iOS and Android platforms.
        This holistic strategy not only enhances the reliability of our
        applications but also solidifies our dedication to providing a
        seamless user experience across diverse devices, contributing to the
        success of our React Native projects.<br></br>
        <strong>Programming Best Practices:</strong> SOLID principles /
        Design patterns / OOP on TypeScript<br></br>
        <strong>Agile Development:</strong> Proficient in Scrum practices,
        adept at collaborative teamwork, fostering an effective and cohesive
        working environment. <br></br>
        <strong>Tools and Technologies:</strong> Our software development
        lifecycle is fortified by robust version control mechanisms,
        leveraging Bitbucket and Github to streamline collaborative efforts
        and efficiently manage codebase versions. For seamless mobile app
        deployment, we harness the power of App-Center and Diawi, ensuring a
        smooth and reliable release process. In the realm of React Native,
        our expertise spans both Bare RN and Expo, complemented by
        TypeScript for enhanced code maintainability. Our toolkit includes a
        comprehensive stack featuring React Redux, Redux Saga, Redux
        Toolkit, React Native Reanimated, and Jest for rigorous testing.
        Additionally, we employ Redux DevTool and Reactotron to facilitate
        real-time debugging and state management, ensuring the delivery of
        high-quality, performant applications in line with the industry's
        best practices.`
    },
    {
        company: 'DigitalXLabs (Pvt) Ltd',
        domain: 'Lottery Selling Platform, E-commerce',
        designation: 'Software Engineer',
        duration: 'Jul, 2021',
        product: 'Lucky1, MyMed',
        description: `<strong>Responsibilities:</strong> In the realm of 
        full-stack development, my expertise extends across various crucial 
        domains, including the creation of intricate Design Diagrams, 
        the meticulous execution of Research and Development for API 
        implementation, and the adept management of React web apps. 
        With a profound understanding of the React framework, I excel 
        in both the design and development of React Native applications. 
        Leveraging my skills, I seamlessly navigate through the intricacies 
        of React deployments, ensuring robust and efficient solutions. 
        My commitment to innovation is evident in the comprehensive approach 
        I bring to the entire software development lifecycle. From conceptualizing 
        design diagrams to hands-on implementation in React web apps and React Native 
        applications, I strive for excellence, delivering high-quality solutions 
        that align with the dynamic demands of the ever-evolving technological 
        landscape.<br></br>
        <strong>Tools and Technologies:</strong>  I contributed significantly to 
        advancing software development practices by employing a range of technologies. 
        I proficiently utilized Gitlab for version control, managing collaborative 
        coding efforts effectively. Jenkins CI/CD played a vital role in automating 
        build and deployment pipelines, streamlining our development workflow for 
        optimal efficiency. My expertise in TypeScript and JavaScript extended to 
        the development of scalable applications using React, React Native, and Inversify. 
        AWS Cloudwatch and Rundeck Automation were pivotal components for seamless 
        monitoring and task scheduling in our infrastructure. I leveraged MySQL and 
        Sequelize as the ORM to ensure robust and optimized database interactions. 
        Additionally, Swagger Documentation and PostMan were crucial tools for API 
        development and testing. Operating within an experienced Linux base system, 
        I implemented Process Managers like PM2 for efficient process handling, 
        contributing to a high performance development environment.`
    },
    {
        company: 'Boswin Consultancies (Pvt) Ltd',
        domain: 'Digital Wallet',
        designation: 'Associate Software Engineer',
        duration: 'Jun, 2019',
        product: 'SriPay Merchant, SriPay POS',
        description: `<strong>Responsibilities:</strong>I immersed myself in the 
        intricacies of mobile application design and development. A central 
        component of my responsibilities involved the implementation and design 
        of REST APIs, ensuring seamless communication between different aspects of 
        the applications. I played a crucial role in crafting detailed design 
        diagrams and actively contributed to research and development initiatives 
        to stay current with emerging technologies. Additionally, I demonstrated 
        proficiency in overseeing Java EE deployments, managing the smooth transition 
        of applications from development to production environments. This diverse 
        range of tasks not only enhanced my technical competencies but also provided 
        a holistic understanding of the software development life cycle. My contributions 
        contributed to the team's success in navigating the complexities of mobile 
        application development.<br></br>
        <strong>Tools and Technologies:</strong> I played a pivotal role in the 
        development of robust and efficient software solutions. Leveraging TypeScript 
        within the Ionic 3 framework, I contributed significantly to the creation 
        of dynamic and responsive mobile applications. Concurrently, I was 
        actively engaged in backend development using Spring Boot, crafting 
        powerful APIs that seamlessly integrated with the frontend components. 
        Proficient in MySQL, I adeptly designed and implemented stored procedures 
        and queries, optimizing database interactions for enhanced performance. 
        This multifaceted experience allowed me to contribute to the end to end 
        development process, ensuring the delivery of high-quality and seamlessly 
        integrated solutions in a collaborative and dynamic software development environment.`
    }
];

export const professionalProjects: ProjectType[] = [
    {
        title: "Komoju",
        by: "Delica",
        description: "Japan based payment gateway offering seamless integration for online merchants.",
        job: "React native SDK development",
        link: "https://www.npmjs.com/package/@komoju/komoju-react-native",
        linkLabel: "Npm repo",
        toColor: "to-lime-600",
    },
    {
        title: "Singlife",
        by: "Singlife ph & Singlife singapore",
        description: "Singapore-based financial company offering a wide range of products and services.",
        job: "Both IOS and Android application developments",
        link: "https://singlife.com/en",
        linkLabel: "Singlife Sg",
        link2: "https://singlife.com.ph/",
        linkLabel2: "Singlife Ph",
        toColor: "to-red-500",
    },
    {
        title: "Lucky1",
        by: "DigitalX",
        description: "Online lottery platform based in Sri Lanka.",
        job: "Full Stack development and Widgets development",
        link: "https://lucky1.lk/",
        linkLabel: "Website",
        toColor: "to-blue-600",
    },
    {
        title: "SriPay",
        by: "Boswin pvt Ltd",
        description: "Payment gateway based in Sri Lanka, integrated with Alipay.",
        job: "Full Stack development and mobile application development using Ionic3",
        link: "https://sripay.lk/",
        linkLabel: "Website",
        toColor: "to-sky-600",
    },
    {
        title: "Patpat Mobile",
        by: "patpat",
        description: "Sri Lanka's leading classified platform for iOS and Android.",
        job: "React native application development",
        toColor: "to-purple-600",
        link: "https://play.google.com/store/apps/details?id=com.fg.patpat&hl=en",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/mk/app/patpat-lk/id1385368825",
        linkLabel2: "App Store",
    },
    {
        title: "HelaYes",
        by: "bizgrow",
        description: "Sri Lanka travel and tourism companion that creates itineraries and helps you plan your trip.",
        job: "React native application development",
        toColor: "to-green-600",
        link: "https://play.google.com/store/apps/details?id=com.helayes.app",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/us/app/helayes/id6752722818",
        linkLabel2: "App Store",
    },
    {
        title: "Coming App",
        by: "Coming App",
        description: "A travel and adventure style community app for instant connections, create a profile, match with like-minded explorers, and discover spontaneous plans and experiences.",
        job: "React native version upgrade (16kb migration)",
        toColor: "to-red-600",
        link: "https://play.google.com/store/apps/details?id=com.imcomingapp.mobile",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/us/app/coming-app-find-activity-pals/id6445868774",
        linkLabel2: "App Store",
    },
];

export const personalProjects: ProjectType[] = [
    {
        title: "Stitchnp",
        by: "lpcb",
        description: "Helps consolidate multiple package commands into a single command.",
        link: "https://stitchnp.vercel.app/",
        linkLabel: "Tool",
        toColor: "to-yellow-600",
    },
    {
        title: "Github",
        by: "lpcb",
        description: "There are several projects available for free use.",
        link: "https://github.com/ChathuraLiyanapathirana",
        linkLabel: "Github",
        toColor: "to-gray-300",
    },
];