import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Globe,
  BarChart3,
  Zap,
  BarChart,
  PhoneCall,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Text from "@/components/animation/text";
import { SolutionsTab } from "@/data/data";
import TabFeature from "@/components/tab-feature";
import GlobalCta from "@/components/web/cta/global-cta";
import SolutionsSchema from "@/components/seo/solutionsSchema";

export const metadata = {
  title: "Custom SaaS Solutions for UK Businesses",
  description:
    "Explore Webmints' SaaS solution categories, including ERP, CRM, and supply chain management tools designed to streamline operations and drive business growth.",
  alternates: {
    canonical: "/solution",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/solution",
    images: ["/opengraph-image.png"],
  },
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen font-grotesk">
      <SolutionsSchema />
      {/* Hero Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-indigo-100 text-indigo-800 mb-4 px-3 py-1 text-sm"
            >
              Enterprise-Grade Solutions
            </Badge>
            <h1 className="font-bold text-black/85 mb-2 text-6xl tracking-tighter">
              Built to Solve Real Business
              <span className="text-indigo-600">
                <Text
                  keywords={["Problems", "Growth", "Operations"]}
                  className="text-indigo-600"
                />
              </span>
            </h1>
            <p className="text-lg font-medium leading-snug text-gray-600 tracking-tight max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of SaaS solutions designed to
              transform your business operations, enhance productivity, and
              drive growth across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"/schedule-call"}
                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold h-10 px-4 rounded-md gap-2 group"
              >
                <PhoneCall className="group-hover:animate-pulse size-4" />
                Schedule a Free Consultation
              </Link>
            </div>
          </div>

          <div className="relative rounded-xl h-full w-full overflow-hidden border border-indigo-100 bg-indigo-50 p-6">
            <Image
              // src="https://cdn.dribbble.com/userupload/43305894/file/original-5caabe2f3d991ac1ee16642103786b60.png?resize=1600x1600&vertical=center"
              src={"/images/solution/solhero.svg"}
              alt="SaaS Solutions Dashboard"
              height={600}
              width={600}
              className="object-contain h-full w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <TabFeature tabs={SolutionsTab} />

      {/* Featured Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="bg-indigo-100 text-indigo-800 mb-4 px-3 py-1 text-sm"
              >
                Featured Solution
              </Badge>
              <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter">
                Enterprise Resource Planning
              </h2>
              <p className="text-lg font-medium leading-snug text-gray-600 mb-8 tracking-tight">
                Our flagship ERP solution integrates all core processes needed
                to run a company – finance, HR, manufacturing, supply chain,
                services, procurement, and more – into a single system.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-gray-700">
                      Unified Operations
                    </h3>
                    <p className="text-base mb-4 font-medium tracking-tight leading-snug text-gray-600">
                      Seamlessly connect all departments and functions across
                      your organization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <BarChart3 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-gray-700">
                      Real-time Analytics
                    </h3>
                    <p className="text-base mb-4 font-medium tracking-tight leading-snug text-gray-600">
                      Make informed decisions with instant access to critical
                      business data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-gray-700">
                      Process Automation
                    </h3>
                    <p className="text-base mb-4 font-medium tracking-tight leading-snug text-gray-600">
                      Automate routine tasks and workflows to increase
                      efficiency.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href={"/industries"}
                className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold h-10 px-4 rounded-md gap-2 group max-w-max"
              >
                Learn More
                <ArrowRight className="group-hover:animate-pulse size-4" />
              </Link>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg bg-white px-4">
              <Image
                src="/images/solution/solfeature.svg"
                alt="ERP Dashboard"
                fill
                className="object-contain px-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section id="adaptive-workflows" className="mt-12">
        <div className="border-y">
          <div className="container flex flex-col gap-4  border-x py-4 max-lg:border-x lg:py-8 px-8 mx-auto">
            <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tight">
              Stay agile with adaptive workflows
            </h2>
            <p className="text-lg font-medium leading-snug text-gray-600 mb-4 tracking-tight">
              AI streamlines your processes to adjust as priorities shift.
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
                <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-700 mt-2 px-1 lg:px-8">
                  Unified Scheduling
                </h3>
                <p className="text-base font-medium tracking-tight leading-snug text-gray-600 px-1 py-4 lg:px-8">
                  Keep all your appointments and events in sync with seamless
                  cross-platform calendar connectivity.
                </p>
                <div className="border-t py-4 lg:px-2">
                  <Image
                    src={"/images/solution/1.svg"}
                    alt="Unified Scheduling"
                    height={400}
                    width={400}
                    className="rounded-md shadow-md lg:rounded-xl lg:shadow-lg dark:invert border"
                  />
                </div>
              </div>
              <div className="relative isolate pt-5 text-start lg:pt-10">
                <div className="px-2 lg:px-8">
                  <BarChart className="size-10 bg-indigo-600 text-white rounded-full p-2" />
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-700 mt-2 px-1 lg:px-8">
                  Insightful Performance
                </h3>
                <p className="text-base font-medium tracking-tight leading-snug text-gray-600 px-1 py-4 lg:px-8">
                  Get clear, real-time analytics tracking your progress, key
                  milestones, focus hours, and completed tasks.
                </p>
                <div className="border-t py-4 lg:px-2">
                  <Image
                    src={"/images/solution/solfeature.svg"}
                    alt="Insightful Performance"
                    height={400}
                    width={400}
                    className="rounded-md shadow-md lg:rounded-xl lg:shadow-lg dark:invert p-2 border"
                  />
                </div>
              </div>
              <div className="relative isolate pt-5 text-start lg:pt-10">
                <div className="px-2 lg:px-8">
                  <BarChart className="size-10 bg-indigo-600 text-white rounded-full p-2" />
                </div>
                <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-700 mt-2 px-1 lg:px-8">
                  Effortless Tool Integrations
                </h3>
                <p className="text-base font-medium tracking-tight leading-snug text-gray-600 px-1 py-4 lg:px-8">
                  Link your favorite apps and services to streamline work
                  without switching between platforms.
                </p>
                <div className="border-t py-4 lg:px-2">
                  <Image
                    src="/images/solution/2.svg"
                    height={400}
                    width={400}
                    alt="Effortless Tool Integrations"
                    className="rounded-md shadow-md lg:rounded-xl lg:shadow-lg dark:invert p-2 border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-8 w-full border-y md:h-12 lg:h-[112px]">
          <div className="container h-full w-full border-x"></div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-indigo-100 text-indigo-800 mb-4 px-3 py-1 text-sm "
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 ">
              Transforming Businesses Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
              See how our SaaS solutions have helped organizations overcome
              challenges and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  // src="/images/industries/con.svg"
                  src="/images/casestudy/con.svg"
                  alt="E-commerce Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100 ">
                    Enterprise
                  </Badge>
                  <span className="text-sm text-gray-500 ">Case Study</span>
                </div>
                <CardTitle className="">
                  🧑‍💼Smart HR Management Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 ">
                  Empowering teams with seamless employee management, leave
                  tracking, and rota scheduling We built a custom HR solution
                  designed to streamline workforce operations for teams. From
                  centralized records to AI-assisted weekly rota creation and
                  leave approvals, the platform boosts efficiency and keeps your
                  team aligned. A complete dashboard ensures clear oversight of
                  employee activity and availability.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm "
                >
                  Comming Soon <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/casestudy/fin.svg"
                  alt="E-commerce Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 ">
                    Finance
                  </Badge>
                  <span className="text-sm text-gray-500 ">Case Study</span>
                </div>
                <CardTitle className="mt-2 ">
                  💰AI-Powered Finance Management Software
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 ">
                  Simplify payroll, invoicing, and communications with
                  intelligent automation This financial platform handles
                  everything from payroll processing to invoice generation and
                  client email dispatches. Leveraging AI, we introduced features
                  like smart reminders for unpaid invoices and predictive cash
                  flow insights. It’s a secure, modular system built for clarity
                  and control over your financial operations.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm "
                >
                  Comming Soon <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/casestudy/hr.svg"
                  alt="E-commerce Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100 ">
                    Construction
                  </Badge>
                  <span className="text-sm text-gray-500 ">Case Study</span>
                </div>
                <CardTitle className="">
                  🏗️ Construction Project Management Tool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 ">
                  Track budgets, manage site expenses, documents and monitor
                  real-time costs with confidence Designed for the fast-paced
                  construction industry, this platform centralizes budgeting,
                  site cost tracking, and financial forecasting—enhanced by AI
                  for pattern detection and over-budget alerts. Intuitive
                  dashboards give both field teams and managers full control,
                  all in one cloud-based solution.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center text-sm "
                >
                  Comming Soon <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
        <GlobalCta
          title={"Ready to build your custom solution?"}
          desc={
            "Let's discuss how our technology expertise can help you create a powerful, scalable SaaS platform tailored to your industry needs."
          }
          mainBtn={{ name: "Explore Plan", link: "/pricing" }}
          btn={{ name: "Schedule Call", link: "/schedule-call" }}
        />
      </div>
    </main>
  );
}

function TabCard({ title, description, icon, list }) {
  return (
    <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
      <CardHeader>
        {/* <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" /> */}
        {icon}
        <CardTitle className="">{title}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 ">
          {list &&
            list.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
        </ul>
      </CardContent>
      {/* <CardFooter>
        <Link
          href="/solutions/data-protection"
          className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
        >
          Learn more <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </CardFooter> */}
    </Card>
  );
}
