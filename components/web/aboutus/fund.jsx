import React from "react";
import Image from "next/image";

export default function Fund() {
  return (
    <section className="pt-32 font-grotesk">
      <div className=" container mx-auto">
        <div className="grid gap-14 lg:grid-cols-4 xl:grid-cols-5">
          <div className="md:col-span-2 xl:col-span-3">
            <h1 className="font-bold text-black/85 mb-2 text-6xl tracking-tighter">
              Why We Began
            </h1>
            <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mx-auto mt-4">
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
          </div>
          <div className="md:col-span-2 bg-white rounded-2xl p-4 h-full w-full">
            <Image
              // src="/images/about.avif"
              src="/images/about/about-hero.webp"
              alt="The WebMints team collaborating in the office"
              width={1000}
              height={1228}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
