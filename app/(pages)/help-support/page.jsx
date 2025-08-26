"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Search,
  FileText,
  HelpCircle,
  MessageSquare,
  BookOpen,
  Video,
  Mail,
  Phone,
  Clock,
  Users,
} from "lucide-react";
import FAQs from "@/components/faq";
import { GlobalForm } from "@/components/form/globalForm";

export default function HelpSupportPage() {
  const validationOptions = {
    minLength: {
      value: 3,
      message: "Minimum 3 characters required",
    },
    maxLength: {
      value: 20,
      message: "Maximum 20 characters allowed",
    },
  };

  const emailValidation = {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email format. Please check and try again.",
    },
  };
  const phoneValidation = {
    required: "Phone No. is required",
    pattern: {
      value: /^\d{10}$/,
      message: "Must be exactly 10 digits.",
    },
  };

  const groupedFields = [
    {
      fields: [
        {
          name: "name",
          type: "text",
          labelText: "Name",
          size: true,
          placeholder: "Enter Name",
          validationOptions: {
            required: "Name is required",
            ...validationOptions,
          },
        },
        {
          name: "email",
          type: "text",
          labelText: "Email",
          placeholder: "Enter Email",
          validationOptions: emailValidation,
        },

        {
          name: "subject",
          type: "text",
          size: true,
          labelText: "Subject",
          placeholder: "Enter your subject",
          validationOptions: {
            required: "Requirement is required",
            ...validationOptions,
          },
        },
        {
          name: "message",
          type: "textarea",
          size: true,
          labelText: "Message",
          placeholder: "Enter your message",
          validationOptions: {
            required: "Message is required",
          },
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-grotesk">
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
                className="pl-10 pr-4 py-6 font-grotesk font-medium tracking-wide"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto">
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
                <CardTitle className="font-grotesk">{link.title}</CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={link.href} className="font-grotesk">
                    {link.buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Support Options Tabs */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
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
                  className="flex items-center justify-center gap-2 rounded-xl py-3 text-base font-semibold text-muted-foreground data-[state=active]:bg-indigo-600 data-[state=active]:text-white bg-gray-200 font-grotesk w-full"
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
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Find quick answers to common questions about our platform and
            services.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <FAQs faqs={faqs} />
        </div>
      </section>

      {/* Support Plans Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
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
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium font-grotesk">
                    Recommended
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="mb-6">
                    <span className="text-4xl font-bold font-grotesk">
                      ${plan.price}
                    </span>
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
                        <span className="font-grotesk">{feature}</span>
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
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-grotesk">
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
    </div>
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
    buttonText: "Current Plan",
    href: "#",
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
    buttonText: "Upgrade Now",
    href: "/upgrade-support",
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
    href: "/contact-sales",
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
