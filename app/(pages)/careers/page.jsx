import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, Clock, Search, ArrowRight } from "lucide-react";
import { BadgeAlertIcon } from "@/components/animation/currency/currency";
import CareerCta from "@/components/web/cta/career-cta";
import Benifits from "@/components/benifits";

export const metadata = {
  title: "Careers at Webmints | Join Our SaaS Development Team",
  description:
    "Explore open roles at Webmints, including remote and UK-based positions. Join a growing custom SaaS development team building real solutions for real clients.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    type: "website",
    siteName: "WebMints",
    url: "/careers",
    images: ["/opengraph-image.png"],
  },
};

export default function CareersPage() {
  return (
    <div className="flex flex-col gap-16 pb-16 font-grotesk">
      {/* Why Join Us Section */}
      <section className="container mx-auto mt-10 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-36">
          <div>
            <h1 className="font-bold text-black/85 mb-6 text-6xl tracking-tighter animate-in fade-in slide-in-from-top-4 duration-700 delay-150">
              Why Join Webmints?
            </h1>
            <p className="text-lg max-w-3xl font-medium leading-snug text-gray-600 mb-8 tracking-tight animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
              At Webmints, we are committed to building a diverse and inclusive
              team that thrives on innovation and collaboration. We believe in
              empowering our employees to reach their full potential while
              delivering exceptional value to our clients. Here are some of the
              key benefits of joining our team:
            </p>
            <div className="mx-auto grid max-w-screen-lg gap-20 md:grid-cols-2 border border-dashed p-4 rounded-lg animate-in fade-in slide-in-from-top-4 duration-700 delay-400">
              <div>
                <Image
                  src="/images/features/white-label.svg"
                  alt="Scalable Architecture"
                  width={64}
                  height={64}
                  className="shrink-0 size-8 mb-2"
                />
                <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-700">
                  Growth Opportunities
                </h3>
                <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
                  We prioritize professional development and provide ample
                  opportunities for growth through training, mentorship, and
                  career advancement paths.
                </p>
              </div>
              <div>
                <Image
                  src="/images/features/modular.svg"
                  alt="Scalable Architecture"
                  width={64}
                  height={64}
                  className="shrink-0 size-8 mb-2"
                />
                <h3 className="text-xl font-bold mb-2 tracking-tight text-gray-700">
                  Innovative Projects
                </h3>
                <p className="text-md mb-4 font-medium tracking-tight leading-snug text-gray-600">
                  Work on cutting-edge projects that leverage the latest
                  technologies to solve real-world problems across various
                  industries. We foster a culture of innovation and creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <Image
              src="/images/career/2.svg"
              alt="Talk to our experts"
              width={400}
              height={400}
              className="object-contain w-full h-auto animate-in fade-in zoom-in-95 duration-700 delay-200"
            />
          </div>
        </div>

        {/* <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-2 tracking-tighter">
            Why Join Webmints?
          </h1>
          <p className="text-lg text-gray-600 font-medium tracking-tight">
            At Webmints, we are committed to building a diverse and inclusive
            team that thrives on innovation and collaboration. We believe in
            empowering our employees to reach their full potential while
            delivering exceptional value to our clients. Here are some of the
            key benefits of joining our team:
          </p>
        </div> */}

        {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-2 rounded-full bg-indigo-50 p-2 w-fit">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-bold tracking-tight text-black/80">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-md font-medium tracking-tight leading-snug text-gray-600">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </section>

      {/* Team Culture Section */}
      <section className="py-16" style={{ backgroundColor: "#f9fafb" }}>
        <div className="container mx-auto">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tighter">
                Our Team Culture
              </h2>
              <div className="space-y-4 text-lg">
                <p className="text-lg text-gray-600 font-medium tracking-tight">
                  At Webmints, we believe that great products are built by great
                  teams. We foster a culture of collaboration, innovation, and
                  continuous learning.
                  <br />
                  <br />
                  We value diversity of thought and background, and we're
                  committed to creating an inclusive environment where everyone
                  can thrive and do their best work.
                  <br />
                  <br />
                  Our team members enjoy a flexible work environment,
                  challenging projects, and the opportunity to make a real
                  impact on the industries we serve.
                  <br />
                  Join us and be part of a team that's passionate about building
                  the future of industry-specific SaaS solutions!
                </p>
              </div>
              <div className="mt-8">
                <Link
                  className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-colors duration-300"
                  href="#open-positions"
                >
                  View Open Positions
                </Link>
              </div>
            </div>
            <Image
              src="/images/career/job.svg"
              alt="Our team collaborating"
              width={500}
              height={500}
              className="object-cover h-auto w-full animate-in fade-in zoom-in-95 duration-700 delay-200"
            />
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="container scroll-mt-16 mx-auto">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">
            Current Job Openings
          </h2>
          <p className="text-lg text-gray-600 font-medium tracking-tight">
            Explore our current job openings and find the perfect role to
            advance your career with Webmints. We're excited to hear from
            talented individuals who are passionate about making a difference.
          </p>
        </div>

        <div className="grid gap-6">
          {jobOpenings.map((job, index) => (
            <Card
              key={index}
              className="transition-all duration-200 hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-800">
                      {job.title}
                      {job.isNew && (
                        <span className="ml-2 text-xs font-medium bg-indigo-100 text-indigo-600 px-2 py-1 rounded-lg">
                          {job.isNew ? "New" : ""}
                        </span>
                      )}
                    </h3>
                    <p className="text-md font-medium tracking-tight leading-snug text-gray-600 mb-3">
                      {job.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 ">
                      <span className="text-xs text-black/70 flex items-center gap-1 font-medium border-r pr-2 border-gray-400 border-dashed">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </span>
                      <span className="text-xs text-black/70 flex items-center gap-1 font-medium border-r pr-2 border-gray-400 border-dashed">
                        <Briefcase className="h-3 w-3" /> {job.type}
                      </span>

                      {job.department && (
                        <span className="text-xs text-black/70 flex items-center gap-1 font-medium">
                          <Search className="h-3 w-3" />
                          {job.department}
                        </span>
                      )}
                      <span className="text-xs text-black/70 flex items-center gap-1 font-medium border-l pl-2 border-gray-400 border-dashed">
                        <Clock className="h-3 w-3" /> {job.postedDate}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link
                      className="inline-flex items-center border border-indigo-600 text-indigo-600 hover:bg-indigo-700 hover:text-white font-semibold px-4 py-2 rounded-md shadow-md transition-colors duration-300 group"
                      href={`/careers/${job.slug}`}
                    >
                      View Details{" "}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:mr-2 transition-all duration-200" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="flex mt-8 max-w-[1200px] items-start space-x-1.5">
            <BadgeAlertIcon size={20} className="text-black/60" />
            <div className="text-sm font-medium text-black/60 tracking-tight">
              Don't see a role that fits? We're always looking for talented
              individuals to join our team. Feel free to{" "}
              <strong>
                <Link
                  className="font-bold hover:text-indigo-900 underline underline-offset-4 transition-colors duration-200 group"
                  href="/careers/general-application"
                >
                  Submit a General Application
                  <ArrowRight
                    strokeWidth={3}
                    className="ml-0.5 h-3 w-3 inline-block group-hover:translate-x-1 transition-transform duration-200"
                  />
                </Link>
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section
        className=""
        style={{
          backgroundColor: "#f9fafb",
          padding: "2rem",
          borderRadius: "0.5rem",
        }}
      >
        <div className="container mx-auto mt-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">
              Our Recruitment Process
            </h2>
            <p className="text-lg text-gray-600 font-medium tracking-tight">
              We value transparency and efficiency in our hiring process. Here's
              what you can expect when applying for a position at Webmints.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recruitmentSteps.map((step, index) => (
              <Card
                key={index}
                className="transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600 group"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 tracking-tight text-black/80 group-hover:text-indigo-600">
                    {step.title}
                  </h3>
                  <p className="text-md font-medium tracking-tight leading-snug text-gray-600 group-hover:text-gray-800">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benifits */}
      <Benifits />

      {/* Job Alerts Section */}
      <CareerCta />
      {/* FAQ Section */}
      <section className="container py-16 mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 font-medium tracking-tight">
            Here are some common questions we receive about our hiring process,
            company culture, and career opportunities. If you have any other
            questions, feel free to reach out to our HR team.
          </p>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
            {careerFaqs.map((faq, index) => (
              <Card
                key={index}
                className="transition-all duration-200 hover:shadow-sm"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 tracking-tight text-black/75">
                    {faq.question}
                  </h3>
                  <p className="text-md font-medium tracking-tight leading-snug text-gray-500">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

// Company Benefits Data
const benefits = [
  {
    title: "Competitive Compensation",
    description:
      "We offer competitive salaries, equity options, and comprehensive benefits to attract and retain top talent.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-600"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"></path>
        <path d="M12 18v2"></path>
        <path d="M12 4v2"></path>
      </svg>
    ),
  },
  {
    title: "Flexible Work Environment",
    description:
      "Work from home, our modern offices, or a hybrid approach—we focus on results, not where you work from.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
        <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4"></path>
        <path d="M12 11v6"></path>
        <path d="M9 11v2"></path>
        <path d="M15 11v2"></path>
      </svg>
    ),
  },
  {
    title: "Health & Wellness",
    description:
      "Comprehensive health insurance, mental health support, wellness programs, and generous paid time off.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
      </svg>
    ),
  },
  {
    title: "Professional Growth",
    description:
      "Learning stipends, conference attendance, mentorship programs, and clear career advancement paths.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    ),
  },
  {
    title: "Impactful Work",
    description:
      "Work on challenging projects that solve real problems for businesses across various industries.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M12 2v4"></path>
        <path d="m6.41 6.41 2.83 2.83"></path>
        <path d="M2 12h4"></path>
        <path d="m6.41 17.59 2.83-2.83"></path>
        <path d="M12 22v-4"></path>
        <path d="m17.59 17.59-2.83-2.83"></path>
        <path d="M22 12h-4"></path>
        <path d="m17.59 6.41-2.83 2.83"></path>
      </svg>
    ),
  },
  {
    title: "Inclusive Culture",
    description:
      "We celebrate diversity and are committed to creating an environment where everyone feels valued and included.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-600"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
];

// Job Openings Data
const jobOpenings = [
  {
    title: "Senior Full Stack Developer",
    slug: "senior-full-stack-developer",
    location: "Gujarat, India",
    isNew: true,
    type: "Full-time",
    department: "Engineering",
    postedDate: "Posted 2 days ago",
    deadLine: "Application deadline: July 31, 2024",
    shortDescription:
      "We're looking for an experienced Full Stack Developer to help build and scale our industry-specific SaaS solutions.",
  },
  {
    title: "UX/UI Designer",
    slug: "ux-ui-designer",
    location: "Remote",
    type: "Full-time",
    department: "Design",
    postedDate: "Posted 1 week ago",
    shortDescription:
      "Join our design team to create intuitive and beautiful user experiences for our SaaS platform.",
  },
  {
    title: "Digital Marketing Specialist",
    slug: "digital-marketing-specialist",
    location: "Gujarat, India",
    type: "Full-time",
    department: "Marketing",
    postedDate: "Posted 3 days ago",
    shortDescription:
      " Develop and execute digital marketing strategies to drive brand awareness and lead generation for our SaaS products.",
  },
  {
    title: "DevOps Engineer",
    slug: "devops-engineer",
    location: "Gujarat, India",
    type: "Full-time",
    department: "Engineering",
    postedDate: "Posted 5 days ago",
    shortDescription:
      "Build and maintain our cloud infrastructure, CI/CD pipelines, and help scale our platform securely.",
  },
  {
    title: "Sales Development Representative",
    slug: "sales-development-representative",
    location: "London, UK",
    type: "Full-time",
    department: "Sales",
    postedDate: "Posted 1 week ago",
    shortDescription:
      "Drive new business opportunities and help expand our customer base in the European market.",
  },
  {
    title: "Marketing Specialist",
    slug: "marketing-specialist",
    location: "Gujarat, India",
    type: "Full-time",
    department: "Marketing",
    postedDate: "Posted 4 days ago",
    shortDescription:
      " Create and execute marketing campaigns to promote our SaaS solutions and engage with our target audience.",
  },
];

// Recruitment Process Steps
const recruitmentSteps = [
  {
    title: "Application Review",
    bg: "bg-indigo-50",
    description:
      "Our recruitment team carefully reviews your application, resume, and cover letter to assess your qualifications and fit for the role.",
  },
  {
    title: "Initial Screening",
    bg: "bg-indigo-100",
    description:
      "If your profile matches our requirements, we'll schedule a brief phone or video call to discuss your experience, skills, and career goals.",
  },
  {
    title: "Technical Assessment",
    bg: "bg-indigo-200",
    description:
      "Depending on the role, you may be asked to complete a technical assessment, case study, or portfolio review to demonstrate your skills.",
  },
  {
    title: "Team Interviews",
    bg: "bg-indigo-300",
    description:
      "You'll meet with potential team members and leaders for in-depth discussions about your experience and how you'd contribute to our team.",
  },
  {
    title: "Final Interview",
    bg: "bg-indigo-400",
    description:
      "The final stage typically involves a conversation with a senior leader or department head to ensure alignment with our company vision and values.",
  },
  {
    title: "Offer & Onboarding",
    bg: "bg-indigo-500",
    description:
      "If selected, you'll receive a competitive offer. Once accepted, our comprehensive onboarding program will help you hit the ground running.",
  },
];

// Career FAQs Data
const careerFaqs = [
  {
    question: "What is the interview process like?",
    answer:
      "Our interview process typically includes an initial screening call, a technical or skills assessment, team interviews, and a final interview with leadership. The entire process usually takes 2-3 weeks, and we strive to provide feedback at each stage.",
  },
  {
    question: "Do you offer relocation assistance?",
    answer:
      "Yes, for certain roles we offer relocation assistance packages. This is determined on a case-by-case basis and will be discussed during the interview process if applicable to your situation.",
  },
  {
    question: "What is your remote work policy?",
    answer:
      "We offer flexible work arrangements including fully remote, hybrid, and in-office options depending on the role and team. We believe in focusing on results rather than where the work happens, while ensuring effective collaboration.",
  },
  {
    question: "How do you support professional development?",
    answer:
      "We provide annual learning stipends, access to online learning platforms, internal mentorship programs, and opportunities to attend industry conferences. We also encourage internal mobility and career growth through regular performance discussions.",
  },
  {
    question: "What benefits do you offer?",
    answer:
      "Our comprehensive benefits package includes health, dental, and vision insurance, 401(k) matching, generous PTO, parental leave, mental health resources, wellness programs, and equity options. Benefits may vary by location.",
  },
  {
    question: "How do you ensure diversity and inclusion?",
    answer:
      "We are committed to building a diverse and inclusive workplace. We actively seek diverse candidates, provide unconscious bias training, and have employee resource groups to support underrepresented communities within our team.",
  },
];
