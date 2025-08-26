import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import ShinyText from "./animation/shiny-text";
import { Code } from "lucide-react";
import Image from "next/image";

const TabTechFeature = ({
  badge = "Features",
  heading = "Comprehensive Solution Categories",
  description = "Our SaaS solutions are categorized to address specific business needs across various domains.",
  tabs,
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-2 text-center mb-16">
          <ShinyText
            text={badge}
            className="bg-indigo-600 border border-indigo-700 text-white px-4 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-grotesk">
            {heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans -mt-3">
            {description}
          </p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 w-full">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-base font-semibold text-muted-foreground data-[state=active]:bg-indigo-600 data-[state=active]:text-white bg-gray-200 font-grotesk w-full"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-indigo-50 p-10">
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-4">
                <TabCard {...tab.content} image={tab.image} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TabTechFeature;

function TabCard({ title, description, frontendTechnologies, image }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="flex flex-col justify-center space-y-4">
        <h3 className="text-2xl font-bold font-grotesk">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        <ul className="space-y-4">
          {frontendTechnologies.map((tech, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 rounded-md bg-indigo-100 p-1">
                <Code className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-semibold font-grotesk">{tech.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative rounded-lg overflow-hidden border shadow-sm bg-white">
        <Image
          src={image || "/placeholder.svg"}
          alt="Frontend Technologies"
          width={1000}
          height={1000}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
