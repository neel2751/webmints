import ShinyText from "@/components/animation/shiny-text";
import {
  GraduationCap,
  LayoutGrid,
  LineChart,
  PlaySquare,
  Smartphone,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function WhyUs() {
  const cardData = [
    {
      Icon: LayoutGrid,
      title: "Custom-Built SaaS",
      desc: "We design and deliver software that molds perfectly to your business model—no generic templates, just solutions made with your specific workflows, goals, and customers in mind.",
      color: "red",
    },
    {
      Icon: PlaySquare,
      title: "Scalable Architecture",
      desc: "Our infrastructure grows with you, from early-stage MVPs to full-scale enterprise platforms—supporting unlimited users, data, and future-proof extensions.",
      color: "blue",
    },
    {
      Icon: LineChart,
      title: "Rapid Development Cycles",
      desc: "Using agile methodology and continuous iteration, we transform your vision into functional modules fast—without sacrificing quality or performance.",
      color: "green",
    },
    {
      Icon: GraduationCap,
      title: "Dedicated Support Team",
      desc: "From onboarding to scale-up, our team is just a message away—real people who know your platform inside out, offering guidance every step of the way.",
      color: "purple",
    },
    {
      Icon: Users,
      title: "Transparent Pricing",
      desc: "No surprises, no fine print. Our clear, tiered pricing ensures you understand what you're paying for—flexible enough for startups, structured for enterprises.",
      color: "amber",
    },
    {
      Icon: Smartphone,
      title: "Industry Experience",
      desc: "We’ve worked across finance, healthcare, retail, logistics, and more—bringing cross-sector expertise to build platforms that understand your landscape.",
      color: "indigo",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl  p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Dashboard Image */}
            {/* <div className="relative">
              <div className="bg-indigo-100 rounded-xl p-4 relative z-10">
                <Image
                  // src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2013.png-hUivDzumMuIYszA8dRGhi6YI4mMnef.jpeg"
                  src={"/images/home/why.svg"}
                  alt="Learning platform dashboard"
                  width={600}
                  height={450}
                  className="rounded-lg w-full"
                />
              </div>
            </div> */}

            <div className="relative">
              <div
                className={`relative inset-0 rounded-2xl overflow-hidden transition-transform duration-700 p-4 bg-indigo-100`}
              >
                <Image
                  src={"/images/home/why.svg"}
                  alt="Learning platform dashboard"
                  width={600}
                  height={450}
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700 rounded-lg"
                />
              </div>

              {/* Floating Stats - Animated */}

              <div className="absolute -left-20 -bottom-6 p-6 rounded-xl animate-float cursor-pointer">
                <Image
                  src={"/images/home/why1.png"}
                  alt="Learning platform dashboard"
                  width={200}
                  height={200}
                  className=" object-contain transform hover:scale-105 transition-transform duration-700 rounded-lg"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <ShinyText
                text="Why Chapter"
                className="bg-indigo-600 border border-indigo-700 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-colors"
              />
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 font-grotesk">
                Unlock Your Unique Potential with a Platform Built for You
              </h2>
              <p className="text-gray-800 mb-6 font-sans text-lg tracking-tight">
                Stop settling for off-the-shelf solutions. We empower your
                business with a fully customizable SaaS platform, providing the
                exact tools and flexibility you need to thrive in today's
                dynamic environment. Discover why choosing us means choosing a
                solution as unique as your business.
              </p>
              {/* Feature highlights */}
              <div className="space-y-6">
                <div className="border-l-2 border-indigo-600 px-4 py-1">
                  <p className="text-gray-800 font-sans text-base">
                    <strong className="text-gray-900 font-semibold text-lg font-grotesk">
                      Data-Driven Decisions
                    </strong>{" "}
                    Leverage personalized dashboards and customizable reports to
                    gain clear visibility into your key metrics and make
                    informed, confident business decisions.
                  </p>
                </div>

                <div className="border-l-2 border-indigo-600 px-4 py-1">
                  <p className="text-gray-800 font-sans text-base">
                    <strong className="text-gray-900 font-semibold text-lg font-grotesk">
                      Security First
                    </strong>{" "}
                    From encrypted data storage to compliance with global
                    standards, our platforms are designed with end-to-end
                    protection at every level—keeping your users and your
                    reputation safe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {cardData?.map((item, index) => (
              <WebminstCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const WebminstCard = ({ Icon, title, desc, color }) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-3 mb-4">
      <div className={`bg-${color}-50 p-2 rounded-lg`}>
        <Icon className={`text-${color}-600 h-6 w-6`} />
      </div>
      <h3 className="font-semibold text-gray-900 font-grotesk text-lg">
        {title}
      </h3>
    </div>
    <p className="text-gray-800 text-base tracking-tight font-sans">{desc}</p>
  </div>
);
