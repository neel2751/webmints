import React from "react";

export default function WhatWeOffer() {
  return (
    <section className="py-32 bg-indigo-700">
      <div className="container mx-auto">
        <div className="text-white flex items-center justify-center rounded-xl">
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-center text-3xl font-semibold lg:text-left lg:text-4xl tracking-tight text-pretty">
                Solutions Designed for Your Success
              </h2>
              <p className="text-center text-white/80 lg:text-left lg:text-lg tracking-tight mt-6">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 mt-1 ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Push to deploy.</p>
                    <p className="text-white/80 max-w-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      aute id magna.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 mt-1 ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">SSL certificates.</p>
                    <p className="text-slate-400">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="h-5 w-5 mt-1 ml-1"
                    >
                      <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Database backups.</p>
                    <p className="text-slate-400">
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
