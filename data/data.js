import {
  BarChart3,
  Clock,
  Globe,
  Layout,
  Pointer,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const enterprise = [
  {
    title: "Enterprise Resource Planning",
    description:
      "Comprehensive ERP solutions to streamline business operations",
    icon: <Globe className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Integrated modules for finance, HR, and operations",
      "Real-time data synchronization across departments",
      "Customizable workflows and approval processes",
    ],
  },
  {
    title: "Customer Relationship Management",
    description: "Powerful CRM tools to enhance customer engagement",
    icon: <Users className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "360° customer view with interaction history",
      "Sales pipeline management and forecasting",
      "Marketing automation and campaign tracking",
    ],
  },
  {
    title: "Supply Chain Management",
    description: "End-to-end supply chain visibility and optimization",
    icon: <Clock className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Inventory management and demand forecasting",
      "Supplier relationship and performance tracking",
      "Logistics optimization and route planning",
    ],
  },
];
const productivity = [
  {
    title: "Project Management",
    description: "Streamline project workflows and team collaboration",
    icon: <Zap className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Task management with dependencies and milestones",
      "Resource allocation and capacity planning",
      "Gantt charts and timeline visualization",
    ],
  },
  {
    title: "Team Collaboration",
    description: "Enhance team productivity with integrated tools",
    icon: <Users className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Real-time document collaboration and editing",
      "Integrated messaging and video conferencing",
      "Knowledge base and information sharing",
    ],
  },
  {
    title: "Time & Resource Management",
    description: "Optimize time tracking and resource allocation",
    icon: <Clock className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Automated time tracking and reporting",
      "Resource utilization and availability monitoring",
      "Workload balancing and capacity planning",
    ],
  },
];
const analytics = [
  {
    title: "Business Intelligence",
    description: "Transform data into actionable insights",
    icon: <BarChart3 className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Interactive dashboards and data visualization",
      "Predictive analytics and trend forecasting",
      "Custom reporting and KPI tracking",
    ],
  },
  {
    title: "Data Visualization",
    description: "Convert complex data into intuitive visuals",
    icon: <BarChart3 className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Interactive charts and graphical representations",
      "Real-time data streaming and visualization",
      "Customizable dashboards for different stakeholders",
    ],
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions",
    icon: <BarChart3 className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Machine learning algorithms for trend prediction",
      "Anomaly detection and pattern recognition",
      "Scenario modeling and what-if analysis",
    ],
  },
];
const security = [
  {
    title: "Data Protection",
    description: "Secure sensitive information with advanced protection",
    icon: <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "End-to-end encryption for data at rest and in transit",
      "Data loss prevention and access controls",
      "Compliance management for GDPR, HIPAA, etc.",
    ],
  },
  {
    title: "Identity Management",
    description: "Secure access control and authentication",
    icon: <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Multi-factor authentication and SSO",
      "Role-based access control and permissions",
      "User activity monitoring and audit trails",
    ],
  },
  {
    title: "Threat Detection",
    description: "Proactive monitoring and threat prevention",
    icon: <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" />,
    list: [
      "Real-time threat monitoring and alerts",
      "Vulnerability scanning and penetration testing",
      "Incident response and remediation",
    ],
  },
];
export const SolutionsTab = [
  {
    value: "enterprise",
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: "Enterprise",
    content: enterprise,
  },
  {
    value: "productivity",
    icon: <Pointer className="h-auto w-4 shrink-0" />,
    label: "Productivity",
    content: productivity,
  },
  {
    value: "analytics",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Analytics",
    content: analytics,
  },
  {
    value: "security",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Security",
    content: security,
  },
];

const frontend = {
  title: "Frontend Technologies",
  description:
    "We build responsive, intuitive, and performant user interfaces using modern frontend technologies.",
  frontendTechnologies: [
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
  ],
};
const backend = {
  title: "Backend Technologies",
  description:
    "Our backend systems are built for reliability, performance, and scalability.",
  frontendTechnologies: [
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
  ],
};
const database = {
  title: "Database Technologies",
  description:
    "We select the right database technology based on your specific data requirements and usage patterns.",
  frontendTechnologies: [
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
  ],
};
const cloud = {
  title: "Cloud & DevOps",
  description:
    "Our cloud and DevOps practices ensure reliable, scalable, and cost-effective infrastructure.",
  frontendTechnologies: [
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
  ],
};
const securityTech = {
  title: "Security Technologies",
  description:
    "We implement robust security measures to protect your data and ensure compliance with industry standards.",
  frontendTechnologies: [
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
  ],
};

