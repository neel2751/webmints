import { ArrowRight, Layers, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pb-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-200/5 blur-3xl" />
      </div>

      <div className="relative mx-auto container px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-indigo-50 px-4 py-1.5 text-sm text-black/80 mb-8 font-medium tracking-wide">
          <Layers className="h-4 w-4 text-indigo-600" />
          <span>Flexible Engagement Models</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tighter text-black/85 sm:text-4xl md:text-5xl lg:text-6xl text-balance">
          Engagement Models for Custom SaaS & Tailored Solutions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-black/70 leading-relaxed md:text-xl font-medium tracking-tight">
          Every SaaS platform we build is tailored to your specific workflows,
          integration needs, and scalability goals. Choose the engagement model
          that fits your business.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white text-base font-medium tracking-tight transition-colors duration-300 hover:bg-indigo-700"
            href="#cta"
          >
            Request a Custom Quote
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            href="#engagement-models"
            className="inline-flex items-center gap-2 rounded-md border border-indigo-600 px-4 py-2 text-indigo-600 text-base font-medium tracking-tight transition-colors duration-300 hover:bg-indigo-50"
          >
            Explore Models
          </Link>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-1 gap-px rounded-2xl border border-indigo-200 bg-indigo-200 sm:grid-cols-3">
          {[
            {
              icon: Settings,
              label: "Scope & Complexity",
              description: "Tailored to your needs",
            },
            {
              icon: Zap,
              label: "Agile Execution",
              description: "Flexible development",
            },
            {
              icon: Layers,
              label: "Scalable Architecture",
              description: "Built for growth",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 bg-white px-6 py-5 first:rounded-t-2xl last:rounded-b-2xl sm:first:rounded-l-2xl sm:first:rounded-tr-none sm:last:rounded-r-2xl sm:last:rounded-bl-none"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600/10">
                <item.icon className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold tracking-tight text-gray-700">
                  {item.label}
                </h3>
                <p className="text-sm font-medium tracking-tight leading-snug text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
