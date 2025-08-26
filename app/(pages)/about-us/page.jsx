import { FeaturesSection } from "@/components/feature-section";
import Fund from "@/components/web/aboutus/fund";
import AboutHero from "@/components/web/aboutus/hero";
import Story from "@/components/web/aboutus/story";

const page = () => {
  return (
    <>
      <Fund />
      <AboutHero />
      <Story />
      <FeaturesSection />
    </>
  );
};

export default page;
