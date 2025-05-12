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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, BarChart2, Shield, Zap, Clock, Database } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-100" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Tailored Pricing for Your Unique Needs
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
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
      </section>

      {/* Value Proposition Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose a Custom SaaS Solution?
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Investing in a tailored SaaS solution delivers long-term value that
            generic software simply can't match.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {valuePropositions.map((value, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 rounded-md bg-indigo-50 p-2 w-fit">
                  {value.icon}
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Factors Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Factors That Influence Your Pricing
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Understanding what goes into your custom quote helps you make
              informed decisions about your SaaS investment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative rounded-lg overflow-hidden border shadow-sm">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Custom SaaS Development"
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              {pricingFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-amber-100 p-1">
                    <Check className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{factor.title}</h3>
                    <p className="text-muted-foreground">
                      {factor.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Range Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Investment Ranges
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            While every project is unique, these ranges provide a general idea
            of investment levels based on project scope.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {investmentRanges.map((range, index) => (
            <Card
              key={index}
              className={`flex flex-col transition-all duration-200 hover:shadow-md`}
            >
              <CardHeader>
                <CardTitle>{range.name}</CardTitle>
                <CardDescription>{range.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-2xl font-bold">{range.priceRange}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {range.timeframe}
                </p>
                <ul className="space-y-2 mb-6">
                  {range.features.map((feature, idx) => (
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
                  className="w-full bg-indigo-600 hover:bg-indigo-700"
                >
                  <a href="#request-quote">Discuss Your Project</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Note: These ranges are provided as general guidelines. Your actual
            investment will be determined based on your specific requirements.
          </p>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Industry-Specific Solutions
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              We offer specialized solutions for different industries, each with
              unique pricing considerations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Card
                key={industry.id}
                className="transition-all duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 text-3xl">{industry.icon}</div>
                  <CardTitle>{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {industry.pricingNote}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/industries/${industry.id}`}>
                      View Industry Solutions
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI and Case Studies Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Return on Investment
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
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
                  src={study.image || "/placeholder.svg?height=300&width=400"}
                  alt={study.company}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{study.company}</CardTitle>
                <CardDescription>{study.industry}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">ROI:</span>
                    <span className="text-indigo-600 font-bold">
                      {study.roi}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Timeframe:</span>
                    <span>{study.timeframe}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  {study.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/case-studies">Read Full Case Study</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Request Quote Form Section */}
      <section id="request-quote" className="container scroll-mt-16 mx-auto">
        <div className="mx-auto max-w-4xl rounded-lg border bg-background p-8 shadow-md md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Request Your Custom Quote
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below, and our team will prepare a personalized
              quote based on your specific requirements.
            </p>
          </div>

          <form className="space-y-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Smith" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Acme Inc." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Project Size</Label>
              <RadioGroup
                defaultValue="medium"
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small" id="small" />
                  <Label htmlFor="small" className="font-normal">
                    Small (1-3 months)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium" className="font-normal">
                    Medium (3-6 months)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large" id="large" />
                  <Label htmlFor="large" className="font-normal">
                    Large (6+ months)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <select
                id="industry"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select your industry</option>
                <option value="enterprise">Enterprise</option>
                <option value="ecommerce">E-commerce</option>
                <option value="fintech">Fintech & Banking</option>
                <option value="healthcare">Healthcare</option>
                <option value="construction">Construction</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Project Requirements</Label>
              <Textarea
                id="requirements"
                placeholder="Please describe your project requirements, goals, and any specific features you need."
                rows={5}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="budget">Estimated Budget Range</Label>
              <select
                id="budget"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select budget range</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="100k-250k">$100,000 - $250,000</option>
                <option value="250k+">$250,000+</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="timeline">Desired Timeline</Label>
              <select
                id="timeline"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select timeline</option>
                <option value="1-3">1-3 months</option>
                <option value="3-6">3-6 months</option>
                <option value="6-12">6-12 months</option>
                <option value="12+">12+ months</option>
              </select>
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Submit Quote Request
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Find answers to common questions about our custom pricing and
            development process.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to discuss your custom SaaS solution?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our team is ready to help you build the perfect solution for your
              business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <a href="#request-quote">Request Custom Quote</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Value Propositions Data
const valuePropositions = [
  {
    title: "Perfectly Tailored Solution",
    description:
      "Unlike off-the-shelf software, our custom solutions are built specifically for your unique business processes and requirements.",
    icon: <Zap className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Scalable Architecture",
    description:
      "We design your solution to grow with your business, ensuring it can handle increasing users, data, and functionality over time.",
    icon: <Database className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Competitive Advantage",
    description:
      "Custom software gives you unique capabilities that your competitors don't have, helping you stand out in the market.",
    icon: <BarChart2 className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Integration Flexibility",
    description:
      "Seamlessly connect with your existing systems and third-party services for a unified workflow and enhanced productivity.",
    icon: <Zap className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Enhanced Security",
    description:
      "Custom security measures designed specifically for your industry requirements and compliance needs.",
    icon: <Shield className="h-10 w-10 text-indigo-600" />,
  },
  {
    title: "Long-term Cost Efficiency",
    description:
      "While the initial investment is higher than off-the-shelf solutions, custom SaaS typically offers better ROI over time.",
    icon: <Clock className="h-10 w-10 text-indigo-600" />,
  },
];

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
    description: "For small businesses with straightforward requirements",
    priceRange: "$25,000 - $75,000",
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

// Industry Data
const industries = [
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description: "Custom SaaS for large organizations with complex needs.",
    icon: "🏢",
    pricingNote:
      "Enterprise solutions typically start at $100,000+ due to complex requirements, integrations, and security needs.",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Specialized solutions for online retailers and e-commerce businesses.",
    icon: "🛒",
    pricingNote:
      "E-commerce solutions range from $50,000 to $200,000+ depending on complexity, integrations, and scale.",
  },
  {
    id: "fintech",
    title: "Fintech & Banking",
    description:
      "Secure, compliant solutions with pricing tailored for financial institutions.",
    icon: "💰",
    pricingNote:
      "Fintech solutions typically start at $100,000+ due to stringent security, compliance, and regulatory requirements.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "HIPAA-compliant solutions with pricing designed for healthcare providers.",
    icon: "🏥",
    pricingNote:
      "Healthcare solutions range from $75,000 to $250,000+ depending on compliance requirements and integration complexity.",
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "Pricing packages designed specifically for construction companies.",
    icon: "🏗️",
    pricingNote:
      "Construction industry solutions typically range from $50,000 to $150,000+ based on field requirements and integrations.",
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
