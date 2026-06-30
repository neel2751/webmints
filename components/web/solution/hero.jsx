import React from "react";

export default function SolutionHero() {
  return (
    <section className="relative overflow-hidden py-20 font-sans after:absolute after:bottom-0 after:left-0 after:block after:h-20 after:w-full after:bg-[linear-gradient(theme(colors.transparent),_theme(colors.white))] after:content-[''] md:py-40">
      <div className="relative container mx-auto">
        <img
          src="https://library.shadcnblocks.com/images/block/patterns/circles.svg"
          alt=""
          className="absolute top-[-68.75rem] right-[-86.25rem] z-[-1] block aspect-square h-auto w-[181.25rem] max-w-none"
        />
        <div className="grid grid-cols-1 items-center justify-center gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
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
                className="lucide lucide-shopping-cart h-6 w-6 fill-primary stroke-primary"
              >
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <p className="text-lg font-semibold">Returns</p>
            </div>
            <h1 className="text-5xl !leading-tight font-semibold xl:text-6xl">
              Go beyond managing returns, take control and perfect them.
            </h1>
            <p className="text-2xl leading-snug text-muted-foreground">
              Create tailored return policies that boost retention and keep your
              customers thrilled.
            </p>
            <a
              href="#"
              data-slot="button"
              className="items-center justify-center gap-2 whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 has-[>svg]:px-3 block h-fit w-fit rounded-full px-6 py-2 text-base leading-loose font-semibold"
            >
              Book a demo
            </a>
          </div>
          <div className="justify-self-center lg:justify-self-end">
            <div className="flex aspect-[0.955145119_/_1] flex-col rounded-xl border bg-white p-3 shadow-xl sm:w-[22.625rem]">
              <div>
                <div className="w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src="/images/block/placeholder-1.svg"
                    alt=""
                    className="block h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="m-auto flex w-full items-center justify-between">
                <div className="flex items-center gap-1 rounded-md bg-black/5 px-2 py-1">
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
                    className="lucide lucide-repeat h-4"
                  >
                    <path d="m17 2 4 4-4 4"></path>
                    <path d="M3 11v-1a4 4 0 0 1 4-4h14"></path>
                    <path d="m7 22-4-4 4-4"></path>
                    <path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
                  </svg>
                  <p className="text-xs font-semibold sm:text-sm">Exchange</p>
                </div>
                <div className="flex items-center gap-1 rounded-md bg-white px-2 py-1">
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
                    className="lucide lucide-shopping-bag h-4 stroke-black/40"
                  >
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                    <path d="M3 6h18"></path>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <p className="text-xs font-semibold text-black/40 sm:text-sm">
                    Shop Now
                  </p>
                </div>
                <div className="flex items-center gap-1 rounded-md bg-white px-2 py-1">
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
                    className="lucide lucide-banknote h-4 stroke-black/40"
                  >
                    <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                  </svg>
                  <p className="text-xs font-semibold text-black/40 sm:text-sm">
                    Refund
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
