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
import { ArrowLeft, Check, Calendar } from "lucide-react";
import SalesForm from "./sales-form";

export default function ContactSalesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16 mt-16">
      {/* Sales Contact Form Section */}
      <section className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="sticky top-8 space-y-8">
              <div>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
                >
                  <ArrowLeft className="h-4 w-4 mr-2 font-grotesk" /> Back to
                  Contact Options
                </Link>
                <h2 className="text-3xl font-bold tracking-tight font-grotesk">
                  Contact Our Sales Team
                </h2>
                <p className="mt-4 text-muted-foreground font-sans">
                  Our sales team is here to understand your business needs and
                  help you find the perfect SaaS solution tailored to your
                  industry.
                </p>
              </div>

              <div className="space-y-4">
                {salesBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 rounded-full bg-indigo-100 p-1">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg font-grotesk">
                        {benefit?.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit?.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="rounded-md bg-indigo-50 p-2 w-fit">
                      <Calendar className="h-6 w-6 text-indigo-600" />
                    </div>
                    <CardTitle className="font-grotesk">
                      Prefer to schedule a call?
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Book a time with our sales team directly.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-indigo-600 hover:bg-indigo-700 font-grotesk text-base"
                  >
                    <Link href="/schedule-call">Schedule a Call</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="font-grotesk text-xl">
                  Contact Our Sales Team
                </CardTitle>
                <CardDescription className="font-sans">
                  Fill out the form below and a sales representative will
                  contact you within 1 business day.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SalesForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-grotesk">
              Ready to build your custom solution?
            </h2>
            <p className="text-xl text-white/80 mb-8 font-sans">
              Let's discuss how our technology expertise can help you create a
              powerful, scalable SaaS platform tailored to your industry needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <Link href="/schedule-call">Schedule a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white bg-indigo-600 border-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/contact-us">Contact us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

// Sales Benefits Data
const salesBenefits = [
  {
    title: "Industry Expertise",
    description:
      "Our sales team has deep knowledge of various industries and can help identify the best solution for your specific needs.",
  },
  {
    title: "Customized Solutions",
    description:
      "We don't believe in one-size-fits-all. Our team will work with you to create a tailored SaaS solution for your business.",
  },
  {
    title: "Transparent Pricing",
    description:
      "We provide clear, detailed quotes with no hidden fees or surprises, ensuring you understand the full investment.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end after the sale. We provide comprehensive support throughout implementation and beyond.",
  },
];

// Sales Team Data
const salesTeam = [
  {
    name: "Jennifer Martinez",
    title: "VP of Sales",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    title: "Enterprise Sales Director",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Sarah Johnson",
    title: "Industry Solutions Specialist",
    image: "/placeholder.svg?height=60&width=60",
  },
];

// Interests Data
const interests = [
  "Custom SaaS Development",
  "Industry-Specific Solutions",
  "Enterprise Integration",
  "Data Migration",
  "System Modernization",
  "Maintenance & Support",
  "Consulting Services",
  "Training & Onboarding",
];

// Testimonials Data
const testimonials = [
  {
    quote:
      "The sales team took the time to understand our unique business challenges and proposed a solution that perfectly fit our needs. The implementation was smooth, and the results have exceeded our expectations.",
    name: "Robert Thompson",
    title: "CTO, Global Manufacturing Corp",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "What impressed me most was how knowledgeable the sales team was about our industry. They weren't just selling software; they were providing solutions to our specific challenges.",
    name: "Emily Rodriguez",
    title: "Operations Director, MediCare Health",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The transparent pricing and detailed project timeline gave us confidence in our decision. The solution has helped us reduce operational costs by 35% and improve team productivity across all departments.",
    name: "David Wilson",
    title: "CEO, BuildRight Construction",
    image: "/placeholder.svg?height=80&width=80",
  },
];

// Case Studies Data
const caseStudies = [
  {
    title: "Enterprise Transformation",
    industry: "Manufacturing",
    description:
      "How a global manufacturing company streamlined operations and improved efficiency by 45% with our custom SaaS solution.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/case-studies/enterprise-transformation",
  },
  {
    title: "Healthcare Innovation",
    industry: "Healthcare",
    description:
      "A regional healthcare provider reduced administrative costs by 42% while improving patient satisfaction scores.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/case-studies/healthcare-innovation",
  },
  {
    title: "Construction Efficiency",
    industry: "Construction",
    description:
      "How a construction company reduced project delays by 28% and improved resource allocation across multiple job sites.",
    image: "/placeholder.svg?height=300&width=400",
    href: "/case-studies/construction-efficiency",
  },
];
