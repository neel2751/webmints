import Footer from "@/components/web/footer";
import { SiteHeader } from "@/components/web/site-header";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <SiteHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
