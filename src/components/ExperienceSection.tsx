import React from "react";

type Props = {};

const timelineItems = [
  {
    date: "January 1, 2020",
    title: "Item 1",
    description: "Description for Item 1",
  },
  {
    date: "January 2, 2020",
    title: "Item 2",
    description: "Description for Item 2",
  },
];

const ExperienceSection = (props: Props) => {
  return (
    <div
      className="md:container md:mx-auto min-h-screen xxs:pt-8 xxs:pb-8 bg-white flex justify-center items-start"
      id="experience"
    >
      <div className="-my-6 md:w-2/3 xxs:pl-4 xxs:pr-4">
        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-extrabold text-2xl text-slate-900 mb-1 sm:mb-0">
            Rhino Partners (Pvt) Ltd
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-lime-700 bg-lime-100 rounded-full">
              Aug, 2023
            </time>
            <div className="text-xl font-bold text-slate-900">
              Senior Software Engineer
            </div>
          </div>
          <div className="text-slate-500">
            <strong>Domain:</strong> Insurance<br></br>
            <strong>Products:</strong> Singlife Singapore (Bare React Native)
            Ios & Android App
            <br></br>
            <strong>Responsibilities:</strong>
            In React Native development, the process unfolds with rigorous
            Research and Development, followed by the design and implementation
            of reusable components. A relentless focus on code quality is
            maintained through meticulous unit testing and code reviews.
            Implemented features are then demonstrated to align with user
            expectations. Crucially, ensuring cross-platform compatibility
            remains a top priority, guaranteeing a seamless user experience
            across diverse devices and operating systems. This comprehensive
            approach, spanning research, design, quality assurance, and
            compatibility considerations, forms the foundation of a successful
            React Native project.<br></br>
            <strong>Programming Best Practices:</strong> SOLID principles /
            Design patterns / OOP on TypeScript<br></br>
            <strong>Agile Development:</strong> Proficient in Scrum practices,
            adept at collaborative teamwork, fostering an effective and cohesive
            working environment. <br></br>
            <strong>Tools and Technologies:</strong> I possess expertise in
            utilizing Bitbucket for version control, App-Center for mobile app
            deployment, and developing with Bare React Native TypeScript.
            Additionally, I'm proficient in React Redux, Redux Saga, React
            Native Reanimated, Jest, and utilize Redux DevTools for efficient
            development workflows.
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-extrabold text-2xl text-slate-900 mb-1 sm:mb-0">
            Rhino Partners (Pvt) Ltd
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-lime-700 bg-lime-100 rounded-full">
              Oct, 2021
            </time>
            <div className="text-xl font-bold text-slate-900">
              Mid Senior Software Engineer
            </div>
          </div>
          <div className="text-slate-500">
            <strong>Domain:</strong> Insurance<br></br>
            <strong>Products:</strong> Singlife philippine (Expo React Native)
            Ios & Android App
            <br></br>
            <strong>Responsibilities:</strong>
            Engaging in thorough research and development, I contribute to
            crafting innovative solutions. My expertise extends to designing and
            implementing reusable components, ensuring code quality at every
            step. I take pride in demonstrating implemented features,
            emphasizing cross-platform compatibility for seamless performance on
            both IOS and Android. Additionally, my role involves guiding junior
            software engineers, sharing insights, and fostering a collaborative
            learning environment. This comprehensive approach not only ensures a
            high standard of development but also supports the growth and skill
            enhancement of the entire team.<br></br>
            <strong>Programming Best Practices:</strong> SOLID principles /
            Design patterns / OOP on TypeScript<br></br>
            <strong>Agile Development:</strong> Proficient in Scrum and Agile
            practices, adept at collaborative teamwork, ensuring effective
            communication and seamless cooperation within the team.<br></br>
            <strong>Tools and Technologies:</strong> I am proficient in
            utilizing GitHub for version control, deploying mobile apps with
            Diawi, and developing with React Native TypeScript (Expo). My skills
            extend to React Redux, Redux Toolkit, and leveraging Reactotron for
            enhanced development insights.
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-extrabold text-2xl text-slate-900 mb-1 sm:mb-0">
            DigitalXLabs (Pvt) Ltd
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-lime-700 bg-lime-100 rounded-full">
              Dec, 2020
            </time>
            <div className="text-xl font-bold text-slate-900">
              Software Engineer
            </div>
          </div>
          <div className="text-slate-500">
            <strong>Domain:</strong> Lottery Selling Platform<br></br>
            <strong>Products:</strong> Lucky1
            <br></br>
            <strong>Responsibilities:</strong> In my professional journey, I
            bring a multifaceted skill set encompassing the creation of
            intricate design diagrams, the intricacies of research and
            development, and the seamless implementation of APIs. My proficiency
            extends to the management and implementation of React web
            applications, including the nuanced task of handling React
            deployments. Moreover, I specialize in the meticulous design and
            development of React Native applications, ensuring a harmonious
            cross-platform experience. A crucial aspect of my work involves not
            just crafting solutions but also actively demonstrating implemented
            features, a testament to my commitment to delivering tangible and
            user-friendly outcomes in the dynamic realm of web and mobile
            application development.<br></br>
            <strong>Tools and Technologies:</strong> In my professional journey,
            I've adeptly utilized Gitlab for version control, streamlining the
            development process with Jenkins CI/CD. Proficient in TypeScript and
            JavaScript, I've employed these languages for diverse applications,
            including React, React Native, and Inversify for dependency
            injection. Leveraging AWS Cloudwatch and Rundeck Automation, I've
            ensured robust performance and efficiency. My expertise extends to
            database management using MySQL and Sequelize as the ORM. Thorough
            documentation is a priority, achieved through tools like Swagger and
            Postman. Operating within Linux-based systems and employing Process
            Managers like PM2, I bring a comprehensive skill set to ensure
            smooth, well-monitored, and efficient development workflows.
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-extrabold text-2xl text-slate-900 mb-1 sm:mb-0">
            DigitalXLabs (Pvt) Ltd
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-lime-700 bg-lime-100 rounded-full">
              Jul, 2019
            </time>
            <div className="text-xl font-bold text-slate-900">
              Associate Software Engineer
            </div>
          </div>
          <div className="text-slate-500">
            <strong>Domain:</strong> E-commerce Platform<br></br>
            <strong>Products:</strong> MyMed
            <br></br>
            <strong>Responsibilities:</strong> In the realm of software
            development, I specialize in creating detailed design diagrams that
            serve as a roadmap for project implementation. My expertise extends
            to conducting thorough research and development, ensuring a deep
            understanding of project requirements and industry best practices.
            With a focus on efficiency and functionality, I excel in API
            implementation, crafting robust and scalable interfaces.
            Furthermore, I am adept at feature implementation, translating
            conceptual ideas into tangible and user-friendly components that
            contribute to the overall success of software projects.<br></br>
            <strong>Tools and Technologies:</strong> I bring a wealth of
            experience in managing Linux servers, proficiently navigating the
            intricacies of server environments to ensure optimal performance and
            reliability. My expertise extends to PHP development, with a focus
            on Prestashop, where I have successfully implemented and maintained
            e-commerce solutions. Utilizing Gitlab for version control, I ensure
            the systematic tracking and collaborative development of code.
            Additionally, I am well-versed in employing Process Managers like
            PM2 to streamline and enhance the efficiency of server-side
            processes, contributing to a seamless and robust operational
            environment.
          </div>
        </div>

        <div className="relative pl-8 sm:pl-32 py-6 group">
          <div className="font-caveat font-extrabold text-2xl text-slate-900 mb-1 sm:mb-0">
            Boswin Consultancies (Pvt) Ltd
          </div>
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-lime-700 bg-lime-100 rounded-full">
              Jan, 2018
            </time>
            <div className="text-xl font-bold text-slate-900">
              Associate Software Engineer
            </div>
          </div>
          <div className="text-slate-500">
            <strong>Domain:</strong> Digital Wallet<br></br>
            <strong>Products:</strong> SriPay Merchant app, SriPay POS app
            <br></br>
            <strong>Responsibilities:</strong> As part of my responsibilities, I
            proficiently handle UI design and implementation for mobile
            applications using Ionic 3, ensuring a seamless and visually
            appealing user interface. Additionally, I am tasked with the
            implementation of Rest API endpoints, ensuring efficient
            communication between the mobile apps and server. Moreover, I am
            actively involved in the development and maintenance of MySQL
            procedures, contributing to the robustness and reliability of the
            database operations. This multifaceted role requires a comprehensive
            skill set to deliver high-quality and functional mobile applications
            with a strong backend infrastructure.<br></br>
            <strong>Tools and Technologies:</strong> With a wealth of
            experience, I am well-versed in TypeScript, particularly within the
            context of Ionic 3, allowing me to adeptly develop and enhance
            mobile applications. My expertise extends to Spring Boot for API
            development, where I leverage its capabilities to create robust and
            scalable backend solutions. Furthermore, I possess extensive
            proficiency in MySQL, encompassing both query optimization and the
            development and maintenance of complex procedures. This
            comprehensive skill set enables me to contribute effectively to the
            end-to-end development of innovative and high-performance software
            systems.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
