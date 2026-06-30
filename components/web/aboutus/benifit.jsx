import { Button } from "@/components/ui/button";
import {
  Clock,
  Globe2,
  Heart,
  HeartPulse,
  MessageCircleMore,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Benifit() {
  const benefits = [
    {
      title: "Flexible schedule",
      description:
        "Work when you're most productive. We trust you to manage your time and deliver great results.",
      icon: Clock,
      iconBg: "bg-blue-500",
      gradientFrom: "blue-50",
      gradientTo: "blue-100",
    },
    {
      title: "Global team",
      description:
        "Connect with amazing colleagues from 35+ countries and learn from diverse perspectives.",
      icon: Globe2,
      iconBg: "bg-green-500",
      gradientFrom: "green-50",
      gradientTo: "green-100",
    },
    {
      title: "Work-life balance",
      description:
        "No commute means more time for what matters most to you. Create your ideal work environment.",
      icon: Heart,
      iconBg: "bg-purple-500",
      gradientFrom: "purple-50",
      gradientTo: "purple-100",
    },
    {
      title: "Professional growth",
      description:
        "Access to learning resources, conferences, and mentorship opportunities to advance your career.",
      icon: Zap,
      iconBg: "bg-yellow-500",
      gradientFrom: "amber-600",
      gradientTo: "indigo-400",
    },
    {
      title: "Competitive benefits",
      description:
        "Health insurance, equity options, generous PTO, and home office setup allowance.",
      icon: HeartPulse,
      iconBg: "bg-indigo-500",
      gradientFrom: "indigo-50",
      gradientTo: "indigo-100",
    },
    {
      title: "Async communication",
      description:
        "Thoughtful, documented communication that respects everyone's time and timezone.",
      icon: MessageCircleMore,
      iconBg: "bg-pink-500",
      gradientFrom: "pink-50",
      gradientTo: "rose-100",
    },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-grotesk">
            Remote work comes with great benefits
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Flexible Schedule */}

          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-indigo-50  to-indigo-50 rounded-2xl p-8 relative overflow-hidden`}
            >
              <div
                className={` ${benefit.iconBg} absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center`}
              >
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-grotesk">
                {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className=" text-center mt-10">
          <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
            <Link href="/careers" target="_blank" rel="noopener noreferrer">
              <Globe2 />
              Join Our Team
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
