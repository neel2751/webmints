import {
  Activity,
  ShieldCheck,
  Bug,
  Server,
  Sparkles,
  RefreshCw,
} from "lucide-react";

const reasons = [
  {
    icon: Activity,
    title: "Performance Monitoring",
    description:
      "Continuous tracking of system health, response times, and resource utilization to prevent degradation.",
  },
  {
    icon: ShieldCheck,
    title: "Security Updates",
    description:
      "Regular patching and vulnerability assessments to keep your platform protected against emerging threats.",
  },
  {
    icon: Bug,
    title: "Bug Fixes",
    description:
      "Rapid identification and resolution of issues before they impact your users or business operations.",
  },
  {
    icon: Server,
    title: "Infrastructure Optimization",
    description:
      "Fine-tuning cloud resources, databases, and server configurations for optimal efficiency.",
  },
  {
    icon: Sparkles,
    title: "Feature Enhancements",
    description:
      "Continuous improvements and new capabilities to keep your platform competitive and aligned with user needs.",
  },
  {
    icon: RefreshCw,
    title: "Third-Party Integration Updates",
    description:
      "Keeping all API connections, plugins, and external services current and functioning smoothly.",
  },
];

export function WhyCritical() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Left-aligned header */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-1 sticky top-24 self-start">
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
              Why It Matters
            </p>
            <h2 className="mt-3 text-4xl font-bold text-black/85 sm:text-5xl tracking-tight">
              Why SaaS Maintenance Is Critical
            </h2>
            <p className="mt-4 text-black/65 font-medium tracking-tight leading-relaxed">
              Without proper maintenance, even well-built systems can experience
              downtime, vulnerabilities, or scalability issues.
            </p>
          </div>

          {/* Numbered timeline list instead of a card grid */}
          <div className="lg:col-span-2">
            <div className="space-y-0">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="group flex gap-6 border-b border-border py-6 first:pt-0 last:border-b-0 transition-colors hover:bg-card/50"
                >
                  <div className="flex flex-col items-center">
                    <span className="font-heading text-2xl font-bold text-indigo-600/50 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex items-start gap-4 flex-1">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600/10 transition-colors group-hover:bg-indigo-600/15">
                      <reason.icon className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-base text-black/60 font-medium tracking-tight leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
