"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function MaintenanceHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-0 md:pt-40 md:pb-0">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-indigo-600/[0.07] blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-indigo-600/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text content */}
          <div className="pb-16 md:pb-24">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-600/20 bg-indigo-600/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-indigo-600 mb-8">
              Maintenance & Support
            </div>

            <h1 className="font-heading text-4xl font-bold tracking-tight text-black/85 sm:text-5xl lg:text-6xl">
              Your SaaS platform
              <br />
              <span className="text-indigo-600">never sleeps.</span>
              <br />
              Neither do we.
            </h1>

            <p className="mt-6 max-w-lg text-lg text-black/65 font-medium tracking-tight leading-relaxed">
              Building a SaaS solution is only the beginning. Long-term
              performance, security, and scalability depend on continuous
              monitoring, updates, and improvements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                className="
inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition-colors group
hover:shadow-indigo-600/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
"
                href="#cta"
              >
                Request Consultation
                <ArrowRight
                  className="ml-2 h-4 w-4
                group-hover:translate-x-1 transition-transform
                "
                />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-600 px-5 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors"
              >
                See What We Cover
              </Link>
            </div>
          </div>

          {/* Right: Stats bento */}
          <div className="grid grid-cols-2 gap-3 pb-16 md:pb-24">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-4xl font-bold text-indigo-600">24/7</p>
              <p className="mt-2 text-base text-black/60 font-medium tracking-tight leading-relaxed">
                System Monitoring
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="text-4xl font-bold text-indigo-600">99.9%</p>
              <p className="mt-2 text-base text-black/60 font-medium tracking-tight leading-relaxed">
                Uptime Target
              </p>
            </div>
            <div className="col-span-2 rounded-2xl border border-indigo-600/20 bg-indigo-600/5 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg tracking-tight font-medium text-indigo-600">
                    Proactive, Not Reactive
                  </p>
                  <p className="mt-1 text-sm text-black/60 font-medium tracking-tight leading-relaxed">
                    We identify and resolve issues before they become problems
                  </p>
                </div>
                <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-indigo-600/20 bg-indigo-600/10">
                  <ArrowRight className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width divider line */}
      <div className="h-px w-full bg-border" />
    </section>
  );
}
