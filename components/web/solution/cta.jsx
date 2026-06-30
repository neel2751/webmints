import React from "react";

export default function SolutionCTA() {
  return (
    <section className="py-32 text-background md:container md:max-w-5xl mx-auto">
      <div className="relative isolate container grid items-center overflow-hidden bg-gradient-to-r from-primary to-primary/75 py-8 max-lg:gap-10 max-md:gap-6 md:rounded-3xl lg:grid-cols-2 lg:px-8">
        <div className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_left,black_50%,transparent_100%)]">
          <svg
            width="32"
            height="32"
            className="h-full w-full text-background/[0.05]"
          >
            <defs>
              <pattern
                id="plus-pattern-:S1:"
                x="0"
                y="0"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
              >
                <line
                  x1="8"
                  y1="5"
                  x2="8"
                  y2="11"
                  stroke="currentColor"
                  strokeWidth="1"
                ></line>
                <line
                  x1="5"
                  y1="8"
                  x2="11"
                  y2="8"
                  stroke="currentColor"
                  strokeWidth="1"
                ></line>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#plus-pattern-:S1:)"
            ></rect>
          </svg>
        </div>
        <div className="border-background/20 lg:border-e lg:py-16 lg:pr-20">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            Launch today
          </h2>
          <p className="mt-3 text-sm font-medium text-background/70">
            In the past, new financial companies had to rely on expensive
            middleware that linked them to outdated sponsor bank systems,
            restricting their potential. Our API solves this today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 max-md:hidden">
            <a
              href="/signup"
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-10 rounded-md px-6 has-[>svg]:px-4 group bg-indigo-600"
            >
              Start for free
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
                className="lucide lucide-chevron-right ml-1 size-4 transition-transform group-hover:translate-x-0.5"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
            <a
              href="/"
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 group bg-indigo-600"
            >
              Get a demo
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
                className="lucide lucide-chevron-right ml-1 size-4 transition-transform group-hover:translate-x-0.5"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="space-y-6 lg:py-10 lg:pl-20">
          <div>
            <h3 className="text-3xl font-semibold text-background md:text-4xl lg:text-5xl">
              $29.99
            </h3>
            <p className="mt-1 text-xl font-medium text-background/70">
              per user per month
            </p>
          </div>
          <ul className="space-y-3 text-sm text-background/70">
            <li className="flex items-center gap-2">
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
                className="lucide lucide-check size-4"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              All free plan features and...
            </li>
            <li className="flex items-center gap-2">
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
                className="lucide lucide-check size-4"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Mainline AI
            </li>
            <li className="flex items-center gap-2">
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
                className="lucide lucide-check size-4"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Unlimited teams
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-4 md:hidden">
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 h-10 rounded-md px-6 has-[>svg]:px-4 group w-full"
            >
              <a href="/signup" className="flex items-center gap-2">
                Start building for free
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
                  className="lucide lucide-chevron-right ml-1 size-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </button>
            <button
              data-slot="button"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 group w-full bg-secondary-foreground"
            >
              <a href="/" className="flex items-center gap-2">
                Get a demo
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
                  className="lucide lucide-chevron-right ml-1 size-4 transition-transform group-hover:translate-x-0.5"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
