import { BadgeAlertIcon } from "@/components/animation/currency/currency";
import FeatureCard from "@/components/feature-card";
import AboutSchema from "@/components/seo/aboutSchema";
import Fund from "@/components/web/aboutus/fund";
import AboutHero from "@/components/web/aboutus/hero";
import Story from "@/components/web/aboutus/story";
import { SERVICE_FEATURES } from "@/data/data";
import Link from "next/link";

// metadata
export const metadata = {
  title: "About Webmints | Custom SaaS Development Company UK",
  description:
    "Meet Webmints, a custom SaaS development company building tailored software for enterprise, healthcare, construction, and e-commerce businesses across the UK.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/about-us",
    images: ["/opengraph-image.png"],
  },
};

const page = () => {
  return (
    <>
      <AboutSchema />
      <Fund />
      <AboutHero />
      <Story />
      {/* <FeaturesSection /> */}
      <section
        className="w-full py-16 px-4 font-grotesk"
        style={{ backgroundColor: "rgb(250,250,250)" }}
      >
        <div className="max-w-7xl mx-auto rounded-xl">
          <div className="text-sm font-semibold text-indigo-600 mb-2">
            Managing Every Aspect
          </div>
          <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter">
            We Handle the Tech, You Focus on{" "}
            <span className="text-indigo-600 whitespace-nowrap">Growth</span>
          </h2>
          <p className="text-lg font-medium leading-snug text-gray-600 max-w-4xl mb-8 tracking-tight">
            From cloud infrastructure to user experience design, our team has
            the skills and experience to deliver end-to-end SaaS solutions that
            drive real business results.
          </p>
          <FeatureCard features={SERVICE_FEATURES} />
          <div className="flex mt-8 max-w-[1200px] items-start space-x-1.5">
            <BadgeAlertIcon size={20} className="text-black/50" />
            <div className="text-sm font-medium text-black/50 tracking-tight">
              <strong>Webmints</strong> is your full-service partner for{" "}
              <strong>Custom Software Development</strong>. From initial concept
              to <strong>Ongoing Support</strong>, we manage every aspect of
              your software journey.
              <Link className="font-bold" href="/contact">
                {" "}
                Get in touch to learn more.
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
