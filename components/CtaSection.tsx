import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import { Contact, Mail } from "lucide-react";

const CtaSection = () => {
  return (
    <div className="flex justify-between gap-10 flex-col md:flex-row">
      <h1 className="text-3xl md:text-[calc(1rem+2vw)] leading-[1.2] font-medium">
        Let’s <br /> Work Together -{" "}
      </h1>
      <div className="flex flex-col gap-2">
        <Button asChild variant={"secondary"} size={"lg"}>
          <Link href="mailto:admin@waseemanjum.com">
            <Mail size={15} className="mr-2" />
            admin@waseemanjum.com
          </Link>
        </Button>
        <Button
          asChild
          variant={"secondary"}
          size={"lg"}
          className="bg-[#1d6400]"
        >
          <Link href="/contact">
            <Contact size={15} className="mr-2" />
            Hire me on Upwork
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CtaSection;
