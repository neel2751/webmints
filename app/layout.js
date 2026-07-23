import { SITE_URL } from "@/lib/site";
import { Space_Grotesk, Work_Sans } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import { Toaster } from "sonner";
import UseCookie from "./(pages)/cookie/useCookie";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

const inter = Work_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | WebMints",
    default: "Custom SaaS Development Company in the UK | Webmints",
  },
  description:
    "Webmints designs and builds custom SaaS platforms for UK and global businesses, fully tailored to your workflows and scalable from MVP to full enterprise.",
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "WebMints – Custom SaaS Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@webmints",
    site: SITE_URL,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      {/* <GoogleTagManager gtmId="GTM-M79C75BG" /> */}
      <GoogleTagManager gtmId="GTM-W3BRW698" />
      <body className="antialiased font-sans">
        <OrganizationSchema />
        {children}
        <Toaster />
        <UseCookie />
      </body>
    </html>
  );
}
