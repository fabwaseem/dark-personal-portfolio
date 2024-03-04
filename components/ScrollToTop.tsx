"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      variant="secondary"
      size="icon"
      className={`fixed bottom-4 right-4 z-50  flex flex-col gap-0.5 group  ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300`}
    >
      <div className="w-3 h-3 border-b-[3px] border-l-[3px]  border-accent rotate-[135deg] absolute top-5 group-hover:top-2 opacity-0 group-hover:opacity-100 transition-all z-10"></div>
      <div className="w-[3px] h-5  bg-foreground rounded-full group-hover:translate-y-1 transition-transform"></div>
      <div className="w-[3px] h-[3px] bg-accent rounded-full group-hover:opacity-0 transition-opacity "></div>
    </Button>
  );
};

export default ScrollToTop;
