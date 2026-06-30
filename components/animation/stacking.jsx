"use client";
import React from "react";

export default function Stacking({ items }) {
  return (
    <div
      id={items?.id}
      className="mx-auto max-w-7xl px-6 lg:px-8 group/section [counter-increment:section]"
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
          <div className="flex justify-center">
            <div
              className="w-[33.75rem] flex-none lg:w-[45rem]"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="justify-center lg:justify-end lg:group-even/section:justify-start relative flex aspect-auto w-full hover:grayscale-0 grayscale">
                {/* <svg
                  width="600"
                  height="400"
                  viewBox="0 0 600 400"
                  fill="none"
                  className="h-full"
                >
                  <g clipPath="url(#:S1:-clip)" className="group">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                      <foreignObject width="600" height="600">
                        <img src={items.imgSrc} />
                      </foreignObject>
                    </g>
                    <use
                      href="#:S1:-shape"
                      strokeWidth="2"
                      className="stroke-neutral-950/10"
                    ></use>
                  </g>

                  <defs>
                    <clipPath id=":S1:-clip">
                      <path
                        id=":S1:-shape"
                        d="M60 0.5H599.5V340C599.5 372.861 572.861 399.5 540 399.5H0.5V60C0.5 27.1391 27.1391 0.5 60 0.5Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </clipPath>
                  </defs>
                </svg> */}

                <svg width="601" height="624" fill="none">
                  <g clipPath="url(#:S1:-clip)" className="group">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                      <foreignObject width="1000" height="1000">
                        <img src={items.imgSrc} />
                      </foreignObject>
                    </g>
                    <use
                      href="#:S1:-shape"
                      strokeWidth="2"
                      className="stroke-neutral-950/10"
                    ></use>
                  </g>
                  <defs>
                    <clipPath id=":S1:-clip">
                      <path
                        id=":S1:-shape"
                        d="M503.735 0.458984H561.866C568.234 0.458984 573.01 6.2851 571.762 12.5283L548.277 129.953C547.82 132.241 546.583 134.299 544.779 135.778C542.975 137.257 540.715 138.065 538.382 138.065H512.442C508.943 138.065 505.553 139.278 502.847 141.496C500.141 143.715 498.287 146.802 497.601 150.233L443.108 422.694C441.235 432.061 448.398 440.8 457.95 440.8H473.91V440.801C474.649 440.809 475.485 440.869 476.288 440.808C481.565 440.401 486.582 438.643 490.683 434.815C494.753 431.016 497.879 425.214 499.493 416.777C499.53 416.724 499.559 416.66 499.572 416.586L499.571 416.585L522.279 303.05C522.737 300.762 523.972 298.704 525.776 297.225C527.581 295.746 529.842 294.936 532.175 294.937H590.305C596.673 294.937 601.449 300.763 600.2 307.007L576.716 424.431V424.432C576.258 426.719 575.022 428.777 573.218 430.256C571.414 431.735 569.153 432.544 566.82 432.544H512.814C502.289 432.544 495.501 434.377 491.004 438.379C486.555 442.338 484.441 448.341 483.059 456.47C482.992 456.534 482.943 456.619 482.922 456.725L460.209 570.294C459.752 572.582 458.515 574.64 456.711 576.119C454.907 577.598 452.646 578.406 450.313 578.406H423.588C420.311 578.406 417.134 579.541 414.6 581.619C412.065 583.697 410.328 586.589 409.686 589.803C405.784 609.314 388.652 623.358 368.756 623.358H76.6025C50.2626 623.358 30.507 599.26 35.6729 573.432L129.612 103.734C133.515 84.2235 150.646 70.1799 170.542 70.1797H462.695C467.419 70.1797 472.36 68.9336 476.361 66.5195C480.366 64.1036 483.454 60.4999 484.397 55.7861L493.841 8.57129C494.298 6.2837 495.534 4.22514 497.338 2.74609C499.142 1.26714 501.403 0.459043 503.735 0.458984ZM499.378 416.147C499.385 416.153 499.393 416.158 499.399 416.164C499.393 416.158 499.385 416.153 499.378 416.147ZM34.0381 147.239H92.1689C98.5368 147.239 103.313 153.065 102.064 159.309L78.5801 276.733C78.1226 279.021 76.8862 281.08 75.082 282.559C73.278 284.038 71.0173 284.846 68.6846 284.846H10.5537C4.18574 284.846 -0.590465 279.02 0.658203 272.775L24.1426 155.352C24.6 153.064 25.8365 151.005 27.6406 149.526C29.4446 148.047 31.7053 147.239 34.0381 147.239Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      />
                    </clipPath>
                  </defs>
                </svg>

                {/* <svg viewBox="0 0 655 680" fill="none" className="h-full">
                  <g clipPath="url(#:S1:-clip)" className="group">
                    <g className="origin-center scale-100 transition duration-500 motion-safe:group-hover:scale-105">
                      <foreignObject width="1000" height="1000">
                        <img src={items.imgSrc} />
                      </foreignObject>
                    </g>
                    <use
                      href="#:S1:-shape"
                      strokeWidth="2"
                      className="stroke-neutral-950/10"
                    ></use>
                  </g>
                  <defs>
                    <clipPath id=":S1:-clip">
                      <path
                        id=":S1:-shape"
                        d="M537.827 9.245A11.5 11.5 0 0 1 549.104 0h63.366c7.257 0 12.7 6.64 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 586.87 151h-28.275a15.999 15.999 0 0 0-15.689 12.862l-59.4 297c-1.98 9.901 5.592 19.138 15.689 19.138h17.275l.127.001c.85.009 1.701.074 2.549.009 11.329-.874 21.411-7.529 24.88-25.981.002-.012.016-.016.023-.007.008.009.022.005.024-.006l24.754-123.771A11.5 11.5 0 0 1 580.104 321h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 617.87 472H559c-22.866 0-28.984 7.98-31.989 25.931-.004.026-.037.035-.052.014-.015-.02-.048-.013-.053.012l-24.759 123.798A11.5 11.5 0 0 1 490.87 631h-29.132a14.953 14.953 0 0 0-14.664 12.021c-4.3 21.502-23.18 36.979-45.107 36.979H83.502c-29.028 0-50.8-26.557-45.107-55.021l102.4-512C145.096 91.477 163.975 76 185.902 76h318.465c10.136 0 21.179-5.35 23.167-15.288l10.293-51.467Zm-512 160A11.5 11.5 0 0 1 37.104 160h63.366c7.257 0 12.7 6.639 11.277 13.755l-25.6 128A11.5 11.5 0 0 1 74.87 311H11.504c-7.257 0-12.7-6.639-11.277-13.755l25.6-128Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </clipPath>
                  </defs>
                </svg> */}
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="font-display text-base font-semibold before:text-indigo-600 before:content-['/_'] after:text-indigo-600 after:content-[counter(section,decimal-leading-zero)]"
                aria-hidden="true"
              ></div>
              <h2 className="text-4xl font-bold mb-2 tracking-tighter text-gray-800">
                {items?.title}
              </h2>
              <div className="mt-6">
                <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
                  {items?.longDescription}
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: items?.detailsHtml }}
                  className="mt-4 text-base text-neutral-600"
                />
                <ul role="list" className="mt-4 flex flex-wrap gap-4">
                  {items?.keywords?.map((point, index) => (
                    <li
                      key={index}
                      className="rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-600"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
