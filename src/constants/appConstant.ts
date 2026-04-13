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
        slug: "komoju",
        title: "Komoju",
        by: "Delica",
        description: "Japan based payment gateway offering seamless integration for online merchants.",
        job: "React native SDK development",
        link: "https://www.npmjs.com/package/@komoju/komoju-react-native",
        linkLabel: "Npm repo",
        toColor: "to-lime-600",
        bannerImages: ["/images/komoju banner.png"],
        overview: "Komoju is a payment platform used by online merchants in Japan. My contribution focused on building a reliable React Native SDK experience that helped teams integrate payment capabilities into mobile products with less friction.",
        contributions: [
            "Worked on the React Native SDK layer with a focus on developer experience and integration reliability.",
            "Improved the bridge between native capabilities and the JavaScript API used by app teams.",
            "Helped shape a cleaner integration flow so merchants could adopt the SDK with less setup effort.",
        ],
        outcomes: [
            "Created a more practical mobile integration path for teams using Komoju in React Native apps.",
            "Reduced integration complexity by keeping the SDK surface clear and focused.",
            "Supported a reusable mobile payment capability that could fit multiple merchant products.",
        ],
        stack: ["React Native", "TypeScript", "SDK development", "Mobile payments"],
    },
    {
        slug: "singlife",
        title: "Singlife",
        by: "Singlife ph & Singlife singapore",
        description: "Singapore-based financial company offering a wide range of products and services.",
        job: "Both IOS and Android application developments",
        link: "https://singlife.com/en",
        linkLabel: "Singlife Sg",
        link2: "https://singlife.com.ph/",
        linkLabel2: "Singlife Ph",
        toColor: "to-red-500",
        bannerImages: ["/images/singlife ios banner.png", "/images/singlife android banner.png"],
        overview: "Singlife is a digital insurance and financial services product with real customer expectations around trust, reliability, and usability. I contributed to mobile delivery across iOS and Android with a focus on polished product execution.",
        contributions: [
            "Built and refined mobile app features for both iOS and Android experiences.",
            "Worked on product quality, release readiness, and everyday delivery across a regulated domain.",
            "Supported a mobile experience that balanced customer trust, usability, and maintainable implementation.",
        ],
        outcomes: [
            "Helped ship customer facing mobile experiences in a finance related product environment.",
            "Contributed to stable cross platform delivery with attention to usability and quality.",
            "Supported a product that needed dependable engineering and consistent release execution.",
        ],
        stack: ["React Native", "iOS", "Android", "TypeScript", "Product delivery"],
    },
    {
        slug: "lucky1",
        title: "Lucky1",
        by: "DigitalX",
        description: "Online lottery platform based in Sri Lanka.",
        job: "Full Stack development and Widgets development",
        link: "https://lucky1.lk/",
        linkLabel: "Website",
        toColor: "to-blue-600",
        bannerImages: ["/images/lucky1 banner.png"],
        overview: "Lucky1 is an online lottery platform that needed both product functionality and dependable day to day engineering support. My work covered full stack delivery and reusable widget development for the platform.",
        contributions: [
            "Handled full stack implementation work across product features and platform behavior.",
            "Built widgets and reusable pieces that supported the user experience across the site.",
            "Contributed to a more maintainable product structure by focusing on practical delivery and reuse.",
        ],
        outcomes: [
            "Helped deliver a lottery platform experience with reusable building blocks.",
            "Supported faster feature work by creating components that could be reused across flows.",
            "Contributed to a stronger product foundation for ongoing development.",
        ],
        stack: ["React", "TypeScript", "Widgets", "Full stack development"],
    },
    {
        slug: "sripay",
        title: "SriPay",
        by: "Boswin pvt Ltd",
        description: "Payment gateway based in Sri Lanka, integrated with Alipay.",
        job: "Full Stack development and mobile application development using Ionic3",
        link: "https://sripay.lk/",
        linkLabel: "Website",
        toColor: "to-sky-600",
        bannerImages: ["/images/sri pay banner.png"],
        overview: "SriPay is a payment gateway product in Sri Lanka with merchant and transaction focused workflows. I contributed across both full stack development and mobile application delivery during the product lifecycle.",
        contributions: [
            "Worked on backend and frontend functionality that supported payment related product workflows.",
            "Built mobile application features using Ionic to extend the platform experience.",
            "Helped connect product needs across web, backend, and mobile touchpoints.",
        ],
        outcomes: [
            "Supported a connected product experience across web and mobile surfaces.",
            "Contributed to a payment focused platform that needed reliable implementation and clear flows.",
            "Helped move product delivery forward across multiple layers of the stack.",
        ],
        stack: ["Ionic", "TypeScript", "Mobile development", "Full stack development"],
    },
    {
        slug: "patpat-mobile",
        title: "Patpat Mobile",
        by: "patpat",
        description: "Sri Lanka's leading classified platform for iOS and Android.",
        job: "React native application development",
        toColor: "to-purple-600",
        link: "https://play.google.com/store/apps/details?id=com.fg.patpat&hl=en",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/mk/app/patpat-lk/id1385368825",
        linkLabel2: "App Store",
        bannerImages: ["/images/patpat ios banner.png", "/images/patpat android banner.png"],
        overview: "Patpat Mobile is a classifieds product where mobile usability, marketplace clarity, and app performance matter to daily users. My work focused on building and improving the React Native app experience for both major mobile platforms.",
        contributions: [
            "Delivered React Native features for a marketplace style mobile product.",
            "Worked on app quality, user flow clarity, and practical mobile performance improvements.",
            "Supported a product experience that needed consistency across iOS and Android.",
        ],
        outcomes: [
            "Helped strengthen the mobile experience for a high usage classified platform.",
            "Contributed to cross platform product quality in a marketplace setting.",
            "Supported ongoing feature delivery in a consumer facing app with real user expectations.",
        ],
        stack: ["React Native", "iOS", "Android", "Marketplace apps"],
    },
    {
        slug: "helayes",
        title: "HelaYes",
        by: "bizgrow",
        description: "Sri Lanka travel and tourism companion that creates itineraries and helps you plan your trip.",
        job: "React native application development",
        toColor: "to-green-600",
        link: "https://play.google.com/store/apps/details?id=com.helayes.app",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/us/app/helayes/id6752722818",
        linkLabel2: "App Store",
        bannerImages: ["/images/helayes ios banner.png", "/images/helayes android banner.png"],
        overview: "HelaYes is a travel companion app designed to help people plan trips and navigate travel moments more easily. I contributed to the React Native mobile application with attention to usability, travel features, and product polish.",
        contributions: [
            "Built mobile experiences that supported itinerary and travel planning flows.",
            "Worked on React Native delivery with attention to feature quality and app behavior.",
            "Helped shape a product experience aimed at making travel planning more practical for users.",
        ],
        outcomes: [
            "Contributed to a more complete travel companion experience on mobile.",
            "Supported a product that combined planning, exploration, and everyday usability.",
            "Helped ship a mobile app experience aligned with consumer travel expectations.",
        ],
        stack: ["React Native", "Travel apps", "iOS", "Android", "Mobile UX"],
    },
    {
        slug: "coming-app",
        title: "Coming App",
        by: "Coming App",
        description: "A travel and adventure style community app for instant connections, create a profile, match with like-minded explorers, and discover spontaneous plans and experiences.",
        job: "React native version upgrade (16kb migration)",
        toColor: "to-red-600",
        link: "https://play.google.com/store/apps/details?id=com.imcomingapp.mobile",
        linkLabel: "Google Play",
        link2: "https://apps.apple.com/us/app/coming-app-find-activity-pals/id6445868774",
        linkLabel2: "App Store",
        bannerImages: ["/images/coming ios banner.png", "/images/coming android banner.png"],
        overview: "Coming App is a social and activity discovery product centered on profiles, matching, and shared experiences. My work focused on React Native upgrade work and keeping the mobile application healthy during a demanding transition period.",
        contributions: [
            "Led important React Native upgrade work needed to keep the app moving forward.",
            "Worked through compatibility and stability concerns that came with version changes.",
            "Supported the product with practical engineering decisions during a sensitive mobile transition.",
        ],
        outcomes: [
            "Helped keep the mobile app aligned with platform requirements and ongoing product needs.",
            "Reduced upgrade risk by focusing on stability and delivery continuity.",
            "Supported a social product experience that needed dependable engineering during change.",
        ],
        stack: ["React Native", "Version upgrades", "iOS", "Android", "App stability"],
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