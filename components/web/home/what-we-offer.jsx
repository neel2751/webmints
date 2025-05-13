import { HardDrive, LockIcon, UploadCloud } from "lucide-react";
import React from "react";

export default function WhatWeOffer() {
  return (
    <section className="py-32 bg-indigo-700">
      <div className="container mx-auto">
        <div className="text-white flex items-center justify-center rounded-xl">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-center text-3xl font-semibold lg:text-left lg:text-4xl tracking-tight text-pretty font-grotesk">
                Solutions Designed for Your Success
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
                    <UploadCloud className="h-5 w-5 mt-1 ml-1" />
                  </div>
                  <div>
                    <p className="font-semibold font-grotesk">
                      Push to deploy.
                    </p>
                    <p className="text-white/80 max-w-sm font-sans">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      aute id magna.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-white">
                    <LockIcon className="h-5 w-5 mt-1 ml-1" />
                  </div>
                  <div>
                    <p className="font-semibold font-grotesk">
                      SSL certificates.
                    </p>
                    <p className="text-slate-400 font-sans">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-white">
                    <HardDrive className="h-5 w-5 mt-1 ml-1" />
                  </div>
                  <div>
                    <p className="font-semibold font-grotesk">
                      Database backups.
                    </p>
                    <p className="text-slate-400 font-sans">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - UI Screenshot Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/Frame.svg"
                alt="App dashboard UI"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
