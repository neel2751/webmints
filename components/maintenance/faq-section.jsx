"use client";

import FAQs from "../faq";

const faqs = [
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes, we offer structured post-launch maintenance and support to ensure your SaaS platform continues to perform reliably. Our support begins immediately after deployment and adapts as your platform evolves.",
  },
  {
    question: "Can you maintain a platform not built by you?",
    answer:
      "Yes. We can assess existing systems and provide maintenance, optimization, and modernization services regardless of who originally built the platform. We start with a thorough technical audit to understand the architecture and codebase.",
  },
  {
    question: "Do you offer 24/7 support?",
    answer:
      "Support availability depends on the selected support model. Enterprise clients can opt for extended coverage options including 24/7 monitoring and emergency response. We tailor coverage to match your operational requirements.",
  },
  {
    question: "Can support plans be customized?",
    answer:
      "Yes, support plans are tailored based on platform complexity, user volume, and business needs. We work with you to define the right level of coverage, response times, and service scope for your specific situation.",
  },
];

export function MaintenanceFaq() {
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
