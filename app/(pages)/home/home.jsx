import Cta from "@/components/web/cta";
import Footer from "@/components/web/footer";
import Feature from "@/components/web/home/feature";
import HomeHero from "@/components/web/home/hero";
import HowItWorks from "@/components/web/home/how-it-works";
import Industry from "@/components/web/home/industry";
import KeyFeature from "@/components/web/home/key-feature";
import WhatWeOffer from "@/components/web/home/what-we-offer";
import WhyUs from "@/components/web/home/why-us";
import { SiteHeader } from "@/components/web/site-header";
// import WhatWeOffer from "@/components/web/what-we-offer";
import React from "react";

const HomePage = () => {
  return (
    <>
      <SiteHeader />
      <HomeHero />
      <KeyFeature />
      <Industry />
      <WhatWeOffer />
      <WhyUs />
      <HowItWorks />
      <Feature />
      <Cta />
      <Footer />
    </>
  );
};

export default HomePage;
