import { Layers, Puzzle, Cloud, Clock, Shield, BarChart3 } from "lucide-react";

const factors = [
  {
    icon: Layers,
    title: "Scope & Feature Complexity",
    description:
      "The depth and breadth of your platform's functionality directly shapes the development approach.",
  },
  {
    icon: Puzzle,
    title: "Automation & Integrations",
    description:
      "Level of automation required plus CRM, API, and third-party tool integrations.",
  },
  {
    icon: BarChart3,
    title: "Industry Requirements",
    description:
      "Compliance, workflows, and domain-specific features unique to your industry.",
  },
  {
    icon: Cloud,
    title: "Scalability & Infrastructure",
    description:
      "Cloud architecture, performance optimization, and growth-ready infrastructure.",
  },
  {
    icon: Clock,
    title: "Timeline & Approach",
    description:
      "Development methodology, sprint structure, and delivery milestones.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Data protection, encryption standards, and regulatory compliance requirements.",
  },
];

export function HowItWorks() {
  return (
    <section
      style={{
        backgroundColor: "rgb(250,250,250)",
      }}
      className="py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
            How We Approach Your Project
          </p>
          <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter mt-4 text-balance">
            Tailored to Your Real Requirements
          </h2>
          <p className="text-lg font-medium leading-snug text-gray-600 mt-4 tracking-tight max-w-2xl mx-auto">
            Our approach is based on real project variables — not generic
            templates. This ensures you invest only in what your platform truly
            needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {factors.map((factor) => (
            <div
              key={factor.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-indigo-300 hover:bg-indigo-50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 transition-colors group-hover:bg-indigo-200">
                <factor.icon className="h-5 w-5 text-indigo-600" />
              </div>
              <h3
                className="text-xl font-bold mt-4 tracking-tight text-black/85 transition-colors
              group-hover:text-indigo-600"
              >
                {factor.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
