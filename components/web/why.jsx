import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Clock } from "lucide-react";

const data = [
  {
    index: "01",
    title: "Tailored to Your Needs",
    desc: " Stop fitting your business into rigid software. Our platform is built for customization, adapting precisely to your unique workflows and goals.",
  },
  {
    index: "02",
    title: " Unleash Your Potential",
    desc: "Gain the flexibility to innovate and scale without being limited by your technology. We empower you to build the solution that propels you forward.",
  },
  {
    index: "03",
    title: "Future-Proof Your Growth",
    desc: " Our scalable architecture ensures your platform evolves with your business, providing a long-term solution that adapts to your changing needs.",
  },
  {
    index: "04",
    title: "Data-Driven Insights",
    desc: "Leverage personalized dashboards and customizable reports to gain clear visibility into your key metrics and make informed decisions.",
  },
  {
    index: "05",
    title: "Dedicated Partnership",
    desc: "We're more than just a vendor; our expert team provides the support and guidance you need to succeed every step of the way.",
  },
  {
    index: "06",
    title: "Secure and Reliable",
    desc: "Your data is our priority. Benefit from a robust and secure platform with built-in safeguards to protect your valuable information.",
  },
  {
    index: "07",
    title: "Cost-Effective Flexibility",
    desc: "Get the power of a bespoke solution without the hefty price tag. Our modular approach ensures you only pay for what you need.",
  },
  {
    index: "08",
    title: "Intuitive and User-Friendly",
    desc: "Empower your team with an easy-to-navigate platform that requires minimal training and maximizes user adoption from day one.",
  },
];

const WhyUS = () => {
  return (
    <section className="relative container py-16 md:py-28 lg:py-32 mx-auto">
      <h3>WHY CHARTER?</h3>
      <div className="relative z-10">
        <div className="text-left">
          <h2 className="mb-6 text-3xl font-semibold lg:text-4xl">
            Discover Innovative Solutions
            {/* Discover Powerful Features */}
          </h2>
          <Button size="sm" className="bg-indigo-700 z-10">
            Get Started
            <ArrowRight />
          </Button>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4">
          {data.map((item, i) => (
            <WhyUSCard key={i} {...item} />
          ))}
        </div>
      </div>
      <div className="absolute -inset-x-20 top-0 [mask-image:radial-gradient(circle_at_center,black_0%,black_20%,transparent_85%)]">
        <svg width="32" height="32" className="text-indigo-600/5 h-full w-full">
          <defs>
            <pattern
              id="plus-pattern-:S2:"
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
            fill="url(#plus-pattern-:S2:)"
          ></rect>
        </svg>
      </div>
      <div className="absolute inset-0 isolate">
        <div className="bg-primary-gradient/28 absolute top-1/2 size-[700px] -translate-y-1/2 rounded-full blur-[300px] will-change-transform"></div>
        <div className="bg-secondary-gradient/16 absolute top-1/2 right-0 size-[700px] -translate-y-1/2 -rotate-12 rounded-full blur-[300px] will-change-transform"></div>
        <div className="bg-tertiary-gradient/6 absolute right-20 bottom-1/4 z-[1] h-[500px] w-[800px] -rotate-12 rounded-full blur-[100px] will-change-transform md:bottom-10"></div>
      </div>
    </section>

    //   {/* <div className="max-w-6xl mx-auto mt-10 ml-auto">
    //     <div className="grid lg:gap-y-12 lg:gap-x-16 sm:gap-x-10 sm:grid-cols-2 gap-y-6 grid-cols-1">
    //       {Array.from({ length: 6 }).map((_, index) => (
    //         <div key={index} className="flex gap-5">
    //           <svg
    //             className="lg:size-8 shrink-0 text-indigo-600"
    //             xmlns="http://www.w3.org/2000/svg"
    //             width="24"
    //             height="24"
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth="1.5"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           >
    //             <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
    //             <path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
    //             <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
    //             <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
    //             <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
    //             <path d="M12 13h4"></path>
    //             <path d="M12 18h6a2 2 0 0 1 2 2v1"></path>
    //             <path d="M12 8h8"></path>
    //             <path d="M16 8V5a2 2 0 0 1 2-2"></path>
    //             <circle cx="16" cy="13" r=".5"></circle>
    //             <circle cx="18" cy="3" r=".5"></circle>
    //             <circle cx="20" cy="21" r=".5"></circle>
    //             <circle cx="20" cy="8" r=".5"></circle>
    //           </svg>
    //           <div className="grow">
    //             <h4 className="text-neutral-800 font-medium ">
    //               Creative minds
    //             </h4>
    //             <p className="mt-1 text-neutral-500">
    //               We choose our teams carefully. Our people are the secret to
    //               great work.
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div> */}
  );
};
export default WhyUS;

const WhyUSCard = ({ index, title, desc }) => (
  <div className="mt-4 flex flex-col border-l px-6 sm:mt-4 md:mt-6">
    <div className="relative">
      <h1 className="mb-16 bg-gradient-to-r from-white to-transparent bg-clip-text text-9xl">
        {index}
      </h1>
      <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-100"></div>
    </div>
    <p className="text-md mt-4 mb-2 font-semibold">{title}</p>
    <p className="text-md mb-6 text-muted-foreground">{desc}</p>
    {/* <Button
      className="shrink-0 max-w-max border-stone-200"
      variant="outline"
      size="sm"
    >
      <Clock />5 Minute
    </Button> */}
  </div>
);
