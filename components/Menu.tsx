"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import SocialLinks from "./SocialLinks";
import { menuLinks } from "@/lib/data";


const Menu = () => {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpened(false);
    document.documentElement.classList.remove("lock-scrollbar");
  }, [pathname]);

  const handleOpen = () => {
    if (opened) {
      setOpened(false);
      document.documentElement.classList.remove("lock-scrollbar");
    } else {
      setOpened(true);
      document.documentElement.classList.add("lock-scrollbar");
    }
  };

  return (
    <div>
      <button
        className={`absolute right-4 top-1/5 -translate-y-1/2 z-50 flex flex-col items-center justify-center gap-1.5 group  transition-all w-10 h-10
              ${opened ? "" : " "}
          `}
        onClick={handleOpen}
      >
        <div
          className={` h-[3px]  bg-foreground group-hover:opacity-0 transition-all
            ${
              opened
                ? "-translate-x-[6px] translate-y-[3px] rotate-45 w-3.5 rounded-l-full group-hover:w-8"
                : "w-8 rounded-full"
            }
          `}
        ></div>
        <div
          className={`w-8 h-[3px] flex  gap-0.5 relative transition-all
          ${opened ? "-rotate-45 group-hover:rotate-0" : ""}
        `}
        >
          <div
            className={`w-[3px] h-full rounded-full bg-accent group-hover:hidden
          `}
          ></div>
          <div
            className={` transition-[left,opacity]  w-3 h-3 border-b-2 border-l-2  border-accent absolute  top-1/2  -translate-y-1/2 opacity-0  group-hover:opacity-100
            ${
              opened
                ? "left-[10%]  -rotate-[135deg] group-hover:left-[calc(100%-12px)]"
                : " left-1/2 rotate-45 group-hover:left-0 "
            }
          `}
          ></div>
          <div
            className={`flex-1  rounded-full bg-foreground transition-all

          `}
          ></div>
        </div>
        <div
          className={`h-[3px] group-hover:opacity-0 bg-foreground transition-all
            ${
              opened
                ? "translate-x-[6px] -translate-y-[3px] rotate-45 w-3.5 rounded-r-full "
                : " rounded-full w-8"
            }
          `}
        ></div>
      </button>

      <div
        className={`fixed top-0  w-full h-full bg-white transition-all duration-500 ease-in-out
        ${opened ? "left-0" : "left-full  delay-100"}
      `}
      >
        <div
          className={`fixed top-0  w-full h-full bg-background transition-all duration-500 ease-in-out
        ${opened ? "left-0  delay-100" : "left-full"}
      `}
        >
          <div className="wrap flex items-center h-full text-left ">
            <div className="w-full">
              <div className="rounded-full w-max overflow-hidden mb-6 hidden md:block">
                <Image
                  src={"/user.jpg"}
                  alt="Waseem Anjum"
                  width={120}
                  height={120}
                />
              </div>
              <div className="w-full  gap-10 md:gap-40  flex">
                <div className="flex-1 hidden md:block">
                  <h1 className="text-[calc(1rem+1vw)] leading-[1.2] ">
                    Hi, I am Wasi! A Fullstack Developer, based in Pakistan.
                  </h1>
                  <div className="flex flex-col gap-5 mt-10 text-grey-2">
                    <p>Age - 23</p>
                    <p>
                      Phone -{" "}
                      <a
                        href="tel:+923019222435"
                        className="hover:text-foreground transition-colors"
                      >
                        +92 301 922 2435
                      </a>
                    </p>
                    <p>
                      Email -{" "}
                      <a
                        href="mailto:admin@waseemanjum.com"
                        className="hover:text-foreground transition-colors"
                      >
                        admin@waseemanjum.com
                      </a>
                    </p>
                  </div>
                  <div className="mt-10">
                    <SocialLinks />
                  </div>
                </div>
                <div className="flex-1 text-5xl md:text-[calc(1.5rem+2vw)] flex flex-col gap-8 text-grey-2">
                  {menuLinks.map((link, index) => (
                    <Link
                      key={index}
                      className={`hover:text-foreground transition-colors  max-md:text-center  text-reveal
                        ${pathname === link.link ? "text-foreground" : null}
                      `}
                      href={link.link}
                    >
                      {link.name}
                      <span >{link.hidden}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
