import { GlobeLock, Headset, Layers, Siren, TrendingUp } from "lucide-react";
import React from "react";

export default function KeyFeature() {
  return (
    <section className="relative overflow-hidden bg-black py-20 lg:rounded-[2rem] lg:mx-px">
      <div className="mx-auto mb-16 grid max-w-6xl gap-6 px-12 md:grid-cols-2 lg:gap-0">
        <h2 className="text-3xl font-semibold text-white md:text-4xl font-grotesk">
          Growing with <span className="text-amber-500">You</span> and
          innovative approach to
          <br /> <span className="text-amber-500">Digital</span> transformation
        </h2>
        <div className="max-w-md text-gray-300">
          <p className="text-lg tracking-tight font-sans">
            Our goal is to provide you with the best possible experience.
            <span className="font-medium text-white">
              We strive to be the best version of ourselves,{" "}
            </span>
            and we're committed to helping you grow and succeed.
          </p>
        </div>
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
            <div className="relative p-6 before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/5 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:p-8 lg:p-12">
              <div className="inline-flex gap-2">
                <Siren className="text-amber-500" />
                <h3 className="relative text-lg text-white font-grotesk">
                  Solution power
                </h3>
              </div>
              <p className="relative mt-4 text-gray-300 font-sans">
                Our solutions power businesses across multiple industries,
                ensuring seamless scalability and automation. Fully adobpatble
                to your business needs.
              </p>
              <img
                src="https://notioly.com/wp-content/uploads/2025/03/525.Waiting-In-Line.png"
                className="mt-8 mix-blend-lighten grayscale rounded-md"
                alt="Area chart"
                width="1344"
                height="1108"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative p-6 before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/5 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:p-8 lg:p-12">
              <div className="inline-flex gap-2">
                <GlobeLock className="text-amber-500" />
                <h3 className="relative text-lg text-white font-grotesk">
                  Scalable Architecture
                </h3>
              </div>
              <p className="relative mt-4 text-gray-300 font-sans">
                Our platform grows with your business, ensuring performance and
                reliability at every stage. with a focus on security and
                compliance, we prioritize the protection of your data and
                privacy.
              </p>
              <img
                src="https://notioly.com/wp-content/uploads/2025/03/525.Waiting-In-Line.png"
                className="mt-8 mix-blend-lighten grayscale"
                alt="bar chart"
                width="1344"
                height="1108"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="relative grid divide-y divide-white/10 border-x border-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
            <div className="relative p-6 before:absolute before:inset-0 before:bg-gradient-to-t before:from-primary-600/15 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:p-8 lg:p-12">
              <div className="flex items-center gap-2">
                <TrendingUp className=" text-amber-500 size-5" />

                <h3 className="text-lg text-white font-grotesk">
                  High Performance
                </h3>
              </div>
              <p className="mt-4 text-base text-gray-300 font-sans">
                Our SaaS platform is optimized for speed and efficiency,
                allowing you to serve your customers without delay.
                {/* Our dedicated support team is available 24/7 to help you with
              any questions or concerns. */}
              </p>
            </div>
            <div className="relative p-6 before:absolute before:inset-0 before:bg-gradient-to-t before:from-secondary-600/15 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:p-8 lg:p-12">
              <div className="flex items-center gap-2">
                <Layers className=" text-amber-500 size-5" />

                <h3 className="text-lg text-white font-grotesk">
                  Seamless Integrations
                </h3>
              </div>
              <p className="mt-4 text-base text-gray-300 font-sans">
                within your platform, you can easily integrate with your
                favorite applications and services.
                {/* We use industry-standard encryption to ensure your payment
              information is secure. */}
              </p>
            </div>
            <div className="relative p-6 before:absolute before:inset-0 before:bg-gradient-to-t before:from-accent-600/15 before:opacity-0 before:duration-300 hover:before:opacity-100 sm:hidden sm:p-8 lg:block lg:p-12">
              <div className="flex items-center gap-2">
                <Headset className="text-amber-500 size-5" />

                <h3 className="text-lg text-white font-grotesk">
                  24/7 Support
                </h3>
              </div>
              <p className="mt-4 text-base text-gray-300 font-sans">
                Our dedicated support team is available 24/7 to help you with
                any questions or concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
