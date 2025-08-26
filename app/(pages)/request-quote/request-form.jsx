import { ArrowRight, Atom, Box, GitGraph } from "lucide-react";
import Link from "next/link";
import RequestCustomQuote from "../pricing/request-custom-quote";

export default function RequestCustomQuoteForm() {
  return (
    <div>
      <section className="py-32">
        <div className="container mx-auto">
          <div className="mx-auto grid max-w-7xl gap-y-6 lg:grid-cols-2">
            <div className="rounded-md border p-6 md:p-10 lg:rounded-l-md lg:rounded-r-none lg:border-y lg:border-r-0 lg:border-l bg-black text-white">
              <h2 className="mb-6 text-3xl font-semibold md:text-4xl font-grotesk">
                Make your organization truly customer-centric
              </h2>
              <p className="mb-6 text-lg text-white/70">
                Connect with a Webmints expert on an initial call to discuss how
                Webmints Organization can help:
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  href="/features"
                  className="flex items-center gap-2 text-lg font-medium font-grotesk"
                >
                  Browse features
                  <ArrowRight className="h-auto w-4" />
                </Link>
                <a
                  href="#"
                  className="flex items-center gap-2 text-lg font-medium font-grotesk"
                >
                  Check out Solution
                  <ArrowRight className="h-auto w-4" />
                </a>
              </div>
              <div className="mt-10">
                <div className="flex items-center gap-7 py-6">
                  <Box className="h-auto w-8 shrink-0" />
                  <p className="font-grotesk">
                    Scale user research across product teams
                  </p>
                </div>
                <div className="flex items-center gap-7 border-y border-dashed border-white/40 py-6">
                  <GitGraph className="h-auto w-8 shrink-0" />
                  <p className="font-grotesk">
                    Expand your feature set without losing focus on core
                    objectives and timelines.
                  </p>
                </div>
                <div className="flex items-center gap-7 py-6">
                  <Atom className="h-auto w-8 shrink-0" />
                  <p className="font-grotesk">
                    Enhance user engagement and reduce churn with optimized
                    solutions and workflows.
                  </p>
                </div>
              </div>
            </div>
            <div className=" rounded-md border text-primary lg:rounded-l-none lg:rounded-r-md">
              <RequestCustomQuote />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
