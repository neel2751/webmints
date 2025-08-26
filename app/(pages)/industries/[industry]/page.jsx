import { CardFooter } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
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
  SquarePen,
  ChartNoAxesCombined,
  PocketKnife,
  CalendarClock,
  ArrowRight,
} from "lucide-react";
import GlobalCta from "@/components/web/cta/global-cta";
import FAQs from "@/components/faq";

// Industry data
const industries = {
  enterprise: {
    title: "Enterprise Solutions",
    description:
      "Streamline operations, enhance collaboration, and drive innovation across your enterprise with our scalable solutions.",
    heroImage: "/placeholder.svg?height=600&width=1200",
    icon: "🏢",
    benefits: [
      "Centralized data management across departments",
      "Enhanced team collaboration and communication",
      "Automated workflows and business processes",
      "Advanced analytics and reporting capabilities",
      "Enterprise-grade security and compliance",
      "Seamless integration with existing systems",
    ],
    features: [
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks and complex business processes to improve efficiency and reduce errors.",
        icon: <Zap className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Advanced Analytics",
        description:
          "Gain valuable insights from your data with powerful analytics and customizable dashboards.",
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
          "Enable seamless collaboration across teams and departments with integrated communication tools.",
        icon: <Users className="h-10 w-10 text-indigo-600" />,
      },
    ],
    caseStudies: [
      {
        title: "Global Manufacturing Company",
        description:
          "Reduced operational costs by 35% and improved team productivity by implementing our enterprise solution.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "International Retail Chain",
        description:
          "Streamlined inventory management across 500+ locations and improved data accuracy by 98%.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    faqs: [
      {
        question: "Can the platform scale with our business as we grow?",
        answer:
          "Yes, it's built on a scalable, multi-tenant architecture that supports enterprise-grade deployments with thousands of users and complex operations.",
      },
      {
        question: "What level of data security and compliance do you offer?",
        answer:
          "We comply with industry standards like SOC 2, ISO 27001, and GDPR, offering features like audit logs, SSO, and encryption at rest and in transit.",
      },
      {
        question:
          "Can we integrate it with our existing enterprise tools (ERP, CRM, etc.)?",
        answer:
          "Absolutely. Our robust API and prebuilt connectors allow seamless integration with major enterprise systems and custom tools.",
      },
      {
        question: "How is onboarding handled for large, distributed teams?",
        answer:
          "Our team supports phased onboarding across regions and departments, offering dedicated onboarding managers, training, and setup.",
      },
      {
        question: "Can we customize roles, permissions, and workflows?",
        answer:
          "Yes. You can define granular roles, access levels, and workflows to mirror your internal processes precisely.",
      },
      {
        question: "Is there support for white labeling and internal branding?",
        answer:
          "Yes, we offer full white labeling—from logos and colors to custom domains and dashboards.",
      },
    ],
  },
  ecommerce: {
    title: "E-commerce Solutions",
    description:
      "Boost sales, optimize customer experience, and manage your online store efficiently with our e-commerce tools.",
    heroImage: "/placeholder.svg?height=600&width=1200",
    icon: "🛒",
    benefits: [
      "Seamless omnichannel shopping experience",
      "Intelligent inventory and order management",
      "Personalized customer journeys and recommendations",
      "Integrated payment processing and security",
      "Advanced analytics for sales and customer behavior",
      "Marketing automation and campaign management",
    ],
    features: [
      {
        title: "Inventory Management",
        description:
          "Real-time inventory tracking across multiple channels and locations to prevent stockouts and overstock.",
        icon: <Database className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Customer Analytics",
        description:
          "Understand customer behavior and preferences to optimize your marketing and product offerings.",
        icon: <BarChart2 className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Payment Security",
        description:
          "PCI-compliant payment processing with fraud detection and prevention capabilities.",
        icon: <Shield className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Marketing Automation",
        description:
          "Create and manage targeted marketing campaigns based on customer segments and behaviors.",
        icon: <Zap className="h-10 w-10 text-indigo-600" />,
      },
    ],
    caseStudies: [
      {
        title: "Fashion Retailer",
        description:
          "Increased online sales by 45% and reduced cart abandonment rate by 30% within 6 months.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Electronics Marketplace",
        description:
          "Improved inventory accuracy by 99% and reduced fulfillment time by 40% across multiple warehouses.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    faqs: [
      {
        question:
          "Can I connect this to my Shopify, WooCommerce, or Magento store?",
        answer:
          "Yes, we offer native integrations and custom API support for seamless connectivity with major platforms.",
      },
      {
        question: "How do you handle product and order management?",
        answer:
          "You get a centralized dashboard to manage inventory, order tracking, shipping updates, and returns in real time.",
      },
      {
        question: "Does your system support multi-vendor marketplaces?",
        answer:
          "Yes, our platform allows you to onboard vendors, assign permissions, and manage commissions and payouts.",
      },
      {
        question: "What about marketing and customer engagement tools?",
        answer:
          "We offer tools for personalized emails, abandoned cart recovery, promotions, and integrated CRM features.",
      },
      {
        question: "Can I track performance and KPIs?",
        answer:
          "Absolutely. Use customizable dashboards to monitor sales, traffic, inventory, and user behavior with real-time insights.",
      },
      {
        question: "Is it mobile-optimized for buyers and sellers?",
        answer:
          "100%. Every interface is fully responsive, ensuring smooth mobile experiences for both customers and vendors.",
      },
    ],
  },
  fintech: {
    title: "Fintech & Banking Solutions",
    description:
      "Secure, compliant, and innovative solutions for financial institutions and fintech companies.",
    heroImage: "/placeholder.svg?height=600&width=1200",
    icon: "💰",
    benefits: [
      "Bank-grade security and compliance frameworks",
      "Automated regulatory reporting and compliance",
      "Seamless integration with banking systems",
      "Advanced fraud detection and prevention",
      "Real-time transaction processing and monitoring",
      "Customer identity verification and KYC automation",
    ],
    features: [
      {
        title: "Compliance Automation",
        description:
          "Automate regulatory compliance processes and reporting to reduce risk and save time.",
        icon: <Shield className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Fraud Detection",
        description:
          "AI-powered fraud detection and prevention to protect your business and customers.",
        icon: <Shield className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Financial Analytics",
        description:
          "Comprehensive analytics and reporting for financial performance and risk assessment.",
        icon: <BarChart2 className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Real-time Processing",
        description:
          "Process transactions and updates in real-time with high availability and reliability.",
        icon: <Clock className="h-10 w-10 text-indigo-600" />,
      },
    ],
    caseStudies: [
      {
        title: "Digital Banking Startup",
        description:
          "Reduced customer onboarding time by 80% while maintaining full regulatory compliance.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Investment Management Firm",
        description:
          "Improved portfolio analysis accuracy and reduced reporting time from days to minutes.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    faqs: [
      {
        question: "Can educators create and assign custom learning content?",
        answer:
          "Yes, you can build courses, modules, assessments, and learning paths tailored to individual or group needs.",
      },
      {
        question: "Is the platform optimized for mobile and tablets?",
        answer:
          "Yes, students and teachers can access the full experience on smartphones and tablets.",
      },
      {
        question: "How do you ensure student data privacy and compliance?",
        answer:
          "We are FERPA- and GDPR-compliant, with secure login, encrypted data, and detailed access controls.",
      },
      {
        question: "Can I manage multiple campuses or departments?",
        answer:
          "Yes, our multi-tenancy allows managing various institutions or departments under a unified platform.",
      },
      {
        question: "What kind of analytics are available for educators?",
        answer:
          "Educators can track student progress, attendance, test performance, and engagement in real time.",
      },
      {
        question: "Do you support live classes or video content?",
        answer:
          "Yes, you can integrate with Zoom, Google Meet, or embed video lessons and recorded sessions.",
      },
    ],
  },
  healthcare: {
    title: "Healthcare Solutions",
    description:
      "HIPAA-compliant solutions that improve patient care, streamline administrative tasks, and enhance data security.",
    heroImage: "/placeholder.svg?height=600&width=1200",
    icon: "🏥",
    benefits: [
      "HIPAA-compliant data storage and processing",
      "Streamlined patient records management",
      "Improved care coordination and communication",
      "Reduced administrative burden and paperwork",
      "Enhanced patient engagement and satisfaction",
      "Data-driven insights for better clinical outcomes",
    ],
    features: [
      {
        title: "Patient Records",
        description:
          "Secure, HIPAA-compliant patient records management with easy access and updates.",
        icon: <Database className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Care Coordination",
        description:
          "Tools for seamless communication and coordination between healthcare providers.",
        icon: <Users className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Healthcare Analytics",
        description:
          "Analyze clinical data to identify trends and improve patient outcomes.",
        icon: <BarChart2 className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Compliance Management",
        description:
          "Automated compliance monitoring and reporting for healthcare regulations.",
        icon: <Shield className="h-10 w-10 text-indigo-600" />,
      },
    ],
    caseStudies: [
      {
        title: "Regional Hospital Network",
        description:
          "Reduced administrative costs by 25% and improved patient satisfaction scores by 40%.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Specialty Medical Practice",
        description:
          "Increased patient throughput by 30% while maintaining high quality of care and documentation.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    faqs: [
      {
        question: "Is your platform HIPAA and GDPR compliant?",
        answer:
          "Yes, our platform is fully compliant and includes encryption, audit trails, and access control for healthcare-grade security.",
      },
      {
        question: "Can we integrate existing EHR or EMR systems?",
        answer:
          "Yes, we support HL7/FHIR standards and offer custom integration support for popular systems like Epic and Cerner.",
      },
      {
        question: "How do you handle patient or staff data access?",
        answer:
          "Role-based permissions ensure that only authorized users can view or edit specific data.",
      },
      {
        question: "Do you support telehealth or patient communication tools?",
        answer:
          "Yes, we offer secure messaging, appointment scheduling, and integration with telehealth platforms.",
      },
      {
        question: "Can I create customizable forms and patient records?",
        answer:
          "Yes, forms and workflows can be tailored to your operations, from intake to diagnosis and follow-up.",
      },
      {
        question: "What reporting and analytics do you provide?",
        answer:
          "Gain insights into patient flow, treatment outcomes, billing efficiency, and regulatory compliance via real-time dashboards.",
      },
    ],
  },
  construction: {
    title: "Construction Solutions",
    description:
      "Manage projects, resources, and teams efficiently with our construction-specific SaaS solutions.",
    heroImage: "/placeholder.svg?height=600&width=1200",
    icon: "🏗️",
    benefits: [
      "Centralized project management and documentation",
      "Real-time progress tracking and reporting",
      "Efficient resource allocation and scheduling",
      "Improved communication between office and field",
      "Enhanced safety compliance and incident reporting",
      "Streamlined bidding and estimation processes",
    ],
    features: [
      {
        title: "Project Management",
        description:
          "Comprehensive tools for planning, scheduling, and tracking construction projects.",
        icon: <Clock className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Resource Allocation",
        description:
          "Optimize the allocation of labor, equipment, and materials across multiple projects.",
        icon: <Users className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Field Reporting",
        description:
          "Mobile-friendly tools for real-time reporting from construction sites.",
        icon: <Zap className="h-10 w-10 text-indigo-600" />,
      },
      {
        title: "Safety Compliance",
        description:
          "Track and manage safety compliance, incidents, and training requirements.",
        icon: <Shield className="h-10 w-10 text-indigo-600" />,
      },
    ],
    caseStudies: [
      {
        title: "Commercial Builder",
        description:
          "Reduced project delays by 35% and improved budget accuracy by implementing our construction management solution.",
        image: "/placeholder.svg?height=300&width=400",
      },
      {
        title: "Infrastructure Developer",
        description:
          "Improved field-to-office communication and reduced rework by 28% on large-scale projects.",
        image: "/placeholder.svg?height=300&width=400",
      },
    ],
    faqs: [
      {
        question: "Can I manage multiple projects and job sites at once?",
        answer:
          "Yes, our platform is built for multi-site operations with centralized oversight and site-specific permissions.",
      },
      {
        question: "How does task and team management work?",
        answer:
          "Assign tasks, set deadlines, monitor progress, and enable real-time communication with on-site teams through mobile.",
      },
      {
        question: "Is there support for blueprint or document sharing?",
        answer:
          "Yes, securely upload, annotate, and share blueprints, contracts, or checklists with team members.",
      },
      {
        question: "How customizable are the workflows?",
        answer:
          "Fully customizable—you can define project templates, dependencies, schedules, and approval steps.",
      },
      {
        question: "Does it work offline on construction sites?",
        answer:
          "Yes, our mobile app supports offline mode, syncing data once a connection is restored.",
      },
      {
        question: "Can I track budgets and resource allocation?",
        answer:
          "Absolutely. Monitor budget usage, labor hours, equipment allocation, and cost forecasts in real time.",
      },
    ],
  },
};

export default async function IndustryPage({ params }) {
  const { industry } = await params;

  // Check if the industry exists in our data
  if (!industries[industry]) {
    notFound();
  }

  const industryData = industries[industry];

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4 font-grotesk">
              {industryData.title}
            </h1>
            <p className="text-xl text-white/80 mb-8 font-sans">
              {industryData.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 font-grotesk font-medium text-base">
                Request Demo
              </Button>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-indigo-600 font-grotesk bg-transparent font-medium text-base"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb-32 pt-16">
        <div className="border-y">
          <div className="container flex flex-col gap-6 border-x py-4 max-lg:border-x lg:py-8 px-8 mx-auto">
            <span
              data-slot="badge"
              className="inline-flex items-center justify-center rounded-md border py-0.5 whitespace-nowrap shrink-0 [&amp;>svg]:size-3 [&amp;>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-foreground [a&amp;]:hover:bg-accent [a&amp;]:hover:text-accent-foreground w-fit gap-1 bg-card px-3 text-sm font-normal tracking-tight shadow-sm"
            >
              <PocketKnife className="size-4" />
              <span>Features</span>
            </span>
            <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl font-grotesk">
              Key Benefits for Enterprise Solutions
            </h2>
            <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground">
              Our solutions are specifically designed to address the unique
              challenges of the enterprise solutions industry.
            </p>
          </div>
        </div>
        <div className="container border-x px-0 mx-auto">
          <div className="flex flex-col items-stretch gap-0 divide-y rounded-none lg:flex-row lg:divide-x lg:divide-y-0">
            <div
              role="tablist"
              className="text-muted-foreground items-center justify-center flex h-auto w-full flex-col rounded-none border-b bg-transparent p-0 lg:w-1/2 lg:border-r lg:border-b-0"
            >
              <button
                type="button"
                className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent text-sm font-medium transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group relative flex w-full rounded-none px-4 py-4 text-start whitespace-normal data-[state=active]:shadow-none lg:px-6 lg:py-5 border-b"
              >
                <div className="absolute bottom-[-1px] left-0 z-10 h-[2px] w-0 bg-linear-to-r from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2"></div>
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-1.5">
                    <div className="size-8 p-1 border border-indigo-100 text-indigo-600 rounded-md flex items-center justify-center">
                      <SquarePen className="size-4" />
                    </div>
                    <h3 className="text-lg tracking-[-0.36px] font-grotesk">
                      Centralized data management across departments
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm tracking-[-0.32px] text-muted-foreground lg:text-base">
                    Create, prioritize, and delegate tasks effortlessly. AI
                    helps you identify what matters most with smart
                    recommendations and automated workflows.
                  </p>
                </div>
              </button>
              <button
                type="button"
                className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent text-sm font-medium transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group relative flex w-full rounded-none px-4 py-4 text-start whitespace-normal data-[state=active]:shadow-none lg:px-6 lg:py-5 border-b"
              >
                <div className="absolute bottom-[-1px] left-0 z-10 h-[2px] w-0 bg-linear-to-r from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2"></div>
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-1.5">
                    <div className="size-8 p-1 border border-indigo-100 text-indigo-600 rounded-md flex items-center justify-center">
                      <CalendarClock className="size-4" />
                    </div>
                    <h3 className="text-lg tracking-[-0.36px] font-grotesk">
                      Automated workflows and business processes
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm tracking-[-0.32px] text-muted-foreground lg:text-base">
                    Let AI find the best time slots for meetings, reminders, and
                    tasks based on your calendar and working habits. Stay
                    organized without the hassle.
                  </p>
                </div>
              </button>
              <button
                type="button"
                className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 border border-transparent text-sm font-medium transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([class*='size-'])]:size-4 group relative flex w-full rounded-none px-4 py-4 text-start whitespace-normal data-[state=active]:shadow-none lg:px-6 lg:py-5"
              >
                <div className="absolute bottom-[-1px] left-0 z-10 h-[2px] w-0 bg-linear-to-r from-blue-600 via-sky-300 to-transparent transition-all duration-300 group-data-[state=active]:w-1/2"></div>
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-1.5">
                    <div className="size-8 p-1 border border-indigo-100 text-indigo-600 rounded-md flex items-center justify-center">
                      <ChartNoAxesCombined className="size-4" />
                    </div>
                    <h3 className="text-lg tracking-[-0.36px] font-grotesk">
                      Enterprise-grade security and compliance
                    </h3>
                  </div>
                  <p className="mt-2.5 text-sm tracking-[-0.32px] text-muted-foreground lg:text-base">
                    Track your productivity with AI-powered insights. Get weekly
                    summaries and actionable tips to improve your workflow and
                    manage workloads better.
                  </p>
                </div>
              </button>
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

      {/* Features Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
              Industry-Specific Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground font-sans">
              Powerful tools designed specifically for{" "}
              {industryData.title.toLowerCase()} businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryData.features.map((feature, index) => (
              <Card key={index} className="bg-white">
                <CardHeader>
                  <div className="mb-2">{feature.icon}</div>
                  <CardTitle className="font-grotesk">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base font-sans">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      {/* FAQ Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[44rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-sans tracking-tight">
              Find quick answers to common questions about our services and
              support.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FAQs faqs={industryData?.faqs} />
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4 font-grotesk">
                Didn't find what you were looking for? Check our comprehensive
                help center.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-500 hover:text-white font-grotesk"
              >
                <Link href="/help-support" className="font-grotesk">
                  Visit Help Center <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GlobalCta
        title={"Ready to build your custom solution?"}
        desc={
          "Let's discuss how our technology expertise can help you create a powerful, scalable SaaS platform tailored to your industry needs."
        }
        mainBtn={{ name: "Explore Plan", link: "/pricing" }}
        btn={{ name: "Schedule Call", link: "/schedule-call" }}
      />
    </div>
  );
}
