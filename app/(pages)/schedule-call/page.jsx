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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft,
  Clock,
  Users,
  Phone,
  Video,
  Check,
  Info,
} from "lucide-react";

export const metadata = {
  title: "Schedule a Call | SaaS Solutions",
  description:
    "Schedule a call with our sales team to discuss your custom SaaS solution needs.",
};

export default function ScheduleCallPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Schedule a Call
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Book a convenient time to speak with our sales team about your
              custom SaaS solution needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Left Column - Information */}
          <div className="md:col-span-2">
            <div className="sticky top-8 space-y-8">
              <div>
                <Link
                  href="/contact-sales"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" /> Back to Contact Sales
                </Link>
                <h2 className="text-3xl font-bold tracking-tight">
                  Let's Talk About Your Project
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Schedule a personalized consultation with our sales team to
                  discuss how our custom SaaS solutions can help your business
                  grow.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">What to Expect</h3>
                <div className="space-y-4">
                  {callExpectations.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-indigo-100 p-1">
                        <Check className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
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
                        <h4 className="font-medium">{option.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="rounded-lg border p-6">
                <h3 className="font-semibold text-lg mb-4">
                  Meet Our Sales Team
                </h3>
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

              <div className="rounded-lg bg-indigo-50 p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-indigo-100 p-1">
                    <Info className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Need Immediate Assistance?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      If you have an urgent inquiry, you can reach us directly:
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm">
                        <span className="font-medium">Phone:</span> +1 (555)
                        123-4567
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Email:</span>{" "}
                        sales@saassolutions.com
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
                <Tabs defaultValue="calendar" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="calendar">Calendar</TabsTrigger>
                    <TabsTrigger value="details">Your Details</TabsTrigger>
                  </TabsList>

                  {/* Calendar Tab */}
                  <TabsContent value="calendar" className="space-y-6">
                    <div className="space-y-2 mt-4">
                      <Label>Select Date</Label>
                      <div className="border rounded-md p-4">
                        {/* Calendar Component Placeholder */}
                        <div className="grid grid-cols-7 gap-2">
                          <div className="text-center text-sm font-medium text-muted-foreground">
                            Sun
                          </div>
                          <div className="text-center text-sm font-medium text-muted-foreground">
                            Mon
                          </div>
                          <div className="text-center text-sm font-medium text-muted-foreground">
                            Tue
                          </div>
                          <div className="text-center text-sm font-medium text-muted-foreground">
                            Wed
                          </div>
                          <div className="text-center text-sm font-medium text-muted-foreground">
                            Thu
                          </div>
                          <div className="text-center text-sm font-medium text-muted-foreground">
                            Fri
                          </div>
                          <div className="text-center text-sm font-medium text-muted-foreground">
                            Sat
                          </div>

                          {/* Empty cells for previous month */}
                          <div></div>
                          <div></div>
                          <div></div>

                          {/* Days of the month */}
                          {Array.from({ length: 31 }, (_, i) => {
                            const day = i + 1;
                            const isToday = day === 10;
                            const isSelected = day === 15;
                            const isAvailable = ![
                              6, 7, 13, 14, 20, 21, 27, 28,
                            ].includes(day);

                            return (
                              <button
                                key={day}
                                className={`
                                  h-10 w-10 rounded-full flex items-center justify-center text-sm
                                  ${isToday ? "border border-indigo-200" : ""}
                                  ${
                                    isSelected ? "bg-indigo-600 text-white" : ""
                                  }
                                  ${
                                    !isAvailable
                                      ? "text-gray-300 cursor-not-allowed"
                                      : "hover:bg-indigo-100"
                                  }
                                `}
                                disabled={!isAvailable}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Available Time Slots</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map((slot, index) => (
                          <button
                            key={index}
                            className={`
                              p-2 border rounded-md text-sm flex items-center justify-center
                              ${
                                slot.selected
                                  ? "bg-indigo-600 text-white border-indigo-600"
                                  : "hover:bg-indigo-50"
                              }
                              ${
                                !slot.available
                                  ? "text-gray-300 cursor-not-allowed"
                                  : ""
                              }
                            `}
                            disabled={!slot.available}
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            {slot.time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Time Zone</Label>
                      <Select defaultValue="america-new_york">
                        <SelectTrigger>
                          <SelectValue placeholder="Select your time zone" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="america-new_york">
                            Eastern Time (ET) - New York
                          </SelectItem>
                          <SelectItem value="america-chicago">
                            Central Time (CT) - Chicago
                          </SelectItem>
                          <SelectItem value="america-denver">
                            Mountain Time (MT) - Denver
                          </SelectItem>
                          <SelectItem value="america-los_angeles">
                            Pacific Time (PT) - Los Angeles
                          </SelectItem>
                          <SelectItem value="europe-london">
                            Greenwich Mean Time (GMT) - London
                          </SelectItem>
                          <SelectItem value="europe-paris">
                            Central European Time (CET) - Paris
                          </SelectItem>
                          <SelectItem value="asia-tokyo">
                            Japan Standard Time (JST) - Tokyo
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Call Type</Label>
                      <RadioGroup defaultValue="video">
                        <div className="grid gap-2 md:grid-cols-3">
                          <div className="flex items-center space-x-2 border rounded-md p-3">
                            <RadioGroupItem value="video" id="call-video" />
                            <Label
                              htmlFor="call-video"
                              className="font-normal flex items-center"
                            >
                              <Video className="h-4 w-4 mr-2" /> Video Call
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-3">
                            <RadioGroupItem value="phone" id="call-phone" />
                            <Label
                              htmlFor="call-phone"
                              className="font-normal flex items-center"
                            >
                              <Phone className="h-4 w-4 mr-2" /> Phone Call
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2 border rounded-md p-3">
                            <RadioGroupItem value="team" id="call-team" />
                            <Label
                              htmlFor="call-team"
                              className="font-normal flex items-center"
                            >
                              <Users className="h-4 w-4 mr-2" /> Team Call
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-indigo-600 hover:bg-indigo-700">
                        Continue to Details
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Details Tab */}
                  <TabsContent value="details" className="space-y-6">
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
                          <Select defaultValue="">
                            <SelectTrigger id="industry">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="enterprise">
                                Enterprise
                              </SelectItem>
                              <SelectItem value="ecommerce">
                                E-commerce
                              </SelectItem>
                              <SelectItem value="fintech">
                                Fintech & Banking
                              </SelectItem>
                              <SelectItem value="healthcare">
                                Healthcare
                              </SelectItem>
                              <SelectItem value="construction">
                                Construction
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company-size">Company Size *</Label>
                          <Select defaultValue="">
                            <SelectTrigger id="company-size">
                              <SelectValue placeholder="Select company size" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-10">
                                1-10 employees
                              </SelectItem>
                              <SelectItem value="11-50">
                                11-50 employees
                              </SelectItem>
                              <SelectItem value="51-200">
                                51-200 employees
                              </SelectItem>
                              <SelectItem value="201-500">
                                201-500 employees
                              </SelectItem>
                              <SelectItem value="501-1000">
                                501-1000 employees
                              </SelectItem>
                              <SelectItem value="1000+">
                                1000+ employees
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Call Details</h3>
                      <div className="space-y-2">
                        <Label htmlFor="topic">Discussion Topic *</Label>
                        <Select defaultValue="">
                          <SelectTrigger id="topic">
                            <SelectValue placeholder="Select a topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="custom-development">
                              Custom SaaS Development
                            </SelectItem>
                            <SelectItem value="industry-solutions">
                              Industry-Specific Solutions
                            </SelectItem>
                            <SelectItem value="pricing">
                              Pricing & Packages
                            </SelectItem>
                            <SelectItem value="maintenance">
                              Maintenance & Support
                            </SelectItem>
                            <SelectItem value="integration">
                              Integration Services
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label htmlFor="agenda">Call Agenda *</Label>
                        <Textarea
                          id="agenda"
                          placeholder="Please share what you'd like to discuss during the call"
                          rows={4}
                          required
                        />
                      </div>

                      <div className="space-y-2 mt-4">
                        <Label>Additional Participants</Label>
                        <div className="grid gap-4">
                          <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                              <Input placeholder="Name" />
                            </div>
                            <div className="space-y-2">
                              <Input placeholder="Email" type="email" />
                            </div>
                          </div>
                          <Button
                            variant="outline"
                            className="w-full md:w-auto"
                          >
                            + Add Another Participant
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="newsletter" />
                        <Label htmlFor="newsletter" className="font-normal">
                          Subscribe to our newsletter for industry insights and
                          updates
                        </Label>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox id="privacy-policy" required />
                        <Label htmlFor="privacy-policy" className="font-normal">
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

                    <div className="flex justify-between">
                      <Button variant="outline">Back to Calendar</Button>
                      <Button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        Schedule Call
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
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
                      <p className="font-medium">May 15, 2024 at 10:00 AM ET</p>
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
                      You can reschedule or cancel this call through the link in
                      your confirmation email.
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Not ready to schedule yet?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Explore our resources or reach out to us directly with any
              questions you might have.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <Link href="/resources">Explore Resources</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
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
