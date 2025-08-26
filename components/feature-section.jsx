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
            Why Choose SaaSify
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
