import { ArrowRight, Zap, CalendarClock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const models = [
  {
    icon: Zap,
    title: "On-Demand Support",
    subtitle: "For occasional fixes and improvements.",
    description:
      "Pay-as-you-go model for businesses that need periodic technical assistance, bug fixes, or minor enhancements without a recurring commitment.",
    features: [
      "Ad-hoc issue resolution",
      "Flexible engagement",
      "No long-term commitment",
      "Priority-based scheduling",
    ],
  },
  {
    icon: CalendarClock,
    title: "Monthly Maintenance Retainer",
    subtitle: "For continuous monitoring and updates.",
    description:
      "A dedicated monthly allocation of hours for proactive maintenance, monitoring, performance tuning, and regular updates to keep your platform healthy.",
    features: [
      "Proactive monitoring",
      "Regular security patches",
      "Performance optimization",
      "Monthly reports & reviews",
    ],
    featured: true,
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    subtitle: "For enterprise platforms requiring ongoing development.",
    description:
      "A fully embedded team focused on your platform, providing continuous development, optimization, and support aligned with your product roadmap.",
    features: [
      "Dedicated technical resources",
      "Ongoing development & optimization",
      "Strategic roadmap alignment",
      "Extended coverage options",
    ],
  },
];

export function SupportModels() {
  return (
    <section id="support-models" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
              Flexible Plans
            </p>
            <h2 className="mt-3 text-3xl font-bold text-black/85 sm:text-5xl tracking-tight text-balance">
              Support Models We Offer
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="max-w-xl text-black/65 font-medium text-base tracking-tight leading-relaxed">
              We provide flexible support models based on your needs -- from
              occasional fixes to fully dedicated engineering teams.
            </p>
          </div>
        </div>

        {/* Horizontal stacked layout instead of 3-col cards */}
        <div className="space-y-4">
          {models.map((model) => (
            <div
              key={model.title}
              className={`group relative grid grid-cols-1 gap-8 rounded-2xl border p-8 transition-all md:grid-cols-12 md:items-center md:p-10 ${
                model.featured
                  ? "border-indigo-600/30 bg-indigo-600/[0.03]"
                  : "border-border bg-card hover:border-indigo-600/20"
              }`}
            >
              {model.featured && (
                <div className="absolute -top-3 right-8">
                  <span
                    className="rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold
                  text-white uppercase tracking-wide"
                  >
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon + title */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                      model.featured ? "bg-indigo-600/15" : "bg-indigo-600/10"
                    }`}
                  >
                    <model.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className=" text-lg font-bold text-black/85 tracking-tight">
                      {model.title}
                    </h3>
                    <p className="text-sm font-medium text-black/65 tracking-tight leading-relaxed">
                      {model.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-4">
                <p className="text-sm text-black/65 font-medium leading-relaxed">
                  {model.description}
                </p>
              </div>

              {/* Features */}
              <div className="md:col-span-3">
                <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-1">
                  {model.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-black/65 font-medium"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="md:col-span-2 md:flex md:justify-end">
                <Button
                  variant={model.featured ? "default" : "outline"}
                  asChild
                  className={`mt-6 md:mt-0 ${model.featured ? "bg-indigo-600 text-white border-indigo-600/30 hover:bg-indigo-700" : "border-border hover:border-indigo-600/30 hover:bg-indigo-600/5"}  transition-colors`}
                >
                  <Link href="#cta">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
