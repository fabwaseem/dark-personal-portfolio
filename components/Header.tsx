import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Header = () => {
  return (
    <div className="wrap h-32 flex justify-between items-center absolute w-full top-0 left-0 right-0 text-center z-50">
      <Link href={"/"} className="text-3xl font-semibold  z-50">
        Wasi <span className="text-accent">.</span>
      </Link>
      <Menu />
    </div>
  );
};

export default Header;
