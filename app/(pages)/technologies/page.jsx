import Link from "next/link";
import Image from "next/image";
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
import {
  ArrowRight,
  Check,
  Server,
  Database,
  Shield,
  Code,
  Cloud,
  Zap,
} from "lucide-react";

export default function TechnologiesPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-24 md:py-32 mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Our Technology Stack
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              We leverage cutting-edge technologies to build robust, scalable,
              and secure SaaS solutions tailored to your industry needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/contact">Discuss Your Project</Link>
              </Button>
              <Button variant="outline">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Overview Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Technology Stack
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            We carefully select the best technologies to ensure performance,
            security, and scalability for your custom SaaS solution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techCategories.map((category, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 rounded-md bg-indigo-50 p-2 w-fit">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Detailed Tech Stack Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Technology Deep Dive
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Explore the specific technologies we use to build industry-leading
              SaaS solutions.
            </p>
          </div>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Database</TabsTrigger>
              <TabsTrigger value="cloud">Cloud & DevOps</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">Frontend Technologies</h3>
                  <p className="text-muted-foreground">
                    We build responsive, intuitive, and performant user
                    interfaces using modern frontend technologies.
                  </p>
                  <ul className="space-y-4">
                    {frontendTechnologies.map((tech, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-md bg-indigo-100 p-1">
                          <Code className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Frontend Technologies"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">Backend Technologies</h3>
                  <p className="text-muted-foreground">
                    Our backend systems are built for reliability, performance,
                    and scalability.
                  </p>
                  <ul className="space-y-4">
                    {backendTechnologies.map((tech, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-md bg-indigo-100 p-1">
                          <Server className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Backend Technologies"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="database" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">Database Technologies</h3>
                  <p className="text-muted-foreground">
                    We select the right database technology based on your
                    specific data requirements and usage patterns.
                  </p>
                  <ul className="space-y-4">
                    {databaseTechnologies.map((tech, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-md bg-indigo-100 p-1">
                          <Database className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Database Technologies"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">Cloud & DevOps</h3>
                  <p className="text-muted-foreground">
                    Our cloud and DevOps practices ensure reliable, scalable,
                    and cost-effective infrastructure.
                  </p>
                  <ul className="space-y-4">
                    {cloudTechnologies.map((tech, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-md bg-indigo-100 p-1">
                          <Cloud className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Cloud Technologies"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="mt-0">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">Security Technologies</h3>
                  <p className="text-muted-foreground">
                    We implement robust security measures to protect your data
                    and ensure compliance with industry standards.
                  </p>
                  <ul className="space-y-4">
                    {securityTechnologies.map((tech, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1 rounded-md bg-indigo-100 p-1">
                          <Shield className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {tech.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative rounded-lg overflow-hidden border shadow-sm">
                  <Image
                    src="/placeholder.svg?height=600&width=800"
                    alt="Security Technologies"
                    width={800}
                    height={600}
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technology Benefits Section */}
      <section className="container mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Benefits of Our Technology Choices
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Our carefully selected technology stack provides numerous advantages
            for your custom SaaS solution.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative rounded-lg overflow-hidden border shadow-sm">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Technology Benefits"
              width={800}
              height={600}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6">
            {techBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="mt-1 rounded-full bg-indigo-100 p-1">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Technologies Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Industry-Specific Technologies
            </h2>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              We leverage specialized technologies to address the unique
              requirements of different industries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industryTechnologies.map((industry, index) => (
              <Card
                key={index}
                className="transition-all duration-200 hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-2 text-3xl">{industry.icon}</div>
                  <CardTitle>{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {industry.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  >
                    <Link href={`/industries/${industry.id}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="container py-16 mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Technology Partners
          </h2>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            We collaborate with leading technology providers to deliver the best
            solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-20 gap-x-6 items-center justify-items-center">
          {techPartners.map((partner, index) => (
            <div
              key={index}
              className="grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={partner.logo || "/placeholder.svg?height=80&width=160"}
                alt={partner.name}
                width={160}
                height={80}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to build your custom solution?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how our technology expertise can help you create a
              powerful, scalable SaaS platform tailored to your industry needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-white text-indigo-600 hover:bg-gray-100"
              >
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                <Link href="/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Tech Categories Data
const techCategories = [
  {
    title: "Frontend Technologies",
    description:
      "Modern frameworks and libraries for building responsive and intuitive user interfaces.",
    icon: <Code className="h-6 w-6 text-indigo-600" />,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "JavaScript",
      "GraphQL",
      "PWA",
    ],
  },
  {
    title: "Backend Technologies",
    description:
      "Robust server-side technologies for building scalable and maintainable APIs and services.",
    icon: <Server className="h-6 w-6 text-indigo-600" />,
    technologies: ["Node.js", "Express", "Python", "Django", "Next.js"],
  },
  {
    title: "Database Technologies",
    description:
      "Relational and NoSQL databases for efficient data storage, retrieval, and management.",
    icon: <Database className="h-6 w-6 text-indigo-600" />,
    technologies: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "DynamoDB",
      "Firebase",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud platforms and DevOps tools for reliable, scalable, and secure infrastructure.",
    icon: <Cloud className="h-6 w-6 text-indigo-600" />,
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "DigitalOcean",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Monitoring",
    ],
  },
  {
    title: "Security Technologies",
    description:
      "Advanced security measures to protect your data and ensure compliance with industry standards.",
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    technologies: [
      "OAuth 2.0",
      "JWT",
      "SSL/TLS",
      "Encryption",
      "WAF",
      "SAST/DAST",
      "Compliance Tools",
      "2FA",
    ],
  },
  {
    title: "Performance Optimization",
    description:
      "Tools and techniques to ensure your SaaS solution performs at its best under any load.",
    icon: <Zap className="h-6 w-6 text-indigo-600" />,
    technologies: [
      "CDN",
      "Caching",
      "Load Balancing",
      "Microservices",
      "Serverless",
      "Optimization",
    ],
  },
];

// Frontend Technologies Data
const frontendTechnologies = [
  {
    name: "React & Next.js",
    description:
      "We use React and Next.js to build fast, SEO-friendly, and interactive user interfaces with server-side rendering capabilities.",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript adds strong typing to JavaScript, improving code quality, maintainability, and developer productivity.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Tailwind CSS enables us to create custom, responsive designs efficiently without writing custom CSS.",
  },
  {
    name: "Redux & Context API",
    description:
      "For state management, we use Redux for complex applications and Context API for simpler state requirements.",
  },
  {
    name: "Progressive Web Apps",
    description:
      "We implement PWA features to provide native-like experiences on web applications, including offline functionality.",
  },
];

// Backend Technologies Data
const backendTechnologies = [
  {
    name: "Node.js & Express",
    description:
      "Our primary backend stack for building fast, scalable, and maintainable APIs and microservices.",
  },
  {
    name: "NestJS",
    description:
      "For enterprise applications, we use NestJS to create scalable and maintainable server-side applications.",
  },
  {
    name: "Python & Django",
    description:
      "When appropriate, we leverage Python and Django for rapid development and data-intensive applications.",
  },
  {
    name: "GraphQL",
    description:
      "We implement GraphQL APIs for flexible data fetching and efficient client-server communication.",
  },
  {
    name: "Microservices Architecture",
    description:
      "For complex applications, we design microservices-based architectures for scalability and maintainability.",
  },
];

// Database Technologies Data
const databaseTechnologies = [
  {
    name: "PostgreSQL",
    description:
      "Our preferred relational database for complex data models, transactions, and data integrity requirements.",
  },
  {
    name: "MongoDB",
    description:
      "For flexible schema requirements and document-oriented data, we leverage MongoDB's scalability and performance.",
  },
  {
    name: "Redis",
    description:
      "We use Redis for caching, session management, and real-time features requiring high performance.",
  },
  {
    name: "Elasticsearch",
    description:
      "For applications requiring advanced search capabilities, we implement Elasticsearch for fast and relevant results.",
  },
  {
    name: "Database Sharding & Replication",
    description:
      "We implement sharding and replication strategies for high-availability and performance at scale.",
  },
];

// Cloud Technologies Data
const cloudTechnologies = [
  {
    name: "AWS / Azure / Google Cloud",
    description:
      "We are proficient in all major cloud platforms, selecting the best fit based on your requirements and existing infrastructure.",
  },
  {
    name: "Docker & Kubernetes",
    description:
      "We containerize applications with Docker and orchestrate them with Kubernetes for consistent deployment and scaling.",
  },
  {
    name: "Terraform & Infrastructure as Code",
    description:
      "We use Infrastructure as Code to create reproducible, version-controlled infrastructure deployments.",
  },
  {
    name: "CI/CD Pipelines",
    description:
      "Automated testing and deployment pipelines ensure reliable and frequent releases with minimal downtime.",
  },
  {
    name: "Monitoring & Observability",
    description:
      "We implement comprehensive monitoring and logging solutions to ensure system health and performance.",
  },
];

// Security Technologies Data
const securityTechnologies = [
  {
    name: "Authentication & Authorization",
    description:
      "We implement OAuth 2.0, JWT, and role-based access control for secure user authentication and authorization.",
  },
  {
    name: "Data Encryption",
    description:
      "End-to-end encryption and at-rest encryption protect sensitive data throughout your application.",
  },
  {
    name: "Security Testing",
    description:
      "Regular security assessments, penetration testing, and code scanning identify and address vulnerabilities.",
  },
  {
    name: "Compliance Tools",
    description:
      "We implement tools and practices to ensure compliance with GDPR, HIPAA, SOC 2, and other relevant standards.",
  },
  {
    name: "Web Application Firewall",
    description:
      "WAF protection against common web vulnerabilities and attacks, including OWASP Top 10 threats.",
  },
];

// Technology Benefits Data
const techBenefits = [
  {
    title: "Scalability",
    description:
      "Our technology choices ensure your application can scale seamlessly as your user base and data grow, without performance degradation.",
  },
  {
    title: "Performance",
    description:
      "We optimize every layer of the stack to deliver fast load times, responsive interfaces, and efficient data processing.",
  },
  {
    title: "Security",
    description:
      "Built-in security measures protect your data and users from common vulnerabilities and sophisticated attacks.",
  },
  {
    title: "Maintainability",
    description:
      "Clean architecture, modern frameworks, and best practices make your codebase easier to maintain and extend over time.",
  },
  {
    title: "Cost Efficiency",
    description:
      "Our cloud-native approach and infrastructure optimization help minimize operational costs while maximizing performance.",
  },
  {
    title: "Future-Proof",
    description:
      "We use established, well-supported technologies with active communities to ensure long-term viability and support.",
  },
];

// Industry-Specific Technologies Data
const industryTechnologies = [
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Technologies tailored for large organizations with complex needs.",
    icon: "🏢",
    technologies: [
      "Enterprise Service Bus (ESB) for system integration",
      "Advanced identity management and SSO",
      "Business process automation tools",
      "Legacy system integration capabilities",
      "Enterprise-grade security and compliance",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Specialized technologies for online retail and e-commerce businesses.",
    icon: "🛒",
    technologies: [
      "Payment gateway integrations",
      "Inventory management systems",
      "Product recommendation engines",
      "Shopping cart optimization",
      "Order fulfillment automation",
    ],
  },
  {
    id: "fintech",
    title: "Fintech & Banking",
    description:
      "Secure and compliant technologies for financial institutions.",
    icon: "💰",
    technologies: [
      "PCI DSS compliant payment processing",
      "Blockchain integration capabilities",
      "Financial data encryption",
      "Regulatory compliance frameworks",
      "Fraud detection systems",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description: "HIPAA-compliant technologies for healthcare providers.",
    icon: "🏥",
    technologies: [
      "HIPAA-compliant data storage",
      "Electronic Health Record (EHR) integration",
      "Telemedicine capabilities",
      "Healthcare analytics",
      "Patient portal frameworks",
    ],
  },
  {
    id: "construction",
    title: "Construction",
    description: "Specialized technologies for construction companies.",
    icon: "🏗️",
    technologies: [
      "BIM (Building Information Modeling) integration",
      "Project management tools",
      "Field data collection systems",
      "Equipment tracking solutions",
      "Safety compliance frameworks",
    ],
  },
];

// Technology Partners Data
const techPartners = [
  {
    name: "AWS",
    logo: "/images/tech/aws.svg",
  },
  {
    name: "Microsoft Azure",
    logo: "/images/tech/azure.svg",
  },
  {
    name: "Google Cloud",
    logo: "/images/tech/gcp.svg",
  },
  {
    name: "MongoDB",
    logo: "/images/tech/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    logo: "/images/tech/postgresql.svg",
  },
  {
    name: "Docker",
    logo: "/images/tech/docker.svg",
  },
  {
    name: "Kubernetes",
    logo: "/images/tech/kubernetes.svg",
  },
  {
    name: "MySQL",
    logo: "/images/tech/mysql.svg",
  },
  {
    name: "Node",
    logo: "/images/tech/node.svg",
  },
  {
    name: "Next.js",
    logo: "/images/tech/nextjs.svg",
  },
  {
    name: "React",
    logo: "/images/tech/react.svg",
  },
  {
    name: "Tailwind CSS",
    logo: "/images/tech/tailwind.svg",
  },
  {
    name: "Redis",
    logo: "/images/tech/redis.svg",
  },
  {
    name: "DigitalOcean",
    logo: "/images/tech/digitalocean.svg",
  },
  {
    name: "React Query",
    logo: "/images/tech/reactquery.svg",
  },
  {
    name: "Shadcn",
    logo: "/images/tech/shadcn.svg",
  },
  {
    name: "GitHub",
    logo: "/images/tech/github.svg",
  },
  {
    name: "GitLab",
    logo: "/images/tech/git.svg",
  },
];
