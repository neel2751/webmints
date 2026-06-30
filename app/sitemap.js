// import { NAV_ITEMS } from "@/components/web/site-header";
import { HomePageIndustries } from "@/data/data";

const BASE_URL = "https://www.webmints.in";

const NAV_ITEMS = [
  {
    link: "/features",
  },
  {
    link: "/solution",
  },
  {
    link: "/services",
  },
  {
    link: "/pricing",
  },
  {
    link: "/about-us",
  },
  {
    link: "/contact-us",
  },
];

export default function sitemap() {
  //   const navitem = NAV_ITEMS;

  const navData = NAV_ITEMS.map((item) => {
    return {
      url: `${BASE_URL}${item?.link}`,
      lastModified: new Date(),
      priority: 0.5,
    };
  });
  const projects = HomePageIndustries.map(({ id }) => {
    return {
      url: `${BASE_URL}/industries/${id}`,
      lastModified: new Date(),
      priority: 0.5, // 0.5 is the default priority
    };
  });

  const otherLinks = [
    "contact-sales",
    "schedule-call",
    // "request-quote?location=sitemap",
    "maintenance",
    "technologies",
    "help-support",
    "careers",
    "privacy-policy",
    "terms-conditions",
    "cookies",
  ];

  const Portfolio = otherLinks.map((item) => {
    return {
      url: `${BASE_URL}/${item}`,
      lastModified: new Date(),
      priority: 0.5, // 0.5 is the default priority
    };
  });
  //   const pages = [
  //     { url: "/", lastmod: "2021-01-01" },
  //     { url: "/about", lastmod: "2021-01-01" },
  //     { url: "/contact", lastmod: "2021-01-01" },
  //   ];
  //   const all = services.concat(pages);
  //   const sitemap = all
  //     .map((item) => {
  //       return `<url><loc>${item.url}</loc><lastmod>${item.lastmod}</lastmod></url>`;
  //     })
  //     .join("\n");
  //   return sitemap;

  return [
    {
      url: "https://www.webmints.in",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...navData,
    ...Portfolio,
    ...projects,

    {
      url: "https://portal.webmints.in/login",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
