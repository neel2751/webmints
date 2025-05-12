import React from "react";

export default function AboutHero() {
  return (
    <section className="py-32">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
          <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
            <div className="pr-6">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">
                Our Story
              </h1>
              <p className="mb-9 lg:text-xl">
                Like many growing businesses – perhaps even yours – we
                experienced firsthand the inefficiencies of juggling multiple
                software tools. The endless logins, the frustrating search for
                scattered data, and the ever-increasing pile of invoices likely
                sound familiar. For us, this wasn't just an inconvenience; it
                became a significant drain on our time and resources, pulling
                our focus away from what truly mattered.
              </p>
              <p className="text-muted-foreground">
                It was this very challenge, the same one you might be facing
                right now, that sparked our vision: to create a single,
                adaptable platform that could streamline operations and empower
                teams like yours to thrive. This is the story of how that shared
                frustration led us to build the customizable SaaS solution we
                offer today.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <img
                src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg"
                alt="about 1"
                className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <img
                  src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg"
                  alt="about 2"
                  className="aspect-[1.1] rounded-lg object-cover"
                />
                <img
                  src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg"
                  alt="about 3"
                  className="aspect-[0.7] rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <img
                src="https://library.shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg"
                alt="about 4"
                className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <img
                  src="https://library.shadcnblocks.com/images/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg"
                  alt="about 5"
                  className="aspect-[0.8] rounded-lg object-cover"
                />
                <img
                  src="https://library.shadcnblocks.com/images/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg"
                  alt="about 6"
                  className="aspect-[0.9] rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="px-8">
              <p className="text-indigo-600 font-semibold tracking-tight">
                Our Workplace
              </p>
              <h1 className="mb-4 text-2xl font-semibold lg:mb-6 tracking-tight whitespace-nowrap">
                Inside Our Innovation Hub: Where Ideas Take Flight
              </h1>
              <p className="mb-4 lg:text-xl">
                Just as we believe in creating a seamless experience for our
                clients, we've cultivated a dynamic and collaborative
                environment within our own walls. Our workplace is more than
                just an office; it's a hub where diverse talents converge, ideas
                are openly shared, and innovation is nurtured.
              </p>
              <p className="text-muted-foreground">
                We foster a culture of continuous learning, where every team
                member is empowered to contribute their unique perspectives to
                build the best possible customizable SaaS solutions for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
