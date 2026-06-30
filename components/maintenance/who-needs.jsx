import { Rocket, Cog, Building2, RefreshCw } from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "SaaS Startups Scaling Rapidly",
    description:
      "Fast-growing platforms that need reliable infrastructure, uptime guarantees, and performance monitoring as user bases expand.",
    color: "bg-indigo-600/10 text-indigo-600",
  },
  {
    icon: Cog,
    title: "Businesses Running Automation Platforms",
    description:
      "Complex automation systems requiring continuous integration monitoring, workflow updates, and third-party API management.",
    color: "bg-indigo-600/10 text-indigo-600",
  },
  {
    icon: Building2,
    title: "Enterprises Managing Complex Systems",
    description:
      "Large-scale enterprise platforms with multi-tenant architectures, compliance requirements, and high-availability needs.",
    color: "bg-indigo-600/10 text-indigo-600",
  },
  {
    icon: RefreshCw,
    title: "Companies Modernizing Legacy Software",
    description:
      "Organizations transitioning from legacy systems that need ongoing support during and after modernization projects.",
    color: "bg-indigo-600/10 text-indigo-600",
  },
];

export function WhoNeeds() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Bento-style layout: large left card + stacked right cards */}
        <div className={`grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-4`}>
          {/* Header block */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10 lg:col-span-5 lg:row-span-2 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
                Who Benefits
              </p>
              <h2 className=" mt-3 text-3xl font-bold text-black/85 tracking-tight sm:text-4xl">
                Who Needs Ongoing SaaS Maintenance?
              </h2>
              <p className="mt-4 text-black/65 font-medium tracking-tight leading-relaxed">
                Our maintenance services are ideal for businesses at every stage
                of their SaaS journey.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-xl border border-indigo-600/20 bg-indigo-600/5 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600/10">
                <Rocket className="h-5 w-5 text-indigo-600" />
              </div>
              <p className="text-sm text-black/65 font-medium tracking-tight leading-relaxed">
                <span className="font-semibold text-black/85">
                  From startups to enterprises
                </span>{" "}
                -- we scale our support to match your stage.
              </p>
            </div>
          </div>

          {/* Audience cards - stacked on right */}
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className={`group rounded-2xl border border-border bg-card p-6 transition-all hover:border-indigo-600/20 lg:col-span-7 lg:row-span-1
                `}
            >
              <div className="flex gap-4">
                <div
                  className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${audience.color}`}
                >
                  <audience.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-black/85 tracking-tight">
                    {audience.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/65 font-medium tracking-tight leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
