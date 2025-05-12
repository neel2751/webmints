import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Briefcase, Clock, Search, ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Join Our Team
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Help us build the future of industry-specific SaaS solutions and
              grow your career with a team of passionate innovators.
            </p>
            <div className="relative mt-6 w-full max-w-2xl">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for job openings..."
                className="pl-10 pr-4 py-6 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Join SaaSify?
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            We're building something special, and we're looking for exceptional
            people to join us on this journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 rounded-md bg-indigo-50 p-2 w-fit">
                  {benefit.icon}
                </div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Our Culture
              </h2>
              <div className="space-y-4 text-lg">
                <p>
                  At SaaSify, we believe that great products are built by great
                  teams. We foster a culture of collaboration, innovation, and
                  continuous learning.
                </p>
                <p>
                  We value diversity of thought and background, and we're
                  committed to creating an inclusive environment where everyone
                  can thrive and do their best work.
                </p>
                <p>
                  Our team members enjoy a flexible work environment,
                  challenging projects, and the opportunity to make a real
                  impact on the industries we serve.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="#open-positions">View Open Positions</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Our team collaborating"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="container scroll-mt-16 mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Open Positions
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Explore our current job openings and find the perfect role for your
            skills and career goals.
          </p>
        </div>

        <div className="grid gap-6">
          {jobOpenings.map((job, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <MapPin className="h-3 w-3" /> {job.location}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Briefcase className="h-3 w-3" /> {job.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Clock className="h-3 w-3" /> {job.postedDate}
                      </Badge>
                      {job.department && (
                        <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                          {job.department}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground">
                      {job.shortDescription}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <Button
                      asChild
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Link href={`/careers/${job.slug}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg mb-4">
            Don't see the perfect role? We're always looking for talented
            individuals.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
          >
            <Link href="/careers/general-application">
              Submit a General Application
            </Link>
          </Button>
        </div>
      </section>

      {/* Employee Testimonials Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Life at SaaSify
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Hear from our team members about their experiences working at
              SaaSify.
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

      {/* Recruitment Process Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Recruitment Process
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Here's what you can expect when you apply to join our team.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-indigo-200"></div>
          <div className="space-y-12">
            {recruitmentSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-8 md:gap-12"
              >
                <div className="md:w-1/2 flex flex-col items-center md:items-end md:text-right">
                  <div
                    className={`absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 rounded-full border-4 border-indigo-200 bg-indigo-600 md:top-6`}
                  ></div>
                  <div className="pt-12 md:pt-0">
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                </div>
                <div className="md:w-1/2 pt-0">
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Alerts Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Stay Updated on New Opportunities
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Subscribe to our job alerts and be the first to know when new
              positions open up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black border-0"
              />
              <Button className="bg-white text-indigo-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              We respect your privacy and will only send you relevant job
              opportunities.
            </p>
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
            Common questions about careers at SaaSify.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="grid gap-6">
            {careerFaqs.map((faq, index) => (
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

// Company Benefits Data
const benefits = [
  {
    title: "Competitive Compensation",
    description:
      "We offer competitive salaries, equity options, and comprehensive benefits to attract and retain top talent.",
    icon: (
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
        className="h-6 w-6 text-indigo-600"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"></path>
        <path d="M12 18v2"></path>
        <path d="M12 4v2"></path>
      </svg>
    ),
  },
  {
    title: "Flexible Work Environment",
    description:
      "Work from home, our modern offices, or a hybrid approach—we focus on results, not where you work from.",
    icon: (
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
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
        <path d="M12 11v6"></path>
        <path d="M9 11v2"></path>
        <path d="M15 11v2"></path>
      </svg>
    ),
  },
  {
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental health support, wellness programs, and generous paid time off.",
    icon: (
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
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
  },
  {
    title: "Professional Growth",
    description:
      "Learning stipends, conference attendance, mentorship programs, and clear career advancement paths.",
    icon: (
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
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: "Impactful Work",
    description:
      "Work on challenging projects that solve real problems for businesses across various industries.",
    icon: (
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
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M12 2v4"></path>
        <path d="m6.41 6.41 2.83 2.83"></path>
        <path d="M2 12h4"></path>
        <path d="m6.41 17.59 2.83-2.83"></path>
        <path d="M12 22v-4"></path>
        <path d="m17.59 17.59-2.83-2.83"></path>
        <path d="M22 12h-4"></path>
        <path d="m17.59 6.41-2.83 2.83"></path>
      </svg>
    ),
  },
  {
    title: "Inclusive Culture",
    description:
      "We celebrate diversity and are committed to creating an environment where everyone feels valued and included.",
    icon: (
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
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
];

// Job Openings Data
const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    slug: "senior-full-stack-developer",
    location: "San Francisco, CA (Remote Option)",
    type: "Full-time",
    department: "Engineering",
    postedDate: "Posted 2 days ago",
    shortDescription:
      "We're looking for an experienced Full Stack Developer to help build and scale our industry-specific SaaS solutions.",
  },
  {
    title: "UX/UI Designer",
    slug: "ux-ui-designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    postedDate: "Posted 1 week ago",
    shortDescription:
      "Join our design team to create intuitive and beautiful user experiences for our SaaS platform.",
  },
  {
    title: "Product Manager",
    slug: "product-manager",
    location: "New York, NY",
    type: "Full-time",
    department: "Product",
    postedDate: "Posted 3 days ago",
    shortDescription:
      "Help shape the future of our products by leading cross-functional teams and driving product strategy.",
  },
  {
    title: "DevOps Engineer",
    slug: "devops-engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    postedDate: "Posted 5 days ago",
    shortDescription:
      "Build and maintain our cloud infrastructure, CI/CD pipelines, and help scale our platform securely.",
  },
  {
    title: "Sales Development Representative",
    slug: "sales-development-representative",
    location: "London, UK",
    type: "Full-time",
    department: "Sales",
    postedDate: "Posted 1 week ago",
    shortDescription:
      "Drive new business opportunities and help expand our customer base in the European market.",
  },
  {
    title: "Customer Success Manager",
    slug: "customer-success-manager",
    location: "Remote",
    type: "Full-time",
    department: "Customer Success",
    postedDate: "Posted 2 weeks ago",
    shortDescription:
      "Ensure our customers achieve their goals with our platform and drive long-term customer satisfaction.",
  },
  {
    title: "Marketing Specialist",
    slug: "marketing-specialist",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Marketing",
    postedDate: "Posted 4 days ago",
    shortDescription:
      "Create compelling content and campaigns to drive awareness and adoption of our SaaS solutions.",
  },
];

// Employee Testimonials Data
const testimonials = [
  {
    quote:
      "Working at SaaSify has been the highlight of my career. The culture of innovation and the opportunity to solve complex problems for real businesses is incredibly rewarding.",
    name: "Alex Chen",
    title: "Senior Developer, 3 years at SaaSify",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "What I love most about SaaSify is the balance between autonomy and collaboration. I'm trusted to make decisions, but also have an amazing team to brainstorm with and learn from.",
    name: "Sarah Johnson",
    title: "Product Manager, 2 years at SaaSify",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The growth opportunities here are unmatched. In just 18 months, I've expanded my skills, taken on new responsibilities, and been promoted. SaaSify truly invests in its people.",
    name: "Michael Rodriguez",
    title: "Customer Success Lead, 1.5 years at SaaSify",
    image: "/placeholder.svg?height=80&width=80",
  },
];

// Recruitment Process Steps
const recruitmentSteps = [
  {
    title: "Application Review",
    description:
      "Our recruitment team carefully reviews your application, resume, and cover letter to assess your qualifications and fit for the role.",
  },
  {
    title: "Initial Screening",
    description:
      "If your profile matches our requirements, we'll schedule a brief phone or video call to discuss your experience, skills, and career goals.",
  },
  {
    title: "Technical Assessment",
    description:
      "Depending on the role, you may be asked to complete a technical assessment, case study, or portfolio review to demonstrate your skills.",
  },
  {
    title: "Team Interviews",
    description:
      "You'll meet with potential team members and leaders for in-depth discussions about your experience and how you'd contribute to our team.",
  },
  {
    title: "Final Interview",
    description:
      "The final stage typically involves a conversation with a senior leader or department head to ensure alignment with our company vision and values.",
  },
  {
    title: "Offer & Onboarding",
    description:
      "If selected, you'll receive a competitive offer. Once accepted, our comprehensive onboarding program will help you hit the ground running.",
  },
];

// Career FAQs Data
const careerFaqs = [
  {
    question: "What is the interview process like?",
    answer:
      "Our interview process typically includes an initial screening call, a technical or skills assessment, team interviews, and a final interview with leadership. The entire process usually takes 2-3 weeks, and we strive to provide feedback at each stage.",
  },
  {
    question: "Do you offer relocation assistance?",
    answer:
      "Yes, for certain roles we offer relocation assistance packages. This is determined on a case-by-case basis and will be discussed during the interview process if applicable to your situation.",
  },
  {
    question: "What is your remote work policy?",
    answer:
      "We offer flexible work arrangements including fully remote, hybrid, and in-office options depending on the role and team. We believe in focusing on results rather than where the work happens, while ensuring effective collaboration.",
  },
  {
    question: "How do you support professional development?",
    answer:
      "We provide annual learning stipends, access to online learning platforms, internal mentorship programs, and opportunities to attend industry conferences. We also encourage internal mobility and career growth through regular performance discussions.",
  },
  {
    question: "What benefits do you offer?",
    answer:
      "Our comprehensive benefits package includes health, dental, and vision insurance, 401(k) matching, generous PTO, parental leave, mental health resources, wellness programs, and equity options. Benefits may vary by location.",
  },
];
