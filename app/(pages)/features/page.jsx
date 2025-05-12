import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Heart,
  BarChart,
  TrendingUp,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="py-32">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-2xl flex-col gap-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Powerful Experience.
              <br /> Simple Tools.
            </h1>
            <p className="text-lg">
              Built with cutting-edge insights, offering a complete perspective
              on the connection between lifestyle, behavior, and health. Our
              platform delivers an all-encompassing health overview.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/signup">Request a Demo</Link>
              </Button>
              <Button variant="outline">
                <Link href="/solution">See Solution</Link>
              </Button>
            </div>
          </div>
          <div className="mx-auto mt-20 grid max-w-screen-lg gap-20 md:grid-cols-3">
            <div className="text-center">
              <Heart className="mx-auto h-auto w-7" />
              <h3 className="mt-4 mb-2 text-xl font-semibold">
                Multi-Tenant Architecture
              </h3>
              <p>
                Our platform is built on a multi-tenant architecture, allowing
                for efficient resource sharing and cost-effective scalability.
              </p>
            </div>
            <div className="text-center">
              <BarChart className="mx-auto h-auto w-7" />
              <h3 className="mt-4 mb-2 text-xl font-semibold">
                White Labeling Support
              </h3>
              <p>
                Customize the platform with your branding, colors, and logo to
                create a unique experience for your customers.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="mx-auto h-auto w-7" />
              <h3 className="mt-4 mb-2 text-xl font-semibold">
                Modular Add-ons
              </h3>
              <p>
                Choose from a variety of add-ons to enhance your platform's
                functionality. Whether it's advanced analytics, AI-driven
                insights, or custom integrations, we have you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Extra Feature */}
      <div className=" bg-black">
        <section className="relative isolate mx-auto max-w-[63rem] pb-16 pt-20 md:pt-32 lg:pt-40">
          <div className="absolute left-1/2 top-0 ml-[-50cqw] h-px w-[100cqw] bg-gradient-to-r from-white/0 via-white/15 to-white/0"></div>
          <div className="lg:flex lg:justify-between">
            <h2 className="max-w-md text-balance text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl/9 lg:max-w-sm">
              Billing built for SaaS, with even more features on the way
            </h2>
            <p className="mt-3 text-pretty text-[0.875rem]/6 text-gray-400 lg:mt-0 lg:max-w-md">
              Having built and scaled SaaS products ourselves, we know firsthand
              how complex billing becomes as you grow. That’s why we built our
              own billing engine from first principles - not just to solve
              today’s challenges, but to create a scalable, flexible platform
              that gives B2C and B2B startups complete control over how you
              charge your customers.
            </p>
          </div>
          <ul
            role="list"
            className="mt-20 grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 md:gap-y-12 lg:gap-y-16 lg:grid-cols-3 lg:gap-x-12"
            data-sentry-element="InfoBlocks"
            data-sentry-source-file="InfoBlock.tsx"
            data-sentry-component="InfoBlocks"
          >
            {coreFeatures.map((feature, index) => (
              <li key={index} className="text-sm/5">
                <h4 className="flex gap-2.5 font-medium text-white">
                  {feature.title}
                </h4>
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Feature Categories Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Feature Categories
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Dive deeper into our feature sets designed to address specific
              business needs.
            </p>
          </div>

          <Tabs defaultValue="productivity" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="productivity">Productivity</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="integration">Integration</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="productivity" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">
                    Boost Your Team's Productivity
                  </h3>
                  <p className="text-muted-foreground">
                    Our productivity features help your team work more
                    efficiently, collaborate seamlessly, and accomplish more in
                    less time.
                  </p>
                  <ul className="space-y-2">
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
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Productivity Features"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-muted-foreground">
                    Protect your sensitive data with our comprehensive security
                    features designed to meet the highest standards.
                  </p>
                  <ul className="space-y-2">
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
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Security Features"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="integration" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">
                    Seamless Integration Capabilities
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with your existing tools and systems for a unified
                    workflow and enhanced productivity.
                  </p>
                  <ul className="space-y-2">
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
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Integration Features"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">
                    Advanced Analytics & Reporting
                  </h3>
                  <p className="text-muted-foreground">
                    Gain valuable insights with powerful analytics tools and
                    customizable dashboards tailored to your business needs.
                  </p>
                  <ul className="space-y-2">
                    {analyticsFeatures.map((feature, index) => (
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
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Analytics Features"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Industry-Specific Features */}
      <section className="container mx-auto">
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
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 text-3xl">{industry.icon}</div>
                <CardTitle>{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {industry.description}
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/industries/${industry.id}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Extra Section */}
      <section className="bg-[#635BFF] text-white py-16">
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
      </section>

      {/* CTA Section */}
      <section className="container mx-auto">
        <div className="mx-auto max-w-4xl rounded-lg border bg-background p-8 shadow-sm md:p-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to experience these features?
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Start your 14-day free trial today and discover how our platform
              can transform your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button variant="outline">
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Core Features Data
const coreFeatures = [
  {
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with powerful analytics tools and customizable dashboards tailored to your business needs.",
    icon: <BarChart2 className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Enterprise Security",
    description:
      "Protect your sensitive data with enterprise-grade security features and compliance controls.",
    icon: <Shield className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Team Collaboration",
    description:
      "Enhance productivity with tools designed for seamless team collaboration and communication.",
    icon: <Users className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Seamless Integration",
    description:
      "Connect with your existing tools and systems for a unified workflow and enhanced productivity.",
    icon: <Zap className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Automation",
    description:
      "Save time and reduce errors by automating repetitive tasks and workflows.",
    icon: <Clock className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Scalable Infrastructure",
    description:
      "Our cloud-based platform grows with your business, ensuring performance at any scale.",
    icon: <Database className="h-10 w-10 text-indigo-600" />,
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

// Industry Data
const industries = [
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Features designed for large organizations to streamline operations and enhance collaboration.",
    icon: "🏢",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Tools to optimize your online store, boost sales, and enhance customer experience.",
    icon: "🛒",
  },
  {
    id: "fintech",
    title: "Fintech & Banking",
    description:
      "Secure, compliant features for financial institutions and fintech companies.",
    icon: "💰",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "HIPAA-compliant tools to improve patient care and streamline administrative tasks.",
    icon: "🏥",
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "Features to manage projects, resources, and teams efficiently in the field.",
    icon: "🏗️",
  },
];
