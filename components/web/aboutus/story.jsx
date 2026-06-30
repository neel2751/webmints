import Image from "next/image";
import React from "react";

export default function Story() {
  return (
    <section className="py-32 font-grotesk">
      <section className="relative container max-w-5xl py-10 md:py-12 lg:py-15 mx-auto">
        <div className="">
          <h1 className="font-bold text-black/85 mb-2 text-6xl tracking-tighter">
            We are different
            <br />
            from the agency
          </h1>
          <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mt-4">
            Beyond Bespoke Services: The Power of Customizable SaaS
          </p>
        </div>
        <div className="absolute inset-0 z-[-1] -translate-y-1/2 blur-[100px] will-change-transform">
          <div className="bg-gradient-1/25 absolute top-0 right-0 h-[400px] w-[800px] -translate-x-1/5 rounded-full"></div>
          <div className="bg-gradient-2/10 absolute top-0 right-0 size-[400px] rounded-full"></div>
        </div>
        <div className="absolute -inset-40 z-[-1] [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_80%)]">
          <svg
            width="32"
            height="32"
            className="h-full w-full text-foreground/[0.05]"
          >
            <defs>
              <pattern
                id="plus-pattern-:S1:"
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="8"
                  y1="5"
                  x2="8"
                  y2="11"
                  stroke="currentColor"
                  strokeWidth="1"
                ></line>
                <line
                  x1="5"
                  y1="8"
                  x2="11"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1"
                ></line>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#plus-pattern-:S1:)"
            ></rect>
          </svg>
        </div>
      </section>
      <section className="container max-w-5xl border-y py-5 mx-auto">
        <h2 className="font-bold text-black/85 mb-2 text-xl tracking-tighter">
          By the numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="font-bold text-indigo-600 mb-2 text-6xl tracking-tighter">
              18+
            </h3>
            <p className="text-base font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mt-4">
              Projects Delivered
            </p>
          </div>
          <div>
            <h3 className="font-bold text-indigo-600 mb-2 text-6xl tracking-tighter">
              98%
            </h3>
            <p className="text-base font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mt-4">
              Client Retention Rate
            </p>
          </div>
          <div>
            <h3 className="font-bold text-indigo-600 mb-2 text-6xl tracking-tighter">
              6+
            </h3>
            <p className="text-base font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mt-4">
              Core Industries Served
            </p>
          </div>
          <div>
            <h3 className="font-bold text-indigo-600 mb-2 text-6xl tracking-tighter">
              10x
            </h3>
            <p className="text-base font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mt-4">
              Faster Time to Launch
            </p>
          </div>
        </div>
      </section>
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15 mx-auto">
        <div className="grid-cols-2 grid">
          <div className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
            <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mt-4">
              Unlike an agency that typically delivers project-based services,
              we empower you with a customizable SaaS platform that becomes an
              integral part of your operational infrastructure. You're not just
              paying for our time; you're investing in a long-term solution that
              you can own and adapt as your business evolves. Our research and
              build process ensures this foundation is precisely aligned with
              your needs, offering sustained value and efficiency beyond a
              typical agency engagement
            </p>
            <h2 className="font-bold text-black/85 mb-2 text-2xl tracking-tighter">
              Building Your Foundation, Not Just Providing Hours
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mt-4">
              While agencies excel at providing tailored services, our approach
              is fundamentally different. We're not just offering our time and
              expertise; we've built a robust and adaptable SaaS platform that
              serves as the foundation for your unique solution. This means you
              benefit from the scalability, efficiency, and ongoing evolution of
              a software product, combined with the precise customization you
              need – a powerful synergy that traditional agencies often can't
              provide.
            </p>
          </div>
          <Image
            src={"/images/about/diff.svg"}
            alt="Illustration showing how WebMints differs from a traditional agency"
            height={400}
            width={400}
            className="object-contain h-full w-full"
          />
        </div>
      </section>
      <section className="container mx-auto grid grid-cols-2">
        <Image
          src={"/images/about/tech.svg"}
          alt="Beyond the tech box"
          height={400}
          width={400}
          className="h-full w-full object-cover p-4"
        />
        <div className="mr-0 ml-auto max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl">
            Our unique approach centers on uderstanding individual needs,
            building from the ground up to create truly tailored experiences.and
            We're forging our own path, to deliver solutions that go beyond
            standard tech offerings.
          </p>
          <h2 className="font-bold text-black/85 mb-2 text-2xl tracking-tighter">
            Beyond the Usual Tech Box: We're Building Something Different.
          </h2>
          <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl">
            Think of us differently. We combine the power of technology with a
            commitment to long-term partnerships to offer solutions that break
            the mold of typical tech companies.
          </p>
        </div>
      </section>
      <section className="container py-10 md:py-12 lg:py-15 mx-auto max-w-5xl">
        <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="order-2 md:order-1">
            <h2 className="font-bold text-black/85 mb-2 text-2xl tracking-tighter">
              The founding team
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mt-4">
              We started building WebMints in 2022. From the very beginning,
              every endpoint has been meticulously designed from the ground up,
              ensuring a clean and efficient architecture without the
              limitations of technical debt or legacy systems. As a 100% founder
              and team-owned company, we are deeply invested in our long-term
              success and are committed to delivering exceptional value.
            </p>
          </div>
          <Image
            src="/images/about/founding-team.png"
            alt="Illustration of the WebMints founding team collaborating"
            width={840}
            height={532}
            className="order-1 w-full h-auto rounded-lg object-cover md:order-2"
          />
        </div>
      </section>
    </section>
  );
}
