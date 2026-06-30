import HomePage from "./(pages)/home/home";

export const metadata = {
  title: "Custom SaaS & Business Automation Solutions",
  description:
    "We design and develop custom SaaS platforms and business automation software tailored to your workflows. Scale faster with WebMints.",
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
