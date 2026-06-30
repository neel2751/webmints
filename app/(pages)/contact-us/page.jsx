"use client";
import Link from "next/link";
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
import WhereToFindUs from "@/components/where-to-find-us";
import { AnimatedFeatureSpotlight } from "@/components/animation/cta";
// import SimpleChat from "@/components/ai-chat";

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
        },
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
        "An error occurred while submitting the form. Please try again later.",
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
        },
        {
          name: "projectType",
          type: "select",
          labelText: "Project Type",
          placeholder: "Select Project Type",
          options: [
            {
              label: "Custom Software Development",
              value: "custom_software_development",
            },
            {
              label: "SaaS Platform Development",
              value: "saas_platform_development",
            },
            {
              label: "Business Process Automation",
              value: "business_process_automation",
            },
            {
              label: "CRM & Workflow Automation",
              value: "crm_workflow_automation",
            },
            {
              label: "Software Modernization",
              value: "software_modernization",
            },
            { label: "Cloud-Based Solutions", value: "cloud_based_solutions" },
            {
              label: "API Integration Services",
              value: "api_integration_services",
            },
            { label: "Other", value: "other" },
          ],
          validationOptions: {
            required: "Please select a project type",
          },
        },
        {
          name: "message",
          type: "textarea",
          rowss: 5,
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
    <div className="flex flex-col gap-16 pb-16 font-grotesk">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto max-w-4xl flex flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-bold text-black/85 mb-1 text-6xl tracking-tighter">
              Discuss Your Software Project with Our Experts
            </h1>
            <p className="text-lg max-w-3xl font-medium leading-snug text-gray-600 mb-8 tracking-tight">
              Whether you're planning a new Saas Platform or Software Project,
              automating business processes, or modernizing existing software,
              our team is here to help you turn into scalable solutions the
              vision you have for your business.
              <span className="text-base block font-medium text-black/60 tracking-tight mt-2">
                Fill out the form below, and we'll get back to you within one
                business day.
              </span>
            </p>
          </div>
          {/* <div class="items-start grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="font-bold text-black/85 mb-2 text-6xl tracking-tighter">
                Talk to Our Software & Automation Experts
              </h1>
              <p className="text-lg max-w-3xl font-medium leading-snug text-gray-600 mb-8 tracking-tight">
                Whether you're planning a new Saas Platform or Software Project,
                automating business processes, or modernizing existing software,
                our team is here to help you turn into scalable solutions the
                vision you have for your business.
                <span className="text-base block font-medium text-black/60 tracking-tight mt-2">
                  Fill out the form below, and we'll get back to you within one
                  business day.
                </span>
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-black/85">
                Why Businesses Choose Webmints
              </h2>
              <dl class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div class="flex items-center text-zinc-500 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-5 text-indigo-600"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"></path>
                      <path d="M8 11a5 5 0 1 0 3.998 1.997"></path>
                      <path d="M12.002 19.003a5 5 0 1 0 3.998 -8.003"></path>
                    </svg>
                    <dt>
                      <h3 className="text-xl font-semibold mb-2 tracking-tight text-gray-700">
                        Instant Preview
                      </h3>
                    </dt>
                  </div>
                  <dd>
                    <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
                      See your changes update live as you code for immediate
                      feedback.
                    </p>
                  </dd>
                </div>
                <div>
                  <div class="flex items-center text-zinc-500 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-5 text-zinc-600 dark:text-zinc-400"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 12h5v8h4v-16h4v8h5"></path>
                    </svg>
                    <dt>
                      <h3 className="text-xl font-semibold mb-2 tracking-tight text-gray-700">
                        Contextual Autocomplete
                      </h3>
                    </dt>
                  </div>
                  <dd>
                    <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
                      Get smart class suggestions tailored to your project as
                      you type.
                    </p>
                  </dd>
                </div>
                <div>
                  <div class="flex items-center text-zinc-500 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-5 text-zinc-600 dark:text-zinc-400"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5"></path>
                      <path d="M3 16h18"></path>
                      <path d="M18 13l3 3l-3 3"></path>
                    </svg>
                    <dt>
                      <h3 className="text-xl font-semibold mb-2 tracking-tight text-gray-700">
                        Toggle Visibility
                      </h3>
                    </dt>
                  </div>
                  <dd>
                    <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
                      Show or hide UI components instantly to test different
                      states.
                    </p>
                  </dd>
                </div>
                <div>
                  <div class="flex items-center text-zinc-500 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-5 text-zinc-600 dark:text-zinc-400"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 5l0 14"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                    <dt>
                      <h3 className="text-xl font-semibold mb-2 tracking-tight text-gray-700">
                        Color Swatches
                      </h3>
                    </dt>
                  </div>
                  <dd>
                    <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
                      View and pick color values directly within your
                      autocomplete menu.
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </div> */}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <Card className="border-2 border-indigo-100 shadow-sm">
              <CardHeader className="bg-indigo-50 border-b border-indigo-100 rounded-t-lg">
                <CardTitle className="text-2xl font-semibold tracking-tight text-black/90">
                  Send Us a Message
                </CardTitle>
                <CardDescription className="text-base font-medium text-black/80">
                  Fill out the form below, and our team will get back to you as
                  soon as possible.
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
                <h2 className="font-bold text-black/80 mb-2 text-4xl tracking-tighter">
                  We would love to hear from you!
                </h2>
                <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
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
                        className="size-5 mx-auto text-indigo-600"
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
                      <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                        Sales
                      </h3>
                    </dt>
                    <dd>
                      <p className="text-base mt-2 font-medium text-black/75 tracking-tight">
                        Interested in our services? Our sales team is ready to
                        assist you with inquiries, pricing, and tailored
                        solutions for your business needs.
                      </p>
                    </dd>
                  </div>
                  <Link
                    className="text-base flex items-center mx-auto mt-4 font-medium text-indigo-600 gap-2 hover:text-indigo-900 "
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
                      className="size-4"
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
                        className="size-5 mx-auto text-indigo-600"
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
                      <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                        Support
                      </h3>
                    </div>
                  </dt>
                  <dd>
                    <p className="text-base mt-2 font-medium text-black/75 tracking-tight">
                      Need assistance? Our support team is here to help with any
                      technical issues, troubleshooting, or questions about our
                      services.
                    </p>
                  </dd>
                  <Link
                    className="text-base flex items-center mx-auto mt-4 font-medium text-indigo-600 gap-2 hover:text-indigo-900"
                    href="mailto:hello@webmints.in"
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
                      className="size-4"
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
                        className="size-5 mx-auto text-indigo-600"
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
                      <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                        Maintenance
                      </h3>
                    </dt>
                    <dd>
                      <p className="text-base mt-2 font-medium text-black/75 tracking-tight">
                        Looking for ongoing support? Our maintenance team
                        ensures your software remains up-to-date, secure, and
                        optimized for peak performance.
                      </p>
                    </dd>
                  </div>
                  <Link
                    className="text-base flex items-center mx-auto mt-4 font-medium text-indigo-600 gap-2 hover:text-indigo-900"
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
                      className="size-4"
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
                        className="size-5 mx-auto text-indigo-600"
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
                      <h3 className="text-xl font-semibold tracking-tight text-gray-800">
                        Partnerships
                      </h3>
                    </dt>
                    <dd>
                      <p className="text-base mt-2 font-medium text-black/75 tracking-tight">
                        Interested in partnering with us? We're always looking
                        to collaborate with like-minded businesses and
                        professionals to create innovative solutions.
                      </p>
                    </dd>
                  </div>
                  <Link
                    className="text-base flex items-center mx-auto mt-4 font-medium text-indigo-600 gap-2 hover:text-indigo-900"
                    href="mailto:hello@webmints.in"
                  >
                    Partner with us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-4"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M9 6l6 6l-6 6"></path>
                    </svg>
                  </Link>
                </div>
              </dl>
            </div>

            {/* Social Media */}
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
              <div className="flex flex-wrap gap-4 items-center justify-center">
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
                    className="rounded-full h-12 w-12 border-indigo-200 hover:bg-indigo-600 hover:text-white"
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
                    className="rounded-full h-12 w-12 border-indigo-200 hover:bg-indigo-600 hover:text-white"
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
                    className="rounded-full h-12 w-12 border-indigo-200 hover:bg-indigo-600 hover:text-white"
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
      {/* <WhereToFindUs /> */}

      {/* FAQ Section */}
      <section
        className="py-16"
        style={{ backgroundColor: "rgb(250,250,250)" }}
      >
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 font-medium tracking-tight max-w-3xl">
              Have questions? We're here to help. Explore our FAQs to find
              answers to common inquiries about our services and solutions.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FAQs faqs={faqs} />
            {/* <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Didn't find what you were looking for? Check our comprehensive
                help center.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-500 hover:text-white"
              >
                <Link href="/help-support" className="">
                  Visit Help Center <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedFeatureSpotlight
        preheaderIcon={<ArrowRight className="w-4 h-4 text-indigo-600" />}
        preheaderText="Ready to Transform Your Business?"
        heading="Schedule a Personalized Demo Today"
        description="See how our SaaS solutions can transform your business with a customized demonstration tailored to your specific needs."
        buttonText="Get a Free Consultation"
        buttonProps={{ href: "/schedule-call" }}
        imageUrl="/images/t.png"
      />
    </div>
  );
}

const faqs = [
  {
    question: "What happens after I submit the form?",
    answer:
      "Once you submit the form, our team will review your inquiry and get back to you within one business day. We may reach out to gather more information or to schedule a consultation to better understand your needs.",
  },
  {
    question: "Do your offer free consultations?",
    answer:
      "Yes, we offer free initial consultations to understand your business needs and suggest the best solutions. During the consultation, we will discuss your requirements, challenges, and goals to tailor our services accordingly.",
  },
  {
    question: "Do you work with startups and enterprises?",
    answer:
      "Yes, we work with startups, growing businesses, and enterprises across various industries. Our solutions are scalable and can be customized to meet the specific needs of your organization, regardless of its size.",
  },
  {
    question: "What is your typical response time?",
    answer:
      "Our typical response time is within one business day. However, during peak times, it may take up to 48 hours. We prioritize all inquiries and strive to provide timely and helpful responses.",
  },
  {
    question: "Do you sign NDAs?",
    answer:
      "Yes, we are happy to sign Non-Disclosure Agreements (NDAs) before discussing any sensitive information about your business or project. Please let us know if you require an NDA, and we will provide one for your review.",
  },
];

// FAQ Data

const faqsOld = [
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
