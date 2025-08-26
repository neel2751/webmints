import HomePage from "./(pages)/home/home";

export const metadata = {
  title: {
    default: "Simplicity at the Core. Power at Your Fingertips",
    template: "%s | Webmints", // Used in documentation to set the HTML <title> tag
  },
  description:
    "Custom-built software experiences that streamline operations, boost efficiency, and scale with your success", // Used in documentation to set the HTML <meta> tag
  metadataBase: new URL("https://webmints.com"), // Set this to your production URL
  generator: "Webmints",
  applicationName: "Webmints",
  alternates: {
    canonical: `https://webmints.com`,
  },
  keywords: [
    "Construction Company Ilford",
    "Builders Cranbrook Road",
    "Construction Services East London",
    "London Commercial Construction",
    "UK Design and Build Specialists",
    "Construction Company Canary Wharf", // Add your keywords here
    "Planning Application",
    "Builders in Stratford London",
    "Construction Services Guildford",
    "East London Builders",
    "Construction Company IG2",
  ], // we have to research  more about SEO and add relevant keywords here

  openGraph: {
    title: "Build Smart. Launch Fast. Grow Limitlessly",
    description: "Refreshing Digital Experiences Everywhere",
    url: "https://webmints.com",
    siteName: "Webmints",
    images: "/opengraph-image.png",
    local: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Build SaaS Platforms That Actually Work for Your Business",
    description:
      "At Webmint, we deliver tailored SaaS platforms and digital solutions designed for performance, scalability, and growth.",
    site: "https://webmints.com",
    creator: "@webmints27",
    images: ["https://webmints.com/opengraph-image.png"], // Must be an absolute URL
  },
};

export default function Home() {
  return <HomePage />;
}
