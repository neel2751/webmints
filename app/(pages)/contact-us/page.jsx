"use client";
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
import {
  ArrowRight,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from "lucide-react";
import { GlobalForm } from "@/components/form/globalForm";
import FAQs from "@/components/faq";
import { toast } from "sonner";
import { useState } from "react";
import LimitedSeat from "@/components/limitedSeat/limitedSeat";

// export const metadata = {
//   title: "Contact Us | SaaSify",
//   description:
//     "Get in touch with our team for any inquiries, support, or sales questions.",
// };

export default function ContactPage() {
  const [resetForm, setResetForm] = useState(false);

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
  const handleSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/submit-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY, // or hardcoded temporarily
          },
          body: JSON.stringify({
            formType: "contact",
            ...data,
          }),
        }
      );
      if (!response.ok) {
        toast.error(" Failed to submit form. Please try again later.");
      }
      const result = await response.json();
      if (result.success) {
        setResetForm(true);
        toast.success("Form submitted successfully!");
        // Reset form or redirect user
      } else {
        toast.error("Failed to submit form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "An error occurred while submitting the form. Please try again later."
      );
      // Handle error (e.g., show notification)
    }
  };

  const groupedFields = [
    {
      fields: [
        {
          name: "firstName",
          type: "text",
          labelText: "First Name",
          placeholder: "Enter First Name",
          validationOptions: {
            required: "First Name is required",
            ...validationOptions,
          },
        },
        {
          name: "lastName",
          type: "text",
          labelText: "Last Name",
          placeholder: "Enter Last Name",
          validationOptions: {
            required: "Last Name is required",
            ...validationOptions,
          },
        },
        {
          name: "companyName",
          type: "text",
          labelText: "Company Name",
          placeholder: "Enter Compnay Name",
          size: true,
          validationOptions: {
            required: "Company Name is required",
          },
        },
        {
          name: "workEmail",
          type: "text",
          labelText: "Work Email",
          placeholder: "Enter Work Email",
          validationOptions: emailValidation,
        },
        {
          name: "workPhone",
          type: "text",
          labelText: "Phone Number",
          placeholder: "Enter Phone Number",
          validationOptions: phoneValidation,
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
        {
          name: "privacy",
          type: "checkbox",
          labelJSX: (
            <>
              I agree to the{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-indigo-600 hover:text-indigo-800"
              >
                Privacy Policy
              </a>{" "}
              and consent to begin contacted regarding my inquiry.
            </>
          ),
          validationOptions: {
            required: "Please tick this box",
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
              Contact our friendly team
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 font-sans tracking-tight">
              Have questions or ready to discuss your project? We're here to
              help you find the perfect SaaS solution for your business.
            </p>
          </div>
          {/* Availability Banner */}
          <LimitedSeat />
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card className="border-2 border-indigo-100 shadow-sm">
              <CardHeader className="bg-indigo-50 border-b border-indigo-100 rounded-t-lg">
                <CardTitle className="text-2xl font-grotesk">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="font-sans">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <GlobalForm
                  groupedFields={groupedFields}
                  onSubmit={handleSubmit}
                  resetForm={resetForm}
                />
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <div className="max-w-xl mx-auto text-center lg:text-balance">
                {/* <p className="text-sm font-bold uppercase text-indigo-600">
                  Tagline
                </p> */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-base-900 lg:text-balance font-grotesk">
                  We would love to hear from you!
                </h2>
                <p className="text-base mt-4 font-medium text-base-500 font-sans">
                  Uniting talent with vision. Get to know the dedicated
                  professionals who blend their skills and passion to lead us to
                  new heights.
                </p>
              </div>
              <dl className="mt-12 text-center grid sm:grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
                <div className="flex flex-col justify-between h-full text-sm">
                  <div>
                    <dt className="flex flex-col gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler-arrow-credit-card size-5 mx-auto text-indigo-500"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
                        <path d="M3 10l18 0"></path>
                        <path d="M7 15l.01 0"></path>
                        <path d="M11 15l2 0"></path>
                      </svg>
                      <h3 className="text-lg md:text-xl font-medium text-base-900 font-grotesk">
                        Sales
                      </h3>
                    </dt>
                    <dd>
                      <p className="text-base mt-2 font-medium text-base-500 font-sans">
                        Find out how Webmints can help your business.
                      </p>
                    </dd>
                  </div>
                  <Link
                    className="text-base flex items-center mx-auto mt-4 font-medium text-indigo-500 gap-2 hover:text-base-900 font-grotesk"
                    href="/contact-sales"
                  >
                    Talk to sales
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler-chevron-right size-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex flex-col justify-between h-full text-sm">
                  <dt>
                    <div className="flex flex-col text-xs tracking-tighter gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler-arrow-lifebuoy size-5 mx-auto text-indigo-500"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                        <path d="M15 15l3.35 3.35"></path>
                        <path d="M9 15l-3.35 3.35"></path>
                        <path d="M5.65 5.65l3.35 3.35"></path>
                        <path d="M18.35 5.65l-3.35 3.35"></path>
                      </svg>
                      <h3 className="text-lg md:text-xl font-medium text-base-900">
                        Support
                      </h3>
                    </div>
                  </dt>
                  <dd>
                    <p className="text-base font-medium text-base-500">
                      Find out how Webmints can help your business. Have a
                      support question? We’ve got answers.
                    </p>
                  </dd>
                  <Link
                    className="text-base flex items-center mx-auto mt-4 font-medium text-indigo-500 gap-2 hover:text-base-900"
                    href="mailto:support@webmints.com"
                  >
                    Talk to support
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler-chevron-right size-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex flex-col justify-between h-full text-sm">
                  <div>
                    <dt className="flex flex-col text-xs tracking-tighter gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler-arrow-news size-5 mx-auto text-indigo-500"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11"></path>
                        <path d="M8 8l4 0"></path>
                        <path d="M8 12l4 0"></path>
                        <path d="M8 16l4 0"></path>
                      </svg>
                      <h3 className="text-lg md:text-xl font-medium text-base-900">
                        Maintenance
                      </h3>
                    </dt>
                    <dd>
                      <p className="text-base mt-2 font-medium text-base-500">
                        Any media questions or publication ideas you have, we’re
                        happy to connect.
                      </p>
                    </dd>
                  </div>
                  <Link
                    className="text-base flex items-center mx-auto mt-4 font-medium text-indigo-500 gap-2 hover:text-base-900"
                    href="/maintenance"
                  >
                    Maintenance
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler-chevron-right size-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </Link>
                </div>
                <div className="flex flex-col justify-between h-full text-sm">
                  <div>
                    <dt className="flex flex-col text-xs tracking-tighter gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler-arrow-user-plus size-5 mx-auto text-indigo-500"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M5 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4c.96 0 1.84 .338 2.53 .901"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        <path d="M16 19h6"></path>
                        <path d="M19 16v6"></path>
                      </svg>
                      <h3 className="text-lg md:text-xl font-medium text-base-900">
                        Email
                      </h3>
                    </dt>
                    <dd>
                      <p className="text-base mt-2 font-medium text-base-500">
                        We love partnering with other businesses. Let us know
                        what you’re thinking.
                      </p>
                    </dd>
                  </div>
                  <Link
                    className="text-base flex items-center mx-auto mt-4 font-medium text-indigo-500 gap-2 hover:text-base-900"
                    href="mailto:hello@webmints.com"
                  >
                    Email Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler-chevron-right size-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </Link>
                </div>
              </dl>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-2xl font-bold mb-4 font-grotesk">
                Connect With Us
              </h2>
              <p className="text-muted-foreground mb-4 font-sans">
                Follow us on social media for updates, tips, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Button>
                </Link> */}
                <Link
                  href={"https://x.com/webmints27"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">X</span>
                  </Button>
                </Link>

                <Link
                  href="https://www.instagram.com/webmints/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/webmints/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <FAQs faqs={faqs} />
            {/* <div className="mt-8 text-center">
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
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-5xl rounded-lg bg-white p-8 shadow-lg md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-grotesk">
                  Ready for a personalized demo?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 font-sans">
                  See how our SaaS solutions can transform your business with a
                  customized demonstration tailored to your specific needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                    <Link href="/schedule-call">
                      Schedule a Demo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  >
                    <Link href="/contact-sales">Contact Sales Team</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-2/4">
                <Image
                  src="/images/t.png"
                  alt="Schedule a demo"
                  width={400}
                  height={400}
                  className="mx-auto object-fill"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// FAQ Data
const faqs = [
  {
    question: "What types of businesses do you typically work with?",
    answer:
      "We work with businesses of all sizes across various industries, including enterprise, e-commerce, fintech, healthcare, and construction. Our solutions are scalable and can be customized to meet the specific needs of your organization, whether you're a startup or an established enterprise.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary based on the complexity of your requirements and the scope of the project. A basic implementation can be completed in as little as 2-4 weeks, while more complex enterprise solutions may take 2-3 months. During our initial consultation, we'll provide you with a more accurate timeline based on your specific needs.",
  },
  {
    question: "Do you offer custom development services?",
    answer:
      "Yes, we offer custom development services to tailor our SaaS solutions to your specific business requirements. Our team of experienced developers can create custom features, integrations, and workflows to ensure our solution fits seamlessly into your existing processes.",
  },
  {
    question: "What kind of support do you provide after implementation?",
    answer:
      "We offer comprehensive support after implementation, including a dedicated account manager, technical support, regular maintenance, and updates. Our standard support package includes email and phone support during business hours, while our premium support packages offer extended hours and faster response times.",
  },
  {
    question: "Can your solutions integrate with our existing systems?",
    answer:
      "Yes, our solutions are designed with integration capabilities in mind. We support integration with most popular business systems, including CRM, ERP, accounting software, and marketing platforms. We also offer custom API development for specialized integration needs.",
  },
  {
    question:
      "What security measures do you have in place to protect our data?",
    answer:
      "Security is our top priority. We implement industry-leading security measures, including data encryption, regular security audits, multi-factor authentication, and compliance with relevant regulations such as GDPR and CCPA. Our infrastructure is hosted on secure cloud platforms with SOC 2 compliance.",
  },
  {
    question: "Do you offer training for our team?",
    answer:
      "Yes, we provide comprehensive training options for your team. This includes standard onboarding training, detailed documentation, video tutorials, and optional advanced training sessions. For enterprise clients, we offer customized training programs tailored to different user roles within your organization.",
  },
];
