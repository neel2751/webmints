import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { MapPin, Briefcase, Clock, ArrowLeft, Check } from "lucide-react";
import JobForm from "./jobForm";

// Job data
const jobs = {
  "senior-full-stack-developer": {
    title: "Senior Full Stack Developer",
    location: "Gujarat, India",
    type: "Full-time",
    department: "Engineering",
    postedDate: "Posted 2 days ago",
    shortDescription:
      "We're looking for an experienced Full Stack Developer to help build and scale our industry-specific SaaS solutions.",
    aboutRole:
      "As a Senior Full Stack Developer at Webmints, you'll be responsible for designing, developing, and maintaining our industry-specific SaaS solutions. You'll work closely with product managers, designers, and other developers to build high-quality, scalable, and maintainable software that solves real business problems for our customers.",
    responsibilities: [
      "Design, develop, and maintain web applications using modern JavaScript frameworks (React, Next.js) and Node.js",
      "Write clean, efficient, and well-documented code",
      "Collaborate with cross-functional teams to define, design, and ship new features",
      "Optimize applications for maximum speed and scalability",
      "Implement security and data protection measures",
      "Participate in code reviews and mentor junior developers",
      "Stay up-to-date with emerging trends and technologies",
    ],
    requirements: [
      "3+ years of experience in full stack development",
      "Strong proficiency in JavaScript/TypeScript, HTML, and CSS",
      "Experience with React, Next.js, and Node.js",
      "Familiarity with database technologies (SQL and NoSQL)",
      "Understanding of server-side rendering and API development",
      "Experience with cloud services (AWS, Azure, or GCP)",
      "Knowledge of software development best practices, including testing and CI/CD",
      "Excellent problem-solving and communication skills",
    ],
    preferred: [
      "Experience with GraphQL and REST API design",
      "Knowledge of containerization technologies (Docker, Kubernetes)",
      "Experience with microservices architecture",
      "Contributions to open-source projects",
      "Experience in SaaS product development",
    ],
  },
  "ux-ui-designer": {
    title: "UX/UI Designer",
    location: " Gujarat, India (Remote optional)",
    type: "Full-time",
    department: "Design",
    postedDate: "Posted 1 week ago",
    shortDescription:
      "Join our design team to create intuitive and beautiful user experiences for our SaaS platform.",
    aboutRole:
      "As a UX/UI Designer at Webmints, you'll be responsible for creating intuitive, engaging, and accessible user experiences for our industry-specific SaaS solutions. You'll collaborate with product managers, developers, and other designers to ensure our products are not only visually appealing but also highly functional and user-friendly.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs for web and mobile applications",
      "Conduct user research and usability testing to inform design decisions",
      "Develop and maintain design systems and component libraries",
      "Collaborate with developers to ensure accurate implementation of designs",
      "Create user flows, journey maps, and other UX artifacts",
      "Stay current with UX/UI trends, tools, and best practices",
      "Advocate for the user throughout the product development process",
    ],
    requirements: [
      "3+ years of experience in UX/UI design for digital products",
      "Strong portfolio demonstrating your design process and skills",
      "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
      "Experience with design systems and component-based design",
      "Understanding of accessibility standards and best practices",
      "Knowledge of HTML, CSS, and basic front-end concepts",
      "Excellent communication and presentation skills",
    ],
    preferred: [
      "Experience designing for SaaS or B2B products",
      "Knowledge of front-end frameworks like React",
      "Experience with motion design and micro-interactions",
      "Background in user research and usability testing",
      "Understanding of data visualization design",
    ],
  },
  "digital-marketing-specialist": {
    title: " Digital Marketing Specialist",
    location: "Gujarat, India",
    type: "Full-time",
    department: "Marketing",
    postedDate: "Posted 3 days ago",
    shortDescription:
      "Develop and execute digital marketing strategies to drive traffic and leads for our SaaS solutions.",
    aboutRole:
      "As a Digital Marketing Specialist at Webmints, you'll be responsible for creating and executing digital marketing campaigns that drive traffic, generate leads, and increase brand awareness for our industry-specific SaaS solutions. You'll work closely with the marketing team to develop strategies that resonate with our target audiences across different industries.",
    responsibilities: [
      "Develop and implement digital marketing strategies across various channels (SEO, SEM, social media, email, content marketing)",
      "Create and manage content for blogs, social media, and email campaigns",
      "Analyze campaign performance and optimize based on data",
      "Conduct keyword research and implement SEO best practices",
      "Manage PPC campaigns and monitor ROI",
      "Collaborate with the design team to create engaging visuals",
      "Stay up-to-date with digital marketing trends and tools",
    ],
    requirements: [
      "2+ years of experience in digital marketing, preferably in SaaS or technology",
      "Strong understanding of SEO, SEM, and social media marketing",
      "Experience with marketing automation tools (HubSpot, Marketo, etc.)",
      "Proficiency in Google Analytics and other analytics tools",
      "Excellent writing and content creation skills",
      "Ability to analyze data and derive actionable insights",
      "Strong project management and organizational skills",
    ],
    preferred: [
      "Experience with A/B testing and conversion rate optimization",
      "Familiarity with CRM systems (Salesforce, Zoho, etc.)",
      "Knowledge of HTML/CSS for email and landing page design",
      "Experience with video marketing and production",
      "Background in B2B marketing or lead generation",
    ],
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    location: "Gujarat, India(Remote optional)",
    type: "Full-time",
    department: "Engineering",
    postedDate: "Posted 5 days ago",
    shortDescription:
      "Join our engineering team to build and maintain scalable, secure, and reliable cloud infrastructure for our SaaS platform.",
    aboutRole:
      "As a DevOps Engineer at Webmints, you'll be responsible for building and maintaining our cloud infrastructure, implementing CI/CD pipelines, and ensuring the reliability, security, and scalability of our platform. You'll work closely with development teams to streamline deployment processes and optimize system performance.",
    responsibilities: [
      "Design, implement, and maintain cloud infrastructure on AWS, Azure, or GCP",
      "Build and improve CI/CD pipelines for automated testing and deployment",
      "Monitor system performance and implement optimizations",
      "Implement security best practices and ensure compliance requirements are met",
      "Troubleshoot and resolve infrastructure and application issues",
      "Automate manual processes to improve efficiency and reliability",
      "Collaborate with development teams to improve deployment processes",
    ],
    requirements: [
      "3+ years of experience in DevOps or Site Reliability Engineering",
      "Strong knowledge of cloud platforms (AWS, Azure, or GCP)",
      "Experience with infrastructure as code tools (Terraform, CloudFormation)",
      "Proficiency with CI/CD tools (Jenkins, GitHub Actions, CircleCI)",
      "Knowledge of containerization technologies (Docker, Kubernetes)",
      "Understanding of networking, security, and system administration",
      "Scripting and automation skills (Bash, Python, or similar)",
    ],
    preferred: [
      "Experience with monitoring and observability tools (Prometheus, Grafana, ELK)",
      "Knowledge of database administration and optimization",
      "Experience with microservices architecture",
      "Security certifications or experience with security automation",
      "Experience supporting SaaS applications in production",
    ],
  },
  "sales-development-representative": {
    title: "Sales Development Representative",
    location: "Remote (Europe Preferred)",
    type: "Full-time",
    department: "Sales",
    postedDate: "Posted 1 week ago",
    shortDescription:
      "Join our sales team to generate and qualify leads for our SaaS solutions in the European market. we are looking for a motivated and results-driven Sales Development Representative to help us expand our presence in the European market. You will be responsible for identifying and qualifying new business opportunities, engaging with potential customers, and setting up meetings for our sales team.",
    aboutRole:
      "As a Sales Development Representative at Webmints, you'll be responsible for generating and qualifying new business opportunities in the European market. You'll work closely with the sales and marketing teams to identify potential customers, understand their needs, and introduce them to our industry-specific SaaS solutions.",
    responsibilities: [
      "Proactively prospect and engage potential customers through calls, emails, and social media",
      "Qualify leads and schedule meetings for the sales team",
      "Research companies and identify key decision-makers",
      "Understand customer needs and position our solutions appropriately",
      "Maintain accurate records in our CRM system",
      "Meet or exceed monthly and quarterly targets",
      "Provide feedback to marketing and product teams based on customer interactions",
    ],
    requirements: [
      "1+ years of experience in sales development or similar role",
      "Strong communication and interpersonal skills",
      "Ability to quickly understand and articulate complex value propositions",
      "Goal-oriented mindset with a track record of meeting targets",
      "Experience with CRM systems (Salesforce preferred)",
      "Excellent organizational and time management skills",
      "Fluency in English (additional European languages a plus)",
    ],
    preferred: [
      "Experience in SaaS or B2B technology sales",
      "Knowledge of one or more of our target industries",
      "Familiarity with sales engagement platforms",
      "Understanding of solution selling methodologies",
      "Experience working in a high-growth environment",
    ],
  },
  "marketing-specialist": {
    title: "Marketing Specialist",
    location: "Gujarat, India",
    type: "Full-time",
    department: "Marketing",
    postedDate: "Posted 4 days ago",
    shortDescription:
      "Create compelling content and campaigns to drive awareness and adoption of our SaaS solutions.",
    aboutRole:
      "As a Marketing Specialist at Webmints, you'll be responsible for creating and executing marketing campaigns that drive awareness, lead generation, and customer acquisition. You'll work closely with the product, sales, and customer success teams to develop compelling content and messaging that resonates with our target audiences across different industries.",
    responsibilities: [
      "Create and manage content for various channels (blog, social media, email, etc.)",
      "Plan and execute digital marketing campaigns to generate leads",
      "Analyze campaign performance and optimize based on data",
      "Collaborate with product teams to develop messaging for new features and solutions",
      "Support event planning and execution (webinars, conferences, etc.)",
      "Maintain and update the company website and marketing materials",
      "Stay current with industry trends and competitor activities",
    ],
    requirements: [
      "2+ years of experience in B2B marketing, preferably in SaaS or technology",
      "Strong writing and content creation skills",
      "Experience with digital marketing channels and tools",
      "Data-driven approach to measuring and optimizing marketing efforts",
      "Ability to understand complex products and communicate their value clearly",
      "Excellent project management and organizational skills",
      "Proficiency with marketing automation and CRM platforms",
    ],
    preferred: [
      "Experience marketing to one or more of our target industries",
      "Knowledge of SEO and SEM best practices",
      "Graphic design skills and experience with design tools",
      "Background in product marketing or solution marketing",
      "Experience with video production and editing",
    ],
  },
  "general-application": {
    title: "General Application",
    location: "Various Locations",
    type: "Full-time / Part-time / Contract",
    department: "All Departments",
    postedDate: "Always Open",
    shortDescription:
      "Don't see the perfect role? Submit a general application and we'll consider you for future opportunities.",
    aboutRole:
      "At Webmints, we're always looking for talented individuals to join our team, even if we don't have a specific role open that matches your skills. By submitting a general application, you'll be considered for future opportunities that align with your experience and career goals. We encourage you to share your background, skills, and what type of role you're interested in.",
    responsibilities: ["Varies based on role and department"],
    requirements: [
      "Passion for technology and innovation",
      "Strong problem-solving abilities",
      "Excellent communication and collaboration skills",
      "Growth mindset and willingness to learn",
      "Alignment with our company values",
    ],
    preferred: [
      "Experience in SaaS or B2B technology",
      "Knowledge of one or more of our target industries",
      "Background in a fast-paced, high-growth environment",
    ],
  },
};

