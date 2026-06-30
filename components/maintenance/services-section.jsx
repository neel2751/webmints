"use client";

import { useState } from "react";
import {
  Check,
  Headphones,
  Gauge,
  ShieldCheck,
  Sparkles,
  Cloud,
} from "lucide-react";

const services = [
  {
    id: "technical",
    icon: Headphones,
    title: "Technical Support",
    description:
      "End-to-end technical assistance to keep your platform running without interruption.",
    items: [
      "Issue monitoring and resolution",
      "Bug tracking and fixes",
      "Error handling and troubleshooting",
      "System health monitoring",
    ],
  },
  {
    id: "performance",
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Systematic tuning to maintain blazing-fast performance as your user base grows.",
    items: [
      "Database optimization",
      "Code refinement",
      "Infrastructure scaling",
      "Load performance improvements",
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Rigorous security practices to protect your data and meet compliance standards.",
    items: [
      "Security patching",
      "Access control updates",
      "Data protection enhancements",
      "Cloud security monitoring",
    ],
  },
  {
    id: "features",
    icon: Sparkles,
    title: "Feature Enhancements",
    description:
      "Continuous evolution of your platform with new capabilities and workflow improvements.",
    items: [
      "New feature implementation",
      "Workflow updates",
      "Automation improvements",
      "Integration expansions",
    ],
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Full cloud lifecycle management from monitoring to disaster recovery.",
    items: [
      "Server monitoring",
      "Backup management",
      "Deployment support",
      "Version upgrades",
    ],
  },
];

export function ServicesSection() {
  const [activeId, setActiveId] = useState("technical");
  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
            What We Cover
          </p>
          <h2 className=" mt-3 text-4xl font-bold  sm:text-5xl text-balance tracking-tight text-black/85">
            Our Maintenance & Support Services
          </h2>
          <p className="mx-auto mt-4 text-base max-w-2xl font-medium tracking-tight text-black/70 leading-relaxed">
            Comprehensive support across every layer of your SaaS platform.
          </p>
        </div>

        {/* Tabbed interface instead of card grid */}
        <div className="mt-16">
          {/* Tab buttons - scrollable on mobile */}
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-base tracking-tight font-medium transition-all ${
                  activeId === service.id
                    ? "bg-indigo-600 text-white border-indigo-600/30 font-semibold"
                    : "border border-border text-black/65 hover:text-foreground hover:border-indigo-600/30"
                }`}
              >
                <service.icon className="h-4 w-4" />
                {service.title}
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div className="mt-8 grid grid-cols-1 gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/10">
                <activeService.icon className="h-7 w-7 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-2xl font-bold tracking-tight text-black/85">
                {activeService.title}
              </h3>
              <p className="mt-3 text-base tracking-tight text-black/65 font-medium leading-relaxed">
                {activeService.description}
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <ul className="space-y-4">
                {activeService.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo-600/10">
                      <Check className="h-3.5 w-3.5 text-indigo-600" />
                    </div>
                    <span className="text-base tracking-tight font-medium text-black/65">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
