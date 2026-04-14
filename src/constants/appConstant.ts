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
        slug: "patpat-mobile",
        title: "Patpat Mobile",
        by: "patpat",
        description: "Marketplace mobile app for one of Sri Lanka's leading classified platforms.",
        detailDescription: "At Patpat, I served as the lead mobile developer and defined the architecture for the React Native application used on iOS and Android. I built the app security layer from scratch with native modules for each platform, covering SSL pinning, Play Integrity, App Attest, root and jailbreak detection, Frida hook detection, tapjacking prevention, overlay protection, and related hardening measures without relying on third party libraries. I also led performance optimization using Android and iOS profiling tools, upgraded the project for 16 KB page size support, added multilingual support, coordinated closely with internal teams and external stakeholders, and managed publishing for both app stores.",
        job: "React native application development",
        toColor: "to-purple-600",
        link: "https://play.google.com/store/apps/details?id=com.fg.patpat&hl=en",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/mk/app/patpat-lk/id1385368825",
        linkLabel2: "App Store",
        bannerImages: ["/images/patpat ios banner.png", "/images/patpat android banner.png"],
        overview: "Patpat Mobile is a high usage classified marketplace where mobile performance, security, and release quality directly affect everyday users. I led the mobile engineering direction, shaped the application architecture, and delivered platform level improvements across iOS and Android.",
        contributions: [
            "Defined the mobile architecture and led feature delivery across the React Native codebase.",
            "Built a native security layer from scratch for both iOS and Android, including SSL pinning, Play Integrity, App Attest, root and jailbreak detection, Frida hook detection, tapjacking prevention, and overlay protection.",
            "Optimized app performance with Android and iOS profiling, added multilingual support, upgraded the project for 16 KB page size readiness, and managed store publishing with close coordination across teams and stakeholders.",
        ],
        outcomes: [
            "Strengthened the mobile app security posture without depending on third party security libraries.",
            "Improved runtime smoothness and platform readiness for modern Android and iOS requirements.",
            "Supported reliable releases to both app stores while helping the product scale with a stronger technical foundation.",
        ],
        stack: ["React Native", "TypeScript", "Native Modules", "Mobile Security", "Performance Profiling", "App Store Publishing", "Play Store Publishing", "Multilingual Apps", "16 KB Page Size"],
    },
    {
        slug: "singlife",
        title: "Singlife",
        by: "Singlife ph & Singlife singapore",
        description: "Large scale insurance mobile apps for Singapore and the Philippines.",
        detailDescription: "I worked on both the Singlife Singapore and Singlife Philippines mobile apps, each with more than 100 screens and strict expectations around stability, smooth performance, and device compatibility. For Singlife Singapore, I delivered the Betterview UI revamp with a highly specific interaction model, including an animated tab experience that I built from scratch using FlatList, Reanimated 2, and Gesture Handler after standard navigation approaches proved limiting. That feature has remained in production for more than two years, and I also contributed within a delivery process that used App Center for releases and CI pipelines while maintaining test coverage above 80 percent.",
        job: "Both IOS and Android application developments",
        link: "https://singlife.com/en",
        linkLabel: "Singlife Sg",
        link2: "https://singlife.com.ph/",
        linkLabel2: "Singlife Ph",
        toColor: "to-red-500",
        bannerImages: ["/images/singlife ios banner.png", "/images/singlife android banner.png"],
        overview: "Singlife is a digital insurance product where reliability, device compatibility, and polished user experience are essential. I contributed to large scale mobile delivery across the Singapore and Philippines applications with a strong focus on UI quality and production stability.",
        contributions: [
            "Worked across two large mobile applications with more than 100 screens, helping maintain smooth performance and broad device compatibility.",
            "Implemented the Betterview UI revamp for Singlife Singapore, including a custom animated tab experience built from scratch with FlatList, Reanimated 2, and Gesture Handler.",
            "Contributed to a disciplined release process using App Center and CI pipelines while supporting strong engineering quality standards and test coverage expectations.",
        ],
        outcomes: [
            "Delivered a complex UI experience that remained in production for more than two years.",
            "Helped maintain dependable cross platform delivery in a regulated product environment.",
            "Supported a mobile engineering workflow centered on quality, release confidence, and long term maintainability.",
        ],
        stack: ["React Native", "TypeScript", "FlatList", "Reanimated 2", "Gesture Handler", "App Center", "CI Pipelines", "Large Scale Mobile Apps"],
    },
    {
        slug: "komoju",
        title: "Komoju",
        by: "Delica",
        description: "React Native payment plugin work for a Japan based payment gateway.",
        detailDescription: "For Komoju, I implemented a payment gateway plugin for React Native with a strong focus on easy client adoption. Because native plugin installation can become difficult for client teams, I relied as much as possible on built in React Native capabilities and kept the integration surface practical and lightweight. The final SDK shipped successfully with multilingual support and a smoother integration experience for merchants.",
        job: "React native SDK development",
        link: "https://www.npmjs.com/package/@komoju/komoju-react-native",
        linkLabel: "Npm repo",
        toColor: "to-lime-600",
        bannerImages: ["/images/komoju banner.png"],
        overview: "Komoju is a payment gateway platform used by online merchants in Japan. My work focused on delivering a React Native payment integration that was practical for client teams to adopt and maintain.",
        contributions: [
            "Implemented a payment gateway plugin designed for easier adoption by client development teams.",
            "Used built in React Native capabilities wherever possible to reduce installation complexity and native setup friction.",
            "Delivered multilingual support while keeping the integration surface focused, lightweight, and reliable for merchant apps.",
        ],
        outcomes: [
            "Created a smoother React Native payment integration path for merchant facing mobile products.",
            "Reduced adoption friction by minimizing unnecessary native dependency overhead.",
            "Delivered a reusable plugin foundation that balanced developer experience with payment reliability.",
        ],
        stack: ["React Native", "TypeScript", "SDK Development", "Payment Gateway Integration", "Multilingual Apps", "Mobile Payments"],
    },
    {
        slug: "helayes",
        title: "HelaYes",
        by: "bizgrow",
        description: "Travel and tourism mobile app focused on itinerary planning, maps, and real time experiences.",
        detailDescription: "At HelaYes, I led the mobile app build and helped take the product from concept to MVP within a short timeline while still shipping a broad feature set. The work included map based experiences, real time tracking, multilingual support, real time data syncing, analytics, crash reporting, and release automation through Bitrise. The project also gave me strong hands on experience with location rich product design and operational delivery for a modern travel application.",
        job: "React native application development",
        toColor: "to-green-600",
        link: "https://play.google.com/store/apps/details?id=com.helayes.app",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/us/app/helayes/id6752722818",
        linkLabel2: "App Store",
        bannerImages: ["/images/helayes ios banner.png", "/images/helayes android banner.png"],
        overview: "HelaYes is a travel companion app built around itinerary planning, map experiences, and real time travel assistance. I led the mobile development effort and helped ship the MVP quickly without compromising on important product capabilities.",
        contributions: [
            "Led the mobile app implementation and helped release the MVP within a short delivery window.",
            "Built map based flows, real time tracking, multilingual support, real time syncing, analytics, and crash reporting into the product.",
            "Managed release automation through Bitrise while improving overall mobile quality, feature readiness, and operational visibility.",
        ],
        outcomes: [
            "Delivered a feature rich travel app experience in a fast moving MVP timeline.",
            "Improved the product foundation for scaling location aware and real time features on mobile.",
            "Supported more reliable releases and better visibility into app health and user behavior.",
        ],
        stack: ["React Native", "Maps", "Real Time Tracking", "Multilingual Apps", "Analytics", "Crash Reporting", "Bitrise", "Travel Apps"],
    },
    {
        slug: "coming-app",
        title: "Coming App",
        by: "Coming App",
        description: "Social discovery mobile app where I led a major React Native upgrade for 16 KB page size support.",
        detailDescription: "I upgraded a legacy React Native 0.71.1 codebase to a newer version that supports the 16 KB page size requirement. The project depended on more than 60 third party libraries, so I researched compatibility issues, resolved native build problems, and stabilized the app across both platforms before publishing the updated releases to the App Store and Google Play.",
        job: "React native version upgrade (16kb migration)",
        toColor: "to-red-600",
        link: "https://play.google.com/store/apps/details?id=com.imcomingapp.mobile",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/us/app/coming-app-find-activity-pals/id6445868774",
        linkLabel2: "App Store",
        bannerImages: ["/images/coming ios banner.png", "/images/coming android banner.png"],
        overview: "Coming App is a social discovery product centered on profiles, matching, and shared activities. My contribution focused on a demanding React Native upgrade that kept the mobile app aligned with new platform requirements while preserving release stability.",
        contributions: [
            "Upgraded a legacy React Native 0.71.1 project to a version compatible with the 16 KB page size requirement.",
            "Researched and resolved compatibility issues across more than 60 third party libraries, including native build and runtime concerns.",
            "Stabilized the app for both platforms and handled the publishing process for the updated iOS and Android releases.",
        ],
        outcomes: [
            "Brought the app into compliance with modern platform expectations without disrupting product continuity.",
            "Reduced upgrade risk through careful dependency research, debugging, and release validation.",
            "Enabled successful publishing on both app stores after a complex upgrade path.",
        ],
        stack: ["React Native", "Version Upgrades", "Dependency Compatibility", "Native Debugging", "App Store Publishing", "Play Store Publishing", "16 KB Page Size"],
    },
    {
        slug: "lucky1",
        title: "Lucky1",
        by: "DigitalX",
        description: "Sri Lankan lottery platform where I worked across web, backend, deployments, and ad technology.",
        detailDescription: "At Lucky1, I worked as a full stack developer across the website, backend services, deployments, and campaign tooling. I fully developed the platform dynamic ad sections and built product capabilities using React and InversifyJS, while also working with AWS CloudWatch, Rundeck, and RabbitMQ to support operations and delivery.",
        job: "Full Stack development and Widgets development",
        link: "https://lucky1.lk/",
        linkLabel: "Website",
        toColor: "to-blue-600",
        bannerImages: ["/images/lucky1 banner.png"],
        overview: "Lucky1 is an online lottery platform that required coordinated work across frontend, backend, infrastructure, and campaign focused product features. My role covered full stack delivery, deployment support, and dynamic ad section development.",
        contributions: [
            "Worked across the website, backend services, and deployment processes as a full stack engineer.",
            "Designed and developed the platform dynamic ad sections that supported campaign execution and content flexibility.",
            "Built product capabilities using React and InversifyJS while supporting operational tooling with AWS CloudWatch, Rundeck, and RabbitMQ.",
        ],
        outcomes: [
            "Expanded the platform with dynamic advertising capabilities that supported business campaigns more effectively.",
            "Improved day to day delivery by contributing across product code, backend services, and deployment operations.",
            "Supported a stronger technical foundation for continued feature growth on the platform.",
        ],
        stack: ["React", "InversifyJS", "AWS CloudWatch", "Rundeck", "RabbitMQ", "Full Stack Development", "Ad Tech"],
    },
    {
        slug: "sripay",
        title: "SriPay",
        by: "Boswin pvt Ltd",
        description: "Sri Lankan payment gateway product spanning Ionic mobile delivery and Spring Boot backend work.",
        detailDescription: "At SriPay, I contributed across both mobile and backend development using Ionic 3 and Java Spring Boot. I published the mobile app within six months despite entering mobile development without prior hands on experience, implemented the full SriPay Merchant app, contributed to the SriPay POS app, and delivered around 35 percent of the backend APIs required for the mobile experience.",
        job: "Full Stack development and mobile application development using Ionic3",
        link: "https://sripay.lk/",
        linkLabel: "Website",
        toColor: "to-sky-600",
        bannerImages: ["/images/sri pay banner.png"],
        overview: "SriPay is a payment gateway product with merchant focused workflows, mobile transactions, and backend service requirements. My contribution covered both application delivery and API development during an important growth stage of the product.",
        contributions: [
            "Built the mobile application using Ionic 3 and successfully published it within six months while learning mobile delivery in production.",
            "Implemented the full SriPay Merchant app and contributed to the SriPay POS application.",
            "Worked on Java Spring Boot backend development and delivered around 35 percent of the APIs required by the mobile product.",
        ],
        outcomes: [
            "Delivered a working mobile payment product in a short timeline with real store publishing outcomes.",
            "Strengthened the connection between backend services and mobile workflows through direct API contribution.",
            "Supported a broader payment ecosystem by contributing across merchant and POS product surfaces.",
        ],
        stack: ["Ionic 3", "Java Spring Boot", "MySQL", "Mobile Publishing", "Backend APIs", "Payment Gateway", "Full Stack Development"],
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