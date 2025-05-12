import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-indigo-500 to-gray-200"></div>
      <div className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          <div className="col-span-full hidden lg:col-span-1 lg:block">
            <Link
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
              href="#"
              aria-label="Brand"
            >
              Webmints
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
              © 2025 Webmints Labs.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Product
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Pricing
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Changelog
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Docs
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Download
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Company
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  About us
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Blog
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Careers
                </Link>
                <span className="inline text-indigo-600 dark:text-indigo-500 font-medium tracking-tight">
                  — We're hiring
                </span>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Customers
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Newsroom
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Sitemap
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Resources
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Community
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Help & Support
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  eBook
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  What's New
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Status
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Developers
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Api
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Status
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  GitHub
                </Link>
                <span className="inline text-indigo-600 dark:text-indigo-500 font-medium tracking-tight">
                  — New
                </span>
              </p>
            </div>

            <h4 className="mt-7 text-xs font-semibold text-gray-900 uppercase dark:text-neutral-100">
              Industries
            </h4>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Financial Services
                </Link>
              </p>
              <p>
                <Link
                  className="inline-flex gap-x-2 text-gray-600 hover:text-indigo-700 hover:font-medium focus:outline-none focus:text-indigo-800"
                  href="#"
                >
                  Education
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                <a
                  className="text-neutral-600 hover:text-indigo-800 hover:font-medium transition-colors duration-300"
                  href="terms"
                >
                  Terms
                </a>
                <a
                  className="text-neutral-600 hover:text-indigo-800 hover:font-medium transition-colors duration-300"
                  href="privacy"
                >
                  Privacy
                </a>
                <a
                  className="text-neutral-600 hover:text-indigo-800 hover:font-medium transition-colors duration-300"
                  href="cookies"
                >
                  Cookies
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-600 group cursor-pointer">
              © 2025{" "}
              <span className="text-pretty font-medium group-hover:text-indigo-600 transition-colors duration-300">
                Webmints.
              </span>
              All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/cdcconstructionltd"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth="0.5"
                >
                  <path d="M16,2c-7.732,0-14,6.268-14,14,0,6.566,4.52,12.075,10.618,13.588v-9.31h-2.887v-4.278h2.887v-1.843c0-4.765,2.156-6.974,6.835-6.974,.887,0,2.417,.174,3.043,.348v3.878c-.33-.035-.904-.052-1.617-.052-2.296,0-3.183,.87-3.183,3.13v1.513h4.573l-.786,4.278h-3.787v9.619c6.932-.837,12.304-6.74,12.304-13.897,0-7.732-6.268-14-14-14Z"></path>
                </svg>
              </a>
              <a
                href="https://instagram.com/cdc.constructionuk"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth="0.5"
                >
                  <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"></path>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@CDCLtd"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth="0.5"
                >
                  <path d="M31.331,8.248c-.368-1.386-1.452-2.477-2.829-2.848-2.496-.673-12.502-.673-12.502-.673,0,0-10.007,0-12.502,.673-1.377,.37-2.461,1.462-2.829,2.848-.669,2.512-.669,7.752-.669,7.752,0,0,0,5.241,.669,7.752,.368,1.386,1.452,2.477,2.829,2.847,2.496,.673,12.502,.673,12.502,.673,0,0,10.007,0,12.502-.673,1.377-.37,2.461-1.462,2.829-2.847,.669-2.512,.669-7.752,.669-7.752,0,0,0-5.24-.669-7.752ZM12.727,20.758V11.242l8.364,4.758-8.364,4.758Z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/creative-design-and-construction-limited/"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth="0.5"
                >
                  <path
                    d="M26.111,3H5.889c-1.595,0-2.889,1.293-2.889,2.889V26.111c0,1.595,1.293,2.889,2.889,2.889H26.111c1.595,0,2.889-1.293,2.889-2.889V5.889c0-1.595-1.293-2.889-2.889-2.889ZM10.861,25.389h-3.877V12.87h3.877v12.519Zm-1.957-14.158c-1.267,0-2.293-1.034-2.293-2.31s1.026-2.31,2.293-2.31,2.292,1.034,2.292,2.31-1.026,2.31-2.292,2.31Zm16.485,14.158h-3.858v-6.571c0-1.802-.685-2.809-2.111-2.809-1.551,0-2.362,1.048-2.362,2.809v6.571h-3.718V12.87h3.718v1.686s1.118-2.069,3.775-2.069,4.556,1.621,4.556,4.975v7.926Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@cdclimited"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-gray-800 hover:bg-indigo-600 hover:text-white transition-all duration-200 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  fill="currentcolor"
                  stroke="currentcolor"
                  strokeWidth="0.5"
                >
                  <path d="M24.562,7.613c-1.508-.983-2.597-2.557-2.936-4.391-.073-.396-.114-.804-.114-1.221h-4.814l-.008,19.292c-.081,2.16-1.859,3.894-4.039,3.894-.677,0-1.315-.169-1.877-.465-1.288-.678-2.169-2.028-2.169-3.582,0-2.231,1.815-4.047,4.046-4.047,.417,0,.816,.069,1.194,.187v-4.914c-.391-.053-.788-.087-1.194-.087-4.886,0-8.86,3.975-8.86,8.86,0,2.998,1.498,5.65,3.783,7.254,1.439,1.01,3.19,1.606,5.078,1.606,4.886,0,8.86-3.975,8.86-8.86V11.357c1.888,1.355,4.201,2.154,6.697,2.154v-4.814c-1.345,0-2.597-.4-3.647-1.085Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
