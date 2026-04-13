import Link from "next/link";
import SectionHeading from "../SectionHeading";

const topicPages = [
  {
    href: "/react-native-engineer",
    title: "React Native Engineer",
    description:
      "A focused page covering React Native delivery, architecture, native integrations, and mobile product ownership.",
  },
  {
    href: "/mobile-software-engineer",
    title: "Mobile Software Engineer",
    description:
      "A broader overview of mobile engineering work across iOS, Android, performance, release management, and scalable delivery.",
  },
  {
    href: "/senior-software-engineer",
    title: "Senior Software Engineer",
    description:
      "A role-focused summary of technical leadership, full-stack delivery, and product engineering experience.",
  },
];

const SearchTopicsSection = () => {
  return (
    <section
      className="relative border-t border-zinc-200/80 py-16 dark:border-white/10 md:py-24"
      id="specialties"
      aria-label="Search topics"
    >
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Search-friendly content"
          title="Explore My Core Roles"
          description="Dedicated pages for the exact search intents recruiters and clients often use when looking for React Native, mobile, and senior software engineering talent."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {topicPages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-ink/10 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/30 dark:border-white/10 dark:bg-zinc-900/90"
            >
              <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {item.description}
              </p>
              <span className="mt-5 inline-flex text-sm font-semibold text-brand">
                Read more
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchTopicsSection;
