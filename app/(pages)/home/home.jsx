import { BadgeAlertIcon } from "@/components/animation/currency/currency";
import { UniqueAccordion } from "@/components/animation/interactive-accordion";
import HomeSchema from "@/components/seo/homeSchema";
import Cta from "@/components/web/cta";
import Footer from "@/components/web/footer";
import HomeHero from "@/components/web/home/hero";
import Industry from "@/components/web/home/industry";
import KeyFeature from "@/components/web/home/key-feature";
import { SiteHeader } from "@/components/web/site-header";
import { SERVICES } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <HomeSchema />
      <SiteHeader />
      <HomeHero />
      <KeyFeature />
      <WhyChooseWebMintsNew />
      <Services />
      <Industry />
      <FeaturesShowcase />
      <HowItWorksNew />
      {/* <SaasPricingCalculator /> */}
      <Cta />
      <Footer /> {/* Footer Section finalized */}
    </>
  );
};

export default HomePage;

export function HowItWorksNew() {
  const processSteps = [
    {
      title: "Fill Out the",
      description: "Form",
      // description: "Provide us with your business details and requirements.",
      imgSrc: "/images/step/form.webp",
      // "https://images.unsplash.com/photo-1506765515384-028b60a970df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9ybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Meet Our",
      description: "Team",
      // description:
      //   "Discuss your needs and goals with our expert SaaS developers.",
      imgSrc: "/images/step/team.webp",
      // "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Launch and",
      description: "Optimize",
      // description:
      //   "We develop, deploy, and fine-tune your custom SaaS solution.",
      imgSrc:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Fhc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Scale Your",
      description: "Success",
      // description:
      //   "Grow your business with our scalable and reliable SaaS platform.",
      imgSrc: "/images/step/success.webp",
      // "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    },
  ];

  return (
    <section className="pt-16 pb-16 lg:pt-32 lg:pb-32 border-b border-gray-100 font-grotesk">
      <div className="lg:mx-auto max-w-[80rem] px-6 sm:px-10">
        <div className="mb-16">
          <div className="text-sm font-semibold text-indigo-600 mb-2">
            Our Onboarding Process
          </div>
          <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter">
            Simple Process, Powerful{" "}
            <span className="text-indigo-600 whitespace-nowrap">Results</span>
          </h2>
          <p className="text-lg font-medium leading-snug text-gray-600 mb-8 tracking-tight">
            Our simple onboarding process makes it easy to get started with our
            SaaS solutions and become part of our growing community.
          </p>
        </div>
        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-8 gap-8">
          {/* <div className="flex flex-col xl:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black shrink-0">
                <span className="font-bold text-md text-white">1</span>
              </div>
              <div className="whitespace-nowrap font-medium">
                Fill Out the Form
              </div>
            </div>
            <div className="group flex flex-col bg-white border transition-all hover:translate-y-[-6px] hover:relative hover:z-10 hover:shadow-lg relative overflow-hidden rounded-tl-lg h-[12.5rem] w-full">
              <div
                className="absolute inset-0 "
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                  backgroundPosition: "0 0, 6px 6px",
                }}
              ></div>
              <img
                alt="install runners"
                loading="lazy"
                width="240"
                height="223"
                decoding="async"
                data-nimg="1"
                className="scale-[1.4] translate-y-20 translate-x-20 rounded-md border"
                style={{ color: "transparent" }}
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstall-runners.41a7546e.png&amp;w=640&amp;q=75"
              />
            </div>
          </div>
          <div className="flex flex-col xl:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black shrink-0">
                <span className="font-bold text-md text-white">2</span>
              </div>
              <div className="whitespace-nowrap font-medium">
                Meet Our <code className="bg-indigo-100 px-1">team</code>.
              </div>
            </div>
            <div className="group flex flex-col bg-white border transition-all hover:translate-y-[-6px] hover:relative hover:z-10 hover:shadow-lg relative overflow-hidden rounded-tl-lg h-[12.5rem] w-full">
              <div
                className="absolute inset-0 "
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                  backgroundPosition: "0 0, 6px 6px",
                }}
              ></div>
              <img
                alt="change runs-on"
                loading="lazy"
                width="240"
                height="152"
                decoding="async"
                data-nimg="1"
                className="scale-[1.4] translate-y-16 translate-x-20 rounded-md border"
                style={{ color: "transparent" }}
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkflow-change.e065d467.png&amp;w=640&amp;q=75"
              />
            </div>
          </div>
          <div className="flex flex-col xl:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black shrink-0">
                <span className="font-bold text-md text-white">3</span>
              </div>
              <div className="whitespace-nowrap font-medium">
                Launch and <code className="bg-indigo-100 px-1">optimize</code>.
              </div>
            </div>
            <div className="group flex flex-col bg-white border transition-all hover:translate-y-[-6px] hover:relative hover:z-10 hover:shadow-lg relative overflow-hidden rounded-tl-lg h-[12.5rem] w-full">
              <div
                className="absolute inset-0 "
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                  backgroundPosition: "0 0, 6px 6px",
                }}
              ></div>
              <img
                alt="faster tests"
                loading="lazy"
                width="240"
                height="187"
                decoding="async"
                data-nimg="1"
                className="scale-[1.4] translate-y-[4.5rem] translate-x-20 rounded-md border"
                style={{ color: "transparent" }}
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub-faster-tests.76c1ebc1.png&amp;w=640&amp;q=75"
              />
            </div>
          </div>
          <div className="flex flex-col xl:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black shrink-0">
                <span className="font-bold text-md text-white">4</span>
              </div>
              <div className="whitespace-nowrap font-medium">
                Scale Your <code className="bg-indigo-100 px-1">Success</code>.
              </div>
            </div>
            <div className="group flex flex-col bg-white border transition-all hover:translate-y-[-6px] hover:relative hover:z-10 hover:shadow-lg relative overflow-hidden rounded-tl-lg h-[12.5rem] w-full">
              <div
                className="absolute inset-0 "
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
                  backgroundSize: "8px 8px",
                  backgroundPosition: "0 0, 6px 6px",
                }}
              ></div>
              <img
                alt="faster tests"
                loading="lazy"
                width="240"
                height="187"
                decoding="async"
                data-nimg="1"
                className="scale-[1.4] translate-y-[4.5rem] translate-x-20 rounded-md border"
                style={{ color: "transparent" }}
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgithub-faster-tests.76c1ebc1.png&amp;w=640&amp;q=75"
              />
            </div>
          </div> */}

          {processSteps.map((step, index) => (
            <FeatureCard key={index} index={index} {...step} />
          ))}
        </div>
        <div className="flex mt-6 max-w-[1200px] items-start space-x-1.5">
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
            className="lucide lucide-badge-info w-5 h-5 text-black/50"
            aria-hidden="true"
          >
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
            <line x1="12" x2="12" y1="16" y2="12"></line>
            <line x1="12" x2="12.01" y1="8" y2="8"></line>
          </svg>
          <div className="text-sm font-medium text-black/50 tracking-tight">
            Want to learn more about our process?{" "}
            <Link className="font-bold" href="/schedule-call">
              Contact us
            </Link>
            .
          </div>
        </div>
      </div>
    </section>
  );
}

export function Services({ heading, description, supportingText }) {
  return (
    <section
      className="pt-8 pb-16 sm:pt-16 font-grotesk"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="lg:mx-auto max-w-[80rem] px-6 sm:px-10">
        <div className="text-sm font-semibold text-indigo-600 mb-2">
          Our Core Services
        </div>
        <div className="flex sm:-ml-10">
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
            className="lucide lucide-corner-down-right hidden sm:block w-10 h-10 rotate-[20deg] text-gray-400 transition-transform hover:rotate-0"
            aria-hidden="true"
          >
            <polyline points="15 10 20 15 15 20"></polyline>
            <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
          </svg>

          <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter">
            {heading ? (
              /* This allows the <span> inside your string to render as a real tag */
              // <span dangerouslySetInnerHTML={{ __html: heading }} />
              heading
            ) : (
              <>
                Custom SaaS Solutions with{" "}
                <span className="text-indigo-600 whitespace-nowrap">
                  No extra cost.
                </span>
              </>
            )}
          </h2>
        </div>
        <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
          {description
            ? description
            : "We offer end-to-end SaaS development services designed to help businesses automate operations and grow efficiently."}
          {/* Our solutions are
          tailored to your unique needs, ensuring you get the most value without
          any hidden fees. From initial consultation to deployment and ongoing
          support, we handle every aspect of your SaaS journey. */}
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((item, index) => (
            <WhychooseCard key={index} {...item} />
          ))}
        </div>
        <div className="flex mt-8 max-w-[1200px] items-start space-x-1.5">
          <BadgeAlertIcon size={20} className="text-black/50" />
          <div className="text-sm font-medium text-black/50 tracking-tight">
            {supportingText || (
              <>
                Each solution is built scalability, security, and usability in
                mind to ensure long-term success. If you have specific needs,{" "}
                <Link className="font-bold" href="/contact-us">
                  Get a Free Project Assessment
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseWebMintsNew() {
  const WhyChoose = [
    {
      title: "Fully customized SaaS platform",
      description:
        "Our platform is built from the ground up to deliver exceptional performance for your workloads, with low-latency networking and high-throughput storage.",
      imgSrc: "/images/why/1.webp",
      // "https://i.pinimg.com/1200x/99/ca/5c/99ca5cf82cf12df8801f7b2bef38d325.jpg",
    },
    {
      title: "Scalable cloud-based architecture",
      description:
        "Our SaaS solutions are built on a scalable cloud-based architecture that can easily handle increasing workloads as your business grows.",
      imgSrc: "/images/why/2.webp",
      // "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdWR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      title: "Robust security & compliance",
      description:
        "Security is our top priority. Our platform is designed with robust security features to protect your data and ensure compliance with industry regulations.",
      imgSrc: "/images/why/3.webp",
      // "https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQgc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      title: "Industry-specific solutions",
      description:
        "We understand that different industries have unique requirements. That's why we offer industry-specific SaaS solutions tailored to your business needs.",
      imgSrc: "/images/why/4.webp",
      // "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3VsdGFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    {
      title: "Transparent pricing & expert support",
      description:
        "We offer transparent pricing with no hidden fees, so you can budget effectively. Our expert support team is always available to assist you.",
      imgSrc: "/images/why/5.webp",
      // "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VzdG9tZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
  ];

  return (
    <section className="pt-16 pb-16 lg:pt-32 lg:pb-32 border-b border-gray-100 font-grotesk">
      <div className="lg:mx-auto max-w-[80rem] px-6 sm:px-10">
        <div className="">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div className="">
              <div className="text-sm font-medium text-indigo-600 mb-2">
                What sets us apart
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tighter">
                Why Business Choose Webmints
              </h2>
              <p className="text-lg text-gray-600 font-medium tracking-tight">
                Off-the-shelf software rarely fits real business needs. That's
                why we focus on{" "}
                <span className="text-indigo-500">Custom SaaS Development</span>{" "}
                solutions designed around your processes, not the other way
                around.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-block text-sm font-semibold text-indigo-600 hover:text-indigo-500 tracking-tight"
              >
                Talk to our experts &rarr;
              </Link>
              <div className="flex mt-6 max-w-[1200px] items-start space-x-1.5">
                <div className="text-sm font-medium text-black/50 tracking-tight">
                  Our team works closely with you from idea to launch, ensuring
                  your SaaS product is built for long-term success.
                </div>
              </div>
            </div>
            {WhyChoose.map((item, index) => (
              <WhychooseCard
                key={index}
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesShowcase() {
  return (
    <section
      className="bg-white text-black py-20 px-6 font-grotesk"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="container mx-auto">
        <div className="text-sm font-medium text-indigo-600 mb-2">
          How We Build
        </div>
        <h2 className="text-5xl font-bold text-black/85 tracking-tighter">
          Custom SaaS Solutions Tailored to Your&nbsp;Needs
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center lg:p-8 lg:bg-white lg:shadow-lg lg:border lg:border-gray-200 lg:rounded-3xl lg:mt-12 mt-8">
          <div className="relative h-[500px] overflow-hidden">
            <Image
              // src="https://need-spiny-01266573.figma.site/_assets/v11/5dc5b89d5bb6610e0c3299ca165a3fdf4a1f104d.png"
              src="/images/why/how-we-build.webp"
              alt="Abstract waves background"
              height={500}
              width={500}
              className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
            />
          </div>

          <UniqueAccordion />
        </div>
      </div>
    </section>
  );
}

function WhychooseCard({ title, description, imgSrc, link }) {
  return (
    <Link
      className="group flex flex-col border relative transition-all hover:translate-y-[-6px] hover:z-10 hover:shadow-lg bg-white px-0 py-0 overflow-hidden min-h-[400px]"
      href={link || "/contact-us"}
    >
      <div
        className="absolute inset-0 "
        style={{
          backgroundImage:
            "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "8px 8px",
          backgroundPosition: "0 0, 6px 6px",
        }}
      ></div>
      <div className="absolute inset-x-0 top-0 h-[200px] bg-gradient-to-b from-white via-white/100 to-transparent"></div>
      <div className="relative flex-1 flex flex-col">
        <div className="px-8 py-6 pb-2 relative flex-1">
          <h3 className="text-3xl font-bold mb-2 tracking-tight text-gray-800">
            {title}
          </h3>
          <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
            {description}
          </p>
        </div>
        <div className=" origin-top-left scale-[1.4] relative overflow-hidden h-[12.5rem] transform translate-x-8 transition-transform duration-300">
          <Image
            alt={title}
            loading="lazy"
            width="600"
            height="600"
            decoding="async"
            data-nimg="1"
            className="border border-gray-100 rounded-md"
            src={imgSrc}
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </Link>
  );
}
function FeatureCard({ title, description, imgSrc, index }) {
  return (
    <div className="flex flex-col xl:col-span-2">
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black shrink-0">
          <span className="font-bold text-md text-white">{index + 1}</span>
        </div>
        <h3 className="whitespace-nowrap font-medium text-black/85">
          {title}{" "}
          <code className="bg-indigo-100 rounded-sm px-1 py-0.5">
            {description}
          </code>
          .
        </h3>
      </div>
      <div className="group flex flex-col bg-white border transition-all hover:translate-y-[-6px] hover:relative hover:z-10 hover:shadow-lg relative overflow-hidden rounded-tl-lg h-[12.5rem] w-full">
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage:
              "radial-gradient(circle, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "8px 8px",
            backgroundPosition: "0 0, 6px 6px",
          }}
        ></div>
        <Image
          alt={title}
          loading="lazy"
          width="240"
          height="187"
          decoding="async"
          data-nimg="1"
          className="scale-[1.4] translate-y-[4.5rem] translate-x-20 rounded-md border"
          style={{ color: "transparent" }}
          src={imgSrc}
        />
      </div>
    </div>
  );
}
