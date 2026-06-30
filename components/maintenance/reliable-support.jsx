"use client";

import { useState } from "react";
import { Check, ChevronRight } from "lucide-react";

const qualities = [
  {
    id: "ticketing",
    title: "Structured Ticketing & Issue Tracking",
    description:
      "Every request is logged, prioritized, and tracked through a transparent system with full visibility for your team.",
  },
  {
    id: "communication",
    title: "Transparent Communication",
    description:
      "Regular status updates, detailed reporting, and open channels so you always know the state of your platform.",
  },
  {
    id: "response",
    title: "Fast Response Times",
    description:
      "SLA-backed response windows ensure critical issues are addressed immediately and resolved efficiently.",
  },
  {
    id: "scalable",
    title: "Scalable Support Resources",
    description:
      "As your platform grows, our support scales with you -- from a single engineer to a full dedicated team.",
  },
  {
    id: "partnership",
    title: "Long-Term Technical Partnership",
    description:
      "We invest in understanding your business deeply, becoming a strategic partner in your platform's evolution.",
  },
];

export function ReliableSupport() {
  const [activeId, setActiveId] = useState("ticketing");
  const activeQuality =
    qualities.find((q) => q.id === activeId) || qualities[0];

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
            Our Approach
          </p>
          <h2 className="mt-3 text-4xl font-bold text-black/85 sm:text-5xl text-balance tracking-tight">
            What Makes Our Support{" "}
            <span className="text-indigo-600">Reliable</span>
          </h2>
          <p className="mx-auto text-lg font-medium tracking-tight mt-4 max-w-2xl text-black/65 leading-relaxed">
            We focus on proactive maintenance, not reactive firefighting. Our
            structured approach ensures your SaaS platform remains stable,
            secure, and performant.
          </p>
        </div>

        {/* Interactive expandable list */}
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-3">
            {qualities.map((quality) => {
              const isActive = activeId === quality.id;
              return (
                <button
                  key={quality.id}
                  onClick={() => setActiveId(quality.id)}
                  className={`w-full text-left rounded-2xl border p-6 transition-all ${
                    isActive
                      ? "border-indigo-600/30 bg-indigo-600/[0.04]"
                      : "border-border bg-card hover:border-indigo-600/20"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                          isActive ? "bg-indigo-600/15" : "bg-indigo-600/10"
                        }`}
                      >
                        <Check className="h-4 w-4 text-indigo-600" />
                      </div>
                      <h3
                        className={`text-lg tracking-tight font-semibold transition-colors ${
                          isActive ? "text-black/85" : "text-black/65"
                        }`}
                      >
                        {quality.title}
                      </h3>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 text-black/65 tracking-tight transition-transform ${
                        isActive ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  {isActive && (
                    <div className="mt-4 pl-12">
                      <p className="text-base text-black/65 font-medium leading-relaxed">
                        {activeQuality.description}
                      </p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
