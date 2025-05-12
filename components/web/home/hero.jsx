import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function HomeHero() {
  return (
    <section className="border-muted2 border-b bg-[url(https://librar.shadcnblocks.com/images/block/patterns/grid-1.svg)] bg-[length:100%_100%] bg-center bg-no-repeat font-sans">
      <div className="container pt-12 md:pt-24 mx-auto">
        <div className="flex flex-col items-center gap-5">
          <h1 className="max-w-[25rem] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text py-2 text-center text-4xl leading-tight font-semibold tracking-tight text-transparent md:max-w-[43.75rem] md:text-6xl lg:max-w-[56.25rem] lg:text-[4rem]">
            Custom{" "}
            <span className="text-indigo-600 underline hover:tracking-wide transition-all duration-500 ease-in-out cursor-pointer">
              SaaS
            </span>{" "}
            Solutions for Business Growth
          </h1>
          <p className="max-w-[25rem] md:max-w-[43.75rem] text-center text-base text-primary/70 lg:text-lg">
            We provide fully customizable SaaS platforms to scale your business
            with flexibility and efficiency. Our solutions are tailored to meet
            your specific needs, ensuring seamless integration and maximum ROI.
          </p>
          <div className="pt-6 flex gap-4">
            <Button className="bg-indigo-600 text-white text-base font-semibold h-10">
              <PhoneCall />
              Book a Free Call
            </Button>
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 text-base font-semibold h-10 hover:bg-indigo-600 hover:text-white"
            >
              Learn More
              <ArrowRight />
            </Button>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[72rem] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-20 after:block after:h-[45%] after:w-full after:bg-gradient-to-t after:from-white after:to-transparent after:content-['']">
          <div className="mt-14 flex w-full flex-col items-center gap-5 rounded-2xl border border-indigo-200 bg-indigo-100 p-3">
            <p className="text-center text-xs font-medium text-foreground sm:text-sm md:text-lg">
              Watch how we build an autonomous AI agent in only{" "}
              <span className="underline text-indigo-600">5 minutes</span>.
            </p>
            <div className="relative w-full rounded-xl border border-indigo-200 bg-indigo-50">
              <div>
                <div className="overflow-hidden">
                  <div>
                    <Image
                      src="https://oxbowui.com/images/dashboardLight.svg"
                      alt="Hero Image"
                      className="w-full h-full object-cover object-left-top rounded-xl"
                      height={600}
                      width={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
