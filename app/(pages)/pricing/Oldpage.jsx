import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import HowItWorks from "@/components/web/home/how-it-works";
import RequestCustomQuote from "./request-custom-quote";
import GlobalCta from "@/components/web/cta/global-cta";

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      {/* <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-100" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-grotesk">
              Tailored Pricing for Your
              <br /> Unique Needs
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-sans">
              We don't believe in one-size-fits-all pricing. Our solutions are
              custom-built for your specific business requirements, and so is
              our pricing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <a href="#request-quote">Request Custom Quote</a>
              </Button>
              <Button variant="outline">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
      {/* Investment Range Section */}
      <section className="container mx-auto py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-grotesk text-black">
            {/* Investment Ranges */}
            Let's See. <br />
            So what does it cost?
          </h2>
          <p className="max-w-[42rem] leading-normal text-black sm:text-xl font-sans tracking-tight">
            {/* While every project is unique, these ranges provide a general idea
            of investment levels based on project scope. */}
            So we're saving you the hassle of tens or hundreds of thousands of
            dollars and doing it all fast, but don't worry, we're not
            overcharging you.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {investmentRanges.map((range, index) => (
            <Card
              key={index}
              className={`flex flex-col transition-all duration-200 hover:shadow-md`}
            >
              <CardHeader>
                <CardTitle className="font-grotesk">{range.name}</CardTitle>
                <CardDescription className="font-sans text-gray-600">
                  {range.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-2xl font-bold font-grotesk">
                    {range.priceRange}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4 font-grotesk">
                  {range.timeframe}
                </p>
                <ul className="space-y-2 mb-6">
                  {range.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-sans">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-indigo-600 hover:bg-indigo-700 font-grotesk"
                >
                  <Link href={`/contact-sales?pricing=${range.slug}`}>
                    Discuss Your Project
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground font-sans">
          <p>
            Note: These ranges are provided as general guidelines. Your actual
            investment will be determined based on your specific requirements.
          </p>
        </div>
      </section>

      {/* Pricing Factors Section */}
      <section className="bg-black py-16 text-white">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
              Factors That Influence Your Pricing
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-sans">
              Understanding what goes into your custom quote helps you make
              informed decisions about your SaaS investment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/images/t.png"
                alt="Custom SaaS Development"
                width={800}
                height={600}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-white p-1">
                    <Check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg font-grotesk">
                      {factor.title}
                    </h3>
                    <p className="text-white/70 font-sans">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto rounded-xl">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 10V3L4 14H11V21L20 10H13Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Our Features
            </div>
          </div>

          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
              Why Choose a Custom SaaS Solution?
            </h2>
            {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 font-grotesk">
              We do it for the love of the
              <br />
              Game. (Managing Projects)
            </h2> */}
            <p className="text-gray-600 max-w-3xl mx-auto my-2">
              Streamline your projects with our powerful features and gain
              insights with comprehensive
              <br />
              project performance metrics.Investing in a tailored SaaS solution
              <br /> delivers long-term value that generic software simply can't
              match.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
            {/* Task Management */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-red-50 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 font-grotesk">
                Perfectly Tailored Solution
              </h3>
              <p className="text-gray-600 text-base font-sans">
                Unlike off-the-shelf software, our custom solutions are built
                specifically for your unique business processes and
                requirements.
              </p>
            </div>

            {/* Real-time Updates */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-blue-50 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-blue-500 mb-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 12H16L14 15H10L8 12H2M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 font-grotesk">
                Scalable Architecture
              </h3>
              <p className="text-gray-600 text-base font-sans">
                We design your solution to grow with your business, ensuring it
                can handle increasing users, data, and functionality over time.
              </p>
            </div>

            {/* Team Collaboration */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-green-50 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-green-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 10V3L4 14H11V21L20 10H13Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 font-grotesk">
                Competitive Advantage
              </h3>
              <p className="text-gray-600 text-base font-sans">
                Custom software gives you unique capabilities that your
                competitors don't have, helping you stand out in the market.
              </p>
            </div>

            {/* Goal Tracking */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-yellow-50 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-yellow-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 font-grotesk">
                Integration Flexibility
              </h3>
              <p className="text-gray-600 text-base font-sans">
                Seamlessly connect with your existing systems and third-party
                services for a unified workflow and enhanced productivity.
              </p>
            </div>

            {/* Analytics Dashboard */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-purple-50 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-purple-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 20V10M12 20V4M6 20V14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 font-grotesk">
                Enhanced Security
              </h3>
              <p className="text-gray-600 text-base font-sans">
                Custom security measures designed specifically for your industry
                requirements and compliance needs.
              </p>
            </div>

            {/* Resource Scheduling */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="bg-orange-50 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-orange-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 2V6M8 2V6M3 10H21M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01M16 18H16.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-xl mb-2 font-grotesk">
                Long-term Cost Efficiency
              </h3>
              <p className="text-gray-600 text-base font-sans">
                While the initial investment is higher than off-the-shelf
                solutions, custom SaaS typically offers better ROI over time.
              </p>
            </div>
          </div>

          <div className="text-center text-gray-600 text-base tracking-tight">
            Webmints offers comprehensive project management solutions for
            businesses of all sizes.
          </div>
        </div>
      </div>

      {/* ROI and Case Studies Section */}
      {/* <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
            Return on Investment
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-sans">
            Our clients see significant returns on their custom SaaS
            investments. Here are some success stories.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-200 hover:shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={"/images/industries/con.svg"}
                  alt={study.company}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-grotesk">{study.company}</CardTitle>
                <CardDescription className="font-sans">
                  {study.industry}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold font-sans">ROI:</span>
                    <span className="text-indigo-600 font-bold font-grotesk">
                      {study.roi}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold font-sans">Timeframe:</span>
                    <span className="font-grotesk">{study.timeframe}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-sans">
                  {study.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full font-grotesk"
                >
                  <Link href="/case-studies">Read Full Case Study</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-sans">
            Find answers to common questions about our custom pricing and
            development process.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-xl font-grotesk">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base font-sans tracking-normal text-gray-700 font-normal">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <div className="bg-indigo-100">
        <HowItWorks />
      </div>

      {/* CTA Section */}
      <GlobalCta
        title={"Ready to build your custom solution?"}
        desc={
          "Let's discuss how our technology expertise can help you create a powerful, scalable SaaS platform tailored to your industry needs."
        }
        mainBtn={{ name: "Contact Us", link: "/contact-us" }}
        btn={{ name: "Schedule Call", link: "/schedule-call" }}
      />
    </div>
  );
}

// Pricing Factors Data
const pricingFactors = [
  {
    title: "Project Complexity",
    description:
      "The overall complexity of your solution, including the number of features, integrations, and technical challenges.",
  },
  {
    title: "Feature Set",
    description:
      "The specific functionality required, from basic CRUD operations to advanced AI-powered analytics and automation.",
  },
  {
    title: "User Capacity",
    description:
      "The number of users your system needs to support, including considerations for concurrent users and performance requirements.",
  },
  {
    title: "Integration Requirements",
    description:
      "The number and complexity of integrations with existing systems, third-party services, and APIs.",
  },
  {
    title: "Security & Compliance",
    description:
      "Industry-specific security requirements and compliance standards (HIPAA, GDPR, SOC 2, etc.) that must be met.",
  },
  {
    title: "Support & Maintenance",
    description:
      "The level of ongoing support, maintenance, and updates required after the initial development.",
  },
];

// Investment Ranges Data
const investmentRanges = [
  {
    name: "Starter Solution",
    description: "For small businesses, straightforward requirements",
    priceRange: "$25,000 - $75,000",
    slug: "starter",
    timeframe: "2-4 months development time",
    features: [
      "Core functionality for your specific industry",
      "Basic user management and authentication",
      "Essential reporting and analytics",
      "Standard security features",
      "Basic third-party integrations",
      "3 months of post-launch support",
    ],
  },
  {
    name: "Professional Solution",
    description: "For growing businesses with moderate complexity",
    priceRange: "$75,000 - $150,000",
    slug: "professional",
    timeframe: "4-8 months development time",
    features: [
      "Comprehensive feature set tailored to your needs",
      "Advanced user roles and permissions",
      "Custom workflows and automation",
      "Enhanced security and compliance features",
      "Multiple third-party integrations",
      "6 months of post-launch support",
    ],
  },
  {
    name: "Enterprise Solution",
    description: "For large organizations with complex requirements",
    priceRange: "$150,000+",
    slug: "enterprise",
    timeframe: "8+ months development time",
    features: [
      "Enterprise-grade architecture and scalability",
      "Complex business logic and workflows",
      "Advanced analytics and reporting dashboards",
      "High-level security and compliance implementation",
      "Extensive integration ecosystem",
      "12 months of post-launch support and SLA",
    ],
  },
];

// Case Studies Data
const caseStudies = [
  {
    company: "Global Manufacturing Corp",
    industry: "Enterprise",
    roi: "320% ROI",
    timeframe: "18 months",
    description:
      "Custom ERP solution reduced operational costs by 35% and improved team productivity across 12 global locations.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    company: "MediCare Health Network",
    industry: "Healthcare",
    roi: "280% ROI",
    timeframe: "12 months",
    description:
      "HIPAA-compliant patient management system reduced administrative costs by 42% while improving patient satisfaction.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    company: "BuildRight Construction",
    industry: "Construction",
    roi: "215% ROI",
    timeframe: "24 months",
    description:
      "Field-to-office solution reduced project delays by 28% and improved resource allocation across multiple job sites.",
    image: "/placeholder.svg?height=300&width=400",
  },
];

// FAQ Data
const faqs = [
  {
    question: "Why don't you have fixed pricing packages?",
    answer:
      "Every business has unique needs and challenges. Fixed pricing packages often result in clients paying for features they don't need or missing critical functionality. Our custom approach ensures you get exactly what your business requires at a fair price.",
  },
  {
    question: "How do you determine the cost of my custom SaaS solution?",
    answer:
      "We evaluate several factors including project complexity, required features, user capacity, integration needs, security requirements, and ongoing support. After a thorough consultation, we provide a detailed quote that breaks down the investment for each aspect of your solution.",
  },
  {
    question:
      "What's the typical return on investment for a custom SaaS solution?",
    answer:
      "While ROI varies by industry and use case, our clients typically see returns of 200-400% over 2-3 years. This comes from operational efficiency gains, reduced manual work, better decision-making through analytics, and competitive advantages in their markets.",
  },
  {
    question: "Do you offer payment plans or phased development?",
    answer:
      "Yes, we understand that budget constraints are real. We offer milestone-based payment schedules and can develop your solution in phases, allowing you to spread the investment over time while still achieving your long-term goals.",
  },
  {
    question:
      "What ongoing costs should I expect after the initial development?",
    answer:
      "Ongoing costs typically include hosting infrastructure, maintenance, support, and future enhancements. We offer flexible support packages that can be tailored to your needs, typically ranging from 15-25% of the initial development cost annually.",
  },
  {
    question: "How long does it take to develop a custom SaaS solution?",
    answer:
      "Development timelines vary based on complexity. Starter solutions typically take 2-4 months, professional solutions 4-8 months, and enterprise solutions 8+ months. We provide detailed timelines during the proposal phase after understanding your specific requirements.",
  },
];
