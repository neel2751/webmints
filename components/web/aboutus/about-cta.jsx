import { Button } from "@/components/ui/button";
import React from "react";

export default function AboutCta() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-20 overflow-hidden rounded-2xl border shadow-lg bg-[radial-gradient(ellipse_30%_60%_at_100%_80%,var(--color-indigo-200),transparent)] pt-20 sm:pl-16 lg:flex-row lg:bg-[radial-gradient(ellipse_50%_80%_at_40%_120%,var(--color-indigo-200),transparent)] lg:pl-20">
          <div className="lg:texlf mx-auto max-w-md px-4 text-center md:px-0 lg:mx-0 lg:pb-20 lg:text-left">
            <p className="mb-6 font-medium text-indigo-600 tracking-tight">
              Ready to get started?
            </p>
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Start your free trial today.
            </h2>
            <p className="text-lg text-muted-foreground">
              Start with a 14-day free trial. No credit card required. No setup
              fees. Cancel anytime.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button className="bg-indigo-600 hover:bg-indigo-800">
                Requesting a Demo
              </Button>
              <Button
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-800 hover:text-white"
              >
                Meet the Team
              </Button>
            </div>
          </div>
          <div className="relative w-full pl-4 sm:pl-0">
            <div className="absolute -bottom-8 -left-8 -z-10 h-4/5 w-4/5 rounded-tl-2xl rounded-br-2xl bg-indigo-900/20 blur-2xl"></div>
            <img
              src="https://library.shadcnblocks.com/images/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg"
              alt="placeholder"
              className="relative z-10 h-full max-h-[400px] w-full rounded-tl-2xl rounded-br-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
