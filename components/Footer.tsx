import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="border-t-2">
      <div className="wrap h-32 flex justify-between items-center">
        <p className="text-sm text-grey-2">
          © {new Date().getFullYear()} all rights reseved.{" "}
        </p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
