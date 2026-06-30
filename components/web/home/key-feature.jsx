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
          Discover the powerful features that set our custom SaaS solutions
          apart. Designed to enhance efficiency, scalability, and user
          experience, our platform is built to meet the unique needs of your
          business.
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
                Tailored to your industry's unique requirements, our SaaS
                platforms deliver targeted functionalities that drive success.
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
                Built on a robust infrastructure, our SaaS solutions grow with
                your business while ensuring data security and integrity.
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
                Experience faster load times and improved responsiveness with
                our optimized SaaS solutions.
                {/* Our dedicated support team is available 24/7 to help you with
              any questions or concerns. */}
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
                within your platform, you can easily integrate with your
                favorite applications and services.
                {/* We use industry-standard encryption to ensure your payment
              information is secure. */}
              </p>
            </div>
            <div className="relative p-6 group before:absolute before:inset-0 before:bg-gradient-to-t before:from-green-600/15 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:hidden sm:p-8 lg:block lg:p-12">
              <div className="flex items-center gap-2">
                <Headset className="text-gray-500 size-5 group-hover:text-green-400" />

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  Support & Training
                </h3>
              </div>
              <p className="text-gray-200 text-base mt-4">
                Our dedicated support team is available 24/7 to help you with
                any questions or concerns you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
