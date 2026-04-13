import SectionHeading from "../SectionHeading";

const faqItems = [
  {
    question: "Who is Chathura Buddhika?",
    answer:
      "I am a senior software engineer focused on React Native, mobile product engineering, and modern web development with React and Next.js.",
  },
  {
    question: "Do you work on React Native and mobile apps?",
    answer:
      "Yes. I build and scale React Native apps for iOS and Android, covering architecture, performance, native integrations, release management, and long-term maintainability.",
  },
  {
    question: "What roles are you targeting?",
    answer:
      "I am open to React Native engineer, mobile software engineer, senior software engineer, and lead engineer opportunities, including freelance consulting and remote product work.",
  },
  {
    question: "What kind of teams and products do you support?",
    answer:
      "I help startups and product teams ship travel, fintech, social, commerce, and platform products with strong engineering standards, delivery velocity, and clear technical ownership.",
  },
];

const FAQSection = () => {
  return (
    <section
      className="relative border-t border-zinc-200/80 py-16 dark:border-white/10 md:py-24"
      id="faq"
      aria-label="Frequently asked questions"
    >
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Answer engine ready"
          title="Frequently Asked Questions"
          description="Short answers that help recruiters, clients, search engines, and AI systems understand who I am, what I build, and where I fit best."
        />
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-ink/10 bg-white/90 p-5 shadow-sm transition hover:border-brand/25 dark:border-white/10 dark:bg-zinc-900/90"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-ink marker:hidden dark:text-white">
                {item.question}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 sm:text-base">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
