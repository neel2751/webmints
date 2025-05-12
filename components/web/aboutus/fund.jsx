import React from "react";

export default function Fund() {
  return (
    <section className="py-32">
      <div className=" container mx-auto">
        <div className="grid gap-14 lg:grid-cols-4 xl:grid-cols-5">
          <div className="md:col-span-2 xl:col-span-3">
            <h2 className="mb-5 text-4xl font-medium">Why We Began</h2>
            <p className="text-lg">
              Our journey began with a simple yet powerful vision: to empower
              businesses with tailor-made software solutions that truly address
              their unique challenges. As a customizable SaaS provider, we go
              beyond off-the-shelf offerings. Our USP lies in our dedicated
              research and build process. We delve deep to understand your
              specific needs, enabling us to make informed decisions and craft a
              SaaS platform that perfectly aligns with your goals.
              <br />
              <br />
              We believed there was a better way – a way to provide businesses
              with the exact tools they need, without compromise.That's why we
              established ourselves as a customizable SaaS provider.
              <br />
              <br />
              What sets us apart is our commitment to research and collaborative
              development. We don't just build software; we partner with you,
              conducting thorough research and making strategic decisions to
              architect a SaaS solution that is precisely tailored to your
              requirements and drives your success.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background p-6">
                <span className="text-2xl md:text-4xl font-semibold text-indigo-600">
                  2024
                </span>
                <span className="text-sm text-muted-foreground md:text-lg">
                  Launched
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 rounded-xl border bg-background p-6">
                <span className="text-2xl md:text-4xl">6+</span>
                <span className="text-sm text-muted-foreground md:text-lg">
                  Enterprise Project
                </span>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 bg-white rounded-2xl p-4 h-full w-full">
            <img
              src="/images/about.avif"
              alt="placeholder"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
