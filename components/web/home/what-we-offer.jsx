import ShinyText from "@/components/animation/shiny-text";
import {
  Handshake,
  HardDrive,
  LockIcon,
  ThumbsUp,
  TrendingUp,
  UploadCloud,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function WhatWeOffer() {
  return (
    <section className="sm:py-32 py-10 bg-indigo-700">
      <div className="container mx-auto">
        <div className="text-white flex items-center justify-center rounded-xl">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <ShinyText
                text="Benefits"
                className="bg-black border border-indigo-700 text-white px-4 py-1 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-colors"
              />
              <h2 className="text-center text-3xl font-semibold lg:text-left lg:text-4xl tracking-tight text-pretty font-grotesk">
                {/* Solutions Designed for Your Success */}
                Transform Your Business with Measurable Results
              </h2>
              <p className="text-center text-white/90 lg:text-left lg:text-lg tracking-tight mt-4 font-sans">
                We provide a uniquely customizable SaaS platform that adapts to
                your exact business needs. Our modular design and flexible
                architecture empower you to build the perfect solution,
                unlocking efficiency, driving growth, and providing a
                significant return on your investment. Discover the tangible
                benefits of a platform built around you.
              </p>

              <div className="space-y-6 pt-10">
                <div className="flex items-start space-x-4">
                  <div className="text-white">
                    <TrendingUp className="h-5 w-5 mt-1 ml-1" />
                  </div>
                  <div>
                    <p className="font-semibold font-grotesk">
                      Accelerated Growth
                    </p>
                    <p className="text-white/80 max-w-sm font-sans">
                      Businesses using our platform grow 2.3x faster than
                      industry averages.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-white">
                    <Handshake className="h-5 w-5 mt-1 ml-1" />
                  </div>
                  <div>
                    <p className="font-semibold font-grotesk">
                      Enhanced Decision Making
                    </p>
                    <p className="text-slate-400 font-sans">
                      Data-driven insights lead to better business decisions and
                      strategic planning.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-white">
                    <ThumbsUp className="h-5 w-5 mt-1 ml-1" />
                  </div>
                  <div>
                    <p className="font-semibold font-grotesk">
                      Improved Customer Satisfaction
                    </p>
                    <p className="text-slate-400 font-sans">
                      Streamlined processes and better service delivery result
                      in higher customer satisfaction scores.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - UI Screenshot Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white">
              <Image
                src="/images/home/benifit.svg"
                alt="App dashboard UI"
                height={400}
                width={400}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
