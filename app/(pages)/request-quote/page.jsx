import { ArrowLeft, Check, Info, Phone, Users, Video } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import SalesForm from "../contact-sales/sales-form";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Request a Quote",
  description:
    "Request a custom quote for your SaaS platform or software project. Share your requirements and WebMints will scope a tailored solution.",
  alternates: {
    canonical: "/request-quote",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/request-quote",
    images: ["/opengraph-image.png"],
  },
};

export default async function page({ searchParams }) {
  const params = await searchParams;
  const tag = params ? params : {};

  return (
    <div>
      {/* Main Content */}

      <div className="flex flex-col gap-16 mt-10">
        <section className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-5">
            {/* Left Column - Information */}
            <div className="md:col-span-2">
              <div className="sticky top-8 space-y-8">
                <div>
                  <Link
                    href="/contact-sales"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 font-grotesk"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Contact Sales
                  </Link>
                  <h2 className="text-3xl font-bold tracking-tight font-grotesk">
                    Let's Talk About Your Project
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Schedule a personalized consultation with our sales team to
                    discuss how our custom SaaS solutions can help your business
                    grow.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold font-grotesk">
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    {callExpectations.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-full bg-indigo-100 p-1">
                          <Check className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-medium font-grotesk">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Call Options</CardTitle>
                    <CardDescription>
                      Choose the type of call that works best for you
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {callOptions.map((option, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-3 rounded-lg border"
                      >
                        <div className="rounded-full bg-indigo-100 p-2">
                          {option.icon}
                        </div>
                        <div>
                          <h4 className="font-medium font-grotesk">
                            {option.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {option.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="rounded-lg bg-indigo-50 p-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-indigo-100 p-1">
                      <Info className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg font-grotesk">
                        Need Immediate Assistance?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        If you have an urgent inquiry, you can reach us
                        directly:
                      </p>
                      <div className="space-y-2">
                        <p className="text-sm font-grotesk">
                          <span className="font-medium  ">Phone:</span>{" "}
                          <Link
                            href="tel:+1234567890"
                            className="text-indigo-600 hover:text-indigo-800"
                          >
                            +1 (234) 567-890
                          </Link>
                        </p>
                        <p className="text-sm font-grotesk">
                          <span className="font-medium">Email:</span>{" "}
                          <Link
                            href={"mailto:hello@webmints.in"}
                            className="text-indigo-600 hover:text-indigo-800"
                          >
                            hello@webmints.in
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Scheduling Form */}
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Consultation</CardTitle>
                  <CardDescription>
                    Select your preferred date, time, and provide some details
                    about your project.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <SalesForm params={tag} />
                </CardContent>
              </Card>

              {/* Confirmation Card - This would be shown after successful scheduling */}
              <Card className="mt-8 hidden">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Call Scheduled Successfully!</CardTitle>
                  <CardDescription>
                    Your call has been scheduled for May 15, 2024 at 10:00 AM
                    Eastern Time.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="grid gap-3 md:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Date & Time
                        </p>
                        <p className="font-medium">
                          May 15, 2024 at 10:00 AM ET
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Call Type
                        </p>
                        <p className="font-medium">Video Call</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Sales Representative
                        </p>
                        <p className="font-medium">Michael Chen</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Topic
                        </p>
                        <p className="font-medium">Custom SaaS Development</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Next Steps:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      <li>
                        You'll receive a calendar invitation via email shortly.
                      </li>
                      <li>
                        A confirmation email with call details has been sent to
                        your email address.
                      </li>
                      <li>
                        Our team will prepare for your call based on the
                        information you've provided.
                      </li>
                      <li>
                        You can reschedule or cancel this call through the link
                        in your confirmation email.
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/dashboard">Go to Dashboard</Link>
                  </Button>
                  <Button className="bg-indigo-600 hover:bg-indigo-700" asChild>
                    <Link href="/">Return to Home</Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* FAQ Section */}
              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-semibold">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg border p-4">
                      <h4 className="font-medium mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-indigo-600 text-white py-16">
          <div className="container mx-auto">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-grotesk">
                Ready to build your custom solution?
              </h2>
              <p className="text-xl text-white/80 mb-8 font-sans">
                Let's discuss how our technology expertise can help you create a
                powerful, scalable SaaS platform tailored to your industry
                needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="bg-white text-indigo-600 hover:bg-gray-100"
                >
                  <Link href="/contact-us">Schedule a Consultation</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="text-white bg-indigo-600 border-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

// Call Expectations Data
const callExpectations = [
  {
    title: "Needs Assessment",
    description:
      "We'll discuss your business challenges and goals to understand how our solutions can help.",
  },
  {
    title: "Solution Exploration",
    description:
      "Our team will walk you through relevant solutions tailored to your industry and specific needs.",
  },
  {
    title: "Custom Demonstration",
    description:
      "See how our SaaS solutions work with examples relevant to your business processes.",
  },
  {
    title: "Pricing & Timeline",
    description:
      "Get clear information about costs, implementation timeline, and return on investment.",
  },
  {
    title: "Next Steps",
    description:
      "We'll outline a clear path forward with actionable recommendations for your business.",
  },
];

// Call Options Data
const callOptions = [
  {
    title: "One-on-One Consultation",
    description:
      "A personalized call with a sales representative focused on your specific needs.",
    icon: <Phone className="h-5 w-5 text-indigo-600" />,
  },
  {
    title: "Product Demo",
    description:
      "See our solutions in action with a guided demonstration of key features.",
    icon: <Video className="h-5 w-5 text-indigo-600" />,
  },
  {
    title: "Team Discussion",
    description:
      "Bring your team members for a collaborative discussion about your project.",
    icon: <Users className="h-5 w-5 text-indigo-600" />,
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

// Time Slots Data
const timeSlots = [
  { time: "9:00 AM", available: true, selected: false },
  { time: "9:30 AM", available: true, selected: false },
  { time: "10:00 AM", available: true, selected: true },
  { time: "10:30 AM", available: true, selected: false },
  { time: "11:00 AM", available: true, selected: false },
  { time: "11:30 AM", available: false, selected: false },
  { time: "1:00 PM", available: true, selected: false },
  { time: "1:30 PM", available: true, selected: false },
  { time: "2:00 PM", available: true, selected: false },
  { time: "2:30 PM", available: true, selected: false },
  { time: "3:00 PM", available: false, selected: false },
  { time: "3:30 PM", available: false, selected: false },
  { time: "4:00 PM", available: true, selected: false },
  { time: "4:30 PM", available: true, selected: false },
  { time: "5:00 PM", available: true, selected: false },
];

// FAQs Data
const faqs = [
  {
    question: "How long do the consultation calls typically last?",
    answer:
      "Our initial consultation calls are scheduled for 30 minutes. If more time is needed, we can arrange a follow-up call or extend the session based on availability.",
  },
  {
    question: "Do I need to prepare anything before the call?",
    answer:
      "While not required, it's helpful to have a general idea of your business challenges, project goals, and any specific questions you'd like to discuss. This allows us to make the most of our time together.",
  },
  {
    question: "Can I reschedule my call if needed?",
    answer:
      "Yes, you can reschedule your call up to 24 hours before the scheduled time. A rescheduling link will be included in your confirmation email.",
  },
  {
    question: "Will I receive any materials after the call?",
    answer:
      "Yes, our team will follow up with a summary of the discussion, relevant resources, and a customized proposal based on your needs within 48 hours after the call.",
  },
];
