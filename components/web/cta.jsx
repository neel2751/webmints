import { Button } from "@/components/ui/button";
import { Sparkles, Pencil, Users, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      {/* <section className="relative z-20 mx-auto my-20 grid w-full max-w-7xl grid-cols-1 justify-start bg-gradient-to-br from-gray-100 to-white dark:from-neutral-900 dark:to-neutral-950 md:my-40 md:grid-cols-3 border-dashed border">
        <div className="p-8 md:col-span-2 md:p-14">
          <h2 className="text-left text-xl font-medium tracking-tight text-neutral-500 dark:text-neutral-200 md:text-3xl">
            Want a professional, extraordinary&nbsp;
            <span className="text-neutral-700 font-semibold text-pretty">
              Software
            </span>{" "}
            tailored to your needs? &nbsp;
            <span className="font-bold text-indigo-700">Get in touch</span>
          </h2>
          <p className="mt-4 max-w-lg text-left text-base font-medium tracking-tight text-neutral-500 dark:text-neutral-200 md:text-base">
            We've helped thousands of{" "}
            <span className="text-sky-700">founders and teams</span> build their
            products and apps from scratch, and we can help you too.
          </p>
          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-4">
            <div className="mt-6 flex justify-center">
              <a className="no-underline flex space-x-2 group cursor-pointer transition duration-200 p-px font-semibold px-4 py-2 w-full sm:w-44 h-10 rounded-lg text-sm text-center items-center justify-center relative z-20 bg-black dark:bg-white dark:text-black text-white rotate-[1deg] hover:rotate-0">
                Talk to us
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-dashed p-8 md:border-l md:border-t-0 md:p-14">
          <p className="text-base text-neutral-700 dark:text-neutral-200">
            Manu literally took our requirements and quite literally ran with
            them. To anyone reading this - I can't recommend Manu enough, your
            job will be done exceptionally well, and you will be delighted with
            the end result.
          </p>
          <div className="mt-4 flex flex-col items-start gap-1 text-sm">
            <p className="font-bold text-neutral-800 dark:text-neutral-200">
              Neel Patel
            </p>
            <p className="text-neutral-500 dark:text-neutral-400">
              Founder - Webmints, UK.
            </p>
          </div>
        </div>
      </section> */}
      <section className="w-full overflow-hidden py-8 ">
        <div className="max-w-7xl mx-auto relative before:absolute before:top-1/2 before:start-1/2 before:bg-[url('/clip.svg')] before:bg-no-repeat before:bg-center before:w-full before:h-full before:-z-1 before:transform before:-translate-y-1/2 before:-translate-x-1/2">
          <div className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 rounded-3xl overflow-hidden border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 relative">
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-flex items-center mb-4 gap-2">
                  <Sparkles className="h-5 w-5 text-amber-400 rotate-45" />
                  <p className="bg-gradient-to-tr from-amber-200 to-amber-400 text-transparent bg-clip-text font-medium uppercase tracking-tight text-sm font-sans">
                    Ready to dive in?
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 font-grotesk">
                  Ready to Scale Your Business with Custom SaaS?
                </h2>
                <p className="text-white/90 text-lg mb-10 max-w-lg font-sans">
                  Our team is here to help you every step of the way. From
                  consultation to implementation, we'll work with you to create
                  a customized solution that meets your unique needs and goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-10">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="text-amber-400 w-4" />
                    <span className="text-white whitespace-nowrap font-grotesk">
                      Expert Guidance
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="text-amber-400 w-4" />
                    <span className="text-white whitespace-nowrap font-grotesk">
                      Customized Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="text-amber-400 w-4" />
                    <span className="text-white whitespace-nowrap font-grotesk">
                      Free Quote
                    </span>
                  </div>
                </div>
                <div className="space-x-3">
                  <a
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 shadow px-8 h-12 rounded-full bg-white text-indigo-700 font-medium hover:bg-indigo-600 hover:text-white transition-colors"
                    href="/team"
                  >
                    Meet Our Team
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input shadow-sm px-8 bg-transparent rounded-full h-12 font-medium text-white hover:bg-white hover:text-indigo-700 transition-colors"
                    href="#"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="relative h-full w-full">
                <Image
                  alt="UI Mockups"
                  className="w-5/6 h-96 -bottom-2 right-0  object-cover rounded-tl-xl absolute"
                  src="/cta.svg"
                  height={200}
                  width={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <CTAComponent /> */}
    </>
  );
};

export default Cta;

function CTAComponent() {
  return (
    <div className="w-full max-w-7xl mx-auto rounded-xl overflow-hidden  bg-[#fff8ef] p-8 md:p-12 border border-black shadow-[12px_12px_0px_rgba(0,0,0,1)]">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600 rotate-45" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
              <span className="text-indigo-600">Ready</span> to Scale Your
              Business with Custom SaaS?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="space-y-3">
              <div className="bg-amber-100 w-10 h-10 rounded-lg flex items-center justify-center">
                <Pencil className="h-5 w-5 text-amber-800" />
              </div>
              <h3 className="font-semibold text-lg">Better content, faster.</h3>
              <p className="text-gray-700">
                Brainstorm first drafts and generate tables.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="space-y-3">
              <div className="bg-indigo-100 w-10 h-10 rounded-lg flex items-center justify-center">
                <Users className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-lg">Insights, instantly.</h3>
              <p className="text-gray-700">
                Ask questions about your doc or create dashboards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="space-y-3">
              <div className="bg-green-100 w-10 h-10 rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg">Take action, at scale.</h3>
              <p className="text-gray-700">
                Set your repetitive tasks to auto-pilot.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              Try it for free
            </Button>
            <Button variant="outline" className="border-gray-300">
              Learn more
            </Button>
          </div>

          <div className="text-gray-700">
            What if I want even more AI than what&apos;s included?
            <Link href="#" className="text-indigo-600 hover:underline ml-1">
              Learn more
            </Link>
          </div>
        </div>

        {/* Right side preview */}
        <div className="lg:w-1/3 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6"></div>

              <div className="relative mt-8">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="absolute right-0 top-0 bg-indigo-600 text-white text-xs px-2 py-1 rounded flex items-center">
                  <Sparkles className="h-3 w-3 mr-1" />
                  AI
                </div>
              </div>

              <div className="mt-8 border rounded-lg p-4 flex justify-between items-center">
                <p className="text-gray-600 text-sm whitespace-nowrap">
                  Help me write a sales email
                </p>
                <Button className="bg-indigo-600 hover:bg-indigo-700" size="sm">
                  <Sparkles className="h-4 w-4 mr-1" />
                  Create
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
