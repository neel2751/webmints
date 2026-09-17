"use client";
import Image from "next/image";
import { GlobeLock, Headset, Layers, Siren, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function KeyFeature() {
  return (
    <section className="relative overflow-hidden bg-[#08080a] py-20 lg:rounded-[2rem] lg:mx-px font-grotesk">
      <div className="mx-auto mb-16 grid max-w-6xl gap-6 px-12 md:grid-cols-2 lg:gap-0">
        <h2 className="font-bold text-white sm:text-5xl text-3xl tracking-tighter sm:mb-4 mb-0">
          Key Features of Our Custom SaaS Solutions
        </h2>
        <p className="text-lg max-w-md font-medium leading-snug text-gray-300 tracking-tight">
          Find out custom SaaS solutions aimed at assisting UK companies
          increase their efficiency, streamline operations and build scalable
          digital systems. All solutions are tailored according to your
          company’s processes, users and future growth prospects.
        </p>
        {/* <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 inline-block rounded-full bg-indigo-600 px-6 py-3 text-center font-medium text-white shadow-md transition-colors hover:bg-indigo-700 md:mt-0 md:self-center max-w-max"
          href="/contact-us"
        >
          Get a Free Consultation
        </motion.a> */}
      </div>
      <div className="border-y border-white/10">
        <div className="relative mx-auto max-w-6xl border-x border-white/10 px-4 sm:px-6 md:px-12">
          <div
            aria-hidden="true"
            className="absolute -left-1 -top-1 hidden size-2 border border-gray-800 bg-gray-900 shadow-sm lg:block"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -top-1 left-3 hidden size-2 border border-gray-800 bg-gray-900 shadow-sm sm:left-5 lg:left-11 lg:block"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -right-1 -top-1 hidden size-2 border border-gray-800 bg-gray-900 shadow-sm lg:block"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -top-1 right-3 hidden size-2 border border-gray-800 bg-gray-900 shadow-sm sm:right-5 lg:right-11 lg:block"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -bottom-1 -left-1 hidden size-2 border border-gray-800 bg-gray-900 shadow-sm lg:block"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -bottom-1 left-3 hidden size-2 border border-gray-800 bg-gray-900 shadow-sm sm:left-5 lg:left-11 lg:block"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -bottom-1 -right-1 hidden size-2 border border-gray-800 bg-gray-900 shadow-sm lg:block"
          ></div>
          <div
            aria-hidden="true"
            className="absolute -bottom-1 right-3 hidden size-2 border border-gray-800 bg-gray-900 shadow-sm sm:right-5 lg:right-11 lg:block"
          ></div>
          <div className="relative grid divide-y divide-white/10 border-x border-b border-white/10 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            <div className="relative p-6 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/5 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:p-8 lg:p-12">
              <div className="inline-flex gap-2 items-center">
                <Siren className="text-gray-500 group-hover:text-green-500" />
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  Industry-Specific Solutions
                </h3>
              </div>
              <p className="text-gray-200 text-base mt-4">
                We create custom-built SaaS applications that cater to the
                unique needs of your industry. Whether you're in healthcare,
                construction, e-commerce, education, enterprise solutions, or
                any other industry, we have what it takes.
              </p>
              <Image
                src={"/images/home/sol1.svg"}
                // src="https://notioly.com/wp-content/uploads/2025/03/525.Waiting-In-Line.png"
                className="mt-8 mix-blend-lighten border grayscale group-hover:grayscale-0 rounded-md border-neutral-800"
                alt="Area chart"
                width="1344"
                height="1108"
              />
            </div>
            <div className="relative p-6 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/5 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:p-8 lg:p-12">
              <div className="inline-flex gap-2 items-center">
                <GlobeLock className="text-gray-500 group-hover:text-blue-400" />
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  Scalable & Secure Architecture
                </h3>
              </div>
              <p className="text-gray-200 text-base mt-4">
                Our custom SaaS platforms use scalable architecture designed to
                support business growth. We focus on reliable infrastructure,
                secure application development and technology that can adapt as
                your users, data and operational requirements increase.
              </p>
              <Image
                // src="https://notioly.com/wp-content/uploads/2025/03/525.Waiting-In-Line.png"
                src={"/images/home/arch1.svg"}
                className="mt-8 mix-blend-lighten border grayscale hover:grayscale-0 rounded-md border-neutral-800"
                alt="bar chart"
                width="1344"
                height="1108"
              />
            </div>
          </div>
          <div className="relative grid divide-y divide-white/10 border-x border-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            <div className="relative p-6 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-indigo-600/15 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:p-8 lg:p-12">
              <div className="flex items-center gap-2">
                <TrendingUp className="text-gray-500 size-5 group-hover:text-indigo-400" />

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  Enhanced Performance
                </h3>
              </div>
              <p className="text-gray-200 text-base mt-4">
                We develop high-performing SaaS applications that have
                responsive interfaces and efficient systems. This ensures
                businesses provide their customers, employees, and teams with a
                seamless experience.
              </p>
            </div>
            <div className="relative p-6 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-purple-600/15 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:p-8 lg:p-12">
              <div className="flex items-center gap-2">
                <Layers className=" text-gray-500 size-5 group-hover:text-purple-400" />
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  Seamless Integration
                </h3>
              </div>
              <p className="text-gray-200 text-base mt-4">
                Integrate your SaaS solution with the products and services
                already used by your company. We can help you implement
                third-party integration and API development solutions, which can
                help companies link systems and eliminate routine tasks.
              </p>
            </div>
            <div className="relative p-6 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-green-600/15 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:col-span-2 sm:!border-l-0 sm:border-t sm:border-white/10 sm:p-8 lg:col-span-1 lg:!border-l lg:border-t-0 lg:p-12">
              <div className="flex items-center gap-2">
                <Headset className="text-gray-500 size-5 group-hover:text-green-400" />

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  Support & Training
                </h3>
              </div>
              <p className="text-gray-200 text-base mt-4">
                Our team offers professional technical support and advice on how
                you can make the most out of your SaaS solution. We will assist
                you from implementation and training to further improvement and
                scaling of the software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
