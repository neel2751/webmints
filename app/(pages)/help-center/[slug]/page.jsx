import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { helpLinks } from "@/data/data";
import FAQs from "@/components/faq";

export default async function Page({ params }) {
  const { slug } = await params;
  const data = helpLinks.find((item) => item.slug === slug);

  return (
    <main className="grow font-grotesk">
      <section>
        <div className="container bg-white 2xl:max-w-[1400px] mx-auto p-4 pt-20 pb-12">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center space-x-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/"
                    className="hover:text-indigo-700 font-medium text-sm text-gray-800 tracking-tight"
                  >
                    Home
                  </Link>
                </li>
                <li className="text-base-400">
                  <ChevronRight className="size-4" />
                </li>
                <li>
                  <Link
                    href="/helpcenter"
                    className="hover:text-indigo-700 font-medium text-sm text-gray-800 tracking-tight"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="text-base-400">
                  <ChevronRight className="size-4" />
                </li>
                <li>
                  <span className="font-semibold text-sm text-indigo-600 tracking-tight">
                    {data.title}
                  </span>
                </li>
              </ol>
            </nav>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tighter mt-12">
              {data.content.heading}
            </h1>
            <p className="text-lg mt-4 text-gray-600 font-medium tracking-tight">
              {data.content.subheading}
            </p>
          </div>
        </div>
        <section>
          <div className="container bg-white  2xl:max-w-[1400px] mx-auto p-4 py-12 border-t">
            <div dangerouslySetInnerHTML={{ __html: data.content.details }} />
          </div>
        </section>
        <section>
          <div className="container bg-white  2xl:max-w-[1400px] mx-auto p-4 py-12 border-t">
            <div className="max-w-2xl">
              <div className="flex flex-col justify-center gap-4 mb-12">
                <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 font-medium tracking-tight max-w-3xl">
                  Find answers to common questions about account management,
                  including troubleshooting tips and best practices.
                </p>
              </div>
              <FAQs faqs={data.content.faqs} />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
