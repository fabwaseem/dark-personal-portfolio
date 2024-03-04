import { cn } from "@/lib/utils";
import React from "react";

export interface SectionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-10 md:py-20 border-t-2", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
