import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Cloud,
  Database,
  Shield,
  Users,
  BarChart3,
  Smartphone,
  Cog,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Rocket,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";

export const metadata = {
  title: "Our Services | Webmints - Custom SaaS Solutions",
  description:
    "Discover our comprehensive range of SaaS development services tailored to transform your business operations and drive growth.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-grotesk">
              🚀 Transforming Businesses Since 2020
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-grotesk">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Custom SaaS Solutions
              </span>
              <br />
              That Drive Results
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              From concept to deployment, we deliver cutting-edge SaaS
              applications tailored to your industry needs. Transform your
              business operations with our comprehensive development services.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <MessageSquare className="mr-2 h-5 w-5" />
                Start Your Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-200 hover:bg-indigo-50 bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 h-20 w-20 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 opacity-20 blur-xl" />
        <div className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-20 blur-xl" />
      </section>

      {/* Services Grid */}
      <section className="bg-muted/30 py-32">
        <div className="container mx-auto">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl font-grotesk">
                Services Tailored to Your Needs
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
                Explore our range of services designed to help you build,
                deploy, and scale your SaaS applications effectively.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
                          <h3 className="text-xl font-semibold font-grotesk">
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
            {/* Final CTA */}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-24">
        <div className="container mx-auto">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
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
                      <span className="text-xl font-bold font-grotesk">
                        {index + 1}
                      </span>
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
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
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
                      <h3 className="mb-2 font-semibold font-grotesk">
                        {item.title}
                      </h3>
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
                    <h3 className="text-2xl font-bold font-grotesk">
                      Industry Recognition
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 font-grotesk">
                        500+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Projects Delivered
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 font-grotesk">
                        98%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Client Satisfaction
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 font-grotesk">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Industries Served
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-indigo-600 font-grotesk">
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
      </section>

      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 py-16 rounded-lg my-12 container mx-auto">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl font-grotesk">
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
      </section>

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
                Maintain strong color contrast between text and background to
                support users with low vision and improve readability across
                different lighting conditions.
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

// Data
const processSteps = [
  {
    title: "Discovery & Planning",
    description:
      "We analyze your requirements, define project scope, and create a detailed roadmap for success.",
  },
  {
    title: "Design & Prototyping",
    description:
      "Our team creates intuitive designs and interactive prototypes to visualize your solution.",
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
      "User-centric UI/UX designs and interactive prototypes to visualize your solution.",
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
      "Performance Optimization",
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
      "SEO Optimization",
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
