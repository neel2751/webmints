import {
  Heart,
  Calendar,
  Brain,
  BabyIcon as BabyCarriage,
  Lightbulb,
  Trophy,
} from "lucide-react";
import JobForm from "../[job]/jobForm";
import { Card, CardContent } from "@/components/ui/card";

export default function BenefitsAndPerks() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Benefits & Perks</h2>
      <p className="text-center mb-12">
        At Webmints, we believe in taking care of our team. We offer a range of
        benefits and perks designed to support your health, well-being, and
        professional growth. Our comprehensive benefits package includes:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
        {/* Health & Retirement */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Heart className="w-12 h-12 stroke-1" />
          </div>
          <h3 className="text-xl font-semibold mb-3 font-grotesk">
            Health & Retirement
          </h3>
          <p className="text-gray-800">
            Comprehensive health, dental, and vision insurance, plus 401(k)
            matching and financial wellness programs
          </p>
        </div>

        {/* Flexible Time-off & Company Closures */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Calendar className="w-12 h-12 stroke-1" />
          </div>
          <h3 className="text-xl font-semibold mb-3">
            Flexible Time-off & Company Closures
          </h3>
          <p className="text-gray-800">
            Prioritised work-life balance, with flexible time-off, paid holidays
            and recharge weeks
          </p>
        </div>

        {/* Mental Wellness */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Brain className="w-12 h-12 stroke-1" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Mental Wellness</h3>
          <p className="text-gray-800">
            {/* write 150 words */}
            Access to mental health resources, counselling services, and
            wellness programs to support your mental well-being
          </p>
        </div>

        {/* Family Planning */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <BabyCarriage className="w-12 h-12 stroke-1" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Family Planning</h3>
          <p className="text-gray-800">
            Generous parental leave, family planning support, and childcare
            assistance to help you balance work and family life
          </p>
        </div>

        {/* Learning & Development */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Lightbulb className="w-12 h-12 stroke-1" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Learning & Development</h3>
          <p className="text-gray-800">
            Ongoing professional development opportunities, training programs,
            and online courses to help you grow in your career
          </p>
        </div>

        {/* Perks and Stipends */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <Trophy className="w-12 h-12 stroke-1" />
          </div>
          <h3 className="text-xl font-semibold mb-3">Perks and Stipends</h3>
          <p className="text-gray-800">
            Monthly wellness stipends, home office allowances, and team-building
            activities to enhance your work experience
          </p>
        </div>
      </div>

      <p className="text-center mt-16 text-lg">And more!</p>

      {/* Application Form Section */}
      <section id="apply-now" className="py-16 scroll-mt-16">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-grotesk">
                Ready to Join Our Team?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ready to take the next step in your career? Fill out the form
                below to apply for this position. We look forward to reviewing
                your application!
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <JobForm
                  jobId={"general-application"}
                  jobTitle={"General Application"}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
