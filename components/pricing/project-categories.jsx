import { Rocket, Building2, Globe } from "lucide-react";

const categories = [
  {
    icon: Rocket,
    title: "SaaS MVP Platforms",
    description:
      "Core functionality, essential workflows, and scalable architecture designed for early-stage validation.",
    tags: ["MVP", "Startups", "Validation"],
  },
  {
    icon: Building2,
    title: "Mid-Scale SaaS Systems",
    description:
      "Feature-rich platforms with integrations, automation layers, and advanced workflows.",
    tags: ["Integrations", "Automation", "Growth"],
  },
  {
    icon: Globe,
    title: "Enterprise SaaS Solutions",
    description:
      "Large-scale systems with complex architecture, high user volumes, and multi-system integrations.",
    tags: ["Enterprise", "Scale", "Multi-system"],
  },
];

export function ProjectCategories() {
  return (
    <section
      style={{
        backgroundColor: "rgb(250,250,250)",
      }}
      className="py-20 md:py-28 border-t border-border/50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
            Project Categories
          </p>
          <h2 className="font-bold text-black/85 mt-3 text-5xl tracking-tighter">
            Solutions for Every Stage of Growth
          </h2>
          <p className="text-lg font-medium leading-snug text-gray-600 mt-4 tracking-tight max-w-2xl mx-auto">
            A detailed estimate is shared after a structured consultation and
            requirement analysis.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-indigo-300 hover:bg-indigo-50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 transition-colors group-hover:bg-indigo-200">
                <cat.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="mt-5 text-2xl font-bold mb-2 tracking-tight text-gray-800">
                {cat.title}
              </h3>
              <p className="text-md mt-3 font-medium tracking-tight leading-snug text-gray-500">
                {cat.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-gray-100 px-3 py-1 text-sm text-gray-600 font-medium tracking-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
