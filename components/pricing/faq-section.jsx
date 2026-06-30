import FAQs from "../faq";

const faqs = [
  {
    question: "How do you determine the right engagement model for my project?",
    answer:
      "After understanding your requirements, timeline, and business goals during a free consultation, we recommend the engagement model that best fits your needs — whether that's fixed scope, time & material, or a dedicated team.",
  },
  {
    question: "Do you offer fixed-scope engagements?",
    answer:
      "Yes, for clearly defined projects we offer fixed-scope engagements. For evolving products, we recommend flexible engagement models to maintain adaptability.",
  },
  {
    question: "Can the scope change during development?",
    answer:
      "The scope remains aligned with the agreed terms. Any additional features or changes are discussed and approved before implementation, ensuring full transparency.",
  },
  {
    question: "Do you work with startups as well as enterprises?",
    answer:
      "Yes, we work with startups building MVPs, growing SaaS businesses, and enterprises requiring scalable automation and modernization solutions.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience across healthcare, e-commerce, education, construction, finance, and more — bringing cross-sector expertise to build platforms that understand your landscape.",
  },
  {
    question: "How long does it take to get started?",
    answer:
      "After our initial consultation and requirement analysis, we can typically begin development within 1-2 weeks depending on the project scope and team availability.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16" style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 font-medium tracking-tight max-w-3xl">
            Get answers to the most common questions about our engagement models
            and development process.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <FAQs faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
