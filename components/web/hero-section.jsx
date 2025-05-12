import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "../animation/shimmer-button";
import { ArrowRight, PhoneCall } from "lucide-react";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 py-16 md:py-24">
      <div className="flex flex-col justify-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight lg:text-6xl text-[#1d1d1f] text-pretty lg:leading-[1.2] ">
          Building your{" "}
          <span className="text-indigo-600 underline hover:tracking-wider transition-all duration-500 ease-in-out cursor-pointer">
            SAAS
          </span>{" "}
          just got unfairly easy
        </h1>
        <p className="text-lg text-muted-foreground">
          Work smarter, automate for efficiency and unlock multiple revenue
          streams on the software and hardware trusted by millions of businesses
          around the world to help them thrive.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <ShimmerButton className="shadow-2xl bg-indigo-700">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-sm ">
              Book a Call
            </span>
          </ShimmerButton>
          {/* <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto hover:bg-indigo-700 hover:text-indigo-50 hover:border-none"
          >
            Contact sales
          </Button> */}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-muted rounded-md aspect-square">
          <Image
            src="https://notioly.com/wp-content/uploads/2025/01/494.A-Break-In-Good-Company.png"
            alt="test"
            height={200}
            width={200}
            className="h-full w-full object-cover border bg-muted rounded-md"
          />
        </div>
        <div className="bg-muted rounded-md row-span-2">
          <Image
            src="https://notioly.com/wp-content/uploads/2025/01/500.Snow_.png"
            alt="test"
            height={200}
            width={200}
            className="h-full w-full object-cover border rounded-md"
          />
        </div>
        <div className="bg-muted rounded-md aspect-square">
          <Image
            src="https://notioly.com/wp-content/uploads/2025/01/501.Playing-Chess.png"
            alt="test"
            height={200}
            width={200}
            className="h-full w-full object-cover border rounded-md"
          />
        </div>
      </div>
      {/* <div className="relative hidden lg:block">
        <Image
          src="/placeholder.svg?height=600&width=600"
          alt="Business solutions"
          width={600}
          height={600}
          className="object-cover rounded-lg"
          priority
        />
      </div> */}
    </section>
  );
}

export function HeroSectionNew() {
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
                    <img
                      src="https://oxbowui.com/images/dashboardLight.svg"
                      alt=""
                      className="w-full h-full object-cover object-left-top rounded-xl"
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
