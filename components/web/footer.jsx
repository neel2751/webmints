import { HomePageIndustries } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterLinks = [
  {
    title: "Company",
    links: [
      { name: "About us", link: "/about-us" },
      { name: "Features", link: "/features" },
      { name: "Solution", link: "/solution" },
      { name: "Careers", link: "/careers" },
      { name: "Contact us", link: "/contact-us" },
    ],
  },
  {
    title: "Industries",
    links: [
      ...HomePageIndustries.map((item) => ({
        name: item.title,
        link: `/industries/${item.id}`,
      })),
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Pricing", link: "/pricing" },
      { name: "Industries", link: "/industries" },
      { name: "Maintenance", link: "/maintenance-support" },
      { name: "Blog", link: "/blog" },
      { name: "Support", link: "/help-center" },
    ],
  },
  {
    title: "Security",
    links: [
      { name: "Terms of Service", link: "/terms-conditions" },
      { name: "Privacy Policy", link: "/privacy-policy" },
    ],
  },
];

const Footer = () => {
  return (
    // <footer className="relative">
    //   <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-indigo-500 to-gray-200"></div>
    //   <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
    //     <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
    //       <div className="col-span-full hidden lg:col-span-1 lg:block">
    //         <Link
    //           className="flex items-center gap-2 font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white font-grotesk"
    //           href="/"
    //           aria-label="Brand"
    //         >
    //           <Image
    //             src={"/images/webmints.svg"}
    //             alt="Webmints Logo"
    //             height={40}
    //             width={40}
    //             className="h-10 w-10"
    //             title="webmints logo"
    //           />
    //           Webmints
    //         </Link>
    //         <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400 font-sans font-medium">
    //           Refreshing Digital Experiences
    //         </p>
    //       </div>
    //       <div>
    //         <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-neutral-100 font-grotesk">
    //           Company
    //         </h3>

    //         <div className="mt-3 grid space-y-3 text-sm font-sans text-gray-500">
    //           {[
    //             { name: "Home", link: "/" },
    //             { name: "Features", link: "/features" },
    //             { name: "Solution", link: "/solution" },
    //             { name: "Contact-us", link: "/contact-us" },
    //           ].map((title) => (
    //             <FooterLink
    //               key={title.name}
    //               title={title.name}
    //               link={title.link}
    //             />
    //           ))}
    //         </div>
    //       </div>

    //       <div>
    //         <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-neutral-100 font-grotesk">
    //           Industries
    //         </h3>

    //         <div className="mt-3 grid space-y-3 text-sm font-sans text-gray-500">
    //           {[
    //             { name: "Pricing", link: "/pricing" },
    //             { name: "Industries", link: "/industries" },
    //             { name: "About Us", link: "/about-us" },
    //             { name: "Blog", link: "/blog" },
    //           ].map((item) => (
    //             <FooterLink
    //               key={item.name}
    //               title={item.name}
    //               link={item.link}
    //             />
    //           ))}
    //         </div>
    //       </div>

    //       <div>
    //         <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-neutral-100 font-grotesk">
    //           Resources
    //         </h3>

    //         <div className="mt-3 grid space-y-3 text-sm font-sans text-gray-500">
    //           {[
    //             { name: "Maintenance", link: "/maintenance" },
    //             { name: "Careers", link: "/careers" },
    //             { name: "Community", link: "/community" },
    //             { name: "Help Center", link: "/help-center" },
    //           ].map((item) => (
    //             <FooterLink
    //               key={item.name}
    //               title={item.name}
    //               link={item.link}
    //             />
    //           ))}
    //         </div>
    //       </div>

    //       <div>
    //         <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-neutral-100 font-grotesk">
    //           INDUSTRIES
    //         </h3>

    //         <div className="mt-3 grid space-y-3 text-sm font-sans text-gray-500">
    //           {industriesFeature.map((item) => (
    //             <FooterLink
    //               key={item.title}
    //               title={item.title}
    //               link={`/request-quote?industry=${item.title}`}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="mt-8 pt-4 border-t border-gray-200">
    //       <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
    //         <div className="flex items-center space-x-6">
    //           <div className="flex space-x-6 text-sm font-sans text-gray-600">
    //             {[
    //               {
    //                 title: "Terms",
    //                 link: "terms-conditions",
    //               },
    //               {
    //                 title: "Privacy Policy",
    //                 link: "privacy-policy",
    //               },
    //             ].map((item) => (
    //               <FooterLink
    //                 key={item.title}
    //                 title={item.title}
    //                 link={item.link}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //         <div className="mt-4 text-center text-sm text-gray-600 group cursor-pointer font-grotesk font-medium">
    //           © {new Date().getFullYear()}{" "}
    //           <span className="text-pretty font-medium group-hover:text-indigo-600 transition-colors duration-300">
    //             Webmints.
    //           </span>
    //           All rights reserved.
    //         </div>
    //         <div className="flex space-x-4">
    //           <Link
    //             href="#"
    //             className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 p-1"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 32 32"
    //               fill="currentcolor"
    //               stroke="currentcolor"
    //               strokeWidth="0.5"
    //             >
    //               <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
    //             </svg>
    //           </Link>
    //           <Link
    //             href="https://www.instagram.com/webmints/"
    //             className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 p-1"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 32 32"
    //               fill="currentcolor"
    //               stroke="currentcolor"
    //               strokeWidth="0.5"
    //             >
    //               <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
    //             </svg>
    //           </Link>
    //           <Link
    //             href="https://www.linkedin.com/company/webmints/"
    //             className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 p-1"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 32 32"
    //               fill="currentcolor"
    //               stroke="currentcolor"
    //               strokeWidth="0.5"
    //             >
    //               <path
    //                 d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
    //                 fillRule="evenodd"
    //               ></path>
    //             </svg>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <NewFooter />
  );
};

