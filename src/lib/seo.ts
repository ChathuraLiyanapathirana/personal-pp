import { contactInfo } from "@/constants/appConstant";
import { faqItems } from "@/constants/faq";

const defaultSiteUrl = "http://localhost:3000";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || defaultSiteUrl;

export const siteConfig = {
  name: "Chathura Buddhika Portfolio",
  shortName: "LPCB Portfolio",
  title: "Freelance React Native Engineer | Chathura Buddhika",
  description:
    "Chathura Buddhika is a freelance senior software engineer and software consultant specializing in React Native, mobile apps, React, and Next.js, available for contract, part-time, full-time, and remote product work.",
  location: "Sri Lanka",
  siteUrl,
  keywords: [
    "Chathura Buddhika",
    "freelance software engineer",
    "freelance software developer",
    "freelance developer",
    "reliable freelancer",
    "freelance part time developer",
    "freelance full time developer",
    "part-time freelance developer",
    "full-time freelance developer",
    "contract software engineer",
    "contract software developer",
    "contract based developer",
    "contract basis agreements",
    "software consultant",
    "software consultation",
    "software development consultant",
    "technical consultant",
    "product engineering consultant",
    "remote software engineer",
    "remote software developer",
    "digital nomad developer",
    "digital nomad software engineer",
    "hire freelance developer",
    "hire reliable freelancer",
    "hire software consultant",
    "React Native engineer",
    "React Native developer",
    "freelance React Native developer",
    "remote React Native developer",
    "React Native consultant",
    "mobile app consultant",
    "mobile software engineer",
    "freelance mobile app developer",
    "cross-platform app developer",
    "senior software engineer",
    "talented software engineer",
    "iOS engineer",
    "Android engineer",
    "freelance React developer",
    "Expo developer",
    "Next.js developer",
    "freelance Next.js developer",
    "TypeScript engineer",
  ],
  sameAs: [
    contactInfo.linkedin,
    contactInfo.git,
    contactInfo.blog,
    contactInfo.facebook,
    contactInfo.instagram,
  ],
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liyana Pathiranage Chanthura Buddhika",
  alternateName: "Chathura Buddhika",
  givenName: "Chathura",
  familyName: "Liyana Pathiranage",
  jobTitle: "Senior Software Engineer",
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  image: `${siteConfig.siteUrl}/twitter-image`,
  email: contactInfo.email,
  telephone: contactInfo.mobile,
  knowsLanguage: ["English", "Sinhala"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kalutara",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  homeLocation: {
    "@type": "Place",
    name: "Kalutara, Western Province, Sri Lanka",
  },
  nationality: contactInfo.nationality,
  worksFor: {
    "@type": "Organization",
    name: "Freelance Software Development Consulting",
  },
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "React Native Engineer",
      skills: "React Native, TypeScript, iOS, Android, mobile architecture, performance optimization, native modules",
    },
    {
      "@type": "Occupation",
      name: "Mobile Software Engineer",
      skills: "Mobile product engineering, CI/CD, release management, analytics, notifications, app performance",
    },
    {
      "@type": "Occupation",
      name: "Senior Software Engineer",
      skills: "React, Next.js, full-stack product delivery, architecture, debugging, technical leadership",
    },
  ],
  sameAs: siteConfig.sameAs,
  knowsAbout: [
    "React Native",
    "Mobile app development",
    "iOS development",
    "Android development",
    "TypeScript",
    "Next.js",
    "React",
    "Expo",
    "Redux",
    "Redux Toolkit",
    "Redux Saga",
    "Node.js",
    "Express.js",
    "WebSockets",
    "Firebase",
    "Push notifications",
    "Google Maps and location APIs",
    "App Store deployment",
    "Google Play deployment",
    "Performance optimization",
    "Mobile architecture",
    "CI/CD",
    "Technical consulting",
    "Software consultation",
    "Freelance software development",
    "Contract software development",
    "Remote product engineering",
    "Full-stack product engineering",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  inLanguage: "en",
};

export const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: siteConfig.title,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  mainEntity: personJsonLd,
};

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
