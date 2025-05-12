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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Check, Calendar, ArrowRight } from "lucide-react";

export default function ContactSalesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Contact Sales
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Let's discuss how our custom SaaS solutions can help your business
              grow and overcome industry-specific challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Sales Contact Form Section */}
      <section className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="sticky top-8 space-y-8">
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Contact Options
                </Link>
                <h2 className="text-3xl font-bold tracking-tight">
                  Why Work With Us
                </h2>
                <p className="mt-4 text-muted-foreground">
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
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <div className="mb-2 rounded-md bg-indigo-50 p-2 w-fit">
                    <Calendar className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle>Prefer to schedule a call?</CardTitle>
                  <CardDescription>
                    Book a time with our sales team directly.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Link href="/schedule-call">Schedule a Call</Link>
                  </Button>
                </CardFooter>
              </Card>

              <div className="rounded-lg border p-6">
                <h3 className="font-semibold text-lg mb-4">Our Sales Team</h3>
                <div className="space-y-4">
                  {salesTeam.map((member, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Image
                        src={
                          member.image || "/placeholder.svg?height=60&width=60"
                        }
                        alt={member.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Contact Our Sales Team</CardTitle>
                <CardDescription>
                  Fill out the form below and a sales representative will
                  contact you within 1 business day.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Contact Information
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name *</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name *</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email *</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" required />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Company Information
                      </h3>
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name *</Label>
                          <Input id="company" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="job-title">Job Title *</Label>
                          <Input id="job-title" required />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry *</Label>
                          <select
                            id="industry"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
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
                          <Label htmlFor="company-size">Company Size *</Label>
                          <select
                            id="company-size"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="501-1000">501-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label htmlFor="website">Company Website</Label>
                        <Input id="website" type="url" placeholder="https://" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Project Information
                      </h3>
                      <div className="space-y-2">
                        <Label>What are you interested in? *</Label>
                        <div className="grid gap-2 md:grid-cols-2">
                          {interests.map((interest, index) => (
                            <div
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <Checkbox id={`interest-${index}`} />
                              <Label
                                htmlFor={`interest-${index}`}
                                className="font-normal"
                              >
                                {interest}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label>Project Timeline *</Label>
                        <RadioGroup defaultValue="1-3">
                          <div className="grid gap-2 md:grid-cols-2">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="1-3" id="timeline-1-3" />
                              <Label
                                htmlFor="timeline-1-3"
                                className="font-normal"
                              >
                                1-3 months
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="3-6" id="timeline-3-6" />
                              <Label
                                htmlFor="timeline-3-6"
                                className="font-normal"
                              >
                                3-6 months
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="6-12" id="timeline-6-12" />
                              <Label
                                htmlFor="timeline-6-12"
                                className="font-normal"
                              >
                                6-12 months
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="12+" id="timeline-12+" />
                              <Label
                                htmlFor="timeline-12+"
                                className="font-normal"
                              >
                                12+ months
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label htmlFor="budget">Estimated Budget Range *</Label>
                        <select
                          id="budget"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          required
                        >
                          <option value="">Select budget range</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k-250k">$100,000 - $250,000</option>
                          <option value="250k+">$250,000+</option>
                        </select>
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label htmlFor="requirements">
                          Project Requirements *
                        </Label>
                        <Textarea
                          id="requirements"
                          placeholder="Please describe your project requirements, goals, and any specific features you need."
                          rows={5}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">
                        Additional Information
                      </h3>
                      <div className="space-y-2">
                        <Label htmlFor="hear-about">
                          How did you hear about us?
                        </Label>
                        <select
                          id="hear-about"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="">Select an option</option>
                          <option value="search">Search Engine</option>
                          <option value="social">Social Media</option>
                          <option value="referral">Referral</option>
                          <option value="event">Event or Conference</option>
                          <option value="advertisement">Advertisement</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="space-y-2 mt-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="newsletter" />
                          <Label htmlFor="newsletter" className="font-normal">
                            Subscribe to our newsletter for industry insights
                            and updates
                          </Label>
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="privacy-policy" required />
                          <Label
                            htmlFor="privacy-policy"
                            className="font-normal"
                          >
                            I have read and agree to the{" "}
                            <Link
                              href="/privacy"
                              className="text-indigo-600 hover:underline"
                            >
                              Privacy Policy
                            </Link>{" "}
                            and consent to the processing of my personal data. *
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    Submit Sales Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Hear from businesses that have transformed their operations with
              our custom SaaS solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="relative">
                      <svg
                        className="absolute -left-3 -top-3 h-10 w-10 text-indigo-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.03-.18.056-.27.086-.32.099-.64.208-.97.327-.31.112-.61.213-.91.303-.5.15-.97.254-1.42.309-.138.017-.27.045-.4.087-.13.041-.21.119-.23.231-.02.111.01.217.08.317.08.1.19.168.33.204.14.035.27.047.39.036.51-.052 1.03-.152 1.57-.303.35-.09.7-.194 1.05-.313.35-.119.67-.232.96-.34.74-.267 1.29-.365 1.66-.294.37.071.67.258.9.56.23.301.35.678.35 1.13v.364c0 .979-.23 1.788-.7 2.426-.47.639-1.15.958-2.05.958-.34 0-.68-.047-1.01-.14-.33-.094-.63-.203-.9-.327-.27-.124-.5-.249-.69-.374-.19-.126-.34-.232-.46-.317-.15-.099-.27-.16-.37-.182-.1-.022-.19-.011-.26.033-.08.044-.13.121-.16.232-.03.111-.01.217.05.317.06.1.15.178.28.232.13.054.51.184 1.14.391.63.207 1.33.311 2.11.311 1.3 0 2.32-.366 3.06-1.099.74-.732 1.11-1.692 1.11-2.879v-.364zm8.452 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16.036-.33.084-.51.144-.09.03-.18.056-.27.086-.32.099-.64.208-.97.327-.31.112-.61.213-.91.303-.5.15-.97.254-1.42.309-.14.017-.27.045-.4.087-.13.041-.21.119-.23.231-.02.111.01.217.08.317.08.1.19.168.33.204.14.035.27.047.39.036.51-.052 1.03-.152 1.57-.303.35-.09.7-.194 1.05-.313.35-.119.67-.232.96-.34.74-.267 1.29-.365 1.66-.294.37.071.67.258.9.56.23.301.35.678.35 1.13v.364c0 .979-.23 1.788-.7 2.426-.47.639-1.15.958-2.05.958-.34 0-.68-.047-1.01-.14-.33-.094-.63-.203-.9-.327-.27-.124-.5-.249-.69-.374-.19-.126-.34-.232-.46-.317-.15-.099-.27-.16-.37-.182-.1-.022-.19-.011-.26.033-.08.044-.13.121-.16.232-.03.111-.01.217.05.317.06.1.15.178.28.232.13.054.51.184 1.14.391.63.207 1.33.311 2.11.311 1.3 0 2.32-.366 3.06-1.099.74-.732 1.11-1.692 1.11-2.879v-.364z" />
                      </svg>
                      <p className="text-lg leading-relaxed mb-6 pt-6">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image
                        src={
                          testimonial.image ||
                          "/placeholder.svg?height=80&width=80"
                        }
                        alt={testimonial.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Success Stories
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Explore how our custom SaaS solutions have helped businesses across
            various industries.
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
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>{study.industry}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{study.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                >
                  <Link href={study.href}>
                    Read Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to transform your business?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Our team is ready to help you build the perfect SaaS solution for
              your specific industry needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <a href="#top">Contact Sales Now</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <Link href="/schedule-call">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
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
