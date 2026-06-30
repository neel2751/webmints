import { ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MaintenanceCta() {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Full-width split CTA */}
        <div className="grid grid-cols-1 overflow-hidden rounded-3xl border border-indigo-600/20 lg:grid-cols-2">
          {/* Left: dark panel with headline */}
          <div className="relative bg-indigo-600/[0.06] p-10 md:p-14">
            <div className="pointer-events-none absolute -left-20 -top-20 h-[300px] w-[300px] rounded-full bg-indigo-600/[0.08] blur-[100px]" />
            <div className="relative">
              <p className="text-xs font-medium uppercase tracking-widest text-indigo-600">
                Get Started Today
              </p>
              <h2 className="mt-4 text-3xl font-bold text-black/85 tracking-tight sm:text-4xl">
                Keep Your SaaS Platform Running at{" "}
                <span className="text-indigo-600">Peak Performance</span>
              </h2>
              <p className="mt-5 text-base font-medium tracking-tight text-black/65 leading-relaxed">
                Whether you need ongoing monitoring, performance optimization,
                or long-term technical partnership, our team is ready to support
                your platform{"'"}s growth.
              </p>
            </div>
          </div>

          {/* Right: action panel */}
          <div className="flex flex-col items-start justify-center gap-6 border-t border-indigo-600/10 bg-card p-10 md:p-14 lg:border-l lg:border-t-0">
            <div className="space-y-3 w-full">
              <Link
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 transition-colors group
                  hover:shadow-indigo-600/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full justify-center
                 tracking-tight
                  "
                href="https://www.webmints.in"
              >
                Request Maintenance Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-lg border border-indigo-600 px-5 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-50 transition-colors w-full justify-center"
                href="https://www.webmints.in"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Talk to Our Support Team
              </Link>
            </div>

            <div className="w-full border-t border-border pt-6">
              <div className="flex flex-wrap gap-x-8 gap-y-3 text-base font-medium tracking-tight text-black/65">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Proactive Monitoring
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Fast Response Times
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Transparent Reporting
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                  Tailored Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
