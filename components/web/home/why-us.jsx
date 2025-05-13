import {
  GraduationCap,
  LayoutGrid,
  LineChart,
  PlaySquare,
  Smartphone,
  Users,
} from "lucide-react";
import React from "react";

export default function WhyUs() {
  const cardData = [
    {
      Icon: LayoutGrid,
      title: "Personalized learning paths",
      desc: "Tailor your learning experience with custom tracks based on your goals, skill level, and preferred learning pace. Get recommendations designed just for you.",
      color: "red",
    },
    {
      Icon: PlaySquare,
      title: "Interactive learning experiences",
      desc: "Engage with high-quality, interactive video content that brings learning to life. Practice as you go with embedded quizzes and live demonstrations.",
      color: "blue",
    },
    {
      Icon: LineChart,
      title: "Data-driven insights",
      desc: "Track your progress and stay motivated with real-time analytics and insights. Identify areas for improvement and adjust your learning plan accordingly.",
      color: "green",
    },
    {
      Icon: GraduationCap,
      title: "Expert instructors",
      desc: "Learn from experienced professionals who have a deep understanding of the subject matter. Get personalized feedback and guidance to help you achieve your goals.",
      color: "purple",
    },
    {
      Icon: Users,
      title: "Community support",
      desc: "Connect with fellow learners and industry experts through discussion forums, live events, and social media groups. Get support and encouragement when you need it most.",
      color: "amber",
    },
    {
      Icon: Smartphone,
      title: "Mobile accessibility",
      desc: "Take your learning on the go with our mobile-friendly platform. Access course materials, track your progress, and connect with others from anywhere, at any time.",
      color: "indigo",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl  p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Dashboard Image */}
            <div className="relative">
              <div className="bg-gray-100 rounded-xl p-4 relative z-10">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%2013.png-hUivDzumMuIYszA8dRGhi6YI4mMnef.jpeg"
                  alt="Learning platform dashboard"
                  width={600}
                  height={450}
                  className="rounded-lg w-full"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div>
              <p className="mb-4 text-base font-semibold text-indigo-600 font-sans">
                Why Chapter?
              </p>
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
                      Our courses
                    </strong>{" "}
                    are designed by experts, ensuring you gain real-world skills
                    that are relevant, impactful, and immediately applicable.
                  </p>
                </div>

                <div className="border-l-2 border-indigo-600 px-4 py-1">
                  <p className="text-gray-800 font-sans text-base">
                    <strong className="text-gray-900 font-semibold text-lg font-grotesk">
                      Engage with a community
                    </strong>{" "}
                    of passionate learners, track your progress in real-time,
                    and access your materials anytime, anywhere.
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
