import React from "react";

export default function Story() {
  return (
    <section className="py-32">
      <section className="relative container max-w-5xl py-10 md:py-12 lg:py-15 mx-auto">
        <div className="">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            We are different
            <br />
            from the agency
          </h1>
          <p className="mt-4 max-w-2xl text-2xl text-muted-foreground md:text-3xl">
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
        <h2 className="font-mono text-sm font-semibold tracking-widest text-accent-foreground">
          By the numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-indigo-600">
              $150M
            </h3>
            <p className="mt-1 font-medium text-muted-foreground">Raised</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-indigo-600">
              20K
            </h3>
            <p className="mt-1 font-medium text-muted-foreground">Companies</p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-indigo-600">
              1.3B
            </h3>
            <p className="mt-1 font-medium text-muted-foreground">
              Monthly transactions
            </p>
          </div>
          <div>
            <h3 className="text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl text-indigo-600">
              1.5K
            </h3>
            <p className="mt-1 font-medium text-muted-foreground">
              Connections per minute
            </p>
          </div>
        </div>
      </section>
      <section className="container max-w-5xl py-10 md:py-12 lg:py-15 mx-auto">
        <div className="max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            Unlike an agency that typically delivers project-based services, we
            empower you with a customizable SaaS platform that becomes an
            integral part of your operational infrastructure. You're not just
            paying for our time; you're investing in a long-term solution that
            you can own and adapt as your business evolves. Our research and
            build process ensures this foundation is precisely aligned with your
            needs, offering sustained value and efficiency beyond a typical
            agency engagement
          </p>
          <h2 className="text-xl font-medium tracking-tight md:text-2xl">
            Building Your Foundation, Not Just Providing Hours
          </h2>
          <p className="text-lg">
            While agencies excel at providing tailored services, our approach is
            fundamentally different. We're not just offering our time and
            expertise; we've built a robust and adaptable SaaS platform that
            serves as the foundation for your unique solution. This means you
            benefit from the scalability, efficiency, and ongoing evolution of a
            software product, combined with the precise customization you need –
            a powerful synergy that traditional agencies often can't provide.
          </p>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="mr-0 ml-auto max-w-2xl space-y-5 md:space-y-8 lg:space-y-10">
          <p className="text-lg">
            Our unique approach centers on uderstanding individual needs,
            building from the ground up to create truly tailored experiences.and
            We're forging our own path, to deliver solutions that go beyond
            standard tech offerings.
          </p>
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
            Beyond the Usual Tech Box: We're Building Something Different.
          </h2>
          <p className="text-lg">
            Think of us differently. We combine the power of technology with a
            commitment to long-term partnerships to offer solutions that break
            the mold of typical tech companies.
          </p>
        </div>
      </section>
      <section className="container py-10 md:py-12 lg:py-15 mx-auto">
        <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-semibold tracking-tight md:text-4xl">
              The founding team
            </h2>
            <p className="mt-5 text-lg md:mt-6">
              We started building Webmints between 2023 and 2024. From the very
              beginning in 2022. That's why every endpoint has been meticulously
              designed from the ground up, ensuring a clean and efficient
              architecture without the limitations of technical debt or legacy
              systems. As a 100% founder and team-owned company, we are deeply
              invested in our long-term success and are committed to delivering
              exceptional value.
            </p>
          </div>
          <img
            src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fpages%2Fcareers%2Fcareers-hero-illustration-v2.png&w=1080&q=75"
            alt="Founding team collaboration"
            width="480"
            height="400"
            className="order-1 object-cover md:order-2"
          />
        </div>
      </section>
    </section>
  );
}
