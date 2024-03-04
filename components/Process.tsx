"use client";
import { processSteps } from "@/lib/data";
import React from "react";

const Process = () => {
  // dynamic refs of div for the connecting lines between the circles in the process
  const refs = processSteps.map(() => React.createRef<HTMLDivElement>());

  return (
    <div className="mt-10 md:text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {processSteps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-1 gap-0 md:gap-4 items-center flex-col max-sm:-mt-10
            ${
              index % 2 !== 0
                ? "sm:mt-32 lg:mt-52 lg:flex-col-reverse max-md:items-end max-md:text-end "
                : "max-md:items-start "
            }
          `}
        >
          <p className="text-grey-2 text-pretty max-w-60">{step.description}</p>
          <h4 className="text-xl ">{step.title}</h4>
          <div className="w-12 h-12 border rounded-full flex items-center justify-center" ref={refs[index]}>
            <step.icon  />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
