import React from "react";
import { Button } from "../../ui/button";
import { ArrowRightIcon, Badge } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Marquee } from "@/components/animation/marquee-animation";

export default function Industry() {
  return (
    <section className="py-20 lg:py-16 max-w-7xl mx-auto font-grotesk">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16">
        <div>
          <div className="text-sm font-semibold text-indigo-600 mb-2">
            Industries
          </div>
          <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter">
            Tailored Solutions for Every Industry
          </h2>
          <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
            We develop industry-focused SaaS platforms that solve real-world
            problems.
          </p>
          <Button
            className="bg-gradient-to-b from-indigo-600 via-indigo-700 to-indigo-800 hover:bg-gradient-to-t hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 text-white"
            asChild
          >
            <Link href={"/industries"}>
              See Industry Solutions
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <Image
          src="/images/indu.svg"
          alt="Illustration of industry-specific SaaS solutions"
          width="200"
          height="200"
          className="w-80 h-auto rounded-lg"
        />
      </div>
      <div className="container mx-auto  overflow-hidden">
        <div className="mt-8 sm:mt-12">
          <div className="text-muted-foreground relative h-px w-full container scale-x-105 overflow-hidden">
            <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
          </div>
          <div className="relative container flex max-md:flex-col sm:px-0 px-4">
            <div className="relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 flex-1 [&amp;>.title-container]:mb-5 md:[&amp;>.title-container]:mb-8 xl:[&amp;>.image-container]:translate-x-6 [&amp;>.image-container]:translate-x-2">
              <div className=" relative min-h-[10rem]">
                <h3 className="lg:text-3xl text-2xl font-semibold mb-2 tracking-tight text-indigo-600">
                  Enterprise Solutions
                </h3>
                <p className="text-black/65 text-lg font-medium tracking-tight">
                  {/* On this one we have to include the Workflow optimization, reporting, integrations */}
                  {/* We are as company we are the custom saas company so we can't say the our platforms because we are making for someone for requirement */}
                  Enterprise solutions are designed to meet the complex needs of
                  large organizations. Our platforms offer robust features such
                  as workflow optimization, advanced reporting, and seamless
                  integrations to enhance productivity and drive business
                  growth.
                </p>
              </div>
              {/* What we can do here add the both side white with blur */}
              <div
                className="image-container grid grid-cols-1 gap-4"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <Marquee reverse>
                  {[
                    { name: "Workflow Optimization", color: "bg-gray-200" },
                    { name: "Reporting", color: "bg-gray-200" },
                    { name: "Integrations", color: "bg-gray-200" },
                    { name: "Scalability", color: "bg-gray-200" },
                    { name: "Security", color: "bg-gray-200" },
                    { name: "Collaboration", color: "bg-gray-200" },
                    { name: "Customization", color: "bg-gray-200" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className={`${tech.color} rounded-full px-4 py-2 text-sm font-medium`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </Marquee>
                <Marquee>
                  {[
                    { name: "Workflow Optimization", color: "bg-gray-200" },
                    { name: "Reporting", color: "bg-gray-200" },
                    { name: "Integrations", color: "bg-gray-200" },
                    { name: "Scalability", color: "bg-gray-200" },
                    { name: "Security", color: "bg-gray-200" },
                    { name: "Collaboration", color: "bg-gray-200" },
                    { name: "Customization", color: "bg-gray-200" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className={`${tech.color} rounded-full px-4 py-2 text-sm font-medium`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </Marquee>
                {/* <img
                  alt="Issue template interface"
                  loading="lazy"
                  width="495"
                  height="186"
                  decoding="async"
                  data-nimg="1"
                  className="object-contain object-left-top"
                  style={{ color: "transparent" }}
                  src="/images/industries/enterprise.svg"
                /> */}
              </div>
              <div className="text-gray-500 h-full w-px absolute top-0 right-0 max-md:hidden">
                <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,#4B0082_4px,#4B0082_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
              </div>
              <div className="text-gray-500 h-px w-full absolute inset-x-0 bottom-0 md:hidden">
                <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#4B0082_4px,#4B0082_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
              </div>
            </div>
            <div className="relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 flex-1 [&amp;>.title-container]:mb-5 md:[&amp;>.title-container]:mb-8 md:[&amp;>.title-container]:translate-x-2 xl:[&amp;>.title-container]:translate-x-4 [&amp;>.title-container]:translate-x-0">
              <div className=" relative min-h-[10rem]">
                <h3 className="lg:text-3xl sm:text-2xl font-semibold mb-2 tracking-tight text-indigo-600">
                  E-commerce Solutions
                </h3>
                <p className="text-black/65 text-lg font-medium tracking-tight">
                  {/* We have to use the keyword like order management, inventory management with upto three line content*/}
                  {/* We are providing the cusotm saas for that so we think like that and make the content */}
                  E-commerce solutions are tailored to help businesses manage
                  their online stores efficiently. From inventory management to
                  order processing, we provide tools that enhance the customer
                  experience and drive sales growth.
                </p>
              </div>
              <div
                className="image-container grid grid-cols-1 gap-4 sm:mt-4 mt-0"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                }}
              >
                <Marquee>
                  {[
                    { name: "Order Management", color: "bg-gray-200" },
                    { name: "Inventory Management", color: "bg-gray-200" },
                    { name: "Payment Processing", color: "bg-gray-200" },
                    { name: "Cart & Checkout", color: "bg-gray-200" },
                    { name: "Shipping & Fulfillment", color: "bg-gray-200" },
                    { name: "Customer Insights", color: "bg-gray-200" },
                    { name: "Storefront Design", color: "bg-gray-200" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className={`${tech.color} rounded-full px-4 py-2 text-sm font-medium`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </Marquee>
                <Marquee reverse>
                  {[
                    { name: "Order Management", color: "bg-gray-200" },
                    { name: "Inventory Management", color: "bg-gray-200" },
                    { name: "Payment Processing", color: "bg-gray-200" },
                    { name: "Cart & Checkout", color: "bg-gray-200" },
                    { name: "Shipping & Fulfillment", color: "bg-gray-200" },
                    { name: "Customer Insights", color: "bg-gray-200" },
                    { name: "Storefront Design", color: "bg-gray-200" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className={`${tech.color} rounded-full px-4 py-2 text-sm font-medium`}
                    >
                      {tech.name}
                    </div>
                  ))}
                </Marquee>
              </div>
              {/* <div className="image-container grid grid-cols-1 gap-4">
                <img
                  alt="Issue template interface"
                  loading="lazy"
                  width="495"
                  height="186"
                  decoding="async"
                  data-nimg="1"
                  className="object-contain object-left-top"
                  style={{ color: "transparent" }}
                  src="/images/industries/enterprise.svg"
                />
              </div> */}
            </div>
          </div>
          <div className="text-muted-foreground relative h-px w-full container scale-x-110 overflow-hidden">
            <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,#4B0082_4px,#4B0082_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
          </div>
          <div className="relative container grid  md:grid-cols-3 sm:px-0 px-4">
            <div className="relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 md:pb-0 [&amp;>.title-container]:mb-5 md:[&amp;>.title-container]:mb-8 xl:[&amp;>.image-container]:translate-x-6 [&amp;>.image-container]:translate-x-2">
              <div className="title-container text-balance space-y-2">
                <h3 className="lg:text-3xl sm:text-2xl font-semibold tracking-tight text-indigo-600">
                  Education
                </h3>

                <p className="text-black/65 text-lg font-medium tracking-tight">
                  Our education solutions enhance learning experiences, foster
                  collaboration, and streamline administrative processes. We
                  provide tools that empower educators and students to achieve
                  their goals, ensuring a seamless and engaging learning
                  environment.
                </p>
              </div>
              <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden"></div>
              <div className="image-container grid grid-cols-1 gap-4">
                <img
                  alt="Illustration of an education management platform"
                  loading="lazy"
                  width="305"
                  height="280"
                  decoding="async"
                  data-nimg="1"
                  className="object-contain object-left-top"
                  style={{ color: "transparent" }}
                  src="/images/industries/eduHome.svg"
                />
              </div>
              <div className="text-muted-foreground h-full w-px absolute top-0 right-0 max-md:hidden">
                <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
              </div>
              <div className="text-muted-foreground h-px w-full absolute inset-x-0 bottom-0 md:hidden">
                <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
              </div>
            </div>
            <div className="relative flex flex-col px-0 py-6 md:px-6 md:py-8 md:pb-0 justify-normal [&amp;>.title-container]:mb-5 md:[&amp;>.title-container]:mb-0 [&amp;>.image-container]:flex-1 md:[&amp;>.image-container]:place-items-center md:[&amp;>.image-container]:-translate-y-3">
              <div className="title-container text-balance space-y-2">
                <h3 className="lg:text-3xl sm:text-2xl font-semibold tracking-tight text-indigo-600">
                  HealthCare
                </h3>
                <p className="text-black/65 text-lg font-medium tracking-tight">
                  Healthcare solutions improve patient outcomes, streamline
                  operations, and ensure compliance with industry regulations
                  and data-driven insights that enhance patient engagement and
                  streamline care delivery.
                </p>
              </div>
              <div className="image-container grid grid-cols-1 gap-4">
                <img
                  alt="Illustration of a healthcare management platform"
                  loading="lazy"
                  width="320"
                  height="103"
                  decoding="async"
                  data-nimg="1"
                  className="object-contain object-left-top"
                  style={{ color: "transparent" }}
                  src="/images/industries/doc.svg"
                />
              </div>
              <div className="text-muted-foreground h-full w-px absolute top-0 right-0 max-md:hidden">
                <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
              </div>
              <div className="text-muted-foreground h-px w-full absolute inset-x-0 bottom-0 md:hidden">
                <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
              </div>
            </div>
            <div className="relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8 md:pb-0 [&amp;>.title-container]:mb-5 md:[&amp;>.title-container]:mb-8 xl:[&amp;>.image-container]:translate-x-6 [&amp;>.image-container]:translate-x-2">
              <div className="title-container text-balance space-y-2">
                <h3 className="lg:text-3xl sm:text-2xl font-semibold tracking-tight text-indigo-600">
                  Construction
                </h3>
                <p className="text-black/65 text-lg font-medium tracking-tight">
                  Construction solutions optimize project management, enhance
                  safety protocols, and ensure timely delivery while adhering to
                  budget constraints with improve efficiency, reduce costs, and
                  foster collaboration across all stages of the construction
                  process.
                </p>
              </div>
              <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden"></div>
              <div className="image-container grid grid-cols-1 gap-4">
                <Image
                  alt="Illustration of a construction project management platform"
                  loading="lazy"
                  width="400"
                  height="400"
                  className="object-cover"
                  style={{ color: "transparent" }}
                  src="/images/industries/conHome.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-muted-foreground relative h-px w-full container scale-x-110 overflow-hidden">
          <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
        </div>
      </div>
    </section>
  );
}