export const TechTab = [
  {
    value: "frontend",
    icon: <Zap className="h-auto w-4 shrink-0" />,
    label: "Frontend",
    content: frontend,
    image: "/images/tech/frontend.svg",
  },
  {
    value: "backend",
    icon: <Pointer className="h-auto w-4 shrink-0" />,
    label: "Backend",
    content: backend,
    image: "/images/tech/backend.svg",
  },
  {
    value: "database",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Database",
    content: database,
    image: "/images/tech/database.svg",
  },
  {
    value: "cloud",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Cloud & DevOps",
    content: cloud,
    image: "/images/tech/cloud.svg",
  },
  {
    value: "security",
    icon: <Layout className="h-auto w-4 shrink-0" />,
    label: "Security",
    content: securityTech,
    image: "/images/tech/security.svg",
  },
];

export const industriesFeature = [
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Features designed for large organizations to streamline operations and enhance collaboration.",
    icon: "🏢",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Tools to optimize your online store, boost sales, and enhance customer experience.",
    icon: "🛒",
  },
  {
    id: "fintech",
    title: "Fintech & Banking",
    description:
      "Secure, compliant features for financial institutions and fintech companies.",
    icon: "💰",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "HIPAA-compliant tools to improve patient care and streamline administrative tasks.",
    icon: "🏥",
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "Features to manage projects, resources, and teams efficiently in the field.",
    icon: "🏗️",
  },
];
export const industriesPricing = [
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description: "Custom SaaS for large organizations with complex needs.",
    icon: "🏢",
    pricingNote:
      "Enterprise solutions typically start at $100,000+ due to complex requirements, integrations, and security needs.",
    btnName: "View Industry Solutions",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Specialized solutions for online retailers and e-commerce businesses.",
    icon: "🛒",
    pricingNote:
      "E-commerce solutions range from $50,000 to $200,000+ depending on complexity, integrations, and scale.",
    btnName: "View Industry Solutions",
  },
  {
    id: "fintech",
    title: "Fintech & Banking",
    description:
      "Secure, compliant solutions with pricing tailored for financial institutions.",
    icon: "💰",
    pricingNote:
      "Fintech solutions typically start at $100,000+ due to stringent security, compliance, and regulatory requirements.",
    btnName: "View Industry Solutions",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "HIPAA-compliant solutions with pricing designed for healthcare providers.",
    icon: "🏥",
    pricingNote:
      "Healthcare solutions range from $75,000 to $250,000+ depending on compliance requirements and integration complexity.",
    btnName: "View Industry Solutions",
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "Pricing packages designed specifically for construction companies.",
    icon: "🏗️",
    pricingNote:
      "Construction industry solutions typically range from $50,000 to $150,000+ based on field requirements and integrations.",
    btnName: "View Industry Solutions",
  },
];

export const HomePageIndustries = [
  {
    id: "enterprise",
    title: "Enterprise Solutions",
    description:
      "Our enterprise solutions are designed to scale with your business, providing robust features that enhance productivity and streamline operations. We focus on delivering high-quality, customizable solutions that meet the unique needs of large organizations.",
    icon: "🏢",
    image: "/images/industries/sol.svg",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "We specialize in building e-commerce platforms that drive sales and enhance customer experiences. Our solutions include advanced payment integrations, inventory management, and personalized shopping experiences to help you succeed in the online retail space.",
    icon: "🛒",
    image: "/images/industries/ecom.svg",
  },
  {
    id: "education",
    title: "Education",
    description:
      "We create innovative educational platforms that facilitate learning and collaboration. Our solutions include Learning Management Systems (LMS), online course delivery, and student management systems, all designed to enhance the educational experience for both students and educators.",
    icon: "💰",
    image: "/images/industries/edu.svg",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "We provide healthcare solutions that improve patient care and streamline administrative processes. Our HIPAA-compliant systems include Electronic Health Records (EHR), telemedicine platforms, and patient management systems, ensuring secure and efficient healthcare delivery.",
    icon: "🏥",
    image: "/images/industries/health.svg",
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "Our construction industry solutions help manage projects, resources, and teams efficiently. We provide tools for project management, field data collection, and equipment tracking to enhance productivity on construction sites.",
    icon: "🏗️",
    image: "/images/industries/con.svg",
  },
];

// Industry-Specific Technologies Data
export const industryTechnologies = [
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
    id: "education",
    title: "Education",
    description:
      "Innovative technologies for educational institutions and e-learning platforms.",
    icon: "💰",
    technologies: [
      "Learning Management Systems (LMS)",
      "Online course delivery platforms",
      "Student information systems",
      "Collaboration tools for educators",
      "Assessment and grading systems",
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
