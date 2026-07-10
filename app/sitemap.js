import { SITE_URL } from "@/lib/site";
import { HomePageIndustries, helpLinks } from "@/data/data";

// Keep in sync with the `jobs` object in app/(pages)/careers/[job]/page.jsx
const JOB_SLUGS = [
  "senior-full-stack-developer",
  "ux-ui-designer",
  "digital-marketing-specialist",
  "devops-engineer",
  "sales-development-representative",
  "marketing-specialist",
];

const MAIN_PAGES = [
  "/features",
  "/solution",
  "/services",
  "/pricing",
  "/industries",
  "/about-us",
  "/contact-us",
  "/blog",
];

const OTHER_PAGES = [
  "/contact-sales",
  "/schedule-call",
  "/request-quote",
  "/maintenance",
  "/maintenance-support",
  "/technologies",
  "/help-center",
  "/careers",
  "/careers/general-application",
];

const LEGAL_PAGES = ["/privacy-policy", "/terms-conditions"];

const entry = (path, priority) => ({
  url: `${SITE_URL}${path}`,
  lastModified: new Date(),
  priority,
});

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...MAIN_PAGES.map((path) => entry(path, 0.8)),
    ...OTHER_PAGES.map((path) => entry(path, 0.6)),
    ...HomePageIndustries.map(({ id }) => entry(`/industries/${id}`, 0.6)),
    ...JOB_SLUGS.map((slug) => entry(`/careers/${slug}`, 0.5)),
    ...helpLinks.map(({ slug }) => entry(`/help-center/${slug}`, 0.5)),
    ...LEGAL_PAGES.map((path) => entry(path, 0.3)),
  ];
}
