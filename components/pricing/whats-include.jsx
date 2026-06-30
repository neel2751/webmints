import {
  Search,
  LayoutGrid,
  Cloud,
  ShieldCheck,
  Rocket,
  MessageSquare,
} from "lucide-react";

const inclusions = [
  {
    icon: Search,
    title: "Requirement Discovery & Planning",
    description:
      "In-depth analysis of your business needs and technical requirements.",
  },
  {
    icon: LayoutGrid,
    title: "Architecture & Scalability Planning",
    description:
      "Future-proof architecture designed for growth and performance.",
  },
  {
    icon: Cloud,
    title: "Secure, Cloud-Based Development",
    description: "Modern cloud infrastructure with industry-standard security.",
  },
  {
    icon: ShieldCheck,
    title: "Testing & Quality Assurance",
    description:
      "Rigorous testing processes to ensure reliability and stability.",
  },
  {
    icon: Rocket,
    title: "Deployment Support",
    description:
      "Seamless deployment to production with monitoring and optimization.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "Regular updates, clear reporting, and open collaboration channels.",
  },
];

export function WhatsIncluded() {
  return (
    <section className="py-20 md:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
              Every Engagement Includes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black/85 tracking-tighter sm:text-5xl">
              What We Include in{" "}
              <span className="text-indigo-600">Every Project</span>
            </h2>
            <p className="text-base mt-4 font-medium tracking-tight leading-snug text-black/65">
              Regardless of the engagement model you choose, every project
              includes these core services. We focus on building long-term,
              scalable solutions — not short-term quick fixes.
            </p>
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="font-semibold text-black/80 tracking-tight text-lg mb-2">
                Why We Don{"'"}t Offer Pre-Defined Packages
              </h3>
              <p className="text-sm mt-2 font-medium tracking-tight leading-snug text-black/60">
                Custom SaaS development requires flexibility. Fixed public
                packages often result in compromised scalability, feature
                limitations, and misaligned business goals. Our approach ensures
                your platform is built around your actual operations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {inclusions.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:border-indigo-300"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 transition-colors group-hover:bg-indigo-200">
                  <item.icon className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="text-lg mt-3 font-bold tracking-tight text-black/80 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm mt-1.5 font-medium tracking-tight leading-snug text-black/60">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
