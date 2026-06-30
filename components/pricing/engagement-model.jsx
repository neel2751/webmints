import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const models = [
  {
    number: "01",
    title: "Fixed Scope Development",
    subtitle: "Best for clearly defined projects with stable requirements.",
    idealFor: [
      "SaaS MVP development",
      "Feature-specific builds",
      "Well-documented project scopes",
    ],
    benefits: ["Predictable cost", "Clear deliverables", "Structured timeline"],
    note: "This model works well when requirements are finalized and unlikely to change during development.",
    featured: false,
  },
  {
    number: "02",
    title: "Time & Material Model",
    subtitle: "Best for evolving products and agile development.",
    idealFor: [
      "Growing SaaS platforms",
      "Continuous improvements",
      "Feature experimentation",
      "Automation upgrades",
    ],
    benefits: [
      "Flexible scope",
      "Agile execution",
      "Pay for actual development effort",
    ],
    note: "This model allows adaptability as business needs evolve.",
    featured: true,
  },
  {
    number: "03",
    title: "Dedicated Development Team",
    subtitle: "Best for long-term SaaS growth and ongoing innovation.",
    idealFor: [
      "Scaling SaaS products",
      "Enterprise-grade systems",
      "Continuous automation initiatives",
      "Multi-phase digital transformation",
    ],
    benefits: [
      "Dedicated technical resources",
      "Long-term collaboration",
      "Full flexibility in roadmap planning",
    ],
    note: "This model is designed for businesses looking to build and scale strategically.",
    featured: false,
  },
];

export function EngagementModels() {
  return (
    <section id="engagement-models" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">
            Our Engagement Models
          </p>
          <h2 className="sm:text-5xl text-3xl font-bold text-black/85 tracking-tighter mt-3 text-balance">
            Choose the Right Model for Your Goals
          </h2>
          <p className="text-lg font-medium leading-relaxed text-gray-600 max-w-3xl mx-auto mt-4 tracking-tight">
            We offer three primary engagement models depending on your goals and
            project clarity.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {models.map((model) => (
            <div
              key={model.number}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                model.featured
                  ? "border-indigo-500 bg-card shadow-lg shadow-indigo-500/5"
                  : "border-border bg-card hover:border-indigo-300"
              }`}
            >
              {model.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white uppercase tracking-wider">
                    Most Flexible
                  </span>
                </div>
              )}

              <div className="mb-6">
                <span
                  className={`font-heading text-5xl font-bold
                tracking-tight ${model.featured ? "text-indigo-600" : "text-gray-600"}`}
                >
                  {model.number}
                </span>
                <h3 className="mt-2 text-2xl font-bold mb-2 tracking-tight text-gray-800">
                  {model.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed tracking-tight font-normal">
                  {model.subtitle}
                </p>
              </div>

              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-tight text-gray-500">
                  Ideal For
                </p>
                <ul className="space-y-2.5">
                  {model.idealFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-gray-700 leading-relaxed tracking-tight font-medium"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-tight text-gray-500">
                  Benefits
                </p>
                <ul className="space-y-2.5">
                  {model.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-gray-700 leading-relaxed tracking-tight font-medium"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-8 text-xs text-gray-600 italic leading-relaxed tracking-tight">
                {model.note}
              </p>

              <div className="mt-auto">
                <Link
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-base font-medium transition-colors ${model.featured ? "bg-indigo-600 text-white hover:bg-indigo-700" : "border border-indigo-600 text-indigo-600 hover:bg-indigo-50"}`}
                  href="#cta"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
