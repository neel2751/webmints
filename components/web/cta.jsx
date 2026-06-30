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
                  <p className="bg-gradient-to-tr from-amber-200 to-amber-400 text-transparent bg-clip-text font-medium uppercase tracking-tight text-sm ">
                    Ready to dive in?
                  </p>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 font-grotesk">
                  {/* Ready to Scale Your Business with Custom SaaS? */}
                  Ready to Build Your SaaS Platform?
                </h2>
                <p className="text-white/90 text-lg mb-10 max-w-lg ">
                  {/* Our team is here to help you every step of the way. From
                  consultation to implementation, we'll work with you to create
                  a customized solution that meets your unique needs and goals. */}
                  If you’re looking for a custom SaaS development company that
                  understands your business and delivers results — WebMints is
                  your partner.
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
                  <Link
                    href={"/schedule-call"}
                    className="h-10 bg-white text-indigo-700 hover:bg-indigo-600 hover:text-white transition-colors font-grotesk text-base font-semibold tracking-tight
                    px-6 py-2 rounded-lg inline-flex items-center justify-center"
                  >
                    Schedule Your Free Consultation
                  </Link>
                </div>
              </div>
              <div className="relative h-full w-full sm:block hidden">
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

export function CTANEW() {
  return (
    <div className="mx-auto max-w-7xl py-16 sm:px-6 sm:py-20 lg:px-8 font-grotesk">
      <div className="overflow-hidden px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-20 lg:pt-0 border border-neutral-200 z-10">
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
          <h2 className="text-4xl font-bold mb-2 tracking-tight text-black/85">
            Ready to Build or Scale Your SaaS Platform with{" "}
            <span className="relative">
              <svg
                className="absolute inset-x-0 -bottom-2 text-indigo-400"
                viewBox="0 0 392 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M391.684 9.72238C373.052 8.86947 354.435 7.90085 335.804 7.22142C325.475 6.84556 315.147 7.01911 304.818 6.84563C295.682 6.68662 286.546 6.36858 277.41 6.12283C275.126 6.06501 272.856 5.97826 270.572 6.02163C255.029 6.36857 239.471 6.42633 223.957 7.22142C212.781 7.78521 201.663 9.37544 190.515 10.4452C184.008 11.0668 177.472 11.4571 170.979 12.2088C166.281 12.7581 161.627 13.7267 156.958 14.5507C154.229 15.0277 151.528 15.6927 148.785 16.0252C143.599 16.6468 138.399 17.0949 133.198 17.6154C132.322 17.7021 131.446 17.6587 130.584 17.7888C126.188 18.4972 121.793 19.1911 117.411 19.9717C113.504 20.6656 109.625 21.504 105.718 22.2124C100.719 23.1087 95.6913 23.8893 90.6778 24.7711C87.1297 25.3927 83.5671 25.971 80.0764 26.7806C74 28.1973 67.8661 29.4693 61.9333 31.3486C42.684 37.4491 23.5354 43.8388 4.28613 49.9248C3.13692 50.2862 0.465005 49.2743 0.235164 48.4069C-0.238884 46.6866 0.0196909 44.388 0.867232 42.8268C1.47057 41.7137 3.49602 41.2221 4.97563 40.7451C16.6545 37.0299 28.3045 33.1556 40.0839 29.8018C52.8258 26.1733 65.6251 22.6606 78.5537 19.8127C89.7441 17.3407 101.15 15.8951 112.455 13.958C123.488 12.0643 134.477 9.78015 145.567 8.30562C157.792 6.67209 170.102 5.67462 182.399 4.60487C189.481 3.99771 196.735 4.53266 203.674 3.23161C212.566 1.56916 221.328 1.8293 230.235 1.98832C237.087 2.11843 243.939 0.239197 250.82 0.065724C260.358 -0.18003 269.911 0.325884 279.464 0.557182C286.819 0.730655 294.159 0.947471 301.514 1.16431C307.418 1.33779 313.322 1.36672 319.212 1.72812C328.004 2.263 336.795 2.9135 345.572 3.69413C353.516 4.40248 361.431 5.5301 369.375 6.18062C374.949 6.62876 380.565 6.49866 386.154 6.81669C388.122 6.93234 390.046 7.61173 392 8.03096C391.899 8.59474 391.785 9.15859 391.684 9.72238Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="relative">Webmints</span>
            </span>
          </h2>
          <p className="text-md mt-6 font-medium leading-snug text-black/80">
            Whether you need a custom saaS paltform, automation for your
            business processes, or modern cloud-based software, our team is
            ready to help. Tell us about your requirements and we'll recommend
            the right solution tailored to your goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href="#"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
        <div className=" mt-16 lg:mt-8">
          <Image
            alt="App screenshot"
            src="/images/cta-new.svg"
            height={1000}
            width={1000}
            className="w-[48rem] sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
