import Link from "next/link";
import {
  BarChart2,
  Shield,
  Users,
  Zap,
  Clock,
  Database,
  Globe,
  Layers,
  Settings,
  FileText,
  Lock,
  PhoneCall,
  Headphones,
} from "lucide-react";
import {
  Section1,
  Section2,
  Section3,
} from "@/components/web/features/section-1";
import { CTANEW } from "@/components/web/cta";
import Image from "next/image";
import { HowItWorksNew } from "../home/home";
import FeaturesSchema from "@/components/seo/featureSchema";

export const metadata = {
  title: "Custom SaaS Features: Security, Billing & Integrations",
  description:
    "Explore Webmints' custom SaaS features, including multi-tenant architecture, enterprise-grade security, billing engines, and third-party integrations.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/features",
    images: ["/opengraph-image.png"],
  },
};

export default function FeaturesPage() {
  return (
    <main className="flex flex-col gap-16 pb-16">
      <FeaturesSchema />
      {/* Hero Section */}
      <section className="py-32 font-grotesk">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
            <h1 className="font-bold text-black/85 mb-2 text-6xl tracking-tighter">
              Powerful Capabilities Behind Scalable SaaS Solutions
            </h1>
            <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mx-auto">
              At WebMints, we build modern SaaS platforms and automation systems
              using a robust, scalable, and secure architecture. Our features
              and capabilities are designed to support complex workflows,
              seamless integrations, and long-term business growth.
            </p>
            <div className="flex gap-4 items-center justify-center mt-4">
              <Link
                href={"/schedule-call"}
                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold h-10 px-4 rounded-md gap-2 group"
              >
                <PhoneCall className="group-hover:animate-pulse size-4" />
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-20 grid max-w-screen-lg gap-20 md:grid-cols-3 border border-dashed p-8 rounded-lg">
            <div>
              <Image
                src="/images/features/multi-tenant.svg"
                alt="Scalable Architecture"
                width={64}
                height={64}
                className="shrink-0 size-8 mb-2"
              />

              <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-700">
                Multi-Tenant Architecture
              </h3>
              <p className="text-base mb-4 font-medium tracking-tight leading-snug text-gray-600">
                Our platform is built on a multi-tenant architecture, allowing
                for efficient resource sharing and cost-effective scalability.
              </p>
            </div>
            <div>
              <Image
                src="/images/features/white-label.svg"
                alt="Scalable Architecture"
                width={64}
                height={64}
                className="shrink-0 size-8 mb-2"
              />
              <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-700">
                White Labeling Support
              </h3>
              <p className="text-base mb-4 font-medium tracking-tight leading-snug text-gray-600">
                Customize the platform with your branding, colors, and logo to
                create a unique experience for your customers.
              </p>
            </div>
            <div>
              <Image
                src="/images/features/modular.svg"
                alt="Scalable Architecture"
                width={64}
                height={64}
                className="shrink-0 size-8 mb-2"
              />
              <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-700">
                Modular Add-ons
              </h3>
              <p className="text-base mb-4 font-medium tracking-tight leading-snug text-gray-600">
                Add-ons to enhance your platform's functionality. Whether it's
                advanced analytics, AI-driven insights, or custom integrations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-10 lg:py-20 px-4 sm:px-6 lg:px-8 mx-auto font-grotesk">
          <div className="relative flex sm:pe-6">
            <svg
              className="shrink-0 size-10 mt-1"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7692 13L21.6232 9.62218C21.7598 9.08182 22.3118 8.75743 22.8503 8.90104L35.9299 12.3889C36.4538 12.5286 36.7709 13.0604 36.6448 13.5877L31.6111 34.6379C31.4799 35.1865 30.9213 35.5181 30.377 35.3706L30.2319 35.3312"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M26.8715 14.64H11.8715C11.3192 14.64 10.8715 15.0877 10.8715 15.64V32.6117C10.8715 33.0112 11.1092 33.3723 11.4761 33.5303L20.835 37.5585C20.9598 37.6123 21.0944 37.64 21.2303 37.64H26.8715C27.4237 37.64 27.8715 37.1923 27.8715 36.64V15.64C27.8715 15.0877 27.4237 14.64 26.8715 14.64Z"
                fill="#C084FC"
              ></path>
              <path
                d="M20.2703 37.3917L11.9684 33.9626C11.6805 33.8437 11.7421 33.4192 12.0519 33.387L18.4396 32.7235C18.9086 32.6748 19.3478 32.9603 19.4938 33.4086L20.6701 37.0216C20.7494 37.265 20.5069 37.4894 20.2703 37.3917Z"
                fill="#DDD6FE"
              ></path>
              <path
                d="M15.0923 19.5H20.0923"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M15.0923 23.5H23.5923"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M15.0923 27.5H23.5923"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <rect
                x="1.5"
                y="1"
                width="43"
                height="44"
                rx="11"
                stroke="#2563EB"
                strokeWidth="2"
              ></rect>
            </svg>
            <div className="ms-6">
              <h2 className="font-semibold mb-1 tracking-tight">
                840+ Free Components &amp; Examples
              </h2>
              <p className="text-gray-600 leading-normal dark:text-neutral-400">
                Hundreds of component examples for all your website needs that
                meet accessibility criteria.
              </p>
            </div>
          </div>

          <div className="relative flex pt-6 sm:pt-0 sm:ps-6">
            <svg
              className="shrink-0 size-10 mt-1"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6173 24.3255L28.5817 11.2159C28.8383 10.7329 29.5729 10.9534 29.521 11.4979L28.8072 18.9931C28.7807 19.2716 28.9877 19.5176 29.2666 19.5391L34.5175 19.943C34.8716 19.9702 35.0852 20.3475 34.9264 20.6651L27.9314 34.6551C27.6847 35.1484 26.9383 34.9376 26.9861 34.3882L27.7152 26.0031C27.7393 25.7261 27.5327 25.4826 27.2554 25.4613L22.0205 25.0586C21.6612 25.0309 21.4482 24.6437 21.6173 24.3255Z"
                fill="#C084FC"
              ></path>
              <path
                d="M21.2589 18H11.2589C10.9828 18 10.7589 18.2239 10.7589 18.5V32C10.7589 32.2761 10.9828 32.5 11.2589 32.5H24.2589"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M13.7589 15H23.2589"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M16.7589 12H24.7589"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <rect
                x="1.16666"
                y="1"
                width="43"
                height="44"
                rx="11"
                stroke="#2563EB"
                strokeWidth="2"
              ></rect>
            </svg>
            <div className="ms-6">
              <h2 className="font-semibold mb-1 dark:text-white">
                Universal Framework Compatibility
              </h2>
              <p className="text-gray-600 leading-normal dark:text-neutral-400">
                Preline UI is fully compatible wherever Tailwind CSS is in
                action, from React to Vue and beyond.
              </p>
            </div>
            <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent sm:bg-gradient-to-t sm:w-px sm:h-full dark:via-neutral-700"></div>
          </div>

          <div className="relative flex pt-6 sm:pt-0 lg:ps-6">
            <svg
              className="shrink-0 size-10 mt-1"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.3593 14.8949C26.3838 14.8276 26.4311 14.769 26.4944 14.7274C26.5578 14.6858 26.6339 14.6635 26.712 14.6635C26.7901 14.6635 26.8662 14.6858 26.9295 14.7274C26.9928 14.769 27.0401 14.8276 27.0647 14.8949L27.7273 16.7026C28.0235 17.5085 28.7186 18.1401 29.6054 18.4092L31.5949 19.0113C31.6691 19.0336 31.7336 19.0766 31.7793 19.1341C31.825 19.1916 31.8497 19.2608 31.8497 19.3317C31.8497 19.4027 31.825 19.4719 31.7793 19.5294C31.7336 19.5869 31.6691 19.6299 31.5949 19.6522L29.6054 20.2543C29.168 20.3867 28.7706 20.6098 28.4446 20.906C28.1186 21.2023 27.873 21.5634 27.7273 21.9608L27.0647 23.7685C27.0401 23.8359 26.9928 23.8945 26.9295 23.9361C26.8662 23.9776 26.7901 24 26.712 24C26.6339 24 26.5578 23.9776 26.4944 23.9361C26.4311 23.8945 26.3838 23.8359 26.3593 23.7685L25.6967 21.9608C25.551 21.5634 25.3054 21.2023 24.9794 20.906C24.6534 20.6098 24.2559 20.3867 23.8185 20.2543L21.829 19.6522C21.7549 19.6299 21.6904 19.5869 21.6447 19.5294C21.5989 19.4719 21.5743 19.4027 21.5743 19.3317C21.5743 19.2608 21.5989 19.1916 21.6447 19.1341C21.6904 19.0766 21.7549 19.0336 21.829 19.0113L23.8185 18.4092C24.2559 18.2768 24.6534 18.0537 24.9794 17.7574C25.3054 17.4612 25.551 17.1001 25.6967 16.7026L26.3593 14.8949V14.8949ZM31.6138 10.1517C31.6307 10.1074 31.6623 10.069 31.7044 10.0418C31.7464 10.0146 31.7967 10 31.8483 10C31.8999 10 31.9502 10.0146 31.9923 10.0418C32.0343 10.069 32.066 10.1074 32.0829 10.1517L32.5246 11.3558C32.7215 11.894 33.1855 12.3156 33.7779 12.4945L35.103 12.8959C35.1518 12.9113 35.1941 12.94 35.224 12.9782C35.2539 13.0164 35.27 13.0621 35.27 13.109C35.27 13.1559 35.2539 13.2016 35.224 13.2398C35.1941 13.278 35.1518 13.3068 35.103 13.3222L33.7779 13.7235C33.4859 13.8118 33.2206 13.9606 33.0031 14.1583C32.7855 14.356 32.6217 14.597 32.5246 14.8623L32.0829 16.0664C32.066 16.1107 32.0343 16.1491 31.9923 16.1763C31.9502 16.2034 31.8999 16.2181 31.8483 16.2181C31.7967 16.2181 31.7464 16.2034 31.7044 16.1763C31.6623 16.1491 31.6307 16.1107 31.6138 16.0664L31.172 14.8623C31.0749 14.597 30.9111 14.356 30.6935 14.1583C30.476 13.9606 30.2107 13.8118 29.9188 13.7235L28.5936 13.3222C28.5448 13.3068 28.5026 13.278 28.4727 13.2398C28.4427 13.2016 28.4267 13.1559 28.4267 13.109C28.4267 13.0621 28.4427 13.0164 28.4727 12.9782C28.5026 12.94 28.5448 12.9113 28.5936 12.8959L29.9188 12.4945C30.5112 12.3156 30.9751 11.894 31.172 11.3558L31.6138 10.1532V10.1517Z"
                fill="#2563EB"
              ></path>
              <path
                d="M16.2121 19.6897C13.8849 28.8812 20.5354 32.6479 25.4141 32.6534C25.9088 32.654 26.2133 33.3005 25.8326 33.6165C14.4769 43.0419 2.69149 27.0986 15.4777 19.1211C15.8588 18.8834 16.3224 19.2543 16.2121 19.6897Z"
                fill="#C084FC"
              ></path>
              <rect
                x="1.83331"
                y="1"
                width="43"
                height="44"
                rx="11"
                stroke="#2563EB"
                strokeWidth="2"
              ></rect>
            </svg>
            <div className="ms-6">
              <h2 className="font-semibold mb-1 dark:text-white">Dark Mode</h2>
              <p className="text-gray-600 leading-normal dark:text-neutral-400">
                All components include a dark variant that lets you style your
                site differently when dark mode is enabled.
              </p>
            </div>
            <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent sm:bg-gradient-to-t sm:w-px sm:h-full dark:via-neutral-700"></div>
          </div>
        </div>
      </section> */}
      <section
        className="py-20"
        style={{ backgroundColor: "rgb(250,250,250)" }}
      >
        <div className="container mx-auto px-4 font-grotesk">
          <div className="mb-16">
            <div className="text-sm font-semibold text-indigo-600 mb-2">
              Comprehensive Feature Set
            </div>
            <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter">
              Features that Drive{" "}
              <span className="text-indigo-600 whitespace-nowrap">Results</span>
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 mb-8 tracking-tight">
              Our platform is packed with powerful features designed to help you
              build, scale, and optimize your SaaS solutions with ease.
            </p>
          </div>
          <Section1 data={Section1Data[0]} />
          <Section2 data={Section2Data.slice(0, 2)} />
          <Section3 data={Section3Data[0]} className={"border-x border-t"} />
          <Section1 data={Section1Data[1]} />
          <Section2 data={Section2Data.slice(2, 4)} />
          <Section3 data={Section3Data[1]} className={"border"} />
        </div>
      </section>

      <section>
        <div className="container 2xl:max-w-[1400px] mx-auto p-4 py-12 font-grotesk">
          <div className="md:w-1/2">
            <p className="text-xs flex items-center font-medium uppercase text-gray-600 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 text-indigo-600"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                <path d="M14.5 5.5l4 4"></path>
                <path d="M12 8l-5 -5l-4 4l5 5"></path>
                <path d="M7 8l-1.5 1.5"></path>
                <path d="M16 12l5 5l-4 4l-5 -5"></path>
                <path d="M16 17l-1.5 1.5"></path>
              </svg>
              Built for modern builders
            </p>
            <h2 className="font-bold text-black/85 my-2 text-5xl tracking-tighter">
              Features that Drive{" "}
              <span className="text-indigo-600 whitespace-nowrap">Results</span>
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 mb-8 tracking-tight">
              Our platform is packed with powerful features designed to help you
              build, scale, and optimize your SaaS solutions with ease.
            </p>
            {/* <div className="flex items-center mt-8 space-x-4">
              <a
                href="/forms/sign-up"
                className="flex relative text-center font-medium items-center shadow-bottom justify-center overflow-hidden border border-transparent duration-300 ease-in-out transition-all outline-offset-4 hover:opacity-90 hover:shadow-none focus-visible:outline-none  focus:outline-2 focus:outline-teal-300  inset-shadow-xs inset-shadow-white/30 ring  active:inset-shadow-transparent text-white bg-gray-800  hover:bg-gray-900 ring-gray-800 h-10 px-4 py-3 text-base rounded-lg gap-2 group"
              >
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 duration-300 easy-out-in group-hover:translate-x-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </a>
              <a
                href="/forms/contact"
                className="flex relative text-center font-medium items-center shadow-bottom justify-center overflow-hidden border border-transparent duration-300 ease-in-out transition-all outline-offset-4 hover:opacity-90 hover:shadow-none focus-visible:outline-none  focus:outline-2 focus:outline-teal-300  inset-shadow-xs inset-shadow-white/30 ring  active:inset-shadow-transparent text-black bg-gray-100  hover:bg-gray-100 ring-gray-200 h-10 px-4 py-3 text-base rounded-lg gap-2 group"
              >
                Contact sales
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4 duration-300 easy-out-in group-hover:translate-x-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </a>
            </div> */}
          </div>
          <ul className="mt-12 overflow-hidden shadow-xl grid gap-px bg-gray-200 outline outline-gray-200 rounded-xl sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </ul>
        </div>
      </section>
      {/* <section>
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-10 lg:py-20 px-4 sm:px-6 lg:px-8 mx-auto font-grotesk">
          <div className="relative flex sm:pe-6">
            <svg
              className="shrink-0 size-10 mt-1"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.7692 13L21.6232 9.62218C21.7598 9.08182 22.3118 8.75743 22.8503 8.90104L35.9299 12.3889C36.4538 12.5286 36.7709 13.0604 36.6448 13.5877L31.6111 34.6379C31.4799 35.1865 30.9213 35.5181 30.377 35.3706L30.2319 35.3312"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M26.8715 14.64H11.8715C11.3192 14.64 10.8715 15.0877 10.8715 15.64V32.6117C10.8715 33.0112 11.1092 33.3723 11.4761 33.5303L20.835 37.5585C20.9598 37.6123 21.0944 37.64 21.2303 37.64H26.8715C27.4237 37.64 27.8715 37.1923 27.8715 36.64V15.64C27.8715 15.0877 27.4237 14.64 26.8715 14.64Z"
                fill="#C084FC"
              ></path>
              <path
                d="M20.2703 37.3917L11.9684 33.9626C11.6805 33.8437 11.7421 33.4192 12.0519 33.387L18.4396 32.7235C18.9086 32.6748 19.3478 32.9603 19.4938 33.4086L20.6701 37.0216C20.7494 37.265 20.5069 37.4894 20.2703 37.3917Z"
                fill="#DDD6FE"
              ></path>
              <path
                d="M15.0923 19.5H20.0923"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M15.0923 23.5H23.5923"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M15.0923 27.5H23.5923"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <rect
                x="1.5"
                y="1"
                width="43"
                height="44"
                rx="11"
                stroke="#2563EB"
                strokeWidth="2"
              ></rect>
            </svg>
            <div className="ms-6">
              <h2 className="font-semibold mb-1 tracking-tight">
                840+ Free Components &amp; Examples
              </h2>
              <p className="text-gray-600 leading-normal dark:text-neutral-400">
                Hundreds of component examples for all your website needs that
                meet accessibility criteria.
              </p>
            </div>
          </div>

          <div className="relative flex pt-6 sm:pt-0 sm:ps-6">
            <svg
              className="shrink-0 size-10 mt-1"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.6173 24.3255L28.5817 11.2159C28.8383 10.7329 29.5729 10.9534 29.521 11.4979L28.8072 18.9931C28.7807 19.2716 28.9877 19.5176 29.2666 19.5391L34.5175 19.943C34.8716 19.9702 35.0852 20.3475 34.9264 20.6651L27.9314 34.6551C27.6847 35.1484 26.9383 34.9376 26.9861 34.3882L27.7152 26.0031C27.7393 25.7261 27.5327 25.4826 27.2554 25.4613L22.0205 25.0586C21.6612 25.0309 21.4482 24.6437 21.6173 24.3255Z"
                fill="#C084FC"
              ></path>
              <path
                d="M21.2589 18H11.2589C10.9828 18 10.7589 18.2239 10.7589 18.5V32C10.7589 32.2761 10.9828 32.5 11.2589 32.5H24.2589"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M13.7589 15H23.2589"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <path
                d="M16.7589 12H24.7589"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
              <rect
                x="1.16666"
                y="1"
                width="43"
                height="44"
                rx="11"
                stroke="#2563EB"
                strokeWidth="2"
              ></rect>
            </svg>
            <div className="ms-6">
              <h2 className="font-semibold mb-1 dark:text-white">
                Universal Framework Compatibility
              </h2>
              <p className="text-gray-600 leading-normal dark:text-neutral-400">
                Preline UI is fully compatible wherever Tailwind CSS is in
                action, from React to Vue and beyond.
              </p>
            </div>
            <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent sm:bg-gradient-to-t sm:w-px sm:h-full dark:via-neutral-700"></div>
          </div>

          <div className="relative flex pt-6 sm:pt-0 lg:ps-6">
            <svg
              className="shrink-0 size-10 mt-1"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.3593 14.8949C26.3838 14.8276 26.4311 14.769 26.4944 14.7274C26.5578 14.6858 26.6339 14.6635 26.712 14.6635C26.7901 14.6635 26.8662 14.6858 26.9295 14.7274C26.9928 14.769 27.0401 14.8276 27.0647 14.8949L27.7273 16.7026C28.0235 17.5085 28.7186 18.1401 29.6054 18.4092L31.5949 19.0113C31.6691 19.0336 31.7336 19.0766 31.7793 19.1341C31.825 19.1916 31.8497 19.2608 31.8497 19.3317C31.8497 19.4027 31.825 19.4719 31.7793 19.5294C31.7336 19.5869 31.6691 19.6299 31.5949 19.6522L29.6054 20.2543C29.168 20.3867 28.7706 20.6098 28.4446 20.906C28.1186 21.2023 27.873 21.5634 27.7273 21.9608L27.0647 23.7685C27.0401 23.8359 26.9928 23.8945 26.9295 23.9361C26.8662 23.9776 26.7901 24 26.712 24C26.6339 24 26.5578 23.9776 26.4944 23.9361C26.4311 23.8945 26.3838 23.8359 26.3593 23.7685L25.6967 21.9608C25.551 21.5634 25.3054 21.2023 24.9794 20.906C24.6534 20.6098 24.2559 20.3867 23.8185 20.2543L21.829 19.6522C21.7549 19.6299 21.6904 19.5869 21.6447 19.5294C21.5989 19.4719 21.5743 19.4027 21.5743 19.3317C21.5743 19.2608 21.5989 19.1916 21.6447 19.1341C21.6904 19.0766 21.7549 19.0336 21.829 19.0113L23.8185 18.4092C24.2559 18.2768 24.6534 18.0537 24.9794 17.7574C25.3054 17.4612 25.551 17.1001 25.6967 16.7026L26.3593 14.8949V14.8949ZM31.6138 10.1517C31.6307 10.1074 31.6623 10.069 31.7044 10.0418C31.7464 10.0146 31.7967 10 31.8483 10C31.8999 10 31.9502 10.0146 31.9923 10.0418C32.0343 10.069 32.066 10.1074 32.0829 10.1517L32.5246 11.3558C32.7215 11.894 33.1855 12.3156 33.7779 12.4945L35.103 12.8959C35.1518 12.9113 35.1941 12.94 35.224 12.9782C35.2539 13.0164 35.27 13.0621 35.27 13.109C35.27 13.1559 35.2539 13.2016 35.224 13.2398C35.1941 13.278 35.1518 13.3068 35.103 13.3222L33.7779 13.7235C33.4859 13.8118 33.2206 13.9606 33.0031 14.1583C32.7855 14.356 32.6217 14.597 32.5246 14.8623L32.0829 16.0664C32.066 16.1107 32.0343 16.1491 31.9923 16.1763C31.9502 16.2034 31.8999 16.2181 31.8483 16.2181C31.7967 16.2181 31.7464 16.2034 31.7044 16.1763C31.6623 16.1491 31.6307 16.1107 31.6138 16.0664L31.172 14.8623C31.0749 14.597 30.9111 14.356 30.6935 14.1583C30.476 13.9606 30.2107 13.8118 29.9188 13.7235L28.5936 13.3222C28.5448 13.3068 28.5026 13.278 28.4727 13.2398C28.4427 13.2016 28.4267 13.1559 28.4267 13.109C28.4267 13.0621 28.4427 13.0164 28.4727 12.9782C28.5026 12.94 28.5448 12.9113 28.5936 12.8959L29.9188 12.4945C30.5112 12.3156 30.9751 11.894 31.172 11.3558L31.6138 10.1532V10.1517Z"
                fill="#2563EB"
              ></path>
              <path
                d="M16.2121 19.6897C13.8849 28.8812 20.5354 32.6479 25.4141 32.6534C25.9088 32.654 26.2133 33.3005 25.8326 33.6165C14.4769 43.0419 2.69149 27.0986 15.4777 19.1211C15.8588 18.8834 16.3224 19.2543 16.2121 19.6897Z"
                fill="#C084FC"
              ></path>
              <rect
                x="1.83331"
                y="1"
                width="43"
                height="44"
                rx="11"
                stroke="#2563EB"
                strokeWidth="2"
              ></rect>
            </svg>
            <div className="ms-6">
              <h2 className="font-semibold mb-1 dark:text-white">Dark Mode</h2>
              <p className="text-gray-600 leading-normal dark:text-neutral-400">
                All components include a dark variant that lets you style your
                site differently when dark mode is enabled.
              </p>
            </div>
            <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent sm:bg-gradient-to-t sm:w-px sm:h-full dark:via-neutral-700"></div>
          </div>
        </div>
      </section> */}
      <HowItWorksNew />

      {/* New Extra Feature */}
      {/* <div className=" bg-black">
        <section className="relative isolate mx-auto max-w-[63rem] py-32">
          <div className="absolute left-1/2 top-0 ml-[-50cqw] h-px w-[100cqw] bg-gradient-to-r from-white/0 via-white/15 to-white/0"></div>
          <div className="lg:flex lg:justify-between">
            <h2 className="max-w-md text-balance text-2xl font-semibold tracking-[-0.02em] text-white sm:text-4xl/9 lg:max-w-sm font-grotesk">
              Billing built for SaaS, with even more features on the way
            </h2>
            <p className="mt-3 text-pretty text-base text-gray-400 lg:mt-0 lg:max-w-md tracking-tight font-sans">
              Having built and scaled SaaS products ourselves, we know firsthand
              how complex billing becomes as you grow. That’s why we built our
              own billing engine from first principles - not just to solve
              today’s challenges, but to create a scalable, flexible platform
              that gives B2C and B2B startups complete control over how you
              charge your customers.
            </p>
          </div>
          <ul className="mt-32 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 md:gap-y-12 lg:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
            {coreFeatures.map((feature, index) => (
              <li key={index}>
                <h4 className="flex gap-2.5 font-medium text-white text-lg font-grotesk">
                  {feature.title}
                </h4>
                <p className="mt-2 text-gray-400 font-sans text-base">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div> */}

      {/* New Feature Categoris Section */}
      {/* <section className="py-32">
        <div className="border-y">
          <div className="container flex flex-col gap-4  border-x py-4 max-lg:border-x lg:py-8 px-8 mx-auto">
            <div>
              <ShinyText
                text="How It Works"
                className="bg-indigo-600 border border-indigo-700 text-white px-2 py-0.5 rounded-full text-xs font-medium cursor-pointer transition-colors"
              />
              <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl font-grotesk">
                Explore Feature Categories
              </h2>
            </div>
            <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground font-sans">
              Dive deeper into our feature sets designed to address specific
              business needs.
            </p>
          </div>
        </div>
        <div className="container border-x lg:!px-0 mx-auto">
          <div className="items-center">
            <div className="grid flex-1 max-lg:divide-y max-lg:border-x lg:grid-cols-3 lg:divide-x">
              <div className="relative isolate pt-5 text-start lg:pt-10">
                <div className="px-2 lg:px-8">
                  <BarChart className="size-10 bg-indigo-600 text-white rounded-full p-2" />
                </div>
                <h3 className="mt-2 px-4 text-lg font-semibold tracking-tight lg:px-8 font-grotesk">
                  Boost Your Team's Productivity
                </h3>
                <p className="pt-2 pb-6 text-muted-foreground lg:px-8 font-sans">
                  Our productivity features help your team work more
                  efficiently, collaborate seamlessly, and accomplish more in
                  less time.
                </p>
                <div className="border-t py-4 px-8">
                  <ul className="space-y-6">
                    {productivityFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 text-indigo-600">
                          {feature.icon}
                        </div>
                        <div>
                          <p className="font-medium">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative isolate pt-5 text-start lg:pt-10">
                <div className="px-2 lg:px-8">
                  <BarChart className="size-10 bg-indigo-600 text-white rounded-full p-2" />
                </div>
                <h3 className="mt-2 px-4 text-lg font-semibold tracking-tight lg:px-8 font-grotesk">
                  Enterprise-Grade Security
                </h3>
                <p className="pt-2 pb-6 text-muted-foreground lg:px-8 font-sans">
                  Protect your sensitive data with our comprehensive security
                  features designed to meet the highest standards.
                </p>
                <div className="border-t py-4 px-8">
                  <ul className="space-y-6">
                    {securityFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 text-indigo-600">
                          {feature.icon}
                        </div>
                        <div>
                          <p className="font-medium">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative isolate pt-5 text-start lg:pt-10">
                <div className="px-2 lg:px-8">
                  <BarChart className="size-10 bg-indigo-600 text-white rounded-full p-2" />
                </div>
                <h3 className="mt-2 px-4 text-lg font-semibold tracking-tight lg:px-8 font-grotesk">
                  Seamless Integration Capabilities
                </h3>
                <p className="pt-2 pb-6 text-muted-foreground lg:px-8 font-sans">
                  Connect with your existing tools and systems for a unified
                  workflow and enhanced productivity.
                </p>
                <div className="border-t py-4 px-8">
                  <ul className="space-y-6">
                    {integrationFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-1 text-indigo-600">
                          {feature.icon}
                        </div>
                        <div>
                          <p className="font-medium">{feature.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
          <div className="container h-full w-full border-x"></div>
        </div>
      </section> */}

      {/* Industry-Specific Features */}
      {/* <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Industry-Specific Features
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Our platform includes specialized features designed for the unique
            needs of different industries.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industriesFeature.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>
      </section> */}
      {/* Industry-Specific Technologies Section */}
      {/* <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
              Industry-Specific Technologies
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-sans">
              We leverage specialized technologies to address the unique
              requirements of different industries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryTechnologies.map((industry, index) => (
              <Card
                key={index}
                className="transition-all duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 text-3xl">{industry.icon}</div>
                  <CardTitle className="font-grotesk">
                    {industry.title}
                  </CardTitle>
                  <CardDescription className="font-sans">
                    {industry.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span className="font-grotesk">{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  >
                    <Link
                      href={`/industries/${industry.id}`}
                      className="font-grotesk"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Extra Section */}
      {/* <section className="bg-[#635BFF] text-white py-16">
        <div className="container mx-auto">
          <div className="relative isolate z-30 -mx-6  overflow-hidden  px-6 text-center text-white sm:-mx-px sm:rounded-xl sm:py-16 py-20">
            <p className="text-[0.875rem]/5 font-medium">
              Webmints is a Future partner of your business
            </p>
            <p className="mx-auto mt-4 text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl/snug">
              We are a team of experts who are passionate about building
              software that makes a difference. We are committed to delivering
              high-quality solutions that meet the needs of our clients and
              their customers. We believe in the power of collaboration and are
              dedicated to working closely with our clients to understand their
              unique challenges and goals. Our mission is to empower businesses
              with the tools they need to succeed in a rapidly changing digital
              landscape. We are committed to continuous improvement and
              innovation, and we are always looking for ways to enhance our
              platform and services.
            </p>
            <svg
              viewBox="0 0 159 66"
              aria-hidden="true"
              className="mx-auto mt-12 h-[3.125rem] sm:h-[4.125rem]"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M85.954 8.846 74.994 11.2V2.31L85.955 0v8.846Zm22.794 4.924c-4.28 0-7.03 2.005-8.559 3.4l-.567-2.702h-9.607V65.28l10.917-2.31.043-12.332c1.572 1.133 3.886 2.745 7.729 2.745 7.816 0 14.933-6.275 14.933-20.09-.043-12.637-7.248-19.523-14.889-19.523Zm-2.62 30.026c-2.577 0-4.105-.915-5.153-2.048l-.043-16.168c1.135-1.264 2.707-2.135 5.196-2.135 3.973 0 6.724 4.445 6.724 10.154 0 5.839-2.707 10.197-6.724 10.197Zm51.92-10.067c0-11.156-5.414-19.959-15.763-19.959-10.392 0-16.68 8.803-16.68 19.872 0 13.117 7.423 19.741 18.078 19.741 5.196 0 9.125-1.177 12.095-2.833v-8.715c-2.97 1.481-6.375 2.397-10.698 2.397-4.236 0-7.991-1.482-8.471-6.624h21.352c0-.24.016-.785.034-1.413v-.002c.024-.854.053-1.861.053-2.464Zm-21.57-4.14c0-4.924 3.013-6.972 5.764-6.972 2.663 0 5.501 2.048 5.501 6.972h-11.265ZM85.954 14.512h-10.96v38.13h10.96v-38.13Zm-23.396 0 .698 3.224c2.576-4.706 7.685-3.747 9.082-3.224v10.023c-1.353-.48-5.72-1.09-8.296 2.266v25.841H53.126v-38.13h9.431ZM41.42 5.055 30.767 7.32l-.044 34.906c0 6.45 4.847 11.2 11.31 11.2 3.58 0 6.2-.654 7.64-1.439v-8.846c-1.396.566-8.295 2.571-8.295-3.879v-15.47h8.296v-9.282h-8.296l.043-9.456ZM15.614 23.227c-2.314 0-3.711.654-3.711 2.353 0 1.856 2.404 2.672 5.388 3.685 4.863 1.65 11.264 3.824 11.291 11.873 0 7.8-6.244 12.289-15.326 12.289-3.755 0-7.86-.741-11.92-2.484V40.57c3.668 2.005 8.296 3.486 11.92 3.486 2.445 0 4.192-.653 4.192-2.658 0-2.056-2.607-2.995-5.754-4.13C6.901 35.543.855 33.364.855 26.104c0-7.713 5.895-12.333 14.76-12.333 3.623 0 7.204.567 10.828 2.005v10.24c-3.319-1.786-7.51-2.788-10.829-2.788Z"
              ></path>
            </svg>
            <div className="absolute left-1/2 top-full -z-10 -mt-10 ml-[-48.125rem] aspect-[1540/708] w-[96.25rem] sm:-mt-28 md:-mt-20"></div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTANEW />
    </main>
  );
}

// Core Features Data
const coreFeatures = [
  {
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with powerful analytics tools and customizable dashboards tailored to your business needs.",
    icon: <BarChart2 className="size-5" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Protect your sensitive data with enterprise-grade security features and compliance controls.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Enhance productivity with tools designed for seamless team collaboration and communication.",
    icon: <Users className="size-5" />,
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your existing tools and systems for a unified workflow and enhanced productivity.",
    icon: <Zap className="size-5" />,
  },
  {
    title: "Automation",
    description:
      "Save time and reduce errors by automating repetitive tasks and workflows.",
    icon: <Clock className="size-5" />,
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Our cloud-based platform grows with your business, ensuring performance at any scale.",
    icon: <Database className="size-5" />,
  },
  {
    title: "Customizable Workflows",
    description:
      "Tailor workflows to fit your unique business processes and improve efficiency.",
    icon: <Settings className="size-5" />,
  },
  {
    // CTA
    title: "Contact Sales Team",
    description:
      "Get assistance whenever you need it with our dedicated support team available around the clock.",
    icon: <Headphones className="size-5" />,
    link: "/contact-sales",
  },
];

// Productivity Features
const productivityFeatures = [
  {
    title: "Task Management",
    description:
      "Create, assign, and track tasks with deadlines, priorities, and custom fields.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Real-time document editing, commenting, and version control for seamless teamwork.",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and processes with customizable workflow rules.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Project Management",
    description:
      "Plan, execute, and track projects with Gantt charts, Kanban boards, and resource allocation.",
    icon: <Layers className="h-5 w-5" />,
  },
];

// Security Features
const securityFeatures = [
  {
    title: "Role-Based Access Control",
    description:
      "Define precise permissions for users based on their roles and responsibilities.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Data Encryption",
    description:
      "End-to-end encryption for data at rest and in transit using industry-standard protocols.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    title: "Compliance Management",
    description:
      "Tools to help maintain compliance with GDPR, HIPAA, SOC 2, and other regulations.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Audit Logging",
    description:
      "Comprehensive audit trails for all system activities to monitor and investigate events.",
    icon: <Clock className="h-5 w-5" />,
  },
];

// Integration Features
const integrationFeatures = [
  {
    title: "API Access",
    description:
      "Robust API for custom integrations and extending platform functionality.",
    icon: <Settings className="h-5 w-5" />,
  },
  {
    title: "Pre-built Connectors",
    description:
      "Ready-to-use integrations with popular business tools and services.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    title: "Data Import/Export",
    description:
      "Easily move data in and out of the platform with flexible import/export tools.",
    icon: <Database className="h-5 w-5" />,
  },
  {
    title: "Webhook Support",
    description:
      "Create automated workflows between our platform and other services using webhooks.",
    icon: <Globe className="h-5 w-5" />,
  },
];

// Analytics Features
const analyticsFeatures = [
  {
    title: "Custom Dashboards",
    description:
      "Build personalized dashboards with drag-and-drop widgets for your key metrics.",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "Advanced Reporting",
    description:
      "Generate detailed reports with custom filters, grouping, and visualization options.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Predictive Analytics",
    description:
      "Leverage AI-powered insights to forecast trends and make data-driven decisions.",
    icon: <BarChart2 className="h-5 w-5" />,
  },
  {
    title: "Real-time Monitoring",
    description:
      "Track key performance indicators in real-time with automated alerts and notifications.",
    icon: <Clock className="h-5 w-5" />,
  },
];

const Section1Data = [
  {
    icon: <BarChart2 className="h-4 w-4 text-indigo-600" />,
    subtitle: "Data-Driven Insights",
    title: "Scalable Analytics Solutions",
    description:
      "We design SaaS platforms using scalable, cloud-native architectures that can handle growing user bases and data loads. This includes microservices, containerization, and serverless computing.",
    description2:
      "Our architecture focuses on modularity, allowing individual components to be updated or scaled independently, ensuring optimal performance and reliability.",
    features: [
      {
        icon: <Database className="h-4 w-4" />,
        title: "Multi-tenant SaaS Architecture",
      },
      {
        icon: <BarChart2 className="h-4 w-4" />,
        title: "Modular and extensible design",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "High availability and performance",
      },
      {
        icon: <Shield className="h-4 w-4" />,
        title: "Robust security and compliance",
      },
    ],
  },
  {
    icon: <Users className="h-4 w-4 text-indigo-600" />,
    subtitle: "Seamless Integrations",
    title: "API Integrations & Third-Party Tools",
    description:
      "We build SaaS platforms with robust integration capabilities, allowing businesses to connect with third-party services and tools seamlessly. Our solutions include API development, pre-built connectors, and webhook support.",
    description2:
      "These integrations enable businesses to streamline workflows, enhance functionality, and improve overall efficiency by leveraging existing tools and services.",
    features: [
      {
        icon: <Settings className="h-4 w-4" />,
        title: "Comprehensive API development",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Payment gateway integrations",
      },
      {
        icon: <Database className="h-4 w-4" />,
        title: "CRM, ERP, and marketing tools",
      },
      {
        icon: <Globe className="h-4 w-4" />,
        title: "CRM, ERP, and marketing tools",
      },
    ],
  },
];

const Section2Data = [
  {
    title: "Scalable SaaS Architecture",
    description:
      "Our SaaS platforms are built on scalable architectures that can efficiently handle increasing user loads and data volumes. We utilize cloud-native technologies, microservices, and containerization to ensure that our platforms can grow seamlessly with your business needs.",
    description2:
      "This approach allows for modular development, enabling us to update and scale individual components without disrupting the entire system, ensuring high availability and performance.",
    features: [
      {
        icon: <Layers className="h-4 w-4" />,
        title: "Workflow automation for approvals",
        description:
          "Streamlining business operations with automated task management.",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Rule-based task automation",
        description:
          "Automating repetitive tasks based on predefined rules to enhance efficiency.",
      },
      {
        icon: <Clock className="h-4 w-4" />,
        title: "Role-based access and permissions",
        description:
          "Ensuring secure access to features and data based on user roles.",
      },
      {
        icon: <FileText className="h-4 w-4" />,
        title: "Automated notifications and triggers",
        description:
          "Keeping users informed with real-time alerts and updates.",
      },
    ],
  },
  {
    title: "CRM & Data Management Capabilities",
    description:
      "We develop SaaS platforms with robust CRM and data management features to help businesses effectively manage customer relationships and data. Our solutions include contact management, lead tracking, sales pipeline management, and data analytics.",
    description2:
      "These capabilities enable businesses to gain insights into customer behavior, improve sales processes, and enhance overall customer satisfaction.",
    features: [
      {
        icon: <Shield className="h-4 w-4" />,
        title: "Custom CRM workflows",
        description:
          "Tailoring customer relationship processes to fit unique business needs.",
      },
      {
        icon: <Lock className="h-4 w-4" />,
        title: "Data synchronization across systems",
        description:
          " Ensuring consistent and up-to-date information across all platforms.",
      },
      {
        icon: <FileText className="h-4 w-4" />,
        title: "Lead, customer, and management",
        description:
          " Comprehensive tools to track customer relationships from lead to loyalty.",
      },
      {
        icon: <Clock className="h-4 w-4" />,
        title: "Secure data storage and access",
        description:
          "Protecting sensitive customer information with security measures.",
      },
    ],
  },
  //Analytics, Reporting & Dashboards
  {
    title: "Advanced Analytics & Reporting",
    description:
      "Our SaaS platforms feature advanced analytics and reporting capabilities that provide businesses with valuable insights into their operations. We offer customizable dashboards, real-time data visualization, and in-depth reporting tools to help businesses make informed decisions.",
    features: [
      {
        icon: <BarChart2 className="h-4 w-4" />,
        title: "Customizable dashboards",
        description:
          "Creating personalized views of key metrics and data visualizations.",
      },
      {
        icon: <FileText className="h-4 w-4" />,
        title: "Real-time data visualization",
        description:
          "Monitoring business performance with up-to-the-minute insights.",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Performance and usage metrics",
        description:
          "Generating comprehensive reports to analyze trends and performance.",
      },
      {
        icon: <Clock className="h-4 w-4" />,
        title: "Predictive analytics",
        description:
          "Leveraging data to forecast future trends and inform decision-making.",
      },
    ],
  },
  // Performance, Scalability & Reliability
  {
    title: "Performance, Scalability & Reliability",
    description:
      "We build SaaS platforms with a focus on performance, scalability, and reliability. Our solutions are designed to handle high traffic volumes, ensure minimal downtime, and provide a seamless user experience. We utilize load balancing, caching, and auto-scaling techniques to optimize performance and ensure that our platforms can grow with your business needs.",
    features: [
      {
        icon: <Shield className="h-4 w-4" />,
        title: "Load and performance optimization",
        description:
          "Techniques to ensure fast response times and efficient resource usage.",
      },
      {
        icon: <Database className="h-4 w-4" />,
        title: "Scalable infrastructure",
        description:
          "Cloud-based solutions that grow with your business demands.",
      },
      {
        icon: <FileText className="h-4 w-4" />,
        title: "Error monitoring and logging",
        description:
          "Proactive identification and resolution of system issues to maintain uptime.",
      },
      {
        icon: <Clock className="h-4 w-4" />,
        title: "Continuous improvement",
        description:
          "Ongoing enhancements to ensure optimal performance and satisfaction.",
      },
    ],
  },
];

const Section3Data = [
  {
    icon: <Zap className="h-4 w-4 text-indigo-600" />,
    subtitle: "Seamless Integrations",
    title: "Secure data storage and access",
    description:
      "We build SaaS platforms with robust integration capabilities, allowing businesses to connect with third-party services and tools seamlessly. Our solutions include API development, pre-built connectors, and webhook support.",
    features: [
      {
        icon: <Settings className="h-4 w-4" />,
        title: "Cloud-native deployment",
        description:
          "Enabling easy scaling and management of applications in cloud environments.",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Authentication and Authorization",
        description:
          "Implementing industry-standard security protocols to protect data and user access.",
      },
      {
        icon: <Database className="h-4 w-4" />,
        title: "Data encryption and access control",
        description:
          "Ensuring sensitive information is protected both at rest and in transit.",
      },
      {
        icon: <Globe className="h-4 w-4" />,
        title: "Compliance-ready architecture",
        description:
          "Systems that meet regulatory requirements such as GDPR, HIPAA, & SOC2.",
      },
    ],
  },
  // Designed for Growth & Flexibility
  {
    icon: <Layers className="h-4 w-4 text-indigo-600" />,
    subtitle: "Modular & Extensible",
    title: "Designed for Growth & Flexibility",
    description:
      "We design SaaS platforms using scalable, cloud-native architectures that can handle growing user bases and data loads. This includes microservices, containerization, and serverless computing.",
    features: [
      {
        icon: <Database className="h-4 w-4" />,
        title: "Add new features without disruption",
        description:
          "Enabling continuous innovation while maintaining core functionality.",
      },
      {
        icon: <BarChart2 className="h-4 w-4" />,
        title: "Scale users and data easily",
        description:
          "Supporting business growth with flexible resource allocation.",
      },
      {
        icon: <Zap className="h-4 w-4" />,
        title: "Customize workflows per team or role",
        description:
          "Tailoring processes to fit specific business needs and improve efficiency.",
      },
      {
        icon: <Shield className="h-4 w-4" />,
        title: "Integrate tools as your business",
        description:
          "Maintaining compatibility with emerging technologies and services.",
      },
    ],
  },
];

function FeatureCard({ feature }) {
  return (
    <li className="group flex h-full justify-between flex-col gap-12 lg:gap-24 bg-white px-5 relative pt-6 pb-[30px] transition-all md:min-h-[150px] cursor-pointer hover:bg-gray-50">
      {feature.link && (
        <Link
          className="absolute inset-0"
          href={feature.link}
          aria-label="Learn more about Bank accounts"
        ></Link>
      )}
      <div>
        <div className="flex">
          <div className="flex p-2 bg-indigo-600 rounded-lg transition-all duration-300 group-hover:bg-gray-800 text-white">
            {feature.icon}
          </div>
        </div>
        <div className="mt-2">
          <h3 className="text-base md:text-lg lg:text-xl font-bold mt-5 tracking-tight text-gray-600 md:text-balance">
            {feature.title}
          </h3>
          <p className="text-md mt-2 font-medium tracking-tight leading-snug text-gray-500">
            {feature.description}
          </p>
        </div>
      </div>
      {feature.link && (
        <p className="text-md mt-2 font-medium flex items-center tracking-tight leading-snug text-gray-600">
          {"Contact Sales"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 duration-300 ease-out group-hover:translate-x-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 6l6 6l-6 6"></path>
          </svg>
        </p>
      )}
    </li>
  );
}
