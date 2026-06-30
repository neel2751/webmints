import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CalForm from "./schedule-form";

export const metadata = {
  title: "Schedule a Call",
  description:
    "Schedule a call with our sales team to discuss your custom SaaS solution needs.",
  alternates: {
    canonical: "/schedule-call",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/schedule-call",
    images: ["/opengraph-image.png"],
  },
};

export default function ScheduleCallPage() {
  return (
    <div className="flex flex-col pb-16 font-grotesk">
      {/* Hero Section */}
      <section className="relative">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" /> */}
        <div className="container relative py-5 md:py-10 mx-auto">
          {/* <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-1 tracking-tighter">
              Schedule a Call with Our Sales Team
            </h1>
            <p className="text-lg text-gray-600 font-medium tracking-tight">
              Ready to explore how our SaaS solutions can transform your
              business? Schedule a call with our sales experts to discuss your
              unique needs and discover the perfect fit for your organization.
            </p>
          </div> */}
          <Card>
            <CardHeader>
              <CardTitle className="text-5xl font-bold text-gray-900 mb-1 tracking-tighter text-center">
                Schedule a Call with Our Sales Team
              </CardTitle>
              <CardDescription className="text-md font-medium tracking-tight leading-snug text-gray-600 text-center max-w-3xl mx-auto">
                {/* Choose a convenient time for your call, and our team will be in
                touch to confirm the details. */}
                Ready to explore how our SaaS solutions can transform your
                business? Schedule a call with our sales experts to discuss your
                unique needs and discover the perfect fit for your organization.
                Choose a convenient time for your call, and our team will be in
                touch to confirm the details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CalForm />
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="px-32"></div>
    </div>
  );
}