export default Footer;

function NewFooter() {
  return (
    <footer className="bg-black text-white font-grotesk">
      <div className="lg:mx-auto max-w-[80rem] px-6 sm:px-10">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-8">
            <div className="md:col-span-2 md:pr-16">
              <Link
                className="flex items-center gap-2 font-bold tracking-tight text-xl focus:outline-none focus:opacity-80 dark:text-white font-grotesk"
                href="/"
                aria-label="Webmints Home"
              >
                <Image
                  src={"/images/webmints.svg"}
                  alt="Webmints Logo"
                  height={40}
                  width={40}
                  className="h-10 w-10"
                  title="webmints logo"
                />
                Webmints
              </Link>
              <p className="text-white/80 text-base mt-2 font-medium tracking-tight">
                Refresh Your Digital Experience with Webmints: Expert SaaS
                Maintenance for Optimal Performance and Growth.
              </p>
            </div>
            {FooterLinks.map((section) => (
              <FooterLinkSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 mt-12 py-6">
        <div className="lg:mx-auto max-w-[80rem] px-6 sm:px-10">
          <div className="flex items-center justify-between">
            <p className="text-white/50 text-sm">
              &copy; {new Date().getFullYear()} Webmints Info. All rights
            </p>
            <div className="flex items-center space-x-4">
              <Link
                href="https://twitter.com/webmints27"
                target="_blank"
                rel="noopener"
                className="text-white/50 hover:text-white/70 transition-colors"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-[22px] h-[22px] text-white"
                >
                  <path d="M29.998,6.538c-1.074,0.477-2.228,0.798-3.438,0.942c1.236-0.741,2.183-1.915,2.628-3.316c-1.156,0.686-2.438,1.185-3.809,1.453c-1.094-1.165-2.652-1.894-4.377-1.894c-3.313,0-6,2.687-6,6c0,0.471,0.053,0.929,0.156,1.37C8.08,9.691,4.28,7.38,1.64,4.149c-0.517,0.888-0.814,1.918-0.814,3.02c0,2.086,1.062,3.927,2.676,5.008c-0.986-0.031-1.913-0.302-2.722-0.753c-0.001,0.025-0.001,0.05-0.001,0.075c0,2.911,2.071,5.338,4.815,5.89c-0.504,0.137-1.035,0.21-1.586,0.21c-0.388,0-0.764-0.038-1.131-0.108c0.765,2.387,2.982,4.125,5.612,4.173c-2.056,1.612-4.65,2.571-7.47,2.571c-0.485,0-0.964-0.028-1.436-0.084c2.666,1.708,5.833,2.706,9.237,2.706c11.086,0,17.141-9.183,17.141-17.141c0-0.261-0.006-0.522-0.017-0.779C28.012,8.77,29.079,7.702,29.998,6.538Z"></path>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/webmints"
                target="_blank"
                rel="noopener"
                className="text-white/50 hover:text-white/70 transition-colors"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-[20px] h-[20px] text-white"
                >
                  <path
                    d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Link>
              {/* <Link
                href="https://github.com/namespacelabs"
                target="_blank"
                rel="noopener"
                className="text-white/50 hover:text-white/70 transition-colors"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-[24px] h-[24px] text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link> */}
              <Link
                href="https://www.instagram.com/webmints/"
                target="_blank"
                rel="noopener"
                className="text-white/50 hover:text-white/70 transition-colors"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-[22px] h-[22px] text-white"
                >
                  <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c0.058-1.364,0.286-2.106,0.476-2.6,0.252-0.655,0.556-1.12,1.044-1.612s0.955-0.795,1.608-1.05c0.493-0.193,1.234-0.422,2.598-0.487,1.476-0.07,1.919-0.084,5.656-0.092,3.737-0.008,4.181,0.006,5.658,0.071,1.364,0.059,2.106,0.285,2.599,0.476,0.654,0.252,1.12,0.555,1.612,1.044s0.795,0.954,1.051,1.609c0.193,0.492,0.422,1.232,0.486,2.597,0.07,1.476,0.086,1.919,0.093,5.656,0.007,3.737-0.006,4.181-0.071,5.656-0.06,1.365-0.286,2.106-0.476,2.601-0.252,0.654-0.556,1.12-1.045,1.612s-0.955,0.795-1.608,1.05c-0.493,0.192-1.234,0.422-2.597,0.487-1.476,0.069-1.919,0.084-5.657,0.092s-4.18-0.007-5.656-0.071M21.779,8.517c0.002,0.928,0.755,1.679,1.683,1.677s1.679-0.755,1.677-1.683c-0.002-0.928-0.755-1.679-1.683-1.677,0,0,0,0,0,0-0.928,0.002-1.678,0.755-1.677,1.683m-12.967,7.496c0.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-0.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-0.005c-0.005-2.577,2.08-4.671,4.658-4.676,2.577-0.005,4.671,2.08,4.676,4.658,0.005,2.577-2.08,4.671-4.658,4.676-2.577,0.005-4.671-2.079-4.676-4.656h0"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLinkSection({ title, links }) {
  return (
    <div className="md:col-span-1">
      <h3 className="font-semibold text-white/50 mb-4">{title}</h3>
      <ul>
        {links.map((item) => (
          <li key={item.name} className="first:-mt-2 last:-mb-2">
            <Link
              href={item.link}
              className="text-white/80 hover:text-white font-semibold text-sm transition-colors py-2 block"
            >
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ title, link }) {
  return (
    <p>
      <Link
        className="inline-flex gap-x-2 tracking-tight font-medium hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800 hover:border-b border-indigo-600"
        href={link}
      >
        {title}
      </Link>
    </p>
  );
}