export default async function JobDetailPage({ params }) {
  const { job } = await params;

  // Check if the job exists
  if (!jobs) {
    notFound();
  }

  const jobData = jobs[job];

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Job Header Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white" />
        <div className="container relative py-16 md:py-24 mx-auto">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/careers"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Positions
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 font-grotesk">
              {jobData.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6 font-grotesk">
              <Badge variant="outline" className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {jobData.location}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Briefcase className="h-3 w-3" /> {jobData.type}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {jobData.postedDate}
              </Badge>
              {jobData.department && (
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                  {jobData.department}
                </Badge>
              )}
            </div>
            <p className="text-xl text-muted-foreground">
              {jobData.shortDescription}
            </p>
            <div className="mt-8">
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <a href="#apply-now">Apply Now</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details Section */}
      <section className="container mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4 font-grotesk">
                    About the Role
                  </h2>
                  <p className="text-muted-foreground">{jobData.aboutRole}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-grotesk">
                    Responsibilities
                  </h2>
                  <ul className="space-y-2">
                    {jobData.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4 font-grotesk">
                    Requirements
                  </h2>
                  <ul className="space-y-2">
                    {jobData.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {jobData.preferred && jobData.preferred.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4 font-grotesk">
                      Nice to Have
                    </h2>
                    <ul className="space-y-2">
                      {jobData.preferred.map((preferred, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span>{preferred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div>
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Company Benefits</CardTitle>
                  <CardDescription>
                    What we offer to our team members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Competitive salary & equity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Comprehensive health insurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Flexible work arrangements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Generous paid time off</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Professional development budget</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Remote work options</span>
                    </li>
                    {/* <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>401(k) matching</span>
                    </li> */}
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Parental leave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Team retreats and events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Inclusive and diverse work culture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Access to wellness programs</span>
                    </li>
                    {/* <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Wellness programs</span>
                    </li> */}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    <a href="#apply-now">Apply Now</a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply-now" className="bg-indigo-50 py-16 scroll-mt-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
                Apply for {jobData.title}
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ready to take the next step in your career? Fill out the form
                below to apply for this position. We look forward to reviewing
                your application!
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <JobForm jobId={job} />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 font-grotesk">
              Join Our Talent Community
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Subscribe to our talent community to receive notifications about
              new job opportunities, company updates, and insights into our work
              culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black border-0"
              />
              <Button className="bg-white text-indigo-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/60">
              We respect your privacy and will only send you relevant career
              opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
