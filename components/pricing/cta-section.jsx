import { SITE_URL } from "@/lib/site";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section id="cta" className="py-20 md:py-28 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-600/20 bg-card p-10 md:p-16">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-3xl" />

          <div className="relative text-center">
            <p className="text-base font-medium uppercase tracking-wider text-indigo-600">
              Let{"'"}s Build Together
            </p>
            <h2 className="font-bold mt-3 text-3xl sm:text-4xl md:text-5xl text-balance tracking-tighter text-black/85">
              Ready to Scale Your Business <br className="hidden md:block" />
              with Custom SaaS?
            </h2>
            <p className="text-md mt-5 max-w-2xl mx-auto font-medium tracking-tight leading-snug text-gray-600">
              Planning a new SaaS platform or upgrading an existing system? Let
              {"'"}s discuss your goals and recommend the right engagement model
              for your business.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-white text-base font-medium tracking-tight transition-colors duration-300 hover:bg-indigo-700"
                href={SITE_URL}
              >
                Request a Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-md border border-indigo-600 px-4 py-2 text-indigo-600 text-base font-medium tracking-tight transition-colors duration-300 hover:bg-indigo-50"
                href={SITE_URL}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Free Consultation
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base text-gray-600 tracking-tight font-medium">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Expert Guidance
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Customized Solutions
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600" />
                Free Consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
