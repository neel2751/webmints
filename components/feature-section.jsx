import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Cloud,
  Shield,
  Zap,
  Users,
  BarChart3,
  Smartphone,
  Database,
  Lock,
  Headphones,
  Rocket,
  Settings,
  Sparkles,
  Trophy,
  LucideTicket,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function FeaturesSection() {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description:
        "Tailored solutions built from the ground up to match your exact business requirements and workflows.",
      badge: "Core Service",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud-Native Architecture",
      description:
        "Scalable, resilient applications built for the cloud with automatic scaling and high availability.",
      badge: "Modern Tech",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description:
        "Bank-level security with encryption, compliance standards, and regular security audits.",
      badge: "Security First",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Performance",
      description:
        "Optimized for speed with advanced caching, CDN integration, and performance monitoring.",
      badge: "High Performance",
      color: "from-yellow-500 to-orange-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description:
        "Built-in collaboration tools with real-time updates, notifications, and team management.",
      badge: "Collaboration",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      description:
        "Comprehensive dashboards and reporting with real-time insights and data visualization.",
      badge: "Data Driven",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Responsive",
      description:
        "Fully responsive design that works perfectly on all devices and screen sizes.",
      badge: "Mobile First",
      color: "from-teal-500 to-cyan-600",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Management",
      description:
        "Robust data handling with backup, recovery, and migration capabilities.",
      badge: "Data Safety",
      color: "from-slate-500 to-gray-600",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Access Control",
      description:
        "Granular permissions and role-based access control for enhanced security.",
      badge: "Access Control",
      color: "from-red-500 to-pink-600",
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "24/7 Support",
      description:
        "Round-the-clock technical support with dedicated account management.",
      badge: "Always Available",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Rapid Deployment",
      description:
        "Fast deployment with CI/CD pipelines and automated testing for quick time-to-market.",
      badge: "Fast Launch",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Easy Integration",
      description:
        "Seamless integration with existing systems and third-party services via APIs.",
      badge: "Integration",
      color: "from-gray-500 to-slate-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 mb-4 font-grotesk">
            Why Choose WebMints
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-grotesk">
            Everything You Need to
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you
            need to build, deploy, and scale your custom SaaS solution with
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <Badge
                    variant="secondary"
                    className="text-xs bg-gray-100 text-gray-600 font-grotesk"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4 font-grotesk">
              Ready to Experience These Features?
            </h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              See how our comprehensive feature set can transform your business
              operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"/schedule-demo"}
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors font-grotesk"
              >
                Schedule Demo
              </Link>
              <Link
                href={"/pricing"}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors font-grotesk"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureSectionNew() {
  return (
    <section className="bg-white py-12 md:py-20 font-grotesk">
      <div className="mx-auto max-w-6xl px-3">
        <div className="px-2 sm:px-12 lg:flex lg:justify-between lg:gap-20">
          <div className="bg-ui relative hidden h-fit max-w-fit overflow-hidden rounded-[2.5rem] border p-2 shadow-xl lg:block">
            <Image
              src="/_astro/levels.B9uVZFs5_1VH8oL.webp"
              className="max-w-[18rem] rounded-[2rem] border"
              alt="Oxymor overview"
              width="828"
              height="1792"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="my-auto h-fit lg:max-w-xl lg:py-6">
            <h2 className="font-bold text-black/75 mb-2 text-4xl tracking-tight">
              Protect Your Privacy While Using Sensitive Data with{" "}
              <span className="relative">
                <svg
                  className="absolute inset-x-0 -bottom-2 text-indigo-400"
                  viewBox="0 0 392 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M391.684 9.72238C373.052 8.86947 354.435 7.90085 335.804 7.22142C325.475 6.84556 315.147 7.01911 304.818 6.84563C295.682 6.68662 286.546 6.36858 277.41 6.12283C275.126 6.06501 272.856 5.97826 270.572 6.02163C255.029 6.36857 239.471 6.42633 223.957 7.22142C212.781 7.78521 201.663 9.37544 190.515 10.4452C184.008 11.0668 177.472 11.4571 170.979 12.2088C166.281 12.7581 161.627 13.7267 156.958 14.5507C154.229 15.0277 151.528 15.6927 148.785 16.0252C143.599 16.6468 138.399 17.0949 133.198 17.6154C132.322 17.7021 131.446 17.6587 130.584 17.7888C126.188 18.4972 121.793 19.1911 117.411 19.9717C113.504 20.6656 109.625 21.504 105.718 22.2124C100.719 23.1087 95.6913 23.8893 90.6778 24.7711C87.1297 25.3927 83.5671 25.971 80.0764 26.7806C74 28.1973 67.8661 29.4693 61.9333 31.3486C42.684 37.4491 23.5354 43.8388 4.28613 49.9248C3.13692 50.2862 0.465005 49.2743 0.235164 48.4069C-0.238884 46.6866 0.0196909 44.388 0.867232 42.8268C1.47057 41.7137 3.49602 41.2221 4.97563 40.7451C16.6545 37.0299 28.3045 33.1556 40.0839 29.8018C52.8258 26.1733 65.6251 22.6606 78.5537 19.8127C89.7441 17.3407 101.15 15.8951 112.455 13.958C123.488 12.0643 134.477 9.78015 145.567 8.30562C157.792 6.67209 170.102 5.67462 182.399 4.60487C189.481 3.99771 196.735 4.53266 203.674 3.23161C212.566 1.56916 221.328 1.8293 230.235 1.98832C237.087 2.11843 243.939 0.239197 250.82 0.065724C260.358 -0.18003 269.911 0.325884 279.464 0.557182C286.819 0.730655 294.159 0.947471 301.514 1.16431C307.418 1.33779 313.322 1.36672 319.212 1.72812C328.004 2.263 336.795 2.9135 345.572 3.69413C353.516 4.40248 361.431 5.5301 369.375 6.18062C374.949 6.62876 380.565 6.49866 386.154 6.81669C388.122 6.93234 390.046 7.61173 392 8.03096C391.899 8.59474 391.785 9.15859 391.684 9.72238Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="relative">Webmints</span>
              </span>
            </h2>
            <p className="text-base font-medium leading-snug text-gray-600 mt-4 tracking-tight">
              Introducing Initiatives. A new way to align projects into larger,
              strategic product efforts. Express the most important streams of
              work in your company and how they are progressing.
            </p>
            <div className="my-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:gap-x-6">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <h3 className="text-base text-gray-900 font-medium">
                    AI Assisted
                  </h3>
                </div>
                <p className="text-gray-800 mt-4 text-sm">
                  Fuga debitis et ullam magnam doloremque eum sapiente nihil?
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4" />
                  <h3 className="text-base text-gray-900 font-medium">
                    Awards
                  </h3>
                </div>
                <p className="text-gray-800 mt-4 text-sm">
                  Ullam officiis quasi, neque quas. Doloremque eum sapiente
                  nihil?
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <LucideTicket className="h-4 w-4" />
                  <h3 className="text-base text-gray-900 font-medium">
                    Earn tickets
                  </h3>
                </div>
                <p className="text-gray-800 mt-4 text-sm">
                  Fuga debitis et ullam magnam officiis quasi, neque quas.
                </p>
              </div>
            </div>
            <div className="border-t border-dashed pt-12">
              <blockquote className="text-lg font-medium">
                " Voluptatum ipsa similique recusandae, sequi possimus quidem
                accusantium dolorem rerum deleniti dolores, eaque ut quos nisi
                maiores veniam quibusdam vitae eos. Illo!"
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-6">
                <Image
                  className="h-8 invert"
                  src="/payment/stripe.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="h-8 w-px bg-[--ui-border-color]"></div>
                <div className="space-y-0.5">
                  <span className="block text-sm font-medium">Neel Patel</span>
                  <span className="block text-xs">Growth Strategist</span>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
