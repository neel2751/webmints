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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Check, AlertTriangle, Zap, BarChart2, Server } from "lucide-react";

export default function MaintenancePage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Maintenance & Support
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              We are committed to ensuring the long-term reliability,
              performance, and security of your custom SaaS solution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <a href="#maintenance-plans">View Maintenance Plans</a>
              </Button>
              <Button variant="outline">
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Support Period Banner */}
      <section className="container py-6 mx-auto">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-lg border-2 border-indigo-600 bg-white p-6 shadow-md">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-indigo-100"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-indigo-600 md:text-2xl">
                  Free Support Period
                </h3>
                <p className="mt-2 text-muted-foreground">
                  We provide{" "}
                  <span className="font-semibold text-neutral-600">
                    3 months of free maintenance and support
                  </span>{" "}
                  after the official handover of your system. After this period,
                  you can choose from our flexible maintenance plans.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-indigo-100 bg-white">
                  <div className="absolute inset-0 rounded-full border-t-8 border-indigo-600"></div>
                  <div className="text-center">
                    <span className="block text-3xl font-bold text-indigo-600">
                      3
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">
                      months free
                    </span>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-4 bg-indigo-600 hover:bg-indigo-700"
                >
                  <a href="#maintenance-plans">Explore Plans</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Support Channels
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Multiple communication channels to ensure you get the support you
            need, when you need it.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {supportChannels.map((channel, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 rounded-md bg-indigo-50 p-2 w-fit">
                  {channel.icon}
                </div>
                <CardTitle>{channel.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {channel.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SLA Response Time Section */}
      <section className="bg-black py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
              Response Time SLA
            </h2>
            <p className="max-w-[42rem] leading-normal text-white/80 sm:text-xl sm:leading-8">
              Our Service Level Agreement ensures timely responses and
              resolutions based on issue severity.
            </p>
          </div>
          <div className="container mx-auto py-8">
            <Table className=" bg-white rounded-xl">
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  {[
                    "Feature",
                    "Severity",
                    "Response Time",
                    "Resolution Target",
                  ].map((item, index) => (
                    <TableHead
                      key={index}
                      className="w-[200px] font-semibold text-black border-r last-of-type:border-r-0 border-gray-200 p-4 first-of-type:text-left text-center"
                    >
                      {item}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Initial cost */}
                {slaData.map((item, index) => (
                  <TableRow key={index} className="border-b border-gray-200">
                    <TableCell className="font-semibold border-r border-gray-200 p-4">
                      {item.description}
                    </TableCell>
                    <TableCell className="text-center border-r border-gray-200">
                      <Badge
                        className={` cursor-pointer ${
                          item.severity === "Critical"
                            ? "bg-red-100 text-red-800 hover:bg-red-200"
                            : item.severity === "High"
                            ? "bg-orange-100 text-orange-800 hover:bg-orange-200"
                            : item.severity === "Medium"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                            : "bg-green-100 text-green-800 hover:bg-green-200"
                        }`}
                      >
                        {item.severity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center border-r border-gray-200">
                      {item.responseTime}
                    </TableCell>
                    <TableCell className="text-center">
                      {item.resolutionTarget}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Maintenance Components Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Maintenance Components
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Our comprehensive maintenance approach ensures your SaaS solution
            remains secure, stable, and up-to-date.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {maintenanceComponents.map((component, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 rounded-md bg-indigo-50 p-2 w-fit">
                  {component.icon}
                </div>
                <CardTitle>{component.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {component.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Maintenance Plans Section */}
      <section
        id="maintenance-plans"
        className="bg-indigo-50 py-16 scroll-mt-16"
      >
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Maintenance Plans
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Choose the maintenance plan that best suits your business needs
              after the free 3-month period.
            </p>
          </div>

          <Tabs defaultValue="monthly" className="mx-auto max-w-7xl">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="annual">
                  Annual Billing (Save 15%)
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly" className="mt-0">
              <div className="grid gap-8 md:grid-cols-3">
                {maintenancePlans.map((plan, index) => (
                  <Card
                    key={index}
                    className={`flex flex-col ${
                      plan.popular ? "border-indigo-600 shadow-md relative" : ""
                    } transition-all duration-200 hover:shadow-md`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-6">
                        <span className="text-4xl font-bold">
                          ${plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground ml-1">
                          /month
                        </span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        className={`w-full ${
                          plan.popular
                            ? "bg-indigo-600 hover:bg-indigo-700"
                            : "bg-indigo-600/90 hover:bg-indigo-600"
                        }`}
                      >
                        <Link href={plan.href}>{plan.buttonText}</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="annual" className="mt-0">
              <div className="grid gap-8 md:grid-cols-3">
                {maintenancePlans.map((plan, index) => {
                  const annualPrice = Math.round(plan.monthlyPrice * 12 * 0.85);
                  const monthlySavings = Math.round(
                    plan.monthlyPrice * 12 - annualPrice
                  );

                  return (
                    <Card
                      key={index}
                      className={`flex flex-col ${
                        plan.popular
                          ? "border-indigo-600 shadow-md relative"
                          : ""
                      } transition-all duration-200 hover:shadow-md`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Recommended
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="mb-2">
                          <span className="text-4xl font-bold">
                            ${annualPrice}
                          </span>
                          <span className="text-muted-foreground ml-1">
                            /year
                          </span>
                        </div>
                        <div className="mb-6">
                          <span className="text-sm text-indigo-600 font-medium">
                            Save ${monthlySavings} compared to monthly billing
                          </span>
                        </div>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button
                          asChild
                          className={`w-full ${
                            plan.popular
                              ? "bg-indigo-600 hover:bg-indigo-700"
                              : "bg-indigo-600/90 hover:bg-indigo-600"
                          }`}
                        >
                          <Link href={plan.href}>{plan.buttonText}</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              All plans include our standard SLA response times. For custom
              maintenance plans or enterprise needs, please{" "}
              <Link
                href="/contact-sales"
                className="text-indigo-600 hover:underline"
              >
                contact our sales team
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Benefits of Ongoing Maintenance
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Investing in ongoing maintenance ensures your SaaS solution
            continues to deliver value and remains competitive.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative rounded-lg overflow-hidden border shadow-sm">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Maintenance Benefits"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            {maintenanceBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-indigo-100 p-1">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Maintenance Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Need a Custom Maintenance Plan?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              We understand that every business has unique needs. Contact us to
              discuss a tailored maintenance plan that's perfect for your
              specific requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <Link href="/help-support">Visit Help & Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16 mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Common questions about our maintenance and support services.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6">
            {maintenanceFaqs.map((faq, index) => (
              <Card
                key={index}
                className="transition-all duration-200 hover:shadow-sm"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Support Channels Data
const supportChannels = [
  {
    title: "Email Support",
    description:
      "Available during business hours for issue reporting and inquiries. We aim to respond to all emails within our SLA timeframes.",
    icon: <Mail className="h-6 w-6 text-indigo-600" />,
  },
  {
    title: "Instant Messaging",
    description:
      "Real-time communication via Slack, WhatsApp, or your preferred platform for quick clarifications and updates.",
    icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
  },
  {
    title: "Phone Support",
    description:
      "Direct phone support for critical issues requiring immediate escalation and resolution.",
    icon: <Phone className="h-6 w-6 text-indigo-600" />,
  },
];

// SLA Data
const slaData = [
  {
    severity: "Critical",
    description: "System down",
    responseTime: "Within 2 hours",
    resolutionTarget: "Within 1 working day",
  },
  {
    severity: "High",
    description: "Major bugs, feature failures",
    responseTime: "Within 4 hours",
    resolutionTarget: "Within 2-3 working days",
  },
  {
    severity: "Medium",
    description: "Non-critical bugs, UI issues",
    responseTime: "Within 1 working day",
    resolutionTarget: "Within 5 working days",
  },
  {
    severity: "Low",
    description: "Suggestions, minor improvements",
    responseTime: "Within 2 working days",
    resolutionTarget: "Based on roadmap/prioritization",
  },
];

// Maintenance Components Data
const maintenanceComponents = [
  {
    title: "Bug Fixes",
    description:
      "All identified bugs are logged, tracked, and resolved according to their severity level.",
    icon: <AlertTriangle className="h-6 w-6 text-indigo-600" />,
  },
  {
    title: "Regular Updates",
    description:
      "Monthly maintenance releases, quarterly feature updates, and immediate security patches.",
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
  },
  {
    title: "Monitoring",
    description:
      "Proactive system monitoring to identify and fix issues before they impact users.",
    icon: <BarChart2 className="h-6 w-6 text-indigo-600" />,
  },
  {
    title: "Error Logging",
    description:
      "Comprehensive error logging tools to track and resolve issues efficiently.",
    icon: <Server className="h-6 w-6 text-indigo-600" />,
  },
];

// Maintenance Plans Data
const maintenancePlans = [
  {
    name: "Basic Maintenance",
    description: "Essential maintenance for small businesses",
    monthlyPrice: 499,
    features: [
      "Standard SLA response times",
      "Email support during business hours",
      "Monthly maintenance releases",
      "Security patches",
      "Basic system monitoring",
      "Up to 5 hours of bug fixes per month",
    ],
    buttonText: "Select Basic Plan",
    href: "/contact?plan=basic",
    popular: false,
  },
  {
    name: "Professional Maintenance",
    description: "Comprehensive maintenance for growing businesses",
    monthlyPrice: 999,
    features: [
      "Enhanced SLA response times",
      "Email and instant messaging support",
      "Monthly maintenance releases",
      "Quarterly feature updates",
      "Security patches",
      "Advanced system monitoring",
      "Up to 15 hours of bug fixes per month",
      "Quarterly performance review",
    ],
    buttonText: "Select Pro Plan",
    href: "/contact?plan=professional",
    popular: true,
  },
  {
    name: "Enterprise Maintenance",
    description: "Premium maintenance for large organizations",
    monthlyPrice: 1999,
    features: [
      "Priority SLA response times",
      "24/7 support for critical issues",
      "Email, instant messaging, and phone support",
      "Monthly maintenance releases",
      "Quarterly feature updates",
      "Immediate security patches",
      "Comprehensive system monitoring",
      "Unlimited bug fixes",
      "Monthly performance review",
      "Dedicated support team",
    ],
    buttonText: "Select Enterprise Plan",
    href: "/contact?plan=enterprise",
    popular: false,
  },
];

// Maintenance Benefits Data
const maintenanceBenefits = [
  {
    title: "Maximized Uptime",
    description:
      "Proactive monitoring and quick issue resolution ensure your system remains available to users at all times.",
  },
  {
    title: "Enhanced Security",
    description:
      "Regular security updates and patches protect your data and users from emerging threats and vulnerabilities.",
  },
  {
    title: "Improved Performance",
    description:
      "Ongoing optimizations keep your application running smoothly, even as your user base and data grow.",
  },
  {
    title: "Reduced Technical Debt",
    description:
      "Regular updates prevent the accumulation of outdated code and technologies that can lead to costly rewrites.",
  },
  {
    title: "Future-Proofing",
    description:
      "Continuous improvements ensure your solution evolves with changing business needs and technological advancements.",
  },
  {
    title: "Peace of Mind",
    description:
      "With experts maintaining your system, you can focus on your core business without worrying about technical issues.",
  },
];

// Maintenance FAQs Data
const maintenanceFaqs = [
  {
    question: "What happens after the free 3-month maintenance period?",
    answer:
      "After the free 3-month period, you can choose one of our maintenance plans or opt for ad-hoc support. We'll contact you before the free period ends to discuss your options and ensure a smooth transition.",
  },
  {
    question: "Can I upgrade or downgrade my maintenance plan?",
    answer:
      "Yes, you can upgrade your maintenance plan at any time. Downgrades can be made at the end of your current billing cycle. Simply contact our support team to request a change to your plan.",
  },
  {
    question: "What's not covered in the maintenance plans?",
    answer:
      "Our maintenance plans cover bug fixes, security updates, and minor improvements. Major feature additions, significant UI redesigns, or integrations with new systems are typically considered new development and may require additional quotes.",
  },
  {
    question: "How do I report issues or request support?",
    answer:
      "You can report issues through our dedicated support portal, via email, or through your designated communication channel. For critical issues, please use phone support to ensure immediate attention.",
  },
  {
    question: "Do you provide support outside of business hours?",
    answer:
      "Our Professional and Enterprise plans include extended support hours. The Enterprise plan specifically includes 24/7 support for critical issues. Basic plan support is limited to standard business hours.",
  },
];

import { Mail, MessageSquare, Phone } from "lucide-react";
