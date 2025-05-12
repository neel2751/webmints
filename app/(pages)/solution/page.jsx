import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Globe,
  BarChart3,
  ShieldCheck,
  Zap,
  Clock,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Text from "@/components/animation/text";

export const metadata = {
  title: "Solutions | Custom SaaS Development",
  description:
    "Explore our comprehensive SaaS solutions tailored for various business needs and industries.",
};

export default function SolutionsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-indigo-100 text-indigo-800 mb-4 px-3 py-1 text-sm"
            >
              Enterprise-Grade Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Built to Solve Real Business
              <span className="text-indigo-600">
                <Text
                  keywords={["Problems", "Growth", "Operations"]}
                  className="text-indigo-600"
                />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of SaaS solutions designed to
              transform your business operations, enhance productivity, and
              drive growth across industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Explore Feature <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <img
              src="https://cdn.dribbble.com/userupload/43243517/file/original-f39a67757e2e26c6da5d93fd768008e9.png?resize=1600x1200&vertical=center"
              alt="SaaS Solutions Dashboard"
              // fill
              className="object-cover"
              // priority
            />
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Solution Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our SaaS solutions are categorized to address specific business
              needs across various domains.
            </p>
          </div>

          <Tabs defaultValue="enterprise" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-8 bg-transparent h-auto">
              <TabsTrigger
                value="enterprise"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800 py-3"
              >
                Enterprise
              </TabsTrigger>
              <TabsTrigger
                value="productivity"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800 py-3"
              >
                Productivity
              </TabsTrigger>
              <TabsTrigger
                value="analytics"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800 py-3"
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-indigo-100 data-[state=active]:text-indigo-800 py-3"
              >
                Security
              </TabsTrigger>
            </TabsList>

            <TabsContent value="enterprise" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <Globe className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Enterprise Resource Planning</CardTitle>
                    <CardDescription>
                      Comprehensive ERP solutions to streamline business
                      operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Integrated modules for finance, HR, and operations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Real-time data synchronization across departments
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Customizable workflows and approval processes
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/enterprise-resource-planning"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <Users className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Customer Relationship Management</CardTitle>
                    <CardDescription>
                      Powerful CRM tools to enhance customer engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>360° customer view with interaction history</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Sales pipeline management and forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Marketing automation and campaign tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/customer-relationship-management"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <Clock className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Supply Chain Management</CardTitle>
                    <CardDescription>
                      End-to-end supply chain visibility and optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Inventory management and demand forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Supplier relationship and performance tracking
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Logistics optimization and route planning</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/supply-chain-management"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="productivity" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <Zap className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Project Management</CardTitle>
                    <CardDescription>
                      Streamline project workflows and team collaboration
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Task management with dependencies and milestones
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Resource allocation and capacity planning</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Gantt charts and timeline visualization</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/project-management"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Additional productivity solutions would go here */}
                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <Users className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Team Collaboration</CardTitle>
                    <CardDescription>
                      Enhance team productivity with integrated tools
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Real-time document collaboration and editing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Integrated messaging and video conferencing</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Knowledge base and information sharing</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/team-collaboration"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <Clock className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Time & Resource Management</CardTitle>
                    <CardDescription>
                      Optimize time tracking and resource allocation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Automated time tracking and reporting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Resource utilization and availability monitoring
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Workload balancing and capacity planning</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/time-resource-management"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <BarChart3 className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Business Intelligence</CardTitle>
                    <CardDescription>
                      Transform data into actionable insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Interactive dashboards and data visualization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Predictive analytics and trend forecasting</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Custom reporting and KPI tracking</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/business-intelligence"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Additional analytics solutions would go here */}
                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <BarChart3 className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Data Visualization</CardTitle>
                    <CardDescription>
                      Convert complex data into intuitive visuals
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Interactive charts and graphical representations
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Real-time data streaming and visualization</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Customizable dashboards for different stakeholders
                        </span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/data-visualization"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <BarChart3 className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Predictive Analytics</CardTitle>
                    <CardDescription>
                      Forecast trends and make data-driven decisions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Machine learning algorithms for trend prediction
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Anomaly detection and pattern recognition</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Scenario modeling and what-if analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/predictive-analytics"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Data Protection</CardTitle>
                    <CardDescription>
                      Secure sensitive information with advanced protection
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          End-to-end encryption for data at rest and in transit
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Data loss prevention and access controls</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Compliance management for GDPR, HIPAA, etc.</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/data-protection"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                {/* Additional security solutions would go here */}
                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Identity Management</CardTitle>
                    <CardDescription>
                      Secure access control and authentication
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Multi-factor authentication and SSO</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Role-based access control and permissions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>User activity monitoring and audit trails</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/identity-management"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
                  <CardHeader>
                    <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" />
                    <CardTitle>Threat Detection</CardTitle>
                    <CardDescription>
                      Proactive monitoring and threat prevention
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Real-time threat monitoring and alerts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>
                          Vulnerability scanning and penetration testing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Incident response and remediation</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="/solutions/threat-detection"
                      className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                    >
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                variant="outline"
                className="bg-indigo-100 text-indigo-800 mb-4 px-3 py-1 text-sm"
              >
                Featured Solution
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Enterprise Resource Planning
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship ERP solution integrates all core processes needed
                to run a company – finance, HR, manufacturing, supply chain,
                services, procurement, and more – into a single system.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Unified Operations
                    </h3>
                    <p className="text-gray-600">
                      Seamlessly connect all departments and functions across
                      your organization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <BarChart3 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Real-time Analytics
                    </h3>
                    <p className="text-gray-600">
                      Make informed decisions with instant access to critical
                      business data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-4">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Process Automation
                    </h3>
                    <p className="text-gray-600">
                      Automate routine tasks and workflows to increase
                      efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                Explore ERP Solution <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="ERP Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="bg-indigo-100 text-indigo-800 mb-4 px-3 py-1 text-sm"
            >
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Businesses Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our SaaS solutions have helped organizations overcome
              challenges and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                    E-commerce
                  </Badge>
                  <span className="text-sm text-gray-500">Case Study</span>
                </div>
                <CardTitle className="mt-2">
                  Global Retail Chain Increases Sales by 45%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Learn how our integrated e-commerce solution helped a global
                  retail chain streamline operations and significantly boost
                  their online sales performance.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/case-studies/retail-chain"
                  className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                >
                  Read case study <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Healthcare Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                    Healthcare
                  </Badge>
                  <span className="text-sm text-gray-500">Case Study</span>
                </div>
                <CardTitle className="mt-2">
                  Hospital Network Reduces Costs by 30%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover how our healthcare management solution helped a major
                  hospital network optimize resource allocation and
                  significantly reduce operational costs.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/case-studies/hospital-network"
                  className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                >
                  Read case study <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Fintech Success Story"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                    Fintech
                  </Badge>
                  <span className="text-sm text-gray-500">Case Study</span>
                </div>
                <CardTitle className="mt-2">
                  Banking Institution Improves Security by 200%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  See how our security solutions helped a leading banking
                  institution strengthen their cybersecurity posture and protect
                  sensitive customer data.
                </p>
              </CardContent>
              <CardFooter>
                <Link
                  href="/case-studies/banking-security"
                  className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
                >
                  Read case study <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
            >
              View All Case Studies <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-600">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with Our SaaS Solutions?
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Schedule a personalized demo to see how our solutions can address
            your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50"
            >
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-indigo-700"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
