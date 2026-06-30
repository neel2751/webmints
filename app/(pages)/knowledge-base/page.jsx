import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="grow font-grotesk">
      <section className="overflow-hidden relative mb-12">
        <div className="fixed bottom-5 right-5 opacity-0 z-50 pointer-events-none  w-auto sm:w-[350px] max-h-[90vh] overflow-y-auto bg-white bg-stripes shadow-2xl transition-opacity duration-300 outline outline-base-200 p-2 rounded-xl">
          <div className="bg-white outline outline-base-200 shadow-2xl rounded-lg overflow-hidden divide-y divide-base-200">
            <div className="flex flex-col items-center justify-center h-32 p-6">
              <h3 className="text-lg md:text-xl  font-medium text-base-800">
                Got any questions?
              </h3>
              <p className="text-sm  mt-2 text-base-600">
                Typically replies under 1 hour
              </p>
            </div>
            <div className="flex-grow p-6">
              <form className="relative flex flex-col justify-between h-full">
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    id="full_name"
                    placeholder="Your Name"
                    required=""
                    className="block w-full h-10 px-4 py-2 text-sm text-teal-700 border border-transparent rounded-lg appearance-none duration-300 bg-base-100 placeholder-base-400 focus:bg-transparent focus:outline-none focus:ring-teal-500 focus:ring-offset-2 focus:ring-2 focus:ring-offset-base-200"
                  />
                  <input
                    type="email"
                    id="email"
                    placeholder="you@company.com"
                    required=""
                    className="block w-full h-10 px-4 py-2 text-sm text-teal-700 border border-transparent rounded-lg appearance-none duration-300 bg-base-100 placeholder-base-400 focus:bg-transparent focus:outline-none focus:ring-teal-500 focus:ring-offset-2 focus:ring-2 focus:ring-offset-base-200"
                  />
                  <textarea
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                    required=""
                    className="block w-full px-4 py-2 text-sm text-teal-700 border border-transparent rounded-lg appearance-none duration-300 bg-base-100 placeholder-base-400 focus:bg-transparent focus:outline-none focus:ring-teal-500 focus:ring-offset-2 focus:ring-2 focus:ring-offset-base-200"
                  ></textarea>
                </div>
                <button
                  className="flex ring border relative ease-in-out text-center font-medium duration-300 items-center shadow-bottom justify-center transition-all overflow-hidden focus:outline-2 inset-shadow-xs outline-offset-4 hover:opacity-90 hover:shadow-none border-transparent focus:outline-teal-300 inset-shadow-white/30 focus-visible:outline-none active:inset-shadow-transparent text-white bg-base-800 hover:bg-base-900 ring-base-800 h-10 px-4 py-3 text-base rounded-lg w-full mt-2"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container bg-white  2xl:max-w-[1400px] mx-auto p-4 py-12 relative overflow-hidden">
          <div className="relative">
            <p className="text-xs flex items-center font-medium uppercase gap-2 text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 text-indigo-600"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8"></path>
                <path d="M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8"></path>
                <path d="M17.5 16a3.5 3.5 0 0 0 0 -7h-.5"></path>
                <path d="M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0"></path>
                <path d="M6.5 16a3.5 3.5 0 0 1 0 -7h.5"></path>
                <path d="M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10"></path>
              </svg>
              Knowledge Base
            </p>
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl mt-8 font-semibold tracking-tighter text-black/90 lg:text-balance">
              Your Digital Finance Resource Hub Explained, Simplified,
              Empowered.
            </h1>
            <p className="text-lg md:text-xl max-w-lg mt-4 font-medium text-black/70 md:text-balance">
              Explore articles, guides, and tutorials to help you make the most
              of our digital finance solutions. We are here to support your
              journey every step of the way.
            </p>
          </div>
        </div>
        <div className="container bg-white 2xl:max-w-[1400px] mx-auto p-4 border border-dashed border-gray-300 py-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-4 gap-y-8">
            <div className="flex flex-col justify-between h-full gap-12 group">
              <div>
                <dt className="flex items-center gap-2 text-base-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-question-mark size-5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4"></path>
                    <path d="M12 19l0 .01"></path>
                  </svg>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-800">
                    Help Center
                  </h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
                    Find all questions and answers about our services and
                    features.
                  </p>
                </dd>
              </div>
              <Link
                className="text-sm flex items-center font-medium gap-2 text-black/80 tracking-tight group"
                href="/helpcenter"
              >
                Visit Help Center
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right size-4 duration-300 easy-out-in group-hover:translate-x-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
            </div>
            <div className="flex flex-col justify-between h-full gap-12 group">
              <div>
                <dt className="flex items-center gap-2 text-base-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-layout-users-clock size-5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-800">
                    Changelog
                  </h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-md font-medium tracking-tight leading-snug text-gray-600">
                    Find all the latest updates and changes, including new
                    features and improvements.
                  </p>
                </dd>
              </div>
              <Link
                className="text-sm flex items-center font-medium gap-2 text-black/80 tracking-tight group"
                href="/changelog"
              >
                Follow updates
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right size-4 duration-300 easy-out-in group-hover:translate-x-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
            </div>
            <div className="flex flex-col justify-between h-full gap-12 group">
              <div>
                <dt className="flex items-center gap-2 text-base-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-layout-settings size-5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  </svg>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-800">
                    Support
                  </h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-md font-medium tracking-tight leading-snug text-gray-600">
                    Reach out to support, submit a ticket, or get help with your
                    account.
                  </p>
                </dd>
              </div>
              <Link
                className="text-sm flex items-center font-medium gap-2 text-black/80 tracking-tight group"
                href="/contact"
              >
                Contact Support
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right size-4 duration-300 easy-out-in group-hover:translate-x-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
            </div>
            <div className="flex flex-col justify-between h-full gap-12 group">
              <div>
                <dt className="flex items-center gap-2 text-base-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-layout-user size-5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  </svg>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-800">
                    Live chat 24/7
                  </h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-md font-medium tracking-tight leading-snug text-gray-600">
                    We're here 24/7—ask us anything, connect with a support
                    agent instantly.
                  </p>
                </dd>
              </div>
              <div className="flex">
                <button
                  className="flex ring border relative ease-in-out text-center font-medium duration-300 items-center shadow-bottom justify-center transition-all overflow-hidden focus:outline-2 inset-shadow-xs outline-offset-4 hover:opacity-90 hover:shadow-none border-transparent focus:outline-teal-300 inset-shadow-white/30 focus-visible:outline-none active:inset-shadow-transparent text-black bg-base-100 hover:bg-base-100 ring-base-200 h-8 px-3 py-2 text-xs rounded-md"
                  id="chat-toggle"
                >
                  Talk to us now!
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full gap-12 group">
              <div>
                <dt className="flex items-center gap-2 text-base-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-phone size-5"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  </svg>
                  <h3 className="text-lg font-semibold tracking-tight text-gray-800">
                    Contact us
                  </h3>
                </dt>
                <dd className="mt-2">
                  <p className="text-md font-medium tracking-tight leading-snug text-gray-600">
                    Have a question or need assistance? Reach out to our
                    dedicated support team.
                  </p>
                </dd>
              </div>
              <Link
                className="text-sm flex items-center font-medium gap-2 text-black/80 tracking-tight group"
                href="phone:tel:+123456789"
              >
                Call us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right size-4 duration-300 easy-out-in group-hover:translate-x-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </Link>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
