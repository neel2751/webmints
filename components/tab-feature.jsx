import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { CheckCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ShinyText from "./animation/shiny-text";

const TabFeature = ({
  badge = "Features",
  heading = "Comprehensive Solution Categories",
  description = "Our SaaS solutions are categorized to address specific business needs across various domains.",
  tabs,
}) => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white font-grotesk">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-2 text-center mb-16">
          <ShinyText
            text={badge}
            className="bg-indigo-600 border border-indigo-700 text-white px-4 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors"
          />
          <h2 className="font-bold text-black/85 mb-2 text-5xl tracking-tighter">
            {heading}
          </h2>
          <p className="text-lg font-medium leading-snug text-gray-600 mb-8 tracking-tight">
            {description}
          </p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10 w-full">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center justify-center gap-2 rounded-xl py-3 text-base font-semibold text-muted-foreground data-[state=active]:bg-indigo-600 data-[state=active]:text-white bg-gray-200 w-full"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted p-10">
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {tab.content.map((item, index) => (
                    <TabCard key={index} {...item} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default TabFeature;

function TabCard({ title, description, icon, list }) {
  return (
    <Card className="border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-md">
      <CardHeader>
        {/* <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" /> */}
        {icon}
        <CardTitle className="text-base xl:md:text-lg font-bold mt-5 tracking-tight text-gray-600 md:text-balance">
          {title}
        </CardTitle>
        <CardDescription className="text-md mt-2 font-medium tracking-tight leading-snug text-gray-500">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul class="list-disc space-y-2 list-inside mb-6 font-medium tracking-tight leading-snug text-gray-600">
          {list &&
            list.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
        </ul>
      </CardContent>
      {/* <CardFooter>
          <Link
            href="/solutions/data-protection"
            className="text-indigo-600 font-medium hover:text-indigo-800 flex items-center"
          >
            Learn more <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </CardFooter> */}
    </Card>
  );
}
