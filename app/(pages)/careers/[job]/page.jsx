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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Briefcase,
  Clock,
  ArrowLeft,
  Upload,
  Check,
  ArrowRight,
} from "lucide-react";

// Job data
const jobs = {
  "senior-full-stack-developer": {
    title: "Senior Full Stack Developer",
    location: "San Francisco, CA (Remote Option)",
    type: "Full-time",
    department: "Engineering",
    postedDate: "Posted 2 days ago",
    shortDescription:
      "We're looking for an experienced Full Stack Developer to help build and scale our industry-specific SaaS solutions.",
    aboutRole:
      "As a Senior Full Stack Developer at SaaSify, you'll be responsible for designing, developing, and maintaining our industry-specific SaaS solutions. You'll work closely with product managers, designers, and other developers to build high-quality, scalable, and maintainable software that solves real business problems for our customers.",
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
      "5+ years of experience in full stack development",
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
    location: "Remote",
    type: "Full-time",
    department: "Design",
    postedDate: "Posted 1 week ago",
    shortDescription:
      "Join our design team to create intuitive and beautiful user experiences for our SaaS platform.",
    aboutRole:
      "As a UX/UI Designer at SaaSify, you'll be responsible for creating intuitive, engaging, and accessible user experiences for our industry-specific SaaS solutions. You'll collaborate with product managers, developers, and other designers to ensure our products are not only visually appealing but also highly functional and user-friendly.",
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
  "product-manager": {
    title: "Product Manager",
    location: "New York, NY",
    type: "Full-time",
    department: "Product",
    postedDate: "Posted 3 days ago",
    shortDescription:
      "Help shape the future of our products by leading cross-functional teams and driving product strategy.",
    aboutRole:
      "As a Product Manager at SaaSify, you'll be responsible for defining and executing the product strategy for one or more of our industry-specific SaaS solutions. You'll work closely with customers, stakeholders, and cross-functional teams to identify opportunities, prioritize features, and deliver products that solve real business problems.",
    responsibilities: [
      "Define and communicate product vision, strategy, and roadmap",
      "Gather and analyze customer feedback to identify pain points and opportunities",
      "Write detailed product requirements and user stories",
      "Collaborate with design and engineering teams to deliver high-quality products",
      "Prioritize features and capabilities based on business goals and user needs",
      "Monitor product performance and make data-driven decisions",
      "Present product plans and progress to stakeholders and leadership",
    ],
    requirements: [
      "3+ years of experience in product management, preferably in SaaS",
      "Strong analytical and problem-solving skills",
      "Excellent communication and presentation abilities",
      "Experience working with agile development methodologies",
      "Ability to translate business requirements into product features",
      "Understanding of UX design principles and software development processes",
      "Data-driven approach to decision making",
    ],
    preferred: [
      "Experience in one or more of our target industries (Enterprise, E-commerce, Fintech, Healthcare, Construction)",
      "Technical background or experience working closely with engineering teams",
      "MBA or relevant advanced degree",
      "Experience with product analytics tools",
      "Background in customer research and user testing",
    ],
  },
  "devops-engineer": {
    title: "DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    postedDate: "Posted 5 days ago",
    shortDescription:
      "Build and maintain our cloud infrastructure, CI/CD pipelines, and help scale our platform securely.",
    aboutRole:
      "As a DevOps Engineer at SaaSify, you'll be responsible for building and maintaining our cloud infrastructure, implementing CI/CD pipelines, and ensuring the reliability, security, and scalability of our platform. You'll work closely with development teams to streamline deployment processes and optimize system performance.",
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
    location: "London, UK",
    type: "Full-time",
    department: "Sales",
    postedDate: "Posted 1 week ago",
    shortDescription:
      "Drive new business opportunities and help expand our customer base in the European market.",
    aboutRole:
      "As a Sales Development Representative at SaaSify, you'll be responsible for generating and qualifying new business opportunities in the European market. You'll work closely with the sales and marketing teams to identify potential customers, understand their needs, and introduce them to our industry-specific SaaS solutions.",
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
  "customer-success-manager": {
    title: "Customer Success Manager",
    location: "Remote",
    type: "Full-time",
    department: "Customer Success",
    postedDate: "Posted 2 weeks ago",
    shortDescription:
      "Ensure our customers achieve their goals with our platform and drive long-term customer satisfaction.",
    aboutRole:
      "As a Customer Success Manager at SaaSify, you'll be responsible for ensuring our customers achieve their desired outcomes with our platform. You'll build strong relationships with customers, understand their business goals, and help them maximize the value of our solutions, ultimately driving retention and growth.",
    responsibilities: [
      "Serve as the primary point of contact for a portfolio of customers",
      "Develop and execute customer success plans aligned with customer goals",
      "Conduct regular check-ins and business reviews with customers",
      "Monitor customer health metrics and proactively address potential issues",
      "Drive product adoption and usage through training and best practice sharing",
      "Identify upsell and cross-sell opportunities within existing accounts",
      "Collaborate with product, support, and sales teams to ensure customer satisfaction",
    ],
    requirements: [
      "3+ years of experience in customer success, account management, or similar roles",
      "Strong relationship-building and communication skills",
      "Experience working with SaaS products and understanding of the customer lifecycle",
      "Ability to understand customer business needs and translate them into solutions",
      "Data-driven approach to measuring and improving customer success",
      "Problem-solving skills and ability to navigate complex customer situations",
      "Experience with customer success tools and CRM systems",
    ],
    preferred: [
      "Experience in one or more of our target industries",
      "Background in implementation or onboarding of SaaS solutions",
      "Knowledge of customer success methodologies and best practices",
      "Experience with customer health scoring and predictive analytics",
      "History of driving revenue growth through existing customers",
    ],
  },
  "marketing-specialist": {
    title: "Marketing Specialist",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Marketing",
    postedDate: "Posted 4 days ago",
    shortDescription:
      "Create compelling content and campaigns to drive awareness and adoption of our SaaS solutions.",
    aboutRole:
      "As a Marketing Specialist at SaaSify, you'll be responsible for creating and executing marketing campaigns that drive awareness, lead generation, and customer acquisition. You'll work closely with the product, sales, and customer success teams to develop compelling content and messaging that resonates with our target audiences across different industries.",
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
      "At SaaSify, we're always looking for talented individuals to join our team, even if we don't have a specific role open that matches your skills. By submitting a general application, you'll be considered for future opportunities that align with your experience and career goals. We encourage you to share your background, skills, and what type of role you're interested in.",
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

export default function JobDetailPage({ params }) {
  const { job } = params;

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
          <div className="mx-auto max-w-4xl">
            <Link
              href="/careers"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Positions
            </Link>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              {jobData.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
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
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About the Role</h2>
                  <p className="text-muted-foreground">{jobData.aboutRole}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Responsibilities</h2>
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
                  <h2 className="text-2xl font-bold mb-4">Requirements</h2>
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
                    <h2 className="text-2xl font-bold mb-4">Nice to Have</h2>
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
                      <span>401(k) matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Parental leave</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Wellness programs</span>
                    </li>
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
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Apply for {jobData.title}
              </h2>
              <p className="mt-4 text-muted-foreground">
                Please fill out the form below to apply for this position. We'll
                review your application and get back to you as soon as possible.
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-8">
                  <div className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name *</Label>
                        <Input id="first-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name *</Label>
                        <Input id="last-name" required />
                      </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Current Location</Label>
                      <Input
                        id="location"
                        placeholder="City, State/Province, Country"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedin">
                        LinkedIn Profile (Optional)
                      </Label>
                      <Input
                        id="linkedin"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="portfolio">
                        Portfolio/Website (Optional)
                      </Label>
                      <Input
                        id="portfolio"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Resume/CV *</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="resume-upload"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, DOCX or RTF (MAX. 5MB)
                            </p>
                          </div>
                          <input
                            id="resume-upload"
                            type="file"
                            className="hidden"
                            required
                          />
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Cover Letter (Optional)</Label>
                      <div className="flex items-center justify-center w-full">
                        <label
                          htmlFor="cover-letter-upload"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 border-gray-300"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-gray-500" />
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">
                                Click to upload
                              </span>{" "}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, DOCX or RTF (MAX. 5MB)
                            </p>
                          </div>
                          <input
                            id="cover-letter-upload"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="additional-info">
                        Additional Information (Optional)
                      </Label>
                      <Textarea
                        id="additional-info"
                        placeholder="Share anything else you'd like us to know about you or your application"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="privacy-policy"
                          className="mt-1 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          required
                        />
                        <Label htmlFor="privacy-policy" className="font-normal">
                          I have read and agree to the{" "}
                          <Link
                            href="/privacy"
                            className="text-indigo-600 hover:underline"
                          >
                            Privacy Policy
                          </Link>{" "}
                          and consent to the processing of my personal data. *
                        </Label>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Positions Section */}
      <section className="container mx-auto">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">Similar Positions</h2>
          <div className="grid gap-6">
            {Object.entries(jobs)
              .filter(
                ([key, value]) =>
                  key !== job && value.department === jobData.department
              )
              .slice(0, 3)
              .map(([key, value]) => (
                <Card
                  key={key}
                  className="transition-all duration-200 hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">
                          {value.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <MapPin className="h-3 w-3" /> {value.location}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1"
                          >
                            <Briefcase className="h-3 w-3" /> {value.type}
                          </Badge>
                          {value.department && (
                            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                              {value.department}
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground">
                          {value.shortDescription}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Button
                          asChild
                          variant="outline"
                          className="border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                        >
                          <Link href={`/careers/${key}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Join Our Talent Community
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Stay updated on new opportunities and company news by joining our
              talent community.
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
