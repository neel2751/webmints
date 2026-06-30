import Industries from "./industries";
import { IndustyCta } from "@/components/web/industy-cta";
import { Services } from "../home/home";
import { BadgeAlertIcon } from "@/components/animation/currency/currency";
import Link from "next/link";

export const metadata = {
  title: "Industry-Specific SaaS Solutions for UK Businesses",
  description:
    "Webmints builds tailored SaaS platforms for enterprise, e-commerce, education, healthcare, and construction businesses across the UK. Find your industry.",
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/industries",
    images: ["/opengraph-image.png"],
  },
};

export default function IndustriesPage() {
  return (
    <main className="font-grotesk">
      <div className="container bg-white  2xl:max-w-[1400px] mx-auto p-4 relative py-12 lg:pt-24 overflow-hidden">
        <div className="relative text-center">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-6xl mt-8 font-bold tracking-tighter text-black/85 lg:text-balance">
            SaaS Solutions Tailored to Industry-Specific Needs
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mt-4 font-medium text-gray-600 md:text-balance tracking-tight mx-auto">
            Every industry operates differently - with unique workflows,
            compliance requirements, and business challenges. At WebMints, we
            build custom software platforms and automation solutions that are
            designed to fit the realities of each industy we serve.
            <br />
            <br />
            Rather than offering generic software, we tailor our technology to
            match industry-specific processes and goals.
          </p>
        </div>
      </div>
      <section className="container 2xl:max-w-[1400px] mx-auto p-4 pb-16">
        <Industries />
      </section>
      <Services
        heading={
          <>
            How Our Services Apply Across{" "}
            <span className="text-indigo-600 underline decoration-wavy">
              Industries
            </span>
          </>
        }
        description={
          "We offer a range of services that can be customized to meet the needs of various industries."
        }
        supportingText={
          "These services are customized and configured differently depending on industry requirements."
        }
      />
      <section className="py-28 lg:py-32 lg:pt-44 font-grotesk bg-gradient-to-b from-white to-gray-50">
        <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20 mx-auto 2xl:max-w-[1400px]">
          <div className="flex-1">
            <h2 className="font-heading text-4xl font-bold leading-tight text-black/85 md:text-5xl lg:text-6xl tracking-tight">
              Industy-Focused. Technology-Driven
              <span className=" text-indigo-600">.</span>
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mx-auto mt-5 ">
              Build software that aligns perfectly with your industry's
              workflows and challenges. Our expertise lies in creating tailored
              SaaS solutions that empower businesses across various sectors to
              thrive in a competitive landscape.
            </p>
            <div className="flex mt-8 max-w-[1200px] items-start space-x-1.5">
              <BadgeAlertIcon size={20} className="text-black/50" />
              <div className="text-sm font-medium text-black/50 tracking-tight">
                We partner closely with businesses to ensure technology supports
                their industry needs - not the other way around.{" "}
                <Link
                  className="font-bold text-indigo-600 hover:text-indigo-900"
                  href="/contact-us"
                >
                  Let's discuss your industry requirements.
                </Link>
              </div>
            </div>
          </div>
          <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
            <div className="text-muted-foreground h-full w-px absolute top-0 left-0 max-lg:hidden">
              <div className="h-full w-px bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
            <div className="text-muted-foreground h-px w-full absolute top-0 lg:hidden">
              <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]"></div>
            </div>
            <div className="flex gap-2.5 lg:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-circle-dot text-foreground mt-1 size-4 shrink-0 lg:size-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="1"></circle>
              </svg>
              <div>
                <h3 className="text-lg font-bold mb-1 tracking-tight text-gray-700">
                  Custom features built for your industry's workflows
                </h3>
                <p className="text-md font-medium tracking-tight leading-snug text-gray-500">
                  Software that fits your processes, not the other way around.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 lg:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-blend text-foreground mt-1 size-4 shrink-0 lg:size-5"
                aria-hidden="true"
              >
                <circle cx="9" cy="9" r="7"></circle>
                <circle cx="15" cy="15" r="7"></circle>
              </svg>
              <div>
                <h3 className="text-lg font-bold mb-1 tracking-tight text-gray-700">
                  Faster adoption by users & teams
                </h3>
                <p className="text-md font-medium tracking-tight leading-snug text-gray-500">
                  Solutions your team will actually use.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 lg:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-diamond text-foreground mt-1 size-4 shrink-0 lg:size-5"
                aria-hidden="true"
              >
                <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path>
              </svg>
              <div>
                <h3 className="text-lg font-bold mb-1 tracking-tight text-gray-700">
                  Scalable systems built for long-term growth
                </h3>
                <p className="text-md font-medium tracking-tight leading-snug text-gray-500">
                  Break projects down into concrete phases.
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 lg:gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chart-no-axes-column text-foreground mt-1 size-4 shrink-0 lg:size-5"
                aria-hidden="true"
              >
                <path d="M5 21v-6"></path>
                <path d="M12 21V3"></path>
                <path d="M19 21V9"></path>
              </svg>
              <div>
                <h3 className="text-lg font-bold mb-1 tracking-tight text-gray-700">
                  Better alignment with real-world workflows
                </h3>
                <p className="text-md  font-medium tracking-tight leading-snug text-gray-500">
                  Technology that truly supports your business processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <IndustyCta />
    </main>
  );
}
