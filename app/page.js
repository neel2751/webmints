import HomePage from "./(pages)/home/home";

export const metadata = {
  title: "Custom SaaS & Business Automation for UK Businesses",
  description:
    "Bespoke SaaS platforms, business automation and cloud software for UK businesses, tailored to your processes so you can optimise, automate and scale.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/",
  },
};

export default function Home() {
  return <HomePage />;
}
