import AboutCta from "@/components/web/aboutus/about-cta";
import Fund from "@/components/web/aboutus/fund";
import AboutHero from "@/components/web/aboutus/hero";
import Story from "@/components/web/aboutus/story";
import React from "react";

const page = () => {
  return (
    <>
      <Fund />
      <AboutHero />
      <Story />
      <AboutCta />
    </>
  );
};

export default page;
