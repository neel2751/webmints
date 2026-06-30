import Image from "next/image";
import { notFound } from "next/navigation";
import { HomePageIndustries } from "@/data/data";
import { IndustryDetailCta } from "@/components/web/industy-cta";
import { FAQ1 } from "@/components/animation/animation-faqs";
import JsonLd from "@/components/seo/JsonLd";

export async function generateMetadata({ params }) {
  const { industry } = await params;
  const data = HomePageIndustries.find((ind) => ind.id === industry)?.details;

  if (!data) {
    return { title: "Industry Not Found" };
  }
  return {
    title: data.meta.title || data.title,
    description:
      data.meta.description || data.shortDescription || data.description,
    alternates: {
      canonical: `/industries/${industry}`,
    },
    openGraph: {
      type: "website",
      siteName: "WebMints",
      url: `/industries/${industry}`,
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function IndustryPage({ params }) {
  const { industry } = await params;
  const industryData = HomePageIndustries.find(
    (ind) => ind.id === industry,
  )?.details;
  if (HomePageIndustries.findIndex((ind) => ind.id === industry) === -1) {
    return notFound();
  }

  return (
    <div className="flex flex-col pb-16 font-grotesk">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://www.webmints.in",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Industries",
              item: "https://www.webmints.in/industries",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: industryData?.title,
              item: `https://www.webmints.in/industries/${industry}`,
            },
          ],
        }}
      />
      {/* Hero Section */}
      <section className={`relative ${industryData?.bg} pb-16 lg:pb-20`}>
        <div className="container 2xl:max-w-[1400px] mx-auto p-4 relative py-12 lg:pt-32 overflow-hidden">
          <div className="relative">
            <h1
              className={`text-xs flex items-center font-medium uppercase gap-2 text-${industryData?.color}-600`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`size-4 text-${industryData?.color}-600`}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
              </svg>
              {industryData?.title}
            </h1>
            <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl mt-8 font-semibold tracking-tighter text-base-800 lg:text-balance">
              {industryData?.shortDescription}
            </h2>
            <p className="text-lg md:text-xl mt-4 font-medium text-gray-700 md:text-balance">
              {industryData?.description}
            </p>
          </div>
        </div>
      </section>
      {/* <section className="relative">
        <div className="absolute inset-0 after:absolute after:bg-indigo-600/10 after:top-0 after:left-0 after:w-full after:h-full">
          <Image
            src={"/images/industries/2.jpg"}
            alt={industryData.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="max-w-3xl text-white">
            <span className="text-5xl mb-4 inline-block">
              {industryData.icon}
            </span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
              {industryData.title}
            </h1>
            <p className="text-xl text-white/80 mb-8">
              {industryData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 font-medium text-base">
                Request Demo
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-indigo-600 bg-transparent font-medium text-base"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Benefits Section */}
      <section className="pb-32 ">
        <div className="border-y">
          <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8 px-8 mx-auto">
            <h2 className="font-bold text-black/80  text-5xl tracking-tighter">
              {industryData?.solveChallenges?.title}
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
              {industryData?.solveChallenges?.description}
            </p>
          </div>
        </div>
        <div className="container border-x px-0 mx-auto">
          <div className="flex flex-col items-stretch gap-0 divide-y rounded-none lg:flex-row lg:divide-x lg:divide-y-0">
            <div className="text-muted-foreground items-center justify-center flex h-auto w-full flex-col rounded-none border-b bg-transparent p-0 lg:w-1/2 lg:border-r lg:border-b-0">
              {industryData?.solveChallenges?.points?.map((point, index) => (
                <div
                  key={index}
                  className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent text-sm font-medium transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group relative flex w-full rounded-none px-4 py-4 text-start whitespace-normal data-[state=active]:shadow-none lg:px-6 lg:py-5 border-b"
                >
                  <div className="absolute bottom-[-1px] left-0 z-10 h-[2px] w-0 bg-linear-to-r from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2"></div>
                  <div className="flex w-full flex-col">
                    <div className="flex items-center gap-1.5">
                      <div className="size-8 p-1 border border-indigo-100 text-indigo-600 rounded-md flex items-center justify-center">
                        {point.icon}
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-gray-700">
                        {point.title}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-sm tracking-tight text-muted-foreground lg:text-base">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative flex-1 bg-[url('https://library.shadcnblocks.com/images/block/patterns/grid3.svg')] after:bg-black/80 after:top-0 after:left-0 after:h-full after:w-full after:absolute after:inset-0 after:-z-10">
              <div className="h-[300px] lg:h-[400px]">
                <div
                  role="tabpanel"
                  className="flex-1 outline-none absolute inset-0 m-0 rounded-none p-4 transition-all duration-500"
                >
                  <div className="flex h-full items-center justify-center w-full">
                    <Image
                      src="/images/industries/1.webp"
                      alt="Smart Task Management"
                      height={400}
                      width={400}
                      className="h-full w-full object-contain dark:invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
          <div className="container h-full w-full border-x"></div>
        </div>
      </section>
      {industryData?.templates &&
        industryData?.templates?.map((data, index) => (
          <div
            key={index}
            className="flex min-h-svh w-full justify-center bg-background text-foreground items-start"
          >
            <section className="w-full">
              <div className="container mx-auto">
                <div className="mx-auto flex flex-col justify-between gap-3 md:flex-row md:items-end md:gap-12">
                  <div className="flex basis-1/2 flex-col gap-3">
                    <h2 className="font-bold text-black/80 text-5xl tracking-tighter">
                      {data.title}
                    </h2>
                  </div>
                  <div>
                    <p className="w-fit basis-1/2 text-lg font-medium leading-snug text-gray-600 max-w-3xl tracking-tight">
                      {data.description}
                    </p>
                  </div>
                </div>
                <div className="grid border mt-16 rounded-lg mx-auto border-gray-200/70 grid-cols-1 divide-y divide-gray-200/70 lg:grid-cols-3 lg:divide-x lg:divide-y">
                  {data?.points?.map((point, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-4 hover:bg-indigo-50 transition duration-300 p-8"
                    >
                      <div className="flex items-center gap-2 text-gray-500">
                        {point.icon}
                        <h3 className="text-lg font-semibold tracking-tight text-gray-700">
                          {point.title}
                        </h3>
                      </div>
                      <p className="text-sm tracking-tight text-muted-foreground lg:text-base">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        ))}

      {/* Features Section */}
      <section className="py-16" style={{ backgroundColor: "#F9FAFB" }}>
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="font-bold text-black/80  text-5xl tracking-tighter">
              Industry-Specific Features
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 my-4 tracking-tight">
              Powerful tools designed specifically for{" "}
              {industryData?.title?.toLowerCase()} businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryData?.features?.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`mb-4 bg-${industryData.color}-50 rounded-full p-2 max-w-max`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-gray-700">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm tracking-tight text-gray-500 lg:text-base font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ1 faqItems={industryData?.faqs} />

      {/* Case Studies Section */}
      {/* FAQ Section */}
      {/* <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[44rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 tracking-tight">
              Find quick answers to common questions about our services and
              support.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FAQs faqs={industryData?.faqs} />
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Didn't find what you were looking for? Check our comprehensive
                help center.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-500 hover:text-white"
              >
                <Link href="/help-support">
                  Visit Help Center <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <IndustryDetailCta
        heading={`Ready to transform your ${industryData?.title?.toLowerCase()} business?`}
        description={`Get in touch with our experts to discuss how our tailored SaaS solutions can drive efficiency, security, and growth for your organization.`}
        buttonText={"Contact Us"}
        buttonProps={{ href: "/contact-us" }}
      />
    </div>
  );
}
