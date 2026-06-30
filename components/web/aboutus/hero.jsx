import React from "react";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="py-32 font-grotesk">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
          <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
            <div className="pr-6">
              <h2 className="font-bold text-black/85 mb-2 text-6xl tracking-tighter">
                Our Story
              </h2>
              <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mx-auto mb-9">
                Like many growing businesses – perhaps even yours – we
                experienced firsthand the inefficiencies of juggling multiple
                software tools. The endless logins, the frustrating search for
                scattered data, and the ever-increasing pile of invoices likely
                sound familiar. For us, this wasn't just an inconvenience; it
                became a significant drain on our time and resources, pulling
                our focus away from what truly mattered.
              </p>
              <p className="text-lg font-medium leading-snug text-gray-500 tracking-tight max-w-3xl mx-auto">
                It was this very challenge, the same one you might be facing
                right now, that sparked our vision: to create a single,
                adaptable platform that could streamline operations and empower
                teams like yours to thrive. This is the story of how that shared
                frustration led us to build the customizable SaaS solution we
                offer today.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Image
                src="/images/about/workplace/team-collaboration.jpg"
                alt="WebMints team members collaborating at the office"
                width={1400}
                height={2099}
                className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <Image
                  src="/images/about/workplace/workspace.jpg"
                  alt="An open WebMints workspace with desks and natural light"
                  width={1400}
                  height={934}
                  className="aspect-[1.1] w-full rounded-lg object-cover"
                />
                <Image
                  src="/images/about/workplace/team-meeting.jpg"
                  alt="WebMints team members in a working session"
                  width={1400}
                  height={2099}
                  className="aspect-[0.7] w-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <Image
                src="/images/about/workplace/office-interior.jpg"
                alt="Modern open-plan office interior at WebMints"
                width={1400}
                height={920}
                className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2"
              />
              <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                <Image
                  src="/images/about/workplace/office-lounge.jpg"
                  alt="Collaborative lounge area in the WebMints office"
                  width={1400}
                  height={935}
                  className="aspect-[0.8] w-full rounded-lg object-cover"
                />
                <Image
                  src="/images/about/workplace/workstations.jpg"
                  alt="Rows of workstations in the WebMints office"
                  width={1400}
                  height={933}
                  className="aspect-[0.9] w-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="px-8">
              <p className="text-indigo-600 font-semibold tracking-tight font-grotesk">
                Our Workplace
              </p>
              <h2 className="font-bold text-black/85 mb-2 text-2xl tracking-tighter">
                Inside Our Innovation Hub: Where Ideas Take Flight
              </h2>
              <p className="mb-4 text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mx-auto">
                Just as we believe in creating a seamless experience for our
                clients, we've cultivated a dynamic and collaborative
                environment within our own walls. Our workplace is more than
                just an office; it's a hub where diverse talents converge, ideas
                are openly shared, and innovation is nurtured.
              </p>
              <p className="text-lg font-medium leading-snug text-gray-500 tracking-tight max-w-3xl mx-auto">
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
