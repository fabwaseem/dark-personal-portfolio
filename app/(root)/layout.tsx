import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Cursor />
      {children}
      <ScrollToTop />
    </>
  );
};

export default layout;
