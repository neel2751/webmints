import Image from "next/image";
import React from "react";

export default function Benifits() {
  const benifits = [
    {
      title: "Growth Opportunities",
      description:
        "Where you start is not where you have to stay. We believe in promoting from within and providing our team members with the resources they need to grow their careers.",
      image: "/benefits/growth-opportunities.svg",
    },
    {
      title: "Industry Recognition",
      description:
        "We are proud of our team's achievements and regularly recognize and reward outstanding performance through awards, bonuses, and public acknowledgment.",
      image: "/benefits/industry-recognition.svg",
    },
    {
      title: "Innovative Environment",
      description:
        "We foster a culture of innovation where team members are encouraged to think creatively, share ideas, and contribute to the development of cutting-edge solutions.",
      image: "/benefits/innovative-environment.svg",
    },
    {
      title: "Diversity & Inclusion",
      description:
        "We are committed to creating a diverse and inclusive workplace where all team members feel valued, respected, and empowered to bring their authentic selves to work.",
      image: "/benefits/diversity-inclusion.svg",
    },
    {
      title: "Flexible Scheduling",
      description:
        "We understand the importance of work-life balance and offer flexible scheduling options to help our team members manage their personal and professional lives effectively.",
      image: "/benefits/flexible-scheduling.svg",
    },
    {
      title: "Annual Team Retreats",
      description:
        "We organize annual team retreats to foster team bonding, celebrate achievements, and provide opportunities for relaxation and rejuvenation.",
      image: "/benefits/annual-team-retreats.svg",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16  font-grotesk">
      <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tighter text-center">
        Benefits & Perks
      </h2>
      <p className=" max-w-2xl mx-auto text-lg text-gray-600 font-medium tracking-tight text-center mb-12">
        At Webmints, we believe in taking care of our team. We offer a range of
        benefits and perks designed to support your health, well-being, and
        professional growth. Our comprehensive benefits package includes:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {benifits.map((benifit, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-4">
              <Image
                src={benifit.image || "/benefits/growth-opportunities.svg"}
                alt={benifit.title}
                className="w-28 h-28"
                width={64}
                height={64}
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight text-black/80">
              {benifit.title}
            </h3>
            <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
              {benifit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
