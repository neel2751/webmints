import {
  Heart,
  Calendar,
  Brain,
  BabyIcon as BabyCarriage,
  Lightbulb,
  Trophy,
} from "lucide-react";
import JobForm from "../[job]/jobForm";
import { Card, CardContent } from "@/components/ui/card";
import CareerCta from "@/components/web/cta/career-cta";

export const metadata = {
  title: "General Application",
  description:
    "Don't see a role that fits? Submit a general application and join the WebMints team building industry-specific SaaS and automation solutions.",
  alternates: {
    canonical: "/careers/general-application",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/careers/general-application",
    images: ["/opengraph-image.png"],
  },
};

export default function BenefitsAndPerks() {
  return (
    <main className="font-grotesk">
      <section>
        <div className="container mx-auto px-4 py-16">
          {/* <div class="items-start grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="font-bold text-black/85 mb-2 text-6xl tracking-tighter">
            Talk to Our Software & Automation Experts
          </h1>
          <p className="text-lg max-w-3xl font-medium leading-snug text-gray-600 mb-8 tracking-tight">
            Whether you're planning a new Saas Platform or Software Project,
            automating business processes, or modernizing existing software, our
            team is here to help you turn into scalable solutions the vision you
            have for your business.
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
                  class="size-5 text-indigo-600"
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
                  Get smart class suggestions tailored to your project as you
                  type.
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
                  class="size-5 text-indigo-600"
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
                  Show or hide UI components instantly to test different states.
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
                  class="size-5 text-indigo-600"
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
                  View and pick color values directly within your autocomplete
                  menu.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div> */}
          <h2 className="text-5xl font-bold text-gray-800 tracking-tighter text-center mb-2">
            How We Take Care of You
          </h2>
          <p className="text-lg text-gray-600 font-medium tracking-tight text-center mb-12 max-w-2xl mx-auto">
            At Webmints, we believe in taking care of our team. We offer a range
            of benefits and perks designed to support your health, well-being,
            and professional growth. Our comprehensive benefits package
            includes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {/* Health & Retirement */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Heart className="w-12 h-12 stroke-1 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-800">
                Health & Retirement
              </h3>
              <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
                Comprehensive health, dental, and vision insurance, plus 401(k)
                matching and financial wellness programs
              </p>
            </div>

            {/* Flexible Time-off & Company Closures */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Calendar className="w-12 h-12 stroke-1 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-800">
                Flexible Time-off
              </h3>
              <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
                Prioritised work-life balance, with flexible time-off, paid
                holidays and recharge weeks
              </p>
            </div>

            {/* Mental Wellness */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Brain className="w-12 h-12 stroke-1 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-800">
                Mental Wellness
              </h3>
              <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
                {/* write 150 words */}
                Access to mental health resources, counselling services, and
                wellness programs to support your mental well-being
              </p>
            </div>

            {/* Family Planning */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <BabyCarriage className="w-12 h-12 stroke-1 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-800">
                Family Planning
              </h3>
              <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
                Generous parental leave, family planning support, and childcare
                assistance to help you balance work and family life
              </p>
            </div>

            {/* Learning & Development */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Lightbulb className="w-12 h-12 stroke-1 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-800">
                Learning & Development
              </h3>
              <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
                Ongoing professional development opportunities, training
                programs, and online courses to help you grow in your career
              </p>
            </div>

            {/* Perks and Stipends */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <Trophy className="w-12 h-12 stroke-1 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-800">
                Perks and Stipends
              </h3>
              <p className="text-lg font-medium leading-snug text-gray-600 max-w-3xl mb-8 tracking-tight">
                Monthly wellness stipends, home office allowances, and
                team-building activities to enhance your work experience
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Application Form Section */}
      <section id="apply-now" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container mx-auto py-16 scroll-mt-16">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tighter">
                Ready to Join Our Team?
              </h2>
              <p className="text-lg text-gray-600 font-medium tracking-tight">
                Ready to take the next step in your career? Fill out the form
                below to apply for this position. We look forward to reviewing
                your application!
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <JobForm
                  jobId={"general-application"}
                  jobTitle={"General Application"}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <CareerCta />
    </main>
  );
}
