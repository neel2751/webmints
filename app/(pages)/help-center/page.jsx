import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  HelpCircle,
  MessageSquare,
  BookOpen,
  Video,
  Users,
  Rocket,
  CreditCard,
  ShieldQuestion,
  Star,
} from "lucide-react";
import FAQs from "@/components/faq";
import SupportFaqSchema from "@/components/seo/supportFaqSchema";

export const metadata = {
  title: "Help & Support Centre | Webmints SaaS Platform Users",
  description:
    "Get help with your Webmints SaaS platform through documentation, step-by-step tutorials, support plans, and answers to frequently asked support questions.",
  alternates: {
    canonical: "/help-center",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/help-center",
    images: ["/opengraph-image.png"],
  },
};

export default function HelpSupportPage() {
  return (
    <main className="flex flex-col gap-16 pb-16 font-grotesk">
      <SupportFaqSchema />
      <section>
        <div className="container bg-white  2xl:max-w-[1400px] mx-auto p-4 relative py-32 lg:pb-60 overflow-hidden">
          <div className="relative">
            <span className="text-xs flex items-center font-medium uppercase text-indigo-600 gap-2">
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
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 9h.01"></path>
                <path d="M11 12h1v4h1"></path>
              </svg>
              Help center
            </span>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-black/90 lg:text-balance mt-8">
              Explore our Help Center for answers to your questions and
              assistance.
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-medium tracking-tight leading-snug text-gray-600">
              Find comprehensive resources, guides, and support options to help
              you get the most out of our SaaS solutions. Check out our FAQs,
              tutorials, and contact our support team for personalized
              assistance.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container bg-white  2xl:max-w-[1400px] mx-auto p-4 py-4">
          <div className="items-start grid grid-cols-1 gap-2 lg:grid-cols-4 -mt-20 lg:-mt-40 z-20">
            {/* Cards */}
            {helpLinks.map((link, index) => (
              <div
                key={index}
                className="relative overflow-hidden  group flex h-full flex-col gap-12 lg:gap-24 bg-white rounded-xl shadow-xl p-8 justify-center transition-all  hover:bg-gray-50"
              >
                <Link
                  className="absolute inset-0 z-10"
                  title="Account Management"
                  href={link.href || "#"}
                ></Link>
                <div className="relative flex flex-col justify-between h-full gap-8">
                  <div>
                    <div className="flex">
                      <div className="flex p-2 bg-indigo-600 rounded-lg transition-all duration-300 text-white group-hover:bg-indigo-800 group-hover:text-white">
                        {link.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mt-2 tracking-tight text-gray-800">
                        {link.title}
                      </h3>
                      <p className="text-md mt-2 font-medium tracking-tight leading-snug text-gray-600">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm  flex items-center font-medium gap-2 text-black/80  tracking-tight">
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right size-4 duration-300 ease-out group-hover:translate-x-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f9fafb" }}>
        <div className="container 2xl:max-w-[1400px] mx-auto p-4 py-12 lg:py-24">
          <div className="items-end grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="text-xs flex items-center font-medium uppercase text-indigo-600 gap-2">
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
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 9h.01"></path>
                  <path d="M11 12h1v4h1"></path>
                </svg>
                Submit a ticket
              </p>
              <h2 className="text-5xl font-bold mt-2 text-gray-900 mb-6 tracking-tighter">
                Are you looking for personalized assistance?
              </h2>
              <p className="text-lg text-gray-600 font-medium tracking-tight mt-2">
                If you need personalized assistance, we're here to help. Our
                support team is ready to assist you with any questions or
                concerns you may have. Submit a ticket and we'll get back to you
                as soon as possible.
              </p>
            </div>
            <div className="flex lg:ml-auto">
              <Link
                className="flex ring border relative ease-in-out text-center font-medium duration-300 items-center shadow-bottom justify-center transition-all overflow-hidden focus:outline-2 inset-shadow-xs outline-offset-4 hover:opacity-90 hover:shadow-none border-transparent focus:outline-indigo-300 inset-shadow-white/30 focus-visible:outline-none active:inset-shadow-transparent text-white bg-indigo-800 hover:bg-indigo-900 ring-indigo-800 h-10 px-4 py-3 text-base rounded-lg gap-2 group"
                href="/contact-us"
              >
                Submit a ticket
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto">
        {/* <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Find quick answers to common questions about our platform and
            services.
          </p>
        </div> */}

        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 font-medium tracking-tight max-w-3xl">
            Have questions? We're here to help. Explore our FAQs to find answers
            to common inquiries about our services and solutions.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <FAQs faqs={faqs} />
        </div>
      </section>

      {/* Hero Section */}
      {/* <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Help & Support
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              We're here to help you get the most out of your custom SaaS
              solution with comprehensive resources and dedicated support.
            </p>
            <div className="relative mt-4 w-full max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for help articles, tutorials, and more..."
                className="pl-10 pr-4 py-6 font-medium tracking-wide"
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* Quick Links Section */}
      {/* <section className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 rounded-md bg-indigo-50 p-2 w-fit">
                  {link.icon}
                </div>
                <CardTitle className="">{link.title}</CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={link.href} className="">
                    {link.buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Support Options Tabs */}
      {/* <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
              Support Options
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Choose the support option that works best for you and your team.
            </p>
          </div>

          <Tabs defaultValue="documentation" className="mt-8">
            <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 w-full bg-indigo-50">
              {[
                { label: "Documentation", value: "documentation" },
                { label: "Tutorials", value: "tutorials" },
                { label: "Community", value: "community" },
                { label: "Contact Us", value: "contact" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center justify-center gap-2 rounded-xl py-3 text-base font-semibold text-muted-foreground data-[state=active]:bg-indigo-600 data-[state=active]:text-white bg-gray-200  w-full"
                >
                  {tab?.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted p-10">
              <TabsContent value="documentation" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Comprehensive Documentation</CardTitle>
                    <CardDescription>
                      Detailed guides and reference materials for every aspect
                      of your SaaS solution.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      {documentationLinks.map((doc, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 rounded-md bg-indigo-100 p-1">
                            <FileText className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{doc.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {doc.description}
                            </p>
                            <Link
                              href={doc.href}
                              className="mt-1 inline-block text-sm font-medium text-indigo-600 hover:underline"
                            >
                              Read Documentation
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/documentation">View All Documentation</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="tutorials" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Video & Written Tutorials</CardTitle>
                    <CardDescription>
                      Step-by-step guides to help you master every feature of
                      your custom solution.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      {tutorialLinks.map((tutorial, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 rounded-md bg-indigo-100 p-1">
                            {tutorial.type === "video" ? (
                              <Video className="h-5 w-5 text-indigo-600" />
                            ) : (
                              <FileText className="h-5 w-5 text-indigo-600" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold">{tutorial.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {tutorial.description}
                            </p>
                            <Link
                              href={tutorial.href}
                              className="mt-1 inline-block text-sm font-medium text-indigo-600 hover:underline"
                            >
                              {tutorial.type === "video"
                                ? "Watch Tutorial"
                                : "Read Tutorial"}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/tutorials">View All Tutorials</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="community" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Community Support</CardTitle>
                    <CardDescription>
                      Connect with other users and our team to get answers and
                      share best practices.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      {communityLinks.map((community, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1 rounded-md bg-indigo-100 p-1">
                            {community.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold">{community.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {community.description}
                            </p>
                            <Link
                              href={community.href}
                              className="mt-1 inline-block text-sm font-medium text-indigo-600 hover:underline"
                            >
                              Join Now
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/community">Explore Community</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Our Support Team</CardTitle>
                    <CardDescription>
                      Get in touch with our dedicated support team for
                      personalized assistance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-md bg-indigo-100 p-1">
                            <Mail className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Email Support</h3>
                            <p className="text-sm text-muted-foreground">
                              For general inquiries and non-urgent issues.
                            </p>
                            <a
                              href="mailto:support@saasify.com"
                              className="mt-1 inline-block text-sm font-medium text-indigo-600 hover:underline"
                            >
                              support@saasify.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-md bg-indigo-100 p-1">
                            <Phone className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Phone Support</h3>
                            <p className="text-sm text-muted-foreground">
                              For urgent issues requiring immediate assistance.
                            </p>
                            <a
                              href="tel:+18005551234"
                              className="mt-1 inline-block text-sm font-medium text-indigo-600 hover:underline"
                            >
                              +1 (800) 555-1234
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="mt-1 rounded-md bg-indigo-100 p-1">
                            <Clock className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">Support Hours</h3>
                            <p className="text-sm text-muted-foreground">
                              Monday - Friday: 9:00 AM - 8:00 PM EST
                              <br />
                              Saturday: 10:00 AM - 6:00 PM EST
                              <br />
                              Sunday: Closed (Email only)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border bg-background p-4">
                        <h3 className="font-semibold">Send Us a Message</h3>
                        <GlobalForm
                          groupedFields={groupedFields}
                          btnName={"Send Message"}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </section> */}

      {/* Support Plans Section */}
      {/* <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl ">
              Support Plans
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Choose the level of support that's right for your business needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {supportPlans.map((plan, index) => (
              <Card
                key={index}
                className={`flex flex-col ${
                  plan.popular ? "border-indigo-600 shadow-md relative" : ""
                } transition-all duration-200 hover:shadow-md`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium ">
                    Recommended
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold ">${plan.price}</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-0.5 text-indigo-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <span className="">{feature}</span>
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
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 ">
              Can't find what you're looking for?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our support team is ready to help you with any questions or issues
              you may have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <Link href="#contact-form">Contact Support</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white bg-indigo-600 hover:bg-white/10 hover:text-white"
              >
                <Link href="/documentation">Browse Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Quick Links Data
const quickLinks = [
  {
    title: "Documentation",
    description: "Browse our comprehensive guides and reference materials.",
    icon: <BookOpen className="h-6 w-6 text-indigo-600" />,
    href: "/documentation",
    buttonText: "View Documentation",
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides to help you master our platform.",
    icon: <Video className="h-6 w-6 text-indigo-600" />,
    href: "/tutorials",
    buttonText: "Watch Tutorials",
  },
  {
    title: "Community",
    description: "Connect with other users and share best practices.",
    icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
    href: "/community",
    buttonText: "Join Community",
  },
  {
    title: "Contact Support",
    description: "Get in touch with our dedicated support team.",
    icon: <HelpCircle className="h-6 w-6 text-indigo-600" />,
    href: "#contact-form",
    buttonText: "Contact Us",
  },
];

// Documentation Links Data
const documentationLinks = [
  {
    title: "Getting Started Guide",
    description:
      "Everything you need to know to get up and running with your new SaaS solution.",
    href: "/documentation/getting-started",
  },
  {
    title: "User Management",
    description:
      "Learn how to manage users, roles, and permissions in your custom solution.",
    href: "/documentation/user-management",
  },
  {
    title: "Integration Guide",
    description:
      "Detailed instructions for integrating with third-party services and APIs.",
    href: "/documentation/integrations",
  },
  {
    title: "Security Best Practices",
    description: "Recommendations for keeping your data and users secure.",
    href: "/documentation/security",
  },
];

// Tutorial Links Data
const tutorialLinks = [
  {
    title: "Dashboard Overview",
    description:
      "A comprehensive tour of your custom dashboard and its features.",
    type: "video",
    href: "/tutorials/dashboard-overview",
  },
  {
    title: "Data Import Guide",
    description: "Step-by-step instructions for importing your existing data.",
    type: "text",
    href: "/tutorials/data-import",
  },
  {
    title: "Reporting & Analytics",
    description: "How to create custom reports and analyze your business data.",
    type: "video",
    href: "/tutorials/reporting-analytics",
  },
  {
    title: "Mobile App Setup",
    description:
      "Setting up and using the mobile companion app for your solution.",
    type: "text",
    href: "/tutorials/mobile-setup",
  },
];

// Community Links Data
const communityLinks = [
  {
    title: "User Forum",
    description: "Ask questions, share ideas, and connect with other users.",
    icon: <MessageSquare className="h-5 w-5 text-indigo-600" />,
    href: "/community/forum",
  },
  {
    title: "Knowledge Base",
    description:
      "Community-contributed articles and solutions to common issues.",
    icon: <BookOpen className="h-5 w-5 text-indigo-600" />,
    href: "/community/knowledge-base",
  },
  {
    title: "Feature Requests",
    description: "Suggest and vote on new features for future updates.",
    icon: <FileText className="h-5 w-5 text-indigo-600" />,
    href: "/community/feature-requests",
  },
  {
    title: "User Groups",
    description: "Join industry-specific groups to share best practices.",
    icon: <Users className="h-5 w-5 text-indigo-600" />,
    href: "/community/user-groups",
  },
];

// FAQ Data
const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking the 'Forgot Password' link on the login page. You'll receive an email with instructions to create a new password. If you don't receive the email, please check your spam folder or contact support.",
  },
  {
    question: "Can I add more users to my account?",
    answer:
      "Yes, you can add additional users based on your subscription plan. Navigate to the User Management section in your dashboard, click 'Add User', and follow the prompts. If you need more user licenses than your current plan allows, please contact our sales team.",
  },
  {
    question: "How do I integrate with my existing systems?",
    answer:
      "Our platform offers various integration options including REST APIs, webhooks, and pre-built connectors for popular services. Check our Integration Documentation for detailed guides, or contact our support team for assistance with custom integrations.",
  },
  {
    question: "Is my data backed up?",
    answer:
      "Yes, we perform automated backups of all customer data daily. These backups are encrypted and stored securely. We retain daily backups for 30 days, weekly backups for 3 months, and monthly backups for 1 year. You can also manually export your data at any time.",
  },
  {
    question: "How do I report a bug or issue?",
    answer:
      "If you encounter a bug or issue, please contact our support team through the in-app support chat, email support@saasify.com, or call our support line. Please include as much detail as possible, including steps to reproduce the issue, screenshots, and any error messages you received.",
  },
  {
    question: "What are your support hours?",
    answer:
      "Our standard support hours are Monday through Friday, 9:00 AM to 8:00 PM EST, and Saturday from 10:00 AM to 6:00 PM EST. Premium and Enterprise support plans include extended hours and emergency support. Email support is monitored 24/7 for urgent issues.",
  },
];

// Support Plans Data
const supportPlans = [
  {
    name: "Standard Support",
    description: "Basic support for small businesses",
    price: 0,
    features: [
      "Email support during business hours",
      "48-hour response time",
      "Access to knowledge base",
      "Community forum access",
      "Monthly system updates",
    ],
    buttonText: "Get Started",
    href: "/contact-sales?location=standard-support",
    popular: false,
  },
  {
    name: "Premium Support",
    description: "Enhanced support for growing businesses",
    price: 299,
    features: [
      "Email and phone support",
      "12-hour response time",
      "Dedicated support agent",
      "Priority issue resolution",
      "Bi-weekly system updates",
      "Quarterly strategy sessions",
    ],
    buttonText: "Contact Sales",
    href: "/contact-sales?location=premium-support",
    popular: true,
  },
  {
    name: "Enterprise Support",
    description: "Comprehensive support for large organizations",
    price: 999,
    features: [
      "24/7 email and phone support",
      "4-hour response time",
      "Dedicated support team",
      "Emergency issue resolution",
      "Weekly system updates",
      "Monthly strategy sessions",
      "Custom development hours",
    ],
    buttonText: "Contact Sales",
    href: "/contact-sales?location=enterprise-support",
    popular: false,
  },
];

// Resources Data
const resources = [
  {
    title: "Implementation Guide",
    description:
      "A comprehensive guide to implementing your custom SaaS solution across your organization.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/resources/implementation-guide",
    buttonText: "Download Guide",
  },
  {
    title: "Webinar Library",
    description:
      "Recorded webinars covering advanced features, best practices, and case studies.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/resources/webinars",
    buttonText: "Browse Webinars",
  },
  {
    title: "API Documentation",
    description:
      "Technical documentation for developers looking to extend and integrate with our platform.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/resources/api-docs",
    buttonText: "View API Docs",
  },
];

const helpLinks = [
  {
    title: "Getting Started",
    description: "Learn how to set up and start using our platform.",
    icon: <Rocket className="h-5 w-5 text-white" />,
    href: "/helpcenter/getting-started",
  },
  {
    title: "Billing & Payments",
    description: "Information about billing, subscriptions, and payments.",
    icon: <CreditCard className="h-5 w-5 text-white" />,
    href: "/helpcenter/billing-payments",
  },
  {
    title: "Technical Issues",
    description: "Troubleshoot common technical problems and errors.",
    icon: <ShieldQuestion className="h-5 w-5 text-white" />,
    href: "/helpcenter/technical-issues",
  },
  {
    title: "Feature Requests",
    description: "Submit and vote on new feature requests.",
    icon: <Star className="h-5 w-5 text-white" />,
    href: "/helpcenter/feature-requests",
  },
];
