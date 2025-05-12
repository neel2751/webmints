import { Calendar, Trophy } from "lucide-react";
import React from "react";

export default function WhatWeOffer() {
  return (
    <>
      <section className="py-32 bg-indigo-700">
        <div className="container mx-auto">
          <div className="grid place-content-center gap-10 lg:grid-cols-2">
            <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center gap-4 lg:items-start text-white">
              <span
                data-slot="badge"
                className="justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 [&amp;>svg]:size-3 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground flex items-center gap-1 px-2.5 py-1.5 text-sm bg-white"
              >
                <Trophy className="w-4" />
                We Offer
              </span>
              <h2 className="text-center text-2xl font-semibold lg:text-left lg:text-3xl">
                Solutions Designed for Your Success
              </h2>
              <p className="text-center text-white/80 lg:text-left lg:text-lg">
                We provide a uniquely customizable SaaS platform that adapts to
                your exact business needs. Our modular design and flexible
                architecture empower you to build the perfect solution,
                unlocking efficiency, driving growth, and providing a
                significant return on your investment. Discover the tangible
                benefits of a platform built around you.
              </p>
              <div className="mt-9 flex w-full flex-col justify-center gap-6 md:flex-row lg:justify-start">
                <div className="flex justify-between gap-6">
                  <div className="mx-auto">
                    <p className="mb-1.5 text-3xl font-bold">98%</p>
                    <p className="text-white/80">Customization Capabilities</p>
                  </div>
                  <div
                    data-orientation="vertical"
                    role="none"
                    data-slot="separator-root"
                    className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px h-auto"
                  ></div>
                  <div className="mx-auto">
                    <p className="mb-1.5 text-3xl font-bold">100%</p>
                    <p className="text-white/80">Scalability & Growth</p>
                  </div>
                </div>
                <div
                  data-orientation="vertical"
                  role="none"
                  data-slot="separator-root"
                  className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px hidden h-auto md:block"
                ></div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  data-slot="separator-root"
                  className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px block md:hidden"
                ></div>
                <div className="flex justify-between gap-6">
                  <div className="mx-auto">
                    <p className="mb-1.5 text-3xl font-bold">96%</p>
                    <p className="text-white/80">Customer Success & Support</p>
                  </div>
                  <div
                    data-orientation="vertical"
                    role="none"
                    data-slot="separator-root"
                    className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px h-auto"
                  ></div>
                  <div className="mx-auto">
                    <p className="mb-1.5 text-3xl font-bold">99%</p>
                    <p className="text-white/80">Security & Reliability</p>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="/Frame.svg"
              alt="placeholder"
              className="ml-auto max-h-[450px] w-full rounded-xl object-cover"
            />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3 text-white">
            <div className="flex flex-col gap-4">
              <div className="gap flex flex-col gap-3 rounded-lg border p-6">
                <div className="flex flex-col items-center gap-2 lg:flex-row">
                  <Calendar className="w-6" />
                  <h3 className="text-center text-lg font-medium lg:text-left">
                    Why Select Us?
                  </h3>
                </div>
                <p className="text-center text-sm text-white/80 md:text-base lg:text-left">
                  We provide a full set of management tools, including ways to
                  collaborate easily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
