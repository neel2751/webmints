import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AnimatedGroup } from "@/components/animation/animation-group";

export default function HomeHero() {
  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  };

  const transitionDescriptionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
          delay: 0.2,
        },
      },
    },
  };
  const transitionButtonVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
          delay: 0.4,
        },
      },
    },
  };
  const transitionImageVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.3,
          duration: 1.5,
          delay: 0.6,
        },
      },
    },
  };

  return (
    <section className="bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px] bg-center bg-no-repeat font-grotesk">
      <div className="container pt-12 md:pt-24 mx-auto">
        <div className="flex flex-col items-center gap-5">
          {/* <ShinyText
            text="
              Custom SaaS Solutions
            "
            className="bg-indigo-600 border border-indigo-700 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-colors"
          /> */}
          <AnimatedGroup variants={transitionVariants}>
            <h1 className="max-w-[25rem] bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text py-2 sm:px-0 text-center text-3xl leading-tight font-bold tracking-tight text-transparent md:max-w-[43.75rem] md:text-6xl lg:max-w-[56.25rem] lg:text-[3.3rem]">
              Custom{" "}
              <span className="underline inline-block transition-transform duration-300 hover:scale-105 text-indigo-600 cursor-pointer">
                SaaS
              </span>{" "}
              & Business Automation Solutions Built for Growth
            </h1>
          </AnimatedGroup>
          <AnimatedGroup
            variants={transitionDescriptionVariants}
            className="flex flex-col items-center gap-4"
          >
            <p className="max-w-[25rem] md:max-w-[50rem] text-center text-base lg:text-xl text-black/65 font-medium sm:px-0 px-3">
              {/* We provide fully customizable SaaS platforms to scale your business
            with flexibility and efficiency. Our solutions are tailored to meet
            your specific needs, ensuring seamless integration and maximum ROI. */}
              At WebMints, we design and develop custom SaaS solutions and
              business automation software tailored to your unique workflows.
              Whether you’re a startup or an enterprise, we help you streamline
              operations, improve efficiency, and scale faster with technology
              built specifically for your needs.
            </p>
          </AnimatedGroup>
          <AnimatedGroup
            variants={transitionButtonVariants}
            className="flex flex-col items-center"
          >
            <div className="pt-6 flex gap-4">
              <Button
                className="bg-indigo-600 text-white text-base font-semibold h-10 hover:bg-indigo-700 group"
                asChild
              >
                <Link href={"/schedule-call"}>
                  <PhoneCall className="group-hover:animate-pulse" />
                  Schedule a Free Consultation
                </Link>
              </Button>
              {/* <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 text-base font-semibold h-10 hover:bg-indigo-600 hover:text-white"
            >
              Learn More
              <ArrowRight />
            </Button> */}
            </div>
          </AnimatedGroup>
        </div>
        <AnimatedGroup variants={transitionImageVariants} className="w-full">
          <div className="relative mx-auto w-full max-w-[72rem] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-20 after:block after:h-[45%] after:w-full after:bg-gradient-to-t after:from-white after:to-transparent after:content-[''] sm:px-0 px-2">
            <div className="mt-14 flex w-full flex-col items-center gap-5 rounded-2xl border border-indigo-200 bg-indigo-100 p-3">
              <p className="text-center text-xs font-medium text-foreground sm:text-sm md:text-lg">
                See how easy it is to launch your custom SaaS solution in just{" "}
                <span className="underline text-indigo-600">5 minutes</span>.
              </p>
              <div className="relative w-full rounded-xl border border-indigo-200 bg-indigo-50">
                <div className="overflow-hidden">
                  <Image
                    src="/images/home/hero.webp"
                    alt="Custom SaaS Dashboard Preview"
                    width={1440}
                    height={900}
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="w-full h-auto object-cover object-left-top rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}

function FeatureHero() {
  <section className="container relative pt-12 px-4 sm:px-6 lg:px-8 mx-auto font-grotesk">
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="flex flex-col justify-center items-start xl:pe-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-tight tracking-tight">
            Powerful Capabilities Behind Scalable SaaS Solutions
          </h1>
          <p className="mt-6 md:text-lg text-gray-600 dark:text-neutral-400">
            At WebMints, we build modern SaaS platforms and automation systems
            using a robust, scalable, and secure architecture. Our featured and
            capabilities are designed to suport complex workflows, seamless
            integrations, and long-term business growth.
          </p>
        </div>

        <div className="grid gap-3 w-full sm:inline-flex">
          <a
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none"
            href="./docs/index.html"
          >
            Get started
          </a>

          <a
            className="sm:hidden py-3 px-4 inline-flex justify-center items-center gap-x-2 font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            href="./pro/index.html"
          >
            Check out Preline Pro
          </a>

          <input type="hidden" id="heroNpmCode" value="npm install preline" />
        </div>
      </div>

      <div
        className="w-full h-80 sm:h-120 lg:h-[35rem] overflow-hidden border rounded-xl"
        style={{ perspective: "700px" }}
      >
        <div
          className="grid grid-cols-3 gap-12 w-[60rem] sm:w-[80rem] lg:w-[50rem] h-[55rem] md:h-[90rem] lg:h-[75rem] origin-[50%_0%] overflow-hidden"
          style={{
            transform:
              "translate3d(7%, -2%, 0px) scale3d(0.9, 0.8, 1) rotateX(15deg) rotateY(-9deg) rotateZ(32deg)",
          }}
        >
          <div className="grid gap-9 w-full h-110 animation-sliding-img-up-1">
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-6.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-6.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-13.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-13.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-9.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-9.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-16.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-16.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-6.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-6.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-13.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-13.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-9.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-9.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-16.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-16.webp"
              alt=""
            />
          </div>

          <div className="grid gap-9 w-full h-110 animation-sliding-img-down-1">
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-10.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-10.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-7.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-7.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-11.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-11.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-14.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-14.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-12.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-12.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-5.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-5.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-10.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-10.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-7.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-7.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-11.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-11.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-14.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-14.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-12.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-12.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-5.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-5.webp"
              alt=""
            />
          </div>

          <div className="grid gap-9 w-full h-110 animation-sliding-img-up-2">
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-1.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-1.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-4.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-4.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-8.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-8.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-15.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-15.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-2.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-2.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-1.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-1.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-4.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-4.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-8.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-8.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-15.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-15.webp"
              alt=""
            />
            <img
              className="w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:hidden"
              src="https://preline.co/assets/thumbnails/hero/card-2.webp"
              alt=""
            />
            <img
              className="hidden w-full object-cover shadow-lg rounded-lg dark:shadow-neutral-900/80 dark:block"
              src="https://preline.co/assets/thumbnails/hero-dark/card-2.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>;
}
