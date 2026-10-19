import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Cloud,
  Shield,
  Users,
  Smartphone,
  Cog,
  Star,
  Rocket,
  TrendingUp,
  PhoneCall,
} from "lucide-react";
import { BadgeAlertIcon } from "@/components/animation/currency/currency";
import Stacking from "@/components/animation/stacking";
import { SERVICE_FEATURES, SERVICES } from "@/data/data";
import { HowItWorksNew } from "../home/home";
import FeatureCard from "@/components/feature-card";
import { CTANEW } from "@/components/web/cta";
import ServicesSchema from "@/components/seo/servicesSchema";
import FAQs from "@/components/faq";

export const metadata = {
  title: "Business Automation Services for UK Businesses",
  description:
    "WebMints builds custom software, SaaS, business automation, cloud apps, CRM solutions and APIs for businesses across London and the UK.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/services",
    images: ["/opengraph-image.png"],
  },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col font-grotesk overflow-hidden">
      <ServicesSchema />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800 inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors cursor-pointer">
              🚀 Transforming Businesses Since 2020
            </Badge>
            <h1 className="mb-6 font-bold text-black/85 tracking-tighter text-3xl sm:text-4xl md:text-6xl relative">
              Business Automation Services for{" "}
              <span className="text-indigo-600">UK Businesses</span>
            </h1>
            <p className="text-xl font-medium leading-snug text-gray-600 mb-4 tracking-tight">
              WebMints is a software development company providing businesses
              across London and the UK with high-quality, scalable solutions
              that are designed specifically for their needs. This ranges from
              creating custom software and SaaS, business automation, cloud
              apps, CRM solutions, and APIs to building technology that suits
              your business.
            </p>
            <p className="text-xl font-medium leading-snug text-gray-600 mb-8 tracking-tight">
              If you are starting something new in the digital sphere or need to
              upgrade or improve your current system, we will help you get there
              through software solutions.
              {/* We'll support you throughout the full cycle of software product
              development. From initial consultation and planning to design,
              development, testing, deployment, and ongoing maintenance, our
              team is dedicated to ensuring your SaaS application meets your
              business goals and exceeds your expectations. */}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href={"/schedule-call"}
                className="bg-indigo-600 text-white text-base font-semibold h-10 hover:bg-indigo-700
  group inline-flex items-center px-4 py-2 rounded-md gap-2"
              >
                <PhoneCall className="group-hover:animate-pulse w-4 h-4" />
                Schedule a Free Consultation
              </Link>
            </div>
            <div className="flex mt-8 max-w-[1200px] items-center justify-center space-x-1.5">
              <BadgeAlertIcon size={20} className="text-black/50" />
              <div className="text-sm font-medium text-black/50 tracking-tight">
                We don't sell templates or generic tools - we build technology
                around your unique business needs.
              </div>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 h-20 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 blur-xl" />
        <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-xl" />
      </section>

      {/* Services Grid */}
      {/* <section
        className="py-32"
        style={{ backgroundColor: "rgb(250,250,250)" }}
      >
        <div className="container mx-auto">
          <div className="text-sm font-semibold text-indigo-600 mb-2">
            What We Do
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

            <h2 className="font-bold text-black/75 mb-2 text-5xl tracking-tight">
              Comprehensive SaaS Development{" "}

              <span className="text-indigo-600 whitespace-nowrap">
                Services
              </span>
            </h2>
          </div>
          <p className="text-lg font-medium leading-snug text-gray-600 max-w-4xl mb-8 tracking-tight">
            Our Services are tailored to your unique needs, ensuring you get the
            most value without any hidden fees. From initial consultation to
            deployment and ongoing support, we handle every aspect of your SaaS
            journey.
          </p>
          <div className="max-w-7xl space-y-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {servicesOffered?.map((service, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-border bg-background/80 hover:bg-background backdrop-blur-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold ">
                            {service?.title}
                          </h3>
                          <div className="text-muted-foreground mt-1 text-sm">
                            {service?.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground mt-6 leading-relaxed">
                      {service?.description}
                    </p>
                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="mb-3 text-sm font-medium">
                          What's included:
                        </h4>
                        <ul className="space-y-2">
                          {service?.features?.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-3 text-sm"
                            >
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
                                className="lucide lucide-circle-check-big h-4 w-4 flex-shrink-0 text-green-600"
                                aria-hidden="true"
                              >
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                                <path d="m9 11 3 3L22 4"></path>
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="mb-2 text-sm font-medium">
                          Deliverables:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {service?.deliverables?.map(
                            (deliverable, deliverableIndex) => (
                              <Badge
                                key={deliverableIndex}
                                variant="secondary"
                                className="bg-background text-muted-foreground"
                              >
                                {deliverable}
                              </Badge>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="border-border mt-8 border-t pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-lg font-semibold">
                            {service.price === "Custom Pricing"
                              ? service.price
                              : `${service.price} Starting`}
                          </div>
                          <div className="text-muted-foreground text-xs">
                            Custom quotes available
                          </div>
                        </div>
                        <Link
                          href={"/contact?service=" + service?.slug}
                          className={`relative inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                        >
                          Get Started
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
                            className="lucide lucide-arrow-right ml-1 h-3 w-3 transition-transform group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-32 ">
        <div className="container mx-auto">
          <div className="text-sm font-semibold text-indigo-600 mb-2">
            What We Do
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

            <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tight">
              Custom Software & SaaS Development{" "}
              <span className="text-indigo-600 whitespace-nowrap">
                Services
              </span>
            </h2>
          </div>
          <p className="text-lg font-medium leading-snug text-gray-600 max-w-4xl mb-4 tracking-tight">
            Our custom software and SaaS development services are created
            according to your business needs and growth strategy. We provide
            technology solutions that can grow with your business from product
            development and automation to cloud software and modernisation and
            integration.
          </p>
          <p className="text-lg font-medium leading-snug text-gray-600 max-w-4xl mb-8 tracking-tight">
            The software development services that we offer are aimed at
            assisting companies in simplifying their processes, enhancing the
            customer experience and enabling growth. Our services range from the
            strategy and planning stage to development and deployment according
            to your needs.
          </p>
          <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
            {SERVICES_PAGE_ITEMS.map((service, index) => (
              <Stacking key={service.title} items={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature What */}
      <section
        className="w-full py-16 px-4"
        style={{ backgroundColor: "rgb(250,250,250)" }}
      >
        <div className="max-w-7xl mx-auto rounded-xl">
          <div className="text-sm font-semibold text-indigo-600 mb-2">
            Managing Every Aspect
          </div>
          <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter">
            Your Trusted Software Development Partner in{" "}
            <span className="text-indigo-600 whitespace-nowrap">UK</span>
          </h2>
          <p className="text-lg font-medium leading-snug text-gray-600 max-w-4xl mb-8 tracking-tight">
            From strategy and planning to development and long-term support,
            WebMints helps businesses build software that drives measurable
            results. Our team focuses on creating reliable, scalable, and
            user-friendly solutions that improve business operations and support
            growth.
          </p>
          <FeatureCard features={SERVICES_PAGE_FEATURES} />
          <div className="flex mt-8 max-w-[1200px] items-start space-x-1.5">
            <BadgeAlertIcon size={20} className="text-black/50" />
            <div className="text-sm font-medium text-black/50 tracking-tight">
              <strong>WebMints</strong> is your reliable software development
              company, developing custom software, SaaS, CRM solutions, business
              automation solutions, and cloud software. Let us help you create
              value-generating software.{" "}
              <Link className="font-bold" href="/contact-us">
                Get in touch to learn more.
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      {/* <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl ">
              Our Proven Development Process
            </h2>
            <p className="text-lg text-muted-foreground">
              We follow a structured approach to ensure your SaaS solution is
              delivered on time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full border-0 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg">
                      <span className="text-xl font-bold ">{index + 1}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < processSteps.length - 1 && (
                  <div className="absolute top-8 -right-4 hidden lg:block">
                    <ArrowRight className="h-8 w-8 text-indigo-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      {/* <section className="py-24">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl ">
                Why Choose Our SaaS Development Services?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                We combine technical expertise with industry knowledge to
                deliver SaaS solutions that not only meet your current needs but
                scale with your business growth.
              </p>

              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                      <item.icon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold ">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl transform rotate-3" />
              <Card className="relative border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-6 text-center">
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold ">
                      Industry Recognition
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 ">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Projects Delivered
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 ">
                        98%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Client Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 ">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Industries Served
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 ">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Support Available
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

      <HowItWorksNew
        heading={
          <>
            Our Software Development{" "}
            <span className="text-indigo-600 whitespace-nowrap">Process</span>
          </>
        }
        description="Our proven development process ensures every project is delivered efficiently, transparently, and aligned with your business objectives."
        steps={[
          {
            details:
              "Tell us about your project goals and business requirements.",
          },
          { details: "Discuss your vision with our software specialists." },
          {
            title: "Launch and",
            details:
              "Deploy your solution and continuously improve performance.",
          },
          {
            details:
              "Expand your software capabilities as your business grows.",
          },
        ]}
      />

      <section
        className="py-16 lg:py-24 px-6 font-grotesk"
        style={{ backgroundColor: "rgb(250,250,250)" }}
      >
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <div className="text-sm font-semibold text-indigo-600">FAQs</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tighter">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto max-w-3xl">
            <FAQs faqs={SERVICES_FAQS} />
          </div>
        </div>
      </section>

      {/* <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 py-16 rounded-lg my-12 container mx-auto">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl ">
              Ready to Build Something Amazing?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Join hundreds of successful companies who have transformed their
              operations with our SaaS solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Your Project Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      <CTANEW
        heading="Looking for a Custom Software Development Company in UK?"
        description={
          <>
            <p>
              From SaaS, CRM, workflow automation, cloud apps, or enterprise
              software, WebMints can assist. Our experts work with companies
              from all over London and the UK to develop scalable digital
              products to boost efficiency and cut down costs.
            </p>
            <p className="mt-4">
              Get in touch and book your free consultation today to see how
              custom software can revolutionise your business.
            </p>
          </>
        }
        buttonText="Book Your Free Consultation"
      />

      {/* <section className="">
        <div
          className="relative bg-cover bg-center bg-no-repeat py-10 after:absolute after:inset-0 after:z-10 after:block after:size-full after:bg-black/40 after:content-[''] md:py-16 xl:px-6 xl:py-28"
          style={{
            backgroundImage:
              "url('https://library.shadcnblocks.com/images/block/photos/futuristic-device-design-qcufu.png')",
          }}
        >
          <div className="container relative z-20 mx-auto">
            <div className="flex flex-col items-center justify-center gap-12 text-center">
              <div className="flex max-w-4xl flex-col gap-5">
                <h2 className="text-2xl tracking-tight text-white md:text-7xl">
                  Incredible AI-powered video editing
                </h2>
                <div className="text-lg font-medium tracking-tight text-white">
                  Accessibility ensures digital content is usable by all,
                  including people with disabilities, by following inclusive
                  design practices and meeting standards like WCAG for equal
                  user experience.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="grid items-start gap-8 py-20 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-4">
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
                className="lucide lucide-keyboard stroke-muted-foreground size-7"
                aria-hidden="true"
              >
                <path d="M10 8h.01"></path>
                <path d="M12 12h.01"></path>
                <path d="M14 8h.01"></path>
                <path d="M16 12h.01"></path>
                <path d="M18 8h.01"></path>
                <path d="M6 8h.01"></path>
                <path d="M7 16h10"></path>
                <path d="M8 12h.01"></path>
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              </svg>
              <div className="max-w-xs text-center text-xl font-semibold">
                Keyboard Navigation
              </div>
              <div className="text-muted-foreground max-w-lg text-center text-base">
                Ensure all interactive elements are accessible via keyboard
                alone, allowing users with motor impairments to navigate easily
                and efficiently without a mouse.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
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
                className="lucide lucide-volume2 lucide-volume-2 stroke-muted-foreground size-7"
                aria-hidden="true"
              >
                <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path>
                <path d="M16 9a5 5 0 0 1 0 6"></path>
                <path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path>
              </svg>
              <div className="max-w-xs text-center text-xl font-semibold">
                Screen Reader Friendly
              </div>
              <div className="text-muted-foreground max-w-lg text-center text-base">
                Use semantic HTML and proper ARIA labels to help screen readers
                convey structure and meaning clearly to users with visual
                impairments.
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
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
                className="lucide lucide-eye stroke-muted-foreground size-7"
                aria-hidden="true"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              <div className="max-w-xs text-center text-xl font-semibold">
                Color Contrast Check
              </div>
              <div className="text-muted-foreground max-w-lg text-center text-base">
                Maintain strong colour contrast between text and background to
                support users with low vision and improve readability across
                different lighting conditions.
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}

// Data
const listHtml = (heading, items) => `
      <h4 class="text-2xl font-bold mb-3 text-gray-700">${heading}</h4>
      <ul class="list-disc list-inside mb-6 font-medium tracking-tight leading-snug text-gray-600">
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>`;

// Services page copy, keyed by SERVICES id (home page keeps its own copy)
const SERVICES_PAGE_COPY = {
  "custom-saas-platform-development": {
    title: "Custom SaaS Development",
    longDescription:
      "Our custom SaaS development services allow companies to develop scalable, secure, and easy-to-use software products. Working in close collaboration with your team, we will be able to develop solutions that meet your business needs and offer an excellent user experience.",
    detailsHtml:
      listHtml("Build Scalable SaaS Platforms", [
        "Multi-tenant SaaS architecture",
        "Subscription and billing systems",
        "User authentication and access management",
        "Cloud-native application development",
        "Third-party integrations",
      ]) +
      listHtml("Key Features", [
        "Custom user roles and permissions",
        "Scalable infrastructure",
        "Advanced security controls",
        "API integrations",
        "Performance optimisation",
      ]),
  },
  "business-process-automation": {
    title: "Business Process Automation Services",
    longDescription:
      "Manual operations hinder expansion and lead to increased expenses. Business automation services from us enable organisations to streamline their operations by eliminating tedious activities and increasing productivity via automation.",
    detailsHtml:
      listHtml("Reduce Manual Work with Smart Automation", [
        "Workflow analysis and process mapping",
        "Automation strategy and implementation",
        "System integration and automation tools",
        "Data synchronisation across platforms",
      ]) +
      listHtml("Benefits of Business Automation", [
        "Increased efficiency",
        "Reduced operational costs",
        "Improved compliance",
        "Faster decision-making",
        "Greater productivity",
      ]),
  },
  "crm-and-workflow-automation": {
    title: "CRM & Workflow Automation",
    longDescription:
      "We create customised CRM systems that allow you to effectively manage customer relations, sales cycles, and workflow from one interface. Our systems are based on your processes and not the other way around.",
    detailsHtml:
      listHtml("Custom CRM Systems Built Around Your Business", [
        "CRM development and implementation",
        "Lead management automation",
        "Sales workflow optimisation",
        "Customer data centralisation",
        "Business application integrations",
      ]) +
      listHtml("Workflow Automation Features", [
        "Automated lead tracking",
        "Custom sales pipelines",
        "Reporting dashboards",
        "Marketing integrations",
        "Real-time customer insights",
      ]),
  },
  "cloud-based-software-solutions": {
    title: "Cloud Application Development",
    longDescription:
      "Cloud computing helps companies grow effectively and enhances accessibility, security, and performance. We develop cloud-based applications that can support present-day business needs and future scalability.",
    detailsHtml:
      listHtml("Scalable Cloud Application Development", [
        "Cloud-native software development",
        "Microservices architecture",
        "Serverless solutions",
        "Secure cloud infrastructure",
        "Cloud migration services",
      ]) +
      listHtml("Benefits of Cloud Solutions", [
        "Flexible scalability",
        "Remote accessibility",
        "Lower infrastructure costs",
        "Improved reliability",
        "Business continuity support",
      ]),
  },
  "saas-product-modernization": {
    title: "Software Modernisation Services",
    longDescription:
      "Legacy systems can lead to inefficiencies, insecurity, and constraints for expanding firms. Our modernisation services allow clients to enhance their legacy systems using contemporary technology and techniques.",
    detailsHtml:
      listHtml("Upgrade Legacy Systems for Better Performance", [
        "Legacy application assessment",
        "Software re-engineering",
        "Framework migration",
        "Database modernisation",
        "User experience improvements",
      ]) +
      listHtml("Key Benefits", [
        "Better performance",
        "Improved security",
        "Enhanced user experience",
        "Easier maintenance",
        "Increased scalability",
      ]),
  },
  "api-integration-and-third-party-tools": {
    title: "API Development & Third-Party Integrations",
    longDescription:
      "In modern companies, there are several software platforms running in sync. We provide integration of your systems using APIs which are safe to use for exchanging data.",
    detailsHtml:
      listHtml("Connect Your Entire Software Ecosystem", [
        "REST API development",
        "GraphQL API development",
        "Payment gateway integrations",
        "CRM integrations",
        "ERP and business software integrations",
      ]) +
      listHtml("Benefits of API Integration", [
        "Improved data accuracy",
        "Enhanced functionality",
        "Reduced manual data entry",
        "Better operational efficiency",
        "Scalable system architecture",
      ]),
  },
};

const SERVICES_PAGE_ITEMS = SERVICES.map((service) => ({
  ...service,
  ...SERVICES_PAGE_COPY[service.id],
}));

const SERVICES_PAGE_FEATURE_COPY = {
  "Task Management": {
    description:
      "Maintain order within projects and teams through custom task management solutions tailored specifically for your needs.",
  },
  "Real-time Updates": {
    title: "Real-Time Updates",
    description:
      "Get real-time notifications and updates that ensure your teams stay up-to-date and collaborative.",
  },
  "Team Collaboration": {
    description:
      "Enhance your communication and productivity through built-in collaboration features.",
  },
  "Goal Tracking": {
    description:
      "Monitor your business goals and project milestones through custom reporting solutions.",
  },
  "Analytics & Reporting": {
    description:
      "Gain valuable business insights through analytics and reporting dashboards.",
  },
  "Resource Management": {
    description:
      "Manage your resources more efficiently and plan operations with ease.",
  },
  "Time Tracking": {
    description:
      "Improve project performance monitoring and productivity through built-in time tracking.",
  },
  "Client Communication": {
    description:
      "Establish better relationships with customers through effective communications.",
  },
};

const SERVICES_PAGE_FEATURES = SERVICE_FEATURES.map((feature) => ({
  ...feature,
  ...SERVICES_PAGE_FEATURE_COPY[feature.title],
}));

const SERVICES_FAQS = [
  {
    question: "What software development services does WebMints provide?",
    answer:
      "WebMints provides custom SaaS development, business process automation, CRM and workflow automation, cloud software development, SaaS modernisation and API integration services.",
  },
  {
    question:
      "Do you provide software development services for businesses in London?",
    answer:
      "Yes. WebMints provides tailored software and SaaS development solutions for businesses in London and across the UK.",
  },
  {
    question: "Can you build a custom SaaS platform from scratch?",
    answer:
      "Yes. We can develop SaaS platforms around your business requirements, including architecture, features, integrations, testing, deployment and ongoing improvements.",
  },
  {
    question: "Can you modernise an existing SaaS platform?",
    answer:
      "Yes. We can help improve existing software through modernisation, performance improvements, updated technologies, improved user experience and new integrations.",
  },
  {
    question: "Can you integrate our existing business systems?",
    answer:
      "Yes. We can connect CRM systems, payment platforms, analytics tools and other third-party applications using APIs and software integrations.",
  },
];

const processSteps = [
  {
    title: "Discovery & Planning",
    description:
      "We analyse your requirements, define project scope, and create a detailed roadmap for success.",
  },
  {
    title: "Design & Prototyping",
    description:
      "Our team creates intuitive designs and interactive prototypes to visualise your solution.",
  },
  {
    title: "Development & Testing",
    description:
      "We build your application using agile methodologies with continuous testing and quality assurance.",
  },
  {
    title: "Deployment & Support",
    description:
      "We deploy your solution and provide ongoing support to ensure optimal performance and growth.",
  },
];

const whyChooseUs = [
  {
    icon: Rocket,
    title: "Rapid Development",
    description:
      "Our agile approach and experienced team ensure faster time-to-market without compromising quality.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "We implement industry-leading security practices to protect your data and ensure compliance.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description:
      "Our architectures are designed to grow with your business, handling increased load seamlessly.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with seasoned professionals who have delivered 500+ successful SaaS projects.",
  },
];

const servicesOffered = [
  {
    title: "Product Strategy",
    description:
      "Comprehensive market research and user analysis to define your product vision.",
    icon: Cog,
    slug: "product-strategy",
    timeline: "2-4 weeks",
    price: "$5,000+",
    features: [
      "Market Research & Analysis",
      "User Personas & Journey Mapping",
      "Competitive Analysis",
      "Product Roadmap Development",
    ],
    deliverables: [
      "Strategy Document",
      "User Research Report",
      "Roadmap & Timeline",
      "Competitive Analysis Report",
    ],
  },
  {
    title: "Design & Prototyping",
    description:
      "User-centric UI/UX designs and interactive prototypes to visualise your solution.",
    icon: Star,
    slug: "design-prototyping",
    timeline: "4-6 weeks",
    price: "$5,000+",
    features: [
      "Wireframing & Mockups",
      "Interactive Prototypes",
      "User Testing & Feedback",
      "Design System Creation",
    ],
    deliverables: [
      "High-Fidelity Designs",
      "Interactive Prototype",
      "Design System Documentation",
    ],
  },
  {
    title: "Web Development",
    description:
      "Robust and scalable web applications built with modern technologies.",
    icon: Code,
    slug: "web-development",
    timeline: "8-16 weeks",
    price: "$15,000+",
    features: [
      "Frontend & Backend Development",
      "Responsive Design",
      "API Integration",
      "Performance Optimisation",
    ],
    deliverables: [
      "Fully functional web application",
      "Source code repository",
      "Documentation & Training",
    ],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications to extend your reach.",
    icon: Smartphone,
    slug: "mobile-app-development",
    timeline: "6-12 weeks",
    price: "$10,000+",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "Push Notifications",
      "App Store Deployment",
    ],
    deliverables: [
      "iOS and/or Android app",
      "Source code repository",
      "App Store submission",
    ],
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud migration, deployment, and management for enhanced performance.",
    icon: Cloud,
    slug: "cloud-solutions",
    timeline: "4-8 weeks",
    price: "$7,500+",
    features: [
      "Cloud Strategy & Planning",
      "Migration Services",
      "Infrastructure Setup",
      "Monitoring & Maintenance",
    ],
    deliverables: [
      "Cloud architecture design",
      "Deployed cloud infrastructure",
      "Monitoring setup",
    ],
  },
  {
    title: "Marketing & SEO",
    description:
      "Data-driven marketing strategies to boost your online presence and growth.",
    icon: TrendingUp,
    slug: "marketing-seo",
    timeline: "Ongoing",
    price: "Custom Pricing",
    features: [
      "SEO Optimisation",
      "Content Marketing",
      "Social Media Management",
      "Performance Analytics",
    ],
    deliverables: [
      "Monthly performance reports",
      "Content calendar",
      "SEO audit & recommendations",
    ],
  },
];
